import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { runInNewContext } from 'node:vm';
const built = await build({entryPoints:['app/autoestudio/engine/speech.ts'],bundle:true,format:'cjs',platform:'node',write:false});
function harness({voices=[{lang:"es-MX",name:"Native"}],paused=false,available=true}={}) {
  const calls=[],warnings=[],timers=new Map(),listeners=new Map(); let id=0;
  class Utterance { constructor(text){this.text=text;} }
  class Audio { constructor(){this.paused=true;} play(){this.paused=false;calls.push(['play',this]);return Promise.resolve();} pause(){this.paused=true;} }
  const synth={voices,paused,pending:false,speaking:false,
    getVoices(){return this.voices;},addEventListener(name,fn){listeners.set(name,fn);},removeEventListener(name){listeners.delete(name);},
    speak(u){calls.push(['speak',u]);this.pending=true;},cancel(){calls.push(['cancel']);this.pending=false;this.speaking=false;},resume(){calls.push(['resume']);this.paused=false;}};
  const m={exports:{}};
  runInNewContext(built.outputFiles[0].text,{module:m,exports:m.exports,window:available?{speechSynthesis:synth}:{},SpeechSynthesisUtterance:Utterance,Audio,
    console:{warn:(...args)=>warnings.push(args)},setTimeout:fn=>{timers.set(++id,fn);return id;},clearTimeout:id=>timers.delete(id)});
  return {api:m.exports,synth,calls,warnings,timers,listeners,utterances:()=>calls.filter(c=>c[0]==='speak').map(c=>c[1])};
}
const clips=[{text:'Hola'},{text:'Hasta mañana'}];
test('first tap queues every utterance synchronously, in Spanish, with the exact requested rate',async()=>{
 const h=harness(); const done=h.api.playClips(clips,{rate:0.7});
 assert.equal(h.utterances().length,2); assert.equal(h.utterances()[0].lang,'es-MX');assert.equal(h.utterances()[0].rate,0.7);
 h.utterances()[0].onstart();h.utterances()[0].onend();h.utterances()[1].onstart();h.utterances()[1].onend();assert.equal(await done,true);
});
test('empty voices reject without default speech; voiceschanged supplies the requested voice for a later tap',async()=>{
 const h=harness({voices:[]});h.api.warmVoices();h.api.warmVoices();assert.equal(h.listeners.size,1);
 await assert.rejects(h.api.playClips([clips[0]]),/speech-spanish-voice-unavailable/);assert.equal(h.utterances().length,0);
 const voice={lang:'es_ES',name:'Monica'};h.synth.voices=[{lang:'en-US',name:'English'},voice];h.listeners.get('voiceschanged')();
 const second=h.api.playClips([{text:'Hola',voice:'es-ES-f'}]);assert.equal(h.utterances()[0].voice,voice);h.utterances()[0].onend();await second;
});
test('paused engine resumes inside playback and does not cancel an idle first tap',async()=>{
 const h=harness({paused:true});const done=h.api.playClips([clips[0]]);
 assert.deepEqual(h.calls.map(c=>c[0]),['resume','speak']);h.utterances()[0].onend();await done;
});
test('replacement settles the previous promise even when cancel emits no event; stale events cannot stop the new run',async()=>{
 const h=harness();const first=h.api.playClips([clips[0]]);const stale=h.utterances()[0].onerror;
 const second=h.api.playClips([clips[1]]);assert.equal(await first,false);stale({error:'interrupted'});
 assert.equal(h.warnings.length,0);h.utterances()[1].onend();assert.equal(await second,true);
});
test('stop settles all queued speech and repeated playback succeeds',async()=>{
 const h=harness();for(let i=0;i<3;i++){const done=h.api.playClips(clips);h.api.stopAudio();assert.equal(await done,false);assert.equal(h.timers.size,0);}
 const done=h.api.playClips([clips[0]]);h.utterances().at(-1).onend();assert.equal(await done,true);
});
test('synthesis failure rejects, logs diagnostics without text, and permits retry',async()=>{
 const h=harness();const failed=h.api.playClips([clips[0]]);h.utterances()[0].onerror({error:'language-unavailable'});
 await assert.rejects(failed,/speech-language-unavailable/);assert.equal(h.warnings.length,1);assert.ok(!JSON.stringify(h.warnings).includes('Hola'));
 const next=h.api.playClips([clips[0]]);h.utterances()[1].onend();assert.equal(await next,true);
});
test('unsupported synthesis and a silent engine become actionable failures, not success',async()=>{
 const absent=harness({available:false});await assert.rejects(absent.api.playClips(clips),/speech-unavailable/);
 const h=harness();const stalled=h.api.playClips(clips);[...h.timers.values()][0]();await assert.rejects(stalled,/audio-start-timeout/);assert.equal(h.timers.size,0);
});
test('counts a listen only when playback actually starts',async()=>{
 const h=harness();let starts=0;const done=h.api.playClips(clips,{onStart:()=>starts++});assert.equal(starts,0);
 h.utterances()[0].onstart();h.utterances()[0].onend();h.utterances()[1].onstart();assert.equal(starts,1);h.utterances()[1].onend();await done;
});
test('recorded audio reuses its unlocked element, propagates rejection, and accepts 0.7x',async()=>{
 const h=harness();const {audioKey}=await import('../app/autoestudio/curriculum/audio-key.ts');
 const audio=Object.fromEntries(clips.map((clip,i)=>[audioKey(clip.text,clip.voice),`/audio/${i}.mp3`]));
 const done=h.api.playClips(clips,{audio,rate:0.7});const el=h.calls[0][1];assert.equal(el.playbackRate,0.7);el.onplaying();el.onended();
 assert.equal(h.calls[1][1],el);el.onended();assert.equal(await done,true);
 const failed=h.api.playClips(clips,{audio});el.error={code:4};el.onerror();await assert.rejects(failed,/media-4/);
});

for (const locale of ['es-MX','es-AR','es-CO','es-ES','es-US']) {
 test(`exact ${locale} beats every fallback regardless of voice list order`,async()=>{
  const native={lang:locale,name:'Native'};
  const h=harness({voices:[{lang:'en-US',name:'English'},{lang:'es-US',name:'Google español de Estados Unidos'},...['es-MX','es-CO','es-AR','es-ES'].filter(x=>x!==locale).map(lang=>({lang,name:'Other'})),native]});
  const done=h.api.playClips([{text:'Hola',voice:`${locale}-f`}]);
  assert.equal(h.utterances()[0].voice.lang,locale);h.utterances()[0].onend();await done;
 });
}
const nativeOrder=['es-MX','es-CO','es-AR','es-CL','es-PE','es-UY','es-VE'];
for(let i=0;i<nativeOrder.length;i++){
 test(`Latin fallback priority selects ${nativeOrder[i]} before later locales and never es-US`,async()=>{
  const voices=[{lang:'es-US',name:'Google español de Estados Unidos'},...nativeOrder.slice(i).reverse().map(lang=>({lang,name:'Native'}))];
  const h=harness({voices});const done=h.api.playClips([{text:'Hola',voice:'es-BO-f'}]);
  assert.equal(h.utterances()[0].voice.lang,nativeOrder[i]);h.utterances()[0].onend();await done;
 });
}
for(const voices of [[],[{lang:'en-US',name:'English'}],[{lang:'es-US',name:'Google español de Estados Unidos'}],[{lang:'en-US',name:'Español'}]]){
 test(`rejects unavailable native voices without speaking: ${JSON.stringify(voices)}`,async()=>{
  const h=harness({voices});const done=h.api.playClips([{text:'Hola',voice:'es-MX-f'}]);
  const rejected=assert.rejects(done,/speech-spanish-voice-unavailable/);
  for(const u of h.utterances())u.onend?.();
  await rejected;assert.equal(h.utterances().length,0);
 });
}
test('es-ES requires a Spain voice and does not silently replace its variety',async()=>{
 const h=harness({voices:[{lang:'es-MX',name:'Mexican'}]});const done=h.api.playClips([{text:'Hola',voice:'es-ES-f'}]);
 const rejected=assert.rejects(done,/speech-spanish-voice-unavailable/);for(const u of h.utterances())u.onend?.();await rejected;assert.equal(h.utterances().length,0);
});
test('default voice excludes es-US, and underscore/case tags normalize for exact matching',async()=>{
 const h=harness({voices:[{lang:'es-US',name:'Google español de Estados Unidos'},{lang:'ES_mx',name:'Native'}]});
 const done=h.api.playClips([{text:'Hola'}]);assert.equal(h.utterances()[0].voice.lang,'ES_mx');h.utterances()[0].onend();await done;
});
