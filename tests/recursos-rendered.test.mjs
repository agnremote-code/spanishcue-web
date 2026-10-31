import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
for(const path of ['/recursos','/recursos/clase-de-gramatica-a1-ser-estar-y-hay-describir-personas-y-lugares','/recursos/actividad-de-conversacion-a0-c2-hospital-san-casi-vivo'])test(`Spanish resource pages are indexable, Spanish-first and paired with English: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.querySelector('link[rel=canonical]')?.getAttribute('href'),'https://spanishcue.com'+path);
 assert.equal(d.querySelector('link[rel=alternate][hreflang=es]')?.getAttribute('href'),'https://spanishcue.com'+path);
 assert.match(d.querySelector('link[rel=alternate][hreflang=en]')?.getAttribute('href')||'',/^https:\/\/spanishcue\.com\/resources/);
 assert.equal(d.querySelectorAll('h1').length,1);
 assert.doesNotMatch(d.querySelector('meta[name=robots]')?.getAttribute('content')||'',/noindex/);
 assert.ok(d.body.textContent.includes('SPANISHCUE'));
 if(path!=='/recursos'){assert.ok(d.querySelector('script[type="application/ld+json"]')?.textContent.includes('LearningResource'));assert.ok(d.body.textContent.includes('Cómo usarla en clase'));}
});
test('an English resource page now links its Spanish twin',async()=>{
 const d=new JSDOM(await (await fetch(origin+'/resources')).text()).window.document;
 assert.equal(d.querySelector('link[rel=alternate][hreflang=es]')?.getAttribute('href'),'https://spanishcue.com/recursos');
});
test('an unknown Spanish resource slug is a 404',async()=>{assert.equal((await fetch(origin+'/recursos/no-existe')).status,404);});
