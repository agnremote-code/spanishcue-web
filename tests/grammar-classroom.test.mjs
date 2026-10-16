import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
import {filterLessons, familyLessonsForCategory} from '../app/library-filters.mjs';

const result=await build({entryPoints:['app/lesson-catalog.ts'],bundle:true,write:false,platform:'node',format:'esm'});
const {lessons}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));

test('a teacher can combine a grammar topic with level and text search',()=>{
 const fixtures=[
  {id:1,category:'Gramática',level:'B1',title:'Por y para',subtitle:'',tag:'',grammarTopic:'preposiciones'},
  {id:2,category:'Gramática',level:'B2',title:'Por y para avanzado',subtitle:'',tag:'',grammarTopic:'preposiciones'},
  {id:3,category:'Gramática',level:'B1',title:'Por qué cambia el pasado',subtitle:'',tag:'',grammarTopic:'tiempos'},
 ];
 assert.deepEqual(filterLessons(fixtures,{category:'Gramática',level:'B1',query:'por',grammarTopic:'preposiciones'}).map(x=>x.id),[1]);
 assert.deepEqual(familyLessonsForCategory(fixtures,{category:'Gramática',grammarTopic:'preposiciones'}).map(x=>x.id),[1,2]);
});

test('the six missing teacher-led lessons are individually routable alongside all existing grammar',()=>{
 const grammar=lessons.filter(l=>l.category==='Gramática');
 assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length,'global lesson identities remain unique alongside country additions');
 assert.equal(grammar.length,58);
 for(const id of [230,231,232,233,234,235,239]){
  const l=grammar.find(l=>l.id===id);assert.ok(l,`lesson ${id}`);
  assert.ok(l.path?.startsWith('/gramatica/'));assert.ok(l.grammarTopic);
  assert.equal(l.countryCollection,false,'grammar must never enter the country collection');
 }
 assert.equal(new Set(grammar.map(l=>l.id)).size,58);
 assert.equal(grammar.find(l=>l.id===40).path,'/la-fabrica-de-los-nombres');
 assert.equal(grammar.find(l=>l.id===23).path,'/condicionales');
 assert.ok(grammar.every(l=>l.grammarTopic),'every existing lesson must use the same taxonomy');
});

test('every grammar class has its own clean thumbnail and the first class is listed under A1',async()=>{
 const {existsSync}=await import('node:fs');
 const grammar=lessons.filter(l=>l.category==='Gramática');
 for(const l of grammar){
  assert.equal(l.image,`/grammar-thumbnails/${l.id}.webp`,`${l.id} uses its own grammar thumbnail`);
  assert.ok(existsSync(`public${l.image}`),`${l.image} exists`);
 }
 const {thumbnails}=await import('../scripts/grammar-thumbnails/data.mjs');
 assert.deepEqual(thumbnails.map(t=>t.id).sort((a,b)=>a-b),grammar.map(l=>l.id).sort((a,b)=>a-b));
 const first=grammar.find(l=>l.id===239);
 assert.equal(first.level,'A1');
 assert.ok(!grammar.some(l=>l.level==='A0'||l.levels?.includes('A0')),'no grammar class sits alone in A0');
});

test('every conversation and grammar card has its own real recording that plays on hover',async()=>{
 const {existsSync,statSync}=await import('node:fs');
 const bundle=async entry=>{const r=await build({entryPoints:[entry],bundle:true,write:false,platform:'node',format:'esm'});return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));};
 const {catalogLessons}=await bundle('app/conversation-families/catalog.ts');
 const {previewVideo}=await bundle('app/conversation-preview-videos.ts');
 const folders={Conversación:'conversation-previews',Gramática:'grammar-previews'};
 const cards=catalogLessons.filter(l=>folders[l.category]);
 assert.ok(cards.length>=108);
 for(const card of cards){
  const video=previewVideo(card.id);
  assert.equal(video,`/${folders[card.category]}/${card.id}.mp4`,`${card.id} has a hover recording`);
  assert.ok(existsSync(`public${video}`)&&statSync(`public${video}`).size<400_000,`${video} exists and stays small`);
 }
 assert.equal(previewVideo(-1),null,'cards without a recording keep their still thumbnail');
});
