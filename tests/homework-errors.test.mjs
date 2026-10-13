// Homework error history: categorisation, append-only storage through the real
// pass session, teacher queries, class plan, real-catalog recommendations and
// the server-side truncation of the premium class preview.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DatabaseSync} from 'node:sqlite';
import {build} from 'esbuild';

const bundle=async(contents)=>{const r=await build({stdin:{contents,resolveDir:process.cwd(),loader:'ts'},bundle:true,format:'esm',platform:'node',write:false,logLevel:'error'});return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));};
const pure=await bundle(`export * from './app/autoestudio/errors/categorize'; export * from './app/autoestudio/errors/model'; export * from './app/autoestudio/errors/plan'; export * from './app/autoestudio/errors/catalog'; export * from './app/grammar-classroom/preview'; export { modulesByLevel } from './app/autoestudio/curriculum/course'; export { resolveItem } from './app/autoestudio/curriculum/lookup'; export { lessons } from './app/lesson-catalog'; export { getClassroomLesson, classroomIds } from './app/grammar-classroom/lessons';`);

test('Ale’s example and the main confusions land in verifiable categories',()=>{
  const c=(input)=>pure.categorize({section:'grammar',...input}).id;
  assert.equal(c({question:'Ayer ___ muy cansado.',given:'soy',correct:['estaba'],why:'Estado temporal en el pasado: estar en imperfecto.'}),'ser-estar');
  assert.equal(c({question:'Ayer ___ muy cansado.',given:'estuve',correct:['estaba'],why:'Estado temporal en el pasado: estar en imperfecto.'}),'pasados');
  assert.equal(c({question:'Ayer ___ muy cansado.',correct:['estaba']}),'ser-estar');
  assert.equal(c({question:'Este regalo es ___ ti.',correct:['para']}),'por-para');
  assert.equal(c({question:'Vivo aquí ___ 2019.',correct:['desde']}),'desde-hace');
  assert.equal(c({question:'Espero que ___ bien.',correct:['estés'],why:'Espero que introduce un deseo y lleva subjuntivo.'}),'subjuntivo');
  assert.equal(c({question:'¿___ llamas?',correct:['te']}),'pronombres');
  assert.equal(c({question:'Antes del rescate, los vecinos ya ___ a emergencias.',correct:['habían llamado']}),'pluscuamperfecto');
  assert.equal(c({question:'Cuando era niño, ___ al fútbol.',correct:['jugaba'],why:'Hábito en el pasado: imperfecto.'}),'pasados');
  assert.equal(pure.categorize({section:'listening',correct:['verdadero']}).id,'comprension-auditiva');
  assert.equal(pure.categorize({section:'grammar',correct:['camión'],verdict:'accent'}).id,'ortografia-tildes');
  assert.equal(pure.categorize({section:'grammar',correct:['zzz'],objectives:['b1.gram.contraste-pasados']}).id,'pasados');
  assert.match(pure.defaultExplanation('ser-estar','soy','estaba'),/«soy».*«estaba».*estados/);
});

test('every category that recommends points to a real, previewable Gramática class near the learner level',()=>{
  const ser=pure.classesFor('ser-estar','a1');
  assert.equal(ser[0].id,48);assert.equal(ser[0].path,'/la-ciudad-de-los-motores');
  assert.equal(pure.classesFor('desde-hace','a2')[0].id,230);
  assert.equal(pure.classesFor('por-para','b1')[0].id,231);
  assert.equal(pure.classesFor('pasados','b1')[0].id,18);
  assert.deepEqual(pure.classesFor('vocabulario','a1'),[]);
  assert.deepEqual(pure.classesFor('comprension-lectora','b2'),[]);
  const catalog=pure.recommendationCatalog('b1');
  for(const [category,list] of Object.entries(catalog)){
    assert.ok(list.length>=1&&list.length<=3,category);
    for(const c of list){
      const real=pure.lessons.find(l=>l.id===c.id);
      assert.ok(real&&real.category==='Gramática'&&real.path===c.path,`${category}: ${c.id} must exist in the catalog`);
      assert.ok(pure.classroomIds.includes(c.id),`${category}: ${c.id} must have a guided classroom for the preview`);
      assert.ok(Math.abs(['A1','A2','B1','B2','C1','C2'].indexOf(c.level)-2)<=2,`${category}: ${c.level} too far from B1`);
    }
  }
});

test('priority rules: repetition raises, correction and improvement lower, superado disappears',()=>{
  const at=(d)=>new Date(Date.UTC(2026,9,d,10)).toISOString();const now=Date.UTC(2026,9,12,12);
  const e=(id,extra={})=>({id,moduleId:'b1-02',section:'grammar',exerciseId:'x',itemIndex:0,type:'gap',question:'q',given:'g',correct:'c',explanation:'',category:'ser-estar',categoryLabel:'SER / ESTAR',attempt:1,verdict:'wrong',createdAt:at(10),correctedAt:null,...extra});
  const one=pure.summarizeCategories([e('1')],[],now)[0];
  assert.equal(one.status,'leve');assert.equal(one.recurrent,0);
  const many=pure.summarizeCategories([e('1'),e('2',{exerciseId:'y'}),e('3',{moduleId:'b1-03'})],[],now)[0];
  assert.equal(many.recurrent,3);assert.equal(many.status,'refuerzo');assert.ok(many.score>one.score);
  const corrected=pure.summarizeCategories([e('1',{correctedAt:at(11)}),e('2',{exerciseId:'y',correctedAt:at(11)}),e('3',{moduleId:'b1-03',correctedAt:at(11)})],[],now)[0];
  assert.ok(corrected.score<many.score);
  const worked=pure.summarizeCategories([e('1',{createdAt:at(1),correctedAt:at(2)})],[{id:'n',category:'ser-estar',kind:'worked',text:'',createdAt:at(3)}],now)[0];
  assert.equal(worked.status,'superado');assert.equal(worked.afterWork.errorsAfter,0);
  assert.deepEqual(pure.categoriesToSuggest([e('1')],new Set(['ser-estar'])),[]);
  assert.deepEqual(pure.categoriesToSuggest([e('1')],new Set()),['ser-estar']);
});

test('class plan quotes the learner’s real errors and never invents history',()=>{
  const empty=pure.buildClassPlan('Walker','b1',[]);
  assert.match(empty.summary,/todavía no tiene errores registrados/);assert.deepEqual(empty.priorities,[]);
  const at=new Date().toISOString();
  const errors=[1,2,3].map(n=>({id:String(n),moduleId:`b1-0${n}`,section:'grammar',exerciseId:`g${n}`,itemIndex:0,type:'gap',question:'Ayer ___ muy cansado.',given:'soy',correct:'estaba',explanation:'',category:'ser-estar',categoryLabel:'SER / ESTAR',attempt:1,verdict:'wrong',createdAt:at,correctedAt:null}));
  const plan=pure.buildClassPlan('Walker','b1',errors,[],{'ser-estar':[48]});
  assert.match(plan.summary,/Walker presenta dificultades recurrentes con SER \/ ESTAR \(3 errores\)/);
  assert.match(plan.summary,/respondió «soy» y la forma esperada era «estaba»/);
  const block=plan.priorities[0];
  assert.equal(block.category,'ser-estar');assert.ok(block.exercises.some(x=>x.prompt.includes('Ayer soy muy cansado')));
  assert.ok(block.exercises.some(x=>x.kind==='completa'&&x.answer==='estaba'));
  assert.equal(block.conversation.length,3);assert.deepEqual(block.classroomClassIds,[48]);
});

test('preview keeps the real opening, reading and first rule, and strips every protected stage on the server',()=>{
  const lesson=pure.getClassroomLesson(48);
  const preview=pure.previewOf(lesson);
  assert.equal(preview.reading.text,lesson.reading.text);assert.ok(preview.reading.questions.length>0);
  assert.equal(preview.grammar.length,1);assert.deepEqual(preview.practice,[]);assert.deepEqual(preview.speaking,[]);
  assert.equal(preview.listening.transcript,'');assert.deepEqual(preview.listening.questions,[]);assert.equal(preview.writing.prompt,'');assert.equal(preview.audioSrc,'');
  assert.ok(!JSON.stringify(preview).includes(lesson.listening.transcript.slice(0,40)));
  assert.deepEqual([...pure.PREVIEW_STAGES],['opening','reading','grammar']);
});

// ---- Server: real migrations 0011 + 0012, real SQL, real pass session ----
const db=new DatabaseSync(':memory:');db.exec('PRAGMA foreign_keys=ON');
for(const name of ['0000_jazzy_fantastic_four','0007_tan_selene'])db.exec((await readFile(`drizzle/${name}.sql`,'utf8')).replaceAll('--> statement-breakpoint',''));
db.exec(await readFile('drizzle/0011_autoestudio_share.sql','utf8'));
db.exec(await readFile('drizzle/0012_homework_errors.sql','utf8'));
db.exec(await readFile('drizzle/0012_homework_errors.sql','utf8')); // retry-safe
class D1 {prepare(sql){return{bind(...values){const st=db.prepare(sql);return{async first(){return st.get(...values)||null;},async all(){return{results:st.all(...values)};},async run(){return{meta:{changes:Number(st.run(...values).changes)}};}};}};}async batch(statements){db.exec('BEGIN');try{const values=[];for(const st of statements)values.push(await st.run());db.exec('COMMIT');return values;}catch(e){db.exec('ROLLBACK');throw e;}}}
const env={DB:new D1(),AUTOESTUDIO_SHARE_SECRET:'test-only-secret-not-used-in-any-deployment-0000000000'};
const api=await bundle(`export * from './app/autoestudio/share/server'; export * from './app/autoestudio/errors/server';`);
const req=(body,{owner='teacher-a',cookie,path='test'}={})=>new Request(`https://spanishcue.test/api/autoestudio/${path}`,{method:body?'POST':'GET',headers:{origin:'https://spanishcue.test','content-type':'application/json',...(owner?{'x-chespanish-user-uid':owner,'x-chespanish-access-level':'full'}:{}),...(cookie?{cookie}:{})},...(body?{body:JSON.stringify(body)}:{})});
const call=async(fn,...args)=>{try{return await fn(...args,env);}catch(e){return api.shareError(e);}};
const cookieOf=r=>r.headers.get('set-cookie').split(';')[0];
async function learner(level,alias,owner='teacher-a'){
  const made=await (await call(api.createPass,req({level},{owner}))).json();
  const pending=cookieOf(await api.redeem(req(),made.link.split('/s/')[1],env));
  const claimed=await call(api.claim,req({alias,passId:made.pass.id,revision:1},{cookie:pending}));
  return {pass:made.pass,cookie:cookieOf(claimed)};
}
const answer=(l,body)=>call(api.recordAnswer,req({passId:l.pass.id,revision:1,...body},{cookie:l.cookie}));
let walker;
const wrong={moduleId:'a1-01',section:'grammar',exerciseId:'g1',itemIndex:0,given:'eres',verdict:'wrong',attempt:1};

test('a wrong answer is stored with the server-resolved question, correct answer, explanation and category',async()=>{
  walker=await learner('a1','Walker');
  const r=await answer(walker,wrong);
  assert.equal(r.status,201);const body=await r.json();assert.equal(body.category,'ser-estar');
  const row=db.prepare('SELECT * FROM homework_errors').get();
  assert.equal(row.learner_id,walker.pass.learnerId);assert.equal(row.owner_id,'teacher-a');assert.equal(row.level,'a1');
  assert.equal(row.question,'Hola, ___ Carlos.');assert.equal(row.answer_given,'eres');assert.equal(row.answer_correct,'soy');
  assert.match(row.explanation,/yo soy/);assert.equal(row.category,'ser-estar');assert.equal(row.attempt,1);assert.equal(row.corrected_at,null);
});

test('a later correct answer marks the original error as corrected without rewriting it; new mistakes append',async()=>{
  const ok=await answer(walker,{...wrong,given:'soy',verdict:'correct',attempt:2});
  assert.equal(ok.status,200);assert.equal((await ok.json()).corrected,1);
  const row=db.prepare('SELECT * FROM homework_errors').get();
  assert.equal(row.answer_given,'eres');assert.ok(row.corrected_at);
  assert.equal((await answer(walker,{...wrong,given:'es',attempt:3})).status,201);
  assert.equal((await answer(walker,{moduleId:'a1-01',section:'grammar',exerciseId:'g2',itemIndex:0,given:'se',verdict:'wrong',attempt:1})).status,201);
  assert.equal(db.prepare('SELECT COUNT(*) n FROM homework_errors').get().n,3);
  assert.equal(db.prepare('SELECT COUNT(*) n FROM homework_errors WHERE corrected_at IS NULL').get().n,2);
});

test('the learner cannot forge content, other levels, other passes or anonymous writes',async()=>{
  assert.equal((await answer(walker,{...wrong,exerciseId:'nope'})).status,404);
  assert.equal((await answer(walker,{...wrong,moduleId:'b1-01'})).status,403);
  assert.equal((await answer(walker,{...wrong,passId:'x'.repeat(48)})).status,409);
  assert.equal((await answer(walker,{...wrong,question:'forged'})).status,409);
  assert.equal((await call(api.recordAnswer,req({passId:walker.pass.id,revision:1,...wrong}))).status,401);
  assert.equal((await call(api.recordAnswer,req({passId:walker.pass.id,revision:1,...wrong},{cookie:walker.cookie,path:'errors'}))).status,201);
  assert.equal(db.prepare('SELECT COUNT(*) n FROM homework_errors').get().n,4);
});

test('teacher reads errors grouped by topic, week and activity, recurrent and corrected, with a plan and real classes; other teachers cannot',async()=>{
  assert.equal((await call(api.learnerErrors,req(null,{owner:'teacher-b'}),walker.pass.learnerId)).status,404);
  assert.equal((await call(api.learnerErrors,req(null,{owner:null}),walker.pass.learnerId)).status,401);
  const r=await call(api.learnerErrors,req(),walker.pass.learnerId);
  assert.equal(r.status,200);const data=await r.json();
  assert.equal(data.learner.alias,'Walker');assert.equal(data.level,'a1');assert.equal(data.errors.length,4);
  const ser=data.categories.find(c=>c.category==='ser-estar');
  assert.equal(ser.errors,3);assert.equal(ser.corrected,1);assert.equal(ser.recurrent,0);
  assert.equal(data.categories.find(c=>c.category==='pronombres').errors,1);
  assert.deepEqual(data.weeks.map(w=>[w.moduleId,w.errors]),[['a1-01',4]]);
  assert.equal(data.activities.length,2);
  assert.match(data.plan.summary,/Walker presenta dificultades con SER \/ ESTAR \(3 errores, 1 corregido después\)/);
  assert.ok(data.plan.priorities[0].exercises.some(x=>x.prompt.includes('Hola, eres Carlos.')||x.prompt.includes('«eres»')));
  const reco=data.recommendations.find(x=>x.category==='ser-estar');
  assert.equal(reco.classes[0].path,'/la-ciudad-de-los-motores');assert.equal(reco.opened,false);
});

test('notes and «worked in class» marks are owner-scoped and change the follow-up; learner events reach the teacher',async()=>{
  assert.equal((await call(api.addTeacherNote,req({category:'ser-estar',kind:'worked'},{owner:'teacher-b'}),walker.pass.learnerId)).status,404);
  assert.equal((await call(api.addTeacherNote,req({category:'ser-estar',kind:'note',text:''}),walker.pass.learnerId)).status,400);
  assert.equal((await call(api.addTeacherNote,req({category:'ser-estar',kind:'note',text:'Repasar estados con estar.'}),walker.pass.learnerId)).status,201);
  assert.equal((await call(api.addTeacherNote,req({category:'ser-estar',kind:'worked'}),walker.pass.learnerId)).status,201);
  assert.equal((await call(api.recordEvent,req({passId:walker.pass.id,revision:1,kind:'opened',lessonId:48,category:'ser-estar',moduleId:'a1-01'},{cookie:walker.cookie}))).status,201);
  assert.equal((await call(api.recordEvent,req({kind:'opened',lessonId:48,category:'ser-estar'}))).status,401);
  assert.equal((await call(api.recordEvent,req({passId:walker.pass.id,revision:1,kind:'bought',lessonId:48,category:'ser-estar'},{cookie:walker.cookie}))).status,400);
  const data=await (await call(api.learnerErrors,req(),walker.pass.learnerId)).json();
  assert.equal(data.notes.length,2);
  const ser=data.categories.find(c=>c.category==='ser-estar');
  assert.ok(ser.afterWork);assert.equal(ser.afterWork.errorsAfter,0);
  assert.equal(data.recommendations.find(x=>x.category==='ser-estar').opened,true);
  const list=await (await call(api.listPasses,req())).json();
  assert.deepEqual(list.passes.find(p=>p.learnerId===walker.pass.learnerId).errors,{total:4,corrected:1,recurrent:0,top:'SER / ESTAR'});
});

test('actual route modules compile and enforce the HTTP contracts',async()=>{
  globalThis.__AUTOESTUDIO_TEST_ENV=env;
  const built=await build({stdin:{resolveDir:process.cwd(),contents:`export {POST as errors} from './app/api/autoestudio/errors/route';export {POST as events} from './app/api/autoestudio/events/route';export {GET as teacherErrors} from './app/api/autoestudio/learners/[id]/errors/route';export {POST as notes} from './app/api/autoestudio/learners/[id]/notes/route';`},bundle:true,write:false,format:'esm',platform:'node',plugins:[{name:'env',setup(b){b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'env'}));b.onLoad({filter:/.*/,namespace:'env'},()=>({contents:'export const env=globalThis.__AUTOESTUDIO_TEST_ENV'}));}}]});
  const route=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
  assert.equal((await route.errors(req({passId:'x',revision:1,...wrong}))).status,401);
  assert.equal((await route.errors(req({passId:walker.pass.id,revision:1,...wrong},{cookie:walker.cookie}))).status,201);
  assert.equal((await route.events(req({kind:'previewed',lessonId:48,category:'ser-estar'},{cookie:walker.cookie}))).status,201);
  assert.equal((await route.teacherErrors(req(null,{owner:'teacher-b'}),{params:Promise.resolve({id:walker.pass.learnerId})})).status,404);
  const r=await route.teacherErrors(req(),{params:Promise.resolve({id:walker.pass.learnerId})});
  assert.equal(r.status,200);assert.equal(r.headers.get('cache-control'),'private, no-store');
  assert.equal((await r.json()).recommendations.find(x=>x.category==='ser-estar').previewed,true);
  assert.equal((await route.notes(req({category:'ser-estar',kind:'worked'}),{params:Promise.resolve({id:walker.pass.learnerId})})).status,201);
});
