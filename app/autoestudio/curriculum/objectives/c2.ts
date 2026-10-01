import { defineObjectives } from "../define";

/**
 * C2 — mastery. 16 weeks: 12 core weeks and 4 checkpoints (4, 8, 12, 16).
 * Entirely in Spanish. C2 is not "B1 grammar with hard words": every week works
 * on interpretation, ambiguity, subtext, rhetoric, stylistic control and
 * dense, varied authentic-feeling input from the whole Spanish-speaking world.
 */
export const c2Objectives = defineObjectives("c2", [
  // Week 1 · Dos lecturas
  [1, "gram", "ambiguedad-sintactica", "Ambigüedad sintáctica", "Puedo detectar y deshacer ambigüedades estructurales: vi a la hija del vecino que trabaja en el banco.", ["c1.gram.nominalizacion-avanzada"], { pcic: "Gramática 10–15", related: ["/cuando-una-frase-puede-significar-dos-cosas"] }],
  [1, "disc", "desambiguar", "Desambiguar en la escritura", "Puedo reescribir un texto para eliminar lecturas no deseadas o mantenerlas a propósito.", ["c2.gram.ambiguedad-sintactica"]],
  [1, "voc", "polisemia-avanzada", "Polisemia y homonimia", "Puedo explotar y controlar los significados múltiples de palabras frecuentes.", ["b2.voc.colocaciones"]],
  [1, "pron", "prosodia-desambiguadora", "Prosodia que desambigua", "Puedo deshacer una ambigüedad oral con pausas y acentos.", ["c1.pron.incisos"]],
  [1, "read", "textos-ambiguos", "Leer titulares y cláusulas ambiguas", "Puedo identificar qué lecturas permite un titular o una cláusula.", []],

  // Week 2 · Ironía y atenuación retórica
  [2, "disc", "ironia-productiva", "Ironía, litote e hipérbole", "Puedo producir y reconocer ironía, litote (no es precisamente barato) e hipérbole según el efecto buscado.", ["c1.disc.ironia-receptiva"]],
  [2, "voc", "evaluacion-implicita", "Léxico evaluativo implícito", "Puedo detectar valoraciones escondidas en adjetivos, diminutivos y verbos.", []],
  [2, "pron", "ironia-variedades", "Ironía en distintas variedades", "Puedo reconocer cómo cambia la marca prosódica de la ironía entre variedades.", ["c1.pron.ironia"]],
  [2, "lis", "humor-ironico", "Escuchar una tertulia irónica", "Puedo separar lo que se dice de lo que se quiere decir en una tertulia.", []],
  [2, "spk", "comentario-ironico", "Comentario con ironía controlada", "Puedo comentar una situación con ironía sin perder la cortesía.", []],

  // Week 3 · Cambiar de registro
  [3, "disc", "cambio-registro", "Alternancia de registros", "Puedo pasar con control de un registro jurídico o administrativo a uno coloquial y al revés.", ["c1.fun.adecuar-registro"]],
  [3, "voc", "lenguaje-juridico", "Lenguaje jurídico-administrativo", "Puedo entender fórmulas como por la presente, en virtud de, sin perjuicio de y a tenor de.", ["c1.voc.derecho-normas"]],
  [3, "gram", "futuro-subjuntivo-juridico", "Futuro de subjuntivo y fórmulas arcaizantes", "Puedo interpretar el futuro de subjuntivo en textos legales: el que infringiere….", ["c1.gram.tiempos-literarios"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/futuro-perfecto-subjuntivo"] }],
  [3, "pron", "registro-voz", "Registro y voz", "Puedo adaptar velocidad, articulación y entonación al registro.", ["c1.pron.debate-prosodia"]],
  [3, "wri", "traduccion-registro", "Traducción intralingüística", "Puedo convertir un texto legal en una explicación clara para el público general.", ["c1.wri.revision-registro"]],

  // Week 4 · Checkpoint 1
  [4, "rev", "checkpoint-1", "Checkpoint 1: lecturas, ironía y registros", "Puedo detectar ambigüedad, interpretar y producir ironía y cambiar de registro con control.", ["c2.gram.ambiguedad-sintactica", "c2.disc.ironia-productiva", "c2.disc.cambio-registro"]],
  [4, "read", "contrato-cronica", "Leer textos de registros opuestos", "Puedo comparar una cláusula, una crónica y un mensaje sobre el mismo hecho.", []],

  // Week 5 · El subtexto
  [5, "disc", "subtexto", "Subtexto e inferencia", "Puedo reconstruir intenciones, tensiones y omisiones en diálogos y textos literarios.", ["c1.disc.implicaturas"]],
  [5, "voc", "verbos-dicendi-matices", "Verbos introductores con matiz", "Puedo elegir entre murmurar, espetar, deslizar, zanjar, rezongar y otros verbos de habla.", ["b2.voc.verbos-lengua"]],
  [5, "pron", "intencion-pragmatica", "Entonación e intención", "Puedo interpretar la intención de una frase solo por su entonación.", ["c2.pron.ironia-variedades"]],
  [5, "read", "relato-subtexto", "Leer un relato con subtexto", "Puedo justificar con pruebas textuales lo que no se dice en un relato.", []],
  [5, "wri", "dialogo-subtexto", "Escribir un diálogo con subtexto", "Puedo escribir un diálogo en el que el conflicto no se nombra.", ["c1.wri.relato-estilo"]],

  // Week 6 · Retórica
  [6, "disc", "recursos-retoricos", "Recursos retóricos", "Puedo analizar y usar antítesis, anáfora, pregunta retórica, gradación y concesión táctica.", ["c1.disc.contraargumentacion"]],
  [6, "voc", "lexico-persuasivo", "Léxico persuasivo", "Puedo reconocer eufemismos, disfemismos y palabras cargadas.", []],
  [6, "pron", "oratoria", "Oratoria", "Puedo usar pausas, ritmo ternario y clímax en un discurso.", ["c1.pron.debate-prosodia"]],
  [6, "lis", "discurso-politico", "Escuchar un discurso", "Puedo identificar las estrategias retóricas de un discurso.", []],
  [6, "spk", "discurso-breve", "Discurso persuasivo", "Puedo pronunciar un discurso de tres minutos con recursos retóricos conscientes.", []],

  // Week 7 · Prosa densa
  [7, "read", "prosa-densa", "Prosa académica y ensayística densa", "Puedo procesar textos con alta densidad informativa, incisos y nominalizaciones.", ["c1.read.ensayo"]],
  [7, "gram", "sintaxis-compleja", "Sintaxis compleja", "Puedo analizar y producir oraciones con varios niveles de subordinación sin perder claridad.", ["c2.gram.ambiguedad-sintactica"], { pcic: "Gramática 15" }],
  [7, "voc", "conectores-cultos", "Conectores cultos", "Puedo usar empero, con todo, así las cosas, a la sazón y no en vano con precisión.", ["c1.disc.atenuar-intensificar"]],
  [7, "pron", "lectura-densa", "Leer prosa densa en voz alta", "Puedo leer un texto denso de forma comprensible para quien escucha.", ["c1.pron.lectura-academica"]],
  [7, "wri", "abstract", "Resumen académico", "Puedo escribir un resumen académico de 150 palabras sin perder matices.", ["c1.wri.sintesis-fuentes"]],

  // Week 8 · Checkpoint 2
  [8, "rev", "checkpoint-2", "Checkpoint 2: subtexto, retórica y densidad", "Puedo interpretar el subtexto, analizar retórica y procesar prosa densa.", ["c2.disc.subtexto", "c2.disc.recursos-retoricos", "c2.read.prosa-densa"]],
  [8, "lis", "mesa-redonda", "Escuchar una mesa redonda", "Puedo seguir una mesa redonda con solapamientos y voces de distintas variedades.", ["c1.lis.notas-jerarquia"]],

  // Week 9 · Casi sinónimos
  [9, "voc", "casi-sinonimos", "Casi sinónimos y connotación", "Puedo elegir entre casi sinónimos según connotación, registro y prosodia semántica.", ["c1.voc.verbos-precisos"]],
  [9, "voc", "refranes-intertextualidad", "Refranes, citas e intertextualidad", "Puedo reconocer y adaptar refranes, citas y alusiones culturales.", []],
  [9, "pron", "matiz-lexico-voz", "Matiz léxico y voz", "Puedo marcar con la voz la elección deliberada de una palabra.", ["c2.pron.intencion-pragmatica"]],
  [9, "wri", "precision-lexica", "Precisión léxica", "Puedo revisar un texto propio cambiando palabras imprecisas por otras exactas.", []],
  [9, "read", "columna-literaria", "Leer una columna literaria", "Puedo explicar las alusiones y los juegos léxicos de una columna.", []],

  // Week 10 · Así se habla
  [10, "pron", "variacion-avanzada", "Variación fonética avanzada", "Puedo reconocer aspiración, lateralización, asibilación, debilitamiento consonántico y patrones entonativos de varias regiones.", ["c1.pron.variedades-hispanas"]],
  [10, "voc", "variacion-lexica-pragmatica", "Variación léxica y pragmática", "Puedo interpretar diferencias de cortesía, tratamiento y léxico entre variedades.", ["b2.voc.lexico-regional"]],
  [10, "gram", "variacion-gramatical", "Variación gramatical", "Puedo reconocer leísmo, voseo de distintas zonas, el queísmo dialectal y el uso de los tiempos del pasado.", ["b2.gram.voseo"], { pcic: "Gramática 7.1" }],
  [10, "lis", "voces-mundo", "Escuchar el mundo hispano", "Puedo entender a hablantes de seis variedades en un mismo reportaje.", []],
  [10, "fun", "mediacion-variedades", "Mediar entre variedades", "Puedo explicar a otra persona una diferencia de uso entre variedades.", []],

  // Week 11 · Jugar con la lengua
  [11, "disc", "humor-juegos", "Humor y juegos de palabras", "Puedo entender y crear dobles sentidos, calambures y chistes basados en la lengua.", ["c2.voc.polisemia-avanzada"]],
  [11, "voc", "expresiones-idiomaticas", "Expresiones idiomáticas con matiz", "Puedo usar locuciones idiomáticas con el registro y la variedad adecuados.", ["c1.voc.habla-coloquial"]],
  [11, "pron", "ritmo-humor", "Ritmo del humor", "Puedo usar la pausa y el ritmo para que un chiste funcione.", ["c2.pron.oratoria"]],
  [11, "read", "humor-escrito", "Leer humor escrito", "Puedo explicar por qué funciona un texto humorístico.", []],
  [11, "spk", "anecdota-humor", "Anécdota con humor", "Puedo contar una anécdota con humor verbal y control del ritmo.", []],

  // Week 12 · Checkpoint 3
  [12, "rev", "checkpoint-3", "Checkpoint 3: matiz, variación y humor", "Puedo elegir con precisión, interpretar la variación y jugar con la lengua.", ["c2.voc.casi-sinonimos", "c2.pron.variacion-avanzada", "c2.disc.humor-juegos"]],
  [12, "wri", "cronica-personal", "Crónica personal", "Puedo escribir una crónica de 300 palabras con voz propia.", []],

  // Week 13 · Mediar y sintetizar
  [13, "disc", "mediacion", "Mediación de textos", "Puedo sintetizar fuentes contradictorias para un destinatario concreto.", ["c1.disc.sintesis"]],
  [13, "voc", "lexico-tecnico-divulgativo", "De lo técnico a lo divulgativo", "Puedo traducir léxico técnico a explicaciones accesibles sin perder exactitud.", []],
  [13, "pron", "claridad-mediacion", "Claridad al mediar", "Puedo explicar oralmente un contenido complejo con ritmo pausado y claro.", ["c1.pron.resumen-oral"]],
  [13, "wri", "informe-mediacion", "Informe de mediación", "Puedo redactar un informe que presenta posturas enfrentadas con equilibrio.", []],
  [13, "lis", "fuentes-contradictorias", "Escuchar fuentes contradictorias", "Puedo detectar contradicciones entre dos audios y un texto.", []],

  // Week 14 · Estilo
  [14, "disc", "control-estilistico", "Control estilístico", "Puedo variar la longitud de las frases, el ritmo, la cohesión y la voz para lograr un efecto.", ["c1.wri.relato-estilo"]],
  [14, "gram", "recursos-cohesion", "Recursos de cohesión", "Puedo usar anáforas, catáforas, elipsis y sustituciones para evitar repeticiones.", ["b1.disc.estructura-texto"], { pcic: "Gramática 14" }],
  [14, "voc", "estilo-lexico", "Elecciones léxicas de estilo", "Puedo elegir entre términos patrimoniales, cultismos y coloquialismos según el efecto.", []],
  [14, "pron", "ritmo-prosa", "El ritmo de la prosa", "Puedo leer en voz alta para revisar el ritmo de mi propia prosa.", ["c2.pron.lectura-densa"]],
  [14, "wri", "edicion-estilo", "Editar un texto", "Puedo editar el texto de otra persona y justificar cada cambio.", ["c2.wri.precision-lexica"]],

  // Week 15 · Argumentar bajo presión
  [15, "disc", "debate-hostil", "Debate bajo presión", "Puedo responder a preguntas hostiles, reencuadrar y desactivar falacias.", ["c2.disc.recursos-retoricos"]],
  [15, "disc", "falacias", "Falacias argumentativas", "Puedo identificar y nombrar falacias frecuentes: hombre de paja, falso dilema, pendiente resbaladiza.", ["c1.disc.contraargumentacion"]],
  [15, "voc", "negociacion-alto-nivel", "Negociación de alto nivel", "Puedo usar el léxico de la negociación: margen, contrapartida, línea roja, punto de encuentro.", ["b2.voc.acuerdos-contratos"]],
  [15, "pron", "control-presion", "Control prosódico bajo presión", "Puedo mantener un tono sereno y firme ante una pregunta agresiva.", ["c2.pron.oratoria"]],
  [15, "spk", "entrevista-hostil", "Entrevista difícil", "Puedo responder a cinco preguntas hostiles sin perder el hilo ni la cortesía.", []],

  // Week 16 · Checkpoint final C2
  [16, "rev", "checkpoint-final", "Checkpoint final C2", "Puedo comprender cualquier texto, interpretar lo implícito, mediar, argumentar bajo presión y escribir con estilo propio.", ["c2.rev.checkpoint-3", "c2.disc.mediacion", "c2.disc.control-estilistico", "c2.disc.debate-hostil"]],
  [16, "wri", "ensayo-final-c2", "Ensayo final C2", "Puedo escribir un ensayo de 400 palabras con tesis, matiz, recursos retóricos y estilo propio.", ["c2.wri.abstract"]],
]);
