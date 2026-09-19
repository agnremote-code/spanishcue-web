"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { SpanishCueBrand } from "../SpanishCueBrand";
import "./play-mode.css";

export type PlayStage = { label: string; short: string; minutes: number; color: string };
export type PlayPowerUp = readonly [label: string, prompt: string];

const POWER_UPS = [
  ["¿POR QUÉ?", "¿Por qué esa opción funciona mejor para vos?"],
  ["EJEMPLO", "¿Podés dar un ejemplo concreto de lo que decís?"],
  ["¿Y VOS?", "¿Cómo aparece esta elección en tu propia vida?"],
  ["COMPARÁ", "¿Cuál es la diferencia más importante entre las dos opciones?"],
  ["CAMBIO", "Imaginá que tu opción cuesta el doble. ¿La mantenés?"],
  ["NO ESTOY DE ACUERDO", "No estoy convencido: creo que la otra opción es más práctica. Defendé la tuya."],
  ["CONTAME MÁS", "¿Qué es lo más importante para vos de esa opción?"],
  ["PASADO", "¿Alguna vez elegiste algo parecido? ¿Qué pasó?"],
  ["FUTURO", "¿Creés que elegirías lo mismo dentro de diez años?"],
  ["VENTAJA", "¿Cuál es la mayor ventaja de la opción que elegiste?"],
  ["DESVENTAJA", "¿Qué desventaja aceptarías y cuál no?"],
  ["¿SIEMPRE?", "¿Elegirías lo mismo en cualquier situación?"],
  ["EXCEPCIÓN", "¿En qué caso elegirías exactamente lo contrario?"],
] as const satisfies readonly PlayPowerUp[];

const SITUATION_POWER_UPS = [
  ["¿POR QUÉ?", "¿Por qué reaccionarías así y no de otra manera?"],
  ["EJEMPLO", "¿Te pasó alguna vez algo parecido? Contá qué ocurrió."],
  ["¿Y VOS?", "¿Qué harías realmente vos en esta situación?"],
  ["COMPARÁ", "Compará tu reacción con la de alguien más directo o más paciente."],
  ["CAMBIO", "Ahora la otra persona es alguien muy cercano. ¿Cambia tu respuesta?"],
  ["NO ESTOY DE ACUERDO", "No estoy convencido: tu solución puede crear otro problema. Defendela o cambiala."],
  ["CONTAME MÁS", "¿Qué dirías exactamente y qué esperás que pase después?"],
  ["PASADO", "¿Te pasó alguna vez algo parecido? ¿Cómo terminó?"],
  ["FUTURO", "¿Creés que reaccionarías igual dentro de diez años?"],
  ["VENTAJA", "¿Cuál es la principal ventaja de tu solución?"],
  ["DESVENTAJA", "¿Qué problema podría provocar tu decisión?"],
  ["¿SIEMPRE?", "¿Reaccionarías así en cualquier contexto?"],
  ["EXCEPCIÓN", "¿En qué caso harías exactamente lo contrario?"],
] as const;

const SUPPORT = ["Yo elegiría...", "Para mí...", "El problema es que...", "Una ventaja es...", "Una desventaja es...", "Depende de...", "Yo haría...", "Si fuera yo...", "En mi experiencia..."];

export default function PlayShell({lesson,title,stages,stage,onStageChange,children,powerMode="choice",extraPowerUps=[],supportLevel="B1"}:{lesson:string;title:string;stages:PlayStage[];stage:number;onStageChange:(stage:number)=>void;children:ReactNode;powerMode?:"choice"|"situation";extraPowerUps?:readonly PlayPowerUp[];supportLevel?:string}){
  const [seconds,setSeconds]=useState(45*60);
  const [running,setRunning]=useState(false);
  const [power,setPower]=useState<string|null>(null);
  const [support,setSupport]=useState(false);
  useEffect(()=>{ if(!running) return; const id=window.setInterval(()=>setSeconds(value=>value>0?value-1:0),1000); return()=>window.clearInterval(id); },[running]);
  const clock=useMemo(()=>`${String(Math.floor(seconds/60)).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`,[seconds]);
  const current=stages[stage];
  const powerUps=powerMode==="situation"?SITUATION_POWER_UPS:POWER_UPS;
  return <main className="play-mode" style={{"--play-accent":current.color} as React.CSSProperties}>
    <header className="play-topbar">
      <Link href="/" className="play-brand"><SpanishCueBrand variant="compact" tone="dark"/><i>MODO PLAY</i></Link>
      <div className="play-clock"><b>{clock}</b><button onClick={()=>setRunning(value=>!value)}>{running?"PAUSA":"INICIAR"}</button><button aria-label="Reiniciar reloj" onClick={()=>{setRunning(false);setSeconds(45*60)}}>↺</button></div>
    </header>
    <section className="play-progress" aria-label="Progreso de la clase">
      <div className="play-lesson-id"><small>{lesson}</small><strong>{title}</strong></div>
      <nav>{stages.map((item,index)=><button key={item.label} className={index===stage?"active":index<stage?"done":""} onClick={()=>onStageChange(index)} aria-current={index===stage?"step":undefined}><i>{index<stage?"✓":index+1}</i><span>{item.short}</span><small>{item.minutes} min</small></button>)}</nav>
    </section>
    <section className="play-stage-head"><div><small>NIVEL {stage+1} · {current.minutes} MIN</small><h1>{current.label}</h1></div><span>{stage+1} / {stages.length}</span></section>
    <section className="play-surface">{children}</section>
    <aside className="teacher-tools" aria-label="Power-ups del profesor">
      <div className="teacher-title"><span>PROFESOR</span><b>POWER-UPS</b></div>
      <div className="power-list">{[...powerUps,...extraPowerUps].map(([label,prompt])=><button key={label} onClick={()=>setPower(prompt)}>{label}</button>)}</div>
      <button className="support-toggle" onClick={()=>setSupport(value=>!value)}>AYUDA {supportLevel} {support?"−":"+"}</button>
    </aside>
    {power&&<div className="power-toast" role="status"><small>POWER-UP</small><b>{power}</b><button aria-label="Cerrar" onClick={()=>setPower(null)}>×</button></div>}
    {support&&<section className="support-drawer"><div><small>PARA ARRANCAR</small><b>Elegí una frase. Después seguí con tus palabras.</b></div><p>{SUPPORT.map(item=><span key={item}>{item}</span>)}</p><button onClick={()=>setSupport(false)}>CERRAR</button></section>}
  </main>;
}

export function CardNav({index,total,onPrevious,onNext}:{index:number;total:number;onPrevious:()=>void;onNext:()=>void}){
  return <div className="card-nav"><button onClick={onPrevious} disabled={index===0}>← ANTERIOR</button><span><b>{index+1}</b> / {total}</span><button onClick={onNext}>{index===total-1?"VOLVER A EMPEZAR":"SIGUIENTE →"}</button></div>;
}

export function SpeakPrompt({children,tone="blue"}:{children:ReactNode;tone?:"blue"|"coral"|"lime"}){
  return <div className={`speak-prompt ${tone}`}><small>AHORA HABLÁ</small><strong>{children}</strong></div>;
}
