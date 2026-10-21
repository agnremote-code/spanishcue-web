// México 3D · what each state looks like, as data for app/mundo-3d/plantilla.ts.
// The five places go south-west, south-east, north-west, north-east, north.
import plantilla from '../../mundo-3d/plantilla';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const ZONAS: Record<string, SceneBuilder> = {
  cdmx: plantilla({
    seed: 2101, style: 'colonial', palette: ['#c8553d', '#e9b949', '#3f7f9a', '#d98aa3', '#7aa35a'], ground: 'cobble', plaza: '#cbbca3',
    trees: 'tree', light: 'day', centre: 'statue', entrance: 'CIUDAD DE MÉXICO',
    landmark: { kind: 'obelisk', color: '#e6dccb', accent: '#d4a72c', label: 'ÁNGEL DE LA INDEPENDENCIA' },
    spots: [
      { id: 'mercado', kind: 'market', sign: 'MERCADO DE LA MERCED', color: '#e2574c', who: { body: 'f', age: 'adult', top: 'apron', topColor: '#d9475b', hairStyle: 'braids', hairColor: '#1d1410', skin: '#b07a52' } },
      { id: 'metro', kind: 'station', sign: 'METRO ZÓCALO', color: '#f2a03d', who: { body: 'm', age: 'young', top: 'hoodie', topColor: '#3a4f7a', bottom: 'jeans', extras: ['headphones'], skin: '#a8714a' } },
      { id: 'cafe', kind: 'cafe', sign: 'CAFÉ ROMA', color: '#5a8f6b', who: { body: 'm', age: 'adult', top: 'apron', topColor: '#2f3a33', hairStyle: 'curly', extras: ['beard'], skin: '#c08a62' } },
      { id: 'museo', kind: 'museum', sign: 'MUSEO DE ANTROPOLOGÍA', color: '#8a5a3c', who: { body: 'f', age: 'old', top: 'jacket', topColor: '#5d4b7a', hairStyle: 'bun', hairColor: '#cfcfcf', extras: ['glasses'], skin: '#b98660' } },
      { id: 'trajinera', kind: 'harbor', sign: 'XOCHIMILCO', color: '#e04f8a', who: { body: 'm', age: 'old', top: 'shirt', topColor: '#f4efe4', hairStyle: 'cap', extras: ['mustache'], skin: '#9c6640' } },
    ],
  }),
  jalisco: plantilla({
    seed: 2102, style: 'colonial', palette: ['#e9a23b', '#2f7d6d', '#f4e3c3', '#b5452f', '#5b7fb5'], ground: 'stone', plaza: '#d8c9a8',
    trees: 'tree', light: 'dusk', centre: 'kiosk', entrance: 'GUADALAJARA',
    landmark: { kind: 'cathedral', color: '#efe4cc', accent: '#e3c25a', label: 'CATEDRAL DE GUADALAJARA' },
    spots: [
      { id: 'tortas', kind: 'restaurant', sign: 'TORTAS AHOGADAS', color: '#c9372c', who: { body: 'm', age: 'adult', top: 'apron', topColor: '#f4efe4', hairStyle: 'short', extras: ['mustache'], skin: '#b07a52' } },
      { id: 'tequila', kind: 'shop', sign: 'DESTILERÍA AGAVE AZUL', color: '#3a7fb0', who: { body: 'f', age: 'adult', top: 'shirt', topColor: '#2f5d8a', bottom: 'jeans', hairStyle: 'ponytail', skin: '#c08a62' } },
      { id: 'mariachis', kind: 'stage', sign: 'PLAZA DE LOS MARIACHIS', color: '#d4a72c', who: { body: 'm', age: 'adult', top: 'suit', topColor: '#1b1b1b', bottom: 'pants', bottomColor: '#1b1b1b', hairStyle: 'short', extras: ['mustache'], skin: '#a8714a' }, pose: 'guitar' },
      { id: 'escuela', kind: 'school', sign: 'ESCUELA DE ESPAÑOL', color: '#4f8a3c', who: { body: 'f', age: 'young', top: 'sweater', topColor: '#e07a5f', bottom: 'skirt', hairStyle: 'long', extras: ['glasses'], skin: '#d0a07a' } },
      { id: 'chapala', kind: 'viewpoint', sign: 'LAGO DE CHAPALA', color: '#2f7d9e', who: { body: 'm', age: 'elderly', top: 'shirt', topColor: '#9ac1e0', hairStyle: 'bald', extras: ['hat'], skin: '#e8c4a0' } },
    ],
  }),
  oaxaca: plantilla({
    seed: 2103, style: 'colonial', palette: ['#e06c9f', '#56b3c9', '#f2c14e', '#7fb069', '#e8743b'], ground: 'stone', plaza: '#e0cfa8',
    trees: 'tree', light: 'golden', centre: 'tree', entrance: 'OAXACA',
    landmark: { kind: 'pyramid', color: '#bfae8e', accent: '#a8987a', label: 'MONTE ALBÁN' },
    spots: [
      { id: 'comedor', kind: 'restaurant', sign: 'COMEDOR DOÑA CHELO', color: '#7a2e2e', who: { body: 'f', age: 'old', top: 'apron', topColor: '#c74b7a', hairStyle: 'braids', hairColor: '#3a2e28', skin: '#9c6640' } },
      { id: 'alebrijes', kind: 'shop', sign: 'TALLER DE ALEBRIJES', color: '#8a4f9e', who: { body: 'm', age: 'adult', top: 'tshirt', topColor: '#f2c14e', hairStyle: 'short', extras: ['beard'], skin: '#a8714a' } },
      { id: 'iglesia', kind: 'church', sign: 'SANTO DOMINGO', color: '#c9a227', who: { body: 'f', age: 'young', top: 'shirt', topColor: '#ffffff', bottom: 'jeans', hairStyle: 'ponytail', extras: ['backpack'], skin: '#c08a62' } },
      { id: 'mezcal', kind: 'cafe', sign: 'MEZCALERÍA EL MAGUEY', color: '#3f6f4f', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#6b3f2a', hairStyle: 'long', hairColor: '#1d1410', skin: '#9c6640' } },
      { id: 'guelaguetza', kind: 'stage', sign: 'GUELAGUETZA', color: '#e8743b', who: { body: 'f', age: 'adult', top: 'dress', topColor: '#e8743b', hairStyle: 'braids', skin: '#a8714a' }, pose: 'dance' },
    ],
  }),
  'quintana-roo': plantilla({
    seed: 2104, style: 'tropical', palette: ['#f4efe4', '#9fd6d2', '#f6c28b', '#e8f1f2', '#f29ca3'], ground: 'sand', plaza: '#efe4cc',
    trees: 'palm', light: 'day', centre: 'fountain', entrance: 'CANCÚN · TULUM', water: 'east',
    landmark: { kind: 'temple', color: '#cdbf9f', accent: '#b9aa88', label: 'COBÁ' },
    spots: [
      { id: 'hotel', kind: 'shop', sign: 'HOTEL CARIBE', color: '#2b9bc4', who: { body: 'f', age: 'young', top: 'uniform', topColor: '#2b9bc4', bottom: 'skirt', hairStyle: 'bun', skin: '#c08a62' } },
      { id: 'playa', kind: 'beach', sign: 'SALVAVIDAS', color: '#e84a3c', who: { body: 'm', age: 'young', top: 'tshirt', topColor: '#e84a3c', bottom: 'shorts', hairStyle: 'buzz', skin: '#8a5a3a' } },
      { id: 'cenote', kind: 'park', sign: 'CENOTE SAC ACTUN', color: '#2f9e7a', who: { body: 'm', age: 'adult', top: 'tshirt', topColor: '#2f9e7a', bottom: 'shorts', hairStyle: 'short', extras: ['hat'], skin: '#9c6640' } },
      { id: 'buceo', kind: 'harbor', sign: 'CENTRO DE BUCEO', color: '#f2a03d', who: { body: 'f', age: 'adult', top: 'tshirt', topColor: '#1f3f6b', bottom: 'shorts', hairStyle: 'ponytail', hairColor: '#c9a46a', skin: '#e0b18a' } },
      { id: 'tulum', kind: 'viewpoint', sign: 'TULUM', color: '#c9a46a', who: { body: 'm', age: 'adult', top: 'shirt', topColor: '#f4efe4', hairStyle: 'short', extras: ['glasses', 'hat'], skin: '#a8714a' } },
    ],
  }),
};
