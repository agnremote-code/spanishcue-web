import test from 'node:test';
import assert from 'node:assert/strict';
import {request as httpRequest} from 'node:http';

const origin=process.env.CHESPANISH_TEST_ORIGIN;
if(!origin)throw new Error('Start the test Worker first.');

// The Worker test uses fresh HTTP/1.1 sockets. Node fetch's connection pool can
// leave the first rejected POST pending in CI even after Connection: close.
const requestOnce=(path,{method='GET',headers={},body}={})=>new Promise((resolve,reject)=>{
 const url=new URL(path,origin);
 const req=httpRequest(url,{method,headers:{...headers,connection:'close'},agent:false},res=>{
  // These denial checks assert headers only. A 302 has no response body to await.
  resolve({status:res.statusCode,location:res.headers.location});
  res.resume();
  req.setTimeout(0);
 });
 req.setTimeout(10000,()=>req.destroy(Object.assign(new Error(`Timed out: ${method} ${path}`),{code:'ETIMEDOUT'})));
 req.once('error',reject);
 req.end(body);
});

// Retry only transient socket failures from the local workerd proxy. HTTP
// responses (including incorrect auth status codes) are never retried.
async function request(path,options){
 for(let attempt=0;;attempt++){
  try{return await requestOnce(path,options);}
  catch(error){
   if(attempt>=2||!['ETIMEDOUT','ECONNRESET','ECONNREFUSED','EPIPE'].includes(error.code))throw error;
   console.warn(`Retrying local Worker transport: ${options?.method||'GET'} ${path} (${error.code})`);
  }
 }
}

test('actual Worker strips forged identity for report APIs and admin subpages',async()=>{
 const forged={'x-chespanish-owner':'1','x-chespanish-user-uid':'forged','x-chespanish-access-level':'full',origin};
 const send=await request('/api/lesson-reports',{method:'POST',headers:{...forged,'content-type':'application/json'},body:JSON.stringify({lessonId:224,level:'B2',url:'/hablar-sin-cortar',message:'Spoofed report'})});assert.equal(send.status,401);
 const list=await request('/api/admin/lesson-reports',{headers:forged});assert.equal(list.status,403);
 const patch=await request('/api/admin/lesson-reports',{method:'PATCH',headers:{...forged,'content-type':'application/json'},body:JSON.stringify({id:'x',status:'resolved'})});assert.equal(patch.status,403);
 const page=await request('/admin/reportes',{headers:forged});assert.ok([302,303,307].includes(page.status));assert.match(page.location,/\/ingresar/);
});
