"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  baseMetrics,
  budgetAreas,
  debateTools,
  finalQuestions,
  jobs,
  metricLabels,
  rounds,
  speakingMoves,
  warmupQuestions,
  type IslandRound,
  type Metric,
} from "./data";
import "./style.css";

type SessionMode = "duo" | "group";
type Screen = "briefing" | "session" | "constitution";

const metricOrder: Metric[] = ["agua", "comida", "energia", "convivencia", "seguridad"];
const initialJobs: Record<string, number> = { agua: 4, comida: 6, refugio: 4, salud: 3, energia: 3, cuidados: 4 };
const initialBudget: Record<string, number> = { filtros: 4, alimentos: 4, clinica: 4, radio: 4, refugios: 4 };

const markerPositions = [
  { index: 0, label: "ASAMBLEA", className: "marker-assembly" },
  { index: 1, label: "MUELLE", className: "marker-dock" },
  { index: 2, label: "BOSQUE", className: "marker-forest" },
  { index: 3, label: "CLÍNICA", className: "marker-clinic" },
  { index: 4, label: "HUERTAS", className: "marker-farms" },
  { index: 5, label: "DEPÓSITO", className: "marker-depot" },
  { index: 6, label: "COSTA", className: "marker-coast" },
  { index: 7, label: "CUMBRE", className: "marker-ridge" },
];

function clamp(value: number) {
  return Math.max(8, Math.min(100, value));
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = String(seconds % 60).padStart(2, "0");
  return minutes + ":" + remainder;
}

function MetricBoard({ values }: { values: Record<Metric, number> }) {
  return <section className="island-metrics" aria-label="Estado actual de la isla">
    {metricOrder.map(metric => {
      const value = values[metric];
      const state = value < 35 ? "danger" : value < 55 ? "warning" : "stable";
      return <article key={metric} className={"metric " + state}>
        <div><span>{metricLabels[metric]}</span><b>{value}</b></div>
        <i><span style={{ "--metric-value": value + "%" } as CSSProperties} /></i>
      </article>;
    })}
  </section>;
}

function AllocationBoard({
  items,
  values,
  total,
  onChange,
  kind,
}: {
  items: { id: string; name: string; note: string }[];
  values: Record<string, number>;
  total: number;
  onChange: (next: Record<string, number>) => void;
  kind: "personas" | "fichas";
}) {
  const used = Object.values(values).reduce((sum, value) => sum + value, 0);
  const adjust = (id: string, amount: number) => {
    const current = values[id] || 0;
    if (amount < 0 && current === 0) return;
    if (amount > 0 && used >= total) return;
    onChange({ ...values, [id]: current + amount });
  };
  return <section className="allocation-board">
    <header>
      <div><span>MESA DE REPARTO</span><h3>{kind === "personas" ? "Distribuí los 24 turnos" : "Invertí las 20 fichas"}</h3></div>
      <strong className={used === total ? "complete" : ""}>{used} / {total} {kind}</strong>
    </header>
    <p>Para subir un área, primero bajá otra. Cada movimiento necesita una razón dicha en voz alta.</p>
    <div className="allocation-grid">
      {items.map(item => <article key={item.id}>
        <div><b>{item.name}</b><small>{item.note}</small></div>
        <div className="allocation-control">
          <button onClick={() => adjust(item.id, -1)} disabled={(values[item.id] || 0) === 0} aria-label={"Restar uno a " + item.name}>−</button>
          <strong>{values[item.id] || 0}</strong>
          <button onClick={() => adjust(item.id, 1)} disabled={used >= total} aria-label={"Sumar uno a " + item.name}>+</button>
        </div>
      </article>)}
    </div>
  </section>;
}

function DebateQuestion({
  round,
  index,
  onIndex,
}: {
  round: IslandRound;
  index: number;
  onIndex: (index: number) => void;
}) {
  const randomQuestion = () => {
    if (round.questions.length < 2) return;
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    let next = values[0] % round.questions.length;
    if (next === index) next = (next + 1) % round.questions.length;
    onIndex(next);
  };
  return <section className="question-deck">
    <header><span>DETONADOR {String(index + 1).padStart(2, "0")} / {String(round.questions.length).padStart(2, "0")}</span><button onClick={randomQuestion}>Pregunta sorpresa ↗</button></header>
    <div className="question-card"><i>?</i><h3>{round.questions[index]}</h3></div>
    <nav aria-label="Cambiar pregunta">
      <button disabled={index === 0} onClick={() => onIndex(index - 1)}>← Anterior</button>
      <div>{round.questions.map((_, itemIndex) => <button key={itemIndex} className={itemIndex === index ? "active" : ""} onClick={() => onIndex(itemIndex)} aria-label={"Pregunta " + (itemIndex + 1)} aria-current={itemIndex === index ? "true" : undefined} />)}</div>
      <button disabled={index === round.questions.length - 1} onClick={() => onIndex(index + 1)}>Siguiente →</button>
    </nav>
    <details>
      <summary>Ver las 7 preguntas de esta ronda</summary>
      <ol>{round.questions.map(question => <li key={question}>{question}</li>)}</ol>
    </details>
  </section>;
}

export default function IslandVotePage() {
  const [screen, setScreen] = useState<Screen>("briefing");
  const [mode, setMode] = useState<SessionMode>("duo");
  const [islandName, setIslandName] = useState("Isla Común");
  const [activeIndex, setActiveIndex] = useState(0);
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [records, setRecords] = useState<Record<string, string>>({});
  const [questionIndexes, setQuestionIndexes] = useState<Record<string, number>>({});
  const [roleIndexes, setRoleIndexes] = useState<Record<string, number>>({});
  const [moves, setMoves] = useState<Record<string, string[]>>({});
  const [pressureOpen, setPressureOpen] = useState<Record<string, boolean>>({});
  const [jobsState, setJobsState] = useState(initialJobs);
  const [budgetState, setBudgetState] = useState(initialBudget);
  const [seconds, setSeconds] = useState(120);
  const [timerRunning, setTimerRunning] = useState(false);

  const active = rounds[activeIndex];
  const chosenId = votes[active.id];
  const chosen = active.options.find(option => option.id === chosenId);
  const completed = Object.keys(votes).length;
  const questionIndex = questionIndexes[active.id] || 0;
  const roleIndex = roleIndexes[active.id] || 0;
  const roundMoves = moves[active.id] || [];

  const metrics = useMemo(() => {
    const next = { ...baseMetrics };
    for (const round of rounds) {
      const option = round.options.find(item => item.id === votes[round.id]);
      if (!option) continue;
      for (const metric of metricOrder) next[metric] = clamp(next[metric] + (option.delta[metric] || 0));
    }
    return next;
  }, [votes]);

  useEffect(() => {
    if (!timerRunning || seconds <= 0) return;
    const timer = window.setInterval(() => setSeconds(value => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [timerRunning, seconds]);

  const goToRound = (index: number) => {
    if (index !== activeIndex) {
      setSeconds(120);
      setTimerRunning(false);
    }
    setActiveIndex(index);
    setScreen("session");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMove = (moveId: string) => {
    setMoves(current => {
      const currentRound = current[active.id] || [];
      return {
        ...current,
        [active.id]: currentRound.includes(moveId)
          ? currentRound.filter(item => item !== moveId)
          : [...currentRound, moveId],
      };
    });
  };

  const restart = () => {
    setScreen("briefing");
    setActiveIndex(0);
    setVotes({});
    setRecords({});
    setQuestionIndexes({});
    setRoleIndexes({});
    setMoves({});
    setPressureOpen({});
    setJobsState(initialJobs);
    setBudgetState(initialBudget);
    setSeconds(120);
    setTimerRunning(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (screen === "briefing") {
    return <main className="island-app island-briefing">
      <nav className="island-topbar">
        <Link href="/" className="island-brand"><span>SC</span><div><b>SPANISHCUE</b><small>CONVERSACIÓN B1</small></div></Link>
        <div className="topbar-rule"><i /> SIMULACIÓN CÍVICA · 100% CONVERSACIÓN</div>
        <Link href="/" className="library-link">← Biblioteca</Link>
      </nav>
      <section className="briefing-stage">
        <div className="briefing-image" aria-hidden="true">
          <img src="/la-isla-vota/island-command-table-v1.webp" alt="" />
          <div className="image-wash" />
          <span className="coordinate north">N</span>
          <span className="coordinate scale">0 — 1 km</span>
        </div>
        <div className="briefing-copy">
          <span className="briefing-kicker">EXPEDIENTE 01 · DÍA 3</span>
          <h1>LA ISLA<br /><em>VOTA</em></h1>
          <p>Treinta y seis personas. Recursos limitados. Ningún gobierno. Cada acuerdo cambia la isla.</p>
          <div className="briefing-facts">
            <span><b>36</b> habitantes</span>
            <span><b>90</b> días sin rescate</span>
            <span><b>8</b> votaciones</span>
          </div>
        </div>
        <aside className="briefing-console">
          <header><span>ANTES DE EMPEZAR</span><b>Configurá la asamblea</b></header>
          <label>Nombre de la isla<input value={islandName} maxLength={28} onChange={event => setIslandName(event.target.value)} placeholder="Nombre de la isla" /></label>
          <fieldset>
            <legend>Formato de clase</legend>
            <button className={mode === "duo" ? "selected" : ""} onClick={() => setMode("duo")}><b>1 A 1</b><small>Alumno decide · profe presiona</small></button>
            <button className={mode === "group" ? "selected" : ""} onClick={() => setMode("group")}><b>GRUPO</b><small>Roles, coaliciones y mayoría</small></button>
          </fieldset>
          <div className="briefing-rules">
            <b>REGLAS DE LA MESA</b>
            <p><span>01</span>Nadie vota sin dar una razón.</p>
            <p><span>02</span>Hay que responder a otra idea.</p>
            <p><span>03</span>Todo acuerdo puede tener condiciones.</p>
          </div>
          <button className="start-session" onClick={() => setScreen("session")}>ABRIR LA ASAMBLEA <span>→</span></button>
        </aside>
      </section>
      <section className="warmup-strip">
        <header><span>ACTIVACIÓN · 5 MIN</span><h2>Antes de crear un país, sobreviví el primer día.</h2></header>
        <div>{warmupQuestions.map((question, index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><p>{question}</p></article>)}</div>
      </section>
    </main>;
  }

  if (screen === "constitution") {
    return <main className="island-app constitution-screen">
      <nav className="island-topbar constitution-topbar">
        <Link href="/" className="island-brand"><span>SC</span><div><b>SPANISHCUE</b><small>CONVERSACIÓN B1</small></div></Link>
        <button onClick={() => setScreen("session")}>← Volver al debate</button>
        <button onClick={() => window.print()}>Imprimir acta</button>
      </nav>
      <header className="constitution-hero">
        <img src="/la-isla-vota/island-command-table-v1.webp" alt="" />
        <div>
          <span>ACTA PROVISIONAL · DÍA 30</span>
          <h1>CONSTITUCIÓN DE<br /><em>{islandName.trim() || "LA ISLA"}</em></h1>
          <p>{completed} de 8 acuerdos cerrados por la asamblea.</p>
        </div>
      </header>
      <div className="constitution-layout">
        <section className="constitution-paper">
          <header><span>ACUERDOS FUNDACIONALES</span><b>La sociedad que construyeron</b></header>
          <ol>
            {rounds.map(round => {
              const option = round.options.find(item => item.id === votes[round.id]);
              return <li key={round.id} className={option ? "decided" : "pending"}>
                <span>{round.number}</span>
                <div><small>{round.ministry}</small><h3>{option ? option.name : "Decisión pendiente"}</h3><p>{records[round.id] || (option ? option.summary : "La asamblea todavía no cerró este punto.")}</p></div>
                <button onClick={() => goToRound(rounds.indexOf(round))}>{option ? "REABRIR" : "DECIDIR"}</button>
              </li>;
            })}
          </ol>
        </section>
        <aside className="constitution-side">
          <MetricBoard values={metrics} />
          <section className="identity-card"><span>IDENTIDAD</span><h2>{islandName.trim() || "La isla sin nombre"}</h2><p><b>Gobierno:</b> {records.poder || "Sin nombre registrado"}</p><p><b>Economía:</b> {records.economia || "Sin nombre registrado"}</p></section>
          <section className="reflection-card">
            <span>DEBATE FINAL · 15 MIN</span>
            <h2>¿Defenderían esta sociedad?</h2>
            <div>{finalQuestions.map((question, index) => <article key={question}><b>{index + 1}</b><p>{question}</p></article>)}</div>
          </section>
          <button className="restart-button" onClick={restart}>Crear otra sociedad desde cero</button>
        </aside>
      </div>
    </main>;
  }

  return <main className="island-app session-screen">
    <nav className="island-topbar session-topbar">
      <Link href="/" className="island-brand"><span>SC</span><div><b>SPANISHCUE</b><small>LA ISLA VOTA · B1</small></div></Link>
      <div className="session-progress"><span>{completed} / 8 ACUERDOS</span><i><b style={{ width: (completed / rounds.length) * 100 + "%" }} /></i></div>
      <button className="constitution-button" disabled={completed === 0} onClick={() => setScreen("constitution")}>Ver constitución</button>
      <Link href="/" className="library-link">Biblioteca</Link>
    </nav>

    <div className="session-layout">
      <aside className="island-command">
        <figure className="island-map">
          <img src="/la-isla-vota/island-command-table-v1.webp" alt="Vista aérea realista de la isla con laguna, bosque, huertas, refugios, paneles solares y muelle" />
          <div className="map-vignette" />
          <figcaption><span>MAPA OPERATIVO</span><b>{islandName.trim() || "Isla sin nombre"}</b></figcaption>
          {markerPositions.map(marker => <button key={marker.label} className={["map-marker", marker.className, marker.index === activeIndex ? "active" : "", votes[rounds[marker.index].id] ? "decided" : ""].join(" ")} onClick={() => goToRound(marker.index)} aria-label={"Abrir " + rounds[marker.index].shortTitle}><i />{marker.label}</button>)}
        </figure>
        <MetricBoard values={metrics} />
        <nav className="round-rail" aria-label="Rondas de la asamblea">
          {rounds.map((round, index) => <button key={round.id} className={[index === activeIndex ? "active" : "", votes[round.id] ? "decided" : ""].join(" ")} onClick={() => goToRound(index)}>
            <span>{round.number}</span><div><small>{round.ministry}</small><b>{round.shortTitle}</b></div><i>{votes[round.id] ? "✓" : "→"}</i>
          </button>)}
        </nav>
      </aside>

      <section className="council-chamber">
        <header className="round-header">
          <div><span>VOTACIÓN {active.number} · {active.ministry}</span><h1>{active.title}</h1><p>{active.situation}</p></div>
          <div className={"debate-timer " + (seconds === 0 ? "finished" : "")}>
            <span>TURNO DE PALABRA</span><b>{formatTime(seconds)}</b>
            <div><button onClick={() => setTimerRunning(value => !value)}>{timerRunning ? "Pausa" : seconds === 0 ? "Terminado" : "Iniciar"}</button><button onClick={() => { setSeconds(120); setTimerRunning(false); }}>↺</button></div>
          </div>
        </header>

        <section className="motion-card">
          <span>MOCIÓN SOBRE LA MESA</span>
          <h2>{active.motion}</h2>
          <p>Primero respondé una pregunta. Después escuchá una objeción. Recién entonces votá.</p>
        </section>

        <DebateQuestion round={active} index={questionIndex} onIndex={index => setQuestionIndexes(current => ({ ...current, [active.id]: index }))} />

        <section className="speaking-lab">
          <header><div><span>CONTROL DE CONVERSACIÓN</span><h2>Una respuesta no alcanza.</h2></div><strong>{roundMoves.length} / {speakingMoves.length} movimientos</strong></header>
          <div className="speaking-moves">{speakingMoves.map(move => <button key={move.id} className={roundMoves.includes(move.id) ? "done" : ""} onClick={() => toggleMove(move.id)} title={move.help}><i>{roundMoves.includes(move.id) ? "✓" : "+"}</i><span>{move.label}</span></button>)}</div>
          <details className="language-drawer">
            <summary>Necesito una frase para negociar</summary>
            <div>{debateTools.map(tool => <button key={tool} onClick={() => navigator.clipboard?.writeText(tool)}>{tool}</button>)}</div>
          </details>
        </section>

        <section className="role-table">
          <header><span>{mode === "duo" ? "PERSPECTIVA PARA EL ALUMNO" : "REPARTO DE ROLES"}</span><h2>No defiendas siempre tu opinión personal.</h2></header>
          <div>{active.roles.map((role, index) => <button key={role.name} className={index === roleIndex ? "active" : ""} onClick={() => setRoleIndexes(current => ({ ...current, [active.id]: index }))}><span>{String(index + 1).padStart(2, "0")}</span><b>{role.name}</b><p>{role.brief}</p></button>)}</div>
          <p className="role-instruction">{mode === "duo" ? "Alumno: defendé la perspectiva elegida. Profe: buscá el punto débil y exigí una condición." : "Cada persona toma una perspectiva. Para ganar la votación necesita formar una coalición."}</p>
        </section>

        <section className="policy-section">
          <header><span>ABRIMOS LA VOTACIÓN</span><h2>Tres propuestas. Ninguna es perfecta.</h2><p>Elegí una, explicá qué costo aceptás y permití una última réplica.</p></header>
          <div className="policy-grid">{active.options.map((option, index) => <button key={option.id} className={chosenId === option.id ? "selected" : ""} onClick={() => setVotes(current => ({ ...current, [active.id]: option.id }))}>
            <span className="policy-letter">{String.fromCharCode(65 + index)}</span>
            <small>{chosenId === option.id ? "TU VOTO" : "PROPUESTA"}</small>
            <h3>{option.name}</h3>
            <p>{option.summary}</p>
            <em>{option.tradeoff}</em>
            <div className="policy-deltas">{metricOrder.map(metric => {
              const value = option.delta[metric];
              if (!value) return null;
              return <span key={metric} className={value > 0 ? "positive" : "negative"}>{value > 0 ? "+" : ""}{value} {metricLabels[metric]}</span>;
            })}</div>
          </button>)}</div>
        </section>

        {active.special === "jobs" && <AllocationBoard items={jobs} values={jobsState} total={24} onChange={setJobsState} kind="personas" />}
        {active.special === "budget" && <AllocationBoard items={budgetAreas} values={budgetState} total={20} onChange={setBudgetState} kind="fichas" />}

        <section className="minutes-card">
          <label><span>ACTA DE LA RONDA</span>{active.recordLabel}</label>
          <input value={records[active.id] || ""} onChange={event => setRecords(current => ({ ...current, [active.id]: event.target.value }))} placeholder={active.recordPlaceholder} />
          <div className="lexicon"><span>PALABRAS ÚTILES</span>{active.lexicon.map(word => <button key={word} onClick={() => navigator.clipboard?.writeText(word)}>{word}</button>)}</div>
        </section>

        <section className={"pressure-card " + (pressureOpen[active.id] ? "open" : "")}>
          {!pressureOpen[active.id] ? <button disabled={!chosen} onClick={() => setPressureOpen(current => ({ ...current, [active.id]: true }))}>
            <span>{chosen ? "EL VOTO TIENE UNA CONSECUENCIA" : "PRIMERO ELEGÍ UNA PROPUESTA"}</span>
            <b>{chosen ? "Abrir el giro de la ronda" : "El conflicto permanece sellado"}</b>
            <i>↗</i>
          </button> : <div>
            <header><span>GIRO DESPUÉS DEL VOTO</span><button onClick={() => setPressureOpen(current => ({ ...current, [active.id]: false }))}>Cerrar</button></header>
            <h2>{active.pressure.title}</h2>
            <p>{active.pressure.copy}</p>
            <div>{active.pressure.questions.map((question, index) => <article key={question}><span>{index + 1}</span><p>{question}</p></article>)}</div>
          </div>}
        </section>

        <footer className="round-footer">
          <button disabled={activeIndex === 0} onClick={() => goToRound(activeIndex - 1)}>← Votación anterior</button>
          <div><span>{chosen ? "ACUERDO REGISTRADO" : "FALTA VOTAR"}</span><b>{chosen ? chosen.name : active.shortTitle}</b></div>
          {activeIndex < rounds.length - 1
            ? <button onClick={() => goToRound(activeIndex + 1)}>Siguiente votación →</button>
            : <button onClick={() => setScreen("constitution")}>Cerrar constitución →</button>}
        </footer>
      </section>
    </div>
  </main>;
}
