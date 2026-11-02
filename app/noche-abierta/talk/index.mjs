// Noche abierta · every street conversation, registered for the PRO class
// and the tests. The logic and the shared places/objects live in ./core.mjs.
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
import { STREET as STREET_A0 } from "./a0.mjs";
import { registerStreetTalk } from "./core.mjs";

export const STREET_FILES = Object.freeze({
  viejo: VIEJO, alto: ALTO, clinica: CLINICA, mercado: MERCADO, costa: COSTA, estacion: ESTACION, sur: SUR,
  "caos-norte": CAOS_NORTE, "caos-centro": CAOS_CENTRO, "caos-sur": CAOS_SUR,
});
export const STREET_TALK = Object.freeze(Object.assign({}, ...Object.values(STREET_FILES)));
export const STREET_A0_TALK = STREET_A0;
registerStreetTalk({ street: STREET_TALK, a0: STREET_A0 });

export * from "./core.mjs";
