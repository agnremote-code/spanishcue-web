// A browser that translates the page rewrites text nodes behind React. Without the guard the next
// update throws NotFoundError and the student sees «Something went wrong» instead of the Homework.
import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
const require=createRequire(import.meta.url);
const built=await build({entryPoints:['app/dom-translation-guard.ts'],bundle:true,format:'cjs',platform:'node',write:false});
const load=(context)=>{const m={exports:{}};new Function('module','exports','Node',built.outputFiles[0].text)(m,m.exports,context);return m.exports;};

/** What Chrome's translator does: each text node becomes <font><font>translated</font></font>. */
function translatePage(document){
  const walker=document.createTreeWalker(document.body,4);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){if(!node.nodeValue.trim())continue;const outer=document.createElement('font'),inner=document.createElement('font');inner.textContent=`[en] ${node.nodeValue}`;outer.appendChild(inner);node.parentNode.replaceChild(outer,node);}
}
async function reactPage(guarded){
  const dom=new JSDOM('<!doctype html><body><div id="root"></div></body>',{pretendToBeVisual:true});
  const {window}=dom;
  for(const key of ['window','document','Node','HTMLElement','navigator','MutationObserver'])Object.defineProperty(globalThis,key,{value:window[key],configurable:true,writable:true});
  globalThis.IS_REACT_ACT_ENVIRONMENT=true;
  if(guarded)load(window.Node).installDomTranslationGuard(window.Node);
  const React=require('react'),{createRoot}=require('react-dom/client'),{act}=React;
  const errors=[];
  // The same shapes the Homework player has: text next to elements, conditional blocks, counters.
  function Player({step}){return React.createElement('main',null,
    React.createElement('p',null,'Semana ',step,' · ',React.createElement('b',null,'Objetivo')),
    step>0&&React.createElement('span',null,'Guardando progreso…'),
    step%2===0?React.createElement('h2',null,'Teoría'):'Práctica',
    React.createElement('small',null,step,'/13 secciones'));}
  const root=createRoot(window.document.getElementById('root'),{onUncaughtError:(error)=>errors.push(error),onCaughtError:(error)=>errors.push(error)});
  const render=async(step)=>{try{await act(async()=>root.render(React.createElement(Player,{step})));}catch(error){errors.push(error);}};
  return {window,render,errors};
}

test('without the guard a translated page breaks on the next React update (the bug students saw)',async()=>{
  const page=await reactPage(false);
  await page.render(0);translatePage(page.window.document);
  for(const step of [1,2,3]){await page.render(step);translatePage(page.window.document);}
  assert.ok(page.errors.some(error=>/removeChild|insertBefore|not a child/i.test(String(error?.message))),'expected the translator mismatch to throw without the guard');
});

test('with the guard a translated page keeps working through React updates',async()=>{
  const page=await reactPage(true);
  await page.render(0);translatePage(page.window.document);
  for(const step of [1,2,3,4]){await page.render(step);translatePage(page.window.document);}
  assert.deepEqual(page.errors.map(error=>String(error?.message)),[]);
  assert.match(page.window.document.body.textContent,/Guardando progreso…/);
});

test('the guard leaves ordinary DOM work untouched and installs once',()=>{
  const {window}=new JSDOM('<!doctype html><body><ul id="l"><li id="a">a</li><li id="b">b</li></ul></body>');
  const guard=load(window.Node);guard.installDomTranslationGuard(window.Node);
  const patched=window.Node.prototype.removeChild;guard.installDomTranslationGuard(window.Node);
  assert.equal(window.Node.prototype.removeChild,patched);
  const list=window.document.getElementById('l'),a=window.document.getElementById('a'),b=window.document.getElementById('b');
  const c=window.document.createElement('li');c.id='c';list.insertBefore(c,b);
  assert.deepEqual([...list.children].map(node=>node.id),['a','c','b']);
  assert.equal(list.removeChild(a),a);assert.deepEqual([...list.children].map(node=>node.id),['c','b']);
  // A node that is no longer there: no throw, nothing else removed, new content still lands.
  assert.equal(list.removeChild(a),a);
  const d=window.document.createElement('li');d.id='d';list.insertBefore(d,a);
  assert.deepEqual([...list.children].map(node=>node.id),['c','b','d']);
});

test('the guard ships with every page and Homework opts out of page translation',async()=>{
  assert.match(await readFile('app/i18n/LocaleProvider.tsx','utf8'),/^import "\.\.\/dom-translation-guard";$/m);
  const layout=await readFile('app/autoestudio/layout.tsx','utf8');
  assert.match(layout,/translate="no"/);assert.match(layout,/notranslate/);
});
