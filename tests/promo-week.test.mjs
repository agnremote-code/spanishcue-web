import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { DatabaseSync } from 'node:sqlite';
import { readFile, readdir } from 'node:fs/promises';

const load = async (contents) => {
  const built = await build({ stdin: { contents, resolveDir: process.cwd() }, bundle: true, write: false, format: 'esm', platform: 'node' });
  return import(`data:text/javascript;base64,${Buffer.from(built.outputFiles[0].text).toString('base64')}`);
};
const p = await load('export * from "./app/paddle-server"; export * from "./app/paddle-config"; export * from "./app/promo-config";');
const pp = await load('export * from "./app/paypal-server"; export * from "./app/billing-config";');
const dbm = await load('export * from "./db/billing"; export * from "./db/paddle-billing"; export * from "./app/billing-config";');
const mail = await load('export * from "./server/promo-reminder";');

const monthly = 'pri_01m6k17xns79tsteephk45n7qq', trialId = 'pri_01m3xv2ybze2yve1phknvm3r4b';
const cfg = { apiKey: 'test', clientToken: 'test', webhookSecret: 'test', priceId: monthly, trialPriceId: trialId, annualPriceId: 'pri_01m6k19ak3sep13j06ysgrxzp7' };
const promoPrice = () => ({ ...p.paddlePromoPrice(), id: 'pri_01promononcatalog0000000000' });
const pair = (week = true) => {
  const period = week ? { starts_at: '2026-11-18T00:00:00Z', ends_at: '2026-11-25T00:00:00Z' } : { starts_at: '2026-11-25T00:00:00Z', ends_at: '2026-12-25T00:00:00Z' };
  const common = { customer_id: 'ctm_teacher', custom_data: { spanishcue_user_id: 'teacher' }, items: [{ quantity: 1, price: promoPrice() }] };
  return [
    { ...structuredClone(common), id: 'txn_promo', status: 'completed', subscription_id: 'sub_promo', currency_code: 'USD', billing_period: period, details: { totals: { total: week ? '99' : '1990' } } },
    { ...common, id: 'sub_promo', status: week ? 'trialing' : 'active', current_billing_period: period },
  ];
};

test('the promo has an end date and only two trial charges exist', () => {
  assert.equal(p.PROMO_WEEK_CENTS, 99);
  assert.equal(p.PROMO_WEEK_DAYS, 7);
  assert.equal(p.PROMO_WEEK_THEN_CENTS, 1990);
  assert.equal(p.promoWeekActive(p.PROMO_WEEK_ENDS_AT - 1), true);
  assert.equal(p.promoWeekActive(p.PROMO_WEEK_ENDS_AT), false);
  assert.equal(new Date(p.PROMO_WEEK_ENDS_AT * 1000).toISOString(), '2026-12-01T03:00:00.000Z');
  assert.deepEqual([99, 200, 1990, 0, null].map(p.isTrialCharge), [true, true, false, false, false]);
});

test('Paddle: the promo checkout sends a non-catalog price of the PRO product and never a catalog price', async () => {
  const old = globalThis.fetch; const seen = [];
  globalThis.fetch = async (_url, init) => { seen.push(JSON.parse(init.body)); return Response.json({ data: { id: 'txn_test' } }); };
  try {
    await p.createPaddleCheckoutTransaction(cfg, { userId: 'teacher', offerCode: 'founder', offer: 'promo' });
    await p.createPaddleCheckoutTransaction(cfg, { userId: 'teacher', offerCode: 'founder', offer: 'monthly' });
  } finally { globalThis.fetch = old; }
  const [promo, regular] = seen;
  assert.equal(promo.items.length, 1);
  assert.equal(promo.items[0].price_id, undefined);
  assert.deepEqual(promo.items[0].price.unit_price, { amount: '1990', currency_code: 'USD' });
  assert.deepEqual(promo.items[0].price.billing_cycle, { interval: 'month', frequency: 1 });
  assert.deepEqual(promo.items[0].price.trial_period, { interval: 'day', frequency: 7, requires_payment_method: true, unit_price: { amount: '99', currency_code: 'USD' } });
  assert.equal(promo.items[0].price.product_id, p.PADDLE_PRODUCT_ID);
  assert.equal(promo.items[0].price.tax_mode, 'internal');
  assert.equal(promo.custom_data.spanishcue_checkout_offer, 'promo');
  assert.equal(regular.items[0].price_id, monthly);
});

test('Paddle: the US$0.99 week grants exactly seven days and the first month bills US$19.90', () => {
  const [tx, sub] = pair(true);
  assert.equal(p.paddleOffer(tx, cfg), 'promo');
  assert.ok(p.validatePaddleTransaction(tx, cfg, 'teacher'));
  assert.ok(p.validatePaddleSubscription(sub, cfg, 'teacher'));
  const week = p.paddleCompletedPayment(tx, sub, cfg);
  assert.equal(week.amountCents, 99); assert.equal(week.isTrial, true); assert.equal(week.offer, 'promo');
  assert.equal(week.paidThrough - week.paidAt, 7 * 86400);
  const [monthTx, monthSub] = pair(false);
  const month = p.paddleCompletedPayment(monthTx, monthSub, cfg);
  assert.equal(month.amountCents, 1990); assert.equal(month.isTrial, false);
  // The paid week replayed after conversion cannot extend access.
  assert.equal(p.paddleCompletedPayment(tx, monthSub, cfg).paidThrough, week.paidThrough);
});

test('Paddle: any other terms, product, amount or a catalog ID is rejected', () => {
  for (const edit of [x => x.trial_period.frequency = 14, x => x.trial_period.unit_price.amount = '0', x => x.trial_period.unit_price = null,
    x => x.trial_period.interval = 'week', x => x.trial_period.requires_payment_method = false, x => x.unit_price.amount = '990',
    x => x.unit_price.currency_code = 'EUR', x => x.product_id = 'pro_other', x => x.tax_mode = 'external', x => x.billing_cycle.interval = 'year',
    x => x.id = monthly, x => x.id = trialId, x => x.id = undefined]) {
    const [tx] = pair(true); edit(tx.items[0].price);
    assert.equal(p.paddleOffer(tx, cfg) === 'promo', false);
    assert.equal(p.paddleCompletedPayment(tx, pair(true)[1], cfg), null);
  }
  for (const edit of [tx => tx.details.totals.total = '0', tx => tx.details.totals.total = '200', tx => tx.billing_period.ends_at = '2026-11-19T00:00:00Z',
    tx => tx.status = 'billed', tx => tx.currency_code = 'EUR', tx => tx.customer_id = 'ctm_other']) {
    const [tx, sub] = pair(true); edit(tx);
    assert.equal(p.paddleCompletedPayment(tx, sub, cfg), null);
  }
  const [tx] = pair(true);
  assert.equal(p.validatePaddleTransaction(tx, cfg, 'someone-else'), false);
});

const live = pp.billingConfig({ PAYPAL_ENV: 'live', PAYPAL_LIVE_CLIENT_ID: 'client', PAYPAL_LIVE_CLIENT_SECRET: 'secret', PAYPAL_LIVE_WEBHOOK_ID: 'hook', PAYPAL_LIVE_PRODUCT_ID: 'PROD-TEST', PAYPAL_LIVE_FOUNDER_PLAN_ID: 'P-LEGACY0000000000' });
const promoPlan = () => ({
  id: 'P-PROMO00000000000001', name: pp.PAYPAL_PROMO_PLAN_NAME, product_id: 'PROD-TEST', status: 'ACTIVE',
  billing_cycles: [
    { frequency: { interval_unit: 'WEEK', interval_count: 1 }, tenure_type: 'TRIAL', sequence: 1, total_cycles: 1, pricing_scheme: { fixed_price: { value: '0.99', currency_code: 'USD' } } },
    { frequency: { interval_unit: 'MONTH', interval_count: 1 }, tenure_type: 'REGULAR', sequence: 2, total_cycles: 0, pricing_scheme: { fixed_price: { value: '19.9', currency_code: 'USD' } } },
  ],
  payment_preferences: { setup_fee: { value: '0.0', currency_code: 'USD' } },
});

test('PayPal: only a plan with exactly the promo terms is the promo plan', () => {
  assert.equal(pp.validatePaypalPromoPlan(promoPlan(), live), true);
  for (const edit of [x => x.status = 'INACTIVE', x => x.product_id = 'PROD-OTHER', x => x.id = live.founderPlanId, x => x.id = live.legacyFounderPlanId,
    x => x.billing_cycles[0].pricing_scheme.fixed_price.value = '0.00', x => x.billing_cycles[0].total_cycles = 2,
    x => x.billing_cycles[0].frequency.interval_unit = 'MONTH', x => x.billing_cycles[1].pricing_scheme.fixed_price.value = '9.90',
    x => x.billing_cycles[1].total_cycles = 12, x => x.billing_cycles.pop(), x => x.payment_preferences.setup_fee.value = '5.00',
    x => x.billing_cycles[1].pricing_scheme.fixed_price.currency_code = 'EUR']) {
    const plan = promoPlan(); edit(plan);
    assert.equal(pp.validatePaypalPromoPlan(plan, live), false);
  }
});

test('PayPal: US$0.99 is a valid payment only on the verified promo plan', () => {
  const week = { value: '0.99', currency_code: 'USD' }, month = { value: '19.90', currency_code: 'USD' };
  assert.equal(pp.validatePaypalPayment(week, live), false);
  assert.equal(pp.validatePaypalPayment(week, live, 'P-PROMO00000000000001'), false);
  const promo = { ...live, promoPlanId: 'P-PROMO00000000000001' };
  assert.equal(pp.validatePaypalPayment(week, promo, 'P-PROMO00000000000001'), true);
  assert.equal(pp.validatePaypalPayment(month, promo, 'P-PROMO00000000000001'), true);
  assert.equal(pp.validatePaypalPayment(week, promo, live.founderPlanId), false);
  assert.equal(pp.validatePaypalPayment({ value: '0.99', currency_code: 'EUR' }, promo, 'P-PROMO00000000000001'), false);
  assert.equal(pp.validatePaypalPayment(month, live), true);
  const subscription = { id: 'I-TEST', plan_id: 'P-PROMO00000000000001', custom_id: 'teacher' };
  assert.equal(pp.validatePaypalSubscription(subscription, { subscriptionId: 'I-TEST', userId: 'teacher', config: live }), false);
  assert.equal(pp.validatePaypalSubscription(subscription, { subscriptionId: 'I-TEST', userId: 'teacher', config: promo }), true);
});

test('PayPal: the promo plan is found by name, created once when missing, and never trusted without verification', async () => {
  const old = globalThis.fetch; const calls = [];
  let plans = [];
  globalThis.fetch = async (url, init = {}) => {
    const u = String(url);
    if (u.endsWith('/v1/oauth2/token')) return Response.json({ access_token: 'token' });
    calls.push(`${init.method || 'GET'} ${u.replace('https://api-m.paypal.com', '').split('?')[0]}`);
    if (u.includes('/v1/billing/plans?')) return Response.json({ plans: plans.map(({ id, name, status }) => ({ id, name, status })) });
    if (init.method === 'POST' && u.endsWith('/v1/billing/plans')) {
      assert.equal(init.headers['paypal-request-id'], 'spanishcue-promo-semana-099-20261117');
      const body = JSON.parse(init.body);
      assert.equal(body.product_id, 'PROD-TEST'); assert.equal(body.name, pp.PAYPAL_PROMO_PLAN_NAME);
      assert.deepEqual(body.billing_cycles.map(c => [c.tenure_type, c.frequency.interval_unit, c.total_cycles, c.pricing_scheme.fixed_price.value]),
        [['TRIAL', 'WEEK', 1, '0.99'], ['REGULAR', 'MONTH', 0, '19.90']]);
      plans.push(promoPlan());
      return Response.json(promoPlan(), { status: 201 });
    }
    const plan = plans.find(x => u.endsWith(`/v1/billing/plans/${x.id}`));
    return plan ? Response.json(plan) : new Response('{}', { status: 404 });
  };
  try {
    assert.equal(await pp.ensurePaypalPromoPlan(live), 'P-PROMO00000000000001');
    assert.equal(calls.filter(c => c === 'POST /v1/billing/plans').length, 1);
    // Cached for this isolate: no second creation, no further requests.
    const before = calls.length;
    assert.equal(await pp.ensurePaypalPromoPlan(live), 'P-PROMO00000000000001');
    assert.equal(calls.length, before);
    assert.equal((await pp.withPaypalPromoPlan(live, 'P-PROMO00000000000001')).promoPlanId, 'P-PROMO00000000000001');
    assert.equal((await pp.withPaypalPromoPlan(live, live.founderPlanId)).promoPlanId, undefined);
    assert.equal((await pp.withPaypalPromoPlan(live, 'P-UNKNOWN00000000000')).promoPlanId, undefined);
    assert.equal((await pp.withPaypalPromoPlan(live, 'not-a-plan')).promoPlanId, undefined);
  } finally { globalThis.fetch = old; }
});

async function database() {
  const sqlite = new DatabaseSync(':memory:');
  for (const n of (await readdir('drizzle')).filter(n => n.endsWith('.sql')).sort()) sqlite.exec((await readFile(`drizzle/${n}`, 'utf8')).replaceAll('--> statement-breakpoint', ''));
  const stmt = (sql, args = []) => ({ bind: (...v) => stmt(sql, v), run: async () => ({ meta: { changes: Number(sqlite.prepare(sql).run(...args).changes) } }), first: async () => sqlite.prepare(sql).get(...args) ?? null, all: async () => ({ results: sqlite.prepare(sql).all(...args) }) });
  sqlite.exec("INSERT INTO users(id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES ('teacher','teacher@example.test','teacher@example.test','teacher','active',1,1,1)");
  return { sqlite, db: { prepare: s => stmt(s) } };
}

test('PayPal: the week grants seven days as a paid trial; the first US$19.90 is the first subscription payment', async () => {
  const { sqlite, db } = await database();
  const config = dbm.billingConfig({ PAYPAL_ENV: 'live' }), now = Math.floor(Date.now() / 1000);
  assert.equal(await dbm.promoWeekEligible(db, 'teacher'), true);
  await dbm.createPendingSubscription(db, { environment: 'live', userId: 'teacher', paypalSubscriptionId: 'I-PROMO', planId: 'P-PROMO00000000000001', offerCode: config.founderOffer.code });
  assert.equal(await dbm.paypalSubscriptionPlanId(db, 'I-PROMO', 'live'), 'P-PROMO00000000000001');
  const week = { environment: 'live', paypalSubscriptionId: 'I-PROMO', providerPaymentId: 'SALE-WEEK', amountCents: 99, currency: 'USD', status: 'COMPLETED', occurredAt: now, paidThrough: now + 7 * 86400 };
  // Without the verified promo plan the US$0.99 charge is refused.
  await assert.rejects(dbm.recordPaypalPayment(db, week, config), /paypal_payment_mismatch/);
  assert.equal((await dbm.recordPaypalPayment(db, { ...week, promoPlan: true }, config)).kind, 'trial');
  assert.equal((await dbm.recordPaypalPayment(db, { ...week, promoPlan: true }, config)).kind, 'duplicate');
  assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at, now + 7 * 86400);
  assert.equal(sqlite.prepare('SELECT count(*) n FROM founder_assignments').get().n, 0);
  assert.equal(sqlite.prepare("SELECT count(*) n FROM billing_outbox_events WHERE event_name='trial_paid'").get().n, 1);
  assert.equal(sqlite.prepare("SELECT count(*) n FROM billing_outbox_events WHERE event_name='first_subscription_paid'").get().n, 0);
  assert.equal(sqlite.prepare('SELECT first_payment_at f FROM billing_subscriptions').get().f, null);
  assert.equal(await dbm.promoWeekEligible(db, 'teacher'), false);
  const month = { ...week, providerPaymentId: 'SALE-MONTH', amountCents: 1990, occurredAt: now + 7 * 86400, paidThrough: now + 37 * 86400, promoPlan: true };
  assert.equal((await dbm.recordPaypalPayment(db, month, config)).kind, 'first');
  assert.equal(sqlite.prepare('SELECT count(*) n FROM founder_assignments').get().n, 1);
  assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at, now + 37 * 86400);
  const next = { ...month, providerPaymentId: 'SALE-MONTH-2', occurredAt: now + 37 * 86400, paidThrough: now + 67 * 86400 };
  assert.equal((await dbm.recordPaypalPayment(db, next, config)).kind, 'renewal');
  sqlite.close();
});

test('Paddle: the week is stored as a paid trial and US$0.99 is refused as a regular payment', async () => {
  const { sqlite, db } = await database();
  const config = dbm.billingConfig({ PAYPAL_ENV: 'live' }), now = Math.floor(Date.now() / 1000);
  await dbm.upsertPaddleSubscription(db, { userId: 'teacher', subscriptionId: 'sub_promo', priceId: 'pri_01promononcatalog0000000000', offerCode: config.founderOffer.code, status: 'ACTIVE' });
  const week = { userId: 'teacher', subscriptionId: 'sub_promo', transactionId: 'txn_week', amountCents: 99, currency: 'USD', isTrial: true, occurredAt: now, paidThrough: now + 7 * 86400 };
  await assert.rejects(dbm.recordPaddleCompletedPayment(db, { ...week, isTrial: false }, config), /paddle_payment_amount_invalid/);
  assert.equal((await dbm.recordPaddleCompletedPayment(db, week, config)).kind, 'trial');
  assert.equal(sqlite.prepare('SELECT expires_at FROM access_grants').get().expires_at, now + 7 * 86400);
  const month = await dbm.recordPaddleCompletedPayment(db, { ...week, transactionId: 'txn_month', amountCents: 1990, isTrial: false, occurredAt: now + 7 * 86400, paidThrough: now + 37 * 86400 }, config);
  assert.equal(month.kind, 'first'); assert.equal(month.afterTrial, true);
  assert.equal(sqlite.prepare('SELECT count(*) n FROM founder_assignments').get().n, 1);
  sqlite.close();
});

test('the reminder is scheduled two days before the charge, once per subscription, and never throws', async () => {
  const { sqlite, db } = await database();
  const old = globalThis.fetch; const sent = [];
  const now = Math.floor(Date.now() / 1000), chargeAt = now + 7 * 86400;
  globalThis.fetch = async (url, init) => { sent.push({ url: String(url), headers: init.headers, body: JSON.parse(init.body) }); return Response.json({ id: 'mail_1' }); };
  try {
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'teacher', provider: 'paddle', subscriptionId: 'sub_promo', chargeAt }), true);
    assert.equal(sent.length, 1);
    assert.equal(sent[0].url, 'https://api.resend.com/emails');
    assert.equal(sent[0].headers['idempotency-key'], 'promo-week-reminder/paddle/sub_promo');
    assert.deepEqual(sent[0].body.to, ['teacher@example.test']);
    assert.equal(Date.parse(sent[0].body.scheduled_at) / 1000, chargeAt - 2 * 86400);
    assert.match(sent[0].body.text, /US\$19,90 por mes/); assert.match(sent[0].body.text, /US\$19\.90 per month/);
    assert.match(sent[0].body.text, /https:\/\/spanishcue\.com\/cuenta/);
    assert.equal(await mail.schedulePromoReminder({}, db, { userId: 'teacher', provider: 'paddle', subscriptionId: 'sub_promo', chargeAt }), false);
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'nobody', provider: 'paypal', subscriptionId: 'I-X', chargeAt }), false);
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'teacher', provider: 'paypal', subscriptionId: 'I-X', chargeAt: now - 5 }), false);
    globalThis.fetch = async () => { throw new Error('network'); };
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'teacher', provider: 'paypal', subscriptionId: 'I-X', chargeAt }), false);
    assert.equal(sent.length, 1);
  } finally { globalThis.fetch = old; sqlite.close(); }
});

test('checkout states the renewal next to every promo button and keeps the regular plans', async () => {
  const ui = await readFile('app/acceso/CheckoutButton.tsx', 'utf8');
  assert.match(ui, /checkoutPaddle\("promo"\)/);
  assert.match(ui, /startPayPal\("promo"\)/);
  assert.match(ui, /El día 8 la suscripción se renueva sola a US\$19,90 por mes/);
  assert.match(ui, /On day 8 the subscription renews automatically at US\$19\.90 per month/);
  assert.match(ui, /Solo para tu primera suscripción/);
  assert.match(ui, /promo\.eligible === false\) return null/);
  assert.match(ui, /checkoutPaddle\("monthly"\)/);
  for (const route of ['app/api/billing/paddle/checkout/route.ts', 'app/api/billing/checkout/route.ts']) {
    const source = await readFile(route, 'utf8');
    assert.match(source, /promo_account_required/); assert.match(source, /promoWeekActive\(\)/); assert.match(source, /promoWeekEligible/);
  }
});
