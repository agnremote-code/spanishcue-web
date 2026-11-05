import type { Module } from "../../types";

export const a2w18: Module = {
  id: "a2-18",
  level: "a2",
  week: 18,
  kind: "core",
  title: "En la finca hay que madrugar, pero no tienes que llevar botas",
  subtitle: "Repaso de hay que, tener que y deber para normas y consejos, y del orden de la frase para decir cuándo, dónde y cómo pasa algo.",
  stop: { place: "Heredia", country: "Costa Rica" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g080",
    "a2.gram.g081",
    "a2.voc.w18-finca-cafe",
    "a2.pron.w18-pregunta-alternativa",
    "a2.lis.w18-bienvenida-finca",
    "a2.read.w18-correo-voluntarios",
    "a2.wri.w18-normas-voluntariado",
    "a2.spk.w18-explicar-normas",
    "a2.fun.w18-normas-consejos",
    "a2.disc.w18-ordenar-informacion",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes explicar qué es obligatorio, qué no es necesario y qué no se debe hacer en un lugar, y ordenar tus frases para que se entienda bien cuándo, dónde y cómo pasa cada cosa.",
    steps: [
      "Repasa la diferencia entre `hay que` (para todos) y `tengo que` (para una persona).",
      "Usa `deber` para lo correcto y para los consejos.",
      "Distingue `no tienes que` (no es necesario) de `no debes` (no está bien).",
      "Ordena la frase: verbo + cosa + cómo + dónde + cuándo.",
      "Pon delante lo importante: `El lunes, en la finca, …`.",
      "Escucha la bienvenida en una finca de café de Heredia y escribe las normas para alguien nuevo.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que ayudan a dar información clara: las **formas de obligación** (_hay que, tener que, deber_), para explicar normas y consejos, y el **orden de la frase**, para decir cuándo, dónde y cómo pasa algo y empezar por lo más importante. La situación: una semana de voluntariado en una finca de café cerca de Heredia.",
    parts: [
      {
        heading: "Hay que, tener que, deber",
        body: [
          "**Hay que + infinitivo** es una obligación general, para todos, sin decir quién: _en la finca hay que madrugar_. No cambia nunca y no lleva persona: nunca _yo hay que_.",
          "**Tener que + infinitivo** es la obligación de una persona concreta, y _tener_ se conjuga: _tengo que, tienes que, tiene que, tenemos que, tenéis que, tienen que_. Ojo con el **que**: _tengo **que** trabajar_.",
          "**Deber + infinitivo** dice lo que es correcto o lo que te aconsejo, y se usa mucho en normas escritas: _debes beber agua_, _los visitantes deben llevar el carné_. Con _deber_ no hay **que**: _debo salir_, nunca _debo que salir_.",
        ],
        support: [
          "_Hay que_ + infinitive = general obligation, never with a person. _Tener que_ + infinitive = one person's obligation (conjugate _tener_). _Deber_ + infinitive = what is right, advice, formal rules; no _que_.",
        ],
        table: {
          caption: "Tres formas",
          head: ["Forma", "Para quién", "Ejemplo"],
          rows: [
            ["hay que + infinitivo", "para todos (no dice quién)", "Hay que lavar las cestas al final del día."],
            ["tener que + infinitivo", "yo, tú, ella, nosotros, vosotros, ellos", "Mañana tienes que estar en el beneficio a las siete."],
            ["deber + infinitivo", "lo correcto, un consejo, una norma escrita", "Los voluntarios deben llevar guantes."],
          ],
        },
        examples: [
          { es: "Para ver los cafetales bonitos, hay que subir temprano.", en: "To see the coffee fields at their best, you have to go up early." },
          { es: "Esta semana mi compañera tiene que cocinar dos veces.", en: "This week my partner has to cook twice." },
          { es: "Debes ponerte crema: el sol pega fuerte.", en: "You should put on sun cream: the sun is strong." },
        ],
        mistakes: [
          { wrong: "Tengo trabajar el sábado.", right: "Tengo que trabajar el sábado.", why: "_Tener_ + **que** + infinitivo." },
          { wrong: "Yo hay que recoger la ropa.", right: "Tengo que recoger la ropa.", why: "_Hay que_ no lleva persona. Para ti: **tengo que**." },
          { wrong: "Debemos que salir temprano.", right: "Debemos salir temprano.", why: "_Deber_ va sin **que**." },
        ],
      },
      {
        heading: "En negativo: no es necesario o no está bien",
        body: [
          "**No hay que** y **no tener que** significan que algo **no es necesario**: _no tienes que traer sábanas, aquí hay_ (puedes traerlas, pero no hace falta).",
          "**No deber** significa que algo **no está bien**, es un mal consejo o va contra una norma: _no debes tocar las plantas con fertilizante_.",
          "Y **no se puede** (de la semana 16) es una prohibición clara: _no se puede fumar en el beneficio_. Cuidado: _no tienes que tocar_ no es una prohibición; significa _no es necesario tocar_.",
        ],
        support: [
          "_No hay que / no tienes que_ = it's not necessary. _No debes_ = you shouldn't, it's not right. _No se puede_ = it's not allowed.",
        ],
        table: {
          caption: "Tres negativos distintos",
          head: ["Frase", "Significa"],
          rows: [
            ["No tienes que pagar la comida.", "No es necesario: está incluida."],
            ["No debes beber agua del río.", "No está bien: es peligroso."],
            ["No se puede entrar al almacén.", "Está prohibido."],
          ],
        },
        examples: [
          { es: "No hay que reservar: el tour sale cada hora.", en: "There's no need to book: the tour leaves every hour." },
          { es: "No debes dejar comida en la habitación por las hormigas.", en: "You shouldn't leave food in the room because of the ants." },
        ],
        mistakes: [
          { wrong: "No tienes que fumar aquí, está prohibido.", right: "No se puede fumar aquí, está prohibido.", why: "Para prohibir: **no se puede** (o _no debes_). _No tienes que_ = no es necesario." },
        ],
        tip: "Pregúntate: ¿es «no hace falta» o «no está bien»? «No hace falta» → _no tienes que_. «No está bien» → _no debes_.",
      },
      {
        heading: "Cuándo, dónde, cómo: el orden normal",
        body: [
          "La información de una frase responde a tres preguntas: **¿cuándo?** (_el lunes, a las seis, por la tarde_), **¿dónde?** (_en la finca, cerca del río_) y **¿cómo?** (_rápido, con cuidado, en grupo_).",
          "Un orden normal y fácil es: **verbo + cosa + cómo + dónde + cuándo**: _Recogemos el café con cuidado en la parte alta por la mañana_.",
          "**No separes el sujeto y el verbo** con mucha información: _Los voluntarios desayunan en la cocina_, no _Los voluntarios en la cocina por la mañana desayunan_.",
        ],
        support: [
          "A natural order: verb + thing + how + where + when. Don't put a lot of information between the subject and the verb.",
        ],
        table: {
          caption: "Las piezas en orden",
          head: ["Verbo + cosa", "¿Cómo?", "¿Dónde?", "¿Cuándo?"],
          rows: [
            ["Recogemos los granos", "a mano", "en la ladera", "por la mañana."],
            ["Secamos el café", "al sol", "en el patio", "toda la tarde."],
            ["Probamos el café", "en grupo", "en la cocina", "el viernes."],
          ],
        },
        examples: [
          { es: "Tostamos el café despacio en una olla de barro.", en: "We roast the coffee slowly in a clay pot." },
          { es: "Mi hermano trabaja en una cooperativa desde enero.", en: "My brother has been working at a cooperative since January." },
        ],
        mistakes: [
          { wrong: "Yo en la finca trabajo por la mañana.", right: "Trabajo en la finca por la mañana.", why: "No metas el lugar entre el sujeto y el verbo." },
        ],
      },
      {
        heading: "Lo importante, delante; dos opciones con o",
        body: [
          "Si el momento o el lugar es lo más importante, ponlo **al principio** como marco, con una **coma**: _El viernes, hacemos una cata_. _En la finca, no hay wifi_. Así quien lee sabe enseguida de qué día o de qué lugar hablas.",
          "Pero **no pongas todo al principio**: un marco o dos es suficiente. _El lunes, en la finca, empezamos a las seis_ se entiende; con cuatro piezas delante, la frase se pierde.",
          "Para ofrecer **dos opciones**, usa **o**: _¿Prefieres café o té?_, _¿Trabajamos arriba o abajo?_ La respuesta es una de las opciones, no _sí_.",
        ],
        support: [
          "Put the most important time or place at the start, followed by a comma, but don't pile everything there. Offer two options with _o_; the answer is one option, not _sí_.",
        ],
        examples: [
          { es: "Por la tarde, la cooperativa organiza una visita al pueblo.", en: "In the afternoon, the cooperative organises a visit to the village." },
          { es: "—¿Vamos en bus o caminando? —Caminando, está cerca.", en: "—Shall we go by bus or on foot? —On foot, it's close." },
          { es: "En temporada alta, hay que reservar con dos semanas.", en: "In high season, you have to book two weeks ahead." },
        ],
        mistakes: [
          { wrong: "—¿Prefieres trabajar por la mañana o por la tarde? —Sí.", right: "—¿Prefieres trabajar por la mañana o por la tarde? —Por la mañana.", why: "Con **o** eliges una opción." },
          { wrong: "Con calma, el martes, en el patio, por la tarde, secamos el café.", right: "El martes por la tarde, secamos el café con calma en el patio.", why: "Demasiado al principio. Deja delante solo el marco." },
        ],
        tip: "Antes de escribir un mensaje, piensa: ¿qué necesita saber primero la otra persona? Eso va delante.",
      },
    ],
  },
  grammar: {
    intro: "Primero hay que, tener que y deber en afirmativo y negativo; después el orden de la frase y las preguntas con o.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "Obligaciones en la finca",
        prompt: "Completa con **hay que** o con la forma correcta de **tener que**.",
        items: [
          { q: "En esta finca ___ ___ separar los granos verdes de los rojos.", answers: [["hay"], ["que"]], why: "Norma para todos: **hay que**." },
          { q: "Hoy Daniela ___ ___ llevar el café al beneficio.", answers: [["tiene"], ["que"]], why: "Una persona concreta: **tiene que**." },
          { q: "Nosotros ___ ___ terminar antes de la lluvia, ¡rápido!", answers: [["tenemos"], ["que"]], why: "_Nosotros_: **tenemos que**." },
          { q: "¿Tú ___ ___ volver a San José el domingo?", answers: [["tienes"], ["que"]], why: "_Tú_: **tienes que**." },
          { q: "Para entrar al almacén ___ ___ pedir la llave a doña Lidia.", answers: [["hay"], ["que"]], why: "Regla general: **hay que**." },
        ],
      },
      {
        id: "g2",
        type: "choice",
        title: "No es necesario o no está bien",
        prompt: "Elige la forma que tiene sentido.",
        items: [
          { q: "La comida está incluida: ___ pagar nada.", options: ["no debes", "no tienes que", "no se puede"], answer: 1, why: "No es necesario: **no tienes que**." },
          { q: "El agua del río no está limpia: ___ beberla.", options: ["no hay que", "no tienes que", "no debes"], answer: 2, why: "No está bien, es peligroso: **no debes**." },
          { q: "Cartel en el almacén: «No ___ entrar sin permiso».", options: ["se puede", "debes", "hay"], answer: 0, why: "Prohibición en un cartel: **no se puede**." },
          { q: "El tour es gratis y sale cada hora: ___ reservar.", options: ["no hay que", "no debes", "no se puede"], answer: 0, why: "No hace falta: **no hay que**." },
        ],
      },
      {
        id: "g3",
        type: "order",
        title: "El orden normal",
        prompt: "Ordena las palabras: verbo + cosa + cómo + dónde + cuándo.",
        items: [
          { words: ["Secamos", "los", "granos", "al", "sol", "en", "el", "patio", "por", "la", "tarde."], en: "We dry the beans in the sun on the patio in the afternoon." },
          { words: ["Los", "voluntarios", "desayunan", "juntos", "en", "la", "cocina", "a", "las", "seis."], en: "The volunteers have breakfast together in the kitchen at six." },
          { words: ["El", "jueves,", "visitamos", "el", "beneficio", "en", "bus."], alt: ["Visitamos el beneficio en bus el jueves."], en: "On Thursday, we visit the processing plant by bus." },
        ],
      },
      {
        id: "g4",
        type: "transform",
        title: "Lo importante, delante",
        prompt: "Pon delante, con una coma, la expresión en negrita.",
        items: [
          { source: "Hacemos una cata de café **el viernes**.", answers: ["El viernes, hacemos una cata de café."], why: "El momento como marco, con coma." },
          { source: "No hay señal de celular **en la parte alta**.", answers: ["En la parte alta, no hay señal de celular."], why: "El lugar como marco, con coma." },
          { source: "Hay que llevar impermeable **en octubre**.", answers: ["En octubre, hay que llevar impermeable."], why: "El momento delante: lo que importa primero." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para pasar una semana en una finca de café y hablar de tareas y normas.",
    groups: [
      {
        title: "La finca de café",
        items: [
          { es: "el cafetal", en: "the coffee field" },
          { es: "el grano maduro", en: "the ripe bean / cherry" },
          { es: "la cajuela", en: "the coffee-picking basket (Costa Rica)" },
          { es: "el beneficio", en: "the coffee processing plant" },
          { es: "la ladera", en: "the hillside" },
          { es: "el almacén", en: "the storeroom" },
        ],
      },
      {
        title: "Tareas",
        items: [
          { es: "recoger a mano", en: "to pick by hand" },
          { es: "secar al sol", en: "to dry in the sun" },
          { es: "tostar", en: "to roast" },
          { es: "hacer una cata", en: "to do a tasting" },
          { es: "separar los granos", en: "to sort the beans" },
        ],
      },
      {
        title: "Ropa y cuidado",
        items: [
          { es: "las botas de hule", en: "rubber boots" },
          { es: "los guantes", en: "gloves" },
          { es: "el sombrero", en: "the hat" },
          { es: "el repelente", en: "insect repellent" },
          { es: "la crema solar", en: "sun cream" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "¿Para qué sirve?",
        prompt: "Une cada cosa con su uso en la finca.",
        pairs: [
          { left: "la cajuela", right: "Hay que llevarla en la cintura para recoger." },
          { left: "el repelente", right: "Debes ponértelo por los mosquitos." },
          { left: "las botas de hule", right: "Tienes que usarlas cuando llueve." },
          { left: "el sombrero", right: "Te protege del sol en la ladera." },
        ],
        why: "Cada uso combina un objeto con una obligación o un consejo: _hay que, tienes que, debes_.",
      },
      {
        id: "v2",
        type: "context",
        title: "En el cafetal",
        prompt: "Lee la situación y elige la palabra correcta.",
        items: [
          { context: "Los granos ya están rojos.", q: "Eso quiere decir que el grano está…", options: ["maduro", "tostado", "seco"], answer: 0, why: "Rojo = **maduro**, listo para recoger." },
          { context: "Después de recoger, llevan el café a un lugar con máquinas.", q: "Ese lugar es…", options: ["el almacén", "el beneficio", "la ladera"], answer: 1, why: "Donde se procesa el café: **el beneficio**." },
          { context: "El viernes prueban varios cafés para comparar el sabor.", q: "Hacen…", options: ["una ladera", "una cajuela", "una cata"], answer: 2, why: "Probar y comparar: **una cata**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "¿Esto ↗ o aquello ↘? La pregunta con dos opciones",
    explanation: [
      "Cuando ofreces dos opciones con **o**, la voz **sube** en la primera y **baja** al final de la segunda: _¿Café ↗ o té ↘?_ Así el otro sabe que tiene que elegir.",
      "Si la voz sube al final de todo (_¿Quieres café o té? ↗_), suena a una pregunta abierta: ¿quieres algo de beber? Por eso a veces la respuesta es _sí_.",
      "En la frase con marco al principio, haz una pequeña pausa en la coma: _El lunes ↗ | empezamos a las seis_.",
    ],
    support: [
      "In a closed choice with _o_, the voice rises on the first option and falls at the end of the second. Pause slightly at the comma after a time or place frame.",
    ],
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Elegir o contestar sí?",
      prompt: "Escucha la pregunta y decide qué tipo de pregunta es.",
      items: [
        { q: "¿Qué tipo de pregunta es?", audio: "¿Arriba o abajo?", options: ["elegir una de dos opciones", "pregunta abierta de sí o no"], answer: 0 },
        { q: "¿Qué tipo de pregunta es?", audio: "¿Quieres agua o algo?", options: ["elegir una de dos opciones", "pregunta abierta de sí o no"], answer: 1 },
        { q: "¿Qué tipo de pregunta es?", audio: "¿Hoy o mañana?", options: ["pregunta abierta de sí o no", "elegir una de dos opciones"], answer: 1 },
        { q: "¿Qué tipo de pregunta es?", audio: "¿Te ayudo o algo así?", options: ["pregunta abierta de sí o no", "elegir una de dos opciones"], answer: 0 },
      ],
    },
    produce: [
      { text: "¿Recogemos arriba o abajo?", tip: "Sube en _arriba_, baja en _abajo_." },
      { text: "¿Prefieres botas o sandalias?", tip: "Dos opciones cerradas: sube y baja." },
      { text: "El lunes, en la finca, empezamos a las seis.", tip: "Pausa en cada coma." },
      { text: "Hay que madrugar, pero no tienes que traer nada.", tip: "Fuerza en _hay_ y en _tie-nes_." },
    ],
    spelling: "Después de un marco al principio (_El lunes, …_; _En la finca, …_) se suele poner **coma**. Entre las dos opciones con **o** no hay coma: _¿café o té?_",
  },
  listening: {
    title: "Bienvenida a la finca",
    context: "Es domingo por la tarde en una finca de café cerca de Heredia. Wendy, la coordinadora, recibe a dos voluntarios nuevos, Tomás y Ana, y les explica cómo funciona la semana.",
    speakers: [
      { id: "wendy", name: "Wendy", voice: "es-MX-f", role: "coordinadora de voluntarios" },
      { id: "tomas", name: "Tomás", voice: "es-AR-m", role: "voluntario" },
      { id: "ana", name: "Ana", voice: "es-ES-f", role: "voluntaria" },
    ],
    script: [
      { speaker: "wendy", text: "Bienvenidos a la finca. Primero, lo más importante: aquí hay que madrugar. Desayunamos en la cocina a las cinco y media y salimos al cafetal a las seis." },
      { speaker: "tomas", text: "¿Tenemos que traer algo especial?" },
      { speaker: "wendy", text: "No tienen que traer herramientas; aquí les damos las cajuelas y los guantes. Pero deben llevar sombrero y repelente, porque en la ladera hay mucho sol y muchos mosquitos." },
      { speaker: "ana", text: "Yo no tengo botas de hule. ¿Es un problema?" },
      { speaker: "wendy", text: "No hay que comprarlas. En el almacén hay botas de todas las tallas. Eso sí, al almacén no se puede entrar sin mí." },
      { speaker: "tomas", text: "¿Recogemos todos juntos o en grupos?" },
      { speaker: "wendy", text: "En grupos de tres. Y una cosa: solo se recogen los granos rojos. No deben arrancar los verdes; si los arrancan, la planta pierde la cosecha." },
      { speaker: "ana", text: "¿Y por la tarde qué hacemos?" },
      { speaker: "wendy", text: "Por la tarde, secamos el café en el patio. El viernes, hacemos una cata. ¿Prefieren café negro o con leche? Lo pregunto para la cata." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo una vez y busca la idea general.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿Qué hace Wendy en la conversación?", options: ["Vende café a unos turistas.", "Explica las normas de la semana a dos voluntarios.", "Busca trabajadores para la cosecha."], answer: 1 },
            { q: "¿Cuál es lo más importante, según Wendy?", options: ["madrugar", "traer herramientas", "hablar inglés"], answer: 0 },
            { q: "¿Qué hacen el viernes?", options: ["un viaje a San José", "una fiesta en el pueblo", "una cata de café"], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a lo que es obligatorio, lo que no es necesario y lo que no está bien.",
        exercise: {
          id: "l2",
          type: "classify",
          prompt: "Clasifica cada cosa según lo que dice Wendy.",
          categories: ["obligatorio o recomendado", "no es necesario", "no está bien o está prohibido"],
          items: [
            { text: "llevar sombrero y repelente", cat: 0 },
            { text: "traer herramientas", cat: 1 },
            { text: "comprar botas de hule", cat: 1 },
            { text: "entrar al almacén sin Wendy", cat: 2 },
            { text: "arrancar los granos verdes", cat: 2 },
            { text: "desayunar a las cinco y media", cat: 0 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en las formas de obligación y en el orden de las frases.",
        exercise: {
          id: "l3",
          type: "choice",
          prompt: "Elige la explicación correcta.",
          items: [
            { q: "«No tienen que traer herramientas» significa…", options: ["que está prohibido traerlas.", "que no es necesario traerlas.", "que deben comprarlas."], answer: 1 },
            { q: "En «Por la tarde, secamos el café en el patio», ¿qué va delante?", options: ["el lugar", "el modo", "el momento"], answer: 2 },
            { q: "«No deben arrancar los verdes» es…", options: ["un consejo o una norma: no está bien", "algo que no hace falta", "una pregunta"], answer: 0 },
            { q: "«¿Recogemos todos juntos o en grupos?» pide…", options: ["un sí o un no", "elegir una opción", "una hora"], answer: 1 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Tu semana en la finca Las Brumas",
    genre: "Correo de una organización de voluntariado",
    frame: "Antes de llegar, los voluntarios reciben este correo de la finca Las Brumas, cerca de Heredia.",
    text: [
      "Hola, Ana: te esperamos el domingo. Para llegar, hay que tomar el bus de Heredia a San Rafael y bajarse en la iglesia. Allí, a las cuatro, te recoge don Mario en un carro blanco. No tienes que pagar el transporte: está incluido.",
      "De lunes a jueves, recogemos café en la ladera por la mañana y lo secamos en el patio por la tarde. El viernes, visitamos el beneficio de la cooperativa y hacemos una cata. El sábado es libre: puedes ir al volcán Barva o quedarte en la finca.",
      "Normas de la casa: hay que dejar las botas fuera de la habitación y apagar las luces a las diez, porque nos levantamos muy temprano. En la cocina, cada voluntario tiene que lavar sus platos. No debes dejar comida abierta, por las hormigas.",
      "Un consejo: en noviembre llueve casi todas las tardes, así que debes traer un impermeable. ¿Prefieres dormir en la casa grande o en la cabaña del jardín? Contéstanos antes del viernes.",
    ],
    glossary: [
      { es: "bajarse", en: "to get off" },
      { es: "te recoge", en: "picks you up" },
      { es: "la cabaña", en: "the cabin" },
      { es: "las hormigas", en: "ants" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee el correo y responde.",
        items: [
          { q: "¿Dónde tiene que bajarse Ana del bus?", options: ["en la finca", "en la iglesia de San Rafael", "en el beneficio"], answer: 1 },
          { q: "¿Qué hacen los voluntarios por la tarde de lunes a jueves?", options: ["Secan el café en el patio.", "Recogen café en la ladera.", "Visitan la cooperativa."], answer: 0 },
          { q: "¿Por qué hay que apagar las luces a las diez?", options: ["porque la luz es cara", "porque hay hormigas", "porque se levantan muy temprano"], answer: 2 },
          { q: "¿Qué tiene que decidir Ana antes del viernes?", options: ["dónde quiere dormir", "si va al volcán", "qué café prefiere"], answer: 0 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Qué tipo de información es?",
        categories: ["obligación o norma", "no es necesario", "consejo o lo que no está bien"],
        items: [
          { text: "hay que dejar las botas fuera de la habitación", cat: 0 },
          { text: "No tienes que pagar el transporte", cat: 1 },
          { text: "cada voluntario tiene que lavar sus platos", cat: 0 },
          { text: "No debes dejar comida abierta", cat: 2 },
          { text: "debes traer un impermeable", cat: 2, why: "Es un consejo: por la lluvia de la tarde." },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase del correo para ver qué gramática hay dentro.",
      items: [
        { quote: "Allí, a las cuatro, te recoge don Mario en un carro blanco.", note: "Lugar y hora como marco delante, con comas: es lo que Ana necesita saber primero." },
        { quote: "No tienes que pagar el transporte", note: "**No tener que** = no es necesario." },
        { quote: "recogemos café en la ladera por la mañana", note: "Orden normal: verbo + cosa + dónde + cuándo." },
        { quote: "cada voluntario tiene que lavar sus platos", note: "Una obligación de cada persona: **tiene que**, conjugado." },
        { quote: "¿Prefieres dormir en la casa grande o en la cabaña del jardín?", note: "Dos opciones con **o**: Ana tiene que elegir una." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: normas y consejos en frases bien ordenadas.",
    exercises: [
      {
        id: "x1",
        type: "error",
        title: "Corrige las normas",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Mañana tengo levantarme a las cinco.", answers: ["Mañana tengo que levantarme a las cinco."], why: "_Tener_ + **que** + infinitivo." },
          { sentence: "Los voluntarios deben que respetar el horario.", answers: ["Los voluntarios deben respetar el horario."], why: "_Deber_ sin **que**." },
          { sentence: "No tienes que tirar basura en el río, es muy grave.", answers: ["No debes tirar basura en el río, es muy grave.", "No se puede tirar basura en el río, es muy grave."], why: "No está bien / prohibido: **no debes** o **no se puede**." },
          { sentence: "Nosotros hay que salir antes de las seis.", answers: ["Tenemos que salir antes de las seis.", "Hay que salir antes de las seis."], why: "_Hay que_ no lleva persona; con _nosotros_, **tenemos que**." },
          { sentence: "Mi compañera en la cocina por la noche lava los platos.", answers: ["Mi compañera lava los platos en la cocina por la noche.", "Por la noche, mi compañera lava los platos en la cocina."], why: "No separes el sujeto del verbo con lugar y tiempo." },
        ],
      },
      {
        id: "x2",
        type: "gap",
        title: "Consejos para Tomás",
        prompt: "Completa con **hay que, tienes que, debes, no tienes que** o **no debes**.",
        items: [
          { q: "Tomás, si te pica un mosquito, ___ rascarte: se infecta.", answers: [["no debes"]], why: "No está bien: **no debes**." },
          { q: "Para ver el amanecer desde el mirador, ___ salir a las cinco.", answers: [["hay que", "tienes que"]], why: "Obligación: **hay que** o **tienes que**." },
          { q: "Hay botas en el almacén, así que ___ comprar nada.", answers: [["no tienes que"]], why: "No es necesario: **no tienes que**." },
          { q: "El sol pega muy fuerte: ___ ponerte crema cada dos horas.", answers: [["debes", "tienes que"]], why: "Un consejo fuerte: **debes**." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué frase es más clara?",
        prompt: "Lee la situación y elige la frase mejor ordenada.",
        items: [
          { context: "Avisas al grupo del cambio de día de la cata. Lo importante es el día.", q: "Escribes:", options: ["El sábado, hacemos la cata.", "Hacemos, el sábado, la cata.", "La cata el sábado hacemos."], answer: 0, why: "El día delante como marco, con coma." },
          { context: "Le ofreces a una voluntaria dos lugares para trabajar.", q: "Le preguntas:", options: ["¿Prefieres en el patio trabajar o en el almacén?", "¿Prefieres trabajar en el patio o en el almacén?", "¿En el patio trabajar prefieres o almacén?"], answer: 1, why: "Verbo + opción A + **o** + opción B." },
          { context: "Explicas la rutina de la mañana a una persona nueva.", q: "Dices:", options: ["Recogemos con guantes el café a las seis en la ladera.", "A las seis en la ladera con guantes recogemos el café.", "Recogemos el café con guantes en la ladera a las seis."], answer: 2, why: "Orden normal: verbo + cosa + cómo + dónde + cuándo." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases sobre tu vida. Después compara con el modelo.",
        items: [
          {
            prompt: "Explica tres normas de tu trabajo o de tu escuela: una con hay que, una con no tienes que y una con no debes.",
            model: "En mi oficina hay que fichar al entrar. No tienes que llevar traje, pero no debes llevar ropa de deporte cuando hay clientes.",
            checklist: ["**Hay que** sin persona", "**No tienes que** = no es necesario", "**No debes** = no está bien"],
          },
          {
            prompt: "Cuenta tu rutina de un día de la semana con el momento delante y el orden verbo + dónde + cuándo.",
            model: "Los miércoles, voy al mercado en bicicleta temprano. Después, trabajo en casa hasta las tres y por la tarde doy clases en una academia.",
            checklist: ["Un marco de tiempo delante con coma", "No separas sujeto y verbo", "Usas al menos un cómo, un dónde y un cuándo"],
          },
          {
            prompt: "Ofrece dos opciones a un amigo que viene a visitarte y explica qué tiene que hacer para llegar.",
            model: "¿Prefieres venir el sábado o el domingo? Para llegar, tienes que tomar el tren de las diez y bajarte en la segunda parada. No tienes que comprar nada para la comida.",
            checklist: ["Una pregunta con **o**", "**Tienes que** para la persona concreta", "Un negativo con _no tienes que_ o _no debes_"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje a una persona que empieza mañana en tu trabajo, tu voluntariado o tu equipo, con el horario y las normas.",
    context: "Mañana llega una persona nueva y tú no vas a estar a primera hora. Le escribes para explicarle qué tiene que hacer, qué no es necesario y qué no debe hacer.",
    steps: [
      "Saluda y empieza con lo más importante: cuándo y dónde tiene que estar (como marco delante, con coma).",
      "Explica dos normas generales con **hay que** y lo que tiene que hacer esa persona con **tener que**.",
      "Di qué no es necesario con **no tienes que** y qué no está bien con **no debes**.",
      "Ofrécele dos opciones con **o** y despídete.",
      "Revisa: ¿hay **que** después de _tener_ y no después de _deber_? ¿Están juntos el sujeto y el verbo?",
    ],
    useLanguage: ["Mañana, a las…, …", "Hay que…", "Tienes que…", "No tienes que…", "No debes…", "¿Prefieres… o…?"],
    model: [
      "¡Hola, Sergio! Bienvenido al equipo. Mañana, a las ocho, tienes que estar en la puerta del almacén; allí te espera Carla. En la tienda hay que llevar la camiseta verde y hay que apagar el celular cuando hay clientes. No tienes que traer comida: a mediodía comemos todos juntos en la cocina. Eso sí, no debes dejar la caja abierta nunca. Por la tarde, ordenamos los estantes con calma. ¿Prefieres trabajar el sábado por la mañana o por la tarde? ¡Hasta mañana!",
    ],
    checklist: [
      "Usas **hay que** para normas generales y **tener que** para la persona.",
      "Distingues **no tienes que** (no es necesario) de **no debes** (no está bien).",
      "Pones delante, con coma, el momento o el lugar más importante.",
      "Haces una pregunta con dos opciones con **o**.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Haz la pausa de la coma y cuida la entonación de las preguntas con o.",
    tasks: [
      {
        title: "Las normas de mi casa compartida",
        prompt: "Una persona nueva llega a tu casa o a tu oficina. Explícale qué hay que hacer, qué no es necesario y qué no debe hacer.",
        prep: ["Aquí hay que…", "Tienes que…", "No tienes que…", "No debes…"],
        seconds: 65,
        model: "Bienvenida a casa. Aquí hay que sacar la basura los martes y los viernes. Esta semana tienes que limpiar el baño tú, y la próxima me toca a mí. No tienes que comprar aceite ni sal: los compramos entre todos. Pero no debes usar la lavadora después de las diez, porque el vecino se queja.",
        selfCheck: ["Uso las tres formas: hay que, tener que, deber.", "No confundo _no tienes que_ con _no debes_."],
      },
      {
        title: "Consejos para un viaje",
        prompt: "Un amigo viaja a tu país por primera vez. Dale consejos: qué debe llevar, qué tiene que hacer al llegar y qué no es necesario.",
        prep: ["Debes llevar…", "Al llegar, tienes que…", "No hay que…"],
        seconds: 55,
        selfCheck: ["Uso _deber_ sin _que_.", "Pongo un marco delante (al llegar, en verano…)."],
      },
      {
        title: "¿Esto o aquello?",
        prompt: "Organizas una salida con tus compañeros. Haz cuatro preguntas con dos opciones (día, hora, lugar, transporte) y responde tú mismo a cada una.",
        prep: ["¿El sábado o el domingo?", "¿Por la mañana o por la tarde?", "¿En tren o en carro?"],
        seconds: 60,
        selfCheck: ["Subo en la primera opción y bajo en la segunda.", "Respondo con una opción, no con _sí_."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Compara normas", task: "Cuenta qué hay que hacer en tu trabajo y pregunta a tu profesor cómo es en el suyo.", phrases: ["En mi trabajo hay que…", "¿Y tú tienes que…?"] },
      { move: "Pide consejo", task: "Pide a tu profesor un consejo para aprender más rápido y repite lo que te dice con deber.", phrases: ["¿Qué debo hacer para…?", "Entonces debo…"] },
      { move: "Ofrece opciones", task: "Propón dos opciones para la próxima actividad de la clase.", phrases: ["¿Prefieres… o…?", "¿Hacemos… o…?"] },
      { move: "Empieza por lo importante", task: "Cuenta un plan de tu semana empezando por el día o el lugar.", phrases: ["El jueves, …", "En casa de mis padres, …"] },
    ],
    bring: "Trae tres normas de un lugar que conoces bien y prepárate para explicar cuáles son obligatorias y cuáles solo son consejos.",
  },
  quiz: {
    items: [
      { type: "gap", q: "En el museo del café ___ ___ dejar la mochila en la entrada.", answers: [["hay"], ["que"]], why: "Norma general: **hay que**." },
      { type: "choice", q: "El desayuno está incluido en el precio del hostal. Entonces…", options: ["no debes pagarlo.", "no tienes que pagarlo.", "no se puede pagarlo."], answer: 1, why: "No es necesario: **no tienes que**." },
      { type: "gap", q: "Mis padres ___ ___ ir al médico el martes. (tener que)", answers: [["tienen"], ["que"]], why: "_Mis padres_: **tienen que**." },
      { type: "transform", source: "Abrimos la tienda nueva **el lunes**.", instruction: "Pon delante, con coma, la expresión en negrita.", answers: ["El lunes, abrimos la tienda nueva."], why: "Marco de tiempo delante, con coma." },
      { type: "error", sentence: "Debes que llamar a tu abuela, está sola.", answers: ["Debes llamar a tu abuela, está sola."], why: "_Deber_ va sin **que**." },
      { type: "error", sentence: "Yo hay que estudiar esta noche.", answers: ["Tengo que estudiar esta noche."], why: "Con persona: **tengo que**." },
      { type: "listen", q: "¿Qué pide la pregunta sobre la hora del bus?", audio: "¿A las siete o a las ocho?", options: ["elegir una de dos horas", "responder sí o no"], answer: 0 },
      { type: "order", words: ["Lavamos", "las", "cestas", "con", "agua", "fría", "en", "el", "patio."] },
      { type: "choice", q: "¿Qué frase dice que algo no está bien?", options: ["No hay que reservar mesa.", "No tienes que venir temprano.", "No debes conducir tan cansado."], answer: 2, why: "**No debes** = no está bien." },
      { type: "open", prompt: "Escribe tres frases: una norma general, algo que no es necesario y una pregunta con dos opciones.", model: "En la biblioteca hay que hablar en voz baja. No tienes que llevar el carné para entrar. ¿Estudiamos en la sala grande o en la pequeña?", checklist: ["Hay que + infinitivo", "No tienes que + infinitivo", "Pregunta con o"] },
    ],
  },
  complete: {
    canNow: [
      "Explicar normas generales con **hay que** y obligaciones personales con **tener que**.",
      "Dar consejos y explicar normas escritas con **deber** + infinitivo, sin _que_.",
      "Distinguir _no tienes que_ (no es necesario), _no debes_ (no está bien) y _no se puede_ (prohibido).",
      "Ordenar una frase con verbo + cosa + cómo + dónde + cuándo.",
      "Poner delante, con coma, el momento o el lugar más importante.",
      "Ofrecer dos opciones con **o** y responder con una de ellas.",
    ],
    review: ["Hay que madrugar / tengo que madrugar / debes madrugar.", "No tienes que traer nada ≠ No debes tocar eso.", "El viernes, hacemos una cata. ¿Café o té?"],
  },
  related: [
    { path: "/gramatica/formas-de-obligacion-hay-que-deber", label: "Clase: Formas de obligación: hay que, deber, tener que" },
    { path: "/una-oracion-puede-moverse", label: "Clase: Orden de la frase y focalización sencilla" },
  ],
};
