import { env } from "cloudflare:workers";
import { billingConfig, paypalReady } from "../../../billing-config";
import { getPaypalSubscription, validatePaypalPayment, validatePaypalSubscription, verifyPaypalWebhook } from "../../../paypal-server";
import {
  applyPaypalSubscriptionLifecycle,
  finishWebhook,
  markWebhookReceived,
  recordPaypalPayment,
  subscriptionByPaypalId,
  type PaymentStatus,
  type SubscriptionStatus,
} from "../../../../db/billing";
import { cancelUnclaimedPurchase, getPurchaseClaim, recordVerifiedPurchase, updatePurchaseLifecycle } from "../../../../db/purchase-claims";
import { validatePaypalOwnedSubscription } from "../../../guest-purchase-verification";

export const dynamic = "force-dynamic";

type PaypalEvent = { id?: unknown; event_type?: unknown; create_time?: unknown; resource?: Record<string, unknown> };
const statusByEvent: Record<string, SubscriptionStatus> = {
  "BILLING.SUBSCRIPTION.CREATED": "APPROVAL_PENDING",
  "BILLING.SUBSCRIPTION.ACTIVATED": "ACTIVE",
  "BILLING.SUBSCRIPTION.UPDATED": "APPROVED",
  "BILLING.SUBSCRIPTION.CANCELLED": "CANCELLED",
  "BILLING.SUBSCRIPTION.SUSPENDED": "SUSPENDED",
  "BILLING.SUBSCRIPTION.EXPIRED": "EXPIRED",
  "BILLING.SUBSCRIPTION.PAYMENT.FAILED": "SUSPENDED",
};
const paymentByEvent: Record<string, PaymentStatus> = {
  "PAYMENT.SALE.COMPLETED": "COMPLETED",
  "PAYMENT.SALE.REFUNDED": "REFUNDED",
  "PAYMENT.SALE.REVERSED": "REVERSED",
};

function seconds(value: unknown) {
  if (typeof value !== "string") return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? Math.floor(parsed / 1000) : null;
}

function subscriptionId(event: PaypalEvent) {
  const resource = event.resource || {};
  const candidates = [resource.billing_agreement_id, resource.subscription_id,
    event.event_type?.toString().startsWith("BILLING.SUBSCRIPTION.") ? resource.id : null];
  return candidates.find((value): value is string => typeof value === "string" && value.length > 0) || null;
}

function paymentId(event: PaypalEvent) {
  const resource = event.resource || {};
  const candidates = [resource.sale_id, resource.parent_payment, resource.id];
  return candidates.find((value): value is string => typeof value === "string" && value.length > 0) || null;
}

function paymentMoney(event: PaypalEvent) {
  const resource = event.resource || {};
  const amount = resource.amount && typeof resource.amount === "object" ? resource.amount as Record<string, unknown> : {};
  const breakdown = resource.amount_with_breakdown && typeof resource.amount_with_breakdown === "object"
    ? resource.amount_with_breakdown as Record<string, unknown> : {};
  const gross = breakdown.gross_amount && typeof breakdown.gross_amount === "object"
    ? breakdown.gross_amount as Record<string, unknown> : {};
  return {
    value: typeof amount.total === "string" ? amount.total : gross.value,
    currency_code: typeof amount.currency === "string" ? amount.currency : gross.currency_code,
  };
}

function cents(value: unknown) {
  if (typeof value !== "string" || !/^\d+(?:\.\d{1,2})?$/.test(value)) return null;
  const [whole, fraction = ""] = value.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > 300000) return new Response("payload too large", { status: 413 });
  let event: PaypalEvent;
  try { event = JSON.parse(raw) as PaypalEvent; } catch { return new Response("invalid payload", { status: 400 }); }
  const eventId = typeof event.id === "string" ? event.id : "";
  const eventType = typeof event.event_type === "string" ? event.event_type : "";
  if (!eventId || !eventType) return new Response("invalid event", { status: 400 });
  const config = billingConfig(env);
  if (!paypalReady(config)) return new Response("billing unavailable", { status: 503 });
  if (!(await verifyPaypalWebhook(config, request, event))) return new Response("invalid signature", { status: 401 });
  const providerSubscriptionId = subscriptionId(event);
  if (!(await markWebhookReceived(env.DB, config.paypalEnv, eventId, eventType, providerSubscriptionId))) {
    return Response.json({ ok: true, duplicate: true });
  }
  try {
    const lifecycle = statusByEvent[eventType];
    const payment = paymentByEvent[eventType];
    if (!providerSubscriptionId || (!lifecycle && !payment)) {
      await finishWebhook(env.DB, config.paypalEnv, eventId, "ignored");
      return Response.json({ ok: true });
    }
    const local = await subscriptionByPaypalId(env.DB, providerSubscriptionId, config.paypalEnv);
    const provider = await getPaypalSubscription(config, providerSubscriptionId);
    if (!local) {
      const claim = typeof provider.custom_id === "string" ? await getPurchaseClaim(env.DB, provider.custom_id) : null;
      if (!claim || claim.provider !== "paypal" || claim.environment !== config.paypalEnv ||
          claim.providerSubscriptionId !== providerSubscriptionId ||
          !validatePaypalSubscription(provider, { subscriptionId: providerSubscriptionId, userId: claim.claimId, config })) {
        throw new Error("paypal_subscription_unknown");
      }
      if (lifecycle) {
        await updatePurchaseLifecycle(env.DB, claim.claimId, String(provider.status || lifecycle));
      } else if (payment) {
        const money = paymentMoney(event);
        const providerPaymentId = paymentId(event);
        if (!providerPaymentId || !validatePaypalPayment(money, config)) throw new Error("paypal_payment_mismatch");
        if (payment === "COMPLETED") {
          const email = provider.subscriber?.email_address;
          const paidThrough = seconds(provider.billing_info?.next_billing_time);
          if (typeof email !== "string" || !paidThrough) throw new Error("paypal_subscriber_unverified");
          await recordVerifiedPurchase(env.DB, claim.claimId, "paypal", {
            subscriptionId: providerSubscriptionId, paymentId: providerPaymentId,
            customerId: typeof provider.subscriber?.payer_id === "string" ? provider.subscriber.payer_id : null,
            email, amountCents: cents(money.value) || 0, currency: String(money.currency_code || ""),
            paidAt: seconds(event.create_time) ?? Math.floor(Date.now() / 1000), paidThrough,
            eventId, providerStatus: typeof provider.status === "string" ? provider.status : "ACTIVE",
          });
        } else {
          await cancelUnclaimedPurchase(env.DB, claim.claimId, providerPaymentId);
        }
      }
      await finishWebhook(env.DB, config.paypalEnv, eventId, "processed");
      return Response.json({ ok: true });
    }
    if (!(await validatePaypalOwnedSubscription(env.DB, provider, {
      subscriptionId: providerSubscriptionId, userId: local.userId, config,
    }))) throw new Error("paypal_subscription_mismatch");

    const eventTime = seconds(event.create_time) ?? Math.floor(Date.now() / 1000);
    if (lifecycle) {
      const status = typeof provider.status === "string" && [
        "APPROVAL_PENDING", "APPROVED", "ACTIVE", "SUSPENDED", "CANCELLED", "EXPIRED",
      ].includes(provider.status) ? provider.status as SubscriptionStatus : lifecycle;
      await applyPaypalSubscriptionLifecycle(env.DB, config.paypalEnv, providerSubscriptionId, {
        status,
        subscriberId: typeof provider.subscriber?.payer_id === "string" ? provider.subscriber.payer_id : null,
        nextBillingTime: provider.billing_info?.next_billing_time,
        eventType,
        occurredAt: eventTime,
      });
    } else if (payment) {
      const money = paymentMoney(event);
      const providerPaymentId = paymentId(event);
      if (!providerPaymentId || !validatePaypalPayment(money, config)) throw new Error("paypal_payment_mismatch");
      const paidThrough = seconds(provider.billing_info?.next_billing_time);
      await recordPaypalPayment(env.DB, {
        environment: config.paypalEnv,
        paypalSubscriptionId: providerSubscriptionId,
        providerPaymentId,
        providerEventId: eventId,
        amountCents: cents(money.value) || 0,
        currency: String(money.currency_code || ""),
        status: payment,
        occurredAt: eventTime,
        paidThrough,
      }, config);
    }
    await finishWebhook(env.DB, config.paypalEnv, eventId, "processed");
    return Response.json({ ok: true });
  } catch (error) {
    const code = error instanceof Error ? error.message : "processing_failed";
    await finishWebhook(env.DB, config.paypalEnv, eventId, "failed", code.slice(0, 80)).catch(() => undefined);
    console.error("paypal_webhook_processing_failed", { eventId, eventType, code: code.slice(0, 80) });
    return new Response("processing failed", { status: 500 });
  }
}
