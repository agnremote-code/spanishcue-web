import { defineObjectives } from "../define";

/**
 * B1 — the independent user. 22 weeks: 18 core weeks and 4 checkpoints
 * (5, 11, 16, 22). Spanish-first. The subjunctive enters in week 3 and is
 * recycled through wishes, advice, doubt, emotion, relatives, time and purpose.
 */
export const b1Objectives = defineObjectives("b1", [
  // Week 1 · Lo que había pasado
  [1, "gram", "pluscuamperfecto", "Pretérito pluscuamperfecto", "Puedo situar una acción anterior a otra en el pasado: cuando llegué, el tren ya había salido.", ["a2.gram.indefinido-imperfecto"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/preterito-pluscuamperfecto-indicativo"] }],
  [1, "disc", "marcadores-relato", "Marcadores del relato", "Puedo organizar una historia con en aquel momento, al cabo de, mientras, en cuanto y finalmente.", ["a2.disc.secuenciar"], { pcic: "Gramática 14" }],
  [1, "voc", "viajes-imprevistos", "Viajes e imprevistos", "Puedo contar retrasos, pérdidas, cambios de planes y soluciones.", ["a2.voc.experiencias-viaje"]],
  [1, "pron", "entonacion-narrativa", "Entonación narrativa", "Puedo crear suspense con pausas y tonos suspendidos, y cerrar una historia con un tono descendente.", ["a2.pron.grupos-fonicos"]],
  [1, "fun", "narrar-viaje", "Narrar un viaje con complicaciones", "Puedo contar un viaje que se complicó con antecedentes, hechos y resultado.", ["b1.gram.pluscuamperfecto"]],
  [1, "lis", "anecdota-radio", "Escuchar una anécdota de radio", "Puedo reconstruir el orden real de los hechos de un relato desordenado.", []],

  // Week 2 · Los cuatro pasados
  [2, "gram", "contraste-pasados", "Contraste de los cuatro pasados", "Puedo elegir entre perfecto, indefinido, imperfecto y pluscuamperfecto según la perspectiva.", ["b1.gram.pluscuamperfecto", "a2.gram.perfecto-compuesto"], { pcic: "Gramática 9.1", related: ["/past-b1"] }],
  [2, "voc", "noticias-sucesos", "Sucesos y noticias breves", "Puedo contar un suceso con vocabulario de noticias: ocurrir, testigo, herido, rescatar.", []],
  [2, "pron", "habla-rapida", "Reducciones del habla rápida", "Puedo entender pa, pa'l, ta y otras reducciones frecuentes del habla informal.", ["b1.pron.entonacion-narrativa"]],
  [2, "fun", "reaccionar-relato", "Reaccionar ante un relato", "Puedo mostrar interés, sorpresa o empatía mientras otra persona cuenta algo.", ["a2.fun.anecdota"]],
  [2, "read", "cronica", "Leer una crónica breve", "Puedo distinguir antecedentes, hechos principales y consecuencias en una noticia.", []],

  // Week 3 · Deseos
  [3, "gram", "subjuntivo-presente-formas", "Presente de subjuntivo: formas", "Puedo formar el presente de subjuntivo regular e irregular (tenga, haga, vaya, sea, esté).", ["a1.gram.yo-irregular"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/presente-de-subjuntivo"] }],
  [3, "gram", "deseos", "Expresar deseos", "Puedo expresar deseos con ojalá, espero que, quiero que y que + subjuntivo.", ["b1.gram.subjuntivo-presente-formas"], { pcic: "Gramática 15.1" }],
  [3, "voc", "celebraciones-deseos", "Fórmulas para desear", "Puedo felicitar y desear algo con que te vaya bien, que lo pases bien y similares.", ["a1.voc.fiestas"]],
  [3, "pron", "acento-subjuntivo", "Acento en las formas de subjuntivo", "Puedo distinguir hable de hablé y este de esté al oír y al escribir.", ["a2.pron.acento-tiempos"]],
  [3, "fun", "desear", "Desear y felicitar", "Puedo expresar deseos para otra persona en distintas situaciones.", ["b1.gram.deseos"]],
  [3, "wri", "mensaje-deseos", "Mensaje de despedida", "Puedo escribir un mensaje de despedida o de ánimo con deseos variados.", []],

  // Week 4 · Consejos
  [4, "gram", "influencia", "Recomendar y pedir con subjuntivo", "Puedo recomendar, pedir y aconsejar con te recomiendo que, es importante que y es mejor que.", ["b1.gram.deseos", "a2.gram.consejos-deberias"], { pcic: "Gramática 15.1" }],
  [4, "gram", "imperativo-negativo", "Imperativo negativo", "Puedo decir lo que no hay que hacer: no vayas, no se preocupe, no lo toques.", ["b1.gram.subjuntivo-presente-formas", "a2.gram.imperativo-pronombres"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/imperativo"] }],
  [4, "voc", "bienestar", "Bienestar y hábitos sanos", "Puedo hablar de estrés, sueño, alimentación y descanso.", ["a2.voc.cuerpo-salud"]],
  [4, "pron", "entonacion-consejo", "Entonación del consejo", "Puedo sonar cercano o firme al aconsejar según la entonación.", ["a2.pron.cortesia-entonacion"]],
  [4, "fun", "aconsejar", "Aconsejar y advertir", "Puedo aconsejar a alguien, advertir de un riesgo y reaccionar a un consejo.", ["b1.gram.influencia"]],
  [4, "spk", "consejo-audio", "Consejo en un audio", "Puedo grabar un consejo razonado para un amigo con un problema.", []],

  // Week 5 · Checkpoint 1
  [5, "rev", "checkpoint-1", "Checkpoint 1: narrar y aconsejar", "Puedo contar una experiencia con los cuatro pasados y responder con deseos y consejos.", ["b1.gram.contraste-pasados", "b1.gram.deseos", "b1.gram.influencia"]],
  [5, "lis", "podcast-consejos", "Escuchar un consultorio", "Puedo identificar el problema y los consejos en un programa de radio.", []],

  // Week 6 · Creo que… / No creo que…
  [6, "gram", "opinion-subjuntivo", "Opinión: indicativo y subjuntivo", "Puedo usar creo que + indicativo y no creo que + subjuntivo.", ["a2.gram.opinion-indicativo", "b1.gram.subjuntivo-presente-formas"], { pcic: "Gramática 15.1" }],
  [6, "gram", "valoracion", "Es verdad que / es posible que", "Puedo distinguir afirmar (es verdad que + indicativo) de valorar o dudar (es posible que + subjuntivo).", ["b1.gram.opinion-subjuntivo"], { pcic: "Gramática 15.1" }],
  [6, "voc", "medios-redes", "Medios y redes sociales", "Puedo hablar de noticias falsas, algoritmos, influencia y privacidad.", ["a2.voc.temas-sociales"]],
  [6, "pron", "duda-certeza", "Entonación de duda y certeza", "Puedo sonar seguro o dudoso con la misma frase.", ["a2.pron.entonacion-duda"]],
  [6, "fun", "opinar-matizar", "Opinar y matizar", "Puedo dar una opinión, matizarla y mostrar duda.", ["b1.gram.valoracion"]],
  [6, "read", "articulo-opinion", "Leer un artículo de opinión", "Puedo separar hechos de opiniones y detectar la postura del autor.", []],

  // Week 7 · Emociones
  [7, "gram", "emociones-subjuntivo", "Reaccionar con emociones", "Puedo reaccionar con me alegra que, me molesta que, me preocupa que + subjuntivo.", ["b1.gram.subjuntivo-presente-formas", "a1.gram.gustar"], { pcic: "Gramática 15.1" }],
  [7, "gram", "mismo-sujeto", "Mismo sujeto: infinitivo", "Puedo elegir entre me alegra verte (mismo sujeto) y me alegra que vengas (sujetos distintos).", ["b1.gram.emociones-subjuntivo"], { pcic: "Gramática 15.1" }],
  [7, "voc", "sentimientos", "Sentimientos y estados de ánimo", "Puedo nombrar emociones con precisión: agobio, alivio, orgullo, decepción.", []],
  [7, "pron", "entonacion-emocion", "La emoción en la voz", "Puedo reconocer y producir alegría, fastidio o sorpresa en la entonación.", ["a1.pron.entonacion-exclamativa"]],
  [7, "fun", "expresar-sentimientos", "Expresar sentimientos", "Puedo explicar cómo me siento ante una situación y por qué.", ["b1.gram.emociones-subjuntivo"]],
  [7, "wri", "correo-personal", "Correo personal con emociones", "Puedo escribir un correo personal que reacciona a noticias.", []],

  // Week 8 · Lo que busco
  [8, "gram", "relativas-modo", "Relativas con indicativo y subjuntivo", "Puedo distinguir tengo un piso que tiene… de busco un piso que tenga….", ["a2.gram.relativo-que", "b1.gram.subjuntivo-presente-formas"], { pcic: "Gramática 15.2", related: ["/la-persona-que-tengo-en-mente"] }],
  [8, "gram", "relativos-quien-donde", "El que, quien, donde, lo que", "Puedo usar el que, la que, quien, donde y lo que.", ["a2.gram.relativo-que"], { pcic: "Gramática 15.2" }],
  [8, "voc", "vivienda-convivencia", "Vivienda y convivencia", "Puedo hablar de compartir piso, normas y problemas de convivencia.", ["a1.voc.casa"]],
  [8, "pron", "pausas-relativas", "Pausas en las relativas", "Puedo marcar la diferencia oral entre relativas con y sin comas.", ["a2.pron.grupos-fonicos"]],
  [8, "fun", "describir-ideal", "Describir lo que se busca", "Puedo describir a la persona o el lugar ideal que busco.", ["b1.gram.relativas-modo"]],
  [8, "lis", "anuncios-busco", "Escuchar anuncios de búsqueda", "Puedo identificar requisitos en anuncios de piso o de trabajo.", []],

  // Week 9 · Yo que tú
  [9, "gram", "condicional-simple", "Condicional simple", "Puedo aconsejar (yo que tú, yo en tu lugar), pedir con cortesía y expresar deseos con el condicional.", ["a2.gram.condicional-cortesia"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/condicional-simple-indicativo"] }],
  [9, "voc", "trabajo-entrevistas", "Trabajo y entrevistas", "Puedo hablar de puestos, requisitos, salarios, horarios y condiciones.", ["a2.voc.estudio-trabajo"]],
  [9, "pron", "modalidad-cortesia", "Cortesía y modalidad", "Puedo suavizar una petición con condicional y entonación descendente amable.", ["a2.pron.cortesia-entonacion"]],
  [9, "fun", "entrevista-trabajo", "Entrevista de trabajo", "Puedo presentar mi experiencia y responder preguntas en una entrevista.", ["b1.gram.condicional-simple"]],
  [9, "spk", "entrevista-simulada", "Entrevista simulada", "Puedo responder a cinco preguntas de entrevista con ejemplos concretos.", []],

  // Week 10 · Probablemente
  [10, "gram", "probabilidad", "Hipótesis y probabilidad", "Puedo hacer hipótesis con el futuro y el condicional de probabilidad y con a lo mejor, quizás y tal vez.", ["b1.gram.condicional-simple", "a2.gram.futuro-simple"], { pcic: "Gramática 9.1" }],
  [10, "voc", "misterios", "Misterios y explicaciones", "Puedo explicar fenómenos raros: desaparecer, sospechar, una pista, una explicación lógica.", []],
  [10, "pron", "entonacion-hipotesis", "Entonación de hipótesis", "Puedo expresar suposición con tono suspendido y voz menos asertiva.", ["b1.pron.duda-certeza"]],
  [10, "fun", "suponer", "Suponer y especular", "Puedo especular sobre causas y reaccionar a las hipótesis de otros.", ["b1.gram.probabilidad"]],
  [10, "read", "relato-misterio", "Leer un relato de misterio", "Puedo usar pistas del texto para inferir lo que pasó.", []],

  // Week 11 · Checkpoint 2
  [11, "rev", "checkpoint-2", "Checkpoint 2: opinar, sentir y suponer", "Puedo opinar, reaccionar con emociones, describir lo que busco y especular.", ["b1.gram.opinion-subjuntivo", "b1.gram.emociones-subjuntivo", "b1.gram.relativas-modo", "b1.gram.probabilidad"]],
  [11, "wri", "foro", "Intervención en un foro", "Puedo escribir una intervención de foro que opina y responde a otros.", []],

  // Week 12 · Cuando llegue
  [12, "gram", "temporales-subjuntivo", "Cuando + subjuntivo", "Puedo distinguir cuando llego (habitual) de cuando llegue (futuro) y usar hasta que, en cuanto y antes de que.", ["b1.gram.subjuntivo-presente-formas", "a2.gram.antes-despues-inf"], { pcic: "Gramática 15.3", related: ["/antes-despues-cuando"] }],
  [12, "voc", "proyectos-metas", "Proyectos y metas", "Puedo hablar de metas, plazos, logros y planes a medio plazo.", []],
  [12, "pron", "enlaces-rapidos", "Enlaces vocálicos rápidos", "Puedo entender y producir voy a ir o lo he hecho con enlaces naturales.", ["a2.pron.sinalefa-compuestos"]],
  [12, "fun", "planificar-condiciones", "Planificar con condiciones de tiempo", "Puedo explicar planes que dependen de cuándo pase algo.", ["b1.gram.temporales-subjuntivo"]],
  [12, "lis", "mensaje-planes", "Escuchar planes encadenados", "Puedo reconstruir la secuencia de un plan a partir de un mensaje de voz.", []],

  // Week 13 · Para que
  [13, "gram", "finales", "Para + infinitivo / para que + subjuntivo", "Puedo expresar finalidad con el mismo sujeto o con sujetos distintos.", ["a2.gram.por-para", "b1.gram.mismo-sujeto"], { pcic: "Gramática 15.3" }],
  [13, "disc", "causales", "Porque, como, ya que, es que", "Puedo elegir el conector causal según la posición y la intención.", ["a2.disc.conectores-causa-consecuencia"], { pcic: "Gramática 15.3" }],
  [13, "voc", "medio-ambiente", "Medio ambiente", "Puedo hablar de reciclaje, consumo, energía y cambio climático.", []],
  [13, "pron", "enfasis-contraste", "Énfasis contrastivo", "Puedo marcar el contraste: no lo hago POR ti, lo hago PARA ti.", ["a2.pron.foco-contraste"]],
  [13, "fun", "justificar", "Justificar acciones y propuestas", "Puedo justificar una propuesta con causa y finalidad.", ["b1.gram.finales"]],
  [13, "read", "campana", "Leer una campaña", "Puedo identificar el objetivo y los argumentos de una campaña.", []],

  // Week 14 · Dice que…
  [14, "gram", "estilo-indirecto", "Estilo indirecto", "Puedo transmitir lo que alguien dice o dijo con los cambios de tiempo, persona y referencias.", ["b1.gram.contraste-pasados"], { pcic: "Gramática 15.1" }],
  [14, "gram", "preguntas-indirectas", "Preguntas indirectas", "Puedo transmitir preguntas con si, qué, dónde y cuándo.", ["b1.gram.estilo-indirecto"], { pcic: "Gramática 15.1" }],
  [14, "voc", "verbos-comunicacion", "Verbos de comunicación", "Puedo usar contar, explicar, comentar, preguntar, pedir y avisar.", []],
  [14, "pron", "voz-citas", "Cambiar la voz al citar", "Puedo marcar con la voz cuándo cito a otra persona.", ["b1.pron.entonacion-narrativa"]],
  [14, "fun", "transmitir", "Transmitir mensajes", "Puedo transmitir un mensaje, una pregunta o una petición de otra persona.", ["b1.gram.estilo-indirecto"]],
  [14, "wri", "resumen-conversacion", "Resumir una conversación", "Puedo resumir por escrito una conversación para alguien que no estuvo.", []],

  // Week 15 · Ser, estar y se
  [15, "gram", "ser-estar-avanzado", "Ser y estar con cambio de significado", "Puedo usar ser/estar listo, aburrido, rico, malo y estar + participio.", ["a1.gram.ser-estar-hay"], { pcic: "Gramática 9.1" }],
  [15, "gram", "se-impersonal", "Se impersonal y se pasiva refleja", "Puedo hablar de forma general: se dice, se venden pisos, aquí se vive bien.", ["a1.gram.reflexivos"], { pcic: "Gramática 7.1" }],
  [15, "voc", "costumbres", "Costumbres y normas sociales", "Puedo hablar de costumbres, horarios y normas de distintos países.", []],
  [15, "pron", "r-andina", "Variación andina", "Puedo reconocer la r asibilada y las vocales del español andino.", ["a1.pron.r-rr"]],
  [15, "fun", "describir-costumbres", "Describir costumbres", "Puedo explicar qué se hace y qué no se hace en mi cultura.", ["b1.gram.se-impersonal"]],
  [15, "lis", "costumbres-variedades", "Escuchar voces de distintos países", "Puedo comparar costumbres explicadas por hablantes de distintas variedades.", []],

  // Week 16 · Checkpoint 3
  [16, "rev", "checkpoint-3", "Checkpoint 3: planificar, justificar y transmitir", "Puedo planificar, justificar con causa y finalidad, transmitir mensajes y describir costumbres.", ["b1.gram.temporales-subjuntivo", "b1.gram.finales", "b1.gram.estilo-indirecto", "b1.gram.se-impersonal"]],
  [16, "read", "reportaje", "Leer un reportaje", "Puedo integrar información de un reportaje de varias secciones.", []],

  // Week 17 · Cambios
  [17, "gram", "verbos-cambio", "Verbos de cambio", "Puedo usar ponerse, quedarse, volverse y hacerse para hablar de cambios.", ["b1.gram.ser-estar-avanzado"], { pcic: "Gramática 9.2" }],
  [17, "gram", "llevar-gerundio", "Llevar + gerundio y hace… que", "Puedo expresar duración con llevo dos años viviendo aquí y hace dos años que vivo aquí.", ["a2.gram.perifrasis-fase"], { pcic: "Gramática 9.2" }],
  [17, "voc", "vida-cambios", "Grandes cambios de vida", "Puedo hablar de mudanzas, migración, cambios de carrera y adaptación.", []],
  [17, "pron", "j-variacion", "La jota en distintas variedades", "Puedo reconocer la jota fuerte del centro de España y la aspirada del Caribe y Andalucía.", ["a1.pron.j-g"]],
  [17, "fun", "contar-cambios", "Contar un cambio de vida", "Puedo contar un cambio personal y cómo me afectó.", ["b1.gram.verbos-cambio"]],
  [17, "spk", "historia-cambio", "Historia de un cambio", "Puedo contar en dos minutos un cambio importante con duración y consecuencias.", []],

  // Week 18 · Si tuviera…
  [18, "gram", "subjuntivo-imperfecto-formas", "Imperfecto de subjuntivo: formas", "Puedo formar el imperfecto de subjuntivo a partir del indefinido (tuvieron → tuviera).", ["a2.gram.indefinido-irregular"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/preterito-imperfecto-subjuntivo"] }],
  [18, "gram", "si-hipotetico", "Condiciones hipotéticas", "Puedo imaginar situaciones con si + imperfecto de subjuntivo + condicional.", ["b1.gram.subjuntivo-imperfecto-formas", "a2.gram.si-presente"], { pcic: "Gramática 15.3", related: ["/condicionales-b1"] }],
  [18, "voc", "suenos", "Sueños y alternativas", "Puedo hablar de vidas alternativas, deseos y dilemas.", []],
  [18, "pron", "entonacion-condicional", "Entonación de las condicionales", "Puedo subir el tono en la condición y bajarlo en la consecuencia.", ["b1.pron.entonacion-hipotesis"]],
  [18, "fun", "imaginar", "Imaginar y plantear dilemas", "Puedo plantear un dilema hipotético y responder a uno.", ["b1.gram.si-hipotetico"]],
  [18, "lis", "dilemas", "Escuchar un debate de dilemas", "Puedo seguir las opciones y razones en un intercambio hipotético.", []],

  // Week 19 · Organizar un texto
  [19, "disc", "conectores-contraste", "Contraste y adición", "Puedo usar sin embargo, aunque + indicativo, además, por un lado / por otro y en cambio.", ["a2.disc.conectores-causa-consecuencia"], { pcic: "Gramática 14", related: ["/pero-hay-un-matiz"] }],
  [19, "disc", "estructura-texto", "Estructurar un texto de opinión", "Puedo organizar una introducción, dos argumentos y una conclusión.", ["b1.disc.conectores-contraste"]],
  [19, "voc", "educacion", "Educación y aprendizaje", "Puedo hablar de sistemas educativos, métodos y aprendizaje en línea.", []],
  [19, "pron", "lectura-argumentos", "Leer en voz alta un argumento", "Puedo leer un texto argumentativo con pausas en los conectores.", ["a2.pron.conectores-entonacion"]],
  [19, "wri", "texto-opinion", "Texto de opinión", "Puedo escribir un texto de opinión de 150 palabras con estructura clara.", ["b1.disc.estructura-texto"]],
  [19, "read", "argumentos", "Leer un texto argumentativo", "Puedo identificar tesis, argumentos y conclusión.", []],

  // Week 20 · Trámites y quejas
  [20, "fun", "quejarse-formal", "Quejas y reclamaciones formales", "Puedo presentar una queja formal, exigir una solución y negociar una compensación.", ["a2.fun.reclamar"], { pcic: "Funciones 3" }],
  [20, "gram", "registro-formal", "Registro formal: usted y fórmulas", "Puedo adaptar el registro con usted, fórmulas de saludo y despedida y condicional de cortesía.", ["b1.gram.condicional-simple"], { pcic: "Funciones 4" }],
  [20, "voc", "consumo-tramites", "Consumo y trámites", "Puedo hablar de garantías, reembolsos, plazos, facturas y formularios.", ["a2.voc.compras-online"]],
  [20, "pron", "llamada-formal", "Claridad en una llamada formal", "Puedo deletrear, dictar números y confirmar datos con claridad.", ["a2.pron.palabras-largas"]],
  [20, "wri", "reclamacion", "Carta de reclamación", "Puedo escribir una reclamación formal con hechos, petición y plazo.", []],
  [20, "lis", "llamada-servicio", "Escuchar una llamada de reclamación", "Puedo seguir una negociación telefónica y anotar el acuerdo.", []],

  // Week 21 · Preposiciones y verbos
  [21, "gram", "verbos-preposicion", "Verbos con preposición", "Puedo usar pensar en, soñar con, acordarse de, depender de, confiar en y otros.", ["a2.gram.por-para"], { pcic: "Gramática 12.2", related: ["/verbos-que-piden-una-estructura"] }],
  [21, "gram", "por-para-ampliacion", "Por y para: usos ampliados", "Puedo usar por y para en expresiones como por fin, para nada, por si acaso y estar por.", ["a2.gram.por-para"], { pcic: "Gramática 8" }],
  [21, "voc", "relaciones", "Relaciones personales", "Puedo hablar de amistad, pareja, conflictos y reconciliación.", []],
  [21, "pron", "reducciones-preposiciones", "Preposiciones en el habla rápida", "Puedo entender pa'l, de el → del y al en habla espontánea.", ["b1.pron.habla-rapida"]],
  [21, "fun", "hablar-relaciones", "Hablar de relaciones", "Puedo describir una relación, un conflicto y cómo se resolvió.", ["b1.gram.verbos-preposicion"]],
  [21, "spk", "conflicto", "Mediar en un conflicto", "Puedo proponer soluciones a un conflicto entre dos amigos.", []],

  // Week 22 · Checkpoint final B1
  [22, "rev", "checkpoint-final", "Checkpoint final B1", "Puedo narrar, opinar, argumentar, imaginar, reclamar y transmitir información en situaciones variadas.", ["b1.rev.checkpoint-3", "b1.gram.si-hipotetico", "b1.disc.estructura-texto", "b1.fun.quejarse-formal"]],
  [22, "wri", "texto-final-b1", "Texto final B1", "Puedo escribir 180 palabras que narran una experiencia y argumentan qué aprendí.", ["b1.wri.texto-opinion"]],
]);
