import { env } from "cloudflare:workers";
import { legalOperator } from "../../legal/operator";

export const dynamic = "force-dynamic";
export async function GET() {
  return Response.json({ published: true, commerceReady: Boolean(legalOperator(env)) }, { headers: { "cache-control": "no-store" } });
}
