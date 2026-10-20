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
] as const;
/** When each addition reached the library (the «Nuevo» badge). */
const addedAt: Record<number, string> = { 239: '2026-10-14', 303: '2026-10-20', 305: '2026-10-20', 307: '2026-10-20', 311: '2026-10-20', 312: '2026-10-20' };

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
