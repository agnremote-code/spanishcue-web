// «Mis alumnos» is one roster: Homework learners join the student tracker through
// student_homework_links. Runs the real migrations and SQL against node:sqlite.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import {build} from 'esbuild';

const db=new DatabaseSync(':memory:');
for(const file of ['drizzle/0007_tan_selene.sql','drizzle/0011_autoestudio_share.sql','drizzle/0014_student_homework_links.sql'])
  for(const statement of readFileSync(file,'utf8').split('--> statement-breakpoint').map(s=>s.trim()).filter(Boolean))db.exec(statement);
class D1 {prepare(sql){return{bind(...values){const st=db.prepare(sql);return{async first(){return st.get(...values)||null;},async all(){return{results:st.all(...values)};},async run(){return{meta:{changes:Number(st.run(...values).changes)}};}};}};}async batch(statements){db.exec('BEGIN');try{const values=[];for(const st of statements)values.push(await st.run());db.exec('COMMIT');return values;}catch(e){db.exec('ROLLBACK');throw e;}}}
const out=await build({entryPoints:['db/roster.ts'],bundle:true,format:'esm',platform:'node',write:false,logLevel:'error'});
const roster=await import('data:text/javascript;base64,'+Buffer.from(out.outputFiles[0].text).toString('base64'));
const d1=new D1();
const hex=n=>String(n).padStart(48,'0');
const learner=(id,owner,alias,level='a2')=>{db.prepare('INSERT INTO autoestudio_learners(id,owner_id,alias,created_at) VALUES(?,?,?,?)').run(id,owner,alias,'2026-10-01');db.prepare('INSERT INTO autoestudio_passes(id,owner_id,learner_id,level,created_at) VALUES(?,?,?,?,?)').run('p'+id,owner,id,level,'2026-10-02');};
let n=0;const id=()=>`00000000-0000-4000-8000-${String(++n).padStart(12,'0')}`;

test('named Homework learners become students once, with their Homework level; unnamed links wait',async()=>{
  learner(hex(1),'teacher','Lucía','b1');learner(hex(2),'teacher',null);learner(hex(3),'other','Ajeno');
  assert.equal(await roster.syncRoster(d1,'teacher','2026-10-13T00:00:00Z',id),1);
  assert.equal(await roster.syncRoster(d1,'teacher','2026-10-13T00:00:00Z',id),0,'idempotent');
  const students=db.prepare("SELECT alias,level,owner_id FROM students WHERE owner_id='teacher'").all();
  assert.deepEqual(students.map(s=>({...s})),[{alias:'Lucía',level:'B1',owner_id:'teacher'}]);
  assert.deepEqual(await roster.listLinks(d1,"teacher"),[{learnerId:hex(1),studentId:"00000000-0000-4000-8000-000000000001"}]);
  assert.equal((await roster.listLinks(d1,'other')).length,0,'other teachers are untouched until they open their own panel');
});

test('a learner whose student was deleted is not imported again',async()=>{
  db.prepare("DELETE FROM students WHERE alias='Lucía'").run();
  assert.equal(await roster.syncRoster(d1,'teacher','2026-10-13T00:00:00Z',id),0);
  assert.equal(db.prepare("SELECT COUNT(*) AS n FROM students WHERE owner_id='teacher'").get().n,0);
});

test('linking only joins a learner and a student of the same teacher',async()=>{
  db.prepare("INSERT INTO students(id,owner_id,alias,level,created_at,updated_at) VALUES('s-mine-0001','teacher','Meli','A1','x','x'),('s-other-001','other','Otro','A1','x','x')").run();
  assert.equal(await roster.linkLearner(d1,'teacher',hex(2),'s-other-001'),false,'student of another teacher');
  assert.equal(await roster.linkLearner(d1,'teacher',hex(3),'s-mine-0001'),false,'learner of another teacher');
  assert.equal(await roster.linkLearner(d1,'teacher',hex(2),'s-mine-0001'),true);
  assert.equal(await roster.linkLearner(d1,'teacher',hex(1),'s-mine-0001'),true,'moving an existing link');
  const links=await roster.listLinks(d1,'teacher');
  assert.deepEqual(links.filter(l=>l.studentId==='s-mine-0001').map(l=>l.learnerId).sort(),[hex(1),hex(2)]);
});
