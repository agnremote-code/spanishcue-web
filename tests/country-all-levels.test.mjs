import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
const require=createRequire(import.meta.url),React=require('react'),{renderToString}=require('react-dom/server');
const stateHook=React['useState'];
const levels=['A0','A1','A2','B1','B2','C1','C2'];
const routes=[['estados-unidos-a2-b1','state'],['estados-unidos-basico','stop'],['australia-en-movimiento','lesson'],['reino-unido-en-relieve','area'],['suiza-en-relieve','canton'],['mexico','entity'],['israel-en-capas','topic'],['indonesia-fantastica','province'],['irlanda-en-relieve','county'],['mundo-fantastico','destination'],['buenos-aires-en-la-calle','place'],['argento-roleplays',0]];
async function compiled(source,dir,react=React){
 const built=await build({stdin:{contents:source,resolveDir:process.cwd()+'/'+dir,loader:'tsx'},bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${built.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,Map,Set})(name=>name==='react'?react:require(name),loadedModule,loadedModule.exports);
 return loadedModule.exports;
}
test('all country maps and scenes render seven real level paths, with bilingual zero-Spanish support',async()=>{
 for(const [route,screen] of routes){
  const source=await readFile(`app/${route}/page.tsx`,'utf8');
  assert.equal((source.match(/<ConversationFamily /g)||[]).length,1,route);
  let first=true;
  const mocked={...React,useState:initial=>{if(first){first=false;return [screen,()=>{}];}return stateHook(initial);}};
  const {CountryExperience}=await compiled(source+'\nexport {CountryExperience};',`app/${route}`,mocked);
  const htmlByLevel=[];
  for(const level of levels){
   first=true;
   const html=renderToString(React.createElement(CountryExperience,{level}));
   assert.ok(!html.includes('undefined'),`${route}/${level}: no undefined content`);
   assert.match(html,new RegExp(`data-country-support="${level}"`),`${route}/${level}: exercise screen`);
   assert.match(html,/Closing conversation/);
   if(level==='A0'){
    assert.match(html,/Ready-to-use verbs/);
    assert.match(html,/Again, please/);
    assert.match(html,/Speaking choices/);
    assert.match(html,/Teacher guide/);
   }
   htmlByLevel.push(html);
  }
  assert.equal(new Set(htmlByLevel).size,7,route);
 }
});
test('level progression changes questions, scaffolding, models and oral challenges at a real local stop',async()=>{
 const {countryActivity,countrySupport}=await compiled('export * from "./country-levels";','app/conversation-families');
 const context={name:'Queensland',places:[{es:'Daintree',en:'Daintree'}],words:[{es:'la selva',en:'rainforest'}]};
 const activities=levels.map(level=>countryActivity(level,context,0));
 for(const field of ['es','en'])assert.equal(new Set(activities.map(a=>a[field])).size,7);
 assert.equal(new Set(activities.map(a=>a.starter.es)).size,7);
 assert.equal(new Set(activities.map(a=>a.model.es)).size,7);
 for(const level of levels){
  for(let index=0;index<10;index++){
   const activity=countryActivity(level,context,index);
   assert.match(activity.es,/Daintree/);
   for(const pair of [activity,activity.starter,activity.model,activity.tip,activity.spark,...activity.choices,...countrySupport(level,context).closing])assert.ok(pair.es&&pair.en,`${level}/${index}`);
  }
 }
 assert.deepEqual(Array.from(activities[0].choices,x=>x.es),['Sí, quiero ir.','No, gracias.']);
});
test('Argentine scenes retain native dialogue and gain usable A0 exchanges and higher-level role tasks',async()=>{
 const {roleplayForLevel,scenarios}=await compiled('export * from "./country-roleplays"; export {scenarios} from "../argento-roleplays/data";','app/conversation-families');
 for(const scene of scenarios){
  assert.equal(roleplayForLevel(scene,'A1'),scene);
  const a0=roleplayForLevel(scene,'A0');
  assert.equal(a0.dialogue.length,14);
  assert.equal(a0.prompts.length,6);
  assert.ok(a0.dialogue.every(line=>line[1]&&line[2]));
  assert.ok(a0.resources.every(pair=>pair[0]&&pair[1]&&!pair[0].includes('…')));
  for(const level of ['A2','B1','B2','C1','C2']){
   const variant=roleplayForLevel(scene,level);
   assert.equal(variant.dialogue,scene.dialogue);
   assert.ok(variant.prompts.every((pair,index)=>pair[0].includes(scene.prompts[index][0])&&pair[0]!==scene.prompts[index][0]));
  }
 }
});
test('A0 map and cover controls carry bilingual glosses without changing native screens',async()=>{
 const maps={'estados-unidos-a2-b1':'map','estados-unidos-basico':'atlas','australia-en-movimiento':'atlas','reino-unido-en-relieve':'map','suiza-en-relieve':'map','mexico':'atlas','israel-en-capas':'map','indonesia-fantastica':'map','irlanda-en-relieve':'map','mundo-fantastico':'atlas','buenos-aires-en-la-calle':'map','argento-roleplays':null};
 for(const [route] of routes){
  const source=await readFile(`app/${route}/page.tsx`,'utf8');
  let first=true,screen=maps[route];
  const mocked={...React,useState:initial=>{if(first){first=false;return [screen,()=>{}];}return stateHook(initial);}};
  const {CountryExperience}=await compiled(source+'\nexport {CountryExperience};',`app/${route}`,mocked);
  for(const view of [maps[route],route==='buenos-aires-en-la-calle'?'intro':route==='argento-roleplays'?null:'cover']){
   first=true;screen=view;
   const html=renderToString(React.createElement('div',{className:'cf-family','data-level':'A0'},React.createElement(CountryExperience,{level:'A0'})));
   assert.match(html,/country-a0-en/,`${route}/${view}: inline translations`);
   assert.ok(!html.includes('undefined'),`${route}/${view}`);
   assert.doesNotMatch(html,/class="(?:ch|id|il|wf)-app[^"\n]*(?:spanish-only|hide-en)/);
  }
 }
});
test('A0 day answers are complete sentences, local vocabulary changes the question, and models avoid uncontracted prepositions',async()=>{
 const {countryActivity,countrySupport}=await compiled('export * from "./country-levels";','app/conversation-families');
 const context={name:'Argentina',places:[{es:'el Obelisco',en:'the Obelisk'}],words:[{es:'el metro',en:'the subway'}]};
 const day=countryActivity('A0',context,3);
 assert.ok(day.choices.every(choice=>choice.es.startsWith('Quiero ir ')));
 assert.match(countryActivity('A0',context,1).es,/el metro/);
 assert.match(countryActivity('A0',context,1).en,/the subway/);
 for(const level of levels){
  const activity=countryActivity(level,context,0);
  assert.doesNotMatch(JSON.stringify([activity,countrySupport(level,context)]),/\ba el\b|\bde el\b/);
 }
});
test('advanced country tasks preserve a local authored starting point rather than substituting only a country name',async()=>{
 const {countryActivity}=await compiled('export * from "./country-levels";','app/conversation-families');
 const context={name:'Queensland',places:[{es:'K’gari',en:'K’gari'}],source:[{es:'K’gari necesita reglas para vehículos, campamentos y fauna.',en:'K’gari needs rules for vehicles, camps and wildlife.'}]};
 for(const level of ['B2','C1','C2']){
  const activity=countryActivity(level,context);
  assert.match(activity.es,/vehículos, campamentos y fauna/);
  assert.match(activity.en,/vehicles, camps and wildlife/);
 }
});
