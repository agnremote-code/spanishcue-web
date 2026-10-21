// Israel 3D · the country as the map shows it: four regions, each a floating island
// around the airport. A region is one entry here, one layout in zonas.ts (built by
// app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ISRAEL: CountryInfo = {
  id: 'israel',
  lessonId: 25,
  name: { es: 'Israel', en: 'Israel' },
  welcome: { es: 'BIENVENIDO A ISRAEL', en: 'WELCOME TO ISRAEL' },
  regions: [
    {
      id: 'tel-aviv', sign: 'TEL AVIV', shape: 'Tel Aviv', at: { x: 46, z: -30 }, color: '#2f8fd4', sound: 'beach',
      name: { es: 'Tel Aviv y Jaffa', en: 'Tel Aviv and Jaffa' }, zone: { es: 'La ciudad que no duerme junto al mar', en: 'The city that never sleeps by the sea' },
      hook: { es: 'Paletas en la playa, el mercado Carmel, la Ciudad Blanca, el viejo puerto de Jaffa y una oficina de startup.', en: 'Paddle ball on the beach, the Carmel market, the White City, the old port of Jaffa and a start-up office.' },
      marks: [{ kind: 'palm', dist: 8, side: 0, size: 1.1 }, { kind: 'tower', dist: 5, side: -6, size: 0.9, color: '#f4efe4' }, { kind: 'house', dist: 5, side: 6, color: '#f4efe4' }],
      spots: [
        { id: 'playa', name: { es: 'La playa de Gordon', en: 'Gordon Beach' } },
        { id: 'carmel', name: { es: 'El mercado Carmel', en: 'The Carmel Market' } },
        { id: 'bauhaus', name: { es: 'La Ciudad Blanca', en: 'The White City' } },
        { id: 'jaffa', name: { es: 'El puerto de Jaffa', en: 'The port of Jaffa' } },
        { id: 'startup', name: { es: 'Una oficina de startup', en: 'A start-up office' } },
      ],
    },
    {
      id: 'jerusalen', sign: 'JERUSALÉN', shape: 'Jerusalén', at: { x: -12, z: -40 }, color: '#c9a64a', sound: 'city',
      name: { es: 'Jerusalén', en: 'Jerusalem' }, zone: { es: 'La ciudad de piedra dorada', en: 'The city of golden stone' },
      hook: { es: 'La Ciudad Vieja, el mercado Mahane Yehuda, una cena de shabat, los manuscritos del mar Muerto y el monte de los Olivos.', en: 'The Old City, the Mahane Yehuda market, a Shabbat dinner, the Dead Sea Scrolls and the Mount of Olives.' },
      marks: [{ kind: 'dome', dist: 8, side: 0, size: 1.1, color: '#c9a64a' }, { kind: 'house', dist: 5, side: -6, color: '#e9dcc0' }, { kind: 'house', dist: 5, side: 6, color: '#d8c8a0' }],
      spots: [
        { id: 'ciudad-vieja', name: { es: 'La Ciudad Vieja', en: 'The Old City' } },
        { id: 'mahane-yehuda', name: { es: 'El mercado Mahane Yehuda', en: 'The Mahane Yehuda market' } },
        { id: 'shabat', name: { es: 'Una cena de shabat', en: 'A Shabbat dinner' } },
        { id: 'museo', name: { es: 'Los manuscritos del mar Muerto', en: 'The Dead Sea Scrolls' } },
        { id: 'mirador', name: { es: 'El mirador del monte de los Olivos', en: 'The Mount of Olives viewpoint' } },
      ],
    },
    {
      id: 'norte', sign: 'NORTE', shape: 'Galilea', at: { x: -50, z: -6 }, color: '#3f8f4a', sound: 'coast',
      name: { es: 'El Norte', en: 'The North' }, zone: { es: 'Jardines, kibutz y el lago de Galilea', en: 'Gardens, kibbutzim and the Sea of Galilee' },
      hook: { es: 'Los jardines de Haifa, el hummus de Akko, un kibutz, un pescador del lago de Galilea y una aldea drusa.', en: 'The Haifa gardens, hummus in Akko, a kibbutz, a fisherman on the Sea of Galilee and a Druze village.' },
      marks: [{ kind: 'pine', dist: 8, side: 0, size: 1.2 }, { kind: 'house', dist: 5, side: -6, color: '#e9dcc0' }, { kind: 'house', dist: 5, side: 6, color: '#3f8f4a' }],
      spots: [
        { id: 'jardines', name: { es: 'Los jardines de Haifa', en: 'The Haifa gardens' } },
        { id: 'akko', name: { es: 'El hummus de Akko', en: 'Hummus in Akko' } },
        { id: 'kibutz', name: { es: 'Un kibutz', en: 'A kibbutz' } },
        { id: 'galilea', name: { es: 'El lago de Galilea', en: 'The Sea of Galilee' } },
        { id: 'drusa', name: { es: 'Una aldea drusa del Carmelo', en: 'A Druze village on Mount Carmel' } },
      ],
    },
    {
      id: 'sur', sign: 'NÉGUEV', shape: 'Néguev', at: { x: -4, z: 44 }, color: '#d9813b', sound: 'ranch',
      name: { es: 'El Sur', en: 'The South' }, zone: { es: 'El desierto, el mar Muerto y el mar Rojo', en: 'The desert, the Dead Sea and the Red Sea' },
      hook: { es: 'Flotar en el mar Muerto, el amanecer en Masada, las estrellas del cráter Ramón, una tienda beduina y el arrecife de Eilat.', en: 'Floating in the Dead Sea, sunrise on Masada, the stars of the Ramon crater, a Bedouin tent and the Eilat reef.' },
      marks: [{ kind: 'peak', dist: 9, side: 0, size: 1.1 }, { kind: 'palm', dist: 5, side: -6 }, { kind: 'house', dist: 5, side: 6, color: '#d9b77a' }],
      spots: [
        { id: 'mar-muerto', name: { es: 'Flotar en el mar Muerto', en: 'Floating in the Dead Sea' } },
        { id: 'masada', name: { es: 'El amanecer en Masada', en: 'Sunrise on Masada' } },
        { id: 'ramon', name: { es: 'Las estrellas del cráter Ramón', en: 'The stars of the Ramon crater' } },
        { id: 'beduina', name: { es: 'Una tienda beduina en el Néguev', en: 'A Bedouin tent in the Negev' } },
        { id: 'eilat', name: { es: 'El arrecife de Eilat', en: 'The Eilat reef' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the region. They load only in
// the browser: the server build (import.meta.env.SSR) drops these chunks, which keeps the
// Worker bundle inside its memory budget (tests/worker-startup.test.mjs).
export const loadContent = (id: string): Promise<RegionContent> => (import.meta as unknown as { env?: { SSR?: boolean } }).env?.SSR ? Promise.reject(new Error('browser only')) : ({
  'tel-aviv': () => import('./contenido/tel-aviv.mjs'),
  jerusalen: () => import('./contenido/jerusalen.mjs'),
  norte: () => import('./contenido/norte.mjs'),
  sur: () => import('./contenido/sur.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
