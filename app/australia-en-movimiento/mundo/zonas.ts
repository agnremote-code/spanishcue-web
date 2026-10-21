// Australia 3D · what each region looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  'nueva-gales': plantilla({
    seed: 301, style: 'modern', palette: ['#f4efe4', '#2f8fd4', '#e9a23b', '#d9475b', '#3f6b4a'], ground: 'asphalt', plaza: '#c9c2b6',
    trees: 'palm', light: 'day', centre: 'fountain', entrance: 'SYDNEY', water: 'east',
    landmark: { kind: 'opera', color: '#f4efe4', accent: '#2f8fd4', label: 'OPERA HOUSE' },
    spots: [
      { id: 'opera', kind: 'stage', sign: 'OPERA HOUSE', color: '#1b1b1b', who: { body: 'f', age: 'young', top: 'suit', topColor: '#1b1b1b', bottom: 'skirt', bottomColor: '#1b1b1b', hairStyle: 'bun', hairColor: '#e0c27a', skin: '#f4dcc4' } },
      { id: 'bondi', kind: 'beach', sign: 'BONDI BEACH', color: '#f2c14e', who: { body: 'm', age: 'young', build: 'athletic', top: 'uniform', topColor: '#d9475b', bottom: 'shorts', bottomColor: '#f2c14e', hairStyle: 'short', hairColor: '#e0c27a', extras: ['hat'], skin: '#e8c4a0' } },
      { id: 'ferry', kind: 'harbor', sign: 'MANLY FERRY', color: '#3f8f4a', who: { body: 'm', age: 'adult', top: 'uniform', topColor: '#1b2a4a', bottom: 'pants', bottomColor: '#1b2a4a', hairStyle: 'short', hairColor: '#1d1410', extras: ['beard'], skin: '#b07a52' } },
      { id: 'pescado', kind: 'market', sign: 'FISH MARKET', color: '#2f4f5a', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'ponytail', hairColor: '#1d1410', skin: '#f0d8b8' } },
      { id: 'montanas', kind: 'viewpoint', sign: 'BLUE MOUNTAINS', color: '#4a6a8a', who: { body: 'm', age: 'adult', top: 'uniform', topColor: '#4a5a3a', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#7a5233', extras: ['hat'], skin: '#f0d0b0' } },
    ],
  }),
  victoria: plantilla({
    seed: 302, style: 'brick', palette: ['#b3543a', '#e9dcc0', '#1b2a4a', '#3f6b4a', '#c9a64a'], ground: 'cobble', plaza: '#b8b2a8',
    trees: 'tree', light: 'overcast', centre: 'statue', entrance: 'MELBOURNE', water: 'west',
    landmark: { kind: 'dome', color: '#c9a64a', accent: '#1b2a4a', label: 'FLINDERS ST' },
    spots: [
      { id: 'cafe', kind: 'cafe', sign: 'LANEWAY CAFÉ', color: '#4a3a2a', who: { body: 'm', age: 'young', top: 'apron', topColor: '#7a5233', bottom: 'jeans', hairStyle: 'curly', hairColor: '#1d1410', extras: ['beard'], skin: '#e8c4a0' }, pose: 'cook' },
      { id: 'tranvia', kind: 'station', sign: 'TRAM STOP', color: '#3f8f4a', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#3f8f4a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'long', hairColor: '#1d1410', extras: ['earrings'], skin: '#9a6a48' } },
      { id: 'ruta', kind: 'viewpoint', sign: 'GREAT OCEAN RD', color: '#2f8fd4', who: { body: 'f', age: 'adult', top: 'jacket', topColor: '#e8743b', bottom: 'shorts', bottomColor: '#3a3a2a', hairStyle: 'ponytail', hairColor: '#e0c27a', extras: ['hat'], skin: '#f0d0b0' } },
      { id: 'pinguinos', kind: 'beach', sign: 'PENGUIN PARADE', color: '#1b2a4a', who: { body: 'm', age: 'old', top: 'uniform', topColor: '#4a5a3a', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'futbol', kind: 'park', sign: 'MCG', color: '#1b2a4a', who: { body: 'f', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#1b2a4a', bottom: 'shorts', bottomColor: '#f4efe4', hairStyle: 'braids', hairColor: '#4a3326', skin: '#f4dcc4' } },
    ],
  }),
  queensland: plantilla({
    seed: 303, style: 'tropical', palette: ['#f2c14e', '#2fa38a', '#f4efe4', '#e8743b', '#2f8fd4'], ground: 'sand', plaza: '#e0d2a8',
    trees: 'palm', light: 'golden', centre: 'tree', entrance: 'QUEENSLAND', water: 'east',
    landmark: { kind: 'lighthouse', color: '#f4efe4', accent: '#d9475b', label: 'BARRIER REEF' },
    spots: [
      { id: 'arrecife', kind: 'harbor', sign: 'REEF DIVE', color: '#2f8fd4', who: { body: 'f', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#2fa38a', bottom: 'shorts', bottomColor: '#1b2a4a', hairStyle: 'ponytail', hairColor: '#b5562a', skin: '#f4dcc4' } },
      { id: 'daintree', kind: 'park', sign: 'DAINTREE', color: '#2f6b3a', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#4a5a3a', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'curly', hairColor: '#1d1410', extras: ['hat'], skin: '#6b4430' } },
      { id: 'koalas', kind: 'park', sign: 'KOALA SANCTUARY', color: '#7a8a6a', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#3f8f4a', bottom: 'shorts', bottomColor: '#3a3a2a', hairStyle: 'bob', hairColor: '#7a5233', skin: '#f0d0b0' } },
      { id: 'kgari', kind: 'beach', sign: 'K’GARI 4X4', color: '#e8743b', who: { body: 'm', age: 'old', build: 'heavy', top: 'shirt', topColor: '#d9475b', bottom: 'shorts', bottomColor: '#3a3a2a', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['mustache'], skin: '#e8b890' } },
      { id: 'mangos', kind: 'market', sign: 'MANGO FARM', color: '#f2a03a', who: { body: 'f', age: 'adult', top: 'shirt', topColor: '#f2c14e', bottom: 'jeans', hairStyle: 'long', hairColor: '#1d1410', extras: ['hat'], skin: '#c89a70' } },
    ],
  }),
  outback: plantilla({
    seed: 304, style: 'desert', palette: ['#c4552f', '#e9a23b', '#e9dcc0', '#7a3a2a', '#3f6b4a'], ground: 'dirt', plaza: '#c98a5a',
    trees: 'none', light: 'dusk', centre: 'kiosk', entrance: 'NORTHERN TERRITORY', water: 'west',
    landmark: { kind: 'mountain', color: '#b8452a', accent: '#e8743b', label: 'ULURU' },
    spots: [
      { id: 'uluru', kind: 'viewpoint', sign: 'ULURU', color: '#b8452a', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#2f8fd4', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'curly', hairColor: '#1d1410', extras: ['hat', 'beard'], skin: '#5a3a28' } },
      { id: 'doctora', kind: 'station', sign: 'FLYING DOCTOR', color: '#c8102e', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#1b2a4a', bottom: 'pants', bottomColor: '#1b2a4a', hairStyle: 'ponytail', hairColor: '#b5562a', skin: '#f4dcc4' } },
      { id: 'darwin', kind: 'market', sign: 'MINDIL MARKET', color: '#e9a23b', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#d9475b', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'bun', hairColor: '#1d1410', skin: '#e8c8a0' }, pose: 'cook' },
      { id: 'kakadu', kind: 'harbor', sign: 'KAKADU', color: '#3f6b4a', who: { body: 'f', age: 'adult', build: 'athletic', top: 'uniform', topColor: '#6b6a3a', bottom: 'shorts', bottomColor: '#3a3a2a', hairStyle: 'cap', hairColor: '#1d1410', skin: '#6b4430' } },
      { id: 'escuela', kind: 'school', sign: 'SCHOOL OF THE AIR', color: '#2f8fd4', who: { body: 'f', age: 'adult', top: 'sweater', topColor: '#3f8f4a', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'bob', hairColor: '#7a5233', extras: ['glasses'], skin: '#f0d0b0' } },
    ],
  }),
};
