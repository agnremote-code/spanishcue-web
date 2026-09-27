import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
const require=createRequire(import.meta.url), React=require('react');
const {renderToString}=require('react-dom/server');
async function load(path,runtime=React,globals={}){
 const result=await build({entryPoints:[path],bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const loadedModule={exports:{}};
 runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,document:{getElementById:()=>null},...globals})(name=>name==='react'?runtime:require(name),loadedModule,loadedModule.exports);
 return loadedModule.exports;
}
const find=(tree,predicate)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(x=>find(x,predicate)):[...(predicate(tree)?[tree]:[]),...find(tree.props?.children,predicate)];
const words=tree=>typeof tree==='string'||typeof tree==='number'?String(tree):Array.isArray(tree)?tree.map(words).join(''):tree?.props?words(tree.props.children):'';
async function harness(mode,storage){
 const bank=await load('app/conversation-worlds/data-c1.ts');
 const state=[],deps=[];let slot=0,effectSlot=0,pending=[];
 const runtime={...React,useRef:()=>({current:null}),useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];},useEffect:(fn,next)=>{const i=effectSlot++;if(storage&&(!deps[i]||next.some((value,n)=>!Object.is(value,deps[i][n])))){deps[i]=next;pending.push(fn);}}};
 const globals={sessionStorage:{getItem:key=>storage?.get(key)??null,setItem:(key,value)=>storage?.set(key,value)},window:{requestAnimationFrame:fn=>{fn();return 1;},cancelAnimationFrame:()=>{},setTimeout:()=>1,clearTimeout:()=>{}}};
 const {default:World}=await load('app/conversation-worlds/ConversationWorld.tsx',runtime,globals);
 const render=()=>{let tree;for(let pass=0;pass<(storage?3:1);pass++){slot=0;effectSlot=0;tree=World({mode,level:'C1',machineRounds:bank.eliminationsC1,ruleRounds:bank.absurdRulesC1,guide:bank.worldGuidesC1[mode],closing:bank.worldClosingC1[mode]});const effects=pending;pending=[];effects.forEach(fn=>fn());}return tree;};
 const click=label=>{const button=find(render(),node=>node.type==='button'&&words(node).includes(label))[0];assert.ok(button,label);assert.ok(!button.props.disabled,`enabled: ${label}`);button.props.onClick();};
 const change=(id,value)=>{const control=find(render(),node=>node.props?.id===id)[0];assert.ok(control,id);control.props.onChange({target:{value}});};
 return {bank,render,click,change,html:()=>renderToString(render())};
}

test('C1 worlds dispatch complete Spanish banks while selectors stop at C1',async()=>{
 const {default:World}=await load('app/conversation-worlds/ConversationWorldFamily.tsx');
 for(const mode of ['machine','rules']){
  const html=renderToString(React.createElement(World,{mode,level:'C1'}));
  assert.deepEqual([...html.matchAll(/aria-pressed="(?:true|false)">(A1|A2|B1|B2|C1|C2)<\/button>/g)].map(x=>x[1]),['A1','A2','B1','B2','C1']);
  assert.match(html,/aria-pressed="true">C1<\/button>/);assert.match(html,/45 minutos/);assert.match(html,/cw-c1-closing/);
  assert.doesNotMatch(html,/Ayuda en inglés|CONVERSATION WORLDS|undefined|¿Lo eliminás|IMAGINÁ ESTO/);
  assert.match(html,mode==='machine'?/tu-vida-con-una-regla-absurda\?level=C1/:/la-maquina-que-elimina-cosas\?level=C1/);
 }
});

test('C1 has 30 independent dependency dilemmas and 15 rules with 45 distinct prompts and staged twists',async()=>{
 const fresh=await load('app/conversation-worlds/data-c1.ts');
 const old=await load('app/conversation-worlds/data.ts'),a1=await load('app/conversation-worlds/data-a1.ts'),a2=await load('app/conversation-worlds/data-a2.ts'),b2=await load('app/conversation-worlds/data-b2.ts');
 const originals=[...old.eliminations,...old.absurdRules,...a1.eliminationsA1,...a1.absurdRulesA1,...a2.eliminationsA2,...a2.absurdRulesA2,...b2.eliminationsB2,...b2.absurdRulesB2];
 const oldIds=new Set(originals.map(x=>x.id)),oldQuestions=new Set(originals.flatMap(x=>x.questions||[x.question]));
 assert.equal(fresh.eliminationsC1.length,30);assert.equal(fresh.absurdRulesC1.length,15);
 const all=[...fresh.eliminationsC1,...fresh.absurdRulesC1];assert.equal(new Set(all.map(x=>x.id)).size,45);
 const questions=all.flatMap(x=>x.questions||[x.question]);assert.equal(new Set(questions).size,75);
 for(const row of all){assert.ok(!oldIds.has(row.id));assert.equal(row.questionEn,undefined);assert.equal(row.questionsEn,undefined);assert.equal(row.lawEn,undefined);assert.ok(row.words.length>=3);assert.ok(row.starter.length>12);}
 for(const q of questions)assert.ok(!oldQuestions.has(q));
 for(const row of fresh.eliminationsC1)for(const field of ['intro','question','depthPrompt','consequence','reinterpretation','teacherChallenge'])assert.ok(row[field]?.length>25,`${row.id}: ${field}`);
 for(const row of fresh.absurdRulesC1){assert.equal(row.questions.length,3);assert.equal(row.developments.length,2);for(const text of [...row.developments,row.teacherFollowUp])assert.ok(text.length>25);}
 const learnerText=JSON.stringify(fresh);
 assert.doesNotMatch(learnerText,/\b(?:you|would|should|your|because|however|podés|querés|tenés|creés|opinás)\b/i);
 for(const guide of Object.values(fresh.worldGuidesC1)){assert.equal(guide.stages.at(-1).time,'35–45 min');assert.ok(guide.teacherNote.length>150);}
});

// The C1 reasoning must appear in order and the finale must use actual completed votes.
test('C1 machine reveals dependencies, revisits saved votes and builds a qualified principle from three actual decisions',async()=>{
 const h=await harness('machine'),first=h.bank.eliminationsC1[0];
 const finale=()=>find(h.render(),n=>n.props?.className==='cw-c1-closing')[0];
 const submit=()=>find(h.render(),n=>n.type==='button'&&words(n)==='Abrir mi síntesis')[0];
 assert.ok(submit().props.disabled);assert.ok(!words(finale()).includes(first.title));
 assert.ok(!h.html().includes(first.consequence));h.click('Eliminar');
 assert.ok(h.html().includes(first.question));assert.ok(h.html().includes(first.depthPrompt));assert.ok(!h.html().includes(first.reinterpretation));
 h.click('Descubrir la consecuencia');for(const field of ['consequence','reinterpretation','teacherChallenge'])assert.ok(h.html().includes(first[field]));
 h.click('Cambio de opinión');assert.match(words(finale()),/eliminar → conservar/);
 h.click('Otra decisión');assert.ok(!h.html().includes(first.consequence));
 for(let n=1;n<3;n++){h.click('Conservar');h.click('Descubrir la consecuencia');h.click('Mantengo mi decisión');if(n<2)h.click('Otra decisión');}
 assert.equal(find(h.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],3);
 h.click('Otra decisión');h.click('Eliminar');h.click('Descubrir la consecuencia');h.click('Mantengo mi decisión');
 for(const item of h.bank.eliminationsC1.slice(0,3))h.click(`Seleccionar: ${item.title}`);
 const fourth=()=>find(h.render(),n=>n.type==='button'&&words(n).includes(`Seleccionar: ${h.bank.eliminationsC1[3].title}`))[0];
 assert.ok(fourth().props.disabled,'the finale cannot silently accumulate a fourth decision');
 h.click(`Seleccionar: ${first.title}`);assert.ok(!fourth().props.disabled);h.click(`Seleccionar: ${first.title}`);
 h.change('cw-c1-principle','Eliminaría una barrera si se conserva el acceso que facilitaba.');
 h.change('cw-c1-exception','Exceptuaría a quien depende de esa señal para participar.');
 assert.ok(submit().props.disabled,'a general principle alone cannot open the synthesis');
 h.change('cw-c1-substitute','Evitaría sustituir una señal gratuita por asesores que cobran.');
 assert.ok(!submit().props.disabled);h.click('Abrir mi síntesis');
 let board=find(h.render(),n=>n.props?.className==='cw-c1-board')[0];assert.ok(board);
 for(const item of h.bank.eliminationsC1.slice(0,3))assert.ok(words(board).includes(item.title));
 assert.ok(!words(board).includes(h.bank.eliminationsC1[3].title));assert.match(words(board),/Exceptuaría/);assert.match(words(board),/asesores que cobran/);
 h.click('Revisar mi síntesis');assert.equal(find(h.render(),n=>n.props?.className==='cw-c1-board').length,0);
 h.click('Anterior');h.click('Anterior');h.click('Anterior');assert.ok(h.html().includes(first.consequence));
 h.click('Reiniciar ronda');assert.ok(!words(finale()).includes(first.title));assert.ok(submit().props.disabled);
 h.click('Nueva conversación');assert.equal(find(h.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],0);assert.ok(!words(finale()).includes(h.bank.eliminationsC1[1].title));
 assert.equal(find(h.render(),n=>n.props?.id==='cw-c1-principle')[0].props.value,'');
});

test('C1 rules gate their two developments and synthesize keep, failure and precise rewrite from explored rules',async()=>{
 const h=await harness('rules'),first=h.bank.absurdRulesC1[0];
 assert.ok(!h.html().includes(first.questions[0]));assert.ok(!h.html().includes(first.developments[0]));
 h.click('Abrir la primera pregunta');assert.ok(h.html().includes(first.questions[0]));
 let steps=find(h.render(),n=>n.type==='button'&&n.props['aria-current']==='step');assert.equal(words(steps[0]),'1La intención');
 const future=find(h.render(),n=>n.type==='button'&&words(n)==='3La nueva costumbre')[0];assert.ok(future.props.disabled,'unrevealed future stages cannot be jumped');
 h.click('Siguiente pregunta');assert.ok(h.html().includes(first.developments[0]));assert.ok(!h.html().includes(first.developments[1]));
 h.click('Siguiente pregunta');assert.ok(h.html().includes(first.developments[1]));assert.ok(h.html().includes(first.teacherFollowUp));
 assert.equal(find(h.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],0);h.click('Terminamos esta regla');
 h.click('La intención');assert.equal(find(h.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],1,'reviewing an earlier question preserves a completed rule');
 assert.ok(!h.html().includes(first.developments[0]));h.click('La nueva costumbre');assert.ok(h.html().includes(first.developments[1]));
 for(let n=1;n<3;n++){h.click('Otra regla');h.click('Abrir la primera pregunta');h.click('Siguiente pregunta');h.click('Siguiente pregunta');h.click('Terminamos esta regla');}
 const rules=h.bank.absurdRulesC1;
 for(const [role,n] of [['keep',0],['reject',1],['modify',2]])h.change(`cw-c1-${role}`,rules[n].id);
 const select=find(h.render(),n=>n.props?.id==='cw-c1-reject')[0];assert.ok(find(select,n=>n.type==='option'&&n.props.value===rules[0].id)[0].props.disabled);
 h.change('cw-c1-effect','El gesto solidario se convierte en una marca de prestigio.');
 h.change('cw-c1-rewrite','Los zapatos preguntan solo en paseos voluntarios; ir a casa o a trabajar queda exento.');h.click('Abrir mi síntesis');
 const board=find(h.render(),n=>n.props?.className==='cw-c1-board')[0];assert.ok(board);
 for(const rule of rules.slice(0,3))assert.ok(words(board).includes(rule.title));assert.ok(!words(board).includes(rules[3].title));
 assert.match(words(board),/Conservar/);assert.match(words(board),/Descartar/);assert.match(words(board),/Modificar/);assert.match(words(board),/paseos voluntarios/);
 h.click('Nueva conversación');assert.equal(find(h.render(),n=>n.props?.className==='cw-c1-board').length,0);assert.equal(find(h.render(),n=>n.props?.id==='cw-c1-modify')[0].props.value,'');
});

test('C1 hydration stays within family and level, preserving all eight earlier keys',async()=>{
 const levels=['A1','A2','B1','B2'];const storage=new Map();
 const {conversationWorldStorageKey:key}=await load('app/conversation-worlds/state.ts');
 for(const mode of ['machine','rules'])for(const level of levels)storage.set(key(mode,level),`legacy-${mode}-${level}`);
 const machine=await harness('machine',storage);machine.click('Eliminar');machine.click('Descubrir la consecuencia');machine.click('Cambio de opinión');machine.render();
 assert.equal(JSON.parse(storage.get(key('machine','C1'))).decisions[machine.bank.eliminationsC1[0].id].final,'no');
 const rules=await harness('rules',storage);rules.click('Abrir la primera pregunta');rules.click('Siguiente pregunta');rules.click('Siguiente pregunta');rules.click('Terminamos esta regla');rules.render();
 assert.equal(JSON.parse(storage.get(key('rules','C1'))).opened[rules.bank.absurdRulesC1[0].id],3);
 const resumed=await harness('machine',storage);assert.match(resumed.html(),/Decisión final: <strong>conservar/);
 assert.equal(find(resumed.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'],1);
 for(const mode of ['machine','rules'])for(const level of levels)assert.equal(storage.get(key(mode,level)),`legacy-${mode}-${level}`);
 assert.equal(key('machine','B1'),'chespanish-conversation-machine-v1');assert.equal(new Set([...storage.keys()]).size,10);
});

test('C1 renderer keeps banks out of public imports and adds wrapping mobile synthesis controls',async()=>{
 const result=await build({entryPoints:['app/conversation-worlds/ConversationWorld.tsx'],bundle:true,write:false,metafile:true,format:'cjs',platform:'node',external:['react','next/*'],loader:{'.css':'empty'}});
 assert.deepEqual(Object.keys(result.metafile.inputs).filter(path=>/conversation-worlds\/data(?:-[abc][12])?\.ts$/.test(path)),[]);
 const css=readFileSync('app/conversation-worlds/worlds.css','utf8');
 assert.match(css,/\.cw-c1-closing[^{]*\{[^}]*min-width:0/);assert.match(css,/\.cw-c1-fields[^{}]*\{[^}]*minmax\(0,1fr\)/);
 assert.match(css,/@media\(max-width:600px\)[\s\S]*\.cw-c1-fields\{grid-template-columns:1fr/);assert.match(css,/\.cw-c1-closing (?:textarea|select)[^{}]*\{[^}]*width:100%/);
 assert.match(readFileSync('app/conversation-worlds/ConversationWorldFamily.tsx','utf8'),/key=\{selected\}/);
});
