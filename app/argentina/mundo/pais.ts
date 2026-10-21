// Argentina 3D · the country as the map shows it: four regions, each a floating
// island around the airport. A region is one entry here, one layout in
// zonas.ts (built by app/mundo-3d/plantilla.ts) and one content file.
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ARGENTINA: CountryInfo = {
  id: 'argentina',
  lessonId: 228,
  name: { es: 'Argentina', en: 'Argentina' },
  welcome: { es: 'BIENVENIDO A ARGENTINA', en: 'WELCOME TO ARGENTINA' },
  regions: [
    {
      id: 'buenos-aires', sign: 'BUENOS AIRES', shape: 'Buenos Aires', at: { x: 46, z: -30 }, color: '#4a8fc9', sound: 'city',
      name: { es: 'Buenos Aires', en: 'Buenos Aires' }, zone: { es: 'San Telmo, La Boca y el centro', en: 'San Telmo, La Boca and downtown' },
      hook: { es: 'Cafés antiguos, tango, casas de colores y una feria de antigüedades.', en: 'Old cafés, tango, colourful houses and an antiques fair.' },
      marks: [{ kind: 'tower', dist: 8, side: 0, size: 1.4, color: '#f2efe8' }, { kind: 'house', dist: 5, side: -6, color: '#e2574c' }, { kind: 'house', dist: 5, side: 6, color: '#f2c14e' }],
      spots: [
        { id: 'cafe', name: { es: 'El café notable', en: 'The historic café' } },
        { id: 'tango', name: { es: 'La milonga de San Telmo', en: 'The San Telmo tango hall' } },
        { id: 'caminito', name: { es: 'Caminito, en La Boca', en: 'Caminito, in La Boca' } },
        { id: 'retiro', name: { es: 'La estación de Retiro', en: 'Retiro station' } },
        { id: 'feria', name: { es: 'La feria de San Telmo', en: 'The San Telmo fair' } },
      ],
    },
    {
      id: 'cordoba', sign: 'CÓRDOBA', shape: 'Córdoba', at: { x: -12, z: -40 }, color: '#c98a3a', sound: 'ranch',
      name: { es: 'Córdoba', en: 'Córdoba' }, zone: { es: 'La ciudad y las sierras', en: 'The city and the hills' },
      hook: { es: 'Universidad, asado, parques, sierras y alfajores en la terminal.', en: 'University, barbecue, parks, hills and alfajores at the bus station.' },
      marks: [{ kind: 'dome', dist: 7, side: -2, color: '#e9dcc0' }, { kind: 'peak', dist: 9, side: 5, size: 0.8 }, { kind: 'house', dist: 5, side: -6, color: '#d9a066' }],
      spots: [
        { id: 'universidad', name: { es: 'La universidad', en: 'The university' } },
        { id: 'parrilla', name: { es: 'La parrilla', en: 'The steakhouse' } },
        { id: 'parque', name: { es: 'El Parque Sarmiento', en: 'Sarmiento Park' } },
        { id: 'sierras', name: { es: 'El mirador de las Sierras', en: 'The hills lookout' } },
        { id: 'terminal', name: { es: 'La terminal de ómnibus', en: 'The bus terminal' } },
      ],
    },
    {
      id: 'mendoza', sign: 'MENDOZA', shape: 'Mendoza', at: { x: -50, z: -6 }, color: '#8a3a5a', sound: 'mountain',
      name: { es: 'Mendoza', en: 'Mendoza' }, zone: { es: 'Viñedos y cordillera', en: 'Vineyards and the Andes' },
      hook: { es: 'Bodegas, vendimia, mercados, el Aconcagua y ríos de montaña.', en: 'Wineries, the grape harvest, markets, Aconcagua and mountain rivers.' },
      marks: [{ kind: 'peak', dist: 9, side: -3, size: 1.4, snow: true }, { kind: 'peak', dist: 8, side: 3, size: 1.1, snow: true }, { kind: 'house', dist: 4.5, side: 6, color: '#c9a46a' }],
      spots: [
        { id: 'bodega', name: { es: 'La bodega', en: 'The winery' } },
        { id: 'vinedo', name: { es: 'El viñedo en la vendimia', en: 'The vineyard at harvest time' } },
        { id: 'mercado', name: { es: 'El mercado central', en: 'The central market' } },
        { id: 'refugio', name: { es: 'El refugio del Aconcagua', en: 'The Aconcagua refuge' } },
        { id: 'rafting', name: { es: 'El rafting en el río Mendoza', en: 'Rafting on the Mendoza river' } },
      ],
    },
    {
      id: 'bariloche', sign: 'BARILOCHE', shape: 'Bariloche', at: { x: -4, z: 44 }, color: '#3f8f6b', sound: 'mountain',
      name: { es: 'Bariloche', en: 'Bariloche' }, zone: { es: 'El lago Nahuel Huapi', en: 'Lake Nahuel Huapi' },
      hook: { es: 'Chocolate, un lago enorme, esquí, cerveza artesanal y casas de piedra.', en: 'Chocolate, a huge lake, skiing, craft beer and stone houses.' },
      marks: [{ kind: 'pine', dist: 5, side: -5 }, { kind: 'pine', dist: 6, side: 5 }, { kind: 'peak', dist: 9, side: 0, size: 1.2, snow: true }, { kind: 'pine', dist: 3.5, side: -7 }],
      spots: [
        { id: 'chocolateria', name: { es: 'La chocolatería', en: 'The chocolate shop' } },
        { id: 'lago', name: { es: 'El puerto del lago', en: 'The lake harbour' } },
        { id: 'cerro', name: { es: 'El cerro Catedral', en: 'Cerro Catedral' } },
        { id: 'cerveceria', name: { es: 'La cervecería', en: 'The brewery' } },
        { id: 'campanario', name: { es: 'El Centro Cívico', en: 'The Centro Cívico' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the region.
export const loadContent = (id: string): Promise<RegionContent> => ({
  'buenos-aires': () => import('./contenido/buenos-aires.mjs'),
  cordoba: () => import('./contenido/cordoba.mjs'),
  mendoza: () => import('./contenido/mendoza.mjs'),
  bariloche: () => import('./contenido/bariloche.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => import('./zonas').then(module => module.ZONAS[id]);
