import { env } from "cloudflare:workers";
import type { AccessLevel } from "../../../account-types";
import { ownerFromHeaders } from "../../../access-policy";
import { listTeacherAccounts, setManualTeacherAccess } from "../../../../db/accounts";

export const dynamic = "force-dynamic";

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === new URL(request.url).origin);
}

export async function GET(request: Request) {
  if (!ownerFromHeaders(request.headers)) {
    return Response.json({ error: "Acceso exclusivo del propietario." }, { status: 403 });
  }
  try {
    return Response.json(
      { items: await listTeacherAccounts(env.DB) },
      { headers: { "cache-control": "private, no-store" } },
    );
  } catch {
    return Response.json({ error: "No pudimos cargar las cuentas." }, { status: 503 });
  }
}

export async function PUT(request: Request) {
  if (!ownerFromHeaders(request.headers)) {
    return Response.json({ error: "Acceso exclusivo del propietario." }, { status: 403 });
  }
  if (!sameOrigin(request)) return Response.json({ error: "Origen no válido." }, { status: 403 });
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ error: "Formato no válido." }, { status: 415 });
  }
  const raw = await request.text();
  if (raw.length > 1024) return Response.json({ error: "Solicitud demasiado grande." }, { status: 413 });
  let userId = "";
  let accessLevel: AccessLevel = "free";
  try {
    const parsed = JSON.parse(raw) as { userId?: unknown; accessLevel?: unknown };
    if (typeof parsed.userId === "string") userId = parsed.userId.trim();
    if (parsed.accessLevel === "free" || parsed.accessLevel === "full") accessLevel = parsed.accessLevel;
    else throw new Error("invalid");
  } catch {
    return Response.json({ error: "Formato no válido." }, { status: 400 });
  }
  if (!userId || userId.length > 100) return Response.json({ error: "Cuenta no válida." }, { status: 400 });
  try {
    const account = await setManualTeacherAccess(env.DB, userId, accessLevel);
    if (!account) return Response.json({ error: "La cuenta no existe." }, { status: 404 });
    return Response.json(account, { headers: { "cache-control": "private, no-store" } });
  } catch (error) {
    if (error instanceof Error && error.message === "OWNER_ACCESS_IS_PERMANENT") {
      return Response.json({ error: "Tu acceso de propietario no se puede quitar." }, { status: 409 });
    }
    return Response.json({ error: "No pudimos cambiar el acceso." }, { status: 503 });
  }
}
