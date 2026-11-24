import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';

const load = async (contents) => {
  const built = await build({ stdin: { contents, resolveDir: process.cwd() }, bundle: true, write: false, format: 'esm', platform: 'node' });
  return import(`data:text/javascript;base64,${Buffer.from(built.outputFiles[0].text).toString('base64')}`);
};
const p = await load('export * from "./app/paddle-server"; export * from "./app/paddle-config"; export * from "./app/promo-config";');

const monthly = 'pri_01m6k17xns79tsteephk45n7qq', trialId = 'pri_01m3xv2ybze2yve1phknvm3r4b';
const cfg = { apiKey: 'test', clientToken: 'test', webhookSecret: 'test', priceId: monthly, trialPriceId: trialId, annualPriceId: 'pri_01m6k19ak3sep13j06ysgrxzp7' };
const offerPrice = () => ({ ...p.paddleDiscount10Price(), id: 'pri_01discount10noncatalog0000' });
const pair = (first = true) => {
  const period = first ? { starts_at: '2026-11-24T00:00:00Z', ends_at: '2026-12-24T00:00:00Z' } : { starts_at: '2026-12-24T00:00:00Z', ends_at: '2027-01-24T00:00:00Z' };
  const common = { customer_id: 'ctm_teacher', custom_data: { spanishcue_user_id: 'teacher' }, items: [{ quantity: 1, price: offerPrice() }] };
  return [
    { ...structuredClone(common), id: 'txn_d10', status: 'completed', subscription_id: 'sub_d10', currency_code: 'USD', billing_period: period, details: { totals: { total: first ? '1791' : '1990' } } },
    { ...common, id: 'sub_d10', status: first ? 'trialing' : 'active', current_billing_period: period },
  ];
};

test('the 10% offer is US$17.91 for the first month, then the regular US$19.90', () => {
  assert.equal(p.DISCOUNT_10_CENTS, 1791);
  assert.equal(p.DISCOUNT_10_THEN_CENTS, 1990);
  assert.equal(Math.round(1990 * 0.9), 1791);
  assert.equal(p.isTrialCharge(1791), true);
  // The pinned catalog prices are untouched.
  assert.equal(p.PADDLE_MONTHLY_PRICE_ID, monthly);
  assert.equal(p.PADDLE_MONTHLY_CENTS, 1990);
  assert.equal(p.PADDLE_ANNUAL_CENTS, 15000);
});

test('Paddle: the 10% checkout sends a non-catalog price of the PRO product and no referral', async () => {
  const old = globalThis.fetch; const seen = [];
  globalThis.fetch = async (_url, init) => { seen.push(JSON.parse(init.body)); return Response.json({ data: { id: 'txn_test' } }); };
  try { await p.createPaddleCheckoutTransaction(cfg, { userId: 'teacher', offerCode: 'founder', offer: 'discount10' }); }
  finally { globalThis.fetch = old; }
  const [body] = seen;
  assert.equal(body.items[0].price_id, undefined);
  assert.equal(body.items[0].price.product_id, p.PADDLE_PRODUCT_ID);
  assert.deepEqual(body.items[0].price.unit_price, { amount: '1990', currency_code: 'USD' });
  assert.deepEqual(body.items[0].price.trial_period, { interval: 'month', frequency: 1, requires_payment_method: true, unit_price: { amount: '1791', currency_code: 'USD' } });
  assert.equal(body.items[0].price.tax_mode, 'internal');
  assert.equal(body.custom_data.spanishcue_checkout_offer, 'discount10');
});

test('Paddle: the discounted month grants one month and renewals bill US$19.90', () => {
  const [tx, sub] = pair(true);
  assert.equal(p.paddleOffer(tx, cfg), 'discount10');
  assert.ok(p.validatePaddleTransaction(tx, cfg, 'teacher'));
  assert.ok(p.validatePaddleSubscription(sub, cfg, 'teacher'));
  const first = p.paddleCompletedPayment(tx, sub, cfg);
  assert.equal(first.amountCents, 1791); assert.equal(first.isTrial, true); assert.equal(first.offer, 'discount10');
  assert.equal(first.paidThrough - first.paidAt, 30 * 86400);
  const [nextTx, nextSub] = pair(false);
  const next = p.paddleCompletedPayment(nextTx, nextSub, cfg);
  assert.equal(next.amountCents, 1990); assert.equal(next.isTrial, false);
});

test('Paddle: other terms, amounts or catalog IDs are not the 10% offer', () => {
  for (const edit of [x => x.trial_period.unit_price.amount = '0', x => x.trial_period.unit_price.amount = '990', x => x.trial_period.frequency = 3,
    x => x.trial_period.interval = 'year', x => x.trial_period.requires_payment_method = false, x => x.unit_price.amount = '1791',
    x => x.product_id = 'pro_other', x => x.tax_mode = 'external', x => x.id = monthly, x => x.id = trialId, x => x.id = undefined]) {
    const [tx, sub] = pair(true); edit(tx.items[0].price);
    assert.equal(p.paddleOffer(tx, cfg) === 'discount10', false);
    assert.equal(p.paddleCompletedPayment(tx, sub, cfg), null);
  }
  for (const edit of [tx => tx.details.totals.total = '99', tx => tx.details.totals.total = '0', tx => tx.billing_period.ends_at = '2026-12-01T00:00:00Z']) {
    const [tx, sub] = pair(true); edit(tx);
    assert.equal(p.paddleCompletedPayment(tx, sub, cfg), null);
  }
});

test('checkout route: the 10% offer needs an account and never stacks with a referral', async () => {
  const route = await readFile('app/api/billing/paddle/checkout/route.ts', 'utf8');
  assert.match(route, /offer === "discount10" && !userId/);
  assert.match(route, /offer === "promo" \|\| offer === "discount10" \? null : referralCode/);
});

test('card: hidden while the better US$0.99 week is open to the teacher, and for PRO accounts', async () => {
  const { discount10Visible: visible } = await load('export { discount10Visible } from "./app/discount-offer";');
  const base = { available: true, discount10: { cardAvailable: true, eligible: true }, promoWeek: { available: false, eligible: true } };
  assert.equal(visible(base), true);
  assert.equal(visible({ ...base, promoWeek: { available: true, eligible: true } }), false);
  assert.equal(visible({ ...base, promoWeek: { available: true, eligible: false } }), true);
  assert.equal(visible({ ...base, discount10: { cardAvailable: true, eligible: false } }), false);
  assert.equal(visible({ ...base, discount10: { cardAvailable: false, eligible: true } }), false);
  assert.equal(visible(null), false);
  // The owner sees it in the FREE preview of the library.
  assert.equal(visible({ ...base, discount10: { cardAvailable: true, eligible: false } }, true), true);
});
