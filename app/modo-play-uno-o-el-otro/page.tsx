"use client";

import { useMemo, useState } from "react";
import PlayShell,{CardNav,SpeakPrompt,type PlayStage} from "../play-mode/PlayShell";
import { choiceBank,choiceCategories,type Choice } from "./choices";
import { activeConditions,canReveal,closingPrompt,decisionTrail,emptyDilemma,optionName,pickOption,revealNext,type DilemmaState,type Movement } from "./dilemma-flow";
import "./dilemma.css";

const stages:PlayStage[]=[
  {label:"ELEGÍ RÁPIDO",short:"RÁPIDO",minutes:3,color:"#ff6b57"},
  {label:"EXPLICÁ",short:"RAZONES",minutes:6,color:"#2eb9bd"},
  {label:"DOS CONDICIONES",short:"DILEMA",minutes:8,color:"#7259e8"},
  {label:"QUEDATE CON DOS",short:"TRES",minutes:7,color:"#f0a000"},
  {label:"ORDENALO",short:"RANK IT",minutes:9,color:"#25ad72"},
  {label:"TU VIDA IDEAL",short:"BOSS",minutes:12,color:"#315cff"},
];
const triples=[
  {title:"TENÉS UN MES LIBRE",options:["VIAJAR","QUEDARTE EN CASA","APRENDER ALGO NUEVO"]},
  {title:"NUEVO TRABAJO",options:["MEJOR SUELDO","MEJOR EQUIPO","MÁS LIBERTAD"]},
  {title:"SÁBADO PERFECTO",options:["PLAN CON AMIGOS","TIEMPO SOLO","ESCAPADA CORTA"]},
  {title:"UNA GRAN COMPRA",options:["MEJORAR TU CASA","CURSO IMPORTANTE","VIAJE ESPECIAL"]},
];
const rankings=[
  {title:"PARA ELEGIR DÓNDE VIVIR",items:["PRECIO","SEGURIDAD","CLIMA","GENTE","TRABAJO"]},
  {title:"PARA ELEGIR UN TRABAJO",items:["SUELDO","HORARIO","EQUIPO","PROPÓSITO","FUTURO"]},
  {title:"EN UNA AMISTAD",items:["CONFIANZA","HUMOR","TIEMPO","SINCERIDAD","APOYO"]},
  {title:"PARA UN BUEN VIAJE",items:["COMIDA","PAISAJES","DESCANSO","CULTURA","COMPAÑÍA"]},
  {title:"EN TU CASA",items:["LUZ","ESPACIO","UBICACIÓN","SILENCIO","COMODIDAD"]},
  {title:"PARA TU CALIDAD DE VIDA",items:["SALUD","DINERO","TIEMPO","RELACIONES","LIBERTAD"]},
];
const ideal=[["LUGAR","¿Dónde está? ¿Qué tiene cerca y qué no querés que tenga?"],["TRABAJO","¿Qué hacés? ¿Cuánto ocupa en tu vida?"],["DINERO","¿Cuánto necesitás para sentir tranquilidad?"],["TIEMPO","¿En qué usás tus horas libres?"],["PERSONAS","¿Quiénes forman parte de esa vida y cómo las ves?"],["RUTINA","¿Cómo es un martes normal en esa vida ideal?"],["LÍMITE","¿Qué no aceptarías sacrificar para conseguirla?"],["PRIMER PASO","¿Qué parte podrías empezar a construir esta semana?"]];

function BankTools({category,onCategory,onShuffle,total}:{category:string;onCategory:(value:string)=>void;onShuffle:()=>void;total:number}){
  return <div className="choice-bank-tools"><div><b>BANCO · {choiceBank.length}</b><span>{total} disponibles · usá 12–18</span></div><nav>{choiceCategories.map(item=><button key={item.value} className={item.value===category?"active":""} onClick={()=>onCategory(item.value)}>{item.label}</button>)}</nav><button className="shuffle-button" onClick={onShuffle}>MEZCLAR ↻</button></div>;
}

const MOVEMENT_TEXT:Record<Movement,string>={INICIAL:"PUNTO DE PARTIDA",MANTUVISTE:"MANTUVISTE",CAMBIASTE:"CAMBIASTE",VOLVISTE:"VOLVISTE A TU PRIMERA OPCIÓN"};
const ROUND_QUESTIONS=["Decisión inicial: ¿qué elegís?","Con la condición 1, ¿qué elegís ahora?","Con las dos condiciones, ¿cuál es tu decisión final?"] as const;

function DilemmaCard({dilemma,state,onChange,onRestart}:{dilemma:Choice;state:DilemmaState;onChange:(state:DilemmaState)=>void;onRestart:()=>void}){
  const conditions=activeConditions(dilemma,state);
  const trail=decisionTrail(state);
  const currentPick=state.picks[state.revealed];
  const closing=closingPrompt(dilemma,state.picks);
  const steps=["DECISIÓN INICIAL","CONDICIÓN 1","CONDICIÓN 2","DECISIÓN FINAL"];
  const activeStep=state.revealed===2&&state.picks.length===3?3:state.revealed;
  return <div className="dilemma" data-revealed={state.revealed} data-picks={state.picks.join("")}>
    <span className="play-kicker">{dilemma.category} · DILEMA CON DOS CONDICIONES</span>
    <ol className="dilemma-steps" aria-label="Pasos del dilema">{steps.map((step,i)=><li key={step} className={i<activeStep?"done":i===activeStep?"active":""}>{step}</li>)}</ol>
    {conditions.length>0&&<section className={`dilemma-conditions count-${conditions.length}`} aria-label="Condiciones vigentes">
      {conditions.length===2&&<p className="dilemma-conditions-head">LAS DOS CONDICIONES SIGUEN VIGENTES</p>}
      {conditions.map(({label,condition})=><article key={label} className="condition-card"><small>{label}</small><b>{condition.text}</b><span>Complica: {optionName(dilemma.options[condition.against])}</span></article>)}
    </section>}
    <h2 className="play-question">{ROUND_QUESTIONS[state.revealed]}</h2>
    <div className="choice-grid">{dilemma.options.map((item,i)=><button key={item} className={`choice-button ${currentPick===i?"selected":""}`} style={{"--choice":i?"#f39a1a":"#7259e8"} as React.CSSProperties} aria-pressed={currentPick===i} onClick={()=>onChange(pickOption(state,i as 0|1))}>{item}</button>)}</div>
    {state.revealed===0&&currentPick!==undefined&&<SpeakPrompt>{dilemma.follow}</SpeakPrompt>}
    {state.revealed===1&&<SpeakPrompt tone="coral">{dilemma.afterCondition1}</SpeakPrompt>}
    {state.revealed===2&&<SpeakPrompt tone="lime">{dilemma.finalPrompt}</SpeakPrompt>}
    {trail.length>0&&<ol className="dilemma-trail" aria-label="Tus decisiones">{trail.map(step=><li key={step.round} className={step.movement.toLowerCase()}><small>{step.label}</small><b>{optionName(dilemma.options[step.option])}</b><i>{MOVEMENT_TEXT[step.movement]}</i></li>)}</ol>}
    {closing&&<div className="dilemma-closing"><small>TU RECORRIDO</small><b>{closing}</b></div>}
    <div className="dilemma-actions">
      {canReveal(state)&&<button className="reveal-button" onClick={()=>onChange(revealNext(state))}>{state.revealed===0?"VER CONDICIÓN 1 ↓":"SUMAR CONDICIÓN 2 ↓"}</button>}
      {state.picks.length>0&&<button className="dilemma-restart" onClick={onRestart}>REINICIAR DILEMA ↺</button>}
    </div>
  </div>;
}

export default function UnoOElOtro(){
  const [stage,setStage]=useState(0); const [index,setIndex]=useState(0); const [choice,setChoice]=useState<number|null>(null); const [category,setCategory]=useState<string>("TODO"); const [dilemma,setDilemma]=useState<DilemmaState>(emptyDilemma); const [triplePhase,setTriplePhase]=useState<"choose"|"eliminate"|"compare">("choose"); const [eliminated,setEliminated]=useState<number|null>(null); const [rank,setRank]=useState<number[]>([]); const [idealIndex,setIdealIndex]=useState(0);
  const currentPool=useMemo(()=>choiceBank.filter(item=>category==="TODO"||item.category===category).sort((a,b)=>a.depth-b.depth),[category]);
  const current=currentPool[index%Math.max(currentPool.length,1)];
  const resetCard=()=>{setChoice(null);setDilemma(emptyDilemma);setTriplePhase("choose");setEliminated(null);setRank([])};
  const changeStage=(next:number)=>{setStage(next);setIndex(0);setCategory("TODO");resetCard()};
  const move=(total:number,amount:number)=>{setIndex(value=>(value+amount+total)%total);resetCard()};
  const chooseCategory=(value:string)=>{setCategory(value);setIndex(0);resetCard()};
  const shuffle=()=>{if(currentPool.length<2)return;let next=index%currentPool.length;while(next===index%currentPool.length)next=Math.floor(Math.random()*currentPool.length);setIndex(next);resetCard()};
  return <PlayShell lesson="B1 · MODO PLAY · 01" title="UNO O EL OTRO" stages={stages} stage={stage} onStageChange={changeStage}>
    {stage<=1&&current&&<><BankTools category={category} onCategory={chooseCategory} onShuffle={shuffle} total={currentPool.length}/><span className="play-kicker">{current.category} · {stage===0?"ELEGÍ SIN PENSAR DEMASIADO":"RAZÓN + EJEMPLO"}</span><h2 className="play-question">{stage===0?"¿Cuál preferís?":"¿Con cuál te quedás?"}</h2><div className="choice-grid">{current.options.map((item,i)=><button key={item} className={`choice-button ${choice===i?"selected":""}`} style={{"--choice":i?"#315cff":"#2eb9bd"} as React.CSSProperties} onClick={()=>setChoice(i)}>{item}</button>)}</div>{choice!==null&&<SpeakPrompt>{stage===0?`Elegiste «${optionName(current.options[choice])}». Decí una razón en una frase.`:current.follow}</SpeakPrompt>}<CardNav index={index%currentPool.length} total={currentPool.length} onPrevious={()=>move(currentPool.length,-1)} onNext={()=>move(currentPool.length,1)}/></>}
    {stage===2&&current&&<><BankTools category={category} onCategory={chooseCategory} onShuffle={shuffle} total={currentPool.length}/><DilemmaCard key={`${category}-${index}`} dilemma={current} state={dilemma} onChange={setDilemma} onRestart={()=>setDilemma(emptyDilemma)}/><CardNav index={index%currentPool.length} total={currentPool.length} onPrevious={()=>move(currentPool.length,-1)} onNext={()=>move(currentPool.length,1)}/></>}
    {stage===3&&<><span className="play-kicker">ELEGÍ UNA. ELIMINÁ OTRA. COMPARÁ DOS.</span><h2 className="play-question">{triples[index].title}</h2><div className="choice-grid three">{triples[index].options.map((item,i)=><button key={item} className={`choice-button ${choice===i?"selected":""} ${eliminated===i?"eliminated":""}`} style={{"--choice":["#f0a000","#2eb9bd","#7259e8"][i]} as React.CSSProperties} onClick={()=>{if(triplePhase==="choose"){setChoice(i);setTriplePhase("eliminate")}else if(triplePhase==="eliminate"&&i!==choice){setEliminated(i);setTriplePhase("compare")}}}>{item}</button>)}</div>{triplePhase==="eliminate"&&<SpeakPrompt tone="coral">¿Por qué elegiste esa? Ahora eliminá una de las otras dos.</SpeakPrompt>}{triplePhase==="compare"&&<SpeakPrompt>Compará las dos opciones que quedan. ¿Cuál tiene más ventajas para vos?</SpeakPrompt>}<CardNav index={index} total={triples.length} onPrevious={()=>move(triples.length,-1)} onNext={()=>move(triples.length,1)}/></>}
    {stage===4&&<><span className="play-kicker">TOCÁ DEL 1 AL 5</span><h2 className="play-question">{rankings[index].title}</h2><p className="play-subtitle">Primero lo más importante. Podés cambiar de idea y reiniciar.</p><div className="ranking-grid">{rankings[index].items.map((item,i)=>{const position=rank.indexOf(i);return <button key={item} className={`rank-item ${position>=0?"picked":""}`} onClick={()=>setRank(value=>value.includes(i)?value.filter(x=>x!==i):[...value,i])}>{position>=0&&<span>{position+1}</span>}{item}</button>})}</div>{rank.length>=3&&<SpeakPrompt tone="lime">¿Por qué {rankings[index].items[rank[0]].toLowerCase()} está primero? ¿Qué falta en la lista?</SpeakPrompt>}<button className="reveal-button" onClick={()=>setRank([])}>REINICIAR ORDEN</button><CardNav index={index} total={rankings.length} onPrevious={()=>move(rankings.length,-1)} onNext={()=>move(rankings.length,1)}/></>}
    {stage===5&&<><span className="play-kicker">SIN BOTONES DE RESPUESTA · CONVERSACIÓN LIBRE</span><h2 className="boss-word">{ideal[idealIndex][0]}</h2><p className="boss-prompt">{ideal[idealIndex][1]}</p><SpeakPrompt>Construí tu vida ideal. Conectá esta parte con las decisiones anteriores.</SpeakPrompt><CardNav index={idealIndex} total={ideal.length} onPrevious={()=>setIdealIndex(value=>(value-1+ideal.length)%ideal.length)} onNext={()=>setIdealIndex(value=>(value+1)%ideal.length)}/></>}
  </PlayShell>;
}
