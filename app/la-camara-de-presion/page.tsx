"use client";

import Link from "next/link";
import {useEffect,useMemo,useState} from "react";
import {evergreenQuestions,familyOrder,type PressureQuestion} from "./questions";
import {pulseQuestions,pulseSources,pulseUpdated} from "./pulse";
import "./style.css";

const allQuestions=[...pulseQuestions,...evergreenQuestions];
const initialQuestion=evergreenQuestions.find(item=>item.family==="personal")??allQuestions[0];
const stages=[
  {name:"ENTRADA",time:"2 min",families:["personal"]},
  {name:"ACTUALIDAD",time:"8 min",families:["pulse"]},
  {name:"LENGUAJE",time:"8 min",families:["words","premise","literal","wordshift","speaker","headline"]},
  {name:"IDEAS",time:"8 min",families:["opposite","effects","patterns","brutal"]},
  {name:"SIN «DEPENDE»",time:"5 min",families:["nodepends"]},
  {name:"DATO NUEVO",time:"5 min",families:["newfact"]},
  {name:"CIERRE",time:"9 min",families:["final"]}
] as const;

const familyNames:Record<string,string>={
  words:"MATICES LÉXICOS",
  premise:"CUESTIONÁ LA PREMISA",
  literal:"LITERALMENTE CIERTO",
  wordshift:"CAMBIÁ UNA PALABRA",
  opposite:"DEFENDÉ LO CONTRARIO",
  effects:"2.º / 3.er EFECTO",
  patterns:"¿CASUALIDAD O PATRÓN?",
  speaker:"QUIÉN LO DICE",
  personal:"PERSONAL C2",
  brutal:"ABSURDAMENTE DIFÍCIL",
  nodepends:"SIN «DEPENDE»",
  newfact:"EL DATO QUE CAMBIA TODO",
  headline:"EL TITULAR",
  final:"CIERRE LISTO"
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

  return <main className="pressure-app">
    <nav className="pressure-top">
      <Link href="/"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>C2 · CONVERSACIÓN</small></span></Link>
      <div className="session-timer"><button onClick={()=>setRunning(value=>!value)}>{running?"PAUSA":"INICIAR"}</button><b>{time}</b><button onClick={()=>{setSeconds(45*60);setRunning(false)}} aria-label="Reiniciar temporizador">↺</button></div>
      <Link href="/">BIBLIOTECA</Link>
    </nav>

    <aside className="pressure-stagebar" aria-label="Sesión sugerida de 45 minutos">
      {stages.map((item,index)=><button key={item.name} className={stage===index&&!family?"active":""} onClick={()=>chooseStage(index)}><span>{String(index+1).padStart(2,"0")}</span><b>{item.name}</b><small>{item.time}</small></button>)}
    </aside>

    <section className="chamber">
      <div className="chamber-scene"/><div className="chamber-vignette"/><div className="pressure-lines" aria-hidden="true"><i/><i/><i/><i/></div>

      <aside className="family-spine">
        <header><span>BANCO</span><b>{allQuestions.length}</b></header>
        <button className={!family?"active":""} onClick={()=>chooseFamily(null)}><i>?</i><span>TODO · {allQuestions.length}</span></button>
        <button className={family==="pulse"?"active pulse":"pulse"} onClick={()=>chooseFamily("pulse")}><i>●</i><span>ACTUALIDAD · {pulseQuestions.length}</span></button>
        {familyOrder.map((key,index)=><button key={key} className={family===key?"active":""} onClick={()=>chooseFamily(key)}><i>{String(index+1).padStart(2,"0")}</i><span>{familyNames[key]} · {allQuestions.filter(item=>item.family===key).length}</span></button>)}
      </aside>

      <article className="question-core" key={current.id}>
        <header><span>{current.familyLabel}</span><b>{String(globalIndex).padStart(3,"0")} / {allQuestions.length}</b></header>
        <div className="topic-line"><span>TEMA</span><b>{current.topic}</b><small>{topicIndex}/{topicQuestions.length}</small></div>
        {current.context&&<button className="context-strip" onClick={()=>setSourceOpen(value=>!value)}><span>CONTEXTO MÍNIMO · {pulseUpdated}</span><p>{current.context}</p><b>{sourceOpen?"OCULTAR FUENTES":"VER FUENTES"}</b></button>}
        {sourceOpen&&sources.length>0&&<aside className="source-float">{sources.map(source=><a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span>{source.name}</span><small>{source.date} ↗</small></a>)}</aside>}
        <h1>{current.prompt}</h1>
        <p className="speak-now">EL ALUMNO RESPONDE · LA PRÓXIMA PREGUNTA YA ESTÁ LISTA</p>
      </article>

      <footer className="question-controls">
        <button onClick={anotherTopic}>OTRO TEMA</button>
        <span><i style={{width:`${Math.min(100,(used.length/15)*100)}%`}}/><b>{used.length} abiertas · 10–15 suelen completar la sesión</b></span>
        <button onClick={next}>SIGUIENTE PREGUNTA →</button>
      </footer>
    </section>
  </main>;
}
