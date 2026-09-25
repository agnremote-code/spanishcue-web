'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { ConversationFamily } from '../conversation-families/ConversationFamily';
import content from './content.json';
import { WORLD, cameraOffset, canHandleKeys, nearestStop, stepMotion } from './engine.mjs';
import { CityDialogue, CityGuide, type Choice, type Stop } from './CityDialogue';
import './city.css';

const stops: Stop[] = content.stops;
const asset = (name: string) => `/la-ciudad-no-duerme/${name}.webp`;
type View = 'intro' | 'street' | 'focus' | 'ending';
const levels = ['B1'] as const;

export default function CityGame() {
  return <ConversationFamily id="la-ciudad-no-duerme" title={content.title} levels={levels} defaultLevel="B1">
    {() => <CityExperience />}
  </ConversationFamily>;
}

function CityExperience() {
  const [view, setView] = useState<View>('intro');
  const [actor, setActor] = useState({ x: 250, moving: false, facing: 1 });
  const [size, setSize] = useState({ width: 1200, height: 700 });
  const [activeId, setActiveId] = useState('car');
  const [choice, setChoice] = useState<Choice | null>(null);
  const [twist, setTwist] = useState(false);
  const [visited, setVisited] = useState<string[]>([]);
  const [guide, setGuide] = useState(false);
  const [map, setMap] = useState(false);
  const [endingPlace, setEndingPlace] = useState<string | null>(null);
  const [finalQuestion, setFinalQuestion] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [missingArt, setMissingArt] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const motor = useRef({ x: 250, direction: 0, target: null as number | null, destination: null as string | null });
  const held = useRef(new Set<string>());
  const active = stops.find(stop => stop.id === activeId)!;
  const nearby = nearestStop(actor.x, stops, 155);
  const scale = Math.max(size.height / 1120, .4);
  const offset = cameraOffset(actor.x, size.width, scale);
  const worldTop = size.height - WORLD.floorY * scale - (size.width < 600 ? 115 : 110);
  const focusScene = choice?.scene || active.scene;

  const stopMovement = useCallback(() => {
    held.current.clear();
    motor.current.direction = 0;
    motor.current.target = null;
    motor.current.destination = null;
    setActor(current => current.moving ? { ...current, moving: false } : current);
  }, []);

  const openStop = useCallback((id: string) => {
    stopMovement();
    setActiveId(id);
    setChoice(null);
    setTwist(false);
    setMap(false);
    setView('focus');
  }, [stopMovement]);

  const returnToStreet = useCallback(() => {
    stopMovement();
    setView('street');
    setMap(false);
    // Wait for the street to become interactive again before restoring focus.
    requestAnimationFrame(() => stage.current?.focus({ preventScroll: true }));
  }, [stopMovement]);

  const travelTo = useCallback((id: string) => {
    const destination = stops.find(stop => stop.id === id);
    if (!destination) return;
    stopMovement();
    setMap(false);
    setView('street');
    motor.current.target = destination.x;
    motor.current.destination = id;
    requestAnimationFrame(() => stage.current?.focus({ preventScroll: true }));
  }, [stopMovement]);

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const measure = () => setSize({ width: element.clientWidth, height: element.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const readMotion = () => setReduced(media.matches);
    readMotion();
    media.addEventListener('change', readMotion);
    return () => { observer.disconnect(); media.removeEventListener('change', readMotion); };
  }, []);

  useEffect(() => {
    if (view !== 'street' || guide || map) return;
    let frame = 0;
    let previous = 0;
    const tick = (now: number) => {
      const seconds = previous ? (now - previous) / 1000 : 0;
      previous = now;
      const next = stepMotion(motor.current, seconds);
      motor.current.x = next.x;
      setActor(current => next.moving || current.moving ? {
        x: next.x, moving: next.moving, facing: next.moving ? next.facing : current.facing,
      } : current);
      if (next.arrived && motor.current.destination) {
        openStop(motor.current.destination);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [view, guide, map, openStop]);

  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'Escape') {
        if (guide) setGuide(false);
        else if (map) setMap(false);
        else if (view === 'focus' || view === 'ending') returnToStreet();
        return;
      }
      if (view !== 'street' || guide || map || !canHandleKeys(event.target)) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        held.current.add(event.key);
        motor.current.target = null;
        motor.current.destination = null;
        motor.current.direction = Number(held.current.has('ArrowRight')) - Number(held.current.has('ArrowLeft'));
      } else if ((event.key === 'Enter' || event.key === ' ') && !event.repeat) {
        event.preventDefault();
        const closest = nearestStop(motor.current.x, stops, 155);
        if (closest) openStop(closest.id);
      }
    };
    const keyup = (event: KeyboardEvent) => {
      held.current.delete(event.key);
      motor.current.direction = Number(held.current.has('ArrowRight')) - Number(held.current.has('ArrowLeft'));
    };
    const visibility = () => { if (document.hidden) stopMovement(); };
    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', keyup);
    window.addEventListener('blur', stopMovement);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      window.removeEventListener('keydown', keydown);
      window.removeEventListener('keyup', keyup);
      window.removeEventListener('blur', stopMovement);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [view, guide, map, openStop, returnToStreet, stopMovement]);

  const movePointer = (event: PointerEvent<HTMLButtonElement>, direction: number) => {
    event.preventDefault();
    stopMovement();
    stage.current?.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    motor.current.direction = direction;
  };

  const choose = (next: Choice) => {
    setChoice(next);
    setVisited(current => current.includes(activeId) ? current : [...current, activeId]);
  };

  const beginEnding = () => {
    stopMovement();
    setEndingPlace(null);
    setFinalQuestion(0);
    setView('ending');
  };

  const focusStyle = focusScene === 'street' ? {
    backgroundImage: `url(${asset('district')})`,
    backgroundPosition: `${(active.x / WORLD.width) * 100}% 48%`,
  } : { backgroundImage: `url(${asset(focusScene)})` };

  return <main className={`city-game${reduced ? ' city-reduced' : ''}`} aria-label="La ciudad no duerme, conversación B1">
    <header className="city-header">
      <Link href="/" className="city-brand" aria-label="SPANISHCUE, volver a la biblioteca">SPANISH<span>CUE</span><i>↗</i></Link>
      <span className="city-header-name">LA CIUDAD NO DUERME</span>
      <div className="city-header-actions">
        <span className="city-badge">B1</span>
        <button onClick={() => { stopMovement(); setGuide(true); }}>Guía docente</button>
        {view !== 'intro' && <button className="city-end-link" onClick={beginEnding}>Cerrar la noche ↗</button>}
      </div>
    </header>

    <div ref={stage} className={`city-stage city-view-${view}`} tabIndex={0} aria-label="Calle explorable. Flechas para caminar. Enter o espacio para interactuar." data-player-x={Math.round(actor.x)} data-moving={actor.moving}>
      <div className={`city-world${view === 'focus' ? ' city-world-focused' : ''}`} aria-hidden={view !== 'street'} inert={view !== 'street' || guide || map} style={{ transform: `translate(${-offset}px, ${worldTop}px) scale(${scale})`, width: WORLD.width, height: WORLD.height }}>
        {/* The authored panorama provides depth; player, lighting and road are independent planes. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="city-panorama" src={asset('district')} width={2172} height={724} alt="Un barrio al anochecer: auto rojo, bar, parada, almacén, pasaje, edificio, taxi, plaza, local cerrado y esquina." draggable={false} onError={() => setMissingArt(true)} />
        <div className="city-window-glow" aria-hidden="true" />
        {stops.map((stop, index) => <button
          key={stop.id}
          className={`city-hotspot${nearby?.id === stop.id ? ' is-near' : ''}${visited.includes(stop.id) ? ' is-visited' : ''}`}
          style={{ left: stop.x, top: stop.y, '--pin-scale': 1 / scale } as CSSProperties}
          onClick={() => travelTo(stop.id)}
          onFocus={() => { /* Focusing keeps navigation native; activating starts the walk. */ }}
          aria-label={`Ir a ${stop.name}${visited.includes(stop.id) ? ', ya conversado' : ''}`}
          title={stop.name}
        ><span className="city-hotspot-label">{stop.sign}</span><span className="city-pin">{String(index + 1).padStart(2, '0')}</span></button>)}
        <div className={`city-avatar${actor.moving ? ' is-walking' : ''}`} style={{ left: actor.x, top: WORLD.floorY, '--facing': actor.facing } as CSSProperties} role="img" aria-label="La mascota de SPANISHCUE recorre el barrio">
          <span className="city-avatar-shadow" />
          <span className="city-avatar-sprite" />
        </div>
      </div>
      <div className="city-road-plane" aria-hidden="true" style={{ backgroundImage: `url(${asset('district')})`, backgroundSize: `${WORLD.width * scale * 1.1}px ${WORLD.height * scale * 1.1}px`, backgroundPosition: `${-offset * 1.12}px bottom` }} />
      <div className="city-vignette" aria-hidden="true" />

      {view === 'intro' && <section className="city-intro" aria-labelledby="city-title">
        <div className="city-kicker"><span /> BARRIO DEL SUR · 23:40</div>
        <h1 id="city-title">LA CIUDAD<br />NO <em>DUERME.</em></h1>
        <p>Una calle. Mil formas de verla.</p>
        <p className="city-intro-copy">Recorré el barrio. Elegí dónde parar.<br />Hablá de lo que pasa.</p>
        <button className="city-primary" onClick={returnToStreet}>SALIR A LA CALLE <span>→</span></button>
        <div className="city-intro-controls"><kbd>←</kbd><kbd>→</kbd> caminar <span>·</span> <kbd>↵</kbd> acercarte</div>
        <small>CONVERSACIÓN B1 <span> / </span> ≈ 45 MIN <span> / </span> A TU RITMO</small>
      </section>}

      {view === 'street' && <>
        <div className="city-location"><span>BARRIO DEL SUR</span><strong>{nearby?.name || 'Entre una esquina y otra'}</strong></div>
        <div className="city-explore-note">Cuando algo llame tu atención, acercate.</div>
        <div className="city-bottom">
          <button className="city-map-toggle" onClick={() => { stopMovement(); setMap(true); }}><span className="city-map-glyph" aria-hidden="true">▤</span><span>EL BARRIO<small>{visited.length} de 10 lugares conversados</small></span></button>
          <div className="city-controls" aria-label="Controles de movimiento">
            <button aria-label="Caminar a la izquierda" onPointerDown={event => movePointer(event, -1)} onPointerUp={stopMovement} onPointerCancel={stopMovement} onLostPointerCapture={stopMovement} onClick={event => { if (event.detail === 0) travelTo([...stops].reverse().find(stop => stop.x < actor.x - 20)?.id || stops[0].id); }}>←</button>
            <button className="city-interact" disabled={!nearby} onClick={() => nearby && openStop(nearby.id)}><span>{nearby ? 'ACERCARME' : 'EXPLORÁ'}</span><kbd>↵</kbd></button>
            <button aria-label="Caminar a la derecha" onPointerDown={event => movePointer(event, 1)} onPointerUp={stopMovement} onPointerCancel={stopMovement} onLostPointerCapture={stopMovement} onClick={event => { if (event.detail === 0) travelTo(stops.find(stop => stop.x > actor.x + 20)?.id || stops.at(-1)!.id); }}>→</button>
          </div>
          <span className="city-walking-hint"><kbd>←</kbd> <kbd>→</kbd> Avanzá por la ciudad</span>
        </div>
        <span className="city-sr-only" role="status">{nearby ? `Cerca de ${nearby.name}. Enter para acercarte.` : 'Seguí explorando la calle.'}</span>
      </>}

      {view === 'focus' && <CityDialogue
        key={active.id}
        stop={active}
        choice={choice}
        twist={twist}
        style={focusStyle}
        onChoice={choose}
        onTwist={() => { setChoice(null); setTwist(true); }}
        onReconsider={() => setChoice(null)}
        onReturn={returnToStreet}
        onTravel={travelTo}
      />}

      {view === 'ending' && <section className="city-finale" aria-labelledby="city-final-title">
        <div className="city-finale-image" style={{ backgroundImage: `url(${asset(endingPlace === 'bar' ? 'bar' : 'rooftop')})` }} />
        <button className="city-scene-back" onClick={returnToStreet}>← VOLVER A LA CIUDAD</button>
        <div className="city-finale-copy">
          <div className="city-kicker">LA ÚLTIMA PARADA</div>
          {!endingPlace ? <>
            <h2 id="city-final-title">¿Dónde termina<br />tu noche?</h2>
            <p>Elegí un lugar para mirar atrás.</p>
            <div className="city-ending-places">
              <button onClick={() => setEndingPlace('rooftop')}>En la terraza <span>La ciudad, desde arriba ↗</span></button>
              <button onClick={() => setEndingPlace('bar')}>En el bar <span>Una última conversación ↗</span></button>
            </div>
          </> : <>
            <span className="city-ending-location">{endingPlace === 'rooftop' ? 'EN LA TERRAZA' : 'DE VUELTA EN LA ESQUINA'}</span>
            <h2 id="city-final-title">{content.finale.intro}</h2>
            <p className="city-final-question" aria-live="polite">{content.finale.questions[finalQuestion]}</p>
            <nav className="city-final-nav" aria-label="Preguntas de cierre"><button disabled={finalQuestion === 0} onClick={() => setFinalQuestion(n => n - 1)}>← Anterior</button><span>{finalQuestion + 1} / 5</span><button disabled={finalQuestion === 4} onClick={() => setFinalQuestion(n => n + 1)}>Otra pregunta →</button></nav>
            <div className="city-finish-mark">FIN DEL RECORRIDO</div>
            <button className="city-primary" onClick={returnToStreet}>VOLVER A LA CIUDAD <span>↗</span></button>
          </>}
        </div>
      </section>}

      {missingArt && <p className="city-asset-error" role="alert">No se pudo cargar el barrio. Recargá la página para volver a intentarlo.</p>}
    </div>

    {guide && <CityGuide onClose={() => { setGuide(false); requestAnimationFrame(() => stage.current?.focus({ preventScroll: true })); }} />}
    {map && <CityMap visited={visited} onTravel={travelTo} onClose={() => { setMap(false); stage.current?.focus({ preventScroll: true }); }} />}
  </main>;
}

function CityMap({ visited, onTravel, onClose }: { visited: string[]; onTravel: (id: string) => void; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { dialog.current?.showModal(); }, []);
  return <dialog className="city-modal city-map-modal" ref={dialog} onCancel={onClose} aria-labelledby="city-map-title">
    <button className="city-modal-close" onClick={onClose} aria-label="Cerrar el mapa">×</button>
    <div className="city-kicker">A PIE, A TU RITMO</div><h2 id="city-map-title">Elegí tu próxima parada.</h2>
    <p>El personaje camina hasta el lugar que elijas.</p>
    <nav aria-label="Lugares del barrio">{stops.map((stop, index) => <button key={stop.id} onClick={() => onTravel(stop.id)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stop.name}<small>{stop.topic}</small></strong><i>{visited.includes(stop.id) ? 'Volver ↗' : 'Ir →'}</i></button>)}</nav>
  </dialog>;
}
