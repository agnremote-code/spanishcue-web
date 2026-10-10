import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Meta/Zeely landings render the paid template and keep noindex campaign metadata', () => {
  const page = read('app/lp/[slug]/page.tsx');
  assert.match(page, /isPaidLandingSlug\(slug\)\) return <PaidLanding/);
  assert.match(page, /index: false/);
  const copy = read('app/marketing-landing/paid-copy.ts');
  assert.match(copy, /paidLandingSlugs = \['spanish-teacher-resources', 'online-spanish-teaching-resources'\]/);
  assert.match(copy, /titleLead: 'Stop building slides\.'/);
  assert.match(copy, /titleAccent: 'Start teaching experiences\.'/);
});

test('paid landing shows both Paddle plans in hero and plans, with no popup', () => {
  const landing = read('app/marketing-landing/PaidLanding.tsx');
  assert.equal(landing.match(/\{checkout\}/g)?.length, 2);
  assert.match(landing, /<CheckoutButton signedIn=\{signedIn\} returnTo="\/" variant="landing" \/>/);
  assert.doesNotMatch(landing, /dialog|showModal|LandingConversion \{/);
  assert.match(read('scripts/protect-client-assets.mjs'), /"app\/marketing-landing\/PaidLandingTracker\.tsx"/);
  // The mobile CTA is fixed and slides with a transform, so showing it never moves content.
  assert.match(landing, /className="plp-sticky" id="plp-sticky" data-show="false"/);
  assert.match(read('app/marketing-landing/paid-landing.css'), /\.plp-sticky\{position:fixed;[^}]*transform:translateY/);
  assert.match(read('app/marketing-landing/PaidLandingTracker.tsx'), /setAttribute\('data-show'/);
});

test('landing checkout variant puts the trial first, monthly second, PayPal last with honest disclosures', () => {
  const ui = read('app/acceso/CheckoutButton.tsx');
  const landing = ui.slice(ui.indexOf('function landingCheckout'));
  const trial = landing.indexOf('checkoutPaddle("trial")');
  const monthly = landing.indexOf('checkoutPaddle("monthly")');
  const paypal = landing.indexOf('onClick={checkoutPayPal}');
  assert.ok(trial > 0 && trial < monthly && monthly < paypal);
  assert.match(landing, /Then US\$15\.50\/month\. Cancel anytime\. Taxes included\./);
  assert.match(landing, /Card: US\$15\.50 now and every month\. Final price, taxes included\./);
  assert.match(landing, /paypalPriceUsd \?\? 15/);
  assert.match(landing, /Pay first, then link the purchase to your account for PRO access\./);
});

test('product screenshots used by the paid landing ship in public/lp', () => {
  for (const name of ['noche-3d', 'bosque-3d', 'usa-map', 'fabrica', 'hotel', 'autoestudio']) {
    const file = new URL(`../public/lp/${name}.webp`, import.meta.url);
    assert.ok(existsSync(file), name);
    assert.ok(statSync(file).size < 200_000, `${name} stays light`);
  }
});

test('landing scroll stability: one shared founder-status request, stable pending layout, no reload loops', () => {
  const ui = read('app/acceso/CheckoutButton.tsx');
  assert.match(ui, /founderStatusRequest \?\?= fetch\("\/api\/billing\/founder-status"/);
  assert.match(ui, /variant === "landing" && founder === undefined\) return landingCheckout\(null\)/);
  const worker = read('worker/index.ts');
  assert.match(worker, /routedHeaders\.delete\("x-spanishcue-identity-checked"\)/);
  assert.match(worker, /pathname\.startsWith\('\/lp\/'\)\|\|administrative/);
  assert.match(read('app/layout.tsx'), /identityChecked=\{requestHeaders\.get\("x-spanishcue-identity-checked"\) === "1"\}/);
  assert.match(read('app/i18n/LocaleProvider.tsx'), /if \(requested === initialLocale\) \{\n\s+persistLocale\(initialLocale\);\n\s+return;/);
});
