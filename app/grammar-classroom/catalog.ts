import type { LessonSource } from '../lesson-catalog';

/** Public discovery metadata only. Never import classroom bodies here. */
export const grammarTopics = [
  ['tiempos', 'Tiempos verbales'], ['ser-estar', 'Ser, estar y haber'],
  ['subjuntivo', 'Subjuntivo'], ['condicionales', 'Condicionales'],
  ['imperativo', 'Imperativo'], ['perifrasis', 'Perífrasis verbales'],
  ['concordancia', 'Sustantivos y concordancia'], ['determinantes', 'Artículos y determinantes'],
  ['pronombres', 'Pronombres y relativos'], ['cantidad', 'Comparación y cantidad'],
  ['adverbios', 'Lugar y tiempo'], ['preposiciones', 'Preposiciones'],
  ['oraciones', 'Oraciones y conectores'], ['voz', 'Voz pasiva e impersonal'],
  ['discurso', 'Estilo indirecto'],
].map(([id, label]) => ({ id, label }));

export const grammarMetadata: Record<number, { title: string; grammarTopic: string }> = Object.fromEntries([
  [3, 'tiempos', 'Presente con vos: hablar de tu rutina en Argentina'],
  [18, 'tiempos', 'Imperfecto e indefinido: describir y contar qué pasó'],
  [23, 'condicionales', 'Condicionales del pasado: imaginar otros resultados'],
  [31, 'condicionales', 'Condiciones y consejos: proponer soluciones'],
  [37, 'subjuntivo', 'Subjuntivo y concordancia temporal: cambiar de perspectiva'],
  [40, 'concordancia', 'Sustantivos: nombrar personas, lugares y cosas'],
  [41, 'concordancia', 'Adjetivos y concordancia: describir lo que ves'],
  [42, 'determinantes', 'Artículos: presentar algo y volver a mencionarlo'],
  [43, 'determinantes', 'Demostrativos: elegir entre este, ese y aquel'],
  [44, 'determinantes', 'Posesivos: explicar de quién es cada cosa'],
  [45, 'cantidad', 'Cantidades: organizar una compra'],
  [46, 'pronombres', 'Pronombres personales y reflexivos: hablar de quién hace qué'],
  [47, 'adverbios', 'Adverbios: explicar dónde, cuándo y cómo'],
  [48, 'ser-estar', 'Ser, estar y hay: describir personas y lugares'],
  [106, 'pronombres', 'Objeto directo e indirecto: evitar repeticiones'],
  [107, 'tiempos', 'Modo y tiempo verbal: orientarse en una frase'],
  [110, 'concordancia', 'Grupos nominales: añadir información a una descripción'],
  [111, 'oraciones', 'Oraciones básicas: afirmar, negar y preguntar'],
  [112, 'concordancia', 'Descripciones precisas: identificar y comparar'],
  [113, 'oraciones', 'Orden de la oración: destacar la información importante'],
  [114, 'concordancia', 'Elipsis y reformulación: decir más sin repetir'],
  [115, 'perifrasis', 'Perífrasis: seguir, volver y dejar de hacer algo'],
  [116, 'concordancia', 'Grupos nominales complejos: escribir con precisión'],
  [117, 'preposiciones', 'Verbos con preposición: conectar ideas con precisión'],
  [118, 'concordancia', 'Ambigüedad gramatical: aclarar dos interpretaciones'],
  [119, 'perifrasis', 'Aspecto y perífrasis: mostrar cómo avanza una acción'],
  [140, 'tiempos', 'Presente de indicativo: hablar de hábitos y horarios'],
  [141, 'tiempos', 'Pretérito perfecto: contar experiencias y novedades'],
  [142, 'tiempos', 'Pretérito indefinido: contar qué pasó'],
  [143, 'tiempos', 'Pretérito imperfecto: describir cómo eran las cosas'],
  [144, 'tiempos', 'Futuro simple: hacer predicciones y promesas'],
  [145, 'imperativo', 'Imperativo: dar instrucciones afirmativas y negativas'],
  [146, 'tiempos', 'Condicional simple: pedir, aconsejar e imaginar'],
  [147, 'tiempos', 'Pluscuamperfecto: explicar qué había pasado antes'],
  [148, 'subjuntivo', 'Presente de subjuntivo: expresar deseos y recomendaciones'],
  [149, 'subjuntivo', 'Perfecto de subjuntivo: reaccionar a lo que ha pasado'],
  [150, 'subjuntivo', 'Imperfecto de subjuntivo: deseos y perspectivas del pasado'],
  [151, 'subjuntivo', 'Pluscuamperfecto de subjuntivo: valorar un pasado alternativo'],
  [152, 'tiempos', 'Condicional compuesto: explicar lo que habría ocurrido'],
  [153, 'tiempos', 'Futuro compuesto: prever resultados y hacer conjeturas'],
  [154, 'tiempos', 'Pretérito anterior: interpretar y reformular textos'],
  [155, 'subjuntivo', 'Futuro de subjuntivo: comprender usos formales e históricos'],
  [156, 'subjuntivo', 'Futuro perfecto de subjuntivo: interpretar fórmulas antiguas'],
  [211, 'oraciones', 'Y, o, pero, ni: conectar ideas cotidianas'],
  [212, 'oraciones', 'Que, porque y para: expresar ideas, razones y objetivos'],
  [213, 'oraciones', 'Antes, después y cuando: ordenar acciones'],
  [214, 'condicionales', 'Si + presente: acordar qué hacer en cada caso'],
  [217, 'oraciones', 'Conectores de contraste: añadir un matiz a una opinión'],
  [218, 'pronombres', 'Que y quien: identificar a la persona que buscas'],
  [219, 'condicionales', 'Si + imperfecto de subjuntivo: negociar posibilidades'],
  [220, 'oraciones', 'Aunque: conceder una objeción y mantener tu postura'],
].map(([id, grammarTopic, title]) => [id, { title, grammarTopic }])) as Record<number, { title: string; grammarTopic: string }>;

const additions = [
  [230, 'A2', 'adverbios', 'desde-hace-duracion', 'Desde y hace: contar cuánto tiempo llevas así', 'Distingue el punto de inicio y la duración al hablar de tu vida actual.', 4100, [47,140]],
  [231, 'B1', 'preposiciones', 'por-para-razones-objetivos', 'Por y para: explicar razones, objetivos y destinatarios', 'Organiza una entrega y explica motivos, plazos, recorridos e intercambios.', 4200, [47,212]],
  [232, 'B2', 'voz', 'pasiva-impersonal-informar', 'Pasiva e impersonal: informar sin nombrar a quien actúa', 'Elige entre se, una pasiva y una frase activa para escribir avisos claros.', 4300, [46,142]],
  [233, 'B2', 'discurso', 'estilo-indirecto-transmitir', 'Estilo indirecto: transmitir lo que alguien dijo o pidió', 'Comunica cambios de una cita conservando la intención y la referencia temporal.', 4400, [147,150]],
  [234, 'B2', 'pronombres', 'relativos-con-preposicion', 'Relativos con preposición: precisar de quién y de qué hablas', 'Relaciona personas, lugares y propuestas sin perder la preposición necesaria.', 4500, [218,117]],
  [235, 'B2', 'oraciones', 'consecuencias-tan-tanto', 'Tan, tanto y así que: explicar consecuencias', 'Relaciona intensidad, hechos y resultados para justificar una decisión.', 4600, [45,217]],
  [239, 'A1', 'ser-estar', 'clase-inicial', 'Clase inicial: tu primer «hola» en español', 'El abecedario, yo / tú / vos, «soy» y «estoy»: lo justo para tu primera charla con tus abuelos argentinos.', 50, []],
  [303, 'A1', 'concordancia', 'genero-de-sustantivos', 'Género de sustantivos y terminaciones frecuentes', 'Saber si una palabra es masculina o femenina, también cuando la terminación engaña: el problema, la mano, el agua fría.', 10003, [40]],
  [305, 'A1', 'concordancia', 'plural-y-concordancia', 'Plural de sustantivos y concordancia básica', 'Pasar de uno a varios: lápiz → lápices, reloj → relojes, y escribir un pedido con grupos como «dos carpetas azules».', 10005, [42,303]],
  [307, 'A1', 'concordancia', 'posicion-del-adjetivo', 'Posición habitual del adjetivo y sentido básico', 'Describir una casa con el adjetivo en su sitio y entender cuándo «gran», «viejo» o «único» cambian el sentido.', 10007, [41]],
  [311, 'A1', 'ser-estar', 'ser-identidad-y-origen', 'Ser para identidad, profesión y procedencia', 'Presentarte y presentar a otras personas: nombre, profesión, origen, nacionalidad y carácter con todas las formas de ser.', 10011, [46,239]],
  [312, 'A1', 'ser-estar', 'estar-estados-y-lugares', 'Estar para estados y lugares', 'Decir cómo estás y dónde estás tú, tu familia y tus cosas con «estar», sin confundirlo con «ser».', 10012, [311]],
  [314, 'A1', 'ser-estar', 'tener-edad-y-sensaciones', 'Tener y tener + edad / sensaciones', 'Decir tu edad, qué sientes (frío, calor, hambre, sed, sueño) y qué tienes con «tener», sin confundirlo con «ser» o «estar».', 10014, [48,311,312]],
  [318, 'A1', 'tiempos', 'presente-irregular-ser-estar-ir-tener', 'Presente irregular: ser, estar, ir, tener', 'Contar tu semana de trabajo con ser, estar, ir y tener: quién eres, dónde estás, adónde vas y qué reuniones tienes.', 10018, [140,311,312]],
  [319, 'A1', 'tiempos', 'presente-irregular-hacer-poner-salir-venir', 'Presente irregular: hacer, poner, salir, venir', 'Repartir las tareas de una cena y decir qué haces, qué pones, a qué hora sales y de dónde vienes.', 10019, [318,140]],
  [320, 'A1', 'tiempos', 'presente-con-cambio-vocalico', 'Presente con cambio vocálico: querer, poder, pedir', 'Decir qué quieres, qué puedes pagar y qué pides en un viaje, con quiero, puedo, pido y queremos, podemos, pedimos.', 10020, [319,140]],
  [323, 'A1', 'oraciones', 'interrogativos-con-tilde', 'Interrogativos con tilde: qué, quién, cuál, cuánto', 'Hacer preguntas concretas en un museo (horario, precio, dirección, personas) con la palabra interrogativa correcta y con tilde.', 10023, [111]],
  [324, 'A1', 'oraciones', 'oraciones-negativas', 'Oraciones negativas y posición de no', 'Decir que no puedes, no tienes tiempo o no trabajas, con «no» antes del verbo, y responder «No» o «No, no puedo».', 10024, [323,111,140]],
  [327, 'A1', 'preposiciones', 'preposiciones-basicas', 'Preposiciones básicas a, de, en, con, sin', 'Decir a dónde vas, de dónde vienes, dónde estás, con quién vas y qué no tienes, en un día de reparto por la ciudad.', 10027, [212,48]],
  [328, 'A1', 'preposiciones', 'contracciones-al-y-del', 'Contracciones al y del', 'Explicar trayectos por una ciudad con «del … al …» y saber cuándo a y de no se unen con el artículo.', 10028, [327,42]],
  [330, 'A1', 'adverbios', 'frecuencia-y-habitos', 'Expresiones de frecuencia y hábito', 'Decir con qué frecuencia haces algo (siempre, a veces, nunca, los lunes) y acordar días para entrenar con un compañero.', 10030, [47,140]],
  [331, 'A1', 'pronombres', 'verbos-reflexivos-cotidianos', 'Verbos reflexivos cotidianos', 'Contar tu rutina antes de un turno temprano con me levanto, te duchas, se viste y nos acostamos, y el pronombre en su sitio.', 10031, [330,46,140]],
  [332, 'A1', 'pronombres', 'gustar-y-encantar', 'Gustar y encantar + nombre / infinitivo', 'Decir qué te gusta y qué te encanta, y qué le gusta a otra persona, para elegir juntos un restaurante.', 10032, [331,140,46]],
  [333, 'A1', 'pronombres', 'pronombres-tras-preposicion', 'Pronombres tónicos tras preposición', 'Repartir invitaciones, tareas y regalos con para mí, para ti, con ella, conmigo y contigo, sin decir «para yo».', 10033, [332,327]],
  [335, 'A1', 'determinantes', 'articulos-cuerpo-y-ropa', 'Artículos con partes del cuerpo y ropa', 'Decir qué te duele y qué te pones con el artículo justo: me duele la cabeza, me pongo el abrigo; y mi abrigo para describir.', 10035, [45,42,331]],
  [336, 'A1', 'concordancia', 'describir-un-objeto', 'Identificar y describir un objeto con varias pistas', 'Encontrar el objeto correcto con varias pistas que concuerdan: la carpeta azul pequeña, la que está en el estante.', 10036, [335,41,307,48]],
  [337, 'A1', 'cantidad', 'comparativos-regulares', 'Comparativos regulares: más, menos, tan ... como', 'Comparar habitaciones de hotel por tamaño, precio y ruido con más … que, menos … que y tan … como, y elegir una.', 10037, [336,41,45]],
  [338, 'A1', 'adverbios', 'la-hora-el-dia-y-la-fecha', 'La hora, el día y la fecha', 'Preguntar y decir la hora, el día y la fecha para comprar un billete de tren y confirmar la salida y la llegada.', 10038, [337,45,327]],
  [339, 'A1', 'perifrasis', 'ir-a-infinitivo', 'Ir a + infinitivo: planes próximos', 'Contar y acordar tus planes para el sábado con voy a, vas a, vamos a + infinitivo, y distinguirlos de tus hábitos.', 10039, [338,318,327]],
  [340, 'A1', 'perifrasis', 'querer-poder-tener-que', 'Querer, poder y tener que + infinitivo', 'Organizar un viaje y negociar límites: decir qué quieres, qué puedes y qué tienes que hacer con un verbo + infinitivo.', 10040, [339,320]],
  [341, 'A1', 'perifrasis', 'estar-gerundio', 'Estar + gerundio: acción en desarrollo', 'Decir qué estás haciendo ahora mismo con estar + gerundio y distinguirlo de lo que haces normalmente.', 10041, [340,318,140]],
  [343, 'A1', 'oraciones', 'oraciones-simples-orden', 'Oraciones simples: orden, afirmación y pregunta', 'Decir quién hace qué y cuándo, preguntar con qué, quién o cuándo y negar con «no» antes del verbo, sin perder el sentido.', 10043, [106,111,324]],
  [344, 'A1', 'oraciones', 'microproduccion-a1', 'Microproducción A1: describir y pedir información', 'Describir una casa, decir qué hay y dónde están las cosas, y hacer las preguntas útiles para encontrarlas.', 10044, [343,323,336]],
  [346, 'A2', 'tiempos', 'participios-frecuentes', 'Participios regulares e irregulares frecuentes', 'Contar qué tareas ya has hecho hoy con haber + participio, regular (-ado, -ido) o irregular (abierto, escrito, hecho…).', 10046, [141]],
  [348, 'A2', 'tiempos', 'indefinido-irregular', 'Pretérito indefinido irregular de alta frecuencia', 'Contar una visita terminada con fui, hice, tuve, estuve, pude y dije, sin confundirlas con el presente.', 10048, [142]],
  [350, 'A2', 'tiempos', 'indefinido-e-imperfecto', 'Indefinido e imperfecto: evento y contexto', 'Contar un incidente que viste: primero la escena con era, había y estaba, después los hechos con hubo, salió y llegó.', 10050, [143,348]],
  [351, 'A2', 'tiempos', 'perfecto-e-indefinido-variacion', 'Perfecto e indefinido: variación regional', 'Contar qué hiciste hoy con «he hablado» o «hablé», reconocer las dos variedades y usar siempre el indefinido con ayer.', 10051, [350,141,142]],
] as const;
/** When each addition reached the library (the «Nuevo» badge). */
const addedAt: Record<number, string> = { 239: '2026-10-14', 303: '2026-10-20', 305: '2026-10-20', 307: '2026-10-20', 311: '2026-10-20', 312: '2026-10-20', 314: '2026-10-20', 318: '2026-10-20', 319: '2026-10-20', 320: '2026-10-20', 323: '2026-10-20', 324: '2026-10-20', 327: '2026-10-20', 328: '2026-10-20', 330: '2026-10-20', 331: '2026-10-20', 332: '2026-10-20', 333: '2026-10-20', 335: '2026-10-20', 336: '2026-10-20', 337: '2026-10-20', 338: '2026-10-20', 339: '2026-10-20', 340: '2026-10-20', 341: '2026-10-20', 343: '2026-10-20', 344: '2026-10-20', 346: '2026-10-20', 348: '2026-10-20', 350: '2026-10-20', 351: '2026-10-20' };

export const newGrammarEntries: LessonSource[] = additions.map(([id,level,grammarTopic,slug,title,subtitle,curriculumOrder,requires]) => {
  grammarMetadata[id] = { title, grammarTopic };
  return { id, level, category:'Gramática', title, subtitle, duration:'≈ 60 min',
    curriculumOrder, requires:[...requires], path:`/gramatica/${slug}`, special:true,
    news:{addedAt:addedAt[id] ?? '2026-10-07',featured:true}, tag:grammarTopics.find(t=>t.id===grammarTopic)!.label,
    image:`/grammar-classroom/previews/${slug}.webp`, goals:[subtitle],warmup:'',explanation:'',practice:[],speaking:[],homework:'' };
});

export function applyGrammarMetadata<T extends LessonSource>(lesson:T):T & {grammarTopic?:string} {
  if (lesson.category !== 'Gramática') return lesson;
  const metadata=grammarMetadata[lesson.id];
  if (!metadata) throw new Error(`Falta la categoría gramatical de ${lesson.id}`);
  const use=metadata.title.split(': ').slice(1).join(': ');
  const subtitle=lesson.id>=230?lesson.subtitle:`${use.charAt(0).toUpperCase()+use.slice(1)}. Lectura, escucha, conversación y escritura con apoyo docente.`;
  return {...lesson,...metadata,subtitle,duration:'≈ 60 min',searchAliases:[...(lesson.searchAliases||[]),lesson.title],
    tag:grammarTopics.find(t=>t.id===metadata.grammarTopic)!.label};
}
