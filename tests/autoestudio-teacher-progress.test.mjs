// Teacher follow-up of Autoestudio learners: real course advance, synced sections and the
// «Ver progreso» panel. Server tests use the real migration and SQL; UI tests mount the
// real component with a stubbed fetch.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {readFile as read} from 'node:fs/promises';
import {DatabaseSync} from 'node:sqlite';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import {JSDOM} from 'jsdom';
import React,{act} from 'react';
import {createRoot} from 'react-dom/client';

const bundle=async(contents)=>{const r=await build({stdin:{contents,resolveDir:process.cwd(),loader:'ts'},bundle:true,format:'esm',platform:'node',write:false,logLevel:'error'});return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));};
const model=await bundle(`export * from './app/autoestudio/progress/model'; export { modulesByLevel, publishedLevels } from './app/autoestudio/curriculum/course'; export { SECTION_ORDER } from './app/autoestudio/curriculum/types';`);
const at='2026-10-10T10:00:00.000Z';
const withSections=(keys,extra={})=>({startedAt:at,sections:Object.fromEntries(keys.map(k=>[k,at])),...extra});

test('denominator is the real curriculum: 20 weeks x 12 required sections in every level A1-C2',()=>{
  assert.deepEqual([...model.REQUIRED_SECTIONS],model.SECTION_ORDER.filter(k=>k!=='complete'));
  assert.equal(model.REQUIRED_SECTIONS.length,12);
  for(const level of ['a1','a2','b1','b2','c1','c2']){
    const modules=model.modulesByLevel[level];
    assert.equal(modules.length,model.WEEKS_PER_LEVEL,level);
    assert.deepEqual(modules.map(m=>m.id),model.levelWeekIds(level),level);
    const p=model.levelProgress(model.emptyProgress(),model.levelWeekIds(level));
    assert.equal(p.sectionsTotal,240,level);
    assert.equal(p.coursePercent,0,level);
  }
});

test('partial work shows real advance while weeks completed stay academic',()=>{
  const eight=model.REQUIRED_SECTIONS.slice(0,8);
  let state={version:1,modules:{'a1-01':withSections(eight,{lastSection:'writing'})}};
  let p=model.levelProgress(state,model.levelWeekIds('a1'));
  assert.equal(p.completed,0);assert.equal(p.percent,0);assert.equal(p.started,1);
  assert.equal(p.sectionsCompleted,8);assert.equal(p.coursePercent,3.3);
  // One single finished section is visible, never rounded to 0.
  state={version:1,modules:{'a1-01':withSections(['goal'])}};
  assert.equal(model.levelProgress(state,model.levelWeekIds('a1')).coursePercent,0.4);
  // A visit (lastSection) without finishing is not progress.
  state={version:1,modules:{'a1-01':withSections([],{lastSection:'quiz'})}};
  p=model.levelProgress(state,model.levelWeekIds('a1'));
  assert.equal(p.sectionsCompleted,0);assert.equal(p.started,1);assert.equal(p.coursePercent,0);
  // A completed week counts 12/12 and one week out of 20.
  state={version:1,modules:{'a1-01':withSections(model.REQUIRED_SECTIONS),'a1-02':withSections(['goal','theory'])}};
  p=model.levelProgress(state,model.levelWeekIds('a1'));
  assert.equal(p.completed,1);assert.equal(p.percent,5);assert.equal(p.sectionsCompleted,14);assert.equal(p.coursePercent,5.8);
  assert.deepEqual(model.pendingSections(state.modules['a1-02']),model.REQUIRED_SECTIONS.slice(2));
  assert.equal(model.preciseShare(239,240),99.5);assert.equal(model.preciseShare(240,240),100);
});

// ---- Server: real migration, real SQL ----
const db=new DatabaseSync(':memory:');db.exec('PRAGMA foreign_keys=ON');
for(const name of ['0000_jazzy_fantastic_four','0007_tan_selene'])db.exec((await read(`drizzle/${name}.sql`,'utf8')).replaceAll('--> statement-breakpoint',''));
db.exec(await read('drizzle/0011_autoestudio_share.sql','utf8'));
class D1 {prepare(sql){return{bind(...values){const st=db.prepare(sql);return{async first(){return st.get(...values)||null;},async all(){return{results:st.all(...values)};},async run(){return{meta:{changes:Number(st.run(...values).changes)}};}};}};}async batch(statements){db.exec('BEGIN');try{const values=[];for(const st of statements)values.push(await st.run());db.exec('COMMIT');return values;}catch(e){db.exec('ROLLBACK');throw e;}}}
const env={DB:new D1(),AUTOESTUDIO_SHARE_SECRET:'test-only-secret-not-used-in-any-deployment-0000000000'};
const serverBuild=await build({entryPoints:['app/autoestudio/share/server.ts'],bundle:true,write:false,format:'esm',platform:'node'});
const api=await import('data:text/javascript;base64,'+Buffer.from(serverBuild.outputFiles[0].text).toString('base64'));
const req=(body,{owner='teacher-a',cookie}={})=>new Request('https://spanishcue.test/api/autoestudio/test',{method:body?'POST':'GET',headers:{origin:'https://spanishcue.test','content-type':'application/json',...(owner?{'x-chespanish-user-uid':owner,'x-chespanish-access-level':'full'}:{}),...(cookie?{cookie}:{})},...(body?{body:JSON.stringify(body)}:{})});
const call=async(fn,...args)=>{try{return await fn(...args,env);}catch(e){return api.shareError(e);}};
const cookieOf=r=>r.headers.get('set-cookie').split(';')[0];
async function learner(level,alias){
  const made=await (await call(api.createPass,req({level}))).json();
  const token=made.link.split('/s/')[1];
  const pending=cookieOf(await api.redeem(req(),token,env));
  const claimed=await call(api.claim,req({alias,passId:made.pass.id,revision:1},{cookie:pending}));
  return {pass:made.pass,cookie:cookieOf(claimed)};
}
const put=(l,moduleId,progress)=>call(api.putProgress,req({passId:l.pass.id,revision:1,moduleId,progress},{cookie:l.cookie}));

test('teacher list reports synced partial progress per learner and level, from D1',async()=>{
  const richard=await learner('a1','RichardG');const jesper=await learner('a2','Jesper');await learner('b1','Sin actividad');
  // Same nickname twice: two distinct learners, never merged.
  const cyreeA=await learner('a1','Cyree');const cyreeB=await learner('a1','Cyree');
  assert.notEqual(cyreeA.pass.learnerId,cyreeB.pass.learnerId);
  assert.equal((await put(richard,'a1-01',withSections(model.REQUIRED_SECTIONS.slice(0,8),{lastSection:'writing'}))).status,200);
  assert.equal((await put(jesper,'a2-01',withSections(model.REQUIRED_SECTIONS))).status,200);
  assert.equal((await put(jesper,'a2-02',withSections([],{lastSection:'theory'}))).status,200);
  const list=await (await call(api.listPasses,req())).json();
  const by=alias=>list.passes.filter(p=>p.alias===alias);
  const r=by('RichardG')[0].summary;
  assert.equal(r.completed,0);assert.equal(r.started,1);assert.equal(r.sectionsCompleted,8);assert.equal(r.sectionsTotal,240);assert.equal(r.coursePercent,3.3);
  assert.equal(r.lastModule,'a1-01');assert.equal(r.lastSection,'writing');assert.equal(r.lastModuleSections,8);assert.ok(r.lastActivity);
  const j=by('Jesper')[0].summary;
  assert.equal(j.completed,1);assert.equal(j.percent,5);assert.equal(j.started,2);assert.equal(j.inProgress,1);assert.equal(j.sectionsCompleted,12);assert.equal(j.coursePercent,5);assert.equal(j.lastModule,'a2-02');
  const none=by('Sin actividad')[0].summary;
  assert.deepEqual([none.started,none.completed,none.coursePercent,none.lastActivity],[0,0,0,null]);
  assert.equal(by('Cyree').length,2);
  // Another teacher sees none of it.
  assert.deepEqual((await (await call(api.listPasses,req(null,{owner:'teacher-b'}))).json()).passes,[]);
  assert.equal((await call(api.learnerDetail,req(null,{owner:'teacher-b'}),richard.pass.learnerId)).status,404);
  // Detail carries per-week sections, last section and last write.
  const detail=await (await call(api.learnerDetail,req(),richard.pass.learnerId)).json();
  assert.equal(detail.learner.alias,'RichardG');
  assert.equal(Object.keys(detail.progress.modules['a1-01'].sections).length,8);
  assert.equal(detail.progress.modules['a1-01'].lastSection,'writing');
  assert.ok(detail.progress.modules['a1-01'].updatedAt);
});

test('the first finish time of a section survives later syncs from any device',async()=>{
  const l=await learner('b1','Walker');
  await put(l,'b1-01',withSections(['goal']));
  const first=JSON.parse(db.prepare("SELECT sections FROM autoestudio_progress WHERE module_id='b1-01' AND learner_id=?").get(l.pass.learnerId).sections).goal;
  await new Promise(resolve=>setTimeout(resolve,15));
  await put(l,'b1-01',withSections(['goal','theory']));
  const sections=JSON.parse(db.prepare("SELECT sections FROM autoestudio_progress WHERE module_id='b1-01' AND learner_id=?").get(l.pass.learnerId).sections);
  assert.equal(sections.goal,first);assert.ok(sections.theory);
  // Rotating the link keeps the learner and all progress.
  const rotated=await (await call(api.mutatePass,req({action:'rotate'}),l.pass.id)).json();
  const fresh=cookieOf(await api.redeem(req(),rotated.link.split('/s/')[1],env));
  const progress=await (await call(api.getProgress,req(null,{owner:null,cookie:fresh}))).json();
  assert.deepEqual(Object.keys(progress.progress.modules['b1-01'].sections).sort(),['goal','theory']);
});

test('Worker resolves the verified session for Mis alumnos APIs (students, class records)',()=>{
  const worker=readFileSync('worker/index.ts','utf8');
  const line=worker.split('\n').find(l=>l.includes('const identityAware='));
  for(const path of ["pathname==='/api/students'","pathname.startsWith('/api/students/')","pathname==='/api/class-records'","pathname.startsWith('/api/class-records/')"])assert.ok(line.includes(path),path);
});

// ---- UI: the real TeacherPasses component ----
await build({entryPoints:['app/autoestudio/TeacherPasses.tsx'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom'],loader:{'.css':'empty'},outfile:'node_modules/.cache/teacher-passes.cjs',logLevel:'error'});
const TeacherPasses=createRequire(import.meta.url)('../node_modules/.cache/teacher-passes.cjs').default;
const id=n=>String(n).repeat(48).slice(0,48);
const recent=new Date(Date.now()-86_400_000).toISOString();
const summary=(s)=>({started:0,completed:0,inProgress:0,percent:0,sectionsCompleted:0,sectionsTotal:240,coursePercent:0,lastModule:null,lastSection:null,lastModuleSections:0,lastActivity:null,...s});
const passes=[
  {id:id('a'),learnerId:id(1),level:'a2',revision:1,revokedAt:null,createdAt:at,alias:'Señor Propofol',summary:summary({started:1,inProgress:1,sectionsCompleted:7,coursePercent:2.9,lastModule:'a2-01',lastSection:'practice',lastModuleSections:7,lastActivity:recent})},
  {id:id('b'),learnerId:id(2),level:'a1',revision:1,revokedAt:null,createdAt:at,alias:'Cyree',summary:summary({})},
  {id:id('c'),learnerId:id(3),level:'a1',revision:1,revokedAt:null,createdAt:at,alias:'Cyree',summary:summary({})},
  {id:id('d'),learnerId:id(4),level:'b1',revision:1,revokedAt:null,createdAt:at,alias:'Walker',summary:summary({started:1,inProgress:1,lastModule:'b1-01',lastActivity:new Date(Date.now()-20*86_400_000).toISOString()})},
];
const details={
  [id(1)]:{learner:{id:id(1),alias:'Señor Propofol',createdAt:at},passes:[passes[0]],progress:{version:1,modules:{'a2-01':{...withSections(model.REQUIRED_SECTIONS.slice(0,7),{lastSection:'practice'}),updatedAt:recent,quiz:{score:7,total:10,best:8,attempts:2,at}}}}},
  [id(2)]:{learner:{id:id(2),alias:'Cyree',createdAt:at},passes:[passes[1]],progress:{version:1,modules:{}}},
};
async function mount({detailDelay={},fail=new Set()}={}){
  const dom=new JSDOM('<div id="root"></div>',{url:'https://spanishcue.test/cuenta?tab=alumnos'});
  Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,KeyboardEvent:dom.window.KeyboardEvent,IS_REACT_ACT_ENVIRONMENT:true});
  const calls=[];
  globalThis.fetch=async(url)=>{calls.push(url);const path=String(url).replace('/api/autoestudio/','');
    if(path==='passes')return Response.json({passes,learners:[]});
    const learnerId=path.split('/')[1];
    if(detailDelay[learnerId])await new Promise(r=>setTimeout(r,detailDelay[learnerId]));
    if(fail.has(learnerId))return new Response('<html>error</html>',{status:503,headers:{'content-type':'text/html'}});
    return details[learnerId]?Response.json(details[learnerId]):Response.json({error:'learner_not_found'},{status:404});};
  const root=createRoot(document.getElementById('root'));
  await act(async()=>root.render(React.createElement(TeacherPasses,{enabled:true})));
  await act(async()=>{await new Promise(r=>setTimeout(r,0));});
  const buttons=()=>[...document.querySelectorAll('.ae-view-progress')];
  return {calls,buttons,dialog:()=>document.querySelector('[role="dialog"]'),
    open:async i=>{await act(async()=>buttons()[i].click());},
    settle:async(ms=0)=>{await act(async()=>{await new Promise(r=>setTimeout(r,ms));});},
    close:async()=>{await act(async()=>root.unmount());dom.window.close();}};
}

test('list shows weeks completed and real advance separately, plus who studies and who stopped',async()=>{
  const v=await mount();
  try{
    const text=document.querySelector('.ae-pass-list').textContent;
    assert.match(text,/0\/20 semanas completadas/);assert.match(text,/2,9 % avance del curso/);assert.match(text,/7\/240 secciones obligatorias/);
    assert.match(text,/Semana actual: 1 · 7\/12 secciones · en Práctica/);
    assert.match(text,/Estudió ayer/);assert.match(text,/Sin actividad hace \d+ días/);assert.match(text,/Todavía no empezó/);
    assert.equal(document.querySelectorAll('.ae-pass-id').length,2,'both Cyree passes are identified by id');
    assert.match(document.querySelector('.ae-teacher-totals').textContent,/1 estudiaron en los últimos 7 días/);
  }finally{await v.close();}
});

test('«Ver progreso» opens a dialog at once, loads the real detail and closes with button or Escape',async()=>{
  // The delay must outlast opening the dialog on a slow CI runner, or the loading state is never visible.
  const v=await mount({detailDelay:{[id(1)]:400}});
  try{
    await v.open(0);
    const dialog=v.dialog();
    assert.ok(dialog,'dialog is open immediately');
    assert.equal(dialog.parentElement.parentElement,document.body,'portaled over the page, not after the list');
    assert.match(dialog.textContent,/Cargando el progreso de Señor Propofol/);
    assert.ok(v.calls.includes(`/api/autoestudio/learners/${id(1)}`));
    await v.settle(450);
    const text=v.dialog().textContent;
    for(const expected of [/Señor Propofol/,/A2/,/Avance real del curso2,9 %/,/7\/240 secciones obligatorias/,/Semanas completadas0\/20/,/Semanas iniciadas1/,/Semana actual1/,/Última sección abierta: Práctica/,/Semana 1: 7\/12 secciones obligatorias/,/Pendientes.*Práctica/,/Semana 1: 7\/10 · mejor 8\/10 · 2 intentos/])assert.match(text,expected);
    assert.equal(v.dialog().querySelectorAll('.ae-week-progress li').length,20);
    assert.equal(v.dialog().querySelectorAll('.ae-week-progress li.is-in-progress').length,1);
    assert.equal(v.dialog().querySelectorAll('.ae-week-progress li.is-not-started').length,19);
    assert.equal(document.activeElement,v.dialog().querySelector('.ae-detail-close'));
    await act(async()=>document.dispatchEvent(new window.KeyboardEvent('keydown',{key:'Escape'})));
    assert.equal(v.dialog(),null);
    await v.open(0);await v.settle(50);
    await act(async()=>v.dialog().querySelector('.ae-detail-close').click());
    assert.equal(v.dialog(),null);
  }finally{await v.close();}
});

test('consecutive learners: empty learner, error with retry, and no stale data from a slower request',async()=>{
  const v=await mount({detailDelay:{[id(1)]:80},fail:new Set([id(4)])});
  try{
    // Slow learner 1, then immediately learner 2: learner 1's late answer must not replace learner 2.
    await v.open(0);
    await act(async()=>v.dialog().querySelector('.ae-detail-close').click());
    await v.open(1);await v.settle(120);
    assert.match(v.dialog().textContent,/Cyree/);assert.doesNotMatch(v.dialog().textContent,/Propofol/);
    assert.match(v.dialog().textContent,/Todavía no empezó ninguna semana de A1/);
    assert.match(v.dialog().textContent,/Todavía no empezó|0 %/);
    await act(async()=>v.dialog().querySelector('.ae-detail-close').click());
    // Server error with a non-JSON body becomes a visible error with retry.
    await v.open(3);await v.settle(10);
    assert.ok(v.dialog().querySelector('[role="alert"]'));
    const before=v.calls.length;
    await act(async()=>[...v.dialog().querySelectorAll('button')].find(b=>b.textContent==='Reintentar').click());
    await v.settle(10);
    assert.equal(v.calls.length,before+1);
    await act(async()=>v.dialog().querySelector('.ae-detail-close').click());
    // Learner whose detail returns 404.
    await v.open(2);await v.settle(10);
    assert.match(v.dialog().querySelector('[role="alert"]').textContent,/No encontramos a este alumno/);
  }finally{await v.close();}
});
