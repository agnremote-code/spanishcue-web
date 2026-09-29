"use client";

import Link from "next/link";
import {useState} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import {SpanishCueBrand} from "../SpanishCueBrand";
import content from "./content.json";
import "./style.css";

type Stage="signals"|"mission"|"conversation";
type Attempt={heard:boolean;assisted:boolean;detail:boolean;choice:number|null;checked:boolean;revealed:boolean};
const fresh=():Attempt=>({heard:false,assisted:false,detail:false,choice:null,checked:false,revealed:false});

export default function UltimaLlamada(){
  const [stage,setStage]=useState<Stage>("signals");
  const [activeIndex,setActiveIndex]=useState(0);
  const [attempts,setAttempts]=useState<Record<string,Attempt>>({});
  const [notes,setNotes]=useState<string[]>([]);
  const [transcript,setTranscript]=useState<string|null>(null);
  const [support,setSupport]=useState(false);
  const [finalIndex,setFinalIndex]=useState(0);
  const [plan,setPlan]=useState<string|null>(null);
  const [round,setRound]=useState(0);
  const [observed,setObserved]=useState(false);
  const active=content.signals[activeIndex], attempt=attempts[active.id]||fresh();
  const opened=attempt.heard||attempt.assisted;
  const factVisible=attempt.revealed||(attempt.checked&&attempt.choice===active.answer);
  const heard=content.signals.filter(s=>attempts[s.id]?.heard).length;
  const reviewed=content.signals.filter(s=>attempts[s.id]?.checked).length;
  const missionReady=content.signals.every(s=>attempts[s.id]?.heard||attempts[s.id]?.assisted);
  const update=(patch:Partial<Attempt>)=>setAttempts(previous=>({...previous,[active.id]:{...(previous[active.id]||fresh()),...patch}}));
  const select=(index:number)=>{setActiveIndex(index);setTranscript(null);};
  const navigate=(next:Stage)=>{setStage(next);setTranscript(null);};
  const reset=()=>{setStage("signals");setActiveIndex(0);setAttempts({});setNotes([]);setTranscript(null);setSupport(false);setFinalIndex(0);setPlan(null);setObserved(false);setRound(n=>n+1);};
  const currentPlan=content.mission.options.find(p=>p.id===plan);

  return <main className="ul-app">
    <header className="ul-top"><Link href="/">← BIBLIOTECA</Link><Link href="/" className="ul-brand"><SpanishCueBrand variant="compact" tone="light" context="ESCUCHA"/></Link><span>A2 · MISIÓN 17:46</span></header>
    <nav className="ul-stage" aria-label="Etapas"><button className={stage==="signals"?"active":""} onClick={()=>navigate("signals")}><b>1</b> SEÑALES <small>25 MIN</small></button><button className={stage==="mission"?"active":""} onClick={()=>navigate("mission")}><b>2</b> ÚLTIMA LLAMADA <small>10 MIN</small></button><button className={stage==="conversation"?"active":""} onClick={()=>navigate("conversation")}><b>3</b> DESPUÉS DEL VIAJE <small>10 MIN</small></button></nav>
    <details className="ul-teacher"><summary>GUÍA DOCENTE · RUTA Y REINICIO</summary><p>{content.teacherRoute}</p><p>Las voces sintéticas conservan sus variedades declaradas. El reloj es parte de la situación, no una cuenta regresiva. Estado local: se pierde al recargar. Reiniciar borra respuestas, datos guardados y observaciones.</p><button onClick={reset}>REINICIAR LECCIÓN</button></details>
    {stage==="signals"&&<section className="ul-terminal">
      <div className="ul-hero"><img src="/listening-premium/ultima-llamada.webp" alt="Terminal de aeropuerto con pasajeros adultos y panel de salidas"/><div><span>VUELO 604 · TARDE DE CAMBIOS</span><h1>Última<br/><em>llamada</em></h1><p>Escuchá los mensajes, compará los datos y prepará tu plan.</p></div></div>
      <aside className="ul-board"><header><span>AUDIOS TERMINADOS</span><b>{heard}/6</b></header>{content.signals.map((item,index)=><button key={item.id} aria-current={index===activeIndex?"step":undefined} className={index===activeIndex?"active":""} onClick={()=>select(index)}><span>{String(index+1).padStart(2,"0")}</span><p><b>{item.title}</b><small>{item.channel}</small></p><i>{attempts[item.id]?.assisted?"CON TEXTO":attempts[item.id]?.heard?"OÍDO":"ABRIR"}</i></button>)}<p className="ul-progress">{reviewed}/6 respuestas comprobadas. Terminar un audio no demuestra comprensión.</p></aside>
      <article className="ul-workspace"><header><div><span>SEÑAL {activeIndex+1} · VOZ SINTÉTICA · {active.variety}</span><h2>{active.title}</h2><p>{active.channel}</p></div></header>
        <div className="ul-predict"><small>ANTES DE ESCUCHAR</small><p>{active.prediction}</p></div>
        <AudioDeck key={`${round}-${active.id}`} src={active.file} title={active.title} channel={active.channel} accent="#ffc453" allowSlow showWaveform={false} playingMessage={transcript===active.id?"Escucha con transcripción de apoyo visible.":"Escuchá el mensaje. Podés pausar o repetir."} onComplete={()=>update({heard:true})}/>
        <section className="ul-gist"><h3>PRIMERA ESCUCHA · IDEA GENERAL</h3><p>{active.gist}</p>{opened&&<button onClick={()=>update({detail:true})}>SEGUNDA ESCUCHA · BUSCAR EL DATO</button>}</section>
        {!opened?<div className="ul-sealed">Escuchá el audio para abrir la comprobación. Si necesitás una alternativa accesible, abrí la transcripción de apoyo.</div>:attempt.detail&&<section className="ul-task"><small>VOLVÉ A ESCUCHAR · DATO CONCRETO</small><h2>{active.question}</h2><div>{active.options.map((option,index)=><button key={option} aria-pressed={attempt.choice===index} className={attempt.choice===index?"selected":""} onClick={()=>update({choice:index,checked:false})}>{option}</button>)}</div><div className="ul-actions"><button disabled={attempt.choice===null} onClick={()=>update({checked:true})}>COMPROBAR</button><button onClick={()=>update({choice:null,checked:false,revealed:false})}>REINTENTAR</button><button onClick={()=>update({revealed:!attempt.revealed,assisted:true})}>{attempt.revealed?"OCULTAR DATO":"REVELAR DATO"}</button></div>
        {attempt.checked&&<p role="status">{attempt.choice===active.answer?"El dato coincide con la señal.":`Revisá tu respuesta. ${active.hint}`}{attempt.assisted?" Práctica con apoyo utilizado.":""}</p>}
        {factVisible&&<aside><b>DATO VERIFICADO EN EL GUIÓN</b><p>{active.fact}</p><blockquote>«{active.evidence}»</blockquote><button onClick={()=>setNotes(previous=>previous.includes(active.id)?previous.filter(id=>id!==active.id):[...previous,active.id])}>{notes.includes(active.id)?"QUITAR DATO DEL PLAN":"GUARDAR DATO EN EL PLAN"}</button><p>{active.talk}</p></aside>}</section>}
        <button className="ul-transcript-toggle" aria-expanded={transcript===active.id} onClick={()=>{setTranscript(transcript===active.id?null:active.id);if(transcript!==active.id)update({assisted:true});}}>{transcript===active.id?"OCULTAR TRANSCRIPCIÓN":"PROFESOR · VER TRANSCRIPCIÓN"}</button>
        {transcript===active.id&&<div className="ul-transcript"><b>APOYO DE TEXTO · NO CUENTA COMO AUDIO ESCUCHADO</b>{active.segments.map((segment,index)=><p key={index}><b>{segment.speaker}:</b> {segment.text}</p>)}</div>}
        <footer><button disabled={activeIndex===0} onClick={()=>select(activeIndex-1)}>← SEÑAL ANTERIOR</button><button onClick={()=>activeIndex===content.signals.length-1?navigate("mission"):select(activeIndex+1)}>{activeIndex===content.signals.length-1?"TOMAR LA DECISIÓN →":"SIGUIENTE SEÑAL →"}</button></footer>
      </article>
    </section>}
    {stage==="mission"&&<section className="ul-mission"><header><span>RECONSTRUIR Y DECIDIR · 10 MIN</span><h1>El panel cambió.<br/>Tu plan también.</h1><p>Recuperá qué anunciaron primero y qué cambió. Diferenciá un dato de una estimación.</p></header><div className="ul-clock"><span>HORA DEL ESCENARIO</span><b>{content.mission.time}</b><i>NO ES UNA CUENTA REGRESIVA</i></div><article><h2>Tus datos guardados</h2>{notes.length?<ul className="ul-facts">{content.signals.filter(s=>notes.includes(s.id)).map(s=><li key={s.id}><b>{s.title}</b><p>{s.fact}</p><button onClick={()=>{select(content.signals.indexOf(s));navigate("signals");}}>VOLVER A ESTA SEÑAL</button></li>)}</ul>:<p>Todavía no guardaste datos. Volvé a una señal, comprobá o revelá el dato y guardalo.</p>}
        {!missionReady?<div className="ul-sealed">Para integrar las fuentes, terminá las seis señales o usá su apoyo de texto. Podés visitar la conversación sin completar el cuestionario.</div>:<><h2>{content.mission.prompt}</h2><p>No hay una única respuesta: justificá el plan y nombrá una condición.</p><div>{content.mission.options.map(option=><button key={option.id} className={plan===option.id?"selected":""} aria-pressed={plan===option.id} onClick={()=>setPlan(option.id)}>{option.text}</button>)}</div>{currentPlan&&<aside role="status"><b>CONDICIONES DE TU PLAN</b><p>{currentPlan.feedback}</p><h3>{content.mission.oral}</h3></aside>}</>}
        <footer><button onClick={()=>navigate("signals")}>← REVISAR SEÑALES</button><button onClick={()=>navigate("conversation")}>CONVERSACIÓN FINAL →</button></footer></article></section>}
    {stage==="conversation"&&<section className="ul-final"><div><span>RESPONDER CON LOS AUDIOS · 10 MIN</span><h1>Cuando el plan cambia.</h1><p>{content.mission.oral}</p><p>Tu compañero hace de Nina y pregunta por el café. Después cambiá de papel: avisale a Diego de un posible retraso y acordá qué hacer.</p>{currentPlan&&<p className="ul-chosen">Tu decisión: {currentPlan.text}</p>}<button onClick={()=>navigate("mission")}>CONSULTAR MIS DATOS</button><label className="ul-observation"><input type="checkbox" checked={observed} onChange={e=>setObserved(e.target.checked)}/> El profesor observó dos datos claros, una razón y una petición. Confirmación manual.</label></div><article><small>EXTENSIÓN PERSONAL · ELEGÍ UNA</small><h2>{content.finalQuestions[finalIndex]}</h2><p>Seguimiento: ¿qué pasó después o qué harías la próxima vez?</p><nav aria-label="Preguntas opcionales">{content.finalQuestions.map((_,index)=><button key={index} className={finalIndex===index?"active":""} onClick={()=>setFinalIndex(index)}>{index+1}</button>)}</nav></article></section>}
    <button className="ul-help" aria-expanded={support} onClick={()=>setSupport(v=>!v)}>FRASES ÚTILES</button>{support&&<aside className="ul-support"><header><b>ORGANIZAR Y REACCIONAR</b><button aria-label="Cerrar frases útiles" onClick={()=>setSupport(false)}>×</button></header>{content.supports.map(item=><p key={item}>{item}</p>)}</aside>}
  </main>;
}
