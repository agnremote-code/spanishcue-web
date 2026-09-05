"use client";

import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import type { GrammarWorldData } from "./data";
import "./style.css";

export default function GrammarWorld({ data }: { data: GrammarWorldData }) {
  const [activeStation, setActiveStation] = useState(0);
  const [visited, setVisited] = useState<number[]>([0]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const station = data.stations[activeStation];
  const score = useMemo(
    () => data.practice.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0),
    [answers, data.practice]
  );
  const progress = Math.round((visited.length / data.stations.length) * 100);
  const theme = { "--gw-accent": data.accent, "--gw-accent-2": data.accent2 } as CSSProperties;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") openStation(Math.min(activeStation + 1, data.stations.length - 1));
      if (event.key === "ArrowLeft") openStation(Math.max(activeStation - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeStation, data.stations.length]);

  const openStation = (index: number) => {
    setActiveStation(index);
    setVisited(items => (items.includes(index) ? items : [...items, index]));
  };

  const begin = () => document.getElementById(data.world ? "gw-world" : "gw-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const enterStation = () => document.getElementById("gw-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const practiceComplete = Object.keys(answers).length === data.practice.length;

  return (
    <main className={`gw-app gw-${data.motif}`} style={theme}>
      <header className="gw-nav">
        <button className="gw-back" onClick={() => window.location.assign("/")} aria-label="Volver a la biblioteca">←</button>
        <a className="gw-brand" href="/" aria-label="CHESPANISH, inicio"><span>CH</span><b>CHESPANISH</b><small>GRAMMAR WORLDS</small></a>
        <div className="gw-progress"><span>DOMINIO DEL MÓDULO</span><i><b style={{ width: `${progress}%` }} /></i><strong>{progress}%</strong></div>
        <button className="gw-index" onClick={() => document.getElementById("gw-map")?.scrollIntoView({ behavior: "smooth" })}>VER RECORRIDO</button>
      </header>

      <section className="gw-hero" ref={heroRef}>
        <img className="gw-hero-image" src={data.hero} alt="" />
        <div className="gw-depth gw-depth-one" />
        <div className="gw-depth gw-depth-two" />
        <div className="gw-ambient" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div>
        <div className="gw-hero-shade" />
        <div className="gw-hero-copy">
          <span className="gw-module">{data.module}</span>
          <span className="gw-official-topic"><small>NOMBRE EXACTO DEL TEMA · PCIC</small><b>{data.officialTopic}</b></span>
          <h1>{data.displayTitle.split("\n").map((line, index) => <span key={line} className={index ? "gw-title-accent" : ""}>{line}</span>)}</h1>
          <p className="gw-subtitle">{data.subtitle}</p>
          <p className="gw-intro">{data.intro}</p>
          <div className="gw-actions"><button onClick={begin}>ENCENDER EL RECORRIDO <span>→</span></button><small>{data.duration} · NIVEL {data.level}</small></div>
        </div>
        <div className="gw-overview">{data.overview.map(item => <div key={item.label}><small>{item.label}</small><b>{item.value}</b></div>)}</div>
        <div className="gw-scroll">DESLIZÁ PARA ENTRAR <span /></div>
      </section>

      {data.world && <section className="gw-world" id="gw-world">
        <header><span>{data.world.eyebrow}</span><h2>{data.world.title}</h2><p>{data.world.instruction}</p></header>
        <div className="gw-world-frame">
          <div className="gw-world-scene" aria-hidden="true"><img src={data.hero} alt="" /><i /><b /></div>
          <div className="gw-world-status"><span>ESTACIÓN ACTIVA</span><strong>{station.number} · {station.title}</strong><small>{visited.length} de {data.stations.length} exploradas</small></div>
        </div>
        <div className="gw-world-console" aria-label="Mapa de estaciones">
          {data.stations.map((item, index) => <button key={item.id} className={index === activeStation ? "active" : ""} onClick={() => openStation(index)} aria-pressed={index === activeStation}>
            <span>{item.number}</span><div><small>{item.kicker}</small><b>{item.title}</b></div><i>{visited.includes(index) ? "LISTA" : "ABRIR"}</i>
          </button>)}
        </div>
        <button className="gw-world-enter" onClick={enterStation}>{data.world.enterLabel}<span>→</span></button>
      </section>}

      <section className="gw-foundation">
        <div className="gw-section-label"><span>00</span><small>{data.bigIdea.eyebrow}</small></div>
        <div className="gw-foundation-copy"><h2>{data.bigIdea.title}</h2><p>{data.bigIdea.body}</p></div>
        <div className="gw-contrast-grid">{data.bigIdea.contrast.map((item, index) => <article key={item.value}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.label}</small><b>{item.value}</b><em>{item.detail}</em></article>)}</div>
      </section>

      {data.curriculum && <section className="gw-curriculum">
        <div><span>COBERTURA CURRICULAR</span><h2>{data.officialTopic}</h2><p>El título creativo presenta el mundo; este es el contenido gramatical exacto que se trabaja.</p></div>
        <article><small>NÚCLEO A1</small>{data.curriculum.a1.map(item => <p key={item}><i />{item}</p>)}</article>
        <article><small>PUENTE A2</small>{data.curriculum.a2.map(item => <p key={item}><i />{item}</p>)}</article>
      </section>}

      <section className="gw-map" id="gw-map">
        <header><span>RECORRIDO INTERACTIVO</span><h2>Una idea por estación.<br />Todo conectado.</h2><p>Elegí una estación. Visitá las cinco para completar el módulo; usá las flechas del teclado si preferís avanzar sin tocar la pantalla.</p></header>
        <div className="gw-map-layout">
          <nav className="gw-station-nav" aria-label="Estaciones de la clase">
            {data.stations.map((item, index) => <button key={item.id} className={index === activeStation ? "active" : ""} onClick={() => openStation(index)} aria-pressed={index === activeStation}>
              <span>{item.number}</span><div><small>{item.kicker}</small><b>{item.title}</b></div><i>{visited.includes(index) ? "VISTA" : "ENTRAR"}</i>
            </button>)}
          </nav>
          <article className="gw-station-card" key={station.id}>
            <div className="gw-station-head"><span>{station.number}</span><div><small>{station.kicker}</small><h3>{station.title}</h3><p>{station.summary}</p></div></div>
            <div className="gw-rule"><small>REGLA CENTRAL</small><p>{station.rule}</p></div>
            <div className="gw-formulas">{station.formulas.map(formula => <b key={formula}>{formula}</b>)}</div>
            <div className="gw-examples">{station.examples.map((example, index) => <div key={example.es}><span>{String(index + 1).padStart(2, "0")}</span><b>{example.es}</b><small>{example.en}</small></div>)}</div>
            {station.note && <aside><span>NOTA DE PRECISIÓN</span><p>{station.note}</p></aside>}
            <footer><button disabled={activeStation === 0} onClick={() => openStation(activeStation - 1)}>← ANTERIOR</button><strong>{activeStation + 1} / {data.stations.length}</strong><button disabled={activeStation === data.stations.length - 1} onClick={() => openStation(activeStation + 1)}>SIGUIENTE →</button></footer>
          </article>
        </div>
      </section>

      <section className="gw-traps">
        <header><span>CONTROL DE CALIDAD</span><h2>Errores que parecen lógicos</h2><p>La máquina no solo corrige: explica por qué.</p></header>
        <div>{data.traps.map((trap, index) => <article key={trap.wrong}><span>{String(index + 1).padStart(2, "0")}</span><div><small>EVITÁ</small><b>{trap.wrong}</b></div><i>→</i><div><small>USÁ</small><b>{trap.right}</b></div><p>{trap.explanation}</p></article>)}</div>
      </section>

      <section className="gw-practice">
        <header><span>LABORATORIO A1</span><h2>Elegí. Comprobá. Entendé.</h2><p>Las respuestas no aparecen antes de decidir. Al final recibís una explicación para cada elección.</p></header>
        <div className="gw-quiz-grid">{data.practice.map((item, index) => <article key={item.prompt} className={showResults ? (answers[index] === item.answer ? "correct" : "incorrect") : ""}>
          <span>{String(index + 1).padStart(2, "0")}</span><h3>{item.prompt}</h3><div>{item.options.map((option, optionIndex) => <button key={option} className={answers[index] === optionIndex ? "selected" : ""} onClick={() => { setAnswers(current => ({ ...current, [index]: optionIndex })); setShowResults(false); }}>{option}</button>)}</div>
          {showResults && <p><b>{answers[index] === item.answer ? "CORRECTO" : `RESPUESTA: ${item.options[item.answer]}`}</b>{item.why}</p>}
        </article>)}</div>
        <div className="gw-score"><div><small>RESPONDIDAS</small><b>{Object.keys(answers).length} / {data.practice.length}</b></div><button disabled={!practiceComplete} onClick={() => setShowResults(true)}>CORREGIR TODA LA SERIE</button>{showResults && <strong>{score} / {data.practice.length}</strong>}</div>
      </section>

      <section className="gw-speaking">
        <div className="gw-speaking-intro"><span>DEL SISTEMA A TU VOZ</span><h2>Ahora la gramática tiene que vivir.</h2><p>No hace falta hablar rápido. Construí, comprobá y después repetí la idea con más libertad.</p></div>
        <div className="gw-speaking-list">{data.speaking.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><small>{item.title}</small><h3>{item.prompt}</h3><p>{item.support}</p></div></article>)}</div>
      </section>

      <section className="gw-mission">
        <div><span>MISIÓN FINAL</span><h2>Una producción completa</h2><p>{data.mission}</p></div><aside><small>TEMA OFICIAL DEL PCIC</small><b>{data.officialTopic}</b><i>{data.level} · {progress}% explorado</i></aside>
      </section>

      <footer className="gw-footer"><a href="/">← VOLVER A LA BIBLIOTECA</a><div><b>CHESPANISH</b><span>Gramática visual para hablar mejor.</span></div>{data.nextPath ? <a href={data.nextPath}>SIGUIENTE: {data.nextTitle} →</a> : <a href="/">VER TODAS LAS CLASES →</a>}</footer>
    </main>
  );
}
