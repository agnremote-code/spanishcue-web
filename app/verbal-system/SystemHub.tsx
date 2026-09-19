"use client";

import Link from "next/link";
import {useMemo,useState,type CSSProperties,type KeyboardEvent} from "react";
import {SpanishCueBrand} from "../SpanishCueBrand";
import ModeTimeIntro from "./ModeTimeIntro";
import type {ProductiveStatus,TemporalPlane,VerbalLessonSummary,VerbalMood} from "./lesson-data";
import "./system.css";

type View="mode"|"time";
const levels=["Todos","A1","A2","B1","B2","C1","C2"];
const modes:Array<"Todos"|VerbalMood>=["Todos","Indicativo","Subjuntivo","Imperativo"];
const planes:Array<"Todos"|TemporalPlane>=["Todos","Presente","Pasado","Futuro","Condicional","Sin oposición temporal"];
const statuses:Array<"Todos"|ProductiveStatus>=["Todos","Productivo","Receptivo","Histórico / restringido"];
const normalize=(value:string)=>value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const systemMasterClasses = [
  {title:"La Ciudad de los Motores",copy:"Visión general A1–A2 del verbo, el presente, ser/estar/hay, planes y primeras miradas al pasado.",path:"/la-ciudad-de-los-motores"},
  {title:"El Pasado",copy:"Comparación amplia entre indefinido, imperfecto y perfecto compuesto.",path:"/past-b1"},
  {title:"El País del Subjuntivo",copy:"Clase maestra con los seis tiempos del subjuntivo y concordancia temporal.",path:"/subjuntivo-pais-maravillas"},
  {title:"Condicionales paso a paso",copy:"Aplicación de los tiempos dentro de cero, primero, segundo, tercero y mixtos.",path:"/condicionales-b1"},
];

export default function SystemHub({lessons}:{lessons:VerbalLessonSummary[]}){
  const [view,setView]=useState<View>("mode");
  const [mode,setMode]=useState<(typeof modes)[number]>("Todos");
  const [plane,setPlane]=useState<(typeof planes)[number]>("Todos");
  const [level,setLevel]=useState("Todos");
  const [status,setStatus]=useState<(typeof statuses)[number]>("Todos");
  const [query,setQuery]=useState("");
  const filtered=useMemo(()=>lessons.filter(item=>(mode==="Todos"||item.mood===mode)&&(plane==="Todos"||item.plane===plane)&&(level==="Todos"||item.level===level||item.levels?.includes(level))&&(status==="Todos"||item.status===status)&&normalize(`${item.title} ${item.shortTitle} ${item.mood} ${item.tense} ${item.plane}`).includes(normalize(query))),[mode,plane,level,status,query,lessons]);
  const grouped=useMemo(()=>{
    const keys=view==="mode"?["Indicativo","Subjuntivo","Imperativo"]:["Presente","Pasado","Futuro","Condicional","Sin oposición temporal"];
    return keys.map(key=>({key,items:filtered.filter(item=>view==="mode"?item.mood===key:item.plane===key)})).filter(group=>group.items.length);
  },[filtered,view]);
  const reset=()=>{setMode("Todos");setPlane("Todos");setLevel("Todos");setStatus("Todos");setQuery("")};
  const selectView=(next:View)=>{
    setView(next);
    if(next==="mode")setPlane("Todos");
    else setMode("Todos");
  };
  const moveView=(event:KeyboardEvent<HTMLButtonElement>)=>{
    if(event.key!=="ArrowLeft"&&event.key!=="ArrowRight")return;
    event.preventDefault();
    const next:View=view==="mode"?"time":"mode";
    selectView(next);
    requestAnimationFrame(()=>document.getElementById(`verbal-view-${next}`)?.focus());
  };
  return <main className="vs-shell">
    <header className="vs-topbar"><Link href="/" aria-label="Volver a la biblioteca">←</Link><SpanishCueBrand variant="compact" tone="light" context="SISTEMA VERBAL"/><span>16 TIEMPOS · 3 MODOS</span></header>
    <section className="vs-hero">
      <div><span>★ RUTA FUNDAMENTAL · A1–C2</span><h1>El sistema verbal,<br/><em>por dos caminos.</em></h1><p>Entrá por la mirada del hablante o por la línea temporal. Las dos rutas llevan a las mismas clases.</p></div>
      <div className="vs-hero-stat"><strong>16</strong><span>TIEMPOS</span><strong>+1</strong><span>IMPERATIVO</span></div>
    </section>
    <ModeTimeIntro/>
    <section className="vs-explorer" id="explorar">
      <header><span>UNA BIBLIOTECA · DOS RECORRIDOS</span><h2>Elegí cómo querés entrar.</h2></header>
      <div className="vs-view-switch" role="tablist" aria-label="Forma de explorar">
        <button role="tab" aria-selected={view==="mode"} aria-controls="verbal-results" id="verbal-view-mode" tabIndex={view==="mode"?0:-1} className={view==="mode"?"active":""} onKeyDown={moveView} onClick={()=>selectView("mode")}><small>RUTA 01</small><b>POR MODO</b><span>Indicativo · subjuntivo · imperativo</span></button>
        <button role="tab" aria-selected={view==="time"} aria-controls="verbal-results" id="verbal-view-time" tabIndex={view==="time"?0:-1} className={view==="time"?"active":""} onKeyDown={moveView} onClick={()=>selectView("time")}><small>RUTA 02</small><b>POR TIEMPO</b><span>Presente · pasado · futuro · condicional</span></button>
      </div>
      <div className="vs-filters">
        <label><span>BUSCAR</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Ej. imperfecto, futuro, subjuntivo…"/></label>
        <label><span>NIVEL</span><select value={level} onChange={event=>setLevel(event.target.value)}>{levels.map(item=><option key={item}>{item}</option>)}</select></label>
        <label><span>USO</span><select value={status} onChange={event=>setStatus(event.target.value as (typeof statuses)[number])}>{statuses.map(item=><option key={item}>{item}</option>)}</select></label>
      </div>
      {view==="mode"?<nav className="vs-chip-row" aria-label="Filtrar por modo">{modes.map(item=><button key={item} aria-pressed={mode===item} onClick={()=>setMode(item)}>{item}</button>)}</nav>:<nav className="vs-chip-row" aria-label="Filtrar por tiempo">{planes.map(item=><button key={item} aria-pressed={plane===item} onClick={()=>setPlane(item)}>{item}</button>)}</nav>}
      <div id="verbal-results" role="tabpanel" aria-labelledby={`verbal-view-${view}`}>
        <div className="vs-results-head"><strong>{filtered.length} {filtered.length===1?"clase":"clases"}</strong><span>Una clase canónica · un solo progreso</span><button onClick={reset}>LIMPIAR FILTROS</button></div>
        {grouped.length?<div className="vs-groups">{grouped.map(group=><section key={group.key} className="vs-group"><header><span>{view==="mode"?"MODO":"PLANO TEMPORAL"}</span><h3>{group.key}</h3><b>{group.items.length}</b></header><div className="vs-card-grid">{group.items.map(item=><Link href={`/sistema-verbal/${item.slug}`} className="vs-card" style={{"--vs-accent":item.accent} as CSSProperties} key={item.id}><div><span>{item.level}</span><span>{item.status}</span>{item.compound&&<span>COMPUESTO</span>}</div><small>{item.mood} · {item.plane}</small><h4>{item.title}</h4><p>{item.question}</p><footer><b>≈ 45 MIN</b><span>ABRIR CLASE →</span></footer></Link>)}</div></section>)}</div>:<div className="vs-empty"><b>No hay clases con esa combinación.</b><button onClick={reset}>Restablecer recorrido</button></div>}
      </div>
    </section>
    <section className="vs-masters"><header><span>RECORRIDOS COMPLEMENTARIOS</span><h2>Clases maestras que ya forman parte de SPANISHCUE</h2><p>No se duplican: amplían, comparan y conectan varias clases canónicas.</p></header><div>{systemMasterClasses.map(item=><Link href={item.path} key={item.path}><b>{item.title}</b><p>{item.copy}</p><span>ABRIR RECORRIDO →</span></Link>)}</div></section>
    <footer className="vs-footer"><Link href="/">← VOLVER A GRAMÁTICA</Link><b>SPANISHCUE · CHOOSE. OPEN. TEACH.</b></footer>
  </main>;
}
