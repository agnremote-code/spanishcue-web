import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';

const built=await build({entryPoints:['app/api/phonetics/speech-attempt/route.ts'],bundle:true,write:false,platform:'node',format:'esm',plugins:[{name:'test-env',setup(b){b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'test-env',namespace:'test'}));b.onLoad({filter:/.*/,namespace:'test'},()=>({contents:'export const env={};',loader:'js'}));}}]});
const {POST}=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
function wav(){const bytes=new Uint8Array(44+16000*2),v=new DataView(bytes.buffer);for(const [at,str] of [[0,'RIFF'],[8,'WAVE'],[12,'fmt '],[36,'data']])for(let i=0;i<4;i++)bytes[at+i]=str.charCodeAt(i);v.setUint32(4,bytes.length-8,true);v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,16000,true);v.setUint32(28,32000,true);v.setUint16(32,2,true);v.setUint16(34,16,true);v.setUint32(40,32000,true);return bytes;}
function speechWav(){const bytes=wav(),v=new DataView(bytes.buffer);for(let i=44;i<bytes.length;i+=2)v.setInt16(i,6000,true);return bytes;}
function request({silent=false,pro=true,origin='https://spanishcue.com',activityId='connect-01'}={}){const body=new FormData();body.set('level','A1');body.set('activityId',activityId);body.set('audio',new File([silent?wav():speechWav()],'attempt.wav',{type:'audio/wav'}));body.set('signal',JSON.stringify({voicedMs:700,silences:[]}));return new Request('https://spanishcue.com/api/phonetics/speech-attempt',{method:'POST',body,headers:{origin,...pro?{'x-chespanish-user-uid':'user','x-chespanish-access-level':'full'}:{}}});}
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

test('server measures PCM rather than trusting forged voiced metadata',async()=>{
 const response=await POST(request({silent:true}));const result=await response.json();assert.equal(result.kind,'retry');assert.match(result.message,/escuchamos/i);
});
test('malformed PCM headers are rejected before the provider',async()=>{
 const body=new FormData();const broken=wav();broken[28]^=1;
 body.set('level','A1');body.set('activityId','connect-01');body.set('audio',new File([broken],'attempt.wav'));
 const req=new Request('https://spanishcue.com/api/phonetics/speech-attempt',{method:'POST',body,headers:{origin:'https://spanishcue.com','x-chespanish-user-uid':'user','x-chespanish-access-level':'full'}});
 assert.equal((await POST(req)).status,400);
});

// Real multipart/WAV/server analysis, provider I/O stubbed because tests have no key.
const configured=await build({entryPoints:['app/api/phonetics/speech-attempt/route.ts'],bundle:true,write:false,platform:'node',format:'esm',plugins:[{name:'private-test-env',setup(b){b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'private-env',namespace:'test'}));b.onLoad({filter:/.*/,namespace:'test'},()=>({contents:"export const env={AZURE_SPEECH_KEY:'test',AZURE_SPEECH_REGION:'eastus'};",loader:'js'}));}}]});
const configuredPost=(await import('data:text/javascript;base64,'+Buffer.from(configured.outputFiles[0].text).toString('base64'))).POST;
test('valid PCM reaches Spanish STT and real server boundary analysis returns continuous/pause/mismatch/uncertain',async()=>{
 const saved=globalThis.fetch;
 try{
  for(const [kind,gap,confidence,phrase] of [['continuous',40,.9,'Es una casa.'],['pause',500,.9,'Es una casa.'],['mismatch',40,.9,'Es una mesa.'],['uncertain',40,.2,'Es una casa.']]){
   const samples=new Float32Array(32000);samples.fill(.2,1600,5600);samples.fill(.2,(350+gap)*16,28000);
   const {encodeWav16k}=await import('../app/phonetics-family/audio-signal.mjs');
   const body=new FormData();body.set('level','A1');body.set('activityId','connect-01');body.set('audio',new File([encodeWav16k(samples,16000)],'attempt.wav'));
   globalThis.fetch=async(_url,options)=>{assert.ok(options.body.get('audio').size>44);return Response.json({combinedPhrases:[{text:phrase}],phrases:[{confidence,words:[{text:'Es',offsetMilliseconds:100,durationMilliseconds:250},{text:'una',offsetMilliseconds:350+gap,durationMilliseconds:300},{text:phrase.includes('mesa')?'mesa.':'casa.',offsetMilliseconds:700+gap,durationMilliseconds:300}]}]});};
   const response=await configuredPost(new Request('https://spanishcue.com/api/phonetics/speech-attempt',{method:'POST',body,headers:{origin:'https://spanishcue.com','x-chespanish-user-uid':'user','x-chespanish-access-level':'full'}}));
   const result=await response.json();assert.equal(result.kind,kind);assert.equal(result.transcript,phrase);
  }
 }finally{globalThis.fetch=saved;}
});
