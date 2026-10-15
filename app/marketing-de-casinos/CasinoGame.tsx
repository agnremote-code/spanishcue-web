'use client';

// El Gran Meridiano · the lesson around the 3D casino: title screen with the
// level, the floor and progress, the elevator panel, and the scene card
// (two answers to choose, then a conversation). Without WebGL the same
// scenes open from a list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { FLOORS, SCENES, sceneById } from './layout.mjs';
import { LEVELS } from './levels.mjs';
import { MONEY, STORAGE_KEY, choose, closeScene, createState, doneFor, normaliseLevel, openScene, progress, resetLevel, restore, sceneView, serialise, setFloor, setLevel, setMoney, undo } from './engine.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import './casino.css';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="gm-loading">Abriendo las puertas del casino…</div> });
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
  return { ...(asked ? setLevel(state, asked) : state), floor: 1, scene: null };
}

export default function CasinoGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [elevator, setElevator] = useState(false);
  const [list, setList] = useState(false);
  const [near, setNear] = useState<{ kind: 'scene' | 'elevator'; id: string } | null>(null);
  const [riding, setRiding] = useState<number | null>(null);
  const [teacher, setTeacher] = useState(true);
  const [talkAt, setTalkAt] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  // Comprensión auditiva: the circles open a listening (undefined = closed, null = the list).
  const [mode, setMode] = useListeningMode('casino');
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
  // The Marketing section is A2: its listenings are the A2 ones.
  const listenLevel = level.track ? 'A2' : state.level;
  const [heard, markHeard] = useListeningDone('casino', listenLevel);
  const floorInfo = FLOORS.find(f => f.id === state.floor)!;
  const money = MONEY.find(m => m.id === state.money) ?? MONEY[2];

  const open = useCallback((id: string) => { if (mode === 'escucha') { setElevator(false); setList(false); setListenAt(id); return; } setTalkAt(0); setElevator(false); setList(false); setState(s => openScene({ ...s, floor: sceneById(id)?.floor ?? s.floor }, id)); }, [mode]);
  const close = useCallback(() => setState(s => closeScene(s)), []);
  const goFloor = (floor: number) => {
    setElevator(false);
    if (floor === state.floor) return;
    setRiding(floor);
    setState(s => setFloor(s, floor));
    window.setTimeout(() => setRiding(null), 2600);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (state.scene) { close(); return; }
      if (elevator) setElevator(false);
      if (list) setList(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.scene, elevator, list, close]);

  useEffect(() => { cardRef.current?.focus({ preventScroll: true }); }, [view?.id, view?.step]);

  const onCardKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!view || view.ended) return;
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0) { event.preventDefault(); event.stopPropagation(); setState(s => choose(s, index)); }
  };

  const nearScene = near?.kind === 'scene' ? sceneById(near.id) : null;

  return <main className="gm" data-level={state.level} data-floor={state.floor}>
    {ready && has3d && <World3D floor={state.floor} sceneId={state.scene?.id ?? (listenAt && sceneById(listenAt) ? listenAt : null)} done={mode === 'escucha' ? heard : done} paused={!entered || elevator || list || listenAt !== undefined} intro={!entered}
      onSpot={open} onElevator={() => setElevator(true)} onNear={setNear} onFloorShown={() => undefined} onFail={() => setHas3d(false)} />}
    {ready && !has3d && <div className="gm-flat" aria-hidden="true" />}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="gm-title" aria-labelledby="gm-title-h">
      <div className="gm-title-card">
        <p className="gm-kicker">Las Vegas · Casino · Hotel</p>
        <h1 id="gm-title-h">El Gran Meridiano</h1>
        <p className="gm-lede">Valentina llega al Strip con una ficha dorada en el bolso: «Piso 3 · Medianoche». Tres pisos, treinta escenas y una noche para descubrir quién la espera arriba.</p>
        <p className="gm-label">Elige el nivel</p>
        <div className="gm-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={state.level === l.id} className={[state.level === l.id ? 'is-on' : '', l.track ? 'gm-track' : ''].join(' ').trim() || undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>
          </button>)}
        </div>
        <ModeSwitch mode={mode} onChange={setMode} />
        {mode === 'escucha' && <p className="gm-note">Comprensión auditiva: en cada círculo blanco escuchas una escena con voces de distintos países. Dos escuchas, preguntas, completar y leer.</p>}
        {level.track && <p className="gm-note">Marketing es una sección aparte: Valentina es la nueva directora de marketing del casino. Nivel A2 con términos técnicos, una decisión por escena y después la conversación.</p>}
        {!level.track && <>
          <p className="gm-label">¿Con cuánto dinero entra?</p>
          <div className="gm-levels gm-money" role="radiogroup" aria-label="Dinero">
            {MONEY.map(m => <button key={m.id} type="button" role="radio" aria-checked={state.money === m.id} className={state.money === m.id ? 'is-on' : undefined} onClick={() => setState(s => setMoney(s, m.id))}>
              <b>{m.label}</b><small>{m.hint}</small>
            </button>)}
          </div>
        </>}
        <button type="button" className="gm-enter" onClick={() => setEntered(true)}>Entrar al casino</button>
        <p className="gm-help">Camina con las flechas o WASD. Espacio para saltar, Shift para correr, N para el nitro. Arrastra para mirar y párate en los círculos blancos para hablar.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {entered && <header className="gm-hud">
      <div className="gm-floor"><span>Piso {floorInfo.id}{level.track ? '' : ` · ${money.label}`}</span><b>{floorInfo.name}</b></div>
      <div className="gm-hud-right">
        <span className="gm-progress">{count.done} de {count.total} escenas · {level.label}</span>
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Escenas'}</button>
        <button type="button" onClick={() => setEntered(false)}>Nivel y dinero</button>
      </div>
    </header>}

    {entered && mode === 'escucha' && listenAt === undefined && !state.scene && !elevator && <ListeningBadge game="casino" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="casino" level={listenLevel} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} />}
    {entered && !state.scene && listenAt === undefined && !elevator && !list && near && <div className="gm-prompt" role="status">
      {nearScene ? <button type="button" onClick={() => open(nearScene.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${nearScene.place}` : `Hablar con ${nearScene.name}`}</button>
        : <button type="button" onClick={() => setElevator(true)}><kbd>E</kbd>Llamar al ascensor</button>}
    </div>}
    {entered && mode !== 'escucha' && !state.scene && !near && !elevator && !list && <p className="gm-hint">Los círculos blancos son las escenas. El ascensor dorado lleva a los otros pisos.</p>}

    {/* ------------------------------------------------ elevator */}
    {elevator && <section className="gm-panel gm-elevator" aria-labelledby="gm-lift-h">
      <h2 id="gm-lift-h">Ascensor</h2>
      <div className="gm-lift-buttons">
        {[...FLOORS].reverse().map(f => <button key={f.id} type="button" className={f.id === state.floor ? 'is-here' : undefined} onClick={() => goFloor(f.id)}>
          <span className="gm-lift-n">{f.id}</span><span><b>{f.name}</b><small>{f.sub}</small></span>
        </button>)}
      </div>
      <button type="button" className="gm-secondary" onClick={() => setElevator(false)}>Cerrar <kbd>Esc</kbd></button>
    </section>}
    {riding !== null && <div className="gm-ride" aria-live="polite"><span>{riding}</span><b>{FLOORS[riding - 1].name}</b></div>}

    {/* ------------------------------------------------ scene list */}
    {(list || (ready && !has3d && entered && !state.scene && listenAt === undefined)) && <section className="gm-panel gm-list" aria-labelledby="gm-list-h">
      <h2 id="gm-list-h">Escenas · {level.story}</h2>
      {FLOORS.map(f => <div key={f.id} className="gm-list-floor">
        <h3>Piso {f.id} · {f.name}</h3>
        <ol>{SCENES.filter(s => s.floor === f.id).map(s => <li key={s.id}>
          <button type="button" className={done.includes(s.id) ? 'is-done' : undefined} onClick={() => open(s.id)}>
            <span>{s.place}</span><small>{s.name}</small>{done.includes(s.id) && <i aria-label="hecha">✓</i>}
          </button>
        </li>)}</ol>
      </div>)}
      <div className="gm-row">
        {has3d && <button type="button" className="gm-secondary" onClick={() => setList(false)}>Volver al casino</button>}
        <button type="button" className="gm-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ scene card */}
    {view && <section className="gm-card" aria-labelledby="gm-card-h" data-scene={view.id} data-step={view.step} data-ended={view.ended ? 'true' : 'false'} onKeyDown={onCardKey}>
      <header className="gm-card-head">
        <p><span>Piso {view.floor} · {view.place}</span><em>{view.name} · {view.role}</em></p>
        <button type="button" className="gm-close" onClick={close} aria-label="Volver al casino">×</button>
      </header>
      <div className="gm-card-body" ref={cardRef} tabIndex={-1} aria-live="polite">
        <h2 id="gm-card-h">{view.title}</h2>
        {view.beats.map((beat, b) => <div key={b} className="gm-beat">
          <p className="gm-line">{beat.line}</p>
          {beat.pick === undefined ? <>
            <p className="gm-ask">Elige una respuesta y dila en voz alta.</p>
            <ol className="gm-options">{beat.options.map((o, i) => <li key={i}><button type="button" onClick={() => setState(s => choose(s, i))}><kbd>{LETTERS[i]}</kbd><span>{o.say}</span></button></li>)}</ol>
          </> : <div className="gm-said">
            <p className="gm-chosen"><span>Valentina</span>{beat.options[beat.pick].say}</p>
            <p className="gm-reply">{beat.options[beat.pick].reply}</p>
          </div>}
        </div>)}
        {view.ended && <>
          <p className="gm-end">{view.end}</p>
          <section className="gm-talk" aria-labelledby="gm-talk-h">
            <h3 id="gm-talk-h">Ahora, conversación</h3>
            <ol>{view.talk.map((q, i) => <li key={i} className={i === talkAt ? 'is-now' : undefined}><button type="button" onClick={() => setTalkAt(i)}>{q}</button></li>)}</ol>
            <div className="gm-row">
              <button type="button" className="gm-secondary" disabled={talkAt === 0} onClick={() => setTalkAt(t => Math.max(0, t - 1))}>← Anterior</button>
              <button type="button" className="gm-secondary" disabled={talkAt === view.talk.length - 1} onClick={() => setTalkAt(t => Math.min(view.talk.length - 1, t + 1))}>Siguiente pregunta →</button>
            </div>
          </section>
        </>}
        {teacher && <details className="gm-words" open={view.ended}>
          <summary>Palabras de la escena</summary>
          <ul>{view.words.map(w => <li key={w}>{w}</li>)}</ul>
        </details>}
      </div>
      <footer className="gm-card-foot">
        {view.step > 0 && <button type="button" className="gm-secondary" onClick={() => setState(s => undo(s))}>← Otra respuesta</button>}
        <button type="button" className={view.ended ? 'gm-primary' : 'gm-secondary'} onClick={close}>{view.ended ? 'Seguir explorando' : 'Volver al casino'} <kbd>Esc</kbd></button>
        <label className="gm-toggle"><input type="checkbox" checked={teacher} onChange={e => setTeacher(e.target.checked)} /> Vocabulario</label>
      </footer>
    </section>}
  </main>;
}
