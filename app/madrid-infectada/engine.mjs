// Madrid infectada · progress without React or WebGL: the level, the zone
// the student is in, the circles finished at each level (keys zone/spot),
// whether the arrival was already seen and whether the mission was closed.
// «Por mi cuenta» keeps it in the browser; «Con profesor» saves it per
// student in the teacher's account through /api/live-class (same row shape
// as the other 3D worlds: values, results, pos). The survivors met in the
// street are kept with the same list, as calle/<survivor>.
import { LEVEL_IDS, SPOTS, ZONES } from './story.mjs';
import { ENCOUNTER_IDS } from './city.mjs';

export const STORAGE_KEY = 'spanishcue:madrid-infectada:v1';
export const DEFAULT_LEVEL = 'A2';
export const ZONE_IDS = ZONES.map((z) => z.id);
export const spotKey = (zone, spot) => `${zone}/${spot}`;
export const CIRCLE_KEYS = SPOTS.map((s) => spotKey(s.zone, s.id));
export const STREET_KEYS = ENCOUNTER_IDS.map((id) => `calle/${id}`);
export const ALL_KEYS = [...CIRCLE_KEYS, ...STREET_KEYS];

export function normaliseLevel(value) {
  const level = String(value ?? '').toUpperCase();
  return LEVEL_IDS.includes(level) ? level : null;
}

export function createState(level = DEFAULT_LEVEL) {
  return { level: normaliseLevel(level) ?? DEFAULT_LEVEL, zone: 'sol', done: {}, arrived: false, ended: {} };
}

const clean = (list) => [...new Set((Array.isArray(list) ? list : []).filter((k) => ALL_KEYS.includes(k)))];

export function restore(raw) {
  const base = createState();
  let data = raw;
  try { if (typeof raw === 'string') data = JSON.parse(raw); } catch { return base; }
  if (!data || typeof data !== 'object') return base;
  const done = {};
  const ended = {};
  for (const level of LEVEL_IDS) {
    const list = clean(data.done?.[level]);
    if (list.length) done[level] = list;
    if (data.ended?.[level] === true) ended[level] = true;
  }
  return {
    level: normaliseLevel(data.level) ?? base.level,
    zone: ZONE_IDS.includes(data.zone) ? data.zone : 'sol',
    done, ended, arrived: Boolean(data.arrived),
  };
}
export const serialise = (state) => JSON.stringify(state);

export function setLevel(state, level) {
  const next = normaliseLevel(level);
  return next && next !== state.level ? { ...state, level: next } : state;
}
export const setZone = (state, zone) => (ZONE_IDS.includes(zone) && zone !== state.zone ? { ...state, zone } : state);
export const arrive = (state) => (state.arrived ? state : { ...state, arrived: true });

export const doneFor = (state, level = state.level) => state.done[level] ?? [];
export const isDone = (state, zone, spot, level = state.level) => doneFor(state, level).includes(spotKey(zone, spot));

/** The circles of the story and the survivors of the street, counted apart. */
export const circlesDone = (state, level = state.level) => doneFor(state, level).filter((k) => CIRCLE_KEYS.includes(k));
export const streetDone = (state, level = state.level) => doneFor(state, level).filter((k) => STREET_KEYS.includes(k));

export function markDone(state, zone, spot) {
  const key = spotKey(zone, spot);
  const list = doneFor(state);
  if (!ALL_KEYS.includes(key) || list.includes(key)) return state;
  return { ...state, done: { ...state.done, [state.level]: [...list, key] } };
}
/** The boat left: the mission of this level is closed (it can be replayed). */
export const endMission = (state) => (state.ended[state.level] ? state : { ...state, ended: { ...state.ended, [state.level]: true } });

export function resetLevel(state) {
  const done = { ...state.done };
  const ended = { ...state.ended };
  delete done[state.level];
  delete ended[state.level];
  return { ...state, done, ended, zone: 'sol' };
}

/** Finished circles per zone, and the zones with both circles finished. */
export function zoneCount(state) {
  const list = doneFor(state);
  return Object.fromEntries(ZONE_IDS.map((z) => [z, SPOTS.filter((s) => s.zone === z && list.includes(spotKey(z, s.id))).length]));
}
export const clearedZones = (state) => Object.entries(zoneCount(state)).filter(([, n]) => n >= 2).map(([z]) => z);

/** The next circle without doing, in the order of the story, after `zone/spot`. */
export function nextSpot(state, zone, spot) {
  const list = doneFor(state);
  const order = SPOTS.map((s) => ({ zone: s.zone, spot: s.id }));
  const from = Math.max(0, order.findIndex((o) => o.zone === zone && o.spot === spot));
  for (let i = 1; i <= order.length; i++) {
    const item = order[(from + i) % order.length];
    if (!list.includes(spotKey(item.zone, item.spot))) return item;
  }
  return null;
}

// ---------------------------------------------------------------- account rows

/** The live-class row for one student: progress in values/results, where they were in pos. */
export function toSaved(state) {
  return {
    values: { kind: 'madrid-infectada', level: state.level, zone: state.zone, arrived: state.arrived, ended: state.ended },
    results: { ...state.done },
    pos: { stage: Math.max(0, ZONE_IDS.indexOf(state.zone)), step: 0 },
  };
}
export function fromSaved(saved) {
  if (!saved || typeof saved !== 'object') return createState();
  const values = saved.values ?? {};
  return restore({ level: values.level, zone: values.zone, arrived: values.arrived, ended: values.ended, done: saved.results ?? {} });
}
