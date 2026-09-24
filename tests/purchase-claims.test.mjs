import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import test from 'node:test';
import { build } from 'esbuild';

async function database() {
  const sqlite = new DatabaseSync(':memory:');
  sqlite.exec('PRAGMA foreign_keys = ON');
  for (const name of (await readdir('drizzle')).filter(file => file.endsWith('.sql')).sort()) {
    sqlite.exec((await readFile(`drizzle/${name}`, 'utf8')).replaceAll('--> statement-breakpoint', ''));
  }
  return sqlite;
}

function asD1(sqlite) {
  const statement = (sql, args = []) => ({
    bind: (...values) => statement(sql, values),
    run: async () => ({ meta: { changes: Number(sqlite.prepare(sql).run(...args).changes) } }),
    first: async () => sqlite.prepare(sql).get(...args) ?? null,
  });
  return { prepare: sql => statement(sql) };
}

async function claimModule() {
  const result = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./app/purchase-claim-cookie";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}

async function route(path) {
  const result = await build({
    entryPoints: [path], bundle: true, write: false, format: 'esm', platform: 'node',
    plugins: [{ name: 'worker-env', setup(builder) {
      builder.onResolve({ filter: /^cloudflare:workers$/ }, () => ({ path: 'worker-env', namespace: 'test' }));
      builder.onLoad({ filter: /.*/, namespace: 'test' }, () => ({ contents: 'export const env = globalThis.__issue40TestEnv', loader: 'js' }));
    } }],
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}

test('guest claims migrate additively without rewriting existing paid users', async () => {
  const sqlite = await database();
  const columns = sqlite.prepare('PRAGMA table_info(billing_purchase_claims)').all().map(row => row.name);
  for (const key of ['claim_id', 'claim_secret_hash', 'environment', 'provider', 'offer_code', 'return_to',
    'status', 'buyer_email', 'normalized_email', 'provider_customer_id', 'provider_subscription_id',
    'provider_payment_id', 'amount_cents', 'currency', 'paid_through', 'paid_at', 'claimed_user_id',
    'claimed_at', 'expires_at', 'created_at', 'updated_at']) assert.ok(columns.includes(key), key);
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_purchase_claims').get().count, 0);
  sqlite.close();
});

test('migration 0009 preserves an existing subscription, completed payment and PRO grant', async () => {
  const sqlite = new DatabaseSync(':memory:');
  sqlite.exec('PRAGMA foreign_keys = ON');
  for (const name of (await readdir('drizzle')).filter(file => file.endsWith('.sql') && !file.startsWith('0009_')).sort()) {
    sqlite.exec((await readFile(`drizzle/${name}`, 'utf8')).replaceAll('--> statement-breakpoint', ''));
  }
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('existing','paid@example.test','paid@example.test','teacher','active',1,1,1)").run();
  sqlite.prepare("INSERT INTO billing_subscriptions (user_id,provider,environment,provider_subscription_id,provider_plan_id,product_code,status,created_at,updated_at) VALUES ('existing','paypal','live','I-EXISTING','P-15','spanishcue-pro','ACTIVE',1,1)").run();
  const subscriptionId = sqlite.prepare("SELECT id FROM billing_subscriptions WHERE provider_subscription_id = 'I-EXISTING'").get().id;
  sqlite.prepare("INSERT INTO billing_payments (user_id,subscription_id,provider,environment,provider_payment_id,amount_cents,currency,status,occurred_at,created_at,updated_at) VALUES ('existing',?,'paypal','live','SALE-EXISTING',1500,'USD','COMPLETED',1,1,1)").run(subscriptionId);
  sqlite.prepare("INSERT INTO access_grants (user_id,product_code,access_level,source,source_reference,status,starts_at,created_at,updated_at) VALUES ('existing','spanishcue-pro','full','billing','I-EXISTING','active',1,1,1)").run();
  sqlite.exec((await readFile('drizzle/0009_glossy_mariko_yashida.sql', 'utf8')).replaceAll('--> statement-breakpoint', ''));
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS count FROM billing_purchase_claims").get().count, 0);
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS count FROM billing_payments WHERE provider_payment_id = 'SALE-EXISTING'").get().count, 1);
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS count FROM access_grants WHERE user_id = 'existing' AND status = 'active'").get().count, 1);
  sqlite.close();
});

test('claim cookie verifier is HttpOnly and secret stays out of provider metadata', async () => {
  const claims = await claimModule();
  const sqlite = await database();
  const secret = claims.newClaimSecret();
  const claim = await claims.createPurchaseClaim(asD1(sqlite), {
    environment: 'live', offerCode: 'founder-1000-usd15-monthly', returnTo: '/clase/123', secret,
  });
  const cookie = claims.purchaseClaimCookie('paddle', claim.claimId, secret);
  assert.match(cookie, /HttpOnly; Secure; SameSite=Lax/);
  assert.equal((await claims.authorizePurchaseClaim(asD1(sqlite), `__Host-spanishcue-claim-paddle=${claim.claimId}.${secret}`, 'paddle'))?.claimId, claim.claimId);
  assert.equal(await claims.authorizePurchaseClaim(asD1(sqlite), `__Host-spanishcue-claim-paddle=${claim.claimId}.${claims.newClaimSecret()}`, 'paddle'), null);
  assert.doesNotMatch(JSON.stringify(sqlite.prepare('SELECT * FROM billing_purchase_claims').get()), new RegExp(secret));
  sqlite.close();
});

test('confirmed provider email is required and only a matching verified account can claim once', async () => {
  const claims = await claimModule();
  const sqlite = await database();
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
  const db = asD1(sqlite);
  const secret = claims.newClaimSecret();
  const claim = await claims.createPurchaseClaim(db, { environment: 'live', offerCode: 'founder-1000-usd15-monthly', returnTo: '/clase/123', secret });
  await claims.markPurchaseCheckout(db, claim.claimId, 'paddle', { subscriptionId: 'sub_guest', paymentId: 'txn_guest' });
  assert.equal(await claims.beginPurchaseBind(db, claim.claimId, 'teacher-1', 'ale@example.test'), null);
  await claims.recordVerifiedPurchase(db, claim.claimId, 'paddle', {
    subscriptionId: 'sub_guest', paymentId: 'txn_guest', customerId: 'ctm_1',
    email: 'Ale@Example.Test', amountCents: 1500, currency: 'USD', paidThrough: Math.floor(Date.now() / 1000) + 2592000,
    paidAt: Math.floor(Date.now() / 1000),
  });
  assert.equal(await claims.beginPurchaseBind(db, claim.claimId, 'teacher-other', 'other@example.test'), null);
  assert.equal((await claims.beginPurchaseBind(db, claim.claimId, 'teacher-1', 'ale@example.test'))?.claimId, claim.claimId);
  assert.equal(await claims.beginPurchaseBind(db, claim.claimId, 'teacher-other', 'ale@example.test'), null);
  assert.equal((await claims.beginPurchaseBind(db, claim.claimId, 'teacher-1', 'ale@example.test'))?.claimId, claim.claimId);
  sqlite.close();
});

test('anonymous checkout sends only the public claim ID to both providers', async () => {
  const result = await build({
    stdin: { contents: 'export * as paddle from "./app/paddle-server"; export * as paypal from "./app/paypal-server";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const { paddle, paypal } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
  const calls = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    if (String(url).endsWith('/v1/oauth2/token')) return Response.json({ access_token: 'test-token' });
    if (String(url).endsWith('/v1/billing/subscriptions')) return Response.json({ id: 'I-GUEST', links: [{ rel: 'approve', href: 'https://paypal.example.test/approve' }] });
    return Response.json({ data: { id: 'txn_abcdefghijklmnopqrstuvwxyz' } });
  };
  try {
    await paddle.createPaddleCheckoutTransaction({ apiKey: 'key', priceId: 'pri_abc' }, { claimId: 'public-claim-id', offerCode: 'founder' });
    await paypal.createPaypalSubscription({ paypalEnv: 'sandbox', clientId: 'client', clientSecret: 'secret', founderPlanId: 'P-15' },
      { origin: 'https://spanishcue.com', returnTo: '/clase/123', claimId: 'public-claim-id' });
    const sent = calls.map(call => call.options?.body || '').join(' ');
    assert.match(sent, /spanishcue_claim_id/);
    assert.match(sent, /"custom_id":"public-claim-id"/);
    assert.doesNotMatch(sent, /claim_secret|spanishcue_user_id|secret-verifier/);
    assert.match(sent, /\/pro\/claim/);
    assert.doesNotMatch(sent, /\/ingresar/);
  } finally { globalThis.fetch = originalFetch; }
});

test('anonymous PayPal route starts provider checkout and reuses the same claim without an account', async () => {
  const sqlite = await database();
  globalThis.__issue40TestEnv = {
    DB: asD1(sqlite), PAYPAL_ENV: 'sandbox', PAYPAL_PUBLIC_CHECKOUT_ENABLED: 'true',
    PAYPAL_SANDBOX_CLIENT_ID: 'client', PAYPAL_SANDBOX_CLIENT_SECRET: 'private',
    PAYPAL_SANDBOX_WEBHOOK_ID: 'webhook', PAYPAL_SANDBOX_PRODUCT_ID: 'product',
    PAYPAL_SANDBOX_FOUNDER_PLAN_ID: 'P-15',
  };
  const { POST } = await route('app/api/billing/checkout/route.ts');
  const originalFetch = globalThis.fetch;
  const providerCalls = [];
  globalThis.fetch = async (url, options) => {
    providerCalls.push({ url, options });
    if (String(url).endsWith('/v1/oauth2/token')) return Response.json({ access_token: 'access-token' });
    const created = providerCalls.filter(call => String(call.url).endsWith('/v1/billing/subscriptions')).length;
    return Response.json({ id: created > 1 ? 'I-SECOND' : 'I-GUEST', links: [{ rel: 'approve', href: 'https://paypal.example.test/approve' }] });
  };
  try {
    const origin = 'https://spanishcue.com';
    const request = cookie => new Request(`${origin}/api/billing/checkout`, {
      method: 'POST', headers: { origin, ...(cookie ? { cookie } : {}) }, body: JSON.stringify({ returnTo: '/clase/123' }),
    });
    const response = await POST(request());
    assert.equal(response.status, 200);
    assert.equal((await response.json()).approvalUrl, 'https://paypal.example.test/approve');
    const cookie = response.headers.get('set-cookie');
    assert.match(cookie, /HttpOnly; Secure; SameSite=Lax/);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM users').get().count, 0);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_subscriptions').get().count, 0);
    const claim = sqlite.prepare('SELECT claim_id, status FROM billing_purchase_claims').get();
    assert.equal(claim.status, 'checkout');
    assert.equal(JSON.parse(providerCalls.find(call => String(call.url).endsWith('/v1/billing/subscriptions')).options.body).custom_id, claim.claim_id);
    const repeated = await POST(request(cookie.split(';')[0]));
    assert.equal(repeated.status, 200);
    const otherLesson = await POST(new Request(`${origin}/api/billing/checkout`, {
      method: 'POST', headers: { origin, cookie: cookie.split(';')[0] }, body: JSON.stringify({ returnTo: '/clase/456' }),
    }));
    assert.equal(otherLesson.status, 200);
    assert.equal(otherLesson.headers.get('set-cookie'), null);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_purchase_claims').get().count, 1);
    assert.equal(providerCalls.filter(call => String(call.url).endsWith('/v1/billing/subscriptions')).length, 1);
    const claims = await claimModule();
    await claims.recordVerifiedPurchase(globalThis.__issue40TestEnv.DB, claim.claim_id, 'paypal', {
      subscriptionId: 'I-GUEST', paymentId: 'SALE-FIRST', email: 'ale@example.test',
      amountCents: 1500, currency: 'USD', paidAt: Math.floor(Date.now() / 1000),
      paidThrough: Math.floor(Date.now() / 1000) + 2592000,
    });
    const paidRetry = await POST(request(cookie.split(';')[0]));
    assert.equal((await paidRetry.json()).claimUrl, '/pro/claim?provider=paypal');
    assert.equal(paidRetry.headers.get('set-cookie'), null);
    assert.equal(providerCalls.filter(call => String(call.url).endsWith('/v1/billing/subscriptions')).length, 1);
    sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
    await claims.beginPurchaseBind(globalThis.__issue40TestEnv.DB, claim.claim_id, 'teacher-1', 'ale@example.test');
    await claims.finishPurchaseBind(globalThis.__issue40TestEnv.DB, claim.claim_id, 'teacher-1');
    const nextBuyer = await POST(request(cookie.split(';')[0]));
    assert.equal(nextBuyer.status, 200);
    assert.equal((await nextBuyer.json()).approvalUrl, 'https://paypal.example.test/approve');
    assert.match(nextBuyer.headers.get('set-cookie'), /HttpOnly; Secure; SameSite=Lax/);
    assert.equal(providerCalls.filter(call => String(call.url).endsWith('/v1/billing/subscriptions')).length, 2);
  } finally { globalThis.fetch = originalFetch; delete globalThis.__issue40TestEnv; sqlite.close(); }
});

test('anonymous Paddle route returns a real transaction token without a SPANISHCUE login', async () => {
  const sqlite = await database();
  globalThis.__issue40TestEnv = {
    DB: asD1(sqlite), PAYPAL_ENV: 'live', PAYPAL_PUBLIC_CHECKOUT_ENABLED: 'true',
    PAYPAL_LIVE_CLIENT_ID: 'client', PAYPAL_LIVE_CLIENT_SECRET: 'private',
    PAYPAL_LIVE_WEBHOOK_ID: 'webhook', PAYPAL_LIVE_PRODUCT_ID: 'product',
    PAYPAL_LIVE_FOUNDER_PLAN_ID: 'P-15', PADDLE_API_KEY: 'paddle-key',
    PADDLE_CLIENT_TOKEN: 'client-token', PADDLE_PRICE_ID: 'pri_founder', PADDLE_WEBHOOK_SECRET: 'webhook-secret',
    LEGAL_OPERATOR_JSON: JSON.stringify({
      legalName: 'Test', entityType: 'Particular', address: 'Test address', country: 'Argentina',
      taxId: '', registration: '', supportEmail: 'support@example.test', privacyEmail: 'privacy@example.test',
      governingLaw: 'Argentina', courts: 'Buenos Aires', effectiveDate: '2026-09-24',
      refundPolicyEs: 'Test refunds', refundPolicyEn: 'Test refunds',
      withdrawalPolicyEs: 'Test withdrawal', withdrawalPolicyEn: 'Test withdrawal',
    }),
  };
  const { POST } = await route('app/api/billing/paddle/checkout/route.ts');
  const originalFetch = globalThis.fetch;
  let body;
  let calls = 0;
  globalThis.fetch = async (_url, options) => {
    calls += 1;
    body = JSON.parse(options.body);
    return Response.json({ data: { id: `txn_${'a'.repeat(26)}` } });
  };
  try {
    const origin = 'https://spanishcue.com';
    const response = await POST(new Request(`${origin}/api/billing/paddle/checkout`, {
      method: 'POST', headers: { origin }, body: JSON.stringify({ returnTo: '/clase/123' }),
    }));
    assert.equal(response.status, 200);
    const checkout = await response.json();
    assert.equal(checkout.clientToken, 'client-token');
    const cookie = response.headers.get('set-cookie');
    assert.match(cookie, /HttpOnly; Secure; SameSite=Lax/);
    assert.equal(body.custom_data.spanishcue_claim_id, sqlite.prepare('SELECT claim_id FROM billing_purchase_claims').get().claim_id);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM users').get().count, 0);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM access_grants').get().count, 0);
    const claims = await claimModule();
    const claimId = sqlite.prepare('SELECT claim_id FROM billing_purchase_claims').get().claim_id;
    await claims.recordVerifiedPurchase(globalThis.__issue40TestEnv.DB, claimId, 'paddle', {
      subscriptionId: `sub_${'b'.repeat(26)}`, paymentId: checkout.transactionId,
      customerId: 'ctm_1', email: 'ale@example.test', amountCents: 1500, currency: 'USD',
      paidAt: Math.floor(Date.now() / 1000), paidThrough: Math.floor(Date.now() / 1000) + 2592000,
    });
    const paidRetry = await POST(new Request(`${origin}/api/billing/paddle/checkout`, {
      method: 'POST', headers: { origin, cookie: cookie.split(';')[0] },
      body: JSON.stringify({ returnTo: '/clase/456' }),
    }));
    assert.equal((await paidRetry.json()).claimUrl, '/pro/claim?provider=paddle');
    assert.equal(paidRetry.headers.get('set-cookie'), null);
    assert.equal(calls, 1);
  } finally { globalThis.fetch = originalFetch; delete globalThis.__issue40TestEnv; sqlite.close(); }
});

test('a verified purchase binds PRO, one Founder slot and one first-paid conversion exactly once', async () => {
  const result = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./db/purchase-binding"; export * from "./db/billing"; export * from "./app/billing-config";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const claims = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
  const sqlite = await database();
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
  const db = asD1(sqlite);
  const config = claims.billingConfig({ PAYPAL_ENV: 'live', FOUNDER_LIMIT: '1000' });
  await claims.getFounderOfferStatus(db, config);
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'live', offerCode: config.founderOffer.code, returnTo: '/clase/123', secret: claims.newClaimSecret(),
  });
  await claims.markPurchaseCheckout(db, claimId, 'paddle', { subscriptionId: 'sub_guest', paymentId: 'txn_guest' });
  await claims.recordVerifiedPurchase(db, claimId, 'paddle', {
    subscriptionId: 'sub_guest', paymentId: 'txn_guest', customerId: 'ctm_guest',
    email: 'ale@example.test', amountCents: 1500, currency: 'USD',
    paidAt: Math.floor(Date.now() / 1000), paidThrough: Math.floor(Date.now() / 1000) + 2592000,
  });
  assert.equal(await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'different@example.test', config, 'pri_founder'), null);
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM access_grants').get().count, 0);
  const first = await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, 'pri_founder');
  assert.equal(first?.returnTo, '/clase/123');
  await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, 'pri_founder');
  for (const table of ['billing_subscriptions', 'billing_payments', 'access_grants', 'founder_assignments', 'billing_outbox_events']) {
    assert.equal(sqlite.prepare(`SELECT COUNT(*) AS count FROM ${table}`).get().count, 1, table);
  }
  assert.equal(sqlite.prepare('SELECT claimed FROM founder_offer_state WHERE environment = ? AND offer_code = ?').get('live', config.founderOffer.code).claimed, 1);
  assert.equal((await claims.claimFirstPaidConversionForUser(db, 'teacher-1', 'sub_guest', 'live'))?.transactionId, 'txn_guest');
  assert.equal(await claims.claimFirstPaidConversionForUser(db, 'teacher-1', 'sub_guest', 'live'), null);
  sqlite.close();
});

test('anonymous PayPal payment binds only after verified email and preserves subscription management records', async () => {
  const result = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./db/purchase-binding"; export * from "./db/billing"; export * from "./app/billing-config";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const claims = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
  const sqlite = await database();
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
  const db = asD1(sqlite);
  const config = claims.billingConfig({ PAYPAL_ENV: 'sandbox', PAYPAL_SANDBOX_FOUNDER_PLAN_ID: 'P-15' });
  await claims.getFounderOfferStatus(db, config);
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'sandbox', offerCode: config.founderOffer.code, returnTo: '/clase/234', secret: claims.newClaimSecret(),
  });
  await claims.markPurchaseCheckout(db, claimId, 'paypal', { subscriptionId: 'I-GUEST' });
  assert.equal(await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, ''), null);
  await claims.recordVerifiedPurchase(db, claimId, 'paypal', {
    subscriptionId: 'I-GUEST', paymentId: 'SALE-GUEST', email: 'Ale@Example.Test',
    amountCents: 1500, currency: 'USD', paidAt: Math.floor(Date.now() / 1000),
    paidThrough: Math.floor(Date.now() / 1000) + 2592000, providerStatus: 'ACTIVE',
  });
  assert.equal(await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'wrong@example.test', config, ''), null);
  assert.equal((await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, ''))?.returnTo, '/clase/234');
  await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, '');
  const subscription = sqlite.prepare("SELECT user_id, status, provider_plan_id FROM billing_subscriptions WHERE provider_subscription_id = 'I-GUEST'").get();
  assert.deepEqual({ ...subscription }, { user_id: 'teacher-1', status: 'ACTIVE', provider_plan_id: 'P-15' });
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_payments').get().count, 1);
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM founder_assignments').get().count, 1);
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_outbox_events').get().count, 1);
  assert.equal((await claims.subscriptionForUser(db, 'teacher-1', 'I-GUEST', 'sandbox'))?.status, 'ACTIVE');
  sqlite.close();
});

test('a claimed PayPal subscription keeps its original guest custom ID for later reconciliation', async () => {
  const compiled = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./db/purchase-binding"; export * from "./db/billing"; export * from "./app/guest-purchase-verification"; export * from "./app/billing-config";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const claims = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString('base64')}`);
  const sqlite = await database();
  const db = asD1(sqlite);
  const config = claims.billingConfig({ PAYPAL_ENV: 'live', PAYPAL_LIVE_FOUNDER_PLAN_ID: 'P-15' });
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
  await claims.getFounderOfferStatus(db, config);
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'live', offerCode: config.founderOffer.code, returnTo: '/clase/234', secret: claims.newClaimSecret(),
  });
  await claims.markPurchaseCheckout(db, claimId, 'paypal', { subscriptionId: 'I-GUEST' });
  await claims.recordVerifiedPurchase(db, claimId, 'paypal', {
    subscriptionId: 'I-GUEST', paymentId: 'SALE-GUEST', email: 'ale@example.test',
    amountCents: 1500, currency: 'USD', paidAt: Math.floor(Date.now() / 1000),
    paidThrough: Math.floor(Date.now() / 1000) + 2592000,
  });
  await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, '');
  const provider = { id: 'I-GUEST', plan_id: 'P-15', custom_id: claimId };
  assert.equal(await claims.validatePaypalOwnedSubscription(db, provider, { subscriptionId: 'I-GUEST', userId: 'teacher-1', config }), true);
  assert.equal(await claims.validatePaypalOwnedSubscription(db, provider, { subscriptionId: 'I-GUEST', userId: 'other-user', config }), false);
  sqlite.close();
});

test('claimed guest PayPal renewals pass signed webhook validation and remain idempotent', async () => {
  const compiled = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./db/purchase-binding"; export * from "./db/billing"; export * from "./app/billing-config";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const claims = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString('base64')}`);
  const sqlite = await database();
  const db = asD1(sqlite);
  const env = {
    DB: db, PAYPAL_ENV: 'live', PAYPAL_LIVE_FOUNDER_PLAN_ID: 'P-15',
    PAYPAL_LIVE_CLIENT_ID: 'client', PAYPAL_LIVE_CLIENT_SECRET: 'private',
    PAYPAL_LIVE_WEBHOOK_ID: 'webhook', PAYPAL_LIVE_PRODUCT_ID: 'product',
  };
  globalThis.__issue40TestEnv = env;
  const config = claims.billingConfig(env);
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
  await claims.getFounderOfferStatus(db, config);
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'live', offerCode: config.founderOffer.code, returnTo: '/clase/234', secret: claims.newClaimSecret(),
  });
  await claims.markPurchaseCheckout(db, claimId, 'paypal', { subscriptionId: 'I-GUEST' });
  await claims.recordVerifiedPurchase(db, claimId, 'paypal', {
    subscriptionId: 'I-GUEST', paymentId: 'SALE-FIRST', email: 'ale@example.test',
    amountCents: 1500, currency: 'USD', paidAt: Math.floor(Date.now() / 1000),
    paidThrough: Math.floor(Date.now() / 1000) + 2592000,
  });
  await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, '');
  const { POST } = await route('app/api/billing/webhook/route.ts');
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async url => {
    if (String(url).endsWith('/v1/oauth2/token')) return Response.json({ access_token: 'token' });
    if (String(url).endsWith('/v1/notifications/verify-webhook-signature')) return Response.json({ verification_status: 'SUCCESS' });
    if (String(url).endsWith('/v1/billing/subscriptions/I-GUEST')) return Response.json({
      id: 'I-GUEST', plan_id: 'P-15', custom_id: claimId, status: 'ACTIVE',
      subscriber: { email_address: 'ale@example.test' },
      billing_info: { next_billing_time: new Date(Date.now() + 60 * 86400000).toISOString() },
    });
    throw new Error(`Unexpected PayPal request ${url}`);
  };
  try {
    const event = {
      id: 'WH-RENEW', event_type: 'PAYMENT.SALE.COMPLETED', create_time: new Date().toISOString(),
      resource: { billing_agreement_id: 'I-GUEST', id: 'SALE-RENEW', amount: { total: '15.00', currency: 'USD' } },
    };
    const send = () => POST(new Request('https://spanishcue.com/api/billing/webhook', {
      method: 'POST', headers: {
        'paypal-auth-algo': 'SHA256withRSA', 'paypal-cert-url': 'https://api.paypal.com/cert',
        'paypal-transmission-id': 'transmission', 'paypal-transmission-sig': 'signature',
        'paypal-transmission-time': new Date().toISOString(),
      }, body: JSON.stringify(event),
    }));
    assert.equal((await send()).status, 200);
    assert.equal((await send()).status, 200);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_payments').get().count, 2);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_outbox_events').get().count, 2);
  } finally { globalThis.fetch = originalFetch; delete globalThis.__issue40TestEnv; sqlite.close(); }
});

test('checkout claims remain recoverable after provider latency and retry with the same idempotency key', async () => {
  const claims = await claimModule();
  const sqlite = await database();
  const db = asD1(sqlite);
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'live', offerCode: 'founder-1000-usd15-monthly', returnTo: '/clase/234', secret: claims.newClaimSecret(),
  });
  const first = await claims.lockPurchaseCheckout(db, claimId, 'paypal');
  assert.ok(first.expiresAt > Math.floor(Date.now() / 1000) + 25 * 86400);
  await claims.releasePurchaseCheckout(db, claimId, 'paypal');
  const retry = await claims.lockPurchaseCheckout(db, claimId, 'paypal');
  assert.equal(retry.checkoutRequestId, first.checkoutRequestId);
  sqlite.prepare('UPDATE billing_purchase_claims SET updated_at = ? WHERE claim_id = ?')
    .run(Math.floor(Date.now() / 1000) - 121, claimId);
  const recovered = await claims.lockPurchaseCheckout(db, claimId, 'paypal');
  assert.equal(recovered.checkoutRequestId, first.checkoutRequestId);
  sqlite.close();
});

test('a paid claim is not replaced by another tab before its owner registers', async () => {
  const claims = await claimModule();
  const sqlite = await database();
  const db = asD1(sqlite);
  const secret = claims.newClaimSecret();
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'live', offerCode: 'founder-1000-usd15-monthly', returnTo: '/clase/123', secret,
  });
  const cookie = claims.purchaseClaimCookie('paddle', claimId, secret).split(';')[0];
  await claims.markPurchaseCheckout(db, claimId, 'paddle', { subscriptionId: 'sub_guest', paymentId: 'txn_guest' });
  await claims.recordVerifiedPurchase(db, claimId, 'paddle', {
    subscriptionId: 'sub_guest', paymentId: 'txn_guest', customerId: 'ctm_guest', email: 'ale@example.test',
    amountCents: 1500, currency: 'USD', paidAt: Math.floor(Date.now() / 1000),
    paidThrough: Math.floor(Date.now() / 1000) + 2592000,
  });
  const result = await claims.getOrCreatePurchaseClaim(db, cookie, 'paddle', {
    environment: 'live', offerCode: 'founder-1000-usd15-monthly', returnTo: '/clase/456',
  });
  assert.equal(result.claim.claimId, claimId);
  assert.equal(result.claim.returnTo, '/clase/123');
  assert.equal(result.setCookie, null);
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
  await claims.beginPurchaseBind(db, claimId, 'teacher-1', 'ale@example.test');
  await claims.finishPurchaseBind(db, claimId, 'teacher-1');
  const nextBuyer = await claims.getOrCreatePurchaseClaim(db, cookie, 'paddle', {
    environment: 'live', offerCode: 'founder-1000-usd15-monthly', returnTo: '/clase/456',
  });
  assert.notEqual(nextBuyer.claim.claimId, claimId);
  assert.equal(nextBuyer.claim.returnTo, '/clase/456');
  assert.match(nextBuyer.setCookie, /HttpOnly; Secure; SameSite=Lax/);
  sqlite.close();
});

test('Paddle and PayPal paid claims allocate from one Live Founder pool', async () => {
  const compiled = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./db/purchase-binding"; export * from "./db/billing"; export * from "./app/billing-config";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const claims = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString('base64')}`);
  const sqlite = await database();
  const db = asD1(sqlite);
  const config = claims.billingConfig({ PAYPAL_ENV: 'live', PAYPAL_LIVE_FOUNDER_PLAN_ID: 'P-15', FOUNDER_LIMIT: '2' });
  await claims.getFounderOfferStatus(db, config);
  const now = Math.floor(Date.now() / 1000);
  for (const [provider, userId, email, subscriptionId, paymentId] of [
    ['paddle', 'paddle-user', 'paddle@example.test', 'sub_paddle', 'txn_paddle'],
    ['paypal', 'paypal-user', 'paypal@example.test', 'I-PAYPAL', 'SALE-PAYPAL'],
  ]) {
    sqlite.prepare(`INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at)
      VALUES (?,?,?,'teacher','active',1,1,1)`).run(userId, email, email);
    const { claimId } = await claims.createPurchaseClaim(db, {
      environment: 'live', offerCode: config.founderOffer.code, returnTo: '/clase/123', secret: claims.newClaimSecret(),
    });
    await claims.markPurchaseCheckout(db, claimId, provider, { subscriptionId, paymentId });
    await claims.recordVerifiedPurchase(db, claimId, provider, {
      subscriptionId, paymentId, email, customerId: provider === 'paddle' ? 'ctm_paddle' : null,
      amountCents: 1500, currency: 'USD', paidAt: now, paidThrough: now + 2592000,
    });
    await claims.bindPurchaseToUser(db, claimId, userId, email, config, 'pri_founder');
  }
  const founders = sqlite.prepare('SELECT founder_number FROM founder_assignments ORDER BY founder_number').all().map(row => row.founder_number);
  assert.deepEqual(founders, [1, 2]);
  assert.equal(sqlite.prepare('SELECT claimed FROM founder_offer_state WHERE environment = ? AND offer_code = ?').get('live', config.founderOffer.code).claimed, 2);
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM access_grants').get().count, 2);
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_outbox_events WHERE event_name = ?').get('first_subscription_paid').count, 2);
  sqlite.close();
});

test('Paddle API must confirm exact price, completed transaction and customer email before claim is paid', async () => {
  const result = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./app/guest-purchase-verification";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const claims = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
  const sqlite = await database();
  const db = asD1(sqlite);
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'live', offerCode: 'founder-1000-usd15-monthly', returnTo: '/clase/5', secret: claims.newClaimSecret(),
  });
  const paymentId = `txn_${'a'.repeat(26)}`;
  const subscriptionId = `sub_${'b'.repeat(26)}`;
  await claims.markPurchaseCheckout(db, claimId, 'paddle', { paymentId });
  const price = { id: 'pri_founder', unit_price: { amount: '1500', currency_code: 'USD' }, billing_cycle: { interval: 'month', frequency: 1 }, trial_period: null };
  const custom_data = { spanishcue_claim_id: claimId, spanishcue_offer_code: 'founder-1000-usd15-monthly' };
  let customerEmail;
  let total = '1500';
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async url => {
    if (String(url).includes('/transactions/')) {
      assert.match(String(url), /\?include=customer$/);
      return Response.json({ data: {
      id: paymentId, status: 'completed', subscription_id: subscriptionId, customer_id: 'ctm_1',
      customer: { id: 'ctm_1', email: customerEmail }, custom_data,
      items: [{ quantity: 1, price }], currency_code: 'USD', details: { totals: { total } },
    } });
    }
    if (String(url).includes('/subscriptions/')) return Response.json({ data: {
      id: subscriptionId, customer_id: 'ctm_1', status: 'active', custom_data,
      items: [{ quantity: 1, price }], current_billing_period: { ends_at: new Date(Date.now() + 30 * 86400000).toISOString() },
    } });
    throw new Error('No separate customer.read API call is needed');
  };
  try {
    const config = { apiKey: 'test', priceId: 'pri_founder' };
    assert.equal(await claims.verifyGuestPaddlePayment(db, config, await claims.getPurchaseClaim(db, claimId), paymentId), null);
    customerEmail = 'ale@example.test'; total = '1400';
    assert.equal(await claims.verifyGuestPaddlePayment(db, config, await claims.getPurchaseClaim(db, claimId), paymentId), null);
    total = '1500';
    assert.equal((await claims.verifyGuestPaddlePayment(db, config, await claims.getPurchaseClaim(db, claimId), paymentId))?.status, 'paid');
    assert.equal(sqlite.prepare('SELECT normalized_email FROM billing_purchase_claims WHERE claim_id = ?').get(claimId).normalized_email, customerEmail);
  } finally { globalThis.fetch = originalFetch; sqlite.close(); }
});

test('claimed Paddle renewal accepts a verified customer whose billing email later changed', async () => {
  const compiled = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./db/purchase-binding"; export * from "./db/billing"; export * from "./app/billing-config";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const claims = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString('base64')}`);
  const sqlite = await database();
  const db = asD1(sqlite);
  const env = {
    DB: db, PAYPAL_ENV: 'live', PADDLE_API_KEY: 'paddle-key',
    PADDLE_CLIENT_TOKEN: 'client-token', PADDLE_PRICE_ID: 'pri_founder', PADDLE_WEBHOOK_SECRET: 'signing-secret',
  };
  globalThis.__issue40TestEnv = env;
  const config = claims.billingConfig(env);
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
  await claims.getFounderOfferStatus(db, config);
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'live', offerCode: config.founderOffer.code, returnTo: '/clase/234', secret: claims.newClaimSecret(),
  });
  const subscriptionId = `sub_${'b'.repeat(26)}`;
  const firstPayment = `txn_${'a'.repeat(26)}`;
  const renewal = `txn_${'c'.repeat(26)}`;
  await claims.markPurchaseCheckout(db, claimId, 'paddle', { subscriptionId, paymentId: firstPayment });
  await claims.recordVerifiedPurchase(db, claimId, 'paddle', {
    subscriptionId, paymentId: firstPayment, customerId: 'ctm_1', email: 'ale@example.test',
    amountCents: 1500, currency: 'USD', paidAt: Math.floor(Date.now() / 1000),
    paidThrough: Math.floor(Date.now() / 1000) + 2592000,
  });
  await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, 'pri_founder');
  const { POST } = await route('app/api/billing/paddle/webhook/route.ts');
  const custom_data = { spanishcue_claim_id: claimId, spanishcue_offer_code: config.founderOffer.code };
  const price = { id: 'pri_founder', unit_price: { amount: '1500', currency_code: 'USD' }, billing_cycle: { interval: 'month', frequency: 1 }, trial_period: null };
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async url => Response.json({ data: String(url).includes('/transactions/') ? {
    id: renewal, status: 'completed', subscription_id: subscriptionId, customer_id: 'ctm_1',
    customer: { id: 'ctm_1', email: 'updated@example.test' }, custom_data,
    items: [{ quantity: 1, price }], details: { totals: { total: '1500' } }, currency_code: 'USD',
  } : {
    id: subscriptionId, customer_id: 'ctm_1', status: 'active', custom_data,
    items: [{ quantity: 1, price }], current_billing_period: { ends_at: new Date(Date.now() + 60 * 86400000).toISOString() },
  } });
  try {
    const event = { event_id: 'evt-renew', event_type: 'transaction.completed',
      occurred_at: new Date().toISOString(), data: { id: renewal, subscription_id: subscriptionId } };
    const raw = JSON.stringify(event);
    const ts = String(Math.floor(Date.now() / 1000));
    const signature = createHmac('sha256', 'signing-secret').update(`${ts}:${raw}`).digest('hex');
    const send = () => POST(new Request('https://spanishcue.com/api/billing/paddle/webhook', {
      method: 'POST', headers: { 'paddle-signature': `ts=${ts};h1=${signature}` }, body: raw,
    }));
    assert.equal((await send()).status, 200);
    assert.equal((await send()).status, 200);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_payments').get().count, 2);
    assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_outbox_events').get().count, 2);
  } finally { globalThis.fetch = originalFetch; delete globalThis.__issue40TestEnv; sqlite.close(); }
});

test('retry repairs a payment saved just before access grant failed', async () => {
  const result = await build({
    stdin: { contents: 'export * from "./db/purchase-claims"; export * from "./db/purchase-binding"; export * from "./db/billing"; export * from "./app/billing-config";', resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const claims = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
  const sqlite = await database();
  sqlite.prepare("INSERT INTO users (id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher-1','ale@example.test','ale@example.test','teacher','active',1,1,1)").run();
  const db = asD1(sqlite);
  const config = claims.billingConfig({ PAYPAL_ENV: 'live' });
  await claims.getFounderOfferStatus(db, config);
  const { claimId } = await claims.createPurchaseClaim(db, {
    environment: 'live', offerCode: config.founderOffer.code, returnTo: '/clase/6', secret: claims.newClaimSecret(),
  });
  await claims.markPurchaseCheckout(db, claimId, 'paddle', { subscriptionId: 'sub_retry', paymentId: 'txn_retry' });
  await claims.recordVerifiedPurchase(db, claimId, 'paddle', {
    subscriptionId: 'sub_retry', paymentId: 'txn_retry', email: 'ale@example.test',
    amountCents: 1500, currency: 'USD', paidAt: Math.floor(Date.now() / 1000),
    paidThrough: Math.floor(Date.now() / 1000) + 2592000,
  });
  let failOnce = true;
  const flaky = { prepare(sql) {
    const statement = db.prepare(sql);
    return { ...statement, bind(...args) {
      const bound = statement.bind(...args);
      return sql.includes('INSERT INTO access_grants') && failOnce
        ? { ...bound, run: async () => { failOnce = false; throw new Error('simulated D1 interruption'); } }
        : bound;
    } };
  } };
  await assert.rejects(claims.bindPurchaseToUser(flaky, claimId, 'teacher-1', 'ale@example.test', config, 'pri_founder'), /simulated D1 interruption/);
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM billing_payments').get().count, 1);
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM access_grants').get().count, 0);
  await claims.bindPurchaseToUser(db, claimId, 'teacher-1', 'ale@example.test', config, 'pri_founder');
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS count FROM access_grants').get().count, 1);
  assert.equal(sqlite.prepare("SELECT event_name FROM billing_outbox_events").get()?.event_name, 'first_subscription_paid');
  sqlite.close();
});
