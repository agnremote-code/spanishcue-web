import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
const result = await build({stdin:{contents:`export { c1Modules } from './app/autoestudio/curriculum/modules/c1'; export { c1Objectives } from './app/autoestudio/curriculum/objectives/c1'; export { validateModule, duplicationAudit } from './app/autoestudio/curriculum/validate'; export { moduleClips } from './app/autoestudio/curriculum/audio-clips';`,resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const {c1Modules: modules,c1Objectives: objectives,validateModule,duplicationAudit,moduleClips}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const words = text => text.trim().split(/\s+/u).length;
test('C1 has twenty complete Spanish-only weeks and four integrated checkpoints',()=>{
 assert.equal(modules.length,20);
 assert.deepEqual(modules.filter(m=>m.kind==='checkpoint').map(m=>m.week),[5,10,15,20]);
 for(const m of modules){assert.deepEqual(validateModule(m),[],m.id);assert.doesNotMatch(JSON.stringify(m),/"(?:en|support|canDoEn)":|coming soon|placeholder|\bTODO\b/,m.id);assert.ok(moduleClips(m).length>20,m.id);}
});
test('C1 input and output sustain advanced discourse',()=>{
 for(const m of modules){assert.ok(words(m.reading.text.join(' '))>=450,`${m.id} sustained reading`);assert.ok(words(m.listening.script.map(t=>t.text).join(' '))>=280,`${m.id} sustained listening`);assert.ok(m.writing.words[0]>=220,m.id);assert.ok(m.speaking.tasks.some(t=>t.seconds>=240),m.id);assert.equal(m.listening.stages[0].stage,'gist');assert.ok(m.listening.stages.some(s=>s.stage==='notice'),m.id);}
});
test('C1 map is fully introduced once and genuinely revisited',()=>{
 for(const o of objectives){assert.deepEqual(modules.filter(m=>m.newObjectives.includes(o.id)).map(m=>m.week),[o.week],o.id);if(o.week<20)assert.ok(modules.some(m=>m.week>o.week&&m.reviewObjectives.includes(o.id)),o.id);}
 for(const m of modules){assert.deepEqual(m.newObjectives,objectives.filter(o=>o.week===m.week).map(o=>o.id));for(const id of m.reviewObjectives.filter(id=>id.startsWith('c1.')))assert.ok(objectives.find(o=>o.id===id)?.week<m.week);}
 assert.deepEqual(duplicationAudit({a1:[],a2:[],b1:[],b2:[],c1:modules,c2:[]}),[]);
});

test('C1 noticing quotes occur in the actual readings and answers vary position',()=>{
 const positions = new Set();
 for(const m of modules){for(const item of m.reading.noticing.items)assert.ok(m.reading.text.join(' ').includes(item.quote),`${m.id}: ${item.quote}`);for(const item of m.quiz.items)if('answer' in item)positions.add(item.answer);}
 assert.ok(positions.size>=3);
});

test('C1 semantic reformulations use self-assessment; exact quiz gaps specify the target',()=>{
 for(const m of modules){
  assert.ok(!m.grammar.exercises.some(ex=>ex.type==='transform'),m.id);
  assert.ok(!m.quiz.items.some(item=>item.type==='transform'),m.id);
  for(const item of m.quiz.items.filter(item=>item.type==='gap'))assert.ok(item.hint?.length>20,m.id);
  for(const ex of m.grammar.exercises.filter(ex=>ex.type==='open'))for(const item of ex.items){assert.ok(item.model,m.id);assert.ok(item.checklist.length>=2,m.id);}
 }
 const alternative=modules[7].quiz.items.find(item=>item.type==='gap');
 assert.ok(alternative.answers[0].includes('avisaras'));assert.ok(alternative.answers[0].includes('avisases'));
});

test('C1 writing models are complete and fall within their production ranges',()=>{
 for(const m of modules){const length=words(m.writing.model.join(' '));assert.ok(length>=m.writing.words[0]&&length<=m.writing.words[1],`${m.id}: ${length} words outside ${m.writing.words}`);assert.ok(m.writing.model.length>=3,m.id);assert.doesNotMatch(m.writing.context,/fragmento|parcial/i,m.id);}
});
