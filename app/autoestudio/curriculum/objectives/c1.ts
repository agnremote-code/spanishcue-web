import { defineObjectives } from "../define";

/**
 * C1 — the proficient user. 20 weeks: 16 core weeks and 4 checkpoints (5, 10,
 * 15, 20). Spanish only. Focus shifts from forms to discourse,
 * register, implicit meaning, reformulation and lexical precision.
 */
export const c1Objectives = defineObjectives("c1", [
  // Week 1 · El hecho de que
  [1, "gram", "sustantivas-matices", "Modo en sustantivas: matices", "Puedo explicar cambios de significado según el modo: siento que + indicativo/subjuntivo, comprendo que…, el hecho de que….", ["b2.gram.sustantivas-sistema"], { pcic: "Gramática 15.1", related: ["/subjuntivo-pais-maravillas"] }],
  [1, "disc", "registro-academico", "Registro académico", "Puedo reconocer y usar rasgos del registro académico: impersonalidad, precisión, atenuación.", ["b2.gram.pasiva-impersonalidad"]],
  [1, "voc", "ciencia-divulgacion", "Ciencia y divulgación", "Puedo hablar de hipótesis, hallazgos, metodología y evidencia.", ["b2.voc.investigacion"]],
  [1, "pron", "lectura-academica", "Lectura académica en voz alta", "Puedo leer un párrafo académico con pausas que reflejan su estructura lógica.", ["b2.pron.exposicion-oral"]],
  [1, "lis", "conferencia", "Escuchar una conferencia breve", "Puedo tomar notas jerarquizadas de una charla de divulgación.", []],
  [1, "fun", "matizar-interpretacion", "Matizar una interpretación", "Puedo distinguir lo que se sabe, lo que se supone y lo que se interpreta.", ["c1.gram.sustantivas-matices"]],

  // Week 2 · Un estilo nominal
  [2, "gram", "nominalizacion-avanzada", "Nominalización y condensación", "Puedo condensar información con nominalizaciones y grupos nominales complejos.", ["b2.gram.nominalizacion"], { pcic: "Gramática 10–11", related: ["/cuando-una-frase-puede-significar-dos-cosas"] }],
  [2, "voc", "economia-sociedad", "Economía y sociedad", "Puedo hablar de desigualdad, crecimiento, empleo y políticas públicas.", []],
  [2, "pron", "incisos", "Incisos y enumeraciones", "Puedo marcar incisos con un tono más bajo y enumeraciones complejas con claridad.", ["c1.pron.lectura-academica"]],
  [2, "read", "informe", "Leer un informe", "Puedo extraer datos, tendencias y conclusiones de un informe denso.", ["b2.read.noticia"]],
  [2, "wri", "resumen-tecnico", "Resumen técnico", "Puedo resumir un informe en un párrafo condensado y fiel.", ["b1.wri.resumen-conversacion"]],

  // Week 3 · Es aquí donde…
  [3, "gram", "perifrasis-relativo", "Oraciones hendidas y pseudohendidas", "Puedo focalizar información con es aquí donde, lo que me preocupa es y fue ella quien.", ["b2.gram.relativas-avanzadas"], { pcic: "Gramática 15.2" }],
  [3, "disc", "estructura-informativa", "Tema y foco", "Puedo ordenar la información para destacar lo nuevo o lo importante.", ["c1.gram.perifrasis-relativo"]],
  [3, "voc", "comunicacion-medios", "Comunicación y discurso público", "Puedo hablar de mensajes, discursos, campañas y narrativas.", ["b2.voc.prensa"]],
  [3, "pron", "foco-prosodico", "Foco prosódico", "Puedo combinar estructura y acento para focalizar: fue ELLA quien lo dijo.", ["b1.pron.enfasis-contraste"]],
  [3, "spk", "presentacion-foco", "Presentación con énfasis", "Puedo presentar un problema destacando lo esencial.", []],

  // Week 4 · Aun cuando
  [4, "gram", "conectores-matices", "Conectores con matices", "Puedo usar aun cuando, siempre y cuando, como + subjuntivo (condición o amenaza), de + infinitivo y con lo que.", ["b2.gram.condicionales-conectores", "b2.gram.concesivas"], { pcic: "Gramática 15.3" }],
  [4, "voc", "derecho-normas", "Normas, derechos y obligaciones", "Puedo hablar de leyes, derechos, sanciones y excepciones.", []],
  [4, "pron", "peninsular", "Variación peninsular", "Puedo reconocer la distinción, el seseo andaluz, la aspiración y el ceceo.", ["a1.pron.c-z-s"]],
  [4, "fun", "advertir-condicionar", "Condicionar y advertir", "Puedo poner condiciones finas, advertir y amenazar con cortesía o sin ella.", ["c1.gram.conectores-matices"]],
  [4, "read", "normativa", "Leer un texto normativo", "Puedo interpretar condiciones y excepciones en un reglamento.", []],

  // Week 5 · Checkpoint 1
  [5, "rev", "checkpoint-1", "Checkpoint 1: precisión y foco", "Puedo matizar el modo, condensar información, focalizar y condicionar con precisión.", ["c1.gram.sustantivas-matices", "c1.gram.nominalizacion-avanzada", "c1.gram.perifrasis-relativo", "c1.gram.conectores-matices"]],
  [5, "lis", "debate-academico", "Escuchar un debate académico", "Puedo resumir las posturas y las condiciones de un debate entre especialistas.", []],

  // Week 6 · Vengo diciendo
  [6, "gram", "perifrasis-aspecto", "Perífrasis aspectuales y modales", "Puedo usar venir/andar/ir + gerundio, llegar a, tener + participio y dar por + participio.", ["b1.gram.llevar-gerundio"], { pcic: "Gramática 9.2", related: ["/la-accion-vista-desde-dentro"] }],
  [6, "voc", "habla-coloquial", "Lengua coloquial", "Puedo reconocer intensificadores, muletillas y expresiones del habla espontánea.", ["b2.voc.expresiones-coloquiales"]],
  [6, "pron", "habla-espontanea", "Ritmo del habla espontánea", "Puedo entender alargamientos, solapamientos y reinicios en una conversación real.", ["b1.pron.habla-rapida"]],
  [6, "lis", "conversacion-real", "Escuchar una conversación espontánea", "Puedo seguir una conversación con interrupciones y sobreentendidos.", []],
  [6, "fun", "insistir-quejarse", "Insistir y protestar", "Puedo insistir, mostrar hartazgo o paciencia con perífrasis y entonación.", ["c1.gram.perifrasis-aspecto"]],

  // Week 7 · Lo que no se dice
  [7, "disc", "implicaturas", "Implicaturas y sobreentendidos", "Puedo inferir lo que alguien quiere decir sin decirlo.", ["b2.fun.mitigacion"], { pcic: "Tácticas y estrategias pragmáticas" }],
  [7, "disc", "ironia-receptiva", "Ironía", "Puedo reconocer la ironía por el contexto, el léxico y la entonación.", ["c1.disc.implicaturas"]],
  [7, "voc", "relaciones-sociales", "Relaciones sociales y tensiones", "Puedo hablar de malentendidos, indirectas, tensiones y diplomacia.", ["b1.voc.relaciones"]],
  [7, "pron", "ironia", "Entonación irónica", "Puedo identificar la entonación irónica frente a la literal.", ["b2.pron.cita-ironia"]],
  [7, "read", "dialogo-teatral", "Leer un diálogo con subtexto", "Puedo interpretar lo que cada personaje busca en un diálogo.", []],

  // Week 8 · Pedir sin pedir
  [8, "fun", "peticiones-indirectas", "Peticiones y rechazos indirectos", "Puedo pedir, rechazar y criticar de forma indirecta adecuada a la relación.", ["b2.fun.mitigacion"], { pcic: "Funciones 3" }],
  [8, "gram", "atenuacion-gramatical", "Atenuación gramatical", "Puedo atenuar con imperfecto de cortesía, condicional, futuro y construcciones impersonales.", ["b2.gram.importar-que"], { pcic: "Gramática 9.1" }],
  [8, "voc", "mundo-laboral", "Cultura laboral", "Puedo hablar de jerarquías, feedback, conflictos y negociación en el trabajo.", ["b2.voc.trabajo-equipo"]],
  [8, "pron", "prosodia-indirecta", "Prosodia de lo indirecto", "Puedo sonar diplomático sin perder claridad.", ["b2.pron.mitigacion-prosodia"]],
  [8, "spk", "feedback-dificil", "Dar feedback difícil", "Puedo dar una crítica constructiva a un colega sin herir.", []],

  // Week 9 · En otras palabras
  [9, "disc", "reformulacion", "Reformular y parafrasear", "Puedo reformular una idea con otras palabras, simplificarla o hacerla más técnica.", ["b2.disc.reformuladores"]],
  [9, "disc", "sintesis", "Sintetizar varias fuentes", "Puedo combinar información de varias fuentes en un texto propio.", ["c1.wri.resumen-tecnico"]],
  [9, "voc", "salud-publica", "Salud pública", "Puedo hablar de prevención, sistemas sanitarios y comunicación de riesgos.", ["b1.voc.bienestar"]],
  [9, "pron", "resumen-oral", "Resumir en voz alta", "Puedo resumir oralmente con un ritmo que marca lo principal y lo secundario.", ["c1.pron.foco-prosodico"]],
  [9, "wri", "sintesis-fuentes", "Síntesis de fuentes", "Puedo escribir una síntesis de 220 palabras a partir de dos textos y un audio.", []],

  // Week 10 · Checkpoint 2
  [10, "rev", "checkpoint-2", "Checkpoint 2: implícitos y reformulación", "Puedo entender lo implícito, pedir y criticar indirectamente, reformular y sintetizar.", ["c1.disc.implicaturas", "c1.fun.peticiones-indirectas", "c1.disc.reformulacion", "c1.gram.perifrasis-aspecto"]],
  [10, "read", "ensayo", "Leer un ensayo", "Puedo seguir la argumentación de un ensayo y detectar sus supuestos.", []],

  // Week 11 · Contraargumentar
  [11, "disc", "contraargumentacion", "Contraargumentación", "Puedo refutar, conceder estratégicamente y reformular la postura del otro.", ["b2.disc.argumentacion"]],
  [11, "disc", "atenuar-intensificar", "Atenuar e intensificar la postura", "Puedo usar cabe señalar, conviene matizar, resulta innegable y ni mucho menos.", ["b2.disc.posicionamiento"]],
  [11, "voc", "politica-debate", "Debate público", "Puedo hablar de propuestas, medidas, consenso y polarización.", []],
  [11, "pron", "debate-prosodia", "Prosodia del debate", "Puedo retomar el turno y enfatizar sin sonar agresivo.", ["c1.pron.prosodia-indirecta"]],
  [11, "spk", "debate", "Debate de cuatro minutos", "Puedo defender una postura y refutar dos objeciones.", []],

  // Week 12 · La palabra precisa
  [12, "voc", "verbos-precisos", "Verbos precisos", "Puedo sustituir hacer, poner, decir y tener por verbos precisos: realizar, plantear, señalar, poseer.", ["b2.voc.colocaciones"]],
  [12, "voc", "registro-lexico", "Léxico según el registro", "Puedo elegir entre equivalentes coloquiales, neutros y formales.", []],
  [12, "pron", "acentuacion-culta", "Acentuación de cultismos", "Puedo pronunciar con seguridad palabras cultas y extranjerismos adaptados.", ["b2.pron.acento-derivados"]],
  [12, "wri", "revision-registro", "Revisar el registro", "Puedo reescribir un texto informal como texto formal y al revés.", ["b2.wri.reescritura-precisa"]],
  [12, "fun", "adecuar-registro", "Adecuar el registro", "Puedo cambiar de registro según el interlocutor y la situación.", ["c1.voc.registro-lexico"]],

  // Week 13 · De que / que
  [13, "gram", "regimen-preposicional", "Régimen preposicional avanzado", "Puedo usar con seguridad preposiciones regidas y evitar el dequeísmo y el queísmo.", ["b1.gram.verbos-preposicion"], { pcic: "Gramática 12.2", related: ["/verbos-que-piden-una-estructura"] }],
  [13, "voc", "educacion-superior", "Universidad e investigación", "Puedo hablar de becas, tesis, publicaciones y evaluación.", []],
  [13, "pron", "enlaces-cultos", "Enlaces en el registro formal", "Puedo mantener enlaces naturales en un discurso formal sin sobrearticular.", ["b1.pron.enlaces-rapidos"]],
  [13, "wri", "correo-academico", "Correo académico", "Puedo escribir a una institución con precisión formal.", []],
  [13, "read", "convocatoria", "Leer una convocatoria", "Puedo interpretar requisitos y plazos de una convocatoria.", []],

  // Week 14 · Escuchar lo complejo
  [14, "lis", "notas-jerarquia", "Tomar notas de un discurso largo", "Puedo tomar notas jerarquizadas de un discurso de cinco minutos.", ["c1.lis.conferencia"]],
  [14, "disc", "marcadores-discurso-oral", "Marcadores del discurso oral formal", "Puedo reconocer cómo se organiza una ponencia: en primer término, a continuación, para concluir.", ["b2.disc.argumentacion"]],
  [14, "voc", "cultura-identidad", "Cultura, identidad y memoria", "Puedo hablar de memoria histórica, identidad y patrimonio.", []],
  [14, "pron", "variedades-hispanas", "Variedades en contacto", "Puedo identificar rasgos de varias variedades en una mesa redonda.", ["b2.pron.sheismo-voseo", "c1.pron.peninsular"]],
  [14, "spk", "resumen-ponencia", "Resumir una ponencia", "Puedo resumir oralmente una ponencia y añadir mi valoración.", []],

  // Week 15 · Checkpoint 3
  [15, "rev", "checkpoint-3", "Checkpoint 3: debatir con precisión", "Puedo contraargumentar, elegir la palabra precisa, adecuar el registro y seguir discursos complejos.", ["c1.disc.contraargumentacion", "c1.voc.verbos-precisos", "c1.gram.regimen-preposicional", "c1.lis.notas-jerarquia"]],
  [15, "wri", "articulo-opinion", "Artículo de opinión", "Puedo escribir un artículo de opinión de 300 palabras para una revista.", []],

  // Week 16 · El orden importa
  [16, "gram", "orden-palabras", "Orden de palabras y dislocación", "Puedo usar la tematización y la duplicación con clíticos: el informe, ya lo he leído.", ["c1.disc.estructura-informativa"], { pcic: "Gramática 12.3" }],
  [16, "voc", "medios-digitales", "Ecosistema digital", "Puedo hablar de plataformas, viralidad, moderación y desinformación.", ["b1.voc.medios-redes"]],
  [16, "pron", "dislocacion-prosodia", "Prosodia de la dislocación", "Puedo marcar con una pausa y un tono el tema dislocado.", ["c1.pron.foco-prosodico"]],
  [16, "read", "reportaje-largo", "Leer un reportaje largo", "Puedo seguir un reportaje de varias voces y detectar la línea editorial.", []],
  [16, "fun", "destacar-retomar", "Destacar y retomar temas", "Puedo retomar un tema anterior y destacar lo relevante en una conversación.", ["c1.gram.orden-palabras"]],

  // Week 17 · Estilo narrativo
  [17, "gram", "tiempos-literarios", "Tiempos literarios y restringidos", "Puedo reconocer el pretérito anterior, el futuro de subjuntivo y el estilo indirecto libre.", ["b2.gram.tiempos-relato"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/preterito-anterior-indicativo", "/sistema-verbal/futuro-simple-subjuntivo"] }],
  [17, "voc", "literatura", "Literatura y crítica", "Puedo hablar de narrador, punto de vista, tono y recursos.", ["b2.voc.descripcion-literaria"]],
  [17, "pron", "lectura-literaria", "Lectura literaria", "Puedo leer en voz alta un fragmento con voces de narrador y personaje.", ["b2.pron.lectura-expresiva"]],
  [17, "read", "fragmento-novela", "Leer un fragmento de novela", "Puedo interpretar el punto de vista y el tono de un fragmento literario.", []],
  [17, "wri", "relato-estilo", "Relato con estilo indirecto libre", "Puedo escribir una escena con estilo indirecto libre.", ["b2.wri.microrrelato"]],

  // Weeks 18–19 · mediation and audience-sensitive synthesis
  [18, "fun", "mediacion-conflicto", "Mediar en un conflicto", "Puedo reformular necesidades, comprobar su fidelidad y facilitar un acuerdo revisable sin borrar el desacuerdo.", ["c1.fun.peticiones-indirectas", "c1.disc.reformulacion"], { pcic: "Funciones; Tácticas y estrategias pragmáticas" }],
  [18, "disc", "necesidades-condiciones", "Necesidades, condiciones y preferencias", "Puedo distinguir posiciones, intereses y condiciones mínimas e incorporar a las partes ausentes.", ["c1.disc.contraargumentacion"]],
  [18, "pron", "confirmacion-mediadora", "Prosodia de la comprobación", "Puedo presentar una reformulación como comprobable y dejar espacio real para corregirla.", ["c1.pron.prosodia-indirecta"]],
  [19, "wri", "doble-audiencia", "Síntesis para dos públicos", "Puedo reorganizar un dossier para destinatarios expertos y no expertos sin alterar hechos ni incertidumbres.", ["c1.wri.sintesis-fuentes", "c1.wri.revision-registro"]],
  [19, "disc", "coherencia-editorial", "Coherencia entre versiones", "Puedo revisar que titulares, atribuciones y compromisos mantengan el mismo alcance entre versiones.", ["c1.disc.sintesis", "c1.fun.adecuar-registro"]],

  // Week 20 · Checkpoint final C1
  [20, "rev", "checkpoint-final", "Checkpoint final C1", "Puedo comprender textos complejos, inferir lo implícito, argumentar con matices y adecuar registro y estilo.", ["c1.rev.checkpoint-3", "c1.gram.orden-palabras", "c1.gram.tiempos-literarios", "c1.disc.sintesis"]],
  [20, "spk", "ponencia-final", "Ponencia final C1", "Puedo presentar una ponencia de cinco minutos y responder a preguntas.", ["c1.spk.debate"]],
]);
