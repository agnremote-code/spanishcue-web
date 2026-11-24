"use client";

import {useState,type CSSProperties} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import {sentence} from "../clasicas-ui/text";
import content from "./content.json";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "../clasicas-ui/audio-deck.css";
import "./style.css";

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

  return <main className="cx cxp rm-app" style={{"--cx-accent":"#e64980"} as CSSProperties}>
    <ClassicTopBar title="Radio después de medianoche · B1" context="Escucha"><span className="cx-chip is-accent"><i className="rm-live" aria-hidden="true"/>En directo · 00:{String(8+activeIndex*9).padStart(2,"0")}</span></ClassicTopBar>

    {stage==="calls"&&<>
      <section className="cxp-hero rm-hero"><article className="cx-rise"><p className="cx-kicker">B1 · Cinco llamadas · cinco historias · 33 min</p><h1>Radio después <em>de medianoche</em></h1><p className="cxp-lead">Primero anticipas. Después escuchas la historia y preparas tu propia pregunta antes de oír a la presentadora.</p></article><figure className="cxp-art cx-rise"><img src="/listening-premium/radio-medianoche.webp" alt="Presentadora adulta en un estudio de radio nocturno" width="1600" height="900"/></figure></section>
      <section className="cxp-page rm-studio">
        <aside className="cxp-list rm-lines" aria-label="Líneas entrantes"><p className="rm-lines-head"><b>Líneas entrantes</b><span>{heard.length} de 5 al aire</span></p>{content.calls.map((item,index)=><button key={item.id} onClick={()=>chooseCall(index)} className={index===activeIndex?"active":""}><span>{heard.includes(item.id)?"✓":`0${index+1}`}</span><div><b>{sentence(item.title)}</b><small>{item.caller} · {item.variety}</small></div></button>)}</aside>
        <article className="rm-desk">
          <header className="cx-rise"><p className="cx-kicker">Llamada {activeIndex+1} · {sentence(call.mood)}</p><h1>{sentence(call.title)}</h1><p>{call.caller} · voz de {call.variety}</p></header>
          <div className="cxp-say"><small>Antes de contestar</small><b>{call.prediction}</b></div>
          <AudioDeck key={call.id} src={call.file} title={`Historia de ${call.caller}`} channel={`Llamada entrante · ${call.variety}`} accent="#e64980" allowSlow onComplete={()=>setHeard(previous=>previous.includes(call.id)?previous:[...previous,call.id])}/>
          {!isHeard?<p className="rm-sealed">La historia y las preguntas se abren al terminar la llamada.</p>:<section className="cxp-panel cx-card cx-rise"><small>Primera y segunda escucha</small><h2>{call.gist}</h2><div className="rm-options">{call.options.map((option,index)=><button key={option} className={answer===undefined?"":index===call.answer?"correct":answer===index?"wrong":"muted"} onClick={()=>answer===undefined&&setAnswers(previous=>({...previous,[call.id]:index}))}>{option}</button>)}</div>{answer!==undefined&&<div className="rm-after cx-rise"><h3>{call.detail}</h3><p>{call.talk}</p>{call.credibility&&<div className="rm-believable"><b>¿Verdadero o exagerado?</b><div className="cx-seg"><button aria-pressed={believable==="verdadero"} onClick={()=>setBelievable("verdadero")}>Me parece verdadero</button><button aria-pressed={believable==="exagerado"} onClick={()=>setBelievable("exagerado")}>Me parece exagerado</button></div><small>No hay una respuesta revelada: defiende tu impresión.</small></div>}</div>}</section>}
          {isHeard&&answer!==undefined&&<section className="cxp-say cx-rise"><small>La presentadora todavía no habló</small><h2>¿Qué le preguntarías tú a {call.caller}?</h2><p>Di tu pregunta en voz alta. Abre la intervención real solo después.</p><button className="cx-btn is-accent rm-start" disabled={hostOpen.includes(call.id)} onClick={()=>setHostOpen(previous=>previous.includes(call.id)?previous:[...previous,call.id])}>{hostOpen.includes(call.id)?"Pregunta abierta ✓":"Ya hice mi pregunta · oír a la presentadora"}</button>{hostOpen.includes(call.id)&&<><AudioDeck src={call.hostFile} title="La pregunta de la presentadora" channel="Micrófono del estudio" accent="#e8590c"/><h3 className="rm-host-q">{call.hostQuestion}</h3></>}</section>}
          <button className="cx-btn rm-start" aria-expanded={transcript} onClick={()=>setTranscript(value=>!value)}>{transcript?"Ocultar la transcripción":"Transcripción para el profe"}</button>{transcript&&<aside className="cx-teacher"><b>Transcripción</b><p><strong>{call.caller}:</strong> {call.segments[0].text}</p><p><strong>Presentadora:</strong> {call.hostQuestion}</p></aside>}
          <footer className="cxp-controls"><button className="cx-btn" disabled={activeIndex===0} onClick={()=>chooseCall(activeIndex-1)}><span aria-hidden="true">←</span> Llamada anterior</button><button className="cx-btn is-primary" onClick={()=>activeIndex===content.calls.length-1?setStage("final"):chooseCall(activeIndex+1)}>{activeIndex===content.calls.length-1?"Abrir el último bloque":"Siguiente llamada"} <span aria-hidden="true">→</span></button></footer>
        </article>
      </section>
    </>}

    {stage==="final"&&<section className="cxp-final"><header className="cx-rise"><p className="cx-kicker">Micrófono abierto · 12 min</p><h1>Tu historia entra al aire.</h1><p>Elige una pregunta, cuenta una experiencia con principio, cambio y cierre, y deja que el profesor repregunte.</p></header><article className="cx-card rm-single"><p className="cx-chip is-accent">Pregunta {finalIndex+1} de {content.finalQuestions.length}</p><h2>{content.finalQuestions[finalIndex]}</h2><div className="cxp-say"><small>Para que la historia avance</small><p>¿Qué pasó primero? · ¿Qué cambió? · ¿Cómo terminó? · ¿Qué piensas ahora?</p></div><nav className="rm-final-nav"><button className="cx-btn" disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>← Anterior</button><div>{content.finalQuestions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} onClick={()=>setFinalIndex(index)} className={index===finalIndex?"active":""}/>)}</div><button className="cx-btn is-primary" disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>Siguiente →</button></nav></article><button className="cx-btn rm-start" onClick={()=>setStage("calls")}>← Volver a las llamadas</button></section>}

    <button className="cx-btn cxp-support-trigger" aria-expanded={support} onClick={()=>setSupport(value=>!value)}>{support?"Cerrar ayuda":"Ayuda B1"}</button>{support&&<aside className="cxp-support cx-card"><b className="rm-support-title">Conectores para contar</b>{content.supports.map(item=><span key={item}>{item}</span>)}</aside>}
  </main>;
}
