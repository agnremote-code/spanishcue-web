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
 assert.equal(grammar.length,57);
 for(const id of [230,231,232,233,234,235]){
  const l=grammar.find(l=>l.id===id);assert.ok(l,`lesson ${id}`);
  assert.ok(l.path?.startsWith('/gramatica/'));assert.ok(l.grammarTopic);
  assert.equal(l.countryCollection,false,'grammar must never enter the country collection');
 }
 assert.equal(new Set(grammar.map(l=>l.id)).size,57);
 assert.equal(grammar.find(l=>l.id===40).path,'/la-fabrica-de-los-nombres');
 assert.equal(grammar.find(l=>l.id===23).path,'/condicionales');
 assert.ok(grammar.every(l=>l.grammarTopic),'every existing lesson must use the same taxonomy');
});
