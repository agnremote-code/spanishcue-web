import { env } from "cloudflare:workers";
import { accountIdFromHeaders, emailFromHeaders } from "../../../../access-policy";
import { billingConfig } from "../../../../billing-config";
import { paddleConfig } from "../../../../paddle-config";
import { authorizePurchaseClaim } from "../../../../purchase-claim-cookie";
import { bindPurchaseToUser } from "../../../../../db/purchase-binding";
import type { PurchaseProvider } from "../../../../../db/purchase-claims";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origen no válido." }, { status: 403 });
  const userId = accountIdFromHeaders(request.headers);
  const email = emailFromHeaders(request.headers);
  if (!userId || !email) return Response.json({ error: "Ingresá a tu cuenta para activar PRO." }, { status: 401 });
  let provider: PurchaseProvider;
  try {
    const raw = await request.text();
    if (raw.length > 200) throw new Error("invalid");
    const parsed = JSON.parse(raw) as { provider?: unknown };
    if (parsed.provider !== "paypal" && parsed.provider !== "paddle") throw new Error("invalid");
    provider = parsed.provider;
  } catch { return Response.json({ error: "Solicitud no válida." }, { status: 400 }); }
  const cookieClaim = await authorizePurchaseClaim(env.DB, request.headers.get("cookie"), provider);
  if (!cookieClaim || cookieClaim.provider !== provider) return Response.json({ error: "No encontramos esta compra en el navegador." }, { status: 404 });
  const config = billingConfig(env);
  if (cookieClaim.environment !== config.paypalEnv || cookieClaim.offerCode !== config.founderOffer.code ||
      cookieClaim.amountCents !== 1500 || cookieClaim.currency !== "USD") {
    return Response.json({ error: "La compra no coincide con la oferta." }, { status: 409 });
  }
  if (cookieClaim.normalizedEmail !== email.trim().toLowerCase()) {
    return Response.json({ error: "Ingresá con el mismo email confirmado por el proveedor de pago." }, { status: 409 });
  }
  try {
    const result = await bindPurchaseToUser(env.DB, cookieClaim.claimId, userId, email, config, paddleConfig(env).priceId);
    if (!result) return Response.json({ error: "Estamos esperando la confirmación del pago." }, { status: 409 });
    return Response.json({ accessConfirmed: true, ...result },
      { headers: { "cache-control": "private, no-store" } });
  } catch {
    // The claim stays bound to this user in 'claiming', so the same account can safely retry.
    return Response.json({ error: "No pudimos activar PRO todavía. Reintentá en unos segundos." }, { status: 503 });
  }
}
