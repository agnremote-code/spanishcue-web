import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {reconciledMain,reconciledMainPaths} from './helpers/wave3-preservation.mjs';
const require=createRequire(import.meta.url),React=require('react'),{renderToString}=require('react-dom/server');
async function load(path,runtime=React,source){const result=await build({...(source?{stdin:{contents:source,resolveDir:process.cwd()+'/app/syntax-labs',loader:'tsx'}}:{entryPoints:[path]}),bundle:true,write:false,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});const m={exports:{}};runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,process})(n=>n==='react'?runtime:require(n),m,m.exports);return m.exports;}
const banks=await load('app/syntax-labs/data.ts');
const targets=['antesDespuesCuando','peroHayUnMatiz','laPersonaQueTengoEnMente'];
const walk=(tree,fn)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(n=>walk(n,fn)):[...(fn(tree)?[tree]:[]),...walk(tree.props?.children,fn)];
const visibleWalk=(tree,fn)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(n=>visibleWalk(n,fn)):tree.props?.hidden?[]:[...(fn(tree)?[tree]:[]),...visibleWalk(tree.props?.children,fn)];
const visibleWords=t=>t?.props?.hidden?'':typeof t==='string'||typeof t==='number'?String(t):Array.isArray(t)?t.map(visibleWords).join(''):t?.props?visibleWords(t.props.children):'';
const words=t=>typeof t==='string'||typeof t==='number'?String(t):Array.isArray(t)?t.map(words).join(''):t?.props?words(t.props.children):'';
async function harness(name,props){const state=[];let slot=0;const runtime={...React,useState:init=>{const i=slot++;if(!(i in state))state[i]=typeof init==='function'?init():init;return[state[i],v=>state[i]=typeof v==='function'?v(state[i]):v];},useRef:init=>{const i=slot++;return state[i]??(state[i]={current:init});}};const components=await load('app/syntax-labs/RepairSyntaxLab.tsx',runtime);const render=()=>{slot=0;return components[name](props);};const button=id=>walk(render(),n=>n.type==='button'&&n.props['data-action']===id)[0];return{render,button,text:()=>visibleWords(render()),click:id=>{const b=button(id);assert.ok(b,id);assert.ok(!b.props.disabled,id);b.props.onClick();}};}
test('target SSR supplies actual practice path, deliberate reset and teacher assessment',async()=>{const {default:Lab}=await load('app/syntax-labs/SyntaxLab.tsx');for(const name of targets){const html=renderToString(React.createElement(Lab,{data:banks[name]}));assert.match(html,/REINICIAR LECCIÓN/);assert.match(html,/45 minutos/);assert.match(html,/docente/);assert.match(html,/RECUPERAR SIN APOYO/);}});
test('all5 non-target lab SSR and visual source stay identical to base',async()=>{const base='2b48f28bc7b25f19c650e52cece8f59eca352936';const {default:Current}=await load('app/syntax-labs/SyntaxLab.tsx');const {default:Previous}=await load(null,React,execFileSync('git',['show',`${base}:app/syntax-labs/SyntaxLab.tsx`],{encoding:'utf8'}));for(const name of Object.keys(banks)){if(targets.includes(name))continue;assert.equal(renderToString(React.createElement(Current,{data:banks[name]})),renderToString(React.createElement(Previous,{data:banks[name]})),name);}const mainPaths=reconciledMainPaths();for(const path of ['app/syntax-labs/SyntaxVisuals.tsx','app/syntax-labs/style.css'])assert.equal(readFileSync(path,'utf8'),execFileSync('git',['show',`${mainPaths.has(path)?reconciledMain.head:base}:${path}`],{encoding:'utf8'}));});
test('every real decision/repair handler checks all options; hints, retry, reveal and reset cannot retain stale feedback',async()=>{
 for(const name of targets)for(const kind of ['decisions','repairs'])for(const [index,item] of banks[name][kind].entries()){
  const h=await harness('CheckedChoice',{item,index,kind,slug:banks[name].slug});
  assert.equal(h.button('check').props.disabled,true);
  for(let i=0;i<item.options.length;i++){
   h.click(`select-${i}`);assert.doesNotMatch(h.text(),/RELACIÓN VÁLIDA|VOLVÉ A MIRAR|Solución:/);
   h.click('check');const correct=(item.accepted??[item.correct]).includes(i);
   assert.match(h.text(),correct?/RELACIÓN VÁLIDA/:/VOLVÉ A MIRAR/);
   if(!correct)assert.ok(!h.text().includes(item.feedback),'wrong choice does not leak solution rationale');
   h.click('hint');assert.match(h.text(),/PISTA/);
   h.click('retry');assert.doesNotMatch(h.text(),/RELACIÓN VÁLIDA|VOLVÉ A MIRAR|PISTA:|Solución:/);
  }
  h.click('reveal');assert.match(h.text(),/Solución:/);assert.ok(h.text().includes(item.feedback));
  h.click('reset');assert.equal(h.button('check').props.disabled,true);assert.doesNotMatch(h.text(),/RELACIÓN VÁLIDA|VOLVÉ A MIRAR|PISTA:|Solución:/);
 }
});
test('timeline moves actual events, explains reverse order, and resets',async()=>{
 const h=await harness('TimelineStation',{});h.click('check');assert.match(h.text(),/Revisá/);h.click('up-1');h.click('check');assert.match(h.text(),/Orden coherente/);h.click('reverse');assert.match(h.text(),/Después de desayunar, salgo de casa/);h.click('down-0');assert.doesNotMatch(h.text(),/Orden coherente/);h.click('reset');assert.doesNotMatch(h.text(),/Orden coherente|Después de desayunar, salgo/);
});
test('contrast changes negative position and responds to an actual third datum',async()=>{
 const h=await harness('ContrastStation',{});h.click('front');assert.match(h.text(),/Ni el precio ni la distancia son el problema/);h.click('back');assert.match(h.text(),/El problema no es ni el precio ni la distancia/);h.click('third');assert.match(h.text(),/horario/);h.click('choose-0');h.click('check');assert.match(h.text(),/VOLVÉ A MIRAR/);h.click('choose-1');assert.doesNotMatch(h.text(),/VOLVÉ A MIRAR/);h.click('check');assert.match(h.text(),/RELACIÓN VÁLIDA/);h.click('reset');assert.doesNotMatch(h.text(),/RELACIÓN VÁLIDA|El horario es imposible/);
});
test('referent filter needs both clues; changing reference invalidates confirmation',async()=>{
 const h=await harness('ReferentStation',{});h.click('clue-0');assert.match(h.text(),/2 candidatos/);h.click('clue-1');assert.match(h.text(),/1 candidato/);h.click('check');assert.match(h.text(),/Ana/);h.click('clue-0');assert.doesNotMatch(h.text(),/REFERENTE IDENTIFICADO/);h.click('reset');assert.match(h.text(),/3 candidatos/);
});
test('recall and oral views hide models, track assisted attempts honestly, and clear observations on change/reset',async()=>{
 for(const name of targets){
  const h=await harness('RecallStage',{data:banks[name]});assert.doesNotMatch(h.text(),/Antes de salir, desayuno|Ni el precio ni la distancia son el problema|Hablé con Lucía/);
  h.click('help');h.click('observe');assert.match(h.text(),/con apoyo/);h.click('retry');assert.doesNotMatch(h.text(),/Intento observado/);h.click('observe');assert.match(h.text(),/sin apoyo/);h.click('next');assert.doesNotMatch(h.text(),/Intento observado/);h.click('reset');assert.doesNotMatch(h.text(),/Intento observado/);
  const o=await harness('OralStage',{data:banks[name]});assert.equal(o.button('criterion-2').props.disabled,true);o.click('change');o.click('criterion-0');o.click('criterion-1');o.click('criterion-2');assert.match(o.text(),/observada por el docente/);o.click('change');assert.doesNotMatch(o.text(),/Intervención observada/);o.click('help');o.click('reset');assert.doesNotMatch(o.text(),/APOYO PARA EMPEZAR|Intervención observada/);
 }
});
test('actual session navigation hides all earlier models and optional bank visually and from accessibility',async()=>{
 for(const name of targets){const h=await harness('RepairSession',{data:banks[name]});assert.match(h.text(),/RECORRIDO DOCENTE/);h.click('recall');assert.doesNotMatch(h.text(),/RECORRIDO DOCENTE|Un modelo, una relación|BANCO OPCIONAL COMPLETO/);assert.equal(visibleWalk(h.render(),n=>typeof n.type==='function'&&n.type.name==='RecallStage').length,1);h.click('oral');assert.equal(visibleWalk(h.render(),n=>typeof n.type==='function'&&n.type.name==='OralStage').length,1);assert.equal(visibleWalk(h.render(),n=>typeof n.type==='function'&&n.type.name==='RecallStage').length,0);}
});
test('lesson reset handler remounts the entire keyed session and all child state',async()=>{
 const h=await harness('default',{data:banks.antesDespuesCuando});
 const key=()=>walk(h.render(),n=>typeof n.type==='function'&&n.type.name==='RepairSession')[0].key;
 assert.equal(key(),'0');h.click('reset-lesson');assert.equal(key(),'1');h.click('reset-lesson');assert.equal(key(),'2');
});
test('all3 exact routes render target lesson and metadata; catalog and PRO policy unchanged',async()=>{
 const base='2b48f28bc7b25f19c650e52cece8f59eca352936';const {lessons}=await load('app/lesson-catalog.ts');const {isFreeLesson,lessonAtPath}=await load('app/access-policy.ts');
 for(const [i,id] of [213,217,218].entries()){
  const bank=banks[targets[i]],path=`app/${bank.slug}/page.tsx`;assert.equal(readFileSync(path,'utf8'),execFileSync('git',['show',`${base}:${path}`],{encoding:'utf8'}));
  const {default:Page,metadata}=await load(path);assert.equal(metadata.title,`${bank.title} · Gramática ${bank.level} · SPANISHCUE`);assert.equal(metadata.description,bank.subtitle);
  const html=renderToString(React.createElement(Page));assert.ok(html.includes(bank.title));assert.match(html,/sx-repaired/);
  const lesson=lessonAtPath('/'+bank.slug,lessons);assert.equal(lesson.id,id);assert.equal(lesson.title,bank.title);assert.equal(lesson.level,bank.level);assert.equal(isFreeLesson(id),false);
 }
 for(const path of ['app/lesson-catalog.ts','app/access-policy.ts'])assert.equal(readFileSync(path,'utf8'),execFileSync('git',['show',`${base}:${path}`],{encoding:'utf8'}));
});
test('all24 timeline permutations are controllable by real move handlers; only chronological order passes',async()=>{
 function permutations(xs){return xs.length?xs.flatMap((x,i)=>permutations(xs.filter((_,j)=>i!==j)).map(rest=>[x,...rest])):[[]];}
 for(const target of permutations([0,1,2,3])){
  const h=await harness('TimelineStation',{}),order=[1,0,2,3];
  for(let i=0;i<4;i++){let p=order.indexOf(target[i]);while(p>i){h.click(`up-${p}`);[order[p],order[p-1]]=[order[p-1],order[p]];p--;}}
  h.click('check');assert.match(h.text(),target.every((v,i)=>v===i)?/Orden coherente/:/Revisá las horas/);
 }
});
test('relative known-person comparison accepts both forms and cannot remain after changing clues',async()=>{
 const h=await harness('ReferentStation',{});h.click('clue-0');h.click('clue-1');h.click('check');h.click('known');assert.match(h.text(),/Ana, que trabaja en recepción, puede ayudarte/);assert.match(h.text(),/Ana, quien trabaja en recepción, puede ayudarte/);h.click('clue-1');assert.doesNotMatch(h.text(),/Ana, quien/);
});
// Minimal hook host for these local components only. Identity follows keyed tree
// paths; cells of unmounted children are discarded, so conditional mounting loses
// real handler state here just as it does under React. This is not browser QA.
async function sessionHarness(data){
 const fibers=new Map();let active=null,slot=0,visited=new Set();
 const runtime={...React,useState:init=>{const i=slot++;if(!(i in active))active[i]=typeof init==='function'?init():init;const cell=active;return[cell[i],v=>cell[i]=typeof v==='function'?v(cell[i]):v];}};
 const components=await load('app/syntax-labs/RepairSyntaxLab.tsx',runtime),owned=new Set(Object.values(components));
 function expand(node,path){
  if(!node||typeof node!=='object')return node;
  if(Array.isArray(node))return node.map((n,i)=>expand(n,`${path}/${n?.key??i}`));
  if(owned.has(node.type)){
   const id=`${path}/${node.type.name}:${node.key??''}`;visited.add(id);if(!fibers.has(id))fibers.set(id,[]);const before=active,beforeSlot=slot;active=fibers.get(id);slot=0;const child=node.type(node.props);active=before;slot=beforeSlot;return expand(child,id);
  }
  return {...node,props:{...node.props,children:expand(node.props?.children,path+'/children')}};
 }
 const render=()=>{visited=new Set();const tree=expand(React.createElement(components.default,{data}),'root');for(const id of fibers.keys())if(!visited.has(id))fibers.delete(id);return tree;};
 const visible=(tree,fn)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(t=>visible(t,fn)):tree.props?.hidden?[]:[...(fn(tree)?[tree]:[]),...visible(tree.props?.children,fn)];
 const button=id=>visible(render(),n=>n.type==='button'&&n.props['data-action']===id)[0];
 return {render,button,visible,click:id=>{const b=button(id);assert.ok(b,id);assert.ok(!b.props.disabled,id);b.props.onClick();}};
}
test('real tree preserves choice, optional-bank, recall and oral state on revisits; full reset clears all',async()=>{
 const h=await sessionHarness(banks.peroHayUnMatiz);
 const choice=prompt=>h.visible(h.render(),n=>n.type==='article'&&n.props.className==='sx-work-item').find(n=>words(n).includes(prompt));
 const clickIn=(node,id)=>{const b=walk(node,n=>n.type==='button'&&n.props['data-action']===id)[0];assert.ok(b,id);b.props.onClick();};
 clickIn(choice(banks.peroHayUnMatiz.decisions[0].prompt),'select-1');clickIn(choice(banks.peroHayUnMatiz.decisions[0].prompt),'check');
 h.click('toggle-bank');clickIn(choice(banks.peroHayUnMatiz.decisions[8].prompt),'select-0');clickIn(choice(banks.peroHayUnMatiz.decisions[8].prompt),'check');
 h.click('toggle-bank');h.click('toggle-bank');assert.match(words(choice(banks.peroHayUnMatiz.decisions[8].prompt)),/RELACIÓN VÁLIDA/);
 h.click('recall');assert.equal(choice(banks.peroHayUnMatiz.decisions[0].prompt),undefined);h.click('observe');
 h.click('oral');h.click('change');h.click('criterion-0');h.click('criterion-1');h.click('criterion-2');
 h.click('recall');assert.ok(h.visible(h.render(),n=>n.props?.role==='status').some(n=>words(n).includes('Intento observado')));
 h.click('guided');assert.match(words(choice(banks.peroHayUnMatiz.decisions[0].prompt)),/RELACIÓN VÁLIDA/);
 h.click('oral');assert.ok(h.visible(h.render(),n=>n.props?.role==='status').some(n=>words(n).includes('Intervención observada')));
 h.click('reset-lesson');assert.doesNotMatch(words(choice(banks.peroHayUnMatiz.decisions[0].prompt)),/RELACIÓN VÁLIDA/);h.click('recall');assert.ok(!h.visible(h.render(),n=>n.props?.role==='status').some(n=>words(n).includes('Intento observado')));h.click('oral');assert.equal(h.button('criterion-0').props['aria-pressed'],false);
});
