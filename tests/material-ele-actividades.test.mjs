import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {default as sitemap} from "./app/sitemap.ts"; export {isEnglishDefaultPath,isEdgeCacheablePath,isSearchPrivatePath} from "./app/seo.ts"; export * from "./app/material-ele/actividades.ts"; export {elePages} from "./app/material-ele/data.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const all=[...m.actividadPages,...m.ejercicioPages,...m.preguntasPages];

test('every guide activity, exercise and question set has its own page, and nothing else',()=>{
 assert.equal(m.actividadPages.length,m.elePages.reduce((n,p)=>n+p.activities.length,0));
 assert.equal(m.ejercicioPages.length,m.elePages.filter(p=>p.exercise).length);
 assert.equal(m.preguntasPages.length,m.elePages.reduce((n,p)=>n+(p.questions?.length??0),0));
 assert.ok(m.actividadPages.length>=100,`only ${m.actividadPages.length} activity pages`);
 assert.deepEqual(m.preguntasPages.map(p=>p.slug),['a1','a2','b1','b2','c1','c2']);
 for(const p of m.actividadPages)assert.equal(m.actividadPathByName.get(p.activity.name),p.path);
});

test('bank pages have unique slugs, bounded unique metadata and a level',()=>{
 const paths=new Set(),titles=new Set(),h1s=new Set();
 for(const p of all){
  assert.match(p.path,/^\/material-ele\/(actividad|ejercicio|preguntas)\/[a-z0-9-]+$/,p.path);
  assert.ok(p.title.length<=78,`${p.path} title ${p.title.length}`);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${p.path} description ${p.description.length}`);
  assert.match(p.title,/\| SpanishCue$/);
  assert.match(p.level,/^[ABC][12](–[ABC][12])?$/,`${p.path} level ${p.level}`);
  assert.ok(p.faq.length>=2,p.path);
  paths.add(p.path);titles.add(p.title);h1s.add(p.h1);
 }
 assert.equal(paths.size,all.length);assert.equal(titles.size,all.length);assert.equal(h1s.size,all.length);
 assert.ok(m.bancoTitle.length<=78);assert.ok(m.bancoDescription.length>=110&&m.bancoDescription.length<=165,m.bancoDescription.length);
});

test('bank pages are in the sitemap, Spanish-first, indexable and edge-cached',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 for(const path of [m.ACTIVIDADES_PATH,...m.bancoPaths]){
  assert.ok(urls.has('https://spanishcue.com'+path),path);
  assert.equal(m.isEnglishDefaultPath(path),false,path);
  assert.equal(m.isSearchPrivatePath(path),false,path);
  assert.equal(m.isEdgeCacheablePath(path),true,path);
 }
});

test('copy keeps the published price and never invents customers or competitors',()=>{
 const text=JSON.stringify(all.map(p=>[p.title,p.description,p.h1,p.faq]))+m.bancoTitle+m.bancoDescription;
 assert.doesNotMatch(text,/US\$\s?(?!15,50)\d/);
 assert.doesNotMatch(text,/profede+le|miles de profesores|n\.º 1|número uno/i);
});
