import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
const compiled = await build({stdin:{contents:`export {b1Modules} from './app/autoestudio/curriculum/modules/b1'; export {b1Objectives} from './app/autoestudio/curriculum/objectives/b1'; export {validateModule, moduleExercises} from './app/autoestudio/curriculum/validate'; export {SECTION_ORDER} from './app/autoestudio/curriculum/types';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,format:'esm',platform:'node',write:false,logLevel:'error'});
const {b1Modules: modules,b1Objectives: objectives,validateModule,moduleExercises,SECTION_ORDER} = await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const words = text => text.trim().split(/\s+/u).length;
test('B1 has twenty substantial, Spanish-first weeks and four integrated checkpoints',()=>{
 assert.equal(modules.length,20);
 assert.deepEqual(modules.filter(m=>m.kind==='checkpoint').map(m=>m.week),[5,10,15,20]);
 for(const m of modules){
  assert.deepEqual(validateModule(m),[],m.id);
  for(const key of SECTION_ORDER) assert.ok(m[key],`${m.id}/${key}`);
  assert.ok(words(m.reading.text.join(' '))>=180,`${m.id} reading`);
  assert.ok(words(m.listening.script.map(x=>x.text).join(' '))>=170,`${m.id} listening`);
  assert.ok(m.writing.words[0]>=130 && words(m.writing.model.join(' '))>=90,`${m.id} writing`);
  assert.ok(m.speaking.tasks.some(x=>x.seconds>=120),`${m.id} sustained speaking`);
  assert.ok(m.speaking.tasks.some(x=>/pregunta|negocia|responde|aclara|interlocutor/iu.test(x.prompt)),`${m.id} interaction`);
  assert.deepEqual(m.listening.stages.map(x=>x.stage),['gist','detail','notice']);
  assert.doesNotMatch(JSON.stringify(m),/"(?:support|en|canDoEn)":|\bTODO\b|coming soon|placeholder/);
 }
});
test('B1 objectives are taught once and retrieved through explicit tasks',()=>{
 const ids=new Set(objectives.map(o=>o.id));
 for(const o of objectives){
  assert.equal(modules.filter(m=>m.newObjectives.includes(o.id)).length,1,o.id);
  assert.ok(modules[o.week-1].newObjectives.includes(o.id));
  if(o.week<20) assert.ok(modules.some(m=>m.week>o.week&&m.reviewObjectives.includes(o.id)),`${o.id} later retrieval`);
 }
 for(const m of modules){
  for(const id of m.newObjectives) assert.ok(ids.has(id),id);
  assert.ok(moduleExercises(m).some(x=>x.id.endsWith('retrieval')),`${m.id} explicit retrieval`);
 }
});
test('B1 original long inputs and production tasks are distinct',()=>{
 for(const select of [m=>m.reading.text.join(' '),m=>m.listening.script.map(x=>x.text).join(' '),m=>m.writing.task,m=>m.writing.model.join(' ')]){
  assert.equal(new Set(modules.map(select)).size,20);
 }
});

test('B1 paraphrase assessment accepts production and supplies source-dependent retrieval',()=>{
 for(const m of modules){
  assert.ok(!m.quiz.items.some(x=>x.type==='transform'),m.id+' must not exact-match an open paraphrase');
  const reformulation=m.quiz.items.find(x=>x.type==='open'&&x.prompt.startsWith('Reformulación'));
  assert.ok(reformulation?.model&&reformulation.checklist.length>=3,m.id+' reformulation has formative evidence');
  for(const item of moduleExercises(m).filter(x=>x.id.endsWith('retrieval')).flatMap(x=>x.items)){
   if(/recupera la semana (2|4|6|10|13|15|19):/.test(item.prompt)) assert.match(item.prompt,/Fuente suministrada:/,m.id+' source-based retrieval');
  }
 }
});

test('B1 full writing models meet their own production range',()=>{
 for(const m of modules){
  const count=words(m.writing.model.join(' '));
  assert.ok(count>=m.writing.words[0]&&count<=m.writing.words[1],`${m.id}: model ${count}, task ${m.writing.words.join('–')}`);
  assert.ok(m.writing.model.length>=2,m.id+' paragraph organization');
 }
});
