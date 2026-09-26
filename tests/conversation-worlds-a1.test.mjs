import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {existsSync} from 'node:fs';
import {build} from 'esbuild';
const require=createRequire(import.meta.url), React=require('react');
const {renderToString}=require('react-dom/server');
async function load(path, runtime=React, globals={}){
 const result=await build({entryPoints:[path],bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,document:{getElementById:()=>null},...globals})(name=>name==='react'?runtime:require(name),loadedModule,loadedModule.exports);
 return loadedModule.exports;
}
const find=(tree,predicate)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(x=>find(x,predicate)):[...(predicate(tree)?[tree]:[]),...find(tree.props?.children,predicate)];
const words=tree=>typeof tree==='string'?tree:Array.isArray(tree)?tree.map(words).join(''):tree?.props?words(tree.props.children):'';
async function harness(mode){
 assert.ok(existsSync('app/conversation-worlds/data-a1.ts'),'A1 needs separate authored banks');
 const bank=await load('app/conversation-worlds/data-a1.ts');
 let state=[],slot=0;
 const runtime={...React,useEffect:()=>{},useRef:()=>({current:null}),useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];}};
 const {default:World}=await load('app/conversation-worlds/ConversationWorld.tsx',runtime);
 const render=()=>{slot=0;return World({mode,level:'A1',machineRounds:bank.eliminationsA1,ruleRounds:bank.absurdRulesA1,closing:bank.worldClosingA1[mode],guide:bank.worldGuidesA1[mode]});};
 const click=label=>{const button=find(render(),node=>node.type==='button'&&words(node).includes(label))[0];assert.ok(button,`button: ${label}`);button.props.onClick();};
 return {bank,render,click,html:()=>renderToString(render())};
}
// A wrong bank fallback or level list must not silently show B1 to a beginner.
test('A1 worlds dispatch their own banks with exactly A1 A2 B1 B2 and Spanish support',async()=>{
 const {default:World}=await load('app/conversation-worlds/ConversationWorldFamily.tsx');
 for(const mode of ['machine','rules']){
  const legacy=renderToString(React.createElement(World,{mode,level:'B1'}));
  assert.match(legacy,/>A1<\/button>/,'A1 must be selectable before it renders');
  const html=renderToString(React.createElement(World,{mode,level:'A1'}));
  assert.match(html,/aria-pressed="true">A1<\/button>/);
  assert.deepEqual([...html.matchAll(/aria-pressed="(?:true|false)">(A1|A2|B1|B2|C1|C2)<\/button>/g)].map(x=>x[1]),['A1','A2','B1','B2']);
  assert.match(html,/45 minutos/);assert.match(html,/cw-a1-support/);
  assert.doesNotMatch(html,/Ayuda en inglés|CONVERSATION WORLDS|Los mosquitos|Cien palabras|undefined/);
  assert.match(html,mode==='machine'?/24 decisiones/:/15 reglas inesperadas · 45 preguntas/);
  assert.match(html,mode==='machine'?/tu-vida-con-una-regla-absurda\?level=A1/:/la-maquina-que-elimina-cosas\?level=A1/);
 }
});
// Truncated, copied-down or untranslated entries would violate the new level's contract.
test('A1 banks have 24 complete concrete decisions and 15 three-stage rules with visible frames',async()=>{
 assert.ok(existsSync('app/conversation-worlds/data-a1.ts'),'A1 needs separate authored banks');
 const fresh=await load('app/conversation-worlds/data-a1.ts');
 const old=await load('app/conversation-worlds/data.ts'), a2=await load('app/conversation-worlds/data-a2.ts'), b2=await load('app/conversation-worlds/data-b2.ts');
 const originals=[...old.eliminations,...old.absurdRules,...a2.eliminationsA2,...a2.absurdRulesA2,...b2.eliminationsB2,...b2.absurdRulesB2];
 const ids=new Set(originals.map(x=>x.id)), prompts=new Set(originals.flatMap(x=>x.questions||[x.question]));
 assert.equal(fresh.eliminationsA1.length,24);assert.equal(fresh.absurdRulesA1.length,15);
 const all=[...fresh.eliminationsA1,...fresh.absurdRulesA1];assert.equal(new Set(all.map(x=>x.id)).size,39);
 for(const item of all){assert.ok(!ids.has(item.id));assert.equal(item.questionEn,undefined);assert.equal(item.questionsEn,undefined);assert.equal(item.lawEn,undefined);assert.ok(item.words.length>=3);}
 for(const item of fresh.eliminationsA1){for(const field of ['intro','question','consequence'])assert.ok(item[field]?.length>10,`${item.id}: ${field}`);assert.ok(item.starter.length>0);assert.ok(!prompts.has(item.question));assert.ok(item.answerFrames.length>=2);}
 const questions=fresh.absurdRulesA1.flatMap(x=>x.questions);assert.equal(questions.length,45);assert.equal(new Set(questions).size,45);
 for(const rule of fresh.absurdRulesA1){assert.equal(rule.questionFrames.length,3);for(const q of rule.questions)assert.ok(!prompts.has(q));}
});
// Removing the reveal gate, revision handler, or learner-linked closing breaks this exchange.
test('A1 machine supports a short reason, reveals a consequence and remembers a changed choice in the finale',async()=>{
 const h=await harness('machine'), item=h.bank.eliminationsA1[0];
 assert.ok(!h.html().includes(item.consequence));
 h.click('Eliminar');assert.ok(h.html().includes(item.question));assert.match(h.html(),/Primero, una respuesta corta/);
 for(const frame of item.answerFrames)assert.ok(h.html().includes(frame));
 assert.ok(!h.html().includes(item.consequence));
 h.click('¿Qué pasa después?');assert.ok(h.html().includes(item.consequence));
 h.click('Cambio de idea');assert.match(h.html(),/Decisión final: <strong>conservar/);
 const closing=find(h.render(),node=>node.props?.className==='cw-a1-closing')[0];
 assert.match(words(closing),/Una cosa que elimino/);assert.match(words(closing),/Una cosa que nunca elimino/);assert.match(words(closing),/Una decisión que cambio/);assert.match(words(closing),/eliminar → conservar/);
 assert.equal(find(h.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],1);
 h.click('Otra decisión');assert.ok(!h.html().includes(item.consequence));h.click('Anterior');assert.ok(h.html().includes(item.consequence));
 h.click('Reiniciar ronda');assert.equal(find(h.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],0);
});
// The displayed question and its support must advance together; completion waits for all three.
test('A1 rules progress reaction to routine to adaptation with matching visible frames and an invention finale',async()=>{
 const h=await harness('rules'),rule=h.bank.absurdRulesA1[0];
 assert.ok(!h.html().includes(rule.questions[0]));h.click('Abrir la primera pregunta');
 for(let n=0;n<3;n++){
  const html=h.html();assert.ok(html.includes(rule.questions[n]));for(const frame of rule.questionFrames[n])assert.ok(html.includes(frame));
  assert.equal(find(h.render(),x=>x.props?.role==='progressbar')[0].props['aria-valuenow'],0);
  if(n<2)h.click('Siguiente pregunta');
 }
 h.click('Terminamos esta regla');assert.equal(find(h.render(),x=>x.props?.role==='progressbar')[0].props['aria-valuenow'],1);
 const closing=find(h.render(),x=>x.props?.className==='cw-a1-closing')[0];assert.ok(words(closing).includes(rule.title));assert.match(words(closing),/más divertida/);assert.match(words(closing),/más difícil/);assert.match(words(closing),/En mi ciudad/);
 h.click('Otra regla');assert.ok(!h.html().includes(rule.questions[2]));
});
// A1 persistence must not reuse either an old-level key or the other family's key.
test('A1 world keys are isolated and all six old keys remain unchanged',async()=>{
 const {conversationWorldStorageKey:key}=await load('app/conversation-worlds/state.ts');
 for(const [mode,level,expected] of [['machine','A1','chespanish-conversation-machine-A1-v1'],['rules','A1','chespanish-conversation-rules-A1-v1'],['machine','A2','chespanish-conversation-machine-A2-v1'],['rules','A2','chespanish-conversation-rules-A2-v1'],['machine','B1','chespanish-conversation-machine-v1'],['rules','B1','chespanish-conversation-rules-v1'],['machine','B2','chespanish-conversation-machine-B2-v1'],['rules','B2','chespanish-conversation-rules-B2-v1']])assert.equal(key(mode,level),expected);
 assert.notEqual(key('machine','A1'),key('rules','A1'));
});
test('public world renderer does not bundle the A1 private banks',async()=>{
 const result=await build({entryPoints:['app/conversation-worlds/ConversationWorld.tsx'],bundle:true,write:false,metafile:true,format:'cjs',platform:'node',external:['react','next/*'],loader:{'.css':'empty'}});
 assert.deepEqual(Object.keys(result.metafile.inputs).filter(path=>/conversation-worlds\/data(?:-[ab][12])?\.ts$/.test(path)),[]);
});

// Exercise the renderer's actual hydration/write effects: a right key helper alone is insufficient.
test('A1 machine and rules hydrate separately and never overwrite historical sessions',async()=>{
 const bank=await load('app/conversation-worlds/data-a1.ts');
 const oldKeys=['chespanish-conversation-machine-v1','chespanish-conversation-rules-v1','chespanish-conversation-machine-A2-v1','chespanish-conversation-rules-A2-v1','chespanish-conversation-machine-B2-v1','chespanish-conversation-rules-B2-v1'];
 const historical=JSON.stringify({index:2,decisions:{legacy:{first:'yes',final:'yes',revealed:true}},opened:{legacy:3}});
 const storage=new Map(oldKeys.map(key=>[key,historical]));
 async function mount(mode){
  const state=[],deps=[];let slot=0,effectSlot=0,pending=[];
  const runtime={...React,useRef:()=>({current:null}),useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];},useEffect:(fn,next)=>{const i=effectSlot++;if(!deps[i]||next.some((value,n)=>!Object.is(value,deps[i][n]))){deps[i]=next;pending.push(fn);}}};
  const globals={sessionStorage:{getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value)},window:{requestAnimationFrame:fn=>{fn();return 1;},cancelAnimationFrame:()=>{},setTimeout:()=>1,clearTimeout:()=>{}}};
  const {default:World}=await load('app/conversation-worlds/ConversationWorld.tsx',runtime,globals);
  const render=()=>{let tree;for(let pass=0;pass<3;pass++){slot=0;effectSlot=0;tree=World({mode,level:'A1',machineRounds:bank.eliminationsA1,ruleRounds:bank.absurdRulesA1,guide:bank.worldGuidesA1[mode],closing:bank.worldClosingA1[mode]});const effects=pending;pending=[];effects.forEach(fn=>fn());}return tree;};
  const click=label=>{const button=find(render(),node=>node.type==='button'&&words(node).includes(label))[0];assert.ok(button,label);button.props.onClick();render();};
  return {render,click};
 }
 const machine=await mount('machine');assert.equal(find(machine.render(),x=>x.props?.role==='progressbar')[0].props['aria-valuenow'],0);
 machine.click('Eliminar');machine.click('¿Qué pasa después?');machine.click('Cambio de idea');
 const machineSaved=JSON.parse(storage.get('chespanish-conversation-machine-A1-v1'));
 assert.equal(machineSaved.decisions['a1-maquina-tostadora'].final,'no');
 const rules=await mount('rules');assert.equal(find(rules.render(),x=>x.props?.role==='progressbar')[0].props['aria-valuenow'],0);
 rules.click('Abrir la primera pregunta');rules.click('Siguiente pregunta');rules.click('Siguiente pregunta');rules.click('Terminamos esta regla');
 assert.equal(JSON.parse(storage.get('chespanish-conversation-rules-A1-v1')).opened['a1-regla-sombrero-fruta'],3);
 const resumed=await mount('machine');assert.equal(find(resumed.render(),x=>x.props?.role==='progressbar')[0].props['aria-valuenow'],1);assert.match(renderToString(resumed.render()),/Decisión final: <strong>conservar/);
 for(const key of oldKeys)assert.equal(storage.get(key),historical);
});
