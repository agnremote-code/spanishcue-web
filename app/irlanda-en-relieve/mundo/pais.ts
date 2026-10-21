// Irlanda 3D · the country as the map shows it: four regions, each a floating island
// around the airport. A region is one entry here, one layout in zonas.ts (built by
// app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const IRLANDA: CountryInfo = {
  id: 'irlanda',
  lessonId: 33,
  name: { es: 'Irlanda', en: 'Ireland' },
  welcome: { es: 'BIENVENIDO A IRLANDA', en: 'WELCOME TO IRELAND' },
  regions: [
    {
      id: 'dublin', sign: 'DUBLÍN', shape: 'Dublín', at: { x: 46, z: -30 }, color: '#169b62', sound: 'city',
      name: { es: 'Dublín', en: 'Dublin' }, zone: { es: 'La capital y su costa', en: 'The capital and its coast' },
      hook: { es: 'Una sesión de música, la biblioteca del Trinity, hurling, un mercado callejero y el tren de la costa.', en: 'A music session, the Trinity library, hurling, a street market and the coastal train.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.2, color: '#9aa6a0' }, { kind: 'house', dist: 5, side: -6, color: '#b3543a' }, { kind: 'house', dist: 5, side: 6, color: '#2f4f7a' }],
      spots: [
        { id: 'musica', name: { es: 'La sesión de música tradicional', en: 'The traditional music session' } },
        { id: 'trinity', name: { es: 'La biblioteca del Trinity College', en: 'The Trinity College library' } },
        { id: 'hurling', name: { es: 'El hurling en Croke Park', en: 'Hurling at Croke Park' } },
        { id: 'moore', name: { es: 'El mercado de Moore Street', en: 'The Moore Street market' } },
        { id: 'dart', name: { es: 'El tren de la costa a Howth', en: 'The coastal train to Howth' } },
      ],
    },
    {
      id: 'galway', sign: 'GALWAY', shape: 'Galway', at: { x: -12, z: -40 }, color: '#7a2e3a', sound: 'coast',
      name: { es: 'Galway y Connemara', en: 'Galway and Connemara' }, zone: { es: 'El oeste salvaje', en: 'The wild west' },
      hook: { es: 'Las islas de Aran, los acantilados de Moher, un festival en la calle, ponis y ostras.', en: 'The Aran Islands, the Cliffs of Moher, a street festival, ponies and oysters.' },
      marks: [{ kind: 'peak', dist: 9, side: 0, size: 1.1 }, { kind: 'house', dist: 5, side: -6, color: '#f4efe4' }, { kind: 'house', dist: 5, side: 6, color: '#e9a23b' }],
      spots: [
        { id: 'aran', name: { es: 'Las islas de Aran', en: 'The Aran Islands' } },
        { id: 'moher', name: { es: 'Los acantilados de Moher', en: 'The Cliffs of Moher' } },
        { id: 'festival', name: { es: 'El festival en las calles de Galway', en: 'The festival in the streets of Galway' } },
        { id: 'connemara', name: { es: 'Los campos de Connemara', en: 'The fields of Connemara' } },
        { id: 'ostras', name: { es: 'El festival de las ostras', en: 'The oyster festival' } },
      ],
    },
    {
      id: 'kerry', sign: 'KERRY', shape: 'Kerry', at: { x: -50, z: -6 }, color: '#3f8f4a', sound: 'mountain',
      name: { es: 'Kerry', en: 'Kerry' }, zone: { es: 'Montañas, lagos y playas del suroeste', en: 'Mountains, lakes and beaches of the south-west' },
      hook: { es: 'La carretera del Anillo, la isla de los monjes, un carro de caballos, surf y el puerto de Dingle.', en: 'The Ring road, the monks’ island, a jaunting car, surfing and Dingle harbour.' },
      marks: [{ kind: 'peak', dist: 9, side: 2, size: 1.3 }, { kind: 'pine', dist: 5, side: -6 }, { kind: 'house', dist: 5, side: 6, color: '#d9475b' }],
      spots: [
        { id: 'anillo', name: { es: 'La carretera del Anillo de Kerry', en: 'The Ring of Kerry road' } },
        { id: 'skellig', name: { es: 'El barco a Skellig Michael', en: 'The boat to Skellig Michael' } },
        { id: 'killarney', name: { es: 'El carro de caballos de Killarney', en: 'The jaunting car in Killarney' } },
        { id: 'surf', name: { es: 'La playa de surf de Inch', en: 'The surf beach at Inch' } },
        { id: 'dingle', name: { es: 'El puerto de Dingle', en: 'Dingle harbour' } },
      ],
    },
    {
      id: 'cork', sign: 'CORK', shape: 'Cork', at: { x: -4, z: 44 }, color: '#e8743b', sound: 'beach',
      name: { es: 'Cork', en: 'Cork' }, zone: { es: 'La ciudad rebelde y su costa sur', en: 'The rebel city and its south coast' },
      hook: { es: 'Un mercado de doscientos años, el puerto de los emigrantes, la piedra de Blarney, Kinsale y jazz.', en: 'A two-hundred-year-old market, the emigrants’ harbour, the Blarney Stone, Kinsale and jazz.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.1, color: '#8a8478' }, { kind: 'house', dist: 5, side: -6, color: '#2f8fd4' }, { kind: 'house', dist: 5, side: 6, color: '#f2c14e' }],
      spots: [
        { id: 'mercado', name: { es: 'El Mercado Inglés de Cork', en: 'The English Market in Cork' } },
        { id: 'cobh', name: { es: 'El puerto de Cobh', en: 'Cobh harbour' } },
        { id: 'blarney', name: { es: 'El castillo de Blarney', en: 'Blarney Castle' } },
        { id: 'kinsale', name: { es: 'El puerto de Kinsale', en: 'Kinsale harbour' } },
        { id: 'jazz', name: { es: 'El festival de jazz de Cork', en: 'The Cork jazz festival' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the region. They load only in
// the browser: the server build (import.meta.env.SSR) drops these chunks, which keeps the
// Worker bundle inside its memory budget (tests/worker-startup.test.mjs).
export const loadContent = (id: string): Promise<RegionContent> => (import.meta as unknown as { env: { SSR: boolean } }).env.SSR ? Promise.reject(new Error('browser only')) : ({
  dublin: () => import('./contenido/dublin.mjs'),
  galway: () => import('./contenido/galway.mjs'),
  kerry: () => import('./contenido/kerry.mjs'),
  cork: () => import('./contenido/cork.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
