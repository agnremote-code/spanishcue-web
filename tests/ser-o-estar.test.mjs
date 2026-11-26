import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/ser-o-estar/data.ts"; export {usos,adjetivos} from "./app/ser-o-estar/contenido.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isEdgeCacheablePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
const answer=(slug,i)=>{const it=m.serPageBySlug(slug).quiz[i];return it.options[it.answer];};

test('every page resolves with valid metadata and two forms per gap',()=>{
 const slugs=m.serSlugs();
 assert.equal(m.usos.length,15);assert.equal(m.adjetivos.length,18);
 assert.equal(new Set(slugs).size,slugs.length,'use and adjective slugs never collide');
 for(const slug of slugs){
  const p=m.serPageBySlug(slug);
  assert.ok(p.title.length<=78&&p.title.endsWith('| SpanishCue'),p.title);
  assert.ok(p.description.length>=110&&p.description.length<=165,`${slug}: ${p.description.length} ${p.description}`);
  assert.equal(p.faq.length,3);assert.ok(p.related.length>=5,slug);
  for(const it of p.quiz){assert.equal(it.options.length,2);assert.notEqual(it.options[0],it.options[1]);assert.ok(it.options.every(o=>o&&!/undefined/.test(o)));assert.ok(it.before.trim()&&!/^¿?$/.test(it.before.trim()),`${slug}: a gap never opens the sentence`);}
 }
 assert.equal(m.serPageBySlug('nope'),undefined);
});

test('use pages: own verb first, two contrast items with the other verb',()=>{
 for(const u of m.usos){
  const p=m.serPageBySlug(u.slug);
  assert.equal(p.quiz.length,8);
  const own=u.verb==='ser'?0:1;
  assert.ok(p.quiz.slice(0,6).every(it=>it.answer===own),u.slug);
  assert.ok(p.quiz.slice(6).every(it=>it.answer===1-own),`${u.slug} contrast`);
 }
});

test('adjective pages mix both verbs and explain each meaning',()=>{
 for(const a of m.adjetivos){
  const p=m.serPageBySlug(a.slug);
  assert.equal(p.quiz.length,6);
  assert.equal(p.quiz.filter(it=>it.answer===0).length,3,`${a.slug}: three ser`);
  assert.ok(p.quiz.every(it=>it.why.includes(`${it.answer===0?"Ser":"Estar"} ${a.adj}»`)));
 }
});

test('forms come from the engine',()=>{
 assert.equal(answer('origen-y-nacionalidad',0),'es');
 assert.equal(answer('origen-y-nacionalidad',5),'soy');
 assert.equal(answer('hora-y-fecha',5),'fue');
 assert.equal(answer('ubicacion',4),'estás');
 assert.equal(answer('listo',1),'estás');
 assert.deepEqual(m.serPageBySlug('listo').quiz[0].options,['es','está']);
 assert.equal(m.serMixed().length,12);
});

test('neutral Spanish: no vosotros forms and no first-person preterite',()=>{
 for(const x of [...m.usos,...m.adjetivos])for(const raw of x.items){
  const [, person, tense]=raw.split('|');
  assert.ok(['0','1','2','3','5'].includes(person),raw);
  if(tense==='in')assert.notEqual(person,'0',raw);
 }
});

test('sitemap and edge cache',()=>{
 const urls=new Set(m.sitemap().map(x=>x.url));
 assert.ok(urls.has('https://spanishcue.com/ser-o-estar'));
 for(const slug of m.serSlugs())assert.ok(!urls.has('https://spanishcue.com/ser-o-estar/'+slug),slug); // lote N3: noindex
 assert.ok(m.isEdgeCacheablePath('/ser-o-estar/listo'));
});
