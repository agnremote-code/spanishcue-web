// Isolated browser QA: bundles real forest components, styles, assets and physics.
// No production server, auth cookies, billing or application access policy is involved.
// Instrumentation is injected only into this temporary bundle, never shipped.
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdtemp,mkdir,readFile,writeFile,cp} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {build} from 'esbuild';
import {PLATFORMS,ZONES,spawnPlayer,stepPlayer} from '../app/bosque-de-los-hongos-gigantes/engine.mjs';
// Software GPU: render four real frames per second while physics/input keep their normal RAF cadence.
const repo=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const out=process.env.BOSQUE_QA_OUTPUT||await mkdtemp(resolve(tmpdir(),'bosque-browser-'));
await mkdir(out,{recursive:true});
await build({stdin:{contents:`import React from 'react';import{createRoot}from'react-dom/client';import Bosque from './app/bosque-de-los-hongos-gigantes/BosqueHongos';createRoot(document.getElementById('root')).render(<Bosque/>);`,resolveDir:repo,loader:'tsx'},bundle:true,format:'esm',splitting:true,outdir:resolve(out,'assets'),entryNames:'lesson',jsx:'automatic',external:['/bosque-hongos/*'],define:{'process.env.NODE_ENV':'"production"'},plugins:[{name:'local-preview',setup(b){
 b.onResolve({filter:/^next\/link$/},()=>({path:'link',namespace:'preview'}));
 b.onLoad({filter:/.*/,namespace:'preview'},()=>({contents:'export default function Link({children,...props}){return <a {...props}>{children}</a>}',loader:'jsx',resolveDir:repo}));
 b.onLoad({filter:/bosque-de-los-hongos-gigantes\/World3D\.tsx$/},async({path})=>{
  let source=await readFile(path,'utf8');
  source=source.replace('const ix=(held.has',`if(window.__forestQA?.aim){const a=window.__forestQA.aim;const dx=a.x-player.x,dz=a.z-player.z,d=Math.hypot(dx,dz),amount=Math.min(1,d/.15);joy.x=d?amount*(Math.cos(yaw)*dx-Math.sin(yaw)*dz)/d:0;joy.y=d?amount*(Math.sin(yaw)*dx+Math.cos(yaw)*dz)/d:0;}
        const ix=(held.has`);
  source=source.replace('renderer.render(scene,camera);',`if(!window.__forestQA?.lastRender||time-window.__forestQA.lastRender>250){renderer.render(scene,camera);window.__forestQA??={};window.__forestQA.lastRender=time;}
      window.__forestQA ??= {};
      window.__forestQA.stop=()=>{joy.x=0;joy.y=0;};
      window.__forestQA.snapshot=()=>({player:{...player},camera:camera.position.toArray(),yaw,near:camera.near,zone:currentZone,heroHead:new THREE.Vector3(player.x,player.y+2,player.z).project(camera).toArray(),heroFeet:new THREE.Vector3(player.x,player.y,player.z).project(camera).toArray(),distance:camera.position.distanceTo(look),visible:cameraClearDistance(look,camera.position,forest.solids)>=camera.position.distanceTo(look)-.02});`);
  return{contents:source,loader:'tsx',resolveDir:dirname(path)};
 });
}}]});
await writeFile(resolve(out,'index.html'),'<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bosque QA</title><style>body{margin:0}</style><link rel="stylesheet" href="/assets/lesson.css"><div id="root"></div><script type="module" src="/assets/lesson.js"></script></html>');
await cp(resolve(repo,'public/bosque-hongos'),resolve(out,'bosque-hongos'),{recursive:true});
const server=createServer(async(req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname;const file=path==='/'?'index.html':path.slice(1);if(file.includes('..')){res.writeHead(400).end();return;}res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.webp')?'image/webp':'text/html');res.end(await readFile(resolve(out,file)));}catch{res.writeHead(404).end();}});
await new Promise(done=>server.listen(0,'127.0.0.1',done));
const origin=`http://127.0.0.1:${server.address().port}`;
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const results=[],errors=[];let browser;
const state=page=>page.evaluate(()=>window.__forestQA.snapshot());
async function layout(page,label){
 const report=await page.evaluate(()=>{
  const all=['.bh-top','.bh-levels','.bh-session-bar','.bfg-world-tools','.bfg-world-location','.bfg-world-converse','.bfg-world-minimap','.bfg-world-joystick','.bfg-world-touch-actions'];
  const rects=all.map(selector=>{const e=document.querySelector(selector);if(!e||getComputedStyle(e).display==='none'||!e.getClientRects().length)return null;const r=e.getBoundingClientRect();return {selector,x:r.x,y:r.y,right:r.right,bottom:r.bottom,fits:e.scrollWidth<=e.clientWidth+1};}).filter(Boolean);
  return {width:innerWidth,height:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth+1,rects};
 });
 assert.equal(report.overflow,false,`${label}: horizontal overflow`);
 for(const r of report.rects){assert.ok(r.x>=-1&&r.y>=-1&&r.right<=report.width+1&&r.bottom<=report.height+1,`${label}: ${r.selector} outside viewport ${JSON.stringify(r)}`);assert.ok(r.fits,`${label}: ${r.selector} clipped`);}
 const hud=report.rects.filter(r=>r.selector.startsWith('.bfg-'));
 for(let i=0;i<hud.length;i++)for(let j=i+1;j<hud.length;j++){const a=hud[i],b=hud[j];assert.ok(Math.min(a.right,b.right)-Math.max(a.x,b.x)<=1||Math.min(a.bottom,b.bottom)-Math.max(a.y,b.y)<=1,`${label}: ${a.selector} overlaps ${b.selector}`);}
 const q=await state(page);assert.ok(q.visible,`${label}: camera occlusion`);assert.ok(q.distance>3,`${label}: camera crushed`);
 for(const point of [q.heroHead,q.heroFeet])assert.ok(Math.abs(point[0])<.85&&Math.abs(point[1])<.85,`${label}: hero cropped`);
}
function landing(source,target){
 let p={...spawnPlayer(),...source,platform:source.id||source.platform,checkpoint:{x:source.x,y:source.y,z:source.z}};let air=false;
 for(let i=0;i<240;i++){
  const dx=target.x-p.x,dz=target.z-p.z,d=Math.hypot(dx,dz),a=Math.min(1,d/.15);
  p=stepPlayer(p,{x:d?dx/d*a:0,z:d?dz/d*a:0,jump:i===0,run:true},1/90);
  if(!p.grounded)air=true;if(p.respawns)return null;
  if(air&&p.grounded)return p.platform;
 }
 return null;
}
function route(source,id){
 const queue=[{...source,id:source.platform}],seen=new Set([source.platform]),parents=new Map();
 for(let i=0;i<queue.length;i++){
  const a=queue[i];if(a.id===id){const steps=[];let cursor=id;while(parents.has(cursor)){const item=parents.get(cursor);steps.unshift(item.target);cursor=item.from;}return steps;}
  for(const b of PLATFORMS){if(b.bounce||seen.has(b.id)||Math.hypot(b.x-a.x,b.z-a.z)>16||b.y-a.y>3)continue;if(landing(a,b)===b.id){seen.add(b.id);parents.set(b.id,{from:a.id,target:b});queue.push(b);}}
 }
 throw Error(`No physical route from ${source.platform} to ${id}`);
}
async function steer(page,target){await page.evaluate(aim=>{window.__forestQA.aim=aim;},target);}
async function stop(page){await page.evaluate(()=>{delete window.__forestQA.aim;window.__forestQA.stop();});await page.keyboard.up('Shift');await page.keyboard.up('w');await page.keyboard.up('s');await page.keyboard.up('Space');await page.locator('.bfg-world-canvas canvas').click({position:{x:5,y:250}});}
async function travel(page,id){
 const steps=route((await state(page)).player,id);console.log({route:steps.map(p=>p.id)});
 for(const step of steps){console.log({jump:step.id});
  await steer(page,{x:step.x,z:step.z});await page.locator('.bfg-world-canvas canvas').focus();await page.keyboard.press('Space');
  await page.waitForFunction(id=>{const p=window.__forestQA.snapshot().player;return p.grounded&&p.platform===id;},step.id,{timeout:20000});
  await page.waitForFunction(p=>{const a=window.__forestQA.snapshot().player;return Math.hypot(a.x-p.x,a.z-p.z)<.2;},step,{timeout:10000});
 }
 await stop(page);await page.waitForTimeout(350);
}

try{
 const sizes=[['desktop',1440,900],['laptop',1366,768],['tablet',768,1024],['mobile',390,844],['small',320,700],['landscape',844,390]];
 for(const [size,width,height] of sizes){
  if(process.env.BOSQUE_QA_FAST&&size!=='desktop')continue;
  if(process.env.BOSQUE_QA_SIZES&&!process.env.BOSQUE_QA_SIZES.split(',').includes(size))continue;
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE_PATH?{executablePath:process.env.CHROMIUM_EXECUTABLE_PATH}:{}),args:JSON.parse(process.env.CHROMIUM_ARGS||'[]')});
  const context=await browser.newContext({viewport:{width,height},hasTouch:width<=768||size==='landscape',isMobile:width<=768||size==='landscape',reducedMotion:'no-preference'});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(`${size}: ${e.message}`));
  if(process.env.BOSQUE_QA_REFUGE||process.env.BOSQUE_QA_FINISH){const z=ZONES.find(z=>z.id===(process.env.BOSQUE_QA_REFUGE||'sobre-ti'));await page.addInitScript(p=>localStorage.setItem('spanishcue:bosque:world:v1',JSON.stringify({version:1,position:p,checkpoint:p})),{x:z.x,y:z.y,z:z.z});}
  await page.goto(`${origin}/?level=B1`);
  await page.getByRole('button',{name:'Entrar en el bosque'}).click();
  await page.waitForFunction(()=>window.__forestQA?.snapshot);
  await page.waitForTimeout(800);
  await page.screenshot({path:resolve(out,`${size}-entrance.png`)});
  console.log(JSON.stringify({size,stage:'entrance',state:await page.evaluate(()=>window.__forestQA.snapshot())}));
  if(process.env.BOSQUE_QA_FINISH){
   await layout(page,`${size}: refuge checkpoint`);
   await page.locator('.bfg-world-converse').click();
   const dialog=page.getByRole('dialog',{name:'Conversación del bosque'});await dialog.waitFor();
   const bounds=await dialog.evaluate(e=>{const r=e.getBoundingClientRect();return {fits:e.scrollWidth<=e.clientWidth+1,x:r.x,y:r.y,right:r.right,bottom:r.bottom};});
   assert.ok(bounds.fits&&bounds.x>=0&&bounds.y>=0&&bounds.right<=width&&bounds.bottom<=height,`${size}: dialogue bounds`);
   const clearLabel=await dialog.evaluate(e=>{const a=e.querySelector('.bh-dialog-close').getBoundingClientRect(),b=e.querySelector('.bh-prompt-label').lastElementChild.getBoundingClientRect();return Math.min(a.right,b.right)<=Math.max(a.left,b.left)||Math.min(a.bottom,b.bottom)<=Math.max(a.top,b.top);});assert.ok(clearLabel,`${size}: close button overlaps level`);
   await page.screenshot({path:resolve(out,`${size}-dialogue.png`)});
   await page.getByRole('button',{name:'Volver al bosque',exact:true}).click();
   assert.doesNotMatch(await page.locator('.bfg-world-converse').innerText(),/Volver/);
   await page.locator('.bfg-world-converse').click();await page.getByRole('button',{name:'Marcar como hablada'}).click();
   await page.waitForFunction(()=>document.querySelector('.bfg-world-location')?.textContent.includes('Destino: Vida real'));
   await layout(page,`${size}: onward destination`);
   await page.screenshot({path:resolve(out,`${size}-next-destination.png`)});
   await steer(page,{x:15,z:-1.8});await page.waitForFunction(()=>Math.abs(window.__forestQA.snapshot().player.z+1.8)<.2);await stop(page);await layout(page,`${size}: close to sign`);
   await page.getByRole('button',{name:'Cambiar distancia de cámara'}).click();
   const canvas=await page.locator('.bfg-world-canvas canvas').boundingBox();
   await page.mouse.move(canvas.x+canvas.width*.5,canvas.y+canvas.height*.5);await page.mouse.down();await page.mouse.move(canvas.x+canvas.width*.5+100,canvas.y+canvas.height*.5+20,{steps:10});await page.mouse.up();await page.waitForTimeout(400);
   await layout(page,`${size}: camera orbit by sign`);await page.screenshot({path:resolve(out,`${size}-sign-orbit.png`)});
   results.push({size,width,height,cases:5,passed:true});console.log(JSON.stringify(results.at(-1)));await browser.close();continue;
  }
  if(process.env.BOSQUE_QA_FAST){await browser.close();continue;}
  await layout(page,`${size}: entrance`);
  let passed=1;
  if(width<=768||size==='landscape'){
   const joystick=await page.locator('.bfg-world-joystick').boundingBox();assert.ok(joystick);
   const cdp=await context.newCDPSession(page),x=joystick.x+joystick.width/2,y=joystick.y+joystick.height/2;
   const before=(await state(page)).player;
   await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});
   await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y-joystick.height*.32}]});
   await page.waitForFunction(p=>{const q=window.__forestQA.snapshot().player;return Math.hypot(q.x-p.x,q.z-p.z)>.4;},before);
   await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});passed++;
   await page.getByRole('button',{name:'Saltar',exact:true}).tap();
   await page.waitForFunction(()=>!window.__forestQA.snapshot().player.grounded);await page.waitForFunction(()=>window.__forestQA.snapshot().player.grounded);passed++;
  }
  // Real keyboard movement and jump, then physical route through three refuges.
  await page.locator('.bfg-world-canvas canvas').focus();const start=(await state(page)).player;
  await page.keyboard.down('w');await page.waitForFunction(x=>window.__forestQA.snapshot().player.x>x+.8,start.x);await page.keyboard.up('w');
  assert.ok((await state(page)).player.x>start.x+.7);passed++;
  for(const [index,zone] of ZONES.slice(0,3).entries()){
   console.log(`${size}: traveling to ${zone.id}`);await travel(page,`zone-${zone.id}`);
   assert.equal(await page.locator('[aria-label="Conversación del bosque"]').count(),0);
   await page.waitForFunction(()=>document.querySelector('.bfg-world-converse')?.textContent.includes('Conversar'));
   assert.doesNotMatch(await page.locator('.bfg-world-converse').innerText(),/Volver/);
   await layout(page,`${size}: ${zone.id}`);
   await page.screenshot({path:resolve(out,`${size}-${zone.id}.png`)});passed++;
   const level=['A1','B1','C1'][index];await page.locator('.bh-levels').getByRole('button',{name:level,exact:true}).click();
   await page.locator('.bfg-world-canvas canvas').focus();await page.keyboard.press('e');await page.getByRole('dialog',{name:'Conversación del bosque'}).waitFor();
   await page.getByRole('button',{name:'Marcar como hablada'}).click();
   await page.waitForFunction(()=>document.querySelector('.bfg-world-converse')?.textContent.includes('Volver a conversar'));
   await page.locator('.bfg-world-converse').click();await page.getByRole('dialog',{name:'Conversación del bosque'}).waitFor();
   await page.getByRole('button',{name:'Volver al bosque',exact:true}).click();passed++;
   await page.locator('.bfg-world-canvas canvas').focus();await page.keyboard.press('Space');
   await page.waitForFunction(()=>!window.__forestQA.snapshot().player.grounded);await page.waitForFunction(()=>window.__forestQA.snapshot().player.grounded);passed++;
  }
  await page.getByRole('button',{name:'Abrir mapa del bosque',exact:true}).click();await page.getByRole('dialog',{name:'Mapa del bosque',exact:true}).waitFor();await page.screenshot({path:resolve(out,`${size}-map.png`)});await page.keyboard.press('Escape');passed++;
  const minimap=page.getByRole('button',{name:'Ampliar mapa: refugios, punto de regreso y posición'});
  if(await minimap.isVisible()){await minimap.click();await page.getByRole('button',{name:'Cerrar mapa',exact:true}).click();}else{assert.equal(size,'landscape');assert.ok(await page.getByRole('button',{name:'Abrir mapa del bosque',exact:true}).isVisible());}passed++;
  await page.getByRole('button',{name:'Cambiar distancia de cámara'}).click();assert.equal(await page.getByRole('button',{name:'Cambiar distancia de cámara'}).getAttribute('aria-pressed'),'true');await page.waitForTimeout(300);await layout(page,`${size}: wide camera`);await page.keyboard.press('v');passed++;
  const beforeFall=(await state(page)).player;
  await steer(page,{x:95,z:95});await page.waitForFunction(n=>window.__forestQA.snapshot().player.respawns>n,beforeFall.respawns,{timeout:45000});await stop(page);
  assert.ok((await state(page)).player.respawns>beforeFall.respawns);await page.waitForTimeout(300);await layout(page,`${size}: recovery`);passed++;
  await page.screenshot({path:resolve(out,`${size}-recovery.png`)});
  results.push({size,width,height,cases:passed,passed:true});console.log(JSON.stringify(results.at(-1)));
  await browser.close();
 }
 assert.deepEqual(errors,[]);
}finally{await writeFile(resolve(out,'results.json'),JSON.stringify({results,errors},null,2));await browser?.close();server.close();console.log(`Evidence: ${out}`);}
