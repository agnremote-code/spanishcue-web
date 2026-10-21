// Suiza 3D · what each region looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  zurich: plantilla({
    seed: 291, style: 'alpine', palette: ['#e9dcc0', '#d52b1e', '#3f6b4a', '#f4efe4', '#2f4f7a'], ground: 'cobble', plaza: '#c9c2b6',
    trees: 'tree', light: 'day', centre: 'fountain', entrance: 'ZÜRICH', water: 'east',
    landmark: { kind: 'cathedral', color: '#e9dcc0', accent: '#3f6b4a', label: 'GROSSMÜNSTER' },
    spots: [
      { id: 'chocolate', kind: 'shop', sign: 'CHOCOLATERIE', color: '#5a3a2a', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#7a5233', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'bun', hairColor: '#e0c27a', skin: '#f4dcc4' }, pose: 'cook' },
      { id: 'tren', kind: 'station', sign: 'HAUPTBAHNHOF', color: '#d52b1e', who: { body: 'm', age: 'adult', top: 'uniform', topColor: '#1b2a4a', bottom: 'pants', bottomColor: '#1b2a4a', hairStyle: 'short', hairColor: '#7a5233', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'rio', kind: 'beach', sign: 'FLUSSBAD', color: '#2f8fd4', who: { body: 'f', age: 'young', build: 'athletic', top: 'uniform', topColor: '#d52b1e', bottom: 'shorts', bottomColor: '#1b2a4a', hairStyle: 'ponytail', hairColor: '#b5562a', skin: '#f4dcc4' } },
      { id: 'reciclaje', kind: 'shop', sign: 'RECYCLING', color: '#3f8f4a', who: { body: 'f', age: 'old', top: 'sweater', topColor: '#7a8a6a', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'bob', hairColor: '#cfcfcf', extras: ['glasses'], skin: '#f0d8b8' } },
      { id: 'votacion', kind: 'school', sign: 'ABSTIMMUNG', color: '#d52b1e', who: { body: 'm', age: 'adult', top: 'suit', topColor: '#2a2a2a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#cfcfcf', skin: '#f0d0b0' } },
    ],
  }),
  ginebra: plantilla({
    seed: 292, style: 'mediterranean', palette: ['#f4efe4', '#2f6fb0', '#c9a64a', '#b3543a', '#3f6b4a'], ground: 'stone', plaza: '#d0c8b8',
    trees: 'tree', light: 'golden', centre: 'statue', entrance: 'GENÈVE', water: 'west',
    landmark: { kind: 'obelisk', color: '#f4efe4', accent: '#2f6fb0', label: 'JET D’EAU' },
    spots: [
      { id: 'onu', kind: 'museum', sign: 'NATIONS UNIES', color: '#2f6fb0', who: { body: 'f', age: 'young', top: 'suit', topColor: '#1b2a4a', bottom: 'skirt', bottomColor: '#1b2a4a', hairStyle: 'long', hairColor: '#1d1410', extras: ['earrings'], skin: '#c89a70' } },
      { id: 'lago', kind: 'harbor', sign: 'CGN', color: '#f4efe4', who: { body: 'm', age: 'old', top: 'uniform', topColor: '#1b2a4a', bottom: 'pants', bottomColor: '#1b2a4a', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['beard'], skin: '#f0d0b0' } },
      { id: 'relojeria', kind: 'shop', sign: 'HORLOGERIE', color: '#2a2a2a', who: { body: 'm', age: 'adult', top: 'apron', topColor: '#4a4a4a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#4a3326', extras: ['glasses', 'mustache'], skin: '#f0d0b0' } },
      { id: 'lavaux', kind: 'viewpoint', sign: 'LAVAUX', color: '#6b2a3a', who: { body: 'f', age: 'adult', top: 'shirt', topColor: '#e9dcc0', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#7a5233', extras: ['hat'], skin: '#e8c4a0' } },
      { id: 'queso', kind: 'market', sign: 'FROMAGERIE', color: '#c9a64a', who: { body: 'm', age: 'adult', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#4a3326', skin: '#e8b890' }, pose: 'cook' },
    ],
  }),
  tesino: plantilla({
    seed: 293, style: 'mediterranean', palette: ['#e9a23b', '#f2c14e', '#d9475b', '#f4efe4', '#3f6b4a'], ground: 'stone', plaza: '#d8c8a8',
    trees: 'palm', light: 'golden', centre: 'tree', entrance: 'TICINO', water: 'east',
    landmark: { kind: 'castle', color: '#9a8a70', accent: '#d9475b', label: 'CASTELGRANDE' },
    spots: [
      { id: 'lugano', kind: 'cafe', sign: 'CAFFÈ LUGANO', color: '#d9475b', who: { body: 'f', age: 'young', top: 'apron', topColor: '#1b1b1b', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'long', hairColor: '#1d1410', skin: '#e8c8a0' } },
      { id: 'mercado', kind: 'market', sign: 'MERCATO', color: '#e8743b', who: { body: 'm', age: 'old', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['mustache'], skin: '#e8b890' } },
      { id: 'grotto', kind: 'restaurant', sign: 'GROTTO', color: '#5a4a3a', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#d9475b', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'bun', hairColor: '#4a3326', skin: '#e8c4a0' }, pose: 'cook' },
      { id: 'castillos', kind: 'museum', sign: 'CASTELLI', color: '#9a8a70', who: { body: 'm', age: 'young', top: 'jacket', topColor: '#3f6b4a', bottom: 'jeans', hairStyle: 'curly', hairColor: '#1d1410', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'verzasca', kind: 'park', sign: 'VERZASCA', color: '#2fa38a', who: { body: 'f', age: 'adult', build: 'athletic', top: 'jacket', topColor: '#e8743b', bottom: 'shorts', bottomColor: '#3a3a2a', hairStyle: 'ponytail', hairColor: '#7a5233', skin: '#f4dcc4' } },
    ],
  }),
  alpes: plantilla({
    seed: 294, style: 'alpine', palette: ['#7a5233', '#e9dcc0', '#d52b1e', '#f4efe4', '#3f6b4a'], ground: 'snow', plaza: '#e8e8ec',
    trees: 'pine', light: 'snow', centre: 'kiosk', entrance: 'ZERMATT', water: 'west',
    landmark: { kind: 'mountain', color: '#8a8f98', accent: '#f4efe4', label: 'MATTERHORN' },
    spots: [
      { id: 'zermatt', kind: 'station', sign: 'E-TAXI', color: '#3f8f4a', who: { body: 'm', age: 'adult', top: 'jacket', topColor: '#d52b1e', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#7a5233', extras: ['beard'], skin: '#f0d0b0' } },
      { id: 'glaciar', kind: 'viewpoint', sign: 'ALETSCH', color: '#5a9ac8', who: { body: 'f', age: 'young', build: 'athletic', top: 'jacket', topColor: '#2f8fd4', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'ponytail', hairColor: '#e0c27a', extras: ['glasses'], skin: '#f4dcc4' } },
      { id: 'refugio', kind: 'restaurant', sign: 'HÜTTE', color: '#7a5233', who: { body: 'm', age: 'old', build: 'heavy', top: 'sweater', topColor: '#d52b1e', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['beard'], skin: '#e8b890' }, pose: 'cook' },
      { id: 'san-bernardo', kind: 'park', sign: 'ST-BERNARD', color: '#b3543a', who: { body: 'f', age: 'adult', top: 'jacket', topColor: '#7a5233', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'braids', hairColor: '#4a3326', extras: ['hat'], skin: '#f0d0b0' } },
      { id: 'alpage', kind: 'park', sign: 'ALP', color: '#3f6b4a', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#4a3326', extras: ['hat', 'beard'], skin: '#e8c4a0' } },
    ],
  }),
};
