import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
const built = await build({ stdin: { contents: 'export * from "./app/marketing-landing/offer-policy"', resolveDir: process.cwd() }, bundle: true, write: false, format: 'esm', platform: 'node' });
const { isFounderStatus, liveFounderOffer, shouldShowOffer } = await import(`data:text/javascript;base64,${Buffer.from(built.outputFiles[0].text).toString('base64')}`);
const live = { mode:'live', checkoutLive:true, enabled:true, available:true, remaining:42, limit:1000, priceUsd:15 };
test('commercial offer requires confirmed live billing and real valid availability', () => {
 assert.equal(liveFounderOffer(live), true);
 for (const invalid of [null, {}, {...live,mode:'sandbox'}, {...live,checkoutLive:false}, {...live,remaining:0}, {...live,remaining:1001}, {...live,remaining:-1}, {...live,enabled:false}, {...live,available:false}, {...live,remaining:'42'}, {...live,priceUsd:20}]) assert.equal(liveFounderOffer(invalid), false);
});
test('modal waits for engagement and suppresses pro, converted and seen sessions', () => {
 const state = { live:true, pro:false, seen:false, converted:false, engagedMs:0, scroll:0, exit:false };
 assert.equal(shouldShowOffer(state),false);
 for (const trigger of [{engagedMs:30000},{scroll:.5,engagedMs:3000},{exit:true,engagedMs:5000}]) assert.equal(shouldShowOffer({...state,...trigger}),true);
 for (const guard of [{pro:true},{seen:true},{converted:true},{live:false}]) assert.equal(shouldShowOffer({...state,engagedMs:30000,...guard}),false);
 assert.equal(shouldShowOffer({...state,exit:true}),false);
});

test("sold-out live status remains distinguishable from launch and failed status", () => {
 assert.equal(isFounderStatus({...live, remaining:0, available:false}),true);
 assert.equal(isFounderStatus({...live, mode:"sandbox"}),true);
 assert.equal(isFounderStatus(null),false);
 assert.equal(isFounderStatus({enabled:false,available:false}),false);
});

test('signup suppression persists even when analytics consent is declined', async () => {
 const analyticsBuild = await build({ stdin: { contents: 'export * from "./app/marketing/analytics"', resolveDir: process.cwd() }, bundle:true, write:false, format:'esm', platform:'node' });
 const analytics = await import(`data:text/javascript;base64,${Buffer.from(analyticsBuild.outputFiles[0].text).toString('base64')}`);
 const previousWindow = globalThis.window;
 const previousDocument = globalThis.document;
 const entries = new Map();
 globalThis.window = {sessionStorage:{setItem:(key,value)=>entries.set(key,value)}};
 globalThis.document = {cookie:''};
 try {
  analytics.trackMarketingEvent('signup_complete');
  assert.equal(entries.get('spanishcue.founder-modal.converted'),'1');
  assert.equal(globalThis.window.dataLayer,undefined);
 } finally { globalThis.window=previousWindow; globalThis.document=previousDocument; }
});
