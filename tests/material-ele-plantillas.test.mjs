import assert from 'node:assert/strict';
import test from 'node:test';
import {existsSync,readFileSync,statSync} from 'node:fs';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {default as sitemap} from "./app/sitemap.ts"; export {isEnglishDefaultPath,isEdgeCacheablePath,isSearchPrivatePath} from "./app/seo.ts"; export * from "./app/material-ele/plantillas.ts"; export {indiceEntries,pageDates,materialEleAtom} from "./app/material-ele/indice.ts"; export {elePages} from "./app/material-ele/data.ts"; export {guiaPages} from "./app/material-ele/guias.ts"; export {FICHAS_PATH} from "./app/material-ele/fichas.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const {designs}=await import('../scripts/plantillas/designs.mjs');
const known=new Set([m.FICHAS_PATH,m.PLANTILLAS_PATH,...m.elePages.map(p=>p.path),...m.guiaPages.map(p=>p.path),...m.plantillas.map(p=>p.path)]);

test('every template has bounded metadata, real guidance and links that resolve',()=>{
 assert.ok(m.plantillas.length>=12);
 assert.equal(new Set(m.plantillas.map(p=>p.slug)).size,m.plantillas.length);
 assert.equal(new Set(m.plantillas.map(p=>p.title)).size,m.plantillas.length);
 assert.ok(m.plantillasDescription.length>=110&&m.plantillasDescription.length<=180,`index description ${m.plantillasDescription.length}`);
 for(const p of m.plantillas){
  assert.equal(p.path,`${m.PLANTILLAS_PATH}/${p.slug}`);
  assert.ok(p.title.length<=72,`${p.slug} title ${p.title.length}`);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${p.slug} description ${p.description.length}`);
  assert.ok(p.intro.length>=180,`${p.slug} intro`);
  assert.ok(p.includes.length>=3&&p.steps.length>=4&&p.faq.length>=2&&p.tip.length>=80,p.slug);
  assert.ok(p.related.length>=3,p.slug);
  for(const link of p.related)assert.ok(known.has(link.href),`${p.slug} links to unknown ${link.href}`);
  const all=[p.title,p.description,p.intro,p.tip,...p.includes,...p.steps,...p.faq.flatMap(f=>[f.question,f.answer])].join('\n');
  assert.doesNotMatch(all,/\d+ ?€|\$\d|certificado oficial de SpanishCue/i,'no prices, no official-certificate claim');
 }
});

test('every template has its printed files, and the printed design matches the page',()=>{
 assert.deepEqual(Object.keys(designs).sort(),m.plantillas.map(p=>p.slug).sort());
 for(const p of m.plantillas){
  const files=m.plantillaFiles(p.slug);const design=designs[p.slug];
  assert.equal(design.pages.length,p.sheets,`${p.slug} sheets`);
  assert.equal(Boolean(design.landscape),p.landscape,`${p.slug} orientation`);
  for(const path of [files.a4,files.letter]){
   const file=`public${path}`;assert.ok(existsSync(file),file);
   const pdf=readFileSync(file);
   assert.equal(pdf.subarray(0,5).toString(),'%PDF-',file);
   assert.equal((pdf.toString('latin1').match(/\/Type \/Page\b(?!s)/g)??[]).length,p.sheets,`${file} page count`);
   assert.ok(pdf.length<600_000,`${file} is ${pdf.length} bytes`);
  }
  for(const path of [files.preview,files.pin]){const file=`public${path}`;assert.ok(existsSync(file),file);const size=statSync(file).size;assert.ok(size>20_000&&size<450_000,`${file} ${size}`);}
 }
 assert.match(designs['certificado-de-curso'].pages[0].body,/No es un certificado oficial de nivel/);
 assert.match(designs['acuerdo-de-clases-y-cancelaciones'].pages[0].body,/No es asesoramiento legal/);
});

test('templates are indexed: sitemap with preview image, index, feed, dates, Spanish-first and edge-cached',()=>{
 const byUrl=new Map(m.sitemap().map(x=>[x.url,x]));
 const feed=m.materialEleAtom();
 for(const path of [m.PLANTILLAS_PATH,...m.plantillas.map(p=>p.path)]){
  const e=byUrl.get('https://spanishcue.com'+path);assert.ok(e,path);
  assert.ok(e.images?.length>=1,'preview image');
  assert.equal(e.lastModified,m.pageDates(path).dateModified);
  assert.equal(m.pageDates(path).datePublished,m.plantillasPublished);
  assert.ok(m.indiceEntries.some(x=>x.path===path&&x.section==='Plantillas'));
  assert.ok(feed.includes(`https://spanishcue.com${path}`));
  assert.equal(m.isEnglishDefaultPath(path),false);assert.equal(m.isSearchPrivatePath(path),false);assert.equal(m.isEdgeCacheablePath(path),true);
 }
});
