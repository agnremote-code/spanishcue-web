"use client";

import Link from "next/link";
import { ConversationFamily } from "../conversation-families/ConversationFamily";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SpanishCueBrand } from "../SpanishCueBrand";
import {
  getLevelConfig,
  getRoundForIndex,
  keyAction,
  pickRandomIndex,
  shouldHandleShortcut,
} from "./engine.mjs";
import { a1Support } from "./a1.mjs";
import "./red-flag.css";

type Level = "A1" | "A2" | "B1" | "B2";
type View = "warmup" | "play" | "finale";
type FlagChoice = "green" | "red";

const rounds = {
  quick: { label: "RONDA RÁPIDA", copy: "Elegí primero. Explicá en una frase.", minutes: 10 },
  ambiguous: { label: "MÁS CONTEXTO", copy: "Buscá excepciones, dudas y condiciones.", minutes: 13 },
  deep: { label: "A FONDO", copy: "Defendé el límite y escuchá otra lectura.", minutes: 13 },
} as const;

export default function RedFlagGame({ level }: { level: Level }) {
  return <ConversationFamily id="red-flag-o-no" title="Red Flag o No" levels={["A1", "A2", "B1", "B2"]} defaultLevel={level}>{selected => <RedFlagActivity key={selected} level={selected as Level} />}</ConversationFamily>;
}

function RedFlagActivity({ level }: { level: Level }) {
  const config = useMemo(() => getLevelConfig(level), [level]);
  const [view, setView] = useState<View>("warmup");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, FlagChoice>>({});
  const [followUps, setFollowUps] = useState<Record<number, boolean>>({});
  const situation = config.situations[index];
  const choice = answers[index];
  const roundKey = getRoundForIndex(index) as keyof typeof rounds;
  const support = level === "A1" ? a1Support : null;
  const cardSupport = support?.cards[index];
  const round = support ? support.rounds[roundKey] : rounds[roundKey];
  const followUp = config.followUps[index % config.followUps.length];

  const choose = useCallback((nextChoice: FlagChoice) => {
    setAnswers((current) => ({ ...current, [index]: nextChoice }));
  }, [index]);

  const goPrevious = useCallback(() => {
    if (index === 0) setView("warmup");
    else setIndex((current) => current - 1);
  }, [index]);

  const goNext = useCallback(() => {
    if (index === config.situations.length - 1) setView("finale");
    else setIndex((current) => current + 1);
  }, [config.situations.length, index]);

  const goRandom = useCallback(() => {
    setView("play");
    setIndex((current) => pickRandomIndex(current, config.situations.length));
  }, [config.situations.length]);

  const revealFollowUp = useCallback(() => {
    if (!choice) return;
    setFollowUps((current) => ({ ...current, [index]: !current[index] }));
  }, [choice, index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (view !== "play" || !shouldHandleShortcut(event.target)) return;
      const action = keyAction(event.key);
      if (!action) return;
      event.preventDefault();
      if (action === "green" || action === "red") choose(action);
      if (action === "reveal") revealFollowUp();
      if (action === "previous") goPrevious();
      if (action === "next") goNext();
      if (action === "random") goRandom();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [choose, goNext, goPrevious, goRandom, revealFollowUp, view]);

  const startAt = (nextIndex: number) => {
    setIndex(nextIndex);
    setView("play");
  };

  return (
    <main className={`rf-game${support ? " rf-a1" : ""}`} style={{ "--rf-accent": config.accent, "--rf-accent-text": config.accentText } as React.CSSProperties}>
      <header className="rf-header">
        <Link href="/" aria-label="Volver a la biblioteca">
          <SpanishCueBrand variant="compact" tone="dark" />
        </Link>
        <div className="rf-title-lockup">
          <span>{support ? "A JUGAR" : "MODO PLAY"}</span>
          <strong>{support ? "¿SEÑAL ROJA O VERDE?" : "RED FLAG O NO"}</strong>
        </div>
        <div className="rf-level">NIVEL {level}</div>
      </header>

      <nav className="rf-timeline" aria-label="Etapas de la clase">
        <button className={view === "warmup" ? "active" : ""} onClick={() => setView("warmup")}>
          <b>01</b><span>CALENTAMIENTO</span><small>4 min</small>
        </button>
        <button className={view === "play" && roundKey === "quick" ? "active" : ""} onClick={() => startAt(0)}>
          <b>02</b><span>{support ? "GESTOS" : "RÁPIDA"}</span><small>10 min</small>
        </button>
        <button className={view === "play" && roundKey === "ambiguous" ? "active" : ""} onClick={() => startAt(6)}>
          <b>03</b><span>{support ? "PLANES" : "CONTEXTO"}</span><small>13 min</small>
        </button>
        <button className={view === "play" && roundKey === "deep" ? "active" : ""} onClick={() => startAt(12)}>
          <b>04</b><span>{support ? "HABLAMOS" : "A FONDO"}</span><small>13 min</small>
        </button>
        <button className={view === "finale" ? "active" : ""} onClick={() => setView("finale")}>
          <b>05</b><span>CIERRE</span><small>5 min</small>
        </button>
      </nav>

      {view === "warmup" && (
        <section className="rf-panel rf-intro">
          <div className="rf-eyebrow">CALENTAMIENTO · 4 MIN</div>
          <p>NO HAY UNA RESPUESTA CORRECTA</p>
          <h1>{config.warmup}</h1>
          <div className="rf-intro-notes">
            {(support?.intro ?? ["Elegí una señal verde.", "Elegí una señal roja.", "Decí una que depende del contexto."]).map(note => <span key={note}>{note}</span>)}
          </div>
          <button className="rf-primary" onClick={() => startAt(0)}>EMPEZAR LA RONDA →</button>
          {support && <details className="rf-a1-teacher"><summary>Para quien enseña</summary><p>{support.teacher}</p></details>}
        </section>
      )}

      {view === "play" && (
        <section className="rf-panel rf-play" aria-live="polite">
          <div className="rf-card-meta">
            <div>
              <span>{round.label} · {round.minutes} MIN</span>
              <small>{round.copy}</small>
            </div>
            <strong>{String(index + 1).padStart(2, "0")} <i>/ 18</i></strong>
          </div>
          <div className="rf-progress" aria-label={`Situación ${index + 1} de 18`}>
            <span style={{ width: `${((index + 1) / config.situations.length) * 100}%` }} />
          </div>

          <article className="rf-situation">
            <div className="rf-quote">“</div>
            <h1>{situation}</h1>
          </article>

          <div className="rf-choices" role="group" aria-label={support ? "¿Señal verde o señal roja?" : "¿Green flag o red flag?"}>
            <button className={choice === "green" ? "green selected" : "green"} aria-pressed={choice === "green"} onClick={() => choose("green")}>
              <span>🟢</span><b>{support ? "SEÑAL VERDE" : "GREEN FLAG"}</b><small>tecla G</small>
            </button>
            <button className={choice === "red" ? "red selected" : "red"} aria-pressed={choice === "red"} onClick={() => choose("red")}>
              <span>🔴</span><b>{support ? "SEÑAL ROJA" : "RED FLAG"}</b><small>tecla R</small>
            </button>
          </div>

          {support && cardSupport && (
            <aside className="rf-a1-support" aria-label="Ayuda para hablar">
              <h2>Para hablar</h2>
              <div className="rf-a1-frames">{support.frames.map(frame => <span key={frame}>{frame}</span>)}</div>
              <p><strong>Palabras útiles:</strong> {cardSupport.chunks.join(" · ")}</p>
              <details><summary>Un ejemplo</summary><p>{cardSupport.reason}</p></details>
              <details className="rf-a1-teacher"><summary>Para quien enseña</summary><p>{cardSupport.teacher}</p></details>
            </aside>
          )}

          {choice && (
            <div className="rf-why">
              <div><span>AHORA EXPLICÁ</span><h2>¿POR QUÉ?</h2></div>
              <button onClick={revealFollowUp} aria-expanded={Boolean(followUps[index])}>
                {followUps[index] ? "OCULTAR REPREGUNTA" : "ABRIR REPREGUNTA OPCIONAL"}
              </button>
              {followUps[index] && <p>{followUp}</p>}
            </div>
          )}

          <footer className="rf-controls">
            <button onClick={goPrevious}>← ANTERIOR</button>
            <button className="random" onClick={goRandom}>SITUACIÓN AL AZAR ↻ <small>tecla S</small></button>
            <button className="next" onClick={goNext}>{index === 17 ? "IR AL CIERRE →" : "SIGUIENTE →"}</button>
          </footer>
          <p className="rf-shortcuts">← → navegar · G verde · R roja · espacio repregunta · S azar</p>
        </section>
      )}

      {view === "finale" && (
        <section className="rf-panel rf-finale">
          <div className="rf-eyebrow">CONVERSACIÓN FINAL · 5 MIN</div>
          <h1>{support?.finaleTitle ?? "Tu mapa de señales"}</h1>
          <p>{support?.finaleCopy ?? "No hace falta estar de acuerdo. Elegí, compará y defendé cada respuesta."}</p>
          <div className="rf-finale-grid">
            {config.finale.map((prompt: string, promptIndex: number) => (
              <article key={prompt}>
                <span>0{promptIndex + 1}</span>
                <h2>{prompt}</h2>
              </article>
            ))}
          </div>
          {support && <aside className="rf-a1-support" aria-label="Ayuda para la conversación final">
            <h2>Frases para la cita</h2>
            <div className="rf-a1-frames">{support.finaleFrames.map(frame => <span key={frame}>{frame}</span>)}</div>
            <details className="rf-a1-teacher"><summary>Para quien enseña</summary><p>{support.finaleTeacher}</p></details>
          </aside>}
          <div className="rf-final-actions">
            <button onClick={() => { setView("play"); setIndex(17); }}>← ÚLTIMA SITUACIÓN</button>
            <button className="rf-primary" onClick={() => { setAnswers({}); setFollowUps({}); setIndex(0); setView("warmup"); }}>NUEVA PARTIDA ↻</button>
          </div>
        </section>
      )}
    </main>
  );
}
