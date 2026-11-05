import type { Module } from "../../types";

export const a2w11: Module = {
  id: "a2-11",
  level: "a2",
  week: 11,
  kind: "core",
  title: "El señor que vende tortillas y la plaza donde nos vemos",
  subtitle: "Repaso de las relativas con que para decir qué persona o cosa, y de donde, cuando y lo que para hablar de lugares, momentos e ideas.",
  stop: { place: "Santa Ana", country: "El Salvador" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g066",
    "a2.gram.g067",
    "a2.voc.w11-barrio-vecinos",
    "a2.pron.w11-que-sin-fuerza",
    "a2.lis.w11-paseo-barrio",
    "a2.read.w11-correo-barrio",
    "a2.wri.w11-guia-barrio",
    "a2.spk.w11-presentar-barrio",
    "a2.fun.w11-definir-sin-palabra",
    "a2.disc.w11-unir-ideas",
  ],
  reviewObjectives: ["a2.gram.g064","a2.gram.g065","a2.voc.w10-mudanza-objetos","a2.pron.w10-acento-pronombres-pegados","a2.lis.w10-dia-mudanza","a2.read.w10-mensaje-reparto","a2.wri.w10-mensaje-devolver","a2.spk.w10-organizar-mudanza","a2.fun.w10-prestar-devolver","a2.disc.w10-evitar-repetir","a2.rev.w10-repaso-semanas-6-9"],
  prerequisites: ["a2-10"],
  goal: {
    canDo: "Al final de esta semana puedes decir de qué persona, cosa o lugar hablas en una sola frase (la vecina que vive enfrente, el pan que compro, la plaza donde nos vemos), situar un momento con cuando o el día que, y hablar de ideas con lo que (lo que más me gusta es…).",
    steps: [
      "Repasa `nombre + que + dato`: `la señora que vende pan`, `el libro que leo`.",
      "Recuerda que `que` no cambia y que después no se repite `lo` ni `la`.",
      "Usa `donde` para lugares y `cuando` o `el día que` para momentos.",
      "Habla de ideas sin nombre con `lo que`: `Lo que necesito es un mapa`.",
      "Escucha un paseo por un barrio de Santa Ana y lee el correo de un estudiante.",
      "Escribe una pequeña guía de tu barrio para alguien que llega.",
    ],
  },
  theory: {
    intro: "Esta semana repasas tus dos clases de **relativas**: con **que** para decir qué persona o cosa, y con **donde, cuando** y **lo que** para lugares, momentos e ideas. La situación: Daniel, un estudiante de Lima, pasa un semestre en Santa Ana con la familia Morán y aprende a moverse por su barrio nuevo.",
    parts: [
      {
        heading: "Que: un dato para saber cuál",
        body: [
          "A veces un nombre solo no basta: _la vecina_… ¿qué vecina? Con **que** añades un dato que la identifica: _la vecina **que vive enfrente**_. Así unes dos ideas en una sola frase y no repites el nombre.",
          "Hay dos casos. Si el nombre **hace** la acción, después de _que_ va el verbo: _el señor **que vende** tortillas_. Si **otra persona** hace la acción, aparece esa persona: _las tortillas **que compra** doña Carmen_, _el bus **que tomo** cada mañana_.",
          "**Que** sirve para personas, cosas y lugares y **nunca cambia**. Lo que cambia es el verbo, que concuerda con el nombre de antes: _el niño que juega_, _los niños que juegan_.",
        ],
        support: [
          "_Que_ joins a noun and a piece of information that identifies it (who / which / that). It never changes, it works for people and things, and the verb after it agrees with the noun before it.",
        ],
        table: {
          caption: "Nombre + que + dato",
          head: ["¿De qué hablas?", "El nombre hace la acción", "Otra persona hace la acción"],
          rows: [
            ["una persona", "la chica que trabaja en la farmacia", "la profesora que tengo los lunes"],
            ["una cosa", "el bus que va al centro", "la camisa que compré ayer"],
            ["un lugar", "el mercado que abre a las seis", "el restaurante que nos recomendaste"],
          ],
        },
        examples: [
          { es: "Busco a la señora que alquila la habitación.", en: "I'm looking for the lady who rents out the room." },
          { es: "Los vecinos que viven arriba tienen un perro enorme.", en: "The neighbours who live upstairs have a huge dog." },
        ],
        mistakes: [
          { wrong: "El libro que lo compré es muy bueno.", right: "El libro que compré es muy bueno.", why: "_Que_ ya ocupa el lugar de _el libro_: no repitas **lo**." },
          { wrong: "La vecina quien vive enfrente es enfermera.", right: "La vecina que vive enfrente es enfermera.", why: "Después de un nombre y sin comas se usa **que**, también para personas." },
          { wrong: "Los chicos que juega en la calle son mis primos.", right: "Los chicos que juegan en la calle son mis primos.", why: "El verbo concuerda con _los chicos_: **juegan**." },
        ],
      },
      {
        heading: "De dos frases a una, y que frente a qué",
        body: [
          "Para practicar, piensa en dos frases que repiten un nombre: _Tengo una amiga. **Mi amiga** vive en Santa Ana._ Quita el nombre repetido, pon **que** en su lugar y une todo: _Tengo una amiga **que** vive en Santa Ana._",
          "Si el nombre repetido no es el que hace la acción, el resto de la frase se queda igual, pero sin _lo, la, los, las_: _Compré un mapa. Usé **el mapa** ayer._ → _Ayer usé el mapa **que** compré._",
          "No confundas **que** con **qué**. _Qué_, con tilde, pregunta: _¿**Qué** bus tomas?_ _Que_, sin tilde, une un nombre y su dato: _El bus **que** tomo es el 51._",
        ],
        support: [
          "In English you can drop _that_ (the map I bought), but in Spanish _que_ is always needed: _el mapa que compré_. _¿Qué…?_ with an accent asks a question.",
        ],
        table: {
          caption: "Unir dos frases",
          head: ["Dos frases", "Una frase con que"],
          rows: [
            ["Hay una panadería. La panadería abre a las cinco.", "Hay una panadería que abre a las cinco."],
            ["Conocí a un chico. Gaby conoce al chico.", "Conocí a un chico que Gaby conoce."],
            ["Leí la nota. Tú dejaste la nota.", "Leí la nota que dejaste."],
          ],
        },
        examples: [
          { es: "¿Qué tienda te gusta más? —La que está al lado del parque.", en: "Which shop do you like best? —The one next to the park." },
          { es: "No encuentro la llave que me dio doña Carmen.", en: "I can't find the key that doña Carmen gave me." },
        ],
        mistakes: [
          { wrong: "Ayer vi la película te recomendé.", right: "Ayer vi la película que te recomendé.", why: "En español **que** no desaparece, aunque en inglés sí se pueda quitar _that_." },
          { wrong: "El bus qué va al centro es el 51.", right: "El bus que va al centro es el 51.", why: "No es una pregunta: **que** sin tilde." },
        ],
        tip: "Truco: si puedes poner delante el nombre y preguntarte «¿cuál?», la respuesta empieza con **que**: _¿Qué bus? El que va al centro._",
      },
      {
        heading: "Donde para lugares, cuando para momentos",
        body: [
          "Después de un **lugar** usa **donde**: _el parque **donde** juegan los niños_, _la ciudad **donde** nací_. Significa lo mismo que _en el que / en la que_: _la plaza en la que nos vemos_.",
          "Compara: _el mercado **que** abre a las seis_ (el mercado hace la acción) y _el mercado **donde** compro fruta_ (yo compro **en** el mercado). Si dentro de la frase dirías _en ese lugar_, usa **donde**.",
          "Para un **momento** que ya nombraste usa **cuando**: _En diciembre, **cuando** hace menos calor, vamos al lago._ Con _el día, el año, el momento_ es más natural **que** o **en que**: _el día **que** llegué_, _el año en que empecé_.",
        ],
        support: [
          "_Donde_ = where / in which, after a place. _Cuando_ = when, after a time you have already mentioned. With _el día, el año_ use _que_ or _en que_: _el día que llegué_ (the day I arrived).",
        ],
        table: {
          caption: "Lugar y momento",
          head: ["Antes", "Palabra", "Ejemplo"],
          rows: [
            ["un lugar", "donde", "la cafetería donde desayuno"],
            ["un lugar", "en el que / en la que", "la calle en la que vivo"],
            ["un momento nombrado", "cuando", "a las siete, cuando sale todo el mundo"],
            ["el día, el año", "que / en que", "el día que te conocí"],
          ],
        },
        examples: [
          { es: "Esta es la escuela donde estudió mi padre.", en: "This is the school where my father studied." },
          { es: "Por la tarde, cuando cierra el mercado, la plaza se queda tranquila.", en: "In the afternoon, when the market closes, the square gets quiet." },
          { es: "Nunca olvido el año que viví en Santa Ana.", en: "I never forget the year I lived in Santa Ana." },
        ],
        mistakes: [
          { wrong: "Es la plaza que nos vemos los viernes.", right: "Es la plaza donde nos vemos los viernes.", why: "Nos vemos **en** la plaza: es un lugar, usa **donde**." },
          { wrong: "La calle en el que vivo es muy tranquila.", right: "La calle en la que vivo es muy tranquila.", why: "_La calle_ es femenino: **en la que**." },
        ],
      },
      {
        heading: "Lo que: una idea sin nombre",
        body: [
          "**Lo que** no va después de un nombre: significa _la cosa que_ o _las cosas que_. Úsalo cuando no dices el nombre o hablas de una idea: _**Lo que** necesito es un mapa del centro._",
          "Es muy útil para dar opiniones: _**Lo que** más me gusta de Santa Ana es el teatro_, _**Lo que** no entiendo es el horario del bus_. Y también después de un verbo: _No sé **lo que** quiere_, _Haz **lo que** quieras_.",
          "Compara: _la comida **que** prepara doña Carmen_ (hay un nombre: _la comida_) y _**lo que** prepara doña Carmen_ (sin nombre: todo lo que prepara).",
        ],
        support: [
          "_Lo que_ = what / the thing that. It has no noun before it: _Lo que más me gusta es…_ (What I like most is…).",
        ],
        examples: [
          { es: "Lo que más me sorprendió fue el volcán.", en: "What surprised me most was the volcano." },
          { es: "Perdona, no entendí lo que dijiste.", en: "Sorry, I didn't understand what you said." },
          { es: "Compra lo que falta para la cena, por favor.", en: "Buy whatever we need for dinner, please." },
        ],
        mistakes: [
          { wrong: "Que más me gusta es la comida.", right: "Lo que más me gusta es la comida.", why: "Sin nombre delante necesitas **lo que**." },
          { wrong: "No entiendo qué dices, ¿puedes repetir?", right: "No entiendo lo que dices, ¿puedes repetir?", why: "Para decir «la cosa que dices», lo más natural es **lo que**." },
        ],
        tip: "Para describir una palabra que no recuerdas, combina todo: _Es una cosa **que** sirve para…_, _Es el lugar **donde**…_, _Es **lo que** usas para…_",
      },
    ],
  },
  grammar: {
    intro: "Primero **que** con su verbo bien concordado; después la elección entre **que, donde, cuando** y **lo que**.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "Que + verbo",
        prompt: "Completa con **que** y el verbo en presente. Mira bien con qué nombre concuerda el verbo.",
        items: [
          { q: "La farmacia ___ ___ toda la noche está en la avenida. (abrir)", answers: [["que"], ["abre"]], why: "_La farmacia_ abre: **que abre**." },
          { q: "Los buses ___ ___ al centro salen de la esquina. (ir)", answers: [["que"], ["van"]], why: "_Los buses_, plural: **que van**." },
          { q: "La señora ___ ___ las pupusas se llama Lety. (preparar)", answers: [["que"], ["prepara"]], why: "La señora hace la acción: **que prepara**." },
          { q: "Las vecinas ___ ___ en el segundo piso son hermanas. (vivir)", answers: [["que"], ["viven"]], why: "_Las vecinas_, plural: **que viven**." },
          { q: "El chico ___ ___ el periódico pasa a las seis. (repartir)", answers: [["que"], ["reparte"]], why: "_El chico_ reparte: **que reparte**." },
        ],
      },
      {
        id: "g2",
        type: "transform",
        title: "Dos frases, una idea",
        prompt: "Une las dos frases con **que**. No repitas el nombre ni pongas lo / la.",
        items: [
          { source: "Tengo un vecino. Mi vecino toca la guitarra.", answers: ["Tengo un vecino que toca la guitarra."], why: "El vecino hace la acción: **que toca**." },
          { source: "Perdí la bufanda. Mi abuela me tejió la bufanda.", answers: ["Perdí la bufanda que me tejió mi abuela.", "Perdí la bufanda que mi abuela me tejió."], why: "Otra persona hace la acción; sin _la_ después de **que**." },
          { source: "Me gustan los cuadros. Gaby pinta los cuadros.", answers: ["Me gustan los cuadros que pinta Gaby.", "Me gustan los cuadros que Gaby pinta."], why: "_Los cuadros_ no se repiten: **que pinta Gaby**." },
          { source: "Hay una cafetería. La cafetería tiene terraza.", answers: ["Hay una cafetería que tiene terraza."], why: "La cafetería tiene: **que tiene**." },
        ],
      },
      {
        id: "g3",
        type: "choice",
        title: "¿Que, donde, cuando o lo que?",
        prompt: "Elige la palabra que completa la frase.",
        items: [
          { q: "Santa Ana es la ciudad ___ nació mi abuela.", options: ["que", "donde", "lo que"], answer: 1, why: "Nació **en** esa ciudad: **donde**." },
          { q: "___ más me gusta de mi barrio son los árboles.", options: ["Lo que", "Que", "Donde"], answer: 0, why: "Sin nombre delante, una idea: **lo que**." },
          { q: "En enero, ___ empiezan las clases, hay mucho tráfico.", options: ["donde", "lo que", "cuando"], answer: 2, why: "Un momento ya nombrado (_en enero_): **cuando**." },
          { q: "¿Conoces el restaurante ___ abrieron en la esquina?", options: ["donde", "que", "cuando"], answer: 1, why: "Ellos abrieron **el restaurante**: es lo que se abre, no el lugar donde pasa algo. **Que**." },
          { q: "No me acuerdo del día ___ llegué a esta casa.", options: ["que", "donde", "lo que"], answer: 0, why: "Con _el día_ lo natural es **que** (o _en que_)." },
        ],
      },
      {
        id: "g4",
        type: "gap",
        title: "Lugares, momentos e ideas",
        prompt: "Completa con **donde, cuando** o **lo que**.",
        items: [
          { q: "Este es el gimnasio ___ entreno los martes.", answers: [["donde", "en el que"]], why: "Entreno **en** el gimnasio: **donde**." },
          { q: "Haz ___ quieras el domingo: es tu día libre.", answers: [["lo que"]], why: "_Las cosas que quieras_, sin nombre: **lo que**." },
          { q: "A mediodía, ___ hace más calor, la gente come en casa.", answers: [["cuando"]], why: "Momento ya nombrado: **cuando**." },
          { q: "¿Me explicas ___ pasó ayer en la reunión de vecinos?", answers: [["lo que"]], why: "_La cosa que pasó_: **lo que**." },
          { q: "La cancha ___ juegan los chicos está detrás de la iglesia.", answers: [["donde", "en la que"]], why: "Juegan **en** la cancha: **donde** o _en la que_." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para moverte por un barrio nuevo, hablar de los vecinos y describir algo cuando no recuerdas su nombre.",
    groups: [
      {
        title: "Lugares del barrio",
        items: [
          { es: "la tienda de la esquina", en: "the corner shop" },
          { es: "la panadería", en: "the bakery" },
          { es: "la cancha", en: "the (sports) court / pitch" },
          { es: "la parada del bus", en: "the bus stop" },
          { es: "la farmacia de turno", en: "the all-night / duty pharmacy" },
          { es: "el mercado municipal", en: "the town market" },
        ],
      },
      {
        title: "La gente del barrio",
        items: [
          { es: "el vecino / la vecina de enfrente", en: "the neighbour across the street" },
          { es: "el dueño / la dueña", en: "the owner / the landlord" },
          { es: "el vendedor ambulante", en: "the street vendor" },
          { es: "la familia anfitriona", en: "the host family" },
          { es: "saludarse", en: "to greet each other" },
        ],
      },
      {
        title: "Describir sin la palabra exacta",
        items: [
          { es: "Es una cosa que sirve para…", en: "It's a thing that is used for…" },
          { es: "Es un lugar donde…", en: "It's a place where…" },
          { es: "Es la persona que…", en: "It's the person who…" },
          { es: "¿Cómo se llama lo que…?", en: "What do you call the thing that…?" },
          { es: "No me sale la palabra.", en: "I can't think of the word." },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "Adivina la palabra",
        prompt: "Une cada definición con la palabra.",
        pairs: [
          { left: "Es el lugar donde esperas el bus.", right: "la parada" },
          { left: "Es la tienda que abre toda la noche para vender medicinas.", right: "la farmacia de turno" },
          { left: "Es la persona que vive en la casa de enfrente.", right: "la vecina de enfrente" },
          { left: "Es el lugar donde compras pan recién hecho.", right: "la panadería" },
          { left: "Es la familia que recibe a un estudiante en su casa.", right: "la familia anfitriona" },
        ],
        why: "Para definir: **es el lugar donde…**, **es la persona que…**, **es la tienda que…**",
      },
      {
        id: "v2",
        type: "context",
        title: "Cuando no sale la palabra",
        prompt: "Lee la situación y elige la mejor frase.",
        items: [
          { context: "En la ferretería no recuerdas cómo se dice «screwdriver».", q: "Le dices al dependiente:", options: ["Busco una cosa que sirve para poner tornillos.", "Busco una cosa donde pone tornillos.", "Busco lo que tornillos."], answer: 0, why: "Una cosa + **que sirve para**." },
          { context: "Quieres preguntar por el sitio de la plaza donde venden helados, pero no sabes su nombre.", q: "Preguntas:", options: ["¿Qué venden helados?", "¿Cómo se llama el lugar donde venden helados?", "¿Lo que venden helados?"], answer: 1, why: "Un lugar: **el lugar donde**." },
          { context: "Tu familia anfitriona te pregunta qué necesitas del supermercado.", q: "Respondes:", options: ["Que necesito es champú.", "Donde necesito es champú.", "Lo que necesito es champú."], answer: 2, why: "Sin nombre delante: **lo que necesito**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Que sin fuerza, qué con fuerza",
    explanation: [
      "El **que** de las relativas es una palabra **sin fuerza**: se pega a la palabra siguiente y casi no se oye. _la se-ño-ra-que-VEN-de-pan_. Lo mismo pasa con **donde** y **cuando** dentro de la frase.",
      "En cambio, **qué, dónde, cuándo** en preguntas llevan **fuerza** y tilde: _¿QUÉ bus tomas?_, _¿DÓN-de vives?_ La voz sube o golpea en esa palabra.",
      "Si dices el _que_ relativo con mucha fuerza, la frase suena a pregunta. Practica con frases largas: une el nombre, el _que_ y el verbo en un solo grupo de voz.",
    ],
    support: [
      "Relative _que, donde, cuando_ are unstressed and link to the next word. Question words _qué, dónde, cuándo_ are stressed and written with an accent.",
    ],
    table: {
      caption: "Pregunta o dato",
      head: ["Con fuerza (pregunta)", "Sin fuerza (dato)"],
      rows: [
        ["¿QUÉ pan compras?", "el pan que COM-pras"],
        ["¿DÓN-de comes?", "el sitio donde CO-mes"],
        ["¿CUÁN-do llegas?", "en mayo, cuando LLE-gas"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Pregunta o dato?",
      prompt: "Escucha y decide si la palabra marcada lleva fuerza (pregunta) o no (dato).",
      items: [
        { q: "En la frase del pan, ¿qué palabra oyes?", audio: "¿Qué pan compraste?", options: ["que, sin fuerza", "qué, con fuerza"], answer: 1 },
        { q: "En la frase de la tienda, ¿qué palabra oyes?", audio: "La tienda que está en la esquina cierra tarde.", options: ["que, sin fuerza", "qué, con fuerza"], answer: 0 },
        { q: "En la frase de la cena, ¿qué palabra oyes?", audio: "¿Dónde cenamos esta noche?", options: ["donde, sin fuerza", "dónde, con fuerza"], answer: 1 },
        { q: "En la frase del parque, ¿qué palabra oyes?", audio: "Es el parque donde corro los sábados.", options: ["donde, sin fuerza", "dónde, con fuerza"], answer: 0 },
        { q: "En la frase de las vacaciones, ¿qué palabra oyes?", audio: "En agosto, cuando tengo vacaciones, viajo a la playa.", options: ["cuándo, con fuerza", "cuando, sin fuerza"], answer: 1 },
      ],
    },
    produce: [
      { text: "La señora que vende pan.", tip: "Un solo grupo: _la-se-ÑO-ra-que-VEN-de-PAN_." },
      { text: "¿Qué pan vende la señora?", tip: "Golpe fuerte en _QUÉ_ al principio." },
      { text: "Es el parque donde juegan los niños.", tip: "_donde_ ligero, pegado a _JUE-gan_." },
      { text: "Lo que más me gusta es la plaza.", tip: "Pausa corta después de _gusta_; baja la voz al final." },
      { text: "¿Dónde está el lugar donde venden helados?", tip: "El primer _dónde_ fuerte; el segundo, suave." },
    ],
    spelling: "Tilde solo en preguntas y exclamaciones: **¿qué?, ¿dónde?, ¿cuándo?** Sin tilde en las relativas: **que, donde, cuando, lo que**.",
  },
  listening: {
    title: "Un paseo por el barrio",
    context: "Es el primer día de Daniel en Santa Ana. Doña Carmen, su madre anfitriona, le enseña el barrio y lo presenta a don Julio, el dueño de la tienda de la esquina.",
    speakers: [
      { id: "carmen", name: "Doña Carmen", voice: "es-MX-f", role: "madre de la familia anfitriona" },
      { id: "daniel", name: "Daniel", voice: "es-PE-m", role: "estudiante de Lima" },
      { id: "julio", name: "Don Julio", voice: "es-CO-m", role: "dueño de la tienda de la esquina" },
    ],
    script: [
      { speaker: "carmen", text: "Bueno, Daniel, este es el barrio. ¿Ves esa casa azul? Es la casa donde nací yo. Ahora vive ahí mi hermana." },
      { speaker: "daniel", text: "¡Qué bonita! ¿Y la tienda que está en la esquina es de su familia?" },
      { speaker: "carmen", text: "No, es de don Julio, el señor que nos vende las tortillas cada mañana. Vamos a saludarlo." },
      { speaker: "julio", text: "¡Buenos días, doña Carmen! ¿Este es el muchacho que viene de Lima?" },
      { speaker: "carmen", text: "Sí, es Daniel, el estudiante que se queda con nosotros hasta diciembre." },
      { speaker: "julio", text: "Bienvenido, Daniel. Aquí tienes todo lo que necesitas: pan, leche, saldo para el teléfono. Y si no tengo algo, te digo quién lo vende." },
      { speaker: "daniel", text: "Muchas gracias. Una pregunta: ¿cuál es el bus que va a la universidad?" },
      { speaker: "julio", text: "El que para enfrente de la iglesia. Pero a las siete, cuando sale la gente a trabajar, va lleno. Sal un poco antes." },
      { speaker: "carmen", text: "Y mira, ese es el parque donde juegan los niños por la tarde. Si un día te pierdes, nos vemos ahí." },
      { speaker: "daniel", text: "Perfecto. Lo que más me gusta del barrio es que todo el mundo se saluda." },
      { speaker: "carmen", text: "Así somos aquí. El día que llegaste, los vecinos ya sabían tu nombre." },
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
            { q: "¿Qué hacen doña Carmen y Daniel?", options: ["Buscan una casa para alquilar.", "Pasean por el barrio y conocen a un vecino.", "Compran comida para una fiesta."], answer: 1 },
            { q: "¿Quién es don Julio?", options: ["el dueño de la tienda de la esquina", "el hermano de doña Carmen", "un profesor de Daniel"], answer: 0 },
            { q: "¿Cómo se siente Daniel en el barrio?", options: ["Está aburrido.", "Tiene miedo.", "Le gusta mucho."], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a los datos de cada persona y cada lugar.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Quién vive ahora en la casa azul?", options: ["don Julio", "la hermana de doña Carmen", "un estudiante"], answer: 1 },
            { q: "¿Qué le vende don Julio a la familia cada mañana?", options: ["tortillas", "periódicos", "fruta"], answer: 0 },
            { q: "¿Dónde para el bus de la universidad?", options: ["al lado del parque", "en la esquina de la tienda", "enfrente de la iglesia"], answer: 2 },
            { q: "¿Por qué tiene que salir antes Daniel?", options: ["porque el bus va lleno a las siete", "porque la universidad está lejos", "porque la tienda cierra temprano"], answer: 0 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en la palabra que une cada nombre con su dato.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué palabra une las ideas en cada frase?",
          categories: ["que", "donde", "cuando", "lo que"],
          items: [
            { text: "el señor que nos vende las tortillas", cat: 0, why: "El señor hace la acción: **que vende**." },
            { text: "la casa donde nací yo", cat: 1, why: "Nací **en** la casa: **donde**." },
            { text: "a las siete, cuando sale la gente a trabajar", cat: 2, why: "Un momento ya nombrado: **cuando**." },
            { text: "todo lo que necesitas", cat: 3, why: "Sin nombre delante: **lo que**." },
            { text: "el parque donde juegan los niños", cat: 1 },
            { text: "el muchacho que viene de Lima", cat: 0 },
            { text: "Lo que más me gusta del barrio", cat: 3 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "El barrio donde vivo ahora",
    genre: "Correo personal",
    frame: "Después de dos semanas en Santa Ana, Daniel escribe a su hermana Lucía, que vive en Lima.",
    text: [
      "Hola, Lucía: Ya llevo dos semanas en Santa Ana y estoy muy contento. Vivo con la familia Morán en una casa que está a diez minutos del centro. Doña Carmen es la señora que cocina en casa y es muy cariñosa. Gaby es la hija que estudia Medicina y me ayuda con las tareas de la universidad.",
      "Mi lugar favorito es la plaza donde está la catedral, un edificio blanco que parece un pastel de boda. Los domingos por la mañana, cuando hay menos tráfico, voy con Gaby a una cafetería que tiene una terraza enorme. Lo que más me sorprende es el teatro: lo construyeron hace más de cien años y todavía funciona.",
      "Las clases van bien. El profesor que tenemos en gramática explica muy claro, pero a veces no entiendo lo que dicen mis compañeros, porque hablan muy rápido. El sábado pasado fuimos al lago de Coatepeque, un lugar donde se puede nadar dentro de un volcán. Te mando las fotos que saqué allí.",
      "¿Te acuerdas del día que te dije que tenía miedo de viajar solo? Pues ya no. Un abrazo grande, Daniel.",
    ],
    glossary: [
      { es: "el pastel de boda", en: "the wedding cake" },
      { es: "la terraza", en: "the terrace" },
      { es: "el lago de Coatepeque", en: "Lake Coatepeque (a crater lake near Santa Ana)" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee el correo y responde.",
        items: [
          { q: "¿Quién ayuda a Daniel con las tareas?", options: ["doña Carmen", "Gaby", "su profesor"], answer: 1 },
          { q: "¿Cómo es la catedral, según Daniel?", options: ["blanca, como un pastel de boda", "pequeña y antigua", "moderna, con una terraza"], answer: 0 },
          { q: "¿Qué le sorprende del teatro?", options: ["que es muy caro", "que está cerrado", "que tiene más de cien años y funciona"], answer: 2 },
          { q: "¿Qué problema tiene Daniel en clase?", options: ["No entiende al profesor.", "Sus compañeros hablan muy rápido.", "No tiene libros."], answer: 1 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿A qué se refiere cada palabra en negrita: a una persona, a una cosa o a un lugar?",
        categories: ["persona", "cosa", "lugar"],
        items: [
          { text: "la señora **que** cocina en casa", cat: 0 },
          { text: "una casa **que** está a diez minutos del centro", cat: 1 },
          { text: "la plaza **donde** está la catedral", cat: 2 },
          { text: "el profesor **que** tenemos en gramática", cat: 0 },
          { text: "las fotos **que** saqué allí", cat: 1 },
          { text: "un lugar **donde** se puede nadar", cat: 2 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase del correo para ver qué gramática hay dentro.",
      items: [
        { quote: "la señora que cocina en casa", note: "**Que** + verbo: la señora hace la acción, por eso el verbo va justo después." },
        { quote: "El profesor que tenemos en gramática", note: "**Que** + otra persona: _nosotros_ tenemos al profesor. Sin _lo_ después de que." },
        { quote: "la plaza donde está la catedral", note: "**Donde** después de un lugar = _en la que_." },
        { quote: "Los domingos por la mañana, cuando hay menos tráfico", note: "**Cuando** retoma un momento que ya nombró." },
        { quote: "Lo que más me sorprende es el teatro", note: "**Lo que** + opinión, sin nombre delante." },
        { quote: "del día que te dije", note: "Con _el día_, lo natural es **que**." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: que para personas y cosas, donde y cuando para lugares y momentos, lo que para ideas.",
    exercises: [
      {
        id: "x1",
        type: "error",
        title: "Corrige los mensajes",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "La bicicleta que la compré ayer ya está rota.", answers: ["La bicicleta que compré ayer ya está rota."], why: "Después de **que** no repitas _la_." },
          { sentence: "Las chicas que trabaja en la panadería son simpáticas.", answers: ["Las chicas que trabajan en la panadería son simpáticas."], why: "_Las chicas_ → **trabajan**." },
          { sentence: "Este es el café que conocí a mi novia.", answers: ["Este es el café donde conocí a mi novia.", "Este es el café en el que conocí a mi novia."], why: "La conocí **en** el café: **donde**." },
          { sentence: "Que necesito ahora es dormir.", answers: ["Lo que necesito ahora es dormir."], why: "Sin nombre delante: **lo que**." },
          { sentence: "Mi tío quien vive en Santa Ana es médico.", answers: ["Mi tío que vive en Santa Ana es médico."], why: "Sin comas, después del nombre: **que**." },
        ],
      },
      {
        id: "x2",
        type: "order",
        title: "Frases del barrio",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["El", "bus", "que", "tomo", "pasa", "a", "las", "siete."], en: "The bus I take comes at seven." },
          { words: ["Esa", "es", "la", "cancha", "donde", "juega", "mi", "hermano."], en: "That's the court where my brother plays." },
          { words: ["Lo", "que", "más", "extraño", "es", "la", "comida", "de", "casa."], en: "What I miss most is food from home." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué dices?",
        prompt: "Lee la situación y elige la mejor respuesta.",
        items: [
          { context: "Un amigo te pregunta qué vecino es el que te ayudó con la mudanza.", q: "Respondes:", options: ["El vecino que vive en el tercero.", "El vecino donde vive en el tercero.", "El vecino lo que vive en el tercero."], answer: 0, why: "Una persona que hace la acción: **que vive**." },
          { context: "Quieres recomendar el restaurante en el que cenaste anoche.", q: "Escribes:", options: ["Te recomiendo el restaurante que cené anoche.", "Te recomiendo lo que cené anoche el restaurante.", "Te recomiendo el restaurante donde cené anoche."], answer: 2, why: "Cenaste **en** el restaurante: **donde**." },
          { context: "Tu profesora te pregunta qué es lo más difícil del español para ti.", q: "Respondes:", options: ["Que es más difícil son los verbos.", "Lo que me parece más difícil son los verbos.", "Cuando es más difícil son los verbos."], answer: 1, why: "Opinión sin nombre delante: **lo que**." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases completas. Después compara con el modelo.",
        items: [
          {
            prompt: "Presenta a tres personas de tu barrio o de tu trabajo con que: qué hacen o qué haces tú con ellas.",
            model: "Don Mario es el señor que arregla bicicletas en mi calle. Ana es la compañera que me lleva a casa en coche los viernes. Y la señora Paz es la vecina que riega mis plantas cuando viajo.",
            checklist: ["Usas **que** después de cada persona", "El verbo concuerda con la persona", "No repites lo / la después de que"],
          },
          {
            prompt: "Describe dos lugares importantes de tu ciudad con donde y un momento especial con cuando o el día que.",
            model: "El mercado central es el lugar donde compro fruta los sábados. La biblioteca nueva es el sitio donde estudio en silencio. Y nunca olvido el día que vi el mar por primera vez.",
            checklist: ["Usas **donde** después de un lugar", "Usas **cuando** o **el día que** para un momento", "Las frases tienen un dato claro"],
          },
          {
            prompt: "Explica qué te gusta y qué no te gusta de tu barrio con lo que.",
            model: "Lo que más me gusta de mi barrio es que hay muchos árboles. Lo que no me gusta es el ruido de las motos por la noche. Y lo que necesita es una parada de bus más cerca.",
            checklist: ["Empiezas al menos dos frases con **Lo que**", "Usas **más** para la opinión más fuerte", "Das una idea positiva y una negativa"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe una pequeña guía de tu barrio para un estudiante que llega a vivir con tu familia.",
    context: "Tu familia va a recibir a un estudiante extranjero durante un mes. Le escribes un mensaje antes de su llegada para que sepa dónde están las cosas y quién es quién.",
    steps: [
      "Saluda y presenta la casa con una frase con **que** (_vivimos en una casa que…_).",
      "Presenta a dos personas del barrio con **que** (_el señor que…, la vecina que…_).",
      "Explica dos lugares útiles con **donde** (_la tienda donde…, la parada donde…_).",
      "Da un consejo con **cuando** (_por la mañana, cuando…_).",
      "Termina con **lo que** más te gusta del barrio.",
      "Revisa: ¿pusiste **que** y no _lo / la_? ¿Usaste **donde** solo con lugares? ¿El verbo concuerda con el nombre?",
    ],
    useLanguage: ["Vivimos en una casa que…", "el señor que…", "la tienda donde…", "Por la mañana, cuando…", "Lo que más me gusta es…", "el día que llegues"],
    model: [
      "¡Hola, Tom! Vivimos en una casa que está cerca del estadio. En la esquina hay una tienda donde puedes comprar pan, saldo y bebidas; la dueña es doña Rosa, la señora que siempre está sonriendo. El bus que va al centro para delante de la farmacia. Por la mañana, cuando todos van a trabajar, hay mucho tráfico, así que sal temprano. Lo que más me gusta del barrio es el parque donde corremos por la tarde. ¡Te esperamos el día que llegues!",
    ],
    checklist: [
      "Usas **que** para personas y cosas, sin repetir lo / la.",
      "Usas **donde** solo después de un lugar.",
      "Usas **cuando** o **el día que** para un momento.",
      "Usas **lo que** para una opinión o idea sin nombre.",
      "El verbo concuerda con el nombre de antes de que.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "Mi barrio en un minuto",
        prompt: "Presenta tu barrio a alguien que llega: dos personas que conoces, dos lugares útiles y lo que más te gusta.",
        prep: ["Vivo en un barrio que…", "La persona que más conozco es…", "Hay un sitio donde…", "Lo que más me gusta es…"],
        seconds: 75,
        model: "Vivo en un barrio que está al norte de la ciudad. La persona que más conozco es el señor de la panadería: me guarda el pan los domingos. Hay un parque donde la gente pasea con sus perros, y una piscina donde nado en verano. Lo que más me gusta es que todo está cerca.",
        selfCheck: ["Uso **que** y **donde** sin dudar.", "El _que_ y el _donde_ suenan suaves, pegados al verbo."],
      },
      {
        title: "¿Cómo se llama…?",
        prompt: "Describe cinco cosas o lugares sin decir su nombre, como en un juego de adivinanzas. Después di la palabra.",
        prep: ["Es una cosa que sirve para…", "Es un lugar donde…", "Es la persona que…", "Es lo que usas cuando…"],
        seconds: 60,
        model: "Es una cosa que sirve para abrir la puerta: la llave. Es un lugar donde ves películas en una pantalla grande: el cine. Es la persona que te corta el pelo: el peluquero.",
        selfCheck: ["Uso al menos tres palabras distintas: que, donde, lo que."],
      },
      {
        title: "Un lugar y un momento",
        prompt: "Habla de un lugar donde pasó algo importante para ti y del día que pasó.",
        prep: ["Es el lugar donde…", "Fue el día que…", "En ese momento, cuando…", "Lo que recuerdo mejor es…"],
        seconds: 50,
        selfCheck: ["Uso **donde** para el lugar y **el día que** o **cuando** para el momento."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Adivina la palabra", task: "Describe tres objetos de la clase sin decir su nombre. Tu profesor tiene que adivinarlos.", phrases: ["Es una cosa que sirve para…", "Es lo que usas cuando…"] },
      { move: "Presenta a alguien", task: "Enseña una foto de tu familia o amigos y presenta a cada persona con un dato.", phrases: ["Esta es la prima que vive en…", "Este es el amigo que…"] },
      { move: "Recomienda un sitio", task: "Recomienda a tu profesor un lugar de tu ciudad y di qué se puede hacer allí.", phrases: ["Es un sitio donde…", "Lo que más me gusta es…"] },
      { move: "Pide aclaraciones", task: "Cuando no entiendas algo en la clase, pregúntalo con lo que.", phrases: ["No entendí lo que dijiste.", "¿Puedes repetir lo que…?"] },
    ],
    bring: "Trae una foto de tu calle o de tu barrio para explicar quién vive allí, qué hay y dónde haces cada cosa.",
  },
  quiz: {
    items: [
      { type: "gap", q: "Los turistas ___ ___ a Santa Ana visitan la catedral. (llegar)", answers: [["que"], ["llegan"]], why: "_Los turistas_ llegan: **que llegan**." },
      { type: "transform", source: "Me regalaron un libro. Ya leí el libro.", instruction: "Une las dos frases con que.", answers: ["Ya leí el libro que me regalaron."], why: "Sin _lo_ después de **que**." },
      { type: "choice", q: "¿Qué frase sobre la piscina del barrio es correcta?", options: ["Es la piscina que nado los lunes.", "Es la piscina donde nado los lunes.", "Es la piscina lo que nado los lunes."], answer: 1, why: "Nado **en** la piscina: **donde**." },
      { type: "error", sentence: "El perro que lo encontré en la calle ahora vive conmigo.", answers: ["El perro que encontré en la calle ahora vive conmigo."], why: "No repitas _lo_ después de **que**." },
      { type: "error", sentence: "Que más me molesta del centro es el tráfico.", answers: ["Lo que más me molesta del centro es el tráfico."], why: "Sin nombre delante: **lo que**." },
      { type: "gap", q: "En julio, ___ cierran las escuelas, el barrio está más tranquilo.", answers: [["cuando"]], why: "Momento ya nombrado: **cuando**." },
      { type: "listen", q: "En la frase de la vecina, ¿es pregunta o dato?", audio: "La vecina que vive enfrente es enfermera.", options: ["pregunta, con qué", "dato, con que"], answer: 1 },
      { type: "order", words: ["Es", "la", "ciudad", "donde", "conocí", "a", "mi", "mejor", "amiga."] },
      { type: "choice", q: "Para decir qué tren tomas cada día, ¿qué frase usas?", options: ["El tren que tomo sale a las ocho.", "El tren qué tomo sale a las ocho.", "El tren que lo tomo sale a las ocho."], answer: 0, why: "**Que** sin tilde y sin _lo_." },
      { type: "open", prompt: "Escribe tres frases sobre tu ciudad: una persona con que, un lugar con donde y una opinión con lo que.", model: "Mi tía es la persona que mejor conoce la ciudad. El río es el lugar donde paseo los domingos. Lo que más me gusta es la comida de la calle.", checklist: ["Que después de una persona", "Donde después de un lugar", "Lo que sin nombre delante"] },
    ],
  },
  complete: {
    canNow: [
      "Decir de qué persona, cosa o lugar hablo con **que**: _la vecina que vive enfrente_.",
      "Unir dos frases sin repetir el nombre y sin _lo / la_ después de que.",
      "Usar **donde** después de un lugar y **cuando** o **el día que** para un momento.",
      "Dar opiniones con **lo que**: _lo que más me gusta es…_",
      "Describir una cosa cuando no recuerdo su nombre.",
      "Presentar mi barrio por escrito y en voz alta.",
    ],
    review: ["La señora que vende pan / el pan que compro (nunca _que lo compro_).", "El parque donde juego; en mayo, cuando llueve; el día que llegué.", "Lo que más me gusta es…"],
  },
  related: [
    { path: "/gramatica/relativas-especificativas-con-que", label: "Clase: Relativas especificativas con que" },
    { path: "/gramatica/relativas-con-donde-cuando-y-lo", label: "Clase: Relativas con donde, cuando y lo que" },
  ],
};
