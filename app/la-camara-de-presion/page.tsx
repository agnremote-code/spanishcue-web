"use client";

import {useEffect,useMemo,useState,type CSSProperties} from "react";
import {ClassicTopBar} from "../clasicas-ui/TopBar";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import {evergreenQuestions,familyOrder,type PressureQuestion} from "./questions";
import {pulseQuestions,pulseSources,pulseUpdated} from "./pulse";
import "./style.css";

const allQuestions=[...pulseQuestions,...evergreenQuestions];
const initialQuestion=evergreenQuestions.find(item=>item.family==="personal")??allQuestions[0];
const stages=[
  {name:"Entrada",time:"2 min",families:["personal"]},
  {name:"Actualidad",time:"8 min",families:["pulse"]},
  {name:"Lenguaje",time:"8 min",families:["words","premise","literal","wordshift","speaker","headline"]},
  {name:"Ideas",time:"8 min",families:["opposite","effects","patterns","brutal"]},
  {name:"Sin «depende»",time:"5 min",families:["nodepends"]},
  {name:"Dato nuevo",time:"5 min",families:["newfact"]},
  {name:"Cierre",time:"9 min",families:["final"]}
] as const;

const familyNames:Record<string,string>={
  words:"Matices léxicos",
  premise:"Cuestiona la premisa",
  literal:"Literalmente cierto",
  wordshift:"Cambia una palabra",
  opposite:"Defiende lo contrario",
  effects:"2.º y 3.er efecto",
  patterns:"¿Casualidad o patrón?",
  speaker:"Quién lo dice",
  personal:"Personal C2",
  brutal:"Absurdamente difícil",
  nodepends:"Sin «depende»",
  newfact:"El dato que cambia todo",
  headline:"El titular",
  final:"Cierre listo"
};

const pick=(pool:PressureQuestion[],currentId:string)=>{
  const candidates=pool.filter(item=>item.id!==currentId);
  const source=candidates.length?candidates:pool;
  return source[Math.floor(Math.random()*source.length)]??allQuestions[0];
};

export default function CamaraDePresion(){
  const [current,setCurrent]=useState<PressureQuestion>(initialQuestion);
  const [used,setUsed]=useState<string[]>([initialQuestion.id]);
  const [family,setFamily]=useState<string|null>(null);
  const [stage,setStage]=useState(0);
  const [sourceOpen,setSourceOpen]=useState(false);
  const [running,setRunning]=useState(false);
  const [seconds,setSeconds]=useState(45*60);

  useEffect(()=>{
    if(!running||seconds<=0)return;
    const timer=window.setInterval(()=>setSeconds(value=>Math.max(0,value-1)),1000);
    return()=>window.clearInterval(timer);
  },[running,seconds]);

  const stagePool=useMemo(()=>{
    if(family)return allQuestions.filter(item=>item.family===family);
    const allowed=stages[stage]?.families??[];
    return allQuestions.filter(item=>allowed.includes(item.family as never));
  },[family,stage]);

  const sources=(current.sourceIds??[]).map(id=>pulseSources[id as keyof typeof pulseSources]).filter(Boolean);
  const globalIndex=allQuestions.findIndex(item=>item.id===current.id)+1;
  const topicQuestions=allQuestions.filter(item=>item.topic===current.topic);
  const topicIndex=topicQuestions.findIndex(item=>item.id===current.id)+1;
  const time=`${String(Math.floor(seconds/60)).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`;

  const load=(question:PressureQuestion)=>{
    setCurrent(question);
    setUsed(list=>list.includes(question.id)?list:[...list,question.id]);
    setSourceOpen(false);
  };

  const next=()=>{
    const unseenSameTopic=stagePool.filter(item=>item.topic===current.topic&&!used.includes(item.id));
    const unseenStage=stagePool.filter(item=>!used.includes(item.id));
    load(pick(unseenSameTopic.length?unseenSameTopic:unseenStage.length?unseenStage:stagePool,current.id));
  };

  const anotherTopic=()=>{
    const unseen=stagePool.filter(item=>item.topic!==current.topic&&!used.includes(item.id));
    const alternatives=stagePool.filter(item=>item.topic!==current.topic);
    load(pick(unseen.length?unseen:alternatives.length?alternatives:stagePool,current.id));
  };

  const chooseFamily=(value:string|null)=>{
    setFamily(value);
    const pool=value?allQuestions.filter(item=>item.family===value):allQuestions;
    const unseen=pool.filter(item=>!used.includes(item.id));
    load(pick(unseen.length?unseen:pool,current.id));
  };

  const chooseStage=(index:number)=>{
    setStage(index);
    setFamily(null);
    const pool=allQuestions.filter(item=>stages[index].families.includes(item.family as never));
    const unseen=pool.filter(item=>!used.includes(item.id));
    load(pick(unseen.length?unseen:pool,current.id));
  };

  return <main className="cx cxp pressure-app" style={{"--cx-accent":"#3b5bdb"} as CSSProperties}>
    <ClassicTopBar title="La cámara de presión · C2">
      <div className="pressure-timer" role="group" aria-label="Temporizador de la sesión">
        <b>{time}</b>
        <button className="cx-btn" onClick={()=>setRunning(value=>!value)}>{running?"Pausa":"Iniciar"}</button>
        <button className="cx-btn" onClick={()=>{setSeconds(45*60);setRunning(false)}} aria-label="Reiniciar temporizador">↺</button>
      </div>
    </ClassicTopBar>

    <nav className="cxp-steps pressure-steps" aria-label="Sesión sugerida de 45 minutos">
      {stages.map((item,index)=><button key={item.name} className={stage===index&&!family?"active":""} onClick={()=>chooseStage(index)}><span>{index+1}</span><b>{item.name}<small>{item.time}</small></b></button>)}
    </nav>

    <section className="pressure-room">
      <aside className="pressure-bank cx-card" aria-label="Banco de preguntas">
        <header><b>Banco de preguntas</b><span>{allQuestions.length}</span></header>
        <button className={!family?"active":""} onClick={()=>chooseFamily(null)}><span>Todo</span><small>{allQuestions.length}</small></button>
        <button className={family==="pulse"?"active pulse":"pulse"} onClick={()=>chooseFamily("pulse")}><span><i aria-hidden="true"/>Actualidad</span><small>{pulseQuestions.length}</small></button>
        {familyOrder.map(key=><button key={key} className={family===key?"active":""} onClick={()=>chooseFamily(key)}><span>{familyNames[key]}</span><small>{allQuestions.filter(item=>item.family===key).length}</small></button>)}
      </aside>

      <article className="pressure-core cx-card cx-rise" key={current.id}>
        <header>
          <span className="cx-kicker">{current.familyLabel}</span>
          <span className="cx-chip">Pregunta {globalIndex} de {allQuestions.length}</span>
        </header>
        <p className="pressure-topic">Tema: <b>{current.topic}</b><small>{topicIndex} de {topicQuestions.length}</small></p>
        <h1>{current.prompt}</h1>
        {current.context&&<button className="pressure-context" onClick={()=>setSourceOpen(value=>!value)} aria-expanded={sourceOpen}><b>Contexto mínimo · {pulseUpdated}</b><p>{current.context}</p><span>{sourceOpen?"Ocultar fuentes":"Ver fuentes"}</span></button>}
        {sourceOpen&&sources.length>0&&<div className="pressure-sources">{sources.map(source=><a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span>{source.name}</span><small>{source.date} ↗</small></a>)}</div>}
        <p className="cx-teacher"><b>Para el profe</b>El alumno responde con calma; la próxima pregunta ya está lista cuando haga falta.</p>
        <footer className="pressure-controls">
          <button className="cx-btn" onClick={anotherTopic}>Otro tema</button>
          <div className="pressure-progress"><i><em style={{width:`${Math.min(100,(used.length/15)*100)}%`}}/></i><span>{used.length} {used.length===1?"abierta":"abiertas"} · 10–15 suelen completar la sesión</span></div>
          <button className="cx-btn is-accent" onClick={next}>Siguiente pregunta →</button>
        </footer>
      </article>
    </section>
  </main>;
}
