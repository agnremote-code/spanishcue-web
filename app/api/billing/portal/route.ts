import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../access-policy";
import { billingConfig } from "../../../billing-config";
import { paddleConfig, paddleReady } from "../../../paddle-config";
import { createPaddlePortalSession } from "../../../paddle-server";
import { currentSubscriptionForUser } from "../../../../db/billing";

export const dynamic = "force-dynamic";

/** Paddle's own customer portal: update the card, see invoices, retry a declined payment. */
export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origen no válido." }, { status: 403 });
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Inicia sesión para continuar." }, { status: 401 });
  const config = billingConfig(env);
  const subscription = await currentSubscriptionForUser(env.DB, userId, config.paypalEnv);
  if (!subscription || subscription.provider !== "paddle" || !subscription.providerSubscriberId) {
    return Response.json({ error: "No encontramos una suscripción de Paddle." }, { status: 404 });
  }
  const paddle = paddleConfig(env);
  if (!paddleReady(paddle) || config.paypalEnv !== "live") return Response.json({ error: "La gestión de pagos no está disponible temporalmente." }, { status: 503 });
  try {
    const url = await createPaddlePortalSession(paddle, subscription.providerSubscriberId, subscription.providerSubscriptionId);
    return Response.json({ url }, { headers: { "cache-control": "private, no-store" } });
  } catch {
    return Response.json({ error: "No pudimos abrir la gestión de pagos. Intenta nuevamente." }, { status: 502 });
  }
}
