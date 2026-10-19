import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('purchase landings render the paid template and use indexable metadata while other campaigns stay noindex', () => {
  const page = read('app/lp/[slug]/page.tsx');
  assert.match(page, /isPaidLandingSlug\(slug\)\) return <PaidLanding/);
  assert.match(page, /index: isPaidLandingSlug\(slug\)/);
  assert.match(page, /if \(isPaidLandingSlug\(slug\)\) return <PaidLanding/);
  const copy = read('app/marketing-landing/paid-copy.ts');
  assert.match(copy, /paidLandingSlugs = \['spanish-teacher-resources', 'online-spanish-teaching-resources'\]/);
  assert.match(copy, /titleLead: 'Stop building slides\.'/);
  assert.match(copy, /titleAccent: 'Start teaching experiences\.'/);
});

test('paid landing shows the monthly PRO checkout in hero and plans, with no popup', () => {
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

test('monthly checkout appears first and PayPal second without a paid trial upsell', () => {
  const ui = read('app/acceso/CheckoutButton.tsx');
  const landing = ui.slice(ui.indexOf('function landingCheckout'));
  const monthly = landing.indexOf('checkoutPaddle("monthly")');
  const paypal = landing.indexOf('onClick={checkoutPayPal}');
  assert.ok(monthly > 0 && monthly < paypal);
  assert.doesNotMatch(landing, /checkoutPaddle\("trial"\)|US\$2|Try 1 day/);
  assert.match(landing, /Card: US\$15\.50 now and every month\. Final price, taxes included\./);
  assert.match(landing, /paypalPriceUsd \?\? 15/);
  assert.match(landing, /Pay first, then link the purchase to your account for PRO access\./);
  const paid = read('app/marketing-landing/PaidLanding.tsx');
  assert.match(paid, /const freeLesson = '\/demo\/noche-abierta'/);
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
