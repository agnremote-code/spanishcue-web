import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {JSDOM} from 'jsdom';
import React,{act} from 'react';
const bootstrap=new JSDOM('<!doctype html><html><body></body></html>');
globalThis.window=bootstrap.window;globalThis.document=bootstrap.window.document;
const {createRoot}=await import('react-dom/client');
const require=createRequire(import.meta.url);
const out='node_modules/.cache/grammar-course';
await build({entryPoints:['app/grammar-classroom/curriculum.ts','app/grammar-classroom/course.ts','app/grammar-classroom/live/progress.ts','app/grammar-classroom/live/registry.ts','app/grammar-classroom/GrammarCourse.tsx','app/lesson-catalog.ts'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'},outdir:out,logLevel:'error'});
const {courseUnits,coursePosition,courseUnitById,classNumber}=require(`../${out}/grammar-classroom/curriculum.js`);
const {courseRows}=require(`../${out}/grammar-classroom/course.js`);
const {progressOf,savedProgress,lessonSections}=require(`../${out}/grammar-classroom/live/progress.js`);
const {getLiveLesson,liveLessonIds}=require(`../${out}/grammar-classroom/live/registry.js`);
const GrammarCourse=require(`../${out}/grammar-classroom/GrammarCourse.js`).default;
const {lessons}=require(`../${out}/lesson-catalog.js`);

test('the course is one ordered sequence G001…G236 plus extension units, with stable catalog ids and acyclic prerequisites',()=>{
  assert.equal(courseUnits.length,240);
  const base=courseUnits.filter(u=>!u.extends);
  assert.equal(base.length,236);
  base.forEach((unit,index)=>{
    assert.equal(unit.sequence,index+1);
    assert.equal(unit.code,`G${String(index+1).padStart(3,'0')}`);
  });
  // Extensions take the numbers after G236 (nothing renumbered) and are studied right after the unit they extend.
  const extensions=courseUnits.filter(u=>u.extends);
  assert.deepEqual(extensions.map(u=>u.code).sort(),['G237','G238','G239','G240']);
  for(const unit of extensions){
    assert.equal(unit.catalogId,300+unit.sequence);
    const at=courseUnits.indexOf(unit),anchor=courseUnits[at-1];
    assert.equal(anchor.code,unit.extends,`${unit.code} follows ${unit.extends}`);
    assert.equal(anchor.level,unit.level,`${unit.code} stays in its level`);
  }
  courseUnits.forEach((unit,index)=>{
    for(const code of unit.prerequisiteCodes){
      assert.ok(courseUnits.findIndex(u=>u.code===code)<index,`${unit.code}: ${code} comes earlier`);
    }
  });
  assert.equal(new Set(courseUnits.map(u=>u.catalogId)).size,240,'one catalog id per unit');
  assert.equal(new Set(courseUnits.map(u=>u.canonicalSlug)).size,240,'one URL per unit');
  assert.ok(!courseUnits.some(u=>u.catalogId===222),'222 is never reused');
  assert.equal(classNumber(7),'Clase 007');
  assert.equal(courseUnits[0].level,'A0');
  assert.equal(courseUnits[0].catalogId,239);
});

test('every existing grammar class keeps its id and URL and sits in the course exactly once',()=>{
  const existing=courseUnits.filter(u=>u.origin==='existing');
  assert.equal(existing.length,58);
  const grammar=lessons.filter(l=>l.category==='Gramática');
  const legacy=new Set(existing.map(u=>u.catalogId));
  for(const id of liveLessonIds){
    const unit=courseUnitById(id);
    assert.ok(unit,`${id} is in the course`);
    assert.equal(unit.status,'live',`${id} opens`);
  }
  for(const unit of existing){
    const lesson=grammar.find(l=>l.id===unit.catalogId);
    assert.ok(lesson,`${unit.code}: catalog id ${unit.catalogId} exists`);
    assert.equal(unit.canonicalSlug,lesson.path??`/clase/${lesson.id}`,`${unit.code}: same URL as the library`);
  }
  for(const lesson of grammar)assert.ok(courseUnitById(lesson.id),`${lesson.id} (${lesson.title}) is in the course`);
  for(const unit of courseUnits.filter(u=>u.origin==='new')){
    assert.equal(unit.catalogId,300+unit.sequence,`${unit.code}: reserved id`);
    assert.ok(!legacy.has(unit.catalogId));
    assert.ok(!lessons.some(l=>l.id===unit.catalogId&&l.category!=='Gramática'),`${unit.code}: id free in the catalog`);
    assert.equal(unit.status==='live',Boolean(getLiveLesson(unit.catalogId)),`${unit.code}: live only when the class exists`);
    if(unit.status==='live')assert.ok(lessons.some(l=>l.id===unit.catalogId&&l.path===unit.canonicalSlug),`${unit.code}: published at its URL`);
  }
});

test('a class knows its number and the nearest open classes before and after it',()=>{
  const first=coursePosition(239);
  assert.equal(first.sequence,1);assert.equal(first.prev,undefined);
  assert.equal(first.next.code,courseUnits.find(u=>u.sequence>1&&u.status==='live').code);
  const live=courseUnits.filter(u=>u.status==='live');
  for(let i=1;i<live.length-1;i++){
    const at=coursePosition(live[i].catalogId);
    assert.equal(at.prev.code,live[i-1].code);assert.equal(at.next.code,live[i+1].code);
    assert.equal(at.next.href,live[i+1].canonicalSlug);
  }
  assert.equal(coursePosition(99999),undefined);
});

test('course progress counts real answers section by section, exactly like the class sidebar',()=>{
  const lesson=getLiveLesson(230);
  const results={'entender:0:1:0':{ok:true},'entender:0:1:1':{ok:false},'practicar:0:0:0':{ok:true},'practicar:0:0:1':{ok:true}};
  const sidebar=lesson.stages.reduce((n,s)=>n+progressOf(s,results).done,0);
  const course=savedProgress(results,lessonSections(lesson));
  assert.equal(course.done,sidebar);assert.equal(course.done,3);assert.ok(course.started);
  assert.equal(course.total,lesson.stages.reduce((n,s)=>n+progressOf(s,{}).total,0));
  assert.deepEqual(savedProgress(undefined,lessonSections(lesson)),{done:0,total:course.total,started:false});
  const rows=courseRows();
  assert.equal(rows.length,240);
  for(const row of rows)assert.equal(row.sections.length>0,row.status==='live',row.code);
  assert.ok(!JSON.stringify(rows).includes('"blocks"'),'rows carry no lesson body');
});

async function mountCourse(storage={},fetcher){
  const dom=new JSDOM('<div id="root"></div>',{url:'https://spanishcue.test/spanish-grammar-lessons'});
  Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,IS_REACT_ACT_ENVIRONMENT:true});
  for(const [k,v] of Object.entries(storage))dom.window.localStorage.setItem(k,v);
  globalThis.fetch=fetcher??(async()=>new Response('{}',{status:401}));
  const root=createRoot(document.getElementById('root'));
  await act(async()=>root.render(React.createElement(GrammarCourse,{rows:courseRows(),topics:[{id:'tiempos',label:'Tiempos verbales'}]})));
  await act(async()=>{await new Promise(r=>setTimeout(r,20));});
  const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
  return {dom,$,$$,close:async()=>{await act(async()=>root.unmount());dom.window.close();}};
}

test('the course map lists every class in order and shows this browser’s real progress',async()=>{
  const lesson=getLiveLesson(230);const unit=courseUnitById(230);
  const all=Object.fromEntries(lessonSections(lesson).flatMap(([id,count])=>Array.from({length:count},(_,i)=>[`${id}:x:${i}`,{ok:true}])));
  const v=await mountCourse({'spanishcue:gramatica:230:v1':JSON.stringify({values:{},results:all}),'spanishcue:gramatica:140:v1':JSON.stringify({values:{},results:{'entender:0:0:0':{ok:true}}})});
  try{
    const units=v.$$('[data-unit]').map(li=>li.dataset.unit);
    assert.deepEqual(units,courseUnits.map(u=>u.code),'sequence order, nothing else');
    assert.equal(v.$(`[data-unit="${unit.code}"]`).dataset.state,'done');
    assert.equal(v.$(`[data-unit="${courseUnitById(140).code}"]`).dataset.state,'started');
    assert.equal(v.$('[data-unit="G001"]').dataset.state,'todo');
    assert.equal(v.$$('[data-state="planned"] a').length,0,'planned classes are not links');
    assert.match(v.$('[data-course-count]').textContent,/^1 de \d+ clases disponibles completadas/);
    assert.equal(v.$('[data-course-next]').dataset.courseNext,courseUnitById(140).code,'continue the class in progress');
    await act(async()=>v.$('[data-course-level="A2"]').click());
    const a2=v.$$('[data-unit]').map(li=>li.dataset.unit);
    assert.deepEqual(a2,courseUnits.filter(u=>u.level==='A2').map(u=>u.code),'a level filter keeps the order');
  }finally{await v.close();}
});

test('a teacher sees one student’s saved classes and opens a class for that student',async()=>{
  const calls=[];
  const v=await mountCourse({'spanishcue:gramatica:course-student':'s1'},async url=>{
    calls.push(String(url));
    if(String(url)==='/api/students')return Response.json({students:[{id:'s1',alias:'Lucía',lastName:null,status:'active'},{id:'s2',alias:'Old',lastName:null,status:'archived'}]});
    if(String(url).startsWith('/api/live-class?studentId=s1'))return Response.json({progress:[{lessonId:239,done:3,total:90,started:true}]});
    return new Response('{}',{status:404});
  });
  try{
    await act(async()=>{await new Promise(r=>setTimeout(r,20));});
    assert.ok(calls.includes('/api/live-class?studentId=s1'));
    assert.equal(v.$$('select option').filter(o=>o.value).length+0>=1,true);
    assert.ok(!v.$$('option').some(o=>o.textContent==='Old'),'archived students are hidden');
    assert.equal(v.$('[data-unit="G001"]').dataset.state,'started');
    await act(async()=>v.$('[data-unit="G001"] a').click());
    assert.equal(window.localStorage.getItem('spanishcue:gramatica:student:239'),'s1');
    assert.equal(window.localStorage.getItem('spanishcue:gramatica:mode'),'teacher');
  }finally{await v.close();}
});

test('every new course class plays its own recording, built from the transcript it shows',async()=>{
  const {readFileSync}=await import('node:fs');const {createHash}=await import('node:crypto');
  const sha=data=>createHash('sha256').update(data).digest('hex');
  const clips=JSON.parse(readFileSync('app/grammar-classroom/live/audio/clips.json','utf8')).clips;
  const recorded=JSON.parse(readFileSync('app/grammar-classroom/live/audio/manifest.json','utf8')).clips;
  const fresh=courseUnits.filter(u=>u.origin==='new'&&u.status==='live');
  assert.ok(fresh.length>0);
  for(const unit of fresh){
    const lesson=getLiveLesson(unit.catalogId);
    assert.equal(lesson.title,unit.title,`${unit.code}: the class has its course title`);
    const listen=lesson.stages.find(s=>s.id==='escuchar').steps.flatMap(s=>s.blocks).find(b=>b.kind==='listen');
    assert.equal(listen.src,`/audio/grammar-live/${unit.catalogId}.mp3`);
    const clip=clips.find(c=>c.id===unit.catalogId);const audio=recorded.find(c=>c.id===unit.catalogId);
    assert.equal(clip.text,listen.transcript.replace(/\[\[([^\]|]+)\|[a-z]+\]\]/g,'$1'),`${unit.code}: the recording reads the transcript`);
    assert.ok(audio,`${unit.code}: recorded`);
    assert.equal(audio.transcriptSha256,sha(clip.text),`${unit.code}: the audio matches the current transcript`);
    assert.equal(audio.sha256,sha(readFileSync('public'+listen.src)),`${unit.code}: the asset matches the manifest`);
    assert.ok(audio.durationSeconds>15&&audio.durationSeconds<120);
  }
});
