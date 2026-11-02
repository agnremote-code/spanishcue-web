import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {default as sitemap} from "./app/sitemap.ts"; export {isEnglishDefaultPath,isEdgeCacheablePath,isSearchPrivatePath} from "./app/seo.ts"; export * from "./app/material-ele/temas.ts"; export {elePageBySlug} from "./app/material-ele/data.ts"; export {lessons} from "./app/lesson-catalog.ts"; export {isFreeLesson} from "./app/access-policy.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('the topic index is large, grouped like ELE teachers search, and never emits an empty page',()=>{
 assert.ok(m.temaPages.length>=90,`only ${m.temaPages.length} topic pages`);
 assert.deepEqual(m.temaGroups.map(g=>g.id),['gramatica','vocabulario','funciones','cultura']);
 for(const group of m.temaGroups)assert.ok(m.temasByGroup(group.id).length>=10,group.id);
 assert.deepEqual(m.temaSourcesWithoutLessons,[],'every listed topic must be taught by at least one real class');
 for(const p of m.temaPages){
  assert.ok(p.lessonIds.length>=1,p.path);
  for(const id of p.lessonIds)assert.ok(m.lessons.some(l=>l.id===id),`${p.path} links missing lesson ${id}`);
  assert.equal(p.freeCount,p.lessonIds.filter(id=>m.isFreeLesson(id)).length,p.path);
  assert.ok(p.levels.length>=1,p.path);
  if(p.guide)assert.ok(m.elePageBySlug.has(p.guide),`${p.path} → guide ${p.guide}`);
  if(p.group==='gramatica')for(const id of p.lessonIds)assert.ok(['Gramática','Fonética'].includes(m.lessons.find(l=>l.id===id).category),`${p.path} lists a non-grammar class ${id}`);
 }
});

test('every topic page has unique bounded metadata, a unique H1 and its own intro',()=>{
 const titles=new Set(),h1s=new Set(),paths=new Set(),intros=new Set();
 for(const p of m.temaPages){
  assert.ok(p.title.length<=78,`${p.path} title ${p.title.length}`);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${p.path} description ${p.description.length}`);
  assert.match(p.title,/\| SpanishCue$/);
  assert.ok(p.intro.length>=80,`${p.path} intro too short`);
  assert.ok(p.faq.length>=3,p.path);
  titles.add(p.title);h1s.add(p.h1);paths.add(p.path);intros.add(p.intro);
  assert.match(p.path,/^\/material-ele\/(gramatica|vocabulario|funciones|cultura)\/[a-z0-9-]+$/);
 }
 assert.equal(titles.size,m.temaPages.length);assert.equal(h1s.size,m.temaPages.length);assert.equal(paths.size,m.temaPages.length);assert.equal(intros.size,m.temaPages.length);
 for(const g of m.temaGroups){assert.ok(g.title.length<=78,g.id);assert.ok(g.description.length>=110&&g.description.length<=165,`${g.id} ${g.description.length}`);}
});

test('topic pages are in the sitemap, Spanish-first, indexable and edge-cached',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 for(const path of [...m.temaGroups.map(g=>g.path),...m.temaPages.map(p=>p.path)]){
  assert.ok(urls.has('https://spanishcue.com'+path),path);
  assert.equal(m.isEnglishDefaultPath(path),false,path);
  assert.equal(m.isSearchPrivatePath(path),false,path);
  assert.equal(m.isEdgeCacheablePath(path),true,path);
 }
});

test('copy keeps the published price and never invents customers, rankings or competitors',()=>{
 const text=JSON.stringify(m.temaPages)+JSON.stringify(m.temaGroups);
 assert.doesNotMatch(text,/US\$\s?(?!15,50)\d/);
 assert.doesNotMatch(text,/profede+le|miles de profesores|n\.º 1|número uno|\d+\s?(?:profesores|clientes) (?:ya|confían)/i);
});

test('the keyword topics ELE teachers search for are all present',()=>{
 const slugs=new Set(m.temaPages.map(p=>`${p.group}/${p.slug}`));
 for(const s of ['gramatica/presente-de-indicativo','gramatica/preterito-indefinido','gramatica/preterito-imperfecto','gramatica/presente-de-subjuntivo','gramatica/imperativo','gramatica/ser-y-estar','gramatica/por-y-para','gramatica/pronombres-de-objeto','gramatica/conectores','vocabulario/familia','vocabulario/comida-y-restaurante','vocabulario/la-ciudad','funciones/narrar','funciones/dar-consejos-y-recomendaciones','funciones/expresar-opinion','cultura/argentina','cultura/espana'])assert.ok(slugs.has(s),s);
});

test('level pages exist for every group only where two or more classes are written for that level, with bounded unique metadata',()=>{
 assert.ok(m.temaLevelPages.length>=280,`only ${m.temaLevelPages.length} level pages`);
 for(const group of ['gramatica','vocabulario','funciones','cultura'])assert.ok(m.temaLevelPages.some(p=>p.group===group),group);
 const paths=new Set(),titles=new Set(),h1s=new Set(),intros=new Set();const urls=new Set(m.sitemap().map(x=>x.url));
 for(const p of m.temaLevelPages){
  assert.ok(['gramatica','vocabulario','funciones','cultura'].includes(p.group));
  assert.ok(p.order.length>20,p.path);
  assert.ok(p.lessonIds.length>=2,p.path);
  for(const id of p.lessonIds){const l=m.lessons.find(x=>x.id===id);assert.ok((l.levels?.length?l.levels:[l.level]).includes(p.level),`${p.path} lists ${id} of level ${l.level}`);}
  assert.match(p.path,/^\/material-ele\/(gramatica|vocabulario|funciones|cultura)\/[a-z0-9-]+\/(a1|a2|b1|b2|c1|c2)$/);
  assert.ok(p.title.length<=78,`${p.path} title ${p.title.length}`);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${p.path} description ${p.description.length}`);
  assert.ok(p.faq.length>=3,p.path);
  assert.ok(urls.has('https://spanishcue.com'+p.path),p.path);
  assert.equal(m.isEdgeCacheablePath(p.path),true,p.path);
  paths.add(p.path);titles.add(p.title);h1s.add(p.h1);intros.add(p.intro);
 }
 assert.equal(paths.size,m.temaLevelPages.length);assert.equal(titles.size,m.temaLevelPages.length);assert.equal(h1s.size,m.temaLevelPages.length);assert.equal(intros.size,m.temaLevelPages.length);
 assert.ok(m.temaLevelPageByPath.has('/material-ele/gramatica/presente-de-indicativo/a1'));
 const vocab=m.temaLevelPages.find(p=>p.group==='vocabulario'),gram=m.temaLevelPages.find(p=>p.group==='gramatica');
 assert.notEqual(vocab.order,gram.order,'each group describes its classes in its own words');
 assert.doesNotMatch(vocab.intro,/regla primero/);
});
