import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';

// Races in db/institutions.ts (Thursday review 2026-11-05, audit items M2 and L1 of 2026-10-29).
// The shim runs a one-shot `beforeWrite` hook just before the next write reaches the database,
// which is exactly where a concurrent request can land between a read and the write that relies on it.
async function database() {
  const sqlite = new DatabaseSync(':memory:');
  for (const file of (await readdir('drizzle')).filter(name => name.endsWith('.sql')).sort()) sqlite.exec(await readFile(`drizzle/${file}`, 'utf8'));
  let beforeWrite = null;
  const fire = async () => { const hook = beforeWrite; beforeWrite = null; if (hook) await hook(); };
  const statement = (query, values = []) => ({
    query,
    bind: (...next) => statement(query, next),
    async first() { return sqlite.prepare(query).get(...values) ?? null; },
    async all() { return { results: sqlite.prepare(query).all(...values) }; },
    async run(inBatch = false) {
      if (!inBatch && /^\s*(INSERT|UPDATE|DELETE)/i.test(query)) await fire();
      return { meta: { changes: Number(sqlite.prepare(query).run(...values).changes) } };
    },
  });
  const db = {
    prepare: query => statement(query),
    async batch(list) {
      await fire();
      sqlite.exec('BEGIN');
      try { const out = []; for (const item of list) out.push(await item.run(true)); sqlite.exec('COMMIT'); return out; } catch (error) { sqlite.exec('ROLLBACK'); throw error; }
    },
    onNextWrite(hook) { beforeWrite = hook; },
  };
  const user = (id, email) => sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES (?,?,?, 'teacher', 'active',1,1,1)").run(id, email, email);
  const activeSeats = institutionId => sqlite.prepare("SELECT count(*) AS n FROM access_grants WHERE source = 'institution' AND source_reference = ? AND status = 'active'").get(institutionId).n;
  return { sqlite, db, user, activeSeats };
}

async function load() {
  const bundle = await build({ entryPoints: ['db/institutions.ts'], bundle: true, write: false, format: 'esm', platform: 'node' });
  return import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
}

async function academy(institutions, db, user, admin, name, teachers = []) {
  user(admin, `${admin}@academia.test`);
  const { institution } = await institutions.createInstitution(db, admin, { name });
  for (const id of teachers) {
    user(id, `${id}@academia.test`);
    const { token } = await institutions.createInvitation(db, admin, { email: `${id}@academia.test` });
    await institutions.acceptInvitation(db, id, `${id}@academia.test`, token);
  }
  return institution.id;
}

test('a seat sync that read the limit before a reduction cannot re-grant the removed seats', async () => {
  const institutions = await load();
  const { db, user, activeSeats } = await database();
  const id = await academy(institutions, db, user, 'admin1', 'Academia Uno', ['t1', 't2']);
  await institutions.setSeatLimit(db, id, 3);
  assert.equal(activeSeats(id), 3);

  // A sync (for example from a join) is between its reads and its writes when the owner cuts the
  // academy to one seat; the cut finishes first, then the stale sync writes.
  db.onNextWrite(() => institutions.setSeatLimit(db, id, 1));
  await institutions.syncSeats(db, id);

  assert.equal(activeSeats(id), 1, 'the seat limit holds after the stale sync');
  await institutions.syncSeats(db, id);
  assert.equal(activeSeats(id), 1, 'idempotent');
});

test('a join to another academy between the checks and the claim leaves the invitation unused', async () => {
  const institutions = await load();
  const { sqlite, db, user } = await database();
  const one = await academy(institutions, db, user, 'admin1', 'Academia Uno');
  await institutions.setSeatLimit(db, one, 5);
  user('t1', 't1@academia.test');
  const { token, invitation } = await institutions.createInvitation(db, 'admin1', { email: 't1@academia.test' });

  // While t1 accepts academy one, another request makes t1 the creator of academy two.
  db.onNextWrite(() => institutions.createInstitution(db, 't1', { name: 'Academia Dos' }));
  await assert.rejects(
    institutions.acceptInvitation(db, 't1', 't1@academia.test', token),
    error => error.status === 409 && /otra academia/.test(error.message),
  );

  const row = sqlite.prepare('SELECT accepted_at, accepted_by FROM institution_invitations WHERE id = ?').get(invitation.id);
  assert.equal(row.accepted_at, null, 'the link is not burnt');
  assert.equal(row.accepted_by, null);
  assert.equal(sqlite.prepare('SELECT count(*) AS n FROM institution_members WHERE institution_id = ? AND user_id = ?').get(one, 't1').n, 0);
  assert.equal(sqlite.prepare("SELECT count(*) AS n FROM access_grants WHERE user_id = 't1' AND source_reference = ?").get(one).n, 0, 'no seat in academy one');
});

test('accepting still works, is single-use, and respects the seat limit', async () => {
  const institutions = await load();
  const { sqlite, db, user, activeSeats } = await database();
  const id = await academy(institutions, db, user, 'admin1', 'Academia Uno');
  await institutions.setSeatLimit(db, id, 2);
  for (const teacher of ['t1', 't2']) user(teacher, `${teacher}@academia.test`);
  const first = await institutions.createInvitation(db, 'admin1', { email: 't1@academia.test' });
  const membership = await institutions.acceptInvitation(db, 't1', 't1@academia.test', first.token);
  assert.equal(membership.institution.id, id);
  assert.equal(membership.role, 'teacher');
  assert.equal(sqlite.prepare('SELECT accepted_by FROM institution_invitations WHERE id = ?').get(first.invitation.id).accepted_by, 't1');
  // Re-opening the same link as the same member is harmless.
  await assert.rejects(institutions.acceptInvitation(db, 't1', 't1@academia.test', first.token), error => error.status === 410);

  const second = await institutions.createInvitation(db, 'admin1', { email: 't2@academia.test', role: 'admin' });
  assert.equal((await institutions.acceptInvitation(db, 't2', 't2@academia.test', second.token)).role, 'admin');
  assert.equal(activeSeats(id), 2, 'third member by join date has no seat');
  assert.equal(sqlite.prepare("SELECT count(*) AS n FROM access_grants WHERE user_id = 't2' AND status = 'active'").get().n, 0);

  // An invitation revoked between the read and the claim is refused and adds nobody.
  user('t3', 't3@academia.test');
  const third = await institutions.createInvitation(db, 'admin1', { email: 't3@academia.test' });
  db.onNextWrite(() => { sqlite.prepare('UPDATE institution_invitations SET revoked_at = 1 WHERE id = ?').run(third.invitation.id); });
  await assert.rejects(institutions.acceptInvitation(db, 't3', 't3@academia.test', third.token), error => error.status === 410);
  assert.equal(sqlite.prepare("SELECT count(*) AS n FROM institution_members WHERE user_id = 't3'").get().n, 0);
});
