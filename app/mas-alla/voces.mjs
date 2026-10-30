// Más allá · the voices: everyone you see in the three places, beyond the
// twelve encounters, and the places that stop you. Each one has its own
// circle (in the Infierno a circle of flames) and a short card: what they say
// and three questions to talk about your own life (texts in voces/<level>.mjs).
// `extra` / `walker` point at the person in layout.mjs (by seed); a walker's
// circle walks with them. `at` is the circle of a still person or a place,
// and `look` what the mascot faces from there.
// Names follow the figure the seed draws (body and age in people3d randomLook).

export const VOICES = [
  // ---------------------------------------------------------------- the Umbral
  { id: 'remedios', world: 'umbral', zone: 'umbral', kind: 'soul', walker: 901, name: 'Doña Remedios', role: { es: 'Murió a los ciento dos años y está tranquila', en: 'She died at a hundred and two and she is calm' } },
  { id: 'abril', world: 'umbral', zone: 'umbral', kind: 'soul', walker: 902, name: 'Abril', role: { es: 'Tenía diecinueve años y no acepta estar aquí', en: 'She was nineteen and she does not accept being here' } },
  { id: 'irene', world: 'umbral', zone: 'umbral', kind: 'soul', walker: 903, name: 'Irene', role: { es: 'Enfermera: vio morir a muchos; ahora le toca a ella', en: 'A nurse: she saw many people die; now it is her turn' } },
  { id: 'espejo-negro', world: 'umbral', zone: 'umbral', kind: 'place', at: { x: 0, z: 14 }, look: { x: 0, z: 9 }, name: 'El espejo negro', role: { es: 'El suelo refleja tu cara a todas las edades', en: 'The floor shows your face at every age' } },

  // ---------------------------------------------------------------- the Cielo · las Puertas de Perla
  { id: 'ariel', world: 'cielo', zone: 'portal', kind: 'angel', extra: 315, at: { x: -14.2, z: 44 }, name: 'Ariel', role: { es: 'Ángel de la puerta: nunca fue humano', en: 'Angel of the gate: he was never human' } },
  { id: 'rafaela', world: 'cielo', zone: 'portal', kind: 'angel', extra: 316, at: { x: 14.2, z: 44 }, name: 'Rafaela', role: { es: 'Ángel que cuenta a todos los que llegan', en: 'Angel who counts everyone who arrives' } },
  { id: 'celia', world: 'cielo', zone: 'portal', kind: 'soul', extra: 317, at: { x: -20, z: 19.6 }, name: 'Celia', role: { es: 'Mira las nubes tumbada en la hierba', en: 'She lies on the grass and looks at the clouds' } },
  { id: 'fuente', world: 'cielo', zone: 'portal', kind: 'place', at: { x: -31, z: 19.8 }, look: { x: -31, z: 16 }, name: 'La fuente de luz', role: { es: 'Su agua enseña un recuerdo feliz', en: 'Its water shows a happy memory' } },
  { id: 'nuria', world: 'cielo', zone: 'portal', kind: 'soul', walker: 335, name: 'Nuria', role: { es: 'Corre incluso en el Cielo', en: 'She runs even in Heaven' } },
  { id: 'miriam', world: 'cielo', zone: 'portal', kind: 'angel', walker: 331, name: 'Miriam', role: { es: 'Ángel cartera: trae las cartas de los vivos', en: 'Postwoman angel: she brings the letters of the living' } },
  { id: 'gala', world: 'cielo', zone: 'portal', kind: 'angel', walker: 336, name: 'Gala', role: { es: 'Ángel guía de los recién llegados', en: 'Angel who guides the newcomers' } },
  // ---------------------------------------------------------------- the Cielo · el Archivo
  { id: 'bruno', world: 'cielo', zone: 'archivo', kind: 'soul', extra: 318, at: { x: 20, z: 18.6 }, name: 'Bruno', role: { es: 'Lee el diario que escribió a los quince años', en: 'He reads the diary he wrote at fifteen' } },
  { id: 'libro-flotante', world: 'cielo', zone: 'archivo', kind: 'place', at: { x: 20, z: 10.6 }, look: { x: 22, z: 10 }, name: 'El libro flotante', role: { es: 'Un libro enorme abierto en el aire', en: 'A huge book open in the air' } },
  { id: 'olga', world: 'cielo', zone: 'archivo', kind: 'soul', extra: 319, at: { x: -12, z: 0 }, name: 'Olga', role: { es: 'No sabe si beber del río del olvido', en: 'She does not know if she should drink from the river of forgetting' } },
  { id: 'sol', world: 'cielo', zone: 'archivo', kind: 'soul', walker: 332, name: 'Sol', role: { es: 'Busca su libro y lo encuentra casi vacío', en: 'She looks for her book and finds it almost empty' } },
  // ---------------------------------------------------------------- the Cielo · la Cumbre
  { id: 'carmen-pilar', world: 'cielo', zone: 'cumbre', kind: 'soul', extra: 311, at: { x: -28, z: -36.6 }, look: { x: -28, z: -34.2 }, name: 'Carmen y Pilar', role: { es: 'Madre e hija: veinte años sin hablarse', en: 'Mother and daughter: twenty years without speaking' } },
  { id: 'ferreira', world: 'cielo', zone: 'cumbre', kind: 'soul', extra: 313, at: { x: -28, z: -23.6 }, look: { x: -28, z: -25.8 }, name: 'Joaquín y Marta', role: { es: 'Cincuenta años casados; todavía discuten', en: 'Married for fifty years; they still argue' } },
  { id: 'anillo', world: 'cielo', zone: 'cumbre', kind: 'place', at: { x: 0, z: -36 }, look: { x: 0, z: -40 }, name: 'El anillo de luz', role: { es: 'Entre las columnas, la luz se escucha', en: 'Between the columns, you can hear the light' } },
  { id: 'julia', world: 'cielo', zone: 'cumbre', kind: 'soul', extra: 320, at: { x: 18, z: -35.6 }, name: 'Julia', role: { es: 'Mira a sus hijos en la Tierra', en: 'She watches her children on Earth' } },
  { id: 'leo', world: 'cielo', zone: 'cumbre', kind: 'soul', extra: 321, at: { x: 30, z: -36.1 }, name: 'Leo', role: { es: 'Abraza a su perro, que lo esperaba', en: 'He hugs his dog, who was waiting for him' } },
  { id: 'aurelio', world: 'cielo', zone: 'cumbre', kind: 'soul', walker: 333, name: 'Don Aurelio', role: { es: 'Cocinero: lleva bandejas al banquete', en: 'A cook: he carries trays to the banquet' } },
  { id: 'celeste', world: 'cielo', zone: 'cumbre', kind: 'angel', walker: 334, name: 'Celeste', role: { es: 'Ángel que vigila la Tierra desde arriba', en: 'Angel who watches the Earth from above' } },

  // ---------------------------------------------------------------- the Infierno · la Antesala
  { id: 'puerta-hierro', world: 'infierno', zone: 'antesala', kind: 'place', at: { x: 0, z: 44 }, look: { x: 0, z: 37 }, name: 'La puerta de hierro', role: { es: '«Aquí se abandona toda esperanza»', en: '“Abandon all hope here”' } },
  { id: 'herminia', world: 'infierno', zone: 'antesala', kind: 'soul', extra: 412, at: { x: 15.5, z: 32 }, look: { x: 18, z: 31.4 }, name: 'Doña Herminia', role: { es: 'Todavía intenta llamar a su oficina', en: 'She still tries to call her office' } },
  { id: 'amparo', world: 'infierno', zone: 'antesala', kind: 'soul', extra: 415, at: { x: 15.5, z: 28.2 }, look: { x: 18, z: 27.8 }, name: 'Amparo', role: { es: 'Tiene el número 9.999.999.999', en: 'Her number is 9,999,999,999' } },
  { id: 'belial', world: 'infierno', zone: 'antesala', kind: 'demon', walker: 446, name: 'Belial', role: { es: 'Vende segundas oportunidades', en: 'He sells second chances' } },
  { id: 'kiara', world: 'infierno', zone: 'antesala', kind: 'soul', walker: 442, name: 'Kiara', role: { es: 'Busca un espejo para verse', en: 'She looks for a mirror to see herself' } },
  { id: 'volcanes', world: 'infierno', zone: 'antesala', kind: 'place', at: { x: -12, z: 23.4 }, look: { x: -12, z: 20 }, name: 'La aguja de basalto', role: { es: 'Desde aquí se ven los volcanes', en: 'From here you can see the volcanoes' } },
  // ---------------------------------------------------------------- the Infierno · el Juicio
  { id: 'abadon', world: 'infierno', zone: 'juicio', kind: 'demon', extra: 431, at: { x: 31.2, z: 0.6 }, name: 'Abadón', role: { es: 'Ujier del tribunal: ha oído todas las excusas', en: 'Court usher: he has heard every excuse' } },
  { id: 'rebeca', world: 'infierno', zone: 'juicio', kind: 'soul', extra: 432, at: { x: 15.8, z: 0 }, name: 'Rebeca', role: { es: 'Acusada de una mentira pequeña que creció', en: 'Accused of a small lie that grew' } },
  { id: 'german', world: 'infierno', zone: 'juicio', kind: 'soul', extra: 435, at: { x: -16, z: -1.6 }, name: 'Germán', role: { es: 'Lleva años sin atreverse a subir a la barca', en: 'For years he has not dared to get on the boat' } },
  { id: 'puente', world: 'infierno', zone: 'juicio', kind: 'place', at: { x: 3, z: -4.2 }, look: { x: -2, z: -9.5 }, name: 'El puente de piedra', role: { es: 'Cruza un río de fuego', en: 'It crosses a river of fire' } },
  { id: 'lidia', world: 'infierno', zone: 'juicio', kind: 'soul', walker: 443, name: 'Lidia', role: { es: 'Camina en un cuadrado para siempre', en: 'She walks in a square for ever' } },
  { id: 'astarot', world: 'infierno', zone: 'juicio', kind: 'demon', walker: 441, name: 'Astarot', role: { es: 'Mensajero: lleva listas de excusas', en: 'A messenger: he carries lists of excuses' } },
  // ---------------------------------------------------------------- the Infierno · el Abismo
  { id: 'sergio', world: 'infierno', zone: 'abismo', kind: 'soul', extra: 421, at: { x: 29, z: -31 }, name: 'Sergio', role: { es: 'No sale de su jaula abierta', en: 'He does not leave his open cage' } },
  { id: 'iker', world: 'infierno', zone: 'abismo', kind: 'soul', extra: 422, at: { x: 11, z: -31 }, name: 'Iker', role: { es: 'Llora en la jaula de la culpa', en: 'He cries in the cage of guilt' } },
  { id: 'rufino', world: 'infierno', zone: 'abismo', kind: 'soul', extra: 423, at: { x: 23, z: -39 }, name: 'Don Rufino', role: { es: 'Lleva treinta años enfadado con su hermano', en: 'He has been angry with his brother for thirty years' } },
  { id: 'lilit', world: 'infierno', zone: 'abismo', kind: 'demon', extra: 433, at: { x: -9, z: -40 }, name: 'Lilit', role: { es: 'Secretaria de Lucero', en: 'Lucero’s secretary' } },
  { id: 'agrat', world: 'infierno', zone: 'abismo', kind: 'demon', extra: 434, at: { x: 9, z: -40 }, name: 'Agrat', role: { es: 'Guardia del trono; se aburre', en: 'Guard of the throne; she is bored' } },
  { id: 'mammon', world: 'infierno', zone: 'abismo', kind: 'demon', walker: 444, name: 'Mammón', role: { es: 'Compra recuerdos a buen precio', en: 'He buys memories at a good price' } },
  { id: 'daniela', world: 'infierno', zone: 'abismo', kind: 'soul', walker: 445, name: 'Daniela', role: { es: 'Huye de su jaula y siempre vuelve', en: 'She runs away from her cage and always comes back' } },
];
// The questions of a voice are lighter than an encounter's «Más hondo», but
// from A2 on they still ask for a real answer (the checker enforces it).
export const VOICE_MIN_WORDS = { A0: 3, A1: 5, A2: 8, B1: 12, B2: 14, C1: 15, C2: 15 };
export const VOICE_IDS = VOICES.map((v) => v.id);
export const voiceById = (id) => VOICES.find((v) => v.id === id) ?? null;
export const voicesOf = (world) => VOICES.filter((v) => v.world === world);
export const isVoice = (id) => VOICES.some((v) => v.id === id);

// The texts of every level, on demand (one chunk per level). A0 is bilingual:
// every text is [es, en]; the other levels are Spanish only. In the files a
// voice is [line, q1, q2, q3].
export const VOICE_LOADERS = {
  A0: () => import('./voces/a0.mjs'),
  A1: () => import('./voces/a1.mjs'),
  A2: () => import('./voces/a2.mjs'),
  B1: () => import('./voces/b1.mjs'),
  B2: () => import('./voces/b2.mjs'),
  C1: () => import('./voces/c1.mjs'),
  C2: () => import('./voces/c2.mjs'),
};
const text = (t) => (Array.isArray(t) ? { es: t[0], en: t[1] } : t);
export const voiceTexts = (raw) => Object.fromEntries(Object.entries(raw).map(([id, [line, ...qs]]) => [id, { line: text(line), qs: qs.map(text) }]));
export const loadVoices = (level) => (VOICE_LOADERS[level] ? VOICE_LOADERS[level]().then((m) => voiceTexts(m.default)) : Promise.reject(new Error(`Unknown level ${level}`)));
