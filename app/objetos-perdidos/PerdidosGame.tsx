'use client';

// Objetos perdidos · the lesson around the 3D office: title screen with the
// level and the mode, the HUD (where you are, the clock of the shift,
// progress, map, sound), the ledger of the night that your answers write, the
// conversation card (situation, dialogue, three answers with their
// consequence, five questions for the student) and the listening card shared
// with the other 3D worlds. Both modes live in the same world: switching
// never leaves it. The scenes of each level are loaded when needed. Without
// WebGL the circles open from a list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { ANNOUNCEMENTS, ARCHIVE, BIG, COLD, CORRIDOR, DOCK, HALL, OFFICE_ROOM, PHONES, ROOF, SCENES, SECTORS, SHELVES, STREET, TELEPORTS, sceneById } from './layout.mjs';
import { LEVELS, loadLevel } from './levels.mjs';
import type { LevelContent, Text } from './levels.d.mts';
import { CAST, OFFICE, STORY, nightPhase, shiftClock } from './story.mjs';
import { FINAL, STORAGE_KEY, choose, closeScene, createState, doneFor, invitadoById, logFor, normaliseLevel, openScene, progress, resetLevel, restore, sceneView, serialise, setLevel, undo } from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { createAmbience, type Ambience } from './ambience';
import { setShoutMuted } from '../escucha-3d/shout';
import type { Pose } from './World3D';
import './perdidos.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="op-loading">Abriendo la oficina de objetos perdidos…</div> });
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
  return <Tag className={className}>{t.es}<small className="op-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => typeof t === 'string' ? t : t.es;

// The map of the ground floor (street, rooms, dock) with the roof in a corner inset.
const ROOMS = [HALL, OFFICE_ROOM, PHONES, CORRIDOR, SHELVES, COLD, ARCHIVE, BIG];
const GROUND = { minX: -17, minZ: -47, w: 34, h: 78 };
function MiniMap({ pose, done, onOpen, big }: { pose: Pose | null; done: string[]; onOpen: (id: string) => void; big: boolean }) {
  const rect = (r: { x0: number; x1: number; z0: number; z1: number }, cls: string, key?: string | number) => <rect key={key} x={r.x0} y={r.z0} width={r.x1 - r.x0} height={r.z1 - r.z0} className={cls} />;
  const up = pose ? pose.z < -100 : false;
  const me = (p: Pose, scale: number) => <g transform={`translate(${p.x} ${p.z}) rotate(${-p.heading * 180 / Math.PI}) scale(${scale})`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="op-map-me" /></g>;
  const spots = (onRoof: boolean) => SCENES.filter(s => (s.spot.z < -100) === onRoof).map(s => <circle key={s.id} cx={s.spot.x} cy={s.spot.z} r={1.6} className={done.includes(s.id) ? 'op-map-done' : 'op-map-spot'} onClick={() => onOpen(s.id)}><title>{s.sector}</title></circle>);
  return <div style={{ position: 'relative' }}>
    <svg className="op-map" viewBox={`${GROUND.minX} ${GROUND.minZ} ${GROUND.w} ${GROUND.h}`} role="img" aria-label="Mapa de la oficina">
      <rect x={GROUND.minX} y={GROUND.minZ} width={GROUND.w} height={GROUND.h} className="op-map-sea" />
      {rect(STREET, 'op-map-street')}
      {rect(DOCK, 'op-map-dock')}
      {ROOMS.map((r, i) => rect(r, 'op-map-room', i))}
      {TELEPORTS.filter(t => t.z > -100).map(t => <circle key={t.id} cx={t.x} cy={t.z} r={0.9} className="op-map-stairs"><title>{t.label}</title></circle>)}
      {spots(false)}
      {pose && !up && me(pose, 0.8)}
    </svg>
    <svg className="op-roofmap" viewBox={`${ROOF.x0 - 1} ${ROOF.z0 - 1} ${ROOF.x1 - ROOF.x0 + 2} ${ROOF.z1 - ROOF.z0 + 2}`} role="img" aria-label="La azotea">
      {rect(ROOF, 'op-map-roof')}
      {big && <text x={ROOF.x0 + 1} y={ROOF.z0 + 3} className="op-map-label">AZOTEA</text>}
      {TELEPORTS.filter(t => t.z < -100).map(t => <circle key={t.id} cx={t.x} cy={t.z} r={1.2} className="op-map-stairs" />)}
      {spots(true)}
      {pose && up && me(pose, 0.9)}
    </svg>
  </div>;
}

// The ledger of the night, written by your answers.
function Ledger({ state, open, onToggle }: { state: State; open: boolean; onToggle: () => void }) {
  const lines = logFor(state);
  const a0 = state.level === 'A0';
  const last = lines.slice(-2);
  return <button type="button" className={open ? 'op-notes is-open' : 'op-notes'} onClick={onToggle} aria-expanded={open} aria-label={`El libro de la noche: ${lines.length} líneas`}>
    <span className="op-notes-title">Libro de registro · turno de noche</span>
    {lines.length === 0 && <em>La página está en blanco. Doña Pura lo leerá a las siete.</em>}
    <ul>{(open ? lines : last).map(n => <li key={n.id}>{n.line.es}{a0 && <small lang="en">{n.line.en}</small>}</li>)}</ul>
    {!open && lines.length > 2 && <small className="op-notes-more">y {lines.length - 2} más…</small>}
  </button>;
}

// How many things went home, said as a sentence in the final card (never a counter on screen).
function returnedSentence(n: number, a0: boolean) {
  const es = n === 0 ? 'Esta noche no ha vuelto a casa ningún objeto.' : n === 1 ? 'Esta noche ha vuelto a casa un objeto.' : `Esta noche han vuelto a casa ${n} objetos con sus dueños.`;
  const bet = n >= OFFICE.goal ? 'Doña Pura pierde la apuesta y te invita a un café.' : 'Doña Pura gana la apuesta… por esta vez.';
  const en = n === 1 ? 'Tonight one object went home.' : `Tonight ${n} objects went home with their owners.`;
  return { es: `${es} ${bet}`, en: a0 ? `${en} ${n >= OFFICE.goal ? 'Doña Pura loses the bet and buys you a coffee.' : 'Doña Pura wins the bet… this time.'}` : '' };
}

export default function PerdidosGame() {
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
  const [stairsAt, setStairsAt] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  // Comprensión auditiva: the circles open a listening (undefined = closed, null = the list).
  const [mode, setMode] = useListeningMode('perdidos');
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
  const [heard, markHeard] = useListeningDone('perdidos', state.level);
  const sector = pose ? SECTORS.find(s => s.id === pose.sector) : null;
  const heardHere = mode === 'escucha' ? heard : done;
  // The shift moves on, and the night turns to day, with every circle of the mode you are playing.
  const clock = shiftClock(heardHere);
  const night = nightPhase(heardHere);

  // Ambient sound: per sector, ducked while a card or a listening is open.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(sector?.sound ?? null); }, [sector?.sound]);
  useEffect(() => { ambience.current?.setNight(night); }, [night]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : state.scene || listenAt !== undefined ? 0.3 : 1); }, [state.scene, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  const onStairs = useCallback(() => { ambience.current?.stairs(); setStairsAt(t => t + 1); }, []);
  // The office loudspeaker: a new message about every 60 seconds.
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
  const sentence = view?.back != null ? returnedSentence(view.back, a0) : null;

  return <main className="op" data-level={state.level} data-mode={mode}>
    {ready && has3d && <World3D level={state.level} sceneId={state.scene?.id ?? (listenAt && sceneById(listenAt) ? listenAt : null)} mood={view?.mood ?? null}
      done={heardHere} paused={!entered || list || map || listenAt !== undefined} intro={!entered}
      onSpot={open} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)} onStairs={onStairs}
      personId={personId} onPerson={meet} night={night} />}
    {ready && !has3d && <div className="op-flat" aria-hidden="true" />}
    {stairsAt > 0 && <div key={stairsAt} className="op-stairs" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="op-title" aria-labelledby="op-title-h">
      <div className="op-title-card">
        <p className="op-kicker">{OFFICE.city} · turno de noche</p>
        <h1 id="op-title-h">Objetos perdidos</h1>
        <p className="op-tagline">Anoche fue la Noche de los Faroles, la fiesta más grande de {OFFICE.city}. Hoy empiezas en el turno de noche de la oficina municipal de objetos perdidos, y la jefa ha apostado a que no devuelves doce cosas a sus dueños antes del relevo de las siete.</p>
        <p className="op-lede">Una oficina entera: la calle con la farmacia de guardia, la sala de espera y el mostrador, la sala de los teléfonos, las estanterías de paraguas y de llaves, la cámara fría, el archivo de cuarenta años, la sala de objetos grandes, el muelle de carga y la azotea. Dieciocho círculos blancos con alguien que busca algo (una dentadura que acabó dentro de una tuba, un guante de 1986, una canoa con dos dueños, un loro con dos casas) y diecisiete personas más. Cada respuesta escribe una línea del libro de la noche.</p>
        <p className="op-label">Elige el nivel</p>
        <div className="op-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={setMode} />
        <p className="op-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchas lo que pasa en la oficina (el mostrador, los teléfonos, el muelle, la azotea), con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo lees la situación, eliges qué decir, ves la consecuencia y después respondes cinco preguntas sobre tu vida.'}</p>
        <button type="button" className="op-enter" onClick={enter}>Empezar el turno</button>
        <p className="op-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. Con E también hablas con cualquier persona. La puerta amarilla del muelle sube a la azotea.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="op-hud">
      <div className="op-where"><span>Objetos perdidos</span><b>{sector?.name ?? 'La calle'}</b></div>
      <div className="op-night"><span className="op-clock" aria-label={`Hora: ${clock}`}>{clock}</span></div>
      <div className="op-hud-right">
        <span className="op-progress">{mode === 'escucha' ? `${heard.length} de ${count.total} escuchas` : `${count.done} de ${count.total} escenas`} · {levelInfo.label}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="op-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Mapa</button>
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Escenas'}</button>
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => setEntered(false)}>Nivel</button>
      </div>
    </header>}
    {entered && mode !== 'escucha' && !busy && !list && !map && <Ledger state={state} open={logOpen} onToggle={() => setLogOpen(o => !o)} />}
    {entered && !busy && !list && <aside className={map ? 'op-mapbox is-big' : 'op-mapbox'} onClick={() => !map && setMap(true)}>
      <MiniMap pose={pose} done={heardHere} onOpen={(id) => map && open(id)} big={map} />
      {map && <p>Toca un círculo para abrir su escena. La azotea está en la esquina. <button type="button" className="op-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar mapa</button></p>}
    </aside>}

    {announce && <p className="op-announce" role="status"><span aria-hidden="true">📢</span><span>{announce}</span></p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && <ListeningBadge game="perdidos" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="perdidos" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && !busy && !list && !map && near && <div className="op-prompt" role="status">
      {nearScene ? <button type="button" onClick={() => open(nearScene.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearScene.sector}` : `Hablar con ${nearWho?.name ?? ''}`}</button>
        : nearGuest ? <button type="button" onClick={() => setPersonId(near.id)}><kbd>E</kbd>{`Hablar con ${nearGuest.name}`}</button> : null}
    </div>}
    {entered && mode !== 'escucha' && !busy && !near && !list && !map && done.length === 0 && <p className="op-hint">Los círculos blancos son las escenas. Entra por la puerta: en el mostrador te espera un señor sin dientes.</p>}

    {/* ------------------------------------------------ anyone in the office */}
    {guest && <section className="op-panel op-person" aria-labelledby="op-person-h">
      <p className="op-kicker">{guest.who.es}{a0 && <small lang="en"> · {guest.who.en}</small>}</p>
      <h2 id="op-person-h">{guest.name}</h2>
      {band === 'basic' ? <>
        <p className="op-person-say">«{guest.basic.es}»</p>
        {a0 && <p className="op-person-en" lang="en">{guest.basic.en}</p>}
        <p className="op-person-ask"><b>{guest.name}:</b> {guest.basicAsk.es}</p>
        {a0 && <p className="op-person-en" lang="en">{guest.basicAsk.en}</p>}
      </> : <>
        <p className="op-person-say">«{band === 'mid' ? guest.mid : guest.high}»</p>
        <p className="op-person-ask"><b>{guest.name}:</b> {band === 'mid' ? guest.midAsk : guest.highAsk}</p>
      </>}
      <p className="op-person-tip">Respóndele en voz alta.</p>
      <button type="button" className="op-secondary" onClick={() => setPersonId(null)}>Seguir caminando <kbd>Esc</kbd></button>
    </section>}

    {/* ------------------------------------------------ scene list (teacher navigation) */}
    {(list || (ready && !has3d && entered && !state.scene && listenAt === undefined)) && <section className="op-panel op-list" aria-labelledby="op-list-h">
      <h2 id="op-list-h">Escenas · {levelInfo.label}</h2>
      <ol>{STORY.map(s => <li key={s.id}>
        <button type="button" className={heardHere.includes(s.id) ? 'is-done' : undefined} onClick={() => open(s.id)}>
          <span>{s.sector}</span><small>{CAST[s.cast[0]].full}</small>{heardHere.includes(s.id) && <i aria-label="hecha">✓</i>}
        </button>
      </li>)}</ol>
      <div className="op-row">
        {has3d && <button type="button" className="op-secondary" onClick={() => setList(false)}>Volver a la oficina</button>}
        <button type="button" className="op-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ loading the level */}
    {state.scene && !view && <section className="op-panel" role="status"><p>{failed ? 'No se pudo cargar este nivel. Revisa la conexión y vuelve a intentarlo.' : 'Cargando la escena…'}</p>
      <button type="button" className="op-secondary" onClick={close}>Volver a la oficina</button></section>}

    {/* ------------------------------------------------ conversation card */}
    {view && <section className="op-card" aria-labelledby="op-card-h" data-scene={view.id} data-ended={view.ended ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="op-card-head">
        <p><span>{view.sector}</span><em>{view.name} · {view.role}</em></p>
        <button type="button" className="op-close" onClick={close} aria-label="Volver a la oficina">×</button>
      </header>
      <div className="op-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="op-card-h"><Bi t={view.title} /></h2>
        <Bi t={view.line} as="p" className="op-line" />
        <ul className="op-dialogue">{view.dialogue.map((d, i) => <li key={i}><b>{d.who}</b><Bi t={d.line} /></li>)}</ul>
        <Bi t={view.ask} as="p" className="op-ask" />
        {!view.chosen ? <>
          <p className="op-say">Elige una respuesta y dila en voz alta.</p>
          <ol className="op-options">{view.options.map((o, i) => <li key={i}><button type="button" onClick={() => setState(s => choose(s, i))}><kbd>{LETTERS[i]}</kbd><Bi t={o.say} /></button></li>)}</ol>
        </> : <div className="op-said">
          <p className="op-chosen"><span>Tú</span><Bi t={view.chosen.say} /></p>
          <Bi t={view.chosen.reply} as="p" className="op-reply" />
          <Bi t={view.chosen.end} as="p" className="op-end" />
          {view.note && <p className="op-wrote"><span>Escribes en el libro de la noche</span>{view.note.es}{a0 && <small lang="en">{view.note.en}</small>}</p>}
        </div>}
        {view.log && <section className="op-toast" aria-labelledby="op-log-h">
          <h3 id="op-log-h">El libro de la noche</h3>
          {view.log.length === 0 ? <p>El libro está en blanco: doña Pura lo cierra sin leer nada. Juega los otros círculos y vuelve; el libro se escribe con lo que haces esta noche.</p>
            : <ol>{view.log.map((n, i) => <li key={i}>{n.es}{a0 && <small lang="en">{n.en}</small>}</li>)}</ol>}
          {sentence && <p className="op-returned">{sentence.es}{a0 && <small lang="en" className="op-en">{sentence.en}</small>}</p>}
          <p className="op-toast-end">Siete de la mañana. Relevo.</p>
          <p className="op-toast-tip">Léelo en voz alta, despacio, como si fueras doña Pura. {logAll.length < 17 && `Faltan ${17 - logAll.length} líneas.`}</p>
        </section>}
        {view.ended && <section className="op-talk" aria-labelledby="op-talk-h">
          <h3 id="op-talk-h">Ahora, conversación</h3>
          <ol>{view.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}><Bi t={q} /></button></li>)}</ol>
          <div className="op-row">
            <button type="button" className="op-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="op-secondary" disabled={talkAt === view.talk.length - 1} onClick={() => setTalkAt(t => Math.min(view.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}
        {vocab && <details className="op-words" open={view.ended}>
          <summary>Palabras de la escena</summary>
          <ul>{view.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>}
      </div>
      <footer className="op-card-foot">
        {view.chosen && <button type="button" className="op-secondary" onClick={() => setState(s => undo(s))}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'op-primary' : 'op-secondary'} onClick={close}>{view.ended ? (view.id === FINAL ? 'Salir a ver el amanecer' : 'Seguir con el turno') : 'Volver a la oficina'} <kbd>Esc</kbd></button>
        <label className="op-toggle"><input type="checkbox" checked={vocab} onChange={e => setVocab(e.target.checked)} /> Vocabulario</label>
      </footer>
    </section>}
  </main>;
}
