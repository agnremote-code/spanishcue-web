// La boda · who is who. Estancia Los Aromos, San Antonio de Areco, a
// Saturday in November: Valentina Ríos (Argentina) marries Joaquín Herrera
// (México). Ceremony in the chapel at 17:30, asado in the gardens, the band
// in the big tent, and at midnight the toast of the best man. But Facundo,
// the best man, vanished from the parking lot with the rings and the speech.
// You came as his guest and nobody knows you: the bride's family decides
// that the toast is yours. Every answer you give fills a line of the notes
// for that toast. Every character keeps one voice for the whole class
// (scenes and the listenings of every level), taken from the Edge neural
// voices in app/escucha-3d/voices.json.
// The 18 white circles are listed in the order the evening walks them.

export const CAST = {
  anselmo: { name: 'Anselmo', full: 'Don Anselmo Benítez', role: 'Portero de la estancia desde hace cuarenta años', gender: 'm', voice: 'es-PY-MarioNeural', country: 'Paraguay' },
  wilmer: { name: 'Wilmer', full: 'Wilmer Castro', role: 'Valet del estacionamiento', gender: 'm', voice: 'es-HN-CarlosNeural', country: 'Honduras' },
  benito: { name: 'Benito', full: 'Padre Benito Larrea', role: 'Cura de la capilla, casa a toda la familia', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España' },
  joaquin: { name: 'Joaquín', full: 'Joaquín Herrera', role: 'El novio', gender: 'm', voice: 'es-MX-JorgeNeural', country: 'México' },
  marisol: { name: 'Marisol', full: 'Marisol Peña', role: 'Tía y niñera de los pajecitos', gender: 'f', voice: 'es-DO-RamonaNeural', country: 'República Dominicana' },
  tadeo: { name: 'Tadeo', full: 'Tadeo Peña', role: 'Pajecito de ocho años', gender: 'm', voice: 'es-DO-EmilioNeural', country: 'República Dominicana' },
  valentina: { name: 'Valentina', full: 'Valentina Ríos', role: 'La novia', gender: 'f', voice: 'es-AR-ElenaNeural', country: 'Argentina' },
  camila: { name: 'Camila', full: 'Camila Duarte', role: 'Dama de honor y mejor amiga de la novia', gender: 'f', voice: 'es-NI-YolandaNeural', country: 'Nicaragua' },
  chela: { name: 'Chela', full: 'Doña Chela Ríos', role: 'Abuela de la novia, 86 años, opina de todo', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay' },
  lupita: { name: 'Lupita', full: 'Doña Lupita Herrera', role: 'Madre del novio', gender: 'f', voice: 'es-MX-DaliaNeural', country: 'México' },
  ximena: { name: 'Ximena', full: 'Ximena Herrera', role: 'Prima del novio, vive en Madrid', gender: 'f', voice: 'es-ES-XimenaNeural', country: 'España' },
  ramiro: { name: 'Ramiro', full: 'Chef Ramiro Quispe', role: 'Jefe del catering', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú' },
  yesenia: { name: 'Yesenia', full: 'Yesenia Quispe', role: 'Pastelera y sobrina del chef', gender: 'f', voice: 'es-PE-CamilaNeural', country: 'Perú' },
  beto: { name: 'Beto', full: 'Don Beto Araya', role: 'Asador contratado', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  gloria: { name: 'Gloria', full: 'Tía Gloria', role: 'Tía de la novia y autora del plano de mesas', gender: 'f', voice: 'es-PA-MargaritaNeural', country: 'Panamá' },
  pepe: { name: 'Pepe', full: 'Tío Pepe', role: 'Exmarido de Gloria, sentado donde no debe', gender: 'm', voice: 'es-PA-RobertoNeural', country: 'Panamá' },
  renata: { name: 'Renata', full: 'Renata Salas', role: 'La ex del novio, de vestido rojo', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela' },
  rocio: { name: 'Rocío', full: 'Rocío Andrade', role: 'Florista de la boda', gender: 'f', voice: 'es-EC-AndreaNeural', country: 'Ecuador' },
  mariela: { name: 'Mariela', full: 'Mariela Gómez', role: 'Organizadora de la boda, con auricular', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  willy: { name: 'Willy', full: 'Willy Arencibia', role: 'Director de la orquesta Son de Areco', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba' },
  yamile: { name: 'Yamilé', full: 'Yamilé Arencibia', role: 'Cantante de la orquesta', gender: 'f', voice: 'es-CU-BelkysNeural', country: 'Cuba' },
  chuy: { name: 'Chuy', full: 'Don Chuy Morales', role: 'Jefe del mariachi sorpresa', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala' },
  horacio: { name: 'Horacio', full: 'Don Horacio Ríos', role: 'Padre de la novia', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay' },
  edgardo: { name: 'Edgardo', full: 'Edgardo Rivera', role: 'Barman de la carpa', gender: 'm', voice: 'es-PR-VictorNeural', country: 'Puerto Rico' },
  ceferino: { name: 'Ceferino', full: 'Ceferino Mamani', role: 'Peón y dueño del caballo Lucero', gender: 'm', voice: 'es-BO-MarceloNeural', country: 'Bolivia' },
  gonzalo: { name: 'Gonzalo', full: 'Gonzalo Pardo', role: 'Fotógrafo de la boda', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia' },
  facundo: { name: 'Facundo', full: 'Facundo Ibarra', role: 'El padrino desaparecido', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina' },
};

// The 18 circles: sector and who is there (first = the person you talk to).
export const STORY = [
  { id: 'porton', sector: 'El portón y el estacionamiento', cast: ['anselmo', 'wilmer'] },
  { id: 'capilla', sector: 'La capilla', cast: ['benito', 'joaquin'] },
  { id: 'ninos', sector: 'El cantero de la capilla', cast: ['marisol', 'tadeo'] },
  { id: 'novia', sector: 'El cuarto de la novia', cast: ['valentina', 'camila'] },
  { id: 'abuela', sector: 'La galería de la casa', cast: ['chela'] },
  { id: 'novio', sector: 'El cuarto del novio', cast: ['lupita', 'ximena'] },
  { id: 'cocina', sector: 'La cocina', cast: ['ramiro', 'yesenia'] },
  { id: 'asado', sector: 'La parrilla', cast: ['beto'] },
  { id: 'mesa', sector: 'La mesa larga', cast: ['gloria', 'pepe'] },
  { id: 'ex', sector: 'El rosedal', cast: ['renata', 'rocio'] },
  { id: 'planner', sector: 'La entrada de la carpa', cast: ['mariela'] },
  { id: 'banda', sector: 'El escenario', cast: ['willy', 'chuy', 'yamile'] },
  { id: 'pista', sector: 'La pista de baile', cast: ['horacio'] },
  { id: 'barra', sector: 'La barra', cast: ['edgardo', 'ximena'] },
  { id: 'establo', sector: 'El establo', cast: ['ceferino'] },
  { id: 'fotos', sector: 'El ombú', cast: ['gonzalo'] },
  { id: 'muelle', sector: 'El muelle de la laguna', cast: ['facundo'] },
  { id: 'brindis', sector: 'La mesa principal', cast: ['valentina', 'joaquin', 'mariela'] },
];
export const STORY_IDS = STORY.map((s) => s.id);
export const castByName = (name) => Object.entries(CAST).find(([, c]) => c.name === name)?.[0] ?? null;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue + question for each level (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [20, 75], A1: [35, 100], A2: [55, 135], B1: [75, 170], B2: [95, 205], C1: [110, 240], C2: [125, 275] };
// What the white circle can show after a choice: the person's face changes.
export const MOODS = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious'];

export const WEDDING = {
  estancia: 'Estancia Los Aromos',
  place: 'San Antonio de Areco',
  couple: 'Valentina y Joaquín',
  start: [17, 0],
  toast: [0, 0],
  dawn: '05:40',
};

// The clock of the night: 17:00 with nothing played, midnight when the
// seventeen circles before the toast are done; after the toast, dawn.
export function nightClock(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('brindis')) return WEDDING.dawn;
  const n = list.filter((id) => id !== 'brindis').length;
  const k = Math.max(0, Math.min(1, n / (STORY.length - 1)));
  const minutes = Math.round((WEDDING.start[0] * 60 + WEDDING.start[1] + 7 * 60 * k) / 5) * 5;
  const h = Math.floor(minutes / 60) % 24;
  return `${String(h).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}
// 0 at 17:00, 1 at midnight, 2 at dawn after the toast: the sky reads it.
export function nightPhase(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('brindis')) return 2;
  return Math.max(0, Math.min(1, list.length / (STORY.length - 1)));
}

// The notes for the toast. Every answer of every circle before midnight
// writes one line on the card in your pocket, and at midnight you read them
// out. Three lines per circle, one per answer (A, B, C), in easy Spanish with
// English underneath for A0.
const n = (es, en) => ({ es, en });
export const TOAST = {
  porton: [
    n('Por Facundo, que nos dejó su saco, su auto y ninguna explicación.', 'To Facundo, who left us his jacket, his car and no explanation.'),
    n('Por Don Anselmo, que me dejó entrar sin estar en la lista.', 'To Don Anselmo, who let me in without being on the list.'),
    n('Por Wilmer, que estacionó un auto con el motor encendido y el corazón en la mano.', 'To Wilmer, who parked a car with the engine running and his heart in his hand.'),
  ],
  capilla: [
    n('Por Joaquín, que temblaba en el altar y aun así dijo «sí».', 'To Joaquín, who was shaking at the altar and still said “yes”.'),
    n('Por el padre Benito, que casó a una pareja con anillos de gomita.', 'To Father Benito, who married a couple with gummy rings.'),
    n('Por los votos que Joaquín escribió en una servilleta cinco minutos antes.', 'To the vows Joaquín wrote on a napkin five minutes before.'),
  ],
  ninos: [
    n('Por Tadeo, que plantó los anillos para que el amor creciera.', 'To Tadeo, who planted the rings so that love would grow.'),
    n('Por Marisol, que encontró los anillos con una cuchara de postre.', 'To Marisol, who found the rings with a dessert spoon.'),
    n('Por los anillos, que viajaron más que nosotros esta tarde.', 'To the rings, which travelled more than we did this afternoon.'),
  ],
  novia: [
    n('Por Valentina, que se casó con un vestido cosido con hilo de pescar.', 'To Valentina, who got married in a dress sewn with fishing line.'),
    n('Por Camila, la amiga que tiene una aguja para cada desastre.', 'To Camila, the friend who has a needle for every disaster.'),
    n('Por el vestido de la abuela, que esperó sesenta años esta fiesta.', 'To Grandma’s dress, which waited sixty years for this party.'),
  ],
  abuela: [
    n('Por la abuela Chela, que se fugó a caballo en 1962 y no se arrepiente.', 'To Grandma Chela, who eloped on horseback in 1962 and has no regrets.'),
    n('Por la abuela Chela, que le hizo un examen al novio y lo aprobó con un seis.', 'To Grandma Chela, who gave the groom an exam and passed him with a six.'),
    n('Por los cincuenta y un años de la abuela, con sus peleas y sus perdones.', 'To Grandma’s fifty-one years, with their fights and their forgiveness.'),
  ],
  novio: [
    n('Por Doña Lupita, que quemó la camisa y salvó la ceremonia con una corbata.', 'To Doña Lupita, who burned the shirt and saved the ceremony with a tie.'),
    n('Por las madres que planchan, lloran y contratan un mariachi sin avisar.', 'To the mothers who iron, cry and hire a mariachi band without telling anyone.'),
    n('Por Ximena, que vino desde Madrid para coser un agujero.', 'To Ximena, who came all the way from Madrid to sew up a hole.'),
  ],
  cocina: [
    n('Por la torta que decía «Joaquín y Renata» y ahora dice «Joaquín y Valentina».', 'To the cake that said “Joaquín and Renata” and now says “Joaquín and Valentina”.'),
    n('Por el chef Ramiro, que convirtió un error en un postre nuevo.', 'To Chef Ramiro, who turned a mistake into a new dessert.'),
    n('Por Yesenia, que escribió dos nombres de nuevo con la mano firme.', 'To Yesenia, who wrote two names again with a steady hand.'),
  ],
  asado: [
    n('Por Don Beto, que dio de comer a cuarenta primos que nadie invitó.', 'To Don Beto, who fed forty cousins nobody invited.'),
    n('Por la paz entre el asado chileno y el argentino, firmada con un choripán.', 'To peace between the Chilean and the Argentine barbecue, signed with a choripán.'),
    n('Por la carne que alcanzó porque alguien cortó más finito.', 'To the meat that was enough because someone cut it thinner.'),
  ],
  mesa: [
    n('Por la tía Gloria y el tío Pepe, sentados juntos por primera vez en doce años.', 'To Aunt Gloria and Uncle Pepe, seated together for the first time in twelve years.'),
    n('Por el plano de mesas, el documento más peligroso de esta familia.', 'To the seating plan, the most dangerous document in this family.'),
    n('Por la mesa nueve, donde nadie se conocía y ahora nadie se quiere ir.', 'To table nine, where nobody knew each other and now nobody wants to leave.'),
  ],
  ex: [
    n('Por Renata, que vino de rojo y se fue en paz.', 'To Renata, who came in red and left in peace.'),
    n('Por los regalos que llegan tarde y las cartas que nunca se mandaron.', 'To the gifts that arrive late and the letters that were never sent.'),
    n('Por Rocío, que escondió a una ex detrás de un arco de flores.', 'To Rocío, who hid an ex behind an arch of flowers.'),
  ],
  planner: [
    n('Por Mariela, que organiza bodas ajenas mientras arregla su propia vida.', 'To Mariela, who organises other people’s weddings while she sorts out her own life.'),
    n('Por los veinte minutos que gané contando chistes malos.', 'To the twenty minutes I won by telling bad jokes.'),
    n('Por el plan B, el plan C y el plan que inventamos sobre la marcha.', 'To plan B, plan C and the plan we invented as we went.'),
  ],
  banda: [
    n('Por el bolero que tocaron juntos la orquesta cubana y el mariachi.', 'To the bolero the Cuban band and the mariachi played together.'),
    n('Por Willy y Don Chuy, que compartieron un escenario y un tequila.', 'To Willy and Don Chuy, who shared a stage and a tequila.'),
    n('Por Yamilé, que cantó la canción de la abuela sin ensayar.', 'To Yamilé, who sang Grandma’s song without rehearsing.'),
  ],
  pista: [
    n('Por Don Horacio, que vendió su auto para pagar esta fiesta y no se lo dijo a nadie.', 'To Don Horacio, who sold his car to pay for this party and told nobody.'),
    n('Por el vals con rodilla mala más elegante de la provincia.', 'To the most elegant waltz with a bad knee in the province.'),
    n('Por los padres que bailan aunque no sepan.', 'To the fathers who dance even though they cannot.'),
  ],
  barra: [
    n('Por Ximena, a quien nadie más le va a preguntar cuándo se casa.', 'To Ximena, whom nobody is going to ask again when she is getting married.'),
    n('Por Edgardo, que sirve tragos y también consejos.', 'To Edgardo, who serves drinks and advice too.'),
    n('Por el trago sin alcohol más triste y más honesto de la noche.', 'To the saddest and most honest alcohol-free drink of the night.'),
  ],
  establo: [
    n('Por Lucero, el caballo que se comió el ramo y no pidió perdón.', 'To Lucero, the horse that ate the bouquet and did not apologise.'),
    n('Por Ceferino, que le habló a un caballo como se le habla a un amigo.', 'To Ceferino, who talked to a horse the way you talk to a friend.'),
    n('Por la salida a caballo que todavía no sabemos si va a salir bien.', 'To the exit on horseback that we still do not know will go well.'),
  ],
  fotos: [
    n('Por las fotos que se borraron y las que vamos a sacar ahora.', 'To the photos that got deleted and the ones we are going to take now.'),
    n('Por Gonzalo, que fotografió un secreto y decidió guardarlo.', 'To Gonzalo, who photographed a secret and decided to keep it.'),
    n('Por la foto movida de toda la familia, la más sincera de la noche.', 'To the blurry photo of the whole family, the most honest one of the night.'),
  ],
  muelle: [
    n('Por Facundo, que apareció en el muelle y me prestó sus palabras.', 'To Facundo, who turned up on the jetty and lent me his words.'),
    n('Por el papá de Facundo, que hoy también está en esta mesa.', 'To Facundo’s dad, who is also at this table tonight.'),
    n('Por los amigos que se pierden un rato y vuelven a tiempo.', 'To the friends who get lost for a while and come back in time.'),
  ],
};
export const TOAST_IDS = Object.keys(TOAST);

// The card in your pocket: the notes you have, in the order you played.
export function toastNotes(done, picks) {
  return (Array.isArray(done) ? done : []).filter((id) => TOAST[id] && Number.isInteger(picks?.[id])).map((id) => ({ id, note: TOAST[id][picks[id]] }));
}
