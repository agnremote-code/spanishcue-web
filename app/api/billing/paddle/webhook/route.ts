import { env } from "cloudflare:workers";
import { billingConfig } from "../../../../billing-config";
import { paddleConfig, paddleReady } from "../../../../paddle-config";
import {
  getPaddleSubscription,
  validatePaddleSubscription,
  verifyPaddleWebhook,
  type PaddleSubscription,
  type PaddleTransaction,
} from "../../../../paddle-server";
import {
  applyPaddleLifecycle,
  finishPaddleWebhook,
  markPaddleWebhookReceived,
  recordPaddleCompletedPayment,
  upsertPaddleSubscription,
} from "../../../../../db/paddle-billing";
import type { SubscriptionStatus } from "../../../../../db/billing";

export const dynamic = "force-dynamic";

type PaddleEvent = {
  event_id?: unknown;
  event_type?: unknown;
  occurred_at?: unknown;
  data?: Record<string, unknown>;
};

function seconds(value: unknown) {
  if (typeof value !== "string") return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? Math.floor(parsed / 1000) : null;
}

function subscriptionStatus(value: unknown): SubscriptionStatus {
  if (value === "active") return "ACTIVE";
  if (value === "paused" || value === "past_due") return "SUSPENDED";
  if (value === "canceled") return "CANCELLED";
  return "APPROVAL_PENDING";
}

function customUserId(subscription: PaddleSubscription) {
  const custom = subscription.custom_data && typeof subscription.custom_data === "object"
    ? subscription.custom_data as Record<string, unknown>
    : {};
  return typeof custom.spanishcue_user_id === "string" ? custom.spanishcue_user_id : "";
}

function validTransactionPrice(transaction: PaddleTransaction, priceId: string) {
  const item = Array.isArray(transaction.items) && transaction.items.length === 1 ? transaction.items[0] : null;
  return Boolean(
    item
    && item.quantity === 1
    && item.price?.id === priceId
    && item.price?.unit_price?.amount === "1500"
    && item.price?.unit_price?.currency_code === "USD"
    && item.price?.billing_cycle?.interval === "month"
    && item.price?.billing_cycle?.frequency === 1
    && item.price?.trial_period == null
  );
}

export async function POST(request: Request) {
  const paddle = paddleConfig(env);
  const billing = billingConfig(env);
  if (!paddleReady(paddle) || billing.paypalEnv !== "live") {
    return new Response("billing unavailable", { status: 503 });
  }

  const raw = await request.text();
  if (!(await verifyPaddleWebhook(paddle, raw, request.headers.get("paddle-signature")))) {
    return new Response("invalid signature", { status: 401 });
  }

  let event: PaddleEvent;
  try {
    event = JSON.parse(raw) as PaddleEvent;
  } catch {
    return new Response("invalid payload", { status: 400 });
  }
  const eventId = typeof event.event_id === "string" ? event.event_id : "";
  const eventType = typeof event.event_type === "string" ? event.event_type : "";
  const data = event.data || {};
  if (!eventId || !eventType) return new Response("invalid payload", { status: 400 });

  const resourceId = typeof data.id === "string"
    ? data.id
    : typeof data.subscription_id === "string"
      ? data.subscription_id
      : null;

  if (!(await markPaddleWebhookReceived(env.DB, eventId, eventType, resourceId))) {
    return Response.json({ ok: true, duplicate: true });
  }

  try {
    const occurredAt = seconds(event.occurred_at) ?? Math.floor(Date.now() / 1000);

    if (eventType === "transaction.completed") {
      const transaction = data as unknown as PaddleTransaction;
      const subscriptionId = typeof transaction.subscription_id === "string" ? transaction.subscription_id : "";
      if (!subscriptionId || !validTransactionPrice(transaction, paddle.priceId)) {
        throw new Error("paddle_transaction_mismatch");
      }
      const subscription = await getPaddleSubscription(paddle, subscriptionId);
      const userId = customUserId(subscription);
      if (!userId || !validatePaddleSubscription(subscription, paddle, userId)) {
        throw new Error("paddle_subscription_mismatch");
      }
      const paidThrough = seconds(subscription.current_billing_period?.ends_at);
      const amountCents = Number(transaction.details?.totals?.total);
      const currency = typeof transaction.currency_code === "string" ? transaction.currency_code : "";
      const transactionId = typeof transaction.id === "string" ? transaction.id : "";
      if (!paidThrough || !transactionId || !Number.isInteger(amountCents) || amountCents <= 0 || !currency) {
        throw new Error("paddle_payment_mismatch");
      }

      await upsertPaddleSubscription(env.DB, {
        userId,
        subscriptionId,
        customerId: typeof subscription.customer_id === "string" ? subscription.customer_id : null,
        priceId: paddle.priceId,
        offerCode: billing.founderOffer.code,
        status: "ACTIVE",
        nextBillingTime: subscription.next_billed_at,
        occurredAt,
      });
      await recordPaddleCompletedPayment(env.DB, {
        userId,
        subscriptionId,
        transactionId,
        eventId,
        amountCents,
        currency,
        occurredAt,
        paidThrough,
      }, billing);
      await finishPaddleWebhook(env.DB, eventId, "processed");
      return Response.json({ ok: true });
    }

    if (eventType === "subscription.created" || eventType === "subscription.updated" || eventType === "subscription.canceled") {
      const subscription = data as unknown as PaddleSubscription;
      const subscriptionId = typeof subscription.id === "string" ? subscription.id : "";
      const userId = customUserId(subscription);
      if (!subscriptionId || !userId || !validatePaddleSubscription(subscription, paddle, userId)) {
        throw new Error("paddle_subscription_mismatch");
      }
      const status = eventType === "subscription.canceled" ? "CANCELLED" : subscriptionStatus(subscription.status);
      const existing = await upsertPaddleSubscription(env.DB, {
        userId,
        subscriptionId,
        customerId: typeof subscription.customer_id === "string" ? subscription.customer_id : null,
        priceId: paddle.priceId,
        offerCode: billing.founderOffer.code,
        status,
        nextBillingTime: subscription.next_billed_at,
        occurredAt,
      });
      if (existing && (status === "SUSPENDED" || status === "CANCELLED")) {
        await applyPaddleLifecycle(env.DB, subscriptionId, {
          status,
          customerId: typeof subscription.customer_id === "string" ? subscription.customer_id : null,
          nextBillingTime: subscription.next_billed_at,
          occurredAt,
        });
      }
      await finishPaddleWebhook(env.DB, eventId, "processed");
      return Response.json({ ok: true });
    }

    if (eventType === "transaction.payment_failed") {
      const transaction = data as unknown as PaddleTransaction;
      const subscriptionId = typeof transaction.subscription_id === "string" ? transaction.subscription_id : "";
      if (subscriptionId) {
        const subscription = await getPaddleSubscription(paddle, subscriptionId);
        const userId = customUserId(subscription);
        if (userId && validatePaddleSubscription(subscription, paddle, userId)) {
          await upsertPaddleSubscription(env.DB, {
            userId,
            subscriptionId,
            customerId: typeof subscription.customer_id === "string" ? subscription.customer_id : null,
            priceId: paddle.priceId,
            offerCode: billing.founderOffer.code,
            status: "SUSPENDED",
            nextBillingTime: subscription.next_billed_at,
            occurredAt,
          });
          await applyPaddleLifecycle(env.DB, subscriptionId, {
            status: "SUSPENDED",
            customerId: typeof subscription.customer_id === "string" ? subscription.customer_id : null,
            nextBillingTime: subscription.next_billed_at,
            occurredAt,
            paymentFailed: true,
          });
        }
      }
      await finishPaddleWebhook(env.DB, eventId, "processed");
      return Response.json({ ok: true });
    }

    await finishPaddleWebhook(env.DB, eventId, "ignored");
    return Response.json({ ok: true });
  } catch (error) {
    const code = error instanceof Error ? error.message : "processing_failed";
    await finishPaddleWebhook(env.DB, eventId, "failed", code.slice(0, 80)).catch(() => undefined);
    console.error("paddle_webhook_processing_failed", { eventId, eventType, code: code.slice(0, 80) });
    return new Response("processing failed", { status: 500 });
  }
}
