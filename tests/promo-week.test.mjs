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
const legacyPromoPrice = () => { const price = promoPrice(); price.trial_period.frequency = 7; return price; };
const pair = (week = true, days = 10) => {
  const trialEnd = new Date(Date.parse('2026-11-18T00:00:00Z') + days * 86400000).toISOString().replace('.000Z', 'Z');
  const period = week ? { starts_at: '2026-11-18T00:00:00Z', ends_at: trialEnd } : { starts_at: trialEnd, ends_at: '2026-12-28T00:00:00Z' };
  const common = { customer_id: 'ctm_teacher', custom_data: { spanishcue_user_id: 'teacher' }, items: [{ quantity: 1, price: days === 7 ? legacyPromoPrice() : promoPrice() }] };
  return [
    { ...structuredClone(common), id: 'txn_promo', status: 'completed', subscription_id: 'sub_promo', currency_code: 'USD', billing_period: period, details: { totals: { total: week ? '99' : '1990' } } },
    { ...common, id: 'sub_promo', status: week ? 'trialing' : 'active', current_billing_period: period },
  ];
};

test('the promo has an end date and only two trial charges exist', () => {
  assert.equal(p.PROMO_WEEK_CENTS, 99);
  assert.equal(p.PROMO_WEEK_DAYS, 10);
  assert.equal(p.PROMO_LEGACY_DAYS, 7);
  assert.equal(p.PROMO_REMINDER_DAYS_BEFORE, 7);
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
  assert.deepEqual(promo.items[0].price.trial_period, { interval: 'day', frequency: 10, requires_payment_method: true, unit_price: { amount: '99', currency_code: 'USD' } });
  assert.equal(promo.items[0].price.product_id, p.PADDLE_PRODUCT_ID);
  assert.equal(promo.items[0].price.tax_mode, 'internal');
  assert.equal(promo.custom_data.spanishcue_checkout_offer, 'promo');
  assert.equal(regular.items[0].price_id, monthly);
});

test('Paddle: the US$0.99 trial grants exactly ten days and the first month bills US$19.90', () => {
  const [tx, sub] = pair(true);
  assert.equal(p.paddleOffer(tx, cfg), 'promo');
  assert.ok(p.validatePaddleTransaction(tx, cfg, 'teacher'));
  assert.ok(p.validatePaddleSubscription(sub, cfg, 'teacher'));
  const week = p.paddleCompletedPayment(tx, sub, cfg);
  assert.equal(week.amountCents, 99); assert.equal(week.isTrial, true); assert.equal(week.offer, 'promo');
  assert.equal(week.paidThrough - week.paidAt, 10 * 86400);
  const [monthTx, monthSub] = pair(false);
  const month = p.paddleCompletedPayment(monthTx, monthSub, cfg);
  assert.equal(month.amountCents, 1990); assert.equal(month.isTrial, false);
  // The paid week replayed after conversion cannot extend access.
  assert.equal(p.paddleCompletedPayment(tx, monthSub, cfg).paidThrough, week.paidThrough);
});

test('Paddle: a subscription started on the original 7-day terms keeps exactly seven days', () => {
  const [tx, sub] = pair(true, 7);
  assert.equal(p.paddleOffer(tx, cfg), 'promo');
  const week = p.paddleCompletedPayment(tx, sub, cfg);
  assert.equal(week.paidThrough - week.paidAt, 7 * 86400);
  // A 7-day price cannot claim a 10-day period, nor a 10-day price a 7-day one.
  const [longTx, longSub] = pair(true, 7); longTx.billing_period.ends_at = '2026-11-28T00:00:00Z';
  assert.equal(p.paddleCompletedPayment(longTx, longSub, cfg), null);
  const [shortTx, shortSub] = pair(true, 10); shortTx.billing_period.ends_at = '2026-11-25T00:00:00Z';
  assert.equal(p.paddleCompletedPayment(shortTx, shortSub, cfg), null);
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
const NEW_PLAN = 'P-87F77087HH263243MNMEGHGQ';
const promoPlan = () => ({
  id: NEW_PLAN, name: pp.PAYPAL_PROMO_PLAN_NAME, product_id: 'PROD-TEST', status: 'ACTIVE',
  billing_cycles: [
    { frequency: { interval_unit: 'DAY', interval_count: 10 }, tenure_type: 'TRIAL', sequence: 1, total_cycles: 1, pricing_scheme: { fixed_price: { value: '0.99', currency_code: 'USD' } } },
    { frequency: { interval_unit: 'MONTH', interval_count: 1 }, tenure_type: 'REGULAR', sequence: 2, total_cycles: 0, pricing_scheme: { fixed_price: { value: '19.9', currency_code: 'USD' } } },
  ],
  payment_preferences: { setup_fee: { value: '0.0', currency_code: 'USD' } },
});
const legacyPlan = () => {
  const plan = promoPlan(); plan.id = 'P-3BW31966S0028752HNL6KR5Y'; plan.name = 'SpanishCue PRO · primera semana US$0.99, luego US$19.90/mes';
  plan.billing_cycles[0].frequency = { interval_unit: 'WEEK', interval_count: 1 }; return plan;
};

test('PayPal: only a plan with exactly the promo terms is the promo plan', () => {
  assert.equal(pp.validatePaypalPromoPlan(promoPlan(), live), true);
  assert.equal(pp.paypalPromoPlanDays(promoPlan(), live), 10);
  assert.equal(pp.paypalPromoPlanDays(legacyPlan(), live), 7);
  for (const edit of [x => x.billing_cycles[0].frequency.interval_count = 14, x => x.billing_cycles[0].frequency.interval_count = 7, x => x.status = 'INACTIVE', x => x.product_id = 'PROD-OTHER', x => x.id = live.founderPlanId, x => x.id = live.legacyFounderPlanId,
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
  assert.equal(pp.validatePaypalPayment(week, live, 'P-3BW31966S0028752HNL6KR5Y'), false);
  const promo = { ...live, promoPlanId: 'P-3BW31966S0028752HNL6KR5Y' };
  assert.equal(pp.validatePaypalPayment(week, promo, 'P-3BW31966S0028752HNL6KR5Y'), true);
  assert.equal(pp.validatePaypalPayment(month, promo, 'P-3BW31966S0028752HNL6KR5Y'), true);
  assert.equal(pp.validatePaypalPayment(week, promo, live.founderPlanId), false);
  assert.equal(pp.validatePaypalPayment({ value: '0.99', currency_code: 'EUR' }, promo, 'P-3BW31966S0028752HNL6KR5Y'), false);
  assert.equal(pp.validatePaypalPayment(month, live), true);
  const subscription = { id: 'I-TEST', plan_id: 'P-3BW31966S0028752HNL6KR5Y', custom_id: 'teacher' };
  assert.equal(pp.validatePaypalSubscription(subscription, { subscriptionId: 'I-TEST', userId: 'teacher', config: live }), false);
  assert.equal(pp.validatePaypalSubscription(subscription, { subscriptionId: 'I-TEST', userId: 'teacher', config: promo }), true);
});

test('PayPal Live: new checkouts get the 10-day plan; the original 7-day plan stays valid but is never offered', async () => {
  const old = globalThis.fetch; const calls = [];
  const plans = [legacyPlan(), promoPlan()];
  globalThis.fetch = async (url, init = {}) => {
    const u = String(url);
    if (u.endsWith('/v1/oauth2/token')) return Response.json({ access_token: 'token' });
    calls.push(`${init.method || 'GET'} ${u.replace('https://api-m.paypal.com', '').split('?')[0]}`);
    if (u.includes('/v1/billing/plans?')) return Response.json({ plans: plans.map(({ id, name, status }) => ({ id, name, status })) });
    if (init.method === 'POST') throw new Error('must not create');
    const plan = plans.find(x => u.endsWith(`/v1/billing/plans/${x.id}`));
    return plan ? Response.json(plan) : new Response('{}', { status: 404 });
  };
  try {
    assert.equal(pp.PAYPAL_LIVE_PROMO_LEGACY_PLAN_ID, 'P-3BW31966S0028752HNL6KR5Y');
    assert.equal(pp.PAYPAL_LIVE_PROMO_PLAN_ID, NEW_PLAN);
    assert.equal(await pp.ensurePaypalPromoPlan(live), NEW_PLAN);
    // Pinned: one direct lookup, no listing and no creation.
    assert.deepEqual(calls, [`GET /v1/billing/plans/${NEW_PLAN}`]);
    const current = await pp.withPaypalPromoPlan(live, NEW_PLAN);
    assert.equal(current.promoPlanId, NEW_PLAN); assert.equal(current.promoPlanDays, 10);
    const legacy = await pp.withPaypalPromoPlan(live, pp.PAYPAL_LIVE_PROMO_LEGACY_PLAN_ID);
    assert.equal(legacy.promoPlanId, pp.PAYPAL_LIVE_PROMO_LEGACY_PLAN_ID); assert.equal(legacy.promoPlanDays, 7);
    assert.equal((await pp.withPaypalPromoPlan(live, 'P-OTHERPROMO000000001')).promoPlanId, undefined);
    assert.equal((await pp.withPaypalPromoPlan(live, live.founderPlanId)).promoPlanId, undefined);
    assert.equal((await pp.withPaypalPromoPlan(live, 'not-a-plan')).promoPlanId, undefined);
  } finally { globalThis.fetch = old; }
});

test('PayPal Sandbox: the promo plan is found by name, created once when missing, and never trusted without verification', async () => {
  const live = pp.billingConfig({ PAYPAL_ENV: 'sandbox', PAYPAL_SANDBOX_CLIENT_ID: 'client', PAYPAL_SANDBOX_CLIENT_SECRET: 'secret', PAYPAL_SANDBOX_WEBHOOK_ID: 'hook', PAYPAL_SANDBOX_PRODUCT_ID: 'PROD-TEST', PAYPAL_SANDBOX_FOUNDER_PLAN_ID: 'P-LEGACY0000000000' });
  const old = globalThis.fetch; const calls = [];
  let plans = [];
  globalThis.fetch = async (url, init = {}) => {
    const u = String(url);
    if (u.endsWith('/v1/oauth2/token')) return Response.json({ access_token: 'token' });
    calls.push(`${init.method || 'GET'} ${u.replace('https://api-m.sandbox.paypal.com', '').split('?')[0]}`);
    if (u.includes('/v1/billing/plans?')) return Response.json({ plans: plans.map(({ id, name, status }) => ({ id, name, status })) });
    if (init.method === 'POST' && u.endsWith('/v1/billing/plans')) {
      assert.equal(init.headers['paypal-request-id'], 'spanishcue-promo-prueba10-099-20261126');
      const body = JSON.parse(init.body);
      assert.equal(body.product_id, 'PROD-TEST'); assert.equal(body.name, pp.PAYPAL_PROMO_PLAN_NAME);
      assert.deepEqual(body.billing_cycles.map(c => [c.tenure_type, c.frequency.interval_unit, c.total_cycles, c.pricing_scheme.fixed_price.value]),
        [['TRIAL', 'DAY', 1, '0.99'], ['REGULAR', 'MONTH', 0, '19.90']]);
      assert.equal(body.billing_cycles[0].frequency.interval_count, 10);
      plans.push(promoPlan());
      return Response.json(promoPlan(), { status: 201 });
    }
    const plan = plans.find(x => u.endsWith(`/v1/billing/plans/${x.id}`));
    return plan ? Response.json(plan) : new Response('{}', { status: 404 });
  };
  try {
    assert.equal(await pp.ensurePaypalPromoPlan(live), NEW_PLAN);
    assert.equal(calls.filter(c => c === 'POST /v1/billing/plans').length, 1);
    // Cached for this isolate: no second creation, no further requests.
    const before = calls.length;
    assert.equal(await pp.ensurePaypalPromoPlan(live), NEW_PLAN);
    assert.equal(calls.length, before);
    assert.equal((await pp.withPaypalPromoPlan(live, NEW_PLAN)).promoPlanId, NEW_PLAN);
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
  await dbm.createPendingSubscription(db, { environment: 'live', userId: 'teacher', paypalSubscriptionId: 'I-PROMO', planId: 'P-3BW31966S0028752HNL6KR5Y', offerCode: config.founderOffer.code });
  assert.equal(await dbm.paypalSubscriptionPlanId(db, 'I-PROMO', 'live'), 'P-3BW31966S0028752HNL6KR5Y');
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

test('the trial mails: onboarding on days 0, 2 and 8 and the reminder 7 days before the charge, once each, never throwing', async () => {
  const { sqlite, db } = await database();
  const old = globalThis.fetch; const sent = [];
  const now = Math.floor(Date.now() / 1000), chargeAt = now + 10 * 86400;
  globalThis.fetch = async (url, init) => { sent.push({ url: String(url), headers: init.headers, body: JSON.parse(init.body) }); return Response.json({ id: 'mail_1' }); };
  try {
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'teacher', provider: 'paddle', subscriptionId: 'sub_promo', chargeAt, startedAt: now }), true);
    assert.deepEqual(sent.map(m => m.headers['idempotency-key']), ['promo-onboarding/dia-0/paddle/sub_promo', 'promo-onboarding/dia-2/paddle/sub_promo', 'promo-onboarding/dia-8/paddle/sub_promo', 'promo-week-reminder/paddle/sub_promo']);
    assert.ok(sent.every(m => m.url === 'https://api.resend.com/emails' && m.body.to[0] === 'teacher@example.test'));
    const at = sent.map(m => Date.parse(m.body.scheduled_at) / 1000);
    assert.equal(at[0], now + 120); assert.equal(at[1], now + 2 * 86400); assert.equal(at[2], now + 8 * 86400);
    assert.equal(at[3], chargeAt - 7 * 86400);
    assert.match(sent[0].body.text, /crea tu primer alumno/); assert.match(sent[0].body.text, /cuenta\?tab=alumnos/);
    assert.match(sent[2].body.text, /US\$19,90 por mes/); assert.match(sent[2].body.text, /cuenta\?tab=suscripcion/);
    assert.match(sent[3].body.text, /US\$19,90 por mes/); assert.match(sent[3].body.text, /US\$19\.90 per month/);
    assert.match(sent[3].body.text, /https:\/\/spanishcue\.com\/cuenta/);
    assert.doesNotMatch(sent.map(m => m.body.text).join(' '), /primera semana|first week/);
    // A 7-day trial on the original terms: the day-8 mail would land after the charge and is skipped.
    sent.length = 0;
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'teacher', provider: 'paypal', subscriptionId: 'I-OLD', chargeAt: now + 7 * 86400, startedAt: now }), true);
    assert.deepEqual(sent.map(m => m.headers['idempotency-key'].split('/')[1]), ['dia-0', 'dia-2', 'paypal']);
    assert.ok(Date.parse(sent[2].body.scheduled_at) / 1000 >= now + 300);
    sent.length = 0;
    assert.equal(await mail.schedulePromoReminder({}, db, { userId: 'teacher', provider: 'paddle', subscriptionId: 'sub_promo', chargeAt }), false);
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'nobody', provider: 'paypal', subscriptionId: 'I-X', chargeAt }), false);
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'teacher', provider: 'paypal', subscriptionId: 'I-X', chargeAt: now - 5 }), false);
    globalThis.fetch = async () => { throw new Error('network'); };
    assert.equal(await mail.schedulePromoReminder({ RESEND_API_KEY: 'key' }, db, { userId: 'teacher', provider: 'paypal', subscriptionId: 'I-X', chargeAt }), false);
    assert.equal(sent.length, 0);
  } finally { globalThis.fetch = old; sqlite.close(); }
});

test('checkout states the renewal next to every promo button and keeps the regular plans', async () => {
  const ui = await readFile('app/acceso/CheckoutButton.tsx', 'utf8');
  assert.match(ui, /checkoutPaddle\("promo"\)/);
  assert.match(ui, /startPayPal\("promo"\)/);
  // Short App Store style notice (owner, 2026-11-18): price now, automatic renewal price, cancel anytime.
  assert.match(ui, /US\$0,99 los primeros 10 días\. Luego se renueva automáticamente a US\$19,90\/mes\. Cancelas cuando quieras\./);
  assert.match(ui, /US\$0\.99 for the first 10 days\. Then renews automatically at US\$19\.90\/month\. Cancel anytime\./);
  assert.doesNotMatch(ui, /PROMO_WEEK_UNTIL/);
  const brand = await readFile('app/SpanishCueBrand.tsx', 'utf8');
  // Clean hero (owner, 2026-11-18, EnglishCue style): one button, one small line with the free lesson as a link.
  assert.match(brand, /PROBAR PRO · US\$0,99 LOS PRIMEROS 10 DÍAS/);
  assert.match(brand, /Luego US\$19,90\/mes · Cancelas cuando quieras · /);
  assert.match(brand, /O prueba una clase gratis/);
  const cta = await readFile('app/marketing/PromoHeroCta.tsx', 'utf8');
  assert.match(cta, /PROBAR PRO · US\$0,99 LOS PRIMEROS 10 DÍAS/);
  for (const landing of ['app/marketing-landing/PaidLanding.tsx', 'app/marketing-landing/MarketingLanding.tsx', 'app/immersive/GoogleTeachersLanding.tsx']) {
    assert.match(await readFile(landing, 'utf8'), /<PromoHeroCta /);
  }
  assert.doesNotMatch(brand, /PROMO_WEEK_UNTIL/);
  assert.match(ui, /promo\.eligible === false\) return null/);
  assert.match(ui, /checkoutPaddle\("monthly"\)/);
  for (const route of ['app/api/billing/paddle/checkout/route.ts', 'app/api/billing/checkout/route.ts']) {
    const source = await readFile(route, 'utf8');
    assert.match(source, /promo_account_required/); assert.match(source, /promoWeekActive\(\)/); assert.match(source, /promoWeekEligible/);
  }
});
