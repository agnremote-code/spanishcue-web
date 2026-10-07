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
  [227, 'A2', 'adverbios', 'desde-hace-duracion', 'Desde y hace: contar cuánto tiempo llevas así', 'Distingue el punto de inicio y la duración al hablar de tu vida actual.', 4100, [47,140]],
  [228, 'B1', 'preposiciones', 'por-para-razones-objetivos', 'Por y para: explicar razones, objetivos y destinatarios', 'Organiza una entrega y explica motivos, plazos, recorridos e intercambios.', 4200, [47,212]],
  [229, 'B2', 'voz', 'pasiva-impersonal-informar', 'Pasiva e impersonal: informar sin nombrar a quien actúa', 'Elige entre se, una pasiva y una frase activa para escribir avisos claros.', 4300, [46,142]],
  [230, 'B2', 'discurso', 'estilo-indirecto-transmitir', 'Estilo indirecto: transmitir lo que alguien dijo o pidió', 'Comunica cambios de una cita conservando la intención y la referencia temporal.', 4400, [147,150]],
  [231, 'B2', 'pronombres', 'relativos-con-preposicion', 'Relativos con preposición: precisar de quién y de qué hablas', 'Relaciona personas, lugares y propuestas sin perder la preposición necesaria.', 4500, [218,117]],
  [232, 'B2', 'oraciones', 'consecuencias-tan-tanto', 'Tan, tanto y así que: explicar consecuencias', 'Relaciona intensidad, hechos y resultados para justificar una decisión.', 4600, [45,217]],
] as const;

export const newGrammarEntries: LessonSource[] = additions.map(([id,level,grammarTopic,slug,title,subtitle,curriculumOrder,requires]) => {
  grammarMetadata[id] = { title, grammarTopic };
  return { id, level, category:'Gramática', title, subtitle, duration:'≈ 60 min',
    curriculumOrder, requires:[...requires], path:`/gramatica/${slug}`, special:true,
    news:{addedAt:'2026-10-07',featured:true}, tag:grammarTopics.find(t=>t.id===grammarTopic)!.label,
    image:'/brand/spanishcue-global-stage.webp', goals:[subtitle],warmup:'',explanation:'',practice:[],speaking:[],homework:'' };
});

export function applyGrammarMetadata<T extends LessonSource>(lesson:T):T & {grammarTopic?:string} {
  if (lesson.category !== 'Gramática') return lesson;
  const metadata=grammarMetadata[lesson.id];
  if (!metadata) throw new Error(`Falta la categoría gramatical de ${lesson.id}`);
  return {...lesson,...metadata,duration:'≈ 60 min',searchAliases:[...(lesson.searchAliases||[]),lesson.title],
    tag:grammarTopics.find(t=>t.id===metadata.grammarTopic)!.label};
}
