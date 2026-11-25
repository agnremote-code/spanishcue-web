import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/indefinido-o-imperfecto/data.ts"; export {marcadores} from "./app/indefinido-o-imperfecto/marcadores.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const item=(slug,i)=>{const it=m.pasadoPageBySlug(slug).playable[i];return [it.options[it.answer],it.options[1-it.answer]];};

test('every marker page resolves: two different forms, valid metadata, no first-person preterite',()=>{
 assert.ok(m.marcadores.length>=26);
 assert.equal(new Set(m.marcadores.map(x=>x.slug)).size,m.marcadores.length);
 for(const x of m.marcadores){
  const p=m.pasadoPageBySlug(x.slug);
  assert.ok(p.title.length<=78&&p.title.endsWith('| SpanishCue'),p.title);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${x.slug}: ${p.description.length}`);
  assert.equal(p.playable.length,6);assert.equal(p.faq.length,4);assert.ok(p.related.length>=3,x.slug);
  for(const raw of x.items){const person=Number(raw.split('|')[2]);assert.ok([1,2,5].includes(person),`${x.slug}: persons 1, 2 or 5 only (${raw})`);assert.ok(!raw.startsWith('___')&&!raw.startsWith('¿___'),`${x.slug}: a gap never opens the sentence`);}
  for(const it of p.playable){assert.notEqual(it.options[0],it.options[1]);assert.ok(it.options.every(o=>o&&!/undefined/.test(o)));}
  if(x.uso!=='depende')assert.ok(p.playable.every(it=>it.correctTense===x.uso),x.slug);
  else assert.equal(new Set(p.playable.map(it=>it.correctTense)).size,2,`${x.slug} mixes both tenses`);
 }
 assert.equal(m.pasadoPageBySlug('nope'),undefined);
});

test('forms come from the engine, pronominal verbs included',()=>{
 assert.deepEqual(item('ayer',0),['fue','iba']);
 assert.deepEqual(item('hace-tiempo',0),['se mudaron','se mudaban']);
 assert.deepEqual(item('un-dia',3),['te diste cuenta','te dabas cuenta']);
 assert.deepEqual(item('hora-y-edad',1),['tenía','tuvo']);
 assert.equal(m.pasadoPageBySlug('hace-tiempo').verbs.some(v=>v.verb==='mudar'),true);
 assert.equal(m.pasadoMixed().length,12);
});

test('sitemap and edge cache',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 assert.ok(urls.has('https://spanishcue.com/indefinido-o-imperfecto'));
 for(const x of m.marcadores)assert.ok(urls.has('https://spanishcue.com/indefinido-o-imperfecto/'+x.slug),x.slug);
 assert.ok(m.isEdgeCacheablePath('/indefinido-o-imperfecto/ayer'));
});
