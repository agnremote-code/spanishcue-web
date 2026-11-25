"use client";

import {useMemo,useState,type CSSProperties} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import {sentence} from "../clasicas-ui/text";
import content from "./content.json";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "../clasicas-ui/audio-deck.css";
import "./style.css";

type Stage="building"|"package"|"conversation";

function Transcript({segments}:{segments:{speaker:string;text:string}[]}){
  return <aside className="cx-teacher ev-transcript"><b>Transcripción para el profe</b>{segments.map((segment,index)=><p key={index}><strong>{segment.speaker}:</strong> {segment.text}</p>)}</aside>;
}

export default function EdificioVoces(){
  const [stage,setStage]=useState<Stage>("building");
  const [activeIndex,setActiveIndex]=useState(0);
  const [heard,setHeard]=useState<string[]>([]);
  const [answers,setAnswers]=useState<Record<string,number>>({});
  const [transcript,setTranscript]=useState(false);
  const [support,setSupport]=useState(false);
  const [finalIndex,setFinalIndex]=useState(0);
  const active=content.neighbors[activeIndex];
  const current=stage==="package"?content.package:active;
  const isHeard=heard.includes(current.id);
  const answered=answers[current.id];
  const markHeard=()=>setHeard(previous=>previous.includes(current.id)?previous:[...previous,current.id]);
  const visited=useMemo(()=>content.neighbors.filter(item=>heard.includes(item.id)).length,[heard]);
  const choose=(index:number)=>{setStage("building");setActiveIndex(index);setTranscript(false);};

  const steps=[["building","Vecinos","25 min"],["package","Paquete","8 min"],["conversation","Conversación","12 min"]] as const;
  const stepIndex=steps.findIndex(([key])=>key===stage);
  const options=(list:readonly string[],id:string,correct:number)=><div className="ev-options">{list.map((option,index)=><button key={option} className={answers[id]===undefined?"":index===correct?"correct":answers[id]===index?"wrong":"muted"} onClick={()=>answers[id]===undefined&&setAnswers(previous=>({...previous,[id]:index}))}>{option}</button>)}</div>;
  return <main className="cx cxp ev-app" style={{"--cx-accent":"#e8590c"} as CSSProperties}>
    <ClassicTopBar title="El edificio de las voces · A1" context="Escucha"><span className="cx-chip">A1 · 45 min</span></ClassicTopBar>
    <nav className="cxp-steps ev-steps" aria-label="Recorrido">{steps.map(([key,name,time],index)=><button key={key} aria-current={stage===key?"step":undefined} className={stage===key?"active":stepIndex>index?"done":""} onClick={()=>setStage(key)}><span>{stepIndex>index?"✓":index+1}</span><b>{name}<small>{time}</small></b></button>)}</nav>

    {stage==="building"&&<>
      <section className="cxp-hero ev-hero"><article className="cx-rise"><p className="cx-kicker">Ciudad · 19:10 · seis puertas</p><h1>El edificio <em>de las voces</em></h1><p className="cxp-lead">No hay perfiles para leer. Toca un departamento, escucha a su vecino y usa la información para hablar.</p><ol className="ev-method"><li>Escucha</li><li>Entiende</li><li>Responde</li><li>Habla</li></ol></article><figure className="cxp-art cx-rise"><img src="/listening-premium/edificio-voces.webp" alt="Edificio moderno con vecinos adultos y un intercomunicador" width="1600" height="900"/></figure></section>
      <section className="cxp-page ev-building">
        <aside className="ev-intercom cx-card" aria-label="Portero"><p className="ev-intercom-head"><b>Portero</b><span>{visited} de 6 voces</span></p><div>{content.neighbors.map((item,index)=><button key={item.id} className={`${index===activeIndex?"active":""} ${heard.includes(item.id)?"heard":""}`} onClick={()=>choose(index)}><span>{item.door}</span><b>{heard.includes(item.id)?item.name:"Sin abrir"}</b><i aria-hidden="true">{heard.includes(item.id)?"✓":"▶"}</i></button>)}</div></aside>
        <article className="ev-desk">
          <header className="cx-rise"><p className="cx-kicker">Depto. {active.door} · {sentence(active.channel)}</p><h1>{active.name}</h1><p>Voz de {active.variety}</p></header>
          <div className="cxp-say"><small>Antes de escuchar</small><b>{active.prediction}</b></div>
          <AudioDeck key={active.id} src={active.file} title={`Mensaje de ${active.name}`} channel={`${sentence(active.channel)} · ${active.variety}`} accent="#e8590c" allowSlow onComplete={markHeard}/>
          {!isHeard?<p className="ev-locked">La pregunta se abre cuando termina el audio.</p>:<div className="cxp-panel cx-card cx-rise"><small>Ahora comprueba</small><h2>{active.question}</h2>{options(active.options,active.id,active.answer)}{answered!==undefined&&<div className="ev-after cx-rise"><b>{answered===active.answer?"Bien escuchado.":"Escúchalo otra vez y compara."}</b><h3>{active.talk}</h3><p>{active.starter}</p></div>}</div>}
          <button className="cx-btn ev-start" aria-expanded={transcript} onClick={()=>setTranscript(value=>!value)}>{transcript?"Ocultar la transcripción":"Transcripción para el profe"}</button>{transcript&&<Transcript segments={active.segments}/>}
          <footer className="cxp-controls"><button className="cx-btn" disabled={activeIndex===0} onClick={()=>choose(activeIndex-1)}><span aria-hidden="true">←</span> Anterior</button><button className="cx-btn is-primary" onClick={()=>activeIndex===content.neighbors.length-1?setStage("package"):choose(activeIndex+1)}>{activeIndex===content.neighbors.length-1?"Resolver el paquete":"Siguiente puerta"} <span aria-hidden="true">→</span></button></footer>
        </article>
      </section>
    </>}

    {stage==="package"&&<section className="cxp-page" key="pkg"><header className="cx-rise"><p className="cx-kicker">Giro final · 8 min</p><h1>Un paquete. Ningún nombre.</h1><p>Escucha el diálogo de la entrada. Después elige a quién puede pertenecer y justifica con dos datos de los vecinos.</p><p className="cx-chip ev-memory">Voces escuchadas: {visited} de 6 · puedes resolverlo aunque no hayas abierto todas.</p></header><AudioDeck src={content.package.file} title="El repartidor llegó" channel={`${sentence(content.package.channel)} · ${content.package.variety}`} accent="#0c8599" allowSlow onComplete={markHeard}/>{!isHeard?<p className="ev-locked">Primero escucha el diálogo completo.</p>:<div className="cxp-panel cx-card cx-rise"><small>Decisión</small><h2>{content.package.question}</h2>{options(content.package.options,content.package.id,content.package.answer)}{answered!==undefined&&<div className="ev-after cx-rise"><b>{answered===content.package.answer?"La información coincide.":"Revisa piso, horario y gustos."}</b><h3>{content.package.talk}</h3><p>{content.package.starter}</p></div>}</div>}<button className="cx-btn ev-start" aria-expanded={transcript} onClick={()=>setTranscript(value=>!value)}>{transcript?"Ocultar la transcripción":"Transcripción para el profe"}</button>{transcript&&<Transcript segments={content.package.segments}/>}<footer className="cxp-controls"><button className="cx-btn" onClick={()=>setStage("building")}><span aria-hidden="true">←</span> Volver a los vecinos</button><button className="cx-btn is-primary" onClick={()=>setStage("conversation")}>Conversación final <span aria-hidden="true">→</span></button></footer></section>}

    {stage==="conversation"&&<section className="cxp-final"><header className="cx-rise"><p className="cx-kicker">Conversación real · 12 min</p><h1>Ahora abre tu propia puerta.</h1><p>Una pregunta por vez. Responde, pregúntale al profesor y agrega un detalle.</p></header><article className="cx-card ev-single"><p className="cx-chip is-accent">Pregunta {finalIndex+1} de {content.finalQuestions.length}</p><h2>{content.finalQuestions[finalIndex]}</h2><p className="ev-and-you">Después pregunta: <b>¿Y tú?</b></p><nav className="ev-final-nav"><button className="cx-btn" disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>← Anterior</button><div>{content.finalQuestions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} className={index===finalIndex?"active":""} onClick={()=>setFinalIndex(index)}/>)}</div><button className="cx-btn is-primary" disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>Siguiente →</button></nav></article></section>}

    <button className="cx-btn cxp-support-trigger" aria-expanded={support} onClick={()=>setSupport(value=>!value)}>{support?"Cerrar ayuda":"Ayuda para hablar"}</button>
    {support&&<aside className="cxp-support cx-card"><b className="ev-support-title">Frases para empezar</b>{content.supports.map(item=><span key={item}>{item}</span>)}</aside>}
  </main>;
}
