"use client";

import Link from "next/link";
import { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { GrammarWorldData } from "./data";
import "./style.css";
import MoodTenseDisclosure from "../verbal-system/MoodTenseDisclosure";
import VerbalPosition from "../verbal-system/VerbalPosition";
import { verbStationPosition } from "../verbal-system/positions";
import GrammarStep from "../grammar-steps/GrammarStep";
import { SpanishCueBrand } from "../SpanishCueBrand";

export default function GrammarWorld({ data }: { data: GrammarWorldData }) {
  const [activeStation, setActiveStation] = useState(0);
  const [visited, setVisited] = useState<number[]>([0]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const station = data.stations[activeStation];
  const score = useMemo(
    () =>
      data.practice.reduce(
        (total, item, index) =>
          total + (answers[index] === item.answer ? 1 : 0),
        0,
      ),
    [answers, data.practice],
  );
  const progress = Math.round((visited.length / data.stations.length) * 100);
  const theme = {
    "--gw-accent": data.accent,
    "--gw-accent-2": data.accent2,
  } as CSSProperties;

  const openStation = useCallback((index: number) => {
    setActiveStation(index);
    setVisited((items) => (items.includes(index) ? items : [...items, index]));
    window.requestAnimationFrame(() =>
      document.getElementById(`gw-station-${data.stations[index].id}`)?.scrollIntoView({behavior:"smooth",block:"start"}),
    );
  }, [data.stations]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight")
        openStation(Math.min(activeStation + 1, data.stations.length - 1));
      if (event.key === "ArrowLeft")
        openStation(Math.max(activeStation - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeStation, data.stations.length, openStation]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-gw-station]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.stationIndex);
        if (!Number.isFinite(index)) return;
        setActiveStation(index);
        setVisited((items) => (items.includes(index) ? items : [...items, index]));
      },
      { rootMargin: "-18% 0px -67%", threshold: [0, 0.2, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [data.stations]);

  const begin = () =>
    document
      .getElementById(data.world ? "gw-world" : "gw-map")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  const enterStation = () =>
    document
      .getElementById("gw-map")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  const practiceComplete = Object.keys(answers).length === data.practice.length;

  return (
    <main className={`gw-app gw-${data.motif}`} style={theme}>
      <header className="gw-nav">
        <Link
          className="gw-back"
          href="/"
          aria-label="Volver a la biblioteca"
        >
          ←
        </Link>
        <Link className="gw-brand" href="/" aria-label="SPANISHCUE, inicio">
          <SpanishCueBrand variant="compact" tone="light" context="GRAMMAR WORLDS" />
        </Link>
        <div className="gw-progress">
          <span>DOMINIO DEL MÓDULO</span>
          <i>
            <b style={{ width: `${progress}%` }} />
          </i>
          <strong>{progress}%</strong>
        </div>
        <button
          className="gw-index"
          onClick={() =>
            document
              .getElementById("gw-map")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          VER RECORRIDO
        </button>
      </header>

      <section className="gw-hero" ref={heroRef}>
        <img className="gw-hero-image" src={data.hero} alt="" />
        <div className="gw-depth gw-depth-one" />
        <div className="gw-depth gw-depth-two" />
        <div className="gw-ambient" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="gw-hero-shade" />
        <div className="gw-hero-copy">
          <span className="gw-module">{data.module}</span>
          <span className="gw-official-topic">
            <small>NOMBRE EXACTO DEL TEMA · PCIC</small>
            <b>{data.officialTopic}</b>
          </span>
          <h1>
            {data.displayTitle.split("\n").map((line, index) => (
              <span key={line} className={index ? "gw-title-accent" : ""}>
                {line}
              </span>
            ))}
          </h1>
          <p className="gw-subtitle">{data.subtitle}</p>
          <p className="gw-intro">{data.intro}</p>
          <div className="gw-actions">
            <button onClick={begin}>
              ENCENDER EL RECORRIDO <span>→</span>
            </button>
            <small>
              {data.duration} · NIVEL {data.level}
            </small>
          </div>
        </div>
        <div className="gw-overview">
          {data.overview.map((item) => (
            <div key={item.label}>
              <small>{item.label}</small>
              <b>{item.value}</b>
            </div>
          ))}
        </div>
        <div className="gw-scroll">
          DESLIZÁ PARA ENTRAR <span />
        </div>
      </section>

      {data.world && (
        <section className="gw-world" id="gw-world">
          <header>
            <span>{data.world.eyebrow}</span>
            <h2>{data.world.title}</h2>
            <p>{data.world.instruction}</p>
          </header>
          <div className="gw-world-frame">
            <div className="gw-world-scene" aria-hidden="true">
              <img src={data.hero} alt="" />
              <i />
              <b />
            </div>
            <div className="gw-world-status">
              <span>ESTACIÓN ACTIVA</span>
              <strong>
                {station.number} · {station.title}
              </strong>
              <small>
                {visited.length} de {data.stations.length} exploradas
              </small>
            </div>
          </div>
          <div className="gw-world-console" aria-label="Mapa de estaciones">
            {data.stations.map((item, index) => (
              <button
                key={item.id}
                className={index === activeStation ? "active" : ""}
                onClick={() => openStation(index)}
                aria-pressed={index === activeStation}
              >
                <span>{item.number}</span>
                <div>
                  <small>{item.kicker}</small>
                  <b>{item.title}</b>
                </div>
                <i>{visited.includes(index) ? "LISTA" : "ABRIR"}</i>
              </button>
            ))}
          </div>
          <button className="gw-world-enter" onClick={enterStation}>
            {data.world.enterLabel}
            <span>→</span>
          </button>
        </section>
      )}

      {data.slug === "la-ciudad-de-los-motores" && (
        <section className="gw-verbal-help">
          <MoodTenseDisclosure />
        </section>
      )}

      <section className="gw-foundation">
        <div className="gw-section-label">
          <span>00</span>
          <small>{data.bigIdea.eyebrow}</small>
        </div>
        <div className="gw-foundation-copy">
          <h2>{data.bigIdea.title}</h2>
          <p>{data.bigIdea.body}</p>
        </div>
        <div className="gw-contrast-grid">
          {data.bigIdea.contrast.map((item, index) => (
            <article key={item.value}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{item.label}</small>
              <b>{item.value}</b>
              <em>{item.detail}</em>
            </article>
          ))}
        </div>
      </section>

      {data.curriculum && (
        <section className="gw-curriculum">
          <div>
            <span>COBERTURA CURRICULAR</span>
            <h2>{data.officialTopic}</h2>
            <p>
              El título creativo presenta el mundo; este es el contenido
              gramatical exacto que se trabaja.
            </p>
          </div>
          <article>
            <small>NÚCLEO A1</small>
            {data.curriculum.a1.map((item) => (
              <p key={item}>
                <i />
                {item}
              </p>
            ))}
          </article>
          <article>
            <small>PUENTE A2</small>
            {data.curriculum.a2.map((item) => (
              <p key={item}>
                <i />
                {item}
              </p>
            ))}
          </article>
        </section>
      )}

      <section className="gw-map" id="gw-map">
        <header>
          <span>RECORRIDO INTERACTIVO</span>
          <h2>
            Una idea por estación.
            <br />
            Todo conectado.
          </h2>
          <p>
            Bajá por la clase o usá el menú superior para saltar a una estación.
            El contenido central ya está abierto; los detalles opcionales siguen
            plegados.
          </p>
        </header>
        <div className="gw-map-layout">
          <nav className="gw-station-nav" aria-label="Estaciones de la clase">
            {data.stations.map((item, index) => (
              <button
                key={item.id}
                className={index === activeStation ? "active" : ""}
                onClick={() => openStation(index)}
                aria-pressed={index === activeStation}
              >
                <span>{item.number}</span>
                <div>
                  <small>{item.kicker}</small>
                  <b>{item.title}</b>
                </div>
                <i>{visited.includes(index) ? "VISTA" : "ENTRAR"}</i>
              </button>
            ))}
          </nav>
          <div className="gw-stations-flow">
            {data.stations.map((item, itemIndex) => (
              <article
                className={`gw-station-card ${activeStation === itemIndex ? "active" : ""}`}
                id={`gw-station-${item.id}`}
                data-gw-station
                data-station-index={itemIndex}
                key={item.id}
              >
                <div className="gw-station-head">
                  <span>{item.number}</span>
                  <div>
                    <small>{item.kicker}</small>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className="grammar-step-stack gw-station-steps">
                  <GrammarStep number="01" eyebrow="IDEA CENTRAL" title="¿Qué es?" accent={data.accent}>
                    <p className="gw-step-summary">{item.summary}</p>
                    {data.slug === "la-ciudad-de-los-motores" && (
                      <VerbalPosition
                        items={verbStationPosition[item.id]}
                        context={item.id === "choice"
                          ? "Ser, estar y haber son verbos. Aquí los comparamos conjugados en presente de indicativo: es, está y hay."
                          : item.id === "future"
                            ? "Hablamos del futuro con una perífrasis. El significado futuro no convierte a «voy» en futuro simple."
                            : "Ubicá la forma antes de aprender sus terminaciones. El verbo es la palabra; el modo y el tiempo son características de su conjugación."}
                      />
                    )}
                  </GrammarStep>
                  <GrammarStep number="02" eyebrow="REGLA Y FÓRMULA" title="¿Cómo funciona?" accent={data.accent}>
                    <div className="gw-rule"><small>REGLA CENTRAL</small><p>{item.rule}</p></div>
                    <div className="gw-formulas">{item.formulas.map((formula) => <b key={formula}>{formula}</b>)}</div>
                  </GrammarStep>
                  <GrammarStep number="03" eyebrow="EJEMPLOS" title="La estructura en contexto" accent={data.accent}>
                    <div className="gw-examples">{item.examples.map((example, exampleIndex) => <div key={example.es}><span>{String(exampleIndex + 1).padStart(2, "0")}</span><b>{example.es}</b><small>{example.en}</small></div>)}</div>
                  </GrammarStep>
                  {item.note && (
                    <GrammarStep number="04" eyebrow="PRECISIÓN OPCIONAL" title="Contraste o detalle importante" accent={data.accent} defaultOpen={false} kind="optional">
                      <aside><span>NOTA DE PRECISIÓN</span><p>{item.note}</p></aside>
                    </GrammarStep>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="grammar-step-stack gw-final-steps">
        <GrammarStep
          number="05"
          eyebrow="ERRORES COMUNES"
          title="Contrastes que conviene revisar"
          accent={data.accent}
        >
          <section className="gw-traps">
            <header>
              <span>CONTROL DE CALIDAD</span>
              <h2>Errores que parecen lógicos</h2>
              <p>La máquina no solo corrige: explica por qué.</p>
            </header>
            <div>
              {data.traps.map((trap, index) => (
                <article key={trap.wrong}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>EVITÁ</small>
                    <b>{trap.wrong}</b>
                  </div>
                  <i>→</i>
                  <div>
                    <small>USÁ</small>
                    <b>{trap.right}</b>
                  </div>
                  <p>{trap.explanation}</p>
                </article>
              ))}
            </div>
          </section>
        </GrammarStep>
        <GrammarStep
          number="06"
          eyebrow="PRÁCTICA"
          title="Elegí, comprobá y entendé"
          accent={data.accent}
        >
          <section className="gw-practice">
            <header>
              <span>LABORATORIO {data.level}</span>
              <h2>Elegí. Comprobá. Entendé.</h2>
              <p>
                Las respuestas no aparecen antes de decidir. Al final recibís
                una explicación para cada elección.
              </p>
            </header>
            <div className="gw-quiz-grid">
              {data.practice.map((item, index) => (
                <article
                  key={item.prompt}
                  className={
                    showResults
                      ? answers[index] === item.answer
                        ? "correct"
                        : "incorrect"
                      : ""
                  }
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.prompt}</h3>
                  <div>
                    {item.options.map((option, optionIndex) => (
                      <button
                        key={option}
                        className={
                          answers[index] === optionIndex ? "selected" : ""
                        }
                        onClick={() => {
                          setAnswers((current) => ({
                            ...current,
                            [index]: optionIndex,
                          }));
                          setShowResults(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {showResults && (
                    <p>
                      <b>
                        {answers[index] === item.answer
                          ? "CORRECTO"
                          : `RESPUESTA: ${item.options[item.answer]}`}
                      </b>
                      {item.why}
                    </p>
                  )}
                </article>
              ))}
            </div>
            <div className="gw-score">
              <div>
                <small>RESPONDIDAS</small>
                <b>
                  {Object.keys(answers).length} / {data.practice.length}
                </b>
              </div>
              <button
                disabled={!practiceComplete}
                onClick={() => setShowResults(true)}
              >
                CORREGIR TODA LA SERIE
              </button>
              {showResults && (
                <strong>
                  {score} / {data.practice.length}
                </strong>
              )}
            </div>
          </section>
        </GrammarStep>
        <GrammarStep
          number="07"
          eyebrow="CONVERSACIÓN"
          title="Del sistema a tu voz"
          accent={data.accent}
        >
          <section className="gw-speaking">
            <div className="gw-speaking-intro">
              <span>DEL SISTEMA A TU VOZ</span>
              <h2>Ahora la gramática tiene que vivir.</h2>
              <p>
                No hace falta hablar rápido. Construí, comprobá y después repetí
                la idea con más libertad.
              </p>
            </div>
            <div className="gw-speaking-list">
              {data.speaking.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{item.title}</small>
                    <h3>{item.prompt}</h3>
                    <p>{item.support}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </GrammarStep>
        <GrammarStep
          number="08"
          eyebrow="PRODUCCIÓN FINAL"
          title="Una producción completa"
          accent={data.accent}
        >
          <section className="gw-mission">
            <div>
              <span>MISIÓN FINAL</span>
              <h2>Una producción completa</h2>
              <p>{data.mission}</p>
            </div>
            <aside>
              <small>TEMA OFICIAL DEL PCIC</small>
              <b>{data.officialTopic}</b>
              <i>
                {data.level} · {progress}% explorado
              </i>
            </aside>
          </section>
        </GrammarStep>
      </div>

      <footer className="gw-footer">
        <Link href="/">← VOLVER A LA BIBLIOTECA</Link>
        <div>
          <b>SPANISHCUE</b>
          <span>Gramática visual para hablar mejor.</span>
        </div>
        {data.nextPath ? (
          <Link href={data.nextPath}>SIGUIENTE: {data.nextTitle} →</Link>
        ) : (
          <Link href="/">VER TODAS LAS CLASES →</Link>
        )}
      </footer>
    </main>
  );
}
