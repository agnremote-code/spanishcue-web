import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/private-lessons/oscar/page.tsx', import.meta.url), 'utf8');
const seo = readFileSync(new URL('../app/seo.ts', import.meta.url), 'utf8');

test('private lesson offer has the agreed 4 × 30 USD package', () => {
  assert.match(page, /4 private lessons/);
  assert.match(page, /\$30 per lesson/);
  assert.match(page, /\$120/);
  assert.match(page, /One-time payment/);
});

test('private offer requires invite and trusted PayPal checkout', () => {
  assert.match(page, /matchesInvite\(invite, configuration\.PRIVATE_LESSONS_OSCAR_INVITE_TOKEN\)/);
  assert.match(page, /notFound\(\)/);
  assert.match(page, /url\.protocol !== "https:"/);
  assert.match(page, /paypal\.com/);
  assert.match(page, /paypal\.me/);
  assert.match(page, /rel="noopener noreferrer"/);
  assert.match(page, /Payment link being prepared/);
});

test('private offer does not falsely grant homework or PRO entitlement', () => {
  assert.match(page, /after payment is confirmed/i);
  assert.match(page, /does not automatically activate an account/i);
  assert.doesNotMatch(page, /fetch\(/);
});

test('SEO controls apply noindex to private lesson pages', () => {
  assert.match(page, /index: false/);
  assert.match(page, /follow: false/);
  assert.match(seo, /path\.startsWith\("\/private-lessons\/"\)/);
});
