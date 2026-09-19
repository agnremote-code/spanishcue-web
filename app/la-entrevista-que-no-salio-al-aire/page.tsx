"use client";

import Link from "next/link";
import {useState} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import content from "./content.json";
import "./style.css";
import { SpanishCueBrand } from "../SpanishCueBrand";

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

  return <main className="en-app">
    <header className="en-top"><Link href="/">← BIBLIOTECA</Link><Link className="en-brand" href="/"><SpanishCueBrand variant="compact" tone="light" context="ESCUCHA" /></Link><span>C1 · MATERIAL SIN EDITAR</span></header>
    <nav className="en-nav"><button className={stage==="raw"?"active":""} onClick={()=>setStage("raw")}>MATERIAL BRUTO <small>25 MIN</small></button><button className={stage==="edit"?"active":""} onClick={()=>setStage("edit")}>SALA DE EDICIÓN <small>8 MIN</small></button><button className={stage==="conversation"?"active":""} onClick={()=>setStage("conversation")}>FUERA DE CÁMARA <small>12 MIN</small></button></nav>

    {stage==="raw"&&<section className="en-studio">
      <div className="en-image"><img src="/listening-premium/entrevista-no-salio.webp" alt="Entrevista editorial entre dos adultos con una sala de edición al fondo"/></div>
      <header className="en-intro"><span>UMBRAL · ENTREVISTA 08 · SIN PUBLICAR</span><h1>La entrevista que<br/><em>no salió al aire</em></h1><p>Cinco fragmentos. León se corrige, esquiva, cambia de registro y finalmente altera la lectura de todo lo anterior.</p></header>
      <aside className="en-timeline"><header><span>TIMELINE · 05 CLIPS</span><b>{heard.length}/5 OÍDOS</b></header>{content.clips.map((item,index)=><button key={item.id} onClick={()=>chooseClip(index)} className={`${index===activeIndex?"active":""} ${heard.includes(item.id)?"heard":""}`}><span>{item.number}</span><div><b>{item.title}</b><small>{item.editorTag}</small></div><i>{heard.includes(item.id)?"●":"○"}</i></button>)}</aside>
      <article className="en-monitor"><header><div><span>FRAGMENTO {clip.number} · {clip.channel}</span><h2>{clip.title}</h2><p>Nora Ibáñez entrevista a {content.guest.name}</p></div><b>RAW</b></header><div className="en-hook"><small>DESAFÍO DE ESCUCHA</small><p>{clip.hook}</p></div><AudioDeck key={clip.id} src={clip.file} title={clip.title} channel={clip.channel} accent="#e34e55" onComplete={()=>setHeard(previous=>previous.includes(clip.id)?previous:[...previous,clip.id])}/>
        {!isHeard?<div className="en-sealed">El análisis se abre al terminar el fragmento.</div>:<section className="en-analysis"><small>¿QUÉ QUISO DECIR?</small><h2>{clip.question}</h2><div>{clip.options.map((option,index)=><button key={option} className={answer===undefined?"":index===clip.answer?"correct":answer===index?"wrong":"muted"} onClick={()=>answer===undefined&&setAnswers(previous=>({...previous,[clip.id]:index}))}>{option}</button>)}</div>{answer!==undefined&&<aside><h3>{clip.analysis}</h3><p>{clip.talk}</p></aside>}</section>}
        <button className="en-transcript-button" onClick={()=>setTranscript(value=>!value)}>{transcript?"OCULTAR TRANSCRIPCIÓN":"PROFESOR · VER TRANSCRIPCIÓN"}</button>{transcript&&<aside className="en-transcript">{clip.segments.map((segment,index)=><p key={index}><b>{segment.speaker}:</b> {segment.text}</p>)}</aside>}<footer><button disabled={activeIndex===0} onClick={()=>chooseClip(activeIndex-1)}>← CLIP ANTERIOR</button><button onClick={()=>activeIndex===content.clips.length-1?setStage("edit"):chooseClip(activeIndex+1)}>{activeIndex===content.clips.length-1?"ENTRAR A EDICIÓN →":"SIGUIENTE CLIP →"}</button></footer>
      </article>
    </section>}

    {stage==="edit"&&<section className="en-edit"><header><span>SALA DE EDICIÓN · 8 MIN</span><h1>Cinco fragmentos.<br/>Solo publicás tres.</h1><p>Elegí sin manipular el sentido. Después defendé tu corte y construí dos titulares opuestos.</p></header><div className="en-cut"><div className="en-track">{content.clips.map(item=><button key={item.id} className={selected.includes(item.id)?"selected":""} onClick={()=>toggleSelection(item.id)}><span>{item.number}</span><div><b>{item.title}</b><small>{item.editorTag}</small></div><i>{selected.includes(item.id)?"INCLUIR":"DESCARTAR"}</i></button>)}</div><aside><span>VERSIÓN FINAL</span><b>{selected.length}/3</b><p>{selected.length<3?"Elegí tres fragmentos.":"El corte está listo para defender."}</p></aside></div>{selected.length===3&&<article className="en-headlines"><section><small>DEFENSA ORAL · 60 SEGUNDOS</small><h2>¿Qué comprensión obtiene el público con estos tres clips y qué pierde?</h2><p>Citá una elección lingüística concreta de León.</p></section><section><small>TITULAR JUSTO</small><h2>Creá un titular que represente la complejidad sin absolverlo ni condenarlo.</h2></section><section><small>TITULAR SENSACIONALISTA</small><h2>Ahora deformá el mismo material sin inventar un dato. Explicá el mecanismo.</h2></section><button onClick={()=>setStage("conversation")}>ABRIR CONVERSACIÓN FINAL →</button></article>}<button className="en-back" onClick={()=>setStage("raw")}>← VOLVER AL MATERIAL BRUTO</button></section>}

    {stage==="conversation"&&<section className="en-final"><header><span>CONVERSACIÓN C1 · 12 MIN</span><h1>Lo que queda<br/>fuera del corte.</h1><p>Interpretá, matizá y cuestioná. Cada respuesta debe incluir una reserva o una segunda lectura.</p></header><article><span>PREGUNTA {String(finalIndex+1).padStart(2,"0")}</span><h2>{content.finalQuestions[finalIndex]}</h2><div><b>PROFUNDIZÁ</b><p>¿Qué ejemplo lo demuestra? · ¿Qué objeción aceptarías? · ¿Cambiaría según el contexto?</p></div><nav>{content.finalQuestions.map((_,index)=><button key={index} className={index===finalIndex?"active":""} onClick={()=>setFinalIndex(index)}>{index+1}</button>)}</nav><footer><button disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>←</button><button disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>SIGUIENTE →</button></footer></article></section>}

    <button className="en-support-button" onClick={()=>setSupport(value=>!value)}>LENGUAJE C1</button>{support&&<aside className="en-support"><header><b>INFERIR Y MATIZAR</b><button onClick={()=>setSupport(false)}>×</button></header>{content.supports.map(item=><p key={item}>{item}</p>)}</aside>}
  </main>;
}
