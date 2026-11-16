// SpanishCue · Jugar: pure progress maths for the student hub. Every world
// already saves its own game in the browser; the hub reads those saves (it
// never writes them) and adds one small save of its own: the traveller's name
// and when each world was last opened.

import { HUB_WORLDS } from './worlds.mjs';

const isList = (value) => Array.isArray(value) && value.every((item) => typeof item === 'string');
const unique = (list) => [...new Set(list)].length;

/**
 * Scenes finished in one world, from that world's own save. With several
 * levels played, the best level counts: replaying a world at B1 after A1 is
 * practice, not twice the world.
 * @param {string | null | undefined} raw @param {'levels' | 'list'} shape
 */
export function scenesDone(raw, shape) {
  if (!raw) return 0;
  let data;
  try { data = JSON.parse(raw); } catch { return 0; }
  const done = data && typeof data === 'object' ? data.done : null;
  if (shape === 'list') return isList(done) ? unique(done) : 0;
  if (!done || typeof done !== 'object' || Array.isArray(done)) return 0;
  return Object.values(done).reduce((best, list) => (isList(list) ? Math.max(best, unique(list)) : best), 0);
}

/** The hub's own save. */
export function createHub() {
  return { name: '', visits: {} };
}

export function restoreHub(raw) {
  const base = createHub();
  if (!raw) return base;
  let data;
  try { data = JSON.parse(raw); } catch { return base; }
  if (!data || typeof data !== 'object') return base;
  const visits = {};
  const known = new Set(HUB_WORLDS.map((world) => String(world.id)));
  if (data.visits && typeof data.visits === 'object') {
    for (const [id, at] of Object.entries(data.visits)) if (known.has(id) && Number.isFinite(at) && at > 0) visits[id] = at;
  }
  return { name: cleanName(data.name), visits };
}

export const serialiseHub = (hub) => JSON.stringify({ name: hub.name, visits: hub.visits });

export function cleanName(value) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 24) : '';
}

export function visit(hub, id, now = Date.now()) {
  return { ...hub, visits: { ...hub.visits, [id]: now } };
}

/**
 * One world as the hub shows it.
 * @param {import('./worlds.mjs').HubWorld} world
 * @param {(key: string) => string | null} read  reads a browser save
 * @param {{ visits: Record<string, number> }} hub
 */
export function worldStatus(world, read, hub) {
  const done = world.save ? scenesDone(read(world.save.key), world.save.shape) : 0;
  const total = world.total;
  const shown = total ? Math.min(done, total) : done;
  const complete = Boolean(total) && shown >= total;
  const visitedAt = hub.visits[world.id] ?? 0;
  const started = shown > 0 || visitedAt > 0;
  return { id: world.id, done: shown, total, complete, started, visitedAt, state: complete ? 'completo' : started ? 'en-curso' : 'nuevo' };
}

/** Passport ranks, by scenes lived. No coins, no ranking against others. */
export const RANKS = [
  { id: 'turista', from: 0, es: 'Turista', en: 'Tourist' },
  { id: 'viajero', from: 5, es: 'Viajero', en: 'Traveller' },
  { id: 'explorador', from: 25, es: 'Explorador', en: 'Explorer' },
  { id: 'residente', from: 75, es: 'Residente', en: 'Resident' },
  { id: 'local', from: 150, es: 'Local', en: 'Local' },
];

export function rankFor(scenes) {
  let index = 0;
  RANKS.forEach((rank, i) => { if (scenes >= rank.from) index = i; });
  const next = RANKS[index + 1] ?? null;
  return { rank: RANKS[index], next, toNext: next ? next.from - scenes : 0 };
}

/** Milestones written in the passport. Each one is a fact about real play. */
export const MILESTONES = [
  { id: 'primera-escena', es: ['Primera escena', 'Terminaste tu primera escena en español.'], en: ['First scene', 'You finished your first scene in Spanish.'], met: (s) => s.scenes >= 1 },
  { id: 'diez-escenas', es: ['Diez escenas', 'Diez situaciones resueltas en español.'], en: ['Ten scenes', 'Ten situations solved in Spanish.'], met: (s) => s.scenes >= 10 },
  { id: 'tres-mundos', es: ['Tres mundos', 'Entraste en tres mundos distintos.'], en: ['Three worlds', 'You stepped into three different worlds.'], met: (s) => s.started >= 3 },
  { id: 'dos-paises', es: ['Dos países', 'Viajaste por dos países.'], en: ['Two countries', 'You travelled through two countries.'], met: (s) => s.countries >= 2 },
  { id: 'mundo-completo', es: ['Un mundo entero', 'Terminaste todas las escenas de un mundo.'], en: ['A whole world', 'You finished every scene of one world.'], met: (s) => s.complete >= 1 },
  { id: 'cincuenta-escenas', es: ['Cincuenta escenas', 'Cincuenta escenas vividas.'], en: ['Fifty scenes', 'Fifty scenes lived.'], met: (s) => s.scenes >= 50 },
  { id: 'tres-completos', es: ['Tres mundos enteros', 'Tres mundos terminados de principio a fin.'], en: ['Three whole worlds', 'Three worlds finished from start to end.'], met: (s) => s.complete >= 3 },
];

/** The whole passport from the browser saves. */
export function passport(read, hub, worlds = HUB_WORLDS) {
  const statuses = worlds.map((world) => worldStatus(world, read, hub));
  const kindOf = new Map(worlds.map((world) => [world.id, world.kind]));
  const summary = {
    scenes: statuses.reduce((sum, status) => sum + status.done, 0),
    started: statuses.filter((status) => status.started).length,
    complete: statuses.filter((status) => status.complete).length,
    countries: statuses.filter((status) => status.started && kindOf.get(status.id) === 'pais').length,
  };
  const last = statuses.filter((status) => status.visitedAt > 0 && !status.complete).sort((a, b) => b.visitedAt - a.visitedAt)[0] ?? null;
  return {
    statuses,
    summary,
    ...rankFor(summary.scenes),
    milestones: MILESTONES.map((milestone) => ({ id: milestone.id, es: milestone.es, en: milestone.en, met: milestone.met(summary) })),
    continueId: last ? last.id : null,
  };
}
