import { env } from "cloudflare:workers";
import { accountIdFromHeaders, emailFromHeaders } from "../../access-policy";
import {
  acceptInvitation, createInstitution, createInvitation, getMembership, institutionsReady, InstitutionError,
  listInvitations, listMembers, removeMember, revokeInvitation, setMemberRole, updateInstitution,
} from "../../../db/institutions";

export const dynamic = "force-dynamic";

const noStore = { "cache-control": "private, no-store" };
const fail = (error: string, status: number) => Response.json({ error }, { status, headers: noStore });

/** The panel state for the signed-in account; admin data only for its own institution's admins. */
async function state(userId: string) {
  const membership = await getMembership(env.DB, userId);
  if (!membership) return { membership: null };
  if (membership.role !== "admin") return { membership };
  const [members, invitations] = await Promise.all([listMembers(env.DB, membership.institution.id), listInvitations(env.DB, membership.institution.id)]);
  return { membership, members, invitations };
}

export async function GET(request: Request) {
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return fail("Inicia sesión.", 401);
  try {
    if (!(await institutionsReady(env.DB))) return fail("El panel de academias todavía no está disponible.", 503);
    return Response.json(await state(userId), { headers: noStore });
  } catch {
    return fail("No pudimos cargar tu academia.", 503);
  }
}

export async function POST(request: Request) {
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return fail("Inicia sesión.", 401);
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return fail("Origen no válido.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return fail("Formato no válido.", 415);
  const raw = await request.text();
  if (raw.length > 4096) return fail("Solicitud demasiado grande.", 413);
  let body: Record<string, unknown>;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed;
  } catch {
    return fail("Formato no válido.", 400);
  }
  try {
    if (!(await institutionsReady(env.DB))) return fail("El panel de academias todavía no está disponible.", 503);
    let extra: Record<string, unknown> = {};
    switch (body.action) {
      case "create": await createInstitution(env.DB, userId, body); break;
      case "update": await updateInstitution(env.DB, userId, body); break;
      case "invite": {
        const { token, invitation } = await createInvitation(env.DB, userId, body);
        extra = { invitation, link: `${new URL(request.url).origin}/academias/unirse?token=${token}` };
        break;
      }
      case "revoke-invite": await revokeInvitation(env.DB, userId, body.invitationId); break;
      case "remove-member": await removeMember(env.DB, userId, body.userId); break;
      case "set-role": await setMemberRole(env.DB, userId, body.userId, body.role); break;
      case "accept": await acceptInvitation(env.DB, userId, emailFromHeaders(request.headers), body.token); break;
      default: return fail("Acción no válida.", 400);
    }
    return Response.json({ ...(await state(userId)), ...extra }, { headers: noStore });
  } catch (error) {
    if (error instanceof InstitutionError) return fail(error.message, error.status);
    return fail("No pudimos guardar los cambios. Inténtalo de nuevo.", 503);
  }
}
