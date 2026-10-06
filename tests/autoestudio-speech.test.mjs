import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { runInNewContext } from 'node:vm';
import { audioKey } from '../app/autoestudio/curriculum/audio-key.ts';
const built=await build({entryPoints:['app/autoestudio/engine/speech.ts'],bundle:true,format:'cjs',platform:'node',write:false});
function harness({available=true,rejectPlay=false}={}){
 const calls=[],warnings=[],timers=new Map();let id=0;
 class Audio{
  play(){calls.push(['play',this.src,this]);return rejectPlay?Promise.reject(new Error('blocked')):Promise.resolve();}
  pause(){calls.push(['pause']);}
 }
 const synth={getVoices:()=>[{lang:'es-MX',name:'Native'}],addEventListener(){},removeEventListener(){},speak:u=>calls.push(['speak',u]),cancel(){}};
 const m={exports:{}};
 runInNewContext(built.outputFiles[0].text,{module:m,exports:m.exports,window:{speechSynthesis:synth},SpeechSynthesisUtterance:class {},Audio:available?Audio:undefined,
 console:{warn:(...args)=>warnings.push(args)},setTimeout:fn=>{timers.set(++id,fn);return id;},clearTimeout:i=>timers.delete(i)});
 return {api:m.exports,calls,warnings,timers,element:()=>calls.filter(c=>c[0]==='play').at(-1)?.[2]};
}
const clips=[{text:'Hola'},{text:'Hasta mañana',voice:'es-AR-m'}];
const audio=Object.fromEntries(clips.map((c,i)=>[audioKey(c.text,c.voice),`/audio/autoestudio/${i}.mp3`]));
test('first tap immediately loads MP3; all sequence files reuse the unlocked element, never speak',async()=>{
 const h=harness();const lines=[];let starts=0;
 const done=h.api.playClips(clips,{audio,rate:0.7,onLine:i=>lines.push(i),onStart:()=>starts++});
 assert.equal(h.calls[0][0],'play');assert.equal(h.calls[0][1],audio[audioKey(clips[0].text)]);
 const el=h.element();assert.equal(el.playbackRate,0.7);assert.equal(starts,0);
 el.onplaying();el.onended();assert.equal(h.element(),el);assert.equal(el.src,audio[audioKey(clips[1].text,clips[1].voice)]);
 el.onplaying();el.onended();assert.equal(await done,true);assert.equal(starts,1);assert.deepEqual(lines,[0,1,-1]);assert.ok(!h.calls.some(c=>c[0]==='speak'));
});
test('missing or partially missing assets reject explicitly without browser synthesis',async()=>{
 for(const mapping of [{},{[audioKey(clips[0].text)]:audio[audioKey(clips[0].text)]}]){
  const h=harness();const done=h.api.playClips(clips,{audio:mapping});
  assert.ok(!h.calls.some(c=>c[0]==='speak'),'Missing asset must never invoke speechSynthesis');
  await assert.rejects(done,/audio-asset-missing/);
  assert.ok(!h.calls.some(c=>['speak','play'].includes(c[0])));
 }
});
test('replacement settles previous run and stale events cannot stop the new run',async()=>{
 const h=harness();const first=h.api.playClips(clips,{audio});const stale=h.element().onerror;
 const next=h.api.playClips(clips,{audio});assert.equal(await first,false);stale();assert.equal(h.warnings.length,0);
 h.element().onended();h.element().onended();assert.equal(await next,true);
});
test('stop settles pending playback, clears timers and permits replay',async()=>{
 const h=harness();for(let i=0;i<3;i++){const done=h.api.playClips(clips,{audio});h.api.stopAudio();assert.equal(await done,false);assert.equal(h.timers.size,0);}
 const done=h.api.playClips([clips[0]],{audio});h.element().onended();assert.equal(await done,true);
});
test('file load failure reports an error, never synthesizes, and permits retry',async()=>{
 const h=harness();const failed=h.api.playClips(clips,{audio});h.element().error={code:4};h.element().onerror();
 await assert.rejects(failed,/media-4/);assert.equal(h.warnings.length,1);assert.ok(!JSON.stringify(h.warnings).includes('Hola'));
 const next=h.api.playClips([clips[0]],{audio});h.element().onended();assert.equal(await next,true);assert.ok(!h.calls.some(c=>c[0]==='speak'));
});
test('unsupported audio, play rejection and timeout are errors, never successful listens',async()=>{
 const absent=harness({available:false});assert.equal(absent.api.audioSupported(),false);await assert.rejects(absent.api.playClips(clips,{audio}),/audio-unavailable/);
 const blocked=harness({rejectPlay:true});await assert.rejects(blocked.api.playClips(clips,{audio}),/media-/);
 const stalled=harness();const done=stalled.api.playClips(clips,{audio});[...stalled.timers.values()][0]();await assert.rejects(done,/audio-start-timeout/);assert.equal(stalled.timers.size,0);
});
test('empty sequence completes without accessing either audio engine',async()=>{
 const h=harness();assert.equal(await h.api.playClips([]),true);assert.deepEqual(h.calls,[]);
});
