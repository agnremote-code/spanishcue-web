// Más allá · who is who and where. You die old, in a hospital bed, with your
// family around you; your soul rises and reaches the Umbral, where you choose
// where to go first: the Cielo or the Infierno. Each world has three zones
// with two encounters each (an angel, a demon, a soul), and every encounter
// ends in ONE deep question with its own way of answering (FORMS): a scale,
// candles, books, a river, stars, cards, doors, mirror shards, a matrix,
// coins, chains and a clock. Nothing is right or wrong: the class collects the
// answers into the «retrato de tu alma» at the end.
// Every character keeps one voice for the whole class: the browser voice of
// the conversation follows `gender`; the neural voice of the listenings is
// `voice` (app/escucha-3d/voices.json).

export const WORLDS = [
  { id: 'cielo', name: 'El Cielo', sign: 'EL CIELO', hook: 'Luz que no quema, nubes que sostienen y respuestas que no esperabas.' },
  { id: 'infierno', name: 'El Infierno', sign: 'EL INFIERNO', hook: 'Fuego, ceniza y ventanillas. Aquí nadie te tortura tanto como tú.' },
];
export const WORLD_IDS = WORLDS.map((w) => w.id);

export const ZONES = [
  { id: 'portal', world: 'cielo', name: 'Las Puertas de Perla', hook: 'Un portero que lee expedientes y un jardín donde nadie tiene prisa.' },
  { id: 'archivo', world: 'cielo', name: 'El Archivo de las Vidas', hook: 'Todos los libros de todas las vidas, y el río que hace olvidar.' },
  { id: 'cumbre', world: 'cielo', name: 'La Cumbre', hook: 'Un banquete sin fin y un mirador desde donde se ve la Tierra.' },
  { id: 'antesala', world: 'infierno', name: 'La Antesala', hook: 'Ventanillas, formularios por triplicado y una sala de espejos.' },
  { id: 'juicio', world: 'infierno', name: 'El Juicio', hook: 'Un tribunal de pequeñas mentiras y un barquero sobre un río de fuego.' },
  { id: 'abismo', world: 'infierno', name: 'El Abismo', hook: 'Jaulas abiertas que nadie abandona y un trono al final de todo.' },
];
export const ZONE_IDS = ZONES.map((z) => z.id);
export const zoneById = (id) => ZONES.find((z) => z.id === id) ?? null;

// kind: angel (wings, halo), demon (horns, tail), soul (a person made of light).
// look: what the 3D figure wears (app/noche-abierta/people3d Look).
export const CAST = {
  gabriel: { name: 'Gabriel', full: 'Gabriel', role: 'Ángel portero de las Puertas de Perla', kind: 'angel', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia',
    look: { body: 'm', age: 'adult', build: 'athletic', height: 1.92, top: 'coat', topColor: '#f6f1e4', bottom: 'pants', bottomColor: '#efe8d8', hairStyle: 'curly', hairColor: '#e8c77a', skin: '#c99468' } },
  lucia: { name: 'Lucía', full: 'Lucía Ferraro', role: 'Murió a los veintinueve años; ahora cuida el jardín', kind: 'soul', gender: 'f', voice: 'es-AR-ElenaNeural', country: 'Argentina',
    look: { body: 'f', age: 'young', build: 'slim', top: 'dress', topColor: '#cfe7d2', bottom: 'skirt', bottomColor: '#cfe7d2', hairStyle: 'long', hairColor: '#6a3e22', skin: '#efcfb3', extras: ['flowers'] } },
  uriel: { name: 'Uriel', full: 'Uriel', role: 'Ángel archivista: guarda el libro de cada vida', kind: 'angel', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile',
    look: { body: 'f', age: 'adult', build: 'slim', height: 1.84, top: 'coat', topColor: '#e9e3f4', bottom: 'skirt', bottomColor: '#ddd5ec', hairStyle: 'bun', hairColor: '#f1ede6', skin: '#8d5a3c', extras: ['glasses'] } },
  ernesto: { name: 'Ernesto', full: 'Don Ernesto Valdés', role: 'Pescador de noventa y un años junto al río del olvido', kind: 'soul', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba',
    look: { body: 'm', age: 'elderly', build: 'slim', top: 'shirt', topColor: '#e8e0c8', bottom: 'pants', bottomColor: '#7a6a52', hairStyle: 'short', hairColor: '#e6e3dc', skin: '#a86e4a', extras: ['hat', 'mustache'] } },
  mateo: { name: 'Mateo', full: 'Mateo Arriaga', role: 'Fue millonario; en el banquete sirve las mesas', kind: 'soul', gender: 'm', voice: 'es-MX-JorgeNeural', country: 'México',
    look: { body: 'm', age: 'old', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#9a968e', skin: '#d29a72', extras: ['glasses'] } },
  azael: { name: 'Azael', full: 'Azael', role: 'Ángel del mirador; antes de ser ángel fue un hombre', kind: 'angel', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú',
    look: { body: 'm', age: 'young', build: 'slim', height: 1.86, top: 'coat', topColor: '#eef3f8', bottom: 'pants', bottomColor: '#dfe6ee', hairStyle: 'long', hairColor: '#141110', skin: '#b07a52' } },
  mara: { name: 'Mara', full: 'Mara', role: 'Demonio de la ventanilla de entrada', kind: 'demon', gender: 'f', voice: 'es-ES-XimenaNeural', country: 'España',
    look: { body: 'f', age: 'adult', build: 'slim', top: 'suit', topColor: '#1c1416', bottom: 'skirt', bottomColor: '#1c1416', hairStyle: 'bob', hairColor: '#120c0c', skin: '#b8423a', extras: ['glasses'] } },
  valeria: { name: 'Valeria', full: 'Valeria Montes', role: 'Alma condenada a verse como la veían los demás', kind: 'soul', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela',
    look: { body: 'f', age: 'young', build: 'slim', top: 'dress', topColor: '#7a1f3a', bottom: 'skirt', bottomColor: '#7a1f3a', hairStyle: 'long', hairColor: '#2b1d14', skin: '#d29a72', extras: ['earrings'] } },
  asmodeo: { name: 'Asmodeo', full: 'Asmodeo', role: 'Fiscal del tribunal de las pequeñas mentiras', kind: 'demon', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España',
    look: { body: 'm', age: 'old', build: 'heavy', height: 1.9, top: 'suit', topColor: '#2a0e10', bottom: 'pants', bottomColor: '#1a0a0b', hairStyle: 'bald', hairColor: '#1a1a1a', skin: '#8e2a24', extras: ['beard'] } },
  flegias: { name: 'Flegias', full: 'Flegias', role: 'Barquero del río de fuego', kind: 'demon', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay',
    look: { body: 'm', age: 'elderly', build: 'slim', height: 1.95, top: 'coat', topColor: '#141012', bottom: 'pants', bottomColor: '#141012', hairStyle: 'long', hairColor: '#cfcac0', skin: '#6e3a30', extras: ['beard'] } },
  ramiro: { name: 'Ramiro', full: 'Ramiro Duarte', role: 'Alma en una jaula con la puerta abierta', kind: 'soul', gender: 'm', voice: 'es-DO-EmilioNeural', country: 'República Dominicana',
    look: { body: 'm', age: 'adult', build: 'average', top: 'shirt', topColor: '#5a5048', bottom: 'jeans', bottomColor: '#2a2f3a', hairStyle: 'short', hairColor: '#141110', skin: '#8d5a3c', extras: ['beard'] } },
  lucero: { name: 'Lucero', full: 'Lucero', role: 'El dueño del Infierno: elegante, educado y muy cansado', kind: 'demon', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina',
    look: { body: 'm', age: 'adult', build: 'slim', height: 1.94, top: 'suit', topColor: '#0e0b0c', bottom: 'pants', bottomColor: '#0e0b0c', hairStyle: 'short', hairColor: '#0b0909', skin: '#a8352c' } },
};

// The ways of answering. Each encounter has its own, so no two questions look
// alike. `options` is how many answers the form holds (the checker enforces it).
export const FORMS = {
  balanza: { options: 3, label: 'La balanza', hint: 'Pon tu respuesta en un plato o en el centro.' },
  velas: { options: 4, label: 'Las velas', hint: 'Apaga la vela de lo que dejarías primero.' },
  libros: { options: 4, label: 'Los libros', hint: 'Saca de la estantería el capítulo que reescribirías.' },
  rio: { options: 5, label: 'El río', hint: 'Elige hasta dónde te metes en el agua del olvido.' },
  estrellas: { options: 5, label: 'Las estrellas', hint: 'Toca la estrella que más brilla para ti.' },
  cartas: { options: 3, label: 'Las cartas', hint: 'Da la vuelta a una carta: será tu epitafio.' },
  puertas: { options: 4, label: 'Las puertas', hint: 'Abre la puerta de tu infierno.' },
  espejo: { options: 4, label: 'El espejo roto', hint: 'Toca el trozo de espejo que escondes.' },
  matriz: { options: 4, label: 'El expediente', hint: 'Marca la casilla de tu mentira más frecuente.' },
  monedas: { options: 4, label: 'Las monedas', hint: 'Pon una moneda en la mano del barquero.' },
  cadenas: { options: 3, label: 'Las cadenas', hint: 'Rompe la cadena que más te sujeta.' },
  reloj: { options: 4, label: 'El reloj', hint: 'Gira la aguja hasta tu respuesta.' },
};

// The twelve encounters, in the order of each world.
export const SPOTS = [
  { id: 'puerta', zone: 'portal', world: 'cielo', cast: ['gabriel'], form: 'balanza' },
  { id: 'jardin', zone: 'portal', world: 'cielo', cast: ['lucia'], form: 'velas' },
  { id: 'biblioteca', zone: 'archivo', world: 'cielo', cast: ['uriel'], form: 'libros' },
  { id: 'rio', zone: 'archivo', world: 'cielo', cast: ['ernesto'], form: 'rio' },
  { id: 'banquete', zone: 'cumbre', world: 'cielo', cast: ['mateo'], form: 'estrellas' },
  { id: 'mirador', zone: 'cumbre', world: 'cielo', cast: ['azael'], form: 'cartas' },
  { id: 'ventanilla', zone: 'antesala', world: 'infierno', cast: ['mara'], form: 'puertas' },
  { id: 'espejos', zone: 'antesala', world: 'infierno', cast: ['valeria'], form: 'espejo' },
  { id: 'tribunal', zone: 'juicio', world: 'infierno', cast: ['asmodeo'], form: 'matriz' },
  { id: 'barca', zone: 'juicio', world: 'infierno', cast: ['flegias'], form: 'monedas' },
  { id: 'jaula', zone: 'abismo', world: 'infierno', cast: ['ramiro'], form: 'cadenas' },
  { id: 'trono', zone: 'abismo', world: 'infierno', cast: ['lucero'], form: 'reloj' },
];
export const SPOT_IDS = SPOTS.map((s) => s.id);
export const spotById = (id) => SPOTS.find((s) => s.id === id) ?? null;
export const spotsOf = (world) => SPOTS.filter((s) => s.world === world);

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue (A0 counts the Spanish half): short on purpose,
// the question is the heart of every encounter.
export const SCENE_WORDS = { A0: [22, 90], A1: [35, 115], A2: [55, 145], B1: [70, 175], B2: [85, 205], C1: [95, 225], C2: [100, 245] };
// The two open questions that follow each answer: from A2 on, long enough to ask for a real answer.
export const TALK_MIN_WORDS = { A0: 3, A1: 5, A2: 10, B1: 13, B2: 15, C1: 16, C2: 16 };
