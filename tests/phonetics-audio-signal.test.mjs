import test from 'node:test';
import assert from 'node:assert/strict';
import {measureSignal,encodeWav16k} from '../app/phonetics-family/audio-signal.mjs';

test('silence between two voiced spans is measured in milliseconds',()=>{
 const pcm=new Float32Array(16000);pcm.fill(.2,0,4800);pcm.fill(.2,9600);
 const result=measureSignal(pcm,16000);
 assert.ok(result.silences.some(s=>s.start<=320&&s.end>=580));
 assert.ok(result.voicedMs>=650&&result.voicedMs<=750);
});
test('silent input has no voiced time',()=>assert.equal(measureSignal(new Float32Array(16000),16000).voicedMs,0));
test('encoder creates mono PCM WAV at 16 kHz from another sample rate',()=>{
 const wav=encodeWav16k(new Float32Array(48000).fill(.1),48000);
 const h=new DataView(wav.buffer);assert.equal(wav.length,32044);assert.equal(h.getUint32(24,true),16000);assert.equal(h.getUint16(22,true),1);assert.equal(h.getUint32(40,true),32000);
});

test('WAV decoder validates headers and measures the actual nonzero PCM',async()=>{
 const {decodeWav16k}=await import('../app/phonetics-family/audio-signal.mjs');
 assert.equal(typeof decodeWav16k,'function');
 const pcm=new Float32Array(48000);pcm.fill(.2,4800,38400);
 const wav=encodeWav16k(pcm,48000),decoded=decodeWav16k(wav);
 assert.equal(decoded.durationMs,1000);assert.ok(decoded.signal.voicedMs>=680);
 assert.ok(decoded.samples.some(x=>x!==0));assert.ok(Math.abs(decoded.samples[3000]-.2)<.001);
 for(const offset of [4,16,28,32,40]){const invalid=wav.slice();invalid[offset]^=1;assert.throws(()=>decodeWav16k(invalid));}
 assert.throws(()=>decodeWav16k(wav.slice(0,-1)));
 assert.equal(decodeWav16k(encodeWav16k(new Float32Array(16000),16000)).signal.voicedMs,0);
});
