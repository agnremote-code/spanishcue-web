"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import "./style.css";
import { connectors, depthMoves, starters, topics, type IsraelTopic, type Pair } from "./data";

type Screen="cover"|"map"|"topic";
type Filter="todo"|"lugar"|"tema";
type Stance="acuerdo"|"depende"|"desacuerdo"|null;
type GlyphName="map"|"shuffle"|"sound"|"clear"|"plus"|"home"|"compass"|"layers";

const stancePairs:Record<Exclude<Stance,null>,Pair>={
  acuerdo:{es:"Estoy de acuerdo.",en:"I agree."},
  depende:{es:"Depende.",en:"It depends."},
  desacuerdo:{es:"No estoy de acuerdo.",en:"I disagree."},
};

function Glyph({name}:{name:GlyphName}){
  const content:Record<GlyphName,ReactNode>={
    map:<><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20Z"/><path d="M9 4v13.5M15 6.5V20"/></>,
    shuffle:<><path d="M16 3h5v5"/><path d="m4 20 5.5-5.5M21 3l-7.5 7.5"/><path d="M4 4h2.5c4.5 0 7 16 11 16H21"/><path d="m17 16 4 4-4 4"/></>,
    sound:<><path d="M5 10v4h4l5 4V6l-5 4Z"/><path d="M17 9.5c1.2 1.1 1.2 3.9 0 5M19.5 7c3 3 3 7 0 10"/></>,
    clear:<><path d="M5 7h14M9 7V4h6v3M8 10v8M12 10v8M16 10v8M7 7l1 14h8l1-14"/></>,
    plus:<><path d="M12 5v14M5 12h14"/></>,
    home:<><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/></>,
    compass:<><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9Z"/></>,
    layers:<><path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
  };
  return <svg className="il-glyph" viewBox="0 0 24 24" aria-hidden="true">{content[name]}</svg>;
}

function Dust(){return <div className="il-dust" aria-hidden="true"><i/><i/><i/><i/><i/><span/><span/><span/></div>}

function Stamp({topic,small=false}:{topic:IsraelTopic;small?:boolean}){
  return <div className={`il-stamp ${small?"small":""}`} style={{"--topic":topic.color} as CSSProperties} aria-hidden="true"><i/><i/><b>{topic.number}</b><span>{topic.kind==="lugar"?"PLACE":"LENS"}</span></div>
}

export default function IsraelEnCapas(){
  const [screen,setScreen]=useState<Screen>("cover");
  const [active,setActive]=useState<IsraelTopic>(topics[0]);
  const [mapPick,setMapPick]=useState<IsraelTopic>(topics[0]);
  const [question,setQuestion]=useState(0);
  const [filter,setFilter]=useState<Filter>("todo");
  const [query,setQuery]=useState("");
  const [visited,setVisited]=useState<Set<string>>(new Set());
  const [englishVisible,setEnglishVisible]=useState(true);
  const [stance,setStance]=useState<Stance>(null);
  const [answerParts,setAnswerParts]=useState<Pair[]>([]);

  const visible=useMemo(()=>topics.filter(topic=>(filter==="todo"||topic.kind===filter)&&`${topic.name} ${topic.nameEn} ${topic.kicker.es} ${topic.region}`.toLowerCase().includes(query.toLowerCase())),[filter,query]);
  const current=active.questions[question];
  const progress=Math.round(visited.size/topics.length*100);
  const answerPairs=[...(stance?[stancePairs[stance]]:[]),...answerParts];
  const answerEs=answerPairs.map(part=>part.es.replace(/[.…]+/g,"")).join(" ");
  const answerEn=answerPairs.map(part=>part.en.replace(/[.…]+/g,"")).join(" ");

  const show=(next:Screen)=>{setScreen(next);window.scrollTo({top:0,behavior:"smooth"})};
  const enter=(topic:IsraelTopic,start=0)=>{setActive(topic);setMapPick(topic);setQuestion(start);setStance(null);setAnswerParts([]);setVisited(old=>new Set([...old,topic.id]));show("topic")};
  const surprise=()=>{const pool=topics.filter(topic=>topic.id!==active.id);const next=pool[Math.floor(Math.random()*pool.length)]||topics[0];enter(next,Math.floor(Math.random()*7))};
  const changeQuestion=(next:number)=>{setQuestion(Math.max(0,Math.min(6,next)));setStance(null);setAnswerParts([]);document.querySelector(".il-question-stage")?.scrollIntoView({behavior:"smooth",block:"center"})};
  const addPart=(part:Pair)=>setAnswerParts(parts=>[...parts,part]);
  const speak=(text:string)=>{if(typeof window==="undefined"||!("speechSynthesis" in window))return;window.speechSynthesis.cancel();const voice=new SpeechSynthesisUtterance(text);voice.lang="es-AR";voice.rate=.84;window.speechSynthesis.speak(voice)};
  const chooseFilter=(next:Filter)=>{setFilter(next);const first=topics.find(topic=>next==="todo"||topic.kind===next);if(first)setMapPick(first)};

  return <main className={`il-app ${englishVisible?"":"il-spanish-only"}`}>
    <nav className="il-nav">
      <Link href="/" className="il-brand"><span><img src="/brand/mascot/portrait.webp" alt=""/></span><div><b>SPANISHCUE</b><small>CONVERSATION ADVENTURES</small></div></Link>
      <div className="il-nav-progress"><span>CAPAS DESCUBIERTAS · LAYERS</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/14</strong></div>
      <div className="il-nav-actions"><button onClick={surprise}><Glyph name="shuffle"/> SORPRESA</button><button onClick={()=>show(screen==="cover"?"map":"cover")}><Glyph name={screen==="cover"?"map":"home"}/>{screen==="cover"?" MAPA":" INICIO"}</button></div>
    </nav>

    {screen==="cover"&&<section className="il-cover">
      <Dust/>
      <div className="il-cover-copy">
        <div className="il-level"><span>B1</span> 100% CONVERSACIÓN · 100% CONVERSATION</div>
        <p className="il-overline">14 DESTINOS Y LENTES · 98 PREGUNTAS · 14 DESTINATIONS & LENSES</p>
        <h1>ISRAEL<br/><em>EN CAPAS</em></h1>
        <p className="il-lead">Un mapa para explorar ciudades, desiertos, mares, idiomas y formas de vivir.<b> La alumna no repite datos: compara, explica, imagina soluciones y defiende decisiones.</b><span className="il-en">A map for exploring cities, deserts, seas, languages and ways of living. The student compares, explains, imagines solutions and defends decisions.</span></p>
        <div className="il-cover-actions"><button onClick={()=>show("map")}>ABRIR EL MAPA <span>→</span><small className="il-en">OPEN THE MAP</small></button><button className="ghost" onClick={surprise}><Glyph name="shuffle"/> EMPEZAR AL AZAR<small className="il-en">START AT RANDOM</small></button></div>
        <div className="il-stats"><article><b>14</b><span>capas temáticas<br/><small>thematic layers</small></span></article><article><b>98</b><span>preguntas B1<br/><small>B1 questions</small></span></article><article><b>7</b><span>movimientos por tema<br/><small>moves per topic</small></span></article></div>
      </div>
      <div className="il-cover-image" aria-hidden="true"><img src="/israel-b1-hero.webp" alt=""/><div className="il-glass-pin pin-north"><b>HAIFA</b><span>NORTE</span></div><div className="il-glass-pin pin-centre"><b>JERUSALÉN</b><span>CENTRO</span></div><div className="il-glass-pin pin-south"><b>NÉGUEV</b><span>SUR</span></div></div>
      <div className="il-cover-line" aria-hidden="true"><i/><i/><i/></div>
    </section>}

    {screen==="map"&&<section className="il-map-page">
      <header className="il-map-head"><div><span>EL TERRITORIO Y SUS CAPAS · THE LAND AND ITS LAYERS</span><h1>Recorré el mapa.<br/><em>Después mirá más profundo.</em></h1></div><div><p>Nueve paradas geográficas y cinco lentes culturales. Cada una abre siete preguntas B1 con vocabulario, conectores y desafíos.</p><span className="il-en">Nine geographical stops and five cultural lenses. Each opens seven B1 questions with vocabulary, connectors and challenges.</span><button onClick={surprise}><Glyph name="shuffle"/> QUE EL MAPA DECIDA</button></div></header>

      <div className="il-map-tools"><div><button className={filter==="todo"?"active":""} onClick={()=>chooseFilter("todo")}>TODO · ALL</button><button className={filter==="lugar"?"active":""} onClick={()=>chooseFilter("lugar")}>MAPA · PLACES</button><button className={filter==="tema"?"active":""} onClick={()=>chooseFilter("tema")}>LENTES · LENSES</button></div><label><span>⌕</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar tema · Search topic"/></label></div>

      <section className="il-explorer">
        <div className="il-map-frame">
          <header><span><Glyph name="compass"/> RUTA NORTE → SUR · NORTH → SOUTH</span><b>MAPA DE CONVERSACIÓN</b></header>
          <div className="il-map-stage">
            <div className="il-sea" aria-hidden="true"><span>MEDITERRÁNEO</span><i/><i/><i/></div>
            <div className="il-land-route" aria-hidden="true"><i/><i/><i/><span>NORTE</span><span>CENTRO</span><span>SUR</span></div>
            <svg className="il-route-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M43 5 C38 18 48 28 43 40 C39 51 61 56 55 69 C50 79 57 88 58 97"/></svg>
            {topics.filter(topic=>topic.kind==="lugar").map(topic=>{
              const isVisible=visible.some(item=>item.id===topic.id);
              return <button key={topic.id} disabled={!isVisible} className={`il-map-node ${mapPick.id===topic.id?"selected":""} ${visited.has(topic.id)?"visited":""} ${isVisible?"":"dim"}`} style={{left:`${topic.x}%`,top:`${topic.y}%`,"--topic":topic.color} as CSSProperties} onClick={()=>setMapPick(topic)}><b>{topic.number}</b><span><strong>{topic.name}</strong><small>{topic.kicker.es}</small></span></button>;
            })}
            <div className="il-map-caption"><b>ESQUEMÁTICO</b><span>No representa fronteras ni reivindicaciones territoriales.</span><small className="il-en">Not a representation of borders or territorial claims.</small></div>
          </div>
        </div>

        <aside className="il-topic-preview" style={{"--topic":mapPick.color} as CSSProperties}>
          <div className="il-preview-image"><img src="/israel-b1-hero.webp" alt="Paisaje ilustrado inspirado en Israel"/><Stamp topic={mapPick} small/></div>
          <div className="il-preview-copy"><span>{mapPick.kind==="lugar"?"DESTINO · DESTINATION":"LENTE · LENS"} {mapPick.number}</span><small>{mapPick.hebrew} · {mapPick.region}</small><h2>{mapPick.name}</h2><h3>{mapPick.kicker.es}</h3><p>{mapPick.fact.es}</p><p className="il-en">{mapPick.fact.en}</p><div><b>7 preguntas B1</b><b>Audio</b><b>WORDBANK</b></div><button onClick={()=>enter(mapPick)}>ABRIR ESTA CAPA <span>→</span><small className="il-en">OPEN THIS LAYER</small></button></div>
        </aside>
      </section>

      <section className="il-lenses"><header><div><span>NO TODO ENTRA EN UN MAPA · NOT EVERYTHING FITS ON A MAP</span><h2>Cinco lentes para entender la vida cotidiana.</h2></div><p>La geografía muestra dónde. Estas capas preguntan cómo se vive, se habla, se come, se descansa y se piensa el futuro.</p></header><div>{topics.filter(topic=>topic.kind==="tema"&&visible.some(item=>item.id===topic.id)).map(topic=><button key={topic.id} onClick={()=>setMapPick(topic)} className={`${mapPick.id===topic.id?"active":""} ${visited.has(topic.id)?"visited":""}`} style={{"--topic":topic.color} as CSSProperties}><span>{topic.number}</span><small>{topic.hebrew}</small><b>{topic.name}</b><em>{topic.kicker.es}</em><i>ABRIR · OPEN →</i></button>)}</div></section>

      <section className="il-route-strip"><header><span>LAS 14 CAPAS · ALL 14 LAYERS</span><b>{visited.size} exploradas · explored</b></header><div>{visible.map(topic=><button key={topic.id} onClick={()=>setMapPick(topic)} className={`${mapPick.id===topic.id?"active":""} ${visited.has(topic.id)?"visited":""}`} style={{"--topic":topic.color} as CSSProperties}><span>{topic.number}</span><b>{topic.name}</b><small>{topic.kind==="lugar"?"MAP":"LENS"}</small></button>)}</div></section>
    </section>}

    {screen==="topic"&&<section className="il-world" style={{"--topic":active.color} as CSSProperties}>
      <header className="il-world-hero">
        <Dust/>
        <div className="il-world-top"><button onClick={()=>show("map")}>← MAPA · MAP</button><span>CAPA {active.number} · {active.region}</span><div><button className={englishVisible?"active":""} onClick={()=>setEnglishVisible(value=>!value)}>EN {englishVisible?"ON":"OFF"}</button><button onClick={surprise}><Glyph name="shuffle"/> OTRA CAPA</button></div></div>
        <div className="il-world-copy"><small>{active.kind==="lugar"?"DESTINO REAL · REAL DESTINATION":"LENTE CULTURAL · CULTURAL LENS"} · {active.hebrew}</small><h1>{active.name}</h1><h2 className="il-en">{active.kicker.en}</h2><p><b>{active.fact.es}</b><span className="il-en">{active.fact.en}</span></p><div><span>7 preguntas B1</span><span>Contenido real</span><span>Respuesta interactiva</span></div></div>
        <div className="il-world-art" aria-hidden="true"><img src="/israel-b1-hero.webp" alt=""/><Stamp topic={active}/></div>
      </header>

      <div className="il-classroom">
        <section className="il-mission"><span>MISIÓN · MISSION</span><div><b>No respondas solamente “sí” o “no”. Construí una idea con razón, ejemplo y matiz.</b><em className="il-en">Do not answer only “yes” or “no”. Build an idea with a reason, example and nuance.</em></div><strong>{active.questionTheme.es}<small className="il-en">{active.questionTheme.en}</small></strong></section>

        <section className="il-question-stage">
          <div className="il-question-meta"><span>PREGUNTA · QUESTION</span><b>{String(question+1).padStart(2,"0")} <i>/ 07</i></b></div>
          <div className="il-question-copy"><small>{active.name} · {active.kicker.es}</small><h2>{current.es}</h2><p className="il-en">{current.en}</p><button onClick={()=>speak(current.es)}><Glyph name="sound"/> ESCUCHAR LA PREGUNTA</button></div>
          <div className="il-question-mark" aria-hidden="true"><Stamp topic={active}/><i/><i/></div>
        </section>

        <section className="il-response-tools">
          <article className="il-stance"><span>1 · ELEGÍ TU POSTURA · CHOOSE YOUR STANCE</span><div>{(["acuerdo","depende","desacuerdo"] as const).map(value=><button key={value} className={stance===value?"active":""} onClick={()=>setStance(value)}><b>{stancePairs[value].es}</b><small className="il-en">{stancePairs[value].en}</small></button>)}</div></article>
          <button className="il-starter" onClick={()=>addPart(starters[question])}><span>2 · ROBÁ ESTE COMIENZO · BORROW THIS START</span><b>{starters[question].es}</b><em className="il-en">{starters[question].en}</em><i><Glyph name="plus"/> AGREGAR · ADD</i></button>
          <article className="il-connectors"><span>3 · CONECTÁ IDEAS · CONNECT IDEAS</span><div>{connectors.map(connector=><button key={connector.es} onClick={()=>addPart(connector)}><b>{connector.es}</b><small className="il-en">{connector.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="il-answer-lab" aria-live="polite">
          <header><div><span>LABORATORIO B1 · B1 ANSWER LAB</span><h2>Armá una respuesta que tenga capas.</h2><p className="il-en">Build an answer with layers.</p></div><div><button disabled={!answerPairs.length} onClick={()=>speak(answerEs)}><Glyph name="sound"/> ESCUCHAR</button><button disabled={!answerPairs.length} onClick={()=>{setStance(null);setAnswerParts([])}}><Glyph name="clear"/> BORRAR</button></div></header>
          <div className={`il-answer-canvas ${answerPairs.length?"has-answer":""}`}>{answerPairs.length?answerPairs.map((part,index)=><button key={`${part.es}-${index}`} onClick={()=>{if(stance&&index===0){setStance(null)}else{const partIndex=index-(stance?1:0);setAnswerParts(parts=>parts.filter((_,i)=>i!==partIndex))}}}><b>{part.es}</b><small className="il-en">{part.en}</small></button>):<p><b>Elegí una postura y tocá recursos para construir tu idea.</b><span className="il-en">Choose a stance and tap resources to build your idea.</span></p>}</div>
          {answerPairs.length>0&&<div className="il-answer-readout"><b>{answerEs}</b><span className="il-en">{answerEn}</span></div>}
        </section>

        <section className="il-wordbank"><header><span>WORDBANK DE LA CAPA · LAYER WORDBANK</span><h2>Vocabulario para pensar, no solamente nombrar.</h2><p className="il-en">Vocabulary for thinking, not only naming.</p></header><div>{active.words.map((word,index)=><button key={word.es} onClick={()=>addPart(word)}><span>{String(index+1).padStart(2,"0")}</span><b>{word.es}</b><small className="il-en">{word.en}</small><i>+</i></button>)}</div></section>

        <section className="il-depth"><header><span>SUBÍ A B1 · GO DEEPER</span><h2>Después de responder, elegí una misión.</h2></header><div>{depthMoves.map((move,index)=><button key={move.es}><span>{String(index+1).padStart(2,"0")}</span><b>{move.es}</b><small className="il-en">{move.en}</small></button>)}</div></section>

        <nav className="il-question-nav"><button disabled={question===0} onClick={()=>changeQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{active.questions.map((_,index)=><button key={index} aria-label={`Pregunta ${index+1}`} className={question===index?"active":""} onClick={()=>changeQuestion(index)}>{index+1}</button>)}</div><button onClick={()=>question===6?surprise():changeQuestion(question+1)}>{question===6?"OTRA CAPA · NEXT LAYER →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  </main>
}
