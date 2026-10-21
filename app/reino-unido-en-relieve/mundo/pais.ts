// Reino Unido 3D · the country as the map shows it: four nations, each a floating
// island around the airport. A nation is one entry here, one layout in zonas.ts
// (built by app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const REINO_UNIDO: CountryInfo = {
  id: 'reino-unido',
  lessonId: 32,
  name: { es: 'Reino Unido', en: 'United Kingdom' },
  welcome: { es: 'BIENVENIDO AL REINO UNIDO', en: 'WELCOME TO THE UNITED KINGDOM' },
  regions: [
    {
      id: 'inglaterra', sign: 'INGLATERRA', shape: 'Inglaterra', at: { x: 46, z: -30 }, color: '#c8102e', sound: 'city',
      name: { es: 'Inglaterra', en: 'England' }, zone: { es: 'Londres, Oxford y Liverpool', en: 'London, Oxford and Liverpool' },
      hook: { es: 'Un pub de barrio, el mercado de Camden, el metro, un colegio de Oxford y los Beatles.', en: 'A local pub, Camden Market, the Tube, an Oxford college and the Beatles.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.4, color: '#c9a46a' }, { kind: 'house', dist: 5, side: -6, color: '#b3543a' }, { kind: 'house', dist: 5, side: 6, color: '#2f4f7a' }],
      spots: [
        { id: 'pub', name: { es: 'El pub del barrio', en: 'The local pub' } },
        { id: 'camden', name: { es: 'El mercado de Camden', en: 'Camden Market' } },
        { id: 'metro', name: { es: 'El metro de Londres', en: 'The London Underground' } },
        { id: 'oxford', name: { es: 'Un colegio de Oxford', en: 'An Oxford college' } },
        { id: 'beatles', name: { es: 'El Liverpool de los Beatles', en: 'The Beatles’ Liverpool' } },
      ],
    },
    {
      id: 'escocia', sign: 'ESCOCIA', shape: 'Escocia', at: { x: -12, z: -40 }, color: '#2f5d8a', sound: 'mountain',
      name: { es: 'Escocia', en: 'Scotland' }, zone: { es: 'Edimburgo y las Tierras Altas', en: 'Edinburgh and the Highlands' },
      hook: { es: 'Un castillo sobre una roca, el lago Ness, el festival Fringe, kilts y montañas.', en: 'A castle on a rock, Loch Ness, the Fringe festival, kilts and mountains.' },
      marks: [{ kind: 'peak', dist: 9, side: 0, size: 1.2 }, { kind: 'pine', dist: 5, side: -6 }, { kind: 'house', dist: 5, side: 6, color: '#8a8a8a' }],
      spots: [
        { id: 'castillo', name: { es: 'El castillo de Edimburgo', en: 'Edinburgh Castle' } },
        { id: 'ness', name: { es: 'El lago Ness', en: 'Loch Ness' } },
        { id: 'fringe', name: { es: 'El festival Fringe', en: 'The Fringe festival' } },
        { id: 'kilts', name: { es: 'La tienda de faldas escocesas', en: 'The kilt maker’s shop' } },
        { id: 'highlands', name: { es: 'El refugio de las Tierras Altas', en: 'The Highlands mountain hut' } },
      ],
    },
    {
      id: 'gales', sign: 'GALES', shape: 'Gales', at: { x: -50, z: -6 }, color: '#3f8f4a', sound: 'ranch',
      name: { es: 'Gales', en: 'Wales' }, zone: { es: 'Cardiff, Snowdon y los valles', en: 'Cardiff, Snowdon and the valleys' },
      hook: { es: 'Rugby, un tren de montaña, una escuela en galés, ovejas y el pueblo del nombre más largo.', en: 'Rugby, a mountain railway, a Welsh-language school, sheep and the village with the longest name.' },
      marks: [{ kind: 'peak', dist: 9, side: 2, size: 1.1 }, { kind: 'house', dist: 5, side: -6, color: '#f4efe4' }, { kind: 'pine', dist: 5, side: 6 }],
      spots: [
        { id: 'rugby', name: { es: 'El estadio de rugby de Cardiff', en: 'The Cardiff rugby stadium' } },
        { id: 'snowdon', name: { es: 'El tren de la montaña Snowdon', en: 'The Snowdon mountain railway' } },
        { id: 'escuela', name: { es: 'La escuela en galés', en: 'The Welsh-language school' } },
        { id: 'ovejas', name: { es: 'La granja de ovejas', en: 'The sheep farm' } },
        { id: 'llanfair', name: { es: 'El pueblo del nombre más largo', en: 'The village with the longest name' } },
      ],
    },
    {
      id: 'irlanda-norte', sign: 'IRLANDA DEL NORTE', shape: 'Irlanda del Norte', at: { x: -4, z: 44 }, color: '#6b4fa0', sound: 'coast',
      name: { es: 'Irlanda del Norte', en: 'Northern Ireland' }, zone: { es: 'Belfast y la costa de Antrim', en: 'Belfast and the Antrim coast' },
      hook: { es: 'La Calzada del Gigante, el Titanic, los murales, un mercado y los árboles de una serie famosa.', en: 'The Giant’s Causeway, the Titanic, the murals, a market and the trees from a famous series.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.2, color: '#4a6a8a' }, { kind: 'house', dist: 5, side: -6, color: '#b3543a' }, { kind: 'pine', dist: 5, side: 6 }],
      spots: [
        { id: 'calzada', name: { es: 'La Calzada del Gigante', en: 'The Giant’s Causeway' } },
        { id: 'titanic', name: { es: 'El museo del Titanic', en: 'Titanic Belfast' } },
        { id: 'murales', name: { es: 'Los murales de Belfast', en: 'The Belfast murals' } },
        { id: 'mercado', name: { es: 'El mercado de St George', en: 'St George’s Market' } },
        { id: 'caminos', name: { es: 'El camino de los árboles oscuros', en: 'The Dark Hedges' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the nation. They load only in
// the browser: the server build (import.meta.env.SSR) drops these chunks, which keeps the
// Worker bundle inside its memory budget (tests/worker-startup.test.mjs).
export const loadContent = (id: string): Promise<RegionContent> => (import.meta as unknown as { env: { SSR: boolean } }).env.SSR ? Promise.reject(new Error('browser only')) : ({
  inglaterra: () => import('./contenido/inglaterra.mjs'),
  escocia: () => import('./contenido/escocia.mjs'),
  gales: () => import('./contenido/gales.mjs'),
  'irlanda-norte': () => import('./contenido/irlanda-norte.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
