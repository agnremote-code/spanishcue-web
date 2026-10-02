// Noche Abierta · one world, six levels.
//
// The world, the places, the mechanics and every id are shared. B1 is the
// base content (content.mjs); each other level is a patch with the same shape
// that only changes what the learner reads and has to do. `contentFor(level)`
// returns the merged bundle the engine and the UI use.
//
// Patch shape:
//   { arrival, locations: { [placeId]: { ...place, activities: { [activityId]: {...} } } },
//     events: { [eventId]: {...} }, final, routePlan? }
// Merge rules: objects merge key by key; arrays of objects with an `id` merge
// by id; other arrays of objects merge by position; arrays of strings and
// plain strings replace.

import * as BASE from "./content.mjs";
import A1 from "./levels/a1.mjs";
import A2 from "./levels/a2.mjs";
import B2 from "./levels/b2.mjs";
import C1 from "./levels/c1.mjs";
import C2 from "./levels/c2.mjs";

export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const DEFAULT_LEVEL = "B1";
export const PATCHES = { A1, A2, B1: {}, B2, C1, C2 };

// What each level asks of the learner, shown on the selector and to the teacher.
export const LEVEL_INFO = {
  A1: { name: "Primeros pasos", demand: "Frases cortas en presente: pedir, elegir, decir qué hay y qué querés." },
  A2: { name: "Situaciones de todos los días", demand: "Contar lo que pasó, hacer planes y dar razones simples." },
  B1: { name: "Resolver y explicar", demand: "Narrar, justificar, comparar opciones y negociar." },
  B2: { name: "Argumentar con matices", demand: "Ventajas y desventajas, hipótesis, cortesía y desacuerdo." },
  C1: { name: "Leer entre líneas", demand: "Registro, intenciones, inferencias y reformulación." },
  C2: { name: "Precisión y subtexto", demand: "Ironía, implícitos, humor y diferencias mínimas de tono." },
};

export function isLevel(value) {
  return LEVELS.includes(value);
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function merge(base, patch) {
  if (patch === undefined) return base;
  if (Array.isArray(base) && Array.isArray(patch)) {
    if (base.every(isObject) && base.length && base.some((item) => "id" in item)) {
      return base.map((item) => {
        const match = patch.find((other) => other?.id === item.id);
        return match ? merge(item, match) : item;
      });
    }
    if (base.every(isObject) && base.length) return base.map((item, i) => merge(item, patch[i]));
    return patch;
  }
  if (Array.isArray(base) && isObject(patch)) {
    // A keyed patch for an array of things with ids (places, activities, events).
    return base.map((item) => (item && item.id in patch ? merge(item, patch[item.id]) : item));
  }
  if (isObject(base) && isObject(patch)) {
    const out = { ...base };
    for (const key of Object.keys(patch)) out[key] = key in base ? merge(base[key], patch[key]) : patch[key];
    return out;
  }
  return patch;
}

const cache = new Map();
export function contentFor(level = DEFAULT_LEVEL) {
  const key = isLevel(level) ? level : DEFAULT_LEVEL;
  if (cache.has(key)) return cache.get(key);
  const patch = PATCHES[key];
  const bundle = Object.freeze({
    level: key,
    ARRIVAL: merge(BASE.ARRIVAL, patch.arrival),
    MECHANICS: BASE.MECHANICS,
    LOCATIONS: key === "B1" ? BASE.LOCATIONS : merge(BASE.LOCATIONS, patch.locations).map(location => ({ ...location, activities: location.activities.map(activity => ({ ...activity, lessonLevel: key })) })),
    CITY_EVENTS: merge(BASE.CITY_EVENTS, patch.events),
    FINAL: merge(BASE.FINAL, patch.final),
    TEACHER_MOVES: merge(BASE.TEACHER_MOVES, patch.teacherMoves),
    ROUTE_PLAN: merge(BASE.ROUTE_PLAN, patch.routePlan),
  });
  cache.set(key, bundle);
  return bundle;
}

// Keys that name things rather than ask for language: they may stay as in B1.
const SHARED_KEYS = new Set(["lessonLevel", "id", "name", "short", "type", "title", "object", "year", "who", "from", "time", "kicker", "facts", "mechanic", "more", "minutes", "affects", "hub"]);

// Every learner-facing string in B1 that a level leaves untouched. Used by the
// tests (and by whoever writes a level) to make sure a level really rewrites
// the night instead of falling back to B1 text.
export function untouched(level) {
  const leveled = contentFor(level);
  const base = contentFor(DEFAULT_LEVEL);
  const out = [];
  const walk = (a, b, path) => {
    if (typeof a === "string") { if (a === b) out.push(path); return; }
    if (Array.isArray(a)) {
      if (a.every((item) => typeof item === "string")) { if (JSON.stringify(a) === JSON.stringify(b)) out.push(path); return; }
      a.forEach((item, i) => walk(item, b?.[i], `${path}[${item?.id ?? i}]`));
      return;
    }
    if (isObject(a)) for (const key of Object.keys(a)) if (!SHARED_KEYS.has(key)) walk(a[key], b?.[key], path ? `${path}.${key}` : key);
  };
  for (const key of ["ARRIVAL", "LOCATIONS", "CITY_EVENTS", "FINAL"]) walk(base[key], leveled[key], key);
  return out;
}
