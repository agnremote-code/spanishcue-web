import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import {JSDOM} from 'jsdom';
import React,{act} from 'react';
import {createRoot} from 'react-dom/client';

await build({entryPoints:['app/grammar-classroom/Classroom.tsx'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','next/link'],loader:{'.css':'empty'},outfile:'node_modules/.cache/grammar-classroom/classroom.cjs'});
const require=createRequire(import.meta.url);
const Classroom=require('../node_modules/.cache/grammar-classroom/classroom.cjs').default;
const q={kind:'meaning',prompt:'¿Por qué cambia Ana de horario?',model:'Para estar con su familia.',criteria:['Relaciona el cambio con pasar tiempo en familia.']};
const fixture={id:230,title:'Desde y hace: hablar de la duración',level:'A2',topic:'Lugar y tiempo',objectives:['Explicar cuánto dura una situación.'],scope:'Rutinas actuales.',isNew:true,originalPath:'/gramatica/desde-hace-duracion',audioSrc:'/audio/grammar-classroom/230.mp3',warmup:['¿Desde cuándo vives aquí?'],reading:{title:'Un cambio de horario',text:'Ana cambia su horario porque quiere estar más tiempo con su familia.',questions:[q]},discovery:[{prompt:'Encuentra la razón.',model:'Porque quiere estar con su familia.'}],grammar:[{title:'Duración',form:'Desde hace + periodo',meaning:'Una situación continúa.',examples:['Vivo aquí desde hace un año.']}],practice:[{kind:'choice',prompt:'Ahora es 2026. Ana llegó en 2024 y sigue aquí. Vive aquí…',options:['hace 2024','desde 2024'],answers:[1],explanation:'Desde introduce el comienzo.'},{kind:'open',prompt:'Explica otra duración.',model:'Trabajo aquí desde enero.',criteria:['Expresa el inicio o el periodo.']}],listening:{title:'Mensaje de Ana',transcript:'Trabajo aquí desde enero.',voice:'es-MX-DaliaNeural',questions:[q]},speaking:[{prompt:'Elige un horario.',followUp:'¿Qué cambia para tu familia?',support:'Prefiero…'}],writing:{prompt:'Escribe un mensaje contando desde cuándo trabajas allí.',words:[45,65],model:'Trabajo aquí desde enero.',checklist:['Cuenta cuándo empezó.']},closing:{prompt:'Cuenta qué puedes explicar ahora.',model:'Puedo explicar una duración.'}};

async function mount(){
 const dom=new JSDOM('<!doctype html><div id="root"></div>',{url:'https://spanishcue.test/gramatica/test'});
 Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,HTMLTextAreaElement:dom.window.HTMLTextAreaElement,IS_REACT_ACT_ENVIRONMENT:true});
 Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
 dom.window.HTMLElement.prototype.scrollIntoView=function(){};
 const root=createRoot(document.getElementById('root'));await act(async()=>root.render(React.createElement(Classroom,{lesson:fixture})));
 const click=async selector=>{const node=document.querySelector(selector);assert.ok(node,selector);await act(async()=>node.click());};
 return {dom,root,click,close:async()=>{await act(async()=>root.unmount());dom.window.close();}};
}

test('open paraphrases remain pending until a teacher reviews meaning, and editing clears that review',async()=>{
 const v=await mount();try{
  await v.click('[data-stage="reading"]');
  const input=document.querySelector('textarea');
  await act(async()=>{Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value').set.call(input,'Quiere compartir más tiempo con los suyos.');input.dispatchEvent(new window.Event('input',{bubbles:true}));});
  assert.match(document.body.textContent,/Pendiente de revisión/);
  assert.doesNotMatch(document.body.textContent,/Respuesta incorrecta/);
  await v.click('[data-review="achieved"]');assert.match(document.body.textContent,/Objetivo conseguido/);
  await act(async()=>{Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value').set.call(input,'Quiere ver más a sus hijos.');input.dispatchEvent(new window.Event('input',{bubbles:true}));});
  assert.match(document.body.textContent,/Pendiente de revisión/);
 }finally{await v.close();}
});

test('teacher paste is retained after navigation and the final stage has no next button',async()=>{
 const v=await mount();try{
  await v.click('[data-stage="writing"]');const input=document.querySelector('textarea');
  await act(async()=>{Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value').set.call(input,'Vivo aquí desde marzo.');input.dispatchEvent(new window.Event('input',{bubbles:true}));});
  await v.click('[data-stage="speaking"]');await v.click('[data-stage="writing"]');assert.equal(document.querySelector('textarea').value,'Vivo aquí desde marzo.');
  await v.click('[data-stage="closing"]');assert.equal(document.querySelector('[data-next]'),null);
 }finally{await v.close();}
});

test('objective choices give explained feedback only after checking',async()=>{
 const v=await mount();try{
  await v.click('[data-stage="practice"]');await v.click('input[type="radio"][value="0"]');await v.click('[data-check="0"]');
  assert.match(document.body.textContent,/Revisa la elección/);assert.match(document.body.textContent,/Desde introduce el comienzo/);
  await v.click('input[type="radio"][value="1"]');await v.click('[data-check="0"]');assert.match(document.body.textContent,/Elección válida/);
 }finally{await v.close();}
});

test('a rejected clipboard write reports a selectable fallback without claiming copied',async()=>{
 const v=await mount();try{
  Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw new Error('denied');}},configurable:true});
  await v.click('[data-stage="writing"]');await v.click('[data-copy="writing"]');
  assert.match(document.querySelector('[role="status"]').textContent,/Selecciona/);
  assert.doesNotMatch(document.querySelector('[role="status"]').textContent,/Copiado/);
  assert.match(document.body.textContent,/Escribe un mensaje contando/);
 }finally{await v.close();}
});

test('stage navigation stops playback, resets it, and moves focus to the new activity',async()=>{
 const v=await mount();try{
  assert.equal(document.querySelector('.gc-navigation button').disabled,true);
  const scrolled=[];v.dom.window.HTMLElement.prototype.scrollIntoView=function(){scrolled.push(this);};
  await v.click('[data-stage="listening"]');
  const audio=document.querySelector('audio');let paused=false;
  audio.pause=()=>{paused=true;};audio.currentTime=12;
  await v.click('[data-stage="speaking"]');
  assert.equal(paused,true);assert.equal(audio.currentTime,0);
  assert.equal(document.activeElement,document.querySelector('.gc-stage-title h2'));
  assert.equal(scrolled.at(-1),document.activeElement);
 }finally{await v.close();}
});

test('copy confirms success only after the complete chat prompt reaches the clipboard',async()=>{
 const v=await mount();try{
  let captured='',resolveWrite;const pending=new Promise(resolve=>{resolveWrite=resolve;});
  Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>{captured=text;await pending;}},configurable:true});
  await v.click('[data-stage="writing"]');await v.click('[data-copy="writing"]');
  assert.doesNotMatch(document.body.textContent,/Copiado/);
  assert.match(captured,/Escribe un mensaje contando/);assert.match(captured,/45–65 palabras/);assert.match(captured,/chat de la plataforma/);
  await act(async()=>resolveWrite());assert.match(document.querySelector('[role="status"]').textContent,/Copiado/);
 }finally{await v.close();}
});
