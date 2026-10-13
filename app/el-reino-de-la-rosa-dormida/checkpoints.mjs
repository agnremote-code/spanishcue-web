import { CAMPAIGN, QUESTS, createGame, reduceGame, restoreGame, conversationLength, hasTalked } from './engine.mjs';

/**
 * Canonical start points for a class. Each one replays the first `done` steps
 * of the campaign through the same reducer the game uses, so the inventory,
 * spells, open gates and active mission are exactly those of a real playthrough.
 * Positions are verified walkable and on the right side of every gate
 * (tests/reino-world.test.mjs). `open` starts that conversation from its first line.
 */
export const START_POINTS = [
  { id: 'c1-inicio', chapter: 1, label: 'Llegar a la Colina del Amanecer', done: 0, position: { x: 0, y: 0, z: 24 } },
  { id: 'c1-nox', chapter: 1, label: 'Conversar con Nox', done: 0, position: { x: 0, y: 0, z: 20 }, open: 'nox' },
  { id: 'c2-aldea', chapter: 2, label: 'Llegar a la aldea', done: 1, position: { x: 6, y: 0, z: 14 } },
  { id: 'c2-ines', chapter: 2, label: 'Conversar con Inés', done: 1, position: { x: 12, y: 0, z: 12 }, open: 'ines' },
  { id: 'c2-bruno', chapter: 2, label: 'Conversar con Bruno', done: 2, position: { x: 18, y: 0, z: 2 }, open: 'bruno' },
  { id: 'c2-molino', chapter: 2, label: 'Reparar el molino', done: 3, position: { x: 20, y: 0, z: 9 } },
  { id: 'c2-llave', chapter: 2, label: 'Recoger la llave', done: 4, position: { x: 23, y: 0, z: 8 } },
  { id: 'c3-bosque', chapter: 3, label: 'Continuar hacia el bosque', done: 5, position: { x: -1, y: 0, z: 2 } },
  { id: 'c3-liora', chapter: 3, label: 'Conversar con Liora', done: 5, position: { x: -8, y: 0, z: 2 }, open: 'liora' },
  { id: 'c3-santuario', chapter: 3, label: 'Iluminar el santuario', done: 6, position: { x: -7, y: 0, z: -4 } },
  { id: 'c4-puente', chapter: 4, label: 'Llegar al puente', done: 7, position: { x: 0, y: 0, z: -34 } },
  { id: 'c4-aldren', chapter: 4, label: 'Conversar con Sir Aldren', done: 7, position: { x: 0, y: 0, z: -41 }, open: 'aldren' },
  { id: 'c5-jardines', chapter: 5, label: 'Entrar a los jardines', done: 8, position: { x: -1, y: 0, z: -45 } },
  { id: 'c5-celina', chapter: 5, label: 'Conversar con Celina', done: 8, position: { x: -1, y: 0, z: -45 }, open: 'celina' },
  { id: 'c5-espinas', chapter: 5, label: 'Transformar las espinas', done: 9, position: { x: 0, y: 0, z: -45 } },
  { id: 'c5-rosa', chapter: 5, label: 'Recoger la rosa encantada', done: 10, position: { x: -7, y: 0, z: -58 } },
  { id: 'c6-castillo', chapter: 6, label: 'Entrar al castillo', done: 11, position: { x: 0, y: 0, z: -82 } },
  { id: 'c6-biblioteca', chapter: 6, label: 'Explorar la biblioteca y recoger el pergamino', done: 11, position: { x: -13, y: 0, z: -88 } },
  { id: 'c6-baltasar', chapter: 6, label: 'Hablar con Baltasar', done: 12, position: { x: -12, y: 0, z: -84 }, open: 'baltasar' },
  { id: 'c6-teobaldo', chapter: 6, label: 'Hablar con Teobaldo', done: 13, position: { x: 8, y: 0, z: -76 }, open: 'teobaldo' },
  { id: 'c7-subida', chapter: 7, label: 'Subir desde el castillo hacia el dragón', done: 14, position: { x: 9, y: 0, z: -87 } },
  { id: 'c7-escudo', chapter: 7, label: 'Protegerte con Aurora en la terraza', done: 14, position: { x: 11.5, y: 8, z: -105 } },
  { id: 'c7-brum', chapter: 7, label: 'Conversar con Brum', done: 15, position: { x: -8, y: 8, z: -109 }, open: 'brum' },
  { id: 'c7-cristal', chapter: 7, label: 'Recoger el cristal del amanecer', done: 16, position: { x: -3, y: 8, z: -112 } },
  { id: 'c8-tejedora', chapter: 8, label: 'Conversar con la Tejedora', done: 17, position: { x: 10, y: 8, z: -117 }, open: 'tejedora' },
  { id: 'c8-ritual', chapter: 8, label: 'Completar el ritual en el altar', done: 18, position: { x: 10, y: 8, z: -122 } },
  { id: 'c8-elara', chapter: 8, label: 'Despertar a Elara', done: 21, position: { x: 11, y: 8, z: -135 }, open: 'elara' },
];

export const CHAPTERS = QUESTS.map(quest => ({ ...quest, points: START_POINTS.filter(point => point.chapter === quest.number) }));

function completeTalk(state, npc) {
  for (let guard = 0; guard < conversationLength(npc) + 2 && (state.dialogue[npc] ?? 0) < conversationLength(npc); guard++) state = reduceGame(state, { type: 'say', npc });
  return { ...state, talking: null };
}

/** Applies one canonical campaign step; throws when the step would be impossible. */
export function applyCampaignStep(state, [kind, id, target]) {
  const next = kind === 'talk' ? completeTalk(state, id)
    : kind === 'collect' ? reduceGame(state, { type: 'collect', item: id })
      : reduceGame(state, { type: 'cast', spell: id, target });
  if (next === state || (kind === 'talk' && !hasTalked(next, id))) throw new Error(`Paso imposible: ${kind} ${id}`);
  return next;
}

/** Builds a valid campaign state for a start point at the requested level. */
export function stateForStartPoint(pointId, level = 'A1') {
  const point = START_POINTS.find(entry => entry.id === pointId);
  if (!point) return null;
  let state = createGame(level);
  for (const step of CAMPAIGN.slice(0, point.done)) state = applyCampaignStep(state, step);
  state = reduceGame(state, { type: 'checkpoint', position: point.position });
  if (point.open) state = reduceGame(state, { type: 'open', npc: point.open });
  // The result must survive the same validation as any saved game.
  const verified = restoreGame(JSON.parse(JSON.stringify(state)));
  if (JSON.stringify(verified) !== JSON.stringify(state)) throw new Error(`Punto de partida inválido: ${pointId}`);
  return state;
}

/** The start point whose campaign progress matches a state best (for summaries). */
export function startPointFor(state) {
  let best = START_POINTS[0];
  for (const point of START_POINTS) {
    let replay = createGame(state.level);
    try { for (const step of CAMPAIGN.slice(0, point.done)) replay = applyCampaignStep(replay, step); } catch { continue; }
    const reached = replay.completed.length <= state.completed.length && replay.inventory.every(item => state.inventory.includes(item)) && Object.entries(replay.flags).every(([flag, on]) => !on || state.flags[flag]) && replay.spells.every(spell => state.spells.includes(spell));
    if (reached) best = point;
  }
  return best;
}
