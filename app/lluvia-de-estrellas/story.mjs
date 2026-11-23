// Lluvia de estrellas · who is who. One night at Camping Los Cardones, a
// remote campsite with a small observatory at 3600 metres, on the edge of the
// salt flat of the (fictional) Ancoyo desert, in the high desert of South
// America. Tonight is the biggest meteor shower in sixty years: the Ledésmidas,
// the dust of the comet that Amalia Ledesma discovered in 1966, when she was
// seventeen. The peak is at 03:12. Celeste, the astronomy guide, is afraid of
// the dark (nobody knows) and asks you to help her get everyone up to the
// rocky lookout before the peak. Every answer you give writes a line in her
// notebook: who comes up to the lookout, and how. She reads it at 03:12.
// Every character keeps one voice for the whole class (scenes and the
// listenings of every level), taken from app/escucha-3d/voices.json.
// The 18 white circles are listed in the order the night walks them.

export const CAST = {
  celeste: { name: 'Celeste', full: 'Celeste Arancibia', role: 'Guía de astronomía del camping, con miedo a la oscuridad', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile' },
  rogelio: { name: 'Rogelio', full: 'Don Rogelio Mamani', role: 'Dueño del camping desde hace veintidós años', gender: 'm', voice: 'es-BO-MarceloNeural', country: 'Bolivia' },
  cosme: { name: 'Cosme', full: 'Don Cosme Villalba', role: 'Vendedor ambulante con trescientos lentes de eclipse', gender: 'm', voice: 'es-PY-MarioNeural', country: 'Paraguay' },
  nora: { name: 'Nora', full: 'Nora Etchegaray', role: 'Vino a esparcir las cenizas de su padre', gender: 'f', voice: 'es-AR-ElenaNeural', country: 'Argentina' },
  ivan: { name: 'Iván', full: 'Iván Pereyra', role: 'Marido de Nora, encargado de traer la urna', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina' },
  hortensia: { name: 'Hortensia', full: 'Doña Hortensia Galdames', role: 'Radioaficionada de ochenta y un años', gender: 'f', voice: 'es-PE-CamilaNeural', country: 'Perú' },
  simon: { name: 'Simón', full: 'Simón Paredes', role: 'Niño de nueve años que quiere ver un extraterrestre', gender: 'm', voice: 'es-EC-LuisNeural', country: 'Ecuador' },
  gabriela: { name: 'Gabriela', full: 'Gabriela Paredes', role: 'Madre de Simón, muy cansada', gender: 'f', voice: 'es-EC-AndreaNeural', country: 'Ecuador' },
  bruno: { name: 'Bruno', full: 'Bruno Cárdenas', role: 'Vendedor de seguros que dijo ser astrofísico en una aplicación de citas', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia' },
  lucia: { name: 'Lucía', full: 'Lucía Restrepo', role: 'Astrofísica de verdad, en su primera cita con Bruno', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  petrona: { name: 'Petrona', full: 'Doña Petrona Condori', role: 'Cocinera del camping', gender: 'f', voice: 'es-BO-SofiaNeural', country: 'Bolivia' },
  mauro: { name: 'Mauro', full: 'Mauro Silveira', role: 'Ayudante de cocina, recién llegado de la costa', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay' },
  wilmer: { name: 'Wilmer', full: 'Wilmer Choque', role: 'Cuidador de las llamas, diecinueve años', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú' },
  fabian: { name: 'Fabián', full: 'Fabián Echeverría', role: 'Ejecutivo con una videollamada a Tokio', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España' },
  rocio: { name: 'Rocío', full: 'Rocío Benítez', role: 'Madre primeriza que vino a dormir una noche entera', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay' },
  elias: { name: 'Elías', full: 'Elías Fontana', role: 'Ciego de nacimiento, vino a escuchar las estrellas fugaces', gender: 'm', voice: 'es-VE-SebastianNeural', country: 'Venezuela' },
  marta: { name: 'Marta', full: 'Marta Fontana', role: 'Hermana mayor de Elías', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela' },
  amalia: { name: 'Amalia', full: 'Doña Amalia Ledesma', role: 'Descubrió el cometa Ledesma en 1966, a los diecisiete años', gender: 'f', voice: 'es-ES-ElviraNeural', country: 'España' },
  joaquin: { name: 'Joaquín', full: 'Joaquín Ortúzar', role: 'Técnico del observatorio', gender: 'm', voice: 'es-PA-RobertoNeural', country: 'Panamá' },
  ramiro: { name: 'Ramiro', full: 'Don Ramiro Quispe', role: 'Minero jubilado, cuarenta y un años bajo tierra', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  ulises: { name: 'Ulises', full: 'Ulises Arteaga', role: 'Fotógrafo que espera la foto perfecta desde hace veinte años', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala' },
  zulema: { name: 'Zulema', full: 'Madame Zulema', role: 'Astróloga que vende horóscopos junto al salar', gender: 'f', voice: 'es-PR-KarinaNeural', country: 'Puerto Rico' },
  kiara: { name: 'Kiara', full: 'Kiara Montes', role: 'Influencer de viajes con un dron', gender: 'f', voice: 'es-DO-RamonaNeural', country: 'República Dominicana' },
  dante: { name: 'Dante', full: 'Dante Montes', role: 'Hermano y camarógrafo de Kiara', gender: 'm', voice: 'es-DO-EmilioNeural', country: 'República Dominicana' },
  teresa: { name: 'Teresa', full: 'Ingeniera Teresa Ugarte', role: 'Gerenta de la mina vecina y exesposa de Rogelio', gender: 'f', voice: 'es-SV-LorenaNeural', country: 'El Salvador' },
};

// The 18 circles: sector, the time each one happens (at) and who is there
// (first = the person you talk to). Rogelio switches the generator off at
// 23:00 (apagon, 22:55); the circles after it happen in the dark.
export const STORY = [
  { id: 'entrada', at: '21:00', sector: 'La entrada del camping', cast: ['celeste', 'rogelio'] },
  { id: 'lentes', at: '21:20', sector: 'El estacionamiento', cast: ['cosme'] },
  { id: 'urna', at: '21:40', sector: 'Las carpas', cast: ['nora', 'ivan'] },
  { id: 'alien', at: '22:30', sector: 'La carpa azul', cast: ['simon', 'gabriela'] },
  { id: 'cita', at: '22:45', sector: 'El círculo de la fogata', cast: ['bruno', 'lucia'] },
  { id: 'apagon', at: '22:55', sector: 'La caseta del generador', cast: ['rogelio', 'teresa'] },
  { id: 'cocina', at: '23:20', sector: 'La carpa cocina', cast: ['petrona', 'mauro'] },
  { id: 'llama', at: '00:30', sector: 'El corral de las llamas', cast: ['wilmer'] },
  { id: 'hamacas', at: '00:45', sector: 'Las hamacas', cast: ['rocio'] },
  { id: 'sendero', at: '01:00', sector: 'El sendero del mirador', cast: ['elias', 'marta'] },
  { id: 'cupula', at: '01:15', sector: 'La cúpula del observatorio', cast: ['amalia', 'joaquin'] },
  { id: 'radio', at: '01:35', sector: 'Las caravanas', cast: ['hortensia'] },
  { id: 'duchas', at: '01:50', sector: 'Las duchas', cast: ['fabian'] },
  { id: 'mina', at: '02:00', sector: 'La casucha minera', cast: ['ramiro'] },
  { id: 'salar', at: '02:15', sector: 'El salar', cast: ['ulises'] },
  { id: 'astrologa', at: '02:30', sector: 'La orilla del salar', cast: ['zulema'] },
  { id: 'dron', at: '02:45', sector: 'Las rocas', cast: ['kiara', 'dante'] },
  { id: 'mirador', at: '03:12', sector: 'El mirador', cast: ['celeste', 'amalia', 'ramiro'] },
];
export const STORY_IDS = STORY.map((s) => s.id);
export const castByName = (name) => Object.entries(CAST).find(([, c]) => c.name === name)?.[0] ?? null;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue + question for each level (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [20, 75], A1: [35, 100], A2: [55, 135], B1: [75, 170], B2: [95, 205], C1: [110, 240], C2: [125, 275] };
// What the white circle can show after a choice: the person's face changes.
export const MOODS = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious'];

// One table of facts, so that no level and no listening contradicts another.
export const NIGHT = {
  camping: 'Camping Los Cardones',
  desert: 'el desierto de Ancoyo',
  saltFlat: 'el salar de Ancoyo',
  observatory: 'el observatorio Ojo de Ancoyo',
  altitude: 3600,
  campers: 64,
  shower: 'las Ledésmidas',
  comet: 'el cometa Ledesma',
  discovered: 1966,
  // The arc of the student: everyone at the rocky lookout before the peak.
  start: [21, 0],
  lightsOut: '23:00',
  peak: '03:12',
  perHour: 1000,
  lookoutWalk: 20, // minutes on foot from the campfire
  facts: {
    celeste: '31 años; guía del camping desde hace seis años; miedo a la oscuridad desde niña; usa una linterna de luz roja',
    rogelio: '58 años; dueño del camping desde hace veintidós años; a las 23:00 apaga el generador y todas las luces',
    cosme: 'trajo trescientos lentes de eclipse; para una lluvia de estrellas no hacen falta',
    urna: 'Nora y Iván, casados hace doce años; las cenizas son de Arturo, el padre de Nora, astrónomo aficionado; la urna se quedó en la cocina de su casa de Mendoza, a novecientos kilómetros',
    hortensia: '81 años; radioaficionada desde hace cincuenta años; la estación espacial pasa a la 01:40 durante seis minutos',
    simon: '9 años; viaja con su madre, Gabriela',
    cita: 'primera cita de una aplicación; Bruno vende seguros y escribió que era astrofísico; Lucía es astrofísica de verdad',
    petrona: 'cocina para sesenta y cuatro personas; a 3600 metros el agua hierve a 88 grados',
    wilmer: '19 años; la llama se llama Estrella y está a punto de tener su cría esta noche',
    fabian: 'videollamada con Tokio a las 02:00; el agua caliente dura cuatro minutos',
    rocio: 'su hijo, Martín, tiene siete meses; no duerme una noche entera desde hace siete meses',
    elias: '34 años, ciego de nacimiento; su hermana Marta tiene 38; una radio convierte los meteoros en sonidos',
    amalia: '77 años; descubrió el cometa en 1966, a los diecisiete; la noche de la lluvia de 1966 se quedó dormida',
    joaquin: '27 años; técnico del observatorio; la cúpula se trabó y el telescopio de cuarenta centímetros no gira',
    ramiro: '74 años; cuarenta y un años bajo tierra en la mina Santa Rita, siempre en el turno de noche; nunca vio una estrella fugaz',
    ulises: 'espera desde hace veinte años la foto del salar como un espejo, pero este año el salar está seco',
    zulema: 'astróloga; estudió tres años de física antes de leer horóscopos',
    kiara: '23 años; influencer de viajes; su dron con luces tapa el cielo; Dante es su hermano y camarógrafo',
    teresa: 'gerenta de la mina Santa Rita y exesposa de Rogelio; los reflectores de la mina iluminan el cielo',
  },
};

// The night follows the circles' own times: the clock shows the latest circle
// played (21:00 with nothing played, 03:12 at the lookout), so it never goes
// back and every circle's text agrees with the hour on the HUD.
const minutesOf = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return (h < 12 ? h + 24 : h) * 60 + m; };
const START = NIGHT.start[0] * 60 + NIGHT.start[1];
const LAST = minutesOf(STORY.at(-2).at);
export const sceneTime = (id) => STORY.find((s) => s.id === id)?.at ?? null;
function lateness(done) {
  const list = Array.isArray(done) ? done : [];
  return list.reduce((m, id) => { const at = sceneTime(id); return at && id !== 'mirador' ? Math.max(m, minutesOf(at)) : m; }, START);
}
export function nightClock(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('mirador')) return NIGHT.peak;
  const minutes = lateness(list);
  const h = Math.floor(minutes / 60) % 24;
  return `${String(h).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}
// The sky phase at which the camp goes dark: 23:00 on the same scale.
export const LIGHTS_OUT = (minutesOf(NIGHT.lightsOut) - START) / (LAST - START);
// 0 at nine in the evening (a little light still in the west), 1 the darkest
// sky with the shower growing (the last circle before the lookout), 2 the peak
// at the lookout. The camp goes dark only when Rogelio switches the generator
// off (apagon); until then the lamps stay on and wash out all but the first
// meteors, so the sky stays below LIGHTS_OUT.
export function skyPhase(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('mirador')) return 2;
  const k = Math.max(0, Math.min(1, (lateness(list) - START) / (LAST - START)));
  return list.includes('apagon') ? Math.max(k, LIGHTS_OUT) : Math.min(k, LIGHTS_OUT - 0.01);
}

// Celeste's notebook: who comes up to the lookout, and how. Every answer of
// every circle before the lookout writes one line, and at 03:12 she reads it
// up there. Three lines per circle, one per answer (A, B, C), with English for A0.
const n = (es, en) => ({ es, en });
export const LIBRETA = {
  entrada: [
    n('Celeste sube al mirador de la mano de alguien, y nadie se ríe.', 'Celeste goes up to the lookout holding someone’s hand, and nobody laughs.'),
    n('Celeste sube con su linterna roja, que no molesta a las estrellas ni a ella.', 'Celeste goes up with her red flashlight, which bothers neither the stars nor her.'),
    n('Celeste confesó por qué es guía: su abuelo le enseñó las estrellas para que no tuviera miedo.', 'Celeste confessed why she is a guide: her grandfather taught her the stars so she would not be afraid.'),
  ],
  lentes: [
    n('Don Cosme regala lentes de eclipse «para ver deseos», y todo el camping los lleva.', 'Don Cosme gives away eclipse glasses “for seeing wishes”, and the whole campsite wears them.'),
    n('Don Cosme guarda sus lentes para el eclipse de 2048 y sube al mirador con las manos libres.', 'Don Cosme keeps his glasses for the 2048 eclipse and goes up to the lookout with his hands free.'),
    n('Don Cosme vende termos de café en vez de lentes, y por fin gana dinero.', 'Don Cosme sells flasks of coffee instead of glasses, and finally makes money.'),
  ],
  urna: [
    n('Nora esparce en el viento la sal del salar, y dice que su padre lo entendería.', 'Nora scatters salt from the salt flat into the wind, and says her father would understand.'),
    n('Arturo mira la lluvia por videollamada, desde la cocina de Mendoza, al lado del azúcar.', 'Arturo watches the shower by video call, from the kitchen in Mendoza, next to the sugar.'),
    n('Iván y Nora deciden volver en 2027 con la urna, y esta noche solo miran el cielo.', 'Iván and Nora decide to come back in 2027 with the urn, and tonight they just look at the sky.'),
  ],
  radio: [
    n('Doña Hortensia habló seis minutos con la estación espacial, y le preguntaron por su receta de sopa.', 'Doña Hortensia talked for six minutes with the space station, and they asked about her soup recipe.'),
    n('Doña Hortensia contactó a un camionero de Salta que también miraba el cielo.', 'Doña Hortensia contacted a truck driver in Salta who was also looking at the sky.'),
    n('Doña Hortensia apagó la radio por primera vez en cincuenta años y escuchó el silencio.', 'Doña Hortensia switched off her radio for the first time in fifty years and listened to the silence.'),
  ],
  alien: [
    n('Simón sube al mirador con un cartel de bienvenida para los extraterrestres.', 'Simón goes up to the lookout with a welcome sign for the aliens.'),
    n('Simón descubrió que el extraterrestre más cercano es él, visto desde otra estrella.', 'Simón discovered that the nearest alien is himself, seen from another star.'),
    n('Gabriela se durmió en la carpa y Simón la cuidó como un astronauta de guardia.', 'Gabriela fell asleep in the tent and Simón looked after her like an astronaut on watch.'),
  ],
  cita: [
    n('Bruno confesó que vende seguros, y Lucía le explicó el universo con un malvavisco.', 'Bruno confessed that he sells insurance, and Lucía explained the universe to him with a marshmallow.'),
    n('Bruno no confesó nada; Lucía lo supo en tres preguntas y le dio una segunda cita igual.', 'Bruno confessed nothing; Lucía found out in three questions and gave him a second date anyway.'),
    n('Lucía confesó que en su perfil dice que mide un metro setenta, y mide uno sesenta.', 'Lucía confessed that her profile says she is one meter seventy tall, and she is one sixty.'),
  ],
  cocina: [
    n('Doña Petrona sirvió fideos medio duros y todo el mundo dijo que eran al dente.', 'Doña Petrona served half-hard noodles and everyone said they were al dente.'),
    n('Doña Petrona cambió los fideos por sopa de quinua, que no le teme a la altura.', 'Doña Petrona swapped the noodles for quinoa soup, which is not afraid of altitude.'),
    n('Doña Petrona salió de la cocina para mirar el cielo por primera vez en treinta años.', 'Doña Petrona came out of the kitchen to look at the sky for the first time in thirty years.'),
  ],
  llama: [
    n('Nació una llama bajo la lluvia de estrellas y se llama Cometa.', 'A llama was born under the meteor shower and her name is Cometa.'),
    n('Wilmer ayudó a Estrella toda la noche y sube al mirador con olor a corral.', 'Wilmer helped Estrella all night and goes up to the lookout smelling of the pen.'),
    n('La llama Estrella decidió esperar al amanecer, como las personas sensatas.', 'Estrella the llama decided to wait until dawn, like sensible people.'),
  ],
  duchas: [
    n('Fabián hizo su videollamada con Tokio desde el techo de las duchas, en toalla.', 'Fabián made his video call with Tokyo from the roof of the showers, in a towel.'),
    n('Fabián canceló la reunión con Tokio y sube al mirador con el pelo mojado.', 'Fabián canceled the meeting with Tokyo and goes up to the lookout with wet hair.'),
    n('Fabián les mostró la lluvia de estrellas a sus jefes de Tokio, y aplaudieron.', 'Fabián showed the meteor shower to his bosses in Tokyo, and they clapped.'),
  ],
  hamacas: [
    n('Rocío se durmió escuchando el llanto de su hijo grabado en el teléfono.', 'Rocío fell asleep listening to her baby’s crying recorded on her phone.'),
    n('Rocío no durmió: miró el cielo entero y dice que fue mejor que dormir.', 'Rocío did not sleep: she watched the whole sky and says it was better than sleeping.'),
    n('Rocío llamó a casa, oyó roncar a su marido y al niño, y por fin se rio.', 'Rocío called home, heard her husband and the baby snoring, and finally laughed.'),
  ],
  sendero: [
    n('Elías oyó cuarenta meteoros en la radio y los contó en voz alta para todos.', 'Elías heard forty meteors on the radio and counted them out loud for everyone.'),
    n('Marta le describió el cielo a su hermano y descubrió que ella tampoco lo miraba hace años.', 'Marta described the sky to her brother and discovered that she had not looked at it for years either.'),
    n('Elías guio a todos por el sendero a oscuras, porque la oscuridad es su casa.', 'Elías guided everyone along the path in the dark, because darkness is his home.'),
  ],
  cupula: [
    n('La cúpula se destrabó con una patada de Doña Amalia, que tiene setenta y siete años.', 'The dome came unstuck with a kick from Doña Amalia, who is seventy-seven.'),
    n('Doña Amalia dejó el telescopio a los niños y mira la lluvia de su cometa sin aparatos, como en 1966.', 'Doña Amalia left the telescope to the children and watches her comet’s shower with no instruments, as in 1966.'),
    n('Doña Amalia tomó un café doble para no dormirse esta vez.', 'Doña Amalia had a double coffee so as not to fall asleep this time.'),
  ],
  mina: [
    n('Don Ramiro sube al mirador con su casco de minero, por si el cielo se cae.', 'Don Ramiro goes up to the lookout with his miner’s helmet, in case the sky falls.'),
    n('Don Ramiro encontró en la casucha la carta que le escribió a su esposa en 1985.', 'Don Ramiro found in the hut the letter he wrote to his wife in 1985.'),
    n('Don Ramiro apagó la lámpara del casco y miró hacia arriba por primera vez de noche.', 'Don Ramiro switched off his helmet lamp and looked up at night for the first time.'),
  ],
  salar: [
    n('Ulises no consiguió el espejo del salar, pero fotografió a sesenta y cuatro personas mirando arriba.', 'Ulises did not get the salt-flat mirror, but he photographed sixty-four people looking up.'),
    n('Ulises dejó la cámara en la mochila y vio la lluvia con sus propios ojos.', 'Ulises left the camera in his backpack and saw the shower with his own eyes.'),
    n('Ulises hizo un espejo con un balde de agua y una foto que nadie entiende y todos aman.', 'Ulises made a mirror with a bucket of water and a photo nobody understands and everybody loves.'),
  ],
  astrologa: [
    n('Madame Zulema le leyó el futuro al cometa, y le salió un viaje largo.', 'Madame Zulema read the comet’s future, and it got a long journey.'),
    n('Zulema confesó que estudió física, y explicó los meteoros mejor que nadie.', 'Zulema confessed that she studied physics, and explained the meteors better than anyone.'),
    n('Zulema cerró el puesto de horóscopos: esta noche las estrellas hablan solas.', 'Zulema closed her horoscope stall: tonight the stars speak for themselves.'),
  ],
  dron: [
    n('Kiara aterrizó el dron y transmitió en directo… el cielo, sin ella.', 'Kiara landed the drone and streamed live… the sky, without her.'),
    n('El dron de Kiara se quedó sin batería y aterrizó solo, en la carpa cocina.', 'Kiara’s drone ran out of battery and landed by itself, in the kitchen tent.'),
    n('Kiara apagó el teléfono y su hermano Dante la filmó, por fin, en silencio.', 'Kiara switched off her phone and her brother Dante filmed her, at last, in silence.'),
  ],
  apagon: [
    n('Teresa apagó los reflectores de la mina, y Rogelio le dio las gracias después de nueve años.', 'Teresa switched off the mine floodlights, and Rogelio thanked her after nine years.'),
    n('A las 23:00 todo el desierto quedó a oscuras, hasta la mina Santa Rita.', 'At 23:00 the whole desert went dark, even the Santa Rita mine.'),
    n('Rogelio y Teresa miran la lluvia por radio, cada uno desde su lado, como antes.', 'Rogelio and Teresa watch the shower over the radio, each from their own side, as before.'),
  ],
};
export const LIBRETA_IDS = Object.keys(LIBRETA);

// The page of the notebook: the lines you have, in the order you played.
export function notebookLines(done, picks) {
  return (Array.isArray(done) ? done : []).filter((id) => LIBRETA[id] && Number.isInteger(picks?.[id])).map((id) => ({ id, line: LIBRETA[id][picks[id]] }));
}
