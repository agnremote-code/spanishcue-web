// Isolated QA of the real component, world, styles, local GLBs and physics.
// Test-only steering/observation is injected into the temporary bundle. No
// production hooks, auth changes, reducer shortcuts or position teleports.
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdir,readFile,writeFile,cp} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {build} from 'esbuild';
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
  source=source.replace('const keys = inputFrom(held);',`const keys = inputFrom(held); const qa=window.__realmQA; if(qa?.route?.length){const a=qa.route[0];if(Math.hypot(a.x-player.x,a.z-player.z)<.18)qa.route.shift();} const aim=qa?.route?.[0]; const steering=aim?{x:0,y:Math.min(1,Math.hypot(aim.x-player.x,aim.z-player.z)/.75),yaw:Math.atan2(aim.x-player.x,aim.z-player.z),sprint:true}:{};`);
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
  const selectors=['.rr-hud-top','.rr-objective','.rr-minimap','.rr-hud-bottom','.rrw-prompt','.rrw-joystick','.rrw-touch-actions','.rr-dialogue','.rr-modal'];
  const rects=selectors.map(selector=>{const e=document.querySelector(selector);if(!e||!e.getClientRects().length||getComputedStyle(e).display==='none')return null;const r=e.getBoundingClientRect();return{selector,x:r.x,y:r.y,right:r.right,bottom:r.bottom,clipped:e.scrollWidth>e.clientWidth+2};}).filter(Boolean);
  return{width:innerWidth,height:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth+1,rects};
 });
 assert.equal(report.overflow,false,`${label}: horizontal overflow`);
 for(const r of report.rects){assert.ok(r.x>=-1&&r.y>=-1&&r.right<=report.width+1&&r.bottom<=report.height+1,`${label}: ${r.selector} outside viewport ${JSON.stringify(r)}`);assert.equal(r.clipped,false,`${label}: ${r.selector} clips content`);}
 return report;
}
async function travel(page,id,kind='npc',range){
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
 const deadline=Date.now()+90000;
 while(Date.now()<deadline){
  const s=await snapshot(page);if(s.shot){const skip=page.getByRole('button',{name:/Omitir escena/});if(await skip.isVisible())await skip.click();}
  if(await page.evaluate(()=>!window.__realmQA.route?.length))break;
  await page.waitForTimeout(200);
 }
 assert.equal(await page.evaluate(()=>window.__realmQA.route?.length??0),0,`travel stalled at ${id}: ${JSON.stringify((await snapshot(page)).player)}`);
 await page.evaluate(()=>window.__realmQA.stop());await page.waitForTimeout(220);
 console.log(JSON.stringify({stage:id,player:(await snapshot(page)).player}));
}
async function talk(page,id){
 await travel(page,id);
 await page.locator('.rrw-canvas canvas').focus();await page.keyboard.press('e');await page.locator('.rr-dialogue').waitFor();
 for(let turn=0;turn<3;turn++){
  assert.ok(await page.locator('#rr-answer').isVisible(),`${id} dialogue unexpectedly locked`);
  await page.getByRole('button',{name:'Necesito una pista',exact:true}).click();
  await page.locator('.rr-dialogue-hint button').first().click();await page.getByRole('button',{name:'Responder',exact:true}).click();
  await page.waitForFunction(({id,count})=>window.__realmQA.snapshot().state.dialogue[id]===count,{id,count:turn+1});
 }
 if(id==='nox')await page.screenshot({path:resolve(out,'desktop-dialogue-complete.png')});
 const close=page.getByRole('button',{name:/Continuar explorando/});if(await close.isVisible())await close.click();
}
async function collect(page,id){await travel(page,id,'item');await page.locator('.rrw-canvas canvas').focus();await page.keyboard.press('f');await page.waitForFunction(id=>window.__realmQA.snapshot().state.inventory.includes(id),id);}
async function cast(page,id,spell,flag){await travel(page,id,'spell',id==='dragon'?7.2:6);await page.getByRole('button',{name:new RegExp(`^${spell}: seleccionar$`,'i')}).click();await page.locator('.rrw-canvas canvas').focus();await page.keyboard.press('r');await page.waitForFunction(flag=>window.__realmQA.snapshot().state.flags[flag],flag);await page.waitForTimeout(800);}
try{
 const sizes=process.env.REINO_QA_SIZES?.split(',')??['desktop','mobile'];
 for(const size of sizes){
  const [width,height]=size==='mobile'?[390,844]:size==='small'?[320,700]:size==='landscape'?[844,390]:[1440,900];
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE_PATH?{executablePath:process.env.CHROMIUM_EXECUTABLE_PATH}:{}),args:JSON.parse(process.env.CHROMIUM_ARGS||'[]')});
  const context=await browser.newContext({viewport:{width,height},hasTouch:size!=='desktop',isMobile:size!=='desktop'}),page=await context.newPage();page.setDefaultTimeout(45000);
  page.on('pageerror',error=>errors.push(`${size}: ${error.message}`));
  await page.goto(origin+'/?level=A1');await page.waitForFunction(()=>window.__realmQA?.snapshot,{timeout:60000});await page.waitForTimeout(1000);
  await page.screenshot({path:resolve(out,`${size}-title.png`)});
  await page.getByRole('button',{name:'Comenzar la aventura',exact:true}).click();await page.getByRole('button',{name:/Omitir introducción/}).click();await page.waitForTimeout(1200);
  await page.screenshot({path:resolve(out,`${size}-entrance.png`)});await layout(page,`${size}: entrance`);console.log(`${size}: entrance rendered`);
  if(process.env.REINO_QA_COVER){const style=await page.addStyleTag({content:'.rr-hud-top,.rr-objective,.rr-minimap,.rr-hud-bottom,.rr-controls-brief,.rrw-prompt,.rr-toast,.rrw-mobile-controls{visibility:hidden!important}'});await page.screenshot({path:resolve(out,`${size}-cover.png`)});await style.evaluate(e=>e.remove());}
  if(process.env.REINO_QA_FAST){results.push({size,stage:'entrance',passed:true});await browser.close();continue;}
  const start=(await snapshot(page)).player;await page.locator('.rrw-canvas canvas').focus();await page.keyboard.down('w');await page.waitForFunction(p=>{const a=window.__realmQA.snapshot().player;return Math.hypot(p.x-a.x,p.z-a.z)>.5;},start);await page.keyboard.up('w');await page.keyboard.down('Space');await page.waitForFunction(()=>window.__realmQA.snapshot().player.y>.15);await page.keyboard.up('Space');await page.waitForFunction(()=>window.__realmQA.snapshot().player.y===0);console.log(`${size}: keyboard movement and jump passed`);
  for(const name of ['Diario de misiones','Abrir inventario','Mapa del reino']){await page.getByRole('button',{name,exact:true}).click();await layout(page,`${size}: ${name}`);const before=(await snapshot(page)).player;await page.keyboard.down('w');await page.waitForTimeout(160);await page.keyboard.up('w');const after=(await snapshot(page)).player;assert.ok(Math.hypot(after.x-before.x,after.z-before.z)<.01,`${name}: movement pauses`);await page.screenshot({path:resolve(out,`${size}-${name.split(' ')[0].toLowerCase()}.png`)});await page.getByRole('button',{name:'Cerrar panel',exact:true}).click();}
  await talk(page,'nox');await talk(page,'ines');await talk(page,'bruno');await cast(page,'mill','ventaria','millRepaired');await collect(page,'key');await talk(page,'liora');await cast(page,'grove','lumaria','forestLit');await talk(page,'aldren');await talk(page,'celina');await cast(page,'thorns','floralis','gardenOpen');await collect(page,'rose');
  await travel(page,'baltasar');await page.screenshot({path:resolve(out,`${size}-castle.png`)});await collect(page,'scroll');await talk(page,'baltasar');await talk(page,'teobaldo');await cast(page,'dragon','aurora','dragonShield');await travel(page,'brum');await page.screenshot({path:resolve(out,`${size}-dragon.png`)});await talk(page,'brum');await collect(page,'crystal');await talk(page,'tejedora');await cast(page,'altar','lumaria','ritualLight');await cast(page,'altar','floralis','ritualGrowth');await cast(page,'altar','aurora','ritualDawn');await talk(page,'elara');
  await page.getByRole('heading',{name:'Valdoria despierta.'}).waitFor();await page.screenshot({path:resolve(out,`${size}-victory.png`)});assert.equal((await snapshot(page)).state.completed.length,8);
  results.push({size,stage:'complete-campaign',passed:true});await browser.close();
 }
 assert.deepEqual(errors,[]);
}finally{await writeFile(resolve(out,'results.json'),JSON.stringify({results,errors},null,2));await browser?.close();server.close();console.log(`Evidence: ${out}`);}
