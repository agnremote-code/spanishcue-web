import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
import {getLevelConfig, getRoundForIndex} from '../app/red-flag-o-no/engine.mjs';
const require=createRequire(import.meta.url);
const React=require('react');
const {renderToString}=require('react-dom/server');

test('A1 supplies its own complete deck with concrete support for every situation',()=>{
 const config=getLevelConfig('A1');
 assert.equal(config.situations.length,18);
 assert.equal(new Set(config.situations).size,18);
 assert.equal(config.followUps.length,18);
 assert.equal(new Set(config.followUps).size,18);
 for(const old of ['A2','B1','B2']) for(const prompt of config.situations) assert.ok(!getLevelConfig(old).situations.includes(prompt));
 assert.deepEqual([0,5,6,11,12,17].map(getRoundForIndex),['quick','quick','ambiguous','ambiguous','deep','deep']);
 assert.equal(config.finale.length,4);
 assert.ok(config.finale.some(prompt=>/pregunt|Pregunta/.test(prompt)));
});

async function loadActivity(){
 const source=await readFile('app/red-flag-o-no/RedFlagGame.tsx','utf8');
 const result=await build({stdin:{contents:source+'\nexport {RedFlagActivity};',resolveDir:process.cwd()+'/app/red-flag-o-no',loader:'tsx'},jsx:'automatic',bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 let state=[],slot=0;
 const hooks={...React,useState:initial=>{const i=slot++;return [i in state?state[i]:typeof initial==='function'?initial():initial,value=>{state[i]=typeof value==='function'?value(state[i]):value;}];},useMemo:fn=>fn(),useCallback:fn=>fn,useEffect:()=>{}};
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process})(name=>name==='react'?hooks:require(name),loadedModule,loadedModule.exports);
 return {render(level,values){state=values;slot=0;return loadedModule.exports.RedFlagActivity({level});},html(level,values){return renderToString(this.render(level,values));}};
}

test('A1 renders Spanish choices, visible frames and item-specific support in every round',async()=>{
 const activity=await loadActivity();
 const entry=activity.html('A1',['warmup',0,{},{}]);
 assert.match(entry,/¿Qué te gusta en una cita/);
 assert.match(entry,/Para quien enseña/);
 assert.doesNotMatch(entry,/MODO PLAY|RED FLAG|GREEN FLAG/);
 for(let index=0;index<18;index++){
  const html=activity.html('A1',['play',index,{[index]:'green'},{[index]:true}]);
  assert.match(html,/SEÑAL VERDE/);
  assert.match(html,/SEÑAL ROJA/);
  assert.match(html,/Me gusta porque/);
  assert.match(html,/Palabras útiles/);
  assert.ok(html.includes(getLevelConfig('A1').followUps[index]));
  assert.doesNotMatch(html,/GREEN FLAG|RED FLAG|Defendé el límite/);
 }
});

test('A1 closing task elicits a concrete exchange and historical levels retain their UI',async()=>{
 const activity=await loadActivity();
 const closing=activity.html('A1',['finale',17,{0:'green',1:'red'},{}]);
 assert.match(closing,/Nuestra próxima cita/);
 assert.match(closing,/¿Dónde nos vemos/);
 assert.match(closing,/Cambiá los papeles/);
 const old=activity.html('A2',['play',0,{0:'green'},{0:true}]);
 assert.match(old,/GREEN FLAG/);
 assert.match(old,/RED FLAG/);
 assert.doesNotMatch(old,/Palabras útiles/);
});
