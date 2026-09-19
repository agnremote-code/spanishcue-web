import { env } from "cloudflare:workers";
import { accountIdFromHeaders, fullAccessFromHeaders } from "../../../access-policy";
import { billingConfig, billingReadiness, checkoutAllowed, safeReturnTo } from "../../../billing-config";
import { createPaypalSubscription } from "../../../paypal-server";
import {
  acquireCheckoutLock,
  completeCheckoutLock,
  createPendingSubscription,
  failCheckoutLock,
  getFounderOfferStatus,
} from "../../../../db/billing";
import { legalOperator } from "../../../legal/operator";

export const dynamic = "force-dynamic";

function sameOrigin(request: Request) {
  return request.headers.get("origin") === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return Response.json({ error: "Origen no válido." }, { status: 403 });
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión para continuar." }, { status: 401 });
  if (fullAccessFromHeaders(request.headers)) return Response.json({ error: "Tu cuenta ya tiene acceso PRO." }, { status: 409 });
  const raw = await request.text();
  if (raw.length > 1000) return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  let returnTo = "/";
  try { returnTo = safeReturnTo((JSON.parse(raw) as { returnTo?: unknown }).returnTo); } catch { return Response.json({ error: "Solicitud no válida." }, { status: 400 }); }

  const config = billingConfig(env);
  // Sandbox is intentionally available for the end-to-end test flow. Live
  // remains blocked until the complete legal operator profile is configured.
  if (billingReadiness(config, Boolean(legalOperator(env))) === "unconfigured") {
    return Response.json({ error: "El pago se está preparando. Volvé a intentarlo pronto." }, { status: 503 });
  }
  if (!checkoutAllowed(config, userId)) {
    return Response.json({ error: "El checkout público todavía no está habilitado." }, { status: 503 });
  }
  const founder = await getFounderOfferStatus(env.DB, config);
  if (!founder.available) return Response.json({ error: "El precio fundador ya no está disponible." }, { status: 409 });
  try {
    const origin = new URL(request.url).origin;
    const requestId = crypto.randomUUID();
    const lock = await acquireCheckoutLock(env.DB, {
      environment: config.paypalEnv, userId, requestId, heldUntil: Math.floor(Date.now() / 1000) + 120,
    });
    if (lock.kind === "ready") {
      return Response.json({ approvalUrl: lock.approvalUrl }, { headers: { "cache-control": "no-store" } });
    }
    if (lock.kind === "busy") {
      return Response.json({ error: "Ya estamos preparando tu suscripción. Reintentá en unos segundos." }, { status: 409 });
    }
    try {
      const paypal = await createPaypalSubscription(config, { origin, returnTo, userId, requestId: lock.requestId });
      await createPendingSubscription(env.DB, {
        environment: config.paypalEnv, userId, paypalSubscriptionId: paypal.subscriptionId,
        planId: config.founderPlanId, offerCode: config.founderOffer.code,
      });
      await completeCheckoutLock(env.DB, {
        environment: config.paypalEnv, userId, requestId: lock.requestId,
        paypalSubscriptionId: paypal.subscriptionId, approvalUrl: paypal.approvalUrl,
      });
      return Response.json({ approvalUrl: paypal.approvalUrl }, { headers: { "cache-control": "no-store" } });
    } catch (error) {
      await failCheckoutLock(env.DB, { environment: config.paypalEnv, userId, requestId: lock.requestId }).catch(() => undefined);
      throw error;
    }
  } catch {
    return Response.json({ error: "No pudimos iniciar el pago. Intentá nuevamente." }, { status: 502 });
  }
}
