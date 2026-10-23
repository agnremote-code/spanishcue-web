/** Institutional roles and seats never change global account roles or billing. */
export type InstitutionActor = { id: string; email: string; owner: boolean };
export class InstitutionError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}
const nowSeconds = () => Math.floor(Date.now() / 1000);
const fail = (message: string, status = 400): never => { throw new InstitutionError(message, status); };
const string = (v: unknown, max = 120) => typeof v === 'string' && v.trim().length <= max ? v.trim() : '';
const id = (v: unknown) => string(v, 100) || fail('Identificador no válido.');
const nameOf = (v: unknown) => { const name = string(v); return name.length >= 2 ? name : fail('Escribe un nombre de entre 2 y 120 caracteres.'); };
const keyOf = (v: unknown) => typeof v === 'string' && /^[A-Za-z0-9_-]{16,100}$/.test(v) ? v : fail('Clave de solicitud no válida.');
export async function tokenDigest(value: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('');
}
export async function institutionStorageReady(db: D1Database): Promise<boolean> {
  try {
    // Read required columns, so partial preparation cannot advertise a working dashboard.
    await db.prepare(`SELECT i.id,m.role,m.seat_allocated,l.seats,l.expires_at,v.token_hash FROM institutions i
      LEFT JOIN institution_memberships m ON m.institution_id=i.id LEFT JOIN institution_licenses l ON l.institution_id=i.id
      LEFT JOIN institution_invitations v ON v.institution_id=i.id LIMIT 1`).first();
    return true;
  } catch { return false; }
}
async function requireActor(db: D1Database, actor: InstitutionActor) {
  const row = await db.prepare("SELECT id FROM users WHERE id=? AND normalized_email=? AND status='active'")
    .bind(actor.id, actor.email.trim().toLowerCase()).first();
  if (!row) fail('Necesitas una cuenta activa con correo verificado.', 403);
}
async function requireAdministrator(db: D1Database, actor: InstitutionActor, institutionId: string) {
  await requireActor(db, actor);
  const row = await db.prepare(`SELECT i.id FROM institutions i JOIN institution_memberships m ON m.institution_id=i.id
    WHERE i.id=? AND i.status='active' AND m.user_id=? AND m.role='administrator' AND m.status='active'`)
    .bind(institutionId, actor.id).first();
  if (!row) fail('No tienes permiso para administrar esta academia.', 403);
}
// Recheck authorization inside every mutation: prior reads are not an authorization lock.
const ADMIN_SQL = `EXISTS(SELECT 1 FROM institution_memberships actor JOIN users u ON u.id=actor.user_id
 JOIN institutions i ON i.id=actor.institution_id WHERE actor.institution_id=? AND actor.user_id=?
 AND actor.status='active' AND actor.role='administrator' AND u.status='active' AND i.status='active')`;
export async function mutateInstitution(db: D1Database, actor: InstitutionActor, v: Record<string, unknown>) {
  await requireActor(db, actor);
  const now = nowSeconds();
  if (v.action === 'create') {
    const name = nameOf(v.name);
    const institutionId = 'inst-' + await tokenDigest(JSON.stringify([actor.id, keyOf(v.requestKey)]));
    const result = await db.batch([
      db.prepare(`INSERT INTO institutions(id,name,created_by,status,created_at,updated_at)
        SELECT ?,?,?,'active',?,? WHERE (SELECT count(*) FROM institutions WHERE created_by=?)<3
        AND EXISTS(SELECT 1 FROM users WHERE id=? AND status='active') ON CONFLICT(id) DO NOTHING`)
        .bind(institutionId, name, actor.id, now, now, actor.id, actor.id),
      db.prepare(`INSERT INTO institution_memberships(institution_id,user_id,role,status,seat_allocated,created_at,updated_at)
        SELECT id,?,'administrator','active',0,?,? FROM institutions WHERE id=? AND created_by=?
        ON CONFLICT(institution_id,user_id) DO NOTHING`).bind(actor.id, now, now, institutionId, actor.id),
    ]);
    if (!result[0].meta.changes && !await db.prepare('SELECT id FROM institutions WHERE id=? AND created_by=?').bind(institutionId, actor.id).first()) fail('Puedes registrar hasta tres academias. Contacta con soporte.', 429);
    return { institutionId };
  }
  const institutionId = id(v.institutionId);
  if (v.action === 'provision') {
    // The Worker derives owner from a verified session, never from this payload.
    if (!actor.owner) fail('Acceso exclusivo del propietario.', 403);
    const seats = v.seats, expiresAt = v.expiresAt;
    if (!Number.isInteger(seats) || Number(seats) < 0 || Number(seats) > 1000 || !Number.isInteger(expiresAt) || Number(expiresAt) <= now || Number(expiresAt) > now + 366 * 86400 * 5) fail('Cantidad o vencimiento no válidos.');
    const changed = await db.prepare(`INSERT INTO institution_licenses(institution_id,seats,starts_at,expires_at,provisioned_by,updated_at)
      SELECT id,?,?,?,?,? FROM institutions WHERE id=? AND status='active'
      AND EXISTS(SELECT 1 FROM users WHERE id=? AND role='owner' AND status='active')
      AND (SELECT count(*) FROM institution_memberships WHERE institution_id=? AND status='active' AND seat_allocated=1)<=?
      ON CONFLICT(institution_id) DO UPDATE SET seats=excluded.seats,starts_at=excluded.starts_at,
      expires_at=excluded.expires_at,provisioned_by=excluded.provisioned_by,updated_at=excluded.updated_at`)
      .bind(seats, now, expiresAt, actor.id, now, institutionId, actor.id, institutionId, seats).run();
    if (!changed.meta.changes) fail('No se puede preparar la licencia: comprueba la academia y las plazas asignadas.', 409);
    return { institutionId };
  }
  await requireAdministrator(db, actor, institutionId);
  let changed: D1Result;
  if (v.action === 'edit') {
    changed = await db.prepare(`UPDATE institutions SET name=?,updated_at=? WHERE id=? AND ${ADMIN_SQL}`)
      .bind(nameOf(v.name), now, institutionId, institutionId, actor.id).run();
  } else if (v.action === 'seat') {
    const userId = id(v.userId);
    if (typeof v.allocated !== 'boolean') fail('Asignación no válida.');
    // One conditional write obtains SQLite's writer lock before counting seats.
    changed = await db.prepare(`UPDATE institution_memberships SET seat_allocated=?,updated_at=?
      WHERE institution_id=? AND user_id=? AND status='active' AND ${ADMIN_SQL}
      AND EXISTS(SELECT 1 FROM users WHERE id=? AND status='active')
      AND (?=0 OR EXISTS(SELECT 1 FROM institution_licenses l WHERE l.institution_id=? AND l.starts_at<=?
        AND l.expires_at>? AND (seat_allocated=1 OR (SELECT count(*) FROM institution_memberships seats
        WHERE seats.institution_id=? AND seats.status='active' AND seats.seat_allocated=1)<l.seats)))`)
      .bind(v.allocated ? 1 : 0, now, institutionId, userId, institutionId, actor.id, userId,
        v.allocated ? 1 : 0, institutionId, now, now, institutionId).run();
  } else if (v.action === 'member') {
    if (v.active !== false) fail('Para incorporar a un profesor, envía una invitación.');
    const userId = id(v.userId);
    if (userId === actor.id) fail('Otro administrador debe retirar tu pertenencia.', 409);
    changed = await db.prepare(`UPDATE institution_memberships SET status='revoked',seat_allocated=0,updated_at=?
      WHERE institution_id=? AND user_id=? AND ${ADMIN_SQL}`).bind(now, institutionId, userId, institutionId, actor.id).run();
  } else if (v.action === 'revoke-invite') {
    changed = await db.prepare(`UPDATE institution_invitations SET status='revoked',updated_at=?
      WHERE id=? AND institution_id=? AND status IN ('sending','sent','failed') AND ${ADMIN_SQL}`)
      .bind(now, id(v.invitationId), institutionId, institutionId, actor.id).run();
    // Repeating a completed revocation is a successful no-op within this scope.
    if (!changed.meta.changes && await db.prepare("SELECT id FROM institution_invitations WHERE id=? AND institution_id=? AND status='revoked'").bind(id(v.invitationId), institutionId).first()) return { institutionId };
  } else fail('Operación no válida.');
  if (!changed!.meta.changes) fail('No se pudo realizar la operación. Comprueba la pertenencia, las plazas y el vencimiento.', 409);
  return { institutionId };
}
export async function institutionDashboard(db: D1Database, actor: InstitutionActor, selected?: string | null) {
  await requireActor(db, actor);
  const institutions = (await db.prepare(`SELECT i.id,i.name,m.role FROM institutions i
    JOIN institution_memberships m ON m.institution_id=i.id WHERE m.user_id=? AND m.status='active' AND i.status='active'
    ORDER BY i.created_at LIMIT 100`).bind(actor.id).all<{id: string;name: string;role: string}>()).results;
  const institution = institutions.find(item => item.id === selected) || (!selected ? institutions[0] : undefined);
  const ownerInstitutions = actor.owner ? (await db.prepare(`SELECT i.id,i.name,l.seats,l.expires_at AS expiresAt,(SELECT count(*) FROM institution_memberships m WHERE m.institution_id=i.id AND m.seat_allocated=1 AND m.status='active') AS allocated FROM institutions i LEFT JOIN institution_licenses l ON l.institution_id=i.id WHERE i.status='active' ORDER BY i.created_at DESC LIMIT 200`).all()).results : undefined;
  if (!institution) return { institutions, ownerInstitutions };
  const license = await db.prepare(`SELECT seats,starts_at AS startsAt,expires_at AS expiresAt,
    (SELECT count(*) FROM institution_memberships m WHERE m.institution_id=l.institution_id AND m.status='active' AND m.seat_allocated=1) AS allocated
    FROM institution_licenses l WHERE institution_id=?`).bind(institution.id).first<{seats:number;startsAt:number;expiresAt:number;allocated:number}>();
  const members = (await db.prepare(`SELECT m.user_id AS userId,u.email,u.display_name AS displayName,m.role,m.status,m.seat_allocated AS seatAllocated
    FROM institution_memberships m JOIN users u ON u.id=m.user_id WHERE m.institution_id=? AND (m.user_id=? OR ?='administrator')
    ORDER BY m.created_at LIMIT 1000`).bind(institution.id, actor.id, institution.role).all()).results;
  const invitations = institution.role === 'administrator' ? (await db.prepare(`SELECT id,email,role,status,expires_at AS expiresAt,created_at AS createdAt
    FROM institution_invitations WHERE institution_id=? ORDER BY created_at DESC LIMIT 100`).bind(institution.id).all()).results : [];
  return { institutions, ownerInstitutions, institution, license, members, invitations };
}
export async function createInstitutionInvitation(db: D1Database, actor: InstitutionActor, v: Record<string, unknown>) {
  const institutionId = id(v.institutionId);
  await requireAdministrator(db, actor, institutionId);
  const email = string(v.email, 254).toLowerCase();
  if (!/^[^\s@,;<>?&#%]+@[^\s@,;<>?&#%]+\.[^\s@,;<>?&#%]+$/.test(email)) fail('Correo no válido.');
  const role = v.role;
  if (role !== 'teacher' && role !== 'administrator') fail('Rol no válido.');
  const invitationId = 'invite-' + await tokenDigest(JSON.stringify([actor.id, institutionId, keyOf(v.requestKey), email, role]));
  const existing = await db.prepare('SELECT id,status FROM institution_invitations WHERE id=?').bind(invitationId).first<{id:string;status:string}>();
  if (existing) return { id: existing.id, created: false, status: existing.status };
  const token = Array.from(crypto.getRandomValues(new Uint8Array(32)), byte => byte.toString(16).padStart(2, '0')).join('');
  const now = nowSeconds(), expiresAt = now + 7 * 86400;
  const inserted = await db.prepare(`INSERT INTO institution_invitations(id,institution_id,email,role,token_hash,invited_by,status,expires_at,created_at,updated_at)
    SELECT ?,?,?,?,?,?,'sending',?,?,? WHERE ${ADMIN_SQL}
    AND (SELECT count(*) FROM institution_invitations WHERE invited_by=? AND created_at>?)<20
    AND (SELECT count(*) FROM institution_invitations WHERE institution_id=? AND email=? AND created_at>?)<3
    AND NOT EXISTS(SELECT 1 FROM institution_memberships m JOIN users u ON u.id=m.user_id WHERE m.institution_id=? AND u.normalized_email=? AND m.status='active')
    AND NOT EXISTS(SELECT 1 FROM institution_invitations WHERE institution_id=? AND email=? AND status IN ('sending','sent') AND expires_at>?)
    ON CONFLICT(id) DO NOTHING`).bind(invitationId, institutionId, email, role, await tokenDigest(token), actor.id, expiresAt, now, now,
      institutionId, actor.id, actor.id, now - 3600, institutionId, email, now - 3600, institutionId, email, institutionId, email, now).run();
  if (!inserted.meta.changes) {
    const retry = await db.prepare('SELECT id,status FROM institution_invitations WHERE id=?').bind(invitationId).first<{id:string;status:string}>();
    if (retry) return { id: retry.id, created: false, status: retry.status };
    fail('Ya existe una invitación o se alcanzó el límite de envíos. Revisa el equipo y vuelve a intentarlo más tarde.', 429);
  }
  const institution = await db.prepare('SELECT name FROM institutions WHERE id=?').bind(institutionId).first<{name:string}>();
  return { id: invitationId, created: true, token, email, institutionName: institution!.name, expiresAt, status: 'sending' };
}
export async function markInvitationDelivery(db: D1Database, invitationId: string, sent: boolean) {
  await db.prepare("UPDATE institution_invitations SET status=?,updated_at=? WHERE id=? AND status='sending'")
    .bind(sent ? 'sent' : 'failed', nowSeconds(), invitationId).run();
}
export async function acceptInstitutionInvitation(db: D1Database, actor: InstitutionActor, token: unknown) {
  await requireActor(db, actor);
  if (typeof token !== 'string' || !/^[a-f0-9]{64}$/.test(token)) fail('Invitación no válida.', 403);
  const hash = await tokenDigest(token as string), now = nowSeconds();
  const invitation = await db.prepare(`SELECT id,institution_id AS institutionId,status,accepted_by AS acceptedBy FROM institution_invitations
    WHERE token_hash=? AND email=?`).bind(hash, actor.email.trim().toLowerCase()).first<{id:string;institutionId:string;status:string;acceptedBy:string|null}>();
  if (!invitation) fail('La invitación no corresponde a tu correo verificado.', 403);
  if (invitation!.status === 'accepted' && invitation!.acceptedBy === actor.id) return { institutionId: invitation!.institutionId };
  const results = await db.batch([
    db.prepare(`INSERT INTO institution_memberships(institution_id,user_id,role,status,seat_allocated,created_at,updated_at)
      SELECT v.institution_id,?,v.role,'active',0,?,? FROM institution_invitations v JOIN institutions i ON i.id=v.institution_id
      WHERE v.id=? AND v.token_hash=? AND v.email=? AND v.status='sent' AND v.expires_at>? AND i.status='active'
      AND EXISTS(SELECT 1 FROM users WHERE id=? AND status='active' AND normalized_email=v.email)
      AND EXISTS(SELECT 1 FROM institution_memberships inviter JOIN users u ON u.id=inviter.user_id
        WHERE inviter.institution_id=v.institution_id AND inviter.user_id=v.invited_by AND inviter.role='administrator' AND inviter.status='active' AND u.status='active')
      ON CONFLICT(institution_id,user_id) DO UPDATE SET role=excluded.role,status='active',seat_allocated=0,updated_at=excluded.updated_at
      WHERE institution_memberships.status='revoked'`).bind(actor.id, now, now, invitation!.id, hash, actor.email.trim().toLowerCase(), now, actor.id),
    db.prepare(`UPDATE institution_invitations SET status='accepted',accepted_by=?,updated_at=? WHERE id=? AND status='sent' AND expires_at>? AND changes()=1
      AND EXISTS(SELECT 1 FROM institution_memberships m WHERE m.institution_id=institution_invitations.institution_id AND m.user_id=? AND m.status='active')`)
      .bind(actor.id, now, invitation!.id, now, actor.id),
  ]);
  if (!results[0].meta.changes || !results[1].meta.changes) {
    // A parallel acceptance may have committed after the initial read. Replays
    // report its result but never reactivate membership or allocate a seat.
    const accepted = await db.prepare("SELECT id FROM institution_invitations WHERE id=? AND status='accepted' AND accepted_by=?")
      .bind(invitation!.id, actor.id).first();
    if (!accepted) fail('La invitación venció, fue retirada o ya no está disponible. Solicita una nueva.', 409);
  }
  return { institutionId: invitation!.institutionId };
}
/** Optional additive entitlement; missing/newly unavailable tables preserve personal access. */
export async function institutionalAccess(db: D1Database, userId: string) {
  try {
    return await db.prepare(`SELECT l.expires_at AS expiresAt FROM institution_memberships m
      JOIN institutions i ON i.id=m.institution_id JOIN institution_licenses l ON l.institution_id=i.id
      JOIN users u ON u.id=m.user_id WHERE m.user_id=? AND u.status='active' AND m.status='active' AND m.seat_allocated=1
      AND i.status='active' AND l.starts_at<=? AND l.expires_at>? ORDER BY l.expires_at DESC LIMIT 1`)
      .bind(userId, nowSeconds(), nowSeconds()).first<{expiresAt:number}>();
  } catch { return null; }
}
