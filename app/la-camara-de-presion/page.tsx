"use client";

import Link from "next/link";
import {useEffect,useMemo,useState} from "react";
import {familyOrder} from "./questions";
import {ConversationFamily} from "../conversation-families/ConversationFamily";
import {CEFR_LEVELS,type CEFRLevel} from "../conversation-families/types";
import {OralBuilder} from "../conversation-families/OralBuilder";
import {pressureQuestionsForLevel,type LeveledPressureQuestion as PressureQuestion} from "./levels";
import {pulseSources,pulseUpdated} from "./pulse";
import "./style.css";


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
  premise:"CUESTIONA LA PREMISA",
  literal:"LITERALMENTE CIERTO",
  wordshift:"CAMBIA UNA PALABRA",
  opposite:"DEFIENDE LO CONTRARIO",
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
  return source[Math.floor(Math.random()*source.length)];
};

export default function CamaraDePresion(){
  return <ConversationFamily id="la-camara-de-presion" title="La Cámara de Presión" levels={CEFR_LEVELS} defaultLevel="C2">{level=><PressureExperience key={level} level={level}/>}</ConversationFamily>;
}
export function PressureExperience({level}:{level:CEFRLevel}){
  const allQuestions=useMemo(()=>pressureQuestionsForLevel(level),[level]);
  const initialQuestion=allQuestions.find(item=>item.family==="personal")??allQuestions[0];
  const a0=level==="A0";
  const label=(es:string,en:string)=>a0?`${es} · ${en}`:es;
  const stageNames=["Start","Our world","Language","Ideas","Choose","New information","Closing"];
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
  },[family,stage,allQuestions]);

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
      <Link href="/"><img src="/brand/mascot/portrait.webp" alt=""/><span><b>SPANISHCUE</b><small>{level} · {label("CONVERSACIÓN","CONVERSATION")}</small></span></Link>
      <div className="session-timer"><button onClick={()=>setRunning(value=>!value)}>{running?label("PAUSA","PAUSE"):label("INICIAR","START")}</button><b>{time}</b><button onClick={()=>{setSeconds(45*60);setRunning(false)}} aria-label={label("Reiniciar temporizador","Restart timer")}>↺</button></div>
      <Link href="/">{label("BIBLIOTECA","LIBRARY")}</Link>
    </nav>

    <aside className="pressure-stagebar" aria-label={label("Sesión sugerida de 45 minutos","Suggested 45-minute session")}>
      {stages.map((item,index)=><button key={item.name} className={stage===index&&!family?"active":""} onClick={()=>chooseStage(index)}><span>{String(index+1).padStart(2,"0")}</span><b>{label(item.name,stageNames[index])}</b><small>{item.time}</small></button>)}
    </aside>

    <section className="chamber">
      <div className="chamber-scene"/><div className="chamber-vignette"/><div className="pressure-lines" aria-hidden="true"><i/><i/><i/><i/></div>

      <aside className="family-spine">
        <header><span>{label("BANCO","QUESTIONS")}</span><b>{allQuestions.length}</b></header>
        <button className={!family?"active":""} onClick={()=>chooseFamily(null)}><i>?</i><span>{label("TODO","ALL")} · {allQuestions.length}</span></button>
        <button className={family==="pulse"?"active pulse":"pulse"} onClick={()=>chooseFamily("pulse")}><i>●</i><span>{label("ACTUALIDAD","OUR WORLD")} · {allQuestions.filter(q=>q.family==="pulse").length}</span></button>
        {familyOrder.map((key,index)=><button key={key} className={family===key?"active":""} onClick={()=>chooseFamily(key)}><i>{String(index+1).padStart(2,"0")}</i><span>{level==="C2"?familyNames[key]:allQuestions.find(q=>q.family===key)?.familyLabel} · {allQuestions.filter(item=>item.family===key).length}</span></button>)}
      </aside>

      <article className="question-core" key={current.id}>
        <header><span>{current.familyLabel}</span><b>{String(globalIndex).padStart(3,"0")} / {allQuestions.length}</b></header>
        <div className="topic-line"><span>{label("TEMA","TOPIC")}</span><b>{current.topic}</b><small>{topicIndex}/{topicQuestions.length}</small></div>
        {current.context&&<button className="context-strip" onClick={()=>setSourceOpen(value=>!value)}><span>CONTEXTO MÍNIMO · {pulseUpdated}</span><p>{current.context}</p><b>{sourceOpen?"OCULTAR FUENTES":"VER FUENTES"}</b></button>}
        {sourceOpen&&sources.length>0&&<aside className="source-float">{sources.map(source=><a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span>{source.name}</span><small>{source.date} ↗</small></a>)}</aside>}
        <h1>{current.prompt}</h1>{current.promptEn&&<p lang="en">{current.promptEn}</p>}
        {current.support&&<OralBuilder key={current.id} support={current.support}/>}
        {current.model&&<p><b>Modelo: </b>{current.model}</p>}
        {current.tip&&<p>💡 {current.tip}</p>}
        {current.followup&&<details><summary>{label("Otra vuelta","Another turn")}</summary><p>{current.followup}</p>{current.followupEn&&<p lang="en">{current.followupEn}</p>}</details>}
        <p className="speak-now">{label("EL PROFESOR HACE CLIC · EL ALUMNO RESPONDE ORALMENTE","THE TEACHER CLICKS · THE STUDENT SPEAKS")}</p>
      </article>

      <footer className="question-controls">
        <button onClick={anotherTopic}>{label("OTRO TEMA","ANOTHER TOPIC")}</button>
        <span><i style={{width:`${Math.min(100,(used.length/15)*100)}%`}}/><b>{used.length} {label("abiertas · 10–15 suelen completar la sesión","opened · 10–15 usually complete a session")}</b></span>
        <button onClick={next}>{label("SIGUIENTE PREGUNTA","NEXT QUESTION")} →</button>
      </footer>
    </section>
  </main>;
}
