// El consorcio · lesson state without React or WebGL: level, floor,
// circles played per level and the open scene. A scene is one choice among
// three answers; each answer has its own reaction, consequence and mood.
import { CONTENT, LEVELS } from './levels.mjs';
import { FLOOR_IDS, SCENE_IDS, sceneById } from './layout.mjs';
import { CAST } from './story.mjs';
import { VECINOS } from './vecinos.mjs';

export const STORAGE_KEY = 'spanishcue:el-consorcio:v1';
export const DEFAULT_LEVEL = 'B1';
export const vecinoById = (id) => VECINOS[id] ?? null;

export function normaliseLevel(value) {
  const level = String(value ?? '').toUpperCase();
  return LEVELS.some((l) => l.id === level) ? level : null;
}

export function createState(level = DEFAULT_LEVEL) {
  return { level: normaliseLevel(level) ?? DEFAULT_LEVEL, floor: 0, done: {}, scene: null };
}

export const doneFor = (state, level = state.level) => state.done[level] ?? [];

export function openScene(state, id) {
  const scene = sceneById(id);
  if (!scene) return state;
  return { ...state, floor: scene.floor, scene: { id, pick: null } };
}
export const closeScene = (state) => ({ ...state, scene: null });

export function choose(state, index) {
  const open = state.scene;
  if (!open || open.pick !== null || index < 0 || index > 2) return state;
  const list = doneFor(state);
  const done = list.includes(open.id) ? state.done : { ...state.done, [state.level]: [...list, open.id] };
  return { ...state, done, scene: { ...open, pick: index } };
}
// Go back to try another answer.
export const undo = (state) => (state.scene && state.scene.pick !== null ? { ...state, scene: { ...state.scene, pick: null } } : state);

export function setLevel(state, level) {
  const next = normaliseLevel(level);
  if (!next || next === state.level) return state;
  return { ...state, level: next, scene: state.scene ? { ...state.scene, pick: null } : null };
}
export const setFloor = (state, floor) => (FLOOR_IDS.includes(floor) ? { ...state, floor, scene: null } : state);
export const resetLevel = (state) => ({ ...state, done: { ...state.done, [state.level]: [] }, scene: null });

const speaker = (id) => (id.startsWith('*') ? id.slice(1) : CAST[id]?.name ?? id);

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
    id: open.id, level: state.level, floor: place.floor, sector: place.sector, name: main.full, role: main.role,
    title: text.title, line: text.line, dialogue: text.dialogue.map(([who, line]) => ({ who: speaker(who), line })),
    ask: text.ask, options: text.options, pick: open.pick, chosen, ended: Boolean(chosen),
    mood: chosen?.mood ?? null, talk: text.talk, words: text.words,
  };
}

export function progress(state) {
  return { done: doneFor(state).length, total: SCENE_IDS.length };
}

export function serialise(state) {
  return JSON.stringify({ level: state.level, floor: state.floor, done: state.done });
}

export function restore(raw, fallbackLevel = DEFAULT_LEVEL) {
  const base = createState(fallbackLevel);
  try {
    const data = JSON.parse(raw ?? '');
    if (!data || typeof data !== 'object') return base;
    const done = {};
    for (const { id } of LEVELS) {
      const list = Array.isArray(data.done?.[id]) ? data.done[id].filter((x) => SCENE_IDS.includes(x)) : [];
      if (list.length) done[id] = [...new Set(list)];
    }
    return { ...base, level: normaliseLevel(data.level) ?? base.level, floor: FLOOR_IDS.includes(data.floor) ? data.floor : 0, done };
  } catch {
    return base;
  }
}
