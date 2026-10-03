"use client";
import {useEffect,useRef,useState} from 'react';

/** Task audio: completion is recorded only by the real media ended event. */
export default function StudioAudio({src,heard,onComplete,allowSlow=true,replay=0,stopSignal=0}:{src:string;heard:boolean;onComplete:()=>void;allowSlow?:boolean;replay?:number;stopSignal?:number}) {
 const audio=useRef<HTMLAudioElement>(null);
 const [playing,setPlaying]=useState(false),[loading,setLoading]=useState(false),[error,setError]=useState(false),[rate,setRate]=useState(1),[progress,setProgress]=useState(0);
 const start=async()=>{const el=audio.current;if(!el)return;setError(false);setLoading(true);try{el.playbackRate=rate;await el.play();}catch{setError(true);setLoading(false);}};
 useEffect(()=>{const el=audio.current;return()=>{el?.pause();};},[]);
 useEffect(()=>{if(stopSignal)audio.current?.pause();},[stopSignal]);
 useEffect(()=>{if(!replay)return;const el=audio.current;if(el){el.currentTime=0;el.play().catch(()=>setError(true));}},[replay]);
 return <div className="pf-audio" data-playing={playing}>
  <audio ref={audio} src={src} preload="metadata" onPlaying={()=>{setError(false);setPlaying(true);setLoading(false);}} onPause={()=>setPlaying(false)} onWaiting={()=>setLoading(true)} onError={()=>{setError(true);setLoading(false);setPlaying(false);}} onTimeUpdate={()=>{const el=audio.current;if(el&&Number.isFinite(el.duration))setProgress(el.currentTime/el.duration);}} onEnded={()=>{setPlaying(false);setLoading(false);setProgress(1);onComplete();}}/>
  <button type="button" className="pf-listen" aria-label={playing?'Pausar audio':heard?'Otra vez':'Escuchar audio'} onClick={()=>{if(playing)audio.current?.pause();else void start();}}><span aria-hidden="true">{playing?'Ⅱ':heard?'↻':'▶'}</span><b>{loading?'Cargando…':playing?'Pausar':heard?'Otra vez':'Escuchar'}</b><span className="pf-audio-bars" aria-hidden="true"><i/><i/><i/><i/><i/></span></button>
  <div className="pf-audio-track" role="progressbar" aria-label="Reproducción" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress*100)}><span style={{width:`${progress*100}%`}}/></div>
  {heard&&allowSlow&&<div className="pf-speed" aria-label="Velocidad">{[.75,1].map(v=><button key={v} type="button" aria-pressed={rate===v} onClick={()=>{setRate(v);if(audio.current)audio.current.playbackRate=v;}}>{v===.75?'0.75× · más lento':'1×'}</button>)}</div>}
  {error&&<p role="alert" className="pf-audio-error">No se pudo reproducir. Prueba otra vez o abre el texto de apoyo.</p>}
 </div>;
}
