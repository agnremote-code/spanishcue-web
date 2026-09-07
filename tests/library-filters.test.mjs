import test from 'node:test';
import assert from 'node:assert/strict';
import {filterLessons} from '../app/library-filters.mjs';

const lessons = [
  {id:1,level:'A1',category:'Gramática',title:'Nombres',subtitle:'Género',tag:'PCIC'},
  {id:2,level:'A2',category:'Gramática',title:'Comparación',subtitle:'Habitaciones',tag:'PCIC'},
  {id:3,level:'A1',levels:['A1','A2'],category:'Conversación',title:'Un viaje',subtitle:'Lugares',tag:'Hablar'},
  {id:4,level:'A1',levels:['A1','A2'],category:'Gramática',title:'El verbo',subtitle:'Presente',tag:'PCIC'},
];

test('level and category are intersected in either selection order',()=>{
  assert.deepEqual(filterLessons(lessons,{level:'A2',category:'Gramática'}).map(x=>x.id),[2,4]);
  assert.deepEqual(filterLessons(lessons,{category:'Gramática',level:'A2'}).map(x=>x.id),[2,4]);
  assert.deepEqual(filterLessons(lessons,{level:'A1',category:'Conversación'}).map(x=>x.id),[3]);
});
test('accent-insensitive search remains combined with both facets',()=>{
  assert.deepEqual(filterLessons(lessons,{level:'A2',category:'Gramática',query:'comparacion'}).map(x=>x.id),[2]);
  assert.equal(filterLessons(lessons,{level:'A1',category:'Gramática',query:'comparacion'}).length,0);
});
test('all selection only clears its own facet',()=>{
  assert.deepEqual(filterLessons(lessons,{level:'Todos',category:'Gramática'}).map(x=>x.id),[1,2,4]);
  assert.deepEqual(filterLessons(lessons,{level:'A2',category:'Todas'}).map(x=>x.id),[2,3,4]);
  assert.equal(filterLessons(lessons).length,4);
});
