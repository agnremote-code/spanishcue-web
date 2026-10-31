import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {default as sitemap} from "./app/sitemap.ts"; export {isEnglishDefaultPath,isEdgeCacheablePath,isSearchPrivatePath,languageAlternates} from "./app/seo.ts"; export * from "./app/resource-seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('every lesson resource has a distinct Spanish page paired with its English page',()=>{
 const seen=new Set();
 for(const lesson of m.resourceLessons){
  const es=m.recursoPathForLesson(lesson),en=m.resourcePathForLesson(lesson);
  assert.match(es,/^\/recursos\/[a-z0-9-]+$/,es);
  assert.ok(!seen.has(es),`duplicate ${es}`);seen.add(es);
  assert.equal(m.lessonForRecursoSlug(es.slice('/recursos/'.length)).id,m.lessonForResourceSlug(en.slice('/resources/'.length)).id,es);
  assert.deepEqual(m.resourceLanguagePair(es),{es,en});
  assert.deepEqual(m.resourceLanguagePair(en),{es,en});
  assert.deepEqual(Object.keys(m.languageAlternates(es)).sort(),['en','es','x-default'],es);
  assert.equal(m.isEnglishDefaultPath(es),false);assert.equal(m.isSearchPrivatePath(es),false);assert.equal(m.isEdgeCacheablePath(es),true);
  assert.ok(m.recursoTitle(lesson).length<=120,m.recursoTitle(lesson));
  const d=m.recursoDescription(lesson);assert.ok(d.length>=60&&d.length<=160,`${es} ${d.length}`);
 }
 assert.deepEqual(m.resourceLanguagePair('/recursos'),{es:'/recursos',en:'/resources'});
 assert.equal(m.resourceLanguagePair('/recursos/no-existe'),undefined);
 assert.equal(m.lessonForRecursoSlug('no-existe'),undefined);
 assert.equal(m.languageAlternates('/material-ele'),undefined);
});

test('the sitemap lists the Spanish hub and every Spanish resource page with hreflang alternates',()=>{
 const byUrl=new Map(m.sitemap().map(e=>[e.url,e]));
 assert.ok(byUrl.has('https://spanishcue.com/recursos'));
 for(const lesson of m.resourceLessons){
  const es=byUrl.get('https://spanishcue.com'+m.recursoPathForLesson(lesson)),en=byUrl.get('https://spanishcue.com'+m.resourcePathForLesson(lesson));
  assert.ok(es&&en,lesson.title);
  assert.equal(es.alternates.languages.en,en.url);assert.equal(en.alternates.languages.es,es.url);
 }
});
