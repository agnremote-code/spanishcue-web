import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

for(const [path,h1] of [['/conjugacion','Conjugación de verbos en español'],['/conjugacion/tener','Conjugación del verbo tener'],['/conjugacion/oir','Conjugación del verbo oír'],['/conjugacion/so%C3%B1ar','Conjugación del verbo soñar'],['/conjugacion/hablar','Conjugación del verbo hablar']])test(`conjugation page serves indexable Spanish HTML: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelector('h1').textContent,h1);assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 assert.ok(!d.querySelector('meta[name="robots"]')?.content.includes('noindex'));
 assert.ok(d.querySelector('script[type="application/ld+json"]'));
 assert.ok(d.querySelector('form[action="/buscar-verbo"] input[name="v"]'));
 if(path!=='/conjugacion'){
  assert.equal(d.querySelectorAll('[id="ejercicio"] input[type="text"]').length,12);
  assert.ok(d.querySelectorAll('table').length>=16,'every tense has its table');
 }else assert.ok(d.querySelectorAll('a[href^="/conjugacion/"]').length>=1200);
});
test('tener marks its irregular forms and links its compounds',async()=>{
 const html=await (await fetch(origin+'/conjugacion/tener')).text();
 const d=new JSDOM(html).window.document;
 const marked=[...d.querySelectorAll('td[class]')].map(td=>td.textContent);
 assert.ok(marked.includes('tengo')&&marked.includes('tuve')&&marked.includes('tendré'));
 assert.ok(!marked.includes('tenemos'));
 assert.ok(d.querySelector('a[href="/conjugacion/mantener"]'));
});
test('an unknown verb is a 404 and the search box redirects',async()=>{
 assert.equal((await fetch(origin+'/conjugacion/xyzar')).status,404);
 const found=await fetch(origin+'/buscar-verbo?v=Tener',{redirect:'manual'});
 assert.equal(found.status,302);assert.equal(new URL(found.headers.get('location')).pathname,'/conjugacion/tener');
 const missing=await fetch(origin+'/buscar-verbo?v=zzz',{redirect:'manual'});
 assert.equal(new URL(missing.headers.get('location')).pathname,'/conjugacion');
});
