import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { webcrypto } from 'node:crypto';
import test from 'node:test';
import { build } from 'esbuild';
const require=createRequire(import.meta.url), React=require('react');
async function load(path,extra='',mock=React){
 const source=await readFile(path,'utf8');
 const result=await build({stdin:{contents:source+'\n'+extra,resolveDir:process.cwd()+'/'+path.slice(0,path.lastIndexOf('/')),loader:'tsx'},jsx:'automatic',bundle:true,write:false,format:'cjs',platform:'node',external:['react','react-dom','next/*'],loader:{'.css':'empty'}});
 const m={exports:{}};runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`,{console,URL,URLSearchParams,process,window:{scrollTo(){},requestAnimationFrame:cb=>{cb();return 1;},crypto:webcrypto},navigator:{}})(name=>name==='react'?mock:require(name),m,m.exports);return m.exports;
}
const [{boardForLevel},{b1Board},{b2Board},{islandRoundsForLevel,islandLanguage},{rounds},{monasteryRoomsForLevel,monasteryClosing},monastery]=await Promise.all([
 load('app/boards/level-data.ts'),load('app/boards/b1-data.ts'),load('app/boards/b2-data.ts'),load('app/la-isla-vota/level-data.ts'),load('app/la-isla-vota/data.ts'),load('app/monasterio-de-las-ideas/level-data.ts'),load('app/monasterio-de-las-ideas/page.tsx','export {originalRooms};')
]);
const levels=['A0','A1','A2','B1','B2','C1','C2'];
test('authored board, island and monastery levels remain the original data objects',()=>{
 assert.equal(boardForLevel(b1Board,'B1'),b1Board);assert.equal(boardForLevel(b2Board,'B2'),b2Board);assert.equal(islandRoundsForLevel(rounds,'B1'),rounds);assert.equal(monasteryRoomsForLevel(monastery.originalRooms,'C2'),monastery.originalRooms);
});
test('both board concepts have distinct native questions, usable sessions and closings at every level',async()=>{
 const {createSession,advanceSession}=await load('app/boards/engine.ts');
 for(const bank of [b1Board,b2Board]){
  const seen=new Set();
  for(const level of levels){const variant=boardForLevel(bank,level);assert.equal(variant.level,level);assert.equal(variant.categories.length,6);for(const category of variant.categories)assert.ok(variant.questions.filter(q=>q.category===category).length>=4,`${bank.id}/${level}/${category}`);assert.equal(new Set(variant.questions.map(q=>q.id)).size,variant.questions.length);seen.add(variant.questions[0].prompt);assert.ok(variant.finals.length>=2);
   let session=createSession(variant,[variant.categories[0]]);assert.ok(variant.questions.some(q=>q.id===session.currentId));for(let i=0;i<variant.questions.length;i++)session=advanceSession(session);assert.equal(session.exhausted,true);
   if(level==='A0')for(const q of variant.questions){for(const text of [q.prompt,...q.followUps,q.conditionChange,q.support])assert.ok(text.includes(' / '),text);assert.match(q.support,/Yo = I; tú = you/);assert.match(q.support,/verbo del modelo/);}
  }
  assert.equal(seen.size,7);
 }
 assert.notEqual(boardForLevel(b1Board,'A0').questions[0].prompt,boardForLevel(b2Board,'A0').questions[0].prompt);
});
test('island language changes without breaking vote IDs, metric deltas or special allocations',()=>{
 const seen=new Set();for(const level of levels){const variant=islandRoundsForLevel(rounds,level);assert.equal(variant.length,8);seen.add(variant[0].questions[0]);variant.forEach((round,i)=>{assert.equal(round.id,rounds[i].id);assert.equal(round.special,rounds[i].special);assert.deepEqual(Array.from(round.options,o=>o.id),Array.from(rounds[i].options,o=>o.id));round.options.forEach((option,j)=>assert.deepEqual(option.delta,rounds[i].options[j].delta));assert.ok(round.questions.length>=3);if(level==='A0'){for(const text of [round.title,round.situation,round.motion,...round.questions,...round.lexicon,round.pressure.copy,...round.pressure.questions,...round.options.flatMap(o=>[o.name,o.summary,o.tradeoff]),...round.roles.flatMap(r=>[r.name,r.brief])])assert.ok(text.includes(' / '),text);}});assert.ok(islandLanguage(level).closing.length);}
 assert.equal(seen.size,7);
});
test('monastery preserves all twelve scenes, coordinates and moving objects while changing oral work',()=>{
 const seen=new Set();for(const level of levels){const rooms=monasteryRoomsForLevel(monastery.originalRooms,level);assert.equal(rooms.length,12);seen.add(rooms[0].questions[0]);rooms.forEach((room,i)=>{assert.equal(room.scene,monastery.originalRooms[i].scene);assert.equal(room.x,monastery.originalRooms[i].x);assert.equal(room.questions.length,3);assert.equal(room.artifacts.length,3);assert.equal(room.artifacts[0].motion,monastery.originalRooms[i].artifacts[0].motion);if(level==='A0')for(const text of [room.name,room.subtitle,room.thesis,room.cast,...room.questions,...room.moves,...room.lexicon,...room.artifacts.flatMap(a=>[a.name,a.detail])])assert.ok(text.includes(' / '),text);});assert.ok(monasteryClosing(level));}assert.equal(seen.size,7);
});
function harness(){let state=[],slot=0;const mock={...React,useState:initial=>{const i=slot++;if(!(i in state))state[i]=typeof initial==='function'?initial():initial;return [state[i],value=>{state[i]=typeof value==='function'?value(state[i]):value}];},useMemo:fn=>fn(),useCallback:fn=>fn,useEffect(){},useRef:()=>({current:null})};return{mock,reset:()=>{state=[];slot=0;},render:fn=>{slot=0;return fn();},set:(i,value)=>{state[i]=value;}};}
const find=(tree,predicate)=>!tree||typeof tree!=='object'?[]:Array.isArray(tree)?tree.flatMap(n=>find(n,predicate)):[...(predicate(tree)?[tree]:[]),...find(tree.props?.children,predicate)];
const text=tree=>typeof tree==='string'||typeof tree==='number'?String(tree):Array.isArray(tree)?tree.map(text).join(''):tree?.props?text(tree.props.children):'';
test('native controls actually advance board, island and monastery content at A0/A1/B1/C2',async()=>{
 const h=harness();const board=await load('app/boards/BoardLesson.tsx','export {BoardSessionView};',h.mock);const island=await load('app/la-isla-vota/page.tsx','export {IslandSession};',h.mock);const monasteryUI=await load('app/monasterio-de-las-ideas/page.tsx','export {MonasterySession};',h.mock);
 for(const level of ['A0','A1','B1','C2']){
  h.reset();h.set(2,true);let tree=h.render(()=>board.BoardSessionView({bank:boardForLevel(b1Board,level)}));find(tree,n=>n.props?.className?.includes('board-category-option'))[0].props.onClick();tree=h.render(()=>board.BoardSessionView({bank:boardForLevel(b1Board,level)}));find(tree,n=>n.type==='button'&&text(n).includes('Empezar con esta categoría'))[0].props.onClick();tree=h.render(()=>board.BoardSessionView({bank:boardForLevel(b1Board,level)}));assert.ok(boardForLevel(b1Board,level).questions.some(q=>text(find(tree,n=>n.props?.id==='board-question')[0])===q.prompt));find(tree,n=>n.type==='button'&&text(n).includes('Profundizar'))[0].props.onClick();tree=h.render(()=>board.BoardSessionView({bank:boardForLevel(b1Board,level)}));assert.equal(find(tree,n=>n.props?.className==='board-depth').length,1);const firstBoardPrompt=text(find(tree,n=>n.props?.id==='board-question')[0]);find(tree,n=>n.type==='button'&&text(n).includes('Otra pregunta'))[0].props.onClick();tree=h.render(()=>board.BoardSessionView({bank:boardForLevel(b1Board,level)}));assert.notEqual(text(find(tree,n=>n.props?.id==='board-question')[0]),firstBoardPrompt);find(tree,n=>n.type==='button'&&text(n).includes('← Anterior'))[0].props.onClick();tree=h.render(()=>board.BoardSessionView({bank:boardForLevel(b1Board,level)}));assert.equal(text(find(tree,n=>n.props?.id==='board-question')[0]),firstBoardPrompt);
  h.reset();h.set(0,'session');tree=h.render(()=>island.IslandSession({level}));const initial=text(find(tree,n=>n.props?.className==='round-header')[0]);find(tree,n=>n.props?.className==='policy-grid')[0].props.children[0].props.onClick();tree=h.render(()=>island.IslandSession({level}));assert.ok(text(tree).includes('ACUERDO REGISTRADO'));find(tree,n=>n.type==='button'&&text(n).includes('Siguiente votación'))[0].props.onClick();tree=h.render(()=>island.IslandSession({level}));assert.notEqual(text(find(tree,n=>n.props?.className==='round-header')[0]),initial);
  h.reset();tree=h.render(()=>monasteryUI.MonasterySession({level}));find(tree,n=>n.props?.className?.startsWith('room-hotspot'))[0].props.onClick();h.set(1,'room');tree=h.render(()=>monasteryUI.MonasterySession({level}));const prompt=text(find(tree,n=>n.props?.className==='main-question world-main-question')[0]);find(tree,n=>n.type==='button'&&text(n).includes('Siguiente pregunta'))[0].props.onClick();tree=h.render(()=>monasteryUI.MonasterySession({level}));assert.notEqual(text(find(tree,n=>n.props?.className==='main-question world-main-question')[0]),prompt);assert.ok(find(tree,n=>n.props?.className==='room-scene-image')[0].props.src.includes('01-claustro'));
 }
});
