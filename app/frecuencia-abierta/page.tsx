"use client";

import Link from "next/link";
import {useState} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import content from "./content.json";
import "./style.css";
import { SpanishCueBrand } from "../SpanishCueBrand";

type Stage="signals"|"tone"|"conclusion"|"conversation";
const scale=["MUY EN CONTRA","MÁS BIEN EN CONTRA","AMBIVALENTE","MÁS BIEN A FAVOR","MUY A FAVOR"];
const intents=["SINCERA","IRÓNICA","DUDOSA","RESIGNADA","ENTUSIASTA"];

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

  return <main className="fa-app">
    <header className="fa-top"><Link href="/">← BIBLIOTECA</Link><Link className="fa-brand" href="/"><SpanishCueBrand variant="compact" tone="light" context="FRECUENCIA" /></Link><span>C2 · MESA INTERNACIONAL</span></header>
    <nav className="fa-stages"><button className={stage==="signals"?"active":""} onClick={()=>setStage("signals")}><b>01</b> SEIS SEÑALES <small>22 MIN</small></button><button className={stage==="tone"?"active":""} onClick={()=>setStage("tone")}><b>02</b> ENTONACIÓN <small>6 MIN</small></button><button className={stage==="conclusion"?"active":""} onClick={()=>setStage("conclusion")}><b>03</b> CONTRASEÑAL <small>7 MIN</small></button><button className={stage==="conversation"?"active":""} onClick={()=>setStage("conversation")}><b>04</b> MESA ABIERTA <small>10 MIN</small></button></nav>

    {stage==="signals"&&<section className="fa-control">
      <div className="fa-image"><img src="/listening-premium/frecuencia-abierta.webp" alt="Sala internacional de producción de audio con seis voces adultas"/></div>
      <header className="fa-intro"><span>SEIS CIUDADES · UNA MISMA MAÑANA</span><h1>Frecuencia<br/><em>Abierta</em></h1><p>{content.topic}</p><small>Las voces pueden ocupar una posición y cuestionarla al mismo tiempo.</small></header>
      <aside className="fa-signals"><header><span>SEÑALES ENTRANTES</span><b>{heard.length}/6</b></header>{content.signals.map((item,index)=><button key={item.id} className={`${index===activeIndex?"active":""} ${heard.includes(item.id)?"heard":""}`} onClick={()=>chooseSignal(index)}><span>{item.number}</span><p><b>{item.city}</b><small>{item.channel}</small></p><i>{positions[item.id]===undefined?heard.includes(item.id)?"SIN UBICAR":"NUEVA":`${positions[item.id]+1}/5`}</i></button>)}</aside>
      <article className="fa-monitor"><header><div><span>SEÑAL {signal.number} · {signal.city}</span><h2>{signal.speaker}</h2><p>{signal.role} · {signal.variety}</p></div><b>{signal.channel}</b></header><div className="fa-before"><small>ANTES DE ESCUCHAR</small><p>¿Qué intereses puede tener alguien con este rol? Separá esa hipótesis de lo que realmente oigas.</p></div><AudioDeck key={signal.id} src={signal.file} title={`${signal.speaker} · ${signal.city}`} channel={signal.channel} accent="#49dff5" onComplete={()=>setHeard(previous=>previous.includes(signal.id)?previous:[...previous,signal.id])}/>
        {!isHeard?<div className="fa-sealed">El panel de interpretación permanece cerrado hasta el final de la señal.</div>:<section className="fa-reading"><small>SUPERFICIE</small><p>{signal.surface}</p><h2>{signal.question}</h2><div className="fa-scale">{scale.map((label,index)=><button key={label} className={positions[signal.id]===index?"active":""} onClick={()=>setPositions(previous=>({...previous,[signal.id]:index}))}><span>{index+1}</span>{label}</button>)}</div>{positions[signal.id]!==undefined&&<aside><b>EXPLICÁ LA AMBIGÜEDAD</b><p>{signal.talk}</p></aside>}</section>}
        <div className="fa-private-controls"><button onClick={()=>setTranscript(value=>!value)}>{transcript?"OCULTAR TRANSCRIPCIÓN":"PROFESOR · TRANSCRIPCIÓN"}</button><button onClick={()=>setTeacher(value=>!value)}>{teacher?"OCULTAR OBJECIÓN":"PROFESOR · CONTRAARGUMENTO"}</button></div>{transcript&&<aside className="fa-transcript">{signal.segments.map((segment,index)=><p key={index}><b>{segment.speaker}:</b> {segment.text}</p>)}</aside>}{teacher&&<aside className="fa-teacher"><b>INTERVENCIÓN DOCENTE</b><p>{signal.counter}</p></aside>}<footer><button disabled={activeIndex===0} onClick={()=>chooseSignal(activeIndex-1)}>← ANTERIOR</button><button onClick={()=>activeIndex===content.signals.length-1?setStage("tone"):chooseSignal(activeIndex+1)}>{activeIndex===content.signals.length-1?"PASAR A ENTONACIÓN →":"SIGUIENTE SEÑAL →"}</button></footer>
      </article>
    </section>}

    {stage==="tone"&&<section className="fa-tone"><header><span>LA MISMA FRASE · CINCO INTENCIONES · 6 MIN</span><h1>“Sí, claro.<br/>Cuando quieras.”</h1><p>El significado no está solo en las palabras. Leé el contexto, escuchá una vez y elegí la intención dominante.</p></header><div className="fa-tone-grid"><aside>{content.toneLab.map((item,index)=><button key={item.id} className={index===toneIndex?"active":""} onClick={()=>setToneIndex(index)}><span>0{index+1}</span><p>{item.context}</p><i>{toneAnswers[item.id]?"✓":toneHeard.includes(item.id)?"○":"▶"}</i></button>)}</aside><article><small>CONTEXTO {toneIndex+1}</small><h2>{tone.context}</h2><AudioDeck key={tone.id} src={tone.file} title="Sí, claro. Cuando quieras." channel="LABORATORIO DE ENTONACIÓN" accent="#f252be" onComplete={()=>setToneHeard(previous=>previous.includes(tone.id)?previous:[...previous,tone.id])}/>{!toneHeard.includes(tone.id)?<div className="fa-sealed">Las intenciones se abren después de escuchar la frase completa.</div>:<><div>{intents.map(intent=><button key={intent} className={toneAnswers[tone.id]?intent===tone.intent?"correct":toneAnswers[tone.id]===intent?"wrong":"muted":""} onClick={()=>!toneAnswers[tone.id]&&setToneAnswers(previous=>({...previous,[tone.id]:intent}))}>{intent}</button>)}</div>{toneAnswers[tone.id]&&<p><b>{toneAnswers[tone.id]===tone.intent?"Lectura coherente.":"Compará tono y contexto."}</b> Repetí la frase imitando la intención y cambiá una sola palabra.</p>}</>}</article></div><footer><button onClick={()=>setStage("signals")}>← VOLVER A LAS SEÑALES</button><button onClick={()=>setStage("conclusion")}>ABRIR LA CONTRASEÑAL →</button></footer></section>}

    {stage==="conclusion"&&<section className="fa-conclusion"><header><span>SEÑAL 07 · 11:47 · 7 MIN</span><h1>Un dato que<br/>no elige bando.</h1><p>Escuchá antes de cerrar tu postura. Esta última señal contradice cualquier conclusión demasiado limpia.</p></header><article><div className="fa-source"><span>{content.finalSignal.city}</span><h2>{content.finalSignal.speaker}</h2><p>{content.finalSignal.role} · {content.finalSignal.variety}</p></div><AudioDeck src={content.finalSignal.file} title="La contraseñal" channel={content.finalSignal.channel} accent="#f252be"/><section><small>CIERRE ORAL · 60–90 SEGUNDOS</small><h2>{content.finalSignal.prompt}</h2><div><span>CONCESIÓN</span><span>IMPLICACIÓN</span><span>DATO QUE CAMBIÓ TU POSTURA</span></div></section><button className="fa-teacher-button" onClick={()=>setTeacher(value=>!value)}>{teacher?"OCULTAR CONTRAARGUMENTOS":"PROFESOR · ABRIR CONTRAARGUMENTOS"}</button>{teacher&&<aside className="fa-final-teacher">{content.finalSignal.teacher.map(item=><p key={item}>{item}</p>)}</aside>}<footer><button onClick={()=>setStage("tone")}>← ENTONACIÓN</button><button onClick={()=>setStage("conversation")}>MESA ABIERTA →</button></footer></article></section>}

    {stage==="conversation"&&<section className="fa-final"><header><span>CONVERSACIÓN C2 · 10 MIN</span><h1>Escuchar también<br/>es posicionarse.</h1><p>Respondé, aceptá una objeción y reformulá sin borrar el desacuerdo.</p></header><article><span>PREGUNTA {String(finalIndex+1).padStart(2,"0")}</span><h2>{content.finalQuestions[finalIndex].q}</h2><div className="fa-depth"><section><b>FOLLOW-UP</b><p>{content.finalQuestions[finalIndex].follow}</p></section><section><b>CONTRAARGUMENTO</b><p>{content.finalQuestions[finalIndex].counter}</p></section></div><nav>{content.finalQuestions.map((_,index)=><button key={index} className={index===finalIndex?"active":""} onClick={()=>setFinalIndex(index)}>{index+1}</button>)}</nav><footer><button disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>←</button><button disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>SIGUIENTE →</button></footer></article></section>}

    <button className="fa-support-button" onClick={()=>setSupport(value=>!value)}>RECURSOS C2</button>{support&&<aside className="fa-support"><header><b>POSICIÓN, REGISTRO E IMPLÍCITO</b><button onClick={()=>setSupport(false)}>×</button></header>{content.supports.map(item=><p key={item}>{item}</p>)}</aside>}
  </main>;
}
