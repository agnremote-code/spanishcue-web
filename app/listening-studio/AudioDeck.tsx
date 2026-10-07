"use client";

import {useEffect,useRef,useState,type CSSProperties} from "react";
import "./audio-deck.css";

type AudioDeckProps={
  src:string;
  bilingual?:boolean;
  title:string;
  channel:string;
  accent?:string;
  allowSlow?:boolean;
  onComplete?:()=>void;
  showWaveform?:boolean;
  playingMessage?:string;
};

function timeLabel(value:number){
  const safe=Math.max(0,Math.floor(value||0));
  return `${Math.floor(safe/60)}:${String(safe%60).padStart(2,"0")}`;
}

export default function AudioDeck({src,bilingual=false,title,channel,accent="#67e8f9",allowSlow=false,onComplete,showWaveform=true,playingMessage="Escucha sin leer. La transcripción sigue oculta."}:AudioDeckProps){
  const ref=useRef<HTMLAudioElement>(null);
  const [duration,setDuration]=useState(0);
  const [elapsed,setElapsed]=useState(0);
  const [playing,setPlaying]=useState(false);
  const [error,setError]=useState(false);
  const [plays,setPlays]=useState(0);
  const [rate,setRate]=useState(1);

  useEffect(()=>{
    const audio=ref.current;
    if(!audio)return;
    audio.pause();
    audio.load();
    setDuration(0);setElapsed(0);setPlaying(false);setError(false);setPlays(0);setRate(1);
  },[src]);
  useEffect(()=>{const audio=ref.current;return()=>audio?.pause();},[]);
  useEffect(()=>{if(ref.current)ref.current.playbackRate=rate;},[rate]);

  const toggle=()=>{
    const audio=ref.current;if(!audio)return;
    if(audio.paused){if(duration&&audio.currentTime>=duration-.15)audio.currentTime=0;audio.playbackRate=rate;void audio.play().catch(()=>setError(true));}
    else audio.pause();
  };
  const replay=()=>{
    const audio=ref.current;if(!audio)return;
    audio.currentTime=0;setElapsed(0);audio.playbackRate=rate;void audio.play().catch(()=>setError(true));
  };
  const seek=(value:number)=>{const audio=ref.current;if(!audio)return;audio.currentTime=value;setElapsed(value);};
  const retry=()=>{const audio=ref.current;if(!audio)return;setError(false);setPlaying(false);setDuration(0);setElapsed(0);audio.load();};
  const progress=duration?Math.min(100,(elapsed/duration)*100):0;

  return <section className="audio-deck" style={{"--audio-accent":accent} as CSSProperties}>
    <audio ref={ref} src={src} preload="metadata" onLoadedMetadata={event=>{setDuration(event.currentTarget.duration);setError(false);}} onTimeUpdate={event=>setElapsed(event.currentTarget.currentTime)} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>{setPlaying(false);setElapsed(duration);setPlays(value=>value+1);onComplete?.();}} onError={()=>{setError(true);setPlaying(false);}}/>
    <header><div><small>{channel}</small><h2>{title}</h2></div><span className={playing?"live":""}>{error?(bilingual?"ERROR / AUDIO ERROR":"SIN SEÑAL"):playing?(bilingual?"SONANDO / PLAYING":"EN REPRODUCCIÓN"):plays?(bilingual?`${plays} ESCUCHAS / LISTENS`:`${plays} ESCUCHA${plays>1?"S":""}`):(bilingual?"LISTO / READY":"LISTO")}</span></header>
    {showWaveform&&<div className={`audio-wave ${playing?"moving":""}`} aria-hidden="true">{Array.from({length:38},(_,index)=><i key={index} style={{"--bar":`${12+((index*17)%34)}%`,"--delay":`${(index%9)*-.08}s`} as CSSProperties}/>)}</div>}
    <div className="audio-progress"><span>{timeLabel(elapsed)}</span><input aria-label={bilingual?`Posición / Position: ${title}`:`Posición de ${title}`} type="range" min="0" max={duration||1} step=".1" value={Math.min(elapsed,duration||1)} onChange={event=>seek(Number(event.target.value))}/><span>{duration?timeLabel(duration):"–:––"}</span></div>
    <div className="audio-state"><i style={{width:`${progress}%`}}/><span>{error?(bilingual?"No se pudo reproducir. Pulsa Reintentar. / Audio failed. Press Retry.":"No se pudo reproducir el audio. Pulsa Reintentar."):playing?playingMessage:duration?(bilingual?"Audio listo. Pulsa PLAY. / Audio ready. Press PLAY.":"Audio preparado. No se reproduce automáticamente."):(bilingual?"Cargando audio… / Loading audio…":"Cargando audio…")}</span></div>
    <footer><button className="audio-play" disabled={!duration||error} onClick={toggle}>{playing?(bilingual?"Ⅱ PAUSA / Pause":"Ⅱ  PAUSA"):"▶  PLAY"}</button><button disabled={!duration||error} onClick={replay}>{bilingual?"↺ REPETIR / Repeat":"↺ REPETIR"}</button>{error&&<button onClick={retry}>{bilingual?"REINTENTAR / Retry":"REINTENTAR"}</button>}{allowSlow&&<div className="audio-rate" aria-label={bilingual?"Velocidad / Speed":"Velocidad"}><button className={rate===.75?"active":""} onClick={()=>setRate(.75)}>0.75×</button><button className={rate===1?"active":""} onClick={()=>setRate(1)}>1×</button></div>}</footer>
  </section>;
}
