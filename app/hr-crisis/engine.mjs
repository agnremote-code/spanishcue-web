// HR Crisis · the lesson state: which tasks are done, what the student wrote,
// her choices, the interview questions she asked and the notebook of
// mistakes. Kept in this browser only; nothing is sent anywhere.
import { emptyStats } from './evaluar.mjs';
import { TASK_IDS } from './misiones.mjs';

export function createState() {
  return { done: [], unlocked: false, answers: {}, picks: {}, asked: {}, stats: emptyStats() };
}

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
export const serialise = (state) => JSON.stringify(state);

export function complete(state, id) {
  return state.done.includes(id) ? state : { ...state, done: [...state.done, id] };
}
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
