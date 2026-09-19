"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import GrammarStep from "../grammar-steps/GrammarStep";
import type { PhraseToken } from "./data";
import type { C1LabData } from "./data-c1";
import "./style.css";
import "./c1.css";

function Tokens({ tokens }: { tokens: PhraseToken[] }) {
  return <div className="pl-tokens">{tokens.map((token,index)=><span className={`role-${token.role}`} key={`${token.text}-${index}`}>{token.text}</span>)}</div>;
}

function OrderCard({ task, index }: { task:C1LabData["orderTasks"][number]; index:number }) {
  const [chosen,setChosen]=useState<string[]>([]);
  const [checked,setChecked]=useState(false);
  const correct=task.answers.some(answer=>answer.length===chosen.length&&answer.every((token,i)=>token===chosen[i]));
  const available=task.tokens.filter(token=>!chosen.includes(token));
  return <article className={`pl-order-card ${checked?(correct?"correct":"retry"):""}`}>
    <header><span>{String(index+1).padStart(2,"0")}</span><div><small>RECONSTRUCCIÓN</small><h3>{task.prompt}</h3></div></header>
    <div className="pl-answer-line" aria-label="Tu reformulación">
      {chosen.length?chosen.map(token=><button type="button" key={token} onClick={()=>{setChosen(current=>current.filter(item=>item!==token));setChecked(false)}}>{token}</button>):<p>Construí la versión precisa.</p>}
    </div>
    <div className="pl-token-pool" aria-label="Piezas disponibles">{available.map(token=><button type="button" key={token} onClick={()=>{setChosen(current=>[...current,token]);setChecked(false)}}>{token}</button>)}</div>
    <div className="pl-board-actions"><button type="button" className="secondary" disabled={!chosen.length} onClick={()=>{setChosen([]);setChecked(false)}}>REINICIAR</button><button type="button" disabled={chosen.length!==task.tokens.length} onClick={()=>setChecked(true)}>COMPROBAR</button></div>
    {checked&&<p className="pl-feedback" role="status"><b>{correct?"LECTURA CONTROLADA":"REVISÁ LA CONEXIÓN"}</b>{correct?task.explanation:"Mové una pieza y comprobá qué relación queda visible."}</p>}
  </article>;
}

function ChoiceGrid({ choices }: { choices:C1LabData["choices"] }) {
  const [answers,setAnswers]=useState<Record<number,number>>({});
  return <div className="pl-choice-grid">{choices.map((choice,index)=>{
    const selected=answers[index];
    const answered=selected!==undefined;
    const correct=selected===choice.correct;
    return <article className={answered?(correct?"correct":"retry"):""} key={choice.prompt}>
      <span>{String(index+1).padStart(2,"0")}</span><h3>{choice.prompt}</h3>
      <div>{choice.options.map((option,optionIndex)=><button type="button" aria-pressed={selected===optionIndex} onClick={()=>setAnswers(current=>({...current,[index]:optionIndex}))} key={option}>{option}</button>)}</div>
      {answered&&<p role="status"><b>{correct?"LECTURA SOSTENIBLE":`MEJOR: ${choice.options[choice.correct]}`}</b>{choice.explanation}</p>}
    </article>;
  })}</div>;
}

export default function C1Lab({ data }: { data:C1LabData }) {
  const [activeCase,setActiveCase]=useState(0);
  const caseFile=data.cases[activeCase];
  const progress=useMemo(()=>`${String(activeCase+1).padStart(2,"0")} / ${String(data.cases.length).padStart(2,"0")}`,[activeCase,data.cases.length]);
  const theme={"--pl-accent":data.accent,"--pl-accent-2":data.accent2} as CSSProperties;
  return <main className="pl-app pl-c1 c1-app" style={theme}>
    <header className="pl-nav">
      <Link href="/" className="pl-back" aria-label="Volver a la biblioteca">←</Link>
      <Link href="/" className="pl-brand" aria-label="SPANISHCUE, inicio"><span>SC</span><div><b>SPANISHCUE</b><small>LINGUISTIC LAB</small></div></Link>
      <div className="pl-nav-topic"><small>{data.module}</small><b>C1 · 45 MIN</b></div>
      <a href="#recorrido" className="pl-nav-action">ABRIR ARCHIVO</a>
    </header>

    <section className="pl-hero c1-hero">
      <div className="pl-grid" aria-hidden="true"/><div className="pl-orbit orbit-one" aria-hidden="true"/><div className="pl-orbit orbit-two" aria-hidden="true"/>
      <div className="pl-hero-copy">
        <span className="pl-module">{data.module}</span>
        <span className="pl-pcic"><small>PCIC · RECORTE CURRICULAR</small>{data.pcic}</span>
        <h1>{data.displayTitle.split("\n").map((line,index)=><span className={index?"accent":""} key={line}>{line}</span>)}</h1>
        <p>{data.subtitle}</p>
        <div className="pl-hero-formula"><Tokens tokens={data.coreFormula}/></div>
        <a href="#recorrido">INICIAR INVESTIGACIÓN <span>↓</span></a>
      </div>
      <div className="pl-hero-board c1-dossier"><small>OBJETIVO COMUNICATIVO</small><strong>{data.goal}</strong><div><span>EXPEDIENTES</span><b>{data.cases.length}</b><span>SECUENCIA</span><b>10 pasos</b></div></div>
    </section>

    <section className="pl-timeline" aria-label="Distribución sugerida del tiempo">{data.timeline.map(item=><div key={item.label}><small>{item.minutes}</small><b>{item.label}</b></div>)}</section>
    <section className="pl-audit-note"><span>AUDITORÍA DE CONTENIDOS</span><p>{data.auditNote}</p></section>

    <section className="grammar-step-stack pl-steps c1-steps" id="recorrido">
      <GrammarStep number="01" eyebrow="PERSPECTIVA · 5 MIN" title={data.discovery.question} description="Primero formulá una hipótesis; después buscá evidencia." accent={data.accent}>
        <div className="pl-discovery"><p>{data.discovery.instruction}</p><div>{data.discovery.contrast.map((item,index)=><article key={item}><small>{String(index+1).padStart(2,"0")}</small><b>{item}</b></article>)}</div></div>
      </GrammarStep>

      {data.chapters.map((chapter,index)=><GrammarStep key={chapter.title} number={String(index+2).padStart(2,"0")} eyebrow={chapter.eyebrow} title={chapter.title} description={chapter.description} accent={data.accent}>
        <div className="c1-chapter">
          <p>{chapter.explanation}</p><b>{chapter.formula}</b>
          <div>{chapter.examples.map(example=><span key={example}>{example}</span>)}</div>
          {chapter.optional&&<details><summary>MATERIAL OPCIONAL · {chapter.optional.title}</summary><p>{chapter.optional.text}</p><ul>{chapter.optional.examples.map(example=><li key={example}>{example}</li>)}</ul></details>}
        </div>
      </GrammarStep>)}

      <GrammarStep number="08" eyebrow="INTERPRETACIÓN + PRÁCTICA · 15 MIN" title="Abrir expedientes y controlar la lectura" description="Proponé, contrastá, reformulá y comprobá." accent={data.accent}>
        <div className="c1-case-lab">
          <nav aria-label="Expedientes lingüísticos">{data.cases.map((item,index)=><button type="button" aria-pressed={index===activeCase} onClick={()=>setActiveCase(index)} key={item.sentence}>{String(index+1).padStart(2,"0")} · {item.source}</button>)}</nav>
          <article>
            <header><small>{caseFile.source}</small><span>{progress}</span></header><strong>{caseFile.sentence}</strong><h3>{caseFile.prompt}</h3>
            <details><summary>ABRIR ANÁLISIS</summary><div><section><small>LECTURA A</small><p>{caseFile.firstReading}</p></section><section><small>LECTURA B</small><p>{caseFile.secondReading}</p></section></div></details>
            <details><summary>VER REFORMULACIONES</summary><ul>{caseFile.reformulations.map(item=><li key={item}>{item}</li>)}</ul></details>
          </article>
        </div>
        <div className="c1-practice-label"><span>RECONSTRUIR</span><p>Elige el orden que vuelve visible la relación buscada.</p></div>
        <div className="pl-order-grid">{data.orderTasks.map((task,index)=><OrderCard task={task} index={index} key={task.prompt}/>)}</div>
        <div className="c1-practice-label"><span>DECIDIR</span><p>La respuesta incluye una razón interpretativa, no solo una marca de correcto.</p></div>
        <ChoiceGrid choices={data.choices}/>
      </GrammarStep>

      <GrammarStep number="09" eyebrow="PRODUCCIÓN · 5 MIN" title="Redactar con intención" description="Ahora el alumno controla deliberadamente el efecto." accent={data.accent}>
        <div className="pl-production-grid">{data.production.map((item,index)=><article key={item.title}><span>{String(index+1).padStart(2,"0")}</span><small>{item.title}</small><h3>{item.prompt}</h3><ul>{item.checklist.map(point=><li key={point}>{point}</li>)}</ul></article>)}</div>
      </GrammarStep>

      <GrammarStep number="10" eyebrow="CONVERSACIÓN REAL · 10–15 MIN" title="Argumentar, disentir y matizar" description="Preguntas abiertas con seguimiento real y desafío C1." accent={data.accent} className="pl-conversation-step">
        <div className="pl-conversation-intro"><span>NO ES UN EXAMEN ORAL</span><p>Elige las preguntas que generen posiciones genuinas. Pide ejemplos, introduce desacuerdo y usa el desafío solamente si la conversación necesita otra capa.</p></div>
        <div className="pl-conversation-grid">{data.conversation.map((item,index)=><article key={item.question}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.question}</h3><details><summary>ABRIR APOYOS Y REPREGUNTA</summary><div><small>STARTER</small><p>{item.starter}</p></div><div><small>VOCABULARIO</small><p>{item.vocabulary}</p></div><div><small>REPREGUNTA</small><p>{item.followUp}</p></div><div><small>DESAFÍO C1</small><p>{item.challenge}</p></div></details></article>)}</div>
      </GrammarStep>
    </section>

    <footer className="pl-footer"><Link href="/">← VOLVER A GRAMÁTICA</Link><div><b>SPANISHCUE</b><span>{data.pcic}</span></div><a href="#recorrido">VOLVER ARRIBA ↑</a></footer>
  </main>;
}
