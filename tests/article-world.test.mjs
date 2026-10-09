import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {JSDOM} from 'jsdom';
await build({entryPoints:['app/grammar-classroom/studio/article-world.ts'],bundle:true,platform:'node',format:'cjs',outfile:'node_modules/.cache/article-world.cjs'});
const {mountArticleWorld}=createRequire(import.meta.url)('../node_modules/.cache/article-world.cjs');
test('gallery renders spatial geometry and real camera views without WebGL',()=>{
 const dom=new JSDOM('<div id="world"><button data-world-pin="0"></button><button data-world-pin="1"></button><button data-world-pin="2"></button><button data-world-pin="3"></button></div>');
 Object.assign(globalThis,{window:dom.window,document:dom.window.document,self:dom.window,ResizeObserver:class{observe(){}disconnect(){}},IntersectionObserver:class{observe(){}disconnect(){}},requestAnimationFrame:()=>1,cancelAnimationFrame:()=>{}});
 dom.window.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
 const host=document.getElementById('world');Object.defineProperties(host,{clientWidth:{value:780},clientHeight:{value:430}});
 let ready=false;const world=mountArticleWorld(host,()=>{},()=>{ready=true;},()=>{});
 try{assert.equal(ready,true);assert.equal(host.getAttribute('data-renderer'),'svg');const svg=host.querySelector('svg');assert.ok(svg);assert.ok(svg.querySelectorAll('path').length>100,'the full room is rendered, not a text placeholder');const overview=svg.innerHTML;world.view('focus');assert.notEqual(svg.innerHTML,overview,'camera controls project another real view');world.update({kind:'sculpture',plural:true,selected:1,phase:'known'});assert.ok(svg.querySelectorAll('path').length>100);assert.ok(host.querySelector('[data-world-pin="1"]').style.left);}
 finally{world.dispose();assert.equal(host.querySelector('svg'),null);dom.window.close();}
});
