'use client';

// Más allá · the lesson around the 3D world: the title screen (level, «Con
// profesor» / «Por mi cuenta», Conversación / Comprensión auditiva), the
// death in ten seconds (rendered live, skippable), the Umbral and the first
// choice (Cielo or Infierno), the HUD, the encounter card with its deep
// question, the listening card shared with the other 3D worlds, the route for
// teachers (and for devices without WebGL) and the end: the «retrato de tu
// alma» drawn from your answers, and where you stay. Both modes live in the
// same world: switching never leaves it.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { StudentBar } from '../grammar-classroom/live/StudentBar';
import type { SyncState } from '../grammar-classroom/live/store';
import { setShoutMuted } from '../escucha-3d/shout';
import { CAST, SPOTS, WORLDS, ZONES, spotById } from './story.mjs';
import { LEVELS, loadLevel, type LevelContent } from './levels.mjs';
import { STORAGE_KEY, answer, answersFor, arrive, createState, decide, doneFor, fromSaved, goTo, markDone, nextSpot, normaliseLevel, resetLevel, restore, serialise, setLevel, toSaved, worldDone, type State } from './engine.mjs';
import { createAmbience, type Ambience, type Sound } from './ambience';
import { Encuentro, type Teaching } from './Encuentro';
import { Voz } from './Voz';
import { VOICES, loadVoices, voiceById, type VoiceText } from './voces.mjs';
import { Bi } from './Pregunta';
import type { Near, Pose, View } from './World3D';
import type { Text } from './levels.d.mts';
import './mas-alla.css';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="ma-loading">Cerrando los ojos…</div> });
export const LESSON_ID = 243;
const TOTAL = SPOTS.length;
const b = (es: string, en: string) => ({ es, en });

function webglAvailable() {
  try { const c = document.createElement('canvas'); return Boolean(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch { return false; }
}
const readPref = (key: string) => { try { return window.localStorage.getItem(key); } catch { return null; } };
const writePref = (key: string, value: string | null) => { try { if (value === null) window.localStorage.removeItem(key); else window.localStorage.setItem(key, value); } catch { /* private mode */ } };

// The words over the ten seconds of the death.
const CAPTIONS: { from: number; to: number; t: Text; tag?: boolean }[] = [
  { from: 0.2, to: 3.1, t: b('Hospital Santa Clara · habitación 7 · 03:12', 'Santa Clara Hospital · room 7 · 3:12 a.m.'), tag: true },
  { from: 3.4, to: 6.7, t: b('—Estamos todos aquí. Te queremos mucho.', '“We are all here. We love you so much.”') },
  { from: 7.5, to: 9.8, t: b('Y entonces, todo se vuelve luz.', 'And then, everything turns to light.') },
];
// What the people of each place say when you come near.
const GREETINGS: Record<string, string[]> = {
  umbral: ['¿Tú también acabas de llegar?', 'Nadie sabe cuánto tiempo llevamos aquí.', 'Dicen que se puede volver…'],
  cielo: ['Te estábamos esperando.', 'Aquí no hay prisa.', 'Ven, que no muerdo.', '¡Qué alegría verte!', 'Siéntate un rato.'],
  infierno: ['Tome su número.', '¿Primera vez por aquí?', 'Llegas tarde. Como siempre.', 'Aquí se habla claro.', 'Ponte cómodo. Si puedes.'],
};
const VERDICT_TEXT: Record<'cielo' | 'infierno' | 'volver', { label: Text; end: Text }> = {
  cielo: { label: b('Me quedo en el Cielo', 'I stay in Heaven'), end: b('Te quedas en la luz. Gabriel cierra tu expediente sin leerlo: ya no hace falta.', 'You stay in the light. Gabriel closes your file without reading it: there is no need any more.') },
  infierno: { label: b('Me quedo en el Infierno', 'I stay in Hell'), end: b('Te quedas abajo, donde se habla claro. Lucero te ofrece una silla y, por primera vez, alguien te pregunta qué piensas.', 'You stay below, where people speak plainly. Lucero offers you a chair and, for the first time, someone asks what you think.') },
  volver: { label: b('Quiero volver a vivir', 'I want to live again'), end: b('Abres los ojos. El llanto de un recién nacido, una luz blanca, alguien que dice tu nombre por primera vez. No recuerdas nada… o casi nada.', 'You open your eyes. A baby crying, a white light, someone saying your name for the first time. You remember nothing… or almost nothing.') },
};
const UMBRAL_INTRO = b('Has muerto. Antes de quedarte en algún sitio, puedes ver los dos. ¿Adónde vas primero?', 'You have died. Before you stay anywhere, you can see both. Where do you go first?');

type Mode = ReturnType<typeof useListeningMode>[0];
const bilingual = (level: string) => level === 'A0' || level === 'A1';
const plain = (t: Text) => (typeof t === 'string' ? t : t.es);

export default function MasAllaGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [entered, setEntered] = useState(false);
  const [view, setView] = useState<View>('umbral');
  const [introT, setIntroT] = useState(0);
  const [choosing, setChoosing] = useState(false);
  const [content, setContent] = useState<Record<string, LevelContent>>({});
  const [failed, setFailed] = useState(false);
  const [spotOpen, setSpotOpen] = useState<string | null>(null);
  const [voiceOpen, setVoiceOpen] = useState<string | null>(null);
  const [voiceTexts, setVoiceTexts] = useState<Record<string, Record<string, VoiceText>>>({});
  const [voicesDone, setVoicesDone] = useState<Record<string, string[]>>({});
  const [near, setNear] = useState<Near>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [act, setAct] = useState(0);
  const [route, setRoute] = useState(false);
  const [ending, setEnding] = useState(false);
  const [sound, setSound] = useState(true);
  const [musicVolume, setMusicVolume] = useMusicVolume();
  const [toast, setToast] = useState<Text | null>(null);
  const [teaching, setTeaching] = useState<Teaching>('solo');
  const [studentId, setStudentId] = useState<string | null>(null);
  const [sync, setSync] = useState<SyncState>('local');
  const [inset, setInset] = useState({ right: 0, bottom: 0 });
  const [mode, setMode] = useListeningMode('masalla');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);
  const [heard, markHeard] = useListeningDone('masalla', state.level);
  const ambience = useRef<Ambience | null>(null);
  const saveTimer = useRef(0);
  const toastTimer = useRef(0);
  const introStart = useRef(0);
  const loadedFor = useRef<string | null>(null);

  const level = state.level;
  const done = doneFor(state);
  const answers = answersFor(state);
  const scenes = content[level];
  const heardVoices = voicesDone[level] ?? [];
  const talking = spotOpen ?? voiceOpen;
  const place = view === 'intro' ? 'umbral' : view;
  const target = SPOTS.find(s => s.world === place && !done.includes(s.id))?.id ?? null;

  // ------------------------------------------------------------ restore and save
  useEffect(() => {
    const t = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      let saved = restore(readPref(STORAGE_KEY));
      const asked = normaliseLevel(params.get('level') ?? params.get('nivel'));
      if (asked) saved = setLevel(saved, asked);
      setState(saved);
      setTeaching(readPref(`${STORAGE_KEY}:modo`) === 'profesor' ? 'profesor' : 'solo');
      setStudentId(readPref(`${STORAGE_KEY}:alumno`));
      try { const v = JSON.parse(readPref(`${STORAGE_KEY}:voces`) ?? '{}'); if (v && typeof v === 'object') setVoicesDone(v); } catch { /* none yet */ }
      setHas3d(webglAvailable());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  const remote = teaching === 'profesor' && Boolean(studentId);
  useEffect(() => { if (ready && !remote) writePref(STORAGE_KEY, serialise(state)); }, [state, ready, remote]);
  useEffect(() => {
    if (!ready || !remote || !studentId) { loadedFor.current = null; return; }
    if (loadedFor.current === studentId) return;
    let alive = true;
    setSync('loading');
    fetch(`/api/live-class?lessonId=${LESSON_ID}&studentId=${encodeURIComponent(studentId)}`, { cache: 'no-store', credentials: 'same-origin' })
      .then(async r => r.ok ? (await r.json() as { session: { saved: unknown } | null }).session : Promise.reject(new Error(String(r.status))))
      .then(session => { if (!alive) return; loadedFor.current = studentId; setState(s => session ? setLevel(fromSaved(session.saved), s.level) : createState(s.level)); setSync('saved'); })
      .catch(() => { if (alive) { loadedFor.current = studentId; setSync('error'); } });
    return () => { alive = false; };
  }, [ready, remote, studentId]);
  useEffect(() => {
    if (!remote || !studentId || loadedFor.current !== studentId) return;
    window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      setSync('saving');
      fetch('/api/live-class', { method: 'PUT', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ lessonId: LESSON_ID, studentId, saved: toSaved(state) }) })
        .then(r => setSync(r.ok ? 'saved' : 'error')).catch(() => setSync('error'));
    }, 800);
    return () => window.clearTimeout(saveTimer.current);
  }, [state, remote, studentId]);

  // ------------------------------------------------------------ the encounters of the level, on demand
  useEffect(() => {
    if (!entered || content[level]) return;
    let alive = true;
    loadLevel(level).then(c => { if (alive) setContent(all => ({ ...all, [level]: c })); }).catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [entered, level, content]);
  useEffect(() => {
    if (!entered || voiceTexts[level]) return;
    let alive = true;
    loadVoices(level).then(c => { if (alive) setVoiceTexts(all => ({ ...all, [level]: c })); }).catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [entered, level, voiceTexts]);
  const voiceDone = useCallback((id: string) => setVoicesDone(all => {
    const list = all[level] ?? [];
    if (list.includes(id)) return all;
    const next = { ...all, [level]: [...list, id] };
    writePref(`${STORAGE_KEY}:voces`, JSON.stringify(next));
    return next;
  }), [level]);

  // ------------------------------------------------------------ sound
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(entered && view !== 'intro' ? view as Sound : null); }, [view, entered]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : talking || listenAt !== undefined ? 0.35 : 1); }, [talking, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  const say = useCallback((text: Text, seconds = 5) => {
    setToast(text);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), seconds * 1000);
  }, []);

  // The captions of the death follow the clock of the film.
  useEffect(() => {
    if (view !== 'intro') return;
    introStart.current = performance.now();
    const timer = window.setInterval(() => setIntroT((performance.now() - introStart.current) / 1000), 120);
    return () => window.clearInterval(timer);
  }, [view]);

  useEffect(() => {
    const measure = () => {
      const wide = window.innerWidth > 900;
      setInset(talking ? (wide ? { right: Math.min(480, window.innerWidth * 0.42), bottom: 0 } : { right: 0, bottom: window.innerHeight * 0.56 }) : { right: 0, bottom: 0 });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [talking]);

  // ------------------------------------------------------------ actions
  const enter = () => {
    ambience.current?.start();
    setEntered(true);
    setSpotOpen(null); setVoiceOpen(null); setListenAt(undefined); setEnding(false); setFailed(false); setRoute(false);
    if (has3d && !state.arrived) { setView('intro'); setIntroT(0); }
    else { setView(state.place); if (!state.first) setChoosing(true); }
  };
  /** Back to the very beginning, before the death: this level's progress and voices are wiped. */
  const startOver = () => {
    if (!window.confirm('¿Empezar de cero? Se borra el progreso de este nivel y vuelves al principio, antes de la muerte.')) return;
    setState(s => ({ ...resetLevel(s), first: null, arrived: false }));
    setVoicesDone(all => { const next = { ...all }; delete next[level]; writePref(`${STORAGE_KEY}:voces`, JSON.stringify(next)); return next; });
    setSpotOpen(null); setVoiceOpen(null); setListenAt(undefined); setEnding(false); setRoute(false); setChoosing(false);
    setView('umbral'); setEntered(false);
  };
  const endIntro = useCallback(() => {
    setView('umbral'); setState(s => arrive(goTo(s, 'umbral'))); setChoosing(true);
  }, []);
  const onIntroBeat = useCallback((beat: string) => {
    if (beat === 'end') { endIntro(); return; }
    ambience.current?.play(beat as never);
  }, [endIntro]);
  const go = useCallback((to: string) => {
    if (to !== 'umbral' && to !== 'cielo' && to !== 'infierno') return;
    setChoosing(false); setSpotOpen(null); setVoiceOpen(null); setListenAt(undefined); setRoute(false);
    ambience.current?.play('portal');
    setView(to);
    setState(s => goTo(s, to));
    if (to !== 'umbral') say(to === 'cielo' ? b('El Cielo. Sigue los círculos blancos: en cada uno te espera alguien.', 'Heaven. Follow the white circles: someone is waiting in each one.') : b('El Infierno. Sigue los círculos de fuego: en cada uno te espera alguien.', 'Hell. Follow the circles of fire: someone is waiting in each one.'), 6);
  }, [say]);
  const openSpot = useCallback((id: string) => {
    setRoute(false);
    const v = voiceById(id);
    if (v) {
      if (mode === 'escucha' && v.zone !== 'umbral') { setListenAt(v.zone); return; }
      setSpotOpen(null); setVoiceOpen(id); return;
    }
    const spot = spotById(id);
    if (!spot) return;
    if (mode === 'escucha') { setListenAt(spot.zone); return; }
    setVoiceOpen(null); setSpotOpen(id);
  }, [mode]);
  // From the route: go to the encounter's world first, then open it there.
  const goSpot = (id: string) => {
    const spot = spotById(id) ?? voiceById(id)!;
    if (has3d && view !== spot.world) { go(spot.world); window.setTimeout(() => openSpot(id), 1300); }
    else openSpot(id);
  };
  const onPose = useCallback((p: Pose) => setPose(old => (old && old.place === p.place && Math.abs(old.x - p.x) < 1.5 && Math.abs(old.z - p.z) < 1.5 ? old : p)), []);
  const closeCard = useCallback(() => setSpotOpen(null), []);
  const closeVoice = useCallback(() => setVoiceOpen(null), []);
  const finish = useCallback(() => {
    if (!spotOpen) return;
    const id = spotOpen;
    setState(s => {
      const next = markDone(s, id);
      if (next !== s) {
        ambience.current?.play('reward');
        const spot = spotById(id)!;
        if (worldDone(next, spot.world) === 6) say(b(`Has cerrado los seis encuentros de ${spot.world === 'cielo' ? 'el Cielo' : 'el Infierno'}.`, `You have closed the six encounters of ${spot.world === 'cielo' ? 'Heaven' : 'Hell'}.`), 6);
      }
      return next;
    });
  }, [spotOpen, say]);
  const onFinal = useCallback(() => { setSpotOpen(null); setEnding(true); ambience.current?.play('gong'); }, []);
  const changeTeaching = (value: Teaching) => { setTeaching(value); writePref(`${STORAGE_KEY}:modo`, value); if (value === 'solo') setState(s => setLevel(restore(readPref(STORAGE_KEY)), s.level)); };
  const selectStudent = (id: string | null) => { loadedFor.current = null; setStudentId(id); writePref(`${STORAGE_KEY}:alumno`, id); if (!id) setState(s => setLevel(restore(readPref(STORAGE_KEY)), s.level)); };
  const switchMode = (value: Mode) => { setMode(value); setListenAt(undefined); setSpotOpen(null); setVoiceOpen(null); };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !entered) return;
      if (route) setRoute(false);
      else if (ending) setEnding(false);
      else if (choosing && state.first) setChoosing(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [entered, route, ending, choosing, state.first]);

  const scene = spotOpen ? scenes?.[spotOpen] ?? null : null;
  const openInfo = spotOpen ? spotById(spotOpen) : null;
  const next = openInfo ? nextSpot(state, openInfo.id) : null;
  const nextLabel = next ? `${CAST[next.cast[0]].name} · ${ZONES.find(z => z.id === next.zone)!.name}` : null;
  const goNext = next ? () => { setSpotOpen(null); window.setTimeout(() => goSpot(next.id), 60); } : null;
  const nearSpot = near?.kind === 'spot' ? spotById(near.id) : null;
  const nearVoice = near?.kind === 'spot' ? voiceById(near.id) : null;
  const voiceText = voiceOpen ? voiceTexts[level]?.[voiceOpen] ?? null : null;
  const busy = Boolean(talking) || listenAt !== undefined || route || ending || choosing;
  const flat = ready && !has3d;
  const playing = entered && view !== 'intro';
  const en = bilingual(level);
  const verdict = state.verdict[level] ?? null;
  const caption = view === 'intro' ? CAPTIONS.find(c => introT >= c.from && introT < c.to) ?? null : null;
  const placeName = view === 'cielo' ? 'El Cielo' : view === 'infierno' ? 'El Infierno' : 'El Umbral';

  return <main className="ma" data-level={level} data-place={view} data-mode={mode} data-conversation-family="mas-alla">
    {ready && has3d && entered && <World3D view={view} spotOpen={talking} done={[...done, ...heardVoices]} paused={busy && !talking} inset={inset} greetings={GREETINGS} act={act}
      onIntroBeat={onIntroBeat} onNear={setNear} onPortal={go} onExit={() => go('umbral')} onFinal={onFinal} onSpot={openSpot}
      onPose={onPose} onFail={() => { setHas3d(false); if (view === 'intro') endIntro(); }} />}
    {(!entered || flat) && <div className="ma-backdrop" aria-hidden="true"><i className="is-up" /><i className="is-down" /><span /></div>}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="ma-title" aria-labelledby="ma-title-h">
      <div className="ma-title-card">
        <p className="ma-kicker">Conversación 3D para adultos · {TOTAL} encuentros · 12 preguntas que no se olvidan · A0–C2</p>
        <h1 id="ma-title-h">Más allá <span>Cielo e infierno</span></h1>
        <p className="ma-lede">Tienes ochenta y nueve años y mueres en una cama de hospital, con tu familia alrededor. Tu alma sube. En el Umbral te dejan elegir adónde ir primero: al Cielo o al Infierno. En los dos hay ángeles, demonios y almas que quieren hablar contigo. Cada encuentro es breve y termina con una sola pregunta, honda, de las que se piensan despacio. No hay respuestas correctas: al final verás el retrato de tu alma.</p>
        <p className="ma-label">Elige el nivel</p>
        <div className="ma-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={level === l.id} className={level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>{doneFor(state, l.id as State['level']).length > 0 && <em>{doneFor(state, l.id as State['level']).length}/{TOTAL}</em>}
          </button>)}
        </div>
        <div className="ma-options-row">
          <div className="ma-teach" role="radiogroup" aria-label="Cómo se usa">
            <button type="button" role="radio" aria-checked={teaching === 'profesor'} onClick={() => changeTeaching('profesor')}><b>Con profesor</b><small>Progreso por alumno</small></button>
            <button type="button" role="radio" aria-checked={teaching === 'solo'} onClick={() => changeTeaching('solo')}><b>Por mi cuenta</b><small>Progreso en este navegador</small></button>
          </div>
          <ModeSwitch mode={mode} onChange={switchMode} />
        </div>
        {teaching === 'profesor' && <div className="ma-studentbar"><StudentBar lessonId={LESSON_ID} level={level} studentId={studentId} onSelect={selectStudent} onReset={() => setState(s => resetLevel(s))} sync={remote ? sync : 'local'} /></div>}
        <p className="ma-note">{mode === 'escucha'
          ? 'Comprensión auditiva: cada zona del Cielo y del Infierno tiene su propia escucha, con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo blanco hay un encuentro breve (puedes saltarlo) y una pregunta profunda con su propia forma de responder: una balanza, unas velas, un espejo roto, un reloj… Después, dos preguntas más para seguir hablando.'}</p>
        <button type="button" className="ma-enter" onClick={enter}>{state.arrived ? 'Volver al más allá' : 'Cerrar los ojos'}</button>
        {state.arrived && <button type="button" className="ma-restart is-title" onClick={startOver}>⟲ Empezar de cero (ver la intro otra vez)</button>}
        <p className="ma-help">Flechas o WASD para caminar · Espacio para saltar · Shift para correr · N para el nitro · E para hablar o cruzar. En el móvil: joystick y botones. La muerte dura diez segundos y se puede omitir. Contenido para adultos: muerte, culpa y castigo, tratados con respeto.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ the death */}
    {entered && view === 'intro' && <div className="ma-intro">
      {caption && <p key={caption.from} className={`ma-caption${caption.tag ? ' is-tag' : ''}`} role="status"><Bi t={en ? caption.t : plain(caption.t)} /></p>}
      <button type="button" className="ma-skip-intro" onClick={endIntro}>Omitir →</button>
    </div>}

    {/* ------------------------------------------------ the first choice */}
    {entered && choosing && view === 'umbral' && <section className="ma-choice" aria-labelledby="ma-choice-h">
      <p className="ma-choice-kicker">El Umbral</p>
      <h2 id="ma-choice-h"><Bi t={en ? UMBRAL_INTRO : UMBRAL_INTRO.es} /></h2>
      <div className="ma-choice-doors">
        {WORLDS.map(w => <button key={w.id} type="button" className={`ma-door is-${w.id}`} onClick={() => go(w.id)}>
          <i aria-hidden="true" /><b>{w.name}</b><small>{w.hook}</small><em>{worldDone(state, w.id)}/6</em>
        </button>)}
      </div>
      <button type="button" className="ma-link" onClick={() => setChoosing(false)}>Prefiero caminar hasta una de las puertas</button>
    </section>}

    {/* ------------------------------------------------ HUD */}
    {playing && <header className="ma-hud">
      <div className="ma-where"><span>{pose?.place === 'umbral' || !pose ? 'Entre la vida y lo que viene' : ZONES.find(z => z.world === view)?.name ? (view === 'cielo' ? 'Arriba' : 'Abajo') : ''}</span><b>{placeName}</b></div>
      <div className="ma-meters" aria-label="Progreso">
        <span title="Encuentros cerrados en el Cielo">☁ {worldDone(state, 'cielo')}/6</span>
        <span title="Encuentros cerrados en el Infierno">🔥 {worldDone(state, 'infierno')}/6</span>
        {mode === 'escucha' && <span title="Escuchas hechas">🎧 {ZONES.filter(z => heard.includes(z.id)).length}/{ZONES.length}</span>}
      </div>
      <div className="ma-hud-right">
        <ModeSwitch mode={mode} onChange={switchMode} className="ma-mode" />
        <button type="button" onClick={() => setRoute(r => !r)} aria-pressed={route}>Recorrido</button>
        {view !== 'umbral' && has3d && <button type="button" onClick={() => go('umbral')}>Al Umbral</button>}
        {mode === 'escucha' && <button type="button" onClick={() => setListenAt(null)}>Escuchas</button>}
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => { setSpotOpen(null); setEntered(false); setEnding(false); setChoosing(false); }}>Nivel {level}</button>
        <button type="button" className="ma-restart" onClick={startOver}>⟲ Empezar de cero</button>
      </div>
    </header>}

    {toast && playing && !busy && <p className="ma-toast" role="status"><Bi t={en ? toast : plain(toast)} /></p>}
    {playing && mode === 'escucha' && listenAt === undefined && !spotOpen && <ListeningBadge game="masalla" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="masalla" level={level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}

    {playing && !busy && near && <div className="ma-prompt" role="status">
      <button type="button" onClick={() => setAct(a => a + 1)}><kbd>E</kbd>{
        nearSpot ? (mode === 'escucha' ? `Escuchar · ${ZONES.find(z => z.id === nearSpot.zone)?.name}` : `Hablar con ${CAST[nearSpot.cast[0]].name}`)
          : nearVoice ? (mode === 'escucha' && nearVoice.zone !== 'umbral' ? `Escuchar · ${ZONES.find(z => z.id === nearVoice.zone)?.name}` : nearVoice.kind === 'place' ? `Mirar · ${nearVoice.name}` : `Hablar con ${nearVoice.name}`)
          : near.kind === 'portal' ? (near.id === 'cielo' ? 'Subir al Cielo' : 'Bajar al Infierno')
            : near.kind === 'final' ? 'El reloj de arena · el final'
              : 'Volver al Umbral'}</button>
    </div>}
    {playing && has3d && !busy && !near && <p className="ma-hint">{view === 'umbral'
      ? (done.length ? 'A la izquierda, el Cielo; a la derecha, el Infierno. El reloj de arena del centro cierra la clase cuando quieras.' : 'A la izquierda sube la escalera del Cielo; a la derecha se abre el Infierno. Camina hasta una puerta.')
      : target ? `Busca los círculos ${view === 'infierno' ? 'de fuego' : 'blancos'}: en cada uno te espera alguien; en los dorados, más gente con ganas de hablar. El anillo del sur te devuelve al Umbral.` : 'Has cerrado todos los encuentros de este mundo. Vuelve al Umbral por el anillo del sur.'}</p>}

    {/* ------------------------------------------------ the route */}
    {entered && view !== 'intro' && (route || (flat && !spotOpen && listenAt === undefined && !ending)) && <section className="ma-panel ma-route" aria-labelledby="ma-route-h">
      <h2 id="ma-route-h">Recorrido · {level}</h2>
      {flat && <p className="ma-flat-note">Este dispositivo no muestra el mundo 3D: los mismos encuentros se abren desde esta lista.</p>}
      {mode !== 'escucha' && <p className="ma-route-voices ma-route-umbral"><b>El Umbral:</b>{VOICES.filter(v => v.zone === 'umbral').map(v => <button key={v.id} type="button" className={heardVoices.includes(v.id) ? 'is-done' : undefined} onClick={() => goSpot(v.id)}>{v.kind === 'place' ? '◇ ' : ''}{v.name}{heardVoices.includes(v.id) ? ' ✓' : ''}</button>)}</p>}
      <div className="ma-route-worlds">
        {WORLDS.map(w => <section key={w.id} className={`ma-route-world is-${w.id}`}>
          <h3>{w.name} <small>{worldDone(state, w.id)}/6</small></h3>
          {ZONES.filter(z => z.world === w.id).map(z => <div key={z.id} className="ma-route-zone">
            <p><b>{z.name}</b> {z.hook}</p>
            <div className="ma-route-spots">
              {mode === 'escucha'
                ? <button type="button" className={heard.includes(z.id) ? 'is-done' : undefined} onClick={() => setListenAt(z.id)}>🎧 Escuchar{heard.includes(z.id) ? ' ✓' : ''}</button>
                : SPOTS.filter(s => s.zone === z.id).map(s => <button key={s.id} type="button" className={done.includes(s.id) ? 'is-done' : undefined} onClick={() => goSpot(s.id)}>
                  {CAST[s.cast[0]].name}{done.includes(s.id) && <i aria-label="hecho"> ✓</i>}
                </button>)}
            </div>
            {mode !== 'escucha' && <div className="ma-route-voices" aria-label="Más gente y lugares">
              {VOICES.filter(v => v.zone === z.id).map(v => <button key={v.id} type="button" className={heardVoices.includes(v.id) ? 'is-done' : undefined} onClick={() => goSpot(v.id)}>{v.kind === 'place' ? '◇ ' : ''}{v.name}{heardVoices.includes(v.id) ? ' ✓' : ''}</button>)}
            </div>}
          </div>)}
          {has3d && <button type="button" className="ma-go" onClick={() => go(w.id)}>Ir {w.id === 'cielo' ? 'al Cielo' : 'al Infierno'}</button>}
        </section>)}
      </div>
      <div className="ma-row">
        {done.length > 0 && <button type="button" className="ma-primary" onClick={() => { setRoute(false); onFinal(); }}>El final: el retrato de tu alma</button>}
        {has3d && <button type="button" className="ma-secondary" onClick={() => setRoute(false)}>Volver al mundo</button>}
        <button type="button" className="ma-secondary" onClick={startOver}>⟲ Empezar de cero</button>
      </div>
    </section>}

    {/* ------------------------------------------------ the encounter */}
    {scene && openInfo && <Encuentro key={`${openInfo.id}-${level}`} id={openInfo.id} scene={scene} level={level} teaching={teaching}
      done={done.includes(openInfo.id)} answer={answers[openInfo.id] ?? null} onAnswer={i => setState(s => answer(s, openInfo.id, i))}
      onDone={finish} onClose={closeCard} onNext={goNext} nextName={nextLabel} onSound={s => ambience.current?.play(s)} />}
    {voiceOpen && voiceText && <Voz key={`${voiceOpen}-${level}`} id={voiceOpen} text={voiceText} level={level} teaching={teaching}
      done={heardVoices.includes(voiceOpen)} onDone={() => voiceDone(voiceOpen)} onClose={closeVoice} />}
    {voiceOpen && !voiceText && <div className="ma-card ma-card-loading" role="status">{failed ? 'No se pudo cargar. Revisa la conexión y vuelve a abrir el círculo.' : 'Cargando…'}</div>}
    {spotOpen && !scene && <div className="ma-card ma-card-loading" role="status">{failed ? 'No se pudo cargar el encuentro. Revisa la conexión y vuelve a abrir el círculo.' : 'Cargando el encuentro…'}</div>}

    {/* ------------------------------------------------ the end: the portrait of your soul */}
    {ending && <section className="ma-panel ma-ending" aria-labelledby="ma-end-h">
      <p className="ma-kicker">El reloj de arena</p>
      <h2 id="ma-end-h">El retrato de tu alma</h2>
      <p className="ma-end-lede">{done.length ? 'Esto es lo que respondiste. No es un juicio: es un espejo.' : 'Todavía no has respondido nada. Ve al Cielo o al Infierno y vuelve aquí.'}</p>
      <div className="ma-portrait">
        {WORLDS.map(w => <div key={w.id} className={`ma-portrait-col is-${w.id}`}>
          <h3>{w.name}</h3>
          <ol>{SPOTS.filter(s => s.world === w.id).map(s => {
            const sc = scenes?.[s.id];
            const a = answers[s.id];
            return <li key={s.id} className={a == null ? 'is-empty' : undefined}>
              <small>{CAST[s.cast[0]].name}</small>
              {sc ? <><Bi t={en ? sc.q : plain(sc.q)} as="em" />{a != null && <Bi t={en ? sc.options[a].t : plain(sc.options[a].t)} as="b" />}</> : <em>…</em>}
            </li>;
          })}</ol>
        </div>)}
      </div>
      <h3 className="ma-verdict-q"><Bi t={en ? b('Después de todo lo que has visto, ¿dónde te quedas?', 'After everything you have seen, where do you stay?') : 'Después de todo lo que has visto, ¿dónde te quedas?'} /></h3>
      <div className="ma-verdict">
        {(Object.keys(VERDICT_TEXT) as (keyof typeof VERDICT_TEXT)[]).map(k => <button key={k} type="button" className={`ma-verdict-door is-${k}${verdict === k ? ' is-on' : ''}`} aria-pressed={verdict === k} onClick={() => { setState(s => decide(s, k)); ambience.current?.play(k === 'infierno' ? 'gong' : 'reward'); }}>
          <i aria-hidden="true" /><Bi t={en ? VERDICT_TEXT[k].label : plain(VERDICT_TEXT[k].label)} />
        </button>)}
      </div>
      {verdict && <p className="ma-verdict-end" role="status"><Bi t={en ? VERDICT_TEXT[verdict].end : plain(VERDICT_TEXT[verdict].end)} /></p>}
      <p className="ma-end-talk">{teaching === 'profesor' ? 'Tu alumno explica su elección: ¿qué respuesta de su retrato le sorprende más?' : 'Piensa en voz alta: ¿qué respuesta de tu retrato te sorprende más? ¿Por qué?'}</p>
      <div className="ma-row">
        <button type="button" className="ma-primary" onClick={() => setEnding(false)}>Seguir en el más allá</button>
        <button type="button" className="ma-secondary" onClick={() => { setEnding(false); setEntered(false); }}>Elegir otro nivel</button>
      </div>
    </section>}
  </main>;
}
