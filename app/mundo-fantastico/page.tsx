"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import "./style.css";
import {
  answerTools,
  continentCodes,
  continentColors,
  continentEnglish,
  destinations,
  megaWordbank,
  type Continent,
  type Destination,
  type Pair,
} from "./data";

type Screen = "cover" | "atlas" | "destination";
type FollowUp = { prompt: Pair; choices: Pair[] };
type Question = { prompt: Pair; starter: Pair; choices: Pair[]; follow: FollowUp };
type GlyphName = "map" | "shuffle" | "sound" | "clear" | "home" | "plus" | "compass" | "words";
type VisualResult = { src: string; source: string; artist: string; license: string };

const continents: Array<"Todos" | Continent> = ["Todos", "América", "Europa", "África", "Asia", "Oceanía", "Antártida"];
const imageCache = new Map<string, VisualResult>();
const usedImageSources = new Map<string, Set<string>>();
const continentSlug: Record<Continent,string> = {América:"america",Europa:"europa",África:"africa",Asia:"asia",Oceanía:"oceania",Antártida:"antartida"};

function questionsFor(place: Destination): Question[] {
  return [
    {prompt:{es:`¿Querés visitar ${place.landmark.es}?`,en:`Do you want to visit ${place.landmark.en}?`},starter:{es:"Quiero…",en:"I want…"},choices:[{es:`visitar ${place.landmark.es}`,en:`to visit ${place.landmark.en}`},{es:`conocer ${place.capital.es}`,en:`to discover ${place.capital.en}`},{es:"ver todo el país",en:"to see the whole country"}],follow:{prompt:{es:"¿Con quién?",en:"With whom?"},choices:[{es:"con mi familia",en:"with my family"},{es:"con una amiga / un amigo",en:"with a friend"},{es:"solo / sola",en:"alone"}]}},
    {prompt:{es:`¿Querés probar ${place.food.es}?`,en:`Do you want to try ${place.food.en}?`},starter:{es:"Quiero probar…",en:"I want to try…"},choices:[place.food,{es:"algo dulce",en:"something sweet"},{es:"algo salado",en:"something salty"}],follow:{prompt:{es:"¿Dulce o salado?",en:"Sweet or salty?"},choices:[{es:"Es dulce",en:"It is sweet"},{es:"Es salado / salada",en:"It is salty"},{es:"No sé",en:"I do not know"}]}},
    {prompt:{es:`¿Preferís ${place.nature.es} o ${place.culture.es}?`,en:`Do you prefer ${place.nature.en} or ${place.culture.en}?`},starter:{es:"Prefiero…",en:"I prefer…"},choices:[place.nature,place.culture,{es:"las dos cosas",en:"both things"}],follow:{prompt:{es:"¿Por qué?",en:"Why?"},choices:[{es:"porque es lindo / linda",en:"because it is beautiful"},{es:"porque es interesante",en:"because it is interesting"},{es:"porque me gusta",en:"because I like it"}]}},
    {prompt:{es:`¿Querés ver ${place.animal.es}?`,en:`Do you want to see ${place.animal.en}?`},starter:{es:"Quiero ver…",en:"I want to see…"},choices:[place.animal,{es:"una foto",en:"a photo"},{es:"muchos animales",en:"many animals"}],follow:{prompt:{es:"¿Sacás una foto?",en:"Do you take a photo?"},choices:[{es:"Sí, saco una foto",en:"Yes, I take a photo"},{es:"No saco fotos",en:"I do not take photos"},{es:"Tal vez después",en:"Maybe later"}]}},
    {prompt:{es:`¿Viajás ${place.transport.es} o en avión?`,en:`Do you travel ${place.transport.en} or by plane?`},starter:{es:"Viajo…",en:"I travel…"},choices:[place.transport,{es:"en avión",en:"by plane"},{es:"a pie",en:"on foot"}],follow:{prompt:{es:"¿Es rápido o lento?",en:"Is it fast or slow?"},choices:[{es:"Es rápido",en:"It is fast"},{es:"Es lento",en:"It is slow"},{es:"Es tranquilo",en:"It is calm"}]}},
    {prompt:{es:`En ${place.country}, ${place.climate.es}. ¿Te gusta?`,en:`In ${place.countryEn}, ${place.climate.en}. Do you like it?`},starter:{es:"Prefiero…",en:"I prefer…"},choices:[{es:`el clima de ${place.country}`,en:`the weather in ${place.countryEn}`},{es:"el calor",en:"hot weather"},{es:"el frío",en:"cold weather"}],follow:{prompt:{es:"¿Te gusta mucho?",en:"Do you like it a lot?"},choices:[{es:"Me encanta",en:"I love it"},{es:"Está bien",en:"It is OK"},{es:"No me gusta",en:"I do not like it"}]}},
    {prompt:{es:`¿Con quién viajás a ${place.country}?`,en:`Who do you travel to ${place.countryEn} with?`},starter:{es:"Viajo con…",en:"I travel with…"},choices:[{es:"mi familia",en:"my family"},{es:"una amiga / un amigo",en:"a friend"},{es:"mi pareja",en:"my partner"},{es:"nadie: viajo solo / sola",en:"nobody: I travel alone"}],follow:{prompt:{es:"¿Una persona o muchas?",en:"One person or many?"},choices:[{es:"una persona",en:"one person"},{es:"dos personas",en:"two people"},{es:"muchas personas",en:"many people"}]}},
    {prompt:{es:`¿Cuántos días querés estar en ${place.country}?`,en:`How many days do you want to be in ${place.countryEn}?`},starter:{es:"Quiero estar…",en:"I want to stay…"},choices:[{es:"un día",en:"one day"},{es:"tres días",en:"three days"},{es:"una semana",en:"one week"},{es:"un mes",en:"one month"}],follow:{prompt:{es:"¿Es suficiente?",en:"Is it enough?"},choices:[{es:"Sí, es suficiente",en:"Yes, it is enough"},{es:"No, quiero más días",en:"No, I want more days"},{es:"Es perfecto",en:"It is perfect"}]}},
    {prompt:{es:`En ${place.country} dicen “${place.greeting.es}”. ¿Podés decirlo?`,en:`In ${place.countryEn} they say “${place.greeting.en}”. Can you say it?`},starter:{es:"Puedo decir…",en:"I can say…"},choices:[place.greeting,{es:"el saludo",en:"the greeting"},{es:"hola",en:"hello"}],follow:{prompt:{es:"¿Cómo saludás en tu idioma?",en:"How do you say hello in your language?"},choices:[{es:"En mi idioma digo…",en:"In my language I say…"},{es:"Es parecido",en:"It is similar"},{es:"Es diferente",en:"It is different"}]}},
    {prompt:{es:`Llegás a ${place.country}. ¿Qué hacés primero?`,en:`You arrive in ${place.countryEn}. What do you do first?`},starter:{es:"Primero…",en:"First…"},choices:[{es:`visito ${place.landmark.es}`,en:`I visit ${place.landmark.en}`},{es:`pruebo ${place.food.es}`,en:`I try ${place.food.en}`},{es:`veo ${place.animal.es}`,en:`I see ${place.animal.en}`},{es:"voy al hotel",en:"I go to the hotel"}],follow:{prompt:{es:"¿Y después?",en:"And then?"},choices:[{es:"Después como algo",en:"Then I eat something"},{es:"Después descanso",en:"Then I rest"},{es:"Después camino por la ciudad",en:"Then I walk around the city"}]}},
  ];
}

function Glyph({ name }: { name: GlyphName }) {
  const content: Record<GlyphName, ReactNode> = {
    map:<><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20Z"/><path d="M9 4v13.5M15 6.5V20"/></>,
    shuffle:<><path d="M16 3h5v5"/><path d="m4 20 5.5-5.5M21 3l-7.5 7.5"/><path d="M4 4h2.5c4.5 0 7 16 11 16H21"/><path d="m17 16 4 4-4 4"/></>,
    sound:<><path d="M5 10v4h4l5 4V6l-5 4Z"/><path d="M17 9.5c1.2 1.1 1.2 3.9 0 5M19.5 7c3 3 3 7 0 10"/></>,
    clear:<><path d="M5 7h14M9 7V4h6v3M8 10v8M12 10v8M16 10v8M7 7l1 14h8l1-14"/></>,
    home:<><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/></>,
    plus:<><path d="M12 5v14M5 12h14"/></>,
    compass:<><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9Z"/></>,
    words:<><path d="M4 5h16v14H4Z"/><path d="M8 9h8M8 13h5"/></>,
  };
  return <svg className="wf-glyph" viewBox="0 0 24 24" aria-hidden="true">{content[name]}</svg>;
}

function Sky({ dense = false }: { dense?: boolean }) {
  return <div className={`wf-sky ${dense ? "dense" : ""}`} aria-hidden="true"><i/><i/><i/><i/><i/><span/><span/><span/></div>;
}

function Crest({ place, small = false }: { place: Destination; small?: boolean }) {
  return <div className={`wf-crest ${small ? "small" : ""}`} style={{"--place":place.color} as CSSProperties} aria-hidden="true"><i/><span>{place.number}</span><small>{continentCodes[place.continent]}</small></div>;
}

function cleanCredit(value: string | undefined) {
  if (!value) return "Wikimedia Commons";
  const node = document.createElement("div");
  node.innerHTML = value;
  return (node.textContent || "Wikimedia Commons").replace(/\s+/g," ").trim().slice(0,72);
}

function WikiVisual({query,alt,label,subLabel,className="",seed=0,group="global"}:{query:string;alt:string;label:string;subLabel:string;className?:string;seed?:number;group?:string}) {
  const cacheKey=`${query}::${seed}`;
  const [visual,setVisual] = useState<VisualResult | null>(()=>imageCache.get(cacheKey)||null);
  const [failed,setFailed] = useState(false);

  useEffect(()=>{
    const cached=imageCache.get(cacheKey);
    if(cached){setVisual(cached);setFailed(false);const used=usedImageSources.get(group)||new Set<string>();used.add(cached.src);usedImageSources.set(group,used);return;}
    const controller=new AbortController();
    setVisual(null);setFailed(false);
    const params=new URLSearchParams({action:"query",generator:"search",gsrsearch:query,gsrnamespace:"6",gsrlimit:"12",prop:"imageinfo",iiprop:"url|extmetadata",iiurlwidth:"1000",format:"json",origin:"*"});
    fetch(`https://commons.wikimedia.org/w/api.php?${params}`,{signal:controller.signal})
      .then(response=>response.ok?response.json():Promise.reject(new Error("visual")))
      .then(payload=>{
        const pages=(Object.values(payload?.query?.pages||{}) as Array<{index?:number;imageinfo?:Array<{thumburl?:string;descriptionurl?:string;extmetadata?:Record<string,{value?:string}>}>}>).sort((a,b)=>(a.index||0)-(b.index||0));
        const candidates=pages.map(page=>page.imageinfo?.[0]).filter((info):info is NonNullable<typeof info>=>Boolean(info?.thumburl));
        const used=usedImageSources.get(group)||new Set<string>();
        const ordered=[...candidates.slice(seed%candidates.length),...candidates.slice(0,seed%candidates.length)];
        const info=ordered.find(candidate=>candidate.thumburl&&!used.has(candidate.thumburl))||ordered[0];
        if(!info?.thumburl)throw new Error("visual");
        const result={src:info.thumburl,source:info.descriptionurl||"https://commons.wikimedia.org",artist:cleanCredit(info.extmetadata?.Artist?.value),license:cleanCredit(info.extmetadata?.LicenseShortName?.value)};
        used.add(result.src);usedImageSources.set(group,used);imageCache.set(cacheKey,result);setVisual(result);
      })
      .catch(error=>{if(error?.name!=="AbortError")setFailed(true)});
    return()=>controller.abort();
  },[cacheKey,group,query,seed]);

  return <article className={`wf-wiki-visual ${className} ${visual?"loaded":""} ${failed?"failed":""}`}>
    {visual?<img src={visual.src} alt={alt}/>:<div className="wf-visual-loading"><i/><i/><i/></div>}
    <div className="wf-visual-shade"/>
    <div className="wf-visual-label"><span>{label}</span><b>{subLabel}</b></div>
    {visual&&<a href={visual.source} target="_blank" rel="noreferrer" title={`${visual.artist} · ${visual.license}`}>WIKIMEDIA · {visual.license}</a>}
    {failed&&<small className="wf-visual-fallback">IMAGEN NO DISPONIBLE · IMAGE UNAVAILABLE</small>}
  </article>;
}

function TypicalGallery({place}:{place:Destination}) {
  return <div className="wf-typical-gallery">
    <WikiVisual className="wf-visual-landmark" query={`${place.landmark.en} ${place.countryEn} landmark wide view`} alt={`${place.landmark.es}, ${place.country}`} label="LUGAR · PLACE" subLabel={place.landmark.es} seed={20} group={place.id}/>
    <WikiVisual className="wf-visual-food" query={`${place.food.en} ${place.countryEn} traditional food close up`} alt={`${place.food.es}, ${place.country}`} label="COMIDA · FOOD" subLabel={place.food.es} seed={21} group={place.id}/>
    <WikiVisual className="wf-visual-nature" query={`${place.nature.en} ${place.countryEn} landscape panorama`} alt={`${place.nature.es}, ${place.country}`} label="NATURALEZA · NATURE" subLabel={place.nature.es} seed={22} group={place.id}/>
    <div className="wf-gallery-crest"><Crest place={place} small/></div>
  </div>;
}

function questionVisual(place:Destination,index:number){
  const scenes=[
    {query:`${place.landmark.en} ${place.countryEn} landmark exterior`,label:"LUGAR · PLACE",title:place.landmark.es},
    {query:`${place.food.en} ${place.countryEn} traditional food close up`,label:"COMIDA · FOOD",title:place.food.es},
    {query:`${place.nature.en} ${place.countryEn} landscape panorama`,label:"NATURALEZA · NATURE",title:place.nature.es},
    {query:`${place.animal.en} ${place.countryEn} wildlife`,label:"ANIMAL · ANIMAL",title:place.animal.es},
    {query:`${place.transport.en} ${place.countryEn} street transport`,label:"VIAJE · TRAVEL",title:place.transport.es},
    {query:`${place.countryEn} ${place.climate.en} weather landscape`,label:"CLIMA · WEATHER",title:place.climate.es},
    {query:`${place.countryEn} family travel people street`,label:"PERSONAS · PEOPLE",title:"compañía de viaje"},
    {query:`${place.countryEn} hotel city night travel`,label:"TIEMPO · TIME",title:"días de viaje"},
    {query:`${place.culture.en} ${place.countryEn} festival people`,label:"CULTURA · CULTURE",title:place.culture.es},
    {query:`${place.capital.en} ${place.countryEn} city street aerial`,label:"LLEGADA · ARRIVAL",title:place.capital.es},
  ];
  return scenes[index]||scenes[0];
}

export default function MundoFantastico() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [active, setActive] = useState<Destination>(destinations[9]);
  const [atlasPick, setAtlasPick] = useState<Destination>(destinations[9]);
  const [continent, setContinent] = useState<"Todos" | Continent>("Todos");
  const [query, setQuery] = useState("");
  const [question, setQuestion] = useState(0);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [answerParts, setAnswerParts] = useState<Pair[]>([]);
  const [englishVisible, setEnglishVisible] = useState(true);
  const [bankOpen, setBankOpen] = useState(false);
  const [bankTab, setBankTab] = useState("country");
  const [bankQuery, setBankQuery] = useState("");

  const visibleDestinations = useMemo(() => destinations.filter(place =>
    (continent === "Todos" || place.continent === continent) &&
    `${place.country} ${place.countryEn} ${place.capital.es} ${place.continent}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [continent, query]);
  const questions = useMemo(() => questionsFor(active), [active]);
  const current = questions[question];
  const progress = Math.round(visited.size / destinations.length * 100);
  const answerEs = answerParts.map(item => item.es.replace(/[.…]+/g, "")).join(" ");
  const answerEn = answerParts.map(item => item.en.replace(/[.…]+/g, "")).join(" ");
  const destinationWords: Array<Pair & { code: string; label: Pair }> = [
    {es:active.country,en:active.countryEn,code:"PA",label:{es:"PAÍS",en:"COUNTRY"}},
    {es:active.continent,en:continentEnglish[active.continent],code:"CN",label:{es:"CONTINENTE",en:"CONTINENT"}},
    {...active.capital,code:"CA",label:{es:"CAPITAL",en:"CAPITAL"}},
    {...active.landmark,code:"LU",label:{es:"LUGAR",en:"PLACE"}},
    {...active.food,code:"CO",label:{es:"COMIDA",en:"FOOD"}},
    {...active.nature,code:"NA",label:{es:"NATURALEZA",en:"NATURE"}},
    {...active.animal,code:"AN",label:{es:"ANIMAL",en:"ANIMAL"}},
    {...active.culture,code:"CU",label:{es:"CULTURA",en:"CULTURE"}},
    {...active.transport,code:"TR",label:{es:"TRANSPORTE",en:"TRANSPORT"}},
    {...active.climate,code:"CL",label:{es:"CLIMA",en:"WEATHER"}},
  ];
  const bankCatalog = [
    {id:"country",code:"PA",label:{es:active.country,en:active.countryEn},words:destinationWords},
    {id:"phrases",code:"A0",label:{es:"Frases rápidas",en:"Quick phrases"},words:answerTools},
    ...megaWordbank,
  ];
  const normalizedBankQuery=bankQuery.trim().toLowerCase();
  const visibleBankGroups=bankCatalog
    .filter(group=>!normalizedBankQuery||group.words.some(word=>`${word.es} ${word.en}`.toLowerCase().includes(normalizedBankQuery)))
    .filter(group=>normalizedBankQuery||group.id===bankTab)
    .map(group=>({...group,words:normalizedBankQuery?group.words.filter(word=>`${word.es} ${word.en}`.toLowerCase().includes(normalizedBankQuery)):group.words}));
  const currentVisual=questionVisual(active,question);

  useEffect(()=>{
    if(!bankOpen)return;
    const previous=document.body.style.overflow;
    document.body.style.overflow="hidden";
    const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setBankOpen(false)};
    window.addEventListener("keydown",close);
    return()=>{document.body.style.overflow=previous;window.removeEventListener("keydown",close)};
  },[bankOpen]);

  const show = (next: Screen) => { setScreen(next); window.scrollTo({top:0,behavior:"smooth"}); };
  const enter = (place: Destination, start = 0) => { setActive(place); setAtlasPick(place); setQuestion(start); setAnswerParts([]); setBankTab("country"); setBankQuery(""); setBankOpen(false); setVisited(previous => new Set([...previous, place.id])); show("destination"); };
  const surprise = () => { const pool = destinations.filter(place => place.id !== active.id); const place = pool[Math.floor(Math.random() * pool.length)] || destinations[0]; enter(place, Math.floor(Math.random() * 10)); };
  const addPart = (part: Pair) => setAnswerParts(parts => [...parts, part]);
  const changeQuestion = (next: number) => { setQuestion(Math.max(0, Math.min(9, next))); setAnswerParts([]); document.querySelector(".wf-question-stage")?.scrollIntoView({behavior:"smooth",block:"center"}); };
  const speak = (text: string) => { if (typeof window === "undefined" || !("speechSynthesis" in window)) return; window.speechSynthesis.cancel(); const voice = new SpeechSynthesisUtterance(text); voice.lang = "es-AR"; voice.rate = .76; window.speechSynthesis.speak(voice); };

  return <main className={`wf-app ${englishVisible ? "" : "wf-spanish-only"}`}>
    <nav className="wf-nav">
      <Link href="/" className="wf-brand"><span><img src="/chespanish-guide-avatar.png" alt=""/></span><div><b>CHESPANISH</b><small>CONVERSATION ADVENTURES</small></div></Link>
      <div className="wf-progress"><span>MUNDOS ABIERTOS · OPEN WORLDS</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/40</strong></div>
      <div className="wf-nav-actions"><button onClick={surprise}><Glyph name="shuffle"/> SORPRESA</button><button onClick={() => show(screen === "cover" ? "atlas" : "cover")}><Glyph name={screen === "cover" ? "map" : "home"}/>{screen === "cover" ? " MAPA" : " INICIO"}</button></div>
    </nav>

    {screen === "cover" && <section className="wf-cover">
      <Sky dense/>
      <div className="wf-cover-copy">
        <div className="wf-kicker"><span>A0</span> PARA EMPEZAR DE CERO · START FROM ZERO</div>
        <p className="wf-overline">6 CONTINENTES · AMÉRICA = 1 CONTINENTE · 40 MUNDOS</p>
        <h1>EL MUNDO<br/><em>FANTÁSTICO</em></h1>
        <p className="wf-lead">Viajá por el planeta y hablá español desde la primera palabra.<b> Preguntas mínimas. Respuestas tocables. Wordbank completo.</b><span className="wf-en">Travel around the planet and speak Spanish from the very first word. Tiny questions, tappable answers and a complete word bank.</span></p>
        <div className="wf-cover-actions"><button onClick={() => show("atlas")}>ABRIR EL MAPA <span>→</span><small className="wf-en">OPEN THE MAP</small></button><button className="ghost" onClick={surprise}><Glyph name="shuffle"/> PAÍS SORPRESA<small className="wf-en">SURPRISE COUNTRY</small></button></div>
        <div className="wf-stats"><article><b>6</b><span>continentes<small>continents</small></span></article><article><b>40</b><span>mundos<small>worlds</small></span></article><article><b>400</b><span>preguntas A0<small>A0 questions</small></span></article><article><b>120+</b><span>palabras<small>words</small></span></article></div>
      </div>
      <div className="wf-hero-map" aria-hidden="true">
        <div className="wf-globe"><img src="/world-map.svg" alt=""/><i/><i/><i/></div>
        <span className="wf-orbit-label one">AMÉRICA · ONE CONTINENT</span><span className="wf-orbit-label two">A0 · ONE WORD COUNTS</span><span className="wf-orbit-label three">6 CONTINENTES</span>
        <div className="wf-hero-pin p1"/><div className="wf-hero-pin p2"/><div className="wf-hero-pin p3"/><div className="wf-hero-pin p4"/>
      </div>
      <div className="wf-horizon" aria-hidden="true"><i/><i/><i/></div>
    </section>}

    {screen === "atlas" && <section className="wf-atlas-screen">
      <header className="wf-atlas-head"><div><span>ATLAS MUNDIAL · WORLD ATLAS</span><h1>Elegí un continente.<br/><em>Abrí un país. Hablá.</em></h1></div><div><p>Los 40 puntos son mundos de conversación A0. América aparece como un solo continente.</p><span className="wf-en">The 40 points are A0 conversation worlds. America appears as one continent.</span><button onClick={surprise}><Glyph name="shuffle"/> QUE EL MUNDO DECIDA</button></div></header>

      <div className="wf-toolbar">
        <div className="wf-continent-tabs">{continents.map(item => <button key={item} className={continent === item ? "active" : ""} style={{"--tab":item === "Todos" ? "#ffffff" : continentColors[item]} as CSSProperties} onClick={() => setContinent(item)}>{item}<small>{item === "Todos" ? "All" : continentEnglish[item]}</small></button>)}</div>
        <label><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar país o capital · Search"/></label>
      </div>

      <section className="wf-map-layout">
        <div className="wf-map-frame">
          <header><span><Glyph name="compass"/> MAPA INTERACTIVO · INTERACTIVE MAP</span><b>{visibleDestinations.length} visibles · visible</b></header>
          <div className="wf-map-scroll">
            <div className="wf-map" aria-label="Mapa mundial interactivo con cuarenta destinos">
              <img src="/world-map.svg" alt="Mapa del mundo"/>
              <div className="wf-map-grid" aria-hidden="true"/>
              {destinations.map(place => {
                const visible = visibleDestinations.some(item => item.id === place.id);
                return <button key={place.id} disabled={!visible} onClick={() => setAtlasPick(place)} className={`wf-map-node ${atlasPick.id === place.id ? "selected" : ""} ${visited.has(place.id) ? "visited" : ""} ${visible ? "" : "hidden"}`} style={{left:`${place.x}%`,top:`${place.y}%`,"--place":place.color} as CSSProperties} aria-label={`${place.country}: ${place.title.es}`}><b>{place.number}</b><span><strong>{place.country}</strong><small>{place.countryEn}</small></span></button>;
              })}
              <div className="wf-america-note" aria-hidden="true"><b>AMÉRICA</b><span>1 CONTINENTE</span></div>
              <p className="wf-map-instruction">TOCÁ UN PUNTO · TAP A POINT</p>
            </div>
          </div>
          <footer>Mapa base: Natural Earth · CC0 <span>•</span> Los puntos son destinos de la clase, no capitales exactas.</footer>
        </div>

        <aside className="wf-portal" style={{"--place":atlasPick.color} as CSSProperties}>
          <div className="wf-portal-map"><img src="/world-map.svg" alt=""/><Crest place={atlasPick}/></div>
          <div className="wf-portal-copy"><span>{atlasPick.continent} · MUNDO {atlasPick.number}</span><small>{atlasPick.countryEn}</small><h2>{atlasPick.country}</h2><h3>{atlasPick.title.es}</h3><p className="wf-en">{atlasPick.title.en}</p><div className="wf-capital"><small>CAPITAL · CAPITAL</small><b>{atlasPick.capital.es}</b></div><div className="wf-portal-tags"><b>10 preguntas</b><b>Audio lento</b><b>Wordbank total</b></div><button onClick={() => enter(atlasPick)}>ABRIR ESTE MUNDO <span>→</span><small className="wf-en">OPEN THIS WORLD</small></button></div>
        </aside>
      </section>

      <section className="wf-country-strip"><header><span>DESTINOS · DESTINATIONS</span><b>{visited.size} abiertos · opened</b></header><div>{visibleDestinations.map(place => <button key={place.id} onClick={() => setAtlasPick(place)} className={`${atlasPick.id === place.id ? "active" : ""} ${visited.has(place.id) ? "visited" : ""}`} style={{"--place":place.color} as CSSProperties}><span>{place.number}</span><b>{place.country}</b><small>{continentCodes[place.continent]}</small></button>)}</div></section>
      {!visibleDestinations.length && <div className="wf-empty"><b>No encontramos ese lugar.</b><span>Probá otro país o una capital. · Try another country or capital.</span></div>}
    </section>}

    {screen === "destination" && <section className={`wf-world wf-continent-${continentSlug[active.continent]} wf-country-${active.id}`} style={{"--place":active.color,"--continent":continentColors[active.continent]} as CSSProperties}>
      <header className="wf-world-hero">
        <Sky/>
        <div className="wf-world-top"><button onClick={() => show("atlas")}>← MAPA · MAP</button><span>MUNDO {active.number} · {active.continent}</span><div><button className={englishVisible ? "active" : ""} onClick={() => setEnglishVisible(value => !value)}>EN {englishVisible ? "ON" : "OFF"}</button><button onClick={surprise}><Glyph name="shuffle"/> OTRO PAÍS</button></div></div>
        <div className="wf-world-copy"><small>{active.continent} · {continentEnglish[active.continent]}</small><h1>{active.country}</h1><h2>{active.countryEn}</h2><p><b>{active.title.es}</b><span className="wf-en">{active.title.en}</span></p><div className="wf-world-facts"><span><small>CAPITAL</small>{active.capital.es}</span><span><small>HOLA</small>{active.greeting.es}</span><span><small>CLIMA</small>{active.climate.es}</span></div><div className="wf-typical-chips"><b>{active.landmark.es}</b><b>{active.food.es}</b><b>{active.animal.es}</b><b>{active.culture.es}</b></div></div>
        <TypicalGallery place={active}/>
        <div className="wf-country-atmosphere" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      </header>

      <div className="wf-classroom">
        <section className="wf-rule"><span>A0 REAL · REAL A0</span><b>Una palabra es una respuesta. Una mini frase es una victoria.</b><em className="wf-en">One word is an answer. One tiny sentence is a victory.</em></section>

        <section className="wf-question-stage">
          <div className="wf-question-count"><span>PREGUNTA · QUESTION</span><b>{String(question + 1).padStart(2,"0")} <i>/ 10</i></b></div>
          <div className="wf-question-copy"><small>{active.country} · {active.countryEn}</small><h2>{current.prompt.es}</h2><p className="wf-en">{current.prompt.en}</p><div className="wf-question-actions"><button onClick={() => speak(current.prompt.es)}><Glyph name="sound"/> ESCUCHAR LENTO</button><button onClick={() => {setBankTab("country");setBankOpen(true)}}><Glyph name="words"/> WORDBANK</button></div></div>
          <div className="wf-question-picture"><WikiVisual key={`${active.id}-${question}`} query={currentVisual.query} alt={`${currentVisual.title}, ${active.country}`} label={currentVisual.label} subLabel={currentVisual.title} seed={question} group={active.id}/></div>
        </section>

        <section className="wf-support">
          <button className="wf-starter" onClick={() => addPart(current.starter)}><span>1 · EMPEZÁ ASÍ · START</span><b>{current.starter.es}</b><em className="wf-en">{current.starter.en}</em><i><Glyph name="plus"/> AGREGAR</i></button>
          <article className="wf-choices"><span>2 · ELEGÍ · CHOOSE</span><div>{current.choices.map((choice, index) => <button key={`${choice.es}-${index}`} onClick={() => addPart(choice)}><b>{choice.es}</b><small className="wf-en">{choice.en}</small><i>+</i></button>)}</div></article>
          <article className="wf-follow"><span>3 · UNA MÁS · ONE MORE</span><b>{current.follow.prompt.es}</b><em className="wf-en">{current.follow.prompt.en}</em><small>TOCÁ UNA RESPUESTA · TAP AN ANSWER</small><div>{current.follow.choices.map((choice,index)=><button key={`${choice.es}-${index}`} onClick={()=>addPart(choice)}><b>{choice.es}</b><small className="wf-en">{choice.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="wf-quick-bank"><header><div><span>WORDBANK INMEDIATO · QUICK WORDBANK</span><b>Sin bajar: tocá una palabra o abrí todo.</b></div><button onClick={() => {setBankTab("country");setBankOpen(true)}}><Glyph name="words"/> VER 120+ PALABRAS</button></header><div>{destinationWords.slice(0,8).map((word,index)=><button key={`${word.es}-${index}`} onClick={()=>addPart(word)}><small>{word.code}</small><b>{word.es}</b><span className="wf-en">{word.en}</span><i>+</i></button>)}</div></section>

        <section className="wf-builder" aria-live="polite">
          <header><div><span>CONSTRUCTOR DE FRASES · SENTENCE BUILDER</span><h2>Tocá palabras. Armá tu respuesta.</h2><p className="wf-en">Tap words. Build your answer.</p></div><div><button disabled={!answerParts.length} onClick={() => speak(answerEs)}><Glyph name="sound"/> ESCUCHAR</button><button disabled={!answerParts.length} onClick={() => setAnswerParts([])}><Glyph name="clear"/> BORRAR</button></div></header>
          <div className={`wf-answer ${answerParts.length ? "ready" : ""}`}>{answerParts.length ? answerParts.map((part, index) => <button key={`${part.es}-${index}`} onClick={() => setAnswerParts(parts => parts.filter((_, itemIndex) => index !== itemIndex))}><b>{part.es.replace(/[.…]+/g, "")}</b><small className="wf-en">{part.en.replace(/[.…]+/g, "")}</small></button>) : <p><b>Tu respuesta aparece acá…</b><span className="wf-en">Your answer appears here…</span></p>}</div>
          {answerParts.length > 0 && <div className="wf-readout"><b>{answerEs}</b><span className="wf-en">{answerEn}</span></div>}
        </section>

        <nav className="wf-question-nav"><button disabled={question === 0} onClick={() => changeQuestion(question - 1)}>← ANTERIOR · PREVIOUS</button><div>{questions.map((_, index) => <button key={index} className={question === index ? "active" : ""} onClick={() => changeQuestion(index)} aria-label={`Pregunta ${index + 1}`}>{index + 1}</button>)}</div><button onClick={() => question === 9 ? surprise() : changeQuestion(question + 1)}>{question === 9 ? "NUEVO PAÍS · NEW COUNTRY →" : "SIGUIENTE · NEXT →"}</button></nav>
      </div>

      <button className="wf-bank-fab" onClick={()=>setBankOpen(true)} aria-expanded={bankOpen}><Glyph name="words"/><span><b>WORDBANK</b><small>ABRIR SIN BAJAR · OPEN NOW</small></span><i>120+</i></button>
      {bankOpen&&<div className="wf-bank-overlay" onMouseDown={()=>setBankOpen(false)}><aside className="wf-bank-drawer" role="dialog" aria-modal="true" aria-label="Wordbank bilingüe" onMouseDown={event=>event.stopPropagation()}>
        <header><div><span>WORDBANK SIEMPRE A MANO · ALWAYS READY</span><h2>{active.country}: hablá sin buscar.</h2><p className="wf-en">Tap any word. It goes directly to your answer.</p></div><button onClick={()=>setBankOpen(false)} aria-label="Cerrar wordbank">×</button></header>
        <label className="wf-bank-search"><span>⌕</span><input autoFocus value={bankQuery} onChange={event=>setBankQuery(event.target.value)} placeholder="Buscar español o inglés · Search Spanish or English"/><button disabled={!bankQuery} onClick={()=>setBankQuery("")}>BORRAR</button></label>
        <nav className="wf-drawer-tabs">{bankCatalog.map(group=><button key={group.id} className={bankTab===group.id&&!normalizedBankQuery?"active":""} onClick={()=>{setBankTab(group.id);setBankQuery("")}}><span>{group.code}</span><b>{group.label.es}</b><small className="wf-en">{group.label.en}</small></button>)}</nav>
        <div className="wf-drawer-results">{visibleBankGroups.length?visibleBankGroups.map(group=><section key={group.id}><header><span>{group.code}</span><div><b>{group.label.es}</b><small className="wf-en">{group.label.en}</small></div><i>{group.words.length}</i></header><div>{group.words.map((word,index)=><button key={`${group.id}-${word.es}-${index}`} onClick={()=>addPart(word)}><b>{word.es}</b><small className="wf-en">{word.en}</small><i>+</i></button>)}</div></section>):<div className="wf-bank-empty"><b>No aparece esa palabra.</b><span>Probá otra búsqueda. · Try another search.</span></div>}</div>
        <footer><div><span>RESPUESTA ACTUAL · CURRENT ANSWER</span><b>{answerEs||"Todavía vacía…"}</b><small className="wf-en">{answerEn||"Still empty…"}</small></div><div><button disabled={!answerParts.length} onClick={()=>setAnswerParts([])}><Glyph name="clear"/> BORRAR</button><button onClick={()=>setBankOpen(false)}>LISTO · DONE →</button></div></footer>
      </aside></div>}
    </section>}
  </main>;
}
