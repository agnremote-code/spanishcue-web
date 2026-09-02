"use client";

import Link from "next/link";
import {useMemo,useState,type CSSProperties,type KeyboardEvent} from "react";
import "../suiza-en-relieve/style.css";
import "./style.css";
import {connectors,counties,depthMoves,provinceNames,starters,type IrelandCounty,type Pair} from "./data";
import {irelandShapes} from "./map-data";
import {placesByCode} from "./places";

type Screen="cover"|"map"|"county";
type Province="todo"|IrelandCounty["province"];
type Stance="elegiria"|"depende"|"otra"|null;

const stancePairs:Record<Exclude<Stance,null>,Pair>={
  elegiria:{es:"Yo elegiría…",en:"I would choose…"},
  depende:{es:"Para mí, depende de…",en:"For me, it depends on…"},
  otra:{es:"Veo otra posibilidad…",en:"I see another possibility…"}
};

const countyByCode=new Map(counties.map(county=>[county.code,county]));
const allCodes=new Set(counties.map(county=>county.code));

function IrelandMark(){return <span className="ie-mark" aria-hidden="true"><i/><b>IE</b><i/></span>}
function Atmosphere(){return <div className="ch-atmosphere ie-atmosphere" aria-hidden="true"><i/><i/><i/><span/><span/><span/><b/><b/></div>}

function IrelandMap({selected,onSelect,visibleCodes,compact=false}:{selected:IrelandCounty;onSelect:(county:IrelandCounty)=>void;visibleCodes:Set<string>;compact?:boolean}){
  const choose=(code:string)=>{const county=countyByCode.get(code);if(county&&visibleCodes.has(code))onSelect(county)};
  const keys=(event:KeyboardEvent<SVGGElement>,code:string)=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();choose(code)}};
  const selectedShape=irelandShapes.find(shape=>shape.code===selected.code);
  return <div className={`ch-map-orbit ie-map-orbit ${compact?"compact":""}`}>
    <div className="ch-map-shadow"/>
    <svg className="ch-swiss-map ie-map" viewBox="0 0 650 840" role="img" aria-label="Mapa real interactivo de los 26 condados tradicionales de la República de Irlanda">
      <defs>
        <filter id={`ie-glow-${compact?"mini":"main"}`} x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id={`ie-side-${compact?"mini":"main"}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0a593c"/><stop offset="1" stopColor="#02261c"/></linearGradient>
      </defs>
      <text x="55" y="420" className="ie-water-label">ATLÁNTICO</text>
      <text x="594" y="560" className="ie-water-label">MAR DE IRLANDA</text>
      {irelandShapes.map(shape=>{
        const county=countyByCode.get(shape.code)!;
        const isSelected=selected.code===shape.code;
        const isVisible=visibleCodes.has(shape.code);
        return <g key={shape.code} className={`ch-canton ie-county ${isSelected?"selected":""} ${isVisible?"":"filtered"}`} role="button" tabIndex={isVisible?0:-1} aria-label={`${county.name}, condado ${county.number}`} onClick={()=>choose(shape.code)} onKeyDown={event=>keys(event,shape.code)} style={{"--canton":county.color} as CSSProperties}>
          {[13,9,5].map(offset=><path key={offset} d={shape.d} transform={`translate(0 ${offset})`} className="ch-canton-side" fill={`url(#ie-side-${compact?"mini":"main"})`} fillRule="evenodd"/>) }
          <path d={shape.d} className="ch-canton-top" fillRule="evenodd"/>
          {!compact&&<text x={shape.cx} y={shape.cy} className="ch-canton-code">{shape.code}</text>}
        </g>;
      })}
      {selectedShape&&<g className="ch-selected-label" transform={`translate(${selectedShape.cx} ${selectedShape.cy-23})`}><circle r="18"/><text y="5">{selected.code}</text></g>}
    </svg>
    <span className="ch-map-axis axis-one"/><span className="ch-map-axis axis-two"/><span className="ch-map-axis axis-three"/>
  </div>;
}

export default function IrlandaEnRelieve(){
  const [screen,setScreen]=useState<Screen>("cover");
  const [active,setActive]=useState<IrelandCounty>(counties[0]);
  const [mapPick,setMapPick]=useState<IrelandCounty>(counties[0]);
  const [question,setQuestion]=useState(0);
  const [province,setProvince]=useState<Province>("todo");
  const [query,setQuery]=useState("");
  const [visited,setVisited]=useState<Set<string>>(new Set());
  const [englishVisible,setEnglishVisible]=useState(true);
  const [stance,setStance]=useState<Stance>(null);
  const [answerParts,setAnswerParts]=useState<Pair[]>([]);
  const [placeFocus,setPlaceFocus]=useState(0);

  const visible=useMemo(()=>counties.filter(county=>(province==="todo"||county.province===province)&&`${county.name} ${county.localName} ${county.hub} ${county.hook.es} ${placesByCode[county.code].map(place=>place.name).join(" ")}`.toLowerCase().includes(query.toLowerCase())),[province,query]);
  const visibleCodes=useMemo(()=>new Set(visible.map(county=>county.code)),[visible]);
  const current=active.questions[question];
  const activePlaces=placesByCode[active.code];
  const focusedPlace=activePlaces[placeFocus];
  const progress=Math.round(visited.size/counties.length*100);
  const answerPairs=[...(stance?[stancePairs[stance]]:[]),...answerParts];
  const answerEs=answerPairs.map(part=>part.es.replace(/[…]+/g,"")).join(" ");
  const answerEn=answerPairs.map(part=>part.en.replace(/[…]+/g,"")).join(" ");

  const show=(next:Screen)=>{setScreen(next);window.scrollTo({top:0,behavior:"smooth"})};
  const enter=(county:IrelandCounty,start=0)=>{setActive(county);setMapPick(county);setQuestion(start);setPlaceFocus(0);setStance(null);setAnswerParts([]);setVisited(old=>new Set([...old,county.code]));show("county")};
  const surprise=()=>{const pool=counties.filter(county=>county.code!==active.code);const next=pool[Math.floor(Math.random()*pool.length)]||counties[0];enter(next,Math.floor(Math.random()*6))};
  const changeQuestion=(next:number)=>{setQuestion(Math.max(0,Math.min(5,next)));setStance(null);setAnswerParts([]);document.querySelector(".ch-question-card")?.scrollIntoView({behavior:"smooth",block:"center"})};
  const addPart=(part:Pair)=>setAnswerParts(parts=>[...parts,part]);
  const chooseProvince=(next:Province)=>{setProvince(next);const first=counties.find(county=>next==="todo"||county.province===next);if(first)setMapPick(first)};

  return <main className={`ch-app ie-app ${englishVisible?"":"ch-spanish-only"}`}>
    <nav className="ch-nav">
      <Link href="/" className="ch-brand"><IrelandMark/><span><b>CHESPANISH</b><small>CONVERSATION EXPEDITIONS</small></span></Link>
      <div className="ch-progress"><span>CONDADOS EXPLORADOS · COUNTIES</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/26</strong></div>
      <div className="ch-nav-actions"><button onClick={()=>setEnglishVisible(value=>!value)}>EN <b>{englishVisible?"ON":"OFF"}</b></button><button onClick={surprise}>✦ SORPRESA</button><button onClick={()=>show(screen==="cover"?"map":"cover")}>{screen==="cover"?"MAPA":"INICIO"}</button></div>
    </nav>

    {screen==="cover"&&<section className="ch-cover ie-cover">
      <Atmosphere/><div className="ie-rain" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="ch-cover-shade"/>
      <div className="ch-cover-copy">
        <div className="ch-level"><span>B1</span> 100% CONVERSACIÓN · 100% CONVERSATION</div>
        <p className="ch-eyebrow">26 CONDADOS · 104 LUGARES REALES · 260 DETONADORES PARA HABLAR</p>
        <h1>IRLANDA<br/><em>EN RELIEVE</em></h1>
        <p className="ch-cover-lead">No venimos a repetir “tréboles, pubs y lluvia”. <b>Vamos a entrar en decisiones reales:</b> vivienda, lengua irlandesa, islas, turismo, patrimonio, costa, movilidad y vida rural.<span className="ch-en">We are not here to repeat “shamrocks, pubs and rain”. We will explore real decisions about housing, Irish language, islands, tourism, heritage, coast, mobility and rural life.</span></p>
        <div className="ch-cover-actions"><button onClick={()=>show("map")}>ABRIR EL MAPA 3D <span>→</span><small className="ch-en">OPEN THE 3D MAP</small></button><button className="ghost" onClick={surprise}>✦ SORPRENDEME<small className="ch-en">SURPRISE ME</small></button></div>
        <div className="ch-cover-stats"><article><b>26</b><span>condados reales<small className="ch-en">real counties</small></span></article><article><b>104</b><span>lugares concretos<small className="ch-en">specific places</small></span></article><article><b>260</b><span>detonadores B1<small className="ch-en">B1 speaking prompts</small></span></article></div>
      </div>
      <div className="ch-hero-map ie-hero-map"><div className="ch-map-tag"><span>MAPA REAL</span><b>26 CONDADOS</b></div><IrelandMap selected={mapPick} onSelect={setMapPick} visibleCodes={allCodes} compact/><div className="ch-floating-card"><small>{provinceNames[mapPick.province].es.toUpperCase()}</small><b>{mapPick.name}</b><span>{mapPick.hook.es}</span></div></div>
      <div className="ie-guide" aria-hidden="true"><span>SLÁINTE · SEGUIMOS</span><img src="/chespanish-guide-truck.webp" alt=""/></div>
      <div className="ch-train-line ie-road-line" aria-hidden="true"><i/><b>◆</b></div>
    </section>}

    {screen==="map"&&<section className="ch-map-page ie-map-page">
      <Atmosphere/>
      <header className="ch-map-head"><div><span>ATLAS DE CONVERSACIÓN · CONVERSATION ATLAS</span><h1>Elegí un condado.<br/><em>Entrá en sus lugares.</em></h1></div><div><p>El mapa usa los 26 condados tradicionales de la República de Irlanda. Cada uno abre cuatro lugares concretos, vocabulario y diez detonadores nacidos de su realidad local.</p><p className="ch-en">The map uses the Republic of Ireland's 26 traditional counties. Each opens four specific places, vocabulary and ten prompts grounded in local reality.</p><button onClick={surprise}>✦ QUE EL MAPA DECIDA</button></div></header>

      <div className="ie-geography-note"><b>ISLA ≠ REPÚBLICA</b><span>La isla de Irlanda tiene 32 condados tradicionales. Esta clase recorre los 26 de la República; los otros 6 forman parte de Irlanda del Norte, dentro del Reino Unido.</span><small className="ch-en">The island of Ireland has 32 traditional counties. This lesson covers the Republic's 26; the other six are in Northern Ireland, within the United Kingdom.</small></div>

      <div className="ch-map-tools"><div><button className={province==="todo"?"active":""} onClick={()=>chooseProvince("todo")}>TODO · ALL</button>{(["leinster","munster","connacht","ulster"] as const).map(key=><button key={key} className={province===key?"active":""} onClick={()=>chooseProvince(key)}>{provinceNames[key].es.split(" · ")[0]}</button>)}</div><label><span>⌕</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar condado, ciudad, isla o costa…"/></label></div>

      <section className="ch-map-explorer">
        <div className="ch-map-panel ie-map-panel"><header><span>PROVINCIAS, COSTA, CIUDADES Y MONTAÑAS</span><b>RELIEVE INTERACTIVO</b></header><IrelandMap selected={mapPick} onSelect={setMapPick} visibleCodes={visibleCodes}/><footer><span><i/> SELECCIONADO</span><span><i/> VISITADO</span><a href="https://data.gov.ie/dataset/counties-national-statutory-boundaries-20191" target="_blank" rel="noreferrer">Límites: Tailte Éireann ↗</a></footer></div>
        <aside className="ch-preview" style={{"--canton":mapPick.color} as CSSProperties}>
          <div className="ch-preview-top"><span>{mapPick.number}</span><IrelandMark/><small>{mapPick.code}</small></div>
          <p>{provinceNames[mapPick.province].es}</p><h2>{mapPick.name}</h2><em>{mapPick.localName}</em><h3>{mapPick.hook.es}</h3><p className="ch-en">{mapPick.hook.en}</p><div className="ch-fact"><span>ALGO REAL · A REAL DETAIL</span><b>{mapPick.fact.es}</b><small className="ch-en">{mapPick.fact.en}</small></div><div className="ch-preview-places"><span>ADENTRO DEL CONDADO</span>{placesByCode[mapPick.code].map(place=><b key={place.name}>{place.name}</b>)}</div><div className="ch-preview-chips"><span>Centro: {mapPick.hub}</span><span>4 lugares</span><span>10 preguntas</span></div><button onClick={()=>enter(mapPick)}>ENTRAR EN {mapPick.name.toUpperCase()} <span>→</span><small className="ch-en">OPEN THIS COUNTY</small></button>
        </aside>
      </section>

      <section className="ch-canton-index"><header><div><span>LOS 26 CONDADOS · ALL 26 COUNTIES</span><h2>Cada condado abre cuatro lugares propios.</h2></div><p>{visible.length} visibles · {visited.size} explorados</p></header><div>{visible.map(county=><button key={county.code} onClick={()=>setMapPick(county)} className={`${mapPick.code===county.code?"active":""} ${visited.has(county.code)?"visited":""}`} style={{"--canton":county.color} as CSSProperties}><span>{county.number}</span><i>{county.code}</i><b>{county.name}</b><small>{placesByCode[county.code].map(place=>place.name).join(" · ")}</small><em>VER · VIEW →</em></button>)}</div></section>

      <footer className="ie-sources"><span>BASE GEOGRÁFICA Y CONTEXTO</span><p>Geografía: <a href="https://www.tailte.ie/map-shop/professional-map-products/boundary-data/" target="_blank" rel="noreferrer">Tailte Éireann</a>. Contexto territorial y lugares: <a href="https://www.discoverireland.ie/" target="_blank" rel="noreferrer">Discover Ireland</a> y organismos locales de patrimonio y parques.</p></footer>
    </section>}

    {screen==="county"&&<section className="ch-canton-page ie-county-page" style={{"--canton":active.color} as CSSProperties}>
      <header className="ch-canton-hero">
        <Atmosphere/>
        <div className="ch-canton-topbar"><button onClick={()=>show("map")}>← MAPA · MAP</button><span>CONDADO {active.number} · {provinceNames[active.province].es}</span><button onClick={surprise}>✦ OTRO CONDADO</button></div>
        <div className="ch-canton-title"><small>{active.code} · {active.localName} · {active.hub}</small><h1>{active.name}</h1><h2>{active.hook.es}</h2><p className="ch-en">{active.hook.en}</p><div><span>4 lugares reales</span><span>10 preguntas B1</span><span>Recursos bilingües</span></div></div>
        <div className="ch-canton-map"><IrelandMap selected={active} onSelect={county=>enter(county)} visibleCodes={allCodes} compact/><b>{active.code}</b></div>
      </header>

      <div className="ch-classroom">
        <section className="ch-canton-fact"><span>ANTES DE HABLAR · BEFORE YOU SPEAK</span><div><b>{active.fact.es}</b><small className="ch-en">{active.fact.en}</small></div><strong>{active.mission.es}<small className="ch-en">{active.mission.en}</small></strong></section>

        <section className="ch-place-deck">
          <header><div><span>DENTRO DE {active.name.toUpperCase()} · INSIDE THE COUNTY</span><h2>Cuatro lugares que explican este territorio.</h2><p className="ch-en">Four places that explain this territory.</p></div><p>No son nombres decorativos: tocá cada parada, entendé su relación con el condado y usá la pregunta para hablar.<small className="ch-en">These are not decorative names: open each stop, understand its local connection and use the prompt to speak.</small></p></header>
          <div className="ch-place-tabs">{activePlaces.map((place,index)=><button key={place.name} className={placeFocus===index?"active":""} onClick={()=>setPlaceFocus(index)}><span>{String(index+1).padStart(2,"0")}</span><b>{place.name}</b><i>→</i></button>)}</div>
          <article className="ch-place-focus" key={`${active.code}-${placeFocus}`}><div><span>PARADA {String(placeFocus+1).padStart(2,"0")} · {focusedPlace.type.toUpperCase()}</span><h3>{focusedPlace.name}</h3><p>{focusedPlace.context.es}</p><small className="ch-en">{focusedPlace.context.en}</small></div><div><span>PREGUNTA DEL LUGAR · PLACE PROMPT</span><b>{focusedPlace.prompt.es}</b><small className="ch-en">{focusedPlace.prompt.en}</small><button onClick={()=>addPart(starters[placeFocus])}>+ USAR UN COMIENZO · ADD A STARTER</button></div></article>
        </section>

        <section className="ch-question-card">
          <div className="ch-question-number"><span>PREGUNTA · QUESTION</span><b>{String(question+1).padStart(2,"0")} <i>/ 06</i></b></div>
          <div className="ch-question-copy"><small>{active.name} · {active.hook.es}</small><h2>{current.es}</h2><p className="ch-en">{current.en}</p><div><span>RESPONDÉ</span><i>→</i><span>DA UNA RAZÓN</span><i>→</i><span>AGREGÁ UN EJEMPLO</span></div></div>
          <IrelandMark/>
        </section>

        <section className="ch-response-grid">
          <article className="ch-stance"><span>1 · ELEGÍ UNA ENTRADA · CHOOSE AN ENTRY</span><div>{(["elegiria","depende","otra"] as const).map(value=><button key={value} className={stance===value?"active":""} onClick={()=>setStance(value)}><b>{stancePairs[value].es}</b><small className="ch-en">{stancePairs[value].en}</small></button>)}</div></article>
          <article className="ch-starters"><span>2 · EMPEZÁ LA IDEA · START THE IDEA</span><div>{starters.slice(0,3).map(item=><button key={item.es} onClick={()=>addPart(item)}><b>{item.es}</b><small className="ch-en">{item.en}</small><i>+</i></button>)}</div></article>
          <article className="ch-connectors"><span>3 · CONECTÁ · CONNECT</span><div>{connectors.map(item=><button key={item.es} onClick={()=>addPart(item)}><b>{item.es}</b><small className="ch-en">{item.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="ch-answer-lab" aria-live="polite"><header><div><span>TU BORRADOR B1 · YOUR B1 DRAFT</span><h2>Construí una respuesta y después decila con tus palabras.</h2></div><button disabled={!answerPairs.length} onClick={()=>{setStance(null);setAnswerParts([])}}>BORRAR · CLEAR</button></header><div className={`ch-answer-canvas ${answerPairs.length?"has-answer":""}`}>{answerPairs.length?answerPairs.map((part,index)=><button key={`${part.es}-${index}`} onClick={()=>{if(stance&&index===0)setStance(null);else{const partIndex=index-(stance?1:0);setAnswerParts(parts=>parts.filter((_,i)=>i!==partIndex))}}}><b>{part.es}</b><small className="ch-en">{part.en}</small></button>):<p><b>Tocá una entrada, un comienzo y uno o dos conectores.</b><span className="ch-en">Tap an entry, a starter and one or two connectors.</span></p>}</div>{answerPairs.length>0&&<div className="ch-answer-readout"><b>{answerEs}</b><span className="ch-en">{answerEn}</span></div>}</section>

        <section className="ch-wordbank"><header><div><span>WORDBANK DEL CONDADO · COUNTY WORDBANK</span><h2>Palabras para esta conversación.</h2></div><p>Tocalas para llevarlas a tu borrador.<small className="ch-en">Tap them to add them to your draft.</small></p></header><div>{active.words.map((word,index)=><button key={word.es} onClick={()=>addPart(word)}><span>{String(index+1).padStart(2,"0")}</span><b>{word.es}</b><small className="ch-en">{word.en}</small><i>+</i></button>)}</div></section>

        <section className="ch-depth"><header><span>UNA RESPUESTA MÁS LARGA · A LONGER ANSWER</span><h2>Elegí una misión extra.</h2></header><div>{depthMoves.map((move,index)=><button key={move.es}><span>{index+1}</span><b>{move.es}</b><small className="ch-en">{move.en}</small></button>)}</div></section>

        <nav className="ch-question-nav"><button disabled={question===0} onClick={()=>changeQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{active.questions.map((_,index)=><button key={index} className={question===index?"active":""} onClick={()=>changeQuestion(index)}>{index+1}</button>)}</div><button onClick={()=>question===5?surprise():changeQuestion(question+1)}>{question===5?"OTRO CONDADO · NEXT COUNTY →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  </main>;
}
