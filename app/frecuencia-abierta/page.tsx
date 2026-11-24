"use client";

import {useState,type CSSProperties} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import content from "./content.json";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "../clasicas-ui/audio-deck.css";
import "../clasicas-ui/listening.css";
import "./style.css";

type Stage="signals"|"tone"|"conclusion"|"conversation";
const scale=["Muy en contra","Más bien en contra","Ambivalente","Más bien a favor","Muy a favor"];
const intents=["SINCERA","IRÓNICA","DUDOSA","RESIGNADA","ENTUSIASTA"];
const intentLabel=(value:string)=>value.charAt(0)+value.slice(1).toLowerCase();

export default function FrecuenciaAbierta(){
  const [stage,setStage]=useState<Stage>("signals");
  const [activeIndex,setActiveIndex]=useState(0);
  const [heard,setHeard]=useState<string[]>([]);
  const [positions,setPositions]=useState<Record<string,number>>({});
  const [transcript,setTranscript]=useState(false);
  const [teacher,setTeacher]=useState(false);
  const [toneIndex,setToneIndex]=useState(0);
  const [toneHeard,setToneHeard]=useState<string[]>([]);
  const [toneAnswers,setToneAnswers]=useState<Record<string,string>>({});
  const [finalIndex,setFinalIndex]=useState(0);
  const [support,setSupport]=useState(false);
  const signal=content.signals[activeIndex];
  const isHeard=heard.includes(signal.id);
  const tone=content.toneLab[toneIndex];
  const chooseSignal=(index:number)=>{setActiveIndex(index);setTranscript(false);setTeacher(false)};

  const steps=[["signals","Seis señales","22 min"],["tone","Entonación","6 min"],["conclusion","Contraseñal","7 min"],["conversation","Mesa abierta","10 min"]] as const;
  const stepIndex=steps.findIndex(([key])=>key===stage);
  return <main className="cx cxp fa-app" style={{"--cx-accent":"#0c8599"} as CSSProperties}>
    <ClassicTopBar title="Frecuencia abierta · C2" context="Escucha"><span className="cx-chip">C2 · mesa internacional</span></ClassicTopBar>
    <nav className="cxp-steps cxl-steps fa-steps" aria-label="Recorrido">{steps.map(([key,name,time],index)=><button key={key} aria-current={stage===key?"step":undefined} className={stage===key?"active":stepIndex>index?"done":""} onClick={()=>setStage(key)}><span>{stepIndex>index?"✓":index+1}</span><b>{name}<small>{time}</small></b></button>)}</nav>

    {stage==="signals"&&<>
      <section className="cxp-hero cxl-hero"><article className="cx-rise"><p className="cx-kicker">Seis ciudades · una misma mañana</p><h1>Frecuencia <em>abierta</em></h1><p className="cxp-lead">{content.topic}</p><p className="fa-note">Las voces pueden ocupar una posición y cuestionarla al mismo tiempo.</p></article><figure className="cxp-art cx-rise"><img src="/listening-premium/frecuencia-abierta.webp" alt="Sala internacional de producción de audio con seis voces adultas" width="1600" height="900"/></figure></section>
      <section className="cxp-page cxl-studio">
        <aside className="cxp-list cxl-lines" aria-label="Señales entrantes"><p className="cxl-lines-head"><b>Señales entrantes</b><span>{heard.length} de 6</span></p>{content.signals.map((item,index)=><button key={item.id} className={index===activeIndex?"active":""} onClick={()=>chooseSignal(index)}><span>{heard.includes(item.id)?"✓":item.number}</span><div><b>{item.city}</b><small>{item.channel} · {positions[item.id]===undefined?heard.includes(item.id)?"sin ubicar":"nueva":`posición ${positions[item.id]+1} de 5`}</small></div></button>)}</aside>
        <article className="cxl-desk">
          <header className="cx-rise"><p className="cx-kicker">Señal {signal.number} · {signal.city} · {signal.channel}</p><h1>{signal.speaker}</h1><p>{signal.role} · {signal.variety}</p></header>
          <div className="cxp-say"><small>Antes de escuchar</small><b>¿Qué intereses puede tener alguien con este rol? Separa esa hipótesis de lo que realmente oigas.</b></div>
          <AudioDeck key={signal.id} src={signal.file} title={`${signal.speaker} · ${signal.city}`} channel={signal.channel} accent="#0c8599" onComplete={()=>setHeard(previous=>previous.includes(signal.id)?previous:[...previous,signal.id])}/>
          {!isHeard?<p className="cxl-locked">El panel de interpretación permanece cerrado hasta el final de la señal.</p>:<section className="cxp-panel cx-card cx-rise"><small>Superficie</small><p>{signal.surface}</p><h2>{signal.question}</h2><div className="fa-scale">{scale.map((label,index)=><button key={label} className={positions[signal.id]===index?"active":""} aria-pressed={positions[signal.id]===index} onClick={()=>setPositions(previous=>({...previous,[signal.id]:index}))}><span>{index+1}</span>{label}</button>)}</div>{positions[signal.id]!==undefined&&<div className="cxl-after cx-rise"><b>Explica la ambigüedad</b><p>{signal.talk}</p></div>}</section>}
          <div className="fa-private"><button className="cx-btn" aria-expanded={transcript} onClick={()=>setTranscript(value=>!value)}>{transcript?"Ocultar la transcripción":"Transcripción para el profe"}</button><button className="cx-btn" aria-expanded={teacher} onClick={()=>setTeacher(value=>!value)}>{teacher?"Ocultar el contraargumento":"Contraargumento del profe"}</button></div>{transcript&&<aside className="cx-teacher cxl-transcript"><b>Transcripción</b>{signal.segments.map((segment,index)=><p key={index}><strong>{segment.speaker}:</strong> {segment.text}</p>)}</aside>}{teacher&&<p className="cx-teacher"><b>Contraargumento del profe</b>{signal.counter}</p>}
          <footer className="cxp-controls"><button className="cx-btn" disabled={activeIndex===0} onClick={()=>chooseSignal(activeIndex-1)}><span aria-hidden="true">←</span> Anterior</button><button className="cx-btn is-primary" onClick={()=>activeIndex===content.signals.length-1?setStage("tone"):chooseSignal(activeIndex+1)}>{activeIndex===content.signals.length-1?"Pasar a entonación":"Siguiente señal"} <span aria-hidden="true">→</span></button></footer>
        </article>
      </section>
    </>}

    {stage==="tone"&&<section className="cxp-page" key="tone"><header className="cx-rise"><p className="cx-kicker">La misma frase · cinco intenciones · 6 min</p><h1>«Sí, claro. Cuando quieras.»</h1><p>El significado no está solo en las palabras. Lee el contexto, escucha una vez y elige la intención dominante.</p></header><div className="cxl-studio fa-tone"><aside className="cxp-list cxl-lines" aria-label="Contextos">{content.toneLab.map((item,index)=><button key={item.id} className={index===toneIndex?"active":""} onClick={()=>setToneIndex(index)}><span>{toneAnswers[item.id]?"✓":`0${index+1}`}</span><div><b>{item.context}</b></div></button>)}</aside><article className="cxl-desk"><div className="cxp-say"><small>Contexto {toneIndex+1}</small><b>{tone.context}</b></div><AudioDeck key={tone.id} src={tone.file} title="Sí, claro. Cuando quieras." channel="Laboratorio de entonación" accent="#ae3ec9" onComplete={()=>setToneHeard(previous=>previous.includes(tone.id)?previous:[...previous,tone.id])}/>{!toneHeard.includes(tone.id)?<p className="cxl-locked">Las intenciones se abren después de escuchar la frase completa.</p>:<section className="cxp-panel cx-card cx-rise"><small>¿Qué intención domina?</small><div className="cxl-options fa-intents">{intents.map(intent=><button key={intent} className={toneAnswers[tone.id]?intent===tone.intent?"correct":toneAnswers[tone.id]===intent?"wrong":"muted":""} onClick={()=>!toneAnswers[tone.id]&&setToneAnswers(previous=>({...previous,[tone.id]:intent}))}>{intentLabel(intent)}</button>)}</div>{toneAnswers[tone.id]&&<div className="cxl-after cx-rise"><b>{toneAnswers[tone.id]===tone.intent?"Lectura coherente.":"Compara tono y contexto."}</b><p>Repite la frase imitando la intención y cambia una sola palabra.</p></div>}</section>}</article></div><footer className="cxp-controls"><button className="cx-btn" onClick={()=>setStage("signals")}><span aria-hidden="true">←</span> Volver a las señales</button><button className="cx-btn is-primary" onClick={()=>setStage("conclusion")}>Abrir la contraseñal <span aria-hidden="true">→</span></button></footer></section>}

    {stage==="conclusion"&&<section className="cxp-page" key="end"><header className="cx-rise"><p className="cx-kicker">Señal 07 · 11:47 · 7 min</p><h1>Un dato que no elige bando.</h1><p>Escucha antes de cerrar tu postura. Esta última señal contradice cualquier conclusión demasiado limpia.</p></header><div className="cxp-split"><div className="fa-final-signal"><p className="cx-kicker">{content.finalSignal.city}</p><h2>{content.finalSignal.speaker}</h2><p>{content.finalSignal.role} · {content.finalSignal.variety}</p><AudioDeck src={content.finalSignal.file} title="La contraseñal" channel={content.finalSignal.channel} accent="#ae3ec9"/></div><section className="cxp-say"><small>Cierre oral · 60–90 segundos</small><h2>{content.finalSignal.prompt}</h2><div className="cxp-phrases"><span>Concesión</span><span>Implicación</span><span>Dato que cambió tu postura</span></div></section></div><button className="cx-btn cxl-start" aria-expanded={teacher} onClick={()=>setTeacher(value=>!value)}>{teacher?"Ocultar los contraargumentos":"Contraargumentos del profe"}</button>{teacher&&<div className="cx-teacher"><b>Contraargumentos del profe</b>{content.finalSignal.teacher.map(item=><p key={item}>{item}</p>)}</div>}<footer className="cxp-controls"><button className="cx-btn" onClick={()=>setStage("tone")}><span aria-hidden="true">←</span> Entonación</button><button className="cx-btn is-primary" onClick={()=>setStage("conversation")}>Mesa abierta <span aria-hidden="true">→</span></button></footer></section>}

    {stage==="conversation"&&<section className="cxp-final"><header className="cx-rise"><p className="cx-kicker">Conversación C2 · 10 min</p><h1>Escuchar también es posicionarse.</h1><p>Responde, acepta una objeción y reformula sin borrar el desacuerdo.</p></header><article className="cx-card cxl-single"><p className="cx-chip is-accent">Pregunta {finalIndex+1} de {content.finalQuestions.length}</p><h2>{content.finalQuestions[finalIndex].q}</h2><div className="cxp-split fa-depth"><div className="cxp-say"><small>Repregunta</small><p>{content.finalQuestions[finalIndex].follow}</p></div><p className="cx-teacher"><b>Contraargumento</b>{content.finalQuestions[finalIndex].counter}</p></div><nav className="cxl-final-nav"><button className="cx-btn" disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>← Anterior</button><div>{content.finalQuestions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} className={index===finalIndex?"active":""} onClick={()=>setFinalIndex(index)}/>)}</div><button className="cx-btn is-primary" disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>Siguiente →</button></nav></article></section>}

    <button className="cx-btn cxp-support-trigger" aria-expanded={support} onClick={()=>setSupport(value=>!value)}>{support?"Cerrar recursos":"Recursos C2"}</button>{support&&<aside className="cxp-support cx-card"><b className="cxl-support-title">Posición, registro e implícito</b>{content.supports.map(item=><span key={item}>{item}</span>)}</aside>}
  </main>;
}
