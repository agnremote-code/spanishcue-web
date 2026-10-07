"use client";
import { ConversationFamily } from "../conversation-families/ConversationFamily";
import { COUNTRY_LEVELS, countryActivity, countrySupport } from "../conversation-families/country-levels";
import { CountryTools, CountryClosing } from "../conversation-families/country-tools";
import type { CEFRLevel } from "../conversation-families/types";


import Link from "next/link";
import {useMemo,useState,type CSSProperties,type KeyboardEvent} from "react";
import "../suiza-en-relieve/style.css";
import "./style.css";
import {connectors as nativeConnectors,counties,depthMoves as nativeDepthmoves,provinceNames,starters as nativeStarters,type IrelandCounty,type Pair} from "./data";
import {irelandShapes} from "./map-data";
import {placesByCode} from "./places";

type Screen="cover"|"map"|"county";
type Province="todo"|IrelandCounty["province"];
type Stance="elegiria"|"depende"|"otra"|null;

const nativeStancePairs:Record<Exclude<Stance,null>,Pair>={
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
    <svg className="ch-swiss-map ie-map" viewBox="0 0 650 840" role="img" aria-label="Mapa real interactivo de los 26 condados tradicionales de la República de Irlanda / Interactive map of the Republic of Ireland's 26 traditional counties">
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
 return <ConversationFamily id="irlanda-en-relieve" title="Irlanda en relieve" levels={COUNTRY_LEVELS} defaultLevel="B1">{level=><CountryExperience key={level} level={level}/>}</ConversationFamily>;
}
function CountryExperience({level}:{level:CEFRLevel}){
  const [screen,setScreen]=useState<Screen>("cover");
  const [nativeActive,setActive]=useState<IrelandCounty>(counties[0]);
  const context={name:nativeActive.name,places:placesByCode[nativeActive.code].map(place=>({es:place.name,en:place.name})),words:nativeActive.words,source:nativeActive.questions};
  const support=countrySupport(level,context);
  const stancePairs=level==="A0"?Object.fromEntries(Object.keys(nativeStancePairs).map((key,index)=>[key,support.starters[index]])) as typeof nativeStancePairs:nativeStancePairs;
  const depthMoves=level==="B1"?nativeDepthmoves:[support.challenge,support.tip];
  const connectors=level==="B1"?nativeConnectors:support.connectors;
  const starters=level==="B1"?nativeStarters:support.starters;
  const active=level==="B1"?nativeActive:{...nativeActive,questions:nativeActive.questions.map((item,index)=>({...item,...countryActivity(level,context,index)})),mission:support.challenge};
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
  const activePlaces=placesByCode[active.code].map((place,index)=>level==="B1"?place:{...place,prompt:countryActivity(level,{...context,places:[{es:place.name,en:place.name}]},index)});
  const focusedPlace=activePlaces[placeFocus];
  const progress=Math.round(visited.size/counties.length*100);
  const answerPairs=level==="A0"&&answerParts.length?answerParts:[...(stance?[stancePairs[stance]]:[]),...answerParts];
  const answerEs=answerPairs.map(part=>part.es.replace(/[…]+/g,"")).join(" ");
  const answerEn=answerPairs.map(part=>part.en.replace(/[…]+/g,"")).join(" ");

  const show=(next:Screen)=>{setScreen(next);window.scrollTo({top:0,behavior:"smooth"})};
  const enter=(county:IrelandCounty,start=0)=>{setActive(county);setMapPick(county);setQuestion(start);setPlaceFocus(0);setStance(null);setAnswerParts([]);setVisited(old=>new Set([...old,county.code]));show("county")};
  const surprise=()=>{const pool=counties.filter(county=>county.code!==active.code);const next=pool[Math.floor(Math.random()*pool.length)]||counties[0];enter(next,Math.floor(Math.random()*6))};
  const changeQuestion=(next:number)=>{setQuestion(Math.max(0,Math.min(5,next)));setStance(null);setAnswerParts([]);document.querySelector(".ch-question-card")?.scrollIntoView({behavior:"smooth",block:"center"})};
  const addPart=(part:Pair)=>setAnswerParts(parts=>level==="A0"?[part]:[...parts,part]);
  const chooseProvince=(next:Province)=>{setProvince(next);const first=counties.find(county=>next==="todo"||county.province===next);if(first)setMapPick(first)};

  return <main className={`ch-app ie-app ${(level==="A0"||englishVisible)?"":"ch-spanish-only"}`}>
    <nav className="ch-nav">
      <Link href="/" className="ch-brand"><IrelandMark/><span><b>SPANISHCUE</b><small>CONVERSATION EXPEDITIONS</small></span></Link>
      <div className="ch-progress"><span>CONDADOS EXPLORADOS · COUNTIES</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/26</strong></div>
      <div className="ch-nav-actions"><button disabled={level==="A0"} onClick={()=>setEnglishVisible(value=>!value)}>EN <b>{englishVisible?"ON":"OFF"}</b></button><button onClick={surprise}>✦ SORPRESA<span className="country-a0-en" lang="en"> / ✦ SURPRISE</span></button><button onClick={()=>show(screen==="cover"?"map":"cover")}>{screen==="cover"?"MAPA / MAP":"INICIO / HOME"}</button></div>
    </nav>

    {screen==="cover"&&<section className="ch-cover ie-cover">
      <Atmosphere/><div className="ie-rain" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="ch-cover-shade"/>
      <div className="ch-cover-copy">
        <div className="ch-level"><span>{level}</span> 100% CONVERSACIÓN · 100% CONVERSATION</div>
        <p className="ch-eyebrow">26 CONDADOS · 104 LUGARES REALES · 260 DETONADORES PARA HABLAR<span className="country-a0-en" lang="en"> / 26 COUNTIES · 104 REAL PLACES · 260 SPEAKING PROMPTS</span></p>
        <h1>IRLANDA<br/><em>EN RELIEVE</em></h1>
        <p className="ch-cover-lead">No venimos a repetir “tréboles, pubs y lluvia”. <b>Vamos a entrar en decisiones reales:<span className="country-a0-en" lang="en"> / We will explore real decisions:</span></b> vivienda, lengua irlandesa, islas, turismo, patrimonio, costa, movilidad y vida rural.<span className="ch-en">We are not here to repeat “shamrocks, pubs and rain”. We will explore real decisions about housing, Irish language, islands, tourism, heritage, coast, mobility and rural life.</span></p>
        <div className="ch-cover-actions"><button onClick={()=>show("map")}>ABRIR EL MAPA 3D<span className="country-a0-en" lang="en"> / OPEN THE 3D MAP</span> <span>→</span><small className="ch-en">OPEN THE 3D MAP<span className="country-a0-en" lang="es"> / ABRIR EL MAPA 3D</span></small></button><button className="ghost" onClick={surprise}>✦ SORPRÉNDEME<span className="country-a0-en" lang="en"> / ✦ SURPRISE ME</span><small className="ch-en">SURPRISE ME<span className="country-a0-en" lang="es"> / SORPRÉNDEME</span></small></button></div>
        <div className="ch-cover-stats"><article><b>26</b><span>condados reales<span className="country-a0-en" lang="en"> / real counties</span><small className="ch-en">real counties</small></span></article><article><b>104</b><span>lugares concretos<span className="country-a0-en" lang="en"> / specific places</span><small className="ch-en">specific places</small></span></article><article><b>260</b><span>detonadores<span className="country-a0-en" lang="en"> / speaking prompts</span> {level}<small className="ch-en">{level} speaking prompts</small></span></article></div>
      </div>
      <div className="ch-hero-map ie-hero-map"><div className="ch-map-tag"><span>MAPA REAL<span className="country-a0-en" lang="en"> / REAL MAP</span></span><b>26 CONDADOS<span className="country-a0-en" lang="en"> / 26 COUNTIES</span></b></div><IrelandMap selected={mapPick} onSelect={setMapPick} visibleCodes={allCodes} compact/><div className="ch-floating-card"><small>{provinceNames[mapPick.province].es.toUpperCase()}</small><b>{mapPick.name}</b><span>{mapPick.hook.es}<span className="country-a0-en" lang="en"> / {mapPick.hook.en}</span></span></div></div>
      <div className="ie-guide" aria-hidden="true"><span>SLÁINTE · SEGUIMOS</span><img src="/chespanish-guide-truck.webp" alt=""/></div>
      <div className="ch-train-line ie-road-line" aria-hidden="true"><i/><b>◆</b></div>
    </section>}

    {screen==="map"&&<section className="ch-map-page ie-map-page">
      <Atmosphere/>
      <header className="ch-map-head"><div><span>ATLAS DE CONVERSACIÓN · CONVERSATION ATLAS</span><h1>Elige un condado.<span className="country-a0-en" lang="en"> / Choose a county.</span><br/><em>Entra en sus lugares.<span className="country-a0-en" lang="en"> / Explore its places.</span></em></h1></div><div><p>El mapa usa los 26 condados tradicionales de la República de Irlanda. Cada uno abre cuatro lugares concretos, vocabulario y diez detonadores nacidos de su realidad local.</p><p className="ch-en">The map uses the Republic of Ireland&apos;s 26 traditional counties. Each opens four specific places, vocabulary and ten prompts grounded in local reality.</p><button onClick={surprise}>✦ QUE EL MAPA DECIDA<span className="country-a0-en" lang="en"> / ✦ LET THE MAP CHOOSE</span></button></div></header>

      <div className="ie-geography-note"><b>ISLA ≠ REPÚBLICA<span className="country-a0-en" lang="en"> / ISLAND ≠ REPUBLIC</span></b><span>La isla de Irlanda tiene 32 condados tradicionales. Esta clase recorre los 26 de la República; los otros 6 forman parte de Irlanda del Norte, dentro del Reino Unido.</span><small className="ch-en">The island of Ireland has 32 traditional counties. This lesson covers the Republic&apos;s 26; the other six are in Northern Ireland, within the United Kingdom.</small></div>

      <div className="ch-map-tools"><div><button className={province==="todo"?"active":""} onClick={()=>chooseProvince("todo")}>TODO · ALL</button>{(["leinster","munster","connacht","ulster"] as const).map(key=><button key={key} className={province===key?"active":""} onClick={()=>chooseProvince(key)}>{provinceNames[key].es.split(" · ")[0]}</button>)}</div><label><span>⌕</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar condado, ciudad, isla o costa… / Search county, city, island or coast…"/></label></div>

      <section className="ch-map-explorer">
        <div className="ch-map-panel ie-map-panel"><header><span>PROVINCIAS, COSTA, CIUDADES Y MONTAÑAS<span className="country-a0-en" lang="en"> / PROVINCES, COAST, CITIES AND MOUNTAINS</span></span><b>RELIEVE INTERACTIVO<span className="country-a0-en" lang="en"> / INTERACTIVE RELIEF MAP</span></b></header><IrelandMap selected={mapPick} onSelect={setMapPick} visibleCodes={visibleCodes}/><footer><span><i/> SELECCIONADO<span className="country-a0-en" lang="en"> / SELECTED</span></span><span><i/> VISITADO<span className="country-a0-en" lang="en"> / VISITED</span></span><a href="https://data.gov.ie/dataset/counties-national-statutory-boundaries-20191" target="_blank" rel="noreferrer">Límites: Tailte Éireann ↗<span className="country-a0-en" lang="en"> / Boundaries: Tailte Éireann ↗</span></a></footer></div>
        <aside className="ch-preview" style={{"--canton":mapPick.color} as CSSProperties}>
          <div className="ch-preview-top"><span>{mapPick.number}</span><IrelandMark/><small>{mapPick.code}</small></div>
          <p>{provinceNames[mapPick.province].es}<span className="country-a0-en" lang="en"> / {provinceNames[mapPick.province].en}</span></p><h2>{mapPick.name}</h2><em>{mapPick.localName}</em><h3>{mapPick.hook.es}</h3><p className="ch-en">{mapPick.hook.en}</p><div className="ch-fact"><span>ALGO REAL · A REAL DETAIL</span><b>{mapPick.fact.es}</b><small className="ch-en">{mapPick.fact.en}</small></div><div className="ch-preview-places"><span>ADENTRO DEL CONDADO<span className="country-a0-en" lang="en"> / INSIDE THE COUNTY</span></span>{placesByCode[mapPick.code].map(place=><b key={place.name}>{place.name}</b>)}</div><div className="ch-preview-chips"><span>Centro:<span className="country-a0-en" lang="en"> / Hub:</span> {mapPick.hub}</span><span>4 lugares<span className="country-a0-en" lang="en"> / 4 places</span></span><span>10 preguntas<span className="country-a0-en" lang="en"> / 10 questions</span></span></div><button onClick={()=>enter(mapPick)}>ENTRAR EN<span className="country-a0-en" lang="en"> / ENTER</span> {mapPick.name.toUpperCase()} <span>→</span><small className="ch-en">OPEN THIS COUNTY<span className="country-a0-en" lang="es"> / ABRIR ESTE CONDADO</span></small></button>
        </aside>
      </section>

      <section className="ch-canton-index"><header><div><span>LOS 26 CONDADOS · ALL 26 COUNTIES</span><h2>Cada condado abre cuatro lugares propios.<span className="country-a0-en" lang="en"> / Each county opens four local places.</span></h2></div><p>{visible.length} visibles ·<span className="country-a0-en" lang="en"> / visible ·</span> {visited.size} explorados<span className="country-a0-en" lang="en"> / explored</span></p></header><div>{visible.map(county=><button key={county.code} onClick={()=>setMapPick(county)} className={`${mapPick.code===county.code?"active":""} ${visited.has(county.code)?"visited":""}`} style={{"--canton":county.color} as CSSProperties}><span>{county.number}</span><i>{county.code}</i><b>{county.name}</b><small>{placesByCode[county.code].map(place=>place.name).join(" · ")}</small><em>VER · VIEW →</em></button>)}</div></section>

      <footer className="ie-sources"><span>BASE GEOGRÁFICA Y CONTEXTO<span className="country-a0-en" lang="en"> / GEOGRAPHICAL BASIS AND CONTEXT</span></span><p>Geografía:<span className="country-a0-en" lang="en"> / Geography:</span> <a href="https://www.tailte.ie/map-shop/professional-map-products/boundary-data/" target="_blank" rel="noreferrer">Tailte Éireann</a>. Contexto territorial y lugares:<span className="country-a0-en" lang="en"> / . Local context and places:</span> <a href="https://www.discoverireland.ie/" target="_blank" rel="noreferrer">Discover Ireland</a> y organismos locales de patrimonio y parques.<span className="country-a0-en" lang="en"> / and local heritage and park organisations.</span></p></footer>
    </section>}

    {screen==="county"&&<section className="ch-canton-page ie-county-page" style={{"--canton":active.color} as CSSProperties}>
      <header className="ch-canton-hero">
        <Atmosphere/>
        <div className="ch-canton-topbar"><button onClick={()=>show("map")}>← MAPA · MAP</button><span>CONDADO<span className="country-a0-en" lang="en"> / COUNTY</span> {active.number} · {provinceNames[active.province].es}<span className="country-a0-en" lang="en"> / {provinceNames[active.province].en}</span></span><button onClick={surprise}>✦ OTRO CONDADO<span className="country-a0-en" lang="en"> / ✦ ANOTHER COUNTY</span></button></div>
        <div className="ch-canton-title"><small>{active.code} · {active.localName} · {active.hub}</small><h1>{active.name}</h1><h2>{active.hook.es}</h2><p className="ch-en">{active.hook.en}</p><div><span>4 lugares reales<span className="country-a0-en" lang="en"> / 4 real places</span></span><span>10 preguntas<span className="country-a0-en" lang="en"> / 10 questions</span> {level}</span><span>Recursos bilingües<span className="country-a0-en" lang="en"> / Bilingual resources</span></span></div></div>
        <div className="ch-canton-map"><IrelandMap selected={active} onSelect={county=>enter(county)} visibleCodes={allCodes} compact/><b>{active.code}</b></div>
      </header>

      <div className="ch-classroom"><CountryTools level={level} context={context} index={question}/>
        <section className="ch-canton-fact"><span>ANTES DE HABLAR · BEFORE YOU SPEAK</span><div><b>{active.fact.es}</b><small className="ch-en">{active.fact.en}</small></div><strong>{active.mission.es}<small className="ch-en">{active.mission.en}</small></strong></section>

        <section className="ch-place-deck">
          <header><div><span>DENTRO DE<span className="country-a0-en" lang="en"> / INSIDE</span> {active.name.toUpperCase()} · INSIDE THE COUNTY</span><h2>Cuatro lugares que explican este territorio.<span className="country-a0-en" lang="en"> / Four places that explain this territory.</span></h2><p className="ch-en">Four places that explain this territory.</p></div><p>No son nombres decorativos: toca cada parada, entiende su relación con el condado y usa la pregunta para hablar.<small className="ch-en">These are not decorative names: open each stop, understand its local connection and use the prompt to speak.</small></p></header>
          <div className="ch-place-tabs">{activePlaces.map((place,index)=><button key={place.name} className={placeFocus===index?"active":""} onClick={()=>setPlaceFocus(index)}><span>{String(index+1).padStart(2,"0")}</span><b>{place.name}</b><i>→</i></button>)}</div>
          <article className="ch-place-focus" key={`${active.code}-${placeFocus}`}><div><span>PARADA<span className="country-a0-en" lang="en"> / STOP</span> {String(placeFocus+1).padStart(2,"0")} · {focusedPlace.type.toUpperCase()}</span><h3>{focusedPlace.name}</h3><p>{focusedPlace.context.es}</p><small className="ch-en">{focusedPlace.context.en}</small></div><div><span>PREGUNTA DEL LUGAR · PLACE PROMPT</span><b>{focusedPlace.prompt.es}</b><small className="ch-en">{focusedPlace.prompt.en}</small><button onClick={()=>addPart(starters[placeFocus])}>+ USAR UN COMIENZO · ADD A STARTER</button></div></article>
        </section>

        <section className="ch-question-card">
          <div className="ch-question-number"><span>PREGUNTA · QUESTION</span><b>{String(question+1).padStart(2,"0")} <i>/ 06</i></b></div>
          <div className="ch-question-copy"><small>{active.name} · {active.hook.es}<span className="country-a0-en" lang="en"> / {active.hook.en}</span></small><h2>{current.es}</h2><p className="ch-en">{current.en}</p><div><span>RESPONDE<span className="country-a0-en" lang="en"> / ANSWER</span></span><i>→</i><span>{level==="A0"?"ESCUCHA / LISTEN":"DA UNA RAZÓN"}</span><i>→</i><span>{level==="A0"?"REPITE LA FRASE / REPEAT THE SENTENCE":"AGREGA UN EJEMPLO"}</span></div></div>
          <IrelandMark/>
        </section>

        <section className="ch-response-grid">
          <article className="ch-stance"><span>1 · ELIGE UNA ENTRADA · CHOOSE AN ENTRY</span><div>{(["elegiria","depende","otra"] as const).map(value=><button key={value} className={stance===value?"active":""} onClick={()=>{setStance(value);if(level==="A0")setAnswerParts([])}}><b>{stancePairs[value].es}</b><small className="ch-en">{stancePairs[value].en}</small></button>)}</div></article>
          <article className="ch-starters"><span>2 · EMPIEZA LA IDEA · START THE IDEA</span><div>{starters.slice(0,3).map(item=><button key={item.es} onClick={()=>addPart(item)}><b>{item.es}</b><small className="ch-en">{item.en}</small><i>+</i></button>)}</div></article>
          <article className="ch-connectors"><span>3 · CONECTA · CONNECT</span><div>{connectors.map(item=><button key={item.es} onClick={()=>addPart(item)}><b>{item.es}</b><small className="ch-en">{item.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="ch-answer-lab" aria-live="polite"><header><div><span>TU BORRADOR<span className="country-a0-en" lang="en"> / YOUR DRAFT</span> {level} · YOUR {level} DRAFT<span className="country-a0-en" lang="es"> / BORRADOR</span></span><h2>Construye una respuesta y después dila con tus palabras.<span className="country-a0-en" lang="en"> / Build an answer, then say it in your own words.</span></h2></div><button disabled={!answerPairs.length} onClick={()=>{setStance(null);setAnswerParts([])}}>BORRAR · CLEAR</button></header><div className={`ch-answer-canvas ${answerPairs.length?"has-answer":""}`}>{answerPairs.length?answerPairs.map((part,index)=><button key={`${part.es}-${index}`} onClick={()=>{if(stance&&index===0)setStance(null);else{const partIndex=index-(stance?1:0);setAnswerParts(parts=>parts.filter((_,i)=>i!==partIndex))}}}><b>{part.es}</b><small className="ch-en">{part.en}</small></button>):<p><b>{level==="A0"?"Elige una frase completa y repítela.":"Toca una entrada, un comienzo y uno o dos conectores."}</b><span className="ch-en">{level==="A0"?"Choose one complete sentence and repeat it.":"Tap an entry, a starter and one or two connectors."}</span></p>}</div>{answerPairs.length>0&&<div className="ch-answer-readout"><b>{answerEs}</b><span className="ch-en">{answerEn}</span></div>}</section>

        <section className="ch-wordbank"><header><div><span>WORDBANK DEL CONDADO · COUNTY WORDBANK</span><h2>Palabras para esta conversación.<span className="country-a0-en" lang="en"> / Words for this conversation.</span></h2></div><p>{level==="A0"?"Lee estas palabras como apoyo. Elige una frase completa arriba.":"Tócalas para llevarlas a tu borrador."}<span className="country-a0-en" lang="en"> / Tap them to add them to your draft.</span><small className="ch-en">{level==="A0"?"Read these words for support. Choose a complete sentence above.":"Tap them to add them to your draft."}</small></p></header><div>{active.words.map((word,index)=><button key={word.es} disabled={level==="A0"} onClick={()=>addPart(word)}><span>{String(index+1).padStart(2,"0")}</span><b>{word.es}</b><small className="ch-en">{word.en}</small><i>+</i></button>)}</div></section>

        <section className="ch-depth"><header><span>UNA RESPUESTA MÁS LARGA · A LONGER ANSWER</span><h2>Elige una misión extra.<span className="country-a0-en" lang="en"> / Choose an extra challenge.</span></h2></header><div>{depthMoves.map((move,index)=><button key={move.es}><span>{index+1}</span><b>{move.es}</b><small className="ch-en">{move.en}</small></button>)}</div></section>

        <nav className="ch-question-nav"><button disabled={question===0} onClick={()=>changeQuestion(question-1)}>← ANTERIOR · PREVIOUS</button><div>{active.questions.map((_,index)=><button key={index} className={question===index?"active":""} onClick={()=>changeQuestion(index)}>{index+1}</button>)}</div><button onClick={()=>question===5?surprise():changeQuestion(question+1)}>{question===5?"OTRO CONDADO · NEXT COUNTY →":"SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  <CountryClosing level={level} context={context}/></main>;
}
