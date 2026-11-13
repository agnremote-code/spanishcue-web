// HR Crisis · the six missions and their tasks, in the order of the story.
// Missions 1–5 can be played in any order; mission 6 (the final crisis)
// opens when the other five are done, or when the teacher opens it.
import { M1_M2 } from './misiones/m1-m2.mjs';
import { M3_M4 } from './misiones/m3-m4.mjs';
import { M5_M6 } from './misiones/m5-m6.mjs';

export const MISSIONS = [
  { n: 1, title: 'Misión 1 · {nombre} contrata', goal: 'Entrevistas y selección de candidatos', room: 'Recepción y salas de entrevistas' },
  { n: 2, title: 'Misión 2 · {nombre} apaga incendios', goal: 'Quejas de empleados y resolución de conflictos', room: 'Oficinas de empleados' },
  { n: 3, title: 'Misión 3 · {nombre} y los números', goal: 'Errores de nóminas y administración', room: 'Nóminas y administración' },
  { n: 4, title: 'Misión 4 · {nombre} anuncia cambios', goal: 'Reestructuración y comunicación interna', room: 'RR. HH., oficinas y pasillo' },
  { n: 5, title: 'Misión 5 · {nombre} en la sala de reuniones', goal: 'Reuniones con dirección', room: 'Sala de reuniones' },
  { n: 6, title: 'Misión 6 · {nombre} salva la empresa', goal: 'La crisis final: todo lo aprendido a la vez', room: 'Despacho del director' },
];

export const TASKS = [...M1_M2, ...M3_M4, ...M5_M6];
export const TASK_IDS = TASKS.map(t => t.id);
export const taskById = (id) => TASKS.find(t => t.id === id) ?? null;
export const tasksOf = (n) => TASKS.filter(t => t.mission === n);

/** The level variant of a task (falls back to A1). */
export function variant(task, level) {
  return task.levels[level] ?? task.levels.A1;
}

/** Is a mission open? 1–5 always; 6 when 1–5 are done or the teacher opened it. */
export function missionOpen(n, done, unlocked = false) {
  if (n < 6 || unlocked) return true;
  return TASKS.filter(t => t.mission < 6).every(t => done.includes(t.id));
}
export function missionDone(n, done) {
  return tasksOf(n).every(t => done.includes(t.id));
}

// How each level adapts the experience beyond the texts.
export const LEVEL_RULES = {
  A1: { rate: 0.72, transcript: 'visible', label: 'A1 · frases cortas, producción guiada y mucha ayuda' },
  A2: { rate: 0.82, transcript: 'visible', label: 'A2 · frases sencillas sobre situaciones conocidas' },
  B1: { rate: 0.92, transcript: 'toggle', label: 'B1 · comunicación espontánea y decisiones propias' },
  B2: { rate: 1.0, transcript: 'hidden', label: 'B2 · negociación, argumentos y registro formal' },
  C1: { rate: 1.08, transcript: 'hidden', label: 'C1 · matices, ironía y discurso profesional complejo' },
};
