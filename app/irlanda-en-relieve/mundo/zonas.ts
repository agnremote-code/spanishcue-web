// Irlanda 3D · what each region looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  dublin: plantilla({
    seed: 331, style: 'brick', palette: ['#b3543a', '#e9dcc0', '#2f4f7a', '#169b62', '#d9475b'], ground: 'cobble', plaza: '#c9c2b6',
    trees: 'tree', light: 'overcast', centre: 'statue', entrance: 'BAILE ÁTHA CLIATH', water: 'east',
    landmark: { kind: 'tower', color: '#9aa6a0', accent: '#169b62', label: 'THE SPIRE' },
    spots: [
      { id: 'musica', kind: 'restaurant', sign: 'THE AULD TRAD', color: '#2f4f3a', who: { body: 'f', age: 'young', top: 'sweater', topColor: '#3f6b4a', bottom: 'jeans', hairStyle: 'long', hairColor: '#b5562a', skin: '#f4dcc4' }, pose: 'guitar' },
      { id: 'trinity', kind: 'museum', sign: 'TRINITY COLLEGE', color: '#5a4a3a', who: { body: 'm', age: 'old', top: 'suit', topColor: '#4a3a2a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'hurling', kind: 'park', sign: 'CROKE PARK', color: '#169b62', who: { body: 'm', age: 'young', build: 'athletic', top: 'tshirt', topColor: '#2f8fd4', bottom: 'shorts', bottomColor: '#f4efe4', hairStyle: 'buzz', hairColor: '#7a5233', skin: '#f4dcc4' } },
      { id: 'moore', kind: 'market', sign: 'MOORE STREET', color: '#e9a23b', who: { body: 'f', age: 'old', build: 'heavy', top: 'apron', topColor: '#d9475b', bottom: 'skirt', bottomColor: '#2a2a2a', hairStyle: 'bun', hairColor: '#e9e9e9', skin: '#f0d0b0' }, pose: 'cook' },
      { id: 'dart', kind: 'station', sign: 'DART · HOWTH', color: '#169b62', who: { body: 'f', age: 'adult', top: 'coat', topColor: '#2f4f7a', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#1d1410', skin: '#f0d0b0' } },
    ],
  }),
  galway: plantilla({
    seed: 332, style: 'mediterranean', palette: ['#f4efe4', '#e9a23b', '#7a2e3a', '#2f8fd4', '#3f6b4a'], ground: 'stone', plaza: '#b8b2a8',
    trees: 'none', light: 'golden', centre: 'kiosk', entrance: 'GAILLIMH', water: 'west',
    landmark: { kind: 'mountain', color: '#6b7a5a', accent: '#3f6b4a', label: 'CLIFFS OF MOHER' },
    spots: [
      { id: 'aran', kind: 'shop', sign: 'ARAN SWEATERS', color: '#e9dcc0', who: { body: 'f', age: 'old', top: 'sweater', topColor: '#f4efe4', bottom: 'skirt', bottomColor: '#4a3a2a', hairStyle: 'bun', hairColor: '#e9e9e9', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'moher', kind: 'viewpoint', sign: 'MOHER', color: '#3f6b4a', who: { body: 'm', age: 'adult', top: 'jacket', topColor: '#c8102e', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#4a3326', extras: ['beard'], skin: '#f4dcc4' } },
      { id: 'festival', kind: 'stage', sign: 'GALWAY ARTS', color: '#7a5aa8', who: { body: 'f', age: 'young', top: 'dress', topColor: '#cfcfcf', bottom: 'pants', bottomColor: '#cfcfcf', hairStyle: 'bob', hairColor: '#cfcfcf', skin: '#d8d8d8' }, pose: 'dance' },
      { id: 'connemara', kind: 'park', sign: 'CONNEMARA PONIES', color: '#7fb069', who: { body: 'm', age: 'elderly', top: 'coat', topColor: '#4a5a3a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'cap', hairColor: '#cfcfcf', skin: '#e8c4a0' } },
      { id: 'ostras', kind: 'restaurant', sign: 'OYSTERS', color: '#2f4f5a', who: { body: 'm', age: 'young', top: 'apron', topColor: '#2f4f5a', bottom: 'jeans', hairStyle: 'curly', hairColor: '#b5562a', skin: '#f4dcc4' }, pose: 'cook' },
    ],
  }),
  kerry: plantilla({
    seed: 333, style: 'alpine', palette: ['#f4efe4', '#d9475b', '#2f8fd4', '#f2c14e', '#3f8f4a'], ground: 'grass', plaza: '#c9c2b6',
    trees: 'pine', light: 'day', centre: 'tree', entrance: 'CIARRAÍ', water: 'west',
    landmark: { kind: 'mountain', color: '#5a6a4a', accent: '#3f8f4a', label: 'CARRAUNTOOHIL' },
    spots: [
      { id: 'anillo', kind: 'station', sign: 'RING OF KERRY', color: '#3f8f4a', who: { body: 'm', age: 'adult', build: 'heavy', top: 'uniform', topColor: '#3f8f4a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#7a5233', skin: '#f0d0b0' } },
      { id: 'skellig', kind: 'harbor', sign: 'SKELLIG BOATS', color: '#2f4f5a', who: { body: 'f', age: 'adult', build: 'athletic', top: 'jacket', topColor: '#e8743b', bottom: 'pants', bottomColor: '#1b2a4a', hairStyle: 'short', hairColor: '#b5562a', extras: ['hat'], skin: '#f4dcc4' } },
      { id: 'killarney', kind: 'park', sign: 'KILLARNEY', color: '#4a6a3a', who: { body: 'm', age: 'old', top: 'coat', topColor: '#4a3a2a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['mustache'], skin: '#e8c4a0' } },
      { id: 'surf', kind: 'beach', sign: 'INCH SURF', color: '#2f8fd4', who: { body: 'f', age: 'adult', build: 'athletic', top: 'tshirt', topColor: '#1b1b1b', bottom: 'shorts', bottomColor: '#1b1b1b', hairStyle: 'ponytail', hairColor: '#e0c27a', skin: '#f0d0b0' } },
      { id: 'dingle', kind: 'shop', sign: 'DINGLE ICE CREAM', color: '#f2a6b8', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#f2a6b8', bottom: 'jeans', hairStyle: 'curly', hairColor: '#1d1410', extras: ['earrings'], skin: '#f4dcc4' }, pose: 'cook' },
    ],
  }),
  cork: plantilla({
    seed: 334, style: 'colonial', palette: ['#2f8fd4', '#f2c14e', '#d9475b', '#e9dcc0', '#3f6b4a'], ground: 'cobble', plaza: '#c9c2b6',
    trees: 'tree', light: 'dusk', centre: 'fountain', entrance: 'CORCAIGH', water: 'east',
    landmark: { kind: 'castle', color: '#8a8478', accent: '#e8743b', label: 'BLARNEY CASTLE' },
    spots: [
      { id: 'mercado', kind: 'market', sign: 'ENGLISH MARKET', color: '#8a3a2a', who: { body: 'f', age: 'adult', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'bob', hairColor: '#b5562a', skin: '#f4dcc4' }, pose: 'cook' },
      { id: 'cobh', kind: 'museum', sign: 'COBH HERITAGE', color: '#4a6a8a', who: { body: 'm', age: 'adult', top: 'sweater', topColor: '#2f4f7a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#1d1410', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'blarney', kind: 'viewpoint', sign: 'BLARNEY STONE', color: '#5a5a5a', who: { body: 'm', age: 'adult', top: 'jacket', topColor: '#3f6b4a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'bald', hairColor: '#7a5233', extras: ['beard'], skin: '#f0d0b0' } },
      { id: 'kinsale', kind: 'restaurant', sign: 'KINSALE', color: '#d9475b', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#f4efe4', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#4a3326', skin: '#f4dcc4' }, pose: 'cook' },
      { id: 'jazz', kind: 'stage', sign: 'CORK JAZZ', color: '#1b1b1b', who: { body: 'm', age: 'adult', top: 'suit', topColor: '#1b1b1b', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'short', hairColor: '#4a3326', extras: ['hat'], skin: '#b07a52' }, pose: 'guitar' },
    ],
  }),
};
