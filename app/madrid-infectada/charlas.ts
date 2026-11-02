// Madrid infectada · conversation circles at the monuments of the city.
// Every survivor without a story of their own gets a circle from the crowd.

import type { CharlaPlace } from '../charlas-3d/lugar';
import { MONUMENTS } from './city.mjs';

const TALK: Record<string, { title: string; intro: string; themes: string[] }> = {
  cibeles: { title: 'La fuente de Cibeles', intro: 'La diosa en su carro de leones mira una ciudad vacía. Aquí se celebraban los títulos de fútbol.', themes: ['deporte', 'supervivencia'] },
  alcala: { title: 'La Puerta de Alcalá', intro: 'La puerta sigue ahí, mirándolo todo pasar, como en la canción.', themes: ['historia', 'tiempo'] },
  cervantes: { title: 'El monumento a Cervantes', intro: 'Don Quijote y Sancho siguen a caballo, como si nada hubiera pasado.', themes: ['fantasia', 'arte'] },
  debod: { title: 'El Templo de Debod', intro: 'Un templo egipcio de verdad, regalado a Madrid. Desde aquí se ve el atardecer más famoso.', themes: ['historia', 'espiritu'] },
  oriente: { title: 'La estatua de la Plaza de Oriente', intro: 'Un rey a caballo frente al Palacio Real. Las palomas ya no tienen miedo.', themes: ['poder', 'historia'] },
  almudena: { title: 'La catedral de la Almudena', intro: 'Las puertas están abiertas. Dentro, alguien encendió todas las velas.', themes: ['espiritu', 'muerte'] },
  teatro: { title: 'El Teatro Real', intro: 'El cartel anuncia una ópera que ya nadie va a ver.', themes: ['arte', 'supervivencia'] },
  comunicaciones: { title: 'El Palacio de Cibeles', intro: 'Antes era el edificio de correos. Hay cartas por el suelo que nunca llegaron.', themes: ['familia', 'tecnologia'] },
  prado: { title: 'El Museo del Prado', intro: 'Los cuadros de Goya siguen colgados. Sus pinturas negras ya no parecen exageradas.', themes: ['arte', 'miedo'] },
  'edificio-espana': { title: 'El Edificio España', intro: 'Un rascacielos de los años cincuenta. En la azotea alguien hace señales con una linterna.', themes: ['supervivencia', 'calle'] },
};

type Monument = { kind: string; x?: number; z?: number; r?: number; w?: number; d?: number; x0?: number; x1?: number; z0?: number; z1?: number };

/** One circle in front of each monument (south side), before nudging it onto free ground. */
export function monumentPlaces(): CharlaPlace[] {
  const out: CharlaPlace[] = [];
  for (const m of MONUMENTS as Monument[]) {
    const t = TALK[m.kind];
    if (!t) continue;
    const at = m.x0 != null ? { x: (m.x0 + m.x1!) / 2, z: m.z0! - 3 } : m.r ? { x: m.x!, z: m.z! - m.r - 2.6 } : { x: m.x!, z: m.z! - (m.d ?? 2) / 2 - 2.8 };
    out.push({ id: `monumento-${m.kind}`, ...at, r: 2.4, ...t });
  }
  return out;
}
