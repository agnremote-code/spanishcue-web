import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (path) => existsSync(path) ? readFileSync(path, 'utf8') : '';

test('homepage publishes visible Organization data and a visible brand-kit link, never hidden text', () => {
  assert.match(read('app/page.tsx'), /<SiteSchema\s*\/>/);
  const schema = read('app/growth/SiteSchema.tsx');
  assert.match(schema, /application\/ld\+json/);
  assert.match(schema, /"Organization"/);
  assert.match(schema, /"WebSite"/);
  assert.doesNotMatch(schema, /hidden|display:\s*['"]none/);
  assert.doesNotMatch(schema, /use client/);
  assert.ok(!existsSync('app/zeely/ZeelyDiscovery.tsx'), 'the hidden brand-kit block must stay removed from the homepage');
  // Scrapers and people reach the kit through the footer link on every page.
  assert.match(read('app/SpanishCueBrand.tsx'), /href="\/zeely"/);
});

test('kit remains crawlable but outside search and sitemap', () => {
  assert.match(read('app/zeely/page.tsx'), /index: false/);
  assert.doesNotMatch(read('app/sitemap.ts'), /["']\/zeely/);
  assert.doesNotMatch(read('app/robots.ts'), /["']\/zeely/);
});

test('marketing assets never depend on private lessons or user data', () => {
  const files = ['app/growth/SiteSchema.tsx', 'app/zeely/page.tsx', 'app/zeely/BrandKit.tsx'];
  for (const path of files) {
    const source = read(path);
    assert.ok(source.length, `${path} exists`);
    assert.doesNotMatch(source, /lesson-catalog|conversation-families|firebase|db\/|process\.env|api\/billing/);
  }
  const kit = JSON.parse(read('public/brand/ads/manifest.json') || '{}');
  assert.equal(kit.origin, 'https://spanishcue.com');
  assert.ok(kit.assets?.length >= 20);
  assert.ok(kit.assets.some(a => a.kind === 'screenshot'));
  assert.ok(kit.assets.some(a => a.kind === 'ad'));
  assert.equal(kit.pricing.monthly.amount, 15.5);
  assert.equal(kit.pricing.paidTrial.amount, 2);
  assert.equal(kit.pricing.paidTrial.days, 1);
  for (const asset of kit.assets) {
    assert.ok(asset.path.startsWith('/brand/') || asset.path.startsWith('/social/'));
    assert.doesNotMatch(asset.path, /\/pro\/|\/api\/|premium/);
  }
});
