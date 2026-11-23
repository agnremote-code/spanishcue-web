// Objetos perdidos · who is who. The night after the Noche de los Faroles,
// the biggest street festival of Puerto Alba, the Municipal Lost-and-Found
// Office stays open until dawn. You are the new night clerk, on your first
// shift. Don Celestino, who has worked here since the office opened in 1986,
// hands you the stamp and the ledger of the night; Doña Pura, the day boss,
// arrives at seven and has bet that you will not get twelve owners back
// together with their things before the shift change. Every answer you give
// writes a line in the ledger, and some of those lines send an object home.
// Every character keeps one voice for the whole class (scenes and the
// listenings of every level), taken from app/escucha-3d/voices.json.
// The 18 white circles are listed in the order the night walks them.

export const CAST = {
  celestino: { name: 'Celestino', full: 'Don Celestino Vidal', role: 'Encargado del turno de noche desde 1986', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España' },
  evaristo: { name: 'Evaristo', full: 'Don Evaristo Peña', role: 'Jubilado de 78 años, sin dentadura desde la fiesta', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba' },
  rocio: { name: 'Rocío', full: 'Rocío Galván', role: 'Trae un paraguas que no es suyo', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  wilson: { name: 'Wilson', full: 'Wilson Barrera', role: 'Cerrajero que no puede entrar en su taller', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia' },
  herminia: { name: 'Herminia', full: 'Doña Herminia Rojas', role: 'Busca un teléfono con una voz guardada', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile' },
  gaspar: { name: 'Gaspar', full: 'Gaspar Iturbe', role: 'Busca el bonsái de su abuelo', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina' },
  alex: { name: 'Álex', full: 'Álex Moreno', role: 'Perdió el táper de su madre', gender: 'm', voice: 'es-MX-JorgeNeural', country: 'México' },
  aurora: { name: 'Aurora', full: 'Doña Aurora Salinas', role: 'Viene cada año a preguntar por un guante de 1986', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay' },
  vanesa: { name: 'Vanesa', full: 'Vanesa Cordero', role: 'Novia que se casa el sábado', gender: 'f', voice: 'es-PR-KarinaNeural', country: 'Puerto Rico' },
  oliver: { name: 'Óliver', full: 'Óliver Santos', role: 'Novio que no quiere encontrar el anillo', gender: 'm', voice: 'es-PR-VictorNeural', country: 'Puerto Rico' },
  fidel: { name: 'Fidel', full: 'Fidel Castaño', role: 'Tuba de la banda municipal', gender: 'm', voice: 'es-DO-EmilioNeural', country: 'República Dominicana' },
  nacho: { name: 'Nacho', full: 'Nacho Ferrer', role: 'Reclama una canoa', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  guille: { name: 'Guille', full: 'Guille Paredes', role: 'También reclama la canoa', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú' },
  lisandro: { name: 'Lisandro', full: 'Lisandro Quiroga', role: 'Busca las cenizas de su perro', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay' },
  maricarmen: { name: 'Mari Carmen', full: 'Mari Carmen Toledo', role: 'Conductora de la línea 14', gender: 'f', voice: 'es-ES-XimenaNeural', country: 'España' },
  ruben: { name: 'Rubén', full: 'Rubén Arismendi', role: 'Taxista que trajo un loro', gender: 'm', voice: 'es-VE-SebastianNeural', country: 'Venezuela' },
  fefa: { name: 'Fefa', full: 'Doña Fefa Linares', role: 'Dueña del loro, o eso dice', gender: 'f', voice: 'es-CU-BelkysNeural', country: 'Cuba' },
  tato: { name: 'Tato', full: 'Tato Urquiza', role: 'Carterista que viene a devolver', gender: 'm', voice: 'es-HN-CarlosNeural', country: 'Honduras' },
  benja: { name: 'Benja', full: 'Benjamín Ochoa', role: 'Despertó en pijama y sin recuerdos', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala' },
  gloria: { name: 'Gloria', full: 'Gloria Mendieta', role: 'Farmacéutica de guardia', gender: 'f', voice: 'es-EC-AndreaNeural', country: 'Ecuador' },
  selene: { name: 'Selene', full: 'Selene Varela', role: 'Su farol con un deseo cayó en la azotea', gender: 'f', voice: 'es-MX-DaliaNeural', country: 'México' },
  yuri: { name: 'Yuri', full: 'Yuri Aguilar', role: 'Vigilante nocturno', gender: 'm', voice: 'es-NI-FedericoNeural', country: 'Nicaragua' },
  ernesto: { name: 'Ernesto', full: 'Ernesto Lagos', role: 'Secretario del alcalde', gender: 'm', voice: 'es-SV-RodrigoNeural', country: 'El Salvador' },
  pura: { name: 'Pura', full: 'Doña Pura Benavides', role: 'Jefa de la oficina, turno de día', gender: 'f', voice: 'es-PE-CamilaNeural', country: 'Perú' },
};

// The 18 circles: sector and who is there (first = the person you talk to).
export const STORY = [
  { id: 'dentadura', sector: 'El mostrador', cast: ['evaristo', 'celestino'] },
  { id: 'paraguas', sector: 'Las estanterías de paraguas', cast: ['rocio'] },
  { id: 'llaves', sector: 'El pasillo de las llaves', cast: ['wilson'] },
  { id: 'telefono', sector: 'La estantería de los teléfonos', cast: ['herminia'] },
  { id: 'bonsai', sector: 'La cámara fría, las plantas', cast: ['gaspar'] },
  { id: 'taper', sector: 'La cámara fría, la comida', cast: ['alex'] },
  { id: 'guante', sector: 'El archivo', cast: ['aurora', 'celestino'] },
  { id: 'anillo', sector: 'La sala de objetos grandes, el vestido', cast: ['vanesa', 'oliver'] },
  { id: 'tuba', sector: 'La sala de objetos grandes, la tuba', cast: ['fidel'] },
  { id: 'canoa', sector: 'La sala de objetos grandes, la canoa', cast: ['nacho', 'guille'] },
  { id: 'cenizas', sector: 'El muelle de carga, el autobús', cast: ['lisandro', 'maricarmen'] },
  { id: 'loro', sector: 'El muelle de carga, el taxi', cast: ['ruben', 'fefa'] },
  { id: 'ladron', sector: 'La calle, bajo el letrero', cast: ['tato'] },
  { id: 'sonambulo', sector: 'La puerta de la farmacia', cast: ['benja', 'gloria'] },
  { id: 'farol', sector: 'La azotea, el farol', cast: ['selene'] },
  { id: 'diario', sector: 'La azotea, el descanso', cast: ['yuri'] },
  { id: 'alcalde', sector: 'La sala de espera', cast: ['ernesto'] },
  { id: 'relevo', sector: 'El despacho de la jefa', cast: ['pura', 'celestino'] },
];
export const STORY_IDS = STORY.map((s) => s.id);
export const castByName = (name) => Object.entries(CAST).find(([, c]) => c.name === name)?.[0] ?? null;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue + question for each level (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [20, 75], A1: [35, 100], A2: [55, 135], B1: [75, 170], B2: [95, 205], C1: [110, 240], C2: [125, 275] };
// What the white circle can show after a choice: the person's face changes.
export const MOODS = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious'];

// One table of facts, so that no level and no listening contradicts another.
export const OFFICE = {
  name: 'Oficina Municipal de Objetos Perdidos',
  city: 'Puerto Alba',
  festival: 'la Noche de los Faroles',
  opened: 1986,
  start: [23, 0],
  change: '07:00',
  goal: 12,
  // What came in after the festival, and the ages and years every level keeps.
  facts: {
    turno: 'el turno de noche va de las once de la noche a las siete de la mañana; el relevo es a las siete',
    meta: 'Doña Pura apostó que el alumno no devuelve doce objetos a sus dueños antes del relevo de las siete',
    oficina: 'abrió en 1986; el archivo guarda cuarenta años de libros de registro, uno por año',
    fiesta: 'la Noche de los Faroles fue anoche; la gente suelta faroles de papel con un deseo escrito',
    inventario: 'después de la fiesta entraron 1.412 paraguas negros, unas tres mil llaves, 64 teléfonos y 212 táperes',
    celestino: '68 años; trabaja aquí desde el primer día, en 1986; anotó el guante de Aurora en la primera línea del primer libro',
    evaristo: '78 años; perdió la dentadura bailando en la fiesta; apareció dentro de la tuba de la banda municipal',
    fidel: 'toca la tuba en la banda municipal desde hace doce años; anoche sonó mejor que nunca, con la dentadura dentro',
    rocio: 'un desconocido le prestó un paraguas negro en la fiesta; dentro dice «Si me encuentras, llama a Teo»',
    wilson: 'cerrajero desde hace veinte años; dejó las llaves de su taller en la fiesta y no puede entrar',
    herminia: '81 años; en el teléfono está el último mensaje de voz de su marido Julio; su nieto Iker llama al teléfono toda la noche',
    gaspar: 'el bonsái era de su abuelo y tiene sesenta años; es de plástico, y Gaspar lo regó veinte años',
    alex: '35 años; el táper es de su madre, con su nombre grabado; dentro hay una nota: «Llámame más»',
    aurora: '79 años; perdió un guante rojo en la Noche de los Faroles de 1986 y viene cada año la noche después de la fiesta',
    anillo: 'la boda es el sábado; el joyero grabó «Jessica», el nombre de la exnovia de Óliver',
    canoa: 'la canoa se llama La Gaviota; Nacho y Guille grabaron sus nombres en 1998; llevan diez años sin hablarse',
    cenizas: 'el perro se llamaba Canelo y vivió catorce años; la urna viajó toda la noche en la línea 14',
    loro: 'el loro se llama Fígaro; Rubén lo perdió hace seis años y Fefa lo adoptó',
    tato: 'devuelve catorce carteras de la fiesta y pide el diez por ciento de recompensa',
    benja: '27 años; despertó en pijama en un banco; anoche ganó el karaoke de la fiesta',
    gloria: 'farmacéutica de guardia en la farmacia de enfrente, la del letrero verde',
    selene: 'su farol de papel cayó en la azotea de la oficina con el deseo sin quemar',
    yuri: 'vigilante nocturno, 30 años; leyó toda la noche un diario encontrado en una mochila: es de Doña Pura',
    ernesto: 'secretario del alcalde; sacó el número 247 de la máquina; busca la llave de oro de la ciudad, que es de chocolate',
    pura: '55 años; jefa de la oficina; llega a las siete',
  },
};

// The clock of the shift: 23:00 with nothing played, about half past six
// when the seventeen circles before the shift change are done; the last
// circle is the shift change itself, at seven.
export function shiftClock(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('relevo')) return OFFICE.change;
  const n = list.filter((id) => id !== 'relevo').length;
  const k = Math.max(0, Math.min(1, n / (STORY.length - 1)));
  const minutes = Math.round((OFFICE.start[0] * 60 + OFFICE.start[1] + 7.5 * 60 * k) / 5) * 5;
  const h = Math.floor(minutes / 60) % 24;
  return `${String(h).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}
// 0 deep night at 23:00, 1 the last dark hour, 2 daylight at the shift change.
export function nightPhase(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('relevo')) return 2;
  return Math.max(0, Math.min(1, list.length / (STORY.length - 1)));
}

// The ledger of the night. Every answer of every circle before the shift
// change writes one line, and at seven Doña Pura reads it in her office.
// Three lines per circle, one per answer (A, B, C), with English for A0;
// `back` says whether the object goes home with its owner.
const n = (back, es, en) => ({ back, es, en });
export const REGISTRO = {
  dentadura: [
    n(true, 'Don Evaristo probó tres dentaduras y se llevó la suya, que estaba dentro de una tuba.', 'Don Evaristo tried three sets of teeth and took his own, which was inside a tuba.'),
    n(false, 'Don Evaristo se fue con una sopa caliente y la promesa de volver a las siete.', 'Don Evaristo left with a hot soup and a promise to come back at seven.'),
    n(true, 'La dentadura de Don Evaristo volvió a su boca y la tuba municipal perdió su mejor nota.', 'Don Evaristo’s teeth went back into his mouth and the town tuba lost its best note.'),
  ],
  paraguas: [
    n(true, 'El paraguas de Teo volvió a su dueño, y con él, el número de Rocío.', 'Teo’s umbrella went back to its owner, and with it, Rocío’s number.'),
    n(false, 'Rocío se quedó el paraguas: dice que va a llover más veces.', 'Rocío kept the umbrella: she says it is going to rain again.'),
    n(false, 'El paraguas de Teo espera en la estantería, entre otros 1.411 paraguas negros.', 'Teo’s umbrella waits on the shelf, among 1,411 other black umbrellas.'),
  ],
  llaves: [
    n(true, 'Entre tres mil llaves, la número 2.871 abrió el taller del cerrajero.', 'Among three thousand keys, number 2,871 opened the locksmith’s workshop.'),
    n(true, 'Un cerrajero abrió su propio taller con una horquilla de la caja de objetos del pelo.', 'A locksmith opened his own workshop with a hairpin from the box of hair things.'),
    n(false, 'Wilson durmió en el sofá de la sala de espera y abrirá su taller por la mañana.', 'Wilson slept on the waiting-room sofa and will open his workshop in the morning.'),
  ],
  telefono: [
    n(true, 'Doña Herminia volvió a escuchar la voz de Julio en un cargador de 1998.', 'Doña Herminia heard Julio’s voice again on a charger from 1998.'),
    n(true, 'El teléfono que sonaba toda la noche era el de Doña Herminia: llamaba su nieto.', 'The phone that rang all night was Doña Herminia’s: her grandson was calling.'),
    n(true, 'Doña Herminia ya tiene el mensaje de Julio guardado en tres sitios distintos.', 'Doña Herminia now has Julio’s message saved in three different places.'),
  ],
  bonsai: [
    n(true, 'Gaspar recuperó el bonsái de su abuelo, de plástico y con sesenta años de cariño.', 'Gaspar got back his grandfather’s bonsai, plastic and with sixty years of love.'),
    n(true, 'Gaspar se rio por primera vez desde el entierro: su abuelo le gastó una broma de veinte años.', 'Gaspar laughed for the first time since the funeral: his grandfather played a twenty-year joke on him.'),
    n(false, 'El bonsái de plástico se quedó en la cámara fría: Gaspar prefiere no saber la verdad.', 'The plastic bonsai stayed in the cold room: Gaspar prefers not to know the truth.'),
  ],
  taper: [
    n(true, 'Álex encontró el táper de su madre entre doscientos doce y la llamó a las cuatro de la mañana.', 'Álex found his mother’s container among two hundred and twelve and called her at four in the morning.'),
    n(true, 'Dentro del táper había una nota: «Llámame más». Álex prometió llamar los domingos.', 'Inside the container there was a note: “Call me more.” Álex promised to call on Sundays.'),
    n(false, 'Álex se llevó otro táper parecido; su madre lo va a notar.', 'Álex took another, similar container; his mother is going to notice.'),
  ],
  guante: [
    n(true, 'Cuarenta años después, el guante rojo de 1986 volvió a la mano de Doña Aurora.', 'Forty years later, the red glove from 1986 went back to Doña Aurora’s hand.'),
    n(true, 'Don Celestino confesó que guardó el guante cuarenta años en su cajón.', 'Don Celestino confessed that he kept the glove for forty years in his drawer.'),
    n(false, 'Doña Aurora y Don Celestino quedaron para buscar el guante el año que viene, juntos.', 'Doña Aurora and Don Celestino arranged to look for the glove next year, together.'),
  ],
  anillo: [
    n(true, 'El anillo apareció en el bolsillo del vestido, y la novia ya sabe quién es Jessica.', 'The ring turned up in the dress pocket, and the bride now knows who Jessica is.'),
    n(false, 'El anillo con el nombre de otra se quedó en la oficina: el sábado usarán uno de lata.', 'The ring with someone else’s name stayed at the office: on Saturday they will use a tin one.'),
    n(true, 'Vanesa se llevó el anillo y una idea: grabar «Jessica no» al lado del nombre.', 'Vanesa took the ring and an idea: engrave “not Jessica” next to the name.'),
  ],
  tuba: [
    n(true, 'Fidel recuperó su tuba, sin la dentadura y con su sonido de siempre.', 'Fidel got his tuba back, without the false teeth and with its usual sound.'),
    n(false, 'La tuba se quedó en la oficina hasta que Fidel aprenda a tocarla sin ayuda dental.', 'The tuba stayed at the office until Fidel learns to play it without dental help.'),
    n(true, 'Fidel se llevó la tuba y una lección: anoche no sonaba la dentadura, sonaba él.', 'Fidel took the tuba and a lesson: last night it wasn’t the teeth playing, it was him.'),
  ],
  canoa: [
    n(true, 'Nacho y Guille se llevaron La Gaviota entre los dos, cada uno de un extremo.', 'Nacho and Guille carried La Gaviota away between them, each at one end.'),
    n(false, 'La canoa se quedó en la oficina hasta que dos amigos decidan de quién es.', 'The canoe stayed at the office until two friends decide whose it is.'),
    n(true, 'Después de diez años, dos amigos leyeron sus nombres de 1998 y se dieron un abrazo.', 'After ten years, two friends read their names from 1998 and hugged.'),
  ],
  cenizas: [
    n(true, 'Canelo volvió a casa después de proteger la línea 14 toda la noche.', 'Canelo went home after protecting line 14 all night.'),
    n(true, 'Lisandro dejó que Canelo hiciera una última vuelta en el autobús antes de volver a casa.', 'Lisandro let Canelo ride one last loop on the bus before going home.'),
    n(true, 'La conductora de la línea 14 va a poner una foto de Canelo junto al volante.', 'The line 14 driver is going to put a photo of Canelo next to the steering wheel.'),
  ],
  loro: [
    n(true, 'Fígaro volvió con Rubén, el dueño que lo perdió hace seis años.', 'Fígaro went back to Rubén, the owner who lost him six years ago.'),
    n(true, 'Fígaro se quedó con Doña Fefa, y Rubén lo visitará los domingos.', 'Fígaro stayed with Doña Fefa, and Rubén will visit him on Sundays.'),
    n(false, 'El loro sigue en la oficina, repitiendo los secretos de los dos.', 'The parrot is still at the office, repeating both of their secrets.'),
  ],
  ladron: [
    n(true, 'Un carterista devolvió catorce carteras y se fue sin recompensa, pero con un recibo.', 'A pickpocket returned fourteen wallets and left without a reward, but with a receipt.'),
    n(true, 'Catorce carteras volvieron a sus dueños, y Tato pidió trabajo en la oficina.', 'Fourteen wallets went back to their owners, and Tato asked for a job at the office.'),
    n(false, 'Tato se llevó las catorce carteras otra vez porque nadie le dio el diez por ciento.', 'Tato took the fourteen wallets away again because nobody gave him the ten percent.'),
  ],
  sonambulo: [
    n(true, 'Benja recuperó su zapato, su teléfono y un trofeo de karaoke que no recordaba.', 'Benja got back his shoe, his phone and a karaoke trophy he did not remember.'),
    n(true, 'Benja se enteró de que anoche fue el rey del karaoke, y no le gustó nada.', 'Benja found out that last night he was the karaoke king, and he did not like it at all.'),
    n(false, 'Benja volvió a casa en pijama y con un zapato: prefiere no saber más.', 'Benja went home in pyjamas and with one shoe: he prefers not to know more.'),
  ],
  farol: [
    n(true, 'Selene recuperó su farol y leyó su deseo en voz alta en la azotea.', 'Selene got her lantern back and read her wish out loud on the roof.'),
    n(false, 'El farol de Selene subió otra vez al cielo, esta vez bien encendido.', 'Selene’s lantern went up into the sky again, this time properly lit.'),
    n(true, 'Selene se llevó su deseo a casa: lo va a cumplir ella misma.', 'Selene took her wish home: she is going to make it come true herself.'),
  ],
  diario: [
    n(true, 'Yuri cerró el diario sin leer el final y lo dejó en la mesa de la jefa.', 'Yuri closed the diary without reading the ending and left it on the boss’s desk.'),
    n(false, 'Yuri leyó el diario hasta el final y ahora sabe demasiado sobre su jefa.', 'Yuri read the diary to the end and now knows too much about his boss.'),
    n(true, 'El diario volvió a la mochila con una nota: «Encontrado por el turno de noche».', 'The diary went back into the backpack with a note: “Found by the night shift.”'),
  ],
  alcalde: [
    n(true, 'La llave de oro de la ciudad volvió al alcalde, con un mordisco y sin explicaciones.', 'The city’s golden key went back to the mayor, with a bite out of it and no explanations.'),
    n(false, 'El secretario del alcalde esperó su turno, el 247, y se durmió en la silla.', 'The mayor’s secretary waited for his turn, number 247, and fell asleep in the chair.'),
    n(true, 'El secretario del alcalde se llevó una llave de chocolate nueva, comprada en la farmacia.', 'The mayor’s secretary took a new chocolate key, bought at the pharmacy.'),
  ],
};
export const REGISTRO_IDS = Object.keys(REGISTRO);

// The ledger of the night: the lines you have, in the order you played.
export function ledgerLines(done, picks) {
  return (Array.isArray(done) ? done : []).filter((id) => REGISTRO[id] && Number.isInteger(picks?.[id])).map((id) => ({ id, line: REGISTRO[id][picks[id]] }));
}
// How many objects went home tonight (the bet with Doña Pura: twelve).
export function returned(done, picks) {
  return ledgerLines(done, picks).filter((l) => l.line.back).length;
}
