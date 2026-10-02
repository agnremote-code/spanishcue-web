import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';

const built=await build({entryPoints:['app/api/phonetics/speech-attempt/route.ts'],bundle:true,write:false,platform:'node',format:'esm',plugins:[{name:'test-env',setup(b){b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'test-env',namespace:'test'}));b.onLoad({filter:/.*/,namespace:'test'},()=>({contents:'export const env={};',loader:'js'}));}}]});
const {POST}=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
function wav(){const bytes=new Uint8Array(44+16000*2),v=new DataView(bytes.buffer);for(const [at,str] of [[0,'RIFF'],[8,'WAVE'],[12,'fmt '],[36,'data']])for(let i=0;i<4;i++)bytes[at+i]=str.charCodeAt(i);v.setUint32(4,bytes.length-8,true);v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,16000,true);v.setUint32(28,32000,true);v.setUint16(32,2,true);v.setUint16(34,16,true);v.setUint32(40,32000,true);return bytes;}
function request({pro=true,origin='https://spanishcue.com',activityId='connect-01'}={}){const body=new FormData();body.set('level','A1');body.set('activityId',activityId);body.set('audio',new File([wav()],'attempt.wav',{type:'audio/wav'}));body.set('signal',JSON.stringify({voicedMs:700,silences:[]}));return new Request('https://spanishcue.com/api/phonetics/speech-attempt',{method:'POST',body,headers:{origin,...pro?{'x-chespanish-user-uid':'user','x-chespanish-access-level':'full'}:{}}});}
test('speech endpoint requires verified PRO access and same origin',async()=>{
 assert.equal((await POST(request({pro:false}))).status,401);
 assert.equal((await POST(request({origin:'https://another.example'}))).status,403);
});
test('only authored activities and final challenge are accepted',async()=>{
 assert.equal((await POST(request({activityId:'invented'}))).status,400);
 assert.equal((await POST(request({activityId:'final'}))).status,200);
});
test('no configured provider returns an honest fallback without caching audio',async()=>{
 const response=await POST(request());assert.equal(response.status,200);assert.equal(response.headers.get('cache-control'),'private, no-store');
 const result=await response.json();assert.equal(result.kind,'unavailable');assert.equal(result.transcript,undefined);
});
