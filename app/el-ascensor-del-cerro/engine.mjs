// El ascensor del cerro · lesson state without React or WebGL (the same
// rules as La feria de Villaluz, minus the feria's find-a-person activity).
//
// Two stores:
// - per device (localStorage): level, circles done, the chosen route;
// - per group session (sessionStorage): can-do ticks, the scene picks that
//   feed the closing timeline and whether the closing ended.
//   «Nueva clase / nuevo grupo» clears it. No names, no server, no scoring.
import { CIRCLE_IDS } from './layout.mjs';

export const STORAGE_KEY = 'spanishcue:el-ascensor-del-cerro:v1';
export const SESSION_KEY = 'spanishcue:el-ascensor-del-cerro:session:v1';
export const LEVEL_IDS = ['B2'];
export const DEFAULT_LEVEL = 'B2';
export const TICKS = ['logrado', 'con-ayuda', 'todavia'];
export const TICK_LABEL = { logrado: 'Logrado', 'con-ayuda': 'Con ayuda', todavia: 'Todavía no' };
// The catalog id of this lesson (app/lesson-catalog.ts). E1 progress uses it.
export const LESSON_ID = 246;

export const normaliseLevel = value => (LEVEL_IDS.includes(String(value ?? '').toUpperCase()) ? String(value).toUpperCase() : null);

// ------------------------------------------------------------------ device state
export function createState(level = DEFAULT_LEVEL) {
  return { level: normaliseLevel(level) ?? DEFAULT_LEVEL, route: 'conversacion', done: {}, scene: null };
}
export const doneFor = (state, level = state.level) => state.done[level] ?? [];

export function openScene(state, id) {
  if (!CIRCLE_IDS.includes(id)) return state;
  return { ...state, scene: { id, beats: {} } };
}
export const closeScene = state => ({ ...state, scene: null });

export function markDone(state, id) {
  if (!CIRCLE_IDS.includes(id)) return state;
  const list = doneFor(state);
  return list.includes(id) ? state : { ...state, done: { ...state.done, [state.level]: [...list, id] } };
}

// ------------------------------------------------------------------ beats
// A circle is a sequence of labelled beats (N1):
// - contrast: one correct option; a wrong pick shows its feedback and the class
//   tries again; the right pick shows its feedback and `after`;
// - stimulus with options: the class picks one (no right answer);
// - stimulus with frames: open answer, the teacher moves on.
const beatState = (scene, beat) => scene?.beats?.[beat.id] ?? { tries: [], pick: null, seen: false };

// Callers may pass the group session as a third argument (the feria's
// signature); no beat here depends on it.
export function beatDone(scene, beat) {
  const b = beatState(scene, beat);
  if (beat.kind === 'contrast') return b.tries.some(i => beat.options[i]?.correct);
  if (beat.options) return b.pick !== null;
  return b.seen;
}

/** Index of the first beat not done (beats.length when the circle is done). */
export function currentBeat(scene, circle, session) {
  const beats = circle?.beats ?? [];
  const i = beats.findIndex(beat => !beatDone(scene, beat, session));
  return i < 0 ? beats.length : i;
}

/** Answer a beat of the open scene: a try on a contrast, a pick on a
 * stimulus, "seen" on a frame stimulus. Done beats don't change. */
export function answerBeat(state, beat, index = 0) {
  const scene = state.scene;
  if (!scene) return state;
  const b = beatState(scene, beat);
  let next = b;
  if (beat.kind === 'contrast') {
    if (beatDone(scene, beat) || !beat.options?.[index] || b.tries.includes(index)) return state;
    next = { ...b, tries: [...b.tries, index] };
  } else if (beat.kind === 'stimulus' && beat.options) {
    if (b.pick !== null || !beat.options[index]) return state;
    next = { ...b, pick: index };
  } else if (beat.kind === 'stimulus') {
    next = { ...b, seen: true };
  } else return state;
  return { ...state, scene: { ...scene, beats: { ...scene.beats, [beat.id]: next } } };
}

/** Feedback of the last try on a contrast beat: { text, correct }. */
export function lastFeedback(scene, beat) {
  const b = beatState(scene, beat);
  const i = b.tries.at(-1);
  if (i === undefined) return null;
  const option = beat.options[i];
  return { text: option.feedback, correct: Boolean(option.correct), feature: option.feature ?? null };
}

/** The pick of the circle's first stimulus with options (it feeds the
 * closing timeline). */
export function timelinePick(scene, circle) {
  const beat = (circle?.beats ?? []).find(b => b.kind === 'stimulus' && b.options);
  if (!beat) return null;
  const pick = beatState(scene, beat).pick;
  return pick === null ? null : pick;
}

/** After any change to the open scene or the group session: a circle whose
 * last beat is done counts as done (E1), and the pick of its first stimulus
 * feeds the closing timeline. Pure, so the UI applies it in the event that
 * caused the change instead of in an effect. */
export function settleScene(state, session, circles) {
  const id = state.scene?.id;
  const circle = id ? circles?.[id] : undefined;
  if (!id || !circle || circle.status) return { state, session };
  const next = currentBeat(state.scene, circle, session) >= (circle.beats?.length ?? 0) ? markDone(state, id) : state;
  const pick = timelinePick(state.scene, circle);
  const known = pick !== null && session.picks[id] === pick && session.order.includes(id);
  return { state: next, session: pick === null || known ? session : recordPick(session, id, pick) };
}

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
  return { ticks: {}, picks: {}, order: [], checks: [], finished: false };
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
    const order = Array.isArray(data.order) ? [...new Set(data.order.filter(id => picks[id] !== undefined))] : Object.keys(picks);
    const checks = Array.isArray(data.checks) ? data.checks.filter(x => typeof x === 'string').slice(0, 12) : [];
    return { ticks, picks, order, checks, finished: Boolean(data.finished) };
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
  return { ...session, picks: { ...session.picks, [id]: index }, order: session.order.includes(id) ? session.order : [...session.order, id] };
}
export function toggleCheck(session, id) {
  const checks = session.checks.includes(id) ? session.checks.filter(i => i !== id) : [...session.checks, id];
  return { ...session, checks };
}
export const finish = session => ({ ...session, finished: true });

/** The group's tally for the recap (AM-7): circles ticked «logrado». */
export function tally(session, ids = CIRCLE_IDS) {
  const ticked = ids.filter(id => session.ticks[id]);
  return { logrado: ticked.filter(id => session.ticks[id] === 'logrado').length, ticked: ticked.length, total: ids.length };
}

// ------------------------------------------------------------------ routes and E1
/** The circle steps of a route (warm-up steps carry no circle). A `oneOf`
 * step is done when any of its circles is. */
export const routeSteps = route => (route?.steps ?? []).filter(step => step.circle || step.oneOf);
export const routeCircles = route => routeSteps(route).flatMap(step => (step.oneOf ? step.oneOf : [step.circle])).filter(id => CIRCLE_IDS.includes(id));
export const stepDone = (step, done) => (step.oneOf ?? [step.circle]).some(id => done.includes(id));

/** E1 (BOARD-DECISION-001): round(100 × route circles done ÷ route circles);
 * 100 only after «Terminar» in the closing. */
export function routeProgress(route, done, finished) {
  if (finished) return 100;
  const steps = routeSteps(route);
  if (!steps.length) return 0;
  const n = steps.filter(step => stepDone(step, done)).length;
  return Math.min(99, Math.round((100 * n) / steps.length));
}

/** The closing narrative: one sentence per circle the group played in this
 * session, in the order they played it (sessionStorage only). */
export function timeline(session, circles) {
  return (session.order ?? []).filter(id => Number.isInteger(session.picks[id]) && circles[id]?.timeline?.[session.picks[id]])
    .map(id => ({ id, text: circles[id].timeline[session.picks[id]] }));
}

// ------------------------------------------------------------------ sound
/** Ambience gain: silent under any clip, 0.3 with a card open, 1 otherwise. */
export function ambienceGain({ clip = false, card = false } = {}) {
  if (clip) return 0;
  return card ? 0.3 : 1;
}
/** The world stands still while any task card is open. */
export const worldPaused = ({ card = false, intro = false, list = false } = {}) => Boolean(card || intro || list);
