import { TEACHER_LIBRARY_PRODUCT } from "../app/account-types";

/**
 * Institutional accounts (academies). `user_id` is the internal users.id.
 * Every administrative query is scoped by the institution the authenticated
 * user belongs to; nothing here trusts an institution id sent by a client.
 * Library access is an access_grants row with source 'institution', so a
 * personal subscription or manual grant is never touched.
 */

export const INVITE_TTL_SECONDS = 14 * 24 * 60 * 60;
export const MAX_PENDING_INVITES = 100;
export const MAX_SEATS = 1000;

export type InstitutionRole = "admin" | "teacher";
export type Institution = { id: string; name: string; city: string; website: string; seatLimit: number; createdAt: number };
export type Membership = { institution: Institution; role: InstitutionRole };
export type Member = { userId: string; email: string; displayName: string | null; role: InstitutionRole; joinedAt: number; hasSeat: boolean };
export type Invitation = { id: string; email: string; role: InstitutionRole; createdAt: number; expiresAt: number };
export type InstitutionSummary = Institution & { members: number; seatsUsed: number; admins: string[] };

export class InstitutionError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}

const nowSeconds = () => Math.floor(Date.now() / 1000);

type InstitutionRow = { id: string; name: string; city: string; website: string; seat_limit: number; created_at: number };
const institutionFromRow = (row: InstitutionRow): Institution => ({
  id: row.id, name: row.name, city: row.city, website: row.website, seatLimit: row.seat_limit, createdAt: row.created_at,
});

function text(value: unknown, max: number, required: boolean): string {
  if (value === undefined || value === null) value = "";
  if (typeof value !== "string" || value.trim().length > max || (required && !value.trim())) {
    throw new InstitutionError("Revisa los datos de la academia.");
  }
  return value.trim();
}

function website(value: unknown): string {
  const raw = text(value, 200, false);
  if (!raw) return "";
  try {
    const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error();
    return url.toString();
  } catch {
    throw new InstitutionError("La web de la academia no es válida.");
  }
}

export function normalizedInviteEmail(value: unknown): string {
  const email = text(value, 254, true).toLowerCase();
  if (!/^[a-z0-9.!$%'*+/=_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/.test(email)) {
    throw new InstitutionError("Ingresa un email válido.");
  }
  return email;
}

function role(value: unknown): InstitutionRole {
  if (value === "admin" || value === "teacher") return value;
  throw new InstitutionError("Elige un rol válido.");
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Source can ship before the additive migration; panels stay hidden until it runs. */
export async function institutionsReady(db: D1Database): Promise<boolean> {
  try {
    const row = await db
      .prepare("SELECT count(*) AS n FROM sqlite_master WHERE type='table' AND name IN ('institutions','institution_members','institution_invitations')")
      .bind()
      .first<{ n: number }>();
    return row?.n === 3;
  } catch {
    return false;
  }
}

export async function getMembership(db: D1Database, userId: string): Promise<Membership | null> {
  const row = await db
    .prepare(
      `SELECT i.id, i.name, i.city, i.website, i.seat_limit, i.created_at, m.role
       FROM institution_members m JOIN institutions i ON i.id = m.institution_id
       WHERE m.user_id = ? LIMIT 1`,
    )
    .bind(userId)
    .first<InstitutionRow & { role: string }>();
  if (!row) return null;
  return { institution: institutionFromRow(row), role: row.role === "admin" ? "admin" : "teacher" };
}

/** Admin-only entry point: the institution always comes from the actor's own membership. */
export async function requireAdmin(db: D1Database, userId: string): Promise<Membership> {
  const membership = await getMembership(db, userId);
  if (!membership || membership.role !== "admin") throw new InstitutionError("Solo la administración de la academia puede hacer esto.", 403);
  return membership;
}

/**
 * Recomputes institutional grants from scratch: the first `seat_limit` members
 * (by join date) hold a seat, the rest do not. Idempotent and deterministic,
 * so concurrent joins converge on the same allocation.
 */
export async function syncSeats(db: D1Database, institutionId: string): Promise<void> {
  const institution = await db.prepare("SELECT seat_limit FROM institutions WHERE id = ?").bind(institutionId).first<{ seat_limit: number }>();
  const members = await db
    .prepare("SELECT user_id FROM institution_members WHERE institution_id = ? ORDER BY created_at, user_id")
    .bind(institutionId)
    .all<{ user_id: string }>();
  const limit = institution?.seat_limit ?? 0;
  const now = nowSeconds();
  const statements = members.results.map(({ user_id }, index) =>
    index < limit
      ? db
          .prepare(
            `INSERT INTO access_grants (
              user_id, product_code, access_level, source, source_reference,
              plan_code, status, starts_at, expires_at, created_at, updated_at
            ) VALUES (?, ?, 'full', 'institution', ?, 'institution', 'active', ?, NULL, ?, ?)
            ON CONFLICT(user_id, product_code, source) DO UPDATE SET
              access_level = 'full', status = 'active', source_reference = excluded.source_reference,
              expires_at = NULL, updated_at = excluded.updated_at`,
          )
          .bind(user_id, TEACHER_LIBRARY_PRODUCT, institutionId, now, now, now)
      : db
          .prepare(
            `UPDATE access_grants SET status = 'revoked', updated_at = ?
             WHERE user_id = ? AND product_code = ? AND source = 'institution' AND status != 'revoked'`,
          )
          .bind(now, user_id, TEACHER_LIBRARY_PRODUCT),
  );
  // A grant from this academy held by someone who is no longer a member (e.g. a
  // removal interrupted before its revoke) is revoked here, so every sync heals it.
  statements.push(
    db
      .prepare(
        `UPDATE access_grants SET status = 'revoked', updated_at = ?
         WHERE product_code = ? AND source = 'institution' AND source_reference = ? AND status != 'revoked'
           AND user_id NOT IN (SELECT user_id FROM institution_members WHERE institution_id = ?)`,
      )
      .bind(now, TEACHER_LIBRARY_PRODUCT, institutionId, institutionId),
  );
  await db.batch(statements);
}

function revokeInstitutionGrant(db: D1Database, userId: string, institutionId: string) {
  return db
    .prepare(
      `UPDATE access_grants SET status = 'revoked', updated_at = ?
       WHERE user_id = ? AND product_code = ? AND source = 'institution' AND source_reference = ? AND status != 'revoked'`,
    )
    .bind(nowSeconds(), userId, TEACHER_LIBRARY_PRODUCT, institutionId);
}

export async function createInstitution(db: D1Database, userId: string, input: Record<string, unknown>): Promise<Membership> {
  if (await getMembership(db, userId)) throw new InstitutionError("Tu cuenta ya pertenece a una academia.", 409);
  const name = text(input.name, 120, true);
  const city = text(input.city, 120, false);
  const site = website(input.website);
  const id = crypto.randomUUID();
  const now = nowSeconds();
  await db.batch([
    db
      .prepare("INSERT INTO institutions (id, name, city, website, seat_limit, created_by, created_at, updated_at) VALUES (?, ?, ?, ?, 0, ?, ?, ?)")
      .bind(id, name, city, site, userId, now, now),
    db.prepare("INSERT INTO institution_members (institution_id, user_id, role, created_at) VALUES (?, ?, 'admin', ?)").bind(id, userId, now),
  ]);
  const membership = await getMembership(db, userId);
  if (!membership) throw new InstitutionError("No pudimos crear la academia.", 503);
  return membership;
}

export async function updateInstitution(db: D1Database, userId: string, input: Record<string, unknown>): Promise<void> {
  const { institution } = await requireAdmin(db, userId);
  await db
    .prepare("UPDATE institutions SET name = ?, city = ?, website = ?, updated_at = ? WHERE id = ?")
    .bind(text(input.name, 120, true), text(input.city, 120, false), website(input.website), nowSeconds(), institution.id)
    .run();
}

export async function listMembers(db: D1Database, institutionId: string): Promise<Member[]> {
  const rows = await db
    .prepare(
      `SELECT m.user_id AS userId, u.email AS email, u.display_name AS displayName, m.role AS role, m.created_at AS joinedAt,
        EXISTS (SELECT 1 FROM access_grants g WHERE g.user_id = m.user_id AND g.source = 'institution'
          AND g.source_reference = m.institution_id AND g.status = 'active') AS hasSeat
       FROM institution_members m JOIN users u ON u.id = m.user_id
       WHERE m.institution_id = ? ORDER BY m.created_at, m.user_id`,
    )
    .bind(institutionId)
    .all<Omit<Member, "hasSeat" | "role"> & { role: string; hasSeat: number }>();
  return rows.results.map((row) => ({ ...row, role: row.role === "admin" ? "admin" : "teacher", hasSeat: Boolean(row.hasSeat) }));
}

export async function listInvitations(db: D1Database, institutionId: string): Promise<Invitation[]> {
  const rows = await db
    .prepare(
      `SELECT id, email, role, created_at AS createdAt, expires_at AS expiresAt FROM institution_invitations
       WHERE institution_id = ? AND accepted_at IS NULL AND revoked_at IS NULL AND expires_at > ?
       ORDER BY created_at DESC LIMIT ?`,
    )
    .bind(institutionId, nowSeconds(), MAX_PENDING_INVITES)
    .all<Invitation>();
  return rows.results;
}

/** Returns the plain token once; only its hash is stored. */
export async function createInvitation(db: D1Database, userId: string, input: Record<string, unknown>): Promise<{ token: string; invitation: Invitation }> {
  const { institution } = await requireAdmin(db, userId);
  const email = normalizedInviteEmail(input.email);
  const inviteRole = role(input.role ?? "teacher");
  const member = await db
    .prepare("SELECT 1 FROM institution_members m JOIN users u ON u.id = m.user_id WHERE m.institution_id = ? AND lower(u.email) = ?")
    .bind(institution.id, email)
    .first();
  if (member) throw new InstitutionError("Esa persona ya forma parte de tu academia.", 409);
  const now = nowSeconds();
  const token = randomToken();
  const id = crypto.randomUUID();
  // Pending invitations to the same email are replaced, so only the newest link works.
  const result = await db.batch([
    db
      .prepare("UPDATE institution_invitations SET revoked_at = ? WHERE institution_id = ? AND email = ? AND accepted_at IS NULL AND revoked_at IS NULL")
      .bind(now, institution.id, email),
    db
      .prepare(
        `INSERT INTO institution_invitations (id, institution_id, email, role, token_hash, created_by, created_at, expires_at)
         SELECT ?, ?, ?, ?, ?, ?, ?, ?
         WHERE (SELECT count(*) FROM institution_invitations WHERE institution_id = ? AND accepted_at IS NULL AND revoked_at IS NULL AND expires_at > ?) < ?`,
      )
      .bind(id, institution.id, email, inviteRole, await sha256(token), userId, now, now + INVITE_TTL_SECONDS, institution.id, now, MAX_PENDING_INVITES),
  ]);
  if (!result[1]?.meta.changes) throw new InstitutionError("Hay demasiadas invitaciones pendientes. Revoca alguna antes de seguir.", 429);
  return { token, invitation: { id, email, role: inviteRole, createdAt: now, expiresAt: now + INVITE_TTL_SECONDS } };
}

export async function revokeInvitation(db: D1Database, userId: string, invitationId: unknown): Promise<void> {
  const { institution } = await requireAdmin(db, userId);
  if (typeof invitationId !== "string") throw new InstitutionError("Invitación no válida.");
  await db
    .prepare("UPDATE institution_invitations SET revoked_at = ? WHERE id = ? AND institution_id = ? AND accepted_at IS NULL AND revoked_at IS NULL")
    .bind(nowSeconds(), invitationId, institution.id)
    .run();
}

type InvitationRow = { id: string; institution_id: string; email: string; role: string; expires_at: number; accepted_at: number | null; revoked_at: number | null; name: string };

async function invitationByToken(db: D1Database, token: unknown): Promise<InvitationRow | null> {
  if (typeof token !== "string" || !/^[A-Za-z0-9_-]{40,60}$/.test(token)) return null;
  return db
    .prepare(
      `SELECT v.id, v.institution_id, v.email, v.role, v.expires_at, v.accepted_at, v.revoked_at, i.name
       FROM institution_invitations v JOIN institutions i ON i.id = v.institution_id WHERE v.token_hash = ?`,
    )
    .bind(await sha256(token))
    .first<InvitationRow>();
}

export type InvitationPreview =
  | { status: "valid"; institution: string; email: string; role: InstitutionRole }
  | { status: "invalid" };

export async function previewInvitation(db: D1Database, token: unknown): Promise<InvitationPreview> {
  const row = await invitationByToken(db, token);
  if (!row || row.accepted_at || row.revoked_at || row.expires_at <= nowSeconds()) return { status: "invalid" };
  return { status: "valid", institution: row.name, email: row.email, role: row.role === "admin" ? "admin" : "teacher" };
}

/** The invitation binds to its email: only an account signed in with that address can accept it. */
export async function acceptInvitation(db: D1Database, userId: string, userEmail: string | null, token: unknown): Promise<Membership> {
  const row = await invitationByToken(db, token);
  const now = nowSeconds();
  if (!row || row.accepted_at || row.revoked_at || row.expires_at <= now) throw new InstitutionError("La invitación no es válida o ya venció.", 410);
  if (!userEmail || userEmail.trim().toLowerCase() !== row.email) {
    throw new InstitutionError(`Esta invitación es para ${row.email}. Entra con esa cuenta para aceptarla.`, 403);
  }
  const existing = await getMembership(db, userId);
  if (existing) {
    if (existing.institution.id === row.institution_id) return existing;
    throw new InstitutionError("Tu cuenta ya pertenece a otra academia.", 409);
  }
  // Claiming the invitation first makes a second use of the same link fail.
  const claimed = await db
    .prepare("UPDATE institution_invitations SET accepted_at = ?, accepted_by = ? WHERE id = ? AND accepted_at IS NULL AND revoked_at IS NULL")
    .bind(now, userId, row.id)
    .run();
  if (!claimed.meta.changes) throw new InstitutionError("La invitación ya se usó.", 410);
  await db
    .prepare("INSERT INTO institution_members (institution_id, user_id, role, created_at) VALUES (?, ?, ?, ?) ON CONFLICT DO NOTHING")
    .bind(row.institution_id, userId, row.role === "admin" ? "admin" : "teacher", now)
    .run();
  await syncSeats(db, row.institution_id);
  const membership = await getMembership(db, userId);
  if (!membership) throw new InstitutionError("No pudimos unirte a la academia.", 503);
  return membership;
}

export async function removeMember(db: D1Database, actorId: string, targetUserId: unknown): Promise<void> {
  const { institution } = await requireAdmin(db, actorId);
  if (typeof targetUserId !== "string" || !targetUserId) throw new InstitutionError("Profesor no válido.");
  if (targetUserId === actorId) throw new InstitutionError("No puedes quitarte a ti mismo de la academia.");
  // One batch: a member never leaves while keeping this academy's PRO grant.
  const [result] = await db.batch([
    db.prepare("DELETE FROM institution_members WHERE institution_id = ? AND user_id = ?").bind(institution.id, targetUserId),
    revokeInstitutionGrant(db, targetUserId, institution.id),
  ]);
  if (!result.meta.changes) throw new InstitutionError("Esa persona no forma parte de tu academia.", 404);
  await syncSeats(db, institution.id);
}

export async function setMemberRole(db: D1Database, actorId: string, targetUserId: unknown, nextRole: unknown): Promise<void> {
  const { institution } = await requireAdmin(db, actorId);
  if (typeof targetUserId !== "string" || targetUserId === actorId) throw new InstitutionError("No puedes cambiar tu propio rol.");
  const result = await db
    .prepare("UPDATE institution_members SET role = ? WHERE institution_id = ? AND user_id = ?")
    .bind(role(nextRole), institution.id, targetUserId)
    .run();
  if (!result.meta.changes) throw new InstitutionError("Esa persona no forma parte de tu academia.", 404);
}

/* Owner (SpanishCue) operations: licences are set by hand after a real agreement. */

export async function listInstitutions(db: D1Database): Promise<InstitutionSummary[]> {
  const rows = await db
    .prepare(
      `SELECT i.id, i.name, i.city, i.website, i.seat_limit, i.created_at,
        (SELECT count(*) FROM institution_members m WHERE m.institution_id = i.id) AS members,
        (SELECT count(*) FROM access_grants g WHERE g.source = 'institution' AND g.source_reference = i.id AND g.status = 'active') AS seatsUsed,
        (SELECT group_concat(u.email, ', ') FROM institution_members m JOIN users u ON u.id = m.user_id
          WHERE m.institution_id = i.id AND m.role = 'admin') AS admins
       FROM institutions i ORDER BY i.created_at DESC LIMIT 500`,
    )
    .bind()
    .all<InstitutionRow & { members: number; seatsUsed: number; admins: string | null }>();
  return rows.results.map((row) => ({
    ...institutionFromRow(row), members: row.members, seatsUsed: row.seatsUsed, admins: row.admins ? row.admins.split(", ") : [],
  }));
}

export async function setSeatLimit(db: D1Database, institutionId: unknown, seats: unknown): Promise<void> {
  if (typeof institutionId !== "string" || !Number.isInteger(seats) || (seats as number) < 0 || (seats as number) > MAX_SEATS) {
    throw new InstitutionError("Cantidad de licencias no válida.");
  }
  const result = await db
    .prepare("UPDATE institutions SET seat_limit = ?, updated_at = ? WHERE id = ?")
    .bind(seats, nowSeconds(), institutionId)
    .run();
  if (!result.meta.changes) throw new InstitutionError("Academia no encontrada.", 404);
  await syncSeats(db, institutionId);
}
