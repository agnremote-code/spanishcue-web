'use client';

// Hospital San Casi Vivo · the lesson around the 3D hospital: title screen
// with the level and the mode, the HUD (floor, sector, progress, map, sound),
// the elevator and stairs panel, the conversation card (situation, dialogue,
// three answers with their consequence, five questions for the student) and
// the listening card shared with the other 3D worlds. Both modes live in the
// same world: switching never leaves it. Without WebGL the circles open from
// a list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { ANNOUNCEMENTS, FLOORS, SCENES, SECTORS, WALLS, ELEVATOR, STAIRS, sceneById } from './layout.mjs';
import { LEVELS } from './levels.mjs';
import type { Text } from './levels.d.mts';
import { CAST } from './story.mjs';
import { STORAGE_KEY, choose, closeScene, createState, doneFor, normaliseLevel, openScene, progress, resetLevel, restore, sceneView, serialise, setFloor, setLevel, undo } from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { createAmbience, type Ambience } from './ambience';
import { PATIENTS } from './patients.mjs';
import { setShoutMuted } from '../escucha-3d/shout';
import type { Pose } from './World3D';
import './hospital.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="hs-loading">Abriendo las puertas de urgencias…</div> });
const LETTERS = ['A', 'B', 'C'];
type State = ReturnType<typeof createState>;
const FLOOR_LABEL: Record<number, string> = { 0: 'S', 1: 'PB', 2: '1', 3: '2' };

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
  return { ...(asked ? setLevel(state, asked) : state), floor: 1, scene: null };
}

// A0 texts carry English under the Spanish, and so do the A1 scene words
// (the A0 rendering path); the other levels are Spanish only.
function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="hs-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => typeof t === 'string' ? t : t.es;

// The map: walls of the floor, the sectors, the circles and you.
function MiniMap({ floor, pose, done, onOpen }: { floor: number; pose: Pose | null; done: string[]; onOpen: (id: string) => void }) {
  const f = FLOORS.find(x => x.id === floor)!;
  const b = { minX: -40, maxX: floor === 1 ? 58 : 40, minZ: -40, maxZ: floor === 1 ? 46 : 32 };
  const w = b.maxX - b.minX, h = b.maxZ - b.minZ;
  return <svg className="hs-map" viewBox={`${b.minX - 1} ${b.minZ - 1} ${w + 2} ${h + 2}`} role="img" aria-label={`Mapa: ${f.name}`}>
    {SECTORS.filter(s => s.floor === floor).map(s => <rect key={s.id} x={s.x0} y={s.z0} width={s.x1 - s.x0} height={s.z1 - s.z0} className={`hs-map-sector hs-map-${s.sound}`}><title>{s.name}</title></rect>)}
    {(WALLS[floor] ?? []).map((seg, i) => <line key={i} x1={Number(seg[0])} y1={Number(seg[1])} x2={Number(seg[2])} y2={Number(seg[3])} className={seg[4] === 'glass' ? 'hs-map-glass' : 'hs-map-wall'} />)}
    <rect x={ELEVATOR.x - 1.4} y={ELEVATOR.wallZ} width={2.8} height={2.2} className="hs-map-lift" />
    <rect x={STAIRS.x - 1.2} y={STAIRS.z - 2} width={2.4} height={4} className="hs-map-stairs" />
    {SCENES.filter(s => s.floor === floor).map(s => <circle key={s.id} cx={s.spot.x} cy={s.spot.z} r={1.6} className={done.includes(s.id) ? 'hs-map-done' : 'hs-map-spot'} onClick={() => onOpen(s.id)}><title>{s.sector}</title></circle>)}
    {pose && pose.floor === floor && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI})`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="hs-map-me" /></g>}
  </svg>;
}

export default function HospitalGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [panel, setPanel] = useState<'lift' | 'stairs' | null>(null);
  const [via, setVia] = useState<'lift' | 'stairs'>('lift');
  const [list, setList] = useState(false);
  const [map, setMap] = useState(false);
  const [near, setNear] = useState<{ kind: 'scene' | 'lift' | 'stairs' | 'person'; id: string } | null>(null);
  const [personId, setPersonId] = useState<string | null>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [riding, setRiding] = useState<number | null>(null);
  const [vocab, setVocab] = useState(true);
  const [talkAt, setTalkAt] = useState(0);
  const [sound, setSound] = useState(true);
  const [musicVolume, setMusicVolume] = useMusicVolume();
  const [announce, setAnnounce] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  // Comprensión auditiva: the circles open a listening (undefined = closed, null = the list).
  const [mode, setMode] = useListeningMode('hospital');
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
  const [heard, markHeard] = useListeningDone('hospital', state.level);
  const floorInfo = FLOORS.find(f => f.id === state.floor)!;
  const sector = pose ? SECTORS.find(s => s.floor === pose.floor && s.id === pose.sector) : null;

  // Ambient sound: per sector, ducked while a card or a listening is open.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(sector?.sound ?? null); }, [sector?.sound]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : state.scene || listenAt !== undefined ? 0.3 : 1); }, [state.scene, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  // The hospital speakers: an announcement about every 70 seconds.
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
    }, 70000);
    return () => { window.clearInterval(timer); window.clearTimeout(hide); };
  }, [entered, state.scene, listenAt]);

  const enter = () => { setEntered(true); ambience.current?.start(); };
  const open = useCallback((id: string) => {
    setPanel(null); setList(false); setMap(false);
    if (mode === 'escucha') { setListenAt(id); setState(s => setFloor(s, sceneById(id)?.floor ?? s.floor)); return; }
    setTalkAt(0);
    setState(s => openScene({ ...s, floor: sceneById(id)?.floor ?? s.floor }, id));
  }, [mode]);
  const close = useCallback(() => setState(s => closeScene(s)), []);
  const goFloor = (floor: number) => {
    const how = panel ?? 'lift';
    setPanel(null);
    if (floor === state.floor) return;
    setVia(how);
    setRiding(floor);
    setState(s => setFloor(s, floor));
    window.setTimeout(() => setRiding(null), 2600);
  };
  const switchMode = (next: typeof mode) => { setMode(next); setListenAt(undefined); if (state.scene) close(); };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (state.scene) { close(); return; }
      if (personId) { setPersonId(null); return; }
      if (panel) setPanel(null);
      if (list) setList(false);
      if (map) setMap(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.scene, panel, list, map, close, personId]);

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
  const nearPatient = near?.kind === 'person' ? PATIENTS[near.id] : null;
  const patient = personId ? PATIENTS[personId] : null;
  const band = ['A0', 'A1', 'A2'].includes(state.level) ? 'basic' : ['B1', 'B2'].includes(state.level) ? 'mid' : 'high';
  const heardHere = mode === 'escucha' ? heard : done;

  return <main className="hs" data-level={state.level} data-floor={state.floor} data-mode={mode}>
    {ready && has3d && <World3D floor={state.floor} via={via} sceneId={state.scene?.id ?? (listenAt && sceneById(listenAt) ? listenAt : null)} mood={view?.mood ?? null}
      done={heardHere} paused={!entered || Boolean(panel) || list || map || listenAt !== undefined} intro={!entered}
      onSpot={open} onLift={(how) => setPanel(how)} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)}
      personId={personId} onPerson={setPersonId} onCry={(volume) => ambience.current?.scream(volume)} />}
    {ready && !has3d && <div className="hs-flat" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="hs-title" aria-labelledby="hs-title-h">
      <div className="hs-title-card">
        <p className="hs-kicker">Hospital público · Guardia 24 horas</p>
        <h1 id="hs-title-h">Hospital San Casi Vivo</h1>
        <p className="hs-tagline">Entrás por una consulta. Salís con una historia.</p>
        <p className="hs-lede">Cuatro plantas, veinte sectores y veintiún círculos blancos. Cada uno es una escena distinta con gente que espera, sangra, cobra, opera o se queja. Tú decides qué decir y después conversas.</p>
        <p className="hs-label">Elige el nivel</p>
        <div className="hs-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={setMode} />
        <p className="hs-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchas una escena nueva de la misma historia, con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo lees la situación, eliges qué decir, ves la consecuencia y después respondes cinco preguntas sobre tu vida.'}</p>
        <button type="button" className="hs-enter" onClick={enter}>Entrar al hospital</button>
        <p className="hs-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. El ascensor y las escaleras llevan a las otras plantas.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="hs-hud">
      <div className="hs-where"><span>{FLOOR_LABEL[floorInfo.id]} · {floorInfo.name}</span><b>{sector?.name ?? floorInfo.sub}</b></div>
      <div className="hs-hud-right">
        <span className="hs-progress">{mode === 'escucha' ? `${heard.length} de ${count.total} escuchas` : `${count.done} de ${count.total} escenas`} · {level.label}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="hs-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Mapa</button>
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Escenas'}</button>
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => setEntered(false)}>Nivel</button>
      </div>
    </header>}
    {entered && !busy && !panel && !list && <aside className={map ? 'hs-mapbox is-big' : 'hs-mapbox'} onClick={() => !map && setMap(true)}>
      <MiniMap floor={state.floor} pose={pose} done={heardHere} onOpen={(id) => map && open(id)} />
      {map && <p>Toca un círculo para abrir su escena. <button type="button" className="hs-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar mapa</button></p>}
    </aside>}

    {announce && <p className="hs-announce" role="status"><span aria-hidden="true">📢</span>{announce}</p>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && !panel && <ListeningBadge game="hospital" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="hospital" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && !busy && !panel && !list && !map && near && <div className="hs-prompt" role="status">
      {nearScene ? <button type="button" onClick={() => open(nearScene.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearScene.sector}` : `Hablar con ${nearWho?.name ?? ''}`}</button>
        : nearPatient ? <button type="button" onClick={() => setPersonId(near.id)}><kbd>E</kbd>{`Hablar con ${nearPatient.name}`}</button>
        : <button type="button" onClick={() => setPanel(near.kind === 'stairs' ? 'stairs' : 'lift')}><kbd>E</kbd>{near.kind === 'stairs' ? 'Subir o bajar por la escalera' : 'Llamar al ascensor'}</button>}
    </div>}
    {entered && mode !== 'escucha' && !busy && !near && !panel && !list && !map && <p className="hs-hint">Los círculos blancos son las escenas. El ascensor y las escaleras están al fondo del pasillo central.</p>}

    {/* ------------------------------------------------ anyone in the hospital */}
    {patient && <section className="hs-panel hs-person" aria-labelledby="hs-person-h">
      <p className="hs-kicker">{patient.who.es}{state.level === 'A0' && <small lang="en"> · {patient.who.en}</small>}</p>
      <h2 id="hs-person-h">{patient.name}</h2>
      {band === 'basic' ? <>
        <p className="hs-person-say">«{patient.basic.es}»</p>
        {state.level === 'A0' && <p className="hs-person-en" lang="en">{patient.basic.en}</p>}
        <p className="hs-person-ask"><b>{patient.name}:</b> {patient.basicAsk.es}</p>
        {state.level === 'A0' && <p className="hs-person-en" lang="en">{patient.basicAsk.en}</p>}
      </> : <>
        <p className="hs-person-say">«{band === 'mid' ? patient.mid : patient.high}»</p>
        <p className="hs-person-ask"><b>{patient.name}:</b> {band === 'mid' ? patient.midAsk : patient.highAsk}</p>
      </>}
      <p className="hs-person-tip">Respóndele en voz alta.</p>
      <button type="button" className="hs-secondary" onClick={() => setPersonId(null)}>Seguir caminando <kbd>Esc</kbd></button>
    </section>}

    {/* ------------------------------------------------ elevator and stairs */}
    {panel && <section className="hs-panel hs-lift" aria-labelledby="hs-lift-h">
      <h2 id="hs-lift-h">{panel === 'stairs' ? 'Escaleras' : 'Ascensor'}</h2>
      <div className="hs-lift-buttons">
        {[...FLOORS].reverse().map(f => <button key={f.id} type="button" className={f.id === state.floor ? 'is-here' : undefined} onClick={() => goFloor(f.id)}>
          <span className="hs-lift-n">{FLOOR_LABEL[f.id]}</span><span><b>{f.name}</b><small>{f.sub}</small></span>
        </button>)}
      </div>
      <button type="button" className="hs-secondary" onClick={() => setPanel(null)}>Cerrar <kbd>Esc</kbd></button>
    </section>}
    {riding !== null && <div className="hs-ride" aria-live="polite"><span>{FLOOR_LABEL[riding]}</span><b>{FLOORS.find(f => f.id === riding)?.name}</b></div>}

    {/* ------------------------------------------------ scene list (teacher navigation) */}
    {(list || (ready && !has3d && entered && !state.scene && listenAt === undefined)) && <section className="hs-panel hs-list" aria-labelledby="hs-list-h">
      <h2 id="hs-list-h">Escenas · {level.label}</h2>
      {[1, 2, 3, 0].map(fid => FLOORS.find(f => f.id === fid)!).map(f => <div key={f.id} className="hs-list-floor">
        <h3>{FLOOR_LABEL[f.id]} · {f.name}</h3>
        <ol>{SCENES.filter(s => s.floor === f.id).map(s => <li key={s.id}>
          <button type="button" className={heardHere.includes(s.id) ? 'is-done' : undefined} onClick={() => open(s.id)}>
            <span>{s.sector}</span><small>{CAST[s.cast[0]].full}</small>{heardHere.includes(s.id) && <i aria-label="hecha">✓</i>}
          </button>
        </li>)}</ol>
      </div>)}
      <div className="hs-row">
        {has3d && <button type="button" className="hs-secondary" onClick={() => setList(false)}>Volver al hospital</button>}
        <button type="button" className="hs-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ conversation card */}
    {view && <section className="hs-card" aria-labelledby="hs-card-h" data-scene={view.id} data-ended={view.ended ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="hs-card-head">
        <p><span>{FLOOR_LABEL[view.floor]} · {view.sector}</span><em>{view.name} · {view.role}</em></p>
        <button type="button" className="hs-close" onClick={close} aria-label="Volver al hospital">×</button>
      </header>
      <div className="hs-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="hs-card-h"><Bi t={view.title} /></h2>
        <Bi t={view.line} as="p" className="hs-line" />
        <ul className="hs-dialogue">{view.dialogue.map((d, i) => <li key={i}><b>{d.who}</b><Bi t={d.line} /></li>)}</ul>
        <Bi t={view.ask} as="p" className="hs-ask" />
        {!view.chosen ? <>
          <p className="hs-say">Elige una respuesta y dila en voz alta.</p>
          <ol className="hs-options">{view.options.map((o, i) => <li key={i}><button type="button" onClick={() => setState(s => choose(s, i))}><kbd>{LETTERS[i]}</kbd><Bi t={o.say} /></button></li>)}</ol>
        </> : <div className="hs-said">
          <p className="hs-chosen"><span>Tú</span><Bi t={view.chosen.say} /></p>
          <Bi t={view.chosen.reply} as="p" className="hs-reply" />
          <Bi t={view.chosen.end} as="p" className="hs-end" />
        </div>}
        {view.ended && <section className="hs-talk" aria-labelledby="hs-talk-h">
          <h3 id="hs-talk-h">Ahora, conversación</h3>
          <ol>{view.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}><Bi t={q} /></button></li>)}</ol>
          <div className="hs-row">
            <button type="button" className="hs-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="hs-secondary" disabled={talkAt === view.talk.length - 1} onClick={() => setTalkAt(t => Math.min(view.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}
        {vocab && <details className="hs-words" open={view.ended}>
          <summary>Palabras de la escena</summary>
          <ul>{view.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>}
      </div>
      <footer className="hs-card-foot">
        {view.chosen && <button type="button" className="hs-secondary" onClick={() => setState(s => undo(s))}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'hs-primary' : 'hs-secondary'} onClick={close}>{view.ended ? 'Seguir explorando' : 'Volver al hospital'} <kbd>Esc</kbd></button>
        <label className="hs-toggle"><input type="checkbox" checked={vocab} onChange={e => setVocab(e.target.checked)} /> Vocabulario</label>
      </footer>
    </section>}
  </main>;
}
