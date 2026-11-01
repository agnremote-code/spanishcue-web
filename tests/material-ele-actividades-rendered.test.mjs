import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const paths=['/material-ele/actividades','/material-ele/actividad/quien-es-quien','/material-ele/ejercicio/ser-y-estar','/material-ele/preguntas/b1'];
for(const path of paths)test(`activity bank serves indexable, printable Spanish HTML for anonymous visitors: ${path}`,async()=>{
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
 if(path!=='/material-ele/actividades')assert.match(d.querySelector('main').textContent,/Descargar ficha en PDF/);
 assert.ok(d.querySelector('a[href="/material-ele"]'),'links the hub');
 dom.window.close();
});
test('unknown bank slugs are 404s',async()=>{
 for(const path of ['/material-ele/actividad/no-existe','/material-ele/ejercicio/no-existe','/material-ele/preguntas/z9'])assert.equal((await fetch(origin+path)).status,404,path);
});
