'use client';

// Madrid infectada · the lesson around the 3D city: the title screen (level,
// «Con profesor» / «Por mi cuenta», Conversación / Comprensión auditiva),
// the arrival over Sol with the broken radio, the HUD (the street or square
// you are in, scenes, survivors, the formula recovered, doses, the plan of
// the city, the route), the vaccination signal, the scene card with «TU
// TURNO» (the twenty circles of the story and the thirty survivors of the
// street), the listening card shared with the other 3D worlds and the ending
// on the river. Both modes live in the same world: switching never leaves
// it. Without WebGL the scenes open from the route list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { StudentBar } from '../grammar-classroom/live/StudentBar';
import type { SyncState } from '../grammar-classroom/live/store';
import { setShoutMuted } from '../escucha-3d/shout';
import { CAST, SPOTS, ZONES, spotById } from './story.mjs';
import { LEVELS } from './levels-info.mjs';
import { loadLevel, type LevelContent } from './levels.mjs';
import { STORAGE_KEY, arrive, circlesDone, clearedZones, createState, doneFor, endMission, fromSaved, markDone, nextSpot, normaliseLevel, resetLevel, restore, serialise, setLevel, setZone, spotKey, streetDone, toSaved, zoneCount, type State } from './engine.mjs';
import { createAmbience, type Ambience, type Sound } from './ambience';
import { SceneCard, type Person, type Teaching } from './SceneCard';
import { BAND_LABEL, bandOf, loadStreet } from './street.mjs';
import { ENCOUNTERS, SURVIVORS, citySpots, whereIs } from './city.mjs';
import { CityMap } from './CityMap';
import type { Near, Pose, VaxStage, WorldEvent } from './World3D';
import './madrid.css';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="mi-loading">Abriendo el perímetro…</div> });
export const LESSON_ID = 242;
const TOTAL = SPOTS.length;
const STREET_TOTAL = ENCOUNTERS.length;
const PEOPLE = SURVIVORS as Record<string, Person>;
const SPOT_ZONE: Record<string, string> = Object.fromEntries(SPOTS.map(s => [s.id, s.zone]));
const SPOT_AT: Record<string, { x: number; z: number }> = Object.fromEntries(citySpots().map((s: { id: string; x: number; z: number }) => [s.id, { x: s.x, z: s.z }]));
const ZONE_OF_SURVIVOR: Record<string, string> = Object.fromEntries(ENCOUNTERS.map(e => [e.id, whereIs(e.x, e.z).zone]));

function webglAvailable() {
  try { const c = document.createElement('canvas'); return Boolean(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch { return false; }
}
const readPref = (key: string) => { try { return window.localStorage.getItem(key); } catch { return null; } };
const writePref = (key: string, value: string | null) => { try { if (value === null) window.localStorage.removeItem(key); else window.localStorage.setItem(key, value); } catch { /* private mode */ } };

// The pirate radio of the arrival: it breaks up before the end of each line.
const RADIO: { es: string; en: string }[] = [
  { es: '…aquí Radio Kilómetro Cero, emitiendo desde algún lugar de Madrid…', en: '…this is Radio Kilometre Zero, broadcasting from somewhere in Madrid…' },
  { es: 'El Gobierno pide calma. Las salidas de la ciudad están cerradas…', en: 'The government asks for calm. The roads out of the city are closed…' },
  { es: 'No respiréis la nube verde. Repito: no respiréis…', en: 'Don’t breathe the green cloud. I repeat: don’t breathe…' },
  { es: 'Si alguien me oye… el laboratorio del Retiro… ¿me escucha alguien?…', en: 'If anyone can hear me… the lab in the Retiro… can you hear me?…' },
];
// Static on the radio during the walk.
const RADIO_WALK = [
  '📻 «…la Plaza Mayor sigue abierta a quien llegue sano…»',
  '📻 «…se busca médico en el hospital de campaña. Cualquier médico…»',
  '📻 «…no hagáis caso de los que venden dosis en Atocha…»',
  '📻 «…la barca de Madrid Río sale al amanecer. Solo una vez…»',
  '📻 «…ojo con la nube en la Gran Vía: hoy está nerviosa…»',
];
const VAX_TEXT: Record<Exclude<VaxStage, null>, string> = { detect: 'Contaminación detectada', inject: 'Vacuna experimental · dosis en curso', immune: 'Inmune' };

type Mode = ReturnType<typeof useListeningMode>[0];

export default function MadridGame() {
  const [state, setState] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [entered, setEntered] = useState(false);
  const [intro, setIntro] = useState(false);
  const [radioAt, setRadioAt] = useState(0);
  const [finale, setFinale] = useState(false);
  const [ending, setEnding] = useState(false);
  const [content, setContent] = useState<Record<string, LevelContent>>({});
  const [street, setStreet] = useState<Record<string, LevelContent>>({});
  const [go, setGo] = useState({ zone: 'sol', n: 0 });
  const [pose, setPose] = useState<Pose | null>(null);
  const [startZone, setStartZone] = useState('sol');
  const [failed, setFailed] = useState(false);
  const [spotOpen, setSpotOpen] = useState<string | null>(null);
  const [near, setNear] = useState<Near>(null);
  const [act, setAct] = useState(0);
  const [fire, setFire] = useState(0);
  const [route, setRoute] = useState(false);
  const [sound, setSound] = useState(true);
  const [vax, setVax] = useState<VaxStage>(null);
  const [doses, setDoses] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [teaching, setTeaching] = useState<Teaching>('solo');
  const [studentId, setStudentId] = useState<string | null>(null);
  const [sync, setSync] = useState<SyncState>('local');
  const [inset, setInset] = useState({ right: 0, bottom: 0 });
  const [mode, setMode] = useListeningMode('madrid');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);
  const [heard, markHeard] = useListeningDone('madrid', state.level);
  const ambience = useRef<Ambience | null>(null);
  const saveTimer = useRef(0);
  const toastTimer = useRef(0);
  const loadedFor = useRef<string | null>(null);

  const level = state.level;
  const zone = ZONES.find(z => z.id === state.zone)!;
  const done = doneFor(state);
  const circles = circlesDone(state);
  const met = streetDone(state);
  const counts = useMemo(() => zoneCount(state), [state]);
  const cleared = useMemo(() => clearedZones(state), [state]);
  const scenes = content[level];
  const band = bandOf(level);
  const streetScenes = street[band];
  // The arrow points at the next circle of the story still to do.
  const target = useMemo(() => SPOTS.find(s => !circles.includes(spotKey(s.zone, s.id)))?.id ?? null, [circles]);

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
  // «Con profesor» with a student: that student's progress lives in the teacher's account.
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

  // ------------------------------------------------------------ the scenes of the level, on demand
  useEffect(() => {
    if (!entered || content[level]) return;
    let alive = true;
    loadLevel(level).then(c => { if (alive) setContent(all => ({ ...all, [level]: c })); }).catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [entered, level, content]);
  useEffect(() => {
    if (!entered || street[band]) return;
    let alive = true;
    loadStreet(level).then(c => { if (alive) setStreet(all => ({ ...all, [band]: c })); }).catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [entered, level, band, street]);

  // ------------------------------------------------------------ sound
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(entered ? zone.sound as Sound : null); }, [zone.sound, entered]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  const [voice, setVoice] = useState(false);
  useEffect(() => { ambience.current?.duck(voice ? 0.05 : spotOpen || listenAt !== undefined ? 0.3 : 1); }, [spotOpen, listenAt, voice]);
  const onAudio = useCallback((playing: boolean) => setVoice(playing), []);
  const say = useCallback((text: string, seconds = 5) => {
    setToast(text);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), seconds * 1000);
  }, []);

  // The radio of the arrival, one line every ~2.7 s.
  useEffect(() => {
    if (!intro) return;
    const timer = window.setInterval(() => setRadioAt(i => Math.min(RADIO.length - 1, i + 1)), 2700);
    ambience.current?.play('radio');
    return () => window.clearInterval(timer);
  }, [intro]);

  // The open card covers part of the screen: the talk is framed beside it.
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
    setSpotOpen(null); setListenAt(undefined); setEnding(false); setFinale(false); setFailed(false);
    setStartZone(state.arrived ? state.zone : 'sol');
    if (has3d && !state.arrived) { setState(s => setZone(s, 'sol')); setRadioAt(0); setIntro(true); }
  };
  const endIntro = useCallback(() => { setIntro(false); setState(s => arrive(s)); ambience.current?.play('immune'); }, []);
  // A trip from the route: the world fades to the district (or down to the Metro).
  // A scene of the same level (city or Metro) opens where it is: the mascot is put on its spot.
  const goZone = useCallback((id: string, spot: string | null = null) => {
    setSpotOpen(null); setListenAt(undefined); setRoute(false);
    setState(s => setZone(s, id));
    const under = pose?.zone === 'metro';
    const wantUnder = spot ? !spot.startsWith('calle/') && SPOT_ZONE[spot] === 'metro' : id === 'metro';
    const trip = has3d && (!spot || under !== wantUnder);
    if (trip) setGo(g => ({ zone: id, n: g.n + 1 }));
    if (spot) window.setTimeout(() => setSpotOpen(spot), trip ? 1100 : 0);
  }, [has3d, pose?.zone]);
  const openSpot = useCallback((id: string) => {
    setRoute(false);
    if (id.startsWith('calle/')) { setSpotOpen(id); return; }
    const spot = spotById(id);
    if (!spot) return;
    if (mode === 'escucha') { setListenAt(spot.zone); return; }
    setSpotOpen(id);
  }, [mode]);
  const onPose = useCallback((p: Pose) => {
    setPose(old => (old && old.zone === p.zone && old.place === p.place && Math.abs(old.x - p.x) < 1.5 && Math.abs(old.z - p.z) < 1.5 && Math.abs(old.heading - p.heading) < 0.3 && old.target === p.target ? old : p));
    setState(s => setZone(s, p.zone));
  }, []);
  const closeCard = useCallback(() => setSpotOpen(null), []);
  const finish = useCallback(() => {
    if (!spotOpen) return;
    if (spotOpen.startsWith('calle/')) {
      const id = spotOpen.slice(6);
      setState(s => { const next = markDone(s, 'calle', id); if (next !== s) { ambience.current?.play('reward'); say(`💬 ${PEOPLE[id]?.name ?? ''} te ha contado su historia. Sobrevivientes: ${streetDone(next).length}/${STREET_TOTAL}.`, 4); } return next; });
      return;
    }
    const spot = spotById(spotOpen);
    if (!spot) return;
    setState(s => {
      const before = clearedZones(s).length;
      const next = markDone(s, spot.zone, spot.id);
      if (next !== s) {
        ambience.current?.play('reward');
        if (clearedZones(next).length > before) say(`🛡 Zona asegurada: ${ZONES.find(z => z.id === spot.zone)?.name}. Fragmento de la fórmula recuperado.`, 6);
        else say('🧪 Fragmento de la fórmula recuperado.', 4);
      }
      return next;
    });
  }, [spotOpen, say]);
  const onVax = useCallback((stage: VaxStage) => {
    setVax(stage);
    if (stage) ambience.current?.play(stage);
    if (stage === 'immune') setDoses(n => n + 1);
  }, []);
  const grabs = useRef(0);
  const onEvent = useCallback((event: WorldEvent, gain = 1) => {
    const a = ambience.current;
    if (event === 'radio') { a?.play('radio'); say(RADIO_WALK[Math.floor(Math.random() * RADIO_WALK.length)], 6); return; }
    if (event === 'hit') { a?.play('hit'); say('🛡 La nube te ha tocado, pero eres inmune.', 3); return; }
    if (event === 'grab') { a?.play('grab'); grabs.current += 1; if (grabs.current <= 3) say('🛡 ¡Un zombi te ha agarrado! La vacuna te protege. Dispara con F para tumbarlo.', 4); return; }
    if (event === 'metro') { a?.play('drop'); return; }
    a?.play(event as never, gain);
  }, [say]);
  const startFinale = () => { setSpotOpen(null); setFinale(true); };
  const endFinale = useCallback(() => { setFinale(false); setEnding(true); setState(s => endMission(s)); ambience.current?.play('reward'); }, []);
  const changeTeaching = (value: Teaching) => { setTeaching(value); writePref(`${STORAGE_KEY}:modo`, value); if (value === 'solo') setState(s => setLevel(restore(readPref(STORAGE_KEY)), s.level)); };
  const selectStudent = (id: string | null) => { loadedFor.current = null; setStudentId(id); writePref(`${STORAGE_KEY}:alumno`, id); if (!id) setState(s => setLevel(restore(readPref(STORAGE_KEY)), s.level)); };
  const switchMode = (value: Mode) => { setMode(value); setListenAt(undefined); setSpotOpen(null); };
  const skipIntro = () => endIntro();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !entered) return;
      if (route) { setRoute(false); return; }
      if (ending) setEnding(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [entered, route, ending]);

  const survivorId = spotOpen?.startsWith('calle/') ? spotOpen.slice(6) : null;
  const scene = spotOpen ? (survivorId ? streetScenes?.[survivorId] ?? null : scenes?.[spotOpen] ?? null) : null;
  const openInfo = spotOpen && !survivorId ? spotById(spotOpen) : null;
  const next = openInfo ? nextSpot(state, openInfo.zone, openInfo.id) : null;
  const nextLabel = next ? `${CAST[spotById(next.spot)!.cast[0]].name} · ${ZONES.find(z => z.id === next.zone)!.name}` : null;
  const goNext = next ? () => { if (next.zone === state.zone) { setSpotOpen(null); window.setTimeout(() => openSpot(next.spot), 60); } else goZone(next.zone, next.spot); } : null;
  const nearSpot = near?.kind === 'spot' ? spotById(near.id) : null;
  const nearSurvivor = near?.kind === 'encounter' ? PEOPLE[near.id] : null;
  const busy = Boolean(spotOpen) || listenAt !== undefined || route || ending;
  const flat = ready && !has3d;
  const playing = entered && !intro && !finale;
  const heardZones = ZONES.filter(z => heard.includes(z.id)).length;
  const here = pose?.zone ?? state.zone;
  const hereName = ZONES.find(z => z.id === here)?.name ?? zone.name;
  const targetAt = target ? (SPOT_ZONE[target] === 'metro' ? null : SPOT_AT[target]) : null;

  return <main className="mi" data-level={level} data-zone={state.zone} data-mode={mode} data-conversation-family="madrid-infectada">
    {ready && has3d && entered && <World3D level={level} start={startZone} go={go} target={target} intro={intro} finale={finale} spotOpen={spotOpen} done={done}
      paused={route || listenAt !== undefined || ending} inset={inset} act={act} fire={fire}
      onIntroEnd={endIntro} onFinaleEnd={endFinale} onNear={setNear} onSpot={openSpot}
      onVax={onVax} onEvent={onEvent} onPose={onPose} onFail={() => { setHas3d(false); setIntro(false); }} />}
    {(!entered || flat) && <div className="mi-backdrop" aria-hidden="true"><i /><i /><i /></div>}

    {/* ------------------------------------------------ title */}
    {!entered && <section className="mi-title" aria-labelledby="mi-title-h">
      <div className="mi-title-card">
        <p className="mi-kicker">Conversación 3D · Todo Madrid · {TOTAL} escenas · {STREET_TOTAL} sobrevivientes · A0–C2</p>
        <h1 id="mi-title-h">Madrid infectada <span>El último brote</span></h1>
        <p className="mi-lede">Un virus ha escapado de un laboratorio y Madrid está aislada. Tu mascota llega con una vacuna experimental, una mochila de dosis y una pistola que dispersa la nube. Madrid entera es tuya: de Sol a la Gran Vía y Malasaña, de la Plaza Mayor al Palacio Real y la Plaza de la Armería, del Templo de Debod a Cibeles, la Puerta de Alcalá, el Retiro, Atocha y Madrid Río, con el Metro por debajo. Las calles están llenas de muertos que caminan. Escucha a quien sigue vivo y cuenta lo que tú harías.</p>
        <p className="mi-label">Elige el nivel</p>
        <div className="mi-levels" role="radiogroup" aria-label="Nivel">
          {LEVELS.map(l => <button key={l.id} type="button" role="radio" aria-checked={level === l.id} className={level === l.id ? 'is-on' : undefined} onClick={() => setState(s => setLevel(s, l.id))}>
            <b>{l.label}</b><small>{l.hint}</small>{circlesDone(state, l.id).length + streetDone(state, l.id).length > 0 && <em>{circlesDone(state, l.id).length}/{TOTAL} · 💬 {streetDone(state, l.id).length}</em>}
          </button>)}
        </div>
        <div className="mi-options-row">
          <div className="mi-teach" role="radiogroup" aria-label="Cómo se usa">
            <button type="button" role="radio" aria-checked={teaching === 'profesor'} onClick={() => changeTeaching('profesor')}><b>Con profesor</b><small>Progreso por alumno</small></button>
            <button type="button" role="radio" aria-checked={teaching === 'solo'} onClick={() => changeTeaching('solo')}><b>Por mi cuenta</b><small>Progreso en este navegador</small></button>
          </div>
          <ModeSwitch mode={mode} onChange={switchMode} />
        </div>
        {teaching === 'profesor' && <div className="mi-studentbar"><StudentBar lessonId={LESSON_ID} level={level} studentId={studentId} onSelect={selectStudent} onReset={() => setState(s => resetLevel(s))} sync={remote ? sync : 'local'} /></div>}
        <p className="mi-note">{mode === 'escucha'
          ? 'Comprensión auditiva: cada zona tiene su propia escucha de la misma historia, con la voz de sus personajes. Escuchar, elegir, responder, completar y leer.'
          : 'Conversación: en cada círculo blanco hay una escena de la historia, y por las calles hay sobrevivientes (💬) que también quieren hablar. Cada escena tiene su diálogo y «TU TURNO»: dos preguntas sobre tu vida real.'}</p>
        <button type="button" className="mi-enter" onClick={enter}>{state.arrived ? 'Volver a Madrid' : 'Entrar en Madrid'}</button>
        <p className="mi-help">Flechas o WASD para caminar · Espacio para saltar · Shift para correr · N para el nitro · F para disparar a la nube o a un zombi · E para hablar o bajar al metro. En el móvil: joystick y botones. La llegada dura unos 12 segundos y se puede omitir.</p>
      </div>
    </section>}

    {/* ------------------------------------------------ the arrival */}
    {entered && intro && has3d && <div className="mi-intro">
      <div className="mi-radio" role="status" aria-live="polite">
        <span className="mi-radio-tag">📻 Radio Kilómetro Cero · 98.4</span>
        <p key={radioAt}>{RADIO[radioAt].es}{(level === 'A0' || level === 'A1') && <small lang="en">{RADIO[radioAt].en}</small>}</p>
      </div>
      <button type="button" className="mi-skip" onClick={skipIntro}>Omitir la llegada →</button>
    </div>}

    {/* ------------------------------------------------ HUD */}
    {entered && !intro && <header className="mi-hud">
      <div className="mi-where"><span>{pose?.place ?? (here === 'metro' ? 'Bajo tierra' : 'Madrid')}{pose?.target != null && pose.target > 4 ? ` · siguiente escena a ${pose.target} m` : ''}</span><b>{hereName}</b></div>
      <div className="mi-meters" aria-label="Progreso">
        <span title="Escenas de la historia hechas en este nivel">{mode === 'escucha' ? `🎧 ${heardZones}/${ZONES.length}` : `⭕ ${circles.length}/${TOTAL}`}</span>
        <span title="Sobrevivientes con los que has hablado en este nivel">💬 {met.length}/{STREET_TOTAL}</span>
        <span title="Fragmentos de la fórmula recuperados">🧪 {circles.length}/{TOTAL}</span>
        <span title="Zonas aseguradas">🛡 {cleared.length}/{ZONES.length}</span>
        <span title="Dosis usadas en esta sesión">💉 {doses}</span>
      </div>
      <div className="mi-hud-right">
        <ModeSwitch mode={mode} onChange={switchMode} className="mi-mode" />
        <button type="button" onClick={() => setRoute(r => !r)} aria-pressed={route}>Ruta</button>
        {mode === 'escucha' && <button type="button" onClick={() => setListenAt(null)}>Escuchas</button>}
        <button type="button" onClick={() => setSound(s => !s)} aria-pressed={!sound} aria-label={sound ? 'Silenciar el ambiente' : 'Activar el ambiente'}>{sound ? '🔊' : '🔇'}</button>
        <button type="button" onClick={() => { setSpotOpen(null); setEntered(false); setFinale(false); setEnding(false); }}>Nivel {level}</button>
      </div>
    </header>}

    {vax && <p className={`mi-vax is-${vax}`} role="status"><i aria-hidden="true" />{VAX_TEXT[vax]}</p>}
    {toast && playing && <p className="mi-toast" role="status">{toast}</p>}

    {playing && mode === 'escucha' && listenAt === undefined && !spotOpen && <ListeningBadge game="madrid" done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game="madrid" level={level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} onAudio={onAudio} />}

    {playing && !busy && !vax && near && <div className="mi-prompt" role="status">
      <button type="button" onClick={() => setAct(a => a + 1)}><kbd>E</kbd>{
        nearSpot ? (mode === 'escucha' ? `Escuchar · ${ZONES.find(z => z.id === nearSpot.zone)?.name}` : `Hablar con ${CAST[nearSpot.cast[0]].name}`)
          : nearSurvivor ? `Hablar con ${nearSurvivor.name}${done.includes(`calle/${near.id}`) ? ' otra vez' : ''}`
            : near.kind === 'metro' ? `Bajar al metro · ${near.name ?? ''}`
              : near.id === 'east' ? 'Subir a la calle · El Retiro' : 'Subir a la calle · Puerta del Sol'}</button>
    </div>}
    {playing && has3d && !busy && !near && !vax && <p className="mi-hint">{circles.length === 0 && met.length === 0
      ? 'Sigue la flecha verde hasta el círculo blanco. Los 💬 son sobrevivientes que quieren hablar. F dispara a la nube y a los zombis.'
      : here === 'metro' ? 'El andén sale a Sol por un lado y al Retiro por el otro.'
        : 'La flecha verde lleva a la siguiente escena. Los rombos rojos del plano son bocas de metro.'}</p>}
    {playing && has3d && !busy && <button type="button" className="mi-fire" onClick={() => setFire(f => f + 1)} aria-label="Disparar a la nube o a un zombi (F)">✦ Disparar <kbd>F</kbd></button>}
    {playing && has3d && !busy && pose && <CityMap x={pose.x} z={pose.z} heading={pose.heading} done={done} spotZone={SPOT_ZONE} target={targetAt} under={here === 'metro'} />}

    {/* ------------------------------------------------ the route: ten zones, revisitable */}
    {entered && !intro && (route || (flat && !spotOpen && listenAt === undefined && !ending)) && <section className="mi-panel mi-route" aria-labelledby="mi-route-h">
      <h2 id="mi-route-h">La ruta · {level}</h2>
      {flat && <p className="mi-flat-note">Este dispositivo no muestra el mundo 3D: las mismas escenas se abren desde esta lista.</p>}
      <ol className="mi-route-list">
        {ZONES.map((z, i) => <li key={z.id} className={`${z.id === state.zone ? 'is-here' : ''}${counts[z.id] >= 2 ? ' is-cleared' : ''}`}>
          <h3><span>{i + 1}</span>{z.name} <small>{mode === 'escucha' ? (heard.includes(z.id) ? '🎧 ✓' : '🎧') : `${counts[z.id]}/2`}</small></h3>
          <p>{z.hook}</p>
          <div className="mi-route-spots">
            {mode === 'escucha'
              ? <button type="button" onClick={() => { goZone(z.id); setListenAt(z.id); }}>Escuchar</button>
              : SPOTS.filter(s => s.zone === z.id).map(s => {
                const isDone = done.includes(spotKey(z.id, s.id));
                return <button key={s.id} type="button" className={isDone ? 'is-done' : undefined} onClick={() => goZone(z.id, s.id)}>{CAST[s.cast[0]].name}{isDone && <i aria-label="hecha"> ✓</i>}</button>;
              })}
            {has3d && <button type="button" className="mi-go" onClick={() => goZone(z.id)}>Ir</button>}
          </div>
        </li>)}
      </ol>
      <h3 className="mi-route-sub">Sobrevivientes de la calle · {met.length}/{STREET_TOTAL} <small>textos {BAND_LABEL[band]}</small></h3>
      <ul className="mi-survivors">
        {ENCOUNTERS.map(e => { const isDone = done.includes(`calle/${e.id}`); const who = PEOPLE[e.id]; return <li key={e.id}>
          <button type="button" className={isDone ? 'is-done' : undefined} onClick={() => goZone(ZONE_OF_SURVIVOR[e.id], `calle/${e.id}`)}><b>{who.name}</b><small>{who.role}</small>{isDone && <i aria-label="hecha"> ✓</i>}</button>
        </li>; })}
      </ul>
      <div className="mi-row">
        {has3d && <button type="button" className="mi-secondary" onClick={() => setRoute(false)}>Volver a la calle</button>}
        <button type="button" className="mi-secondary" onClick={() => setState(s => resetLevel(s))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ scene card */}
    {scene && openInfo && <SceneCard key={`${openInfo.id}-${level}`} id={openInfo.id} zoneName={ZONES.find(z => z.id === openInfo.zone)!.name} scene={scene} level={level} teaching={teaching}
      done={done.includes(spotKey(openInfo.zone, openInfo.id))} onDone={finish} onClose={closeCard} onNext={goNext} nextName={nextLabel}
      onFinale={openInfo.id === 'barca' && has3d ? startFinale : null} />}
    {scene && survivorId && PEOPLE[survivorId] && <SceneCard key={`calle-${survivorId}-${band}`} id={survivorId} zoneName={pose?.place ?? ZONES.find(z => z.id === ZONE_OF_SURVIVOR[survivorId])?.name ?? 'Madrid'} scene={scene} level={level} teaching={teaching}
      done={done.includes(`calle/${survivorId}`)} onDone={finish} onClose={closeCard} onNext={null} nextName={null} onFinale={null}
      person={PEOPLE[survivorId]} people={PEOPLE} band={BAND_LABEL[band]} />}
    {spotOpen && !scene && <div className="mi-card mi-card-loading" role="status">{failed ? 'No se pudo cargar la escena. Revisa la conexión y vuelve a abrir el círculo.' : 'Cargando la escena…'}</div>}

    {/* ------------------------------------------------ the end of the mission */}
    {ending && <section className="mi-panel mi-ending" aria-labelledby="mi-end-h">
      <p className="mi-kicker">Madrid Río · amanecer</p>
      <h2 id="mi-end-h">Misión cumplida</h2>
      <p>La barca de Jaime deja atrás el Puente de Segovia con la fórmula en la mochila. Doña Remedios te dice adiós desde su portal: ella se queda. En el hospital de campaña ya esperan el mensaje.</p>
      <ul className="mi-end-stats">
        <li><b>{circles.length}/{TOTAL}</b> escenas</li>
        <li><b>{met.length}/{STREET_TOTAL}</b> sobrevivientes</li>
        <li><b>{cleared.length}/{ZONES.length}</b> zonas aseguradas</li>
        <li><b>{doses}</b> dosis usadas</li>
      </ul>
      {circles.length < TOTAL && <p className="mi-end-note">Te quedan escenas sin hacer: la ciudad sigue abierta y puedes volver a cualquier zona desde «Ruta».</p>}
      <div className="mi-row">
        <button type="button" className="mi-primary" onClick={() => setEnding(false)}>Seguir en Madrid</button>
        <button type="button" className="mi-secondary" onClick={() => { setEnding(false); setRoute(true); }}>Ver la ruta</button>
        <button type="button" className="mi-secondary" onClick={() => { setEnding(false); setEntered(false); }}>Elegir otro nivel</button>
      </div>
    </section>}
  </main>;
}
