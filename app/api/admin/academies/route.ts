import { env } from "cloudflare:workers";
import { ownerFromHeaders } from "../../../access-policy";
import { InstitutionError, listInstitutions, setSeatLimit } from "../../../../db/institutions";

export const dynamic = "force-dynamic";

const noStore = { "cache-control": "private, no-store" };

/** SpanishCue owner only: academies and the licences agreed with each one. */
export async function GET(request: Request) {
  if (!ownerFromHeaders(request.headers)) return Response.json({ error: "No autorizado." }, { status: 403, headers: noStore });
  try {
    return Response.json({ items: await listInstitutions(env.DB) }, { headers: noStore });
  } catch {
    return Response.json({ error: "No pudimos cargar las academias." }, { status: 503, headers: noStore });
  }
}

export async function POST(request: Request) {
  if (!ownerFromHeaders(request.headers)) return Response.json({ error: "No autorizado." }, { status: 403, headers: noStore });
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return Response.json({ error: "Origen no válido." }, { status: 403, headers: noStore });
  try {
    const body = (await request.json()) as { institutionId?: unknown; seats?: unknown };
    await setSeatLimit(env.DB, body.institutionId, body.seats);
    return Response.json({ items: await listInstitutions(env.DB) }, { headers: noStore });
  } catch (error) {
    if (error instanceof InstitutionError) return Response.json({ error: error.message }, { status: error.status, headers: noStore });
    return Response.json({ error: "No pudimos guardar las licencias." }, { status: 503, headers: noStore });
  }
}
