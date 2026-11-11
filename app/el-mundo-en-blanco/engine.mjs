// El mundo en blanco · progress without React or WebGL: the level, the
// encounters closed at each level (each one gives its ink back to the world),
// the answer given to each deep question («tu página» is written from them),
// whether the arrival was already seen and what you do with your page at the
// end. «Por mi cuenta» keeps it in the browser; «Con profesor» saves it per
// student in the teacher's account through /api/live-class (same row shape as
// the other 3D worlds: values, results, pos).
import { LEVEL_IDS, OPTIONS, SPOTS, SPOT_IDS } from './story.mjs';

export const STORAGE_KEY = 'spanishcue:el-mundo-en-blanco:v1';
export const DEFAULT_LEVEL = 'B1';
export const ENDINGS = ['guardar', 'regalar', 'seguir'];

export function normaliseLevel(value) {
  const level = String(value ?? '').toUpperCase();
  return LEVEL_IDS.includes(level) ? level : null;
}

export function createState(level = DEFAULT_LEVEL) {
  return { level: normaliseLevel(level) ?? DEFAULT_LEVEL, done: {}, answers: {}, ending: {}, arrived: false };
}

const cleanDone = (list) => [...new Set((Array.isArray(list) ? list : []).filter((k) => SPOT_IDS.includes(k)))];
function cleanAnswers(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const [spot, value] of Object.entries(raw)) if (SPOT_IDS.includes(spot) && Number.isInteger(value) && value >= 0 && value < OPTIONS) out[spot] = value;
  return out;
}

export function restore(raw) {
  const base = createState();
  let data = raw;
  try { if (typeof raw === 'string') data = JSON.parse(raw); } catch { return base; }
  if (!data || typeof data !== 'object') return base;
  const done = {}, answers = {}, ending = {};
  for (const level of LEVEL_IDS) {
    const list = cleanDone(data.done?.[level]);
    if (list.length) done[level] = list;
    const a = cleanAnswers(data.answers?.[level]);
    if (Object.keys(a).length) answers[level] = a;
    if (ENDINGS.includes(data.ending?.[level])) ending[level] = data.ending[level];
  }
  return { level: normaliseLevel(data.level) ?? base.level, done, answers, ending, arrived: Boolean(data.arrived) };
}
export const serialise = (state) => JSON.stringify(state);

export function setLevel(state, level) {
  const next = normaliseLevel(level);
  return next && next !== state.level ? { ...state, level: next } : state;
}
export const arrive = (state) => (state.arrived ? state : { ...state, arrived: true });

export const doneFor = (state, level = state.level) => state.done[level] ?? [];
export const answersFor = (state, level = state.level) => state.answers[level] ?? {};
export const isDone = (state, spot, level = state.level) => doneFor(state, level).includes(spot);
export const zoneDone = (state, zone, level = state.level) => SPOTS.filter((s) => s.zone === zone && isDone(state, s.id, level)).length;
/** How much ink the world has back, 0–1. */
export const inkOf = (state, level = state.level) => doneFor(state, level).length / SPOTS.length;

/** The answer to a deep question (it can change until the encounter is closed, and after). */
export function answer(state, spot, index) {
  if (!SPOT_IDS.includes(spot) || !Number.isInteger(index) || index < 0 || index >= OPTIONS) return state;
  const a = answersFor(state);
  if (a[spot] === index) return state;
  return { ...state, answers: { ...state.answers, [state.level]: { ...a, [spot]: index } } };
}
export function markDone(state, spot) {
  const list = doneFor(state);
  if (!SPOT_IDS.includes(spot) || list.includes(spot)) return state;
  return { ...state, done: { ...state.done, [state.level]: [...list, spot] } };
}
export function decide(state, ending) {
  if (!ENDINGS.includes(ending) || state.ending[state.level] === ending) return state;
  return { ...state, ending: { ...state.ending, [state.level]: ending } };
}

export function resetLevel(state) {
  const done = { ...state.done }, answers = { ...state.answers }, ending = { ...state.ending };
  delete done[state.level]; delete answers[state.level]; delete ending[state.level];
  return { ...state, done, answers, ending };
}

/** The next encounter without doing, in the order of the walk, after `spot`. */
export function nextSpot(state, spot) {
  const list = doneFor(state);
  const at = Math.max(0, SPOTS.findIndex((s) => s.id === spot));
  for (let i = 1; i <= SPOTS.length; i++) {
    const item = SPOTS[(at + i) % SPOTS.length];
    if (!list.includes(item.id)) return item;
  }
  return null;
}

// ---------------------------------------------------------------- account rows

/** The live-class row for one student: progress in values/results, how far they are in pos. */
export function toSaved(state) {
  return {
    values: { kind: 'el-mundo-en-blanco', level: state.level, arrived: state.arrived, ending: state.ending, answers: state.answers },
    results: { ...state.done },
    pos: { stage: doneFor(state).length, step: 0 },
  };
}
export function fromSaved(saved) {
  if (!saved || typeof saved !== 'object') return createState();
  const values = saved.values ?? {};
  return restore({ level: values.level, arrived: values.arrived, ending: values.ending, answers: values.answers, done: saved.results ?? {} });
}
