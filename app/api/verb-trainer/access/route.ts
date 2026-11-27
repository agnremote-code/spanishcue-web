import { fullAccessFromHeaders } from "../../../access-policy";
import { studentPassFromHeaders } from "../../../jugar/student-pass";

export const dynamic = "force-dynamic";

/**
 * Entrenador de verbos (/practicar-conjugacion): tells the public trainer page
 * whether the visitor may use the PRO tenses and verb sets. The Worker resolves
 * the session on this path (identity-aware) and recreates both headers, so
 * browser-supplied values never reach here. The drill content itself is the
 * public conjugation engine: this only unlocks options.
 */
export function GET(request: Request) {
  const fullAccess = fullAccessFromHeaders(request.headers);
  const studentPass = !fullAccess && studentPassFromHeaders(request.headers);
  return Response.json(
    { pro: fullAccess || studentPass, via: fullAccess ? "pro" : studentPass ? "pase" : "free" },
    { headers: { "cache-control": "private, no-store" } },
  );
}
