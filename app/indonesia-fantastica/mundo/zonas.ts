// Indonesia 3D · what each region looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  bali: plantilla({
    seed: 241, style: 'tropical', palette: ['#c9915a', '#7a5233', '#2fa38a', '#f2c14e', '#d9475b'], ground: 'stone', plaza: '#c8b898',
    trees: 'palm', light: 'golden', centre: 'statue', entrance: 'BALI', water: 'west',
    landmark: { kind: 'temple', color: '#7a5233', accent: '#c9915a', label: 'PURA' },
    spots: [
      { id: 'arrozales', kind: 'park', sign: 'SUBAK', color: '#3f8f4a', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#e9dcc0', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#1d1410', extras: ['hat'], skin: '#b88a60' } },
      { id: 'ofrendas', kind: 'temple', sign: 'CANANG', color: '#f2c14e', who: { body: 'f', age: 'old', top: 'dress', topColor: '#f4efe4', bottom: 'skirt', bottomColor: '#d9813b', hairStyle: 'bun', hairColor: '#4a4a4a', skin: '#b88a60' }, pose: 'cook' },
      { id: 'surf', kind: 'beach', sign: 'SURF SCHOOL', color: '#2f8fd4', who: { body: 'm', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#2fa38a', bottom: 'shorts', bottomColor: '#f2c14e', hairStyle: 'long', hairColor: '#1d1410', skin: '#a8784a' } },
      { id: 'nyepi', kind: 'temple', sign: 'NYEPI', color: '#d9475b', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#1d1410', extras: ['mustache'], skin: '#b88a60' } },
      { id: 'uluwatu', kind: 'viewpoint', sign: 'ULUWATU', color: '#7a5233', who: { body: 'f', age: 'adult', top: 'uniform', topColor: '#7a2a3a', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'ponytail', hairColor: '#1d1410', skin: '#b88a60' } },
    ],
  }),
  java: plantilla({
    seed: 242, style: 'colonial', palette: ['#f4efe4', '#c9a64a', '#7a5233', '#2f6fb0', '#3f6b4a'], ground: 'asphalt', plaza: '#c9c2b6',
    trees: 'tree', light: 'dusk', centre: 'kiosk', entrance: 'YOGYAKARTA', water: 'east',
    landmark: { kind: 'pyramid', color: '#8a8070', accent: '#6b6458', label: 'BOROBUDUR' },
    spots: [
      { id: 'borobudur', kind: 'temple', sign: 'BOROBUDUR', color: '#8a8070', who: { body: 'f', age: 'young', top: 'jacket', topColor: '#2f6fb0', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'ponytail', hairColor: '#1d1410', extras: ['hat'], skin: '#c89a70' } },
      { id: 'batik', kind: 'shop', sign: 'BATIK', color: '#7a5233', who: { body: 'f', age: 'adult', top: 'dress', topColor: '#7a5233', bottom: 'skirt', bottomColor: '#c9a64a', hairStyle: 'bun', hairColor: '#1d1410', skin: '#b88a60' }, pose: 'cook' },
      { id: 'gamelan', kind: 'stage', sign: 'GAMELAN', color: '#c9a64a', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#7a5233', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#4a4a4a', extras: ['hat'], skin: '#b88a60' } },
      { id: 'angkringan', kind: 'restaurant', sign: 'ANGKRINGAN', color: '#d9813b', who: { body: 'm', age: 'adult', build: 'heavy', top: 'shirt', topColor: '#3f6b4a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#4a4a4a', extras: ['mustache'], skin: '#a8784a' }, pose: 'cook' },
      { id: 'yakarta', kind: 'station', sign: 'OJEK', color: '#3f8f4a', who: { body: 'f', age: 'young', top: 'jacket', topColor: '#3f8f4a', bottom: 'jeans', hairStyle: 'cap', hairColor: '#1d1410', skin: '#c89a70' } },
    ],
  }),
  sumatra: plantilla({
    seed: 243, style: 'tropical', palette: ['#7a5233', '#c9915a', '#3f8f4a', '#d9475b', '#f4efe4'], ground: 'dirt', plaza: '#b8a07a',
    trees: 'palm', light: 'overcast', centre: 'tree', entrance: 'SUMATRA', water: 'east',
    landmark: { kind: 'volcano', color: '#6b6458', accent: '#3f8f4a', label: 'SINABUNG' },
    spots: [
      { id: 'orangutanes', kind: 'park', sign: 'BUKIT LAWANG', color: '#3f6b4a', who: { body: 'm', age: 'adult', top: 'uniform', topColor: '#6b7a4a', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#1d1410', extras: ['hat'], skin: '#a8784a' } },
      { id: 'toba', kind: 'harbor', sign: 'DANAU TOBA', color: '#2f6fb0', who: { body: 'f', age: 'adult', top: 'dress', topColor: '#d9475b', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'long', hairColor: '#1d1410', skin: '#b88a60' } },
      { id: 'padang', kind: 'restaurant', sign: 'RUMAH MAKAN', color: '#d9475b', who: { body: 'f', age: 'adult', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'skirt', bottomColor: '#7a2a3a', hairStyle: 'bun', hairColor: '#1d1410', skin: '#b88a60' }, pose: 'cook' },
      { id: 'cafe-gayo', kind: 'cafe', sign: 'KOPI GAYO', color: '#5a3a2a', who: { body: 'f', age: 'adult', top: 'shirt', topColor: '#3f6b4a', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'bun', hairColor: '#1d1410', extras: ['hat'], skin: '#c89a70' } },
      { id: 'palma', kind: 'park', sign: 'SAWIT', color: '#e8743b', who: { body: 'm', age: 'adult', build: 'athletic', top: 'tshirt', topColor: '#7a8a6a', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#1d1410', extras: ['hat'], skin: '#a8784a' } },
    ],
  }),
  komodo: plantilla({
    seed: 244, style: 'tropical', palette: ['#c9915a', '#e9dcc0', '#2fa38a', '#7a5233', '#d9813b'], ground: 'sand', plaza: '#e0c898',
    trees: 'palm', light: 'day', centre: 'kiosk', entrance: 'LABUAN BAJO', water: 'west',
    landmark: { kind: 'mountain', color: '#a89060', accent: '#7a8a4a', label: 'KOMODO' },
    spots: [
      { id: 'dragones', kind: 'park', sign: 'LOH LIANG', color: '#7a8a4a', who: { body: 'm', age: 'adult', top: 'uniform', topColor: '#6b7a4a', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#1d1410', extras: ['hat'], skin: '#8a5a3a' } },
      { id: 'buceo', kind: 'harbor', sign: 'DIVE', color: '#2f8fd4', who: { body: 'f', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#2f8fd4', bottom: 'shorts', bottomColor: '#1b2a4a', hairStyle: 'curly', hairColor: '#1d1410', skin: '#8a5a3a' } },
      { id: 'pinisi', kind: 'harbor', sign: 'PINISI', color: '#7a5233', who: { body: 'm', age: 'old', top: 'shirt', topColor: '#e9dcc0', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['beard'], skin: '#a8784a' } },
      { id: 'wae-rebo', kind: 'park', sign: 'WAE REBO', color: '#b3543a', who: { body: 'm', age: 'old', top: 'sweater', topColor: '#1b1b1b', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#cfcfcf', skin: '#8a5a3a' } },
      { id: 'kelimutu', kind: 'viewpoint', sign: 'KELIMUTU', color: '#2fa38a', who: { body: 'f', age: 'young', top: 'jacket', topColor: '#d52b1e', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#1d1410', skin: '#8a5a3a' } },
    ],
  }),
};
