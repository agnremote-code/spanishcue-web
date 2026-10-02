import test from 'node:test';import assert from 'node:assert/strict';
const origin=process.env.CHESPANISH_TEST_ORIGIN;
if(!origin)throw new Error('Start the test Worker first.');
test('actual Worker strips forged identity for report APIs and admin subpages',async()=>{
 // Node 22 keep-alive can stall after a rejected POST against Wrangler local.
 // Fresh HTTP connections preserve the real identity-denial assertions.
 const forged={connection:'close','x-chespanish-owner':'1','x-chespanish-user-uid':'forged','x-chespanish-access-level':'full','content-type':'application/json',origin};
 const send=await fetch(origin+'/api/lesson-reports',{method:'POST',signal:AbortSignal.timeout(20000),headers:forged,body:JSON.stringify({lessonId:224,level:'B2',url:'/hablar-sin-cortar',message:'Spoofed report'})});assert.equal(send.status,401);await send.arrayBuffer();
 const list=await fetch(origin+'/api/admin/lesson-reports',{signal:AbortSignal.timeout(20000),headers:forged});assert.equal(list.status,403);await list.arrayBuffer();
 const patch=await fetch(origin+'/api/admin/lesson-reports',{method:'PATCH',signal:AbortSignal.timeout(20000),headers:forged,body:JSON.stringify({id:'x',status:'resolved'})});assert.equal(patch.status,403);await patch.arrayBuffer();
 const page=await fetch(origin+'/admin/reportes',{signal:AbortSignal.timeout(20000),headers:forged,redirect:'manual'});assert.ok([302,303,307].includes(page.status));assert.match(page.headers.get('location'),/\/ingresar/);
});
