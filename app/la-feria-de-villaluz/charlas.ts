// La feria de Villaluz · conversation circles at the big things of the fair.
// Everyone in the crowd gets a circle too.

import { onFreeGround, type CharlaPlace } from '../charlas-3d/lugar';
import { DANCE_FLOOR, FOUNTAIN, STAGE, WHEEL, isClearGround } from './layout.mjs';

export function fairPlaces(): CharlaPlace[] {
  const free = (x: number, z: number) => isClearGround(x, z, 0.9);
  return [
    { id: 'noria', x: WHEEL.x, z: WHEEL.z + 4, r: 2.4, title: 'La noria', intro: 'Las cabinas suben despacio. Desde arriba se ve todo el pueblo iluminado.', themes: ['infancia', 'amor'] },
    { id: 'escenario', x: STAGE.x - STAGE.w / 2 - 2.5, z: STAGE.z, r: 2.4, title: 'El escenario', intro: 'Una orquesta del pueblo afina. Esta noche toca canciones de antes.', themes: ['arte', 'fiesta'] },
    { id: 'pista', x: DANCE_FLOOR.x + DANCE_FLOOR.r + 1.5, z: DANCE_FLOOR.z, r: 2.2, title: 'La pista de baile', intro: 'Abuelos y nietos bailan juntos bajo las bombillas.', themes: ['fiesta', 'familia'] },
    { id: 'fuente', x: FOUNTAIN.x, z: FOUNTAIN.z + FOUNTAIN.r + 1.6, r: 2.2, title: 'La fuente de los deseos', intro: 'Dicen que si tiras una moneda con los ojos cerrados, el deseo se cumple.', themes: ['espiritu', 'infancia'] },
  ].map(pl => onFreeGround(pl, free));
}
