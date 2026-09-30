'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type ComponentType, type CSSProperties } from 'react';
import CityScene from './CityScene';
import {
  ARRIVAL, CITY_EVENTS, FINAL, LOCATIONS, ROUTE_PLAN, TEACHER_MOVES, TWIST_QUESTION, TWIST_STEP,
  chooseReaction, completedIds, finalAvailable, initialState, inspectItem, isValidState, leaveLocation,
  locationById, markDone, nextStep, nightClock, nightSummary, openFinal, openLocation, resolveEvent, setVariant,
  startExploring, stepCount, toggleCriterion, triggerEvent,
  type Help, type Location, type NightState, type Variant,
} from './engine.mjs';
import { ARRIVAL_SPOT, PLACES, VIEWBOX, iso } from './scene.mjs';
import type { WorldProps } from './World3D';
import './noche-abierta.css';

// v2: encounters gained a "new information" step, so older saved steps no longer line up.
const STORAGE_KEY = 'spanishcue:noche-abierta:v2';
const VIEW_KEY = 'spanishcue:noche-abierta:vista';
const places = LOCATIONS.map(({ id, name, short }) => ({ id, name, short }));
type View = 'map' | 'loading' | '3d';

function webglAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch { return false; }
}

function focusWorld() {
  window.setTimeout(() => (document.querySelector('.na-world') as HTMLElement | null)?.focus({ preventScroll: true }), 60);
}

function readSaved(): NightState | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw);
    return isValidState(value) ? value : null;
  } catch { return null; }
}

function useNarrow() {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px)');
    const update = () => setNarrow(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return narrow;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export default function NocheAbierta({ initial }: { initial?: NightState }) {
  const [state, setState] = useState<NightState>(initial ?? initialState());
  const [teacher, setTeacher] = useState(false);
  const [placesOpen, setPlacesOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const restored = useRef(Boolean(initial));
  const scroller = useRef<HTMLDivElement>(null);
  const narrow = useNarrow();
  const reducedMotion = useReducedMotion();
  // The 3D street loads after the page is interactive; the SVG map is the
  // server render, the loading state and the fallback without WebGL.
  const [view, setView] = useState<View>('map');
  const [canUse3d, setCanUse3d] = useState(false);
  const [World, setWorld] = useState<ComponentType<WorldProps> | null>(null);
  const [goTo, setGoTo] = useState<{ id: string; n: number } | null>(null);

  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    const saved = readSaved();
    // Restoring saved progress after hydration is an external-store sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setState(saved);
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
    if (next === 'map') setView('map');
    else if (World) setView('3d');
    else load3d();
  };
  const fail3d = useCallback(() => { setCanUse3d(false); setView('map'); }, []);
  const in3d = view === '3d' && Boolean(World);

  const done = completedIds(state);
  const location = state.phase === 'encuentro' && state.position ? locationById(state.position) : null;
  const event = state.event ? CITY_EVENTS.find(item => item.id === state.event!.id) ?? null : null;
  const standing = state.position ? PLACES[state.position].spot : ARRIVAL_SPOT;
  const focus = location ? location.id : null;
  const exploring = state.phase === 'ciudad';

  const open = useCallback((id: string) => { setPlacesOpen(false); setState(current => openLocation(current, id)); }, []);
  // In 3D the list walks you to the place; you still press E to go in.
  const walkTo = useCallback((id: string) => {
    setPlacesOpen(false);
    setGoTo(current => ({ id, n: (current?.n ?? 0) + 1 }));
    focusWorld();
  }, []);
  const leave = useCallback(() => {
    setState(current => {
      if (!current.position) return current;
      const id = current.position;
      if (document.querySelector('.na-world')) focusWorld();
      else window.setTimeout(() => (document.querySelector(`[data-place="${id}"]`) as HTMLElement | null)?.focus({ preventScroll: true }), 60);
      return leaveLocation(current, id);
    });
  }, []);
  const reset = () => {
    setConfirmReset(false);
    setPlacesOpen(false);
    setState(initialState());
    try { window.sessionStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  };

  useEffect(() => {
    if (state.phase !== 'encuentro') return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      // Esc leaves any place; F also gets you out of the taxi.
      if (event.key === 'Escape' || (event.code === 'KeyF' && !typing && state.position === 'taxi')) leave();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.phase, state.position, leave]);

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
      <nav className="na-tools" aria-label="Herramientas de la clase">
        {canUse3d && <button type="button" className="na-tool" onClick={switchView} aria-label={view === 'map' ? 'Ver el barrio en 3D' : 'Ver el mapa en 2D'}>{view === 'map' ? '3D' : '2D'}</button>}
        {state.phase !== 'llegada' && state.phase !== 'cierre' && <button type="button" className="na-tool" aria-expanded={placesOpen} aria-controls="na-places" onClick={() => setPlacesOpen(value => !value)}>Lugares</button>}
        <button type="button" className="na-tool" aria-pressed={teacher} onClick={() => setTeacher(value => !value)}>Profe</button>
      </nav>
    </header>

    <div className="na-stage">
      {in3d && World ? <World phase={state.phase} active={location ? location.id : null} last={state.position} done={done} event={state.event?.id ?? null}
        goTo={goTo} narrow={narrow} reducedMotion={reducedMotion} onInteract={open} onFail={fail3d} />
        : <div className="na-scroll" ref={scroller}>
          <div className="na-camera" style={camera}>
            <CityScene places={places} visited={state.visitOrder} done={done} position={state.position} standing={standing} focus={focus}
              weather={state.event?.id === 'lluvia' ? 'rain' : 'clear'} busOut={state.event?.id === 'transporte'} interactive={exploring} onOpen={open} />
          </div>
        </div>}
      {view === 'loading' && <p className="na-loading" role="status">Cargando el barrio en 3D…</p>}

      {placesOpen && state.phase !== 'cierre' && <PlacesList state={state} done={done} onOpen={in3d ? walkTo : open} onClose={() => setPlacesOpen(false)} disabled={!exploring} walk={in3d} />}

      {state.phase === 'llegada' && <Arrival teacher={teacher} onStart={() => { setState(current => startExploring(current)); if (in3d) focusWorld(); }} />}

      {exploring && <div className={`na-hint${in3d ? ' is-world' : ''}`} role="status">
        {finalAvailable(state)
          ? <><p>La noche ya cambió. Podés seguir caminando o cerrar la noche.</p><button type="button" className="na-primary" onClick={() => setState(current => openFinal(current))}>Cerrar la noche</button></>
          : <p>{in3d
            ? (state.visitOrder.length ? 'Seguí caminando. Acercate a otro lugar y tocá E.' : 'Caminá por el barrio. Acercate a un lugar y tocá E.')
            : (state.visitOrder.length ? 'Elegí adónde seguir.' : 'Elegí adónde ir. No hace falta visitar todo.')}</p>}
      </div>}

      {location && state.position && <Encounter key={`${location.id}-${state.encounters[location.id].variant}`} location={location} state={state} teacher={teacher} world={in3d}
        onReact={id => setState(current => chooseReaction(current, location.id, id))}
        onInspect={id => setState(current => inspectItem(current, location.id, id))}
        onNext={() => setState(current => nextStep(current, location.id))}
        onVariant={() => setState(current => setVariant(current, location.id, current.encounters[location.id].variant + 1))}
        onDone={() => setState(current => markDone(current, location.id))}
        onLeave={leave} />}

      {state.phase === 'evento' && event && <EventCard state={state} eventId={event.id} teacher={teacher} onContinue={() => setState(current => resolveEvent(current))} />}

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

function Arrival({ teacher, onStart }: { teacher: boolean; onStart: () => void }) {
  const [question, setQuestion] = useState(0);
  return <section className="na-arrival" aria-labelledby="na-arrival-title">
    <p className="na-kicker">{ARRIVAL.kicker}</p>
    <h1 id="na-arrival-title">{ARRIVAL.title}</h1>
    <p className="na-premise">{ARRIVAL.premise}</p>
    <div className="na-warmup">
      <p className="na-question">{ARRIVAL.warmup[question]}</p>
      <button type="button" className="na-link" onClick={() => setQuestion(value => (value + 1) % ARRIVAL.warmup.length)}>Otra pregunta</button>
    </div>
    {teacher && <p className="na-teacher-note">{ARRIVAL.teacher}</p>}
    <button type="button" className="na-primary" onClick={onStart}>Empezar a caminar</button>
  </section>;
}

function PlacesList({ state, done, onOpen, onClose, disabled, walk = false }: { state: NightState; done: string[]; onOpen: (id: string) => void; onClose: () => void; disabled: boolean; walk?: boolean }) {
  return <section id="na-places" className="na-places" aria-label="Lugares del barrio">
    <div className="na-sheet-head"><h2>Lugares del barrio</h2><button type="button" className="na-close" onClick={onClose} aria-label="Cerrar la lista de lugares">×</button></div>
    {walk && <p className="na-muted">Elegí un lugar para ir caminando hasta ahí. Después tocá E.</p>}
    <ul>{LOCATIONS.map(item => {
      const status = state.position === item.id && state.phase === 'encuentro' ? 'Estás acá' : done.includes(item.id) ? 'Ya fuiste' : state.visitOrder.includes(item.id) ? 'Pasaste' : '';
      return <li key={item.id}><button type="button" disabled={disabled} onClick={() => onOpen(item.id)}>
        <span>{item.name}</span>{status && <small>{done.includes(item.id) ? '✓ ' : ''}{status}</small>}
      </button></li>;
    })}</ul>
    {disabled && <p className="na-muted">Terminá lo que estás haciendo para elegir otro lugar.</p>}
  </section>;
}

function HelpDrawer({ help, label = 'Necesito ayuda' }: { help: Help; label?: string }) {
  const [open, setOpen] = useState(false);
  return <div className={`na-help${open ? ' is-open' : ''}`}>
    <button type="button" className="na-help-toggle" aria-expanded={open} onClick={() => setOpen(value => !value)}>{label}</button>
    {open && <div className="na-help-body">
      <div><h3>Para empezar</h3><ul>{help.starters.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><h3>Expresiones útiles</h3><ul className="na-chips">{help.chunks.map(item => <li key={item}>{item}</li>)}</ul></div>
      {help.vocab && <div><h3>Palabras</h3><ul className="na-chips">{help.vocab.map(item => <li key={item}>{item}</li>)}</ul></div>}
    </div>}
  </div>;
}

function Cue({ location, variant, inspected, onInspect }: { location: Location; variant: Variant; inspected: string[]; onInspect: (id: string) => void }) {
  const cue = variant.cue;
  switch (location.kind) {
    case 'message':
      return <figure className="na-cue na-message"><figcaption><b>{cue.from}</b><span>{cue.time}</span></figcaption><blockquote>{cue.text}</blockquote></figure>;
    case 'inspect':
      return <div className="na-cue na-inspect"><p className="na-cue-label">Mirá alrededor</p><ul>{cue.items!.map(item => {
        const seen = inspected.includes(item.id);
        return <li key={item.id}><button type="button" aria-expanded={seen} onClick={() => onInspect(item.id)}><span>{item.label}</span>{seen && <em>{item.detail}</em>}</button></li>;
      })}</ul></div>;
    case 'recognize':
      return <div className="na-cue na-clues"><p className="na-cue-label">Lo que sabés</p><ul>{cue.clues!.map(item => <li key={item}>{item}</li>)}</ul></div>;
    case 'route':
      return <div className="na-cue na-routes">{cue.routes!.map(item => <div key={item.id}><b>{item.label}</b><span>{item.time}</span><p>{item.note}</p></div>)}</div>;
    case 'proposals':
    case 'vote':
      return <ul className="na-cue na-people">{cue.people!.map(item => <li key={item.name}><b>{item.name}</b><span>{item.wants}</span>{item.reason && <small>{item.reason}</small>}</li>)}</ul>;
    case 'versions':
      return <div className="na-cue na-versions">{cue.versions!.map(item => <blockquote key={item.who}><b>{item.who}</b>{item.text}</blockquote>)}</div>;
    case 'shelf':
      return <ul className="na-cue na-shelf">{cue.items!.map(item => <li key={item.id}><b>{item.label}</b><span>+ {item.pro}</span><span>− {item.con}</span></li>)}</ul>;
    case 'roadside':
      return <div className="na-cue na-roadside">
        <blockquote><b>{cue.speaker}</b>{cue.text}</blockquote>
        <p className="na-cue-label">Lo que ves</p>
        <ul>{cue.clues!.map(item => <li key={item}>{item}</li>)}</ul>
      </div>;
    default:
      return null;
  }
}

function Encounter({ location, state, teacher, world, onReact, onInspect, onNext, onVariant, onDone, onLeave }: {
  location: Location; state: NightState; teacher: boolean; world: boolean; onReact: (id: string) => void; onInspect: (id: string) => void;
  onNext: () => void; onVariant: () => void; onDone: () => void; onLeave: () => void;
}) {
  const encounter = state.encounters[location.id];
  const variant = location.variants[encounter.variant];
  const reaction = variant.reactions.find(item => item.id === encounter.reaction) ?? null;
  const last = stepCount(location, encounter.variant) - 1;
  const heading = useRef<HTMLHeadingElement>(null);
  const [twist, setTwist] = useState(false);
  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, [encounter.step]);
  const prompt = encounter.step > TWIST_STEP ? variant.prompts[encounter.step - TWIST_STEP - 1] : null;
  const exitLabel = location.id === 'taxi' ? 'Bajar del taxi' : 'Volver a la calle';
  return <section className={`na-panel${world ? ' is-world' : ''}`} aria-labelledby="na-encounter-title" data-kind={location.kind} data-step={encounter.step}>
    <div className="na-sheet-head">
      <p className="na-kicker">{location.name}</p>
      <button type="button" className="na-close" onClick={onLeave} aria-label={exitLabel}>×</button>
    </div>
    <h2 id="na-encounter-title" ref={heading} tabIndex={-1}>{variant.title}</h2>
    {encounter.step === 0 && <>
      <p className="na-situation">{variant.situation}</p>
      <Cue location={location} variant={variant} inspected={encounter.inspected} onInspect={onInspect} />
      <fieldset className="na-choices">
        <legend>¿Qué hacés?</legend>
        {variant.reactions.map(item => <button type="button" key={item.id} onClick={() => onReact(item.id)}>{item.label}</button>)}
      </fieldset>
    </>}
    {encounter.step === 1 && reaction && <div className="na-step">
      <p className="na-chosen">Elegiste: <b>{reaction.label}</b></p>
      <p className="na-prompt">{reaction.followUp}</p>
    </div>}
    {encounter.step === TWIST_STEP && <div className="na-step na-news">
      <p className="na-cue-label">Nueva información</p>
      <p className="na-situation">{variant.twist}</p>
      <p className="na-prompt">{TWIST_QUESTION}</p>
    </div>}
    {prompt && <div className="na-step"><p className="na-prompt">{prompt}</p></div>}
    <div className="na-panel-foot">
      <HelpDrawer help={location.help} />
      <div className="na-row">
        {encounter.step >= 1 && encounter.step < last && <button type="button" className="na-primary" onClick={onNext}>Seguir hablando</button>}
        <button type="button" className={encounter.step >= last ? 'na-primary' : 'na-secondary'} onClick={onLeave}>{exitLabel}{world && <kbd>{location.id === 'taxi' ? 'F' : 'Esc'}</kbd>}</button>
      </div>
    </div>
    {teacher && <aside className="na-teacher" aria-label="Herramientas del profe">
      <p className="na-teacher-title">Profe</p>
      <p><b>Personaje:</b> {variant.role}</p>
      <div className="na-row">
        <button type="button" className="na-secondary" onClick={onVariant}>Otra situación</button>
        <button type="button" className="na-secondary" aria-expanded={twist} onClick={() => setTwist(value => !value)}>Ver el giro</button>
        <button type="button" className="na-secondary" aria-pressed={encounter.done} disabled={encounter.done} onClick={onDone}>{encounter.done ? 'Terminado' : 'Dar por terminado'}</button>
      </div>
      {twist && <p className="na-twist">{variant.twist}</p>}
      <ul>{variant.followUps.map(item => <li key={item}>{item}</li>)}</ul>
      <ul className="na-moves">{TEACHER_MOVES.map(item => <li key={item.id}><b>{item.label}:</b> {item.line}</li>)}</ul>
    </aside>}
  </section>;
}

function EventCard({ state, eventId, teacher, onContinue }: { state: NightState; eventId: string; teacher: boolean; onContinue: () => void }) {
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
      <b>{item.name}</b>{item.choice && <span>{item.choice}</span>}{event.affects.includes(item.id) && <small>Esto cambia</small>}
    </li>)}</ol>
    <p className="na-prompt">{event.prompts[prompt]}</p>
    {teacher && <p className="na-teacher-note">{event.teacher}</p>}
    <div className="na-row">
      {!lastPrompt && <button type="button" className="na-primary" onClick={() => setPrompt(value => value + 1)}>Siguiente pregunta</button>}
      <button type="button" className={lastPrompt ? 'na-primary' : 'na-secondary'} onClick={onContinue}>Seguir con el nuevo plan</button>
    </div>
  </section>;
}

function FinalRecap({ state, teacher, onToggle, onReset }: { state: NightState; teacher: boolean; onToggle: (id: string) => void; onReset: () => void }) {
  const [prompt, setPrompt] = useState(0);
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
      {night.map(item => <li key={item.id}><b>{item.name}</b><span>{item.situation}</span>{item.choice && <small>{item.choice}</small>}</li>)}
      {event && <li className="is-affected"><b>{event.title}</b></li>}
    </ol>
    <p className={isHypothetical ? 'na-prompt is-hypothetical' : 'na-prompt'}>{questions[prompt]}</p>
    <div className="na-row">
      {prompt > 0 && <button type="button" className="na-secondary" onClick={() => setPrompt(value => value - 1)}>Anterior</button>}
      {!isHypothetical && <button type="button" className="na-primary" onClick={() => setPrompt(value => value + 1)}>Siguiente pregunta</button>}
    </div>
    <HelpDrawer help={FINAL.help} />
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
  const canTrigger = !state.event && state.phase !== 'cierre' && state.phase !== 'llegada';
  return <aside className="na-desk" aria-label="Plan del profe">
    <div>
      <p className="na-teacher-title">Plan de la clase</p>
      <ol>{ROUTE_PLAN.map(item => <li key={item.id} className={item.id === (state.phase === 'encuentro' ? 'exploracion' : state.phase === 'ciudad' ? 'exploracion' : state.phase === 'evento' ? 'evento' : state.phase) ? 'is-now' : ''}>
        <b>{item.title} · {item.minutes} min</b><span>{item.note}</span>
      </li>)}</ol>
    </div>
    <div>
      <p className="na-teacher-title">Cambiar la ciudad</p>
      {state.event ? <p className="na-muted">Ya pasó: {CITY_EVENTS.find(item => item.id === state.event!.id)?.title}.</p>
        : <div className="na-row">{CITY_EVENTS.map(item => <button type="button" key={item.id} className="na-secondary" disabled={!canTrigger || state.phase === 'encuentro'} onClick={() => onTrigger(item.id)}>{item.title}</button>)}</div>}
      <p className="na-muted">Si no lo activás, pasa solo después del cuarto encuentro.</p>
    </div>
    <button type="button" className="na-secondary" onClick={onReset}>Empezar la noche otra vez</button>
  </aside>;
}
