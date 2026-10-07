"use client";

import { useState } from "react";
import Link from "next/link";
import {ConversationFamily} from "../conversation-families/ConversationFamily";
import {CEFR_LEVELS,type CEFRLevel} from "../conversation-families/types";
import {WorldSupport} from "../world-speaking/WorldSupport";
import {worldSeeds} from "./world-seeds";

import "./style.css";

import {advancedVariants} from "./variants";

export default function AdvancedConversation(){return <ConversationFamily id="advanced-conversation" title="Preguntas que dan ganas de hablar" levels={CEFR_LEVELS} defaultLevel="C1">{level=><AdvancedConversationExperience key={level} level={level}/>}</ConversationFamily>;}
function AdvancedConversationExperience({level}:{level:CEFRLevel}){
 const ui=(es:string,en:string)=>level==='A0'?`${es} · ${en}`:es;
  const topics=advancedVariants[level];
  const [active,setActive]=useState(0);
  const [selected,setSelected]=useState<number|null>(null);
  const topic=topics[active];
  const chooseTopic=(index:number)=>{setActive(index);setSelected(null);window.scrollTo({top:0,behavior:"smooth"})};
  return <main className="advanced-shell">
    <div className="advanced-frame">
      <header className="advanced-header"><Link href="/" className="advanced-brand"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>{level} · CONVERSACIÓN</small></span></Link><Link href="/" className="back-library">{ui("← Biblioteca","← Library")}</Link></header>
      <section className="advanced-intro"><div><i/><p>{ui("CONVERSACIÓN · NIVEL","CONVERSATION · LEVEL")} {level}</p><h1>{ui("Preguntas que dan ganas de hablar.","Questions that make you want to speak.")}</h1></div><p>{ui("Elige una categoría. Elige una pregunta. Responde con libertad. Sigue la conversación.","Choose a category. Choose a question. Answer freely. Keep talking.")}</p></section>
      <nav className="advanced-nav" aria-label="Categorías de conversación">{topics.map((item,index)=><button key={item.title} className={index===active?"active":""} aria-pressed={index===active} onClick={()=>chooseTopic(index)}>{item.emoji} {item.title}</button>)}</nav>
      <section className="advanced-panel" aria-label={topic.label} key={topic.title}>
        <div className="panel-title"><div><span>{topic.emoji}</span><h2>{topic.title}</h2></div><b>{String(active+1).padStart(2,"0")} / {topics.length}</b></div>
        <div className="advanced-questions">{topic.questions.map((question,index)=><button key={question} className={`${index===0?"featured ":""}${selected===index?"selected":""}`} aria-pressed={selected===index} onClick={()=>setSelected(selected===index?null:index)}><span>{String(index+1).padStart(2,"0")}</span><p>{question}</p>{selected===index&&<i>{ui("HABLEMOS DE ESTA →","LET’S TALK ABOUT THIS →")}</i>}</button>)}</div>
        <WorldSupport key={topic.title} seed={worldSeeds[active]} level={level}/>
      </section>
    </div>
  </main>;
}
