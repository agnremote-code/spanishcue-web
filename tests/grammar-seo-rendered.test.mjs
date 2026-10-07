import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const paths=['/spanish-grammar-lessons',...['a1','a2','b1','b2','c1','por-vs-para-activities'].map(s=>'/spanish-grammar-lessons/'+s),'/guides/how-to-teach-ser-vs-estar','/guides/preterite-vs-imperfect-activities','/guides/spanish-subjunctive-lesson-plan','/about'];
for(const path of paths)test(`grammar resource serves usable indexable HTML: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 assert.equal(response.headers.get('content-language'),'en');assert.match(response.headers.get('cache-control')||'',/private, no-store/);
 const dom=new JSDOM(await response.text());const d=dom.window.document;
 assert.equal(d.querySelectorAll('h1').length,1);assert.ok(d.querySelector('h1').textContent.length>15);
 const canonical=d.querySelectorAll('link[rel="canonical"]');assert.equal(canonical.length,1);assert.equal(canonical[0].href,'https://spanishcue.com'+path);
 assert.match(d.querySelector('meta[name="robots"]')?.content||'',/index.*follow/);assert.doesNotMatch(d.querySelector('meta[name="robots"]')?.content||'',/noindex/);
 assert.ok(d.title.length<=65,d.title);const description=d.querySelector('meta[name="description"]')?.content||'';assert.ok(description.length>=110&&description.length<=165,description);
 const schemas=[...d.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent));
 assert.ok(schemas.some(s=>s['@type']==='BreadcrumbList'));assert.ok(schemas.some(s=>['WebPage','CollectionPage','AboutPage'].includes(s['@type'])));
 assert.ok(!schemas.some(s=>/Review|AggregateRating/.test(JSON.stringify(s))));
 assert.ok(d.querySelector('a[href="/la-fabrica-de-los-nombres"]'));assert.ok(d.querySelector('a[href="/pricing"]'));assert.ok(d.querySelector('a[href="/about"]'));
 const body=d.querySelector('main').cloneNode(true);body.querySelectorAll('script,style').forEach(x=>x.remove());assert.doesNotMatch(body.textContent,/Alejandro/);
 assert.ok(![...d.images].some(img=>/preply|portrait|avatar/.test(img.src)));
 if(path.includes('/guides/')||path.endsWith('activities'))assert.ok(d.querySelectorAll('article').length>=3);
 dom.window.close();
});
test('grammar canonical ignores language and ad attribution parameters',async()=>{
 const response=await fetch(origin+'/spanish-grammar-lessons/b1?lang=es&utm_source=qa&gclid=qa&fbclid=qa');assert.equal(response.status,200);
 const dom=new JSDOM(await response.text());assert.equal(dom.window.document.querySelector('link[rel="canonical"]').href,'https://spanishcue.com/spanish-grammar-lessons/b1');assert.match(response.headers.get('cache-control'),/no-store/);dom.window.close();
});
test('grammar descendants reject unknown or unsupported planning pages with HTTP 404',async()=>{
 for(const slug of ['not-a-grammar-page','c2','A1']){const response=await fetch(origin+'/spanish-grammar-lessons/'+slug);assert.equal(response.status,404,slug);}
});
test('the sitemap includes all Phase 2 pages without private or parameter variants',async()=>{
 const response=await fetch(origin+'/sitemap.xml');assert.equal(response.status,200);const xml=await response.text();
 for(const path of paths)assert.ok(xml.includes('<loc>https://spanishcue.com'+path+'</loc>'),path);
 assert.doesNotMatch(xml,/<loc>[^<]*(?:\?|\/lp\/|\/cuenta|\/admin|\/s\/)/);
});
test('proof is clearly attributed to teaching practice rather than product ratings',async()=>{
 const dom=new JSDOM(await (await fetch(origin+'/about')).text());const d=dom.window.document;
 assert.equal(d.querySelectorAll('blockquote').length,3);assert.match(d.body.textContent,/not reviews of the SpanishCue platform/);assert.match(d.body.textContent,/7 October 2026/);
 assert.ok(d.querySelector('a[href="https://preply.com/en/tutor/4226888"]'));dom.window.close();
});
test('private grammar classrooms and premium audio remain protected',async()=>{
 for(const path of ['/gramatica/por-para-razones-objetivos','/audio/grammar-classroom/231.mp3']){
  const response=await fetch(origin+path,{redirect:'manual'});assert.ok([302,307,403].includes(response.status),`${path}: ${response.status}`);assert.match(response.headers.get('cache-control'),/no-store/);
 }
 const free=await fetch(origin+'/audio/grammar-free/40.mp3');assert.equal(free.status,200);assert.match(free.headers.get('content-type'),/audio/);
});
