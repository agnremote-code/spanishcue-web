import test from 'node:test';
import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
const origin=process.env.CHESPANISH_TEST_ORIGIN;
const secret=process.env.AUTOESTUDIO_TEST_SHARE_SECRET;
const enabled=Boolean(origin&&secret);
const id='b'.repeat(48);
const token=`v1.${id}.a1.1`;
const signed=`${token}.${secret?createHmac('sha256',secret).update(token).digest('hex'):''}`;
let cookie;
const proId='d'.repeat(48);const proToken=`v1.${proId}.a1.1`;const proSigned=`${proToken}.${secret?createHmac('sha256',secret).update(proToken).digest('hex'):''}`;let proCookie;
// Pass from a teacher with full access (seeded in scripts/test-worker.mjs as worker-test-pro).
async function accessPro(){if(proCookie)return proCookie;const r=await fetch(`${origin}/s/${proSigned}`,{redirect:'manual'});assert.equal(r.status,303);assert.equal(r.headers.get('location'),'/autoestudio/a1');proCookie=r.headers.get('set-cookie').split(';')[0];return proCookie;}
async function access(){if(cookie)return cookie;const r=await fetch(`${origin}/s/${signed}`,{redirect:'manual'});assert.equal(r.status,303);assert.equal(r.headers.get('referrer-policy'),'no-referrer');assert.equal(r.headers.get('location'),'/autoestudio/a1');const value=r.headers.get('set-cookie');assert.match(value,/HttpOnly/);assert.match(value,/Secure/);cookie=value.split(';')[0];return cookie;}
test('real Worker exchanges bearer for clean URL without HTML, analytics or token reflection',{skip:!enabled},async()=>{await access();const r=await fetch(`${origin}/s/${signed}bad`,{redirect:'manual'});assert.equal(r.status,303);assert.equal(r.headers.get('referrer-policy'),'no-referrer');assert.doesNotMatch(await r.text(),/gtag|v1\./);});
test('a pass from a free teacher keeps the preview weeks and sends PRO weeks to the teacher-unlock notice',{skip:!enabled},async()=>{
 const headers={cookie:await access()};
 const free=await fetch(`${origin}/autoestudio/a1/semana-1`,{headers,redirect:'manual'});assert.equal(free.status,200);
 const locked=await fetch(`${origin}/autoestudio/a1/semana-3`,{headers,redirect:'manual'});assert.equal(locked.status,302);
 const location=new URL(locked.headers.get('location'),origin);assert.equal(location.pathname,'/autoestudio/claim');assert.equal(location.searchParams.get('profe'),'gratis');assert.equal(location.searchParams.get('semana'),'/autoestudio/a1/semana-3');
 assert.doesNotMatch(await locked.text(),/ae-module/);
});
test('real pass from a PRO teacher opens assigned paid week, but never another level, teacher API or dashboard',{skip:!enabled},async()=>{
 const headers={cookie:await accessPro()};const r=await fetch(`${origin}/autoestudio/a1/semana-3`,{headers,redirect:'manual'});assert.equal(r.status,200);const week=await r.text();assert.match(week,/ae-module/);
 // A translating browser must leave Homework alone: translated text nodes used to crash the player.
 assert.match(week,/<div class="notranslate ae-notranslate" translate="no"/);
 for(const path of ['/autoestudio/b1/semana-3','/autoestudio/b1/semana-3.rsc','/cuenta?tab=alumnos']){const r=await fetch(origin+path,{headers,redirect:'manual'});assert.notEqual(r.status,200,path);assert.doesNotMatch(await r.text(),/"listening"|ae-module/);}
 const teacher=await fetch(`${origin}/api/autoestudio/passes`,{headers});assert.equal(teacher.status,401);
});
test('real Worker erases forged scoped headers including RSC',{skip:!enabled},async()=>{
 for(const path of ['/autoestudio/a1/semana-3','/autoestudio/a1/semana-3.rsc']){const r=await fetch(origin+path,{redirect:'manual',headers:{'x-autoestudio-level':'a1','x-autoestudio-pass-id':id,'x-autoestudio-learner-id':'a'.repeat(48),'x-autoestudio-alias':'Forged','x-autoestudio-revision':'1','x-chespanish-access-level':'full'}});assert.notEqual(r.status,200);assert.doesNotMatch(await r.text(),/ae-module|"listening"/);}
});
test('pass progress endpoint verifies scope and prevents stale-tab writes in real Worker',{skip:!enabled},async()=>{
 const headers={cookie:await access(),origin,'content-type':'application/json'};
 const r=await fetch(`${origin}/api/autoestudio/progress`,{headers});assert.equal(r.status,200);const data=await r.json();assert.equal(data.session.level,'a1');
 const progress={startedAt:new Date().toISOString(),sections:{goal:new Date().toISOString()},lastSection:'goal'};
 const valid=await fetch(`${origin}/api/autoestudio/progress`,{method:'PUT',headers,body:JSON.stringify({passId:id,revision:1,moduleId:'a1-03',progress})});assert.equal(valid.status,200);
 const wrong=await fetch(`${origin}/api/autoestudio/progress`,{method:'PUT',headers,body:JSON.stringify({passId:'c'.repeat(48),revision:1,moduleId:'a1-03',progress})});assert.notEqual(wrong.status,200);
 const other=await fetch(`${origin}/api/autoestudio/progress`,{method:'PUT',headers,body:JSON.stringify({passId:id,revision:1,moduleId:'b1-03',progress})});assert.notEqual(other.status,200);
});
test('malformed share paths never render analytics or echo bearer pathname',{skip:!enabled},async()=>{
 for(const suffix of ['/extra','/extra.rsc','%2Fextra']){const r=await fetch(`${origin}/s/${signed}${suffix}`,{redirect:'manual'});assert.equal(r.status,303);assert.equal(r.headers.get('referrer-policy'),'no-referrer');assert.doesNotMatch(await r.text(),/gtag|GoogleAnalytics|v1\.|og:url/);}
});
