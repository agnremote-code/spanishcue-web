// Suiza 3D · the country as the map shows it: four regions, each a floating island
// around the airport. A region is one entry here, one layout in zonas.ts (built by
// app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const SUIZA: CountryInfo = {
  id: 'suiza',
  lessonId: 29,
  name: { es: 'Suiza', en: 'Switzerland' },
  welcome: { es: 'BIENVENIDO A SUIZA', en: 'WELCOME TO SWITZERLAND' },
  regions: [
    {
      id: 'zurich', sign: 'ZÚRICH', shape: 'Zúrich', at: { x: 46, z: -30 }, color: '#d52b1e', sound: 'city',
      name: { es: 'Zúrich', en: 'Zurich' }, zone: { es: 'La ciudad del tren puntual', en: 'The city of the punctual train' },
      hook: { es: 'Un taller de chocolate, la estación central, nadar en el río, el día del reciclaje y un domingo de votación.', en: 'A chocolate workshop, the main station, swimming in the river, recycling day and a voting Sunday.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.1, color: '#3f6b4a' }, { kind: 'house', dist: 5, side: -6, color: '#e9dcc0' }, { kind: 'house', dist: 5, side: 6, color: '#d52b1e' }],
      spots: [
        { id: 'chocolate', name: { es: 'El taller de chocolate', en: 'The chocolate workshop' } },
        { id: 'tren', name: { es: 'La estación central de Zúrich', en: 'Zurich main station' } },
        { id: 'rio', name: { es: 'Nadar en el río Limmat', en: 'Swimming in the Limmat' } },
        { id: 'reciclaje', name: { es: 'El día del reciclaje', en: 'Recycling day' } },
        { id: 'votacion', name: { es: 'El domingo de votación', en: 'Voting Sunday' } },
      ],
    },
    {
      id: 'ginebra', sign: 'GINEBRA', shape: 'Ginebra', at: { x: -12, z: -40 }, color: '#2f6fb0', sound: 'coast',
      name: { es: 'Ginebra y el lago Lemán', en: 'Geneva and Lake Geneva' }, zone: { es: 'La Suiza que habla francés', en: 'French-speaking Switzerland' },
      hook: { es: 'La sede de la ONU, el barco del lago, un relojero, los viñedos de Lavaux y el queso de Gruyères.', en: 'The UN building, the lake steamer, a watchmaker, the Lavaux vineyards and Gruyères cheese.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.2, color: '#f4efe4' }, { kind: 'house', dist: 5, side: -6, color: '#e9dcc0' }, { kind: 'house', dist: 5, side: 6, color: '#2f6fb0' }],
      spots: [
        { id: 'onu', name: { es: 'La sede de la ONU', en: 'The United Nations building' } },
        { id: 'lago', name: { es: 'El barco del lago Lemán', en: 'The Lake Geneva steamer' } },
        { id: 'relojeria', name: { es: 'El taller del relojero', en: 'The watchmaker’s workshop' } },
        { id: 'lavaux', name: { es: 'Los viñedos de Lavaux', en: 'The Lavaux vineyards' } },
        { id: 'queso', name: { es: 'La quesería de Gruyères', en: 'The Gruyères cheese dairy' } },
      ],
    },
    {
      id: 'tesino', sign: 'TESINO', shape: 'Tesino', at: { x: -50, z: -6 }, color: '#e9a23b', sound: 'tropic',
      name: { es: 'El Tesino', en: 'Ticino' }, zone: { es: 'La Suiza que habla italiano', en: 'Italian-speaking Switzerland' },
      hook: { es: 'Un café en el lago de Lugano, el mercado y los castillos de Bellinzona, un grotto en el bosque y el río Verzasca.', en: 'A café on Lake Lugano, the market and castles of Bellinzona, a grotto in the woods and the Verzasca river.' },
      marks: [{ kind: 'palm', dist: 8, side: 0, size: 1.1 }, { kind: 'tower', dist: 5, side: -6, size: 0.8, color: '#9a8a70' }, { kind: 'house', dist: 5, side: 6, color: '#e9a23b' }],
      spots: [
        { id: 'lugano', name: { es: 'El café del lago de Lugano', en: 'The café on Lake Lugano' } },
        { id: 'mercado', name: { es: 'El mercado de Bellinzona', en: 'The Bellinzona market' } },
        { id: 'grotto', name: { es: 'El grotto del bosque', en: 'The grotto in the woods' } },
        { id: 'castillos', name: { es: 'Los castillos de Bellinzona', en: 'The castles of Bellinzona' } },
        { id: 'verzasca', name: { es: 'El río Verzasca', en: 'The Verzasca river' } },
      ],
    },
    {
      id: 'alpes', sign: 'ALPES', shape: 'Valais', at: { x: -4, z: 44 }, color: '#5a7a9a', sound: 'mountain',
      name: { es: 'Los Alpes', en: 'The Alps' }, zone: { es: 'Glaciares, refugios y vacas en la montaña', en: 'Glaciers, huts and cows on the mountain' },
      hook: { es: 'Zermatt sin coches, el glaciar Aletsch, un refugio de montaña, los perros del San Bernardo y el pasto de verano.', en: 'Car-free Zermatt, the Aletsch glacier, a mountain hut, the St Bernard dogs and the summer pasture.' },
      marks: [{ kind: 'peak', dist: 9, side: 0, size: 1.3 }, { kind: 'pine', dist: 5, side: -6 }, { kind: 'house', dist: 5, side: 6, color: '#7a5233' }],
      spots: [
        { id: 'zermatt', name: { es: 'Zermatt, el pueblo sin coches', en: 'Zermatt, the car-free village' } },
        { id: 'glaciar', name: { es: 'El glaciar Aletsch', en: 'The Aletsch glacier' } },
        { id: 'refugio', name: { es: 'El refugio de montaña', en: 'The mountain hut' } },
        { id: 'san-bernardo', name: { es: 'Los perros del Gran San Bernardo', en: 'The Great St Bernard dogs' } },
        { id: 'alpage', name: { es: 'El pasto de verano', en: 'The summer pasture' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the region. They load only in
// the browser: the server build (import.meta.env.SSR) drops these chunks, which keeps the
// Worker bundle inside its memory budget (tests/worker-startup.test.mjs).
export const loadContent = (id: string): Promise<RegionContent> => (import.meta as unknown as { env: { SSR: boolean } }).env.SSR ? Promise.reject(new Error('browser only')) : ({
  zurich: () => import('./contenido/zurich.mjs'),
  ginebra: () => import('./contenido/ginebra.mjs'),
  tesino: () => import('./contenido/tesino.mjs'),
  alpes: () => import('./contenido/alpes.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
