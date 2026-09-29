import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {existsSync} from 'node:fs';
import {build} from 'esbuild';
const require=createRequire(import.meta.url);
const React=require('react');
const {renderToString}=require('react-dom/server');
async function load(path){
 const result=await build({entryPoints:[path],bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process})(require,loadedModule,loadedModule.exports);
 return loadedModule.exports;
}
// A mistaken host fallback to B1 would expose old entries and omit the B2 oral sequence.
test('B2 worlds render their own bank, Spanish support, and sustained closing',async()=>{
 const {default:World}=await load('app/conversation-worlds/ConversationWorldFamily.tsx');
 for(const mode of ['machine','rules']){
  const legacy=renderToString(React.createElement(World,{mode,level:'B1'}));
  assert.match(legacy,/>B2<\/button>/,'B2 must be supported before it can render');
  const html=renderToString(React.createElement(World,{mode,level:'B2'}));
  assert.match(html,/aria-pressed="true">B2<\/button>/);
  assert.match(html,/45 minutos/);
  assert.match(html,/Preparar la conversación/);
  assert.match(html,/Acuerdo final/);
  assert.doesNotMatch(html,/Ayuda en inglés|Los mosquitos|Cien palabras|undefined/);
 }
});
// An accidental replacement, under-filled bank, or duplicate question violates authoring boundaries.
test('new banks supply 30 complete dilemmas and 15 three-stage rules without reusing old entries',async()=>{
 assert.ok(existsSync('app/conversation-worlds/data-b2.ts'),'B2 banks are required');
 const fresh=await load('app/conversation-worlds/data-b2.ts');
 const old=await load('app/conversation-worlds/data.ts');
 const a2=await load('app/conversation-worlds/data-a2.ts');
 assert.equal(fresh.eliminationsB2.length,30);
 assert.equal(fresh.absurdRulesB2.length,15);
 const oldIds=new Set([...old.eliminations,...old.absurdRules,...a2.eliminationsA2,...a2.absurdRulesA2].map(x=>x.id));
 for(const bank of [fresh.eliminationsB2,fresh.absurdRulesB2]){
  assert.equal(new Set(bank.map(x=>x.id)).size,bank.length);
  for(const row of bank){
   assert.ok(!oldIds.has(row.id));
   assert.ok(row.words.length>=3);
   assert.ok(row.starter.length>15);
   assert.equal(row.questionEn,undefined);assert.equal(row.questionsEn,undefined);assert.equal(row.lawEn,undefined);
  }
 }
 for(const item of fresh.eliminationsB2)for(const field of ['intro','question','consequence','followUp','counterpoint','revision'])assert.ok(item[field]?.length>25,`${item.id}: ${field}`);
 const questions=fresh.absurdRulesB2.flatMap(x=>x.questions);
 assert.equal(questions.length,45);assert.equal(new Set(questions).size,45);
 for(const rule of fresh.absurdRulesB2)assert.ok(rule.teacherFollowUp.length>25);
});
// Adding B2 must not migrate or overwrite either historical key.
test('world progress keys preserve historical storage and isolate both B2 families',async()=>{
 assert.ok(existsSync('app/conversation-worlds/state.ts'),'world storage key helper is required');
 const {conversationWorldStorageKey:key}=await load('app/conversation-worlds/state.ts');
 assert.equal(key('machine','B1'),'chespanish-conversation-machine-v1');
 assert.equal(key('rules','B1'),'chespanish-conversation-rules-v1');
 assert.equal(key('machine','A2'),'chespanish-conversation-machine-A2-v1');
 assert.equal(key('rules','A2'),'chespanish-conversation-rules-A2-v1');
 assert.equal(key('machine','B2'),'chespanish-conversation-machine-B2-v1');
 assert.equal(key('rules','B2'),'chespanish-conversation-rules-B2-v1');
});

const find=(tree,predicate)=>{
 if(!tree||typeof tree!=='object')return [];
 if(Array.isArray(tree))return tree.flatMap(node=>find(node,predicate));
 return [...(predicate(tree)?[tree]:[]),...find(tree.props?.children,predicate)];
};
const words=tree=>typeof tree==='string'?tree:Array.isArray(tree)?tree.map(words).join(''):tree?.props?words(tree.props.children):'';
async function worldHarness(props){
 const result=await build({entryPoints:['app/conversation-worlds/ConversationWorld.tsx'],bundle:true,write:false,format:'cjs',platform:'node',external:['react','next/*'],loader:{'.css':'empty'}});
 let state=[],slot=0;
 const hookRuntime={...React,useEffect:()=>{},useRef:()=>({current:null}),useState:initial=>{
  const index=slot++;
  if(!(index in state))state[index]=typeof initial==='function'?initial():initial;
  return [state[index],value=>{state[index]=typeof value==='function'?value(state[index]):value;}];
 }};
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,document:{getElementById:()=>null}})(name=>name==='react'?hookRuntime:require(name),loadedModule,loadedModule.exports);
 return {render:()=>{slot=0;return loadedModule.exports.default(props);}};
}
// Missing choose/reveal/final handlers or a mistaken index must break the learner-visible sequence.
test('B2 machine reveals its own consequence, counterpoint and revision after a decision',async()=>{
 const bank=await load('app/conversation-worlds/data-b2.ts');
 const harness=await worldHarness({mode:'machine',level:'B2',machineRounds:bank.eliminationsB2,ruleRounds:bank.absurdRulesB2,closing:bank.worldClosingB2.machine,guide:bank.worldGuidesB2.machine});
 const button=(tree,label)=>find(tree,n=>n.type==='button'&&words(n).includes(label))[0];
 let tree=harness.render();
 assert.ok(!words(tree).includes(bank.eliminationsB2[0].consequence));
 button(tree,'Eliminar').props.onClick();tree=harness.render();
 assert.ok(words(tree).includes(bank.eliminationsB2[0].question));
 assert.ok(!words(tree).includes(bank.eliminationsB2[0].consequence));
 button(tree,'Descubrir la consecuencia').props.onClick();tree=harness.render();
 for(const field of ['consequence','counterpoint','revision'])assert.ok(words(tree).includes(bank.eliminationsB2[0][field]));
 button(tree,'Cambio de opinión').props.onClick();tree=harness.render();
 assert.equal(find(tree,n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],1);
 assert.match(words(find(tree,n=>n.props?.className==='cw-verdict')[0]),/conservar/);
 button(tree,'Otra decisión').props.onClick();tree=harness.render();
 assert.ok(words(tree).includes(bank.eliminationsB2[1].intro));
 assert.ok(!words(tree).includes(bank.eliminationsB2[0].consequence));
 button(tree,'Anterior').props.onClick();tree=harness.render();
 assert.ok(words(tree).includes(bank.eliminationsB2[0].consequence));
 button(tree,'Reiniciar ronda').props.onClick();tree=harness.render();
 assert.equal(find(tree,n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],0);
 assert.ok(!words(tree).includes(bank.eliminationsB2[0].consequence));
});
// A wrong step boundary or shared question would hide the practical/perspective/revision progression.
test('B2 rules open three distinct questions and only finish after the final discussion',async()=>{
 const bank=await load('app/conversation-worlds/data-b2.ts');
 const harness=await worldHarness({mode:'rules',level:'B2',machineRounds:bank.eliminationsB2,ruleRounds:bank.absurdRulesB2,closing:bank.worldClosingB2.rules,guide:bank.worldGuidesB2.rules});
 const click=label=>{const tree=harness.render();find(tree,n=>n.type==='button'&&words(n).includes(label))[0].props.onClick();};
 assert.ok(!words(harness.render()).includes(bank.absurdRulesB2[0].questions[0]));
 click('Abrir la primera pregunta');
 for(let index=0;index<3;index++){
  const tree=harness.render();
  assert.ok(words(tree).includes(bank.absurdRulesB2[0].questions[index]));
  assert.equal(find(tree,n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],0);
  if(index<2)click('Siguiente pregunta');
 }
 assert.ok(words(harness.render()).includes(bank.absurdRulesB2[0].teacherFollowUp));
 click('Terminamos esta regla');
 assert.equal(find(harness.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],1);
 click('Otra regla');
 assert.ok(!words(harness.render()).includes(bank.absurdRulesB2[0].questions[2]));
 click('Anterior');
 assert.equal(find(harness.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],1);
});

test('public world renderer bundle has no private lesson-bank dependency',async()=>{
 const result=await build({entryPoints:['app/conversation-worlds/ConversationWorld.tsx'],bundle:true,write:false,metafile:true,format:'cjs',platform:'node',external:['react','next/*'],loader:{'.css':'empty'}});
 const privateInputs=Object.keys(result.metafile.inputs).filter(path=>/conversation-worlds\/data(?:-a2|-b2)?\.ts$/.test(path));
 assert.deepEqual(privateInputs,[]);
});
