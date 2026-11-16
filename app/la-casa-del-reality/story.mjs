// La casa · who is who. «LA CASA», the reality show of forty cameras and no
// secrets, edición iberoamericana, day 41. Tonight, in the live gala, the
// student walks in as the surprise contestant and spends one whole night in
// the house: from the door at 22:00 to the last confession at dawn. Eighteen
// white circles, each with a housemate or a crew member who has a real
// problem (an alliance, the nominations, a secret about to leak, a camera
// behind the mirror, homesickness, a romance invented for the ratings). The
// red armchair of the confessional is the heart of the night: you sit in it
// three times (when you arrive, for the nominations and at dawn) and La Voz
// asks you the questions nobody asks you outside.
// Every answer becomes a caption: what the programme puts on screen about
// you. At dawn La Voz shows you how the show edited your night.
// Every character keeps one voice for the whole class (scenes and the
// listenings of every level), taken from app/escucha-3d/voices.json; the
// voice matches the character's gender.

export const CAST = {
  marga: { name: 'Marga', full: 'Marga Ibáñez', role: 'Regidora del programa: te mete en la casa en directo', gender: 'f', voice: 'es-ES-ElviraNeural', country: 'España' },
  voz: { name: 'La Voz', full: 'La Voz (Rodolfo)', role: 'La voz del confesionario: nadie le ha visto la cara', gender: 'm', voice: 'es-MX-JorgeNeural', country: 'México' },
  brenda: { name: 'Brenda', full: 'Brenda Salcedo', role: 'Influencer, 1,2 millones de seguidores y ninguna amiga en la casa', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela' },
  oscar: { name: 'Óscar', full: 'Óscar Villa', role: 'Entrenador personal, el estratega del salón', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España' },
  fela: { name: 'Fela', full: 'Doña Fela Rondón', role: 'Cocinera jubilada, 67 años, la abuela de la casa', gender: 'f', voice: 'es-CU-BelkysNeural', country: 'Cuba' },
  mateo: { name: 'Mateo', full: 'Mateo Guzmán', role: 'Abogado que dejó de hablar en voz alta', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  yeni: { name: 'Yeni', full: 'Yeni Cárdenas', role: 'Peluquera, 22 años, la más joven de la casa', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  lalo: { name: 'Lalo', full: 'Lalo Mena', role: 'Camarógrafo detrás del espejo del baño', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala' },
  sofi: { name: 'Sofi', full: 'Sofi Arce', role: 'Actriz sin trabajo y novia de mentira', gender: 'f', voice: 'es-AR-ElenaNeural', country: 'Argentina' },
  dani: { name: 'Dani', full: 'Dani Ferreyra', role: 'Bombero, el novio de mentira que se enamoró de verdad', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay' },
  nacho: { name: 'Nacho', full: 'Nacho Peralta', role: 'Dice que tiene 29 años', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina' },
  tono: { name: 'Toño', full: 'Toño Barrios', role: 'Repartidor y culturista, siete horas con la mano en un botón', gender: 'm', voice: 'es-PR-VictorNeural', country: 'Puerto Rico' },
  chema: { name: 'Chema', full: 'Chema Olmedo', role: 'Vendedor de seguros y cara del yogur del patrocinador', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú' },
  wendy: { name: 'Wendy', full: 'Wendy Rosales', role: 'La villana oficial de la temporada', gender: 'f', voice: 'es-PA-MargaritaNeural', country: 'Panamá' },
  chelo: { name: 'Chelo', full: 'Chelo Benavides', role: 'Productora del turno de noche', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile' },
  hugo: { name: 'Hugo', full: 'Hugo Andrade', role: 'Maestro de escuela rural, delante de la puerta roja', gender: 'm', voice: 'es-EC-LuisNeural', country: 'Ecuador' },
  paty: { name: 'Paty', full: 'Paty Linares', role: 'Maquilladora del programa', gender: 'f', voice: 'es-MX-DaliaNeural', country: 'México' },
  lucia: { name: 'Lucía', full: 'Lucía Montalbán', role: 'Concursante con un apellido falso', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay' },
};

// The 18 circles in the order the night walks them: room, and who is there
// (first = the person you talk to). The confessional's red armchair holds
// three of them: it opens the first one you have not played yet.
export const STORY = [
  { id: 'entrada', sector: 'La entrada', cast: ['marga'] },
  { id: 'confesionario', sector: 'El confesionario', cast: ['voz'] },
  { id: 'alianza', sector: 'El salón', cast: ['brenda', 'oscar'] },
  { id: 'cocina', sector: 'La cocina', cast: ['fela'] },
  { id: 'mudo', sector: 'El comedor', cast: ['mateo'] },
  { id: 'nostalgia', sector: 'El dormitorio', cast: ['yeni'] },
  { id: 'espejo', sector: 'El baño', cast: ['lalo'] },
  { id: 'romance', sector: 'El jardín', cast: ['sofi', 'dani'] },
  { id: 'edad', sector: 'La piscina', cast: ['nacho'] },
  { id: 'prueba', sector: 'El gimnasio del jardín', cast: ['tono'] },
  { id: 'patrocinador', sector: 'La nevera del patrocinador', cast: ['chema'] },
  { id: 'nominaciones', sector: 'El confesionario', cast: ['voz'] },
  { id: 'castigo', sector: 'El cuarto de castigo', cast: ['wendy'] },
  { id: 'pasillo', sector: 'El pasillo de producción', cast: ['chelo'] },
  { id: 'abandono', sector: 'La puerta roja', cast: ['hugo', 'fela'] },
  { id: 'maquillaje', sector: 'La sala de maquillaje', cast: ['paty'] },
  { id: 'secreto', sector: 'La lavandería', cast: ['lucia'] },
  { id: 'veredicto', sector: 'El confesionario', cast: ['voz', 'marga'] },
];
export const STORY_IDS = STORY.map((s) => s.id);
/** The three visits to the red armchair, in order. */
export const CONFESSIONS = ['confesionario', 'nominaciones', 'veredicto'];
export const castByName = (name) => Object.entries(CAST).find(([, c]) => c.name === name)?.[0] ?? null;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue + question for each level (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [20, 80], A1: [35, 105], A2: [55, 140], B1: [75, 175], B2: [95, 210], C1: [110, 245], C2: [125, 280] };
// What the face of the person shows after a choice.
export const MOODS = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious'];

export const SHOW = {
  name: 'LA CASA',
  motto: '40 cámaras · 0 secretos',
  edition: 'Edición iberoamericana',
  day: 41,
  start: [22, 0],
  last: [5, 30],
  end: '06:15',
  // The facts every scene, listening and housemate must agree with.
  facts: {
    season: 7, // «siete temporadas»: the show has run one season a year for seven years
    cameras: 40,
    vozYears: 7, // La Voz has asked the questions since the first season
    cheloWon: { season: 1, yearsAgo: 7 }, // Chelo won the first season «hace siete años»
    contractPage: 40, // Mateo's clause about his voice is on «la página cuarenta»
    felaAge: 67,
    felaDays: 40, // she has fed the house for forty days; tonight is day 41
    exitFine: 10000, // dollars, for leaving through the red door
  },
};

// The clock of the night: 22:00 with nothing played, 05:30 when the
// seventeen circles before the last confession are done; after it, 06:15,
// the end of the broadcast.
export function nightClock(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('veredicto')) return SHOW.end;
  const n = list.filter((id) => id !== 'veredicto').length;
  const k = Math.max(0, Math.min(1, n / (STORY.length - 1)));
  const span = (24 - SHOW.start[0]) * 60 + SHOW.last[0] * 60 + SHOW.last[1] - SHOW.start[1];
  const minutes = Math.round((SHOW.start[0] * 60 + SHOW.start[1] + span * k) / 5) * 5;
  const h = Math.floor(minutes / 60) % 24;
  return `${String(h).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}
// 0 at 22:00, 1 at 05:30, 2 once the last confession is done: the garden sky reads it.
export function nightPhase(done) {
  const list = Array.isArray(done) ? done : [];
  if (list.includes('veredicto')) return 2;
  return Math.max(0, Math.min(1, list.length / (STORY.length - 1)));
}

// Captions: what the programme puts on screen about you. Every answer of
// every circle before the last confession gives one (A, B, C), in the
// show's sensational style, with English underneath for A0. At dawn La Voz
// reads you the whole edit.
const c = (es, en) => ({ es, en });
export const ROTULOS = {
  entrada: [
    c('La Sorpresa entra con la frase que le escribieron los guionistas. Nadie aplaude.', 'The Surprise walks in with the line the writers gave them. Nobody claps.'),
    c('La Sorpresa entra diciendo la verdad. La audiencia no sabe qué hacer con eso.', 'The Surprise walks in telling the truth. The audience does not know what to do with that.'),
    c('La Sorpresa arregla su micrófono con una horquilla. Nace un ídolo técnico.', 'The Surprise fixes their microphone with a hairpin. A technical idol is born.'),
  ],
  confesionario: [
    c('Primera confesión: la Sorpresa dice que viene por el dinero. Por lo menos no miente.', 'First confession: the Surprise says they came for the money. At least it is not a lie.'),
    c('Primera confesión: la Sorpresa consuela a La Voz. ¿Quién confiesa a quién?', 'First confession: the Surprise comforts La Voz. Who is confessing to whom?'),
    c('Primera confesión: la Sorpresa mira a la cámara en silencio durante un minuto.', 'First confession: the Surprise stares at the camera in silence for a minute.'),
  ],
  alianza: [
    c('ALIANZA: la Sorpresa se une a Brenda y Óscar en su primera hora.', 'ALLIANCE: the Surprise joins Brenda and Óscar in their first hour.'),
    c('La Sorpresa descubre que Brenda y Óscar son pareja fuera de la casa.', 'The Surprise discovers that Brenda and Óscar are a couple outside the house.'),
    c('La Sorpresa rechaza dos alianzas en cinco minutos. Récord de la temporada.', 'The Surprise turns down two alliances in five minutes. Season record.'),
  ],
  cocina: [
    c('Crisis del atún: la Sorpresa defiende a Doña Fela y sus cuarenta latas.', 'Tuna crisis: the Surprise defends Doña Fela and her forty tins.'),
    c('La Sorpresa cocina con Doña Fela un guiso para catorce con tres latas.', 'The Surprise cooks a stew for fourteen with three tins, together with Doña Fela.'),
    c('Doña Fela cuenta por qué guarda comida. La cocina se queda en silencio.', 'Doña Fela tells why she keeps food. The kitchen goes silent.'),
  ],
  mudo: [
    c('La Sorpresa lee el contrato de Mateo. Ahora tampoco quiere hablar.', 'The Surprise reads Mateo’s contract. Now they do not want to speak either.'),
    c('La Sorpresa y Mateo conversan con servilletas. Ya es tendencia.', 'The Surprise and Mateo talk with napkins. It is already trending.'),
    c('Mateo vuelve a hablar después de once días. Su primera palabra: «gracias».', 'Mateo speaks again after eleven days. His first word: “thank you”.'),
  ],
  nostalgia: [
    c('Yeni llora y la producción le pone el mensaje de su madre. Audiencia récord.', 'Yeni cries and the production plays her mother’s message. Record audience.'),
    c('La Sorpresa le enseña a Yeni a dormirse contando clientes de la peluquería.', 'The Surprise teaches Yeni to fall asleep counting hair-salon clients.'),
    c('Yeni se niega a llorar para la cámara. La producción no sabe qué emitir.', 'Yeni refuses to cry for the camera. The production does not know what to broadcast.'),
  ],
  espejo: [
    c('Escándalo en el baño: el espejo estornuda.', 'Bathroom scandal: the mirror sneezes.'),
    c('La Sorpresa charla media hora con un espejo. Los expertos están preocupados.', 'The Surprise chats with a mirror for half an hour. Experts are worried.'),
    c('La Sorpresa convence al camarógrafo del baño de grabar pingüinos.', 'The Surprise convinces the bathroom cameraman to go and film penguins.'),
  ],
  romance: [
    c('Primer beso en la hamaca. Producción lo había pedido para las 23:30. Llegó a las 23:31.', 'First kiss in the hammock. Production had asked for it at 23:30. It arrived at 23:31.'),
    c('La Sorpresa le dice a Dani la verdad sobre Sofi. La hamaca se rompe de pena.', 'The Surprise tells Dani the truth about Sofi. The hammock breaks from sadness.'),
    c('Sofi y Dani cancelan su romance en directo. Nadie se lo cree.', 'Sofi and Dani cancel their romance live. Nobody believes it.'),
  ],
  edad: [
    c('BOMBA: Nacho no tiene 29 años. Tiene 44 y un walkman.', 'BOMBSHELL: Nacho is not 29. He is 44 and has a Walkman.'),
    c('La Sorpresa y Nacho esconden una foto de 1998 en la piscina.', 'The Surprise and Nacho hide a photo from 1998 in the pool.'),
    c('Nacho cuenta su edad haciendo chistes. La casa le aplaude.', 'Nacho reveals his age by telling jokes. The house applauds him.'),
  ],
  prueba: [
    c('Toño suelta el botón. Siete horas para nada.', 'Toño lets go of the button. Seven hours for nothing.'),
    c('La Sorpresa sostiene el botón mientras Toño va al baño. ¿Es legal?', 'The Surprise holds the button while Toño goes to the bathroom. Is that legal?'),
    c('Descubren que el botón de la prueba enciende la luz de la nevera.', 'They discover that the challenge button turns on the fridge light.'),
  ],
  patrocinador: [
    c('Chema dice «Yogur Vitalín» treinta veces. El patrocinador se queda.', 'Chema says “Vitalín Yogurt” thirty times. The sponsor stays.'),
    c('La Sorpresa dice «Yogur Vitalín» por Chema. Contrato publicitario a la vista.', 'The Surprise says “Vitalín Yogurt” for Chema. An advertising deal in sight.'),
    c('Chema confiesa que no puede tomar lácteos. El yogur se queda en la nevera.', 'Chema confesses he cannot have dairy. The yogurt stays in the fridge.'),
  ],
  nominaciones: [
    c('Nominaciones: la Sorpresa obedece a la producción. Fela, nominada.', 'Nominations: the Surprise obeys the production. Fela, nominated.'),
    c('Nominaciones: la Sorpresa no nomina a nadie. La Voz se queda muda.', 'Nominations: the Surprise nominates nobody. La Voz is speechless.'),
    c('Nominaciones: la Sorpresa se nomina a sí misma. Primera vez en siete temporadas.', 'Nominations: the Surprise nominates themself. First time in seven seasons.'),
  ],
  castigo: [
    c('La Sorpresa entra al cuarto de castigo y sale con un suéter tejido.', 'The Surprise goes into the punishment room and comes out with a knitted sweater.'),
    c('Wendy, la villana, llora con la Sorpresa. ¿Estrategia o verdad?', 'Wendy, the villain, cries with the Surprise. Strategy or truth?'),
    c('La Sorpresa convence a Wendy de dejar de ser la villana. La audiencia protesta.', 'The Surprise convinces Wendy to stop being the villain. The audience protests.'),
  ],
  pasillo: [
    c('La Sorpresa acepta el trato de producción: habrá pelea a las tres.', 'The Surprise accepts the production’s deal: there will be a fight at three.'),
    c('La Sorpresa comparte una pizza fría con la productora. Nadie lo graba.', 'The Surprise shares a cold pizza with the producer. Nobody films it.'),
    c('La ganadora de la primera temporada vuelve a llorar en el pasillo.', 'The winner of the first season cries again in the corridor.'),
  ],
  abandono: [
    c('Hugo abandona la casa para ir con su padre. La puerta roja se abre.', 'Hugo leaves the house to be with his father. The red door opens.'),
    c('La casa junta la multa de Hugo con sus premios de la semana.', 'The house pays Hugo’s fine with their prizes of the week.'),
    c('La Sorpresa llama al hospital desde el confesionario por Hugo.', 'The Surprise calls the hospital from the confessional for Hugo.'),
  ],
  maquillaje: [
    c('Paty maquilla a la Sorpresa para que parezca que durmió ocho horas.', 'Paty does the Surprise’s make-up so it looks like they slept eight hours.'),
    c('La Sorpresa y la maquilladora se ríen de la muerte a las cuatro de la mañana.', 'The Surprise and the make-up artist laugh about death at four in the morning.'),
    c('La Sorpresa sale sin maquillaje. Ojeras en alta definición.', 'The Surprise goes out without make-up. Dark circles in high definition.'),
  ],
  secreto: [
    c('Lucía confiesa que es la hija del presentador. Su padre cambia de canal.', 'Lucía confesses she is the presenter’s daughter. Her father changes the channel.'),
    c('La Sorpresa guarda el secreto de Lucía entre la ropa sucia.', 'The Surprise keeps Lucía’s secret among the dirty laundry.'),
    c('Lucía y la Sorpresa planean sabotear el programa desde la lavandería.', 'Lucía and the Surprise plan to sabotage the show from the laundry room.'),
  ],
};
export const ROTULO_IDS = Object.keys(ROTULOS);

// Your edit: the captions you have, in the order you played.
export function rotulosFor(done, picks) {
  return (Array.isArray(done) ? done : []).filter((id) => ROTULOS[id] && Number.isInteger(picks?.[id])).map((id) => ({ id, caption: ROTULOS[id][picks[id]] }));
}
