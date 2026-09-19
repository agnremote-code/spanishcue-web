"use client";

import {useState} from "react";
import Link from "next/link";
import {helpGroups,scenarios,slang,type Pair} from "./data";
import {useAccessibleModal} from "../useAccessibleModal";
import "./style.css";
import "./hero-fix.css";

const PairText=({pair,className=""}:{pair:Pair;className?:string})=><div className={`arp-pair ${className}`}><b>{pair[0]}</b><span>{pair[1]}</span></div>;

export default function ArgentoRoleplays(){
  const [current,setCurrent]=useState<number|null>(null);
  const [tab,setTab]=useState<"read"|"turn">("read");
  const [drawer,setDrawer]=useState<"help"|"slang"|null>(null);
  const closeDrawer=()=>setDrawer(null);
  const drawerRef=useAccessibleModal(Boolean(drawer),closeDrawer);
  const openScenario=(index:number)=>{setCurrent(index);setTab("read");requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"smooth"}))};
  const scenario=current===null?null:scenarios[current];
  const go=(direction:number)=>{if(current===null)return;openScenario((current+direction+scenarios.length)%scenarios.length)};

  return <main className="arp-shell">
    <nav className="arp-nav"><Link href="/" className="arp-brand"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>A0 · CONVERSACIÓN</small></span></Link><div><span>15 ESCENAS</span><span>210 INTERVENCIONES</span><span>100% BILINGÜE</span></div><Link href="/">← BIBLIOTECA</Link></nav>

    {scenario===null?<>
      <header className="arp-hero"><div className="arp-hero-copy"><span className="arp-kicker">🇦🇷 A0 · ROLEPLAYS REALES · REAL ROLEPLAYS</span><h1>ARGENTO<br/><em>ROLEPLAYS</em></h1><PairText pair={["Español argentino real desde cero. Leé, robá chunks, improvisá y hablá.","Real Argentine Spanish from zero. Read, borrow chunks, improvise and speak."]}/><div className="arp-steps"><article><b>01 · MIRÁ</b><span>Read the full scene</span></article><article><b>02 · ROBÁ</b><span>Borrow useful chunks</span></article><article><b>03 · HABLÁ</b><span>Create your answer</span></article></div></div><div className="arp-hero-art" aria-hidden="true"><div className="arp-orbit one">CHE</div><div className="arp-orbit two">DALE</div><div className="arp-orbit three">JOYA</div><img className="arp-hero-truck" src="/chespanish-guide-truck.webp" alt=""/></div></header>
      <section className="arp-menu"><header><div><span>ELEGÍ UNA SITUACIÓN · CHOOSE A SITUATION</span><h2>Entrá y empezá a hablar.</h2><p>Open a scene and start speaking.</p></div><b>15 CONVERSACIONES LARGAS</b></header><div className="arp-grid">{scenarios.map((item,index)=><button key={item.title} onClick={()=>openScenario(index)} className={`arp-card arp-color-${index%6}`}><span className="arp-card-number">{String(index+1).padStart(2,"0")}</span><i>{item.emoji}</i><h3>{item.title}</h3><em>{item.english}</em><PairText pair={item.context}/><footer><span>14 intervenciones</span><b>ENTRAR →</b></footer></button>)}</div></section>
    </>:<section className="arp-class">
      <header className="arp-class-head"><button onClick={()=>{setCurrent(null);setTab("read");window.scrollTo({top:0,behavior:"smooth"})}}>← TODAS LAS ESCENAS</button><div><span>SITUACIÓN {String(current!+1).padStart(2,"0")} / {scenarios.length}</span><small>LEÉ → ENTENDÉ → ROBÁ CHUNKS → HABLÁ</small></div></header>
      <section className="arp-scene-title"><i>{scenario.emoji}</i><div><h1>{scenario.title}</h1><span>{scenario.english}</span><PairText pair={scenario.context}/></div></section>

      <div className="arp-tabs" role="tablist" aria-label="Elegir modo de práctica"><button role="tab" aria-selected={tab==="read"} className={tab==="read"?"active":""} onClick={()=>setTab("read")}><span>1</span><div><b>DIÁLOGO COMPLETO</b><small>FULL DIALOGUE · 14 LINES</small></div></button><button role="tab" aria-selected={tab==="turn"} className={tab==="turn"?"active":""} onClick={()=>setTab("turn")}><span>2</span><div><b>TU TURNO</b><small>YOUR TURN · 6 MOMENTS</small></div></button></div>

      {tab==="read"?<section className="arp-panel" role="tabpanel"><div className="arp-panel-intro blue"><b>🎬 LEÉ LOS DOS PERSONAJES EN VOZ ALTA.</b><span>Read both characters aloud. First build confidence, then improvise.</span></div><div className="arp-dialogue">{scenario.dialogue.map((line,index)=><article key={`${index}-${line[1]}`} className={line[0]==="P"?"profe":"vos"}><header><span>{line[0]==="P"?"PROFE":"VOS"}</span><i>{String(index+1).padStart(2,"0")}</i></header><p>{line[1]}</p><small>{line[2]}</small></article>)}</div><div className="arp-read-next"><PairText pair={["¿Listo? Ahora pasá a TU TURNO y construí una conversación nueva.","Ready? Now switch to YOUR TURN and build a new conversation."]}/><button onClick={()=>{setTab("turn");window.scrollTo({top:0,behavior:"smooth"})}}>IR A TU TURNO →</button></div></section>:<section className="arp-panel" role="tabpanel"><div className="arp-panel-intro yellow"><b>🎤 ESTE DIÁLOGO ES NUEVO.</b><span>Use the chunks, combine them or invent something. Your answer does not need to match the model.</span></div><div className="arp-turn-grid">{scenario.prompts.map((prompt,index)=><article key={prompt[0]}><header><span>PASO {index+1} · STEP {index+1}</span><b>PROFE</b></header><PairText pair={prompt}/><div><b>VOS · YOUR ANSWER</b><span>Hablá. Usá los recursos o inventá algo.</span><small>Speak. Use the resources or invent something.</small></div></article>)}</div><section className="arp-resources"><header><span>BANCO DE FRASES · PHRASE BANK</span><h2>RECURSOS</h2><p>No son respuestas. Son piezas para crear tu respuesta.<small>These are not answers. They are pieces for building your answer.</small></p></header><div>{scenario.resources.map(pair=><PairText pair={pair} key={pair[0]}/>)}</div></section></section>}

      <footer className="arp-scenario-nav"><button onClick={()=>go(-1)}>← ANTERIOR</button><div>{current!+1} / {scenarios.length}</div><button onClick={()=>go(1)}>SIGUIENTE →</button></footer>
    </section>}

    <div className="arp-floating"><button onClick={()=>setDrawer("slang")}>🔥 ARGENTO</button><button onClick={()=>setDrawer("help")}>🛟 AYUDA · HELP</button></div>
    {drawer&&<aside ref={drawerRef} tabIndex={-1} className="arp-drawer" role="dialog" aria-modal="true" aria-label={drawer==="slang"?"Slang argentino":"Ayuda para hablar"} onMouseDown={event=>{if(event.target===event.currentTarget)closeDrawer()}}><div><header><section><h2>{drawer==="slang"?"🔥 ARGENTO":"🛟 AYUDA"}</h2><p>{drawer==="slang"?"Jerga argentina completa · Complete Argentine slang":"Frases para seguir hablando · Phrases to keep speaking"}</p></section><button onClick={closeDrawer}>CERRAR · CLOSE ×</button></header>{drawer==="help"?<div className="arp-help">{helpGroups.map(group=><section key={group.title[0]}><PairText pair={group.title}/><div>{group.items.map(pair=><PairText pair={pair} key={pair[0]}/>)}</div></section>)}</div>:<div className="arp-slang">{slang.map(item=><article key={item.term}><header><h3>{item.term}</h3><span>{item.meaning}</span></header><p><b>Closest English slang:</b> {item.closest}</p><p>{item.use}</p><PairText pair={item.example}/>{item.note&&<small>{item.note}</small>}</article>)}</div>}</div></aside>}
  </main>;
}
