'use client';

// El ascensor del cerro · the lesson around the 3D hillside: title screen
// (level and mode), the HUD, the teacher list with the routes, the circles in
// height order and the ways up and down, the scene card (situation, dialogue,
// labelled beats, five questions, can-do ticks for the group), the closing at
// the junta de vecinos (role-play, the group's story from this session, the
// self-check, one transfer question) and the listening card shared with the
// other 3D worlds. Both modes live in the same world. Without WebGL, with
// reduced motion, or when the teacher asks for it, everything opens from the
// plan and the list instead.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { BOUNDS, BUILDINGS, CIRCLES, CIRCLES_BY_HEIGHT, CIRCLE_IDS, FUNICULAR, LINKS, STAIRS, TERRACES, circleById, terraceById, type TerraceId } from './layout.mjs';
import { LEVELS, contentFor, speakerName } from './levels.mjs';
import type { Beat, Circle, ContrastOption, Route, StimulusOption } from './levels.d.mts';
import {
  LESSON_ID, SESSION_KEY, STORAGE_KEY, TICKS, TICK_LABEL, ambienceGain, answerBeat, beatDone, closeScene, createSession, createState,
  currentBeat, doneFor, finish, lastFeedback, openScene, resetGroup, resetLevel, restore, restoreSession, routeCircles, routeProgress, settleScene,
  serialise, serialiseSession, setRoute, stepDone, tally, tick, timeline, toggleCheck, type SceneState, type Session, type State,
} from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { setShoutMuted } from '../escucha-3d/shout';
import { createAmbience, type Ambience } from './ambience';
import type { Pose, Travel } from './World3D';
import './ascensor.css';

const LETTERS = ['A', 'B', 'C'];
const CLOSING_ID = 'asamblea';
const HEIGHT_LABEL: Record<TerraceId, string> = { puerto: 'Abajo · el puerto', medio: 'A media altura · la escalera', alto: 'Arriba · el cerro' };

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
// "Usar el plano" is offered while it loads.
let useMapNow: (() => void) | null = null;
const World3D = dynamic(() => import('./World3D'), {
  ssr: false,
  loading: () => <div className="ac-loading"><p>Subiendo al cerro…</p><button type="button" className="ac-secondary" onClick={() => useMapNow?.()}>Usar el plano</button></div>,
});

// ------------------------------------------------------------------ plan
/** The cerro from above: uphill is up. Bands are the three heights (darker =
 * lower), with the funicular, the stairway and the circles. */
function HillMap({ pose, done, onOpen, big }: { pose: Pose | null; done: string[]; onOpen: (id: string) => void; big?: boolean }) {
  const pad = 2;
  const w = BOUNDS.maxX - BOUNDS.minX, h = BOUNDS.maxZ - BOUNDS.minZ;
  return <svg className="ac-map" viewBox={`${BOUNDS.minX - pad} ${BOUNDS.minZ - pad} ${w + pad * 2} ${h + pad * 2}`} role="img" aria-label="Plano del cerro: abajo el puerto, en medio la calle de la escalera, arriba el cerro">
    <rect x={BOUNDS.minX} y={BOUNDS.minZ} width={w} height={h} className="ac-map-slope" />
    {TERRACES.map(t => <g key={t.id}>
      <rect x={BOUNDS.minX} y={t.z0} width={w} height={t.z1 - t.z0} className={`ac-map-terrace ac-map-${t.id}`} />
      <text x={BOUNDS.minX + 1} y={t.z0 + 2.6} className="ac-map-label">{t.name} · {t.y} m</text>
    </g>)}
    {Object.entries(BUILDINGS).map(([id, b]) => <rect key={id} x={b.x0} y={b.z0} width={b.x1 - b.x0} height={b.z1 - b.z0} rx={0.3} className="ac-map-building" />)}
    <line x1={(FUNICULAR.rails[0] + FUNICULAR.rails[1]) / 2} y1={FUNICULAR.bottom.z} x2={(FUNICULAR.rails[0] + FUNICULAR.rails[1]) / 2} y2={FUNICULAR.top.z} className="ac-map-rail" />
    {STAIRS.flights.map((f, i) => <line key={i} x1={STAIRS.x} y1={f.z0} x2={STAIRS.x} y2={f.z1} className="ac-map-stairs" />)}
    {LINKS.map(l => <circle key={l.id} cx={l.at.x} cy={l.at.z} r={1} className="ac-map-link" />)}
    {CIRCLES.map(c => <g key={c.id} className={done.includes(c.id) ? 'ac-map-done' : 'ac-map-spot'} onClick={() => onOpen(c.id)} role="button" aria-label={`${c.n}. ${c.name}`}>
      <circle cx={c.spot.x} cy={c.spot.z} r={big ? 2.6 : 2.2} />
      <text x={c.spot.x} y={c.spot.z + 1} textAnchor="middle">{c.n}</text>
      <title>{c.name}</title>
    </g>)}
    {pose && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI})`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="ac-map-me" /></g>}
  </svg>;
}

// ------------------------------------------------------------------ beats
const LABEL: Record<Beat['kind'], string> = { contrast: 'Contraste lingüístico', stimulus: 'Estímulo de conversación' };

function BeatView({ beat, scene, session, cast, active, onAnswer }: {
  beat: Beat; scene: SceneState; session: Session; cast: Record<string, { name: string }>; active: boolean; onAnswer: (index: number) => void;
}) {
  const state = scene.beats[beat.id] ?? { tries: [], pick: null, seen: false };
  const done = beatDone(scene, beat, session);
  const who = beat.who ? cast[beat.who]?.name : null;
  const feedback = beat.kind === 'contrast' ? lastFeedback(scene, beat) : null;
  return <section className={`ac-beat ac-beat-${beat.kind}${done ? ' is-done' : ''}`} data-beat={beat.id} aria-label={`${LABEL[beat.kind]}${who ? ` con ${who}` : ''}`}>
    <p className="ac-beat-label">{beat.label || LABEL[beat.kind]}{who ? ` · ${who}` : ''}</p>
    {beat.context && <p className="ac-beat-context">{beat.context}</p>}
    {beat.ask && <p className="ac-ask">{beat.ask}</p>}
    {beat.prompt && <p className="ac-beat-prompt">{beat.prompt}</p>}

    {beat.kind === 'contrast' && <>
      <ol className="ac-options">{(beat.options as ContrastOption[]).map((o, i) => <li key={o.id}><button type="button" disabled={done || state.tries.includes(i)}
        className={state.tries.includes(i) ? (o.correct ? 'is-right' : 'is-wrong') : undefined} onClick={() => onAnswer(i)}>
        <kbd>{LETTERS[i]}</kbd><span>{o.label}</span></button></li>)}</ol>
      {feedback && <p className={feedback.correct ? 'ac-good' : 'ac-feedback'} role="status">{feedback.text}</p>}
      {done && beat.after && <p className="ac-reply">{beat.after}</p>}
    </>}

    {beat.kind === 'stimulus' && beat.options && <>
      {state.pick === null ? <>
        <p className="ac-say">Elijan una respuesta y díganla en voz alta. No hay una respuesta correcta.</p>
        <ol className="ac-options">{(beat.options as StimulusOption[]).map((o, i) => <li key={i}><button type="button" onClick={() => onAnswer(i)}><kbd>{LETTERS[i]}</kbd><span>{o.say}</span></button></li>)}</ol>
      </> : <div className="ac-said">
        <p className="ac-chosen"><span>Ustedes</span>{(beat.options as StimulusOption[])[state.pick].say}</p>
        <p className="ac-reply">{(beat.options as StimulusOption[])[state.pick].reply}</p>
        <p className="ac-end">{(beat.options as StimulusOption[])[state.pick].end}</p>
      </div>}
    </>}

    {beat.kind === 'stimulus' && !beat.options && beat.frames && <>
      <ul className="ac-frames">{beat.frames.map(f => <li key={f.id}>{f.label}</li>)}</ul>
      {active && !done && <button type="button" className="ac-primary" onClick={() => onAnswer(0)}>Hecho, seguimos</button>}
    </>}

    {beat.teacher && <details className="ac-teacher"><summary>Para el profesor</summary><p>{beat.teacher}</p></details>}
  </section>;
}

// ------------------------------------------------------------------ main
export default function AscensorGame() {
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
  const [talkAt, setTalkAt] = useState(0);
  const [voice, setVoice] = useState(false);
  const [riding, setRiding] = useState<string | null>(null);
  const [travel, setTravel] = useState<Travel | null>(null);
  const [stats, setStats] = useState<{ calls: number; dpr: number; fps: number; people: number } | null>(null);
  const [debug, setDebug] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  const [mode, setMode] = useListeningMode('ascensor');
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
  const [heard, markHeard] = useListeningDone('ascensor', state.level);
  const level = LEVELS.find(l => l.id === state.level) ?? LEVELS[0];
  const sceneId = state.scene?.id ?? null;
  const circle = sceneId ? circles[sceneId] : undefined;
  const authored = Boolean(circle && !circle.status);
  const sceneCircle = sceneId ? circleById(sceneId) : null;
  const cur = state.scene && authored ? currentBeat(state.scene, circle, session) : 0;
  const finished = Boolean(circle && authored && cur >= circle.beats.length);
  const use3d = has3d && !flat;
  const heardHere = mode === 'escucha' ? heard : done;
  const route = routes.find(r => r.mode === state.route) ?? routes[0];
  const routeDone = state.route === 'escucha' ? heard : done;
  const percent = routeProgress(route, routeDone, session.finished);
  const isClosing = sceneId === CLOSING_ID;

  // Sound: ducked under cards, silent under any clip.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  const cardOpen = Boolean(state.scene) || listenAt !== undefined;
  useEffect(() => { ambience.current?.setGain(ambienceGain({ clip: voice, card: cardOpen })); }, [voice, cardOpen]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);

  // E1: how far the group got along the chosen route, for signed-in PRO
  // accounts (/api/progress refuses anyone else). Never a learning measure.
  const sent = useRef(-1);
  useEffect(() => {
    if (!ready || !entered || percent <= 0 || percent === sent.current) return;
    sent.current = percent;
    void fetch('/api/progress', { method: 'PUT', headers: { 'content-type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ lessonId: LESSON_ID, progressPercent: percent }) }).catch(() => {});
  }, [percent, ready, entered]);

  const enter = () => { setEntered(true); ambience.current?.start(); };
  const apply = (nextState: State, nextSession: Session) => {
    const r = settleScene(nextState, nextSession, circles);
    setState(r.state);
    if (r.session !== session) setSession(r.session);
  };
  const open = (id: string, fromList = false) => {
    setList(false); setMap(false);
    // A listening opened from the list or the plan also takes the mascot
    // there (and up or down the cerro), as a scene does.
    if (mode === 'escucha') { if (fromList) setTravel(t => ({ circle: id, n: (t?.n ?? 0) + 1 })); setListenAt(id); return; }
    setTalkAt(0);
    apply(openScene(state, id), session);
  };
  const close = useCallback(() => { setState(s => closeScene(s)); }, []);
  const switchMode = (next: typeof mode) => { setMode(next); setState(s => setRoute(s, next)); setListenAt(undefined); if (state.scene) close(); };
  const answer = (beat: Beat, index: number) => apply(answerBeat(state, beat, index), session);
  const go = (move: Omit<Travel, 'n'>) => { setList(false); setMap(false); setTravel(t => ({ ...move, n: (t?.n ?? 0) + 1 })); };
  const newGroup = () => {
    if (!window.confirm('¿Empezar una clase nueva con otro grupo? Se borran las notas de esta sesión (logros, historia y lista de control).')) return;
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
    if (!circle || !authored || finished) return;
    const beat = circle.beats[cur];
    if (!beat?.options) return;
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0) { event.preventDefault(); event.stopPropagation(); answer(beat, index); }
  };

  const busy = Boolean(state.scene) || listenAt !== undefined;
  const nearCircle = near ? circleById(near) : null;
  const story = timeline(session, circles);
  const conversation = routes.find(r => r.mode === 'conversacion');
  const group = tally(session, routeCircles(conversation).length ? routeCircles(conversation) : CIRCLE_IDS);
  const closing = content.CLOSING;
  const showList = list || (ready && entered && !use3d && !busy);
  const here = pose ? terraceById(pose.terrace) : null;

  return <main className="ac" data-level={state.level} data-mode={mode} data-view={use3d ? '3d' : 'mapa'} data-terrace={pose?.terrace ?? undefined}>
    {ready && use3d && <World3D circleId={sceneId} done={heardHere} paused={!entered || list || map || listenAt !== undefined} intro={!entered} travel={travel}
      onSpot={open} onNear={setNear} onPose={setPose} onRide={setRiding} onFail={() => setHas3d(false)} onStats={debug ? setStats : undefined} />}
    {ready && !use3d && <div className="ac-flatbg" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="ac-title" aria-labelledby="ac-title-h">
      <div className="ac-title-card">
        <p className="ac-kicker">Valparaíso · Junta de vecinos esta tarde</p>
        <h1 id="ac-title-h">El ascensor del cerro</h1>
        <p className="ac-tagline">El ascensor está cerrado por reparaciones. ¿Con qué condiciones vuelve a abrir?</p>
        <p className="ac-lede">Un cerro en tres alturas: el puerto, la calle de la escalera y lo alto del cerro. En seis círculos blancos hay vecinos que no piensan igual. Suban en el ascensor de prueba o por la escalera, recojan cada postura y llévenla a la asamblea para mediar.</p>
        <p className="ac-label">Nivel</p>
        <div className="ac-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={next => { setMode(next); setState(s => setRoute(s, next)); }} />
        <p className="ac-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchan su propia escena del cerro, con una voz distinta para cada personaje. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo leen la situación, eligen qué decir y conversan. Al final, en la asamblea, la clase media entre todas las posturas.'}</p>
        <div className="ac-row">
          <button type="button" className="ac-enter" onClick={enter}>Entrar en el cerro</button>
          {has3d && <button type="button" className="ac-secondary ac-on-dark" aria-pressed={flat} onClick={() => setFlat(f => !f)}>{flat ? 'Usar el 3D' : 'Plano sin movimiento'}</button>}
        </div>
        <p className="ac-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. Para cambiar de altura, entra en un círculo amarillo: el ascensor o la escalera. La lista del profesor abre cualquier círculo sin caminar.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="ac-hud">
      <div className="ac-where"><span>Valparaíso · {level.label}{here ? ` · ${here.y} m` : ''}</span><b>{nearCircle?.name ?? sceneCircle?.name ?? here?.name ?? 'El cerro'}</b></div>
      <div className="ac-hud-right">
        <span className="ac-progress">{mode === 'escucha' ? `${heard.length} de ${CIRCLE_IDS.length} escuchas` : `${done.length} de ${CIRCLE_IDS.length} círculos`}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="ac-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Plano</button>
        <button type="button" onClick={() => setList(true)}>Lista del profesor</button>
        {has3d && <button type="button" onClick={() => setFlat(f => !f)} aria-pressed={flat}>{flat ? '3D' : 'Sin movimiento'}</button>}
        <button type="button" onClick={() => setSound(s => !s)} aria-pressed={!sound} aria-label={sound ? 'Silenciar el ambiente' : 'Activar el ambiente'}>{sound ? '🔊' : '🔇'}</button>
        <button type="button" onClick={() => setEntered(false)}>Inicio</button>
      </div>
    </header>}
    {entered && use3d && !busy && !list && !riding && <aside className={map ? 'ac-mapbox is-big' : 'ac-mapbox'} onClick={() => !map && setMap(true)}>
      <HillMap pose={pose} done={heardHere} onOpen={(id) => map && open(id, true)} big={map} />
      {map && <p>Toca un círculo para abrirlo. <button type="button" className="ac-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar plano</button></p>}
    </aside>}
    {debug && stats && <p className="ac-debug">{stats.calls} draw calls · DPR {stats.dpr} · {stats.fps} fps · {stats.people} personas</p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && !riding && <ListeningBadge game="ascensor" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="ascensor" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && use3d && !busy && !list && !map && !riding && nearCircle && <div className="ac-prompt" role="status">
      <button type="button" onClick={() => open(nearCircle.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearCircle.name}` : `${nearCircle.n}. ${nearCircle.name}`}</button>
    </div>}

    {/* ------------------------------------------------ teacher list: routes, circles by height, ways up and down */}
    {showList && <section className="ac-panel ac-list" aria-labelledby="ac-list-h">
      <h2 id="ac-list-h">Lista del profesor · {level.label}</h2>
      {content.PLACEMENT && <p className="ac-placement">{content.PLACEMENT}</p>}
      <div className="ac-routes" role="tablist" aria-label="Recorrido">
        {routes.map(r => <button key={r.id} type="button" role="tab" aria-selected={route?.id === r.id} onClick={() => { setState(s => setRoute(s, r.mode)); if (r.mode !== mode) setMode(r.mode); }}>{r.title} (~{r.minutes} min)</button>)}
      </div>
      {route && <ol className="ac-route">{route.steps.map((step, i) => {
        const ids = step.oneOf ?? (step.circle ? [step.circle] : []);
        const isDone = step.closing ? session.finished : ids.length > 0 && stepDone(step, routeDone);
        if (!ids.length) return <li key={i}><div className="ac-step-note"><span>{step.closing ? 'Cierre' : 'Calentamiento'} · {step.minutes} min</span><small>{step.do}</small></div></li>;
        return <li key={i} className="ac-step">{ids.map((id, k) => { const c = circleById(id); if (!c) return null; return <button key={id} type="button" className={isDone ? 'is-done' : undefined} onClick={() => open(id, true)}>
          <span>{k > 0 ? 'o ' : ''}{c.n}. {c.name}{step.closing ? ' · cierre' : ''}</span><small>{step.minutes} min{step.do ? ` · ${step.do}` : ''}</small>{isDone && <i aria-label="hecho">✓</i>}
        </button>; })}</li>;
      })}</ol>}
      <p className="ac-e1">Recorrido: {percent} %{session.finished ? ' · terminado' : ''}</p>
      <h3>Todos los círculos, de abajo arriba</h3>
      <div className="ac-heights">{(['puerto', 'medio', 'alto'] as TerraceId[]).map(t => <section key={t} className={`ac-height ac-height-${t}`} aria-label={HEIGHT_LABEL[t]}>
        <h4>{HEIGHT_LABEL[t]} · {terraceById(t)?.y} m</h4>
        <ol className="ac-all">{CIRCLES_BY_HEIGHT.filter(c => c.terrace === t).map(c => <li key={c.id}><button type="button" className={heardHere.includes(c.id) ? 'is-done' : undefined} onClick={() => open(c.id, true)}>
          <span>{c.n}. {c.name}</span><small>{circles[c.id]?.status ? 'En preparación' : circles[c.id]?.title ?? c.place}</small>{heardHere.includes(c.id) && <i aria-label="hecho">✓</i>}
        </button></li>)}</ol>
      </section>)}</div>
      {use3d && <>
        <h3>Moverse por el cerro</h3>
        <div className="ac-moves">
          <button type="button" onClick={() => go({ link: 'ascensor-sube' })}>Subir en el ascensor<small>Del puerto a lo alto, con don Lorenzo</small></button>
          <button type="button" onClick={() => go({ link: 'ascensor-baja' })}>Bajar en el ascensor<small>De lo alto al puerto</small></button>
          <button type="button" onClick={() => go({ link: 'escalera-sube-1' })}>Subir por la escalera<small>Del puerto a la calle del mural</small></button>
          <button type="button" onClick={() => go({ link: 'escalera-sube-2' })}>Seguir por la escalera<small>De la calle del mural a lo alto</small></button>
        </div>
        <div className="ac-row ac-jumps">
          {TERRACES.map(t => <button key={t.id} type="button" className="ac-secondary" onClick={() => go({ terrace: t.id })}>Ir a: {t.name}</button>)}
        </div>
      </>}
      {!use3d && <div className="ac-flatmap"><HillMap pose={null} done={heardHere} onOpen={id => open(id, true)} big /></div>}
      <div className="ac-row">
        {use3d && <button type="button" className="ac-secondary" onClick={() => setList(false)}>Volver al cerro</button>}
        <button type="button" className="ac-secondary" onClick={() => setState(s => resetLevel(s))}>Marcar todo como no hecho</button>
        <button type="button" className="ac-secondary" onClick={newGroup}>{closing?.reset ?? 'Nueva clase / nuevo grupo'}</button>
      </div>
      <p className="ac-privacy">{closing?.sessionLabel ?? 'Notas de esta sesión: no se guardan por alumno'}.</p>
    </section>}

    {/* ------------------------------------------------ scene card */}
    {circle && authored && sceneCircle && state.scene && <section className="ac-card" aria-labelledby="ac-card-h" data-scene={sceneCircle.id} data-ended={finished ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="ac-card-head">
        <p><span>{sceneCircle.n}. {sceneCircle.name}</span><em>{circle.place}</em></p>
        <button type="button" className="ac-close" onClick={close} aria-label="Volver al cerro">×</button>
      </header>
      <div className="ac-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="ac-card-h">{circle.title}</h2>
        <p className="ac-line">{circle.line}</p>
        <ul className="ac-dialogue">{circle.dialogue.map(([who, line], i) => <li key={i}><b>{speakerName(cast, who)}</b><span>{line}</span></li>)}</ul>
        {circle.beats.slice(0, cur + 1).map((beat, i) => <BeatView key={beat.id} beat={beat} scene={state.scene!} session={session} cast={cast} active={i === cur}
          onAnswer={index => answer(beat, index)} />)}
        {finished && <section className="ac-talk" aria-labelledby="ac-talk-h">
          <h3 id="ac-talk-h">Ahora, conversación</h3>
          <ol>{circle.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}>{q}</button></li>)}</ol>
          <div className="ac-row">
            <button type="button" className="ac-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="ac-secondary" disabled={talkAt === circle.talk.length - 1} onClick={() => setTalkAt(t => Math.min(circle.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}

        {/* The closing at the junta: role-play (beats above), the group's story, the self-check, one transfer question. */}
        {isClosing && finished && closing && <section className="ac-closing" aria-labelledby="ac-closing-h">
          <h3 id="ac-closing-h">Cierre: el acuerdo de la asamblea</h3>
          <div className="ac-closing-step">
            <h4>La historia del grupo</h4>
            <p>{closing.narrative.prompt}</p>
            <ol className="ac-story">
              <li>{closing.narrative.opening}</li>
              {story.map(s => <li key={s.id}>{s.text}</li>)}
              <li>{closing.narrative.ending}</li>
            </ol>
            {!story.length && <p className="ac-empty">Todavía no hay decisiones del grupo en esta sesión: la historia empieza y termina en la asamblea.</p>}
            <p className="ac-frame">{closing.narrative.frames.join(' · ')}</p>
          </div>
          <div className="ac-closing-step">
            <h4>Lista de control · {closing.selfCheck.scope}</h4>
            <ul className="ac-check">{closing.selfCheck.items.map(item => <li key={item.id}><label>
              <input type="checkbox" checked={session.checks.includes(item.id)} onChange={() => setSession(s => toggleCheck(s, item.id))} /> {item.label}
            </label></li>)}</ul>
          </div>
          <div className="ac-closing-step">
            <h4>Y tú</h4>
            <p className="ac-transfer">{closing.transfer.question}</p>
            <details><summary>Ejemplo</summary><p>{closing.transfer.model}</p></details>
          </div>
          <p className="ac-tally">Resultado del grupo en esta sesión: {group.logrado}/{group.total} círculos logrados.</p>
          <div className="ac-row">
            <button type="button" className="ac-primary" disabled={session.finished} onClick={() => setSession(s => finish(s))}>{session.finished ? '✓ Terminado' : 'Terminar'}</button>
            <button type="button" className="ac-secondary" onClick={newGroup}>{closing.reset}</button>
          </div>
          <p className="ac-privacy">{closing.sessionLabel}.</p>
        </section>}

        <details className="ac-words" open={finished}>
          <summary>Palabras de la escena</summary>
          <ul>{circle.words.map(w => <li key={w}>{w}</li>)}</ul>
        </details>
        <details className="ac-teacher">
          <summary>Para el profesor</summary>
          <p>{circle.teacher}</p>
          <ul className="ac-exponents">{circle.exponents.map(e => <li key={e.id}><b>{e.form}</b>: {e.use}</li>)}</ul>
        </details>
      </div>
      <footer className="ac-card-foot">
        <div className="ac-ticks" role="group" aria-label="El grupo en esta sesión">
          <span>El grupo:</span>
          {TICKS.map(t => <button key={t} type="button" aria-pressed={session.ticks[sceneCircle.id] === t} onClick={() => setSession(s => tick(s, sceneCircle.id, t))}>{TICK_LABEL[t]}</button>)}
        </div>
        <button type="button" className={finished ? 'ac-primary' : 'ac-secondary'} onClick={close}>{finished ? 'Seguir por el cerro' : 'Volver al cerro'} <kbd>Esc</kbd></button>
      </footer>
    </section>}
    {state.scene && !authored && <section className="ac-panel" role="status"><p>Este círculo todavía no tiene su escena en {level.label}.</p><button type="button" className="ac-secondary" onClick={close}>Volver</button></section>}
  </main>;
}
