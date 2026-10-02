import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {contentFor} from '../app/la-entonacion-cambia-todo/levels.mjs';
const require=createRequire(import.meta.url),React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
async function component(path){const r=await build({entryPoints:[path],bundle:true,format:'cjs',platform:'node',write:false,external:['react','react-dom','next/*'],loader:{'.css':'empty'}});const m={exports:{}};runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console,URL})(require,m,m.exports);return m.exports.default;}
const Card=await component('app/phonetics-family/ActivityCard.tsx');
const base={heard:[],selected:[],checked:false,revealed:false,assisted:false,produced:false};
const html=(activity,attempt)=>renderToStaticMarkup(React.createElement(Card,{activity,attempt,definition:{clips:{}},teacher:false,onAction(){}}));
test('perceptual tasks do not leak oral-transfer answers before checking the attempt',()=>{
 for(const level of ['A1','A2','B1','B2','C1','C2'])for(const a of contentFor(level).activities.filter(a=>!['repeat','transfer'].includes(a.kind))){
  const heard=[a.clip,...(a.secondClip?[a.secondClip]:[])];const before=html(a,{...base,heard});assert.ok(!before.includes('De la escucha a tu voz'),`${level}/${a.id} leaks transfer`);
  assert.ok(html(a,{...base,heard,selected:a.options?[a.answer]:a.target??[],checked:true}).includes('De la escucha a tu voz'));
 }
});
test('transcripts are absent initially, explicit help is marked assisted, and oral tasks unlock after hearing',()=>{
 const c=contentFor('A1');const a=c.activities[0];assert.ok(!html(a,base).includes(a.text));assert.ok(!html(a,{...base,heard:[a.clip]}).includes(a.text));
 const assisted=html(a,{...base,assisted:true,revealed:true});assert.ok(assisted.includes(a.text));assert.match(assisted,/Con apoyo de texto/);
 const oral=c.activities.find(a=>a.kind==='repeat');assert.ok(html(oral,{...base,heard:[oral.clip]}).includes('De la escucha a tu voz'));
});
test('six-level picker has one tab stop and native radio semantics, including compact disclosure',async()=>{
 const Picker=await component('app/phonetics-family/LevelPicker.tsx');const props={level:'B2',onChange(){}};
 const full=renderToStaticMarkup(React.createElement(Picker,props));assert.equal((full.match(/role="radio"/g)||[]).length,6);assert.equal((full.match(/tabindex="0"/g)||[]).length,1);assert.match(full,/role="radiogroup"/);assert.match(full,/data-level="B2" aria-checked="true"/);
 const compact=renderToStaticMarkup(React.createElement(Picker,{...props,compact:true}));assert.match(compact,/aria-expanded="false"/);assert.match(compact,/hidden=""/);
});

test('every listening prompt hides the authored transcript until requested or checked',()=>{
 for(const level of ['A1','A2','B1','B2','C1','C2'])for(const a of contentFor(level).activities.filter(a=>!['repeat','transfer'].includes(a.kind))){
  const normalize=s=>s.toLowerCase().replace(/[.,!?¿¡«»]/g,'');
  assert.ok(!normalize(a.prompt).includes(normalize(a.text)),`${level}/${a.id} prompt leaks transcript`);
  assert.ok(!html(a,base).includes(a.text),`${level}/${a.id} initial card leaks transcript`);
 }
});
