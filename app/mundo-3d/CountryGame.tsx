'use client';

// Mundo 3D · the lesson around the 3D country: the level screen, the arrival,
// the map of regions, each region's zone and the conversation at every spot.
// Both modes of the 3D classes live in the same world (Conversación and
// Comprensión auditiva), and so do the two ways of using it: «Con profesor»
// (progress per student in the teacher's account) and «Por mi cuenta»
// (progress in this browser). Without WebGL everything opens from a list.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { StudentBar } from '../grammar-classroom/live/StudentBar';
import type { SyncState } from '../grammar-classroom/live/store';
import { setShoutMuted } from '../escucha-3d/shout';
import { setVoicesOn, stopSpeaking, voicesOn } from '../noche-abierta/voice';
import { createProgress, doneFor, fromSaved, markDone, nextSpot, normaliseLevel, regionCount, resetLevel, restore, serialise, setLevel, spotKey, storageKey, toSaved, visit } from './progress.mjs';
import type { Progress } from './progress.d.mts';
import { createAmbience, type Ambience } from './ambience';
import { GREETINGS, LEVEL_INFO } from './frames';
import { SpotCard, type Teaching } from './SpotCard';
import type { Near, Pose, View } from './World3D';
import type { SceneBuilder } from './kit3d';
import type { CountryInfo, RegionContent, WorldLevel } from './types';
import { WORLD_LEVELS } from './types';
import type { GameId } from '../escucha-3d/types';
import './world.css';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="mw-loading">Preparando el vuelo…</div> });

function webglAvailable() {
  try { const c = document.createElement('canvas'); return Boolean(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch { return false; }
}
const readPref = (key: string) => { try { return window.localStorage.getItem(key); } catch { return null; } };
const writePref = (key: string, value: string | null) => { try { if (value === null) window.localStorage.removeItem(key); else window.localStorage.setItem(key, value); } catch { /* private mode */ } };

type Props = {
  country: CountryInfo;
  rings: Record<string, number[][][]>;
  loadContent: (id: string) => Promise<RegionContent>;
  loadScene: (id: string) => Promise<SceneBuilder>;
  listening: GameId;
  /** Shown on the level screen: another way into the same country (the 2D atlas…). */
  extra?: React.ReactNode;
};

export default function CountryGame({ country, rings, loadContent, loadScene, listening, extra }: Props) {
  const regions = country.regions;
  const key = storageKey(country.id);
  const [progress, setProgress] = useState<Progress>(() => createProgress());
  const [ready, setReady] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [screen, setScreen] = useState<'levels' | 'world'>('levels');
  const [view, setView] = useState<View>('intro');
  const [landed, setLanded] = useState(false);
  const [contents, setContents] = useState<Record<string, RegionContent>>({});
  const [spotOpen, setSpotOpen] = useState<string | null>(null);
  const [, setPendingSpot] = useState<string | null>(null);
  const [near, setNear] = useState<Near>(null);
  const [act, setAct] = useState(0);
  const [pose, setPose] = useState<Pose | null>(null);
  const [list, setList] = useState(false);
  const [sound, setSound] = useState(true);
  const [voices, setVoices] = useState(false);
  const [teaching, setTeaching] = useState<Teaching>('solo');
  const [studentId, setStudentId] = useState<string | null>(null);
  const [sync, setSync] = useState<SyncState>('local');
  const [inset, setInset] = useState({ right: 0, bottom: 0 });
  const [mode, setMode] = useListeningMode(listening);
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);
  const [heard, markHeard] = useListeningDone(listening, progress.level);
  const ambience = useRef<Ambience | null>(null);
  const saveTimer = useRef(0);
  const loadedFor = useRef<string | null>(null);

  const level = progress.level as WorldLevel;
  const regionId = view.startsWith('region:') ? view.slice(7) : null;
  const region = regions.find(r => r.id === regionId) ?? null;
  const content = regionId ? contents[regionId] : undefined;
  const done = doneFor(progress);
  const counts = useMemo(() => regionCount(progress, regions), [progress, regions]);
  const total = regions.reduce((n, r) => n + r.spots.length, 0);

  // ------------------------------------------------------------ restore and save
  useEffect(() => {
    const t = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      let saved = restore(readPref(key));
      const asked = normaliseLevel(params.get('level') ?? params.get('nivel'));
      if (asked) saved = setLevel(saved, asked);
      setProgress(saved);
      setTeaching(readPref(`${key}:modo`) === 'profesor' ? 'profesor' : 'solo');
      setStudentId(readPref(`${key}:alumno`));
      setVoices(voicesOn() && readPref(`${key}:voces`) === 'on');
      setHas3d(webglAvailable());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, [key]);
  const remote = teaching === 'profesor' && Boolean(studentId);
  useEffect(() => {
    if (!ready || remote) return;
    writePref(key, serialise(progress));
  }, [progress, ready, remote, key]);
  // «Con profesor» with a student: that student's progress lives in the teacher's account.
  useEffect(() => {
    if (!ready || !remote || !studentId) { loadedFor.current = null; return; }
    if (loadedFor.current === studentId) return;
    let alive = true;
    setSync('loading');
    fetch(`/api/live-class?lessonId=${country.lessonId}&studentId=${encodeURIComponent(studentId)}`, { cache: 'no-store', credentials: 'same-origin' })
      .then(async r => r.ok ? (await r.json() as { session: { saved: unknown } | null }).session : Promise.reject(new Error(String(r.status))))
      .then(session => { if (!alive) return; loadedFor.current = studentId; setProgress(p => session ? setLevel(fromSaved(session.saved), p.level) : createProgress(p.level)); setSync('saved'); })
      .catch(() => { if (alive) { loadedFor.current = studentId; setSync('error'); } });
    return () => { alive = false; };
  }, [ready, remote, studentId, country.lessonId]);
  useEffect(() => {
    if (!remote || !studentId || loadedFor.current !== studentId) return;
    window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      setSync('saving');
      fetch('/api/live-class', { method: 'PUT', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ lessonId: country.lessonId, studentId, saved: toSaved(progress, regions) }) })
        .then(r => setSync(r.ok ? 'saved' : 'error')).catch(() => setSync('error'));
    }, 800);
    return () => window.clearTimeout(saveTimer.current);
  }, [progress, remote, studentId, country.lessonId, regions]);

  // ------------------------------------------------------------ content on demand
  useEffect(() => {
    if (!regionId || contents[regionId]) return;
    let alive = true;
    loadContent(regionId).then(c => { if (alive) setContents(all => ({ ...all, [regionId]: c })); }).catch(() => undefined);
    return () => { alive = false; };
  }, [regionId, contents, loadContent]);

  // ------------------------------------------------------------ sound
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setKind(screen === 'world' ? (region?.sound ?? 'sky') : null); }, [region?.sound, screen]);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.duck(spotOpen || listenAt !== undefined ? 0.3 : 1); }, [spotOpen, listenAt]);

  // The open card covers part of the screen: the 3D talk is framed beside it.
  useEffect(() => {
    const measure = () => {
      const wide = window.innerWidth > 900;
      setInset(spotOpen ? (wide ? { right: Math.min(460, window.innerWidth * 0.42), bottom: 0 } : { right: 0, bottom: window.innerHeight * 0.56 }) : { right: 0, bottom: 0 });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [spotOpen]);

  // ------------------------------------------------------------ actions
  const start = (next: WorldLevel) => {
    setProgress(p => setLevel(p, next));
    ambience.current?.start();
    setScreen('world');
    setSpotOpen(null); setListenAt(undefined);
    if (!has3d) { setView('map'); return; }
    if (!landed) setView('intro');
  };
  const onIntroBeat = useCallback((beat: 'engine' | 'touchdown' | 'sign' | 'end') => {
    if (beat === 'engine') ambience.current?.engine(1);
    if (beat === 'touchdown') ambience.current?.engine(0.35);
    if (beat === 'sign') { ambience.current?.engine(0); ambience.current?.chime(); }
    if (beat === 'end') { setLanded(true); setView('map'); }
  }, []);
  const skipIntro = () => { ambience.current?.engine(0); setLanded(true); setView('map'); };
  const goRegion = useCallback((id: string, spot: string | null = null) => {
    setSpotOpen(null); setListenAt(undefined); setList(false);
    setProgress(p => visit(p, id, spot));
    if (spot) setPendingSpot(spot);
    setView(`region:${id}`);
  }, []);
  const goMap = useCallback(() => { setSpotOpen(null); setListenAt(undefined); setList(false); setView('map'); }, []);
  const openSpot = useCallback((id: string) => {
    if (!regionId) return;
    setList(false);
    if (mode === 'escucha') { setListenAt(regionId); return; }
    setSpotOpen(id);
    setProgress(p => visit(p, regionId, id));
  }, [mode, regionId]);
  const onRegionReady = useCallback((id: string) => {
    setPendingSpot(spot => { if (spot) window.setTimeout(() => { setSpotOpen(spot); setProgress(p => visit(p, id, spot)); }, 350); return null; });
  }, []);
  const closeCard = useCallback(() => { stopSpeaking(); setSpotOpen(null); }, []);
  const finish = useCallback(() => { if (regionId && spotOpen) setProgress(p => markDone(p, regionId, spotOpen)); }, [regionId, spotOpen]);
  const next = regionId && spotOpen ? nextSpot(progress, regions, regionId, spotOpen) : null;
  const nextInfo = next ? regions.find(r => r.id === next.region)?.spots.find(s => s.id === next.spot) ?? null : null;
  const goNext = next ? () => { if (next.region === regionId) { setSpotOpen(null); window.setTimeout(() => openSpot(next.spot), 60); } else goRegion(next.region, next.spot); } : null;
  const other = () => {
    if (!region || !spotOpen) return;
    const pool = region.spots.filter(s => s.id !== spotOpen);
    const pick = pool.find(s => !done.includes(spotKey(region.id, s.id))) ?? pool[Math.floor(Math.random() * pool.length)];
    setSpotOpen(null);
    window.setTimeout(() => openSpot(pick.id), 60);
  };
  const changeTeaching = (value: Teaching) => { setTeaching(value); writePref(`${key}:modo`, value); if (value === 'solo') { setProgress(restore(readPref(key))); } };
  const selectStudent = (id: string | null) => { loadedFor.current = null; setStudentId(id); writePref(`${key}:alumno`, id); if (!id) setProgress(p => setLevel(restore(readPref(key)), p.level)); };
  const switchMode = (value: typeof mode) => { setMode(value); setListenAt(undefined); setSpotOpen(null); };
  const toggleVoices = () => setVoices(v => { const nv = !v; setVoicesOn(nv); writePref(`${key}:voces`, nv ? 'on' : 'off'); return nv; });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || screen !== 'world') return;
      if (spotOpen) { closeCard(); return; }
      if (list) { setList(false); return; }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [screen, spotOpen, list, closeCard]);

  const spot = content && spotOpen ? content.spots.find(s => s.id === spotOpen) ?? null : null;
  const nearRegion = near?.kind === 'gate' ? regions.find(r => r.id === near.id) : null;
  const nearSpot = near?.kind === 'spot' && region ? region.spots.find(s => s.id === near.id) : null;
  const nearWho = nearSpot && content ? content.spots.find(s => s.id === nearSpot.id)?.who : null;
  const islandName = pose?.island ? regions.find(r => r.id === pose.island)?.name.es : null;
  const busy = Boolean(spotOpen) || listenAt !== undefined || list;
  const flat = ready && !has3d;
  const heardHere = regions.filter(r => heard.includes(r.id)).length;

  return <main className="mw" data-level={level} data-view={screen === 'levels' ? 'levels' : view} data-mode={mode} data-conversation-family={country.lessonId === 36 ? 'estados-unidos-a2-b1' : country.id}>
    {ready && has3d && screen === 'world' && <World3D country={country} level={level} rings={rings} loadScene={loadScene} view={view} spotOpen={spotOpen} done={done}
      paused={list || listenAt !== undefined} inset={inset} greetings={GREETINGS}
      act={act} onIntroBeat={onIntroBeat} onNear={setNear} onGate={id => goRegion(id)} onSpot={openSpot} onExit={goMap}
      onRegionReady={onRegionReady} onPose={setPose} onFail={() => { setHas3d(false); setView('map'); }} />}
    {(screen === 'levels' || flat) && <div className="mw-backdrop" aria-hidden="true"><i /><i /><i /></div>}

    {/* ------------------------------------------------ level screen */}
    {screen === 'levels' && <section className="mw-title" aria-labelledby="mw-title-h">
      <div className="mw-title-card">
        <p className="mw-kicker">Conversación 3D · {regions.length} estados · {total} lugares</p>
        <h1 id="mw-title-h">{country.name.es}</h1>
        <p className="mw-lede">Aterrizas, recorres el mapa, entras en Florida, Nueva York, California, Texas, Hawái o Colorado y hablas con la gente de cada lugar. Cada lugar tiene su situación, una decisión, una sorpresa y una conversación de verdad.</p>
        <p className="mw-label">Elige el nivel y despega</p>
        <div className="mw-levels">
          {WORLD_LEVELS.map(l => <button key={l} type="button" className={level === l ? 'is-on' : undefined} onClick={() => start(l)} data-level-start={l}>
            <b>{LEVEL_INFO[l].title}</b><span>{LEVEL_INFO[l].hint.es}</span><small lang="en">{LEVEL_INFO[l].hint.en}</small>
            <em>{counts && progress.level === l ? `${done.length} de ${total} hechos` : 'Despegar →'}</em>
          </button>)}
        </div>
        <div className="mw-options-row">
          <div className="mw-teach" role="radiogroup" aria-label="Cómo se usa">
            <button type="button" role="radio" aria-checked={teaching === 'profesor'} onClick={() => changeTeaching('profesor')}><b>Con profesor</b><small>Progreso por alumno</small></button>
            <button type="button" role="radio" aria-checked={teaching === 'solo'} onClick={() => changeTeaching('solo')}><b>Por mi cuenta</b><small>Progreso en este navegador</small></button>
          </div>
          <ModeSwitch mode={mode} onChange={switchMode} />
        </div>
        {teaching === 'profesor' && <div className="mw-studentbar"><StudentBar lessonId={country.lessonId} level={level} studentId={studentId} onSelect={selectStudent} onReset={() => setProgress(p => resetLevel(p))} sync={remote ? sync : 'local'} /></div>}
        <p className="mw-help">Flechas o WASD para caminar · Espacio para saltar · Shift para correr · N para el nitro · E para entrar y hablar. En el móvil: joystick y botones. La intro dura unos 14 segundos y se puede omitir.</p>
        {extra}
      </div>
    </section>}

    {/* ------------------------------------------------ the arrival */}
    {screen === 'world' && view === 'intro' && has3d && <div className="mw-intro">
      <p className="mw-intro-tag">Vuelo SC 36 · Aterrizando en {country.name.es}</p>
      <button type="button" className="mw-skip" onClick={skipIntro}>Omitir intro →</button>
    </div>}

    {/* ------------------------------------------------ HUD */}
    {screen === 'world' && (view !== 'intro' || flat) && <header className="mw-hud">
      <div className="mw-where">
        <span>{country.name.es}{region ? ` · ${region.name.es}` : ''}</span>
        <b>{region ? region.zone.es : islandName ?? 'Aeropuerto'}</b>
      </div>
      <div className="mw-hud-right">
        <span className="mw-progress">{mode === 'escucha' ? `${heardHere} de ${regions.length} escuchas` : `${done.length} de ${total} lugares`}</span>
        <label className="mw-level-pick"><span className="sr-only">Nivel</span>
          <select value={level} onChange={e => { stopSpeaking(); setSpotOpen(null); setListenAt(undefined); setProgress(p => setLevel(p, e.target.value)); }}>
            {WORLD_LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </label>
        <ModeSwitch mode={mode} onChange={switchMode} className="mw-mode" />
        <button type="button" onClick={() => mode === 'escucha' ? setListenAt(null) : setList(true)}>{mode === 'escucha' ? 'Escuchas' : 'Lugares'}</button>
        {region && has3d && <button type="button" onClick={goMap}>Mapa</button>}
        <button type="button" onClick={() => setSound(s => !s)} aria-pressed={!sound} aria-label={sound ? 'Silenciar el ambiente' : 'Activar el ambiente'}>{sound ? '🔊' : '🔇'}</button>
        <button type="button" onClick={toggleVoices} aria-pressed={voices} title="El personaje lee su primera frase con la voz del navegador">Voces {voices ? 'sí' : 'no'}</button>
        <button type="button" onClick={() => { setSpotOpen(null); setScreen('levels'); }}>Inicio</button>
      </div>
    </header>}

    {screen === 'world' && view !== 'intro' && !busy && near && <div className="mw-prompt" role="status">
      {nearRegion ? <button type="button" onClick={() => goRegion(nearRegion.id)}><kbd>E</kbd>Entrar en {nearRegion.name.es} · {nearRegion.zone.es}</button>
        : nearSpot ? <button type="button" onClick={() => openSpot(nearSpot.id)}><kbd>E</kbd>{mode === 'escucha' ? `Escuchar · ${region?.name.es}` : `Hablar con ${nearWho?.name ?? ''} · ${nearSpot.name.es}`}</button>
        : near.kind === 'door' ? <button type="button" onClick={() => setAct(a => a + 1)}><kbd>E</kbd>{near.label}</button>
        : <button type="button" onClick={goMap}><kbd>E</kbd>Volver al mapa</button>}
    </div>}
    {screen === 'world' && has3d && view === 'map' && !busy && !near && <p className="mw-hint">Cruza un puente o entra en un portal. Delante de cada puerta, pulsa E para entrar en el estado.</p>}
    {screen === 'world' && has3d && region && !busy && !near && <p className="mw-hint">Los círculos blancos son conversaciones. El arco «MAPA» te devuelve a las islas.</p>}

    {screen === 'world' && mode === 'escucha' && listenAt === undefined && !spotOpen && <ListeningBadge game={listening} done={heard} onList={() => setListenAt(null)} />}
    {listenAt !== undefined && <ListeningCard game={listening} level={level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} />}

    {/* ------------------------------------------------ places (teacher navigation and the no-3D way) */}
    {screen === 'world' && (list || (flat && !spotOpen && listenAt === undefined)) && <section className="mw-panel mw-list" aria-labelledby="mw-list-h">
      <h2 id="mw-list-h">Lugares · {level}</h2>
      {flat && <p className="mw-flat-note">Este dispositivo no muestra el mundo 3D: las mismas conversaciones se abren desde esta lista.</p>}
      <div className="mw-list-grid">
        {regions.map(r => <div key={r.id} className="mw-list-region" style={{ '--tint': r.color } as React.CSSProperties}>
          <h3>{r.name.es} <small>{r.zone.es} · {counts[r.id]}/{r.spots.length}</small></h3>
          <ol>{r.spots.map(s => {
            const isDone = done.includes(spotKey(r.id, s.id));
            return <li key={s.id}><button type="button" className={isDone ? 'is-done' : undefined} onClick={() => {
              if (r.id === regionId) openSpot(s.id);
              else if (!has3d) { setView(`region:${r.id}`); setList(false); setPendingSpot(null); setTimeout(() => { setSpotOpen(s.id); }, 0); }
              else goRegion(r.id, s.id);
            }}>{s.name.es}{isDone && <i aria-label="hecho">✓</i>}</button></li>;
          })}</ol>
        </div>)}
      </div>
      <div className="mw-row">
        {has3d && <button type="button" className="mw-secondary" onClick={() => setList(false)}>Volver al mundo</button>}
        <button type="button" className="mw-secondary" onClick={() => setProgress(p => resetLevel(p))}>Empezar el nivel de nuevo</button>
      </div>
    </section>}

    {/* ------------------------------------------------ conversation card */}
    {spot && region && <SpotCard key={`${region.id}-${spot.id}-${level}`} spot={spot} regionName={region.name} level={level} teaching={teaching} voices={voices}
      done={done.includes(spotKey(region.id, spot.id))} onDone={finish} onClose={closeCard} onOther={other}
      onNext={goNext} nextName={nextInfo?.name ?? null} onMap={has3d ? goMap : closeCard} />}
    {spotOpen && !spot && <div className="mw-card mw-card-loading" role="status">Cargando la conversación…</div>}
  </main>;
}
