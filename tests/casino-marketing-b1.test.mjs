import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import React, {act} from 'react';
import {createRoot} from 'react-dom/client';
import {JSDOM} from 'jsdom';
import {readFileSync} from 'node:fs';
import {FLOORS, SCENES, SCENE_IDS, SPAWN, ELEVATOR, ELEVATOR_ARRIVAL, solidsFor, spotAt, atElevator} from '../app/marketing-de-casinos/layout.mjs';
import {LEVELS, CONTENT} from '../app/marketing-de-casinos/levels.mjs';
import {MONEY, createState, openScene, choose, undo, closeScene, sceneView, progress, setLevel, setMoney, resetLevel, serialise, restore, doneFor} from '../app/marketing-de-casinos/engine.mjs';

// El Gran Meridiano (ID 237): a 3D casino in Las Vegas, A1–C2, whose C1 level
// keeps the original casino-marketing lesson.

const require=createRequire(import.meta.url);

test('one A1–C2 Modo Play lesson keeps ID 237 and its route',async()=>{
  const result=await build({stdin:{contents:'export {lessons} from "./app/lesson-catalog"; export {lessonAtPath,isFreeLesson} from "./app/access-policy";',resolveDir:process.cwd()},bundle:true,write:false,format:'cjs',platform:'node'});
  const product={exports:{}};
  new Function('require','module','exports',result.outputFiles[0].text)(require,product,product.exports);
  const {lessons,lessonAtPath,isFreeLesson}=product.exports;
  const entry=lessons.filter(item=>item.id===237);
  assert.equal(entry.length,1);
  assert.deepEqual([entry[0].path,entry[0].displayLevel,entry[0].conversationMode,entry[0].image],['/marketing-de-casinos','A1–C2','play','/marketing-de-casinos/cover.webp']);
  assert.deepEqual(entry[0].levels,['A1','A2','B1','B2','C1','C2']);
  assert.equal(lessonAtPath('/marketing-de-casinos',lessons)?.id,237);
  assert.equal(isFreeLesson(237),false);
});

test('three floors, thirty scenes, and every level writes every scene for every purse',()=>{
  assert.deepEqual(FLOORS.map(f=>f.id),[1,2,3]);
  assert.equal(SCENES.length,30);
  assert.equal(new Set(SCENE_IDS).size,30);
  for(const id of ['borracho','jackpot','tramposo','perdedor','despedida','pelea','gritona','habano','yate','senador'])assert.ok(SCENE_IDS.includes(id),id);
  assert.deepEqual(MONEY.map(m=>m.id),['nada','100','500','1000','10000','100000','1000000']);
  for(const f of FLOORS)assert.ok(SCENES.filter(s=>s.floor===f.id).length>=6,`floor ${f.id} has at least six scenes`);
  assert.deepEqual(LEVELS.map(l=>l.id),['A1','A2','B1','B2','C1','C2']);
  assert.match(LEVELS.find(l=>l.id==='C1').label,/Marketing/);
  for(const level of LEVELS){
    const content=CONTENT[level.id];
    assert.deepEqual(Object.keys(content).sort(),[...SCENE_IDS].sort(),`${level.id} covers all scenes`);
    for(const id of SCENE_IDS){
      const s=content[id];
      for(const key of ['title','line','line2','end'])assert.ok(s[key]?.trim(),`${level.id}/${id}.${key}`);
      for(const m of MONEY)assert.ok(s.money?.[m.id]?.trim(),`${level.id}/${id} opens with ${m.id}`);
      assert.equal(new Set(MONEY.map(m=>s.money[m.id])).size,MONEY.length,`${level.id}/${id} has seven different openings`);
      for(const options of [s.options,s.options2]){
        assert.equal(options.length,3,`${level.id}/${id} has three options`);
        for(const o of options)assert.ok(o.say.trim()&&o.reply.trim());
      }
      assert.equal(s.talk.length,5,`${level.id}/${id} has five conversation questions`);
      assert.equal(s.words.length,4);
    }
  }
  // The levels are written separately, not copied.
  const firstLines=LEVELS.map(l=>CONTENT[l.id].portero.line);
  assert.equal(new Set(firstLines).size,LEVELS.length);
});

test('every white circle and the elevator are free and reachable on foot',()=>{
  const R=0.35,S=0.25;
  for(const f of FLOORS){
    const boxes=solidsFor(f.id),b=f.bounds;
    const free=(x,z)=>x>b.minX+R&&x<b.maxX-R&&z>b.minZ+R&&z<b.maxZ-R&&!boxes.some(o=>x>o.x0-R&&x<o.x1+R&&z>o.z0-R&&z<o.z1+R);
    const start=f.id===1?SPAWN:ELEVATOR_ARRIVAL;
    assert.ok(free(start.x,start.z),`floor ${f.id} start is free`);
    const key=(i,j)=>`${i},${j}`,seen=new Set([key(Math.round(start.x/S),Math.round(start.z/S))]),queue=[[Math.round(start.x/S),Math.round(start.z/S)]];
    while(queue.length){const [i,j]=queue.pop();for(const [di,dj] of [[1,0],[-1,0],[0,1],[0,-1]]){const ni=i+di,nj=j+dj,k=key(ni,nj);if(seen.has(k)||!free(ni*S,nj*S))continue;seen.add(k);queue.push([ni,nj]);}}
    const reach=(x,z)=>seen.has(key(Math.round(x/S),Math.round(z/S)));
    for(const s of SCENES.filter(s=>s.floor===f.id)){
      assert.ok(free(s.spot.x,s.spot.z),`${s.id} circle is free`);
      assert.ok(reach(s.spot.x,s.spot.z),`${s.id} circle is reachable`);
      assert.equal(spotAt(f.id,s.spot.x,s.spot.z),s.id);
    }
    assert.ok(reach(ELEVATOR.x,ELEVATOR.z),`floor ${f.id} elevator is reachable`);
    assert.ok(atElevator(ELEVATOR.x,ELEVATOR.z));
  }
});

test('a scene asks one choice, then another, then opens the conversation',()=>{
  let state=openScene(createState('A2'),'ruleta');
  let view=sceneView(state);
  assert.equal(view.beats.length,1);
  assert.equal(view.ended,false);
  state=choose(state,1);
  view=sceneView(state);
  assert.equal(view.beats[0].pick,1);
  assert.equal(view.beats.length,2);
  state=undo(state);
  assert.equal(sceneView(state).beats[0].pick,undefined);
  state=choose(choose(state,2),0);
  view=sceneView(state);
  assert.equal(view.ended,true);
  assert.equal(view.end,CONTENT.A2.ruleta.end);
  assert.equal(view.talk.length,5);
  assert.deepEqual(doneFor(state),['ruleta']);
  assert.deepEqual(progress(state),{done:1,total:30});
  state=closeScene(state);
  assert.equal(sceneView(state),null);
  // Progress is kept per level and survives a reload.
  const other=setLevel(state,'C1');
  assert.deepEqual(doneFor(other),[]);
  assert.deepEqual(doneFor(restore(serialise(state))),['ruleta']);
  assert.deepEqual(doneFor(resetLevel(state)),[]);
  assert.equal(restore('not json').level,'B1');
});

test('the money Valentina carries changes how each scene opens, and is kept',()=>{
  let state=openScene(createState('B1'),'dados');
  assert.equal(state.money,'500');
  assert.equal(sceneView(state).beats[0].line,CONTENT.B1.dados.money['500']);
  state=setMoney(state,'1000000');
  assert.equal(sceneView(state).beats[0].line,CONTENT.B1.dados.money['1000000']);
  assert.equal(setMoney(state,'7').money,'1000000');
  assert.equal(restore(serialise(setMoney(state,'nada'))).money,'nada');
  assert.equal(restore(JSON.stringify({money:'lots'})).money,'500');
});

test('every 3D game jumps with Space and has a nitro on N',()=>{
  const casino=readFileSync('app/marketing-de-casinos/World3D.tsx','utf8');
  assert.match(casino,/input\.nitro/);
  assert.match(casino,/vy = 7\.2/);
  assert.match(casino,/Saltar/);
  assert.match(readFileSync('app/el-reino-de-la-rosa-dormida/World3D.tsx','utf8'),/'KeyN'/);
  assert.match(readFileSync('app/el-reino-de-la-rosa-dormida/ReinoGame.tsx','utf8'),/<kbd>N<\/kbd> Nitro/);
  assert.match(readFileSync('app/noche-abierta/World3D.tsx','utf8'),/'N · NITRO'/);
});

test('without WebGL the same scenes open from a list',async()=>{
  const compiled=await build({
    entryPoints:['app/marketing-de-casinos/page.tsx'],bundle:true,write:false,
    format:'cjs',platform:'node',packages:'external',loader:{'.css':'empty'},
    plugins:[{name:'no-3d',setup(builder){
      builder.onResolve({filter:/^next\/dynamic$/},()=>({path:'dynamic',namespace:'casino-test'}));
      builder.onLoad({filter:/.*/,namespace:'casino-test'},()=>({contents:'export default function dynamic() { return function World() { return null; }; }',loader:'js'}));
    }}],
  });
  const pageModule={exports:{}};
  new Function('require','module','exports',compiled.outputFiles[0].text)(require,pageModule,pageModule.exports);
  const Page=pageModule.exports.default;
  const dom=new JSDOM('<!doctype html><div id="root"></div>',{url:'https://spanishcue.com/marketing-de-casinos?nivel=A1'});
  const previous={window:globalThis.window,document:globalThis.document,navigator:globalThis.navigator};
  globalThis.window=dom.window;globalThis.document=dom.window.document;
  Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
  globalThis.IS_REACT_ACT_ENVIRONMENT=true;
  const root=createRoot(dom.window.document.getElementById('root'));
  const doc=dom.window.document;
  const click=element=>{assert.ok(element,'expected an interactive control');act(()=>element.click());};
  try{
    act(()=>root.render(React.createElement(Page)));
    await act(async()=>{await new Promise(r=>dom.window.setTimeout(r,20));});
    assert.match(doc.querySelector('h1').textContent,/El Gran Meridiano/);
    assert.equal(doc.querySelector('.gm-levels [aria-checked="true"] b').textContent,'A1');
    click(doc.querySelector('.gm-enter'));
    const scenes=doc.querySelectorAll('.gm-list-floor li button');
    assert.equal(scenes.length,30);
    click(scenes[0]);
    assert.equal(doc.querySelector('.gm-card').dataset.scene,'portero');
    assert.equal(doc.querySelectorAll('.gm-options button').length,3);
    click(doc.querySelector('.gm-options button'));
    click(doc.querySelectorAll('.gm-options button')[2]);
    assert.equal(doc.querySelector('.gm-card').dataset.ended,'true');
    assert.equal(doc.querySelectorAll('.gm-talk li').length,5);
    assert.match(doc.querySelector('.gm-said .gm-chosen').textContent,new RegExp(CONTENT.A1.portero.options[0].say.slice(0,12)));
  }finally{
    act(()=>root.unmount());dom.window.close();
    globalThis.window=previous.window;globalThis.document=previous.document;
    Object.defineProperty(globalThis,'navigator',{value:previous.navigator,configurable:true});
    delete globalThis.IS_REACT_ACT_ENVIRONMENT;
  }
});
