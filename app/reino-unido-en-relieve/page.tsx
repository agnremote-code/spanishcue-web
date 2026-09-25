"use client";
import { ConversationFamily, ConversationClosing } from "../conversation-families/ConversationFamily";

import { a1Support, areaForUKLevel, placesForUKArea, questionsForUKArea, type UKLevel } from "./variants";
import Link from "next/link";
import {useMemo,useState,type CSSProperties,type KeyboardEvent} from "react";
import "../suiza-en-relieve/style.css";
import "./style.css";
import {areas,connectors as b1Connectors,depthMoves as b1DepthMoves,nationNames,starters as b1Starters,type Pair,type UKArea} from "./data";
import {ukShapes} from "./map-data";
import {placesByCode} from "./places";

type Screen="cover"|"map"|"area";
type Nation="todo"|UKArea["nation"];
type Stance="elegiria"|"depende"|"otra"|null;

const stancePairs:Record<Exclude<Stance,null>,Pair>={
  elegiria:{es:"Yo elegiría…",en:"I would choose…"},
  depende:{es:"Para mí, depende de…",en:"For me, it depends on…"},
  otra:{es:"Veo otra posibilidad…",en:"I see another possibility…"}
};

const areaByCode=new Map(areas.map(area=>[area.code,area]));
const allCodes=new Set(areas.map(area=>area.code));

function UKMark(){return <span className="uk-mark" aria-hidden="true">UK</span>}
function Atmosphere(){return <div className="ch-atmosphere uk-atmosphere" aria-hidden="true"><i/><i/><i/><span/><span/><span/><b/><b/></div>}

function UKMap({selected,onSelect,visibleCodes,compact=false}:{selected:UKArea;onSelect:(area:UKArea)=>void;visibleCodes:Set<string>;compact?:boolean}){
  const choose=(code:string)=>{const area=areaByCode.get(code);if(area&&visibleCodes.has(code))onSelect(area)};
  const keys=(event:KeyboardEvent<SVGGElement>,code:string)=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();choose(code)}};
  const selectedShape=ukShapes.find(shape=>shape.code===selected.code);
  return <div className={`ch-map-orbit uk-map-orbit ${compact?"compact":""}`}>
    <div className="ch-map-shadow"/>
    <svg className="ch-swiss-map uk-map" viewBox="0 0 720 980" role="img" aria-label="Mapa real interactivo de las doce áreas del Reino Unido">
      <defs>
        <filter id={`uk-glow-${compact?"mini":"main"}`} x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id={`uk-side-${compact?"mini":"main"}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#092d48"/><stop offset="1" stopColor="#04111e"/></linearGradient>
      </defs>
      <text x="55" y="430" className="uk-water-label">ATLÁNTICO</text>
      <text x="570" y="580" className="uk-water-label">MAR DEL NORTE</text>
      {ukShapes.map(shape=>{
        const area=areaByCode.get(shape.code)!;
        const isSelected=selected.code===shape.code;
        const isVisible=visibleCodes.has(shape.code);
        return <g key={shape.code} className={`ch-canton uk-area ${isSelected?"selected":""} ${isVisible?"":"filtered"}`} role="button" tabIndex={isVisible?0:-1} aria-label={`${area.name}, ${area.kind}`} onClick={()=>choose(shape.code)} onKeyDown={event=>keys(event,shape.code)} style={{"--canton":area.color} as CSSProperties}>
          {[13,9,5].map(offset=><path key={offset} d={shape.d} transform={`translate(0 ${offset})`} className="ch-canton-side" fill={`url(#uk-side-${compact?"mini":"main"})`} fillRule="evenodd"/>) }
          <path d={shape.d} className="ch-canton-top" fillRule="evenodd"/>
          {!compact&&<text x={shape.cx} y={shape.cy} className="ch-canton-code">{shape.code.slice(2)}</text>}
        </g>;
      })}
      {selectedShape&&<g className="ch-selected-label" transform={`translate(${selectedShape.cx} ${selectedShape.cy-24})`}><circle r="19"/><text y="5">{selected.code.slice(2)}</text></g>}
    </svg>
    <span className="ch-map-axis axis-one"/><span className="ch-map-axis axis-two"/><span className="ch-map-axis axis-three"/>
  </div>;
}

export default function ReinoUnidoEnRelieve(){
  return <ConversationFamily id="reino-unido-en-relieve" title="Reino Unido en Relieve" levels={["A1","B1"]} defaultLevel="B1">{level=><CountryExperience key={level} level={level as UKLevel}/>}</ConversationFamily>;
}
function CountryExperience({level}:{level:UKLevel}){
  const [screen,setScreen]=useState<Screen>("cover");
  const [active,setActive]=useState<UKArea>(areas[0]);
  const [mapPick,setMapPick]=useState<UKArea>(areas[0]);
  const [question,setQuestion]=useState(0);
  const [nation,setNation]=useState<Nation>("todo");
  const [query,setQuery]=useState("");
  const [visited,setVisited]=useState<Set<string>>(new Set());
  const [englishVisible,setEnglishVisible]=useState(false);
  const [stance,setStance]=useState<Stance>(null);
  const [answerParts,setAnswerParts]=useState<Pair[]>([]);
  const [placeFocus,setPlaceFocus]=useState(0);

  const visible=useMemo(()=>areas.filter(area=>(nation==="todo"||area.nation===nation)&&`${area.name} ${area.localName} ${area.hub} ${area.languages} ${areaForUKLevel(area,level).hook.es} ${placesByCode[area.code].map(place=>place.name).join(" ")}`.toLowerCase().includes(query.toLowerCase())),[nation,query,level]);
  const visibleCodes=useMemo(()=>new Set(visible.map(area=>area.code)),[visible]);
  const activeCopy=areaForUKLevel(active,level);
  const mapCopy=areaForUKLevel(mapPick,level);
  const activeQuestions=questionsForUKArea(active,level);
  const current=activeQuestions[Math.min(question,activeQuestions.length-1)];
  const activePlaces=placesForUKArea(active,level);
  const focusedPlace=activePlaces[placeFocus];
  const starters=level==="A1"?a1Support.starters:b1Starters;
  const connectors=level==="A1"?a1Support.connectors:b1Connectors;
  const depthMoves=level==="A1"?a1Support.depthMoves:b1DepthMoves;
  const levelStances=level==="A1"?a1Support.stances:stancePairs;
  const progress=Math.round(visited.size/areas.length*100);
  const answerPairs=[...(stance?[levelStances[stance]]:[]),...answerParts];
  const answerEs=answerPairs.map(part=>part.es.replace(/[…]+/g,"")).join(" ");
  const answerEn=answerPairs.map(part=>part.en.replace(/[…]+/g,"")).join(" ");

  const show=(next:Screen)=>{setScreen(next);window.scrollTo({top:0,behavior:"smooth"})};
  const enter=(area:UKArea,start=0)=>{setActive(area);setMapPick(area);setQuestion(Math.min(start,questionsForUKArea(area,level).length-1));setPlaceFocus(0);setStance(null);setAnswerParts([]);setVisited(old=>new Set([...old,area.code]));show("area")};
  const surprise=()=>{const pool=areas.filter(area=>area.code!==active.code);const next=pool[Math.floor(Math.random()*pool.length)]||areas[0];enter(next,Math.floor(Math.random()*questionsForUKArea(next,level).length))};
  const changeQuestion=(next:number)=>{setQuestion(Math.max(0,Math.min(activeQuestions.length-1,next)));setStance(null);setAnswerParts([]);document.querySelector(".ch-question-card")?.scrollIntoView({behavior:"smooth",block:"center"})};
  const addPart=(part:Pair)=>setAnswerParts(parts=>[...parts,part]);
  const chooseNation=(next:Nation)=>{setNation(next);const first=areas.find(area=>next==="todo"||area.nation===next);if(first)setMapPick(first)};

  return <main className={`ch-app uk-app ${englishVisible?"":"ch-spanish-only"}`}>
    <nav className="ch-nav">
      <Link href="/" className="ch-brand"><UKMark/><span><b>SPANISHCUE</b><small>CONVERSATION EXPEDITIONS</small></span></Link>
      <div className="ch-progress"><span>TERRITORIOS EXPLORADOS · AREAS</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/12</strong></div>
      <div className="ch-nav-actions"><button onClick={()=>setEnglishVisible(value=>!value)}>EN <b>{englishVisible?"ON":"OFF"}</b></button><button onClick={surprise}>✦ SORPRESA</button><button onClick={()=>show(screen==="cover"?"map":"cover")}>{screen==="cover"?"MAPA":"INICIO"}</button></div>
    </nav>

    {screen==="cover"&&<section className="ch-cover uk-cover">
      <Atmosphere/><div className="uk-weather-grid" aria-hidden="true"><span>57°N</span><span>ATLÁNTICO → MAR DEL NORTE</span><span>VIENTO · MAREA · RIEL</span></div><div className="ch-cover-shade"/>
      <div className="ch-cover-copy">
        <div className="ch-level"><span>A1<br/>B1</span> 100% CONVERSACIÓN · 100% CONVERSATION</div>
        <p className="ch-eyebrow">4 NACIONES · 9 REGIONES INGLESAS · 48 LUGARES REALES · {level==="A1"?"144":"192"} DETONADORES</p>
        <h1>REINO UNIDO<br/><em>EN RELIEVE</em></h1>
        <p className="ch-cover-lead">{level==="A1"?<>Visitá ciudades, playas e islas. <b>Mirá el mapa. Elegí un lugar. Hablá de lo que te gusta.</b><span className="ch-en">Visit cities, beaches and islands. Look at the map. Choose a place. Talk about what you like.</span></>:<>No es una lista de “Londres, té y castillos”. <b>Es una expedición por barrios, costas, islas, ciudades industriales, lenguas y conexiones.</b> Cada lugar abre una pregunta que solamente tiene sentido en esa parte del mapa.<span className="ch-en">This is not a list of “London, tea and castles”. It is an expedition through neighbourhoods, coasts, islands, industrial cities, languages and connections. Every place opens a question that only makes sense in that part of the map.</span></>}</p>
        <div className="ch-cover-actions"><button onClick={()=>show("map")}>ABRIR EL MAPA 3D <span>→</span><small className="ch-en">OPEN THE 3D MAP</small></button><button className="ghost" onClick={surprise}>✦ SORPRENDEME<small className="ch-en">SURPRISE ME</small></button></div>
        <div className="ch-cover-stats"><article><b>12</b><span>territorios<small className="ch-en">mapped areas</small></span></article><article><b>48</b><span>lugares concretos<small className="ch-en">specific places</small></span></article><article><b>{level==="A1"?"144":"192"}</b><span>detonadores {level}<small className="ch-en">{level} prompts</small></span></article></div>
      </div>
      <div className="ch-hero-map uk-hero-map"><div className="ch-map-tag"><span>MAPA REAL ONS</span><b>12 ÁREAS ITL1</b></div><UKMap selected={mapPick} onSelect={setMapPick} visibleCodes={allCodes} compact/><div className="ch-floating-card"><small>{mapPick.kind.toUpperCase()} · {mapPick.languages.toUpperCase()}</small><b>{mapPick.name}</b><span>{mapCopy.hook.es}</span></div></div>
      <div className="ch-train-line uk-rail-line" aria-hidden="true"><i/><b>◆</b></div>
    </section>}

    {screen==="map"&&<section className="ch-map-page uk-map-page">
      <Atmosphere/>
      <header className="ch-map-head"><div><span>ATLAS DE CONVERSACIÓN · CONVERSATION ATLAS</span><h1>Elegí un territorio.<br/><em>Entrá en sus lugares.</em></h1></div><div><p>{level==="A1"?"El Reino Unido tiene cuatro naciones: Inglaterra, Escocia, Gales e Irlanda del Norte. Elegí un lugar en el mapa.":"El Reino Unido tiene cuatro naciones. Para recorrer Inglaterra sin fingir que todo son “estados”, el mapa usa sus nueve regiones oficiales y suma Escocia, Gales e Irlanda del Norte."}</p><p className="ch-en">{level==="A1"?"The UK has four nations: England, Scotland, Wales and Northern Ireland. Choose a place on the map.":"The UK has four nations. To explore England without pretending they are all “states”, the map uses its nine official regions plus Scotland, Wales and Northern Ireland."}</p><button onClick={surprise}>✦ QUE EL MAPA DECIDA</button></div></header>

      <div className="uk-geography-note"><b>UK ≠ GREAT BRITAIN</b><span>{level==="A1"?"Gran Bretaña tiene Inglaterra, Escocia y Gales. El Reino Unido también tiene Irlanda del Norte.":"Gran Bretaña es la isla de Inglaterra, Escocia y Gales. El Reino Unido también incluye Irlanda del Norte."}</span><small className="ch-en">Great Britain is the island containing England, Scotland and Wales. The United Kingdom also includes Northern Ireland.</small></div>

      <div className="ch-map-tools"><div><button className={nation==="todo"?"active":""} onClick={()=>chooseNation("todo")}>TODO · ALL</button>{(["inglaterra","escocia","gales","irlanda-norte"] as const).map(key=><button key={key} className={nation===key?"active":""} onClick={()=>chooseNation(key)}>{nationNames[key].es}</button>)}</div><label><span>⌕</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar región, ciudad, costa o parque…"/></label></div>

      <section className="ch-map-explorer">
        <div className="ch-map-panel uk-map-panel"><header><span>NORTE, COSTA, ISLAS Y CIUDADES</span><b>RELIEVE INTERACTIVO</b></header><UKMap selected={mapPick} onSelect={setMapPick} visibleCodes={visibleCodes}/><footer><span><i/> SELECCIONADO</span><span><i/> VISITADO</span><a href="https://geoportal.statistics.gov.uk/datasets/international-territorial-level-1-january-2025-boundaries-uk-buc/about" target="_blank" rel="noreferrer">Límites: ONS Open Geography ↗</a></footer></div>
        <aside className="ch-preview" style={{"--canton":mapPick.color} as CSSProperties}>
          <div className="ch-preview-top"><span>{mapPick.number}</span><UKMark/><small>{mapPick.code}</small></div>
          <p>{mapPick.kind} · {nationNames[mapPick.nation].es}</p><h2>{mapPick.name}</h2><em>{mapPick.localName}</em><h3>{mapCopy.hook.es}</h3><p className="ch-en">{mapCopy.hook.en}</p><div className="ch-fact"><span>ALGO REAL · A REAL DETAIL</span><b>{mapCopy.fact.es}</b><small className="ch-en">{mapCopy.fact.en}</small></div><div className="ch-preview-places"><span>ADENTRO DEL TERRITORIO</span>{placesByCode[mapPick.code].map(place=><b key={place.name}>{place.name}</b>)}</div><div className="ch-preview-chips"><span>Centro: {mapPick.hub}</span><span>4 lugares</span><span>{level==="A1"?"8":"12"} preguntas</span></div><button onClick={()=>enter(mapPick)}>ENTRAR EN {mapPick.name.toUpperCase()} <span>→</span><small className="ch-en">OPEN THIS AREA</small></button>
        </aside>
      </section>

      <section className="ch-canton-index"><header><div><span>LAS 12 ÁREAS · ALL 12 AREAS</span><h2>Cada territorio abre cuatro lugares propios.</h2></div><p>{visible.length} visibles · {visited.size} explorados</p></header><div>{visible.map(area=><button key={area.code} onClick={()=>setMapPick(area)} className={`${mapPick.code===area.code?"active":""} ${visited.has(area.code)?"visited":""}`} style={{"--canton":area.color} as CSSProperties}><span>{area.number}</span><i>{area.code}</i><b>{area.name}</b><small>{placesByCode[area.code].map(place=>place.name).join(" · ")}</small><em>VER · VIEW →</em></button>)}</div></section>

      <footer className="uk-sources"><span>BASE GEOGRÁFICA Y CONTEXTO</span><p>Mapa: <a href="https://www.ons.gov.uk/methodology/geography/ukgeographies/eurostat" target="_blank" rel="noreferrer">Office for National Statistics</a>. Contexto territorial: <a href="https://www.visitbritain.com/en/destinations" target="_blank" rel="noreferrer">VisitBritain</a>, <a href="https://www.visitscotland.com/" target="_blank" rel="noreferrer">VisitScotland</a>, <a href="https://www.visitwales.com/destinations" target="_blank" rel="noreferrer">Visit Wales</a> y <a href="https://discovernorthernireland.com/" target="_blank" rel="noreferrer">Discover Northern Ireland</a>.</p></footer>
    </section>}

    {screen==="area"&&<section className="ch-canton-page uk-area-page" style={{"--canton":active.color} as CSSProperties}>
      <header className="ch-canton-hero">
        <Atmosphere/>
        <div className="ch-canton-topbar"><button onClick={()=>show("map")}>← MAPA · MAP</button><span>{active.kind.toUpperCase()} · {nationNames[active.nation].es.toUpperCase()}</span><button onClick={surprise}>✦ OTRO TERRITORIO</button></div>
        <div className="ch-canton-title"><small>{active.code} · {active.localName} · {active.languages}</small><h1>{active.name}</h1><h2>{activeCopy.hook.es}</h2><p className="ch-en">{activeCopy.hook.en}</p><div><span>4 lugares reales</span><span>{activeQuestions.length} preguntas centrales</span><span>Recursos bilingües</span></div></div>
        <div className="ch-canton-map"><UKMap selected={active} onSelect={area=>enter(area)} visibleCodes={allCodes} compact/><b>{active.code.slice(2)}</b></div>
      </header>

      <div className="ch-classroom">
        <section className="ch-canton-fact"><span>ANTES DE HABLAR · BEFORE YOU SPEAK</span><div><b>{activeCopy.fact.es}</b><small className="ch-en">{activeCopy.fact.en}</small></div><strong>{activeCopy.mission.es}<small className="ch-en">{activeCopy.mission.en}</small></strong></section>

        <section className="ch-place-deck">
          <header><div><span>DENTRO DE {active.name.toUpperCase()} · INSIDE THIS AREA</span><h2>{level==="A1"?"Cuatro lugares para conocer.":"Cuatro lugares que explican este territorio."}</h2><p className="ch-en">{level==="A1"?"Four places to discover.":"Four places that explain this territory."}</p></div><p>{level==="A1"?"Tocá un lugar. Leé y respondé una pregunta.":"No son nombres decorativos: tocá cada parada, entendé su relación con la geografía local y usá la pregunta para hablar."}<small className="ch-en">{level==="A1"?"Choose a place. Read and answer one question.":"These are not decorative names: open each stop, understand its link to local geography and use its question to speak."}</small></p></header>
          <div className="ch-place-tabs">{activePlaces.map((place,index)=><button key={place.name} className={placeFocus===index?"active":""} onClick={()=>setPlaceFocus(index)}><span>{String(index+1).padStart(2,"0")}</span><b>{place.name}</b><i>→</i></button>)}</div>
          <article className="ch-place-focus" key={`${active.code}-${placeFocus}`}><div><span>PARADA {String(placeFocus+1).padStart(2,"0")} · {focusedPlace.type.toUpperCase()}</span><h3>{focusedPlace.name}</h3><p>{focusedPlace.context.es}</p><small className="ch-en">{focusedPlace.context.en}</small></div><div><span>PREGUNTA DEL LUGAR · PLACE PROMPT</span><b>{focusedPlace.prompt.es}</b><small className="ch-en">{focusedPlace.prompt.en}</small><button onClick={()=>addPart(starters[placeFocus])}>+ USAR UN COMIENZO · ADD A STARTER</button></div></article>
        </section>

        <section className="ch-question-card">
          <div className="ch-question-number"><span>PREGUNTA · QUESTION</span><b>{String(question+1).padStart(2,"0")} <i>/ {activeQuestions.length}</i></b></div>
          <div className="ch-question-copy"><small>{active.name} · {activeCopy.hook.es}</small><h2>{current.es}</h2><p className="ch-en">{current.en}</p><div>{level==="A1"?<><span>RESPONDÉ</span><i>→</i><span>DECÍ UN LUGAR</span><i>→</i><span>HACÉ UNA PREGUNTA</span></>:<><span>RESPONDÉ</span><i>→</i><span>DA UNA RAZÓN</span><i>→</i><span>AGREGÁ UN EJEMPLO</span></>}</div></div>
          <UKMark/>
        </section>

        <section className="ch-response-grid">
          <article className="ch-stance"><span>1 · ELEGÍ UNA ENTRADA · CHOOSE AN ENTRY</span><div>{(["elegiria","depende","otra"] as const).map(value=><button key={value} className={stance===value?"active":""} onClick={()=>setStance(value)}><b>{levelStances[value].es}</b><small className="ch-en">{levelStances[value].en}</small></button>)}</div></article>
          <article className="ch-starters"><span>{level==="A1"?"2 · AGREGÁ OTRA FRASE · ADD ANOTHER SENTENCE":"2 · EMPEZÁ LA IDEA · START THE IDEA"}</span><div>{starters.slice(0,3).map(item=><button key={item.es} onClick={()=>addPart(item)}><b>{item.es}</b><small className="ch-en">{item.en}</small><i>+</i></button>)}</div></article>
          <article className="ch-connectors"><span>3 · CONECTÁ · CONNECT</span><div>{connectors.map(item=><button key={item.es} onClick={()=>addPart(item)}><b>{item.es}</b><small className="ch-en">{item.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="ch-answer-lab" aria-live="polite"><header><div><span>TU BORRADOR {level} · YOUR {level} DRAFT</span><h2>Armá una respuesta y después decila con tus palabras.</h2></div><button disabled={!answerPairs.length} onClick={()=>{setStance(null);setAnswerParts([])}}>BORRAR · CLEAR</button></header><div className={`ch-answer-canvas ${answerPairs.length?"has-answer":""}`}>{answerPairs.length?answerPairs.map((part,index)=><button key={`${part.es}-${index}`} onClick={()=>{if(stance&&index===0)setStance(null);else{const partIndex=index-(stance?1:0);setAnswerParts(parts=>parts.filter((_,i)=>i!==partIndex))}}}><b>{part.es}</b><small className="ch-en">{part.en}</small></button>):<p><b>Tocá una entrada, un comienzo y uno o dos conectores.</b><span className="ch-en">Tap an entry, a starter and one or two connectors.</span></p>}</div>{answerPairs.length>0&&<div className="ch-answer-readout"><b>{answerEs}</b><span className="ch-en">{answerEn}</span></div>}</section>

        <section className="ch-wordbank"><header><div><span>WORDBANK DEL TERRITORIO · AREA WORDBANK</span><h2>Palabras para esta conversación.</h2></div><p>Tocalas para llevarlas a tu borrador.<small className="ch-en">Tap them to add them to your draft.</small></p></header><div>{activeCopy.words.map((word,index)=><button key={word.es} onClick={()=>addPart(word)}><span>{String(index+1).padStart(2,"0")}</span><b>{word.es}</b><small className="ch-en">{word.en}</small><i>+</i></button>)}</div></section>

        <section className="ch-depth"><header><span>{level==="A1"?"UNA IDEA MÁS · ONE MORE IDEA":"UNA RESPUESTA MÁS LARGA · A LONGER ANSWER"}</span><h2>Elegí una misión extra.</h2></header><div>{depthMoves.map((move,index)=><button key={move.es}><span>{index+1}</span><b>{move.es}</b><small className="ch-en">{move.en}</small></button>)}</div></section>

        <nav className="ch-question-nav"><button disabled={question===0} onClick={()=>changeQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{activeQuestions.map((_,index)=><button key={index} className={question===index?"active":""} onClick={()=>changeQuestion(index)}>{index+1}</button>)}</div><button onClick={()=>question===activeQuestions.length-1?surprise():changeQuestion(question+1)}>{question===activeQuestions.length-1?"OTRO TERRITORIO · NEXT AREA →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  <ConversationClosing questions={level==="A1"?["¿Qué ciudad te gusta?", "¿Prefieres la playa o la montaña?", "¿Dónde está un lugar que quieres visitar?"]:["¿Qué tensión entre visitantes y residentes te recordó a tu país?", "Recomienda una ruta que respete las prioridades de dos viajeros diferentes."]} note="Elijan entre tres y cinco territorios para una clase de unos 45 minutos."/></main>;
}
