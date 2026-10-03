"use client";
import {useEffect,useRef,useState} from 'react';
import {createMicrophoneCapture,decodeWav16k,microphoneErrorMessage} from './audio-signal.mjs';

type Result={kind:string;message:string;transcript?:string;confident?:boolean;boundary?:number;pauseMs?:number;durationMs?:number;confidence?:number};
type Capture=ReturnType<typeof createMicrophoneCapture>;
export default function SpeechAttempt({level,activityId,text,produced,onComplete,onModel,onCapture,teacher=false}:{level:string;activityId:string;text:string;produced:boolean;onComplete:()=>void;onModel?:()=>void;onCapture?:()=>void;teacher?:boolean}){
 const [phase,setPhase]=useState<'ready'|'requesting'|'recording'|'processing'|'result'|'fallback'>('ready');
 const [result,setResult]=useState<Result|null>(null),[recordingUrl,setRecordingUrl]=useState<string|null>(null),[playing,setPlaying]=useState(false);
 const [input,setInput]=useState({level:0,silent:false,seconds:0});
 const capture=useRef<Capture|null>(null),timer=useRef<ReturnType<typeof setTimeout>|null>(null),watchdog=useRef<ReturnType<typeof setTimeout>|null>(null),ownAudio=useRef<HTMLAudioElement>(null),url=useRef<string|null>(null),controller=useRef<AbortController|null>(null),generation=useRef(0),active=useRef(true);
 const clearTimers=()=>{if(timer.current)clearTimeout(timer.current);if(watchdog.current)clearTimeout(watchdog.current);};
 const clearRecording=()=>{ownAudio.current?.pause();if(url.current)URL.revokeObjectURL(url.current);url.current=null;setRecordingUrl(null);setPlaying(false);};
 useEffect(()=>{const attempts=generation;active.current=true;return()=>{active.current=false;attempts.current++;controller.current?.abort();capture.current?.cancel();clearTimers();if(url.current)URL.revokeObjectURL(url.current);};},[]);
 const valid=(attempt:number)=>active.current&&generation.current===attempt;
 const fail=(message:string)=>{setResult({kind:'unavailable',message});setPhase('fallback');};
 const submit=async(wav:Uint8Array,attempt:number)=>{
  if(!valid(attempt))return;
  const decoded=decodeWav16k(wav);
  const blob=new Blob([wav as Uint8Array<ArrayBuffer>],{type:'audio/wav'});url.current=URL.createObjectURL(blob);setRecordingUrl(url.current);
  if(decoded.durationMs<350){setResult({kind:'retry',message:'La toma es demasiado corta. Graba la frase completa.'});setPhase('result');return;}
  if(decoded.signal.voicedMs<200){setResult({kind:'retry',message:'No escuchamos tu voz. Comprueba el micrófono, acércate y vuelve a intentarlo.'});setPhase('result');return;}
  setPhase('processing');controller.current=new AbortController();const abort=controller.current;
  const timeout=setTimeout(()=>abort.abort(),22000);
  try{
   const body=new FormData();body.set('level',level);body.set('activityId',activityId);body.set('audio',new File([blob],'attempt.wav',{type:'audio/wav'}));
   const response=await fetch('/api/phonetics/speech-attempt',{method:'POST',body,signal:abort.signal});
   const data=await response.json() as Result;
   if(!valid(attempt))return;
   if(!response.ok){fail(response.status===401?'Tu sesión no tiene acceso PRO. Inicia sesión y vuelve a intentarlo.':data.message||'No pudimos enviar tu toma. Comprueba la conexión y vuelve a intentarlo.');return;}
   setResult(data);setPhase(data.kind==='unavailable'?'fallback':'result');
   if(data.kind==='continuous'&&!produced)onComplete();
  }catch(error){if(!valid(attempt))return;fail(error instanceof DOMException&&error.name==='AbortError'?'El reconocimiento tardó demasiado. Vuelve a intentarlo.':'No pudimos enviar tu voz. Comprueba la conexión y vuelve a intentarlo.');}finally{clearTimeout(timeout);}
 };
 const stop=async()=>{
  if(!capture.current)return;clearTimers();setPhase('processing');const attempt=generation.current,current=capture.current;capture.current=null;
  try{const take=await current.stop();await submit(take.wav,attempt);}catch{if(valid(attempt))fail('No pudimos completar la grabación. Comprueba el micrófono y vuelve a intentarlo.');}
 };
 const start=async()=>{
  const attempt=++generation.current;onCapture?.();clearRecording();setResult(null);setPhase('requesting');setInput({level:0,silent:false,seconds:0});
  let lastVoice=0;
  const current=createMicrophoneCapture({onLevel:(rms:number,elapsed:number)=>{
   if(!valid(attempt))return;if(rms>=.012)lastVoice=elapsed;
   if(watchdog.current)clearTimeout(watchdog.current);
   watchdog.current=setTimeout(()=>{if(valid(attempt))setInput(old=>({...old,level:0,silent:true}));},1500);
   setInput({level:Math.min(100,rms*600),silent:elapsed-lastVoice>=1200,seconds:Math.floor(elapsed/1000)});
  },onError:()=>{if(valid(attempt)){clearTimers();capture.current=null;fail('La captura se interrumpió. Comprueba el micrófono y vuelve a intentarlo.');}}});
  capture.current=current;
  try{
   await current.start();if(!valid(attempt)){current.cancel();return;}
   setPhase('recording');watchdog.current=setTimeout(()=>{if(valid(attempt))setInput(old=>({...old,silent:true}));},1500);
   timer.current=setTimeout(()=>void stop(),29000);
  }catch(error){if(!valid(attempt))return;capture.current=null;fail(microphoneErrorMessage(error));}
 };
 const replay=async()=>{const audio=ownAudio.current;if(!audio)return;if(!audio.paused){audio.pause();return;}audio.currentTime=0;try{await audio.play();}catch{setPlaying(false);setResult(old=>({...old,kind:old?.kind||'retry',message:'No se pudo reproducir tu voz. Vuelve a pulsar «Mi voz».'}));}};
 const reset=()=>{generation.current++;controller.current?.abort();capture.current?.cancel();capture.current=null;clearTimers();clearRecording();setResult(null);setPhase('ready');};
 const done=phase==='result'||phase==='fallback';
 const marked=(joined:boolean)=>text.split(/\s+/).map((word,i)=>`${word}${i===result?.boundary?(joined?'‿':' | '):' '}`).join('').trim();
 return <section className="pf-voice" aria-label="Practica con tu voz" aria-busy={phase==='processing'}>
  <p className="pf-eyebrow">AHORA TÚ</p><p className="pf-voice-text">{text}</p>
  {phase==='ready'&&<button type="button" className="pf-primary pf-mic" onClick={()=>void start()}>🎙 DILO</button>}
  {phase==='requesting'&&<div role="status"><p>Permite el acceso al micrófono para empezar.</p><button type="button" onClick={reset}>Cancelar</button></div>}
  {phase==='recording'&&<div className="pf-recording"><span role="status">● GRABANDO · {input.seconds}s</span><meter aria-label="Nivel real del micrófono" min={0} max={100} value={input.level}/><p role="status">{input.silent?'No te estamos escuchando. Acércate al micrófono y comprueba que esté activado.':'Di la frase completa y pulsa Detener.'}</p><button type="button" className="pf-primary" onClick={()=>void stop()}>DETENER</button></div>}
  {phase==='processing'&&<p role="status">ANALIZANDO…</p>}
  {done&&<div className={`pf-voice-result pf-voice-${result?.kind}`} role="status" aria-live="polite">
   <b>{result?.kind==='continuous'?'✓ MUY BIEN':result?.kind==='pause'?'⚠️ CASI':result?.kind==='mismatch'?'ESCUCHAMOS OTRAS PALABRAS':result?.kind==='uncertain'?'VUELVE A INTENTARLO':result?.kind==='unavailable'?'RECONOCIMIENTO NO DISPONIBLE':'ESCUCHA TU TOMA'}</b>
   {result?.transcript&&<p><small>{result.confident?'ESCUCHAMOS':'Creemos que dijiste'}:</small> «{result.transcript}»</p>}
   {result?.kind==='pause'&&<p className="pf-boundary">{marked(false)}</p>}
   <p>{result?.message}</p>
   {(result?.kind==='pause'||result?.kind==='continuous')&&<p className="pf-boundary">{marked(true)}</p>}
  </div>}
  {recordingUrl&&<audio ref={ownAudio} src={recordingUrl} onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)}/>}
  {done&&<div className="pf-voice-actions">
   {recordingUrl&&<button type="button" className="pf-own-audio" onClick={()=>void replay()}>{playing?'Ⅱ PAUSAR MI VOZ':'▶ ESCUCHAR MI VOZ'}</button>}
   {onModel&&<button type="button" onClick={()=>{ownAudio.current?.pause();onModel();}}>▶ ESCUCHAR MODELO</button>}
   <button type="button" className="pf-primary" onClick={()=>{reset();void start();}}>🎙 PROBAR DE NUEVO</button>
   {(teacher||result?.kind==='manual')&&result?.kind!=='continuous'&&<button type="button" onClick={()=>{onComplete();setResult({kind:'manual',message:'Práctica confirmada manualmente por el profesor. Sin corrección automática.'});}}>Continuar con devolución del profesor</button>}
  </div>}
  {teacher&&done&&result?.boundary!==undefined&&<details className="pf-teacher-note"><summary>Medición del intento</summary><p>Unión: {result.boundary+1} · Pausa: {result.pauseMs} ms · Duración: {result.durationMs} ms · Confianza del proveedor: {result.confidence}</p></details>}
  <small className="pf-privacy">Tu voz se envía temporalmente a Microsoft Speech para transcribirla. La grabación se conserva solo durante este intento; no se guarda en tu cuenta.</small>
 </section>;
}
