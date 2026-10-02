import test from 'node:test';
import assert from 'node:assert/strict';
import {request as httpRequest} from 'node:http';
const origin=process.env.CHESPANISH_TEST_ORIGIN;
if(!origin)throw new Error('Start the test Worker first.');
// Exercise the real Worker without Node 22 Undici's intermittent local proxy stall.
// A fresh native HTTP connection keeps every identity-denial assertion intact.
function send(path,{method='GET',headers={},body}={}){
 return new Promise((resolve,reject)=>{
  const req=httpRequest(new URL(path,origin),{method,headers,agent:false,timeout:20000},res=>{
   const chunks=[];res.on('data',chunk=>chunks.push(chunk));
   res.on('error',reject);res.on('end',()=>resolve({status:res.statusCode,headers:res.headers,body:Buffer.concat(chunks).toString()}));
  });
  req.on('timeout',()=>req.destroy(new Error('Worker request timed out: '+method+' '+path)));
  req.on('error',reject);req.end(body);
 });
}
test('actual Worker strips forged identity for report APIs and admin subpages',async()=>{
 const forged={'x-chespanish-owner':'1','x-chespanish-user-uid':'forged','x-chespanish-access-level':'full','content-type':'application/json',origin};
 const report=await send('/api/lesson-reports',{method:'POST',headers:forged,body:JSON.stringify({lessonId:224,level:'B2',url:'/hablar-sin-cortar',message:'Spoofed report'})});assert.equal(report.status,401);
 const list=await send('/api/admin/lesson-reports',{headers:forged});assert.equal(list.status,403);
 const patch=await send('/api/admin/lesson-reports',{method:'PATCH',headers:forged,body:JSON.stringify({id:'x',status:'resolved'})});assert.equal(patch.status,403);
 const page=await send('/admin/reportes',{headers:forged});assert.ok([302,303,307].includes(page.status));assert.match(page.headers.location,/\/ingresar/);
});
