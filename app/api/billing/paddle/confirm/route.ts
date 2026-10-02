import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../../access-policy";
import { billingConfig } from "../../../../billing-config";
import { paddleConfig, paddleReady } from "../../../../paddle-config";
import {
  paddleCompletedPayment,
  getPaddleSubscription,
  getPaddleTransaction,
  validatePaddleSubscription,
  validatePaddleTransaction,
} from "../../../../paddle-server";
import { recordPaddleCompletedPayment, upsertPaddleSubscription } from "../../../../../db/paddle-billing";
import { authorizePurchaseClaim } from "../../../../purchase-claim-cookie";
import { verifyGuestPaddlePayment } from "../../../../guest-purchase-verification";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json({ error: "Origen no válido." }, { status: 403 });
  }
  const userId = accountIdFromHeaders(request.headers);

  const raw = await request.text();
  let transactionId = "";
  try {
    const parsed = JSON.parse(raw) as { transactionId?: unknown };
    if (typeof parsed.transactionId === "string") transactionId = parsed.transactionId;
  } catch {
    return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  }
  if (!/^txn_[a-z0-9]{26}$/.test(transactionId)) {
    return Response.json({ error: "Transacción no válida." }, { status: 400 });
  }

  const paddle = paddleConfig(env);
  const billing = billingConfig(env);
  if (!paddleReady(paddle) || billing.paypalEnv !== "live") {
    return Response.json({ error: "Paddle no está disponible." }, { status: 503 });
  }

  if (!userId) {
    const claim = await authorizePurchaseClaim(env.DB, request.headers.get("cookie"), "paddle");
    if (!claim || claim.provider !== "paddle" || claim.providerPaymentId !== transactionId ||
        claim.offerCode !== billing.founderOffer.code) {
      return Response.json({ error: "No encontramos este pago en el navegador." }, { status: 404 });
    }
    try {
      const paid = await verifyGuestPaddlePayment(env.DB, paddle, claim, transactionId);
      if (paid) return Response.json({ pending: false, paymentConfirmed: true }, { headers: { "cache-control": "private, no-store" } });
    } catch { /* Provider verification can finish on a later retry or signed webhook. */ }
    return Response.json({ pending: true, paymentConfirmed: false }, { status: 202 });
  }

  try {
    const transaction = await getPaddleTransaction(paddle, transactionId);
    if (transaction.status !== "completed" || !validatePaddleTransaction(transaction, paddle, userId)) {
      return Response.json({ pending: true, accessConfirmed: false }, { status: 202 });
    }
    const subscriptionId = typeof transaction.subscription_id === "string" ? transaction.subscription_id : "";
    if (!/^sub_[a-z0-9]{26}$/.test(subscriptionId)) {
      return Response.json({ pending: true, accessConfirmed: false }, { status: 202 });
    }
    const subscription = await getPaddleSubscription(paddle, subscriptionId);
    if (!validatePaddleSubscription(subscription, paddle, userId)) {
      return Response.json({ error: "La suscripción no coincide con tu cuenta." }, { status: 409 });
    }
    const payment = paddleCompletedPayment(transaction, subscription, paddle);
    const occurredAt = Math.floor(Date.now() / 1000);
    if (!payment) return Response.json({ pending: true, accessConfirmed: false }, { status: 202 });

    await upsertPaddleSubscription(env.DB, {
      userId,
      subscriptionId,
      customerId: typeof subscription.customer_id === "string" ? subscription.customer_id : null,
      priceId: payment.priceId,
      offerCode: billing.founderOffer.code,
      status: subscription.status === "canceled" ? "CANCELLED" : ["paused", "past_due"].includes(String(subscription.status)) ? "SUSPENDED" : "ACTIVE",
      nextBillingTime: subscription.next_billed_at,
      occurredAt,
    });
    await recordPaddleCompletedPayment(env.DB, {
      userId,
      subscriptionId,
      transactionId,
      ...payment,
      occurredAt,
    }, billing);

    return Response.json(
      { pending: false, accessConfirmed: true, subscriptionId },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch {
    return Response.json({ pending: true, accessConfirmed: false }, { status: 202 });
  }
}
