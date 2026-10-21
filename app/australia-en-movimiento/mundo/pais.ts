// Australia 3D · the country as the map shows it: four regions, each a floating island
// around the airport. A region is one entry here, one layout in zonas.ts (built by
// app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const AUSTRALIA: CountryInfo = {
  id: 'australia',
  lessonId: 30,
  name: { es: 'Australia', en: 'Australia' },
  welcome: { es: 'BIENVENIDO A AUSTRALIA', en: 'WELCOME TO AUSTRALIA' },
  regions: [
    {
      id: 'nueva-gales', sign: 'SÍDNEY', shape: 'Nueva Gales del Sur', at: { x: 46, z: -30 }, color: '#2f8fd4', sound: 'city',
      name: { es: 'Nueva Gales del Sur', en: 'New South Wales' }, zone: { es: 'Sídney, su puerto y sus montañas', en: 'Sydney, its harbour and its mountains' },
      hook: { es: 'La Ópera, la playa de Bondi, el ferry de Manly, el mercado de pescado y las Montañas Azules.', en: 'The Opera House, Bondi beach, the Manly ferry, the fish market and the Blue Mountains.' },
      marks: [{ kind: 'dome', dist: 8, side: 0, size: 1.1, color: '#f4efe4' }, { kind: 'palm', dist: 5, side: -6 }, { kind: 'tower', dist: 5, side: 6, size: 0.8, color: '#9aa6a0' }],
      spots: [
        { id: 'opera', name: { es: 'La Ópera de Sídney', en: 'The Sydney Opera House' } },
        { id: 'bondi', name: { es: 'La playa de Bondi', en: 'Bondi beach' } },
        { id: 'ferry', name: { es: 'El ferry de Manly', en: 'The Manly ferry' } },
        { id: 'pescado', name: { es: 'El mercado de pescado de Sídney', en: 'The Sydney Fish Market' } },
        { id: 'montanas', name: { es: 'Las Montañas Azules', en: 'The Blue Mountains' } },
      ],
    },
    {
      id: 'victoria', sign: 'MELBOURNE', shape: 'Victoria', at: { x: -12, z: -40 }, color: '#1b2a4a', sound: 'coast',
      name: { es: 'Victoria', en: 'Victoria' }, zone: { es: 'Melbourne y la costa sur', en: 'Melbourne and the south coast' },
      hook: { es: 'Un café en un callejón, el tranvía, la Gran Ruta Oceánica, los pingüinos y el fútbol australiano.', en: 'A laneway café, the tram, the Great Ocean Road, the penguins and Australian football.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.2, color: '#c9a64a' }, { kind: 'house', dist: 5, side: -6, color: '#b3543a' }, { kind: 'house', dist: 5, side: 6, color: '#2f4f7a' }],
      spots: [
        { id: 'cafe', name: { es: 'El café del callejón', en: 'The laneway café' } },
        { id: 'tranvia', name: { es: 'El tranvía de Melbourne', en: 'The Melbourne tram' } },
        { id: 'ruta', name: { es: 'La Gran Ruta Oceánica', en: 'The Great Ocean Road' } },
        { id: 'pinguinos', name: { es: 'El desfile de los pingüinos', en: 'The penguin parade' } },
        { id: 'futbol', name: { es: 'El fútbol australiano en el MCG', en: 'Australian football at the MCG' } },
      ],
    },
    {
      id: 'queensland', sign: 'QUEENSLAND', shape: 'Queensland', at: { x: -50, z: -6 }, color: '#2fa38a', sound: 'tropic',
      name: { es: 'Queensland', en: 'Queensland' }, zone: { es: 'El arrecife, la selva y el sol', en: 'The reef, the rainforest and the sun' },
      hook: { es: 'La Gran Barrera de Coral, la selva de Daintree, los koalas, la isla K’gari y una granja de mangos.', en: 'The Great Barrier Reef, the Daintree rainforest, koalas, K’gari island and a mango farm.' },
      marks: [{ kind: 'palm', dist: 8, side: 0, size: 1.3 }, { kind: 'palm', dist: 5, side: -6 }, { kind: 'house', dist: 5, side: 6, color: '#f2c14e' }],
      spots: [
        { id: 'arrecife', name: { es: 'La Gran Barrera de Coral', en: 'The Great Barrier Reef' } },
        { id: 'daintree', name: { es: 'La selva de Daintree', en: 'The Daintree rainforest' } },
        { id: 'koalas', name: { es: 'El santuario de koalas', en: 'The koala sanctuary' } },
        { id: 'kgari', name: { es: 'La isla de arena K’gari', en: 'K’gari sand island' } },
        { id: 'mangos', name: { es: 'La granja de mangos', en: 'The mango farm' } },
      ],
    },
    {
      id: 'outback', sign: 'OUTBACK', shape: 'Territorio del Norte', at: { x: -4, z: 44 }, color: '#c4552f', sound: 'ranch',
      name: { es: 'El Outback', en: 'The Outback' }, zone: { es: 'El Territorio del Norte, rojo y enorme', en: 'The Northern Territory, red and vast' },
      hook: { es: 'Uluru, los médicos voladores, el mercado nocturno de Darwin, los cocodrilos de Kakadu y la Escuela del Aire.', en: 'Uluru, the flying doctors, the Darwin night market, the crocodiles of Kakadu and the School of the Air.' },
      marks: [{ kind: 'peak', dist: 9, side: 0, size: 1.1 }, { kind: 'house', dist: 5, side: -6, color: '#e9dcc0' }, { kind: 'palm', dist: 5, side: 6 }],
      spots: [
        { id: 'uluru', name: { es: 'Uluru al atardecer', en: 'Uluru at sunset' } },
        { id: 'doctora', name: { es: 'Los médicos voladores', en: 'The flying doctors' } },
        { id: 'darwin', name: { es: 'El mercado nocturno de Darwin', en: 'The Darwin night market' } },
        { id: 'kakadu', name: { es: 'Los cocodrilos de Kakadu', en: 'The crocodiles of Kakadu' } },
        { id: 'escuela', name: { es: 'La Escuela del Aire', en: 'The School of the Air' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the region. They load only in
// the browser: the server build (import.meta.env.SSR) drops these chunks, which keeps the
// Worker bundle inside its memory budget (tests/worker-startup.test.mjs).
export const loadContent = (id: string): Promise<RegionContent> => (import.meta as unknown as { env: { SSR: boolean } }).env.SSR ? Promise.reject(new Error('browser only')) : ({
  'nueva-gales': () => import('./contenido/nueva-gales.mjs'),
  victoria: () => import('./contenido/victoria.mjs'),
  queensland: () => import('./contenido/queensland.mjs'),
  outback: () => import('./contenido/outback.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
