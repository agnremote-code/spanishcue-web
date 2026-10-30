import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {default as sitemap} from "./app/sitemap.ts"; export {isEnglishDefaultPath,isEdgeCacheablePath,isSearchPrivatePath} from "./app/seo.ts"; export * from "./app/material-ele/data.ts"; export {lessons} from "./app/lesson-catalog.ts"; export {isFreeLesson} from "./app/access-policy.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('the Spanish ELE cluster is in the sitemap, Spanish-first, indexable and edge-cached',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 for(const path of ['/alternativa-a-profedeele',m.MATERIAL_ELE_PATH,...m.elePages.map(p=>p.path)]){
  assert.ok(urls.has('https://spanishcue.com'+path),path);
  assert.equal(m.isEnglishDefaultPath(path),false,path);
  assert.equal(m.isSearchPrivatePath(path),false,path);
  assert.equal(m.isEdgeCacheablePath(path),true,path);
 }
 assert.deepEqual(m.eleLevels.map(p=>p.slug),['a1','a2','b1','b2','c1','c2']);
});

test('every page has unique bounded metadata, a unique H1 and real classroom content',()=>{
 const titles=new Set(),h1s=new Set(),names=[];
 for(const p of m.elePages){
  assert.ok(p.title.length<=78,`${p.slug} title ${p.title.length}`);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${p.slug} description ${p.description.length}`);
  assert.match(p.title,/\| SpanishCue$/);
  titles.add(p.title);h1s.add(p.h1);
  assert.ok(p.activities.length>=2,p.slug);
  for(const a of p.activities){assert.ok(a.steps.length>=3&&a.prompts.length>=1&&a.model&&a.correction&&a.online,a.name);names.push(a.name);}
  if(p.exercise)for(const item of p.exercise.items)assert.ok(item.q.includes('___')&&item.a,item.q);
  assert.ok(p.faq.length>=2,p.slug);
  for(const slug of p.related)assert.ok(m.elePageBySlug.has(slug)&&slug!==p.slug,`${p.slug} → ${slug}`);
 }
 assert.equal(titles.size,m.elePages.length);assert.equal(h1s.size,m.elePages.length);
 assert.equal(new Set(names).size,names.length,'activities must not be copy-paste duplicates');
 assert.equal(m.elePageBySlug.get('preguntas-de-conversacion').questions.flatMap(s=>s.items).length,60);
});

test('linked lessons exist and every level offers a free classroom of that level',()=>{
 for(const p of m.elePages){
  for(const id of p.lessonIds)assert.ok(m.lessons.some(l=>l.id===id),`${p.slug} links missing lesson ${id}`);
  if(p.kind==='level')assert.ok(p.lessonIds.some(id=>m.isFreeLesson(id)&&m.lessons.find(l=>l.id===id)?.level===p.code),`${p.slug} free lesson`);
 }
});

test('copy keeps the published price and never invents customers or rankings',()=>{
 const text=JSON.stringify(m.elePages)+m.hubDescription+JSON.stringify(m.hubFaq);
 assert.doesNotMatch(text,/US\$\s?(?!15,50)\d/);
 assert.doesNotMatch(text,/profede+le|miles de profesores|n\.º 1|número uno|\d+\s?(?:profesores|clientes) (?:ya|confían)/i);
});
