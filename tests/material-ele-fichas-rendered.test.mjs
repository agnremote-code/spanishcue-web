import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN;
for(const path of ['/material-ele/fichas','/material-ele/ficha/indefinido-e-imperfecto','/material-ele/ficha/clase-inicial'])test(`worksheet page is public, indexable and printable: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 const dom=new JSDOM(await response.text());const d=dom.window.document;
 assert.equal(d.querySelectorAll('h1').length,1);assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 assert.doesNotMatch(d.querySelector('meta[name="robots"]')?.content??'',/noindex/);
 const main=d.querySelector('main');assert.doesNotMatch(main.textContent,/\[\[|\*\*/);
 if(path.includes('/ficha/')){assert.match(main.textContent,/Descargar ficha en PDF/);assert.ok(main.querySelector('#soluciones'));assert.ok(main.querySelectorAll('#ejercicios ol > li').length>=8);}
 dom.window.close();
});
test('unknown worksheet is a 404 and a PRO class has no worksheet',async()=>{
 assert.equal((await fetch(origin+'/material-ele/ficha/no-existe')).status,404);
 assert.equal((await fetch(origin+'/material-ele/ficha/opinion-afirmativa-frente-a-opinion-negada')).status,404);
});
