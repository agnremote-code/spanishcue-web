import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';

// Thursday reliability review 2026-11-12: client and race errors must not be
// reported as outages (503 / bare 500), and a D1 outage must answer JSON no-store.

async function database() {
  const sqlite = new DatabaseSync(':memory:');
  for (const file of (await readdir('drizzle')).filter(name => name.endsWith('.sql')).sort()) sqlite.exec(await readFile(`drizzle/${file}`, 'utf8'));
  const statement = (query, values = []) => ({
    bind: (...next) => statement(query, next),
    async first() { return sqlite.prepare(query).get(...values) ?? null; },
    async all() { return { results: sqlite.prepare(query).all(...values) }; },
    async run() { return { meta: { changes: Number(sqlite.prepare(query).run(...values).changes) } }; },
  });
  const db = {
    prepare: query => statement(query),
    async batch(list) {
      sqlite.exec('BEGIN');
      try { const out = []; for (const item of list) out.push(await item.run()); sqlite.exec('COMMIT'); return out; } catch (error) { sqlite.exec('ROLLBACK'); throw error; }
    },
  };
  const user = (id, email) => {
    sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES (?,?,?, 'teacher', 'active',1,1,1)").run(id, email, email);
  };
  return { sqlite, db, user };
}

async function load() {
  const bundle = await build({ stdin: { contents: `export { POST } from './app/api/academy/route'; export { POST as ownerPOST } from './app/api/admin/academies/route'; export { POST as rosterPOST } from './app/api/roster/route';`, resolveDir: process.cwd() }, bundle: true, write: false, format: 'esm', platform: 'node', plugins: [{ name: 'env', setup(b) {
    b.onResolve({ filter: /^cloudflare:workers$/ }, () => ({ path: 'env', namespace: 'test-env' }));
    b.onLoad({ filter: /.*/, namespace: 'test-env' }, () => ({ contents: 'export const env = new Proxy({}, { get: (_, key) => globalThis.__ERROR_CODES_TEST_ENV[key] });' }));
  } }] });
  return import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
}

const origin = 'https://spanishcue.test';
const routes = await load();

test('two concurrent "create" requests for one account: one succeeds, the other is a 409 conflict', async () => {
  const { sqlite, db, user } = await database();
  globalThis.__ERROR_CODES_TEST_ENV = { DB: db };
  user('admin1', 'dir@academia.test');
  const headers = { 'x-chespanish-account-id': 'admin1', 'x-chespanish-user-email': 'dir@academia.test', 'x-chespanish-user-uid': 'uid-admin1', origin, 'content-type': 'application/json' };
  const create = name => routes.POST(new Request(`${origin}/api/academy`, { method: 'POST', headers, body: JSON.stringify({ action: 'create', name }) }));
  const statuses = (await Promise.all([create('Academia A'), create('Academia B')])).map(response => response.status).sort();
  assert.deepEqual(statuses, [200, 409]);
  assert.equal(sqlite.prepare('SELECT count(*) AS n FROM institutions').get().n, 1, 'the losing batch rolled back');
});

test('owner academies POST: a malformed or non-object body is a 400, not a 503', async () => {
  const { db } = await database();
  globalThis.__ERROR_CODES_TEST_ENV = { DB: db };
  const owner = { 'x-chespanish-owner': '1', 'x-chespanish-user-uid': 'owner', 'x-chespanish-user-email': 'owner@example.test', origin, 'content-type': 'application/json' };
  for (const body of ['{not json', 'null', '[]', '"seats"']) {
    const response = await routes.ownerPOST(new Request(`${origin}/api/admin/academies`, { method: 'POST', headers: owner, body }));
    assert.equal(response.status, 400, `body ${body}`);
    assert.equal(response.headers.get('cache-control'), 'private, no-store');
  }
  const anonymous = await routes.ownerPOST(new Request(`${origin}/api/admin/academies`, { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: 'null' }));
  assert.equal(anonymous.status, 403, 'authorization is still checked before the body');
});

test('roster POST: a D1 failure answers a JSON 503 with no-store instead of throwing', async () => {
  const failing = { prepare() { throw new Error('D1_ERROR: storage unavailable'); }, async batch() { throw new Error('D1_ERROR'); } };
  globalThis.__ERROR_CODES_TEST_ENV = { DB: failing };
  const teacher = { 'x-chespanish-user-uid': 'uid-teacher', 'x-chespanish-user-email': 'profe@example.test', origin, 'content-type': 'application/json' };
  for (const body of [{ action: 'sync' }, { action: 'link', learnerId: 'learner-0001', studentId: 'student-0001' }]) {
    const response = await routes.rosterPOST(new Request(`${origin}/api/roster`, { method: 'POST', headers: teacher, body: JSON.stringify(body) }));
    assert.equal(response.status, 503, body.action);
    assert.equal(response.headers.get('cache-control'), 'private, no-store');
    assert.match((await response.json()).error, /Inténtalo de nuevo/);
  }
  // Unchanged: anonymous 401, foreign origin 403, unknown action 400.
  assert.equal((await routes.rosterPOST(new Request(`${origin}/api/roster`, { method: 'POST', headers: { origin }, body: '{}' }))).status, 401);
  assert.equal((await routes.rosterPOST(new Request(`${origin}/api/roster`, { method: 'POST', headers: { ...teacher, origin: 'https://evil.test' }, body: '{}' }))).status, 403);
  assert.equal((await routes.rosterPOST(new Request(`${origin}/api/roster`, { method: 'POST', headers: teacher, body: '{"action":"other"}' }))).status, 400);
});
