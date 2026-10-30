// Hospital San Casi Vivo · conversation circles at the rooms and the things
// that stand out on every floor. Everyone without a scene gets a circle too.

import { onFreeGround } from '../charlas-3d/lugar';
import { freeOn, thingPlaces, type FloorPlace, type Talk } from '../charlas-3d/lugares';
import { DOORS, FLOORS, FURNITURE, solidsFor } from './layout.mjs';

const ROOMS: Record<string, Talk> = {
  MORGUE: { title: 'La puerta de la morgue', intro: 'Hace frío en el pasillo. Nadie quiere quedarse aquí mucho tiempo.', themes: ['muerte', 'miedo'] },
  ENTRADA: { title: 'La entrada del hospital', intro: 'Gente que entra con miedo y gente que sale con flores.', themes: ['salud', 'familia'] },
  AMBULANCIAS: { title: 'La puerta de ambulancias', intro: 'Las sirenas se apagan y las puertas se abren de golpe.', themes: ['accidente', 'trabajo'] },
  'OBSERVACIÓN': { title: 'Observación', intro: 'Pacientes que esperan saber si se quedan o se van a casa.', themes: ['salud', 'tiempo'] },
  CURACIONES: { title: 'La sala de curaciones', intro: 'Vendas, puntos y una enfermera que lo ha visto todo.', themes: ['salud', 'accidente'] },
  TRAUMA: { title: 'La sala de trauma', intro: 'Aquí se decide todo en minutos.', themes: ['accidente', 'miedo'] },
  'CAFETERÍA': { title: 'La cafetería', intro: 'Café malo, médicos cansados y familias que no tienen hambre.', themes: ['comida', 'familia'] },
  'FACTURACIÓN': { title: 'Facturación', intro: 'Una fila larga y papeles que nadie entiende.', themes: ['dinero', 'salud'] },
  TRIAJE: { title: 'Triaje', intro: 'Una enfermera decide quién pasa primero. Nadie está contento.', themes: ['salud', 'ley'] },
  LABORATORIO: { title: 'El laboratorio', intro: 'Tubos de colores y máquinas que dan respuestas.', themes: ['tecnologia', 'salud'] },
  'DESCANSO MÉDICOS': { title: 'El descanso de los médicos', intro: 'Un sofá, una tele y diez minutos para no pensar.', themes: ['trabajo', 'soledad'] },
  'RAYOS X': { title: 'Rayos X', intro: 'Ver por dentro a una persona. Los huesos no mienten.', themes: ['salud', 'tecnologia'] },
  'TOMOGRAFÍA': { title: 'La tomografía', intro: 'Un túnel blanco que da miedo a mucha gente.', themes: ['miedo', 'salud'] },
  UCI: { title: 'La UCI', intro: 'Máquinas que pitan y familias que esperan en silencio.', themes: ['muerte', 'familia'] },
};
const ROOM_DEFAULT: Talk = { title: 'Una habitación', intro: 'Detrás de la puerta, alguien se recupera despacio.', themes: ['salud', 'soledad'] };

const THINGS: Record<string, Talk> = {
  vending: { title: 'La máquina de café y snacks', intro: 'Se traga las monedas cuando quiere. Todos le pegan un golpe.', themes: ['comida', 'dinero'] },
  ambulance: { title: 'La ambulancia', intro: 'Acaba de llegar. El conductor se seca el sudor.', themes: ['accidente', 'trabajo'] },
  autopsy: { title: 'La mesa de autopsias', intro: 'Una mesa de metal frío bajo una luz blanca.', themes: ['muerte', 'ley'] },
  washer: { title: 'La lavandería', intro: 'Sábanas que dan vueltas y vueltas toda la noche.', themes: ['trabajo', 'noche'] },
  tv: { title: 'La tele de la sala', intro: 'Pasan una telenovela y todos la miran sin mirarla.', themes: ['arte', 'tiempo'] },
  watercooler: { title: 'El dispensador de agua', intro: 'Donde la gente se encuentra y se cuenta cosas.', themes: ['persona', 'salud'] },
  wheelchair: { title: 'Una silla de ruedas vacía', intro: 'Alguien la dejó aquí. ¿Ya no la necesita?', themes: ['salud', 'tiempo'] },
  delivery: { title: 'La sala de partos', intro: 'Aquí empieza la vida de alguien todos los días.', themes: ['familia', 'amor'] },
  ct: { title: 'El escáner', intro: 'Una máquina enorme que ve lo que nadie ve.', themes: ['tecnologia', 'miedo'] },
  kitchen: { title: 'La cocina del descanso', intro: 'Tuppers con nombres y una nota: «¡No toques mi yogur!».', themes: ['comida', 'trabajo'] },
};

type Door = { x: number; z: number; axis: 'x' | 'z'; label?: string };
type Floor = { id: number; y: number; bounds: { minX: number; maxX: number; minZ: number; maxZ: number } };

/** Every labelled door and every notable thing, on free ground, by floor. */
export function hospitalPlaces(): FloorPlace[] {
  const floors = FLOORS as Floor[];
  const out: FloorPlace[] = [];
  for (const f of floors) {
    const free = freeOn(f, solidsFor(f.id));
    for (const d of ((DOORS as Record<number, Door[]>)[f.id] ?? [])) {
      if (!d.label) continue;
      const room = /^\d+$/.test(d.label);
      const t = ROOMS[d.label] ?? ROOM_DEFAULT;
      const at = d.axis === 'x' ? { x: d.x, z: d.z + 2 } : { x: d.x - 2, z: d.z };
      out.push({ ...onFreeGround({ id: `p${f.id}-${d.label}`, ...at, y: f.y, r: 1.6, ...t, title: room ? `Habitación ${d.label}` : t.title }, free), floor: f.id });
    }
  }
  return [...out, ...thingPlaces(floors, FURNITURE, solidsFor, THINGS, 'p')];
}
