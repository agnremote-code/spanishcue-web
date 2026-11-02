// Más allá · progress without React or WebGL: the level, where the soul is
// (the Umbral or one of the two worlds), which world it chose first, the
// encounters finished at each level, the answer given to each deep question
// (the «retrato de tu alma» is drawn from them), whether the death was already
// seen and the last choice of the level (where the soul stays).
// «Por mi cuenta» keeps it in the browser; «Con profesor» saves it per
// student in the teacher's account through /api/live-class (same row shape as
// the other 3D worlds: values, results, pos).
import { FORMS, LEVEL_IDS, SPOTS, SPOT_IDS, WORLD_IDS } from './story.mjs';

export const STORAGE_KEY = 'spanishcue:mas-alla:v1';
export const DEFAULT_LEVEL = 'B1';
export const PLACES = ['umbral', ...WORLD_IDS];
export const VERDICTS = ['cielo', 'infierno', 'volver'];

export function normaliseLevel(value) {
  const level = String(value ?? '').toUpperCase();
  return LEVEL_IDS.includes(level) ? level : null;
}

export function createState(level = DEFAULT_LEVEL) {
  return { level: normaliseLevel(level) ?? DEFAULT_LEVEL, place: 'umbral', first: null, done: {}, answers: {}, verdict: {}, arrived: false };
}

const optionsOf = (spot) => FORMS[SPOTS.find((s) => s.id === spot)?.form]?.options ?? 0;
const cleanDone = (list) => [...new Set((Array.isArray(list) ? list : []).filter((k) => SPOT_IDS.includes(k)))];
function cleanAnswers(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const [spot, value] of Object.entries(raw)) if (SPOT_IDS.includes(spot) && Number.isInteger(value) && value >= 0 && value < optionsOf(spot)) out[spot] = value;
  return out;
}

export function restore(raw) {
  const base = createState();
  let data = raw;
  try { if (typeof raw === 'string') data = JSON.parse(raw); } catch { return base; }
  if (!data || typeof data !== 'object') return base;
  const done = {}, answers = {}, verdict = {};
  for (const level of LEVEL_IDS) {
    const list = cleanDone(data.done?.[level]);
    if (list.length) done[level] = list;
    const a = cleanAnswers(data.answers?.[level]);
    if (Object.keys(a).length) answers[level] = a;
    if (VERDICTS.includes(data.verdict?.[level])) verdict[level] = data.verdict[level];
  }
  return {
    level: normaliseLevel(data.level) ?? base.level,
    place: PLACES.includes(data.place) ? data.place : 'umbral',
    first: WORLD_IDS.includes(data.first) ? data.first : null,
    done, answers, verdict, arrived: Boolean(data.arrived),
  };
}
export const serialise = (state) => JSON.stringify(state);

export function setLevel(state, level) {
  const next = normaliseLevel(level);
  return next && next !== state.level ? { ...state, level: next } : state;
}
export const arrive = (state) => (state.arrived ? state : { ...state, arrived: true });
/** Going into a world; the first one chosen is remembered. */
export function goTo(state, place) {
  if (!PLACES.includes(place) || place === state.place) return state;
  const first = state.first ?? (WORLD_IDS.includes(place) ? place : null);
  return { ...state, place, first };
}

export const doneFor = (state, level = state.level) => state.done[level] ?? [];
export const answersFor = (state, level = state.level) => state.answers[level] ?? {};
export const isDone = (state, spot, level = state.level) => doneFor(state, level).includes(spot);
export const worldDone = (state, world, level = state.level) => SPOTS.filter((s) => s.world === world && isDone(state, s.id, level)).length;

/** The answer to a deep question (it can change until the encounter is closed, and after). */
export function answer(state, spot, index) {
  if (!SPOT_IDS.includes(spot) || !Number.isInteger(index) || index < 0 || index >= optionsOf(spot)) return state;
  const a = answersFor(state);
  if (a[spot] === index) return state;
  return { ...state, answers: { ...state.answers, [state.level]: { ...a, [spot]: index } } };
}
export function markDone(state, spot) {
  const list = doneFor(state);
  if (!SPOT_IDS.includes(spot) || list.includes(spot)) return state;
  return { ...state, done: { ...state.done, [state.level]: [...list, spot] } };
}
export function decide(state, verdict) {
  if (!VERDICTS.includes(verdict) || state.verdict[state.level] === verdict) return state;
  return { ...state, verdict: { ...state.verdict, [state.level]: verdict } };
}

export function resetLevel(state) {
  const done = { ...state.done }, answers = { ...state.answers }, verdict = { ...state.verdict };
  delete done[state.level]; delete answers[state.level]; delete verdict[state.level];
  return { ...state, done, answers, verdict, place: 'umbral' };
}

/** The next encounter without doing, in the order of its world, after `spot`; then the other world. */
export function nextSpot(state, spot) {
  const list = doneFor(state);
  const from = Math.max(0, SPOTS.findIndex((s) => s.id === spot));
  const world = SPOTS[from]?.world;
  const order = [...SPOTS.filter((s) => s.world === world), ...SPOTS.filter((s) => s.world !== world)];
  const at = order.findIndex((s) => s.id === spot);
  for (let i = 1; i <= order.length; i++) {
    const item = order[(at + i) % order.length];
    if (!list.includes(item.id)) return item;
  }
  return null;
}

// ---------------------------------------------------------------- account rows

/** The live-class row for one student: progress in values/results, where they were in pos. */
export function toSaved(state) {
  return {
    values: { kind: 'mas-alla', level: state.level, place: state.place, first: state.first, arrived: state.arrived, verdict: state.verdict, answers: state.answers },
    results: { ...state.done },
    pos: { stage: Math.max(0, PLACES.indexOf(state.place)), step: 0 },
  };
}
export function fromSaved(saved) {
  if (!saved || typeof saved !== 'object') return createState();
  const values = saved.values ?? {};
  return restore({ level: values.level, place: values.place, first: values.first, arrived: values.arrived, verdict: values.verdict, answers: values.answers, done: saved.results ?? {} });
}
