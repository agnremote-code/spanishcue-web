import type { Objective } from "../types";

/** C2: veinte semanas; puntos de integración 5, 10, 15 y 20.
 * Textos originales. La variación fonética requiere muestras verificables en clase. */
export const c2Objectives: Objective[] = [
  {
    "id": "c2.gram.ambiguedad-sintactica",
    "level": "c2",
    "domain": "grammar",
    "topic": "Ambigüedad sintáctica",
    "outcome": "Puedo detectar y deshacer ambigüedades estructurales: vi a la hija del vecino que trabaja en el banco.",
    "prerequisites": [
      "c1.gram.nominalizacion-avanzada"
    ],
    "week": 1,
    "pcic": "Gramática 10–15",
    "related": [
      "/cuando-una-frase-puede-significar-dos-cosas"
    ]
  },
  {
    "id": "c2.disc.desambiguar",
    "level": "c2",
    "domain": "discourse",
    "topic": "Desambiguar en la escritura",
    "outcome": "Puedo reescribir un texto para eliminar lecturas no deseadas o mantenerlas a propósito.",
    "prerequisites": [
      "c2.gram.ambiguedad-sintactica"
    ],
    "week": 1
  },
  {
    "id": "c2.voc.polisemia-avanzada",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Polisemia y homonimia",
    "outcome": "Puedo explotar y controlar los significados múltiples de palabras frecuentes.",
    "prerequisites": [
      "b2.voc.colocaciones"
    ],
    "week": 1
  },
  {
    "id": "c2.pron.prosodia-desambiguadora",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Prosodia que desambigua",
    "outcome": "Puedo deshacer una ambigüedad oral con pausas y acentos.",
    "prerequisites": [
      "c1.pron.incisos"
    ],
    "week": 1
  },
  {
    "id": "c2.read.textos-ambiguos",
    "level": "c2",
    "domain": "reading",
    "topic": "Leer titulares y cláusulas ambiguas",
    "outcome": "Puedo identificar qué lecturas permite un titular o una cláusula.",
    "prerequisites": [],
    "week": 1
  },
  {
    "id": "c2.disc.ironia-productiva",
    "level": "c2",
    "domain": "discourse",
    "topic": "Ironía, litote e hipérbole",
    "outcome": "Puedo producir y reconocer ironía, litote (no es precisamente barato) e hipérbole según el efecto buscado.",
    "prerequisites": [
      "c1.disc.ironia-receptiva"
    ],
    "week": 2
  },
  {
    "id": "c2.voc.evaluacion-implicita",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Léxico evaluativo implícito",
    "outcome": "Puedo detectar valoraciones escondidas en adjetivos, diminutivos y verbos.",
    "prerequisites": [],
    "week": 2
  },
  {
    "id": "c2.pron.ironia-variedades",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Prosodia e ironía contextual",
    "outcome": "Puedo ensayar e interpretar contrastes de intención con contexto y prosodia, sin atribuir una variedad a una voz sintética.",
    "prerequisites": [
      "c1.pron.ironia"
    ],
    "week": 2
  },
  {
    "id": "c2.lis.humor-ironico",
    "level": "c2",
    "domain": "listening",
    "topic": "Escuchar una tertulia irónica",
    "outcome": "Puedo separar lo que se dice de lo que se quiere decir en una tertulia.",
    "prerequisites": [],
    "week": 2
  },
  {
    "id": "c2.spk.comentario-ironico",
    "level": "c2",
    "domain": "speaking",
    "topic": "Comentario con ironía controlada",
    "outcome": "Puedo comentar una situación con ironía sin perder la cortesía.",
    "prerequisites": [],
    "week": 2
  },
  {
    "id": "c2.disc.cambio-registro",
    "level": "c2",
    "domain": "discourse",
    "topic": "Alternancia de registros",
    "outcome": "Puedo pasar con control de un registro jurídico o administrativo a uno coloquial y al revés.",
    "prerequisites": [
      "c1.fun.adecuar-registro"
    ],
    "week": 3
  },
  {
    "id": "c2.voc.lenguaje-juridico",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Lenguaje jurídico-administrativo",
    "outcome": "Puedo entender fórmulas como por la presente, en virtud de, sin perjuicio de y a tenor de.",
    "prerequisites": [
      "c1.voc.derecho-normas"
    ],
    "week": 3
  },
  {
    "id": "c2.gram.futuro-subjuntivo-juridico",
    "level": "c2",
    "domain": "grammar",
    "topic": "Futuro de subjuntivo y fórmulas arcaizantes",
    "outcome": "Puedo interpretar el futuro de subjuntivo en textos legales: el que infringiere….",
    "prerequisites": [
      "c1.gram.tiempos-literarios"
    ],
    "week": 3,
    "pcic": "Gramática 9.1",
    "related": [
      "/sistema-verbal/futuro-perfecto-subjuntivo"
    ]
  },
  {
    "id": "c2.pron.registro-voz",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Registro y voz",
    "outcome": "Puedo adaptar velocidad, articulación y entonación al registro.",
    "prerequisites": [
      "c1.pron.debate-prosodia"
    ],
    "week": 3
  },
  {
    "id": "c2.wri.traduccion-registro",
    "level": "c2",
    "domain": "writing",
    "topic": "Traducción intralingüística",
    "outcome": "Puedo convertir un texto legal en una explicación clara para el público general.",
    "prerequisites": [
      "c1.wri.revision-registro"
    ],
    "week": 3
  },
  {
    "id": "c2.disc.subtexto",
    "level": "c2",
    "domain": "discourse",
    "topic": "Subtexto e inferencia",
    "outcome": "Puedo reconstruir intenciones, tensiones y omisiones en diálogos y textos literarios.",
    "prerequisites": [
      "c1.disc.implicaturas"
    ],
    "week": 4
  },
  {
    "id": "c2.voc.verbos-dicendi-matices",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Verbos introductores con matiz",
    "outcome": "Puedo elegir entre murmurar, espetar, deslizar, zanjar, rezongar y otros verbos de habla.",
    "prerequisites": [
      "b2.voc.verbos-lengua"
    ],
    "week": 4
  },
  {
    "id": "c2.pron.intencion-pragmatica",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Entonación e intención contextual",
    "outcome": "Puedo contrastar interpretaciones de una frase mediante contexto, pausas y foco, sin tratar la entonación como prueba única.",
    "prerequisites": [
      "c2.pron.ironia-variedades"
    ],
    "week": 4
  },
  {
    "id": "c2.read.relato-subtexto",
    "level": "c2",
    "domain": "reading",
    "topic": "Leer un relato con subtexto",
    "outcome": "Puedo justificar con pruebas textuales lo que no se dice en un relato.",
    "prerequisites": [],
    "week": 4
  },
  {
    "id": "c2.wri.dialogo-subtexto",
    "level": "c2",
    "domain": "writing",
    "topic": "Escribir un diálogo con subtexto",
    "outcome": "Puedo escribir un diálogo en el que el conflicto no se nombra.",
    "prerequisites": [
      "c1.wri.relato-estilo"
    ],
    "week": 4
  },
  {
    "id": "c2.rev.checkpoint-1",
    "level": "c2",
    "domain": "review",
    "topic": "Checkpoint 1: alcance, ironía, registro y subtexto",
    "outcome": "Puedo mediar entre un acta, una crónica, un mensaje y una discusión sin confundir hechos e inferencias.",
    "prerequisites": [
      "c2.gram.ambiguedad-sintactica",
      "c2.disc.ironia-productiva",
      "c2.disc.cambio-registro"
    ],
    "week": 5
  },
  {
    "id": "c2.read.contrato-cronica",
    "level": "c2",
    "domain": "reading",
    "topic": "Leer textos de registros opuestos",
    "outcome": "Puedo comparar una cláusula, una crónica y un mensaje sobre el mismo hecho.",
    "prerequisites": [],
    "week": 5
  },
  {
    "id": "c2.disc.recursos-retoricos",
    "level": "c2",
    "domain": "discourse",
    "topic": "Recursos retóricos",
    "outcome": "Puedo analizar y usar antítesis, anáfora, pregunta retórica, gradación y concesión táctica.",
    "prerequisites": [
      "c1.disc.contraargumentacion"
    ],
    "week": 6
  },
  {
    "id": "c2.voc.lexico-persuasivo",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Léxico persuasivo",
    "outcome": "Puedo reconocer eufemismos, disfemismos y palabras cargadas.",
    "prerequisites": [],
    "week": 6
  },
  {
    "id": "c2.pron.oratoria",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Oratoria",
    "outcome": "Puedo usar pausas, ritmo ternario y clímax en un discurso.",
    "prerequisites": [
      "c1.pron.debate-prosodia"
    ],
    "week": 6
  },
  {
    "id": "c2.lis.discurso-politico",
    "level": "c2",
    "domain": "listening",
    "topic": "Escuchar un discurso",
    "outcome": "Puedo identificar las estrategias retóricas de un discurso.",
    "prerequisites": [],
    "week": 6
  },
  {
    "id": "c2.spk.discurso-breve",
    "level": "c2",
    "domain": "speaking",
    "topic": "Discurso persuasivo",
    "outcome": "Puedo pronunciar un discurso de tres minutos con recursos retóricos conscientes.",
    "prerequisites": [],
    "week": 6
  },
  {
    "id": "c2.read.prosa-densa",
    "level": "c2",
    "domain": "reading",
    "topic": "Prosa académica y ensayística densa",
    "outcome": "Puedo procesar textos con alta densidad informativa, incisos y nominalizaciones.",
    "prerequisites": [
      "c1.read.ensayo"
    ],
    "week": 7
  },
  {
    "id": "c2.gram.sintaxis-compleja",
    "level": "c2",
    "domain": "grammar",
    "topic": "Sintaxis compleja",
    "outcome": "Puedo analizar y producir oraciones con varios niveles de subordinación sin perder claridad.",
    "prerequisites": [
      "c2.gram.ambiguedad-sintactica"
    ],
    "week": 7,
    "pcic": "Gramática 15"
  },
  {
    "id": "c2.voc.conectores-cultos",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Conectores cultos",
    "outcome": "Puedo usar empero, con todo, así las cosas, a la sazón y no en vano con precisión.",
    "prerequisites": [
      "c1.disc.atenuar-intensificar"
    ],
    "week": 7
  },
  {
    "id": "c2.pron.lectura-densa",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Leer prosa densa en voz alta",
    "outcome": "Puedo leer un texto denso de forma comprensible para quien escucha.",
    "prerequisites": [
      "c1.pron.lectura-academica"
    ],
    "week": 7
  },
  {
    "id": "c2.wri.abstract",
    "level": "c2",
    "domain": "writing",
    "topic": "Resumen académico",
    "outcome": "Puedo escribir un resumen académico de 150 palabras sin perder matices.",
    "prerequisites": [
      "c1.wri.sintesis-fuentes"
    ],
    "week": 7
  },
  {
    "id": "c2.voc.casi-sinonimos",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Casi sinónimos y connotación",
    "outcome": "Puedo elegir entre casi sinónimos según connotación, registro y prosodia semántica.",
    "prerequisites": [
      "c1.voc.verbos-precisos"
    ],
    "week": 8
  },
  {
    "id": "c2.voc.refranes-intertextualidad",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Refranes, citas e intertextualidad",
    "outcome": "Puedo reconocer y adaptar refranes, citas y alusiones culturales.",
    "prerequisites": [],
    "week": 8
  },
  {
    "id": "c2.pron.matiz-lexico-voz",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Matiz léxico y voz",
    "outcome": "Puedo marcar con la voz la elección deliberada de una palabra.",
    "prerequisites": [
      "c2.pron.intencion-pragmatica"
    ],
    "week": 8
  },
  {
    "id": "c2.wri.precision-lexica",
    "level": "c2",
    "domain": "writing",
    "topic": "Precisión léxica",
    "outcome": "Puedo revisar un texto propio cambiando palabras imprecisas por otras exactas.",
    "prerequisites": [],
    "week": 8
  },
  {
    "id": "c2.read.columna-literaria",
    "level": "c2",
    "domain": "reading",
    "topic": "Leer una columna literaria",
    "outcome": "Puedo explicar las alusiones y los juegos léxicos de una columna.",
    "prerequisites": [],
    "week": 8
  },
  {
    "id": "c2.pron.variacion-avanzada",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Variación fonética y selección de muestras",
    "outcome": "Puedo explicar aspiración, debilitamiento, lateralización y asibilación como fenómenos variables y seleccionar con mi docente muestras verificables para entrenar su percepción.",
    "prerequisites": [
      "c1.pron.variedades-hispanas"
    ],
    "week": 9
  },
  {
    "id": "c2.voc.variacion-lexica-pragmatica",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Variación léxica y pragmática",
    "outcome": "Puedo interpretar diferencias de cortesía, tratamiento y léxico entre variedades.",
    "prerequisites": [
      "b2.voc.lexico-regional"
    ],
    "week": 9
  },
  {
    "id": "c2.gram.variacion-gramatical",
    "level": "c2",
    "domain": "grammar",
    "topic": "Variación gramatical",
    "outcome": "Puedo reconocer leísmo, voseo de distintas zonas, el queísmo dialectal y el uso de los tiempos del pasado.",
    "prerequisites": [
      "b2.gram.voseo"
    ],
    "week": 9,
    "pcic": "Gramática 7.1"
  },
  {
    "id": "c2.lis.voces-mundo",
    "level": "c2",
    "domain": "listening",
    "topic": "Escucha flexible y reparación",
    "outcome": "Puedo seguir una discusión sobre usos diversos, pedir una paráfrasis y delimitar qué rasgos no acredita una voz sintética.",
    "prerequisites": [],
    "week": 9
  },
  {
    "id": "c2.fun.mediacion-variedades",
    "level": "c2",
    "domain": "functional",
    "topic": "Mediar entre variedades",
    "outcome": "Puedo explicar a otra persona una diferencia de uso entre variedades.",
    "prerequisites": [],
    "week": 9
  },
  {
    "id": "c2.rev.checkpoint-2",
    "level": "c2",
    "domain": "review",
    "topic": "Checkpoint 2: retórica, densidad, precisión y variación",
    "outcome": "Puedo evaluar un balance público, explicar límites de los datos y negociar una formulación precisa.",
    "prerequisites": [
      "c2.disc.recursos-retoricos",
      "c2.read.prosa-densa",
      "c2.voc.casi-sinonimos",
      "c2.fun.mediacion-variedades"
    ],
    "week": 10
  },
  {
    "id": "c2.lis.mesa-redonda",
    "level": "c2",
    "domain": "listening",
    "topic": "Escuchar una mesa de evaluación",
    "outcome": "Puedo reconstruir posturas y reservas de una mesa de evaluación sintetizada, sin atribuirle solapamientos ni variedades verificadas.",
    "prerequisites": [
      "c1.lis.notas-jerarquia"
    ],
    "week": 10
  },
  {
    "id": "c2.disc.humor-juegos",
    "level": "c2",
    "domain": "discourse",
    "topic": "Humor y juegos de palabras",
    "outcome": "Puedo entender y crear dobles sentidos, calambures y chistes basados en la lengua.",
    "prerequisites": [
      "c2.voc.polisemia-avanzada"
    ],
    "week": 11
  },
  {
    "id": "c2.voc.expresiones-idiomaticas",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Expresiones idiomáticas con matiz",
    "outcome": "Puedo usar locuciones idiomáticas con el registro y la variedad adecuados.",
    "prerequisites": [
      "c1.voc.habla-coloquial"
    ],
    "week": 11
  },
  {
    "id": "c2.pron.ritmo-humor",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Ritmo del humor",
    "outcome": "Puedo usar la pausa y el ritmo para que un chiste funcione.",
    "prerequisites": [
      "c2.pron.oratoria"
    ],
    "week": 11
  },
  {
    "id": "c2.read.humor-escrito",
    "level": "c2",
    "domain": "reading",
    "topic": "Leer humor escrito",
    "outcome": "Puedo explicar por qué funciona un texto humorístico.",
    "prerequisites": [],
    "week": 11
  },
  {
    "id": "c2.spk.anecdota-humor",
    "level": "c2",
    "domain": "speaking",
    "topic": "Anécdota con humor",
    "outcome": "Puedo contar una anécdota con humor verbal y control del ritmo.",
    "prerequisites": [],
    "week": 11
  },
  {
    "id": "c2.disc.mediacion",
    "level": "c2",
    "domain": "discourse",
    "topic": "Mediación de textos",
    "outcome": "Puedo sintetizar fuentes contradictorias para un destinatario concreto.",
    "prerequisites": [
      "c1.disc.sintesis"
    ],
    "week": 12
  },
  {
    "id": "c2.voc.lexico-tecnico-divulgativo",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "De lo técnico a lo divulgativo",
    "outcome": "Puedo traducir léxico técnico a explicaciones accesibles sin perder exactitud.",
    "prerequisites": [],
    "week": 12
  },
  {
    "id": "c2.pron.claridad-mediacion",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Claridad al mediar",
    "outcome": "Puedo explicar oralmente un contenido complejo con ritmo pausado y claro.",
    "prerequisites": [
      "c1.pron.resumen-oral"
    ],
    "week": 12
  },
  {
    "id": "c2.wri.informe-mediacion",
    "level": "c2",
    "domain": "writing",
    "topic": "Informe de mediación",
    "outcome": "Puedo redactar un informe que presenta posturas enfrentadas con equilibrio.",
    "prerequisites": [],
    "week": 12
  },
  {
    "id": "c2.lis.fuentes-contradictorias",
    "level": "c2",
    "domain": "listening",
    "topic": "Escuchar fuentes contradictorias",
    "outcome": "Puedo detectar contradicciones entre dos audios y un texto.",
    "prerequisites": [],
    "week": 12
  },
  {
    "id": "c2.disc.control-estilistico",
    "level": "c2",
    "domain": "discourse",
    "topic": "Control estilístico",
    "outcome": "Puedo variar la longitud de las frases, el ritmo, la cohesión y la voz para lograr un efecto.",
    "prerequisites": [
      "c1.wri.relato-estilo"
    ],
    "week": 13
  },
  {
    "id": "c2.gram.recursos-cohesion",
    "level": "c2",
    "domain": "grammar",
    "topic": "Recursos de cohesión",
    "outcome": "Puedo usar anáforas, catáforas, elipsis y sustituciones para evitar repeticiones.",
    "prerequisites": [
      "b1.disc.estructura-texto"
    ],
    "week": 13,
    "pcic": "Gramática 14"
  },
  {
    "id": "c2.voc.estilo-lexico",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Elecciones léxicas de estilo",
    "outcome": "Puedo elegir entre términos patrimoniales, cultismos y coloquialismos según el efecto.",
    "prerequisites": [],
    "week": 13
  },
  {
    "id": "c2.pron.ritmo-prosa",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "El ritmo de la prosa",
    "outcome": "Puedo leer en voz alta para revisar el ritmo de mi propia prosa.",
    "prerequisites": [
      "c2.pron.lectura-densa"
    ],
    "week": 13
  },
  {
    "id": "c2.wri.edicion-estilo",
    "level": "c2",
    "domain": "writing",
    "topic": "Editar un texto",
    "outcome": "Puedo editar el texto de otra persona y justificar cada cambio.",
    "prerequisites": [
      "c2.wri.precision-lexica"
    ],
    "week": 13
  },
  {
    "id": "c2.disc.debate-hostil",
    "level": "c2",
    "domain": "discourse",
    "topic": "Debate bajo presión",
    "outcome": "Puedo responder a preguntas hostiles, reencuadrar y desactivar falacias.",
    "prerequisites": [
      "c2.disc.recursos-retoricos"
    ],
    "week": 14
  },
  {
    "id": "c2.disc.falacias",
    "level": "c2",
    "domain": "discourse",
    "topic": "Falacias argumentativas",
    "outcome": "Puedo identificar y nombrar falacias frecuentes: hombre de paja, falso dilema, pendiente resbaladiza.",
    "prerequisites": [
      "c1.disc.contraargumentacion"
    ],
    "week": 14
  },
  {
    "id": "c2.voc.negociacion-alto-nivel",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Negociación de alto nivel",
    "outcome": "Puedo usar el léxico de la negociación: margen, contrapartida, línea roja, punto de encuentro.",
    "prerequisites": [
      "b2.voc.acuerdos-contratos"
    ],
    "week": 14
  },
  {
    "id": "c2.pron.control-presion",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Control prosódico bajo presión",
    "outcome": "Puedo mantener un tono sereno y firme ante una pregunta agresiva.",
    "prerequisites": [
      "c2.pron.oratoria"
    ],
    "week": 14
  },
  {
    "id": "c2.spk.entrevista-hostil",
    "level": "c2",
    "domain": "speaking",
    "topic": "Entrevista difícil",
    "outcome": "Puedo responder a cinco preguntas hostiles sin perder el hilo ni la cortesía.",
    "prerequisites": [],
    "week": 14
  },
  {
    "id": "c2.rev.checkpoint-3",
    "level": "c2",
    "domain": "review",
    "topic": "Checkpoint 3: humor, mediación, estilo y presión",
    "outcome": "Puedo integrar voces enfrentadas en una crónica y un acuerdo con condiciones verificables.",
    "prerequisites": [
      "c2.disc.humor-juegos",
      "c2.disc.mediacion",
      "c2.disc.control-estilistico",
      "c2.disc.debate-hostil"
    ],
    "week": 15
  },
  {
    "id": "c2.wri.cronica-personal",
    "level": "c2",
    "domain": "writing",
    "topic": "Crónica personal",
    "outcome": "Puedo escribir una crónica de 300 palabras con voz propia.",
    "prerequisites": [],
    "week": 15
  },
  {
    "id": "c2.gram.modalidad-evidencial",
    "level": "c2",
    "domain": "grammar",
    "topic": "Modalidad y fuente",
    "outcome": "Puedo distinguir condicional de información no confirmada, inferencia y afirmación documentada.",
    "prerequisites": [
      "c2.gram.sintaxis-compleja"
    ],
    "week": 16,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.disc.responsabilidad-fuentes",
    "level": "c2",
    "domain": "discourse",
    "topic": "Responsabilidad de atribución",
    "outcome": "Puedo conservar fuente, cronología de comprobación y alcance al actualizar una noticia.",
    "prerequisites": [
      "c2.disc.mediacion"
    ],
    "week": 16,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.voc.certeza-documental",
    "level": "c2",
    "domain": "vocabulary",
    "topic": "Léxico de la prueba",
    "outcome": "Puedo diferenciar corroborar, conjeturar, desmentir y rectificar sin exagerar su alcance.",
    "prerequisites": [
      "c2.voc.casi-sinonimos"
    ],
    "week": 16,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.pron.reserva-epistemica",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Prosodia de la reserva",
    "outcome": "Puedo hacer audibles una atribución y una reserva sin convertirlas en un inciso inaudible.",
    "prerequisites": [
      "c2.pron.claridad-mediacion"
    ],
    "week": 16,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.wri.rectificacion",
    "level": "c2",
    "domain": "writing",
    "topic": "Rectificación periodística",
    "outcome": "Puedo corregir públicamente un salto inferencial y explicar cómo cambió la evidencia.",
    "prerequisites": [
      "c2.wri.informe-mediacion"
    ],
    "week": 16,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.gram.agencia-reparacion",
    "level": "c2",
    "domain": "grammar",
    "topic": "Agencia y reconocimiento",
    "outcome": "Puedo comparar pasivas, impersonales y primera persona según la responsabilidad que hacen visible.",
    "prerequisites": [
      "c2.gram.recursos-cohesion"
    ],
    "week": 17,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.fun.disculpa-reparacion",
    "level": "c2",
    "domain": "functional",
    "topic": "Disculpa y reparación",
    "outcome": "Puedo reconocer una omisión, proponer reparación y escuchar desacuerdo sin exigir perdón.",
    "prerequisites": [
      "c2.disc.debate-hostil"
    ],
    "week": 17,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.pron.serenidad-no-condescendiente",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Serenidad y cortesía",
    "outcome": "Puedo mantener firmeza y atención sin usar pausas o énfasis que rebajen al interlocutor.",
    "prerequisites": [
      "c2.pron.control-presion"
    ],
    "week": 17,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.wri.comunicado-reparacion",
    "level": "c2",
    "domain": "writing",
    "topic": "Comunicado de reparación",
    "outcome": "Puedo separar reconocimiento, explicación, medidas aprobadas y reclamaciones pendientes.",
    "prerequisites": [
      "c2.wri.rectificacion"
    ],
    "week": 17,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.gram.temporalidad-perspectiva",
    "level": "c2",
    "domain": "grammar",
    "topic": "Temporalidad y perspectiva",
    "outcome": "Puedo articular anterioridad, hipótesis retrospectiva y estilo indirecto libre.",
    "prerequisites": [
      "c2.gram.sintaxis-compleja"
    ],
    "week": 18,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.disc.fiabilidad-narrativa",
    "level": "c2",
    "domain": "discourse",
    "topic": "Fiabilidad narrativa",
    "outcome": "Puedo evaluar una voz mediante documentos, omisiones y contradicciones sin confundir interpretación con diagnóstico.",
    "prerequisites": [
      "c2.disc.subtexto"
    ],
    "week": 18,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.read.lectura-contrapunto",
    "level": "c2",
    "domain": "reading",
    "topic": "Lectura en contrapunto",
    "outcome": "Puedo comparar versiones de una escena y explicar cómo cambia el orden de revelación.",
    "prerequisites": [
      "c2.read.relato-subtexto"
    ],
    "week": 18,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.spk.defensa-interpretacion",
    "level": "c2",
    "domain": "speaking",
    "topic": "Defensa de una interpretación",
    "outcome": "Puedo sostener hipótesis literarias rivales y revisar una de ellas ante un contraejemplo.",
    "prerequisites": [
      "c2.spk.entrevista-hostil"
    ],
    "week": 18,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.disc.compresion-jerarquica",
    "level": "c2",
    "domain": "discourse",
    "topic": "Compresión con jerarquía",
    "outcome": "Puedo reducir una exposición conservando tesis, alcance, reserva y decisión.",
    "prerequisites": [
      "c2.disc.mediacion"
    ],
    "week": 19,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.pron.foco-compresion",
    "level": "c2",
    "domain": "pronunciation",
    "topic": "Foco en la síntesis oral",
    "outcome": "Puedo redistribuir pausas y prominencia al pasar de cuatro minutos a treinta segundos sin acelerar de manera ininteligible.",
    "prerequisites": [
      "c2.pron.oratoria"
    ],
    "week": 19,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.fun.adaptacion-inmediata",
    "level": "c2",
    "domain": "functional",
    "topic": "Adaptación durante la interacción",
    "outcome": "Puedo integrar una pregunta no prevista y cambiar de audiencia sin perder la condición principal.",
    "prerequisites": [
      "c2.fun.mediacion-variedades"
    ],
    "week": 19,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.spk.sintesis-tiempo",
    "level": "c2",
    "domain": "speaking",
    "topic": "Síntesis con tiempo limitado",
    "outcome": "Puedo presentar una recomendación, acortarla y defender su alcance ante preguntas.",
    "prerequisites": [
      "c2.spk.discurso-breve"
    ],
    "week": 19,
    "pcic": "Tácticas y estrategias pragmáticas C1–C2; Gramática C1–C2; Géneros discursivos C1–C2"
  },
  {
    "id": "c2.rev.checkpoint-final",
    "level": "c2",
    "domain": "review",
    "topic": "Checkpoint final C2",
    "outcome": "Puedo sintetizar fuentes densas, sostener incertidumbres y adaptar una defensa oral y escrita a públicos distintos con precisión.",
    "prerequisites": [
      "c2.rev.checkpoint-3",
      "c2.disc.mediacion",
      "c2.disc.control-estilistico",
      "c2.disc.debate-hostil"
    ],
    "week": 20
  },
  {
    "id": "c2.wri.ensayo-final-c2",
    "level": "c2",
    "domain": "writing",
    "topic": "Dossier final C2",
    "outcome": "Puedo producir un dossier de 650–800 palabras que integre ensayo crítico, comunicado y propuesta, con control de estilo y fuentes.",
    "prerequisites": [
      "c2.wri.abstract"
    ],
    "week": 20
  }
];
