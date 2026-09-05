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
  title: string;
  displayTitle: string;
  subtitle: string;
  intro: string;
  hero: string;
  accent: string;
  accent2: string;
  motif: "factory" | "atelier" | "gallery";
  duration: string;
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
  title: "La Galería de los Artículos",
  displayTitle: "La Galería de\nlos Artículos",
  subtitle: "El, la, un, una y la lógica de elegir",
  intro: "Los artículos son pequeñas luces: muestran si hablamos de algo conocido, de algo nuevo o de una categoría general. Recorré la galería y aprendé a elegir por significado.",
  hero: "/grammar-worlds/article-gallery.webp",
  accent: "#d6ad59",
  accent2: "#7d8cff",
  motif: "gallery",
  duration: "65–80 min",
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
