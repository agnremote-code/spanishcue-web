import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
const require=createRequire(import.meta.url);
async function load(path){
 const result=await build({entryPoints:[path],bundle:true,write:false,format:'cjs',platform:'node'});
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`)(require,loadedModule,loadedModule.exports);
 return JSON.parse(JSON.stringify(loadedModule.exports));
}
const path='app/conversation-worlds/data-c2.ts';
const normalize=value=>value.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const texts=value=>typeof value==='string'?[value]:Array.isArray(value)?value.flatMap(texts):value&&typeof value==='object'?Object.entries(value).filter(([key])=>key!=='id').flatMap(([,value])=>texts(value)):[];

test('C2 has exactly 30 complete category dilemmas with separately authored rival readings and reformulation tasks',async()=>{
 const {eliminationsC2:bank}=await load(path);assert.equal(bank.length,30);
 assert.equal(new Set(bank.map(x=>x.id)).size,30);assert.ok(new Set(bank.map(x=>x.group)).size>=5);
 for(const item of bank){
  assert.match(item.id,/^c2-maquina-/);
  for(const key of ['title','intro','question','consequence','depthPrompt','reinterpretation','competingReading','reformulationPrompt','teacherChallenge','starter'])assert.ok(typeof item[key]==='string'&&item[key].trim(),`${item.id}: ${key}`);
  assert.equal(item.words.length,3);assert.ok(!('questionEn' in item));
  assert.ok(item.competingReading!==item.reinterpretation);assert.ok(item.reformulationPrompt!==item.depthPrompt);
 }
 for(const key of ['question','consequence','depthPrompt','reinterpretation','competingReading','reformulationPrompt'])assert.equal(new Set(bank.map(x=>normalize(x[key]))).size,30,key);
});

test('C2 city contains 15 simple laws, 45 distinct oral questions and 30 staged interpretive developments',async()=>{
 const {absurdRulesC2:bank}=await load(path);assert.equal(bank.length,15);assert.equal(new Set(bank.map(x=>x.id)).size,15);
 assert.ok(new Set(bank.map(x=>x.group)).size>=3);
 for(const item of bank){
  assert.match(item.id,/^c2-regla-/);assert.equal(item.questions.length,3);assert.equal(item.developments.length,2);assert.equal(item.words.length,3);
  assert.ok(item.law.split(/\s+/).length<=35,`${item.id}: simple initial law`);
  for(const value of [item.scene,item.teacherFollowUp,item.starter,...item.questions,...item.developments])assert.ok(value.trim());
  assert.ok(!('questionsEn' in item));assert.ok(!('lawEn' in item));
 }
 assert.equal(new Set(bank.flatMap(x=>x.questions).map(normalize)).size,45);
 assert.equal(new Set(bank.flatMap(x=>x.developments).map(normalize)).size,30);
});

test('C2 is additive and never recycles a previous Worlds prompt, consequence, law or development',async()=>{
 const fresh=await load(path);const old=[];
 for(const suffix of ['','-a1','-a2','-b2','-c1']){
  const bank=await load(`app/conversation-worlds/data${suffix}.ts`);
  for(const [key,value] of Object.entries(bank))if(/^(eliminations|absurdRules)/.test(key))old.push(...value);
 }
 const oldIds=new Set(old.map(x=>x.id));
 const oldTexts=new Set(old.flatMap(x=>[x.intro,x.question,x.consequence,x.law,x.scene,...(x.questions??[]),...(x.developments??[])]).filter(Boolean).map(normalize));
 for(const item of [...fresh.eliminationsC2,...fresh.absurdRulesC2]){
  assert.ok(!oldIds.has(item.id));
  for(const value of [item.intro,item.question,item.consequence,item.law,item.scene,...(item.questions??[]),...(item.developments??[])].filter(Boolean))assert.ok(!oldTexts.has(normalize(value)),`${item.id}: recycled text`);
 }
 const source=readFileSync(path,'utf8');assert.match(source,/import type .*EliminationC2.*AbsurdRuleC2.*WorldGuide.*from '.\/types'/);
 assert.doesNotMatch(source,/from ['"].*data(?:-c1)?['"]|\.map\(/);
});

test('C2 learner copy uses Spanish and tú without generic critical-thinking filler or translations',async()=>{
 const bank=await load(path);const copy=texts(bank).join('\n');
 assert.doesNotMatch(copy,/\b(?:vos|vosotros|vosotras|sos|tenés|podés|querés|pensás|imaginá|analizá|reflexioná|discutís|acordáis|entráis)\b/iu);
 assert.doesNotMatch(copy,/\b(?:What|Which|Explain|Choose|would you|in order to|the learner)\b/);
 assert.doesNotMatch(copy,/¿Hasta qué punto|Analiza críticamente|Reflexiona sobre|¿Cuáles son las implicaciones/iu);
});

test('C2 selective 45-minute guides culminate in actual-choice synthesis, precise rewrites and two edge cases',async()=>{
 const {worldGuidesC2:guides,worldClosingC2:closing}=await load(path);
 for(const mode of ['machine','rules']){assert.equal(guides[mode].stages.length,5);assert.match(guides[mode].stages.at(-1).time,/45 min/);assert.ok(guides[mode].moves.length<=5);assert.ok(closing[mode].length>=3);}
 const machine=[guides.machine.closingTask,...closing.machine].join(' ');
 assert.match(machine,/cerrad/);assert.match(machine,/eliminar/);assert.match(machine,/redefin/);assert.match(machine,/binaria/);assert.match(machine,/superior|mejor/);
 const rules=[guides.rules.closingTask,...closing.rules].join(' ');
 assert.match(rules,/explorad/);assert.match(rules,/dos casos límite/);assert.match(rules,/limitación/);assert.match(rules,/redacción|formulación/);
});
