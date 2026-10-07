"use client";
import { ConversationFamily } from "../conversation-families/ConversationFamily";
import { COUNTRY_LEVELS, countryActivity, countrySupport } from "../conversation-families/country-levels";
import { CountryTools, CountryClosing } from "../conversation-families/country-tools";
import type { CEFRLevel } from "../conversation-families/types";


import {useMemo,useState,type CSSProperties,type ReactNode} from "react";
import Link from "next/link";
import "./style.css";
import {connectors as nativeConnectors,speakingMoves as nativeSpeakingMoves,starters as nativeStarters,stops,type Pair,type UsaStop} from "./data";

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
 return <ConversationFamily id="estados-unidos-a2-b1" title="Estados Unidos" levels={COUNTRY_LEVELS} defaultLevel="A1">{level=><CountryExperience key={level} level={level}/>}</ConversationFamily>;
}
function CountryExperience({level}:{level:CEFRLevel}){
  const [screen,setScreen]=useState<Screen>("cover");
  const [nativeActive,setActive]=useState<UsaStop>(stops[0]);
  const context={name:nativeActive.name,places:[{es:nativeActive.name,en:nativeActive.name}],words:nativeActive.words,source:nativeActive.questions};
  const support=countrySupport(level,context);
  const speakingMoves=level==="A1"?nativeSpeakingMoves:[support.challenge,support.tip];
  const connectors=level==="A1"?nativeConnectors:support.connectors;
  const starters=level==="A1"?nativeStarters:support.starters;
  const active=level==="A1"?nativeActive:{...nativeActive,questions:nativeActive.questions.map((item,index)=>({...item,...countryActivity(level,context,index)})),mission:support.challenge};
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
  const add=(pair:Pair)=>setAnswerParts(parts=>level==="A0"?[pair]:[...parts,pair]);
  const speak=(text:string)=>{if(typeof window==="undefined"||!("speechSynthesis" in window))return;window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);utterance.lang="es-AR";utterance.rate=.8;window.speechSynthesis.speak(utterance)};
  const setNextFilter=(next:Filter)=>{setFilter(next);const first=stops.find(stop=>next==="todo"||stop.kind===next);if(first)setPick(first)};

  return <main className={`us-app ${(level==="A0"||showEnglish)?"":"us-no-english"}`}>
    <nav className="us-nav">
      <Link href="/" className="us-brand"><span><img src="/brand/mascot/portrait.webp" alt=""/></span><div><b>SPANISHCUE</b><small>CONVERSATION ROAD TRIPS</small></div></Link>
      <div className="us-mileage"><span>MILLAS HABLADAS · SPOKEN MILES</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}<small>/20</small></strong></div>
      <div className="us-nav-actions"><button onClick={surprise}><Glyph name="shuffle"/> SORPRESA<span className="country-a0-en" lang="en"> / SURPRISE</span></button><button onClick={()=>show(screen==="cover"?"atlas":"cover")}><Glyph name={screen==="cover"?"map":"home"}/>{screen==="cover"?" MAPA / MAP":" INICIO / HOME"}</button></div>
    </nav>

    {screen==="cover"&&<section className="us-cover">
      <div className="us-cover-copy">
        <div className="us-level"><span>{level}</span><i/>100% CONVERSACIÓN BÁSICA<span className="country-a0-en" lang="en"> / 100% BASIC CONVERSATION</span></div>
        <p className="us-kicker">20 PARADAS · 120 PREGUNTAS · TODO BILINGÜE<span className="country-a0-en" lang="en"> / 20 STOPS · 120 QUESTIONS · FULLY BILINGUAL</span></p>
        <h1>ESTADOS<br/><em>UNIDOS</em></h1>
        <div className="us-coastline"><span>COAST</span><i/><b>TO</b><i/><span>COAST</span></div>
        <p className="us-lead">Un viaje para hablar desde el primer minuto: ciudades, naturaleza, comida, música y vida cotidiana.<b> Preguntas cortas, opciones claras y recursos que se pueden tocar.</b><span className="us-en">A journey for speaking from the first minute: cities, nature, food, music and everyday life. Short questions, clear options and resources you can tap.</span></p>
        <div className="us-cover-actions"><button onClick={()=>show("atlas")}>ABRIR EL ATLAS<span className="country-a0-en" lang="en"> / OPEN THE ATLAS</span> <Glyph name="route"/><small className="us-en">OPEN THE ATLAS<span className="country-a0-en" lang="es"> / ABRIR EL ATLAS</span></small></button><button className="ghost" onClick={surprise}><Glyph name="shuffle"/> PARADA SORPRESA<span className="country-a0-en" lang="en"> / SURPRISE STOP</span><small className="us-en">RANDOM STOP<span className="country-a0-en" lang="es"> / PARADA AL AZAR</span></small></button></div>
        <div className="us-cover-stats"><article><b>20</b><span>paradas y lentes<span className="country-a0-en" lang="en"> / stops and lenses</span><small>stops & lenses</small></span></article><article><b>120</b><span>preguntas básicas<span className="country-a0-en" lang="en"> / basic questions</span><small>basic questions</small></span></article><article><b>8</b><span>palabras por parada<span className="country-a0-en" lang="en"> / words per stop</span><small>words per stop</small></span></article></div>
      </div>
      <div className="us-cover-art" aria-hidden="true"><img src="/usa-basic-hero.webp" alt=""/><div className="us-route-badge"><span>ROUTE</span><b>20</b><small>SPEAKING STOPS<span className="country-a0-en" lang="es"> / PARADAS PARA HABLAR</span></small></div><div className="us-cover-pin pin-east"><b>NEW YORK</b><small>EAST</small></div><div className="us-cover-pin pin-center"><b>THE ROCKIES</b><small>WEST</small></div><div className="us-cover-pin pin-pacific"><b>CALIFORNIA</b><small>PACIFIC</small></div></div>
      <div className="us-paper-edge" aria-hidden="true"/>
    </section>}

    {screen==="atlas"&&<section className="us-atlas">
      <header className="us-atlas-head"><div><span>EL GRAN VIAJE · THE BIG TRIP</span><h1>Elige una parada.<span className="country-a0-en" lang="en"> / Choose a stop.</span><br/><em>Empieza a hablar.<span className="country-a0-en" lang="en"> / Start speaking.</span></em></h1></div><div><p>Catorce lugares reales y seis temas cotidianos. Cada parada abre seis preguntas {level}, audio, respuestas rápidas y vocabulario bilingüe.</p><span className="us-en">Fourteen real places and six everyday themes. Every stop opens six {level} questions, audio, quick answers and bilingual vocabulary.</span><button onClick={surprise}><Glyph name="shuffle"/> ELEGIR POR MÍ · PICK FOR ME</button></div></header>
      <div className="us-tools"><div><button className={filter==="todo"?"active":""} onClick={()=>setNextFilter("todo")}>TODO · ALL</button><button className={filter==="lugar"?"active":""} onClick={()=>setNextFilter("lugar")}>MAPA · PLACES</button><button className={filter==="tema"?"active":""} onClick={()=>setNextFilter("tema")}>TEMAS · TOPICS</button></div><label><span>⌕</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar lugar o tema · Search"/></label></div>

      <section className="us-explorer">
        <div className="us-map-card">
          <header><span><Glyph name="compass"/> ATLAS DE CONVERSACIÓN<span className="country-a0-en" lang="en"> / CONVERSATION ATLAS</span></span><b>EAST ↔ WEST</b></header>
          <div className="us-map-stage">
            <div className="us-ocean pacific">PACÍFICO</div><div className="us-ocean atlantic">ATLÁNTICO</div>
            <div className="us-contiguous" aria-hidden="true"><i/><i/><i/><i/><span>WEST</span><span>MIDWEST</span><span>SOUTH</span><span>EAST</span></div>
            <svg className="us-route-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M13 45 C22 51 24 39 35 42 S49 62 58 57 S66 34 76 40 S82 31 88 28"/></svg>
            {stops.filter(stop=>stop.kind==="lugar").map(stop=>{const enabled=visible.some(item=>item.id===stop.id);return <button key={stop.id} disabled={!enabled} className={`us-map-node ${pick.id===stop.id?"selected":""} ${visited.has(stop.id)?"visited":""} ${enabled?"":"dim"} node-${stop.id}`} style={{left:`${stop.x}%`,top:`${stop.y}%`,"--stop":stop.color} as CSSProperties} onClick={()=>setPick(stop)}><b>{stop.number}</b><span><strong>{stop.name}</strong><small>{stop.state}</small></span></button>})}
            <div className="us-map-note"><b>MAPA ESQUEMÁTICO<span className="country-a0-en" lang="en"> / SCHEMATIC MAP</span></b><span>Las posiciones son aproximadas y sirven para la actividad.</span><small className="us-en">Positions are approximate and designed for the activity.</small></div>
          </div>
        </div>

        <aside className="us-preview" style={{"--stop":pick.color} as CSSProperties}>
          <div className="us-preview-art"><img src="/usa-basic-hero.webp" alt="Ilustración artística de un viaje por Estados Unidos"/><Seal stop={pick} small/></div>
          <div className="us-preview-copy"><span>{pick.kind==="lugar"?"PARADA · STOP":"TEMA · TOPIC"} {pick.number}</span><small>{pick.state} · {pick.region}</small><h2>{pick.name}</h2><h3>{pick.kicker.es}<span className="country-a0-en" lang="en"> / {pick.kicker.en}</span></h3><p>{pick.fact.es}</p><p className="us-en">{pick.fact.en}</p><div><b>A1</b><b>6 preguntas<span className="country-a0-en" lang="en"> / 6 questions</span></b><b>Audio</b><b>Wordbank</b></div><button onClick={()=>enter(pick)}>ABRIR ESTA PARADA<span className="country-a0-en" lang="en"> / OPEN THIS STOP</span> <span>→</span><small className="us-en">OPEN THIS STOP<span className="country-a0-en" lang="es"> / ABRIR ESTA PARADA</span></small></button></div>
        </aside>
      </section>

      <section className="us-topics"><header><div><span>MÁS ALLÁ DEL MAPA · BEYOND THE MAP</span><h2>Seis temas para hablar de la vida real.<span className="country-a0-en" lang="en"> / Six topics for talking about real life.</span></h2></div><p>Viajar no es solamente mirar lugares. También es comer, escuchar, moverse, jugar, aprender idiomas y elegir cómo vivir.<span className="country-a0-en" lang="en"> / Travel is more than seeing places. It is also eating, listening, moving, playing, learning languages and choosing how to live.</span></p></header><div>{stops.filter(stop=>stop.kind==="tema"&&visible.some(item=>item.id===stop.id)).map(stop=><button key={stop.id} onClick={()=>setPick(stop)} className={`${pick.id===stop.id?"active":""} ${visited.has(stop.id)?"visited":""}`} style={{"--stop":stop.color} as CSSProperties}><span>{stop.number}</span><small>{stop.state}</small><b>{stop.name}</b><em>{stop.kicker.es}<span className="country-a0-en" lang="en"> / {stop.kicker.en}</span></em><i>EXPLORAR · EXPLORE →</i></button>)}</div></section>

      <section className="us-ticket-strip"><header><span>LAS 20 PARADAS · ALL 20 STOPS</span><b>{visited.size} visitadas · visited</b></header><div>{visible.map(stop=><button key={stop.id} onClick={()=>setPick(stop)} className={`${pick.id===stop.id?"active":""} ${visited.has(stop.id)?"visited":""}`} style={{"--stop":stop.color} as CSSProperties}><span>{stop.number}</span><b>{stop.name}</b><small>{stop.kind==="lugar"?"STOP":"TOPIC"}</small></button>)}</div></section>
    </section>}

    {screen==="stop"&&<section className="us-world" style={{"--stop":active.color} as CSSProperties}>
      <header className="us-world-hero">
        <div className="us-world-top"><button onClick={()=>show("atlas")}>← MAPA · MAP</button><span>PARADA<span className="country-a0-en" lang="en"> / STOP</span> {active.number} · {active.state}</span><div><button className={showEnglish?"active":""} disabled={level==="A0"} onClick={()=>setShowEnglish(value=>!value)}>EN {showEnglish?"ON":"OFF"}</button><button onClick={surprise}><Glyph name="shuffle"/> OTRA<span className="country-a0-en" lang="en"> / ANOTHER</span></button></div></div>
        <div className="us-world-copy"><small>{active.kind==="lugar"?"DESTINO REAL · REAL DESTINATION":"TEMA COTIDIANO · EVERYDAY TOPIC"}</small><h1>{active.name}</h1><h2 className="us-en">{active.nameEn} · {active.kicker.en}</h2><p><b>{active.fact.es}</b><span className="us-en">{active.fact.en}</span></p><div><span>{level}</span><span>6 preguntas<span className="country-a0-en" lang="en"> / 6 questions</span></span><span>Apoyo bilingüe<span className="country-a0-en" lang="en"> / Bilingual support</span></span></div></div>
        <div className="us-world-art" aria-hidden="true"><img src="/usa-basic-hero.webp" alt=""/><Seal stop={active}/></div>
      </header>

      <div className="us-classroom"><CountryTools level={level} context={context} index={question}/>
        <section className="us-mission"><span>TU MISIÓN · YOUR MISSION</span><div><b>{active.mission.es}</b><em className="us-en">{active.mission.en}</em></div><strong>Una frase → una razón → un detalle<span className="country-a0-en" lang="en"> / One sentence → one reason → one detail</span><small className="us-en">One sentence → one reason → one detail</small></strong></section>

        <section className="us-question">
          <div className="us-question-count"><span>PREGUNTA<span className="country-a0-en" lang="en"> / QUESTION</span></span><b>{String(question+1).padStart(2,"0")}</b><i>/ 06</i></div>
          <div className="us-question-copy"><small>{active.state} · {active.kicker.es}<span className="country-a0-en" lang="en"> / {active.kicker.en}</span></small><h2>{current.es}</h2><p className="us-en">{current.en}</p><button onClick={()=>speak(current.es)}><Glyph name="sound"/> ESCUCHAR · LISTEN</button></div>
          <div className="us-question-seal" aria-hidden="true"><Seal stop={active}/></div>
        </section>

        <section className="us-fast-answer"><header><span>1 · RESPUESTA RÁPIDA · QUICK ANSWER</span><p>Toca una opción para empezar. Después puedes cambiarla.<span className="country-a0-en" lang="en"> / Tap an option to start. You can change it later.</span></p></header><div>{(level==="A1"?active.quick:countryActivity(level,context,question).choices).map(pair=><button key={pair.es} onClick={()=>add(pair)}><b>{pair.es}</b><small className="us-en">{pair.en}</small><i>+</i></button>)}</div></section>

        <section className="us-builder-tools">
          <button className="us-starter" onClick={()=>add(starters[question])}><span>2 · COMIENZO · STARTER</span><b>{starters[question].es}</b><small className="us-en">{starters[question].en}</small><i><Glyph name="plus"/> AGREGAR · ADD</i></button>
          <article className="us-connectors"><span>3 · CONECTORES · CONNECTORS</span><div>{connectors.map(pair=><button key={pair.es} onClick={()=>add(pair)}><b>{pair.es}</b><small className="us-en">{pair.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="us-answer-lab" aria-live="polite">
          <header><div><span>TU RESPUESTA · YOUR ANSWER</span><h2>Construye una frase y dila en voz alta.<span className="country-a0-en" lang="en"> / Build a sentence and say it aloud.</span></h2><p className="us-en">Build a sentence and say it out loud.</p></div><div><button disabled={!answerParts.length} onClick={()=>speak(answerEs)}><Glyph name="sound"/> ESCUCHAR<span className="country-a0-en" lang="en"> / LISTEN</span></button><button disabled={!answerParts.length} onClick={()=>setAnswerParts([])}><Glyph name="trash"/> BORRAR<span className="country-a0-en" lang="en"> / CLEAR</span></button></div></header>
          <div className={`us-answer-canvas ${answerParts.length?"has-answer":""}`}>{answerParts.length?answerParts.map((pair,index)=><button key={`${pair.es}-${index}`} onClick={()=>setAnswerParts(parts=>parts.filter((_,i)=>i!==index))}><b>{pair.es}</b><small className="us-en">{pair.en}</small></button>):<p><b>{level==="A0"?"Elige una frase completa y repítela.":"Toca una respuesta rápida, un comienzo o una palabra."}</b><span className="us-en">{level==="A0"?"Choose one complete sentence and repeat it.":"Tap a quick answer, starter or word."}</span></p>}</div>
          {answerParts.length>0&&<div className="us-readout"><b>{answerEs}</b><span className="us-en">{answerEn}</span></div>}
        </section>

        <section className="us-wordbank"><header><span>WORDBANK DE LA PARADA<span className="country-a0-en" lang="en"> / STOP WORD BANK</span></span><h2>Ocho palabras para seguir hablando.<span className="country-a0-en" lang="en"> / Eight words to keep speaking.</span></h2><p className="us-en">Eight words to keep talking.</p></header><div>{active.words.map((pair,index)=><button key={pair.es} onClick={()=>add(pair)}><span>{String(index+1).padStart(2,"0")}</span><b>{pair.es}</b><small className="us-en">{pair.en}</small><i>+</i></button>)}</div></section>

        <section className="us-speaking-moves"><header><span>OTRA VUELTA · ONE MORE ROUND</span><h2>Elige un desafío para hablar más.<span className="country-a0-en" lang="en"> / Choose a challenge to keep speaking.</span></h2></header><div>{speakingMoves.map((move,index)=><button key={move.es}><span>{index+1}</span><b>{move.es}</b><small className="us-en">{move.en}</small></button>)}</div></section>

        <nav className="us-question-nav"><button disabled={question===0} onClick={()=>changeQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{active.questions.map((_,index)=><button key={index} className={question===index?"active":""} onClick={()=>changeQuestion(index)} aria-label={`Pregunta ${index+1}`}>{index+1}</button>)}</div><button onClick={()=>question===5?surprise():changeQuestion(question+1)}>{question===5?"OTRA PARADA · NEXT STOP →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  <CountryClosing level={level} context={context}/></main>;
}
