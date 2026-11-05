import type { Module } from "../../types";

/**
 * C2 · semana 6 · Autoestudio espejo de G213 (ambigüedad intencional y
 * accidental) y G214 (gramaticalidad, aceptabilidad y variación real).
 * Repaso autónomo con los textos ficticios de una red de bibliotecas
 * comunitarias de Bogotá. Audio mediante síntesis; sin acreditación regional.
 */
export const c2w06: Module = {
  id: "c2-06",
  level: "c2",
  week: 6,
  kind: "core",
  title: "Una frase, dos lecturas; una forma, cuatro juicios",
  subtitle: "Repaso de cómo detectar, reparar o aprovechar la ambigüedad y de cómo juzgar una forma sin confundir error, norma y variación",
  stop: {
    place: "Bogotá",
    country: "Colombia",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g213",
    "c2.gram.g214",
    "c2.voc.w06-revision-textos",
    "c2.pron.w06-pausa-desambigua",
    "c2.lis.w06-reunion-biblioteca",
    "c2.read.w06-columna-boletin",
    "c2.wri.w06-informe-revision",
    "c2.spk.w06-defender-criterio",
    "c2.fun.w06-justificar-correccion",
    "c2.disc.w06-voz-ajena-voz-propia",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo decidir si una doble lectura es un defecto que hay que reparar o un recurso buscado, repararla con el cambio mínimo y juzgar una forma discutida separando gramaticalidad, aceptabilidad, norma y variación.",
    steps: [
      "Repasa en la teoría las fuentes de ambigüedad accidental, las herramientas de reparación y los cuatro juicios sobre una forma.",
      "Practica con avisos, reglamentos, eslóganes y transcripciones de una red de bibliotecas de Bogotá.",
      "Escucha la reunión de Juliana y Andrés y lee la columna del boletín de la red.",
      "Redacta un informe de revisión, revísalo con la lista de control y defiende tus criterios en voz alta.",
    ],
  },
  theory: {
    intro: "En clase trabajaste estos dos temas con tu profesor. Aquí los repasas con otros textos: los de una red de bibliotecas comunitarias de Bogotá que revisa su reglamento, prepara una campaña y edita un libro de testimonios orales. La pregunta de fondo es la misma en las dos clases: antes de corregir, decide qué tipo de problema tienes delante.",
    parts: [
      {
        heading: "¿Defecto o recurso? Dónde nace la doble lectura",
        body: [
          "Una frase es ambigua cuando admite dos interpretaciones razonables. Eso, por sí solo, no la hace mala: lo que importa es si alguien quería esa segunda lectura. En un reglamento, una factura o unas instrucciones, nadie la quería y cualquier lector puede elegir la que le convenga; es un defecto. En un eslogan, un chiste o un poema, la segunda lectura puede ser precisamente el mensaje.",
          "Para repararla, primero localiza su origen. Las fuentes más frecuentes son sintácticas: un complemento que puede engancharse a dos palabras, un adjetivo que puede afectar a uno o a dos sustantivos coordinados, el alcance de «todos… no» o de «solo», el posesivo «su» con dos poseedores posibles, una relativa con o sin comas, un sujeto implícito que puede ser dos personas. Otras son léxicas (una palabra con dos sentidos) y otras no son ambigüedad, sino vaguedad: la frase no tiene dos lecturas, sino un contorno borroso.",
        ],
        table: {
          caption: "Fuentes de ambigüedad accidental",
          head: ["Fuente", "Frase ambigua", "Las dos lecturas"],
          rows: [
            ["complemento mal enganchado", "Se prestan lectores de libros electrónicos con funda.", "la funda va con el lector / con los libros"],
            ["adjetivo y coordinación", "Pueden inscribirse estudiantes y jubilados residentes.", "solo los jubilados residen / residen todos"],
            ["«todos… no»", "Todos los títulos no se pueden renovar.", "ninguno se renueva / no todos se renuevan"],
            ["alcance de «solo»", "Solo se atiende por teléfono los sábados.", "el sábado solo hay teléfono / el teléfono solo funciona el sábado"],
            ["posesivo «su»", "La bibliotecaria avisó a la usuaria de que su carné había caducado.", "el carné de la bibliotecaria / el de la usuaria"],
            ["sujeto implícito", "El coordinador saludó al alcalde cuando entraba.", "entraba el coordinador / entraba el alcalde"],
          ],
        },
        tip: "Lee la frase como la leería alguien con interés en entenderla al revés. Si esa lectura es razonable, el texto tiene un problema.",
      },
      {
        heading: "Reparar con el cambio mínimo y no tocar lo que el contexto resuelve",
        body: [
          "Cada fuente tiene su herramienta. Un complemento mal colocado se arregla cambiando el orden. «Todos… no» se sustituye por «no todos» o por «ningún», según lo que se quiera decir. El alcance de «solo» se fija poniéndolo junto a lo que limita. El posesivo se aclara con un referente explícito («la de esta», «el carné de la usuaria»). La relativa decide su alcance con las comas. El sujeto implícito se recupera con un demostrativo o un nombre. En las causales negadas, el modo también desambigua: con subjuntivo se niega la causa, no el hecho.",
          "La segunda regla es tan importante como la primera: si el contexto ya selecciona una sola lectura, no repares. «El usuario devolverá su libro en el mostrador» no necesita «el libro del usuario»: nadie piensa que el libro sea del mostrador. Una corrección innecesaria hace el texto más pesado y transmite desconfianza en el lector.",
        ],
        examples: [
          { es: "No todos los títulos se pueden renovar. / Ningún título se puede renovar.", note: "Dos reparaciones para «todos los títulos no se pueden renovar»: elige la que corresponde al sentido." },
          { es: "Los sábados solo se atiende por teléfono.", note: "«Solo» junto a «por teléfono»: el sábado no hay atención presencial." },
          { es: "No cerraron la sala porque hubiera goteras.", note: "Subjuntivo: la sala se cerró, pero no por las goteras. Con indicativo («porque había goteras») la sala sigue abierta y la causa es la que se da." },
          { es: "El coordinador saludó al alcalde cuando este entraba.", note: "«Este» remite al último mencionado: entraba el alcalde." },
        ],
        mistakes: [
          {
            wrong: "Todos los usuarios no podrán usar la sala de cómputo el lunes. (Quiere decir: nadie podrá.)",
            right: "Ningún usuario podrá usar la sala de cómputo el lunes.",
            why: "«Todos… no» admite la lectura «no todos». Si nadie puede, «ningún» deja una sola lectura.",
          },
          {
            wrong: "El usuario devolverá el libro del usuario en el mostrador.",
            right: "El usuario devolverá su libro en el mostrador.",
            why: "Aquí «su» solo tiene un poseedor plausible. Repetir el nombre es una reparación que no hacía falta.",
          },
        ],
      },
      {
        heading: "La segunda lectura buscada: doble sentido y vaguedad calculada",
        body: [
          "En la ambigüedad intencional, quien escribe quiere que el lector active los dos sentidos a la vez. El eslogan funciona solo si se ven los dos; explicarlo o repararlo lo mata. Para crearlo, busca una palabra con dos sentidos que encajen en la situación («Préstate a leer», «Libros que te llevan lejos») o una construcción que admita dos análisis.",
          "La vaguedad calculada es otra cosa: no hay dos lecturas, sino una sola, poco precisa a propósito. «Se estudiarán medidas» o «la red evaluará la situación» suenan firmes y comprometen poco. Es habitual en la comunicación institucional y en la diplomacia. Un buen lector la reconoce y, si le hace falta precisión, pregunta: ¿qué medidas?, ¿cuándo?, ¿quién decide?",
          "Dos recursos útiles para leer y escribir con precisión: la posición del adjetivo («una vieja usuaria», que lleva muchos años yendo, frente a «una usuaria vieja», de edad avanzada) y «sendos», que reparte un elemento por cabeza: «Las dos ganadoras recibieron sendos lotes de libros» (uno cada una).",
        ],
        examples: [
          { es: "Biblioteca La Esquina: aquí todo el mundo tiene historia.", note: "Doble sentido buscado: cada vecino tiene su historia y la biblioteca tiene libros de historia." },
          { es: "La dirección tomará las decisiones que considere pertinentes.", note: "Vaguedad calculada: no sabemos qué decisiones ni cuándo." },
          { es: "Las dos autoras firmaron sendos ejemplares para la biblioteca.", note: "«Sendos»: un ejemplar cada una, no dos cada una." },
        ],
      },
      {
        heading: "Cuatro juicios distintos sobre una misma forma",
        body: [
          "Cuando una forma «suena mal», conviene separar cuatro preguntas. Gramaticalidad: ¿la produce de forma natural algún grupo de hablantes nativos? «Los libro está prestado» no la produce nadie: es agramatical. Aceptabilidad: es gramatical, pero ¿funciona en este contexto? Una frase con tres relativas encajadas puede ser gramatical y casi ilegible. Norma: ¿qué recomiendan las obras de referencia (Diccionario panhispánico de dudas, Nueva gramática, Libro de estilo), y con qué etiqueta? Variación: ¿de qué zona, grupo social o situación es propia?",
          "Las etiquetas de la norma tienen grados: «se admite», «se prefiere», «se desaconseja en el uso culto», «no se considera correcto». «Se prefiere» no significa «está mal». Por eso un corrector no marca igual «había muchas personas» frente a «habían muchas personas» que «detrás de mí» frente a «detrás mío».",
        ],
        table: {
          caption: "Casos bien documentados y su juicio",
          head: ["Forma", "Juicio", "En un texto formal"],
          rows: [
            ["habían muchas personas", "real y extendida; no normativa", "había muchas personas"],
            ["me se cayó", "real; no normativa", "se me cayó"],
            ["pienso de que (dequeísmo)", "real; no normativa", "pienso que"],
            ["me acuerdo que (queísmo)", "frecuente en lo oral; se evita en lo cuidado", "me acuerdo de que"],
            ["dudo (de) que", "las dos son válidas", "cualquiera de las dos"],
            ["detrás mío", "frecuente en muchas zonas; el uso cuidado prefiere la otra", "detrás de mí"],
            ["a Juan le vi (leísmo de persona, masculino singular)", "admitido", "le vi o lo vi"],
            ["la dije que viniera (laísmo)", "no admitido", "le dije que viniera"],
            ["¿qué dijistes?", "real; no normativa", "¿qué dijiste?"],
            ["está más mayor", "válido solo si se refiere a la edad", "se mantiene con ese sentido"],
            ["la calor / andé", "popular o regional; no normativas", "el calor / anduve"],
          ],
        },
      },
      {
        heading: "La voz ajena y la voz propia",
        body: [
          "Una forma no normativa no se corrige igual en todos los lugares del texto. En la voz del autor, la del narrador o la de la institución, se sigue la norma culta. En la voz de otra persona (un testimonio, un diálogo de novela, una cita textual), la forma puede mantenerse porque forma parte de cómo habla esa persona. Corregir a una vecina que dice «habían muchas carretas en la plaza» en su testimonio es borrarla.",
          "Dos errores de juicio son frecuentes. El primero es llamar «agramatical» a todo lo que no es normativo: «me se cayó» lo dicen muchos hablantes nativos con total regularidad. El segundo es la ultracorrección: por miedo a un rasgo estigmatizado, se «corrige» lo que ya estaba bien, como quien dice «bacalado» por evitar el «-ao» o «Me alegra de que» por evitar el queísmo.",
        ],
        examples: [
          { es: "Testimonio: «Habían muchas carretas en la plaza los domingos». Narrador: «Doña Carmenza recuerda que había muchas carretas en la plaza».", note: "Se respeta la voz de la vecina; el narrador usa la norma culta." },
          { es: "«Me alegra que vengas» y «Me alegro de que vengas».", note: "Las dos son normativas; «me alegra de que» es una ultracorrección." },
        ],
        mistakes: [
          {
            wrong: "Corrector: «“Me se olvidó” es agramatical».",
            right: "Corrector: «“Me se olvidó” es una forma real pero no normativa; en un texto formal, “se me olvidó”».",
            why: "La produce un número grande de hablantes nativos: el juicio correcto es de norma, no de gramaticalidad.",
          },
          {
            wrong: "Nota del editor: «Habían cuarenta participantes en el taller».",
            right: "Nota del editor: «Había cuarenta participantes en el taller».",
            why: "La nota es voz de la institución: «haber» impersonal va en singular.",
          },
        ],
        tip: "Antes de escribir «incorrecto» en un margen, pregúntate: ¿según qué obra?, ¿con qué etiqueta?, ¿en la voz de quién?",
      },
    ],
  },
  grammar: {
    intro: "Primero diagnostica, luego decide. No todos los ítems piden corregir.",
    exercises: [
      {
        id: "c2-06-gramatica-diagnostico",
        type: "context",
        prompt: "Lee el texto y decide qué hacer con la doble lectura.",
        items: [
          {
            context: "Reglamento de préstamo: «Los usuarios que tengan multas pendientes y los menores no acompañados no podrán retirar más de dos libros».",
            q: "¿Hay una ambigüedad que haya que reparar?",
            options: [
              "No: la frase tiene una sola lectura razonable.",
              "Sí: «no acompañados» puede afectar solo a los menores o también a los usuarios con multas.",
              "Sí, pero solo porque la frase es larga.",
            ],
            answer: 0,
            why: "«No acompañados» va con «menores», y la relativa ya delimita al primer grupo; no hay una segunda lectura razonable. No toda frase larga es ambigua.",
          },
          {
            context: "Campaña del festival de lectura: «Préstate a leer: tu biblioteca te espera».",
            q: "¿Qué tipo de doble sentido es?",
            options: [
              "Vaguedad calculada para no comprometerse.",
              "Ambigüedad accidental que hay que reparar antes de imprimir.",
              "Doble sentido buscado: «prestarse a» (ofrecerse) y el préstamo de libros.",
            ],
            answer: 2,
            why: "El eslogan funciona solo si el lector activa los dos sentidos; repararlo lo anularía.",
          },
          {
            context: "Comunicado de la red tras una queja: «La dirección analizará el caso y tomará las medidas que estime convenientes».",
            q: "¿Qué describe mejor la frase?",
            options: [
              "Una frase con dos lecturas sintácticas.",
              "Vaguedad calculada: suena firme y no concreta medidas ni plazos.",
              "Un error de concordancia.",
            ],
            answer: 1,
            why: "No hay dos interpretaciones, sino una sola deliberadamente imprecisa.",
          },
          {
            context: "Correo interno: «La coordinadora habló con la tallerista de su contrato».",
            q: "La tallerista es quien tiene contrato con la red. ¿Qué haces?",
            options: [
              "Lo dejo: «su» nunca es ambiguo.",
              "Escribo «de su propio contrato».",
              "Escribo «habló con la tallerista del contrato de esta».",
            ],
            answer: 2,
            why: "Hay dos poseedoras posibles; «de esta» remite a la última mencionada, la tallerista. «Su propio» no deshace la ambigüedad.",
          },
        ],
      },
      {
        id: "c2-06-gramatica-reparar",
        type: "error",
        prompt: "Cada aviso tiene una ambigüedad accidental. Reescríbelo con el cambio mínimo para que diga lo que se indica entre paréntesis.",
        items: [
          {
            sentence: "Se donan enciclopedias para colegios en buen estado. (Las enciclopedias están en buen estado.)",
            answers: ["Se donan enciclopedias en buen estado para colegios."],
            why: "Al acercar «en buen estado» a «enciclopedias», ya no puede referirse a los colegios.",
          },
          {
            sentence: "Todos los préstamos no se pueden renovar por internet. (Algunos sí se pueden.)",
            answers: ["No todos los préstamos se pueden renovar por internet."],
            why: "«No todos» niega la totalidad y deja una sola lectura.",
          },
          {
            sentence: "El vigilante vio a la directora cuando salía del parqueadero. (Salía la directora.)",
            answers: ["El vigilante vio a la directora cuando esta salía del parqueadero."],
            why: "El demostrativo «esta» recupera el último referente femenino mencionado.",
          },
          {
            sentence: "No suspendieron el club de lectura porque llovía. (Lo suspendieron, pero no por la lluvia.)",
            answers: ["No suspendieron el club de lectura porque lloviera."],
            why: "Con subjuntivo se niega la causa, no el hecho: el club sí se suspendió.",
          },
          {
            sentence: "Los socios, que han pagado la cuota, recibirán el boletín. (Solo lo reciben los que han pagado.)",
            answers: ["Los socios que han pagado la cuota recibirán el boletín."],
            why: "Sin comas, la relativa es especificativa: selecciona un subgrupo.",
          },
        ],
      },
      {
        id: "c2-06-gramatica-juicio",
        type: "classify",
        prompt: "Clasifica cada forma según el juicio que merece.",
        categories: [
          "Agramatical: ningún grupo de hablantes nativos la produce",
          "Real pero no normativa: se revisa en un texto formal",
          "Admitida o válida en la norma culta",
        ],
        items: [
          { text: "Las niña juega en el parque.", cat: 0, why: "Rompe la concordancia del artículo con el nombre." },
          { text: "Habían tres sillas libres.", cat: 1, why: "«Haber» impersonal pluralizado: muy extendido, no normativo." },
          { text: "Dudo de que llegue a tiempo.", cat: 2, why: "Con «dudar», la preposición es opcional: las dos variantes son válidas." },
          { text: "Me se perdió el carné.", cat: 1, why: "Forma real; la norma pide «se me perdió»." },
          { text: "A Julián le vi ayer en la sala.", cat: 2, why: "Leísmo de persona masculino singular: admitido." },
          { text: "Libro el de prestó me ella.", cat: 0, why: "Orden imposible en cualquier variedad." },
          { text: "La dije que trajera el libro.", cat: 1, why: "Laísmo: real en algunas zonas, no admitido en la norma culta." },
          { text: "Mi abuela está más mayor.", cat: 2, why: "Con el sentido de edad, «más mayor» es válido." },
        ],
      },
      {
        id: "c2-06-gramatica-voz",
        type: "gap",
        prompt: "Escribe la forma adecuada para la voz indicada. Entre corchetes tienes la forma del testimonio oral.",
        items: [
          { q: "Narrador: Don Efraín cuenta que en la plaza ___ muchos vendedores de fruta. [habían]", answers: [["había"]], why: "Voz del narrador: «haber» impersonal en singular." },
          { q: "Narradora: La señora Inés recuerda que aquel día ___ hasta Chapinero a pie. [andé]", answers: [["anduvo"]], why: "La narradora pasa a tercera persona y usa la forma normativa del indefinido." },
          { q: "Testimonio transcrito: «Yo ___ que el tranvía pasaba por aquí». [me acuerdo]", answers: [["me acuerdo"]], why: "En la voz de la hablante se respeta su forma; el testimonio no se normaliza." },
          { q: "Nota de la editora: Durante la grabación, el nieto de doña Carmenza se sentó ___. [detrás mío, dicho por ella]", answers: [["detrás de ella"]], why: "Voz institucional y tercera persona: el uso cuidado prefiere «detrás de» + pronombre." },
          { q: "Narrador: Doña Rosa dice que ___ cayó el canasto en la calle. [me se]", answers: [["se le"]], why: "En tercera persona y con la norma culta: «se le cayó»." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico para hablar de revisión de textos, de norma y de variación sin confundir los planos.",
    groups: [
      {
        title: "Revisar un texto",
        items: [
          { es: "la doble lectura", note: "segunda interpretación posible de una frase" },
          { es: "deshacer la ambigüedad", note: "dejar una sola interpretación posible" },
          { es: "el alcance", note: "parte de la frase a la que afecta una palabra como «solo» o «no»" },
          { es: "el referente", note: "persona o cosa a la que remite un pronombre o un posesivo" },
          { es: "la vaguedad calculada", note: "imprecisión elegida a propósito para no comprometerse" },
          { es: "el juego de palabras", note: "uso de una palabra con dos sentidos para lograr un efecto" },
          { es: "la letra menuda", note: "condiciones que pasan inadvertidas en un texto" },
        ],
      },
      {
        title: "Norma y variación",
        items: [
          { es: "la norma culta", note: "uso que las obras de referencia recomiendan para textos formales" },
          { es: "estar desaconsejado", note: "no recomendado en el uso cuidado, aunque sea frecuente" },
          { es: "estar admitido", note: "aceptado por la norma, aunque haya una variante preferida" },
          { es: "la forma estigmatizada", note: "uso real que una parte de la comunidad juzga negativamente" },
          { es: "la ultracorrección", note: "error que nace de querer evitar otro" },
          { es: "la transcripción fiel", note: "versión escrita que respeta cómo habló la persona" },
          { es: "la marca de uso", note: "indicación del diccionario como «coloquial» o «popular»" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-06-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el alcance", right: "parte de la frase a la que afecta una palabra como «solo» o «no»" },
          { left: "el referente", right: "persona o cosa a la que remite un pronombre o un posesivo" },
          { left: "la vaguedad calculada", right: "imprecisión elegida a propósito para no comprometerse" },
          { left: "la ultracorrección", right: "error que nace de querer evitar otro" },
          { left: "estar desaconsejado", right: "no recomendado en el uso cuidado, aunque sea frecuente" },
          { left: "la transcripción fiel", right: "versión escrita que respeta cómo habló la persona" },
          { left: "la marca de uso", right: "indicación del diccionario como «coloquial» o «popular»" },
        ],
      },
      {
        id: "c2-06-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["doble lectura", "norma culta", "forma estigmatizada", "juego de palabras"],
        items: [
          { q: "En el contrato con la imprenta, esa ___ podía costarle dinero a la red.", answers: [["doble lectura"]] },
          { q: "El eslogan es un ___ que solo funciona si el lector ve los dos sentidos.", answers: [["juego de palabras"]] },
          { q: "La nota de la editora sigue la ___; los testimonios, no necesariamente.", answers: [["norma culta"]] },
          { q: "Algunos vecinos evitaban decir «andé» en la grabación porque sabían que es una ___.", answers: [["forma estigmatizada"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La pausa y el grupo fónico como desambiguadores",
    explanation: [
      "En la lengua oral muchas ambigüedades escritas desaparecen gracias a la entonación. La pausa marca dónde termina un grupo de palabras y, con él, a qué se engancha un complemento. «Se venden lámparas para mesas | de bronce» agrupa «de bronce» con las mesas; «Se venden lámparas | para mesas, | de bronce» lo deja suelto y más cerca de las lámparas.",
      "Las relativas explicativas se dicen entre pausas y con un tono más bajo, como un paréntesis: «Los socios, | que han pagado, | votarán». Las especificativas van en un solo grupo: «Los socios que han pagado votarán». La pausa equivale a las comas.",
      "Por eso, al leer en voz alta un texto con una ambigüedad accidental, tu entonación elige una lectura, pero el papel no: la reparación tiene que estar en la escritura. El audio utiliza la síntesis disponible en el navegador; no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Misma secuencia, dos agrupaciones",
      head: ["Un solo grupo (sin pausa)", "Con pausas"],
      rows: [
        ["Los usuarios que viven en el barrio pagan menos.", "Los usuarios, | que viven en el barrio, | pagan menos."],
        ["Ella no vino porque llovía.", "Ella no vino, | porque llovía."],
        ["Habló con el alcalde de Usme.", "Habló con el alcalde | de Usme."],
      ],
    },
    perceive: {
      id: "c2-06-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué lectura selecciona la entonación.",
      items: [
        {
          q: "¿Quiénes pagan menos?",
          options: ["Todos los usuarios, que además viven en el barrio.", "Solo los usuarios que viven en el barrio."],
          answer: 1,
          why: "Un solo grupo fónico, sin pausas: relativa especificativa.",
          audio: "Los usuarios que viven en el barrio pagan menos por el carné.",
          voice: "es-CO-f",
        },
        {
          q: "¿Quiénes reciben el boletín?",
          options: ["Todos los socios, porque todos han pagado.", "Solo una parte de los socios."],
          answer: 0,
          why: "Las pausas convierten la relativa en un paréntesis explicativo.",
          audio: "Los socios, que ya han pagado, recibirán el boletín.",
          voice: "es-CO-m",
        },
        {
          q: "¿Qué dice la frase sobre la clausura?",
          options: [
            "Que cerraron la sala y la causa fue la humedad.",
            "Que no se sabe si cerraron la sala.",
            "Que cerraron la sala, pero no por la humedad.",
          ],
          answer: 2,
          why: "El subjuntivo «hubiera» niega la causa; el cierre sí ocurrió.",
          audio: "No cerraron la sala porque hubiera humedad, sino por la obra del techo.",
          voice: "es-ES-f",
        },
        {
          q: "¿A qué se refiere «con funda»?",
          options: ["A los lectores electrónicos.", "A los libros."],
          answer: 0,
          why: "La pausa tras «libros» separa «con funda» y lo devuelve a «lectores».",
          audio: "Prestamos lectores de libros, con funda incluida.",
          voice: "es-MX-m",
        },
      ],
    },
    produce: [
      { text: "Los vecinos, que llegaron temprano, consiguieron sitio.", tip: "Haz las dos pausas y baja el tono en la relativa: todos llegaron temprano.", voice: "es-CO-f" },
      { text: "Los vecinos que llegaron temprano consiguieron sitio.", tip: "Un solo grupo fónico: solo algunos consiguieron sitio.", voice: "es-CO-m" },
      { text: "No la eligieron porque fuera la más barata.", tip: "Sin pausa antes de «porque»: se niega la causa, no la elección.", voice: "es-ES-m" },
      { text: "Préstate a leer: tu biblioteca te espera.", tip: "Subraya «préstate» con un ligero alargamiento para que se oigan los dos sentidos.", voice: "es-CO-f" },
    ],
    spelling: "Las comas de una relativa no son decorativas: cambian quién queda incluido. Si al leer en voz alta haces pausas que no están en el texto, revisa si faltan comas o si sobran.",
  },
  listening: {
    title: "Reunión de revisión en la biblioteca",
    context: "Juliana, coordinadora editorial de una red de bibliotecas comunitarias de Bogotá, y Andrés, corrector recién incorporado, revisan tres textos: el reglamento de préstamo, el eslogan del festival y un testimonio para el libro «Memorias de la plaza». Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "j", name: "Juliana", voice: "es-CO-f", role: "Coordinadora editorial de la red" },
      { id: "a", name: "Andrés", voice: "es-CO-m", role: "Corrector" },
    ],
    script: [
      { speaker: "j", text: "Andrés, gracias por la revisión. Veo que marcaste en rojo casi todo, así que vamos por partes. Empecemos por el reglamento, que es lo más urgente porque se publica el lunes." },
      { speaker: "a", text: "Sí, ahí encontré dos problemas serios. El artículo cuatro dice: «Todos los materiales audiovisuales no se prestan a domicilio». Yo entiendo que ninguno sale de la biblioteca, pero una usuaria me preguntó ayer si algunos sí se podían llevar. Y tenía razón en preguntar." },
      { speaker: "j", text: "Claro, porque «todos… no» deja abierta la lectura de «no todos». ¿Qué quería decir la junta? Que ninguno sale. Entonces pongamos «ningún material audiovisual se presta a domicilio» y se acabó la discusión." },
      { speaker: "a", text: "El otro es el artículo siete: «La bibliotecaria informará al usuario de que su préstamo ha vencido». Lo marqué porque «su» podría ser de la bibliotecaria." },
      { speaker: "j", text: "Ahí no estoy de acuerdo. ¿Quién tiene préstamos? El usuario. Nadie va a pensar que la bibliotecaria se presta libros a sí misma. Si cambiamos «su» por «el préstamo del usuario», el artículo queda pesadísimo y no gana nada. Ese lo dejamos." },
      { speaker: "a", text: "Vale, tiene sentido. Pasemos al eslogan, entonces. «Préstate a leer». Lo marqué como ambiguo porque «prestarse a» significa ofrecerse para algo, y no tiene que ver con el préstamo." },
      { speaker: "j", text: "Justamente por eso lo elegimos. Si la gente solo ve un sentido, el eslogan no funciona. Ahí la doble lectura es el mensaje. Lo que sí revisaría es el texto de abajo, que dice que «la red tomará las medidas necesarias para mejorar el servicio». Eso no es ambiguo, es vago, y en una campaña sobre lectura queda raro. Prefiero algo concreto: «abriremos los domingos desde marzo»." },
      { speaker: "a", text: "De acuerdo. Y ahora viene lo que más me costó: el testimonio de doña Carmenza. Dice «habían muchas carretas en la plaza» y «me se cayó el mercado en el barro». Lo corregí todo porque es agramatical." },
      { speaker: "j", text: "Aquí hay que tener cuidado con las palabras. Agramatical sería algo que ningún hablante nativo produce, como «las carreta estaba». Lo que dice doña Carmenza lo dicen millones de personas con toda regularidad; lo que pasa es que la norma culta no lo recomienda. Son formas no normativas, que es otro juicio." },
      { speaker: "a", text: "Pero si el libro va a estar en las bibliotecas, ¿no debería dar buen ejemplo?" },
      { speaker: "j", text: "Da buen ejemplo en la voz de la red: la introducción, las notas, los pies de foto. Ahí escribimos «había muchas carretas» y «se le cayó el mercado». Pero el testimonio es la voz de doña Carmenza. Si la corregimos, el libro deja de ser un libro de memorias y se convierte en un libro sobre cómo debería haber hablado. Lo que sí podemos hacer es añadir una nota que explique el criterio, para que nadie piense que se nos pasó." },
      { speaker: "a", text: "Entendido. Entonces separo: en la voz de la institución, norma culta; en la voz de los vecinos, transcripción fiel. Y en el reglamento, reparo solo lo que el contexto no resuelve." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin abrir la transcripción. ¿De qué tratan y cuál es el criterio general de Juliana?",
        exercise: {
          id: "c2-06-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y el criterio general.",
          items: [
            {
              q: "¿Qué hacen Juliana y Andrés?",
              options: [
                "Discuten la revisión que Andrés ha hecho de varios textos de la red.",
                "Preparan una entrevista con doña Carmenza.",
                "Redactan un reglamento nuevo desde cero.",
              ],
              answer: 0,
              why: "Repasan las marcas en rojo de Andrés en el reglamento, el eslogan y un testimonio.",
            },
            {
              q: "¿Qué actitud resume mejor la de Juliana?",
              options: [
                "Hay que corregir todo lo que no siga la norma culta.",
                "No hay que corregir nada, porque toda variación es válida.",
                "Antes de corregir, hay que decidir qué tipo de problema es y en qué voz aparece.",
              ],
              answer: 2,
              why: "Acepta unas correcciones, rechaza otras y distingue la voz de la red de la de los vecinos.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada decisión con su motivo. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-06-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada decisión.",
          items: [
            {
              q: "¿Por qué Juliana no acepta la corrección del artículo siete?",
              options: [
                "Porque el artículo ya estaba aprobado por la junta.",
                "Porque solo el usuario tiene préstamos y el contexto ya decide el referente de «su».",
                "Porque prefiere usar «suyo».",
              ],
              answer: 1,
              why: "Repararlo haría el artículo más pesado sin ganar claridad.",
            },
            {
              q: "¿Qué cambia Juliana en el texto de la campaña?",
              options: [
                "El eslogan, porque es ambiguo.",
                "Nada: todo le parece bien.",
                "La frase vaga sobre «las medidas necesarias», por un compromiso concreto.",
              ],
              answer: 2,
              why: "Propone «abriremos los domingos desde marzo».",
            },
            {
              q: "¿Qué propone Juliana para el testimonio?",
              options: [
                "Mantener las formas de doña Carmenza y explicar el criterio en una nota.",
                "Pedir a doña Carmenza que repita la grabación.",
                "Corregir solo «me se cayó» y dejar «habían».",
              ],
              answer: 0,
              why: "La voz de la vecina se transcribe con fidelidad; la de la red sigue la norma culta.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en el juicio que recibe cada forma en la reunión. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-06-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento de la reunión con la decisión que toman.",
          pairs: [
            { left: "todos los materiales audiovisuales no se prestan", right: "se repara con «ningún»" },
            { left: "informará al usuario de que su préstamo ha vencido", right: "se deja: el contexto decide" },
            { left: "préstate a leer", right: "se conserva: doble sentido buscado" },
            { left: "tomará las medidas necesarias", right: "se concreta: era vaguedad" },
            { left: "habían muchas carretas en la plaza", right: "se mantiene en la voz de la vecina" },
          ],
          why: "Cada decisión depende del tipo de problema y de la voz en que aparece.",
        },
      },
    ],
  },
  reading: {
    title: "Antes del lápiz rojo",
    genre: "Columna de opinión en un boletín institucional",
    frame: "Columna de Juliana Rincón para el boletín mensual de una red de bibliotecas comunitarias de Bogotá. Personas, entidad y textos citados son ficticios.",
    text: [
      "Cada vez que llega a la red un corrector nuevo, ocurre lo mismo: el primer texto que revisa vuelve lleno de rojo. Es una señal de entusiasmo, y lo agradezco. Pero con los años he aprendido que el lápiz rojo es la última herramienta, no la primera. Antes de tachar hay que hacerse una pregunta muy simple, que casi nunca se hace: ¿qué clase de problema tengo delante? Porque no es lo mismo una frase que dice dos cosas sin querer, una que las dice a propósito, una que nadie diría y una que muchos dicen aunque los manuales no la recomienden.",
      "Empiezo por las frases con dos lecturas. Nuestro reglamento de préstamo decía hasta hace poco que «todos los materiales audiovisuales no se prestan a domicilio». Quienes lo redactaron querían decir que ninguno sale de la biblioteca, pero la frase permite entender que algunos sí. Durante meses, unos usuarios se llevaron películas y otros no, y cada uno tenía su parte de razón. Ese es el sello de la ambigüedad accidental: nadie la buscaba y cualquiera puede elegir la lectura que le conviene. La reparamos con una palabra: «ningún material audiovisual se presta a domicilio».",
      "Ahora bien, no toda frase que admite en teoría dos lecturas tiene que repararse. En el mismo reglamento, el artículo que dice que «la bibliotecaria informará al usuario de que su préstamo ha vencido» fue marcado por un corrector entusiasta. En teoría, «su» podría remitir a la bibliotecaria. En la práctica, solo los usuarios tienen préstamos, y ningún lector sensato duda. Reparar lo que el contexto ya resuelve no aclara nada: alarga el texto y sugiere que el lector es incapaz de entender lo evidente. La regla que seguimos es la del cambio mínimo, y a veces el cambio mínimo es ninguno.",
      "El caso opuesto es el de nuestra campaña para el festival de lectura. El eslogan, «Préstate a leer», también tiene dos lecturas: «prestarse a algo», es decir, ofrecerse a hacerlo, y la idea del préstamo bibliotecario. Aquí, en cambio, quien escribió quería que el lector activara las dos a la vez. Si alguien solo percibe un sentido, el eslogan pierde la gracia. La segunda lectura no es un defecto que se esconde, es el mensaje que se busca. Distinto es lo que aparecía debajo: «la red tomará las medidas necesarias para mejorar el servicio». Esa frase no tiene dos lecturas, tiene una sola y muy difusa. Es vaguedad calculada, propia de los comunicados que prefieren no comprometerse, y en una campaña dirigida a los vecinos la cambiamos por una promesa verificable.",
      "El segundo grupo de problemas es más delicado, porque toca la manera de hablar de las personas. Estamos editando «Memorias de la plaza», un libro con testimonios de vecinos mayores sobre el mercado de antes. Doña Carmenza recuerda que «habían muchas carretas en la plaza» y que una mañana de lluvia «me se cayó el mercado en el barro». El borrador volvió con una nota en el margen: «agramatical». No lo es. Agramatical es lo que ningún grupo de hablantes nativos produce, como «las carreta llegaba». Lo que dice doña Carmenza lo dicen millones de personas con perfecta regularidad; lo que ocurre es que las obras normativas no lo recomiendan en los textos formales. Son dos juicios distintos, y confundirlos tiene consecuencias.",
      "Conviene, además, leer bien las etiquetas de la norma. No es lo mismo «no se considera correcto» que «se prefiere». El Diccionario panhispánico de dudas no condena «dudo que» frente a «dudo de que»: admite las dos. Con «detrás mío» señala que es frecuente en muchas zonas y que el uso cuidado prefiere «detrás de mí». Y admite «a Juan le vi» para un hombre, mientras rechaza «la dije que viniera». Un corrector que marca todo con la misma tinta no está siendo riguroso; está borrando matices que las propias obras de referencia se toman el trabajo de establecer.",
      "La solución que hemos adoptado en el libro es sencilla de explicar. En la voz de la red, es decir, en la introducción, las notas y los pies de foto, escribimos según la norma culta: «doña Carmenza recuerda que había muchas carretas en la plaza». En la voz de los vecinos, transcribimos lo que dijeron. Una nota editorial al comienzo explica el criterio para que nadie piense que se nos pasó. Así el libro conserva lo que lo hace valioso, que es oír a las personas como hablan, y la institución cumple con lo que le corresponde, que es escribir con cuidado.",
      "Hay un último riesgo que quiero mencionar, porque lo he visto en correctores muy buenos: la ultracorrección. Por miedo a un rasgo estigmatizado se corrige lo que estaba bien. Alguien que teme el queísmo escribe «me alegra de que vengas», y alguien que huye de las terminaciones en «-ao» acaba escribiendo «bacalado». El exceso de celo también produce errores. Por eso insisto: antes del lápiz rojo, el diagnóstico. ¿Dos lecturas o una? ¿Buscada o accidental? ¿Agramatical, no normativa o simplemente distinta? ¿En la voz de quién? Con esas cuatro preguntas, el rojo se usa menos y se usa mejor.",
    ],
    glossary: [
      { es: "el sello", note: "rasgo que identifica algo" },
      { es: "difuso", note: "poco preciso, sin contornos claros" },
      { es: "el exceso de celo", note: "cuidado excesivo que termina causando problemas" },
    ],
    tasks: [
      {
        id: "c2-06-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el argumento de la columna.",
        items: [
          {
            q: "¿Por qué la autora no repara el artículo sobre el préstamo vencido?",
            options: [
              "Porque la junta no le dio permiso para cambiarlo.",
              "Porque prefiere que el reglamento suene antiguo.",
              "Porque el contexto ya elimina la segunda lectura de «su».",
            ],
            answer: 2,
            why: "Solo los usuarios tienen préstamos: la lectura alternativa no es razonable.",
          },
          {
            q: "¿Qué diferencia establece entre el eslogan y la frase de debajo?",
            options: [
              "El eslogan tiene un doble sentido buscado; la otra frase es vaga, no ambigua.",
              "Las dos son ambigüedades accidentales.",
              "Las dos son ejemplos de vaguedad calculada.",
            ],
            answer: 0,
            why: "El cuarto párrafo separa doble sentido intencional y vaguedad.",
          },
          {
            q: "Según la autora, ¿por qué es un error llamar «agramatical» a «me se cayó»?",
            options: [
              "Porque es la forma recomendada por la norma.",
              "Porque es una forma real y regular entre hablantes nativos; el juicio es de norma.",
              "Porque solo aparece en la lengua escrita.",
            ],
            answer: 1,
            why: "Agramatical es lo que ningún grupo de hablantes nativos produce.",
          },
        ],
      },
      {
        id: "c2-06-lectura-juicio",
        type: "match",
        prompt: "Relaciona cada forma citada en la columna con el juicio que le atribuye la autora.",
        pairs: [
          { left: "las carreta llegaba", right: "agramatical" },
          { left: "habían muchas carretas", right: "real, no normativa; se respeta en el testimonio" },
          { left: "dudo que / dudo de que", right: "las dos variantes admitidas" },
          { left: "me alegra de que vengas", right: "ultracorrección" },
          { left: "la dije que viniera", right: "rechazada por la norma culta" },
        ],
      },
      {
        id: "c2-06-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa el criterio de la columna con argumentos propios.",
        items: [
          {
            prompt: "La autora decide transcribir los testimonios tal como se dijeron y aplicar la norma culta solo a la voz de la red. Explica en 80–100 palabras qué gana y qué riesgo corre esa decisión, y propón una frase para la nota editorial.",
            model: "La decisión gana fidelidad: el libro deja oír a los vecinos como hablan, que es su valor principal. El riesgo es que algún lector interprete las formas no normativas como descuidos de la edición o, peor, como modelos. Por eso la nota editorial es imprescindible. Yo escribiría: «Los testimonios se transcriben tal como se grabaron; las formas propias del habla de cada persona se han respetado. Las secciones redactadas por la red siguen la norma culta».",
            checklist: [
              "Señalo una ganancia y un riesgo concretos.",
              "Distingo la voz de los vecinos y la de la institución.",
              "La frase propuesta para la nota es formal y no juzga a los hablantes.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la columna nombra el tipo de problema antes de decidir qué hacer con él.",
      items: [
        { quote: "Ese es el sello de la ambigüedad accidental: nadie la buscaba y cualquiera puede elegir la lectura que le conviene.", note: "Definición funcional: intención y efecto en el lector." },
        { quote: "La regla que seguimos es la del cambio mínimo, y a veces el cambio mínimo es ninguno.", note: "No se repara lo que el contexto resuelve." },
        { quote: "Esa frase no tiene dos lecturas, tiene una sola y muy difusa.", note: "Vaguedad frente a ambigüedad." },
        { quote: "Son dos juicios distintos, y confundirlos tiene consecuencias.", note: "Gramaticalidad y norma no son lo mismo." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el texto, reparación guiada y escritura breve. Termina recuperando las clases de las semanas anteriores de C2.",
    exercises: [
      {
        id: "c2-06-orden",
        type: "order",
        prompt: "Ordena las palabras para obtener la versión sin ambigüedad.",
        items: [
          {
            words: ["Se", "regalan", "estantes", "de", "madera", "para", "bibliotecas", "escolares."],
            why: "«De madera» junto a «estantes»: ya no puede referirse a las bibliotecas.",
          },
          {
            words: ["No", "todos", "los", "talleres", "son", "gratuitos."],
            why: "«No todos» niega la totalidad: algunos talleres se pagan.",
          },
          {
            words: ["Los", "martes", "solo", "abrimos", "por", "la", "tarde."],
            why: "«Solo» junto a «por la tarde»: el martes no se abre por la mañana.",
          },
        ],
      },
      {
        id: "c2-06-decision",
        type: "context",
        prompt: "Elige la decisión más adecuada para cada texto.",
        items: [
          {
            context: "Novela juvenil que publica la red. Un personaje de catorce años le dice a su amigo: «¿Viste lo que me dijistes ayer?». La narración está en tercera persona.",
            q: "¿Qué haces con «dijistes»?",
            options: [
              "Lo corrijo a «dijisteis».",
              "Lo mantengo si caracteriza al personaje; en la narración uso «dijiste».",
              "Lo marco como agramatical.",
            ],
            answer: 1,
            why: "Forma real y no normativa: puede caracterizar a un personaje en su diálogo.",
          },
          {
            context: "Acta oficial de la junta de la red: «En la asamblea habían sesenta socios».",
            q: "¿Qué decides?",
            options: [
              "Lo mantengo: el acta transcribe lo que se dijo.",
              "Escribo «hubieron sesenta socios».",
              "Escribo «había sesenta socios».",
            ],
            answer: 2,
            why: "El acta es voz institucional: «haber» impersonal va en singular.",
          },
          {
            context: "Bases de un concurso: «Los dos finalistas recibirán un lote de libros».",
            q: "El jurado quiere dejar claro que cada finalista recibe uno. ¿Qué versión eliges?",
            options: [
              "Los dos finalistas recibirán sendos lotes de libros.",
              "Los dos finalistas recibirán varios lotes de libros.",
              "Los dos finalistas recibirán el lote de libros.",
            ],
            answer: 0,
            why: "«Sendos» reparte un lote por cabeza.",
          },
        ],
      },
      {
        id: "c2-06-reparacion",
        type: "transform",
        prompt: "Repara cada frase con la herramienta que se indica y sin cambiar nada más.",
        items: [
          {
            source: "La directora llamó a la tesorera para hablar de su renuncia.",
            instruction: "La renuncia es de la tesorera: sustituye «su renuncia» por «la renuncia de esta».",
            answers: ["La directora llamó a la tesorera para hablar de la renuncia de esta."],
            why: "«Esta» remite a la última mencionada.",
          },
          {
            source: "Se buscan voluntarios para leer a niños con experiencia.",
            instruction: "Cambia el orden para que «con experiencia» vaya con «voluntarios».",
            answers: ["Se buscan voluntarios con experiencia para leer a niños."],
            why: "El complemento queda junto al sustantivo al que modifica.",
          },
          {
            source: "No cancelaron la feria porque había paro de transporte.",
            instruction: "La feria se canceló, pero no por el paro: cambia solo el modo del verbo.",
            answers: ["No cancelaron la feria porque hubiera paro de transporte."],
            why: "Con subjuntivo se niega la causa, no el hecho.",
          },
        ],
      },
      {
        id: "c2-06-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Inventa un eslogan con doble sentido buscado para el club de lectura de adultos mayores de la red y explica en 40–60 palabras qué dos sentidos activa y por qué no debe repararse.",
            model: "Eslogan: «Aquí los años pasan volando… las páginas». Activa dos sentidos: el tiempo que se va rápido cuando uno disfruta y las páginas que pasan al leer. No debe repararse porque la sorpresa del final es el efecto buscado: si explicamos o aclaramos, el lector deja de descubrir la segunda lectura por sí mismo.",
            checklist: [
              "El eslogan tiene dos sentidos reconocibles.",
              "Explico cuáles son.",
              "Justifico por qué no se repara.",
            ],
          },
          {
            prompt: "Escribe una nota de margen (40–60 palabras) para un corrector que ha marcado como «agramatical» la frase «me acuerdo que mi papá vendía papa criolla» en un testimonio. Corrige su juicio con respeto.",
            model: "Gracias por la marca, pero no la llamaría agramatical: «me acuerdo que» es un queísmo muy frecuente en la lengua oral, y en el uso cuidado se prefiere «me acuerdo de que». Como es la voz del testimonio, lo mantendría. Si la frase apareciera en la introducción, sí la corregiría.",
            checklist: [
              "Reformulo el juicio como cuestión de norma, no de gramaticalidad.",
              "Distingo la voz del testimonio de la voz institucional.",
              "El tono es respetuoso y concreto.",
            ],
          },
        ],
      },
      {
        id: "c2-06-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las semanas anteriores de C2 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G207 (indicativo y subjuntivo según perspectiva). Estímulo: «No digo que el reglamento es malo» frente a «No digo que el reglamento sea malo». Explica qué perspectiva adopta quien habla en cada versión.",
            model: "Con «sea», quien habla no asume que el reglamento es malo: simplemente no lo afirma. Con «es», presenta como dado que el reglamento es malo, aunque diga que no es eso lo que quiere señalar; suele ir seguido de «pero…». El modo muestra si la información se asume o queda en suspenso.",
            checklist: [
              "Relaciono el subjuntivo con no asumir la verdad del contenido.",
              "Explico el valor del indicativo como información asumida.",
            ],
          },
          {
            prompt: "Recuperación de la clase G208 (condicional de rumor). Estímulo, titular de un periódico local: «La red cerraría dos bibliotecas en 2027». Explica qué responsabilidad asume el periódico y reescríbelo para un comunicado oficial de la red que confirma el cierre.",
            model: "El condicional presenta la información como no confirmada: el periódico la transmite sin hacerse responsable de su verdad. En un comunicado oficial que confirma el cierre, el condicional sería impropio: «La red cerrará dos bibliotecas en 2027» o «La red ha decidido cerrar dos bibliotecas en 2027».",
            checklist: [
              "Explico el distanciamiento del condicional de rumor.",
              "Uso futuro o una forma asertiva en la versión oficial.",
            ],
          },
          {
            prompt: "Recuperación de la clase G210 (subordinación múltiple sin pérdida de referentes). Estímulo: «La bibliotecaria le dijo a la usuaria que su hermana, que trabajaba en la biblioteca que la red había abierto, le guardaría el libro». Señala dos referentes dudosos y reescribe la frase con una sola lectura.",
            model: "Son dudosos «su hermana» (¿de la bibliotecaria o de la usuaria?) y «le guardaría» (¿a quién?). Versión: «La bibliotecaria le dijo a la usuaria que la hermana de esta, empleada de la nueva biblioteca de la red, le guardaría el libro a ella». También podría dividirse en dos oraciones.",
            checklist: [
              "Identifico al menos dos referentes ambiguos.",
              "La reescritura reduce la subordinación o explicita los referentes.",
            ],
          },
          {
            prompt: "Recuperación de la clase G212 (elipsis compleja). Estímulo: «Juliana prefiere el reglamento nuevo más que Andrés». Explica las dos lecturas que permite la elipsis y escribe una versión para cada una.",
            model: "Puede significar que Juliana prefiere el reglamento nuevo más de lo que lo prefiere Andrés, o que lo prefiere a él, a Andrés. Versiones: «Juliana prefiere el reglamento nuevo más de lo que lo prefiere Andrés» y «Juliana prefiere el reglamento nuevo antes que a Andrés». Recuperar el verbo omitido deshace la ambigüedad.",
            checklist: [
              "Identifico qué material falta en la elipsis.",
              "Escribo una versión explícita para cada lectura.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta el informe de revisión que Juliana entregará a la junta de la red (400–520 palabras). Explica qué se cambió en el reglamento y en la campaña y por qué, qué se dejó igual y por qué, y qué criterio se sigue con las formas no normativas en «Memorias de la plaza».",
    context: "La junta está formada por vecinos sin formación lingüística. Puedes nombrar fenómenos, pero explícalos con ejemplos del propio texto. Usa los casos de esta semana o inventa otros artículos y testimonios con la misma lógica.",
    steps: [
      "Haz una tabla con cuatro columnas: frase original, tipo de problema, decisión y motivo. Incluye al menos un caso que se repara, uno que se deja por el contexto, uno buscado y una forma no normativa.",
      "Decide el orden del informe: criterio general, reglamento, campaña, libro de testimonios y recomendación final.",
      "Redacta sin copiar el modelo. Cita cada frase original entre comillas y da la versión nueva justo después.",
      "Revisa el informe con la lista de control: corrige cualquier «agramatical» mal usado y comprueba que tus propias frases no tienen dobles lecturas accidentales.",
    ],
    useLanguage: [
      "admite dos lecturas / deja una sola lectura",
      "el contexto ya resuelve…",
      "es un doble sentido buscado / es vaguedad, no ambigüedad",
      "es una forma real, pero no normativa",
      "en la voz de la institución… / en la voz de los vecinos…",
      "no todos / ningún; «esta» como referente explícito",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Este informe resume la revisión del reglamento de préstamo, de la campaña del festival y del libro «Memorias de la plaza». Antes de cambiar una frase, nos preguntamos qué tipo de problema tenía. No es lo mismo una frase que dice dos cosas sin querer que una que lo hace a propósito, ni una forma que nadie usa que otra que usan muchos aunque la norma no la recomiende. En el reglamento, el artículo cuatro decía que «todos los materiales audiovisuales no se prestan»; como la junta quería decir que ninguno sale de la biblioteca, ahora dice «ningún material audiovisual se presta a domicilio».",
    ],
    checklist: [
      "Cada reparación elimina la segunda lectura con el cambio mínimo.",
      "Explico al menos un caso que no se repara porque el contexto ya decide.",
      "Distingo doble sentido buscado y vaguedad calculada.",
      "Uso «agramatical» y «no normativo» con precisión.",
      "Justifico el criterio de voz ajena y voz propia para el libro.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Defender los criterios ante la junta",
        prompt: "Eres Juliana. Presenta a la junta, en unos cuatro minutos, los criterios de revisión: un caso reparado, uno que se deja igual, el eslogan y el criterio para los testimonios. Lee cada frase original y explica la decisión.",
        prep: [
          "Elige cuatro ejemplos y anota para cada uno: tipo de problema, decisión y motivo.",
          "Prepara una frase de cierre que resuma el criterio en una línea.",
        ],
        seconds: 240,
        model: "Les cuento cómo trabajamos. Primero, el reglamento: decía «todos los materiales audiovisuales no se prestan», y había usuarios que entendían que algunos sí. Ahora dice «ningún material». En cambio, el artículo siete lo dejamos igual, porque ahí «su préstamo» solo puede ser del usuario. El eslogan, «Préstate a leer», tiene dos sentidos, y eso es lo que queremos…",
        selfCheck: [
          "Hago pausas que separan la cita de la explicación.",
          "No llamo «agramatical» a una forma no normativa.",
          "Cada decisión tiene un motivo claro.",
        ],
      },
      {
        title: "Mediación con un vecino molesto",
        prompt: "Un miembro de la junta protesta: «Si el libro va a estar en la biblioteca, no puede tener errores como “habían” o “me se cayó”; da mal ejemplo». Respóndele con respeto, hazle al menos dos preguntas para entender su preocupación, explica el criterio y propón una solución concreta.",
        prep: [
          "Prepara una frase que reconozca su preocupación.",
          "Ten a mano la diferencia entre la voz de la red y la voz de los vecinos, y la idea de la nota editorial.",
        ],
        seconds: 180,
        model: "Entiendo la preocupación, don Hernán. ¿Le preocupa que los niños aprendan esas formas? ¿O que parezca que no revisamos? Le cuento: en todo lo que escribe la red seguimos la norma culta. Pero el testimonio es la voz de doña Carmenza, y si la corregimos, deja de ser su recuerdo. Podemos poner una nota al comienzo que lo explique.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Explico el criterio sin juzgar a los hablantes.",
          "Propongo una solución concreta.",
        ],
      },
      {
        title: "Leer con la entonación que desambigua",
        prompt: "Lee en voz alta cada par de frases marcando la diferencia con las pausas: «Los socios que pagaron votarán» / «Los socios, que pagaron, votarán»; «No vino porque llovía» / «No vino porque lloviera, sino por cansancio». Después explica en una frase qué cambia en cada par.",
        prep: [
          "Marca con una barra dónde harás cada pausa.",
          "Decide qué tono usarás en las relativas explicativas.",
        ],
        seconds: 90,
        selfCheck: [
          "Las pausas coinciden con las comas.",
          "Explico la diferencia de significado, no solo de sonido.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu tabla de diagnósticos y una duda concreta. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Diagnostica",
        task: "Lleva una frase ambigua real (de un aviso, un contrato o una noticia) y pide a tu profesor que encuentre las dos lecturas antes de explicarle tú cuál es la fuente.",
        phrases: ["Esta frase admite dos lecturas: …", "La ambigüedad nace de…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale qué juicio daría a una forma que oyes a menudo y que no sabes clasificar: ¿agramatical, no normativa o propia de una zona?",
        phrases: ["¿Esto lo dice mucha gente o es un error de aprendiz?", "¿En qué registro lo evitarías?"],
      },
      {
        move: "Defiende",
        task: "Presenta tu decisión más discutible del informe (por ejemplo, no reparar un «su») y pide un contraargumento.",
        phrases: ["Lo dejé así porque el contexto…", "Cambiaría de opinión si…"],
      },
      {
        move: "Crea",
        task: "Propón un eslogan con doble sentido para algo de tu ciudad y pide a tu profesor que diga si se ven los dos sentidos.",
        phrases: ["La gracia está en que…", "¿Se ve la segunda lectura sin explicarla?"],
      },
    ],
    bring: "Tu tabla de diagnósticos, el informe revisado y, si quieres, la grabación de tu presentación ante la junta.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«Todos los asistentes no recibieron certificado.» Quieres decir que algunos sí lo recibieron. ¿Qué versión lo dice sin ambigüedad?",
        options: [
          "Ningún asistente recibió certificado.",
          "No todos los asistentes recibieron certificado.",
          "Todos los asistentes recibieron certificado, no.",
        ],
        answer: 1,
        why: "«No todos» niega la totalidad; «ningún» dice otra cosa.",
      },
      {
        type: "choice",
        q: "¿Qué frase es agramatical, y no solo no normativa?",
        options: [
          "Me se rompió el lápiz.",
          "Habían dos lápices en la mesa.",
          "Los lápiz está rota.",
        ],
        answer: 2,
        why: "Rompe la concordancia nominal: ningún grupo de hablantes nativos la produce.",
      },
      {
        type: "listen",
        q: "Escucha el aviso. ¿Qué entiendes?",
        options: [
          "Que solo los vecinos inscritos pueden entrar.",
          "Que todos los vecinos están inscritos y pueden entrar.",
          "Que nadie puede entrar sin entrada.",
        ],
        answer: 0,
        why: "Sin pausas, la relativa es especificativa: selecciona a los inscritos.",
        audio: "Los vecinos que se inscribieron pueden entrar al auditorio.",
        voice: "es-CO-f",
      },
      {
        type: "gap",
        q: "Nota institucional: Ayer ___ dos talleres simultáneos en la sede de Teusaquillo.",
        answers: [["hubo"]],
        hint: "«Haber» impersonal en un texto formal.",
        why: "En la voz institucional, «haber» impersonal va en singular.",
      },
      {
        type: "gap",
        q: "El coordinador se reunió con el donante cuando ___ llegaba al aeropuerto. (Llegaba el donante.)",
        answers: [["este"]],
        hint: "Un demostrativo que recupera al último mencionado.",
        why: "«Este» remite al donante y elimina la ambigüedad del sujeto implícito.",
      },
      {
        type: "transform",
        source: "Se venden mesas para salones de roble.",
        instruction: "Las mesas son de roble: reordena la frase para que el complemento solo pueda ir con «mesas».",
        answers: ["Se venden mesas de roble para salones."],
        why: "El complemento queda junto al sustantivo que modifica.",
      },
      {
        type: "error",
        sentence: "Informe de la editora: «En el taller habían treinta participantes».",
        answers: ["Informe de la editora: «En el taller había treinta participantes»."],
        why: "Voz institucional: «haber» impersonal en singular.",
      },
      {
        type: "error",
        sentence: "Me alegra de que hayas venido al festival.",
        answers: ["Me alegra que hayas venido al festival.", "Me alegro de que hayas venido al festival."],
        why: "Ultracorrección: «alegrar» sin pronombre reflexivo no lleva «de»; «alegrarse» sí.",
      },
      {
        type: "order",
        words: ["Las", "dos", "autoras", "recibieron", "sendos", "diplomas."],
        why: "«Sendos»: un diploma para cada autora.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un corrector principiante la diferencia entre «agramatical» y «no normativo», con un ejemplo de cada uno, y di qué haría con cada forma en un testimonio y en una nota editorial.",
        model: "«Agramatical» describe algo que ningún grupo de hablantes nativos produce, como «las niño juega». «No normativo» describe una forma real, que muchos dicen con regularidad, pero que las obras de referencia no recomiendan en textos formales, como «habían muchas personas». Lo agramatical se corrige siempre, también en un testimonio, porque suele ser un error de transcripción. Lo no normativo se respeta en la voz de quien habla y se corrige en la nota editorial, que sigue la norma culta.",
        checklist: [
          "Defino los dos términos con precisión.",
          "Doy un ejemplo de cada uno.",
          "Distingo testimonio y nota editorial.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Distingo una ambigüedad accidental de un doble sentido buscado y de la vaguedad calculada.",
      "Reparo dobles lecturas con el cambio mínimo: orden, «no todos» o «ningún», posición de «solo», referente explícito, comas o modo.",
      "Dejo sin tocar lo que el contexto ya resuelve.",
      "Juzgo una forma separando gramaticalidad, aceptabilidad, norma y variación, y respeto la voz ajena sin renunciar a la norma culta en la propia.",
    ],
    review: [
      "Dentro de dos días, tapa la columna derecha de la tabla «Fuentes de ambigüedad accidental» y reconstruye las dos lecturas de cada frase.",
      "Dentro de una semana, busca un aviso público con una doble lectura y escribe su reparación mínima.",
      "En la próxima clase, lee tu informe de revisión y pide a tu profesor que discuta una de tus decisiones.",
    ],
  },
  related: [
    { path: "/gramatica/ambiguedad-intencional-y-ambiguedad-accidental", label: "Clase: Ambigüedad intencional y ambigüedad accidental" },
    { path: "/gramatica/gramaticalidad-aceptabilidad-y-variacion-real", label: "Clase: Gramaticalidad, aceptabilidad y variación real" },
  ],
};
