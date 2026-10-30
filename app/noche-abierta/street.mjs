// Noche abierta · the street encounters beyond the ten places, with every
// district: what the PRO class (and the tests) load. The logic lives in
// ./street-core.mjs; the free class registers its own subset instead.
import ALTO from "./street/alto.mjs";
import CLINICA from "./street/clinica.mjs";
import COSTA from "./street/costa.mjs";
import ESTACION from "./street/estacion.mjs";
import MERCADO from "./street/mercado.mjs";
import SUR from "./street/sur.mjs";
import VIEJO from "./street/viejo.mjs";
import CAOS_NORTE from "./street/caos-norte.mjs";
import CAOS_CENTRO from "./street/caos-centro.mjs";
import CAOS_SUR from "./street/caos-sur.mjs";
import { A0_SCENES } from "./street/a0.mjs";
import { A1_WORDS } from "./street/words-a1.mjs";
import { registerStreet } from "./street-core.mjs";
import "./talk/index.mjs";

export const ALL_ENCOUNTERS = Object.freeze([...VIEJO, ...ALTO, ...CLINICA, ...MERCADO, ...COSTA, ...ESTACION, ...SUR, ...CAOS_NORTE, ...CAOS_CENTRO, ...CAOS_SUR]);
export const ALL_A0_SCENES = A0_SCENES;
export const ALL_A1_WORDS = A1_WORDS;
export function registerFullStreet() {
  registerStreet({ encounters: ALL_ENCOUNTERS, a0: A0_SCENES, a1Words: A1_WORDS });
}
registerFullStreet();

export * from "./street-core.mjs";
