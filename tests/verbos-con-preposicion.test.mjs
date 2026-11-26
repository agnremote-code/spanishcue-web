import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/verbos-con-preposicion/data.ts"; export * from "./app/verbos-con-preposicion/verbos.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('every verb page resolves with valid metadata, a mixed quiz and no contraction traps',()=>{
 assert.ok(m.verbosPrep.length>=45);
 const slugs=m.verbosPrep.map(m.verboPrepSlug);
 assert.equal(new Set(slugs).size,slugs.length);
 for(const e of m.verbosPrep){
  const slug=m.verboPrepSlug(e);assert.match(slug,/^[a-zñü-]+$/,slug);
  assert.equal(e.ex.length,5,slug);
  for(const s of e.ex){
   assert.equal(s.split('___').length,2,`${slug}: ${s}`);
   assert.doesNotMatch(s,/___ el\b/,`${slug}: «${e.p} el» would contract`);
   assert.doesNotMatch(s,/vosotros|vuestr/);
  }
  if(e.wrong)assert.notEqual(e.wrong,e.p);
  const p=m.prepPageBySlug(slug);
  assert.ok(p.title.length<=78&&p.title.endsWith('| SpanishCue'),p.title);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${slug}: ${p.description.length} ${p.description}`);
  assert.equal(p.quiz.length,8);assert.equal(p.faq.length,4);assert.ok(p.related.length>=3,slug);
  assert.ok(p.quiz.slice(4).some(i=>i.options[i.answer]!==e.p),`${slug}: the contrast items use other prepositions`);
  for(const i of p.quiz){assert.deepEqual(i.options,['a','de','en','con','por']);assert.ok(i.answer>=0);}
 }
 assert.equal(m.prepPageBySlug('pensar-en').conj.verb,'pensar');
 assert.equal(m.prepPageBySlug('acordarse-de').conj.verb,'acordar');
 assert.equal(m.prepPageBySlug('darse-cuenta-de').conj.verb,'dar');
 assert.equal(m.prepPageBySlug('so%C3%B1ar-con').v,'soñar');assert.equal(m.prepVerbPath(m.verbosPrep.find(e=>e.v==='soñar')),'/verbos-con-preposicion/so%C3%B1ar-con');
 assert.equal(m.prepPageBySlug('nope'),undefined);
});

test('group pages, hub quiz, sitemap and edge cache',()=>{
 assert.equal(m.prepGroups.length,5);
 for(const g of m.prepGroups){
  assert.ok(g.title.length<=78,g.title);assert.ok(g.description.length>=110&&g.description.length<=165,`${g.p}: ${g.description.length}`);
  assert.ok(g.verbs.length>=6);assert.equal(g.quiz.length,12);
 }
 assert.equal(m.hubQuiz().length,12);
 const urls=new Set(m.sitemap().map(x=>x.url));
 assert.ok(urls.has('https://spanishcue.com/verbos-con-preposicion'));
 assert.ok(!urls.has('https://spanishcue.com/verbos-con-preposicion/preposicion-de')); // lote N3: noindex
 for(const e of m.verbosPrep)assert.ok(!urls.has('https://spanishcue.com'+m.prepVerbPath(e)),m.prepVerbPath(e));
 assert.ok(m.isEdgeCacheablePath('/verbos-con-preposicion/pensar-en'));
});
