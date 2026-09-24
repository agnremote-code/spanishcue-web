import { env } from "cloudflare:workers";
import { billingConfig } from "../../../../billing-config";
import { paddleConfig, paddleReady } from "../../../../paddle-config";
import { authorizePurchaseClaim } from "../../../../purchase-claim-cookie";
import { verifyGuestPaddlePayment, verifyGuestPaypalPayment } from "../../../../guest-purchase-verification";
import { type PurchaseProvider } from "../../../../../db/purchase-claims";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origen no válido." }, { status: 403 });
  let provider: PurchaseProvider;
  try {
    const raw = await request.text();
    if (raw.length > 200) throw new Error("invalid");
    const parsed = JSON.parse(raw) as { provider?: unknown };
    if (parsed.provider !== "paypal" && parsed.provider !== "paddle") throw new Error("invalid");
    provider = parsed.provider;
  } catch { return Response.json({ error: "Solicitud no válida." }, { status: 400 }); }
  let claim = await authorizePurchaseClaim(env.DB, request.headers.get("cookie"), provider);
  if (!claim || (claim.provider !== null && claim.provider !== provider)) {
    return Response.json({ error: "No encontramos esta compra en el navegador." }, { status: 404 });
  }
  const billing = billingConfig(env);
  if (claim.environment !== billing.paypalEnv || claim.offerCode !== billing.founderOffer.code) {
    return Response.json({ error: "Esta compra corresponde a otro entorno." }, { status: 409 });
  }
  if (claim.status === "checkout") {
    try {
      if (provider === "paypal" && claim.providerSubscriptionId) {
        claim = await verifyGuestPaypalPayment(env.DB, billing, claim) ?? claim;
      } else if (provider === "paddle" && claim.providerPaymentId) {
        const paddle = paddleConfig(env);
        if (paddleReady(paddle)) claim = await verifyGuestPaddlePayment(env.DB, paddle, claim, claim.providerPaymentId) ?? claim;
      }
    } catch { /* A signed webhook or the next retry may confirm it. */ }
  }
  if (claim.status !== "paid" && claim.status !== "claiming" && claim.status !== "claimed") {
    return Response.json({ confirmed: false, pending: claim.status !== "cancelled" }, { status: 202, headers: { "cache-control": "private, no-store" } });
  }
  return Response.json({ confirmed: true, email: claim.buyerEmail, claimed: claim.status === "claimed" },
    { headers: { "cache-control": "private, no-store" } });
}
