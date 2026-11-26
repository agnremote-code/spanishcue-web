import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

for(const [path,h1,items] of [['/indicativo-o-subjuntivo','¿Indicativo o subjuntivo? Ejercicios por expresión',12],['/indicativo-o-subjuntivo/quiero-que','Quiero que + subjuntivo',6],['/indicativo-o-subjuntivo/aunque','Aunque: ¿indicativo o subjuntivo?',6],['/indicativo-o-subjuntivo/si-tuviera','Si + imperfecto de subjuntivo',6]])test(`mood page serves Spanish HTML with the right robots rule: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');assert.ok(!response.headers.has('set-cookie'));
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.documentElement.lang,'es');
 assert.equal(d.querySelector('h1').textContent,h1);assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com'+path);
 // Lote N3 of the SEO plan: one page per rule stays available but out of the index; the hub stays indexable.
 if(path!=='/indicativo-o-subjuntivo'){assert.match(d.querySelector('meta[name="robots"]').content,/noindex/);assert.equal(response.headers.get('x-robots-tag'),'noindex, follow');}
 else{assert.ok(!d.querySelector('meta[name="robots"]')?.content.includes('noindex'));assert.equal(response.headers.get('x-robots-tag'),null);}
 const ld=[...d.querySelectorAll('script[type="application/ld+json"]')].map(s=>s.textContent).join(' ');
 assert.ok(ld.includes('FAQPage'));
 const choices=d.querySelectorAll('[role="group"]');assert.equal(choices.length,items);
 for(const g of choices)assert.equal(g.querySelectorAll('button').length,2);
 assert.equal(d.querySelectorAll('details').length>=items,true,'every sentence keeps its solution without JavaScript');
 assert.ok(d.querySelector('section[aria-label="Newsletter de SpanishCue"] input[type="email"]'));
 if(path==='/indicativo-o-subjuntivo')assert.ok(d.querySelectorAll('a[href^="/indicativo-o-subjuntivo/"]').length>=36);
 else assert.ok(d.querySelector('a[href^="/conjugacion/"]'),'links the conjugation of its verbs');
});
test('an unknown expression is a 404',async()=>{assert.equal((await fetch(origin+'/indicativo-o-subjuntivo/nope')).status,404);});
test('the subjunctive tense page links the expression pages',async()=>{
 const d=new JSDOM(await (await fetch(origin+'/conjugacion/irregulares/subjuntivo-presente')).text()).window.document;
 assert.ok(d.querySelector('a[href="/indicativo-o-subjuntivo/ojala"]'));
});
