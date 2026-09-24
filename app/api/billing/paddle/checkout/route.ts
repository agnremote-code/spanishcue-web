import { env } from "cloudflare:workers";
import { accountIdFromHeaders, fullAccessFromHeaders, safeRelativeReturnPath } from "../../../../access-policy";
import { billingConfig, billingReadiness } from "../../../../billing-config";
import { legalOperator } from "../../../../legal/operator";
import { paddleConfig, paddleReady } from "../../../../paddle-config";
import { createPaddleCheckoutTransaction } from "../../../../paddle-server";
import { getFounderOfferStatus } from "../../../../../db/billing";
import { authorizePurchaseClaim, getOrCreatePurchaseClaim } from "../../../../purchase-claim-cookie";
import { lockPurchaseCheckout, markPurchaseCheckout, releasePurchaseCheckout } from "../../../../../db/purchase-claims";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json({ error: "Origen no válido." }, { status: 403 });
  }
  const userId = accountIdFromHeaders(request.headers);
  if (userId && fullAccessFromHeaders(request.headers)) {
    return Response.json({ error: "Tu cuenta ya tiene acceso PRO." }, { status: 409 });
  }

  const billing = billingConfig(env);
  const paddle = paddleConfig(env);
  if (billingReadiness(billing, Boolean(legalOperator(env))) !== "live_ready" || !paddleReady(paddle)) {
    return Response.json({ error: "El pago con tarjeta todavía no está disponible." }, { status: 503 });
  }
  if (!billing.publicCheckoutEnabled) {
    return Response.json({ error: "El checkout público todavía no está habilitado." }, { status: 503 });
  }

  if (!userId) {
    const existing = await authorizePurchaseClaim(env.DB, request.headers.get("cookie"), "paddle");
    if (existing?.environment === "live" && existing.offerCode === billing.founderOffer.code &&
        existing.provider === "paddle" && ["paid", "claiming"].includes(existing.status)) {
      return Response.json({ claimUrl: "/pro/claim?provider=paddle" }, { headers: { "cache-control": "private, no-store" } });
    }
  }

  const founder = await getFounderOfferStatus(env.DB, billing);
  if (!founder.available) return Response.json({ error: "El precio fundador ya no está disponible." }, { status: 409 });

  let returnTo = "/";
  try {
    const raw = await request.text();
    if (raw.length > 1000) throw new Error("invalid_request");
    const requested = JSON.parse(raw) as { returnTo?: unknown };
    returnTo = safeRelativeReturnPath(typeof requested.returnTo === "string" && requested.returnTo.length <= 300 ? requested.returnTo : null);
  } catch { return Response.json({ error: "Solicitud no válida." }, { status: 400 }); }

  try {
    if (!userId) {
      const { claim, setCookie } = await getOrCreatePurchaseClaim(env.DB, request.headers.get("cookie"), "paddle", {
        environment: "live", offerCode: billing.founderOffer.code, returnTo,
      });
      const headers = { "cache-control": "private, no-store", ...(setCookie ? { "set-cookie": setCookie } : {}) };
      if (claim.status === "checkout" && claim.providerPaymentId) {
        return Response.json({ transactionId: claim.providerPaymentId, clientToken: paddle.clientToken }, { headers });
      }
      const locked = await lockPurchaseCheckout(env.DB, claim.claimId, "paddle");
      if (!locked) return Response.json({ error: "Estamos preparando tu pago. Reintentá en unos segundos." }, { status: 409, headers });
      try {
        const transactionId = await createPaddleCheckoutTransaction(paddle, {
          claimId: claim.claimId, offerCode: billing.founderOffer.code,
        });
        await markPurchaseCheckout(env.DB, claim.claimId, "paddle", { paymentId: transactionId });
        return Response.json({ transactionId, clientToken: paddle.clientToken }, { headers });
      } catch (error) {
        await releasePurchaseCheckout(env.DB, claim.claimId, "paddle");
        throw error;
      }
    }
    const transactionId = await createPaddleCheckoutTransaction(paddle, {
      userId,
      offerCode: billing.founderOffer.code,
    });
    return Response.json(
      { transactionId, clientToken: paddle.clientToken },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch {
    return Response.json({ error: "No pudimos iniciar el pago con tarjeta." }, { status: 502 });
  }
}
