"use client";

import Link from "next/link";
import { type Dispatch, type SetStateAction, useMemo, useState } from "react";
import { SpanishCueBrand } from "../SpanishCueBrand";
import {
  CORRECTION_ERRORS,
  DIFFICULT_CLIENT_LINES,
  EMERGENCIES,
  EXERCISES,
  GOALS,
  SURPRISES,
  TRAINING_STAGES,
  countImperatives,
  counterKeyForStage,
  moveCard,
  trainerResult,
  updateCounts,
} from "./engine.mjs";
import "./personal-trainer.css";

const warmupStops = [
  { number: "01", label: "Botella de agua", icon: "H₂O" },
  { number: "02", label: "Zapatillas", icon: "CALZÁ" },
  { number: "03", label: "Vestuario", icon: "CAMBIÁ" },
  { number: "04", label: "Cinta de correr", icon: "05:00" },
  { number: "05", label: "Zona de estiramiento", icon: "MOVÉ" },
];

const warmupHelp = [
  "Cambiate.",
  "Tomá agua.",
  "Caminá cinco minutos.",
  "Mové los brazos.",
  "Estirá las piernas.",
  "Respirá profundo.",
  "Ponete las zapatillas.",
  "Sentate un momento.",
  "Terminá con estiramientos.",
  "No empieces demasiado rápido.",
];

const focusAreas = ["Entrenamiento", "Descanso", "Comida", "Frecuencia", "Hábitos"];
const audienceModes = [
  { id: "vos", label: "1 CLIENTE · VOS", cue: "Cliente rioplatense: dirigime con vos.", frames: ["HACÉ…", "MANTENÉ…", "REPETÍ…", "NO…"] },
  { id: "tu", label: "1 CLIENTE · TÚ", cue: "Ahora tratame de tú y seguí dando órdenes.", frames: ["HAZ…", "MANTÉN…", "REPITE…", "NO…"] },
  { id: "ustedes", label: "GRUPO · USTEDES", cue: "Ahora somos tres clientes: diriginos a todos.", frames: ["HAGAN…", "MANTENGAN…", "REPITAN…", "NO…"] },
];
const forbidden = ["tenés que", "deberías", "podés"];
const allowed = ["Hacé…", "No hagas…", "Probá…", "Empezá…", "Evitá…", "Cambiá…", "Descansá…"];
const weekDays = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO", "DOMINGO"];
const bossRoute = [
  { title: "Entrada", copy: "Decime qué hago apenas llego." },
  { title: "Calentamiento", copy: "Prepará todo mi cuerpo para empezar." },
  { title: "Fuerza", copy: "Dirigí una serie completa de fuerza." },
  { title: "Cardio", copy: "Elegí el ritmo, el tiempo y la intensidad." },
  { title: "Estiramiento", copy: "Guiame para bajar el ritmo sin apuro." },
  { title: "Comida", copy: "Ordename qué comer y qué evitar hoy." },
  { title: "Recuperación", copy: "Decime cómo descansar y cuándo volver." },
];

export default function PersonalTrainer() {
  const [stageIndex, setStageIndex] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState(0);
  const [selectedAudience, setSelectedAudience] = useState(0);
  const [errorIndex, setErrorIndex] = useState(0);
  const [difficultIndex, setDifficultIndex] = useState(0);
  const [emergencyIndex, setEmergencyIndex] = useState(0);
  const [surpriseIndex, setSurpriseIndex] = useState(0);
  const [dayIndex, setDayIndex] = useState(0);
  const [bossIndex, setBossIndex] = useState(0);
  const [visitedDays, setVisitedDays] = useState<number[]>([]);
  const [visitedBossStops, setVisitedBossStops] = useState<number[]>([]);
  const [showHelp, setShowHelp] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});

  const stage = TRAINING_STAGES[stageIndex];
  const counterKey = counterKeyForStage(stage.id, emergencyIndex);
  const stageCount = counts[counterKey] ?? 0;
  const totalImperatives = useMemo(() => countImperatives(counts), [counts]);

  const changeCount = (delta: number) => {
    setCounts((current) => updateCounts(current, counterKey, delta));
  };

  const markVisited = (setter: Dispatch<SetStateAction<number[]>>, index: number) => {
    setter((current) => current.includes(index) ? current : [...current, index]);
  };

  const selectDay = (next: number) => {
    markVisited(setVisitedDays, dayIndex);
    setDayIndex(next);
  };

  const selectBossStop = (next: number) => {
    markVisited(setVisitedBossStops, bossIndex);
    setBossIndex(next);
  };

  const changeStage = (next: number) => {
    setStageIndex(Math.max(0, Math.min(TRAINING_STAGES.length - 1, next)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetLesson = () => {
    setCounts({});
    setSelectedGoal(0);
    setSelectedExercise(0);
    setSelectedAudience(0);
    setErrorIndex(0);
    setDifficultIndex(0);
    setEmergencyIndex(0);
    setSurpriseIndex(0);
    setDayIndex(0);
    setBossIndex(0);
    setVisitedDays([]);
    setVisitedBossStops([]);
    setShowHelp(false);
    changeStage(0);
  };

  const counter = (target: number, useTotal = false, label = "IMPERATIVOS") => {
    const value = useTotal ? totalImperatives : stageCount;
    return (
      <aside className="pt-counter-card" aria-label={`${value} de ${target} imperativos`}>
        <span>{label}</span>
        <strong>{value} <small>/ {target}</small></strong>
        <div className="pt-counter-track" aria-hidden="true">
          <i style={{ width: `${Math.min(100, (value / target) * 100)}%` }} />
        </div>
        <div className="pt-counter-actions">
          <button type="button" onClick={() => changeCount(-1)} aria-label="Restar un imperativo">−</button>
          <button type="button" onClick={() => changeCount(1)}>+1 ORDEN</button>
        </div>
      </aside>
    );
  };

  return (
    <main className={`pt-app pt-stage-${stage.id}`}>
      <header className="pt-header">
        <Link href="/" aria-label="Volver a la biblioteca de SPANISHCUE">
          <SpanishCueBrand variant="compact" tone="light" />
        </Link>
        <div className="pt-header-center">
          <span>B1</span>
          <b>IMPERATIVO</b>
        </div>
        <div className="pt-header-actions">
          {stageIndex > 0 && stageIndex < TRAINING_STAGES.length - 1 && (
            <div className="pt-global-counter" aria-label={`${totalImperatives} imperativos totales`}>
              <span>TOTAL</span><strong>{totalImperatives}</strong>
              <button type="button" onClick={() => changeCount(-1)} aria-label="Restar una orden">−</button>
              <button type="button" onClick={() => changeCount(1)} aria-label="Sumar una orden">+1</button>
            </div>
          )}
          <button
            type="button"
            className="pt-fullscreen"
            onClick={() => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.()}
            aria-label="Activar o salir de pantalla completa"
          >
            ⛶
          </button>
        </div>
      </header>

      {stageIndex > 0 && (
        <nav className="pt-timeline" aria-label="Estaciones del entrenamiento">
          {TRAINING_STAGES.slice(1).map((item: { id: string; title: string; minutes: number }, index: number) => {
            const realIndex = index + 1;
            return (
              <button
                type="button"
                key={item.id}
                className={realIndex === stageIndex ? "active" : realIndex < stageIndex ? "visited" : ""}
                onClick={() => changeStage(realIndex)}
                aria-current={realIndex === stageIndex ? "step" : undefined}
              >
                <i>{String(realIndex).padStart(2, "0")}</i>
                <span>{item.title}</span>
                <small>{item.minutes} min</small>
              </button>
            );
          })}
        </nav>
      )}

      {stageIndex > 0 && stageIndex < TRAINING_STAGES.length - 1 && (
        <div className="pt-command-banner"><span>●</span> DA ÓRDENES. USÁ EL IMPERATIVO.</div>
      )}

      <div className="pt-stage-shell" key={stage.id} aria-live="polite">
        {stage.id === "portada" && (
          <section className="pt-cover">
            <div className="pt-cover-image" role="img" aria-label="Entrenador y cliente dentro de un gimnasio moderno" />
            <div className="pt-cover-copy">
              <p className="pt-kicker"><span>B1</span> GIMNASIO ORAL</p>
              <h1>ENTRENADOR<br /><em>PERSONAL</em></h1>
              <h2>Hoy vos mandás.</h2>
              <p>Convertite en entrenador y dirigí toda la sesión usando imperativos.</p>
              <button type="button" className="pt-primary" onClick={() => changeStage(1)}>
                EMPEZAR ENTRENAMIENTO <span>→</span>
              </button>
              <div className="pt-cover-stats">
                <span><b>45</b> MINUTOS</span>
                <span><b>30+</b> ÓRDENES</span>
                <span><b>1</b> ENTRENADOR: VOS</span>
              </div>
            </div>
          </section>
        )}

        {stage.id === "calentamiento" && (
          <section className="pt-panel pt-warmup">
            <div className="pt-panel-heading">
              <div><p className="pt-kicker">ESTACIÓN 01 · CALENTAMIENTO</p><h1>PREPARAME PARA ENTRENAR</h1></div>
              <p className="pt-situation"><span>CLIENTE</span> Acabo de llegar al gimnasio.</p>
            </div>
            <div className="pt-warmup-layout">
              <div>
                <p className="pt-instruction">Dame órdenes desde que entro hasta que estoy listo.</p>
                <div className="pt-warmup-flow">
                  {warmupStops.map((stop, index) => (
                    <article key={stop.label}>
                      <span>{stop.number}</span><b>{stop.icon}</b><p>{stop.label}</p>{index < warmupStops.length - 1 && <i>→</i>}
                    </article>
                  ))}
                </div>
                <button type="button" className="pt-help-toggle" onClick={() => setShowHelp((visible) => !visible)} aria-expanded={showHelp}>
                  {showHelp ? "OCULTAR AYUDA" : "MOSTRAR AYUDA OPCIONAL"}
                </button>
                {showHelp && <div className="pt-help-bank">{warmupHelp.map((item) => <span key={item}>{item}</span>)}</div>}
              </div>
              {counter(8)}
            </div>
          </section>
        )}

        {stage.id === "objetivo" && (
          <section className="pt-panel pt-goals">
            <div className="pt-panel-heading">
              <div><p className="pt-kicker">ESTACIÓN 02 · PLAN PERSONAL</p><h1>ELEGÍ MI OBJETIVO</h1></div>
              <p className="pt-instruction">Seleccioná una meta. Después, dame al menos 8 órdenes.</p>
            </div>
            <div className="pt-goal-grid">
              {GOALS.map((goal: { id: string; title: string }, index: number) => (
                <button type="button" key={goal.id} className={selectedGoal === index ? "active" : ""} onClick={() => setSelectedGoal(index)} aria-pressed={selectedGoal === index}>
                  <span>0{index + 1}</span><b>{goal.title}</b><i>↗</i>
                </button>
              ))}
            </div>
            <div className="pt-client-goal">
              <div className="pt-client-avatar" aria-hidden="true"><img src="/entrenador-personal/pesas.webp" alt="" /></div>
              <div><span>SOY TU NUEVO CLIENTE</span><h2>Quiero {GOALS[selectedGoal].title.toLowerCase()}.</h2></div>
              <div className="pt-focus-list">{focusAreas.map((area) => <span key={area}>{area}</span>)}</div>
              {counter(8)}
            </div>
          </section>
        )}

        {stage.id === "entrenamiento" && (
          <section className="pt-panel pt-live-training">
            <div className="pt-panel-heading compact">
              <div><p className="pt-kicker">ESTACIÓN 03 · SALA PRINCIPAL</p><h1>ENTRENAMIENTO EN VIVO</h1></div>
              <p className="pt-instruction">Elegí un ejercicio y dirigime en tiempo real.</p>
            </div>
            <div className="pt-exercise-tabs" role="group" aria-label="Ejercicios disponibles">
              {EXERCISES.map((exercise: { id: string; title: string }, index: number) => (
                <button type="button" aria-pressed={selectedExercise === index} key={exercise.id} className={selectedExercise === index ? "active" : ""} onClick={() => setSelectedExercise(index)}>
                  <span>0{index + 1}</span>{exercise.title}
                </button>
              ))}
            </div>
            <div className="pt-audience-switch">
              <div><span>CAMBIÁ DE CLIENTE</span><p>{audienceModes[selectedAudience].cue}</p></div>
              <div role="group" aria-label="Persona para las órdenes">
                {audienceModes.map((audience, index) => (
                  <button type="button" key={audience.id} className={selectedAudience === index ? "active" : ""} aria-pressed={selectedAudience === index} onClick={() => setSelectedAudience(index)}>
                    {audience.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="pt-exercise-stage">
              <div className="pt-exercise-visual">
                <span className="pt-zone-label">ZONA {String(selectedExercise + 1).padStart(2, "0")}</span>
                <img src={EXERCISES[selectedExercise].image} alt={`Cliente haciendo ${EXERCISES[selectedExercise].title.toLowerCase()}`} />
                <h2>{EXERCISES[selectedExercise].title}</h2>
              </div>
              <div className="pt-command-frames">
                <p>DA CUATRO TIPOS DE INSTRUCCIONES</p>
                {audienceModes[selectedAudience].frames.map((frame, index) => <article key={frame}><span>0{index + 1}</span><b>{frame}</b></article>)}
              </div>
            </div>
          </section>
        )}

        {stage.id === "corregime" && (
          <section className="pt-panel pt-correct-me">
            <div className="pt-panel-heading compact">
              <div><p className="pt-kicker">ESTACIÓN 04 · TÉCNICA</p><h1>CORREGIME</h1></div>
              <p className="pt-instruction">Reaccioná rápido. Solo podés usar órdenes.</p>
            </div>
            <div className="pt-error-card">
              <div className="pt-error-signal"><span>!</span><b>ERROR {String(errorIndex + 1).padStart(2, "0")}</b></div>
              <div className="pt-error-copy"><span>CLIENTE</span><blockquote>“{CORRECTION_ERRORS[errorIndex]}”</blockquote></div>
              <div className="pt-reaction-cue"><span>REACCIONÁ</span><strong>PARÁ · CAMBIÁ · CORREGÍ</strong></div>
            </div>
            <div className="pt-card-navigation">
              <div className="pt-card-dots">{CORRECTION_ERRORS.map((_: string, index: number) => <i key={index} className={index === errorIndex ? "active" : ""} />)}</div>
              <button type="button" className="pt-primary" onClick={() => setErrorIndex(moveCard(errorIndex, CORRECTION_ERRORS.length, 1))}>SIGUIENTE ERROR →</button>
            </div>
          </section>
        )}

        {stage.id === "cliente-dificil" && (
          <section className="pt-panel pt-difficult">
            <div className="pt-panel-heading compact">
              <div><p className="pt-kicker">ESTACIÓN 05 · MOTIVACIÓN</p><h1>CLIENTE DIFÍCIL</h1></div>
              <p className="pt-instruction">Respondeme sin negociar la forma gramatical.</p>
            </div>
            <div className="pt-difficult-layout">
              <div className="pt-client-scene">
                <img src="/entrenador-personal/sentadillas.webp" alt="Cliente esperando instrucciones" />
                <div className="pt-speech-bubble"><span>CLIENTE DICE</span><blockquote>“{DIFFICULT_CLIENT_LINES[difficultIndex]}”</blockquote></div>
              </div>
              <aside className="pt-language-rules">
                <div className="pt-forbidden"><span>PROHIBIDO</span>{forbidden.map((item) => <b key={item}>✕ {item}</b>)}</div>
                <div className="pt-allowed"><span>USÁ ÓRDENES</span>{allowed.map((item) => <b key={item}>{item}</b>)}</div>
              </aside>
            </div>
            <div className="pt-card-navigation split">
              <button type="button" onClick={() => setDifficultIndex(moveCard(difficultIndex, DIFFICULT_CLIENT_LINES.length, -1))}>← ANTERIOR</button>
              <span>{String(difficultIndex + 1).padStart(2, "0")} / {String(DIFFICULT_CLIENT_LINES.length).padStart(2, "0")}</span>
              <button type="button" className="pt-primary" onClick={() => setDifficultIndex(moveCard(difficultIndex, DIFFICULT_CLIENT_LINES.length, 1))}>SIGUIENTE CLIENTE →</button>
            </div>
          </section>
        )}

        {stage.id === "semana" && (
          <section className="pt-panel pt-week">
            <div className="pt-panel-heading compact">
              <div><p className="pt-kicker">ESTACIÓN 06 · PLAN SEMANAL</p><h1>CREÁ MI SEMANA</h1></div>
              <p className="pt-instruction">Tocá cada día y organizame usando órdenes.</p>
            </div>
            <div className="pt-profile-strip">
              <b>33 AÑOS</b><span>Muchas horas sentado</span><span>Ganar músculo</span><span>Odia madrugar</span><span>4 días por semana</span><span>Entrena fuerte</span><span>Come sano + pizza</span><span>Sin obsesionarse</span>
            </div>
            <div className="pt-calendar" role="group" aria-label="Días de la semana">
              {weekDays.map((day, index) => (
                <button type="button" aria-pressed={dayIndex === index} className={dayIndex === index ? "active" : ""} onClick={() => selectDay(index)} key={day}>
                  <span>{String(index + 1).padStart(2, "0")}</span><b>{day}</b><i>{dayIndex === index ? "●" : visitedDays.includes(index) ? "✓" : "+"}</i>
                </button>
              ))}
            </div>
            <div className="pt-day-focus">
              <div><span>DÍA {String(dayIndex + 1).padStart(2, "0")}</span><h2>{weekDays[dayIndex]}</h2></div>
              <p>Decime si entreno o descanso. Ordename qué hago, cuándo lo hago, qué como y cómo recupero.</p>
              <button type="button" className="pt-primary" onClick={() => selectDay((dayIndex + 1) % weekDays.length)}>SIGUIENTE DÍA →</button>
            </div>
          </section>
        )}

        {stage.id === "emergencias" && (
          <section className="pt-panel pt-emergencies">
            <div className="pt-panel-heading compact">
              <div><p className="pt-kicker">ESTACIÓN 07 · SEGURIDAD</p><h1>EMERGENCIAS DEL GIMNASIO</h1></div>
              <p className="pt-instruction">Reaccioná rápido. Dame 5 órdenes.</p>
            </div>
            <div className="pt-alert-layout">
              <article className="pt-alert-card">
                <div className="pt-alert-top"><span>ALERTA</span><b>{String(emergencyIndex + 1).padStart(2, "0")}</b></div>
                <div className="pt-alert-icon">!</div>
                <blockquote>“{EMERGENCIES[emergencyIndex]}”</blockquote>
                <p>Contexto básico de entrenamiento y seguridad. No des consejos médicos detallados.</p>
              </article>
              {counter(5, false, "ÓRDENES PARA ESTA ALERTA")}
            </div>
            <div className="pt-card-navigation">
              <div className="pt-card-dots">{EMERGENCIES.map((_: string, index: number) => <i key={index} className={index === emergencyIndex ? "active" : ""} />)}</div>
              <button type="button" className="pt-primary" onClick={() => setEmergencyIndex(moveCard(emergencyIndex, EMERGENCIES.length, 1))}>SIGUIENTE ALERTA →</button>
            </div>
          </section>
        )}

        {stage.id === "final-boss" && (
          <section className="pt-panel pt-boss">
            <div className="pt-panel-heading compact">
              <div><p className="pt-kicker">ESTACIÓN 08 · DESAFÍO FINAL</p><h1>MODO ENTRENADOR PERSONAL</h1></div>
              <p className="pt-situation"><span>CLIENTE</span> Desde ahora yo no tomo ninguna decisión.</p>
            </div>
            <div className="pt-boss-layout">
              <nav className="pt-boss-route" aria-label="Ruta de la sesión final">
                {bossRoute.map((item, index) => (
                  <button type="button" key={item.title} className={bossIndex === index ? "active" : visitedBossStops.includes(index) ? "done" : ""} onClick={() => selectBossStop(index)}>
                    <i>{visitedBossStops.includes(index) ? "✓" : String(index + 1).padStart(2, "0")}</i><span>{item.title}</span>{index < bossRoute.length - 1 && <b>↓</b>}
                  </button>
                ))}
              </nav>
              <div className="pt-boss-focus">
                <span>AHORA DIRIGÍ</span>
                <h2>{bossRoute[bossIndex].title}</h2>
                <p>{bossRoute[bossIndex].copy}</p>
                <div className="pt-surprise-card">
                  <small>TARJETA SORPRESA</small>
                  <blockquote>“{SURPRISES[surpriseIndex]}”</blockquote>
                  <button type="button" onClick={() => setSurpriseIndex(moveCard(surpriseIndex, SURPRISES.length, 1))}>NUEVA SORPRESA ↻</button>
                </div>
              </div>
              {counter(30, true, "IMPERATIVOS TOTALES")}
            </div>
          </section>
        )}

        {stage.id === "resultado" && (
          <section className="pt-panel pt-result">
            <p className="pt-kicker">SESIÓN FINALIZADA</p>
            <h1>ENTRENAMIENTO<br /><em>COMPLETADO</em></h1>
            <div className="pt-result-score"><strong>{totalImperatives}</strong><span>ÓRDENES</span></div>
            <h2>{trainerResult(totalImperatives)}</h2>
            <div className="pt-result-scale">
              <span className={totalImperatives <= 10 ? "active" : ""}><b>0–10</b>CALENTANDO</span>
              <span className={totalImperatives >= 11 && totalImperatives <= 20 ? "active" : ""}><b>11–20</b>BUEN ENTRENADOR</span>
              <span className={totalImperatives >= 21 && totalImperatives <= 29 ? "active" : ""}><b>21–29</b>PRO</span>
              <span className={totalImperatives >= 30 ? "active" : ""}><b>30+</b>MODO ENTRENADOR</span>
            </div>
            <div className="pt-final-prompt"><span>CIERRE ORAL · 5 ÓRDENES MÁS</span><h3>Dame 5 consejos finales para esta semana.</h3><p>Todo debe estar en imperativo.</p></div>
            <div className="pt-result-actions"><button type="button" onClick={() => changeStage(8)}>← VOLVER AL DESAFÍO</button><button type="button" className="pt-primary" onClick={resetLesson}>NUEVO ENTRENAMIENTO ↻</button></div>
          </section>
        )}
      </div>

      {stageIndex > 0 && stageIndex < TRAINING_STAGES.length - 1 && (
        <footer className="pt-stage-nav">
          <button type="button" onClick={() => changeStage(stageIndex - 1)}>← ANTERIOR</button>
          <div><span>{String(stageIndex).padStart(2, "0")} / 08</span><b>{stage.title}</b></div>
          <button type="button" className="next" onClick={() => changeStage(stageIndex + 1)}>{stageIndex === 8 ? "VER RESULTADO →" : "SIGUIENTE ESTACIÓN →"}</button>
        </footer>
      )}
    </main>
  );
}
