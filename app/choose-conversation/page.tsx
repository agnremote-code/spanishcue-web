"use client";
import { useState } from "react";
import Link from "next/link";
import { SpanishCueBrand } from "../SpanishCueBrand";
import "./style.css";
import "./fixes.css";
import "./brand.css";
import "./b2.css";
import { ConversationFamily, ConversationClosing } from "../conversation-families/ConversationFamily";
import { talkVariants } from "./variants";
import type { Topic } from "./data";
import { b2ClosingQuestions, b2TopicSupport } from "./b2-data";
import { B2ConversationSupport, B2ConversationClosing } from "./B2ConversationTools";

export default function ChooseConversation({variant="standard"}:{variant?:"standard"|"basic"|"starter"}={}){
 return <ConversationFamily id="lets-talk" title="Let’s Talk" levels={["A1","A2","B1","B2"]} defaultLevel={variant==="starter"?"A1":variant==="basic"?"A2":"B1"}>{level=><TalkExperience key={level} variant={level==="A1"?"starter":level==="A2"?"basic":level==="B2"?"extended":"standard"}/>}</ConversationFamily>;
}

function TalkExperience({variant}:{variant:"standard"|"basic"|"starter"|"extended"}){
 const content=talkVariants[variant==="starter"?"A1":variant==="basic"?"A2":variant==="extended"?"B2":"B1"];
 const activeTopics=content.activities;
 const isB2=variant==="extended";
 const isBasic=variant==="basic";
 const isStarter=variant==="starter";
 const [topic,setTopic]=useState<Topic|null>(null);const [selected,setSelected]=useState<number[]>([]);const [ready,setReady]=useState(false);
 const open=(t:Topic)=>{setTopic(t);setSelected([]);setReady(false);window.scrollTo({top:0,behavior:"smooth"})};
 const toggle=(i:number)=>{if(isB2)setReady(false);setSelected(s=>s.includes(i)?s.filter(x=>x!==i):s.length<3?[...s,i]:s)};
 const level=isStarter?"A1":isBasic?"A2":isB2?"B2":"B1";
 return <main className={`talk-app ${level?"basic-mode":""} ${isB2?"talk-b2":""}`}><header className="talk-header"><Link href="/" className="talk-logo"><SpanishCueBrand variant="compact" tone="light" context={`LET'S TALK${level?` · ${level}`:""}`} /></Link><span className="game-chip"><i/> {level?`${level} · conversación`:"Conversación en español"}</span></header>
 {!topic?<section className="talk-home"><div className="talk-intro"><p className="mode-chip">MODO CONVERSACIÓN {level?`· ${level}`:""}</p><h1>LET&apos;S TALK{level?` · ${level}`:""}</h1><p>{isB2?"Tres preguntas, distintas perspectivas. Defiende una idea y deja espacio para cambiarla.":"Elige un tema y tres preguntas. La conversación empieza ahí."}</p><div className="talk-steps"><b>ELIGE UN TEMA</b><span>→</span><b>ELIGE TRES</b><span>→</span><b>HABLA</b></div>{isB2&&<div className="talk-b2-entry"><p><strong>Para empezar:</strong> elijan un mundo que despierte curiosidad. Antes de abrirlo, anticipen un punto en el que podrían pensar diferente.</p><details><summary>Guía para una conversación de 45 minutos</summary><p>{content.teacherNotes[0]}</p></details></div>}</div><div className="world-heading"><h2>{level?"Elegí tu mundo de conversación":"Elige tu mundo de conversación"}</h2><span>15 mundos de conversación</span></div><div className="topic-worlds">{activeTopics.map(t=><button key={t.title} style={{background:t.color}} onClick={()=>open(t)}><span>{t.emoji}</span><b>{t.title}</b><small>{t.line}</small><i>ABRIR TEMA →</i></button>)}</div></section>:
 <section className="topic-screen"><button className="all-topics" onClick={()=>setTopic(null)}>← Todos los temas</button><div className="topic-hero" style={{background:topic.color}}><span>{topic.emoji}</span><div><small>ELIGE TRES — Y CONVERSEMOS</small><h1>{topic.title}</h1><p>{topic.line}</p></div><b>{selected.length} / 3 elegidas</b></div>{isB2&&<p className="talk-b2-invitation">{b2TopicSupport[activeTopics.indexOf(topic)].line} Elige tres situaciones; puedes inventar los detalles personales.</p>}<div className="question-layout"><section><h2>Elige tres preguntas</h2><div className="question-list">{topic.questions.map((q,i)=>{const is=selected.includes(i),locked=selected.length===3&&!is;return <button key={q} disabled={locked} className={is?"selected":""} onClick={()=>toggle(i)}><b>{i+1}</b><span>{q}</span><i>{is?"✓":"+"}</i></button>})}</div></section><aside><small>TU CONVERSACIÓN</small><h2>Tus tres preguntas</h2>{[0,1,2].map((_,i)=><div className={selected[i]!==undefined?"filled":""} key={i}><b>{selected[i]!==undefined?"✓":i+1}</b><span>{selected[i]!==undefined?topic.questions[selected[i]]:"Elige una pregunta…"}</span></div>)}<button disabled={selected.length!==3} onClick={()=>setReady(true)}>A CONVERSAR →</button><p>Elige tres preguntas que te den ganas de hablar.</p></aside></div>{ready&&<section className="ready-talk"><small>LISTOS PARA HABLAR</small><h2>Tu conversación empieza aquí.</h2><p>{isB2?"En cada pregunta: da una primera respuesta, escucha una objeción y acuerda qué condición te haría revisarla. Alternen quién empieza.":"No hay respuestas perfectas. Comparte tus ideas y escucha las de la otra persona."}</p><div>{selected.map((x,i)=><article key={x}><b>{i+1}</b>{topic.questions[x]}</article>)}</div>{isB2&&<><B2ConversationSupport topicIndex={activeTopics.indexOf(topic)}/><p className="talk-b2-turn"><strong>Cambia una condición · 8 min:</strong> retomen una de sus decisiones. La otra persona cambia un detalle de la situación; expliquen qué consecuencias tendría y negocien una nueva respuesta.</p><B2ConversationClosing questions={b2ClosingQuestions(selected.map(index=>topic.questions[index]))}/></>}<button onClick={()=>setTopic(null)}>▦ Explorar otro tema</button></section>}</section>}
 {!isB2&&<ConversationClosing questions={content.closingConversation} note={content.teacherNotes[0]}/>}
 </main>
}
