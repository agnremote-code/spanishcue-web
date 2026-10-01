import { defineObjectives } from "../define";

/**
 * A1 — from zero. 20 weeks: 16 core weeks and 4 checkpoints (5, 10, 15, 20).
 * Order follows PCIC A1 inventories and the SpanishCue grammar route
 * (sustantivo → adjetivo → artículo → demostrativos → posesivos →
 * cuantificadores → pronombre → verbo), adapted to a communicative sequence.
 */
export const a1Objectives = defineObjectives("a1", [
  // Week 1 · ¡Hola!
  [1, "gram", "pronombres-sujeto", "Pronombres personales sujeto", "Puedo reconocer yo, tú, usted, él y ella, y sé que en español el sujeto se omite muchas veces.", [], { pcic: "Gramática 7.1", related: ["/la-central-de-las-identidades"] }],
  [1, "gram", "ser-singular", "Ser en singular y llamarse", "Puedo decir quién soy y preguntar el nombre con soy, eres, es, me llamo, te llamas y se llama.", ["a1.gram.pronombres-sujeto"], { pcic: "Gramática 9.1" }],
  [1, "voc", "saludos", "Saludos y despedidas", "Puedo saludar y despedirme según el momento del día y la situación.", [], { pcic: "Funciones 5.1–5.3" }],
  [1, "pron", "cinco-vocales", "Las cinco vocales", "Puedo distinguir y pronunciar las cinco vocales tensas del español, sin reducirlas.", [], { pcic: "Pronunciación 1.1", related: ["/clase/201"] }],
  [1, "fun", "presentarse", "Presentarse y tratar de tú o de usted", "Puedo presentarme, preguntar el nombre de otra persona y elegir entre tú y usted.", ["a1.voc.saludos"], { pcic: "Funciones 5.2" }],
  [1, "lis", "saludos-nombres", "Escuchar saludos breves", "Puedo identificar quién saluda, cómo se llama y si el trato es formal o informal.", []],
  [1, "spk", "presentacion-20s", "Presentación de 20 segundos", "Puedo presentarme en voz alta durante veinte segundos con frases memorizadas.", ["a1.fun.presentarse"]],

  // Week 2 · ¿De dónde eres?
  [2, "gram", "ser-plural", "Ser: todas las personas", "Puedo usar ser con nosotros, vosotros, ellos y ustedes, y sé dónde se usa vosotros y dónde ustedes.", ["a1.gram.ser-singular"], { pcic: "Gramática 9.1" }],
  [2, "gram", "negacion-no", "Negación con no", "Puedo negar una frase poniendo no delante del verbo.", ["a1.gram.ser-singular"], { pcic: "Gramática 12.2" }],
  [2, "gram", "nacionalidades-genero", "Adjetivos de nacionalidad", "Puedo decir nacionalidades en masculino, femenino y plural.", ["a1.gram.ser-plural"], { pcic: "Gramática 2.1" }],
  [2, "voc", "paises-idiomas", "Países, nacionalidades e idiomas", "Puedo nombrar países hispanohablantes y otros, nacionalidades e idiomas.", []],
  [2, "voc", "numeros-0-20", "Números del 0 al 20", "Puedo decir y entender números del 0 al 20, por ejemplo en un teléfono.", []],
  [2, "pron", "silabas", "La sílaba española", "Puedo dividir palabras en sílabas y pronunciarlas con el mismo peso.", ["a1.pron.cinco-vocales"], { pcic: "Pronunciación 2" }],
  [2, "fun", "origen", "Preguntar y decir el origen", "Puedo preguntar de dónde es alguien y decir de dónde soy y qué idiomas hablo.", ["a1.fun.presentarse"]],
  [2, "lis", "numeros-datos", "Escuchar números y datos", "Puedo anotar números de teléfono y nacionalidades en un audio breve.", ["a1.voc.numeros-0-20"]],

  // Week 3 · Cosas y lugares
  [3, "gram", "genero-sustantivo", "Género del sustantivo", "Puedo predecir el género de muchos sustantivos y conozco excepciones frecuentes.", [], { pcic: "Gramática 1.1", related: ["/la-fabrica-de-los-nombres"] }],
  [3, "gram", "plural", "El plural", "Puedo formar el plural con -s, -es y z → ces.", ["a1.gram.genero-sustantivo"], { pcic: "Gramática 1.2" }],
  [3, "gram", "articulos", "Artículos definidos e indefinidos", "Puedo elegir entre el, la, los, las y un, una, unos, unas según la información.", ["a1.gram.genero-sustantivo"], { pcic: "Gramática 3", related: ["/la-galeria-de-los-articulos"] }],
  [3, "gram", "hay", "Hay para existencia", "Puedo decir qué hay en un lugar con hay + un/una, números o sustantivo sin artículo.", ["a1.gram.articulos"], { pcic: "Gramática 9.1" }],
  [3, "voc", "objetos", "Objetos de todos los días", "Puedo nombrar objetos de la mochila, la casa y el aula.", []],
  [3, "pron", "acento-palabra", "El acento de palabra", "Puedo oír qué sílaba es más fuerte y sé que cambiarla puede cambiar el significado.", ["a1.pron.silabas"], { pcic: "Pronunciación 3", related: ["/clase/202"] }],
  [3, "fun", "aclaracion", "Pedir aclaraciones", "Puedo preguntar cómo se dice algo, qué significa una palabra y pedir que repitan más despacio.", []],
  [3, "read", "lista-anuncio", "Leer un anuncio corto", "Puedo encontrar objetos, precios y datos concretos en un anuncio breve.", []],

  // Week 4 · Mi trabajo, mis estudios
  [4, "gram", "presente-ar", "Presente de los verbos en -ar", "Puedo conjugar verbos regulares en -ar para hablar de lo que hago.", ["a1.gram.ser-plural"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/presente-de-indicativo"] }],
  [4, "gram", "interrogativos", "Palabras interrogativas", "Puedo hacer preguntas con qué, dónde, cuándo, cómo, quién y cuánto, con tilde.", ["a1.fun.origen"], { pcic: "Gramática 12.3" }],
  [4, "voc", "profesiones", "Profesiones y lugares de trabajo", "Puedo decir a qué me dedico, dónde trabajo o qué estudio.", ["a1.gram.genero-sustantivo"]],
  [4, "voc", "numeros-21-100", "Números del 21 al 100", "Puedo decir y entender números hasta cien.", ["a1.voc.numeros-0-20"]],
  [4, "pron", "entonacion-preguntas", "Entonación de las preguntas y la tilde", "Puedo distinguir por la entonación una pregunta de sí o no de una afirmación, y sé por qué qué y dónde llevan tilde.", ["a1.pron.acento-palabra"], { pcic: "Pronunciación 4" }],
  [4, "disc", "y-pero-tambien", "Conectar con y, pero, también", "Puedo unir dos ideas con y, pero y también.", [], { pcic: "Gramática 14", related: ["/conecta-la-frase"] }],
  [4, "spk", "entrevista-breve", "Entrevista breve", "Puedo hacer y contestar cinco preguntas sobre trabajo y estudios.", ["a1.gram.interrogativos"]],

  // Week 5 · Checkpoint 1
  [5, "rev", "checkpoint-1", "Checkpoint 1: identidad", "Puedo presentarme de forma completa: nombre, origen, idiomas, trabajo u estudios y objetos de mi entorno.", ["a1.fun.presentarse", "a1.fun.origen", "a1.gram.presente-ar", "a1.gram.hay"]],
  [5, "wri", "ficha-personal", "Una ficha de presentación", "Puedo escribir un texto breve de presentación personal para un grupo nuevo.", ["a1.disc.y-pero-tambien"]],

  // Week 6 · Mi familia
  [6, "gram", "tener", "El verbo tener", "Puedo usar tener para la familia, la edad y las cosas que tengo.", ["a1.gram.presente-ar"], { pcic: "Gramática 9.1" }],
  [6, "gram", "posesivos", "Posesivos átonos", "Puedo usar mi, tu, su, nuestro y vuestro, y aclarar su con de él o de ella.", ["a1.gram.articulos"], { pcic: "Gramática 5", related: ["/la-casa-de-las-pertenencias"] }],
  [6, "gram", "concordancia-adjetivo", "Concordancia del adjetivo", "Puedo describir personas con adjetivos que concuerdan en género y número.", ["a1.gram.nacionalidades-genero"], { pcic: "Gramática 2", related: ["/el-atelier-de-la-concordancia"] }],
  [6, "voc", "familia", "La familia", "Puedo nombrar a los miembros de mi familia y explicar relaciones.", []],
  [6, "voc", "descripcion-personas", "Describir a una persona", "Puedo describir el físico y el carácter de alguien con adjetivos frecuentes.", []],
  [6, "pron", "c-z-s", "C, Z y S: seseo y distinción", "Puedo pronunciar ce, ci, za, zo, zu con seseo o con distinción y reconocer ambas variantes.", ["a1.pron.silabas"], { pcic: "Pronunciación 1.2" }],
  [6, "fun", "describir-personas", "Hablar de otras personas", "Puedo presentar a un familiar y describirlo con dos o tres rasgos.", ["a1.voc.descripcion-personas"]],
  [6, "read", "post-familia", "Leer una publicación personal", "Puedo entender quién es quién en una publicación sobre una familia.", []],

  // Week 7 · ¿Qué comes?
  [7, "gram", "presente-er-ir", "Presente de los verbos en -er e -ir", "Puedo conjugar verbos regulares en -er e -ir como comer, beber, vivir y escribir.", ["a1.gram.presente-ar"], { pcic: "Gramática 9.1", related: ["/sistema-verbal/presente-de-indicativo"] }],
  [7, "gram", "frecuencia", "Adverbios de frecuencia", "Puedo decir con qué frecuencia hago algo, incluida la doble negación con nunca.", ["a1.gram.negacion-no"], { pcic: "Gramática 8" }],
  [7, "voc", "comidas-bebidas", "Comidas y bebidas", "Puedo hablar de desayuno, comida y cena, y conozco variantes como jugo/zumo o almuerzo/comida.", []],
  [7, "pron", "b-v", "B y V: un solo sonido", "Puedo pronunciar b y v igual y notar la diferencia entre [b] oclusiva y [β] suave.", ["a1.pron.silabas"], { pcic: "Pronunciación 1.2" }],
  [7, "fun", "habitos", "Hablar de hábitos", "Puedo describir mis hábitos y preguntar por los de otra persona.", ["a1.gram.frecuencia"]],
  [7, "lis", "entrevista-habitos", "Escuchar una encuesta de hábitos", "Puedo identificar hábitos y frecuencias en una entrevista corta.", []],

  // Week 8 · ¿Dónde está?
  [8, "gram", "estar-ubicacion", "Estar para la ubicación", "Puedo decir dónde está una persona o un lugar con estar.", ["a1.gram.ser-plural"], { pcic: "Gramática 9.1" }],
  [8, "gram", "hay-esta", "Hay frente a está", "Puedo elegir entre hay (existencia, información nueva) y está (ubicación de algo conocido).", ["a1.gram.hay", "a1.gram.estar-ubicacion"], { pcic: "Gramática 9.1" }],
  [8, "gram", "preposiciones-lugar", "Preposiciones de lugar y al/del", "Puedo situar cosas con cerca de, al lado de, enfrente de, entre, detrás de y las contracciones al y del.", ["a1.gram.articulos"], { pcic: "Gramática 8", related: ["/la-torre-de-las-coordenadas"] }],
  [8, "voc", "ciudad", "Lugares de la ciudad", "Puedo nombrar lugares y servicios de un barrio.", []],
  [8, "pron", "r-rr", "La r simple y la rr", "Puedo distinguir pero de perro y producir la vibrante simple y la múltiple.", ["a1.pron.silabas"], { pcic: "Pronunciación 1.2" }],
  [8, "fun", "direcciones", "Pedir y dar direcciones", "Puedo preguntar por un lugar y entender o dar indicaciones sencillas.", ["a1.gram.preposiciones-lugar"]],
  [8, "wri", "mensaje-ubicacion", "Mensaje para quedar", "Puedo escribir un mensaje que explica dónde está un lugar.", []],

  // Week 9 · Mi rutina
  [9, "gram", "reflexivos", "Verbos reflexivos", "Puedo contar mi rutina con verbos como levantarse, ducharse y acostarse, con el pronombre bien colocado.", ["a1.gram.presente-er-ir"], { pcic: "Gramática 7.1" }],
  [9, "gram", "hora", "La hora", "Puedo preguntar y decir la hora y a qué hora hago algo.", ["a1.voc.numeros-21-100"], { pcic: "Nociones generales 3" }],
  [9, "voc", "rutina-dias", "Rutina y días de la semana", "Puedo nombrar acciones diarias, días de la semana y partes del día.", []],
  [9, "pron", "j-g", "J y G ante e, i", "Puedo pronunciar la jota y la g de gente, y la g suave de gato.", ["a1.pron.silabas"], { pcic: "Pronunciación 1.2" }],
  [9, "fun", "rutina-horarios", "Hablar de horarios", "Puedo describir mi rutina normal y preguntar por la de otra persona.", ["a1.gram.reflexivos"]],
  [9, "read", "blog-rutina", "Leer un día en la vida de alguien", "Puedo ordenar las acciones de un texto según la hora.", []],
  [9, "spk", "mi-lunes", "Contar un día normal", "Puedo describir un día normal en un minuto, con horas y conectores.", ["a1.disc.y-pero-tambien"]],

  // Week 10 · Checkpoint 2
  [10, "rev", "checkpoint-2", "Checkpoint 2: personas, lugares y rutinas", "Puedo describir a mi familia, mi barrio y mi semana en un texto y en voz alta.", ["a1.gram.tener", "a1.gram.hay-esta", "a1.gram.reflexivos"]],
  [10, "lis", "mensaje-voz", "Escuchar un mensaje de voz", "Puedo extraer lugar, hora y plan de un mensaje de voz.", ["a1.gram.hora"]],

  // Week 11 · Querer y poder
  [11, "gram", "diptongacion", "Verbos con cambio vocálico", "Puedo conjugar verbos con e → ie, o → ue, u → ue y e → i.", ["a1.gram.presente-er-ir"], { pcic: "Gramática 9.1" }],
  [11, "gram", "querer-poder-inf", "Querer, poder y preferir + infinitivo", "Puedo expresar deseo, posibilidad y preferencia con un infinitivo.", ["a1.gram.diptongacion"], { pcic: "Gramática 9.2" }],
  [11, "voc", "tiempo-libre", "Actividades de tiempo libre", "Puedo nombrar deportes, actividades culturales y planes con amigos.", []],
  [11, "pron", "n-ll-y", "Ñ, LL e Y", "Puedo producir la ñ y reconocer el yeísmo y el sonido rioplatense de ll/y.", ["a1.pron.silabas"], { pcic: "Pronunciación 1.2" }],
  [11, "fun", "proponer", "Proponer y aceptar planes", "Puedo proponer una actividad, aceptarla o decir que no puedo.", ["a1.gram.querer-poder-inf"]],
  [11, "lis", "planes-amigos", "Escuchar una conversación entre amigos", "Puedo entender qué quiere hacer cada persona y qué deciden.", []],

  // Week 12 · Gustos
  [12, "gram", "gustar", "Gustar y verbos similares", "Puedo expresar gustos con me gusta(n), me encanta(n) y me interesa(n).", ["a1.gram.pronombres-sujeto"], { pcic: "Gramática 7.1" }],
  [12, "gram", "tambien-tampoco", "También, tampoco, a mí sí, a mí no", "Puedo mostrar acuerdo o diferencia de gustos.", ["a1.gram.gustar"], { pcic: "Gramática 8" }],
  [12, "gram", "muy-mucho", "Muy y mucho", "Puedo elegir entre muy, mucho, mucha, muchos y muchas.", ["a1.gram.concordancia-adjetivo"], { pcic: "Gramática 6" }],
  [12, "voc", "aficiones", "Aficiones, música y series", "Puedo hablar de mis aficiones con palabras precisas.", ["a1.voc.tiempo-libre"]],
  [12, "pron", "h-ch-qu", "H muda, CH y QU/C/K", "Puedo no pronunciar la h, producir la ch y asociar qu, c y k con su sonido.", ["a1.pron.silabas"], { pcic: "Ortografía 1" }],
  [12, "fun", "gustos-acuerdo", "Expresar gustos y reaccionar", "Puedo decir qué me gusta, preguntar por gustos y reaccionar a lo que dice otra persona.", ["a1.gram.tambien-tampoco"]],
  [12, "wri", "perfil-gustos", "Un perfil para un intercambio", "Puedo escribir un perfil breve con mis gustos y lo que no me gusta.", []],

  // Week 13 · De compras
  [13, "gram", "demostrativos", "Demostrativos", "Puedo señalar con este, ese y aquel, y usar esto y eso para cosas sin nombre.", ["a1.gram.concordancia-adjetivo"], { pcic: "Gramática 4", related: ["/el-observatorio-de-las-distancias"] }],
  [13, "voc", "numeros-100-mas", "Números a partir de cien y precios", "Puedo entender y decir precios y cantidades grandes.", ["a1.voc.numeros-21-100"]],
  [13, "voc", "ropa-colores", "Ropa y colores", "Puedo describir ropa con colores y tallas.", ["a1.gram.concordancia-adjetivo"]],
  [13, "pron", "d-suave", "La d suave", "Puedo suavizar la d entre vocales y reconocer la caída de la d en -ado en el habla rápida.", ["a1.pron.b-v"], { pcic: "Pronunciación 1.2" }],
  [13, "fun", "comprar", "Comprar en una tienda", "Puedo preguntar precios, pedir otra talla y decidir qué compro.", ["a1.gram.demostrativos"]],
  [13, "read", "catalogo", "Leer un catálogo y comparar", "Puedo comparar productos y precios en un catálogo breve.", []],

  // Week 14 · En el restaurante
  [14, "gram", "cuantificadores", "Cuantificadores", "Puedo hablar de cantidad con poco, bastante, demasiado, un poco de y nada de.", ["a1.gram.muy-mucho"], { pcic: "Gramática 6", related: ["/el-mercado-de-las-cantidades"] }],
  [14, "gram", "yo-irregular", "Verbos con primera persona irregular", "Puedo usar hago, pongo, traigo, salgo, conozco y sé.", ["a1.gram.presente-er-ir"], { pcic: "Gramática 9.1" }],
  [14, "voc", "restaurante", "El restaurante y el menú", "Puedo entender un menú del día y pedir platos y bebidas.", ["a1.voc.comidas-bebidas"]],
  [14, "pron", "diptongos", "Diptongos e hiatos", "Puedo pronunciar diptongos como bueno o ciudad en una sílaba y separar hiatos como día o país.", ["a1.pron.acento-palabra"], { pcic: "Pronunciación 2" }],
  [14, "fun", "pedir-restaurante", "Pedir con cortesía", "Puedo pedir la comida, preguntar por un plato y pedir la cuenta con fórmulas de cortesía.", ["a1.voc.restaurante"]],
  [14, "spk", "pedir-cena", "Pedir una cena completa", "Puedo pedir una cena completa y resolver un pequeño problema con el pedido.", ["a1.fun.pedir-restaurante"]],

  // Week 15 · Checkpoint 3
  [15, "rev", "checkpoint-3", "Checkpoint 3: tiempo libre y consumo", "Puedo organizar una salida: proponer, hablar de gustos, comprar y pedir en un restaurante.", ["a1.fun.proponer", "a1.fun.gustos-acuerdo", "a1.fun.comprar", "a1.fun.pedir-restaurante"]],
  [15, "read", "resenas", "Leer reseñas breves", "Puedo decidir entre dos lugares leyendo reseñas cortas.", []],

  // Week 16 · Planes
  [16, "gram", "ir-a-inf", "Ir a + infinitivo", "Puedo hablar de planes e intenciones con ir a + infinitivo.", ["a1.gram.querer-poder-inf"], { pcic: "Gramática 9.2", related: ["/la-ciudad-de-los-motores"] }],
  [16, "gram", "marcadores-futuro", "Marcadores de futuro", "Puedo situar planes con mañana, el fin de semana que viene, este verano y dentro de.", ["a1.gram.ir-a-inf"], { pcic: "Gramática 8" }],
  [16, "voc", "tiempo-atmosferico", "El tiempo atmosférico", "Puedo hablar del tiempo con hace calor, llueve, está nublado y hay viento.", []],
  [16, "voc", "transporte", "Medios de transporte", "Puedo decir cómo voy a un lugar: en autobús, a pie, en coche o en carro.", []],
  [16, "pron", "enlace", "El enlace entre palabras", "Puedo unir consonante final y vocal inicial como en los_amigos.", ["a1.pron.silabas"], { pcic: "Pronunciación 5" }],
  [16, "fun", "planes-fin-semana", "Hablar de planes", "Puedo contar mis planes para el fin de semana y preguntar por los de otra persona.", ["a1.gram.ir-a-inf"]],
  [16, "lis", "pronostico", "Escuchar un pronóstico y planes", "Puedo decidir un plan según un pronóstico del tiempo oído.", []],

  // Week 17 · Mi casa
  [17, "gram", "ser-estar-hay", "Ser, estar y hay", "Puedo elegir entre ser, estar y hay para describir una vivienda.", ["a1.gram.hay-esta"], { pcic: "Gramática 9.1" }],
  [17, "gram", "estar-estados", "Estar + adjetivo de estado", "Puedo decir cómo estoy y cómo está algo con cansado, contento, sucio o abierto.", ["a1.gram.estar-ubicacion"], { pcic: "Gramática 9.1" }],
  [17, "voc", "casa", "Partes de la casa y muebles", "Puedo describir habitaciones, muebles y ordinales para los pisos.", ["a1.voc.objetos"]],
  [17, "pron", "sinalefa", "Ritmo silábico y sinalefa", "Puedo unir vocales entre palabras (la_amiga, mi_hijo) y mantener un ritmo regular.", ["a1.pron.enlace"], { pcic: "Pronunciación 5" }],
  [17, "fun", "describir-vivienda", "Describir una vivienda", "Puedo describir mi casa o un piso que busco.", ["a1.gram.ser-estar-hay"]],
  [17, "read", "anuncio-piso", "Leer anuncios de vivienda", "Puedo elegir un piso según mis necesidades leyendo anuncios.", ["a1.read.lista-anuncio"]],

  // Week 18 · Cosas por hacer
  [18, "gram", "od-pronombres", "Objeto directo y lo, la, los, las", "Puedo evitar repetir una cosa con lo, la, los, las, y uso la a personal.", ["a1.gram.articulos"], { pcic: "Gramática 7.1", related: ["/la-estacion-de-los-dos-destinos"] }],
  [18, "gram", "obligacion", "Tener que, hay que y necesitar", "Puedo expresar obligación personal, obligación general y necesidad.", ["a1.gram.tener"], { pcic: "Gramática 9.2" }],
  [18, "voc", "tareas", "Tareas y recados", "Puedo hablar de tareas de casa, trámites y recados.", []],
  [18, "pron", "grupos-consonanticos", "Grupos consonánticos", "Puedo pronunciar tr, pr, pl, bl, cr y gr sin añadir vocales.", ["a1.pron.r-rr"], { pcic: "Pronunciación 2" }],
  [18, "fun", "organizar-tareas", "Organizar tareas", "Puedo repartir tareas y decir qué tengo que hacer.", ["a1.gram.obligacion"]],
  [18, "wri", "lista-mensaje", "Mensaje con tareas", "Puedo escribir un mensaje para organizar tareas compartidas.", []],

  // Week 19 · Celebraciones
  [19, "gram", "fechas", "Fechas, meses y ordinales", "Puedo decir y preguntar fechas, cumpleaños y el día de una fiesta.", ["a1.voc.numeros-21-100"], { pcic: "Nociones generales 3" }],
  [19, "gram", "porque-causa", "Porque, por qué y es que", "Puedo dar una razón con porque y una excusa con es que.", ["a1.disc.y-pero-tambien"], { pcic: "Gramática 15" }],
  [19, "voc", "fiestas", "Fiestas y celebraciones", "Puedo hablar de fiestas, regalos y celebraciones de distintos países.", []],
  [19, "pron", "entonacion-exclamativa", "Entonación exclamativa y enumeraciones", "Puedo expresar sorpresa y alegría con la entonación, y enumerar con una curva clara.", ["a1.pron.entonacion-preguntas"], { pcic: "Pronunciación 4" }],
  [19, "fun", "invitar", "Invitar, aceptar y rechazar", "Puedo invitar a alguien, aceptar con entusiasmo o rechazar con una excusa amable.", ["a1.fun.proponer", "a1.gram.porque-causa"]],
  [19, "spk", "invitacion", "Invitar por audio", "Puedo grabar una invitación con fecha, hora, lugar y lo que hay que llevar.", []],

  // Week 20 · Checkpoint final A1
  [20, "rev", "checkpoint-final", "Checkpoint final A1", "Puedo presentarme, describir mi vida diaria, hablar de gustos y planes y resolver situaciones básicas.", ["a1.rev.checkpoint-3", "a1.fun.planes-fin-semana", "a1.fun.invitar", "a1.gram.od-pronombres"]],
  [20, "wri", "carta-presentacion", "Carta de presentación A1", "Puedo escribir un texto de 80 palabras sobre mí, mi semana y mis planes.", ["a1.wri.ficha-personal"]],
]);
