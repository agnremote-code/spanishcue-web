// Open grammar worksheets (2026-11-04): a full worksheet per FREE live grammar class and a
// sample (two concepts, five exercises) per PRO class; nothing else of a PRO class leaves it.
import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/material-ele/fichas.ts"; export {fichaContent,SAMPLE_EXERCISES} from "./app/material-ele/ficha-content.ts"; export {isFreeLesson} from "./app/access-policy.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {indiceEntries} from "./app/material-ele/indice.ts"; export {isSearchPrivatePath,isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('FREE classes get the full worksheet and PRO classes only a bounded sample',async()=>{
 assert.ok(m.fichaPages.length>=200,`${m.fichaPages.length} worksheets`);
 assert.equal(new Set(m.fichaPages.map(p=>p.slug)).size,m.fichaPages.length);
 assert.ok(m.fichaPages.filter(p=>!p.sample).length>=17);
 for(const p of m.fichaPages){
  assert.equal(p.sample,!m.isFreeLesson(p.id),`${p.id} sample flag follows access policy`);
  assert.equal(p.path,`${m.FICHA_PATH}/${p.slug}`);
  assert.ok(p.title.length<=78,`${p.slug} title ${p.title.length}`);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${p.slug} description ${p.description.length}`);
  const c=await m.fichaContent(p.id,p.sample);assert.ok(c,`${p.id} has a live class`);
  assert.ok(c.theory.length+c.tables.length>=1,`${p.slug} theory`);
  if(p.sample){
   assert.ok(c.exercises.length>=3&&c.exercises.length<=m.SAMPLE_EXERCISES,`${p.slug} sample has ${c.exercises.length} exercises`);
   assert.ok(c.theory.length<=2&&c.theory.every(t=>t.examples.length<=2),`${p.slug} sample theory is short`);
   assert.equal(c.tables.length+c.mistakes.length+c.talk.length,0,`${p.slug} sample keeps tables, mistakes and talk in the class`);
   assert.equal(c.writing,undefined,`${p.slug} sample keeps writing in the class`);
  }else assert.ok(c.exercises.length>=8,`${p.slug} has ${c.exercises.length} exercises`);
  for(const e of c.exercises){assert.ok(e.answer,`${p.slug} answer`);assert.doesNotMatch(e.prompt+e.answer,/\[\[|\|(blue|teal|orange|violet|neutral)\]\]/);}
 }
 for(const level of ['A1','A2','B1','B2','C1','C2'])assert.ok(m.fichaPages.filter(p=>p.level===level&&!p.sample).length>=2,level);
});

test('worksheets are indexed: sitemap, index, public and edge-cached',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 for(const path of [m.FICHAS_PATH,...m.fichaPages.map(p=>p.path)]){
  assert.ok(urls.has('https://spanishcue.com'+path),path);
  assert.ok(m.indiceEntries.some(x=>x.path===path),path);
  assert.equal(m.isSearchPrivatePath(path),false);assert.equal(m.isEdgeCacheablePath(path),true);
 }
});
