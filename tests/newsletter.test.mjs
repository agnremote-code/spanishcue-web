import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';

const SECRET = 'x'.repeat(40);

async function setup() {
  const sqlite = new DatabaseSync(':memory:');
  const sql = await readFile('drizzle/0018_newsletter_subscribers.sql', 'utf8');
  sqlite.exec('CREATE TABLE existing_data (value TEXT); INSERT INTO existing_data VALUES (\'keep\')');
  sqlite.exec(sql); sqlite.exec(sql);
  assert.equal(sqlite.prepare('SELECT value FROM existing_data').get().value, 'keep');
  const db = { prepare(query) { return { bind(...values) { const statement = sqlite.prepare(query); return {
    async first() { return statement.get(...values) ?? null; },
    async all() { return { results: statement.all(...values) }; },
    async run() { return { meta: { changes: Number(statement.run(...values).changes) } }; },
  }; }, async all() { return { results: sqlite.prepare(query).all() }; } }; } };
  const calls = [];
  globalThis.fetch = async (url, init) => { calls.push({ url: String(url), init }); return new Response('{"id":"x"}', { status: 200 }); };
  // The bundled module is cached across tests: update the env object it captured.
  globalThis.__NEWSLETTER_TEST_ENV = Object.assign(globalThis.__NEWSLETTER_TEST_ENV ?? {}, { DB: db, AUTOESTUDIO_SHARE_SECRET: SECRET, RESEND_API_KEY: 're_test' });
  const bundle = await build({ stdin: { contents: `export { POST } from './app/api/newsletter/route'; export { GET as leave, POST as oneClick } from './app/api/newsletter/baja/route'; export { GET as admin } from './app/api/admin/newsletter/route'; export * from './app/newsletter/server'; export * from './app/newsletter/gift';`, resolveDir: process.cwd() }, bundle: true, write: false, format: 'esm', platform: 'node', plugins: [{ name: 'env', setup(b) {
    b.onResolve({ filter: /^cloudflare:workers$/ }, () => ({ path: 'env', namespace: 'test-env' }));
    b.onLoad({ filter: /.*/, namespace: 'test-env' }, () => ({ contents: 'export const env = globalThis.__NEWSLETTER_TEST_ENV;' }));
  } }] });
  const mod = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
  return { sqlite, mod, calls };
}

const request = (body, origin = 'https://spanishcue.test') => new Request('https://spanishcue.test/api/newsletter', { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify(body) });

test('newsletter signup stores consented emails, unlocks only the gift class and unsubscribes in one click', async () => {
  const { sqlite, mod, calls } = await setup();
  const valid = { email: 'Ana@Example.test', consent: true, source: '/material-ele/subjuntivo' };
  assert.equal((await mod.POST(request(valid, 'https://evil.test'))).status, 403);
  for (const body of [null, [], {}, { ...valid, consent: false }, { ...valid, email: 'bad' }, { ...valid, email: 'a@b.c?bcc=x@y.z' }]) {
    assert.equal((await mod.POST(request(body))).status, 400, JSON.stringify(body));
  }
  const spam = await mod.POST(request({ ...valid, website: 'http://spam' }));
  assert.equal(spam.status, 201);
  assert.equal(spam.headers.get('set-cookie'), null);
  assert.equal(sqlite.prepare('SELECT count(*) n FROM newsletter_subscribers').get().n, 0);

  const ok = await mod.POST(request(valid));
  assert.equal(ok.status, 201);
  assert.equal((await ok.json()).href, mod.GIFT_LESSON_PATH);
  const cookie = ok.headers.get('set-cookie');
  assert.match(cookie, /^__Host-sc-regalo=v1\.[a-f0-9]{48}\.[a-f0-9]{64}; Path=\/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000$/);
  const row = sqlite.prepare('SELECT * FROM newsletter_subscribers').get();
  assert.equal(row.normalized_email, 'ana@example.test');
  assert.equal(row.source_path, '/material-ele/subjuntivo');
  assert.equal(row.status, 'active');
  // Resend: contact into the SpanishCue segment + one welcome email with a List-Unsubscribe header.
  const contact = calls.find(c => c.url === 'https://api.resend.com/contacts');
  assert.deepEqual(JSON.parse(contact.init.body).segments, [{ id: mod.NEWSLETTER_SEGMENT_ID }]);
  const mail = calls.filter(c => c.url === 'https://api.resend.com/emails');
  assert.equal(mail.length, 1);
  const sent = JSON.parse(mail[0].init.body);
  assert.deepEqual(sent.to, ['ana@example.test']);
  assert.match(sent.html, new RegExp(mod.GIFT_LESSON_PATH));
  assert.match(sent.headers['List-Unsubscribe'], new RegExp(`/api/newsletter/baja\\?t=${row.unsubscribe_token}`));

  // Same email again: no duplicate row, no second welcome email.
  assert.equal((await mod.POST(request({ ...valid, email: 'ana@example.test' }))).status, 201);
  assert.equal(sqlite.prepare('SELECT count(*) n FROM newsletter_subscribers').get().n, 1);
  assert.equal(calls.filter(c => c.url === 'https://api.resend.com/emails').length, 1);

  // The cookie opens the gift lesson and its audio only; forged or foreign cookies do not.
  const token = cookie.split(';')[0];
  assert.equal(await mod.hasGift(token, SECRET), true);
  assert.equal(await mod.hasGift(token, 'y'.repeat(40)), false);
  assert.equal(await mod.hasGift(token.replace(/.$/, c => c === 'a' ? 'b' : 'a'), SECRET), false);
  assert.equal(await mod.hasGift(null, SECRET), false);
  assert.equal(mod.giftCoversPath(mod.GIFT_LESSON_PATH, mod.GIFT_LESSON_ID), true);
  assert.equal(mod.giftCoversPath(mod.GIFT_AUDIO_PATH, null), true);
  assert.equal(mod.giftCoversPath('/gramatica/duda-posibilidad-y-certeza-en-enunciados', 394), false);
  assert.equal(mod.giftCoversPath('/audio/grammar-live/394.mp3', null), false);

  // Unsubscribe: bad token → error page, good token → unsubscribed + Resend contact updated.
  const bad = await mod.leave(new Request('https://spanishcue.test/api/newsletter/baja?t=nope'));
  assert.equal(bad.headers.get('location'), 'https://spanishcue.test/newsletter/baja?estado=enlace');
  const good = await mod.oneClick(new Request(`https://spanishcue.test/api/newsletter/baja?t=${row.unsubscribe_token}`, { method: 'POST' }));
  assert.equal(good.status, 200);
  assert.equal(sqlite.prepare('SELECT status FROM newsletter_subscribers').get().status, 'unsubscribed');
  assert.ok(calls.some(c => c.url === 'https://api.resend.com/contacts/ana%40example.test' && JSON.parse(c.init.body).unsubscribed === true));

  // Owner-only list without unsubscribe tokens.
  assert.equal((await mod.admin(new Request('https://spanishcue.test/api/admin/newsletter'))).status, 403);
  const list = await (await mod.admin(new Request('https://spanishcue.test/api/admin/newsletter', { headers: { 'x-chespanish-owner': '1' } }))).json();
  assert.equal(list.total, 1);
  assert.equal(list.active, 0);
  assert.equal(JSON.stringify(list).includes(row.unsubscribe_token), false);
});

test('signup refuses to store emails when the class cannot be unlocked', async () => {
  const { sqlite, mod } = await setup();
  globalThis.__NEWSLETTER_TEST_ENV.AUTOESTUDIO_SHARE_SECRET = '';
  assert.equal((await mod.POST(request({ email: 'b@example.test', consent: true }))).status, 503);
  assert.equal(sqlite.prepare('SELECT count(*) n FROM newsletter_subscribers').get().n, 0);
});

test('newsletter wiring: rate limits, Worker gate, private media, public chunks, migrations and noindex', async () => {
  const [worker, rate, media, protect, prod, staging, seo, footer] = await Promise.all(['worker/index.ts', 'worker/rate-limit.ts', 'worker/private-asset-auth.ts', 'scripts/protect-client-assets.mjs', '.github/workflows/deploy-production.yml', '.github/workflows/deploy-staging.yml', 'app/seo.ts', 'app/growth/components.tsx'].map(f => readFile(f, 'utf8')));
  assert.match(rate, /"\/api\/newsletter",/);
  // Mail providers send one-click unsubscribes from shared IPs: never limit those.
  assert.doesNotMatch(rate, /"\/api\/newsletter\/baja"/);
  assert.match(worker, /lesson&&!isFreeLesson\(lesson\.id\)&&!fullAccess&&!gifted/);
  assert.match(worker, /premiumAudio && !fullAccess && !gifted/);
  assert.match(media, /path === GIFT_AUDIO_PATH && await hasGift/);
  assert.match(protect, /mayReadPrivateMedia\(request,env,path\)/);
  assert.match(protect, /"app\/newsletter\/EmailGiftPopup\.tsx"/);
  assert.match(protect, /"app\/newsletter\/GiftSignup\.tsx"/);
  for (const workflow of [prod, staging]) assert.match(workflow, /drizzle\/0018_newsletter_subscribers\.sql/);
  assert.match(seo, /path\.startsWith\("\/newsletter\/"\)/);
  assert.match(footer, /<EmailGiftPopup \/>/);
});
