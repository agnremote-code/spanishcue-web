"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import {ConversationFamily} from "../conversation-families/ConversationFamily";
import {CEFR_LEVELS,type CEFRLevel} from "../conversation-families/types";
import {WorldSupport} from "../world-speaking/WorldSupport";
import {worldSeeds} from "./world-seeds";

import "./style.css";
import {type District} from "./data";
import {cityVariants} from "./variants";

type Screen = "cover" | "map" | "district";

const cityScenes: Record<string, [string, string, string, string]> = {
  tiempo: ["🕰️", "🌙", "🚲", "☕"],
  mercado: ["♻️", "🛠️", "🧥", "🪴"],
  decisiones: ["🗳️", "🏛️", "📣", "🤝"],
  salud: ["🩺", "🌿", "🚑", "❤️"],
  escuela: ["📚", "🎓", "✏️", "💡"],
  migraciones: ["🚆", "🧳", "🗺️", "🏠"],
  noche: ["🌙", "✨", "🚲", "🎷"],
  vinculos: ["💬", "🫂", "🍽️", "🪴"],
  memoria: ["📷", "🕰️", "🎞️", "🏛️"],
  comida: ["🍲", "🌱", "🥖", "🍅"],
  justicia: ["⚖️", "📜", "🕊️", "🏙️"],
  tech: ["🤖", "🛸", "💡", "📡"],
};

function CityAtmosphere({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`fc-city-atmosphere ${compact ? "compact" : ""}`} aria-hidden="true">
      <span className="fc-vapor vapor-a" /><span className="fc-vapor vapor-b" /><span className="fc-vapor vapor-c" />
      <span className="fc-air-lane lane-a"><i /></span><span className="fc-air-lane lane-b"><i /></span>
      <span className="fc-neon-pulse pulse-a" /><span className="fc-neon-pulse pulse-b" />
    </div>
  );
}

function LivingBalconies({ district, question }: { district: District; question: number }) {
  const icons = cityScenes[district.id] || cityScenes.tech;
  const people = ["🧑🏽", "👩🏻", "👨🏾"];
  return (
    <div className={`fc-living-scene scene-${question + 1}`} aria-hidden="true">
      <div className="fc-live-signal"><i /> EN VIVO · DISTRITO {district.number}</div>
      <div className="fc-scene-orbit"><span>{icons[question]}</span><i /></div>
      <div className="fc-balcony-tower">
        {people.map((person, index) => (
          <div className="fc-balcony" key={person} style={{ "--resident-delay": `${index * .18}s` } as CSSProperties}>
            <span className="fc-balcony-glow" />
            <span className="fc-resident">{person}<b>👋</b></span>
            <i />
          </div>
        ))}
      </div>
      <div className="fc-topic-stream">
        {icons.map((icon, index) => <span key={`${icon}-${index}`} style={{ "--icon-delay": `${index * .55}s` } as CSSProperties}>{icon}</span>)}
      </div>
      <div className="fc-ground-transit"><i /><span>{icons[(question + 2) % icons.length]}</span><b /></div>
      <span className="fc-stage-vapor stage-vapor-a" /><span className="fc-stage-vapor stage-vapor-b" />
    </div>
  );
}

export default function FutureCity(){return <ConversationFamily id="future-city" title="La ciudad del futuro" levels={CEFR_LEVELS} defaultLevel="B1">{level=><FutureCityExperience key={level} level={level}/>}</ConversationFamily>;}
function FutureCityExperience({level}:{level:CEFRLevel}){
 const ui=(es:string,en:string)=>level==='A0'?`${es} · ${en}`:es;
  const {districts,speakingTools}=cityVariants[level];
  const [screen, setScreen] = useState<Screen>("cover");
  const [active, setActive] = useState<District | null>(null);
  const [question, setQuestion] = useState(0);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const progress = Math.round((visited.size / districts.length) * 100);

  const currentIndex = useMemo(
    () => (active ? districts.findIndex((district) => district.id === active.id) : 0),
    [active,districts]
  );

  const show = (next: Screen) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const enterDistrict = (district: District) => {
    setActive(district);
    setQuestion(0);
    setVisited((current) => new Set([...current, district.id]));
    show("district");
  };

  const moveDistrict = (step: number) => {
    const next = districts[(currentIndex + step + districts.length) % districts.length];
    enterDistrict(next);
  };

  const randomDistrict = () => {
    const pool = districts.filter((district) => district.id !== active?.id);
    enterDistrict(pool[Math.floor(Math.random() * pool.length)] || districts[0]);
  };

  return (
    <main className="fc-app">
      <nav className="fc-nav">
        <Link href="/" className="fc-brand" aria-label="Volver a SPANISHCUE">
          <span><img src="/brand/mascot/portrait.webp" alt="" /></span>
          <b>SPANISHCUE</b>
        </Link>
        <div className="fc-nav-center" aria-label="Progreso de la ciudad">
          <span>{ui("CIUDAD EXPLORADA","CITY EXPLORED")}</span>
          <i><b style={{ width: `${progress}%` }} /></i>
          <strong>{visited.size} / {districts.length}</strong>
        </div>
        <button onClick={() => show(screen === "cover" ? "map" : "cover")}>
          {screen === "cover" ? ui("VER MAPA","VIEW MAP") : ui("INICIO","HOME")}
        </button>
      </nav>

      {screen === "cover" && (
        <section className="fc-cover">
          <img
            className="fc-cover-photo"
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2200&q=88"
            alt="Ciudad moderna y realista vista desde una terraza"
          />
          <div className="fc-cover-shade" />
          <div className="fc-scanline" aria-hidden="true" />
          <CityAtmosphere />
          <div className="fc-cover-copy">
            <div className="fc-kicker"><span>{level}</span> {ui("CONVERSACIÓN · URBAN LAB","CONVERSATION · URBAN LAB")}</div>
            <p className="fc-year">{ui("AÑO 2076 · LA CIUDAD TE ESTÁ ESPERANDO","YEAR 2076 · THE CITY IS WAITING")}</p>
            <h1>{ui("LA CIUDAD","THE CITY")}<br /><em>{ui("DEL FUTURO","OF THE FUTURE")}</em></h1>
            <p className="fc-cover-lead">
              {level==="A0"?"Entra a un edificio. Escucha y elige una pieza. / Enter a building. Listen and choose a chunk.":<>No vienes a adivinar qué tecnología existirá. Vienes a decidir cómo queremos vivir. Entra a 12 edificios realistas, elige una puerta y enfrenta preguntas que no aparecen en una clase normal.</>}
            </p>
            {level==="A0"&&<WorldSupport seed={worldSeeds[0]} level={level}/>}<div className="fc-cover-actions">
              <button onClick={() => show("map")}>{ui("ENTRAR A LA CIUDAD","ENTER THE CITY")} <span>→</span></button>
              <small>{ui("Future City · 48 preguntas bilingües","Future City · 48 bilingual questions")}</small>
            </div>
            <div className="fc-cover-stats">
              <article><b>12</b><span>{ui("edificios humanos","human buildings")}</span></article>
              <article><b>48</b><span>{ui("preguntas WOW","WOW questions")}</span></article>
              <article><b>1</b><span>{ui("solo distrito TECH","TECH district only")}</span></article>
            </div>
          </div>
          <div className="fc-floating-label label-one" aria-hidden="true"><b>HUMANIDAD</b><span>antes que tecnología</span></div>
          <div className="fc-floating-label label-two" aria-hidden="true"><b>2076</b><span>¿qué conservarías?</span></div>
          <div className="fc-future-sign" aria-hidden="true"><i /> METRO AÉREO <b>03 MIN</b><span>→</span></div>
          <button className="fc-scroll-cue" onClick={() => show("map")} aria-label="Entrar a la ciudad"><span>↓</span> {ui("EXPLORAR","EXPLORE")}</button>
        </section>
      )}

      {screen === "map" && (
        <section className="fc-map-page">
          <header className="fc-page-head">
            <div>
              <span>{ui("DISTRITO CENTRAL ·","CENTRAL DISTRICT ·")} {level}</span>
              <h1>{ui("Elige un edificio.","Choose a building.")}<br />{ui("Cambia la ciudad.","Change the city.")}</h1>
            </div>
            <div className="fc-map-intro">
              <p>{ui("Cada edificio abre un tema distinto.","Each building opens a different topic.")} <b>{ui("Solo uno es TECH:","Only one is TECH:")}</b> {ui("los otros once hablan de tiempo, salud, comida, poder, vínculos, migración y vida real.","the other eleven explore time, health, food, power, relationships, migration and real life.")}</p>
              <button onClick={randomDistrict}>{ui("SORPRÉNDEME","SURPRISE ME")} <span>↗</span></button>
            </div>
          </header>

          <div className="fc-route-line" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>

          <div className="fc-city-feed" aria-hidden="true">
            <span>CIUDAD EN MOVIMIENTO</span>
            <div><i>TRANSPORTE 24H</i><b>•</b><i>78% ENERGÍA LIMPIA</i><b>•</b><i>12 DISTRITOS CONECTADOS</i><b>•</b><i>HABITANTES EN LÍNEA</i></div>
          </div>

          <div className="fc-building-grid">
            {districts.map((district) => (
              <button
                className={`fc-building ${visited.has(district.id) ? "visited" : ""} ${district.id === "tech" ? "tech" : ""}`}
                key={district.id}
                style={{ "--district": district.accent } as CSSProperties}
                onClick={() => enterDistrict(district)}
              >
                <img src={district.image} alt={district.imageAlt} loading="lazy" />
                <span className="fc-building-shade" />
                <span className="fc-building-number">{district.number}</span>
                <span className="fc-building-status">{visited.has(district.id) ? "VISITADO ✓" : "ABIERTO"}</span>
                <span className="fc-building-life" aria-hidden="true"><b>🧑</b><i>👋</i><em /></span>
                <span className="fc-building-copy">
                  <small>{district.category}</small>
                  <b>{district.name}</b>
                  <em>{district.english}</em>
                  <i>{ui("ENTRAR AL EDIFICIO","ENTER THE BUILDING")} <strong>→</strong></i>
                </span>
              </button>
            ))}
          </div>

          <section className="fc-city-rule">
            <span>{ui("REGLA DE LA CIUDAD","CITY RULE")}</span>
            <p>{level==="A0"?"Escucha un modelo, elige una pieza y habla. / Listen to a model, choose a chunk and speak.":<>No busques la respuesta correcta. <b>Diseña una respuesta posible, encuentra el problema que crea y mejórala.</b></>}</p>
          </section>
        </section>
      )}

      {screen === "district" && active && (
        <section className="fc-district" style={{ "--district": active.accent } as CSSProperties}>
          <header className="fc-district-hero">
            <img src={active.image} alt={active.imageAlt} />
            <span className="fc-district-shade" />
            <CityAtmosphere compact />
            <div className="fc-district-topline">
              <button onClick={() => show("map")}>{ui("← MAPA DE LA CIUDAD","← CITY MAP")}</button>
              <span>{ui("EDIFICIO","BUILDING")} {active.number} / {districts.length}</span>
            </div>
            <div className="fc-district-title">
              <small>{active.category}</small>
              <h1>{active.name}</h1>
              <em>{active.english}</em>
              <p>{active.tagline}</p>
            </div>
            <div className="fc-address">AV. DEL MAÑANA · {active.number.padStart(3, "0")}</div>
          </header>

          <div className="fc-district-body">
            <section className="fc-question-picker">
              <header>
                <div><span>{ui("01 · ELIGE UNA PUERTA","01 · CHOOSE A DOOR")}</span><h2>{ui("¿Qué pregunta quieres abrir?","Which question do you want to open?")}</h2></div>
                <p>Nivel {level} · Elige una pregunta y conversa. / Choose a question and speak.</p>
              </header>
              <div>
                {active.questions.map((item, index) => (
                  <button className={question === index ? "active" : ""} onClick={() => setQuestion(index)} key={item.es}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <b>{item.es}</b>
                    <i>{question === index ? "ABIERTA" : "+"}</i>
                  </button>
                ))}
              </div>
            </section>

            <section className="fc-question-stage" key={`${active.id}-${question}`}>
              <LivingBalconies district={active} question={question} />
              <div className="fc-stage-content">
                <div className="fc-stage-label"><span>{ui("PREGUNTA","QUESTION")} {question + 1}</span><b>{level} · 3–5 MIN</b></div>
                <h2>{active.questions[question].es}</h2>
                <p>{active.questions[question].en}</p>
                <aside>
                  <span>{ui("GIRO WOW","SPEAKING TURN")}</span>
                  <b>{active.questions[question].challenge}</b>
                </aside>
              </div>
            </section>

            <section className="fc-language-lab">
              <div className="fc-vocab">
                <header><span>02</span><div><small>{ui("PALABRAS DEL EDIFICIO","WORDS FOR THIS BUILDING")}</small><h2>{ui("Vocabulario útil","Useful vocabulary")}</h2></div></header>
                <div>{active.vocabulary.map(([es, en]) => <article key={es}><b>{es}</b><span>{en}</span></article>)}</div>
              </div>
              <div className="fc-tools">
                <header><span>03</span><div><small>{ui("NO TE QUEDES EN BLANCO","HELP TO KEEP SPEAKING")}</small><h2>{ui("Herramientas","Tools")} {level}</h2></div></header>
                <div>{speakingTools.map(([es, en]) => <article key={es}><b>{es}</b><span>{en}</span></article>)}</div>
              </div>
            </section>

            <WorldSupport key={active.id} seed={worldSeeds[currentIndex]} level={level}/>
            {level==="B1"&&<section className="fc-answer-formula">
              <span>FÓRMULA PARA UNA RESPUESTA WOW</span>
              <div><b>POSTURA</b><i>→</i><b>RAZÓN</b><i>→</i><b>EJEMPLO</b><i>→</i><b>CONSECUENCIA INESPERADA</b></div>
              <p>“Yo lo haría porque… Un ejemplo sería… Sin embargo, el riesgo es que…”</p>
            </section>

            }<footer className="fc-district-nav">
              <button onClick={() => moveDistrict(-1)}>{ui("← EDIFICIO ANTERIOR","← PREVIOUS BUILDING")}</button>
              <button onClick={randomDistrict}>{ui("EDIFICIO AL AZAR ↗","RANDOM BUILDING ↗")}</button>
              <button onClick={() => moveDistrict(1)}>{ui("SIGUIENTE EDIFICIO →","NEXT BUILDING →")}</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}
