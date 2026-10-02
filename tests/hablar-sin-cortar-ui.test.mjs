import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {readFileSync} from 'node:fs';
import {contentFor} from '../app/hablar-sin-cortar/levels.mjs';
const require=createRequire(import.meta.url),React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
async function component(path){const r=await build({entryPoints:[path],bundle:true,format:'cjs',platform:'node',write:false,external:['react','react-dom','next/*'],loader:{'.css':'empty'}});const m={exports:{}};runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console,URL})(require,m,m.exports);return m.exports.default;}
const Card=await component('app/phonetics-family/ActivityCard.tsx');
const base={heard:[],selected:[],checked:false,revealed:false,assisted:false,produced:false};
const html=(activity,attempt,voice=false)=>renderToStaticMarkup(React.createElement(Card,{activity,attempt,definition:{id:voice?'hablar-sin-cortar':'test',clips:{}},teacher:false,onAction(){}}));
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
test('wrong answers offer a retry without revealing transcript or explanation at every level',()=>{
 for(const level of ['A1','A2','B1','B2','C1','C2']){
  const a=contentFor(level).activities.find(a=>a.kind==='choice');
  const output=html(a,{...base,heard:[a.clip],selected:[a.answer===0?1:0],checked:true});
  assert.match(output,/data-state="incorrect"/);assert.match(output,/Otra escucha/);
  assert.ok(!output.includes(a.text));assert.ok(!output.includes(a.explanation));
 }
});
test('correct answers show an accessible success state and optional explanation in all levels',()=>{
 for(const level of ['A1','A2','B1','B2','C1','C2']){
  const a=contentFor(level).activities.find(a=>a.kind==='choice');
  const output=html(a,{...base,heard:[a.clip],selected:[a.answer],checked:true});
  assert.match(output,/data-state="correct"/);assert.match(output,/✓/);assert.match(output,/Correcto/);
  assert.match(output,/<details/);assert.match(output,/¿Por qué\?/);assert.match(output,/Siguiente/);
 }
});
test('a nonvisual learner can inspect the model pause and connection positions',async()=>{
 const Flow=await component('app/phonetics-family/SpeechFlow.tsx');
 const pause=renderToStaticMarkup(React.createElement(Flow,{tokens:['Soy','Ana.','Vivo','acá.'],pauses:[1]}));
 assert.match(pause,/Pausa después de Ana\./);
 const joined=renderToStaticMarkup(React.createElement(Flow,{tokens:['Es','una','casa.'],connections:[0]}));
 assert.match(joined,/Unión entre Es y una/);
});
test('the connected-speech lesson uses a prominent real voice attempt across six levels',()=>{
 for(const level of ['A1','A2','B1','B2','C1','C2']){
  const c=contentFor(level),oral=c.activities.find(a=>a.kind==='repeat');
  const rendered=html(oral,{...base,heard:[oral.clip]},true);
  assert.match(rendered,/DECILO|GRABAR/i);assert.doesNotMatch(rendered,/Ya lo dije|Producción realizada|Registro manual/);
  const connection=c.activities.find(a=>a.kind==='connect');
  assert.match(html(connection,{...base,heard:[connection.clip],selected:connection.target,checked:true},true),/DECILO|GRABAR/i);
  const initial=html(connection,{...base,heard:[connection.clip]},true);
  assert.match(initial,/ESCUCHÁ Y DECILO IGUAL/);
  assert.doesNotMatch(initial,/Tocá ·|Comprobar|Ruta central|Texto de apoyo|pf-tokenline/);
 }
});
test('the final challenge offers an actual recorded voice turn',()=>{
 const source=readFileSync('app/phonetics-family/PhoneticsWorld.tsx','utf8');
 assert.match(source,/d\.id==='hablar-sin-cortar'\?<><p className="pf-muted">Grabá[\s\S]*?<SpeechAttempt/);
});
test('a contrast exercise begins with the continuous model, even when A is the chopped clip',()=>{
 const activity=contentFor('C2').activities.find(a=>a.kind==='ab');
 const definition={id:'hablar-sin-cortar',clips:{[activity.clip]:{id:activity.clip,src:'/model.mp3'},[activity.secondClip]:{id:activity.secondClip,src:'/chopped.mp3'}}};
 const rendered=renderToStaticMarkup(React.createElement(Card,{activity,attempt:base,definition,teacher:false,onAction(){}}));
 assert.match(rendered,/src="\/model\.mp3"/);assert.doesNotMatch(rendered,/src="\/chopped\.mp3"/);
});
test('missing model audio leaves voice practice available with an honest cue',()=>{
 const activity=contentFor('A1').activities[0],rendered=html(activity,base,true);
 assert.match(rendered,/Audio no disponible/);
 assert.match(rendered,/DECILO/);
 assert.match(rendered,/pedile un modelo a tu profe/);
});
