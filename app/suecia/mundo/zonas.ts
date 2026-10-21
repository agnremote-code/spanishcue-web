// Suecia 3D · what each region looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  estocolmo: plantilla({
    seed: 2271, style: 'nordic', palette: ['#e9a23b', '#c9343a', '#f2c14e', '#b3543a', '#f4efe4'], ground: 'cobble', plaza: '#cfc6b6',
    trees: 'tree', light: 'golden', centre: 'statue', entrance: 'STOCKHOLM', water: 'east',
    landmark: { kind: 'tower', color: '#b3543a', accent: '#e9c46a', label: 'STADSHUSET' },
    spots: [
      { id: 'fika', kind: 'cafe', sign: 'FIKA', color: '#7a4a2a', who: { body: 'f', age: 'young', top: 'apron', topColor: '#4a5a3a', hairStyle: 'bun', hairColor: '#e0c27a', skin: '#f0d0b0' } },
      { id: 'vasa', kind: 'museum', sign: 'VASAMUSEET', color: '#3a3a4a', who: { body: 'm', age: 'old', top: 'sweater', topColor: '#2f4f7a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['glasses', 'beard'], skin: '#f0d0b0' } },
      { id: 'ferry', kind: 'harbor', sign: 'SKÄRGÅRDEN', color: '#2f6f9e', who: { body: 'm', age: 'old', build: 'heavy', top: 'coat', topColor: '#1f3f6b', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['beard'], skin: '#e8c4a0' } },
      { id: 'mercado', kind: 'market', sign: 'ÖSTERMALMS SALUHALL', color: '#8a3a2a', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#2f4f7a', hairStyle: 'ponytail', hairColor: '#c9a46a', skin: '#f0d0b0' } },
      { id: 'nobel', kind: 'church', sign: 'NOBEL', color: '#c9a227', who: { body: 'f', age: 'adult', top: 'suit', topColor: '#1b1b1b', bottom: 'skirt', bottomColor: '#1b1b1b', hairStyle: 'bob', hairColor: '#7a5233', extras: ['earrings'], skin: '#f0d0b0' } },
    ],
  }),
  gotemburgo: plantilla({
    seed: 2272, style: 'brick', palette: ['#b3543a', '#e9dcc0', '#3f8f6b', '#2f5d8a', '#d98a5a'], ground: 'asphalt', plaza: '#c9c2b6',
    trees: 'tree', light: 'overcast', centre: 'kiosk', entrance: 'GÖTEBORG', water: 'west',
    landmark: { kind: 'lighthouse', color: '#f4efe4', accent: '#c9343a', label: 'GÖTEBORGS HAMN' },
    spots: [
      { id: 'liseberg', kind: 'park', sign: 'LISEBERG', color: '#d9475b', who: { body: 'm', age: 'young', top: 'uniform', topColor: '#3f8f6b', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#e0c27a', skin: '#f0d0b0' } },
      { id: 'volvo', kind: 'shop', sign: 'BILFABRIKEN', color: '#2f4f7a', who: { body: 'f', age: 'adult', top: 'jacket', topColor: '#e8743b', bottom: 'jeans', hairStyle: 'ponytail', hairColor: '#4a3326', extras: ['glasses'], skin: '#e8c4a0' } },
      { id: 'haga', kind: 'cafe', sign: 'HAGA BAGERI', color: '#7a4a2a', who: { body: 'f', age: 'young', top: 'apron', topColor: '#f4efe4', hairStyle: 'braids', hairColor: '#c9a46a', skin: '#f0d0b0' }, pose: 'cook' },
      { id: 'tranvia', kind: 'station', sign: 'SPÅRVAGN', color: '#2f6f9e', who: { body: 'm', age: 'adult', top: 'uniform', topColor: '#2f4f7a', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'short', hairColor: '#1d1410', extras: ['beard'], skin: '#c08a62' } },
      { id: 'festival', kind: 'stage', sign: 'FESTIVAL', color: '#7a5aa8', who: { body: 'f', age: 'adult', top: 'tshirt', topColor: '#1b1b1b', bottom: 'jeans', hairStyle: 'short', hairColor: '#d9475b', extras: ['headphones'], skin: '#e8c4a0' } },
    ],
  }),
  laponia: plantilla({
    seed: 2273, style: 'alpine', palette: ['#8a6a4a', '#c9343a', '#6b4f3a', '#d8cbb3', '#2f5d8a'], ground: 'snow', plaza: '#e3e6ea',
    trees: 'pine', light: 'snow', centre: 'tree', entrance: 'KIRUNA', water: 'west',
    landmark: { kind: 'cathedral', color: '#8a3a2a', accent: '#d8cbb3', label: 'KIRUNA KYRKA' },
    spots: [
      { id: 'hotel-hielo', kind: 'museum', sign: 'ICEHOTEL', color: '#9ac1e0', who: { body: 'm', age: 'adult', build: 'athletic', top: 'coat', topColor: '#2f4f7a', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'cap', hairColor: '#e0c27a', extras: ['beard'], skin: '#f0d0b0' } },
      { id: 'renos', kind: 'park', sign: 'RENAR', color: '#c9343a', who: { body: 'f', age: 'young', top: 'coat', topColor: '#2f5d8a', bottom: 'pants', bottomColor: '#c9343a', hairStyle: 'braids', hairColor: '#4a3326', extras: ['hat'], skin: '#e8c4a0' } },
      { id: 'aurora', kind: 'viewpoint', sign: 'NORRSKEN', color: '#3f8f6b', who: { body: 'm', age: 'old', top: 'coat', topColor: '#e8743b', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#cfcfcf', extras: ['glasses', 'hat'], skin: '#f0d0b0' } },
      { id: 'sauna', kind: 'harbor', sign: 'BASTU', color: '#8a6a4a', who: { body: 'f', age: 'adult', top: 'sweater', topColor: '#d8cbb3', bottom: 'pants', bottomColor: '#4a5a3a', hairStyle: 'long', hairColor: '#e0c27a', skin: '#f0d0b0' } },
      { id: 'kiruna', kind: 'station', sign: 'GRUVAN', color: '#5a5a5a', who: { body: 'm', age: 'adult', build: 'heavy', top: 'jacket', topColor: '#f2c14e', bottom: 'pants', bottomColor: '#2f4f7a', hairStyle: 'buzz', hairColor: '#7a5233', extras: ['mustache'], skin: '#e8c4a0' } },
    ],
  }),
  malmo: plantilla({
    seed: 2274, style: 'modern', palette: ['#f4efe4', '#e9a23b', '#2f8fd4', '#7fb069', '#f2c14e'], ground: 'stone', plaza: '#d6d0c4',
    trees: 'tree', light: 'day', centre: 'fountain', entrance: 'MALMÖ', water: 'west',
    landmark: { kind: 'tower', color: '#e8edf2', accent: '#9ac1e0', label: 'TURNING TORSO' },
    spots: [
      { id: 'bicicleta', kind: 'shop', sign: 'CYKELBUD', color: '#d9475b', who: { body: 'f', age: 'young', build: 'athletic', top: 'jacket', topColor: '#f2c14e', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'ponytail', hairColor: '#e0c27a', extras: ['hat'], skin: '#f0d0b0' } },
      { id: 'puente', kind: 'station', sign: 'ÖRESUNDSTÅG', color: '#7a5aa8', who: { body: 'm', age: 'adult', top: 'uniform', topColor: '#5a3a7a', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'short', hairColor: '#7a5233', extras: ['glasses'], skin: '#f0d0b0' } },
      { id: 'kallbadhus', kind: 'beach', sign: 'KALLBADHUS', color: '#2f6f9e', who: { body: 'f', age: 'elderly', top: 'coat', topColor: '#d9475b', bottom: 'pants', bottomColor: '#2f4f7a', hairStyle: 'short', hairColor: '#e9e9e9', skin: '#f0d0b0' } },
      { id: 'granja', kind: 'park', sign: 'GÅRDSBUTIK', color: '#f2c14e', who: { body: 'm', age: 'old', build: 'heavy', top: 'shirt', topColor: '#7a9ac1', bottom: 'jeans', hairStyle: 'cap', hairColor: '#cfcfcf', extras: ['beard'], skin: '#e8c4a0' } },
      { id: 'mollevangen', kind: 'market', sign: 'MÖLLEVÅNGSTORGET', color: '#e2574c', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#4f8a3c', bottom: 'jeans', hairStyle: 'long', hairColor: '#1d1410', extras: ['earrings'], skin: '#c08a62' } },
    ],
  }),
};
