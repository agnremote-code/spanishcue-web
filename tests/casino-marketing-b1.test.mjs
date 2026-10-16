import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import React, {act} from 'react';
import {createRoot} from 'react-dom/client';
import {JSDOM} from 'jsdom';
import {readFileSync} from 'node:fs';
import {FLOORS, SCENES, SCENE_IDS, SPAWN, ELEVATOR, ELEVATOR_ARRIVAL, solidsFor, peopleAt, spotAt, atElevator, circleStep} from '../app/marketing-de-casinos/layout.mjs';
import {stepPlayer} from '../app/noche-abierta/world3d.mjs';
import {PERSON_RADIUS} from '../app/escucha-3d/bump.mjs';
import {LEVELS, CONTENT} from '../app/marketing-de-casinos/levels.mjs';
import {MONEY, createState, openScene, choose, undo, closeScene, sceneView, progress, setLevel, setMoney, resetLevel, serialise, restore, doneFor} from '../app/marketing-de-casinos/engine.mjs';

// El Gran Meridiano (ID 237): a 3D casino in Las Vegas, A0–C2, whose C1 level
// keeps the original casino-marketing lesson. A0 is fully bilingual ({ es, en }).

const require=createRequire(import.meta.url);
const plain=t=>typeof t==='string'?t:t.es;
const isPair=t=>t&&typeof t==='object'&&typeof t.es==='string'&&t.es.trim()!==''&&typeof t.en==='string'&&t.en.trim()!=='';

test('one A0–C2 Modo Play lesson keeps ID 237 and its route',async()=>{
  const result=await build({stdin:{contents:'export {lessons} from "./app/lesson-catalog"; export {lessonAtPath,isFreeLesson} from "./app/access-policy";',resolveDir:process.cwd()},bundle:true,write:false,format:'cjs',platform:'node'});
  const product={exports:{}};
  new Function('require','module','exports',result.outputFiles[0].text)(require,product,product.exports);
  const {lessons,lessonAtPath,isFreeLesson}=product.exports;
  const entry=lessons.filter(item=>item.id===237);
  assert.equal(entry.length,1);
  assert.deepEqual([entry[0].path,entry[0].displayLevel,entry[0].conversationMode,entry[0].image],['/marketing-de-casinos','A0–C2','play','/marketing-de-casinos/cover.webp']);
  assert.deepEqual(entry[0].levels,['A0','A1','A2','B1','B2','C1','C2']);
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
  assert.deepEqual(LEVELS.map(l=>l.id),['A0','A1','A2','B1','B2','C1','C2','MARKETING']);
  assert.equal(LEVELS.find(l=>l.id==='C1').story,'La ficha dorada');
  assert.equal(LEVELS.find(l=>l.id==='MARKETING').label,'Marketing');
  for(const level of LEVELS){
    const content=CONTENT[level.id];
    assert.deepEqual(Object.keys(content).sort(),[...SCENE_IDS].sort(),`${level.id} covers all scenes`);
    for(const id of SCENE_IDS){
      const s=content[id];
      for(const key of ['title','line','end'])assert.ok(plain(s[key])?.trim(),`${level.id}/${id}.${key}`);
      if(level.track){
        assert.equal(s.options2,undefined,`${level.id}/${id} asks one choice`);
      }else{
        assert.ok(plain(s.line2)?.trim(),`${level.id}/${id}.line2`);
        // A0 has no money openings: every purse falls back to the plain line.
        if(level.id==='A0'){
          assert.equal(s.money,undefined,`A0/${id} has no money openings`);
        }else{
          for(const m of MONEY)assert.ok(s.money?.[m.id]?.trim(),`${level.id}/${id} opens with ${m.id}`);
          assert.equal(new Set(MONEY.map(m=>s.money[m.id])).size,MONEY.length,`${level.id}/${id} has seven different openings`);
        }
      }
      for(const options of level.track?[s.options]:[s.options,s.options2]){
        assert.equal(options.length,3,`${level.id}/${id} has three options`);
        for(const o of options)assert.ok(plain(o.say).trim()&&plain(o.reply).trim());
      }
      assert.equal(s.talk.length,5,`${level.id}/${id} has five conversation questions`);
      // A0 may also ask «Di un/una …» (say a …).
      for(const q of s.talk)assert.match(plain(q).trim(),level.id==='A0'?/\?$|^Di /:/\?$/,`${level.id}/${id} talk is a question`);
      if(['A0','A1'].includes(level.id)){
        assert.ok(s.words.length>=4&&s.words.length<=6,`${level.id}/${id} has four to six keywords`);
        for(const w of s.words)assert.ok(isPair(w),`${level.id}/${id} keyword ${plain(w)} is { es, en }`);
      }else{
        assert.equal(s.words.length,4);
      }
    }
  }
  // The levels are written separately, not copied.
  const firstLines=LEVELS.map(l=>plain(CONTENT[l.id].portero.line));
  assert.equal(new Set(firstLines).size,LEVELS.length);
});

test('A0 covers all thirty scenes and every learner string is { es, en }',()=>{
  const a0=CONTENT.A0;
  assert.deepEqual(Object.keys(a0).sort(),[...SCENE_IDS].sort());
  assert.equal(LEVELS[0].id,'A0');
  for(const id of SCENE_IDS){
    const s=a0[id];
    const strings=[s.title,s.line,s.line2,s.end,...s.talk,...s.words,...[...s.options,...s.options2].flatMap(o=>[o.say,o.reply])];
    for(const t of strings)assert.ok(isPair(t),`A0/${id}: ${JSON.stringify(t)} is bilingual`);
    // Very short sentences: at most about eight words each.
    for(const t of [s.title,...s.talk,...[...s.options,...s.options2].map(o=>o.say)])for(const sentence of t.es.split(/(?<=[.!?…])\s+/))assert.ok(sentence.split(/\s+/).length<=8,`A0/${id}: «${sentence}» is short`);
  }
  // The scene opens with its line whatever Valentina carries, and the card shows both languages.
  const view=sceneView(openScene(setMoney(createState('A0'),'1000000'),'ruleta'));
  assert.deepEqual(view.beats[0].line,a0.ruleta.line);
  assert.ok(isPair(view.title)&&isPair(view.words[0]));
});

test('A1 keywords are { es, en } pairs, four to six per scene',()=>{
  for(const id of SCENE_IDS){
    const words=CONTENT.A1[id].words;
    assert.ok(words.length>=4&&words.length<=6,id);
    for(const w of words)assert.ok(isPair(w),`A1/${id}: ${JSON.stringify(w)}`);
  }
});

test('every white circle and the elevator are free and reachable on foot, with everyone standing where they stand',()=>{
  const R=0.35,S=0.25;
  for(const f of FLOORS){
    const boxes=solidsFor(f.id),b=f.bounds,people=peopleAt(f.id).filter(p=>p.y<0.5);
    const free=(x,z)=>x>b.minX+R&&x<b.maxX-R&&z>b.minZ+R&&z<b.maxZ-R&&!boxes.some(o=>x>o.x0-R&&x<o.x1+R&&z>o.z0-R&&z<o.z1+R)&&!people.some(p=>Math.hypot(x-p.x,z-p.z)<PERSON_RADIUS);
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

test('closing a conversation does not reopen it while Valentina stands in the circle',()=>{
  let c={inside:null,still:0,spent:null},opened=[];
  const frame=(here,scene,speed=0)=>{c=circleStep(c,here,scene,speed,0.1);if(c.open)opened.push(c.open);};
  for(let i=0;i<6;i++)frame('blackjack',null);
  assert.deepEqual(opened,['blackjack']);
  for(let i=0;i<20;i++)frame('blackjack','blackjack');
  for(let i=0;i<30;i++)frame('blackjack',null);
  assert.deepEqual(opened,['blackjack'],'standing still after closing keeps it closed');
  frame(null,null,4);
  for(let i=0;i<6;i++)frame('blackjack',null);
  assert.deepEqual(opened,['blackjack','blackjack'],'walking out and back in opens it again');
  // A scene opened from the list puts her in its circle: closing it is just as calm.
  for(let i=0;i<3;i++)frame('dados','dados');
  for(let i=0;i<30;i++)frame('dados',null);
  assert.deepEqual(opened,['blackjack','blackjack']);
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

test('Marketing is its own section: one choice, then the conversation',()=>{
  let state=openScene(createState('marketing'),'ruleta');
  assert.equal(state.level,'MARKETING');
  assert.equal(sceneView(state).beats.length,1);
  state=choose(state,2);
  const view=sceneView(state);
  assert.equal(view.beats.length,1);
  assert.equal(view.ended,true);
  assert.equal(view.end,CONTENT.MARKETING.ruleta.end);
  assert.equal(choose(state,0),state,'no second choice');
  assert.deepEqual(doneFor(state),['ruleta']);
  assert.deepEqual(doneFor(state,'C1'),[]);
  // C1 is back in the story, with two choices like the other levels.
  state=openScene(setLevel(state,'C1'),'ruleta');
  assert.equal(sceneView(choose(state,0)).ended,false);
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
  assert.match(casino,/jumpSpeed: 7\.6/);
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
    // A1 keywords show the English next to the Spanish.
    assert.equal(doc.querySelectorAll('.gm-words li .gm-en').length,CONTENT.A1.portero.words.length);
    // A0: no money and no listening switch on the title screen; the card reads in Spanish with English under it.
    click(doc.querySelector('.gm-close'));
    click([...doc.querySelectorAll('.gm-hud button')].find(b=>/Nivel/.test(b.textContent)));
    click([...doc.querySelectorAll('.gm-levels button')].find(b=>b.querySelector('b')?.textContent==='A0'));
    assert.equal(doc.querySelector('.gm-money'),null,'A0 asks no money');
    assert.equal(doc.querySelector('.e3-mode'),null,'A0 has no listening switch');
    click(doc.querySelector('.gm-enter'));
    click(doc.querySelectorAll('.gm-list-floor li button')[0]);
    assert.equal(doc.querySelector('#gm-card-h').textContent,CONTENT.A0.portero.title.es+CONTENT.A0.portero.title.en);
    assert.equal(doc.querySelector('.gm-line .gm-en').textContent,CONTENT.A0.portero.line.en);
    assert.equal(doc.querySelectorAll('.gm-options .gm-en').length,3);
  }finally{
    act(()=>root.unmount());dom.window.close();
    globalThis.window=previous.window;globalThis.document=previous.document;
    Object.defineProperty(globalThis,'navigator',{value:previous.navigator,configurable:true});
    delete globalThis.IS_REACT_ACT_ENVIRONMENT;
  }
});

test('Valentina jumps onto low furniture, walks on it and falls off; tall things and walls stay walls',()=>{
  const boxes=solidsFor(1),table=boxes.find(b=>b.top===0.92&&b.x0<-18&&b.x1>-18),slots=boxes.filter(b=>b.top==null);
  assert.ok(table,'the roulette table has a top');
  assert.ok(slots.length>10,'walls and slot banks have no top');
  for(const b of [1,2,3].flatMap(solidsFor)) if(b.top!=null) assert.ok(b.top<=1.25,'nothing climbable is taller than the jump');
  const bounds=FLOORS[0].bounds;
  let p={x:-18,z:-5.4,heading:Math.PI,speed:0,y:0,vy:0,jumpHeld:false};
  for(let i=0;i<20;i++) p=stepPlayer(p,{x:0,y:1,yaw:Math.PI},0.016,boxes,bounds);
  assert.ok(p.z>-9.3&&p.y===0,`the table blocks a walk (${p.z})`);
  let stood=0;
  for(let i=0;i<80;i++){p=stepPlayer(p,{x:0,y:p.z>-7.9?1:0,yaw:Math.PI,jump:i<3,jumpSpeed:7.6},0.016,boxes,bounds);if(p.y===0.92&&p.vy===0)stood++;}
  assert.ok(stood>3,`landed and walked on the table (${stood} frames)`);
  for(let i=0;i<120;i++) p=stepPlayer(p,{x:0,y:1,yaw:Math.PI},0.016,boxes,bounds);
  assert.equal(p.y,0,'walked off the far edge and fell');
});

test('people are solid and yell when Valentina crashes into them, and the mute button silences them',()=>{
  const world=readFileSync('app/marketing-de-casinos/World3D.tsx','utf8'),game=readFileSync('app/marketing-de-casinos/CasinoGame.tsx','utf8'),build=readFileSync('app/marketing-de-casinos/casino3d.ts','utf8');
  for(const re of [/pushOut\(player\.x, player\.z, bodies, free\)/,/createBumpClock\(\)/,/insultFor\(who\.body, who\.seed\)/,/shout\(line/,/setMood\(who\.person, 'furious'\)/,/casino\.say\(who/,/player\.speed \*= 0\.3/]) assert.match(world,re);
  assert.match(game,/setShoutMuted\(!sound\)/);
  assert.match(build,/rgba\(200,20,20/);
  for(const f of FLOORS) for(const p of peopleAt(f.id)) for(const s of SCENES.filter(s=>s.floor===f.id)) assert.ok(Math.hypot(p.x-s.spot.x,p.z-s.spot.z)>=PERSON_RADIUS+0.3,`nobody stands in the ${s.id} circle`);
});
