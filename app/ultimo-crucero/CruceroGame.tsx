'use client';

// Último crucero · the lesson around the 3D ship: title screen with the level
// and the mode, the HUD (deck, the clock of the night, progress, map,
// sound), the last page of the logbook that your answers write, the
// conversation card (situation, dialogue, three answers with their
// consequence, five questions for the student) and the listening card shared
// with the other 3D worlds. Both modes live in the same world: switching
// never leaves it. The scenes of each level are loaded when needed. Without
// WebGL the circles open from a list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { ANNOUNCEMENTS, BOUNDS, BRIDGE, CABINS, ENGINE, FURNITURE, HULL, SALON, SCENES, SECTORS, SUPER, halfBeam, sceneById } from './layout.mjs';
import { LEVELS, loadLevel } from './levels.mjs';
import type { LevelContent, Text } from './levels.d.mts';
import { CAST, SHIP, STORY, nightClock, stormPhase } from './story.mjs';
import { FINAL, STORAGE_KEY, choose, closeScene, createState, doneFor, invitadoById, logFor, normaliseLevel, openScene, progress, resetLevel, restore, sceneView, serialise, setLevel, undo } from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { createAmbience, type Ambience } from './ambience';
import { setShoutMuted } from '../escucha-3d/shout';
import type { Pose } from './World3D';
import './crucero.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="uc-loading">Subiendo a bordo del Albatros…</div> });
const LETTERS = ['A', 'B', 'C'];
type State = ReturnType<typeof createState>;

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return Boolean(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}

function initialState(): State {
  if (typeof window === 'undefined') return createState();
  const params = new URLSearchParams(window.location.search);
  const asked = normaliseLevel(params.get('level') ?? params.get('nivel'));
  let raw: string | null = null;
  try { raw = window.localStorage.getItem(STORAGE_KEY); } catch { raw = null; }
  const state = restore(raw);
  return { ...(asked ? setLevel(state, asked) : state), scene: null };
}

// A0 texts carry English under the Spanish, and so do the A1 scene words;
// the other levels are Spanish only.
function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="uc-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => typeof t === 'string' ? t : t.es;

// The map of the ship: the hull, the superstructure, the rooms, the lifeboats, the circles and you.
function hullPath() {
  const pts: string[] = [`${HULL.x1},${HULL.z1}`, `${HULL.x1},${HULL.z0}`];
  for (let z = HULL.z0 - 2; z > HULL.bow; z -= 2) pts.push(`${halfBeam(z).toFixed(2)},${z}`);
  pts.push(`0,${HULL.bow}`);
  for (let z = HULL.bow + 2; z < HULL.z0; z += 2) pts.push(`${(-halfBeam(z)).toFixed(2)},${z}`);
  pts.push(`${HULL.x0},${HULL.z0}`, `${HULL.x0},${HULL.z1}`);
  return pts.join(' ');
}
const HULL_PATH = hullPath();
const BOATS = FURNITURE.filter(f => f.type === 'lifeboat');
function MiniMap({ pose, done, onOpen }: { pose: Pose | null; done: string[]; onOpen: (id: string) => void }) {
  const b = BOUNDS;
  const rect = (r: { x0: number; x1: number; z0: number; z1: number }, cls: string, key?: string | number) => <rect key={key} x={r.x0} y={r.z0} width={r.x1 - r.x0} height={r.z1 - r.z0} className={cls} />;
  return <svg className="uc-map" viewBox={`${b.minX - 1} ${b.minZ - 1} ${b.maxX - b.minX + 2} ${b.maxZ - b.minZ + 2}`} role="img" aria-label="Mapa del barco">
    <rect x={b.minX - 1} y={b.minZ - 1} width={b.maxX - b.minX + 2} height={b.maxZ - b.minZ + 2} className="uc-map-sea" />
    <polygon points={HULL_PATH} className="uc-map-hull" />
    {rect(SUPER, 'uc-map-room')}
    {rect(BRIDGE, 'uc-map-room')}
    {rect(ENGINE, 'uc-map-room')}
    {rect(SALON, 'uc-map-salon')}
    {CABINS.map(c => rect(c, 'uc-map-room', c.n))}
    {BOATS.map((f, i) => <rect key={i} x={f.x - f.w / 2} y={f.z - f.d / 2} width={f.w} height={f.d} rx={0.6} className="uc-map-boat" />)}
    {SCENES.map(s => <circle key={s.id} cx={s.spot.x} cy={s.spot.z} r={1.6} className={done.includes(s.id) ? 'uc-map-done' : 'uc-map-spot'} onClick={() => onOpen(s.id)}><title>{s.sector}</title></circle>)}
    {pose && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI}) scale(.8)`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="uc-map-me" /></g>}
  </svg>;
}

// The last page of the logbook, written by your answers.
function Logbook({ state, open, onToggle }: { state: State; open: boolean; onToggle: () => void }) {
  const lines = logFor(state);
  const a0 = state.level === 'A0';
  const last = lines.slice(-2);
  return <button type="button" className={open ? 'uc-notes is-open' : 'uc-notes'} onClick={onToggle} aria-expanded={open} aria-label={`La última página de la bitácora: ${lines.length} líneas`}>
    <span className="uc-notes-title">Bitácora del Albatros · última página</span>
    {lines.length === 0 && <em>La página está en blanco. El capitán espera lo que este barco significó para la gente.</em>}
    <ul>{(open ? lines : last).map(n => <li key={n.id}>{n.line.es}{a0 && <small lang="en">{n.line.en}</small>}</li>)}</ul>
    {!open && lines.length > 2 && <small className="uc-notes-more">y {lines.length - 2} más…</small>}
  </button>;
}

export default function CruceroGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [list, setList] = useState(false);
  const [map, setMap] = useState(false);
  const [logOpen, setLogOpen] = useState(false);
  const [near, setNear] = useState<{ kind: 'scene' | 'person'; id: string } | null>(null);
  const [personId, setPersonId] = useState<string | null>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [vocab, setVocab] = useState(true);
  const [talkAt, setTalkAt] = useState(0);
  const [sound, setSound] = useState(true);
  const [musicVolume, setMusicVolume] = useMusicVolume();
  const [announce, setAnnounce] = useState<string | null>(null);
  const [content, setContent] = useState<Record<string, LevelContent>>({});
  const [failed, setFailed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  // Comprensión auditiva: the circles open a listening (undefined = closed, null = the list).
  const [mode, setMode] = useListeningMode('crucero');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const t = window.setTimeout(() => { setState(initialState()); setHas3d(webglAvailable()); setReady(true); }, 0);
    return () => window.clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { window.localStorage.setItem(STORAGE_KEY, serialise(state)); } catch { /* private mode */ }
  }, [state, ready]);
  // The scenes of the chosen level, loaded once per level.
  const level = state.level;
  useEffect(() => {
    if (!ready || content[level]) return;
    let alive = true;
    loadLevel(level).then(c => { if (alive) setContent(all => ({ ...all, [level]: c })); }).catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [ready, level, content]);

  const view = useMemo(() => sceneView(state, content[state.level]), [state, content]);
  const done = doneFor(state);
  const count = progress(state);
  const levelInfo = LEVELS.find(l => l.id === state.level)!;
  const [heard, markHeard] = useListeningDone('crucero', state.level);
  const sector = pose ? SECTORS.find(s => s.id === pose.sector) : null;
  const heardHere = mode === 'escucha' ? heard : done;
  // The night moves on, and the storm grows, with every circle of the mode you are playing.
  const clock = nightClock(heardHere);
  const storm = stormPhase(heardHere);

  // Ambient sound: per sector, ducked while a card or a listening is open.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(sector?.sound ?? null); }, [sector?.sound]);
  useEffect(() => { ambience.current?.setStorm(storm); }, [storm]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : state.scene || listenAt !== undefined ? 0.3 : 1); }, [state.scene, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  const onFlash = useCallback((k: number) => ambience.current?.thunder(k), []);
  // The ship's loudspeakers: a new message about every 60 seconds.
  useEffect(() => {
    if (!entered) return;
    let i = Math.floor(Math.random() * ANNOUNCEMENTS.length);
    let hide = 0;
    const timer = window.setInterval(() => {
      if (state.scene || listenAt !== undefined) return;
      i = (i + 1) % ANNOUNCEMENTS.length;
      ambience.current?.chime();
      setAnnounce(ANNOUNCEMENTS[i]);
      window.clearTimeout(hide);
      hide = window.setTimeout(() => setAnnounce(null), 7000);
    }, 60000);
    return () => { window.clearInterval(timer); window.clearTimeout(hide); };
  }, [entered, state.scene, listenAt]);

  const enter = () => { setEntered(true); ambience.current?.start(); };
  const open = useCallback((id: string) => {
    setList(false); setMap(false); setLogOpen(false);
    if (mode === 'escucha') { setListenAt(id); return; }
    setTalkAt(0);
    setState(s => openScene(s, id));
  }, [mode]);
  const close = useCallback(() => setState(s => closeScene(s)), []);
  const meet = useCallback((id: string | null) => setPersonId(id), []);
  const switchMode = (next: typeof mode) => { setMode(next); setListenAt(undefined); if (state.scene) close(); };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (state.scene) { close(); return; }
      if (personId) { setPersonId(null); return; }
      if (list) setList(false);
      if (map) setMap(false);
      if (logOpen) setLogOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.scene, list, map, close, personId, logOpen]);

  useEffect(() => { cardRef.current?.focus({ preventScroll: true }); }, [view?.id, view?.pick]);

  const onCardKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!view || view.ended) return;
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0) { event.preventDefault(); event.stopPropagation(); setState(s => choose(s, index)); }
  };

  const nearScene = near?.kind === 'scene' ? sceneById(near.id) : null;
  const nearWho = nearScene ? CAST[nearScene.cast[0]] : null;
  const busy = Boolean(state.scene) || listenAt !== undefined || Boolean(personId);
  const nearGuest = near?.kind === 'person' ? invitadoById(near.id) : null;
  const guest = personId ? invitadoById(personId) : null;
  const band = ['A0', 'A1', 'A2'].includes(state.level) ? 'basic' : ['B1', 'B2'].includes(state.level) ? 'mid' : 'high';
  const logAll = logFor(state);
  const a0 = state.level === 'A0';

  return <main className="uc" data-level={state.level} data-mode={mode}>
    {ready && has3d && <World3D level={state.level} sceneId={state.scene?.id ?? (listenAt && sceneById(listenAt) ? listenAt : null)} mood={view?.mood ?? null}
      done={heardHere} paused={!entered || list || map || listenAt !== undefined} intro={!entered}
      onSpot={open} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)} onFlash={onFlash}
      personId={personId} onPerson={meet} storm={storm} />}
    {ready && !has3d && <div className="uc-flat" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="uc-title" aria-labelledby="uc-title-h">
      <div className="uc-title-card">
        <p className="uc-kicker">{SHIP.name} · {SHIP.from} → {SHIP.to}</p>
        <h1 id="uc-title-h">Último crucero</h1>
        <p className="uc-tagline">Es la última noche del Albatros. Mañana, a las siete, los pasajeros bajan en Cádiz y el barco sigue solo hacia el desguace. Hay tormenta, y el capitán te ha pedido que escribas la última página de su bitácora.</p>
        <p className="uc-lede">Un barco de 1971 entero, de proa a popa: el puente, la radio, la sala de máquinas, la cocina, los camarotes, el salón de baile y las cubiertas de los botes. Dieciocho círculos blancos con alguien que se despide de algo (una viuda que espera para tirar unas cenizas, un polizón de ochenta y dos años, un pianista sin público, una pareja que quizá no vuelve junta) y diecisiete pasajeros más. Cada respuesta escribe una línea de la bitácora.</p>
        <p className="uc-label">Elige el nivel</p>
        <div className="uc-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={setMode} />
        <p className="uc-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchas lo que pasa a bordo (la radio, el puente, la cocina, los camarotes), con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo lees la situación, eliges qué decir, ves la consecuencia y después respondes cinco preguntas sobre tu vida.'}</p>
        <button type="button" className="uc-enter" onClick={enter}>Subir a bordo</button>
        <p className="uc-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. Con E también hablas con cualquier pasajero.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="uc-hud">
      <div className="uc-where"><span>{SHIP.name}</span><b>{sector?.name ?? 'La cubierta'}</b></div>
      <div className="uc-night"><span className="uc-clock" aria-label={`Hora: ${clock}`}>{clock}</span></div>
      <div className="uc-hud-right">
        <span className="uc-progress">{mode === 'escucha' ? `${heard.length} de ${count.total} escuchas` : `${count.done} de ${count.total} escenas`} · {levelInfo.label}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="uc-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Mapa</button>
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Escenas'}</button>
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => setEntered(false)}>Nivel</button>
      </div>
    </header>}
    {entered && mode !== 'escucha' && !busy && !list && !map && <Logbook state={state} open={logOpen} onToggle={() => setLogOpen(o => !o)} />}
    {entered && !busy && !list && <aside className={map ? 'uc-mapbox is-big' : 'uc-mapbox'} onClick={() => !map && setMap(true)}>
      <MiniMap pose={pose} done={heardHere} onOpen={(id) => map && open(id)} />
      {map && <p>Toca un círculo para abrir su escena. <button type="button" className="uc-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar mapa</button></p>}
    </aside>}

    {announce && <p className="uc-announce" role="status"><span aria-hidden="true">📢</span><span>{announce}</span></p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && <ListeningBadge game="crucero" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="crucero" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && !busy && !list && !map && near && <div className="uc-prompt" role="status">
      {nearScene ? <button type="button" onClick={() => open(nearScene.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearScene.sector}` : `Hablar con ${nearWho?.name ?? ''}`}</button>
        : nearGuest ? <button type="button" onClick={() => setPersonId(near.id)}><kbd>E</kbd>{`Hablar con ${nearGuest.name}`}</button> : null}
    </div>}
    {entered && mode !== 'escucha' && !busy && !near && !list && !map && done.length === 0 && <p className="uc-hint">Los círculos blancos son las escenas. Empieza aquí, en la popa: Amparo espera junto a la barandilla.</p>}

    {/* ------------------------------------------------ any passenger */}
    {guest && <section className="uc-panel uc-person" aria-labelledby="uc-person-h">
      <p className="uc-kicker">{guest.who.es}{a0 && <small lang="en"> · {guest.who.en}</small>}</p>
      <h2 id="uc-person-h">{guest.name}</h2>
      {band === 'basic' ? <>
        <p className="uc-person-say">«{guest.basic.es}»</p>
        {a0 && <p className="uc-person-en" lang="en">{guest.basic.en}</p>}
        <p className="uc-person-ask"><b>{guest.name}:</b> {guest.basicAsk.es}</p>
        {a0 && <p className="uc-person-en" lang="en">{guest.basicAsk.en}</p>}
      </> : <>
        <p className="uc-person-say">«{band === 'mid' ? guest.mid : guest.high}»</p>
        <p className="uc-person-ask"><b>{guest.name}:</b> {band === 'mid' ? guest.midAsk : guest.highAsk}</p>
      </>}
      <p className="uc-person-tip">Respóndele en voz alta.</p>
      <button type="button" className="uc-secondary" onClick={() => setPersonId(null)}>Seguir caminando <kbd>Esc</kbd></button>
    </section>}

    {/* ------------------------------------------------ scene list (teacher navigation) */}
    {(list || (ready && !has3d && entered && !state.scene && listenAt === undefined)) && <section className="uc-panel uc-list" aria-labelledby="uc-list-h">
      <h2 id="uc-list-h">Escenas · {levelInfo.label}</h2>
      <ol>{STORY.map(s => <li key={s.id}>
        <button type="button" className={heardHere.includes(s.id) ? 'is-done' : undefined} onClick={() => open(s.id)}>
          <span>{s.sector}</span><small>{CAST[s.cast[0]].full}</small>{heardHere.includes(s.id) && <i aria-label="hecha">✓</i>}
        </button>
      </li>)}</ol>
      <div className="uc-row">
        {has3d && <button type="button" className="uc-secondary" onClick={() => setList(false)}>Volver al barco</button>}
        <button type="button" className="uc-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ loading the level */}
    {state.scene && !view && <section className="uc-panel" role="status"><p>{failed ? 'No se pudo cargar este nivel. Revisa la conexión y vuelve a intentarlo.' : 'Cargando la escena…'}</p>
      <button type="button" className="uc-secondary" onClick={close}>Volver al barco</button></section>}

    {/* ------------------------------------------------ conversation card */}
    {view && <section className="uc-card" aria-labelledby="uc-card-h" data-scene={view.id} data-ended={view.ended ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="uc-card-head">
        <p><span>{view.sector}</span><em>{view.name} · {view.role}</em></p>
        <button type="button" className="uc-close" onClick={close} aria-label="Volver al barco">×</button>
      </header>
      <div className="uc-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="uc-card-h"><Bi t={view.title} /></h2>
        <Bi t={view.line} as="p" className="uc-line" />
        <ul className="uc-dialogue">{view.dialogue.map((d, i) => <li key={i}><b>{d.who}</b><Bi t={d.line} /></li>)}</ul>
        <Bi t={view.ask} as="p" className="uc-ask" />
        {!view.chosen ? <>
          <p className="uc-say">Elige una respuesta y dila en voz alta.</p>
          <ol className="uc-options">{view.options.map((o, i) => <li key={i}><button type="button" onClick={() => setState(s => choose(s, i))}><kbd>{LETTERS[i]}</kbd><Bi t={o.say} /></button></li>)}</ol>
        </> : <div className="uc-said">
          <p className="uc-chosen"><span>Tú</span><Bi t={view.chosen.say} /></p>
          <Bi t={view.chosen.reply} as="p" className="uc-reply" />
          <Bi t={view.chosen.end} as="p" className="uc-end" />
          {view.note && <p className="uc-wrote"><span>Escribes en la bitácora</span>{view.note.es}{a0 && <small lang="en">{view.note.en}</small>}</p>}
        </div>}
        {view.log && <section className="uc-toast" aria-labelledby="uc-log-h">
          <h3 id="uc-log-h">La última página de la bitácora</h3>
          {view.log.length === 0 ? <p>La página está en blanco: el capitán la cierra sin leer nada. Juega los otros círculos y vuelve; la bitácora se escribe con lo que haces esta noche.</p>
            : <ol>{view.log.map((n, i) => <li key={i}>{n.es}{a0 && <small lang="en">{n.en}</small>}</li>)}</ol>}
          <p className="uc-toast-end">Albatros, 1971–2026. Fin del viaje.</p>
          <p className="uc-toast-tip">Léela en voz alta, despacio, como si fueras el capitán. {logAll.length < 17 && `Faltan ${17 - logAll.length} líneas.`}</p>
        </section>}
        {view.ended && <section className="uc-talk" aria-labelledby="uc-talk-h">
          <h3 id="uc-talk-h">Ahora, conversación</h3>
          <ol>{view.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}><Bi t={q} /></button></li>)}</ol>
          <div className="uc-row">
            <button type="button" className="uc-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="uc-secondary" disabled={talkAt === view.talk.length - 1} onClick={() => setTalkAt(t => Math.min(view.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}
        {vocab && <details className="uc-words" open={view.ended}>
          <summary>Palabras de la escena</summary>
          <ul>{view.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>}
      </div>
      <footer className="uc-card-foot">
        {view.chosen && <button type="button" className="uc-secondary" onClick={() => setState(s => undo(s))}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'uc-primary' : 'uc-secondary'} onClick={close}>{view.ended ? (view.id === FINAL ? 'Mirar el amanecer' : 'Seguir a bordo') : 'Volver al barco'} <kbd>Esc</kbd></button>
        <label className="uc-toggle"><input type="checkbox" checked={vocab} onChange={e => setVocab(e.target.checked)} /> Vocabulario</label>
      </footer>
    </section>}
  </main>;
}
