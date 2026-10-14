import assert from 'node:assert/strict';
import test from 'node:test';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const PUBLIC='public, max-age=0, must-revalidate';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function fetchHit(path){
 for(let attempt=0;attempt<5;attempt++){const response=await fetch(origin+path);if(response.headers.get('x-spanishcue-cache')==='HIT')return response;await response.arrayBuffer();await sleep(150);}
 return fetch(origin+path);
}
test('anonymous organic HTML is edge-cacheable, byte-identical on a hit and never sets cookies',async()=>{
 for(const path of ['/spanish-grammar-lessons','/spanish-grammar-lessons/conditional-tense-activities','/guides/spanish-imperative-activities','/spanish-conversation-activities/b1','/spanish-teacher-resources','/about','/resources']){
  const first=await fetch(origin+path);assert.equal(first.status,200,path);
  assert.equal(first.headers.get('cache-control'),PUBLIC,path);assert.ok(!first.headers.has('set-cookie'),path);
  assert.ok(['MISS','HIT'].includes(first.headers.get('x-spanishcue-cache')),path);
  const firstBody=await first.text();assert.match(firstBody,/<html lang="en"/,path);
  const second=await fetchHit(path);assert.equal(second.headers.get('x-spanishcue-cache'),'HIT',path);
  assert.equal(second.headers.get('cache-control'),PUBLIC,path);assert.equal(second.headers.get('content-language'),'en',path);
  assert.equal(await second.text(),firstBody,`${path}: a cache hit must serve the same anonymous HTML`);
 }
});
test('any visitor state bypasses the public cache in both directions',async()=>{
 const path='/spanish-grammar-lessons/a1';
 const localized=await fetch(origin+path,{headers:{cookie:'spanishcue_locale=es'}});
 assert.equal(localized.headers.get('cache-control'),'private, no-store');assert.equal(localized.headers.get('x-spanishcue-cache'),null);
 assert.match(await localized.text(),/<html lang="es"/);
 const anonymous=await fetchHit(path);assert.equal(anonymous.headers.get('cache-control'),PUBLIC);
 assert.match(await anonymous.text(),/<html lang="en"/,'a localized render must never be stored under the anonymous key');
 const toggled=await fetch(origin+path+'?lang=es',{redirect:'manual'});assert.equal(toggled.status,301,'a legacy ?lang= URL redirects to the clean URL');assert.equal(toggled.headers.get('location'),origin+path);assert.equal(toggled.headers.get('cache-control'),'private, no-store');assert.match(toggled.headers.get('set-cookie')||'',/spanishcue_locale=es/);await toggled.arrayBuffer();
 const toggledWithAds=await fetch(origin+path+'?lang=en&utm_source=qa',{redirect:'manual'});assert.equal(toggledWithAds.status,301);assert.equal(toggledWithAds.headers.get('location'),origin+path+'?utm_source=qa','only the lang parameter is dropped');await toggledWithAds.arrayBuffer();
 const campaign=await fetch(origin+'/lp/spanish-grammar-lessons?lang=es',{redirect:'manual'});assert.equal(campaign.status,200,'campaign landings keep ?lang= (noindex anyway)');assert.match(campaign.headers.get('set-cookie')||'',/spanishcue_locale=es/);assert.equal(campaign.headers.get('cache-control'),'private, no-store');await campaign.arrayBuffer();
 const attributed=await fetch(origin+path+'?utm_source=qa&gclid=qa');assert.equal(attributed.headers.get('cache-control'),'private, no-store');await attributed.arrayBuffer();
 const navigation=await fetch(origin+path,{headers:{rsc:'1'}});assert.equal(navigation.headers.get('cache-control'),'private, no-store');await navigation.arrayBuffer();
 const session=await fetch(origin+path,{headers:{authorization:'Bearer qa'}});assert.equal(session.headers.get('cache-control'),'private, no-store');await session.arrayBuffer();
 const head=await fetch(origin+path,{method:'HEAD'});assert.equal(head.headers.get('cache-control'),'private, no-store');
});
test('identity-aware and private surfaces stay private, no-store even for anonymous requests',async()=>{
 for(const path of ['/','/pricing','/la-fabrica-de-los-nombres','/lp/spanish-grammar-lessons','/sistema-verbal','/free-spanish-lesson']){
  const response=await fetch(origin+path);assert.equal(response.status,200,path);
  assert.equal(response.headers.get('cache-control'),'private, no-store',path);assert.equal(response.headers.get('x-spanishcue-cache'),null,path);await response.arrayBuffer();
 }
 for(const path of ['/cuenta','/noche-abierta']){
  const response=await fetch(origin+path,{redirect:'manual'});assert.ok([302,307].includes(response.status),`${path}: ${response.status}`);
  assert.equal(response.headers.get('cache-control'),'private, no-store',path);await response.arrayBuffer();
 }
 const session=await fetch(origin+'/api/auth/session');assert.equal(session.headers.get('cache-control'),'private, no-store');await session.arrayBuffer();
});
