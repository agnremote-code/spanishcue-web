import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
import {build} from 'esbuild';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const r=await build({stdin:{contents:'export {prunedRedirects} from "./app/seo-prune.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const {prunedRedirects}=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

// SEO plan step 8 (docs/seo-plan/07_TECNICO.md): internal links point at the final URL, never at a URL that
// answers 301. The crawl of 26/11 found worksheet pages and grammar topic pages still linking consolidated URLs.
const paths=['/material-ele/ficha/la-fabrica-de-los-nombres','/material-ele/ficha/indefinido-e-imperfecto','/material-ele/gramatica/preterito-indefinido','/material-ele/gramatica','/material-ele','/material-ele/indice','/material-ele/fichas','/material-ele/actividades','/material-ele/guia/ejercicios-ele-con-soluciones','/ser-o-estar'];
for(const path of paths)test(`internal links skip consolidated URLs: ${path}`,async()=>{
 const response=await fetch(origin+path);assert.equal(response.status,200);
 const d=new JSDOM(await response.text()).window.document;
 const hrefs=[...d.querySelectorAll('a[href^="/"]')].map(a=>a.getAttribute('href').split(/[?#]/)[0]);
 assert.ok(hrefs.length>10,path);
 const redirected=[...new Set(hrefs.filter(h=>prunedRedirects.has(h)))];
 assert.deepEqual(redirected,[],`${path} links URLs that answer 301`);
});
