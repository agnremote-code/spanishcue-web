// La boda · lesson state without React or WebGL: level, circles played per
// level, the answer chosen in each (it writes a line of the toast) and the
// open scene. A scene is one choice among three answers; each answer has its
// own reaction, consequence and mood.
import { CONTENT, LEVELS } from './levels.mjs';
import { SCENE_IDS, sceneById } from './layout.mjs';
import { CAST, TOAST, toastNotes } from './story.mjs';
import { INVITADOS } from './invitados.mjs';

export const STORAGE_KEY = 'spanishcue:la-boda:v1';
export const DEFAULT_LEVEL = 'B1';
export const invitadoById = (id) => INVITADOS[id] ?? null;

export function normaliseLevel(value) {
  const level = String(value ?? '').toUpperCase();
  return LEVELS.some((l) => l.id === level) ? level : null;
}

export function createState(level = DEFAULT_LEVEL) {
  return { level: normaliseLevel(level) ?? DEFAULT_LEVEL, done: {}, picks: {}, scene: null };
}

export const doneFor = (state, level = state.level) => state.done[level] ?? [];
export const picksFor = (state, level = state.level) => state.picks?.[level] ?? {};

export function openScene(state, id) {
  if (!sceneById(id)) return state;
  return { ...state, scene: { id, pick: null } };
}
export const closeScene = (state) => ({ ...state, scene: null });

export function choose(state, index) {
  const open = state.scene;
  if (!open || open.pick !== null || index < 0 || index > 2) return state;
  const list = doneFor(state);
  const done = list.includes(open.id) ? state.done : { ...state.done, [state.level]: [...list, open.id] };
  const picks = { ...state.picks, [state.level]: { ...picksFor(state), [open.id]: index } };
  return { ...state, done, picks, scene: { ...open, pick: index } };
}
// Go back to try another answer (the note on the card changes with it).
export const undo = (state) => (state.scene && state.scene.pick !== null ? { ...state, scene: { ...state.scene, pick: null } } : state);

export function setLevel(state, level) {
  const next = normaliseLevel(level);
  if (!next || next === state.level) return state;
  return { ...state, level: next, scene: state.scene ? { ...state.scene, pick: null } : null };
}
export const resetLevel = (state) => ({ ...state, done: { ...state.done, [state.level]: [] }, picks: { ...state.picks, [state.level]: {} }, scene: null });

const speaker = (id) => (id.startsWith('*') ? id.slice(1) : CAST[id]?.name ?? id);

// The toast notes of this level, in the order the circles were played.
export const notesFor = (state) => toastNotes(doneFor(state), picksFor(state));

// Everything the scene card shows, in order.
export function sceneView(state) {
  const open = state.scene;
  if (!open) return null;
  const place = sceneById(open.id);
  const text = CONTENT[state.level]?.[open.id];
  if (!place || !text) return null;
  const chosen = open.pick === null ? null : text.options[open.pick];
  const main = CAST[place.cast[0]];
  return {
    id: open.id, level: state.level, sector: place.sector, name: main.full, role: main.role,
    title: text.title, line: text.line, dialogue: text.dialogue.map(([who, line]) => ({ who: speaker(who), line })),
    ask: text.ask, options: text.options, pick: open.pick, chosen, ended: Boolean(chosen),
    mood: chosen?.mood ?? null, talk: text.talk, words: text.words,
    note: chosen && TOAST[open.id] ? TOAST[open.id][open.pick] : null,
    toast: open.id === 'brindis' && chosen ? notesFor(state).map((n) => n.note) : null,
  };
}

export function progress(state) {
  return { done: doneFor(state).length, total: SCENE_IDS.length };
}

export function serialise(state) {
  return JSON.stringify({ level: state.level, done: state.done, picks: state.picks });
}

export function restore(raw, fallbackLevel = DEFAULT_LEVEL) {
  const base = createState(fallbackLevel);
  try {
    const data = JSON.parse(raw ?? '');
    if (!data || typeof data !== 'object') return base;
    const done = {}, picks = {};
    for (const { id } of LEVELS) {
      const list = Array.isArray(data.done?.[id]) ? data.done[id].filter((x) => SCENE_IDS.includes(x)) : [];
      if (list.length) done[id] = [...new Set(list)];
      const p = data.picks?.[id];
      if (p && typeof p === 'object') {
        const clean = Object.fromEntries(Object.entries(p).filter(([k, v]) => SCENE_IDS.includes(k) && [0, 1, 2].includes(v)));
        if (Object.keys(clean).length) picks[id] = clean;
      }
    }
    return { ...base, level: normaliseLevel(data.level) ?? base.level, done, picks };
  } catch {
    return base;
  }
}
