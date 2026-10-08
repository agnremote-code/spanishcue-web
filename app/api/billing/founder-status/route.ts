import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../access-policy";
import { billingConfig, billingReadiness, checkoutAllowed } from "../../../billing-config";
import { getFounderOfferStatus } from "../../../../db/billing";
import { legalOperator } from "../../../legal/operator";
import { paddleConfig, paddleReady } from "../../../paddle-config";

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
    return Response.json({
      ...status,
      priceUsd: 15.5,
      paypalPriceUsd: config.founderOffer.priceUsd,
      trialPriceUsd: 2,
      trialDays: 1,
      trialCheckoutAvailable: paddleCheckoutAvailable,
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
