"use client";

import {CSSProperties,MouseEvent,useMemo,useRef,useState} from "react";
import Link from "next/link";
import {slangCards,topics,Topic} from "./data";
import "./style.css";

type RouletteStyle = CSSProperties & Record<`--${string}`,string|number>;

const Pair=({item}:{item:[string,string]})=><div className="roulette-pair"><b><em>ES</em>{item[0]}</b><span><em>EN</em>{item[1]}</span></div>;

const SupportCard=({className="",title,children}:{className?:string;title:string;children:React.ReactNode})=><details className={`support-card ${className}`} open>
  <summary><span>{title}</span><i aria-hidden="true">⌄</i></summary>
  <div>{children}</div>
</details>;

export default function LifeRoulette(){
  const [used,setUsed]=useState<string[]>([]);
  const [rotation,setRotation]=useState(0);
  const [spinning,setSpinning]=useState(false);
  const [landed,setLanded]=useState<Topic|null>(null);
  const [active,setActive]=useState<Topic|null>(null);
  const [legend,setLegend]=useState(false);
  const [openSlang,setOpenSlang]=useState<number[]>([]);
  const [completed,setCompleted]=useState<number[]>([]);
  const [sound,setSound]=useState(false);
  const sceneRef=useRef<HTMLDivElement>(null);
  const available=useMemo(()=>topics.filter(topic=>!used.includes(topic.id)),[used]);

  const tone=(frequency:number,duration:number,delay=0)=>{
    if(!sound)return;
    window.setTimeout(()=>{
      const AudioCtor=window.AudioContext||(window as typeof window&{webkitAudioContext?:typeof AudioContext}).webkitAudioContext;
      if(!AudioCtor)return;
      const context=new AudioCtor();
      const oscillator=context.createOscillator();
      const gain=context.createGain();
      oscillator.type="sine";
      oscillator.frequency.setValueAtTime(frequency,context.currentTime);
      gain.gain.setValueAtTime(.0001,context.currentTime);
      gain.gain.exponentialRampToValueAtTime(.14,context.currentTime+.02);
      gain.gain.exponentialRampToValueAtTime(.0001,context.currentTime+duration);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime+duration+.03);
      oscillator.onended=()=>void context.close();
    },delay);
  };

  const pick=(topic:Topic)=>{
    if(spinning||used.includes(topic.id))return;
    setSpinning(true);
    setLanded(null);
    tone(180,.32);
    const index=topics.findIndex(item=>item.id===topic.id);
    const target=-(index*20);
    const current=((rotation%360)+360)%360;
    const desired=((target%360)+360)%360;
    const next=rotation+1440+((desired-current+360)%360);
    setRotation(next);
    window.setTimeout(()=>{
      setUsed(items=>items.includes(topic.id)?items:[...items,topic.id]);
      setSpinning(false);
      setLanded(topic);
      tone(523,.18);
      tone(659,.18,120);
      tone(784,.3,240);
    },3400);
  };
  const random=()=>{if(!available.length)return;pick(available[Math.floor(Math.random()*available.length)])};
  const openTopic=(topic:Topic)=>{setActive(topic);setCompleted([]);setLanded(null);window.scrollTo({top:0,behavior:"smooth"})};
  const back=()=>{setActive(null);setCompleted([]);window.scrollTo({top:0,behavior:"smooth"})};
  const reset=()=>{setUsed([]);setLanded(null);setRotation(0)};
  const tilt=(event:MouseEvent<HTMLDivElement>)=>{
    if(!sceneRef.current||spinning)return;
    const rect=sceneRef.current.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    sceneRef.current.style.setProperty("--tilt-y",`${x*7}deg`);
    sceneRef.current.style.setProperty("--tilt-x",`${y*-6}deg`);
  };
  const untilt=()=>{sceneRef.current?.style.setProperty("--tilt-y","0deg");sceneRef.current?.style.setProperty("--tilt-x","0deg")};
  const toggleQuestion=(index:number)=>setCompleted(items=>items.includes(index)?items.filter(item=>item!==index):[...items,index]);
  const confetti=Array.from({length:24},(_,index)=>({
    left:`${8+(index*37)%84}%`,
    delay:`${(index%8)*.055}s`,
    color:["#ffd428","#43c8ff","#ff2b85","#ffffff","#45e6a5"][index%5],
    spin:`${(index%2?1:-1)*(160+index*13)}deg`
  }));

  if(active)return <main className="roulette-shell topic-mode" style={{"--topic":active.color} as RouletteStyle}>
    <div className="roulette-atmosphere" aria-hidden="true"><i/><i/><i/></div>
    <nav className="roulette-nav"><Link href="/" className="roulette-brand"><span className="roulette-brand-mark" aria-hidden="true"><img src="/mascots/conversation.png" alt="" /></span><span><b>CHESPANISH</b><small>A1–A2 · CONVERSACIÓN</small></span></Link><button onClick={back}>← VOLVER A LA RULETA</button></nav>
    <section className="topic-page">
      <header className="topic-banner">
        <div className="topic-banner-copy"><span>TEMA {String(topics.findIndex(item=>item.id===active.id)+1).padStart(2,"0")} · {active.en}</span><h1>{active.es}</h1><p>{active.id==="argento"?"Activá el español argentino: simple, natural y copado.":"Tres preguntas. Una conversación real. Cero presión."}</p><small>{active.id==="argento"?"Switch on Argentine Spanish: simple, natural and cool.":"Three questions. One real conversation. Zero pressure."}</small></div>
        <div className="topic-icon-scene" aria-hidden="true"><i/><strong>{active.icon}</strong><span>{active.icon}</span></div>
      </header>
      {active.id==="argento"?<section className="slang-board"><div className="topic-section-title"><span>🇦🇷 SIGNIFICADO + USO · MEANING + USE</span><h2>Modo Argento</h2><p>Tocá cada tarjeta para descubrir cómo suena en una conversación real.</p><small>Tap each card to discover how it sounds in a real conversation.</small></div><div className="slang-grid">{slangCards.map((item,index)=><button key={item[0]} className={openSlang.includes(index)?"open":""} onClick={()=>setOpenSlang(items=>items.includes(index)?items.filter(x=>x!==index):[...items,index])} aria-expanded={openSlang.includes(index)}><span>{openSlang.includes(index)?"−":"+"}</span><h3><em>ES</em>{item[0]}</h3><b><em>EN</em>{item[1]}</b>{openSlang.includes(index)&&<div><p><strong>Ejemplo · Example:</strong> {item[2]}<small>{item[3]}</small></p><p><strong>Cuándo · When:</strong> {item[4]}<small>{item[5]}</small></p></div>}</button>)}</div><aside>💡 El tono cambia mucho el significado de algunas palabras argentinas.<small>Tone can greatly change the meaning of some Argentine words.</small></aside></section>:<div className="topic-board">
        <section className="questions-card">
          <header className="question-head"><div><span>3 PREGUNTAS · HABLÁ</span><h2>Tu conversación</h2></div><div className="question-score" aria-label={`${completed.length} de 3 preguntas completadas`}><b>{completed.length}</b><span>/ 3</span></div></header>
          <div className="conversation-progress"><i style={{width:`${completed.length/3*100}%`}}/></div>
          <p className="question-instruction">Tocá una pregunta cuando terminen de hablarla.<small>Tap a question when you finish talking about it.</small></p>
          {active.questions.map((question,index)=><button className={`question-card ${completed.includes(index)?"done":""}`} key={question[0]} onClick={()=>toggleQuestion(index)} aria-pressed={completed.includes(index)}><i>{completed.includes(index)?"✓":index+1}</i><div><b>{question[0]}</b><small>{question[1]}</small></div><span>{completed.includes(index)?"HABLADA":"TOCÁ AL TERMINAR"}</span></button>)}
          <div className="followup-lab"><b>SEGUÍ LA CHARLA · KEEP IT GOING</b><div><span>¿Por qué?<small>Why?</small></span><span>¿Cuándo?<small>When?</small></span><span>¿Con quién?<small>With whom?</small></span></div></div>
          {completed.length===3&&<div className="conversation-complete"><span>✦</span><div><b>¡TEMA COMPLETADO!</b><small>Topic complete. Ready for another spin?</small></div><button onClick={back}>VOLVER A GIRAR →</button></div>}
        </section>
        <aside className="support-stack" aria-label="Recursos bilingües"><SupportCard className="yellow" title="EMPEZÁ ACÁ · START HERE">{active.starters.map(item=><Pair key={item[0]} item={item}/>)}</SupportCard><SupportCard title="PALABRAS ÚTILES · USEFUL WORDS">{active.words.map(item=><Pair key={item[0]} item={item}/>)}</SupportCard><SupportCard className="pink" title="🇦🇷 ARGENTO · SLANG">{active.slang.map(item=><Pair key={item[0]} item={item}/>)}</SupportCard></aside>
      </div>}
      <footer className="topic-footer"><button onClick={back}>← VOLVER A LA RULETA</button><div><b>Hablá. Reaccioná. Conectá.</b><span>Speak. React. Connect. 🇦🇷</span></div><button className="next-topic" onClick={()=>{const pool=topics.filter(item=>!used.includes(item.id)&&item.id!==active.id);openTopic(pool[Math.floor(Math.random()*pool.length)]||topics[0])}}>✦ OTRO TEMA</button></footer>
    </section>
  </main>;

  return <main className="roulette-shell">
    <div className="roulette-atmosphere" aria-hidden="true"><i/><i/><i/></div>
    <nav className="roulette-nav"><Link href="/" className="roulette-brand"><span className="roulette-brand-mark" aria-hidden="true"><img src="/mascots/conversation.png" alt="" /></span><span><b>CHESPANISH</b><small>A1–A2 · CONVERSACIÓN</small></span></Link><div className="roulette-nav-actions"><button className={sound?"sound-on":""} onClick={()=>setSound(value=>!value)} aria-pressed={sound}>{sound?"◉ SONIDO ON":"○ SONIDO OFF"}</button><Link href="/">← BIBLIOTECA</Link></div></nav>
    <section className="roulette-home">
      <header className="roulette-copy"><span className="roulette-kicker">🇦🇷 CONVERSACIÓN A1–A2 · ARGENTINA</span><h1>LA RULETA<br/><em>DE TU VIDA</em></h1><b>HABLÁ · GIRÁ · CONECTÁ</b><p>18 temas. Solo 3 preguntas.<br/>Una charla que nunca se repite.<small>18 topics. Only 3 questions. A conversation that never repeats.</small></p><div className="roulette-steps"><span><i>1</i>GIRÁ</span><b>→</b><span><i>2</i>DESCUBRÍ</span><b>→</b><span><i>3</i>HABLÁ</span></div><div className="roulette-actions"><button className="spin-main" onClick={random} disabled={spinning||!available.length}>{spinning?<><i className="button-spinner"/> GIRANDO…</>:<>🎡 GIRAR · SPIN</>}</button><button onClick={random} disabled={spinning||!available.length}>✦ SORPRENDEME</button><button onClick={()=>setLegend(true)}>18 TEMAS ↗</button></div></header>
      <section className="wheel-zone" aria-label="Ruleta 3D interactiva de 18 temas">
        <div className="wheel-halo" aria-hidden="true"/>
        <div className={`wheel-scene ${spinning?"is-spinning":""}`} ref={sceneRef} onMouseMove={tilt} onMouseLeave={untilt}>
          <div className="wheel-floor" aria-hidden="true"/>
          <div className="wheel-machine">
            <div className="wheel-pointer" aria-hidden="true"><span/></div>
            <div className={`life-wheel ${spinning?"spinning":""} ${landed?"landed":""}`} style={{transform:`rotate(${rotation}deg)`}}>
              <div className="wheel-gloss" aria-hidden="true"/>
              {topics.map((topic,index)=><button key={topic.id} aria-label={topic.es} title={topic.es} className={used.includes(topic.id)?"used":""} onClick={()=>pick(topic)} disabled={spinning||used.includes(topic.id)} style={{"--angle":`${index*20}deg`,"--counter":`${-rotation}deg`} as RouletteStyle}><span>{topic.icon}</span><small>{topic.es}</small></button>)}
            </div>
            <button className="wheel-hub" onClick={random} disabled={spinning||!available.length}><i aria-hidden="true"/><b>{spinning?"…":"GIRAR"}</b><span>SPIN</span></button>
          </div>
        </div>
        <div className="wheel-status" aria-live="polite"><span><b>{available.length}</b><small>DE 18</small></span><div><strong>{available.length?"TEMAS RESTANTES":"¡RULETA COMPLETA!"}</strong><small>{available.length?"No se repiten hasta terminar.":"Reiniciá para volver a jugar."}</small></div>{!available.length&&<button onClick={reset}>REINICIAR ↻</button>}</div>
        {landed&&<div className="wheel-result" style={{"--result":landed.color} as RouletteStyle}><div className="confetti" aria-hidden="true">{confetti.map((piece,index)=><i key={index} style={{"--left":piece.left,"--delay":piece.delay,"--confetti":piece.color,"--spin":piece.spin} as RouletteStyle}/>)}</div><span>{landed.icon}</span><div><small>LA RULETA ELIGIÓ · THE WHEEL CHOSE</small><b>{landed.es}</b><em>{landed.en}</em></div><button onClick={()=>openTopic(landed)}>ENTRAR AL TEMA →</button></div>}
      </section>
    </section>
    {legend&&<div className="roulette-modal" role="dialog" aria-modal="true" aria-labelledby="roulette-legend-title" onMouseDown={()=>setLegend(false)}><section onMouseDown={event=>event.stopPropagation()}><button onClick={()=>setLegend(false)} aria-label="Cerrar">×</button><span>GUÍA RÁPIDA · QUICK GUIDE</span><h2 id="roulette-legend-title">18 puertas para conversar</h2><p>Elegí un símbolo directamente o dejá que la ruleta decida.</p><div>{topics.map(topic=><button key={topic.id} onClick={()=>{setLegend(false);pick(topic)}} disabled={used.includes(topic.id)}><b>{topic.icon}</b><span>{topic.es}<small>{topic.en}</small></span><i>{used.includes(topic.id)?"✓":"→"}</i></button>)}</div></section></div>}
  </main>;
}
