"use client";

import {useState,type CSSProperties} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import {sentence} from "../clasicas-ui/text";
import content from "./content.json";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "../clasicas-ui/audio-deck.css";
import "../clasicas-ui/listening.css";
import "./style.css";

type Stage="raw"|"edit"|"conversation";

export default function EntrevistaNoEmitida(){
  const [stage,setStage]=useState<Stage>("raw");
  const [activeIndex,setActiveIndex]=useState(0);
  const [heard,setHeard]=useState<string[]>([]);
  const [answers,setAnswers]=useState<Record<string,number>>({});
  const [selected,setSelected]=useState<string[]>([]);
  const [transcript,setTranscript]=useState(false);
  const [support,setSupport]=useState(false);
  const [finalIndex,setFinalIndex]=useState(0);
  const clip=content.clips[activeIndex];
  const isHeard=heard.includes(clip.id);
  const answer=answers[clip.id];
  const chooseClip=(index:number)=>{setActiveIndex(index);setTranscript(false)};
  const toggleSelection=(id:string)=>setSelected(previous=>previous.includes(id)?previous.filter(item=>item!==id):previous.length<3?[...previous,id]:previous);

  const steps=[["raw","Material bruto","25 min"],["edit","Sala de edición","8 min"],["conversation","Fuera de cámara","12 min"]] as const;
  const stepIndex=steps.findIndex(([key])=>key===stage);
  return <main className="cx cxp en-app" style={{"--cx-accent":"#c92a2a"} as CSSProperties}>
    <ClassicTopBar title="La entrevista que no salió al aire · C1" context="Escucha"><span className="cx-chip">C1 · material sin editar</span></ClassicTopBar>
    <nav className="cxp-steps cxl-steps en-steps" aria-label="Recorrido">{steps.map(([key,name,time],index)=><button key={key} aria-current={stage===key?"step":undefined} className={stage===key?"active":stepIndex>index?"done":""} onClick={()=>setStage(key)}><span>{stepIndex>index?"✓":index+1}</span><b>{name}<small>{time}</small></b></button>)}</nav>

    {stage==="raw"&&<>
      <section className="cxp-hero cxl-hero"><article className="cx-rise"><p className="cx-kicker">Umbral · entrevista 08 · sin publicar</p><h1>La entrevista que <em>no salió al aire</em></h1><p className="cxp-lead">Cinco fragmentos. León se corrige, esquiva, cambia de registro y finalmente altera la lectura de todo lo anterior.</p></article><figure className="cxp-art cx-rise"><img src="/listening-premium/entrevista-no-salio.webp" alt="Entrevista editorial entre dos adultos con una sala de edición al fondo" width="1600" height="900"/></figure></section>
      <section className="cxp-page cxl-studio">
        <aside className="cxp-list cxl-lines" aria-label="Línea de tiempo"><p className="cxl-lines-head"><b>Cinco clips</b><span>{heard.length} de 5 escuchados</span></p>{content.clips.map((item,index)=><button key={item.id} onClick={()=>chooseClip(index)} className={index===activeIndex?"active":""}><span>{heard.includes(item.id)?"✓":item.number}</span><div><b>{item.title}</b><small>{sentence(item.editorTag)}</small></div></button>)}</aside>
        <article className="cxl-desk">
          <header className="cx-rise"><p className="cx-kicker">Fragmento {clip.number} · {clip.channel}</p><h1>{clip.title}</h1><p>Nora Ibáñez entrevista a {content.guest.name}</p></header>
          <div className="cxp-say"><small>Desafío de escucha</small><b>{clip.hook}</b></div>
          <AudioDeck key={clip.id} src={clip.file} title={clip.title} channel={clip.channel} accent="#c92a2a" onComplete={()=>setHeard(previous=>previous.includes(clip.id)?previous:[...previous,clip.id])}/>
          {!isHeard?<p className="cxl-locked">El análisis se abre al terminar el fragmento.</p>:<section className="cxp-panel cx-card cx-rise"><small>¿Qué quiso decir?</small><h2>{clip.question}</h2><div className="cxl-options">{clip.options.map((option,index)=><button key={option} className={answer===undefined?"":index===clip.answer?"correct":answer===index?"wrong":"muted"} onClick={()=>answer===undefined&&setAnswers(previous=>({...previous,[clip.id]:index}))}>{option}</button>)}</div>{answer!==undefined&&<div className="cxl-after cx-rise"><h3>{clip.analysis}</h3><p>{clip.talk}</p></div>}</section>}
          <button className="cx-btn cxl-start" aria-expanded={transcript} onClick={()=>setTranscript(value=>!value)}>{transcript?"Ocultar la transcripción":"Transcripción para el profe"}</button>{transcript&&<aside className="cx-teacher cxl-transcript"><b>Transcripción</b>{clip.segments.map((segment,index)=><p key={index}><strong>{segment.speaker}:</strong> {segment.text}</p>)}</aside>}
          <footer className="cxp-controls"><button className="cx-btn" disabled={activeIndex===0} onClick={()=>chooseClip(activeIndex-1)}><span aria-hidden="true">←</span> Clip anterior</button><button className="cx-btn is-primary" onClick={()=>activeIndex===content.clips.length-1?setStage("edit"):chooseClip(activeIndex+1)}>{activeIndex===content.clips.length-1?"Entrar a edición":"Siguiente clip"} <span aria-hidden="true">→</span></button></footer>
        </article>
      </section>
    </>}

    {stage==="edit"&&<section className="cxp-page" key="edit"><header className="cx-rise"><p className="cx-kicker">Sala de edición · 8 min</p><h1>Cinco fragmentos. Solo publicas tres.</h1><p>Elige sin manipular el sentido. Después defiende tu corte y construye dos titulares opuestos.</p></header><div className="cxp-split"><div className="cxp-list">{content.clips.map(item=><button key={item.id} className={selected.includes(item.id)?"active":""} aria-pressed={selected.includes(item.id)} onClick={()=>toggleSelection(item.id)}><span>{item.number}</span><div><b>{item.title}</b><small>{sentence(item.editorTag)} · {selected.includes(item.id)?"incluido":"descartado"}</small></div></button>)}</div><aside className="cxp-panel cx-card en-cut"><small>Versión final</small><h2>{selected.length} de 3</h2><p>{selected.length<3?"Elige tres fragmentos.":"El corte está listo para defender."}</p></aside></div>{selected.length===3&&<div className="cxp-tiles cx-rise"><article className="cxp-say"><small>Defensa oral · 60 segundos</small><h2>¿Qué comprensión obtiene el público con estos tres clips y qué pierde?</h2><p>Cita una elección lingüística concreta de León.</p></article><article className="cxp-say"><small>Titular justo</small><h2>Crea un titular que represente la complejidad sin absolverlo ni condenarlo.</h2></article><article className="cxp-say"><small>Titular sensacionalista</small><h2>Ahora deforma el mismo material sin inventar un dato. Explica el mecanismo.</h2></article></div>}<footer className="cxp-controls"><button className="cx-btn" onClick={()=>setStage("raw")}><span aria-hidden="true">←</span> Volver al material bruto</button>{selected.length===3&&<button className="cx-btn is-primary" onClick={()=>setStage("conversation")}>Abrir la conversación final <span aria-hidden="true">→</span></button>}</footer></section>}

    {stage==="conversation"&&<section className="cxp-final"><header className="cx-rise"><p className="cx-kicker">Conversación C1 · 12 min</p><h1>Lo que queda fuera del corte.</h1><p>Interpreta, matiza y cuestiona. Cada respuesta debe incluir una reserva o una segunda lectura.</p></header><article className="cx-card cxl-single"><p className="cx-chip is-accent">Pregunta {finalIndex+1} de {content.finalQuestions.length}</p><h2>{content.finalQuestions[finalIndex]}</h2><div className="cxp-say"><small>Profundiza</small><p>¿Qué ejemplo lo demuestra? · ¿Qué objeción aceptarías? · ¿Cambiaría según el contexto?</p></div><nav className="cxl-final-nav"><button className="cx-btn" disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>← Anterior</button><div>{content.finalQuestions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} className={index===finalIndex?"active":""} onClick={()=>setFinalIndex(index)}/>)}</div><button className="cx-btn is-primary" disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>Siguiente →</button></nav></article></section>}

    <button className="cx-btn cxp-support-trigger" aria-expanded={support} onClick={()=>setSupport(value=>!value)}>{support?"Cerrar lenguaje":"Lenguaje C1"}</button>{support&&<aside className="cxp-support cx-card"><b className="cxl-support-title">Inferir y matizar</b>{content.supports.map(item=><span key={item}>{item}</span>)}</aside>}
  </main>;
}
