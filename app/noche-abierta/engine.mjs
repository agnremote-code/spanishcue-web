// Noche Abierta · A1–C2 · Conversación · Modo Play — the lesson state.
//
// A Saturday night in one neighbourhood. The city is the menu: the learner
// chooses where to go, each place is a different small game (content.mjs),
// one city-wide change forces a new plan, and the night closes with an oral
// recap built from the learner's own route. No scores: the teacher judges
// speaking; the state only records where the learner went and what they chose.

import { advance, beatsOf, choose, emptyProgress, inspect, isLastBeat } from "./activities.mjs";

import { DEFAULT_LEVEL, LEVELS, contentFor, isLevel } from "./levels.mjs";

const { ARRIVAL, CITY_EVENTS, FINAL, LOCATIONS, MECHANICS, ROUTE_PLAN, TEACHER_MOVES } = contentFor(DEFAULT_LEVEL);

// The B1 texts, for code that only needs ids and names (the same at every level).
export { ARRIVAL, CITY_EVENTS, FINAL, LOCATIONS, MECHANICS, ROUTE_PLAN, TEACHER_MOVES };
export { DEFAULT_LEVEL, LEVELS, contentFor, isLevel };

export const LESSON_ID = 223;
export const MIN_ENCOUNTERS_FOR_EVENT = 4;

export function locationById(id, level = DEFAULT_LEVEL) {
  return contentFor(level).LOCATIONS.find((location) => location.id === id) ?? null;
}
const placeOf = (state, id = state.position) => locationById(id, state.level);

export function activityById(location, id) {
  return location?.activities.find((activity) => activity.id === id) ?? null;
}

export function initialState(level = DEFAULT_LEVEL) {
  return { level: isLevel(level) ? level : DEFAULT_LEVEL, phase: "llegada", position: null, activity: null, visitOrder: [], encounters: {}, event: null, final: { criteria: {} } };
}

// Same night, other level: the world, the route and what was played stay; the
// situation on screen starts again with the new level's texts so a question
// from one level never meets a consequence from another.
export function setLevel(state, level) {
  if (!isLevel(level) || state.level === level) return state;
  const next = { ...state, level };
  const encounter = state.position ? state.encounters[state.position] : null;
  if (!encounter || !state.activity || !encounter.acts[state.activity]) return next;
  const before = encounter.acts[state.activity];
  const acts = { ...encounter.acts, [state.activity]: { ...emptyProgress(), done: before.done } };
  return { ...next, encounters: { ...state.encounters, [state.position]: { ...encounter, acts } } };
}

export function startExploring(state) {
  return { ...state, phase: "ciudad" };
}

const blankEncounter = () => ({ done: false, acts: {} });
const progressOf = (encounter, activityId) => encounter.acts[activityId] ?? emptyProgress();

// The situation a sequential place opens with: the one in progress, else the
// first one not played yet, else the first again.
function nextFor(location, encounter, after = null) {
  const list = location.activities;
  if (after) {
    const index = list.findIndex((item) => item.id === after);
    return list[(index + 1) % list.length].id;
  }
  return (list.find((item) => !encounter.acts[item.id]?.done) ?? list[0]).id;
}

// Open a place. Places with people or objects to walk up to (`hub`) can open
// straight onto one of them or onto their list; the others open a situation.
export function openLocation(state, id, activityId = null) {
  const location = placeOf(state, id);
  if (!location || state.phase === "cierre") return state;
  const encounter = state.encounters[id] ?? blankEncounter();
  const chosen = activityById(location, activityId)?.id ?? null;
  const activity = chosen ?? (location.hub ? null : nextFor(location, encounter));
  return {
    ...state,
    phase: "encuentro",
    position: id,
    activity,
    visitOrder: state.visitOrder.includes(id) ? state.visitOrder : [...state.visitOrder, id],
    encounters: { ...state.encounters, [id]: encounter },
  };
}

export function openActivity(state, activityId) {
  const location = placeOf(state);
  if (state.phase !== "encuentro" || !activityById(location, activityId)) return state;
  return { ...state, activity: activityId };
}

// Back to the list of people or objects. Outside a hub this leaves the place.
export function closeActivity(state) {
  const location = placeOf(state);
  if (!location) return state;
  if (!location.hub) return leaveLocation(state, location.id);
  return { ...state, activity: null };
}

// Another situation in the same place (the next one, round the list).
export function previousActivity(state) {
  const location = placeOf(state);
  if (!location || state.phase !== "encuentro") return state;
  const index = location.activities.findIndex(a => a.id === state.activity);
  return { ...state, activity: location.activities[(index - 1 + location.activities.length) % location.activities.length].id };
}

export function previousBeat(state) {
  return updateProgress(state, (type, activity, progress) => progress.beat > 0 ? { ...progress, beat: progress.beat - 1 } : progress);
}

export function otherActivity(state) {
  const location = placeOf(state);
  if (!location) return state;
  const encounter = state.encounters[location.id];
  return { ...state, activity: nextFor(location, encounter, state.activity) };
}

function updateProgress(state, change) {
  const location = placeOf(state);
  const activity = activityById(location, state.activity);
  if (!location || !activity || state.phase !== "encuentro") return state;
  const encounter = state.encounters[location.id];
  const before = progressOf(encounter, activity.id);
  const after = change(location.type, activity, before);
  if (after === before) return state;
  const acts = { ...encounter.acts, [activity.id]: after };
  return { ...state, encounters: { ...state.encounters, [location.id]: { ...encounter, acts, done: encounter.done || after.done } } };
}

// Stable choice ids bind the six language levels to the same physical world.
// Keep the taxi dialogue open at the destination until its reflection is done.
const TAXI_OUTCOMES = {
  "taxi-cortado": {
    caminar: { location: "plaza", travel: "walk", label: "A pie · recital en la plaza" },
    rodear: { location: "terraza", travel: "ride", label: "Taxi · llegada a la terraza" },
    esperar: { location: "taxi", travel: "wait", label: "Taxi detenido · esperando" },
  },
  "taxi-mayor": {
    seguir: { location: "plaza", travel: "ride", label: "Taxi · mercado de la plaza" },
    volver: { location: "taxi", travel: "turn", label: "Taxi · de vuelta por la avenida" },
    bajar: { location: "tienda", travel: "walk", label: "A pie · ayuda en el almacén" },
  },
};
export function worldOutcome(state) {
  if (state.phase !== "encuentro" || state.position !== "taxi") return null;
  const progress = state.encounters.taxi?.acts[state.activity];
  if (!progress?.choice) return null;
  const outcome = TAXI_OUTCOMES[state.activity]?.[progress.choice];
  return outcome ? { ...outcome, key: `${state.activity}/${progress.choice}` } : null;
}

export function chooseOption(state, optionId) {
  return updateProgress(state, (type, activity, progress) => choose(type, activity, progress, optionId));
}

export function advanceBeat(state) {
  return updateProgress(state, (type, activity, progress) => advance(type, activity, progress));
}

export function inspectItem(state, itemId) {
  return updateProgress(state, (type, activity, progress) => {
    const item = activity.items?.find((entry) => entry.id === itemId);
    return item ? inspect(progress, itemId) : progress;
  });
}

// The teacher may close a situation that was handled in conversation.
export function markDone(state) {
  return updateProgress(state, (type, activity, progress) => (progress.done ? progress : { ...progress, done: true }));
}

// The teacher restarts the situation on screen.
export function restartActivity(state) {
  return updateProgress(state, (type, activity, progress) => (progress.beat === 0 && !progress.choice && !progress.seen.length ? progress : { ...emptyProgress(), done: progress.done }));
}

// What the card shows right now.
export function currentView(state) {
  const location = placeOf(state);
  if (!location || state.phase !== "encuentro") return null;
  const activity = activityById(location, state.activity);
  const mechanic = MECHANICS[location.type];
  if (!activity) return { location, mechanic, activity: null };
  const progress = progressOf(state.encounters[location.id], activity.id);
  const beats = beatsOf(location.type, activity, progress);
  return {
    location, mechanic, activity, progress, beats,
    beat: beats[progress.beat], index: progress.beat, total: beats.length,
    last: isLastBeat(location.type, activity, progress),
  };
}

// Leaving a place. It counts once something there was really played; after
// the fourth place the city changes on the way out.
export function leaveLocation(state, id = state.position) {
  const encounter = state.encounters[id];
  if (!encounter) return state;
  const done = encounter.done || Object.values(encounter.acts).some((progress) => progress.done);
  const phase = state.event && !state.event.resolved ? "evento" : "ciudad";
  const destination = worldOutcome(state)?.location;
  const next = { ...state, phase, activity: null, encounters: { ...state.encounters, [id]: { ...encounter, done } } };
  if (destination && destination !== id) {
    next.position = destination;
    next.visitOrder = next.visitOrder.includes(destination) ? next.visitOrder : [...next.visitOrder, destination];
    next.encounters[destination] ??= blankEncounter();
  }
  return eventReady(next) ? triggerEvent(next, suggestedEvent(next)) : next;
}

export function completedIds(state) {
  return state.visitOrder.filter((id) => state.encounters[id]?.done);
}

export function eventReady(state) {
  return !state.event && completedIds(state).length >= MIN_ENCOUNTERS_FOR_EVENT;
}

// The change that best connects to where the learner actually went: the event
// touching most completed places; with no overlap, the lost phone (which asks
// for the whole route) fits any evening.
export function suggestedEvent(state) {
  const done = completedIds(state);
  let best = "celular";
  let bestOverlap = 0;
  for (const event of CITY_EVENTS) {
    const overlap = event.affects.filter((id) => done.includes(id)).length;
    if (overlap > bestOverlap) {
      best = event.id;
      bestOverlap = overlap;
    }
  }
  return best;
}

// The teacher may trigger the change earlier; it never fires twice.
export function triggerEvent(state, eventId) {
  if (state.event || state.phase === "cierre") return state;
  const event = CITY_EVENTS.find((item) => item.id === eventId);
  if (!event) return state;
  return { ...state, phase: "evento", activity: null, event: { id: event.id, resolved: false } };
}

export function resolveEvent(state) {
  if (!state.event) return state;
  return { ...state, phase: "ciudad", event: { ...state.event, resolved: true } };
}

export function finalAvailable(state) {
  return Boolean(state.event?.resolved);
}

export function openFinal(state) {
  return finalAvailable(state) ? { ...state, phase: "cierre", activity: null } : state;
}

export function toggleCriterion(state, criterionId) {
  if (!contentFor(state.level).FINAL.criteria.some((item) => item.id === criterionId)) return state;
  const criteria = { ...state.final.criteria, [criterionId]: !state.final.criteria[criterionId] };
  return { ...state, final: { ...state.final, criteria } };
}

// The night moves on 35 minutes with each completed place. A clock, not a timer.
export function nightClock(state) {
  const minutes = 20 * 60 + 40 + completedIds(state).length * 35 + (state.event ? 20 : 0);
  const hours = Math.floor(minutes / 60) % 24;
  return `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

// The learner's actual evening, for the event and the final recap: the
// places in order, what happened in each and the decisions taken.
export function nightSummary(state) {
  return state.visitOrder.map((id) => {
    const location = placeOf(state, id);
    const encounter = state.encounters[id];
    const played = location.activities.filter((activity) => encounter.acts[activity.id]?.done);
    const choices = played.flatMap((activity) => {
      const choice = encounter.acts[activity.id].choice;
      const option = activity.options?.find((item) => item.id === choice);
      return option ? [option.label] : [];
    });
    return { id, name: location.name, situations: played.map((activity) => activity.title), choices, done: Boolean(encounter.done) };
  });
}

export function isValidState(value) {
  if (!value || typeof value !== "object") return false;
  const ok = typeof value.phase === "string" && Array.isArray(value.visitOrder) && value.encounters && typeof value.encounters === "object"
    && value.final && typeof value.final === "object" && "activity" in value;
  if (!ok || ("level" in value && !isLevel(value.level))) return false;
  return value.visitOrder.every((id) => {
    const location = locationById(id);
    const encounter = value.encounters[id];
    return location && encounter && encounter.acts && typeof encounter.acts === "object"
      && Object.keys(encounter.acts).every((key) => activityById(location, key));
  }) && (value.position === null || Boolean(locationById(value.position)));
}
