import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/indicativo-o-subjuntivo/data.ts"; export {expresiones} from "./app/indicativo-o-subjuntivo/expresiones.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const item=(slug,i)=>{const it=m.modoPageBySlug(slug).playable[i];return [it.options[it.answer],it.options[1-it.answer]];};

test('every expression page resolves: two different real forms, valid metadata, unique slugs',()=>{
 assert.ok(m.expresiones.length>=36);
 assert.equal(new Set(m.expresiones.map(e=>e.slug)).size,m.expresiones.length);
 for(const e of m.expresiones){
  assert.match(e.slug,/^[a-z-]+$/);
  const p=m.modoPageBySlug(e.slug);
  assert.ok(p.title.length<=78&&p.title.endsWith('| SpanishCue'),p.title);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${e.slug}: ${p.description.length}`);
  assert.equal(p.faq.length,4);assert.ok(p.related.length>=3,e.slug);
  assert.equal(p.playable.length,6,e.slug);
  for(const it of p.playable){
   assert.ok(it.options.every(o=>o&&!/undefined|\s/.test(o)),`${e.slug}: ${it.before}`);
   assert.notEqual(it.options[0],it.options[1],`${e.slug}: ${it.before}`);
   assert.ok(!/vosotros|vuestr/.test(it.before+it.after));
  }
  if(e.mood!=='depende')assert.ok(p.playable.every(it=>it.correctMood===e.mood),e.slug);
  else assert.ok(new Set(p.playable.map(it=>it.correctMood)).size===2,`${e.slug} mixes both moods`);
 }
 assert.equal(m.modoPageBySlug('nope'),undefined);
});

test('the engine produces the expected forms',()=>{
 assert.deepEqual(item('quiero-que',0),['vengas','vienes']);
 assert.deepEqual(item('a-menos-que',3),['haya','hay']);
 assert.deepEqual(item('ya-que',1),['hay','haya']);
 assert.deepEqual(item('como-si',0),['supiera','sabe']);
 assert.deepEqual(item('cuando',0),['llegue','llegaré']);
 assert.deepEqual(item('creo-que',1),['lloverá','llueva']);
 const answers=m.expresiones.flatMap(e=>m.modoPageBySlug(e.slug).playable.map(it=>it.answer));
 assert.ok(answers.filter(a=>a===0).length>40&&answers.filter(a=>a===1).length>40,'right button is not always in the same place');
});

test('the hub is in the sitemap, the expression pages are noindex (lote N3), all edge-cached',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 assert.ok(urls.has('https://spanishcue.com/indicativo-o-subjuntivo'));
 for(const e of m.expresiones)assert.ok(!urls.has('https://spanishcue.com/indicativo-o-subjuntivo/'+e.slug),e.slug);
 assert.ok(m.isEdgeCacheablePath('/indicativo-o-subjuntivo')&&m.isEdgeCacheablePath('/indicativo-o-subjuntivo/ojala'));
 assert.equal(m.mixedItems().length,12);
});
