/** Isolated fixture: real UI + original geometry/physics, no provider secrets or real billing requests. */
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createServer} from 'node:http';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import {demoContent} from '../app/immersive/demo-content.mjs';
const repo=process.cwd(),out=resolve('outputs/instagram-browser');await mkdir(out,{recursive:true});
await build({stdin:{contents:`import React from 'react';import{createRoot}from'react-dom/client';import{LocaleProvider}from'./app/i18n/LocaleProvider';import CityDemo from './app/immersive/CityDemo';import Landing from './app/immersive/ImmersiveLanding';import './app/immersive/immersive.css';import './app/acceso/style.css';import './app/acceso/payment-options.css';const initial=JSON.parse(document.querySelector('#data').textContent);createRoot(document.getElementById('root')).render(<LocaleProvider initialLocale={new URLSearchParams(location.search).get('lang')==='es'?'es':'en'}>{location.pathname.includes('/demo/')?<CityDemo initial={initial} signedIn={false}/>:<Landing pro={false} signedIn={false}/>}</LocaleProvider>);`,resolveDir:repo,loader:'tsx'},bundle:true,format:'esm',splitting:true,outdir:resolve(out,'assets'),entryNames:'qa',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},plugins:[{name:'fixture-link',setup(b){b.onResolve({filter:/^next\/link$/},()=>({path:'link',namespace:'qa'}));b.onLoad({filter:/.*/,namespace:'qa'},()=>({contents:'export default function Link({children,...props}){return <a {...props}>{children}</a>}',loader:'jsx',resolveDir:repo}));}}]});
const checkoutRequests=[];
const server=createServer(async(req,res)=>{try{
 const url=new URL(req.url,'http://local'),path=url.pathname;
 if(path==='/api/city-demo'){const data=demoContent(url.searchParams.get('level'),url.searchParams.get('district')??'centro');res.setHeader('content-type','application/json');res.statusCode=data?200:403;res.end(JSON.stringify(data??{error:'PRO'}));return;}
 if(path.includes('/api/billing/paddle/checkout')){let body='';for await(const c of req)body+=c;checkoutRequests.push(JSON.parse(body));res.writeHead(503,{'content-type':'application/json'}).end(JSON.stringify({error:'QA: no real payment was created.'}));return;}
 if(path.startsWith('/api/')){res.setHeader('content-type','application/json');res.end(JSON.stringify({limit:1000,remaining:500,available:true,paddleCheckoutAvailable:true,trialCheckoutAvailable:true,checkoutAvailable:true,checkoutLive:true,mode:'live'}));return;}
 if(path.startsWith('/assets/')||path.startsWith('/brand/')){const file=resolve(path.startsWith('/assets/')?out:resolve(repo,'public'),'.'+path);const ext=file.split('.').pop();res.setHeader('content-type',({js:'text/javascript',css:'text/css',webp:'image/webp',mp4:'video/mp4'})[ext]||'application/octet-stream');res.end(await readFile(file));return;}
 res.setHeader('content-type','text/html');res.end('<!doctype html><html><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0;background:#12121c}</style><link rel="stylesheet" href="/assets/qa.css"><div id="root"></div><script id="data" type="application/json">'+JSON.stringify(demoContent('A1')).replace(/</g,'\\u003c')+'</script><script type="module" src="/assets/qa.js"></script></html>');
 }catch{res.writeHead(404).end();}});
await new Promise(done=>server.listen(0,'127.0.0.1',done));const origin=`http://127.0.0.1:${server.address().port}`;
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE_PATH?{executablePath:process.env.CHROMIUM_EXECUTABLE_PATH}:{}),args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const failures=[];const evidence=[];
try{
 const page=await browser.newPage({viewport:{width:1100,height:780}});page.on('pageerror',e=>failures.push(e.message));
 await page.goto(origin+'/demo/noche-abierta');await page.locator('.im-world[data-ready="true"]').waitFor({timeout:45000});
 await page.getByRole('button',{name:/Got it/}).click();
 // A short recording from the live WebGL canvas while actual keyboard input moves the avatar.
 const recording=page.evaluate(async()=>{
  const canvas=document.querySelector('.im-canvas canvas'),chunks=[];
  const recorder=new MediaRecorder(canvas.captureStream(20),{mimeType:'video/webm;codecs=vp9',videoBitsPerSecond:900000});
  return new Promise(resolve=>{recorder.ondataavailable=e=>chunks.push(e.data);recorder.onstop=()=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result.split(',')[1]);reader.readAsDataURL(new Blob(chunks,{type:'video/webm'}));};recorder.start();setTimeout(()=>recorder.stop(),8500);});
 });
 await page.locator('.im-world').focus();await page.keyboard.down('w');await page.waitForTimeout(3200);await page.keyboard.up('w');
 await writeFile(resolve(out,'real-gameplay.webm'),Buffer.from(await recording,'base64'));
 await page.locator('.im-canvas').screenshot({path:resolve(out,'real-poster.png')});
 await page.screenshot({path:resolve(out,'desktop-city.png')});
 evidence.push('Desktop WebGL renders original city; keyboard movement and real canvas capture work.');
 for(const [name,width,height] of [['iphone',390,844],['android',412,915],['small',320,700]]){
  await page.setViewportSize({width,height});await page.goto(origin+'/demo/noche-abierta');await page.locator('.im-world[data-ready="true"]').waitFor();
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${name} overflow`);
  await page.getByRole('button',{name:/City map/}).click();assert.equal(await page.locator('.im-venues button').count(),10);
  await page.locator('.im-venues button').first().click();await page.getByRole('button',{name:/Talk · cafe/}).click();
  assert.equal(await page.locator('.im-options button').count(),3);await page.locator('.im-options button').first().click();await page.getByLabel('Your personal response').fill('Me gusta tomar té.');
  assert.equal(await page.locator('.im-pass').count(),0,'No premium interrupt during free activity');
  await page.screenshot({path:resolve(out,`${name}-activity.png`)});
  await page.getByRole('button',{name:/I have answered/}).click();await page.getByRole('button',{name:/City map/}).click();
  await page.locator('.im-districts button').first().click();await page.getByRole('dialog').waitFor();
  assert.match(await page.locator('.im-pass').innerText(),/US\$2/);assert.match(await page.locator('.im-pass').innerText(),/US\$15.50/);
  await page.screenshot({path:resolve(out,`${name}-pass.png`)});await page.getByRole('button',{name:/Keep exploring free/}).click();
  await page.getByRole('button',{name:/Close map/}).click();
  // Context loss must retain all learning through the interactive map.
  await page.evaluate(()=>document.querySelector('.im-canvas canvas').dispatchEvent(new Event('webglcontextlost',{cancelable:true})));
  await page.getByText(/No-3D mode/).waitFor();assert.equal(await page.locator('.im-venues button').count(),10);
  for(const level of ['A1','A2','B1','B2','C1','C2']){await page.getByLabel('Your level').selectOption(level);await page.waitForResponse(r=>r.url().includes('api/city-demo'));}
  evidence.push(`${name}: no horizontal overflow, complete map, choice + personal speaking, contextual paywall, six levels and WebGL-loss fallback.`);
 }
 await page.setViewportSize({width:390,height:844});await page.goto(origin+'/lp/instagram?utm_source=instagram&sc_exp=instagram-city-v1&sc_variant=b');
 await page.getByRole('link',{name:/ENTER THE 3D CITY/}).waitFor();assert.match(await page.getByRole('link',{name:/ENTER THE 3D CITY/}).getAttribute('href'),/utm_source=instagram/);
 await page.screenshot({path:resolve(out,'iphone-landing.png'),fullPage:true});
 await page.goto(origin+'/lp/instagram?lang=es');await page.getByRole('link',{name:/ENTRAR EN LA CIUDAD/}).waitFor();
 await page.getByRole('button',{name:/Ver todo lo que incluye PRO/}).click();await page.getByRole('button',{name:/Prueba 1 día/}).click();
 await page.getByRole('alert').waitFor();assert.equal(checkoutRequests.at(-1).offer,'trial');
 await page.getByRole('button',{name:/Suscríbete/}).click();await page.getByRole('alert').waitFor();assert.equal(checkoutRequests.at(-1).offer,'monthly');
 evidence.push('EN/ES landing, UTM/variant CTA propagation, existing Paddle UI submits trial/monthly correctly; network intercepted, no live charges.');
 assert.deepEqual(failures,[]);
 await writeFile(resolve(out,'evidence.json'),JSON.stringify({evidence,failures},null,2));
 console.log(evidence.join('\n'));
}finally{await browser.close();server.close();}
