// La feria de Villaluz · lesson state without React or WebGL.
//
// Two stores (LESSON-DECISION-001, call D2):
// - per device (localStorage): level, circles done, the chosen route;
// - per group session (sessionStorage): can-do ticks, the scene picks that
//   feed the closing timeline, Busca tries and whether the closing ended.
//   «Nueva clase / nuevo grupo» clears it. No names, no server, no scoring.
import { CIRCLE_IDS } from './layout.mjs';
import { feedbackFor } from './look-contract.mjs';

export const STORAGE_KEY = 'spanishcue:la-feria-de-villaluz:v1';
export const SESSION_KEY = 'spanishcue:la-feria-de-villaluz:session:v1';
export const LEVEL_IDS = ['A2'];
export const DEFAULT_LEVEL = 'A2';
export const TICKS = ['logrado', 'con-ayuda', 'todavia'];
export const TICK_LABEL = { logrado: 'Logrado', 'con-ayuda': 'Con ayuda', todavia: 'Todavía no' };
export const LESSON_ID = 241;

export const normaliseLevel = value => (LEVEL_IDS.includes(String(value ?? '').toUpperCase()) ? String(value).toUpperCase() : null);

// ------------------------------------------------------------------ device state
export function createState(level = DEFAULT_LEVEL) {
  return { level: normaliseLevel(level) ?? DEFAULT_LEVEL, route: 'conversacion', done: {}, scene: null };
}
export const doneFor = (state, level = state.level) => state.done[level] ?? [];

export function openScene(state, id) {
  if (!CIRCLE_IDS.includes(id)) return state;
  return { ...state, scene: { id, pick: null } };
}
export const closeScene = state => ({ ...state, scene: null });

export function markDone(state, id) {
  if (!CIRCLE_IDS.includes(id)) return state;
  const list = doneFor(state);
  return list.includes(id) ? state : { ...state, done: { ...state.done, [state.level]: [...list, id] } };
}

/** Pick one of the three answers of the open scene (it counts as done). */
export function choose(state, index) {
  const open = state.scene;
  if (!open || open.pick !== null || !Number.isInteger(index) || index < 0 || index > 2) return state;
  return { ...markDone(state, open.id), scene: { ...open, pick: index } };
}
export const undo = state => (state.scene && state.scene.pick !== null ? { ...state, scene: { ...state.scene, pick: null } } : state);
export const setRoute = (state, route) => (route === 'conversacion' || route === 'escucha' ? { ...state, route } : state);
export const resetLevel = state => ({ ...state, done: { ...state.done, [state.level]: [] }, scene: null });

export function serialise(state) {
  return JSON.stringify({ level: state.level, route: state.route, done: state.done });
}
export function restore(raw) {
  const base = createState();
  try {
    const data = JSON.parse(raw ?? '');
    if (!data || typeof data !== 'object') return base;
    const done = {};
    for (const level of LEVEL_IDS) {
      const list = Array.isArray(data.done?.[level]) ? data.done[level].filter(x => CIRCLE_IDS.includes(x)) : [];
      if (list.length) done[level] = [...new Set(list)];
    }
    return { ...base, level: normaliseLevel(data.level) ?? base.level, route: data.route === 'escucha' ? 'escucha' : 'conversacion', done };
  } catch {
    return base;
  }
}

// ------------------------------------------------------------------ group session
export function createSession() {
  return { ticks: {}, picks: {}, busca: {}, checks: [], finished: false };
}
export function restoreSession(raw) {
  const base = createSession();
  try {
    const data = JSON.parse(raw ?? '');
    if (!data || typeof data !== 'object') return base;
    const ticks = {};
    for (const [id, value] of Object.entries(data.ticks ?? {})) if (CIRCLE_IDS.includes(id) && TICKS.includes(value)) ticks[id] = value;
    const picks = {};
    for (const [id, value] of Object.entries(data.picks ?? {})) if (CIRCLE_IDS.includes(id) && Number.isInteger(value) && value >= 0 && value <= 2) picks[id] = value;
    const busca = {};
    for (const [id, value] of Object.entries(data.busca ?? {})) if (value && Array.isArray(value.tries)) busca[id] = { tries: value.tries.filter(x => typeof x === 'string').slice(0, 8), solved: Boolean(value.solved) };
    const checks = Array.isArray(data.checks) ? data.checks.filter(Number.isInteger).slice(0, 12) : [];
    return { ticks, picks, busca, checks, finished: Boolean(data.finished) };
  } catch {
    return base;
  }
}
export const serialiseSession = session => JSON.stringify(session);
/** «Nueva clase / nuevo grupo»: everything of the group goes. */
export const resetGroup = () => createSession();

export function tick(session, id, value) {
  if (!CIRCLE_IDS.includes(id)) return session;
  const ticks = { ...session.ticks };
  if (TICKS.includes(value) && ticks[id] !== value) ticks[id] = value; else delete ticks[id];
  return { ...session, ticks };
}
export function recordPick(session, id, index) {
  if (!CIRCLE_IDS.includes(id) || !Number.isInteger(index) || index < 0 || index > 2) return session;
  return { ...session, picks: { ...session.picks, [id]: index } };
}
export function toggleCheck(session, index) {
  const checks = session.checks.includes(index) ? session.checks.filter(i => i !== index) : [...session.checks, index].sort((a, b) => a - b);
  return { ...session, checks };
}
export const finish = session => ({ ...session, finished: true });

/** One Busca pick: the target is shown only after it is picked; a wrong pick
 * gets feedback that names a mismatched feature (AC3). */
export function buscaTry(session, set, figureId, names = {}) {
  const prev = session.busca[set.id] ?? { tries: [], solved: false };
  if (prev.solved || !set.figures.some(f => f.id === figureId)) return { session, correct: prev.solved && figureId === set.target, feedback: null };
  const correct = figureId === set.target;
  const next = { tries: [...prev.tries, figureId], solved: correct };
  return { session: { ...session, busca: { ...session.busca, [set.id]: next } }, correct, feedback: correct ? null : feedbackFor(set, figureId, names) };
}
export const buscaState = (session, setId) => session.busca[setId] ?? { tries: [], solved: false };

/** The group's tally for the recap (AM-7): circles ticked «logrado». */
export function tally(session, ids = CIRCLE_IDS) {
  const ticked = ids.filter(id => session.ticks[id]);
  return { logrado: ticked.filter(id => session.ticks[id] === 'logrado').length, ticked: ticked.length, total: ids.length };
}

// ------------------------------------------------------------------ routes and E1
export const routeCircles = route => (route ?? []).map(step => step.circle).filter(id => CIRCLE_IDS.includes(id));

/** E1 (BOARD-DECISION-001): round(100 × route circles done ÷ route circles);
 * 100 only after «Terminar» in the closing. */
export function routeProgress(route, done, finished) {
  if (finished) return 100;
  const circles = routeCircles(route);
  if (!circles.length) return 0;
  const n = circles.filter(id => done.includes(id)).length;
  return Math.min(99, Math.round((100 * n) / circles.length));
}

/** The closing narrative: what the group chose at each circle, in route
 * order, from this session only (AC9). */
export function timeline(session, scenes, route) {
  const order = [...routeCircles(route), ...CIRCLE_IDS.filter(id => !routeCircles(route).includes(id))];
  return order.filter(id => Number.isInteger(session.picks[id]) && scenes[id]?.options?.[session.picks[id]])
    .map(id => ({ id, title: scenes[id].title, said: scenes[id].options[session.picks[id]].say, end: scenes[id].options[session.picks[id]].end }));
}

// ------------------------------------------------------------------ sound (AC5)
/** Ambience gain: silent under any clip, 0.3 with a card open, 1 otherwise. */
export function ambienceGain({ clip = false, card = false } = {}) {
  if (clip) return 0;
  return card ? 0.3 : 1;
}
/** The world stands still while any task card is open (AC5). */
export const worldPaused = ({ card = false, intro = false, list = false } = {}) => Boolean(card || intro || list);
