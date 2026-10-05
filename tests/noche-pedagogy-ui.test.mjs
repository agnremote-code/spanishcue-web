import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import * as engine from '../app/noche-abierta/engine.mjs';

const dom = new JSDOM('<div id="root"></div>', { url: 'https://spanishcue.test/noche-abierta' });
for (const key of ['window','document','HTMLElement','Event','MouseEvent']) globalThis[key] = dom.window[key];
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
window.matchMedia = () => ({matches:false,addEventListener(){},removeEventListener(){}});
window.HTMLCanvasElement.prototype.getContext = () => null;
const require = createRequire(import.meta.url);
const React = require('react');
const {act} = React;
const {createRoot} = require('react-dom/client');
const built = await build({entryPoints:['app/noche-abierta/NocheAbierta.tsx'],bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom'],loader:{'.css':'empty'},plugins:[{name:'link',setup(b){
  b.onResolve({filter:/^next\/link$/},()=>({path:'link',namespace:'stub'}));
  b.onLoad({filter:/.*/,namespace:'stub'},()=>({contents:"import React from 'react';export default function Link(p){return <a {...p}/>}",loader:'jsx',resolveDir:process.cwd()}));
}}]});
const compiled = {exports:{}};
new Function('require','module','exports',built.outputFiles[0].text)(require,compiled,compiled.exports);

for (const level of ['A1','B2','C1']) test(`${level}: real rendered controls enforce choice then personal speaking in five places`, async () => {
  for (const [place,id] of [['cafe','cafe-alla'],['plaza','kenji'],['bar','caro'],['museo','foto'],['taxi','taxi-cortado']]) {
    const initial=engine.openLocation(engine.startExploring(engine.initialState(level)),place,id);
    const expected=engine.currentView(initial);
    const root=createRoot(document.getElementById('root'));
    try {
      await act(()=>root.render(React.createElement(compiled.exports.default,{initial})));
      assert.equal(document.querySelector('.na-card').dataset.beat,'choose');
      assert.equal(document.querySelectorAll('.na-options button').length,3);
      assert.equal(document.querySelector('[aria-label="Pregunta siguiente"]').disabled,true);
      assert.equal(document.querySelector('.na-ask').textContent,expected.beat.prompt);
      await act(()=>document.querySelector('.na-options button').click());
      assert.equal(document.querySelector('.na-card').dataset.beat,'talk');
      assert.equal(document.querySelector('.na-ask').textContent,expected.activity.close);
      assert.equal(document.querySelectorAll('.na-options button').length,0);
      assert.equal(document.querySelectorAll('.na-beat .na-context,.na-beat .na-outcome').length,0);
      assert.equal(document.querySelector('[aria-label="Pregunta siguiente"]').disabled,true);
      await act(()=>document.querySelector('[aria-label="Pregunta anterior"]').click());
      assert.equal(document.querySelector('.na-card').dataset.beat,'choose');
      assert.equal(document.querySelectorAll('.na-options button').length,3);
    } finally { await act(()=>root.unmount()); }
  }
});

test('level arrow keys move focus after the React event has finished', async () => {
  const frames = [];
  window.requestAnimationFrame = callback => { frames.push(callback); return frames.length; };
  const root = createRoot(document.getElementById('root'));
  try {
    await act(() => root.render(React.createElement(compiled.exports.default, { initial: engine.initialState('A1') })));
    const first = document.querySelector('[data-level="A1"]');
    first.focus();
    await act(() => first.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })));
    assert.equal(document.querySelector('[data-level="A2"]').getAttribute('aria-checked'), 'true');
    assert.doesNotThrow(() => frames.splice(0).forEach(callback => callback()));
    assert.equal(document.activeElement.dataset.level, 'A2');
  } finally { await act(() => root.unmount()); }
});
