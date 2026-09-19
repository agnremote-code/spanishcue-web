"use client";

import Link from "next/link";
import {useState,type DragEvent} from "react";
import AudioDeck from "../listening-studio/AudioDeck";
import content from "./content.json";
import "./style.css";
import { SpanishCueBrand } from "../SpanishCueBrand";

type Stage="testimonies"|"decision"|"conversation";

export default function Habitacion508(){
  const [stage,setStage]=useState<Stage>("testimonies");
  const [activeIndex,setActiveIndex]=useState(0);
  const [heard,setHeard]=useState<string[]>([]);
  const [orders,setOrders]=useState<Record<string,string[]>>({});
  const [verified,setVerified]=useState<string[]>([]);
  const [dragged,setDragged]=useState<number|null>(null);
  const [transcript,setTranscript]=useState(false);
  const [solution,setSolution]=useState<number|null>(null);
  const [finalIndex,setFinalIndex]=useState(0);
  const [support,setSupport]=useState(false);
  const item=content.testimonies[activeIndex];
  const isHeard=heard.includes(item.id);
  const order=orders[item.id]||[item.events[1],item.events[2],item.events[0]];

  const complete=()=>{
    setHeard(previous=>previous.includes(item.id)?previous:[...previous,item.id]);
    setOrders(previous=>previous[item.id]?previous:{...previous,[item.id]:[item.events[1],item.events[2],item.events[0]]});
  };
  const move=(from:number,to:number)=>{if(to<0||to>=order.length)return;const next=[...order];const [value]=next.splice(from,1);next.splice(to,0,value);setOrders(previous=>({...previous,[item.id]:next}));setVerified(previous=>previous.filter(id=>id!==item.id));};
  const drop=(event:DragEvent<HTMLDivElement>,to:number)=>{event.preventDefault();if(dragged!==null)move(dragged,to);setDragged(null);};
  const correct=order.every((event,index)=>event===item.events[index]);
  const selectTestimony=(index:number)=>{setActiveIndex(index);setTranscript(false)};
  const solutions=["Culpar a recepción y cerrar el caso","Pedir disculpas sin ofrecer nada","Reconocer la cadena, reparar a Laura y cambiar el proceso","Compensar a todos sin explicar qué ocurrió"];

  return <main className="h508-app">
    <header className="h508-top"><Link href="/">← BIBLIOTECA</Link><Link className="h508-brand" href="/"><SpanishCueBrand variant="compact" tone="light" context="ESCUCHA" /></Link><span>B2 · INCIDENCIA ABIERTA</span></header>
    <nav className="h508-steps"><button className={stage==="testimonies"?"active":""} onClick={()=>setStage("testimonies")}>TESTIMONIOS <small>27 MIN</small></button><button className={stage==="decision"?"active":""} onClick={()=>setStage("decision")}>RESPUESTA <small>8 MIN</small></button><button className={stage==="conversation"?"active":""} onClick={()=>setStage("conversation")}>CONVERSACIÓN <small>10 MIN</small></button></nav>

    {stage==="testimonies"&&<section className="h508-room">
      <div className="h508-image"><img src="/listening-premium/habitacion-508.webp" alt="Hotel boutique con una huésped y varios miembros adultos del personal"/></div>
      <header className="h508-intro"><span>HOTEL ALDABA · INFORME 508</span><h1>Habitación<br/><em>508</em></h1><p>No hubo un culpable. Hubo información parcial, controles incompletos y una cadena que tenés que reconstruir escuchando.</p></header>
      <aside className="h508-files"><header><span>VOCES DEL HOTEL</span><b>{heard.length}/6</b></header>{content.testimonies.map((testimony,index)=><button key={testimony.id} className={`${index===activeIndex?"active":""} ${heard.includes(testimony.id)?"heard":""}`} onClick={()=>selectTestimony(index)}><span>{testimony.time}</span><p><b>{testimony.speaker}</b><small>{testimony.role}</small></p><i>{heard.includes(testimony.id)?"✓":"ABRIR"}</i></button>)}</aside>
      <article className="h508-evidence"><header><div><span>{item.channel} · {item.time}</span><h2>{item.speaker}</h2><p>{item.role} · voz de {item.variety}</p></div><b>0{activeIndex+1}</b></header><div className="h508-focus"><small>FOCO DE ESCUCHA</small><p>{item.focus}</p></div><AudioDeck key={item.id} src={item.file} title={`Testimonio de ${item.speaker}`} channel={`${item.channel} · ${item.variety}`} accent="#d5b36b" onComplete={complete}/>
        {!isHeard?<div className="h508-sealed">La cronología parcial aparece después del testimonio.</div>:<><section className="h508-question"><small>INTERPRETÁ</small><h2>{item.question}</h2><p>{item.talk}</p></section><section className="h508-sort"><header><div><small>ACTUALIZÁ LA LÍNEA TEMPORAL</small><h3>Ordená estos tres eventos.</h3></div><span>ARRASTRÁ O USÁ LAS FLECHAS</span></header><div>{order.map((event,index)=><div key={event} draggable onDragStart={()=>setDragged(index)} onDragOver={e=>e.preventDefault()} onDrop={e=>drop(e,index)}><b>{index+1}</b><p>{event}</p><span><button aria-label="Mover antes" disabled={index===0} onClick={()=>move(index,index-1)}>↑</button><button aria-label="Mover después" disabled={index===order.length-1} onClick={()=>move(index,index+1)}>↓</button></span></div>)}</div><button onClick={()=>setVerified(previous=>previous.includes(item.id)?previous:[...previous,item.id])}>COMPROBAR ORDEN</button>{verified.includes(item.id)&&<p className={correct?"right":"again"}>{correct?"La secuencia coincide. Ahora explicá qué causa qué.":"Todavía hay un salto temporal. Escuchá fechas y conectores otra vez."}</p>}</section></>}
        <button className="h508-transcript-button" onClick={()=>setTranscript(value=>!value)}>{transcript?"OCULTAR TRANSCRIPCIÓN":"PROFESOR · VER TRANSCRIPCIÓN"}</button>{transcript&&<aside className="h508-transcript"><b>{item.speaker}</b><p>{item.segments[0].text}</p></aside>}<footer><button disabled={activeIndex===0} onClick={()=>selectTestimony(activeIndex-1)}>← ANTERIOR</button><button onClick={()=>activeIndex===content.testimonies.length-1?setStage("decision"):selectTestimony(activeIndex+1)}>{activeIndex===content.testimonies.length-1?"RESPONDER COMO GERENTE →":"SIGUIENTE TESTIMONIO →"}</button></footer>
      </article>
    </section>}

    {stage==="decision"&&<section className="h508-decision"><header><span>RECONSTRUCCIÓN · 8 MIN</span><h1>Una noche.<br/>Ocho puntos de falla.</h1><p>Explicá la cadena sin reducirla a una persona y elegí una respuesta profesional.</p></header><div className="h508-chain">{content.timeline.map((event,index)=><div key={event}><span>{String(index+1).padStart(2,"0")}</span><p>{event}</p></div>)}</div><article><small>TU DECISIÓN COMO GERENTE</small><h2>¿Qué respuesta representa mejor lo ocurrido?</h2><div>{solutions.map((text,index)=><button key={text} className={solution===index?"active":""} onClick={()=>setSolution(index)}><b>0{index+1}</b>{text}</button>)}</div>{solution!==null&&<section><h3>Antes de oír la respuesta real:</h3><p>Decile a Laura qué pasó, qué solución ofrecés y qué va a cambiar mañana.</p><AudioDeck src={content.resolution.file} title={content.resolution.title} channel={`${content.resolution.channel} · ${content.resolution.variety}`} accent="#d5b36b"/><button onClick={()=>setStage("conversation")}>COMPARAR Y CONVERSAR →</button></section>}<footer><button onClick={()=>setStage("testimonies")}>← REVISAR TESTIMONIOS</button></footer></article></section>}

    {stage==="conversation"&&<section className="h508-final"><header><span>CONVERSACIÓN B2 · 10 MIN</span><h1>Servicio, error<br/>y reputación.</h1><p>Respondé con postura, ejemplo y una reserva. El profesor introduce una objeción.</p></header><article><span>{String(finalIndex+1).padStart(2,"0")} / {content.finalQuestions.length}</span><h2>{content.finalQuestions[finalIndex]}</h2><div><b>DESARROLLÁ</b><p>¿Qué principio sostiene tu respuesta? · ¿Qué excepción aceptarías?</p></div><nav>{content.finalQuestions.map((_,index)=><button key={index} className={index===finalIndex?"active":""} onClick={()=>setFinalIndex(index)}>{index+1}</button>)}</nav><footer><button disabled={finalIndex===0} onClick={()=>setFinalIndex(value=>value-1)}>←</button><button disabled={finalIndex===content.finalQuestions.length-1} onClick={()=>setFinalIndex(value=>value+1)}>SIGUIENTE →</button></footer></article></section>}

    <button className="h508-help" onClick={()=>setSupport(value=>!value)}>RECURSOS B2</button>{support&&<aside className="h508-support"><header><b>RECONSTRUIR Y MATIZAR</b><button onClick={()=>setSupport(false)}>×</button></header>{content.supports.map(item=><p key={item}>{item}</p>)}</aside>}
  </main>;
}
