import { env } from "cloudflare:workers";
import { accountIdFromHeaders, fullAccessFromHeaders } from "../../../../access-policy";
import { billingConfig, billingReadiness } from "../../../../billing-config";
import { legalOperator } from "../../../../legal/operator";
import { paddleConfig, paddleReady } from "../../../../paddle-config";
import { createPaddleCheckoutTransaction } from "../../../../paddle-server";
import { getFounderOfferStatus } from "../../../../../db/billing";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json({ error: "Origen no válido." }, { status: 403 });
  }
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión para continuar." }, { status: 401 });
  if (fullAccessFromHeaders(request.headers)) {
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

  const founder = await getFounderOfferStatus(env.DB, billing);
  if (!founder.available) return Response.json({ error: "El precio fundador ya no está disponible." }, { status: 409 });

  try {
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
