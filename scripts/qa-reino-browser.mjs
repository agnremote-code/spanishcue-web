// Isolated QA of the real component, world, styles, local GLBs and physics.
// Test-only steering/observation is injected into the temporary bundle. No
// production hooks, auth changes, reducer shortcuts or position teleports.
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdir,readFile,writeFile,cp} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {build} from 'esbuild';
import {CAMPAIGN} from '../app/el-reino-de-la-rosa-dormida/engine.mjs';
const repo=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const out=process.env.REINO_QA_OUTPUT||'/tmp/reino-browser-qa';
await mkdir(out,{recursive:true});
await build({stdin:{contents:`import React from 'react';import{createRoot}from'react-dom/client';import ReinoGame from './app/el-reino-de-la-rosa-dormida/ReinoGame';createRoot(document.getElementById('root')).render(<ReinoGame/>);`,resolveDir:repo,loader:'tsx'},bundle:true,format:'esm',splitting:true,outdir:resolve(out,'assets'),entryNames:'lesson',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},plugins:[{name:'isolated-preview',setup(b){
 b.onResolve({filter:/^next\/link$/},()=>({path:'link',namespace:'preview'}));
 b.onLoad({filter:/.*/,namespace:'preview'},()=>({contents:'export default function Link({children,...props}){return <a {...props}>{children}</a>}',loader:'jsx',resolveDir:repo}));
 b.onLoad({filter:/el-reino-de-la-rosa-dormida\/World3D\.tsx$/},async({path})=>{
  let source=await readFile(path,'utf8');
  source=source.replace('const render = (now: number) => {','const render = (_frame: number) => { const now=performance.now();');
  source=source.replace('Math.min((now - previous) / 1000, .05)','Math.min((now - previous) / 1000, .1)');
  source=source.replace('const keys = inputFrom(held);',`const keys = inputFrom(held); const qa=window.__realmQA; if(qa?.route?.length){const a=qa.route[0];if(Math.hypot(a.x-player.x,a.z-player.z)<(qa.route.length>1?.75:.3))qa.route.shift();} const aim=qa?.route?.[0]; const steering=aim?{x:0,y:qa.route.length>1?1:Math.min(1,Math.hypot(aim.x-player.x,aim.z-player.z)/1.5),yaw:Math.atan2(aim.x-player.x,aim.z-player.z),sprint:true}:{};`);
  source=source.replace('jump: keys.jump || clock < jumpUntil, yaw }','jump: keys.jump || clock < jumpUntil, yaw, ...steering }');
  source=source.replace('renderer.render(scene, camera);',`window.__realmQA??={};const qa=window.__realmQA;qa.floorAt=world.floorAt;qa.snapshot=()=>({player:{...player},state:live.current.state,paused:live.current.paused,shot:shot?.kind,nearestNpc,nearestItem,nearestSpell,npcs:world.npcPositions,items:world.itemPositions,targets:SPELL_TARGETS,colliders:world.colliders,camera:camera.position.toArray(),heroHead:new THREE.Vector3(player.x,player.y+2,player.z).project(camera).toArray(),heroFeet:new THREE.Vector3(player.x,player.y,player.z).project(camera).toArray(),draws:renderer.info.render.calls,triangles:renderer.info.render.triangles,dragonLoaded:!!scene.getObjectByName('Quaternius rigged dragon')});qa.stop=()=>{qa.route=[];clear();};if(!qa.lastRender||now-qa.lastRender>200){renderer.render(scene,camera);qa.lastRender=now;}`);
  return{contents:source,loader:'tsx',resolveDir:dirname(path)};
 });
}}]});
await writeFile(resolve(out,'index.html'),'<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Valdoria QA</title><style>body{margin:0}</style><link rel="stylesheet" href="/assets/lesson.css"><div id="root"></div><script type="module" src="/assets/lesson.js"></script></html>');
await cp(resolve(repo,'public/reino'),resolve(out,'reino'),{recursive:true});
const server=createServer(async(req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname,file=path==='/'?'index.html':path.slice(1);if(file.includes('..')){res.writeHead(400).end();return;}const type=file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.glb')?'model/gltf-binary':file.endsWith('.webp')?'image/webp':'text/html';res.setHeader('Content-Type',type);res.end(await readFile(resolve(out,file)));}catch{res.writeHead(404).end();}});
await new Promise(done=>server.listen(0,'127.0.0.1',done));
const origin=`http://127.0.0.1:${server.address().port}`;
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const results=[],errors=[];let browser;
const snapshot=page=>page.evaluate(()=>window.__realmQA.snapshot());
async function layout(page,label){
 const report=await page.evaluate(()=>{
  const selectors=['.rr-controls-brief','.rr-hud-top','.rr-objective','.rr-minimap','.rr-hud-bottom','.rrw-prompt','.rrw-joystick','.rrw-touch-actions','.rr-dialogue','.rr-modal'];
  const rects=selectors.map(selector=>{const e=document.querySelector(selector);if(!e||!e.getClientRects().length||getComputedStyle(e).display==='none')return null;const r=e.getBoundingClientRect();return{selector,x:r.x,y:r.y,right:r.right,bottom:r.bottom,clipped:e.scrollWidth>e.clientWidth+2};}).filter(Boolean);
  const vis=s=>{const e=document.querySelector(s);return e&&e.getClientRects().length&&getComputedStyle(e).display!=='none'?e.getBoundingClientRect():null;};const a=vis('.rr-controls-brief'),b=vis('.rrw-joystick');const overlap=!!(a&&b&&a.left<b.right&&b.left<a.right&&a.top<b.bottom&&b.top<a.bottom);return{overlap,width:innerWidth,height:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth+1,rects};
 });
 assert.equal(report.overflow,false,`${label}: horizontal overflow`);assert.equal(report.overlap,false,`${label}: keyboard hint overlaps joystick`);
 for(const r of report.rects){assert.ok(r.x>=-1&&r.y>=-1&&r.right<=report.width+1&&r.bottom<=report.height+1,`${label}: ${r.selector} outside viewport ${JSON.stringify(r)}`);assert.equal(r.clipped,false,`${label}: ${r.selector} clips content`);}
 return report;
}
async function travel(page,id,kind='npc',range){
 for(let attempt=0;attempt<3;attempt++){
  await travelOnce(page,id,kind,range);
  const near=await page.evaluate(({id,kind,range})=>{const s=window.__realmQA.snapshot(),t=(kind==='item'?s.items:kind==='spell'?s.targets:s.npcs)[id];return Math.hypot(t.x-s.player.x,t.z-s.player.z)<(range??(kind==='item'?2:kind==='spell'?6.5:3))+.6;},{id,kind,range});
  if(near)return;
  console.log(`retrying route to ${id}`);await page.waitForTimeout(1500);
 }
 throw Error(`Could not reach ${id}`);
}
async function travelOnce(page,id,kind='npc',range){
 await page.evaluate(({id,kind,range})=>{
  const q=window.__realmQA,s=q.snapshot(),target=(kind==='item'?s.items:kind==='spell'?s.targets:s.npcs)[id];if(!target)throw Error('Unknown target '+id);
  const radius=.43,flags=s.state.flags,floor=q.floorAt,key=p=>p.x+','+p.z;
  const clear=(x,z)=>{const y=floor(x,z);return !s.colliders.some(b=>!(b.gate&&flags[b.gate])&&y+1.7>(b.minY??-Infinity)+.02&&y<(b.maxY??Infinity)-.03&&x>b.minX-radius&&x<b.maxX+radius&&z>b.minZ-radius&&z<b.maxZ+radius);};
  const start={x:Math.round(s.player.x),z:Math.round(s.player.z)},queue=[start],parent=new Map([[key(start),null]]);let last;
  const r=range??(kind==='item'?2:kind==='spell'?6.5:3);
  for(let i=0;i<queue.length;i++){
   const p=queue[i],y=floor(p.x,p.z);if(Math.hypot(p.x-target.x,p.z-target.z)<r&&Math.abs(y-target.y)<2.4){last=p;break;}
   for(const [dx,dz] of [[0,-1],[1,0],[0,1],[-1,0]]){const n={x:p.x+dx,z:p.z+dz};if(n.x<-40||n.x>40||n.z<-137||n.z>32||parent.has(key(n))||!clear(n.x,n.z)||!clear(p.x+dx/2,p.z+dz/2)||Math.abs(floor(n.x,n.z)-y)>.55)continue;parent.set(key(n),p);queue.push(n);}
  }
  if(!last)throw Error('No route to '+id+' from '+JSON.stringify(s.player));
  const path=[];for(let p=last;p;p=parent.get(key(p)))path.unshift(p);
  // Keep corners and final point. Steering follows normal acceleration/turning.
  q.route=path.filter((p,i)=>i===0||i===path.length-1||(p.x-path[i-1].x)!==(path[i+1].x-p.x)||(p.z-path[i-1].z)!==(path[i+1].z-p.z));
 },{id,kind,range});
 await page.locator('.rrw-canvas canvas').focus();
 const deadline=Date.now()+180000;
 while(Date.now()<deadline){
  const s=await snapshot(page);if(s.shot){const skip=page.getByRole('button',{name:/Omitir escena/});if(await skip.isVisible())await skip.click();}
  if(await page.evaluate(()=>!window.__realmQA.route?.length))break;
  await page.waitForTimeout(200);
 }
 assert.equal(await page.evaluate(()=>window.__realmQA.route?.length??0),0,`travel stalled at ${id}: ${JSON.stringify((await snapshot(page)).player)}`);
 await page.evaluate(()=>window.__realmQA.stop());await page.waitForTimeout(220);
 console.log(JSON.stringify({stage:id,player:(await snapshot(page)).player}));
}
const PROFILES_KEY='spanishcue:reino-rosa:perfiles:v2';
const CAST_FLAGS={'ventaria:mill':'millRepaired','lumaria:grove':'forestLit','floralis:thorns':'gardenOpen','aurora:dragon':'dragonShield','lumaria:altar':'ritualLight','floralis:altar':'ritualGrowth','aurora:altar':'ritualDawn'};
const talkKey=s=>JSON.stringify([s.state.dialogue,s.state.places,s.state.deep,s.state.talking]);
/** Presses «Continuar conversación» and waits for the reducer to move. */
async function next(page){const before=talkKey(await snapshot(page));await page.locator('.rr-continue').click();await page.waitForFunction(b=>{const s=window.__realmQA.snapshot();return JSON.stringify([s.state.dialogue,s.state.places,s.state.deep,s.state.talking])!==b;},before);}
/** A full encounter with teacher controls only: no keywords, no typing needed. */
async function talk(page,id,{teacher=false,label=''}={}){
 if((await snapshot(page)).state.talking?.id!==id){await travel(page,id);await page.locator('.rrw-canvas canvas').focus();await page.keyboard.press('e');}
 await page.locator('.rr-dialogue').waitFor();
 assert.ok(!(await page.locator('.rr-turn-locked').count()),`${id} dialogue unexpectedly locked`);
 let usedTeacher=!teacher;
 for(let turn=0;turn<20&&(await snapshot(page)).state.talking?.id===id;turn++){
  if(!usedTeacher&&await page.locator('#rr-answer').isVisible()){
   usedTeacher=true;
   await page.getByRole('button',{name:'Pista',exact:true}).click();await page.locator('.rr-language-hint').waitFor();
   await page.getByRole('button',{name:'Pista de misión',exact:true}).click();await page.locator('.rr-mission-hint').waitFor();
   assert.ok((await page.locator('.rr-mission-hint strong').innerText()).length>10,'mission hint names the objective');
   await page.locator('#rr-answer').fill('Me gusta viajar en tren porque puedo mirar el paisaje.');
   await page.screenshot({path:resolve(out,`${label}dialogue-teacher.png`)});await layout(page,`${label}dialogue with hints`);
   await next(page);assert.match(await page.locator('.rr-student-bubble').innerText(),/viajar en tren/);
   await page.getByRole('button',{name:'Profundizar',exact:true}).click();await page.locator('.rr-turn-deep').waitFor();
   await page.screenshot({path:resolve(out,`${label}dialogue-deepen.png`)});
   await next(page);assert.ok(!(await page.locator('.rr-turn-deep').count()),'back to the main conversation');
   continue;
  }
  await next(page);
 }
 const s=await snapshot(page);assert.equal(s.state.talking,null,`${id} conversation closed`);
}
async function playFrom(page,label){
 for(const step of CAMPAIGN){
  const s=(await snapshot(page)).state,[kind,id,target]=step;
  if(kind==='collect'&&s.inventory.includes(id))continue;
  if(kind==='cast'&&s.flags[CAST_FLAGS[`${id}:${target}`]])continue;
  if(kind==='talk'){if(s.dialogue[id]>=TALKED[id]&&s.talking?.id!==id)continue;await talk(page,id);}
  else if(kind==='collect')await collect(page,id);
  else await cast(page,target,id,CAST_FLAGS[`${id}:${target}`]);
 }
 await page.getByRole('heading',{name:'Valdoria despierta.'}).waitFor();
 await page.screenshot({path:resolve(out,`${label}victory.png`)});
 assert.equal((await snapshot(page)).state.completed.length,8);
}
async function collect(page,id){await travel(page,id,'item');await page.locator('.rrw-canvas canvas').focus();await page.keyboard.press('f');await page.waitForFunction(id=>window.__realmQA.snapshot().state.inventory.includes(id),id);}
async function cast(page,id,spell,flag){await travel(page,id,'spell',id==='dragon'?7.2:6);await page.getByRole('button',{name:new RegExp(`^${spell}: seleccionar$`,'i')}).click();await page.locator('.rrw-canvas canvas').focus();for(let attempt=0;attempt<20&&!(await snapshot(page)).state.flags[flag];attempt++){await page.keyboard.press('r');await page.waitForFunction(flag=>window.__realmQA.snapshot().state.flags[flag],flag,{timeout:2500}).catch(()=>{});}assert.ok((await snapshot(page)).state.flags[flag],`${spell} did not set ${flag}`);await page.waitForTimeout(800);}
const store=page=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)||'null'),PROFILES_KEY);
async function ready(page){await page.waitForFunction(()=>window.__realmQA?.snapshot,{timeout:60000});await page.waitForTimeout(600);}
async function toTitle(page){await page.reload();await ready(page);}
async function newStudent(page,name,level){
 await page.getByRole('button',{name:/^Nueva aventura/}).click();await page.getByPlaceholder('Por ejemplo: Daniel').fill(name);
 await page.getByRole('group',{name:'Nivel del alumno'}).getByRole('button',{name:level,exact:true}).click();
 await page.getByRole('button',{name:/Comenzar desde el principio/}).click();
 await page.getByRole('button',{name:/Omitir introducción/}).click();await page.getByRole('button',{name:'Volver al reino'}).click();await page.waitForTimeout(900);
}
async function startAt(page,who,pointId,{name,level}={}){
 await page.getByRole('button',{name:/Seleccionar capítulo o punto de partida/}).click();
 const select=page.getByLabel('¿Para quién?');
 if(who==='new'){await select.selectOption('new');await page.getByPlaceholder('Nombre del alumno').first().fill(name);await page.getByRole('group',{name:'Nivel',exact:true}).getByRole('button',{name:level,exact:true}).click();}
 else await select.selectOption({label:new RegExp(`^${who} ·`)}).catch(async()=>{const value=await select.locator('option',{hasText:who}).getAttribute('value');await select.selectOption(value);});
 await page.locator(`[data-point="${pointId}"]`).click();
 const confirm=page.getByRole('button',{name:'Empezar aquí'});if(await confirm.isVisible().catch(()=>false))await confirm.click();
 await page.waitForTimeout(900);
}
const TALKED={};
try{
 const {CONVERSATIONS}=await import('../app/el-reino-de-la-rosa-dormida/conversations.mjs');
 for(const [id,conv] of Object.entries(CONVERSATIONS))TALKED[id]=conv.flow.indexOf('reveal')+1;
 const sizes=process.env.REINO_QA_SIZES?.split(',')??['desktop','mobile','small','landscape'];
 for(const size of sizes){
  const [width,height]=size==='mobile'?[390,844]:size==='small'?[320,700]:size==='landscape'?[844,390]:[1440,900];
  const label=`${size}-`;
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE_PATH?{executablePath:process.env.CHROMIUM_EXECUTABLE_PATH}:{}),args:JSON.parse(process.env.CHROMIUM_ARGS||'[]')});
  const context=await browser.newContext({viewport:{width,height},hasTouch:size!=='desktop',isMobile:size!=='desktop'}),page=await context.newPage();page.setDefaultTimeout(45000);
  page.on('pageerror',error=>errors.push(`${size}: ${error.message}`));
  await page.goto(origin+'/');await ready(page);
  await page.screenshot({path:resolve(out,`${label}title-empty.png`)});
  // 1. A new student from the beginning.
  await newStudent(page,'Daniel','A1');await layout(page,`${size}: entrance`);await page.screenshot({path:resolve(out,`${label}entrance.png`)});
  await page.locator('.rr-objective').click();await page.locator('.rr-guide').waitFor();await page.locator('.rr-objective').click();
  if(size==='desktop'){
   const start=(await snapshot(page)).player;await page.locator('.rrw-canvas canvas').focus();await page.keyboard.down('w');await page.waitForFunction(p=>{const a=window.__realmQA.snapshot().player;return Math.hypot(p.x-a.x,p.z-a.z)>.5;},start);await page.keyboard.up('w');await page.keyboard.down('Space');await page.waitForFunction(()=>window.__realmQA.snapshot().player.y>.15);await page.keyboard.up('Space');await page.waitForFunction(()=>window.__realmQA.snapshot().player.y===0);console.log(`${size}: keyboard movement and jump passed`);
  }
  for(const name of ['Diario de misiones','Abrir inventario','Mapa del reino']){await page.getByRole('button',{name,exact:true}).click();await layout(page,`${size}: ${name}`);await page.screenshot({path:resolve(out,`${label}${name.split(' ')[0].toLowerCase()}.png`)});await page.getByRole('button',{name:'Cerrar panel',exact:true}).click();}
  const music=page.getByRole('button',{name:/^(Silenciar|Activar) música$/});if(await music.isVisible()){const before=await music.getAttribute('aria-label');await music.click();assert.notEqual(await music.getAttribute('aria-label'),before,'music toggles');await music.click();}
  // 2. A conversation with teacher controls, interrupted and resumed after a reload.
  await travel(page,'nox');await page.locator('.rrw-canvas canvas').focus();await page.keyboard.press('e');await page.locator('.rr-dialogue').waitFor();
  await next(page);await next(page);await next(page);
  const mid=(await snapshot(page)).state;assert.equal(mid.talking?.id,'nox');
  const line=await page.getByTestId('rr-npc-line').innerText();
  await toTitle(page);await page.screenshot({path:resolve(out,`${label}title-profile.png`)});
  await page.getByRole('button',{name:/^Continuar aventura/}).click();await page.locator('.rr-dialogue').waitFor();
  assert.equal(await page.getByTestId('rr-npc-line').innerText(),line,'resumes at the exact question');
  assert.deepEqual((await snapshot(page)).state.dialogue,mid.dialogue);
  await page.screenshot({path:resolve(out,`${label}resumed-conversation.png`)});console.log(`${size}: interrupted conversation resumed`);
  await talk(page,'nox',{teacher:true,label});
  if(size==='desktop'){
   // 3. Complete campaign from the beginning, then reload.
   if(!process.env.REINO_QA_SKIP_FULL){
   await playFrom(page,`${label}daniel-`);
   await toTitle(page);await page.getByRole('button',{name:/^Continuar aventura/}).click();await page.waitForFunction(()=>window.__realmQA.snapshot().state.completed.length===8,{timeout:60000});console.log(`${size}: Daniel's victory persisted`);
    await toTitle(page);assert.ok(!(await page.locator('.rr-victory').count()),'the title screen is not covered by an old victory');
   }
   // 4. Start points: chapters 4, 6 and 8 for three more students, reload, finish.
   for(const [name,level,point] of [['Sofía','B2','c4-puente'],['Kenji','C1','c6-castillo'],['Lucía','A0','c8-tejedora']]){
    await toTitle(page);await startAt(page,'new',point,{name,level});
    const s=(await snapshot(page)).state;assert.equal(s.level,level);
    await page.screenshot({path:resolve(out,`${label}start-${point}.png`)});
    await toTitle(page);await page.getByRole('button',{name:/^Continuar aventura/}).click();await page.waitForTimeout(900);
    assert.deepEqual((await snapshot(page)).state.completed,s.completed,`${name} reload keeps ${point}`);
    await playFrom(page,`${label}${point}-`);console.log(`${size}: ${name} finished from ${point}`);
   }
   // 5. Mis alumnos: independent saves, reset and delete only one.
   await toTitle(page);await page.getByRole('button',{name:/Mis alumnos/}).click();
   assert.equal(await page.locator('.rr-student-row').count(),4);
   await page.waitForTimeout(450);await page.screenshot({path:resolve(out,`${label}mis-alumnos.png`)});await layout(page,`${size}: students`);
   const before=await store(page);
   await page.locator('[data-profile="Sofía"]').getByRole('button',{name:'Reiniciar'}).click();await page.getByRole('button',{name:'Reiniciar este perfil'}).click();
   const reset=await store(page);
   for(const profile of before.profiles){const after=reset.profiles.find(p=>p.id===profile.id);if(profile.name==='Sofía')assert.equal(after.save.completed.length,0);else assert.deepEqual(after.save,profile.save,`${profile.name} untouched by reset`);}
   await page.locator('[data-profile="Lucía"]').getByRole('button',{name:'Eliminar'}).click();await page.getByRole('button',{name:'Eliminar perfil'}).click();
   const removed=await store(page);assert.deepEqual(removed.profiles.map(p=>p.name).sort(),['Daniel','Kenji','Sofía']);
   for(const profile of removed.profiles)assert.deepEqual(profile.save,reset.profiles.find(p=>p.id===profile.id).save);
   console.log(`${size}: reset and delete isolated`);
  }else{
   // Smaller screens: start panel, students table and a start point that opens a conversation.
   await toTitle(page);await page.getByRole('button',{name:/Seleccionar capítulo o punto de partida/}).click();await page.waitForTimeout(450);await page.screenshot({path:resolve(out,`${label}start-panel.png`)});await layout(page,`${size}: start panel`);await page.getByRole('button',{name:'Cerrar panel',exact:true}).click();
   await page.getByRole('button',{name:/Mis alumnos/}).click();await page.waitForTimeout(450);await page.screenshot({path:resolve(out,`${label}mis-alumnos.png`)});await layout(page,`${size}: students`);await page.getByRole('button',{name:'Cerrar panel',exact:true}).click();
   await startAt(page,'new','c8-tejedora',{name:'Ana',level:'A0'});
   await page.locator('.rr-dialogue').waitFor();await page.screenshot({path:resolve(out,`${label}a0-dialogue.png`)});await layout(page,`${size}: A0 dialogue`);
   assert.ok(await page.locator('.rr-options button').count()||await page.locator('.rr-english').count(),'A0 support');
   await playFrom(page,`${label}ana-`);
  }
  results.push({size,passed:true});await browser.close();
 }
 assert.deepEqual(errors,[]);
}finally{await writeFile(resolve(out,'results.json'),JSON.stringify({results,errors},null,2));await browser?.close();server.close();console.log(`Evidence: ${out}`);}
