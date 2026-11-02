import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {default as sitemap} from "./app/sitemap.ts"; export {isEnglishDefaultPath,isEdgeCacheablePath,isSearchPrivatePath} from "./app/seo.ts"; export * from "./app/material-ele/guias.ts"; export {indiceEntries,pageDates,materialEleAtom} from "./app/material-ele/indice.ts"; export {elePageBySlug,elePages} from "./app/material-ele/data.ts"; export {temaGroups,temaPages,temaLevelPages} from "./app/material-ele/temas.ts"; export {bancoPaths} from "./app/material-ele/actividades.ts"; export {lessons} from "./app/lesson-catalog.ts"; export {isFreeLesson} from "./app/access-policy.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const text=g=>g.sections.flatMap(s=>[...s.blocks,...(s.subsections??[]).flatMap(x=>x.blocks)]).flatMap(b=>b.type==='p'?[b.text]:b.items).join('\n');
const knownPaths=new Set(['/material-ele','/material-ele/actividades','/material-ele/indice','/gramatica/clase-inicial','/demo/noche-abierta','/pricing',...m.elePages.map(p=>p.path),...m.temaGroups.map(g=>g.path),...m.temaPages.map(p=>p.path),...m.temaLevelPages.map(p=>p.path),...m.bancoPaths]);

test('every long guide has bounded metadata, real prose, a FAQ and only links that resolve',()=>{
 assert.ok(m.guiaPages.length>=1);
 for(const g of m.guiaPages){
  assert.equal(g.path,`${m.GUIAS_PATH}/${g.slug}`);
  assert.ok(g.title.length<=78,`${g.slug} title ${g.title.length}`);
  assert.ok(g.description.length>=110&&g.description.length<=165,`${g.slug} description ${g.description.length}`);
  assert.ok(g.sections.length>=5&&g.faq.length>=4,g.slug);
  const body=text(g);
  assert.ok(body.split(/\s+/).length>=900,`${g.slug} has only ${body.split(/\s+/).length} words`);
  assert.doesNotMatch(body,/\bA0\b/);
  const links=[...body.matchAll(/\]\(([^)]+)\)/g)].map(x=>x[1]);
  assert.ok(links.length>=15,`${g.slug} links ${links.length}`);
  for(const href of links){assert.ok(href.startsWith('/'),href);assert.ok(knownPaths.has(href.split('#')[0]),`${g.slug} links to unknown ${href}`);}
  for(const slug of g.related)assert.ok(m.elePageBySlug.has(slug),slug);
  const ids=new Set(m.lessons.map(l=>l.id));for(const id of g.lessonIds)assert.ok(ids.has(id),`lesson ${id}`);
  assert.ok(g.lessonIds.some(id=>m.isFreeLesson(id)),'a free class to open');
  assert.doesNotMatch(body,/\d+ ?€|\$\d/,'no competitor prices that go stale');
 }
});

test('long guides are indexed: sitemap with cover images, index, feed, dates, Spanish-first and edge-cached',()=>{
 const byUrl=new Map(m.sitemap().map(x=>[x.url,x]));
 const feed=m.materialEleAtom();
 for(const g of m.guiaPages){
  const e=byUrl.get('https://spanishcue.com'+g.path);assert.ok(e,g.path);
  assert.equal(e.priority,0.85);assert.ok(e.images?.length>=3,'covers');
  assert.equal(e.lastModified,m.pageDates(g.path).dateModified);
  assert.equal(m.pageDates(g.path).datePublished,g.published);
  assert.ok(m.indiceEntries.some(x=>x.path===g.path&&x.section==='Guías completas'));
  assert.ok(feed.includes(`https://spanishcue.com${g.path}`));
  assert.equal(m.isEnglishDefaultPath(g.path),false);assert.equal(m.isSearchPrivatePath(g.path),false);assert.equal(m.isEdgeCacheablePath(g.path),true);
 }
});
