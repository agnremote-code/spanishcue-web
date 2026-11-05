import type { Module } from "../../types";

export const a2w14: Module = {
  id: "a2-14",
  level: "a2",
  week: 14,
  kind: "core",
  title: "Ninguna tienda, demasiados turistas y yo tampoco",
  subtitle: "Repaso de alguno, ninguno, mucho, poco, demasiado, cada y otro, y de la doble negación con nunca, tampoco y ni… ni, en una visita a las ruinas mayas.",
  stop: { place: "Copán", country: "Honduras" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g071",
    "a2.gram.g072",
    "a2.voc.w14-excursion-ruinas",
    "a2.pron.w14-fuerza-negacion",
    "a2.lis.w14-entrada-parque",
    "a2.read.w14-resena-excursion",
    "a2.wri.w14-resena-lugar",
    "a2.spk.w14-opinar-cantidad",
    "a2.fun.w14-quejarse-cantidad",
    "a2.disc.w14-coincidir-discrepar",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes decir si hay algún o ningún sitio, si hay mucha, poca o demasiada gente, usar cada, otro y todo el, negar con nunca, tampoco y ni… ni (No vino nadie; Nunca voy; Yo tampoco) y reaccionar a lo que dicen otros.",
    steps: [
      "Repasa `algún, alguna, ningún, ninguna` y por qué `ninguno` casi siempre va en singular.",
      "Distingue `mucha gente` (concuerda) de `trabaja mucho` (no cambia), y `muy` de `mucho`.",
      "Usa `cada` + singular, `otro` sin `un` y `todo el / toda la`.",
      "Niega de dos maneras: `No voy nunca` = `Nunca voy`.",
      "Reacciona con `yo también / yo tampoco` y une con `ni… ni`.",
      "Escucha una visita a Copán y escribe una reseña con lo bueno y lo malo.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases: los cuantificadores **alguno, ninguno, mucho, poco, demasiado** (con _cada, otro, todo_) y la **doble negación** con _nadie, nada, nunca, tampoco_ y _ni… ni_. La situación: Paula y Tomás, dos estudiantes de Tegucigalpa, visitan las ruinas mayas de Copán con un guía.",
    parts: [
      {
        heading: "Algún, alguna, ningún, ninguna",
        body: [
          "**Alguno** pregunta o afirma que hay **uno o varios**; **ninguno** dice que hay **cero**. Concuerdan con el nombre: _alguna tienda, algunos guías, ninguna entrada_.",
          "Delante de un nombre **masculino singular**, pierden la **-o**: _**algún** sitio_, _**ningún** problema_. Sin nombre, vuelven a ser completos: _¿Tienes algún mapa? —No, no tengo **ninguno**_.",
          "**Ninguno / ninguna** casi siempre va en **singular**, aunque en inglés uses el plural: _No hay **ninguna** silla libre_ (there are no chairs).",
        ],
        support: [
          "_algún / alguna / algunos / algunas_ = some, any; _ningún / ninguna_ = no, not any (usually singular). Before a masculine singular noun: _algún, ningún_. Without a noun: _alguno, ninguno_.",
        ],
        table: {
          caption: "Formas y concordancia",
          head: ["", "Masculino", "Femenino"],
          rows: [
            ["con nombre (sing.)", "algún / ningún guía", "alguna / ninguna tienda"],
            ["con nombre (plural)", "algunos turistas", "algunas fotos"],
            ["sin nombre", "alguno / ninguno", "alguna / ninguna"],
          ],
        },
        examples: [
          { es: "¿Hay algún cajero cerca de la plaza?", en: "Is there a cashpoint near the square?" },
          { es: "—¿Quedan entradas? —No, no queda ninguna.", en: "—Are there any tickets left? —No, there are none left." },
        ],
        mistakes: [
          { wrong: "No tengo ninguno problema.", right: "No tengo ningún problema.", why: "Delante de un nombre masculino singular: **ningún**." },
          { wrong: "No hay ningunas toallas.", right: "No hay ninguna toalla.", why: "**Ninguna** casi siempre va en singular." },
        ],
      },
      {
        heading: "Mucho, poco, demasiado: ¿cambian o no?",
        body: [
          "Delante de un **nombre**, **mucho, poco, demasiado** concuerdan como adjetivos: _**mucha** gente, **pocos** guías, **demasiadas** escaleras, **demasiado** calor_.",
          "Con un **verbo** o un **adjetivo** no cambian: _Caminamos **mucho**_, _Los recuerdos son **demasiado** caros_, _Esta tienda abre **poco**_.",
          "**Muy** va con adjetivos y adverbios (_muy alto, muy lejos_); **mucho** va con verbos y nombres, y también con **más, menos, mejor, peor**: _**mucho** mejor_, nunca _muy mejor_. **Demasiado** significa «más de lo necesario» y suele ser una crítica.",
        ],
        support: [
          "Before a noun, _mucho, poco, demasiado_ agree (_muchas personas_). With a verb or an adjective they don't change (_es demasiado caro_). _Muy_ + adjective; _mucho_ + verb, noun or _más / mejor_.",
        ],
        table: {
          caption: "Con nombre o sin nombre",
          head: ["Con nombre (concuerda)", "Con verbo o adjetivo (no cambia)"],
          rows: [
            ["muchas fotos", "Sacamos mucho."],
            ["poca agua", "Bebimos poco."],
            ["demasiadas personas", "Es demasiado temprano."],
          ],
        },
        examples: [
          { es: "Había demasiados turistas y muy poca sombra.", en: "There were too many tourists and very little shade." },
          { es: "Este hotel es mucho más tranquilo que el otro.", en: "This hotel is much quieter than the other one." },
        ],
        mistakes: [
          { wrong: "Había muchos gente en la entrada.", right: "Había mucha gente en la entrada.", why: "_La gente_ es femenino singular: **mucha gente**." },
          { wrong: "La entrada es mucho cara.", right: "La entrada es muy cara.", why: "Con un adjetivo: **muy**." },
          { wrong: "Mi abuelo camina muy.", right: "Mi abuelo camina mucho.", why: "Con un verbo: **mucho**." },
        ],
      },
      {
        heading: "Cada, otro, todo el",
        body: [
          "**Cada** no cambia nunca y va con un nombre en **singular**: _**cada** escalón_, _**cada** día_, _**cada** persona paga su entrada_.",
          "**Otro / otra / otros / otras** nunca lleva **un** delante: _¿Me das **otra** botella?_ (no _una otra_). Para decir «uno más», basta con _otro_.",
          "**Todo** concuerda y lleva **el / la / los / las**: _**todo el** parque, **toda la** mañana, **todos los** templos, **todas las** guacamayas_.",
        ],
        support: [
          "_cada_ (each, every) + singular noun, never changes. _otro_ (another, other) never takes _un_. _todo el / toda la / todos los / todas las_ = the whole, all.",
        ],
        examples: [
          { es: "Cada estela tiene una historia diferente.", en: "Each stela has a different story." },
          { es: "Pasamos toda la tarde en el parque y otro día volvemos.", en: "We spent the whole afternoon in the park and we'll come back another day." },
        ],
        mistakes: [
          { wrong: "¿Puedo pedir un otro café?", right: "¿Puedo pedir otro café?", why: "**Otro** no lleva _un_." },
          { wrong: "Cada días visito un lugar nuevo.", right: "Cada día visito un lugar nuevo.", why: "**Cada** + nombre en singular." },
        ],
      },
      {
        heading: "La doble negación: no + verbo + nunca, nada, nadie…",
        body: [
          "En español es normal tener **dos negaciones** en la frase. Si la palabra negativa (**nunca, nada, nadie, ningún, tampoco**) va **después** del verbo, necesitas **no** delante: _**No** fui **nunca** a Copán_, _**No** tenemos **ningún** mapa_.",
          "Si la palabra negativa va **delante** del verbo, **no** se pone _no_: _**Nunca** fui a Copán_. El significado es el mismo; con la palabra negativa delante, la frase suena un poco más fuerte.",
          "Puedes juntar varias palabras negativas en la misma frase, siempre con un solo **no** delante del verbo: _**No** le dije **nunca nada** a **nadie**_.",
        ],
        support: [
          "Spanish uses double negatives: _no_ + verb + _nunca / nada / nadie / ningún_. If the negative word comes first, drop _no_: _Nunca voy_ = _No voy nunca_. Never _Nunca no_.",
        ],
        table: {
          caption: "Dos maneras de negar",
          head: ["no + verbo + palabra negativa", "palabra negativa + verbo"],
          rows: [
            ["No voy nunca al gimnasio.", "Nunca voy al gimnasio."],
            ["No me gusta ninguno.", "Ninguno me gusta."],
            ["No lo sabe tampoco.", "Tampoco lo sabe."],
          ],
        },
        examples: [
          { es: "No he visto nunca un templo tan alto.", en: "I've never seen such a tall temple." },
          { es: "Ningún guía habla alemán hoy.", en: "No guide speaks German today." },
        ],
        mistakes: [
          { wrong: "Nunca no como picante.", right: "Nunca como picante.", why: "Con **nunca** delante del verbo, sin _no_." },
          { wrong: "Visité nunca Guatemala.", right: "No visité nunca Guatemala.", why: "_Nunca_ después del verbo necesita **no** delante." },
        ],
      },
      {
        heading: "También o tampoco, y ni… ni",
        body: [
          "Para coincidir con alguien: si la frase es **positiva**, responde **también**; si es **negativa**, responde **tampoco**. _—Me encanta Copán. —A mí **también**_. _—No tengo agua. —Yo **tampoco**_.",
          "Para **no coincidir**: _—No me gustan las alturas. —**A mí sí**_. _—Yo quiero subir. —**Yo no**_.",
          "Para negar dos cosas juntas usa **ni… ni**: _No trajimos **ni** agua **ni** gorras_. Si va antes del verbo, sin _no_: _**Ni** Paula **ni** Tomás conocían Copán_.",
        ],
        support: [
          "_también_ (too) answers a positive sentence; _tampoco_ (neither / not either) answers a negative one. _ni… ni_ = neither… nor.",
        ],
        table: {
          caption: "Reaccionar",
          head: ["Frase", "Coincido", "No coincido"],
          rows: [
            ["Yo quiero volver.", "Yo también.", "Yo no."],
            ["Yo no tengo hambre.", "Yo tampoco.", "Yo sí."],
            ["A mí me gusta el calor.", "A mí también.", "A mí no."],
            ["A mí no me gusta el calor.", "A mí tampoco.", "A mí sí."],
          ],
        },
        examples: [
          { es: "—Nunca vi una guacamaya. —Yo tampoco, ¡qué colores!", en: "—I've never seen a macaw. —Me neither, what colours!" },
          { es: "En el bus no había ni wifi ni aire acondicionado.", en: "On the bus there was neither wifi nor air conditioning." },
        ],
        mistakes: [
          { wrong: "—No me gusta el picante. —A mí también no.", right: "—No me gusta el picante. —A mí tampoco.", why: "Para coincidir con una frase negativa: **tampoco**." },
          { wrong: "No tengo ni hermanos y hermanas.", right: "No tengo ni hermanos ni hermanas.", why: "Para negar las dos cosas: **ni… ni**." },
        ],
        tip: "Truco: mira si la frase de la otra persona tiene **no**. Si lo tiene, tu respuesta para coincidir es **tampoco**.",
      },
    ],
  },
  grammar: {
    intro: "Primero los cuantificadores con su concordancia; después la negación con nunca, tampoco y ni… ni.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "Algún, ningún y sus formas",
        prompt: "Completa con **algún, alguna, algunos, algunas, ningún, ninguna, alguno** o **ninguno**.",
        items: [
          { q: "¿Conoces ___ restaurante típico cerca del parque central?", answers: [["algún"]], why: "Nombre masculino singular: **algún**." },
          { q: "Busqué una farmacia abierta, pero no encontré ___.", answers: [["ninguna"]], why: "Sin nombre, femenino: **ninguna**." },
          { q: "___ estudiantes del grupo ya conocían las ruinas, pero la mayoría no.", answers: [["Algunos"]], why: "Masculino plural: **algunos**." },
          { q: "No hubo ___ problema con el autobús.", answers: [["ningún"]], why: "Nombre masculino singular: **ningún**." },
          { q: "—¿Tienes un cargador? —No, no tengo ___.", answers: [["ninguno"]], why: "Sin nombre, masculino: **ninguno**." },
        ],
      },
      {
        id: "g2",
        type: "choice",
        title: "Mucho, muy, poco, demasiado",
        prompt: "Elige la forma correcta.",
        items: [
          { q: "En Semana Santa hay ___ turistas en Copán.", options: ["mucho", "muchos", "muy"], answer: 1, why: "Con nombre masculino plural: **muchos**." },
          { q: "El sendero al mirador es ___ empinado.", options: ["muy", "mucho", "muchos"], answer: 0, why: "Con un adjetivo: **muy**." },
          { q: "Esta camiseta es ___ grande para mí: necesito una talla menos.", options: ["demasiada", "demasiados", "demasiado"], answer: 2, why: "Con un adjetivo, **demasiado** no cambia." },
          { q: "Hoy hay ___ gente en el museo: casi está vacío.", options: ["poco", "poca", "pocas"], answer: 1, why: "_La gente_, femenino singular: **poca**." },
          { q: "La guía nueva explica ___ mejor que la anterior.", options: ["muy", "mucha", "mucho"], answer: 2, why: "Con **mejor**: **mucho mejor**." },
        ],
      },
      {
        id: "g3",
        type: "transform",
        title: "La palabra negativa delante",
        prompt: "Escribe la frase con la palabra negativa **delante** del verbo. Quita el _no_.",
        items: [
          { source: "No llego tarde nunca al trabajo.", answers: ["Nunca llego tarde al trabajo."], why: "**Nunca** delante, sin _no_." },
          { source: "No vino ninguno de mis primos a la fiesta.", answers: ["Ninguno de mis primos vino a la fiesta."], why: "**Ninguno** delante, sin _no_." },
          { source: "No come carne tampoco mi hermana.", answers: ["Mi hermana tampoco come carne.", "Tampoco come carne mi hermana."], why: "**Tampoco** delante del verbo, sin _no_." },
          { source: "No me ayudó nadie con las maletas.", answers: ["Nadie me ayudó con las maletas."], why: "**Nadie** delante, sin _no_." },
        ],
      },
      {
        id: "g4",
        type: "gap",
        title: "También, tampoco, ni… ni",
        prompt: "Completa con **también, tampoco** o **ni**.",
        items: [
          { q: "—Yo nunca monté a caballo. —Yo ___. ¿Lo probamos mañana?", answers: [["tampoco"]], why: "Frase negativa + coincido: **tampoco**." },
          { q: "—Me encantan las guacamayas. —A mí ___.", answers: [["también"]], why: "Frase positiva + coincido: **también**." },
          { q: "No hablo ___ francés ___ italiano.", answers: [["ni"], ["ni"]], why: "Dos cosas negadas: **ni… ni**." },
          { q: "___ el guía ___ el conductor sabían dónde estaba la llave.", answers: [["Ni"], ["ni"]], why: "**Ni… ni** delante del verbo, sin _no_." },
          { q: "—No me gusta madrugar. —A mí ___, pero hoy hay que salir a las seis.", answers: [["tampoco"]], why: "Frase negativa: **a mí tampoco**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para una excursión a un sitio arqueológico: lo que ves, lo que necesitas y cómo opinas sobre la cantidad.",
    groups: [
      {
        title: "En las ruinas",
        items: [
          { es: "el sitio arqueológico", en: "the archaeological site" },
          { es: "el templo", en: "the temple" },
          { es: "la escalinata", en: "the grand staircase" },
          { es: "la estela", en: "the stela (carved stone)" },
          { es: "el juego de pelota", en: "the ball court" },
          { es: "la guacamaya", en: "the macaw" },
        ],
      },
      {
        title: "Lo que necesitas",
        items: [
          { es: "la gorra", en: "the cap" },
          { es: "el repelente", en: "insect repellent" },
          { es: "la entrada / el boleto", en: "the ticket" },
          { es: "el guía turístico", en: "the tour guide" },
          { es: "la sombra", en: "the shade" },
        ],
      },
      {
        title: "Opinar sobre la cantidad",
        items: [
          { es: "estaba lleno de gente", en: "it was packed" },
          { es: "no cabía ni un alfiler", en: "it was packed to the rafters" },
          { es: "había de todo", en: "there was a bit of everything" },
          { es: "se queda corto", en: "it falls short" },
          { es: "sobra tiempo", en: "there's time to spare" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "¿Qué es?",
        prompt: "Une cada descripción con la palabra.",
        pairs: [
          { left: "Es una piedra alta con figuras y glifos tallados.", right: "la estela" },
          { left: "Es un pájaro rojo, azul y amarillo que vive en Copán.", right: "la guacamaya" },
          { left: "Es lo que te pones para que no te piquen los mosquitos.", right: "el repelente" },
          { left: "Es el lugar donde los mayas jugaban con una pelota.", right: "el juego de pelota" },
          { left: "Es la persona que explica la historia del lugar a los visitantes.", right: "el guía turístico" },
        ],
        why: "Definiciones con **que, donde** y **lo que**, como en la semana 11.",
      },
      {
        id: "v2",
        type: "context",
        title: "¿Mucho o poco?",
        prompt: "Lee la situación y elige la frase más natural.",
        items: [
          { context: "Tu amiga te pregunta cómo estaba el parque a mediodía. No se podía caminar.", q: "Respondes:", options: ["Sobraba tiempo.", "Estaba lleno de gente: no cabía ni un alfiler.", "No había ningún problema."], answer: 1, why: "Mucha gente: **lleno de gente**, **no cabía ni un alfiler**." },
          { context: "Tu grupo terminó la visita en dos horas y el bus sale en cuatro.", q: "Dices:", options: ["Sobra tiempo: ¿vamos al museo?", "El tiempo se queda corto.", "No hay ningún tiempo."], answer: 0, why: "Más tiempo del necesario: **sobra tiempo**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La fuerza en la palabra negativa",
    explanation: [
      "En una negación, la palabra negativa suele llevar el **golpe más fuerte** de la frase: _No voy NUN-ca_, _NUN-ca voy_, _No vino NA-die_. El _no_ inicial es corto y suave.",
      "**Ningún** y **algún** llevan la fuerza al **final** (_nin-GÚN, al-GÚN_), por eso tienen tilde. **Ninguno** y **alguno** la llevan en la **gu**: _nin-GU-no_.",
      "En las reacciones cortas, la palabra importante va al final y la voz **baja**: _Yo tam-PO-co._ _A mí tam-BIÉN._ Si sube, suena a pregunta.",
    ],
    support: [
      "The negative word carries the strongest beat: _No voy NUNca_. _ningún_ is stressed at the end; _ninguno_ on _-GU-_. Short reactions (_yo tampoco_) fall at the end.",
    ],
    table: {
      caption: "Dónde está el golpe",
      head: ["Frase", "Ritmo"],
      rows: [
        ["No voy nunca.", "no-voy-NUN-ca"],
        ["Ningún problema.", "nin-GÚN-pro-BLE-ma"],
        ["No queda ninguno.", "no-que-da-nin-GU-no"],
        ["Yo tampoco.", "yo-tam-PO-co"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Qué forma oyes?",
      prompt: "Escucha y elige la palabra que oyes.",
      items: [
        { q: "¿Qué palabra oyes en la frase del mapa?", audio: "No tengo ningún mapa del parque.", options: ["ningún", "ninguno", "ninguna"], answer: 0 },
        { q: "¿Qué palabra oyes en la frase de las entradas?", audio: "Ya no queda ninguna.", options: ["ningún", "ninguna", "ninguno"], answer: 1 },
        { q: "¿Qué reacción oyes?", audio: "Yo tampoco.", options: ["Yo también.", "Yo no.", "Yo tampoco."], answer: 2 },
        { q: "¿Qué palabra oyes en la frase de los templos?", audio: "Algunos templos están cerrados.", options: ["algunos", "algún", "alguno"], answer: 0 },
        { q: "¿Qué oyes en la frase del museo?", audio: "Nunca voy al museo los lunes.", options: ["No voy nunca", "Nunca voy", "No voy"], answer: 1 },
      ],
    },
    produce: [
      { text: "No voy nunca. Nunca voy.", tip: "Golpe en _NUN_; el _no_ inicial, suave." },
      { text: "Ningún problema.", tip: "_nin-GÚN_: fuerza al final de _ningún_." },
      { text: "—No tengo agua. —Yo tampoco.", tip: "La reacción baja al final: _tam-PO-co_." },
      { text: "No trajimos ni agua ni gorras.", tip: "Dos golpes iguales en _A-gua_ y _GO-rras_." },
      { text: "Había demasiada gente y muy poca sombra.", tip: "_de-ma-SIA-da_ en un solo golpe de voz." },
    ],
    spelling: "Con tilde: **algún, ningún** (fuerza al final). Sin tilde: **alguno, ninguno, alguna, ninguna**.",
  },
  listening: {
    title: "En la entrada del parque",
    context: "Paula y Tomás llegan al parque arqueológico de Copán a las ocho de la mañana. Héctor, su guía, les explica el plan.",
    speakers: [
      { id: "hector", name: "Héctor", voice: "es-MX-m", role: "guía turístico" },
      { id: "paula", name: "Paula", voice: "es-CO-f", role: "estudiante" },
      { id: "tomas", name: "Tomás", voice: "es-PE-m", role: "estudiante, amigo de Paula" },
    ],
    script: [
      { speaker: "hector", text: "Buenos días. Antes de entrar, una pregunta: ¿alguno de ustedes visitó Copán antes?" },
      { speaker: "paula", text: "No, ninguno. Es la primera vez para los dos. Yo nunca vi unas ruinas mayas." },
      { speaker: "tomas", text: "Yo tampoco. Bueno, en fotos sí, pero en persona, nunca." },
      { speaker: "hector", text: "Perfecto. Hoy hay muchos turistas, así que vamos primero a la Escalinata de los Jeroglíficos, que todavía tiene poca gente. Cada escalón tiene glifos diferentes." },
      { speaker: "paula", text: "Héctor, ¿hay alguna tienda dentro del parque? No trajimos ni agua ni gorras." },
      { speaker: "hector", text: "Dentro no hay ninguna. Pero tengo otra botella en la mochila, y a la salida venden de todo." },
      { speaker: "tomas", text: "¿Y se puede subir a los templos? A mí no me gustan mucho las alturas." },
      { speaker: "hector", text: "A algunos sí, a otros no. Y a las estelas no puede subir nadie: no se toca nada." },
      { speaker: "paula", text: "¡Mira, Tomás, cuántas guacamayas! Hay demasiadas para contarlas." },
      { speaker: "hector", text: "Viven aquí todo el año. Tranquilos, no hacen nunca daño a nadie." },
      { speaker: "tomas", text: "Pues yo no me quiero ir de aquí en todo el día." },
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
            { q: "¿Dónde están Paula y Tomás?", options: ["en la entrada de un parque arqueológico", "en un museo de la capital", "en una tienda de recuerdos"], answer: 0 },
            { q: "¿Qué hace Héctor?", options: ["Les vende entradas.", "Les explica el plan de la visita.", "Les pide ayuda."], answer: 1 },
            { q: "¿Cómo se sienten los estudiantes?", options: ["aburridos", "enfadados", "con ganas de conocer el lugar"], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a lo que hay, lo que falta y lo que se puede hacer.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Cuántos de ellos conocían Copán?", options: ["los dos", "solo Tomás", "ninguno"], answer: 2 },
            { q: "¿Por qué van primero a la Escalinata?", options: ["porque todavía tiene poca gente", "porque cierra temprano", "porque está cerca de la tienda"], answer: 0 },
            { q: "¿Qué olvidaron traer?", options: ["el mapa y la cámara", "agua y gorras", "las entradas"], answer: 1 },
            { q: "¿Qué no se puede hacer con las estelas?", options: ["fotografiarlas", "mirarlas de cerca", "subirse a ellas"], answer: 2 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en los cuantificadores y en las negaciones.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué tiene cada frase?",
          categories: ["cuantificador (alguno, mucho, cada…)", "negación (nunca, tampoco, ni… ni…)"],
          items: [
            { text: "Hoy hay muchos turistas", cat: 0, why: "**Muchos** concuerda con _turistas_." },
            { text: "Cada escalón tiene glifos diferentes.", cat: 0, why: "**Cada** + singular." },
            { text: "Yo tampoco.", cat: 1, why: "Coincide con una frase negativa: **tampoco**." },
            { text: "No trajimos ni agua ni gorras.", cat: 1, why: "**Ni… ni** con _no_ delante del verbo." },
            { text: "tengo otra botella en la mochila", cat: 0 },
            { text: "no hacen nunca daño a nadie", cat: 1 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Copán en un día: lo bueno y lo malo",
    genre: "Reseña en una web de viajes",
    frame: "Después de la visita, Paula escribe una reseña para otros viajeros.",
    text: [
      "Fuimos a Copán un sábado de marzo y fue una de las mejores excursiones de mi vida. Los templos y las estelas son impresionantes: cada piedra cuenta una historia. Nunca vi nada parecido. Además, hay guacamayas por todo el parque y nadie las molesta.",
      "Lo malo: llegamos sin agua y dentro no hay ninguna tienda. A mediodía hacía demasiado calor y había muy poca sombra. Tampoco hay muchos bancos para descansar, así que lleven ropa cómoda. Otro consejo: no vayan en Semana Santa. Hay demasiados turistas y en algunos sitios no se puede ni caminar.",
      "El guía, Héctor, explicó todo muy bien y contestó todas nuestras preguntas. Mi amigo Tomás no sabía nada de los mayas y yo tampoco, pero salimos sabiendo mucho. El museo de esculturas es pequeño, pero vale la pena. Ningún folleto explica tan bien como un buen guía.",
      "En resumen: el parque merece cinco estrellas, pero planéenlo bien. Ni mi amigo ni yo pensamos en el sol, y terminamos rojos como las guacamayas.",
    ],
    glossary: [
      { es: "nada parecido", en: "nothing like it" },
      { es: "el folleto", en: "the leaflet / brochure" },
      { es: "planéenlo bien", en: "plan it well (to a group)" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee la reseña y responde.",
        items: [
          { q: "¿Qué opina Paula de los templos y las estelas?", options: ["Son impresionantes.", "Son pequeños.", "Están muy mal cuidados."], answer: 0 },
          { q: "¿Qué problema tuvieron a mediodía?", options: ["Llovía mucho.", "Hacía demasiado calor y había poca sombra.", "Había poca gente."], answer: 1 },
          { q: "¿Qué recomienda Paula sobre Semana Santa?", options: ["Ir en Semana Santa.", "Ir solo por la tarde.", "No ir en esas fechas."], answer: 2 },
          { q: "¿Qué les pasó a Paula y a Tomás al final?", options: ["Se perdieron.", "Se quemaron con el sol.", "Perdieron el autobús."], answer: 1 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Paula habla de algo bueno o de algo malo?",
        categories: ["bueno", "malo"],
        items: [
          { text: "cada piedra cuenta una historia", cat: 0 },
          { text: "dentro no hay ninguna tienda", cat: 1 },
          { text: "había muy poca sombra", cat: 1 },
          { text: "contestó todas nuestras preguntas", cat: 0 },
          { text: "Hay demasiados turistas", cat: 1 },
          { text: "salimos sabiendo mucho", cat: 0 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase de la reseña para ver qué gramática hay dentro.",
      items: [
        { quote: "Nunca vi nada parecido.", note: "**Nunca** delante del verbo, sin _no_, y **nada** después." },
        { quote: "dentro no hay ninguna tienda", note: "**No** + verbo + **ninguna**, en singular." },
        { quote: "hacía demasiado calor y había muy poca sombra", note: "**Demasiado** concuerda con _calor_; **muy** + **poca** + _sombra_." },
        { quote: "Tampoco hay muchos bancos", note: "**Tampoco** delante del verbo; **muchos** concuerda con _bancos_." },
        { quote: "Mi amigo Tomás no sabía nada de los mayas y yo tampoco", note: "**Yo tampoco**: coincide con una idea negativa." },
        { quote: "Ni mi amigo ni yo pensamos en el sol", note: "**Ni… ni** delante del verbo, sin _no_." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: cuánto hay (alguno, mucho, demasiado, cada, otro) y cómo negar y reaccionar.",
    exercises: [
      {
        id: "x1",
        type: "error",
        title: "Corrige la reseña",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "En el hotel no había ningunas toallas.", answers: ["En el hotel no había ninguna toalla.", "En el hotel no había toallas."], why: "**Ninguna** va en singular." },
          { sentence: "El desayuno era mucho caro.", answers: ["El desayuno era muy caro."], why: "Con un adjetivo: **muy**." },
          { sentence: "Pedimos una otra habitación.", answers: ["Pedimos otra habitación."], why: "**Otra** no lleva _una_." },
          { sentence: "Nadie no nos explicó el horario.", answers: ["Nadie nos explicó el horario.", "No nos explicó nadie el horario."], why: "Con **nadie** delante, sin _no_." },
          { sentence: "—No me gustó la comida. —A mí también no.", answers: ["—No me gustó la comida. —A mí tampoco."], why: "Coincidir con una frase negativa: **tampoco**." },
        ],
      },
      {
        id: "x2",
        type: "classify",
        title: "¿Concuerda o no cambia?",
        prompt: "¿La palabra en negrita concuerda con un nombre o no cambia?",
        categories: ["concuerda con un nombre", "no cambia (verbo o adjetivo)"],
        items: [
          { text: "Había **demasiadas** escaleras.", cat: 0 },
          { text: "Las entradas son **demasiado** caras.", cat: 1, why: "Con un adjetivo, **demasiado** no cambia." },
          { text: "Compramos **pocas** cosas.", cat: 0 },
          { text: "Ese guía habla **mucho**.", cat: 1 },
          { text: "Tienen **muchas** ganas de volver.", cat: 0 },
          { text: "Dormimos **poco** esa noche.", cat: 1 },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "Coincide o no",
        prompt: "Lee la situación y elige la mejor reacción.",
        items: [
          { context: "Tu compañero dice: «No quiero comer en el restaurante del parque, es carísimo». Tú opinas lo mismo.", q: "Respondes:", options: ["Yo también.", "Yo tampoco.", "Yo sí."], answer: 1, why: "Frase negativa y coincides: **yo tampoco**." },
          { context: "Tu amiga dice: «A mí me encanta madrugar». Tú odias madrugar.", q: "Respondes:", options: ["A mí no.", "A mí tampoco.", "A mí también."], answer: 0, why: "Frase positiva y no coincides: **a mí no**." },
          { context: "Te preguntan qué trajiste para la excursión. No llevas ni crema ni repelente.", q: "Dices:", options: ["Traje ni crema ni repelente.", "No traje ni crema ni repelente.", "No traje crema y repelente tampoco ni."], answer: 1, why: "**No** + verbo + **ni… ni**." },
        ],
      },
      {
        id: "x4",
        type: "order",
        title: "Frases de la excursión",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["No", "queda", "ningún", "asiento", "en", "el", "bus."], en: "There isn't a single seat left on the bus." },
          { words: ["Cada", "estudiante", "paga", "su", "entrada."], en: "Each student pays for their ticket." },
          { words: ["Nunca", "vi", "tantas", "guacamayas", "juntas."], alt: ["No vi nunca tantas guacamayas juntas."], en: "I never saw so many macaws together." },
        ],
      },
      {
        id: "x5",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases completas. Después compara con el modelo.",
        items: [
          {
            prompt: "Describe un lugar turístico de tu país: qué hay mucho, qué hay poco y qué hay demasiado. Usa también algún o ningún.",
            model: "En la playa de mi ciudad hay muchos restaurantes y pocas zonas tranquilas. En verano hay demasiada gente y no hay ningún sitio para aparcar. Pero algunas calles del centro son preciosas.",
            checklist: ["**Mucho, poco, demasiado** concuerdan con el nombre", "Usas **algún / ningún** con la forma correcta", "Usas **muy** solo con adjetivos"],
          },
          {
            prompt: "Escribe cuatro cosas que no haces nunca o que no has hecho nunca. Usa las dos posiciones: no… nunca y nunca + verbo.",
            model: "Nunca bebo café por la noche. No he subido nunca a una montaña de más de tres mil metros. Nunca llego tarde a una cita. Y no como nunca nada picante.",
            checklist: ["Una frase con **no** + verbo + **nunca**", "Una frase con **nunca** delante y sin _no_", "Ninguna frase con _nunca no_"],
          },
          {
            prompt: "Reacciona a tres opiniones de un amigo sobre un viaje (dos negativas y una positiva): coincide en dos y no coincidas en una.",
            model: "—No me gustan los viajes largos en bus. —A mí tampoco. —Nunca duermo bien en los hoteles. —Yo tampoco. —Me encantan las ruinas antiguas. —A mí no, prefiero la playa.",
            checklist: ["Usas **tampoco** con frases negativas", "Usas **también** o **a mí no / a mí sí** cuando corresponde", "Las reacciones son cortas y naturales"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe una reseña de un lugar turístico que visitaste, con lo bueno y lo malo y consejos para otros viajeros.",
    context: "Una web de viajes pide opiniones de visitantes reales. Escribe tu reseña de un museo, un parque, unas ruinas o una playa.",
    steps: [
      "Presenta el lugar y tu opinión general en una o dos frases.",
      "Explica lo bueno con **mucho, cada, todo el** (_cada sala…, todo el parque…_).",
      "Explica lo malo con **poco, demasiado, ningún** (_no hay ningún…, hay demasiada gente_).",
      "Usa al menos una negación con **nunca** o **tampoco** y una con **ni… ni**.",
      "Termina con un consejo y una nota (cuántas estrellas le das).",
      "Revisa: ¿concuerdan **mucho, poco, demasiado** con su nombre? ¿Usaste **muy** con adjetivos? ¿Hay algún _nunca no_ o _nadie no_ que debas corregir?",
    ],
    useLanguage: ["Fue una de las mejores…", "cada…", "todo el / toda la…", "no hay ningún / ninguna…", "demasiado / demasiada…", "tampoco…", "ni… ni…", "Nunca vi…"],
    model: [
      "El museo del Oro de mi ciudad es uno de los mejores del país. Cada sala tiene objetos preciosos y en toda la visita no vi ningún cartel sin traducción. Lo malo: los fines de semana hay demasiada gente y no hay ni cafetería ni bancos para descansar. Tampoco hay muchos baños. Nunca vi una colección tan grande, pero mi consejo es ir un martes por la mañana, cuando hay poca gente. Le doy cuatro estrellas.",
    ],
    checklist: [
      "**Algún / ningún** tienen la forma correcta y **ninguno** va en singular.",
      "**Mucho, poco, demasiado** concuerdan con el nombre y no cambian con verbos o adjetivos.",
      "Usas **cada** + singular y **otro** sin _un_.",
      "Las negaciones tienen un solo **no** o ninguno si la palabra negativa va delante.",
      "Hay al menos un **ni… ni** o un **tampoco**.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "Lo bueno y lo malo",
        prompt: "Habla de un viaje o una excursión: qué había mucho, qué había poco, qué había demasiado y qué no había.",
        prep: ["Había muchos / muchas…", "Había muy poca…", "Había demasiada gente…", "No había ningún / ninguna…"],
        seconds: 75,
        model: "El verano pasado fui a un pueblo de montaña. Había muchos caminos para caminar y muy poca gente. El hotel era bonito, pero había demasiados mosquitos por la noche. No había ningún supermercado, así que cada día comíamos en el mismo restaurante. Tampoco había buena señal de teléfono, pero no me importó nada.",
        selfCheck: ["**Mucho, poco, demasiado** concuerdan con el nombre.", "Digo **ningún** delante de un nombre masculino."],
      },
      {
        title: "Nunca jamás",
        prompt: "Di cinco cosas que no haces nunca o que nunca hiciste. Usa las dos posiciones.",
        prep: ["Nunca…", "No… nunca…", "No… ni… ni…", "Tampoco…"],
        seconds: 55,
        model: "Nunca como carne roja. No he viajado nunca en barco. No me gustan ni el fútbol ni el baloncesto. Nunca me levanto antes de las seis. Y tampoco veo la televisión por la mañana.",
        selfCheck: ["El golpe más fuerte va en la palabra negativa.", "No digo nunca _nunca no_."],
      },
      {
        title: "Yo también, yo tampoco",
        prompt: "Escucha mentalmente (o lee en voz alta) estas opiniones y reacciona a cada una con tu verdad: «No me gusta el calor», «Me encantan los museos», «Nunca viajo solo», «No sé nadar», «Me gusta madrugar».",
        prep: ["Yo también.", "Yo tampoco.", "Yo sí.", "A mí no.", "A mí tampoco."],
        seconds: 50,
        selfCheck: ["Uso **tampoco** cuando la frase es negativa.", "Mis reacciones bajan al final."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Encuentra coincidencias", task: "Di cinco frases sobre ti (tres negativas) y pide a tu profesor que reaccione. Después reacciona tú a las suyas.", phrases: ["Yo tampoco.", "A mí sí."] },
      { move: "Recomienda con honestidad", task: "Recomienda a tu profesor un lugar de tu ciudad con lo bueno y lo malo.", phrases: ["Hay muchos…, pero muy pocos…", "No hay ningún…"] },
      { move: "Pregunta por cantidades", task: "Pregunta a tu profesor si hay algún libro, alguna serie o algún sitio que te recomiende.", phrases: ["¿Hay algún…?", "¿Conoces alguna…?"] },
      { move: "Corrige un mito", task: "Cuenta algo que la gente cree de tu país y que no es verdad.", phrases: ["Nadie hace eso.", "No… nunca…, ni… ni…"] },
    ],
    bring: "Trae una reseña real (de una app o una web) de un lugar que conoces para comentar en clase si estás de acuerdo o no.",
  },
  quiz: {
    items: [
      { type: "gap", q: "No encontré ___ farmacia abierta en todo el pueblo.", answers: [["ninguna"]], why: "Femenino singular: **ninguna**." },
      { type: "choice", q: "¿Qué frase sobre el precio de la excursión es correcta?", options: ["La excursión es mucho cara.", "La excursión es demasiada cara.", "La excursión es muy cara."], answer: 2, why: "Con un adjetivo: **muy**." },
      { type: "gap", q: "Había ___ coches en la carretera: tardamos tres horas. (demasiado)", answers: [["demasiados"]], why: "Con _coches_, masculino plural: **demasiados**." },
      { type: "transform", source: "No sale nunca de casa sin paraguas.", instruction: "Escribe la frase con nunca delante del verbo.", answers: ["Nunca sale de casa sin paraguas."], why: "**Nunca** delante, sin _no_." },
      { type: "error", sentence: "Nunca no he probado la comida coreana.", answers: ["Nunca he probado la comida coreana.", "No he probado nunca la comida coreana."], why: "Con _nunca_ delante, **sin no**." },
      { type: "error", sentence: "¿Me traes un otro vaso de agua?", answers: ["¿Me traes otro vaso de agua?"], why: "**Otro** no lleva _un_." },
      { type: "choice", q: "Tu amigo dice «No tengo hambre» y tú tampoco tienes. ¿Qué respondes?", options: ["Yo también.", "Yo tampoco.", "Yo sí."], answer: 1, why: "Frase negativa + coincido: **tampoco**." },
      { type: "listen", q: "¿Qué palabra oyes en la frase del problema?", audio: "No hubo ningún problema con el vuelo.", options: ["ningún", "ninguno", "algún"], answer: 0 },
      { type: "order", words: ["No", "me", "gustan", "ni", "el", "frío", "ni", "la", "lluvia."] },
      { type: "open", prompt: "Escribe tres frases sobre tu barrio: una con demasiado, una con ningún / ninguna y una reacción con tampoco.", model: "En mi barrio hay demasiado tráfico por la mañana. No hay ninguna biblioteca cerca. Mi vecino no tiene coche y yo tampoco.", checklist: ["Demasiado concuerda con el nombre", "Ningún / ninguna en singular y con no delante del verbo", "Tampoco para coincidir con una idea negativa"] },
    ],
  },
  complete: {
    canNow: [
      "Usar **algún / ningún** y sus formas, con **ninguno** en singular.",
      "Distinguir **mucho, poco, demasiado** con nombres (concuerdan) y con verbos o adjetivos (no cambian), y **muy** de **mucho**.",
      "Usar **cada** + singular, **otro** sin _un_ y **todo el / toda la**.",
      "Negar con dos posiciones: _No voy nunca_ = _Nunca voy_.",
      "Coincidir o no con **también, tampoco, yo sí, yo no**, y negar dos cosas con **ni… ni**.",
      "Escribir una reseña con lo bueno y lo malo de un lugar.",
    ],
    review: ["Ningún problema; ninguna tienda (singular).", "Mucha gente / es muy caro / camina mucho / mucho mejor.", "No voy nunca = Nunca voy; —No tengo agua. —Yo tampoco; ni agua ni gorras."],
  },
  related: [
    { path: "/gramatica/alguno-ninguno-mucho-poco-demasiado", label: "Clase: Alguno, ninguno, mucho, poco, demasiado" },
    { path: "/gramatica/doble-negacion-nadie-nada-nunca", label: "Clase: Doble negación: nadie, nada, nunca" },
  ],
};
