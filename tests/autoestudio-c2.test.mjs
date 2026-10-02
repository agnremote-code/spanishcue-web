import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
const compiled = await build({stdin:{contents:`export {c2Modules} from './app/autoestudio/curriculum/modules/c2'; export {c2Objectives} from './app/autoestudio/curriculum/objectives/c2'; export {validateModule,duplicationAudit} from './app/autoestudio/curriculum/validate';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,format:'esm',platform:'node',write:false,logLevel:'error'});
const {c2Modules:modules,c2Objectives:objectives,validateModule,duplicationAudit} = await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const words = s => s.trim().split(/\s+/u).length;
test('C2: veinte semanas completas y cuatro integraciones',()=>{
 assert.equal(modules.length,20);
 assert.deepEqual(modules.filter(m=>m.kind==='checkpoint').map(m=>m.week),[5,10,15,20]);
 for(const m of modules){assert.deepEqual(validateModule(m),[],m.id);assert.equal(m.id,`c2-${String(m.week).padStart(2,'0')}`);}
});
test('C2: densidad, autonomía y mediación verificables',()=>{
 for(const m of modules){
  assert.ok(words(m.reading.text.join(' '))>=600,`${m.id}: lectura insuficiente`);
  assert.ok(words(m.listening.script.map(t=>t.text).join(' '))>=380,`${m.id}: escucha insuficiente`);
  assert.deepEqual(m.listening.stages.map(s=>s.stage),['gist','detail','notice']);
  assert.ok(m.writing.words[0]>=400,m.id);
  assert.ok(m.speaking.tasks.reduce((s,t)=>s+t.seconds,0)>=480,m.id);
  assert.doesNotMatch(JSON.stringify(m),/"(?:en|support|canDoEn)":|\bTODO\b|coming soon|próximamente/,m.id);
 }
});
test('C2: cada objetivo se enseña y se recupera después',()=>{
 const ids=new Set(objectives.map(o=>o.id));assert.equal(ids.size,objectives.length);
 for(const o of objectives){assert.deepEqual(modules.filter(m=>m.newObjectives.includes(o.id)).map(m=>m.week),[o.week],o.id);if(o.week<20) assert.ok(modules.some(m=>m.week>o.week&&m.reviewObjectives.includes(o.id)),o.id);}
 for(const m of modules){for(const id of m.reviewObjectives.filter(id=>id.startsWith('c2.'))){assert.ok(ids.has(id),id);assert.ok(objectives.find(o=>o.id===id).week<m.week,id);}}
});
test('C2: textos y reactivos originales sin duplicaciones exactas',()=>assert.deepEqual(duplicationAudit({a1:[],a2:[],b1:[],b2:[],c1:[],c2:modules}),[]));
test('C2: la integración recupera semanas distintas y las respuestas no son posicionales',()=>{
 for(const m of modules.filter(m=>m.kind==='checkpoint')){
  const weeks=new Set(m.reviewObjectives.map(id=>objectives.find(o=>o.id===id)?.week).filter(Boolean));
  assert.ok(weeks.size>=4,m.id);
  assert.ok(m.practice.exercises.find(e=>e.id.endsWith('recuperacion')).items.length>=8,m.id);
 }
 const answers=modules.flatMap(m=>m.quiz.items.filter(i=>i.type==='choice').map(i=>i.answer));
 assert.ok(answers.includes(0)&&answers.includes(1));
 for(const m of modules)assert.doesNotMatch(m.quiz.items.find(i=>i.type==='transform').instruction,/Escribe literalmente la segunda/);
});

test('C2: modelos completos de integración y extractos identificados',()=>{
 for(const m of modules){
  if(m.kind==='checkpoint'){const n=words(m.writing.model.join(' '));assert.ok(n>=m.writing.words[0]&&n<=m.writing.words[1],`${m.id}: ${n}`);}
  else assert.match(m.writing.model[0],/^Modelo parcial de apertura/);
 }
});
test('C2: recuperación de variación usa estímulos y no inventa evidencia acústica',()=>{
 for(const m of modules){
  const items=m.practice.exercises.find(e=>e.id.endsWith('recuperacion')).items;
  for(const i of items){
   assert.doesNotMatch(i.model,/Una respuesta válida debe señalar el fragmento/);
   if(i.prompt.includes('Recuperación c2.gram.variacion-gramatical.')){assert.match(i.prompt,/Vos tenés/);assert.match(i.prompt,/A Juan le vi/);}
   if(i.prompt.includes('Recuperación c2.pron.variacion-avanzada.')){assert.match(i.prompt,/Notación esquemática/);assert.match(i.prompt,/Si no hay muestra/);}
  }
 }
});
