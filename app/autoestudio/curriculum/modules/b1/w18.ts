import type { Module } from "../../types";

/**
 * B1 · semana 18 · Autoestudio espejo de G237 (ser y estar con adjetivos que
 * cambian de significado), G122 (orden de pronombres y clíticos más complejo) y
 * G123 (concordancia compleja con colectivos y cantidades). Repaso autónomo con
 * una familia de Córdoba que organiza los ochenta años del abuelo.
 */
export const b1w18: Module = {
  id: "b1-18",
  level: "b1",
  week: 18,
  kind: "core",
  title: "Ochenta años en Córdoba: el abuelo está listo, la familia decide",
  subtitle: "Repaso de los adjetivos que cambian de significado con «ser» y «estar», del orden de dos pronombres juntos y de la concordancia con palabras como «la gente», «la mayoría» o «la mitad».",
  stop: { place: "Córdoba", country: "Argentina" },
  minutes: 95,
  newObjectives: [
    "b1.gram.g237",
    "b1.gram.g122",
    "b1.gram.g123",
    "b1.voc.w18-fiesta-familiar",
    "b1.pron.w18-pronombres-pegados",
    "b1.lis.w18-plan-sorpresa",
    "b1.read.w18-cronica-cumpleanos",
    "b1.wri.w18-cronica-fiesta",
    "b1.spk.w18-organizar-celebracion",
    "b1.fun.w18-organizar-en-grupo",
    "b1.disc.w18-informar-decisiones"
  ],
  reviewObjectives: ["b1.gram.g120","b1.gram.g121","b1.voc.w17-alojamiento-edificio","b1.pron.w17-participio-ado","b1.lis.w17-entrada-residencia","b1.read.w17-historia-edificio","b1.wri.w17-correo-estado-habitacion","b1.spk.w17-describir-estado","b1.fun.w17-revisar-estado","b1.disc.w17-antes-y-ahora"],
  prerequisites: ["b1-17"],
  goal: {
    canDo: "Al final de esta semana puedes elegir el verbo que dice lo que quieres decir («es listo» o «está listo»), combinar dos pronombres en su orden y en su sitio («se lo damos», «no se lo digan», «vamos a dárselo») e informar de lo que decidió un grupo con la concordancia correcta («la mayoría votó», «había cuarenta personas»).",
    steps: [
      "Repasa los adjetivos que cambian de significado con «ser» y con «estar».",
      "Repasa el orden de dos pronombres juntos y su lugar con cada forma verbal.",
      "Repasa la concordancia con colectivos, cantidades, sujetos coordinados y «haber».",
      "Escucha a una familia de Córdoba que prepara una fiesta sorpresa.",
      "Lee la crónica de la fiesta, escribe la tuya, revísala y organiza una celebración en voz alta."
    ]
  },
  theory: {
    intro: "Esta semana repasas tres clases. La primera te ayuda a no confundir «es aburrido» con «está aburrido»; la segunda, a colocar «se lo» y «me la» sin dudar; la tercera, a concordar el verbo cuando hablas de grupos y cantidades. Te acompaña Valentina, que vive en Córdoba y organiza con sus primos una fiesta sorpresa para los ochenta años de su abuelo Cacho.",
    parts: [
      {
        heading: "Adjetivos que cambian de significado con «ser» y «estar»",
        body: [
          "Ya sabes que «ser» presenta una característica y «estar» un estado. Con algunos adjetivos, el cambio de verbo cambia el significado de la palabra. «El abuelo es listo» quiere decir que es inteligente; «El abuelo está listo», que está preparado. «La familia es rica» habla de dinero; «la carne está rica», del sabor.",
          "Con «estar», varios de estos adjetivos llevan preposición: «estar orgulloso de», «estar seguro de», «estar interesado en», «estar listo para». Otros adjetivos, como «tranquilo», «nervioso» o «serio», no cambian de significado: con «ser» hablan de cómo es alguien en general; con «estar», de cómo está hoy."
        ],
        table: {
          caption: "Mismo adjetivo, otro significado",
          head: ["Adjetivo", "Con «ser»", "Con «estar»"],
          rows: [
            ["listo", "inteligente, rápido", "preparado"],
            ["rico", "con mucho dinero", "sabroso"],
            ["aburrido", "que aburre a los demás", "que siente aburrimiento"],
            ["malo", "de mala calidad o con mala intención", "en mal estado; enfermo (coloquial)"],
            ["verde", "de color verde", "sin madurar; sin experiencia"],
            ["despierto", "espabilado, que entiende rápido", "que no duerme"],
            ["atento", "amable, considerado", "que presta atención"],
            ["seguro", "sin peligro; que confía en sí mismo", "convencido de algo"]
          ]
        },
        mistakes: [
          {
            wrong: "Mi primo está muy aburrido: siempre habla de lo mismo.",
            right: "Mi primo es muy aburrido: siempre habla de lo mismo.",
            why: "Quieres decir que aburre a los demás: «ser aburrido»."
          },
          {
            wrong: "Estoy seguro que viene.",
            right: "Estoy seguro de que viene.",
            why: "«Estar seguro» lleva «de» delante de «que»."
          }
        ],
        tip: "Pregúntate si hablas de cómo es la persona o la cosa, o de cómo está ahora. Si el adjetivo está en la tabla, comprueba además qué significado quieres."
      },
      {
        heading: "Dos pronombres juntos: orden y lugar",
        body: [
          "Cuando aparecen dos pronombres, el orden es fijo: primero «se», después «te» u «os», después «me» o «nos», y al final «lo, la, los, las». En la práctica: el de persona va antes que el de cosa («me lo», «te la», «nos los»). Y «le» o «les» se convierten en «se» delante de «lo, la, los, las»: no se dice «le lo», sino «se lo». Para dejar claro quién es «se», añade «a» + persona: «Se lo damos a la abuela».",
          "Con un verbo conjugado, en cualquier tiempo, los dos pronombres van delante: «se lo di», «se lo he dado» (nunca entre «he» y «dado»), «te lo diría». En el imperativo negativo van después de «no»: «No se lo digas». En el imperativo afirmativo, el infinitivo y el gerundio van pegados detrás y casi siempre necesitan tilde: «dáselo», «dárselo», «dándoselo». Con perífrasis puedes elegir: «se lo voy a dar» o «voy a dárselo», pero nunca en el medio ni dos veces."
        ],
        table: {
          caption: "¿Dónde van «se lo»?",
          head: ["Forma verbal", "Lugar", "Ejemplo"],
          rows: [
            ["verbo conjugado", "delante", "Se lo compramos ayer."],
            ["tiempo compuesto", "delante de «haber»", "Ya se lo hemos contado."],
            ["imperativo negativo", "después de «no»", "No se lo cuenten todavía."],
            ["imperativo afirmativo", "pegados detrás", "Cuéntenselo mañana."],
            ["infinitivo o gerundio", "pegados detrás", "Hay que contárselo. Está contándoselo."],
            ["perífrasis", "delante o pegados al infinitivo", "Se lo vamos a contar. / Vamos a contárselo."]
          ]
        },
        mistakes: [
          {
            wrong: "Le lo dimos el domingo.",
            right: "Se lo dimos el domingo.",
            why: "Delante de «lo», «le» se convierte en «se»."
          },
          {
            wrong: "Lo te traigo mañana.",
            right: "Te lo traigo mañana.",
            why: "La persona («te») va antes que la cosa («lo»)."
          }
        ]
      },
      {
        heading: "Colectivos y cantidades: «la gente dice», «la mitad votó / votaron»",
        body: [
          "Un nombre colectivo solo, aunque se refiera a muchas personas, lleva el verbo en singular: «La gente dice», «La familia decidió», «El público aplaudió». Cuando un colectivo o una cantidad va seguido de «de» + nombre en plural («la mayoría de los primos», «la mitad de los invitados», «un grupo de vecinos», «el setenta por ciento de los votos»), el verbo puede ir en singular o en plural: las dos opciones son correctas, y el plural es muy frecuente.",
          "Si el nombre después de «de» es singular, el verbo va en singular: «La mitad de la torta desapareció». Con «cada uno de» + plural, el verbo va en singular: «Cada uno de los nietos trajo algo»."
        ],
        examples: [
          { es: "La mayoría de los primos vinieron en auto.", note: "También correcto: «vino»." },
          { es: "Un grupo de amigos del abuelo cantó una zamba.", note: "También correcto: «cantaron»." },
          { es: "La mitad del asado se quemó.", note: "«Del asado»: singular." },
          { es: "Cada uno de los invitados escribió una frase en el libro.", note: "«Cada uno»: singular." }
        ],
        mistakes: [
          {
            wrong: "La gente aplaudieron cuando llegó el abuelo.",
            right: "La gente aplaudió cuando llegó el abuelo.",
            why: "«La gente», sola, lleva el verbo en singular."
          }
        ]
      },
      {
        heading: "Sujetos coordinados, «ni… ni» y «haber»",
        body: [
          "Dos sujetos unidos con «y» llevan el verbo en plural, y la persona que manda es la primera: «Mi hermano y yo llevamos las bebidas» (nosotros). Con «tú y él», en América y en partes de España se usa «ustedes» («Tú y Facundo traen la torta»); en el resto de España, «vosotros» («traéis»). «Usted y Marta» siempre van con «ustedes». Si un adjetivo se refiere a nombres masculinos y femeninos, va en masculino plural: «La torta y el vino estaban buenísimos».",
          "Con «ni… ni» delante del verbo, lo normal es el plural: «Ni la abuela ni el tío sabían nada». Y recuerda que «haber» para decir que algo existe no cambia nunca: «Había cuarenta personas», «Hubo tres discursos», «Va a haber música». La forma «habían cuarenta personas» se oye en muchas regiones, pero no es la norma culta."
        ],
        table: {
          caption: "Concordancias que conviene revisar",
          head: ["Sujeto", "Verbo", "Ejemplo"],
          rows: [
            ["yo + otra persona", "nosotros", "Valentina y yo decoramos el patio."],
            ["tú + otra persona", "ustedes (América) / vosotros (España)", "Tú y Facu compran el carbón."],
            ["ni… ni (antes del verbo)", "plural", "Ni Juan ni Inés llegaron a tiempo."],
            ["haber (existir)", "siempre singular", "Había muchísima gente en el patio."]
          ]
        },
        mistakes: [
          {
            wrong: "Habían más de cincuenta invitados en la fiesta.",
            right: "Había más de cincuenta invitados en la fiesta.",
            why: "«Haber» que indica existencia es invariable."
          },
          {
            wrong: "Mi prima y yo llevaron los globos.",
            right: "Mi prima y yo llevamos los globos.",
            why: "Si en el sujeto está «yo», el verbo va en «nosotros»."
          }
        ],
        tip: "Antes de cerrar un mensaje sobre un grupo, busca cada «había», «la gente» y «cada uno» y comprueba el verbo."
      }
    ]
  },
  grammar: {
    intro: "Practicas una clase en cada ejercicio y terminas con una corrección de errores que mezcla las tres.",
    exercises: [
      {
        id: "b1-18-gramatica-ser-estar",
        type: "choice",
        title: "¿Ser o estar?",
        prompt: "Elige el verbo que dice lo que quiere decir Valentina.",
        items: [
          { q: "Quiere decir que la empanada tiene muy buen sabor: «Esta empanada ___ riquísima».", options: ["es", "está"], answer: 1, why: "Sabor: «estar rico»." },
          { q: "Quiere decir que su abuelo entiende todo enseguida: «El abuelo ___ muy despierto: se va a dar cuenta».", options: ["está", "es"], answer: 1, why: "Inteligencia rápida: «ser despierto»." },
          { q: "Quiere decir que su primo Tomás todavía no tiene experiencia en la parrilla: «Tomás ___ verde todavía».", options: ["está", "es"], answer: 0, why: "Sin experiencia: «estar verde»." },
          { q: "Quiere decir que la tía Inés siempre piensa en los demás: «La tía ___ muy atenta con todos».", options: ["es", "está"], answer: 0, why: "Amable, considerada: «ser atenta»." },
          { q: "Quiere decir que todo está preparado: «Las mesas ya ___ listas para la fiesta».", options: ["son", "están"], answer: 1, why: "Preparado: «estar listo para»." }
        ]
      },
      {
        id: "b1-18-gramatica-pronombres",
        type: "gap",
        title: "El regalo del abuelo",
        prompt: "Sustituye las palabras entre paréntesis por dos pronombres y colócalos bien.",
        items: [
          { q: "(Le compramos el reloj al abuelo.) → Ya ___ ___ compramos.", answers: [["se"], ["lo"]], why: "«Le» + «lo» → «se lo», delante del verbo." },
          { q: "(No le cuenten la sorpresa a la abuela.) → No ___ ___ cuenten.", answers: [["se"], ["la"]], why: "Imperativo negativo: pronombres después de «no»." },
          { q: "(Vamos a darle las fotos al abuelo.) → Vamos a ___.", answers: [["dárselas"]], why: "Pegados al infinitivo, con tilde." },
          { q: "(Te presto la guitarra.) → Sí, ahora ___ ___ presto.", answers: [["te"], ["la"]], why: "Persona antes que cosa: «te la»." },
          { q: "(Están preparándole la torta al abuelo.) → Están ___.", answers: [["preparándosela"]], why: "Pegados al gerundio, con tilde." }
        ]
      },
      {
        id: "b1-18-gramatica-concordancia",
        type: "choice",
        title: "Informar de la reunión familiar",
        prompt: "Elige la forma correcta. Si las dos son correctas, elige la opción que lo dice.",
        items: [
          { q: "«La familia ___ hacer la fiesta en el patio de la tía.»", options: ["decidieron", "decidió", "decidimos"], answer: 1, why: "Colectivo solo: singular." },
          { q: "«La mayoría de los primos ___ asado.» ¿Qué forma es correcta?", options: ["Solo «prefiere».", "Solo «prefieren».", "Las dos: «prefiere» y «prefieren»."], answer: 2, why: "Cantidad + «de» + plural: las dos concordancias son correctas." },
          { q: "«Mi hermana y yo ___ de la música.»", options: ["nos encargamos", "se encargan", "se encarga"], answer: 0, why: "Con «yo» en el sujeto: nosotros." },
          { q: "«En la reunión ___ tres propuestas distintas.»", options: ["hubieron", "hubo", "hubimos"], answer: 1, why: "«Haber» de existencia: invariable." },
          { q: "«Cada uno de los nietos ___ una carta.»", options: ["escribieron", "escribimos", "escribió"], answer: 2, why: "«Cada uno»: singular." }
        ]
      },
      {
        id: "b1-18-gramatica-errores",
        type: "error",
        title: "Corrige el error",
        prompt: "Cada frase tiene un error de las clases de la semana. Escríbela bien.",
        items: [
          { sentence: "Le la mandamos por correo a la tía de Salta.", answers: ["Se la mandamos por correo a la tía de Salta."], why: "«Le» + «la» → «se la»." },
          { sentence: "Habían globos de colores en todas las ventanas.", answers: ["Había globos de colores en todas las ventanas."], why: "«Haber» de existencia: singular." },
          { sentence: "No me estoy seguro de la hora de la fiesta.", answers: ["No estoy seguro de la hora de la fiesta.", "No estoy segura de la hora de la fiesta."], why: "«Estar seguro» no lleva pronombre." },
          { sentence: "Voy a se lo decir mañana al tío.", answers: ["Se lo voy a decir mañana al tío.", "Voy a decírselo mañana al tío."], why: "Con perífrasis, los pronombres van delante de todo o pegados al infinitivo, nunca en medio." }
        ]
      }
    ]
  },
  vocabulary: {
    intro: "Palabras para organizar una fiesta familiar. Algunas son muy de Argentina: te lo indicamos.",
    groups: [
      {
        title: "La fiesta",
        items: [
          { es: "la fiesta sorpresa" },
          { es: "los invitados" },
          { es: "el brindis" },
          { es: "el discurso" },
          { es: "soplar las velas" },
          { es: "el patio" }
        ]
      },
      {
        title: "La comida",
        items: [
          { es: "el asado" },
          { es: "la parrilla" },
          { es: "el asador", note: "La persona que cocina el asado." },
          { es: "las empanadas" },
          { es: "la torta", note: "En Argentina, el pastel de cumpleaños." },
          { es: "el carbón" }
        ]
      },
      {
        title: "Expresiones de Argentina",
        items: [
          { es: "hacer una vaquita", note: "Juntar dinero entre todos para pagar algo." },
          { es: "el auto", note: "El coche." },
          { es: "estar re contento", note: "Coloquial: «re» intensifica, como «muy»." },
          { es: "la zamba", note: "Música y baile tradicional del noroeste argentino." }
        ]
      }
    ],
    exercises: [
      {
        id: "b1-18-vocabulario-definiciones",
        type: "match",
        title: "Cada palabra con su explicación",
        prompt: "Une cada palabra o expresión con su significado.",
        pairs: [
          { left: "hacer una vaquita", right: "poner dinero entre todos para un gasto común" },
          { left: "el asador", right: "la persona que se ocupa de la carne en la parrilla" },
          { left: "el brindis", right: "el momento en que se levantan las copas y se dicen unas palabras" },
          { left: "soplar las velas", right: "lo que hace quien cumple años antes de cortar la torta" },
          { left: "la zamba", right: "una música tradicional que se baila con pañuelo" }
        ],
        why: "Fíjate en si la expresión nombra una acción, una persona, un momento o una música."
      },
      {
        id: "b1-18-vocabulario-huecos",
        type: "gap",
        title: "La lista de Valentina",
        prompt: "Completa con una palabra del banco.",
        bank: ["carbón", "vaquita", "invitados", "torta", "discurso"],
        items: [
          { q: "Para pagar el regalo hacemos una ___: dos mil pesos cada uno.", answers: [["vaquita"]], why: "Dinero que pone cada uno." },
          { q: "Facundo compra el ___ para la parrilla el sábado temprano.", answers: [["carbón"]], why: "Lo que se quema para hacer el asado." },
          { q: "La ___ es de dulce de leche, la favorita del abuelo.", answers: [["torta"]], why: "El pastel de cumpleaños." },
          { q: "Ya confirmaron cuarenta y dos ___.", answers: [["invitados"]], why: "Las personas que vienen a la fiesta." },
          { q: "La abuela no quiere dar un ___ largo: solo unas palabras.", answers: [["discurso"]], why: "Lo que se dice delante de todos." }
        ]
      }
    ]
  },
  pronunciation: {
    focus: "Pronombres pegados al verbo: el acento no se mueve",
    explanation: [
      "Cuando pegas uno o dos pronombres detrás de un verbo, la palabra se alarga, pero la sílaba fuerte sigue siendo la misma del verbo: «da» → «dá-se-lo», «contando» → «con-tán-do-se-lo», «preparar» → «pre-pa-rár-se-la». Los pronombres son sílabas débiles: no les des fuerza.",
      "Por eso estas palabras llevan tilde por escrito: la sílaba fuerte queda lejos del final. Al escuchar, la sílaba fuerte del verbo te dice cuál es la acción; las sílabas débiles del final te dicen a quién y qué: «dámelo» (a mí), «dáselo» (a él o a ella), «dánoslo» (a nosotros)."
    ],
    examples: [
      { es: "Dáselo. / Dámelo.", note: "Fuerza en «dá»; cambia solo la sílaba débil del medio." },
      { es: "Estamos preparándosela.", note: "Fuerza en «rán», aunque la palabra tiene seis sílabas." }
    ],
    perceive: {
      id: "b1-18-pronunciacion-encliticos",
      type: "listen",
      title: "¿A quién y qué?",
      prompt: "Escucha cada frase y elige la forma que oyes.",
      items: [
        { q: "¿Qué forma oyes?", options: ["dámelo", "dáselo", "dánoslo"], answer: 1, why: "«Se»: a él o a ella.", audio: "El reloj es para el abuelo: dáselo después de la torta.", voice: "es-AR-f" },
        { q: "¿Y aquí?", options: ["contándosela", "contándonosla", "contándomela"], answer: 2, why: "«Me»: a quien habla.", audio: "Mi prima me llamó y estuvo media hora contándomela.", voice: "es-AR-m" },
        { q: "¿Dónde está la fuerza en la palabra larga?", options: ["en «ex»", "en «car»", "en «se»"], answer: 1, why: "La fuerza sigue en la sílaba del verbo: «ex-pli-cár-se-lo».", audio: "Hay que explicárselo a la tía con calma.", voice: "es-AR-f" },
        { q: "¿Qué forma oyes?", options: ["pónganselos", "póngansela", "pónganmelos"], answer: 0, why: "«Se» + «los»: los gorros, a ellos.", audio: "Los gorros son para los chicos: pónganselos antes de la foto.", voice: "es-AR-m" }
      ]
    },
    produce: [
      { text: "No se lo digan todavía: vamos a decírselo en el brindis.", tip: "Fuerza en «di» y en «cír»; los pronombres, suaves.", voice: "es-AR-f" },
      { text: "Dámela, que la llevo yo.", tip: "Una sola sílaba fuerte: «dá».", voice: "es-AR-m" },
      { text: "Están preparándosela con dulce de leche.", tip: "Marca «rán» y no subas el tono al final de la palabra.", voice: "es-AR-f" }
    ],
    spelling: "Pon tilde cuando la sílaba fuerte queda tres o más sílabas antes del final: «dáselo», «decírselo», «contándoselo». «Dame» y «decirlo» no la llevan."
  },
  listening: {
    title: "La reunión de los primos",
    context: "Es domingo por la noche. Valentina reúne en su casa a su primo Facundo y a su prima Sol para cerrar los detalles de la fiesta sorpresa del abuelo Cacho, que cumple ochenta años el sábado.",
    speakers: [
      { id: "val", name: "Valentina", voice: "es-AR-f", role: "nieta y organizadora" },
      { id: "fac", name: "Facundo", voice: "es-AR-m", role: "primo, encargado del asado" },
      { id: "sol", name: "Sol", voice: "es-UY-f", role: "prima que vive en Montevideo" }
    ],
    script: [
      { speaker: "val", text: "Bueno, chicos, les cuento cómo vamos. Ya confirmaron cuarenta personas. La mayoría de los primos vienen el viernes, y la gente del club del abuelo llega directamente el sábado." },
      { speaker: "fac", text: "¿Y la abuela? ¿Sabe algo?" },
      { speaker: "val", text: "Sí, la abuela lo sabe todo; se lo contamos el lunes. Pero ni el abuelo ni el tío Rubén saben nada, y el tío es incapaz de guardar un secreto. Así que, por favor, no se lo digan." },
      { speaker: "sol", text: "Tranquila, que yo estoy en Montevideo hasta el jueves. ¿Y el regalo? ¿Ya lo compraron?" },
      { speaker: "val", text: "Sí, el reloj ya lo tenemos. Hicimos una vaquita y cada uno de los nietos puso dos mil pesos. Vamos a dárselo en el brindis, antes de la torta." },
      { speaker: "fac", text: "Yo me encargo del asado. Pero ojo, que el abuelo es muy despierto: si ve la parrilla encendida a las once, se da cuenta." },
      { speaker: "val", text: "Por eso la tía Inés lo va a llevar a pasear por el centro. Cuando vuelvan, a la una, todo tiene que estar listo." },
      { speaker: "sol", text: "Y yo llevo las fotos viejas para el mural. Mi mamá me las mandó ayer, ¡hay unas del abuelo de joven que son re graciosas!" },
      { speaker: "val", text: "Perfecto. Había pensado también en una zamba al final. El abuelo va a estar re orgulloso de toda la familia." }
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha una vez sin leer. ¿De qué hablan los primos?",
        exercise: {
          id: "b1-18-escucha-global",
          type: "choice",
          prompt: "Elige la mejor respuesta.",
          items: [
            { q: "¿Para qué se reúnen Valentina, Facundo y Sol?", options: ["Para elegir un regalo para la abuela.", "Para cerrar los detalles de una fiesta sorpresa.", "Para despedir a Sol, que se va a Montevideo."], answer: 1, why: "Preparan la fiesta sorpresa del abuelo." },
            { q: "¿Qué es lo más importante para Valentina?", options: ["Que el abuelo no se entere antes de tiempo.", "Que la comida sea barata.", "Que vengan todos los del club."], answer: 0, why: "Insiste en el secreto y en la hora de vuelta." }
          ]
        }
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota los detalles.",
        exercise: {
          id: "b1-18-escucha-detalle",
          type: "choice",
          prompt: "Responde según la reunión.",
          items: [
            { q: "¿Quién no sabe nada de la fiesta?", options: ["La abuela y la tía Inés.", "Sol y Facundo.", "El abuelo y el tío Rubén."], answer: 2, why: "«Ni el abuelo ni el tío Rubén saben nada.»" },
            { q: "¿Cómo pagaron el reloj?", options: ["Lo pagó la abuela.", "Cada nieto puso dos mil pesos.", "Con dinero del club."], answer: 1, why: "«Cada uno de los nietos puso dos mil pesos.»" },
            { q: "¿Por qué la tía Inés va a llevar al abuelo al centro?", options: ["Para que no vea la parrilla encendida.", "Para comprar la torta.", "Para buscar a Sol."], answer: 0, why: "«Si ve la parrilla encendida a las once, se da cuenta.»" }
          ]
        }
      },
      {
        stage: "notice",
        prompt: "Fíjate en la gramática. Completa lo que dicen exactamente.",
        exercise: {
          id: "b1-18-escucha-formas",
          type: "gap",
          prompt: "Escribe la palabra o forma que usan.",
          items: [
            { q: "La abuela lo sabe todo; ___ ___ contamos el lunes.", answers: [["se"], ["lo"]], why: "«Le» + «lo» → «se lo»." },
            { q: "Ni el abuelo ni el tío Rubén ___ nada.", answers: [["saben"]], why: "«Ni… ni» delante del verbo: plural." },
            { q: "Vamos a ___ en el brindis, antes de la torta.", answers: [["dárselo"]], why: "Pronombres pegados al infinitivo, con tilde." },
            { q: "El abuelo ___ muy despierto: si ve la parrilla encendida, se da cuenta.", answers: [["es"]], why: "«Ser despierto»: entender las cosas rápido." }
          ]
        }
      }
    ]
  },
  reading: {
    title: "Ochenta velas y ningún secreto",
    genre: "Crónica en el boletín de un club de barrio",
    frame: "El boletín del club del barrio Alta Córdoba, donde el abuelo Cacho juega a las bochas desde hace cincuenta años, publica una crónica de la fiesta.",
    text: [
      "El sábado pasado, don Cacho Ferreyra cumplió ochenta años y su familia le preparó una fiesta sorpresa en el patio de su hija Inés. Había más de cuarenta personas: hijos, nietos, vecinos y un grupo de compañeros del club, que llegaron con camisetas del equipo de bochas. La mayoría de los invitados se escondió detrás de las plantas, y cuando don Cacho entró, la gente empezó a cantar.",
      "«Yo estaba seguro de que tramaban algo», contó después el homenajeado, que es famoso en el club por ser muy despierto. «Mi nieta es muy lista, pero el tío Rubén no sabe disimular». Al parecer, el viernes alguien le habló del asado y él se lo comentó a su mujer, que lo negó todo con una sonrisa.",
      "El asado, a cargo del nieto Facundo, estaba riquísimo, aunque la mitad de las empanadas desapareció antes de que se sentaran todos. En el brindis, los nietos le dieron un reloj; se lo regalaron con una carta firmada por cada uno de ellos. Don Cacho, que no es un hombre de muchas palabras, solo dijo que estaba orgulloso de su familia y de sus amigos del club.",
      "La fiesta terminó con una zamba. Ni don Cacho ni su mujer habían bailado en público desde su boda, pero esa noche bailaron dos veces. Desde el club, le deseamos muchos años más… y muchas partidas de bochas."
    ],
    glossary: [{ es: "las bochas" }, { es: "el homenajeado" }, { es: "tramar algo" }, { es: "disimular" }],
    tasks: [
      {
        id: "b1-18-lectura-comprension",
        type: "choice",
        title: "Comprensión",
        prompt: "Responde según la crónica.",
        items: [
          { q: "¿Qué hizo la mayoría de los invitados cuando llegó don Cacho?", options: ["Se escondió detrás de las plantas.", "Salió a buscarlo al club.", "Empezó a comer empanadas."], answer: 0, why: "«La mayoría de los invitados se escondió detrás de las plantas.»" },
          { q: "¿Qué hizo la mujer de don Cacho cuando él le comentó lo del asado?", options: ["Le contó toda la verdad.", "Se enfadó con el tío Rubén.", "Lo negó todo sonriendo."], answer: 2, why: "«Lo negó todo con una sonrisa.»" },
          { q: "¿Qué dijo don Cacho en el brindis?", options: ["Que el asado estaba frío.", "Que estaba orgulloso de su familia y de sus amigos.", "Que quería otro reloj."], answer: 1, why: "«Solo dijo que estaba orgulloso de su familia y de sus amigos del club.»" }
        ]
      },
      {
        id: "b1-18-lectura-significado",
        type: "match",
        title: "¿Qué significa en el texto?",
        prompt: "Une cada expresión de la crónica con su significado.",
        pairs: [
          { left: "estaba seguro de que tramaban algo", right: "estaba convencido de que preparaban algo en secreto" },
          { left: "es muy despierto", right: "entiende las cosas muy rápido" },
          { left: "es muy lista", right: "es muy inteligente" },
          { left: "estaba riquísimo", right: "tenía un sabor buenísimo" }
        ],
        why: "Con «ser» y «estar», estos adjetivos cambian de significado."
      }
    ],
    noticing: {
      prompt: "Fíjate en los adjetivos con «ser» y «estar», en los pronombres y en la concordancia con grupos y cantidades.",
      items: [
        { quote: "La mayoría de los invitados se escondió detrás de las plantas", note: "Cantidad + «de» + plural: aquí en singular; «se escondieron» también sería correcto." },
        { quote: "se lo regalaron con una carta firmada por cada uno de ellos", note: "«Le» + «lo» → «se lo», delante del verbo conjugado." },
        { quote: "la mitad de las empanadas desapareció", note: "Otra cantidad con verbo en singular; el plural también es correcto." },
        { quote: "Ni don Cacho ni su mujer habían bailado en público", note: "«Ni… ni» delante del verbo: plural." }
      ]
    }
  },
  practice: {
    intro: "Combinas las tres clases y recuperas lo de las semanas 16 y 17.",
    exercises: [
      {
        id: "b1-18-practica-orden",
        type: "order",
        title: "Mensajes del grupo familiar",
        prompt: "Ordena las palabras para formar frases completas.",
        items: [
          { words: ["No", "se", "lo", "cuenten", "al", "tío", "Rubén."] },
          { words: ["La", "mitad", "de", "la", "torta", "ya", "está", "cortada."] },
          { words: ["Mi", "primo", "y", "yo", "llevamos", "las", "sillas."] },
          { words: ["Las", "empanadas", "de", "la", "tía", "están", "riquísimas."] }
        ]
      },
      {
        id: "b1-18-practica-retrieval",
        type: "context",
        title: "Recuperación: semanas 16 y 17",
        prompt: "Recuperación de semanas anteriores en la fiesta de Córdoba. Elige la mejor opción.",
        items: [
          { context: "Semana 16, discurso referido. El viernes la abuela dijo: «No sé nada de ninguna fiesta».", q: "El domingo Valentina lo cuenta.", options: ["La abuela dijo que no sabía nada de ninguna fiesta.", "La abuela dijo si no sabía nada de ninguna fiesta.", "La abuela dijo que no sabrá nada de ninguna fiesta."], answer: 0, why: "Presente → imperfecto." },
          { context: "Semana 16, «se». Un cartel en la puerta del club.", q: "¿Qué cartel es correcto?", options: ["Se busca jugadores de bochas.", "Se buscan jugadores de bochas.", "Se buscan a jugadores de bochas."], answer: 1, why: "Cualquier jugador, sin «a»: concuerda en plural." },
          { context: "Semana 17, estar + participio. A la una todo tenía que estar preparado.", q: "¿Cómo estaba el patio cuando llegó el abuelo?", options: ["El patio fue decorado y las mesas fueron puestas.", "El patio estaba decorando y las mesas estaban poniendo.", "El patio estaba decorado y las mesas estaban puestas."], answer: 2, why: "Estado resultante con «estaba» + participio concordado." },
          { context: "Semana 17, quedarse + participio. Con el viento, una puerta se cerró de golpe.", q: "¿Qué pasó con la puerta?", options: ["Se quedó cerrada y nadie tenía la llave.", "Fue quedada cerrada.", "Estaba cerrando sola."], answer: 0, why: "«Quedarse» + participio: estado final inesperado." }
        ]
      },
      {
        id: "b1-18-practica-pronombres",
        type: "transform",
        title: "Sin repetir nombres",
        prompt: "Reescribe cada frase con dos pronombres en lugar de las palabras entre paréntesis.",
        items: [
          { source: "Le llevamos (las fotos) (a la abuela) el jueves.", instruction: "Usa dos pronombres delante del verbo.", answers: ["Se las llevamos el jueves.", "El jueves se las llevamos."], why: "«Le» + «las» → «se las»." },
          { source: "Tienen que explicar (el plan) (a nosotros).", instruction: "Pega los pronombres al infinitivo.", answers: ["Tienen que explicárnoslo."], why: "«Nos» + «lo», pegados y con tilde." },
          { source: "Manden (el video) (a mí) esta noche.", instruction: "Usa el imperativo afirmativo.", answers: ["Mándenmelo esta noche."], why: "Pegados al imperativo: persona antes que cosa." },
          { source: "No regalen (flores) (a la tía).", instruction: "Mantén el imperativo negativo.", answers: ["No se las regalen."], why: "Después de «no», delante del verbo." }
        ]
      },
      {
        id: "b1-18-practica-escritura-guiada",
        type: "open",
        title: "Mensajes breves",
        prompt: "Escribe cada mensaje en dos o tres frases.",
        items: [
          {
            prompt: "Escribe en el grupo familiar qué decidió la mayoría sobre una comida y cuántas personas había.",
            model: "Ayer en la reunión había doce personas. La mayoría de los primos votaron por hacer el almuerzo en el campo, y la familia de Sol decidió llevar las bebidas.",
            checklist: ["Usas «haber» en singular para decir cuántas personas había.", "Concuerdas bien «la mayoría de…» y un colectivo solo."]
          },
          {
            prompt: "Pide a tus primos que no le cuenten un secreto a alguien y explica cuándo se lo vas a contar tú.",
            model: "Por favor, no se lo cuenten a mamá todavía. Se lo voy a decir yo el domingo, cuando estemos solas.",
            checklist: ["Usas «no se lo» + imperativo negativo.", "Usas dos pronombres con una perífrasis, delante o pegados al infinitivo."]
          },
          {
            prompt: "Describe a una persona de tu familia con dos adjetivos de la semana: uno con «ser» y otro con «estar».",
            model: "Mi hermana es muy lista: aprende cualquier idioma en pocos meses. Ahora está aburrida porque está de vacaciones y no tiene nada que hacer.",
            checklist: ["Usas un adjetivo de la tabla con «ser» y otro con «estar».", "El contexto deja claro el significado de cada uno."]
          }
        ]
      }
    ]
  },
  writing: {
    task: "Organizaste o fuiste a una celebración familiar o entre amigos (un cumpleaños, una boda, una despedida). Escribe una crónica breve para quienes no pudieron ir: cuántas personas había, qué decidió el grupo, cómo estaba la comida y cómo era el ambiente, y quién le dio qué a quién.",
    context: "La crónica se va a leer en un grupo de mensajes o en un boletín, y algunos lectores no conocen a todos los invitados.",
    steps: [
      "Anota los datos: número de personas, una decisión del grupo, la comida, un regalo y una anécdota.",
      "Primer párrafo: quiénes y cuántos fueron y qué decidió la mayoría, con la concordancia correcta.",
      "Segundo párrafo: la comida, las personas (con adjetivos de «ser» y «estar») y el momento del regalo, con dos pronombres juntos.",
      "Revisa cada «había», «la gente», «cada uno» y «ni… ni», comprueba el orden de los pronombres y corrige los adjetivos si el verbo no dice lo que quieres."
    ],
    useLanguage: [
      "había / hubo + plural",
      "la mayoría / la mitad / un grupo de + plural",
      "ni… ni + verbo en plural",
      "se lo / se la / me lo + verbo",
      "es listo / está listo, es rico / está rico"
    ],
    model: [
      "El sábado celebramos los sesenta años de mi tía Marta en una quinta de las afueras. Había casi cincuenta personas: la familia, sus compañeros de trabajo y un grupo de amigas de la infancia que vinieron desde Rosario. Durante la semana, la mayoría de los primos votó por un almuerzo en lugar de una cena, y la familia de mi tío decidió hacer el asado. Ni mi tía ni su marido sabían nada.",
      "El asado estaba riquísimo y la torta, de chocolate y dulce de leche, desapareció en diez minutos. Mi primo Lucas, que es muy aburrido en las reuniones, esa tarde estaba contentísimo y bailó con todos. A las cinco le dimos el regalo, un viaje a las sierras: se lo dimos dentro de una caja enorme llena de globos. Mi tía estaba tan sorprendida que no pudo hablar."
    ],
    checklist: [
      "Uso «había» o «hubo» en singular y concuerdo bien los colectivos y las cantidades.",
      "Uso al menos un «ni… ni» o un sujeto coordinado con el verbo correcto.",
      "Uso dos pronombres juntos en su orden y en su lugar.",
      "Uso al menos dos adjetivos que cambian de significado, con el verbo adecuado.",
      "La crónica tiene dos párrafos y se entiende sin conocer a los invitados."
    ],
    words: [130, 180]
  },
  speaking: {
    intro: "Graba tus respuestas y escúchate: comprueba la fuerza de los verbos con pronombres pegados y la concordancia de cada «había».",
    tasks: [
      {
        title: "Una celebración que organizaste",
        prompt: "Habla durante dos minutos de una celebración que organizaste o en la que ayudaste: cuántas personas había, qué decidió el grupo, quién se encargó de cada cosa, cómo estaba todo y qué regalo le dieron a la persona homenajeada y cómo se lo dieron.",
        prep: [
          "Dos frases con colectivos o cantidades: «la mayoría de…», «la gente…».",
          "Dos frases con dos pronombres: «se lo dimos», «vamos a dárselo».",
          "Dos adjetivos con «ser» y «estar» que cambian de significado."
        ],
        seconds: 120,
        model: "El año pasado organicé la despedida de mi compañera Laura, que se iba a vivir a Chile. Había unas treinta personas, y la mayoría del equipo prefirió una cena en un restaurante. Mi amigo Pablo y yo nos encargamos del regalo: un álbum de fotos. Se lo dimos al final, y Laura, que es muy seria, se puso a llorar…",
        selfCheck: [
          "¿He hablado al menos dos minutos?",
          "¿He dicho «había» y no «habían»?",
          "¿He colocado bien los pronombres juntos?"
        ]
      },
      {
        title: "El primo que no sabe guardar secretos",
        prompt: "Un primo quiere contarle la sorpresa al homenajeado. Habla con él: responde a sus preguntas («¿Por qué no se lo puedo decir?»), aclara el plan y negocia qué puede hacer él para ayudar sin contar nada. Practica con alguien que haga de interlocutor o graba las dos voces.",
        prep: [
          "Usa «no se lo digas» y «se lo vamos a decir…».",
          "Ofrece una tarea con «¿Por qué no te encargas de…?»."
        ],
        seconds: 90,
        model: "—¿Por qué no se lo puedo decir? —Porque es una sorpresa: se lo vamos a contar el sábado, en el brindis. No se lo digas, por favor. ¿Por qué no te encargas de la música? Así estás ocupado y no piensas en el secreto…",
        selfCheck: [
          "¿He respondido a sus preguntas y aclarado el plan?",
          "¿He propuesto una tarea concreta?"
        ]
      }
    ]
  },
  useInClass: {
    intro: "Lleva tu crónica y estas tarjetas a la próxima clase con tu profesor.",
    cards: [
      { move: "Describe", task: "Describe a tu profesor a dos personas de tu entorno con adjetivos de la semana y pídele que adivine si usaste «ser» o «estar».", phrases: ["Es muy…", "Hoy está…"] },
      { move: "Informa", task: "Informa a tu profesor de una votación o una reunión reciente: cuántas personas había y qué decidió la mayoría.", phrases: ["Había…", "La mayoría de…"] },
      { move: "Responde", task: "Responde a las preguntas de tu profesor sobre regalos y favores sin repetir ningún nombre: solo con dos pronombres.", phrases: ["Sí, se lo di.", "No, todavía no me lo devolvió."] },
      { move: "Reacciona", task: "Escucha la anécdota de tu profesor y reacciona con un adjetivo de la semana.", phrases: ["¡Qué listo!", "Estarías orgulloso de…"] }
    ],
    bring: "Tu crónica revisada y la grabación de la celebración."
  },
  quiz: {
    items: [
      { type: "choice", q: "Quieres decir que una película te aburrió: «La película ___ muy aburrida».", options: ["estaba", "era", "estuvo"], answer: 1, why: "Aburre a los demás: «ser aburrido»." },
      { type: "choice", q: "¿Qué frase sobre la reunión de vecinos es incorrecta?", options: ["La mitad de los vecinos votaron que sí.", "Había veinte vecinos en la sala.", "La gente estaban contentos con el resultado."], answer: 2, why: "«La gente», sola, va en singular: «estaba contenta»." },
      { type: "listen", q: "Escucha. ¿Qué quiere decir la persona?", options: ["Que el niño es inteligente.", "Que el niño no se ha dormido.", "Que el niño es muy rápido corriendo."], answer: 1, why: "«Estar despierto»: no dormir.", audio: "Son las doce y el nene todavía está despierto.", voice: "es-AR-f" },
      { type: "gap", q: "(¿Le devolviste el libro a Inés?) — Sí, ya ___ ___ devolví.", answers: [["se"], ["lo"]], why: "«Le» + «lo» → «se lo»." },
      { type: "gap", q: "(Tienes que enseñarme las fotos.) → Tienes que ___.", answers: [["enseñármelas"]], why: "«Me» + «las», pegados al infinitivo con tilde." },
      { type: "gap", q: "En el cumpleaños ___ (haber) más de treinta niños.", answers: [["hubo", "había"]], why: "«Haber» de existencia: siempre singular." },
      { type: "order", words: ["Ni", "mi", "padre", "ni", "mi", "tío", "vinieron", "a", "la", "cena."], why: "«Ni… ni» delante del verbo: plural." },
      { type: "error", sentence: "Estamos muy orgullosos por nuestra hija.", answers: ["Estamos muy orgullosos de nuestra hija."], why: "«Estar orgulloso de»." },
      { type: "error", sentence: "Cada uno de los alumnos traen su propio almuerzo.", answers: ["Cada uno de los alumnos trae su propio almuerzo."], why: "«Cada uno»: singular." },
      {
        type: "open",
        prompt: "Reformulación: reescribe esta nota sin repetir nombres y con la concordancia correcta. Nota: «Habían veinte personas. La gente querían regalarle un libro a Ana. Le dimos el libro a Ana el lunes. Ana estaba muy contenta con el libro.»",
        model: "Había veinte personas. La gente quería regalarle un libro a Ana, y se lo dimos el lunes. Estaba muy contenta con él.",
        checklist: [
          "Corriges «habían» por «había» y «la gente querían» por «quería».",
          "Sustituyes «le… el libro a Ana» por «se lo».",
          "No repites «Ana» ni «el libro» sin necesidad.",
          "El texto se entiende igual que la nota original."
        ]
      }
    ]
  },
  complete: {
    canNow: [
      "Elegir «ser» o «estar» con adjetivos que cambian de significado: listo, rico, aburrido, malo, verde, despierto, atento, seguro.",
      "Combinar dos pronombres en su orden («se lo», «te la») y colocarlos con cualquier forma verbal, con tilde cuando van pegados.",
      "Concordar el verbo con colectivos, cantidades, «cada uno», «ni… ni» y sujetos coordinados.",
      "Usar «haber» de existencia siempre en singular: había, hubo, va a haber."
    ],
    review: [
      "Los pronombres de objeto directo e indirecto de A2: lo, la, le, se lo.",
      "El «se» impersonal y el discurso referido de la semana 16.",
      "«Estar» + participio de la semana 17."
    ]
  },
  related: [
    { path: "/gramatica/ser-y-estar-con-adjetivos-que-cambian-de-significado", label: "Clase: Ser y estar con adjetivos que cambian de significado" },
    { path: "/gramatica/orden-de-pronombres-y-cliticos-mas", label: "Clase: Orden de pronombres y clíticos más complejo" },
    { path: "/gramatica/concordancia-compleja-con-colectivos-y-cantidades", label: "Clase: Concordancia compleja con colectivos y cantidades" }
  ]
};
