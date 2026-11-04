'use client';

// La boda · the lesson around the 3D estancia: title screen with the level
// and the mode, the HUD (place, the clock of the night, progress, map,
// sound), the card in your pocket with the notes for the toast, the
// conversation card (situation, dialogue, three answers with their
// consequence, five questions for the student) and the listening card shared
// with the other 3D worlds. Both modes live in the same world: switching never
// leaves it. Without WebGL the circles open from a list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { ANNOUNCEMENTS, BOUNDS, CHAPEL, HOUSE, JETTY, POND, SCENES, SECTORS, TENT, WALLS, sceneById } from './layout.mjs';
import { LEVELS } from './levels-info.mjs';
import type { Text } from './levels.d.mts';
import { CAST, STORY, WEDDING, nightClock, nightPhase, toastNotes } from './story.mjs';
import { STORAGE_KEY, choose, closeScene, createState, doneFor, invitadoById, normaliseLevel, notesFor, openScene, picksFor, progress, resetLevel, restore, sceneView, serialise, setLevel, undo } from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { createAmbience, type Ambience } from './ambience';
import { setShoutMuted } from '../escucha-3d/shout';
import type { Pose } from './World3D';
import './boda.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="lb-loading">Abriendo el portón de la estancia…</div> });
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

// A0 texts carry English under the Spanish, and so do the A1 scene words
// (the A0 rendering path); the other levels are Spanish only.
function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="lb-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => typeof t === 'string' ? t : t.es;

// The map of the estancia: buildings, the tent, the pond, the circles and you.
function MiniMap({ pose, done, onOpen }: { pose: Pose | null; done: string[]; onOpen: (id: string) => void }) {
  const b = BOUNDS;
  return <svg className="lb-map" viewBox={`${b.minX - 1} ${b.minZ - 1} ${b.maxX - b.minX + 2} ${b.maxZ - b.minZ + 2}`} role="img" aria-label="Mapa de la estancia">
    <rect x={b.minX} y={b.minZ} width={b.maxX - b.minX} height={b.maxZ - b.minZ} className="lb-map-field" />
    <ellipse cx={POND.x} cy={POND.z} rx={POND.rx} ry={POND.rz} className="lb-map-pond" />
    <rect x={JETTY.x0} y={JETTY.z0} width={JETTY.x1 - JETTY.x0} height={JETTY.z1 - JETTY.z0} className="lb-map-jetty" />
    <rect x={TENT.x0} y={TENT.z0} width={TENT.x1 - TENT.x0} height={TENT.z1 - TENT.z0} className="lb-map-tent" />
    <rect x={HOUSE.x0} y={HOUSE.z0} width={HOUSE.x1 - HOUSE.x0} height={HOUSE.z1 - HOUSE.z0} className="lb-map-house" />
    <rect x={CHAPEL.x0} y={CHAPEL.z0} width={CHAPEL.x1 - CHAPEL.x0} height={CHAPEL.z1 - CHAPEL.z0} className="lb-map-house" />
    <rect x={21} y={-45} width={16} height={10} className="lb-map-barn" />
    {(WALLS as (number | string)[][]).map((seg, i) => <line key={i} x1={Number(seg[0])} y1={Number(seg[1])} x2={Number(seg[2])} y2={Number(seg[3])} className={`lb-map-${String(seg[4]).replace('-glass', '')}`} />)}
    {SCENES.map(s => <circle key={s.id} cx={s.spot.x} cy={s.spot.z} r={1.6} className={done.includes(s.id) ? 'lb-map-done' : 'lb-map-spot'} onClick={() => onOpen(s.id)}><title>{s.sector}</title></circle>)}
    {pose && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI}) scale(.8)`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="lb-map-me" /></g>}
  </svg>;
}

// The card in your pocket: the notes for the toast, written by your answers.
function Notes({ state, open, onToggle }: { state: State; open: boolean; onToggle: () => void }) {
  const notes = notesFor(state);
  const a0 = state.level === 'A0';
  const last = notes.slice(-2);
  return <button type="button" className={open ? 'lb-notes is-open' : 'lb-notes'} onClick={onToggle} aria-expanded={open} aria-label={`Notas para el brindis: ${notes.length} líneas`}>
    <span className="lb-notes-title">Notas para el brindis · 00:00</span>
    {notes.length === 0 && <em>Todavía no tienes nada que decir. Habla con la gente.</em>}
    <ul>{(open ? notes : last).map(n => <li key={n.id}>{n.note.es}{a0 && <small lang="en">{n.note.en}</small>}</li>)}</ul>
    {!open && notes.length > 2 && <small className="lb-notes-more">y {notes.length - 2} más…</small>}
  </button>;
}

export default function BodaGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [list, setList] = useState(false);
  const [map, setMap] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [near, setNear] = useState<{ kind: 'scene' | 'person'; id: string } | null>(null);
  const [personId, setPersonId] = useState<string | null>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [vocab, setVocab] = useState(true);
  const [talkAt, setTalkAt] = useState(0);
  const [sound, setSound] = useState(true);
  const [musicVolume, setMusicVolume] = useMusicVolume();
  const [announce, setAnnounce] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  // Comprensión auditiva: the circles open a listening (undefined = closed, null = the list).
  const [mode, setMode] = useListeningMode('boda');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const t = window.setTimeout(() => { setState(initialState()); setHas3d(webglAvailable()); setReady(true); }, 0);
    return () => window.clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { window.localStorage.setItem(STORAGE_KEY, serialise(state)); } catch { /* private mode */ }
  }, [state, ready]);

  const view = useMemo(() => sceneView(state), [state]);
  const done = doneFor(state);
  const count = progress(state);
  const level = LEVELS.find(l => l.id === state.level)!;
  const [heard, markHeard] = useListeningDone('boda', state.level);
  const sector = pose ? SECTORS.find(s => s.id === pose.sector) : null;

  // Ambient sound: per sector, ducked while a card or a listening is open.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(sector?.sound ?? null); }, [sector?.sound]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : state.scene || listenAt !== undefined ? 0.3 : 1); }, [state.scene, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  // The family's WhatsApp group: a new message about every 60 seconds.
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
    setList(false); setMap(false); setNotesOpen(false);
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
      if (notesOpen) setNotesOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.scene, list, map, close, personId, notesOpen]);

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
  const toastAll = toastNotes(done, picksFor(state));

  return <main className="lb" data-level={state.level} data-mode={mode}>
    {ready && has3d && <World3D sceneId={state.scene?.id ?? (listenAt && sceneById(listenAt) ? listenAt : null)} mood={view?.mood ?? null}
      done={heardHere} paused={!entered || list || map || listenAt !== undefined} intro={!entered}
      onSpot={open} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)}
      personId={personId} onPerson={meet} night={phase} />}
    {ready && !has3d && <div className="lb-flat" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="lb-title" aria-labelledby="lb-title-h">
      <div className="lb-title-card">
        <p className="lb-kicker">{WEDDING.estancia} · {WEDDING.place}</p>
        <h1 id="lb-title-h">La boda</h1>
        <p className="lb-tagline">Valentina y Joaquín se casan hoy. El padrino desapareció con los anillos y el discurso. Nadie te conoce, y a medianoche el brindis lo das tú.</p>
        <p className="lb-lede">Una estancia entera de la tarde al amanecer: la capilla, la casa, la parrilla, la carpa con la orquesta, el establo y la laguna. Dieciocho círculos blancos con alguien que tiene un problema (una ex de rojo, una abuela que no aprueba, una torta con el nombre equivocado, un caballo con hambre) y diecisiete invitados más. Cada respuesta escribe una línea de tu brindis.</p>
        <p className="lb-label">Elige el nivel</p>
        <div className="lb-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={setMode} />
        <p className="lb-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchas lo que pasa en la boda (discursos, chismes de las mesas, audios), con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo lees la situación, eliges qué decir, ves la consecuencia y después respondes cinco preguntas sobre tu vida.'}</p>
        <button type="button" className="lb-enter" onClick={enter}>Entrar a la boda</button>
        <p className="lb-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. Con E también hablas con cualquier invitado.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="lb-hud">
      <div className="lb-where"><span>{WEDDING.estancia}</span><b>{sector?.name ?? 'El parque'}</b></div>
      <div className="lb-night"><span className="lb-clock" aria-label={`Hora: ${clock}`}>{clock}</span></div>
      <div className="lb-hud-right">
        <span className="lb-progress">{mode === 'escucha' ? `${heard.length} de ${count.total} escuchas` : `${count.done} de ${count.total} escenas`} · {level.label}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="lb-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Mapa</button>
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Escenas'}</button>
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => setEntered(false)}>Nivel</button>
      </div>
    </header>}
    {entered && mode !== 'escucha' && !busy && !list && !map && <Notes state={state} open={notesOpen} onToggle={() => setNotesOpen(o => !o)} />}
    {entered && !busy && !list && <aside className={map ? 'lb-mapbox is-big' : 'lb-mapbox'} onClick={() => !map && setMap(true)}>
      <MiniMap pose={pose} done={heardHere} onOpen={(id) => map && open(id)} />
      {map && <p>Toca un círculo para abrir su escena. <button type="button" className="lb-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar mapa</button></p>}
    </aside>}

    {announce && <p className="lb-announce" role="status"><span aria-hidden="true">💬</span><span><small>Grupo «Boda Vale y Joaco»</small>{announce}</span></p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && <ListeningBadge game="boda" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="boda" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && !busy && !list && !map && near && <div className="lb-prompt" role="status">
      {nearScene ? <button type="button" onClick={() => open(nearScene.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearScene.sector}` : `Hablar con ${nearWho?.name ?? ''}`}</button>
        : nearGuest ? <button type="button" onClick={() => setPersonId(near.id)}><kbd>E</kbd>{`Hablar con ${nearGuest.name}`}</button> : null}
    </div>}
    {entered && mode !== 'escucha' && !busy && !near && !list && !map && done.length === 0 && <p className="lb-hint">Los círculos blancos son las escenas. Empieza por el portón: Don Anselmo tiene la lista de invitados.</p>}

    {/* ------------------------------------------------ any guest */}
    {guest && <section className="lb-panel lb-person" aria-labelledby="lb-person-h">
      <p className="lb-kicker">{guest.who.es}{state.level === 'A0' && <small lang="en"> · {guest.who.en}</small>}</p>
      <h2 id="lb-person-h">{guest.name}</h2>
      {band === 'basic' ? <>
        <p className="lb-person-say">«{guest.basic.es}»</p>
        {state.level === 'A0' && <p className="lb-person-en" lang="en">{guest.basic.en}</p>}
        <p className="lb-person-ask"><b>{guest.name}:</b> {guest.basicAsk.es}</p>
        {state.level === 'A0' && <p className="lb-person-en" lang="en">{guest.basicAsk.en}</p>}
      </> : <>
        <p className="lb-person-say">«{band === 'mid' ? guest.mid : guest.high}»</p>
        <p className="lb-person-ask"><b>{guest.name}:</b> {band === 'mid' ? guest.midAsk : guest.highAsk}</p>
      </>}
      <p className="lb-person-tip">Respóndele en voz alta.</p>
      <button type="button" className="lb-secondary" onClick={() => setPersonId(null)}>Seguir caminando <kbd>Esc</kbd></button>
    </section>}

    {/* ------------------------------------------------ scene list (teacher navigation) */}
    {(list || (ready && !has3d && entered && !state.scene && listenAt === undefined)) && <section className="lb-panel lb-list" aria-labelledby="lb-list-h">
      <h2 id="lb-list-h">Escenas · {level.label}</h2>
      <ol>{STORY.map(s => <li key={s.id}>
        <button type="button" className={heardHere.includes(s.id) ? 'is-done' : undefined} onClick={() => open(s.id)}>
          <span>{s.sector}</span><small>{CAST[s.cast[0]].full}</small>{heardHere.includes(s.id) && <i aria-label="hecha">✓</i>}
        </button>
      </li>)}</ol>
      <div className="lb-row">
        {has3d && <button type="button" className="lb-secondary" onClick={() => setList(false)}>Volver a la boda</button>}
        <button type="button" className="lb-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ conversation card */}
    {view && <section className="lb-card" aria-labelledby="lb-card-h" data-scene={view.id} data-ended={view.ended ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="lb-card-head">
        <p><span>{view.sector}</span><em>{view.name} · {view.role}</em></p>
        <button type="button" className="lb-close" onClick={close} aria-label="Volver a la boda">×</button>
      </header>
      <div className="lb-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="lb-card-h"><Bi t={view.title} /></h2>
        <Bi t={view.line} as="p" className="lb-line" />
        <ul className="lb-dialogue">{view.dialogue.map((d, i) => <li key={i}><b>{d.who}</b><Bi t={d.line} /></li>)}</ul>
        <Bi t={view.ask} as="p" className="lb-ask" />
        {!view.chosen ? <>
          <p className="lb-say">Elige una respuesta y dila en voz alta.</p>
          <ol className="lb-options">{view.options.map((o, i) => <li key={i}><button type="button" onClick={() => setState(s => choose(s, i))}><kbd>{LETTERS[i]}</kbd><Bi t={o.say} /></button></li>)}</ol>
        </> : <div className="lb-said">
          <p className="lb-chosen"><span>Tú</span><Bi t={view.chosen.say} /></p>
          <Bi t={view.chosen.reply} as="p" className="lb-reply" />
          <Bi t={view.chosen.end} as="p" className="lb-end" />
          {view.note && <p className="lb-wrote"><span>Anotas para el brindis</span>{view.note.es}{state.level === 'A0' && <small lang="en">{view.note.en}</small>}</p>}
        </div>}
        {view.toast && <section className="lb-toast" aria-labelledby="lb-toast-h">
          <h3 id="lb-toast-h">Tu brindis</h3>
          {view.toast.length === 0 ? <p>No tienes notas: hablas desde el corazón. Juega los otros círculos y vuelve; el brindis se escribe con lo que haces.</p>
            : <ol>{view.toast.map((n, i) => <li key={i}>{n.es}{state.level === 'A0' && <small lang="en">{n.en}</small>}</li>)}</ol>}
          <p className="lb-toast-end">¡Por los novios! <span aria-hidden="true">🥂</span></p>
          <p className="lb-toast-tip">Léelo en voz alta, de pie, como si tuvieras el micrófono. {toastAll.length < 17 && `Te faltan ${17 - toastAll.length} notas.`}</p>
        </section>}
        {view.ended && <section className="lb-talk" aria-labelledby="lb-talk-h">
          <h3 id="lb-talk-h">Ahora, conversación</h3>
          <ol>{view.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}><Bi t={q} /></button></li>)}</ol>
          <div className="lb-row">
            <button type="button" className="lb-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="lb-secondary" disabled={talkAt === view.talk.length - 1} onClick={() => setTalkAt(t => Math.min(view.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}
        {vocab && <details className="lb-words" open={view.ended}>
          <summary>Palabras de la escena</summary>
          <ul>{view.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>}
      </div>
      <footer className="lb-card-foot">
        {view.chosen && <button type="button" className="lb-secondary" onClick={() => setState(s => undo(s))}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'lb-primary' : 'lb-secondary'} onClick={close}>{view.ended ? 'Seguir en la fiesta' : 'Volver a la boda'} <kbd>Esc</kbd></button>
        <label className="lb-toggle"><input type="checkbox" checked={vocab} onChange={e => setVocab(e.target.checked)} /> Vocabulario</label>
      </footer>
    </section>}
  </main>;
}
