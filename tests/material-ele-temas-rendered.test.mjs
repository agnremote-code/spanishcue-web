import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const paths=['/material-ele/gramatica','/material-ele/vocabulario','/material-ele/funciones','/material-ele/cultura','/material-ele/gramatica/presente-de-indicativo','/material-ele/gramatica/ser-y-estar','/material-ele/gramatica/presente-de-subjuntivo','/material-ele/vocabulario/comida-y-restaurante','/material-ele/funciones/dar-consejos-y-recomendaciones','/material-ele/cultura/argentina','/material-ele/gramatica/presente-de-indicativo/a1','/material-ele/gramatica/presente-de-subjuntivo/b1','/material-ele/vocabulario/comida-y-restaurante/a2','/material-ele/funciones/narrar/b1'];
for(const path of paths)test(`topic index serves indexable Spanish HTML for anonymous visitors: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const dom=new JSDOM(await response.text());const d=dom.window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 assert.doesNotMatch(d.querySelector('meta[name="robots"]')?.content||'',/noindex/);
 const schemas=[...d.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent));
 for(const type of ['BreadcrumbList','FAQPage'])assert.ok(schemas.some(s=>s['@type']===type),type);
 assert.ok(schemas.some(s=>['WebPage','CollectionPage'].includes(s['@type'])&&s.inLanguage==='es'));
 assert.ok(d.querySelector('a[href="/pricing"]'),'buy link');
 assert.match(d.querySelector('main').textContent,/US\$15,50 al mes/);
 assert.ok(d.querySelector('a[href="/material-ele"]'),'links the hub');
 if(path.split('/').length>=4)assert.ok(d.querySelectorAll('main a[href^="/"]').length>=12,'topic page links its classes and related topics');
 if(path.split('/').length>=4)assert.match(d.querySelector('main').textContent,/Compartir en tu aula virtual/);
 dom.window.close();
});
test('unknown topic group and topic are 404s',async()=>{
 assert.equal((await fetch(origin+'/material-ele/gramatica/no-existe')).status,404);
 assert.equal((await fetch(origin+'/material-ele/no-existe/presente-de-indicativo')).status,404);
 assert.equal((await fetch(origin+'/material-ele/gramatica/presente-de-indicativo/z9')).status,404);
 assert.equal((await fetch(origin+'/material-ele/vocabulario/familia/c9')).status,404);
});
