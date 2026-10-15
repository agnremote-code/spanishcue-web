// Noche abierta · the general conversation that closes every scene and every
// place: five open questions about the learner's real life, built on the
// human theme behind the scene (not on the object, not on safety).
//
// The narrative layer (street/*.mjs, pedagogy*.mjs) decides what happens; this
// layer decides what the teacher and the learner talk about afterwards. The
// object carried tonight changes the story, and adds at most ONE question of
// the five, from its own pool of human themes (power, misunderstandings, first
// impressions…), rotating so two scenes in a row never ask the same one.
import { bi } from "../bilingual.mjs";
import VIEJO from "./street-viejo.mjs";
import ALTO from "./street-alto.mjs";
import CLINICA from "./street-clinica.mjs";
import MERCADO from "./street-mercado.mjs";
import COSTA from "./street-costa.mjs";
import ESTACION from "./street-estacion.mjs";
import SUR from "./street-sur.mjs";
import CAOS_NORTE from "./street-caos-norte.mjs";
import CAOS_CENTRO from "./street-caos-centro.mjs";
import CAOS_SUR from "./street-caos-sur.mjs";
import PLACES from "./places.mjs";
import OBJECTS from "./objects.mjs";
import { STREET as STREET_A0, PLACES as PLACES_A0 } from "./a0.mjs";

export const TALK_LEVELS = Object.freeze(["A1", "A2", "B1", "B2", "C1", "C2"]);
export const STREET_FILES = Object.freeze({
  viejo: VIEJO, alto: ALTO, clinica: CLINICA, mercado: MERCADO, costa: COSTA, estacion: ESTACION, sur: SUR,
  "caos-norte": CAOS_NORTE, "caos-centro": CAOS_CENTRO, "caos-sur": CAOS_SUR,
});
export const STREET_TALK = Object.freeze(Object.assign({}, ...Object.values(STREET_FILES)));
export const STREET_A0_TALK = STREET_A0;
export const PLACE_TALK = PLACES;
export const PLACE_A0_TALK = PLACES_A0;
export const OBJECT_TALK = OBJECTS;

// The question the object brings to this scene: `turn` is how many scenes
// the learner already closed tonight, so consecutive scenes rotate.
export function objectQuestion(item, level, turn = 0) {
  const pool = OBJECTS[item]?.[level];
  return pool?.length ? pool[Math.abs(turn) % pool.length] : null;
}

// The five questions of a street scene. At A0 the bilingual set (the object
// stays out of A0 scenes); otherwise the scene's own five, the last one
// replaced by the object's question when the object changed the scene.
export function streetTalk(id, level, { item = null, turn = 0 } = {}) {
  if (level === "A0") return STREET_A0[id]?.A0.map(bi) ?? null;
  const set = STREET_TALK[id]?.[level];
  if (!set) return null;
  const extra = item ? objectQuestion(item, level, turn) : null;
  return extra ? [...set.slice(0, 4), extra] : [...set];
}

// The five questions of a place: its personal question first, then four more.
export function placeTalk(id, level, first) {
  const more = level === "A0" ? PLACES_A0[id]?.A0.map(bi) : PLACES[id]?.[level];
  return more ? [first, ...more] : [first];
}
