import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../access-policy";
import { billingConfig, paypalReady } from "../../../billing-config";
import { activatePaypalSubscription, cancelPaypalSubscription, suspendPaypalSubscription } from "../../../paypal-server";
import { paddleConfig, paddleReady } from "../../../paddle-config";
import { cancelPaddleSubscription, pausePaddleSubscription, resumePaddleSubscription } from "../../../paddle-server";
import { applyPaypalSubscriptionLifecycle, currentSubscriptionForUser } from "../../../../db/billing";
import { applyPaddleLifecycle } from "../../../../db/paddle-billing";

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

  const raw = await request.text();
  let action: "pause" | "resume" | "cancel" = "cancel";
  try {
    const parsed = raw ? JSON.parse(raw) as { action?: unknown } : {};
    if (parsed.action !== undefined) {
      if (!["pause", "resume", "cancel"].includes(String(parsed.action))) {
        return Response.json({ error: "Acción no válida." }, { status: 400 });
      }
      action = parsed.action as typeof action;
    }
  } catch {
    return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  const config = billingConfig(env);
  const subscription = await currentSubscriptionForUser(env.DB, userId, config.paypalEnv);
  if (!subscription) return Response.json({ error: "No encontramos una suscripción gestionable." }, { status: 404 });

  if ((action === "pause" || action === "cancel") && subscription.status !== "ACTIVE") {
    return Response.json({ error: "La suscripción no está activa.", subscription: safe(subscription) }, { status: 409 });
  }
  if (action === "resume" && subscription.status !== "SUSPENDED") {
    return Response.json({ error: "La suscripción no está pausada.", subscription: safe(subscription) }, { status: 409 });
  }

  try {
    if (subscription.provider === "paypal") {
      if (!paypalReady(config)) return Response.json({ error: "La gestión online de la suscripción no está disponible temporalmente." }, { status: 503 });
      const nextBillingTime = subscription.nextBillingTime ? new Date(subscription.nextBillingTime * 1000).toISOString() : null;
      if (action === "pause") {
        await suspendPaypalSubscription(config, subscription.providerSubscriptionId);
        await applyPaypalSubscriptionLifecycle(env.DB, config.paypalEnv, subscription.providerSubscriptionId, {
          status: "SUSPENDED",
          nextBillingTime,
          eventType: "ACCOUNT.SUSPENDED",
        });
      } else if (action === "resume") {
        await activatePaypalSubscription(config, subscription.providerSubscriptionId);
        await applyPaypalSubscriptionLifecycle(env.DB, config.paypalEnv, subscription.providerSubscriptionId, {
          status: "ACTIVE",
          nextBillingTime,
          eventType: "ACCOUNT.ACTIVATED",
        });
      } else {
        await cancelPaypalSubscription(config, subscription.providerSubscriptionId);
        await applyPaypalSubscriptionLifecycle(env.DB, config.paypalEnv, subscription.providerSubscriptionId, {
          status: "CANCELLED",
          nextBillingTime,
          eventType: "ACCOUNT.CANCELLED",
        });
      }
    } else if (subscription.provider === "paddle") {
      const paddle = paddleConfig(env);
      if (!paddleReady(paddle)) return Response.json({ error: "La gestión online de la suscripción no está disponible temporalmente." }, { status: 503 });
      if (action === "pause") {
        const remote = await pausePaddleSubscription(paddle, subscription.providerSubscriptionId);
        await applyPaddleLifecycle(env.DB, subscription.providerSubscriptionId, {
          status: "SUSPENDED",
          customerId: typeof remote.customer_id === "string" ? remote.customer_id : null,
          nextBillingTime: remote.next_billed_at,
        });
      } else if (action === "resume") {
        const remote = await resumePaddleSubscription(paddle, subscription.providerSubscriptionId);
        await applyPaddleLifecycle(env.DB, subscription.providerSubscriptionId, {
          status: "ACTIVE",
          customerId: typeof remote.customer_id === "string" ? remote.customer_id : null,
          nextBillingTime: remote.next_billed_at,
        });
      } else {
        const remote = await cancelPaddleSubscription(paddle, subscription.providerSubscriptionId);
        await applyPaddleLifecycle(env.DB, subscription.providerSubscriptionId, {
          status: "CANCELLED",
          customerId: typeof remote.customer_id === "string" ? remote.customer_id : null,
          nextBillingTime: remote.next_billed_at,
        });
      }
    } else {
      return Response.json({ error: "Proveedor de suscripción no compatible." }, { status: 409 });
    }

    const updated = await currentSubscriptionForUser(env.DB, userId, config.paypalEnv);
    return Response.json({ subscription: safe(updated) }, { headers: { "cache-control": "no-store" } });
  } catch {
    const message = action === "pause"
      ? "No pudimos pausar la suscripción. Intenta nuevamente."
      : action === "resume"
        ? "No pudimos reanudar la suscripción. Intenta nuevamente."
        : "No pudimos completar la cancelación. Intenta nuevamente.";
    return Response.json({ error: message }, { status: 502 });
  }
}
