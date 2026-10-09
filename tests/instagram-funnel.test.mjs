import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { contentFor } from '../app/noche-abierta/levels.mjs';
const policy = await import('../app/immersive/policy.mjs').catch(() => ({}));
const data = await import('../app/immersive/demo-content.mjs').catch(() => ({}));

test('demo server selector rejects every non-centre district, including query tricks', () => {
  assert.equal(typeof data.demoContent, 'function');
  for (const district of ['alto', 'viejo', '*', '../', 'centro/../alto', '', null]) assert.equal(data.demoContent('A1', district), null);
});
test('complete centre retains actual authored activities at all six levels only', () => {
  assert.equal(typeof data.demoContent, 'function');
  for (const level of ['A1','A2','B1','B2','C1','C2']) {
    const payload = data.demoContent(level, 'centro');
    assert.equal(payload.level, level);
    assert.equal(payload.locations.length, 10);
    assert.deepEqual(payload.locations, contentFor(level).LOCATIONS);
    assert.deepEqual(Object.keys(payload).sort(), ['level','locations','zone']);
  }
  assert.equal(data.demoContent('PRO','centro').level, 'A1');
});
test('district approach gates never interrupt activity and do not trap returning players', () => {
  assert.equal(typeof policy.nearPremiumGate, 'function');
  assert.ok(policy.nearPremiumGate({x:0,z:-37}, false));
  assert.equal(policy.nearPremiumGate({x:0,z:-37}, true), null);
  assert.equal(policy.nearPremiumGate({x:0,z:0}, false), null);
});
test('A/B entry preserves UTMs and locale without accepting an external destination', () => {
  assert.equal(typeof policy.experimentDestination, 'function');
  const a = new URL(policy.experimentDestination(new URL('https://spanishcue.com/lp/instagram-test?utm_source=instagram&lang=es&returnTo=https://evil.test'), 'a'), 'https://spanishcue.com');
  assert.equal(a.pathname, '/lp/spanish-teacher-resources');
  assert.equal(a.searchParams.get('utm_source'), 'instagram');
  assert.equal(a.searchParams.get('lang'), 'es');
  assert.equal(a.searchParams.get('sc_variant'), 'a');
  assert.equal(a.searchParams.has('returnTo'), false);
  assert.match(policy.experimentDestination(new URL('https://spanishcue.com/lp/instagram-test'), 'b'), /^\/lp\/instagram\?/);
});
test('public geometry bundle has no premium dialogue content', async () => {
  const result = await build({stdin:{contents:'export {buildCity} from "./app/noche-abierta/build3d"; export {stepPlayer} from "./app/noche-abierta/world3d.mjs";',resolveDir:process.cwd()},bundle:true,format:'esm',write:false,treeShaking:true});
  const text = result.outputFiles[0].text;
  assert.ok(!text.includes('PEDAGOGY_TEACHER_MOVES'));
  assert.ok(!text.includes('Ahora habla de ti'));
});

import {JSDOM} from 'jsdom';
test('analytics respects consent and emits verified_purchase only with verified first-paid revenue', async () => {
  const bundle = await build({entryPoints:['app/marketing/analytics.ts'],bundle:true,platform:'node',format:'esm',write:false});
  const analytics = await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
  const dom = new JSDOM('',{url:'https://spanishcue.com/lp/instagram?sc_exp=instagram-city-v1&sc_variant=b&utm_source=instagram'});
  globalThis.window=dom.window;globalThis.document=dom.window.document;globalThis.CustomEvent=dom.window.CustomEvent;
  try {
    analytics.trackMarketingEvent('demo_start');
    assert.equal(window.dataLayer,undefined);
    document.cookie='spanishcue-consent-v1='+encodeURIComponent(JSON.stringify({version:1,decided:true,preferences:false,analytics:true,marketing:false,updatedAt:new Date().toISOString()}));
    analytics.trackMarketingEvent('demo_start');
    assert.equal(window.dataLayer.at(-1).experiment_id,'instagram-city-v1');
    assert.equal(window.dataLayer.at(-1).variant,'b');
    assert.equal(window.localStorage.length,0,'UTMs cannot persist without marketing consent');
    analytics.trackMarketingEvent('checkout_start');
    assert.ok(!window.dataLayer.some(x=>x.event==='verified_purchase'));
    analytics.trackMarketingEvent('subscription_first_paid',{transaction_id:'txn_verified',value:2,currency:'USD'});
    assert.equal(window.dataLayer.filter(x=>x.event==='verified_purchase').length,1);
    analytics.trackMarketingEvent('subscription_first_paid',{transaction_id:'txn_missing_revenue'});
    assert.equal(window.dataLayer.filter(x=>x.event==='verified_purchase').length,1);
  } finally { dom.window.close();delete globalThis.window;delete globalThis.document;delete globalThis.CustomEvent; }
});
