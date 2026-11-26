import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/seo-prune.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {indiceEntries} from "./app/material-ele/indice.ts"; export {retiredTemaLevelPaths, temaPageByPath, temaLevelPageByPath} from "./app/material-ele/temas.ts"; export {ejercicioPages} from "./app/material-ele/actividades.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const sitemapPaths=new Set(m.sitemap().map(e=>new URL(e.url).pathname));

test('every consolidated URL points straight at a live, listed URL (no chains, no loops)',()=>{
 assert.ok(m.prunedRedirects.size>0);
 for(const [from,to] of m.prunedRedirects){
  assert.ok(from.startsWith('/')&&to.startsWith('/')&&from!==to,`${from} → ${to}`);
  assert.ok(!m.prunedRedirects.has(to),`${from} → ${to} is a chain`);
  assert.ok(sitemapPaths.has(to),`${to} (destination of ${from}) is not in the sitemap`);
  assert.ok(!sitemapPaths.has(from),`${from} redirects but is still in the sitemap`);
 }
});

test('consolidated URLs leave the Material ELE index and its feed',()=>{
 for(const e of m.indiceEntries)assert.ok(!m.isPrunedPath(e.path),e.path);
});

test('every consolidated URL was a real generated page, so the 301 replaces something that existed',()=>{
 const generated=new Set([...m.temaPageByPath.keys(),...m.temaLevelPageByPath.keys(),...m.ejercicioPages.map(p=>p.path)]);
 for(const from of m.prunedRedirects.keys())assert.ok(generated.has(from),`${from} is not a generated page`);
});

test('retired level pages land on the final URL in one hop',()=>{
 for(const [from,to] of m.retiredTemaLevelPaths){const end=m.livePath(to);assert.ok(!m.prunedRedirects.has(end),`${from} → ${to} → ${end}`);}
});

test('the Worker answers consolidated URLs with a 301 before routing',()=>{
 const src=readFileSync('worker/index.ts','utf8');
 assert.match(src,/prunedRedirects\.get\(url\.pathname\)/);
 assert.match(src,/Response\.redirect\(new URL\(prunedTo, url\), 301\)/);
});

test('each batch of the pruning plan changes at most 20 URLs',()=>{
 const src=readFileSync('app/seo-prune.ts','utf8');
 const counts={};let cur=null;
 for(const line of src.split('\n')){const b=line.match(/Lote (R\d+)/);if(b)cur=b[1];if(cur&&/^\s*\["\//.test(line))counts[cur]=(counts[cur]??0)+1;}
 for(const [b,n] of Object.entries(counts))assert.ok(n<=20,`${b}: ${n} URLs`);
});
