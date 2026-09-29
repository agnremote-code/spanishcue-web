"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SpanishCueBrand } from "../SpanishCueBrand";
import {
  CARGO,
  CHEAT_SHEET,
  CORRECT_LINES,
  CROSSED,
  DISCOVERY_PAIRS,
  DISCOVERY_QUESTIONS,
  EXIT_QUESTIONS,
  FINAL_CHECKLIST,
  FINAL_ROLES,
  MAX_RESPECT,
  PHRASE_BANK,
  ROUTES,
  STAGES,
  VEHICLES,
  WARMUP_QUESTIONS,
  applyAnswer,
  applyDelivery,
  initialState,
  missionVerdict,
  rankFor,
} from "./engine.mjs";
import "./recadero.css";

type Stage = { id: string; title: string; zone: string; minutes: number };
type Choice = { options: string[]; answer: number; hint: string };
type GameState = {
  coins: number;
  respect: number;
  attempts: Record<string, number>;
  solved: Record<string, boolean>;
  crossed: Record<string, boolean>;
  deliveries: Record<string, boolean>;
};
type Feedback = { ok: boolean; text: string };
type RouteCard = { from: string; text: string; model: string };
type Route = { id: string; name: string; risk: string; bonus: number; cards: RouteCard[] };

const CLOCK = ["20:00", "20:40", "21:25", "22:10", "22:45", "23:00", "00:00"];
const MAP_NODES = [
  { stage: 1, label: "Mercado", x: 16, y: 70 },
  { stage: 2, label: "Puerto", x: 38, y: 86 },
  { stage: 3, label: "Barrio Alto", x: 64, y: 58 },
  { stage: 4, label: "Techos", x: 42, y: 34 },
  { stage: 5, label: "Terraza", x: 82, y: 20 },
];
const LAST_MESSAGES = [
  { name: "Doña Chela", line: "Dice que mañana te guarda el mejor hielo del mercado." },
  { name: "Tano", line: "Dice que la próxima canción es para vos." },
  { name: "Lu", line: "Pregunta si querés las empanadas que sobraron." },
  { name: "Mayra", line: "Te pide que la llames cuando llegues a tu casa." },
  { name: "Inspector Ruiz", line: "Dice que esta vez no hay multa." },
];
const DISCOVERY_CORRECT = "¡Eso! Chela te deja un 10 % de propina. +10 fichas.";
const CROSSED_CORRECT = "Mensaje reparado. Respeto recuperado ★";
const FINAL_SECONDS = 600;

const bold = (text: string) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, index) => (index % 2 ? <b key={index}>{part}</b> : <span key={index}>{part}</span>));

function partyClock(elapsed: number) {
  const gameMinutes = Math.min(60, Math.floor(elapsed / 10));
  if (gameMinutes >= 60) return "00:00";
  return `23:${String(gameMinutes).padStart(2, "0")}`;
}

export default function RecaderoGame() {
  const [stageIndex, setStageIndex] = useState(0);
  const [vehicle, setVehicle] = useState(0);
  const [game, setGame] = useState<GameState>(() => initialState() as GameState);
  const [picks, setPicks] = useState<Record<string, number>>({});
  const [feedback, setFeedback] = useState<Record<string, Feedback>>({});
  const [cargoIndex, setCargoIndex] = useState(0);
  const [crossedIndex, setCrossedIndex] = useState(0);
  const [routeIndex, setRouteIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [checklist, setChecklist] = useState<boolean[]>(() => FINAL_CHECKLIST.map(() => false));
  const [missionReward, setMissionReward] = useState<number | null>(null);
  const [mediationStarted, setMediationStarted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [teacher, setTeacher] = useState(false);
  const [cheatOpen, setCheatOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [exitIndex, setExitIndex] = useState(0);
  const [warmupIndex, setWarmupIndex] = useState(0);

  const stage: Stage = STAGES[stageIndex];
  const routes = ROUTES as Route[];
  const route = routeIndex === null ? null : routes[routeIndex];
  const discoveryDone = DISCOVERY_QUESTIONS.every((_: Choice, index: number) => game.solved[`d${index}`]);
  const cheatUnlocked = discoveryDone || stageIndex > 1;
  const checkedCount = checklist.filter(Boolean).length;
  const verdict = missionVerdict(checkedCount);
  const totalCoins = game.coins + (missionReward ?? 0);

  const stageDone = useMemo(() => {
    const done: Record<number, boolean> = {
      1: discoveryDone,
      2: CARGO.every((_: Choice, index: number) => game.solved[`c${index}`]),
      3: CROSSED.every((_: Choice, index: number) => game.solved[`x${index}`]),
      4: route ? route.cards.every((_, index) => game.deliveries[`${route.id}-${index}`]) : false,
      5: missionReward !== null,
    };
    return done;
  }, [discoveryDone, game, route, missionReward]);

  useEffect(() => {
    if (!mediationStarted || stage.id !== "terraza") return;
    const timer = window.setInterval(() => setElapsed((value) => Math.min(FINAL_SECONDS, value + 1)), 1000);
    return () => window.clearInterval(timer);
  }, [mediationStarted, stage.id]);

  const changeStage = (next: number) => {
    setStageIndex(Math.max(0, Math.min(STAGES.length - 1, next)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const answer = (key: string, item: Choice, option: number, correctText: string) => {
    if (game.solved[key]) return;
    const correct = option === item.answer;
    setPicks((current) => ({ ...current, [key]: option }));
    setGame((current) => applyAnswer(current, key, correct) as GameState);
    setFeedback((current) => ({ ...current, [key]: { ok: correct, text: correct ? correctText : item.hint } }));
  };

  const deliver = (key: string, delivered: boolean, bonus: number) => {
    setGame((current) => applyDelivery(current, key, delivered, bonus) as GameState);
  };

  const sendVoiceNote = () => {
    setMissionReward(verdict.reward);
    setMediationStarted(false);
  };

  const resetGame = () => {
    setGame(initialState() as GameState);
    setPicks({});
    setFeedback({});
    setCargoIndex(0);
    setCrossedIndex(0);
    setRouteIndex(null);
    setRevealed({});
    setChecklist(FINAL_CHECKLIST.map(() => false));
    setMissionReward(null);
    setMediationStarted(false);
    setElapsed(0);
    setTeacher(false);
    setCheatOpen(false);
    setResourcesOpen(false);
    changeStage(0);
  };

  const options = (key: string, item: Choice, correctText: string, label: string) => (
    <div className="rp-options" role="group" aria-label={label}>
      {item.options.map((option, index) => {
        const picked = picks[key] === index;
        const solved = game.solved[key];
        const state = solved && index === item.answer ? "right" : picked && !solved ? "wrong" : "";
        return (
          <button
            type="button"
            key={option}
            className={state}
            aria-pressed={picked}
            disabled={solved && index !== item.answer}
            onClick={() => answer(key, item, index, correctText)}
          >
            <i>{String.fromCharCode(65 + index)}</i>{option}
          </button>
        );
      })}
    </div>
  );

  const feedbackLine = (key: string) => {
    const item = feedback[key];
    if (!item) return null;
    return <p className={`rp-feedback ${item.ok ? "ok" : "ko"}`} role="status">{item.ok ? "✓" : "↺"} {item.text}</p>;
  };

  const stars = (
    <span className="rp-stars" aria-label={`Respeto: ${game.respect} de ${MAX_RESPECT} estrellas`}>
      {Array.from({ length: MAX_RESPECT }, (_, index) => {
        const fill = Math.max(0, Math.min(1, game.respect - index));
        return <i key={index} className={fill === 1 ? "full" : fill > 0 ? "half" : ""}>★</i>;
      })}
    </span>
  );

  const teacherToggle = (label = "SOLO PROFESOR · ABRIR ROL") => (
    <button type="button" className="rp-teacher-toggle" aria-pressed={teacher} onClick={() => setTeacher((value) => !value)}>
      {teacher ? "CERRAR NOTAS DEL PROFESOR" : label}
    </button>
  );

  const cargo: Choice & { from: string; original: string; before: string; after: string } = CARGO[cargoIndex];
  const crossed: Choice & { original: string; rulo: string; consequence: string } = CROSSED[crossedIndex];
  const cargoKey = `c${cargoIndex}`;
  const crossedKey = `x${crossedIndex}`;

  return (
    <main className={`rp-app rp-stage-${stage.id}`}>
      <header className="rp-header">
        <Link href="/" aria-label="Volver a la biblioteca de SPANISHCUE">
          <SpanishCueBrand variant="compact" tone="light" />
        </Link>
        <div className="rp-header-center"><span>B1</span><b>DISCURSO REFERIDO</b></div>
        <div className="rp-hud" aria-label="Estado de la partida">
          <span className="rp-hud-zone"><small>ZONA</small>{stage.zone}</span>
          <span className="rp-hud-coins"><small>FICHAS</small>{totalCoins}</span>
          <span className="rp-hud-respect"><small>RESPETO</small>{stars}</span>
          <span className="rp-hud-clock"><small>FIESTA</small>{stage.id === "terraza" ? partyClock(elapsed) : CLOCK[stageIndex]}</span>
        </div>
      </header>

      <nav className="rp-timeline" aria-label="Encargos de la noche">
        {STAGES.map((item: Stage, index: number) => (
          <button
            type="button"
            key={item.id}
            className={index === stageIndex ? "active" : stageDone[index] ? "done" : index < stageIndex ? "visited" : ""}
            onClick={() => changeStage(index)}
            aria-current={index === stageIndex ? "step" : undefined}
          >
            <i>{stageDone[index] ? "✓" : String(index).padStart(2, "0")}</i>
            <span>{item.title}</span>
            <small>{item.zone} · {item.minutes} min</small>
          </button>
        ))}
      </nav>

      <div className="rp-layout">
        <div className="rp-stage-shell" key={stage.id} aria-live="polite">
          {stage.id === "arranque" && (
            <section className="rp-cover">
              <div className="rp-cover-image" role="img" aria-label="Terraza iluminada sobre la ciudad de noche, con el puerto al fondo" />
              <div className="rp-cover-copy">
                <p className="rp-kicker"><span>MODO PLAY</span> RECADO EXPRESS · DESPACHO</p>
                <h1>EL RECADERO<br /><em>DE PUERTO NEÓN</em></h1>
                <div className="rp-phone">
                  <img src="/brand/mascot/speaking.webp" alt="La mascota de SpanishCue, despachante de Recado Express" />
                  <p>«Bienvenido/a al equipo. Esta noche hay fiesta en la terraza del barrio y todos quieren mandar mensajes… pero nadie quiere hablar directamente con nadie. Vos sos el puente. <b>Regla número uno: el mensaje llega igual que salió.</b> Regla número dos: ver regla número uno.»</p>
                </div>
                <div className="rp-vehicles" role="group" aria-label="Elegí tu vehículo">
                  <span>ELEGÍ TU VEHÍCULO</span>
                  {VEHICLES.map((item: { id: string; label: string; icon: string }, index: number) => (
                    <button type="button" key={item.id} className={vehicle === index ? "active" : ""} aria-pressed={vehicle === index} onClick={() => setVehicle(index)}>
                      <b aria-hidden="true">{item.icon}</b>{item.label}
                    </button>
                  ))}
                </div>
                <div className="rp-warmup">
                  <span>ANTES DE SALIR · CONTALO EN 2 O 3 FRASES</span>
                  <p>{WARMUP_QUESTIONS[warmupIndex]}</p>
                  <button type="button" onClick={() => setWarmupIndex((value) => (value + 1) % WARMUP_QUESTIONS.length)}>OTRA PREGUNTA ↻</button>
                </div>
                {teacherToggle()}
                {teacher && <p className="rp-teacher-note">Que cuenten la anécdota en 2 o 3 frases. Anotá cualquier «me dijo que…» que aparezca de forma natural. Todavía no corrijas.</p>}
                <button type="button" className="rp-primary" onClick={() => changeStage(1)}>ARRANCAR EL TURNO <span>→</span></button>
                <div className="rp-cover-stats">
                  <span><b>45</b> MINUTOS</span>
                  <span><b>5</b> ENCARGOS</span>
                  <span><b>1</b> FIESTA PARA SALVAR</span>
                </div>
              </div>
            </section>
          )}

          {stage.id === "mercado" && (
            <section className="rp-panel">
              <div className="rp-panel-heading">
                <div><p className="rp-kicker">ENCARGO 01 · EL MERCADO</p><h1>NOTAS DE VOZ DE DOÑA CHELA</h1></div>
                <p className="rp-instruction">Leé lo que dijo Chela y cómo se lo entregó el recadero a Lu. Después descubrí la regla.</p>
              </div>
              <div className="rp-pairs">
                {DISCOVERY_PAIRS.map((pair: { original: string; relayed: string; kind: string }) => (
                  <article key={pair.kind}>
                    <span className="rp-tag">{pair.kind}</span>
                    <div className="rp-voice"><small>▶ NOTA DE VOZ · CHELA</small><blockquote>«{pair.original}»</blockquote></div>
                    <i aria-hidden="true">→</i>
                    <div className="rp-voice relayed"><small>EL RECADERO A LU</small><blockquote>«{bold(pair.relayed)}»</blockquote></div>
                  </article>
                ))}
              </div>
              <div className="rp-questions">
                {DISCOVERY_QUESTIONS.map((item: Choice & { prompt: string }, index: number) => (
                  <article key={item.prompt}>
                    <p><b>{index + 1}.</b> {item.prompt}</p>
                    {options(`d${index}`, item, DISCOVERY_CORRECT, `Pregunta ${index + 1}`)}
                    {feedbackLine(`d${index}`)}
                  </article>
                ))}
              </div>
              {discoveryDone && (
                <div className="rp-unlock">
                  <b>CHULETA DEL RECADERO DESBLOQUEADA</b>
                  <p>Chela te da el hielo y la dirección del puerto.</p>
                  <button type="button" onClick={() => setCheatOpen(true)}>VER CHULETA</button>
                </div>
              )}
            </section>
          )}

          {stage.id === "puerto" && (
            <section className="rp-panel">
              <div className="rp-panel-heading">
                <div><p className="rp-kicker">ENCARGO 02 · EL PUERTO</p><h1>CARGA RÁPIDA</h1></div>
                <p className="rp-instruction">Cargá cada paquete: completá el mensaje tal como tiene que llegar.</p>
              </div>
              <div className="rp-crates" role="group" aria-label="Paquetes">
                {CARGO.map((_: Choice, index: number) => (
                  <button
                    type="button"
                    key={index}
                    className={`${index === cargoIndex ? "active" : ""} ${game.solved[`c${index}`] ? "loaded" : ""}`}
                    aria-pressed={index === cargoIndex}
                    onClick={() => setCargoIndex(index)}
                  >
                    {game.solved[`c${index}`] ? "✓" : String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <article className="rp-crate-card">
                <div className="rp-voice"><small>▶ {cargo.from.toUpperCase()}</small><blockquote>«{cargo.original}»</blockquote></div>
                <p className="rp-gap">{cargo.before} <span className={game.solved[cargoKey] ? "filled" : ""}>{game.solved[cargoKey] ? cargo.options[cargo.answer] : "_____"}</span> {cargo.after}</p>
                {options(cargoKey, cargo, CORRECT_LINES[cargoIndex % CORRECT_LINES.length], "Opciones del paquete")}
                {feedbackLine(cargoKey)}
                <div className="rp-card-nav">
                  <button type="button" onClick={() => setCargoIndex((cargoIndex + CARGO.length - 1) % CARGO.length)}>← ANTERIOR</button>
                  <span>{CARGO.filter((_: Choice, index: number) => game.solved[`c${index}`]).length} / {CARGO.length} A BORDO</span>
                  <button type="button" className="rp-primary" onClick={() => setCargoIndex((cargoIndex + 1) % CARGO.length)}>CARGAR PAQUETE →</button>
                </div>
              </article>
              {stageDone[2] && <div className="rp-unlock"><b>CARGA COMPLETA</b><p>Se abre la ruta a Barrio Alto.</p></div>}
            </section>
          )}

          {stage.id === "barrio-alto" && (
            <section className="rp-panel">
              <div className="rp-panel-heading">
                <div><p className="rp-kicker">ENCARGO 03 · BARRIO ALTO</p><h1>MENSAJES CRUZADOS</h1></div>
                <p className="rp-instruction">Rulo entregó estos mensajes mal y el barrio está confundido. Encontrá el error y arreglalo antes de que sea tarde.</p>
              </div>
              <div className="rp-crates" role="group" aria-label="Mensajes interceptados">
                {CROSSED.map((_: Choice, index: number) => (
                  <button
                    type="button"
                    key={index}
                    className={`${index === crossedIndex ? "active" : ""} ${game.solved[`x${index}`] ? "loaded" : ""}`}
                    aria-pressed={index === crossedIndex}
                    onClick={() => setCrossedIndex(index)}
                  >
                    {game.solved[`x${index}`] ? "✓" : String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <article className="rp-intercept">
                <div className="rp-voice"><small>MENSAJE ORIGINAL</small><blockquote>{crossed.original}</blockquote></div>
                <div className="rp-voice rulo"><small>LO QUE ENTREGÓ RULO</small><blockquote>«{crossed.rulo}»</blockquote></div>
                <p className="rp-consequence"><span>CONSECUENCIA</span>{crossed.consequence}</p>
                <p className="rp-question-label">REPARAR MENSAJE</p>
                {options(crossedKey, crossed, CROSSED_CORRECT, "Correcciones posibles")}
                {feedbackLine(crossedKey)}
                <div className="rp-card-nav">
                  <button type="button" onClick={() => setCrossedIndex((crossedIndex + CROSSED.length - 1) % CROSSED.length)}>← ANTERIOR</button>
                  <span>{CROSSED.filter((_: Choice, index: number) => game.solved[`x${index}`]).length} / {CROSSED.length} REPARADOS</span>
                  <button type="button" className="rp-primary" onClick={() => setCrossedIndex((crossedIndex + 1) % CROSSED.length)}>SIGUIENTE →</button>
                </div>
              </article>
              {teacherToggle()}
              {teacher && <p className="rp-teacher-note">Después del mensaje 6, preguntá qué consecuencia fue la más grave y por qué. Un minuto de charla libre.</p>}
              {stageDone[3] && <div className="rp-unlock"><b>BARRIO EN CALMA</b><p>Mayra te abre el acceso a los techos.</p></div>}
            </section>
          )}

          {stage.id === "techos" && (
            <section className="rp-panel">
              <div className="rp-panel-heading">
                <div><p className="rp-kicker">ENCARGO 04 · LOS TECHOS</p><h1>RUTA LIBRE</h1></div>
                <p className="rp-instruction">Elegí tu ruta. Leé cada mensaje en silencio y entregalo de memoria. Nada de leer en voz alta: el recadero habla, no lee.</p>
              </div>
              <div className="rp-routes" role="group" aria-label="Elegir ruta">
                {routes.map((item, index) => (
                  <button type="button" key={item.id} className={routeIndex === index ? "active" : ""} aria-pressed={routeIndex === index} onClick={() => setRouteIndex(index)}>
                    <span>RUTA {String.fromCharCode(65 + index)}</span><b>{item.name}</b><small>{item.risk}</small>
                  </button>
                ))}
              </div>
              {!route && <p className="rp-empty">ELEGIR RUTA para desbloquear 4 mensajes.</p>}
              {route && (
                <div className="rp-route-cards">
                  {route.cards.map((card, index) => {
                    const key = `${route.id}-${index}`;
                    const state = game.deliveries[key];
                    return (
                      <article key={key} className={state === true ? "delivered" : state === false ? "crossed" : ""}>
                        <small>{String(index + 1).padStart(2, "0")} · DE {card.from.toUpperCase()}</small>
                        {revealed[key] ? (
                          <blockquote>«{card.text}»</blockquote>
                        ) : (
                          <button type="button" className="rp-reveal" onClick={() => setRevealed((current) => ({ ...current, [key]: true }))}>LEER EN SILENCIO</button>
                        )}
                        {teacher && <p className="rp-model">Radio de control: {card.model}</p>}
                        <div className="rp-delivery" role="group" aria-label={`Resultado del mensaje ${index + 1}`}>
                          <button type="button" aria-pressed={state === true} className="ok" onClick={() => deliver(key, true, route.bonus)}>ENTREGADO ✓</button>
                          <button type="button" aria-pressed={state === false} className="ko" onClick={() => deliver(key, false, route.bonus)}>CRUZADO ✗</button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
              {teacherToggle("SOLO PROFESOR · RADIO DE CONTROL")}
              {teacher && <p className="rp-teacher-note">A lee la tarjeta en silencio y se la transmite a B («X dice que… / pide que… / pregunta si…»). B responde en rol y A lleva la respuesta de vuelta. Con un solo alumno, vos hacés de B. Aceptá variantes si el modo y la deixis son correctos.</p>}
              {stageDone[4] && <div className="rp-unlock"><b>LA TERRAZA SE ILUMINA</b><p>Empieza la fiesta… y aparece el Inspector Ruiz.</p></div>}
            </section>
          )}

          {stage.id === "terraza" && (
            <section className="rp-panel rp-final">
              <div className="rp-panel-heading">
                <div><p className="rp-kicker">MISIÓN FINAL · LA TERRAZA</p><h1>LA NOCHE DEL BLOQUE</h1></div>
                <p className="rp-instruction">El inspector llegó con Doña Pilar, que vive abajo y quiere dormir. Tano y Lu no quieren hablar con ellos: «que hable el recadero». Si lográs un acuerdo antes de la medianoche, la fiesta sigue.</p>
              </div>
              <div className="rp-sides">
                <article><span>LADO A</span><b>Inspector Ruiz</b><b>Doña Pilar</b></article>
                <div className="rp-bridge"><i aria-hidden="true">{VEHICLES[vehicle].icon}</i><span>VOS · EL PUENTE</span></div>
                <article><span>LADO B</span><b>Tano</b><b>Lu</b></article>
              </div>
              <p className="rp-mission-copy">Escuchá a cada lado y transmití exactamente lo que dicen, piden y preguntan. Buscá un acuerdo. Después mandá tu nota de voz a la agencia: <em>«Te cuento lo que pasó: el inspector dice que…, Pilar pide que…, Tano pregunta si…»</em></p>
              <div className="rp-final-actions">
                <button type="button" className="rp-primary" onClick={() => setMediationStarted((value) => !value)} aria-pressed={mediationStarted}>
                  {mediationStarted ? "PAUSAR EL RELOJ" : "EMPEZAR LA MEDIACIÓN"}
                </button>
                <span className="rp-party-clock" aria-label="Reloj de la fiesta">{partyClock(elapsed)}</span>
              </div>
              {teacherToggle()}
              {teacher && (
                <div className="rp-roles">
                  {FINAL_ROLES.map((role: { name: string; side: string; brief: string }) => (
                    <article key={role.name}><span>{role.side}</span><b>{role.name}</b><p>{role.brief}</p></article>
                  ))}
                </div>
              )}
              <div className="rp-checklist" role="group" aria-label="Checklist de la nota de voz">
                <span>NOTA DE VOZ · 60 A 90 SEGUNDOS</span>
                {FINAL_CHECKLIST.map((item: string, index: number) => (
                  <button
                    type="button"
                    key={item}
                    aria-pressed={checklist[index]}
                    className={checklist[index] ? "checked" : ""}
                    onClick={() => setChecklist((current) => current.map((value, position) => (position === index ? !value : value)))}
                  >
                    <i>{checklist[index] ? "✓" : ""}</i>{item}
                  </button>
                ))}
              </div>
              <button type="button" className="rp-primary rp-send" onClick={sendVoiceNote}>MANDAR NOTA DE VOZ</button>
              {missionReward !== null && (
                <div className={`rp-verdict ${verdict.id}`} role="status">
                  <b>{verdict.title}</b>
                  <p>{verdict.copy}{missionReward > 0 ? ` +${missionReward} fichas.` : ""}</p>
                </div>
              )}
            </section>
          )}

          {stage.id === "ranking" && (
            <section className="rp-panel rp-ranking">
              <p className="rp-kicker">FIN DEL TURNO</p>
              <h1>RANKING<br /><em>BARRIAL</em></h1>
              <div className="rp-score">
                <div><strong>{totalCoins}</strong><span>FICHAS</span></div>
                <div>{stars}<span>RESPETO</span></div>
                <div><strong className="rp-rank">{rankFor(totalCoins)}</strong><span>RANGO</span></div>
                <div><strong className="rp-rank">{route?.name ?? "Sin ruta"}</strong><span>RUTA</span></div>
              </div>
              <div className="rp-scale">
                <span className={totalCoins < 160 ? "active" : ""}><b>0–159</b>Novato de esquina</span>
                <span className={totalCoins >= 160 && totalCoins < 310 ? "active" : ""}><b>160–309</b>Recadero de confianza</span>
                <span className={totalCoins >= 310 ? "active" : ""}><b>310+</b>Leyenda de Puerto Neón</span>
              </div>
              <div className="rp-contacts">
                {LAST_MESSAGES.map((contact) => (
                  <article key={contact.name}><b>{contact.name}</b><p>{contact.line}</p></article>
                ))}
              </div>
              <div className="rp-exit">
                <span>PREGUNTA DE SALIDA</span>
                <h2>{EXIT_QUESTIONS[exitIndex]}</h2>
                <button type="button" onClick={() => setExitIndex((value) => (value + 1) % EXIT_QUESTIONS.length)}>OTRA PREGUNTA ↻</button>
              </div>
              <div className="rp-farewell">
                <img src="/brand/mascot/walking.webp" alt="La mascota de SpanishCue se despide" />
                <p>«Mañana hay más recados. Dormí bien… si Tano te deja.»</p>
              </div>
              <button type="button" className="rp-primary" onClick={resetGame}>NUEVO TURNO ↻</button>
            </section>
          )}
        </div>

        {stageIndex > 0 && (
          <aside className="rp-map" aria-label="Mapa de Puerto Neón">
            <span>PUERTO NEÓN</span>
            <svg viewBox="0 0 100 100" role="img" aria-label="Mapa con los checkpoints de la noche">
              <path d="M0 92 Q30 80 50 94 T100 88 L100 100 L0 100Z" className="rp-map-water" />
              <polyline points={MAP_NODES.map((node) => `${node.x},${node.y}`).join(" ")} className="rp-map-road" />
              {MAP_NODES.map((node) => (
                <g key={node.label} className={`rp-map-node ${stageDone[node.stage] ? "lit" : ""} ${stageIndex === node.stage ? "here" : ""}`}>
                  <circle cx={node.x} cy={node.y} r="5" />
                  <text x={node.x} y={node.y - 8} textAnchor="middle">{node.label}</text>
                </g>
              ))}
              {MAP_NODES.filter((node) => node.stage === stageIndex).map((node) => (
                <text key="vehicle" x={node.x} y={node.y + 3} textAnchor="middle" className="rp-map-vehicle">{VEHICLES[vehicle].icon}</text>
              ))}
            </svg>
          </aside>
        )}
      </div>

      {stageIndex > 0 && stageIndex < STAGES.length - 1 && (
        <footer className="rp-stage-nav">
          <button type="button" onClick={() => changeStage(stageIndex - 1)}>← ANTERIOR</button>
          <div><span>{String(stageIndex).padStart(2, "0")} / 05</span><b>{stage.title}</b></div>
          <button type="button" className="next" onClick={() => changeStage(stageIndex + 1)}>{stageIndex === 5 ? "VER RANKING →" : "SIGUIENTE ENCARGO →"}</button>
        </footer>
      )}

      <div className="rp-floating">
        <button type="button" disabled={!cheatUnlocked} aria-expanded={cheatOpen} onClick={() => { setCheatOpen((value) => !value); setResourcesOpen(false); }}>
          {cheatUnlocked ? "CHULETA DEL RECADERO" : "CHULETA · BLOQUEADA"}
        </button>
        <button type="button" aria-expanded={resourcesOpen} onClick={() => { setResourcesOpen((value) => !value); setCheatOpen(false); }}>RECURSOS B1</button>
      </div>

      {cheatOpen && cheatUnlocked && (
        <aside className="rp-drawer" aria-label="Chuleta del recadero">
          <header><b>CHULETA DEL RECADERO</b><button type="button" onClick={() => setCheatOpen(false)} aria-label="Cerrar chuleta">✕</button></header>
          {CHEAT_SHEET.formulas.map((row: { kind: string; formula: string; example: string }) => (
            <article key={row.kind}><span>{row.kind}</span><b>{row.formula}</b><p>{row.example}</p></article>
          ))}
          <table>
            <thead><tr><th>Cambia…</th><th>de</th><th>a</th></tr></thead>
            <tbody>
              {CHEAT_SHEET.changes.map((row: { what: string; from: string; to: string }) => (
                <tr key={row.what}><td>{row.what}</td><td>{row.from}</td><td>{row.to}</td></tr>
              ))}
            </tbody>
          </table>
        </aside>
      )}

      {resourcesOpen && (
        <aside className="rp-drawer" aria-label="Recursos B1">
          <header><b>RECURSOS B1</b><button type="button" onClick={() => setResourcesOpen(false)} aria-label="Cerrar recursos">✕</button></header>
          {Object.entries(PHRASE_BANK as Record<string, string[]>).map(([group, phrases]) => (
            <article key={group}><span>{group}</span>{phrases.map((phrase) => <p key={phrase}>{phrase}</p>)}</article>
          ))}
        </aside>
      )}
    </main>
  );
}
