import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/ejercicios-gramatica/data.ts"; export * from "./app/ejercicios-gramatica/families.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('every rule page resolves with valid metadata and a well-formed quiz',()=>{
 assert.deepEqual(m.gapFamilies.map(f=>f.pages.length),[6,8,4,16]);
 for(const f of m.gapFamilies){
  assert.ok(f.title.length<=78&&f.title.endsWith('| SpanishCue'),f.title);
  assert.equal(new Set(f.pages.map(p=>p.slug)).size,f.pages.length);
  for(const p of f.pages){
   const v=m.gapPageBySlug(f,p.slug);
   assert.ok(v.title.length<=78&&v.title.endsWith('| SpanishCue'),v.title);
   assert.ok(v.description.length>=110&&v.description.length<=165,`${p.slug}: ${v.description.length} ${v.description}`);
   assert.ok(v.quiz.length>=8,p.slug);assert.equal(v.faq.length,3);assert.equal(v.related.length,f.pages.length-1);
   for(const it of v.quiz){assert.ok(it.options.length>=2);assert.equal(new Set(it.options).size,it.options.length);assert.ok(it.answer>=0&&it.answer<it.options.length);}
   assert.ok(new Set(v.quiz.map(it=>it.answer)).size>1,`${p.slug}: the right answer is not always in the same place`);
  }
  assert.equal(m.gapMixed(f).length,12);
  assert.equal(m.gapPageBySlug(f,'nope'),undefined);
 }
});

test('answers stay where the data puts them',()=>{
 const v=m.gapPageBySlug(m.imperativo,'tu-irregulares');
 assert.equal(v.quiz[0].options[v.quiz[0].answer],'pon');
 const g=m.gapPageBySlug(m.gustar,'gusta-o-gustan');
 assert.equal(g.quiz[1].options[g.quiz[1].answer],'gustan');
 const s=m.gapPageBySlug(m.pronombres,'se-lo');
 assert.equal(s.quiz[0].options[s.quiz[0].answer],'se lo');
});

test('neutral Spanish: no first-person preterite in the sentences',()=>{
 const firstPreterite=/\b(compré|di|dije|hice|fui|tuve|puse|vine|devolví|presté|llamé|comí|vi)\b/;
 for(const f of m.gapFamilies)for(const p of f.pages)for(const raw of p.items)assert.ok(!firstPreterite.test(raw.split('|')[0]),raw);
});

test('sitemap and edge cache',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 // Lote N3: rule pages leave the sitemap except /dudas-del-espanol/*, where each page answers a different question.
 for(const path of m.gapPaths())assert.equal(urls.has('https://spanishcue.com'+path),path.split('/').length===2||path.startsWith('/dudas-del-espanol/'),path);
 assert.equal(m.gapPaths().length,38);
 assert.ok(m.isEdgeCacheablePath('/ejercicios-de-gustar/doler'));
 assert.ok(m.isEdgeCacheablePath('/dudas-del-espanol/haber-o-a-ver'));
});
