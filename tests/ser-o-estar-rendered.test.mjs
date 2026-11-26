import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

for(const [path,h1,items] of [['/ser-o-estar','¿Ser o estar? Usos y ejercicios',12],['/ser-o-estar/ubicacion','Ubicación: ¿ser o estar?',8],['/ser-o-estar/listo','¿Ser listo o estar listo?',6]])test(`ser o estar page serves Spanish HTML with the right robots rule: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelector('h1').textContent,h1);assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 // Lote N3 of the SEO plan: one page per rule stays available but out of the index; the hub stays indexable.
 if(path!=='/ser-o-estar'){assert.match(d.querySelector('meta[name="robots"]').content,/noindex/);assert.equal(response.headers.get('x-robots-tag'),'noindex, follow');}
 else{assert.ok(!d.querySelector('meta[name="robots"]')?.content.includes('noindex'));assert.equal(response.headers.get('x-robots-tag'),null);}
 assert.ok([...d.querySelectorAll('script[type="application/ld+json"]')].some(s=>s.textContent.includes('FAQPage')));
 const groups=d.querySelectorAll('[role="group"]');assert.equal(groups.length,items);
 for(const g of groups)assert.equal(g.querySelectorAll('button').length,2);
 assert.ok(d.querySelector('section[aria-label="Newsletter de SpanishCue"] input[type="email"]'));
 if(path==='/ser-o-estar')assert.ok(d.querySelectorAll('a[href^="/ser-o-estar/"]').length>=33);
});
test('an unknown slug is a 404 and the ser and estar verb pages link the family',async()=>{
 assert.equal((await fetch(origin+'/ser-o-estar/nope')).status,404);
 for(const verb of ['ser','estar']){
  const d=new JSDOM(await (await fetch(origin+'/conjugacion/'+verb)).text()).window.document;
  assert.ok(d.querySelector('a[href="/ser-o-estar/listo"]'),verb);
 }
});
