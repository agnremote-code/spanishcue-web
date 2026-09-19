import test from 'node:test';
import assert from 'node:assert/strict';
import {filterLessons,availableLevels,levelForCategory} from '../app/library-filters.mjs';

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
  assert.deepEqual(filterLessons(lessons,{level:'A2',category:'Todas'}).map(x=>x.id),[2,4,3]);
  assert.equal(filterLessons(lessons).length,4);
});

test('grammar uses the central curriculum sequence after level and search filters',()=>{
  const shuffled = [
    {...lessons[1],curriculumSequence:16},
    {...lessons[3],curriculumSequence:7},
    {...lessons[0],curriculumSequence:1},
  ];
  assert.deepEqual(filterLessons(shuffled,{category:'Gramática'}).map(x=>x.id),[1,4,2]);
  assert.deepEqual(filterLessons(shuffled,{category:'Gramática',level:'A2'}).map(x=>x.id),[4,2]);
  assert.deepEqual(filterLessons(shuffled,{category:'Gramática',query:'presente'}).map(x=>x.id),[4]);
});

test('all categories use route sequence instead of creation order',()=>{
  const shuffled = [
    {id:5,level:'A2',category:'Conversación',routeSequence:2},
    {id:2,level:'A1',category:'Gramática',routeSequence:2},
    {id:4,level:'A2',category:'Conversación',routeSequence:1},
    {id:1,level:'A1',category:'Gramática',routeSequence:1},
  ];
  assert.deepEqual(filterLessons(shuffled).map(x=>x.id),[1,2,4,5]);
  assert.deepEqual(filterLessons(shuffled,{category:'Conversación'}).map(x=>x.id),[4,5]);
});

test('each category offers only its own levels, including multi-level lessons',()=>{
  const all=[...lessons,
    {id:5,level:'B1',category:'Escucha'},
    {id:6,level:'A1',category:'Fonética'},
    {id:7,level:'B2',category:'Vocabulario'},
  ];
  for(const [category,expected] of Object.entries({'Gramática':['A1','A2'],'Conversación':['A1','A2'],'Escucha':['B1'],'Fonética':['A1'],'Vocabulario':['B2']})) {
    assert.deepEqual(availableLevels(all,category),expected);
    for(const level of expected) assert.ok(filterLessons(all,{category,level}).every(l=>l.category===category));
  }
  assert.equal(levelForCategory(all,'A2','Conversación'),'A2');
  assert.equal(levelForCategory(all,'A2','Escucha'),'Todos');
  assert.equal(levelForCategory(all,'Todos','Vocabulario'),'Todos');
  assert.equal(levelForCategory(all,'B2','Todas'),'B2');
  assert.deepEqual(availableLevels([], 'Conversación'),[]);
});
