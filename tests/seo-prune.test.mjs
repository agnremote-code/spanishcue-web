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

test('guide prose links skip the redirect and point at the destination',()=>{
 const src=readFileSync('app/material-ele/guia-components.tsx','utf8');
 assert.match(src,/href=\{livePath\(match\[3\]\)\}/);
});

test('each batch of the pruning plan changes at most 20 URLs',()=>{
 const src=readFileSync('app/seo-prune.ts','utf8');
 const counts={};let cur=null;
 for(const line of src.split('\n')){const b=line.match(/Lote (R\d+)/);if(b)cur=b[1];if(cur&&/^\s*\["\//.test(line))counts[cur]=(counts[cur]??0)+1;}
 for(const [b,n] of Object.entries(counts))assert.ok(n<=20,`${b}: ${n} URLs`);
});

test('noindexed families leave the sitemap and carry noindex, follow',async()=>{
 const r2=await build({stdin:{contents:'export {robotsHeaderFor} from "./app/seo.ts"; export {isPrunedNoindexPath} from "./app/seo-prune.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
 const s=await import('data:text/javascript;base64,'+Buffer.from(r2.outputFiles[0].text).toString('base64'));
 for(const p of sitemapPaths)assert.ok(!s.isPrunedNoindexPath(p),`${p} is noindex but listed`);
 assert.equal(s.robotsHeaderFor('/spanish-verbs/tener'),'noindex, follow');
 assert.equal(s.robotsHeaderFor('/spanish-verbsx'),null);
 assert.equal(s.robotsHeaderFor('/ser-o-estar/listo'),'noindex, follow');
 assert.equal(s.robotsHeaderFor('/ser-o-estar'),null);
 assert.equal(s.robotsHeaderFor('/dudas-del-espanol/haber-o-a-ver'),null);
 assert.equal(s.robotsHeaderFor('/material-ele/cultura/argentina/a1'),'noindex, follow');
 assert.equal(s.robotsHeaderFor('/material-ele/formatos/comprension-auditiva/a1'),null);
 assert.equal(s.robotsHeaderFor('/material-ele/preguntas/b1'),'noindex, follow');
 assert.equal(s.robotsHeaderFor('/material-ele/preguntas'),null);
 assert.equal(s.robotsHeaderFor('/spanish-grammar-lessons/b2'),'noindex, follow');
 assert.equal(s.robotsHeaderFor('/spanish-grammar-lessons/b1'),null);
});
