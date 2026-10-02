import test from 'node:test';
import assert from 'node:assert/strict';
import {request as httpRequest} from 'node:http';

const origin=process.env.CHESPANISH_TEST_ORIGIN;
if(!origin)throw new Error('Start the test Worker first.');

// The Worker test uses fresh HTTP/1.1 sockets. Node fetch's connection pool can
// leave the first rejected POST pending in CI even after Connection: close.
const request=(path,{method='GET',headers={},body}={})=>new Promise((resolve,reject)=>{
 const url=new URL(path,origin);
 const req=httpRequest(url,{method,headers:{...headers,connection:'close'},agent:false},res=>{
  // These denial checks assert headers only. A 302 has no response body to await.
  resolve({status:res.statusCode,location:res.headers.location});
  res.destroy();
 });
 req.setTimeout(20000,()=>req.destroy(new Error(`Timed out: ${method} ${path}`)));
 req.once('error',reject);
 req.end(body);
});

test('actual Worker strips forged identity for report APIs and admin subpages',async()=>{
 const forged={'x-chespanish-owner':'1','x-chespanish-user-uid':'forged','x-chespanish-access-level':'full',origin};
 const send=await request('/api/lesson-reports',{method:'POST',headers:{...forged,'content-type':'application/json'},body:JSON.stringify({lessonId:224,level:'B2',url:'/hablar-sin-cortar',message:'Spoofed report'})});assert.equal(send.status,401);
 const list=await request('/api/admin/lesson-reports',{headers:forged});assert.equal(list.status,403);
 const patch=await request('/api/admin/lesson-reports',{method:'PATCH',headers:{...forged,'content-type':'application/json'},body:JSON.stringify({id:'x',status:'resolved'})});assert.equal(patch.status,403);
 const page=await request('/admin/reportes',{headers:forged});assert.ok([302,303,307].includes(page.status));assert.match(page.location,/\/ingresar/);
});
