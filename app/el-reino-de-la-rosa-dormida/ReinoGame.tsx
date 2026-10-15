'use client';

import Link from 'next/link';
import { Component, useCallback, useEffect, useRef, useState, type ChangeEvent, type ComponentType, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { LEVELS, NPCS, ITEMS, SPELLS, QUESTS } from './content.mjs';
import { ListeningBadge, ListeningCard, ModeSwitch, useListeningDone, useListeningMode } from '../escucha-3d/Escucha';
import { PLACES, TEACHER_NOTES } from './conversations.mjs';
import { createGame, restoreGame, reduceGame, currentQuest, conversationView, discoveries, actionFeedback, conversationLength, type GameState, type GameAction } from './engine.mjs';
import { CHAPTERS, START_POINTS, stateForStartPoint } from './checkpoints.mjs';
import { readStore, writeStore, createProfile, saveProfileState, setActive, setProfileLevel, resetProfile, deleteProfile, activeProfile, exportStore, importProfiles, profileSummary, emptyStore, type ProfileStore } from './profiles.mjs';
import type { WorldProps } from './World3D';
import { playClips, stopAudio, warmVoices } from '../autoestudio/engine/speech';
import { RealmAudio, DEFAULT_MUSIC_VOLUME } from './audio';
import { themeFor } from './score.mjs';
import { setShoutMuted } from '../escucha-3d/shout';
import './reino.css';

const AUDIO_KEY = 'spanishcue:rosa-dormida:audio:v1';
type Position = { x: number; y: number; z: number };
type Panel = 'map' | 'journal' | 'inventory' | 'pause' | 'help' | 'students' | 'start' | 'new' | null;
type Confirm = { title: string; text: string; confirm: string; run: () => void } | null;
type Recognition = {
  lang: string; continuous: boolean; interimResults: boolean;
  onresult: ((event: { results: { [index: number]: { [index: number]: { transcript: string } }; length: number } }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null; start: () => void; stop: () => void; abort: () => void;
};
type VoiceWindow = Window & { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };

const LEVEL_LABELS: Record<string, string> = { A0: 'Primeras palabras', A1: 'Gustos y rutinas', A2: 'Experiencias y planes', B1: 'Anécdotas y opiniones', B2: 'Debates y dilemas', C1: 'Matices y perspectivas', C2: 'Ironía y profundidad' };
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
const nameOf = (id: string) => NPCS.find(npc => npc.id === id)?.name ?? PLACES[id]?.name ?? id;
const dateLabel = (iso: string | null) => { if (!iso) return '—'; try { return new Date(iso).toLocaleString('es', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); } catch { return '—'; } };

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
    users: <><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-4 3.4-6 6.5-6s5.7 2 6.5 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2 .7 3.2 2.6 3.6 6"/></>,
    flag: <><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></>,
    bulb: <><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/></>,
    deeper: <><path d="M12 4v12M6 10l6 6 6-6M5 20h14"/></>,
    compass: <><circle cx="12" cy="12" r="10"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/></>,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.help}</svg>;
}

const DIRECTIONS = ['norte', 'noreste', 'este', 'sureste', 'sur', 'suroeste', 'oeste', 'noroeste'];
const TARGET_SPELLS: Record<string, string> = { mill: 'ventaria', grove: 'lumaria', thorns: 'floralis', dragon: 'aurora' };
// Turn the current objective into a concrete next step: where to go and which key to press.
function questGuide(state: GameState, target: string, position: Position) {
  const place = MAP_TARGETS[target];
  if (!place || state.flags.victory) return { route: '', guideText: 'Valdoria es libre. Recorre el reino y conversa con quien quieras.' };
  const dx = place.x - position.x, dz = place.z - position.z, distance = Math.round(Math.hypot(dx, dz));
  const direction = DIRECTIONS[(Math.round(Math.atan2(dx, -dz) / (Math.PI / 4)) + 8) % 8];
  const route = distance <= 4 ? 'Has llegado: busca el aviso en pantalla' : `A ${distance} m hacia el ${direction} · sigue la luz dorada`;
  const person = NPCS.find(entry => entry.id === target);
  if (person) {
    const left = Math.max(0, conversationLength(target) - (state.dialogue[target] ?? 0));
    return { route, guideText: `Camina hasta ${person.name}, bajo la columna de luz dorada. Cuando veas «E · Conversar», pulsa E (o «Hablar» en el celular). La conversación avanza con «Continuar conversación»: puedes responder en voz alta, escribir o dictar. ${left === 1 ? 'Queda 1 momento' : `Quedan ${left} momentos`} de conversación con este personaje.` };
  }
  const item = ITEMS.find(entry => entry.id === target);
  if (item) return { route, guideText: `Ve hasta la luz dorada y pulsa F (o «Recoger») para tomar: ${item.name}.` };
  const spellId = target === 'altar' ? (!state.flags.ritualLight ? 'lumaria' : !state.flags.ritualGrowth ? 'floralis' : 'aurora') : TARGET_SPELLS[target];
  const spell = SPELLS.find(entry => entry.id === spellId);
  return { route, guideText: spell ? `Acércate a la luz dorada, elige ${spell.name} con la tecla ${spell.key} (o tócalo abajo) y pulsa R (o «Magia»).` : 'Acércate a la luz dorada y sigue el aviso en pantalla.' };
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
    {Object.entries(PLACES).map(([id, place]) => { const p = point(place.spot.x, place.spot.z); return <circle key={id} cx={p.x} cy={p.y} r="2.4" fill="none" stroke="#9fe3d6" strokeWidth="1.2" opacity=".8"/>; })}
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
  const [store, setStore] = useState<ProfileStore>(emptyStore);
  const storeRef = useRef(store);
  const [state, setState] = useState<GameState>(() => createGame('A1'));
  const [heard, markHeard] = useListeningDone('reino', state.level);
  const stateRef = useRef(state);
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [intro, setIntro] = useState(false);
  const [World, setWorld] = useState<ComponentType<WorldProps> | null>(null);
  // Comprensión auditiva: characters and places open a listening (undefined = closed, null = the list).
  const [mode, setMode] = useListeningMode('reino');
  const [listenAt, setListenAt] = useState<string | null | undefined>(undefined);
  const [worldError, setWorldError] = useState(false);
  const [worldKey, setWorldKey] = useState(0);
  const [panel, setPanel] = useState<Panel>(null);
  const [guide, setGuide] = useState(false);
  const [answer, setAnswer] = useState('');
  const [lastAnswer, setLastAnswer] = useState<string | null>(null);
  const [hint, setHint] = useState(false);
  const [missionHint, setMissionHint] = useState(false);
  const [showEnglish, setShowEnglish] = useState(true);
  const [spell, setSpell] = useState('lumaria');
  const [position, setPosition] = useState<Position>({x:0,y:0,z:24});
  const [toast, setToast] = useState('');
  const [music, setMusic] = useState(true);
  const [effects, setEffects] = useState(true);
  const [volume, setVolume] = useState(DEFAULT_MUSIC_VOLUME);
  const [saveFailed, setSaveFailed] = useState(false);
  const [confirm, setConfirm] = useState<Confirm>(null);
  const [victoryDismissed, setVictoryDismissed] = useState(false);
  const [endingReady, setEndingReady] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [micAvailable, setMicAvailable] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('');
  const [damaged, setDamaged] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLevel, setNewLevel] = useState('A1');
  const [startFor, setStartFor] = useState<string>('new');
  const [studentsNote, setStudentsNote] = useState('');
  const audio = useRef<RealmAudio | null>(null);
  const recognition = useRef<Recognition | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const damageTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const importRef = useRef<HTMLInputElement>(null);
  const quest = currentQuest(state);
  const { route, guideText } = questGuide(state, quest.target ?? '', position);
  const talkingId = started ? state.talking?.id ?? null : null;
  const view = talkingId ? conversationView(state, talkingId) : null;
  const profile = activeProfile(store);
  const ending = started && Boolean(state.flags.victory) && !victoryDismissed && !endingReady;
  const victory = started && Boolean(state.flags.victory) && !victoryDismissed && endingReady;

  const notify = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 6000);
  }, []);

  /** Every store change is written at once: closing the tab never loses a class. */
  const persist = useCallback((next: ProfileStore) => {
    storeRef.current = next; setStore(next);
    try { writeStore(window.localStorage, next); setSaveFailed(false); } catch { setSaveFailed(true); }
  }, []);

  const apply = useCallback((action: GameAction) => {
    const before = stateRef.current;
    const next = reduceGame(before, action);
    stateRef.current = next;
    setState(next);
    return { before, next };
  }, []);

  useEffect(() => {
    let live = true;
    let loaded = emptyStore();
    try { loaded = readStore(window.localStorage); writeStore(window.localStorage, loaded); } catch { /* Unavailable storage never prevents playing. */ }
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('level') ?? params.get('nivel');
    const current = activeProfile(loaded);
    const initial = current ? restoreGame(current.save) : createGame(LEVELS.some(level => level === requested) ? requested! : 'A1');
    // Synchronize browser-only data after the server's stable first render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    storeRef.current = loaded; setStore(loaded); setState(initial); stateRef.current = initial; setReady(true);
    if (LEVELS.some(level => level === requested)) setNewLevel(requested!); else if (current) setNewLevel(current.level);
    setStartFor(current?.id ?? 'new');
    try { const preferences = JSON.parse(window.localStorage.getItem(AUDIO_KEY) ?? '{}'); setMusic(preferences.music !== false); setEffects(preferences.effects !== false); if (typeof preferences.volume === 'number' && preferences.volume >= 0 && preferences.volume <= 1) setVolume(preferences.volume); } catch { /* Defaults remain usable. */ }
    const voiceWindow = window as VoiceWindow;
    setMicAvailable(Boolean(voiceWindow.SpeechRecognition ?? voiceWindow.webkitSpeechRecognition));
    warmVoices();
    audio.current = new RealmAudio();
    import('./World3D').then(module => { if (live) setWorld(() => module.default); }).catch(() => { if (live) setWorldError(true); });
    return () => { live = false; audio.current?.dispose(); recognition.current?.abort(); stopAudio(); if (toastTimer.current) clearTimeout(toastTimer.current); if (damageTimer.current) clearTimeout(damageTimer.current); };
  }, []);

  // The sound-effects toggle also silences the residents' shouted insults.
  useEffect(() => { setShoutMuted(!effects); }, [effects]);
  useEffect(() => {
    if (!ready) return;
    audio.current?.setPreferences(music, effects, volume);
    try { window.localStorage.setItem(AUDIO_KEY, JSON.stringify({ music, effects, volume })); } catch { /* Audio preferences remain valid for this visit. */ }
  }, [music, effects, volume, ready]);

  // Autosave: only the active learner's profile changes.
  useEffect(() => {
    if (!started) return;
    const id = storeRef.current.activeId;
    if (id) persist(saveProfileState(storeRef.current, id, state));
  }, [state, started, persist]);

  useEffect(() => {
    audio.current?.setMood(themeFor(position, state.flags));
  }, [position, state.flags]);

  useEffect(() => {
    if (!ending) return;
    const timer = setTimeout(() => setEndingReady(true), window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 2100 : 9100);
    return () => clearTimeout(timer);
  }, [ending]);

  const stopVoice = useCallback(() => { recognition.current?.abort(); recognition.current = null; setListening(false); stopAudio(); setSpeaking(false); }, []);
  const resetDialogueUi = useCallback(() => { setAnswer(''); setHint(false); setMissionHint(false); setVoiceStatus(''); }, []);
  const closeDialogue = useCallback(() => { stopVoice(); resetDialogueUi(); setLastAnswer(null); apply({ type: 'close' }); }, [stopVoice, resetDialogueUi, apply]);
  const openPanel = useCallback((next: Panel) => { if (stateRef.current.talking) closeDialogue(); setPanel(current => current === next ? null : next); audio.current?.effect('open'); }, [closeDialogue]);
  // A new adventure opens the mission briefing as soon as the intro ends.
  const finishIntro = useCallback(() => {
    setIntro(false);
    const current = stateRef.current;
    if (!current.completed.length && !Object.values(current.dialogue).some(Boolean)) setPanel('help');
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const editing = event.target instanceof HTMLElement && (event.target.matches('input,textarea,select') || event.target.isContentEditable);
      if (event.key === 'Escape') {
        event.preventDefault();
        if (confirm) setConfirm(null);
        else if (talkingId) closeDialogue();
        else if (intro) finishIntro();
        else if (ending) setEndingReady(true);
        else if (started && !victory) setPanel(value => value ? null : 'pause');
        else if (panel) setPanel(null);
        return;
      }
      if (editing || !started || intro || talkingId || victory || ending || event.ctrlKey || event.metaKey || event.altKey) return;
      const shortcut: Record<string, Panel> = { m: 'map', j: 'journal', i: 'inventory' };
      const next = shortcut[event.key.toLowerCase()];
      if (next) { event.preventDefault(); openPanel(next); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [started, intro, talkingId, victory, ending, confirm, panel, closeDialogue, openPanel, finishIntro]);

  useEffect(() => {
    if (!talkingId && !panel && !victory && !confirm) return;
    const old = document.activeElement as HTMLElement | null;
    const root = confirm ? confirmRef.current : dialogRef.current;
    const first = root?.querySelector<HTMLElement>('[data-autofocus],button,input,textarea,select,[tabindex="0"]');
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
  }, [talkingId, panel, victory, confirm]);

  /** Starts (or resumes) the active profile's saved state in the 3D world. */
  const launch = (next: GameState, withIntro: boolean) => {
    stopVoice(); resetDialogueUi(); setLastAnswer(null);
    stateRef.current = next; setState(next); setPosition(next.checkpoint);
    setSpell(next.spells[0] ?? 'lumaria'); setStarted(true); setIntro(withIntro);
    setPanel(null); setConfirm(null); setVictoryDismissed(Boolean(next.flags.victory)); setEndingReady(false); setGuide(false);
    setWorldKey(value => value + 1);
    audio.current?.start();
    audio.current?.setPreferences(music, effects, volume);
    if (!withIntro && next.talking) notify(`Retomamos la conversación con ${nameOf(next.talking.id)} donde quedó.`);
  };

  const continueProfile = (id: string) => {
    const nextStore = setActive(storeRef.current, id);
    persist(nextStore);
    const chosen = activeProfile(nextStore);
    if (!chosen) return;
    const next = restoreGame(chosen.save);
    launch(next, !chosen.started);
  };

  const createAndStart = (event?: FormEvent) => {
    event?.preventDefault();
    const { store: nextStore, profile: created } = createProfile(storeRef.current, { name: newName, level: newLevel });
    if (!created) { notify('Hay demasiados perfiles guardados. Elimina alguno en «Mis alumnos».'); return; }
    persist(nextStore); setNewName(''); setStartFor(created.id);
    launch(created.save, true);
  };

  const beginAt = (pointId: string) => {
    const target = startFor === 'new' ? null : storeRef.current.profiles.find(entry => entry.id === startFor) ?? null;
    const level = target?.level ?? newLevel;
    const next = stateForStartPoint(pointId, level);
    if (!next) return;
    const run = () => {
      let nextStore = storeRef.current;
      let id = target?.id;
      if (!id) {
        const made = createProfile(nextStore, { name: newName, level, state: next, started: true });
        if (!made.profile) { notify('Hay demasiados perfiles guardados. Elimina alguno en «Mis alumnos».'); return; }
        nextStore = made.store; id = made.profile.id; setNewName(''); setStartFor(id);
      } else nextStore = saveProfileState(setActive(nextStore, id), id, next);
      persist(setActive(nextStore, id));
      launch(next, false);
      const point = START_POINTS.find(entry => entry.id === pointId);
      notify(`Empiezas en el capítulo ${point?.chapter}: ${point?.label}.`);
    };
    if (target?.started) {
      const point = START_POINTS.find(entry => entry.id === pointId);
      setConfirm({ title: `¿Llevar a ${target.name} a este punto?`, text: `Su partida pasará a «Capítulo ${point?.chapter} — ${point?.label}». Los demás alumnos no cambian. Si quieres conservar su progreso actual, elige «Nuevo alumno» o exporta una copia en «Mis alumnos».`, confirm: 'Empezar aquí', run });
    } else run();
  };

  const changeLevel = (level: string) => {
    stopVoice(); setHint(false);
    setNewLevel(level);
    if (started) { apply({ type: 'level', level }); return; }
    const id = storeRef.current.activeId;
    if (id) {
      const nextStore = setProfileLevel(storeRef.current, id, level);
      persist(nextStore);
      const chosen = activeProfile(nextStore);
      if (chosen) { const next = restoreGame(chosen.save); stateRef.current = next; setState(next); }
    }
  };

  const askReset = (id: string) => {
    const target = storeRef.current.profiles.find(entry => entry.id === id);
    if (!target) return;
    setConfirm({ title: `¿Reiniciar la aventura de ${target.name}?`, text: `Solo se borra el progreso de ${target.name}, que vuelve a la Colina del Amanecer con el nivel ${target.level}. Los demás alumnos no cambian.`, confirm: 'Reiniciar este perfil', run: () => {
      const nextStore = resetProfile(storeRef.current, id);
      persist(nextStore); setConfirm(null);
      if (id === nextStore.activeId) { const fresh = restoreGame(activeProfile(nextStore)!.save); if (started) launch(fresh, true); else { stateRef.current = fresh; setState(fresh); } }
    } });
  };
  const askDelete = (id: string) => {
    const target = storeRef.current.profiles.find(entry => entry.id === id);
    if (!target) return;
    setConfirm({ title: `¿Eliminar el perfil de ${target.name}?`, text: 'Se elimina este perfil y su partida guardada en este navegador. Esta acción no se puede deshacer. Los demás alumnos no cambian.', confirm: 'Eliminar perfil', run: () => {
      const wasActive = storeRef.current.activeId === id;
      const nextStore = deleteProfile(storeRef.current, id);
      persist(nextStore); setConfirm(null);
      if (startFor === id) setStartFor(nextStore.activeId ?? 'new');
      if (wasActive) {
        if (started) { setStarted(false); setPanel('students'); }
        const chosen = activeProfile(nextStore);
        const next = chosen ? restoreGame(chosen.save) : createGame(newLevel);
        stateRef.current = next; setState(next);
      }
    } });
  };
  const exportProfiles = () => {
    try {
      const blob = new Blob([exportStore(storeRef.current)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = `reino-rosa-alumnos-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStudentsNote('Copia descargada. Guárdala para restaurar las partidas en otro navegador.');
    } catch { setStudentsNote('No se pudo crear la copia en este navegador.'); }
  };
  const importFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const result = importProfiles(storeRef.current, await file.text());
    if (result.added) persist(result.store);
    setStudentsNote(result.added ? `Se agregaron ${result.added} ${result.added === 1 ? 'perfil' : 'perfiles'}. Ningún perfil existente se modificó.` : result.error);
  };

  const interact = useCallback((id: string) => {
    if (!NPCS.some(person => person.id === id) && !PLACES[id]) return;
    if (mode === 'escucha') { stopVoice(); setListenAt(id); return; }
    stopVoice(); resetDialogueUi(); setLastAnswer(null);
    apply({ type: 'open', npc: id });
    audio.current?.effect('open');
  }, [stopVoice, resetDialogueUi, apply, mode]);

  const collect = useCallback((id: string) => {
    const { before, next } = apply({ type: 'collect', item: id });
    const item = ITEMS.find(candidate => candidate.id === id);
    if (next.inventory.length > before.inventory.length) { audio.current?.effect('collect'); notify(`${item?.name ?? 'Objeto'} añadido al inventario. ${currentQuest(next).objective}`); }
    else notify(actionFeedback(before, { type: 'collect', item: id }, next));
  }, [apply, notify]);

  const cast = useCallback((target?: string) => {
    const current = stateRef.current;
    if (!current.spells.includes(spell)) { notify('Los habitantes del reino te van a enseñar magia. Sigue la misión actual.'); return; }
    const { before, next } = apply({ type: 'cast', spell, target });
    audio.current?.effect('cast');
    const changed = Object.keys(next.flags).some(key => next.flags[key] !== before.flags[key]);
    if (changed) { notify(actionFeedback(before, { type: 'cast', spell, target }, next)); audio.current?.effect('success'); }
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
    else notify('Todavía no aprendiste ese hechizo.');
  }, [notify]);

  /** «Continuar conversación»: the teacher or the learner moves on. Nothing is graded. */
  const advance = (event?: FormEvent) => {
    event?.preventDefault();
    if (!view || !talkingId) return;
    if (view.mode === 'locked') { closeDialogue(); return; }
    stopVoice();
    const said = answer.trim();
    setLastAnswer(view.isQuestion && said ? said : null);
    resetDialogueUi();
    const { before, next } = apply(view.mode === 'revisit' ? { type: 'deepen', npc: talkingId } : { type: 'say', npc: talkingId, ...(said ? { text: said } : {}) });
    audio.current?.effect(next.talking ? 'open' : 'success');
    if (next.flags.victory && !before.flags.victory) return;
    const learned = next.spells.filter(id => !before.spells.includes(id));
    if (learned.length) { setSpell(learned[0]); notify(`Nuevo hechizo: ${SPELLS.find(item => item.id === learned[0])?.name ?? learned[0]}. ${currentQuest(next).objective}`); }
    else if (next.completed.length > before.completed.length) notify(`Capítulo completado: ${QUESTS[before.completed.length].title}. ${currentQuest(next).objective}`);
    else if (!next.talking && before.talking) notify(`Próximo objetivo: ${currentQuest(next).objective}`);
  };
  const deepen = () => {
    if (!talkingId) return;
    stopVoice(); resetDialogueUi(); setLastAnswer(null);
    apply({ type: 'deepen', npc: talkingId });
    audio.current?.effect('open');
  };

  const listenNpc = () => {
    if (!view) return;
    if (speaking) { stopAudio(); setSpeaking(false); return; }
    setVoiceStatus(''); setSpeaking(true);
    const voices = window.speechSynthesis?.getVoices() ?? [];
    const hasLatinVoice = voices.some(voice => /^es[-_](mx|co|ar|cl|pe|uy|ve|us|419)$/i.test(voice.lang));
    const region = !hasLatinVoice && voices.some(voice => /^es[-_]es$/i.test(voice.lang)) ? 'es-ES' : 'es-MX';
    const gender = ['liora','celina','ines','elara','tejedora'].includes(talkingId ?? '') ? 'f' : 'm';
    playClips([{ text: view.text, voice: `${region}-${gender}` }], { rate: ['A0','A1','A2'].includes(state.level) ? 0.83 : 0.96 })
      .then(() => setSpeaking(false))
      .catch(() => { setSpeaking(false); setVoiceStatus('No hay una voz en español disponible en este navegador. Puedes leer el diálogo.'); });
  };

  const toggleMic = () => {
    if (listening) { recognition.current?.stop(); return; }
    const voiceWindow = window as VoiceWindow;
    const BrowserRecognition = voiceWindow.SpeechRecognition ?? voiceWindow.webkitSpeechRecognition;
    if (!BrowserRecognition) return;
    stopAudio(); setSpeaking(false); setVoiceStatus('');
    const recognizer = new BrowserRecognition();
    recognition.current = recognizer;
    recognizer.lang = 'es-MX'; recognizer.continuous = false; recognizer.interimResults = false;
    recognizer.onresult = event => { const transcript = Array.from({ length: event.results.length }, (_, index) => event.results[index][0].transcript).join(' '); setAnswer(value => `${value}${value ? ' ' : ''}${transcript}`); setVoiceStatus('Dictado recibido. Puedes corregirlo antes de continuar.'); inputRef.current?.focus(); };
    recognizer.onerror = event => { setListening(false); setVoiceStatus(event.error === 'not-allowed' ? 'El micrófono no está autorizado. Puedes responder en voz alta o escribir.' : event.error === 'no-speech' ? 'No se detectó voz. Puedes volver a intentarlo o seguir sin escribir.' : 'El dictado no está disponible ahora. Puedes responder en voz alta o escribir.'); };
    recognizer.onend = () => { setListening(false); recognition.current = null; };
    try { recognizer.start(); setListening(true); } catch { setVoiceStatus('No se pudo iniciar el micrófono. Puedes responder en voz alta o escribir.'); }
  };

  const leaveToMenu = () => { stopVoice(); resetDialogueUi(); setStarted(false); setPanel(null); setIntro(false); };
  const showHud = started && !intro && !victory && !ending;
  const continueLabel = !view ? '' : view.mode === 'locked' ? 'Volver a explorar' : view.mode === 'deep' ? 'Volver a la conversación' : view.mode === 'revisit' ? 'Otra pregunta' : view.index + 1 >= view.total ? (view.kind === 'npc' ? 'Terminar y seguir la misión' : 'Terminar la charla') : 'Continuar conversación';
  const progressLabel = !view ? '' : view.mode === 'deep' ? 'Pregunta para profundizar' : view.mode === 'revisit' ? 'Conversación libre' : view.mode === 'locked' ? 'Todavía no' : `Momento ${view.index + 1} de ${view.total}`;
  const profiles = store.profiles;
  const startTarget = startFor === 'new' ? null : profiles.find(entry => entry.id === startFor) ?? null;
  const panelTitle: Record<Exclude<Panel, null>, string> = { map: 'Cartografía de Valdoria', journal: 'Diario de la aventura', inventory: 'El equipaje de Gael', pause: 'Un momento de calma', help: 'Conversa y despierta Valdoria', students: 'Mis alumnos', start: 'Seleccionar punto de partida', new: 'Nueva aventura' };

  return <main className={`rr-game ${started ? 'rr-playing' : 'rr-menu-open'} ${damaged ? 'rr-damaged' : ''}`} aria-label="El Reino de la Rosa Dormida">
    <WorldBoundary key={worldKey}>
      {World ? <World state={state} paused={!started || Boolean(panel) || Boolean(talkingId) || victory || Boolean(confirm) || listenAt !== undefined} intro={intro} spell={spell} onInteract={interact} onCollect={collect} onCast={cast} onCheckpoint={checkpoint} onIntroEnd={finishIntro} onEndingEnd={() => setEndingReady(true)} onPosition={setPosition} onSelectSpell={selectSpell} onDamage={damage}/> : <div className="rr-loading-world"><div className="rr-loading-glow"/><Rose/><p>{worldError ? 'No se pudo cargar el reino.' : 'Un reino está a punto de despertar…'}</p>{worldError && <button className="rr-primary" onClick={() => window.location.reload()}>Volver a cargar</button>}</div>}
    </WorldBoundary>
    <div className="rr-vignette" aria-hidden="true"/>

    {!started && <div className="rr-title-screen">
      <header className="rr-menu-header"><Link href="/">‹ <span>SPANISHCUE</span></Link><span>UNA AVENTURA PARA CONVERSAR</span></header>
      <section className="rr-title-copy">
        <div className="rr-title-kicker"><span/> VALDORIA TE ESPERA <span/></div>
        <Rose className="rr-title-rose"/>
        <h1><small>El Reino de la</small>Rosa Dormida</h1>
        <p className="rr-title-tagline">El reino duerme.<br/>Cada conversación lo despierta.</p>
        {profile && <div className="rr-profile-chip"><Icon name="users"/><div><span className="rr-eyebrow">ALUMNO ACTIVO</span><strong>{profile.name}</strong><small>{profile.level} · {profileSummary(profile).chapter}</small></div><button type="button" onClick={() => openPanel('students')}>Cambiar</button></div>}
        <div className="rr-menu-level"><label htmlFor="rr-start-level">{profile ? `NIVEL DE ${profile.name.toUpperCase()}` : 'NIVEL DE ESPAÑOL'}</label><div className="rr-level-options" role="group" aria-label="Nivel de español">{LEVELS.map(level => <button key={level} aria-pressed={(profile?.level ?? newLevel) === level} onClick={() => changeLevel(level)}>{level}</button>)}</div><span>{LEVEL_LABELS[profile?.level ?? newLevel]}</span></div>
        <ModeSwitch mode={mode} onChange={setMode} className="rr-mode" />
        <div className="rr-start-actions rr-menu-actions">
          {profile?.started && <button className="rr-primary" disabled={!ready || !World} onClick={() => continueProfile(profile.id)}>Continuar aventura <Icon name="arrow"/></button>}
          <button className={profile?.started ? 'rr-secondary' : 'rr-primary'} disabled={!ready || !World} onClick={() => { setNewLevel(profile?.level ?? newLevel); openPanel('new'); }}>Nueva aventura{!profile?.started && <Icon name="arrow"/>}</button>
          <button className="rr-secondary" disabled={!ready || !World} onClick={() => { setStartFor(storeRef.current.activeId ?? 'new'); openPanel('start'); }}><Icon name="flag"/>Seleccionar capítulo o punto de partida</button>
          <button className="rr-secondary" disabled={!ready} onClick={() => openPanel('students')}><Icon name="users"/>Mis alumnos / Partidas guardadas</button>
        </div>
        <p className="rr-title-note">Explora Valdoria, conversa sobre la vida y avanza la historia a tu ritmo.</p>
      </section>
      <footer className="rr-menu-footer"><span>CONVERSACIÓN EN ESPAÑOL · A0–C2</span><button onClick={() => openPanel('help')}>Cómo funciona <Icon name="help"/></button></footer>
    </div>}

    {listenAt !== undefined && <ListeningCard game="reino" level={state.level} spot={listenAt} done={heard} onDone={markHeard} onClose={() => setListenAt(undefined)} />}
    {intro && <div className="rr-intro"><div className="rr-letterbox rr-letterbox-top"/><div className="rr-intro-title"><span>HACE CIEN AÑOS, EL TIEMPO SE DETUVO.</span><h2>Valdoria</h2><p>«Por fin llega alguien al camino.<br/>El reino te estaba esperando.»</p><small>NOX, EL CUERVO DEL CAMINO</small></div><button className="rr-skip" onClick={finishIntro}>Omitir introducción <kbd>Esc</kbd></button><div className="rr-letterbox rr-letterbox-bottom"/></div>}

    {showHud && <>
      <header className="rr-hud-top"><Link href="/" className="rr-brand" aria-label="Volver a SpanishCue"><Rose/><span>SPANISHCUE<small>{profile ? profile.name.toUpperCase() : 'VALDORIA'}</small></span></Link><div className="rr-compass" aria-hidden="true"><span>O</span><i/><span>N</span><i/><span>E</span><b>◆</b></div><div className="rr-hud-actions"><label className="rr-hud-level"><span>NIVEL</span><select value={state.level} onChange={event => changeLevel(event.target.value)} aria-label="Nivel de español">{LEVELS.map(level => <option key={level}>{level}</option>)}</select></label><button className={`rr-icon-button ${!music ? 'rr-muted' : ''}`} aria-label={music ? 'Silenciar música' : 'Activar música'} aria-pressed={music} onClick={() => { audio.current?.start(); setMusic(value => !value); }}><Icon name="music"/></button><label className="rr-volume rr-hud-volume"><span>Volumen de la música</span><input type="range" min="0" max="100" step="5" value={Math.round(volume * 100)} onChange={event => { audio.current?.start(); const next = Number(event.target.value) / 100; setVolume(next); if (next > 0) setMusic(true); }} aria-label="Volumen de la música"/></label><button className={`rr-icon-button ${!effects ? 'rr-muted' : ''}`} aria-label={effects ? 'Silenciar efectos' : 'Activar efectos'} aria-pressed={effects} onClick={() => { audio.current?.start(); setEffects(value => !value); }}><Icon name="sound"/></button><button className="rr-icon-button" aria-label="Pausa" onClick={() => openPanel('pause')}><Icon name="pause"/></button></div></header>
      {mode === 'escucha' && !talkingId && !panel && listenAt === undefined && <ListeningBadge game="reino" done={heard} onList={() => setListenAt(null)} />}
      {!talkingId && !panel && <>
        <button className="rr-objective" onClick={() => setGuide(value => !value)} aria-expanded={guide} aria-label="Ver qué hacer ahora"><span className="rr-objective-marker">◇</span><div><span className="rr-eyebrow">{state.flags.victory ? 'EL REINO HA DESPERTADO' : `CAPÍTULO ${String(Math.min(state.completed.length + 1, QUESTS.length)).padStart(2,'0')} · PRÓXIMO OBJETIVO`}</span><h2>{quest.title}</h2><p>{quest.objective}</p>{route && <span className="rr-route"><b>✦</b> {route}</span>}{guide ? <span className="rr-guide">{guideText}</span> : <span className="rr-guide-cta">¿Qué hago ahora? Toca aquí</span>}</div></button>
        <button className="rr-minimap" aria-label="Abrir mapa del reino" onClick={() => openPanel('map')}><KingdomMap position={position} target={quest.target ?? ''}/><span>VALDORIA <kbd>M</kbd></span></button>
        <div className="rr-controls-brief"><span><kbd>W A S D</kbd> Correr</span><span><kbd>⇧</kbd> Más rápido</span><span><kbd>N</kbd> Nitro</span><span><kbd>Espacio</kbd> Saltar</span><span>Arrastra · Cámara</span><button onClick={() => openPanel('help')} aria-label="Ver todos los controles">?</button></div>
      </>}
      <footer className="rr-hud-bottom"><nav className="rr-bottom-nav" aria-label="Herramientas de la aventura"><button onClick={() => setMode(mode === 'escucha' ? 'conversacion' : 'escucha')} aria-pressed={mode === 'escucha'} aria-label="Comprensión auditiva"><Icon name="book"/><span>{mode === 'escucha' ? 'Escucha: sí' : 'Escucha'}</span></button><button onClick={() => openPanel('journal')} aria-label="Diario de misiones"><Icon name="book"/><span>Diario</span><kbd>J</kbd></button><button onClick={() => openPanel('inventory')} aria-label="Abrir inventario"><Icon name="bag"/><span>Inventario</span><kbd>I</kbd></button><button onClick={() => openPanel('map')} aria-label="Mapa del reino"><Icon name="map"/><span>Mapa</span><kbd>M</kbd></button></nav><div className="rr-spellbar" role="group" aria-label="Hechizos">{SPELLS.map((item,index) => { const unlocked = state.spells.includes(item.id); return <button key={item.id} className={`rr-spell ${spell === item.id && unlocked ? 'rr-spell-selected' : ''} ${!unlocked ? 'rr-spell-locked' : ''}`} style={{ '--spell-color': item.color } as CSSProperties} aria-label={`${item.name}${unlocked ? ': seleccionar' : ': aún no aprendido'}`} aria-pressed={spell === item.id && unlocked} onClick={() => selectSpell(item.id)}><kbd>{index + 1}</kbd><span>{SPELL_GLYPHS[item.id] ?? '✧'}</span><small>{unlocked ? item.name : 'Por descubrir'}</small></button>; })}<span className="rr-cast-hint"><kbd>R</kbd> Lanzar</span></div><span className={`rr-save-status ${saveFailed ? 'rr-save-warning' : ''}`}><i/>{saveFailed ? 'Guardado no disponible' : profile ? `Guardado · ${profile.name}` : 'Guardado automático'}</span></footer>
    </>}

    {toast && started && !intro && !ending && !victory && <div className="rr-toast" role="status"><span>✧</span>{toast}</div>}

    {view && !victory && <div className="rr-dialogue-shade"><div ref={dialogRef} className="rr-dialogue" role="dialog" aria-modal="true" aria-labelledby="rr-npc-name">
      <div className="rr-dialogue-top"><div className="rr-npc-sigil" style={{ '--npc-color': NPCS.find(person => person.id === talkingId)?.color ?? '#9fe3d6' } as CSSProperties}>{NPC_GLYPHS[talkingId ?? ''] ?? '◌'}</div><div><span className="rr-eyebrow">{view.role}{view.topic ? ` · ${view.topic}` : ''}</span><h2 id="rr-npc-name">{view.name}</h2></div><button className={`rr-icon-button ${speaking ? 'rr-active' : ''}`} aria-label={speaking ? 'Detener voz' : 'Escuchar voz del navegador'} title="Voz sintetizada del navegador" onClick={listenNpc}><Icon name="sound"/></button><button className="rr-icon-button" aria-label="Cerrar conversación" onClick={closeDialogue}><Icon name="close"/></button></div>
      <div className="rr-turn-meta"><span className={`rr-turn-chip rr-turn-${view.mode}`}>{progressLabel}</span>{view.mode === 'main' && <span className="rr-turn-dots" aria-hidden="true">{Array.from({ length: view.total }, (_, index) => <i key={index} className={index < view.index ? 'rr-done' : index === view.index ? 'rr-now' : ''}/>)}</span>}<span className="rr-turn-level">{state.level}</span></div>
      {lastAnswer && <p className="rr-student-bubble"><span>Tú</span>{lastAnswer}</p>}
      <p className="rr-npc-text" data-testid="rr-npc-line">{view.text}</p>
      {view.en && <div className="rr-english">{showEnglish ? <p lang="en"><span>EN</span>{view.en}</p> : null}<button type="button" className="rr-text-button" onClick={() => setShowEnglish(value => !value)}>{showEnglish ? 'Ocultar inglés' : 'Ver en inglés'}</button></div>}
      {view.mode === 'locked' && <p className="rr-mission-line"><Icon name="compass"/>{view.mission.objective}</p>}
      {view.isQuestion && view.options && <div className="rr-options" role="group" aria-label="Respuestas posibles">{view.options.map(option => <button key={option} type="button" onClick={() => { setAnswer(option); inputRef.current?.focus(); }}>{option}</button>)}</div>}
      <form onSubmit={advance}>
        {view.isQuestion && <><label className="rr-answer-label" htmlFor="rr-answer">Responde en voz alta, escribe o dicta. Es opcional: el profesor puede continuar sin texto.</label>
        <div className="rr-answer-row"><textarea ref={inputRef} id="rr-answer" value={answer} onChange={event => setAnswer(event.target.value)} maxLength={1500} rows={2} placeholder="Tu respuesta (opcional)…" onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }}/>{micAvailable && <button type="button" className={`rr-mic ${listening ? 'rr-listening' : ''}`} onClick={toggleMic} aria-label={listening ? 'Terminar dictado' : 'Dictar respuesta'} aria-pressed={listening}><Icon name="mic"/>{listening ? 'Escuchando' : 'Dictar'}</button>}</div></>}
        {voiceStatus && <p className="rr-voice-status" role="status">{voiceStatus}</p>}
        {hint && view.help && <div className="rr-dialogue-hint rr-language-hint"><span className="rr-eyebrow">PISTA PARA RESPONDER</span><div className="rr-frames">{view.help.frames.map(frame => <button key={frame} type="button" onClick={() => { setAnswer(value => value || frame.replace(/…$/, ' ')); inputRef.current?.focus(); }}>{frame}<span>↗</span></button>)}</div>{view.help.words.length > 0 && <p className="rr-words"><b>Palabras útiles:</b> {view.help.words.join(' · ')}</p>}<p className="rr-small-note">{view.help.safe}{view.help.safeEn && <><br/><span lang="en">{view.help.safeEn}</span></>}</p></div>}
        {missionHint && <div className="rr-dialogue-hint rr-mission-hint"><span className="rr-eyebrow">PISTA DE MISIÓN · CAPÍTULO {view.mission.chapter}</span><p><strong>{view.mission.objective}</strong></p><p>{view.mission.here ? `${view.name} tiene la pista que necesitas: sigue conversando y, al final, te va a decir adónde ir.` : view.kind === 'place' ? 'Esta charla es opcional: no cambia la misión. Cuando quieras, cierra la conversación y sigue la luz dorada.' : 'Cuando cierres la conversación, sigue la luz dorada y el mapa (M).'}</p></div>}
        <div className="rr-answer-actions rr-teacher-controls">
          <div className="rr-helper-buttons">
            {view.isQuestion && view.help && <button type="button" className="rr-chip-button" aria-expanded={hint} onClick={() => { setHint(value => !value); setMissionHint(false); }}><Icon name="bulb"/>Pista</button>}
            {view.mode !== 'locked' && <button type="button" className="rr-chip-button" onClick={deepen}><Icon name="deeper"/>Profundizar</button>}
            <button type="button" className="rr-chip-button" aria-expanded={missionHint} onClick={() => { setMissionHint(value => !value); setHint(false); }}><Icon name="compass"/>Pista de misión</button>
          </div>
          <div className="rr-flow-buttons">
            <button type="button" className="rr-text-button" onClick={closeDialogue}>Cerrar conversación</button>
            <button type="submit" className="rr-primary rr-continue" data-autofocus disabled={listening}>{continueLabel} <Icon name="arrow"/></button>
          </div>
        </div>
      </form>
    </div></div>}

    {panel && <div className="rr-modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setPanel(null); }}><div ref={dialogRef} className={`rr-modal rr-modal-${panel}`} role="dialog" aria-modal="true" aria-labelledby="rr-panel-title"><header className="rr-modal-header"><div><span className="rr-eyebrow">EL REINO DE LA ROSA DORMIDA</span><h2 id="rr-panel-title">{panelTitle[panel]}</h2></div><button className="rr-icon-button" aria-label="Cerrar panel" onClick={() => setPanel(null)}><Icon name="close"/></button></header>
      {panel === 'map' && <div className="rr-map-panel"><KingdomMap position={position} target={quest.target ?? ''} large/><aside><span className="rr-eyebrow">PRÓXIMO OBJETIVO · CAPÍTULO {quest.number}</span><h3>{quest.title}</h3><p>{quest.objective}</p><div className="rr-map-legend"><span><i/> Tu posición</span><span><i/> Destino de la misión</span><span><i/> Caminos de Valdoria</span><span><i className="rr-legend-place"/> Lugares para conversar</span></div><p className="rr-small-note">Recorre el reino a pie. El mapa te orienta; las puertas y los puentes se abren con tus acciones.</p><button className="rr-secondary" onClick={() => setPanel(null)}>Volver al camino <Icon name="arrow"/></button></aside></div>}
      {panel === 'journal' && <div className="rr-journal"><div className="rr-progress"><span>{state.completed.length} de {QUESTS.length} capítulos completados</span><div><i style={{width:`${state.completed.length / QUESTS.length * 100}%`}}/></div></div><ol>{QUESTS.map((item,index) => { const complete = state.completed.includes(item.id); const active = item.id === quest.id && !state.flags.victory; return <li key={item.id} className={`${complete ? 'rr-quest-complete' : ''} ${active ? 'rr-quest-current' : ''}`}><span className="rr-quest-number">{complete ? '✓' : String(index + 1).padStart(2,'0')}</span><div><span className="rr-eyebrow">{complete ? 'COMPLETADA' : active ? 'MISIÓN ACTUAL · PRÓXIMO OBJETIVO' : 'POR DESCUBRIR'}</span><h3>{item.title}</h3><p>{active ? quest.objective : complete ? item.reward : item.description}</p></div>{active && <span className="rr-quest-star">◇</span>}</li>; })}</ol>{discoveries(state).length > 0 && <section className="rr-discoveries"><h3 className="rr-inventory-heading">Lo que descubriste</h3><ul>{discoveries(state).map(entry => <li key={entry.npc}><b>{entry.name}</b> {entry.text}</li>)}</ul></section>}</div>}
      {panel === 'inventory' && <div className="rr-inventory"><p className="rr-panel-intro">Cada hallazgo guarda una parte de la historia. Los objetos se usan cuando cumples su propósito en el reino.</p>{state.inventory.length ? <div className="rr-items">{state.inventory.map(id => { const item = ITEMS.find(candidate => candidate.id === id); return item ? <article key={id}><span className="rr-item-icon">{item.icon}</span><div><h3>{item.name}</h3><p>{item.description}</p></div></article> : null; })}</div> : <div className="rr-empty"><Icon name="bag"/><h3>La historia acaba de comenzar.</h3><p>Acércate a un objeto y pulsa F para recogerlo.</p></div>}<h3 className="rr-inventory-heading">La magia que aprendiste</h3><div className="rr-learned-spells">{SPELLS.filter(item => state.spells.includes(item.id)).map(item => <button key={item.id} style={{'--spell-color':item.color} as CSSProperties} onClick={() => {selectSpell(item.id);setPanel(null);}}><span>{SPELL_GLYPHS[item.id]}</span><div><h4>{item.name}</h4><p>{item.description}</p></div></button>)}{!state.spells.length && <p className="rr-small-note">Encuentra a quienes todavía recuerdan la magia de Valdoria.</p>}</div></div>}
      {panel === 'pause' && <div className="rr-pause-body"><Rose/><p>{profile ? `La partida de ${profile.name} está guardada.` : 'El reino puede esperar un instante.'}</p><button className="rr-primary" onClick={() => setPanel(null)}>Continuar la aventura <Icon name="arrow"/></button><div className="rr-settings"><label className="rr-volume"><span>Volumen de la música</span><input type="range" min="0" max="100" step="5" value={Math.round(volume * 100)} onChange={event => { audio.current?.start(); const next = Number(event.target.value) / 100; setVolume(next); if (next > 0) setMusic(true); }} aria-label="Volumen de la música"/></label><button onClick={() => {audio.current?.start();setMusic(value => !value);}}><Icon name="music"/>Música<span>{music ? 'Activada' : 'Silenciada'}</span></button><button onClick={() => {audio.current?.start();setEffects(value => !value);}}><Icon name="sound"/>Efectos<span>{effects ? 'Activados' : 'Silenciados'}</span></button><button onClick={() => { setStartFor(storeRef.current.activeId ?? 'new'); setPanel('start'); }}><Icon name="flag"/>Seleccionar punto de partida<Icon name="arrow"/></button><button onClick={() => setPanel('students')}><Icon name="users"/>Mis alumnos / Partidas guardadas<Icon name="arrow"/></button><button onClick={() => setPanel('help')}><Icon name="help"/>Cómo funciona<Icon name="arrow"/></button></div><div className="rr-pause-links"><button onClick={leaveToMenu}>Menú principal</button>{profile && <button onClick={() => askReset(profile.id)}>Reiniciar a {profile.name}</button>}</div><p className="rr-small-note">{saveFailed ? 'El navegador no permite guardar. Mantén esta pestaña abierta para conservar el progreso.' : 'El progreso de cada alumno se guarda solo en este navegador, incluso en mitad de una conversación.'}</p></div>}
      {panel === 'new' && <form className="rr-form-panel" onSubmit={createAndStart}><p className="rr-panel-intro">Cada alumno tiene su propia partida. Crear una aventura nueva nunca borra la de otro alumno.</p><label className="rr-field"><span>Nombre del alumno</span><input value={newName} onChange={event => setNewName(event.target.value)} maxLength={40} placeholder="Por ejemplo: Daniel" autoComplete="off" data-autofocus/></label><div className="rr-field"><span>Nivel</span><div className="rr-level-options" role="group" aria-label="Nivel del alumno">{LEVELS.map(level => <button type="button" key={level} aria-pressed={newLevel === level} onClick={() => setNewLevel(level)}>{level}</button>)}</div><small>{LEVEL_LABELS[newLevel]} · {TEACHER_NOTES[newLevel as keyof typeof TEACHER_NOTES]}</small></div><div className="rr-form-actions"><button type="button" className="rr-secondary" onClick={() => { setStartFor('new'); setPanel('start'); }}>Elegir dónde empezar</button><button type="submit" className="rr-primary" disabled={!World}>Comenzar desde el principio <Icon name="arrow"/></button></div></form>}
      {panel === 'start' && <div className="rr-start-panel">
        <div className="rr-start-target"><label className="rr-field"><span>¿Para quién?</span><select value={startFor} onChange={event => setStartFor(event.target.value)}>{profiles.map(entry => <option key={entry.id} value={entry.id}>{entry.name} · {entry.level}</option>)}<option value="new">＋ Nuevo alumno</option></select></label>{startFor === 'new' ? <><label className="rr-field"><span>Nombre</span><input value={newName} onChange={event => setNewName(event.target.value)} maxLength={40} placeholder="Nombre del alumno" autoComplete="off"/></label><div className="rr-field"><span>Nivel</span><div className="rr-level-options" role="group" aria-label="Nivel">{LEVELS.map(level => <button type="button" key={level} aria-pressed={newLevel === level} onClick={() => setNewLevel(level)}>{level}</button>)}</div></div></> : startTarget && <p className="rr-small-note">Nivel {startTarget.level}. {startTarget.started ? `Ahora está en: ${profileSummary(startTarget).chapter}.` : 'Todavía no empezó.'}</p>}</div>
        <p className="rr-panel-intro">Elige el capítulo y el momento exacto. El juego reconstruye una partida válida: misiones anteriores completadas, objetos y hechizos necesarios, caminos abiertos y la misión activa.</p>
        <ol className="rr-chapters">{CHAPTERS.map(chapter => <li key={chapter.id}><h3><span>{String(chapter.number).padStart(2, '0')}</span>{chapter.title}</h3><div>{chapter.points.map(point => <button key={point.id} type="button" disabled={!World} onClick={() => beginAt(point.id)} data-point={point.id}>{point.label}{point.open && <small>Empieza conversando</small>}<Icon name="arrow"/></button>)}</div></li>)}</ol>
      </div>}
      {panel === 'students' && <div className="rr-students">
        <p className="rr-panel-intro">Cada alumno tiene una partida independiente, guardada automáticamente en este navegador. Al elegir un alumno, el juego carga exactamente donde quedó su última clase, incluso en mitad de una conversación.</p>
        {profiles.length ? <div className="rr-student-table" role="table" aria-label="Partidas guardadas"><div role="row" className="rr-student-head"><span role="columnheader">Alumno</span><span role="columnheader">Nivel</span><span role="columnheader">Progreso</span><span role="columnheader">Última sesión</span><span role="columnheader">Acciones</span></div>{profiles.map(entry => { const summary = profileSummary(entry); const isActive = entry.id === store.activeId; return <div role="row" key={entry.id} className={`rr-student-row ${isActive ? 'rr-student-active' : ''}`} data-profile={entry.name}><span role="cell" className="rr-student-name"><b>{entry.name}</b>{isActive && <small>Activo</small>}</span><span role="cell"><select value={entry.level} aria-label={`Nivel de ${entry.name}`} onChange={event => { const nextStore = setProfileLevel(storeRef.current, entry.id, event.target.value); persist(nextStore); if (entry.id === nextStore.activeId) { const next = restoreGame(activeProfile(nextStore)!.save); stateRef.current = next; setState(next); } }}>{LEVELS.map(level => <option key={level}>{level}</option>)}</select></span><span role="cell" className="rr-student-progress"><b>{summary.chapter}</b><small>{summary.point}</small></span><span role="cell" className="rr-student-date">{dateLabel(summary.lastSession)}</span><span role="cell" className="rr-student-actions"><button type="button" className="rr-primary" disabled={!World} onClick={() => continueProfile(entry.id)}>{entry.started ? 'Continuar' : 'Empezar'}</button><button type="button" onClick={() => { setStartFor(entry.id); setPanel('start'); }}>Elegir punto</button><button type="button" onClick={() => askReset(entry.id)}>Reiniciar</button><button type="button" className="rr-danger" onClick={() => askDelete(entry.id)}>Eliminar</button></span></div>; })}</div> : <div className="rr-empty"><Icon name="users"/><h3>Todavía no hay alumnos.</h3><p>Crea un perfil para cada alumno: sus partidas nunca se mezclan.</p></div>}
        <form className="rr-new-student" onSubmit={event => { event.preventDefault(); const { store: nextStore, profile: created } = createProfile(storeRef.current, { name: newName, level: newLevel }); if (!created) { setStudentsNote('Hay demasiados perfiles guardados.'); return; } persist(nextStore); setNewName(''); setStudentsNote(`Perfil creado: ${created.name} (${created.level}).`); if (!started) { const next = restoreGame(created.save); stateRef.current = next; setState(next); } }}><label className="rr-field"><span>Nuevo perfil</span><input value={newName} onChange={event => setNewName(event.target.value)} maxLength={40} placeholder="Nombre del alumno" autoComplete="off"/></label><label className="rr-field"><span>Nivel</span><select value={newLevel} onChange={event => setNewLevel(event.target.value)}>{LEVELS.map(level => <option key={level}>{level}</option>)}</select></label><button type="submit" className="rr-secondary">Crear perfil</button></form>
        <div className="rr-backup"><button type="button" className="rr-text-button" onClick={exportProfiles} disabled={!profiles.length}>Exportar partidas (JSON)</button><button type="button" className="rr-text-button" onClick={() => importRef.current?.click()}>Importar partidas</button><input ref={importRef} type="file" accept="application/json,.json" hidden onChange={importFile}/></div>
        {studentsNote && <p className="rr-small-note" role="status">{studentsNote}</p>}
      </div>}
      {panel === 'help' && <div className="rr-help">
        <section className="rr-mission"><span className="rr-eyebrow">LA IDEA</span><p>Valdoria duerme desde hace cien años. Recorres el reino con Gael, pero <strong>las conversaciones son sobre ti</strong>: tus viajes, tu trabajo, tus gustos, tus recuerdos y tus opiniones. Cada personaje te cuenta una parte de la historia y te dice adónde ir después.</p></section>
        <ol className="rr-steps">
          <li><b>1</b><div><h3>Sigue la luz dorada</h3><p>Arriba a la izquierda ves el próximo objetivo y la distancia. La columna de luz dorada y el mapa (<kbd>M</kbd>) marcan el lugar exacto.</p></div></li>
          <li><b>2</b><div><h3>Conversa sin prisa</h3><p>Pulsa <kbd>E</kbd> junto a un personaje. Responde en voz alta, escribe o dicta: no hay respuestas correctas. <strong>«Continuar conversación»</strong> pasa al siguiente momento, aunque no escribas nada.</p></div></li>
          <li><b>3</b><div><h3>Herramientas del profesor</h3><p><strong>Pista</strong> da frases para responder. <strong>Profundizar</strong> agrega otra pregunta sobre el mismo tema. <strong>Pista de misión</strong> explica qué hacer en el juego. <strong>Cerrar conversación</strong> guarda el punto exacto.</p></div></li>
          <li><b>4</b><div><h3>Una partida por alumno</h3><p>En «Mis alumnos» cada alumno tiene su progreso. Con «Seleccionar punto de partida» empiezas en cualquier capítulo y momento de la historia.</p></div></li>
        </ol>
        <div className="rr-help-columns"><section><h3>Nivel {state.level} · para el profesor</h3><p className="rr-level-focus">{TEACHER_NOTES[state.level as keyof typeof TEACHER_NOTES]}</p><p>Los círculos turquesa del mapa son lugares para conversar un rato más: no cambian la misión. Los hechizos, los objetos y el ritual final sí tienen reglas: hay que usarlos en el lugar y en el orden correctos.</p></section>
        <section><h3>Controles</h3><dl><div><dt>Correr</dt><dd><kbd>W A S D</kbd> / flechas</dd></div><div><dt>Correr más rápido</dt><dd><kbd>Shift</kbd> + flecha</dd></div><div><dt>Nitro</dt><dd><kbd>N</kbd> o <kbd>Q</kbd> + flecha</dd></div><div><dt>Saltar</dt><dd><kbd>Espacio</kbd></dd></div><div><dt>Mirar alrededor</dt><dd>Arrastra la escena</dd></div><div><dt>Conversar</dt><dd><kbd>E</kbd></dd></div><div><dt>Recoger</dt><dd><kbd>F</kbd></dd></div><div><dt>Magia</dt><dd><kbd>1</kbd>–<kbd>4</kbd> y <kbd>R</kbd></dd></div><div><dt>Diario · Inventario</dt><dd><kbd>J</kbd> · <kbd>I</kbd></dd></div></dl><p className="rr-small-note">En el celular: joystick para correr, «Nitro», y los botones Saltar, Hablar y Magia.</p></section></div>
        <button className="rr-primary" onClick={() => setPanel(null)}>{started ? 'Volver al reino' : 'Entendido'} <Icon name="arrow"/></button></div>}
    </div></div>}

    {victory && <div className="rr-victory" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="rr-victory-title"><div className="rr-victory-rays" aria-hidden="true"/><Rose/><span className="rr-eyebrow">LA ÚLTIMA ESPINA HA CAÍDO</span><h2 id="rr-victory-title">Valdoria despierta.</h2><p>Elara abre los ojos. El silencio se llena de voces.<br/>No fue una espada lo que rompió el hechizo.<br/><em>Fueron tus conversaciones.</em></p><div className="rr-victory-stats"><span><b>{state.completed.length}</b> capítulos vividos</span><span><b>{NPCS.filter(npc => (state.dialogue[npc.id] ?? 0) > 0).length}</b> personajes escuchados</span><span><b>{state.level}</b> español en acción</span></div><button className="rr-primary" onClick={() => { setVictoryDismissed(true); closeDialogue(); }}>Explorar el reino despierto <Icon name="arrow"/></button><button className="rr-text-button" onClick={() => { setVictoryDismissed(true); setStarted(false); setPanel('new'); }}>Empezar con otro alumno</button></div>}

    {confirm && <div className="rr-confirm-backdrop"><section ref={confirmRef} className="rr-confirm" role="alertdialog" aria-modal="true" aria-labelledby="rr-confirm-title"><Rose/><h2 id="rr-confirm-title">{confirm.title}</h2><p>{confirm.text}</p><div><button className="rr-secondary" onClick={() => setConfirm(null)}>Cancelar</button><button className="rr-primary" onClick={confirm.run}>{confirm.confirm}</button></div></section></div>}
  </main>;
}
