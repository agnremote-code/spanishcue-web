// El tren de las 23:40 · who is who. El Nocturno de los Andes leaves
// Mendoza at 23:40 and reaches Los Andes, on the Chilean side, at dawn. In
// cabin 7 travels Olga Ríos, the grande dame of the Chilean crime novel, with
// the urn of her husband Ernesto. At ten to one cabin 7 is empty, the window
// is open and on the pillow there is a note: «Si desaparezco, que investigue
// el pasajero del 8». The passenger in cabin 8 is you. Every character keeps
// one voice for the whole class (scenes and the listenings of every level),
// taken from the Edge neural voices in app/escucha-3d/voices.json.
// The 18 white circles are listed in the order the night walks them.

export const CAST = {
  olga: { name: 'Olga', full: 'Olga Ríos', role: 'Novelista policial, 79 años, camarote 7', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile' },
  fermin: { name: 'Fermín', full: 'Fermín Ledesma', role: 'Maletero de la estación de Mendoza', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina' },
  rosa: { name: 'Rosa', full: 'Rosa Benítez', role: 'Madre que despide a su hijo', gender: 'f', voice: 'es-PY-TaniaNeural', country: 'Paraguay' },
  matias: { name: 'Matías', full: 'Matías Benítez', role: 'Se va a trabajar a Chile, camarote 2', gender: 'm', voice: 'es-PY-MarioNeural', country: 'Paraguay' },
  evaristo: { name: 'Evaristo', full: 'Don Evaristo Olmedo', role: 'Ronca en el camarote 3', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay' },
  lucas: { name: 'Lucas', full: 'Lucas Garmendia', role: 'Mochilero, comparte el camarote 3', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España' },
  yesenia: { name: 'Yesenia', full: 'Yesenia Cárdenas', role: 'Recién casada, camarote 5', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  brayan: { name: 'Brayan', full: 'Brayan Cárdenas', role: 'Recién casado, camarote 5', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia' },
  ramiro: { name: 'Ramiro', full: 'Ramiro Quispe', role: 'Jefe de tren', gender: 'm', voice: 'es-BO-MarceloNeural', country: 'Bolivia' },
  celia: { name: 'Celia', full: 'Celia Huamán', role: 'Camarera del coche cama', gender: 'f', voice: 'es-PE-CamilaNeural', country: 'Perú' },
  bruno: { name: 'Bruno', full: 'Bruno Ríos', role: 'Sobrino y heredero de Olga, camarote 9', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  fela: { name: 'Fela', full: 'Doña Felicitas «Fela» Robles', role: 'Cocinera del coche comedor', gender: 'f', voice: 'es-MX-DaliaNeural', country: 'México' },
  jacinto: { name: 'Jacinto', full: 'Jacinto Ugalde', role: 'Mozo del coche comedor', gender: 'm', voice: 'es-MX-JorgeNeural', country: 'México' },
  pilar: { name: 'Pilar', full: 'Doña Pilar Arteaga', role: 'Jubilada que lee novelas de crímenes', gender: 'f', voice: 'es-ES-ElviraNeural', country: 'España' },
  horacio: { name: 'Horacio', full: 'Don Horacio Valdés', role: 'Marido de Pilar, inspector jubilado', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba' },
  wilmer: { name: 'Wilmer', full: 'Wilmer Guaidó', role: 'Barman del coche bar', gender: 'm', voice: 'es-VE-SebastianNeural', country: 'Venezuela' },
  ines: { name: 'Inés', full: 'Licenciada Inés Barragán', role: 'Abogada que juega a las cartas', gender: 'f', voice: 'es-GT-MartaNeural', country: 'Guatemala' },
  nelson: { name: 'Nelson', full: 'Nelson Peña', role: 'Viajante de comercio y apostador', gender: 'm', voice: 'es-DO-EmilioNeural', country: 'República Dominicana' },
  amaranta: { name: 'Amaranta', full: 'Doctora Amaranta Loayza', role: 'Astrónoma en el coche mirador', gender: 'f', voice: 'es-EC-AndreaNeural', country: 'Ecuador' },
  kiara: { name: 'Kiara', full: 'Kiara Rosado', role: 'Transmite el viaje en directo', gender: 'f', voice: 'es-PR-KarinaNeural', country: 'Puerto Rico' },
  joel: { name: 'Joel', full: 'Joel Rosado', role: 'Hermano y camarógrafo de Kiara', gender: 'm', voice: 'es-PR-VictorNeural', country: 'Puerto Rico' },
  cosme: { name: 'Cosme', full: 'Don Cosme Zelaya', role: 'Guarda del furgón de equipajes', gender: 'm', voice: 'es-HN-CarlosNeural', country: 'Honduras' },
  valentina: { name: 'Valentina', full: 'Valentina Arocena', role: 'Violonchelista con un estuche muy pesado', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay' },
  teofilo: { name: 'Teófilo', full: 'Don Teófilo Arancibia', role: 'Jefe de la estación de Puente del Inca', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala' },
  yolanda: { name: 'Yolanda', full: 'Cabo Yolanda Perrone', role: 'Gendarme del control de frontera', gender: 'f', voice: 'es-NI-YolandaNeural', country: 'Nicaragua' },
  ulises: { name: 'Ulises', full: 'Ulises Cañete', role: 'Pasajero sin pasaporte', gender: 'm', voice: 'es-SV-RodrigoNeural', country: 'El Salvador' },
  aniceto: { name: 'Aniceto', full: 'Don Aniceto Ferrada', role: 'Maquinista desde 1968', gender: 'm', voice: 'es-CR-JuanNeural', country: 'Costa Rica' },
  rocio: { name: 'Rocío', full: 'Rocío Vargas', role: 'Ayudante de maquinista', gender: 'f', voice: 'es-CR-MariaNeural', country: 'Costa Rica' },
  gloria: { name: 'Gloria', full: 'Gloria Alcántara', role: 'La voz de los altavoces del tren', gender: 'f', voice: 'es-US-PalomaNeural', country: 'Estados Unidos' },
  marga: { name: 'Marga', full: 'Marga Iturbe', role: 'Editora de Olga, al teléfono', gender: 'f', voice: 'es-AR-ElenaNeural', country: 'Argentina' },
};

// The places, in the order of the train from the front, then the two stops.
// Every circle: place, who is there (first = the person you talk to).
// Places: 0 andén de Mendoza, 1 locomotora, 2 furgón, 3 coche cama A,
// 4 coche cama B, 5 comedor, 6 bar, 7 mirador, 8 Puente del Inca, 9 Los Andes.
export const STORY = [
  { id: 'equipaje', sector: 'Andén de Mendoza', floor: 0, cast: ['olga', 'fermin'] },
  { id: 'despedida', sector: 'Andén de Mendoza', floor: 0, cast: ['rosa', 'matias'] },
  { id: 'ronquidos', sector: 'Camarote 3', floor: 3, cast: ['lucas', 'evaristo'] },
  { id: 'lunademiel', sector: 'Camarote 5', floor: 3, cast: ['yesenia', 'brayan'] },
  { id: 'camarote7', sector: 'Camarote 7', floor: 4, cast: ['ramiro', 'celia'] },
  { id: 'sobrino', sector: 'Camarote 9', floor: 4, cast: ['bruno', 'ramiro'] },
  { id: 'cena', sector: 'Cocina del coche comedor', floor: 5, cast: ['fela', 'jacinto'] },
  { id: 'sobremesa', sector: 'Mesa 4 del coche comedor', floor: 5, cast: ['pilar', 'horacio'] },
  { id: 'barman', sector: 'Barra del coche bar', floor: 6, cast: ['wilmer', 'nelson'] },
  { id: 'cartas', sector: 'Mesa de juego del coche bar', floor: 6, cast: ['ines', 'nelson'] },
  { id: 'astronoma', sector: 'Ventanal trasero del mirador', floor: 7, cast: ['amaranta', 'kiara'] },
  { id: 'directo', sector: 'Cúpula del coche mirador', floor: 7, cast: ['kiara', 'joel'] },
  { id: 'perro', sector: 'Furgón: la jaula de Tango', floor: 2, cast: ['cosme', 'valentina'] },
  { id: 'violonchelo', sector: 'Furgón: el estuche', floor: 2, cast: ['valentina', 'cosme'] },
  { id: 'nieve', sector: 'Andén de Puente del Inca', floor: 8, cast: ['teofilo', 'ramiro'] },
  { id: 'frontera', sector: 'Control de Gendarmería', floor: 8, cast: ['yolanda', 'ulises'] },
  { id: 'maquinista', sector: 'Cabina de la locomotora', floor: 1, cast: ['aniceto', 'rocio'] },
  { id: 'amanecer', sector: 'Andén de Los Andes', floor: 9, cast: ['olga', 'ramiro', 'bruno'] },
];
export const STORY_IDS = STORY.map((s) => s.id);
export const castByName = (name) => Object.entries(CAST).find(([, c]) => c.name === name)?.[0] ?? null;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue + question for each level (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [20, 80], A1: [35, 105], A2: [55, 140], B1: [75, 175], B2: [95, 210], C1: [110, 245], C2: [125, 280] };
// What the white circle can show after a choice: the person's face changes.
export const MOODS = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious'];

export const TRAIN = {
  name: 'El Nocturno de los Andes',
  route: 'Mendoza → Los Andes',
  cabin: 8,
  start: [23, 40],
  arrival: [6, 40],
};

// The clock of the night: 23:40 with nothing played, 06:40 at Los Andes.
export function nightClock(done, total = STORY.length) {
  const start = TRAIN.start[0] * 60 + TRAIN.start[1];
  const end = 24 * 60 + TRAIN.arrival[0] * 60 + TRAIN.arrival[1];
  const k = Math.max(0, Math.min(1, done / total));
  const minutes = (Math.round((start + (end - start) * k) / 5) * 5) % (24 * 60);
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}
// 0 at departure, 1 at dawn: the sky, the snow and the light follow it.
export function nightProgress(clock) {
  const [h, m] = String(clock).split(':').map(Number);
  const start = TRAIN.start[0] * 60 + TRAIN.start[1];
  let t = h * 60 + m;
  if (t < start - 60) t += 24 * 60;
  const end = 24 * 60 + TRAIN.arrival[0] * 60 + TRAIN.arrival[1];
  return Math.max(0, Math.min(1, (t - start) / (end - start)));
}

// The notebook of cabin 8: what each circle teaches you about the night.
// Every circle you play pins its clue; the answer you chose is written under
// it (the consequence of that answer), so every answer changes the notebook.
export const CLUES = {
  equipaje: { es: 'Olga viaja con una urna: Ernesto, su marido. Le compró billete propio.', en: 'Olga travels with an urn: Ernesto, her husband. She bought him his own ticket.' },
  despedida: { es: 'En el andén, Olga abrazó al maquinista como a un viejo amigo.', en: 'On the platform, Olga hugged the train driver like an old friend.' },
  ronquidos: { es: 'A la una, alguien con pantuflas de leopardo caminó hacia adelante.', en: 'At one o’clock, someone in leopard slippers walked towards the front.' },
  lunademiel: { es: 'Olga firmó un libro: «Nos vemos al amanecer».', en: 'Olga signed a book: “See you at dawn.”' },
  camarote7: { es: 'En la almohada: «Si desaparezco, que investigue el pasajero del 8».', en: 'On the pillow: “If I disappear, let the passenger in 8 investigate.”' },
  sobrino: { es: 'Bruno creía que heredaba todo. Olga cambió el testamento en octubre.', en: 'Bruno thought he would inherit everything. Olga changed her will in October.' },
  cena: { es: 'Olga pidió cena para dos y un termo de agua caliente «para la cabina».', en: 'Olga ordered dinner for two and a thermos of hot water “for the cab”.' },
  sobremesa: { es: 'Olga preguntó a qué hora para el tren en Puente del Inca.', en: 'Olga asked what time the train stops at Puente del Inca.' },
  barman: { es: 'Olga compró una botella de pisco y dos vasos.', en: 'Olga bought a bottle of pisco and two glasses.' },
  cartas: { es: 'El testamento nuevo deja todo al museo del ferrocarril.', en: 'The new will leaves everything to the railway museum.' },
  astronoma: { es: 'A las 3:10, un abrigo rojo caminó hacia el puente de piedra.', en: 'At 3:10, a red coat walked towards the stone bridge.' },
  directo: { es: 'En el directo se ve un abrigo rojo que vuelve al tren por adelante.', en: 'The livestream shows a red coat getting back on the train at the front.' },
  perro: { es: 'Tango sigue el perfume de Olga hasta la puerta de la locomotora.', en: 'Tango follows Olga’s perfume to the locomotive door.' },
  violonchelo: { es: 'Olga pidió prestada una manta: «Adelante hace frío».', en: 'Olga borrowed a blanket: “It is cold up front.”' },
  nieve: { es: 'Una señora echó cenizas al río, bajo el puente del Inca.', en: 'A lady scattered ashes in the river, under the Inca bridge.' },
  frontera: { es: 'Para Gendarmería, Olga Ríos nunca se bajó del tren.', en: 'According to the border police, Olga Ríos never left the train.' },
  maquinista: { es: 'En la cabina hay dos tazas, una manta y una urna vacía.', en: 'In the cab there are two cups, a blanket and an empty urn.' },
  amanecer: { es: 'Caso cerrado: Olga quería ver el amanecer donde lo vio con Ernesto.', en: 'Case closed: Olga wanted to see the dawn where she saw it with Ernesto.' },
};

// What the notebook says the night looks like, as the clues pile up.
const HYPOTHESES = [
  { id: 'cerrado', es: 'Caso cerrado al amanecer.', en: 'Case closed at dawn.', when: (d) => d.has('amanecer') },
  { id: 'adelante', es: 'Olga sigue en el tren. Algo hay en la locomotora.', en: 'Olga is still on the train. Something is in the locomotive.', when: (d) => ['perro', 'frontera', 'maquinista', 'directo'].filter((x) => d.has(x)).length >= 2 },
  { id: 'puente', es: 'Olga bajó en Puente del Inca… ¿y volvió a subir?', en: 'Olga got off at Puente del Inca… and got back on?', when: (d) => ['astronoma', 'nieve', 'sobremesa', 'directo'].some((x) => d.has(x)) && d.has('camarote7') },
  { id: 'herencia', es: '¿Alguien quería su herencia?', en: 'Did someone want her money?', when: (d) => d.has('camarote7') && (d.has('sobrino') || d.has('cartas')) },
  { id: 'desaparecida', es: 'Olga desapareció del camarote 7. ¿Se cayó? ¿La raptaron?', en: 'Olga vanished from cabin 7. Did she fall? Was she kidnapped?', when: (d) => d.has('camarote7') },
  { id: 'rara', es: 'Una señora rara con una urna. Todavía no pasa nada.', en: 'An odd lady with an urn. Nothing has happened yet.', when: (d) => d.size > 0 },
  { id: 'nada', es: 'El cuaderno está en blanco.', en: 'The notebook is blank.', when: () => true },
];
export function hypothesis(done) {
  const d = new Set(done);
  const h = HYPOTHESES.find((x) => x.when(d));
  return { id: h.id, es: h.es, en: h.en };
}
export function notebook(done) {
  const clues = STORY_IDS.filter((id) => done.includes(id)).map((id) => ({ id, ...CLUES[id] }));
  return { clues, total: STORY_IDS.length, hypothesis: hypothesis(done), solved: done.includes('amanecer') };
}
