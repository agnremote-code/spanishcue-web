import type { Module } from "../../types";

/**
 * C1 · semana 12 · Autoestudio espejo de G188 (nominalizaciones evaluativas y
 * densidad informativa) y G189 (conectores de reformulación). Repaso autónomo
 * con el balance de una red ficticia de bibliotecas de barrio de Quito: el
 * informe técnico, la entrevista de radio y la tribuna de opinión. Audio
 * mediante síntesis; sin acreditación regional.
 */
export const c1w12: Module = {
  id: "c1-12",
  level: "c1",
  week: 12,
  kind: "core",
  title: "El cierre de las salas, es decir, la noticia",
  subtitle: "Repaso de cómo condensar hechos en grupos nominales que informan o que opinan, y de cómo volver sobre lo dicho para explicarlo, corregirlo o cerrarlo",
  stop: {
    place: "Quito",
    country: "Ecuador",
  },
  minutes: 135,
  newObjectives: [
    "c1.gram.g188",
    "c1.gram.g189",
    "c1.voc.w12-bibliotecas-barrio",
    "c1.pron.w12-inciso-reformulador",
    "c1.lis.w12-entrevista-radio",
    "c1.read.w12-tribuna-bibliotecas",
    "c1.wri.w12-resumen-ejecutivo",
    "c1.spk.w12-explicar-informe",
    "c1.fun.w12-volver-sobre-lo-dicho",
    "c1.disc.w12-densidad-registro",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo convertir oraciones en grupos nominales densos y precisos, valorar un hecho con un sustantivo que opina cuando el texto lo permite, y explicar, corregir, relativizar o resumir lo que acabo de decir con el conector adecuado.",
    steps: [
      "Repasa en la teoría cómo cambia cada pieza de la oración al nominalizar, qué sustantivos opinan y los cuatro grupos de reformuladores.",
      "Practica con frases del balance anual de una red de bibliotecas de barrio de Quito.",
      "Escucha la entrevista de radio a la directora y lee la tribuna que un escritor publica sobre la red.",
      "Escribe un resumen ejecutivo, revísalo con la lista de control y explícalo en voz alta a un público no especializado.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos herramientas de la prosa expositiva. La primera condensa: convierte oraciones enteras en grupos nominales y permite valorar un hecho con el mismo sustantivo que lo nombra. La segunda descomprime: cuando una frase densa no se entiende, un reformulador la explica, la corrige o la resume. Las dos funcionan juntas en informes, entrevistas y columnas, como las que genera el balance de una red de bibliotecas de barrio en Quito.",
    parts: [
      {
        heading: "De la oración al grupo nominal",
        body: [
          "Al nominalizar, el verbo se convierte en sustantivo y la oración entera se reorganiza. Lo que era sujeto u objeto pasa a complemento con «de»; si aparecen los dos, uno va con «de» y el otro con «por parte de» o «a cargo de». El adverbio se vuelve adjetivo («cerraron repentinamente» → «el cierre repentino»), la negación se expresa con «falta de» o «ausencia de» y la relación entre dos hechos ya no la lleva un conector, sino un verbo de enlace: «provocar», «deberse a», «traducirse en», «obedecer a», «dar lugar a».",
          "El sufijo no es libre: cada verbo tiene su sustantivo consagrado y conviene comprobarlo en el diccionario. Los más frecuentes son «-ción» (la ampliación), «-miento» (el funcionamiento), «-da» (la llegada, la caída), «-dura» (la apertura), «-eza» o «-ura» para cualidades (la pobreza, la amargura) y las formas sin sufijo (el cierre, el aumento, el recorte). Muchos de estos nombres designan a la vez el proceso y su resultado: «la ampliación» es el acto de ampliar y también la parte añadida.",
        ],
        table: {
          caption: "Qué le pasa a cada pieza al nominalizar",
          head: ["En la oración", "En el grupo nominal", "Ejemplo"],
          rows: [
            ["sujeto u objeto", "de + nombre", "la red amplió el horario → la ampliación del horario"],
            ["los dos participantes", "de + objeto, por parte de + agente", "la compra de libros por parte del municipio"],
            ["adverbio", "adjetivo", "cerraron bruscamente → el cierre brusco"],
            ["negación", "falta de, ausencia de", "no hubo personal → la falta de personal"],
            ["conector causal", "verbo de enlace", "como faltó personal, se cerró → la falta de personal provocó el cierre"],
          ],
        },
        examples: [
          { es: "La reducción del presupuesto se tradujo en la supresión de los talleres infantiles.", note: "Dos hechos nominalizados unidos por un verbo de enlace." },
          { es: "La ausencia de mediadores explica el descenso de las visitas en el norte.", note: "La negación pasa a «ausencia de»; la causa, al verbo «explicar»." },
        ],
      },
      {
        heading: "Sustantivos que opinan y riesgos del estilo nominal",
        body: [
          "Algunos sustantivos nombran un hecho y lo juzgan a la vez: «un acierto», «un despropósito», «un derroche», «un atropello», «una chapuza» (coloquial, sobre todo en España), «la torpeza de» + infinitivo, «la valentía de». Con «lo» + adjetivo («lo grave de la decisión», «lo llamativo es que…») se destaca un aspecto. La opinión queda dentro del nombre y el lector la recibe casi como un dato. Por eso son propios de la columna y el editorial, y se evitan en el informe técnico, donde se prefieren nombres neutros: «el cierre», «la reducción», «la variación».",
          "Para generalizar, el español necesita artículo también con abstractos: «La lectura en voz alta mejora la comprensión», no «Lectura en voz alta mejora…». Y el estilo nominal tiene tres riesgos: los verbos vacíos («se procedió a efectuar la revisión» = «se revisó»), las cadenas de «de» que agotan al lector y la desaparición del responsable. «Se produjo un retraso en la entrega de los libros» no dice quién se retrasó; si importa, vuelve al verbo con sujeto.",
        ],
        table: {
          caption: "El mismo hecho, informado o valorado",
          head: ["Informe neutro", "Columna de opinión"],
          rows: [
            ["el cierre de tres salas", "el desmantelamiento de tres salas"],
            ["la compra de mobiliario nuevo", "el derroche en mobiliario"],
            ["la ampliación del horario nocturno", "el acierto de abrir de noche"],
            ["la decisión de suprimir los talleres", "la torpeza de suprimir los talleres"],
          ],
        },
        mistakes: [
          {
            wrong: "Se procedió a la realización de una evaluación de los fondos.",
            right: "Se evaluaron los fondos.",
            why: "«Proceder a la realización de» es un relleno: el verbo pleno dice lo mismo con menos palabras.",
          },
          {
            wrong: "Lectores jóvenes prefieren novela gráfica.",
            right: "Los lectores jóvenes prefieren la novela gráfica.",
            why: "Para generalizar, el sujeto y el objeto abstracto llevan artículo.",
          },
          {
            wrong: "La abrición de la sala nueva fue en marzo.",
            right: "La apertura de la sala nueva fue en marzo.",
            why: "El sustantivo de «abrir» es «apertura»: los sufijos no se eligen libremente.",
          },
        ],
        tip: "Después de escribir un párrafo nominal, cuenta los «de» seguidos. Si hay más de tres, deshaz una nominalización y vuelve al verbo con su sujeto.",
      },
      {
        heading: "Explicar y rectificar lo que acabas de decir",
        body: [
          "Los reformuladores explicativos presentan lo segundo como equivalente a lo primero, pero más claro. «Es decir» sirve para cualquier registro; «esto es» es formal y escrito; «o sea» es propio de la conversación; «en otras palabras» y «dicho de otro modo» suelen traducir un tecnicismo. «A saber» es distinto: no parafrasea, enumera los elementos de algo que acabas de anunciar («dos condiciones, a saber: …»). Detrás de «es decir, que…» o «o sea, que…» el modo no cambia: se conserva el de la frase que reformulas.",
          "Los rectificativos retiran la primera formulación y la sustituyen. «Mejor dicho» corrige un dato o un matiz; «más bien» propone una descripción más ajustada, a menudo tras una negación («no fue un fracaso, sino más bien un aprendizaje»); «o mejor» mejora una propuesta; «digo» es coloquial y corrige al momento un lapsus («el martes, digo, el miércoles»). La diferencia clave: con «es decir» lo primero sigue siendo válido; con «mejor dicho» lo primero se retira.",
        ],
        table: {
          caption: "Explicar o rectificar",
          head: ["Conector", "Función", "Ejemplo"],
          rows: [
            ["es decir / esto es", "explicar con otras palabras", "La red es itinerante, es decir, sus libros viajan en furgoneta."],
            ["o sea", "explicar en la conversación", "Abrimos hasta las diez, o sea, después del trabajo."],
            ["a saber", "enumerar lo anunciado", "Hay dos requisitos, a saber: vivir en el barrio y tener cédula."],
            ["mejor dicho", "corregir un dato", "Son seis salas, mejor dicho, siete con la del mercado."],
            ["más bien", "ajustar una descripción", "No es una biblioteca; es más bien un punto de encuentro."],
            ["digo", "corregir un lapsus (coloquial)", "Abrimos en enero, digo, en febrero."],
          ],
        },
        examples: [
          { es: "El préstamo interbibliotecario, dicho de otro modo, el libro viene a ti, empezó en mayo.", note: "Traduce un tecnicismo a lenguaje cotidiano." },
          { es: "No fue un cierre definitivo, sino más bien una pausa para reorganizar el personal.", note: "«Más bien» ajusta la descripción tras una negación." },
        ],
      },
      {
        heading: "Distanciarse y recapitular",
        body: [
          "Los conectores de distanciamiento restan relevancia a lo anterior: sea como sea, lo que sigue vale igualmente. «En cualquier caso» y «en todo caso» son neutros; «de todos modos» y «de todas formas» son muy frecuentes al conversar. A diferencia de «sin embargo», no oponen dos ideas, sino que hacen que la primera deje de importar: «No sé si el municipio renovará el convenio; en cualquier caso, la sala del sur seguirá abierta hasta diciembre».",
          "Los de recapitulación cierran. «En resumen» y «en suma» (más formal) condensan; «en definitiva» añade la valoración final; «en fin» cierra un tema con cierta resignación y no significa «por fin»; «total, que…» cierra una historia en la conversación; «al fin y al cabo» y «después de todo» introducen la razón que decide la cuestión. Casi todos van al comienzo de su enunciado seguidos de coma; algunos pueden ir en medio, entre comas: «La red, en definitiva, ha salido reforzada».",
        ],
        table: {
          caption: "Cerrar o dejar a un lado",
          head: ["Conector", "Qué hace", "Registro"],
          rows: [
            ["en cualquier caso / en todo caso", "lo anterior no cambia lo que sigue", "neutro"],
            ["de todos modos / de todas formas", "lo mismo, más conversacional", "neutro o coloquial"],
            ["en suma / en resumen", "condensa lo dicho", "formal / neutro"],
            ["en definitiva", "da la valoración final", "neutro"],
            ["en fin", "cierra con resignación", "coloquial o neutro"],
            ["al fin y al cabo", "la razón que lo decide todo", "neutro"],
          ],
        },
        mistakes: [
          {
            wrong: "El informe es largo, a saber, nadie lo va a leer entero.",
            right: "El informe es largo; es decir, nadie lo va a leer entero.",
            why: "«A saber» solo enumera lo anunciado; para explicar una consecuencia, «es decir».",
          },
          {
            wrong: "La sala abre el lunes, es decir, el martes.",
            right: "La sala abre el lunes, mejor dicho, el martes.",
            why: "Si el primer dato se retira, el conector es rectificativo.",
          },
          {
            wrong: "Esperamos dos horas. Por fin, que no vino nadie.",
            right: "Esperamos dos horas. En fin, que no vino nadie.",
            why: "«En fin» cierra con resignación; «por fin» significa «finalmente, tras la espera».",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero decide si el texto pide densidad, valoración o aclaración; después elige el sustantivo o el conector.",
    exercises: [
      {
        id: "c1-12-gramatica-registro",
        type: "context",
        prompt: "Lee la situación y elige la frase que corresponde al texto y a la intención.",
        items: [
          {
            context: "Escribes el informe técnico anual de la red para el municipio.",
            q: "¿Qué frase es adecuada?",
            options: [
              "El despilfarro en mobiliario dejó sin libros a la sala del norte.",
              "La compra de mobiliario redujo la partida destinada a libros en la sala del norte.",
              "Lo escandaloso es que la sala del norte no tenga libros.",
            ],
            answer: 1,
            why: "El informe técnico usa nombres neutros; «despilfarro» y «lo escandaloso» opinan.",
          },
          {
            context: "En la radio, la directora acaba de decir «préstamo interbibliotecario» y nota que el público no lo entiende.",
            q: "¿Cómo sigue?",
            options: [
              "…, a saber, el libro viene a tu barrio desde otra sala.",
              "…, mejor dicho, el libro viene a tu barrio desde otra sala.",
              "…, es decir, el libro viene a tu barrio desde otra sala.",
            ],
            answer: 2,
            why: "Explica el tecnicismo sin retirarlo: «es decir».",
          },
          {
            context: "Un concejal se equivoca de cifra en una rueda de prensa y la corrige.",
            q: "¿Qué dice?",
            options: [
              "Hemos invertido dos millones, mejor dicho, un millón y medio.",
              "Hemos invertido dos millones, en definitiva, un millón y medio.",
              "Hemos invertido dos millones, al fin y al cabo, un millón y medio.",
            ],
            answer: 0,
            why: "Retira el dato y lo sustituye: rectificativo.",
          },
          {
            context: "No sabes si el convenio se renovará, pero la sala del sur seguirá abierta pase lo que pase.",
            q: "¿Qué frase lo expresa?",
            options: [
              "No sabemos si se renovará el convenio; es decir, la sala del sur seguirá abierta.",
              "No sabemos si se renovará el convenio; en cualquier caso, la sala del sur seguirá abierta.",
              "No sabemos si se renovará el convenio; a saber, la sala del sur seguirá abierta.",
            ],
            answer: 1,
            why: "Distanciamiento: la duda anterior no cambia lo que sigue.",
          },
        ],
      },
      {
        id: "c1-12-gramatica-nominalizar",
        type: "gap",
        prompt: "Completa con el sustantivo que corresponde al verbo entre paréntesis.",
        items: [
          { q: "La ___ (abrir) de la sala de Chillogallo atrajo a doscientos vecinos.", answers: [["apertura"]], why: "El sustantivo de «abrir» es «apertura»." },
          { q: "El ___ (cerrar) temporal de la sala del norte se debe a una gotera.", answers: [["cierre"]], why: "Sustantivo sin sufijo: «el cierre»." },
          { q: "La ___ (reducir) del horario provocó quejas de los estudiantes.", answers: [["reducción"]], why: "«-ción» para el proceso de reducir." },
          { q: "El buen ___ (funcionar) del bibliobús depende de un solo conductor.", answers: [["funcionamiento"]], why: "«-miento» para el proceso de funcionar." },
          { q: "La ___ (llegar) de los libros donados se retrasó dos meses.", answers: [["llegada"]], why: "«-da» para el hecho de llegar." },
          { q: "La ___ (pobre) de los fondos en lenguas originarias es evidente.", answers: [["pobreza"]], why: "«-eza» para una cualidad." },
        ],
      },
      {
        id: "c1-12-gramatica-reformuladores",
        type: "classify",
        prompt: "Clasifica cada conector según lo que hace con lo dicho antes.",
        categories: ["Explica", "Rectifica", "Deja a un lado", "Recapitula"],
        items: [
          { text: "esto es", cat: 0, why: "Paráfrasis formal." },
          { text: "dicho de otro modo", cat: 0, why: "Traduce a otras palabras." },
          { text: "mejor dicho", cat: 1, why: "Retira y sustituye." },
          { text: "más bien", cat: 1, why: "Ajusta la descripción." },
          { text: "de todas formas", cat: 2, why: "Lo anterior no cambia lo que sigue." },
          { text: "en todo caso", cat: 2, why: "Distanciamiento neutro." },
          { text: "en suma", cat: 3, why: "Condensa en registro formal." },
          { text: "en definitiva", cat: 3, why: "Cierra con la valoración final." },
        ],
      },
      {
        id: "c1-12-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de nominalización, de artículo o de conector. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "Se procedió a la ejecución de la limpieza de los depósitos.",
            answers: ["Se limpiaron los depósitos."],
            why: "Verbos vacíos en cadena: basta el verbo pleno.",
          },
          {
            sentence: "Hay tres salas nuevas, digo, Cotocollao, Chimbacalle y La Magdalena.",
            answers: ["Hay tres salas nuevas, a saber, Cotocollao, Chimbacalle y La Magdalena.", "Hay tres salas nuevas, a saber: Cotocollao, Chimbacalle y La Magdalena."],
            why: "Se enumeran los elementos anunciados: «a saber».",
          },
          {
            sentence: "Es decir, que el municipio no renueve el convenio.",
            answers: ["Es decir, que el municipio no renueva el convenio.", "Es decir, que el municipio no renovará el convenio."],
            why: "Tras «es decir, que» se mantiene el modo de lo que se reformula: aquí, una afirmación en indicativo.",
          },
          {
            sentence: "Lectura compartida mejora la convivencia en el barrio.",
            answers: ["La lectura compartida mejora la convivencia en el barrio."],
            why: "Para generalizar, el sujeto abstracto lleva artículo.",
          },
        ],
      },
      {
        id: "c1-12-gramatica-reformular",
        type: "open",
        prompt: "Reescribe cada borrador según la instrucción. Hay varias respuestas posibles: compara con el modelo y con la lista.",
        items: [
          {
            prompt: "Borrador: «Como el municipio recortó el presupuesto, no se pudieron contratar mediadores, y por eso bajaron mucho las visitas de adolescentes». Condénsalo en una sola frase nominal de informe con un verbo de enlace, sin valorar.",
            model: "El recorte presupuestario municipal impidió la contratación de mediadores y provocó un fuerte descenso de las visitas adolescentes.",
            checklist: [
              "Convierto los tres hechos en grupos nominales.",
              "Uno los hechos con verbos de enlace, no con conectores.",
              "No uso sustantivos que opinen.",
            ],
          },
          {
            prompt: "Toma la frase anterior y escríbela como la escribiría un columnista crítico: usa un sustantivo evaluativo y un «lo» + adjetivo, y termina con un reformulador de recapitulación.",
            model: "El tijeretazo municipal dejó sin mediadores a la red, y lo más grave es que los adolescentes han dejado de venir. En definitiva, se ahorró en lo que menos se debía.",
            checklist: [
              "Uso un sustantivo que valora el hecho.",
              "Uso «lo» + adjetivo para destacar un aspecto.",
              "Cierro con «en definitiva», «en suma» o «al fin y al cabo».",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de bibliotecas, lectura pública y gestión cultural de barrio.",
    groups: [
      {
        title: "La red de bibliotecas",
        items: [
          { es: "el fondo bibliográfico", note: "conjunto de libros y documentos de una biblioteca" },
          { es: "el préstamo interbibliotecario", note: "envío de un libro de una biblioteca a otra para un lector" },
          { es: "el bibliobús", note: "biblioteca itinerante instalada en un vehículo" },
          { es: "el mediador de lectura", note: "persona que acompaña y anima a leer" },
          { es: "el carné de lector", note: "documento que permite sacar libros en préstamo" },
          { es: "el expurgo", note: "retirada de libros deteriorados u obsoletos" },
          { es: "el club de lectura", note: "grupo que lee y comenta un libro en común" },
        ],
      },
      {
        title: "Gestión y balance",
        items: [
          { es: "la partida presupuestaria", note: "cantidad asignada a un fin concreto en un presupuesto" },
          { es: "el convenio", note: "acuerdo formal entre dos instituciones" },
          { es: "el recorte", note: "reducción de un presupuesto o de un servicio" },
          { es: "el tijeretazo", note: "recorte brusco, dicho con tono crítico" },
          { es: "la memoria anual", note: "documento que resume la actividad de un año" },
          { es: "el indicador", note: "dato que sirve para medir un resultado" },
          { es: "rendir cuentas", note: "explicar públicamente lo que se ha hecho con un recurso" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-12-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el expurgo", right: "retirada de libros deteriorados u obsoletos" },
          { left: "el bibliobús", right: "biblioteca itinerante instalada en un vehículo" },
          { left: "la partida presupuestaria", right: "cantidad asignada a un fin concreto en un presupuesto" },
          { left: "el tijeretazo", right: "recorte brusco, dicho con tono crítico" },
          { left: "rendir cuentas", right: "explicar públicamente lo que se ha hecho con un recurso" },
          { left: "el mediador de lectura", right: "persona que acompaña y anima a leer" },
          { left: "el indicador", right: "dato que sirve para medir un resultado" },
        ],
      },
      {
        id: "c1-12-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["fondo bibliográfico", "convenio", "memoria anual", "club de lectura", "carné de lector"],
        items: [
          { q: "La ___ de la red recoge las visitas, los préstamos y las actividades de cada sala.", answers: [["memoria anual"]] },
          { q: "Para sacar libros a domicilio solo necesitas el ___, que es gratuito.", answers: [["carné de lector"]] },
          { q: "El ___ con la universidad permite que los estudiantes hagan prácticas en las salas.", answers: [["convenio"]] },
          { q: "El ___ de la sala del sur tiene más de nueve mil títulos, muchos en kichwa.", answers: [["fondo bibliográfico"]] },
          { q: "Los jueves por la tarde se reúne el ___ de personas mayores.", answers: [["club de lectura"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El inciso reformulador: pausa, tono más bajo y retorno",
    explanation: [
      "Cuando un reformulador abre un inciso en medio de la frase, la voz lo marca con tres señales: una pausa breve antes, un tono algo más bajo y rápido durante el inciso, y una vuelta al tono normal después. «La red, es decir, las catorce salas, cierra en agosto». Si no bajas el tono, el oyente puede tomar el inciso por un elemento más de la frase.",
      "Al final de una explicación con «es decir» o «o sea», el tono baja, como en una afirmación. Con «mejor dicho» o «digo», la corrección lleva más fuerza que el dato equivocado: «el martes, digo, el MIÉRCOLES». En la escritura, «o sea» se escribe siempre en dos palabras, aunque al hablar suene como una sola.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el ritmo y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "Tres maneras de volver sobre lo dicho en voz alta",
      head: ["Tipo", "Marca prosódica", "Ejemplo"],
      rows: [
        ["inciso explicativo", "pausa, tono bajo, retorno", "La red, es decir, las catorce salas, cierra en agosto."],
        ["rectificación", "acento fuerte en el dato nuevo", "Abrimos el martes, digo, el miércoles."],
        ["recapitulación", "pausa larga antes y tono final descendente", "En definitiva, ha sido un buen año."],
      ],
    },
    perceive: {
      id: "c1-12-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué oyes.",
      items: [
        {
          q: "¿Qué hace quien habla con la segunda cifra?",
          options: ["La corrige: la primera era un error.", "La explica: las dos valen."],
          answer: 0,
          why: "Se oye «mejor dicho» y el acento fuerte cae en el dato nuevo.",
          audio: "Este año hemos prestado cuarenta mil libros, mejor dicho, cuarenta y dos mil.",
          voice: "es-PE-f",
        },
        {
          q: "¿Qué parte de la frase es un inciso?",
          options: ["las catorce salas de barrio", "cierra en agosto", "la red municipal"],
          answer: 0,
          why: "El tono baja tras «es decir» y vuelve a subir en «cierra».",
          audio: "La red municipal, es decir, las catorce salas de barrio, cierra en agosto.",
          voice: "es-CO-m",
        },
        {
          q: "¿Con qué actitud cierra quien habla?",
          options: ["Con entusiasmo.", "Con resignación.", "Con sorpresa."],
          answer: 1,
          why: "«En fin» con tono descendente y alargado expresa resignación.",
          audio: "Pedimos tres mediadores y nos dieron uno. En fin, habrá que organizarse.",
          voice: "es-PE-f",
        },
        {
          q: "¿Qué conector oyes?",
          options: ["esto es", "eso es", "es más"],
          answer: 0,
          why: "«Esto es» reformula; «eso es» confirma lo que ha dicho otro.",
          audio: "Los fondos se renuevan cada lustro, esto es, cada cinco años.",
          voice: "es-CO-m",
        },
      ],
    },
    produce: [
      { text: "El bibliobús, es decir, la biblioteca sobre ruedas, llega los martes a Calderón.", tip: "Baja el tono en el inciso y recupéralo en «llega».", voice: "es-CO-m" },
      { text: "Son trece salas, mejor dicho, catorce con la del mercado.", tip: "Más fuerza en «catorce» que en «trece».", voice: "es-PE-f" },
      { text: "No sé si renovarán el convenio; de todos modos, seguiremos abiertos.", tip: "Pausa clara antes de «de todos modos» y tono final descendente.", voice: "es-CO-m" },
      { text: "En definitiva, la reducción del horario ha sido un error.", tip: "Pausa después de «en definitiva»; acentúa «reducción» y «error».", voice: "es-PE-f" },
    ],
    spelling: "«O sea» se escribe en dos palabras. Los reformuladores en medio de la frase van entre comas: «La red, en definitiva, ha salido reforzada».",
  },
  listening: {
    title: "Las bibliotecas, en la radio",
    context: "Un programa matinal de una radio de Quito entrevista a la directora de la red municipal de bibliotecas de barrio después de la publicación de su memoria anual. A mitad de la entrevista entra la llamada de un oyente. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "h", name: "Hernán", voice: "es-CO-m", role: "Locutor del programa" },
      { id: "v", name: "Verónica", voice: "es-PE-f", role: "Directora de la red de bibliotecas" },
      { id: "o", name: "Óscar", voice: "es-PE-m", role: "Oyente, profesor jubilado" },
    ],
    script: [
      { speaker: "h", text: "Buenos días, Verónica. La memoria anual dice, cito, que «la reducción de la partida destinada a mediación provocó un descenso significativo de las visitas adolescentes». ¿Eso qué significa para quien nos escucha?" },
      { speaker: "v", text: "Significa, dicho de otro modo, que nos quitaron dinero para personas que animan a leer y que, como consecuencia, los chicos de quince años dejaron de venir. O sea, que no es un problema de libros, es un problema de gente." },
      { speaker: "h", text: "¿Cuánto bajaron las visitas?" },
      { speaker: "v", text: "Un treinta por ciento, mejor dicho, un veintiocho; no quiero exagerar. En las salas del norte, algo menos. En las del sur, que dependen más de los mediadores, bastante más." },
      { speaker: "h", text: "Hay quien dice que la compra de mobiliario nuevo fue un despilfarro. ¿Qué responde?" },
      { speaker: "v", text: "Que la compra se hizo con otra partida, a saber, la de inversiones, que no se puede usar para contratar personal. Puede parecer un derroche, pero las sillas de Chimbacalle tenían treinta años. En cualquier caso, entiendo la crítica: la gente ve muebles nuevos y salas sin mediadores." },
      { speaker: "h", text: "Tenemos una llamada. Óscar, adelante." },
      { speaker: "o", text: "Buenos días. Yo voy a la sala de La Magdalena desde que se abrió, y quería decir que lo mejor del año ha sido el bibliobús. Mi vecina no puede caminar y ahora los libros le llegan a la puerta. Eso no sale en ningún indicador." },
      { speaker: "v", text: "Gracias, Óscar. Tiene razón: el bibliobús no aumenta las visitas a las salas, más bien las sustituye, y por eso en la memoria parece que baja la actividad. Habrá que medirlo de otra forma." },
      { speaker: "h", text: "Para terminar, Verónica, ¿cómo resumiría el año?" },
      { speaker: "v", text: "En suma, un año de menos dinero y más imaginación. Perdimos mediadores, abrimos una sala y pusimos un bibliobús en la calle. En definitiva, la red ha resistido. Y, al fin y al cabo, una biblioteca de barrio no se mide solo por las visitas, sino por lo que pasa en el barrio cuando está abierta." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la entrevista completa sin abrir la transcripción. ¿Cuál es el balance de la directora?",
        exercise: {
          id: "c1-12-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la idea general.",
          items: [
            {
              q: "¿Cuál es el principal problema del año según la directora?",
              options: [
                "La falta de libros nuevos en las salas.",
                "La pérdida de mediadores y el descenso de visitas adolescentes.",
                "El cierre definitivo de varias salas del sur.",
              ],
              answer: 1,
              why: "Lo explica al reformular la cita de la memoria.",
            },
            {
              q: "¿Cómo resume el año?",
              options: [
                "Como un fracaso del que hay que aprender.",
                "Como un año normal, sin cambios.",
                "Como un año de resistencia con menos dinero y más imaginación.",
              ],
              answer: 2,
              why: "«En suma, un año de menos dinero y más imaginación.»",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota las cifras, las correcciones y las razones.",
        exercise: {
          id: "c1-12-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Cuánto bajaron las visitas, según el dato corregido?",
              options: ["Un treinta por ciento.", "Un veintiocho por ciento.", "Un quince por ciento."],
              answer: 1,
              why: "«Un treinta por ciento, mejor dicho, un veintiocho.»",
            },
            {
              q: "¿Por qué no se pudo usar el dinero del mobiliario para contratar personal?",
              options: [
                "Porque venía de la partida de inversiones.",
                "Porque lo donó una empresa privada.",
                "Porque se gastó antes del recorte.",
              ],
              answer: 0,
              why: "«A saber, la de inversiones, que no se puede usar para contratar personal.»",
            },
            {
              q: "¿Qué aporta la llamada de Óscar?",
              options: [
                "Una queja sobre los horarios.",
                "Una cifra que contradice la memoria.",
                "Un efecto del bibliobús que los indicadores no recogen.",
              ],
              answer: 2,
              why: "Su vecina recibe los libros en casa, y eso «no sale en ningún indicador».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en qué recurso usa cada frase. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-12-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la entrevista con lo que hace.",
          pairs: [
            { left: "la reducción de la partida destinada a mediación provocó un descenso significativo", right: "hechos nominalizados unidos por un verbo de enlace" },
            { left: "dicho de otro modo, que nos quitaron dinero para personas que animan a leer", right: "traduce un tecnicismo a lenguaje cotidiano" },
            { left: "un treinta por ciento, mejor dicho, un veintiocho", right: "rectifica un dato" },
            { left: "a saber, la de inversiones", right: "concreta lo anunciado" },
            { left: "la compra de mobiliario nuevo fue un despilfarro", right: "sustantivo que opina" },
            { left: "al fin y al cabo, una biblioteca de barrio no se mide solo por las visitas", right: "introduce la razón que lo decide todo" },
          ],
          why: "La directora condensa como en el informe y descomprime como en la radio.",
        },
      },
    ],
  },
  reading: {
    title: "Catorce salas y un bibliobús",
    genre: "Tribuna de opinión en un diario",
    frame: "Tribuna publicada en un diario de Quito por un escritor que colabora con la red. La red, sus salas y sus cifras son ficticias.",
    text: [
      "La memoria anual de la red municipal de bibliotecas de barrio es un documento ejemplar en su género, es decir, casi ilegible. En sus cuarenta páginas se habla de «la optimización de los recursos disponibles», de «la reorientación de la oferta hacia formatos itinerantes» y de «la consolidación de los indicadores de uso». Traducido al idioma de los vecinos, eso significa lo siguiente: este año hubo menos dinero, menos personas que animen a leer y un bibliobús que recorre los barrios del sur con mil doscientos libros a bordo.",
      "No culpo a quienes la redactaron. El informe técnico tiene sus reglas, y una de ellas es no opinar. Por eso la memoria habla de «la reducción de la partida destinada a mediación» y no del tijeretazo que dejó a la red con cuatro mediadores para catorce salas. Por eso dice que esa reducción «provocó un descenso significativo de las visitas adolescentes» y no que los chicos de Chillogallo y de Guamaní dejaron de venir porque ya no había nadie esperándolos. Los dos enunciados son ciertos; el segundo, además, duele.",
      "Lo grave de la decisión municipal no es el ahorro en sí, sino dónde se aplicó. Se recortó en personas y se mantuvo la inversión en mobiliario, lo que en los barrios se ha leído como un derroche. Conviene ser justos: la compra de sillas y estanterías se hizo con otra partida, a saber, la de inversiones, que por ley no puede destinarse a contratar personal. Mejor dicho, no se podía usar ese dinero para mediadores aunque se quisiera. Pero la explicación técnica no cambia la percepción: el vecino ve muebles nuevos en una sala vacía y saca sus conclusiones.",
      "Hay, en cualquier caso, motivos para el optimismo. La apertura de la sala de La Magdalena, con su fondo en kichwa y su club de lectura de personas mayores, ha sido un acierto indiscutible. Y el bibliobús, que la memoria despacha en dos líneas, es más bien el gran éxito del año. Un profesor jubilado lo explicaba hace unos días en la radio: su vecina, que no puede caminar, recibe ahora los libros en la puerta de casa. Ese préstamo no aparece como visita en ninguna estadística, o sea, para los indicadores es como si no existiera.",
      "Ahí está, a mi juicio, la lección del año. Cuando una institución solo cuenta lo que pasa dentro de sus paredes, la llegada de una biblioteca a la calle parece una caída de la actividad. La directora de la red lo reconoció con honestidad: habrá que medir de otra forma. Yo añadiría que habrá que escribir de otra forma. Una memoria pública no es solo un trámite para el municipio, sino una rendición de cuentas ante los vecinos, y los vecinos tienen derecho a entenderla sin diccionario.",
      "En suma, la red ha tenido un año difícil y lo ha resuelto con más imaginación que recursos. Ha perdido mediadores, ha ganado una sala y ha sacado los libros a la calle. Que el próximo presupuesto devuelva las personas que se llevó el recorte sería lo mínimo. Que la próxima memoria lo cuente en un español que entiendan los lectores de esas catorce salas sería, al fin y al cabo, la mejor prueba de que las bibliotecas sirven para algo.",
    ],
    glossary: [
      { es: "kichwa", note: "lengua originaria hablada en Ecuador" },
      { es: "despachar", note: "aquí, tratar algo de forma rápida y superficial" },
      { es: "trámite", note: "paso administrativo que hay que cumplir" },
    ],
    tasks: [
      {
        id: "c1-12-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la tribuna.",
        items: [
          {
            q: "¿Qué critica el autor de la memoria anual?",
            options: [
              "Que es difícil de entender para los vecinos.",
              "Que contiene cifras falsas.",
              "Que oculta la apertura de una sala nueva.",
            ],
            answer: 0,
            why: "La llama «casi ilegible» y pide que se escriba de otra forma.",
          },
          {
            q: "¿Qué reconoce el autor sobre la compra de mobiliario?",
            options: [
              "Que fue el mayor error del año.",
              "Que el dinero no podía usarse legalmente para contratar mediadores.",
              "Que la pagaron los propios vecinos.",
            ],
            answer: 1,
            why: "La partida de inversiones no puede destinarse a personal.",
          },
          {
            q: "¿Por qué el bibliobús parece reducir la actividad?",
            options: [
              "Porque solo funciona en verano.",
              "Porque tiene menos libros que una sala.",
              "Porque sus préstamos no cuentan como visitas en las estadísticas.",
            ],
            answer: 2,
            why: "«Ese préstamo no aparece como visita en ninguna estadística.»",
          },
        ],
      },
      {
        id: "c1-12-lectura-recursos",
        type: "classify",
        prompt: "Clasifica cada expresión de la tribuna según su función.",
        categories: ["Nombre neutro de informe", "Nombre que opina", "Reformulador"],
        items: [
          { text: "la reducción de la partida destinada a mediación", cat: 0 },
          { text: "el tijeretazo", cat: 1 },
          { text: "un derroche", cat: 1 },
          { text: "un acierto indiscutible", cat: 1 },
          { text: "la consolidación de los indicadores de uso", cat: 0 },
          { text: "mejor dicho", cat: 2 },
          { text: "en suma", cat: 2 },
        ],
      },
      {
        id: "c1-12-lectura-evaluacion",
        type: "open",
        prompt: "Analiza la tribuna como texto argumentativo.",
        items: [
          {
            prompt: "El autor cita frases de la memoria y las «traduce». Elige dos de esas traducciones y explica en 80–100 palabras qué gana y qué pierde el lector con cada versión.",
            model: "Cuando el autor traduce «la reducción de la partida destinada a mediación» por «el tijeretazo que dejó a la red con cuatro mediadores», el lector gana un dato concreto y una valoración, pero pierde la neutralidad del informe. Al pasar de «un descenso significativo de las visitas adolescentes» a «los chicos de Chillogallo dejaron de venir», recupera a las personas y el lugar, aunque la cifra desaparece. La versión técnica es precisa y fría; la de la tribuna es comprensible y emotiva, y por eso convence más, pero también es más discutible.",
            checklist: [
              "Cito literalmente las dos parejas de frases.",
              "Explico qué gana el lector con cada versión.",
              "Explico qué se pierde, no solo qué se gana.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la tribuna alterna la densidad del informe con la claridad de la columna.",
      items: [
        { quote: "es un documento ejemplar en su género, es decir, casi ilegible", note: "«Es decir» con valor irónico: la explicación da la vuelta al elogio." },
        { quote: "la reducción de la partida destinada a mediación", note: "Grupo nominal neutro, típico del informe técnico." },
        { quote: "Lo grave de la decisión municipal no es el ahorro en sí", note: "«Lo» + adjetivo para destacar un aspecto con valoración." },
        { quote: "a saber, la de inversiones", note: "«A saber» concreta lo anunciado: «otra partida»." },
        { quote: "Mejor dicho, no se podía usar ese dinero para mediadores aunque se quisiera.", note: "El autor rectifica su propia formulación para ser más exacto." },
        { quote: "es más bien el gran éxito del año", note: "«Más bien» ajusta la valoración que hace la memoria." },
        { quote: "En suma, la red ha tenido un año difícil", note: "Recapitulación formal en el último párrafo." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención, relación de formas y escritura guiada sobre las dos clases de la semana.",
    exercises: [
      {
        id: "c1-12-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases del balance de la red.",
        items: [
          {
            words: ["La", "falta", "de", "mediadores", "explica", "el", "descenso", "de", "las", "visitas."],
            why: "Negación nominalizada y verbo de enlace.",
          },
          {
            words: ["Hay", "dos", "salas", "nuevas,", "a", "saber,", "Calderón", "y", "La", "Magdalena."],
            why: "«A saber» enumera lo anunciado.",
          },
          {
            words: ["No", "fue", "un", "cierre,", "sino", "más", "bien", "una", "pausa."],
            why: "«Más bien» ajusta la descripción tras una negación.",
          },
        ],
      },
      {
        id: "c1-12-intencion",
        type: "context",
        prompt: "Elige la frase que corresponde a la intención descrita.",
        items: [
          {
            context: "Escribes una carta al director muy crítica con la compra de mobiliario.",
            q: "¿Qué frase transmite tu valoración dentro del propio sustantivo?",
            options: [
              "La adquisición de mobiliario se realizó en marzo.",
              "El derroche en mobiliario es una burla a los vecinos.",
              "La compra de mobiliario tuvo un coste elevado.",
            ],
            answer: 1,
            why: "«Derroche» y «burla» nombran y juzgan a la vez.",
          },
          {
            context: "Cuentas a un amigo una reunión larga y frustrante y quieres cerrar la historia.",
            q: "¿Cómo terminas?",
            options: [
              "Total, que nos fuimos sin decidir nada.",
              "En suma, que nos fuimos sin decidir nada.",
              "A saber, que nos fuimos sin decidir nada.",
            ],
            answer: 0,
            why: "«Total, que…» cierra un relato en la conversación.",
          },
          {
            context: "Quieres tranquilizar a una compañera que teme haber fallado: el error fue pequeño y se arregló.",
            q: "¿Qué dices?",
            options: [
              "Mejor dicho, se arregló en una hora.",
              "A saber, se arregló en una hora.",
              "Al fin y al cabo, se arregló en una hora.",
            ],
            answer: 2,
            why: "«Al fin y al cabo» introduce la razón que decide la cuestión.",
          },
        ],
      },
      {
        id: "c1-12-verbos-enlace",
        type: "match",
        prompt: "Relaciona cada verbo de enlace con la relación que expresa entre dos hechos nominalizados.",
        pairs: [
          { left: "provocar", right: "el primer hecho causa el segundo" },
          { left: "deberse a", right: "el primer hecho tiene su causa en el segundo" },
          { left: "traducirse en", right: "el primer hecho se concreta en el segundo" },
          { left: "impedir", right: "el primer hecho no deja que ocurra el segundo" },
          { left: "permitir", right: "el primer hecho hace posible el segundo" },
        ],
      },
      {
        id: "c1-12-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Piensa en un cambio reciente en un servicio que usas (transporte, gimnasio, centro de salud). Escribe 50–70 palabras como lo diría un informe neutro: al menos tres grupos nominales y dos verbos de enlace.",
            model: "La ampliación del horario del centro de salud hasta las nueve permitió la atención de pacientes con jornada laboral completa. Sin embargo, la falta de personal administrativo provocó un aumento del tiempo de espera telefónica, que se debe también a la reducción de las citas presenciales.",
            checklist: [
              "Uso al menos tres grupos nominales con el sustantivo correcto.",
              "Uno los hechos con verbos de enlace.",
              "No uso sustantivos que opinen.",
            ],
          },
          {
            prompt: "Cuenta el mismo cambio en 50–70 palabras a una persona que no conoce el tema, como si hablaras en la radio. Usa un explicativo, un rectificativo y un recapitulativo.",
            model: "El centro de salud amplió el horario, es decir, ahora puedes ir después del trabajo. Eso sí, hay menos administrativos, así que el teléfono tarda una hora, mejor dicho, a veces más. En definitiva, mejor para quien trabaja, peor para quien llama.",
            checklist: [
              "Uso un conector de cada uno de los tres grupos.",
              "El rectificativo retira de verdad un dato.",
              "El registro es oral y comprensible.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta un resumen ejecutivo (230–320 palabras) del balance anual de un servicio o proyecto que conozcas: una asociación, un departamento, un club, un programa municipal. Debe tener tres párrafos: datos principales en estilo nominal neutro, explicación de los puntos difíciles con reformuladores y una conclusión que recapitule.",
    context: "El resumen irá al principio de la memoria y lo leerán dos públicos a la vez: la junta o el organismo que financia, que espera datos precisos, y los usuarios del servicio, que quieren entender qué ha pasado sin leer cuarenta páginas.",
    steps: [
      "Anota cinco hechos del año y conviértelos en grupos nominales con el sustantivo correcto (compruébalo en el diccionario).",
      "Decide qué dos datos necesitan una explicación para el público general y qué conector usarás (es decir, dicho de otro modo, a saber, mejor dicho).",
      "Redacta los tres párrafos y une los hechos con verbos de enlace, no solo con conectores.",
      "Revisa el texto: corrige los verbos vacíos, las cadenas de más de tres «de» y los sustantivos que opinan en la parte neutra.",
    ],
    useLanguage: [
      "la ampliación de, la reducción de, la falta de, la apertura de",
      "provocar, deberse a, traducirse en, permitir, impedir",
      "es decir, esto es, dicho de otro modo, a saber",
      "mejor dicho, más bien",
      "en cualquier caso, de todos modos",
      "en suma, en definitiva, al fin y al cabo",
    ],
    model: [
      "El ejercicio de este año en la escuela de música del barrio se caracterizó por la estabilidad de la matrícula y la diversificación de la oferta. La incorporación de dos profesoras de percusión permitió la apertura de un taller de tambores para adultos, y la firma de un convenio con el colegio público se tradujo en la llegada de sesenta alumnos nuevos. La reducción de la subvención autonómica, en cambio, obligó a la suspensión temporal de las clases de canto.",
      "Dos datos requieren una explicación. La memoria recoge «un descenso de la ocupación de las aulas en horario de mañana»; dicho de otro modo, por las mañanas hay salas vacías, porque los nuevos alumnos vienen del colegio y solo pueden asistir por la tarde. Por otra parte, el gasto en instrumentos aumentó un veinte por ciento, mejor dicho, un dieciocho, y ese aumento se debe a una sola compra, a saber, el piano de cola que había que sustituir desde hacía años. No sabemos aún si la subvención se recuperará el próximo curso; en cualquier caso, las clases de canto volverán en enero con una cuota reducida.",
      "En suma, la escuela ha crecido en alumnos y en actividades, aunque con menos recursos públicos. La junta considera que el balance es positivo y que el próximo reto es aprovechar las mañanas, más bien con cursos para mayores que con clases infantiles. Al fin y al cabo, una escuela de barrio se mide por la gente que la llena.",
    ],
    checklist: [
      "Los datos del primer párrafo están en grupos nominales neutros y bien formados.",
      "Uno los hechos con verbos de enlace y no hay verbos vacíos ni cadenas largas de «de».",
      "Uso al menos un explicativo, un rectificativo y un conector de distanciamiento.",
      "La conclusión recapitula con el conector adecuado.",
      "El texto tiene tres párrafos y lo entiende alguien que no conoce el servicio.",
    ],
    words: [230, 320],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Explicar un informe a un público no especializado",
        prompt: "Imagina que te entrevistan en una radio local sobre el balance del servicio de tu resumen ejecutivo (o de la red de bibliotecas). Habla durante cuatro minutos: lee en voz alta una frase técnica de la memoria, tradúcela para los oyentes, corrige un dato que hayas dado mal, responde a una crítica y cierra con una recapitulación.",
        prep: [
          "Elige dos frases nominales del informe y prepara su traducción con «es decir» o «dicho de otro modo».",
          "Prepara un dato que corregirás en directo con «mejor dicho».",
          "Anota una crítica posible y tu respuesta con «en cualquier caso».",
          "Termina con «en suma» o «en definitiva» y una frase con «al fin y al cabo».",
        ],
        seconds: 240,
        model: "La memoria dice que «la reducción de la subvención obligó a la suspensión temporal de las clases de canto». Dicho de otro modo: nos dieron menos dinero y tuvimos que parar el canto unos meses. La matrícula subió un diez por ciento, mejor dicho, un nueve. Hay quien dice que el piano fue un capricho; puede parecerlo, pero el viejo no se podía afinar. En cualquier caso, el canto vuelve en enero. En suma, un año con menos dinero y más alumnos. Al fin y al cabo, eso es lo que importa.",
        selfCheck: [
          "Traduzco al menos dos frases técnicas sin perder la información.",
          "Uso un rectificativo para corregir un dato de verdad.",
          "Marco los incisos con pausa y tono más bajo.",
          "Cierro con una recapitulación clara.",
        ],
      },
      {
        title: "Responder a una crítica en una asamblea",
        prompt: "En la asamblea de usuarios, una persona dice: «Lo de los muebles nuevos fue un despilfarro». Pregúntale qué datos tiene, aclara de dónde salió el dinero, reconoce lo que tiene de razón y propón una solución.",
        prep: [
          "Prepara una pregunta para conocer su información.",
          "Ten a mano «a saber», «más bien» y «de todos modos».",
        ],
        seconds: 150,
        model: "Entiendo la crítica. ¿Sabes de qué partida salió el dinero? Salió de inversiones, a saber, un fondo que no se puede usar para contratar personas. No fue tanto un despilfarro como, más bien, una compra que llegó en mal momento. De todos modos, tienes razón en lo importante: faltan mediadores. Propongo que la asamblea lo pida por escrito al municipio.",
        selfCheck: [
          "Pregunto antes de responder.",
          "Reformulo la crítica sin despreciarla.",
          "Termino con una propuesta concreta.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase una frase muy nominal de un documento oficial y tu traducción al lenguaje cotidiano.",
    cards: [
      {
        move: "Traduce",
        task: "Lee a tu profesor una frase técnica de tu trabajo o de un documento público y tradúcela en voz alta con «es decir» o «dicho de otro modo».",
        phrases: ["Traducido al idioma de todos…", "Dicho de otro modo…"],
      },
      {
        move: "Valora",
        task: "Presenta el mismo hecho dos veces: como lo diría un informe y como lo diría una columna crítica. Tu profesor adivina cuál es cuál y por qué.",
        phrases: ["El informe diría…", "Una columna lo llamaría…"],
      },
      {
        move: "Corrige",
        task: "Cuenta una anécdota con tres datos, corrige uno de ellos con «mejor dicho» o «digo» y ciérrala con «total, que…».",
        phrases: ["…mejor dicho…", "Total, que…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale a tu profesor si en su variedad se usa «o sea» como muletilla y cómo suena en una entrevista formal.",
        phrases: ["¿«O sea» suena informal?", "¿Qué usarías en una entrevista?"],
      },
    ],
    bring: "Tu frase técnica traducida, el resumen ejecutivo revisado y, si quieres, la grabación de la entrevista.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Cuál es la nominalización correcta de «los vecinos participaron activamente»?",
        options: [
          "la participación activa de los vecinos",
          "la participación activamente de los vecinos",
          "el participamiento activo de los vecinos",
        ],
        answer: 0,
        why: "El adverbio pasa a adjetivo y el sustantivo de «participar» es «participación».",
      },
      {
        type: "choice",
        q: "«Hay tres requisitos, ___: ser mayor de edad, vivir en el distrito y presentar la cédula.»",
        options: ["mejor dicho", "en definitiva", "a saber"],
        answer: 2,
        why: "«A saber» enumera los elementos anunciados.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué hace quien habla con la segunda formulación?",
        options: [
          "La explica sin retirar la primera.",
          "Retira la primera y la sustituye.",
          "Resume todo lo anterior.",
        ],
        answer: 1,
        why: "«Más bien» sustituye una descripción por otra más ajustada.",
        audio: "No fue una mala gestión; fue, más bien, una mala suerte que nadie podía prever.",
        voice: "es-PE-f",
      },
      {
        type: "gap",
        q: "La ___ (abrir) de la nueva sala se retrasó por la ___ (faltar) de permisos.",
        answers: [["apertura"], ["falta"]],
        hint: "El primer sustantivo no termina en -ción; el segundo expresa una ausencia.",
        why: "«Abrir» → «apertura»; la negación nominalizada se expresa con «falta de».",
      },
      {
        type: "gap",
        q: "No sé si nos darán la subvención; ___, el curso empezará en marzo.",
        answers: [["en cualquier caso", "en todo caso", "de todos modos", "de todas formas"]],
        hint: "Conector de distanciamiento: la duda anterior no cambia lo que sigue.",
        why: "Distanciamiento: sea cual sea la respuesta, el curso empieza.",
      },
      {
        type: "error",
        sentence: "Se procedió a efectuar la renovación de los carnés.",
        answers: ["Se renovaron los carnés."],
        why: "Verbos vacíos: el verbo pleno basta.",
      },
      {
        type: "error",
        sentence: "Llegamos a las ocho, es decir, a las nueve; me equivoqué.",
        answers: ["Llegamos a las ocho, mejor dicho, a las nueve; me equivoqué.", "Llegamos a las ocho, digo, a las nueve; me equivoqué."],
        why: "Si el primer dato se retira, el conector es rectificativo.",
      },
      {
        type: "order",
        words: ["En", "definitiva,", "la", "red", "ha", "salido", "reforzada."],
        why: "Recapitulación con valoración final al comienzo de la frase.",
      },
      {
        type: "open",
        prompt: "Escribe dos versiones (40–60 palabras cada una) de un mismo hecho: el cierre de un parque por obras. La primera, para un informe técnico con estilo nominal; la segunda, para una columna de opinión con un sustantivo evaluativo y un reformulador.",
        model: "Informe: «El cierre del parque central por las obras de drenaje provocó el traslado de las actividades infantiles al polideportivo y la reducción del uso del espacio verde durante cuatro meses». Columna: «El cierre del parque, es decir, cuatro meses sin un solo árbol para los niños del centro, ha sido un despropósito. En definitiva, se planificó la obra sin pensar en quien la sufre».",
        checklist: [
          "La primera versión es nominal y neutra.",
          "La segunda usa un sustantivo que opina y un reformulador.",
          "Las dos cuentan el mismo hecho.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Convierto oraciones en grupos nominales y sé qué pasa con el sujeto, el adverbio, la negación y la causa.",
      "Distingo los sustantivos que informan de los que opinan y los uso según el tipo de texto.",
      "Evito los verbos vacíos, las cadenas de «de» y la desaparición del responsable.",
      "Explico, rectifico, dejo a un lado o resumo lo dicho con el reformulador adecuado y bien puntuado.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Qué le pasa a cada pieza al nominalizar» y nominaliza tres oraciones de una noticia.",
      "Dentro de una semana, escucha una entrevista en la radio y apunta cada reformulador que oigas y su función.",
      "En la próxima clase, lee tu resumen ejecutivo y pide a tu profesor que lo convierta en titular de prensa.",
    ],
  },
  related: [
    { path: "/gramatica/nominalizaciones-evaluativas-y-densidad-informativa", label: "Clase: Nominalizaciones evaluativas y densidad informativa" },
    { path: "/gramatica/conectores-de-reformulacion-es-decir-a", label: "Clase: Conectores de reformulación: es decir, a saber, mejor dicho" },
  ],
};
