'use client';

// La casa · the lesson around the 3D reality-show house: title screen with
// the level and the mode, the HUD (room, the clock of the night, progress,
// map, sound), the strip of captions the show has already written about you,
// the conversation card (situation, dialogue, three answers with their
// consequence and the caption they earn, five questions for the student) and
// the listening card shared with the other 3D worlds. Both modes live in the
// same world: switching never leaves it. Without WebGL the circles open from
// a list. The scene texts of each level load on demand (levels.mjs).
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { ANNOUNCEMENTS, BOUNDS, HOUSE, PERGOLA, POOL, SECTORS, SPOTS, WALLS, sceneById } from './layout.mjs';
import { LEVELS } from './levels-info.mjs';
import { loadLevel } from './levels.mjs';
import type { LevelContent, Text } from './levels.d.mts';
import { CAST, CONFESSIONS, SHOW, STORY, nightClock, nightPhase } from './story.mjs';
import { STORAGE_KEY, captionsFor, choose, closeScene, createState, doneFor, invitadoById, normaliseLevel, openScene, progress, resetLevel, restore, sceneView, serialise, setLevel, undo } from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { createAmbience, type Ambience } from './ambience';
import { setShoutMuted } from '../escucha-3d/shout';
import type { Pose } from './World3D';
import './reality.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="lc-loading">Encendiendo las cuarenta cámaras…</div> });
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

// A0 texts carry English under the Spanish; the other levels are Spanish only.
function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="lc-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => typeof t === 'string' ? t : t.es;

// The first scene of a circle you have not played yet (the red armchair holds three).
function firstOpen(ids: string[], done: string[]) {
  return ids.find(id => !done.includes(id)) ?? ids[ids.length - 1];
}

// The floor plan of the house: rooms, the pool, the pergola, the circles and you.
function MiniMap({ pose, done, onOpen }: { pose: Pose | null; done: string[]; onOpen: (id: string) => void }) {
  const b = BOUNDS;
  return <svg className="lc-map" viewBox={`${b.minX - 1} ${b.minZ - 1} ${b.maxX - b.minX + 2} ${b.maxZ - b.minZ + 2}`} role="img" aria-label="Plano de la casa">
    <rect x={b.minX} y={b.minZ} width={b.maxX - b.minX} height={b.maxZ - b.minZ} className="lc-map-garden" />
    <rect x={HOUSE.x0} y={HOUSE.z0} width={HOUSE.x1 - HOUSE.x0} height={HOUSE.z1 - HOUSE.z0} className="lc-map-house" />
    {SECTORS.filter(s => ['confesionario', 'pasillo', 'maquillaje'].includes(s.id)).map(s => <rect key={s.id} x={s.x0} y={s.z0} width={s.x1 - s.x0} height={s.z1 - s.z0} className={s.id === 'confesionario' ? 'lc-map-confession' : 'lc-map-crew'} />)}
    <rect x={POOL.x0} y={POOL.z0} width={POOL.x1 - POOL.x0} height={POOL.z1 - POOL.z0} rx={0.6} className="lc-map-pool" />
    <rect x={PERGOLA.x0} y={PERGOLA.z0} width={PERGOLA.x1 - PERGOLA.x0} height={PERGOLA.z1 - PERGOLA.z0} className="lc-map-pergola" />
    {WALLS.map((seg, i) => <line key={i} x1={seg[0]} y1={seg[1]} x2={seg[2]} y2={seg[3]} className={`lc-map-${seg[4]}`} />)}
    {SPOTS.map(s => {
      const all = s.ids.every(id => done.includes(id));
      return <circle key={s.key} cx={s.x} cy={s.z} r={1.3} className={all ? 'lc-map-done' : 'lc-map-spot'} onClick={() => onOpen(firstOpen(s.ids, done))}>
        <title>{sceneById(s.ids[0])?.sector}</title>
      </circle>;
    })}
    {pose && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI}) scale(.7)`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="lc-map-me" /></g>}
  </svg>;
}

// The strip of captions: what the show has put on screen about you so far.
function Captions({ state, open, onToggle }: { state: State; open: boolean; onToggle: () => void }) {
  const list = captionsFor(state);
  const a0 = state.level === 'A0';
  const last = list.slice(-2);
  return <button type="button" className={open ? 'lc-captions is-open' : 'lc-captions'} onClick={onToggle} aria-expanded={open} aria-label={`Rótulos del programa sobre ti: ${list.length}`}>
    <span className="lc-captions-title">Lo que el programa dice de ti</span><b className="lc-captions-count">{list.length}</b>
    {list.length === 0 && <em>Todavía nada. Para la audiencia eres «la Sorpresa».</em>}
    <ul>{(open ? list : last).map(c => <li key={c.id}>{c.caption.es}{a0 && <small lang="en">{c.caption.en}</small>}</li>)}</ul>
    {!open && list.length > 2 && <small className="lc-captions-more">y {list.length - 2} más…</small>}
  </button>;
}

export default function RealityGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [list, setList] = useState(false);
  const [map, setMap] = useState(false);
  const [capsOpen, setCapsOpen] = useState(false);
  const [near, setNear] = useState<{ kind: 'scene' | 'person'; id: string } | null>(null);
  const [personId, setPersonId] = useState<string | null>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [vocab, setVocab] = useState(true);
  const [talkAt, setTalkAt] = useState(0);
  const [sound, setSound] = useState(true);
  const [musicVolume, setMusicVolume] = useMusicVolume();
  const [announce, setAnnounce] = useState<string | null>(null);
  const [content, setContent] = useState<{ level: string; data: LevelContent } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  // Comprensión auditiva: the circles open a listening (undefined = closed, null = the list).
  const [mode, setMode] = useListeningMode('reality');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const t = window.setTimeout(() => { setState(initialState()); setHas3d(webglAvailable()); setReady(true); }, 0);
    return () => window.clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { window.localStorage.setItem(STORAGE_KEY, serialise(state)); } catch { /* private mode */ }
  }, [state, ready]);
  // The texts of the chosen level, loaded on demand.
  useEffect(() => {
    let live = true;
    loadLevel(state.level).then(data => { if (live) setContent({ level: state.level, data }); }).catch(() => { /* the card waits */ });
    return () => { live = false; };
  }, [state.level]);

  const levelContent = content?.level === state.level ? content.data : null;
  const view = useMemo(() => sceneView(state, levelContent), [state, levelContent]);
  const done = doneFor(state);
  const count = progress(state);
  const level = LEVELS.find(l => l.id === state.level)!;
  const [heard, markHeard] = useListeningDone('reality', state.level);
  const sector = pose ? SECTORS.find(s => s.id === pose.sector) : null;

  // Ambient sound: per room, ducked while a card or a listening is open.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(sector?.sound ?? null); }, [sector?.sound]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : state.scene || listenAt !== undefined ? 0.3 : 1); }, [state.scene, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  // La Voz speaks to the whole house about every 60 seconds.
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
    setList(false); setMap(false); setCapsOpen(false);
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
      if (capsOpen) setCapsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.scene, list, map, close, personId, capsOpen]);

  useEffect(() => { cardRef.current?.focus({ preventScroll: true }); }, [view?.id, view?.pick]);

  const onCardKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!view || view.ended) return;
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0) { event.preventDefault(); event.stopPropagation(); setState(s => choose(s, index)); }
  };

  const heardHere = mode === 'escucha' ? heard : done;
  const nearScene = near?.kind === 'scene' ? sceneById(near.id) : null;
  const nearWho = nearScene ? CAST[nearScene.cast[0]] : null;
  const busy = Boolean(state.scene) || listenAt !== undefined || Boolean(personId);
  const nearGuest = near?.kind === 'person' ? invitadoById(near.id) : null;
  const guest = personId ? invitadoById(personId) : null;
  // The night moves on with every circle of the mode you are playing.
  const clock = nightClock(heardHere);
  const phase = nightPhase(heardHere);
  const band = ['A0', 'A1', 'A2'].includes(state.level) ? 'basic' : ['B1', 'B2'].includes(state.level) ? 'mid' : 'high';
  const a0 = state.level === 'A0';
  const loading = Boolean(state.scene) && !view;

  return <main className="lc" data-level={state.level} data-mode={mode}>
    {ready && has3d && <World3D level={state.level} sceneId={state.scene?.id ?? (listenAt && sceneById(listenAt) ? listenAt : null)} mood={view?.mood ?? null}
      done={heardHere} paused={!entered || list || map || listenAt !== undefined} intro={!entered}
      onSpot={open} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)}
      personId={personId} onPerson={meet} night={phase} />}
    {ready && !has3d && <div className="lc-flat" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="lc-title" aria-labelledby="lc-title-h">
      <div className="lc-title-card">
        <p className="lc-kicker"><span className="lc-rec" aria-hidden="true" />{SHOW.name} · {SHOW.edition} · Día {SHOW.day}</p>
        <h1 id="lc-title-h">La casa</h1>
        <p className="lc-tagline">Gala en directo. Esta noche entras como la Sorpresa: cuarenta cámaras, dieciséis desconocidos y un sillón rojo donde La Voz te pregunta lo que nadie te pregunta fuera.</p>
        <p className="lc-lede">Una noche entera en la casa, de las diez a la última confesión del amanecer: el salón, la cocina, el dormitorio, el baño con un espejo que mira, la piscina, el cuarto de castigo y el pasillo de producción. Dieciocho círculos blancos con alguien que tiene un problema (una alianza, una nominación, un secreto a punto de salir, un romance inventado para la audiencia) y más gente con su propia historia. Cada respuesta se convierte en un rótulo del programa sobre ti.</p>
        <p className="lc-label">Elige el nivel</p>
        <div className="lc-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={setMode} />
        <p className="lc-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchas lo que pasa en la casa (confesiones, conspiraciones en voz baja, órdenes de producción), con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo lees la situación, eliges qué decir, ves la consecuencia y después respondes cinco preguntas sobre tu vida.'}</p>
        <button type="button" className="lc-enter" onClick={enter}>Entrar en la casa</button>
        <p className="lc-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. Con E también hablas con cualquier persona de la casa.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="lc-hud">
      <div className="lc-where"><span><i className="lc-rec" aria-hidden="true" />{SHOW.name} · en directo</span><b>{sector?.name ?? 'La casa'}</b></div>
      <div className="lc-night"><span className="lc-clock" aria-label={`Hora: ${clock}`}>{clock}</span></div>
      <div className="lc-hud-right">
        <span className="lc-progress">{mode === 'escucha' ? `${heard.length} de ${count.total} escuchas` : `${count.done} de ${count.total} escenas`} · {level.label}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="lc-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Plano</button>
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Escenas'}</button>
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => setEntered(false)}>Nivel</button>
      </div>
    </header>}
    {entered && mode !== 'escucha' && !busy && !list && !map && <Captions state={state} open={capsOpen} onToggle={() => setCapsOpen(o => !o)} />}
    {entered && !busy && !list && <aside className={map ? 'lc-mapbox is-big' : 'lc-mapbox'} onClick={() => !map && setMap(true)}>
      <MiniMap pose={pose} done={heardHere} onOpen={(id) => map && open(id)} />
      {map && <p>Toca un círculo para abrir su escena. <button type="button" className="lc-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar plano</button></p>}
    </aside>}

    {announce && <p className="lc-announce" role="status"><span className="lc-announce-mic" aria-hidden="true">●</span><span><small>Megafonía de la casa</small>{announce}</span></p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && <ListeningBadge game="reality" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="reality" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && !busy && !list && !map && near && <div className="lc-prompt" role="status">
      {nearScene ? <button type="button" onClick={() => open(nearScene.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearScene.sector}` : CONFESSIONS.includes(nearScene.id) ? 'Sentarte en el sillón rojo' : `Hablar con ${nearWho?.name ?? ''}`}</button>
        : nearGuest ? <button type="button" onClick={() => setPersonId(near.id)}><kbd>E</kbd>{`Hablar con ${nearGuest.name}`}</button> : null}
    </div>}
    {entered && mode !== 'escucha' && !busy && !near && !list && !map && done.length === 0 && <p className="lc-hint">Los círculos blancos son las escenas. Empieza en la entrada: Marga, la regidora, te espera con el pinganillo.</p>}

    {/* ------------------------------------------------ anyone in the house */}
    {guest && <section className="lc-panel lc-person" aria-labelledby="lc-person-h">
      <p className="lc-kicker">{guest.who.es}{a0 && <small lang="en"> · {guest.who.en}</small>}</p>
      <h2 id="lc-person-h">{guest.name}</h2>
      {band === 'basic' ? <>
        <p className="lc-person-say">«{guest.basic.es}»</p>
        {a0 && <p className="lc-person-en" lang="en">{guest.basic.en}</p>}
        <p className="lc-person-ask"><b>{guest.name}:</b> {guest.basicAsk.es}</p>
        {a0 && <p className="lc-person-en" lang="en">{guest.basicAsk.en}</p>}
      </> : <>
        <p className="lc-person-say">«{band === 'mid' ? guest.mid : guest.high}»</p>
        <p className="lc-person-ask"><b>{guest.name}:</b> {band === 'mid' ? guest.midAsk : guest.highAsk}</p>
      </>}
      <p className="lc-person-tip">Respóndele en voz alta.</p>
      <button type="button" className="lc-secondary" onClick={() => setPersonId(null)}>Seguir caminando <kbd>Esc</kbd></button>
    </section>}

    {/* ------------------------------------------------ scene list (teacher navigation) */}
    {(list || (ready && !has3d && entered && !state.scene && listenAt === undefined)) && <section className="lc-panel lc-list" aria-labelledby="lc-list-h">
      <h2 id="lc-list-h">Escenas · {level.label}</h2>
      <ol>{STORY.map(s => <li key={s.id}>
        <button type="button" className={heardHere.includes(s.id) ? 'is-done' : undefined} onClick={() => open(s.id)}>
          <span>{s.sector}</span><small>{CAST[s.cast[0]].full}</small>{heardHere.includes(s.id) && <i aria-label="hecha">✓</i>}
        </button>
      </li>)}</ol>
      <div className="lc-row">
        {has3d && <button type="button" className="lc-secondary" onClick={() => setList(false)}>Volver a la casa</button>}
        <button type="button" className="lc-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {loading && <p className="lc-panel lc-wait" role="status">Preparando la escena…</p>}

    {/* ------------------------------------------------ conversation card */}
    {view && <section className={CONFESSIONS.includes(view.id) ? 'lc-card is-confession' : 'lc-card'} aria-labelledby="lc-card-h" data-scene={view.id} data-ended={view.ended ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="lc-card-head">
        <p><span>{view.sector}</span><em>{view.name} · {view.role}</em></p>
        <button type="button" className="lc-close" onClick={close} aria-label="Volver a la casa">×</button>
      </header>
      <div className="lc-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="lc-card-h"><Bi t={view.title} /></h2>
        <Bi t={view.line} as="p" className="lc-line" />
        <ul className="lc-dialogue">{view.dialogue.map((d, i) => <li key={i}><b>{d.who}</b><Bi t={d.line} /></li>)}</ul>
        <Bi t={view.ask} as="p" className="lc-ask" />
        {!view.chosen ? <>
          <p className="lc-say">Elige una respuesta y dila en voz alta.</p>
          <ol className="lc-options">{view.options.map((o, i) => <li key={i}><button type="button" onClick={() => setState(s => choose(s, i))}><kbd>{LETTERS[i]}</kbd><Bi t={o.say} /></button></li>)}</ol>
        </> : <div className="lc-said">
          <p className="lc-chosen"><span>Tú</span><Bi t={view.chosen.say} /></p>
          <Bi t={view.chosen.reply} as="p" className="lc-reply" />
          <Bi t={view.chosen.end} as="p" className="lc-end" />
          {view.caption && <p className="lc-caption"><span>En pantalla</span>{view.caption.es}{a0 && <small lang="en">{view.caption.en}</small>}</p>}
        </div>}
        {view.edit && <section className="lc-edit" aria-labelledby="lc-edit-h">
          <h3 id="lc-edit-h">Así te editó el programa</h3>
          {view.edit.length === 0 ? <p>La Voz no tiene ningún rótulo tuyo: casi no saliste en pantalla. Juega los otros círculos y vuelve; la edición se hace con lo que haces.</p>
            : <ol>{view.edit.map((c, i) => <li key={i}>{c.es}{a0 && <small lang="en">{c.en}</small>}</li>)}</ol>}
          <p className="lc-edit-tip">Léelo en voz alta. ¿Eres tú? ¿Qué cambiarías? {view.edit.length < 17 && `Te faltan ${17 - view.edit.length} rótulos.`}</p>
        </section>}
        {view.ended && <section className="lc-talk" aria-labelledby="lc-talk-h">
          <h3 id="lc-talk-h">Ahora, conversación</h3>
          <ol>{view.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}><Bi t={q} /></button></li>)}</ol>
          <div className="lc-row">
            <button type="button" className="lc-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="lc-secondary" disabled={talkAt === view.talk.length - 1} onClick={() => setTalkAt(t => Math.min(view.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}
        {vocab && <details className="lc-words" open={view.ended}>
          <summary>Palabras de la escena</summary>
          <ul>{view.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>}
      </div>
      <footer className="lc-card-foot">
        {view.chosen && <button type="button" className="lc-secondary" onClick={() => setState(s => undo(s))}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'lc-primary' : 'lc-secondary'} onClick={close}>{view.ended ? 'Seguir en la casa' : 'Volver a la casa'} <kbd>Esc</kbd></button>
        <label className="lc-toggle"><input type="checkbox" checked={vocab} onChange={e => setVocab(e.target.checked)} /> Vocabulario</label>
      </footer>
    </section>}
  </main>;
}
