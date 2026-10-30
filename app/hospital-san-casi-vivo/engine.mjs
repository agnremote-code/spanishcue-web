// Hospital San Casi Vivo · the lesson state with every scene registered: what
// the PRO class (and the tests) load. The logic lives in ./engine-core.mjs.
import { CONTENT } from './levels.mjs';
import { PATIENTS } from './patients.mjs';
import { registerHospital } from './engine-core.mjs';

export function registerFullHospital() {
  registerHospital({ content: CONTENT, patients: PATIENTS });
}
registerFullHospital();

export * from './engine-core.mjs';
