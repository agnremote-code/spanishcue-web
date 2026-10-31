// México 3D · the country as the map shows it: four states, each a floating
// island around the airport. A state is one entry here, one layout in
// zonas.ts (built by app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const MEXICO: CountryInfo = {
  id: 'mexico',
  lessonId: 210,
  name: { es: 'México', en: 'Mexico' },
  regionWord: { one: 'un estado', many: 'estados' },
  welcome: { es: 'BIENVENIDO A MÉXICO', en: 'WELCOME TO MEXICO' },
  regions: [
    {
      id: 'cdmx', sign: 'CIUDAD DE MÉXICO', shape: 'Ciudad de México', at: { x: -50, z: -6 }, color: '#c8553d', sound: 'city',
      name: { es: 'Ciudad de México', en: 'Mexico City' }, zone: { es: 'El centro y Xochimilco', en: 'Downtown and Xochimilco' },
      hook: { es: 'Mercados, metro, museos y canales llenos de flores.', en: 'Markets, subway, museums and canals full of flowers.' },
      marks: [{ kind: 'tower', dist: 7, side: -4, color: '#d8c7a8' }, { kind: 'tower', dist: 9, side: 1, size: 1.3, color: '#b8a58a' }, { kind: 'dome', dist: 6, side: 5, color: '#c9a227' }],
      spots: [
        { id: 'mercado', name: { es: 'El mercado', en: 'The market' } },
        { id: 'metro', name: { es: 'El metro', en: 'The subway' } },
        { id: 'cafe', name: { es: 'El café de la Roma', en: 'The café in Roma' } },
        { id: 'museo', name: { es: 'El museo', en: 'The museum' } },
        { id: 'trajinera', name: { es: 'La trajinera de Xochimilco', en: 'The Xochimilco boat' } },
      ],
    },
    {
      id: 'jalisco', sign: 'JALISCO', shape: 'Jalisco', at: { x: -12, z: -40 }, color: '#2f7d6d', sound: 'city',
      name: { es: 'Jalisco', en: 'Jalisco' }, zone: { es: 'Guadalajara', en: 'Guadalajara' },
      hook: { es: 'Mariachis, tequila, tortas ahogadas y un lago enorme.', en: 'Mariachi bands, tequila, drowned sandwiches and a huge lake.' },
      marks: [{ kind: 'tower', dist: 8, side: -2, size: 1.2, color: '#e3c25a' }, { kind: 'tower', dist: 8, side: 2, size: 1.2, color: '#e3c25a' }, { kind: 'house', dist: 5, side: 6, color: '#e9a23b' }],
      spots: [
        { id: 'tortas', name: { es: 'El puesto de tortas ahogadas', en: 'The drowned sandwich stand' } },
        { id: 'tequila', name: { es: 'La destilería', en: 'The distillery' } },
        { id: 'mariachis', name: { es: 'La plaza de los mariachis', en: 'The mariachi square' } },
        { id: 'escuela', name: { es: 'La escuela de idiomas', en: 'The language school' } },
        { id: 'chapala', name: { es: 'El mirador del lago de Chapala', en: 'The Lake Chapala lookout' } },
      ],
    },
    {
      id: 'oaxaca', sign: 'OAXACA', shape: 'Oaxaca', at: { x: 46, z: -30 }, color: '#8a4f9e', sound: 'ranch',
      name: { es: 'Oaxaca', en: 'Oaxaca' }, zone: { es: 'La ciudad de Oaxaca', en: 'Oaxaca City' },
      hook: { es: 'Colores, mole, mezcal, alebrijes y ruinas zapotecas.', en: 'Colours, mole, mezcal, alebrijes and Zapotec ruins.' },
      marks: [{ kind: 'pyramid', dist: 8, side: 0, color: '#bfae8e' }, { kind: 'house', dist: 5, side: -6, color: '#e06c9f' }, { kind: 'house', dist: 5, side: 6, color: '#56b3c9' }],
      spots: [
        { id: 'comedor', name: { es: 'El comedor de mole', en: 'The mole eatery' } },
        { id: 'alebrijes', name: { es: 'El taller de alebrijes', en: 'The alebrije workshop' } },
        { id: 'iglesia', name: { es: 'La iglesia de Santo Domingo', en: 'Santo Domingo church' } },
        { id: 'mezcal', name: { es: 'La mezcalería', en: 'The mezcal bar' } },
        { id: 'guelaguetza', name: { es: 'El escenario de la Guelaguetza', en: 'The Guelaguetza stage' } },
      ],
    },
    {
      id: 'quintana-roo', sign: 'QUINTANA ROO', shape: 'Quintana Roo', at: { x: 44, z: 40 }, color: '#2b9bc4', sound: 'beach',
      name: { es: 'Quintana Roo', en: 'Quintana Roo' }, zone: { es: 'Cancún y Tulum', en: 'Cancún and Tulum' },
      hook: { es: 'El Caribe, cenotes, arrecifes y ruinas mayas frente al mar.', en: 'The Caribbean, cenotes, reefs and Maya ruins by the sea.' },
      marks: [{ kind: 'palm', dist: 5, side: -5 }, { kind: 'palm', dist: 7, side: 4 }, { kind: 'pyramid', dist: 9, side: -1, size: 0.8, color: '#cdbf9f' }, { kind: 'palm', dist: 3.5, side: 7 }],
      spots: [
        { id: 'hotel', name: { es: 'La recepción del hotel', en: 'The hotel reception' } },
        { id: 'playa', name: { es: 'La playa', en: 'The beach' } },
        { id: 'cenote', name: { es: 'El cenote', en: 'The cenote' } },
        { id: 'buceo', name: { es: 'El centro de buceo', en: 'The diving centre' } },
        { id: 'tulum', name: { es: 'Las ruinas de Tulum', en: 'The Tulum ruins' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the state. They load only in
// the browser: the server build (import.meta.env.SSR) drops these chunks, which keeps the
// Worker bundle inside its memory budget (tests/worker-startup.test.mjs).
export const loadContent = (id: string): Promise<RegionContent> => (import.meta as unknown as { env?: { SSR?: boolean } }).env?.SSR ? Promise.reject(new Error('browser only')) : ({
  cdmx: () => import('./contenido/cdmx.mjs'),
  jalisco: () => import('./contenido/jalisco.mjs'),
  oaxaca: () => import('./contenido/oaxaca.mjs'),
  'quintana-roo': () => import('./contenido/quintana-roo.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
