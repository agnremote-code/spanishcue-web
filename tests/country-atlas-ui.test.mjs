import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
import {JSDOM} from 'jsdom';
const require=createRequire(import.meta.url);
const dom=new JSDOM('<!doctype html><div id="root"></div>',{url:'https://spanishcue.com/suecia?level=A0&utm_source=qa#atlas-map'});
Object.assign(globalThis,{window:dom.window,self:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,Event:dom.window.Event,IS_REACT_ACT_ENVIRONMENT:true});
dom.window.HTMLElement.prototype.scrollIntoView=function(){};
const React=require('react');const {act}=React;const {createRoot}=require('react-dom/client');
const result=await build({entryPoints:['app/country-atlas/CountryAtlas.tsx'],bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
const loaded={exports:{}};
runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,window:dom.window,self:dom.window,document:dom.window.document,Event:dom.window.Event})(require,loaded,loaded.exports);
const Atlas=loaded.exports.default;const container=document.getElementById('root');const root=createRoot(container);
async function click(element){assert.ok(element,'control exists');await act(async()=>element.dispatchEvent(new dom.window.MouseEvent('click',{bubbles:true})));}
const button=(selector,text)=>[...container.querySelectorAll(selector)].find(b=>b.textContent.includes(text));
test('21 country/level combinations render the correct journey and maintain level history safely',async()=>{
 for(const slug of ['suecia','argentina','espana']){
  window.history.replaceState(null,'',`/${slug}?level=A0&utm_source=qa#atlas-map`);
  await act(async()=>root.render(React.createElement(Atlas,{slug,key:slug})));
  for(const level of ['A0','A1','A2','B1','B2','C1','C2']){
   await click(button('.cf-level-control button',level));
   assert.equal(container.querySelector('.cf-family').dataset.level,level);
   assert.equal(container.querySelectorAll('.atlas-stage-list button').length,10);
   assert.ok(container.querySelector('.atlas-prompt').textContent.length>40);
   assert.ok(window.location.search.includes('utm_source=qa'));
   assert.equal(window.location.hash,'#atlas-map');
  }
 }
});
test('A0 tiles produce a translated sentence and saved speech reaches the final mission',async()=>{
 window.history.replaceState(null,'','/suecia?level=A0');
 await act(async()=>root.render(React.createElement(Atlas,{slug:'suecia',key:'a0-flow'})));
 await click(button('.atlas-tiles button','Argentina'));
 assert.ok(container.querySelector('.atlas-built').textContent.includes('Soy de Argentina'));
 assert.ok(container.querySelector('.atlas-built [lang=en]').textContent.includes('I am from Argentina'));
 await click(container.querySelector('.atlas-save'));
 await click(container.querySelectorAll('.atlas-stage-list button')[9]);
 assert.ok(container.querySelector('.atlas-saved').textContent.includes('Soy de Argentina'));
 await click(container.querySelector('.atlas-saved button'));
 assert.equal(container.querySelector('.atlas-draft textarea').value,'Soy de Argentina');
});
test('map keyboard selection, route ordering, surprise reveal and level reset work',async()=>{
 await act(async()=>root.render(React.createElement(Atlas,{slug:'espana',key:'map-flow'})));
 const pin=container.querySelectorAll('.atlas-pin')[16];
 await act(async()=>pin.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Enter',bubbles:true})));
 assert.ok(container.querySelector('.atlas-context h2').textContent.includes('Canarias'));
 await click(container.querySelectorAll('.atlas-stage-list button')[6]);
 const select=container.querySelector('.atlas-route select');
 for(const id of ['madrid','canarias'])await act(async()=>{select.value=id;select.dispatchEvent(new dom.window.Event('change',{bubbles:true}));});
 assert.equal(container.querySelectorAll('.atlas-route li').length,2);
 await click(container.querySelectorAll('.atlas-route li')[1].querySelector('button'));
 assert.ok(container.querySelector('.atlas-route li').textContent.includes('Canarias'));
 await click(container.querySelectorAll('.atlas-stage-list button')[8]);
 await click(container.querySelector('.atlas-surprise button'));
 assert.ok(container.querySelector('.atlas-surprise p').textContent.includes('museo'));
 await click(button('.cf-level-control button','C2'));
 assert.equal(container.querySelectorAll('.atlas-stage-list button')[0].getAttribute('aria-current'),'step');
 assert.equal(container.querySelector('.atlas-built'),null);
 await act(async()=>root.unmount());
 dom.window.close();
});
