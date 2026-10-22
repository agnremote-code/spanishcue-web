// Madrid infectada · who is who and where. Ten zones of a Madrid emptied by a
// virus, in the order the class walks them, two people with a story in each.
// Every character keeps one voice for the whole class: the browser voice of
// the conversation scenes follows `gender`, and the neural voice of the
// listenings is `voice` (+ `pitch`, so the three Spanish voices of
// app/escucha-3d/voices.json can play more than three madrileños).

export const ZONES = [
  { id: 'sol', name: 'Puerta del Sol', sign: 'PUERTA DEL SOL', hook: 'El kilómetro cero, en silencio por primera vez.', sound: 'plaza', mood: 'dawn' },
  { id: 'granvia', name: 'Gran Vía', sign: 'GRAN VÍA', hook: 'Autobuses volcados, escaparates rotos y la nube entre los edificios.', sound: 'avenue', mood: 'smoke' },
  { id: 'plaza', name: 'Plaza Mayor', sign: 'PLAZA MAYOR', hook: 'El refugio: tiendas de campaña, colas y una nueva sociedad.', sound: 'camp', mood: 'amber' },
  { id: 'metro', name: 'Metro de Madrid', sign: 'CHAMBERÍ', hook: 'La estación fantasma, donde se esconden los que no quieren subir.', sound: 'tunnel', mood: 'under' },
  { id: 'retiro', name: 'Parque del Retiro', sign: 'PARQUE DEL RETIRO', hook: 'La naturaleza vuelve, y en el Palacio de Cristal hay un laboratorio.', sound: 'park', mood: 'green' },
  { id: 'malasana', name: 'Malasaña', sign: 'MALASAÑA', hook: 'Barricadas, grafitis y un bar que no piensa cerrar.', sound: 'barrio', mood: 'night' },
  { id: 'atocha', name: 'Estación de Atocha', sign: 'ATOCHA', hook: 'Trenes parados, seiscientas personas y un solo convoy.', sound: 'station', mood: 'amber' },
  { id: 'palacio', name: 'Palacio Real', sign: 'PALACIO REAL', hook: 'Zona militar. Aquí alguien sabe de dónde salió el virus.', sound: 'military', mood: 'cold' },
  { id: 'hospital', name: 'Hospital de campaña', sign: 'HOSPITAL DE CAMPAÑA', hook: 'Médicos agotados, camas de sobra y medicinas de menos.', sound: 'hospital', mood: 'cold' },
  { id: 'rio', name: 'Madrid Río', sign: 'MADRID RÍO', hook: 'La ruta de salida. La última barca sale al amanecer.', sound: 'river', mood: 'dawn' },
];
export const ZONE_IDS = ZONES.map((z) => z.id);
export const zoneById = (id) => ZONES.find((z) => z.id === id) ?? null;

const SPAIN = 'España';
// look: what the 3D person wears (app/noche-abierta/people3d Look).
export const CAST = {
  lola: { name: 'Lola', full: 'Lola Benavente', role: 'Locutora de una radio pirata', gender: 'f', voice: 'es-ES-ElviraNeural', pitch: '+0Hz', country: SPAIN,
    look: { body: 'f', age: 'adult', top: 'jacket', topColor: '#3b4a3f', bottom: 'jeans', bottomColor: '#2c3546', hairStyle: 'bob', hairColor: '#7a3a1e', skin: '#eac0a0', extras: ['headphones'] } },
  paco: { name: 'Paco', full: 'Paco Recio', role: 'Lotero de toda la vida', gender: 'm', voice: 'es-ES-AlvaroNeural', pitch: '-8Hz', country: SPAIN,
    look: { body: 'm', age: 'old', build: 'heavy', top: 'sweater', topColor: '#7a2a2a', bottom: 'pants', bottomColor: '#3a3226', hairStyle: 'bald', hairColor: '#b4b1aa', skin: '#e0ac85', extras: ['mustache', 'glasses'] } },
  julian: { name: 'Julián', full: 'Julián Pardo', role: 'Conductor de autobús de la EMT', gender: 'm', voice: 'es-ES-AlvaroNeural', pitch: '+0Hz', country: SPAIN,
    look: { body: 'm', age: 'adult', build: 'heavy', top: 'uniform', topColor: '#2d4f7a', bottom: 'pants', bottomColor: '#1e2a3a', hairStyle: 'short', hairColor: '#3d2a1c', skin: '#d29a72', extras: ['beard'] } },
  vera: { name: 'Vera', full: 'Vera Luque', role: 'Influencer que sigue en directo', gender: 'f', voice: 'es-ES-XimenaNeural', pitch: '+6Hz', country: SPAIN,
    look: { body: 'f', age: 'young', build: 'slim', top: 'hoodie', topColor: '#d9c6e8', bottom: 'jeans', bottomColor: '#3a4a6a', hairStyle: 'long', hairColor: '#d6b77a', skin: '#efcfb3', extras: ['earrings'] } },
  montse: { name: 'Montse', full: 'Montse Ibáñez', role: 'Policía municipal en la puerta del refugio', gender: 'f', voice: 'es-ES-ElviraNeural', pitch: '-5Hz', country: SPAIN,
    look: { body: 'f', age: 'adult', build: 'athletic', top: 'uniform', topColor: '#1f2b45', bottom: 'pants', bottomColor: '#1a2238', hairStyle: 'ponytail', hairColor: '#2b1d14', skin: '#e0ac85', extras: ['hat'] } },
  carmen: { name: 'Carmen', full: 'Carmen Olmedo', role: 'Profesora de instituto', gender: 'f', voice: 'es-ES-XimenaNeural', pitch: '-3Hz', country: SPAIN,
    look: { body: 'f', age: 'adult', top: 'coat', topColor: '#8a5a3a', bottom: 'skirt', bottomColor: '#3a3a40', hairStyle: 'curly', hairColor: '#5e5a56', skin: '#eac0a0', extras: ['glasses', 'scarf'] } },
  sara: { name: 'Sara', full: 'Sara Molina', role: 'Escondida en el metro con su pareja', gender: 'f', voice: 'es-ES-XimenaNeural', pitch: '+2Hz', country: SPAIN,
    look: { body: 'f', age: 'young', top: 'jacket', topColor: '#8e3b3b', bottom: 'jeans', bottomColor: '#2a2f3a', hairStyle: 'long', hairColor: '#1d1612', skin: '#e0ac85', extras: ['backpack'] } },
  toni: { name: 'Toni', full: 'Toni Robles', role: 'Pareja de Sara', gender: 'm', voice: 'es-ES-AlvaroNeural', pitch: '+6Hz', country: SPAIN,
    look: { body: 'm', age: 'young', top: 'tshirt', topColor: '#4a5a3a', bottom: 'jeans', bottomColor: '#30364a', hairStyle: 'curly', hairColor: '#2b1d14', skin: '#d29a72' } },
  emilio: { name: 'Emilio', full: 'Don Emilio Lozano', role: 'Jefe de estación jubilado', gender: 'm', voice: 'es-ES-AlvaroNeural', pitch: '-14Hz', country: SPAIN,
    look: { body: 'm', age: 'elderly', build: 'slim', top: 'uniform', topColor: '#2a3550', bottom: 'pants', bottomColor: '#20283a', hairStyle: 'short', hairColor: '#d4d1ca', skin: '#eac0a0', extras: ['hat', 'mustache'] } },
  elena: { name: 'Elena', full: 'Dra. Elena Castro', role: 'Viróloga del laboratorio secreto', gender: 'f', voice: 'es-ES-ElviraNeural', pitch: '+4Hz', country: SPAIN,
    look: { body: 'f', age: 'adult', build: 'slim', top: 'coat', topColor: '#eef0ee', bottom: 'pants', bottomColor: '#2a2a2e', hairStyle: 'bun', hairColor: '#3d2a1c', skin: '#efcfb3', extras: ['glasses'] } },
  marcos: { name: 'Marcos', full: 'Marcos Ríos', role: 'Corresponsal mexicano atrapado en Madrid', gender: 'm', voice: 'es-MX-JorgeNeural', pitch: '+0Hz', country: 'México',
    look: { body: 'm', age: 'adult', top: 'jacket', topColor: '#6a5a3a', bottom: 'jeans', bottomColor: '#2a3040', hairStyle: 'short', hairColor: '#141110', skin: '#c08560', extras: ['bag', 'beard'] } },
  nacho: { name: 'Nacho', full: 'Nacho Ferrer', role: 'Camarero y pinchadiscos de barrio', gender: 'm', voice: 'es-ES-AlvaroNeural', pitch: '+10Hz', country: SPAIN,
    look: { body: 'm', age: 'young', build: 'slim', top: 'tshirt', topColor: '#1c1c1e', bottom: 'jeans', bottomColor: '#3a3a3a', hairStyle: 'ponytail', hairColor: '#141110', skin: '#eac0a0', extras: ['earrings', 'headphones'] } },
  arturo: { name: 'Arturo', full: 'Arturo Galván', role: 'Chef argentino que no cierra su restaurante', gender: 'm', voice: 'es-AR-TomasNeural', pitch: '+0Hz', country: 'Argentina',
    look: { body: 'm', age: 'adult', build: 'heavy', top: 'apron', topColor: '#f4efe4', bottom: 'pants', bottomColor: '#2a2a2a', hairStyle: 'short', hairColor: '#5a3c26', skin: '#e0ac85', extras: ['beard'] } },
  mercedes: { name: 'Mercedes', full: 'Mercedes Calvo', role: 'Jefa de estación de Atocha', gender: 'f', voice: 'es-ES-ElviraNeural', pitch: '-10Hz', country: SPAIN,
    look: { body: 'f', age: 'adult', build: 'average', top: 'uniform', topColor: '#5a2a5a', bottom: 'pants', bottomColor: '#24242c', hairStyle: 'short', hairColor: '#8e8c88', skin: '#e0ac85' } },
  salvatierra: { name: 'Íñigo', full: 'Íñigo Salvatierra', role: 'Empresario que vende dosis de inmunidad', gender: 'm', voice: 'es-ES-AlvaroNeural', pitch: '+3Hz', country: SPAIN,
    look: { body: 'm', age: 'adult', build: 'average', top: 'suit', topColor: '#22252e', bottom: 'pants', bottomColor: '#22252e', hairStyle: 'short', hairColor: '#5a3c26', skin: '#efcfb3', extras: ['glasses'] } },
  arriaga: { name: 'Gonzalo', full: 'Gonzalo Arriaga', role: 'Consejero escondido en el Palacio Real', gender: 'm', voice: 'es-ES-AlvaroNeural', pitch: '-4Hz', country: SPAIN,
    look: { body: 'm', age: 'old', build: 'heavy', top: 'suit', topColor: '#2a3040', bottom: 'pants', bottomColor: '#2a3040', hairStyle: 'short', hairColor: '#b4b1aa', skin: '#eac0a0' } },
  reyes: { name: 'Inés', full: 'Capitana Inés Reyes', role: 'Militar al mando del Palacio', gender: 'f', voice: 'es-ES-XimenaNeural', pitch: '-8Hz', country: SPAIN,
    look: { body: 'f', age: 'adult', build: 'athletic', top: 'uniform', topColor: '#4a5236', bottom: 'pants', bottomColor: '#3e4430', hairStyle: 'bun', hairColor: '#2b1d14', skin: '#d29a72', extras: ['helmet'] } },
  ochoa: { name: 'Pilar', full: 'Dra. Pilar Ochoa', role: 'Médica de urgencias, harta de todo', gender: 'f', voice: 'es-ES-ElviraNeural', pitch: '+8Hz', country: SPAIN,
    look: { body: 'f', age: 'adult', top: 'scrubs', topColor: '#3f7f86', bottom: 'pants', bottomColor: '#3f7f86', hairStyle: 'ponytail', hairColor: '#7a3a1e', skin: '#f6dcc6', extras: ['glasses'] } },
  yuleisy: { name: 'Yuleisy', full: 'Yuleisy Pérez', role: 'Enfermera de triaje', gender: 'f', voice: 'es-VE-PaolaNeural', pitch: '+0Hz', country: 'Venezuela',
    look: { body: 'f', age: 'young', top: 'scrubs', topColor: '#5a6fa0', bottom: 'pants', bottomColor: '#5a6fa0', hairStyle: 'braids', hairColor: '#141110', skin: '#8d5a3c' } },
  remedios: { name: 'Remedios', full: 'Doña Remedios Aguado', role: 'Vecina de 89 años que no se va', gender: 'f', voice: 'es-ES-ElviraNeural', pitch: '-14Hz', country: SPAIN,
    look: { body: 'f', age: 'elderly', build: 'average', top: 'coat', topColor: '#3a2a3a', bottom: 'skirt', bottomColor: '#2a2a2a', hairStyle: 'bun', hairColor: '#e8e6e0', skin: '#eac0a0', extras: ['glasses', 'scarf'] } },
  jaime: { name: 'Jaime', full: 'Jaime Sanz', role: 'Barquero de la última salida', gender: 'm', voice: 'es-ES-AlvaroNeural', pitch: '-2Hz', country: SPAIN,
    look: { body: 'm', age: 'adult', build: 'athletic', top: 'jacket', topColor: '#c46a1e', bottom: 'pants', bottomColor: '#2a3326', hairStyle: 'buzz', hairColor: '#3d2a1c', skin: '#c99468', extras: ['beard'] } },
};

// The twenty white circles: zone, who is there (first = who you talk to).
export const SPOTS = [
  { id: 'radio', zone: 'sol', cast: ['lola'] },
  { id: 'loteria', zone: 'sol', cast: ['paco'] },
  { id: 'autobus', zone: 'granvia', cast: ['julian'] },
  { id: 'directo', zone: 'granvia', cast: ['vera'] },
  { id: 'puerta', zone: 'plaza', cast: ['montse'] },
  { id: 'escuela', zone: 'plaza', cast: ['carmen'] },
  { id: 'pareja', zone: 'metro', cast: ['sara', 'toni'] },
  { id: 'jefe', zone: 'metro', cast: ['emilio'] },
  { id: 'laboratorio', zone: 'retiro', cast: ['elena'] },
  { id: 'periodista', zone: 'retiro', cast: ['marcos'] },
  { id: 'bar', zone: 'malasana', cast: ['nacho'] },
  { id: 'cocina', zone: 'malasana', cast: ['arturo'] },
  { id: 'andenes', zone: 'atocha', cast: ['mercedes'] },
  { id: 'dosis', zone: 'atocha', cast: ['salvatierra'] },
  { id: 'consejero', zone: 'palacio', cast: ['arriaga'] },
  { id: 'capitana', zone: 'palacio', cast: ['reyes'] },
  { id: 'urgencias', zone: 'hospital', cast: ['ochoa'] },
  { id: 'triaje', zone: 'hospital', cast: ['yuleisy'] },
  { id: 'vecina', zone: 'rio', cast: ['remedios'] },
  { id: 'barca', zone: 'rio', cast: ['jaime'] },
];
export const SPOT_IDS = SPOTS.map((s) => s.id);
export const spotById = (id) => SPOTS.find((s) => s.id === id) ?? null;
export const spotsOf = (zone) => SPOTS.filter((s) => s.zone === zone);

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [25, 95], A1: [45, 130], A2: [70, 170], B1: [95, 215], B2: [115, 250], C1: [130, 285], C2: [140, 310] };
// The two questions of «Tu turno»: from A2 on, long enough to ask for a real answer.
export const TALK_MIN_WORDS = { A0: 3, A1: 5, A2: 13, B1: 16, B2: 18, C1: 20, C2: 20 };
