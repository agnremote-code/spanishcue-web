import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {JSDOM} from 'jsdom';
import React,{act} from 'react';
import {accents,alphabet,clips,consonants,countries,countryLine,vowels} from '../app/clase-de-nivelacion/content.mjs';

const bootstrap=new JSDOM('<!doctype html><html><body></body></html>');
globalThis.window=bootstrap.window;globalThis.document=bootstrap.window.document;
const {createRoot}=await import('react-dom/client');
const require=createRequire(import.meta.url);
const stub={name:'stubs',setup(b){b.onResolve({filter:/SpanishCueBrand$/},()=>({path:'brand',namespace:'stub'}));b.onLoad({filter:/.*/,namespace:'stub'},()=>({contents:'export const SpanishCueBrand=()=>null;',loader:'js'}));}};
await build({entryPoints:['app/clase-de-nivelacion/Nivelacion.tsx','app/student-tracker/contracts.ts','app/lesson-catalog.ts','app/access-policy.ts'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','next/link','next/navigation','next/headers'],loader:{'.css':'empty'},plugins:[stub],outdir:'node_modules/.cache/clase-de-nivelacion',logLevel:'error'});
const out='../node_modules/.cache/clase-de-nivelacion';
const {default:Nivelacion,LESSON_ID,goalOf,noteOf,nextStepOf}=require(`${out}/clase-de-nivelacion/Nivelacion.js`);
const {parseStudentInput,parseClassRecordInput}=require(`${out}/student-tracker/contracts.js`);
const {lessons}=require(`${out}/lesson-catalog.js`);
const {isFreeLesson}=require(`${out}/access-policy.js`);
const sha=data=>createHash('sha256').update(data).digest('hex');

test('the class is one PRO catalog entry with its own route and cover',()=>{
  const found=lessons.filter(l=>l.path==='/clase-de-nivelacion');
  assert.equal(found.length,1);const lesson=found[0];
  assert.equal(lesson.id,262);assert.equal(LESSON_ID,262);assert.equal(lesson.category,'Fonética');assert.equal(lesson.level,'A1');
  assert.equal(isFreeLesson(262),false);
  assert.equal(lesson.image,'/clase-de-nivelacion/cover.webp');assert.ok(existsSync('public/clase-de-nivelacion/cover.webp'));
  assert.ok(existsSync('app/clase-de-nivelacion/page.tsx'));
});

test('phonetics covers the alphabet, the five vowels, the consonant groups and seven accents',()=>{
  assert.equal(alphabet.length,27);assert.equal(alphabet.map(l=>l.letter).join(''),'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  assert.deepEqual(vowels.map(v=>v.letter),['A','E','I','O','U']);
  for(const v of vowels){assert.ok(v.syllables&&v.words.length>=4&&v.phrase&&v.phraseEn&&v.mouth&&v.like);assert.ok(v.phrase.toLowerCase().includes(v.letter.toLowerCase()));}
  assert.deepEqual(consonants.map(c=>c.id),['b-v','c-z','c-k-q','ch','d-t-p','g-gu','g-j','h','ll-y','n','r-rr','w-x']);
  for(const c of consonants){assert.ok(c.rule&&c.ruleEn&&c.tip&&c.tipEn&&c.ipa,c.id);assert.ok(c.rows.length>=3,c.id);assert.equal(new Set(c.rows.map(r=>r[0])).size,c.rows.length,c.id);}
  assert.equal(accents.length,7);assert.equal(new Set(accents.map(a=>a.voice)).size,7,'each accent has its own voice');
});

test('21 Spanish-speaking countries carry capital, gentilicio, people, currency and a native voice',()=>{
  assert.equal(countries.length,21);assert.equal(new Set(countries.map(c=>c.id)).size,21);
  assert.deepEqual(countries.map(c=>c.name),[...countries.map(c=>c.name)].sort((a,b)=>a.localeCompare(b,'es')),'alphabetical');
  for(const c of countries){
    for(const key of ['capital','m','f','people','money','region','fact'])assert.ok(c[key],`${c.id}: ${key}`);
    assert.match(c.people,/^\d+(,\d)? millones$/,c.id);
    assert.equal(c.voice.slice(3,5).toLowerCase(),c.id,`${c.id}: the voice is from the country`);
    assert.ok(countryLine(c).includes(c.capital));
  }
  assert.equal(countries.find(c=>c.id==='gq').capital,'Ciudad de la Paz','capital since January 2026');
  assert.equal(countries.find(c=>c.id==='bo').capital,'Sucre');
});

test('every recording exists, matches its text and uses a native male Spanish voice',()=>{
  const male=new Set(['es-AR-TomasNeural','es-BO-MarceloNeural','es-CL-LorenzoNeural','es-CO-GonzaloNeural','es-CR-JuanNeural','es-CU-ManuelNeural','es-DO-EmilioNeural','es-EC-LuisNeural','es-ES-AlvaroNeural','es-GQ-JavierNeural','es-GT-AndresNeural','es-HN-CarlosNeural','es-MX-JorgeNeural','es-NI-FedericoNeural','es-PA-RobertoNeural','es-PE-AlexNeural','es-PR-VictorNeural','es-PY-MarioNeural','es-SV-RodrigoNeural','es-UY-MateoNeural','es-VE-SebastianNeural']);
  const list=clips();const manifest=JSON.parse(readFileSync('app/clase-de-nivelacion/audio-manifest.json','utf8'));
  const recorded=new Map(manifest.clips.map(c=>[c.id,c]));
  assert.equal(new Set(list.map(c=>c.id)).size,list.length);assert.equal(recorded.size,list.length);
  assert.deepEqual(readdirSync('public/audio/nivelacion').sort(),list.map(c=>`${c.id}.mp3`).sort(),'no missing or stray files');
  for(const clip of list){
    assert.ok(male.has(clip.voice),`${clip.id}: ${clip.voice}`);
    const saved=recorded.get(clip.id);assert.ok(saved,clip.id);
    assert.equal(saved.textSha256,sha(clip.text),`${clip.id}: audio matches the text`);assert.equal(saved.voice,clip.voice);assert.equal(saved.rate,clip.rate);
    assert.equal(saved.sha256,sha(readFileSync(`public/audio/nivelacion/${clip.id}.mp3`)),clip.id);
  }
  const source=readFileSync('app/clase-de-nivelacion/Nivelacion.tsx','utf8');
  assert.ok(!/speechSynthesis/.test(source),'never the device voice');
  assert.ok(!/\(\?<[=!]/.test(source+readFileSync('app/clase-de-nivelacion/content.mjs','utf8')),'no regex lookbehind in client code');
});

test('the saved sheet fits the student tracker contract',()=>{
  const long='x'.repeat(5000);
  const ficha={name:'Jack',from:'Estados Unidos',lives:'Connecticut',job:'estudiante',native:'Inglés',reasons:['Pareja o familia','Viajes'],improve:['Hablar con fluidez'],experience:'Estudié antes',variety:'Rioplatense (Argentina y Uruguay)',level:'A2',notes:`línea 1\nlínea 2 ${long}`,frequency:2,plan:long};
  const student=parseStudentInput({alias:ficha.name,level:ficha.level,goal:goalOf(ficha)});
  assert.match(student.goal,/Motivos: Pareja o familia, Viajes · Quiere mejorar: Hablar con fluidez · 2 clases por semana/);
  const record=parseClassRecordInput({studentId:'s1',lessonId:LESSON_ID,startsAt:new Date().toISOString(),timezone:'UTC',durationMinutes:50,status:'taught',pedagogicalNote:noteOf(ficha),nextStep:nextStepOf(ficha),requestKey:'nivelacion-s1'});
  assert.ok(record.pedagogicalNote.startsWith('Clase de nivelación | De: Estados Unidos | Vive en: Connecticut'));
  assert.ok(record.pedagogicalNote.includes('Notas del profe: línea 1 / línea 2'));
  assert.ok(record.pedagogicalNote.length<=4000&&record.nextStep.length<=1000);
});

test('a teacher fills the sheet, creates the student, plays a vowel and opens a country',async()=>{
  const dom=new JSDOM('<div id="root"></div>',{url:'https://spanishcue.test/clase-de-nivelacion'});
  Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,localStorage:dom.window.localStorage,IS_REACT_ACT_ENVIRONMENT:true});
  dom.window.scrollTo=()=>{};
  const played=[];globalThis.Audio=class{pause(){}play(){played.push(this.src);return Promise.resolve();}};
  const calls=[];globalThis.fetch=async(url,init)=>{calls.push({url,method:init.method,body:JSON.parse(init.body)});return {ok:true,status:init.method==='POST'?201:200,json:async()=>({student:{id:'stu-1'},record:{id:'rec-1'}})};};
  const root=createRoot(document.getElementById('root'));await act(async()=>root.render(React.createElement(Nivelacion)));
  const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
  const click=async s=>{const el=typeof s==='string'?$(s):s;assert.ok(el,String(s));await act(async()=>el.click());};
  const type=async(el,value)=>{const proto=el.tagName==='TEXTAREA'?dom.window.HTMLTextAreaElement.prototype:dom.window.HTMLInputElement.prototype;await act(async()=>{Object.getOwnPropertyDescriptor(proto,'value').set.call(el,value);el.dispatchEvent(new dom.window.Event('input',{bubbles:true}));});};
  try{
    assert.deepEqual($$('[data-stage]').map(e=>e.dataset.stage),['conocernos','fonetica','paises','cierre']);
    assert.ok($('.gl-en'),'English help opens by default');
    await click('[data-step="1"]');await type($('.nv-field input'),'Jack');
    await click('[data-step="2"]');await click($$('.nv-chip').find(e=>e.textContent.startsWith('Viajes')));
    await type($('[data-teacher-notes]'),'Novia argentina.');
    await click('[data-step="3"]');await click('[data-create-student]');await act(async()=>{await new Promise(r=>setTimeout(r,20));});
    assert.deepEqual(calls.map(c=>`${c.method} ${c.url}`),['POST /api/students','POST /api/class-records']);
    assert.equal(calls[0].body.alias,'Jack');assert.match(calls[0].body.goal,/Viajes/);
    assert.equal(calls[1].body.lessonId,262);assert.equal(calls[1].body.studentId,'stu-1');assert.match(calls[1].body.pedagogicalNote,/Notas del profe: Novia argentina\./);
    parseStudentInput(calls[0].body);parseClassRecordInput(calls[1].body);
    assert.equal($('.nv-save').dataset.save,'saved');
    await click('[data-create-student]');await act(async()=>{await new Promise(r=>setTimeout(r,20));});
    assert.deepEqual(calls.slice(2).map(c=>`${c.method} ${c.url}`),['PATCH /api/students/stu-1','PATCH /api/class-records/rec-1'],'a second save updates, it never duplicates');
    assert.match(dom.window.localStorage.getItem('spanishcue:nivelacion:v1'),/"studentId":"stu-1"/);
    await click('[data-stage="fonetica"]');await click('[data-vowel="E"]');
    assert.ok(played.at(-1).endsWith('/audio/nivelacion/vocal-e-letra.mp3'));assert.equal($('[data-sound]').dataset.sound,'vocal-e');
    assert.equal($$('[data-step]').length,16,'vowels, contrast, alphabet, twelve consonant groups and accents');
    await click('[data-stage="paises"]');assert.equal($$('[data-country]').length,21);
    await click('[data-country="bo"]');assert.match($('[data-country-card]').textContent,/Sucre/);
    assert.ok(!$('.nv-gap[data-filled="true"]'),'answers stay hidden until the teacher shows them');
    await click('[data-show-answers]');assert.ok($$('.nv-gap[data-filled="true"]').length>=8);
    await click('[data-tool="english"]');assert.ok(!$('.gl-en'));
  }finally{await act(async()=>root.unmount());dom.window.close();}
});
