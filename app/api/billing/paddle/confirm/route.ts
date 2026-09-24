import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../../access-policy";
import { billingConfig } from "../../../../billing-config";
import { paddleConfig, paddleReady } from "../../../../paddle-config";
import {
  getPaddleSubscription,
  getPaddleTransaction,
  validatePaddleSubscription,
  validatePaddleTransaction,
} from "../../../../paddle-server";
import { recordPaddleCompletedPayment, upsertPaddleSubscription } from "../../../../../db/paddle-billing";

export const dynamic = "force-dynamic";

function seconds(value: unknown) {
  if (typeof value !== "string") return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? Math.floor(parsed / 1000) : null;
}

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json({ error: "Origen no válido." }, { status: 403 });
  }
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión para continuar." }, { status: 401 });

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
    const paidThrough = seconds(subscription.current_billing_period?.ends_at);
    const occurredAt = Math.floor(Date.now() / 1000);
    const amountCents = Number(transaction.details?.totals?.total);
    const currency = typeof transaction.currency_code === "string" ? transaction.currency_code : "";
    if (!paidThrough || !Number.isInteger(amountCents) || amountCents <= 0 || !currency) {
      return Response.json({ pending: true, accessConfirmed: false }, { status: 202 });
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
      amountCents,
      currency,
      occurredAt,
      paidThrough,
    }, billing);

    return Response.json(
      { pending: false, accessConfirmed: true, subscriptionId },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch {
    return Response.json({ pending: true, accessConfirmed: false }, { status: 202 });
  }
}
