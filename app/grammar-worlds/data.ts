export type Example = {
  es: string;
  en: string;
};

export type Station = {
  id: string;
  number: string;
  kicker: string;
  title: string;
  summary: string;
  rule: string;
  formulas: string[];
  examples: Example[];
  note?: string;
};

export type Practice = {
  prompt: string;
  options: string[];
  answer: number;
  why: string;
};

export type GrammarWorldData = {
  slug: string;
  level: string;
  module: string;
  officialTopic: string;
  title: string;
  displayTitle: string;
  subtitle: string;
  intro: string;
  hero: string;
  accent: string;
  accent2: string;
  motif: "factory" | "atelier" | "gallery" | "observatory" | "house" | "market" | "central" | "tower" | "city";
  duration: string;
  world?: {
    eyebrow: string;
    title: string;
    instruction: string;
    enterLabel: string;
  };
  curriculum?: {
    a1: string[];
    a2: string[];
  };
  nextPath?: string;
  nextTitle?: string;
  overview: { label: string; value: string }[];
  bigIdea: {
    eyebrow: string;
    title: string;
    body: string;
    contrast: { label: string; value: string; detail: string }[];
  };
  stations: Station[];
  traps: { wrong: string; right: string; explanation: string }[];
  practice: Practice[];
  speaking: { title: string; prompt: string; support: string }[];
  mission: string;
};

export const nounFactory: GrammarWorldData = {
  slug: "la-fabrica-de-los-nombres",
  level: "A1",
  module: "MÓDULO 01 · INVENTARIO CERVANTES",
  officialTopic: "1. El sustantivo",
  title: "La Fábrica de los Nombres",
  displayTitle: "La Fábrica\nde los Nombres",
  subtitle: "Sustantivos, género y número desde cero",
  intro: "Todo empieza cuando podemos nombrar el mundo. Entrá en la fábrica, reconocé qué es un sustantivo y aprendé a darle género y número sin memorizar listas infinitas.",
  hero: "/grammar-worlds/noun-factory.webp",
  accent: "#f4b942",
  accent2: "#53d7d0",
  motif: "factory",
  duration: "65–80 min",
  nextPath: "/el-atelier-de-la-concordancia",
  nextTitle: "El Atelier de la Concordancia",
  overview: [
    { label: "RECORRIDO", value: "5 estaciones" },
    { label: "PRÁCTICA", value: "8 desafíos" },
    { label: "PRODUCCIÓN", value: "3 misiones" },
  ],
  bigIdea: {
    eyebrow: "ANTES DE ENCENDER LAS MÁQUINAS",
    title: "Un sustantivo le pone nombre a algo.",
    body: "Puede nombrar una persona, un lugar, un objeto, un animal o una idea. En español, cada sustantivo tiene género gramatical y puede aparecer en singular o plural. El género no describe necesariamente el sexo ni una cualidad real: es una propiedad de la palabra.",
    contrast: [
      { label: "PERSONA", value: "la médica", detail: "a person" },
      { label: "LUGAR", value: "Buenos Aires", detail: "a place" },
      { label: "OBJETO", value: "el mate", detail: "an object" },
      { label: "IDEA", value: "la libertad", detail: "an idea" },
    ],
  },
  stations: [
    {
      id: "recognize",
      number: "01",
      kicker: "CINTA DE ENTRADA",
      title: "¿Qué entra en la fábrica?",
      summary: "Primero distinguimos sustantivos de verbos y adjetivos.",
      rule: "Si la palabra puede nombrar una entidad y normalmente admite un artículo —el, la, un, una— probablemente es un sustantivo.",
      formulas: ["ARTÍCULO + SUSTANTIVO", "un + libro", "la + ciudad"],
      examples: [
        { es: "mesa", en: "names an object" },
        { es: "Sofía", en: "names a person" },
        { es: "viaje", en: "names an event" },
        { es: "paciencia", en: "names an idea" },
      ],
      note: "Los nombres propios suelen escribirse con mayúscula y normalmente no necesitan artículo: Argentina, Leo, Córdoba.",
    },
    {
      id: "gender",
      number: "02",
      kicker: "CLASIFICADOR DE GÉNERO",
      title: "Masculino y femenino",
      summary: "El final ayuda, pero el artículo confirma.",
      rule: "Muchos sustantivos en -o son masculinos y muchos en -a son femeninos. Es una tendencia útil, no una regla perfecta. Aprendé siempre la palabra junto con su artículo.",
      formulas: ["-o → normalmente EL", "-a → normalmente LA", "-ción / -dad → normalmente LA"],
      examples: [
        { es: "el libro", en: "the book" },
        { es: "la casa", en: "the house" },
        { es: "la canción", en: "the song" },
        { es: "la ciudad", en: "the city" },
      ],
      note: "Atención a los rebeldes frecuentes: el día, el mapa, el problema, la mano, la foto.",
    },
    {
      id: "number",
      number: "03",
      kicker: "DUPLICADOR",
      title: "De uno a varios",
      summary: "El plural cambia según el último sonido.",
      rule: "Después de vocal, agregamos -s. Después de consonante, agregamos -es. Las palabras terminadas en -z cambian z por c antes de -es.",
      formulas: ["vocal + S", "consonante + ES", "Z → CES"],
      examples: [
        { es: "casa → casas", en: "house → houses" },
        { es: "hotel → hoteles", en: "hotel → hotels" },
        { es: "luz → luces", en: "light → lights" },
        { es: "café → cafés", en: "coffee → coffees" },
      ],
      note: "Si el sustantivo cambia, sus acompañantes también cambian: la casa blanca → las casas blancas.",
    },
    {
      id: "agreement",
      number: "04",
      kicker: "CONTROL DE CALIDAD",
      title: "Todo tiene que coincidir",
      summary: "El artículo revela el género y el número.",
      rule: "Artículo y sustantivo forman un equipo. Masculino/femenino y singular/plural deben coincidir.",
      formulas: ["EL + masculino singular", "LA + femenino singular", "LOS / LAS + plural"],
      examples: [
        { es: "el teléfono", en: "masculine singular" },
        { es: "la mochila", en: "feminine singular" },
        { es: "los teléfonos", en: "masculine plural" },
        { es: "las mochilas", en: "feminine plural" },
      ],
      note: "No adivines el género desde el inglés. En español decimos la foto, el problema y el mapa.",
    },
    {
      id: "meaning",
      number: "05",
      kicker: "SALA DE ETIQUETADO",
      title: "La forma puede cambiar el significado",
      summary: "Algunas parejas no son dos géneros de la misma cosa.",
      rule: "En unas pocas palabras, cambiar el artículo crea otra palabra o cambia el significado. Conviene aprenderlas como dos unidades diferentes.",
      formulas: ["EL capital ≠ LA capital", "EL cura ≠ LA cura", "EL orden ≠ LA orden"],
      examples: [
        { es: "el capital", en: "money / assets" },
        { es: "la capital", en: "capital city" },
        { es: "el cura", en: "the priest" },
        { es: "la cura", en: "the cure" },
      ],
      note: "Para A1 alcanza con reconocer estas parejas. No hace falta producir una lista larga.",
    },
  ],
  traps: [
    { wrong: "la problema", right: "el problema", explanation: "Problema termina en -a, pero es masculino." },
    { wrong: "el foto", right: "la foto", explanation: "Foto es la forma corta de fotografía y conserva el femenino." },
    { wrong: "dos hotel", right: "dos hoteles", explanation: "Después de consonante, agregamos -es." },
    { wrong: "las mapa", right: "los mapas", explanation: "Mapa es masculino y el plural necesita coincidencia completa." },
  ],
  practice: [
    { prompt: "Elegí el sustantivo: rápido / ciudad / caminar", options: ["rápido", "ciudad", "caminar"], answer: 1, why: "Ciudad nombra un lugar." },
    { prompt: "___ problema es difícil.", options: ["El", "La", "Las"], answer: 0, why: "Problema es una excepción frecuente: masculino." },
    { prompt: "Plural de canción", options: ["cancións", "canciones", "canciónes"], answer: 1, why: "Termina en consonante: agregamos -es y se ajusta el acento escrito." },
    { prompt: "Plural de luz", options: ["luzes", "luzs", "luces"], answer: 2, why: "Z cambia a c antes de -es." },
    { prompt: "Una opción con concordancia completa", options: ["las casas", "los casa", "la casas"], answer: 0, why: "Las y casas son femenino plural." },
    { prompt: "___ mano derecha", options: ["El", "La", "Los"], answer: 1, why: "Mano es femenina aunque termine en -o." },
    { prompt: "Una palabra que nombra una idea", options: ["libertad", "libre", "liberar"], answer: 0, why: "Libertad nombra un concepto." },
    { prompt: "Tres ___", options: ["cafés", "café", "cafees"], answer: 0, why: "Café termina en vocal: agregamos -s." },
  ],
  speaking: [
    { title: "Inventario de bolsillo", prompt: "Mostrá cinco objetos que tenés cerca y decí artículo + sustantivo.", support: "Tengo un teléfono, una taza…" },
    { title: "La fábrica duplica", prompt: "Convertí esos cinco objetos al plural y hacé coincidir el artículo.", support: "un teléfono → unos teléfonos" },
    { title: "Mi mundo en diez nombres", prompt: "Elegí diez sustantivos que representen tu vida y explicá por qué.", support: "Para mí, la música es importante porque…" },
  ],
  mission: "Diseñá una caja de viaje con ocho cosas. Nombrá cada objeto con artículo, después imaginá que preparás dos cajas y transformá toda la lista al plural.",
};

export const agreementAtelier: GrammarWorldData = {
  slug: "el-atelier-de-la-concordancia",
  level: "A1",
  module: "MÓDULO 02 · INVENTARIO CERVANTES",
  officialTopic: "2. El adjetivo",
  title: "El Atelier de la Concordancia",
  displayTitle: "El Atelier de\nla Concordancia",
  subtitle: "Adjetivos que combinan con precisión",
  intro: "En este atelier, cada detalle tiene que combinar. El adjetivo describe al sustantivo y adapta su género y su número para formar una imagen clara.",
  hero: "/grammar-worlds/agreement-atelier.webp",
  accent: "#e8b45d",
  accent2: "#54c9a4",
  motif: "atelier",
  duration: "60–75 min",
  nextPath: "/la-galeria-de-los-articulos",
  nextTitle: "La Galería de los Artículos",
  overview: [
    { label: "RECORRIDO", value: "5 salas" },
    { label: "PRÁCTICA", value: "8 pruebas" },
    { label: "PRODUCCIÓN", value: "3 encargos" },
  ],
  bigIdea: {
    eyebrow: "ANTES DE ABRIR EL ATELIER",
    title: "El adjetivo añade una característica.",
    body: "Nos dice cómo es una persona, un lugar, un objeto o una idea. En español, muchos adjetivos cambian para combinar con el género y el número del sustantivo. La concordancia hace visible esa relación.",
    contrast: [
      { label: "PERSONA", value: "una amiga simpática", detail: "personality" },
      { label: "OBJETO", value: "un abrigo negro", detail: "colour" },
      { label: "LUGAR", value: "una ciudad grande", detail: "size" },
      { label: "IDEA", value: "una opción interesante", detail: "evaluation" },
    ],
  },
  stations: [
    { id: "function", number: "01", kicker: "MESA DE DISEÑO", title: "Sustantivo + descripción", summary: "Primero identificamos quién recibe la característica.", rule: "El sustantivo nombra; el adjetivo describe. En la forma más neutra y frecuente del español, el adjetivo aparece después del sustantivo.", formulas: ["SUSTANTIVO + ADJETIVO", "una casa + bonita", "un café + tranquilo"], examples: [{es:"un libro interesante",en:"an interesting book"},{es:"una calle tranquila",en:"a quiet street"},{es:"un día difícil",en:"a difficult day"},{es:"una persona amable",en:"a kind person"}], note: "En inglés el adjetivo suele ir antes. En español, para empezar, usá sustantivo + adjetivo." },
    { id: "oa", number: "02", kicker: "CORTE DE GÉNERO", title: "Adjetivos en -o", summary: "Cuatro formas para una misma cualidad.", rule: "Los adjetivos que terminan en -o suelen cambiar a -a para el femenino y agregan -s para el plural.", formulas: ["-O / -A", "-OS / -AS", "nuevo · nueva · nuevos · nuevas"], examples: [{es:"el barrio nuevo",en:"masculine singular"},{es:"la casa nueva",en:"feminine singular"},{es:"los barrios nuevos",en:"masculine plural"},{es:"las casas nuevas",en:"feminine plural"}], note: "Si el grupo tiene nombres masculinos y femeninos, el plural tradicional es masculino: Ana y Leo son argentinos." },
    { id: "invariable", number: "03", kicker: "TELAS FLEXIBLES", title: "Una forma para dos géneros", summary: "Los adjetivos en -e o consonante suelen conservar su forma de género.", rule: "Grande, interesante, fácil o azul no cambian por masculino/femenino. Sí cambian por número.", formulas: ["-E → misma forma", "consonante → misma forma", "+ S / ES para plural"], examples: [{es:"un hotel grande",en:"a large hotel"},{es:"una casa grande",en:"a large house"},{es:"dos hoteles grandes",en:"two large hotels"},{es:"unas calles azules",en:"some blue streets"}], note: "Nacionalidades en consonante sí pueden cambiar: español / española; francés / francesa." },
    { id: "intensity", number: "04", kicker: "CONTROL DE INTENSIDAD", title: "Muy no cambia", summary: "La intensidad se coloca antes del adjetivo.", rule: "Muy intensifica un adjetivo y siempre conserva la misma forma. El adjetivo sigue concordando con el sustantivo.", formulas: ["MUY + ADJETIVO", "muy bonito / muy bonita", "muy grandes"], examples: [{es:"Es muy caro.",en:"It is very expensive."},{es:"Son muy caras.",en:"They are very expensive."},{es:"La clase es muy útil.",en:"The class is very useful."},{es:"Los cafés son muy buenos.",en:"The cafés are very good."}], note: "No decimos mucha interesante. Mucho acompaña sustantivos; muy intensifica adjetivos y adverbios." },
    { id: "position", number: "05", kicker: "PASARELA FINAL", title: "La posición también comunica", summary: "Después es la opción segura; antes puede añadir intención.", rule: "En A1 usamos normalmente el adjetivo después. Algunos adjetivos frecuentes aparecen antes: una buena idea, un gran día. La posición puede cambiar el matiz.", formulas: ["descripción → después", "valoración → a veces antes", "un hombre grande ≠ un gran hombre"], examples: [{es:"una mesa redonda",en:"a round table"},{es:"un coche rojo",en:"a red car"},{es:"una buena idea",en:"a good idea"},{es:"un gran día",en:"a great day"}], note: "Para comunicar con seguridad, colocá colores, formas y nacionalidades después del sustantivo." },
  ],
  traps: [
    { wrong: "una casa bonito", right: "una casa bonita", explanation: "Casa es femenina singular; bonito debe cambiar a bonita." },
    { wrong: "dos hoteles grande", right: "dos hoteles grandes", explanation: "Grande no cambia por género, pero sí por número." },
    { wrong: "una muy buena café", right: "un café muy bueno", explanation: "Café es masculino; muy va delante del adjetivo." },
    { wrong: "una chica español", right: "una chica española", explanation: "Las nacionalidades en consonante suelen formar femenino con -a." },
  ],
  practice: [
    { prompt: "Una casa ___", options: ["blanco", "blanca", "blancos"], answer: 1, why: "Casa es femenina singular." },
    { prompt: "Dos barrios ___", options: ["tranquilo", "tranquila", "tranquilos"], answer: 2, why: "Barrios es masculino plural." },
    { prompt: "Una película ___", options: ["interesante", "interesanta", "interesantos"], answer: 0, why: "Interesante conserva la misma forma para ambos géneros." },
    { prompt: "Las calles son muy ___", options: ["largo", "largas", "larga"], answer: 1, why: "Calles exige femenino plural; muy no cambia." },
    { prompt: "Orden neutro para A1", options: ["una roja mochila", "una mochila roja", "roja una mochila"], answer: 1, why: "La descripción neutra suele ir después del sustantivo." },
    { prompt: "Un estudiante ___", options: ["francés", "francesa", "franceses"], answer: 0, why: "Estudiante es masculino singular en este contexto." },
    { prompt: "Ana y Paula son ___", options: ["argentino", "argentinas", "argentina"], answer: 1, why: "El grupo es femenino plural." },
    { prompt: "Elegí la combinación correcta", options: ["los libros útiles", "los libros útil", "las libros útiles"], answer: 0, why: "Artículo, sustantivo y adjetivo coinciden en género y número." },
  ],
  speaking: [
    { title: "Estilista de espacios", prompt: "Describí una habitación ideal con cinco sustantivos y cinco adjetivos.", support: "Quiero una mesa grande y unas sillas cómodas." },
    { title: "Contraste de looks", prompt: "Compará dos personas, lugares u objetos sin decir cuál preferís al principio.", support: "Uno es moderno y luminoso; el otro es clásico y oscuro." },
    { title: "La prenda imposible", prompt: "Inventá una prenda extraña y describí color, forma, tamaño y material.", support: "Es una chaqueta larga, verde y muy ligera." },
  ],
  mission: "Creá una colección de cuatro looks para cuatro situaciones: trabajo, viaje, fiesta y descanso. Usá al menos doce adjetivos con concordancia correcta.",
};

export const articleGallery: GrammarWorldData = {
  slug: "la-galeria-de-los-articulos",
  level: "A1",
  module: "MÓDULO 03 · INVENTARIO CERVANTES",
  officialTopic: "3. El artículo",
  title: "La Galería de los Artículos",
  displayTitle: "La Galería de\nlos Artículos",
  subtitle: "El, la, un, una y la lógica de elegir",
  intro: "Los artículos son pequeñas luces: muestran si hablamos de algo conocido, de algo nuevo o de una categoría general. Recorré la galería y aprendé a elegir por significado.",
  hero: "/grammar-worlds/article-gallery.webp",
  accent: "#d6ad59",
  accent2: "#7d8cff",
  motif: "gallery",
  duration: "65–80 min",
  nextPath: "/el-observatorio-de-las-distancias",
  nextTitle: "El Observatorio de las Distancias",
  overview: [
    { label: "RECORRIDO", value: "5 galerías" },
    { label: "PRÁCTICA", value: "8 decisiones" },
    { label: "PRODUCCIÓN", value: "3 curadurías" },
  ],
  bigIdea: {
    eyebrow: "ANTES DE ENTRAR A LA GALERÍA",
    title: "El artículo muestra cómo miramos el sustantivo.",
    body: "No es solamente una marca de género. Un / una presenta algo nuevo o no identificado. El / la señala algo identificable para las dos personas. A veces no usamos artículo porque hablamos de profesión, cantidad no específica o una categoría en ciertos contextos.",
    contrast: [
      { label: "NUEVO", value: "Veo una película.", detail: "first mention" },
      { label: "CONOCIDO", value: "La película es buena.", detail: "now identified" },
      { label: "DESTINO", value: "Voy al museo.", detail: "a + el" },
      { label: "ORIGEN", value: "Vengo del banco.", detail: "de + el" },
    ],
  },
  stations: [
    { id: "system", number: "01", kicker: "VESTÍBULO", title: "Ocho formas, un sistema", summary: "El artículo concuerda con género y número.", rule: "Tenemos cuatro artículos definidos y cuatro indefinidos. La forma depende del sustantivo que acompaña.", formulas: ["EL · LA · LOS · LAS", "UN · UNA · UNOS · UNAS", "artículo + sustantivo"], examples: [{es:"el museo",en:"the museum"},{es:"la entrada",en:"the ticket / entrance"},{es:"unos cuadros",en:"some paintings"},{es:"unas esculturas",en:"some sculptures"}], note: "Aprendé sustantivo y artículo juntos: la noche, el viaje, la ciudad, el mapa." },
    { id: "unknown", number: "02", kicker: "SALA DE LO NUEVO", title: "Un / una presenta", summary: "Algo entra por primera vez en la conversación.", rule: "Usamos el indefinido cuando la identidad todavía no es compartida o cuando es un miembro cualquiera de un grupo.", formulas: ["PRIMERA MENCIÓN", "UNO ENTRE VARIOS", "Hay + un / una"], examples: [{es:"Hay un café cerca.",en:"There is a café nearby."},{es:"Necesito una farmacia.",en:"I need a pharmacy."},{es:"Tengo una pregunta.",en:"I have a question."},{es:"Veo unos amigos.",en:"I see some friends."}], note: "Un / una no siempre significa exactamente one. Muchas veces presenta algo nuevo." },
    { id: "known", number: "03", kicker: "SALA DE LO CONOCIDO", title: "El / la señala", summary: "Las dos personas pueden identificar el referente.", rule: "Usamos el definido cuando ya mencionamos algo, es único en el contexto o el oyente puede reconocerlo.", formulas: ["SEGUNDA MENCIÓN", "CONTEXTO COMPARTIDO", "REFERENTE IDENTIFICABLE"], examples: [{es:"Veo un café. El café está lleno.",en:"A café → the café"},{es:"Cerrá la puerta.",en:"the door in this room"},{es:"El sol está fuerte.",en:"a unique referent"},{es:"¿Dónde está el baño?",en:"the relevant bathroom"}], note: "La pregunta clave no es ‘¿existe?’, sino ‘¿podemos identificarlo?’" },
    { id: "zero", number: "04", kicker: "SALA VACÍA", title: "Cuando no hay artículo", summary: "La ausencia también comunica.", rule: "Después de ser + profesión no usamos artículo. Tampoco suele aparecer con cantidades no específicas y ciertos nombres propios.", formulas: ["SER + PROFESIÓN", "cantidad no específica", "nombre propio"], examples: [{es:"Soy profesor.",en:"I am a teacher."},{es:"Necesito agua.",en:"I need water."},{es:"Compro libros.",en:"I buy books."},{es:"Vivo en Argentina.",en:"I live in Argentina."}], note: "Si describimos la profesión, el artículo puede volver: Es un profesor excelente." },
    { id: "contractions", number: "05", kicker: "PASILLO DE ENLACE", title: "Al y del", summary: "Dos combinaciones se fusionan obligatoriamente.", rule: "A + el se convierte en al. De + el se convierte en del. Con la, los y las no hay contracción.", formulas: ["A + EL = AL", "DE + EL = DEL", "a la / de la"], examples: [{es:"Voy al mercado.",en:"I go to the market."},{es:"Salgo del hotel.",en:"I leave the hotel."},{es:"Voy a la estación.",en:"I go to the station."},{es:"Vengo de la plaza.",en:"I come from the square."}], note: "No contraemos cuando El forma parte de un nombre propio: viajo a El Salvador." },
  ],
  traps: [
    { wrong: "Voy a el banco.", right: "Voy al banco.", explanation: "A + el se contrae obligatoriamente." },
    { wrong: "Soy un médico.", right: "Soy médico.", explanation: "Con ser + profesión, normalmente no usamos artículo si solo identificamos la profesión." },
    { wrong: "Hay el restaurante cerca.", right: "Hay un restaurante cerca.", explanation: "Hay suele presentar una entidad nueva o no identificada." },
    { wrong: "Vengo de el museo.", right: "Vengo del museo.", explanation: "De + el se convierte en del." },
  ],
  practice: [
    { prompt: "Hay ___ supermercado acá cerca.", options: ["el", "un", "del"], answer: 1, why: "Presentamos un lugar todavía no identificado." },
    { prompt: "Veo una casa. ___ casa es azul.", options: ["Una", "La", "Un"], answer: 1, why: "Es la segunda mención; ya sabemos qué casa es." },
    { prompt: "Marta es ___ arquitecta.", options: ["una", "la", "—"], answer: 2, why: "Ser + profesión normalmente va sin artículo." },
    { prompt: "Mañana voy ___ aeropuerto.", options: ["a el", "al", "del"], answer: 1, why: "A + el = al." },
    { prompt: "Salimos ___ restaurante a las diez.", options: ["de el", "del", "al"], answer: 1, why: "De + el = del." },
    { prompt: "Necesito ___ información.", options: ["una", "la", "—"], answer: 2, why: "Información no específica e incontable puede ir sin artículo." },
    { prompt: "¿Podés cerrar ___ ventana?", options: ["la", "una", "unas"], answer: 0, why: "En la situación, ambos pueden identificar la ventana relevante." },
    { prompt: "Es ___ profesora muy creativa.", options: ["una", "la", "—"], answer: 0, why: "El adjetivo evalúa; presentamos a la persona como un tipo de profesora." },
  ],
  speaking: [
    { title: "Primera y segunda mención", prompt: "Presentá tres objetos nuevos y después agregá un detalle sobre cada uno.", support: "Veo una lámpara. La lámpara es antigua." },
    { title: "Ruta urbana", prompt: "Explicá un recorrido usando al, del, a la y de la.", support: "Salgo del hotel, voy al museo y después…" },
    { title: "Quién soy", prompt: "Decí profesión, nacionalidad, ciudad y una descripción personal.", support: "Soy diseñador. Soy argentino. Vivo en… Soy una persona…" },
  ],
  mission: "Imaginá que curás una exposición con seis objetos. Presentá cada objeto con un / una; después recorré la muestra otra vez usando el / la y explicando por qué cada pieza importa.",
};

export const demonstrativeObservatory: GrammarWorldData = {
  slug: "el-observatorio-de-las-distancias",
  level: "A1",
  module: "MÓDULO 04 · INVENTARIO CERVANTES",
  officialTopic: "4. Los demostrativos",
  title: "El Observatorio de las Distancias",
  displayTitle: "El Observatorio\nde las Distancias",
  subtitle: "Este, ese, aquel y la perspectiva de quien habla",
  intro: "Una misma cosa cambia de posición según desde dónde la miramos. Ajustá las lentes del observatorio y aprendé a señalar objetos, personas, lugares e ideas con precisión.",
  hero: "/grammar-worlds/demonstrative-observatory.webp",
  accent: "#e4b858",
  accent2: "#55d4d0",
  motif: "observatory",
  duration: "65–80 min",
  world: {
    eyebrow: "MAPA 3D DEL OBSERVATORIO",
    title: "Calibrá la distancia antes de elegir.",
    instruction: "Cada consola abre una lente distinta. Elegí una, observá la escena y entrá en su explicación completa.",
    enterLabel: "ENTRAR EN LA LENTE",
  },
  curriculum: {
    a1: ["Paradigmas este, ese y aquel", "Formas neutras esto, eso y aquello", "Deixis espacial: aquí, ahí, allí", "Posición delante del sustantivo"],
    a2: ["Deixis temporal", "Uso pronominal y anafórico"],
  },
  nextPath: "/la-casa-de-las-pertenencias",
  nextTitle: "La Casa de las Pertenencias",
  overview: [
    { label: "RECORRIDO", value: "5 lentes" },
    { label: "PRÁCTICA", value: "8 coordenadas" },
    { label: "PRODUCCIÓN", value: "3 observaciones" },
  ],
  bigIdea: {
    eyebrow: "ANTES DE MIRAR POR EL TELESCOPIO",
    title: "Los demostrativos sitúan algo respecto de quien habla.",
    body: "Este señala lo cercano; ese, una distancia media o algo próximo a la otra persona; aquel, lo lejano. Además, cada forma concuerda con el género y el número del sustantivo. Esto, eso y aquello son neutros: señalan algo sin nombrarlo.",
    contrast: [
      { label: "CERCA", value: "este libro", detail: "aquí / acá" },
      { label: "MEDIA", value: "esa silla", detail: "ahí" },
      { label: "LEJOS", value: "aquellas casas", detail: "allí / allá" },
      { label: "SIN NOMBRE", value: "¿Qué es eso?", detail: "neutro" },
    ],
  },
  stations: [
    { id: "paradigm", number: "01", kicker: "LENTE DE CONCORDANCIA", title: "Doce formas que encajan", summary: "Distancia, género y número trabajan juntos.", rule: "Este grupo tiene cuatro formas por distancia. Elegimos masculino o femenino, singular o plural, según el sustantivo.", formulas: ["ESTE · ESTA · ESTOS · ESTAS", "ESE · ESA · ESOS · ESAS", "AQUEL · AQUELLA · AQUELLOS · AQUELLAS"], examples: [{es:"este teléfono",en:"this phone"},{es:"estas llaves",en:"these keys"},{es:"ese café",en:"that café"},{es:"aquellas montañas",en:"those mountains over there"}], note: "La distancia es relativa a la conversación: dos personas pueden organizar el espacio de manera diferente." },
    { id: "distance", number: "02", kicker: "ANILLOS DE DISTANCIA", title: "Cerca, media y lejos", summary: "Tres zonas para orientar la conversación.", rule: "Usamos este para lo cercano, ese para una zona media o próxima al interlocutor y aquel para lo claramente lejano.", formulas: ["ESTE ↔ AQUÍ / ACÁ", "ESE ↔ AHÍ", "AQUEL ↔ ALLÍ / ALLÁ"], examples: [{es:"Esta taza de acá.",en:"this cup here"},{es:"Ese bolso de ahí.",en:"that bag there"},{es:"Aquel edificio de allá.",en:"that building over there"},{es:"¿Preferís esta mesa o esa?",en:"this table or that one?"}], note: "En la lengua real, este y ese cubren muchas situaciones. Aquel añade una distancia marcada o una perspectiva narrativa." },
    { id: "neuter", number: "03", kicker: "CÁMARA DE LO DESCONOCIDO", title: "Esto, eso y aquello", summary: "Señalamos sin conocer el nombre.", rule: "Las formas neutras no acompañan un sustantivo. Sirven para preguntar por un objeto desconocido, resumir una situación o señalar una idea completa.", formulas: ["¿QUÉ ES ESTO?", "ESO ES IMPORTANTE", "AQUELLO FUE DIFÍCIL"], examples: [{es:"¿Qué es esto?",en:"What is this?"},{es:"Eso es un regalo.",en:"That is a gift."},{es:"No entiendo aquello.",en:"I don't understand that over there."},{es:"Esto es interesante.",en:"This is interesting."}], note: "Nunca decimos esto libro ni estos como plural de esto. Con sustantivo, elegimos este libro." },
    { id: "position", number: "04", kicker: "ÓRBITA DEL SUSTANTIVO", title: "Antes del nombre", summary: "El demostrativo ocupa el lugar del artículo.", rule: "En el uso básico, colocamos el demostrativo delante del sustantivo. No lo combinamos con el, la, los o las.", formulas: ["DEMOSTRATIVO + SUSTANTIVO", "ESTA casa", "no: LA ESTA casa"], examples: [{es:"este barrio",en:"this neighborhood"},{es:"esa película",en:"that film"},{es:"aquellos días",en:"those days"},{es:"estas personas",en:"these people"}], note: "El demostrativo ya identifica el sustantivo; por eso no necesita artículo delante." },
    { id: "extension", number: "05", kicker: "TIEMPO Y SUSTITUCIÓN", title: "Más allá del espacio", summary: "También señalamos momentos y evitamos repeticiones.", rule: "En una expansión A2, los demostrativos pueden ubicar momentos —esta tarde, aquel año— y pueden reemplazar un sustantivo ya mencionado.", formulas: ["ESTA TARDE", "AQUEL AÑO", "PREFIERO ESA"], examples: [{es:"Esta semana trabajo mucho.",en:"this week"},{es:"Aquel verano fue especial.",en:"that summer long ago"},{es:"¿Qué camisa querés? Esa.",en:"Which shirt? That one."},{es:"Estos son mis amigos.",en:"These are my friends."}], note: "La tilde en éste, ésa o aquéllos ya no es necesaria según la norma actual." },
  ],
  traps: [
    { wrong: "el este libro", right: "este libro", explanation: "El demostrativo ocupa el lugar del artículo." },
    { wrong: "esto libro", right: "este libro", explanation: "Esto es neutro y nunca acompaña un sustantivo." },
    { wrong: "esta zapatos", right: "estos zapatos", explanation: "Zapatos es masculino plural." },
    { wrong: "aquello casa", right: "aquella casa", explanation: "Casa exige la forma femenina singular." },
  ],
  practice: [
    { prompt: "___ móvil que tengo en la mano", options: ["Este", "Ese", "Aquello"], answer: 0, why: "Está junto a quien habla y móvil es masculino singular." },
    { prompt: "___ montañas de allá", options: ["Estas", "Esos", "Aquellas"], answer: 2, why: "Son lejanas y montañas es femenino plural." },
    { prompt: "¿Qué es ___? No conozco ese objeto.", options: ["esto", "este", "esta"], answer: 0, why: "No sabemos qué sustantivo es; usamos el neutro." },
    { prompt: "___ mochila de ahí es tuya.", options: ["Ese", "Esa", "Esos"], answer: 1, why: "Mochila es femenina singular y está a distancia media." },
    { prompt: "Elegí la combinación correcta", options: ["la esa calle", "esa calle", "eso calle"], answer: 1, why: "El demostrativo va delante del nombre sin artículo." },
    { prompt: "___ chicos de acá son mis amigos.", options: ["Estos", "Estas", "Aquellos"], answer: 0, why: "Chicos es masculino plural y está cerca." },
    { prompt: "Para hablar de un verano lejano", options: ["este verano", "aquel verano", "esto verano"], answer: 1, why: "Aquel puede marcar distancia temporal." },
    { prompt: "¿Qué falda preferís? ___ de ahí.", options: ["Esa", "Eso", "Ese"], answer: 0, why: "Esa reemplaza a falda y conserva el femenino singular." },
  ],
  speaking: [
    { title: "Mesa en tres distancias", prompt: "Elegí objetos cercanos, medios y lejanos. Señalalos con un demostrativo y su nombre.", support: "Este cuaderno, esa ventana, aquellos edificios…" },
    { title: "Sala de elecciones", prompt: "Compará dos objetos y decidí cuál preferís y por qué.", support: "Prefiero esta lámpara porque es más moderna que esa." },
    { title: "Álbum del tiempo", prompt: "Señalá un momento actual, uno reciente y uno lejano de tu vida.", support: "Esta semana…, ese mes…, aquel año…" },
  ],
  mission: "Construí una escena con nueve elementos: tres cerca, tres a media distancia y tres lejos. Presentalos con demostrativos, después elegí tres sin repetir el sustantivo.",
};

export const possessionHouse: GrammarWorldData = {
  slug: "la-casa-de-las-pertenencias",
  level: "A1",
  module: "MÓDULO 05 · INVENTARIO CERVANTES",
  officialTopic: "5. Los posesivos",
  title: "La Casa de las Pertenencias",
  displayTitle: "La Casa de\nlas Pertenencias",
  subtitle: "Mi, tu, su, nuestro y la lógica de pertenecer",
  intro: "Cada habitación guarda objetos, historias y propietarios. Abrí los baúles de la casa para descubrir quién tiene qué y cómo cambia el posesivo según la cosa poseída.",
  hero: "/grammar-worlds/possession-house.webp",
  accent: "#d7ad64",
  accent2: "#63c49c",
  motif: "house",
  duration: "65–80 min",
  world: {
    eyebrow: "PLANO 3D DE LA CASA",
    title: "Encontrá al dueño de cada historia.",
    instruction: "Cada llave abre una habitación con una relación distinta entre propietario y pertenencia.",
    enterLabel: "ABRIR LA HABITACIÓN",
  },
  curriculum: {
    a1: ["Formas átonas mi, tu, su", "Nuestro y la concordancia", "Posición prenominal", "Incompatibilidad con el artículo"],
    a2: ["Formas tónicas mío, tuyo, suyo", "Ambigüedad y estructuras con de"],
  },
  nextPath: "/el-mercado-de-las-cantidades",
  nextTitle: "El Mercado de las Cantidades",
  overview: [
    { label: "RECORRIDO", value: "5 habitaciones" },
    { label: "PRÁCTICA", value: "8 llaves" },
    { label: "PRODUCCIÓN", value: "3 inventarios" },
  ],
  bigIdea: {
    eyebrow: "ANTES DE ABRIR LA CASA",
    title: "El posesivo conecta una pertenencia con una persona.",
    body: "Mi, tu y su indican quién se relaciona con algo. La forma no describe al propietario: concuerda con la cosa poseída. Por eso una mujer puede decir mi hermano y un hombre puede decir mi hermana.",
    contrast: [
      { label: "YO", value: "mi llave / mis llaves", detail: "my" },
      { label: "VOS / TÚ", value: "tu cuarto / tus cuartos", detail: "your" },
      { label: "ÉL / ELLA / USTED", value: "su casa / sus casas", detail: "his / her / your" },
      { label: "NOSOTROS", value: "nuestro hogar", detail: "our" },
    ],
  },
  stations: [
    { id: "short", number: "01", kicker: "HALL DE LOS DUEÑOS", title: "Mi, tu y su", summary: "Una forma singular y otra plural.", rule: "Mi, tu y su van antes del sustantivo. Solo cambian por número: mi/mis, tu/tus, su/sus.", formulas: ["MI / MIS", "TU / TUS", "SU / SUS"], examples: [{es:"mi pasaporte",en:"my passport"},{es:"mis documentos",en:"my documents"},{es:"tu habitación",en:"your room"},{es:"sus maletas",en:"his / her / your / their bags"}], note: "El plural habla de varias cosas poseídas, no de varias personas propietarias: su casa / sus casas." },
    { id: "our", number: "02", kicker: "SALÓN DE LA FAMILIA", title: "Nuestro tiene cuatro formas", summary: "Género y número pertenecen al objeto.", rule: "Nuestro concuerda con el sustantivo: nuestro, nuestra, nuestros, nuestras. En variedades con vosotros también existe vuestro, vuestra, vuestros, vuestras.", formulas: ["NUESTRO libro", "NUESTRA casa", "NUESTROS amigos", "NUESTRAS llaves"], examples: [{es:"nuestro barrio",en:"our neighborhood"},{es:"nuestra familia",en:"our family"},{es:"nuestros planes",en:"our plans"},{es:"nuestras fotos",en:"our photos"}], note: "En gran parte de América se usa su para ustedes: su mesa, sus entradas." },
    { id: "ambiguity", number: "03", kicker: "CUARTO DE LOS SECRETOS", title: "Su puede tener muchos dueños", summary: "El contexto aclara la relación.", rule: "Su puede significar de él, de ella, de usted, de ellos, de ellas o de ustedes. Si hay ambigüedad, usamos de + persona.", formulas: ["SU = DE ÉL / DE ELLA", "SU = DE USTED", "SU = DE ELLOS / USTEDES"], examples: [{es:"Es su libro.",en:"context decides the owner"},{es:"Es el libro de Ana.",en:"Ana's book"},{es:"Es la casa de ellos.",en:"their house"},{es:"¿Es su turno, señora?",en:"Is it your turn, ma'am?"}], note: "Repetir de + nombre no es un error: muchas veces es la forma más clara." },
    { id: "position", number: "04", kicker: "ARMARIO DE POSICIONES", title: "Antes del sustantivo y sin artículo", summary: "El posesivo ya identifica la pertenencia.", rule: "Los posesivos átonos van delante del sustantivo y no se combinan con artículo. Tampoco aparecen solos.", formulas: ["POSESIVO + SUSTANTIVO", "MI casa", "no: LA MI casa"], examples: [{es:"tu teléfono",en:"your phone"},{es:"nuestra profesora",en:"our teacher"},{es:"sus amigos",en:"their friends"},{es:"mi trabajo",en:"my job"}], note: "No decimos hay mi mochila. Para localizar algo concreto, decimos mi mochila está aquí." },
    { id: "tonic", number: "05", kicker: "SUITE A2", title: "Mío, tuyo y suyo", summary: "Una expansión para contrastar o reemplazar.", rule: "Las formas tónicas concuerdan con lo poseído y pueden aparecer después del sustantivo o reemplazarlo: mío, mía, míos, mías; tuyo; suyo; nuestro.", formulas: ["ES MÍO / MÍA", "UN AMIGO MÍO", "EL TUYO / LA TUYA"], examples: [{es:"Este libro es mío.",en:"This book is mine."},{es:"Es una amiga mía.",en:"She is a friend of mine."},{es:"Mi casa es grande; la tuya es pequeña.",en:"mine vs yours"},{es:"Ese asiento es suyo.",en:"That seat is yours/his/hers/theirs."}], note: "Con partes del cuerpo usamos normalmente artículo: Me duele la cabeza, no mi cabeza." },
  ],
  traps: [
    { wrong: "mi casas", right: "mis casas", explanation: "El posesivo concuerda con el número de casas." },
    { wrong: "nuestra amigos", right: "nuestros amigos", explanation: "Amigos es masculino plural." },
    { wrong: "la mi mochila", right: "mi mochila", explanation: "El posesivo prenominal no se combina con artículo." },
    { wrong: "Me duele mi cabeza.", right: "Me duele la cabeza.", explanation: "Con partes del cuerpo suele usarse el artículo definido." },
  ],
  practice: [
    { prompt: "Yo tengo un pasaporte. Es ___ pasaporte.", options: ["mi", "mis", "su"], answer: 0, why: "El dueño es yo y el objeto es singular." },
    { prompt: "Vos tenés dos entradas. Son ___ entradas.", options: ["tu", "tus", "sus"], answer: 1, why: "Entradas es plural: tus." },
    { prompt: "Nosotros vivimos acá. Es ___ casa.", options: ["nuestro", "nuestra", "nuestras"], answer: 1, why: "Casa es femenina singular." },
    { prompt: "Ana tiene un perro. Es ___ perro.", options: ["mi", "su", "sus"], answer: 1, why: "Su conecta a Ana con un objeto singular." },
    { prompt: "Elegí la forma correcta", options: ["los mis libros", "mis libros", "mi libros"], answer: 1, why: "Mis concuerda con el plural y no lleva artículo." },
    { prompt: "Nosotros tenemos planes. Son ___ planes.", options: ["nuestra", "nuestros", "nuestro"], answer: 1, why: "Planes es masculino plural." },
    { prompt: "Este abrigo pertenece a mí. Es ___.", options: ["mío", "mía", "mi"], answer: 0, why: "Abrigo es masculino singular; usamos la forma tónica mío." },
    { prompt: "Para eliminar una ambigüedad", options: ["su mochila", "la mochila de Leo", "sus mochila"], answer: 1, why: "De Leo identifica al propietario con precisión." },
  ],
  speaking: [
    { title: "Baúl de viaje", prompt: "Elegí seis objetos de una valija y explicá a quién pertenece cada uno.", support: "Este es mi pasaporte; esas son sus gafas…" },
    { title: "Retrato de una casa", prompt: "Describí una casa compartida usando mi, tu, su y nuestro.", support: "Esta es nuestra cocina. Mi taza está junto a tu taza." },
    { title: "Objetos perdidos", prompt: "Compará objetos parecidos y devolvelos a la persona correcta.", support: "Este paraguas no es mío; creo que es suyo." },
  ],
  mission: "Organizá doce objetos de una casa entre cuatro personas. Presentá cada pertenencia, aclará dos casos ambiguos con de + nombre y contrastá tres objetos con mío, tuyo o suyo.",
};

export const quantityMarket: GrammarWorldData = {
  slug: "el-mercado-de-las-cantidades",
  level: "A1",
  module: "MÓDULO 06 · INVENTARIO CERVANTES",
  officialTopic: "6. Los cuantificadores",
  title: "El Mercado de las Cantidades",
  displayTitle: "El Mercado de\nlas Cantidades",
  subtitle: "Números, cantidades y comparaciones para comprar mejor",
  intro: "En este mercado, cada decisión depende de cuánto hay, cuánto falta y cuánto necesitás. Recorré los puestos y convertí números y cantidades en español útil.",
  hero: "/grammar-worlds/quantity-market.webp",
  accent: "#e6a64f",
  accent2: "#49c1b4",
  motif: "market",
  duration: "70–85 min",
  nextPath: "/la-central-de-las-identidades",
  nextTitle: "La Central de las Identidades",
  world: {
    eyebrow: "RECORRIDO 3D DEL MERCADO",
    title: "Medí antes de llenar la canasta.",
    instruction: "Cada puesto cambia la escala: número exacto, cantidad aproximada, totalidad, ausencia y comparación.",
    enterLabel: "ENTRAR EN EL PUESTO",
  },
  curriculum: {
    a1: ["Numerales cardinales", "Ordinales básicos", "Poco, mucho y bastante", "Concordancia de cantidad"],
    a2: ["Todo, otro, demasiado, nada y nadie", "Más, menos, tan, tanto, también y tampoco"],
  },
  overview: [
    { label: "RECORRIDO", value: "5 puestos" },
    { label: "PRÁCTICA", value: "8 compras" },
    { label: "PRODUCCIÓN", value: "3 pedidos" },
  ],
  bigIdea: {
    eyebrow: "ANTES DE ABRIR EL MERCADO",
    title: "Los cuantificadores expresan número, cantidad o grado.",
    body: "Podemos contar con números —dos manzanas—, indicar una cantidad aproximada —poco arroz, muchas frutas— o comparar —más café, menos azúcar—. Algunas formas cambian para concordar y otras permanecen iguales.",
    contrast: [
      { label: "NÚMERO", value: "tres naranjas", detail: "exacto" },
      { label: "POCO", value: "poca leche", detail: "cantidad baja" },
      { label: "MUCHO", value: "muchos tomates", detail: "cantidad alta" },
      { label: "SUFICIENTE", value: "bastante pan", detail: "cantidad adecuada" },
    ],
  },
  stations: [
    { id: "numbers", number: "01", kicker: "PUESTO DE LOS NÚMEROS", title: "Contar y ordenar", summary: "Los cardinales cuentan; los ordinales ordenan.", rule: "Los cardinales expresan cantidad exacta. Uno cambia a un/una delante del sustantivo. Los ordinales básicos concuerdan con género y número.", formulas: ["UN kilo / UNA botella", "DOS · TRES · CUATRO…", "PRIMERO / PRIMERA"], examples: [{es:"un kilo de papas",en:"one kilo of potatoes"},{es:"veintiuna botellas",en:"twenty-one bottles"},{es:"dos cafés",en:"two coffees"},{es:"la primera tienda",en:"the first shop"}], note: "Primero y tercero pierden la -o delante de un sustantivo masculino singular: el primer puesto, el tercer día." },
    { id: "basic", number: "02", kicker: "BALANZA PRINCIPAL", title: "Poco, mucho y bastante", summary: "Tres niveles de cantidad aproximada.", rule: "Poco y mucho concuerdan con el sustantivo. Bastante cambia solo por número: bastante/bastantes.", formulas: ["POCO / POCA / POCOS / POCAS", "MUCHO / MUCHA / MUCHOS / MUCHAS", "BASTANTE / BASTANTES"], examples: [{es:"poco tiempo",en:"little time"},{es:"pocas monedas",en:"few coins"},{es:"mucha fruta",en:"a lot of fruit"},{es:"bastantes opciones",en:"enough / quite a few options"}], note: "Con un verbo, mucho y poco no cambian: Trabajo mucho. Dormimos poco." },
    { id: "all", number: "03", kicker: "PUESTO COMPLETO", title: "Todo necesita compañía", summary: "Expresa totalidad y suele incluir artículo.", rule: "Todo concuerda con género y número. Delante de un sustantivo definido usamos todo + artículo + sustantivo.", formulas: ["TODO EL día", "TODA LA semana", "TODOS LOS días", "TODAS LAS personas"], examples: [{es:"todo el pan",en:"all the bread"},{es:"toda la fruta",en:"all the fruit"},{es:"todos los mercados",en:"all the markets"},{es:"todas las mañanas",en:"every morning"}], note: "Todos días es incorrecto en español estándar: necesitamos todos los días." },
    { id: "other", number: "04", kicker: "PUESTO DE LOS EXTREMOS", title: "Otro, demasiado, nada y nadie", summary: "Añadir, exceder o indicar cero.", rule: "Otro añade una unidad o alternativa y no lleva un/una delante. Demasiado indica exceso. Nada se refiere a cosas y nadie a personas.", formulas: ["OTRO café", "DEMASIADA sal", "NADA = cero cosas", "NADIE = cero personas"], examples: [{es:"Quiero otra empanada.",en:"I want another empanada."},{es:"Hay demasiada sal.",en:"There is too much salt."},{es:"No necesito nada.",en:"I don't need anything."},{es:"No hay nadie.",en:"There is nobody."}], note: "En frases negativas es normal la doble marca: No veo a nadie. No compro nada." },
    { id: "compare", number: "05", kicker: "BALANZA A2", title: "Más, menos, tan y tanto", summary: "Comparamos cantidad y grado.", rule: "Más y menos comparan. Tan intensifica adjetivos o adverbios; tanto cuantifica sustantivos y concuerda cuando los acompaña.", formulas: ["MÁS / MENOS + sustantivo", "TAN + adjetivo", "TANTO / TANTA + sustantivo", "TAMBIÉN / TAMPOCO"], examples: [{es:"Quiero más agua.",en:"I want more water."},{es:"Necesito menos bolsas.",en:"I need fewer bags."},{es:"No es tan caro.",en:"It isn't so expensive."},{es:"No compro tanta comida.",en:"I don't buy that much food."}], note: "También añade una idea afirmativa; tampoco añade una negativa: Yo también. Yo tampoco." },
  ],
  traps: [
    { wrong: "mucha calor", right: "mucho calor", explanation: "Calor es masculino en el uso estándar general." },
    { wrong: "todos días", right: "todos los días", explanation: "Todo + sustantivo definido necesita artículo." },
    { wrong: "una otra bolsa", right: "otra bolsa", explanation: "Otro no lleva un/una delante." },
    { wrong: "muy comida", right: "mucha comida", explanation: "Muy intensifica adjetivos; mucho cuantifica sustantivos." },
  ],
  practice: [
    { prompt: "Necesito ___ botella de agua.", options: ["un", "una", "uno"], answer: 1, why: "Botella es femenina singular." },
    { prompt: "Hay ___ tomates en la caja.", options: ["muchos", "mucho", "mucha"], answer: 0, why: "Tomates es masculino plural." },
    { prompt: "Tengo ___ tiempo hoy.", options: ["pocas", "poco", "pocos"], answer: 1, why: "Tiempo es masculino singular e incontable en este contexto." },
    { prompt: "Trabajo ___ los días.", options: ["todos", "todos los", "todo"], answer: 1, why: "La estructura es todos los + sustantivo plural." },
    { prompt: "Quiero ___ café, por favor.", options: ["otro", "un otro", "otra"], answer: 0, why: "Otro va sin artículo indefinido y concuerda con café." },
    { prompt: "No hay ___ en el puesto.", options: ["nada", "nadie", "ningunos"], answer: 1, why: "Nadie se refiere a personas." },
    { prompt: "Esta sopa tiene ___ sal.", options: ["demasiado", "demasiada", "demasiadas"], answer: 1, why: "Sal es femenina singular y demasiado concuerda." },
    { prompt: "Este mercado no es ___ caro.", options: ["tanto", "tan", "mucho"], answer: 1, why: "Tan intensifica el adjetivo caro." },
  ],
  speaking: [
    { title: "Canasta exacta", prompt: "Armá una compra de ocho productos y decidí cantidades concretas.", support: "Quiero dos kilos de papas y una botella de aceite." },
    { title: "Puestos opuestos", prompt: "Compará dos puestos usando más, menos, mucho, poco y bastante.", support: "Este tiene más fruta, pero aquel tiene menos gente." },
    { title: "Compra responsable", prompt: "Explicá qué comprás mucho, poco o nunca y por qué.", support: "Compro bastante verdura porque cocino en casa." },
  ],
  mission: "Planificá una compra para una cena de cuatro personas. Incluí diez productos, cantidades exactas, dos comparaciones y una corrección por exceso o falta.",
};
