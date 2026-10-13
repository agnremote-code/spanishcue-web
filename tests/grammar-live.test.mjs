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
await build({entryPoints:['app/grammar-classroom/GrammarPage.tsx'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','next/link','next/navigation'],loader:{'.css':'empty'},outfile:'node_modules/.cache/grammar-live-page.cjs',logLevel:'error'});
await build({entryPoints:['app/grammar-classroom/live/registry.ts','app/grammar-classroom/live/visuals/duration.tsx'],bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','three'],loader:{'.css':'empty'},outdir:'node_modules/.cache/grammar-live',logLevel:'error'});
const Page=require('../node_modules/.cache/grammar-live-page.cjs').default;
const {getLiveLesson,liveLessonIds}=require('../node_modules/.cache/grammar-live/registry.js');
const {elapsed,amount}=require('../node_modules/.cache/grammar-live/visuals/duration.js');

async function mount(hash=''){
  const dom=new JSDOM('<div id="root"></div>',{url:`https://spanishcue.test/gramatica/desde-hace-duracion${hash}`});
  Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,IS_REACT_ACT_ENVIRONMENT:true});
  dom.window.HTMLElement.prototype.scrollIntoView=function(){};dom.window.HTMLMediaElement.prototype.pause=function(){};
  const root=createRoot(document.getElementById('root'));await act(async()=>root.render(React.createElement(Page,{id:230})));
  const $=s=>document.querySelector(s);
  return {$,click:async s=>{const el=$(s);assert.ok(el,s);await act(async()=>el.click());},
    key:async key=>act(async()=>{window.dispatchEvent(new window.KeyboardEvent('keydown',{key,bubbles:true}));}),
    current:()=>$('[data-stage][aria-current]').dataset.stage,
    close:async()=>{await act(async()=>root.unmount());dom.window.close();}};
}

test('lesson 230 is the live-class prototype; every other grammar class keeps its renderer',()=>{
  assert.deepEqual(liveLessonIds,[230]);
  const lesson=getLiveLesson(230);
  assert.deepEqual(lesson.stages.map(s=>s.id),['objetivo','explicacion','contexto','practica','situaciones','conversacion','desafio','cierre']);
  assert.equal(lesson.stages.reduce((n,s)=>n+s.minutes,0),60);
  const tones=new Set(lesson.legend.map(l=>l.tone));
  for(const stage of lesson.stages)for(const step of stage.steps){
    assert.ok(step.blocks.length,`${stage.id}: ${step.title} has content`);
    const text=JSON.stringify(step.blocks);
    for(const [,tone] of text.matchAll(/\[\[[^\]|]+\|([a-z]+)\]\]/g))assert.ok(tones.has(tone),`${tone} is in the legend`);
    for(const block of step.blocks){
      if(block.kind==='choice')for(const item of block.items){assert.ok(item.answer<item.options.length,item.prompt);assert.ok(item.prompt.split('___').length<=2,item.prompt);}
      if(block.kind==='classify')for(const item of block.items)assert.ok(block.categories.some(c=>c.id===item.answer),item.text);
    }
  }
});

test('classroom now is October 2026: elapsed time and quantities are grammatical',()=>{
  assert.deepEqual(elapsed(2019),{n:7,unit:'year'});
  assert.deepEqual(elapsed(2026,3),{n:7,unit:'month'});
  assert.deepEqual(elapsed(2025,10),{n:1,unit:'year'});
  assert.equal(elapsed(2026,11),null);
  assert.equal(amount(1,'year'),'un año');assert.equal(amount(1,'month'),'un mes');assert.equal(amount(11,'month'),'once meses');assert.equal(amount(35,'year'),'35 años');
});

test('the teacher navigates freely: sidebar, steps, arrows and deep links, with no completion gates',async()=>{
  const v=await mount('#practica-3');try{
    assert.equal(v.current(),'practica');
    assert.equal(v.$('[data-step][aria-selected="true"]').dataset.step,'2');
    await v.click('[data-stage="cierre"]');assert.equal(v.current(),'cierre');
    await v.click('[data-stage="objetivo"]');assert.equal(v.current(),'objetivo');
    await v.key('ArrowRight');assert.equal(v.$('[data-step][aria-selected="true"]').dataset.step,'1');
    await v.key('ArrowRight');assert.equal(v.current(),'explicacion');
    await v.key('ArrowLeft');assert.equal(v.current(),'objetivo');
    await v.click('[data-show-all]');assert.equal(document.querySelectorAll('[data-stage-panel="objetivo"] [data-step-panel]:not([hidden])').length,2);
    assert.equal(document.querySelectorAll('[data-stage]').length,8);
    assert.equal(window.localStorage.length,0,'nothing about the student is stored');
  }finally{await v.close();}
});

test('explanation answers four questions with a since/for/ago contrast and the classic mistakes',async()=>{
  const v=await mount('#explicacion');try{
    const panel=v.$('[data-stage-panel="explicacion"]').textContent;
    for(const text of ['¿Desde cuándo?','presente + desde + un momento','presente + desde hace + cantidad de tiempo','hace + cantidad de tiempo + que + presente','verbo en pasado + hace + cantidad de tiempo','Vivo en Bogotá desde 2019.','Llegué a Bogotá hace siete años.','Vivo aquí hace dos años','Llevo','durante'])assert.ok(panel.includes(text),text);
    await v.click('[data-step="5"]');
    assert.ok(!v.$('[data-stage-panel="explicacion"] [data-step-panel="5"]').textContent.includes('Estudio español desde hace dos años.'),'corrections stay hidden until the teacher reveals them');
    await v.click('[data-stage-panel="explicacion"] [data-step-panel="5"] [data-reveal-all]');
    assert.ok(v.$('[data-stage-panel="explicacion"] [data-step-panel="5"]').textContent.includes('Estudio español desde hace dos años.'));
  }finally{await v.close();}
});

test('the time lab hides sentences until revealed and recomputes them from the start',async()=>{
  const v=await mount('#explicacion-5');try{
    assert.equal(v.$('[data-explorer-sentence]'),null);
    await v.click('[data-situation="familia"]');
    await v.click('[data-explorer-show="duration"]');
    assert.match(v.$('[data-explorer-sentence="duration"]').textContent,/No veo a mi familia desde hace seis meses\. · Hace seis meses que no veo a mi familia\./);
    await v.click('[data-explorer-reveal]');
    assert.equal(v.$('[data-explorer-sentence="start"]').textContent,'No veo a mi familia desde abril.');
    assert.equal(v.$('[data-explorer-sentence="event"]').textContent,'Vi a mi familia por última vez hace seis meses.');
    assert.equal(v.$('[data-duration-world]'),null,'the 3D neighbourhood is optional');
    await v.click('[data-open-scene]');assert.ok(v.$('[data-duration-world]'));
  }finally{await v.close();}
});

test('context keeps the original reading and audio; colour marks are a discovery toggle',async()=>{
  const v=await mount('#contexto-2');try{
    const panel=v.$('[data-stage-panel="contexto"] [data-step-panel="1"]');
    assert.match(panel.textContent,/Hola, soy Elena/);assert.equal(panel.querySelector('mark'),null);
    await v.click('[data-stage-panel="contexto"] [data-step-panel="1"] [data-marks]');assert.ok(panel.querySelector('mark.gl-tone-teal'));
    assert.equal(v.$('[data-stage-panel="contexto"] audio').getAttribute('src'),'/audio/grammar-classroom/230.mp3');
    assert.equal(v.$('[data-teacher-note]'),null,'teacher notes are hidden while sharing the screen');
    await v.click('[data-tool="teacher"]');assert.ok(v.$('[data-teacher-note]'));
    assert.equal(v.$('.gl-en'),null);await v.click('[data-tool="english"]');assert.ok(v.$('.gl-en'));
  }finally{await v.close();}
});

test('closed practice checks itself; open practice is revealed by the teacher',async()=>{
  const v=await mount('#practica');try{
    const item='[data-stage-panel="practica"] [data-step-panel="0"] .gl-choice-item:nth-child(3)';
    await v.click(`${item} [data-option="0"]`);assert.match(v.$(`${item} .gl-feedback`).textContent,/Revisa/);
    await v.click(`${item} [data-option="2"]`);assert.match(v.$(`${item} .gl-feedback`).textContent,/Correcto.*hecho terminado/);
    const order=[...v.$('[data-stage-panel="practica"] [data-step-panel="4"]').querySelectorAll('[data-order-item]')];
    for(const index of [0,1,2,3,4,5])await v.click(`[data-stage-panel="practica"] [data-order-item="${index}"]`);
    assert.equal(order.length,6);assert.match(v.$('[data-stage-panel="practica"] [data-step-panel="4"] .gl-feedback').textContent,/Orden correcto/);
    const fix=v.$('[data-stage-panel="practica"] [data-step-panel="3"]');
    assert.ok(!fix.textContent.includes('Mi hermano vive en Canadá desde hace cuatro años.'));
    await act(async()=>fix.querySelector('[data-answer-toggle]').click());
    assert.ok(fix.textContent.includes('Mi hermano vive en Canadá desde hace cuatro años.'));
  }finally{await v.close();}
});

test('roleplays, conversation and the final challenge support live speaking without scoring',async()=>{
  const v=await mount('#situaciones');try{
    await v.click('[data-role="0"]');assert.equal(v.$('.gl-twist'),null);await v.click('[data-twist]');assert.match(v.$('.gl-twist').textContent,/corrige una fecha/);
    await v.click('[data-stage="conversacion"]');await v.click('[data-stage-panel="conversacion"] [data-follow-ups]');assert.ok(v.$('.gl-follow'));
    assert.match(v.$('.gl-swap').textContent,/el alumno pregunta al profesor/);
    await v.click('[data-stage="desafio"]');await v.click('[data-life-help]');
    assert.equal(v.$('[data-life-model="0"]').textContent,'Elige una fecha.');
    assert.equal(document.querySelector('[data-live-class]').textContent.match(/puntos|puntaje|score/i),null);
  }finally{await v.close();}
});
