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
  const known = new Set();
  globalThis.fetch = async (url, init) => {
    calls.push({ url: String(url), init });
    // Minimal Resend contacts: GET answers 404 until a POST /contacts created the contact.
    const contact = String(url).match(/\/contacts\/([^/]+)$/);
    if (contact && (init?.method ?? 'GET') === 'GET') return new Response('{}', { status: known.has(decodeURIComponent(contact[1])) ? 200 : 404 });
    if (String(url).endsWith('/contacts') && init?.method === 'POST') known.add(JSON.parse(init.body).email);
    return new Response('{"id":"x"}', { status: 200 });
  };
  globalThis.__resendKnown = known;
  // The bundled module is cached across tests: update the env object it captured.
  globalThis.__NEWSLETTER_TEST_ENV = Object.assign(globalThis.__NEWSLETTER_TEST_ENV ?? {}, { DB: db, AUTOESTUDIO_SHARE_SECRET: SECRET, RESEND_API_KEY: 're_test\n' });
  const bundle = await build({ stdin: { contents: `export { POST } from './app/api/newsletter/route'; export { GET as leave, POST as oneClick } from './app/api/newsletter/baja/route'; export { GET as admin } from './app/api/admin/newsletter/route'; export * from './app/newsletter/server'; export * from './app/newsletter/gift'; export * from './app/newsletter/account-backfill'; export { GET as backfillStatus, POST as backfillRun } from './app/api/admin/newsletter/cuentas/route';`, resolveDir: process.cwd() }, bundle: true, write: false, format: 'esm', platform: 'node', plugins: [{ name: 'env', setup(b) {
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
  // A secret pasted with a trailing newline still yields a valid header.
  assert.equal(contact.init.headers.authorization, 'Bearer re_test');
  const mail = calls.filter(c => c.url === 'https://api.resend.com/emails');
  assert.equal(mail.length, 1);
  const sent = JSON.parse(mail[0].init.body);
  assert.deepEqual(sent.to, ['ana@example.test']);
  assert.match(sent.html, new RegExp(mod.GIFT_LESSON_PATH));
  assert.match(sent.headers['List-Unsubscribe'], new RegExp(`/api/newsletter/baja\\?t=${row.unsubscribe_token}`));
  assert.match(sent.html, /pricing\?utm_source=email&amp;utm_medium=email&amp;utm_campaign=nurture_d0/);
  // The welcome starts the Resend nurture automation exactly once.
  const nurture = calls.filter(c => c.url === 'https://api.resend.com/events/send');
  assert.equal(nurture.length, 1);
  assert.deepEqual(JSON.parse(nurture[0].init.body), { event: mod.NURTURE_EVENT, email: 'ana@example.test', payload: { source: 'newsletter' } });

  // Same email again: no duplicate row, no second welcome email.
  assert.equal((await mod.POST(request({ ...valid, email: 'ana@example.test' }))).status, 201);
  assert.equal(sqlite.prepare('SELECT count(*) n FROM newsletter_subscribers').get().n, 1);
  assert.equal(calls.filter(c => c.url === 'https://api.resend.com/emails').length, 1);
  assert.equal(calls.filter(c => c.url === 'https://api.resend.com/events/send').length, 1);

  // A returning email that never reached Resend (mail was not configured when it signed up) gets the welcome now.
  globalThis.__resendKnown.delete('ana@example.test');
  assert.equal((await mod.POST(request({ ...valid, email: 'ana@example.test' }))).status, 201);
  assert.equal(calls.filter(c => c.url === 'https://api.resend.com/emails').length, 2);
  assert.equal(calls.filter(c => c.url === 'https://api.resend.com/events/send').length, 2);

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
  assert.ok(calls.some(c => c.url === 'https://api.resend.com/contacts/ana%40example.test' && c.init.method === 'PATCH' && JSON.parse(c.init.body).unsubscribed === true));

  // Owner-only list without unsubscribe tokens.
  assert.equal((await mod.admin(new Request('https://spanishcue.test/api/admin/newsletter'))).status, 403);
  const list = await (await mod.admin(new Request('https://spanishcue.test/api/admin/newsletter', { headers: { 'x-chespanish-owner': '1' } }))).json();
  assert.equal(list.total, 1);
  assert.equal(list.active, 0);
  assert.equal(JSON.stringify(list).includes(row.unsubscribe_token), false);
  const csv = await mod.admin(new Request('https://spanishcue.test/api/admin/newsletter?format=csv', { headers: { 'x-chespanish-owner': '1' } }));
  assert.match(csv.headers.get('content-type'), /^text\/csv/);
  assert.match(await csv.text(), /^email,created_at,source_path,status,unsubscribed_at\n"ana@example.test",/i);
  assert.equal((await mod.admin(new Request('https://spanishcue.test/api/admin/newsletter?format=csv'))).status, 403);
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

test('a new free account joins the profes sequence once, respecting past unsubscribes', async () => {
  const { sqlite, mod, calls } = await setup();
  const env = globalThis.__NEWSLETTER_TEST_ENV;
  // Owner and paid accounts never enter the sequence.
  assert.equal(await mod.enrollAccount(env.DB, { email: 'ale@example.test', role: 'owner', accessLevel: 'full' }), null);
  assert.equal(await mod.enrollAccount(env.DB, { email: 'pro@example.test', role: 'teacher', accessLevel: 'full' }), null);
  assert.equal(sqlite.prepare('SELECT count(*) n FROM newsletter_subscribers').get().n, 0);

  const subscriber = await mod.enrollAccount(env.DB, { email: 'Profe@Example.test', role: 'teacher', accessLevel: 'free' });
  assert.equal(subscriber.email, 'profe@example.test');
  const row = sqlite.prepare('SELECT * FROM newsletter_subscribers').get();
  assert.equal(row.source_path, mod.ACCOUNT_SOURCE_PATH);
  assert.equal(row.status, 'active');
  await mod.deliverWelcome(env, (input, init) => fetch(input, init), 'https://spanishcue.test', subscriber, 'account');
  const mail = calls.filter(c => c.url === 'https://api.resend.com/emails');
  assert.equal(mail.length, 1);
  const sent = JSON.parse(mail[0].init.body);
  assert.equal(mail[0].init.headers['idempotency-key'], `account-welcome/${subscriber.id}`);
  assert.equal(sent.headers['List-Unsubscribe-Post'], 'List-Unsubscribe=One-Click');
  assert.equal(sent.headers['List-Unsubscribe'], `<https://spanishcue.test/api/newsletter/baja?t=${row.unsubscribe_token}>`);
  assert.match(sent.text, /\/gramatica\/indefinido-e-imperfecto/);
  // One offer only: the one the site shows at send time.
  const offer = mod.accountOffer();
  assert.ok(sent.text.includes(offer.cta) && sent.text.includes(offer.detail));
  assert.doesNotMatch(sent.text, /US\$150/);
  // The account mail does not claim a browser-unlocked gift class.
  assert.doesNotMatch(sent.text, /desbloqueada en este navegador/);
  const event = calls.find(c => c.url === 'https://api.resend.com/events/send');
  assert.deepEqual(JSON.parse(event.init.body), { event: mod.NURTURE_EVENT, email: 'profe@example.test', payload: { source: 'account' } });

  // Same email again (or one that unsubscribed earlier): untouched, no second enrollment.
  sqlite.prepare("UPDATE newsletter_subscribers SET status='unsubscribed'").run();
  assert.equal(await mod.enrollAccount(env.DB, { email: 'profe@example.test', role: 'teacher', accessLevel: 'free' }), null);
  assert.equal(sqlite.prepare('SELECT status FROM newsletter_subscribers').get().status, 'unsubscribed');
});

test('account sign-in wiring: only brand-new accounts are enrolled, after purchase binding', async () => {
  const [route, accounts] = await Promise.all(['app/api/auth/session/route.ts', 'db/accounts.ts'].map(f => readFile(f, 'utf8')));
  assert.match(accounts, /created: !existingIdentity && account\.id === candidateId/);
  const binding = route.indexOf('bindPurchaseToUser(env.DB');
  const enroll = route.indexOf('enrollAccount(env.DB, account)');
  assert.ok(binding > 0 && enroll > binding);
  assert.match(route, /if \(accountCreated\) \{/);
  assert.match(route, /subscriber, "account"\)/);
});

test('backfill: accounts since 5-nov get the first mail once; owner, paying and listed emails are skipped', async () => {
  const { sqlite, mod, calls } = await setup();
  const env = globalThis.__NEWSLETTER_TEST_ENV;
  env.CHESPANISH_OWNER_EMAIL = 'Dueno@Example.test';
  sqlite.exec(`CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, email TEXT, normalized_email TEXT, role TEXT, status TEXT, created_at INTEGER);
    CREATE TABLE IF NOT EXISTS access_grants (user_id TEXT); CREATE TABLE IF NOT EXISTS billing_purchase_claims (normalized_email TEXT);`);
  const since = mod.ACCOUNT_BACKFILL_SINCE;
  const add = (id, email, created, role = 'teacher') => sqlite.prepare('INSERT INTO users VALUES (?,?,?,?,?,?)').run(id, email, email.toLowerCase(), role, 'active', created);
  add('old', 'old@example.test', since - 10);
  add('a', 'Uno@Example.test', since + 10);
  add('b', 'dos@example.test', since + 20);
  add('owner', 'dueno@example.test', since + 30);
  add('owner2', 'otra@example.test', since + 31, 'owner');
  add('pro', 'pro@example.test', since + 40); sqlite.prepare('INSERT INTO access_grants VALUES (?)').run('pro');
  add('payer', 'paga@example.test', since + 50); sqlite.prepare('INSERT INTO billing_purchase_claims VALUES (?)').run('paga@example.test');
  add('ale', 'agnremote+test@example.test', since + 60);
  add('listed', 'ya@example.test', since + 70);
  await mod.subscribe(env.DB, { email: 'ya@example.test', consent: true });
  sqlite.prepare("UPDATE newsletter_subscribers SET status='unsubscribed'").run();
  assert.deepEqual((await mod.pendingBackfillAccounts(env.DB, env.CHESPANISH_OWNER_EMAIL)).map(r => r.email), ['Uno@Example.test', 'dos@example.test']);

  const owner = { 'x-chespanish-owner': '1', origin: 'https://spanishcue.test' };
  assert.equal((await mod.backfillRun(new Request('https://spanishcue.test/api/admin/newsletter/cuentas', { method: 'POST', headers: { origin: 'https://spanishcue.test' } }))).status, 403);
  assert.equal((await mod.backfillRun(new Request('https://spanishcue.test/api/admin/newsletter/cuentas', { method: 'POST', headers: { 'x-chespanish-owner': '1', origin: 'https://evil.test' } }))).status, 403);
  calls.length = 0;
  const result = await mod.runAccountBackfill(env, (input, init) => fetch(input, init), 'https://spanishcue.test', env.CHESPANISH_OWNER_EMAIL, 0);
  assert.deepEqual(result, { processed: 2, sent: 2, remaining: 0 });
  const mails = calls.filter(c => c.url === 'https://api.resend.com/emails').map(c => JSON.parse(c.init.body).to[0]);
  assert.deepEqual(mails, ['uno@example.test', 'dos@example.test']);
  assert.equal(calls.filter(c => c.url === 'https://api.resend.com/events/send').length, 2);
  // Repeating is harmless: nothing left, nothing sent again; the unsubscribed email stays unsubscribed.
  const status = await mod.backfillStatus(new Request('https://spanishcue.test/api/admin/newsletter/cuentas', { headers: owner }));
  assert.deepEqual(await status.json(), { remaining: 0 });
  assert.equal(sqlite.prepare("SELECT status FROM newsletter_subscribers WHERE normalized_email='ya@example.test'").get().status, 'unsubscribed');
});

test('account welcome carries a single offer: US$0,99 week until 30-nov, then 10 % first month', async () => {
  const { mod } = await setup();
  const beforeEnd = Date.UTC(2026, 10, 30, 23, 0) / 1000;
  const afterEnd = Date.UTC(2026, 11, 2) / 1000;
  const week = mod.accountWelcomeEmail('https://spanishcue.test', 'a'.repeat(48), beforeEnd);
  assert.match(week.text, /Primera semana por US\$0,99/);
  assert.match(week.text, /Hasta el 30 de noviembre\. Después, US\$19,90\/mes/);
  assert.doesNotMatch(week.text, /10 %|17,91/);
  const discount = mod.accountWelcomeEmail('https://spanishcue.test', 'a'.repeat(48), afterEnd);
  assert.match(discount.text, /10 % de descuento en tu primer mes/);
  assert.match(discount.text, /US\$17,91 el primer mes con tarjeta\. Después, US\$19,90\/mes/);
  assert.doesNotMatch(discount.text, /0,99/);
  for (const mail of [week, discount]) assert.match(mail.html, /Darme de baja/);
});
