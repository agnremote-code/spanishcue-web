import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../access-policy";
import { billingConfig, paypalReady } from "../../../billing-config";
import { cancelPaypalSubscription } from "../../../paypal-server";
import { applyPaypalSubscriptionLifecycle, currentSubscriptionForUser } from "../../../../db/billing";

export const dynamic = "force-dynamic";

function safe(subscription: Awaited<ReturnType<typeof currentSubscriptionForUser>>) {
  if (!subscription) return null;
  return {
    provider: subscription.provider,
    status: subscription.status,
    founder: Boolean(subscription.offerCode),
    nextBillingTime: subscription.nextBillingTime,
    paidThrough: subscription.paidThrough,
    accessConfirmed: Boolean(subscription.paidThrough && subscription.paidThrough > Math.floor(Date.now() / 1000)),
    cancelledAt: subscription.cancelledAt,
    cancellationReference: subscription.cancelledAt
      ? `SC-CANCEL-${subscription.id}-${subscription.cancelledAt}`
      : null,
  };
}

export async function GET(request: Request) {
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión para continuar." }, { status: 401 });
  const config = billingConfig(env);
  return Response.json({ subscription: safe(await currentSubscriptionForUser(env.DB, userId, config.paypalEnv)) }, { headers: { "cache-control": "no-store" } });
}

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origen no válido." }, { status: 403 });
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión para continuar." }, { status: 401 });
  const config = billingConfig(env);
  const subscription = await currentSubscriptionForUser(env.DB, userId, config.paypalEnv);
  if (!subscription || subscription.provider !== "paypal") return Response.json({ error: "No encontramos una suscripción gestionable." }, { status: 404 });
  if (subscription.status !== "ACTIVE") return Response.json({ error: "La suscripción ya no está activa.", subscription: safe(subscription) }, { status: 409 });
  if (!paypalReady(config)) return Response.json({ error: "La cancelación online no está disponible temporalmente." }, { status: 503 });
  try {
    await cancelPaypalSubscription(config, subscription.providerSubscriptionId);
    await applyPaypalSubscriptionLifecycle(env.DB, config.paypalEnv, subscription.providerSubscriptionId, {
      status: "CANCELLED",
      nextBillingTime: subscription.nextBillingTime ? new Date(subscription.nextBillingTime * 1000).toISOString() : null,
      eventType: "ACCOUNT.CANCELLED",
    });
    const updated = await currentSubscriptionForUser(env.DB, userId, config.paypalEnv);
    return Response.json({ subscription: safe(updated) }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: "No pudimos completar la cancelación. Intenta nuevamente." }, { status: 502 });
  }
}
