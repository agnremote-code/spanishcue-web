"use client";

import Link from "next/link";
import {useState} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import content from "./content.json";
import "./style.css";
import { SpanishCueBrand } from "../SpanishCueBrand";

type Stage="calls"|"final";

export default function RadioMedianoche(){
  const [stage,setStage]=useState<Stage>("calls");
  const [activeIndex,setActiveIndex]=useState(0);
  const [heard,setHeard]=useState<string[]>([]);
  const [answers,setAnswers]=useState<Record<string,number>>({});
  const [hostOpen,setHostOpen]=useState<string[]>([]);
  const [believable,setBelievable]=useState<string>("");
  const [transcript,setTranscript]=useState(false);
  const [support,setSupport]=useState(false);
  const [finalIndex,setFinalIndex]=useState(0);
  const call=content.calls[activeIndex];
  const isHeard=heard.includes(call.id);
  const answer=answers[call.id];
  const chooseCall=(index:number)=>{setActiveIndex(index);setTranscript(false)};

  return <main className="rm-app">
    <header className="rm-top"><Link href="/">← BIBLIOTECA</Link><Link href="/" className="rm-brand"><SpanishCueBrand variant="compact" tone="light" context="RADIO" /></Link><span><i/> B1 · EN DIRECTO</span></header>
    <div className="rm-clock"><b>00:{String(8+activeIndex*9).padStart(2,"0")}</b><span>PROGRAMA 45 MIN</span></div>

    {stage==="calls"&&<section className="rm-studio">
      <div className="rm-background"><img src="/listening-premium/radio-medianoche.webp" alt="Presentadora adulta en un estudio de radio nocturno"/></div>
      <header className="rm-intro"><span>CINCO LLAMADAS · CINCO HISTORIAS · 33 MIN</span><h1>Radio después<br/><em>de medianoche</em></h1><p>Primero anticipás. Después escuchás la historia y preparás tu propia pregunta antes de oír a la presentadora.</p></header>
      <aside className="rm-lines"><header><span>LÍNEAS ENTRANTES</span><b>{heard.length}/5</b></header>{content.calls.map((item,index)=><button key={item.id} onClick={()=>chooseCall(index)} className={`${index===activeIndex?"active":""} ${heard.includes(item.id)?"heard":""}`}><i>0{index+1}</i><p><b>{item.title}</b><small>{item.caller} · {item.variety}</small></p><span>{heard.includes(item.id)?"AL AIRE":"ESPERA"}</span></button>)}</aside>
      <article className="rm-desk"><header><div><span>LLAMADA {activeIndex+1} · {call.mood}</span><h2>{call.title}</h2><p>{call.caller} · voz de {call.variety}</p></div><b className={isHeard?"heard":""}>{isHeard?"REC":"NUEVA"}</b></header><div className="rm-predict"><small>ANTES DE CONTESTAR</small><p>{call.prediction}</p></div><AudioDeck key={call.id} src={call.file} title={`Historia de ${call.caller}`} channel={`LLAMADA ENTRANTE · ${call.variety}`} accent="#ff5a74" allowSlow onComplete={()=>setHeard(previous=>previous.includes(call.id)?previous:[...previous,call.id])}/>
        {!isHeard?<div className="rm-sealed">La historia y las preguntas se abren al terminar la llamada.</div>:<section className="rm-listen-task"><small>PRIMERA + SEGUNDA ESCUCHA</small><h2>{call.gist}</h2><div>{call.options.map((option,index)=><button key={option} className={answer===undefined?"":index===call.answer?"correct":answer===index?"wrong":"muted"} onClick={()=>answer===undefined&&setAnswers(previous=>({...previous,[call.id]:index}))}>{option}</button>)}</div>{answer!==undefined&&<aside><h3>{call.detail}</h3><p>{call.talk}</p>{call.credibility&&<div className="rm-believable"><b>¿VERDADERO O EXAGERADO?</b><button className={believable==="verdadero"?"active":""} onClick={()=>setBelievable("verdadero")}>ME PARECE VERDADERO</button><button className={believable==="exagerado"?"active":""} onClick={()=>setBelievable("exagerado")}>ME PARECE EXAGERADO</button><small>No hay una respuesta revelada: defendé tu impresión.</small></div>}</aside>}</section>}
        {isHeard&&answer!==undefined&&<section className="rm-host"><small>LA PRESENTADORA TODAVÍA NO HABLÓ</small><h2>¿Qué le preguntarías vos a {call.caller}?</h2><p>Decí tu pregunta en voz alta. Abrí la intervención real solo después.</p><button onClick={()=>setHostOpen(previous=>previous.includes(call.id)?previous:[...previous,call.id])}>{hostOpen.includes(call.id)?"PREGUNTA ABIERTA":"YA HICE MI PREGUNTA · OÍR A LA PRESENTADORA"}</button>{hostOpen.includes(call.id)&&<><AudioDeck src={call.hostFile} title="La pregunta de la presentadora" channel="MICRÓFONO DEL ESTUDIO" accent="#f4b25f"/><h3>{call.hostQuestion}</h3></>}</section>}
        <button className="rm-transcript-button" onClick={()=>setTranscript(value=>!value)}>{transcript?"OCULTAR TRANSCRIPCIÓN":"PROFESOR · ABRIR TRANSCRIPCIÓN"}</button>{transcript&&<aside className="rm-transcript"><p><b>{call.caller}:</b> {call.segments[0].text}</p><p><b>Presentadora:</b> {call.hostQuestion}</p></aside>}<footer><button disabled={activeIndex===0} onClick={()=>chooseCall(activeIndex-1)}>← LLAMADA ANTERIOR</button><button onClick={()=>activeIndex===content.calls.length-1?setStage("final"):chooseCall(activeIndex+1)}>{activeIndex===content.calls.length-1?"ABRIR EL ÚLTIMO BLOQUE →":"SIGUIENTE LLAMADA →"}</button></footer>
      </article>
    </section>}

    {stage==="final"&&<section className="rm-final"><div><span>MICRÓFONO ABIERTO · 12 MIN</span><h1>Tu historia<br/>entra al aire.</h1><p>Elegí una pregunta, contá una experiencia con principio, cambio y cierre, y dejá que el profesor repregunte.</p><button onClick={()=>setStage("calls")}>← VOLVER A LAS LLAMADAS</button></div><article><header><span>PREGUNTA {String(finalIndex+1).padStart(2,"0")}</span><i>{finalIndex+1}/{content.finalQuestions.length}</i></header><h2>{content.finalQuestions[finalIndex]}</h2><section><b>PARA QUE LA HISTORIA AVANCE</b><p>¿Qué pasó primero? · ¿Qué cambió? · ¿Cómo terminó? · ¿Qué pensás ahora?</p></section><nav>{content.finalQuestions.map((_,index)=><button key={index} onClick={()=>setFinalIndex(index)} className={index===finalIndex?"active":""}>{index+1}</button>)}</nav><footer><button disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>←</button><button disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>SIGUIENTE →</button></footer></article></section>}

    <button className="rm-support-button" onClick={()=>setSupport(value=>!value)}>AYUDA B1</button>{support&&<aside className="rm-support"><header><b>CONECTORES PARA CONTAR</b><button onClick={()=>setSupport(false)}>×</button></header>{content.supports.map(item=><p key={item}>{item}</p>)}</aside>}
  </main>;
}
