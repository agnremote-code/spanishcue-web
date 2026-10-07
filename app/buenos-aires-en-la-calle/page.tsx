"use client";
import { ConversationFamily } from "../conversation-families/ConversationFamily";
import { COUNTRY_LEVELS, countryActivity, countrySupport } from "../conversation-families/country-levels";
import { CountryTools, CountryClosing } from "../conversation-families/country-tools";
import type { CEFRLevel } from "../conversation-families/types";


import { useMemo, useState } from "react";
import Link from "next/link";
import { calmPlan, openPrompts, stops, type CityStop } from "./data";
import "./style.css";

type Screen = "intro" | "map" | "place";

function Brand() {
  return <Link className="ba-brand" href="/" aria-label="Volver a SPANISHCUE / Return to SPANISHCUE"><span>SC</span><b>SPANISHCUE</b><small>BUENOS AIRES · A2</small></Link>;
}

function Scene({ stop }: { stop: CityStop }) {
  const positions = ["0% 0%", "100% 0%", "0% 100%", "100% 100%"];
  return <div className={`ba-scene ba-atlas-${stop.atlas}`} style={{ backgroundPosition: positions[stop.tile - 1] }} role="img" aria-label={`Escena tridimensional: ${stop.title}`}>
    <div className="ba-scene-depth" />
    <div className="ba-scene-light ba-scene-light-a" />
    <div className="ba-scene-light ba-scene-light-b" />
    <div className="ba-scene-vignette" />
  </div>;
}

function PortalThumb({ stop }: { stop: CityStop }) {
  const positions = ["0% 0%", "100% 0%", "0% 100%", "100% 100%"];
  return <span className={`ba-portal-thumb ba-atlas-${stop.atlas}`} style={{ backgroundPosition: positions[stop.tile - 1] }} aria-hidden="true"><i /><em /></span>;
}

export default function BuenosAiresEnLaCalle(){
 return <ConversationFamily id="buenos-aires-en-la-calle" title="Buenos Aires en la calle" levels={COUNTRY_LEVELS} defaultLevel="A2">{level=><CountryExperience key={level} level={level}/>}</ConversationFamily>;
}
function CountryExperience({level}:{level:CEFRLevel}){
  const [screen, setScreen] = useState<Screen>("intro");
  const [selectedId, setSelectedId] = useState(stops[0].id);
  const [calm, setCalm] = useState(true);
  const [english, setEnglish] = useState(true);
  const [visited, setVisited] = useState<string[]>([]);
  const nativeSelected = useMemo(() => stops.find(stop => stop.id === selectedId) || stops[0], [selectedId]);
  const context={name:nativeSelected.title,places:[{es:nativeSelected.title,en:nativeSelected.title}],words:nativeSelected.words,source:nativeSelected.prompts};
  const support=countrySupport(level,context);
  const selected=level==="A2"?nativeSelected:{...nativeSelected,prompts:nativeSelected.prompts.map((item,index)=>{const activity=countryActivity(level,context,index);return {...item,es:activity.es,en:activity.en,starter:activity.starter.es+" / "+activity.starter.en};}),dialogues:nativeSelected.dialogues.map((_,index)=>{const activity=countryActivity(level,context,index);return {a:activity.es,b:activity.model.es,en:activity.en+" — "+activity.model.en};}),mission:support.challenge.es+" / "+support.challenge.en};
  const openPrompt=level==="A2"?openPrompts[selected.id]:{intro:support.tip.es,introEn:support.tip.en,question:support.challenge.es,questionEn:support.challenge.en,starter:support.starters[0].es+" / "+support.starters[0].en};

  const openStop = (id: string) => {
    setSelectedId(id);
    setScreen("place");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const complete = () => {
    setVisited(current => current.includes(selected.id) ? current : [...current, selected.id]);
    setScreen("map");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const visibleWords = calm ? selected.words.slice(0, 3) : selected.words;
  const visibleDialogues = calm ? selected.dialogues.slice(0, 1) : selected.dialogues;
  const visiblePrompts = calm ? selected.prompts.slice(0, 1) : selected.prompts;

  return <main className={`ba-app ${calm ? "ba-calm" : "ba-full"}`}>
    <nav className="ba-nav">
      <Brand />
      <div className="ba-nav-center"><b>{visited.length}</b><span>de 16 lugares recorridos<span className="country-a0-en" lang="en"> / of 16 places explored</span></span><i><em style={{ width: `${visited.length / stops.length * 100}%` }} /></i></div>
      <div className="ba-tools">
        <button className={calm ? "active" : ""} onClick={() => setCalm(value => !value)}><span className="ba-switch" />{calm ? "HOY VOY TRANQUI / RELAXED PRACTICE" : "PRÁCTICA COMPLETA / FULL PRACTICE"}</button>
        <button className={english ? "active" : ""} disabled={level==="A0"} onClick={() => setEnglish(value => !value)}><span className="ba-switch" />ENGLISH HELP</button>
      </div>
    </nav>

    {screen === "intro" && <section className="ba-cover">
      <div className="ba-cover-image" role="img" aria-label="Vista aérea tridimensional de Buenos Aires de noche"><div className="ba-cover-scan" /><div className="ba-cover-glow" /></div>
      <div className="ba-cover-copy">
        <span className="ba-kicker">EVERYDAY HOLIDAY SPANISH · A2</span>
        <h1>BUENOS AIRES<br /><em>EN LA CALLE</em></h1>
        <p>Una ciudad viva para hablar sin presión. Entra, resuelve una situación cotidiana y sigue paseando.<span className="country-a0-en" lang="en"> / A living city for speaking without pressure. Enter, handle an everyday situation and keep exploring.</span></p>
        {(level==="A0"||english) && <p className="ba-english">A low-key holiday lesson for a hard day: useful words, short answers and no pressure to be perfect.</p>}
        <div className="ba-cover-actions"><button onClick={() => setScreen("map")}>ENTRAR A LA CIUDAD<span className="country-a0-en" lang="en"> / ENTER THE CITY</span> <span>→</span></button><small>16 lugares · español rioplatense · traducciones opcionales<span className="country-a0-en" lang="en"> / 16 places · River Plate Spanish · optional translations</span></small></div>
      </div>
      <aside className="ba-calm-card"><span>PLAN TRANQUILO<span className="country-a0-en" lang="en"> / RELAXED PLAN</span></span>{calmPlan.map((line, index) => <p key={line}><b>0{index + 1}</b>{line}<span className="country-a0-en" lang="en"> / {["Choose just four places.","Use translations whenever you need them.","Answer with a short sentence.","Repeat the phrase that will help you most on your trip."][index]}</span></p>)}</aside>
      <div className="ba-cover-stats"><div><b>16</b><span>lugares<span className="country-a0-en" lang="en"> / places</span></span></div><div><b>48</b><span>frases reales<span className="country-a0-en" lang="en"> / real phrases</span></span></div><div><b>A2</b><span>sin presión<span className="country-a0-en" lang="en"> / without pressure</span></span></div></div>
    </section>}

    {screen === "map" && <section className="ba-map-page">
      <header className="ba-map-head"><div><span>MAPA 3D · ELIGE TU PRÓXIMA PARADA<span className="country-a0-en" lang="en"> / 3D MAP · CHOOSE YOUR NEXT STOP</span></span><h1>La ciudad está despierta.<span className="country-a0-en" lang="en"> / The city is awake.</span></h1><p>Hoy no necesitas hacer todo. Elige cuatro lugares que realmente usarías durante tus vacaciones.<span className="country-a0-en" lang="en"> / You do not need to do everything today. Choose four places you would use on holiday.</span></p></div><button onClick={() => setScreen("intro")}>VER PORTADA<span className="country-a0-en" lang="en"> / VIEW COVER</span></button></header>
      <div className="ba-city-frame">
        <div className="ba-city-image" role="img" aria-label="Mapa tridimensional interactivo de Buenos Aires / Interactive 3D map of Buenos Aires">
          <div className="ba-city-pan" />
          <div className="ba-city-lights" />
          {stops.map(stop => <button key={stop.id} className={`ba-pin ${visited.includes(stop.id) ? "visited" : ""}`} style={{ left: `${stop.position.x}%`, top: `${stop.position.y}%` }} onClick={() => openStop(stop.id)} aria-label={`Abrir ${stop.title}`}><PortalThumb stop={stop} /><b>{stop.title}</b></button>)}
        </div>
        <div className="ba-map-caption"><span>BUENOS AIRES · NOCHE AZUL</span><p>Mueve la mirada por la ciudad y abre una puerta. Cada miniatura muestra el mundo que vas a encontrar.<span className="country-a0-en" lang="en"> / Explore the city and open a door. Each thumbnail shows the world you will enter.</span></p></div>
      </div>
      <div className="ba-stop-index">{stops.map(stop => <button key={stop.id} className={visited.includes(stop.id) ? "visited" : ""} onClick={() => openStop(stop.id)}><PortalThumb stop={stop} /><div><b>{stop.title}</b><small>{stop.zone} · {stop.english}</small></div><i>→</i></button>)}</div>
    </section>}

    {screen === "place" && <section className="ba-place-page">
      <header className="ba-place-hero">
        <Scene stop={selected} />
        <button className="ba-back" onClick={() => setScreen("map")}>← VOLVER A LA CIUDAD<span className="country-a0-en" lang="en"> / ← RETURN TO THE CITY</span></button>
        <div className="ba-place-number"><small>PARADA<span className="country-a0-en" lang="en"> / STOP</span></small><b>{selected.number}</b></div>
        <div className="ba-place-title"><span>{selected.zone.toUpperCase()} · BUENOS AIRES</span><h1>{selected.title}</h1><p>{selected.hook}</p>{(level==="A0"||english) && <small>{selected.hookEn}</small>}</div>
        <div className="ba-live"><i /><span>ESCENA EN MOVIMIENTO<span className="country-a0-en" lang="en"> / MOVING SCENE</span></span></div>
      </header>

      <div className="ba-lesson-shell">
        <aside className="ba-route-panel"><span>TU RUTA HOY<span className="country-a0-en" lang="en"> / YOUR ROUTE TODAY</span></span><b>{calm ? "Una frase alcanza. / One sentence is enough." : "Práctica completa. / Full practice."}</b><p>{calm ? "3 palabras · 1 diálogo · 1 pregunta básica · 1 conversación abierta / 3 words · 1 dialogue · 1 basic question · 1 open conversation" : "5 palabras · 3 diálogos · 3 preguntas básicas · 1 conversación abierta / 5 words · 3 dialogues · 3 basic questions · 1 open conversation"}</p><button onClick={() => setCalm(value => !value)}>{calm ? "ABRIR TODO / SHOW ALL" : "VOLVER A MODO TRANQUI / RETURN TO RELAXED MODE"}</button><div><small>PORTEÑO PARA EL OÍDO<span className="country-a0-en" lang="en"> / BUENOS AIRES SPANISH TO LISTEN FOR</span></small><strong>{selected.local.es}</strong>{(level==="A0"||english) && <em>{selected.local.en}</em>}<p>{selected.local.note}<span className="country-a0-en" lang="en"> / {selected.local.noteEn}</span></p></div></aside>

        <div className="ba-lesson-content"><CountryTools level={level} context={context}/>
          <section className="ba-block ba-wordbank"><header><span>01</span><div><small>PRIMERO, MIRA<span className="country-a0-en" lang="en"> / FIRST, LOOK</span></small><h2>Palabras que vas a usar<span className="country-a0-en" lang="en"> / Words you will use</span></h2></div></header><div>{visibleWords.map(word => <article key={word.es}><b>{word.es}</b>{(level==="A0"||english) && <span>{word.en}</span>}</article>)}</div></section>

          <section className="ba-block ba-dialogues"><header><span>02</span><div><small>DESPUÉS, ESCUCHA CON LOS OJOS<span className="country-a0-en" lang="en"> / THEN READ THE CONVERSATION</span></small><h2>Así suena en la calle<span className="country-a0-en" lang="en"> / How it sounds in the street</span></h2></div></header><div>{visibleDialogues.map((dialogue, index) => <article key={dialogue.a}><i>{String(index + 1).padStart(2, "0")}</i><p><b>{dialogue.a}</b><strong>{dialogue.b}</strong>{(level==="A0"||english) && <small>{dialogue.en}</small>}</p></article>)}</div></section>

          <section className="ba-block ba-prompts"><header><span>03</span><div><small>AHORA, HABLA<span className="country-a0-en" lang="en"> / NOW SPEAK</span></small><h2>Una pregunta está bien<span className="country-a0-en" lang="en"> / One question is enough</span></h2></div></header><div>{visiblePrompts.map((prompt, index) => <article key={prompt.es}><span>PREGUNTA<span className="country-a0-en" lang="en"> / QUESTION</span> {String(index + 1).padStart(2, "0")}</span><h3>{prompt.es}</h3>{(level==="A0"||english) && <p>{prompt.en}</p>}<div><small>EMPIEZA ASÍ<span className="country-a0-en" lang="en"> / START LIKE THIS</span></small><b>{prompt.starter}</b></div></article>)}</div></section>

          <section className="ba-opinion">
            <div className="ba-opinion-visual"><PortalThumb stop={selected} /><span>CONVERSACIÓN ABIERTA<span className="country-a0-en" lang="en"> / OPEN CONVERSATION</span></span></div>
            <div className="ba-opinion-copy"><small>AL FINAL · PARA HABLAR DE VERDAD<span className="country-a0-en" lang="en"> / AT THE END: START A CONVERSATION</span></small><h2>¿Qué piensas tú?<span className="country-a0-en" lang="en"> / What do you think?</span></h2><p>{openPrompt.intro}</p>{(level==="A0"||english) && <p className="ba-opinion-en">{openPrompt.introEn}</p>}<h3>{openPrompt.question}</h3>{(level==="A0"||english) && <p className="ba-opinion-en">{openPrompt.questionEn}</p>}<div><small>EMPIEZA ASÍ<span className="country-a0-en" lang="en"> / START LIKE THIS</span></small><b>{openPrompt.starter}</b></div></div>
          </section>

          <section className="ba-mission"><div><small>MISIÓN DE VIAJE<span className="country-a0-en" lang="en"> / TRAVEL CHALLENGE</span></small><h2>{selected.mission}</h2><p>No busques una respuesta perfecta. Hazlo con palabras simples, pide que repitan si hace falta y sigue.<span className="country-a0-en" lang="en"> / Do not look for a perfect answer. Use simple words, ask for repetition if needed and keep going.</span></p></div><button onClick={complete}>LISTO, VOLVER AL MAPA<span className="country-a0-en" lang="en"> / DONE, RETURN TO MAP</span> <span>→</span></button></section>
        </div>
      </div>
    </section>}

    <footer className="ba-footer"><span>SPANISHCUE · BUENOS AIRES EN LA CALLE</span><p>Español útil, rioplatense y sin presión.<span className="country-a0-en" lang="en"> / Useful River Plate Spanish without pressure.</span></p></footer>
  <CountryClosing level={level} context={context}/></main>;
}
