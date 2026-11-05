import type { Module } from "../../types";

export const a1w19: Module = {
  id: "a1-19",
  level: "a1",
  week: 19,
  kind: "core",
  title: "Preparando la fiesta en Portobelo",
  subtitle: "Repaso de estar + gerundio para decir qué está pasando ahora y de lo, la, los, las para no repetir las cosas y las personas.",
  stop: { place: "Portobelo", country: "Panamá" },
  minutes: 60,
  newObjectives: [
    "a1.gram.g041",
    "a1.gram.g042",
    "a1.voc.w19-fiesta-preparativos",
    "a1.pron.w19-pronombres-sin-fuerza",
    "a1.lis.w19-videollamada-fiesta",
    "a1.read.w19-directo-festival",
    "a1.wri.w19-mensaje-en-directo",
    "a1.spk.w19-que-estas-haciendo",
    "a1.fun.w19-contar-ahora",
  ],
  reviewObjectives: ["a1.gram.g038","a1.gram.g039","a1.gram.g040","a1.voc.w18-tiempo-planes","a1.pron.w18-fuerza-dias-meses","a1.lis.w18-reserva-tour-cafe","a1.read.w18-programa-fin-de-semana","a1.wri.w18-plan-visita","a1.spk.w18-horario-planes","a1.fun.w18-organizar-planes"],
  prerequisites: ["a1-18"],
  goal: {
    canDo: "Al final de esta semana puedes contar qué están haciendo tú y otras personas en este momento y hablar de cosas y personas sin repetir su nombre con lo, la, los, las.",
    canDoEn: "By the end of this week, you can say what you and other people are doing right now and talk about things and people without repeating their names, using lo, la, los, las.",
    steps: [
      "Forma el gerundio: `-ando` para -ar, `-iendo` para -er e -ir, y `leyendo`, `durmiendo`.",
      "Usa `estoy`, `estás`, `está`… + gerundio para lo que pasa ahora.",
      "Distingue `ahora estoy cocinando` y `todos los días cocino`.",
      "Cambia el nombre por `lo`, `la`, `los`, `las` y ponlo delante del verbo.",
      "Escucha una videollamada desde Portobelo el día antes de la fiesta.",
      "Escribe un mensaje en directo desde una fiesta y cuenta en voz alta qué está pasando a tu alrededor.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases: **estar + gerundio**, para una acción que está pasando ahora, y los pronombres **lo, la, los, las**, para no repetir una cosa o una persona. Los ves en Portobelo, un pueblo del Caribe de Panamá, mientras todos preparan la fiesta de los Congos.",
    parts: [
      {
        heading: "Estoy pintando: la forma",
        body: [
          "Para una acción **en desarrollo**, en este momento, usas **estar** conjugado + **gerundio**. Estar cambia con la persona; el gerundio no cambia nunca: _estoy bailando_, _estamos bailando_.",
          "El gerundio se forma así: los verbos en **-ar** cambian a **-ando** (_pintar → pintando_) y los verbos en **-er** e **-ir** cambian a **-iendo** (_coser → cosiendo_, _escribir → escribiendo_).",
          "Dos formas especiales: **leer → leyendo** (la i entre vocales se escribe y) y **dormir → durmiendo** (la o cambia a u).",
        ],
        support: [
          "_Estar_ + gerund = to be doing something right now. Gerund: _-ar → -ando_, _-er / -ir → -iendo_. Special: _leyendo_, _durmiendo_.",
        ],
        table: {
          caption: "Estar + gerundio",
          head: ["Persona", "estar", "+ gerundio"],
          rows: [
            ["yo", "estoy", "pintando"],
            ["tú", "estás", "cosiendo"],
            ["él, ella, usted", "está", "escribiendo"],
            ["nosotros, nosotras", "estamos", "bailando"],
            ["vosotros, vosotras", "estáis", "leyendo"],
            ["ellos, ellas, ustedes", "están", "durmiendo"],
          ],
        },
        examples: [
          { es: "Mi tía está cosiendo los vestidos de la fiesta.", en: "My aunt is sewing the dresses for the party." },
          { es: "¿Qué estás comiendo? Huele muy bien.", en: "What are you eating? It smells really good." },
          { es: "Los niños están durmiendo en la hamaca.", en: "The children are sleeping in the hammock." },
        ],
        mistakes: [
          { wrong: "Estoy pintar una máscara.", right: "Estoy pintando una máscara.", why: "Después de **estar**, el **gerundio** (-ando), no el infinitivo." },
          { wrong: "Mi abuelo está leiendo el periódico.", right: "Mi abuelo está leyendo el periódico.", why: "Leer → **leyendo**, con y." },
          { wrong: "Soy esperando el autobús.", right: "Estoy esperando el autobús.", why: "Acción en desarrollo: siempre **estar**." },
        ],
      },
      {
        heading: "¿Ahora o normalmente?",
        body: [
          "El **presente** cuenta lo normal, la rutina: _Mi abuela cocina todos los domingos_. **Estar + gerundio** cuenta lo que está pasando **en este momento**: _Ahora mi abuela está cocinando un sancocho_.",
          "Las palabras de tiempo ayudan. Con el presente: _siempre, normalmente, todos los días, los sábados_. Con estar + gerundio: _ahora, ahora mismo, en este momento_.",
          "La pregunta típica en una llamada es **¿Qué estás haciendo?** La negación va delante de estar: _No estoy trabajando, estoy descansando_.",
        ],
        support: [
          "Present = habits (_cocina todos los domingos_). _Estar_ + gerund = right now (_está cocinando ahora_). _¿Qué estás haciendo?_ = What are you doing?",
        ],
        table: {
          caption: "Lo normal y lo de ahora",
          head: ["Normalmente (presente)", "Ahora (estar + gerundio)"],
          rows: [
            ["Los pescadores salen al mar de noche.", "Ahora están limpiando las redes."],
            ["Lucas trabaja en un hotel.", "Hoy no está trabajando: está bailando."],
            ["Siempre escucho salsa.", "En este momento estoy escuchando tambores."],
          ],
        },
        examples: [
          { es: "—¿Qué estás haciendo? —Estoy esperando a mis primos en el muelle.", en: "What are you doing? I'm waiting for my cousins at the dock." },
          { es: "Normalmente nado por la mañana, pero ahora está lloviendo.", en: "I normally swim in the morning, but it's raining now." },
        ],
        mistakes: [
          { wrong: "Todos los días estoy desayunando a las siete.", right: "Todos los días desayuno a las siete.", why: "Una rutina va en **presente**." },
        ],
        tip: "Antes de hablar, pregúntate: ¿es mi rutina o está pasando mientras hablo?",
      },
      {
        heading: "Lo, la, los, las: no repetir",
        body: [
          "Cuando el nombre de una cosa o de una persona ya está en la conversación, no lo repites: lo cambias por **lo, la, los, las**. La forma es como el artículo: _el tambor → **lo**_, _la máscara → **la**_, _los vestidos → **los**_, _las flores → **las**_.",
          "También sirven para personas: _Veo a Lucas: **lo** veo_. _Llamo a mi madre: **la** llamo_.",
          "El pronombre va **delante del verbo conjugado**: _**La** tengo_, _No **los** encuentro_. Con estar + gerundio, también delante de estar: _¿El tambor? **Lo** está tocando mi tío_.",
        ],
        support: [
          "_Lo, la, los, las_ replace a thing or a person (it, him, her, them). Choose like the article: _el → lo_, _la → la_, _los → los_, _las → las_.",
          "The pronoun goes before the conjugated verb: _la tengo_, _no lo encuentro_, _lo está tocando_.",
        ],
        table: {
          caption: "Mira el artículo",
          head: ["Con el nombre", "Sin repetir"],
          rows: [
            ["Compro el pan.", "Lo compro."],
            ["Pinto la máscara.", "La pinto."],
            ["Llevo los tambores.", "Los llevo."],
            ["Busco a mis hermanas.", "Las busco."],
          ],
        },
        examples: [
          { es: "—¿Tienes las cintas rojas? —Sí, las tengo aquí.", en: "Have you got the red ribbons? Yes, I've got them here." },
          { es: "Este sombrero es de mi abuelo. Lo usa en todas las fiestas.", en: "This hat is my grandfather's. He wears it at every party." },
          { es: "¿Y Marta? No la veo.", en: "And Marta? I can't see her." },
        ],
        mistakes: [
          { wrong: "Tengo la máscara. Tengo la.", right: "Tengo la máscara. La tengo.", why: "El pronombre va **delante** del verbo." },
          { wrong: "¿Las flores? Los compro mañana.", right: "¿Las flores? Las compro mañana.", why: "_Las flores_ es femenino plural: **las**." },
        ],
      },
      {
        heading: "Las dos clases juntas",
        body: [
          "En una conversación real, estar + gerundio y lo, la, los, las van juntos muchas veces. Alguien pregunta por una cosa y respondes quién la está usando ahora: —¿Dónde está la falda? —**La** está planchando mi hermana.",
          "Fíjate en el orden: **pronombre + estar + gerundio**. En la negación, **no** va primero: _No **lo** estoy usando_.",
          "Antes de elegir el pronombre, busca el nombre que cambias: ¿es masculino o femenino? ¿Singular o plural?",
        ],
        support: [
          "Order: pronoun + _estar_ + gerund: _la está planchando_ (she's ironing it). Negative: _no lo estoy usando_.",
        ],
        examples: [
          { es: "—¿Y los tambores? —Los están afinando en la plaza.", en: "And the drums? They're tuning them in the square." },
          { es: "—¿Tienes el teléfono? —No, lo está cargando Lucas.", en: "Have you got the phone? No, Lucas is charging it." },
        ],
        mistakes: [
          { wrong: "¿La comida? Está la preparando mi madre.", right: "¿La comida? La está preparando mi madre.", why: "El pronombre va **antes** de estar." },
        ],
        tip: "Para practicar, mira a tu alrededor: elige una cosa y di quién la está usando ahora.",
      },
    ],
  },
  grammar: {
    intro: "Primero estar + gerundio; después, lo, la, los, las.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "El gerundio",
        prompt: "Completa con estar + gerundio del verbo entre paréntesis.",
        items: [
          { q: "Ahora mismo mi primo ___ ___ la bandera. (pintar)", answers: [["está"], ["pintando"]], why: "Él: **está pintando** (-ar → -ando)." },
          { q: "Nosotros ___ ___ arroz con coco para todos. (hacer)", answers: [["estamos"], ["haciendo"]], why: "Nosotros: **estamos haciendo** (-er → -iendo)." },
          { q: "¿Tú ___ ___ la invitación? (escribir)", answers: [["estás"], ["escribiendo"]], why: "Tú: **estás escribiendo** (-ir → -iendo)." },
          { q: "Mis abuelos ___ ___ la siesta. (dormir)", answers: [["están"], ["durmiendo"]], why: "Dormir → **durmiendo** (o → u)." },
          { q: "Yo ___ ___ el programa de la fiesta. (leer)", answers: [["estoy"], ["leyendo"]], why: "Leer → **leyendo**." },
        ],
      },
      {
        id: "g2",
        type: "choice",
        title: "¿Rutina o ahora?",
        prompt: "Elige la forma que corresponde al tiempo de la frase.",
        items: [
          { q: "Los domingos mi familia ___ en la playa.", options: ["está comiendo", "come", "comiendo"], answer: 1, why: "Rutina: **presente**." },
          { q: "Shh, no hagas ruido: el bebé ___.", options: ["duerme todos los días", "dormiendo", "está durmiendo"], answer: 2, why: "Está pasando ahora: **está durmiendo**." },
          { q: "—¿Qué estás haciendo? —___ las sillas en la plaza.", options: ["Estoy poniendo", "Pongo siempre", "Soy poniendo"], answer: 0, why: "Respuesta para ahora: **estoy poniendo**." },
        ],
      },
      {
        id: "g3",
        type: "choice",
        title: "¿Lo, la, los o las?",
        prompt: "Elige el pronombre que cambia por el nombre.",
        items: [
          { q: "—¿Dónde está el sombrero? —No ___ encuentro.", options: ["la", "lo", "los"], answer: 1, why: "_El sombrero_: **lo**." },
          { q: "—¿Compras tú las velas? —Sí, ___ compro yo.", options: ["las", "los", "la"], answer: 0, why: "_Las velas_: **las**." },
          { q: "Llamo a mis tíos y ___ invito a la fiesta.", options: ["las", "lo", "los"], answer: 2, why: "_Mis tíos_: masculino plural, **los**." },
          { q: "—¿Ves a Rosa? —Sí, ___ veo: está en el muelle.", options: ["lo", "la", "le"], answer: 1, why: "_Rosa_: **la** veo." },
        ],
      },
      {
        id: "g4",
        type: "transform",
        title: "Sin repetir",
        prompt: "Escribe la respuesta con lo, la, los o las. No repitas el nombre.",
        items: [
          { source: "—¿Tienes la llave del salón? —Sí, tengo la llave del salón.", answers: ["Sí, la tengo."], why: "_La llave_: **la** tengo." },
          { source: "—¿Llevas los vasos? —No, no llevo los vasos.", answers: ["No, no los llevo."], why: "_Los vasos_: **no los** llevo." },
          { source: "—¿Quién está cocinando el pescado? —Mi madre está cocinando el pescado.", answers: ["Mi madre lo está cocinando.", "Lo está cocinando mi madre."], why: "_El pescado_: **lo** + está cocinando." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Lo que se prepara para una fiesta en un pueblo del Caribe, las acciones de ese día y palabras para hablar del momento.",
    groups: [
      {
        title: "La fiesta",
        items: [
          { es: "la máscara", en: "the mask" },
          { es: "el disfraz", en: "the costume" },
          { es: "el tambor", en: "the drum" },
          { es: "las cintas", en: "the ribbons" },
          { es: "la pollera", en: "the pollera (traditional Panamanian dress)" },
          { es: "el desfile", en: "the parade" },
        ],
      },
      {
        title: "Preparar",
        items: [
          { es: "pintar", en: "to paint" },
          { es: "coser", en: "to sew" },
          { es: "ensayar", en: "to rehearse" },
          { es: "decorar", en: "to decorate" },
          { es: "planchar", en: "to iron" },
          { es: "tocar el tambor", en: "to play the drum" },
        ],
      },
      {
        title: "Ahora",
        items: [
          { es: "ahora mismo", en: "right now" },
          { es: "en este momento", en: "at this moment" },
          { es: "¿Qué estás haciendo?", en: "What are you doing?" },
          { es: "¿Me ves? / ¿Me oyes?", en: "Can you see me? / Can you hear me?" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "¿Qué están haciendo?",
        prompt: "Une cada persona con lo que está haciendo.",
        pairs: [
          { left: "La costurera está", right: "cosiendo una pollera." },
          { left: "El músico está", right: "tocando el tambor." },
          { left: "Los bailarines están", right: "ensayando en la plaza." },
          { left: "El artista está", right: "pintando una máscara." },
          { left: "Las niñas están", right: "decorando el salón con cintas." },
        ],
        why: "Estar conjugado + gerundio: **está cosiendo**, **están ensayando**.",
      },
      {
        id: "v2",
        type: "context",
        title: "En la videollamada",
        prompt: "Lee la situación y elige la frase natural.",
        items: [
          { context: "Llamas a tu amiga y quieres saber qué hace en este momento.", q: "Preguntas:", options: ["¿Qué haces los sábados?", "¿Qué estás haciendo?", "¿Qué vas a hacer?"], answer: 1, why: "Para ahora: **¿Qué estás haciendo?**" },
          { context: "En la videollamada la imagen está negra y quieres saber si tu amigo te ve.", q: "Preguntas:", options: ["¿Me ves?", "¿Lo ves?", "¿Me estás viendo la cámara?"], answer: 0, why: "**¿Me ves?** = Can you see me?" },
          { context: "Tu hermano pregunta por su disfraz. Tu madre lo tiene y está trabajando en él.", q: "Respondes:", options: ["Mamá lo cose todos los años.", "Mamá está coserlo.", "Lo está cosiendo mamá."], answer: 2, why: "Ahora + sin repetir: **lo está cosiendo**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Lo, la, los, las sin fuerza: lo_tengo",
    explanation: [
      "Los pronombres **lo, la, los, las** no tienen fuerza propia: se pronuncian unidos al verbo, como una sola palabra. _La tengo_ suena **la-TEN-go**; _lo está pintando_ suena **lo-es-TÁ-pin-TAN-do**.",
      "La fuerza va en el verbo, no en el pronombre. Si dices _LA tengo_ con fuerza en _la_, suena a contraste (_la tengo yo, no tú_).",
      "En el gerundio, la fuerza está siempre en la sílaba **an** o **ien**: _pin-TAN-do, co-SIEN-do, dur-MIEN-do, le-YEN-do_.",
    ],
    support: [
      "_Lo, la, los, las_ have no stress of their own: they join the verb (_la-TEN-go_). In the gerund, stress falls on _-an-_ or _-ien-_.",
    ],
    table: {
      caption: "Grupos de palabras",
      head: ["Se escribe", "Suena como"],
      rows: [
        ["la tengo", "la-TEN-go"],
        ["no los veo", "no-los-VE-o"],
        ["lo está pintando", "lo-es-TÁ pin-TAN-do"],
        ["las estoy cosiendo", "las-es-TOY co-SIEN-do"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Qué pronombre oyes?",
      prompt: "Escucha y elige el pronombre. Está unido al verbo: escucha bien el principio.",
      items: [
        { q: "¿Qué pronombre hay delante del verbo?", audio: "Las tengo en la mochila.", options: ["la", "las", "los"], answer: 1 },
        { q: "¿Qué pronombre hay delante del verbo?", audio: "Lo está pintando mi tío.", options: ["lo", "la", "los"], answer: 0 },
        { q: "¿Qué pronombre hay delante del verbo?", audio: "No la veo.", options: ["lo", "las", "la"], answer: 2 },
        { q: "¿Qué pronombre hay delante del verbo?", audio: "Los estamos esperando.", options: ["los", "las", "lo"], answer: 0 },
        { q: "¿Dónde está la fuerza en este gerundio?", audio: "cosiendo", options: ["co", "sien", "do"], answer: 1 },
      ],
    },
    produce: [
      { text: "La tengo. Lo veo. Los llevo.", tip: "Pronombre y verbo juntos, como una sola palabra." },
      { text: "Lo está pintando mi tío.", tip: "Sin fuerza en _lo_; fuerza en _TÁ_ y en _TAN_." },
      { text: "Estamos cosiendo y bailando.", tip: "_co-SIEN-do_, _bai-LAN-do_." },
      { text: "No las estoy usando ahora.", tip: "_no-las-es-TOY_: todo seguido." },
    ],
    spelling: "Aunque suenan juntos, se escriben separados delante del verbo conjugado: **la tengo**, **lo está pintando**. Y recuerda la y de **leyendo**.",
  },
  listening: {
    title: "Una videollamada desde Portobelo",
    context: "Es la tarde antes de la fiesta de los Congos en Portobelo. Paula está en la casa de su abuela y hace una videollamada con su hermano Lucas, que vive en Ciudad de Panamá y llega mañana.",
    speakers: [
      { id: "paula", name: "Paula", voice: "es-VE-f", role: "está en Portobelo" },
      { id: "lucas", name: "Lucas", voice: "es-CU-m", role: "hermano de Paula" },
    ],
    script: [
      { speaker: "lucas", text: "¡Hola, Paula! ¿Me oyes? ¿Qué estás haciendo?" },
      { speaker: "paula", text: "¡Hola! Sí, te oigo. Estoy pintando las máscaras para mañana. Mira, aquí están." },
      { speaker: "lucas", text: "¡Qué bonitas! ¿Y la abuela? No la veo." },
      { speaker: "paula", text: "Está en la cocina. Está haciendo arroz con coco para veinte personas. Y el tío Beto está ensayando con los tambores en la plaza." },
      { speaker: "lucas", text: "¿Y mi disfraz? ¿Lo tienes tú?" },
      { speaker: "paula", text: "No, lo está cosiendo la vecina. Normalmente lo cose mamá, pero este año mamá está trabajando en el hotel." },
      { speaker: "lucas", text: "Perfecto. ¿Y las cintas rojas? Las necesito para el sombrero." },
      { speaker: "paula", text: "Las tengo aquí, en la mesa. Oye, ¿tú qué estás haciendo? Oigo mucho ruido." },
      { speaker: "lucas", text: "Estoy esperando el autobús en la terminal. Hay muchísima gente: todos están viajando a la fiesta." },
      { speaker: "paula", text: "¡Claro! Bueno, te dejo: la abuela me está llamando. ¡Hasta mañana!" },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo una vez, sin buscar detalles.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿De qué hablan Paula y Lucas?", options: ["de lo que están haciendo para la fiesta", "de un viaje al extranjero", "del trabajo de Lucas"], answer: 0 },
            { q: "¿Cuándo es la fiesta?", options: ["hoy por la noche", "la semana que viene", "mañana"], answer: 2 },
            { q: "¿Dónde está Lucas?", options: ["en la casa de la abuela", "en una terminal de autobuses", "en el hotel"], answer: 1 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a quién está haciendo qué.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Qué está haciendo Paula?", options: ["cosiendo un disfraz", "pintando máscaras", "haciendo arroz con coco"], answer: 1 },
            { q: "¿Qué está haciendo el tío Beto?", options: ["ensayando con los tambores", "esperando el autobús", "trabajando en el hotel"], answer: 0 },
            { q: "¿Quién está cosiendo el disfraz de Lucas este año?", options: ["la mamá", "la abuela", "la vecina"], answer: 2 },
            { q: "¿Para qué necesita Lucas las cintas rojas?", options: ["para el sombrero", "para la máscara", "para decorar la casa"], answer: 0 },
            { q: "¿Por qué termina la llamada Paula?", options: ["porque llega el autobús", "porque la abuela la está llamando", "porque hay mucho ruido"], answer: 1 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en estar + gerundio y en los pronombres.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué gramática hay en cada frase?",
          categories: ["estar + gerundio", "lo, la, los, las", "las dos cosas"],
          items: [
            { text: "Estoy pintando las máscaras para mañana.", cat: 0 },
            { text: "Está haciendo arroz con coco.", cat: 0 },
            { text: "¿Y la abuela? No la veo.", cat: 1 },
            { text: "Las tengo aquí, en la mesa.", cat: 1 },
            { text: "No, lo está cosiendo la vecina.", cat: 2, why: "**Lo** (el disfraz) + **está cosiendo**." },
            { text: "La abuela me está llamando.", cat: 0, why: "_Me_ es otro pronombre; la forma de la clase aquí es **está llamando**." },
          ],
        },
      },
    ],
  },
  reading: {
    title: "En directo desde Portobelo",
    genre: "Publicaciones en una red social",
    frame: "La cuenta de turismo de Portobelo publica fotos con textos cortos el día de la fiesta de los Congos.",
    text: [
      "10:00 · ¡Buenos días desde Portobelo! El pueblo ya está despierto. En la plaza, los vecinos están poniendo cintas de colores en las ventanas. ¿Las ves en la foto? Las ponen todos los años.",
      "12:30 · En esta casa azul, la señora Carmen está cosiendo la última pollera. La va a llevar su nieta en el desfile. Normalmente Carmen cose tres o cuatro polleras al año, pero este año está haciendo diez.",
      "15:00 · ¡Escuchen! Los músicos están tocando los tambores al lado del fuerte. Muchos turistas los están grabando con el teléfono. Y los niños están bailando con sus máscaras de diablo.",
      "17:45 · Está empezando a llover, pero nadie está saliendo de la plaza. El desfile empieza a las seis. ¿Nuestro fotógrafo? Lo estamos buscando: ¡seguro que está comiendo un patacón!",
    ],
    glossary: [
      { es: "despierto", en: "awake" },
      { es: "la última", en: "the last one" },
      { es: "el fuerte", en: "the fort" },
      { es: "grabar", en: "to record, to film" },
      { es: "nadie", en: "nobody" },
      { es: "el patacón", en: "fried green plantain" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee las publicaciones y responde.",
        items: [
          { q: "¿Qué están haciendo los vecinos a las diez?", options: ["bailando en la plaza", "poniendo cintas en las ventanas", "tocando los tambores"], answer: 1 },
          { q: "¿Quién va a llevar la pollera de la señora Carmen?", options: ["su nieta", "su hija", "una turista"], answer: 0 },
          { q: "¿Qué es diferente este año para Carmen?", options: ["no está cosiendo", "está cosiendo en la plaza", "está haciendo más polleras"], answer: 2 },
          { q: "¿Qué pasa a las seis menos cuarto?", options: ["termina el desfile", "empieza a llover", "llega el fotógrafo"], answer: 1 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿La frase de las publicaciones habla de una costumbre o de lo que está pasando hoy?",
        categories: ["costumbre (presente)", "ahora (estar + gerundio)"],
        items: [
          { text: "Las ponen todos los años.", cat: 0 },
          { text: "Carmen cose tres o cuatro polleras al año.", cat: 0 },
          { text: "Los músicos están tocando los tambores.", cat: 1 },
          { text: "Los niños están bailando con sus máscaras.", cat: 1 },
          { text: "Está empezando a llover.", cat: 1 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase de las publicaciones para ver qué gramática hay dentro.",
      items: [
        { quote: "los vecinos están poniendo cintas de colores", note: "**Están poniendo**: ellos + estar + gerundio de _poner_ (-er → -iendo)." },
        { quote: "¿Las ves en la foto?", note: "**Las** = las cintas. Va delante del verbo." },
        { quote: "Muchos turistas los están grabando", note: "**Los** = los músicos (personas). Pronombre + estar + gerundio." },
        { quote: "Lo estamos buscando", note: "**Lo** = nuestro fotógrafo. Va antes de _estamos_." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: lo que está pasando ahora y los pronombres para no repetir.",
    exercises: [
      {
        id: "x1",
        type: "order",
        title: "Frases de la fiesta",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["Mi", "hermano", "está", "ensayando", "el", "baile."], en: "My brother is rehearsing the dance." },
          { words: ["¿La", "máscara?", "La", "está", "pintando", "Paula."], en: "The mask? Paula is painting it." },
          { words: ["No", "los", "veo", "en", "la", "plaza."], en: "I can't see them in the square." },
        ],
      },
      {
        id: "x2",
        type: "error",
        title: "Corrige los mensajes",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Ahora los niños están dormiendo.", answers: ["Ahora los niños están durmiendo."], why: "Dormir → **durmiendo**." },
          { sentence: "¿Las cintas? Las estoy buscar.", answers: ["¿Las cintas? Las estoy buscando."], why: "Después de estar: **buscando**." },
          { sentence: "¿El tambor? La tiene mi tío.", answers: ["¿El tambor? Lo tiene mi tío."], why: "_El tambor_: **lo**." },
          { sentence: "Compro las flores y pongo las en la mesa.", answers: ["Compro las flores y las pongo en la mesa."], why: "El pronombre va **delante** del verbo: _las pongo_." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "En Portobelo",
        prompt: "Lee la situación y elige la mejor frase.",
        items: [
          { context: "Tu amigo pregunta por la cámara. Tú la tienes en la mano y estás grabando el desfile.", q: "Respondes:", options: ["La estoy usando ahora.", "La uso todos los días.", "Estoy la usando ahora."], answer: 0, why: "Pronombre + estar + gerundio: **la estoy usando**." },
          { context: "Tu madre llama. Quiere saber si los primos ya están en el pueblo. Tú los ves en el muelle.", q: "Le dices:", options: ["Sí, los esperan en el muelle.", "Sí, los veo: están bajando del barco.", "Sí, las veo: están bajando del barco."], answer: 1, why: "_Los primos_: **los** veo. Ahora: **están bajando**." },
          { context: "Una turista pregunta qué hace el señor Beto los domingos.", q: "Respondes:", options: ["Está tocando el tambor ahora mismo.", "Toca el tambor en la iglesia.", "Tocando el tambor."], answer: 1, why: "Costumbre de los domingos: **presente**." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases cortas sobre ti. Después compara con el modelo.",
        items: [
          {
            prompt: "Mira a tu alrededor y escribe qué están haciendo tres personas (o animales) en este momento.",
            model: "Mi compañera de piso está cocinando pasta. El vecino está escuchando música. Mi gato está durmiendo en el sofá.",
            checklist: ["Estar conjugado + gerundio", "Tres personas o animales distintos", "Un gerundio en -iendo"],
          },
          {
            prompt: "Escribe tres cosas que tienes en tu mesa y qué haces con ellas. Usa lo, la, los o las la segunda vez.",
            model: "Tengo un cuaderno: lo uso para mis clases. Tengo unas gafas: las necesito para leer. Tengo una taza: la lavo después.",
            checklist: ["Lo, la, los, las según el nombre", "El pronombre va delante del verbo"],
          },
          {
            prompt: "Compara tu rutina de los sábados con lo que estás haciendo hoy.",
            model: "Los sábados normalmente juego al fútbol, pero hoy estoy estudiando para un examen.",
            checklist: ["Presente para la rutina", "Estar + gerundio para hoy"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje «en directo» desde una fiesta o un lugar con mucha gente.",
    context: "Estás en una fiesta, un mercado o un partido. Tu amiga no puede estar allí y te pide un mensaje: qué está pasando, qué están haciendo las personas y dónde están algunas cosas y personas.",
    steps: [
      "Di dónde estás y qué estás haciendo tú.",
      "Cuenta qué están haciendo tres o cuatro personas o grupos.",
      "Compara una cosa de hoy con lo normal: _normalmente…, pero hoy…_",
      "Habla de dos cosas o personas sin repetir el nombre: usa lo, la, los, las.",
      "Revisa: ¿cada gerundio termina en -ando o -iendo? ¿El pronombre va delante del verbo?",
    ],
    useLanguage: ["Estoy en… Estoy…", "La gente está…", "Mi hermano está…", "Normalmente…, pero hoy…", "¿El / La…? Lo / La…"],
    model: [
      "¡Hola, Inés! Estoy en la fiesta del barrio y te estoy escribiendo desde la plaza. Los músicos están tocando cumbia y muchas parejas están bailando. Mi madre está vendiendo empanadas: las hace todos los años. Normalmente hay poca gente, pero hoy está llegando todo el barrio. ¿Y tu primo Julio? Lo veo al lado del escenario: está comiendo un helado.",
    ],
    checklist: [
      "Usas **estar + gerundio** para lo que está pasando ahora.",
      "Los gerundios están bien formados: _-ando_, _-iendo_, _leyendo_, _durmiendo_.",
      "Usas el **presente** para la costumbre.",
      "Usas **lo, la, los, las** delante del verbo para no repetir.",
    ],
    words: [40, 90],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "¿Qué estás haciendo?",
        prompt: "Imagina que un amigo te llama ahora. Dile qué estás haciendo tú y qué están haciendo las personas de tu casa o de tu calle.",
        prep: ["Ahora estoy…", "Mi… está…", "Los vecinos están…", "Y tú, ¿qué estás haciendo?"],
        seconds: 40,
        model: "¡Hola! Ahora estoy preparando la cena: estoy cortando verduras. Mi hijo está haciendo los deberes en la mesa y mi pareja está hablando por teléfono. En la calle unos niños están jugando al fútbol. Y tú, ¿qué estás haciendo?",
        selfCheck: ["Uso estar + gerundio para ahora.", "La fuerza va en _-an-_ o _-ien-_."],
      },
      {
        title: "¿Dónde está?",
        prompt: "Antes de una fiesta, tu compañero pregunta por cinco cosas (la música, los vasos, el pastel, las sillas, el regalo). Responde sin repetir el nombre: quién lo tiene o qué está haciendo alguien con él.",
        prep: ["Lo tiene…", "La está preparando…", "Los estoy lavando.", "Las está poniendo…"],
        seconds: 45,
        model: "¿La música? La está eligiendo Pedro. ¿Los vasos? Los estoy lavando yo. ¿El pastel? Lo tiene mi madre en la nevera. ¿Las sillas? Las está poniendo Ana en el jardín. ¿Y el regalo? No lo encuentro.",
        selfCheck: ["Elijo lo, la, los, las según el nombre.", "Digo el pronombre unido al verbo, sin fuerza."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Describe una foto", task: "Enseña a tu profesor una foto con muchas personas y di qué está haciendo cada una.", phrases: ["Este chico está…", "Estas mujeres están…"] },
      { move: "Adivina la acción", task: "Haz mímica de una acción. Tu profesor pregunta: ¿Estás…? Después, tu profesor hace la mímica y tú preguntas.", phrases: ["¿Estás nadando?", "No, estoy…"] },
      { move: "Responde sin repetir", task: "Tu profesor pregunta por objetos de tu casa. Responde con lo, la, los, las.", phrases: ["Sí, lo tengo.", "No, no la uso."] },
      { move: "Compara rutina y hoy", task: "Cuenta a tu profesor qué haces normalmente a esta hora y qué estás haciendo hoy.", phrases: ["Normalmente…", "Pero hoy estoy…"] },
    ],
    bring: "Trae una foto de una fiesta de tu país y prepara cinco frases: tres con estar + gerundio y dos con lo, la, los, las.",
  },
  quiz: {
    items: [
      { type: "choice", q: "¿Cuál es el gerundio de leer?", options: ["leiendo", "leyendo", "leendo"], answer: 1, why: "La i entre vocales se escribe y: **leyendo**." },
      { type: "choice", q: "—¿Dónde están las cintas para el sombrero? —___ tiene Paula.", options: ["Los", "La", "Las"], answer: 2, why: "_Las cintas_: **las**." },
      { type: "listen", q: "Escucha. ¿La frase habla de ahora o de una costumbre?", audio: "Mi abuela está haciendo arroz con coco.", options: ["de una costumbre", "de ahora"], answer: 1 },
      { type: "gap", q: "Shh, los niños ___ ___. (dormir)", answers: [["están"], ["durmiendo"]], why: "Ellos: **están durmiendo**." },
      { type: "gap", q: "—¿Ves a tu hermano? —Sí, ___ veo: ___ ___ el tambor. (tocar)", answers: [["lo"], ["está"], ["tocando"]], why: "_Tu hermano_: **lo**; ahora: **está tocando**." },
      { type: "transform", source: "Mi padre está preparando la comida.", instruction: "Escribe la frase con un pronombre en lugar de «la comida».", answers: ["Mi padre la está preparando.", "La está preparando mi padre."], why: "_La comida_: **la** + está preparando." },
      { type: "order", words: ["¿Qué", "están", "haciendo", "tus", "amigos", "ahora?"] },
      { type: "error", sentence: "Todos los lunes estoy yendo al gimnasio.", answers: ["Todos los lunes voy al gimnasio."], why: "Una rutina va en **presente**: _voy_." },
      { type: "error", sentence: "Tengo los regalos y llevo los a la fiesta.", answers: ["Tengo los regalos y los llevo a la fiesta."], why: "El pronombre va **delante** del verbo: _los llevo_." },
      { type: "open", prompt: "Escribe dos frases: qué estás haciendo ahora y dónde está una cosa tuya, sin repetir su nombre.", model: "Ahora estoy estudiando español en la cocina. ¿Mi teléfono? Lo tengo aquí, al lado del libro.", checklist: ["Estar + gerundio", "Lo, la, los o las delante del verbo"] },
    ],
  },
  complete: {
    canNow: [
      "Formar el gerundio: **-ando**, **-iendo**, **leyendo**, **durmiendo**.",
      "Decir qué está pasando ahora con **estar + gerundio**.",
      "Distinguir la rutina (presente) y lo que pasa ahora (estar + gerundio).",
      "Cambiar una cosa o una persona por **lo, la, los, las**.",
      "Poner el pronombre delante del verbo: _la tengo_, _lo está pintando_.",
      "Pronunciar el pronombre unido al verbo, sin fuerza.",
    ],
    review: ["Estoy pintando · están cosiendo · está leyendo · están durmiendo.", "Normalmente cocina · ahora está cocinando.", "La tengo · no los veo · lo está cosiendo la vecina."],
  },
  related: [
    { path: "/gramatica/estar-gerundio", label: "Clase: Estar + gerundio: acción en desarrollo" },
    { path: "/la-estacion-de-los-dos-destinos", label: "Clase: Objeto directo básico: lo, la, los, las" },
  ],
};
