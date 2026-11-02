// Noche abierta · the free class (/demo/noche-abierta). It is the same game
// as the PRO class: the same city, the ten places, the object, the levels,
// the teacher panel. Only some districts and some street circles are locked;
// touching one offers to unlock everything (Ale, 2026-10-30).
export const DEMO_FREE_DISTRICTS = Object.freeze(["centro", "viejo", "mercado", "costa"]);
// Locked circles inside the free districts, so the free night also meets PRO.
export const DEMO_LOCKED_SCENES = Object.freeze([
  "centro-desmayo",
  "viejo-estrellas", "viejo-sereno", "viejo-sombra",
  "mercado-trastienda", "mercado-robo", "mercado-inspectores",
  "costa-toto", "costa-camila", "costa-canal",
]);
export const DEMO_STREET_PATH = "/noche-abierta/demo-calle.json";

export function isDemoFree(encounter) {
  return DEMO_FREE_DISTRICTS.includes(encounter.district) && !DEMO_LOCKED_SCENES.includes(encounter.id);
}

// What a locked circle keeps: who stands there, how they look and feel, and
// where the scene would open. No line, choice, ending, title or goal.
export function lockedShell(encounter) {
  const starts = new Set([encounter.start, ...Object.values(encounter.variants ?? {}).map((variant) => variant.start)]);
  return {
    id: encounter.id, kind: encounter.kind, district: encounter.district, locked: true,
    title: "Escena PRO", verb: "DESBLOQUEAR", goal: "",
    cast: encounter.cast,
    start: encounter.start,
    nodes: Object.fromEntries([...starts].map((id) => [id, { mood: encounter.nodes[id]?.mood ?? "neutral", options: [] }])),
    ends: {},
    ...(encounter.variants ? { variants: Object.fromEntries(Object.entries(encounter.variants).map(([item, variant]) => [item, { start: variant.start, ...(variant.fx ? { fx: variant.fx } : {}) }])) } : {}),
    ...(encounter.requires ? { requires: encounter.requires } : {}),
    ...(encounter.event ? { event: encounter.event } : {}),
  };
}

// The payload the free class registers: free scenes whole, locked ones as shells.
export function demoStreet({ encounters, a0, a1Words, talk, talkA0 }) {
  const free = encounters.filter(isDemoFree);
  const ids = new Set(free.map((encounter) => encounter.id));
  const pick = (record) => Object.fromEntries(Object.entries(record).filter(([id]) => ids.has(id)));
  return {
    encounters: encounters.map((encounter) => (ids.has(encounter.id) ? encounter : lockedShell(encounter))),
    a0: pick(a0), a1Words: pick(a1Words), talk: pick(talk), talkA0: pick(talkA0),
  };
}
