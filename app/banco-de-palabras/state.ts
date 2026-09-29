import { wordBank, type TopicId, type WordCard, type WordKind } from "./data";
export type Filters = { topic: TopicId | "todos"; kind: WordKind | "todos"; query: string; savedOnly: boolean };
const normalize = (value: string) => value.normalize("NFC").toLocaleLowerCase("es").trim();
export function filterCards(bank: WordCard[], filters: Filters, saved: number[]) {
  const query = normalize(filters.query);
  return bank.filter(card => (filters.topic === "todos" || card.topic === filters.topic)
    && (filters.kind === "todos" || card.kind === filters.kind)
    && (!filters.savedOnly || saved.includes(card.id))
    && (!query || [card.word, card.translation, card.definition, card.example].some(value => normalize(value).includes(query))));
}
export const selectedPool = (visible: WordCard[], ids: number[]) => visible.filter(card => ids.includes(card.id));
export type RecallStep = { id: number; phase: "recall" | "context" } | { phase: "interlude"; id?: never };
export type RecallState = { queue: RecallStep[]; cursor: number; revealed: boolean; hint: boolean; assisted: boolean; records: { id: number; phase: "recall" | "context"; outcome: "independent" | "supported" }[] };
function separateRepeats(queue: RecallStep[]) {
  return queue.flatMap((step, i): RecallStep[] => i > 0 && step.id && queue[i - 1].id === step.id ? [{ phase: "interlude" }, step] : [step]);
}
export function initialRecall(ids: number[]): RecallState {
  const valid = [...new Set(ids)].filter(id => wordBank.some(card => card.id === id));
  return { queue: separateRepeats([...valid.map(id => ({ id, phase: "recall" as const })), ...valid.map(id => ({ id, phase: "context" as const }))]), cursor: 0, revealed: false, hint: false, assisted: false, records: [] };
}
export type RecallAction = { type: "reveal" | "hint" | "retry" | "interlude" } | { type: "assess"; outcome: "independent" | "supported" };
export function recallAction(state: RecallState, action: RecallAction): RecallState {
  const step = state.queue[state.cursor];
  if (!step) return state;
  if (step.phase === "interlude") return action.type === "interlude" ? { ...state, cursor: state.cursor + 1, revealed: false, hint: false, assisted: false } : state;
  if (action.type === "hint") return { ...state, hint: true, assisted: true };
  if (action.type === "reveal") return { ...state, revealed: true, assisted: true };
  if (action.type === "retry") return { ...state, revealed: false, hint: false };
  if (action.type !== "assess") return state;
  const outcome = state.assisted ? "supported" : action.outcome;
  // Supported responses get another opportunity after the existing work. If the
  // remaining pool contains only this item, a spoken task separates the attempts.
  const queue = outcome === "supported" ? separateRepeats([...state.queue, step]) : state.queue;
  return { queue, cursor: state.cursor + 1, revealed: false, hint: false, assisted: false, records: [...state.records, { id: step.id, phase: step.phase, outcome }] };
}
export type MatchTile = { key: string; id: number; side: "word" | "meaning" };
export const matchRound = (cards: WordCard[], round: number): MatchTile[] => {
  const batch = cards.slice((round * 5) % Math.max(cards.length, 1), (round * 5) % Math.max(cards.length, 1) + 5);
  return batch.flatMap(card => [{ key: `word-${card.id}`, id: card.id, side: "word" as const }, { key: `meaning-${card.id}`, id: card.id, side: "meaning" as const }]);
};
export type MatchState = { selected: string | null; matched: number[]; error: boolean };
export const initialMatch = (): MatchState => ({ selected: null, matched: [], error: false });
export function matchAction(state: MatchState, tile: MatchTile, tiles: MatchTile[]): MatchState {
  if (!tiles.some(item => item.key === tile.key) || state.matched.includes(tile.id)) return state;
  if (tile.key === state.selected) return { ...state, selected: null, error: false };
  const first = tiles.find(item => item.key === state.selected);
  if (!first || first.side === tile.side) return { ...state, selected: tile.key, error: false };
  if (first.id === tile.id) return { selected: null, matched: [...state.matched, tile.id], error: false };
  return { ...state, selected: null, error: true };
}
export const SAVED_KEY = "spanishcue.wordbank.saved.v1";
const validIds = (ids: unknown[]) => [...new Set(ids.filter((id): id is number => typeof id === "number" && wordBank.some(card => card.id === id)))];
export function readSaved(storage: Pick<Storage, "getItem">): { ids: number[]; status: "ok" | "invalid" | "unavailable" } {
  let raw: string | null;
  try { raw = storage.getItem(SAVED_KEY); } catch { return { ids: [], status: "unavailable" }; }
  if (!raw) return { ids: [], status: "ok" };
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1 || !Array.isArray(parsed.ids)) return { ids: [], status: "invalid" };
    return { ids: validIds(parsed.ids), status: "ok" };
  } catch { return { ids: [], status: "invalid" }; }
}
export function writeSaved(storage: Pick<Storage, "setItem">, ids: number[]) {
  try { storage.setItem(SAVED_KEY, JSON.stringify({ version: 1, ids: validIds(ids) })); return true; } catch { return false; }
}
