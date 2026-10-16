// El Gran Meridiano · lesson state without React or WebGL: the level, the
// floor, which circles were played and where the open scene is. A scene is
// two choices (one answer each) and then a conversation.
import { CONTENT, LEVELS } from './levels.mjs';
import { SCENE_IDS, sceneById } from './layout.mjs';

export const STORAGE_KEY = 'spanishcue:gran-meridiano:v1';
export const DEFAULT_LEVEL = 'B1';

// What Valentina carries tonight. Each scene opens differently with it.
export const MONEY = [
  { id: 'nada', label: 'Sin un peso', hint: 'Entra con lo puesto' },
  { id: '100', label: '100 US$', hint: 'Una noche barata' },
  { id: '500', label: '500 US$', hint: 'Una noche divertida' },
  { id: '1000', label: '1.000 US$', hint: 'Una noche en serio' },
  { id: '10000', label: '10.000 US$', hint: 'Jugadora de verdad' },
  { id: '100000', label: '100.000 US$', hint: 'Una ballena' },
  { id: '1000000', label: '1 millón', hint: 'Una leyenda' },
];
export const DEFAULT_MONEY = '500';
export const normaliseMoney = (value) => (MONEY.some((m) => m.id === String(value)) ? String(value) : null);

export function normaliseLevel(value) {
  const level = String(value ?? '').toUpperCase();
  return LEVELS.some((l) => l.id === level) ? level : null;
}

export function createState(level = DEFAULT_LEVEL) {
  return { level: normaliseLevel(level) ?? DEFAULT_LEVEL, money: DEFAULT_MONEY, floor: 1, done: {}, scene: null };
}

export function doneFor(state, level = state.level) {
  return state.done[level] ?? [];
}

// Story scenes ask two choices; the Marketing section asks one.
function choicesIn(level, id) {
  return CONTENT[level]?.[id]?.options2 ? 2 : 1;
}

// One open scene: `picks` holds the option chosen at each step.
export function openScene(state, id) {
  if (!sceneById(id)) return state;
  return { ...state, scene: { id, picks: [] } };
}

export function closeScene(state) {
  return { ...state, scene: null };
}

export function choose(state, index) {
  const scene = state.scene;
  const steps = choicesIn(state.level, scene?.id);
  if (!scene || scene.picks.length >= steps || index < 0 || index > 2) return state;
  const picks = [...scene.picks, index];
  let done = state.done;
  if (picks.length === steps) {
    const list = doneFor(state);
    if (!list.includes(scene.id)) done = { ...done, [state.level]: [...list, scene.id] };
  }
  return { ...state, done, scene: { ...scene, picks } };
}

// Go back one answer to try another option.
export function undo(state) {
  const scene = state.scene;
  if (!scene || !scene.picks.length) return state;
  return { ...state, scene: { ...scene, picks: scene.picks.slice(0, -1) } };
}

export function setLevel(state, level) {
  const next = normaliseLevel(level);
  if (!next || next === state.level) return state;
  return { ...state, level: next, scene: state.scene ? { ...state.scene, picks: [] } : null };
}

export function setMoney(state, money) {
  const next = normaliseMoney(money);
  if (!next || next === state.money) return state;
  return { ...state, money: next, scene: state.scene ? { ...state.scene, picks: [] } : null };
}

export function setFloor(state, floor) {
  return [1, 2, 3].includes(floor) ? { ...state, floor, scene: null } : state;
}

export function resetLevel(state) {
  return { ...state, done: { ...state.done, [state.level]: [] }, scene: null };
}

// Everything the scene card shows, in order.
export function sceneView(state) {
  const open = state.scene;
  if (!open) return null;
  const place = sceneById(open.id);
  const text = CONTENT[state.level]?.[open.id];
  if (!place || !text) return null;
  const [first, second] = open.picks;
  // A0 has no money openings: every purse falls back to the plain line.
  const beats = [{ line: text.money?.[state.money] || text.line, options: text.options, pick: first }];
  if (first !== undefined && text.options2) beats.push({ line: text.line2, options: text.options2, pick: second });
  const ended = open.picks.length >= choicesIn(state.level, open.id);
  return {
    id: open.id, title: text.title, place: place.place, name: place.name, role: place.role, floor: place.floor,
    step: open.picks.length, beats, ended, end: ended ? text.end : null, talk: text.talk, words: text.words,
  };
}

export function progress(state) {
  const list = doneFor(state);
  return { done: list.length, total: SCENE_IDS.length };
}

export function serialise(state) {
  return JSON.stringify({ level: state.level, money: state.money, floor: state.floor, done: state.done });
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
    return { ...base, level: normaliseLevel(data.level) ?? base.level, money: normaliseMoney(data.money) ?? base.money, floor: [1, 2, 3].includes(data.floor) ? data.floor : 1, done };
  } catch {
    return base;
  }
}
