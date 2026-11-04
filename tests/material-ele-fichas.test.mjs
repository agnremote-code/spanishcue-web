// Open grammar worksheets (2026-11-04): one printable page per free live grammar class.
import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/material-ele/fichas.ts"; export {fichaContent} from "./app/material-ele/ficha-content.ts"; export {isFreeLesson} from "./app/access-policy.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {indiceEntries} from "./app/material-ele/indice.ts"; export {isSearchPrivatePath,isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('every worksheet comes from a FREE live grammar class, with bounded metadata and real content',async()=>{
 assert.ok(m.fichaPages.length>=17);
 assert.equal(new Set(m.fichaPages.map(p=>p.slug)).size,m.fichaPages.length);
 for(const p of m.fichaPages){
  assert.ok(m.isFreeLesson(p.id),`${p.id} must be free: worksheets never open PRO content`);
  assert.equal(p.path,`${m.FICHA_PATH}/${p.slug}`);
  assert.ok(p.title.length<=78,`${p.slug} title ${p.title.length}`);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${p.slug} description ${p.description.length}`);
  const c=await m.fichaContent(p.id);assert.ok(c,`${p.id} has a live class`);
  assert.ok(c.theory.length+c.tables.length>=1,`${p.slug} theory`);
  assert.ok(c.exercises.length>=8,`${p.slug} has ${c.exercises.length} exercises`);
  for(const e of c.exercises){assert.ok(e.answer,`${p.slug} answer`);assert.doesNotMatch(e.prompt+e.answer,/\[\[|\|(blue|teal|orange|violet|neutral)\]\]/);}
 }
 for(const level of ['A1','A2','B1','B2','C1','C2'])assert.ok(m.fichaPages.filter(p=>p.level===level).length>=2,level);
});

test('worksheets are indexed: sitemap, index, public and edge-cached',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 for(const path of [m.FICHAS_PATH,...m.fichaPages.map(p=>p.path)]){
  assert.ok(urls.has('https://spanishcue.com'+path),path);
  assert.ok(m.indiceEntries.some(x=>x.path===path),path);
  assert.equal(m.isSearchPrivatePath(path),false);assert.equal(m.isEdgeCacheablePath(path),true);
 }
});
