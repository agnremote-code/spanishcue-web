// Hospital San Casi Vivo · the free class (/demo/hospital-san-casi-vivo). It
// is the same game as the PRO class: the four floors, the lift, the stairs,
// the people in the halls. The ground floor is open except a few circles;
// the other floors are PRO. Touching a locked circle or person offers to
// unlock everything (Ale, 2026-10-30).
import { SCENES } from './layout.mjs';

export const DEMO_FREE_FLOORS = Object.freeze([1]);
export const DEMO_LOCKED_SCENES = Object.freeze(['vip', 'trauma', 'facturacion']);
export const DEMO_HOSPITAL_PATH = '/hospital-san-casi-vivo/demo.json';

export const isFreeScene = (id) => {
  const scene = SCENES.find((item) => item.id === id);
  return Boolean(scene) && DEMO_FREE_FLOORS.includes(scene.floor) && !DEMO_LOCKED_SCENES.includes(id);
};
// People in the halls: keys are `<floor>-<index>`.
export const isFreePerson = (id) => DEMO_FREE_FLOORS.includes(Number(id.split('-')[0]));

// The payload the free class registers: free scenes and people, and the ids
// it must lock. Nothing written for a locked scene or person is in it.
export function demoHospital({ content, patients }) {
  const scenes = SCENES.map((scene) => scene.id);
  return {
    content: Object.fromEntries(Object.entries(content).map(([level, texts]) => [level, Object.fromEntries(Object.entries(texts).filter(([id]) => isFreeScene(id)))])),
    patients: Object.fromEntries(Object.entries(patients).filter(([id]) => isFreePerson(id))),
    locked: [...scenes.filter((id) => !isFreeScene(id)), ...Object.keys(patients).filter((id) => !isFreePerson(id))],
  };
}
