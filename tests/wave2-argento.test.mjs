import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
import ts from 'typescript';
const require=createRequire(import.meta.url),React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
async function loadData(path){const source=await readFile(path,'utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;return import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));}
const data=await loadData('app/argento/data.ts');
test('complete regional bank and shared support are preserved',()=>{
 assert.equal(data.worlds.length,12); const words=data.worlds.flatMap(w=>w.words.map(p=>p[0])); assert.equal(words.length,144);assert.equal(new Set(words).size,133);
 assert.equal(hash(data.worlds.map(w=>[w.id,w.photo,w.words.map(p=>p[0]),w.q,w.subs,w.extra])),'249679fdc619ad9b28488ebb98d91017c4d59fc721384e01056e14bb719e006e');
 assert.equal(hash([data.starters,data.connectors,data.reactions]),'a4e425002dea099ae63fb15153d4d8abc305b83ae13b58b953cb56ca91e28850');
});
test('risky vocabulary cannot appear as unqualified friendly English glosses',()=>{
 const words=data.worlds.find(w=>w.id==='argento').words;
 assert.match(words.find(p=>p[0]==='boludo')[1],/insult|rude/i);
 assert.match(words.find(p=>p[0]==='ni en pedo')[1],/vulgar/i);
});
test('all questions get authored relevant support and every world has safe contextual recall',async()=>{
 const path='app/argento/practice-data.ts'; const exists=await readFile(path,'utf8').catch(()=>null);assert.ok(exists,'authored retrieval bank missing');
 const d=await loadData(path);
 assert.equal(Object.keys(d.questionHelp).length,12);
 for(const world of data.worlds){assert.equal(d.questionHelp[world.id].length,6);const p=d.practice[world.id];assert.equal(p.chunks.length,3);assert.equal(new Set(p.chunks.map(c=>c.id)).size,3);for(const c of p.chunks){assert.ok(c.cue&&c.model&&c.later&&c.hint);assert.notEqual(c.cue,c.later);assert.ok(c.words.every(word=>world.words.some(w=>w[0]===word)));assert.doesNotMatch(c.model,/boludo|ni en pedo/);}assert.equal(p.choice.options.length,3);assert.ok(p.choice.answer>=0&&p.choice.answer<3);assert.equal(p.choice.feedback.length,3);}
 assert.match(d.questionHelp.mate[3][0],/comparto|compartir/);
 assert.equal(d.registerNotes.boludo.mode,'receptivo');assert.equal(d.registerNotes['ni en pedo'].mode,'receptivo');
 for(const n of Object.values(d.registerNotes)){assert.ok(['coloquial','informal','vulgar','contextual'].includes(n.register));assert.ok(n.context&&n.neutral);}
});
async function loadComponent(entry,mock=false){let state=[],slot=0;const react=mock?{...React,useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],next=>{state[i]=typeof next==='function'?next(state[i]):next}];},useRef:()=>({current:null}),useEffect:()=>{}}:React;
 const r=await build({entryPoints:[entry],bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/link'],loader:{'.css':'empty'}});const mod={exports:{}};
 runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console,requestAnimationFrame:fn=>fn()})(name=>name==='react'?react:name==='next/link'?({children,...p})=>React.createElement('a',p,children):require(name),mod,mod.exports);
 return {components:mod.exports,render:(name,props)=>{slot=0;return mod.exports[name](props);}};
}
const find=(tree,p)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(t=>find(t,p)):[...(p(tree)?[tree]:[]),...find(tree.props?.children,p)];
const action=(tree,id)=>{const result=find(tree,n=>n.type==='button'&&n.props['data-action']===id);assert.equal(result.length,1,id);return result[0];};
const textOf=t=>typeof t==='string'||typeof t==='number'?String(t):!t?'':Array.isArray(t)?t.map(textOf).join(''):textOf(t.props?.children);
test('SSR advertises vocabulary and translations are optional',async()=>{const h=await loadComponent('app/argento/page.tsx');const html=renderToStaticMarkup(React.createElement(h.components.default));assert.match(html,/A1 · VOCABULARIO/);assert.match(html,/Mostrar traducciones/);assert.doesNotMatch(html,/I like…/);});
async function practiceHarness(){const exists=await readFile('app/argento/ArgentoPractice.tsx','utf8').catch(()=>null);assert.ok(exists,'retrieval component missing');const h=await loadComponent('app/argento/ArgentoPractice.tsx',true);let props={worldId:'mate',mode:'explore',setMode:mode=>{props.mode=mode}};return {props,render:()=>h.render('ArgentoPractice',props)};}
test('real recognition feedback follows answers and navigation alone cannot unlock delayed recall',async()=>{
 const h=await practiceHarness(),r=h.render;
 action(r(),'choice-0').props.onClick();action(r(),'check-context').props.onClick();assert.match(textOf(r()),/Dulce indica/);
 action(r(),'choice-1').props.onClick();assert.doesNotMatch(textOf(r()),/Dulce indica/);action(r(),'check-context').props.onClick();
 action(r(),'start-recall').props.onClick();assert.equal(h.props.mode,'recall');assert.equal(find(r(),n=>n.props?.['data-model']).length,0);
 action(r(),'recall-help').props.onClick();assert.ok(find(r(),n=>n.props?.['data-model']).length);action(r(),'save-recall').props.onClick();
 h.props.worldId='cafe';assert.equal(find(r(),n=>n.props?.['data-action']==='later-mate').length,0);
 h.props.worldId='mate';assert.equal(find(r(),n=>n.props?.['data-action']==='later-mate').length,0);
 h.props.worldId='cafe';action(r(),'choice-1').props.onClick();action(r(),'check-context').props.onClick();
 action(r(),'later-mate').props.onClick();assert.equal(h.props.mode,'later');assert.equal(find(r(),n=>n.props?.['data-model']).length,0);assert.match(textOf(r()),/yerba nueva/);
 action(r(),'later-help').props.onClick();assert.ok(find(r(),n=>n.props?.['data-model']).length);action(r(),'confirm-later').props.onClick();assert.match(textOf(r()),/Recuperación observada/);
 action(r(),'reset-session').props.onClick();assert.equal(h.props.mode,'explore');assert.doesNotMatch(textOf(r()),/Recuperación observada/);assert.equal(find(r(),n=>n.props?.['data-action']==='later-mate').length,0);
});
test('all 36 context options use real handlers, and oral close offers help without auto-grading',async()=>{
 const d=await loadData('app/argento/practice-data.ts');const keys=[1,0,2,0,1,2,0,1,2,0,1,2];
 for(const [i,world] of data.worlds.entries()){const h=await practiceHarness();h.props.worldId=world.id;for(let n=0;n<3;n++){action(h.render(),`choice-${n}`).props.onClick();action(h.render(),'check-context').props.onClick();assert.match(textOf(h.render()),new RegExp(n===keys[i]?'Contexto resuelto':'Probá otra opción'));assert.ok(textOf(h.render()).includes(d.practice[world.id].choice.feedback[n]));}action(h.render(),'start-close').props.onClick();assert.equal(find(h.render(),n=>n.props?.['data-model']).length,0);action(h.render(),'close-help').props.onClick();assert.equal(find(h.render(),n=>n.props?.['data-model']).length,3);action(h.render(),'confirm-close').props.onClick();assert.match(textOf(h.render()),/Intercambio observado/);}
});
test('slang roleplay turn does not invite beginners to produce receptive-only items',async()=>{
 const h=await loadComponent('app/argento/page.tsx',true),r=()=>h.render('default',{});
 find(r(),n=>n.type==='button'&&n.props.style?.backgroundImage&&textOf(n).includes('ARGENTO'))[0].props.onClick();
 find(r(),n=>n.type==='button'&&n.props.role==='tab'&&textOf(n).includes('TU TURNO'))[0].props.onClick();
 const panel=find(r(),n=>n.props?.id==='argento-role-panel')[0];const cards=find(panel,n=>n.props?.pair).map(n=>n.props.pair[0]);
 assert.ok(cards.length>1);assert.ok(!cards.includes('boludo'));assert.ok(!cards.includes('quilombo'));assert.ok(!cards.includes('ni en pedo'));
});
test('page handlers remove every bank/model/support source in recall and restore them on world change',async()=>{
 const h=await loadComponent('app/argento/page.tsx',true),r=()=>h.render('default',{});
 const component=()=>find(r(),n=>n.props?.worldId&&n.props?.setMode)[0];
 assert.equal(find(r(),n=>n.props?.className==='argento-bank').length,1);
 for(const mode of ['recall','later','close']){component().props.setMode(mode);assert.equal(find(r(),n=>n.props?.className==='argento-bank').length,0);assert.equal(find(r(),n=>n.props?.className==='argento-floating').length,0);assert.equal(find(r(),n=>n.props?.pair).length,0);}
 find(r(),n=>n.type==='button'&&n.props.style?.backgroundImage&&textOf(n).includes('CAFÉ'))[0].props.onClick();assert.equal(component().props.mode,'explore');assert.equal(component().props.worldId,'cafe');assert.equal(find(r(),n=>n.props?.className==='argento-bank').length,1);
 action(r(),'translations').props.onClick();assert.equal(action(r(),'translations').props['aria-pressed'],true);
});
test('all worlds SSR render models, context and productive close with hidden recall solutions',async()=>{
 const h=await loadComponent('app/argento/ArgentoPractice.tsx');
 for(const world of data.worlds){for(const mode of ['explore','recall','close']){const html=renderToStaticMarkup(React.createElement(h.components.ArgentoPractice,{worldId:world.id,mode,setMode:()=>{}}));assert.match(html,/Práctica de vocabulario/);assert.match(html,/Reiniciar práctica/);if(mode==='explore')assert.match(html,/Comprobar contexto/);else assert.doesNotMatch(html,/data-model/);if(mode==='close')assert.match(html,/intercambio observado/);}}
});
