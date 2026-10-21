// España 3D · what each region looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  madrid: plantilla({
    seed: 2291, style: 'mediterranean', palette: ['#d98a5a', '#f2c14e', '#e9dcc0', '#c9343a', '#f4efe4'], ground: 'cobble', plaza: '#cbbca3',
    trees: 'tree', light: 'golden', centre: 'statue', entrance: 'MADRID',
    landmark: { kind: 'arch', color: '#e9dcc0', accent: '#c9a46a', label: 'PUERTA DE ALCALÁ' },
    spots: [
      { id: 'churreria', kind: 'cafe', sign: 'CHOCOLATERÍA', color: '#5a3a2a', who: { body: 'm', age: 'old', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#9a9a9a', extras: ['mustache'], skin: '#e0b18a' }, pose: 'cook' },
      { id: 'prado', kind: 'museum', sign: 'MUSEO DEL PRADO', color: '#8a6a4a', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#2a2f45', bottom: 'skirt', bottomColor: '#2a2f45', hairStyle: 'bun', hairColor: '#4a3326', extras: ['glasses'], skin: '#e8c4a0' } },
      { id: 'retiro', kind: 'harbor', sign: 'BARCAS DEL RETIRO', color: '#2f6f9e', who: { body: 'f', age: 'young', top: 'tshirt', topColor: '#4f8a3c', bottom: 'shorts', hairStyle: 'ponytail', hairColor: '#7a5233', extras: ['hat'], skin: '#e0b18a' } },
      { id: 'tapas', kind: 'restaurant', sign: 'BAR LA LATINA', color: '#9e2b3a', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'short', hairColor: '#1d1410', extras: ['beard'], skin: '#d0a07a' } },
      { id: 'rastro', kind: 'market', sign: 'EL RASTRO', color: '#c9a227', who: { body: 'f', age: 'elderly', top: 'coat', topColor: '#7a3a5a', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'curly', hairColor: '#cfcfcf', extras: ['earrings'], skin: '#e8c4a0' } },
    ],
  }),
  cataluna: plantilla({
    seed: 2292, style: 'modern', palette: ['#e9dcc0', '#e9a23b', '#2f8fd4', '#c9343a', '#f4efe4'], ground: 'stone', plaza: '#d8c9a8',
    trees: 'palm', light: 'day', centre: 'fountain', entrance: 'BARCELONA', water: 'east',
    landmark: { kind: 'cathedral', color: '#d8c49a', accent: '#8a9a5a', label: 'SAGRADA FAMÍLIA' },
    spots: [
      { id: 'sagrada', kind: 'church', sign: 'SAGRADA FAMÍLIA', color: '#b8a27a', who: { body: 'm', age: 'adult', top: 'jacket', topColor: '#2f5d8a', bottom: 'jeans', hairStyle: 'short', hairColor: '#4a3326', extras: ['glasses', 'beard'], skin: '#e0b18a' } },
      { id: 'boqueria', kind: 'market', sign: 'LA BOQUERIA', color: '#e2574c', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#4f8a3c', hairStyle: 'bob', hairColor: '#1d1410', extras: ['earrings'], skin: '#e8c4a0' } },
      { id: 'barceloneta', kind: 'beach', sign: 'BARCELONETA', color: '#e8743b', who: { body: 'm', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#e84a3c', bottom: 'shorts', bottomColor: '#f2c14e', hairStyle: 'buzz', extras: ['hat'], skin: '#c08a62' } },
      { id: 'castells', kind: 'stage', sign: 'CASTELLERS', color: '#3a5f8a', who: { body: 'f', age: 'young', build: 'athletic', top: 'shirt', topColor: '#3f8f6b', bottom: 'pants', bottomColor: '#f4efe4', hairStyle: 'ponytail', hairColor: '#4a3326', skin: '#e0b18a' } },
      { id: 'estadio', kind: 'shop', sign: 'TIENDA DEL CLUB', color: '#7a2e5a', who: { body: 'm', age: 'adult', top: 'tshirt', topColor: '#2f4f9a', bottom: 'jeans', hairStyle: 'curly', hairColor: '#1d1410', skin: '#d0a07a' } },
    ],
  }),
  andalucia: plantilla({
    seed: 2293, style: 'mediterranean', palette: ['#f4efe4', '#f2c14e', '#3f8f6b', '#d98a5a', '#2f6f9e'], ground: 'cobble', plaza: '#e3d6b8',
    trees: 'palm', light: 'golden', centre: 'fountain', entrance: 'SEVILLA',
    landmark: { kind: 'tower', color: '#d9a066', accent: '#f2c14e', label: 'LA GIRALDA' },
    spots: [
      { id: 'flamenco', kind: 'stage', sign: 'TABLAO FLAMENCO', color: '#9e2b3a', who: { body: 'f', age: 'adult', top: 'dress', topColor: '#c9343a', hairStyle: 'bun', hairColor: '#1d1410', extras: ['earrings'], skin: '#d0a07a' }, pose: 'dance' },
      { id: 'alhambra', kind: 'park', sign: 'LA ALHAMBRA', color: '#b8603a', who: { body: 'm', age: 'old', top: 'shirt', topColor: '#7aa35a', bottom: 'pants', bottomColor: '#5a4632', hairStyle: 'cap', hairColor: '#9a9a9a', extras: ['mustache'], skin: '#c08a62' } },
      { id: 'olivar', kind: 'viewpoint', sign: 'OLIVAR DE JAÉN', color: '#6b7a2f', who: { body: 'm', age: 'elderly', top: 'shirt', topColor: '#d8cbb3', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'bald', extras: ['hat'], skin: '#a8714a' } },
      { id: 'coche', kind: 'station', sign: 'COCHES DE CABALLOS', color: '#f2c14e', who: { body: 'm', age: 'adult', top: 'suit', topColor: '#1b1b1b', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'short', hairColor: '#1d1410', extras: ['hat'], skin: '#d0a07a' } },
      { id: 'carnaval', kind: 'stage', sign: 'CARNAVAL DE CÁDIZ', color: '#7a5aa8', who: { body: 'f', age: 'adult', top: 'jacket', topColor: '#e2574c', bottom: 'pants', bottomColor: '#2f4f7a', hairStyle: 'curly', hairColor: '#7a5233', extras: ['glasses'], skin: '#e0b18a' }, pose: 'guitar' },
    ],
  }),
  valencia: plantilla({
    seed: 2294, style: 'mediterranean', palette: ['#f4efe4', '#e8743b', '#2f8fd4', '#f2c14e', '#7fb069'], ground: 'sand', plaza: '#e6d8b8',
    trees: 'palm', light: 'day', centre: 'kiosk', entrance: 'VALÈNCIA', water: 'east',
    landmark: { kind: 'opera', color: '#f4f6f8', accent: '#2f8fd4', label: 'CIUDAD DE LAS CIENCIAS' },
    spots: [
      { id: 'paella', kind: 'restaurant', sign: 'ARROCERÍA EL PALMAR', color: '#e9a23b', who: { body: 'f', age: 'old', build: 'heavy', top: 'apron', topColor: '#f4efe4', hairStyle: 'bun', hairColor: '#9a9a9a', skin: '#e0b18a' }, pose: 'cook' },
      { id: 'fallas', kind: 'shop', sign: 'TALLER FALLERO', color: '#c9343a', who: { body: 'm', age: 'adult', top: 'apron', topColor: '#5d8a9a', bottom: 'pants', bottomColor: '#5d8a9a', hairStyle: 'short', hairColor: '#4a3326', extras: ['beard'], skin: '#e8c4a0' } },
      { id: 'naranjos', kind: 'park', sign: 'HUERTO DE NARANJOS', color: '#e8743b', who: { body: 'f', age: 'adult', top: 'shirt', topColor: '#9ac1e0', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#1d1410', extras: ['hat'], skin: '#c08a62' } },
      { id: 'ciencias', kind: 'museum', sign: 'MUSEO DE LAS CIENCIAS', color: '#2f8fd4', who: { body: 'm', age: 'young', top: 'shirt', topColor: '#2f8fd4', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'curly', hairColor: '#4a3326', extras: ['glasses'], skin: '#e0b18a' } },
      { id: 'benidorm', kind: 'shop', sign: 'HOTEL BENIDORM', color: '#3a5f8a', who: { body: 'm', age: 'young', top: 'suit', topColor: '#2a2f45', bottom: 'pants', bottomColor: '#2a2f45', hairStyle: 'short', hairColor: '#1d1410', skin: '#d0a07a' } },
    ],
  }),
};
