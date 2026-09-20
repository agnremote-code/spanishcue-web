import assert from 'node:assert/strict';
import { generateKeyPairSync, verify } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { Miniflare } from 'miniflare';

test('packaged Worker uses Firebase Admin OAuth and action links before one Resend delivery', async () => {
  // Entirely synthetic credentials; all outbound requests are intercepted.
  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    privateKeyEncoding: { format: 'pem', type: 'pkcs8' },
    publicKeyEncoding: { format: 'pem', type: 'spki' },
  });
  const account = { type: 'service_account', project_id: 'chespanish-32645', client_email: 'synthetic@chespanish-32645.iam.gserviceaccount.com', private_key: privateKey };
  const modules = [{ type: 'ESModule', path: 'dist/server/index.js' }];
  function collect(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) collect(path);
      else if (/\.m?js$/.test(path) && path !== 'dist/server/index.js') modules.push({ type: 'ESModule', path });
    }
  }
  collect('dist/server');
  let oauth = 0, links = 0, deliveries = 0;
  const mf = new Miniflare({
    modules, compatibilityDate: '2026-05-15', compatibilityFlags: ['nodejs_compat'],
    bindings: { RESEND_API_KEY: 'synthetic-resend-key', FIREBASE_ADMIN_SERVICE_ACCOUNT_B64: Buffer.from(JSON.stringify(account)).toString('base64') },
    d1Databases: ['DB'],
    outboundService: async request => {
      const url = new URL(request.url);
      if (url.hostname === 'oauth2.googleapis.com' && url.pathname === '/token') {
        const params = new URLSearchParams(await request.text());
        const [head, payload, signature] = params.get('assertion').split('.');
        assert.ok(verify('RSA-SHA256', Buffer.from(`${head}.${payload}`), publicKey, Buffer.from(signature, 'base64url')));
        assert.equal(JSON.parse(Buffer.from(payload, 'base64url')).iss, account.client_email);
        oauth++;
        return Response.json({ access_token: 'synthetic-access-token', expires_in: 3600, token_type: 'Bearer' });
      }
      if (url.hostname === 'identitytoolkit.googleapis.com' && url.pathname.endsWith('/accounts:lookup')) {
        if (url.pathname.includes('/projects/')) assert.equal(request.headers.get('authorization'), 'Bearer synthetic-access-token');
        return Response.json({ users: [{ localId: 'synthetic-user', email: 'synthetic@example.test', emailVerified: false, createdAt: String(Date.now()) }] });
      }
      if (url.hostname === 'identitytoolkit.googleapis.com' && url.pathname.endsWith('/accounts:sendOobCode')) {
        assert.equal(request.headers.get('authorization'), 'Bearer synthetic-access-token');
        const body = await request.json();
        assert.equal(body.requestType, 'VERIFY_EMAIL');
        assert.equal(body.returnOobLink, true);
        assert.equal(body.email, 'synthetic@example.test');
        links++;
        return Response.json({ oobLink: 'https://chespanish-32645.firebaseapp.com/__/auth/action?mode=verifyEmail&oobCode=synthetic-code&apiKey=synthetic-public-key' });
      }
      if (url.hostname === 'api.resend.com' && url.pathname === '/emails') {
        const body = await request.json();
        assert.equal(body.from, 'SPANISHCUE <verify@spanishcue.com>');
        assert.deepEqual(body.to, ['synthetic@example.test']);
        assert.equal(body.subject, 'Tu biblioteca SPANISHCUE está casi lista');
        assert.match(body.html, /https:\/\/spanishcue.com\/auth\/action\?mode=verifyEmail&amp;oobCode=synthetic-code/);
        deliveries++;
        return Response.json({ id: 'synthetic-delivery' });
      }
      throw new Error('Unexpected synthetic outbound endpoint');
    },
  });
  try {
    const db = await mf.getD1Database('DB');
    for (const statement of readFileSync('drizzle/0008_verification_email_delivery.sql', 'utf8').split('--> statement-breakpoint')) await db.prepare(statement.trim()).run();
    const send = () => mf.dispatchFetch('https://spanishcue.test/api/auth/verification-email', {
      method: 'POST', headers: { origin: 'https://spanishcue.test', 'content-type': 'application/json', authorization: 'Bearer ' + 't'.repeat(60) },
      body: JSON.stringify({ intent: 'initial', locale: 'es' }),
    });
    const first = await send();
    assert.equal(first.status, 200, 'packaged Firebase Admin must complete OAuth, user lookup and link generation');
    assert.equal((await first.json()).status, 'sent');
    const duplicate = await send();
    assert.equal(duplicate.status, 200);
    assert.equal((await duplicate.json()).status, 'already_sent');
    assert.deepEqual({ oauth, links, deliveries }, { oauth: 1, links: 1, deliveries: 1 });
  } finally { await mf.dispose(); }
});
