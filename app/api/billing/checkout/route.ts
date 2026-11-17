import { env } from "cloudflare:workers";
import { accountIdFromHeaders, fullAccessFromHeaders, safeRelativeReturnPath } from "../../../access-policy";
import { billingConfig, billingReadiness, checkoutAllowed } from "../../../billing-config";
import { createPaypalSubscription, ensurePaypalPromoPlan } from "../../../paypal-server";
import { promoWeekActive } from "../../../promo-config";
import {
  acquireCheckoutLock,
  completeCheckoutLock,
  createPendingSubscription,
  failCheckoutLock,
  getFounderOfferStatus,
  paypalSubscriptionPlanId,
  promoWeekEligible,
} from "../../../../db/billing";
import { legalOperator } from "../../../legal/operator";
import { authorizePurchaseClaim, getOrCreatePurchaseClaim } from "../../../purchase-claim-cookie";
import { lockPurchaseCheckout, markPurchaseCheckout, releasePurchaseCheckout } from "../../../../db/purchase-claims";

export const dynamic = "force-dynamic";

function sameOrigin(request: Request) {
  return request.headers.get("origin") === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return Response.json({ error: "Origen no válido." }, { status: 403 });
  const userId = accountIdFromHeaders(request.headers);
  if (userId && fullAccessFromHeaders(request.headers)) return Response.json({ error: "Tu cuenta ya tiene acceso PRO." }, { status: 409 });
  const raw = await request.text();
  if (raw.length > 1000) return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  let returnTo = "/";
  let promo = false;
  try {
    const body = JSON.parse(raw) as { returnTo?: unknown; offer?: unknown };
    const requested = body.returnTo;
    if (body.offer !== undefined && body.offer !== "monthly" && body.offer !== "promo") throw new Error("invalid_offer");
    promo = body.offer === "promo";
    returnTo = safeRelativeReturnPath(typeof requested === "string" && requested.length <= 300 ? requested : null);
  } catch { return Response.json({ error: "Solicitud no válida." }, { status: 400 }); }
  // The promo week needs an account: it is only for teachers who never paid before.
  if (promo && !userId) return Response.json({ error: "Crea tu cuenta gratis o inicia sesión para usar la promo.", code: "promo_account_required" }, { status: 401 });
  if (promo && !promoWeekActive()) return Response.json({ error: "La promo ya terminó.", code: "promo_ended" }, { status: 410 });

  const config = billingConfig(env);
  // Sandbox is intentionally available for the end-to-end test flow. Live
  // remains blocked until the complete legal operator profile is configured.
  if (billingReadiness(config, Boolean(legalOperator(env))) === "unconfigured") {
    return Response.json({ error: "El pago se está preparando. Vuelve a intentarlo pronto." }, { status: 503 });
  }
  if (!checkoutAllowed(config, userId)) {
    return Response.json({ error: "El checkout público todavía no está habilitado." }, { status: 503 });
  }
  if (!userId) {
    const existing = await authorizePurchaseClaim(env.DB, request.headers.get("cookie"), "paypal");
    if (existing?.environment === config.paypalEnv && existing.offerCode === config.founderOffer.code &&
        existing.provider === "paypal" && ["paid", "claiming"].includes(existing.status)) {
      return Response.json({ claimUrl: "/pro/claim?provider=paypal" }, { headers: { "cache-control": "private, no-store" } });
    }
  }
  const founder = await getFounderOfferStatus(env.DB, config);
  if (!founder.available) return Response.json({ error: "El precio fundador ya no está disponible." }, { status: 409 });
  try {
    const origin = new URL(request.url).origin;
    if (!userId) {
      const { claim, setCookie } = await getOrCreatePurchaseClaim(env.DB, request.headers.get("cookie"), "paypal", {
        environment: config.paypalEnv, offerCode: config.founderOffer.code, returnTo,
      });
      const headers = { "cache-control": "private, no-store", ...(setCookie ? { "set-cookie": setCookie } : {}) };
      if (claim.status === "checkout" && claim.approvalUrl) {
        return Response.json({ approvalUrl: claim.approvalUrl }, { headers });
      }
      const locked = await lockPurchaseCheckout(env.DB, claim.claimId, "paypal");
      if (!locked) return Response.json({ error: "Estamos preparando tu suscripción. Vuelve a intentarlo en unos segundos." }, { status: 409, headers });
      try {
        const paypal = await createPaypalSubscription(config, {
          origin, returnTo, claimId: claim.claimId, requestId: locked.checkoutRequestId || undefined,
        });
        await markPurchaseCheckout(env.DB, claim.claimId, "paypal", {
          subscriptionId: paypal.subscriptionId, approvalUrl: paypal.approvalUrl,
        });
        return Response.json({ approvalUrl: paypal.approvalUrl }, { headers });
      } catch (error) {
        await releasePurchaseCheckout(env.DB, claim.claimId, "paypal");
        throw error;
      }
    }
    let planId = config.founderPlanId;
    if (promo) {
      if (!(await promoWeekEligible(env.DB, userId))) {
        return Response.json({ error: "La promo es solo para la primera suscripción.", code: "promo_not_eligible" }, { status: 409 });
      }
      planId = await ensurePaypalPromoPlan(config);
    }
    const requestId = crypto.randomUUID();
    const lock = await acquireCheckoutLock(env.DB, {
      environment: config.paypalEnv, userId, requestId, heldUntil: Math.floor(Date.now() / 1000) + 120,
    });
    if (lock.kind === "ready") {
      // A checkout opened a moment ago for the other offer must not be reused for this one.
      if ((await paypalSubscriptionPlanId(env.DB, lock.paypalSubscriptionId, config.paypalEnv)) !== planId) {
        return Response.json({ error: "Ya abriste otro pago con PayPal hace un momento. Vuelve a intentarlo en dos minutos." }, { status: 409 });
      }
      return Response.json({ approvalUrl: lock.approvalUrl }, { headers: { "cache-control": "no-store" } });
    }
    if (lock.kind === "busy") {
      return Response.json({ error: "Ya estamos preparando tu suscripción. Vuelve a intentarlo en unos segundos." }, { status: 409 });
    }
    try {
      const paypal = await createPaypalSubscription(config, { origin, returnTo, userId, requestId: lock.requestId, planId });
      await createPendingSubscription(env.DB, {
        environment: config.paypalEnv, userId, paypalSubscriptionId: paypal.subscriptionId,
        planId, offerCode: config.founderOffer.code,
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
    return Response.json({ error: "No pudimos iniciar el pago. Inténtalo de nuevo." }, { status: 502 });
  }
}
