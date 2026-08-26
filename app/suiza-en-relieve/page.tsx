"use client";

import Link from "next/link";
import {useMemo,useState,type CSSProperties,type KeyboardEvent} from "react";
import "./style.css";
import {cantons,connectors,depthMoves,regionNames,starters,type Pair,type SwissCanton} from "./data";
import {cantonShapes} from "./map-data";

type Screen="cover"|"map"|"canton";
type Region="todo"|SwissCanton["region"];
type Stance="elegiria"|"depende"|"otra"|null;

const stancePairs:Record<Exclude<Stance,null>,Pair>={
  elegiria:{es:"Yo elegiría…",en:"I would choose…"},
  depende:{es:"Para mí, depende de…",en:"For me, it depends on…"},
  otra:{es:"Veo otra posibilidad…",en:"I see another possibility…"}
};

const cantonByCode=new Map(cantons.map(canton=>[canton.code,canton]));

function SwissCross(){return <span className="ch-cross" aria-hidden="true"><i/><i/></span>}

function Atmosphere(){return <div className="ch-atmosphere" aria-hidden="true"><i/><i/><i/><span/><span/><span/><b/><b/></div>}

function SwissMap({selected,onSelect,visibleCodes,compact=false}:{selected:SwissCanton;onSelect:(canton:SwissCanton)=>void;visibleCodes:Set<string>;compact?:boolean}){
  const choose=(code:string)=>{const canton=cantonByCode.get(code);if(canton&&visibleCodes.has(code))onSelect(canton)};
  const keys=(event:KeyboardEvent<SVGGElement>,code:string)=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();choose(code)}};
  return <div className={`ch-map-orbit ${compact?"compact":""}`}>
    <div className="ch-map-shadow"/>
    <svg className="ch-swiss-map" viewBox="0 0 900 555" role="img" aria-label="Mapa real interactivo de los 26 cantones de Suiza">
      <defs>
        <filter id={`glow-${compact?"mini":"main"}`} x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id={`side-${compact?"mini":"main"}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7f1924"/><stop offset="1" stopColor="#2b0910"/></linearGradient>
      </defs>
      {cantonShapes.map(shape=>{
        const canton=cantonByCode.get(shape.code)!;
        const isSelected=selected.code===shape.code;
        const isVisible=visibleCodes.has(shape.code);
        return <g key={shape.code} className={`ch-canton ${isSelected?"selected":""} ${isVisible?"":"filtered"}`} role="button" tabIndex={isVisible?0:-1} aria-label={`${canton.name}, cantón ${canton.number}`} onClick={()=>choose(shape.code)} onKeyDown={event=>keys(event,shape.code)} style={{"--canton":canton.color} as CSSProperties}>
          {[13,10,7,4].map(offset=><path key={offset} d={shape.d} transform={`translate(0 ${offset})`} className="ch-canton-side" fill={`url(#side-${compact?"mini":"main"})`} fillRule="evenodd"/>) }
          <path d={shape.d} className="ch-canton-top" fillRule="evenodd"/>
          {!compact&&<text x={shape.cx} y={shape.cy} className="ch-canton-code">{shape.code}</text>}
        </g>;
      })}
      <g className="ch-selected-label" transform={`translate(${cantonShapes.find(shape=>shape.code===selected.code)?.cx||450} ${(cantonShapes.find(shape=>shape.code===selected.code)?.cy||270)-22})`}>
        <circle r="18"/><text y="5">{selected.code}</text>
      </g>
    </svg>
    <span className="ch-map-axis axis-one"/><span className="ch-map-axis axis-two"/><span className="ch-map-axis axis-three"/>
  </div>;
}

export default function SuizaEnRelieve(){
  const [screen,setScreen]=useState<Screen>("cover");
  const [active,setActive]=useState<SwissCanton>(cantons[0]);
  const [mapPick,setMapPick]=useState<SwissCanton>(cantons[0]);
  const [question,setQuestion]=useState(0);
  const [region,setRegion]=useState<Region>("todo");
  const [query,setQuery]=useState("");
  const [visited,setVisited]=useState<Set<string>>(new Set());
  const [englishVisible,setEnglishVisible]=useState(true);
  const [stance,setStance]=useState<Stance>(null);
  const [answerParts,setAnswerParts]=useState<Pair[]>([]);

  const visible=useMemo(()=>cantons.filter(canton=>(region==="todo"||canton.region===region)&&`${canton.name} ${canton.localName} ${canton.capital} ${canton.languages} ${canton.hook.es}`.toLowerCase().includes(query.toLowerCase())),[region,query]);
  const visibleCodes=useMemo(()=>new Set(visible.map(canton=>canton.code)),[visible]);
  const current=active.questions[question];
  const progress=Math.round(visited.size/cantons.length*100);
  const answerPairs=[...(stance?[stancePairs[stance]]:[]),...answerParts];
  const answerEs=answerPairs.map(part=>part.es.replace(/[…]+/g,"")).join(" ");
  const answerEn=answerPairs.map(part=>part.en.replace(/[…]+/g,"")).join(" ");

  const show=(next:Screen)=>{setScreen(next);window.scrollTo({top:0,behavior:"smooth"})};
  const enter=(canton:SwissCanton,start=0)=>{setActive(canton);setMapPick(canton);setQuestion(start);setStance(null);setAnswerParts([]);setVisited(old=>new Set([...old,canton.code]));show("canton")};
  const surprise=()=>{const pool=cantons.filter(canton=>canton.code!==active.code);const next=pool[Math.floor(Math.random()*pool.length)]||cantons[0];enter(next,Math.floor(Math.random()*6))};
  const changeQuestion=(next:number)=>{setQuestion(Math.max(0,Math.min(5,next)));setStance(null);setAnswerParts([]);document.querySelector(".ch-question-card")?.scrollIntoView({behavior:"smooth",block:"center"})};
  const addPart=(part:Pair)=>setAnswerParts(parts=>[...parts,part]);
  const chooseRegion=(next:Region)=>{setRegion(next);const first=cantons.find(canton=>next==="todo"||canton.region===next);if(first)setMapPick(first)};

  return <main className={`ch-app ${englishVisible?"":"ch-spanish-only"}`}>
    <nav className="ch-nav">
      <Link href="/" className="ch-brand"><SwissCross/><span><b>CHESPANISH</b><small>CONVERSATION EXPEDITIONS</small></span></Link>
      <div className="ch-progress"><span>CANTONES EXPLORADOS · CANTONS</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/26</strong></div>
      <div className="ch-nav-actions"><button onClick={()=>setEnglishVisible(value=>!value)}>EN <b>{englishVisible?"ON":"OFF"}</b></button><button onClick={surprise}>✦ SORPRESA</button><button onClick={()=>show(screen==="cover"?"map":"cover")}>{screen==="cover"?"MAPA":"INICIO"}</button></div>
    </nav>

    {screen==="cover"&&<section className="ch-cover">
      <Atmosphere/>
      <img className="ch-cover-photo" src="/suiza-en-relieve-hero.png" alt="Paisaje alpino ilustrado con lago, pueblo, viñedos y un tren rojo"/>
      <div className="ch-cover-shade"/>
      <div className="ch-cover-copy">
        <div className="ch-level"><span>B1</span> 100% CONVERSACIÓN · 100% CONVERSATION</div>
        <p className="ch-eyebrow">26 CANTONES REALES · 156 PREGUNTAS · UN PAÍS EN RELIEVE</p>
        <h1>SUIZA<br/><em>EN RELIEVE</em></h1>
        <p className="ch-cover-lead">No venimos a repetir “chocolate, relojes y montañas”. <b>Vamos a entrar en decisiones reales:</b> idiomas, vivienda, energía, turismo, trabajo, clima y formas de vivir juntos.<span className="ch-en">We are not here to repeat “chocolate, watches and mountains”. We will explore real decisions about language, housing, energy, tourism, work, climate and living together.</span></p>
        <div className="ch-cover-actions"><button onClick={()=>show("map")}>ABRIR EL MAPA 3D <span>→</span><small className="ch-en">OPEN THE 3D MAP</small></button><button className="ghost" onClick={surprise}>✦ SORPRENDEME<small className="ch-en">SURPRISE ME</small></button></div>
        <div className="ch-cover-stats"><article><b>26</b><span>cantones reales<small className="ch-en">real cantons</small></span></article><article><b>156</b><span>preguntas B1<small className="ch-en">B1 questions</small></span></article><article><b>6</b><span>movimientos por lugar<small className="ch-en">moves per place</small></span></article></div>
      </div>
      <div className="ch-hero-map"><div className="ch-map-tag"><span>MAPA REAL</span><b>26 CANTONES</b></div><SwissMap selected={mapPick} onSelect={setMapPick} visibleCodes={new Set(cantons.map(canton=>canton.code))} compact/><div className="ch-floating-card"><small>{mapPick.code} · {mapPick.languages.toUpperCase()}</small><b>{mapPick.name}</b><span>{mapPick.hook.es}</span></div></div>
      <div className="ch-train-line" aria-hidden="true"><i/><b>◆</b></div>
    </section>}

    {screen==="map"&&<section className="ch-map-page">
      <Atmosphere/>
      <header className="ch-map-head"><div><span>ATLAS DE CONVERSACIÓN · CONVERSATION ATLAS</span><h1>Elegí un cantón.<br/><em>Descubrí una pregunta.</em></h1></div><div><p>El mapa usa las fronteras reales de los 26 cantones. Cada territorio abre seis preguntas B1 creadas a partir de algo propio de ese lugar.</p><p className="ch-en">The map uses the real boundaries of all 26 cantons. Each territory opens six B1 questions inspired by something specific to that place.</p><button onClick={surprise}>✦ QUE EL MAPA DECIDA</button></div></header>

      <div className="ch-map-tools"><div><button className={region==="todo"?"active":""} onClick={()=>chooseRegion("todo")}>TODO · ALL</button>{(["norte","centro","oeste","sur","este"] as const).map(key=><button key={key} className={region===key?"active":""} onClick={()=>chooseRegion(key)}>{regionNames[key].es}</button>)}</div><label><span>⌕</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar cantón, idioma o capital…"/></label></div>

      <section className="ch-map-explorer">
        <div className="ch-map-panel"><header><span>ARRASTRÁ LA MIRADA · ELEGÍ EL TERRITORIO</span><b>RELIEVE INTERACTIVO</b></header><SwissMap selected={mapPick} onSelect={setMapPick} visibleCodes={visibleCodes}/><footer><span><i/> SELECCIONADO</span><span><i/> VISITADO</span><a href="https://www.swisstopo.admin.ch/en/landscape-model-swissboundaries3d" target="_blank" rel="noreferrer">Límites: swisstopo ↗</a></footer></div>
        <aside className="ch-preview" style={{"--canton":mapPick.color} as CSSProperties}>
          <div className="ch-preview-top"><span>{mapPick.number}</span><SwissCross/><small>{mapPick.code}</small></div>
          <p>{regionNames[mapPick.region].es} · {mapPick.languages}</p><h2>{mapPick.name}</h2><em>{mapPick.localName}</em><h3>{mapPick.hook.es}</h3><p className="ch-en">{mapPick.hook.en}</p><div className="ch-fact"><span>ALGO REAL · A REAL DETAIL</span><b>{mapPick.fact.es}</b><small className="ch-en">{mapPick.fact.en}</small></div><div className="ch-preview-chips"><span>Capital: {mapPick.capital}</span><span>6 preguntas</span><span>Wordbank</span></div><button onClick={()=>enter(mapPick)}>ENTRAR EN {mapPick.name.toUpperCase()} <span>→</span><small className="ch-en">OPEN THIS CANTON</small></button>
        </aside>
      </section>

      <section className="ch-canton-index"><header><div><span>LOS 26 CANTONES · ALL 26 CANTONS</span><h2>Cada lugar cambia la conversación.</h2></div><p>{visible.length} visibles · {visited.size} explorados</p></header><div>{visible.map(canton=><button key={canton.code} onClick={()=>setMapPick(canton)} className={`${mapPick.code===canton.code?"active":""} ${visited.has(canton.code)?"visited":""}`} style={{"--canton":canton.color} as CSSProperties}><span>{canton.number}</span><i>{canton.code}</i><b>{canton.name}</b><small>{canton.hook.es}</small><em>VER · VIEW →</em></button>)}</div></section>
    </section>}

    {screen==="canton"&&<section className="ch-canton-page" style={{"--canton":active.color} as CSSProperties}>
      <header className="ch-canton-hero">
        <Atmosphere/>
        <div className="ch-canton-topbar"><button onClick={()=>show("map")}>← MAPA · MAP</button><span>CANTÓN {active.number} · {regionNames[active.region].es}</span><button onClick={surprise}>✦ OTRO CANTÓN</button></div>
        <div className="ch-canton-title"><small>{active.code} · {active.localName} · {active.languages}</small><h1>{active.name}</h1><h2>{active.hook.es}</h2><p className="ch-en">{active.hook.en}</p><div><span>6 preguntas B1</span><span>Contenido real</span><span>Recursos bilingües</span></div></div>
        <div className="ch-canton-map"><SwissMap selected={active} onSelect={canton=>enter(canton)} visibleCodes={new Set(cantons.map(canton=>canton.code))} compact/><b>{active.code}</b></div>
      </header>

      <div className="ch-classroom">
        <section className="ch-canton-fact"><span>ANTES DE HABLAR · BEFORE YOU SPEAK</span><div><b>{active.fact.es}</b><small className="ch-en">{active.fact.en}</small></div><strong>{active.mission.es}<small className="ch-en">{active.mission.en}</small></strong></section>

        <section className="ch-question-card">
          <div className="ch-question-number"><span>PREGUNTA · QUESTION</span><b>{String(question+1).padStart(2,"0")} <i>/ 06</i></b></div>
          <div className="ch-question-copy"><small>{active.name} · {active.hook.es}</small><h2>{current.es}</h2><p className="ch-en">{current.en}</p><div><span>RESPONDÉ</span><i>→</i><span>DA UNA RAZÓN</span><i>→</i><span>AGREGÁ UN EJEMPLO</span></div></div>
          <SwissCross/>
        </section>

        <section className="ch-response-grid">
          <article className="ch-stance"><span>1 · ELEGÍ UNA ENTRADA · CHOOSE AN ENTRY</span><div>{(["elegiria","depende","otra"] as const).map(value=><button key={value} className={stance===value?"active":""} onClick={()=>setStance(value)}><b>{stancePairs[value].es}</b><small className="ch-en">{stancePairs[value].en}</small></button>)}</div></article>
          <article className="ch-starters"><span>2 · EMPEZÁ LA IDEA · START THE IDEA</span><div>{starters.slice(0,3).map(item=><button key={item.es} onClick={()=>addPart(item)}><b>{item.es}</b><small className="ch-en">{item.en}</small><i>+</i></button>)}</div></article>
          <article className="ch-connectors"><span>3 · CONECTÁ · CONNECT</span><div>{connectors.map(item=><button key={item.es} onClick={()=>addPart(item)}><b>{item.es}</b><small className="ch-en">{item.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="ch-answer-lab" aria-live="polite"><header><div><span>TU BORRADOR B1 · YOUR B1 DRAFT</span><h2>Construí una respuesta y después decila con tus palabras.</h2></div><button disabled={!answerPairs.length} onClick={()=>{setStance(null);setAnswerParts([])}}>BORRAR · CLEAR</button></header><div className={`ch-answer-canvas ${answerPairs.length?"has-answer":""}`}>{answerPairs.length?answerPairs.map((part,index)=><button key={`${part.es}-${index}`} onClick={()=>{if(stance&&index===0)setStance(null);else{const partIndex=index-(stance?1:0);setAnswerParts(parts=>parts.filter((_,i)=>i!==partIndex))}}}><b>{part.es}</b><small className="ch-en">{part.en}</small></button>):<p><b>Tocá una entrada, un comienzo y uno o dos conectores.</b><span className="ch-en">Tap an entry, a starter and one or two connectors.</span></p>}</div>{answerPairs.length>0&&<div className="ch-answer-readout"><b>{answerEs}</b><span className="ch-en">{answerEn}</span></div>}</section>

        <section className="ch-wordbank"><header><div><span>WORDBANK DEL CANTÓN · CANTON WORDBANK</span><h2>Palabras que sirven para esta conversación.</h2></div><p>Tocalas para llevarlas a tu borrador.<small className="ch-en">Tap them to add them to your draft.</small></p></header><div>{active.words.map((word,index)=><button key={word.es} onClick={()=>addPart(word)}><span>{String(index+1).padStart(2,"0")}</span><b>{word.es}</b><small className="ch-en">{word.en}</small><i>+</i></button>)}</div></section>

        <section className="ch-depth"><header><span>UNA RESPUESTA MÁS LARGA · A LONGER ANSWER</span><h2>Elegí una misión extra.</h2></header><div>{depthMoves.map((move,index)=><button key={move.es}><span>{index+1}</span><b>{move.es}</b><small className="ch-en">{move.en}</small></button>)}</div></section>

        <nav className="ch-question-nav"><button disabled={question===0} onClick={()=>changeQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{active.questions.map((_,index)=><button key={index} className={question===index?"active":""} onClick={()=>changeQuestion(index)}>{index+1}</button>)}</div><button onClick={()=>question===5?surprise():changeQuestion(question+1)}>{question===5?"OTRO CANTÓN · NEXT CANTON →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  </main>;
}
