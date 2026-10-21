// Reino Unido 3D · what each nation looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  inglaterra: plantilla({
    seed: 321, style: 'brick', palette: ['#b3543a', '#e9dcc0', '#2f4f7a', '#c8102e', '#3f6b4a'], ground: 'asphalt', plaza: '#c9c2b6',
    trees: 'tree', light: 'overcast', centre: 'statue', entrance: 'LONDON', water: 'east',
    landmark: { kind: 'tower', color: '#c9a46a', accent: '#2f4f7a', label: 'BIG BEN' },
    spots: [
      { id: 'pub', kind: 'restaurant', sign: 'THE RED LION', color: '#2f4f3a', who: { body: 'm', age: 'adult', build: 'heavy', top: 'shirt', topColor: '#e9dcc0', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'bald', hairColor: '#7a5233', extras: ['beard'], skin: '#f0d0b0' } },
      { id: 'camden', kind: 'market', sign: 'CAMDEN MARKET', color: '#d9475b', who: { body: 'f', age: 'young', top: 'apron', topColor: '#e9a23b', bottom: 'jeans', hairStyle: 'long', hairColor: '#1d1410', extras: ['earrings'], skin: '#b07a52' }, pose: 'cook' },
      { id: 'metro', kind: 'station', sign: 'UNDERGROUND', color: '#c8102e', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#e8743b', bottom: 'pants', bottomColor: '#1b2a4a', hairStyle: 'braids', hairColor: '#1d1410', skin: '#7a4a2e' } },
      { id: 'oxford', kind: 'school', sign: 'OXFORD', color: '#8a7a5a', who: { body: 'm', age: 'old', top: 'suit', topColor: '#3a3a3a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'beatles', kind: 'stage', sign: 'THE CAVERN', color: '#1b1b1b', who: { body: 'm', age: 'adult', top: 'jacket', topColor: '#1b1b1b', bottom: 'jeans', hairStyle: 'curly', hairColor: '#7a5233', skin: '#f0d0b0' }, pose: 'guitar' },
    ],
  }),
  escocia: plantilla({
    seed: 322, style: 'alpine', palette: ['#6b6b6b', '#8a7a6a', '#2f5d8a', '#3f6b4a', '#c9c2b6'], ground: 'stone', plaza: '#b8b2a8',
    trees: 'pine', light: 'overcast', centre: 'fountain', entrance: 'EDINBURGH', water: 'west',
    landmark: { kind: 'castle', color: '#7a746a', accent: '#2f5d8a', label: 'EDINBURGH CASTLE' },
    spots: [
      { id: 'castillo', kind: 'museum', sign: 'CASTLE', color: '#5a5a5a', who: { body: 'f', age: 'adult', top: 'coat', topColor: '#2f5d8a', bottom: 'skirt', bottomColor: '#3f6b4a', hairStyle: 'bob', hairColor: '#b5562a', skin: '#f4dcc4' } },
      { id: 'ness', kind: 'harbor', sign: 'LOCH NESS', color: '#2f4f5a', who: { body: 'm', age: 'old', build: 'heavy', top: 'sweater', topColor: '#3f6b4a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['beard'], skin: '#f0d0b0' } },
      { id: 'fringe', kind: 'stage', sign: 'FRINGE', color: '#7a5aa8', who: { body: 'm', age: 'young', top: 'hoodie', topColor: '#d9475b', bottom: 'jeans', hairStyle: 'short', hairColor: '#b5562a', extras: ['glasses'], skin: '#f4dcc4' } },
      { id: 'kilts', kind: 'shop', sign: 'KILTMAKER', color: '#a33a3a', who: { body: 'f', age: 'old', top: 'sweater', topColor: '#a33a3a', bottom: 'skirt', bottomColor: '#2f4f3a', hairStyle: 'bun', hairColor: '#e9e9e9', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'highlands', kind: 'viewpoint', sign: 'HIGHLANDS', color: '#3f6b4a', who: { body: 'f', age: 'young', build: 'athletic', top: 'jacket', topColor: '#e8743b', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'ponytail', hairColor: '#e0c27a', extras: ['hat'], skin: '#f0d0b0' } },
    ],
  }),
  gales: plantilla({
    seed: 323, style: 'brick', palette: ['#c8102e', '#f4efe4', '#3f8f4a', '#8a7a6a', '#e9dcc0'], ground: 'grass', plaza: '#c9c2b6',
    trees: 'tree', light: 'golden', centre: 'statue', entrance: 'CROESO', water: 'west',
    landmark: { kind: 'castle', color: '#8a8478', accent: '#c8102e', label: 'CASTELL CONWY' },
    spots: [
      { id: 'rugby', kind: 'park', sign: 'RUGBY', color: '#c8102e', who: { body: 'm', age: 'adult', build: 'athletic', top: 'tshirt', topColor: '#c8102e', bottom: 'shorts', bottomColor: '#f4efe4', hairStyle: 'buzz', hairColor: '#4a3326', extras: ['beard'], skin: '#f0d0b0' } },
      { id: 'snowdon', kind: 'station', sign: 'YR WYDDFA', color: '#2f4f3a', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#2f4f3a', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'short', hairColor: '#7a5233', extras: ['hat'], skin: '#f0d0b0' } },
      { id: 'escuela', kind: 'school', sign: 'YSGOL', color: '#2f8fd4', who: { body: 'f', age: 'young', top: 'sweater', topColor: '#f2c14e', bottom: 'skirt', bottomColor: '#2f4f7a', hairStyle: 'long', hairColor: '#4a3326', skin: '#f4dcc4' } },
      { id: 'ovejas', kind: 'park', sign: 'FFERM', color: '#7fb069', who: { body: 'm', age: 'old', build: 'heavy', top: 'coat', topColor: '#4a5a3a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'cap', hairColor: '#cfcfcf', skin: '#e8c4a0' } },
      { id: 'llanfair', kind: 'station', sign: 'LLANFAIR PG', color: '#8a3a2a', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#8a3a2a', bottom: 'skirt', bottomColor: '#1b1b1b', hairStyle: 'bob', hairColor: '#1d1410', extras: ['glasses'], skin: '#f0d0b0' } },
    ],
  }),
  'irlanda-norte': plantilla({
    seed: 324, style: 'brick', palette: ['#b3543a', '#e9dcc0', '#6b4fa0', '#3f6b4a', '#4a6a8a'], ground: 'cobble', plaza: '#c9c2b6',
    trees: 'tree', light: 'dusk', centre: 'kiosk', entrance: 'BELFAST', water: 'east',
    landmark: { kind: 'lighthouse', color: '#f4efe4', accent: '#c8102e', label: 'ANTRIM COAST' },
    spots: [
      { id: 'calzada', kind: 'beach', sign: 'GIANT’S CAUSEWAY', color: '#2f2f3a', who: { body: 'm', age: 'adult', top: 'jacket', topColor: '#3f6b4a', bottom: 'jeans', hairStyle: 'short', hairColor: '#b5562a', extras: ['beard'], skin: '#f4dcc4' } },
      { id: 'titanic', kind: 'museum', sign: 'TITANIC', color: '#4a6a8a', who: { body: 'f', age: 'young', top: 'shirt', topColor: '#f4efe4', bottom: 'skirt', bottomColor: '#1b2a4a', hairStyle: 'long', hairColor: '#7a5233', extras: ['earrings'], skin: '#f4dcc4' } },
      { id: 'murales', kind: 'park', sign: 'MURALS', color: '#e9a23b', who: { body: 'm', age: 'old', build: 'heavy', top: 'jacket', topColor: '#1b1b1b', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'mercado', kind: 'market', sign: 'ST GEORGE’S MARKET', color: '#3f6b4a', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#f4efe4', bottom: 'jeans', hairStyle: 'curly', hairColor: '#b5562a', skin: '#f4dcc4' }, pose: 'cook' },
      { id: 'caminos', kind: 'park', sign: 'DARK HEDGES', color: '#3a3a2a', who: { body: 'm', age: 'adult', top: 'coat', topColor: '#4a3a2a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'long', hairColor: '#4a3326', extras: ['beard'], skin: '#f0d0b0' } },
    ],
  }),
};
