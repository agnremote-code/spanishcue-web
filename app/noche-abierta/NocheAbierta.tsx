'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type ComponentType, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import CityScene from './CityScene';
import {
  DEFAULT_LEVEL, LEVELS, LOCATIONS, MECHANICS, contentFor, isLevel, setLevel,
  previousBeat, previousActivity, advanceBeat, chooseOption, closeActivity, completedIds, currentView, finalAvailable, initialState, inspectItem, isValidState,
  leaveLocation, locationById, markDone, nightClock, nightSummary, openActivity, openFinal, openLocation, otherActivity, resolveEvent,
  restartActivity, startExploring, worldOutcome, toggleCriterion, triggerEvent,
  type Grammar, type Help, type Level, type Location, type NightState, type View,
} from './engine.mjs';
import type { Beat, Media } from './activities.mjs';
import { ARRIVAL_SPOT, PLACES, VIEWBOX, iso } from './scene.mjs';
import { WALKABLE_STAGES } from './world3d.mjs';
import { LEVEL_INFO } from './levels.mjs';
import type { WorldProps } from './World3D';
import './noche-abierta.css';

// v3: places became small games with their own situations, so older saved nights no longer fit.
const STORAGE_KEY = 'spanishcue:noche-abierta:v3';
const VIEW_KEY = 'spanishcue:noche-abierta:vista';
const LEVEL_KEY = 'spanishcue:noche-abierta:nivel';
const places = LOCATIONS.map(({ id, name, short }) => ({ id, name, short }));
const LETTERS = ['A', 'B', 'C', 'D'];
type ViewMode = 'map' | 'loading' | '3d';

function webglAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch { return false; }
}

function focusWorld() {
  window.setTimeout(() => (document.querySelector('.na-world') as HTMLElement | null)?.focus({ preventScroll: true }), 60);
}

// A level in the link (?level=A1, as the library sends it) wins over the saved one.
function readLevel(): Level | null {
  const linked = new URLSearchParams(window.location.search).get('level');
  if (isLevel(linked)) return linked;
  try {
    const value = window.localStorage.getItem(LEVEL_KEY);
    return isLevel(value) ? value : null;
  } catch { return null; }
}

function readSaved(): NightState | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw);
    return isValidState(value) ? value : null;
  } catch { return null; }
}

function useMedia(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);
    update();
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, [query]);
  return matches;
}

export default function NocheAbierta({ initial }: { initial?: NightState }) {
  const [state, setState] = useState<NightState>(initial ?? initialState());
  const [worldKey, setWorldKey] = useState(0);
  const [travelling, setTravelling] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [placesOpen, setPlacesOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const restored = useRef(Boolean(initial));
  const scroller = useRef<HTMLDivElement>(null);
  const narrow = useMedia('(max-width: 760px)');
  const reducedMotion = useMedia('(prefers-reduced-motion: reduce)');
  // The 3D street loads after the page is interactive; the SVG map is the
  // server render, the loading state and the fallback without WebGL.
  const [view, setView] = useState<ViewMode>('map');
  const [canUse3d, setCanUse3d] = useState(false);
  const [World, setWorld] = useState<ComponentType<WorldProps> | null>(null);
  const [goTo, setGoTo] = useState<{ id: string; n: number } | null>(null);

  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    const saved = readSaved();
    const level = readLevel();
    // Restoring saved progress and the chosen level after hydration is an external-store sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved || level) setState(current => setLevel(saved ?? current, level ?? saved?.level ?? DEFAULT_LEVEL));
  }, []);
  useEffect(() => {
    try { window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* private mode: the lesson still works */ }
  }, [state]);

  const load3d = useCallback(() => {
    setView('loading');
    import('./World3D')
      .then(module => { setWorld(() => module.default); setView('3d'); })
      .catch(() => { setCanUse3d(false); setView('map'); });
  }, []);
  useEffect(() => {
    if (!webglAvailable()) return;
    let preferred: string | null = null;
    try { preferred = window.sessionStorage.getItem(VIEW_KEY); } catch { /* ignore */ }
    // Feature detection after hydration; the server always renders the map.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCanUse3d(true);
    if (preferred !== 'map') load3d();
  }, [load3d]);
  const switchView = () => {
    const next = view === '3d' || view === 'loading' ? 'map' : '3d';
    try { window.sessionStorage.setItem(VIEW_KEY, next); } catch { /* ignore */ }
    if (next === 'map') { setTravelling(false); setView('map'); }
    else if (World) setView('3d');
    else load3d();
  };
  const fail3d = useCallback(() => { setTravelling(false); setCanUse3d(false); setView('map'); }, []);
  // Changing the level only swaps the texts: the world, the camera and the
  // route stay exactly where they are.
  const level: Level = isLevel(state.level) ? state.level : DEFAULT_LEVEL;
  const changeLevel = useCallback((next: Level) => {
    setState(current => setLevel(current, next));
    try { window.localStorage.setItem(LEVEL_KEY, next); } catch { /* private mode */ }
    const url = new URL(window.location.href);
    if (url.searchParams.has('level')) {
      url.searchParams.set('level', next);
      window.history.replaceState(window.history.state, '', url);
    }
  }, []);
  const in3d = view === '3d' && Boolean(World);

  const done = completedIds(state);
  const card = currentView(state);
  const content = contentFor(state.level);
  const event = state.event ? content.CITY_EVENTS.find(item => item.id === state.event!.id) ?? null : null;
  const outcome = worldOutcome(state);
  const physicalPlace = outcome?.location ?? state.position;
  const standing = physicalPlace ? PLACES[physicalPlace].spot : ARRIVAL_SPOT;
  const focus = state.phase === 'encuentro' ? physicalPlace : null;
  const exploring = state.phase === 'ciudad';
  // In 3D, the museum and the bar are rooms you walk around in.
  const walkingInside = in3d && state.phase === 'encuentro' && Boolean(state.position && WALKABLE_STAGES.has(state.position));
  const showCard = Boolean(card && (card.activity || !in3d || !walkingInside && !card.location.hub));
  const hubInStreet = in3d && card?.location.hub && !walkingInside;

  const open = useCallback((id: string, activity?: string) => { setPlacesOpen(false); setState(current => openLocation(current, id, activity ?? null)); }, []);
  // In 3D the list walks you to the place; you still press E to go in.
  const walkTo = useCallback((id: string) => {
    setPlacesOpen(false);
    setGoTo(current => ({ id, n: (current?.n ?? 0) + 1 }));
    focusWorld();
  }, []);
  const refocus = useCallback((id: string | null) => {
    if (document.querySelector('.na-world')) focusWorld();
    else if (id) window.setTimeout(() => (document.querySelector(`[data-place="${id}"]`) as HTMLElement | null)?.focus({ preventScroll: true }), 60);
  }, []);
  const leave = useCallback(() => {
    setState(current => {
      if (!current.position) return current;
      refocus(current.position);
      return leaveLocation(current, current.position);
    });
  }, [refocus]);
  // Closing a card: in a room you keep walking, in the street you are back
  // outside, on the map you return to the list of people or objects.
  const back = useCallback(() => {
    setState(current => {
      const location = locationById(current.position);
      if (!location) return current;
      const inside = Boolean(document.querySelector('.na-world')) && WALKABLE_STAGES.has(location.id);
      const onMap = !document.querySelector('.na-world');
      if (current.activity && location.hub && (inside || onMap)) {
        if (inside) focusWorld();
        return closeActivity(current);
      }
      refocus(location.id);
      return leaveLocation(current, location.id);
    });
  }, [refocus]);
  const reset = () => {
    setWorldKey(value => value + 1);
    setTravelling(false);
    setConfirmReset(false);
    setPlacesOpen(false);
    setState(initialState());
    try { window.sessionStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  };

  useEffect(() => {
    if (state.phase !== 'encuentro' || (in3d && travelling)) return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      // Esc closes the card or leaves the place; F also gets you out of the taxi.
      if (event.key === 'Escape') { event.preventDefault(); back(); }
      else if (event.code === 'KeyF' && !typing && state.position === 'taxi') leave();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.phase, state.position, back, leave, travelling, in3d]);

  // On narrow screens the city pans sideways: keep the learner in view.
  useEffect(() => {
    const box = scroller.current;
    if (!narrow || !box) return;
    const spot = state.position ? PLACES[state.position].label : { x: VIEWBOX.width / 2 };
    box.scrollTo({ left: (spot.x / VIEWBOX.width) * box.scrollWidth - box.clientWidth / 2, behavior: 'auto' });
  }, [narrow, state.position]);

  // Frame the place between its label and the spot where the learner stands.
  const anchor = focus ? (() => {
    const place = PLACES[focus];
    const feet = iso(place.spot.gx, place.spot.gy);
    return { x: (place.label.x + feet.x) / 2, y: (place.label.y + feet.y) / 2 };
  })() : null;
  const camera: CSSProperties = anchor && !narrow ? {
    transformOrigin: `${(anchor.x / VIEWBOX.width) * 100}% ${(anchor.y / VIEWBOX.height) * 100}%`,
    transform: `translate(${(0.3 - anchor.x / VIEWBOX.width) * 100}%, ${(0.5 - anchor.y / VIEWBOX.height) * 100}%) scale(1.35)`,
  } : {};

  return <main className={`na-root phase-${state.phase}${teacher ? ' is-teacher' : ''}${in3d ? ' is-3d' : ''}`} data-phase={state.phase} data-lesson="noche-abierta" data-view={view}>
    <header className="na-top">
      <Link href="/" className="na-brand" aria-label="Volver a la biblioteca de SpanishCue">SPANISH<span>CUE</span></Link>
      <p className="na-title"><span>Noche abierta</span><small>Sábado · {nightClock(state)}</small></p>
      {state.phase !== 'llegada' && <LevelPicker level={level} onChange={changeLevel} compact={narrow} />}
      {state.phase !== 'llegada' && <p className="na-progress" aria-label={`${done.length} de ${LOCATIONS.length} lugares explorados`}>
        <span className="na-progress-dots" aria-hidden="true">{LOCATIONS.map(item => <i key={item.id} className={done.includes(item.id) ? 'is-done' : ''} />)}</span>
        <span>{done.length} / {LOCATIONS.length} lugares</span>
      </p>}
      <nav className="na-tools" aria-label="Herramientas de la clase">
        {canUse3d && <button type="button" className="na-tool" onClick={switchView} aria-label={view === 'map' ? 'Ver el barrio en 3D' : 'Ver el mapa en 2D'}>{view === 'map' ? '3D' : '2D'}</button>}
        {state.phase !== 'llegada' && state.phase !== 'cierre' && <button type="button" className="na-tool" aria-expanded={placesOpen} aria-controls="na-places" onClick={() => setPlacesOpen(value => !value)}>Lugares</button>}
        <button type="button" className="na-tool" aria-pressed={teacher} onClick={() => setTeacher(value => !value)}>Profe</button>
      </nav>
    </header>

    <div className="na-stage">
      {in3d && World ? <World key={worldKey} phase={state.phase} outcome={outcome} onTransition={setTravelling} active={state.phase === 'encuentro' ? state.position : null} activity={state.activity} last={state.position} done={done}
        played={state.position ? Object.keys(state.encounters[state.position]?.acts ?? {}).filter(id => state.encounters[state.position!].acts[id].done) : []}
        event={state.event?.id ?? null} goTo={goTo} narrow={narrow} reducedMotion={reducedMotion} panel={showCard && !travelling} onInteract={open}
        onOpenActivity={id => setState(current => openActivity(current, id))} onLeave={leave} onFail={fail3d} />
        : <div className="na-scroll" ref={scroller}>
          <div className="na-camera" style={camera}>
            <CityScene places={places} visited={state.visitOrder} done={done} position={physicalPlace} standing={standing} focus={focus}
              weather={state.event?.id === 'lluvia' ? 'rain' : 'clear'} busOut={state.event?.id === 'transporte'} interactive={exploring} onOpen={id => open(id)} />
          </div>
        </div>}
      {view === 'loading' && <p className="na-loading" role="status">Cargando el barrio en 3D…</p>}

      {placesOpen && state.phase !== 'cierre' && <PlacesList state={state} done={done} onOpen={in3d ? walkTo : id => open(id)} onClose={() => setPlacesOpen(false)} disabled={!exploring} walk={in3d} />}

      {state.phase === 'llegada' && <Arrival arrival={content.ARRIVAL} level={level} onLevel={changeLevel} teacher={teacher} onStart={() => { setState(current => startExploring(current)); if (in3d) focusWorld(); }} />}

      {exploring && <div className={`na-hint${in3d ? ' is-world' : ''}`} role="status">
        {finalAvailable(state)
          ? <><p>La noche ya cambió. Puedes seguir caminando o cerrar la noche.</p><button type="button" className="na-primary" onClick={() => setState(current => openFinal(current))}>Cerrar la noche</button></>
          : <p>{in3d
            ? (state.visitOrder.length ? 'Sigue explorando. Acércate a algo que brille y toca E.' : 'Camina por el barrio. Acércate a un lugar y toca E.')
            : (state.visitOrder.length ? 'Elige adónde seguir.' : 'Elige adónde ir. No hace falta visitar todo.')}</p>}
      </div>}
      {walkingInside && !state.activity && <div className="na-hint is-world" role="status">
        <p>{card?.location.hubPrompt} Acércate y toca E. Para salir, ve a la puerta o toca Esc.</p>
      </div>}

      {card && showCard && !(in3d && travelling) && !(hubInStreet && !card.activity) && <ActivityCard key={`${level}-${card.location.id}-${card.activity?.id ?? 'hub'}`} view={card} state={state} teacher={teacher} world={in3d}
        inside={walkingInside}
        onChoose={id => setState(current => chooseOption(current, id))}
        onInspect={id => setState(current => inspectItem(current, id))}
        onPrevious={() => setState(current => previousBeat(current))}
        onPreviousActivity={() => setState(current => previousActivity(current))}
        onNext={() => setState(current => advanceBeat(current))}
        onOther={() => setState(current => otherActivity(current))}
        onPick={id => setState(current => openActivity(current, id))}
        onRestart={() => setState(current => restartActivity(current))}
        onDone={() => setState(current => markDone(current))}
        onBack={back} onLeave={leave} />}

      {state.phase === 'evento' && event && <EventCard key={level} state={state} eventId={event.id} teacher={teacher} onContinue={() => setState(current => resolveEvent(current))} />}

      {state.phase === 'cierre' && <FinalRecap state={state} teacher={teacher} onToggle={id => setState(current => toggleCriterion(current, id))} onReset={() => setConfirmReset(true)} />}
    </div>

    {teacher && <TeacherDesk state={state} onTrigger={id => setState(current => triggerEvent(current, id))} onReset={() => setConfirmReset(true)} />}

    {confirmReset && <div className="na-confirm" role="alertdialog" aria-modal="true" aria-labelledby="na-confirm-title">
      <div>
        <h2 id="na-confirm-title">¿Empezar la noche otra vez?</h2>
        <p>Se borra el recorrido de esta clase.</p>
        <div className="na-row">
          <button type="button" className="na-primary" onClick={reset} autoFocus>Sí, empezar de nuevo</button>
          <button type="button" className="na-secondary" onClick={() => setConfirmReset(false)}>Seguir con esta noche</button>
        </div>
      </div>
    </div>}
  </main>;
}

// The title screen: the city in the back, the mascot at the side, a compact
// game menu. Starting the night fades the menu and the mascot out and hands
// the camera to the walk.
function Arrival({ arrival, level, onLevel, teacher, onStart }: {
  arrival: ReturnType<typeof contentFor>['ARRIVAL']; level: Level; onLevel: (level: Level) => void; teacher: boolean; onStart: () => void;
}) {
  const [question, setQuestion] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const start = () => {
    if (leaving) return;
    setLeaving(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(onStart, reduced ? 0 : 420);
  };
  return <section className={`na-title-screen${leaving ? ' is-leaving' : ''}`} aria-labelledby="na-arrival-title">
    <div className="na-ts-shade" aria-hidden="true" />
    <figure className="na-ts-hero" aria-hidden="true">
      <img src="/brand/mascot/kneeling.webp" alt="" width={900} height={1350} decoding="async" fetchPriority="high" />
      <img className="na-ts-wink" src="/noche-abierta/mascot-wink.webp" alt="" width={900} height={1350} decoding="async" />
    </figure>
    <div className="na-ts-menu">
      <p className="na-kicker">{arrival.kicker}<span>Modo Play · 3D</span></p>
      <h1 id="na-arrival-title">{arrival.title}</h1>
      <p className="na-ts-lede">Vale cumple treinta. Hay previa, terraza y un barrio entero sin plan fijo.</p>
      <ul className="na-ts-verbs"><li>Camina.</li><li>Entra donde quieras.</li><li>Resuelve lo que pase.</li></ul>
      <div className="na-ts-level">
        <LevelPicker level={level} onChange={onLevel} />
        <p><b>{LEVEL_INFO[level].name}</b> · {LEVEL_INFO[level].demand}</p>
      </div>
      <button type="button" className="na-primary na-ts-start" onClick={start}>Empezar la noche</button>
      <p className="na-ts-warmup"><span>Para romper el hielo</span>{arrival.warmup[question % arrival.warmup.length]}
        <button type="button" className="na-link" onClick={() => setQuestion(value => value + 1)}>Otra</button></p>
      {teacher && <p className="na-teacher-note">{arrival.teacher}</p>}
    </div>
  </section>;
}

// Six levels in one control. Arrow keys move between them, like any radio group.
function LevelPicker({ level, onChange, compact = false }: { level: Level; onChange: (level: Level) => void; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const onKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const step = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = LEVELS[(LEVELS.indexOf(level) + step + LEVELS.length) % LEVELS.length];
    onChange(next);
    window.requestAnimationFrame(() => (event.currentTarget.querySelector(`[data-level="${next}"]`) as HTMLElement | null)?.focus());
  };
  const group = <div className="na-levels" role="radiogroup" aria-label="Nivel" onKeyDown={onKey}>
    {LEVELS.map(item => <button key={item} type="button" role="radio" data-level={item} aria-checked={item === level} tabIndex={item === level ? 0 : -1}
      title={LEVEL_INFO[item].name} onClick={event => {
        onChange(item);
        setOpen(false);
        // After a mouse or touch pick, hand the keys back to the street.
        if (event.detail > 0) event.currentTarget.blur();
      }}>{item}</button>)}
  </div>;
  if (!compact) return group;
  return <div className="na-levels-compact">
    <button type="button" className="na-tool" aria-expanded={open} aria-label={`Nivel ${level}. Cambiar nivel`} onClick={() => setOpen(value => !value)}>{level}</button>
    {open && <div className="na-levels-pop">{group}</div>}
  </div>;
}

function PlacesList({ state, done, onOpen, onClose, disabled, walk = false }: { state: NightState; done: string[]; onOpen: (id: string) => void; onClose: () => void; disabled: boolean; walk?: boolean }) {
  return <section id="na-places" className="na-places" aria-label="Lugares del barrio">
    <div className="na-sheet-head"><h2>Lugares del barrio</h2><button type="button" className="na-close" onClick={onClose} aria-label="Cerrar la lista de lugares">×</button></div>
    <p className="na-muted">{walk ? 'Elige un lugar y vas caminando hasta ahí. Después toca E.' : 'Cada lugar es un juego distinto. No hace falta visitar todo.'}</p>
    <ul>{LOCATIONS.map(item => {
      const here = state.position === item.id && state.phase === 'encuentro';
      const status = here ? 'Estás acá' : done.includes(item.id) ? 'Ya fuiste' : state.visitOrder.includes(item.id) ? 'Pasaste' : '';
      return <li key={item.id}><button type="button" disabled={disabled} onClick={() => onOpen(item.id)}>
        <span><b>{item.name}</b><small>{MECHANICS[item.type].mechanic}</small></span>
        {status && <em className={done.includes(item.id) ? 'is-done' : ''}>{done.includes(item.id) ? '✓ ' : ''}{status}</em>}
      </button></li>;
    })}</ul>
    {disabled && <p className="na-muted">Termina lo que estás haciendo para elegir otro lugar.</p>}
  </section>;
}

function HelpPanel({ help, grammar }: { help: Help; grammar?: Grammar }) {
  return <div className="na-help-body" id="na-help">
    {grammar && <div className="na-grammar"><h3>{grammar.title}</h3><dl>{grammar.rows.map(row => <div key={row.form}><dt>{row.form}</dt><dd>{row.example}</dd></div>)}</dl></div>}
    <div><h3>Para empezar</h3><ul className="na-chips">{help.starters.map(item => <li key={item}>{item}</li>)}</ul></div>
    <div><h3>Expresiones útiles</h3><ul className="na-chips">{help.chunks.map(item => <li key={item}>{item}</li>)}</ul></div>
    {help.vocab && <div><h3>Palabras</h3><ul className="na-chips is-quiet">{help.vocab.map(item => <li key={item}>{item}</li>)}</ul></div>}
  </div>;
}

function MediaBlock({ media, onInspect }: { media: Media; onInspect: (id: string) => void }) {
  switch (media.type) {
    case 'quote':
      return <blockquote className="na-quote"><b>{media.who}</b><span>{media.text}</span></blockquote>;
    case 'thread':
      return <ol className="na-thread" aria-label="Mensajes">
        {media.messages.map((message, i) => <li key={i}><b>{message.from}</b><span>{message.text}</span><time>{message.time}</time></li>)}
        {media.fresh && <li className="is-fresh"><b>{media.fresh.from}</b><span>{media.fresh.text}</span><time>{media.fresh.time}</time></li>}
      </ol>;
    case 'conditions':
      return <ol className="na-conditions" aria-label="Lo que fue cambiando">
        {media.before.map(text => <li key={text}>{text}</li>)}
        {media.now && <li className="is-now">{media.now}</li>}
      </ol>;
    case 'plaque':
      return <figure className="na-plaque"><figcaption><b>{media.object}</b><span>{media.year}</span></figcaption><p>{media.text}</p></figure>;
    case 'items':
      return <ul className="na-items">{media.items.map(item => <li key={item.id}>
        <button type="button" aria-expanded={item.seen} onClick={() => onInspect(item.id)}><b>{item.label}</b>{item.seen ? <span>{item.detail}</span> : <small>Mirar</small>}</button>
      </li>)}</ul>;
    case 'taboo':
      return <div className="na-taboo"><p><span>Buscas</span>{media.need}</p><p><span>Sin decir</span>{media.banned.map(word => <s key={word}>{word}</s>)}</p></div>;
    case 'people':
      return <ul className="na-people">{media.people.map(person => <li key={person.name}><b>{person.name}</b><span>{person.wants}</span><small>{person.reason}</small></li>)}</ul>;
    default:
      return null;
  }
}

function BeatView({ beat, onChoose, onInspect }: { beat: Beat; onChoose: (id: string) => void; onInspect: (id: string) => void }) {
  const shaded = beat.kind === 'result' || beat.kind === 'change';
  return <>
    {beat.chosen && <p className="na-chosen"><span>Elegiste</span>{beat.chosen}</p>}
    {(beat.context || (shaded && beat.label)) && <div className={shaded ? 'na-outcome' : 'na-context'}>
      {shaded && beat.label && <p className="na-outcome-label">{beat.label}</p>}
      {beat.context && <p>{beat.context}</p>}
    </div>}
    {beat.media && <MediaBlock media={beat.media} onInspect={onInspect} />}
    {beat.prompt && <p className="na-ask">{beat.prompt}</p>}
    {beat.options && <ol className="na-options">{beat.options.map((option, i) => <li key={option.id}>
      <button type="button" onClick={() => onChoose(option.id)}>
        <kbd>{LETTERS[i]}</kbd>
        <span>{option.label}{option.facts && <small>{option.facts.map(fact => <i key={fact}>{fact}</i>)}</small>}</span>
      </button>
    </li>)}</ol>}
  </>;
}

function ActivityCard({ view, state, teacher, world, inside, onChoose, onInspect, onPrevious, onPreviousActivity, onNext, onOther, onPick, onRestart, onDone, onBack, onLeave }: {
  view: View; state: NightState; teacher: boolean; world: boolean; inside: boolean;
  onChoose: (id: string) => void; onInspect: (id: string) => void; onPrevious: () => void; onPreviousActivity: () => void; onNext: () => void; onOther: () => void; onPick: (id: string) => void;
  onRestart: () => void; onDone: () => void; onBack: () => void; onLeave: () => void;
}) {
  const { TEACHER_MOVES } = contentFor(state.level);
  const { location, mechanic } = view;
  const [help, setHelp] = useState(false);
  const focusRef = useRef<HTMLDivElement>(null);
  const stepKey = view.activity ? `${view.activity.id}-${view.index}` : 'hub';
  useEffect(() => { focusRef.current?.focus({ preventScroll: true }); }, [stepKey]);
  const taxi = location.id === 'taxi' && (!worldOutcome(state) || worldOutcome(state)?.location === 'taxi');
  const exitLabel = taxi ? 'Bajar del taxi' : inside && view.activity ? 'Seguir recorriendo' : view.activity && location.hub && !world ? 'Volver' : 'Volver a la calle';
  const exitKey = taxi ? 'F' : 'Esc';
  const encounter = state.encounters[location.id];

  // Number keys or letters pick an option, like a game menu.
  const onKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!view.activity) return;
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === 'ArrowLeft' && view.index > 0) { event.preventDefault(); event.stopPropagation(); onPrevious(); return; }
    if (event.key === 'ArrowRight' && !view.last && (view.beat.kind !== 'choose' || view.progress.choice)) { event.preventDefault(); event.stopPropagation(); onNext(); return; }
    if (view.beat.kind !== 'choose' || !view.beat.options) return;
    const index = /^[1-4]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    const option = view.beat.options[index];
    if (option && !event.metaKey && !event.ctrlKey && !event.altKey) { event.preventDefault(); onChoose(option.id); }
  };

  const canGo = view.activity && !view.last && (view.beat.kind !== 'choose' || view.progress.choice !== null) && (view.beat.kind !== 'inspect' || view.progress.seen.length >= 2);
  return <section className={`na-card${world ? ' is-world' : ''}`} aria-labelledby="na-card-title" data-type={location.type} data-beat={view.activity ? view.beat.kind : 'hub'} data-step={view.activity ? view.index : -1} onKeyDown={onKey}>
    <header className="na-card-head">
      <p className="na-card-place"><span>{worldOutcome(state)?.label ?? location.name}</span><em>{mechanic.mechanic}</em></p>
      <button type="button" className="na-close" onClick={view.activity && location.hub && !world ? onBack : inside && !view.activity ? onLeave : onBack} aria-label={exitLabel}>×</button>
    </header>

    {!view.activity ? <div className="na-card-body" ref={focusRef} tabIndex={-1}>
      <h2 id="na-card-title">{location.name}</h2>
      <p className="na-context">{location.hubPrompt}</p>
      <ul className="na-hub">{location.activities.map(activity => {
        const played = encounter?.acts[activity.id]?.done;
        return <li key={activity.id}><button type="button" onClick={() => onPick(activity.id)}>
          <b>{activity.title}</b><span>{activity.who ?? activity.object}</span>{played && <em aria-label="ya lo hiciste">✓</em>}
        </button></li>;
      })}</ul>
    </div> : <div className="na-card-body" ref={focusRef} tabIndex={-1} aria-live="polite">
      <div className="na-card-title">
        <h2 id="na-card-title">{view.activity.title}</h2>
        {view.total > 1 && <ol className="na-steps" aria-label={`Paso ${view.index + 1} de ${view.total}`}>{view.beats.map((_, i) => <li key={i} className={i < view.index ? 'is-past' : i === view.index ? 'is-now' : ''} />)}</ol>}
      </div>
      <div className="na-beat" key={stepKey}>
        <BeatView beat={view.beat} onChoose={onChoose} onInspect={onInspect} />
      </div>
    </div>}

    {view.activity && location.activities.length > 1 && <nav className="na-situation-nav" aria-label="Ejercicios del lugar">
      <button type="button" className="na-secondary" onClick={onPreviousActivity}>← Ejercicio anterior</button>
      <button type="button" className="na-secondary" onClick={onOther}>Ejercicio siguiente →</button>
    </nav>}
    {help && <HelpPanel help={location.help} grammar={location.grammar} />}

    <footer className="na-card-foot">
      <button type="button" className={`na-help-toggle${help ? ' is-open' : ''}`} aria-expanded={help} aria-controls="na-help" onClick={() => setHelp(value => !value)}>
        {location.grammar ? 'Ayuda y gramática' : 'Necesito ayuda'}
      </button>
      <div className="na-actions">
        <button type="button" className="na-secondary" onClick={inside && !view.activity ? onLeave : onBack}>{exitLabel}{world && <kbd>{exitKey}</kbd>}</button>
        {view.activity && <nav className="na-question-nav" aria-label="Preguntas del ejercicio">
          <button type="button" className="na-secondary" aria-label="Pregunta anterior" disabled={view.index === 0} onClick={onPrevious}>←</button>
          <span>{view.index + 1} / {view.total}</span>
          <button type="button" className="na-primary" aria-label="Pregunta siguiente" disabled={!canGo} onClick={onNext}>→</button>
        </nav>}
      </div>
    </footer>

    {teacher && view.activity && <details className="na-teacher" open>
      <summary>Profe</summary>
      {view.activity.role && <p><b>Tu papel:</b> {view.activity.role}</p>}
      {view.activity.teacher && <ul>{view.activity.teacher.map(item => <li key={item}>{item}</li>)}</ul>}
      <div className="na-row">
        {!location.hub && location.activities.length > 1 && <button type="button" className="na-secondary" onClick={onOther}>Otra situación</button>}
        <button type="button" className="na-secondary" onClick={onRestart}>Empezar de nuevo</button>
        <button type="button" className="na-secondary" aria-pressed={view.progress.done} disabled={view.progress.done} onClick={onDone}>{view.progress.done ? 'Terminado' : 'Dar por terminado'}</button>
      </div>
      <ul className="na-moves">{TEACHER_MOVES.map(item => <li key={item.id}><b>{item.label}:</b> {item.line}</li>)}</ul>
    </details>}
  </section>;
}

function EventCard({ state, eventId, teacher, onContinue }: { state: NightState; eventId: string; teacher: boolean; onContinue: () => void }) {
  const { CITY_EVENTS } = contentFor(state.level);
  const event = CITY_EVENTS.find(item => item.id === eventId)!;
  const [prompt, setPrompt] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, []);
  const night = nightSummary(state);
  const lastPrompt = prompt >= event.prompts.length - 1;
  return <section className="na-event" aria-labelledby="na-event-title">
    <p className="na-kicker">{nightClock(state)} · Algo cambia</p>
    <h2 id="na-event-title" ref={heading} tabIndex={-1}>{event.title}</h2>
    <p className="na-situation">{event.text}</p>
    <ol className="na-trail" aria-label="Tu noche hasta ahora">{night.map(item => <li key={item.id} className={event.affects.includes(item.id) ? 'is-affected' : ''}>
      <b>{item.name}</b>{item.choices[0] ? <span>{item.choices[0]}</span> : item.situations[0] && <span>{item.situations[0]}</span>}{event.affects.includes(item.id) && <small>Esto cambia</small>}
    </li>)}</ol>
    <p className="na-ask" key={prompt}>{event.prompts[prompt]}</p>
    {teacher && <p className="na-teacher-note">{event.teacher}</p>}
    <div className="na-row">
      <button type="button" className="na-secondary" disabled={prompt === 0} aria-label="Pregunta anterior" onClick={() => setPrompt(value => value - 1)}>←</button>
      <button type="button" className="na-primary" disabled={lastPrompt} aria-label="Pregunta siguiente" onClick={() => setPrompt(value => value + 1)}>→</button>
      <button type="button" className={lastPrompt ? 'na-primary' : 'na-secondary'} onClick={onContinue}>Seguir con el nuevo plan</button>
    </div>
  </section>;
}

function FinalRecap({ state, teacher, onToggle, onReset }: { state: NightState; teacher: boolean; onToggle: (id: string) => void; onReset: () => void }) {
  const { CITY_EVENTS, FINAL } = contentFor(state.level);
  const [prompt, setPrompt] = useState(0);
  const [help, setHelp] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, []);
  const night = nightSummary(state);
  const event = state.event ? CITY_EVENTS.find(item => item.id === state.event!.id) : null;
  const questions = [...FINAL.prompts, FINAL.hypothetical];
  const isHypothetical = prompt === questions.length - 1;
  return <section className="na-final" aria-labelledby="na-final-title">
    <p className="na-kicker">{nightClock(state)} · Vuelta a casa</p>
    <h2 id="na-final-title" ref={heading} tabIndex={-1}>{FINAL.title}</h2>
    <ol className="na-trail" aria-label="Tu recorrido">
      {night.map(item => <li key={item.id}><b>{item.name}</b>{item.situations.length > 0 && <span>{item.situations.join(' · ')}</span>}{item.choices.length > 0 && <small>{item.choices.join(' · ')}</small>}</li>)}
      {event && <li className="is-affected"><b>{event.title}</b></li>}
    </ol>
    <p className={isHypothetical ? 'na-ask is-hypothetical' : 'na-ask'} key={prompt}>{questions[prompt]}</p>
    <div className="na-row">
      {prompt > 0 && <button type="button" className="na-secondary" onClick={() => setPrompt(value => value - 1)}>← Anterior</button>}
      {!isHypothetical && <button type="button" className="na-primary" onClick={() => setPrompt(value => value + 1)}>Siguiente →</button>}
      <button type="button" className={`na-help-toggle${help ? ' is-open' : ''}`} aria-expanded={help} onClick={() => setHelp(value => !value)}>Necesito ayuda</button>
    </div>
    {help && <HelpPanel help={FINAL.help} />}
    {teacher && <aside className="na-teacher" aria-label="Observación del profe">
      <p className="na-teacher-title">Profe · qué escuchar</p>
      <ul className="na-criteria">{FINAL.criteria.map(item => <li key={item.id}>
        <button type="button" aria-pressed={Boolean(state.final.criteria[item.id])} onClick={() => onToggle(item.id)}>
          <b>{item.label}</b><span>{item.detail}</span><small>{state.final.criteria[item.id] ? 'Lo escuché' : 'Todavía no'}</small>
        </button>
      </li>)}</ul>
    </aside>}
    <div className="na-row na-end">
      <button type="button" className="na-secondary" onClick={onReset}>Empezar la noche otra vez</button>
      <Link href="/" className="na-secondary">Volver a la biblioteca</Link>
    </div>
  </section>;
}

function TeacherDesk({ state, onTrigger, onReset }: { state: NightState; onTrigger: (id: string) => void; onReset: () => void }) {
  const { CITY_EVENTS, ROUTE_PLAN } = contentFor(state.level);
  const canTrigger = !state.event && state.phase !== 'cierre' && state.phase !== 'llegada';
  const now = state.phase === 'encuentro' || state.phase === 'ciudad' ? 'exploracion' : state.phase;
  const level: Level = isLevel(state.level) ? state.level : DEFAULT_LEVEL;
  return <aside className="na-desk" aria-label="Plan del profe">
    <div className="na-desk-level">
      <p className="na-teacher-title">Nivel activo · {level}</p>
      <p><b>{LEVEL_INFO[level].name}.</b> {LEVEL_INFO[level].demand}</p>
    </div>
    <div>
      <p className="na-teacher-title">Plan de la clase</p>
      <ol>{ROUTE_PLAN.map(item => <li key={item.id} className={item.id === now ? 'is-now' : ''}>
        <b>{item.title} · {item.minutes} min</b><span>{item.note}</span>
      </li>)}</ol>
    </div>
    <div>
      <p className="na-teacher-title">Cambiar la ciudad</p>
      {state.event ? <p className="na-muted">Ya pasó: {CITY_EVENTS.find(item => item.id === state.event!.id)?.title}.</p>
        : <div className="na-row">{CITY_EVENTS.map(item => <button type="button" key={item.id} className="na-secondary" disabled={!canTrigger || state.phase === 'encuentro'} onClick={() => onTrigger(item.id)}>{item.title}</button>)}</div>}
      <p className="na-muted">Si no lo activas, pasa solo después del cuarto lugar.</p>
    </div>
    <div>
      <p className="na-teacher-title">Los juegos del barrio</p>
      <ul className="na-desk-games">{LOCATIONS.map((item: Location) => <li key={item.id}><b>{item.short}</b> {item.focus}</li>)}</ul>
    </div>
    <button type="button" className="na-secondary" onClick={onReset}>Empezar la noche otra vez</button>
  </aside>;
}
