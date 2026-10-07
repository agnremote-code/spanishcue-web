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
import { a0Support } from "./a0.mjs";
import { a1Support } from "./a1.mjs";
import { c1Support } from "./c1.mjs";
import { c2Support } from "./c2.mjs";
import "./red-flag.css";

type Level = "A0" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
type View = "warmup" | "play" | "finale";
type FlagChoice = "green" | "red";
type Judgment = FlagChoice | "qualified" | "uncertain";
type ContextSupport = Omit<typeof c1Support, "cards"> & {
  cards: Array<{ situation: string; firstLook: string; context: string; reconsider: string; missingInfo?: string }>;
};

const rounds = {
  quick: { label: "RONDA RÁPIDA", copy: "Elige primero. Explica en una frase.", minutes: 10 },
  ambiguous: { label: "MÁS CONTEXTO", copy: "Busca excepciones, dudas y condiciones.", minutes: 13 },
  deep: { label: "A FONDO", copy: "Defiende el límite y escucha otra lectura.", minutes: 13 },
} as const;

export default function RedFlagGame({ level }: { level: Level }) {
  return <ConversationFamily id="red-flag-o-no" title="Red Flag o No" levels={["A0", "A1", "A2", "B1", "B2", "C1", "C2"]} defaultLevel={level}>{selected => <RedFlagActivity key={selected} level={selected as Level} />}</ConversationFamily>;
}

function RedFlagActivity({ level }: { level: Level }) {
  const a0Text=(es:string,en:string)=>level==='A0'?`${es} / ${en}`:es;
  const config = useMemo(() => getLevelConfig(level), [level]);
  const [view, setView] = useState<View>("warmup");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, FlagChoice>>({});
  const [followUps, setFollowUps] = useState<Record<number, boolean>>({});
  const [revisions, setRevisions] = useState<Record<number, FlagChoice | "qualified">>({});
  const [alternativeReveals, setAlternativeReveals] = useState<Record<number, boolean>>({});
  const [finalJudgments, setFinalJudgments] = useState<Record<number, Judgment>>({});
  const [principles, setPrinciples] = useState<string[]>(["", "", "", "", ""]);
  const [trialIndex, setTrialIndex] = useState<number | null>(null);
  const c2 = level === "C2" ? c2Support : null;
  const advanced: ContextSupport | null = c2 ?? (level === "C1" ? c1Support : null);
  const c2Card = c2?.cards[index];
  const contextCard = advanced?.cards[index];
  const situation = config.situations[index];
  const choice = answers[index];
  const roundKey = getRoundForIndex(index) as keyof typeof rounds;
  const support = level === "A0" ? a0Support : level === "A1" ? a1Support : null;
  const cardSupport = support?.cards[index];
  const round = support ? support.rounds[roundKey] : advanced ? advanced.rounds[roundKey] : rounds[roundKey];
  const localized = Boolean(support || advanced);
  const visibleChoice = c2 && alternativeReveals[index] ? finalJudgments[index] : advanced && followUps[index] ? revisions[index] : choice;
  const judgmentLabel = (value?: Judgment) => value === "green" ? "señal verde" : value === "red" ? "señal roja" : value === "qualified" ? "con condiciones" : value === "uncertain" ? "sin evidencia suficiente" : "pendiente de revisión";
  const followUp = config.followUps[index % config.followUps.length];

  const choose = useCallback((nextChoice: Judgment) => {
    if (c2 && alternativeReveals[index]) setFinalJudgments(current => ({ ...current, [index]: nextChoice }));
    else if (advanced && followUps[index] && nextChoice !== "uncertain") setRevisions(current => ({ ...current, [index]: nextChoice }));
    else if (nextChoice === "green" || nextChoice === "red") setAnswers(current => ({ ...current, [index]: nextChoice }));
  }, [advanced, alternativeReveals, c2, followUps, index]);

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
    if (c2 && followUps[index]) {
      if (revisions[index]) setAlternativeReveals(current => ({ ...current, [index]: true }));
      return;
    }
    setFollowUps((current) => ({ ...current, [index]: advanced ? true : !current[index] }));
  }, [advanced, c2, choice, followUps, index, revisions]);

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
    <main className={`rf-game${support ? " rf-a1" : c2 ? " rf-c1 rf-c2" : advanced ? " rf-c1" : ""}`} style={{ "--rf-accent": config.accent, "--rf-accent-text": config.accentText } as React.CSSProperties}>
      <header className="rf-header">
        <Link href="/" aria-label={a0Text("Volver a la biblioteca","Back to the library")}>
          <SpanishCueBrand variant="compact" tone="dark" />
        </Link>
        <div className="rf-title-lockup">
          <span>{localized ? a0Text("A JUGAR","LET’S PLAY") : "MODO PLAY"}</span>
          <strong>{localized ? a0Text("¿SEÑAL ROJA O VERDE?","RED OR GREEN FLAG?") : "RED FLAG O NO"}</strong>
        </div>
        <div className="rf-level">{a0Text("NIVEL","LEVEL")} {level}</div>
      </header>

      <nav className="rf-timeline" aria-label={a0Text("Etapas de la clase","Lesson stages")}>
        <button className={view === "warmup" ? "active" : ""} onClick={() => setView("warmup")}>
          <b>01</b><span>{a0Text("CALENTAMIENTO","WARM-UP")}</span><small>4 min</small>
        </button>
        <button className={view === "play" && roundKey === "quick" ? "active" : ""} onClick={() => startAt(0)}>
          <b>02</b><span>{support ? a0Text("GESTOS","GESTURES") : c2 ? "PALABRAS" : advanced ? "IMPRESIONES" : "RÁPIDA"}</span><small>10 min</small>
        </button>
        <button className={view === "play" && roundKey === "ambiguous" ? "active" : ""} onClick={() => startAt(6)}>
          <b>03</b><span>{support ? a0Text("PLANES","PLANS") : "CONTEXTO"}</span><small>13 min</small>
        </button>
        <button className={view === "play" && roundKey === "deep" ? "active" : ""} onClick={() => startAt(12)}>
          <b>04</b><span>{support ? a0Text("HABLAMOS","LET’S TALK") : c2 ? "RELATOS" : advanced ? "DOS LECTURAS" : "A FONDO"}</span><small>13 min</small>
        </button>
        <button className={view === "finale" ? "active" : ""} onClick={() => setView("finale")}>
          <b>05</b><span>{a0Text("CIERRE","CLOSING")}</span><small>5 min</small>
        </button>
      </nav>

      {view === "warmup" && (
        <section className="rf-panel rf-intro">
          <div className="rf-eyebrow">{a0Text("CALENTAMIENTO · 4 MIN","WARM-UP · 4 MIN")}</div>
          <p>{a0Text("NO HAY UNA RESPUESTA CORRECTA","THERE IS NO CORRECT ANSWER")}</p>
          <h1>{config.warmup}</h1>
          <div className="rf-intro-notes">
            {(support?.intro ?? advanced?.intro ?? ["Elige una señal verde.", "Elige una señal roja.", "Di una que depende del contexto."]).map(note => <span key={note}>{note}</span>)}
          </div>
          <button className="rf-primary" onClick={() => startAt(0)}>{a0Text("EMPEZAR LA RONDA →","START THE ROUND →")}</button>
          {(support || advanced) && <details className={advanced ? "rf-c1-teacher" : "rf-a1-teacher"}><summary>{a0Text("Para quien enseña","Teacher notes")}</summary><p>{support?.teacher ?? advanced?.teacher}</p></details>}
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
          <div className="rf-progress" aria-label={a0Text(`Situación ${index + 1} de 18`,`Situation ${index + 1} of 18`)}>
            <span style={{ width: `${((index + 1) / config.situations.length) * 100}%` }} />
          </div>

          <article className="rf-situation">
            <div className="rf-quote">“</div>
            <h1>{situation}</h1>
          </article>

          {contextCard && <p className="rf-c1-first-look">{contextCard.firstLook}</p>}
          {advanced && followUps[index] && <p className="rf-c1-instruction">{c2 && alternativeReveals[index] ? "Con las dos versiones: elige una señal, matiza o suspende el juicio. Distingue evidencia, interpretación e incertidumbre." : "Con el contexto: vuelve a elegir una señal o matiza tu juicio. Explica qué dato sostiene tu decisión."}</p>}
          <div className="rf-choices" role="group" aria-label={localized ? a0Text("¿Señal verde o señal roja?","Green or red flag?") : "¿Green flag o red flag?"}>
            <button className={visibleChoice === "green" ? "green selected" : "green"} aria-pressed={visibleChoice === "green"} onClick={() => choose("green")}>
              <span>🟢</span><b>{level==='A0'?'VERDE / GREEN':localized ? "SEÑAL VERDE" : "GREEN FLAG"}</b><small>{a0Text("tecla G","G key")}</small>
            </button>
            <button className={visibleChoice === "red" ? "red selected" : "red"} aria-pressed={visibleChoice === "red"} onClick={() => choose("red")}>
              <span>🔴</span><b>{level==='A0'?'ROJA / RED':localized ? "SEÑAL ROJA" : "RED FLAG"}</b><small>{a0Text("tecla R","R key")}</small>
            </button>
          </div>

          {support && cardSupport && (
            <aside className="rf-a1-support" aria-label={a0Text("Ayuda para hablar","Speaking help")}>
              <h2>{a0Text("Para hablar","To speak")}</h2>
              <div className="rf-a1-frames">{support.frames.map(frame => <span key={frame}>{frame}</span>)}</div>
              <p><strong>{a0Text("Palabras útiles:","Useful words:")}</strong> {cardSupport.chunks.join(" · ")}</p>
              <details open={level==='A0'}><summary>{level==='A0'?'Un modelo / A model':'Un ejemplo'}</summary><p>{cardSupport.reason}</p></details>
              <details className="rf-a1-teacher"><summary>{a0Text("Para quien enseña","Teacher notes")}</summary><p>{cardSupport.teacher}</p></details>
            </aside>
          )}

          {choice && !advanced && (
            <div className="rf-why">
              <div><span>{level==='A0'?'AHORA HABLA / NOW SPEAK':'AHORA EXPLICA'}</span><h2>{level==='A0'?'Repite el modelo. / Repeat the model.':'¿POR QUÉ?'}</h2></div>
              <button onClick={revealFollowUp} aria-expanded={Boolean(followUps[index])}>
                {followUps[index] ? a0Text("OCULTAR REPREGUNTA","HIDE FOLLOW-UP") : a0Text("ABRIR REPREGUNTA OPCIONAL","OPEN OPTIONAL FOLLOW-UP")}
              </button>
              {followUps[index] && <p>{followUp}</p>}
            </div>
          )}

          {advanced && contextCard && (
            <div className="rf-c1-discussion">
              {choice && <>
                <p className="rf-c1-judgment"><strong>Primera impresión:</strong> {judgmentLabel(choice)}</p>
                {!followUps[index] && <div className="rf-why">
                  <div><span>ANTES DE SABER MÁS</span><h2>Defiende tu lectura. Escucha otra.</h2></div>
                  <button onClick={revealFollowUp} aria-expanded={false}>REVELAR CONTEXTO</button>
                </div>}
                {followUps[index] && <section className="rf-c1-context" aria-label="Contexto revelado">
                  <h2>Un dato más</h2><p>{contextCard.context}</p>
                  <h3>Revisa tu lectura</h3><p>{contextCard.reconsider}</p>
                  {!alternativeReveals[index] && <button className="rf-c1-qualify" aria-pressed={revisions[index] === "qualified"} onClick={() => choose("qualified")}>MATIZAR MI JUICIO</button>}
                  <p className="rf-c1-judgment"><strong>Con el contexto:</strong> {judgmentLabel(revisions[index])}</p>
                  {revisions[index] === "qualified" && <p>Precisa qué parte te parece aceptable, qué reserva mantienes y bajo qué condición cambiarías de opinión.</p>}
                  {contextCard.missingInfo && <><h3>Antes de cerrar el juicio</h3><p>{contextCard.missingInfo}</p></>}
                  {c2 && !alternativeReveals[index] && <div className="rf-c2-reveal">
                    <p>{revisions[index] ? "Explica tu segundo juicio antes de escuchar a otra persona." : "Registra primero tu juicio con el contexto para poder abrir la otra versión."}</p>
                    <button className="rf-c1-qualify" disabled={!revisions[index]} onClick={revealFollowUp} aria-expanded={false}>REVELAR OTRA VERSIÓN</button>
                  </div>}
                </section>}
              </>}
              {c2Card && alternativeReveals[index] && <section className="rf-c2-alternative" aria-label="Otra versión revelada">
                <h2>Otra voz, otra lectura</h2><p>{c2Card.alternative}</p>
                <h3>Dos lecturas defendibles</h3><p>{c2Card.compare}</p>
                <div className="rf-c2-verdicts">
                  <button className="rf-c1-qualify" aria-pressed={finalJudgments[index] === "qualified"} onClick={() => choose("qualified")}>MATIZAR MI JUICIO</button>
                  <button className="rf-c1-qualify" aria-pressed={finalJudgments[index] === "uncertain"} onClick={() => choose("uncertain")}>SUSPENDER EL JUICIO</button>
                </div>
                <p className="rf-c1-judgment"><strong>Juicio final:</strong> {judgmentLabel(finalJudgments[index])}</p>
                {finalJudgments[index] && <p>Explica qué cambió, qué reserva mantienes y qué no puedes saber. Señala el grado de certeza de tu conclusión.</p>}
                <h3>La evidencia que distinguiría las versiones</h3><p>{c2Card.evidence}</p>
              </section>}
              <details className="rf-c1-precision"><summary>Para precisar · ayuda opcional</summary><ul>{advanced.precision.map(phrase => <li key={phrase}>{phrase}</li>)}</ul></details>
            </div>
          )}

          <footer className="rf-controls">
            <button onClick={goPrevious}>{a0Text("← ANTERIOR","← PREVIOUS")}</button>
            <button className="random" onClick={goRandom}>{a0Text("SITUACIÓN AL AZAR","RANDOM SITUATION")} ↻ <small>{a0Text("tecla S","S key")}</small></button>
            <button className="next" onClick={goNext}>{index === 17 ? a0Text("IR AL CIERRE →","GO TO CLOSING →") : a0Text("SIGUIENTE →","NEXT →")}</button>
          </footer>
          <p className="rf-shortcuts">{c2 ? "← → navegar · G verde · R roja · espacio revelar la siguiente fuente tras elegir · S azar" : advanced ? "← → navegar · G verde · R roja · espacio revelar contexto · S azar" : a0Text("← → navegar · G verde · R roja · espacio repregunta · S azar","← → navigate · G green · R red · space follow-up · S random")}</p>
        </section>
      )}

      {view === "finale" && (
        <section className="rf-panel rf-finale">
          <div className="rf-eyebrow">{a0Text("CONVERSACIÓN FINAL · 5 MIN","FINAL CONVERSATION · 5 MIN")}</div>
          <h1>{support?.finaleTitle ?? advanced?.finaleTitle ?? "Tu mapa de señales"}</h1>
          <p>{support?.finaleCopy ?? advanced?.finaleCopy ?? "No hace falta estar de acuerdo. Elige, compara y defiende cada respuesta."}</p>
          <div className="rf-finale-grid">
            {config.finale.map((prompt: string, promptIndex: number) => (
              <article key={prompt}>
                <span>0{promptIndex + 1}</span>
                <h2>{prompt}</h2>
              </article>
            ))}
          </div>
          {support && <aside className="rf-a1-support" aria-label={a0Text("Ayuda para la conversación final","Help for the final conversation")}>
            <h2>{a0Text("Frases para la cita","Phrases for the date")}</h2>
            <div className="rf-a1-frames">{support.finaleFrames.map(frame => <span key={frame}>{frame}</span>)}</div>
            <details className="rf-a1-teacher"><summary>{a0Text("Para quien enseña","Teacher notes")}</summary><p>{support.finaleTeacher}</p></details>
          </aside>}
          {c2 && <section className="rf-c2-protocol" aria-label="Tus principios personales">
            <h2>Escribe o ensaya tus principios</h2>
            <p>Formula cuatro; añade un quinto si lo necesitas. Los espacios guardan tus notas durante esta partida.</p>
            {principles.map((principle, principleIndex) => <label key={principleIndex}>
              Principio {principleIndex + 1}{principleIndex === 4 ? " · opcional" : ""}
              <textarea aria-label={`Principio ${principleIndex + 1}`} value={principle} rows={2} onChange={event => setPrinciples(current => current.map((value, item) => item === principleIndex ? event.target.value : value))} />
            </label>)}
          </section>}
          {advanced && <section className="rf-c1-history" aria-label="Tu recorrido de juicios">
            <h2>Vuelve a tus decisiones</h2>
            {Object.keys(answers).length === 0 && <p>{c2 ? "Todavía no has elegido ninguna señal. Abre una situación y completa sus tres fases para probar tu protocolo." : "Todavía no elegiste ninguna señal. Abre una situación para probar tus criterios con un caso concreto."}</p>}
            {Object.entries(answers).map(([answerIndex, initial]) => {
              const itemIndex = Number(answerIndex);
              return <article key={answerIndex}>
                <h3>{itemIndex + 1}. {config.situations[itemIndex]}</h3>
                <p><strong>Primera impresión:</strong> {judgmentLabel(initial)}</p>
                <p><strong>Con el contexto:</strong> {followUps[itemIndex] ? judgmentLabel(revisions[itemIndex]) : "todavía sin revelar"}</p>
                {c2 && <p><strong>Juicio final:</strong> {alternativeReveals[itemIndex] ? judgmentLabel(finalJudgments[itemIndex]) : "otra versión todavía sin revelar"}</p>}
                <button onClick={() => startAt(itemIndex)}>VOLVER A ESTA SITUACIÓN</button>
                {c2 && finalJudgments[itemIndex] && <button aria-pressed={trialIndex === itemIndex} onClick={() => setTrialIndex(itemIndex)}>PROBAR MI PROTOCOLO CON ESTA SITUACIÓN</button>}
              </article>;
            })}
          </section>}
          {c2 && trialIndex !== null && <section className="rf-c2-trial" aria-label="Prueba del protocolo">
            <h2>Dos principios en conflicto</h2>
            <h3>{trialIndex + 1}. {config.situations[trialIndex]}</h3>
            <p><strong>Contexto:</strong> {c2.cards[trialIndex].context}</p>
            <p><strong>Otra versión:</strong> {c2.cards[trialIndex].alternative}</p>
            <p>{c2.cards[trialIndex].protocolConflict}</p>
            <p>Nombra dos de tus principios, explica por qué aquí no basta con aplicarlos juntos y decide cuál priorizas. Tu compañero defiende el otro; responde con una excepción o una reformulación precisa.</p>
            <ol>{principles.filter(principle => principle.trim()).map((principle, principleIndex) => <li key={principleIndex}>{principle}</li>)}</ol>
          </section>}
          <div className="rf-final-actions">
            <button onClick={() => { setView("play"); setIndex(17); }}>{a0Text("← ÚLTIMA SITUACIÓN","← LAST SITUATION")}</button>
            <button className="rf-primary" onClick={() => { setAnswers({}); setFollowUps({}); setRevisions({}); setAlternativeReveals({}); setFinalJudgments({}); setPrinciples(["", "", "", "", ""]); setTrialIndex(null); setIndex(0); setView("warmup"); }}>{a0Text("NUEVA PARTIDA ↻","NEW GAME ↻")}</button>
          </div>
        </section>
      )}
    </main>
  );
}
