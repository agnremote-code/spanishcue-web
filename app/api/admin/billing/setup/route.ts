import { env } from "cloudflare:workers";
import { ownerFromHeaders } from "../../../../access-policy";
import { billingConfig } from "../../../../billing-config";
import { setupPaypalBilling } from "../../../../paypal-server";

export const dynamic = "force-dynamic";

/** Owner-only validation of configured PayPal resources. It never creates resources. */
async function runSetup(request: Request) {
  if (!ownerFromHeaders(request.headers)) return Response.json({ error: "Acceso exclusivo del propietario." }, { status: 403 });
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origen no válido." }, { status: 403 });
  const config = billingConfig(env);
  try {
    const result = await setupPaypalBilling(config, new URL(request.url).origin);
    return Response.json(result, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: "No se pudieron validar los recursos PayPal configurados." }, { status: 502 });
  }
}

export async function POST(request: Request) {
  return runSetup(request);
}
