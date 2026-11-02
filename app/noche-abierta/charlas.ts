// Noche abierta · the extra conversation circles of the city: the lit shop
// signs, the party house and every street event while it lasts (the car on
// fire, a fight, someone on the ground…). The people come from the crowd.

import type { CharlaPlace } from '../charlas-3d/lugar';

type Talk = { title: string; intro: string; themes: string[] };

export const SIGN_TALK: Record<string, Talk> = {
  'DISCO ÓRBITA': { title: 'Disco Órbita, el boliche de colores', intro: 'Las luces cambian de rosa a azul. La música hace temblar la puerta y la fila llega hasta la esquina.', themes: ['fiesta', 'noche'] },
  'PIZZERÍA LUNA': { title: 'Pizzería Luna', intro: 'Abierta hasta las cinco. Huele a queso y a horno de leña.', themes: ['comida', 'noche'] },
  'HOSTEL NORTE': { title: 'Hostel Norte', intro: 'Mochileros de diez países fuman en la puerta y cambian historias.', themes: ['viaje', 'soledad'] },
  'ROTISERÍA DON ZETA': { title: 'Rotisería Don Zeta', intro: 'Don Zeta cocina pollo para los que salen tarde del trabajo.', themes: ['comida', 'trabajo'] },
  'PELUQUERÍA GLAM': { title: 'Peluquería Glam', intro: 'Todavía hay luz. Alguien se corta el pelo para empezar una vida nueva.', themes: ['persona', 'amor'] },
  'TATUAJES': { title: 'El estudio de tatuajes', intro: 'En el escaparate hay dibujos de dragones, nombres y fechas.', themes: ['arte', 'tiempo'] },
  'BAR EL FARO': { title: 'Bar El Faro', intro: 'Un bar pequeño con música vieja y clientes de siempre.', themes: ['soledad', 'noche'] },
  'CAMBIO · CAFÉ': { title: 'Cambio y café', intro: 'Cambian dinero y sirven café a los que llegan en el último tren.', themes: ['dinero', 'viaje'] },
};
const SIGN_DEFAULT: Talk = { title: 'Un local abierto', intro: 'La luz del cartel ilumina la acera.', themes: ['calle', 'noche'] };

export const FIXED_PLACES: CharlaPlace[] = [
  { id: 'casa-fiesta', x: -17, z: 59, r: 2.6, title: 'La casa de la fiesta', intro: 'Luces de colores en la puerta, música a todo volumen y gente bailando en la vereda.', themes: ['fiesta', 'amor'] },
];

/** A street event, while it happens, has its own circle a few metres away. */
export const EVENT_TALK: Record<string, Talk & { r: number }> = {
  incendio: { title: 'Un auto en llamas', intro: 'El fuego sube por el capó. La gente mira desde lejos, algunos graban con el móvil.', themes: ['fuego', 'calle'], r: 5 },
  pelea: { title: 'Una pelea en la calle', intro: 'Dos personas se empujan y gritan. Un círculo de gente mira sin hacer nada.', themes: ['ley', 'miedo'], r: 4.5 },
  caido: { title: 'Alguien en el suelo', intro: 'Una persona está tirada en la acera. Otra se arrodilla a su lado.', themes: ['accidente', 'salud'], r: 4 },
  choque: { title: 'Un choque de autos', intro: 'Dos autos con el frente roto. Los conductores discuten de quién fue la culpa.', themes: ['accidente', 'transporte'], r: 4.5 },
  protesta: { title: 'Una protesta', intro: 'Carteles, tambores y gente que grita por algo que le importa.', themes: ['poder', 'calle'], r: 5 },
  helicoptero: { title: 'Un helicóptero sobre el barrio', intro: 'Un foco blanco recorre los techos. Nadie sabe qué busca.', themes: ['ley', 'miedo'], r: 5 },
  ladron: { title: 'Un robo', intro: 'Alguien grita que le robaron el bolso. El ladrón corre hacia la esquina.', themes: ['ley', 'dinero'], r: 4 },
  persecucion: { title: 'Una persecución', intro: 'La policía corre detrás de alguien entre los autos.', themes: ['ley', 'aventura'], r: 4.5 },
  borracho: { title: 'Un hombre que cantaba demasiado', intro: 'Camina en zigzag y le canta una canción de amor a una farola.', themes: ['fiesta', 'soledad'], r: 3.5 },
};

export function signPlaces(signs: { text: string; x: number; z: number }[]): CharlaPlace[] {
  return signs.map(s => {
    const t = SIGN_TALK[s.text] ?? SIGN_DEFAULT;
    return { id: `cartel-${s.text}`, x: s.x, z: s.z, r: 2.2, ...t };
  });
}
