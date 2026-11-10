// HR Crisis · the lesson state: which tasks are done, what the student wrote,
// her choices, the interview questions she asked and the notebook of
// mistakes. Kept in this browser only; nothing is sent anywhere.
import { emptyStats } from './evaluar.mjs';
import { TASK_IDS } from './misiones.mjs';

/**
 * @typedef {{ done: string[], unlocked: boolean, answers: Record<string, string>, picks: Record<string, number>, asked: Record<string, string[]>, stats: import('./evaluar.mjs').Stats }} LessonState
 * @returns {LessonState}
 */
export function createState() {
  return { done: [], unlocked: false, answers: {}, picks: {}, asked: {}, stats: emptyStats() };
}

/** @param {string | null} raw @returns {LessonState} */
export function restore(raw) {
  const base = createState();
  if (!raw) return base;
  try {
    const s = JSON.parse(raw);
    return {
      done: Array.isArray(s.done) ? s.done.filter(id => TASK_IDS.includes(id)) : [],
      unlocked: Boolean(s.unlocked),
      answers: s.answers && typeof s.answers === 'object' ? s.answers : {},
      picks: s.picks && typeof s.picks === 'object' ? s.picks : {},
      asked: s.asked && typeof s.asked === 'object' ? s.asked : {},
      stats: s.stats && typeof s.stats === 'object' && s.stats.tags ? { ...emptyStats(), ...s.stats } : emptyStats(),
    };
  } catch { return base; }
}
/** @param {LessonState} state */
export const serialise = (state) => JSON.stringify(state);

/** @param {LessonState} state @param {string} id @returns {LessonState} */
export function complete(state, id) {
  return state.done.includes(id) ? state : { ...state, done: [...state.done, id] };
}
/** @param {LessonState} state @param {string} id @param {{ answer?: string, pick?: number, asked?: string[], stats?: import('./evaluar.mjs').Stats }} patch @returns {LessonState} */
export function remember(state, id, patch) {
  return {
    ...state,
    ...(patch.answer != null ? { answers: { ...state.answers, [id]: patch.answer } } : {}),
    ...(patch.pick != null ? { picks: { ...state.picks, [id]: patch.pick } } : {}),
    ...(patch.asked ? { asked: { ...state.asked, [id]: patch.asked } } : {}),
    ...(patch.stats ? { stats: patch.stats } : {}),
  };
}
export const progress = (state) => state.done.length;
