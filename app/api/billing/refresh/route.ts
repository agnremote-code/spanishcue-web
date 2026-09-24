import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../access-policy";
import { billingConfig, paypalReady } from "../../../billing-config";
import {
  getPaypalSubscription,
  getPaypalSubscriptionTransactions,
  validatePaypalPayment,
} from "../../../paypal-server";
import { validatePaypalOwnedSubscription } from "../../../guest-purchase-verification";
import {
  applyPaypalSubscriptionLifecycle,
  currentSubscriptionForUser,
  recordPaypalPayment,
  subscriptionForUser,
  type SubscriptionStatus,
} from "../../../../db/billing";

export const dynamic = "force-dynamic";

function paypalStatus(value: unknown): SubscriptionStatus {
  const allowed = new Set(["APPROVAL_PENDING", "APPROVED", "ACTIVE", "SUSPENDED", "CANCELLED", "EXPIRED"]);
  return typeof value === "string" && allowed.has(value) ? value as SubscriptionStatus : "APPROVAL_PENDING";
}

function seconds(value: unknown) {
  if (typeof value !== "string") return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? Math.floor(parsed / 1000) : null;
}

function cents(value: unknown) {
  if (typeof value !== "string" || !/^\d+(?:\.\d{1,2})?$/.test(value)) return null;
  const [whole, fraction = ""] = value.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origen no válido." }, { status: 403 });
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión para continuar." }, { status: 401 });
  const raw = await request.text();
  let subscriptionId = "";
  try { subscriptionId = (JSON.parse(raw) as { subscriptionId?: unknown }).subscriptionId as string; } catch { return Response.json({ error: "Solicitud no válida." }, { status: 400 }); }
  if (typeof subscriptionId !== "string" || !subscriptionId || subscriptionId.length > 160) return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  const config = billingConfig(env);
  const local = await subscriptionForUser(env.DB, userId, subscriptionId, config.paypalEnv);
  if (!local) return Response.json({ error: "No encontramos esa suscripción." }, { status: 404 });
  if (!paypalReady(config)) return Response.json({ status: local.status, accessConfirmed: false, pending: true }, { status: 202 });
  try {
    const paypal = await getPaypalSubscription(config, subscriptionId);
    if (!(await validatePaypalOwnedSubscription(env.DB, paypal, { subscriptionId, userId, config }))) {
      return Response.json({ error: "La suscripción no coincide con tu cuenta o plan." }, { status: 409 });
    }
    const status = paypalStatus(paypal.status);
    await applyPaypalSubscriptionLifecycle(env.DB, config.paypalEnv, subscriptionId, {
      status,
      subscriberId: typeof paypal.subscriber?.payer_id === "string" ? paypal.subscriber.payer_id : null,
      nextBillingTime: paypal.billing_info?.next_billing_time,
      eventType: `RECONCILE.${status}`,
    });
    const transactions = await getPaypalSubscriptionTransactions(config, subscriptionId);
    for (const transaction of transactions) {
      const money = transaction.amount_with_breakdown?.gross_amount || {};
      if (transaction.status !== "COMPLETED" || typeof transaction.id !== "string" || !validatePaypalPayment(money, config)) continue;
      const amountCents = cents(money.value);
      const occurredAt = seconds(transaction.time);
      if (amountCents === null || occurredAt === null) continue;
      await recordPaypalPayment(env.DB, {
        environment: config.paypalEnv,
        paypalSubscriptionId: subscriptionId,
        providerPaymentId: transaction.id,
        amountCents,
        currency: String(money.currency_code || ""),
        status: "COMPLETED",
        occurredAt,
        paidThrough: seconds(paypal.billing_info?.next_billing_time),
      }, config);
    }
    const updated = await currentSubscriptionForUser(env.DB, userId, config.paypalEnv);
    const accessConfirmed = Boolean(updated?.paidThrough && updated.paidThrough > Math.floor(Date.now() / 1000));
    return Response.json({ status, accessConfirmed, pending: !accessConfirmed }, {
      status: accessConfirmed ? 200 : 202,
      headers: { "cache-control": "no-store" },
    });
  } catch {
    return Response.json({ status: local.status, accessConfirmed: false, pending: true }, { status: 202 });
  }
}
