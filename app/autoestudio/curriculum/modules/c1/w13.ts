import type { Module } from "../../types";

/**
 * C1 · semana 13 · Autoestudio espejo de G190 (conectores contraargumentativos
 * y restrictivos) y G191 (atenuación). Repaso autónomo con un bar familiar
 * ficticio del Albaicín de Granada que quiere cambiar su carta de tapas. Audio
 * mediante síntesis; sin acreditación regional.
 */
export const c1w13: Module = {
  id: "c1-13",
  level: "c1",
  week: 13,
  kind: "core",
  title: "No es que la tapa sea mala, sino que ya no es gratis",
  subtitle: "Repaso de cómo sustituir, contraponer y restringir una idea, y de cómo rebajar la fuerza de una crítica sin cambiar el mensaje",
  stop: {
    place: "Granada",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c1.gram.g190",
    "c1.gram.g191",
    "c1.voc.w13-bar-tapas",
    "c1.pron.w13-sino-si-no",
    "c1.lis.w13-reunion-familiar",
    "c1.read.w13-resena-gastronomica",
    "c1.wri.w13-informe-critico",
    "c1.spk.w13-critica-constructiva",
    "c1.fun.w13-discrepar-con-tacto",
    "c1.disc.w13-matizar-argumento",
  ],
  reviewObjectives: ["c1.gram.g188","c1.gram.g189","c1.voc.w12-bibliotecas-barrio","c1.pron.w12-inciso-reformulador","c1.lis.w12-entrevista-radio","c1.read.w12-tribuna-bibliotecas","c1.wri.w12-resumen-ejecutivo","c1.spk.w12-explicar-informe","c1.fun.w12-volver-sobre-lo-dicho","c1.disc.w12-densidad-registro"],
  prerequisites: ["c1-12"],
  goal: {
    canDo: "Puedo corregir, contraponer y limitar una idea con el conector preciso y el modo adecuado, y dar una opinión crítica rebajando su fuerza lo justo para que el mensaje llegue y la relación no se resienta.",
    steps: [
      "Repasa en la teoría la diferencia entre pero, sino y aunque, los conectores que restringen y las cuatro maneras de atenuar.",
      "Practica con frases de un bar familiar del Albaicín que quiere cambiar su carta de tapas.",
      "Escucha la reunión de la familia y lee la reseña que publica un crítico gastronómico.",
      "Escribe un informe crítico para alguien con quien tienes que seguir trabajando, revísalo y preséntalo en voz alta.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que se usan juntas cada vez que discrepas. La primera te da los conectores para decir que algo no es así, sino de otra manera, que dos cosas son distintas o que algo vale con una excepción. La segunda te enseña a dosificar: a decir lo mismo con menos fuerza para no herir. Un argumento bien construido y bien atenuado convence más que uno brusco. El escenario es un bar familiar del Albaicín, en Granada, donde la hija del dueño quiere renovar la carta.",
    parts: [
      {
        heading: "Sustituir o contraponer: sino, sino que, en cambio",
        body: [
          "«Pero», «sino» y «aunque» no son intercambiables. «Pero» limita lo anterior sin negarlo («es caro, pero bueno»). «Sino» va siempre detrás de una negación y sustituye lo negado por lo correcto («no es caro, sino justo»). «Aunque» concede algo para restarle peso («aunque es caro, vale la pena»). Si lo que sustituye es una oración con verbo conjugado, se usa «sino que»: «no bajaron los precios, sino que los subieron». «Antes bien», formal y escrito, introduce lo que de verdad ocurre, a menudo lo contrario de lo esperado. Y «no solo… sino (que) también» no sustituye: suma.",
          "Para contraponer dos realidades verdaderas a la vez, sin negar ninguna, se usan «en cambio» (neutro), «por el contrario» (más formal), «mientras que» (une las dos en una oración) y «frente a» + nombre. No confundas «sino» con «si no», que es una condición: si puedes decir «en caso de que no», va separado.",
        ],
        table: {
          caption: "Tres movimientos distintos",
          head: ["Conector", "Qué hace", "Ejemplo"],
          rows: [
            ["pero", "limita sin negar", "La tapa es pequeña, pero sabrosa."],
            ["sino", "sustituye lo negado", "No es una tapa, sino casi un plato."],
            ["sino que", "sustituye con verbo conjugado", "No subieron la caña, sino que cobraron la tapa."],
            ["en cambio", "contrapone dos verdades", "En el centro cobran la tapa; en el Albaicín, en cambio, sigue siendo gratis."],
            ["mientras que", "contrapone en una oración", "Los turistas piden raciones, mientras que los vecinos prefieren tapear."],
            ["frente a + nombre", "contrapone con un grupo nominal", "Frente a la tapa gratuita, la carta propone tapas de autor."],
          ],
        },
        examples: [
          { es: "El cambio no espantó a la clientela, antes bien, atrajo a un público nuevo.", note: "«Antes bien» presenta lo contrario de lo que se temía." },
          { es: "No solo cambiaron la carta, sino que también renovaron la barra.", note: "«No solo… sino que también» suma, no sustituye." },
        ],
      },
      {
        heading: "Restringir y sacar consecuencias con el modo adecuado",
        body: [
          "Para limitar lo que acabas de afirmar, «salvo que» y «excepto que» + indicativo presentan la única excepción como un hecho («abrimos todos los días, salvo que los lunes cerramos a las cinco»); con subjuntivo, «salvo que» pone una condición («abriremos el lunes, salvo que llueva»). «Excepto», «salvo» y «menos» + nombre funcionan como preposición, pero llevan «yo» y «tú»: «todos, excepto yo». En la conversación, «solo que» añade una pega a algo que valoras, «lo que pasa es que» y «el caso es que» presentan el dato que complica las cosas, y «si acaso» propone lo máximo que estarías dispuesto a hacer (no es «por si acaso», que significa «como precaución»).",
          "Para sacar una consecuencia formal, «de ahí que» va con subjuntivo: presenta el resultado como explicado por lo anterior. «De modo que», «de manera que» y «de forma que» cambian de significado con el modo: con indicativo expresan un resultado real; con subjuntivo, una finalidad, como «para que».",
        ],
        table: {
          caption: "El modo cambia el significado",
          head: ["Forma", "Modo", "Valor", "Ejemplo"],
          rows: [
            ["salvo que", "indicativo", "excepción real", "Todo es casero, salvo que el pan lo compramos."],
            ["salvo que", "subjuntivo", "condición", "Mañana servimos caracoles, salvo que no llegue el pedido."],
            ["de ahí que", "subjuntivo", "consecuencia explicada", "Los vecinos se van del barrio; de ahí que el bar dependa del turismo."],
            ["de modo que", "indicativo", "resultado", "Subió el alquiler, de modo que tuvimos que cobrar la tapa."],
            ["de modo que", "subjuntivo", "finalidad", "Ponemos la carta en la puerta, de modo que nadie se lleve sorpresas."],
          ],
        },
        mistakes: [
          {
            wrong: "No es una carta cara, pero muy cuidada.",
            right: "No es una carta cara, sino muy cuidada.",
            why: "Tras una negación, para sustituir, «sino».",
          },
          {
            wrong: "No mantuvieron la tapa gratis, sino la cobraron.",
            right: "No mantuvieron la tapa gratis, sino que la cobraron.",
            why: "Si lo que sustituye tiene verbo conjugado, «sino que».",
          },
          {
            wrong: "Todos votaron a favor, excepto mí.",
            right: "Todos votaron a favor, excepto yo.",
            why: "«Excepto», «salvo» y «menos» llevan «yo» y «tú».",
          },
        ],
        tip: "Antes de escribir «pero» después de una negación, pregúntate si quieres limitar o sustituir. Si lo segundo, es «sino».",
      },
      {
        heading: "Atenuar: acotar y rebajar sin cambiar el mensaje",
        body: [
          "Atenuar es rebajar la fuerza de lo que dices, no cambiar lo que dices. La primera técnica es acotar: limitar el alcance de una afirmación con «hasta cierto punto», «en cierta medida», «en cierto modo», «en parte» o «digamos». Van sin artículo («hasta cierto punto», nunca «hasta un cierto punto») y pueden ir al principio, entre comas o al final.",
          "La segunda técnica es rebajar el tamaño del problema. «Un poco» y «algo» acompañan a cualidades negativas o excesivas («un poco salado»); con adjetivos positivos suenan irónicos, y para un elogio moderado se usa «bastante». Ojo: «poco» sin «un» niega («poco salado» = casi sin sal). La lítote dice algo negando lo contrario: «no es precisamente barato» (es caro), «no está mal» (está bien). «No es que» + subjuntivo rechaza una interpretación extrema antes de dar la crítica real: «no es que la tapa sea mala, pero…». Los diminutivos («un poquito», «un ratito») suavizan en la conversación.",
        ],
        table: {
          caption: "La misma crítica, cuatro grados",
          head: ["Técnica", "Versión"],
          rows: [
            ["directa", "La carta es demasiado cara para el barrio."],
            ["acotar", "La carta es, hasta cierto punto, cara para el barrio."],
            ["rebajar", "La carta es un poco cara para el barrio."],
            ["lítote", "La carta no es precisamente barata para el barrio."],
            ["no es que + subjuntivo", "No es que la carta sea cara, pero el barrio no está acostumbrado."],
          ],
        },
        mistakes: [
          {
            wrong: "El vino de la casa es un poco bueno.",
            right: "El vino de la casa es bastante bueno.",
            why: "«Un poco» con un adjetivo positivo suena irónico; para un elogio moderado, «bastante».",
          },
          {
            wrong: "No es que el guiso está soso, pero le falta algo.",
            right: "No es que el guiso esté soso, pero le falta algo.",
            why: "«No es que» rechaza una interpretación y va con subjuntivo.",
          },
        ],
      },
      {
        heading: "Distanciarse, buscar acuerdo y no pasarse",
        body: [
          "La tercera técnica es distanciarte de tu propia opinión: presentarla como una impresión o como una opinión modesta. «Yo diría que», «da la impresión de que», «me da la sensación de que», el imperfecto de cortesía («quería comentarte una cosa») o «igual» y «a lo mejor» con indicativo («igual tenemos que subir un poco el precio»). Aquí «parece que» ya no indica la fuente, como en la semana 4 (G173), sino que suaviza.",
          "La cuarta técnica es buscar el acuerdo: conceder antes de discrepar («tienes razón en parte, pero…») o terminar con una pregunta de confirmación («¿no?», «¿verdad?») que convierte la crítica en propuesta. La dosis importa: una crítica a bocajarro hiere; una envuelta en cinco atenuadores no se entiende. Basta con uno o dos recursos bien colocados.",
        ],
        table: {
          caption: "La dosis justa",
          head: ["Grado", "Ejemplo", "Efecto"],
          rows: [
            ["a bocajarro", "La carta nueva no la entiende nadie.", "hiere y provoca una defensa"],
            ["dosis justa", "Yo diría que la carta nueva es algo difícil de entender, ¿no?", "el mensaje llega y la relación se mantiene"],
            ["en niebla", "Perdona, no sé, igual me equivoco, pero quizás, digamos, la carta, ¿no?, o no sé.", "nadie sabe qué has criticado"],
          ],
        },
        examples: [
          { es: "Quería comentarte una cosa de la carta: me da la sensación de que los precios están un poco altos.", note: "Imperfecto de cortesía, distancia y rebaja: tres recursos, uno por función." },
          { es: "En parte tienes razón, pero igual los vecinos no lo ven así, ¿verdad?", note: "Concesión, «igual» con indicativo y pregunta de confirmación." },
        ],
        mistakes: [
          {
            wrong: "Igual tengamos que cambiar el horario de cocina.",
            right: "Igual tenemos que cambiar el horario de cocina.",
            why: "«Igual» y «a lo mejor» van con indicativo.",
          },
          {
            wrong: "Hasta un cierto punto, la idea es buena.",
            right: "Hasta cierto punto, la idea es buena.",
            why: "«Hasta cierto punto» y «en cierta medida» no llevan artículo.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero decide qué movimiento haces (sustituir, contraponer, restringir o atenuar); después elige el conector y el modo.",
    exercises: [
      {
        id: "c1-13-gramatica-movimiento",
        type: "context",
        prompt: "Lee la situación y elige la frase que hace el movimiento descrito.",
        items: [
          {
            context: "Un cliente dice que el bar ha subido los precios. En realidad no los ha subido: ha empezado a cobrar algunas tapas.",
            q: "¿Qué responde la dueña?",
            options: [
              "No hemos subido los precios, pero cobramos algunas tapas.",
              "No hemos subido los precios, sino que cobramos algunas tapas.",
              "No hemos subido los precios, en cambio cobramos algunas tapas.",
            ],
            answer: 1,
            why: "Sustituye lo negado por lo correcto con verbo conjugado: «sino que».",
          },
          {
            context: "Quieres contrastar dos zonas de la ciudad sin negar nada.",
            q: "¿Qué frase eliges?",
            options: [
              "En el Realejo la tapa es gratis; en el centro, en cambio, cada vez se cobra más.",
              "En el Realejo la tapa no es gratis, sino en el centro.",
              "En el Realejo la tapa es gratis, sino en el centro se cobra.",
            ],
            answer: 0,
            why: "Dos realidades verdaderas a la vez: «en cambio».",
          },
          {
            context: "El bar cerrará el domingo solo si no llega el permiso de la terraza.",
            q: "¿Qué frase lo dice?",
            options: [
              "Abriremos el domingo, salvo que no llega el permiso.",
              "Abriremos el domingo, de ahí que no llegue el permiso.",
              "Abriremos el domingo, salvo que no llegue el permiso.",
            ],
            answer: 2,
            why: "«Salvo que» + subjuntivo plantea una condición.",
          },
          {
            context: "Quieres decirle a tu hermano que su guiso tiene demasiada sal, sin herirlo.",
            q: "¿Qué frase dosifica bien la crítica?",
            options: [
              "Tu guiso está salado.",
              "Yo diría que el guiso está un poco salado, ¿no?",
              "Perdona, no sé, igual, digamos, el guiso, ¿no?, un poquito, quizás.",
            ],
            answer: 1,
            why: "Dos recursos bien colocados: distancia, rebaja y pregunta final.",
          },
        ],
      },
      {
        id: "c1-13-gramatica-conectores",
        type: "gap",
        prompt: "Completa con el conector o la forma verbal adecuada.",
        items: [
          { q: "La tapa no es pequeña, ___ generosa para lo que cuesta la caña.", answers: [["sino"]], why: "Sustituye lo negado: «sino»." },
          { q: "Muchos vecinos se han mudado; de ahí que el bar ___ (depender) cada vez más del turismo.", answers: [["dependa"]], why: "«De ahí que» va con subjuntivo." },
          { q: "El alquiler se duplicó, de modo que ___ (tener) que cobrar las tapas de autor.", answers: [["tuvimos", "tenemos", "hemos tenido"]], why: "«De modo que» + indicativo: resultado real." },
          { q: "Hasta ___ punto, entiendo a los clientes que se quejan.", answers: [["cierto"]], why: "Sin artículo: «hasta cierto punto»." },
          { q: "No es que la carta ___ (ser) mala, pero es larguísima.", answers: [["sea"]], why: "«No es que» + subjuntivo." },
          { q: "Igual ___ (deber) reducir la carta a doce tapas.", answers: [["debemos", "deberíamos"]], why: "«Igual» va con indicativo." },
        ],
      },
      {
        id: "c1-13-gramatica-funcion",
        type: "classify",
        prompt: "Clasifica cada frase según lo que hace quien habla.",
        categories: ["Sustituye o contrapone", "Restringe", "Atenúa"],
        items: [
          { text: "No queremos turistas, antes bien, queremos vecinos que vuelvan.", cat: 0, why: "«Antes bien» presenta lo que de verdad se quiere." },
          { text: "Frente a la barra llena del centro, aquí se tapea con calma.", cat: 0, why: "«Frente a» contrapone." },
          { text: "Todo nos gusta, solo que la música está muy alta.", cat: 1, why: "«Solo que» añade una pega." },
          { text: "No cambiaría nada; si acaso, quitaría el postre de queso.", cat: 1, why: "«Si acaso» propone lo máximo que se haría." },
          { text: "La idea es buena en cierta medida.", cat: 2, why: "Acota el alcance de la afirmación." },
          { text: "El local no es precisamente grande.", cat: 2, why: "Lítote: niega lo contrario." },
          { text: "El caso es que la cocina cierra a las once.", cat: 1, why: "Presenta el dato que complica las cosas." },
        ],
      },
      {
        id: "c1-13-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de conector, de modo o de atenuación. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "No es una tapa, si no una ración entera.",
            answers: ["No es una tapa, sino una ración entera."],
            why: "Sustitución tras negación: «sino», junto.",
          },
          {
            sentence: "El precio subió, de modo que muchos clientes dejaran de venir.",
            answers: ["El precio subió, de modo que muchos clientes dejaron de venir."],
            why: "Resultado real: «de modo que» + indicativo.",
          },
          {
            sentence: "La camarera nueva es un poco amable.",
            answers: ["La camarera nueva es bastante amable."],
            why: "«Un poco» con un adjetivo positivo suena irónico.",
          },
          {
            sentence: "No hay que cerrar la terraza; por si acaso, reducir el horario.",
            answers: ["No hay que cerrar la terraza; si acaso, reducir el horario."],
            why: "«Si acaso» propone lo máximo aceptable; «por si acaso» es una precaución.",
          },
        ],
      },
      {
        id: "c1-13-gramatica-reformular",
        type: "open",
        prompt: "Reescribe cada borrador según la instrucción. Hay varias respuestas posibles: compara con el modelo y con la lista.",
        items: [
          {
            prompt: "Borrador de una nota interna: «La carta nueva es cara. Los vecinos no vienen. Los turistas sí. Hay que cambiarla». Reescríbelo en dos frases con un conector que contraponga, uno de consecuencia con el modo correcto y una restricción.",
            model: "Los turistas aceptan la carta nueva, mientras que los vecinos han dejado de venir; de ahí que el bar dependa cada vez más de un público que no vuelve. Mantendría la carta, salvo que propongo recuperar tres tapas clásicas gratuitas.",
            checklist: [
              "Uso un conector de contraposición sin negar ninguna de las dos realidades.",
              "«De ahí que» va con subjuntivo.",
              "La restricción con «salvo que» + indicativo presenta una excepción real.",
            ],
          },
          {
            prompt: "Borrador de un mensaje a tu socio: «Tu propuesta de horario es mala y no la entiende nadie». Reescríbelo con una dosis justa de atenuación: un acotador, una forma de distancia y una búsqueda de acuerdo.",
            model: "Quería comentarte lo del horario: yo diría que, en parte, la propuesta es difícil de explicar a los clientes. Igual podemos simplificarla un poco, ¿no te parece?",
            checklist: [
              "Uso como mucho tres recursos, cada uno con una función.",
              "La crítica sigue siendo clara.",
              "«Igual» o «a lo mejor» van con indicativo.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de un bar de tapas, de su carta y de las discusiones sobre cómo cambiarla.",
    groups: [
      {
        title: "El bar y la carta",
        items: [
          { es: "tapear", note: "ir de bar en bar tomando tapas" },
          { es: "la tapa de cortesía", note: "la que se sirve gratis con la bebida" },
          { es: "la tapa de autor", note: "tapa elaborada que se cobra aparte" },
          { es: "la ración", note: "porción grande de un plato, para compartir" },
          { es: "la caña", note: "vaso pequeño de cerveza de barril" },
          { es: "la barra", note: "mostrador donde se sirve y se come de pie" },
          { es: "el parroquiano", note: "cliente habitual de un establecimiento" },
          { es: "la clientela de paso", note: "clientes que vienen una vez y no vuelven" },
        ],
      },
      {
        title: "Discrepar con tacto",
        items: [
          { es: "poner pegas", note: "señalar inconvenientes de una propuesta" },
          { es: "a bocajarro", note: "de forma directa y brusca" },
          { es: "andarse con rodeos", note: "no decir algo de forma clara" },
          { es: "dorar la píldora", note: "suavizar una mala noticia para que se acepte mejor" },
          { es: "tomarse algo a mal", note: "ofenderse por algo" },
          { es: "dar su brazo a torcer", note: "ceder en una discusión" },
          { es: "llegar a un término medio", note: "acordar una solución intermedia" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-13-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el parroquiano", right: "cliente habitual de un establecimiento" },
          { left: "dorar la píldora", right: "suavizar una mala noticia para que se acepte mejor" },
          { left: "a bocajarro", right: "de forma directa y brusca" },
          { left: "dar su brazo a torcer", right: "ceder en una discusión" },
          { left: "la tapa de cortesía", right: "la que se sirve gratis con la bebida" },
          { left: "poner pegas", right: "señalar inconvenientes de una propuesta" },
          { left: "la clientela de paso", right: "clientes que vienen una vez y no vuelven" },
        ],
      },
      {
        id: "c1-13-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["se lo tomó a mal", "rodeos", "un término medio", "tapear", "ración"],
        items: [
          { q: "Los sábados, media Granada sale a ___ por el Realejo y el Albaicín.", answers: [["tapear"]] },
          { q: "Le dije a mi padre que la carta estaba anticuada y ___: estuvo dos días sin hablarme.", answers: [["se lo tomó a mal"]] },
          { q: "No te andes con ___: ¿te gusta la carta nueva o no?", answers: [["rodeos"]] },
          { q: "Al final llegamos a ___: tapa gratis con la caña y tapas de autor aparte.", answers: [["un término medio"]] },
          { q: "Si sois cuatro, pedid una ___ de berenjenas con miel para compartir.", answers: [["ración"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "«Sino» frente a «si no» y la entonación de la crítica atenuada",
    explanation: [
      "«Sino» es una sola palabra átona que se apoya en lo que sigue: «no es caro, sino‿JUSto». «Si no» son dos palabras y el acento cae en «no»: «si NO llega el pedido, cerramos». Si te fijas en dónde cae el golpe de voz, distinguirás de oído la sustitución de la condición.",
      "La atenuación también se oye. Los acotadores («hasta cierto punto», «en parte») se dicen en un tono algo más bajo, como un inciso. La pregunta de confirmación final («¿no?», «¿verdad?») sube suavemente y deja la puerta abierta. Si dices la crítica con tono descendente y cortante, ningún atenuador la salvará.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el ritmo y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "Dónde cae el acento",
      head: ["Forma", "Acento", "Ejemplo"],
      rows: [
        ["sino (sustitución)", "en la palabra que sigue", "No es vino, sino MOsto."],
        ["si no (condición)", "en «no»", "Si NO hay pan, no hay tapa."],
        ["sino que", "en el verbo que sigue", "No lo regaló, sino que lo VENdió."],
      ],
    },
    perceive: {
      id: "c1-13-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué oyes.",
      items: [
        {
          q: "¿Qué oyes?",
          options: ["sino: sustitución", "si no: condición"],
          answer: 1,
          why: "El acento cae en «no» y la frase plantea una condición.",
          audio: "Si no llega el pescado a tiempo, quitamos las frituras de la carta.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué oyes?",
          options: ["sino: sustitución", "si no: condición"],
          answer: 0,
          why: "«Sino» se apoya en «una ración» y sustituye lo negado.",
          audio: "Eso no es una tapa, sino una ración entera.",
          voice: "es-ES-f",
        },
        {
          q: "¿Cómo suena la crítica?",
          options: ["Cortante y definitiva.", "Atenuada, abierta al acuerdo.", "Irónica."],
          answer: 1,
          why: "Tono más bajo en el acotador y subida suave en la pregunta final.",
          audio: "La carta es, hasta cierto punto, un poco larga, ¿no crees?",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué dice quien habla sobre el precio?",
          options: ["Que es barato.", "Que es caro.", "Que no lo sabe."],
          answer: 1,
          why: "«No es precisamente barato» es una lítote: significa que es caro.",
          audio: "El menú de mediodía no es precisamente barato para el barrio.",
          voice: "es-ES-m",
        },
      ],
    },
    produce: [
      { text: "No es una carta cara, sino justa para lo que ofrece.", tip: "Apoya «sino» en «justa», sin pausa entre las dos.", voice: "es-ES-f" },
      { text: "Si no cambiamos algo, en dos años cerramos.", tip: "Acento claro en «no».", voice: "es-ES-m" },
      { text: "Yo diría que el local es, en cierto modo, demasiado oscuro, ¿verdad?", tip: "Tono más bajo en «en cierto modo» y subida suave al final.", voice: "es-MX-f" },
      { text: "No es que la idea sea mala, pero llega en mal momento.", tip: "Pausa breve antes de «pero» y acento en «mal momento».", voice: "es-ES-f" },
    ],
    spelling: "«Sino» se escribe junto cuando sustituye; «si no», separado, cuando es una condición. Si puedes decir «en caso de que no», va separado.",
  },
  listening: {
    title: "La carta de Lucía",
    context: "En el bar La Higuera, en el Albaicín, Manolo, el dueño, se reúne a cerrar el mes con su hija Lucía, cocinera, que ha propuesto una carta nueva, y con Ximena, la encargada de sala, que es mexicana. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "m", name: "Manolo", voice: "es-ES-m", role: "Dueño del bar" },
      { id: "l", name: "Lucía", voice: "es-ES-f", role: "Cocinera, hija del dueño" },
      { id: "x", name: "Ximena", voice: "es-MX-f", role: "Encargada de sala" },
    ],
    script: [
      { speaker: "m", text: "Bueno, ya llevamos un mes con la carta nueva. Ximena, tú que estás en la barra, ¿qué dice la gente?" },
      { speaker: "x", text: "Pues, a ver, no es que la gente esté descontenta, pero hay de todo. Los turistas piden las tapas de autor y repiten, mientras que los parroquianos de siempre preguntan por la tapa de cortesía y, cuando les digo que ahora solo va con la caña, ponen cara rara." },
      { speaker: "l", text: "Ya, pero es que no hemos quitado la tapa gratis, sino que la hemos limitado a la caña y al vino de la casa. Lo demás se cobra porque cuesta dinero hacerlo." },
      { speaker: "m", text: "Hija, eso lo entiendo. El caso es que el señor Paco lleva treinta años viniendo y el martes se fue al bar de enfrente. Y yo diría que no es el único." },
      { speaker: "l", text: "En cierta medida es normal, papá. Al principio, cualquier cambio espanta. Las cuentas, en cambio, han mejorado: el ticket medio ha subido casi un cuarenta por ciento." },
      { speaker: "x", text: "Eso es verdad, hasta cierto punto. Igual el ticket sube porque vienen más turistas, no porque los de siempre gasten más. Lo que pasa es que los turistas vienen una vez y no vuelven." },
      { speaker: "m", text: "Y en invierno no hay turistas, de modo que dependeremos otra vez de los vecinos. No quiero quitar la carta de Lucía, antes bien, me gusta. Pero algo hay que tocar." },
      { speaker: "l", text: "Vale. No me voy a tomar a mal ninguna crítica, salvo que me digáis que vuelva a la carta de antes. Eso no." },
      { speaker: "x", text: "Nadie te dice eso. Si acaso, yo recuperaría tres tapas clásicas gratis con cualquier bebida: el remojón, las habas con jamón y la tortilla. Las de autor, aparte." },
      { speaker: "m", text: "Me parece un término medio razonable, ¿no, Lucía? Así no espantamos a los vecinos, salvo que lo que quieran sea la carta entera gratis, y eso no puede ser." },
      { speaker: "l", text: "Hasta cierto punto me cuesta, porque esas tres son las que menos me gustan. Pero vale, lo probamos un mes. Eso sí, la carta se queda como está, excepto esas tres." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin abrir la transcripción. ¿Cuál es el problema y qué acuerdan?",
        exercise: {
          id: "c1-13-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué problema ha traído la carta nueva?",
              options: [
                "Las cuentas han empeorado mucho.",
                "Los clientes de siempre se están yendo, aunque las cuentas mejoran.",
                "Los turistas se quejan de los precios.",
              ],
              answer: 1,
              why: "El ticket medio sube, pero algunos parroquianos se van.",
            },
            {
              q: "¿Qué acuerdan?",
              options: [
                "Volver a la carta de antes.",
                "Cobrar también la tapa con la caña.",
                "Recuperar tres tapas clásicas gratis y mantener el resto de la carta.",
              ],
              answer: 2,
              why: "Aceptan la propuesta de Ximena como término medio.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota los datos, las objeciones y las restricciones.",
        exercise: {
          id: "c1-13-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué ha cambiado exactamente con la tapa gratis?",
              options: [
                "Ahora solo va con la caña y el vino de la casa.",
                "Ha desaparecido del todo.",
                "Solo se sirve a los turistas.",
              ],
              answer: 0,
              why: "«No hemos quitado la tapa gratis, sino que la hemos limitado a la caña y al vino de la casa.»",
            },
            {
              q: "¿Por qué Ximena relativiza la subida del ticket medio?",
              options: [
                "Porque cree que la cifra está mal calculada.",
                "Porque puede deberse a los turistas, que no vuelven.",
                "Porque los vecinos gastan menos en invierno.",
              ],
              answer: 1,
              why: "«Igual el ticket sube porque vienen más turistas.»",
            },
            {
              q: "¿Qué crítica no aceptaría Lucía?",
              options: [
                "Que la carta es cara.",
                "Que las tapas de autor son pequeñas.",
                "Que vuelva a la carta de antes.",
              ],
              answer: 2,
              why: "«Salvo que me digáis que vuelva a la carta de antes.»",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en qué recurso usa cada frase. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-13-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la reunión con lo que hace.",
          pairs: [
            { left: "no hemos quitado la tapa gratis, sino que la hemos limitado", right: "sustituye lo negado con verbo conjugado" },
            { left: "los turistas piden las tapas de autor, mientras que los parroquianos preguntan por la tapa de cortesía", right: "contrapone dos realidades" },
            { left: "no es que la gente esté descontenta", right: "rechaza una interpretación extrema antes de criticar" },
            { left: "Eso es verdad, hasta cierto punto.", right: "concede y acota a la vez" },
            { left: "Si acaso, yo recuperaría tres tapas clásicas", right: "propone lo máximo que haría" },
            { left: "en invierno no hay turistas, de modo que dependeremos otra vez de los vecinos", right: "consecuencia real con indicativo" },
          ],
          why: "La familia discrepa con conectores precisos y con la dosis justa de atenuación.",
        },
      },
    ],
  },
  reading: {
    title: "La tapa ya no es lo que era, y quizá no deba serlo",
    genre: "Reseña gastronómica en un diario",
    frame: "Reseña publicada en la sección de gastronomía de un diario andaluz. El bar, la familia y los platos son ficticios.",
    text: [
      "Granada tiene una relación sentimental con la tapa gratuita. No es una costumbre, sino casi un derecho adquirido: pides una caña y llega, sin que nadie la pida, una pequeña ración de algo. Por eso, cuando La Higuera, uno de los bares más antiguos del Albaicín, decidió el mes pasado cobrar parte de sus tapas, la noticia corrió por el barrio más deprisa que el agua por la cuesta del Chapiz. Fui a comprobar si la indignación estaba justificada. Mi conclusión es que lo está, hasta cierto punto.",
      "La nueva carta es obra de Lucía Fernández, hija del dueño, que volvió a Granada después de seis años cocinando en Bilbao y en Lyon. No se trata de una carta pretenciosa, sino de una carta cuidada, con producto del mercado de San Agustín y técnicas que no se ven en la zona. Su berenjena con miel de caña y queso de cabra es, sin exagerar, de lo mejor que he comido este año. El salmorejo con helado de aceite no es precisamente lo que uno espera en un bar de barrio, pero funciona. Ninguna de estas tapas cuesta más de cuatro euros, de modo que nadie puede hablar de abuso.",
      "El problema, por tanto, no está en la cocina. Está, en cierto modo, en la barra. La familia no ha suprimido la tapa de cortesía, sino que la ha limitado a la caña y al vino de la casa, y eso ha bastado para que algunos parroquianos de toda la vida crucen la calle. No es que la tapa gratuita sea una obligación legal, pero en Granada forma parte de un pacto no escrito entre el bar y el barrio, y romperlo, aunque sea un poco, tiene consecuencias. Los turistas, en cambio, han recibido la carta con entusiasmo y, según me cuentan, el gasto medio por cliente ha subido de forma notable.",
      "Conviene, con todo, no idealizar el pasado. La tapa gratuita se sostenía cuando el local era propio, los alquileres del barrio eran razonables y la clientela era fiel. Hoy el Albaicín tiene cada vez menos vecinos y cada vez más pisos turísticos; de ahí que muchos bares dependan de un público que viene una vez y no vuelve. Mantener la tapa clásica gratis para todos sería, digamos, un gesto bonito, pero un gesto que pocos negocios pueden permitirse. La pregunta, por tanto, no es si cobrar o no, sino cómo hacerlo sin romper el pacto.",
      "La Higuera parece haber encontrado una respuesta, al menos de forma provisional. La encargada de sala propuso recuperar tres tapas clásicas gratuitas con cualquier bebida, a saber, el remojón, las habas con jamón y la tortilla, y mantener aparte las de autor. La cocinera, me confiesa, lo aceptó con poco entusiasmo, porque esas tres son las que menos le gustan. Pero lo aceptó. Yo diría que es una solución razonable: los vecinos recuperan su tapa y los visitantes descubren una cocina que, por sí sola, merece la cuesta.",
      "Si algo me ha enseñado esta visita es que en un bar de barrio la comida no es lo único que se sirve. Se sirve también una manera de estar, y cambiarla requiere el mismo cuidado que una receta nueva. Recomiendo La Higuera sin reservas, salvo que el lector busque la tapa de antes y nada más. En ese caso, también la encontrará, solo que ahora tendrá que elegirla.",
    ],
    glossary: [
      { es: "remojón", note: "ensalada granadina de naranja, bacalao, aceitunas y cebolla" },
      { es: "derecho adquirido", note: "algo que se considera propio por haberlo tenido siempre" },
      { es: "merecer la cuesta", note: "aquí, valer el esfuerzo de subir hasta el bar" },
    ],
    tasks: [
      {
        id: "c1-13-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la reseña.",
        items: [
          {
            q: "¿Dónde sitúa el crítico el problema del bar?",
            options: [
              "En la calidad de las tapas nuevas.",
              "En el cambio de la relación con los clientes del barrio.",
              "En los precios excesivos de la carta.",
            ],
            answer: 1,
            why: "«El problema no está en la cocina. Está, en cierto modo, en la barra.»",
          },
          {
            q: "¿Qué explica, según el crítico, que muchos bares dependan del turismo?",
            options: [
              "La pérdida de vecinos y el aumento de los pisos turísticos.",
              "La calidad de la cocina de autor.",
              "La desaparición del mercado de San Agustín.",
            ],
            answer: 0,
            why: "«De ahí que muchos bares dependan de un público que viene una vez.»",
          },
          {
            q: "¿Qué valoración final hace?",
            options: [
              "Desaconseja el bar a quien busque la tapa tradicional.",
              "Solo lo recomienda a turistas.",
              "Lo recomienda, con una restricción que en realidad también se cumple.",
            ],
            answer: 2,
            why: "Lo recomienda «salvo que el lector busque la tapa de antes», que también encontrará.",
          },
        ],
      },
      {
        id: "c1-13-lectura-recursos",
        type: "match",
        prompt: "Relaciona cada fragmento de la reseña con su función.",
        pairs: [
          { left: "No es una costumbre, sino casi un derecho adquirido", right: "sustituye una idea por otra más exacta" },
          { left: "Mi conclusión es que lo está, hasta cierto punto.", right: "acota la propia conclusión" },
          { left: "no es precisamente lo que uno espera en un bar de barrio", right: "lítote" },
          { left: "Los turistas, en cambio, han recibido la carta con entusiasmo", right: "contrapone dos públicos" },
          { left: "solo que ahora tendrá que elegirla", right: "añade una pega a algo que se valora" },
        ],
      },
      {
        id: "c1-13-lectura-evaluacion",
        type: "open",
        prompt: "Analiza la reseña como texto argumentativo.",
        items: [
          {
            prompt: "El crítico defiende a la familia sin quitar toda la razón a los vecinos. Explica en 80–100 palabras cómo lo consigue: elige dos conectores contraargumentativos y dos recursos de atenuación y di qué hace cada uno.",
            model: "El crítico usa «sino que» para corregir el rumor: la familia no ha suprimido la tapa, sino que la ha limitado. Con «en cambio» contrapone la reacción de los turistas sin negar el disgusto de los vecinos. Al mismo tiempo atenúa su propia postura: «hasta cierto punto» limita su acuerdo con la indignación, y «yo diría que» presenta la solución final como una opinión modesta. Así reconoce el malestar del barrio, defiende la cocina y propone un término medio sin parecer que toma partido de forma tajante.",
            checklist: [
              "Cito literalmente cuatro recursos.",
              "Explico la función de cada uno en el argumento.",
              "Relaciono los recursos con la postura global del crítico.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la reseña corrige, contrapone y restringe, y cómo dosifica sus críticas.",
      items: [
        { quote: "No se trata de una carta pretenciosa, sino de una carta cuidada", note: "«Sino» sustituye una valoración por otra." },
        { quote: "La familia no ha suprimido la tapa de cortesía, sino que la ha limitado a la caña y al vino de la casa", note: "«Sino que» con verbo conjugado." },
        { quote: "No es que la tapa gratuita sea una obligación legal", note: "«No es que» + subjuntivo descarta una interpretación extrema." },
        { quote: "de ahí que muchos bares dependan de un público que viene una vez y no vuelve", note: "Consecuencia explicada con subjuntivo." },
        { quote: "Ninguna de estas tapas cuesta más de cuatro euros, de modo que nadie puede hablar de abuso.", note: "«De modo que» + indicativo: resultado." },
        { quote: "Mantener la tapa clásica gratis para todos sería, digamos, un gesto bonito", note: "«Digamos» acota la valoración." },
        { quote: "Recomiendo La Higuera sin reservas, salvo que el lector busque la tapa de antes y nada más.", note: "«Salvo que» + subjuntivo: condición que restringe la recomendación." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención, relación de formas y escritura guiada sobre las dos clases de la semana.",
    exercises: [
      {
        id: "c1-13-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de la reunión del bar.",
        items: [
          {
            words: ["No", "la", "suprimimos,", "sino", "que", "la", "limitamos."],
            why: "«Sino que» sustituye con verbo conjugado.",
          },
          {
            words: ["Los", "vecinos", "se", "van;", "de", "ahí", "que", "cambiemos", "la", "carta."],
            why: "«De ahí que» + subjuntivo.",
          },
          {
            words: ["En", "parte", "tienes", "razón,", "pero", "falta", "un", "término", "medio."],
            why: "Concesión antes de discrepar.",
          },
        ],
      },
      {
        id: "c1-13-intencion",
        type: "context",
        prompt: "Elige la frase que corresponde a la intención descrita.",
        items: [
          {
            context: "Tu jefa te pide opinión sobre su presentación. Te pareció demasiado larga, pero no quieres herirla.",
            q: "¿Qué le dices?",
            options: [
              "Tu presentación es demasiado larga.",
              "Me pareció muy interesante; si acaso, quitaría un par de diapositivas, ¿no?",
              "Perdona, igual no, pero quizás, digamos, un poquito, no sé.",
            ],
            answer: 1,
            why: "Concesión, «si acaso» para lo máximo que harías y pregunta final.",
          },
          {
            context: "Quieres afirmar que el problema no es el precio, sino el trato.",
            q: "¿Qué frase eliges?",
            options: [
              "El problema no es el precio, pero el trato.",
              "El problema no es el precio, sino el trato.",
              "El problema no es el precio, si no el trato.",
            ],
            answer: 1,
            why: "Sustitución tras negación: «sino».",
          },
          {
            context: "Cuentas que todos los socios estuvieron de acuerdo menos tú.",
            q: "¿Qué frase es correcta?",
            options: [
              "Todos estuvieron de acuerdo, menos yo.",
              "Todos estuvieron de acuerdo, menos mí.",
              "Todos estuvieron de acuerdo, salvo a mí.",
            ],
            answer: 0,
            why: "«Menos», «salvo» y «excepto» llevan «yo».",
          },
        ],
      },
      {
        id: "c1-13-atenuadores",
        type: "match",
        prompt: "Relaciona cada atenuador con la técnica que usa.",
        pairs: [
          { left: "hasta cierto punto", right: "acota el alcance de la afirmación" },
          { left: "no es precisamente barato", right: "niega lo contrario de lo que se piensa" },
          { left: "quería comentarte", right: "imperfecto de cortesía" },
          { left: "un poquito", right: "rebaja con un diminutivo" },
          { left: "tienes razón en parte, pero", right: "concede antes de discrepar" },
          { left: "yo diría que", right: "presenta la opinión con modestia" },
        ],
      },
      {
        id: "c1-13-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Piensa en un lugar que ha cambiado en tu ciudad (una tienda, un parque, un mercado). Escribe 60–80 palabras con «no… sino (que)», «en cambio» o «mientras que», una restricción con «salvo que» y una consecuencia con «de ahí que».",
            model: "La librería de mi calle no ha cerrado, sino que se ha convertido en cafetería con libros. Los estudiantes la llenan por la tarde, mientras que los lectores de siempre ya casi no entran. Todo me gusta, salvo que la sección de poesía ha desaparecido. Los alquileres del centro no paran de subir; de ahí que muchas tiendas tengan que reinventarse para sobrevivir.",
            checklist: [
              "Uso «sino» o «sino que» correctamente tras una negación.",
              "Contrapongo dos realidades sin negar ninguna.",
              "«De ahí que» va con subjuntivo.",
            ],
          },
          {
            prompt: "Escribe un mensaje de 50–70 palabras a un amigo que te ha pedido opinión sobre su nuevo logotipo, que no te gusta del todo. Usa la dosis justa: un acotador, una forma de distancia y una pregunta de confirmación.",
            model: "Me gusta mucho el color, de verdad. Quería comentarte solo una cosa: me da la sensación de que la letra es, en cierto modo, demasiado pequeña para verse en el móvil. Igual podrías probar una versión un poco más grande y comparar las dos, ¿no te parece?",
            checklist: [
              "Empiezo con algo positivo y sincero.",
              "La crítica es clara aunque esté atenuada.",
              "No uso más de tres atenuadores.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta un informe crítico (230–320 palabras) sobre un proyecto, un servicio o una propuesta de alguien con quien vas a seguir trabajando o conviviendo: el nuevo horario de un compañero, la reforma que propone un vecino, el plan de un socio. Reconoce lo positivo, corrige las ideas equivocadas que circulan, señala los problemas con la dosis justa de atenuación y propón un término medio.",
    context: "El informe lo leerá la persona que hizo la propuesta y también el grupo que debe decidir. Necesitas que el grupo vea los problemas con claridad, pero que la autora no se sienta atacada, porque seguiréis trabajando juntos.",
    steps: [
      "Haz dos columnas: lo que funciona y lo que no. Escribe al lado de cada problema un atenuador distinto (acotar, rebajar, distanciarte, buscar acuerdo).",
      "Anota una idea equivocada que circula sobre la propuesta y corrígela con «no…, sino (que)…».",
      "Redacta tres párrafos: lo positivo, los problemas con sus causas y consecuencias, y la propuesta de término medio con sus restricciones.",
      "Revisa la dosis: corrige las frases a bocajarro y las que estén envueltas en tantos atenuadores que no se entiendan.",
    ],
    useLanguage: [
      "no…, sino…; no…, sino que…; antes bien",
      "en cambio, mientras que, frente a",
      "salvo que + indicativo / subjuntivo, si acaso, solo que",
      "de ahí que + subjuntivo, de modo que + indicativo",
      "hasta cierto punto, en cierta medida, no es precisamente…",
      "yo diría que, igual + indicativo, tienes razón en parte, pero…, ¿no?",
    ],
    model: [
      "Este informe valora la propuesta de Marta para reorganizar los turnos de la biblioteca del instituto durante el segundo trimestre. Conviene empezar por lo evidente: la propuesta no es un simple cambio de horario, sino un intento serio de que la sala esté abierta en los recreos, cuando más la necesitan los alumnos. Los primeros datos son buenos, en cierta medida: las visitas de mediodía han aumentado casi un tercio y los alumnos de primero, que antes no venían, ahora usan la sala para hacer los deberes.",
      "Hay, con todo, dos aspectos que yo diría que conviene revisar. El primero es la carga de trabajo. No es que el nuevo turno sea imposible, pero obliga a dos profesores a quedarse sin descanso los martes y los jueves; de ahí que ambos hayan pedido, con razón, un cambio. El segundo es la información. Circula la idea de que la biblioteca ya no abre por las tardes, y no es así: no se ha cerrado la tarde, sino que se ha reducido a una hora. Los alumnos de bachillerato, en cambio, no lo saben, de modo que han dejado de venir.",
      "Propongo, por tanto, mantener el turno de los recreos, salvo que el claustro decida otra cosa, y repartirlo entre cuatro profesores en lugar de dos. Si acaso, podríamos sacrificar el lunes, que es el día con menos visitas. Y convendría colgar un cartel con el horario en cada aula. Tienes razón en lo esencial, Marta: la biblioteca tiene que estar donde están los alumnos. Solo falta que no le cueste el descanso a nadie, ¿no?",
    ],
    checklist: [
      "Reconozco lo positivo de la propuesta con datos concretos.",
      "Corrijo al menos una idea equivocada con «sino» o «sino que».",
      "Uso al menos un conector de contraposición, uno de restricción y uno de consecuencia con el modo correcto.",
      "Atenúo cada crítica con uno o dos recursos, sin llegar a la niebla.",
      "El informe tiene tres párrafos y termina con una propuesta concreta.",
    ],
    words: [230, 320],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Dar una crítica constructiva en una reunión",
        prompt: "Presenta durante cuatro minutos tu valoración de una propuesta ante su autora y el resto del equipo (la carta de Lucía o la propuesta de tu informe). Empieza por lo positivo, corrige un malentendido que circula, plantea dos problemas atenuados y termina con un término medio y una pregunta que invite al acuerdo.",
        prep: [
          "Escribe tres palabras clave para lo positivo y dos para cada problema.",
          "Prepara una corrección con «no…, sino que…» y una consecuencia con «de ahí que».",
          "Elige un atenuador diferente para cada problema y una pregunta final.",
        ],
        seconds: 240,
        model: "Quería empezar por lo que funciona: la carta nueva no es un capricho, sino una apuesta seria, y los turistas repiten. Dicho esto, hay dos cosas que, hasta cierto punto, me preocupan. La primera: no hemos quitado la tapa gratis, sino que la hemos limitado, pero el barrio cree que la hemos quitado; de ahí que algunos parroquianos se vayan. La segunda: igual dependemos demasiado de un público que no vuelve. Yo propondría recuperar tres tapas clásicas, salvo que Lucía tenga una idea mejor. ¿Lo probamos un mes?",
        selfCheck: [
          "Empiezo por lo positivo y lo digo con sinceridad.",
          "Cada problema lleva uno o dos atenuadores, no más.",
          "Distingo de oído «sino» de «si no».",
          "Termino con una propuesta y una pregunta.",
        ],
      },
      {
        title: "Discrepar con un compañero sin romper la relación",
        prompt: "Un compañero te dice: «Mi plan es perfecto y el que no lo vea es que no entiende el negocio». No estás de acuerdo. Pregúntale por qué lo ve así, concede lo que tenga de razón, plantea tu objeción con tacto y busca un término medio.",
        prep: [
          "Prepara una pregunta abierta sobre su plan.",
          "Ten a mano «tienes razón en parte», «no es que…, pero…» y «si acaso…».",
        ],
        seconds: 150,
        model: "A ver, cuéntame, ¿qué es lo que más te convence del plan? Tienes razón en parte: el local necesita un cambio. No es que el plan sea malo, pero me da la sensación de que va demasiado deprisa para los clientes de siempre. Si acaso, lo haría en dos fases. ¿Te parece que lo probemos así?",
        selfCheck: [
          "Pregunto antes de discrepar.",
          "Concedo algo real antes de objetar.",
          "Propongo una solución concreta.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase una crítica que tengas que hacer de verdad esta semana y dos versiones de ella: a bocajarro y atenuada.",
    cards: [
      {
        move: "Atenúa",
        task: "Di a tu profesor una crítica a bocajarro y pídele que te ayude a atenuarla con una sola técnica, después con otra.",
        phrases: ["¿Cómo lo dirías con más tacto?", "¿Es demasiado?"],
      },
      {
        move: "Corrige",
        task: "Cuenta un rumor sobre tu trabajo o tu barrio y corrígelo en voz alta con «no…, sino que…».",
        phrases: ["No es que…, sino que…", "Antes bien…"],
      },
      {
        move: "Restringe",
        task: "Recomienda un lugar a tu profesor con dos restricciones: una excepción real con «salvo que» + indicativo y una condición con «salvo que» + subjuntivo.",
        phrases: ["Es perfecto, salvo que…", "…salvo que llueva."],
      },
      {
        move: "Pregunta",
        task: "Pregúntale a tu profesor qué atenuadores le parecen excesivos en su cultura y cuáles demasiado bruscos.",
        phrases: ["¿Esto suena brusco?", "¿Se dice así en tu país?"],
      },
    ],
    bring: "Tu crítica en dos versiones, el informe revisado y, si quieres, la grabación de la reunión.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«No es un restaurante, ___ un bar con cocina.»",
        options: ["sino", "pero", "si no"],
        answer: 0,
        why: "Sustitución tras negación: «sino».",
      },
      {
        type: "choice",
        q: "¿Qué frase expresa una finalidad, no un resultado?",
        options: [
          "Ponemos la carta en la puerta, de modo que nadie se sorprende.",
          "Pusimos la carta en la puerta, de modo que nadie se sorprendió.",
          "Ponemos la carta en la puerta, de modo que nadie se sorprenda.",
        ],
        answer: 2,
        why: "«De modo que» + subjuntivo equivale a «para que».",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué valoración hace quien habla?",
        options: [
          "Una crítica directa y sin matices.",
          "Una crítica atenuada que invita al acuerdo.",
          "Un elogio sin reservas.",
        ],
        answer: 1,
        why: "Imperfecto de cortesía, acotador y pregunta final.",
        audio: "Quería decirte que el menú me gusta, aunque, en cierta medida, se hace un poco largo, ¿no te parece?",
        voice: "es-MX-f",
      },
      {
        type: "gap",
        q: "Los clientes se quejan del ruido; de ahí que ___ (poner) cortinas nuevas la semana que viene.",
        answers: [["pongamos"]],
        hint: "«De ahí que» presenta una consecuencia explicada y pide subjuntivo.",
        why: "Presente de subjuntivo de «poner».",
      },
      {
        type: "gap",
        q: "No cambiaría nada de la decoración; ___, pintaría la puerta.",
        answers: [["si acaso"]],
        hint: "Expresión de dos palabras que propone lo máximo que estarías dispuesto a hacer.",
        why: "«Si acaso» introduce la única concesión que harías.",
      },
      {
        type: "error",
        sentence: "No cobramos la tapa, sino la regalamos con la caña.",
        answers: ["No cobramos la tapa, sino que la regalamos con la caña."],
        why: "Con verbo conjugado, «sino que».",
      },
      {
        type: "error",
        sentence: "A lo mejor tengamos que abrir también los lunes.",
        answers: ["A lo mejor tenemos que abrir también los lunes."],
        why: "«A lo mejor» e «igual» van con indicativo.",
      },
      {
        type: "order",
        words: ["No", "es", "que", "sea", "caro,", "pero", "el", "barrio", "no", "está", "acostumbrado."],
        why: "«No es que» + subjuntivo antes de la crítica real.",
      },
      {
        type: "open",
        prompt: "Tu vecina ha organizado la fiesta del edificio y la música estuvo demasiado alta hasta muy tarde. Escríbele un mensaje de 50–70 palabras que reconozca lo bueno, plantee el problema con la dosis justa de atenuación y proponga algo para la próxima vez.",
        model: "¡Qué buena fiesta, Rosa! Se notaba todo el trabajo que hubo detrás. Quería comentarte solo una cosa: yo diría que la música estuvo un poco alta a partir de las doce, y algunos vecinos mayores lo pasaron mal. Igual la próxima vez podemos bajarla a medianoche y seguir en el patio, ¿no te parece?",
        checklist: [
          "Empiezo con un reconocimiento sincero.",
          "La crítica es clara y está atenuada con uno o dos recursos.",
          "Propongo algo concreto y termino buscando acuerdo.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Distingo pero, sino y aunque, y uso sino que, antes bien, en cambio, mientras que y frente a.",
      "Restrinjo lo que digo con salvo que, excepto, solo que, si acaso y el caso es que, con el modo correcto.",
      "Saco consecuencias con de ahí que + subjuntivo y de modo que + indicativo o subjuntivo según el valor.",
      "Atenúo una crítica acotando, rebajando, distanciándome o buscando acuerdo, con la dosis justa.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «El modo cambia el significado» y escribe un ejemplo propio de cada fila.",
      "Dentro de una semana, escucha una tertulia o un debate y apunta dos críticas atenuadas y una a bocajarro.",
      "En la próxima clase, lee tu informe crítico y pide a tu profesor que te diga si alguna frase le ha parecido brusca o confusa.",
    ],
  },
  related: [
    { path: "/gramatica/conectores-contraargumentativos-y-restrictivos", label: "Clase: Conectores contraargumentativos y restrictivos" },
    { path: "/gramatica/atenuacion-en-cierto-modo-hasta-cierto", label: "Clase: Atenuación: en cierto modo, hasta cierto punto" },
  ],
};
