"use client";

import { useMemo, useState, type CSSProperties } from "react";
import "./style.css";
import { districts, speakingTools, type District } from "./data";

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
      <span className="fc-stage-vapor stage-vapor-a" /><span className="fc-stage-vapor stage-vapor-b" />
    </div>
  );
}

export default function FutureCity() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [active, setActive] = useState<District | null>(null);
  const [question, setQuestion] = useState(0);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const progress = Math.round((visited.size / districts.length) * 100);

  const currentIndex = useMemo(
    () => (active ? districts.findIndex((district) => district.id === active.id) : 0),
    [active]
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
        <a href="/" className="fc-brand" aria-label="Volver a CHESPANISH">
          <span><img src="/chespanish-guide-avatar.png" alt="" /></span>
          <b>CHESPANISH</b>
        </a>
        <div className="fc-nav-center" aria-label="Progreso de la ciudad">
          <span>CIUDAD EXPLORADA</span>
          <i><b style={{ width: `${progress}%` }} /></i>
          <strong>{visited.size} / {districts.length}</strong>
        </div>
        <button onClick={() => show(screen === "cover" ? "map" : "cover")}>
          {screen === "cover" ? "VER MAPA" : "INICIO"}
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
            <div className="fc-kicker"><span>B1</span> CONVERSACIÓN · URBAN LAB</div>
            <p className="fc-year">AÑO 2076 · LA CIUDAD TE ESTÁ ESPERANDO</p>
            <h1>LA CIUDAD<br /><em>DEL FUTURO</em></h1>
            <p className="fc-cover-lead">
              No venís a adivinar qué tecnología existirá. Venís a decidir cómo queremos vivir.
              Entrá a 12 edificios realistas, elegí una puerta y enfrentá preguntas que no aparecen en una clase normal.
            </p>
            <div className="fc-cover-actions">
              <button onClick={() => show("map")}>ENTRAR A LA CIUDAD <span>→</span></button>
              <small>Future City · 48 preguntas bilingües</small>
            </div>
            <div className="fc-cover-stats">
              <article><b>12</b><span>edificios humanos</span></article>
              <article><b>48</b><span>preguntas WOW</span></article>
              <article><b>1</b><span>solo distrito TECH</span></article>
            </div>
          </div>
          <div className="fc-floating-label label-one" aria-hidden="true"><b>HUMANIDAD</b><span>antes que tecnología</span></div>
          <div className="fc-floating-label label-two" aria-hidden="true"><b>2076</b><span>¿qué conservarías?</span></div>
          <button className="fc-scroll-cue" onClick={() => show("map")} aria-label="Entrar a la ciudad"><span>↓</span> EXPLORAR</button>
        </section>
      )}

      {screen === "map" && (
        <section className="fc-map-page">
          <header className="fc-page-head">
            <div>
              <span>DISTRITO CENTRAL · B1</span>
              <h1>Elegí un edificio.<br />Cambiá la ciudad.</h1>
            </div>
            <div className="fc-map-intro">
              <p>Cada edificio abre un tema distinto. <b>Solo uno es TECH:</b> los otros once hablan de tiempo, salud, comida, poder, vínculos, migración y vida real.</p>
              <button onClick={randomDistrict}>SORPRENDEME <span>↗</span></button>
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
                  <i>ENTRAR AL EDIFICIO <strong>→</strong></i>
                </span>
              </button>
            ))}
          </div>

          <section className="fc-city-rule">
            <span>REGLA DE LA CIUDAD</span>
            <p>No busques la respuesta correcta. <b>Diseñá una respuesta posible, encontrá el problema que crea y mejorala.</b></p>
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
              <button onClick={() => show("map")}>← MAPA DE LA CIUDAD</button>
              <span>EDIFICIO {active.number} / {districts.length}</span>
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
                <div><span>01 · ELEGÍ UNA PUERTA</span><h2>¿Qué pregunta querés abrir?</h2></div>
                <p>Son B1 de verdad: claras para entender, difíciles de responder.</p>
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
                <div className="fc-stage-label"><span>PREGUNTA {question + 1}</span><b>B1 · 3–5 MIN</b></div>
                <h2>{active.questions[question].es}</h2>
                <p>{active.questions[question].en}</p>
                <aside>
                  <span>GIRO WOW</span>
                  <b>{active.questions[question].challenge}</b>
                </aside>
              </div>
            </section>

            <section className="fc-language-lab">
              <div className="fc-vocab">
                <header><span>02</span><div><small>PALABRAS DEL EDIFICIO</small><h2>Vocabulario útil</h2></div></header>
                <div>{active.vocabulary.map(([es, en]) => <article key={es}><b>{es}</b><span>{en}</span></article>)}</div>
              </div>
              <div className="fc-tools">
                <header><span>03</span><div><small>NO TE QUEDES EN BLANCO</small><h2>Herramientas B1</h2></div></header>
                <div>{speakingTools.map(([es, en]) => <article key={es}><b>{es}</b><span>{en}</span></article>)}</div>
              </div>
            </section>

            <section className="fc-answer-formula">
              <span>FÓRMULA PARA UNA RESPUESTA WOW</span>
              <div><b>POSTURA</b><i>→</i><b>RAZÓN</b><i>→</i><b>EJEMPLO</b><i>→</i><b>CONSECUENCIA INESPERADA</b></div>
              <p>“Yo lo haría porque… Un ejemplo sería… Sin embargo, el riesgo es que…”</p>
            </section>

            <footer className="fc-district-nav">
              <button onClick={() => moveDistrict(-1)}>← EDIFICIO ANTERIOR</button>
              <button onClick={randomDistrict}>EDIFICIO AL AZAR ↗</button>
              <button onClick={() => moveDistrict(1)}>SIGUIENTE EDIFICIO →</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}
