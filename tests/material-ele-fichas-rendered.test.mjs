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
test('unknown worksheet is a 404',async()=>{assert.equal((await fetch(origin+'/material-ele/ficha/no-existe')).status,404);});
test('a PRO class worksheet is an anonymous sample: five exercises, no writing, no conversation, link to the class',async()=>{
 const response=await fetch(origin+'/material-ele/ficha/opinion-afirmativa-frente-a-opinion-negada');assert.equal(response.status,200);
 const dom=new JSDOM(await response.text());const main=dom.window.document.querySelector('main');
 const items=main.querySelectorAll('#ejercicios ol > li').length;assert.ok(items>=3&&items<=5,`${items} exercises`);
 assert.ok(!main.querySelector('#usar'));assert.ok(!main.querySelector('#errores'));assert.ok(main.querySelector('#clase-completa'));
 assert.match(main.textContent,/Ficha ELE de muestra/);
 dom.window.close();
});
for(const path of ['/material-ele/fichas-gratis','/material-ele/fichas-gratis/presente-de-indicativo','/material-ele/fichas-gratis/pack-b1'])test(`free worksheets section is complete and has nothing that leads to a payment: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 const dom=new JSDOM(await response.text());const d=dom.window.document;
 assert.equal(d.querySelectorAll('h1').length,1);assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 assert.doesNotMatch(d.querySelector('meta[name="robots"]')?.content??'',/noindex/);
 const main=d.querySelector('main');const text=main.textContent;
 assert.doesNotMatch(text,/\[\[|\*\*/);
 assert.doesNotMatch(text,/US\$|€|Suscribirse|\bPRO\b|Founder|muestra con/);
 assert.match(text,/gratis/i);
 for(const a of d.querySelectorAll('a[href]')){const href=a.getAttribute('href');assert.ok(href.startsWith('#')||href.startsWith('/material-ele/fichas-gratis'),`${path} links only inside the free section: ${href}`);}
 if(path.endsWith('/fichas-gratis'))assert.match(text,/100 % gratuita/);
 else{assert.match(text,/Descargar/);assert.ok(main.querySelectorAll('ol li').length>=8);assert.ok(main.querySelector('[id$="soluciones"]'));}
 if(path.endsWith('/presente-de-indicativo')){assert.ok(main.querySelector('#errores'));assert.ok(main.querySelectorAll('#ejercicios ol > li').length>=8);}
 dom.window.close();
});
for(const [path,canonical] of [['/material-ele/fichas-para-profes','/material-ele/fichas-gratis'],['/material-ele/fichas-para-profes/presente-de-indicativo','/material-ele/fichas-gratis/presente-de-indicativo'],['/material-ele/fichas-para-profes/pack-a2','/material-ele/fichas-gratis/pack-a2']])test(`social twin of the free worksheets: normal navigation, soft CTA, canonical to the clean section: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 const dom=new JSDOM(await response.text());const d=dom.window.document;
 assert.equal(d.querySelectorAll('h1').length,1);assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+canonical);
 const main=d.querySelector('main');
 assert.ok(main.querySelector('a[href="/"]'),'soft CTA to the home page');assert.match(main.textContent,/¿Te sirvió\?/);
 if(path.split('/').length>3){assert.match(main.textContent,/Descargar/);assert.ok(main.querySelector('[id$="soluciones"]'));}
 dom.window.close();
});
