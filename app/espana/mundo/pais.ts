// España 3D · the country as the map shows it: four regions, each a floating
// island around the airport. A region is one entry here, one layout in
// zonas.ts (built by app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ESPANA: CountryInfo = {
  id: 'espana',
  lessonId: 229,
  name: { es: 'España', en: 'Spain' },
  welcome: { es: 'BIENVENIDO A ESPAÑA', en: 'WELCOME TO SPAIN' },
  regions: [
    {
      id: 'madrid', sign: 'MADRID', shape: 'Madrid', at: { x: 46, z: -30 }, color: '#c9343a', sound: 'city',
      name: { es: 'Madrid', en: 'Madrid' }, zone: { es: 'El centro, el Retiro y La Latina', en: 'The centre, the Retiro and La Latina' },
      hook: { es: 'Churros al amanecer, el Prado, las barcas del Retiro, tapas y el Rastro.', en: 'Churros at dawn, the Prado, the Retiro boats, tapas and the Rastro.' },
      marks: [{ kind: 'dome', dist: 7, side: -2, color: '#e9dcc0' }, { kind: 'house', dist: 5, side: -6, color: '#d98a5a' }, { kind: 'house', dist: 5, side: 6, color: '#f2c14e' }],
      spots: [
        { id: 'churreria', name: { es: 'La chocolatería de churros', en: 'The churro café' } },
        { id: 'prado', name: { es: 'El Museo del Prado', en: 'The Prado Museum' } },
        { id: 'retiro', name: { es: 'Las barcas del Retiro', en: 'The Retiro boats' } },
        { id: 'tapas', name: { es: 'El bar de tapas', en: 'The tapas bar' } },
        { id: 'rastro', name: { es: 'El Rastro', en: 'The Rastro flea market' } },
      ],
    },
    {
      id: 'cataluna', sign: 'CATALUÑA', shape: 'Cataluña', at: { x: -12, z: -40 }, color: '#e9a23b', sound: 'coast',
      name: { es: 'Cataluña', en: 'Catalonia' }, zone: { es: 'Barcelona', en: 'Barcelona' },
      hook: { es: 'Gaudí, el mercado de La Boqueria, la playa, los castells y el fútbol.', en: 'Gaudí, La Boqueria market, the beach, the human towers and football.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.3, color: '#d8c49a' }, { kind: 'palm', dist: 5, side: -6 }, { kind: 'house', dist: 5, side: 6, color: '#e9dcc0' }],
      spots: [
        { id: 'sagrada', name: { es: 'La Sagrada Família', en: 'The Sagrada Família' } },
        { id: 'boqueria', name: { es: 'El mercado de La Boqueria', en: 'La Boqueria market' } },
        { id: 'barceloneta', name: { es: 'La playa de la Barceloneta', en: 'Barceloneta beach' } },
        { id: 'castells', name: { es: 'Los castells', en: 'The human towers' } },
        { id: 'estadio', name: { es: 'El estadio de fútbol', en: 'The football stadium' } },
      ],
    },
    {
      id: 'andalucia', sign: 'ANDALUCÍA', shape: 'Andalucía', at: { x: -50, z: -6 }, color: '#3f8f6b', sound: 'ranch',
      name: { es: 'Andalucía', en: 'Andalusia' }, zone: { es: 'Sevilla, Granada, Jaén y Cádiz', en: 'Seville, Granada, Jaén and Cádiz' },
      hook: { es: 'Flamenco, la Alhambra, olivos sin fin, coches de caballos y el carnaval.', en: 'Flamenco, the Alhambra, endless olive trees, horse carriages and the carnival.' },
      marks: [{ kind: 'tower', dist: 8, side: -2, size: 1.2, color: '#d9a066' }, { kind: 'house', dist: 5, side: -6, color: '#f4efe4' }, { kind: 'palm', dist: 5, side: 6 }],
      spots: [
        { id: 'flamenco', name: { es: 'El tablao flamenco', en: 'The flamenco club' } },
        { id: 'alhambra', name: { es: 'La Alhambra de Granada', en: 'The Alhambra in Granada' } },
        { id: 'olivar', name: { es: 'El olivar de Jaén', en: 'The olive grove in Jaén' } },
        { id: 'coche', name: { es: 'El coche de caballos', en: 'The horse carriage' } },
        { id: 'carnaval', name: { es: 'El carnaval de Cádiz', en: 'The Cádiz carnival' } },
      ],
    },
    {
      id: 'valencia', sign: 'VALENCIA', shape: 'Valencia', at: { x: -4, z: 44 }, color: '#e8743b', sound: 'beach',
      name: { es: 'Comunidad Valenciana', en: 'Valencia region' }, zone: { es: 'Valencia, la Albufera y Benidorm', en: 'Valencia, the Albufera and Benidorm' },
      hook: { es: 'Paella junto al lago, fallas, naranjos, edificios futuristas y rascacielos frente al mar.', en: 'Paella by the lake, fallas, orange trees, futuristic buildings and skyscrapers by the sea.' },
      marks: [{ kind: 'palm', dist: 5, side: -5 }, { kind: 'dome', dist: 8, side: 2, color: '#f4f6f8' }, { kind: 'palm', dist: 6, side: 6 }],
      spots: [
        { id: 'paella', name: { es: 'El restaurante de paella en la Albufera', en: 'The paella restaurant by the Albufera' } },
        { id: 'fallas', name: { es: 'El taller de fallas', en: 'The fallas workshop' } },
        { id: 'naranjos', name: { es: 'El huerto de naranjos', en: 'The orange grove' } },
        { id: 'ciencias', name: { es: 'La Ciudad de las Artes y las Ciencias', en: 'The City of Arts and Sciences' } },
        { id: 'benidorm', name: { es: 'La recepción de un hotel en Benidorm', en: 'A hotel reception in Benidorm' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the region.
export const loadContent = (id: string): Promise<RegionContent> => ({
  madrid: () => import('./contenido/madrid.mjs'),
  cataluna: () => import('./contenido/cataluna.mjs'),
  andalucia: () => import('./contenido/andalucia.mjs'),
  valencia: () => import('./contenido/valencia.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
