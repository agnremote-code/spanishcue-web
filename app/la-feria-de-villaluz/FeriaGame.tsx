'use client';

// La feria de Villaluz · the lesson around the 3D fair: title screen (level
// and mode), the HUD, the teacher list with the two 45-minute routes, the
// scene card (situation, dialogue, three answers, five questions, can-do
// ticks for the group), "Busca y describe" (an announcement describes a
// person; the class finds them in the crowd), the closing (role-play, the
// group's story from this session, the self-check, one transfer question)
// and the listening card shared with the other 3D worlds. Both modes live in
// the same world. Without WebGL, with reduced motion, or when the teacher
// asks for it, everything opens from the map and the list instead.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { CIRCLES, CIRCLE_IDS, circleById, placeSet, BOUNDS, DANCE_FLOOR, FOUNTAIN, WHEEL } from './layout.mjs';
import { LEVELS, contentFor, speakerName } from './levels.mjs';
import type { Beat, Circle, ContrastOption, Route, StimulusOption } from './levels.d.mts';
import type { BuscaSet } from './look-contract.d.mts';
import {
  LESSON_ID, SESSION_KEY, STORAGE_KEY, TICKS, TICK_LABEL, ambienceGain, answerBeat, beatDone, buscaState, buscaTry, closeScene, createSession, createState,
  currentBeat, doneFor, finish, lastFeedback, markDone, openScene, recordPick, resetGroup, resetLevel, restore, restoreSession, routeCircles, routeProgress,
  serialise, serialiseSession, setRoute, stepDone, tally, tick, timeline, timelinePick, toggleCheck, type SceneState, type Session, type State,
} from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, Transcript, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { setShoutMuted } from '../escucha-3d/shout';
import { BuscaPlan, FigureSvg } from './Busca2D';
import { createAmbience, type Ambience } from './ambience';
import type { Pose } from './World3D';
import './feria.css';

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

// The world is lazy: three.js never ships in the route's first chunk (T2).
// "Usar el mapa" is offered while it loads (T3).
let useMapNow: (() => void) | null = null;
const World3D = dynamic(() => import('./World3D'), {
  ssr: false,
  loading: () => <div className="fv-loading"><p>Encendiendo las luces de la feria…</p><button type="button" className="fv-secondary" onClick={() => useMapNow?.()}>Usar el mapa</button></div>,
});

// ------------------------------------------------------------------ map
function FairMap({ pose, done, onOpen, big }: { pose: Pose | null; done: string[]; onOpen: (id: string) => void; big?: boolean }) {
  const pad = 2;
  return <svg className="fv-map" viewBox={`${BOUNDS.minX - pad} ${BOUNDS.minZ - pad} ${BOUNDS.maxX - BOUNDS.minX + pad * 2} ${BOUNDS.maxZ - BOUNDS.minZ + pad * 2}`} role="img" aria-label="Plano de la feria">
    <circle cx={0} cy={0} r={30} className="fv-map-plaza" />
    <circle cx={DANCE_FLOOR.x} cy={DANCE_FLOOR.z} r={DANCE_FLOOR.r} className="fv-map-floor" />
    <circle cx={FOUNTAIN.x} cy={FOUNTAIN.z} r={FOUNTAIN.r} className="fv-map-fountain" />
    <circle cx={WHEEL.x} cy={WHEEL.z} r={3.4} className="fv-map-wheel" />
    {CIRCLES.map(c => c.stall && <rect key={`s-${c.id}`} x={c.stall.x - c.stall.w / 2} y={c.stall.z - c.stall.d / 2} width={c.stall.w} height={c.stall.d} rx={0.4} fill={c.stall.color} className="fv-map-stall" />)}
    {CIRCLES.map(c => <g key={c.id} className={done.includes(c.id) ? 'fv-map-done' : 'fv-map-spot'} onClick={() => onOpen(c.id)} role="button" aria-label={`${c.n}. ${c.name}`}>
      <circle cx={c.spot.x} cy={c.spot.z} r={big ? 2.6 : 2.2} />
      <text x={c.spot.x} y={c.spot.z + 1} textAnchor="middle">{c.n}</text>
      <title>{c.name}</title>
    </g>)}
    {pose && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI})`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="fv-map-me" /></g>}
  </svg>;
}

// ------------------------------------------------------------------ Busca
function BuscaPanel({ set, session, flat, onTry, onClose, onAudio }: {
  set: BuscaSet; session: Session; flat: boolean; onTry: (figureId: string) => { correct: boolean; feedback: string | null }; onClose: () => void; onAudio: (playing: boolean) => void;
}) {
  const state = buscaState(session, set.id);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [plays, setPlays] = useState(0);
  const [showText, setShowText] = useState(false);
  const [audioMissing, setAudioMissing] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  useEffect(() => { onAudio(playing); }, [playing, onAudio]);
  useEffect(() => () => onAudio(false), [onAudio]);
  const listen = () => { const el = audio.current; if (!el || audioMissing) return; el.currentTime = 0; void el.play().catch(() => setAudioMissing(true)); };
  const textVisible = showText || plays >= 2 || state.solved;
  const solved = state.solved;
  const circle = set.kind === 'transfer' ? circleById('baile') : CIRCLES[set.circle - 1] ?? null;
  return <section className={`fv-busca${flat ? ' is-flat' : ''}`} aria-labelledby="fv-busca-h" data-set={set.id}>
    <header className="fv-card-head">
      <p><span>{circle?.n}. {circle?.name} · Busca y describe</span><em>{set.kind === 'transfer' ? 'Un aviso nuevo para comprobar' : 'Escuchen el aviso y encuentren a la persona'}</em></p>
      <button type="button" className="fv-close" onClick={onClose} aria-label="Cerrar Busca y describe">×</button>
    </header>
    <div className="fv-busca-body">
      <div className="fv-busca-audio">
        <audio ref={audio} src={`/audio/escucha-3d/feria-a2-busca-${set.id}.mp3`} preload="auto" onError={() => setAudioMissing(true)}
          onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => { setPlaying(false); setPlays(p => p + 1); }} />
        {!audioMissing
          ? <button type="button" className="fv-primary" onClick={listen}>{playing ? 'Escuchando…' : plays ? 'Escuchar otra vez' : 'Escuchar el aviso'}</button>
          : <p className="fv-audio-note" role="status">El audio de este aviso todavía no está generado. Lee el aviso en voz alta para la clase.</p>}
        <button type="button" className="fv-secondary" onClick={() => setShowText(s => !s)} aria-pressed={textVisible}>{textVisible ? 'Ocultar texto' : 'Ver texto'}</button>
      </div>
      {(textVisible || audioMissing) && <div className="fv-busca-text"><Transcript lines={[{ s: 0, text: set.text }]} speakers={[{ name: set.speaker ?? 'Aviso' }]} /></div>}
      {flat && <div className="fv-busca-flat">
        <div className="fv-figures">{set.figures.map((f, i) => <figure key={f.id} className={solved && f.id === set.target ? 'is-found' : undefined}><FigureSvg figure={f} size={132} /><figcaption>{i + 1}</figcaption></figure>)}</div>
        <BuscaPlan figures={set.figures} />
      </div>}
      <p className="fv-busca-ask">{solved ? '¡Encontrada!' : '¿Quién es? Den indicaciones desde el punto de vista de la mascota y elijan un número.'}</p>
      <div className="fv-busca-picks" role="group" aria-label="Elegir persona">
        {set.figures.map((f, i) => <button key={f.id} type="button" disabled={solved}
          className={state.tries.includes(f.id) ? (f.id === set.target ? 'is-right' : 'is-wrong') : undefined}
          onClick={() => { const r = onTry(f.id); setFeedback(r.feedback); }}>{i + 1}</button>)}
      </div>
      {feedback && !solved && <p className="fv-feedback" role="status">{feedback}</p>}
      {solved && set.kind !== 'transfer' && <div className="fv-flip">
        <h3>Ahora al revés</h3>
        <p>Un estudiante elige en secreto a otra persona de la feria. La describe y da indicaciones; el profesor conduce la mascota hasta encontrarla. Usen solo lo que se ve: ropa, colores, pelo, lo que hace y dónde está.</p>
      </div>}
    </div>
  </section>;
}

// ------------------------------------------------------------------ beats
const LABEL: Record<Beat['kind'], string> = { contrast: 'Contraste lingüístico', stimulus: 'Estímulo de conversación', busca: 'Busca y describe' };

function BeatView({ beat, scene, session, cast, sets, active, onAnswer, onBusca }: {
  beat: Beat; scene: SceneState; session: Session; cast: Record<string, { name: string }>; sets: BuscaSet[]; active: boolean;
  onAnswer: (index: number) => void; onBusca: (id: string) => void;
}) {
  const state = scene.beats[beat.id] ?? { tries: [], pick: null, seen: false };
  const done = beatDone(scene, beat, session);
  const who = beat.who ? cast[beat.who]?.name : null;
  const feedback = beat.kind === 'contrast' ? lastFeedback(scene, beat) : null;
  return <section className={`fv-beat fv-beat-${beat.kind}${done ? ' is-done' : ''}`} data-beat={beat.id} aria-label={`${LABEL[beat.kind]}${who ? ` con ${who}` : ''}`}>
    <p className="fv-beat-label">{beat.label || LABEL[beat.kind]}{who ? ` · ${who}` : ''}</p>
    {beat.context && <p className="fv-beat-context">{beat.context}</p>}
    {beat.ask && <p className="fv-ask">{beat.ask}</p>}
    {beat.prompt && <p className="fv-beat-prompt">{beat.prompt}</p>}

    {beat.kind === 'contrast' && <>
      <ol className="fv-options">{(beat.options as ContrastOption[]).map((o, i) => <li key={o.id}><button type="button" disabled={done || state.tries.includes(i)}
        className={state.tries.includes(i) ? (o.correct ? 'is-right' : 'is-wrong') : undefined} onClick={() => onAnswer(i)}>
        <kbd>{LETTERS[i]}</kbd><span>{o.label}</span></button></li>)}</ol>
      {feedback && <p className={feedback.correct ? 'fv-good' : 'fv-feedback'} role="status">{feedback.text}</p>}
      {done && beat.after && <p className="fv-reply">{beat.after}</p>}
    </>}

    {beat.kind === 'stimulus' && beat.options && <>
      {state.pick === null ? <>
        <p className="fv-say">Elijan una respuesta y díganla en voz alta. No hay una respuesta correcta.</p>
        <ol className="fv-options">{(beat.options as StimulusOption[]).map((o, i) => <li key={i}><button type="button" onClick={() => onAnswer(i)}><kbd>{LETTERS[i]}</kbd><span>{o.say}</span></button></li>)}</ol>
      </> : <div className="fv-said">
        <p className="fv-chosen"><span>Ustedes</span>{(beat.options as StimulusOption[])[state.pick].say}</p>
        <p className="fv-reply">{(beat.options as StimulusOption[])[state.pick].reply}</p>
        <p className="fv-end">{(beat.options as StimulusOption[])[state.pick].end}</p>
      </div>}
    </>}

    {beat.kind === 'stimulus' && !beat.options && beat.frames && <>
      <ul className="fv-frames">{beat.frames.map(f => <li key={f.id}>{f.label}</li>)}</ul>
      {active && !done && <button type="button" className="fv-primary" onClick={() => onAnswer(0)}>Hecho, seguimos</button>}
    </>}

    {beat.kind === 'busca' && <div className="fv-row">{(beat.sets ?? []).map((id, i) => {
      const set = sets.find(x => x.id === id);
      if (!set) return null;
      const solved = buscaState(session, id).solved;
      return <button key={id} type="button" className={solved ? 'fv-secondary is-done' : 'fv-primary'} onClick={() => onBusca(id)}>{solved ? '✓ ' : ''}Aviso {i + 1}</button>;
    })}</div>}

    {beat.teacher && <details className="fv-teacher"><summary>Para el profesor</summary><p>{beat.teacher}</p></details>}
  </section>;
}

// ------------------------------------------------------------------ main
export default function FeriaGame() {
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
  const [buscaId, setBuscaId] = useState<string | null>(null);
  const [voice, setVoice] = useState(false);
  const [stats, setStats] = useState<{ calls: number; dpr: number; fps: number; people: number } | null>(null);
  const [debug, setDebug] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  const [mode, setMode] = useListeningMode('feria');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);
  const content = contentFor(state.level);
  const circles = content.CIRCLES as Record<string, Circle>;
  const sets = content.BUSCA as BuscaSet[];
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
  const [heard, markHeard] = useListeningDone('feria', state.level);
  const level = LEVELS.find(l => l.id === state.level) ?? LEVELS[0];
  const sceneId = state.scene?.id ?? null;
  const circle = sceneId ? circles[sceneId] : undefined;
  const authored = Boolean(circle && !circle.status);
  const sceneCircle = sceneId ? circleById(sceneId) : null;
  const cur = state.scene && authored ? currentBeat(state.scene, circle, session) : 0;
  const finished = Boolean(circle && authored && cur >= circle.beats.length);
  const buscaSet = buscaId ? sets.find(s => s.id === buscaId) ?? null : null;
  const buscaCircle = buscaSet ? (buscaSet.kind === 'transfer' ? 'baile' : CIRCLES[buscaSet.circle - 1]?.id ?? null) : null;
  const placed = useMemo(() => (buscaSet && buscaCircle ? { circle: buscaCircle, placed: placeSet(buscaSet, buscaCircle) } : null), [buscaSet, buscaCircle]);
  const use3d = has3d && !flat;
  const heardHere = mode === 'escucha' ? heard : done;
  const route = routes.find(r => r.mode === state.route) ?? routes[0];
  const routeDone = state.route === 'escucha' ? heard : done;
  const percent = routeProgress(route, routeDone, session.finished);
  const isClosing = sceneId === 'baile';

  // A circle is done when its last beat is (E1 counts it).
  useEffect(() => { if (finished && sceneId) setState(s => markDone(s, sceneId)); }, [finished, sceneId]);
  // The pick of the circle's first stimulus feeds the closing timeline.
  const pickNow = state.scene && circle ? timelinePick(state.scene, circle) : null;
  useEffect(() => { if (sceneId && pickNow !== null) setSession(s => recordPick(s, sceneId, pickNow)); }, [sceneId, pickNow]);

  // Sound: ducked under cards, silent under any clip (AC5).
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  const cardOpen = Boolean(state.scene) || listenAt !== undefined || Boolean(buscaId);
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
  const open = useCallback((id: string) => {
    setList(false); setMap(false); setBuscaId(null);
    if (mode === 'escucha') { setListenAt(id); return; }
    setTalkAt(0);
    setState(s => openScene(s, id));
  }, [mode]);
  const close = useCallback(() => { setBuscaId(null); setState(s => closeScene(s)); }, []);
  const switchMode = (next: typeof mode) => { setMode(next); setState(s => setRoute(s, next)); setListenAt(undefined); setBuscaId(null); if (state.scene) close(); };
  const answer = (beat: Beat, index: number) => setState(s => answerBeat(s, beat, index));
  const tryFigure = (figureId: string) => {
    if (!buscaSet) return { correct: false, feedback: null };
    const r = buscaTry(session, buscaSet, figureId);
    setSession(r.session);
    return r;
  };
  const newGroup = () => {
    if (!window.confirm('¿Empezar una clase nueva con otro grupo? Se borran las notas de esta sesión (logros, historia y lista de control).')) return;
    setSession(resetGroup());
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (buscaId) { setBuscaId(null); return; }
      if (state.scene) { close(); return; }
      if (list) setList(false);
      if (map) setMap(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.scene, list, map, close, buscaId]);
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

  const busy = Boolean(state.scene) || listenAt !== undefined || Boolean(buscaId);
  const nearCircle = near ? circleById(near) : null;
  const story = useMemo(() => timeline(session, circles), [session, circles]);
  const conversation = routes.find(r => r.mode === 'conversacion');
  const group = tally(session, routeCircles(conversation).length ? routeCircles(conversation) : CIRCLE_IDS);
  const transferSet = sets.find(s => s.kind === 'transfer') ?? null;
  const closing = content.CLOSING;
  const showList = list || (ready && entered && !use3d && !busy);

  return <main className="fv" data-level={state.level} data-mode={mode} data-view={use3d ? '3d' : 'mapa'}>
    {ready && use3d && <World3D circleId={buscaId ? null : sceneId} busca={buscaId ? placed : null}
      reveal={buscaSet && buscaState(session, buscaSet.id).solved ? buscaSet.target : null}
      done={heardHere} paused={!entered || list || map || listenAt !== undefined} intro={!entered}
      onSpot={open} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)} onStats={debug ? setStats : undefined} />}
    {ready && !use3d && <div className="fv-flatbg" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="fv-title" aria-labelledby="fv-title-h">
      <div className="fv-title-card">
        <p className="fv-kicker">Fiesta del pueblo · Esta noche</p>
        <h1 id="fv-title-h">La feria de Villaluz</h1>
        <p className="fv-tagline">Luces, churros, una noria y mucha gente. Alguien se ha perdido.</p>
        <p className="fv-lede">Una feria de pueblo al atardecer con ocho círculos blancos. Describan y encuentren a personas entre la gente, pidan con cortesía, reclamen, comparen y cuenten la noche al final.</p>
        <p className="fv-label">Nivel</p>
        <div className="fv-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={next => { setMode(next); setState(s => setRoute(s, next)); }} />
        <p className="fv-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchan una escena de la feria con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo leen la situación, eligen qué decir y conversan. En la información, el escenario y las fotos hay que encontrar a una persona entre la gente.'}</p>
        <div className="fv-row">
          <button type="button" className="fv-enter" onClick={enter}>Entrar en la feria</button>
          {has3d && <button type="button" className="fv-secondary fv-on-dark" aria-pressed={flat} onClick={() => setFlat(f => !f)}>{flat ? 'Usar el 3D' : 'Mapa sin movimiento'}</button>}
        </div>
        <p className="fv-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. La lista del profesor abre cualquier círculo sin caminar.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="fv-hud">
      <div className="fv-where"><span>Villaluz · {level.label}</span><b>{nearCircle?.name ?? sceneCircle?.name ?? 'La plaza'}</b></div>
      <div className="fv-hud-right">
        <span className="fv-progress">{mode === 'escucha' ? `${heard.length} de ${CIRCLE_IDS.length} escuchas` : `${done.length} de ${CIRCLE_IDS.length} círculos`}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="fv-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Mapa</button>
        <button type="button" onClick={() => setList(true)}>Lista del profesor</button>
        {has3d && <button type="button" onClick={() => setFlat(f => !f)} aria-pressed={flat}>{flat ? '3D' : 'Sin movimiento'}</button>}
        <button type="button" onClick={() => setSound(s => !s)} aria-pressed={!sound} aria-label={sound ? 'Silenciar el ambiente' : 'Activar el ambiente'}>{sound ? '🔊' : '🔇'}</button>
        <button type="button" onClick={() => setEntered(false)}>Inicio</button>
      </div>
    </header>}
    {entered && use3d && !busy && !list && <aside className={map ? 'fv-mapbox is-big' : 'fv-mapbox'} onClick={() => !map && setMap(true)}>
      <FairMap pose={pose} done={heardHere} onOpen={(id) => map && open(id)} big={map} />
      {map && <p>Toca un círculo para abrirlo. <button type="button" className="fv-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar mapa</button></p>}
    </aside>}
    {debug && stats && <p className="fv-debug">{stats.calls} draw calls · DPR {stats.dpr} · {stats.fps} fps · {stats.people} personas</p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && <ListeningBadge game="feria" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="feria" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && use3d && !busy && !list && !map && nearCircle && <div className="fv-prompt" role="status">
      <button type="button" onClick={() => open(nearCircle.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearCircle.name}` : `${nearCircle.n}. ${nearCircle.name}`}</button>
    </div>}

    {/* ------------------------------------------------ teacher list: routes and circles */}
    {showList && <section className="fv-panel fv-list" aria-labelledby="fv-list-h">
      <h2 id="fv-list-h">Lista del profesor · {level.label}</h2>
      {content.PLACEMENT && <p className="fv-placement">{content.PLACEMENT}</p>}
      <div className="fv-routes" role="tablist" aria-label="Recorrido">
        {routes.map(r => <button key={r.id} type="button" role="tab" aria-selected={route?.id === r.id} onClick={() => { setState(s => setRoute(s, r.mode)); if (r.mode !== mode) setMode(r.mode); }}>{r.title} (~{r.minutes} min)</button>)}
      </div>
      {route && <ol className="fv-route">{route.steps.map((step, i) => {
        const ids = step.oneOf ?? (step.circle ? [step.circle] : []);
        const isDone = step.closing ? session.finished : ids.length > 0 && stepDone(step, routeDone);
        if (!ids.length) return <li key={i}><div className="fv-step-note"><span>Calentamiento · {step.minutes} min</span><small>{step.do}</small></div></li>;
        return <li key={i} className="fv-step">{ids.map((id, k) => { const c = circleById(id)!; return <button key={id} type="button" className={isDone ? 'is-done' : undefined} onClick={() => open(id)}>
          <span>{k > 0 ? 'o ' : ''}{c.n}. {c.name}{step.closing ? ' · cierre' : ''}</span><small>{step.minutes} min</small>{isDone && <i aria-label="hecho">✓</i>}
        </button>; })}</li>;
      })}</ol>}
      <p className="fv-e1">Recorrido: {percent} %{session.finished ? ' · terminado' : ''}</p>
      <h3>Todos los círculos</h3>
      <ol className="fv-all">{CIRCLES.map(c => <li key={c.id}><button type="button" className={heardHere.includes(c.id) ? 'is-done' : undefined} onClick={() => open(c.id)}>
        <span>{c.n}. {c.name}</span><small>{circles[c.id]?.status ? 'En preparación' : circles[c.id]?.title ?? c.place}</small>{heardHere.includes(c.id) && <i aria-label="hecho">✓</i>}
      </button></li>)}</ol>
      {!use3d && <div className="fv-flatmap"><FairMap pose={null} done={heardHere} onOpen={open} big /></div>}
      <div className="fv-row">
        {use3d && <button type="button" className="fv-secondary" onClick={() => setList(false)}>Volver a la feria</button>}
        <button type="button" className="fv-secondary" onClick={() => setState(s => resetLevel(s))}>Marcar todo como no hecho</button>
        <button type="button" className="fv-secondary" onClick={newGroup}>{closing?.reset ?? 'Nueva clase / nuevo grupo'}</button>
      </div>
      <p className="fv-privacy">{closing?.sessionLabel ?? 'Notas de esta sesión: no se guardan por alumno'}.</p>
    </section>}

    {/* ------------------------------------------------ Busca y describe */}
    {buscaSet && <BuscaPanel key={buscaSet.id} set={buscaSet} session={session} flat={!use3d} onTry={tryFigure} onClose={() => setBuscaId(null)} onAudio={onAudio} />}

    {/* ------------------------------------------------ scene card */}
    {circle && authored && sceneCircle && state.scene && !buscaId && <section className="fv-card" aria-labelledby="fv-card-h" data-scene={sceneCircle.id} data-ended={finished ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="fv-card-head">
        <p><span>{sceneCircle.n}. {sceneCircle.name}</span><em>{circle.place}</em></p>
        <button type="button" className="fv-close" onClick={close} aria-label="Volver a la feria">×</button>
      </header>
      <div className="fv-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="fv-card-h">{circle.title}</h2>
        <p className="fv-line">{circle.line}</p>
        <ul className="fv-dialogue">{circle.dialogue.map(([who, line], i) => <li key={i}><b>{speakerName(cast, who)}</b><span>{line}</span></li>)}</ul>
        {circle.beats.slice(0, cur + 1).map((beat, i) => <BeatView key={beat.id} beat={beat} scene={state.scene!} session={session} cast={cast} sets={sets} active={i === cur}
          onAnswer={index => answer(beat, index)} onBusca={setBuscaId} />)}
        {finished && <section className="fv-talk" aria-labelledby="fv-talk-h">
          <h3 id="fv-talk-h">Ahora, conversación</h3>
          <ol>{circle.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}>{q}</button></li>)}</ol>
          <div className="fv-row">
            <button type="button" className="fv-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="fv-secondary" disabled={talkAt === circle.talk.length - 1} onClick={() => setTalkAt(t => Math.min(circle.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}

        {/* The closing at the dance (AC9): role-play (beats above), the group's story, the self-check, one transfer question. */}
        {isClosing && finished && closing && <section className="fv-closing" aria-labelledby="fv-closing-h">
          <h3 id="fv-closing-h">Cierre: nuestra noche en la feria</h3>
          {transferSet && <div className="fv-closing-step">
            <h4>Un último aviso</h4>
            <p>Una persona nueva que nadie ha buscado todavía.</p>
            <button type="button" className={buscaState(session, transferSet.id).solved ? 'fv-secondary is-done' : 'fv-primary'} onClick={() => setBuscaId(transferSet.id)}>{buscaState(session, transferSet.id).solved ? '✓ Encontrada' : 'Escuchar el aviso'}</button>
          </div>}
          <div className="fv-closing-step">
            <h4>La historia del grupo</h4>
            <p>{closing.narrative.prompt}</p>
            <ol className="fv-story">
              <li>{closing.narrative.opening}</li>
              {story.map(s => <li key={s.id}>{s.text}</li>)}
              <li>{closing.narrative.ending}</li>
            </ol>
            {!story.length && <p className="fv-empty">Todavía no hay decisiones del grupo en esta sesión: la historia empieza y termina en el baile.</p>}
            <p className="fv-frame">{closing.narrative.frames.join(' · ')}</p>
          </div>
          <div className="fv-closing-step">
            <h4>Lista de control · {closing.selfCheck.scope}</h4>
            <ul className="fv-check">{closing.selfCheck.items.map(item => <li key={item.id}><label>
              <input type="checkbox" checked={session.checks.includes(item.id)} onChange={() => setSession(s => toggleCheck(s, item.id))} /> {item.label}
            </label></li>)}</ul>
          </div>
          <div className="fv-closing-step">
            <h4>Y tú</h4>
            <p className="fv-transfer">{closing.transfer.question}</p>
            <details><summary>Ejemplo</summary><p>{closing.transfer.model}</p></details>
          </div>
          <p className="fv-tally">Resultado del grupo en esta sesión: {group.logrado}/{group.total} círculos logrados.</p>
          <div className="fv-row">
            <button type="button" className="fv-primary" disabled={session.finished} onClick={() => setSession(s => finish(s))}>{session.finished ? '✓ Terminado' : 'Terminar'}</button>
            <button type="button" className="fv-secondary" onClick={newGroup}>{closing.reset}</button>
          </div>
          <p className="fv-privacy">{closing.sessionLabel}.</p>
        </section>}

        <details className="fv-words" open={finished}>
          <summary>Palabras de la escena</summary>
          <ul>{circle.words.map(w => <li key={w}>{w}</li>)}</ul>
        </details>
        <details className="fv-teacher">
          <summary>Para el profesor</summary>
          <p>{circle.teacher}</p>
          <ul className="fv-exponents">{circle.exponents.map(e => <li key={e.id}><b>{e.form}</b>: {e.use}</li>)}</ul>
        </details>
      </div>
      <footer className="fv-card-foot">
        <div className="fv-ticks" role="group" aria-label="El grupo en esta sesión">
          <span>El grupo:</span>
          {TICKS.map(t => <button key={t} type="button" aria-pressed={session.ticks[sceneCircle.id] === t} onClick={() => setSession(s => tick(s, sceneCircle.id, t))}>{TICK_LABEL[t]}</button>)}
        </div>
        <button type="button" className={finished ? 'fv-primary' : 'fv-secondary'} onClick={close}>{finished ? 'Seguir paseando' : 'Volver a la feria'} <kbd>Esc</kbd></button>
      </footer>
    </section>}
    {state.scene && !authored && !buscaId && <section className="fv-panel" role="status"><p>Este círculo todavía no tiene su escena en {level.label}.</p><button type="button" className="fv-secondary" onClick={close}>Volver</button></section>}
  </main>;
}
