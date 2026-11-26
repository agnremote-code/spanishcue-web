import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/por-o-para/data.ts"; export {usosPorPara} from "./app/por-o-para/usos.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('every use page resolves: own preposition first, two contrast items, valid metadata',()=>{
 assert.equal(m.usosPorPara.length,15);
 assert.equal(new Set(m.usosPorPara.map(u=>u.slug)).size,15);
 for(const u of m.usosPorPara){
  const p=m.porParaPageBySlug(u.slug);
  assert.ok(p.title.length<=78&&p.title.endsWith('| SpanishCue'),p.title);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${u.slug}: ${p.description.length}`);
  assert.equal(p.quiz.length,8);assert.equal(p.faq.length,3);assert.ok(p.related.length>=5,u.slug);
  const own=u.prep==='por'?0:1;
  assert.ok(p.quiz.slice(0,6).every(it=>it.answer===own),u.slug);
  assert.ok(p.quiz.slice(6).every(it=>it.answer===1-own),`${u.slug} contrast`);
  for(const s of u.items){assert.equal(s.split('___').length,2,s);assert.ok(!/^[¿¡]?___/.test(s),`a gap never opens the sentence: ${s}`);}
 }
 assert.equal(m.porParaPageBySlug('nope'),undefined);
 assert.equal(m.porParaMixed().length,12);
 assert.equal(new Set(m.porParaMixed().map(it=>it.answer)).size,2);
});

test('sitemap and edge cache',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 assert.ok(urls.has('https://spanishcue.com/por-o-para'));
 for(const u of m.usosPorPara)assert.ok(!urls.has('https://spanishcue.com/por-o-para/'+u.slug),u.slug); // lote N3: noindex
 assert.ok(m.isEdgeCacheablePath('/por-o-para/causa'));
});
