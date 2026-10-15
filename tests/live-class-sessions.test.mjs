// A teacher's live grammar class is saved per student in the account (live_class_sessions).
// Runs the real migration and SQL against node:sqlite.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import {build} from 'esbuild';

const db=new DatabaseSync(':memory:');
for(const file of ['drizzle/0007_tan_selene.sql','drizzle/0015_live_class_sessions.sql'])
  for(const statement of readFileSync(file,'utf8').split('--> statement-breakpoint').map(s=>s.trim()).filter(Boolean))db.exec(statement);
class D1 {prepare(sql){return{bind(...values){const st=db.prepare(sql);return{async first(){return st.get(...values)||null;},async all(){return{results:st.all(...values)};},async run(){return{meta:{changes:st.run(...values).changes}};}};}};}}
const out=await build({entryPoints:['db/live-class.ts'],bundle:true,format:'esm',platform:'node',write:false,logLevel:'error'});
const live=await import('data:text/javascript;base64,'+Buffer.from(out.outputFiles[0].text).toString('base64'));
const d1=new D1();
const student=(id,owner,alias)=>db.prepare(`INSERT INTO students (id, owner_id, alias, level, goal, status, created_at, updated_at) VALUES (?,?,?,'A1','','active','2026-10-15','2026-10-15')`).run(id,owner,alias);
student('s1','ale','Alex');student('s2','ale','Jessica');student('s9','other','Ajena');
const saved={values:{english:true},results:{'entender:0:1:0':{ok:true,first:true,prompt:'¿Cómo…?',right:'Hola',stage:0,step:0}},pos:{stage:6,step:0}};

test('the saved class is validated: only the store shape, with a sane position, within the size limit',()=>{
  assert.deepEqual(live.parseLiveClassSaved(saved),saved);
  assert.deepEqual(live.parseLiveClassSaved({values:{},results:{},pos:{stage:-1,step:0}}),{values:{},results:{}},'a bad position is dropped, the answers stay');
  assert.equal(live.parseLiveClassSaved({values:[],results:{}}),null);
  assert.equal(live.parseLiveClassSaved('nope'),null);
  assert.equal(live.parseLiveClassSaved({values:{big:'x'.repeat(live.LIVE_CLASS_SAVED_LIMIT)},results:{}}),null);
});

test('each student of the teacher keeps their own class; other teachers never see it',async()=>{
  assert.equal(await live.ownsStudent(d1,'ale','s1'),true);
  assert.equal(await live.ownsStudent(d1,'ale','s9'),false,'another teacher’s student');
  const at=await live.putLiveClassSession(d1,'ale','s1',239,saved);
  assert.ok(at>1_700_000_000);
  await live.putLiveClassSession(d1,'ale','s2',239,{values:{},results:{},pos:{stage:1,step:0}});
  await live.putLiveClassSession(d1,'ale','s1',230,{values:{},results:{}});
  assert.deepEqual((await live.getLiveClassSession(d1,'ale','s1',239)).saved,saved);
  assert.equal(await live.getLiveClassSession(d1,'other','s1',239),null);
  const list=await live.listLiveClassSessions(d1,'ale',239);
  assert.deepEqual(list.map(s=>[s.studentId,s.pos]).sort(),[['s1',{stage:6,step:0}],['s2',{stage:1,step:0}]]);
  assert.deepEqual(await live.listLiveClassSessions(d1,'other',239),[]);
});

test('saving again replaces the class, and starting from zero removes only that student and lesson',async()=>{
  await live.putLiveClassSession(d1,'ale','s1',239,{values:{},results:{},pos:{stage:2,step:1}});
  assert.deepEqual((await live.getLiveClassSession(d1,'ale','s1',239)).saved.pos,{stage:2,step:1});
  await live.deleteLiveClassSession(d1,'ale','s1',239);
  assert.equal(await live.getLiveClassSession(d1,'ale','s1',239),null);
  assert.ok(await live.getLiveClassSession(d1,'ale','s1',230),'the other lesson stays');
  assert.ok(await live.getLiveClassSession(d1,'ale','s2',239),'the other student stays');
});

test('an unreadable row is offered as a fresh start instead of breaking the list',async()=>{
  db.prepare(`INSERT INTO live_class_sessions (owner_id, student_id, lesson_id, saved, updated_at) VALUES ('ale','s2',230,'{broken',1)`).run();
  assert.equal(await live.getLiveClassSession(d1,'ale','s2',230),null);
  assert.deepEqual((await live.listLiveClassSessions(d1,'ale',230)).map(s=>[s.studentId,s.pos]).sort(),[['s1',null],['s2',null]]);
});
