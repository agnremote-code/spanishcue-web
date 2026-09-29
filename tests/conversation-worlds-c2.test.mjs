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
 const bank=await load('app/conversation-worlds/data-c2.ts');
 const state=[],deps=[];let slot=0,effectSlot=0,pending=[];
 const runtime={...React,useRef:()=>({current:null}),useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];},useEffect:(fn,next)=>{const i=effectSlot++;if(storage&&(!deps[i]||next.some((value,n)=>!Object.is(value,deps[i][n])))){deps[i]=next;pending.push(fn);}}};
 const globals={sessionStorage:{getItem:key=>storage?.get(key)??null,setItem:(key,value)=>storage?.set(key,value)},window:{requestAnimationFrame:fn=>{fn();return 1;},cancelAnimationFrame:()=>{},setTimeout:()=>1,clearTimeout:()=>{}}};
 const {default:World}=await load('app/conversation-worlds/ConversationWorld.tsx',runtime,globals);
 const render=()=>{let tree;for(let pass=0;pass<(storage?3:1);pass++){slot=0;effectSlot=0;tree=World({mode,level:'C2',machineRounds:bank.eliminationsC2,ruleRounds:bank.absurdRulesC2,guide:bank.worldGuidesC2[mode],closing:bank.worldClosingC2[mode]});const effects=pending;pending=[];effects.forEach(fn=>fn());}return tree;};
 const click=label=>{const button=find(render(),node=>node.type==='button'&&words(node).includes(label))[0];assert.ok(button,label);assert.ok(!button.props.disabled,`enabled: ${label}`);button.props.onClick();};
 const change=(id,value)=>{const control=find(render(),node=>node.props?.id===id)[0];assert.ok(control,id);control.props.onChange({target:{value}});};
 return {bank,render,click,change,html:()=>renderToString(render())};
}


const button=(h,label)=>find(h.render(),n=>n.type==='button'&&words(n)===label)[0];
const progress=h=>find(h.render(),n=>n.props?.role==='progressbar')[0].props['aria-valuenow'];
const board=h=>find(h.render(),n=>n.props?.className==='cw-c2-board');
function completeMachine(h,first='Eliminar',final='Conservar al final'){
 h.click(first);h.click('Descubrir la consecuencia');h.click('Contrastar otra lectura');
 h.change('cw-c2-reformulation','Eliminar solo la obligación, manteniendo una alternativa voluntaria.');
 h.click(final);
}

test('C2 requires a revealed competing reading, actual reformulation and an explicit conditional limit',async()=>{
 const h=await harness('machine'),first=h.bank.eliminationsC2[0];
 assert.ok(!h.html().includes(first.competingReading));h.click('Eliminar');
 assert.ok(h.html().includes(first.depthPrompt));h.click('Descubrir la consecuencia');
 assert.ok(h.html().includes(first.reinterpretation));assert.ok(!h.html().includes(first.competingReading));
 h.click('Contrastar otra lectura');assert.ok(h.html().includes(first.competingReading));
 assert.ok(button(h,'Eliminar al final').props.disabled);assert.ok(button(h,'Decisión condicional').props.disabled);
 h.change('cw-c2-reformulation','Eliminar la obligación, conservando la opción voluntaria.');
 assert.ok(!button(h,'Eliminar al final').props.disabled);assert.ok(button(h,'Decisión condicional').props.disabled);
 h.change('cw-c2-condition','Solo si existe una alternativa accesible.');h.click('Decisión condicional');
 assert.equal(progress(h),1);assert.match(h.html(),/Decisión final:[\s\S]*condicional/);
 h.change('cw-c2-reformulation','Una nueva categoría para revisar.');assert.equal(progress(h),0,'rewriting requires a fresh final vote');
 h.click('Conservar al final');assert.equal(progress(h),1);
});

test('C2 finale assigns three distinct actual roles and invalidates when a vote or revision changes',async()=>{
 const h=await harness('machine'),rounds=h.bank.eliminationsC2;
 completeMachine(h,'Conservar','Eliminar al final');h.click('Otra decisión');
 completeMachine(h);h.click('Otra decisión');completeMachine(h,'Conservar');
 for(const [role,n] of [['eliminate',0],['redefined',1],['binary',2]])h.change(`cw-c2-${role}`,rounds[n].id);
 const picks=id=>find(h.render(),n=>n.props?.id===id)[0];
 assert.equal(find(picks('cw-c2-eliminate'),n=>n.type==='option'&&n.props.value===rounds[1].id).length,0);
 assert.equal(find(picks('cw-c2-redefined'),n=>n.type==='option'&&n.props.value===rounds[0].id).length,0);
 assert.ok(find(picks('cw-c2-binary'),n=>n.type==='option'&&n.props.value===rounds[1].id)[0].props.disabled);
 h.change('cw-c2-proposition',rounds[1].id);h.change('cw-c2-rewrite','Eliminar la obligación de hacerlo en público.');
 assert.ok(button(h,'Abrir mi síntesis').props.disabled);h.change('cw-c2-improvement','Separa la práctica de la imposición y conserva su función.');
 h.click('Abrir mi síntesis');assert.equal(board(h).length,1);for(const r of rounds.slice(0,3))assert.ok(words(board(h)).includes(r.title));
 h.click('Anterior');h.click('Anterior');h.click('Conservar al final');assert.equal(board(h).length,0);assert.ok(button(h,'Abrir mi síntesis').props.disabled);
 h.click('Eliminar al final');h.click('Abrir mi síntesis');assert.equal(board(h).length,1);
 h.change('cw-c2-reformulation','Eliminar únicamente la imposición.');assert.equal(board(h).length,0);assert.equal(progress(h),2);
 h.click('Nueva conversación');assert.equal(progress(h),0);assert.equal(picks('cw-c2-rewrite').props.value,'');
 assert.match(h.html(),/No cambies un voto para completar/);
});

test('C2 rules preserve progressive high-water progress and test one revision against two distinct cases',async()=>{
 const h=await harness('rules'),first=h.bank.absurdRulesC2[0];
 h.click('Abrir la primera pregunta');assert.ok(button(h,'3Poner a prueba').props.disabled);
 h.click('Siguiente pregunta');assert.ok(h.html().includes(first.developments[0]));assert.ok(!h.html().includes(first.developments[1]));
 h.click('Siguiente pregunta');assert.ok(h.html().includes(first.developments[1]));h.click('Terminamos esta regla');assert.equal(progress(h),1);
 h.click('La letra');assert.equal(progress(h),1);assert.ok(!h.html().includes(first.developments[1]));h.click('Poner a prueba');
 h.change('cw-c2-law',first.id);h.change('cw-c2-diagnosis','La expresión permite dos lecturas incompatibles.');h.change('cw-c2-rewrite','Solo se aplica en celebraciones anunciadas.');
 h.change('cw-c2-edgeOne','Una visita imprevista queda fuera; comprobamos que no se penaliza.');h.change('cw-c2-edgeTwo','Una visita imprevista queda fuera; comprobamos que no se penaliza.');h.change('cw-c2-limitation','No evita anuncios engañosos.');
 assert.ok(button(h,'Abrir mi síntesis').props.disabled);
 h.change('cw-c2-edgeTwo','Un cambio de fecha mantiene el anuncio; comprobamos quién debe avisar.');h.click('Abrir mi síntesis');assert.equal(board(h).length,1);assert.match(words(board(h)),/anuncios engañosos/);
 h.click('Revisar mi síntesis');h.change('cw-c2-rewrite','Solo se aplica cuando ambas personas confirman la visita.');h.click('Abrir mi síntesis');h.click('Reiniciar ronda');assert.equal(board(h).length,0);assert.equal(progress(h),0);
});

test('C2 conditional decisions and actual notes persist separately from all older levels',async()=>{
 const storage=new Map(),{conversationWorldStorageKey:key}=await load('app/conversation-worlds/state.ts');
 for(const mode of ['machine','rules'])for(const level of ['A1','A2','B1','B2','C1'])storage.set(key(mode,level),`old-${mode}-${level}`);
 const h=await harness('machine',storage);h.click('Eliminar');h.click('Descubrir la consecuencia');h.click('Contrastar otra lectura');h.change('cw-c2-reformulation','Eliminar solo la obligación.');h.change('cw-c2-condition','Si existe otra opción.');h.click('Decisión condicional');h.render();
 const saved=JSON.parse(storage.get(key('machine','C2'))).decisions[h.bank.eliminationsC2[0].id];
 assert.equal(saved.final,'conditional');assert.equal(saved.reformulation,'Eliminar solo la obligación.');assert.equal(saved.condition,'Si existe otra opción.');
 const rules=await harness('rules',storage);rules.click('Abrir la primera pregunta');rules.click('Siguiente pregunta');rules.click('Siguiente pregunta');rules.click('Terminamos esta regla');rules.click('La letra');rules.render();
 assert.equal(JSON.parse(storage.get(key('rules','C2'))).opened[rules.bank.absurdRulesC2[0].id],3);
 const resumedRules=await harness('rules',storage);assert.equal(progress(resumedRules),1);resumedRules.click('Nueva conversación');assert.equal(progress(resumedRules),0);
 const resumed=await harness('machine',storage);assert.equal(progress(resumed),1);assert.match(resumed.html(),/Eliminar solo la obligación/);
 resumed.click('Nueva conversación');resumed.render();assert.equal(Object.keys(JSON.parse(storage.get(key('machine','C2'))).decisions).length,0);
 for(const mode of ['machine','rules'])for(const level of ['A1','A2','B1','B2','C1'])assert.equal(storage.get(key(mode,level)),`old-${mode}-${level}`);
});

test('C2 SSR dispatches both authored worlds across six levels without leaking banks into the public renderer',async()=>{
 const {default:World}=await load('app/conversation-worlds/ConversationWorldFamily.tsx');
 for(const mode of ['machine','rules']){
  const html=renderToString(React.createElement(World,{mode,level:'C2'}));
  assert.deepEqual([...html.matchAll(/aria-pressed="(?:true|false)">(A1|A2|B1|B2|C1|C2)<\/button>/g)].map(match=>match[1]),['A1','A2','B1','B2','C1','C2']);
  assert.match(html,/aria-pressed="true">C2<\/button>/);assert.match(html,/45 minutos/);assert.match(html,/cw-c2-closing/);assert.match(html,/\?level=C2/);
  assert.doesNotMatch(html,/Ayuda en inglés|CONVERSATION WORLDS|undefined|¿Lo eliminás|IMAGINÁ ESTO/);
 }
 const result=await build({entryPoints:['app/conversation-worlds/ConversationWorld.tsx'],bundle:true,write:false,metafile:true,format:'cjs',platform:'node',external:['react','next/*'],loader:{'.css':'empty'}});
 assert.deepEqual(Object.keys(result.metafile.inputs).filter(path=>/conversation-worlds\/data(?:-[abc][12])?\.ts$/.test(path)),[]);
 const css=readFileSync('app/conversation-worlds/worlds.css','utf8');
 assert.match(css,/\.cw-c2-closing[^{]*\{[^}]*min-width:0/);assert.match(css,/\.cw-c2-fields[^{}]*\{[^}]*minmax\(0,1fr\)/);assert.match(css,/@media\(max-width:600px\)[\s\S]*\.cw-c2-fields\{grid-template-columns:1fr/);
});


test('C2 finale notes cannot silently migrate to a different law or proposition',async()=>{
 const h=await harness('rules'),rules=h.bank.absurdRulesC2;
 for(let n=0;n<2;n++){if(n)h.click('Otra regla');h.click('Abrir la primera pregunta');h.click('Siguiente pregunta');h.click('Siguiente pregunta');h.click('Terminamos esta regla');}
 h.change('cw-c2-law',rules[0].id);
 for(const [field,value] of Object.entries({diagnosis:'Una palabra ambigua.',rewrite:'Solo en visitas anunciadas.',edgeOne:'La visita imprevista queda fuera.',edgeTwo:'Un cambio anunciado de fecha sigue dentro.',limitation:'No evita avisos engañosos.'}))h.change(`cw-c2-${field}`,value);
 h.click('Abrir mi síntesis');h.click('Revisar mi síntesis');h.change('cw-c2-law',rules[1].id);
 assert.ok(button(h,'Abrir mi síntesis').props.disabled);
 for(const field of ['diagnosis','rewrite','edgeOne','edgeTwo','limitation'])assert.equal(find(h.render(),n=>n.props?.id===`cw-c2-${field}`)[0].props.value,'');
 const m=await harness('machine'),rounds=m.bank.eliminationsC2;
 for(let n=0;n<4;n++){if(n)m.click('Otra decisión');completeMachine(m,n===0?'Conservar':'Eliminar',n===0?'Eliminar al final':'Conservar al final');}
 for(const [role,n] of [['eliminate',0],['redefined',1],['binary',2]])m.change(`cw-c2-${role}`,rounds[n].id);
 m.change('cw-c2-proposition',rounds[0].id);m.change('cw-c2-rewrite','Eliminar solo la obligación.');m.change('cw-c2-improvement','Distingue obligación y elección.');
 m.change('cw-c2-binary',rounds[3].id);assert.ok(!button(m,'Abrir mi síntesis').props.disabled,'unrelated role retains notes on the same proposition');
 m.change('cw-c2-proposition',rounds[1].id);assert.ok(button(m,'Abrir mi síntesis').props.disabled);
 assert.equal(find(m.render(),n=>n.props?.id==='cw-c2-rewrite')[0].props.value,'');
 m.change('cw-c2-rewrite','Otra formulación.');m.change('cw-c2-improvement','Aclara otro límite.');m.change('cw-c2-redefined',rounds[2].id);
 assert.equal(find(m.render(),n=>n.props?.id==='cw-c2-proposition')[0].props.value,'');assert.equal(find(m.render(),n=>n.props?.id==='cw-c2-rewrite')[0].props.value,'');
});
