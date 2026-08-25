"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
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
type Question = { prompt: Pair; starter: Pair; choices: Pair[]; follow: Pair };
type GlyphName = "map" | "shuffle" | "sound" | "clear" | "home" | "plus" | "compass" | "words";

const continents: Array<"Todos" | Continent> = ["Todos", "América", "Europa", "África", "Asia", "Oceanía", "Antártida"];
const yesNo = [{ es: "Sí", en: "Yes" }, { es: "No", en: "No" }, { es: "Tal vez", en: "Maybe" }];

function questionsFor(place: Destination): Question[] {
  return [
    {prompt:{es:`¿Querés visitar ${place.landmark.es}?`,en:`Do you want to visit ${place.landmark.en}?`},starter:{es:"Sí, quiero visitar…",en:"Yes, I want to visit…"},choices:yesNo,follow:{es:"¿Con quién?",en:"With whom?"}},
    {prompt:{es:`¿Querés probar ${place.food.es}?`,en:`Do you want to try ${place.food.en}?`},starter:{es:"Quiero probar…",en:"I want to try…"},choices:[{es:"Sí, por favor",en:"Yes, please"},{es:"No, gracias",en:"No, thank you"},{es:"Un poco",en:"A little"}],follow:{es:"¿Dulce o salado?",en:"Sweet or salty?"}},
    {prompt:{es:`¿Preferís ${place.nature.es} o ${place.culture.es}?`,en:`Do you prefer ${place.nature.en} or ${place.culture.en}?`},starter:{es:"Prefiero…",en:"I prefer…"},choices:[place.nature,place.culture],follow:{es:"¿Por qué?",en:"Why?"}},
    {prompt:{es:`¿Querés ver ${place.animal.es}?`,en:`Do you want to see ${place.animal.en}?`},starter:{es:"Sí, quiero ver…",en:"Yes, I want to see…"},choices:yesNo,follow:{es:"¿Una foto: sí o no?",en:"A photo: yes or no?"}},
    {prompt:{es:`¿Viajás ${place.transport.es} o en avión?`,en:`Do you travel ${place.transport.en} or by plane?`},starter:{es:"Viajo…",en:"I travel…"},choices:[place.transport,{es:"en avión",en:"by plane"},{es:"a pie",en:"on foot"}],follow:{es:"¿Rápido o lento?",en:"Fast or slow?"}},
    {prompt:{es:`En ${place.country}, ${place.climate.es}. ¿Te gusta?`,en:`In ${place.countryEn}, ${place.climate.en}. Do you like it?`},starter:{es:"Sí, me gusta…",en:"Yes, I like…"},choices:[{es:"Me gusta",en:"I like it"},{es:"No me gusta",en:"I do not like it"},{es:"Está bien",en:"It is OK"}],follow:{es:"¿Calor o frío?",en:"Hot or cold?"}},
    {prompt:{es:`¿Con quién viajás a ${place.country}?`,en:`Who do you travel to ${place.countryEn} with?`},starter:{es:"Viajo con…",en:"I travel with…"},choices:[{es:"un amigo / una amiga",en:"a friend"},{es:"mi familia",en:"my family"},{es:"mi pareja",en:"my partner"},{es:"solo / sola",en:"alone"}],follow:{es:"¿Una persona o muchas?",en:"One person or many?"}},
    {prompt:{es:`¿Cuántos días querés estar en ${place.country}?`,en:`How many days do you want to be in ${place.countryEn}?`},starter:{es:"Quiero estar…",en:"I want to be there…"},choices:[{es:"dos días",en:"two days"},{es:"cuatro días",en:"four days"},{es:"una semana",en:"one week"}],follow:{es:"¿Es suficiente?",en:"Is it enough?"}},
    {prompt:{es:`En ${place.country} dicen “${place.greeting.es}”. ¿Podés decirlo?`,en:`In ${place.countryEn} they say “${place.greeting.en}”. Can you say it?`},starter:{es:`Hola: ${place.greeting.es}.`,en:`Hello: ${place.greeting.en}.`},choices:[{es:"Sí, puedo",en:"Yes, I can"},{es:"Otra vez, por favor",en:"Again, please"},{es:"Más despacio",en:"More slowly"}],follow:{es:"¿Cómo saludás en tu idioma?",en:"How do you say hello in your language?"}},
    {prompt:{es:`Llegás a ${place.country}. ¿Qué hacés primero?`,en:`You arrive in ${place.countryEn}. What do you do first?`},starter:{es:"Primero…",en:"First…"},choices:[{es:`visito ${place.landmark.es}`,en:`I visit ${place.landmark.en}`},{es:`pruebo ${place.food.es}`,en:`I try ${place.food.en}`},{es:`veo ${place.animal.es}`,en:`I see ${place.animal.en}`}],follow:{es:"¿Y después?",en:"And then?"}},
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
  const [openBank, setOpenBank] = useState("verbos");

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

  const show = (next: Screen) => { setScreen(next); window.scrollTo({top:0,behavior:"smooth"}); };
  const enter = (place: Destination, start = 0) => { setActive(place); setAtlasPick(place); setQuestion(start); setAnswerParts([]); setVisited(previous => new Set([...previous, place.id])); show("destination"); };
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

    {screen === "destination" && <section className="wf-world" style={{"--place":active.color,"--continent":continentColors[active.continent]} as CSSProperties}>
      <header className="wf-world-hero">
        <Sky/>
        <div className="wf-world-top"><button onClick={() => show("atlas")}>← MAPA · MAP</button><span>MUNDO {active.number} · {active.continent}</span><div><button className={englishVisible ? "active" : ""} onClick={() => setEnglishVisible(value => !value)}>EN {englishVisible ? "ON" : "OFF"}</button><button onClick={surprise}><Glyph name="shuffle"/> OTRO PAÍS</button></div></div>
        <div className="wf-world-copy"><small>{active.continent} · {continentEnglish[active.continent]}</small><h1>{active.country}</h1><h2>{active.countryEn}</h2><p><b>{active.title.es}</b><span className="wf-en">{active.title.en}</span></p><div className="wf-world-facts"><span><small>CAPITAL</small>{active.capital.es}</span><span><small>HOLA</small>{active.greeting.es}</span><span><small>CLIMA</small>{active.climate.es}</span></div></div>
        <div className="wf-world-map" aria-hidden="true"><img src="/world-map.svg" alt=""/><Crest place={active}/><i/><i/></div>
      </header>

      <div className="wf-classroom">
        <section className="wf-rule"><span>A0 REAL · REAL A0</span><b>Una palabra es una respuesta. Una mini frase es una victoria.</b><em className="wf-en">One word is an answer. One tiny sentence is a victory.</em></section>

        <section className="wf-question-stage">
          <div className="wf-question-count"><span>PREGUNTA · QUESTION</span><b>{String(question + 1).padStart(2,"0")} <i>/ 10</i></b></div>
          <div className="wf-question-copy"><small>{active.country} · {active.countryEn}</small><h2>{current.prompt.es}</h2><p className="wf-en">{current.prompt.en}</p><button onClick={() => speak(current.prompt.es)}><Glyph name="sound"/> ESCUCHAR LENTO · LISTEN SLOWLY</button></div>
          <div className="wf-question-crest"><Crest place={active}/><i/><i/></div>
        </section>

        <section className="wf-support">
          <button className="wf-starter" onClick={() => addPart(current.starter)}><span>1 · EMPEZÁ ASÍ · START</span><b>{current.starter.es}</b><em className="wf-en">{current.starter.en}</em><i><Glyph name="plus"/> AGREGAR</i></button>
          <article className="wf-choices"><span>2 · ELEGÍ · CHOOSE</span><div>{current.choices.map((choice, index) => <button key={`${choice.es}-${index}`} onClick={() => addPart(choice)}><b>{choice.es}</b><small className="wf-en">{choice.en}</small><i>+</i></button>)}</div></article>
          <article className="wf-follow"><span>3 · UNA MÁS · ONE MORE</span><b>{current.follow.es}</b><em className="wf-en">{current.follow.en}</em></article>
        </section>

        <section className="wf-builder" aria-live="polite">
          <header><div><span>CONSTRUCTOR DE FRASES · SENTENCE BUILDER</span><h2>Tocá palabras. Armá tu respuesta.</h2><p className="wf-en">Tap words. Build your answer.</p></div><div><button disabled={!answerParts.length} onClick={() => speak(answerEs)}><Glyph name="sound"/> ESCUCHAR</button><button disabled={!answerParts.length} onClick={() => setAnswerParts([])}><Glyph name="clear"/> BORRAR</button></div></header>
          <div className={`wf-answer ${answerParts.length ? "ready" : ""}`}>{answerParts.length ? answerParts.map((part, index) => <button key={`${part.es}-${index}`} onClick={() => setAnswerParts(parts => parts.filter((_, itemIndex) => index !== itemIndex))}><b>{part.es.replace(/[.…]+/g, "")}</b><small className="wf-en">{part.en.replace(/[.…]+/g, "")}</small></button>) : <p><b>Tu respuesta aparece acá…</b><span className="wf-en">Your answer appears here…</span></p>}</div>
          {answerParts.length > 0 && <div className="wf-readout"><b>{answerEs}</b><span className="wf-en">{answerEn}</span></div>}
        </section>

        <section className="wf-local-bank"><header><span>WORDBANK DEL PAÍS · COUNTRY WORDBANK</span><h2>Las 10 palabras de este mundo.</h2><p className="wf-en">The 10 key words for this world. Tap to use them.</p></header><div>{destinationWords.map((word, index) => <button key={`${word.es}-${index}`} onClick={() => addPart(word)}><span>{word.code}</span><small>{word.label.es}<i className="wf-en"> · {word.label.en}</i></small><b>{word.es}</b><em className="wf-en">{word.en}</em><i>+</i></button>)}</div></section>

        <section className="wf-toolkit"><header><span>BOTIQUÍN A0 · A0 TOOLKIT</span><h2>Frases pequeñas que sirven en todo el mundo.</h2><p className="wf-en">Tiny phrases that work everywhere.</p></header><div>{answerTools.map((tool, index) => <button key={`${tool.es}-${index}`} onClick={() => addPart(tool)}><b>{tool.es}</b><span className="wf-en">{tool.en}</span><i>+</i></button>)}</div></section>

        <section className="wf-mega-bank"><header><div><span>WORDBANK COMPLETO A0 · COMPLETE A0 WORDBANK</span><h2>Todo el vocabulario esencial, por categorías.</h2><p className="wf-en">All essential vocabulary, organised by category.</p></div><b>120+ PALABRAS</b></header><div className="wf-bank-groups">{megaWordbank.map(group => <article key={group.id} className={openBank === group.id ? "open" : ""}><button className="wf-bank-title" onClick={() => setOpenBank(openBank === group.id ? "" : group.id)}><span>{group.code}</span><b>{group.label.es}<small className="wf-en">{group.label.en}</small></b><i>{group.words.length} {openBank === group.id ? "−" : "+"}</i></button>{openBank === group.id && <div>{group.words.map((word, index) => <button key={`${word.es}-${index}`} onClick={() => addPart(word)}><b>{word.es}</b><small className="wf-en">{word.en}</small><i>+</i></button>)}</div>}</article>)}</div></section>

        <nav className="wf-question-nav"><button disabled={question === 0} onClick={() => changeQuestion(question - 1)}>← ANTERIOR · PREVIOUS</button><div>{questions.map((_, index) => <button key={index} className={question === index ? "active" : ""} onClick={() => changeQuestion(index)} aria-label={`Pregunta ${index + 1}`}>{index + 1}</button>)}</div><button onClick={() => question === 9 ? surprise() : changeQuestion(question + 1)}>{question === 9 ? "NUEVO PAÍS · NEW COUNTRY →" : "SIGUIENTE · NEXT →"}</button></nav>
      </div>
    </section>}
  </main>;
}
