import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

for(const [path,h1,items] of [['/ejercicios-de-imperativo','Ejercicios del imperativo en español',12],['/ejercicios-de-imperativo/tu-negativo','Tú negativo (no hables, no hagas): ejercicios',10],['/ejercicios-de-gustar/gusta-o-gustan','¿Gusta o gustan? Ejercicios',10],['/dudas-del-espanol/haber-o-a-ver','¿Haber o a ver? Ejercicios',8],['/dudas-del-espanol','Dudas frecuentes del español: ¿cuál es la forma correcta?',12],['/ejercicios-de-pronombres/se-lo','Se lo y se la (dos pronombres juntos): ejercicios',8]])test(`exercise page serves indexable Spanish HTML: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelector('h1').textContent,h1);assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 assert.ok([...d.querySelectorAll('script[type="application/ld+json"]')].some(s=>s.textContent.includes('FAQPage')));
 assert.equal(d.querySelectorAll('[role="group"]').length,items);
 assert.ok(d.querySelectorAll('details').length>=items,'every sentence has its solution in the HTML');
});
test('an unknown rule is a 404 and the topic guide links its exercises',async()=>{
 assert.equal((await fetch(origin+'/ejercicios-de-gustar/nope')).status,404);
 const d=new JSDOM(await (await fetch(origin+'/material-ele/imperativo')).text()).window.document;
 assert.ok(d.querySelector('a[href="/ejercicios-de-imperativo"]'));
});
