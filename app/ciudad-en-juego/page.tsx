"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import PlayShell, { CardNav, SpeakPrompt, type PlayPowerUp, type PlayStage } from "../play-mode/PlayShell";
import {
  bossPrompts,
  changeRounds,
  cityChoiceCategories,
  cityChoices,
  cityEvents,
  finalQuestions,
  lessonStats,
  metricLabels,
  negotiationRounds,
  priorityRounds,
  urbanProblems,
  type MetricKey,
} from "./data";
import "./style.css";

const stages: PlayStage[] = [
  { label: "ELEGÍ TU BASE", short: "ELEGÍ", minutes: 4, color: "#ff6b57" },
  { label: "PRIORIZÁ", short: "TOP 2", minutes: 5, color: "#17aeb8" },
  { label: "RESOLVÉ EL PROBLEMA", short: "PROBLEMA", minutes: 7, color: "#f09b16" },
  { label: "NEGOCIÁ", short: "ACUERDO", minutes: 8, color: "#7259e8" },
  { label: "CAMBIÓ LA REGLA", short: "CAMBIO", minutes: 7, color: "#e64e83" },
  { label: "¡EVENTO!", short: "EVENTO", minutes: 4, color: "#21aa6f" },
  { label: "BOSS ROUND · DEFENDÉ TU CIUDAD", short: "BOSS", minutes: 10, color: "#315cff" },
];

const extraPowerUps: readonly PlayPowerUp[] = [
  ["COSTO", "¿Qué cuesta tu decisión en dinero, tiempo o espacio público? Elegí un costo y explicalo."],
  ["CONSECUENCIA", "Imaginá esta decisión dentro de cinco años: ¿qué mejora y qué problema nuevo podría crear?"],
];

function BankBar({ total, suggested, onShuffle, children }: { total: number; suggested: string; onShuffle: () => void; children?: ReactNode }) {
  return (
    <div className="city-bank-bar">
      <div><b>BANCO · {total}</b><span>{suggested}</span></div>
      {children}
      <button onClick={onShuffle}>AL AZAR ↻</button>
    </div>
  );
}

function CityConsole({ scores, decisions }: { scores: Record<MetricKey, number>; decisions: number }) {
  return (
    <section className="city-console" aria-label="Indicadores de tu ciudad">
      <div className="city-console-title">
        <small>TU CIUDAD</small>
        <strong>{decisions ? `${decisions} DECISIONES GUARDADAS` : "LISTA PARA CONSTRUIR"}</strong>
        <span>{lessonStats.total} disparadores · usá solo una parte</span>
      </div>
      <div className="city-meters">
        {metricLabels.map((metric) => (
          <div key={metric.key} style={{ "--meter-color": metric.color } as CSSProperties}>
            <span><b>{metric.label}</b><i>{scores[metric.key]}</i></span>
            <em><i style={{ width: `${scores[metric.key]}%` }} /></em>
          </div>
        ))}
      </div>
      <img src="/brand/mascot/pointing.webp" alt="" width="900" height="1350" />
    </section>
  );
}

function StageCard({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="city-stage-card">
      <small>{eyebrow}</small>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default function CiudadEnJuego() {
  const [stage, setStage] = useState(0);
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState<(typeof cityChoiceCategories)[number]>("TODO");
  const [choiceSelections, setChoiceSelections] = useState<Record<string, number>>({});
  const [prioritySelections, setPrioritySelections] = useState<Record<string, number[]>>({});
  const [problemSelections, setProblemSelections] = useState<Record<string, number>>({});
  const [problemCost, setProblemCost] = useState(false);
  const [negotiationMode, setNegotiationMode] = useState<"PACTO" | "PARTIDO" | "CONDICIÓN" | null>(null);
  const [negotiationPressure, setNegotiationPressure] = useState(false);
  const [changeRevealed, setChangeRevealed] = useState(false);
  const [changeDecision, setChangeDecision] = useState<"MANTENGO" | "CAMBIO" | null>(null);
  const [eventCue, setEventCue] = useState<string | null>(null);
  const [bossMode, setBossMode] = useState<"present" | "talk">("present");
  const [bossIndex, setBossIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(0);

  const choicePool = useMemo(
    () => cityChoices.filter((item) => category === "TODO" || item.category === category),
    [category],
  );
  const choiceIndex = index % choicePool.length;
  const currentChoice = choicePool[choiceIndex];

  const scores = useMemo(() => {
    const result: Record<MetricKey, number> = { calidad: 50, movilidad: 50, ambiente: 50, equidad: 50, presupuesto: 50 };
    Object.entries(choiceSelections).forEach(([id, optionIndex]) => {
      const prompt = cityChoices.find((item) => item.id === id);
      const impact = prompt?.options[optionIndex]?.impact;
      if (!impact) return;
      Object.entries(impact).forEach(([key, value]) => {
        const metric = key as MetricKey;
        result[metric] = Math.max(12, Math.min(94, result[metric] + (value ?? 0)));
      });
    });
    return result;
  }, [choiceSelections]);

  const profile = useMemo(() => {
    const choices = cityChoices.flatMap((item) => {
      const selected = choiceSelections[item.id];
      return selected === undefined ? [] : [item.options[selected].label];
    });
    const priorities = priorityRounds.flatMap((item) =>
      (prioritySelections[item.id] ?? []).map((selected) => item.items[selected]),
    );
    const solutions = urbanProblems.flatMap((item) => {
      const selected = problemSelections[item.id];
      if (selected === undefined) return [];
      return [selected === 3 ? "SOLUCIÓN PROPIA" : item.options[selected].label];
    });
    return [...choices, ...priorities, ...solutions].slice(-8);
  }, [choiceSelections, prioritySelections, problemSelections]);

  const savedDecisions = Object.keys(choiceSelections).length +
    Object.values(prioritySelections).filter((items) => items.length === 2).length +
    Object.keys(problemSelections).length;

  const resetTransient = () => {
    setProblemCost(false);
    setNegotiationMode(null);
    setNegotiationPressure(false);
    setChangeRevealed(false);
    setChangeDecision(null);
    setEventCue(null);
  };

  const changeStage = (next: number) => {
    setStage(next);
    setIndex(0);
    resetTransient();
  };

  const move = (total: number, amount: number) => {
    setIndex((value) => (value + amount + total) % total);
    resetTransient();
  };

  const shuffle = (total: number) => {
    if (total < 2) return;
    setIndex((value) => {
      let next = value % total;
      while (next === value % total) next = Math.floor(Math.random() * total);
      return next;
    });
    resetTransient();
  };

  const chooseCategory = (next: (typeof cityChoiceCategories)[number]) => {
    setCategory(next);
    setIndex(0);
    resetTransient();
  };

  const priority = priorityRounds[index % priorityRounds.length];
  const pickedPriorities = prioritySelections[priority.id] ?? [];
  const togglePriority = (itemIndex: number) => {
    setPrioritySelections((current) => {
      const picked = current[priority.id] ?? [];
      if (picked.includes(itemIndex)) return { ...current, [priority.id]: picked.filter((item) => item !== itemIndex) };
      if (picked.length === 2) return { ...current, [priority.id]: [picked[1], itemIndex] };
      return { ...current, [priority.id]: [...picked, itemIndex] };
    });
  };

  const problem = urbanProblems[index % urbanProblems.length];
  const problemSelection = problemSelections[problem.id];
  const negotiation = negotiationRounds[index % negotiationRounds.length];
  const change = changeRounds[index % changeRounds.length];
  const event = cityEvents[index % cityEvents.length];

  return (
    <PlayShell
      lesson="B1 · CONVERSACIÓN · MODO PLAY · 03"
      title="CIUDAD EN JUEGO"
      stages={stages}
      stage={stage}
      onStageChange={changeStage}
      extraPowerUps={extraPowerUps}
      supportLevel="B1"
    >
      {stage < 6 && <CityConsole scores={scores} decisions={savedDecisions} />}

      {stage === 0 && currentChoice && (
        <section className="city-round">
          <BankBar total={choicePool.length} suggested="elegí 4–6 en esta sesión" onShuffle={() => shuffle(choicePool.length)}>
            <nav className="city-category-nav" aria-label="Filtrar decisiones">
              {cityChoiceCategories.map((item) => (
                <button key={item} className={category === item ? "active" : ""} onClick={() => chooseCategory(item)}>{item}</button>
              ))}
            </nav>
          </BankBar>
          <span className="play-kicker">{currentChoice.category} · TOCÁ PRIMERO, JUSTIFICÁ DESPUÉS</span>
          <h2 className="play-question">{currentChoice.question}</h2>
          <div className="choice-grid city-choice-grid">
            {currentChoice.options.map((option, optionIndex) => (
              <button
                key={option.label}
                className={`choice-button ${choiceSelections[currentChoice.id] === optionIndex ? "selected" : ""}`}
                style={{ "--choice": optionIndex === 0 ? "#17aeb8" : "#315cff" } as CSSProperties}
                onClick={() => setChoiceSelections((current) => ({ ...current, [currentChoice.id]: optionIndex }))}
              >
                {option.label}
              </button>
            ))}
          </div>
          {choiceSelections[currentChoice.id] !== undefined && (
            <>
              <div className="city-feedback"><small>EFECTO INMEDIATO</small><b>{currentChoice.options[choiceSelections[currentChoice.id]].feedback}</b></div>
              <SpeakPrompt>{currentChoice.follow}</SpeakPrompt>
            </>
          )}
          <CardNav index={choiceIndex} total={choicePool.length} onPrevious={() => move(choicePool.length, -1)} onNext={() => move(choicePool.length, 1)} />
        </section>
      )}

      {stage === 1 && (
        <section className="city-round">
          <BankBar total={priorityRounds.length} suggested="usá 2–3 tableros" onShuffle={() => shuffle(priorityRounds.length)} />
          <span className="play-kicker">TOCÁ EN ORDEN · SOLO QUEDAN DOS</span>
          <h2 className="play-question">{priority.situation}</h2>
          <div className="city-priority-grid">
            {priority.items.map((item, itemIndex) => {
              const rank = pickedPriorities.indexOf(itemIndex);
              return (
                <button key={item} className={rank >= 0 ? "picked" : ""} onClick={() => togglePriority(itemIndex)}>
                  {rank >= 0 && <span>{rank + 1}</span>}
                  <b>{item}</b>
                </button>
              );
            })}
          </div>
          {pickedPriorities.length === 2 && <SpeakPrompt tone="lime">{priority.follow}</SpeakPrompt>}
          <CardNav index={index % priorityRounds.length} total={priorityRounds.length} onPrevious={() => move(priorityRounds.length, -1)} onNext={() => move(priorityRounds.length, 1)} />
        </section>
      )}

      {stage === 2 && (
        <section className="city-round">
          <BankBar total={urbanProblems.length} suggested="resolvé 2–3 problemas" onShuffle={() => shuffle(urbanProblems.length)} />
          <StageCard eyebrow="ALERTA URBANA" title={problem.title}><p>{problem.detail}</p></StageCard>
          <h3 className="city-action-title">¿Qué solución defendés?</h3>
          <div className="city-solution-grid">
            {problem.options.map((option, optionIndex) => (
              <button
                key={option.label}
                className={problemSelection === optionIndex ? "selected" : ""}
                onClick={() => { setProblemSelections((current) => ({ ...current, [problem.id]: optionIndex })); setProblemCost(false); }}
              >
                <span>{optionIndex + 1}</span><b>{option.label}</b>
              </button>
            ))}
            <button
              className={`own-solution ${problemSelection === 3 ? "selected" : ""}`}
              onClick={() => { setProblemSelections((current) => ({ ...current, [problem.id]: 3 })); setProblemCost(false); }}
            >
              <span>+</span><b>PROPONÉ OTRA</b>
            </button>
          </div>
          {problemSelection !== undefined && problemSelection < 3 && !problemCost && (
            <><SpeakPrompt>Explicá por qué esta solución debería funcionar.</SpeakPrompt><button className="reveal-button" onClick={() => setProblemCost(true)}>VER COSTO OCULTO ↓</button></>
          )}
          {problemSelection === 3 && <SpeakPrompt>Explicá tu solución, cómo se pagaría y qué riesgo podría crear.</SpeakPrompt>}
          {problemCost && problemSelection < 3 && (
            <><div className="twist-card"><small>COSTO OCULTO</small><b>{problem.options[problemSelection].consequence}</b></div><SpeakPrompt tone="coral">¿Mantenés tu solución, la ajustás o cambiás? Defendé la nueva versión.</SpeakPrompt></>
          )}
          <CardNav index={index % urbanProblems.length} total={urbanProblems.length} onPrevious={() => move(urbanProblems.length, -1)} onNext={() => move(urbanProblems.length, 1)} />
        </section>
      )}

      {stage === 3 && (
        <section className="city-round">
          <BankBar total={negotiationRounds.length} suggested="hacé 2 negociaciones" onShuffle={() => shuffle(negotiationRounds.length)} />
          <span className="play-kicker">DOS INTERESES · UN ACUERDO DEFENDIBLE</span>
          <div className="city-negotiation-grid">
            <article className="side-a"><small>{negotiation.sideA.name}</small><b>{negotiation.sideA.wants}</b></article>
            <span>VS</span>
            <article className="side-b"><small>{negotiation.sideB.name}</small><b>{negotiation.sideB.wants}</b></article>
          </div>
          <div className="city-shared-goal"><small>OBJETIVO COMÚN</small><b>{negotiation.shared}</b></div>
          <div className="city-strategies">
            <button className={negotiationMode === "PACTO" ? "active" : ""} onClick={() => setNegotiationMode("PACTO")}>PROPONÉ UN PACTO</button>
            <button className={negotiationMode === "PARTIDO" ? "active" : ""} onClick={() => setNegotiationMode("PARTIDO")}>TOMÁ PARTIDO</button>
            <button className={negotiationMode === "CONDICIÓN" ? "active" : ""} onClick={() => setNegotiationMode("CONDICIÓN")}>PONÉ UNA CONDICIÓN</button>
          </div>
          {negotiationMode && !negotiationPressure && (
            <>
              <SpeakPrompt>
                {negotiationMode === "PACTO" && "Proponé una medida concreta que ambos podrían aceptar. ¿Qué cede cada lado?"}
                {negotiationMode === "PARTIDO" && "Elegí un lado, defendelo y reconocé qué reclamo razonable tiene el otro."}
                {negotiationMode === "CONDICIÓN" && "Usá “lo aceptaría solo si…” y formulá una condición verificable."}
              </SpeakPrompt>
              <button className="reveal-button" onClick={() => setNegotiationPressure(true)}>NUEVA CONDICIÓN ↓</button>
            </>
          )}
          {negotiationPressure && (
            <><div className="twist-card"><small>AHORA NEGOCIÁ CON ESTO</small><b>{negotiation.pressure}</b></div><SpeakPrompt tone="coral">Reformulá el acuerdo. ¿Qué mantenés y qué concedés ahora?</SpeakPrompt></>
          )}
          <CardNav index={index % negotiationRounds.length} total={negotiationRounds.length} onPrevious={() => move(negotiationRounds.length, -1)} onNext={() => move(negotiationRounds.length, 1)} />
        </section>
      )}

      {stage === 4 && (
        <section className="city-round">
          <BankBar total={changeRounds.length} suggested="usá 3–4 cambios" onShuffle={() => shuffle(changeRounds.length)} />
          <StageCard eyebrow="TU DECISIÓN" title={change.decision} />
          {!changeRevealed ? (
            <><SpeakPrompt>Defendé esa decisión con una ventaja y un objetivo.</SpeakPrompt><button className="city-change-trigger" onClick={() => setChangeRevealed(true)}>¡CAMBIO!<span>ABRIR NUEVA CONDICIÓN ↓</span></button></>
          ) : (
            <>
              <div className="city-change-card"><small>CAMBIÓ LA REGLA</small><b>{change.change}</b><p>{change.question}</p></div>
              <div className="decision-row">
                <button className={changeDecision === "MANTENGO" ? "active" : ""} onClick={() => setChangeDecision("MANTENGO")}>MANTENGO</button>
                <button className={changeDecision === "CAMBIO" ? "active" : ""} onClick={() => setChangeDecision("CAMBIO")}>CAMBIO</button>
              </div>
              {changeDecision && <SpeakPrompt tone={changeDecision === "MANTENGO" ? "lime" : "coral"}>{changeDecision === "MANTENGO" ? "Defendé qué beneficio justifica el nuevo costo y qué límite no cruzarías." : "Explicá qué dato cambió tu postura y presentá una alternativa mejor."}</SpeakPrompt>}
            </>
          )}
          <CardNav index={index % changeRounds.length} total={changeRounds.length} onPrevious={() => move(changeRounds.length, -1)} onNext={() => move(changeRounds.length, 1)} />
        </section>
      )}

      {stage === 5 && (
        <section className="city-round">
          <BankBar total={cityEvents.length} suggested="reaccioná a 2 eventos" onShuffle={() => shuffle(cityEvents.length)} />
          <div className="city-event-card">
            <span>¡EVENTO!</span>
            <small>{event.title}</small>
            <h2>{event.detail}</h2>
            <p>{event.question}</p>
          </div>
          <div className="city-event-cues">
            {event.cues.map((cue) => <button key={cue} className={eventCue === cue ? "active" : ""} onClick={() => setEventCue(cue)}>{cue}</button>)}
          </div>
          {eventCue && <SpeakPrompt tone="coral">Empezá por “{eventCue.toLowerCase()}”. Reaccioná en treinta segundos y anticipá una consecuencia.</SpeakPrompt>}
          <CardNav index={index % cityEvents.length} total={cityEvents.length} onPrevious={() => move(cityEvents.length, -1)} onNext={() => move(cityEvents.length, 1)} />
        </section>
      )}

      {stage === 6 && (
        <section className="city-round city-boss-round">
          <div className="boss-mode-switch" role="tablist" aria-label="Cierre de la clase">
            <button role="tab" aria-selected={bossMode === "present"} onClick={() => setBossMode("present")}>PRESENTÁ TU CIUDAD · 8</button>
            <button role="tab" aria-selected={bossMode === "talk"} onClick={() => setBossMode("talk")}>CONVERSACIÓN FINAL · 10</button>
          </div>
          <div className="city-blueprint">
            <div><small>PLANO FINAL</small><b>{profile.length ? "TU MODELO YA TIENE IDENTIDAD" : "CONSTRUÍ TU MODELO HABLANDO"}</b></div>
            <p>{profile.length ? profile.map((item, itemIndex) => <span key={`${item}-${itemIndex}`}>{item}</span>) : <span>Usá tus decisiones de la clase</span>}</p>
            <img src="/brand/mascot/standing-crossed.webp" alt="" width="900" height="1350" />
          </div>
          {bossMode === "present" ? (
            <>
              <span className="play-kicker">SIN RESPUESTAS EN PANTALLA · PRESENTACIÓN FINAL</span>
              <h2 className="boss-word">{bossPrompts[bossIndex][0]}</h2>
              <p className="boss-prompt">{bossPrompts[bossIndex][1]}</p>
              <SpeakPrompt>Conectá tu respuesta con una decisión, un costo y una consecuencia.</SpeakPrompt>
              <CardNav index={bossIndex} total={bossPrompts.length} onPrevious={() => setBossIndex((value) => (value - 1 + bossPrompts.length) % bossPrompts.length)} onNext={() => setBossIndex((value) => (value + 1) % bossPrompts.length)} />
            </>
          ) : (
            <>
              <span className="play-kicker">CONVERSACIÓN REAL · ELEGÍ 2–3</span>
              <h2 className="city-final-question">{finalQuestions[finalIndex]}</h2>
              <SpeakPrompt>Respondé, da un ejemplo real y después cuestioná tu propia respuesta.</SpeakPrompt>
              <CardNav index={finalIndex} total={finalQuestions.length} onPrevious={() => setFinalIndex((value) => (value - 1 + finalQuestions.length) % finalQuestions.length)} onNext={() => setFinalIndex((value) => (value + 1) % finalQuestions.length)} />
            </>
          )}
        </section>
      )}
    </PlayShell>
  );
}
