// Suecia 3D · the country as the map shows it: four regions, each a floating
// island around the airport. A region is one entry here, one layout in
// zonas.ts (built by app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const SUECIA: CountryInfo = {
  id: 'suecia',
  lessonId: 227,
  name: { es: 'Suecia', en: 'Sweden' },
  welcome: { es: 'BIENVENIDO A SUECIA', en: 'WELCOME TO SWEDEN' },
  regions: [
    {
      id: 'estocolmo', sign: 'ESTOCOLMO', shape: 'Estocolmo', at: { x: 46, z: -30 }, color: '#2f5d8a', sound: 'coast',
      name: { es: 'Estocolmo', en: 'Stockholm' }, zone: { es: 'La ciudad sobre catorce islas', en: 'The city on fourteen islands' },
      hook: { es: 'Fika, el barco Vasa, ferris a las islas, un mercado antiguo y la cena del Nobel.', en: 'Fika, the Vasa ship, ferries to the islands, an old food hall and the Nobel dinner.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.3, color: '#b3543a' }, { kind: 'house', dist: 5, side: -6, color: '#e9a23b' }, { kind: 'house', dist: 5, side: 6, color: '#c9343a' }],
      spots: [
        { id: 'fika', name: { es: 'El café de la fika', en: 'The fika café' } },
        { id: 'vasa', name: { es: 'El Museo Vasa', en: 'The Vasa Museum' } },
        { id: 'ferry', name: { es: 'El ferry al archipiélago', en: 'The ferry to the archipelago' } },
        { id: 'mercado', name: { es: 'El mercado de Östermalm', en: 'The Östermalm food hall' } },
        { id: 'nobel', name: { es: 'El Ayuntamiento y la cena del Nobel', en: 'City Hall and the Nobel dinner' } },
      ],
    },
    {
      id: 'gotemburgo', sign: 'GOTEMBURGO', shape: 'Gotemburgo', at: { x: -12, z: -40 }, color: '#3f8f6b', sound: 'city',
      name: { es: 'Gotemburgo', en: 'Gothenburg' }, zone: { es: 'El puerto y la costa oeste', en: 'The harbour and the west coast' },
      hook: { es: 'Un parque de atracciones, una fábrica de coches, bollos gigantes, tranvías y un festival.', en: 'An amusement park, a car factory, giant buns, trams and a festival.' },
      marks: [{ kind: 'tower', dist: 8, side: -3, size: 1.1, color: '#d9475b' }, { kind: 'house', dist: 5, side: 5, color: '#e9dcc0' }, { kind: 'house', dist: 4.5, side: -6, color: '#7aa35a' }],
      spots: [
        { id: 'liseberg', name: { es: 'El parque de atracciones Liseberg', en: 'Liseberg amusement park' } },
        { id: 'volvo', name: { es: 'La fábrica de coches', en: 'The car factory' } },
        { id: 'haga', name: { es: 'La panadería de Haga', en: 'The bakery in Haga' } },
        { id: 'tranvia', name: { es: 'El tranvía de Gotemburgo', en: 'The Gothenburg tram' } },
        { id: 'festival', name: { es: 'El festival de música', en: 'The music festival' } },
      ],
    },
    {
      id: 'laponia', sign: 'LAPONIA', shape: 'Laponia', at: { x: -50, z: -6 }, color: '#6b8fb3', sound: 'mountain',
      name: { es: 'Laponia', en: 'Lapland' }, zone: { es: 'Kiruna y el Ártico', en: 'Kiruna and the Arctic' },
      hook: { es: 'Un hotel de hielo, renos de los sami, auroras boreales, sauna y una ciudad que se muda.', en: 'An ice hotel, Sami reindeer, northern lights, sauna and a town that is moving.' },
      marks: [{ kind: 'pine', dist: 5, side: -5 }, { kind: 'peak', dist: 9, side: 0, size: 1.2, snow: true }, { kind: 'pine', dist: 6, side: 5 }, { kind: 'pine', dist: 3.5, side: -7 }],
      spots: [
        { id: 'hotel-hielo', name: { es: 'El Hotel de Hielo', en: 'The Ice Hotel' } },
        { id: 'renos', name: { es: 'Los renos de los sami', en: 'The Sami reindeer' } },
        { id: 'aurora', name: { es: 'La noche de la aurora boreal', en: 'The northern lights night' } },
        { id: 'sauna', name: { es: 'La sauna junto al lago helado', en: 'The sauna by the frozen lake' } },
        { id: 'kiruna', name: { es: 'Kiruna, la ciudad que se muda', en: 'Kiruna, the town that is moving' } },
      ],
    },
    {
      id: 'malmo', sign: 'MALMÖ', shape: 'Malmö', at: { x: -4, z: 44 }, color: '#e9a23b', sound: 'beach',
      name: { es: 'Malmö y Escania', en: 'Malmö and Scania' }, zone: { es: 'El sur, frente a Dinamarca', en: 'The south, facing Denmark' },
      hook: { es: 'Bicis, el puente a Copenhague, baños en el mar, campos amarillos y un mercado de mil idiomas.', en: 'Bikes, the bridge to Copenhagen, sea baths, yellow fields and a market of a thousand languages.' },
      marks: [{ kind: 'tower', dist: 8, side: 2, size: 1.5, color: '#e8edf2' }, { kind: 'house', dist: 5, side: -6, color: '#f2c14e' }, { kind: 'house', dist: 5, side: 6, color: '#f4efe4' }],
      spots: [
        { id: 'bicicleta', name: { es: 'La ciudad en bicicleta', en: 'The city by bike' } },
        { id: 'puente', name: { es: 'El tren del puente de Öresund', en: 'The Öresund bridge train' } },
        { id: 'kallbadhus', name: { es: 'Los baños fríos de Ribersborg', en: 'The Ribersborg cold baths' } },
        { id: 'granja', name: { es: 'La granja entre campos amarillos', en: 'The farm among yellow fields' } },
        { id: 'mollevangen', name: { es: 'La plaza de Möllevången', en: 'Möllevången square' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the region.
export const loadContent = (id: string): Promise<RegionContent> => ({
  estocolmo: () => import('./contenido/estocolmo.mjs'),
  gotemburgo: () => import('./contenido/gotemburgo.mjs'),
  laponia: () => import('./contenido/laponia.mjs'),
  malmo: () => import('./contenido/malmo.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
