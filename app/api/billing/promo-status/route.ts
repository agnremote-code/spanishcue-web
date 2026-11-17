import { env } from "cloudflare:workers";
import { billingConfig, billingReadiness, paypalReady } from "../../../billing-config";
import { legalOperator } from "../../../legal/operator";
import { paddleConfig, paddleReady } from "../../../paddle-config";
import { previewPaddlePromo } from "../../../paddle-server";
import { ensurePaypalPromoPlan } from "../../../paypal-server";
import { PROMO_WEEK_CODE, PROMO_WEEK_ENDS_AT, promoWeekActive } from "../../../promo-config";

export const dynamic = "force-dynamic";

/**
 * Read-only launch check of the promo week, with no secrets and no customer data: whether Paddle
 * accepts the promo price (a preview, nothing is created) and which PayPal plan carries the promo
 * (found or created once by `ensurePaypalPromoPlan`). Plan IDs are identifiers, not credentials.
 */
export async function GET() {
  const billing = billingConfig(env);
  const paddle = paddleConfig(env);
  const live = billingReadiness(billing, Boolean(legalOperator(env))) === "live_ready";
  let paddlePromo: "ok" | "unavailable" | string = "unavailable";
  if (live && paddleReady(paddle)) {
    try { await previewPaddlePromo(paddle); paddlePromo = "ok"; }
    catch (error) { paddlePromo = (error instanceof Error ? error.message : "failed").slice(0, 40); }
  }
  let paypalPlanId = "";
  let paypalPromo: "ok" | "unavailable" | string = "unavailable";
  if (live && paypalReady(billing)) {
    try { paypalPlanId = await ensurePaypalPromoPlan(billing); paypalPromo = "ok"; }
    catch (error) { paypalPromo = (error instanceof Error ? error.message : "failed").slice(0, 40); }
  }
  return Response.json({
    code: PROMO_WEEK_CODE, active: promoWeekActive(), endsAt: PROMO_WEEK_ENDS_AT,
    mode: billing.paypalEnv, paddlePromo, paypalPromo, paypalPlanId,
  }, { headers: { "cache-control": "no-store" } });
}
