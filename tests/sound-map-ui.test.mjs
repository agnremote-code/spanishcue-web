import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {readFile} from 'node:fs/promises';
import {build} from 'esbuild';
import {JSDOM} from 'jsdom';
const require=createRequire(import.meta.url);
const dom=new JSDOM('<!doctype html><div id="root"></div>',{url:'https://spanishcue.com/the-sound-map'});
Object.assign(globalThis,{window:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,Event:dom.window.Event,IS_REACT_ACT_ENVIRONMENT:true});
let paused=0;
dom.window.HTMLMediaElement.prototype.pause=function(){paused++;};
dom.window.HTMLMediaElement.prototype.load=function(){};
const React=require('react');const {act}=React;const {createRoot}=require('react-dom/client');
const built=await build({entryPoints:['app/the-sound-map/ScenePanel.tsx'],bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom'],loader:{'.css':'empty'}});
const loaded={exports:{}};
runInNewContext(`(function(require,module,exports){${built.outputFiles[0].text}\n})`,{console,window:dom.window,document:dom.window.document})(require,loaded,loaded.exports);
const Panel=loaded.exports.default;const data=JSON.parse(await readFile('app/the-sound-map/content.json','utf8'));
const container=document.getElementById('root');const root=createRoot(container);
const button=(selector,text)=>[...container.querySelectorAll(selector)].find(b=>b.textContent.includes(text));
async function click(element){assert.ok(element,'control exists');await act(async()=>element.dispatchEvent(new dom.window.MouseEvent('click',{bubbles:true})));}
let saved=0;
const render=async(level,id='balcony')=>act(async()=>root.render(React.createElement(Panel,{key:level+id,level,scene:data.levels[level].scenes.find(s=>s.id===id),location:data.locations.find(l=>l.id===id),clip:{src:`/${level}-${id}.mp3`,cleanSrc:`/${level}-${id}-clean.mp3`},onComplete:()=>saved++,onNext:()=>{},onClose:()=>{},alreadyComplete:false})));
test('A0 accessible support unlocks tasks; wrong attempts can be retried; completion requires both tasks and production',async()=>{
 await render('A0');assert.equal(container.querySelector('.sm-task'),null);
 await click(button('.sm-help-row button','Continue'));
 assert.equal(container.querySelectorAll('.sm-task').length,2);
 let tasks=container.querySelectorAll('.sm-task');
 await click(tasks[0].querySelectorAll('.sm-options button')[1]);await click(tasks[0].querySelector('.sm-check'));
 await act(async()=>{await new Promise(resolve=>setTimeout(resolve,0));});
 assert.equal(document.activeElement.id,'sm-feedback-0','checking moves focus to the correction');
 assert.match(tasks[0].textContent,/Incorrect/);assert.ok(container.querySelector('.sm-finish').disabled);
 assert.match(tasks[0].querySelector('.sm-feedback').textContent,/Se escucha «mi planta»/);
 assert.match(tasks[0].querySelector('.sm-options .incorrect').textContent,/Tu respuesta/);
 assert.match(tasks[0].querySelector('.sm-options .correct').textContent,/Respuesta correcta/);
 assert.ok([...tasks[0].querySelectorAll('.sm-options button')].every(b=>b.disabled));
 await click(tasks[0].querySelector('.sm-retry'));
 assert.equal(tasks[0].querySelector('.sm-feedback'),null);
 await click(tasks[0].querySelectorAll('.sm-options button')[0]);await click(tasks[0].querySelector('.sm-check'));
 await click(tasks[1].querySelectorAll('.sm-options button')[data.levels.A0.scenes[0].tasks[1].answer]);await click(tasks[1].querySelector('.sm-check'));
 assert.ok(container.querySelector('.sm-finish').disabled);
 await click(container.querySelector('.sm-produce input'));await click(container.querySelector('.sm-finish'));assert.equal(saved,1);
});
test('changing level unmounts audio and clears answers, transcript and completion',async()=>{
 await click(button('.sm-help-row button','Show text'));const before=paused;
 await render('C2');assert.ok(paused>before);assert.equal(container.querySelector('.sm-transcript'),null);assert.equal(container.querySelector('.sm-task'),null);
 await act(async()=>container.querySelector('audio').dispatchEvent(new dom.window.Event('ended',{bubbles:true})));
 assert.equal(container.querySelectorAll('.sm-task').length,2);
 assert.match(container.querySelector('audio').getAttribute('src'),/C2/);
 assert.equal(container.querySelectorAll('.sm-options .selected').length,0);
});
test('open answers show an explicit self-review, require a response and all rubric checks',async()=>{
 const open=container.querySelectorAll('.sm-task')[1];assert.ok(open.querySelector('.sm-check').disabled);
 await click(open.querySelector('input'));await click(open.querySelector('.sm-check'));
 assert.match(open.textContent,/no es una corrección automática/);
 const review=open.querySelector('.sm-self-review');assert.ok(review.querySelector('button').disabled);
 for(const input of review.querySelectorAll('input'))await click(input);
 assert.equal(review.querySelector('button').disabled,false);await click(open.querySelector('input'));assert.equal(review.querySelector('button').disabled,true);await click(open.querySelector('input'));await click(review.querySelector('button'));
 assert.match(container.querySelector('.sm-section-label').textContent,/1\/2/);
});
test('ordering can remove and rebuild a sequence before marking complete',async()=>{
 await render('A0','singer');await click(button('.sm-help-row button','Continue'));
 const order=container.querySelectorAll('.sm-task')[1];const options=order.querySelectorAll('.sm-options button');
 await click(options[1]);await click(options[1]);assert.equal(order.querySelectorAll('.selected').length,0);
 for(const i of [0,1,2])await click(options[i]);await click(order.querySelector('.sm-check'));
 assert.match(order.querySelector('.sm-feedback').textContent,/Orden correcto/);
 assert.deepEqual([...order.querySelectorAll('.sm-order-solution li')].map(li=>li.textContent),data.levels.A0.scenes[1].tasks[1].answer.map(i=>data.levels.A0.scenes[1].tasks[1].items[i]));
 assert.ok(container.querySelector('.sm-finish').disabled);
 await click(order.querySelector('.sm-retry'));
 assert.equal(order.querySelectorAll('.selected').length,0);
 for(const i of [2,0,1])await click(options[i]);await click(order.querySelector('.sm-check'));
 assert.match(order.querySelector('.sm-feedback').textContent,/Yes/);
 await click(order.querySelector('.sm-retry'));
 assert.match(container.querySelector('.sm-section-label').textContent,/0\/2/,'retry invalidates an earlier completed answer');
});
test('every objective activity across A0–C2 reveals its authored evidence and correct answer after a wrong attempt',async()=>{
 for(const [level,unit] of Object.entries(data.levels))for(const scene of unit.scenes){
  await render(level,scene.id);await click(button('.sm-help-row button',level==='A0'?'Continue':'apoyo'));
  const activities=container.querySelectorAll('.sm-task');
  for(const [index,task] of scene.tasks.entries()){
   if(task.type==='open')continue;
   const activity=activities[index],options=activity.querySelectorAll('.sm-options button');
   const attempt=task.type==='choice'?[(task.answer+1)%task.options.length]:[...task.answer.slice(1),task.answer[0]];
   for(const i of attempt)await click(options[i]);
   await click(activity.querySelector('.sm-check'));
   assert.ok(activity.querySelector('.sm-feedback').textContent.includes(task.explanation),`${level}/${scene.id} explains the evidence`);
   if(task.type==='choice'){
    assert.ok(options[task.answer].classList.contains('correct'));
    assert.ok(activity.querySelector('.sm-feedback').textContent.includes(task.options[task.answer]),'focused correction names the correct answer');
   }
   else assert.deepEqual([...activity.querySelectorAll('.sm-order-solution li')].map(li=>li.textContent),task.answer.map(i=>task.items[i]));
   assert.match(container.querySelector('.sm-section-label').textContent,/0\/2/);
  }
 }
 await act(async()=>root.unmount());dom.window.close();
});
