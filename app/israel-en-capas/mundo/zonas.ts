// Israel 3D · what each region looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  'tel-aviv': plantilla({
    seed: 251, style: 'modern', palette: ['#f4efe4', '#2f8fd4', '#e8e2d4', '#f2c14e', '#3a3a3a'], ground: 'sand', plaza: '#e8dcc0',
    trees: 'palm', light: 'day', centre: 'kiosk', entrance: 'TEL AVIV', water: 'west',
    landmark: { kind: 'tower', color: '#d0d4da', accent: '#2f8fd4', label: 'AZRIELI' },
    spots: [
      { id: 'playa', kind: 'beach', sign: 'GORDON', color: '#2f8fd4', who: { body: 'm', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#f2c14e', bottom: 'shorts', bottomColor: '#2f8fd4', hairStyle: 'curly', hairColor: '#1d1410', skin: '#d8a878' } },
      { id: 'carmel', kind: 'market', sign: 'SHUK HACARMEL', color: '#e8743b', who: { body: 'm', age: 'adult', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'bald', hairColor: '#3a2a20', extras: ['beard'], skin: '#d8a878' }, pose: 'cook' },
      { id: 'bauhaus', kind: 'museum', sign: 'BAUHAUS', color: '#f4efe4', who: { body: 'f', age: 'old', top: 'coat', topColor: '#3a3a3a', bottom: 'skirt', bottomColor: '#1b1b1b', hairStyle: 'bob', hairColor: '#cfcfcf', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'jaffa', kind: 'harbor', sign: 'JAFFA PORT', color: '#c9a64a', who: { body: 'm', age: 'adult', top: 'apron', topColor: '#e9dcc0', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#1d1410', extras: ['mustache'], skin: '#c89a70' }, pose: 'cook' },
      { id: 'startup', kind: 'school', sign: 'STARTUP', color: '#3a3a3a', who: { body: 'f', age: 'young', top: 'hoodie', topColor: '#2f4f7a', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#4a3326', extras: ['headphones'], skin: '#e8c4a0' } },
    ],
  }),
  jerusalen: plantilla({
    seed: 252, style: 'desert', palette: ['#e9dcc0', '#d8c8a0', '#c9a64a', '#b3543a', '#3f6b4a'], ground: 'stone', plaza: '#ddd0b0',
    trees: 'tree', light: 'golden', centre: 'fountain', entrance: 'JERUSALÉN', water: 'east',
    landmark: { kind: 'dome', color: '#d8c8a0', accent: '#c9a64a', label: 'CIUDAD VIEJA' },
    spots: [
      { id: 'ciudad-vieja', kind: 'viewpoint', sign: 'JAFFA GATE', color: '#c9a64a', who: { body: 'm', age: 'old', top: 'jacket', topColor: '#7a5233', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['hat', 'beard'], skin: '#d8a878' } },
      { id: 'mahane-yehuda', kind: 'market', sign: 'MAHANE YEHUDA', color: '#d9475b', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#d9813b', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'curly', hairColor: '#1d1410', extras: ['earrings'], skin: '#e8c4a0' }, pose: 'cook' },
      { id: 'shabat', kind: 'restaurant', sign: 'SHABAT SHALOM', color: '#2f4f7a', who: { body: 'f', age: 'adult', top: 'dress', topColor: '#2f4f7a', bottom: 'skirt', bottomColor: '#2f4f7a', hairStyle: 'long', hairColor: '#4a3326', skin: '#f0d0b0' }, pose: 'cook' },
      { id: 'museo', kind: 'museum', sign: 'MUSEO DE ISRAEL', color: '#f4efe4', who: { body: 'm', age: 'adult', top: 'suit', topColor: '#3a3a3a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#4a3326', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'mirador', kind: 'viewpoint', sign: 'MONTE DE LOS OLIVOS', color: '#6b7a4a', who: { body: 'm', age: 'young', top: 'jacket', topColor: '#3f6b4a', bottom: 'jeans', hairStyle: 'short', hairColor: '#1d1410', extras: ['beard'], skin: '#c89a70' } },
    ],
  }),
  norte: plantilla({
    seed: 253, style: 'mediterranean', palette: ['#e9dcc0', '#3f8f4a', '#f4efe4', '#c9a64a', '#b3543a'], ground: 'grass', plaza: '#d8ccb0',
    trees: 'pine', light: 'day', centre: 'tree', entrance: 'GALILEA', water: 'east',
    landmark: { kind: 'dome', color: '#f4efe4', accent: '#c9a64a', label: 'HAIFA' },
    spots: [
      { id: 'jardines', kind: 'park', sign: 'JARDINES', color: '#3f8f4a', who: { body: 'f', age: 'young', top: 'uniform', topColor: '#3f6b4a', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'ponytail', hairColor: '#1d1410', extras: ['hat'], skin: '#c89a70' } },
      { id: 'akko', kind: 'restaurant', sign: 'HUMMUS', color: '#c9a64a', who: { body: 'm', age: 'adult', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#1d1410', extras: ['mustache'], skin: '#b88a60' }, pose: 'cook' },
      { id: 'kibutz', kind: 'park', sign: 'KIBUTZ', color: '#7a8a4a', who: { body: 'f', age: 'old', top: 'shirt', topColor: '#2f8fd4', bottom: 'pants', bottomColor: '#3a3a2a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['hat'], skin: '#f0d0b0' } },
      { id: 'galilea', kind: 'harbor', sign: 'KINERET', color: '#2f8fd4', who: { body: 'm', age: 'old', build: 'heavy', top: 'shirt', topColor: '#e9dcc0', bottom: 'pants', bottomColor: '#2f4f7a', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['beard'], skin: '#d8a878' } },
      { id: 'drusa', kind: 'cafe', sign: 'DALIYAT', color: '#b3543a', who: { body: 'f', age: 'adult', top: 'dress', topColor: '#1b1b1b', bottom: 'skirt', bottomColor: '#1b1b1b', hairStyle: 'bun', hairColor: '#1d1410', skin: '#d8a878' }, pose: 'cook' },
    ],
  }),
  sur: plantilla({
    seed: 254, style: 'desert', palette: ['#d9b77a', '#e9dcc0', '#d9813b', '#7a5233', '#2f8fd4'], ground: 'sand', plaza: '#e0c898',
    trees: 'palm', light: 'golden', centre: 'statue', entrance: 'NÉGUEV', water: 'east',
    landmark: { kind: 'mountain', color: '#c9915a', accent: '#d9b77a', label: 'MASADA' },
    spots: [
      { id: 'mar-muerto', kind: 'beach', sign: 'MAR MUERTO', color: '#5ab0c8', who: { body: 'f', age: 'adult', build: 'athletic', top: 'uniform', topColor: '#d52b1e', bottom: 'shorts', bottomColor: '#1b2a4a', hairStyle: 'ponytail', hairColor: '#e0c27a', skin: '#f4dcc4' } },
      { id: 'masada', kind: 'viewpoint', sign: 'MASADA', color: '#c9915a', who: { body: 'm', age: 'young', top: 'tshirt', topColor: '#7a8a4a', bottom: 'shorts', bottomColor: '#3a3a2a', hairStyle: 'curly', hairColor: '#4a3326', extras: ['hat'], skin: '#e8c4a0' } },
      { id: 'ramon', kind: 'viewpoint', sign: 'MITZPE RAMON', color: '#2f4f7a', who: { body: 'm', age: 'adult', top: 'coat', topColor: '#2f4f7a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#4a3326', extras: ['glasses', 'beard'], skin: '#f0d0b0' } },
      { id: 'beduina', kind: 'restaurant', sign: 'TIENDA BEDUINA', color: '#7a5233', who: { body: 'f', age: 'adult', top: 'dress', topColor: '#7a2a3a', bottom: 'skirt', bottomColor: '#3a3a3a', hairStyle: 'bun', hairColor: '#1d1410', extras: ['earrings'], skin: '#b88a60' }, pose: 'cook' },
      { id: 'eilat', kind: 'beach', sign: 'EILAT', color: '#2fa38a', who: { body: 'f', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#2fa38a', bottom: 'shorts', bottomColor: '#1b2a4a', hairStyle: 'braids', hairColor: '#4a3326', skin: '#e8c4a0' } },
    ],
  }),
};
