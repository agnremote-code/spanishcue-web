'use client';

// Lluvia de estrellas · the lesson around the 3D campsite: title screen with
// the level and the mode, the HUD (where you are, the clock of the night,
// progress, map, sound), Celeste's notebook that your answers write, the
// conversation card (situation, dialogue, three answers with their
// consequence, five questions for the student) and the listening card shared
// with the other 3D worlds. Both modes live in the same world: switching
// never leaves it. The scenes of each level are loaded when needed. Without
// WebGL the circles open from a list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { ANNOUNCEMENTS, BOUNDS, CORRAL, DOME, FIRE, FURNITURE, KITCHEN, PARKING, PATH, SALAR, SCENES, SECTORS, sceneById } from './layout.mjs';
import { LEVELS, loadLevel } from './levels.mjs';
import type { LevelContent, Text } from './levels.d.mts';
import { CAST, NIGHT, STORY, nightClock, skyPhase } from './story.mjs';
import { FINAL, STORAGE_KEY, choose, closeScene, createState, doneFor, invitadoById, logFor, normaliseLevel, openScene, progress, resetLevel, restore, sceneView, serialise, setLevel, undo } from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { createAmbience, type Ambience } from './ambience';
import { setShoutMuted } from '../escucha-3d/shout';
import type { Pose } from './World3D';
import './estrellas.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="le-loading">Llegando al Camping Los Cardones…</div> });
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
  return <Tag className={className}>{t.es}<small className="le-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => typeof t === 'string' ? t : t.es;

// The map of the campsite: the desert, the salt flat, the car park, the
// kitchen tent, the observatory, the llama pen, the path, the lookout, the
// tents, the circles and you.
const TENTS = FURNITURE.filter(f => ['tent', 'caravan', 'hut', 'shed', 'showers', 'booth'].includes(f.type));
function MiniMap({ pose, done, onOpen }: { pose: Pose | null; done: string[]; onOpen: (id: string) => void }) {
  const b = BOUNDS;
  const rect = (r: { x0: number; x1: number; z0: number; z1: number }, cls: string, key?: string | number) => <rect key={key} x={r.x0} y={r.z0} width={r.x1 - r.x0} height={r.z1 - r.z0} className={cls} />;
  return <svg className="le-map" viewBox={`${b.minX - 1} ${b.minZ - 1} ${b.maxX - b.minX + 2} ${b.maxZ - b.minZ + 2}`} role="img" aria-label="Mapa del camping">
    <rect x={b.minX - 1} y={b.minZ - 1} width={b.maxX - b.minX + 2} height={b.maxZ - b.minZ + 2} className="le-map-desert" />
    {rect(SALAR, 'le-map-salt')}
    {rect(PARKING, 'le-map-park')}
    {rect(PATH, 'le-map-path')}
    <circle cx={0} cy={-74} r={13} className="le-map-lookout" />
    {rect(KITCHEN, 'le-map-room')}
    {rect(DOME, 'le-map-dome')}
    {rect(CORRAL, 'le-map-pen')}
    <circle cx={FIRE.x} cy={FIRE.z} r={1.6} className="le-map-fire" />
    {TENTS.map((f, i) => <rect key={i} x={f.x - f.w / 2} y={f.z - f.d / 2} width={f.w} height={f.d} rx={0.6} className="le-map-tent" />)}
    {SCENES.map(s => <circle key={s.id} cx={s.spot.x} cy={s.spot.z} r={2.4} className={done.includes(s.id) ? 'le-map-done' : 'le-map-spot'} onClick={() => onOpen(s.id)}><title>{s.sector}</title></circle>)}
    {pose && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI}) scale(1.4)`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="le-map-me" /></g>}
  </svg>;
}

// Celeste's notebook, written by your answers: who comes up to the lookout, and how.
function Notebook({ state, open, onToggle }: { state: State; open: boolean; onToggle: () => void }) {
  const lines = logFor(state);
  const a0 = state.level === 'A0';
  const last = lines.slice(-2);
  return <button type="button" className={open ? 'le-notes is-open' : 'le-notes'} onClick={onToggle} aria-expanded={open} aria-label={`La libreta de Celeste: ${lines.length} líneas`}>
    <span className="le-notes-title">Libreta de Celeste · quién sube al mirador</span>
    {lines.length === 0 && <em>La libreta está en blanco. Celeste espera saber cómo va a subir cada uno.</em>}
    <ul>{(open ? lines : last).map(n => <li key={n.id}>{n.line.es}{a0 && <small lang="en">{n.line.en}</small>}</li>)}</ul>
    {!open && lines.length > 2 && <small className="le-notes-more">y {lines.length - 2} más…</small>}
  </button>;
}

export default function EstrellasGame() {
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
  const [mode, setMode] = useListeningMode('estrellas');
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
  const [heard, markHeard] = useListeningDone('estrellas', state.level);
  const sector = pose ? SECTORS.find(s => s.id === pose.sector) : null;
  const heardHere = mode === 'escucha' ? heard : done;
  // The night moves on, and the sky fills with meteors, with every circle of the mode you are playing.
  const clock = nightClock(heardHere);
  const sky = skyPhase(heardHere);

  // Ambient sound: per sector, ducked while a card or a listening is open.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(sector?.sound ?? null); }, [sector?.sound]);
  useEffect(() => { ambience.current?.setSky(sky); }, [sky]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : state.scene || listenAt !== undefined ? 0.3 : 1); }, [state.scene, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  const onFireball = useCallback((k: number) => ambience.current?.shimmer(k), []);
  // The campsite loudspeaker: a new message about every 60 seconds.
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

  return <main className="le" data-level={state.level} data-mode={mode}>
    {ready && has3d && <World3D level={state.level} sceneId={state.scene?.id ?? (listenAt && sceneById(listenAt) ? listenAt : null)} mood={view?.mood ?? null}
      done={heardHere} paused={!entered || list || map || listenAt !== undefined} intro={!entered}
      onSpot={open} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)} onFireball={onFireball}
      personId={personId} onPerson={meet} sky={sky} />}
    {ready && !has3d && <div className="le-flat" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="le-title" aria-labelledby="le-title-h">
      <div className="le-title-card">
        <p className="le-kicker">{NIGHT.camping} · {NIGHT.altitude} m · {NIGHT.desert}</p>
        <h1 id="le-title-h">Lluvia de estrellas</h1>
        <p className="le-tagline">Esta noche cae la lluvia de estrellas más grande en sesenta años, y el pico es a las 03:12. Celeste, la guía del camping, quiere que las sesenta y cuatro personas lo vean juntas desde el mirador. Te pide ayuda. Lo que nadie sabe es que a ella le da miedo la oscuridad.</p>
        <p className="le-lede">Un camping entero en el desierto de Ancoyo, a 3600 metros: la entrada, el estacionamiento, las carpas, las caravanas, la fogata, la carpa cocina, el corral de las llamas, las duchas, el observatorio, la casucha minera, el salar y el mirador. Dieciocho círculos blancos con alguien que tiene un problema esta noche (una urna olvidada a novecientos kilómetros, una llama a punto de parir, un astrofísico que no lo es, un minero que nunca vio una estrella fugaz) y diecisiete campistas más. Cada respuesta escribe una línea en la libreta de Celeste.</p>
        <p className="le-label">Elige el nivel</p>
        <div className="le-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={setMode} />
        <p className="le-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchas lo que pasa en el camping (la radio, la fogata, la cocina, el observatorio), con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo lees la situación, eliges qué decir, ves la consecuencia y después respondes cinco preguntas sobre tu vida.'}</p>
        <button type="button" className="le-enter" onClick={enter}>Entrar al camping</button>
        <p className="le-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. Con E también hablas con cualquier campista.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="le-hud">
      <div className="le-where"><span>{NIGHT.camping}</span><b>{sector?.name ?? 'El camping'}</b></div>
      <div className="le-night"><span className="le-clock" aria-label={`Hora: ${clock}`}>{clock}</span></div>
      <div className="le-hud-right">
        <span className="le-progress">{mode === 'escucha' ? `${heard.length} de ${count.total} escuchas` : `${count.done} de ${count.total} escenas`} · {levelInfo.label}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="le-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Mapa</button>
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Escenas'}</button>
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => setEntered(false)}>Nivel</button>
      </div>
    </header>}
    {entered && mode !== 'escucha' && !busy && !list && !map && <Notebook state={state} open={logOpen} onToggle={() => setLogOpen(o => !o)} />}
    {entered && !busy && !list && <aside className={map ? 'le-mapbox is-big' : 'le-mapbox'} onClick={() => !map && setMap(true)}>
      <MiniMap pose={pose} done={heardHere} onOpen={(id) => map && open(id)} />
      {map && <p>Toca un círculo para abrir su escena. <button type="button" className="le-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar mapa</button></p>}
    </aside>}

    {announce && <p className="le-announce" role="status"><span aria-hidden="true">📢</span><span>{announce}</span></p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && <ListeningBadge game="estrellas" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="estrellas" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && !busy && !list && !map && near && <div className="le-prompt" role="status">
      {nearScene ? <button type="button" onClick={() => open(nearScene.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearScene.sector}` : `Hablar con ${nearWho?.name ?? ''}`}</button>
        : nearGuest ? <button type="button" onClick={() => setPersonId(near.id)}><kbd>E</kbd>{`Hablar con ${nearGuest.name}`}</button> : null}
    </div>}
    {entered && mode !== 'escucha' && !busy && !near && !list && !map && done.length === 0 && <p className="le-hint">Los círculos blancos son las escenas. Empieza aquí, en la entrada: Celeste te espera junto a la barrera.</p>}

    {/* ------------------------------------------------ any camper */}
    {guest && <section className="le-panel le-person" aria-labelledby="le-person-h">
      <p className="le-kicker">{guest.who.es}{a0 && <small lang="en"> · {guest.who.en}</small>}</p>
      <h2 id="le-person-h">{guest.name}</h2>
      {band === 'basic' ? <>
        <p className="le-person-say">«{guest.basic.es}»</p>
        {a0 && <p className="le-person-en" lang="en">{guest.basic.en}</p>}
        <p className="le-person-ask"><b>{guest.name}:</b> {guest.basicAsk.es}</p>
        {a0 && <p className="le-person-en" lang="en">{guest.basicAsk.en}</p>}
      </> : <>
        <p className="le-person-say">«{band === 'mid' ? guest.mid : guest.high}»</p>
        <p className="le-person-ask"><b>{guest.name}:</b> {band === 'mid' ? guest.midAsk : guest.highAsk}</p>
      </>}
      <p className="le-person-tip">Respóndele en voz alta.</p>
      <button type="button" className="le-secondary" onClick={() => setPersonId(null)}>Seguir caminando <kbd>Esc</kbd></button>
    </section>}

    {/* ------------------------------------------------ scene list (teacher navigation) */}
    {(list || (ready && !has3d && entered && !state.scene && listenAt === undefined)) && <section className="le-panel le-list" aria-labelledby="le-list-h">
      <h2 id="le-list-h">Escenas · {levelInfo.label}</h2>
      <ol>{STORY.map(s => <li key={s.id}>
        <button type="button" className={heardHere.includes(s.id) ? 'is-done' : undefined} onClick={() => open(s.id)}>
          <span>{s.sector}</span><small>{CAST[s.cast[0]].full}</small>{heardHere.includes(s.id) && <i aria-label="hecha">✓</i>}
        </button>
      </li>)}</ol>
      <div className="le-row">
        {has3d && <button type="button" className="le-secondary" onClick={() => setList(false)}>Volver al camping</button>}
        <button type="button" className="le-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ loading the level */}
    {state.scene && !view && <section className="le-panel" role="status"><p>{failed ? 'No se pudo cargar este nivel. Revisa la conexión y vuelve a intentarlo.' : 'Cargando la escena…'}</p>
      <button type="button" className="le-secondary" onClick={close}>Volver al camping</button></section>}

    {/* ------------------------------------------------ conversation card */}
    {view && <section className="le-card" aria-labelledby="le-card-h" data-scene={view.id} data-ended={view.ended ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="le-card-head">
        <p><span>{view.sector}</span><em>{view.name} · {view.role}</em></p>
        <button type="button" className="le-close" onClick={close} aria-label="Volver al camping">×</button>
      </header>
      <div className="le-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="le-card-h"><Bi t={view.title} /></h2>
        <Bi t={view.line} as="p" className="le-line" />
        <ul className="le-dialogue">{view.dialogue.map((d, i) => <li key={i}><b>{d.who}</b><Bi t={d.line} /></li>)}</ul>
        <Bi t={view.ask} as="p" className="le-ask" />
        {!view.chosen ? <>
          <p className="le-say">Elige una respuesta y dila en voz alta.</p>
          <ol className="le-options">{view.options.map((o, i) => <li key={i}><button type="button" onClick={() => setState(s => choose(s, i))}><kbd>{LETTERS[i]}</kbd><Bi t={o.say} /></button></li>)}</ol>
        </> : <div className="le-said">
          <p className="le-chosen"><span>Tú</span><Bi t={view.chosen.say} /></p>
          <Bi t={view.chosen.reply} as="p" className="le-reply" />
          <Bi t={view.chosen.end} as="p" className="le-end" />
          {view.note && <p className="le-wrote"><span>Escribes en la libreta de Celeste</span>{view.note.es}{a0 && <small lang="en">{view.note.en}</small>}</p>}
        </div>}
        {view.log && <section className="le-toast" aria-labelledby="le-log-h">
          <h3 id="le-log-h">La libreta de Celeste</h3>
          {view.log.length === 0 ? <p>La libreta está en blanco: Celeste la cierra sin leer nada. Juega los otros círculos y vuelve; la libreta se escribe con lo que haces esta noche.</p>
            : <ol>{view.log.map((n, i) => <li key={i}>{n.es}{a0 && <small lang="en">{n.en}</small>}</li>)}</ol>}
          <p className="le-toast-end">Camping Los Cardones · las Ledésmidas, 03:12. Todos arriba.</p>
          <p className="le-toast-tip">Léela en voz alta, despacio, como si fueras Celeste. {logAll.length < 17 && `Faltan ${17 - logAll.length} líneas.`}</p>
        </section>}
        {view.ended && <section className="le-talk" aria-labelledby="le-talk-h">
          <h3 id="le-talk-h">Ahora, conversación</h3>
          <ol>{view.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}><Bi t={q} /></button></li>)}</ol>
          <div className="le-row">
            <button type="button" className="le-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="le-secondary" disabled={talkAt === view.talk.length - 1} onClick={() => setTalkAt(t => Math.min(view.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}
        {vocab && <details className="le-words" open={view.ended}>
          <summary>Palabras de la escena</summary>
          <ul>{view.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>}
      </div>
      <footer className="le-card-foot">
        {view.chosen && <button type="button" className="le-secondary" onClick={() => setState(s => undo(s))}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'le-primary' : 'le-secondary'} onClick={close}>{view.ended ? (view.id === FINAL ? 'Mirar el cielo' : 'Seguir por el camping') : 'Volver al camping'} <kbd>Esc</kbd></button>
        <label className="le-toggle"><input type="checkbox" checked={vocab} onChange={e => setVocab(e.target.checked)} /> Vocabulario</label>
      </footer>
    </section>}
  </main>;
}
