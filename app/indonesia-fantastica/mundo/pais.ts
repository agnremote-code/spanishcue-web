// Indonesia 3D · the country as the map shows it: four regions, each a floating island
// around the airport. A region is one entry here, one layout in zonas.ts (built by
// app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const INDONESIA: CountryInfo = {
  id: 'indonesia',
  lessonId: 24,
  name: { es: 'Indonesia', en: 'Indonesia' },
  welcome: { es: 'BIENVENIDO A INDONESIA', en: 'WELCOME TO INDONESIA' },
  regions: [
    {
      id: 'bali', sign: 'BALI', shape: 'Bali', at: { x: 46, z: -30 }, color: '#2fa38a', sound: 'tropic',
      name: { es: 'Bali', en: 'Bali' }, zone: { es: 'La isla de los mil templos', en: 'The island of a thousand temples' },
      hook: { es: 'Las terrazas de arroz, las ofrendas de cada mañana, una escuela de surf, el día del silencio y los monos de Uluwatu.', en: 'The rice terraces, the morning offerings, a surf school, the Day of Silence and the monkeys of Uluwatu.' },
      marks: [{ kind: 'palm', dist: 8, side: 0, size: 1.2 }, { kind: 'pyramid', dist: 5, side: -6, size: 0.8, color: '#7a5233' }, { kind: 'house', dist: 5, side: 6, color: '#c9915a' }],
      spots: [
        { id: 'arrozales', name: { es: 'Las terrazas de arroz', en: 'The rice terraces' } },
        { id: 'ofrendas', name: { es: 'Las ofrendas de cada mañana', en: 'The morning offerings' } },
        { id: 'surf', name: { es: 'La escuela de surf de Kuta', en: 'The Kuta surf school' } },
        { id: 'nyepi', name: { es: 'Nyepi, el día del silencio', en: 'Nyepi, the Day of Silence' } },
        { id: 'uluwatu', name: { es: 'Los monos de Uluwatu', en: 'The monkeys of Uluwatu' } },
      ],
    },
    {
      id: 'java', sign: 'JAVA', shape: 'Java', at: { x: -12, z: -40 }, color: '#7a5233', sound: 'city',
      name: { es: 'Java', en: 'Java' }, zone: { es: 'Templos, batik y la capital', en: 'Temples, batik and the capital' },
      hook: { es: 'El amanecer en Borobudur, un taller de batik, un ensayo de gamelán, un puesto de comida nocturno y el tráfico de Yakarta.', en: 'Sunrise at Borobudur, a batik workshop, a gamelan rehearsal, a night food stall and Jakarta traffic.' },
      marks: [{ kind: 'pyramid', dist: 8, side: 0, size: 1.1, color: '#8a8070' }, { kind: 'peak', dist: 5, side: -6, size: 0.9 }, { kind: 'house', dist: 5, side: 6, color: '#c9a64a' }],
      spots: [
        { id: 'borobudur', name: { es: 'Borobudur al amanecer', en: 'Borobudur at sunrise' } },
        { id: 'batik', name: { es: 'El taller de batik', en: 'The batik workshop' } },
        { id: 'gamelan', name: { es: 'El ensayo de gamelán', en: 'The gamelan rehearsal' } },
        { id: 'angkringan', name: { es: 'El puesto de comida nocturno', en: 'The night food stall' } },
        { id: 'yakarta', name: { es: 'El tráfico de Yakarta', en: 'Jakarta traffic' } },
      ],
    },
    {
      id: 'sumatra', sign: 'SUMATRA', shape: 'Sumatra', at: { x: -50, z: -6 }, color: '#3f8f4a', sound: 'tropic',
      name: { es: 'Sumatra', en: 'Sumatra' }, zone: { es: 'Selva, volcanes y café', en: 'Jungle, volcanoes and coffee' },
      hook: { es: 'La selva de los orangutanes, el lago Toba, una cocina de Padang, un cafetal de Gayo y una plantación de palma.', en: 'The orangutan jungle, Lake Toba, a Padang kitchen, a Gayo coffee farm and an oil palm plantation.' },
      marks: [{ kind: 'pine', dist: 8, side: 0, size: 1.3 }, { kind: 'peak', dist: 5, side: -6 }, { kind: 'house', dist: 5, side: 6, color: '#7a5233' }],
      spots: [
        { id: 'orangutanes', name: { es: 'La selva de los orangutanes', en: 'The orangutan jungle' } },
        { id: 'toba', name: { es: 'El lago Toba', en: 'Lake Toba' } },
        { id: 'padang', name: { es: 'La cocina de Padang', en: 'The Padang kitchen' } },
        { id: 'cafe-gayo', name: { es: 'El cafetal de Gayo', en: 'The Gayo coffee farm' } },
        { id: 'palma', name: { es: 'La plantación de palma', en: 'The oil palm plantation' } },
      ],
    },
    {
      id: 'komodo', sign: 'KOMODO', shape: 'Flores', at: { x: -4, z: 44 }, color: '#d9813b', sound: 'beach',
      name: { es: 'Komodo y Flores', en: 'Komodo and Flores' }, zone: { es: 'Dragones, arrecifes y lagos de colores', en: 'Dragons, reefs and coloured lakes' },
      hook: { es: 'Los dragones de Komodo, el buceo en Labuan Bajo, un barco pinisi, el pueblo de Wae Rebo y los lagos de Kelimutu.', en: 'The Komodo dragons, diving in Labuan Bajo, a pinisi boat, the village of Wae Rebo and the Kelimutu lakes.' },
      marks: [{ kind: 'peak', dist: 9, side: 0, size: 1.1 }, { kind: 'palm', dist: 5, side: -6 }, { kind: 'house', dist: 5, side: 6, color: '#c9915a' }],
      spots: [
        { id: 'dragones', name: { es: 'Los dragones de Komodo', en: 'The Komodo dragons' } },
        { id: 'buceo', name: { es: 'El buceo en Labuan Bajo', en: 'Diving in Labuan Bajo' } },
        { id: 'pinisi', name: { es: 'El barco pinisi', en: 'The pinisi boat' } },
        { id: 'wae-rebo', name: { es: 'El pueblo de Wae Rebo', en: 'The village of Wae Rebo' } },
        { id: 'kelimutu', name: { es: 'Los lagos de Kelimutu', en: 'The Kelimutu lakes' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the region. They load only in
// the browser: the server build (import.meta.env.SSR) drops these chunks, which keeps the
// Worker bundle inside its memory budget (tests/worker-startup.test.mjs).
export const loadContent = (id: string): Promise<RegionContent> => (import.meta as unknown as { env?: { SSR?: boolean } }).env?.SSR ? Promise.reject(new Error('browser only')) : ({
  bali: () => import('./contenido/bali.mjs'),
  java: () => import('./contenido/java.mjs'),
  sumatra: () => import('./contenido/sumatra.mjs'),
  komodo: () => import('./contenido/komodo.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
