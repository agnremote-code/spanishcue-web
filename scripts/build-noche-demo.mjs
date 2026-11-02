// Writes what the free 3D classes register, from the PRO data and each demo
// policy: the street scenes of Noche abierta (public/noche-abierta/demo-calle.json)
// and the open scenes and people of the hospital
// (public/hospital-san-casi-vivo/demo.json). tests/noche-demo.test.mjs fails
// when a file is stale.
//   node scripts/build-noche-demo.mjs
import { writeFile } from "node:fs/promises";
import { ALL_ENCOUNTERS, ALL_A0_SCENES, ALL_A1_WORDS } from "../app/noche-abierta/street.mjs";
import { STREET_TALK, STREET_A0_TALK } from "../app/noche-abierta/talk/index.mjs";
import { demoStreet } from "../app/noche-abierta/demo-policy.mjs";
import { CONTENT } from "../app/hospital-san-casi-vivo/levels.mjs";
import { PATIENTS } from "../app/hospital-san-casi-vivo/patients.mjs";
import { demoHospital } from "../app/hospital-san-casi-vivo/demo-policy.mjs";

export function demoStreetJson() {
  const data = demoStreet({ encounters: ALL_ENCOUNTERS, a0: ALL_A0_SCENES, a1Words: ALL_A1_WORDS, talk: STREET_TALK, talkA0: STREET_A0_TALK });
  return JSON.stringify(data) + "\n";
}

export function demoHospitalJson() {
  return JSON.stringify(demoHospital({ content: CONTENT, patients: PATIENTS })) + "\n";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await writeFile(new URL("../public/noche-abierta/demo-calle.json", import.meta.url), demoStreetJson());
  await writeFile(new URL("../public/hospital-san-casi-vivo/demo.json", import.meta.url), demoHospitalJson());
}
