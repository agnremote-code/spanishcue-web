import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

for(const [path,h1,items] of [['/por-o-para','¿Por o para? Usos y ejercicios',12],['/por-o-para/causa','Causa o motivo: ¿por o para?',8],['/por-o-para/plazo','Plazo o fecha límite: ¿por o para?',8]])test(`por o para page serves Spanish HTML with the right robots rule: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelector('h1').textContent,h1);assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 // Lote N3 of the SEO plan: one page per rule stays available but out of the index; the hub stays indexable.
 if(path!=='/por-o-para'){assert.match(d.querySelector('meta[name="robots"]').content,/noindex/);assert.equal(response.headers.get('x-robots-tag'),'noindex, follow');}
 else{assert.ok(!d.querySelector('meta[name="robots"]')?.content.includes('noindex'));assert.equal(response.headers.get('x-robots-tag'),null);}
 assert.ok([...d.querySelectorAll('script[type="application/ld+json"]')].some(s=>s.textContent.includes('FAQPage')));
 const groups=d.querySelectorAll('[role="group"]');assert.equal(groups.length,items);
 for(const g of groups)assert.equal(g.querySelectorAll('button').length,2);
 if(path==='/por-o-para')assert.ok(d.querySelectorAll('a[href^="/por-o-para/"]').length>=15);
});
test('an unknown use is a 404 and the topic guides link their mini-app family',async()=>{
 assert.equal((await fetch(origin+'/por-o-para/nope')).status,404);
 for(const [guide,href] of [['/material-ele/por-y-para','/por-o-para'],['/material-ele/ser-y-estar','/ser-o-estar']]){
  const d=new JSDOM(await (await fetch(origin+guide)).text()).window.document;
  assert.ok(d.querySelector(`#practica a[href="${href}"], section a[href="${href}"]`),guide);
 }
});
