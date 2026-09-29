import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const require=createRequire(import.meta.url), React=require('react');
async function load(path,runtime=React,globals={}){
 const result=await build({entryPoints:[path],bundle:true,write:false,platform:'node',format:'cjs',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const m={exports:{}};runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,...globals})(name=>name==='react'?runtime:require(name),m,m.exports);return m.exports;
}
const plain=x=>JSON.parse(JSON.stringify(x));
const find=(tree,predicate)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(n=>find(n,predicate)):[...(predicate(tree)?[tree]:[]),...find(tree.props?.children,predicate)];
const text=tree=>typeof tree==='string'||typeof tree==='number'?String(tree):Array.isArray(tree)?tree.map(text).join(''):tree?.props?text(tree.props.children):'';
const expected=[
'No encuentro el enchufe para cargar el teléfono.','Las plantas están sobre el estante.','Después de ducharte, colgá la toalla.','Nunca tengo tiempo de hacer la cama por la mañana.','¿Dónde puedo guardar la valija?','Tenemos que ordenar la cocina antes de salir.','Odio quedarme sin batería durante un viaje.','¿Sabés arreglar una lámpara?','Busco un departamento pequeño pero cómodo.','La habitación quedó desordenada después de la mudanza.',
'Te espero en la esquina de Corrientes y Callao.','Caminá una cuadra y doblá a la derecha.','Había muchas mesas sobre la vereda.','Tenemos que cruzar la avenida.','En la próxima esquina, doblá a la derecha.','¿Dónde queda la parada del colectivo?','Hay un embotellamiento enorme en la autopista.','No tomes un taxi: queda cerca y podemos caminar.','Para evitar el tráfico, vamos a tomar el metro.','¿Cuál es tu barrio favorito de la ciudad?',
'¿Qué vas a pedir para comer?','Tenés que probar este postre.','¿Este curry es muy picante?','¿Cuál es el plato más popular del restaurante?','¿Nos podés traer los cubiertos, por favor?','¿Pedimos la cuenta o un postre más?','Después de ese almuerzo es imposible no estar lleno.','Después de hacer ejercicio, es normal tener hambre.','No tenemos tiempo; pidamos la comida para llevar.','Para mí, un café sin azúcar.',
'¿Dónde puedo dejar el equipaje?','Todavía no reservamos el alojamiento en la isla.','Quiero reservar una habitación para dos noches.','Sin conexión es fácil perderse en esta ciudad.','Anunciaron el retraso por mal tiempo.','¿El precio incluye ida y vuelta?','El vuelo no es directo: vamos a hacer escala.','Quiero sacar una foto desde el mirador.','Si tomamos un taxi, vamos a llegar a tiempo.','El vuelo sale por la puerta de embarque número doce.',
'Ella está muy emocionada por su nuevo trabajo.','¿Por qué estás tan preocupado?','Sus padres están orgullosos de ella.','Quedó frustrado después de varios intentos.','A veces cuesta darse cuenta del error.','Es lindo tener ganas de aprender algo nuevo.','Cuando viajo, suelo echar de menos mi cama.','Para trabajar juntos es importante llevarse bien.','Al principio puede dar vergüenza hablar en público.','Dormir bien me ayuda a estar de buen humor.',
'¿Cuál es la primera tarea del día?','Movieron la reunión para el jueves.','Necesitamos ampliar el plazo de entrega.','¿Cuándo hay que entregar el proyecto?','¿Me prestás los apuntes de la clase pasada?','La semana que viene tengo que rendir un examen.','Falté dos clases y ahora debo ponerme al día.','Intentá resolver el ejercicio sin mirar la respuesta.','No me gusta tener pendientes muchas tareas.','Apago el teléfono para poder concentrarme.'
];
test('all 60 preserved lexemes have reviewed composed models, combinations and valid use notes',async()=>{
 const {wordBank,wordTopics}=await load('app/banco-de-palabras/data.ts');
 const {lexicalPractice,completedGap}=await load('app/banco-de-palabras/practice.ts');
 assert.equal(wordBank.length,60);assert.equal(new Set(wordBank.map(c=>c.id)).size,60);assert.equal(new Set(wordBank.map(c=>c.word)).size,60);
 for(const topic of wordTopics)assert.equal(wordBank.filter(c=>c.topic===topic.id).length,10);
 assert.deepEqual(plain(Object.fromEntries(['sustantivo','verbo','adjetivo','chunk'].map(k=>[k,wordBank.filter(c=>c.kind===k).length]))),{sustantivo:20,verbo:12,adjetivo:7,chunk:21});
 assert.deepEqual(Object.keys(lexicalPractice).map(Number),plain(wordBank.map(c=>c.id)));
 for(const card of wordBank){const p=lexicalPractice[card.id];assert.equal(completedGap(card),expected[card.id-1],`card ${card.id}`);assert.ok(p.combination.length>5);assert.ok(p.hint.length>5);assert.ok(['neutral','regional','contextual'].includes(p.register));assert.equal((card.gap.match(/___/g)||[]).length,1);assert.ok(!p.answer.includes('/'));assert.ok(!completedGap(card).includes('___'));}
});
test('topic, kind, search and saved filters intersect; no fallback introduces unrelated targets',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');const {filterCards,selectedPool}=await load('app/banco-de-palabras/state.ts');
 const filters={topic:'estudio',kind:'chunk',query:'EXAMEN',savedOnly:true};
 const visible=filterCards(wordBank,filters,[56,57,1]);assert.deepEqual(plain(visible.map(c=>c.id)),[56]);assert.deepEqual(plain(selectedPool(visible,[1,56,56,999]).map(c=>c.id)),[56]);
 assert.equal(filterCards(wordBank,{...filters,query:'no existe'},[56]).length,0);assert.equal(selectedPool([], [1]).length,0);
});
test('whole-bank recall queue returns every target in a later contextual pass and repeats supported items after other work',async()=>{
 const {initialRecall,recallAction}=await load('app/banco-de-palabras/state.ts');
 for(let size=0;size<=60;size++){
 const ids=Array.from({length:size},(_,i)=>i+1);let s=initialRecall(ids);const encountered=[];
 while(s.cursor<s.queue.length){const step=s.queue[s.cursor];if(step.phase==='interlude'){s=recallAction(s,{type:'interlude'});continue;}encountered.push(step);s=recallAction(s,{type:'assess',outcome:'independent'});}
 assert.equal(encountered.length,size*2);for(const id of ids)assert.deepEqual(encountered.filter(x=>x.id===id).map(x=>x.phase),['recall','context']);
 for(let i=1;i<initialRecall(ids).queue.length;i++){const a=initialRecall(ids).queue[i-1],b=initialRecall(ids).queue[i];if(a.id&&b.id)assert.notEqual(a.id,b.id);}
 }
 let s=initialRecall([1,2,3]);s=recallAction(s,{type:'reveal'});s=recallAction(s,{type:'retry'});assert.equal(s.revealed,false);assert.equal(s.assisted,true);s=recallAction(s,{type:'assess',outcome:'independent'});assert.equal(s.records[0].outcome,'supported');assert.equal(s.queue.at(-1).id,1);
 const singleton=recallAction(initialRecall([1]),{type:'assess',outcome:'supported'});assert.equal(singleton.queue[singleton.cursor].phase,'interlude');
});
test('matching uses Spanish definitions unless support requested; all small pools and resets remain valid',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');const {matchRound,initialMatch,matchAction}=await load('app/banco-de-palabras/state.ts');
 for(const size of [0,1,2,3,5,8,60]){const cards=wordBank.slice(0,size);const round=matchRound(cards,0);assert.equal(round.length,Math.min(size,5)*2);let s=initialMatch();for(const card of cards.slice(0,5)){const tiles=round.filter(t=>t.id===card.id);assert.equal(tiles[1].side,'meaning');s=matchAction(s,tiles[0],round);s=matchAction(s,tiles[1],round);}assert.equal(s.matched.length,Math.min(size,5));}
});
test('saved card storage validates version and IDs, handles corruption and unavailable storage',async()=>{
 const {readSaved,writeSaved}=await load('app/banco-de-palabras/state.ts');let value=null;const storage={getItem:()=>value,setItem:(_key,v)=>{value=v;}};
 assert.deepEqual(plain(readSaved(storage).ids),[]);assert.equal(writeSaved(storage,[1,60,999,1]),true);assert.deepEqual(plain(readSaved(storage).ids),[1,60]);value='{broken';assert.equal(readSaved(storage).status,'invalid');value=JSON.stringify({version:2,ids:[1]});assert.equal(readSaved(storage).status,'invalid');assert.equal(writeSaved({setItem(){throw Error('denied');}},[1]),false);assert.equal(readSaved({getItem(){throw Error('denied');}}).status,'unavailable');
});

async function harness(exportName='default',props={},storage={getItem:()=>null,setItem(){}}){
 const states=[],effects=[];let cursor=0;const timers=new Map();let nextTimer=0;
 const runtime={...React,useState(initial){const at=cursor++;if(!(at in states))states[at]=typeof initial==='function'?initial():initial;return[states[at],value=>{states[at]=typeof value==='function'?value(states[at]):value;}];},useEffect(effect,deps){const at=cursor++;const old=effects[at];if(!old||deps.some((x,i)=>x!==old.deps[i])){old?.cleanup?.();effects[at]={deps,pending:effect};}}};
 const { [exportName]:Component }=await load('app/banco-de-palabras/WordBank.tsx',runtime,{window:{localStorage:storage,setTimeout(fn){timers.set(++nextTimer,fn);return nextTimer;},clearTimeout(id){timers.delete(id);}}});
 let currentProps=props;
 const render=()=>{cursor=0;const tree=Component(currentProps);for(const effect of effects){if(effect?.pending){effect.cleanup=effect.pending();delete effect.pending;}}return tree;};
 const button=label=>find(render(),n=>n.type==='button'&&(text(n)===label||n.props['aria-label']===label))[0];
 const click=label=>{const b=button(label);assert.ok(b,`button ${label}`);assert.ok(!b.props.disabled,`enabled ${label}`);b.props.onClick();};
 render();await Promise.resolve();
 return{render,button,click,states,timers,props(next){currentProps={...currentProps,...next};render();},text:()=>text(render()),tick(){const pending=[...timers.values()];timers.clear();pending.forEach(fn=>fn());},unmount(){effects.forEach(effect=>effect?.cleanup?.());}};
}

test('real exploration handlers apply the exact filtered selection, preserve snapshot until reapplied, and persist saved IDs',async()=>{
 let stored=null;const h=await harness('default',{}, {getItem:()=>stored,setItem:(_key,v)=>{stored=v;}});
 h.click('⌂Casa10 tarjetas');
 const select=find(h.render(),n=>n.type==='select')[0];select.props.onChange({target:{value:'chunk'}});
 h.click('Guardar hacer la cama en Mi banco');assert.deepEqual(JSON.parse(stored).ids,[4]);h.click('★ Mi banco 1');
 h.click('Seleccionar hasta 6 visibles');h.click('Practicar estas tarjetas (1)');
 let session=find(h.render(),n=>typeof n.type==='function'&&n.props.cards)[0];assert.deepEqual(plain(session.props.cards.map(c=>c.id)),[4]);assert.equal(session.props.mode,'parejas');assert.match(h.text(),/usa una expresión sin mirar/);assert.match(h.text(),/Guarda esa expresión en Mi banco/);
 h.click('01ExplorarDescubre y selecciona');const input=find(h.render(),n=>n.type==='input'&&n.props.placeholder)[0];input.props.onChange({target:{value:'zzzz'}});assert.match(h.text(),/0 tarjetas visibles/);assert.ok(h.button('Practicar estas tarjetas (0)').props.disabled);
 session=find(h.render(),n=>typeof n.type==='function'&&n.props.cards)[0];assert.deepEqual(plain(session.props.cards.map(c=>c.id)),[4],'filter edit must not silently replace active session');
 h.click('Quitar todos los filtros');assert.match(h.text(),/60 tarjetas visibles/);
 const checkbox=find(h.render(),n=>n.type==='input'&&n.props.type==='checkbox')[0];checkbox.props.onChange();h.click('Practicar estas tarjetas (1)');session=find(h.render(),n=>typeof n.type==='function'&&n.props.cards)[0];assert.deepEqual(plain(session.props.cards.map(c=>c.id)),[1]);
});

test('real matching handlers hide English, allow wrong-pair retry and reset without outstanding timers',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');const cards=wordBank.slice(0,3);const h=await harness('PracticeSession',{cards,mode:'parejas',supportVisible:false});
 for(const c of cards){assert.ok(h.text().includes(c.definition));assert.ok(!h.text().includes(c.translation));}
 const tile=(id,side)=>find(h.render(),n=>n.type==='button'&&n.props['data-word-id']===id&&n.props.className.startsWith(side))[0];
 tile(1,'word').props.onClick();tile(2,'meaning').props.onClick();assert.match(h.text(),/no corresponden/);
 tile(1,'word').props.onClick();tile(1,'meaning').props.onClick();assert.match(h.text(),/1 \/ 3 pares/);assert.equal(tile(1,'word').props.disabled,true);
 h.props({supportVisible:true});assert.match(h.text(),/power outlet/);h.props({supportVisible:false});assert.doesNotMatch(h.text(),/power outlet/);
 h.click('Reiniciar estos pares');assert.match(h.text(),/0 \/ 3 pares/);assert.equal(h.timers.size,0);
 for(const c of cards){tile(c.id,'word').props.onClick();tile(c.id,'meaning').props.onClick();}assert.match(h.text(),/Grupo conectado/);
});

test('real retrieval handlers keep answers closed, retain assistance across retry and later re-present supported targets',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');const cards=wordBank.slice(0,3);const h=await harness('PracticeSession',{cards,mode:'quiz',supportVisible:true});
 assert.ok(!h.text().includes(cards[0].word));assert.ok(!h.text().includes(cards[0].translation));h.click('Pedir una pista');h.click('Ver un modelo');assert.ok(h.text().includes(cards[0].word));h.click('Ocultar y ensayar otra vez');assert.ok(!h.text().includes(cards[0].word));h.click('Salió con apoyo; volverá después');assert.ok(h.text().includes(cards[1].definition));assert.match(h.text(),/1 con apoyo/);
 h.click('La recuperó sin apoyo');h.click('La recuperó sin apoyo');assert.ok(h.text().includes(cards[0].gap));assert.ok(!h.text().includes(cards[0].word));
 h.click('La recuperó sin apoyo');h.click('La recuperó sin apoyo');h.click('La recuperó sin apoyo');assert.ok(h.text().includes(cards[0].definition));h.click('La recuperó sin apoyo');assert.match(h.text(),/Terminaste esta recuperación/);
 h.click('Reiniciar recuperación');assert.match(h.text(),/0 respuestas observadas/);assert.ok(!h.text().includes(cards[0].word));
});

test('singleton recall explicitly intervenes with a spoken task; empty practice has no invented target',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');const h=await harness('PracticeSession',{cards:[wordBank[55]],mode:'quiz',supportVisible:false});h.click('La recuperó sin apoyo');assert.match(h.text(),/OTRA TAREA ANTES DE VOLVER/);assert.ok(!h.text().includes(wordBank[55].word));h.click('Ya hicimos el intercambio');assert.ok(h.text().includes(wordBank[55].gap));h.click('La recuperó sin apoyo');assert.match(h.text(),/con la expresión de la selección/);assert.doesNotMatch(h.text(),/dos o tres expresiones/);
 const empty=await harness('PracticeSession',{cards:[],mode:'quiz',supportVisible:false});assert.equal(empty.render(),null);
});

test('oral closure hides targets, requires real teacher observations, resets evidence, and cancels timers on mode/unmount',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');const h=await harness('PracticeSession',{cards:wordBank.slice(0,3),mode:'hablar',supportVisible:false});
 assert.ok(!h.text().includes(wordBank[0].word));h.click('Mostrar apoyo para hablar');assert.ok(h.text().includes(wordBank[0].word));h.click('Ocultar expresiones');assert.ok(!h.text().includes(wordBank[0].word));
 assert.equal(h.button('Registrar cierre observado').props.disabled,true);for(const check of find(h.render(),n=>n.type==='input'&&n.props.type==='checkbox'))check.props.onChange({target:{checked:true}});h.click('Registrar cierre observado');assert.match(h.text(),/Cierre observado por el profesor/);
 h.click('Empezar reloj');h.render();assert.equal(h.timers.size,1);h.tick();assert.match(h.text(),/00:59/);h.props({mode:'quiz'});assert.equal(h.timers.size,0);h.props({mode:'hablar'});assert.equal(h.timers.size,0);
 h.click('Otra combinación de la selección ↻');assert.equal(h.button('Registrar cierre observado').props.disabled,true);assert.doesNotMatch(h.text(),/Cierre observado por el profesor/);assert.match(h.text(),/01:00/);
 h.click('Empezar reloj');h.render();assert.equal(h.timers.size,1);h.unmount();assert.equal(h.timers.size,0);
});

test('SSR renders accessible selection and preserved lesson identity without hydration randomness',async()=>{
 const {default:WordBank}=await load('app/banco-de-palabras/WordBank.tsx');const {renderToString}=require('react-dom/server');const a=renderToString(React.createElement(WordBank)),b=renderToString(React.createElement(WordBank));assert.equal(a,b);assert.match(a,/El Banco/);assert.match(a,/A2–B1/);assert.match(a,/word-bank-studio-v91.webp/);assert.match(a,/Buscar palabra, significado o ejemplo<\/span>/);assert.match(a,/aria-pressed="false"/);assert.match(a,/href="\/"/);
});

test('mixed-topic oral selection chooses a coherent topic and never demands unavailable targets',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');const cards=[wordBank[0],wordBank[24],wordBank[25],wordBank[55]];const h=await harness('PracticeSession',{cards,mode:'hablar',supportVisible:false});
 const ids=()=>find(h.render(),n=>n.type==='article'&&n.props['data-word-id']).map(n=>n.props['data-word-id']);assert.deepEqual(ids(),[1]);assert.match(h.text(),/Usa la expresión seleccionada/);
 find(h.render(),n=>n.type==='select')[0].props.onChange({target:{value:'comida'}});assert.deepEqual(ids(),[25,26]);assert.match(h.text(),/restaurante/);assert.match(h.text(),/Usa dos de estas expresiones/);
 for(const check of find(h.render(),n=>n.type==='input'&&n.props.type==='checkbox'))check.props.onChange({target:{checked:true}});h.click('Registrar cierre observado');
 find(h.render(),n=>n.type==='select')[0].props.onChange({target:{value:'estudio'}});assert.deepEqual(ids(),[56]);assert.equal(h.button('Registrar cierre observado').props.disabled,true);
});

test('all 60 actual contextual prompts reveal reviewed models and safely retry with retained support',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');const {initialRecall}=await load('app/banco-de-palabras/state.ts');const h=await harness('PracticeSession',{cards:wordBank,mode:'quiz',supportVisible:false});
 for(let i=0;i<60;i++)h.click('La recuperó sin apoyo');
 for(const card of wordBank){assert.ok(h.text().includes(card.gap),card.id);h.click('Ver un modelo');assert.ok(h.text().includes(expected[card.id-1]),`model ${card.id}`);assert.ok(!h.text().includes(card.translation),`hidden English ${card.id}`);h.click('Ocultar y ensayar otra vez');assert.ok(!h.text().includes(expected[card.id-1]),`retry hides ${card.id}`);h.click('Salió con apoyo; volverá después');}
 assert.match(h.text(),/60 con apoyo/);assert.ok(h.text().includes(wordBank[0].gap));h.click('Reiniciar recuperación');assert.equal(h.states[0].queue.length,initialRecall(wordBank.map(c=>c.id)).queue.length);
});

test('matching rounds visit the entire selected bank and exact small-pool denominators',async()=>{
 const {wordBank}=await load('app/banco-de-palabras/data.ts');
 for(const size of [1,2,3,6,8,60]){const h=await harness('PracticeSession',{cards:wordBank.slice(0,size),mode:'parejas',supportVisible:false});const visited=new Set();for(let round=0;round<Math.ceil(size/5);round++){const words=find(h.render(),n=>n.type==='button'&&n.props.className?.startsWith('word'));assert.equal(words.length,Math.min(5,size-round*5));for(const tile of words)visited.add(tile.props['data-word-id']);assert.ok(h.text().includes(`0 / ${words.length} pares`));h.click('Siguiente grupo de la selección');}assert.equal(visited.size,size);assert.match(h.text(),/Ronda 1\./);}
});


test('original 60-card bank is byte-preserved except the exact reviewed ID40 gap marker',()=>{
 const source=readFileSync('app/banco-de-palabras/data.ts','utf8');
 assert.equal((source.match(/El vuelo sale por ___ número doce\./g)||[]).length,1);
 const normalized=source.replace('El vuelo sale por ___ número doce.','El vuelo sale por __ número doce.');
 assert.equal(createHash('sha256').update(normalized).digest('hex'),'24e265194918d4f7697b8f2d39d55804f1fe46736dc05a0405b1022687527334');
});

test('a search containing the answer is not carried into the practice heading',async()=>{
 const h=await harness();find(h.render(),n=>n.type==='input'&&n.props.placeholder)[0].props.onChange({target:{value:'el enchufe'}});h.click('Seleccionar hasta 6 visibles');h.click('Practicar estas tarjetas (1)');h.click('03Reto exprésRecuerda y vuelve a usar');assert.doesNotMatch(h.text(),/el enchufe/i);assert.match(h.text(),/búsqueda aplicada/);
});
