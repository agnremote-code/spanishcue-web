"use client";
import {useEffect,useRef,useState} from 'react';
import {encodeWav16k,measureSignal} from './audio-signal.mjs';

type Result={kind:string;message:string;transcript?:string};
export default function SpeechAttempt({level,activityId,text,produced,onComplete}:{level:string;activityId:string;text:string;produced:boolean;onComplete:()=>void}){
 const [phase,setPhase]=useState<'ready'|'recording'|'processing'|'result'|'fallback'>('ready');
 const [result,setResult]=useState<Result|null>(null),[recordingUrl,setRecordingUrl]=useState<string|null>(null),[playing,setPlaying]=useState(false);
 const recorder=useRef<MediaRecorder|null>(null),stream=useRef<MediaStream|null>(null),timer=useRef<ReturnType<typeof setTimeout>|null>(null),ownAudio=useRef<HTMLAudioElement>(null),url=useRef<string|null>(null),controller=useRef<AbortController|null>(null),active=useRef(true);
 const release=()=>{if(timer.current)clearTimeout(timer.current);stream.current?.getTracks().forEach(track=>track.stop());stream.current=null;};
 useEffect(()=>{active.current=true;return()=>{active.current=false;controller.current?.abort();if(recorder.current?.state==='recording')recorder.current.stop();release();if(url.current)URL.revokeObjectURL(url.current);};},[]);
 const replaceRecordingUrl=(next:string)=>{if(url.current)URL.revokeObjectURL(url.current);url.current=next;setRecordingUrl(next);};
 const analyze=async(blob:Blob)=>{
  if(blob.size<100){setResult({kind:'retry',message:'No escuchamos una frase completa. Probá otra vez.'});setPhase('result');return;}
  replaceRecordingUrl(URL.createObjectURL(blob));setPhase('processing');
  try{
   const context=new AudioContext();let decoded:AudioBuffer;
   try{decoded=await context.decodeAudioData(await blob.arrayBuffer());}finally{void context.close();}
   const samples=new Float32Array(decoded.length);
   for(let channel=0;channel<decoded.numberOfChannels;channel++){const data=decoded.getChannelData(channel);for(let i=0;i<data.length;i++)samples[i]+=data[i]/decoded.numberOfChannels;}
   const signal=measureSignal(samples,decoded.sampleRate);
   const wav=encodeWav16k(samples,decoded.sampleRate);
   if(samples.length/decoded.sampleRate<.35||signal.voicedMs<200){setResult({kind:'retry',message:'No escuchamos una frase completa. Probá otra vez.'});setPhase('result');return;}
   const body=new FormData();body.set('level',level);body.set('activityId',activityId);body.set('audio',new File([wav],'attempt.wav',{type:'audio/wav'}));body.set('signal',JSON.stringify(signal));
   controller.current=new AbortController();
   const response=await fetch('/api/phonetics/speech-attempt',{method:'POST',body,signal:controller.current.signal});
   const data=await response.json() as Result;
   if(!response.ok)throw Error(data.message||'No pudimos analizar la toma.');
   setResult(data);setPhase(data.kind==='unavailable'?'fallback':'result');
   if(['continuous','manual'].includes(data.kind)&&!produced)onComplete();
  }catch(error){if(error instanceof DOMException&&error.name==='AbortError')return;setResult({kind:'unavailable',message:'No pudimos analizar tu toma. Escuchala y practicala con tu profe.'});setPhase('fallback');}
 };
 const start=async()=>{
  if(!navigator.mediaDevices?.getUserMedia||!globalThis.MediaRecorder){setResult({kind:'unavailable',message:'No pudimos usar el micrófono.'});setPhase('fallback');return;}
  try{
   stream.current=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:false});
   if(!active.current){release();return;}
   const chunks:BlobPart[]=[],media=new MediaRecorder(stream.current);
   recorder.current=media;
   media.ondataavailable=event=>{if(event.data.size)chunks.push(event.data);};
   media.onstop=()=>{release();if(active.current)void analyze(new Blob(chunks,{type:media.mimeType||'audio/webm'}));};
   media.onerror=()=>{release();setResult({kind:'unavailable',message:'No pudimos usar el micrófono.'});setPhase('fallback');};
   setResult(null);setPhase('recording');media.start();timer.current=setTimeout(()=>{if(media.state==='recording')media.stop();},29000);
  }catch{release();setResult({kind:'unavailable',message:'No pudimos usar el micrófono.'});setPhase('fallback');}
 };
 const stop=()=>{if(recorder.current?.state==='recording')recorder.current.stop();};
 const replay=async()=>{const audio=ownAudio.current;if(!audio)return;if(!audio.paused){audio.pause();return;}audio.currentTime=0;try{await audio.play();}catch{setPlaying(false);}};
 const retry=()=>{controller.current?.abort();ownAudio.current?.pause();setPlaying(false);setResult(null);setPhase('ready');};
 return <section className="pf-voice" aria-label="Practicá con tu voz">
  <p className="pf-eyebrow">AHORA VOS</p><p className="pf-voice-text">{text}</p>
  {phase==='ready'&&<button type="button" className="pf-primary pf-mic" onClick={()=>void start()}>🎙 DECILO</button>}
  {phase==='recording'&&<div className="pf-recording" role="status"><span>● GRABANDO…</span><button type="button" className="pf-primary" onClick={stop}>DETENER</button></div>}
  {phase==='processing'&&<p role="status">Analizando tu frase…</p>}
  {(phase==='result'||phase==='fallback')&&<div className={`pf-voice-result pf-voice-${result?.kind}`} role="status" aria-live="polite"><b>{result?.kind==='continuous'?'✓ BIEN':result?.kind==='pause'?'⚠️ CASI':result?.kind==='retry'?'PROBÁ OTRA VEZ':'ESCUCHÁ TU TOMA'}</b><p>{result?.message}</p>{result?.transcript&&<small>{result.kind==='uncertain'?'Creemos que dijiste':'SpanishCue escuchó'}: «{result.transcript}»</small>}</div>}
  {recordingUrl&&<><audio ref={ownAudio} src={recordingUrl} onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)}/><button type="button" className="pf-own-audio" onClick={()=>void replay()}>{playing?'Ⅱ PAUSAR TU VOZ':'▶ TU GRABACIÓN'}</button></>}
  {(phase==='result'||phase==='fallback')&&<div className="pf-voice-actions"><button type="button" className={result?.kind==='continuous'||result?.kind==='manual'?'':'pf-primary'} onClick={retry}>↻ PROBAR DE NUEVO</button>{phase==='fallback'&&<button type="button" onClick={()=>{if(!produced)onComplete();setPhase('result');setResult({kind:'manual',message:'Practicá con tu profe. No hay corrección automática en este intento.'});}}>PRACTICAR SIN CORRECCIÓN AUTOMÁTICA</button>}{phase==='result'&&!produced&&result?.kind!=='manual'&&result?.kind!=='continuous'&&<button type="button" onClick={()=>{onComplete();setResult({kind:'manual',message:'Escuchá tu toma y practicala con tu profe. No se confirmó esta unión automáticamente.'});}}>PRACTICAR CON TU PROFE</button>}</div>}
  <small className="pf-privacy">La grabación se usa solo en este intento. Si hay corrección automática, se envía temporalmente a Microsoft Speech. No se guarda en tu cuenta.</small>
 </section>;
}
