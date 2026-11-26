import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/material-ele/seo-rewrites.ts"; export {isPrunedPath, isPrunedNoindexPath} from "./app/seo-prune.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {elePageBySlug, elePages} from "./app/material-ele/data.ts"; export {temaLevelPageByPath} from "./app/material-ele/temas.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const sitemapPaths=new Set(m.sitemap().map(e=>new URL(e.url).pathname));
const pageFor=(path)=>m.elePages.find(p=>p.path===path)??m.temaLevelPageByPath.get(path);
const texts=(rw)=>rw.sections.flatMap(s=>[s.title,s.intro??'',...s.blocks.flatMap(b=>b.type==='p'?[b.text]:b.type==='table'?[b.caption,...b.head,...b.rows.flat()]:b.items)]).concat((rw.faq??[]).flatMap(f=>[f.question,f.answer]));

test('every rewritten URL is a live, indexable page listed in the sitemap',()=>{
 assert.ok(m.pageRewrites.size>0);
 for(const path of m.pageRewrites.keys()){
  assert.ok(pageFor(path),`${path} is not a Material ELE page`);
  assert.ok(sitemapPaths.has(path),`${path} is not in the sitemap`);
  assert.ok(!m.isPrunedPath(path)&&!m.isPrunedNoindexPath(path),`${path} is pruned`);
 }
});

test('each rewrite batch changes at most 20 URLs',()=>{
 const counts={};for(const rw of m.pageRewrites.values())counts[rw.lote]=(counts[rw.lote]??0)+1;
 for(const [lote,n] of Object.entries(counts))assert.ok(n<=20,`${lote} has ${n} URLs`);
});

test('titles fit the result page and descriptions are 110 to 160 characters',()=>{
 for(const [path,rw] of m.pageRewrites){
  const n=pageFor(path).lessonIds.length;
  if(rw.title){const t=m.fillCount(rw.title,n);assert.ok(t.length<=62,`${path} title ${t.length}: ${t}`);}
  if(rw.description){const d=m.fillCount(rw.description,n);assert.ok(d.length>=110&&d.length<=160,`${path} description ${d.length}: ${d}`);}
 }
});

test('internal links in rewritten copy go to live sitemap URLs',()=>{
 for(const [path,rw] of m.pageRewrites)for(const text of texts(rw))for(const [,href] of text.matchAll(/\]\((\/[^)\s]*)\)/g))assert.ok(sitemapPaths.has(href),`${path} links to ${href}, which is not a live URL`);
});

test('counts in a topic description match the page data',()=>{
 for(const [path,rw] of m.pageRewrites){
  const page=m.elePages.find(p=>p.path===path);if(!page||!rw.description)continue;
  const acts=rw.description.match(/(\d+) actividades/);if(acts)assert.equal(Number(acts[1]),page.activities.length,`${path}: actividades`);
  const frases=rw.description.match(/(\d+) frases/);if(frases)assert.equal(Number(frases[1]),page.exercise.items.length,`${path}: frases`);
  const clases=rw.description.match(/(\d+) clases interactivas/);if(clases)assert.equal(Number(clases[1]),page.lessonIds.length,`${path}: clases`);
 }
});

test('rewritten copy keeps neutral Spanish with tú and never calls the voices recordings',()=>{
 for(const [path,rw] of m.pageRewrites)for(const text of texts(rw)){
  assert.doesNotMatch(text,/\b(vosotros|vosotras|tenés|querés|podés|sabés|hacés)\b/i,`${path}: ${text}`);
  assert.doesNotMatch(text,/voces? (nativas? )?grabadas?|grabaciones de hablantes nativos\./i,`${path}: ${text}`);
 }
});
