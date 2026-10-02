import { defineObjectives } from "../define";

/**
 * A2 — independent everyday communication. 20 weeks: 16 core weeks and 4
 * checkpoints. The past system arrives one tense at a time (perfecto →
 * indefinido regular → indefinido irregular → imperfecto → contraste), as in
 * the SpanishCue verbal system.
 */
export const a2Objectives = defineObjectives("a2", [
  // Week 1 · Experiencias
  [1, "gram", "perfecto-compuesto", "Pretérito perfecto compuesto", "Puedo hablar de experiencias y de lo que he hecho hoy o esta semana con he, has, ha + participio.", ["a1.gram.tener"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/preterito-perfecto-compuesto-indicativo"] }],
  [1, "gram", "participios-irregulares", "Participios irregulares", "Puedo usar hecho, dicho, visto, escrito, puesto, vuelto, abierto y roto.", ["a2.gram.perfecto-compuesto"], { pcic: "Gramática 9.1" }],
  [1, "gram", "ya-todavia", "Ya, todavía no, alguna vez, nunca", "Puedo preguntar y contar experiencias con alguna vez, ya, todavía no y nunca.", ["a2.gram.perfecto-compuesto"], { pcic: "Gramática 8" }],
  [1, "voc", "experiencias-viaje", "Experiencias y viajes", "Puedo hablar de lugares visitados, comidas probadas y cosas que nunca he hecho.", []],
  [1, "pron", "sinalefa-compuestos", "Enlace en los tiempos compuestos", "Puedo pronunciar he_estado, ha_ido o lo_he_visto como un solo grupo.", ["a1.pron.sinalefa"]],
  [1, "fun", "experiencias", "Preguntar por experiencias", "Puedo preguntar si alguien ha hecho algo y reaccionar con interés.", ["a2.gram.ya-todavia"]],
  [1, "spk", "nunca-he", "Hablar de lo que nunca he hecho", "Puedo contar tres experiencias reales y una inventada para que adivinen.", []],

  // Week 2 · Ayer
  [2, "gram", "indefinido-regular", "Pretérito indefinido regular", "Puedo contar acciones terminadas en un tiempo pasado con los verbos regulares.", ["a2.gram.perfecto-compuesto"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/preterito-perfecto-simple-indicativo"] }],
  [2, "gram", "marcadores-pasado", "Marcadores de pasado", "Puedo elegir entre ayer, el año pasado, hace dos días y esta mañana, y sé cómo cambia el uso entre España y América.", ["a2.gram.indefinido-regular"], { pcic: "Gramática 8" }],
  [2, "voc", "fin-de-semana", "Actividades del fin de semana", "Puedo contar qué hice el fin de semana con verbos frecuentes.", ["a1.voc.tiempo-libre"]],
  [2, "pron", "acento-tiempos", "Acento que cambia el tiempo verbal", "Puedo distinguir hablo de habló y trabajo de trabajó al oírlas y al decirlas.", ["a1.pron.acento-palabra"]],
  [2, "fun", "contar-ayer", "Contar qué hiciste", "Puedo contar el día de ayer en orden.", ["a2.gram.indefinido-regular"]],
  [2, "lis", "relato-breve", "Escuchar un relato breve", "Puedo ordenar las acciones de un relato oral breve.", []],

  // Week 3 · Biografías
  [3, "gram", "indefinido-irregular", "Indefinido irregular", "Puedo usar fui, estuve, tuve, hice, pude, puse, vine y dije.", ["a2.gram.indefinido-regular"], { pcic: "Gramática 9.1" }],
  [3, "gram", "ser-ir-indefinido", "Ser e ir en indefinido", "Puedo distinguir fue (ser) de fue (ir) por el contexto.", ["a2.gram.indefinido-irregular"], { pcic: "Gramática 9.1" }],
  [3, "voc", "etapas-vida", "Etapas de la vida", "Puedo hablar de nacer, estudiar, mudarse, casarse, jubilarse y otros hitos.", []],
  [3, "pron", "tilde-diacritica", "La tilde diacrítica", "Puedo distinguir tú/tu, él/el, sí/si, mí/mi, más/mas y sé/se al leer y al escribir.", ["a1.pron.entonacion-preguntas"], { pcic: "Ortografía 2" }],
  [3, "fun", "biografia", "Contar una biografía", "Puedo presentar la vida de una persona con fechas y hitos.", ["a2.gram.indefinido-irregular"]],
  [3, "read", "biografia", "Leer una biografía", "Puedo ordenar los hitos de una biografía y encontrar fechas.", []],

  // Week 4 · Cuando era pequeño
  [4, "gram", "imperfecto", "Pretérito imperfecto", "Puedo describir cómo era algo y qué hacía habitualmente en el pasado.", ["a2.gram.indefinido-regular"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/preterito-imperfecto-indicativo"] }],
  [4, "gram", "soler", "Soler + infinitivo", "Puedo expresar hábitos con suelo, solía y antes + imperfecto.", ["a2.gram.imperfecto"], { pcic: "Gramática 9.2" }],
  [4, "voc", "infancia", "Infancia, escuela y juegos", "Puedo hablar de mi infancia, el colegio y los juegos.", []],
  [4, "pron", "s-aspirada", "La s final aspirada", "Puedo reconocer que la s final varía entre hablantes, usar el contexto para distinguir singular y plural y pedir repetición; no doy por verificada una variedad por una voz sintética.", ["a1.pron.c-z-s"]],
  [4, "fun", "comparar-antes", "Comparar antes y ahora", "Puedo comparar cómo era mi vida antes y cómo es ahora.", ["a2.gram.imperfecto"]],
  [4, "wri", "recuerdo", "Escribir un recuerdo", "Puedo describir un lugar de mi infancia en un párrafo.", []],

  // Week 5 · Checkpoint 1
  [5, "rev", "checkpoint-1", "Checkpoint 1: mi pasado", "Puedo hablar de experiencias, de un día concreto y de mi infancia eligiendo el tiempo adecuado.", ["a2.gram.perfecto-compuesto", "a2.gram.indefinido-irregular", "a2.gram.imperfecto"]],
  [5, "lis", "podcast-recuerdos", "Escuchar recuerdos", "Puedo distinguir en un audio lo que era habitual y lo que pasó una vez.", []],

  // Week 6 · Contar una historia
  [6, "gram", "indefinido-imperfecto", "Indefinido frente a imperfecto", "Puedo narrar con el imperfecto para el contexto y el indefinido para los hechos.", ["a2.gram.imperfecto", "a2.gram.indefinido-irregular"], { pcic: "Gramática 9.1", related: ["/past-b1"] }],
  [6, "disc", "secuenciar", "Secuenciar un relato", "Puedo ordenar una historia con primero, luego, después, de repente y al final.", ["a1.disc.y-pero-tambien"], { pcic: "Gramática 14" }],
  [6, "voc", "anecdotas", "Anécdotas e imprevistos", "Puedo contar pequeños accidentes y sorpresas: perder, olvidar, romper, encontrarse.", []],
  [6, "pron", "grupos-fonicos", "Pausas y grupos fónicos", "Puedo dividir una narración en grupos de sentido con pausas naturales.", ["a1.pron.sinalefa"]],
  [6, "fun", "anecdota", "Contar una anécdota", "Puedo contar una anécdota y reaccionar a la de otra persona.", ["a2.gram.indefinido-imperfecto"]],
  [6, "spk", "anecdota", "Anécdota en un minuto", "Puedo contar una anécdota de un minuto con contexto, hechos y final.", []],

  // Week 7 · Comparar
  [7, "gram", "comparativos", "Comparativos", "Puedo comparar con más/menos… que, tan… como y tanto/a/os/as… como.", ["a1.gram.concordancia-adjetivo"], { pcic: "Gramática 2.3" }],
  [7, "gram", "superlativos", "Superlativos e irregulares", "Puedo usar el más… de, -ísimo, mejor, peor, mayor y menor.", ["a2.gram.comparativos"], { pcic: "Gramática 2.3" }],
  [7, "voc", "ciudades-campo", "Ciudad, campo y clima", "Puedo describir y comparar lugares para vivir.", ["a1.voc.ciudad"]],
  [7, "pron", "foco-contraste", "Acento de frase y contraste", "Puedo marcar con la voz la palabra que contrasta: Bogotá es más FRÍA, no más grande.", ["a1.pron.acento-palabra"]],
  [7, "fun", "comparar-elegir", "Comparar y elegir", "Puedo comparar dos opciones y justificar cuál prefiero.", ["a2.gram.comparativos"]],
  [7, "read", "articulo-ciudades", "Leer una comparación", "Puedo extraer ventajas e inconvenientes de un texto que compara lugares.", []],

  [7, "voc", "vivienda-servicios", "Vivienda, alquiler y servicios", "Puedo comparar anuncios de vivienda por precio, gastos, espacio y transporte y pedir un dato que falta.", ["a1.read.anuncio-piso"], { pcic: "Nociones específicas 10: vivienda; 12: compras y servicios" }],

  // Week 8 · Pronombres
  [8, "gram", "oi-pronombres", "Objeto indirecto: le, les", "Puedo usar me, te, le, nos, os, les para la persona que recibe algo.", ["a1.gram.od-pronombres", "a1.gram.gustar"], { pcic: "Gramática 7.1", related: ["/la-estacion-de-los-dos-destinos"] }],
  [8, "gram", "se-lo", "Combinación se lo", "Puedo combinar dos pronombres (me lo, te la, se lo) en el orden correcto.", ["a2.gram.oi-pronombres"], { pcic: "Gramática 7.1" }],
  [8, "voc", "regalos-prestamos", "Regalos, préstamos y favores", "Puedo hablar de regalar, prestar, devolver, enviar y pedir prestado.", []],
  [8, "pron", "cliticos-acento", "Pronombres pegados y acento", "Puedo mantener el acento en dámelo o explícaselo y sé por qué llevan tilde.", ["a2.pron.tilde-diacritica"]],
  [8, "fun", "favores", "Pedir y ofrecer favores", "Puedo pedir algo prestado, ofrecer ayuda y devolver algo.", ["a2.gram.se-lo"]],
  [8, "wri", "mensaje-favor", "Mensaje para pedir un favor", "Puedo escribir un mensaje para pedir un favor y agradecerlo.", []],

  // Week 9 · Instrucciones
  [9, "gram", "imperativo-afirmativo", "Imperativo afirmativo", "Puedo dar instrucciones con tú, usted, vosotros y ustedes, y conozco la forma de vos.", ["a1.gram.presente-ar"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/imperativo"] }],
  [9, "gram", "imperativo-pronombres", "Imperativo con pronombres", "Puedo colocar pronombres detrás del imperativo afirmativo: cómpralo, siéntese.", ["a2.gram.imperativo-afirmativo", "a2.gram.se-lo"], { pcic: "Gramática 7.1" }],
  [9, "voc", "cocina-recetas", "Cocina y recetas", "Puedo entender y dar los pasos de una receta.", ["a1.voc.comidas-bebidas"]],
  [9, "pron", "entonacion-imperativo", "Entonación de órdenes y consejos", "Puedo suavizar una instrucción con la entonación para que no suene brusca.", ["a1.pron.entonacion-exclamativa"]],
  [9, "fun", "instrucciones", "Dar instrucciones", "Puedo explicar cómo se hace algo paso a paso.", ["a2.gram.imperativo-afirmativo"]],
  [9, "lis", "receta", "Escuchar una receta", "Puedo seguir instrucciones orales en orden.", []],

  // Week 10 · Checkpoint 2
  [10, "rev", "checkpoint-2", "Checkpoint 2: relatos, comparaciones e instrucciones", "Puedo contar una historia, comparar opciones y dar instrucciones claras.", ["a2.gram.indefinido-imperfecto", "a2.gram.comparativos", "a2.gram.imperativo-afirmativo"]],
  [10, "read", "blog-viaje", "Leer un blog de viaje", "Puedo seguir una historia escrita y separar hechos de descripciones.", []],

  // Week 11 · Ahora mismo
  [11, "gram", "estar-gerundio", "Estar + gerundio", "Puedo describir acciones en curso y situaciones temporales.", ["a1.gram.estar-estados"], { pcic: "Gramática 9.2" }],
  [11, "gram", "perifrasis-fase", "Perífrasis de fase", "Puedo usar empezar a, acabar de, volver a, dejar de y seguir + gerundio.", ["a2.gram.estar-gerundio"], { pcic: "Gramática 9.2", related: ["/empezar-seguir-repetir-dejar-de-hacer"] }],
  [11, "voc", "cambios-habitos", "Cambios de hábitos", "Puedo hablar de lo que empecé, dejé o sigo haciendo.", []],
  [11, "pron", "asimilacion-nasal", "La n ante b, p, m", "Puedo pronunciar un beso o con Pablo con [m] de forma natural.", ["a1.pron.b-v"]],
  [11, "fun", "describir-cambios", "Describir cambios personales", "Puedo explicar qué ha cambiado en mi vida y qué sigo haciendo.", ["a2.gram.perifrasis-fase"]],
  [11, "spk", "videollamada", "Describir lo que está pasando", "Puedo describir en directo lo que está pasando a mi alrededor.", []],

  // Week 12 · El futuro
  [12, "gram", "futuro-simple", "Futuro simple: ampliación guiada", "Puedo hacer predicciones y promesas con el futuro simple, incluidos los irregulares.", ["a1.gram.ir-a-inf"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/futuro-simple-indicativo"] }],
  [12, "gram", "si-presente", "Si + presente, futuro", "Puedo expresar condiciones reales: si llueve, nos quedaremos en casa.", ["a2.gram.futuro-simple"], { pcic: "Gramática 15.3", related: ["/si-pasa-esto"] }],
  [12, "voc", "tecnologia-futuro", "Tecnología y futuro", "Puedo hablar de cambios tecnológicos y del trabajo del futuro.", []],
  [12, "pron", "vocales-atonas", "Vocales átonas plenas", "Puedo mantener claras las vocales átonas en palabras largas como comunicación o universidad.", ["a1.pron.cinco-vocales"]],
  [12, "fun", "predecir-prometer", "Predecir y prometer", "Puedo hacer predicciones y promesas y reaccionar a las de otros.", ["a2.gram.futuro-simple"]],
  [12, "read", "horoscopo-predicciones", "Leer predicciones", "Puedo distinguir planes, predicciones y condiciones en un texto.", []],

  // Week 13 · Salud
  [13, "gram", "doler", "Doler y estar + síntomas", "Puedo explicar qué me duele y cómo me siento.", ["a1.gram.gustar", "a1.gram.estar-estados"], { pcic: "Gramática 7.1" }],
  [13, "gram", "consejos-deberias", "Consejos con fórmulas frecuentes", "Puedo dar consejos con deberías, tendrías que y es mejor + infinitivo.", ["a1.gram.obligacion"], { pcic: "Gramática 9.1" }],
  [13, "voc", "cuerpo-salud", "El cuerpo y la salud", "Puedo nombrar partes del cuerpo, síntomas y remedios.", []],
  [13, "pron", "letra-x", "Los sonidos de la x", "Puedo pronunciar la x de taxi, de México y de Xochimilco.", ["a1.pron.j-g"]],
  [13, "fun", "medico", "En la consulta", "Puedo describir síntomas y entender recomendaciones básicas.", ["a2.gram.doler"]],
  [13, "lis", "consulta", "Escuchar una consulta médica", "Puedo identificar síntomas y recomendaciones en una consulta.", []],

  // Week 14 · Servicios y viajes
  [14, "gram", "condicional-cortesia", "Condicional de cortesía", "Puedo pedir con podría, me gustaría y quería para sonar amable.", ["a1.gram.querer-poder-inf"], { pcic: "Gramática 9.1" }],
  [14, "voc", "hotel-transporte", "Hotel, aeropuerto y reservas", "Puedo resolver gestiones en un hotel, una estación o un aeropuerto.", ["a1.voc.transporte"]],
  [14, "pron", "cortesia-entonacion", "Entonación de cortesía", "Puedo hacer peticiones con una curva suave y un ritmo amable.", ["a2.pron.entonacion-imperativo"]],
  [14, "fun", "reclamar", "Pedir y reclamar con cortesía", "Puedo pedir un cambio o reclamar un problema en un servicio.", ["a2.gram.condicional-cortesia"]],
  [14, "wri", "correo-reserva", "Correo para una reserva", "Puedo escribir un correo formal breve para reservar o cambiar algo.", []],
  [14, "read", "condiciones", "Leer condiciones de un servicio", "Puedo encontrar horarios, precios y condiciones en un texto informativo.", ["a1.read.anuncio-piso"]],

  // Week 15 · Checkpoint 3
  [15, "rev", "checkpoint-3", "Checkpoint 3: viajar y resolver", "Puedo planificar un viaje, resolver un problema en un servicio y hablar de cambios y del futuro.", ["a2.gram.futuro-simple", "a2.gram.condicional-cortesia", "a2.gram.estar-gerundio"]],
  [15, "spk", "resolver-problema", "Resolver un problema por teléfono", "Puedo explicar un problema y negociar una solución por teléfono.", []],

  [15, "fun", "transmitir-acuerdo", "Transmitir información práctica", "Puedo transmitir a un compañero los horarios y acuerdos de una llamada, diferenciando lo confirmado de lo pendiente.", ["a2.fun.reclamar"], { pcic: "Funciones 1: dar y pedir información; CEFR: transmitir información específica A2" }],

  // Week 16 · Conectar ideas
  [16, "disc", "conectores-causa-consecuencia", "Porque, como, por eso, así que", "Puedo explicar causas y consecuencias con porque, como, por eso y así que.", ["a1.gram.porque-causa"], { pcic: "Gramática 15" }],
  [16, "gram", "antes-despues-inf", "Antes de, después de, al + infinitivo; cuando", "Puedo ordenar acciones con antes de, después de, al + infinitivo y cuando.", ["a2.disc.secuenciar"], { pcic: "Gramática 15.3", related: ["/antes-despues-cuando"] }],
  [16, "voc", "estudio-trabajo", "Estudios y trabajo", "Puedo hablar de cursos, prácticas, entrevistas y experiencia laboral.", ["a1.voc.profesiones"]],
  [16, "pron", "conectores-entonacion", "La entonación de los conectores", "Puedo marcar con una pausa y un tono suspensivo un conector como así que…", ["a2.pron.grupos-fonicos"]],
  [16, "fun", "explicar-decisiones", "Explicar decisiones", "Puedo explicar por qué tomé una decisión y qué pasó después.", ["a2.disc.conectores-causa-consecuencia"]],
  [16, "wri", "historia-conectada", "Texto narrativo conectado", "Puedo escribir 100 palabras sobre una decisión importante con conectores.", ["a2.wri.recuerdo"]],

  // Week 17 · Por y para
  [17, "gram", "por-para", "Por y para", "Puedo distinguir por (causa, medio, intercambio, lugar de paso) y para (finalidad, destino, plazo, destinatario).", ["a1.gram.preposiciones-lugar"], { pcic: "Gramática 8" }],
  [17, "voc", "compras-online", "Compras en línea y envíos", "Puedo comprar, devolver y seguir un envío por internet.", ["a1.voc.ropa-colores"]],
  [17, "pron", "palabras-largas", "Palabras largas y ritmo", "Puedo pronunciar palabras largas sin perder sílabas ni el acento.", ["a2.pron.vocales-atonas"]],
  [17, "fun", "finalidad", "Expresar finalidad y causa", "Puedo decir para qué hago algo y por qué lo hago.", ["a2.gram.por-para"]],
  [17, "lis", "atencion-cliente", "Escuchar un servicio de atención", "Puedo seguir un mensaje grabado y elegir la opción correcta.", []],

  // Week 18 · Nadie y algo
  [18, "gram", "indefinidos", "Indefinidos: algo, nada, alguien, nadie", "Puedo usar algo, nada, alguien, nadie, algún y ningún con la doble negación.", ["a1.gram.negacion-no"], { pcic: "Gramática 6" }],
  [18, "gram", "relativo-que", "Oraciones de relativo con que y donde", "Puedo describir personas, cosas y lugares con que y donde.", ["a1.gram.articulos"], { pcic: "Gramática 15.2" }],
  [18, "voc", "objetos-perdidos", "Objetos y su descripción", "Puedo describir objetos por su material, forma y uso.", ["a1.voc.objetos"]],
  [18, "pron", "diptongos-verbales", "Diptongos que van y vienen", "Puedo alternar puedo/podemos y quiero/queremos sin dudar en el acento.", ["a1.pron.diptongos"]],
  [18, "fun", "describir-objeto", "Describir algo cuyo nombre no sé", "Puedo explicar una cosa que no sé nombrar: es una cosa que sirve para…", ["a2.gram.relativo-que"]],
  [18, "read", "objetos-perdidos", "Leer avisos de objetos perdidos", "Puedo emparejar descripciones con objetos.", []],

  // Week 19 · Opinar
  [19, "gram", "opinion-indicativo", "Creo que, pienso que, me parece que", "Puedo dar mi opinión con creo que y me parece que + indicativo.", ["a1.gram.gustar"], { pcic: "Gramática 15.1" }],
  [19, "fun", "acuerdo-desacuerdo", "Acuerdo y desacuerdo", "Puedo estar de acuerdo, no estar de acuerdo y matizar con depende.", ["a2.gram.opinion-indicativo"], { pcic: "Funciones 2" }],
  [19, "voc", "temas-sociales", "Temas cercanos de debate", "Puedo hablar de redes sociales, transporte y ocio con vocabulario preciso.", []],
  [19, "pron", "entonacion-duda", "Entonación de duda y acuerdo", "Puedo usar bueno…, mmm, ¡claro! y ¿tú crees? con la entonación adecuada.", ["a1.pron.entonacion-exclamativa"]],
  [19, "disc", "turnos", "Tomar y ceder el turno", "Puedo intervenir, pedir la opinión del otro y volver al tema.", []],
  [19, "spk", "opinion-breve", "Opinar dos minutos", "Puedo dar una opinión con dos razones y un ejemplo.", []],

  // Week 20 · Checkpoint final A2
  [20, "rev", "checkpoint-final", "Checkpoint final A2", "Puedo contar, comparar, pedir, aconsejar, planificar y opinar en situaciones cotidianas.", ["a2.rev.checkpoint-3", "a2.gram.por-para", "a2.gram.relativo-que", "a2.fun.acuerdo-desacuerdo"]],
  [20, "wri", "texto-a2", "Texto final A2", "Puedo escribir 120 palabras conectadas sobre una experiencia y su consecuencia.", ["a2.wri.historia-conectada"]],
  [2, "gram", "indefinido-ortografia", "Ortografía del indefinido", "Puedo escribir busqué, llegué y empecé conservando el sonido de la raíz.", ["a2.gram.indefinido-regular"], { pcic: "Gramática 9.1.3; Ortografía 1.3.1" }],
  [3, "gram", "indefinido-ver-dar", "Ver y dar en indefinido", "Puedo usar vi, vio, vieron, di, dio y dieron sin tildes innecesarias.", ["a2.gram.indefinido-irregular"], { pcic: "Gramática 9.1.3" }],
  [18, "gram", "posesivos-tonicos", "Posesivos tónicos y referencia", "Puedo identificar algo con mío, tuyo, suyo y el mío, y aclarar de quién es un objeto.", ["a1.gram.posesivos"], { pcic: "Gramática 5" }],
]);
