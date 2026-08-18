"use client";

import {CSSProperties,useMemo,useState} from "react";
import {slangCards,topics,Topic} from "./data";
import "./style.css";

const Pair=({item}:{item:[string,string]})=><div className="roulette-pair"><b><em>ES</em>{item[0]}</b><span><em>EN</em>{item[1]}</span></div>;

export default function LifeRoulette(){
  const [used,setUsed]=useState<string[]>([]);
  const [rotation,setRotation]=useState(0);
  const [spinning,setSpinning]=useState(false);
  const [active,setActive]=useState<Topic|null>(null);
  const [legend,setLegend]=useState(false);
  const [openSlang,setOpenSlang]=useState<number[]>([]);
  const available=useMemo(()=>topics.filter(topic=>!used.includes(topic.id)),[used]);
  const pick=(topic:Topic)=>{
    if(spinning||used.includes(topic.id))return;
    setSpinning(true);
    const index=topics.findIndex(item=>item.id===topic.id);
    const target=-(index*20);
    const current=((rotation%360)+360)%360;
    const desired=((target%360)+360)%360;
    const next=rotation+1080+((desired-current+360)%360);
    setRotation(next);
    window.setTimeout(()=>{
      setUsed(items=>[...items,topic.id]);
      setSpinning(false);
      setActive(topic);
      window.scrollTo({top:0,behavior:"smooth"});
    },2800);
  };
  const random=()=>{if(!available.length)return;pick(available[Math.floor(Math.random()*available.length)])};
  const openTopic=(topic:Topic)=>{setActive(topic);window.scrollTo({top:0,behavior:"smooth"})};
  const back=()=>{setActive(null);window.scrollTo({top:0,behavior:"smooth"})};

  if(active)return <main className="roulette-shell topic-mode">
    <nav className="roulette-nav"><a href="/" className="roulette-brand"><img src="/chespanish-guide-avatar.png" alt=""/><span><b>CHESPANISH</b><small>A1–A2 · CONVERSACIÓN</small></span></a><button onClick={back}>← VOLVER A LA RULETA</button></nav>
    <section className="topic-page">
      <header className="topic-banner" style={{"--topic":active.color} as CSSProperties}><div><span>{active.en}</span><h1>{active.icon} {active.es}</h1><p>{active.id==="argento"?"Activá el español argentino: simple, natural y copado.":"Hablemos, compartamos ideas y practiquemos español."}</p><small>{active.id==="argento"?"Switch on Argentine Spanish: simple, natural and cool.":"Let’s talk, share ideas and practise Spanish."}</small></div><strong>{active.icon}</strong></header>
      {active.id==="argento"?<section className="slang-board"><div className="topic-section-title"><span>🇦🇷 SIGNIFICADO + USO · MEANING + USE</span><h2>Modo Argento</h2><p>Tocá cada tarjeta para ver un ejemplo y cuándo usarla.</p><small>Tap each card to see an example and when to use it.</small></div><div className="slang-grid">{slangCards.map((item,index)=><button key={item[0]} className={openSlang.includes(index)?"open":""} onClick={()=>setOpenSlang(items=>items.includes(index)?items.filter(x=>x!==index):[...items,index])}><span>{openSlang.includes(index)?"−":"+"}</span><h3><em>ES</em>{item[0]}</h3><b><em>EN</em>{item[1]}</b>{openSlang.includes(index)&&<div><p><strong>Ejemplo · Example:</strong> {item[2]}<small>{item[3]}</small></p><p><strong>Cuándo · When:</strong> {item[4]}<small>{item[5]}</small></p></div>}</button>)}</div><aside>💡 El tono cambia mucho el significado de algunas palabras argentinas.<small>Tone can greatly change the meaning of some Argentine words.</small></aside></section>:<div className="topic-board">
        <section className="questions-card"><span>3 PREGUNTAS · HABLÁ</span><h2>Tu turno.</h2>{active.questions.map((question,index)=><article key={question[0]}><i>{index+1}</i><div><b>{question[0]}</b></div></article>)}<div className="followups"><span>¿Por qué?<small>Why?</small></span><span>¿Cuándo?<small>When?</small></span><span>¿Con quién?<small>With whom?</small></span></div></section>
        <aside className="support-stack" aria-label="Recursos bilingües"><section className="support-card yellow"><h3>EMPEZÁ ACÁ · START HERE</h3>{active.starters.map(item=><Pair key={item[0]} item={item}/>)}</section><section className="support-card"><h3>PALABRAS ÚTILES · USEFUL WORDS</h3>{active.words.map(item=><Pair key={item[0]} item={item}/>)}</section><section className="support-card pink"><h3>🇦🇷 ARGENTO · SLANG</h3>{active.slang.map(item=><Pair key={item[0]} item={item}/>)}</section></aside>
      </div>}
      <footer className="topic-footer"><button onClick={back}>← VOLVER A LA RULETA</button><div><b>Hablá. Repetí. Seguí.</b><span>Speak. Repeat. Keep going. 🇦🇷</span></div><button className="next-topic" onClick={()=>{const pool=topics.filter(item=>!used.includes(item.id)&&item.id!==active.id);openTopic(pool[Math.floor(Math.random()*pool.length)]||topics[0])}}>✦ OTRO TEMA</button></footer>
    </section>
  </main>;

  return <main className="roulette-shell">
    <nav className="roulette-nav"><a href="/" className="roulette-brand"><img src="/chespanish-guide-avatar.png" alt=""/><span><b>CHESPANISH</b><small>A1–A2 · CONVERSACIÓN</small></span></a><a href="/">← BIBLIOTECA</a></nav>
    <section className="roulette-home">
      <header className="roulette-copy"><span className="roulette-kicker">🇦🇷 CONVERSACIÓN A1–A2 · ARGENTINA</span><h1>LA RULETA<br/><em>DE TU VIDA</em></h1><b>HABLÁ · GIRÁ · APRENDÉ</b><p>Elegí un símbolo. Hablá. Seguí.<small>Choose a symbol. Speak. Keep going.</small></p><div><button className="spin-main" onClick={random} disabled={spinning||!available.length}>🎡 {spinning?"GIRANDO…":"GIRAR · SPIN"}</button><button onClick={random} disabled={spinning||!available.length}>✦ SORPRENDEME</button><button onClick={()=>setLegend(true)}>? TEMAS</button></div></header>
      <section className="wheel-zone" aria-label="Ruleta interactiva de 18 temas">
        <div className="wheel-pointer" aria-hidden="true"/>
        <div className={`life-wheel ${spinning?"spinning":""}`} style={{transform:`rotate(${rotation}deg)`}}>
          {topics.map((topic,index)=><button key={topic.id} aria-label={topic.es} title={topic.es} className={used.includes(topic.id)?"used":""} onClick={()=>pick(topic)} disabled={spinning||used.includes(topic.id)} style={{"--angle":`${index*20}deg`,"--counter":`${-rotation}deg`} as CSSProperties}>{topic.icon}</button>)}
        </div>
        <button className="wheel-hub" onClick={random} disabled={spinning||!available.length}><b>{spinning?"…":"GIRAR"}</b><span>SPIN</span></button>
        <p className="topics-left"><b>{available.length}</b> TEMAS RESTANTES · TOPICS LEFT</p>
      </section>
    </section>
    {legend&&<div className="roulette-modal" onMouseDown={()=>setLegend(false)}><section onMouseDown={event=>event.stopPropagation()}><button onClick={()=>setLegend(false)}>×</button><span>GUÍA RÁPIDA · QUICK GUIDE</span><h2>¿Qué tema es cada símbolo?</h2><div>{topics.map(topic=><article key={topic.id}><b>{topic.icon}</b><span>{topic.es}<small>{topic.en}</small></span></article>)}</div></section></div>}
  </main>;
}
