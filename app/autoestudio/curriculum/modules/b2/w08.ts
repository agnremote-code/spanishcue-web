import type { Module } from "../../types";

/**
 * B2 · semana 8 · Autoestudio espejo de G141 (subordinadas modales y
 * comparativas irreales) y G142 (relativos con preposición). Repaso autónomo
 * con un taller familiar de tejido en telar de San Luis que prepara un encargo.
 * Personas y taller son ficticios. Audio mediante síntesis.
 */
export const b2w08: Module = {
  id: "b2-08",
  level: "b2",
  week: 8,
  kind: "core",
  title: "Tal como lo aprendimos: el telar con el que tejemos",
  subtitle: "Repaso de cómo decir la manera de hacer algo, de las comparaciones con lo esperado y con lo imaginado, y de los relativos que llevan preposición",
  stop: { place: "San Luis", country: "Argentina" },
  minutes: 120,
  newObjectives: [
    "b2.gram.g141",
    "b2.gram.g142",
    "b2.voc.w08-telar-oficio",
    "b2.pron.w08-grupo-relativo",
    "b2.lis.w08-taller-telar",
    "b2.read.w08-reportaje-tejedoras",
    "b2.wri.w08-quienes-somos",
    "b2.spk.w08-presentar-oficio",
    "b2.fun.w08-describir-proceso",
    "b2.disc.w08-precisar-referentes",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo explicar cómo se hace algo y comparar el resultado con lo esperado o con lo imaginado, e identificar con precisión personas, lugares y objetos con relativos precedidos de preposición.",
    steps: [
      "Repasa en la teoría «como», «según» y «tal como» con indicativo o subjuntivo, y las comparaciones con «de lo que» e «igual que si».",
      "Repasa los relativos con preposición: la preposición que pide el verbo va delante y el artículo concuerda.",
      "Escucha la visita de una compradora a un taller de telar y lee un reportaje sobre tejedoras de San Luis.",
      "Escribe la presentación de un taller, revísala y preséntala en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste cómo hablar de la manera de hacer algo, cómo comparar con lo que esperabas o con algo irreal y cómo no perder la preposición en una relativa. Aquí lo repasas en un taller de tejido de San Luis, donde casi todo se hace «como lo hacía la abuela» y casi nada sale como uno lo calculó.",
    parts: [
      {
        heading: "¿Cómo se hace? Manera conocida o manera abierta",
        body: [
          "«Como», «según», «tal como», «tal y como» y «de la manera que» introducen la manera de hacer algo. Si esa manera ya existe y la conoces (alguien la explicó, está en un plano, es la costumbre), usas indicativo. Si todavía está abierta y la decide otra persona, usas subjuntivo: «Lo tejemos como usted quiera».",
          "«Según» añade a veces la idea de dependencia: «Teñimos la lana según esté el tiempo» significa que el resultado depende de algo que todavía no sabemos. Con indicativo, «según» también indica la fuente de una información: «Según me contó mi tía, el poncho era de su padre».",
        ],
        table: {
          caption: "La misma palabra, dos modos",
          head: ["Conector", "Manera conocida (indicativo)", "Manera abierta (subjuntivo)"],
          rows: [
            ["como", "Lo urdimos como nos enseñó doña Elsa.", "Lo urdimos como te resulte más cómodo."],
            ["según", "Lo cortamos según indica el patrón.", "Lo cortamos según decida la clienta."],
            ["tal como", "Lo dejé tal como estaba.", "Déjalo tal como prefieras."],
          ],
        },
        examples: [
          { es: "Repetimos el dibujo tal como aparece en la foto de 1950.", note: "El modelo existe: indicativo." },
          { es: "Pongan los flecos como les parezca mejor.", note: "La decisión es de otros: subjuntivo." },
        ],
        tip: "Pregúntate: ¿puedo señalar esa manera (una foto, una explicación, una costumbre)? Si puedes, indicativo.",
      },
      {
        heading: "Comparar con una idea: «de lo que», «del que», «de la que»",
        body: [
          "Cuando comparas con una idea o una expectativa, no con otra cosa concreta, usas «de lo que»: «El encargo llevó más tiempo de lo que pensábamos». Si lo que comparas es un sustantivo, el artículo concuerda con él: «más lana de la que compramos», «menos ovillos de los que hacían falta», «más trabajo del que imaginaba».",
          "Después de «de lo que» puedes usar indicativo si la expectativa es concreta («de lo que calculamos») o subjuntivo si es abierta e indeterminada («va a quedar mejor de lo que te imagines»). Recuerda que «más que» compara dos elementos («teje más que su hermana»), no una idea.",
        ],
        table: {
          caption: "Concordancia en la comparación",
          head: ["Lo que se compara", "Estructura", "Ejemplo"],
          rows: [
            ["una idea o un adjetivo", "de lo que", "La pieza quedó más pesada de lo que esperaba."],
            ["sustantivo masculino singular", "del que", "Usamos más hilo del que teníamos."],
            ["sustantivo femenino singular", "de la que", "Hizo falta más paciencia de la que creíamos."],
            ["sustantivo en plural", "de los que / de las que", "Vinieron menos compradores de los que se anotaron."],
          ],
        },
        mistakes: [
          {
            wrong: "El telar nuevo es más rápido que pensábamos.",
            right: "El telar nuevo es más rápido de lo que pensábamos.",
            why: "Se compara con una idea, no con otro elemento: «de lo que».",
          },
          {
            wrong: "Compramos más lana de lo que necesitábamos.",
            right: "Compramos más lana de la que necesitábamos.",
            why: "Cuando hay un sustantivo, el artículo concuerda con él: «lana» → «de la que».",
          },
        ],
      },
      {
        heading: "Comparar con lo irreal: «como si», «igual que si», «tanto como si»",
        body: [
          "En la semana 5 repasaste «como si» + imperfecto o pluscuamperfecto de subjuntivo. La misma idea de comparación con algo que no es real se expresa con «igual que si», «lo mismo que si», «tanto como si» o «más que si». Detrás va siempre imperfecto de subjuntivo (simultáneo) o pluscuamperfecto (anterior), nunca presente.",
          "Así puedes valorar un resultado con fuerza: «El tapiz quedó igual que si lo hubiera tejido mi abuela».",
        ],
        examples: [
          { es: "Cuida el telar tanto como si fuera de oro.", note: "Comparación irreal simultánea: imperfecto de subjuntivo." },
          { es: "La lana teñida con jarilla quedó igual que si la hubiéramos comprado en una tienda.", note: "Comparación con algo anterior que no ocurrió: pluscuamperfecto." },
        ],
        mistakes: [
          {
            wrong: "Habla del poncho como si sea una joya.",
            right: "Habla del poncho como si fuera una joya.",
            why: "Tras «como si» nunca va presente de subjuntivo.",
          },
        ],
      },
      {
        heading: "La preposición viaja con el relativo",
        body: [
          "Si el verbo de la relativa pide una preposición (hablar con, aprender de, confiar en, depender de, referirse a), esa preposición va delante del relativo: «la tejedora de la que aprendí», nunca «la tejedora que aprendí de». Para encontrarla, vuelve a la frase original: «Aprendí de esa tejedora».",
          "Después de la preposición usa «el que, la que, los que, las que» (el artículo concuerda con el antecedente) o «quien, quienes» si hablas de personas, siempre sin artículo. En registro formal aparecen también «el cual, la cual». Para lugares, «en el que» y «donde» suelen ser intercambiables.",
        ],
        table: {
          caption: "Del verbo a la relativa",
          head: ["Frase original", "Relativa"],
          rows: [
            ["Trabajo con este telar.", "el telar con el que trabajo"],
            ["Aprendí de esa maestra.", "la maestra de quien / de la que aprendí"],
            ["Vendemos a esas tiendas.", "las tiendas a las que vendemos"],
            ["Confiamos en esos proveedores.", "los proveedores en los que / en quienes confiamos"],
            ["El precio depende del tamaño.", "el tamaño del que depende el precio"],
          ],
        },
        mistakes: [
          {
            wrong: "Esa es la feria que vamos todos los años.",
            right: "Esa es la feria a la que vamos todos los años.",
            why: "Se dice «ir a la feria»: la preposición «a» no puede desaparecer.",
          },
          {
            wrong: "Es la artesana con la quien hablé.",
            right: "Es la artesana con quien hablé.",
            why: "«Quien» nunca lleva artículo: «con quien» o «con la que».",
          },
        ],
        tip: "Si dudas, deshaz la relativa y di la frase original en voz alta: la preposición aparece sola.",
      },
    ],
  },
  grammar: {
    intro: "Primero decide si la manera es conocida o abierta y con qué comparas; después, busca la preposición que pide el verbo. Al final, reformula con libertad.",
    exercises: [
      {
        id: "b2-08-gramatica-manera",
        type: "context",
        prompt: "Lee la situación y elige la frase adecuada.",
        items: [
          {
            context: "Joaquín muestra a un cliente una foto del diseño original del poncho.",
            q: "¿Qué dice?",
            options: [
              "Lo vamos a tejer tal como esté en la foto.",
              "Lo vamos a tejer tal como está en la foto.",
              "Lo vamos a tejer tal como estaría en la foto.",
            ],
            answer: 1,
            why: "El modelo existe y se puede señalar: indicativo.",
          },
          {
            context: "La clienta todavía no ha decidido el color de los flecos.",
            q: "¿Qué le dice la tejedora?",
            options: [
              "Los flecos los hacemos como usted decida.",
              "Los flecos los hacemos como usted decide.",
              "Los flecos los hacemos como usted decidirá.",
            ],
            answer: 0,
            why: "La manera está abierta y la decide otra persona: subjuntivo.",
          },
          {
            context: "El encargo necesitó doce ovillos; habían calculado nueve.",
            q: "¿Qué frase lo describe bien?",
            options: [
              "Usamos más ovillos que calculamos.",
              "Usamos más ovillos de lo que calculamos.",
              "Usamos más ovillos de los que calculamos.",
            ],
            answer: 2,
            why: "Se compara un sustantivo plural masculino: «de los que».",
          },
          {
            context: "Una visitante admira un tapiz recién terminado que parece antiguo.",
            q: "¿Qué comenta?",
            options: [
              "Parece igual que si lo hubieran tejido hace cien años.",
              "Parece igual que si lo han tejido hace cien años.",
              "Parece igual que si lo tejan hace cien años.",
            ],
            answer: 0,
            why: "Comparación irreal con algo anterior: pluscuamperfecto de subjuntivo.",
          },
        ],
      },
      {
        id: "b2-08-gramatica-relativos",
        type: "gap",
        prompt: "Completa con preposición + relativo. Piensa en el verbo y en el antecedente.",
        items: [
          { q: "Esta es la lana ___ tejimos el chal de la novia. (tejer con)", answers: [["con la que", "con la cual"]], why: "«Tejer con la lana»: «con la que»." },
          { q: "Doña Elsa es la persona ___ aprendimos todo. (aprender de)", answers: [["de quien", "de la que", "de la cual"]], why: "«Aprender de alguien»; con personas sirve también «quien»." },
          { q: "Son los clientes ___ siempre podemos confiar. (confiar en)", answers: [["en los que", "en quienes", "en los cuales"]], why: "«Confiar en»: la preposición va delante." },
          { q: "Es el detalle ___ depende el precio final. (depender de)", answers: [["del que", "del cual"]], why: "«Depender del detalle»: «de» + «el que» = «del que»." },
          { q: "La tienda de Valencia ___ mandamos los ponchos abrió en 2019. (mandar a)", answers: [["a la que", "a la cual"]], why: "«Mandar algo a la tienda»." },
          { q: "La clienta habló de un diseño ___ nadie se acordaba. (acordarse de)", answers: [["del que", "del cual"]], why: "«Acordarse de un diseño»." },
        ],
      },
      {
        id: "b2-08-gramatica-comparar",
        type: "classify",
        prompt: "Clasifica cada frase según con qué se compara.",
        categories: ["Con una expectativa (de lo que, del que…)", "Con algo irreal (como si, igual que si…)"],
        items: [
          { text: "La feria fue más concurrida de lo que esperábamos.", cat: 0, why: "Se compara con una expectativa." },
          { text: "Lo envolvió tanto como si fuera de cristal.", cat: 1, why: "Comparación con una situación irreal." },
          { text: "Vendimos menos mantas de las que llevamos.", cat: 0, why: "Comparación con una cantidad prevista." },
          { text: "Nos trató igual que si nos conociera de toda la vida.", cat: 1, why: "«Igual que si» + imperfecto de subjuntivo." },
          { text: "El tinte de cebolla dio un color más intenso del que buscábamos.", cat: 0, why: "«Del que» concuerda con «color»." },
          { text: "Siguió tejiendo lo mismo que si no hubiera oído nada.", cat: 1, why: "«Lo mismo que si» + pluscuamperfecto." },
        ],
      },
      {
        id: "b2-08-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error. Corrígelo.",
        items: [
          {
            sentence: "Ese es el telar que mi abuela trabajaba con.",
            answers: ["Ese es el telar con el que trabajaba mi abuela.", "Ese es el telar con el que mi abuela trabajaba."],
            why: "En español la preposición no queda al final: va delante del relativo.",
          },
          {
            sentence: "El chal salió más caro que pensábamos.",
            answers: ["El chal salió más caro de lo que pensábamos."],
            why: "Comparación con una idea: «de lo que».",
          },
          {
            sentence: "Usamos menos tinta de lo que compramos.",
            answers: ["Usamos menos tinta de la que compramos."],
            why: "Con sustantivo femenino singular: «de la que».",
          },
          {
            sentence: "Las vecinas a las quienes vendemos son muy exigentes.",
            answers: ["Las vecinas a quienes vendemos son muy exigentes.", "Las vecinas a las que vendemos son muy exigentes."],
            why: "«Quienes» no lleva artículo.",
          },
        ],
      },
      {
        id: "b2-08-gramatica-reformular",
        type: "open",
        prompt: "Reformula cada texto. Compara con el modelo y revisa la lista: puede haber otras soluciones correctas.",
        items: [
          {
            prompt: "Texto de partida: «Mi tía me habló de una tejedora. Esa tejedora vive en Villa de Merlo.» Une las dos frases con un relativo preposicional.",
            model: "La tejedora de la que me habló mi tía vive en Villa de Merlo.",
            checklist: [
              "La preposición «de» va delante del relativo.",
              "El artículo concuerda con «tejedora» o uso «de quien».",
              "Puedo elegir otro orden: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «Pensábamos terminar en dos semanas. Tardamos cinco.» Reformúlalo en una sola frase con una comparación con la expectativa.",
            model: "Tardamos mucho más de lo que pensábamos: cinco semanas en lugar de dos.",
            checklist: [
              "Uso «de lo que» para comparar con la expectativa.",
              "El verbo de la expectativa está en un pasado coherente.",
              "Otra comparación con «más tiempo del que» también vale: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «La clienta quiere decidir el tamaño. Haremos la manta con ese tamaño.» Reformúlalo con «como» o «según» dejando la decisión abierta.",
            model: "Haremos la manta del tamaño que la clienta quiera, según lo que decida cuando la llamemos.",
            checklist: [
              "La manera o la medida queda abierta: uso subjuntivo.",
              "Queda claro quién decide.",
              "Puedo usar «como prefiera» u otra fórmula: no es una respuesta única.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de un taller de tejido y del trabajo artesanal.",
    groups: [
      {
        title: "El telar y la lana",
        items: [
          { es: "el telar criollo", note: "telar de madera tradicional del noroeste y el centro de Argentina" },
          { es: "urdir", note: "preparar los hilos largos del tejido antes de empezar" },
          { es: "la urdimbre", note: "conjunto de hilos que van a lo largo del tejido" },
          { es: "la trama", note: "hilos que cruzan la urdimbre de un lado a otro" },
          { es: "el ovillo", note: "bola de hilo o de lana" },
          { es: "teñir con tintes naturales", note: "dar color con plantas, raíces o cortezas" },
          { es: "hilar", note: "convertir la lana en hilo" },
        ],
      },
      {
        title: "El oficio y el encargo",
        items: [
          { es: "el encargo", note: "pieza que un cliente pide y que se hace a medida" },
          { es: "la pieza única", note: "objeto del que no existe otro igual" },
          { es: "el oficio", note: "trabajo manual que se aprende con práctica" },
          { es: "transmitir un saber", note: "enseñar algo de una generación a otra" },
          { es: "a mano", note: "hecho sin máquinas" },
          { es: "quedar como nuevo", note: "recuperar el aspecto original" },
          { es: "llevar tiempo", note: "necesitar muchas horas o días" },
        ],
      },
    ],
    exercises: [
      {
        id: "b2-08-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada palabra con su definición.",
        pairs: [
          { left: "urdir", right: "preparar los hilos largos antes de tejer" },
          { left: "la trama", right: "hilos que cruzan la urdimbre" },
          { left: "el encargo", right: "pieza que pide un cliente a medida" },
          { left: "hilar", right: "convertir la lana en hilo" },
          { left: "la pieza única", right: "objeto del que no existe otro igual" },
          { left: "transmitir un saber", right: "enseñarlo de una generación a otra" },
        ],
      },
      {
        id: "b2-08-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada.",
        bank: ["tintes naturales", "lleva tiempo", "telar criollo", "ovillo"],
        items: [
          { q: "El ___ en el que tejemos lo construyó mi bisabuelo.", answers: [["telar criollo"]] },
          { q: "Teñimos con ___: la jarilla da amarillo y la cáscara de nuez, marrón.", answers: [["tintes naturales"]] },
          { q: "Un poncho grande ___: casi dos meses de trabajo.", answers: [["lleva tiempo"]] },
          { q: "Se le cayó el ___ y rodó debajo de la mesa.", answers: [["ovillo"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El grupo «preposición + relativo» va sin acento propio",
    explanation: [
      "En «la lana con la que tejemos», las palabras «con la que» no llevan acento propio: se pronuncian rápidas y unidas a la sílaba fuerte del verbo, «con-la-que-te-JE-mos». Lo mismo pasa con «de quien», «en el que», «a las que». El acento fuerte cae en el sustantivo antecedente y en el verbo.",
      "Por eso no hay pausa después de la preposición. Si dices «la lana con… la que tejemos», suena a que buscas la palabra. La pausa natural, si hace falta, va antes de la preposición o al final de la relativa.",
      "Ten en cuenta que «quien» y «que» relativos no llevan tilde y son átonos; los interrogativos «quién» y «qué», sí la llevan y son tónicos. El audio usa la síntesis del navegador: no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Átono o tónico",
      head: ["Relativo (átono, sin tilde)", "Interrogativo (tónico, con tilde)"],
      rows: [
        ["la maestra de quien aprendí", "¿De quién aprendiste?"],
        ["el telar con el que tejo", "¿Con qué tejes?"],
        ["la feria a la que vamos", "¿A qué feria vamos?"],
      ],
    },
    perceive: {
      id: "b2-08-percepcion",
      type: "listen",
      prompt: "Escucha y decide si la palabra es un relativo átono o un interrogativo tónico.",
      items: [
        {
          q: "¿Qué oyes?",
          options: ["una relativa: «de quien», átono", "una pregunta: «¿de quién?», tónico"],
          answer: 1,
          why: "La entonación de pregunta y el acento en «quién» indican un interrogativo.",
          audio: "¿De quién aprendiste a tejer así?",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué oyes?",
          options: ["una relativa: «de quien», átono", "una pregunta: «¿de quién?», tónico"],
          answer: 0,
          why: "«De quien» se une al verbo sin acento: es una relativa.",
          audio: "Mi abuela es la persona de quien aprendí a tejer.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué oyes?",
          options: ["afirmación con relativa", "pregunta con interrogativo"],
          answer: 0,
          why: "Entonación descendente y «con el que» átono: afirmación con relativa.",
          audio: "Este es el telar con el que tejía mi abuelo.",
          voice: "es-AR-m",
        },
        {
          q: "¿Dónde cae el acento más fuerte?",
          options: ["en «la que»", "en «vamos»", "en «a»"],
          answer: 1,
          why: "«A la que» es átono; el acento fuerte cae en el verbo: «VA-mos».",
          audio: "Es la feria a la que vamos cada mayo.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "Esta es la lana con la que tejemos los ponchos.", tip: "Une «con la que tejemos» sin pausa; acento en «la-NA» y «te-JE-mos».", voice: "es-AR-f" },
      { text: "Doña Elsa es la maestra de quien aprendimos todo.", tip: "«De quien» sin acento, pegado a «aprendimos».", voice: "es-AR-m" },
      { text: "¿De quién aprendiste a teñir con jarilla?", tip: "Ahora sí: «quién» tónico y entonación de pregunta.", voice: "es-ES-f" },
      { text: "Quedó más bonito de lo que imaginábamos.", tip: "«De lo que» átono; sube en «bonito» y baja al final.", voice: "es-AR-f" },
    ],
    spelling: "Relativos sin tilde: que, quien, cual, donde. Interrogativos y exclamativos con tilde: qué, quién, cuál, dónde. «Según» lleva tilde siempre.",
  },
  listening: {
    title: "Una compradora en el taller",
    context: "En un taller familiar de San Luis, la tejedora Elsa Lucero y su nieto Joaquín reciben a Teresa, que tiene una tienda de artesanía en Valencia y quiere hacer un encargo. Escucha primero sin transcripción. Las voces son sintéticas.",
    speakers: [
      { id: "e", name: "Elsa", voice: "es-AR-f", role: "Maestra tejedora" },
      { id: "j", name: "Joaquín", voice: "es-AR-m", role: "Nieto de Elsa, lleva las ventas" },
      { id: "t", name: "Teresa", voice: "es-ES-f", role: "Dueña de una tienda en Valencia" },
    ],
    script: [
      { speaker: "j", text: "Bienvenida, Teresa. Este es el taller del que le hablé por correo. Y este es el telar con el que mi abuela teje desde hace cincuenta años." },
      { speaker: "t", text: "Es más grande de lo que me imaginaba. ¿Lo construyeron ustedes?" },
      { speaker: "e", text: "Lo hizo mi padre, con madera de algarrobo. Yo tejo tal como me enseñó mi madre, que a su vez aprendió de una señora de Renca a quien nunca conocí." },
      { speaker: "t", text: "Qué bonito. Les cuento lo que busco: unas veinte mantas para la tienda, con colores naturales. Mis clientes valoran mucho las piezas de las que se conoce el origen." },
      { speaker: "j", text: "Perfecto. Los colores dependen de las plantas con las que teñimos, y eso cambia según la estación. En invierno la jarilla da un amarillo más apagado." },
      { speaker: "t", text: "No me importa. Háganlas como les salgan; prefiero que cada una sea distinta." },
      { speaker: "e", text: "Eso me gusta. El año pasado hicimos un encargo para una tienda de Córdoba y nos llevó más tiempo del que calculamos: tuvimos que hilar más lana de la que teníamos." },
      { speaker: "j", text: "Por eso le proponemos un plazo de tres meses. Las medidas las fijamos según usted nos diga, y antes de empezar le mandamos fotos de las muestras." },
      { speaker: "t", text: "Me parece razonable. ¿Y el precio? Es el detalle del que depende todo para mí." },
      { speaker: "j", text: "Le pasamos un presupuesto esta semana. Ya verá que es menos caro de lo que piensa, porque no hay intermediarios." },
      { speaker: "t", text: "Estupendo. Y doña Elsa, gracias: me ha explicado el oficio como si me conociera de toda la vida." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin transcripción. ¿Qué quiere Teresa y qué le proponen?",
        exercise: {
          id: "b2-08-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación.",
          items: [
            {
              q: "¿Para qué visita Teresa el taller?",
              options: [
                "Para aprender a tejer en telar.",
                "Para encargar mantas para su tienda.",
                "Para vender lana a la familia Lucero.",
              ],
              answer: 1,
              why: "Busca unas veinte mantas con colores naturales para su tienda de Valencia.",
            },
            {
              q: "¿Qué acuerdan en general?",
              options: [
                "Un plazo de tres meses, medidas según Teresa y un presupuesto esta semana.",
                "Entregar las mantas en dos semanas al mismo precio que en Córdoba.",
                "Que todas las mantas sean exactamente iguales.",
              ],
              answer: 0,
              why: "Joaquín propone tres meses, fija las medidas según lo que diga Teresa y promete el presupuesto.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "b2-08-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿De quién aprendió a tejer la madre de Elsa?",
              options: [
                "De su propio padre, que construyó el telar.",
                "De una tienda de Córdoba.",
                "De una señora de Renca a quien Elsa no conoció.",
              ],
              answer: 2,
              why: "«…aprendió de una señora de Renca a quien nunca conocí».",
            },
            {
              q: "¿Por qué cambian los colores?",
              options: [
                "Porque dependen de las plantas y de la estación.",
                "Porque Teresa los pide distintos cada mes.",
                "Porque compran la lana teñida.",
              ],
              answer: 0,
              why: "«Los colores dependen de las plantas con las que teñimos… según la estación».",
            },
            {
              q: "¿Qué pasó con el encargo de Córdoba?",
              options: [
                "Lo cancelaron por el precio.",
                "Tardaron más de lo previsto porque les faltó lana.",
                "Lo terminaron antes de lo previsto.",
              ],
              answer: 1,
              why: "«Nos llevó más tiempo del que calculamos: tuvimos que hilar más lana de la que teníamos».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en la forma de cada fragmento. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "b2-08-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con lo que hace.",
          pairs: [
            { left: "tal como me enseñó mi madre", right: "manera conocida: indicativo" },
            { left: "como les salgan", right: "manera abierta: subjuntivo" },
            { left: "más tiempo del que calculamos", right: "comparación con una expectativa y concordancia" },
            { left: "como si me conociera de toda la vida", right: "comparación con algo irreal" },
            { left: "el detalle del que depende todo", right: "relativo con la preposición que pide el verbo" },
          ],
          why: "Manera, comparación y relativo: en cada caso la forma depende de lo que se conoce y de lo que pide el verbo.",
        },
      },
    ],
  },
  reading: {
    title: "Hilos que vienen de lejos",
    genre: "Reportaje de revista",
    frame: "Reportaje publicado en una revista de viajes y cultura sobre un taller de tejido en San Luis. Personas y taller son ficticios.",
    text: [
      "A media hora de la capital de San Luis, en una casa de adobe con galería, Elsa Lucero teje todas las mañanas desde que tenía doce años. El telar en el que trabaja ocupa media habitación y cruje cada vez que ella pasa la lanzadera. «Lo hizo mi padre con madera de algarrobo», cuenta, «y está mejor que muchos telares nuevos que he visto».",
      "Elsa no estudió el oficio en ninguna escuela. Lo aprendió de su madre, quien a su vez lo había aprendido de una vecina de Renca de la que hoy solo se conserva una fotografía. Por eso, cuando alguien le pregunta por el método, la respuesta es siempre la misma: «Lo hago tal como me lo enseñaron». Urde los hilos en el patio, tiñe la lana con plantas de la sierra y teje de la manera que se tejía hace un siglo.",
      "Sin embargo, no todo en el taller es tradición. Su nieto Joaquín, que estudió diseño en Buenos Aires, volvió hace tres años con una idea que al principio le pareció a la familia más arriesgada de lo que podían permitirse: vender por internet. Hoy los ponchos y las mantas de los Lucero llegan a tiendas de Mendoza, Córdoba y Valencia, y las ventas crecieron mucho más de lo que nadie esperaba.",
      "El cambio trajo también problemas con los que nadie contaba. El primer encargo grande, cuarenta mantas para un hotel, les llevó el doble del tiempo previsto y necesitaron más lana de la que habían comprado. «Aprendimos a calcular», admite Joaquín, «y a explicarle al cliente que una pieza hecha a mano no se fabrica como si fuera una camiseta».",
      "Lo que no ha cambiado es la relación con los clientes. Elsa insiste en que cada comprador elija los colores como prefiera y en enviarle fotos de las muestras antes de empezar. Los compradores a los que les cuesta esperar reciben siempre la misma respuesta: la lana se tiñe según esté el tiempo, y el tiempo no se apura.",
      "Al terminar la visita, Elsa nos regala un camino de mesa con rayas de jarilla. Lo envuelve con un cuidado enorme, igual que si nos entregara una reliquia familiar. Quizá, en cierto modo, lo sea.",
    ],
    glossary: [
      { es: "la lanzadera", note: "pieza del telar que lleva el hilo de la trama de un lado a otro" },
      { es: "el adobe", note: "ladrillo de barro secado al sol" },
      { es: "el camino de mesa", note: "tela larga y estrecha que se pone en el centro de una mesa" },
    ],
    tasks: [
      {
        id: "b2-08-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el reportaje.",
        items: [
          {
            q: "¿Cómo aprendió Elsa el oficio?",
            options: [
              "En una escuela de artes de San Luis.",
              "De su madre, que lo había aprendido de una vecina de Renca.",
              "De su nieto, que estudió diseño.",
            ],
            answer: 1,
            why: "Segundo párrafo.",
          },
          {
            q: "¿Qué pensó la familia de la idea de vender por internet?",
            options: [
              "Que era más arriesgada de lo que podían permitirse.",
              "Que era la única manera de sobrevivir.",
              "Que no cambiaría nada.",
            ],
            answer: 0,
            why: "Tercer párrafo: «más arriesgada de lo que podían permitirse».",
          },
          {
            q: "¿Qué aprendieron con el encargo del hotel?",
            options: [
              "A comprar lana ya teñida.",
              "A fabricar en serie.",
              "A calcular mejor y a explicar los tiempos del trabajo a mano.",
            ],
            answer: 2,
            why: "Cuarto párrafo: «Aprendimos a calcular… y a explicarle al cliente…».",
          },
        ],
      },
      {
        id: "b2-08-lectura-clasificar",
        type: "classify",
        prompt: "Clasifica cada fragmento según lo que expresa.",
        categories: ["Manera de hacer algo", "Comparación con una expectativa o con algo irreal", "Relativo con preposición"],
        items: [
          { text: "Lo hago tal como me lo enseñaron", cat: 0, why: "«Tal como» + indicativo: manera conocida." },
          { text: "las ventas crecieron mucho más de lo que nadie esperaba", cat: 1, why: "Comparación con una expectativa." },
          { text: "problemas con los que nadie contaba", cat: 2, why: "«Contar con algo»: la preposición va delante." },
          { text: "elija los colores como prefiera", cat: 0, why: "«Como» + subjuntivo: manera abierta." },
          { text: "igual que si nos entregara una reliquia familiar", cat: 1, why: "Comparación irreal." },
          { text: "una vecina de Renca de la que hoy solo se conserva una fotografía", cat: 2, why: "«Conservarse una foto de alguien»." },
        ],
      },
      {
        id: "b2-08-lectura-interpretacion",
        type: "open",
        prompt: "Interpreta el final del reportaje.",
        items: [
          {
            prompt: "El reportaje termina con «Quizá, en cierto modo, lo sea». En 70–90 palabras, explica a qué se refiere la autora y qué idea del oficio transmite. Usa una comparación y un relativo con preposición.",
            model: "La autora sugiere que el camino de mesa es de verdad una pequeña reliquia: es una pieza en la que hay un saber de cuatro generaciones. Elsa no lo envuelve como si fuera un producto cualquiera, sino como algo con lo que transmite su historia. El oficio aparece así como una herencia más valiosa de lo que parece a simple vista, no solo como un negocio.",
            checklist: [
              "Explico a qué se refiere «lo sea».",
              "Uso una comparación con «como si» o «de lo que».",
              "Uso al menos un relativo con preposición.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el reportaje combina manera, comparación y relativos para describir el oficio.",
      items: [
        { quote: "El telar en el que trabaja ocupa media habitación", note: "«Trabajar en el telar»: la preposición va con el relativo." },
        { quote: "teje de la manera que se tejía hace un siglo", note: "Manera conocida, con indicativo." },
        { quote: "necesitaron más lana de la que habían comprado", note: "«De la que» concuerda con «lana»." },
        { quote: "la lana se tiñe según esté el tiempo", note: "«Según» + subjuntivo: depende de algo que todavía no se sabe." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, relación, una recuperación de las semanas anteriores y escritura breve.",
    exercises: [
      {
        id: "b2-08-orden",
        type: "order",
        prompt: "Ordena las palabras para formar la frase completa.",
        items: [
          { words: ["Es", "la", "maestra", "de", "quien", "aprendí", "a", "teñir."], why: "«Aprender de alguien»: «de quien»." },
          { words: ["El", "poncho", "pesa", "más", "de", "lo", "que", "parece."], why: "Comparación con una impresión: «de lo que»." },
          { words: ["Córtenlo", "como", "les", "resulte", "más", "fácil."], why: "Manera abierta: subjuntivo." },
        ],
      },
      {
        id: "b2-08-relativas-match",
        type: "match",
        prompt: "Relaciona cada principio con el final que tiene la preposición correcta.",
        pairs: [
          { left: "Esta es la clienta", right: "con la que hablé por teléfono." },
          { left: "Ese es el proveedor", right: "en el que más confiamos." },
          { left: "Esas son las ferias", right: "a las que vamos cada año." },
          { left: "Ese es el problema", right: "del que te hablé ayer." },
        ],
      },
      {
        id: "b2-08-recuperacion",
        type: "gap",
        prompt: "Recupera las semanas anteriores en el contexto del taller.",
        items: [
          { q: "Aunque el encargo nos ___ (llevar) más tiempo, lo aceptamos.", answers: [["lleve"]], why: "Concesión con posibilidad futura: subjuntivo (semana 6)." },
          { q: "En cuanto ___ (terminar) las muestras, se las mandamos a Teresa.", answers: [["terminemos"]], why: "Temporal con futuro: subjuntivo (semana 7)." },
          { q: "Le mandamos fotos para que ___ (poder) elegir los colores.", answers: [["pueda"]], why: "Finalidad con sujeto distinto (semana 7)." },
          { q: "Si ___ (tener) más lana, haríamos el encargo antes.", answers: [["tuviéramos", "tuviésemos"]], why: "Condición irreal en presente (semana 2)." },
        ],
      },
      {
        id: "b2-08-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Describe en 40–60 palabras un objeto que te importa: de quién lo recibiste, con qué está hecho y para qué lo usas. Usa al menos dos relativos con preposición.",
            model: "La taza en la que tomo el café cada mañana era de mi abuelo. Es de una cerámica con la que ya casi no se trabaja, y tiene una grieta de la que nadie conoce el origen. Mi abuelo, a quien se la pedí prestada hace años, nunca me la reclamó.",
            checklist: [
              "Uso al menos dos relativos con preposición.",
              "La preposición coincide con la que pide cada verbo.",
              "El artículo concuerda con el antecedente.",
            ],
          },
          {
            prompt: "Cuenta en 40–60 palabras algo que salió distinto de lo que esperabas. Usa «de lo que» o «del que / de la que» y una comparación irreal.",
            model: "El curso de cerámica fue mucho más difícil de lo que pensaba. Necesité más horas de las que tenía libres y rompí más piezas de las que terminé. Aun así, la profesora me trataba igual que si fuera su mejor alumna, y eso me animó a seguir.",
            checklist: [
              "Uso una comparación con la expectativa con la concordancia correcta.",
              "Uso «como si» o «igual que si» con imperfecto o pluscuamperfecto de subjuntivo.",
              "El texto cuenta una experiencia concreta.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe el texto «Quiénes somos» para la página web de un taller artesanal (200–280 palabras). Presenta a las personas que trabajan en él, explica de quién aprendieron, cómo trabajan y qué ha resultado distinto de lo que esperaban.",
    context: "El taller puede ser real o inventado: tejido, cerámica, carpintería, encuadernación, cocina tradicional. Lo leerán clientes de varios países que quieren saber el origen de lo que compran.",
    steps: [
      "Anota las personas del taller, de quién aprendió cada una y con qué herramientas o materiales trabajan.",
      "Organiza el texto en tres párrafos: origen y personas, manera de trabajar, cambios y sorpresas.",
      "Usa al menos tres relativos con preposición, dos expresiones de manera y dos comparaciones.",
      "Revisa el texto: corrige cualquier preposición que haya quedado al final o haya desaparecido y comprueba la concordancia en «del que / de la que».",
    ],
    useLanguage: [
      "la persona de quien / de la que aprendimos",
      "el material con el que trabajamos",
      "tal como / como + indicativo; como / según + subjuntivo",
      "más / menos … de lo que; más / menos + sustantivo + del que, de la que…",
      "como si / igual que si + imperfecto de subjuntivo",
      "el encargo, la pieza única, a mano, transmitir un saber",
    ],
    model: [
      "Somos tres hermanos de Paraná y trabajamos la cerámica en el mismo patio en el que jugábamos de chicos. Aprendimos el oficio de nuestra tía Nélida, una ceramista con la que pasamos todos los veranos de nuestra infancia y de quien heredamos el horno de leña que todavía usamos. Ella decía que el barro enseña más que cualquier libro, y con los años le dimos la razón.",
      "Trabajamos tal como ella nos enseñó: amasamos el barro a mano, torneamos cada pieza por separado y la dejamos secar a la sombra durante una semana. Los esmaltes los preparamos nosotros, según la tierra que traemos del río, y por eso ninguna taza sale igual a otra. Cuando alguien nos hace un encargo, elegimos juntos la forma y el color, y después lo hacemos como el cliente prefiera, aunque a veces nos sorprenda su elección.",
      "Cuando abrimos la tienda en línea, hace cuatro años, pensábamos vender algunas piezas al mes. Vendimos muchas más de las que podíamos fabricar y tuvimos que aprender a decir que no, algo que nos costó más de lo que imaginábamos. Hoy preferimos hacer menos piezas y hacerlas bien. Cada vez que mandamos un paquete, lo envolvemos igual que si fuera un regalo para alguien de la familia. Gracias por acompañarnos en este camino.",
    ],
    checklist: [
      "Uso al menos tres relativos con la preposición delante.",
      "Distingo una manera conocida (indicativo) de una abierta (subjuntivo).",
      "Comparo con una expectativa con «de lo que» o con la concordancia adecuada.",
      "Incluyo al menos una comparación irreal.",
      "El texto presenta personas, manera de trabajar y cambios en tres párrafos.",
    ],
    words: [200, 280],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Presentar un oficio en una feria",
        prompt: "Estás en tu puesto de una feria de artesanía. Presenta tu oficio a un grupo de visitantes: de quién lo aprendiste, con qué materiales trabajas, cómo haces cada pieza y qué te sorprendió al empezar.",
        prep: [
          "Anota tres relativos con preposición que vas a usar.",
          "Prepara una comparación con lo que esperabas y otra irreal.",
        ],
        seconds: 150,
        model: "Buenas tardes. Este es el telar con el que tejo desde hace veinte años. Aprendí de mi abuela, de quien heredé también la paciencia. Tiño la lana tal como ella lo hacía, con plantas de la sierra. Cuando empecé, tejer era mucho más lento de lo que imaginaba; ahora lo hago casi como si respirara.",
        selfCheck: [
          "Uso al menos tres relativos con preposición.",
          "Pronuncio «con el que», «de quien» sin pausa después de la preposición.",
          "Incluyo una comparación con lo esperado.",
        ],
      },
      {
        title: "Negociar un encargo",
        prompt: "Un cliente quiere un encargo urgente y muy concreto. Pregúntale cómo lo quiere, deja abiertas las decisiones que le corresponden, explícale lo que depende de ti y aclara qué plazo es realista.",
        prep: [
          "Prepara dos preguntas sobre medidas y colores.",
          "Prepara frases con «como usted prefiera» y «según lo que decida».",
        ],
        seconds: 180,
        model: "¿Para qué lo necesita exactamente? ¿Tiene una foto del lugar en el que va a estar? Los colores los elegimos como usted prefiera. Lo que no depende de mí es el secado: lleva más tiempo del que parece. Así que el plazo dependerá de las medidas en las que nos pongamos de acuerdo.",
        selfCheck: [
          "Hago preguntas reales al cliente.",
          "Uso subjuntivo cuando la decisión es suya.",
          "Aclaro lo que depende de mí con un relativo preposicional.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva estas tarjetas a tu próxima clase para practicar con tu profesor.",
    cards: [
      {
        move: "Describe",
        task: "Describe a tu profesor a una persona de la que aprendiste algo importante, sin decir su nombre. Tu profesor intenta adivinar quién es.",
        phrases: ["Es una persona con la que…", "Es alguien de quien…"],
      },
      {
        move: "Compara",
        task: "Cuenta algo que fue más fácil o más difícil de lo que esperabas y pide a tu profesor una experiencia parecida.",
        phrases: ["Fue más … de lo que pensaba.", "¿A ti te pasó algo así?"],
      },
      {
        move: "Negocia",
        task: "Pide a tu profesor que haga de cliente exigente y negocia con él cómo se hará un encargo.",
        phrases: ["Lo hacemos como usted prefiera.", "Eso depende de…"],
      },
    ],
    bring: "Tu texto «Quiénes somos» revisado y una foto de un objeto hecho a mano del que puedas hablar.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase expresa una manera abierta, que decide otra persona?",
        options: [
          "Lo bordamos como nos enseñaron.",
          "Lo bordamos según indica el patrón.",
          "Lo bordamos como tú quieras.",
        ],
        answer: 2,
        why: "«Como» + subjuntivo: la manera todavía no está decidida.",
      },
      {
        type: "choice",
        q: "Completa: «Llegaron más turistas ___ esperábamos».",
        options: ["de los que", "que", "de lo cual"],
        answer: 0,
        why: "Se compara un sustantivo masculino plural: «de los que».",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué tipo de comparación oyes?",
        options: ["Con una expectativa", "Con algo irreal"],
        answer: 1,
        why: "«Igual que si» + pluscuamperfecto de subjuntivo: comparación irreal.",
        audio: "Lo restauraron igual que si lo hubieran hecho ayer.",
        voice: "es-AR-f",
      },
      {
        type: "gap",
        q: "Es la ceramista ___ compramos todas las tazas. (comprar a)",
        answers: [["a la que", "a quien", "a la cual"]],
        hint: "«Comprar algo a alguien»",
        why: "La preposición «a» va delante del relativo.",
      },
      {
        type: "gap",
        q: "El tejido quedó más fino ___ creíamos.",
        answers: [["de lo que"]],
        hint: "Comparación con una idea",
        why: "Con un adjetivo y una expectativa: «de lo que».",
      },
      {
        type: "error",
        sentence: "Esa es la tienda que te hablé.",
        answers: ["Esa es la tienda de la que te hablé.", "Esa es la tienda de la cual te hablé."],
        why: "«Hablar de algo»: la preposición no puede desaparecer.",
      },
      {
        type: "error",
        sentence: "Me miró como si no me conoce.",
        answers: ["Me miró como si no me conociera.", "Me miró como si no me conociese."],
        why: "Tras «como si», imperfecto (o pluscuamperfecto) de subjuntivo.",
      },
      {
        type: "order",
        words: ["Son", "los", "vecinos", "en", "quienes", "más", "confiamos."],
        why: "«Confiar en alguien»: «en quienes».",
      },
      {
        type: "open",
        prompt: "Explica en 60–80 palabras a otro estudiante por qué decimos «la artesana con la que hablé» y no «la artesana que hablé con». Añade otro ejemplo con un verbo distinto.",
        model: "En español la preposición no puede quedarse al final de la frase: va siempre delante del relativo. Como decimos «hablé con la artesana», la relativa necesita «con»: «la artesana con la que hablé». El artículo «la» concuerda con «artesana». Otro ejemplo: «confío en ese proveedor» se convierte en «el proveedor en el que confío».",
        checklist: [
          "Explico que la preposición va delante del relativo.",
          "Explico de dónde sale la preposición.",
          "Doy otro ejemplo correcto con otro verbo.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Digo cómo se hace algo con «como», «según» o «tal como», con indicativo si la manera es conocida y con subjuntivo si está abierta.",
      "Comparo con una expectativa con «de lo que» y con «del que, de la que…» según el sustantivo.",
      "Comparo con algo irreal con «como si», «igual que si» o «tanto como si».",
      "Pongo la preposición que pide el verbo delante del relativo y hago concordar el artículo.",
    ],
    review: [
      "Dentro de dos días, tapa la columna «Relativa» de la tabla «Del verbo a la relativa» y reconstrúyela.",
      "Dentro de una semana, escribe cinco frases sobre personas de tu vida con verbos que piden preposición (confiar en, aprender de, contar con…).",
      "En la próxima clase, lee tu texto «Quiénes somos» y pide a tu profesor que señale una relativa que podría ser más precisa.",
    ],
  },
  related: [
    { path: "/gramatica/subordinadas-modales-y-comparativas-irreales", label: "Clase: Subordinadas modales y comparativas irreales" },
    { path: "/gramatica/relativos-con-preposicion", label: "Clase: Relativos con preposición: de quien, a quien, con el que" },
  ],
};
