'use client';

// El tren de las 23:40 · the lesson around the 3D train: title screen with
// the level and the mode, the HUD (car, sector, the clock of the night, the
// notebook of cabin 8, progress, map, sound), the panel of the train (every
// car and both stops), the conversation card (situation, dialogue, three
// answers with their consequence, five questions for the student) and the
// listening card shared with the other 3D worlds. Both modes live in the same
// world: switching never leaves it. Without WebGL the circles open from a list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { ANNOUNCEMENTS, FLOORS, FLOOR_LABEL, PORTALS, SCENES, SECTORS, TRAIN_ORDER, WALLS, floorById, isCar, sceneById } from './layout.mjs';
import { LEVELS } from './levels-info.mjs';
import type { Text } from './levels.d.mts';
import { CAST, TRAIN, notebook, nightClock } from './story.mjs';
import { STORAGE_KEY, choose, closeScene, createState, doneFor, normaliseLevel, notebookEntries, openScene, pasajeroById, progress, resetLevel, restore, sceneView, serialise, setFloor, setLevel, undo } from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { createAmbience, type Ambience } from './ambience';
import { setShoutMuted } from '../escucha-3d/shout';
import type { Pose } from './World3D';
import './tren.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="et-loading">El Nocturno entra en el andén…</div> });
const LETTERS = ['A', 'B', 'C'];
type State = ReturnType<typeof createState>;
// The order of the panel of the train: the platform at Mendoza, the train from the front, the two stops.
const PANEL_ORDER = [0, ...TRAIN_ORDER, 8, 9];

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
  return { ...(asked ? setLevel(state, asked) : state), floor: 0, scene: null };
}

// A0 texts carry English under the Spanish, and so do the A1 scene words;
// the other levels are Spanish only.
function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="et-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => typeof t === 'string' ? t : t.es;

// The train in one line: where you are and which places still have circles.
function TrainStrip({ floor, done, onPick }: { floor: number; done: string[]; onPick?: (id: number) => void }) {
  return <ol className="et-strip" aria-label="El tren">
    {[...TRAIN_ORDER].reverse().map(id => {
      const left = SCENES.filter(s => s.floor === id && !done.includes(s.id)).length;
      return <li key={id} className={`${id === floor ? 'is-here' : ''} ${id === 1 ? 'is-loco' : ''}`}>
        <button type="button" onClick={() => onPick?.(id)} disabled={!onPick} title={floorById(id).name}>
          <span>{FLOOR_LABEL[id]}</span>{left > 0 && <i aria-label={`${left} por hacer`}>{left}</i>}
        </button>
      </li>;
    })}
  </ol>;
}

// The map: the plan of the car or the platform, the circles and you.
function MiniMap({ floor, pose, done, onOpen }: { floor: number; pose: Pose | null; done: string[]; onOpen: (id: string) => void }) {
  const f = floorById(floor);
  const b = f.bounds;
  const w = b.maxX - b.minX, h = b.maxZ - b.minZ;
  return <svg className={isCar(floor) ? 'et-map is-car' : 'et-map'} viewBox={`${b.minX - 0.6} ${b.minZ - 0.6} ${w + 1.2} ${h + 1.2}`} role="img" aria-label={`Mapa: ${f.name}`}>
    {SECTORS.filter(s => s.floor === floor).map((s, i) => <rect key={`${s.id}-${i}`} x={s.x0} y={s.z0} width={s.x1 - s.x0} height={s.z1 - s.z0} className={`et-map-sector et-map-${s.sound}`}><title>{s.name}</title></rect>)}
    {(WALLS[floor] ?? []).map((seg, i) => <line key={i} x1={Number(seg[0])} y1={Number(seg[1])} x2={Number(seg[2])} y2={Number(seg[3])} className={seg[4] === 'glass' || seg[4] === 'dome' ? 'et-map-glass' : seg[4] === 'low' ? 'et-map-low' : 'et-map-wall'} />)}
    {(PORTALS[floor] ?? []).map(p => <rect key={p.id} x={p.x - 0.35} y={p.z - 0.45} width={0.7} height={0.9} className="et-map-door" />)}
    {SCENES.filter(s => s.floor === floor).map(s => <circle key={s.id} cx={s.spot.x} cy={s.spot.z} r={0.9} className={done.includes(s.id) ? 'et-map-done' : 'et-map-spot'} onClick={() => onOpen(s.id)}><title>{s.sector}</title></circle>)}
    {pose && pose.floor === floor && <g transform={`translate(${pose.x} ${pose.z}) rotate(${-pose.heading * 180 / Math.PI}) scale(.36)`}><path d="M0 2.6 L1.8 -1.6 L0 -0.6 L-1.8 -1.6 Z" className="et-map-me" /></g>}
  </svg>;
}

export default function TrenGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [panel, setPanel] = useState(false);
  const [list, setList] = useState(false);
  const [map, setMap] = useState(false);
  const [book, setBook] = useState(false);
  const [near, setNear] = useState<{ kind: 'scene' | 'portal' | 'person'; id: string } | null>(null);
  const [personId, setPersonId] = useState<string | null>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [riding, setRiding] = useState<number | null>(null);
  const [vocab, setVocab] = useState(true);
  const [talkAt, setTalkAt] = useState(0);
  const [sound, setSound] = useState(true);
  const [musicVolume, setMusicVolume] = useMusicVolume();
  const [announce, setAnnounce] = useState<string | null>(null);
  const [fresh, setFresh] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const ambience = useRef<Ambience | null>(null);
  // Comprensión auditiva: the circles open a listening (undefined = closed, null = the list).
  const [mode, setMode] = useListeningMode('tren');
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
  const [heard, markHeard] = useListeningDone('tren', state.level);
  const floorInfo = floorById(state.floor);
  const sector = pose ? SECTORS.find(s => s.floor === pose.floor && s.x0 <= pose.x && pose.x <= s.x1 && s.z0 <= pose.z && pose.z <= s.z1 && s.id === pose.sector) : null;

  // Ambient sound: per sector, ducked while a card or a listening is open.
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(sector?.sound ?? (isCar(state.floor) ? 'sleeper' : 'station')); }, [sector?.sound, state.floor]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : state.scene || listenAt !== undefined ? 0.3 : 1); }, [state.scene, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  // The loudspeakers of the train: a new announcement about every 60 seconds.
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
      hide = window.setTimeout(() => setAnnounce(null), 8000);
    }, 60000);
    return () => { window.clearInterval(timer); window.clearTimeout(hide); };
  }, [entered, state.scene, listenAt]);

  const enter = () => { setEntered(true); ambience.current?.start(); };
  const open = useCallback((id: string) => {
    setPanel(false); setList(false); setMap(false); setBook(false);
    if (mode === 'escucha') { setListenAt(id); setState(s => setFloor(s, sceneById(id)?.floor ?? s.floor)); return; }
    setTalkAt(0);
    setState(s => openScene({ ...s, floor: sceneById(id)?.floor ?? s.floor }, id));
  }, [mode]);
  const close = useCallback(() => setState(s => closeScene(s)), []);
  const meet = useCallback((id: string | null) => setPersonId(id), []);
  const goPlace = (floor: number) => {
    setPanel(false); setMap(false);
    if (floor === state.floor) return;
    setRiding(floor);
    setState(s => setFloor(s, floor));
    window.setTimeout(() => setRiding(null), 1300);
  };
  const switchMode = (next: typeof mode) => { setMode(next); setListenAt(undefined); if (state.scene) close(); };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (state.scene) { close(); return; }
      if (personId) { setPersonId(null); return; }
      if (panel) setPanel(false);
      if (list) setList(false);
      if (map) setMap(false);
      if (book) setBook(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.scene, panel, list, map, book, close, personId]);

  useEffect(() => { cardRef.current?.focus({ preventScroll: true }); }, [view?.id, view?.pick]);

  const pick = (index: number) => { setState(s => choose(s, index)); setFresh(true); window.setTimeout(() => setFresh(false), 2200); };
  const onCardKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!view || view.ended) return;
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0) { event.preventDefault(); event.stopPropagation(); pick(index); }
  };

  const heardHere = mode === 'escucha' ? heard : done;
  const nearScene = near?.kind === 'scene' ? sceneById(near.id) : null;
  const nearWho = nearScene ? CAST[nearScene.cast[0]] : null;
  const busy = Boolean(state.scene) || listenAt !== undefined || Boolean(personId);
  const nearPassenger = near?.kind === 'person' ? pasajeroById(near.id) : null;
  const passenger = personId ? pasajeroById(personId) : null;
  // The night moves on with every circle of the mode you are playing.
  const clock = nightClock(heardHere.length, SCENES.length);
  const case_ = notebook(heardHere);
  const entries = notebookEntries(state);
  const band = ['A0', 'A1', 'A2'].includes(state.level) ? 'basic' : ['B1', 'B2'].includes(state.level) ? 'mid' : 'high';
  const a0 = state.level === 'A0';

  return <main className="et" data-level={state.level} data-floor={state.floor} data-mode={mode}>
    {ready && has3d && <World3D floor={state.floor} sceneId={state.scene?.id ?? (listenAt && sceneById(listenAt) ? listenAt : null)} mood={view?.mood ?? null}
      done={heardHere} paused={!entered || panel || list || map || book || listenAt !== undefined} intro={!entered}
      onSpot={open} onPortal={() => setPanel(true)} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)}
      personId={personId} onPerson={meet} clock={clock} />}
    {ready && !has3d && <div className="et-flat" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="et-title" aria-labelledby="et-title-h">
      <div className="et-title-card">
        <p className="et-kicker">{TRAIN.name} · {TRAIN.route}</p>
        <h1 id="et-title-h">El tren de las 23:40</h1>
        <p className="et-tagline">Una novelista de 79 años desaparece de su camarote a la una de la mañana. En la almohada deja una nota: «Que investigue el pasajero del 8». El 8 eres tú.</p>
        <p className="et-lede">Un tren nocturno cruza los Andes de Mendoza a Chile. Locomotora, furgón, dos coches cama, comedor, bar, mirador y dos andenes: dieciocho círculos blancos y diecisiete pasajeros más con su propia historia. Cada respuesta tuya queda escrita en tu cuaderno. Al amanecer, en la última estación, se cierra el caso.</p>
        <p className="et-label">Elige el nivel</p>
        <div className="et-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={state.level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={setMode} />
        <p className="et-note">{mode === 'escucha'
          ? 'Comprensión auditiva: en cada círculo escuchas una escena nueva de la misma noche (anuncios, rumores, llamadas), con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo lees la situación, eliges qué decir, ves la consecuencia y después respondes cinco preguntas sobre tu vida.'}</p>
        <button type="button" className="et-enter" onClick={enter}>Subir al tren</button>
        <p className="et-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar. Párate en un círculo blanco o pulsa E. Las puertas al final de cada coche llevan al resto del tren y a los andenes.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="et-hud">
      <div className="et-where"><span>{floorInfo.name}</span><b>{sector?.name ?? floorInfo.sub}</b></div>
      <div className="et-night">
        <span className="et-clock" aria-label={`Hora: ${clock}`}>{clock}</span>
        <button type="button" className={`et-book-btn${fresh ? ' is-fresh' : ''}${case_.solved ? ' is-solved' : ''}`} onClick={() => setBook(v => !v)} aria-pressed={book}>
          <span className="et-book-ico" aria-hidden="true" /><span><small>Cuaderno del 8</small>{case_.hypothesis.es}</span>
        </button>
      </div>
      <div className="et-hud-right">
        <span className="et-progress">{mode === 'escucha' ? `${heard.length} de ${count.total} escuchas` : `${count.done} de ${count.total} escenas`} · {level.label}</span>
        <ModeSwitch mode={mode} onChange={switchMode} className="et-mode" />
        <button type="button" onClick={() => setMap(m => !m)} aria-pressed={map}>Mapa</button>
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Escenas'}</button>
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => setEntered(false)}>Nivel</button>
      </div>
    </header>}
    {entered && !busy && !panel && !list && !book && <aside className={map ? 'et-mapbox is-big' : 'et-mapbox'} onClick={() => !map && setMap(true)}>
      <TrainStrip floor={state.floor} done={heardHere} onPick={map ? goPlace : undefined} />
      <MiniMap floor={state.floor} pose={pose} done={heardHere} onOpen={(id) => map && open(id)} />
      {map && <p>Toca un coche para ir allí o un círculo para abrir su escena. <button type="button" className="et-secondary" onClick={(e) => { e.stopPropagation(); setMap(false); }}>Cerrar mapa</button></p>}
    </aside>}

    {announce && <p className="et-announce" role="status"><span aria-hidden="true">📢</span><span><small>Altavoces del tren</small>{announce}</span></p>}

    {/* ------------------------------------------------ the notebook of cabin 8 */}
    {book && <section className="et-panel et-notebook" aria-labelledby="et-book-h">
      <p className="et-kicker">Camarote 8 · {clock}</p>
      <h2 id="et-book-h">Cuaderno del pasajero del 8</h2>
      <p className={`et-hypo${case_.solved ? ' is-solved' : ''}`}><b>{case_.solved ? 'Caso cerrado' : 'Lo que creo ahora'}:</b> {case_.hypothesis.es}{a0 && <small lang="en"> · {case_.hypothesis.en}</small>}</p>
      {case_.clues.length === 0 ? <p className="et-empty">Todavía no hay pistas. Cada círculo deja una página en el cuaderno.</p> : <ol className="et-pages">
        {case_.clues.map(c => {
          const entry = mode === 'escucha' ? null : entries.find(e => e.id === c.id);
          return <li key={c.id}>
            <span className="et-page-where">{sceneById(c.id)?.sector}</span>
            <p className="et-page-clue">{c.es}{a0 && <small lang="en">{c.en}</small>}</p>
            {entry?.note && <p className="et-page-note"><span>Lo que pasó por tu respuesta:</span> <Bi t={entry.note} /></p>}
          </li>;
        })}
      </ol>}
      <p className="et-book-count">{case_.clues.length} de {case_.total} páginas</p>
      <button type="button" className="et-secondary" onClick={() => setBook(false)}>Cerrar el cuaderno <kbd>Esc</kbd></button>
    </section>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && !panel && <ListeningBadge game="tren" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="tren" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}
    {entered && !busy && !panel && !list && !map && !book && near && <div className="et-prompt" role="status">
      {nearScene ? <button type="button" onClick={() => open(nearScene.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearScene.sector}` : `Hablar con ${nearWho?.name ?? ''}`}</button>
        : nearPassenger ? <button type="button" onClick={() => setPersonId(near.id)}><kbd>E</kbd>{`Hablar con ${nearPassenger.name}`}</button>
        : <button type="button" onClick={() => setPanel(true)}><kbd>E</kbd>{isCar(state.floor) ? 'Pasar a otro coche' : 'Subir al tren'}</button>}
    </div>}
    {entered && mode !== 'escucha' && !busy && !near && !panel && !list && !map && !book && <p className="et-hint">Los círculos blancos son las escenas. Las puertas al final de cada coche llevan al resto del tren.</p>}

    {/* ------------------------------------------------ any passenger */}
    {passenger && <section className="et-panel et-person" aria-labelledby="et-person-h">
      <p className="et-kicker">{passenger.who.es}{a0 && <small lang="en"> · {passenger.who.en}</small>}</p>
      <h2 id="et-person-h">{passenger.name}</h2>
      {band === 'basic' ? <>
        <p className="et-person-say">«{passenger.basic.es}»</p>
        {a0 && <p className="et-person-en" lang="en">{passenger.basic.en}</p>}
        <p className="et-person-ask"><b>{passenger.name}:</b> {passenger.basicAsk.es}</p>
        {a0 && <p className="et-person-en" lang="en">{passenger.basicAsk.en}</p>}
      </> : <>
        <p className="et-person-say">«{band === 'mid' ? passenger.mid : passenger.high}»</p>
        <p className="et-person-ask"><b>{passenger.name}:</b> {band === 'mid' ? passenger.midAsk : passenger.highAsk}</p>
      </>}
      <p className="et-person-tip">Respóndele en voz alta.</p>
      <button type="button" className="et-secondary" onClick={() => setPersonId(null)}>Seguir caminando <kbd>Esc</kbd></button>
    </section>}

    {/* ------------------------------------------------ the doors between cars */}
    {panel && <section className="et-panel et-lift" aria-labelledby="et-lift-h">
      <h2 id="et-lift-h">{isCar(state.floor) ? 'Pasillo entre coches' : 'Puerta del coche cama'}</h2>
      <div className="et-lift-buttons">
        {PANEL_ORDER.map(id => { const f = FLOORS.find(x => x.id === id)!; const left = SCENES.filter(s => s.floor === id && !heardHere.includes(s.id)).length; return <button key={id} type="button" className={id === state.floor ? 'is-here' : undefined} onClick={() => goPlace(id)}>
          <span className="et-lift-n">{FLOOR_LABEL[id]}</span><span><b>{f.name}</b><small>{f.sub}{left ? ` · ${left} por hacer` : ''}</small></span>
        </button>; })}
      </div>
      <button type="button" className="et-secondary" onClick={() => setPanel(false)}>Cerrar <kbd>Esc</kbd></button>
    </section>}
    {riding !== null && <div className="et-ride" aria-live="polite"><span>{FLOOR_LABEL[riding]}</span><b>{floorById(riding).name}</b></div>}

    {/* ------------------------------------------------ scene list (teacher navigation) */}
    {(list || (ready && !has3d && entered && !state.scene && listenAt === undefined)) && <section className="et-panel et-list" aria-labelledby="et-list-h">
      <h2 id="et-list-h">Escenas · {level.label}</h2>
      {PANEL_ORDER.filter(id => SCENES.some(s => s.floor === id)).map(id => <div key={id} className="et-list-floor">
        <h3>{floorById(id).name}</h3>
        <ol>{SCENES.filter(s => s.floor === id).map(s => <li key={s.id}>
          <button type="button" className={heardHere.includes(s.id) ? 'is-done' : undefined} onClick={() => open(s.id)}>
            <span>{s.sector}</span><small>{CAST[s.cast[0]].full}</small>{heardHere.includes(s.id) && <i aria-label="hecha">✓</i>}
          </button>
        </li>)}</ol>
      </div>)}
      <div className="et-row">
        {has3d && <button type="button" className="et-secondary" onClick={() => setList(false)}>Volver al tren</button>}
        <button type="button" className="et-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ conversation card */}
    {view && <section className="et-card" aria-labelledby="et-card-h" data-scene={view.id} data-ended={view.ended ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="et-card-head">
        <p><span>{floorById(view.floor).name} · {view.sector}</span><em>{view.name} · {view.role}</em></p>
        <button type="button" className="et-close" onClick={close} aria-label="Volver al tren">×</button>
      </header>
      <div className="et-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="et-card-h"><Bi t={view.title} /></h2>
        <Bi t={view.line} as="p" className="et-line" />
        <ul className="et-dialogue">{view.dialogue.map((d, i) => <li key={i}><b>{d.who}</b><Bi t={d.line} /></li>)}</ul>
        <Bi t={view.ask} as="p" className="et-ask" />
        {!view.chosen ? <>
          <p className="et-say">Elige una respuesta y dila en voz alta.</p>
          <ol className="et-options">{view.options.map((o, i) => <li key={i}><button type="button" onClick={() => pick(i)}><kbd>{LETTERS[i]}</kbd><Bi t={o.say} /></button></li>)}</ol>
        </> : <div className="et-said">
          <p className="et-chosen"><span>Tú</span><Bi t={view.chosen.say} /></p>
          <Bi t={view.chosen.reply} as="p" className="et-reply" />
          <Bi t={view.chosen.end} as="p" className="et-end" />
          <p className="et-clue"><span className="et-book-ico" aria-hidden="true" /><span><small>Nueva página en tu cuaderno</small>{notebook([view.id]).clues[0]?.es}</span></p>
        </div>}
        {view.ended && <section className="et-talk" aria-labelledby="et-talk-h">
          <h3 id="et-talk-h">Ahora, conversación</h3>
          <ol>{view.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}><Bi t={q} /></button></li>)}</ol>
          <div className="et-row">
            <button type="button" className="et-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
            <button type="button" className="et-secondary" disabled={talkAt === view.talk.length - 1} onClick={() => setTalkAt(t => Math.min(view.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
          </div>
        </section>}
        {vocab && <details className="et-words" open={view.ended}>
          <summary>Palabras de la escena</summary>
          <ul>{view.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>}
      </div>
      <footer className="et-card-foot">
        {view.chosen && <button type="button" className="et-secondary" onClick={() => setState(s => undo(s))}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'et-primary' : 'et-secondary'} onClick={close}>{view.ended ? 'Seguir investigando' : 'Volver al tren'} <kbd>Esc</kbd></button>
        <label className="et-toggle"><input type="checkbox" checked={vocab} onChange={e => setVocab(e.target.checked)} /> Vocabulario</label>
      </footer>
    </section>}
  </main>;
}
