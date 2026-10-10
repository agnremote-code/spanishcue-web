'use client';

import Link from 'next/link';
import { Component, useCallback, useEffect, useRef, useState, type ComponentType, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { LEVELS, NPCS, ITEMS, SPELLS, QUESTS } from './content.mjs';
import { SAVE_KEY, createGame, restoreGame, reduceGame, currentQuest, getDialogue, evaluateAnswer, actionFeedback, type GameState } from './engine.mjs';
import type { WorldProps } from './World3D';
import { playClips, stopAudio, warmVoices } from '../autoestudio/engine/speech';
import { RealmAudio } from './audio';
import './reino.css';

const AUDIO_KEY = 'spanishcue:rosa-dormida:audio:v1';
type Position = { x: number; y: number; z: number };
type Panel = 'map' | 'journal' | 'inventory' | 'pause' | 'help' | null;
type Recognition = {
  lang: string; continuous: boolean; interimResults: boolean;
  onresult: ((event: { results: { [index: number]: { [index: number]: { transcript: string } }; length: number } }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null; start: () => void; stop: () => void; abort: () => void;
};
type VoiceWindow = Window & { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };

const LEVEL_LABELS: Record<string, string> = { A0: 'Primeras palabras', A1: 'Una nueva aventura', A2: 'Historias y caminos', B1: 'Razones y decisiones', B2: 'Perspectivas y dilemas', C1: 'Matices e intenciones', C2: 'El poder de la palabra' };
const SPELL_GLYPHS: Record<string, string> = { lumaria: '✧', ventaria: '≋', floralis: '❧', aurora: '◇' };
const NPC_GLYPHS: Record<string, string> = { nox: '✦', liora: '❧', aldren: '♜', bruno: '⚒', ines: '⌂', celina: '❀', baltasar: '▤', teobaldo: '♧', brum: '♜', tejedora: '✵', elara: '♕' };
const MAP_PLACES = [
  { id: 'nox', name: 'Colina del Amanecer', x: 0, z: 18 },
  { id: 'bruno', name: 'Aldea de los Susurros', x: 20, z: 0 },
  { id: 'liora', name: 'Bosque Encantado', x: -10, z: 0 },
  { id: 'aldren', name: 'Puente de las Espinas', x: 0, z: -43 },
  { id: 'celina', name: 'Jardines Reales', x: -3, z: -47 },
  { id: 'baltasar', name: 'Castillo de Valdoria', x: -14, z: -86 },
  { id: 'brum', name: 'Guarida del Dragón', x: -10, z: -111 },
  { id: 'elara', name: 'Torre de Elara', x: 10, z: -132.4 },
];
const MAP_TARGETS: Record<string, {x:number;z:number}> = { ...Object.fromEntries(MAP_PLACES.map(place => [place.id, place])), ines:{x:14,z:10},teobaldo:{x:10,z:-78},tejedora:{x:10,z:-119},grove:{x:-10,z:-7},thorns:{x:0,z:-49},dragon:{x:-10,z:-111},altar:{x:10,z:-126},mill:{x:24,z:7},key:{x:24,z:7},rose:{x:-8,z:-59},scroll:{x:-14,z:-89},crystal:{x:-4,z:-113} };

function Rose({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M50 7 61 23 79 21 78 40 93 50 77 61 79 80 60 78 50 94 39 78 21 80 23 61 7 50 23 40 21 21 40 23Z" stroke="currentColor" strokeWidth="1" /><path d="M50 22c17-5 33 14 22 30 4 16-18 30-29 20-19 2-28-23-14-32 0-11 10-20 21-18Z" stroke="currentColor" strokeWidth="1.4"/><path d="M50 34c13-6 24 11 13 20 0 15-21 18-25 3-12-8-2-26 12-23Z" stroke="currentColor" strokeWidth="1.5"/><path d="m50 41 9 10-9 10-9-10Z" stroke="currentColor"/><circle cx="50" cy="51" r="3" fill="currentColor"/></svg>;
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    map: <><path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2Z"/><path d="M9 3v16M15 5v16"/></>,
    book: <><path d="M12 5C8 2 4 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-2-1-6-2-10 1Z"/><path d="M12 5v16"/></>,
    bag: <><path d="M6 8h12l2 13H4Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3M8 13h8"/></>,
    pause: <><path d="M8 4v16M16 4v16"/></>,
    music: <><path d="M9 18V5l11-2v13M9 8l11-2"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="17" cy="16" rx="3" ry="2"/></>,
    sound: <><path d="m11 4-5 4H2v8h4l5 4ZM15 8c3 2 3 6 0 8M18 4c6 5 6 11 0 16"/></>,
    mic: <><rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/></>,
    arrow: <><path d="M4 12h16M14 6l6 6-6 6"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    help: <><circle cx="12" cy="12" r="10"/><path d="M9 8a3 3 0 1 1 4 3c-1 .5-1 1-1 3M12 17v1"/></>,
    check: <><path d="m4 12 5 5L20 6"/></>,
    leaf: <><path d="M20 3C6 2 2 10 6 17c7 5 15 0 14-14ZM5 21 16 9"/></>,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.help}</svg>;
}

function KingdomMap({ position, target, large = false }: { position: Position; target: string; large?: boolean }) {
  const point = (x: number, z: number) => ({ x: 180 + x * 3.1, y: 35 + (z + 140) * 2.25 });
  const player = point(position.x, position.z);
  const active = MAP_TARGETS[target];
  const destination = active ? point(active.x,active.z) : null;
  return <svg className={`rr-map-art ${large ? 'rr-map-large' : ''}`} viewBox="0 0 360 470" role="img" aria-label="Mapa de Valdoria. Tu posición se indica con un punto dorado.">
    <defs><radialGradient id={large ? 'rr-map-large-bg' : 'rr-map-small-bg'}><stop stopColor="#1f403d"/><stop offset="1" stopColor="#10282a"/></radialGradient></defs>
    <rect width="360" height="470" rx="12" fill={`url(#${large ? 'rr-map-large-bg' : 'rr-map-small-bg'})`}/>
    <path d="M16 0 35 52 17 108 51 154 38 230 61 298 29 372 48 470M307 0l-32 71 43 61-26 89 25 50-36 75 31 124" stroke="#809480" strokeWidth="22" opacity=".12" fill="none"/>
    <path d="M320 12 278 65 300 115 259 168 277 224 257 277 273 321 241 373 254 420 240 470" stroke="#719a9c" strokeWidth="9" opacity=".25" fill="none"/>
    <path d="M180 408 144 370 157 329 223 293 180 266 180 217 180 168 180 110 180 60" stroke="#c8b18a" strokeWidth="2" strokeDasharray="4 5" opacity=".6" fill="none"/>
    {[[-70,1],[-30,.8],[70,.85],[98,1]].map(([dx,scale],i) => <g key={i} transform={`translate(${180 + dx} ${300 + (i % 2) * 40}) scale(${scale})`} opacity=".4" stroke="#7c9a80" strokeWidth="1" fill="#20463d"><path d="m0-32-13 22h7l-13 22h14v12h10V12h14L6-10h7Z"/></g>)}
    <g stroke="#baa477" fill="#243d3a" strokeWidth="1.4"><path d="M155 112V75h10v-9h12v46m6 0V66h12v9h10v37M165 88h30v24h-30M152 75l8-15 8 15m19 0 13-15 8 15M178 112V97h9v15"/><path d="M160 244v-12h40v12M164 232v-10m32 10v-10"/></g>
    {MAP_PLACES.map((place, index) => { const p = point(place.x,place.z); const isActive = target === place.id; return <g key={place.id}><circle cx={p.x} cy={p.y} r="3" fill="#bcb594" stroke="#142728" strokeWidth="2"/>{large && <text x={index % 2 ? 210 : 148} y={p.y + 4} textAnchor={index % 2 ? 'start' : 'end'} fill={isActive ? '#f3ddac' : '#bbc7b6'} fontSize="9" fontFamily="Georgia,serif">{place.name}</text>}</g>; })}
    {destination && <path d={`M${destination.x} ${destination.y-7}l6 7-6 7-6-7Z`} fill="#e9ca85" stroke="#142728" strokeWidth="1.5"/>}
    <circle cx={player.x} cy={player.y} r="11" fill="#f1d18b" opacity=".17"/>
    <circle cx={player.x} cy={player.y} r="4.5" fill="#ffe5a0" stroke="#102c29" strokeWidth="2"/>
    <path d="m330 28-4 11 4-3 4 3Z" fill="#cbbd95"/><text x="330" y="22" textAnchor="middle" fill="#cbbd95" fontSize="8">N</text>
  </svg>;
}

class WorldBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="rr-world-error"><Rose/><h2>El portal necesita un momento</h2><p>No se pudo iniciar el mundo 3D. Tu progreso guardado sigue disponible.</p><button className="rr-primary" onClick={() => window.location.reload()}>Volver a cargar</button></div> : this.props.children; }
}

export default function ReinoGame() {
  const [state, setState] = useState<GameState>(() => createGame('A1'));
  const stateRef = useRef(state);
  const [saved, setSaved] = useState<GameState | null>(null);
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [intro, setIntro] = useState(false);
  const [World, setWorld] = useState<ComponentType<WorldProps> | null>(null);
  const [worldError, setWorldError] = useState(false);
  const [worldKey, setWorldKey] = useState(0);
  const [panel, setPanel] = useState<Panel>(null);
  const [npc, setNpc] = useState<string | null>(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ text: string; accepted: boolean } | null>(null);
  const [hint, setHint] = useState(false);
  const [spell, setSpell] = useState('lumaria');
  const [position, setPosition] = useState<Position>({x:0,y:0,z:24});
  const [toast, setToast] = useState('');
  const [music, setMusic] = useState(true);
  const [effects, setEffects] = useState(true);
  const [saveFailed, setSaveFailed] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [victoryDismissed, setVictoryDismissed] = useState(false);
  const [endingReady, setEndingReady] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [micAvailable, setMicAvailable] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('');
  const [damaged, setDamaged] = useState(false);
  const audio = useRef<RealmAudio | null>(null);
  const recognition = useRef<Recognition | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const damageTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const quest = currentQuest(state);
  const dialogue = npc ? getDialogue(npc, state.level, state.dialogue[npc] ?? 0, state) : null;
  const ending = Boolean(state.flags.victory) && !victoryDismissed && !endingReady;
  const victory = Boolean(state.flags.victory) && !victoryDismissed && endingReady;

  const notify = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 5000);
  }, []);

  const apply = useCallback((action: Parameters<typeof reduceGame>[1]) => {
    const before = stateRef.current;
    const next = reduceGame(before, action);
    stateRef.current = next;
    setState(next);
    return { before, next };
  }, []);

  useEffect(() => {
    let live = true;
    let restored: GameState | null = null;
    try { const raw = window.localStorage.getItem(SAVE_KEY); if (raw) restored = restoreGame(JSON.parse(raw)); } catch { /* Broken or unavailable saves never prevent starting. */ }
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('level') ?? params.get('nivel');
    const initial = createGame(LEVELS.some(level => level === requested) ? requested! : restored?.level ?? 'A1');
    // Synchronize browser-only preferences after the server's stable first render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaved(restored); setState(initial); stateRef.current = initial; setReady(true);
    try { const preferences = JSON.parse(window.localStorage.getItem(AUDIO_KEY) ?? '{}'); setMusic(preferences.music !== false); setEffects(preferences.effects !== false); } catch { /* Defaults remain usable. */ }
    const voiceWindow = window as VoiceWindow;
    setMicAvailable(Boolean(voiceWindow.SpeechRecognition ?? voiceWindow.webkitSpeechRecognition));
    warmVoices();
    audio.current = new RealmAudio();
    import('./World3D').then(module => { if (live) setWorld(() => module.default); }).catch(() => { if (live) setWorldError(true); });
    return () => { live = false; audio.current?.dispose(); recognition.current?.abort(); stopAudio(); if (toastTimer.current) clearTimeout(toastTimer.current); if (damageTimer.current) clearTimeout(damageTimer.current); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    audio.current?.setPreferences(music, effects);
    try { window.localStorage.setItem(AUDIO_KEY, JSON.stringify({ music, effects })); } catch { /* Audio preferences remain valid for this visit. */ }
  }, [music, effects, ready]);

  useEffect(() => {
    if (!started) return;
    try {
      window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSaveFailed(false);
    } catch { setSaveFailed(true); }
  }, [state, started]);

  useEffect(() => {
    audio.current?.setMood(state.flags.victory ? 'victory' : position.z < -98 && !state.flags.dragonTrusted ? 'dragon' : position.z < -60 ? 'mystery' : 'explore');
  }, [position.z, state.flags]);

  useEffect(() => {
    if (!ending) return;
    const timer = setTimeout(() => setEndingReady(true), window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 2100 : 9100);
    return () => clearTimeout(timer);
  }, [ending]);

  const stopVoice = useCallback(() => { recognition.current?.abort(); recognition.current = null; setListening(false); stopAudio(); setSpeaking(false); }, []);
  const closeDialogue = useCallback(() => { stopVoice(); setNpc(null); setFeedback(null); setAnswer(''); setHint(false); setVoiceStatus(''); }, [stopVoice]);
  const openPanel = useCallback((next: Panel) => { closeDialogue(); setPanel(current => current === next ? null : next); audio.current?.effect('open'); }, [closeDialogue]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const editing = event.target instanceof HTMLElement && (event.target.matches('input,textarea,select') || event.target.isContentEditable);
      if (event.key === 'Escape') {
        event.preventDefault();
        if (confirmReset) setConfirmReset(false);
        else if (npc) closeDialogue();
        else if (intro) setIntro(false);
        else if (ending) setEndingReady(true);
        else if (started && !victory) setPanel(value => value ? null : 'pause');
        return;
      }
      if (editing || !started || intro || npc || victory || ending || event.ctrlKey || event.metaKey || event.altKey) return;
      const shortcut: Record<string, Panel> = { m: 'map', j: 'journal', i: 'inventory' };
      const next = shortcut[event.key.toLowerCase()];
      if (next) { event.preventDefault(); openPanel(next); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [started, intro, npc, victory, ending, confirmReset, closeDialogue, openPanel]);

  useEffect(() => {
    if (!npc && !panel && !victory && !confirmReset) return;
    const old = document.activeElement as HTMLElement | null;
    const root = confirmReset ? confirmRef.current : dialogRef.current;
    const first = root?.querySelector<HTMLElement>('button,input,textarea,select,[tabindex="0"]');
    first?.focus({ preventScroll: true });
    const trap = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !root) return;
      const elements = Array.from(root.querySelectorAll<HTMLElement>('button:not([disabled]),input,textarea,select,[tabindex="0"]')).filter(element => element.getClientRects().length);
      const start = elements[0]; const end = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === start) { event.preventDefault(); end?.focus(); }
      else if (!event.shiftKey && document.activeElement === end) { event.preventDefault(); start?.focus(); }
    };
    document.addEventListener('keydown', trap);
    return () => { document.removeEventListener('keydown', trap); old?.focus({ preventScroll: true }); };
  }, [npc, panel, victory, confirmReset]);

  const startGame = (resume = false) => {
    stopVoice();
    const next = resume && saved ? reduceGame(saved, { type: 'level', level: state.level }) : createGame(state.level);
    stateRef.current = next; setState(next); setPosition(next.checkpoint);
    setSpell(next.spells[0] ?? 'lumaria'); setStarted(true); setIntro(!resume);
    setPanel(null); setNpc(null); setConfirmReset(false); setVictoryDismissed(Boolean(next.flags.victory)); setEndingReady(false);
    setWorldKey(value => value + 1);
    audio.current?.start();
    audio.current?.setPreferences(music, effects);
  };

  const interact = useCallback((id: string) => {
    if (!NPCS.some(person => person.id === id)) return;
    stopVoice(); setNpc(id); setAnswer(''); setFeedback(null); setHint(false); setVoiceStatus('');
    audio.current?.effect('open');
  }, [stopVoice]);

  const collect = useCallback((id: string) => {
    const { before, next } = apply({ type: 'collect', item: id });
    const item = ITEMS.find(candidate => candidate.id === id);
    if (next.inventory.length > before.inventory.length) { audio.current?.effect('collect'); notify(`${item?.name ?? 'Objeto'} añadido al inventario.`); }
    else notify(actionFeedback(before, { type: 'collect', item: id }, next));
  }, [apply, notify]);

  const cast = useCallback((target?: string) => {
    const current = stateRef.current;
    if (!current.spells.includes(spell)) { notify('Liora y los habitantes del reino te enseñarán magia. Sigue la misión actual.'); return; }
    const { before, next } = apply({ type: 'cast', spell, target });
    audio.current?.effect('cast');
    const changed = Object.keys(next.flags).some(key => next.flags[key] !== before.flags[key]);
    if (changed) { notify(currentQuest(next).objective); audio.current?.effect('success'); }
    else if (target) notify(actionFeedback(before, { type: 'cast', spell, target }, next));
  }, [apply, notify, spell]);

  const checkpoint = useCallback((point: Position) => { apply({ type: 'checkpoint', position: point }); }, [apply]);
  const damage = useCallback(() => {
    setDamaged(true); audio.current?.effect('damage'); notify('El fuego te hace retroceder. Usa Aurora para protegerte.');
    if (damageTimer.current) clearTimeout(damageTimer.current);
    damageTimer.current = setTimeout(() => setDamaged(false), 750);
  }, [notify]);
  const selectSpell = useCallback((id: string) => {
    if (stateRef.current.spells.includes(id)) { setSpell(id); audio.current?.effect('open'); }
    else notify('Todavía no has aprendido ese hechizo.');
  }, [notify]);

  const submitAnswer = (event: FormEvent) => {
    event.preventDefault();
    if (!dialogue || !npc || !answer.trim()) return;
    stopVoice();
    const evaluation = evaluateAnswer(dialogue, answer.trim());
    setFeedback({ text: evaluation.feedback, accepted: evaluation.accepted });
    if (!evaluation.accepted) { setHint(true); return; }
    const { before, next } = apply({ type: 'answer', npc, text: answer.trim() });
    setAnswer(''); setHint(false); audio.current?.effect('success');
    if (next.flags.victory) { closeDialogue(); return; }
    const learned = next.spells.filter(id => !before.spells.includes(id));
    if (learned.length) { setSpell(learned[0]); notify(`Nuevo hechizo: ${SPELLS.find(item => item.id === learned[0])?.name ?? learned[0]}. Selecciónalo y usa R cerca de su objetivo.`); }
    else if (next.completed.length > before.completed.length) notify(`Misión completada. ${currentQuest(next).objective}`);
  };

  const listenNpc = () => {
    if (!dialogue) return;
    if (speaking) { stopAudio(); setSpeaking(false); return; }
    setVoiceStatus(''); setSpeaking(true);
    const voices = window.speechSynthesis?.getVoices() ?? [];
    const hasLatinVoice = voices.some(voice => /^es[-_](mx|co|ar|cl|pe|uy|ve)$/i.test(voice.lang));
    const region = !hasLatinVoice && voices.some(voice => /^es[-_]es$/i.test(voice.lang)) ? 'es-ES' : 'es-MX';
    const gender = ['liora','celina','ines','elara','tejedora'].includes(npc ?? '') ? 'f' : 'm';
    playClips([{ text: `${dialogue.text} ${dialogue.prompt}`, voice: `${region}-${gender}` }], { rate: ['A0','A1','A2'].includes(state.level) ? 0.83 : 0.96 })
      .then(() => setSpeaking(false))
      .catch(() => { setSpeaking(false); setVoiceStatus('No hay una voz española disponible en este navegador. Puedes leer el diálogo y responder por escrito.'); });
  };

  const toggleMic = () => {
    if (listening) { recognition.current?.stop(); return; }
    const voiceWindow = window as VoiceWindow;
    const BrowserRecognition = voiceWindow.SpeechRecognition ?? voiceWindow.webkitSpeechRecognition;
    if (!BrowserRecognition) return;
    stopAudio(); setSpeaking(false); setVoiceStatus('');
    const recognizer = new BrowserRecognition();
    recognition.current = recognizer;
    recognizer.lang = 'es-ES'; recognizer.continuous = false; recognizer.interimResults = false;
    recognizer.onresult = event => { const transcript = Array.from({ length: event.results.length }, (_, index) => event.results[index][0].transcript).join(' '); setAnswer(value => `${value}${value ? ' ' : ''}${transcript}`); setVoiceStatus('Dictado recibido. Revisa tu respuesta antes de enviarla.'); inputRef.current?.focus(); };
    recognizer.onerror = event => { setListening(false); setVoiceStatus(event.error === 'not-allowed' ? 'No se ha autorizado el micrófono. Puedes escribir tu respuesta.' : event.error === 'no-speech' ? 'No se ha detectado voz. Vuelve a intentarlo o escribe.' : 'El dictado no está disponible ahora. Puedes escribir tu respuesta.'); };
    recognizer.onend = () => { setListening(false); recognition.current = null; };
    try { recognizer.start(); setListening(true); } catch { setVoiceStatus('No se pudo iniciar el micrófono. Puedes escribir tu respuesta.'); }
  };

  const changeLevel = (level: string) => { stopVoice(); apply({ type: 'level', level }); setFeedback(null); setHint(false); setAnswer(''); };
  const leaveToMenu = () => { closeDialogue(); setSaved(stateRef.current); setStarted(false); setPanel(null); setIntro(false); };
  const showHud = started && !intro && !victory && !ending;

  return <main className={`rr-game ${started ? 'rr-playing' : 'rr-menu-open'} ${damaged ? 'rr-damaged' : ''}`} aria-label="El Reino de la Rosa Dormida">
    <WorldBoundary key={worldKey}>
      {World ? <World state={state} paused={!started || Boolean(panel) || Boolean(npc) || victory || confirmReset} intro={intro} spell={spell} onInteract={interact} onCollect={collect} onCast={cast} onCheckpoint={checkpoint} onIntroEnd={() => setIntro(false)} onEndingEnd={() => setEndingReady(true)} onPosition={setPosition} onSelectSpell={selectSpell} onDamage={damage}/> : <div className="rr-loading-world"><div className="rr-loading-glow"/><Rose/><p>{worldError ? 'No se pudo cargar el reino.' : 'Un reino está a punto de despertar…'}</p>{worldError && <button className="rr-primary" onClick={() => window.location.reload()}>Volver a cargar</button>}</div>}
    </WorldBoundary>
    <div className="rr-vignette" aria-hidden="true"/>

    {!started && <div className="rr-title-screen">
      <header className="rr-menu-header"><Link href="/">‹ <span>SPANISHCUE</span></Link><span>UNA AVENTURA ORIGINAL</span></header>
      <section className="rr-title-copy">
        <div className="rr-title-kicker"><span/> VALDORIA TE ESPERA <span/></div>
        <Rose className="rr-title-rose"/>
        <h1><small>El Reino de la</small>Rosa Dormida</h1>
        <p className="rr-title-tagline">El reino duerme.<br/>Tus palabras pueden despertarlo.</p>
        <div className="rr-menu-level"><label htmlFor="rr-start-level">TU NIVEL DE ESPAÑOL</label><div className="rr-level-options" role="group" aria-label="Nivel de español">{LEVELS.map(level => <button key={level} aria-pressed={state.level === level} onClick={() => changeLevel(level)}>{level}</button>)}</div><span>{LEVEL_LABELS[state.level]}</span></div>
        <div className="rr-start-actions">{saved && <button className="rr-primary" disabled={!ready || !World} onClick={() => startGame(true)}>Continuar la aventura <Icon name="arrow"/></button>}<button className={saved ? 'rr-secondary' : 'rr-primary'} disabled={!ready || !World} onClick={() => saved ? setConfirmReset(true) : startGame(false)}>{saved ? 'Nueva partida' : 'Comenzar la aventura'}{!saved && <Icon name="arrow"/>}</button></div>
        <p className="rr-title-note">Explora. Aprende magia. Cambia el destino de Valdoria.</p>
      </section>
      <footer className="rr-menu-footer"><span>UNA AVENTURA MÁGICA PARA APRENDER ESPAÑOL</span><button onClick={() => openPanel('help')}>Cómo jugar <Icon name="help"/></button></footer>
    </div>}

    {intro && <div className="rr-intro"><div className="rr-letterbox rr-letterbox-top"/><div className="rr-intro-title"><span>HACE CIEN AÑOS, EL TIEMPO SE DETUVO.</span><h2>Valdoria</h2><p>«Por fin has llegado, príncipe Gael.<br/>El reino te estaba esperando.»</p><small>NOX, GUARDIÁN DE LOS RECUERDOS</small></div><button className="rr-skip" onClick={() => setIntro(false)}>Omitir introducción <kbd>Esc</kbd></button><div className="rr-letterbox rr-letterbox-bottom"/></div>}

    {showHud && <>
      <header className="rr-hud-top"><Link href="/" className="rr-brand" aria-label="Volver a SpanishCue"><Rose/><span>SPANISHCUE<small>VALDORIA</small></span></Link><div className="rr-compass" aria-hidden="true"><span>O</span><i/><span>N</span><i/><span>E</span><b>◆</b></div><div className="rr-hud-actions"><label className="rr-hud-level"><span>NIVEL</span><select value={state.level} onChange={event => changeLevel(event.target.value)} aria-label="Nivel de español">{LEVELS.map(level => <option key={level}>{level}</option>)}</select></label><button className={`rr-icon-button ${!music ? 'rr-muted' : ''}`} aria-label={music ? 'Silenciar música' : 'Activar música'} aria-pressed={music} onClick={() => { audio.current?.start(); setMusic(value => !value); }}><Icon name="music"/></button><button className={`rr-icon-button ${!effects ? 'rr-muted' : ''}`} aria-label={effects ? 'Silenciar efectos' : 'Activar efectos'} aria-pressed={effects} onClick={() => { audio.current?.start(); setEffects(value => !value); }}><Icon name="sound"/></button><button className="rr-icon-button" aria-label="Pausa" onClick={() => openPanel('pause')}><Icon name="pause"/></button></div></header>
      {!npc && !panel && <>
        <button className="rr-objective" onClick={() => openPanel('journal')} aria-label="Abrir diario de misiones"><span className="rr-objective-marker">◇</span><div><span className="rr-eyebrow">{state.flags.victory ? 'EL REINO HA DESPERTADO' : `CAPÍTULO ${String(Math.min(state.completed.length + 1, QUESTS.length)).padStart(2,'0')}`}</span><h2>{quest.title}</h2><p>{quest.objective}</p></div></button>
        <button className="rr-minimap" aria-label="Abrir mapa del reino" onClick={() => openPanel('map')}><KingdomMap position={position} target={quest.target ?? ''}/><span>VALDORIA <kbd>M</kbd></span></button>
        <div className="rr-controls-brief"><span><kbd>W A S D</kbd> Caminar</span><span><kbd>⇧</kbd> Correr</span><span><kbd>Espacio</kbd> Saltar</span><span>Arrastra · Cámara</span><button onClick={() => openPanel('help')} aria-label="Ver todos los controles">?</button></div>
      </>}
      <footer className="rr-hud-bottom"><nav className="rr-bottom-nav" aria-label="Herramientas de la aventura"><button onClick={() => openPanel('journal')} aria-label="Diario de misiones"><Icon name="book"/><span>Diario</span><kbd>J</kbd></button><button onClick={() => openPanel('inventory')} aria-label="Abrir inventario"><Icon name="bag"/><span>Inventario</span><kbd>I</kbd></button><button onClick={() => openPanel('map')} aria-label="Mapa del reino"><Icon name="map"/><span>Mapa</span><kbd>M</kbd></button></nav><div className="rr-spellbar" role="group" aria-label="Hechizos">{SPELLS.map((item,index) => { const unlocked = state.spells.includes(item.id); return <button key={item.id} className={`rr-spell ${spell === item.id && unlocked ? 'rr-spell-selected' : ''} ${!unlocked ? 'rr-spell-locked' : ''}`} style={{ '--spell-color': item.color } as CSSProperties} aria-label={`${item.name}${unlocked ? ': seleccionar' : ': aún no aprendido'}`} aria-pressed={spell === item.id && unlocked} onClick={() => selectSpell(item.id)}><kbd>{index + 1}</kbd><span>{SPELL_GLYPHS[item.id] ?? '✧'}</span><small>{unlocked ? item.name : 'Por descubrir'}</small></button>; })}<span className="rr-cast-hint"><kbd>R</kbd> Lanzar</span></div><span className={`rr-save-status ${saveFailed ? 'rr-save-warning' : ''}`}><i/>{saveFailed ? 'Guardado no disponible' : 'Guardado automático'}</span></footer>
    </>}

    {toast && started && !intro && !ending && !victory && <div className="rr-toast" role="status"><span>✧</span>{toast}</div>}

    {dialogue && !victory && <div className="rr-dialogue-shade"><div ref={dialogRef} className="rr-dialogue" role="dialog" aria-modal="true" aria-labelledby="rr-npc-name">
      <div className="rr-dialogue-top"><div className="rr-npc-sigil" style={{ '--npc-color': NPCS.find(person => person.id === npc)?.color ?? '#c8ab70' } as CSSProperties}>{NPC_GLYPHS[npc ?? ''] ?? '✧'}</div><div><span className="rr-eyebrow">{NPCS.find(person => person.id === npc)?.role ?? 'HABITANTE DE VALDORIA'}</span><h2 id="rr-npc-name">{dialogue.name}</h2></div><button className={`rr-icon-button ${speaking ? 'rr-active' : ''}`} aria-label={speaking ? 'Detener voz' : 'Escuchar voz del navegador'} title="Voz sintetizada del navegador" onClick={listenNpc}><Icon name="sound"/></button><button className="rr-icon-button" aria-label="Cerrar conversación" onClick={closeDialogue}><Icon name="close"/></button></div>
      <p className="rr-npc-text">{dialogue.text}</p>
      {feedback && <p className={`rr-feedback ${feedback.accepted ? 'rr-feedback-success' : ''}`} role="status">{feedback.accepted && <Icon name="check"/>}{feedback.text}</p>}
      {dialogue.complete || dialogue.locked ? <div className="rr-dialogue-complete"><p>{dialogue.prompt || quest.objective}</p><button className="rr-primary" onClick={closeDialogue}>Continuar explorando <Icon name="arrow"/></button></div> : <form onSubmit={submitAnswer}>
        <label className="rr-answer-label" htmlFor="rr-answer">{dialogue.prompt}</label>
        <div className="rr-answer-row"><textarea ref={inputRef} id="rr-answer" value={answer} onChange={event => setAnswer(event.target.value)} maxLength={1500} rows={2} placeholder="Responde con tus propias palabras…" onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }}/>{micAvailable && <button type="button" className={`rr-mic ${listening ? 'rr-listening' : ''}`} onClick={toggleMic} aria-label={listening ? 'Terminar dictado' : 'Dictar respuesta'} aria-pressed={listening}><Icon name="mic"/>{listening ? 'Escuchando' : 'Hablar'}</button>}</div>
        {voiceStatus && <p className="rr-voice-status" role="status">{voiceStatus}</p>}
        <div className="rr-answer-actions"><button type="button" className="rr-text-button" aria-expanded={hint} onClick={() => setHint(value => !value)}><Icon name="help"/>{hint ? 'Ocultar ayuda' : 'Necesito una pista'}</button><span>{state.level} · {listening ? 'Revisa el dictado antes de enviarlo' : 'Tu intención es lo que importa'}</span><button type="submit" className="rr-primary" disabled={!answer.trim() || listening}>Responder <Icon name="arrow"/></button></div>
        {hint && <div className="rr-dialogue-hint"><p>{dialogue.hint}</p><div>{dialogue.suggestions.map(suggestion => <button key={suggestion} type="button" onClick={() => { setAnswer(suggestion); inputRef.current?.focus(); }}>{suggestion}<span>↗</span></button>)}</div></div>}
      </form>}
      {voiceStatus && (dialogue.complete || dialogue.locked) && <p className="rr-voice-status" role="status">{voiceStatus}</p>}
    </div></div>}

    {panel && <div className="rr-modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setPanel(null); }}><div ref={dialogRef} className={`rr-modal rr-modal-${panel}`} role="dialog" aria-modal="true" aria-labelledby="rr-panel-title"><header className="rr-modal-header"><div><span className="rr-eyebrow">EL REINO DE LA ROSA DORMIDA</span><h2 id="rr-panel-title">{{map:'Cartografía de Valdoria',journal:'Diario de la aventura',inventory:'El equipaje de Gael',pause:'Un momento de calma',help:'Tu aventura, tus palabras'}[panel]}</h2></div><button className="rr-icon-button" aria-label="Cerrar panel" onClick={() => setPanel(null)}><Icon name="close"/></button></header>
      {panel === 'map' && <div className="rr-map-panel"><KingdomMap position={position} target={quest.target ?? ''} large/><aside><span className="rr-eyebrow">EL CAMINO CONTINÚA</span><h3>{quest.title}</h3><p>{quest.objective}</p><div className="rr-map-legend"><span><i/> Tu posición</span><span><i/> Destino de la misión</span><span><i/> Caminos de Valdoria</span></div><p className="rr-small-note">Recorre el reino a pie. El mapa te orienta; las puertas y los puentes se abren con tus acciones.</p><button className="rr-secondary" onClick={() => setPanel(null)}>Volver al camino <Icon name="arrow"/></button></aside></div>}
      {panel === 'journal' && <div className="rr-journal"><div className="rr-progress"><span>{state.completed.length} de {QUESTS.length} capítulos completados</span><div><i style={{width:`${state.completed.length / QUESTS.length * 100}%`}}/></div></div><ol>{QUESTS.map((item,index) => { const complete = state.completed.includes(item.id); const active = item.id === quest.id; return <li key={item.id} className={`${complete ? 'rr-quest-complete' : ''} ${active ? 'rr-quest-current' : ''}`}><span className="rr-quest-number">{complete ? '✓' : String(index + 1).padStart(2,'0')}</span><div><span className="rr-eyebrow">{complete ? 'COMPLETADA' : active ? 'MISIÓN ACTUAL' : 'POR DESCUBRIR'}</span><h3>{item.title}</h3><p>{active ? quest.objective : complete ? item.reward : item.description}</p></div>{active && <span className="rr-quest-star">◇</span>}</li>; })}</ol></div>}
      {panel === 'inventory' && <div className="rr-inventory"><p className="rr-panel-intro">Cada hallazgo guarda una parte de la historia. Los objetos se usan cuando cumples su propósito en el reino.</p>{state.inventory.length ? <div className="rr-items">{state.inventory.map(id => { const item = ITEMS.find(candidate => candidate.id === id); return item ? <article key={id}><span className="rr-item-icon">{item.icon}</span><div><h3>{item.name}</h3><p>{item.description}</p></div></article> : null; })}</div> : <div className="rr-empty"><Icon name="bag"/><h3>La historia acaba de comenzar.</h3><p>Acércate a un objeto y pulsa F para recogerlo.</p></div>}<h3 className="rr-inventory-heading">La magia que has aprendido</h3><div className="rr-learned-spells">{SPELLS.filter(item => state.spells.includes(item.id)).map(item => <button key={item.id} style={{'--spell-color':item.color} as CSSProperties} onClick={() => {selectSpell(item.id);setPanel(null);}}><span>{SPELL_GLYPHS[item.id]}</span><div><h4>{item.name}</h4><p>{item.description}</p></div></button>)}{!state.spells.length && <p className="rr-small-note">Encuentra a quienes todavía recuerdan la magia de Valdoria.</p>}</div></div>}
      {panel === 'pause' && <div className="rr-pause-body"><Rose/><p>El reino puede esperar un instante.</p><button className="rr-primary" onClick={() => setPanel(null)}>Continuar la aventura <Icon name="arrow"/></button><div className="rr-settings"><button onClick={() => {audio.current?.start();setMusic(value => !value);}}><Icon name="music"/>Música<span>{music ? 'Activada' : 'Silenciada'}</span></button><button onClick={() => {audio.current?.start();setEffects(value => !value);}}><Icon name="sound"/>Efectos<span>{effects ? 'Activados' : 'Silenciados'}</span></button><button onClick={() => setPanel('help')}><Icon name="help"/>Controles y conversación<Icon name="arrow"/></button></div><div className="rr-pause-links"><button onClick={leaveToMenu}>Menú principal</button><button onClick={() => setConfirmReset(true)}>Reiniciar aventura</button></div><p className="rr-small-note">{saveFailed ? 'El navegador no permite guardar esta partida. Mantén esta pestaña abierta para conservar tu progreso.' : 'Tu progreso se guarda en este navegador.'}</p></div>}
      {panel === 'help' && <div className="rr-help"><p className="rr-panel-intro">Eres Gael. Explora un reino dormido, escucha a sus habitantes y usa el español para cambiar su destino.</p><div className="rr-help-columns"><section><h3>Explora Valdoria</h3><dl><div><dt>Caminar</dt><dd><kbd>W A S D</kbd> / flechas</dd></div><div><dt>Correr</dt><dd><kbd>Shift</kbd></dd></div><div><dt>Saltar</dt><dd><kbd>Espacio</kbd></dd></div><div><dt>Mirar alrededor</dt><dd>Arrastra la escena</dd></div><div><dt>Conversar / interactuar</dt><dd><kbd>E</kbd></dd></div><div><dt>Recoger objetos</dt><dd><kbd>F</kbd></dd></div><div><dt>Lanzar magia</dt><dd><kbd>R</kbd></dd></div><div><dt>Elegir hechizo</dt><dd><kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>4</kbd></dd></div></dl></section><section><h3>Encuentra tu voz</h3><p>Escribe una respuesta libre. Los personajes reconocen intenciones y variantes de expresión: no necesitas memorizar una única frase.</p><p>Las pistas ofrecen ejemplos que puedes adaptar. Cambia tu nivel en cualquier momento para ajustar los desafíos.</p><p>El botón de audio utiliza una voz española del navegador. El micrófono aparece cuando el navegador ofrece dictado; revisa lo que reconoce antes de enviarlo.</p><p className="rr-small-note">En una pantalla táctil, usa el joystick y los botones de la escena. Arrastra el lado derecho para mover la cámara.</p></section></div><button className="rr-primary" onClick={() => setPanel(null)}>Estoy listo <Icon name="arrow"/></button></div>}
    </div></div>}

    {victory && <div className="rr-victory" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="rr-victory-title"><div className="rr-victory-rays" aria-hidden="true"/><Rose/><span className="rr-eyebrow">LA ÚLTIMA ESPINA HA CAÍDO</span><h2 id="rr-victory-title">Valdoria despierta.</h2><p>Elara abre los ojos. El silencio se llena de vida.<br/>No fue una espada lo que rompió el hechizo.<br/><em>Fueron tus palabras.</em></p><div className="rr-victory-stats"><span><b>{state.completed.length}</b> capítulos vividos</span><span><b>{state.spells.length}</b> hechizos aprendidos</span><span><b>{state.level}</b> español en acción</span></div><button className="rr-primary" onClick={() => { setVictoryDismissed(true); closeDialogue(); }}>Explorar el reino despierto <Icon name="arrow"/></button><button className="rr-text-button" onClick={() => setConfirmReset(true)}>Vivir otra aventura</button></div>}

    {confirmReset && <div className="rr-confirm-backdrop"><section ref={confirmRef} className="rr-confirm" role="alertdialog" aria-modal="true" aria-labelledby="rr-confirm-title"><Rose/><h2 id="rr-confirm-title">¿Una nueva aventura?</h2><p>Tu partida guardada se sustituirá. Volverás a la Colina del Amanecer con el nivel {state.level}.</p><div><button className="rr-secondary" onClick={() => setConfirmReset(false)}>Conservar mi partida</button><button className="rr-primary" onClick={() => startGame(false)}>Comenzar de nuevo</button></div></section></div>}
  </main>;
}
