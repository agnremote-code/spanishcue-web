import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';

// Full schema from every migration, so access_grants/users behave as in production.
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
  const user = (id, email, role = 'teacher') => {
    sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES (?,?,?,?, 'active',1,1,1)").run(id, email, email, role);
    sqlite.prepare("INSERT INTO auth_identities (user_id,provider,provider_subject,email_verified,created_at,last_seen_at) VALUES (?, 'firebase', ?, 1, 1, 1)").run(id, `uid-${id}`);
  };
  return { sqlite, db, user };
}

async function load() {
  const bundle = await build({ stdin: { contents: `export { GET, POST } from './app/api/academy/route'; export { GET as ownerGET, POST as ownerPOST } from './app/api/admin/academies/route'; export { resolveFirebaseAccount } from './db/accounts';`, resolveDir: process.cwd() }, bundle: true, write: false, format: 'esm', platform: 'node', plugins: [{ name: 'env', setup(b) {
    b.onResolve({ filter: /^cloudflare:workers$/ }, () => ({ path: 'env', namespace: 'test-env' }));
    b.onLoad({ filter: /.*/, namespace: 'test-env' }, () => ({ contents: 'export const env = new Proxy({}, { get: (_, key) => globalThis.__INSTITUTION_TEST_ENV[key] });' }));
  } }] });
  return import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
}

const origin = 'https://spanishcue.test';
const as = (id, email) => ({ 'x-chespanish-account-id': id, 'x-chespanish-user-email': email, 'x-chespanish-user-uid': `uid-${id}` });
const post = (who, body, extra = {}) => new Request(`${origin}/api/academy`, { method: 'POST', headers: { ...who, origin, 'content-type': 'application/json', ...extra }, body: JSON.stringify(body) });

test('migration 0017 is CREATE-only and retry-safe', async () => {
  const sql = await readFile('drizzle/0017_institutions.sql', 'utf8');
  assert.doesNotMatch(sql, /\b(DROP|DELETE|UPDATE|ALTER|INSERT)\b/i);
  const sqlite = new DatabaseSync(':memory:');
  sqlite.exec("CREATE TABLE existing_data (value TEXT); INSERT INTO existing_data VALUES ('keep')");
  sqlite.exec(sql); sqlite.exec(sql);
  assert.equal(sqlite.prepare('SELECT value FROM existing_data').get().value, 'keep');
});

test('academies: admin registers, invites, licences grant access, isolation holds', async () => {
  const { sqlite, db, user } = await database();
  globalThis.__INSTITUTION_TEST_ENV = { DB: db };
  const routes = await load();
  user('admin1', 'dir@academia.test'); user('t1', 'profe@academia.test'); user('t2', 'otra@academia.test');
  user('admin2', 'dir@otra.test'); user('outsider', 'nadie@example.test');
  const admin = as('admin1', 'dir@academia.test');
  const teacher = as('t1', 'profe@academia.test');

  assert.equal((await routes.POST(post(admin, { action: 'create', name: 'Academia Uno' }, { origin: 'https://evil.test' }))).status, 403);
  assert.equal((await routes.POST(new Request(`${origin}/api/academy`, { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: '{}' }))).status, 401);
  assert.equal((await routes.POST(post(admin, { action: 'create', name: '' }))).status, 400);
  const created = await routes.POST(post(admin, { action: 'create', name: 'Academia Uno', city: 'Madrid', website: 'academia.test' }));
  assert.equal(created.status, 200);
  const createdBody = await created.json();
  assert.equal(createdBody.membership.role, 'admin');
  assert.equal(createdBody.membership.institution.website, 'https://academia.test/');
  assert.equal(created.headers.get('cache-control'), 'private, no-store');
  assert.equal((await routes.POST(post(admin, { action: 'create', name: 'Otra' }))).status, 409, 'one institution per account');
  const institutionId = createdBody.membership.institution.id;

  // A teacher (or anyone else) cannot invite or read administrative data.
  assert.equal((await routes.POST(post(teacher, { action: 'invite', email: 'x@example.test' }))).status, 403);

  const invited = await (await routes.POST(post(admin, { action: 'invite', email: 'PROFE@academia.test', role: 'teacher' }))).json();
  const token = new URL(invited.link).searchParams.get('token');
  assert.match(token, /^[A-Za-z0-9_-]{43}$/);
  assert.equal(sqlite.prepare('SELECT count(*) AS n FROM institution_invitations WHERE token_hash = ?').get(token).n, 0, 'only the hash is stored');
  assert.equal(invited.invitations.length, 1);

  // The invitation binds to its email.
  assert.equal((await routes.POST(post(as('outsider', 'nadie@example.test'), { action: 'accept', token }))).status, 403);
  assert.equal((await routes.POST(post(teacher, { action: 'accept', token: 'x'.repeat(43) }))).status, 410);
  const joined = await routes.POST(post(teacher, { action: 'accept', token }));
  assert.equal(joined.status, 200);
  const joinedBody = await joined.json();
  assert.equal(joinedBody.membership.role, 'teacher');
  assert.equal(joinedBody.members, undefined, 'teachers never receive the member list');
  assert.equal((await routes.POST(post(teacher, { action: 'accept', token }))).status, 410, 'a link works once');

  // No licences yet: members stay on their own access level.
  const resolve = id => routes.resolveFirebaseAccount(db, { uid: `uid-${id}`, email: '', emailVerified: true, displayName: null });
  assert.equal((await resolve('t1')).accessLevel, 'free');

  // Only the SpanishCue owner sets licences.
  const ownerPost = (owner, body) => new Request(`${origin}/api/admin/academies`, { method: 'POST', headers: { origin, 'content-type': 'application/json', ...(owner ? { 'x-chespanish-owner': '1' } : {}) }, body: JSON.stringify(body) });
  assert.equal((await routes.ownerPOST(ownerPost(false, { institutionId, seats: 5 }))).status, 403);
  assert.equal((await routes.ownerGET(new Request(`${origin}/api/admin/academies`))).status, 403);
  assert.equal((await routes.ownerPOST(ownerPost(true, { institutionId, seats: -1 }))).status, 400);
  assert.equal((await routes.ownerPOST(ownerPost(true, { institutionId, seats: 1 }))).status, 200);
  assert.equal((await resolve('admin1')).accessLevel, 'full', 'first member by join date holds the seat');
  assert.equal((await resolve('admin1')).accessSource, 'institution');
  assert.equal((await resolve('t1')).accessLevel, 'free', 'seat limit is enforced');
  await routes.ownerPOST(ownerPost(true, { institutionId, seats: 2 }));
  assert.equal((await resolve('t1')).accessLevel, 'full');
  const listed = await (await routes.ownerGET(new Request(`${origin}/api/admin/academies`, { headers: { 'x-chespanish-owner': '1' } }))).json();
  assert.equal(listed.items[0].seatsUsed, 2);
  assert.deepEqual(listed.items[0].admins, ['dir@academia.test']);

  // A second academy's admin cannot touch the first academy's members.
  const other = as('admin2', 'dir@otra.test');
  await routes.POST(post(other, { action: 'create', name: 'Academia Dos' }));
  assert.equal((await routes.POST(post(other, { action: 'remove-member', userId: 't1' }))).status, 404);
  const otherState = await (await routes.GET(new Request(`${origin}/api/academy`, { headers: other }))).json();
  assert.deepEqual(otherState.members.map(m => m.userId), ['admin2']);
  assert.equal((await resolve('t1')).accessLevel, 'full');

  // A personal manual grant survives institutional changes.
  sqlite.prepare("INSERT INTO access_grants (user_id,product_code,access_level,source,plan_code,status,starts_at,created_at,updated_at) VALUES ('t2','teacher_library','full','manual','manual','active',0,0,0)").run();
  const second = await (await routes.POST(post(admin, { action: 'invite', email: 'otra@academia.test' }))).json();
  await routes.POST(post(as('t2', 'otra@academia.test'), { action: 'accept', token: new URL(second.link).searchParams.get('token') }));
  assert.equal((await resolve('t2')).accessSource, 'manual');

  // Removing a member revokes only the institutional grant; admins cannot remove themselves.
  assert.equal((await routes.POST(post(admin, { action: 'remove-member', userId: 'admin1' }))).status, 400);
  assert.equal((await routes.POST(post(admin, { action: 'remove-member', userId: 't1' }))).status, 200);
  assert.equal((await resolve('t1')).accessLevel, 'free');
  assert.equal((await resolve('t2')).accessLevel, 'full');
  await routes.ownerPOST(ownerPost(true, { institutionId, seats: 0 }));
  assert.equal((await resolve('admin1')).accessLevel, 'free');
  assert.equal((await resolve('t2')).accessSource, 'manual', 'personal access is never revoked by an academy');

  // Revoked and replaced invitations stop working.
  const third = await (await routes.POST(post(admin, { action: 'invite', email: 'nadie@example.test' }))).json();
  const replaced = await (await routes.POST(post(admin, { action: 'invite', email: 'nadie@example.test' }))).json();
  assert.equal(replaced.invitations.filter(i => i.email === 'nadie@example.test').length, 1);
  assert.equal((await routes.POST(post(as('outsider', 'nadie@example.test'), { action: 'accept', token: new URL(third.link).searchParams.get('token') }))).status, 410);
  await routes.POST(post(admin, { action: 'revoke-invite', invitationId: replaced.invitation.id }));
  assert.equal((await routes.POST(post(as('outsider', 'nadie@example.test'), { action: 'accept', token: new URL(replaced.link).searchParams.get('token') }))).status, 410);

  // Database errors never leak.
  globalThis.__INSTITUTION_TEST_ENV.DB = { prepare() { throw new Error('PRIVATE_DATABASE_ERROR'); } };
  const failed = await routes.GET(new Request(`${origin}/api/academy`, { headers: admin }));
  assert.equal(failed.status, 503);
  assert.doesNotMatch(await failed.text(), /PRIVATE_DATABASE_ERROR/);
  sqlite.close();
});

test('academy panel stays unavailable until the additive migration runs', async () => {
  const sqlite = new DatabaseSync(':memory:');
  globalThis.__INSTITUTION_TEST_ENV = { DB: { prepare: q => ({ bind: () => ({ async first() { return sqlite.prepare(q).get() ?? null; } }) }) } };
  const routes = await load();
  const response = await routes.GET(new Request(`${origin}/api/academy`, { headers: as('a', 'a@example.test') }));
  assert.equal(response.status, 503);
  const worker = await readFile('worker/index.ts', 'utf8');
  for (const path of ['/api/academy', '/academias/panel', '/academias/unirse']) assert.ok(worker.includes(`pathname==='${path}'`), `${path} must receive verified identity`);
});

test('removing a member never leaves a PRO grant behind, and any sync revokes an orphaned one', async () => {
  const { sqlite, db, user } = await database();
  let failRevoke = false;
  // Same database, but the grant revoke fails on demand (a transient D1 error).
  const flaky = { ...db, prepare: query => {
    const wrap = statement => ({ ...statement, bind: (...v) => wrap(statement.bind(...v)),
      async run() { if (failRevoke && /SET status = 'revoked'/.test(query)) throw new Error('D1 transient'); return statement.run(); } });
    return wrap(db.prepare(query));
  } };
  globalThis.__INSTITUTION_TEST_ENV = { DB: flaky };
  const routes = await load();
  user('admin1', 'dir@academia.test'); user('t1', 'profe@academia.test'); user('t2', 'dos@academia.test');
  const admin = as('admin1', 'dir@academia.test');
  const institutionId = (await (await routes.POST(post(admin, { action: 'create', name: 'Academia Uno' }))).json()).membership.institution.id;
  for (const [id, email] of [['t1', 'profe@academia.test'], ['t2', 'dos@academia.test']]) {
    const invited = await (await routes.POST(post(admin, { action: 'invite', email }))).json();
    assert.equal((await routes.POST(post(as(id, email), { action: 'accept', token: new URL(invited.link).searchParams.get('token') }))).status, 200);
  }
  const ownerPost = body => new Request(`${origin}/api/admin/academies`, { method: 'POST', headers: { origin, 'content-type': 'application/json', 'x-chespanish-owner': '1' }, body: JSON.stringify(body) });
  assert.equal((await routes.ownerPOST(ownerPost({ institutionId, seats: 3 }))).status, 200);
  const resolve = id => routes.resolveFirebaseAccount(db, { uid: `uid-${id}`, email: '', emailVerified: true, displayName: null });
  assert.equal((await resolve('t1')).accessLevel, 'full');

  // The revoke fails: the removal must not half-happen, so a retry can finish it.
  failRevoke = true;
  assert.equal((await routes.POST(post(admin, { action: 'remove-member', userId: 't1' }))).status, 503);
  failRevoke = false;
  assert.equal(sqlite.prepare("SELECT count(*) AS n FROM institution_members WHERE user_id = 't1'").get().n, 1, 'membership kept when the revoke failed');
  assert.equal((await routes.POST(post(admin, { action: 'remove-member', userId: 't1' }))).status, 200, 'the retry completes');
  assert.equal((await resolve('t1')).accessLevel, 'free');

  // A grant left by an earlier interrupted removal is revoked by the next sync.
  sqlite.prepare("DELETE FROM institution_members WHERE user_id = 't2'").run();
  assert.equal((await resolve('t2')).accessLevel, 'full');
  assert.equal((await routes.ownerPOST(ownerPost({ institutionId, seats: 3 }))).status, 200);
  assert.equal((await resolve('t2')).accessLevel, 'free');
  assert.equal((await resolve('admin1')).accessLevel, 'full', 'current members keep their seats');
  sqlite.close();
});
