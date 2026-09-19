"use client";

import Link from "next/link";
import {useMemo,useState} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import content from "./content.json";
import "./style.css";
import { SpanishCueBrand } from "../SpanishCueBrand";

type Stage="building"|"package"|"conversation";

function Transcript({segments}:{segments:{speaker:string;text:string}[]}){
  return <aside className="ev-transcript"><b>TRANSCRIPCIÓN · CONTROL DEL PROFESOR</b>{segments.map((segment,index)=><p key={index}><strong>{segment.speaker}:</strong> {segment.text}</p>)}</aside>;
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

  return <main className="ev-app">
    <header className="ev-top"><Link href="/">← BIBLIOTECA</Link><Link className="ev-brand" href="/"><SpanishCueBrand variant="compact" tone="light" context="ESCUCHA" /></Link><span>A1 · 45 MIN</span></header>
    <nav className="ev-rail" aria-label="Recorrido"><button className={stage==="building"?"active":""} onClick={()=>setStage("building")}><b>01</b><span>VECINOS</span><small>25 min</small></button><button className={stage==="package"?"active":""} onClick={()=>setStage("package")}><b>02</b><span>PAQUETE</span><small>8 min</small></button><button className={stage==="conversation"?"active":""} onClick={()=>setStage("conversation")}><b>03</b><span>CONVERSACIÓN</span><small>12 min</small></button></nav>

    {stage==="building"&&<section className="ev-building">
      <div className="ev-image"><img src="/listening-premium/edificio-voces.webp" alt="Edificio moderno con vecinos adultos y un intercomunicador"/></div>
      <div className="ev-intro"><span>CIUDAD · 19:10 · SEIS PUERTAS</span><h1>El Edificio<br/><em>de las Voces</em></h1><p>No hay perfiles para leer. Tocá un departamento, escuchá a su vecino y usá la información para hablar.</p><div className="ev-method"><b>ESCUCHÁ</b><i>→</i><b>ENTENDÉ</b><i>→</i><b>RESPONDÉ</b><i>→</i><b>HABLÁ</b></div></div>
      <aside className="ev-intercom"><header><span>PORTERO · {visited}/6 VOCES</span><i className={visited?"on":""}/></header><div>{content.neighbors.map((item,index)=><button key={item.id} className={`${index===activeIndex?"active":""} ${heard.includes(item.id)?"heard":""}`} onClick={()=>choose(index)}><span>{item.door}</span><p><b>{heard.includes(item.id)?item.name:"VOZ SIN ABRIR"}</b><small>{item.channel}</small></p><i>{heard.includes(item.id)?"✓":"▶"}</i></button>)}</div></aside>
      <article className="ev-console"><header><div><span>DEPTO. {active.door}</span><h2>{active.name}</h2><p>{active.channel} · voz de {active.variety}</p></div><b>{heard.includes(active.id)?"ESCUCHADO":"NUEVO"}</b></header><div className="ev-predict"><small>ANTES DE ESCUCHAR</small><p>{active.prediction}</p></div><AudioDeck key={active.id} src={active.file} title={`Mensaje de ${active.name}`} channel={`${active.channel} · ${active.variety}`} accent="#ffbd6b" allowSlow onComplete={markHeard}/>
        {!isHeard?<div className="ev-locked">La pregunta se abre cuando termina el audio.</div>:<div className="ev-task"><small>AHORA COMPROBÁ</small><h2>{active.question}</h2><div>{active.options.map((option,index)=><button key={option} className={answered===undefined?"":index===active.answer?"correct":answered===index?"wrong":"muted"} onClick={()=>answered===undefined&&setAnswers(previous=>({...previous,[active.id]:index}))}>{option}</button>)}</div>{answered!==undefined&&<section><b>{answered===active.answer?"Bien escuchado.":"Escuchalo otra vez y compará."}</b><h3>{active.talk}</h3><p>{active.starter}</p></section>}</div>}
        <button className="ev-teacher" onClick={()=>setTranscript(value=>!value)}>{transcript?"OCULTAR TRANSCRIPCIÓN":"PROFESOR · VER TRANSCRIPCIÓN"}</button>{transcript&&<Transcript segments={active.segments}/>}<footer><button disabled={activeIndex===0} onClick={()=>choose(activeIndex-1)}>← ANTERIOR</button><button onClick={()=>activeIndex===content.neighbors.length-1?setStage("package"):choose(activeIndex+1)}>{activeIndex===content.neighbors.length-1?"RESOLVER EL PAQUETE →":"SIGUIENTE PUERTA →"}</button></footer>
      </article>
    </section>}

    {stage==="package"&&<section className="ev-package"><div><span>GIRO FINAL · 8 MIN</span><h1>Un paquete.<br/>Ningún nombre.</h1><p>Escuchá el diálogo de la entrada. Después elegí a quién puede pertenecer y justificá con dos datos de los vecinos.</p><div className="ev-memory">VOCES ESCUCHADAS <b>{visited}/6</b><small>Podés resolverlo aunque no hayas abierto todas.</small></div></div><article><AudioDeck src={content.package.file} title="El repartidor llegó" channel={`${content.package.channel} · ${content.package.variety}`} accent="#70e5d2" allowSlow onComplete={markHeard}/>{!isHeard?<div className="ev-locked">Primero escuchá el diálogo completo.</div>:<div className="ev-task"><small>DECISIÓN</small><h2>{content.package.question}</h2><div>{content.package.options.map((option,index)=><button key={option} className={answered===undefined?"":index===content.package.answer?"correct":answered===index?"wrong":"muted"} onClick={()=>answered===undefined&&setAnswers(previous=>({...previous,[content.package.id]:index}))}>{option}</button>)}</div>{answered!==undefined&&<section><b>{answered===content.package.answer?"La información coincide.":"Revisá piso, horario y gustos."}</b><h3>{content.package.talk}</h3><p>{content.package.starter}</p></section>}</div>}<button className="ev-teacher" onClick={()=>setTranscript(value=>!value)}>{transcript?"OCULTAR TRANSCRIPCIÓN":"PROFESOR · VER TRANSCRIPCIÓN"}</button>{transcript&&<Transcript segments={content.package.segments}/>}<footer><button onClick={()=>setStage("building")}>← VOLVER A LOS VECINOS</button><button onClick={()=>setStage("conversation")}>CONVERSACIÓN FINAL →</button></footer></article></section>}

    {stage==="conversation"&&<section className="ev-final"><header><span>CONVERSACIÓN REAL · 12 MIN</span><h1>Ahora abrí<br/>tu propia puerta.</h1><p>Una pregunta por vez. Respondé, preguntale al profesor y agregá un detalle.</p></header><article><span>{String(finalIndex+1).padStart(2,"0")} / {content.finalQuestions.length}</span><h2>{content.finalQuestions[finalIndex]}</h2><p>Después preguntá: <b>¿Y vos?</b></p><nav>{content.finalQuestions.map((_,index)=><button key={index} className={index===finalIndex?"active":""} onClick={()=>setFinalIndex(index)}>{index+1}</button>)}</nav><footer><button disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>←</button><button disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>SIGUIENTE →</button></footer></article></section>}

    <button className="ev-support-button" onClick={()=>setSupport(value=>!value)}>AYUDA PARA HABLAR</button>
    {support&&<aside className="ev-support"><header><b>FRASES PARA EMPEZAR</b><button onClick={()=>setSupport(false)}>×</button></header>{content.supports.map(item=><p key={item}>{item}</p>)}</aside>}
  </main>;
}
