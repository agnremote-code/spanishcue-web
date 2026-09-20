"use client";

import {useMemo,useState,type CSSProperties,type ReactNode} from "react";
import Link from "next/link";
import "./style.css";
import {connectors,speakingMoves,starters,stops,type Pair,type UsaStop} from "./data";

type Screen="cover"|"atlas"|"stop";
type Filter="todo"|"lugar"|"tema";
type GlyphName="map"|"shuffle"|"sound"|"trash"|"plus"|"home"|"route"|"compass";

function Glyph({name}:{name:GlyphName}){
  const paths:Record<GlyphName,ReactNode>={
    map:<><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z"/><path d="M9 3v15M15 6v15"/></>,
    shuffle:<><path d="M4 6h3c5 0 5 12 10 12h3"/><path d="m17 15 3 3-3 3M4 18h3c2 0 3.2-1.8 4.2-4M13 9c1-2 2.2-3 4-3h3M17 3l3 3-3 3"/></>,
    sound:<><path d="M5 10v4h4l5 4V6l-5 4Z"/><path d="M17 9c1.5 1.5 1.5 4.5 0 6M19.5 6.5c4 4 4 7 0 11"/></>,
    trash:<><path d="M5 7h14M9 7V4h6v3M8 10v9M12 10v9M16 10v9M7 7l1 14h8l1-14"/></>,
    plus:<><path d="M12 5v14M5 12h14"/></>,home:<><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/></>,
    route:<><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M7.5 16.5C9 15 8 12 11 12s2-3 5.5-4.5"/></>,
    compass:<><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/></>,
  };
  return <svg className="us-glyph" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function Seal({stop,small=false}:{stop:UsaStop;small?:boolean}){
  return <div className={`us-seal ${small?"small":""}`} style={{"--stop":stop.color} as CSSProperties} aria-hidden="true"><span>SPANISHCUE</span><b>{stop.number}</b><i>{stop.kind==="lugar"?"STOP":"LENS"}</i></div>;
}

export default function EstadosUnidosBasico(){
  const [screen,setScreen]=useState<Screen>("cover");
  const [active,setActive]=useState<UsaStop>(stops[0]);
  const [pick,setPick]=useState<UsaStop>(stops[0]);
  const [question,setQuestion]=useState(0);
  const [filter,setFilter]=useState<Filter>("todo");
  const [query,setQuery]=useState("");
  const [visited,setVisited]=useState<Set<string>>(new Set());
  const [showEnglish,setShowEnglish]=useState(true);
  const [answerParts,setAnswerParts]=useState<Pair[]>([]);

  const visible=useMemo(()=>stops.filter(stop=>(filter==="todo"||stop.kind===filter)&&`${stop.name} ${stop.nameEn} ${stop.state} ${stop.region}`.toLowerCase().includes(query.toLowerCase())),[filter,query]);
  const current=active.questions[question];
  const answerEs=answerParts.map(part=>part.es.replace(/[.…]+/g,"")).join(" ");
  const answerEn=answerParts.map(part=>part.en.replace(/[.…]+/g,"")).join(" ");
  const progress=Math.round(visited.size/stops.length*100);

  const show=(next:Screen)=>{setScreen(next);window.scrollTo({top:0,behavior:"smooth"})};
  const enter=(stop:UsaStop,start=0)=>{setActive(stop);setPick(stop);setQuestion(start);setAnswerParts([]);setVisited(old=>new Set([...old,stop.id]));show("stop")};
  const surprise=()=>{const pool=stops.filter(stop=>stop.id!==active.id);const next=pool[Math.floor(Math.random()*pool.length)]||stops[0];enter(next,Math.floor(Math.random()*6))};
  const changeQuestion=(next:number)=>{setQuestion(Math.max(0,Math.min(5,next)));setAnswerParts([]);document.querySelector(".us-question")?.scrollIntoView({behavior:"smooth",block:"center"})};
  const add=(pair:Pair)=>setAnswerParts(parts=>[...parts,pair]);
  const speak=(text:string)=>{if(typeof window==="undefined"||!("speechSynthesis" in window))return;window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);utterance.lang="es-AR";utterance.rate=.8;window.speechSynthesis.speak(utterance)};
  const setNextFilter=(next:Filter)=>{setFilter(next);const first=stops.find(stop=>next==="todo"||stop.kind===next);if(first)setPick(first)};

  return <main className={`us-app ${showEnglish?"":"us-no-english"}`}>
    <nav className="us-nav">
      <Link href="/" className="us-brand"><span><img src="/brand/mascot/portrait.webp" alt=""/></span><div><b>SPANISHCUE</b><small>CONVERSATION ROAD TRIPS</small></div></Link>
      <div className="us-mileage"><span>MILLAS HABLADAS · SPOKEN MILES</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}<small>/20</small></strong></div>
      <div className="us-nav-actions"><button onClick={surprise}><Glyph name="shuffle"/> SORPRESA</button><button onClick={()=>show(screen==="cover"?"atlas":"cover")}><Glyph name={screen==="cover"?"map":"home"}/>{screen==="cover"?" MAPA":" INICIO"}</button></div>
    </nav>

    {screen==="cover"&&<section className="us-cover">
      <div className="us-cover-copy">
        <div className="us-level"><span>A1</span><i/>100% CONVERSACIÓN BÁSICA</div>
        <p className="us-kicker">20 PARADAS · 120 PREGUNTAS · TODO BILINGÜE</p>
        <h1>ESTADOS<br/><em>UNIDOS</em></h1>
        <div className="us-coastline"><span>COAST</span><i/><b>TO</b><i/><span>COAST</span></div>
        <p className="us-lead">Un viaje para hablar desde el primer minuto: ciudades, naturaleza, comida, música y vida cotidiana.<b> Preguntas cortas, opciones claras y recursos que se pueden tocar.</b><span className="us-en">A journey for speaking from the first minute: cities, nature, food, music and everyday life. Short questions, clear options and resources you can tap.</span></p>
        <div className="us-cover-actions"><button onClick={()=>show("atlas")}>ABRIR EL ATLAS <Glyph name="route"/><small className="us-en">OPEN THE ATLAS</small></button><button className="ghost" onClick={surprise}><Glyph name="shuffle"/> PARADA SORPRESA<small className="us-en">RANDOM STOP</small></button></div>
        <div className="us-cover-stats"><article><b>20</b><span>paradas y lentes<small>stops & lenses</small></span></article><article><b>120</b><span>preguntas básicas<small>basic questions</small></span></article><article><b>8</b><span>palabras por parada<small>words per stop</small></span></article></div>
      </div>
      <div className="us-cover-art" aria-hidden="true"><img src="/usa-basic-hero.webp" alt=""/><div className="us-route-badge"><span>ROUTE</span><b>20</b><small>SPEAKING STOPS</small></div><div className="us-cover-pin pin-east"><b>NEW YORK</b><small>EAST</small></div><div className="us-cover-pin pin-center"><b>THE ROCKIES</b><small>WEST</small></div><div className="us-cover-pin pin-pacific"><b>CALIFORNIA</b><small>PACIFIC</small></div></div>
      <div className="us-paper-edge" aria-hidden="true"/>
    </section>}

    {screen==="atlas"&&<section className="us-atlas">
      <header className="us-atlas-head"><div><span>EL GRAN VIAJE · THE BIG TRIP</span><h1>Elegí una parada.<br/><em>Empezá a hablar.</em></h1></div><div><p>Catorce lugares reales y seis temas cotidianos. Cada parada abre seis preguntas A1, audio, respuestas rápidas y vocabulario bilingüe.</p><span className="us-en">Fourteen real places and six everyday themes. Every stop opens six A1 questions, audio, quick answers and bilingual vocabulary.</span><button onClick={surprise}><Glyph name="shuffle"/> ELEGIR POR MÍ · PICK FOR ME</button></div></header>
      <div className="us-tools"><div><button className={filter==="todo"?"active":""} onClick={()=>setNextFilter("todo")}>TODO · ALL</button><button className={filter==="lugar"?"active":""} onClick={()=>setNextFilter("lugar")}>MAPA · PLACES</button><button className={filter==="tema"?"active":""} onClick={()=>setNextFilter("tema")}>TEMAS · TOPICS</button></div><label><span>⌕</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar lugar o tema · Search"/></label></div>

      <section className="us-explorer">
        <div className="us-map-card">
          <header><span><Glyph name="compass"/> ATLAS DE CONVERSACIÓN</span><b>EAST ↔ WEST</b></header>
          <div className="us-map-stage">
            <div className="us-ocean pacific">PACÍFICO</div><div className="us-ocean atlantic">ATLÁNTICO</div>
            <div className="us-contiguous" aria-hidden="true"><i/><i/><i/><i/><span>WEST</span><span>MIDWEST</span><span>SOUTH</span><span>EAST</span></div>
            <svg className="us-route-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M13 45 C22 51 24 39 35 42 S49 62 58 57 S66 34 76 40 S82 31 88 28"/></svg>
            {stops.filter(stop=>stop.kind==="lugar").map(stop=>{const enabled=visible.some(item=>item.id===stop.id);return <button key={stop.id} disabled={!enabled} className={`us-map-node ${pick.id===stop.id?"selected":""} ${visited.has(stop.id)?"visited":""} ${enabled?"":"dim"} node-${stop.id}`} style={{left:`${stop.x}%`,top:`${stop.y}%`,"--stop":stop.color} as CSSProperties} onClick={()=>setPick(stop)}><b>{stop.number}</b><span><strong>{stop.name}</strong><small>{stop.state}</small></span></button>})}
            <div className="us-map-note"><b>MAPA ESQUEMÁTICO</b><span>Las posiciones son aproximadas y sirven para la actividad.</span><small className="us-en">Positions are approximate and designed for the activity.</small></div>
          </div>
        </div>

        <aside className="us-preview" style={{"--stop":pick.color} as CSSProperties}>
          <div className="us-preview-art"><img src="/usa-basic-hero.webp" alt="Ilustración artística de un viaje por Estados Unidos"/><Seal stop={pick} small/></div>
          <div className="us-preview-copy"><span>{pick.kind==="lugar"?"PARADA · STOP":"TEMA · TOPIC"} {pick.number}</span><small>{pick.state} · {pick.region}</small><h2>{pick.name}</h2><h3>{pick.kicker.es}</h3><p>{pick.fact.es}</p><p className="us-en">{pick.fact.en}</p><div><b>A1</b><b>6 preguntas</b><b>Audio</b><b>Wordbank</b></div><button onClick={()=>enter(pick)}>ABRIR ESTA PARADA <span>→</span><small className="us-en">OPEN THIS STOP</small></button></div>
        </aside>
      </section>

      <section className="us-topics"><header><div><span>MÁS ALLÁ DEL MAPA · BEYOND THE MAP</span><h2>Seis temas para hablar de la vida real.</h2></div><p>Viajar no es solamente mirar lugares. También es comer, escuchar, moverse, jugar, aprender idiomas y elegir cómo vivir.</p></header><div>{stops.filter(stop=>stop.kind==="tema"&&visible.some(item=>item.id===stop.id)).map(stop=><button key={stop.id} onClick={()=>setPick(stop)} className={`${pick.id===stop.id?"active":""} ${visited.has(stop.id)?"visited":""}`} style={{"--stop":stop.color} as CSSProperties}><span>{stop.number}</span><small>{stop.state}</small><b>{stop.name}</b><em>{stop.kicker.es}</em><i>EXPLORAR · EXPLORE →</i></button>)}</div></section>

      <section className="us-ticket-strip"><header><span>LAS 20 PARADAS · ALL 20 STOPS</span><b>{visited.size} visitadas · visited</b></header><div>{visible.map(stop=><button key={stop.id} onClick={()=>setPick(stop)} className={`${pick.id===stop.id?"active":""} ${visited.has(stop.id)?"visited":""}`} style={{"--stop":stop.color} as CSSProperties}><span>{stop.number}</span><b>{stop.name}</b><small>{stop.kind==="lugar"?"STOP":"TOPIC"}</small></button>)}</div></section>
    </section>}

    {screen==="stop"&&<section className="us-world" style={{"--stop":active.color} as CSSProperties}>
      <header className="us-world-hero">
        <div className="us-world-top"><button onClick={()=>show("atlas")}>← MAPA · MAP</button><span>PARADA {active.number} · {active.state}</span><div><button className={showEnglish?"active":""} onClick={()=>setShowEnglish(value=>!value)}>EN {showEnglish?"ON":"OFF"}</button><button onClick={surprise}><Glyph name="shuffle"/> OTRA</button></div></div>
        <div className="us-world-copy"><small>{active.kind==="lugar"?"DESTINO REAL · REAL DESTINATION":"TEMA COTIDIANO · EVERYDAY TOPIC"}</small><h1>{active.name}</h1><h2 className="us-en">{active.nameEn} · {active.kicker.en}</h2><p><b>{active.fact.es}</b><span className="us-en">{active.fact.en}</span></p><div><span>A1</span><span>6 preguntas</span><span>Apoyo bilingüe</span></div></div>
        <div className="us-world-art" aria-hidden="true"><img src="/usa-basic-hero.webp" alt=""/><Seal stop={active}/></div>
      </header>

      <div className="us-classroom">
        <section className="us-mission"><span>TU MISIÓN · YOUR MISSION</span><div><b>{active.mission.es}</b><em className="us-en">{active.mission.en}</em></div><strong>Una frase → una razón → un detalle<small className="us-en">One sentence → one reason → one detail</small></strong></section>

        <section className="us-question">
          <div className="us-question-count"><span>PREGUNTA</span><b>{String(question+1).padStart(2,"0")}</b><i>/ 06</i></div>
          <div className="us-question-copy"><small>{active.state} · {active.kicker.es}</small><h2>{current.es}</h2><p className="us-en">{current.en}</p><button onClick={()=>speak(current.es)}><Glyph name="sound"/> ESCUCHAR · LISTEN</button></div>
          <div className="us-question-seal" aria-hidden="true"><Seal stop={active}/></div>
        </section>

        <section className="us-fast-answer"><header><span>1 · RESPUESTA RÁPIDA · QUICK ANSWER</span><p>Tocá una opción para empezar. Después podés cambiarla.</p></header><div>{active.quick.map(pair=><button key={pair.es} onClick={()=>add(pair)}><b>{pair.es}</b><small className="us-en">{pair.en}</small><i>+</i></button>)}</div></section>

        <section className="us-builder-tools">
          <button className="us-starter" onClick={()=>add(starters[question])}><span>2 · COMIENZO · STARTER</span><b>{starters[question].es}</b><small className="us-en">{starters[question].en}</small><i><Glyph name="plus"/> AGREGAR · ADD</i></button>
          <article className="us-connectors"><span>3 · CONECTORES · CONNECTORS</span><div>{connectors.map(pair=><button key={pair.es} onClick={()=>add(pair)}><b>{pair.es}</b><small className="us-en">{pair.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="us-answer-lab" aria-live="polite">
          <header><div><span>TU RESPUESTA · YOUR ANSWER</span><h2>Construí una frase y decila en voz alta.</h2><p className="us-en">Build a sentence and say it out loud.</p></div><div><button disabled={!answerParts.length} onClick={()=>speak(answerEs)}><Glyph name="sound"/> ESCUCHAR</button><button disabled={!answerParts.length} onClick={()=>setAnswerParts([])}><Glyph name="trash"/> BORRAR</button></div></header>
          <div className={`us-answer-canvas ${answerParts.length?"has-answer":""}`}>{answerParts.length?answerParts.map((pair,index)=><button key={`${pair.es}-${index}`} onClick={()=>setAnswerParts(parts=>parts.filter((_,i)=>i!==index))}><b>{pair.es}</b><small className="us-en">{pair.en}</small></button>):<p><b>Tocá una respuesta rápida, un comienzo o una palabra.</b><span className="us-en">Tap a quick answer, starter or word.</span></p>}</div>
          {answerParts.length>0&&<div className="us-readout"><b>{answerEs}</b><span className="us-en">{answerEn}</span></div>}
        </section>

        <section className="us-wordbank"><header><span>WORDBANK DE LA PARADA</span><h2>Ocho palabras para seguir hablando.</h2><p className="us-en">Eight words to keep talking.</p></header><div>{active.words.map((pair,index)=><button key={pair.es} onClick={()=>add(pair)}><span>{String(index+1).padStart(2,"0")}</span><b>{pair.es}</b><small className="us-en">{pair.en}</small><i>+</i></button>)}</div></section>

        <section className="us-speaking-moves"><header><span>OTRA VUELTA · ONE MORE ROUND</span><h2>Elegí un desafío para hablar más.</h2></header><div>{speakingMoves.map((move,index)=><button key={move.es}><span>{index+1}</span><b>{move.es}</b><small className="us-en">{move.en}</small></button>)}</div></section>

        <nav className="us-question-nav"><button disabled={question===0} onClick={()=>changeQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{active.questions.map((_,index)=><button key={index} className={question===index?"active":""} onClick={()=>changeQuestion(index)} aria-label={`Pregunta ${index+1}`}>{index+1}</button>)}</div><button onClick={()=>question===5?surprise():changeQuestion(question+1)}>{question===5?"OTRA PARADA · NEXT STOP →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  </main>;
}
