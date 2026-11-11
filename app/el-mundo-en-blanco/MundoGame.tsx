'use client';

// El mundo en blanco · the lesson around the 3D world: the title page (level,
// «Con profesor» / «Por mi cuenta», Conversación / Comprensión auditiva), the
// arrival in nine seconds (skippable), the twelve ink drops that show which
// encounters are closed, the encounter card with its deep question, the
// listening card shared with the other 3D worlds, the route for teachers (and
// for devices without WebGL) and the end: «tu página», written with your
// answers. Both modes live in the same world: switching never leaves it.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { StudentBar } from '../grammar-classroom/live/StudentBar';
import type { SyncState } from '../grammar-classroom/live/store';
import { setShoutMuted } from '../escucha-3d/shout';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';
import { CAST, SPOTS, ZONES, spotById } from './story.mjs';
import { LEVELS, loadLevel, type LevelContent, type Text } from './levels.mjs';
import { ENDINGS, STORAGE_KEY, answer, answersFor, arrive, createState, decide, doneFor, fromSaved, inkOf, markDone, nextSpot, normaliseLevel, resetLevel, restore, serialise, setLevel, toSaved, zoneDone, type Ending, type State } from './engine.mjs';
import { createAmbience, type Ambience } from './ambience';
import { Bi, Encuentro, type Teaching } from './Encuentro';
import type { Near, Pose } from './World3D';
import './mundo.css';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="mb-loading">Desplegando el papel…</div> });
export const LESSON_ID = 259;
const TOTAL = SPOTS.length;
const b = (es: string, en: string) => ({ es, en });

function webglAvailable() {
  try { const c = document.createElement('canvas'); return Boolean(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch { return false; }
}
const readPref = (key: string) => { try { return window.localStorage.getItem(key); } catch { return null; } };
const writePref = (key: string, value: string | null) => { try { if (value === null) window.localStorage.removeItem(key); else window.localStorage.setItem(key, value); } catch { /* private mode */ } };

// The words over the nine seconds of the arrival.
const CAPTIONS: { from: number; to: number; t: Text }[] = [
  { from: 0.4, to: 3.1, t: b('Este mundo estaba hecho de papel y de tinta.', 'This world was made of paper and ink.') },
  { from: 3.4, to: 6.2, t: b('Un día, sus habitantes dejaron de contar sus historias. Y la tinta se secó.', 'One day, its people stopped telling their stories. And the ink dried up.') },
  { from: 6.5, to: 8.9, t: b('Tú traes el último lápiz.', 'You bring the last pencil.') },
];
// What each paper being says when you come near.
const GREETINGS: Record<string, string> = {
  grulla: 'Llevo mucho tiempo esperando.', barco: '¡Alto! Dime que hoy no llueve.', zorro: 'Traigo una carta. Quizá es tuya.', bola: 'No me pises, que ya estoy arrugada.',
  rana: '¡Cuidado, que salto!', buho: 'Ejem. Ahí falta una coma.', munecas: 'Chist. Que mis hermanas no oigan.', avion: '¡No puedo parar! Habla rápido.',
  dragon: '¡Última hora! Bueno, la de ayer.', farol: 'Acércate, pero no demasiado.', ballena: 'Habla alto, que estoy arriba.', hoja: 'Te estaba esperando.',
};
const ENDING_TEXT: Record<Ending, { label: Text; end: Text }> = {
  guardar: { label: b('La guardo para mí', 'I keep it for myself'), end: b('Doblas la página en cuatro y la guardas en el bolsillo. Pesa poco y, sin embargo, se nota al caminar.', 'You fold the page in four and put it in your pocket. It weighs little and yet you feel it as you walk.') },
  regalar: { label: b('Se la doy a alguien', 'I give it to someone'), end: b('Senba la toma con el pico y despega. No dice a quién se la lleva: dice que tú ya lo sabes.', 'Senba takes it in her beak and flies off. She does not say who it is for: she says you already know.') },
  seguir: { label: b('La dejo abierta y sigo escribiendo', 'I leave it open and keep writing'), end: b('La Hoja sonríe. Abajo de todo, con tu lápiz, alguien ha escrito una sola palabra: «Continuará».', 'The Page smiles. At the very bottom, with your pencil, someone has written a single phrase: “To be continued”.') },
};

type Mode = ReturnType<typeof useListeningMode>[0];
const bilingual = (level: string) => level === 'A0' || level === 'A1';
const plain = (t: Text) => (typeof t === 'string' ? t : t.es);
const zoneAt = (p: Pose | null) => !p ? null : Math.hypot(p.x, p.z) < 9 ? null : p.z > 20 ? ZONES[0] : p.z < -22 ? ZONES[3] : p.x < 0 ? ZONES[1] : ZONES[2];

export default function MundoGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [entered, setEntered] = useState(false);
  const [intro, setIntro] = useState(false);
  const [introT, setIntroT] = useState(0);
  const [content, setContent] = useState<Record<string, LevelContent>>({});
  const [failed, setFailed] = useState(false);
  const [spotOpen, setSpotOpen] = useState<string | null>(null);
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
  const [mode, setMode] = useListeningMode('papel');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);
  const [heard, markHeard] = useListeningDone('papel', state.level);
  const ambience = useRef<Ambience | null>(null);
  const saveTimer = useRef(0);
  const toastTimer = useRef(0);
  const introStart = useRef(0);
  const loadedFor = useRef<string | null>(null);

  const level = state.level;
  const done = doneFor(state);
  const answers = answersFor(state);
  const scenes = content[level];
  const target = SPOTS.find(s => !done.includes(s.id)) ?? null;

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

  // ------------------------------------------------------------ sound
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setInk(inkOf(state)); }, [state]);
  useEffect(() => { ambience.current?.setMuted(!sound || !entered); setShoutMuted(!sound); }, [sound, entered]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : spotOpen || listenAt !== undefined ? 0.4 : 1); }, [spotOpen, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  const say = useCallback((text: Text, seconds = 5) => {
    setToast(text);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), seconds * 1000);
  }, []);

  // The captions of the arrival follow the clock of the flight.
  useEffect(() => {
    if (!intro) return;
    introStart.current = performance.now();
    const timer = window.setInterval(() => setIntroT((performance.now() - introStart.current) / 1000), 120);
    return () => window.clearInterval(timer);
  }, [intro]);

  useEffect(() => {
    const measure = () => {
      const wide = window.innerWidth > 900;
      setInset(spotOpen ? (wide ? { right: Math.min(480, window.innerWidth * 0.42), bottom: 0 } : { right: 0, bottom: window.innerHeight * 0.56 }) : { right: 0, bottom: 0 });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [spotOpen]);

  // ------------------------------------------------------------ actions
  const enter = () => {
    ambience.current?.start();
    setEntered(true);
    setSpotOpen(null); setListenAt(undefined); setEnding(false); setFailed(false); setRoute(false);
    if (has3d && !state.arrived) { setIntro(true); setIntroT(0); }
    else if (!state.arrived) setState(s => arrive(s));
  };
  /** Back to the very beginning: this level's ink is wiped and the world is blank again. */
  const startOver = () => {
    if (!window.confirm('¿Empezar de cero? Se borra la tinta de este nivel y el mundo vuelve a estar en blanco.')) return;
    setState(s => ({ ...resetLevel(s), arrived: false }));
    setSpotOpen(null); setListenAt(undefined); setEnding(false); setRoute(false); setIntro(false);
    setEntered(false);
  };
  const endIntro = useCallback(() => {
    setIntro(false);
    setState(s => arrive(s));
    say(b('Sigue los círculos de tinta: junto a cada uno te espera alguien.', 'Follow the ink circles: someone is waiting beside each one.'), 7);
  }, [say]);
  const openSpot = useCallback((id: string) => {
    setRoute(false);
    const spot = spotById(id);
    if (!spot) return;
    if (mode === 'escucha') { setListenAt(spot.zone); return; }
    setSpotOpen(id);
  }, [mode]);
  const onPose = useCallback((p: Pose) => setPose(old => (old && Math.abs(old.x - p.x) < 1.5 && Math.abs(old.z - p.z) < 1.5 ? old : p)), []);
  const closeCard = useCallback(() => setSpotOpen(null), []);
  const finish = useCallback(() => {
    if (!spotOpen) return;
    const id = spotOpen;
    setState(s => {
      const next = markDone(s, id);
      if (next !== s) {
        ambience.current?.play('ink');
        const who = CAST[spotById(id)!.cast[0]];
        if (doneFor(next).length === TOTAL) say(b('El mundo entero tiene color. Vuelve al gran tintero: tu página te espera.', 'The whole world has colour. Go back to the great inkwell: your page is waiting.'), 9);
        else say(b(`La tinta de ${who.name} ha vuelto. Mira el mundo.`, `${who.name}'s ink is back. Look at the world.`), 6);
      }
      return next;
    });
    // The card steps aside: the ink flooding the world is the reward.
    setSpotOpen(null);
  }, [spotOpen, say]);
  const onFinal = useCallback(() => { setSpotOpen(null); setEnding(true); ambience.current?.play('gong'); }, []);
  const changeTeaching = (value: Teaching) => { setTeaching(value); writePref(`${STORAGE_KEY}:modo`, value); if (value === 'solo') setState(s => setLevel(restore(readPref(STORAGE_KEY)), s.level)); };
  const selectStudent = (id: string | null) => { loadedFor.current = null; setStudentId(id); writePref(`${STORAGE_KEY}:alumno`, id); if (!id) setState(s => setLevel(restore(readPref(STORAGE_KEY)), s.level)); };
  const switchMode = (value: Mode) => { setMode(value); setListenAt(undefined); setSpotOpen(null); };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !entered) return;
      if (route) setRoute(false);
      else if (ending) setEnding(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [entered, route, ending]);

  const scene = spotOpen ? scenes?.[spotOpen] ?? null : null;
  const openInfo = spotOpen ? spotById(spotOpen) : null;
  const next = openInfo ? nextSpot(state, openInfo.id) : null;
  const nextLabel = next ? `${CAST[next.cast[0]].name} · ${ZONES.find(z => z.id === next.zone)!.name}` : null;
  const goNext = next ? () => { setSpotOpen(null); window.setTimeout(() => openSpot(next.id), 60); } : null;
  const nearSpot = near?.kind === 'spot' ? spotById(near.id) : null;
  const busy = Boolean(spotOpen) || listenAt !== undefined || route || ending;
  const flat = ready && !has3d;
  const playing = entered && !intro;
  const en = bilingual(level);
  const chosen = state.ending[level] ?? null;
  const caption = intro ? CAPTIONS.find(c => introT >= c.from && introT < c.to) ?? null : null;
  const zone = zoneAt(pose);

  return <main className="mb" data-level={level} data-mode={mode} data-ink={done.length} data-conversation-family="el-mundo-en-blanco">
    {ready && has3d && entered && <World3D intro={intro} spotOpen={spotOpen} done={done} paused={busy && !spotOpen} inset={inset} greetings={GREETINGS} act={act}
      onIntroEnd={endIntro} onNear={setNear} onFinal={onFinal} onSpot={openSpot} onPose={onPose} onFail={() => { setHas3d(false); setIntro(false); setState(s => arrive(s)); }} />}
    {(!entered || flat) && <div className="mb-backdrop" aria-hidden="true"><i /><i /><i /><span /></div>}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="mb-title" aria-labelledby="mb-title-h">
      <div className="mb-title-card">
        <p className="mb-kicker">Conversación 3D · {TOTAL} encuentros · {TOTAL} preguntas que devuelven el color · A0–C2</p>
        <h1 id="mb-title-h">El mundo <span>en blanco</span></h1>
        <p className="mb-lede">Un mundo entero plegado en papel se ha quedado sin tinta: el mar, el bosque, la ciudad y la montaña son blancos y nadie recuerda su color. Tú llegas con el último lápiz. Doce seres de papel te esperan: una grulla que nunca supo si su deseo se cumplió, un barco que jamás tocó el agua, una ballena que carga un pueblo en la espalda. Cada uno te hace una sola pregunta, de las que se piensan despacio. Cuando respondes, su tinta vuelve y el color inunda su rincón del mundo. No hay respuestas correctas: al final, las tuyas forman tu página.</p>
        <p className="mb-label">Elige el nivel</p>
        <div className="mb-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={level === l.id} className={level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>{doneFor(state, l.id as State['level']).length > 0 && <em>{doneFor(state, l.id as State['level']).length}/{TOTAL}</em>}
          </button>)}
        </div>
        <div className="mb-options-row">
          <div className="mb-teach" role="radiogroup" aria-label="Cómo se usa">
            <button type="button" role="radio" aria-checked={teaching === 'profesor'} onClick={() => changeTeaching('profesor')}><b>Con profesor</b><small>Progreso por alumno</small></button>
            <button type="button" role="radio" aria-checked={teaching === 'solo'} onClick={() => changeTeaching('solo')}><b>Por mi cuenta</b><small>Progreso en este navegador</small></button>
          </div>
          <ModeSwitch mode={mode} onChange={switchMode} />
        </div>
        {teaching === 'profesor' && <div className="mb-studentbar"><StudentBar lessonId={LESSON_ID} level={level} studentId={studentId} onSelect={selectStudent} onReset={() => setState(s => resetLevel(s))} sync={remote ? sync : 'local'} /></div>}
        <p className="mb-note">{mode === 'escucha'
          ? 'Comprensión auditiva: cada región del mundo tiene su propia escucha, con voces de distintos países. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: junto a cada círculo de tinta hay un encuentro breve (puedes saltarlo) y una pregunta profunda con tres papeles para elegir. Después, tres preguntas más para seguir hablando. Al cerrar el encuentro, el color vuelve.'}</p>
        <button type="button" className="mb-enter" onClick={enter}>{state.arrived ? 'Volver al mundo' : 'Abrir el mundo'}</button>
        {state.arrived && <button type="button" className="mb-restart is-title" onClick={startOver}>⟲ Empezar de cero (el mundo vuelve a estar en blanco)</button>}
        <p className="mb-help">Flechas o WASD para caminar · Espacio para saltar · Shift para correr · N para el nitro · E para hablar. En el móvil: joystick y botones. La llegada dura nueve segundos y se puede omitir.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ the arrival */}
    {entered && intro && <div className="mb-intro">
      {caption && <p key={caption.from} className="mb-caption" role="status"><Bi t={en ? caption.t : plain(caption.t)} /></p>}
      <button type="button" className="mb-skip-intro" onClick={endIntro}>Omitir →</button>
    </div>}

    {/* ------------------------------------------------ HUD */}
    {playing && <header className="mb-hud">
      <div className="mb-where"><span>{zone ? 'Estás en' : 'El centro del mundo'}</span><b>{zone ? zone.name : 'El gran tintero'}</b></div>
      <div className="mb-drops" role="img" aria-label={`Tinta recuperada: ${done.length} de ${TOTAL}`}>
        {SPOTS.map(s => <i key={s.id} className={done.includes(s.id) ? 'is-on' : undefined} style={{ '--tinta': CAST[s.cast[0]].ink } as CSSProperties} title={CAST[s.cast[0]].name} />)}
      </div>
      <div className="mb-hud-right">
        <ModeSwitch mode={mode} onChange={switchMode} className="mb-mode" />
        <button type="button" onClick={() => setRoute(r => !r)} aria-pressed={route}>Recorrido</button>
        {mode === 'escucha' && <button type="button" onClick={() => setListenAt(null)}>Escuchas</button>}
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
        <button type="button" onClick={() => { setSpotOpen(null); setEntered(false); setEnding(false); }}>Nivel {level}</button>
        <button type="button" className="mb-restart" onClick={startOver}>⟲ Empezar de cero</button>
      </div>
    </header>}

    {toast && playing && !busy && <p className="mb-toast" role="status"><Bi t={en ? toast : plain(toast)} /></p>}
    {playing && mode === 'escucha' && listenAt === undefined && !spotOpen && <ListeningBadge game="papel" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="papel" level={level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}

    {playing && !busy && near && <div className="mb-prompt" role="status">
      <button type="button" onClick={() => setAct(a => a + 1)}><kbd>E</kbd>{
        nearSpot ? (mode === 'escucha' ? `Escuchar · ${ZONES.find(z => z.id === nearSpot.zone)?.name}` : `Hablar con ${CAST[nearSpot.cast[0]].name}`) : 'El gran tintero · tu página'}</button>
    </div>}
    {playing && has3d && !busy && !near && !toast && <p className="mb-hint">{target
      ? (done.length ? `Te faltan ${TOTAL - done.length}. El más cercano en el recorrido: ${CAST[target.cast[0]].name}, en ${ZONES.find(z => z.id === target.zone)!.name}.` : 'Camina hacia el norte: el primer círculo de tinta está a la izquierda, junto a la grulla.')
      : 'Todo el mundo tiene color. El gran tintero, en el centro, guarda tu página.'}</p>}

    {/* ------------------------------------------------ the route */}
    {entered && !intro && (route || (flat && !spotOpen && listenAt === undefined && !ending)) && <section className="mb-panel mb-route" aria-labelledby="mb-route-h">
      <h2 id="mb-route-h">Recorrido · {level}</h2>
      {flat && <p className="mb-flat-note">Este dispositivo no muestra el mundo 3D: los mismos encuentros se abren desde esta lista.</p>}
      <div className="mb-route-zones">
        {ZONES.map(z => <section key={z.id} className="mb-route-zone" style={{ '--tinta': z.ink } as CSSProperties}>
          <h3>{z.name} <small>{zoneDone(state, z.id)}/3</small></h3>
          <p>{z.hook}</p>
          <div className="mb-route-spots">
            {mode === 'escucha'
              ? <button type="button" className={heard.includes(z.id) ? 'is-done' : undefined} onClick={() => { setRoute(false); setListenAt(z.id); }}>🎧 Escuchar{heard.includes(z.id) ? ' ✓' : ''}</button>
              : SPOTS.filter(s => s.zone === z.id).map(s => <button key={s.id} type="button" className={done.includes(s.id) ? 'is-done' : undefined} onClick={() => openSpot(s.id)}>
                {CAST[s.cast[0]].name}{done.includes(s.id) && <i aria-label="hecho"> ✓</i>}
              </button>)}
          </div>
        </section>)}
      </div>
      <div className="mb-row">
        {done.length > 0 && <button type="button" className="mb-primary" onClick={() => { setRoute(false); onFinal(); }}>El final: tu página</button>}
        {has3d && <button type="button" className="mb-secondary" onClick={() => setRoute(false)}>Volver al mundo</button>}
        <button type="button" className="mb-secondary" onClick={startOver}>⟲ Empezar de cero</button>
      </div>
    </section>}

    {/* ------------------------------------------------ the encounter */}
    {scene && openInfo && <Encuentro key={`${openInfo.id}-${level}`} id={openInfo.id} scene={scene} level={level} teaching={teaching}
      done={done.includes(openInfo.id)} answer={answers[openInfo.id] ?? null} onAnswer={i => setState(s => answer(s, openInfo.id, i))}
      onDone={finish} onClose={closeCard} onNext={goNext} nextName={nextLabel} onSound={s => ambience.current?.play(s)} />}
    {spotOpen && !scene && <div className="mb-card mb-card-loading" role="status">{failed ? 'No se pudo cargar el encuentro. Revisa la conexión y vuelve a abrir el círculo.' : 'Cargando el encuentro…'}</div>}

    {/* ------------------------------------------------ the end: your page */}
    {ending && <section className="mb-panel mb-ending" aria-labelledby="mb-end-h">
      <p className="mb-kicker">El gran tintero</p>
      <h2 id="mb-end-h">Tu página</h2>
      <p className="mb-end-lede">{done.length ? 'El tintero escribe lo que respondiste. No es un examen: es tu letra.' : 'El tintero está seco. Habla con alguien y vuelve: tu página empieza con tu primera respuesta.'}</p>
      <ol className="mb-page">
        {SPOTS.map(s => {
          const sc = scenes?.[s.id];
          const a = answers[s.id];
          return <li key={s.id} className={a == null ? 'is-empty' : undefined} style={{ '--tinta': CAST[s.cast[0]].ink } as CSSProperties}>
            <small>{CAST[s.cast[0]].name}</small>
            {sc ? <><Bi t={en ? sc.q : plain(sc.q)} as="em" />{a != null ? <Bi t={en ? sc.options[a].t : plain(sc.options[a].t)} as="b" /> : <b className="mb-blank" aria-label="sin responder" />}</> : <em>…</em>}
          </li>;
        })}
      </ol>
      <h3 className="mb-end-q"><Bi t={en ? b('La página es tuya. ¿Qué haces con ella?', 'The page is yours. What do you do with it?') : 'La página es tuya. ¿Qué haces con ella?'} /></h3>
      <div className="mb-endings">
        {ENDINGS.map(k => <button key={k} type="button" className={`mb-ending-slip${chosen === k ? ' is-on' : ''}`} aria-pressed={chosen === k} onClick={() => { setState(s => decide(s, k)); ambience.current?.play('pick'); }}>
          <Bi t={en ? ENDING_TEXT[k].label : plain(ENDING_TEXT[k].label)} />
        </button>)}
      </div>
      {chosen && <p className="mb-ending-end" role="status"><Bi t={en ? ENDING_TEXT[chosen].end : plain(ENDING_TEXT[chosen].end)} /></p>}
      <p className="mb-end-talk">{teaching === 'profesor' ? 'Tu alumno lee su página en voz alta y cuenta qué respuesta cambiaría mañana.' : 'Lee tu página en voz alta. Después cuenta qué respuesta cambiarías mañana, y por qué.'}</p>
      <div className="mb-row">
        <button type="button" className="mb-primary" onClick={() => setEnding(false)}>Seguir en el mundo</button>
        <button type="button" className="mb-secondary" onClick={() => { setEnding(false); setEntered(false); }}>Elegir otro nivel</button>
      </div>
    </section>}
  </main>;
}
