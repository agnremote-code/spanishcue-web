import test from 'node:test';
import assert from 'node:assert/strict';
const captureAPI=await import('../app/phonetics-family/audio-signal.mjs');
// Exercise the real capture controller with injected browser audio hardware.
function hardware({denied=false}={}){
 let stopped=0,closed=0,resumed=0,port;
 const stream={getTracks:()=>[{stop(){stopped++;}}]};
 class Context{state='suspended';sampleRate=48000;destination={};audioWorklet={addModule:async()=>{}};async resume(){resumed++;this.state='running';}async close(){closed++;}createMediaStreamSource(){return {connect(){},disconnect(){}};}createGain(){return {gain:{value:1},connect(){},disconnect(){}};}}
 class Node{constructor(){this.port=port={onmessage:null,postMessage(){port.onmessage({data:{stopped:true}});}};}connect(){}disconnect(){}}
 return {runtime:{AudioContext:Context,AudioWorkletNode:Node,mediaDevices:{async getUserMedia(){if(denied)throw new DOMException('denied','NotAllowedError');return stream;}}},send(samples){port.onmessage({data:{samples}});},counts:()=>({stopped,closed,resumed})};
}
test('real capture controller resumes context, meters actual PCM, encodes WAV and releases hardware',async()=>{
 assert.equal(typeof captureAPI.createMicrophoneCapture,'function');
 const hw=hardware(),levels=[],capture=captureAPI.createMicrophoneCapture({onLevel:rms=>levels.push(rms)},hw.runtime);
 await capture.start();hw.send(new Float32Array(24000).fill(.2));hw.send(new Float32Array(24000));
 const take=await capture.stop();assert.equal(take.sampleRate,48000);assert.equal(take.samples.length,48000);
 assert.ok(levels[0]>.19);assert.equal(levels[1],0);assert.equal(captureAPI.decodeWav16k(take.wav).durationMs,1000);
 assert.deepEqual(hw.counts(),{stopped:1,closed:1,resumed:1});capture.cancel();assert.equal(hw.counts().stopped,1);
});
test('permission denied is actionable and closes the audio context',async()=>{
 assert.equal(typeof captureAPI.createMicrophoneCapture,'function');const hw=hardware({denied:true});
 await assert.rejects(captureAPI.createMicrophoneCapture({},hw.runtime).start(),{name:'NotAllowedError'});
 assert.equal(hw.counts().closed,1);assert.match(captureAPI.microphoneErrorMessage({name:'NotAllowedError'}),/acceso al micrófono/i);
});
test('cancel while permission is pending stops a late stream',async()=>{
 assert.equal(typeof captureAPI.createMicrophoneCapture,'function');const hw=hardware();let resolve;
 hw.runtime.mediaDevices.getUserMedia=()=>new Promise(r=>resolve=r);
 const capture=captureAPI.createMicrophoneCapture({},hw.runtime),started=capture.start();
 await Promise.resolve();capture.cancel();let stopped=0;resolve({getTracks:()=>[{stop(){stopped++;}}]});
 await assert.rejects(started,{name:'AbortError'});assert.equal(stopped,1);
});
test('retry uses a fresh capture with no earlier samples',async()=>{
 assert.equal(typeof captureAPI.createMicrophoneCapture,'function');const hw=hardware();
 const first=captureAPI.createMicrophoneCapture({},hw.runtime);await first.start();hw.send(new Float32Array(48000).fill(.2));await first.stop();
 const next=captureAPI.createMicrophoneCapture({},hw.runtime);await next.start();hw.send(new Float32Array(24000));
 assert.equal(captureAPI.decodeWav16k((await next.stop()).wav).signal.voicedMs,0);
});

test('audio worklet captures genuine nonzero input, downmixes channels and flushes its last frame',async()=>{
 const {readFile}=await import('node:fs/promises'),{runInNewContext}=await import('node:vm');
 let Processor;const messages=[];
 class Base{constructor(){this.port={onmessage:null,postMessage(data){messages.push(data);}};}}
 runInNewContext(await readFile('public/phonetics/pcm-capture.js','utf8'),{AudioWorkletProcessor:Base,Float32Array,registerProcessor(_name,ctor){Processor=ctor;}});
 const processor=new Processor();for(let i=0;i<16;i++)assert.equal(processor.process([[new Float32Array(128).fill(.4),new Float32Array(128).fill(.2)]]),true);
 assert.equal(messages[0].samples.length,2048);assert.ok(Math.abs(messages[0].samples[100]-.3)<.001);
 processor.process([[new Float32Array(128).fill(.1)]]);processor.port.onmessage({data:'stop'});
 assert.equal(messages[1].samples.length,128);assert.equal(messages[2].stopped,true);assert.equal(processor.process([]),false);
});
