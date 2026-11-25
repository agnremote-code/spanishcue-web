import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

for(const [path,h1,items] of [['/verbos-con-preposicion','Verbos con preposición: lista y ejercicios',12],['/verbos-con-preposicion/so%C3%B1ar-con','¿Soñar con o soñar en?',8],['/verbos-con-preposicion/empezar-a','Empezar a: uso y ejemplos',8],['/verbos-con-preposicion/preposicion-de','Verbos con preposición «de»',12]])test(`preposition page serves indexable Spanish HTML: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelector('h1').textContent,h1);assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 assert.ok(!d.querySelector('meta[name="robots"]')?.content.includes('noindex'));
 assert.ok([...d.querySelectorAll('script[type="application/ld+json"]')].some(s=>s.textContent.includes('FAQPage')));
 const groups=d.querySelectorAll('[role="group"]');assert.equal(groups.length,items);
 for(const g of groups)assert.equal(g.querySelectorAll('button').length,5);
 assert.ok(d.querySelectorAll('details').length>=items,'every sentence keeps its solution without JavaScript');
 assert.ok(d.querySelector('section[aria-label="Newsletter de SpanishCue"] input[type="email"]'));
 if(path.endsWith('-con'))assert.ok(d.querySelector('a[href="/conjugacion/so%C3%B1ar"]'),'links the verb conjugation');
});
test('an unknown preposition page is a 404',async()=>{assert.equal((await fetch(origin+'/verbos-con-preposicion/nope')).status,404);});
