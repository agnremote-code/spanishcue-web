// Temporary diagnostic: loads public production pages as an anonymous visitor and reports failed requests.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
for(const p of ['/lp/google-teachers?utm_source=chatgpt.com','/demo/noche-abierta?utm_source=chatgpt.com']){
 const ctx=await b.newContext({viewport:{width:1440,height:900},locale:'es-ES'});const pg=await ctx.newPage();const t0=Date.now();
 pg.on('response',r=>{const u=r.url();if(r.status()>=300||u.includes('DemoScene')||u.includes('_vinext/image'))console.log(p,'RESP',r.status(),((Date.now()-t0)/1000).toFixed(1)+'s',u.slice(0,160))});
 pg.on('requestfailed',r=>console.log(p,'FAILED',r.failure()?.errorText,r.url().slice(0,160)));
 pg.on('console',m=>{if(m.type()==='error'||m.type()==='warning')console.log(p,'CONSOLE',m.type(),m.text().slice(0,300))});
 pg.on('pageerror',e=>console.log(p,'PAGEERROR',e.message.slice(0,300)));
 await pg.goto('https://spanishcue.com'+p,{timeout:60000}).catch(e=>console.log(p,'GOTO',e.message));
 for(let i=0;i<15;i++){await pg.waitForTimeout(2000);
  const s=await pg.evaluate(()=>({tour:document.querySelector('.gt-tour')?.getAttribute('data-scene'),tourLoading:!!document.querySelector('.gt-tour-loading'),demoLoading:!!document.querySelector('.im-loading'),canvas:!!document.querySelector('canvas'),err:document.body.innerText.includes('Algo salió mal')}));
  console.log(p,((Date.now()-t0)/1000).toFixed(0)+'s',JSON.stringify(s));}
 await ctx.close();}
await b.close();})();
