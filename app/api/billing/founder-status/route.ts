import { env } from "cloudflare:workers";
import { accountIdFromHeaders, fullAccessFromHeaders } from "../../../access-policy";
import { billingConfig, billingReadiness, checkoutAllowed } from "../../../billing-config";
import { getFounderOfferStatus, promoWeekEligible } from "../../../../db/billing";
import { ensurePaypalPromoPlan } from "../../../paypal-server";
import { DISCOUNT_10_CENTS, DISCOUNT_10_PERCENT, DISCOUNT_10_THEN_CENTS, PROMO_WEEK_CENTS, PROMO_WEEK_DAYS, PROMO_WEEK_ENDS_AT, PROMO_WEEK_THEN_CENTS, promoWeekActive } from "../../../promo-config";
import { legalOperator } from "../../../legal/operator";
import { paddleAnnualReady, paddleConfig, paddleReady } from "../../../paddle-config";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const config = billingConfig(env);
    const status = await getFounderOfferStatus(env.DB, config);
    // `checkoutLive` is the pre-existing client contract. In Sandbox it means
    // checkout is test-ready; in Live it additionally requires legal details.
    const readiness = billingReadiness(config, Boolean(legalOperator(env)));
    const userId = accountIdFromHeaders(request.headers);
    const checkoutLive = readiness !== "unconfigured" && checkoutAllowed(config, userId);
    const paddleCheckoutAvailable = readiness === "live_ready"
      && config.publicCheckoutEnabled
      && paddleReady(paddleConfig(env));
    // «Primera semana por US$0,99»: by card through Paddle, and by PayPal once its promo plan is verified.
    const promoActive = promoWeekActive() && status.available;
    const promoCard = promoActive && paddleCheckoutAvailable;
    let promoPaypal = false;
    if (promoActive && checkoutLive && config.paypalEnv === "live") {
      try { promoPaypal = Boolean(await ensurePaypalPromoPlan(config)); } catch { promoPaypal = false; }
    }
    return Response.json({
      ...status,
      promoWeek: {
        available: promoCard || promoPaypal,
        cardAvailable: promoCard,
        paypalAvailable: promoPaypal,
        priceUsd: PROMO_WEEK_CENTS / 100,
        days: PROMO_WEEK_DAYS,
        thenPriceUsd: PROMO_WEEK_THEN_CENTS / 100,
        endsAt: PROMO_WEEK_ENDS_AT,
        // null: not signed in yet. The promo is for teachers who never paid before.
        eligible: userId ? await promoWeekEligible(env.DB, userId) : null,
      },
      // «10% de descuento en tu próxima suscripción»: card only, for signed-in teachers without PRO.
      discount10: {
        cardAvailable: status.available && paddleCheckoutAvailable,
        percent: DISCOUNT_10_PERCENT,
        priceUsd: DISCOUNT_10_CENTS / 100,
        thenPriceUsd: DISCOUNT_10_THEN_CENTS / 100,
        // null: not signed in yet.
        eligible: userId ? !fullAccessFromHeaders(request.headers) : null,
      },
      priceUsd: 19.9,
      paypalPriceUsd: config.founderOffer.priceUsd,
      trialPriceUsd: 2,
      trialDays: 1,
      trialCheckoutAvailable: paddleCheckoutAvailable,
      annualPriceUsd: 150,
      annualCheckoutAvailable: paddleCheckoutAvailable && paddleAnnualReady(paddleConfig(env)),
      checkoutLive,
      checkoutAvailable: checkoutLive || paddleCheckoutAvailable,
      // This flag excludes Sandbox and supervised-only accounts for public marketing pages.
      publicCheckoutAvailable: readiness === "live_ready" && config.publicCheckoutEnabled,
      paddleCheckoutAvailable,
      mode: config.paypalEnv,
      readiness,
    }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ enabled: false, available: false }, { status: 503 });
  }
}
