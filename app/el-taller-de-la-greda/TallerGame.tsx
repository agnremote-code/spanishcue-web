'use client';

// El taller de la greda · the lesson around the 3D workshop: title screen
// (level and mode), the HUD, the teacher list with the 45-minute route, the
// scene card (task, situation, dialogue, labelled beats, production tasks,
// five questions, the message to carry to the next station, can-do ticks for
// the group), the closing in the yard (the chain of messages, the final
// written message, the success criteria, «Terminar») and the listening card
// shared with the other 3D worlds. Both modes live in the same world.
// Without WebGL, with reduced motion, or when the teacher asks for it,
// everything opens from the map and the list instead.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { BOUNDS, CIRCLES, CIRCLE_IDS, SHED, SOLIDS, circleById } from './layout.mjs';
import { LEVELS, contentFor, speakerName } from './levels.mjs';
import type { Beat, Circle, ContrastOption, Route, RouteStep, StimulusOption } from './levels.d.mts';
import {
  LESSON_ID, SESSION_KEY, STORAGE_KEY, TICKS, TICK_LABEL, ambienceGain, answerBeat, beatDone, closeScene, createSession, createState,
  currentBeat, doneFor, finish, lastFeedback, nextCircle, openScene, pickOf, resetGroup, resetLevel, restore, restoreSession, routeCircles,
  routeProgress, serialise, serialiseSession, setRoute, settleScene, stepDone, tally, tick, toggleCheck, type SceneState, type Session, type State,
} from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { setShoutMuted } from '../escucha-3d/shout';
import { createAmbience, type Ambience } from './ambience';
import type { Pose } from './World3D';
import './taller.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const LETTERS = ['A', 'B', 'C'];

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return Boolean(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}
function read(storage: 'local' | 'session', key: string) {
  try { return (storage === 'local' ? window.localStorage : window.sessionStorage).getItem(key); } catch { return null; }
}
function write(storage: 'local' | 'session', key: string, value: string) {
  try { (storage === 'local' ? window.localStorage : window.sessionStorage).setItem(key, value); } catch { /* private mode: the class still works */ }
}

// The world is lazy: three.js never ships in the route's first chunk.
// "Usar el mapa" is offered while it loads.
let useMapNow: (() => void) | null = null;
const World3D = dynamic(() => import('./World3D'), {
  ssr: false,
  loading: () => <div className="tg-loading"><p>Abriendo el taller…</p><button type="button" className="tg-secondary" onClick={() => useMapNow?.()}>Usar el mapa</button></div>,
});

// ------------------------------------------------------------------ map
function WorkshopMap({ pose, done, onOpen, big }: { pose: Pose | null; done: string[]; onOpen: (id: string) => void; big?: boolean }) {
  const pad = 1.5;
  return <svg className="tg-map" viewBox={`${BOUNDS.minX - pad} ${BOUNDS.minZ - pad} ${BOUNDS.maxX - BOUNDS.minX + pad * 2} ${BOUNDS.maxZ - BOUNDS.minZ + pad * 2}`} role="img" aria-label="Plano del taller">
    <rect x={BOUNDS.minX} y={BOUNDS.minZ} width={BOUNDS.maxX - BOUNDS.minX} height={BOUNDS.maxZ - BOUNDS.minZ} className="tg-map-yard" />
    <rect x={SHED.x0} y={SHED.z0} width={SHED.x1 - SHED.x0} height={SHED.z1 - SHED.z0} className="tg-map-shed" />
    {SOLIDS.filter(b => !b.pole).map((b, i) => <rect key={i} x={b.x0} y={b.z0} width={b.x1 - b.x0} height={b.z1 - b.z0} rx={0.15} className="tg-map-thing" />)}
    {CIRCLES.map(c => <g key={c.id} className={done.includes(c.id) ? 'tg-map-done' : 'tg-map-spot'} onClick={() => onOpen(c.id)} role="button" aria-label={`${c.n}. ${c.name}`}>
      <circle cx={c.spot.x} cy={c.spot.z} r={big ? 1.9 : 1.6} />
      <text x={c.spot.x} y={c.spot.z + 0.7} textAnchor="middle">{c.n}</text>
      <title>{c.name}</title>
    </g>)}
    {pose && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI})`}><path d="M0 1.8 L1.25 -1.1 L0 -0.4 L-1.25 -1.1 Z" className="tg-map-me" /></g>}
  </svg>;
}

// ------------------------------------------------------------------ beats
const LABEL: Record<Beat['kind'], string> = { contrast: 'Contraste lingüístico', stimulus: 'Estímulo de conversación' };

function BeatView({ beat, scene, cast, active, onAnswer }: {
  beat: Beat; scene: SceneState; cast: Record<string, { name: string }>; active: boolean; onAnswer: (index: number) => void;
}) {
  const state = scene.beats[beat.id] ?? { tries: [], pick: null, seen: false };
  const done = beatDone(scene, beat);
  const who = beat.who ? cast[beat.who]?.name : null;
  const feedback = beat.kind === 'contrast' ? lastFeedback(scene, beat) : null;
  const pick = pickOf(scene, beat);
  return <section className={`tg-beat tg-beat-${beat.kind}${done ? ' is-done' : ''}`} data-beat={beat.id} aria-label={`${LABEL[beat.kind]}${who ? ` con ${who}` : ''}`}>
    <p className="tg-beat-label">{beat.label || LABEL[beat.kind]}{beat.title ? ` · ${beat.title}` : ''}{who ? ` · ${who}` : ''}</p>
    {beat.context && <p className="tg-beat-context">{beat.context}</p>}
    {beat.ask && <p className="tg-ask">{beat.ask}</p>}
    {beat.prompt && <p className="tg-beat-prompt">{beat.prompt}</p>}

    {beat.kind === 'contrast' && <>
      <ol className="tg-options">{(beat.options as ContrastOption[]).map((o, i) => <li key={o.id}><button type="button" disabled={done || state.tries.includes(i)}
        className={state.tries.includes(i) ? (o.correct ? 'is-right' : 'is-wrong') : undefined} onClick={() => onAnswer(i)}>
        <kbd>{LETTERS[i]}</kbd><span>{o.label}</span></button></li>)}</ol>
      {feedback && <p className={feedback.correct ? 'tg-good' : 'tg-feedback'} role="status">{feedback.text}</p>}
      {done && beat.after && <p className="tg-reply">{beat.after}</p>}
    </>}

    {beat.kind === 'stimulus' && beat.options && <>
      {pick === null ? <>
        <p className="tg-say">Elijan una respuesta y díganla en voz alta. No hay una respuesta correcta.</p>
        <ol className="tg-options">{(beat.options as StimulusOption[]).map((o, i) => <li key={i}><button type="button" onClick={() => onAnswer(i)}><kbd>{LETTERS[i]}</kbd><span>{o.say}</span></button></li>)}</ol>
      </> : <div className="tg-said">
        <p className="tg-chosen"><span>Ustedes</span>{(beat.options as StimulusOption[])[pick].say}</p>
        <p className="tg-reply">{(beat.options as StimulusOption[])[pick].reply}</p>
        <p className="tg-end">{(beat.options as StimulusOption[])[pick].end}</p>
      </div>}
    </>}

    {beat.kind === 'stimulus' && !beat.options && beat.frames && <>
      <ul className="tg-frames">{beat.frames.map(f => <li key={f.id}>{f.label}</li>)}</ul>
      {active && !done && <button type="button" className="tg-primary" onClick={() => onAnswer(0)}>Hecho, seguimos</button>}
    </>}

    {beat.teacher && <details className="tg-teacher"><summary>Para el profesor</summary><p>{beat.teacher}</p></details>}
  </section>;
}

function ProductionView({ circle }: { circle: Circle }) {
  const task = circle.production;
  const [showModel, setShowModel] = useState(false);
  if (!task) return null;
  return <section className="tg-production" aria-label={task.title}>
    <h3>{task.title}</h3>
    <p>{task.prompt}</p>
    {task.facts && <><p><b>Tarjeta con los datos:</b></p><ul>{task.facts.map(f => <li key={f}>{f}</li>)}</ul></>}
    {task.interruptions && <><p><b>Emilio interrumpe (lo lee la pareja):</b></p><ul>{task.interruptions.map(f => <li key={f}>«{f}»</li>)}</ul></>}
    {task.skeleton && <><p><b>Esqueleto del correo:</b></p><ul>{task.skeleton.map(f => <li key={f}>{f}</li>)}</ul></>}
    {task.model && <>
      <button type="button" className="tg-secondary" aria-pressed={showModel} onClick={() => setShowModel(s => !s)}>{showModel ? 'Ocultar el modelo' : 'Ver el modelo (después de escribir)'}</button>
      {showModel && <div className="tg-model">{task.model.map((p, i) => <p key={i}>{p}</p>)}</div>}
    </>}
  </section>;
}

// ------------------------------------------------------------------ main
export default function TallerGame() {
  const [state, setState] = useState<State>(() => createState());
  const [session, setSession] = useState<Session>(() => createSession());
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [flat, setFlat] = useState(false);
  const [list, setList] = useState(false);
  const [map, setMap] = useState(false);
  const [near, setNear] = useState<string | null>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [sound, setSound] = useState(true);
  const [musicVolume, setMusicVolume] = useMusicVolume();
  const [talkAt, setTalkAt] = useState(0);
  const [voice, setVoice] = useState(false);
  const [stats, setStats] = useState<{ calls: number; dpr: number; fps: number; people: number } | null>(null);
  const [debug, setDebug] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  const [mode, setMode] = useListeningMode('taller');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);
  const content = contentFor(state.level);
  const circles = content.CIRCLES as Record<string, Circle>;
  const routes = content.ROUTES as Route[];
  const cast = content.CAST;

  useEffect(() => {
    const t = window.setTimeout(() => {
      setState(restore(read('local', STORAGE_KEY)));
      setSession(restoreSession(read('session', SESSION_KEY)));
      setHas3d(webglAvailable());
      setFlat(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      setDebug(new URLSearchParams(window.location.search).has('debug'));
      setReady(true);
    }, 0);
    useMapNow = () => setFlat(true);
    return () => { window.clearTimeout(t); useMapNow = null; };
  }, []);
  useEffect(() => { if (ready) write('local', STORAGE_KEY, serialise(state)); }, [state, ready]);
  useEffect(() => { if (ready) write('session', SESSION_KEY, serialiseSession(session)); }, [session, ready]);

  const done = doneFor(state);
  const [heard, markHeard] = useListeningDone('taller', state.level);
  const level = LEVELS.find(l => l.id === state.level) ?? LEVELS[0];
  const sceneId = state.scene?.id ?? null;
  const circle = sceneId ? circles[sceneId] : undefined;
  const sceneCircle = sceneId ? circleById(sceneId) : null;
  const cur = state.scene && circle ? currentBeat(state.scene, circle) : 0;
  const finished = Boolean(circle && cur >= circle.beats.length);
  const use3d = has3d && !flat;
  const heardHere = mode === 'escucha' ? heard : done;
  const route = routes[0];
  const percent = routeProgress(route, done, session.finished, heard);
  const isClosing = sceneId === 'patio';
  const closingBeat = circle?.beats.findIndex(b => b.closing) ?? -1;
  const closingRound = isClosing && closingBeat >= 0 && cur >= closingBeat;

  // Sound: ducked under cards, silent under any clip.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const cardOpen = Boolean(state.scene) || listenAt !== undefined;
  useEffect(() => { ambience.current?.setGain(ambienceGain({ clip: voice, card: cardOpen })); }, [voice, cardOpen]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);

  // E1: how far the group got along the route, for signed-in PRO accounts
  // (/api/progress refuses anyone else). Never a learning measure.
  const sent = useRef(-1);
  useEffect(() => {
    if (!ready || !entered || percent <= 0 || percent === sent.current) return;
    sent.current = percent;
    void fetch('/api/progress', { method: 'PUT', headers: { 'content-type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ lessonId: LESSON_ID, progressPercent: percent }) }).catch(() => {});
  }, [percent, ready, entered]);

  const enter = () => { setEntered(true); ambience.current?.start(); };
  // A circle counts as done on its last beat: settleScene() applies it in the
  // event that changed the scene, never in an effect.
  const apply = (nextState: State) => setState(settleScene(nextState, circles));
  const open = (id: string) => {
    setList(false); setMap(false);
    if (mode === 'escucha') { setListenAt(id); return; }
    setTalkAt(0);
    apply(openScene(state, id));
  };
  const close = useCallback(() => { setState(s => closeScene(s)); }, []);
  // A route step opens in its own mode: the listening step switches to
  // Comprensión auditiva, every other step back to Conversación and its
  // scene directly (open() would still see the old mode: G4 B3).
  const openStep = (step: RouteStep, id: string) => {
    setList(false); setMap(false);
    if (step.listening) {
      if (mode !== 'escucha') { setMode('escucha'); setState(s => setRoute(s, 'escucha')); }
      setListenAt(id);
      return;
    }
    if (mode === 'escucha') {
      setMode('conversacion'); setListenAt(undefined); setTalkAt(0);
      apply(openScene(setRoute(state, 'conversacion'), id));
      return;
    }
    open(id);
  };
  const switchMode = (next: typeof mode) => { setMode(next); setState(s => setRoute(s, next)); setListenAt(undefined); if (state.scene) close(); };
  const answer = (beat: Beat, index: number) => apply(answerBeat(state, beat, index));
  const newGroup = () => {
    if (!window.confirm('¿Empezar una clase nueva con otro grupo? Se borran las notas de esta sesión (logros y lista de control).')) return;
    setSession(resetGroup());
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (state.scene) { close(); return; }
      if (list) setList(false);
      if (map) setMap(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.scene, list, map, close]);
  useEffect(() => { cardRef.current?.focus({ preventScroll: true }); }, [sceneId]);
  const onCardKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!circle || finished) return;
    const beat = circle.beats[cur];
    if (!beat?.options) return;
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0) { event.preventDefault(); event.stopPropagation(); answer(beat, index); }
  };

  const busy = Boolean(state.scene) || listenAt !== undefined;
  const nearCircle = near ? circleById(near) : null;
  const group = tally(session, routeCircles(route).length ? routeCircles(route) : CIRCLE_IDS);
  const closing = content.CLOSING;
  const showList = list || (ready && entered && !use3d && !busy);
  const next = sceneId ? nextCircle(sceneId) : null;
  const nextName = next ? circleById(next) : null;

  return <main className="tg" data-level={state.level} data-mode={mode} data-view={use3d ? '3d' : 'mapa'}>
    {ready && use3d && <World3D circleId={sceneId} done={heardHere} order={done} closing={closingRound}
      paused={!entered || list || map || listenAt !== undefined} intro={!entered}
      onSpot={open} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)} onStats={debug ? setStats : undefined} />}
    {ready && !use3d && <div className="tg-flatbg" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="tg-title" aria-labelledby="tg-title-h">
      <div className="tg-title-card">
        <p className="tg-kicker">Un taller de cerámica · Un pedido para Bogotá</p>
        <h1 id="tg-title-h">El taller de la greda</h1>
        <p className="tg-tagline">Un pedido, siete personas y muchos recados.</p>
        <p className="tg-lede">Un taller familiar de cerámica en el altiplano de Boyacá. Un restaurante de Bogotá encarga una vajilla y los recados viajan de mesa en mesa. {content.ROLE} Lleva cada recado sin cambiar su sentido.</p>
        <p className="tg-label">Nivel</p>
        <div className="tg-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={next => { setMode(next); setState(s => setRoute(s, next)); }} />
        <p className="tg-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchan una escena del taller. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo leen la situación, eligen la frase que mantiene el sentido del recado y conversan. Al final, la clase reconstruye la cadena de recados.'}</p>
        <div className="tg-row">
          <button type="button" className="tg-enter" onClick={enter}>Entrar en el taller</button>
          {has3d && <button type="button" className="tg-secondary tg-on-dark" aria-pressed={flat} onClick={() => setFlat(f => !f)}>{flat ? 'Usar el 3D' : 'Mapa sin movimiento'}</button>}
        </div>
        <p className="tg-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. La lista del profesor abre cualquier círculo sin caminar.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="tg-hud">
      <div className="tg-where"><span>El taller · {level.label}</span><b>{nearCircle?.name ?? sceneCircle?.name ?? 'El patio del taller'}</b></div>
      <div className="tg-hud-right">
        <span className="tg-progress">{mode === 'escucha' ? `${heard.length} de ${CIRCLE_IDS.length} escuchas` : `${done.length} de ${CIRCLE_IDS.length} círculos`}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="tg-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Mapa</button>
        <button type="button" onClick={() => setList(true)}>Lista del profesor</button>
        {has3d && <button type="button" onClick={() => setFlat(f => !f)} aria-pressed={flat}>{flat ? '3D' : 'Sin movimiento'}</button>}
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => setEntered(false)}>Inicio</button>
      </div>
    </header>}
    {entered && use3d && !busy && !list && <aside className={map ? 'tg-mapbox is-big' : 'tg-mapbox'} onClick={() => !map && setMap(true)}>
      <WorkshopMap pose={pose} done={heardHere} onOpen={(id) => map && open(id)} big={map} />
      {map && <p>Toca un círculo para abrirlo. <button type="button" className="tg-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar mapa</button></p>}
    </aside>}
    {debug && stats && <p className="tg-debug">{stats.calls} draw calls · DPR {stats.dpr} · {stats.fps} fps · {stats.people} personas</p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && <ListeningBadge game="taller" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="taller" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && use3d && !busy && !list && !map && nearCircle && <div className="tg-prompt" role="status">
      <button type="button" onClick={() => open(nearCircle.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearCircle.name}` : `${nearCircle.n}. ${nearCircle.name}`}</button>
    </div>}

    {/* ------------------------------------------------ teacher list: route and circles */}
    {showList && <section className="tg-panel tg-list" aria-labelledby="tg-list-h">
      <h2 id="tg-list-h">Lista del profesor · {level.label}</h2>
      {content.PLACEMENT && <p className="tg-placement">{content.PLACEMENT}</p>}
      <h3>{route.title} (~{route.minutes} min)</h3>
      <ol className="tg-route">{route.steps.map((step, i) => {
        const ids = step.oneOf ?? (step.circle ? [step.circle] : []);
        const isDone = step.closing ? session.finished : ids.length > 0 && stepDone(step, done, heard);
        if (!ids.length) return <li key={i}><div className="tg-step-note"><span>Calentamiento · {step.minutes} min</span><small>{step.do}</small></div></li>;
        return <li key={i} className="tg-step">{ids.map((id, k) => { const c = circleById(id)!; return <button key={id} type="button" className={isDone ? 'is-done' : undefined}
          onClick={() => openStep(step, id)}>
          <span>{k > 0 ? 'o ' : ''}{c.n}. {c.name}{step.closing ? ' · cierre' : ''}{step.listening ? ' · escucha' : ''}</span><small>{step.minutes} min{k === 0 && step.do ? ` · ${step.do}` : ''}</small>{isDone && <i aria-label="hecho">✓</i>}
        </button>; })}</li>;
      })}</ol>
      <p className="tg-e1">Recorrido: {percent} %{session.finished ? ' · terminado' : ''}</p>
      <p className="tg-placement">{content.EXTENSIONS}</p>
      <h3>Todos los círculos</h3>
      <ol className="tg-all">{CIRCLES.map(c => <li key={c.id}><button type="button" className={heardHere.includes(c.id) ? 'is-done' : undefined} onClick={() => open(c.id)}>
        <span>{c.n}. {c.name}</span><small>{circles[c.id]?.title ?? c.place}</small>{heardHere.includes(c.id) && <i aria-label="hecho">✓</i>}
      </button></li>)}</ol>
      {!use3d && <div className="tg-flatmap"><WorkshopMap pose={null} done={heardHere} onOpen={open} big /></div>}
      <div className="tg-row">
        {use3d && <button type="button" className="tg-secondary" onClick={() => setList(false)}>Volver al taller</button>}
        <button type="button" className="tg-secondary" onClick={() => setState(s => resetLevel(s))}>Marcar todo como no hecho</button>
        <button type="button" className="tg-secondary" onClick={newGroup}>{closing.reset}</button>
      </div>
      <p className="tg-privacy">{closing.sessionLabel}.</p>
    </section>}

    {/* ------------------------------------------------ scene card */}
    {circle && sceneCircle && state.scene && <section className="tg-card" aria-labelledby="tg-card-h" data-scene={sceneCircle.id} data-ended={finished ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="tg-card-head">
        <p><span>{sceneCircle.n}. {sceneCircle.name}</span><em>{circle.place}</em></p>
        <button type="button" className="tg-close" onClick={close} aria-label="Volver al taller">×</button>
      </header>
      <div className="tg-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="tg-card-h">{circle.title}</h2>
        <p className="tg-task"><b>Tarea</b>{circle.task}</p>
        <p className="tg-line">{circle.line}</p>
        {circle.opening && <p className="tg-opening">{circle.opening}</p>}
        {circle.dialogue.length > 0 && <ul className="tg-dialogue">{circle.dialogue.map(([who, line], i) => <li key={i}><b>{speakerName(cast, who)}{cast[who]?.phone ? ' (al teléfono)' : ''}</b><span>{line}</span></li>)}</ul>}
        {circle.beats.slice(0, cur + 1).map((beat, i) => <BeatView key={beat.id} beat={beat} scene={state.scene!} cast={cast} active={i === cur} onAnswer={index => answer(beat, index)} />)}
        {finished && <ProductionView circle={circle} />}
        {finished && <section className="tg-talk" aria-labelledby="tg-talk-h">
          <h3 id="tg-talk-h">Ahora, conversación</h3>
          <ol>{circle.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}>{q}</button></li>)}</ol>
          <div className="tg-row">
            <button type="button" className="tg-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="tg-secondary" disabled={talkAt === circle.talk.length - 1} onClick={() => setTalkAt(t => Math.min(circle.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}

        {/* «El recado viaja»: the message to carry, and the order moves a station along. */}
        {finished && circle.handoff && <section className="tg-relay" aria-labelledby="tg-relay-h">
          <h3 id="tg-relay-h">El recado viaja</h3>
          <p><b>{speakerName(cast, circle.handoff.who)}:</b> «{circle.handoff.text}»</p>
          <small>{circle.handoff.prop}</small>
          {nextName && <button type="button" className="tg-primary" onClick={() => open(nextName.id)}>Llevar el recado → {nextName.n}. {nextName.name}</button>}
        </section>}

        {/* The closing in the yard: the chain of messages (beats above), the final written message, the success criteria, «Terminar». */}
        {isClosing && finished && <section className="tg-closing" aria-labelledby="tg-closing-h">
          <h3 id="tg-closing-h">Cierre: {closing.production.title}</h3>
          <div className="tg-closing-step">
            <p className="tg-transfer">{closing.production.prompt}</p>
          </div>
          <div className="tg-closing-step">
            <h4>Lista de control · {closing.selfCheck.scope}</h4>
            <ul className="tg-check">{closing.selfCheck.items.map(item => <li key={item.id}><label>
              <input type="checkbox" checked={session.checks.includes(item.id)} onChange={() => setSession(s => toggleCheck(s, item.id))} /> {item.label}
            </label></li>)}</ul>
          </div>
          <p className="tg-tally">Resultado del grupo en esta sesión: {group.logrado}/{group.total} círculos logrados.</p>
          <div className="tg-row">
            <button type="button" className="tg-primary" disabled={session.finished} onClick={() => setSession(s => finish(s))}>{session.finished ? '✓ Terminado' : 'Terminar'}</button>
            <button type="button" className="tg-secondary" onClick={newGroup}>{closing.reset}</button>
          </div>
          <p className="tg-privacy">{closing.sessionLabel}.</p>
        </section>}

        <details className="tg-words" open={finished}>
          <summary>Palabras de la escena</summary>
          <ul>{circle.words.map(w => <li key={w}>{w}</li>)}</ul>
        </details>
        <details className="tg-teacher">
          <summary>Para el profesor</summary>
          <p>{circle.teacher}</p>
          <p className="tg-scaffold"><b>En la pizarra:</b> {circle.scaffolding}</p>
          <ul className="tg-exponents">{circle.exponents.map(e => <li key={e.id}><b>{e.form}</b>: {e.use}</li>)}</ul>
        </details>
      </div>
      <footer className="tg-card-foot">
        <div className="tg-ticks" role="group" aria-label="El grupo en esta sesión">
          <span>El grupo:</span>
          {TICKS.map(t => <button key={t} type="button" aria-pressed={session.ticks[sceneCircle.id] === t} onClick={() => setSession(s => tick(s, sceneCircle.id, t))}>{TICK_LABEL[t]}</button>)}
        </div>
        <button type="button" className={finished ? 'tg-primary' : 'tg-secondary'} onClick={close}>{finished ? 'Seguir en el taller' : 'Volver al taller'} <kbd>Esc</kbd></button>
      </footer>
    </section>}
  </main>;
}
