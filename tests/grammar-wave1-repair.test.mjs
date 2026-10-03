import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import ts from 'typescript';
import {build} from 'esbuild';
const require=createRequire(import.meta.url);
const React=require('react');
const {renderToString}=require('react-dom/server');
const baseline=JSON.parse(await readFile(new URL('./fixtures/grammar-wave1-baseline.json',import.meta.url),'utf8'));
const hash=value=>createHash('sha256').update(typeof value==='string'?value:JSON.stringify(value)).digest('hex');
async function data(path, source){
 const {outputText}=ts.transpileModule(source??await readFile(path,'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}});
 return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}
const first=await data('app/grammar-worlds/data.ts');
const next=await data('app/grammar-worlds/data-next.ts');
const banks=[first.quantityMarket,next.adverbTower];
test('only the target catalog promises describe the selected route and implemented mechanics',async()=>{
 const bundled=await build({entryPoints:['app/lesson-catalog.ts'],bundle:true,write:false,platform:'node',format:'esm'});
 const {lessons}=await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString('base64')}`);
 for(const id of [45,47]){
  const lesson=lessons.find(item=>item.id===id);
  assert.equal(lesson.duration,'≈ 45 min + banco opcional');
  assert.doesNotMatch(lesson.subtitle,/3D/);
  assert.equal(lesson.level,'A1');
  assert.equal(lesson.path,id===45?'/el-mercado-de-las-cantidades':'/la-torre-de-las-coordenadas');
 }
 assert.match(lessons.find(item=>item.id===45).subtitle,/compra interactiva/);
 assert.match(lessons.find(item=>item.id===47).subtitle,/escena que puedes mover/);
});
const expected=[
 ['Necesito una botella de agua.','Hay muchos tomates en la caja.','Tengo poco tiempo hoy.','Trabajo todos los días.','Quiero otro café, por favor.','No hay nadie en el puesto.','Esta sopa tiene demasiada sal.','Este mercado no es tan caro.'],
 ['El museo está muy cerca.','Ana estudia mucho.','¿Cuándo empieza la clase?','No voy y Leo tampoco.','Primero cocino; después como.','Habla claramente.','¿Por qué estudias? Porque viajo.','Las llaves están encima de la mesa.'],
];
const validIndices=[[1,0,1,0,0,1,1,1],[1,0,0,1,1,1,1,0]];
// Independent reviewed choice matrices. A grammatical alternative may be wrong for
// the explicit task (time vs place); these matrices do not judge all Spanish usage.
const optionMatrices=[
 [['un','una','uno'],['muchos','mucho','mucha'],['pocas','poco','pocos'],['todos','todos los','todo'],['otro','un otro','otra'],['nada','nadie','ningunos'],['demasiado','demasiada','demasiadas'],['tanto','tan','mucho']],
 [['mucho','muy','mucha'],['mucho','muy','mucha'],['Cuándo','Cuando','Dónde'],['también','tampoco','muy'],['allí','después','mal'],['claras','claramente','claramentes'],['Por que viajo.','Porque viajo.','Porqué viajo.'],['encima','encima de','encimas']],
];
for(const [b,bank] of banks.entries()){
 test(`${bank.slug}: whole eight-item answer bank composes correct Spanish`,()=>{
  assert.equal(bank.practice.length,8);
  bank.practice.forEach((item,i)=>{
   assert.equal(item.answer,validIndices[b][i],`wrong key at ${i}`);
   assert.equal(item.prompt.includes('___')?item.prompt.replace('___',item.options[item.answer]):`${item.prompt} ${item.options[item.answer]}`,expected[b][i]);
   assert.deepEqual(item.options,optionMatrices[b][i]);
   assert.ok(item.id&&item.context&&item.hint,`missing evidence/hint/id at ${i}`);
  });
  assert.equal(new Set(bank.practice.map(i=>i.id)).size,8);
 });
}
test('ambiguous task readings are explicitly constrained and regional gender is not penalized',()=>{
 assert.match(banks[0].practice[5].context,/personas|gente/);
 assert.match(banks[0].practice[5].context,/fruta|productos/);
 assert.match(banks[1].practice[2].context,/nueve|hora/);
 assert.match(banks[1].practice[4].context,/tiempo|secuencia/);
 assert.match(banks[1].practice[5].context,/modo|cómo/);
 assert.doesNotMatch(JSON.stringify(banks[0].traps),/mucha calor/);
 assert.match(banks[0].bigIdea.contrast[3].detail,/contexto/);
});
test('all GrammarWorld banks match the reviewed neutral copy baseline',()=>{
 for(const [key,bank] of Object.entries({...first,...next})){
  const fingerprint=baseline.banks[key];assert.ok(fingerprint,key);
  if(fingerprint.data)assert.equal(hash(bank),fingerprint.data,key);
  else assert.equal(hash({stations:bank.stations,speaking:bank.speaking,mission:bank.mission,hero:bank.hero}),fingerprint.preservedContent,key);
 }
});
test('all 48 options are scored by the reviewed matrix and compose without replacing context',async()=>{
 const {isCorrect,completeSentence}=await data('app/grammar-worlds/repair-state.ts');
 for(const [b,bank] of banks.entries())for(const [i,item] of bank.practice.entries()){
  for(let option=0;option<3;option++){
   assert.equal(isCorrect(item,option),option===validIndices[b][i],`${b}.${i}.${option}`);
   const sentence=item.prompt.includes('___')?item.prompt.replace('___',optionMatrices[b][i][option]):`${item.prompt} ${optionMatrices[b][i][option]}`;
   assert.equal(completeSentence(item,option),sentence);
  }
  for(const invalid of [-1,3,undefined,NaN])assert.equal(isCorrect(item,invalid),false);
 }
});
test('all basket count/target states have consistent bounds, quantities and agreement',async()=>{
 const {adjustCount,quantityStatus,quantityPhrase}=await data('app/grammar-worlds/repair-state.ts');
 for(let count=0;count<=8;count++)for(let target=0;target<=8;target++){
  const result=quantityStatus(count,target);
  assert.equal(result.kind,count===target?'exact':count<target?'short':'excess');
  assert.equal(result.difference,Math.abs(count-target));
  assert.equal(adjustCount(count,1),Math.min(8,count+1));
  assert.equal(adjustCount(count,-1),Math.max(0,count-1));
 }
 assert.equal(quantityPhrase('bottles',1),'una botella');
 assert.equal(quantityPhrase('bottles',3),'tres botellas');
 assert.equal(quantityPhrase('apples',1),'una manzana');
 assert.equal(quantityPhrase('apples',4),'cuatro manzanas');
});
test('position state maps exactly to keys anchors and accepted oral alternatives',async()=>{
 const {positions}=await data('app/grammar-worlds/repair-data.ts');
 assert.deepEqual(positions.map(p=>[p.id,p.x,p.y,p.phrase]),[
  ['on',190,91,'encima de la mesa'],['under',190,173,'debajo de la mesa'],['inside',470,115,'dentro de la caja'],
 ]);
 assert.ok(positions[0].alternatives.includes('sobre la mesa'));
 assert.ok(positions[1].alternatives.includes('bajo la mesa'));
 assert.ok(positions[2].alternatives.includes('en la caja'));
});
async function loadComponent(mock=false){
 let state=[],slot=0;
 const react=mock?{...React,useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return[state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value;}];}}:React;
 const r=await build({entryPoints:['app/grammar-worlds/GrammarRepair.tsx'],bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom'],loader:{'.css':'empty'}});
 const mod={exports:{}};
 runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console})(name=>name==='react'?react:require(name),mod,mod.exports);
 return {components:mod.exports,render:(name,props)=>{slot=0;return mod.exports[name](props);}};
}
const find=(tree,p)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(t=>find(t,p)):[...(p(tree)?[tree]:[]),...find(tree.props?.children,p)];
const button=(tree,action)=>{const found=find(tree,n=>n.type==='button'&&n.props['data-action']===action);assert.equal(found.length,1,action);return found[0];};
const textOf=tree=>typeof tree==='string'||typeof tree==='number'?String(tree):!tree?'':Array.isArray(tree)?tree.map(textOf).join(''):textOf(tree.props?.children);
test('real quiz handlers clear stale feedback, preserve other answers, reveal deliberately and reset',async()=>{
 const h=await loadComponent(true),props={items:banks[0].practice,kind:'quantity'};
 const render=()=>h.render('RepairPractice',props);
 assert.equal(button(render(),'check-market-bottle').props.disabled,true);
 button(render(),'select-market-bottle-0').props.onClick();
 button(render(),'check-market-bottle').props.onClick();
 assert.match(textOf(render()),/Prueba otra vez/);
 assert.doesNotMatch(textOf(render()),/Solución:/);
 button(render(),'reveal-market-bottle').props.onClick();
 assert.match(textOf(render()),/Solución: Necesito una botella/);
 button(render(),'select-market-bottle-1').props.onClick();
 assert.doesNotMatch(textOf(render()),/Solución:|Prueba otra vez/);
 button(render(),'check-market-bottle').props.onClick();
 assert.match(textOf(render()),/1 correctas de 1 comprobadas/);
 button(render(),'select-market-tomatoes-0').props.onClick();
 button(render(),'check-market-tomatoes').props.onClick();
 assert.match(textOf(render()),/2 correctas de 2 comprobadas/);
 button(render(),'select-market-bottle-0').props.onClick();
 assert.match(textOf(render()),/1 correctas de 1 comprobadas/);
 button(render(),'reset-practice').props.onClick();
 assert.match(textOf(render()),/0 correctas de 0 comprobadas/);
 assert.equal(find(render(),n=>n.type==='button'&&n.props['aria-pressed']===true).length,0);
});
test('real basket handlers change visible count, invalidate checks, hide retrieval model and reset',async()=>{
 const h=await loadComponent(true),render=()=>h.render('QuantityTask',{});
 assert.equal(button(render(),'remove-bottles').props.disabled,true);
 for(let i=0;i<3;i++)button(render(),'add-bottles').props.onClick();
 for(let i=0;i<4;i++)button(render(),'add-apples').props.onClick();
 assert.equal(find(render(),n=>n.props?.['data-unit']==='bottles').length,3);
 assert.equal(find(render(),n=>n.props?.['data-unit']==='apples').length,4);
 button(render(),'check-order').props.onClick();
 assert.match(textOf(render()),/Pedido completo/);
 button(render(),'add-apples').props.onClick();
 assert.doesNotMatch(textOf(render()),/Pedido completo/);
 button(render(),'remove-apples').props.onClick();button(render(),'check-order').props.onClick();
 button(render(),'retrieve-order').props.onClick();
 assert.equal(find(render(),n=>n.props?.['data-model']).length,0);
 assert.equal(find(render(),n=>n.props?.['data-unit']).length,0);
 button(render(),'show-order-model').props.onClick();assert.equal(find(render(),n=>n.props?.['data-model']).length,1);
 button(render(),'reset-order').props.onClick();
 assert.match(textOf(render()),/3 botellas.*4 manzanas/);
 assert.equal(find(render(),n=>n.props?.['data-unit']).length,0);
});
test('real coordinate handlers move the SVG key and reset retrieval confirmation when the evidence changes',async()=>{
 const h=await loadComponent(true),render=()=>h.render('CoordinateTask',{});
 for(const [id,x,y] of [['on',190,91],['under',190,173],['inside',470,115]]){
  button(render(),`position-${id}`).props.onClick();
  assert.equal(find(render(),n=>n.props?.['data-keys'])[0].props.transform,`translate(${x} ${y})`);
 }
 button(render(),'retrieve-position').props.onClick();
 assert.equal(find(render(),n=>n.props?.['data-model']).length,0);
 button(render(),'confirm-position').props.onClick();assert.match(textOf(render()),/Descripción observada/);
 button(render(),'position-under').props.onClick();assert.doesNotMatch(textOf(render()),/Descripción observada/);
 button(render(),'show-position-model').props.onClick();assert.equal(find(render(),n=>n.props?.['data-model']).length,1);
 button(render(),'reset-position').props.onClick();
 assert.equal(find(render(),n=>n.props?.['data-keys'])[0].props.transform,'translate(190 91)');
 assert.doesNotMatch(textOf(render()),/Descripción observada/);
});
test('both focused oral closings have optional help and explicit teacher observation, with reset',async()=>{
 for(const kind of ['quantity','coordinate']){
  const h=await loadComponent(true),render=()=>h.render('RepairClose',{kind});
  assert.equal(find(render(),n=>n.props?.['data-model']).length,0);
  button(render(),'close-help').props.onClick();assert.equal(find(render(),n=>n.props?.['data-model']).length,1);
  button(render(),'close-confirm').props.onClick();assert.match(textOf(render()),/Intercambio observado/);
  button(render(),'close-reset').props.onClick();assert.doesNotMatch(textOf(render()),/Intercambio observado/);
 }
});
test('all new panels SSR render usable controls and no fake mastery claims',async()=>{
 const {components}=await loadComponent();
 for(const [name,props] of [['QuantityTask',{}],['CoordinateTask',{}],['RepairPractice',{items:banks[0].practice,kind:'quantity'}],['RepairClose',{kind:'coordinate'}],['RepairGuide',{kind:'quantity'}]]){
  const html=renderToString(React.createElement(components[name],props));
  assert.doesNotMatch(html,/undefined|NaN|DOMINIO DEL MÓDULO/);
  assert.match(html,/gw-repair/);
 }
});
test('regression: todos must not duplicate the article',()=>{
 const item=banks[0].practice[3];assert.equal(item.prompt.replace('___',item.options[item.answer]),'Trabajo todos los días.');
});
test('regression: encima must not duplicate the preposition',()=>{
 const item=banks[1].practice[7];assert.equal(item.prompt.replace('___',item.options[item.answer]),'Las llaves están encima de la mesa.');
});
async function worldComponent(source, mockReact, globals={}){
 const r=await build({stdin:{contents:source??await readFile('app/grammar-worlds/GrammarWorld.tsx','utf8'),resolveDir:process.cwd()+'/app/grammar-worlds',loader:'tsx'},bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const mod={exports:{}};
 runInNewContext(`(function(require,module,exports){${r.outputFiles[0].text}\n})`,{console,...globals})(name=>name==='react'&&mockReact?mockReact:require(name),mod,mod.exports);
 return mod.exports.default;
}
test('all nine worlds SSR render; seven non-target renderings match the reviewed neutral baseline',async()=>{
 const Current=await worldComponent();
 const normalize=html=>html.replace(/grammar-step-[^" ]+/g,'grammar-step-ID');
 for(const [key,bank] of Object.entries({...first,...next})){
  const html=renderToString(React.createElement(Current,{data:bank}));
  assert.ok(html.includes(bank.title.split(' ')[0]));
  assert.doesNotMatch(html,/undefined|NaN/);
  if(bank.repair){
   assert.match(html,/ESTACIONES EXPLORADAS/);
   assert.match(html,/gw-repair-task/);assert.match(html,/gw-repair-close/);
   assert.doesNotMatch(html,/DOMINIO DEL MÓDULO|RECORRIDO 3D|TORRE 3D/);
  }else{
   assert.equal(hash(normalize(html)),baseline.banks[key].render,bank.slug);
  }
 }
});
test('real window key handler only navigates from station controls for repaired lessons',async()=>{
 for(const bank of [banks[0],banks[1],first.nounFactory]){
  const effects=[];let handler,scrolls=0;
  class Target {constructor(inNav){this.inNav=inNav;}closest(){return this.inNav?{}:null;}}
  const mockReact={...React,useState:initial=>[initial,()=>{}],useMemo:fn=>fn(),useCallback:fn=>fn,useRef:()=>({current:null}),useEffect:fn=>effects.push(fn)};
  const Component=await worldComponent(undefined,mockReact,{Element:Target,window:{addEventListener:(_,fn)=>handler=fn,removeEventListener:()=>{},requestAnimationFrame:fn=>fn()},document:{getElementById:()=>({scrollIntoView:()=>scrolls++})}});
  const outer=Component({data:bank});
  const tree=typeof outer.type==='function'?outer.type(outer.props):outer;effects[0]();
  handler({key:'ArrowRight',target:new Target(false)});
  assert.equal(scrolls,bank.repair?0:1);
  handler({key:'ArrowRight',target:new Target(true)});
  assert.equal(scrolls,bank.repair?1:2);
  if(bank.repair){
   const keyed=find(tree,n=>typeof n.type==='function'&&['RepairPractice','RepairClose','QuantityTask','CoordinateTask'].includes(n.type.name));
   assert.equal(keyed.length,3);
   assert.ok(keyed.every(node=>node.key===bank.slug),'changing lessons must remount dependent activity state');
  }
 }
});
test('every question has independent real select/check/retry/reveal behavior for all 48 choices',async()=>{
 for(const [b,bank] of banks.entries()){
  const h=await loadComponent(true),render=()=>h.render('RepairPractice',{items:bank.practice,kind:bank.repair});
  for(const [i,item] of bank.practice.entries())for(let option=0;option<3;option++){
   button(render(),`select-${item.id}-${option}`).props.onClick();
   const article=find(render(),n=>n.type==='article')[i];
   assert.doesNotMatch(textOf(article),/La frase funciona|Prueba otra vez|Solución:/);
   button(render(),`check-${item.id}`).props.onClick();
   const result=find(render(),n=>n.type==='article')[i];
   assert.match(textOf(result),option===validIndices[b][i]?/La frase funciona/:/Prueba otra vez/);
   if(option!==validIndices[b][i]){
    button(render(),`reveal-${item.id}`).props.onClick();
    assert.ok(textOf(find(render(),n=>n.type==='article')[i]).includes(`Solución: ${expected[b][i]}`));
   }
  }
 }
});
test('repaired exploration starts at zero before a station is visited',async()=>{
 const World=await worldComponent();
 for(const bank of banks){
  const html=renderToString(React.createElement(World,{data:bank}));
  assert.match(html,/width:0%/);
  assert.doesNotMatch(html,/width:20%/);
 }
});
test('basket controls enforce every visible boundary and count from zero through eight',async()=>{
 const h=await loadComponent(true),render=()=>h.render('QuantityTask',{});
 for(const product of ['bottles','apples']){
  for(let count=0;count<=8;count++){
   assert.equal(find(render(),n=>n.props?.['data-unit']===product).length,count);
   assert.equal(button(render(),`remove-${product}`).props.disabled,count===0);
   assert.equal(button(render(),`add-${product}`).props.disabled,count===8);
   if(count<8)button(render(),`add-${product}`).props.onClick();
  }
  for(let count=8;count>0;count--)button(render(),`remove-${product}`).props.onClick();
  assert.equal(find(render(),n=>n.props?.['data-unit']===product).length,0);
 }
});
test('whole repaired world state is keyed to its lesson while legacy worlds retain one identity',async()=>{
 const react={...React,useState:initial=>[initial,()=>{}],useMemo:fn=>fn(),useCallback:fn=>fn,useRef:()=>({current:null}),useEffect:()=>{}};
 const World=await worldComponent(undefined,react);
 for(const bank of banks)assert.equal(World({data:bank}).key,bank.slug);
 assert.equal(World({data:first.nounFactory}).key,'legacy');
 assert.equal(World({data:first.articleGallery}).key,'legacy');
});
