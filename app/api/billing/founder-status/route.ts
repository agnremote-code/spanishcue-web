import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../access-policy";
import { billingConfig, billingReadiness, checkoutAllowed } from "../../../billing-config";
import { getFounderOfferStatus } from "../../../../db/billing";
import { legalOperator } from "../../../legal/operator";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const config = billingConfig(env);
    const status = await getFounderOfferStatus(env.DB, config);
    // `checkoutLive` is the pre-existing client contract. In Sandbox it means
    // checkout is test-ready; in Live it additionally requires legal details.
    const readiness = billingReadiness(config, Boolean(legalOperator(env)));
    const checkoutLive = readiness !== "unconfigured" && checkoutAllowed(config, accountIdFromHeaders(request.headers));
    return Response.json({
      ...status,
      priceUsd: config.founderOffer.priceUsd,
      checkoutLive,
      checkoutAvailable: checkoutLive,
      mode: config.paypalEnv,
      readiness,
    }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ enabled: false, available: false }, { status: 503 });
  }
}
