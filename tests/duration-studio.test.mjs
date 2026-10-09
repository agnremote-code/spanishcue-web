import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {JSDOM} from 'jsdom';
import React,{act} from 'react';
const bootstrap=new JSDOM('<!doctype html><html><body></body></html>');
globalThis.window=bootstrap.window;globalThis.document=bootstrap.window.document;
const {createRoot}=await import('react-dom/client');
await build({entryPoints:['app/grammar-classroom/GrammarPage.tsx'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','next/link','next/navigation'],loader:{'.css':'empty'},outfile:'node_modules/.cache/duration-page.cjs'});
const Page=createRequire(import.meta.url)('../node_modules/.cache/duration-page.cjs').default;
async function mount(){const dom=new JSDOM('<div id="root"></div>',{url:'https://spanishcue.test'});Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,IS_REACT_ACT_ENVIRONMENT:true});dom.window.HTMLElement.prototype.scrollIntoView=function(){};dom.window.HTMLMediaElement.prototype.pause=function(){};const root=createRoot(document.getElementById('root'));await act(async()=>root.render(React.createElement(Page,{id:230})));return {click:async s=>{const el=document.querySelector(s);assert.ok(el,s);await act(async()=>el.click());},close:async()=>{await act(async()=>root.unmount());dom.window.close();}};}
test('duration world distinguishes ongoing situations from completed events and hides answers',async()=>{const v=await mount();try{await v.click('[data-open-scene]');assert.ok(document.querySelector('[data-duration-world]'),'lesson 230 must mount its own interactive neighborhood');await v.click('[data-place="library"]');await v.click('[data-time-mode="duration"]');assert.match(document.querySelector('[data-time-answer]').textContent,/Trabajo aquí desde hace seis meses/);await v.click('[data-equivalent]');assert.match(document.querySelector('[data-time-answer]').textContent,/Hace seis meses que trabajo aquí/);await v.click('[data-time-mode="event"]');assert.match(document.querySelector('[data-time-answer]').textContent,/Empecé a trabajar aquí hace seis meses/);await v.click('[data-time-reveal]');assert.doesNotMatch(document.querySelector('[data-time-answer]').textContent,/Empecé a trabajar/);assert.equal(document.querySelectorAll('[data-stage]').length,8);}finally{await v.close();}});
test('duration classroom preserves source content, audio, practice feedback and student writing across stages',async()=>{const v=await mount();try{await v.click('[data-stage="reading"]');assert.match(document.body.textContent,/Hola, soy Elena/);await v.click('[data-stage="practice"]');await v.click('input[name="ob-choice-0"][value="1"]');await v.click('[data-check="0"]');assert.match(document.body.textContent,/Revisa/);await v.click('input[name="ob-choice-0"][value="0"]');await v.click('[data-check="0"]');assert.match(document.body.textContent,/Correcto/);await v.click('[data-stage="listening"]');assert.equal(document.querySelector('audio').getAttribute('src'),'/audio/grammar-classroom/230.mp3');await v.click('[data-stage="writing"]');const input=document.querySelector('textarea');await act(async()=>{Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value').set.call(input,'Vivo aquí desde marzo.');input.dispatchEvent(new window.Event('input',{bubbles:true}));});await v.click('[data-stage="closing"]');await v.click('[data-stage="writing"]');assert.equal(document.querySelector('textarea').value,'Vivo aquí desde marzo.');}finally{await v.close();}});

test('theory comes first at full reading width, with optional scene and independent text enlargement',async()=>{const v=await mount();try{
 assert.equal(document.querySelector('[data-stage][aria-current]').dataset.stage,'grammar');
 assert.equal(document.querySelector('[data-duration-world]'),null,'3D must not compete with the first explanation');
 assert.match(document.querySelector('.ob-work').textContent,/Explicación gramatical/);
 const rules=[...document.querySelectorAll('.ob-rule')];assert.equal(rules.length,3);
 assert.ok(rules[2].compareDocumentPosition(document.querySelector('[data-discovery]'))&window.Node.DOCUMENT_POSITION_FOLLOWING,'all rules precede discovery questions');
 await v.click('[data-enlarge-text]');assert.equal(document.querySelector('.ob-layout').dataset.largeText,'true');
 await v.click('.ob-apply-scene');assert.equal(document.activeElement,document.querySelector('.ob-visual'),'opening application moves focus out of hidden theory');assert.equal(document.querySelector('.ob-work').hidden,true);assert.equal(document.querySelector('.ob-visual').hidden,false);
 await v.click('[data-place="cafe"]');await v.click('[data-enlarge-scene]');assert.equal(document.querySelector('[data-duration-world]').dataset.expanded,'true');
 await v.click('[data-show-lesson]');assert.equal(document.activeElement,document.querySelector('.ob-stage-title h2'));assert.equal(document.querySelector('.ob-work').hidden,false);assert.equal(document.querySelector('.ob-visual').hidden,true);
 await v.click('[data-open-scene]');assert.match(document.querySelector('[data-time-answer]').textContent,/Estudio aquí desde septiembre/);
 await v.click('[data-stage="reading"]');assert.equal(document.querySelector('.ob-work').hidden,false);assert.equal(document.querySelector('.ob-visual').hidden,true);assert.match(document.querySelector('.ob-work').textContent,/Hola, soy Elena/);
}finally{await v.close();}});

test('opening 3D pauses the listening audio and leaves the transcript available on return',async()=>{const v=await mount();try{await v.click('[data-stage="listening"]');const audio=document.querySelector('audio');let pauses=0;audio.pause=()=>{pauses++;};await v.click('[data-open-scene]');assert.equal(pauses,1);await v.click('[data-show-lesson]');assert.equal(document.querySelector('audio'),audio);}finally{await v.close();}});
