// Argentina 3D · what each region looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  'buenos-aires': plantilla({
    seed: 2281, style: 'mediterranean', palette: ['#e2574c', '#f2c14e', '#4a8fc9', '#7aa35a', '#f4efe4'], ground: 'cobble', plaza: '#cbbca3',
    trees: 'tree', light: 'golden', centre: 'statue', entrance: 'BUENOS AIRES',
    landmark: { kind: 'obelisk', color: '#f2efe8', accent: '#cfc8b8', label: 'OBELISCO' },
    spots: [
      { id: 'cafe', kind: 'cafe', sign: 'CAFÉ TORTONI', color: '#5a3a2a', who: { body: 'm', age: 'old', top: 'suit', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['mustache'], skin: '#e0b18a' } },
      { id: 'tango', kind: 'stage', sign: 'MILONGA', color: '#9e2b3a', who: { body: 'f', age: 'adult', top: 'dress', topColor: '#b3203a', hairStyle: 'bun', hairColor: '#1d1410', skin: '#e8c4a0' }, pose: 'dance' },
      { id: 'caminito', kind: 'shop', sign: 'CAMINITO', color: '#2f8fd4', who: { body: 'm', age: 'adult', top: 'tshirt', topColor: '#f2c14e', bottom: 'jeans', hairStyle: 'curly', extras: ['beard'], skin: '#c08a62' } },
      { id: 'retiro', kind: 'station', sign: 'ESTACIÓN RETIRO', color: '#6b4f3a', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#2f4f7a', bottom: 'skirt', hairStyle: 'bob', hairColor: '#7a5233', extras: ['glasses'], skin: '#e0b18a' } },
      { id: 'feria', kind: 'market', sign: 'FERIA DE SAN TELMO', color: '#c9a227', who: { body: 'm', age: 'elderly', top: 'coat', topColor: '#5a4632', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'bald', extras: ['glasses', 'beard'], skin: '#e8c4a0' } },
    ],
  }),
  cordoba: plantilla({
    seed: 2282, style: 'colonial', palette: ['#f4e3c3', '#c98a3a', '#e9dcc0', '#7fb069', '#d9a066'], ground: 'stone', plaza: '#d8c9a8',
    trees: 'tree', light: 'day', centre: 'fountain', entrance: 'CÓRDOBA',
    landmark: { kind: 'cathedral', color: '#e9dcc0', accent: '#7aa35a', label: 'CATEDRAL DE CÓRDOBA' },
    spots: [
      { id: 'universidad', kind: 'school', sign: 'UNIVERSIDAD NACIONAL', color: '#2f5d8a', who: { body: 'f', age: 'young', top: 'sweater', topColor: '#e07a5f', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#4a3326', extras: ['glasses'], skin: '#e0b18a' } },
      { id: 'parrilla', kind: 'restaurant', sign: 'PARRILLA DON HÉCTOR', color: '#7a2e2e', who: { body: 'm', age: 'old', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', hairStyle: 'short', hairColor: '#9a9a9a', extras: ['mustache'], skin: '#c08a62' }, pose: 'cook' },
      { id: 'parque', kind: 'park', sign: 'PARQUE SARMIENTO', color: '#4f8a3c', who: { body: 'f', age: 'young', top: 'hoodie', topColor: '#7a5aa8', bottom: 'jeans', hairStyle: 'long', hairColor: '#c9a46a', extras: ['headphones'], skin: '#e8c4a0' } },
      { id: 'sierras', kind: 'viewpoint', sign: 'MIRADOR DE LAS SIERRAS', color: '#8a6a3a', who: { body: 'm', age: 'adult', build: 'athletic', top: 'jacket', topColor: '#d9475b', bottom: 'pants', hairStyle: 'short', extras: ['hat', 'beard'], skin: '#b07a52' } },
      { id: 'terminal', kind: 'station', sign: 'TERMINAL DE ÓMNIBUS', color: '#e9a23b', who: { body: 'f', age: 'old', top: 'apron', topColor: '#5d8a9a', hairStyle: 'bun', hairColor: '#cfcfcf', skin: '#d0a07a' } },
    ],
  }),
  mendoza: plantilla({
    seed: 2283, style: 'desert', palette: ['#c9a46a', '#8a3a5a', '#e9dcc0', '#7fb069', '#d98a5a'], ground: 'dirt', plaza: '#dcc9a4',
    trees: 'tree', light: 'golden', centre: 'fountain', entrance: 'MENDOZA',
    landmark: { kind: 'mountain', color: '#8a8f98', accent: '#ffffff', label: 'ACONCAGUA' },
    spots: [
      { id: 'bodega', kind: 'shop', sign: 'BODEGA LOS ANDES', color: '#6b1f3a', who: { body: 'f', age: 'adult', top: 'shirt', topColor: '#6b1f3a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'long', hairColor: '#1d1410', skin: '#e0b18a' } },
      { id: 'vinedo', kind: 'park', sign: 'VIÑEDO', color: '#5a7a2f', who: { body: 'm', age: 'old', top: 'shirt', topColor: '#9ac1e0', bottom: 'jeans', hairStyle: 'cap', extras: ['mustache'], skin: '#9c6640' } },
      { id: 'mercado', kind: 'market', sign: 'MERCADO CENTRAL', color: '#e2574c', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#4f8a3c', hairStyle: 'braids', hairColor: '#3a2e28', extras: ['earrings'], skin: '#c08a62' } },
      { id: 'refugio', kind: 'viewpoint', sign: 'REFUGIO ACONCAGUA', color: '#3a5f8a', who: { body: 'm', age: 'adult', build: 'athletic', top: 'coat', topColor: '#e8743b', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'long', hairColor: '#1d1410', extras: ['beard'], skin: '#a8714a' } },
      { id: 'rafting', kind: 'harbor', sign: 'RAFTING RÍO MENDOZA', color: '#e9a23b', who: { body: 'm', age: 'young', top: 'tshirt', topColor: '#e84a3c', bottom: 'shorts', hairStyle: 'buzz', extras: ['hat'], skin: '#d0a07a' } },
    ],
  }),
  bariloche: plantilla({
    seed: 2284, style: 'alpine', palette: ['#8a6a4a', '#d8cbb3', '#6b4f3a', '#a8987a', '#c9b38a'], ground: 'snow', plaza: '#d8d2c8',
    trees: 'pine', light: 'snow', centre: 'statue', entrance: 'SAN CARLOS DE BARILOCHE', water: 'west',
    landmark: { kind: 'tower', color: '#a8987a', accent: '#6b4f3a', label: 'CENTRO CÍVICO' },
    spots: [
      { id: 'chocolateria', kind: 'shop', sign: 'CHOCOLATERÍA', color: '#5a3a2a', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#7a4a2a', hairStyle: 'ponytail', hairColor: '#e0c27a', skin: '#f0d0b0' } },
      { id: 'lago', kind: 'harbor', sign: 'PUERTO PAÑUELO', color: '#2f6f9e', who: { body: 'm', age: 'elderly', top: 'coat', topColor: '#1f3f6b', bottom: 'pants', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['beard'], skin: '#e0b18a' } },
      { id: 'cerro', kind: 'station', sign: 'CERRO CATEDRAL', color: '#d9475b', who: { body: 'f', age: 'young', build: 'athletic', top: 'jacket', topColor: '#d9475b', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'long', hairColor: '#7a5233', extras: ['glasses'], skin: '#e8c4a0' } },
      { id: 'cerveceria', kind: 'restaurant', sign: 'CERVECERÍA', color: '#c9a227', who: { body: 'm', age: 'adult', top: 'apron', topColor: '#3a3a3a', bottom: 'jeans', hairStyle: 'short', extras: ['beard'], skin: '#e0b18a' } },
      { id: 'campanario', kind: 'museum', sign: 'MUSEO DE LA PATAGONIA', color: '#6b4f3a', who: { body: 'f', age: 'adult', top: 'coat', topColor: '#3f8f6b', bottom: 'jeans', hairStyle: 'bob', hairColor: '#1d1410', skin: '#d0a07a' } },
    ],
  }),
};
