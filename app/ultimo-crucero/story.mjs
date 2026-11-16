// Último crucero · who is who. The Albatros, a liner launched in 1971, makes
// the last night of its last cruise: from Santa Cruz de Tenerife to Cádiz,
// where the passengers go ashore at seven in the morning and the ship sails on
// alone to the breakers' yard. Tonight a storm grows over the Atlantic. The
// captain has to write the last page of the logbook and asks you, the one
// passenger who does not get seasick, to bring him what this ship meant to
// the people on board. Every answer you give writes a line on that page.
// Every character keeps one voice for the whole class (scenes and the
// listenings of every level), taken from app/escucha-3d/voices.json.
// The 18 white circles are listed in the order the night walks them.

export const CAST = {
  amparo: { name: 'Amparo', full: 'Amparo Linares', role: 'Viuda de 74 años, vino a despedir a su marido en el mar', gender: 'f', voice: 'es-ES-ElviraNeural', country: 'España' },
  ezequiel: { name: 'Ezequiel', full: 'Ezequiel Funes', role: 'Sobrecargo del barco', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina' },
  teodoro: { name: 'Teodoro', full: 'Don Teodoro Iriarte', role: 'Jefe de máquinas desde 1984', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  brayan: { name: 'Brayan', full: 'Brayan Mejía', role: 'Aprendiz de mecánico, diecinueve años', gender: 'm', voice: 'es-HN-CarlosNeural', country: 'Honduras' },
  ines: { name: 'Inés', full: 'Chef Inés Galarza', role: 'Jefa de cocina', gender: 'f', voice: 'es-PE-CamilaNeural', country: 'Perú' },
  lalo: { name: 'Lalo', full: 'Lalo Ruiz', role: 'Ayudante de cocina', gender: 'm', voice: 'es-MX-JorgeNeural', country: 'México' },
  rosa: { name: 'Rosa', full: 'Rosa Ferreira', role: 'Camarera de pisos desde hace veinticinco años', gender: 'f', voice: 'es-PY-TaniaNeural', country: 'Paraguay' },
  lucia: { name: 'Lucía', full: 'Lucía Pardo', role: 'Recién casada, mareada desde Tenerife', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  mateo: { name: 'Mateo', full: 'Mateo Rincón', role: 'Recién casado, organizó la luna de miel', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia' },
  elena: { name: 'Elena', full: 'Elena Sotomayor', role: 'Casada hace treinta y un años, quizá no por mucho tiempo', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay' },
  ramon: { name: 'Ramón', full: 'Ramón Arrieta', role: 'Marido de Elena', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay' },
  german: { name: 'Germán', full: 'Germán Ocampo', role: 'Pasajero del camarote 21, con cuarenta cartas', gender: 'm', voice: 'es-EC-LuisNeural', country: 'Ecuador' },
  beatriz: { name: 'Beatriz', full: 'Doctora Beatriz Montalvo', role: 'Médica del barco', gender: 'f', voice: 'es-CU-BelkysNeural', country: 'Cuba' },
  martina: { name: 'Martina', full: 'Martina Solís', role: 'Niña de nueve años', gender: 'f', voice: 'es-CR-MariaNeural', country: 'Costa Rica' },
  benigno: { name: 'Benigno', full: 'Don Benigno Solís', role: 'Abuelo de Martina', gender: 'm', voice: 'es-CR-JuanNeural', country: 'Costa Rica' },
  fermin: { name: 'Fermín', full: 'Don Fermín Quesada', role: 'Polizón de ochenta y dos años, antiguo cocinero del barco', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba' },
  julian: { name: 'Julián', full: 'Julián Ortega', role: 'Contramaestre', gender: 'm', voice: 'es-VE-SebastianNeural', country: 'Venezuela' },
  wences: { name: 'Wences', full: 'Wenceslao Olmedo', role: 'Barman del salón', gender: 'm', voice: 'es-BO-MarceloNeural', country: 'Bolivia' },
  yoli: { name: 'Yoli', full: 'Yolanda Carrasco', role: 'Animadora del crucero desde hace veintiocho años', gender: 'f', voice: 'es-PR-KarinaNeural', country: 'Puerto Rico' },
  aurelio: { name: 'Aurelio', full: 'Maestro Aurelio Villalba', role: 'Pianista del salón desde 1979', gender: 'm', voice: 'es-PY-MarioNeural', country: 'Paraguay' },
  sole: { name: 'Sole', full: 'Soledad Núñez', role: 'Radiotelegrafista', gender: 'f', voice: 'es-NI-YolandaNeural', country: 'Nicaragua' },
  gustavo: { name: 'Gustavo', full: 'Gustavo Leal', role: 'Pasajero con un anillo en el bolsillo', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala' },
  norma: { name: 'Norma', full: 'Norma Batres', role: 'Pareja de Gustavo desde hace veinte años', gender: 'f', voice: 'es-GT-MartaNeural', country: 'Guatemala' },
  marina: { name: 'Marina', full: 'Marina Quiroga', role: 'Primera oficial', gender: 'f', voice: 'es-PA-MargaritaNeural', country: 'Panamá' },
  salgado: { name: 'Salgado', full: 'Capitán Arturo Salgado', role: 'Capitán en su último viaje', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España' },
};

// The 18 circles: sector and who is there (first = the person you talk to).
export const STORY = [
  { id: 'popa', sector: 'La cubierta de popa', cast: ['amparo', 'ezequiel'] },
  { id: 'maquinas', sector: 'La sala de máquinas', cast: ['teodoro', 'brayan'] },
  { id: 'cocina', sector: 'La cocina', cast: ['ines', 'lalo'] },
  { id: 'pasillo', sector: 'El pasillo de los camarotes', cast: ['rosa'] },
  { id: 'luna', sector: 'El camarote 12', cast: ['lucia', 'mateo'] },
  { id: 'pareja', sector: 'El camarote 15', cast: ['elena', 'ramon'] },
  { id: 'cartas', sector: 'El camarote 21', cast: ['german'] },
  { id: 'enfermeria', sector: 'La enfermería', cast: ['beatriz'] },
  { id: 'nina', sector: 'La cubierta de botes, babor', cast: ['martina', 'benigno'] },
  { id: 'polizon', sector: 'La cubierta de botes, estribor', cast: ['fermin', 'julian'] },
  { id: 'barra', sector: 'La barra del salón', cast: ['wences'] },
  { id: 'bingo', sector: 'La pista de baile', cast: ['yoli'] },
  { id: 'piano', sector: 'El escenario del salón', cast: ['aurelio'] },
  { id: 'radio', sector: 'La cabina de radio', cast: ['sole'] },
  { id: 'proa', sector: 'La proa', cast: ['gustavo', 'norma'] },
  { id: 'oficial', sector: 'El alerón del puente', cast: ['marina'] },
  { id: 'capitan', sector: 'El puente de mando', cast: ['salgado', 'marina'] },
  { id: 'amanecer', sector: 'La cubierta de popa', cast: ['salgado', 'amparo', 'marina'] },
];
export const STORY_IDS = STORY.map((s) => s.id);
export const castByName = (name) => Object.entries(CAST).find(([, c]) => c.name === name)?.[0] ?? null;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue + question for each level (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [20, 75], A1: [35, 100], A2: [55, 135], B1: [75, 170], B2: [95, 205], C1: [110, 240], C2: [125, 275] };
// What the white circle can show after a choice: the person's face changes.
export const MOODS = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious'];

// One table of facts, so that no level contradicts another.
export const SHIP = {
  name: 'Albatros',
  launched: 1971,
  from: 'Santa Cruz de Tenerife',
  to: 'Cádiz',
  arrival: '07:00',
  passengers: 412,
  crew: 180,
  start: [20, 0],
  dawn: '06:40',
  // Ages and years every level keeps.
  facts: {
    amparo: 'tiene 74 años; conoció a Paco, camarero del barco, en 1976: cincuenta años',
    teodoro: 'jefe de máquinas desde 1984; la máquina se llama la Dolores',
    rosa: 'veinticinco años a bordo; el gato se llama Almirante',
    pareja: 'casados hace treinta y un años; luna de miel en el Albatros en 1995',
    german: 'conoció a Isabel a bordo en 1985; escribió cuarenta cartas',
    beatriz: 'veintidós años de médica en el mar; cuarenta pastillas',
    benigno: 'puso remaches en el astillero en 1971',
    fermin: '82 años; cocinero del barco de 1971 a 1990; subió en Tenerife en un carro de la lavandería',
    wences: 'treinta años sin beber; la botella es de la inauguración, 1971',
    yoli: 'veintiocho años de animadora',
    aurelio: 'toca en el salón desde 1979',
    gustavo: 'veinte años con Norma',
    marina: '41 años; su padre era pescador',
    salgado: '64 años; diecinueve años capitán del Albatros',
  },
};

// The storm of the night: 20:00 with nothing played, five in the morning
// when the seventeen circles before dawn are done; after the last circle the
// sky clears.
export function nightClock(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('amanecer')) return SHIP.dawn;
  const n = list.filter((id) => id !== 'amanecer').length;
  const k = Math.max(0, Math.min(1, n / (STORY.length - 1)));
  const minutes = Math.round((SHIP.start[0] * 60 + SHIP.start[1] + 9 * 60 * k) / 5) * 5;
  const h = Math.floor(minutes / 60) % 24;
  return `${String(h).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}
// 0 calm-ish at 20:00, 1 the worst of the storm, 2 the calm at dawn.
export function stormPhase(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('amanecer')) return 2;
  return Math.max(0, Math.min(1, list.length / (STORY.length - 1)));
}

// The last page of the logbook. Every answer of every circle before dawn
// writes one line, and at dawn the captain reads it on the stern deck. Three
// lines per circle, one per answer (A, B, C), with English for A0.
const n = (es, en) => ({ es, en });
export const BITACORA = {
  popa: [
    n('Amparo esperó cincuenta años a Paco; esta noche esperó una más.', 'Amparo waited fifty years for Paco; tonight she waited one more.'),
    n('Paco volvió al mar, y un poco de él se quedó en la chaqueta del sobrecargo.', 'Paco went back to the sea, and a little of him stayed on the purser’s jacket.'),
    n('Amparo se casó con un camarero por un cóctel equivocado, y no se arrepiente.', 'Amparo married a waiter because of a wrong cocktail, and she has no regrets.'),
  ],
  maquinas: [
    n('La Dolores bajó la velocidad para llegar viva a su último puerto.', 'The Dolores slowed down to reach her last port alive.'),
    n('Don Teodoro arregló una máquina de 1971 con tres golpes de llave y mucho cariño.', 'Don Teodoro fixed a 1971 engine with three blows of a wrench and a lot of love.'),
    n('Don Teodoro no tiene casa en tierra, pero esta noche un aprendiz le ofreció su sofá.', 'Don Teodoro has no home on land, but tonight an apprentice offered him his sofa.'),
  ],
  cocina: [
    n('Por primera vez, la tripulación cenó en el salón con los pasajeros.', 'For the first time, the crew had dinner in the ballroom with the passengers.'),
    n('Esta noche la sopa se sirvió en tazas, porque el mar también quería probarla.', 'Tonight the soup was served in mugs, because the sea wanted a taste too.'),
    n('Mañana, doscientos kilos de comida bajan a tierra para quien los necesite.', 'Tomorrow, two hundred kilos of food go ashore for whoever needs them.'),
  ],
  pasillo: [
    n('Un gato llamado Almirante desembarca mañana en la maleta de un pasajero.', 'A cat called Almirante goes ashore tomorrow in a passenger’s suitcase.'),
    n('El capitán nombró tripulante de honor a un gato que nunca pagó billete.', 'The captain named an honorary crew member a cat that never paid for a ticket.'),
    n('Rosa va a llamar a su hermana después de veinte años de silencio.', 'Rosa is going to call her sister after twenty years of silence.'),
  ],
  luna: [
    n('Lucía descubrió que el jengibre funciona y que de noche no hay horizonte.', 'Lucía discovered that ginger works and that at night there is no horizon.'),
    n('Una luna de miel mareada puede terminar con una noticia mucho más grande.', 'A seasick honeymoon can end with much bigger news.'),
    n('Mateo canceló la cena con el capitán para sostener un balde y una mano.', 'Mateo cancelled dinner with the captain to hold a bucket and a hand.'),
  ],
  pareja: [
    n('Elena y Ramón firmaron el divorcio y quedaron para desayunar juntos.', 'Elena and Ramón signed the divorce and agreed to have breakfast together.'),
    n('Elena y Ramón guardaron los papeles en un cajón: nadie decide nada en una tormenta.', 'Elena and Ramón put the papers in a drawer: nobody decides anything in a storm.'),
    n('Treinta y un años después, Elena todavía duerme mejor con los ronquidos de Ramón.', 'Thirty-one years later, Elena still sleeps better with Ramón’s snoring.'),
  ],
  cartas: [
    n('Germán va a mandar mañana una carta que tardó cuarenta años en salir.', 'Tomorrow Germán is going to send a letter that took forty years to leave.'),
    n('Isabel, desde Quito, le dio un me gusta a Germán después de cuarenta años.', 'Isabel, from Quito, gave Germán a like after forty years.'),
    n('Germán descubrió que sus cuarenta cartas eran, en el fondo, para él.', 'Germán discovered that his forty letters were, deep down, for himself.'),
  ],
  enfermeria: [
    n('En la enfermería, un abuelo le regaló su pastilla a un niño.', 'In the infirmary, a grandfather gave his pill to a child.'),
    n('La doctora se tomó por fin una pastilla contra el mareo, después de veintidós años.', 'The doctor finally took a seasickness pill, after twenty-two years.'),
    n('Esta noche, cuarenta pastillas alcanzaron para ochenta personas.', 'Tonight, forty pills were enough for eighty people.'),
  ],
  nina: [
    n('Martina sabe que los barcos no se mueren: se convierten en bicicletas.', 'Martina knows that ships do not die: they turn into bicycles.'),
    n('Entre un relámpago y un trueno, Martina contó hasta siete y se durmió.', 'Between a flash of lightning and a thunderclap, Martina counted to seven and fell asleep.'),
    n('Don Benigno puso remaches en este barco en 1971, y su nieta lo supo esta noche.', 'Don Benigno put rivets in this ship in 1971, and his granddaughter found out tonight.'),
  ],
  polizon: [
    n('Un polizón de ochenta y dos años viaja con un pasaje escrito a mano.', 'An eighty-two-year-old stowaway travels with a handwritten ticket.'),
    n('Don Fermín volvió a la cocina del Albatros treinta y seis años después.', 'Don Fermín went back to the Albatros kitchen thirty-six years later.'),
    n('El capitán reconoció al polizón: fue quien le enseñó a pelar papas.', 'The captain recognised the stowaway: he was the one who taught him to peel potatoes.'),
  ],
  barra: [
    n('La botella de 1971 era vinagre, y fue el mejor brindis del viaje.', 'The 1971 bottle was vinegar, and it was the best toast of the trip.'),
    n('Wences guardó la botella de la inauguración para el último amanecer.', 'Wences kept the bottle from the launch for the last dawn.'),
    n('El mejor barman del Atlántico lleva treinta años sin beber, y sirve como nadie.', 'The best barman in the Atlantic has not had a drink in thirty years, and he serves like nobody else.'),
  ],
  bingo: [
    n('Una señora de noventa años ganó una tostadora en el último bingo y lloró de felicidad.', 'A ninety-year-old lady won a toaster at the last bingo and cried with happiness.'),
    n('Esta noche, en vez de bingo, el salón se llenó de historias.', 'Tonight, instead of bingo, the ballroom filled up with stories.'),
    n('Yoli, la animadora, cantó por fin la canción que guardaba desde hace veintiocho años.', 'Yoli, the entertainer, finally sang the song she had kept for twenty-eight years.'),
  ],
  piano: [
    n('El maestro Aurelio tocó en la tormenta para que el barco no se sintiera solo.', 'Maestro Aurelio played in the storm so that the ship would not feel alone.'),
    n('Cuando el piano se calló, la bocina del barco dio un la perfecto.', 'When the piano went quiet, the ship’s horn gave a perfect A.'),
    n('El maestro Aurelio le enseñó a un pasajero las cuatro notas del Albatros.', 'Maestro Aurelio taught a passenger the four notes of the Albatros.'),
  ],
  radio: [
    n('Por la radio llegó un mensaje: el hijo de Don Teodoro lo espera en el muelle.', 'A message came over the radio: Don Teodoro’s son is waiting for him on the quay.'),
    n('Sole guardó una buena noticia hasta el amanecer, como se guarda un regalo.', 'Sole kept good news until dawn, the way you keep a present.'),
    n('Sole, la radiotelegrafista, mandó por fin un mensaje para ella: a su madre.', 'Sole, the radio operator, finally sent a message of her own: to her mother.'),
  ],
  proa: [
    n('Norma dijo que sí, pero adentro, y lleva el anillo en el pulgar.', 'Norma said yes, but indoors, and she wears the ring on her thumb.'),
    n('Una ola empapó la propuesta de Gustavo, y Norma dijo que sí riéndose.', 'A wave soaked Gustavo’s proposal, and Norma said yes laughing.'),
    n('Norma le confesó a Gustavo que le dijo que sí hace veinte años, en silencio.', 'Norma confessed to Gustavo that she said yes twenty years ago, in silence.'),
  ],
  oficial: [
    n('La primera oficial confesó su miedo, y el capitán confesó el suyo.', 'The first officer confessed her fear, and the captain confessed his.'),
    n('Marina dio sus órdenes con la voz firme y las manos temblando.', 'Marina gave her orders with a steady voice and shaking hands.'),
    n('Marina lleva la brújula de su padre pescador en el bolsillo del uniforme.', 'Marina carries her fisherman father’s compass in the pocket of her uniform.'),
  ],
  capitan: [
    n('El capitán bajó la velocidad: llegamos tarde, pero llegamos todos.', 'The captain reduced speed: we arrived late, but we all arrived.'),
    n('El Albatros cruzó la tormenta a toda máquina y vio el faro a las siete menos uno.', 'The Albatros crossed the storm at full speed and saw the lighthouse at one minute to seven.'),
    n('El capitán pidió una vuelta de honor por la bahía antes de entregar el barco.', 'The captain asked for a lap of honour around the bay before handing over the ship.'),
  ],
};
export const BITACORA_IDS = Object.keys(BITACORA);

// The page of the logbook: the lines you have, in the order you played.
export function logLines(done, picks) {
  return (Array.isArray(done) ? done : []).filter((id) => BITACORA[id] && Number.isInteger(picks?.[id])).map((id) => ({ id, line: BITACORA[id][picks[id]] }));
}
