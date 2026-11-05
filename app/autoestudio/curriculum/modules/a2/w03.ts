import type { Module } from "../../types";

export const a2w03: Module = {
  id: "a2-03",
  level: "a2",
  week: 3,
  kind: "core",
  title: "Cómo era todo y qué pasó aquel día",
  subtitle: "Repaso del imperfecto para describir, contar hábitos y acciones en desarrollo, y de su combinación con el indefinido en una anécdota.",
  stop: { place: "Granada", country: "Nicaragua" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g049",
    "a2.gram.g050",
    "a2.voc.w03-ciudad-antigua",
    "a2.pron.w03-hiato-ia",
    "a2.lis.w03-recuerdos-abuela",
    "a2.read.w03-cronica-murcielago",
    "a2.wri.w03-recuerdo-lugar",
    "a2.spk.w03-anecdota-infancia",
    "a2.fun.w03-describir-pasado",
    "a2.disc.w03-escena-y-hechos",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes describir cómo era un lugar o una persona, contar qué hacías antes y narrar una anécdota con su escena y sus hechos.",
    steps: [
      "Repasa las formas del imperfecto: `-aba`, `-ía` y los tres irregulares `era`, `iba`, `veía`.",
      "Repasa sus tres usos: describir, contar hábitos y presentar una acción en desarrollo.",
      "Repasa cómo se reparten el trabajo el imperfecto (la escena) y el indefinido (los hechos).",
      "Pronuncia bien `había`, `tenía`, `vivía`, con la í fuerte.",
      "Escucha a una abuela de Granada y lee una crónica sobre una casa antigua.",
      "Escribe y graba el recuerdo de un lugar con una anécdota.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases: el imperfecto, para describir y contar costumbres del pasado, y su combinación con el indefinido para contar una anécdota completa. Aquí lo ves con otros ejemplos y una imagen que te ayuda a elegir.",
    parts: [
      {
        heading: "Las formas: -aba, -ía y solo tres irregulares",
        body: [
          "El imperfecto es el tiempo más regular del español. Los verbos en **-ar** toman **-aba** (_cantaba_); los verbos en **-er** y en **-ir** toman **-ía** (_comía_, _vivía_). La forma de yo y la de él son iguales: el contexto o el pronombre dicen quién es.",
          "Fíjate en las tildes: **nosotros** en -ar lleva tilde (_cantábamos_) y todas las formas en -ía la llevan (_comíamos_, _vivían_).",
          "Solo hay tres irregulares: **ser** (_era_), **ir** (_iba_) y **ver** (_veía_). Todo lo demás es regular, también _tener_, _hacer_ o _poder_: _tenía_, _hacía_, _podía_.",
        ],
        support: [
          "Imperfect: _-ar_ → _-aba_; _-er/-ir_ → _-ía_. Only three irregular verbs: _ser_ (era), _ir_ (iba), _ver_ (veía).",
        ],
        table: {
          caption: "Imperfecto: regulares e irregulares",
          head: ["Persona", "jugar", "tener", "ser", "ir", "ver"],
          rows: [
            ["yo", "jugaba", "tenía", "era", "iba", "veía"],
            ["tú", "jugabas", "tenías", "eras", "ibas", "veías"],
            ["él, ella, usted", "jugaba", "tenía", "era", "iba", "veía"],
            ["nosotros, nosotras", "jugábamos", "teníamos", "éramos", "íbamos", "veíamos"],
            ["vosotros, vosotras", "jugabais", "teníais", "erais", "ibais", "veíais"],
            ["ellos, ellas, ustedes", "jugaban", "tenían", "eran", "iban", "veían"],
          ],
        },
        examples: [
          { es: "Mi abuelo tenía una panadería en la plaza.", en: "My grandfather had a bakery on the square." },
          { es: "Éramos cinco hermanos y vivíamos en una casa pequeña.", en: "There were five of us brothers and sisters and we lived in a small house." },
        ],
        mistakes: [
          { wrong: "De niño yo iva a la escuela a pie.", right: "De niño yo iba a la escuela a pie.", why: "El imperfecto de _ir_ se escribe con **b**: **iba**." },
          { wrong: "Nosotros jugabamos en la calle.", right: "Nosotros jugábamos en la calle.", why: "Nosotros en -ar lleva tilde: **jugábamos**." },
        ],
      },
      {
        heading: "Para qué sirve: describir, costumbres y acciones en curso",
        body: [
          "**Describir** personas, lugares y situaciones del pasado: _La casa era blanca y tenía un patio con plantas._ También la hora, la edad y el tiempo: _Eran las seis_, _Tenía diez años_, _Hacía calor_.",
          "**Contar costumbres**: lo que pasaba normalmente, muchas veces. Marcadores: **antes**, **de niño**, **cuando era pequeña**, **siempre**, **todos los domingos**, **a menudo**. _Todos los veranos íbamos al lago._",
          "**Presentar una acción en desarrollo**: algo estaba pasando en un momento del pasado, sin decir cuándo terminó. _A las ocho yo cenaba y mi hermana estudiaba._",
        ],
        support: [
          "Use the imperfect to describe the past, for habits (_used to_) and for actions in progress (_was doing_).",
        ],
        examples: [
          { es: "Antes en mi barrio no había supermercados.", en: "There didn't use to be supermarkets in my neighbourhood." },
          { es: "Todos los domingos comíamos en casa de la abuela.", en: "Every Sunday we used to have lunch at grandma's." },
          { es: "Mientras tú dormías, yo preparaba el desayuno.", en: "While you were sleeping, I was making breakfast." },
        ],
        mistakes: [
          { wrong: "Cuando fui pequeño, vivía en Masaya.", right: "Cuando era pequeño, vivía en Masaya.", why: "La edad y la etapa de la vida son descripción: **era** pequeño." },
          { wrong: "Antes mi madre trabajó todos los días en el mercado.", right: "Antes mi madre trabajaba todos los días en el mercado.", why: "**Todos los días** y **antes** marcan una costumbre: imperfecto." },
        ],
        tip: "Si en inglés puedes decir _used to_ o _was …-ing_, en español casi siempre es imperfecto.",
      },
      {
        heading: "La escena y los hechos: imperfecto e indefinido juntos",
        body: [
          "Imagina una obra de teatro. El **imperfecto** pinta el **escenario**: dónde estábamos, qué tiempo hacía, qué estaba pasando. El **indefinido** cuenta los **hechos** que hacen avanzar la historia: qué pasó, qué hizo cada uno.",
          "Por eso una anécdota suele empezar en imperfecto y cambia al indefinido con **de repente**, **entonces** o **en ese momento**: _Llovía y todos dormían. De repente, alguien llamó a la puerta._",
          "**Cuando** no decide el tiempo: mira lo que pasa. _Cuando llegué, mi madre cocinaba_ (la acción de mi madre estaba en curso). _Cuando llegué, mi madre cocinó_ (primero llegué, después ella empezó a cocinar).",
        ],
        support: [
          "Imperfect = background (the scene). Simple past = events that move the story forward.",
        ],
        table: {
          caption: "Escena o hecho",
          head: ["Escena (imperfecto)", "Hecho (indefinido)"],
          rows: [
            ["Hacía mucho viento…", "…y se cayó un árbol."],
            ["Mi padre leía el periódico…", "…cuando sonó el teléfono."],
            ["Estábamos en el parque…", "…y empezó a llover."],
          ],
        },
        examples: [
          { es: "Eran las once y la calle estaba vacía. Entonces vi una luz en la iglesia.", en: "It was eleven and the street was empty. Then I saw a light in the church." },
          { es: "Mientras esperaba el bus, conocí a una chica de León.", en: "While I was waiting for the bus, I met a girl from León." },
        ],
        mistakes: [
          { wrong: "Cuando entré en casa, todos durmieron.", right: "Cuando entré en casa, todos dormían.", why: "Todos ya estaban durmiendo cuando yo entré: acción en curso, **dormían**." },
        ],
      },
      {
        heading: "Había, hubo, era, fue",
        body: [
          "**Había** describe lo que existía en la escena: _Había mucha gente en la plaza_. **Hubo** presenta algo que **ocurrió**: _Hubo una tormenta_, _Hubo un accidente_, _Hubo una fiesta_.",
          "**Era** describe: _Era un día gris_. **Fue** valora un hecho completo, ya terminado: _El concierto fue increíble_. Si hablas de un suceso concreto, no uses _era_: di _hubo_ o _fue_.",
          "Las dos formas de _haber_ no tienen plural en este uso: _había dos coches_, _hubo tres conciertos_, nunca _habían dos coches_.",
        ],
        support: [
          "_Había_ = there was/were (description). _Hubo_ = there was (an event happened). Both stay singular.",
        ],
        examples: [
          { es: "En la boda había flores por todas partes.", en: "At the wedding there were flowers everywhere." },
          { es: "Anoche hubo un apagón en todo el barrio.", en: "Last night there was a power cut in the whole neighbourhood." },
          { es: "La cena fue muy divertida.", en: "The dinner was great fun." },
        ],
        mistakes: [
          { wrong: "Ayer era un accidente en la carretera.", right: "Ayer hubo un accidente en la carretera.", why: "Un suceso concreto se presenta con **hubo**." },
          { wrong: "En la fiesta habían muchos niños.", right: "En la fiesta había muchos niños.", why: "_Haber_ con este sentido no tiene plural: **había**." },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero practicas las formas y los usos del imperfecto; después lo combinas con el indefinido.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "Formas del imperfecto",
        prompt: "Completa con el imperfecto del verbo entre paréntesis.",
        items: [
          { q: "Cuando ___ (ser) niña, mi familia ___ (vivir) cerca del lago.", answers: [["era"], ["vivía"]], why: "_Ser_ es irregular: **era**; _vivir_ toma **-ía**." },
          { q: "Mis primos y yo ___ (ir) al río todos los sábados.", answers: [["íbamos"]], why: "_Ir_ es irregular: **íbamos**, con tilde." },
          { q: "Antes la gente no ___ (ver) la televisión por la mañana.", answers: [["veía"]], why: "_Ver_ mantiene la e: **veía**." },
          { q: "¿Tú ___ (tocar) algún instrumento de pequeño?", answers: [["tocabas"]], why: "Tú en -ar: **tocabas**." },
          { q: "El hotel ___ (tener) una piscina y ___ (estar) junto al mar.", answers: [["tenía"], ["estaba"]], why: "Descripción del lugar: **tenía**, **estaba**." },
        ],
      },
      {
        id: "g2",
        type: "classify",
        title: "¿Qué hace el imperfecto aquí?",
        prompt: "Clasifica cada frase según el uso del imperfecto.",
        categories: ["describe", "cuenta una costumbre", "presenta una acción en curso"],
        items: [
          { text: "La plaza tenía una fuente de piedra.", cat: 0 },
          { text: "Cada tarde los vecinos se sentaban en la acera.", cat: 1, why: "**Cada tarde**: costumbre." },
          { text: "A medianoche todavía estudiábamos para el examen.", cat: 2 },
          { text: "Mi abuela era alta y llevaba siempre un pañuelo.", cat: 0, why: "Describe a una persona. _Siempre_ aquí acompaña la descripción de su aspecto." },
          { text: "De niños, en vacaciones, nos levantábamos tardísimo.", cat: 1 },
          { text: "Mientras el profesor hablaba, alguien roncaba al fondo.", cat: 2 },
        ],
      },
      {
        id: "g3",
        type: "choice",
        title: "¿Escena o hecho?",
        prompt: "Elige el tiempo adecuado para cada hueco.",
        items: [
          { q: "___ las nueve de la noche cuando se fue la luz.", options: ["Fueron", "Eran", "Hubo"], answer: 1, why: "La hora es parte de la escena: **eran**." },
          { q: "Yo caminaba por el mercado y de repente ___ a mi antigua profesora.", options: ["veía", "he visto", "vi"], answer: 2, why: "**De repente** introduce un hecho: **vi**." },
          { q: "El año pasado ___ un festival de música en la plaza.", options: ["hubo", "había", "era"], answer: 0, why: "Un suceso concreto: **hubo**." },
          { q: "Cuando llegamos al hotel, la recepcionista ___ por teléfono.", options: ["habló", "hablaba", "habla"], answer: 1, why: "Su acción estaba en curso: **hablaba**." },
          { q: "Al final, el viaje ___ muy bonito.", options: ["era", "fue", "había"], answer: 1, why: "Valoración de un hecho terminado: **fue**." },
        ],
      },
      {
        id: "g4",
        type: "transform",
        title: "Une la escena y el hecho",
        prompt: "Une las dos frases en una sola. La primera es la escena y la segunda, el hecho.",
        items: [
          { source: "Yo me duchaba. Sonó el timbre.", instruction: "Une con «cuando».", answers: ["Yo me duchaba cuando sonó el timbre.", "Me duchaba cuando sonó el timbre."], why: "Escena en imperfecto + hecho en indefinido." },
          { source: "Los niños jugaban en el patio. Empezó a llover.", instruction: "Une con «y de repente».", answers: ["Los niños jugaban en el patio y de repente empezó a llover."], why: "**De repente** abre el hecho." },
          { source: "Esperábamos el autobús. Conocimos a un músico.", instruction: "Empieza con «Mientras».", answers: ["Mientras esperábamos el autobús, conocimos a un músico.", "Mientras esperábamos el autobús conocimos a un músico."], why: "**Mientras** + imperfecto para la escena." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "El tema de la semana es Granada antes y ahora: la ciudad colonial, las casas con patio y las costumbres de los vecinos.",
    groups: [
      {
        title: "La ciudad de antes",
        items: [
          { es: "la calle empedrada", en: "the cobbled street" },
          { es: "el coche de caballos", en: "the horse-drawn carriage" },
          { es: "la plaza mayor / el parque central", en: "the main square" },
          { es: "la torre de la iglesia", en: "the church tower" },
          { es: "el muelle", en: "the pier" },
          { es: "la lancha", en: "the motorboat" },
        ],
      },
      {
        title: "La casa con patio",
        items: [
          { es: "el patio interior", en: "the inner courtyard" },
          { es: "la mecedora", en: "the rocking chair" },
          { es: "la acera", en: "the pavement" },
          { es: "el techo de tejas", en: "the tiled roof" },
          { es: "el árbol de mango", en: "the mango tree" },
        ],
      },
      {
        title: "Para contar una anécdota",
        items: [
          { es: "de repente", en: "suddenly" },
          { es: "en ese momento", en: "at that moment" },
          { es: "entonces", en: "then" },
          { es: "mientras", en: "while" },
          { es: "¡Qué susto!", en: "What a fright!" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "Antes y ahora",
        prompt: "Une cada costumbre de antes con lo que pasa ahora.",
        pairs: [
          { left: "Antes la gente iba en coche de caballos.", right: "Ahora los usan sobre todo los turistas." },
          { left: "Antes los vecinos se sentaban en la acera.", right: "Ahora muchos miran el móvil dentro de casa." },
          { left: "Antes casi todas las casas tenían techo de tejas.", right: "Ahora hay también techos de metal." },
          { left: "Antes se iba a las isletas en lancha de remos.", right: "Ahora las lanchas llevan motor." },
        ],
        why: "Las costumbres de antes van en imperfecto; lo de hoy, en presente.",
      },
      {
        id: "v2",
        type: "context",
        title: "¿Qué palabra encaja?",
        prompt: "Lee la situación y elige la frase natural.",
        items: [
          { context: "Describes el espacio abierto que había en el centro de la casa de tu abuela.", q: "Dices:", options: ["Tenía un patio interior lleno de plantas.", "Tenía un muelle lleno de plantas.", "Tenía una lancha llena de plantas."], answer: 0 },
          { context: "Cuentas que estabas tranquilo y algo pasó sin aviso.", q: "Dices:", options: ["Mientras se cayó el vaso.", "Entonces se caía el vaso.", "De repente se cayó el vaso."], answer: 2, why: "**De repente** + indefinido: un hecho inesperado." },
          { context: "Tu abuelo descansaba siempre después de comer en una silla que se mueve.", q: "Dices:", options: ["Dormía en la acera.", "Dormía la siesta en su mecedora.", "Dormía en el techo de tejas."], answer: 1 },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La í fuerte de había, tenía, vivía",
    explanation: [
      "En las formas en **-ía**, la **i** lleva la fuerza y se separa de la vocal siguiente: _te-NÍ-a_, _vi-VÍ-a_, _ha-BÍ-a_. Son **tres** sílabas, no dos. Si dices _te-NIA_ en dos sílabas, suena raro o no se entiende.",
      "Lo mismo pasa con _comíamos_ (co-MÍ-a-mos) y _veían_ (ve-Í-an). La tilde sobre la í te recuerda que allí va la voz.",
      "Compara con palabras donde la i no es fuerte: _FE-ria_ en dos sílabas frente a _te-NÍ-a_ en tres, o _jun-TA-ba_, donde la fuerza va en la a. En el imperfecto en -aba la fuerza nunca va al final: _ju-GA-ba_, _ju-GÁ-ba-mos_.",
    ],
    support: [
      "In _-ía_ endings, the í is stressed and forms its own syllable: _te-NÍ-a_ (3 syllables).",
    ],
    table: {
      caption: "Dónde va la fuerza",
      head: ["Palabra", "Sílabas"],
      rows: [
        ["había", "ha-BÍ-a"],
        ["vivíamos", "vi-VÍ-a-mos"],
        ["jugábamos", "ju-GÁ-ba-mos"],
        ["feria", "FE-ria"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Cuántas sílabas?",
      prompt: "Escucha la palabra y elige cómo se divide.",
      items: [
        { q: "¿Cómo suena?", audio: "tenía", options: ["te-nia", "te-ní-a", "ten-ia"], answer: 1 },
        { q: "¿Cómo suena?", audio: "historia", options: ["his-to-ria", "his-to-rí-a", "his-tor-ia"], answer: 0, why: "Aquí la i no es fuerte: tres sílabas, y la última es _ria_." },
        { q: "¿Cómo suena?", audio: "comíamos", options: ["co-mia-mos", "com-ia-mos", "co-mí-a-mos"], answer: 2 },
        { q: "¿Cómo suena?", audio: "veían", options: ["ve-í-an", "vei-an", "ve-ian"], answer: 0 },
        { q: "¿Cómo suena?", audio: "había", options: ["ha-bia", "ha-bí-a", "hab-ia"], answer: 1 },
      ],
    },
    produce: [
      { text: "Había una casa que tenía un patio.", tip: "_ha-BÍ-a_, _te-NÍ-a_: tres sílabas cada una." },
      { text: "Vivíamos cerca y veníamos a pie.", tip: "_vi-VÍ-a-mos_, _ve-NÍ-a-mos_." },
      { text: "Mi abuela decía que la ciudad era tranquila.", tip: "_de-CÍ-a_ con la í clara; _E-ra_ con fuerza al principio." },
      { text: "Jugábamos en la calle hasta las ocho.", tip: "En -ábamos la fuerza va en la **á**: _ju-GÁ-ba-mos_." },
      { text: "Mientras llovía, leíamos en la mecedora.", tip: "Grábate: _llo-VÍ-a_, _le-Í-a-mos_." },
    ],
    spelling: "Las formas en -ía llevan siempre tilde (_tenía_, _vivían_) porque la í se separa de la a. Las formas en -aba solo la llevan con nosotros: _jugábamos_.",
  },
  listening: {
    title: "La abuela Rosa recuerda",
    context: "Camila vive en Miami y llama por videollamada a su abuela Rosa, que vive en Granada, Nicaragua. Camila está mirando fotos antiguas de la familia.",
    speakers: [
      { id: "camila", name: "Camila", voice: "es-US-f", role: "nieta" },
      { id: "rosa", name: "Rosa", voice: "es-MX-f", role: "abuela" },
    ],
    script: [
      { speaker: "camila", text: "Abuela, estoy mirando fotos viejas de Granada. ¿Cómo era la ciudad cuando eras niña?" },
      { speaker: "rosa", text: "Ay, mi amor, era muy tranquila. Había pocos coches y la gente iba en coche de caballos o a pie. Las casas tenían patios grandes con árboles de mango." },
      { speaker: "camila", text: "¿Y qué hacías en un día normal?" },
      { speaker: "rosa", text: "Por la mañana iba a la escuela, cerca de la catedral. Por la tarde jugaba en el parque con mis primos, y mi madre vendía rosquillas en la puerta de casa." },
      { speaker: "camila", text: "¿Y el lago? ¿Iban mucho?" },
      { speaker: "rosa", text: "Todos los domingos. Mi padre tenía una lancha pequeña y nos llevaba a las isletas. Pero un domingo pasó algo que nunca olvido." },
      { speaker: "camila", text: "¿Qué pasó?" },
      { speaker: "rosa", text: "Era una tarde de mayo, hacía mucho calor y el lago estaba muy tranquilo. Mi hermano pescaba y yo comía un mango. De repente, el cielo se puso negro y empezó una tormenta enorme." },
      { speaker: "camila", text: "¡Qué miedo!" },
      { speaker: "rosa", text: "Sí. Además, el motor de la lancha se paró. Mi padre remó una hora hasta una isleta y allí un pescador nos dio café y nos prestó una manta. Volvimos a casa a las diez de la noche." },
      { speaker: "camila", text: "¿Y tu madre?" },
      { speaker: "rosa", text: "Nos esperaba en la puerta, llorando. Esa noche no hubo rosquillas. ¡Hubo un abrazo enorme!" },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo y busca la idea general.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿De qué habla la abuela Rosa?", options: ["de un viaje reciente a Miami", "de su infancia en Granada y de un día especial", "de cómo se hacen las rosquillas"], answer: 1 },
            { q: "¿Cómo terminó la historia del lago?", options: ["Bien: todos volvieron a casa.", "Mal: perdieron la lancha para siempre.", "No sabemos cómo terminó."], answer: 0 },
            { q: "¿Cómo era Granada según la abuela?", options: ["ruidosa y moderna", "grande y peligrosa", "tranquila, con pocos coches"], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a las costumbres y a los hechos de aquel domingo.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Qué hacía la madre de Rosa por las tardes?", options: ["Trabajaba en la escuela.", "Vendía rosquillas en la puerta.", "Pescaba en el lago."], answer: 1 },
            { q: "¿Qué hacía Rosa cuando empezó la tormenta?", options: ["Comía un mango.", "Pescaba con su hermano.", "Dormía en la lancha."], answer: 0 },
            { q: "¿Qué problema tuvieron además de la tormenta?", options: ["Perdieron los remos.", "Se rompió una ventana.", "Se paró el motor."], answer: 2 },
            { q: "¿Quién los ayudó en la isleta?", options: ["un policía", "su tío", "un pescador"], answer: 2 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en cómo cuenta la abuela la historia del lago.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Es parte de la escena o es un hecho?",
          categories: ["escena (imperfecto)", "hecho (indefinido)"],
          items: [
            { text: "hacía mucho calor", cat: 0 },
            { text: "el lago estaba muy tranquilo", cat: 0 },
            { text: "el cielo se puso negro", cat: 1, why: "Cambia la situación: hecho." },
            { text: "mi hermano pescaba", cat: 0, why: "Acción en curso cuando llegó la tormenta." },
            { text: "empezó una tormenta enorme", cat: 1 },
            { text: "mi padre remó una hora", cat: 1, why: "Hecho completo, aunque dura una hora: indefinido." },
          ],
        },
      },
    ],
  },
  reading: {
    title: "La noche del murciélago",
    genre: "Crónica de una revista local",
    frame: "Sección «Recuerdos de Granada» de una revista cultural. Esta semana escribe Ernesto Vílchez, profesor jubilado.",
    text: [
      "Cuando yo era niño, pasaba todas las vacaciones en casa de mi tía Mercedes, en la calle Atravesada. Era una casa colonial con paredes amarillas, techo de tejas y un patio interior enorme. En el centro había un árbol de mango y alrededor, cuatro mecedoras de madera.",
      "Mi tía era una mujer bajita y muy seria, pero cocinaba como nadie. Cada tarde, a las cinco, los vecinos sacaban sus sillas a la acera y hablaban hasta la noche. Mi tía nunca salía: decía que la acera era para los chismosos. Nosotros, los sobrinos, jugábamos en el patio mientras ella preparaba la cena.",
      "Una noche de julio, toda la familia cenaba en el comedor. Hacía calor y las ventanas estaban abiertas. De repente, un murciélago entró volando y empezó a dar vueltas sobre la mesa. Mi prima gritó, mi tío se escondió debajo de la mesa y yo tiré mi plato de sopa al suelo. Entonces mi tía, muy tranquila, se levantó, abrió la puerta del patio y apagó la luz. El murciélago salió en dos segundos.",
      "Nadie dijo nada. Después, mi tía encendió la luz y sirvió el postre. Fue la cena más rara de mi vida.",
    ],
    glossary: [
      { es: "el murciélago", en: "the bat" },
      { es: "bajita", en: "short (affectionate)" },
      { es: "los chismosos", en: "gossips" },
      { es: "dar vueltas", en: "to fly / go round in circles" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee la crónica y responde.",
        items: [
          { q: "¿Cómo era la casa de la tía Mercedes?", options: ["moderna y pequeña", "colonial, con un patio grande", "una casa de campo sin patio"], answer: 1 },
          { q: "¿Qué hacían los vecinos cada tarde?", options: ["Se sentaban en la acera a hablar.", "Jugaban en el patio de la tía.", "Cenaban en el comedor."], answer: 0 },
          { q: "¿Cómo resolvió la tía el problema?", options: ["Gritó muy fuerte.", "Llamó a un vecino.", "Abrió la puerta y apagó la luz."], answer: 2 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Qué era una costumbre y qué pasó solo aquella noche?",
        categories: ["costumbre (pasaba muchas veces)", "solo aquella noche"],
        items: [
          { text: "Ernesto pasaba las vacaciones en casa de su tía.", cat: 0 },
          { text: "Un murciélago entró en el comedor.", cat: 1 },
          { text: "La tía no salía a la acera.", cat: 0 },
          { text: "El tío se escondió debajo de la mesa.", cat: 1 },
          { text: "Los sobrinos jugaban en el patio.", cat: 0 },
          { text: "Ernesto tiró su plato de sopa.", cat: 1 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase de la crónica para ver qué gramática hay dentro.",
      items: [
        { quote: "Era una casa colonial con paredes amarillas", note: "Descripción de un lugar: **era**, imperfecto de _ser_." },
        { quote: "Cada tarde, a las cinco, los vecinos sacaban sus sillas", note: "**Cada tarde** marca una costumbre: imperfecto." },
        { quote: "toda la familia cenaba en el comedor", note: "La escena: una acción en curso cuando pasó algo." },
        { quote: "De repente, un murciélago entró volando", note: "**De repente** cambia al indefinido: empieza la acción de la historia." },
        { quote: "Fue la cena más rara de mi vida", note: "Valoración de una noche terminada: **fue**, no _era_." },
      ],
    },
  },
  practice: {
    intro: "Ahora mezclas las dos clases: formas del imperfecto, sus usos y su combinación con el indefinido.",
    exercises: [
      {
        id: "x1",
        type: "order",
        title: "Frases de recuerdo",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["De", "pequeña", "siempre", "pasaba", "los", "veranos", "en", "el", "campo."], en: "As a little girl I always spent the summers in the countryside." },
          { words: ["Hacía", "frío", "y", "de", "repente", "empezó", "a", "nevar."], en: "It was cold and suddenly it started to snow." },
          { words: ["Mientras", "mi", "padre", "conducía,", "nosotros", "cantábamos."], en: "While my father was driving, we were singing." },
        ],
      },
      {
        id: "x2",
        type: "error",
        title: "Corrige la anécdota",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Un día de lluvia mi padre llegaba a casa con un perro.", answers: ["Un día de lluvia mi padre llegó a casa con un perro."], why: "**Un día** presenta un hecho concreto: **llegó**." },
          { sentence: "Antes mis padres trabajaron en una fábrica todos los días.", answers: ["Antes mis padres trabajaban en una fábrica todos los días."], why: "Costumbre con **todos los días**: **trabajaban**." },
          { sentence: "Estaba en la ducha cuando alguien llamaba a la puerta.", answers: ["Estaba en la ducha cuando alguien llamó a la puerta."], why: "La llamada interrumpe la escena: hecho, **llamó**." },
          { sentence: "En el concierto habían más de mil personas.", answers: ["En el concierto había más de mil personas."], why: "_Haber_ en este uso no tiene plural: **había**." },
        ],
      },
      {
        id: "x3",
        type: "gap",
        title: "Una anécdota completa",
        prompt: "Completa con imperfecto o indefinido.",
        items: [
          { q: "___ (ser) las siete de la mañana y ___ (llover) mucho.", answers: [["Eran", "eran"], ["llovía"]], why: "Hora y tiempo: escena." },
          { q: "Yo ___ (esperar) el taxi en la esquina cuando ___ (ver) un perro perdido.", answers: [["esperaba"], ["vi"]], why: "Acción en curso + hecho que la interrumpe." },
          { q: "El perro ___ (estar) mojado y ___ (tener) un collar rojo.", answers: [["estaba"], ["tenía"]], why: "Descripción: imperfecto." },
          { q: "Entonces ___ (llamar) al número del collar y la dueña ___ (llegar) en diez minutos.", answers: [["llamé"], ["llegó"]], why: "**Entonces**: hechos que avanzan." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases sobre tu pasado y compáralas con el modelo.",
        items: [
          {
            prompt: "Describe en dos frases la casa o el barrio donde vivías de niño.",
            model: "Vivía en un piso pequeño en el centro. Había una panadería abajo y siempre olía a pan.",
            checklist: ["Usas **era**, **había** o **tenía**", "Las formas en -ía llevan tilde", "Todo es descripción, sin hechos"],
          },
          {
            prompt: "Cuenta dos costumbres que tenías los fines de semana cuando eras adolescente.",
            model: "Los sábados dormía hasta mediodía. Los domingos iba al cine con mis amigos y después comíamos pizza.",
            checklist: ["Usas un marcador de costumbre", "Los verbos están en imperfecto", "Usas **iba**, no _iva_"],
          },
          {
            prompt: "Escribe una escena y un hecho inesperado: «Estaba… cuando…».",
            model: "Estaba en una reunión importante cuando mi teléfono empezó a sonar con una canción de reguetón.",
            checklist: ["La escena va en imperfecto", "El hecho va en indefinido", "Usas **cuando** o **de repente**"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un recuerdo de un lugar de tu infancia con una anécdota.",
    context: "La revista «Recuerdos de Granada» abre una sección para lectores de otros países: «Un lugar de mi infancia». Quieren textos cortos con una descripción y una historia.",
    steps: [
      "Presenta el lugar: dónde estaba, cómo era, qué había.",
      "Cuenta qué hacías allí normalmente y con quién.",
      "Pinta la escena de un día especial: la hora, el tiempo, qué estaba pasando.",
      "Cuenta los hechos con _de repente_ o _entonces_ y valora el día al final con _fue_.",
      "Revisa: ¿la descripción y las costumbres van en imperfecto y los hechos en indefinido? Corrige las tildes de las formas en -ía.",
    ],
    useLanguage: ["Cuando era niño/niña…", "Había… / Tenía…", "Todos los veranos…", "Una tarde…, mientras…", "De repente… / Entonces…", "Fue…"],
    model: [
      "Cuando era niña, pasaba los domingos en la finca de mis abuelos. Había gallinas, un río pequeño y un columpio viejo. Normalmente mis primos y yo nadábamos en el río toda la tarde. Un domingo de abril hacía mucho sol y todos dormían la siesta. De repente, una vaca entró en la cocina y se comió el pastel de cumpleaños de mi abuela. Fue el cumpleaños más divertido de mi infancia.",
    ],
    checklist: [
      "La descripción del lugar está en imperfecto.",
      "Las costumbres usan marcadores como siempre o todos los domingos.",
      "Los hechos de la anécdota están en indefinido.",
      "Usas había para describir y hubo o fue para hechos y valoraciones.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Cuenta como si hablaras con un amigo, sin leer.",
    tasks: [
      {
        title: "Mi barrio de antes",
        prompt: "Describe el barrio o el pueblo donde vivías de niño: cómo era, qué había, qué hacía la gente y qué hacías tú.",
        prep: ["Mi barrio era…", "Había… / No había…", "La gente siempre…", "Yo normalmente…"],
        seconds: 70,
        model: "Mi barrio era muy tranquilo y estaba lejos del centro. Había un parque, una escuela y una tienda pequeña. La gente se conocía y siempre se saludaba en la calle. Yo normalmente jugaba al fútbol con mis vecinos y por la noche veía la tele con mi abuelo.",
        selfCheck: ["Uso el imperfecto para todo.", "Pronuncio _ha-BÍ-a_ y _ve-Í-a_ en tres sílabas."],
      },
      {
        title: "La anécdota",
        prompt: "Cuenta una anécdota de tu infancia: primero la escena (cuándo, dónde, qué pasaba) y después qué pasó y cómo terminó.",
        prep: ["Era… / Hacía…", "Yo estaba… y mis padres…", "De repente…", "Al final…, fue…"],
        seconds: 80,
        model: "Era un sábado de invierno y hacía mucho frío. Yo tenía ocho años y estaba en el salón con mi hermano. Mis padres veían una película. De repente, oímos un ruido enorme en el jardín: se cayó un árbol encima del coche. Por suerte, nadie se hizo daño. Fue el día más emocionante del año.",
        selfCheck: ["Cambio del imperfecto al indefinido con **de repente**.", "Termino con una valoración con **fue**."],
      },
      {
        title: "Antes y ahora",
        prompt: "Compara tres cosas de tu vida antes y ahora: dónde vivías, qué hacías los fines de semana y qué comías.",
        prep: ["Antes vivía… ahora vivo…", "Antes los fines de semana… ahora…"],
        seconds: 40,
        selfCheck: ["Uso imperfecto para antes y presente para ahora."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Describe", task: "Trae una foto antigua (tuya o de tu familia) y describe cómo era todo en ese momento.", phrases: ["En esta foto yo tenía…", "Había…", "Mi madre llevaba…"] },
      { move: "Pregúntale", task: "Pregunta a tu profesor cómo era su ciudad cuando era niño y qué hacía los domingos.", phrases: ["¿Cómo era tu ciudad?", "¿Qué hacías los domingos?"] },
      { move: "Cuéntale", task: "Cuenta una anécdota corta: escena primero, hecho después.", phrases: ["Era… y yo estaba…", "De repente…"] },
      { move: "Comprueba", task: "Pide a tu profesor que te diga cinco verbos y dilos en imperfecto e indefinido con yo.", phrases: ["tenía / tuve", "iba / fui"] },
    ],
    bring: "Trae una foto antigua de un lugar importante para ti y tres frases para describirla.",
  },
  quiz: {
    items: [
      { type: "choice", q: "Cuando mis abuelos eran jóvenes, ___ a bailar todos los sábados.", options: ["iban", "fueron", "han ido"], answer: 0, why: "Costumbre: **iban**." },
      { type: "listen", q: "¿Cuántas sílabas tiene la palabra?", audio: "vivía", options: ["dos", "tres", "cuatro"], answer: 1, why: "_vi-VÍ-a_: la í forma su propia sílaba." },
      { type: "gap", q: "Nosotros ___ (ver) dibujos animados mientras mamá ___ (cocinar).", answers: [["veíamos"], ["cocinaba"]], why: "Dos acciones en curso a la vez: imperfecto." },
      { type: "gap", q: "Anoche ___ (haber) una pelea en el bar y ___ (venir) la policía.", answers: [["hubo"], ["vino"]], why: "Dos hechos concretos: **hubo** y **vino**." },
      { type: "transform", source: "Yo leía en el sofá. Se cayó un cuadro de la pared.", instruction: "Une las dos frases con «cuando».", answers: ["Yo leía en el sofá cuando se cayó un cuadro de la pared.", "Leía en el sofá cuando se cayó un cuadro de la pared."], why: "Escena + hecho." },
      { type: "order", words: ["Antes", "en", "mi", "pueblo", "no", "había", "ningún", "semáforo."] },
      { type: "error", sentence: "Cuando entré en la clase, los estudiantes hablaron en voz baja.", answers: ["Cuando entré en la clase, los estudiantes hablaban en voz baja."], why: "La acción ya estaba en curso cuando entré: **hablaban**." },
      { type: "error", sentence: "Mi hermana mayor iva a la universidad en bicicleta.", answers: ["Mi hermana mayor iba a la universidad en bicicleta."], why: "_Ir_ en imperfecto: **iba**, con b." },
      { type: "choice", q: "¿Qué frase valora un día terminado?", options: ["Era un día nublado.", "Había mucha gente.", "Fue un día perfecto."], answer: 2, why: "Valoración global: **fue**." },
      { type: "open", prompt: "Escribe una pequeña anécdota en tres frases: una escena, un hecho inesperado y una valoración.", model: "Era tarde y yo caminaba sola por la playa. De repente, vi una tortuga enorme que salía del mar. Fue un momento mágico.", checklist: ["Escena en imperfecto", "Hecho en indefinido con de repente o entonces", "Valoración con fue"] },
    ],
  },
  complete: {
    canNow: [
      "Conjugar el imperfecto regular y los irregulares era, iba y veía.",
      "Describir personas, lugares, la hora y el tiempo en el pasado.",
      "Contar costumbres con antes, de niño, siempre o todos los domingos.",
      "Presentar una acción en curso con mientras o cuando.",
      "Contar una anécdota: escena en imperfecto y hechos en indefinido.",
      "Elegir entre había, hubo, era y fue.",
    ],
    review: ["-aba, -ábamos · -ía, -íamos · era, iba, veía", "escena → imperfecto · hechos → indefinido", "había (descripción) · hubo (suceso) · fue (valoración)"],
  },
  related: [
    { path: "/sistema-verbal/preterito-imperfecto-indicativo", label: "Clase: Imperfecto: hábitos y descripciones del pasado" },
    { path: "/gramatica/indefinido-e-imperfecto", label: "Clase: Indefinido e imperfecto: evento y contexto" },
  ],
};
