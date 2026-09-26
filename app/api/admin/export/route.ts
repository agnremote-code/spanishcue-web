import { env } from "cloudflare:workers";
import { ownerFromHeaders } from "../../../access-policy";
import { exportDatabase } from "./d1-export";

export const dynamic = "force-dynamic";

// Owner-only, one-off download of every D1 row for the move off OpenAI Sites.
// Contains personal and payment data. Remove after the cutover.
export async function GET(request: Request) {
  if (!ownerFromHeaders(request.headers)) {
    return Response.json({ error: "Acceso exclusivo del propietario." }, { status: 403, headers: { "cache-control": "private, no-store" } });
  }
  try {
    const bundle = await exportDatabase(env.DB, { host: new URL(request.url).host });
    const stamp = bundle.manifest.source.exportStartedAt.replaceAll(":", "-");
    return new Response(JSON.stringify(bundle), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "content-disposition": `attachment; filename="spanishcue-d1-export-${stamp}.json"`,
        "cache-control": "private, no-store",
        "x-robots-tag": "noindex",
      },
    });
  } catch (error) {
    const code = error instanceof Error && error.message.startsWith("EXPORT_COUNT_MISMATCH") ? error.message : "EXPORT_FAILED";
    return Response.json({ error: "No pudimos exportar la base. Probá de nuevo.", code }, { status: 503, headers: { "cache-control": "private, no-store" } });
  }
}
