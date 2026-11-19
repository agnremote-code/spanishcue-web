// «Fichas completas y gratis» (owner request 2026-11-19): a free section of COMPLETE worksheets for
// teachers and resource sites to use and link. Owner rule: nothing in it leads to a payment.
import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/material-ele/fichas-gratis.ts"; export {fichaContent} from "./app/material-ele/ficha-content.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {indiceEntries} from "./app/material-ele/indice.ts"; export {isSearchPrivatePath,isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('a large set of complete worksheets across every level',async()=>{
 assert.ok(m.fichasGratis.length>=90,`${m.fichasGratis.length} free worksheets`);
 assert.equal(m.fichasGratis.length,m.FICHAS_GRATIS_IDS.length,'every curated id has a live class');
 assert.equal(new Set(m.FICHAS_GRATIS_IDS).size,m.FICHAS_GRATIS_IDS.length);
 for(const level of m.FICHAS_GRATIS_LEVELS)assert.ok(m.fichasGratis.filter(p=>p.level===level).length>=10,level);
 for(const p of m.fichasGratis){
  assert.ok(p.freeTitle.length<=78,`${p.slug} title ${p.freeTitle.length}`);
  assert.ok(p.freeDescription.length>=110&&p.freeDescription.length<=165,`${p.slug} description ${p.freeDescription.length}`);
  assert.ok(!m.packLevelBySlug.has(p.slug));
  const c=await m.fichaContent(p.id,false);
  assert.ok(c.theory.length+c.tables.length>=1,`${p.slug} theory`);
  assert.ok(c.exercises.length>=8,`${p.slug} is complete: ${c.exercises.length} exercises`);
  for(const e of c.exercises)assert.ok(e.answer,`${p.slug} answer key`);
 }
});

test('free section is indexed: sitemap, index, public and edge-cached',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 for(const path of [m.FICHAS_GRATIS_PATH,...m.fichasGratis.map(p=>p.freePath),...m.FICHAS_GRATIS_LEVELS.map(m.packPath)]){
  assert.ok(urls.has('https://spanishcue.com'+path),path);
  assert.ok(m.indiceEntries.some(x=>x.path===path),path);
  assert.equal(m.isSearchPrivatePath(path),false);assert.equal(m.isEdgeCacheablePath(path),true);
 }
});

test('the social twin is not in the sitemap and stays out of the clean section',()=>{
 const urls=m.sitemap().map(x=>x.url);
 assert.ok(!urls.some(u=>u.includes('/fichas-para-profes')));
});

test('nothing in the free section leads to a payment (owner rule)',()=>{
 const dir='app/material-ele/fichas-gratis';
 const files=[];const walk=d=>{for(const e of readdirSync(d,{withFileTypes:true})){if(e.isDirectory())walk(join(d,e.name));else files.push(join(d,e.name));}};walk(dir);
 for(const f of [...files,'app/material-ele/fichas-gratis.ts']){
  const src=readFileSync(f,'utf8');
  assert.doesNotMatch(src,/EleBuyBand|EleTopbar|GrowthFooter|GrowthTopbar|CtaBand|Breadcrumbs|PRICE_LABEL|PRICING_PATH|\/pricing|checkout|lessonPath|lessonCards|US\$|Suscri|suscríbete|\bPRO\b/,f);
 }
 const layout=readFileSync('app/layout.tsx','utf8');
 assert.match(layout,/freeSection = \/\^\\\/material-ele\\\/fichas-gratis/);
 assert.match(layout,/bautiRoute = !currentLesson && !freeSection/);
});
