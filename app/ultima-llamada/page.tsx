"use client";

import Link from "next/link";
import {useState} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import content from "./content.json";
import "./style.css";
import { SpanishCueBrand } from "../SpanishCueBrand";

type Stage="signals"|"mission"|"conversation";

export default function UltimaLlamada(){
  const [stage,setStage]=useState<Stage>("signals");
  const [activeIndex,setActiveIndex]=useState(0);
  const [heard,setHeard]=useState<string[]>([]);
  const [answers,setAnswers]=useState<Record<string,number>>({});
  const [notes,setNotes]=useState<string[]>([]);
  const [transcript,setTranscript]=useState(false);
  const [support,setSupport]=useState(false);
  const [finalIndex,setFinalIndex]=useState(0);
  const active=content.signals[activeIndex];
  const isHeard=heard.includes(active.id);
  const missionReady=heard.length===content.signals.length;
  const answer=answers[active.id];
  const markHeard=()=>setHeard(previous=>previous.includes(active.id)?previous:[...previous,active.id]);
  const addNote=()=>setNotes(previous=>previous.includes(active.id)?previous.filter(id=>id!==active.id):[...previous,active.id]);

  return <main className="ul-app">
    <header className="ul-top"><Link href="/">← BIBLIOTECA</Link><Link href="/" className="ul-brand"><SpanishCueBrand variant="compact" tone="light" context="ESCUCHA" /></Link><span>A2 · MISIÓN 17:46</span></header>
    <nav className="ul-stage"><button className={stage==="signals"?"active":""} onClick={()=>setStage("signals")}><b>1</b> SEÑALES <small>25 MIN</small></button><button className={stage==="mission"?"active":""} onClick={()=>setStage("mission")}><b>2</b> ÚLTIMA LLAMADA <small>10 MIN</small></button><button className={stage==="conversation"?"active":""} onClick={()=>setStage("conversation")}><b>3</b> DESPUÉS DEL VIAJE <small>10 MIN</small></button></nav>

    {stage==="signals"&&<section className="ul-terminal">
      <div className="ul-hero"><img src="/listening-premium/ultima-llamada.webp" alt="Terminal de aeropuerto con pasajeros adultos y panel de salidas"/><div><span>VUELO 604 · TARDE DE CAMBIOS</span><h1>Última<br/><em>llamada</em></h1><p>Tenés que llegar a tiempo. La información útil está en seis audios y cambia mientras avanzás.</p></div></div>
      <aside className="ul-board"><header><span>ENTRADAS DE AUDIO</span><b>{heard.length}/6</b></header>{content.signals.map((item,index)=><button key={item.id} className={`${index===activeIndex?"active":""} ${heard.includes(item.id)?"heard":""}`} onClick={()=>{setActiveIndex(index);setTranscript(false)}}><span>{String(index+1).padStart(2,"0")}</span><p><b>{item.title}</b><small>{item.channel}</small></p><i>{heard.includes(item.id)?"✓":"NUEVA"}</i></button>)}</aside>
      <article className="ul-workspace"><header><div><span>SEÑAL {String(activeIndex+1).padStart(2,"0")} · {active.variety}</span><h2>{active.title}</h2><p>{active.channel}</p></div><time>17:{String(34+activeIndex*2).padStart(2,"0")}</time></header><div className="ul-predict"><small>ANTES DE ESCUCHAR</small><p>{active.prediction}</p></div><AudioDeck key={active.id} src={active.file} title={active.title} channel={`${active.channel} · ${active.variety}`} accent="#ffc453" allowSlow onComplete={markHeard}/>
        {!isHeard?<div className="ul-sealed">La información operativa se abre al terminar el audio.</div>:<section className="ul-task"><small>COMPROBACIÓN + DECISIÓN</small><h2>{active.question}</h2><div>{active.options.map((option,index)=><button key={option} className={answer===undefined?"":index===active.answer?"correct":answer===index?"wrong":"muted"} onClick={()=>answer===undefined&&setAnswers(previous=>({...previous,[active.id]:index}))}>{option}</button>)}</div>{answer!==undefined&&<aside><b>{answer===active.answer?"Dato localizado":"Volvé a la señal"}</b><p>{active.talk}</p><button className={notes.includes(active.id)?"saved":""} onClick={addNote}>{notes.includes(active.id)?"✓ GUARDADO EN EL PLAN":"GUARDAR DATO EN EL PLAN"}</button></aside>}</section>}
        <button className="ul-transcript-toggle" onClick={()=>setTranscript(value=>!value)}>{transcript?"OCULTAR TRANSCRIPCIÓN":"PROFESOR · VER TRANSCRIPCIÓN"}</button>{transcript&&<div className="ul-transcript">{active.segments.map((segment,index)=><p key={index}><b>{segment.speaker}:</b> {segment.text}</p>)}</div>}<footer><button disabled={activeIndex===0} onClick={()=>setActiveIndex(value=>value-1)}>← SEÑAL ANTERIOR</button><button onClick={()=>activeIndex===content.signals.length-1?setStage("mission"):setActiveIndex(value=>value+1)}>{activeIndex===content.signals.length-1?"TOMAR LA DECISIÓN →":"SIGUIENTE SEÑAL →"}</button></footer>
      </article>
    </section>}

    {stage==="mission"&&<section className="ul-mission"><header><span>ÚLTIMA LLAMADA · 10 MIN</span><h1>El panel cambió.<br/>Tu tiempo no.</h1><p>Reconstruí en voz alta qué pasó, qué va a pasar y qué decisión tomás ahora.</p></header><div className="ul-clock"><span>HORA ACTUAL</span><b>{content.mission.time}</b><i>EMBARQUE 17:55</i></div><article><span>SITUACIÓN</span><h2>{content.mission.prompt}</h2>{!missionReady?<div className="ul-sealed">La decisión se abre cuando terminan las seis señales. Volvé al panel y escuchalas completas.</div>:<><div>{content.mission.options.map((option,index)=><button key={option} className={answers.mission===undefined?"":index===content.mission.answer?"correct":answers.mission===index?"wrong":"muted"} onClick={()=>answers.mission===undefined&&setAnswers(previous=>({...previous,mission:index}))}><b>0{index+1}</b>{option}</button>)}</div>{answers.mission!==undefined&&<aside><b>{answers.mission===content.mission.answer?"Llegás con margen.":"Ese plan pone el embarque en riesgo."}</b><p>{content.mission.feedback}</p><h3>Contale a Nina qué decidiste y qué tiene que hacer ella.</h3></aside>}</>}<footer><button onClick={()=>setStage("signals")}>← REVISAR SEÑALES</button><button onClick={()=>setStage("conversation")}>CONVERSACIÓN FINAL →</button></footer></article></section>}

    {stage==="conversation"&&<section className="ul-final"><div><span>DESPUÉS DEL VIAJE · 10 MIN</span><h1>Cuando el plan cambia.</h1><p>Respondé con una experiencia, una razón y una pregunta para el profesor.</p><div className="ul-route-line"><i/><i/><i/></div></div><article><small>PREGUNTA {finalIndex+1} / {content.finalQuestions.length}</small><h2>{content.finalQuestions[finalIndex]}</h2><p>Seguimiento: ¿qué pasó después o qué harías la próxima vez?</p><nav>{content.finalQuestions.map((_,index)=><button key={index} className={finalIndex===index?"active":""} onClick={()=>setFinalIndex(index)}>{index+1}</button>)}</nav><footer><button disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>←</button><button disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>SIGUIENTE →</button></footer></article></section>}

    <button className="ul-help" onClick={()=>setSupport(value=>!value)}>FRASES ÚTILES</button>{support&&<aside className="ul-support"><header><b>ORGANIZAR Y REACCIONAR</b><button onClick={()=>setSupport(false)}>×</button></header>{content.supports.map(item=><p key={item}>{item}</p>)}</aside>}
  </main>;
}
