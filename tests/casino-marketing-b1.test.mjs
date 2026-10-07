import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import React, {act} from 'react';
import {createRoot} from 'react-dom/client';
import {JSDOM} from 'jsdom';

const require=createRequire(import.meta.url);
const compiled=await build({
  entryPoints:['app/marketing-de-casinos/page.tsx'],bundle:true,write:false,
  format:'cjs',platform:'node',packages:'external',loader:{'.css':'empty'},
  plugins:[{name:'lesson-link',setup(builder){
    builder.onResolve({filter:/^next\/link$/},()=>({path:'link',namespace:'lesson-test'}));
    builder.onLoad({filter:/.*/,namespace:'lesson-test'},()=>({contents:'import React from "react"; export default function Link({href,children,...props}) { return React.createElement("a",{href,...props},children); }',loader:'jsx',resolveDir:process.cwd()}));
  }}],
});
const pageModule={exports:{}};
new Function('require','module','exports',compiled.outputFiles[0].text)(require,pageModule,pageModule.exports);
const Page=pageModule.exports.default;

function mount(){
  const dom=new JSDOM('<!doctype html><div id="root"></div>',{url:'https://spanishcue.com/marketing-de-casinos'});
  const previous={window:globalThis.window,document:globalThis.document,navigator:globalThis.navigator};
  globalThis.window=dom.window;globalThis.document=dom.window.document;
  Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
  globalThis.IS_REACT_ACT_ENVIRONMENT=true;
  dom.window.scrollTo=()=>{};
  const root=createRoot(dom.window.document.getElementById('root'));
  act(()=>root.render(React.createElement(Page)));
  const click=element=>{assert.ok(element,'expected an interactive control');act(()=>element.click());};
  const go=index=>click(dom.window.document.querySelectorAll('.casino-route button')[index]);
  const close=()=>{act(()=>root.unmount());dom.window.close();globalThis.window=previous.window;globalThis.document=previous.document;Object.defineProperty(globalThis,'navigator',{value:previous.navigator,configurable:true});delete globalThis.IS_REACT_ACT_ENVIRONMENT;};
  return {document:dom.window.document,click,go,close};
}

test('one B1 lesson is cataloged with its own route and original preview',async()=>{
  const result=await build({stdin:{contents:'export {lessons} from "./app/lesson-catalog"; export {lessonAtPath,isFreeLesson} from "./app/access-policy"; export {stages,glossary,segments,finalChallenges} from "./app/marketing-de-casinos/content";',resolveDir:process.cwd()},bundle:true,write:false,format:'cjs',platform:'node'});
  const product={exports:{}};
  new Function('require','module','exports',result.outputFiles[0].text)(require,product,product.exports);
  const {lessons,lessonAtPath,isFreeLesson,stages,glossary,segments,finalChallenges}=product.exports;
  const entry=lessons.filter(item=>item.id===237);
  assert.equal(entry.length,1);
  assert.deepEqual([entry[0].level,entry[0].path,entry[0].duration,entry[0].image],['B1','/marketing-de-casinos','60 min','/marketing-de-casinos/preview.svg']);
  assert.equal(lessonAtPath('/marketing-de-casinos',lessons)?.id,237);
  assert.equal(isFreeLesson(237),false);
  assert.equal(stages.length,12);
  assert.equal(stages.reduce((sum,item)=>sum+item.minutes,0),60);
  assert.equal(glossary.length,11);
  assert.equal(segments.length,4);
  assert.equal(finalChallenges.length,8);
});

test('segmentation caps promotional spend and reveals facts without losing choices',()=>{
  const app=mount();
  try{
    app.go(2);
    const rank=app.document.querySelectorAll('.casino-segment-head');
    for(const item of rank)app.click(item);
    assert.match(app.document.querySelector('.casino-segment:nth-child(4) .casino-segment-head').textContent,/PRIORIDAD 4/);
    const increment=app.document.querySelector('.casino-segment .casino-allocation button:last-child');
    assert.equal(increment.disabled,true);
    const offer=app.document.querySelector('.casino-segment select');
    act(()=>{offer.value='1';offer.dispatchEvent(new app.document.defaultView.Event('change',{bubbles:true}))});
    for(let i=0;i<10;i++)app.click(increment);
    assert.equal(app.document.querySelector('.casino-budget-track i').style.width,'100%');
    assert.ok(app.document.querySelectorAll('.casino-segment .casino-allocation button:last-child')[1].disabled);
    app.click(app.document.querySelector('.casino-action-row button'));
    assert.match(app.document.querySelector('.casino-segment').textContent,/Ya recibió tres ofertas/);
    assert.match(app.document.querySelector('.casino-segment').textContent,/PRIORIDAD 1/);
  }finally{app.close()}
});

test('CRM reveal changes the decision with an explicit incrementality caveat',()=>{
  const app=mount();
  try{
    app.go(4);
    assert.doesNotMatch(app.document.querySelector('.casino-crm').textContent,/372 visitas/);
    app.click(app.document.querySelector('.casino-crm>.casino-accent'));
    const reveal=app.document.querySelector('.casino-shock').textContent;
    assert.match(reveal,/40 %/);
    assert.match(reveal,/372 visitas/);
    assert.match(reveal,/depende del margen/);
  }finally{app.close()}
});

test('executive final allows exactly three priorities and cannot exceed the cut budget',()=>{
  const app=mount();
  try{
    app.go(11);
    const buttons=app.document.querySelectorAll('.casino-final-grid article>button');
    for(let i=0;i<3;i++)app.click(buttons[i]);
    assert.equal(buttons[3].disabled,true);
    const add=app.document.querySelector('.casino-final-grid .casino-allocation button:last-child');
    for(let i=0;i<17;i++)app.click(add);
    assert.equal(app.document.querySelector('.casino-budget-track i').style.width,'100%');
    assert.equal(app.document.querySelector('.casino-final-grid .casino-allocation button:last-child').disabled,true);
    assert.match(app.document.querySelector('.casino-recommendation').textContent,/60 SEGUNDOS/);
  }finally{app.close()}
});
