import test from 'node:test';
import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
// Real Worker (scripts/test-worker.mjs): the premium demo is truncated on the server, error writes need a pass, teacher reads need a teacher.
const origin=process.env.CHESPANISH_TEST_ORIGIN;
const secret=process.env.AUTOESTUDIO_TEST_SHARE_SECRET;
const enabled=Boolean(origin&&secret);
const passId='b'.repeat(48);
const token=`v1.${passId}.a1.1`;
const signed=`${token}.${secret?createHmac('sha256',secret).update(token).digest('hex'):''}`;
let cookie;
async function access(){if(cookie)return cookie;const r=await fetch(`${origin}/s/${signed}`,{redirect:'manual'});assert.equal(r.status,303);cookie=r.headers.get('set-cookie').split(';')[0];return cookie;}
const json={'content-type':'application/json'};

test('premium demo renders the real opening stages, locks the rest and never ships the protected content',{skip:!enabled},async()=>{
 const r=await fetch(`${origin}/autoestudio/clase/48?de=a1-01&tema=ser-estar`,{redirect:'manual'});
 assert.equal(r.status,200);
 assert.equal(r.headers.get('x-robots-tag'),'noindex, nofollow');
 const html=await r.text();
 assert.match(html,/Demostración gratuita/);
 assert.match(html,/data-preview="true"/);
 assert.match(html,/data-stage="practice" data-locked="true"/);
 const rsc=await (await fetch(`${origin}/autoestudio/clase/48.rsc?de=a1-01&tema=ser-estar`,{redirect:'manual'})).text();
 assert.match(html+rsc,/\/autoestudio\/a1\/semana-1/,'return link goes back to the originating week');
 // The server-rendered page and its RSC payload carry no transcript, practice answers or writing model of the full class.
 for(const text of [html,rsc]){
  assert.doesNotMatch(text,/"transcript":"[^"]{20,}/);
  assert.doesNotMatch(text,/"practice":\[\{/);
  assert.doesNotMatch(text,/"speaking":\[\{/);
 }
});

test('demo route refuses unknown classes and sends free classes to their real page',{skip:!enabled},async()=>{
 assert.equal((await fetch(`${origin}/autoestudio/clase/999`,{redirect:'manual'})).status,404);
 assert.equal((await fetch(`${origin}/autoestudio/clase/abc`,{redirect:'manual'})).status,404);
 const free=await fetch(`${origin}/autoestudio/clase/40`,{redirect:'manual'});
 assert.ok(free.status===307||free.status===308||free.status===303,`free class redirects, got ${free.status}`);
 assert.match(free.headers.get('location')??'',/\/la-fabrica-de-los-nombres$/);
});

test('error log accepts a real pass, rejects anonymous or forged writes, and keeps the teacher endpoint private',{skip:!enabled},async()=>{
 const body={passId,revision:1,moduleId:'a1-01',section:'grammar',exerciseId:'g1',itemIndex:0,given:'eres',verdict:'wrong',attempt:1};
 const anonymous=await fetch(`${origin}/api/autoestudio/errors`,{method:'POST',headers:{...json,origin},body:JSON.stringify(body)});
 assert.equal(anonymous.status,401);
 const headers={...json,origin,cookie:await access()};
 const stored=await fetch(`${origin}/api/autoestudio/errors`,{method:'POST',headers,body:JSON.stringify(body)});
 assert.equal(stored.status,201);
 const record=await stored.json();
 assert.equal(record.category,'ser-estar');assert.equal(record.label,'SER / ESTAR');assert.match(record.recorded,/^[a-z0-9]+$/i);
 const forged=await fetch(`${origin}/api/autoestudio/errors`,{method:'POST',headers,body:JSON.stringify({...body,question:'forged',given:'x'})});
 assert.equal(forged.status,409);
 const otherLevel=await fetch(`${origin}/api/autoestudio/errors`,{method:'POST',headers,body:JSON.stringify({...body,moduleId:'b1-01'})});
 assert.equal(otherLevel.status,403);
 const event=await fetch(`${origin}/api/autoestudio/events`,{method:'POST',headers,body:JSON.stringify({kind:'opened',lessonId:48,category:'ser-estar',moduleId:'a1-01'})});
 assert.equal(event.status,201);
 for(const path of [`/api/autoestudio/learners/${'a'.repeat(48)}/errors`]){
  assert.equal((await fetch(origin+path)).status,401,'anonymous teacher read');
  assert.equal((await fetch(origin+path,{headers:{cookie:headers.cookie}})).status,401,'a learner pass is not a teacher');
 }
 const note=await fetch(`${origin}/api/autoestudio/learners/${'a'.repeat(48)}/notes`,{method:'POST',headers,body:JSON.stringify({kind:'note',category:'ser-estar',text:'x'})});
 assert.equal(note.status,401);
});
