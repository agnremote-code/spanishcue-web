import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
import {JSDOM} from 'jsdom';
const require=createRequire(import.meta.url),dom=new JSDOM('<div id="root"></div>',{url:'https://spanishcue.com/the-sound-map?level=B2&campaign=test',pretendToBeVisual:true});
Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,IS_REACT_ACT_ENVIRONMENT:true});
dom.window.matchMedia=()=>({matches:true});dom.window.HTMLElement.prototype.scrollIntoView=function(){};
dom.window.HTMLMediaElement.prototype.pause=function(){};dom.window.HTMLMediaElement.prototype.load=function(){};
dom.window.HTMLCanvasElement.prototype.getContext=function(){return null;};
const React=require('react'),{act}=React,{createRoot}=require('react-dom/client');
const built=await build({stdin:{contents:"export {default as Page} from './app/the-sound-map/page'; export {LocaleProvider} from './app/i18n/LocaleProvider';",resolveDir:process.cwd()},bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
const loaded={exports:{}};
runInNewContext(`(function(require,module,exports){${built.outputFiles[0].text}\n})`,{console:{...console,error:(...args)=>{if(!args.join(' ').includes('Error creating WebGL context'))console.error(...args);}},window:dom.window,document:dom.window.document,URL,localStorage:dom.window.localStorage,requestAnimationFrame:cb=>setTimeout(cb,0),cancelAnimationFrame:clearTimeout,setTimeout,clearTimeout})(require,loaded,loaded.exports);
const root=createRoot(document.getElementById('root'));
const click=async el=>act(async()=>{el.dispatchEvent(new dom.window.MouseEvent('click',{bubbles:true}));await new Promise(resolve=>setTimeout(resolve,10));});
test('saved/linked level works without WebGL; scene close restores keyboard focus and level change preserves unrelated URL params',async()=>{
 await act(async()=>{root.render(React.createElement(loaded.exports.LocaleProvider,{initialLocale:'es'},React.createElement(loaded.exports.Page)));});
 await act(async()=>{await new Promise(resolve=>setTimeout(resolve,30));});
 assert.equal(document.querySelector('#sm-level').value,'B2');
 assert.equal(document.querySelectorAll('.sm-pin').length,6);assert.ok(!document.querySelector('.sm-map').classList.contains('ready'));
 const trigger=document.querySelector('[data-sound-location="balcony"]');trigger.focus();await click(trigger);
 await act(async()=>{await new Promise(resolve=>setTimeout(resolve,10));});
 assert.equal(document.activeElement.id,'sm-scene-title');
 await click(document.querySelector('.sm-panel-head button'));
 assert.equal(document.querySelector('.sm-panel'),null);assert.equal(document.activeElement,trigger);
 const pin=document.querySelectorAll('.sm-pin')[1];
 // Pointer dispatch does not implicitly focus the button in every browser.
 await click(pin);
 await click(document.querySelector('.sm-panel-head button'));
 assert.equal(document.activeElement,pin,'closing a map-opened scene returns focus to the same map pin');
 const select=document.querySelector('#sm-level');
 await act(async()=>{select.value='C2';select.dispatchEvent(new dom.window.Event('change',{bubbles:true}));});
 assert.equal(new URL(window.location.href).searchParams.get('campaign'),'test');assert.equal(new URL(window.location.href).searchParams.get('level'),'C2');
 for(const level of ['A0','A1','A2','B1','B2','C1','C2']){
  await act(async()=>{select.value=level;select.dispatchEvent(new dom.window.Event('change',{bubbles:true}));});
  assert.equal(document.querySelector('audio'),null,'level change removes the previous audio');
  for(const pin of document.querySelectorAll('.sm-pin')){
   await click(pin);
   assert.equal(document.querySelectorAll('audio').length,1);
   assert.equal(document.querySelector('audio').getAttribute('src'),`/audio/the-sound-map/${level}-${pin.dataset.soundLocation}.mp3`);
   assert.equal(document.querySelector('.sm-transcript'),null);
  }
 }
 await act(async()=>root.unmount());dom.window.close();
});
