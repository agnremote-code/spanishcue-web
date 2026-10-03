import assert from 'node:assert/strict';
const origin=new URL(process.env.SPANISHCUE_PRODUCTION_ORIGIN||'https://spanishcue.com').origin;
const checks=[];
async function request(path,options={}){return fetch(origin+path,{...options,headers:{connection:'close',...options.headers},redirect:'manual',signal:AbortSignal.timeout(20000)});}
const home=await request('/');assert.equal(home.status,200);assert.match(await home.text(),/class="new-lessons"/);checks.push('canonical news banner renders');
const lesson=await request('/la-fabrica-de-los-nombres');assert.equal(lesson.status,200);assert.match(await lesson.text(),/aria-label="Ayúdanos a mejorar"/);checks.push('report launcher renders on a real public lesson');
const forged={'x-chespanish-owner':'1','x-chespanish-user-uid':'smoke-forged','x-chespanish-access-level':'full',origin,'content-type':'application/json'};
const report=await request('/api/lesson-reports',{method:'POST',headers:forged,body:'{}'});assert.equal(report.status,401);await report.arrayBuffer();checks.push('forged teacher cannot submit');
const admin=await request('/api/admin/lesson-reports',{headers:forged});assert.equal(admin.status,403);await admin.arrayBuffer();checks.push('forged owner cannot read reports');
const page=await request('/admin/reportes',{headers:forged});assert.ok([302,303,307,308].includes(page.status));assert.equal(new URL(page.headers.get('location'),origin).pathname,'/ingresar');checks.push('owner page rejects anonymous session');
console.log(JSON.stringify({passed:true,origin,checks},null,2));
