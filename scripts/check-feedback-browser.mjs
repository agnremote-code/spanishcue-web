// Real browser UI checks. HTTP/D1 integration is covered separately by node:test.
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createServer} from 'node:http';
import {readFile,mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {resolve} from 'node:path';
const playwright=process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?`${process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES}/playwright/index.mjs`:'playwright';
const {chromium}=await import(playwright);
const out=resolve('outputs/feedback-qa');await mkdir(out,{recursive:true});
const bundled=await build({stdin:{contents:`
 import React from 'react';import {createRoot} from 'react-dom/client';
 import {LocaleProvider} from './app/i18n/LocaleProvider';
 import LessonReport from './app/lesson-reports/LessonReport';import ReportAdmin from './app/lesson-reports/ReportAdmin';
 const admin=new URLSearchParams(location.search).has('admin');
 const lesson={id:224,title:'Hablar sin cortar',level:'A1',levels:['A1','A2','B1','B2','C1','C2'],path:'/hablar-sin-cortar'};
 createRoot(document.getElementById('root')).render(<LocaleProvider initialLocale="es">{admin?<main style={{maxWidth:1000,margin:'40px auto',padding:20}}><h1>Clases que mejoran.</h1><ReportAdmin/></main>:<><main style={{maxWidth:950,margin:'80px auto',padding:24}}><p>FONÉTICA · B2</p><h1>Hablar sin cortar</h1><section data-report-section="connect" data-report-level="B2"><article data-report-activity="b2-connect-3"><h2>Escuchá las conexiones</h2><button data-question-id="q3">Escuchar ejemplo</button></article></section></main><LessonReport lesson={lesson} signedIn/></>}</LocaleProvider>);
 `,resolveDir:process.cwd(),sourcefile:'fixture.tsx',loader:'tsx'},bundle:true,write:false,outdir:'fixture',format:'esm',platform:'browser',jsx:'automatic'});
const js=bundled.outputFiles.find(f=>f.path.endsWith('.js')).contents,css=bundled.outputFiles.find(f=>f.path.endsWith('.css')).contents;
const fixture=createServer(async(req,res)=>{
 try{const path=new URL(req.url,'http://fixture').pathname;
 if(path==='/fixture.js'){res.setHeader('Content-Type','application/javascript');res.end(js);return}
 if(path==='/fixture.css'){res.setHeader('Content-Type','text/css');res.end(css);return}
 if(path.startsWith('/brand/')){res.setHeader('Content-Type','image/webp');res.end(await readFile(resolve('public'+path)));return}
 res.setHeader('Content-Type','text/html');res.end('<!doctype html><html lang="es"><head><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/fixture.css"><style>body{margin:0;background:#f6f6ef;color:#273c34;font-family:Arial,sans-serif}button{padding:12px}h1{font-size:40px}</style></head><body><div id="root"></div><script type="module" src="/fixture.js"></script></body></html>');
 }catch{res.writeHead(404);res.end()}
});await new Promise(r=>fixture.listen(0,'127.0.0.1',r));const fixtureOrigin=`http://127.0.0.1:${fixture.address().port}`;
const browser=await chromium.launch({headless:true,...(process.env.FEEDBACK_CHROMIUM?{executablePath:process.env.FEEDBACK_CHROMIUM}:{}),args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
let worker,checks=0;const check=(value,message)=>{assert.ok(value,message);checks++;console.log('PASS',message)};
const seed=(id='r1',status='new')=>({id,created_at:'2026-10-02T01:00:00Z',updated_at:'2026-10-02T01:00:00Z',user_id:'teacher',reporter_email:'profe@example.test',lesson_id:224,lesson_slug:'hablar-sin-cortar',lesson_title:'Hablar sin cortar',lesson_level:'B2',lesson_category:'Fonética',section_id:'connect',activity_id:'b2-connect-3',question_id:'q3',category:'answer',issue_type:'content',message:'La respuesta debería aceptar otra opción.',route_path:'/hablar-sin-cortar',context_json:'{"locationLabel":"Escuchá las conexiones"}',status,ai_status:'unprocessed'});
try{
 if(!process.env.FEEDBACK_SKIP_WORKER){
 // Launch the actual protected production Worker in the same execution namespace.
 worker=spawn(process.execPath,['node_modules/wrangler/bin/wrangler.js','dev','--config','dist/server/wrangler.json','--port','0','--ip','127.0.0.1','--local'],{env:{...process.env,WRANGLER_SEND_METRICS:'false',NODE_OPTIONS:`--require ${resolve('scripts/network-interfaces-shim.cjs')}`},stdio:['ignore','pipe','pipe']});
 const origin=await new Promise((done,reject)=>{let output='';const timer=setTimeout(()=>reject(new Error('Preview startup timed out: '+output.slice(-800))),40000);const read=chunk=>{output+=chunk;const m=output.match(/Ready on (http:\/\/127\.0\.0\.1:\d+)/);if(m){clearTimeout(timer);done(m[1])}};worker.stdout.on('data',read);worker.stderr.on('data',read);worker.on('exit',code=>{clearTimeout(timer);reject(new Error('Worker exit '+code+' '+output.slice(-800)))})});
 const home=await browser.newPage();home.on('pageerror',e=>console.log('PAGE ERROR',e.message));
 for(const width of [1440,1280,1024,768,430,390]){
   await home.setViewportSize({width,height:980});const response=await home.goto(origin,{waitUntil:'networkidle'});console.log('HOME',response.status(),await home.title(),(await response.text()).length,JSON.stringify(await response.allHeaders()));if(!await home.locator('.sc-updates').count()){console.log('DOM', (await home.content()).slice(0,1800));console.log('TEXT',(await home.locator('body').innerText()).slice(0,1200));await home.screenshot({path:`${out}/startup-error.png`});}
   const banner=home.locator('.sc-updates');await banner.waitFor();await banner.scrollIntoViewIfNeeded();
   const box=await banner.boundingBox();check(box.width<=width&&box.x>=0,`banner fits ${width}px`);
   check(await home.locator('.sc-update-preview').evaluate(img=>img.complete&&img.naturalWidth>0),`real preview loads ${width}px`);
   check(await home.locator('.sc-update-mascot').evaluate(img=>img.complete&&img.naturalWidth>0),`official mascot loads ${width}px`);
   check(await home.locator('.sc-update-cta').getAttribute('href')==='/hablar-sin-cortar',`correct new-class link ${width}px`);
   check(await home.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`no page overflow ${width}px`);
   if(width===1440||width===390)await home.screenshot({path:`${out}/home-${width}.png`});
 }
 check(await home.locator('.sc-updates').evaluate(el=>el.previousElementSibling?.className.includes('sc-hero')||!!el.previousElementSibling?.querySelector('[class*="hero"]')),'banner immediately after existing hero');
 await home.getByRole('button',{name:'Siguiente novedad',exact:true}).click();check(await home.locator('.sc-update-copy h2').textContent()==='Noche abierta','manual next works');
 await home.getByRole('button',{name:'Novedad anterior',exact:true}).click();check(await home.locator('.sc-update-copy h2').textContent()==='Hablar sin cortar','manual previous works');
 await home.locator('.sc-updates').dispatchEvent('touchstart',{touches:[{clientX:330,clientY:300}]});await home.locator('.sc-updates').dispatchEvent('touchend',{changedTouches:[{clientX:170,clientY:305}]});check(await home.locator('.sc-update-copy h2').textContent()==='Noche abierta','mobile swipe works');
 await home.emulateMedia({reducedMotion:'reduce'});check(await home.locator('.sc-update-copy').evaluate(el=>getComputedStyle(el).animationName==='none'),'reduced motion respected');
 const spoof=await home.request.post(`${origin}/api/lesson-reports`,{headers:{origin,'x-chespanish-user-uid':'spoof','x-chespanish-owner':'1'},data:{lessonId:224,message:'A fake request'}});check(spoof.status()===401,'actual Worker strips spoofed teacher identity');
 const privateApi=await home.request.get(`${origin}/api/admin/lesson-reports`,{headers:{'x-chespanish-owner':'1'}});check(privateApi.status()===403,'actual Worker guards private API');
 const privatePage=await home.request.get(`${origin}/admin/reportes`,{maxRedirects:0});check(privatePage.status()===302,'actual Worker guards admin page');
 await home.goto(`${origin}/clase/201`);check(await home.locator('.sc-report-launcher').count()===1,'report launcher on existing free lesson');await home.locator('.sc-report-launcher').click();check(await home.locator('.sc-report-dialog').isVisible(),'free visitor dialog opens');check(await home.getByRole('link',{name:'Ingresar ↗'}).count()===1,'visitor gets sign-in instead of unauthenticated submission');await home.keyboard.press('Escape');check(!await home.locator('.sc-report-dialog').isVisible(),'Escape closes dialog');
 await home.close();
 }
 // Actual UI components, deterministic API responses for network-failure and race scenarios.
 if(!process.env.FEEDBACK_ONLY_ADMIN){
 for(const width of [1440,1280,1024,768,430,390]){
  const page=await browser.newPage({viewport:{width,height:900}});const submissions=[];
  await page.route('**/api/lesson-reports',async route=>{submissions.push(route.request().postDataJSON());await route.fulfill({status:201,contentType:'application/json',body:'{"id":"saved","createdAt":"2026-10-02"}'})});
  await page.goto(`${fixtureOrigin}/hablar-sin-cortar`);await page.getByRole('button',{name:'Escuchar ejemplo'}).click();await page.locator('.sc-report-launcher').click();
  check(await page.locator('.sc-report-dialog').isVisible(),`teacher dialog opens ${width}px`);check(await page.locator('textarea').evaluate(el=>document.activeElement===el),`textarea receives focus ${width}px`);
  await page.locator('textarea').fill('La respuesta debería aceptar otra opción.');await page.locator('select').selectOption('answer');
  const box=await page.locator('.sc-report-dialog').boundingBox();check(box.x>=0&&box.x+box.width<=width+1,`dialog fits ${width}px`);
  await page.screenshot({path:`${out}/report-${width}.png`});await page.getByRole('button',{name:'Enviar reporte'}).click();await page.getByText('Tu reporte ya quedó registrado. Lo vamos a revisar.').waitFor();check(submissions[0].context.activityId==='b2-connect-3'&&submissions[0].context.questionId==='q3'&&submissions[0].context.level==='B2',`automatic exact context ${width}px`);
  check(await page.locator('.sc-report-success img').evaluate(img=>img.complete&&img.naturalWidth>0),`subtle mascot success ${width}px`);await page.getByRole('button',{name:'Volver a la clase'}).click();check(await page.locator('.sc-report-launcher').evaluate(el=>el===document.activeElement),`focus restored ${width}px`);await page.close();
 }
 const retry=await browser.newPage();const sent=[];let attempt=0;
 await retry.route('**/api/lesson-reports',async route=>{sent.push(route.request().postDataJSON());attempt++;if(attempt<3)await route.abort('failed');else await route.fulfill({status:201,contentType:'application/json',body:'{"id":"saved"}'})});
 await retry.goto(`${fixtureOrigin}/hablar-sin-cortar`);await retry.locator('.sc-report-launcher').click();await retry.locator('textarea').fill('Texto original con un error.');await retry.getByRole('button',{name:'Enviar reporte'}).click();await retry.locator('[role=alert]').waitFor();check(await retry.locator('textarea').inputValue()==='Texto original con un error.','network failure preserves draft');
 await retry.getByRole('button',{name:'Enviar reporte'}).click();await retry.locator('[role=alert]').waitFor();check(sent[0].requestKey===sent[1].requestKey,'unchanged retry reuses idempotency key');
 await retry.locator('textarea').fill('Texto corregido y diferente después del fallo.');await retry.getByRole('button',{name:'Enviar reporte'}).click();await retry.locator('.sc-report-success').waitFor();check(sent[2].requestKey!==sent[1].requestKey,'edited retry receives distinct key and cannot lose changes');await retry.close();
 }
 const admin=await browser.newPage();let pendingMore;
 await admin.route('**/api/admin/lesson-reports?**',async route=>{const url=new URL(route.request().url());if(url.searchParams.get('offset')!=='0'){pendingMore=route;return}const resolved=url.searchParams.get('status')==='resolved';await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({reports:[seed(resolved?'resolved-one':'pending-one',resolved?'resolved':'new')],nextOffset:resolved?null:30})})});
 await admin.route('**/api/admin/lesson-reports/*',async route=>{await route.fulfill({status:200,contentType:'application/json',body:'{"status":"resolved"}'})});
 await admin.goto(`${fixtureOrigin}/hablar-sin-cortar?admin=1`);await admin.locator('.sc-report-card').waitFor();await admin.getByRole('button',{name:'Pendientes',exact:true}).click();check(await admin.locator('.sc-report-card').count()===1,'active filter click keeps list available');
 await admin.getByRole('button',{name:'Ver más reportes'}).click();await admin.getByRole('button',{name:'Resueltos',exact:true}).click();await admin.locator('.sc-report-status-resolved').waitFor();await pendingMore.fulfill({status:200,contentType:'application/json',body:JSON.stringify({reports:[seed('late-pending')],nextOffset:60})});await admin.waitForTimeout(100);check(await admin.locator('.sc-report-card').count()===1&&await admin.locator('.sc-report-status-new').count()===0,'late old-filter response cannot contaminate current filter');
 await admin.setViewportSize({width:390,height:900});check(await admin.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'admin fits mobile');await admin.screenshot({path:`${out}/admin-mobile.png`});await admin.setViewportSize({width:1440,height:900});await admin.screenshot({path:`${out}/admin-desktop.png`});
 await admin.getByText('Gestionar reporte').click();await admin.getByLabel('Resolución',{exact:true}).fill('Se corrigió la respuesta.');await admin.getByRole('button',{name:'Guardar cambios'}).click();check(await admin.locator('.sc-report-card').count()===1,'admin saves status/resolution');await admin.close();
 console.log(`Browser QA: ${checks} checks passed. Screenshots: ${out}`);
}finally{await browser.close();await new Promise(r=>fixture.close(r));if(worker){worker.kill('SIGTERM');worker.stdout.destroy();worker.stderr.destroy()}}
