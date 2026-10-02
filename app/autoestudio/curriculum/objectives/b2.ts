import { defineObjectives } from "../define";

/** B2: twenty weeks, with integrated checkpoints 5, 10, 15 and 20.
 * Original Spanish-first argument, mediation and interaction. Regional listening
 * requires real examples in class; synthesis never certifies a regional accent. */
export const b2Objectives = defineObjectives("b2", [
  // Week 1 · Lo que quieren de ti
  [1, "gram", "sustantivas-sistema", "Subjuntivo en oraciones sustantivas", "Puedo elegir el modo según el verbo principal: influencia, valoración, emoción, percepción o comunicación.", ["b1.gram.influencia", "b1.gram.valoracion", "b1.gram.emociones-subjuntivo"], { pcic: "Gramática 15.1" }],
  [1, "gram", "decir-doble-valor", "Decir, insistir, recordar: informar o pedir", "Puedo distinguir me dice que viene (información) de me dice que venga (orden).", ["b2.gram.sustantivas-sistema"], { pcic: "Gramática 15.1" }],
  [1, "voc", "trabajo-equipo", "Trabajo en equipo y liderazgo", "Puedo hablar de delegar, coordinar, exigir, plazos y responsabilidades.", ["b1.voc.trabajo-entrevistas"]],
  [1, "pron", "influencia-mitigada", "Entonación de peticiones indirectas", "Puedo pedir algo de forma indirecta sin sonar autoritario.", ["b1.pron.modalidad-cortesia"]],
  [1, "fun", "pedir-exigir", "Pedir, exigir y negociar tareas", "Puedo transmitir peticiones y negociar responsabilidades en un equipo.", ["b2.gram.decir-doble-valor"]],
  [1, "read", "correo-equipo", "Leer un correo de coordinación", "Puedo distinguir información, peticiones y obligaciones en un correo de trabajo.", []],

  // Week 2 · Quería que vinieras
  [2, "gram", "subjuntivo-imperfecto-usos", "Imperfecto de subjuntivo y correlación", "Puedo aplicar la correlación temporal: me pidió que lo hiciera, me alegró que vinieras.", ["b1.gram.subjuntivo-imperfecto-formas", "b2.gram.sustantivas-sistema"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/preterito-imperfecto-subjuntivo"] }],
  [2, "gram", "como-si", "Como si + imperfecto de subjuntivo", "Puedo comparar con situaciones irreales: habla como si lo supiera todo.", ["b2.gram.subjuntivo-imperfecto-usos"], { pcic: "Gramática 15.3" }],
  [2, "voc", "familia-generaciones", "Generaciones y educación familiar", "Puedo hablar de normas, expectativas y conflictos entre generaciones.", []],
  [2, "pron", "acento-ra-ra", "Hablara frente a hablará", "Puedo distinguir y producir hablara, hablará y hablaría.", ["b1.pron.acento-subjuntivo"]],
  [2, "fun", "recordar-expectativas", "Recordar lo que se esperaba de mí", "Puedo contar qué esperaban, pedían o prohibían otras personas en el pasado.", ["b2.gram.subjuntivo-imperfecto-usos"]],
  [2, "lis", "entrevista-generaciones", "Escuchar una entrevista sobre generaciones", "Puedo identificar la postura de cada generación en una conversación.", []],

  // Week 3 · Que hayas llegado
  [3, "gram", "subjuntivo-compuestos", "Perfecto y pluscuamperfecto de subjuntivo", "Puedo valorar hechos terminados: me alegra que hayas llegado, me sorprendió que no hubiera llamado.", ["b2.gram.subjuntivo-imperfecto-usos"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/preterito-perfecto-subjuntivo", "/sistema-verbal/preterito-pluscuamperfecto-subjuntivo"] }],
  [3, "voc", "logros-fracasos", "Logros, fracasos y aprendizajes", "Puedo hablar de esfuerzo, constancia, frustración, superar y lograr.", []],
  [3, "pron", "compuestos-largos", "Ritmo en formas compuestas largas", "Puedo decir hubiera estado o habría podido sin cortar el grupo verbal.", ["a2.pron.sinalefa-compuestos"]],
  [3, "fun", "valorar-hechos", "Valorar hechos pasados", "Puedo valorar algo que ha pasado o había pasado y reaccionar con matices.", ["b2.gram.subjuntivo-compuestos"]],
  [3, "wri", "carta-felicitacion", "Carta de felicitación o pésame", "Puedo escribir un mensaje formal o cercano que valora un hecho.", []],

  // Week 4 · Si lo hubiera sabido
  [4, "gram", "condicionales-irreales", "Condicionales irreales y mixtas", "Puedo expresar condiciones irreales en presente, en pasado y mixtas.", ["b1.gram.si-hipotetico", "b2.gram.subjuntivo-compuestos"], { pcic: "Gramática 15.3", related: ["/si-fuera-distinto", "/condicionales"] }],
  [4, "gram", "condicional-compuesto", "Condicional compuesto", "Puedo hablar de lo que habría pasado y reprochar con habrías podido.", ["b2.gram.condicionales-irreales"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/condicional-compuesto-indicativo"] }],
  [4, "voc", "decisiones-consecuencias", "Decisiones y consecuencias", "Puedo hablar de arrepentimiento, oportunidades perdidas y alternativas.", ["b1.voc.suenos"]],
  [4, "pron", "reproche", "Entonación del reproche", "Puedo distinguir un reproche de una hipótesis neutra por la entonación.", ["b1.pron.entonacion-condicional"]],
  [4, "fun", "lamentar-reprochar", "Lamentar y reprochar", "Puedo expresar arrepentimiento, reprochar con tacto y responder a un reproche.", ["b2.gram.condicional-compuesto"]],
  [4, "spk", "historia-alternativa", "Historia alternativa", "Puedo contar cómo habría sido mi vida si una decisión hubiera sido distinta.", []],

  [5, "fun", "mediacion-fuentes", "Mediar entre fuentes y participantes", "Puedo sintetizar posiciones, conservar reservas y adaptar la información a otra persona sin inventar acuerdos.", ["b2.fun.pedir-exigir", "b2.fun.valorar-hechos"]],

  // Week 5 · Checkpoint 1
  [5, "rev", "checkpoint-1", "Checkpoint 1: modo y tiempo", "Puedo elegir modo y tiempo en sustantivas y condicionales para pedir, valorar e imaginar.", ["b2.gram.sustantivas-sistema", "b2.gram.subjuntivo-compuestos", "b2.gram.condicionales-irreales"]],
  [5, "lis", "debate-radio", "Escuchar un debate radiofónico", "Puedo seguir dos posturas y sus condiciones en un debate.", []],

  // Week 6 · Aunque
  [6, "gram", "concesivas", "Oraciones concesivas", "Puedo usar aunque + indicativo o subjuntivo según la información, a pesar de (que), por mucho que y si bien.", ["b1.disc.conectores-contraste", "b2.gram.sustantivas-sistema"], { pcic: "Gramática 15.3", related: ["/aunque-cambie-el-dato"] }],
  [6, "voc", "tecnologia-etica", "Tecnología y ética", "Puedo hablar de inteligencia artificial, privacidad, vigilancia y responsabilidad.", ["a2.voc.tecnologia-futuro"]],
  [6, "pron", "concesion", "Prosodia de la concesión", "Puedo marcar con la voz la parte concedida y la parte que defiendo.", ["b1.pron.lectura-argumentos"]],
  [6, "fun", "conceder-objetar", "Conceder y objetar", "Puedo conceder una parte del argumento contrario y mantener mi postura.", ["b2.gram.concesivas"]],
  [6, "read", "columna", "Leer una columna de opinión", "Puedo identificar concesiones, objeciones y la tesis del autor.", []],

  // Week 7 · Cuyo y lo cual
  [7, "gram", "relativas-avanzadas", "Relativas con preposición, cuyo y lo cual", "Puedo usar el que, la cual, cuyo y lo cual, con preposición cuando hace falta.", ["b1.gram.relativos-quien-donde"], { pcic: "Gramática 15.2" }],
  [7, "gram", "explicativas-especificativas", "Especificativas y explicativas", "Puedo distinguir los alumnos que viven lejos de los alumnos, que viven lejos.", ["b2.gram.relativas-avanzadas"], { pcic: "Gramática 15.2" }],
  [7, "voc", "arte-cultura", "Arte, museos y patrimonio", "Puedo describir obras, estilos, autores y patrimonio.", []],
  [7, "pron", "jerarquia-pausas", "Pausas y jerarquía en oraciones largas", "Puedo leer oraciones con varias subordinadas sin perder el hilo.", ["b1.pron.pausas-relativas"]],
  [7, "fun", "describir-precision", "Describir con precisión", "Puedo describir una obra, un lugar o una persona con detalles encadenados.", ["b2.gram.relativas-avanzadas"]],
  [7, "wri", "resena-exposicion", "Reseña de una exposición", "Puedo escribir una reseña con descripción y valoración.", []],

  // Week 8 · Siempre que, a no ser que
  [8, "gram", "condicionales-conectores", "Conectores condicionales", "Puedo usar siempre que, con tal de que, a no ser que, en caso de que y salvo que.", ["b2.gram.condicionales-irreales"], { pcic: "Gramática 15.3" }],
  [8, "gram", "consecutivas", "Oraciones consecutivas", "Puedo expresar consecuencia con tan… que, tanto que, de modo que y así que.", ["a2.disc.conectores-causa-consecuencia"], { pcic: "Gramática 15.3" }],
  [8, "voc", "acuerdos-contratos", "Acuerdos, contratos y condiciones", "Puedo negociar cláusulas, plazos, garantías y penalizaciones.", ["b1.voc.consumo-tramites"]],
  [8, "pron", "foco-solo-si", "Foco en la condición", "Puedo poner el foco en la condición: SOLO si firmamos hoy.", ["b1.pron.enfasis-contraste"]],
  [8, "fun", "negociar-condiciones", "Negociar condiciones", "Puedo proponer, aceptar con condiciones y rechazar una propuesta.", ["b2.gram.condicionales-conectores"]],
  [8, "spk", "negociacion", "Negociación breve", "Puedo negociar un acuerdo de alquiler o de trabajo con condiciones claras.", []],

  // Week 9 · Se informa que…
  [9, "gram", "pasiva-impersonalidad", "Pasiva e impersonalidad", "Puedo usar ser + participio, se pasiva, tercera plural impersonal y uno/una.", ["b1.gram.se-impersonal"], { pcic: "Gramática 12.3" }],
  [9, "voc", "prensa", "Prensa y actualidad", "Puedo entender titulares, secciones y vocabulario periodístico.", ["b1.voc.noticias-sucesos"]],
  [9, "pron", "lectura-noticias", "Leer noticias en voz alta", "Puedo leer una noticia con el ritmo y las pausas de un presentador.", ["b2.pron.jerarquia-pausas"]],
  [9, "fun", "informar-objetivamente", "Informar con distancia", "Puedo presentar hechos sin implicarme y atribuir información a fuentes.", ["b2.gram.pasiva-impersonalidad"]],
  [9, "read", "noticia", "Leer una noticia completa", "Puedo distinguir titular, entradilla, hechos, fuentes y contexto.", ["b1.read.cronica"]],

  // Week 10 · Aseguró que…
  [10, "gram", "estilo-indirecto-avanzado", "Estilo indirecto avanzado", "Puedo transmitir enunciados con todos los cambios temporales y verbos como asegurar, negar, admitir, sugerir y advertir.", ["b1.gram.estilo-indirecto", "b2.gram.decir-doble-valor"], { pcic: "Gramática 15.1" }],
  [10, "voc", "verbos-lengua", "Verbos para citar", "Puedo elegir entre afirmar, reconocer, insinuar, desmentir, reprochar y prometer.", ["b1.voc.verbos-comunicacion"]],
  [10, "pron", "cita-ironia", "Citar con ironía", "Puedo reconocer cuándo alguien cita con ironía o distancia.", ["b1.pron.voz-citas"]],
  [10, "fun", "resumir-declaraciones", "Resumir declaraciones", "Puedo resumir lo que dijeron varias personas y marcar mi distancia.", ["b2.gram.estilo-indirecto-avanzado"]],
  [10, "lis", "rueda-prensa", "Escuchar una rueda de prensa", "Puedo identificar promesas, negaciones y evasivas.", []],

  // Week 10 · Checkpoint 2
  [10, "rev", "checkpoint-2", "Checkpoint 2: conceder, describir e informar", "Puedo conceder y objetar, describir con precisión, negociar condiciones e informar con distancia.", ["b2.gram.concesivas", "b2.gram.relativas-avanzadas", "b2.gram.condicionales-conectores", "b2.gram.estilo-indirecto-avanzado"]],
  [10, "wri", "informe-breve", "Informe breve", "Puedo escribir un informe breve que presenta datos, declaraciones y una recomendación.", []],

  // Week 11 · Argumentar
  [11, "disc", "argumentacion", "Estructura argumentativa", "Puedo organizar tesis, argumentos, contraargumentos y conclusión con conectores variados.", ["b1.disc.estructura-texto", "b2.gram.concesivas"], { pcic: "Funciones 2" }],
  [11, "disc", "posicionamiento", "Marcar la postura", "Puedo marcar mi postura y el grado de certeza: es indudable que, cabe pensar que, no está tan claro que.", ["b2.gram.sustantivas-sistema"]],
  [11, "voc", "ciudad-sostenible", "Urbanismo y movilidad", "Puedo debatir sobre transporte, vivienda, gentrificación y espacio público.", ["a2.voc.ciudades-campo"]],
  [11, "pron", "exposicion-oral", "Ritmo de una exposición oral", "Puedo usar pausas estratégicas y énfasis para hacer clara una exposición.", ["b2.pron.jerarquia-pausas"]],
  [11, "wri", "ensayo-argumentativo", "Ensayo argumentativo", "Puedo escribir un ensayo de 220 palabras con contraargumento.", ["b1.wri.texto-opinion"]],
  [11, "spk", "exposicion", "Exposición de dos minutos", "Puedo defender una propuesta en dos minutos con estructura clara.", []],

  // Week 12 · Habrá sido
  [12, "gram", "probabilidad-pasado", "Probabilidad en el pasado", "Puedo especular sobre el pasado con habrá salido, habría llegado y debió de pasar.", ["b1.gram.probabilidad", "b2.gram.condicional-compuesto"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/futuro-compuesto-indicativo"] }],
  [12, "voc", "investigacion", "Investigación y pruebas", "Puedo hablar de indicios, pruebas, versiones y conclusiones.", ["b1.voc.misterios"]],
  [12, "pron", "conjetura", "Entonación de la conjetura", "Puedo distinguir una afirmación de una conjetura por la prosodia.", ["b1.pron.entonacion-hipotesis"]],
  [12, "fun", "especular-pasado", "Especular sobre lo que pasó", "Puedo formular y descartar hipótesis sobre un hecho pasado.", ["b2.gram.probabilidad-pasado"]],
  [12, "read", "caso", "Leer un caso", "Puedo inferir lo que probablemente pasó a partir de varios documentos.", []],

  // Week 13 · Volverse, hacerse, convertirse
  [13, "gram", "verbos-cambio-sistema", "El sistema de los verbos de cambio", "Puedo elegir entre ponerse, volverse, hacerse, convertirse en, llegar a ser y quedarse.", ["b1.gram.verbos-cambio"], { pcic: "Gramática 9.2" }],
  [13, "gram", "ser-estar-matices", "Ser y estar: matices de percepción", "Puedo usar estar para percepciones y cambios: está muy joven, está carísimo.", ["b1.gram.ser-estar-avanzado"], { pcic: "Gramática 9.1" }],
  [13, "voc", "personalidad", "Personalidad y transformaciones", "Puedo describir rasgos de carácter con matices.", ["a1.voc.descripcion-personas"]],
  [13, "pron", "chile", "Rasgos del español de Chile", "Puedo describir rasgos variables del habla chilena y contrastarlos con una muestra real en clase, sin atribuirlos a una voz sintética.", ["a2.pron.s-aspirada"]],
  [13, "fun", "describir-transformacion", "Describir una transformación", "Puedo contar cómo cambió una persona o un lugar y valorarlo.", ["b2.gram.verbos-cambio-sistema"]],
  [13, "lis", "voces-chile", "Comprender una conversación sobre cambio y variación chilena", "Puedo seguir posiciones sobre cambios sociales y explicar marcadores locales; contrasto la fonética chilena con una muestra real en clase.", []],

  // Week 14 · Se me olvidó
  [14, "gram", "valores-se", "Valores de se", "Puedo distinguir se reflexivo, recíproco, involuntario (se me olvidó) y pronominal con cambio de significado.", ["b1.gram.se-impersonal", "a2.gram.se-lo"], { pcic: "Gramática 7.1" }],
  [14, "voc", "accidentes-cotidianos", "Accidentes y descuidos", "Puedo contar descuidos con se me cayó, se nos olvidó, se le rompió.", []],
  [14, "pron", "cliticos-cadena", "Clíticos en cadena", "Puedo decir se me cayó o se nos fue con el ritmo de una sola palabra.", ["a2.pron.cliticos-acento"]],
  [14, "fun", "disculparse-responsabilidad", "Disculparse y asumir responsabilidad", "Puedo disculparme, presentar algo como involuntario y ofrecer una reparación.", ["b2.gram.valores-se"]],
  [14, "spk", "disculpa", "Disculpa difícil", "Puedo resolver oralmente una situación en la que tengo parte de la culpa.", []],

  // Week 15 · Checkpoint 3
  [15, "rev", "checkpoint-3", "Checkpoint 3: argumentar y especular", "Puedo argumentar, especular sobre el pasado, describir cambios y asumir responsabilidad.", ["b2.disc.argumentacion", "b2.gram.probabilidad-pasado", "b2.gram.verbos-cambio-sistema", "b2.gram.valores-se"]],
  [15, "read", "dossier", "Leer un dossier", "Puedo comparar posturas en varios textos breves sobre un mismo tema.", []],

  // Week 16 · La palabra justa
  [16, "voc", "colocaciones", "Colocaciones frecuentes", "Puedo combinar palabras de forma natural: tomar una decisión, plantear un problema, sacar conclusiones.", []],
  [16, "voc", "formacion-palabras", "Formación de palabras", "Puedo deducir y crear palabras con prefijos y sufijos frecuentes.", []],
  [16, "gram", "nominalizacion", "Nominalización", "Puedo transformar verbos en sustantivos para escribir con concisión.", ["b2.gram.pasiva-impersonalidad"], { pcic: "Gramática 10", related: ["/precision-grupo-nominal-adjetival"] }],
  [16, "pron", "acento-derivados", "Acento en derivados", "Puedo pronunciar carácter/caracteres, régimen/regímenes y adverbios en -mente con dos acentos.", ["a2.pron.palabras-largas"]],
  [16, "wri", "reescritura-precisa", "Reescribir con precisión", "Puedo mejorar un texto sustituyendo verbos comodín y repeticiones.", []],
  [16, "fun", "definir", "Definir y explicar conceptos", "Puedo definir un concepto, dar un ejemplo y diferenciarlo de otro parecido.", ["b2.gram.relativas-avanzadas"]],

  // Week 17 · Con todo respeto
  [17, "fun", "mitigacion", "Cortesía y mitigación", "Puedo suavizar peticiones, críticas y desacuerdos: ¿te importaría que…?, convendría, quizás no sea lo ideal.", ["b1.gram.registro-formal", "b2.gram.sustantivas-sistema"], { pcic: "Tácticas y estrategias pragmáticas 3" }],
  [17, "gram", "importar-que", "¿Te importa que…? y fórmulas con subjuntivo", "Puedo pedir permiso y hacer peticiones indirectas con subjuntivo.", ["b2.gram.subjuntivo-imperfecto-usos"], { pcic: "Gramática 15.1" }],
  [17, "voc", "correspondencia-formal", "Correspondencia profesional", "Puedo usar fórmulas de inicio, cierre y transición en correos formales.", []],
  [17, "pron", "mitigacion-prosodia", "Prosodia de la mitigación", "Puedo suavizar con alargamientos, pausas y un tono más bajo.", ["b2.pron.influencia-mitigada"]],
  [17, "wri", "correo-delicado", "Correo delicado", "Puedo escribir un correo profesional que rechaza una propuesta sin dañar la relación.", []],
  [17, "lis", "reunion", "Escuchar una reunión", "Puedo reconocer desacuerdos mitigados y lo que realmente se decide.", []],

  // Week 18 · O sea…
  [18, "disc", "marcadores-conversacionales", "Marcadores conversacionales", "Puedo usar bueno, pues, vamos, a ver, la verdad es que y hombre/mujer según la intención.", ["a2.disc.turnos"], { pcic: "Gramática 14" }],
  [18, "disc", "reformuladores", "Reformuladores", "Puedo reformular con o sea, es decir, mejor dicho, en otras palabras y vamos.", ["b2.disc.marcadores-conversacionales"]],
  [18, "voc", "expresiones-coloquiales", "Expresiones coloquiales frecuentes", "Puedo entender y usar expresiones frecuentes como dar igual, pasarse, quedar bien o mal.", []],
  [18, "pron", "prosodia-marcadores", "Prosodia de los marcadores", "Puedo dar a bueno o pues valores distintos con la entonación.", ["a2.pron.entonacion-duda"]],
  [18, "fun", "gestionar-conversacion", "Gestionar una conversación", "Puedo ganar tiempo, reformular, interrumpir con educación y retomar.", ["b2.disc.marcadores-conversacionales"]],
  [18, "spk", "conversacion-natural", "Conversación espontánea", "Puedo mantener una conversación de tres minutos sin bloquearme.", []],

  // Week 19 · Contar como un escritor
  [19, "gram", "tiempos-relato", "Tiempos del relato y variación", "Puedo usar el presente histórico y reconozco el uso del perfecto y del indefinido en España y en América.", ["b1.gram.contraste-pasados"], { pcic: "Gramática 9.1" }],
  [19, "voc", "descripcion-literaria", "Descripción literaria", "Puedo describir atmósferas, gestos y sensaciones con precisión.", []],
  [19, "pron", "lectura-expresiva", "Lectura expresiva", "Puedo leer un fragmento narrativo con cambios de ritmo y de voz.", ["b1.pron.entonacion-narrativa"]],
  [19, "read", "cuento", "Leer un microrrelato", "Puedo interpretar el giro final de un microrrelato.", []],
  [19, "wri", "microrrelato", "Escribir un microrrelato", "Puedo escribir un relato de 200 palabras con tiempos del pasado variados.", []],

  // Week 19 · El español del Río de la Plata
  [19, "gram", "voseo", "Voseo", "Puedo reconocer y usar las formas de vos en presente e imperativo (vos tenés, vení, decime).", ["a2.gram.imperativo-afirmativo"], { pcic: "Gramática 9.1", related: ["/argento"] }],
  [19, "gram", "ustedes-vosotros", "Ustedes y vosotros", "Puedo adaptar el plural de segunda persona según la variedad.", ["a1.gram.ser-plural"], { pcic: "Gramática 7.1" }],
  [19, "voc", "lexico-regional", "Léxico regional", "Puedo reconocer variantes léxicas frecuentes: auto/coche/carro, departamento/piso, celular/móvil.", []],
  [19, "pron", "sheismo-voseo", "Sheísmo y acento del voseo", "Puedo producir el acento del voseo y contrastar el sheísmo con una muestra real identificada en clase.", ["a1.pron.n-ll-y"]],
  [19, "fun", "adaptarse-variedad", "Adaptarse a la variedad", "Puedo entender a hablantes de distintas variedades y pedir aclaraciones sobre léxico regional.", ["b2.voc.lexico-regional"]],
  [19, "lis", "rioplatense", "Comprender diálogo con léxico y formas rioplatenses", "Puedo seguir un diálogo con voseo y léxico rioplatense sin confundir síntesis con una muestra de acento verificada.", []],

  // Week 20 · Checkpoint final B2
  [20, "rev", "checkpoint-final", "Checkpoint final B2", "Puedo argumentar, negociar, informar, mitigar y adaptarme a distintas variedades con precisión.", ["b2.rev.checkpoint-3", "b2.fun.mitigacion", "b2.disc.reformuladores", "b2.gram.voseo"]],
  [20, "wri", "texto-final-b2", "Texto final B2", "Puedo escribir 250 palabras argumentativas con concesión, matiz y conclusión.", ["b2.wri.ensayo-argumentativo"]],
]);
