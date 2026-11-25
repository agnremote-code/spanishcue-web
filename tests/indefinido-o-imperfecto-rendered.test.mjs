import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

for(const [path,h1,items] of [['/indefinido-o-imperfecto','¿Indefinido o imperfecto? Ejercicios por marcador',12],['/indefinido-o-imperfecto/mientras','Mientras: ¿indefinido o imperfecto?',6],['/indefinido-o-imperfecto/siempre','Siempre: ¿indefinido o imperfecto?',6]])test(`marker page serves indexable Spanish HTML: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelector('h1').textContent,h1);assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 assert.ok([...d.querySelectorAll('script[type="application/ld+json"]')].some(s=>s.textContent.includes('FAQPage')));
 const groups=d.querySelectorAll('[role="group"]');assert.equal(groups.length,items);
 for(const g of groups)assert.equal(g.querySelectorAll('button').length,2);
 assert.ok(d.querySelector('section[aria-label="Newsletter de SpanishCue"] input[type="email"]'));
 if(path==='/indefinido-o-imperfecto')assert.ok(d.querySelectorAll('a[href^="/indefinido-o-imperfecto/"]').length>=26);
});
test('an unknown marker is a 404 and the indefinido tense page links the markers',async()=>{
 assert.equal((await fetch(origin+'/indefinido-o-imperfecto/nope')).status,404);
 const d=new JSDOM(await (await fetch(origin+'/conjugacion/irregulares/indefinido')).text()).window.document;
 assert.ok(d.querySelector('a[href="/indefinido-o-imperfecto/de-repente"]'));
});
