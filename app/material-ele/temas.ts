/**
 * Topic index of the ELE cluster (/material-ele/<grupo>/<tema>): one page per grammar point,
 * vocabulary field, communicative function and cultural theme that Spanish teachers search for,
 * organised the way ELE teachers already think (verbos → indicativo → presente, vocabulario → comida…).
 *
 * Nothing here is hand-copied lesson content: every page is built from the public catalog metadata
 * (titles, subtitles, goals, warm-ups and speaking prompts) of the real classes that teach that point.
 * A topic with no matching class produces no page, so the index can never hold an empty doorway.
 */
import { lessons, type Lesson } from "../lesson-catalog";
import { isFreeLesson } from "../access-policy";
import { grammarTopics } from "../grammar-classroom/catalog";
import { courseLevels } from "../grammar-classroom/curriculum";
import { MATERIAL_ELE_PATH, elePageBySlug } from "./data";

export type TemaGroupId = "gramatica" | "vocabulario" | "funciones" | "cultura";
export type TemaGroup = { id: TemaGroupId; label: string; path: string; title: string; description: string; h1: string; intro: string; method: string[] };

export const temaGroups: TemaGroup[] = [
  {
    id: "gramatica", label: "Gramática", path: `${MATERIAL_ELE_PATH}/gramatica`,
    title: "Gramática ELE: actividades y clases por tema, de A1 a C2 | SpanishCue",
    description: "Índice de gramática ELE por tema: verbos, tiempos de indicativo y subjuntivo, pronombres, preposiciones y oraciones, con las clases que enseñan cada punto.",
    h1: "Gramática ELE por tema: clases listas para enseñar cada punto",
    intro: "Elige el punto gramatical que vas a enseñar y abre una clase completa: teoría visual primero, práctica guiada después y conversación al final. Organizado como lo buscas: por verbo, por tiempo, por tipo de oración.",
    method: ["Entender: la regla aparece en pantalla con ejemplos marcados, sin páginas de teoría que leer antes.", "Practicar: ejercicios con corrección inmediata y explicación de cada opción.", "Conversar: una tarea de producción oral en la que el alumno necesita el punto gramatical para decir lo que quiere decir."],
  },
  {
    id: "vocabulario", label: "Vocabulario", path: `${MATERIAL_ELE_PATH}/vocabulario`,
    title: "Vocabulario ELE por temas: clases y actividades de léxico | SpanishCue",
    description: "Vocabulario ELE por campos léxicos: comida, ciudad, familia, trabajo, salud, viajes y sentimientos, con clases interactivas para practicarlo hablando.",
    h1: "Vocabulario ELE por temas: léxico que se usa hablando",
    intro: "Cada campo léxico va dentro de una situación real: un hospital, un aeropuerto, una feria, una noche en la ciudad. El alumno aprende las palabras porque las necesita para resolver la escena, no de una lista.",
    method: ["Entrar en la escena: el léxico aparece en el lugar donde se usa, con audio y contexto.", "Resolver una tarea: pedir, reclamar, comparar o describir con esas palabras.", "Contar lo que pasó: producción oral o escrita que recicla el vocabulario de la clase."],
  },
  {
    id: "funciones", label: "Funciones comunicativas", path: `${MATERIAL_ELE_PATH}/funciones`,
    title: "Funciones comunicativas ELE: clases para cada acto de habla | SpanishCue",
    description: "Funciones comunicativas del español: saludar, describir, narrar, aconsejar, opinar, expresar hipótesis y quejas, con clases interactivas para practicar cada una.",
    h1: "Funciones comunicativas: lo que el alumno necesita hacer con el español",
    intro: "Describir, narrar, aconsejar, quejarse, opinar, negociar: cada función va unida a la gramática que la hace posible y a una situación en la que hay que usarla de verdad.",
    method: ["Modelo: el alumno escucha o lee cómo se hace antes de hacerlo.", "Práctica guiada: fórmulas y estructuras con corrección en pantalla.", "Tarea real: una escena o un juego de conversación donde la función es la única salida."],
  },
  {
    id: "cultura", label: "Cultura", path: `${MATERIAL_ELE_PATH}/cultura`,
    title: "Cultura y países en clase de ELE: mundos 3D para conversar | SpanishCue",
    description: "Cultura y países para la clase de español: España, Argentina, México, Estados Unidos y los países de los alumnos en mundos 3D, más fiestas, historia y variedades.",
    h1: "Cultura y países en clase de ELE: lugares reales para recorrer hablando",
    intro: "Madrid, Buenos Aires, México, Estados Unidos y los países de donde vienen los alumnos, en 3D, más fiestas, historia y variedades del español. La cultura entra como lugar donde conversar, no como texto para leer.",
    method: ["Recorrer: el alumno se mueve por un país o una ciudad y encuentra a personas con algo que contar.", "Comprender: escuchas por zona con acentos y registros reales.", "Conversar: preguntas sobre la vida real, comparadas con la del alumno."],
  },
];
export const temaGroupById = new Map(temaGroups.map((group) => [group.id, group]));

type Source = { group: TemaGroupId; parent: string; slug: string; name: string; match: RegExp; intro: string; guide?: string; ids?: number[] };

const strip = (text: string) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
// A grammar unit's tag is its whole topic label («Oraciones y conectores»), which would match every unit of the topic; the title and slug name the point.
const topicLabels = new Set(grammarTopics.map((topic) => topic.label));
const haystackByLesson = new Map<number, string>(lessons.map((lesson) => [lesson.id, strip([lesson.title, lesson.subtitle, topicLabels.has(lesson.tag) ? "" : lesson.tag, lesson.path ?? "", lesson.collection ?? "", ...(lesson.searchAliases ?? []), ...lesson.goals, lesson.explanation].join(" \n "))]));

/* Patterns are tested against accent-stripped lowercase text, so they are written without accents. */
const sources: Source[] = [
  // Gramática · verbos: indicativo
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "presente-de-indicativo", name: "Presente de indicativo", match: /\bpresente\b(?! de subjuntivo)|rutina|\bvos\b/, intro: "El presente es la primera gramática que el alumno usa para hablar de sí mismo: regulares, irregulares con cambio vocálico y los de primera persona especial, con el voseo rioplatense como opción desde el principio." },
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "preterito-indefinido", name: "Pretérito indefinido", match: /indefinido/, intro: "El indefinido cuenta lo que pasó y terminó. Primero regulares y marcadores de tiempo, después los irregulares frecuentes, y al final la narración completa frente al imperfecto.", guide: "indefinido-e-imperfecto" },
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "preterito-imperfecto", name: "Pretérito imperfecto", match: /imperfecto(?! de subjuntivo)|\bsolia\b|costumbres antiguas/, intro: "Describir cómo era, qué hacía la gente y qué pasaba alrededor: el imperfecto pinta el fondo de la historia y las costumbres de antes.", guide: "indefinido-e-imperfecto" },
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "contraste-de-pasados", name: "Contraste de pasados", match: /indefinido e imperfecto|imperfecto e indefinido|perfecto e indefinido|contar que paso|variacion regional del pasado|narrar|anecdota/, intro: "Cuándo indefinido, cuándo imperfecto y cuándo perfecto: el contraste de pasados se aprende narrando, no completando huecos. Estas clases ponen al alumno a contar historias con un motivo para elegir cada tiempo.", guide: "indefinido-e-imperfecto" },
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "preterito-perfecto", name: "Pretérito perfecto", match: /preterito perfecto|\bperfecto\b|participios frecuentes|\bhoy\b.*\bhecho\b/, intro: "Experiencias de la vida y acciones de hoy: el pretérito perfecto con sus participios regulares e irregulares, y su contraste con el indefinido según la variedad del español.", guide: "preterito-perfecto" },
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "preterito-pluscuamperfecto", name: "Pretérito pluscuamperfecto", match: /pluscuamperfecto(?! de subjuntivo)|correlacion temporal/, intro: "Lo que ya había pasado antes de otro momento del pasado: el pluscuamperfecto ordena una historia con dos planos y es la base de la correlación temporal en estilo indirecto." },
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "futuro-simple", name: "Futuro simple", match: /\bfuturo\b(?! incierto)|ir a infinitivo/, intro: "Planes, predicciones y promesas: el futuro simple regular e irregular, frente a «ir a + infinitivo», y su valor de probabilidad para suponer qué pasa ahora.", guide: "futuro" },
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "condicional-simple", name: "Condicional simple", match: /\bcondicional\b(?! compuesto)|hipotesis|hipotetic/, intro: "Cortesía, consejos y mundos imaginarios: el condicional simple aparece en «me gustaría», en «yo que tú» y en las hipótesis con «si» que el alumno necesita para hablar de lo que no es.", guide: "condicional" },
  { group: "gramatica", parent: "Verbos · Indicativo", slug: "condicional-compuesto", name: "Condicional compuesto", match: /condicional compuesto|condicionales mixtas|probabilidad retrospectiva/, intro: "Lo que habría pasado: el condicional compuesto para lamentar, reprochar y suponer sobre el pasado, junto a las condicionales mixtas con consecuencia presente." },
  // Verbos: subjuntivo
  { group: "gramatica", parent: "Verbos · Subjuntivo", slug: "presente-de-subjuntivo", name: "Presente de subjuntivo", match: /subjuntivo/, intro: "El subjuntivo se enseña por usos, uno por clase: deseos, recomendaciones, valoraciones, emociones, finalidad, duda y tiempo futuro. Cada clase trae una situación en la que el alumno lo necesita para pedir, reaccionar o planear.", guide: "subjuntivo" },
  { group: "gramatica", parent: "Verbos · Subjuntivo", slug: "imperfecto-de-subjuntivo", name: "Imperfecto de subjuntivo", match: /imperfecto de subjuntivo|como si|si fuera|fuera distinto|hipotesis remotas/, intro: "«Si tuviera», «como si fuera», «quería que vinieras»: el imperfecto de subjuntivo para hipótesis remotas, comparaciones irreales y peticiones en pasado.", guide: "subjuntivo" },
  { group: "gramatica", parent: "Verbos · Subjuntivo", slug: "pluscuamperfecto-de-subjuntivo", name: "Pluscuamperfecto de subjuntivo", match: /pluscuamperfecto de subjuntivo|pluscuamperfecto subjuntivo|contrafactual|hubiera/, intro: "«Si hubiera sabido…»: el pluscuamperfecto de subjuntivo para lo que no pasó, con el condicional compuesto y las condicionales mixtas que cuentan sus consecuencias." },
  { group: "gramatica", parent: "Verbos · Subjuntivo", slug: "indicativo-o-subjuntivo", name: "Indicativo o subjuntivo", match: /indicativo o subjuntivo|indicativo y subjuntivo|alternancia|opinion afirmativa|aunque|seleccion fina/, intro: "«Creo que es» frente a «no creo que sea», «aunque llueve» frente a «aunque llueva»: la elección entre indicativo y subjuntivo depende de lo que el hablante afirma, niega o presupone." },
  // Verbos: otros
  { group: "gramatica", parent: "Verbos", slug: "imperativo", name: "Imperativo", match: /imperativo|instrucciones|\bordenes\b/, intro: "Dar instrucciones, pedir y mandar con tú, vos, usted y ustedes: imperativo afirmativo, negativo con subjuntivo, y pronombres pegados al verbo en una sesión de entrenamiento o una receta.", guide: "imperativo" },
  { group: "gramatica", parent: "Verbos", slug: "ser-y-estar", name: "Ser y estar", match: /\bser\b|\bestar\b|\bestoy\b|\bsoy\b/, intro: "Identidad frente a estado, origen frente a lugar, «es listo» frente a «está listo»: ser y estar desde la primera clase hasta los adjetivos que cambian de significado.", guide: "ser-y-estar" },
  { group: "gramatica", parent: "Verbos", slug: "haber-estar-y-tener", name: "Haber, estar y tener", match: /\bhay\b|\btener\b|\btengo\b|tener edad/, intro: "«Hay» para lo que existe, «está» para dónde está y «tener» para edad, sensaciones y posesión: tres verbos que el alumno confunde con «to be» hasta que los usa en una descripción real." },
  { group: "gramatica", parent: "Verbos", slug: "gustar", name: "Gustar y verbos como gustar", match: /\bgustar\b|\bencantar\b|\bgustos\b|\bdoler\b|\binteresar\b/, intro: "«Me gusta», «me gustan», «a mí también»: gustar, encantar, interesar y doler con su concordancia al revés y los pronombres que los acompañan.", guide: "gustar" },
  { group: "gramatica", parent: "Verbos", slug: "verbos-reflexivos", name: "Verbos reflexivos", match: /reflexiv|\brutinas\b|se medio|se dativo/, intro: "Levantarse, ducharse, enojarse, quedarse: los verbos reflexivos para rutinas, cambios de estado y los valores del «se» que no son reflexivos.", guide: "verbos-reflexivos" },
  { group: "gramatica", parent: "Verbos", slug: "perifrasis-verbales", name: "Perífrasis verbales", match: /perifrasis|estar gerundio|volver a|dejar de|empezar a|ponerse a|acabar de|seguir \+/, intro: "Estar + gerundio, ir a, volver a, dejar de, acabar de, seguir + gerundio: las perífrasis que organizan el tiempo y el aspecto de lo que contamos.", guide: "perifrasis-verbales" },
  { group: "gramatica", parent: "Verbos", slug: "verbos-de-cambio", name: "Verbos de cambio", match: /verbos de cambio|hacerse|volverse|ponerse|quedarse|convertirse/, intro: "Ponerse nervioso, quedarse sin trabajo, hacerse mayor, volverse loco: los verbos de cambio para contar cómo cambian las personas y las situaciones.", guide: "verbos-de-cambio" },
  { group: "gramatica", parent: "Verbos", slug: "gerundio-y-participio", name: "Gerundio y participio", match: /gerundio|participio/, intro: "El gerundio para lo que está pasando y cómo se hace algo; el participio como adjetivo y como resultado: «la puerta está cerrada», «los documentos firmados»." },
  { group: "gramatica", parent: "Verbos", slug: "obligacion-y-necesidad", name: "Obligación y necesidad", match: /obligacion|hay que|tener que|\bdeber\b|necesidad/, intro: "Hay que, tener que, deber, necesitar: cómo se expresa la obligación en español, de la norma general a la obligación personal, y la inferencia con «debe de»." },
  { group: "gramatica", parent: "Verbos", slug: "voz-pasiva-e-impersonal", name: "Voz pasiva e impersonal", match: /pasiva|impersonal|se accidental|se pasivo|se impersonal/, intro: "«Se vende», «se alquilan», «fue construido», «se me cayó»: pasiva con ser, pasiva refleja, impersonal con se y el «se» accidental para repartir responsabilidades." },
  { group: "gramatica", parent: "Verbos", slug: "estilo-indirecto", name: "Estilo indirecto", match: /estilo indirecto|discurso referido|dijo que|transmitir|citas indirectas|cambio de deicticos/, intro: "«Dijo que vendría», «me pidió que lo llamara»: transmitir lo que otros dijeron, con los cambios de tiempo, persona y deícticos que el alumno tiene que controlar.", guide: "estilo-indirecto" },
  // Sustantivos, adjetivos, determinantes
  { group: "gramatica", parent: "Sustantivos y adjetivos", slug: "genero-y-numero", name: "Género y número", match: /\bgenero\b|\bplural|\bsustantivos?\b|concordancia/, intro: "Masculino, femenino, singular, plural: las terminaciones que ayudan, las excepciones que hay que memorizar y la concordancia con artículo y adjetivo." },
  { group: "gramatica", parent: "Sustantivos y adjetivos", slug: "adjetivos", name: "Adjetivos", match: /adjetiv|describir lo que ves|descripcion/, intro: "Concordancia, posición antes o después del sustantivo, adjetivos que cambian de significado y participios usados como adjetivos para describir con precisión." },
  { group: "gramatica", parent: "Sustantivos y adjetivos", slug: "articulos", name: "Artículos", match: /articulo|\bel\b, la|contracciones al y del/, intro: "El, la, un, una, lo: presentar algo nuevo y volver a mencionarlo, las contracciones al y del, y los artículos con partes del cuerpo y ropa." },
  { group: "gramatica", parent: "Sustantivos y adjetivos", slug: "demostrativos", name: "Demostrativos", match: /demostrativ|este, ese y aquel/, intro: "Este, ese, aquel y sus formas: elegir según la distancia del hablante y señalar en una tienda, una mesa o una foto." },
  { group: "gramatica", parent: "Sustantivos y adjetivos", slug: "posesivos", name: "Posesivos", match: /posesiv|de quien es/, intro: "Mi, tu, su, nuestro, el mío, el tuyo: explicar de quién es cada cosa y evitar la ambigüedad de «su»." },
  { group: "gramatica", parent: "Sustantivos y adjetivos", slug: "cuantificadores", name: "Cuantificadores", match: /cuantificador|alguno|ninguno|\bmucho\b|\bpoco\b|cantidad|\balgo\b.*\bnada\b|demasiado/, intro: "Mucho, poco, bastante, demasiado, algo, nada, alguien, nadie: cuantificar e indefinir para hacer una compra, opinar o describir un lugar." },
  { group: "gramatica", parent: "Sustantivos y adjetivos", slug: "comparativos-y-superlativos", name: "Comparativos y superlativos", match: /comparativ|superlativ|comparar|comparacion|\bmas que\b|cuanto mas/, intro: "Más que, menos que, tan como, el más, -ísimo y las comparativas proporcionales «cuanto más, más»: comparar para elegir y para discutir." },
  { group: "gramatica", parent: "Sustantivos y adjetivos", slug: "diminutivos-y-aumentativos", name: "Diminutivos y aumentativos", match: /diminutiv|aumentativ|valor afectivo/, intro: "Un cafecito, un momentito, un exitazo: diminutivos y aumentativos con valor afectivo, de cortesía y de exageración en el español cotidiano." },
  // Pronombres
  { group: "gramatica", parent: "Pronombres", slug: "pronombres-personales", name: "Pronombres personales", match: /pronombres personales|\byo\b.*\btu\b|voseo|tuteo|ustedeo|tras preposicion/, intro: "Yo, tú, vos, usted, él: cuándo decirlos y cuándo callarlos, el voseo y el ustedeo según el país, y los pronombres después de preposición: conmigo, para ti." },
  { group: "gramatica", parent: "Pronombres", slug: "pronombres-de-objeto", name: "Pronombres de objeto directo e indirecto", match: /objeto directo|objeto indirecto|\blo\b, \bla\b|se lo|me lo|cliticos|\ble\b, \bles\b|leismo|laismo/, intro: "Lo, la, le, se lo: evitar repeticiones, ordenar dos pronombres, pegarlos al infinitivo o al imperativo y entender el leísmo de España.", guide: "pronombres-de-objeto" },
  { group: "gramatica", parent: "Pronombres", slug: "pronombres-relativos", name: "Pronombres relativos", match: /\brelativ(o|a|os|as)\b|\bcuyo\b|\bel cual\b|lo que y lo de/, intro: "Que, quien, el que, el cual, cuyo, donde: identificar personas, lugares y cosas sin repetirlas, de las relativas básicas a las especificativas y explicativas." },
  { group: "gramatica", parent: "Pronombres", slug: "interrogativos", name: "Interrogativos", match: /interrogativ|preguntar|preguntas indirectas|hacer preguntas/, intro: "Qué, quién, cuál, dónde, cuándo, cómo, cuánto: preguntar con tilde, preguntar sin imponer y convertir la pregunta en indirecta: «no sé dónde está»." },
  // Adverbios y preposiciones
  { group: "gramatica", parent: "Adverbios y preposiciones", slug: "adverbios", name: "Adverbios", match: /adverbio|donde, cuando y como|\bmarcadores temporales\b/, intro: "Adverbios de lugar, tiempo, modo y cantidad: explicar dónde, cuándo y cómo, con los marcadores «ya», «todavía», «antes» y «después»." },
  { group: "gramatica", parent: "Adverbios y preposiciones", slug: "adverbios-de-frecuencia", name: "Adverbios de frecuencia", match: /frecuencia|habitos|siempre, nunca|\bsoler\b/, intro: "Siempre, a veces, casi nunca, una vez por semana: hablar de hábitos y rutinas, con «soler» y «solía» para las costumbres de ahora y de antes." },
  { group: "gramatica", parent: "Adverbios y preposiciones", slug: "expresiones-de-tiempo", name: "Expresiones de tiempo", match: /\bla hora\b|la fecha|desde hace|duracion|\bdesde\b.*\bhace\b|dias de la semana/, intro: "La hora, el día, la fecha, «desde hace tres años», «llevo dos meses»: situar en el tiempo y decir cuánto dura algo." },
  { group: "gramatica", parent: "Adverbios y preposiciones", slug: "preposiciones", name: "Preposiciones", match: /preposicion|\ba\b, \bde\b, \ben\b/, intro: "A, de, en, con, desde, hasta: las preposiciones básicas, el régimen de los verbos que las exigen y las que cambian de sentido según el verbo." },
  { group: "gramatica", parent: "Adverbios y preposiciones", slug: "por-y-para", name: "Por y para", match: /\bpor\b.*\bpara\b|por y para/, intro: "Motivo frente a destino, causa frente a finalidad, «por la mañana» frente a «para mañana»: por y para con criterios claros y práctica en situaciones reales.", guide: "por-y-para" },
  { group: "gramatica", parent: "Adverbios y preposiciones", slug: "preposiciones-de-lugar", name: "Preposiciones de lugar", match: /ubicacion|de lugar|\bmovimiento\b|\bdonde esta\b|encima|debajo|al lado/, intro: "Encima, debajo, al lado, enfrente, entre, a la derecha: situar personas y objetos y moverse por una ciudad, un hotel o un hospital en 3D." },
  // Oraciones
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-simples", name: "Oraciones simples", match: /oracion(es)? simple|orden de la oracion|afirmar, negar|oraciones basicas|mesa de montaje|microproduccion/, intro: "Sujeto, verbo e información: construir, negar y preguntar en la primera etapa, y mover el orden para destacar lo importante." },
  { group: "gramatica", parent: "Oraciones", slug: "negacion", name: "Negación", match: /negativ|doble negacion|nadie, nada, nunca|\bni\b.*\bni\b/, intro: "No, nadie, nada, nunca, ni… ni, tampoco: la doble negación del español y los matices de la negación pragmática y la ironía." },
  { group: "gramatica", parent: "Oraciones", slug: "conectores", name: "Conectores y marcadores del discurso", match: /conectores?\b|marcadores? (del )?discurs|conecta la frase|pero hay un matiz/, intro: "Y, pero, porque, además, sin embargo, en cambio, es decir: de la frase aislada al texto conectado, con los marcadores para argumentar, reformular y conceder.", guide: "conectores" },
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-condicionales", name: "Oraciones condicionales", match: /condicional(es)?\b.*\bsi\b|\bsi pasa\b|condiciones reales|condiciones con otros nexos|\bsiempre que\b|a no ser que/, intro: "Si + presente, si + imperfecto de subjuntivo, si + pluscuamperfecto, y los nexos «siempre que», «a no ser que», «con tal de que»: condicionar, negociar y lamentar.", guide: "condicional" },
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-temporales", name: "Oraciones temporales", match: /temporal|antes de, despues de|cuando, en cuanto|hasta que|antes, despues, cuando/, intro: "Cuando, en cuanto, hasta que, antes de que, mientras: ordenar acciones en el tiempo con indicativo para lo habitual y subjuntivo para lo que todavía no ha pasado." },
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-causales", name: "Oraciones causales", match: /causal|porque|ya que, puesto que|\bcomo\b \+ causa|razones/, intro: "Porque, como, ya que, puesto que, no porque: explicar causas y razones, y la diferencia entre la causa real y la causa negada con subjuntivo." },
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-finales", name: "Oraciones finales", match: /\bfinal(es)?\b.*para que|para que|a fin de|con el fin|objetivos/, intro: "Para + infinitivo cuando el sujeto es el mismo, para que + subjuntivo cuando cambia: expresar finalidad y objetivos al planear, pedir y justificar." },
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-consecutivas", name: "Oraciones consecutivas", match: /consecutiv|asi que|por eso|tan.*tanto|consecuencias/, intro: "Así que, por eso, de modo que, tan… que, tanto… que: expresar consecuencias e intensificarlas al contar y al argumentar." },
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-concesivas", name: "Oraciones concesivas", match: /concesiv|aunque|a pesar de|por mucho que|objecion/, intro: "Aunque, a pesar de que, por mucho que: conceder un argumento sin perder el propio, con indicativo cuando se afirma y subjuntivo cuando se discute." },
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-de-relativo", name: "Oraciones de relativo", match: /relativa|de relativo|especificativa|explicativa|antecedente/, intro: "«La persona que tengo en mente», «un piso donde quepa todo»: relativas especificativas y explicativas, con indicativo para lo conocido y subjuntivo para lo que se busca." },
  { group: "gramatica", parent: "Oraciones", slug: "oraciones-sustantivas", name: "Oraciones sustantivas", match: /sustantiva|el hecho de|infinitivo o que|verbos de influencia|ideas dentro de ideas|queismo|dequeismo/, intro: "«Quiero que vengas», «el hecho de que», «me parece que»: subordinadas con que, la elección entre infinitivo y subjuntivo, y el queísmo y dequeísmo." },
  { group: "gramatica", parent: "Oraciones", slug: "registro-y-cortesia", name: "Registro y cortesía", match: /cortesia|\bregistro\b|\bpodrias\b|te importaria|\busted\b/, intro: "Tú, vos o usted, «¿podrías?» o «¿te importaría?», estilo formal e informal: elegir el registro y las fórmulas de cortesía según con quién habla el alumno." },
  // Ortografía y fonética
  { group: "gramatica", parent: "Ortografía y pronunciación", slug: "acentuacion", name: "Acentuación y tildes", match: /acentuacion|\btilde\b|ortografia/, intro: "Agudas, llanas, esdrújulas, la tilde diacrítica y los interrogativos con tilde: reglas claras para escribir sin errores de acento.", guide: "acentuacion" },
  { group: "gramatica", parent: "Ortografía y pronunciación", slug: "pronunciacion-y-entonacion", name: "Pronunciación y entonación", match: /entonacion|pronunciacion|fonetic|\bsonidos\b|\bvoz\b.*\bcae\b|hablar sin cortar|abecedario/, intro: "El abecedario, los sonidos que no existen en la lengua del alumno, la entonación que cambia la intención y el ritmo de la frase conectada." },
  { group: "gramatica", parent: "Ortografía y pronunciación", slug: "puntuacion", name: "Puntuación", match: /puntuacion|punto y coma|incisos/, intro: "Comas en incisos, punto y coma, dos puntos y la puntuación de las relativas explicativas: escribir textos que se entienden a la primera." },
  // Vocabulario
  { group: "vocabulario", parent: "Vida cotidiana", slug: "informacion-personal", name: "Información personal", match: /presentarte|presentarse|informacion personal|\bnombre\b.*\bnacionalidad|primera charla|conocer gente|\bhola\b/, intro: "Nombre, origen, edad, profesión, familia: lo primero que el alumno necesita para presentarse y conocer gente, desde la primera clase." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "familia", name: "La familia", match: /familia|\babuel|\bpadres\b|\bhij[oa]s?\b|parientes|herederos/, intro: "Abuelos, padres, hijos, sobrinos, cuñados: describir a la familia, contar sus historias y discutir con ella en escenas que lo exigen." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "la-casa", name: "La casa", match: /\bcasa\b|\bpiso\b|departamento|apartamento|edificio|\bvecin|mudarse|alquil/, intro: "Habitaciones, muebles, tareas del hogar, vecinos y expensas: el vocabulario de la casa y del edificio en el que se vive." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "la-ciudad", name: "La ciudad", match: /ciudad|\bbarrio\b|\bcalle|\bplaza\b|\bmetro\b|indicaciones|\bcomo llegar\b/, intro: "Barrios, calles, plazas, transporte e indicaciones: moverse por una ciudad real y hablar de lo que pasa en ella." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "comida-y-restaurante", name: "Comida y restaurante", match: /comida|restaurante|\bbar\b|\bcena\b|\bcomer\b|gastronom|\bmenu\b|pedir con cortesia|\bcaf[eé]\b/, intro: "Pedir en un bar, reclamar un plato, hablar de comida y de gustos: el léxico de la comida en situaciones donde hay que usarlo." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "compras-y-dinero", name: "Compras y dinero", match: /compra|\btienda\b|\bprecio|dinero|\bpagar\b|\bmoneda\b|economia|\boferta/, intro: "Precios, cantidades, ofertas, pagar y regatear: hacer una compra y hablar de dinero, de la feria del pueblo al casino." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "ropa-y-descripcion-fisica", name: "Ropa y descripción física", match: /\bropa\b|descripcion fisica|\balto\b.*\bbajo\b|\bpelo\b|\bviste|cuerpo y ropa/, intro: "Prendas, colores, tallas y rasgos físicos: describir a una persona y lo que lleva puesto para identificarla en una escena." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "el-cuerpo-y-la-salud", name: "El cuerpo y la salud", match: /\bcuerpo\b|\bsalud\b|hospital|\bmedic|\bdoler\b|\bduele|enferm|\bconsulta\b|sintoma/, intro: "Partes del cuerpo, síntomas, la consulta y el hospital: pedir ayuda, explicar qué duele y entender al médico." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "trabajo-y-profesiones", name: "Trabajo y profesiones", match: /trabajo|profesion|\bempleo\b|entrevista|\boficina\b|\bjefe\b|negoci|\binversor/, intro: "Profesiones, la entrevista de trabajo, la oficina y la negociación: el vocabulario laboral para hablar de lo que se hace y de lo que se quiere hacer." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "viajes-y-transporte", name: "Viajes y transporte", match: /viaj|aeropuerto|\bvuelo\b|\btren\b|\bhotel\b|transporte|\bterminal\b|embarque|\bpasajer/, intro: "Aeropuertos, trenes, hoteles y lo que sale mal en un viaje: el léxico para reservar, reclamar, cambiar un vuelo y llegar." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "ocio-y-tiempo-libre", name: "Ocio y tiempo libre", match: /\bocio\b|tiempo libre|\bcine\b|\bpelicula|\bfiesta\b|\bsalir\b|\bplanes\b|\bdeporte|\bjuego\b|\bconcierto|\bmuseo\b/, intro: "Planes, salidas, cine, deporte y fiestas: proponer, aceptar, rechazar y cambiar un plan, y contar cómo fue la noche." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "tecnologia-y-medios", name: "Tecnología y medios", match: /tecnolog|\bradio\b|\btelevision\b|\btv\b|\bredes\b|\bchat|\bmensaje|\bllamada|inteligencia artificial|\bia\b|periodis/, intro: "Mensajes, llamadas, radio, televisión, redes e inteligencia artificial: hablar de los medios y de la tecnología que atraviesa la vida diaria." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "tiempo-atmosferico-y-naturaleza", name: "Tiempo atmosférico y naturaleza", match: /\btiempo atmosferico|\bclima\b|\bllueve|\blluvia|\btormenta|naturaleza|\bbosque\b|\bisla\b|\banimal|terremoto/, intro: "Clima, estaciones, paisajes, animales y catástrofes naturales: describir el mundo físico y hablar de lo que hace en él." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "emociones-y-sentimientos", name: "Emociones y sentimientos", match: /emocion|sentimiento|\bmiedo\b|\balegr|\btriste|enojad|nervios|\bamor\b|relaciones|\bcitas\b|\bpareja\b/, intro: "Alegría, miedo, vergüenza, enojo, amor: nombrar lo que se siente, reaccionar a lo que pasa y hablar de relaciones y citas." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "educacion-y-estudios", name: "Educación y estudios", match: /educacion|\bestudi|\bescuela\b|\bclase\b.*\balumn|universidad|\bexamen/, intro: "Escuela, universidad, exámenes y aprender idiomas: hablar de la formación propia y de cómo se estudia." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "numeros-horas-y-fechas", name: "Números, horas y fechas", match: /\bnumero|\bla hora\b|\bfecha|dias de la semana|\bmeses\b|\bcalendario|\bcuanto cuesta/, intro: "Contar, decir la hora, la fecha y el precio: los números en uso real, de la compra a la cita médica." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "expresiones-y-coloquialismos", name: "Expresiones y coloquialismos", match: /coloquial|expresion|\bchunks\b|\brefran|\bjerga\b|\bironia\b|humor/, intro: "Chunks, frases hechas, ironía y registro coloquial: lo que el alumno necesita para sonar natural y entender a hablantes reales." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "sociedad-y-politica", name: "Sociedad y política", match: /politic|sociedad|\bleyes\b|\bjusticia|\bgobiern|\belecci|\bderecho|\bcrisis\b|liderazgo/, intro: "Leyes, justicia, liderazgo, crisis y debates de actualidad: el léxico para opinar y argumentar sobre la sociedad en niveles altos." },
  { group: "vocabulario", parent: "Vida cotidiana", slug: "vida-y-muerte", name: "Vida, etapas y muerte", match: /\bmuerte\b|\bmorir|\bvida\b.*\betapas|despues de los 30|\balma\b|\bcielo\b|infierno|\btestamento/, intro: "Etapas de la vida, decisiones, recuerdos y la muerte: temas adultos para conversar en serio en B1 y más arriba." },
  // Funciones
  { group: "funciones", parent: "Funciones", slug: "saludar-y-presentarse", name: "Saludar y presentarse", match: /\bsaludar|presentarte|presentarse|\bhola\b|primera charla|conocer gente/, intro: "Hola, buenos días, ¿qué tal?, me llamo, soy de: las primeras fórmulas para empezar cualquier conversación, con tú, vos y usted." },
  { group: "funciones", parent: "Funciones", slug: "describir", name: "Describir personas, lugares y cosas", match: /describir|descripcion|describe/, intro: "Describir cómo es alguien, cómo es un lugar y cómo está algo ahora: ser, estar, adjetivos y comparaciones al servicio de una descripción con propósito." },
  { group: "funciones", parent: "Funciones", slug: "narrar", name: "Narrar y contar historias", match: /\bnarra|anecdota|\brelato\b|contar (que paso|una historia|la noche|historias|el viaje)|cuenten la noche/, intro: "Contar qué pasó, cómo era y qué había pasado antes: la narración une los pasados, los marcadores temporales y la perspectiva del que cuenta." },
  { group: "funciones", parent: "Funciones", slug: "dar-y-pedir-informacion", name: "Dar y pedir información", match: /pedir informacion|dar informacion|\binformacion\b|localizar datos|\bdatos basicos\b/, intro: "Preguntar, responder, confirmar y localizar datos: desde pedir una dirección hasta entender una entrevista llena de evasivas." },
  { group: "funciones", parent: "Funciones", slug: "expresar-gustos", name: "Expresar gustos y preferencias", match: /gustos|preferencia|\bgustar\b|\bencantar\b|\bprefer/, intro: "Me gusta, me encanta, prefiero, no soporto: hablar de lo que gusta y comparar preferencias para elegir entre dos opciones." },
  { group: "funciones", parent: "Funciones", slug: "expresar-opinion", name: "Expresar opinión", match: /opinion|\bopinar\b|\bpostura\b|\bdebate\b|defender (una|tu|cada|que)/, intro: "Creo que, me parece que, no creo que, en mi opinión: opinar con indicativo y subjuntivo, y defender una postura en un debate." },
  { group: "funciones", parent: "Funciones", slug: "dar-consejos-y-recomendaciones", name: "Dar consejos y recomendaciones", match: /consej|recomend|aconsejar|sugerir|yo que tu/, intro: "Deberías, yo que tú, te recomiendo que, lo mejor es que: aconsejar con condicional, imperativo y subjuntivo en situaciones donde alguien tiene un problema." },
  { group: "funciones", parent: "Funciones", slug: "dar-ordenes-e-instrucciones", name: "Dar órdenes e instrucciones", match: /\bordenes\b|instrucciones|imperativo|\bmandar\b|\bdirigir\b/, intro: "Instrucciones, órdenes, peticiones y prohibiciones con imperativo, infinitivo y «se» impersonal: desde una receta hasta dirigir una sesión completa." },
  { group: "funciones", parent: "Funciones", slug: "expresar-hipotesis-y-probabilidad", name: "Expresar hipótesis y probabilidad", match: /hipotesis|hipotetic|probabilidad|\bsuponer|\bquiza|\btal vez\b|\bsera\b que|posibilidad/, intro: "Será, estará, quizá, a lo mejor, si fuera: suponer, imaginar y calcular probabilidades con futuro, condicional y subjuntivo." },
  { group: "funciones", parent: "Funciones", slug: "expresar-sentimientos", name: "Expresar sentimientos y reacciones", match: /sentimiento|emocion|me alegra|\bconsolar|\bconsuel/, intro: "Me alegro de que, qué pena que, me da miedo: expresar y reaccionar a emociones, consolar y celebrar con la gramática que cada una exige." },
  { group: "funciones", parent: "Funciones", slug: "expresar-quejas-y-reclamar", name: "Expresar quejas y reclamar", match: /\bqueja|reclam|\bprotesta|\bconflicto|\bproblema\b/, intro: "Quejarse con cortesía, reclamar lo que corresponde y resolver un conflicto: en un hotel, un aeropuerto o una asamblea de vecinos." },
  { group: "funciones", parent: "Funciones", slug: "negociar-y-convencer", name: "Negociar y convencer", match: /negoci|convenc|persuad|\bacuerdo\b|\bofertas\b|\bmediar|\bmedias\b/, intro: "Proponer, ceder, poner condiciones y convencer: negociar con condicionales, conectores y fórmulas de cortesía en escenas con intereses opuestos." },
  { group: "funciones", parent: "Funciones", slug: "invitar-y-hacer-planes", name: "Invitar y hacer planes", match: /invit|\bplanes\b|\bquedar\b|\bcita\b|salva el plan|cambia el plan/, intro: "¿Quedamos?, ¿te apetece?, lo siento, no puedo: invitar, aceptar, rechazar y rehacer un plan cuando algo cambia." },
  { group: "funciones", parent: "Funciones", slug: "argumentar-y-debatir", name: "Argumentar y debatir", match: /argument|debat|refut|contraargument|\bobjecion|sintesis|ensayo/, intro: "Conceder, objetar, reformular y concluir: la argumentación oral y escrita de B2 a C2 con sus conectores y sus marcadores de cautela." },
  // Cultura y países: the country worlds that exist today (the student's countries and the Spanish-speaking ones).
  { group: "cultura", parent: "Países hispanohablantes", slug: "espana", name: "España", match: /\bespana\b|\bmadrid\b|espanol de espana/, intro: "Madrid entera en 3D y un viaje por España: lugares reales, costumbres y el español peninsular con su «vosotros» y su leísmo, para conversar y escuchar por nivel." },
  { group: "cultura", parent: "Países hispanohablantes", slug: "argentina", name: "Argentina", match: /argentin|buenos aires|rioplatense|\bvoseo\b|almagro|\bconsorcio\b/, intro: "Buenos Aires en la calle, un edificio de Almagro con asamblea de vecinos, Argento Roleplays y el voseo: la Argentina cotidiana para enseñar español rioplatense." },
  { group: "cultura", parent: "Países hispanohablantes", slug: "mexico", name: "México", match: /\bmexic/, intro: "México en 3D: un viaje por cuatro estados con lugares, escuchas y conversación por nivel, con el español mexicano como banda sonora." },
  { group: "cultura", parent: "Países hispanohablantes", slug: "estados-unidos-hispano", name: "Estados Unidos", match: /estados unidos|coast to coast|las vegas|\bcasino\b/, intro: "El español en Estados Unidos: un viaje por seis estados, veinte paradas de costa a costa y una noche en un casino de Las Vegas, para hablar desde el primer minuto." },
  { group: "cultura", parent: "Países de los alumnos", slug: "suiza", name: "Suiza", match: /\bsuiza\b|zurich|ginebra|\balpes\b|cantones/, intro: "Suiza en relieve: Zúrich, Ginebra, el Tesino y los Alpes en 3D para que el alumno hable de su país en español." },
  { group: "cultura", parent: "Países de los alumnos", slug: "suecia", name: "Suecia", match: /\bsuecia\b|estocolmo|\bsuec/, intro: "Suecia en 3D: ciudades, naturaleza y vida cotidiana para que el alumno sueco cuente su país en español." },
  { group: "cultura", parent: "Países de los alumnos", slug: "australia", name: "Australia", match: /australia|sidney|melbourne|outback|queensland/, intro: "Australia en movimiento: Sídney, Melbourne, Queensland y el Outback en 3D para conversar sobre el país del alumno." },
  { group: "cultura", parent: "Países de los alumnos", slug: "reino-unido-e-irlanda", name: "Reino Unido e Irlanda", match: /reino unido|irlanda|dublin|\blondres\b|escocia|\bgales\b|cuatro naciones/, intro: "Las cuatro naciones del Reino Unido e Irlanda en relieve: lugares reales para que el alumno describa, compare y cuente su país." },
  { group: "cultura", parent: "Países de los alumnos", slug: "israel", name: "Israel", match: /\bisrael\b|tel aviv|jerusalen/, intro: "Israel en capas: Tel Aviv, Jerusalén, el Norte y el Sur en 3D para hablar en español del lugar donde vive el alumno." },
  { group: "cultura", parent: "Países de los alumnos", slug: "indonesia", name: "Indonesia", match: /indonesia|\bbali\b|\bjava\b|sumatra|komodo/, intro: "Indonesia fantástica: Bali, Java, Sumatra y Komodo en 3D para conversar en español sobre el país del alumno." },
  { group: "cultura", parent: "Países de los alumnos", slug: "el-mundo", name: "El mundo y las nacionalidades", match: /mundo fantastico|6 continentes|nacionalidad|\bpaises\b|de donde eres/, intro: "Seis continentes, cuarenta mundos y cuatrocientas preguntas mínimas: países y nacionalidades desde A1 con un atlas para situarlos." },
  { group: "cultura", parent: "Temas culturales", slug: "fiestas-y-tradiciones", name: "Fiestas y tradiciones", match: /\bfiesta|tradicion|\bboda\b|\bcarnaval|\bnavidad|semana santa|feria de pueblo|\bferia\b/, intro: "Una feria de pueblo al atardecer, bodas y celebraciones del mundo hispano como escena para conversar y comparar con las fiestas del alumno." },
  { group: "cultura", parent: "Temas culturales", slug: "historia", name: "Historia", match: /\bhistoric|\b19\d\d\b|personajes historicos|\bimperio\b|\bguerra\b|edificio de 1958/, intro: "Un edificio de 1958, personajes históricos y hechos del pasado: la historia como pretexto para narrar y discutir hipótesis." },
  { group: "cultura", parent: "Temas culturales", slug: "cine-y-literatura", name: "Cine, literatura y arte", match: /\bcine\b|\bpelicula|literatura|\bnovela\b|\bteatro\b|\bmuseo\b/, intro: "Películas, teatro, museos y relatos: hablar de cine y literatura para opinar, resumir y contar historias." },
  { group: "cultura", parent: "Temas culturales", slug: "variedades-del-espanol", name: "Variedades del español", match: /variedad|voseo|tuteo|ustedeo|leismo|rioplatense|\bregional\b|\bacento/, intro: "Tú, vos y usted, el leísmo, los pasados que cambian de país en país y los acentos: enseñar un español real con sus variedades." },
];

export type TemaPage = {
  group: TemaGroupId; parent: string; slug: string; path: string; name: string; h1: string; title: string; description: string; intro: string;
  guide?: string; lessonIds: number[]; levels: string[]; freeCount: number; goals: string[]; warmups: string[]; speaking: string[]; faq: { question: string; answer: string }[];
};

const levelOrder: string[] = courseLevels;
const lessonLevels = (lesson: Lesson) => (lesson.levels?.length ? lesson.levels : [lesson.level]).filter((level) => levelOrder.includes(level));
const uniq = <T,>(items: T[]) => [...new Set(items)];

function buildPage(source: Source): TemaPage | null {
  const group = temaGroupById.get(source.group)!;
  const matched = lessons.filter((lesson) => (source.ids?.includes(lesson.id) ?? false) || source.match.test(haystackByLesson.get(lesson.id) ?? ""));
  // Grammar points are taught by grammar classes; conversation worlds only join a grammar topic when named explicitly.
  const relevant = source.group === "gramatica" ? matched.filter((lesson) => lesson.category === "Gramática" || lesson.category === "Fonética" || (source.ids?.includes(lesson.id) ?? false)) : matched;
  if (relevant.length === 0) return null;
  const ordered = [...relevant].sort((a, b) => Number(isFreeLesson(b.id)) - Number(isFreeLesson(a.id)) || levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level) || (a.curriculumOrder ?? 0) - (b.curriculumOrder ?? 0));
  const levels = uniq(ordered.flatMap(lessonLevels)).sort((a, b) => levelOrder.indexOf(a) - levelOrder.indexOf(b));
  const freeCount = ordered.filter((lesson) => isFreeLesson(lesson.id)).length;
  const span = levels.length > 1 ? `${levels[0]}–${levels[levels.length - 1]}` : levels[0] ?? "A1";
  const count = ordered.length;
  const classes = count === 1 ? "1 clase interactiva" : `${count} clases interactivas`;
  const guideLabel = source.guide ? elePageBySlug.get(source.guide)?.h1 : undefined;
  const longTitle = `${source.name}: actividades y clases ELE ${span} | SpanishCue`;
  const title = longTitle.length <= 78 ? longTitle : `${source.name}: clases ELE ${span} | SpanishCue`;
  const base = `${source.name} en clase de ELE: ${classes} de nivel ${span} para enseñarlo con teoría visual, práctica y conversación.`;
  const extra = freeCount > 0 ? ` ${freeCount === 1 ? "Una clase gratis" : `${freeCount} clases gratis`} para probar hoy.` : " Material listo para compartir en pantalla.";
  const description = (base + extra).length <= 165 ? base + extra : base;
  return {
    group: source.group, parent: source.parent, slug: source.slug, path: `${group.path}/${source.slug}`, name: source.name,
    h1: `${source.name}: clases y actividades para enseñarlo en ELE`, title, description, intro: source.intro, guide: source.guide,
    lessonIds: ordered.map((lesson) => lesson.id), levels, freeCount,
    goals: uniq(ordered.flatMap((lesson) => lesson.goals.filter((goal) => goal && goal !== lesson.subtitle))).slice(0, 8),
    warmups: uniq(ordered.map((lesson) => lesson.warmup).filter(Boolean)).slice(0, 4),
    speaking: uniq(ordered.flatMap((lesson) => lesson.speaking).filter(Boolean)).slice(0, 8),
    faq: [
      { question: `¿Para qué nivel es ${source.name.toLowerCase()}?`, answer: `En SpanishCue hay ${classes} que ${count === 1 ? "trabaja" : "trabajan"} ${source.name.toLowerCase()} entre ${span}. Cada clase indica su nivel según el MCER y el PCIC, y las de un mismo tema se ordenan de lo regular a lo irregular y de la forma al uso.` },
      { question: `¿Hay alguna clase gratis sobre ${source.name.toLowerCase()}?`, answer: freeCount > 0 ? `Sí: ${freeCount === 1 ? "una de estas clases es gratis" : `${freeCount} de estas clases son gratis`} y se abre sin registrarse. Las demás están incluidas en la suscripción PRO.` : `Las clases de este tema son PRO. Para ver cómo funciona una clase completa antes de suscribirte, abre una clase gratis de tu nivel en Material ELE por nivel.` },
      { question: "¿Qué incluye cada clase?", answer: group.method.join(" ") },
      ...(guideLabel ? [{ question: `¿Dónde hay actividades y ejercicios sobre ${source.name.toLowerCase()}?`, answer: `En la guía «${guideLabel}»: actividades comunicativas con pasos y frases modelo, un ejercicio con soluciones y una ficha para descargar en PDF.` }] : []),
    ],
  };
}

export const temaPages: TemaPage[] = sources.map(buildPage).filter((page): page is TemaPage => page !== null);
export const temaPageByPath = new Map(temaPages.map((page) => [page.path, page]));
export const temaSourcesWithoutLessons = sources.filter((source) => !temaPages.some((page) => page.slug === source.slug && page.group === source.group)).map((source) => `${source.group}/${source.slug}`);
export const temasByGroup = (group: TemaGroupId) => temaPages.filter((page) => page.group === group);
export function temaParents(group: TemaGroupId): { parent: string; pages: TemaPage[] }[] {
  const parents = uniq(temasByGroup(group).map((page) => page.parent));
  return parents.map((parent) => ({ parent, pages: temasByGroup(group).filter((page) => page.parent === parent) }));
}
export function relatedTemas(page: TemaPage, limit = 8): TemaPage[] {
  const sameParent = temasByGroup(page.group).filter((other) => other.slug !== page.slug && other.parent === page.parent);
  const sameGroup = temasByGroup(page.group).filter((other) => other.slug !== page.slug && other.parent !== page.parent);
  return [...sameParent, ...sameGroup].slice(0, limit);
}

/* Level pages: /material-ele/<grupo>/<tema>/<nivel>. Every group, but only for levels where the topic has
 * at least two classes written for that level, so a level page is never a copy of its topic page. */
export type TemaLevelPage = {
  group: TemaGroupId; parent: string; slug: string; level: string; path: string; name: string; h1: string; title: string; description: string; intro: string;
  lessonIds: number[]; freeCount: number; goals: string[]; warmups: string[]; speaking: string[]; faq: { question: string; answer: string }[]; tema: TemaPage; order: string;
};
const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const levelSlugs = ["A1", "A2", "B1", "B2", "C1", "C2"];
const levelWords: Record<string, string> = { A1: "principiantes", A2: "nivel básico", B1: "nivel intermedio", B2: "intermedio alto", C1: "nivel avanzado", C2: "nivel de maestría" };
type LevelCopy = { where: string; order: string; faqStart: string; descTail: string; shortTail: string };
/** How each group's classes are described on a level page: a grammar page talks about rules, a vocabulary page about scenes, a function page about acts of speech, a culture page about places. */
const levelCopy: Record<TemaGroupId, LevelCopy> = {
  gramatica: { where: "Cada una abre en una pantalla para compartir, con la regla primero, práctica con corrección y una tarea de conversación en la que el alumno necesita", order: "En el orden del curso: primero la forma regular, después las irregularidades y el uso.", faqStart: "las clases están en el orden del curso de gramática de SpanishCue, de lo regular a lo irregular y de la forma al uso", descTail: "ordenadas de lo regular a lo irregular", shortTail: "teoría, práctica y conversación" },
  vocabulario: { where: "Cada una mete el léxico en una escena real, con audio y contexto, y termina con una tarea oral en la que el alumno necesita", order: "De la escena más simple a la más exigente: primero reconocer y pedir, después comparar, reclamar y contar.", faqStart: "las clases van de la escena más guiada a la más abierta, y el léxico se recicla de una a otra", descTail: "dentro de situaciones reales, con audio y tarea oral", shortTail: "escenas reales, audio y tarea oral" },
  funciones: { where: "Cada una muestra un modelo, practica las fórmulas con corrección y cierra con una escena en la que la única salida es", order: "Primero el modelo y las fórmulas, después la práctica guiada y al final la escena donde hay que usarlas.", faqStart: "las clases van del modelo a la práctica guiada y de ahí a la tarea real, con la gramática que cada función necesita", descTail: "con modelo, práctica guiada y tarea real", shortTail: "modelo, práctica guiada y tarea real" },
  cultura: { where: "Cada una lleva al alumno a un lugar que se recorre hablando, con escuchas por zona y preguntas sobre la vida real para que practique", order: "Primero el recorrido y la escucha, después la conversación comparada con la vida del alumno.", faqStart: "las clases van del recorrido y la escucha a la conversación, y cada país o tema suma acentos y registros nuevos", descTail: "con recorrido, escuchas por zona y conversación", shortTail: "recorrido, escucha y conversación" },
};
function buildLevelPage(tema: TemaPage, level: string): TemaLevelPage | null {
  const ids = tema.lessonIds.filter((id) => { const lesson = lessonById.get(id); return lesson ? lessonLevels(lesson).includes(level) : false; });
  if (ids.length < 2) return null;
  const items = ids.map((id) => lessonById.get(id)!);
  const freeCount = ids.filter((id) => isFreeLesson(id)).length;
  const copy = levelCopy[tema.group];
  const lower = tema.name.toLowerCase();
  const titles = items.slice(0, 3).map((lesson) => `«${lesson.title.replace(/:.*$/, "")}»`).join(", ");
  const longTitle = `${tema.name} ${level}: clases y actividades ELE para ${levelWords[level]} | SpanishCue`;
  const title = [longTitle, `${tema.name} ${level}: clases y actividades ELE | SpanishCue`, `${tema.name} ${level}: clases ELE | SpanishCue`].find((candidate) => candidate.length <= 78) ?? `${tema.name} ${level} | SpanishCue`;
  let description = `${tema.name} para alumnos de ${level}: ${ids.length} clases interactivas con teoría visual, práctica corregida y conversación, ${copy.descTail}.`;
  if (description.length > 165) description = `${tema.name} en ${level}: ${ids.length} clases interactivas con ${copy.shortTail} para la clase de ELE.`;
  if (description.length < 110) description = `${description} Una clase gratis por nivel para probar sin registro.`;
  return {
    group: tema.group, parent: tema.parent, slug: tema.slug, level, path: `${tema.path}/${level.toLowerCase()}`, name: tema.name, tema,
    h1: `${tema.name} en ${level}: ${ids.length} clases para enseñarlo a ${levelWords[level]}`, title, description, order: copy.order,
    intro: `En ${level}, ${lower} se trabaja en ${ids.length} clases: ${titles}${ids.length > 3 ? " y más" : ""}. ${copy.where} ${lower} para decir lo que quiere decir.`,
    lessonIds: ids, freeCount,
    goals: uniq(items.flatMap((lesson) => lesson.goals.filter((goal) => goal && goal !== lesson.subtitle))).slice(0, 8),
    warmups: uniq(items.map((lesson) => lesson.warmup).filter(Boolean)).slice(0, 4),
    speaking: uniq(items.flatMap((lesson) => lesson.speaking).filter(Boolean)).slice(0, 8),
    faq: [
      { question: `¿Qué parte de ${lower} corresponde a ${level}?`, answer: `La que enseñan estas ${ids.length} clases, alineadas con el MCER y el PCIC para ${level}: ${items.map((lesson) => lesson.title.replace(/:.*$/, "")).join("; ")}.` },
      { question: `¿Con cuál empiezo?`, answer: `Con la primera de la lista: ${copy.faqStart}. ${freeCount ? `${freeCount === 1 ? "Una es gratis" : `${freeCount} son gratis`} y se abre sin registro.` : "Para probar el formato, abre la clase gratis de este nivel en Material ELE por nivel."}` },
      { question: `¿Hay ${lower} en otros niveles?`, answer: `Sí: la página de ${lower} reúne todas las clases del tema, de ${tema.levels[0]} a ${tema.levels[tema.levels.length - 1]}, y enlaza cada nivel.` },
    ],
  };
}
export const temaLevelPages: TemaLevelPage[] = temaPages.flatMap((tema) => levelSlugs.map((level) => buildLevelPage(tema, level)).filter((page): page is TemaLevelPage => page !== null));
export const temaLevelPageByPath = new Map(temaLevelPages.map((page) => [page.path, page]));
export const temaLevelsOf = (tema: TemaPage) => temaLevelPages.filter((page) => page.slug === tema.slug && page.group === tema.group);
