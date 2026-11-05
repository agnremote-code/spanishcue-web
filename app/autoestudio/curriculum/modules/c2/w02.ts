import type { Module } from "../../types";

/**
 * C2 · semana 2 · Autoestudio espejo de G207 (selección fina de indicativo y
 * subjuntivo según perspectiva). Repaso autónomo con los papeles de una
 * cooperativa de vivienda ficticia de Montevideo: acta, boletín y comunicado.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w02: Module = {
  id: "c2-02",
  level: "c2",
  week: 2,
  kind: "core",
  title: "El acta de la cooperativa: lo que afirmas y lo que comentas",
  subtitle: "Repaso de la elección de modo cuando indicativo y subjuntivo son posibles y cambia la perspectiva",
  stop: {
    place: "Montevideo",
    country: "Uruguay",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g207",
    "c2.voc.w02-cooperativa-asamblea",
    "c2.pron.w02-vocal-modo",
    "c2.lis.w02-revision-acta",
    "c2.read.w02-boletin-cooperativa",
    "c2.wri.w02-comunicado-comision",
    "c2.spk.w02-asamblea-mediacion",
    "c2.fun.w02-matizar-postura",
    "c2.disc.w02-fondo-novedad",
  ],
  reviewObjectives: ["c2.gram.g205","c2.gram.g206","c2.voc.w01-archivo-legado","c2.pron.w01-acento-re-ra","c2.lis.w01-revision-versiones","c2.read.w01-catalogo-documentos","c2.wri.w01-nota-editorial","c2.spk.w01-visita-guiada","c2.fun.w01-glosar-documento","c2.disc.w01-transcripcion-version"],
  prerequisites: ["c2-01"],
  goal: {
    canDo: "Puedo elegir entre indicativo y subjuntivo cuando los dos son gramaticales para mostrar qué afirmo como información nueva y qué doy por sabido, valoro, imagino o pido.",
    steps: [
      "Repasa en la teoría la pregunta clave («¿lo afirmo como información nueva?») y los verbos que cambian de significado según el modo.",
      "Practica con frases de un acta, de correos y de mensajes entre vecinos de una cooperativa de vivienda.",
      "Escucha a Graciela y a Joaquín revisar el borrador del acta y lee la columna del boletín sobre los malentendidos de la última asamblea.",
      "Redacta el comunicado de la comisión, revísalo frase por frase y defiende tus elecciones de modo en voz alta.",
    ],
  },
  theory: {
    intro: "En clase trabajaste los casos en que los dos modos son correctos y el modo revela la perspectiva del hablante. Aquí lo repasas con otro material: los papeles de una cooperativa de vivienda de Montevideo, donde una sola vocal en un acta puede convertir una constatación en una exigencia. No vuelvas a las reglas básicas de C1; concéntrate en qué cambia cuando eliges.",
    parts: [
      {
        heading: "La pregunta de fondo: ¿afirmas o comentas?",
        body: [
          "Cuando la gramática admite los dos modos, el indicativo presenta el contenido como información que el hablante afirma o aporta como nueva; el subjuntivo lo saca del foco: lo da por sabido para comentarlo, lo valora, lo imagina o lo pide. No se trata de que uno sea más culto que el otro, sino de qué papel tiene ese contenido en lo que dices.",
          "Esto se ve muy bien con una oración introducida por «que» en posición de sujeto, al principio de la frase. Ahí el contenido funciona como tema, algo que ya está sobre la mesa y que ahora se comenta, y por eso va en subjuntivo aunque sea un hecho comprobado: «Que el tanque de agua pierda no es ninguna novedad». Con «el hecho de que» el subjuntivo es también lo más frecuente, pero cuando la oración va detrás del verbo y aporta la explicación nueva, el indicativo es natural: «La factura subió por el hecho de que el tanque pierde desde marzo».",
          "Si el tema se adelanta y se retoma con un pronombre («lo»), el contenido vuelve a quedar afirmado y aparece el indicativo: «Que el tanque pierde, lo sabemos todos». Es un recurso típico de la conversación para presentar algo como evidente.",
        ],
        table: {
          caption: "El mismo dato en tres posiciones",
          head: ["Construcción", "Modo", "Qué hace el hablante"],
          rows: [
            ["Es cierto que el salón tiene humedad.", "indicativo", "afirma el dato"],
            ["Que el salón tenga humedad no justifica cerrarlo.", "subjuntivo", "lo da por sabido y lo comenta"],
            ["El hecho de que el salón tenga humedad preocupa a la comisión.", "subjuntivo (lo más frecuente)", "presenta el dato como tema"],
            ["Se cerró por el hecho de que tiene humedad en las paredes.", "indicativo posible", "aporta la causa como información nueva"],
            ["Que el salón tiene humedad, lo ve cualquiera.", "indicativo con «lo»", "lo presenta como evidente"],
          ],
        },
        examples: [
          { es: "Que la asamblea haya votado a mano alzada no invalida la decisión.", note: "Nadie discute que votó así: el hablante lo toma como punto de partida." },
          { es: "El retraso se explica por el hecho de que el banco cambió las condiciones del préstamo.", note: "Detrás del verbo, como explicación nueva: indicativo." },
        ],
        tip: "Antes de elegir, pregúntate qué es noticia en tu frase. Lo que es noticia suele ir en indicativo; lo que solo sirve de punto de partida, en subjuntivo.",
      },
      {
        heading: "Verbos que cambian de sentido con el modo",
        body: [
          "Algunos verbos tienen dos lecturas y el modo de la subordinada decide cuál activas. Con indicativo constatan, perciben o informan; con subjuntivo valoran, lamentan o piden. En un acta o en un correo de trabajo la diferencia no es estilística: «la comisión insiste en que los socios pagan» sostiene un dato, mientras que «la comisión insiste en que los socios paguen» es una exigencia.",
          "Con «parecer» ocurre algo parecido: «parece que» con indicativo transmite una impresión basada en indicios; negado («no parece que») o acompañado de un adjetivo que valora («parece lógico que», «parece increíble que») pide subjuntivo.",
        ],
        table: {
          caption: "Constatar o valorar, informar o pedir",
          head: ["Verbo", "+ indicativo", "+ subjuntivo"],
          rows: [
            ["comprender / entender que", "Entendí que la obra empezaba en junio. (me di cuenta)", "Entiendo que algunos socios desconfíen. (me parece lógico)"],
            ["sentir que", "Sentí que la sala se ponía tensa. (lo percibí)", "Siento que no hayas podido votar. (lo lamento)"],
            ["decir / escribir / avisar de que", "El arquitecto avisó de que el techo cedía. (informa)", "El arquitecto avisó de que nadie subiera al techo. (pide)"],
            ["insistir en que", "Marta insiste en que el presupuesto incluye el IVA. (sostiene)", "Marta insiste en que se pidan tres presupuestos. (exige)"],
            ["parecer", "Parece que la empresa ya mandó la cotización. (hay indicios)", "No parece que tenga prisa. / Parece lógico que pregunte."],
          ],
        },
        mistakes: [
          {
            wrong: "La comisión escribió que los socios entregaban la llave del depósito antes del viernes. (quería pedirlo)",
            right: "La comisión escribió que los socios entregaran la llave del depósito antes del viernes.",
            why: "Para transmitir una petición, «escribir que» necesita subjuntivo; con indicativo solo informa de lo que hacían.",
          },
          {
            wrong: "Parece lógico que la cuota extra se vota en una asamblea extraordinaria.",
            right: "Parece lógico que la cuota extra se vote en una asamblea extraordinaria.",
            why: "Con un adjetivo valorativo, «parecer» deja de transmitir indicios y pasa a valorar: subjuntivo.",
          },
        ],
      },
      {
        heading: "Cuánto te comprometes: negación y corrección",
        body: [
          "La negación permite graduar el compromiso. «No digo que el presupuesto sea caro» significa que no afirmas ese contenido. «No digo que es caro, digo que está incompleto» hace otra cosa: corriges cómo alguien citó tus palabras, y el contenido mencionado aparece en indicativo porque se repite tal como se dijo.",
          "«No es que + subjuntivo» rechaza una interpretación y suele ir seguida de «es que + indicativo», que da la explicación verdadera: «No es que no queramos pintar, es que no hay fondos». Por último, con «no creo que» el uso cuidado pide subjuntivo; el indicativo aparece a veces en la conversación para marcar mucha seguridad, pero es un uso marcado que conviene reconocer y no imitar en un texto formal.",
        ],
        examples: [
          { es: "No digo que la empresa nos haya engañado; digo que el contrato es ambiguo.", note: "Rechazas una acusación que no haces." },
          { es: "No dije que la tesorera escondía las cuentas: dije que las publicaba tarde.", note: "Corriges la cita de tus palabras: indicativo." },
          { es: "No es que el salón esté cerrado, es que la llave la tiene el portero.", note: "Corriges una interpretación y das la causa real." },
        ],
        mistakes: [
          {
            wrong: "No es que no queremos colaborar, es que trabajamos los sábados.",
            right: "No es que no queramos colaborar, es que trabajamos los sábados.",
            why: "«No es que» rechaza una interpretación: lo rechazado va en subjuntivo; la explicación, en indicativo.",
          },
        ],
        tip: "Si en un acta escribes «no decimos que…», relee la subordinada: el modo dirá si niegas una acusación o corriges una cita.",
      },
      {
        heading: "«Como», «lo que» y los adverbios de duda",
        body: [
          "«Lo que» con indicativo remite a algo identificado; con subjuntivo deja el contenido abierto: «Haremos lo que decidió la asamblea» (una decisión concreta) frente a «Haremos lo que decida la asamblea» (sea cual sea). «Como» con indicativo indica una manera conocida o, al principio de la frase, una causa; con subjuntivo puede ser una manera cualquiera o una condición, a menudo con tono de advertencia: «Como no llegue la cotización el lunes, perdemos el precio».",
          "Con «quizá(s)», «tal vez» y «probablemente» delante del verbo puedes usar los dos modos: el subjuntivo aumenta la duda. Si el adverbio va detrás del verbo, lo normal es el indicativo: «Vendrá quizá el lunes». En cambio, «a lo mejor» e «igual» (este último coloquial) van con indicativo.",
        ],
        table: {
          caption: "Identificado o abierto, seguro o dudoso",
          head: ["Expresión", "Con indicativo", "Con subjuntivo"],
          rows: [
            ["lo que", "Pagamos lo que pidió el herrero. (cifra conocida)", "Pagaremos lo que pida el herrero. (cifra aún abierta)"],
            ["como", "Lo pintamos como indicó la arquitecta. (manera conocida)", "Como no paguen antes del día diez, habrá recargo. (condición)"],
            ["quizá / tal vez", "Quizá la reunión es el martes. (más confianza)", "Quizá la reunión sea el martes. (más duda)"],
            ["a lo mejor / igual", "A lo mejor la cuota baja en invierno.", "no se usa con subjuntivo en la norma"],
          ],
        },
        mistakes: [
          {
            wrong: "A lo mejor la asamblea se suspenda por la lluvia.",
            right: "A lo mejor la asamblea se suspende por la lluvia.",
            why: "«A lo mejor» va con indicativo en el uso general.",
          },
          {
            wrong: "Como no avisaras ayer, el herrero no habría venido.",
            right: "Si no hubieras avisado ayer, el herrero no habría venido.",
            why: "«Como + subjuntivo» condicional mira hacia lo que puede pasar; para un pasado irreal usa «si + pluscuamperfecto de subjuntivo».",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "En cada ítem, los dos modos son gramaticales o casi. Decide qué perspectiva quiere el hablante antes de elegir.",
    exercises: [
      {
        id: "c2-02-gramatica-perspectiva",
        type: "context",
        prompt: "Lee la situación y elige la frase que corresponde a lo que el hablante quiere hacer.",
        items: [
          {
            context: "En la asamblea, Rosa acaba de contar que lleva tres noches sin agua caliente. El presidente le contesta con tono comprensivo.",
            q: "¿Qué frase dice el presidente?",
            options: [
              "Entiendo que estás molesta: me lo acabas de decir.",
              "Entiendo que estés molesta; vamos a resolverlo esta semana.",
              "Entiendo que estabas molesta, pero ahora ya no.",
            ],
            answer: 1,
            why: "El enfado ya se conoce; el presidente no lo constata, lo encuentra lógico: subjuntivo.",
          },
          {
            context: "El correo del arquitecto llega a las 22:00. A la mañana siguiente la secretaria resume para el grupo lo que él informa sobre el estado del techo.",
            q: "¿Qué resumen transmite información y no una petición?",
            options: [
              "El arquitecto avisa de que la losa del tercer piso tiene fisuras.",
              "El arquitecto avisa de que nadie suba a la azotea hasta el lunes.",
              "El arquitecto avisa de que revisemos las canaletas.",
            ],
            answer: 0,
            why: "Con indicativo, «avisar de que» informa de un hecho; las otras dos opciones piden algo.",
          },
          {
            context: "Todos saben que la cooperativa debe dos cuotas del préstamo. Un socio quiere quitarle dramatismo al tema en la asamblea.",
            q: "¿Qué frase presenta la deuda como punto de partida conocido?",
            options: [
              "Es verdad que debemos dos cuotas, y es grave.",
              "Debemos dos cuotas, se lo aseguro.",
              "Que debamos dos cuotas no significa que estemos en quiebra.",
            ],
            answer: 2,
            why: "La oración con «que» inicial funciona como tema conocido y va en subjuntivo.",
          },
          {
            context: "Joaquín no tiene ninguna información sobre la fecha de la obra; solo especula, con bastante duda.",
            q: "¿Qué frase refleja mejor su grado de duda?",
            options: [
              "La obra empieza en marzo, seguro.",
              "Tal vez la obra empiece en marzo.",
              "A lo mejor la obra empiece en marzo.",
            ],
            answer: 1,
            why: "«Tal vez» delante del verbo con subjuntivo marca más duda; «a lo mejor» no admite subjuntivo en la norma.",
          },
        ],
      },
      {
        id: "c2-02-gramatica-huecos",
        type: "gap",
        prompt: "Escribe el verbo entre corchetes en el modo y tiempo que exige la perspectiva indicada entre paréntesis.",
        items: [
          { q: "La tesorera insiste en que todos ___ el recibo por escrito. [pedir] (es una exigencia)", answers: [["pidan"]], why: "«Insistir en que» + subjuntivo = exigir." },
          { q: "La tesorera insiste en que el banco ya ___ el pago. [recibir, pretérito perfecto] (sostiene un dato)", answers: [["ha recibido"]], why: "Con indicativo, «insistir» sostiene que algo es cierto." },
          { q: "Que el vecino del 4B ___ a la asamblea con abogado sorprendió a todos. [venir, pasado] (dato conocido como tema)", answers: [["viniera", "viniese"]], why: "Oración con «que» inicial, como tema: subjuntivo." },
          { q: "Firmaremos lo que ___ la asamblea el jueves, sea lo que sea. [aprobar]", answers: [["apruebe"]], why: "«Lo que» abierto, aún no identificado: subjuntivo." },
          { q: "Como no ___ el presupuesto antes del día quince, perderemos el descuento. [llegar]", answers: [["llegue"]], why: "«Como» + subjuntivo con valor condicional de advertencia." },
          { q: "No es que la comisión ___ algo; es que el banco tarda en mandar los extractos. [ocultar]", answers: [["oculte"]], why: "«No es que» rechaza una interpretación: subjuntivo." },
          { q: "Pintaremos las rejas como ___ la arquitecta en su informe del martes. [indicar] (manera ya conocida)", answers: [["indicó"]], why: "«Como» + indicativo remite a una manera identificada." },
        ],
      },
      {
        id: "c2-02-gramatica-lecturas",
        type: "classify",
        prompt: "Clasifica cada frase según lo que hace el verbo principal con la subordinada.",
        categories: ["Constata, percibe o informa (indicativo)", "Valora, lamenta o pide (subjuntivo)"],
        items: [
          { text: "Comprendí que nadie iba a ofrecerse para la limpieza.", cat: 0, why: "«Comprender» + indicativo = darse cuenta." },
          { text: "Comprendo que nadie quiera ofrecerse un domingo.", cat: 1, why: "«Comprender» + subjuntivo = parecer lógico." },
          { text: "Sentimos que no hayan podido usar el salón para el cumpleaños.", cat: 1, why: "«Sentir» + subjuntivo = lamentar." },
          { text: "Sentí que el ambiente se enfriaba cuando habló el abogado.", cat: 0, why: "«Sentir» + indicativo = percibir." },
          { text: "La portera dijo que el ascensor funcionaba otra vez.", cat: 0, why: "«Decir» + indicativo = informar." },
          { text: "La portera dijo que no dejáramos bicicletas en la entrada.", cat: 1, why: "«Decir» + subjuntivo = pedir." },
          { text: "No parece que el herrero vaya a terminar a tiempo.", cat: 1, why: "«No parece que» pide subjuntivo." },
        ],
      },
      {
        id: "c2-02-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un problema de modo que cambia o rompe la perspectiva. Corrígela.",
        items: [
          {
            sentence: "A lo mejor la comisión convoque otra asamblea en diciembre.",
            answers: ["A lo mejor la comisión convoca otra asamblea en diciembre."],
            why: "«A lo mejor» va con indicativo.",
          },
          {
            sentence: "No es que no tengamos voluntad, es que no haya presupuesto.",
            answers: ["No es que no tengamos voluntad, es que no hay presupuesto."],
            why: "Tras «es que» va la explicación real, afirmada: indicativo.",
          },
          {
            sentence: "Parece mentira que la cooperativa ya cumple treinta años.",
            answers: ["Parece mentira que la cooperativa ya cumpla treinta años."],
            why: "«Parece mentira que» valora: subjuntivo.",
          },
          {
            sentence: "Como no firmaste el contrato mañana, la empresa no empezará.",
            answers: ["Como no firmes el contrato mañana, la empresa no empezará."],
            why: "«Como» condicional referido al futuro va con presente de subjuntivo.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de la vida en una cooperativa de vivienda uruguaya: asambleas, cuotas, obras y la forma de dejarlo todo por escrito.",
    groups: [
      {
        title: "Organización y asamblea",
        items: [
          { es: "la comisión directiva", note: "grupo elegido que administra la cooperativa entre asambleas" },
          { es: "el orden del día", note: "lista de asuntos que se tratarán en una reunión" },
          { es: "votar a mano alzada", note: "votar levantando la mano, sin papeletas" },
          { es: "constar en acta", note: "quedar escrito en el documento oficial de la reunión" },
          { es: "el quórum", note: "número mínimo de asistentes para que una decisión sea válida" },
          { es: "elevar una propuesta", note: "presentarla formalmente a quien debe decidir" },
          { es: "la ayuda mutua", note: "horas de trabajo que cada familia aporta a la obra común" },
        ],
      },
      {
        title: "Dinero y obras",
        items: [
          { es: "la cuota extraordinaria", note: "pago adicional y puntual para un gasto imprevisto" },
          { es: "el fondo de reserva", note: "dinero ahorrado para reparaciones futuras" },
          { es: "la cotización", note: "precio que ofrece una empresa por un trabajo" },
          { es: "el recargo", note: "cantidad que se suma a una deuda pagada fuera de plazo" },
          { es: "el salón comunal", note: "espacio común para reuniones y celebraciones" },
          { es: "la filtración", note: "entrada de agua por una grieta o una junta" },
          { es: "dar el visto bueno", note: "aprobar algo de manera informal o previa" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-02-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el quórum", right: "número mínimo de asistentes para que una decisión sea válida" },
          { left: "constar en acta", right: "quedar escrito en el documento oficial de la reunión" },
          { left: "la ayuda mutua", right: "horas de trabajo que cada familia aporta a la obra común" },
          { left: "el fondo de reserva", right: "dinero ahorrado para reparaciones futuras" },
          { left: "la cotización", right: "precio que ofrece una empresa por un trabajo" },
          { left: "el recargo", right: "cantidad que se suma a una deuda pagada fuera de plazo" },
          { left: "elevar una propuesta", right: "presentarla formalmente a quien debe decidir" },
        ],
      },
      {
        id: "c2-02-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["quórum", "conste en acta", "cuota extraordinaria", "visto bueno"],
        items: [
          { q: "Pido que ___ mi voto en contra y el motivo.", answers: [["conste en acta"]] },
          { q: "Sin ___ no podemos aprobar la reforma del salón: faltan doce familias.", answers: [["quórum"]] },
          { q: "La arquitecta ya dio el ___ a la segunda cotización.", answers: [["visto bueno"]] },
          { q: "Que haya que pagar una ___ en pleno invierno no le gusta a nadie.", answers: [["cuota extraordinaria"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La vocal que decide el modo: oírla y marcarla",
    explanation: [
      "En muchas parejas de indicativo y subjuntivo la única diferencia audible es una vocal átona al final o casi al final: «pagan / paguen», «está / esté», «llega / llegue», «tiene / tenga» (aquí cambian más sonidos). En una asamblea ruidosa o en una grabación, esa vocal es justo la que se pierde, y con ella la diferencia entre informar y exigir.",
      "Para que se oiga, no subas el volumen: alarga un poco la sílaba que contiene la vocal y evita reducirla. En las formas agudas («esté», «estés») el acento cae en esa misma sílaba y te ayuda. Al leer un acta en voz alta, haz una pausa breve después de «que» para que el oyente espere la forma verbal.",
      "El audio usa la síntesis del navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para afinar el oído y contrasta tu producción con una persona.",
    ],
    table: {
      caption: "Parejas mínimas de modo",
      head: ["Indicativo (informa)", "Subjuntivo (pide, valora o deja abierto)"],
      rows: [
        ["insiste en que pagan", "insiste en que paguen"],
        ["entiendo que estás", "entiendo que estés"],
        ["avisó de que llegaban", "avisó de que llegaran"],
        ["lo que decide", "lo que decida"],
      ],
    },
    perceive: {
      id: "c2-02-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones primero. Decide qué forma oyes y qué hace el hablante.",
      items: [
        {
          q: "¿Qué oyes y qué expresa la comisión?",
          options: ["«paguen»: exige el pago", "«pagan»: constata que pagan"],
          answer: 0,
          why: "Se oye la vocal «e» final: pa-GUEN. Es una exigencia.",
          audio: "La comisión insiste en que todos paguen antes del viernes.",
          voice: "es-UY-f",
        },
        {
          q: "¿Qué oyes en el verbo de la subordinada?",
          options: ["«esté»: lo encuentra lógico", "«está»: informa de un dato"],
          answer: 1,
          why: "Se oye es-TÁ, con «a». La hablante constata un dato que acaba de saber.",
          audio: "Me acabo de enterar: entiendo que el ascensor está parado desde el lunes.",
          voice: "es-UY-f",
        },
        {
          q: "¿Qué forma oyes después de «lo que»?",
          options: ["«decidió»: decisión ya tomada", "«decide»: lo que suele decidir", "«decida»: decisión todavía abierta"],
          answer: 2,
          why: "de-CI-da, con «a» final átona: el contenido queda abierto.",
          audio: "Vamos a respetar lo que decida la asamblea.",
          voice: "es-UY-m",
        },
        {
          q: "¿Qué hace el arquitecto, según lo que oyes?",
          options: ["Informa de que la gente llegaba tarde.", "Pide que la gente llegara temprano."],
          answer: 1,
          why: "Se oye lle-GA-ran con la terminación de imperfecto de subjuntivo: una petición.",
          audio: "El arquitecto avisó de que llegaran temprano para la inspección.",
          voice: "es-AR-m",
        },
      ],
    },
    produce: [
      { text: "La comisión insiste en que todos paguen antes del viernes.", tip: "Alarga un poco «guen» sin subir el volumen.", voice: "es-UY-f" },
      { text: "Entiendo que estés cansada; la obra lleva meses.", tip: "Marca el acento agudo de «estés» y baja el tono en la segunda parte.", voice: "es-UY-m" },
      { text: "No digo que la empresa mienta; digo que el contrato es ambiguo.", tip: "Contrasta «mienta» y «es» con una pausa en el punto y coma.", voice: "es-UY-f" },
      { text: "Que el salón tenga humedad no es ninguna novedad.", tip: "Agrupa «que el salón tenga humedad» como un solo bloque temático.", voice: "es-UY-m" },
    ],
    spelling: "Por escrito, la diferencia a veces exige cambiar consonantes para mantener el sonido: «pagan / paguen», «sacan / saquen», «alcanzan / alcancen». Si escribes un acta, revisa estas formas.",
  },
  listening: {
    title: "Una vocal en el acta",
    context: "Graciela, secretaria de una cooperativa de vivienda del barrio Malvín, y Joaquín, miembro de la comisión directiva, revisan en el salón comunal el borrador del acta de la última asamblea antes de colgarla en la cartelera. Escucha primero sin transcripción. Las voces son sintéticas y no representan variedades verificadas.",
    speakers: [
      { id: "g", name: "Graciela", voice: "es-UY-f", role: "Secretaria de la comisión" },
      { id: "j", name: "Joaquín", voice: "es-UY-m", role: "Miembro de la comisión directiva" },
    ],
    script: [
      { speaker: "g", text: "Joaquín, antes de imprimir quiero que miremos tres frases que me dejaron dudando. La primera es del punto dos: «La comisión entiende que los socios del bloque C están molestos por la filtración». ¿Así está bien?" },
      { speaker: "j", text: "Depende de lo que quisimos decir. Si lo dejamos en indicativo, parece que nos enteramos en la asamblea, como si fuera una noticia. Y no fue así: hace dos meses que nos lo vienen diciendo. Lo que dijo Marta fue que comprendía la molestia, que le parecía lógica. Yo pondría «entiende que estén molestos»." },
      { speaker: "g", text: "Tienes razón. Cambio a «estén». La segunda es más delicada. En el punto tres escribí: «La tesorera insiste en que los socios con atraso pagan el recargo». Me la marcó Rosa con un signo de pregunta enorme." },
      { speaker: "j", text: "Y con motivo. Así, la tesorera estaría afirmando que ya lo pagan, y la mitad no lo paga. Lo que ella hizo fue exigirlo, así que va «paguen». Pero ojo, porque en el mismo punto dijo otra cosa, que el banco ya recibió la cuota de octubre. Eso sí es un dato, y ahí el indicativo es lo correcto: «insiste en que el banco ya recibió la cuota»." },
      { speaker: "g", text: "Bien, dos lecturas del mismo verbo en el mismo párrafo. Me gusta, porque se ve la diferencia. La tercera es la de Ernesto. Escribí: «Ernesto dijo que la comisión escondía las cuentas». Y él me mandó un mensaje anoche, muy enojado: dice que no dijo eso." },
      { speaker: "j", text: "Yo estaba al lado y lo escuché bien. Sus palabras fueron: «No digo que escondan las cuentas; digo que las publican tarde». No acusó a nadie. Así que en el acta no puede figurar la acusación. Pondría exactamente eso, con la negación, y que el lector vea que lo que él critica es el plazo." },
      { speaker: "g", text: "De acuerdo. Y para el final tengo un párrafo con el tema del salón: «Que el salón tiene humedad, lo sabe todo el mundo; el hecho de que la obra se postergue tres veces es lo que preocupa». ¿Lo dejo así?" },
      { speaker: "j", text: "Lo de la humedad sí, con indicativo, porque lo presentas como algo evidente y lo retomas con «lo». Lo segundo lo cambiaría: la obra ya se postergó tres veces, no se va a postergar. Pondría «el hecho de que la obra se haya postergado tres veces». Y al final agrega una frase que diga que haremos lo que decida la próxima asamblea, porque todavía no se votó." },
      { speaker: "g", text: "«Lo que decida», con subjuntivo, porque nadie sabe qué va a decidir. Perfecto. Imprimo, lo firmamos los dos y mañana lo cuelgo en la cartelera. Como alguien vuelva a quejarse del acta, le pido que venga a la próxima reunión de la comisión." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué hacen y qué tipo de problema resuelven?",
        exercise: {
          id: "c2-02-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué hacen Graciela y Joaquín?",
              options: [
                "Preparan el orden del día de la próxima asamblea.",
                "Revisan el borrador de un acta antes de publicarla.",
                "Discuten si conviene subir la cuota mensual.",
              ],
              answer: 1,
              why: "Repasan frases del acta antes de imprimirla y colgarla en la cartelera.",
            },
            {
              q: "¿Qué tienen en común las frases que revisan?",
              options: [
                "Que el modo verbal cambia lo que el acta atribuye a cada persona.",
                "Que tienen faltas de ortografía.",
                "Que están escritas con demasiados tecnicismos.",
              ],
              answer: 0,
              why: "En cada caso la elección entre indicativo y subjuntivo decide si alguien informa, exige, valora o acusa.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c2-02-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada corrección.",
          items: [
            {
              q: "¿Por qué Joaquín prefiere «entiende que estén molestos»?",
              options: [
                "Porque la molestia era conocida y Marta la encontró lógica.",
                "Porque la comisión no sabía que había una filtración.",
                "Porque el indicativo es demasiado informal para un acta.",
              ],
              answer: 0,
              why: "Hace dos meses que los socios se quejaban: no es una noticia, sino algo que la comisión comprende.",
            },
            {
              q: "¿Qué dos cosas dijo la tesorera con el mismo verbo?",
              options: [
                "Que pagaran todos y que el banco cobraría en noviembre.",
                "Que nadie pagaba el recargo y que el banco no había cobrado.",
                "Que los atrasados pagaran el recargo y que el banco ya había recibido la cuota de octubre.",
              ],
              answer: 2,
              why: "La primera es una exigencia (subjuntivo); la segunda, un dato (indicativo).",
            },
            {
              q: "¿Qué dijo realmente Ernesto?",
              options: [
                "Que la comisión escondía las cuentas.",
                "Que no acusaba a nadie de esconderlas, sino que criticaba que se publicaran tarde.",
                "Que no había leído las cuentas.",
              ],
              answer: 1,
              why: "«No digo que escondan las cuentas; digo que las publican tarde».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo cada versión final refleja la perspectiva del hablante. Relaciona y mira la transcripción solo al terminar.",
        exercise: {
          id: "c2-02-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase final del acta con lo que hace.",
          pairs: [
            { left: "entiende que estén molestos", right: "encuentra lógica una molestia ya conocida" },
            { left: "insiste en que paguen el recargo", right: "exige un pago" },
            { left: "insiste en que el banco ya recibió la cuota", right: "sostiene un dato" },
            { left: "no digo que escondan las cuentas", right: "rechaza una acusación que no hace" },
            { left: "haremos lo que decida la próxima asamblea", right: "deja abierta una decisión futura" },
          ],
          why: "El mismo tipo de verbo o de nexo cambia de valor según el modo de la subordinada.",
        },
      },
    ],
  },
  reading: {
    title: "Lo que dijimos y lo que entendieron",
    genre: "Columna de boletín vecinal",
    frame: "Columna de Graciela Ferreira, secretaria de la cooperativa, en el boletín mensual «El Ceibo informa», que se reparte en papel y por mensaje a las ochenta familias. Cooperativa, personas y hechos son ficticios.",
    text: [
      "Desde que me eligieron secretaria, hace ya cuatro años, aprendí que en una cooperativa de vivienda el acta no es un trámite. Es la memoria común: lo que allí consta es lo que, dentro de diez años, alguien citará para reclamar, para defenderse o para entender por qué el salón comunal tiene el techo que tiene. Por eso quiero dedicar esta columna a los malentendidos de la última asamblea, que no nacieron de ninguna mala intención, sino de algo mucho más pequeño: una vocal.",
      "Empiezo por la frase que más mensajes provocó. En la circular del día 3 escribimos que «la comisión insiste en que los socios con atraso pagan el recargo». Quisimos decir que lo exigíamos; muchos entendieron que les estábamos acusando de mentir, como si afirmáramos que ya lo pagaban y alguien dijera lo contrario. El verbo «insistir» tiene esa doble lectura: con indicativo sostiene un dato, con subjuntivo pide algo con fuerza. La frase correcta era «insiste en que paguen». Pido disculpas a quienes se sintieron señalados; la culpa no fue suya, sino de una «a» donde iba una «e».",
      "El segundo caso fue el contrario. En el acta anterior habíamos puesto que «la comisión entiende que el bloque C esté preocupado por la filtración». Una vecina del bloque me dijo, con toda razón, que eso sonaba a palmadita en la espalda: la comisión lo encontraba comprensible, pero no decía nada sobre si lo sabía. Ella quería que constara que estábamos informados desde agosto. Para eso servía el indicativo: «la comisión sabe, desde agosto, que el bloque C está preocupado». Aquí no se trataba de ser amables, sino de dejar constancia de un hecho.",
      "Hubo también una discusión sobre la frase que abría el punto cuatro: «Que el fondo de reserva no alcance para el techo no es culpa de nadie». Algún socio la leyó como si pusiéramos en duda el dato, porque aparece en subjuntivo. No es así. Que el fondo no alcanza lo dijo la tesorera con números, y nadie lo discute; justamente porque nadie lo discute lo ponemos al principio, como tema, y comentamos algo sobre él. El subjuntivo, en ese lugar, no significa duda: significa que el dato ya está sobre la mesa. Si hubiéramos querido presentarlo como noticia, habríamos escrito «es cierto que el fondo no alcanza».",
      "El caso de Ernesto merece párrafo propio. En el borrador del acta se le atribuía haber dicho que la comisión escondía las cuentas. Lo que dijo, y Joaquín y yo lo comprobamos, fue: «No digo que escondan las cuentas; digo que las publican tarde». La diferencia entre las dos versiones no es de matiz: una es una acusación y la otra, una crítica razonable sobre los plazos. Con la negación y el subjuntivo, Ernesto dejaba claro que no afirmaba aquello; con el indicativo de la segunda parte, afirmaba esto otro. El acta definitiva recoge sus palabras tal como las pronunció, y desde este mes las cuentas se publican el día cinco.",
      "Queda, por último, lo que todavía no sabemos. La comisión no ha decidido si conviene pedir un préstamo para el techo o aprobar una cuota extraordinaria. Por eso, en el comunicado escribimos que «haremos lo que decida la asamblea de diciembre», y no «lo que decide», que habría sonado a decisión tomada. Quizá la asamblea prefiera el préstamo; a lo mejor alguien trae una tercera opción que ninguno vio. Como no lleguemos al quórum, en cualquier caso, la decisión volverá a postergarse, y con ella el arreglo del techo.",
      "Les pido una cosa para la próxima asamblea: cuando alguien diga algo importante, pidan que conste en acta y díctenlo despacio. No porque desconfiemos unos de otros, sino porque el español nos obliga a elegir, en cada «que», si afirmamos, valoramos o pedimos. Y esa elección, que en una charla de pasillo se resuelve con un gesto, en el papel queda para siempre. Que haya tantas maneras de decir lo mismo no es un defecto de la lengua: es lo que nos permite decir exactamente lo que queremos, siempre que nos tomemos el trabajo de elegir bien.",
    ],
    glossary: [
      { es: "la circular", note: "aviso escrito que se envía a todos los miembros" },
      { es: "palmadita en la espalda", note: "gesto de consuelo que no compromete a nada" },
      { es: "charla de pasillo", note: "conversación informal, fuera de la reunión" },
    ],
    tasks: [
      {
        id: "c2-02-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el razonamiento de la columna.",
        items: [
          {
            q: "¿Por qué la vecina del bloque C no estaba conforme con «entiende que el bloque C esté preocupado»?",
            options: [
              "Porque la frase decía que la comisión dudaba de la preocupación.",
              "Porque quería que constara que la comisión estaba informada, no solo que la comprendía.",
              "Porque el bloque C no estaba preocupado.",
            ],
            answer: 1,
            why: "El subjuntivo expresaba comprensión; ella necesitaba la constatación de un hecho, en indicativo.",
          },
          {
            q: "Según Graciela, ¿qué significa el subjuntivo en «Que el fondo de reserva no alcance para el techo no es culpa de nadie»?",
            options: [
              "Que el dato ya se conoce y se toma como tema del comentario.",
              "Que la tesorera no está segura de sus números.",
              "Que el fondo podría alcanzar si se reorganiza.",
            ],
            answer: 0,
            why: "La oración con «que» inicial presenta un dato indiscutido como punto de partida.",
          },
          {
            q: "¿Por qué escribieron «haremos lo que decida la asamblea»?",
            options: [
              "Porque la asamblea ya había votado el préstamo.",
              "Porque es más cortés que el indicativo.",
              "Porque la decisión todavía no se ha tomado.",
            ],
            answer: 2,
            why: "«Lo que» con subjuntivo deja abierto un contenido que aún no está identificado.",
          },
        ],
      },
      {
        id: "c2-02-lectura-funcion",
        type: "match",
        prompt: "Relaciona cada frase citada en la columna con la perspectiva que expresa.",
        pairs: [
          { left: "insiste en que paguen", right: "exigencia" },
          { left: "sabe, desde agosto, que el bloque C está preocupado", right: "constancia de un hecho conocido por la comisión" },
          { left: "no digo que escondan las cuentas", right: "rechazo de una acusación" },
          { left: "como no lleguemos al quórum", right: "condición con tono de advertencia" },
        ],
      },
      {
        id: "c2-02-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una afirmación de la columna con tus propios argumentos.",
        items: [
          {
            prompt: "Graciela afirma que la diferencia entre la versión del borrador y las palabras de Ernesto «no es de matiz». Explica en 80–100 palabras por qué tiene razón o por qué exagera, citando el modo de cada verbo.",
            model: "Tiene razón. «Ernesto dijo que la comisión escondía las cuentas» le atribuye una afirmación en indicativo: una acusación. Sus palabras reales, «no digo que escondan las cuentas», usan la negación con subjuntivo precisamente para no afirmar ese contenido, y la segunda parte, «digo que las publican tarde», afirma otra cosa en indicativo. No se trata de una sombra de significado, sino de dos actos distintos: acusar o criticar un plazo. En un acta, confundirlos puede dañar la reputación de alguien.",
            checklist: [
              "Tomo posición y la justifico.",
              "Explico el valor de la negación con subjuntivo.",
              "Distingo los dos actos: acusar y criticar.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora cita una forma y explica qué perspectiva activa.",
      items: [
        { quote: "con indicativo sostiene un dato, con subjuntivo pide algo con fuerza", note: "Las dos lecturas de «insistir» resumidas en una frase paralela." },
        { quote: "El subjuntivo, en ese lugar, no significa duda: significa que el dato ya está sobre la mesa.", note: "Valor temático de la oración con «que» inicial." },
        { quote: "Que haya tantas maneras de decir lo mismo no es un defecto de la lengua", note: "La propia autora usa la construcción que explica: tema conocido en subjuntivo." },
        { quote: "Quizá la asamblea prefiera el préstamo; a lo mejor alguien trae una tercera opción", note: "Dos adverbios de duda, cada uno con el modo que admite." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención, reformulación y escritura breve. Termina recuperando la semana anterior y las clases de C1 que preparan esta.",
    exercises: [
      {
        id: "c2-02-orden",
        type: "order",
        prompt: "Ordena las palabras para formar la frase que expresa la perspectiva indicada.",
        items: [
          {
            words: ["Que", "la", "obra", "se", "haya", "retrasado", "no", "es", "culpa", "de", "la", "arquitecta."],
            why: "Tema conocido al principio, en subjuntivo, y comentario después.",
          },
          {
            words: ["No", "es", "que", "falte", "voluntad,", "es", "que", "sobran", "facturas."],
            why: "«No es que» + subjuntivo rechaza una interpretación; «es que» + indicativo da la causa real.",
          },
          {
            words: ["Como", "no", "arreglen", "la", "bomba,", "el", "edificio", "se", "quedará", "sin", "agua."],
            why: "«Como» + subjuntivo con valor de condición y advertencia.",
          },
        ],
      },
      {
        id: "c2-02-intencion",
        type: "context",
        prompt: "Elige la versión que corresponde a la intención descrita.",
        items: [
          {
            context: "La comisión quiere dejar claro en un correo a la empresa constructora que ya sabe, por la inspección, que hay una grieta en la losa.",
            q: "¿Qué frase usa?",
            options: [
              "Entendemos que haya una grieta en la losa.",
              "Por la inspección, entendemos que hay una grieta en la losa del tercer piso.",
              "No entendemos que haya una grieta en la losa.",
            ],
            answer: 1,
            why: "Con indicativo, «entender que» constata información obtenida.",
          },
          {
            context: "Una socia teme que se interprete su propuesta como un ataque a la tesorera. Quiere aclararlo antes de hablar.",
            q: "¿Cómo empieza?",
            options: [
              "No digo que la tesorera lo haga mal; digo que necesita ayuda.",
              "No digo que la tesorera lo hace mal, pero lo hace mal.",
              "Digo que la tesorera lo haga mal.",
            ],
            answer: 0,
            why: "La negación con subjuntivo deja claro que no afirma esa crítica.",
          },
          {
            context: "El presidente aún no sabe cuánto costará la reparación y lo dice en la asamblea.",
            q: "¿Qué frase es coherente con su situación?",
            options: [
              "Pagaremos lo que cobró el herrero.",
              "Pagaremos lo que cobra el herrero.",
              "Pagaremos lo que cobre el herrero, sea cual sea la cifra.",
            ],
            answer: 2,
            why: "La cifra no está identificada todavía: «lo que» + subjuntivo.",
          },
        ],
      },
      {
        id: "c2-02-reformular",
        type: "transform",
        prompt: "Reformula cada frase para cambiar la perspectiva como se indica, sin cambiar el resto.",
        items: [
          {
            source: "La comisión insiste en que el contrato incluye la impermeabilización.",
            instruction: "Convierte la constatación en una exigencia a la empresa, con el verbo en presente.",
            answers: ["La comisión insiste en que el contrato incluya la impermeabilización."],
            why: "«Insistir en que» + subjuntivo = exigir.",
          },
          {
            source: "Es cierto que la cooperativa tiene deudas con el banco.",
            instruction: "Empieza por «Que» y presenta la deuda como tema conocido; añade «no significa que vayamos a perder las casas».",
            answers: ["Que la cooperativa tenga deudas con el banco no significa que vayamos a perder las casas."],
            why: "Oración con «que» inicial como tema: subjuntivo.",
          },
          {
            source: "A lo mejor el banco acepta refinanciar la deuda.",
            instruction: "Sustituye «a lo mejor» por «tal vez» y expresa más duda.",
            answers: ["Tal vez el banco acepte refinanciar la deuda."],
            why: "«Tal vez» delante del verbo admite subjuntivo, que aumenta la duda.",
          },
        ],
      },
      {
        id: "c2-02-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe dos versiones (25–40 palabras cada una) de la respuesta de la comisión a un socio que se queja del ruido de la obra: una que constate que la comisión ya lo sabía y otra que muestre comprensión. Usa «entender que» en las dos.",
            model: "Constatación: «Por los mensajes del bloque B, entendemos que el ruido empieza antes de las ocho, y ya hablamos con la empresa». Comprensión: «Entendemos que el ruido moleste, sobre todo a quienes trabajan de noche; intentaremos concentrar las tareas más ruidosas al mediodía».",
            checklist: [
              "La primera versión usa indicativo y aporta la fuente del dato.",
              "La segunda usa subjuntivo y muestra empatía.",
              "Cada versión termina con una acción concreta.",
            ],
          },
          {
            prompt: "Redacta un párrafo de 50–70 palabras para el acta que empiece con una oración de «que» en posición de sujeto y termine con «lo que + subjuntivo».",
            model: "Que la reparación del techo cueste más de lo previsto no sorprende a nadie: la cotización tiene ya un año. La comisión pedirá dos presupuestos nuevos antes del 20 de noviembre y los presentará en la asamblea de diciembre. Hasta entonces no se comprometerá ningún gasto, y la cooperativa hará lo que decidan los socios por mayoría.",
            checklist: [
              "La oración inicial va en subjuntivo y presenta un dato conocido.",
              "Hay al menos un dato nuevo en indicativo o futuro.",
              "El cierre con «lo que» deja la decisión abierta.",
            ],
          },
        ],
      },
      {
        id: "c2-02-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste la semana pasada y en C1 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G205 (futuro perfecto de subjuntivo). Estímulo, estatuto de la cooperativa de 1972: «El socio que no hubiere cumplido las horas de ayuda mutua no podrá ocupar la vivienda». Da la versión actual y explica en una frase qué orden de hechos exige.",
            model: "«El socio que no haya cumplido las horas de ayuda mutua no podrá ocupar la vivienda». Primero se cumplen las horas y solo después se puede ocupar la vivienda; la forma no afirma que alguien haya incumplido.",
            checklist: [
              "Uso «haya» + participio tras el relativo.",
              "Explico la anterioridad y la eventualidad.",
            ],
          },
          {
            prompt: "Recuperación de la clase G206 (reformulación moderna). Estímulo: «Si algún socio vendiere su parte sin autorización, perderá la condición de cooperativista». Moderniza la frase y di qué cambio exige el «si».",
            model: "«Si algún socio vende su parte sin autorización, perderá la condición de cooperativista». Detrás de «si» condicional el español actual usa presente de indicativo, no subjuntivo.",
            checklist: [
              "Uso presente de indicativo tras «si».",
              "Mantengo la consecuencia en futuro.",
            ],
          },
          {
            prompt: "Recuperación de la clase G168 (modo según la postura). Estímulo: «Creo que la asamblea tiene razón» / «No creo que la asamblea tenga razón» / «¿Crees que la asamblea tiene razón?». Explica en 40–60 palabras qué cambia en cada una y por qué esta semana el paso es distinto.",
            model: "En la primera afirmo una opinión: indicativo. En la segunda niego esa opinión y el contenido queda sin afirmar: subjuntivo. En la pregunta pido una opinión y el indicativo es lo habitual. Esta semana el paso es otro: los dos modos son posibles y la elección muestra si presento algo como dato nuevo o como tema, valoración o petición.",
            checklist: [
              "Explico las tres frases por separado.",
              "Distingo la regla de C1 del matiz de C2.",
            ],
          },
          {
            prompt: "Recuperación de la clase G170 (concesivas). Estímulo: «Aunque la obra es cara, la vamos a hacer» frente a «Aunque la obra sea cara, la vamos a hacer». Explica la diferencia en una situación de asamblea.",
            model: "Con «es» el hablante informa de que la obra es cara: lo acepta como dato y aun así decide hacerla. Con «sea» no entra a discutir si es cara o no: lo concede o lo deja como posibilidad. En una asamblea, la segunda sirve para responder a quien insiste en el precio sin darle la razón.",
            checklist: [
              "Asocio el indicativo a la información afirmada.",
              "Asocio el subjuntivo a la concesión sin discusión.",
              "Sitúo el ejemplo en una asamblea.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta el comunicado de la comisión directiva a todas las familias de la cooperativa (400–520 palabras) sobre el estado del techo del salón comunal, las quejas recibidas y las opciones que se votarán en diciembre.",
    context: "El comunicado se cuelga en la cartelera y se envía por mensaje. Debe informar con precisión, reconocer las quejas sin aceptar culpas que no corresponden y dejar abiertas las decisiones que todavía no se tomaron. Puedes usar los datos de esta semana o inventar otros con la misma lógica.",
    steps: [
      "Haz una lista con tres columnas: datos que afirmas como nuevos, datos conocidos que vas a comentar y decisiones abiertas.",
      "Decide el orden: situación, quejas y respuesta, opciones, condiciones y llamada a participar.",
      "Redacta sin copiar el modelo. Usa al menos un verbo de doble lectura con cada uno de sus valores, una oración con «que» inicial y una negación del tipo «no es que…».",
      "Revisa el texto frase por frase: subraya cada subordinada y corrige el modo si no corresponde a la perspectiva que quieres. Lee un párrafo en voz alta.",
    ],
    useLanguage: [
      "Que + subjuntivo + no significa / no justifica…",
      "entendemos que + indicativo / + subjuntivo",
      "insistimos en que + indicativo / + subjuntivo",
      "No es que…, es que…",
      "haremos lo que decida…",
      "Como no + subjuntivo, …",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Queridas familias: Que el techo del salón comunal necesite una reparación no es ninguna novedad; lo hablamos en las dos últimas asambleas y muchos lo comprobaron con baldes en el piso. Lo que sí es nuevo es el informe que la arquitecta nos entregó el martes: la filtración no viene de las juntas, como creíamos, sino de una fisura en la losa. Entendemos que algunos socios estén cansados de esperar, y queremos explicar por qué no hemos empezado la obra.",
    ],
    checklist: [
      "Cada dato nuevo está en indicativo y cada tema conocido que comento, en subjuntivo.",
      "Uso al menos un verbo de doble lectura en sus dos valores sin ambigüedad.",
      "Las decisiones pendientes quedan abiertas («lo que decida», «tal vez»).",
      "No atribuyo a nadie una afirmación que no hizo.",
      "El tono es respetuoso y firme a la vez.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave y no leas un guion. Si te grabas, la grabación se queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Presentación en la asamblea",
        prompt: "Eres miembro de la comisión. Presenta en la asamblea el estado del techo, las dos opciones (préstamo o cuota extraordinaria) y lo que pasará si no se llega al quórum. Distingue con claridad lo que se sabe, lo que se comenta y lo que todavía está abierto.",
        prep: [
          "Anota tres datos nuevos, dos temas conocidos y una decisión abierta.",
          "Prepara una frase con «que» inicial y otra con «como + subjuntivo».",
        ],
        seconds: 240,
        model: "Buenas noches a todos. Que el techo del salón pierda agua lo sabemos desde el invierno pasado; lo nuevo es que la arquitecta encontró una fisura en la losa. Tenemos dos caminos: pedir un préstamo o aprobar una cuota extraordinaria. No es que la comisión prefiera uno; es que cada uno tiene costos distintos, y por eso los traemos aquí. Haremos lo que decida esta asamblea. Eso sí: como no lleguemos al quórum, todo se posterga hasta marzo…",
        selfCheck: [
          "Cada dato nuevo va en indicativo.",
          "Marco con la voz la diferencia entre informar y valorar.",
          "Dejo clara la decisión pendiente.",
        ],
      },
      {
        title: "Mediación con un socio ofendido",
        prompt: "Ernesto está molesto porque cree que la comisión lo acusa de difamar a la tesorera. Escúchalo, hazle dos preguntas para entender qué frase le molestó, aclárale qué dice el acta y qué no dice, y propón una corrección.",
        prep: [
          "Prepara una frase de reconocimiento con «entiendo que + subjuntivo».",
          "Ten a mano la cita exacta con «no digo que…; digo que…».",
        ],
        seconds: 180,
        model: "Entiendo que te moleste, Ernesto, y quiero arreglarlo. ¿Qué frase exactamente leíste? ¿Fue en el borrador o en la versión de la cartelera? En la versión final pusimos tus palabras: «no digo que escondan las cuentas; digo que las publican tarde». Eso no es una acusación, es una crítica sobre los plazos. Si quieres, añadimos una nota que diga que el borrador fue corregido a tu pedido.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Distingo lo que dijo de lo que se le atribuyó.",
          "Propongo una solución concreta.",
        ],
      },
      {
        title: "Glosa de tres frases del acta",
        prompt: "Lee en voz alta tres frases del acta con verbos de doble lectura y, después de cada una, explica en una frase qué hace el hablante: constata, valora, informa o pide.",
        prep: [
          "Elige frases con «entender», «insistir» y «avisar».",
          "Marca la vocal que decide el modo en cada verbo.",
        ],
        seconds: 90,
        selfCheck: [
          "La vocal del modo se oye con claridad.",
          "Separo la cita de la explicación con una pausa.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tus dudas reales sobre la elección de modo. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Explica",
        task: "Toma una frase del comunicado con un verbo de doble lectura y explica a tu profesor qué cambiaría si usaras el otro modo.",
        phrases: ["Con indicativo afirmo…; con subjuntivo…", "Lo que quería transmitir era…"],
      },
      {
        move: "Pregunta",
        task: "Lleva una frase real (de un correo, una noticia o un mensaje) con «el hecho de que» o «que» inicial y pregunta si el modo elegido es el más natural.",
        phrases: ["¿Aquí funcionaría también el indicativo?", "¿Qué matiz se pierde si lo cambio?"],
      },
      {
        move: "Negocia",
        task: "Simula con tu profesor la corrección de una frase del acta: él defiende una versión y tú otra; llegad a un acuerdo justificado.",
        phrases: ["Entiendo que prefieras…, pero…", "No digo que tu versión sea incorrecta; digo que…"],
      },
      {
        move: "Compara",
        task: "Pide a tu profesor dos frases idénticas salvo por el modo y adivina el contexto en que diría cada una.",
        phrases: ["Esta la diría alguien que acaba de enterarse…", "Esta suena más a reproche…"],
      },
    ],
    bring: "Tu comunicado revisado, con las subordinadas subrayadas, y una frase real que te haya hecho dudar.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«La administradora avisó de que los vecinos retiraran las macetas del pasillo». ¿Qué hace la administradora?",
        options: [
          "Informa de que los vecinos ya las retiraron.",
          "Pide que las retiren.",
          "Duda de que las vayan a retirar.",
        ],
        answer: 1,
        why: "«Avisar de que» + subjuntivo transmite una petición.",
      },
      {
        type: "choice",
        q: "¿En qué frase es natural el indicativo con «el hecho de que»?",
        options: [
          "El retraso se debe al hecho de que el proveedor cerró en enero.",
          "El hecho de que el proveedor cerró en enero no es excusa.",
          "Del hecho de que el proveedor cierre no se deduce nada.",
        ],
        answer: 0,
        why: "Detrás del verbo y como explicación nueva, «el hecho de que» admite el indicativo con naturalidad.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué expresa la hablante?",
        options: [
          "Que se acaba de dar cuenta de un dato.",
          "Que lamenta algo que el oyente no pudo hacer.",
          "Que percibe un cambio en el ambiente.",
        ],
        answer: 1,
        why: "«Siento que + subjuntivo» = lamentar: «no hayas podido».",
        audio: "Siento mucho que no hayas podido venir a la asamblea; te mandamos el acta esta noche.",
        voice: "es-UY-f",
      },
      {
        type: "gap",
        q: "No es que la comisión ___ el préstamo; es que el banco no lo ofrece. [rechazar]",
        answers: [["rechace", "rechazara", "rechazase", "haya rechazado"]],
        hint: "Lo que se niega con «no es que» es una interpretación, no un dato.",
        why: "«No es que» + subjuntivo.",
      },
      {
        type: "gap",
        q: "Quizá la reunión ___ el jueves, pero nadie lo ha confirmado. [ser, más duda]",
        answers: [["sea"]],
        hint: "Adverbio delante del verbo y mayor duda.",
        why: "«Quizá» antepuesto + subjuntivo marca más incertidumbre.",
      },
      {
        type: "transform",
        source: "Sabemos que la empresa ha subido los precios.",
        instruction: "Reescribe la frase empezando por «Que» para tratar el dato como tema conocido y añade al final «no nos obliga a aceptar la cotización».",
        answers: ["Que la empresa haya subido los precios no nos obliga a aceptar la cotización."],
        why: "Oración con «que» inicial como tema: subjuntivo.",
      },
      {
        type: "error",
        sentence: "Igual la arquitecta venga mañana a ver la fisura.",
        answers: ["Igual la arquitecta viene mañana a ver la fisura."],
        why: "«Igual», como «a lo mejor», va con indicativo.",
      },
      {
        type: "error",
        sentence: "No parece que el ascensor funciona bien desde la tormenta.",
        answers: ["No parece que el ascensor funcione bien desde la tormenta."],
        why: "«No parece que» pide subjuntivo.",
      },
      {
        type: "order",
        words: ["Entendemos", "que", "algunas", "familias", "desconfíen", "de", "la", "empresa."],
        why: "«Entender que» + subjuntivo = encontrar lógico.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de la comisión por qué «la tesorera insiste en que pagan» y «la tesorera insiste en que paguen» no pueden intercambiarse en un acta. Da un contexto para cada una.",
        model: "Las dos frases son correctas, pero hacen cosas distintas. «Insiste en que pagan» sostiene un dato: por ejemplo, cuando alguien dice que los atrasados no pagan y la tesorera responde, con los recibos en la mano, que sí lo hacen. «Insiste en que paguen» es una exigencia: la tesorera pide con fuerza que se pongan al día. Si el acta usa una por otra, atribuye a la tesorera un acto que no realizó: una afirmación en lugar de una petición, o al revés.",
        checklist: [
          "Explico el valor de cada modo.",
          "Doy un contexto distinto para cada frase.",
          "Menciono la consecuencia de confundirlas en un acta.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Elijo entre indicativo y subjuntivo cuando los dos son posibles según si afirmo un dato o lo trato como tema, valoración, hipótesis o petición.",
      "Uso con sus dos lecturas «entender», «comprender», «sentir», «decir», «avisar», «insistir» y «parecer».",
      "Gradúo mi compromiso con «no digo que…», «no es que…, es que…» y los adverbios de duda según su posición.",
      "Distingo «lo que» y «como» con indicativo y con subjuntivo en textos formales y en la conversación.",
    ],
    review: [
      "Dentro de dos días, tapa la columna de la derecha de la tabla «Constatar o valorar, informar o pedir» y escribe un ejemplo propio para cada verbo.",
      "Dentro de una semana, busca en un correo o una noticia real una frase con «el hecho de que» y decide si el modo podría cambiar.",
      "En la próxima clase, lee tu comunicado y pide a tu profesor que señale la subordinada más discutible.",
    ],
  },
  related: [
    { path: "/gramatica/seleccion-fina-de-indicativo-y-subjuntivo", label: "Clase: Selección fina de indicativo y subjuntivo según perspectiva" },
  ],
};
