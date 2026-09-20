import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import test from 'node:test';
import { build } from 'esbuild';

test('server verification reserves only one initial delivery and enforces resend limits across requests', async () => {
  assert.ok(existsSync('db/verification-email.ts'), 'durable verification delivery guard must exist');
  const compiled = await build({ entryPoints: ['db/verification-email.ts'], bundle: true, write: false, format: 'esm', platform: 'node' });
  const { reserveVerificationEmail, finishVerificationEmail } = await import('data:text/javascript;base64,' + Buffer.from(compiled.outputFiles[0].text).toString('base64'));
  const sql = new DatabaseSync(':memory:');
  sql.exec(readFileSync('drizzle/0008_verification_email_delivery.sql', 'utf8'));
  const db = { prepare(query) { return { bind(...args) { return {
    async first() { return sql.prepare(query).get(...args) ?? null; },
    async run() { return { meta: { changes: Number(sql.prepare(query).run(...args).changes) } }; },
  }; } }; } };
  let now = 1800000000;
  const args = { identity: 'teacher-one', recipient: 'mailbox-one', kind: 'initial', requestKey: 'initial', now };
  const claims = await Promise.all(Array.from({length: 10}, () => reserveVerificationEmail(db, args)));
  assert.equal(claims.filter(c => c.status === 'reserved').length, 1);
  const claim = claims.find(c => c.status === 'reserved');
  await finishVerificationEmail(db, claim.id, 'sent', 'resend-one');
  assert.equal((await reserveVerificationEmail(db, {...args, identity: 'recreated-account', now: now + 10})).status, 'limited');
  assert.equal((await reserveVerificationEmail(db, {...args, now: now + 86400})).status, 'duplicate');
  assert.equal((await reserveVerificationEmail(db, {...args, kind: 'resend', requestKey: 'second', now: now + 10})).status, 'limited');
  const second = await reserveVerificationEmail(db, {...args, kind: 'resend', requestKey: 'second', now: now + 61});
  assert.equal(second.status, 'reserved');
  await finishVerificationEmail(db, second.id, 'sent', 'resend-two');
  assert.equal((await reserveVerificationEmail(db, {...args, kind: 'resend', requestKey: 'second', now: now + 122})).status, 'duplicate');
  for (let i = 3; i <= 5; i++) {
    const next = await reserveVerificationEmail(db, {...args, kind: 'resend', requestKey: `resend-${i}`, now: now + i * 61});
    assert.equal(next.status, 'reserved');
    await finishVerificationEmail(db, next.id, 'sent', `resend-${i}`);
  }
  assert.equal((await reserveVerificationEmail(db, {...args, kind: 'resend', requestKey: 'sixth', now: now + 400})).status, 'limited');
  assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM verification_email_deliveries').get().n, 5);
  sql.close();
});

test('the branded URL preserves Firebase security parameters and the email escapes its CTA safely', async () => {
  assert.ok(existsSync('server/verification-template.ts'), 'branded verification template must exist');
  const compiled = await build({ entryPoints: ['server/verification-template.ts'], bundle: true, write: false, format: 'esm', platform: 'node' });
  const { brandedVerificationUrl, verificationEmail } = await import('data:text/javascript;base64,' + Buffer.from(compiled.outputFiles[0].text).toString('base64'));
  const original = 'https://chespanish-32645.firebaseapp.com/__/auth/action?apiKey=public-key&mode=verifyEmail&oobCode=abc%2B%2F%3D&continueUrl=https%3A%2F%2Fspanishcue.com%2Fauth%2Faction%3Flang%3Des&lang=es';
  const link = brandedVerificationUrl(original, 'es');
  assert.equal(new URL(link).origin, 'https://spanishcue.com');
  assert.equal(new URL(link).pathname, '/auth/action');
  for (const [key, value] of new URL(original).searchParams) assert.equal(new URL(link).searchParams.get(key), value);
  assert.equal(new URL(link).searchParams.has('status'), false);
  assert.throws(() => brandedVerificationUrl('https://evil.example/?mode=verifyEmail&oobCode=bad', 'es'));
  const es = verificationEmail('es', link);
  assert.equal(es.subject, 'Tu biblioteca SPANISHCUE está casi lista');
  assert.match(es.html, /¿Listo para enseñar\?/);
  assert.match(es.html, /Verificar mi email/);
  assert.match(es.html, /&amp;mode=verifyEmail/);
  assert.match(es.text, /mensaje más reciente/);
  assert.doesNotMatch(es.html, /<script|<form|animation:/i);
  assert.equal(verificationEmail('en', link).subject, 'Your SPANISHCUE library is almost ready');
});

test('authenticated delivery binds the recipient to Firebase, sends once, and rejects forged requests', async () => {
  const compiled = await build({ entryPoints: ['server/verification-delivery.ts'], bundle: true, write: false, format: 'esm', platform: 'node' });
  const { handleVerificationEmail } = await import('data:text/javascript;base64,' + Buffer.from(compiled.outputFiles[0].text).toString('base64'));
  const sql = new DatabaseSync(':memory:');
  sql.exec(readFileSync('drizzle/0008_verification_email_delivery.sql', 'utf8'));
  const db = { prepare(query) { return { bind(...args) { return {
    async first() { return sql.prepare(query).get(...args) ?? null; },
    async run() { return { meta: { changes: Number(sql.prepare(query).run(...args).changes) } }; },
  }; } }; } };
  const now = 1800000000;
  const deliveries = [];
  const links = [];
  const deps = {
    now: () => now,
    verifyToken: async token => token === 't'.repeat(60) ? { uid: 'teacher', email: 'teacher@example.test', emailVerified: false, displayName: null } : null,
    admin: () => ({
      getUser: async () => ({ uid: 'teacher', email: 'teacher@example.test', emailVerified: false, disabled: false, metadata: { creationTime: new Date(now * 1000).toISOString() } }),
      generateEmailVerificationLink: async (email, settings) => {
        links.push({ email, settings });
        return 'https://chespanish-32645.firebaseapp.com/__/auth/action?mode=verifyEmail&oobCode=firebase-generated-only&apiKey=public-key';
      },
    }),
    fetcher: async (url, options) => { deliveries.push({ url, options }); return Response.json({id: 'provider-message'}); },
  };
  const env = { DB: db, RESEND_API_KEY: 'test-only-placeholder', FIREBASE_ADMIN_SERVICE_ACCOUNT_B64: 'test-only-placeholder' };
  let pulled = 0;
  const oversized = new Request('https://spanishcue.test/api/auth/verification-email', {
    method: 'POST', duplex: 'half',
    headers: {origin: 'https://spanishcue.test', 'content-type': 'application/json', authorization: 'Bearer ' + 't'.repeat(60)},
    body: new ReadableStream({ pull(controller) { pulled++; controller.enqueue(new Uint8Array(600)); if (pulled === 100) controller.close(); } }),
  });
  assert.equal((await handleVerificationEmail(oversized, env, deps)).status, 413);
  assert.ok(pulled < 5, 'oversized requests must stop reading instead of buffering the complete stream');
  const make = (body = {}, headers = {}) => new Request('https://spanishcue.test/api/auth/verification-email', {
    method: 'POST', headers: { origin: 'https://spanishcue.test', 'content-type': 'application/json', authorization: 'Bearer ' + 't'.repeat(60), ...headers },
    body: JSON.stringify({ intent: 'initial', locale: 'es', ...body }),
  });
  assert.equal((await handleVerificationEmail(make({}, {origin: 'https://evil.test'}), env, deps)).status, 403);
  assert.equal((await handleVerificationEmail(make({}, {authorization: ''}), env, deps)).status, 401);
  assert.equal((await handleVerificationEmail(make({locale: 'xx'}), env, deps)).status, 400);
  const initial = await handleVerificationEmail(make({email: 'victim@example.test', actionUrl: 'https://evil.test'}), env, deps);
  assert.equal(initial.status, 200);
  assert.equal((await initial.json()).status, 'sent');
  assert.equal(deliveries.length, 1);
  assert.equal(links.length, 1);
  const message = JSON.parse(deliveries[0].options.body);
  assert.deepEqual(message.to, ['teacher@example.test']);
  assert.equal(message.from, 'SPANISHCUE <verify@spanishcue.com>');
  assert.equal(message.subject, 'Tu biblioteca SPANISHCUE está casi lista');
  assert.match(message.html, /spanishcue.com\/auth\/action\?mode=verifyEmail&amp;oobCode=firebase-generated-only/);
  assert.equal(links[0].email, 'teacher@example.test');
  assert.equal(links[0].settings.handleCodeInApp, false);
  assert.equal(deliveries[0].url, 'https://api.resend.com/emails');
  assert.ok(deliveries[0].options.headers['idempotency-key']);
  assert.equal((await (await handleVerificationEmail(make(), env, deps)).json()).status, 'already_sent');
  assert.equal(deliveries.length, 1);
  assert.equal(links.length, 1);
  const resend = make({intent: 'resend', requestId: 'fresh-resend-request-1'});
  assert.equal((await handleVerificationEmail(resend, env, deps)).status, 429);
  assert.equal(deliveries.length, 1);
  const verified = { ...deps, verifyToken: async () => ({uid: 'teacher', email: 'teacher@example.test', emailVerified: true, displayName: null}) };
  assert.equal((await (await handleVerificationEmail(make(), env, verified)).json()).status, 'already_verified');
  assert.equal(deliveries.length, 1);
  assert.equal(sql.prepare('SELECT status FROM verification_email_deliveries').get().status, 'sent');
  sql.close();
});
