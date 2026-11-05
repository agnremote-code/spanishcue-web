import type { Module } from "../../types";

/**
 * C1 · semana 15 · checkpoint · Autoestudio espejo de G194 (citas indirectas y
 * distanciamiento en textos) y G195 (concordancia especial y sujetos
 * pospuestos), con integración de G186–G193. Repaso autónomo con un cabildo
 * abierto ficticio sobre unas escaleras eléctricas y el turismo en un barrio de
 * ladera de Medellín. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w15: Module = {
  id: "c1-15",
  level: "c1",
  week: 15,
  kind: "checkpoint",
  title: "Lo que pidieron los vecinos fueron escaleras",
  subtitle: "Checkpoint de las semanas 11 a 15: citar con precisión, concordar cuando el verbo duda y todo lo repasado desde la semana 11",
  stop: {
    place: "Medellín",
    country: "Colombia",
  },
  minutes: 150,
  newObjectives: [
    "c1.gram.g194",
    "c1.gram.g195",
    "c1.voc.w15-cabildo-barrio",
    "c1.pron.w15-cita-en-voz-alta",
    "c1.lis.w15-radio-comunitaria",
    "c1.read.w15-cronica-cabildo",
    "c1.wri.w15-relatoria-reunion",
    "c1.spk.w15-informe-asamblea",
    "c1.fun.w15-transmitir-palabras",
    "c1.disc.w15-integrar-voces",
    "c1.rev.w15-semanas-11-15",
  ],
  reviewObjectives: ["c1.gram.g186","c1.gram.g187","c1.voc.w11-reglamento-liga","c1.pron.w11-pausa-desambigua","c1.lis.w11-comite-competicion","c1.read.w11-columna-reglamento","c1.wri.w11-propuesta-reforma","c1.spk.w11-explicar-norma","c1.fun.w11-aclarar-lectura","c1.disc.w11-retomar-sin-dudas","c1.gram.g188","c1.gram.g189","c1.voc.w12-bibliotecas-barrio","c1.pron.w12-inciso-reformulador","c1.lis.w12-entrevista-radio","c1.read.w12-tribuna-bibliotecas","c1.wri.w12-resumen-ejecutivo","c1.spk.w12-explicar-informe","c1.fun.w12-volver-sobre-lo-dicho","c1.disc.w12-densidad-registro","c1.gram.g190","c1.gram.g191","c1.voc.w13-bar-tapas","c1.pron.w13-sino-si-no","c1.lis.w13-reunion-familiar","c1.read.w13-resena-gastronomica","c1.wri.w13-informe-critico","c1.spk.w13-critica-constructiva","c1.fun.w13-discrepar-con-tacto","c1.disc.w13-matizar-argumento","c1.gram.g192","c1.gram.g193","c1.voc.w14-textil-autoria","c1.pron.w14-enfasis-escala","c1.lis.w14-taller-tejedoras","c1.read.w14-cronica-polemica","c1.wri.w14-cronica-equilibrada","c1.spk.w14-informar-polemica","c1.fun.w14-atribuir-y-enfatizar","c1.disc.w14-voces-en-el-texto"],
  prerequisites: ["c1-14"],
  goal: {
    canDo: "Puedo incorporar a un texto las palabras de otros con citas bien puntuadas, estilo indirecto y resúmenes que interpretan, mantener la concordancia cuando el sujeto es colectivo, compuesto o va detrás del verbo, e integrar lo repasado en las semanas 11 a 14.",
    steps: [
      "Repasa en la teoría cómo se cita y se resume, los casos especiales de concordancia y la tabla de integración de las semanas 11 a 14.",
      "Practica con frases de un cabildo abierto en un barrio de ladera de Medellín.",
      "Escucha el programa de la radio comunitaria y lee la crónica del periódico del barrio.",
      "Redacta la relatoría de una reunión, revísala con la lista de control y presenta oralmente sus conclusiones.",
    ],
  },
  theory: {
    intro: "Esta semana cierra el tercer bloque de C1. Repasas dos clases nuevas, sobre cómo llevar a tu texto las palabras de otros y cómo hacer concordar el verbo cuando duda, y las combinas con lo que viste en las semanas 11 a 14: ambigüedad y elipsis (G186, G187), nominalización y reformulación (G188, G189), contraargumentación y atenuación (G190, G191), y énfasis y atribución (G192, G193). La historia es la de un cabildo abierto en un barrio de ladera de Medellín, donde los vecinos discuten la ampliación de unas escaleras eléctricas.",
    parts: [
      {
        heading: "Citar literalmente: dónde van los dos puntos y las comillas",
        body: [
          "Cita con las palabras exactas cuando importan: una promesa, una frase polémica, una fórmula que define una postura. La cita completa va detrás de dos puntos y empieza con mayúscula: «La alcaldesa dijo: “Las obras empezarán en marzo”». Con «como señala», «en palabras de» o «según escribe», se usa coma. El fragmento integrado, en cambio, no lleva dos puntos ni mayúscula y tiene que encajar en tu frase en persona y tiempo: «la alcaldesa prometió unas obras “sin cortes de luz”». Si no encaja, pasa al estilo indirecto.",
          "El punto va después de las comillas de cierre; los signos de interrogación o exclamación que pertenecen a la cita, dentro. En español se usan primero las comillas angulares, después las inglesas y por último las simples: « “ ‘ ’ ” ». Si omites parte de la cita, marca el hueco con puntos suspensivos entre corchetes […]; si la fuente tiene un error y quieres conservarlo, pon [sic] detrás. Una cita no se mezcla con «que»: «dijo que “empezaremos en marzo”» es incorrecto, porque el «que» exige estilo indirecto.",
        ],
        table: {
          caption: "Tres maneras de llevar la voz ajena al texto",
          head: ["Forma", "Puntuación", "Ejemplo"],
          rows: [
            ["cita directa", "dos puntos + mayúscula", "La funcionaria aseguró: «No habrá desalojos»."],
            ["con «como señala» o «en palabras de»", "coma + mayúscula", "En palabras de doña Yolanda, «Aquí nadie quiere vivir en una postal»."],
            ["cita integrada", "sin dos puntos ni mayúscula", "Los vecinos rechazan vivir «en una postal»."],
            ["estilo indirecto", "sin comillas", "La funcionaria aseguró que no habría desalojos."],
            ["cita con omisión", "[…] en el hueco", "«Las escaleras […] llegarán hasta la cancha»."],
          ],
        },
        mistakes: [
          {
            wrong: "La funcionaria dijo que «no habrá desalojos».",
            right: "La funcionaria dijo: «No habrá desalojos».",
            why: "Con «que» se pasa al estilo indirecto; para citar literalmente, dos puntos y mayúscula.",
          },
          {
            wrong: "El líder afirmó: «La comuna no está en venta.»",
            right: "El líder afirmó: «La comuna no está en venta».",
            why: "El punto va después de las comillas de cierre.",
          },
        ],
      },
      {
        heading: "Estilo indirecto: tiempos, preguntas, peticiones y resúmenes",
        body: [
          "Con un verbo introductor en presente («sostiene», «explica»), los tiempos no cambian: «la funcionaria sostiene que las obras empiezan en marzo». Con un verbo en pasado, suelen desplazarse: «dijo que empezarían en marzo». Pero si el dato sigue vigente y tú lo presentas como actual, puedes mantener el presente o el futuro: «dijo ayer que las obras empezarán en marzo» compromete a quien escribe con que esa fecha sigue en pie.",
          "Las preguntas de sí o no se transmiten con «si»; las demás conservan el interrogativo con tilde: «preguntó cuándo empezarían las obras». «Quiso saber» y «se preguntó» evitan repetir «preguntó»; «preguntó que si…» es normal al hablar, pero en un texto cuidado se prefiere «preguntó si…». Las peticiones y órdenes llevan subjuntivo, en imperfecto si el verbo va en pasado: «pidió que se respetara el turno». Para resumir un discurso largo no encadenes «dijo que… dijo que…»: elige un verbo que interprete el acto (anunció, descartó, reclamó, advirtió de) y condensa el contenido en un sustantivo, como repasaste en la semana 12 (G188): «descartó la expropiación de viviendas».",
        ],
        table: {
          caption: "Del cabildo a la crónica",
          head: ["En el cabildo", "En la crónica"],
          rows: [
            ["«¿Habrá desalojos?»", "Una vecina preguntó si habría desalojos."],
            ["«¿Cuándo empiezan las obras?»", "Un comerciante quiso saber cuándo empezarían las obras."],
            ["«Respeten el turno, por favor».", "La moderadora pidió que se respetara el turno."],
            ["«No vamos a expropiar ninguna casa».", "La funcionaria descartó la expropiación de viviendas."],
            ["«Los buses de turistas tapan la calle».", "Los vecinos se quejaron del bloqueo de la calle por los buses de turistas."],
          ],
        },
        mistakes: [
          {
            wrong: "La moderadora pidió a los asistentes que respetaban el turno.",
            right: "La moderadora pidió a los asistentes que respetaran el turno.",
            why: "Las peticiones transmitidas llevan subjuntivo.",
          },
          {
            wrong: "Un vecino preguntó que cuando empezarían las obras.",
            right: "Un vecino preguntó cuándo empezarían las obras.",
            why: "En un texto cuidado, sin «que»; el interrogativo conserva la tilde.",
          },
        ],
        tip: "Antes de citar, pregúntate: ¿importan las palabras exactas o solo el contenido? Si importa el contenido, resume con un verbo que interprete y un sustantivo; si importan las palabras, cita poco y bien puntuado.",
      },
      {
        heading: "Cuando el verbo duda: colectivos, cantidades y sujetos compuestos",
        body: [
          "Un colectivo solo («la gente», «el público», «la comunidad», «la junta») lleva el verbo en singular, también en las oraciones que siguen: «la gente llegó temprano y se quedó hasta el final». Cuando un nombre de cantidad va seguido de «de» + plural («la mayoría de los vecinos», «la mitad de las casas», «un grupo de jóvenes», «el 60 % de los asistentes»), el verbo puede concordar con el núcleo o con el sentido: «la mayoría de los vecinos votó» y «votaron» son correctos.",
          "Dos sujetos unidos por «y» llevan plural; dos infinitivos coordinados, singular («subir y bajar cuesta»). Con «junto con» o «con» entre comas, el verbo concuerda solo con el primer sujeto: «la presidenta, junto con su equipo, presentó el plan». Cuando «ser» une un sujeto neutro o un nombre como «problema» con un atributo plural, el verbo va en plural: «el problema son los buses», «lo que piden son escaleras», «todo eran aplausos». Y «haber» y «hacer» impersonales no tienen sujeto: van siempre en singular, también en perífrasis: «hubo quejas», «puede haber retrasos», «hace tres años que se prometió».",
        ],
        table: {
          caption: "Singular, plural o las dos",
          head: ["Caso", "Concordancia", "Ejemplo"],
          rows: [
            ["colectivo solo", "singular", "La comunidad exige respuestas."],
            ["cantidad + de + plural", "singular o plural", "La mitad de los asistentes aplaudió / aplaudieron."],
            ["X, junto con Y,", "con X", "El edil, junto con dos asesores, llegó tarde."],
            ["ser + atributo plural", "plural", "Lo que faltan son baños públicos."],
            ["haber impersonal", "singular", "Hubo más de doscientas intervenciones."],
            ["hacer + tiempo", "singular", "Hace diez años que se inauguraron las escaleras."],
          ],
        },
        mistakes: [
          {
            wrong: "Hubieron muchas preguntas sobre el turismo.",
            right: "Hubo muchas preguntas sobre el turismo.",
            why: "«Haber» impersonal va en singular en la lengua cuidada.",
          },
          {
            wrong: "Pueden haber cortes de agua durante las obras.",
            right: "Puede haber cortes de agua durante las obras.",
            why: "En la perífrasis, el auxiliar también queda en singular.",
          },
        ],
      },
      {
        heading: "Sujetos pospuestos y concordancia de persona",
        body: [
          "Con «gustar», «encantar», «preocupar», con los verbos de falta o presencia («faltar», «quedar», «sobrar») y con la pasiva refleja, el sujeto suele ir detrás, y es fácil empezar en singular antes de llegar al plural. Mira lo que va detrás: «faltan dos barandas», «quedan tres tramos», «se necesitan voluntarios», «me preocupan los arriendos». Si lo que va detrás es una oración, el verbo va en singular: «me preocupa que suban los arriendos».",
          "La persona también puede variar. «Los vecinos estamos cansados» incluye a quien habla; «los vecinos están cansados» lo deja fuera: las dos son correctas, pero dicen cosas distintas. Con «uno de los que», el verbo de la relativa va normalmente en plural: «es uno de los que más trabajaron». Con «usted» y «ustedes», tercera persona: «ustedes saben», nunca «ustedes sabéis».",
        ],
        table: {
          caption: "Mira detrás del verbo",
          head: ["Verbo", "Sujeto pospuesto", "Ejemplo"],
          rows: [
            ["faltar / quedar", "plural", "Faltan dos firmas y quedan tres tramos."],
            ["se + verbo (pasiva)", "plural", "Se buscan guías del barrio."],
            ["preocupar + oración", "singular", "Me preocupa que lleguen tantos buses."],
            ["los + nombre + 1.ª persona", "incluye a quien habla", "Los jóvenes del barrio pintamos los muros."],
            ["uno de los que", "plural en la relativa", "Es una de las que más insistieron."],
          ],
        },
        examples: [
          { es: "A los comerciantes les preocupan sobre todo los horarios de los buses.", note: "El sujeto plural va detrás: «preocupan»." },
          { es: "Los vecinos de la parte alta llevamos diez años subiendo a pie.", note: "Primera persona del plural: quien habla se incluye." },
        ],
        mistakes: [
          {
            wrong: "Se vende artesanías en la parte alta.",
            right: "Se venden artesanías en la parte alta.",
            why: "En la pasiva refleja, el verbo concuerda con el sujeto plural pospuesto.",
          },
          {
            wrong: "Me preocupan que suban los arriendos.",
            right: "Me preocupa que suban los arriendos.",
            why: "El sujeto es una oración: singular.",
          },
        ],
      },
      {
        heading: "Integración: lo que vuelve de las semanas 11 a 14",
        body: [
          "Una crónica o una relatoría de una reunión pone en juego todo lo repasado desde la semana 11. Al citar y resumir, cuidas que ninguna frase admita dos lecturas (G186) y retomas sin repetir con elipsis y anáforas (G187); condensas las intervenciones en grupos nominales (G188) y aclaras con reformuladores lo que el lector podría no entender (G189); ordenas los argumentos con conectores que sustituyen, contraponen o restringen (G190) y atenúas tus valoraciones (G191); dejas el énfasis a los protagonistas (G192) y atribuyes cada dato con el verbo y la marca de distancia adecuados (G193).",
          "La tabla te sirve de mapa para la práctica integrada. Cada fila es una herramienta distinta, pero en un texto real aparecen juntas: una misma frase puede citar, atribuir y concordar a la vez.",
        ],
        table: {
          caption: "Integración: lo que vuelve de las semanas 11 a 14",
          head: ["Clase", "Recurso", "En el cabildo"],
          rows: [
            ["G186", "evitar la doble lectura", "La crítica de los vecinos a la funcionaria fue dura."],
            ["G187", "elipsis y anáfora", "Los de abajo votaron a favor; los de arriba, en contra."],
            ["G188", "nominalización", "La ampliación de las escaleras provocó el aumento del turismo."],
            ["G189", "reformulación", "Hubo un acuerdo parcial, es decir, solo sobre el horario de los buses."],
            ["G190", "contraargumentación", "No se oponen a las escaleras, sino a los buses."],
            ["G191", "atenuación", "Yo diría que el plan es, en parte, precipitado."],
            ["G192", "énfasis", "Ni siquiera había baños para los turistas."],
            ["G193", "atribución", "La secretaría reconoce que no consultó al barrio."],
          ],
        },
        examples: [
          { es: "Según la secretaría, la mayoría de los asistentes apoyó la obra; los vecinos, en cambio, sostienen que no hubo votación.", note: "Atribución, concordancia con cantidad y contraposición en una sola frase." },
          { es: "Lo que reclamaron, dicho de otro modo, fueron garantías de que nadie tendrá que irse.", note: "«Ser» con atributo plural y un reformulador explicativo." },
        ],
      },
    ],
  },
  grammar: {
    intro: "En cada frase decide primero si citas, transmites o resumes, y después mira bien quién es el sujeto antes de conjugar.",
    exercises: [
      {
        id: "c1-15-gramatica-citar",
        type: "context",
        prompt: "Lee la situación y elige la versión correcta y adecuada para la crónica.",
        items: [
          {
            context: "La funcionaria dijo exactamente: «No vamos a expropiar ninguna casa». Quieres citarla literalmente.",
            q: "¿Qué versión es correcta?",
            options: [
              "La funcionaria dijo que «no vamos a expropiar ninguna casa».",
              "La funcionaria dijo: «No vamos a expropiar ninguna casa».",
              "La funcionaria dijo que no iban a expropiar ninguna casa.",
            ],
            answer: 1,
            why: "Cita directa: dos puntos, mayúscula y punto después de las comillas; la tercera opción es estilo indirecto, no una cita literal.",
          },
          {
            context: "Una vecina preguntó en el cabildo: «¿Cuántos buses van a subir cada día?».",
            q: "¿Cómo lo transmites en un texto cuidado?",
            options: [
              "Una vecina preguntó que cuántos buses iban a subir cada día.",
              "Una vecina preguntó si cuántos buses iban a subir cada día.",
              "Una vecina quiso saber cuántos buses subirían cada día.",
            ],
            answer: 2,
            why: "Interrogativo con tilde, sin «que» ni «si», y tiempo desplazado.",
          },
          {
            context: "La moderadora pidió a la gente que hablara de una en una.",
            q: "¿Qué frase lo transmite?",
            options: [
              "La moderadora pidió que la gente hablaba de una en una.",
              "La moderadora pidió que se hablara de una en una.",
              "La moderadora pidió: que hablen de una en una.",
            ],
            answer: 1,
            why: "Petición transmitida: subjuntivo, en imperfecto tras un verbo en pasado.",
          },
          {
            context: "El concejal habló diez minutos para decir, en resumen, que no habrá ningún desalojo.",
            q: "¿Qué resumen es mejor para la crónica?",
            options: [
              "El concejal descartó cualquier desalojo.",
              "El concejal dijo que dijo que no habría desalojos.",
              "El concejal dijo: «Desalojos, no».",
            ],
            answer: 0,
            why: "Un verbo que interpreta el acto y un sustantivo condensan el discurso.",
          },
        ],
      },
      {
        id: "c1-15-gramatica-concordancia",
        type: "gap",
        prompt: "Completa con la forma correcta del verbo entre paréntesis. Mira bien cuál es el sujeto.",
        items: [
          { q: "En el cabildo ___ (haber) más de ochenta intervenciones.", answers: [["hubo"]], why: "«Haber» impersonal: singular." },
          { q: "Todavía ___ (faltar) dos tramos para llegar a la cancha.", answers: [["faltan"]], why: "El sujeto «dos tramos» va detrás: plural." },
          { q: "La presidenta de la junta, junto con dos vecinas, ___ (leer) la propuesta.", answers: [["leyó"]], why: "Con «junto con» entre comas, el verbo concuerda con el primer sujeto." },
          { q: "Lo que más molesta a la gente ___ (ser) los buses en doble fila.", answers: [["son"]], why: "«Ser» con atributo plural va en plural." },
          { q: "___ (hacer) doce años que se instalaron las primeras escaleras.", answers: [["Hace"]], why: "«Hacer» con valor temporal es impersonal." },
          { q: "La gente aplaudió y luego ___ (marcharse) en silencio.", answers: [["se marchó"]], why: "Colectivo singular: mantén el singular en la oración siguiente." },
        ],
      },
      {
        id: "c1-15-gramatica-casos",
        type: "classify",
        prompt: "Clasifica cada frase según la concordancia que admite en un texto cuidado.",
        categories: ["Solo singular", "Singular o plural", "Solo plural"],
        items: [
          { text: "La comunidad ___ (pedir) respuestas.", cat: 0, why: "Colectivo solo." },
          { text: "Mañana ___ (poder) haber retrasos en la avenida.", cat: 0, why: "«Haber» impersonal también en perífrasis: «puede haber»." },
          { text: "La mayoría de los asistentes ___ (votar) a favor.", cat: 1, why: "Cantidad + de + plural: las dos son correctas." },
          { text: "Un grupo de jóvenes ___ (pintar) el muro.", cat: 1, why: "Cantidad + de + plural." },
          { text: "El problema ___ (ser) los arriendos.", cat: 2, why: "«Ser» con atributo plural." },
          { text: "Se ___ (necesitar) guías locales.", cat: 2, why: "Pasiva refleja con sujeto plural pospuesto." },
          { text: "Me ___ (preocupar) que cierren las tiendas.", cat: 0, why: "El sujeto es una oración." },
        ],
      },
      {
        id: "c1-15-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de cita, de estilo indirecto o de concordancia. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "Hubieron quejas por el ruido de los parlantes.",
            answers: ["Hubo quejas por el ruido de los parlantes."],
            why: "«Haber» impersonal va en singular.",
          },
          {
            sentence: "La secretaria negó que el proyecto subía los arriendos.",
            answers: ["La secretaria negó que el proyecto subiera los arriendos.", "La secretaria negó que el proyecto fuera a subir los arriendos."],
            why: "«Negar que» lleva subjuntivo.",
          },
          {
            sentence: "Se alquila habitaciones con vista a la ciudad.",
            answers: ["Se alquilan habitaciones con vista a la ciudad."],
            why: "Pasiva refleja: el verbo concuerda con el sujeto plural.",
          },
          {
            sentence: "El líder comunitario dijo que «nosotros no somos una postal».",
            answers: ["El líder comunitario dijo: «Nosotros no somos una postal».", "El líder comunitario dijo que ellos no eran una postal."],
            why: "No se mezcla «que» con una cita literal: o cita directa, o estilo indirecto.",
          },
        ],
      },
      {
        id: "c1-15-gramatica-integracion",
        type: "open",
        prompt: "Reescribe cada borrador del cuaderno de la relatora según la instrucción. Hay varias respuestas posibles: compara con el modelo y con la lista.",
        items: [
          {
            prompt: "Borrador: «Doña Yolanda dijo: “¿Quién va a pagar las barandas?”. Dijo también: “Arreglen primero la quebrada”. La gente aplaudieron». Pásalo a estilo indirecto en dos frases, con un verbo que interprete el segundo acto y la concordancia corregida.",
            model: "Doña Yolanda preguntó quién pagaría las barandas y reclamó que se arreglara primero la quebrada. La gente aplaudió durante casi un minuto.",
            checklist: [
              "La pregunta conserva el interrogativo con tilde y desplaza el tiempo.",
              "La petición va en imperfecto de subjuntivo con un verbo que interpreta.",
              "El colectivo «la gente» va en singular.",
            ],
          },
          {
            prompt: "Borrador: «La secretaría dice que las escaleras traen turismo. Los vecinos dicen que el turismo trae problemas. Los problemas son el ruido y los arriendos». Reescríbelo en una o dos frases con un verbo de postura (G193), un conector que contraponga (G190), una nominalización (G188) y «ser» con atributo plural.",
            model: "La secretaría sostiene que la ampliación de las escaleras atraerá turismo; los vecinos, en cambio, temen sus efectos, y lo que más les preocupa son el ruido y la subida de los arriendos.",
            checklist: [
              "Atribuyo cada postura con un verbo preciso.",
              "Contrapongo sin negar ninguna de las dos versiones.",
              "«Ser» concuerda con el atributo plural.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de la participación vecinal y de los cambios que trae el turismo a un barrio.",
    groups: [
      {
        title: "Participación vecinal",
        items: [
          { es: "el cabildo abierto", note: "reunión pública en la que la ciudadanía discute un asunto con sus autoridades" },
          { es: "la junta de acción comunal", note: "en Colombia, organización vecinal de un barrio" },
          { es: "la relatoría", note: "documento que resume lo dicho y acordado en una reunión" },
          { es: "pedir la palabra", note: "solicitar el turno para hablar" },
          { es: "el uso de la palabra", note: "turno de intervención en una reunión" },
          { es: "el líder comunitario", note: "persona que representa y moviliza a su barrio" },
          { es: "quedar en firme", note: "quedar acordado de forma definitiva" },
        ],
      },
      {
        title: "Turismo y barrio",
        items: [
          { es: "el barrio de ladera", note: "barrio construido en la pendiente de una montaña" },
          { es: "las escaleras eléctricas", note: "escaleras mecánicas al aire libre que facilitan la subida" },
          { es: "el recorrido de grafiti", note: "visita guiada por los murales de un barrio" },
          { es: "el arriendo", note: "en Colombia y otros países, alquiler de una vivienda" },
          { es: "la gentrificación", note: "llegada de residentes o negocios con más recursos que desplaza a la población original" },
          { es: "vivir del turismo", note: "tener el turismo como fuente principal de ingresos" },
          { es: "la quebrada", note: "arroyo que baja por la montaña" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-15-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el cabildo abierto", right: "reunión pública en la que la ciudadanía discute un asunto con sus autoridades" },
          { left: "la relatoría", right: "documento que resume lo dicho y acordado en una reunión" },
          { left: "quedar en firme", right: "quedar acordado de forma definitiva" },
          { left: "la gentrificación", right: "llegada de residentes o negocios con más recursos que desplaza a la población original" },
          { left: "el barrio de ladera", right: "barrio construido en la pendiente de una montaña" },
          { left: "la quebrada", right: "arroyo que baja por la montaña" },
          { left: "pedir la palabra", right: "solicitar el turno para hablar" },
        ],
      },
      {
        id: "c1-15-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["arriendo", "recorrido de grafiti", "junta de acción comunal", "uso de la palabra", "viven del turismo"],
        items: [
          { q: "La ___ convocó el cabildo con carteles en todas las tiendas del barrio.", answers: [["junta de acción comunal"]] },
          { q: "Desde que llegaron los turistas, el ___ de una casa pequeña se ha duplicado.", answers: [["arriendo"]] },
          { q: "Cada intervención tenía tres minutos de ___, y la moderadora los cronometraba.", answers: [["uso de la palabra"]] },
          { q: "Muchos jóvenes del barrio ___: son guías, venden helados o pintan murales.", answers: [["viven del turismo"]] },
          { q: "El ___ empieza en la estación del metrocable y termina en el mirador.", answers: [["recorrido de grafiti"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Leer una cita en voz alta: el cambio de voz y las comillas que se oyen",
    explanation: [
      "Cuando lees en voz alta un texto con citas, el oyente no ve las comillas: tienes que hacerlas oír. Antes de una cita directa, haz una pausa algo más larga que la de una coma; al empezar la cita, cambia ligeramente el tono o el ritmo; al terminar, vuelve a tu voz de narrador con otra pausa. Así el oyente sabe dónde terminan las palabras del otro y empiezan las tuyas.",
      "En el estilo indirecto, en cambio, no hay cambio de voz: todo va en la entonación del narrador, y el «que» se une sin pausa al verbo. Y en las frases con sujeto pospuesto, el acento de la frase suele caer en el sujeto, al final: «faltan dos BARANDAS», «lo que piden son ESCALERAS».",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el ritmo y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "Cómo se oyen las comillas",
      head: ["Forma", "Señal en la voz", "Ejemplo"],
      rows: [
        ["cita directa", "pausa, cambio de tono, pausa", "Dijo: | «No habrá desalojos». |"],
        ["estilo indirecto", "sin pausa tras «que»", "Dijo que no habría desalojos."],
        ["sujeto pospuesto", "acento al final", "Lo que piden son escaleras."],
      ],
    },
    perceive: {
      id: "c1-15-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué oyes.",
      items: [
        {
          q: "¿La frase contiene una cita directa o estilo indirecto?",
          options: ["Cita directa: las palabras exactas.", "Estilo indirecto: el contenido."],
          answer: 1,
          why: "No hay pausa ni cambio de voz, y el tiempo está desplazado: «habría».",
          audio: "La funcionaria aseguró que no habría ningún desalojo en el barrio.",
          voice: "es-CO-m",
        },
        {
          q: "¿Dónde termina la cita?",
          options: ["Después de «postal»", "Después de «Yolanda»", "No hay cita"],
          answer: 0,
          why: "La voz cambia tras la pausa y vuelve al tono del narrador después de «postal».",
          audio: "Doña Yolanda lo dijo claro: «Aquí nadie quiere vivir en una postal». Y se sentó.",
          voice: "es-CO-f",
        },
        {
          q: "¿Qué palabra recibe el acento principal de la frase?",
          options: ["piden", "escaleras", "lo"],
          answer: 1,
          why: "El sujeto pospuesto, al final, lleva el acento.",
          audio: "Lo que piden los de arriba son escaleras, no más buses.",
          voice: "es-CO-m",
        },
        {
          q: "¿Qué forma oyes?",
          options: ["hubo quejas", "hubieron quejas", "habían quejas"],
          answer: 0,
          why: "La forma de la lengua cuidada: «hubo».",
          audio: "Hubo quejas por el ruido hasta pasada la medianoche.",
          voice: "es-VE-f",
        },
      ],
    },
    produce: [
      { text: "La secretaria respondió: «Las obras empezarán en marzo». Nadie le creyó.", tip: "Pausa antes y después de la cita, y cambia un poco el tono dentro.", voice: "es-VE-f" },
      { text: "Una vecina quiso saber cuándo pondrían las barandas.", tip: "Estilo indirecto: sin pausa tras «saber» y acento en «cuándo».", voice: "es-CO-f" },
      { text: "Todavía faltan dos tramos y quedan tres casas sin luz.", tip: "Acento en los sujetos del final: «tramos», «casas».", voice: "es-CO-m" },
      { text: "La mayoría de los asistentes votó a favor del horario nuevo.", tip: "Sin pausa entre el sujeto largo y el verbo.", voice: "es-CO-f" },
    ],
    spelling: "En español se usan primero las comillas angulares « », después las inglesas “ ” y por último las simples ‘ ’. El punto va siempre detrás de las comillas de cierre.",
  },
  listening: {
    title: "Lo que se dijo en el cabildo",
    context: "Al día siguiente de un cabildo abierto sobre la ampliación de unas escaleras eléctricas en un barrio de ladera de Medellín, el programa de la radio comunitaria resume lo que se dijo. Conduce Andrés; participan Yolanda, líder de la junta de acción comunal, y Catalina, funcionaria de la secretaría de infraestructura. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "a", name: "Andrés", voice: "es-CO-m", role: "Locutor de la radio comunitaria" },
      { id: "y", name: "Yolanda", voice: "es-CO-f", role: "Líder de la junta de acción comunal" },
      { id: "c", name: "Catalina", voice: "es-VE-f", role: "Funcionaria de infraestructura" },
    ],
    script: [
      { speaker: "a", text: "Buenos días, comunidad. Ayer hubo cabildo abierto en la cancha y fueron más de trescientas personas. Para quien no pudo ir, resumimos. Catalina, usted abrió diciendo que las escaleras llegarán hasta la parte alta. ¿Lo confirma?" },
      { speaker: "c", text: "Lo confirmo. La ampliación tiene cuatro tramos nuevos y las obras empiezan en marzo. Y repito lo que dije ayer: no habrá ningún desalojo. Ninguno." },
      { speaker: "a", text: "Yolanda, usted pidió la palabra justo después. ¿Qué fue lo que dijo?" },
      { speaker: "y", text: "Dije, y lo sostengo, que aquí nadie se opone a las escaleras. Lo que pedimos los vecinos no son más turistas, sino que las obras sirvan primero a quien vive aquí. Hace quince años que subimos a pie con el mercado a la espalda." },
      { speaker: "a", text: "Hubo también muchas preguntas sobre los arriendos. La mayoría de los asistentes que hablaron mencionaron ese tema." },
      { speaker: "y", text: "Claro. Desde que llegaron los recorridos de grafiti, el arriendo de una pieza se ha duplicado. A mí me preocupa que los jóvenes tengan que irse del barrio que ellos mismos pintaron." },
      { speaker: "c", text: "Entiendo la preocupación, y en parte es razonable. Lo que pasa es que la subida de los arriendos no depende de la secretaría. Nosotros hacemos escaleras; los precios, no." },
      { speaker: "y", text: "Pues ni siquiera se ha hecho un estudio de lo que va a pasar con los precios. Eso sí que lo puede pedir la secretaría." },
      { speaker: "a", text: "Una señora de la parte alta preguntó si se iban a poner barandas y baños públicos. ¿Qué se respondió?" },
      { speaker: "c", text: "Que las barandas están en el proyecto, es decir, se instalan con los tramos nuevos. Los baños, mejor dicho, uno solo, están previstos en el mirador, pero todavía faltan dos permisos." },
      { speaker: "a", text: "¿Y qué quedó en firme al final?" },
      { speaker: "y", text: "Quedaron en firme tres cosas: la junta, junto con la secretaría, revisará el horario de los buses de turistas; se hará una mesa sobre arriendos; y la relatoría del cabildo se publicará en esta emisora. Yo diría que es un comienzo." },
      { speaker: "c", text: "Y la secretaría se compromete a volver en marzo, antes de empezar las obras, para rendir cuentas. Eso lo dije ayer y lo repito hoy." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha el programa completo sin abrir la transcripción. ¿Cuál es la postura de cada parte y qué se acordó?",
        exercise: {
          id: "c1-15-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la idea general.",
          items: [
            {
              q: "¿Qué postura tiene la junta sobre las escaleras?",
              options: [
                "Se opone a la obra porque atraerá turistas.",
                "No se opone, pero pide que la obra sirva primero a los vecinos.",
                "Apoya la obra sin condiciones.",
              ],
              answer: 1,
              why: "«Aquí nadie se opone a las escaleras. Lo que pedimos… no son más turistas, sino que las obras sirvan primero a quien vive aquí.»",
            },
            {
              q: "¿Cómo terminó el cabildo?",
              options: [
                "Sin ningún acuerdo y con la junta enfadada.",
                "Con la cancelación de la obra.",
                "Con tres acuerdos concretos y el compromiso de volver en marzo.",
              ],
              answer: 2,
              why: "Yolanda enumera tres acuerdos y Catalina promete rendir cuentas en marzo.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cifras, preguntas y compromisos.",
        exercise: {
          id: "c1-15-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué dice la funcionaria sobre los arriendos?",
              options: [
                "Que su subida no depende de la secretaría.",
                "Que la secretaría los congelará durante las obras.",
                "Que no han subido.",
              ],
              answer: 0,
              why: "«La subida de los arriendos no depende de la secretaría.»",
            },
            {
              q: "¿Qué corrige Catalina sobre los baños?",
              options: [
                "Que no habrá ninguno.",
                "Que habrá uno solo, en el mirador, y faltan permisos.",
                "Que se instalarán en cada tramo.",
              ],
              answer: 1,
              why: "«Los baños, mejor dicho, uno solo, están previstos en el mirador.»",
            },
            {
              q: "¿Cuál de estos acuerdos quedó en firme?",
              options: [
                "Prohibir los recorridos de grafiti.",
                "Bajar los arriendos de la parte alta.",
                "Crear una mesa sobre arriendos.",
              ],
              answer: 2,
              why: "Es el segundo de los tres acuerdos.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en qué recurso usa cada frase. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-15-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase del programa con el recurso que pone en juego.",
          pairs: [
            { left: "Ayer hubo cabildo abierto en la cancha", right: "«haber» impersonal en singular" },
            { left: "Lo que pedimos los vecinos no son más turistas", right: "«ser» con atributo plural y primera persona inclusiva" },
            { left: "La mayoría de los asistentes que hablaron mencionaron ese tema", right: "cantidad + de + plural con verbo en plural" },
            { left: "Una señora de la parte alta preguntó si se iban a poner barandas", right: "pregunta transmitida con «si»" },
            { left: "la junta, junto con la secretaría, revisará el horario", right: "«junto con» entre comas y verbo en singular" },
            { left: "Los baños, mejor dicho, uno solo", right: "rectificación de la semana 12" },
          ],
          why: "El programa transmite lo dicho con estilo indirecto, concordancias especiales y recursos de las semanas 11 a 14.",
        },
      },
    ],
  },
  reading: {
    title: "Escaleras para quién",
    genre: "Crónica de un periódico de barrio",
    frame: "Crónica publicada en el periódico comunitario de un barrio de ladera de Medellín. El barrio, las personas y las cifras son ficticios.",
    text: [
      "El sábado, a las nueve de la mañana, la cancha del barrio ya estaba llena. Hacía meses que no se veía tanta gente junta: según la junta de acción comunal, asistieron más de trescientas personas, y la mitad de ellas se quedaron de pie porque no había sillas para todos. El motivo era el cabildo abierto convocado para discutir la ampliación de las escaleras eléctricas, que desde hace doce años suben a los vecinos desde la avenida hasta la mitad de la ladera y que, desde hace cinco, también suben a miles de turistas.",
      "Abrió la sesión Catalina Restrepo, de la secretaría de infraestructura. Explicó que la ampliación tendrá cuatro tramos nuevos y llegará hasta la parte alta, donde viven unas ochocientas familias, y anunció que las obras empezarán en marzo. Ante el murmullo de la cancha, añadió una frase que muchos anotaron: «No habrá ningún desalojo. Ninguno». Según la funcionaria, el proyecto cuenta ya con la financiación completa, aunque todavía faltan dos permisos ambientales por la cercanía de la quebrada.",
      "La primera en pedir la palabra fue Yolanda Ospina, presidenta de la junta, que lleva cuarenta años en el barrio. No habló contra las escaleras, sino de lo que vino con ellas. «Aquí nadie quiere vivir en una postal», dijo, y la cancha aplaudió. Recordó que hace quince años que los de la parte alta suben a pie, con el mercado a la espalda, y que lo que reclaman no son más turistas, sino una obra pensada primero para quienes viven allí. También advirtió de un efecto que, a su juicio, nadie ha medido: la subida de los arriendos, que en algunas calles se han duplicado desde que empezaron los recorridos de grafiti.",
      "Las intervenciones siguientes repitieron ese tema con variaciones. Un grupo de jóvenes guías, que viven precisamente del turismo, defendió la obra, aunque pidió que los recorridos se ordenaran para no bloquear la calle principal. Una vecina de la parte alta quiso saber si habría barandas y baños públicos; otra preguntó, con cierta ironía, si los buses de turistas también iban a subir por las escaleras. La mayoría de los asistentes que intervinieron coincidió en lo esencial: el problema no son las escaleras, sino que se hagan sin escuchar al barrio.",
      "La funcionaria respondió con prudencia. Reconoció que la secretaría no había hecho ningún estudio sobre el efecto de la obra en los precios, aunque negó que la ampliación fuera a provocar por sí sola la expulsión de vecinos. «La subida de los arriendos no depende de nosotros», explicó, y matizó que, en todo caso, la secretaría podía pedir ese estudio a la oficina de planeación. Sobre los baños, rectificó una cifra que había circulado: no serán tres, sino uno solo, en el mirador, y su construcción depende de los permisos pendientes.",
      "Al mediodía quedaron en firme tres acuerdos. La junta, junto con la secretaría, revisará el horario y las paradas de los buses de turistas; se creará una mesa sobre arriendos, con participación de propietarios e inquilinos; y la relatoría completa del cabildo se leerá en la emisora comunitaria y se publicará en este periódico. La secretaría se comprometió, además, a volver en marzo para rendir cuentas antes de empezar las obras.",
      "No es poco, aunque tampoco es todo. Quedan preguntas sin respuesta, y los vecinos de la parte alta lo saben mejor que nadie. Pero el sábado hubo algo que en este barrio no siempre ha habido: una autoridad que escuchó durante tres horas sin levantarse de la silla. Doña Yolanda lo resumió al salir, con una mezcla de cansancio y esperanza: «Yo diría que es un comienzo. Lo que falta ahora son los hechos».",
    ],
    glossary: [
      { es: "pieza", note: "en Colombia, habitación que se alquila" },
      { es: "planeación", note: "en Colombia, oficina municipal de planificación urbana" },
      { es: "inquilino", note: "persona que vive en una vivienda alquilada" },
    ],
    tasks: [
      {
        id: "c1-15-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la crónica.",
        items: [
          {
            q: "¿Qué temor principal expresan los vecinos?",
            options: [
              "Que las escaleras no lleguen a la parte alta.",
              "Que la obra traiga más turismo y suba los arriendos hasta expulsarlos.",
              "Que se pierdan los murales del barrio.",
            ],
            answer: 1,
            why: "La subida de los arriendos aparece en casi todas las intervenciones.",
          },
          {
            q: "¿Qué reconoció la funcionaria?",
            options: [
              "Que la secretaría no había estudiado el efecto de la obra en los precios.",
              "Que habría algunos desalojos inevitables.",
              "Que la obra no tenía financiación.",
            ],
            answer: 0,
            why: "Lo dice el quinto párrafo.",
          },
          {
            q: "¿Cómo valora el cronista el resultado del cabildo?",
            options: [
              "Como un fracaso de la junta.",
              "Como una victoria completa de los vecinos.",
              "Como un avance limitado pero real.",
            ],
            answer: 2,
            why: "«No es poco, aunque tampoco es todo.»",
          },
        ],
      },
      {
        id: "c1-15-lectura-recursos",
        type: "classify",
        prompt: "Clasifica cada fragmento de la crónica según el recurso que destaca.",
        categories: ["Cita o estilo indirecto (G194)", "Concordancia especial (G195)", "Recurso de las semanas 11 a 14"],
        items: [
          { text: "añadió una frase que muchos anotaron: «No habrá ningún desalojo. Ninguno».", cat: 0 },
          { text: "Una vecina de la parte alta quiso saber si habría barandas y baños públicos", cat: 0 },
          { text: "la mitad de ellas se quedaron de pie", cat: 1 },
          { text: "el problema no son las escaleras", cat: 1 },
          { text: "No habló contra las escaleras, sino de lo que vino con ellas.", cat: 2 },
          { text: "Reconoció que la secretaría no había hecho ningún estudio", cat: 2 },
        ],
      },
      {
        id: "c1-15-lectura-evaluacion",
        type: "open",
        prompt: "Analiza la crónica como texto integrado.",
        items: [
          {
            prompt: "El cronista mezcla citas directas, estilo indirecto y resúmenes. Elige un ejemplo de cada forma y explica en 80–100 palabras por qué crees que eligió esa forma en cada caso.",
            model: "La frase de la funcionaria «No habrá ningún desalojo. Ninguno» va en cita directa porque es una promesa y sus palabras exactas comprometen a la secretaría. La pregunta de la vecina va en estilo indirecto («quiso saber si habría barandas»), porque importa el contenido, no la forma. Y la intervención de la funcionaria sobre los precios se resume con verbos que interpretan, «reconoció» y «negó que», que muestran su postura sin reproducir todo lo que dijo. Así el cronista reserva las comillas para lo que el lector debe poder recordar y reclamar.",
            checklist: [
              "Cito literalmente un ejemplo de cada forma.",
              "Explico la elección del cronista, no solo la forma.",
              "Relaciono la cita directa con lo que compromete.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la crónica cita, resume y concuerda, y dónde reaparecen los recursos de las semanas 11 a 14.",
      items: [
        { quote: "la mitad de ellas se quedaron de pie porque no había sillas para todos", note: "Cantidad + de + plural con verbo en plural, y «haber» impersonal en singular." },
        { quote: "añadió una frase que muchos anotaron: «No habrá ningún desalojo. Ninguno».", note: "Cita directa tras dos puntos, con mayúscula y punto final fuera de las comillas." },
        { quote: "lo que reclaman no son más turistas, sino una obra pensada primero para quienes viven allí", note: "«Ser» con atributo plural y «no…, sino» de la semana 13." },
        { quote: "Una vecina de la parte alta quiso saber si habría barandas y baños públicos", note: "Pregunta transmitida con «si» y tiempo desplazado." },
        { quote: "La mayoría de los asistentes que intervinieron coincidió en lo esencial", note: "La otra opción válida: verbo en singular con el núcleo «mayoría»." },
        { quote: "aunque negó que la ampliación fuera a provocar por sí sola la expulsión de vecinos", note: "Resumen con un verbo de postura y una nominalización (semanas 12 y 14)." },
        { quote: "La junta, junto con la secretaría, revisará el horario", note: "Con «junto con» entre comas, el verbo concuerda con «la junta»." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención, relación de formas y escritura guiada. Termina recuperando cada una de las clases de las semanas 11 a 14.",
    exercises: [
      {
        id: "c1-15-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de la relatoría del cabildo.",
        items: [
          {
            words: ["Lo", "que", "piden", "los", "vecinos", "son", "garantías."],
            why: "«Ser» concuerda con el atributo plural.",
          },
          {
            words: ["La", "presidenta", "pidió", "que", "se", "publicara", "la", "relatoría."],
            why: "Petición transmitida con imperfecto de subjuntivo.",
          },
          {
            words: ["Todavía", "faltan", "dos", "permisos", "para", "los", "baños."],
            why: "Sujeto plural pospuesto.",
          },
        ],
      },
      {
        id: "c1-15-integracion",
        type: "context",
        prompt: "Elige la frase que corresponde a la intención descrita.",
        items: [
          {
            context: "En la relatoría quieres dejar claro que fueron los vecinos quienes criticaron a la funcionaria, y no al revés.",
            q: "¿Qué frase no deja dudas (semana 11)?",
            options: [
              "La crítica de la funcionaria fue dura.",
              "La crítica de los vecinos a la funcionaria fue dura.",
              "La crítica de la funcionaria de los vecinos fue dura.",
            ],
            answer: 1,
            why: "«De» para quien critica y «a» para quien recibe la crítica.",
          },
          {
            context: "Quieres resumir una larga intervención de la funcionaria en la que, al final, rechazó que hubiera desalojos.",
            q: "¿Qué frase es la más adecuada para la relatoría?",
            options: [
              "La funcionaria descartó cualquier desalojo.",
              "La funcionaria dijo que dijo que no.",
              "La funcionaria habló y habló de desalojos.",
            ],
            answer: 0,
            why: "Un verbo que interpreta el acto y un sustantivo condensan el discurso.",
          },
          {
            context: "Escribes la valoración final y quieres criticar la falta de estudios sin sonar agresivo (semana 13).",
            q: "¿Qué frase eliges?",
            options: [
              "La secretaría no ha hecho nada.",
              "Yo diría que, hasta cierto punto, faltan estudios sobre los precios.",
              "Perdón, no sé, igual, digamos, los estudios, ¿no?",
            ],
            answer: 1,
            why: "Distancia y acotación en dosis justa.",
          },
        ],
      },
      {
        id: "c1-15-mapa",
        type: "match",
        prompt: "Relaciona cada recurso con la clase de las semanas 11 a 15 en la que lo repasaste.",
        pairs: [
          { left: "los de abajo, a favor; los de arriba, en contra", right: "elipsis verbal (G187)" },
          { left: "la ampliación de las escaleras", right: "nominalización (G188)" },
          { left: "mejor dicho, uno solo", right: "reformulación (G189)" },
          { left: "ni siquiera se ha hecho un estudio", right: "énfasis de escala (G192)" },
          { left: "negó que la obra fuera a expulsar a nadie", right: "atribución con verbo de postura (G193)" },
          { left: "quiso saber si habría barandas", right: "pregunta en estilo indirecto (G194)" },
          { left: "hubo más de ochenta intervenciones", right: "haber impersonal (G195)" },
        ],
      },
      {
        id: "c1-15-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Recuerda una reunión reciente (de trabajo, de vecinos, de familia). Escribe 60–80 palabras que cuenten lo que se dijo con una cita directa bien puntuada, una pregunta en estilo indirecto, una petición con subjuntivo y un resumen con un verbo que interprete.",
            model: "En la reunión del lunes, la directora anunció la reorganización de los turnos. Un compañero quiso saber si afectaría a quienes trabajan por la tarde, y ella respondió: «Nadie perderá horas». Después pidió que enviáramos nuestras preferencias antes del viernes. Al final, el equipo de sistemas reclamó más personal, aunque la directora descartó nuevas contrataciones este año.",
            checklist: [
              "La cita directa va tras dos puntos, con mayúscula y el punto fuera de las comillas.",
              "La pregunta va con «si» o con el interrogativo con tilde.",
              "La petición va en subjuntivo y el resumen usa un verbo que interpreta.",
            ],
          },
          {
            prompt: "Escribe 50–70 palabras sobre la asistencia y los resultados de esa reunión con al menos cuatro concordancias especiales: un colectivo, una cantidad + de + plural, «haber» impersonal y «ser» con atributo plural o un sujeto pospuesto.",
            model: "Asistió casi todo el equipo, aunque la mitad de los compañeros llegaron tarde por el tráfico. Hubo pocas preguntas y ninguna protesta. Lo que más preocupaba a la gente eran los turnos de verano, y todavía faltan dos decisiones sobre ese tema. El equipo, en general, salió tranquilo.",
            checklist: [
              "Uso al menos cuatro casos de concordancia especial.",
              "«Haber» va en singular.",
              "El colectivo mantiene el singular en las frases siguientes.",
            ],
          },
        ],
      },
      {
        id: "c1-15-recuperacion",
        type: "open",
        prompt: "Recupera las clases de las semanas 11 a 14 con los estímulos del cabildo. No hace falta volver a las lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de G186 y G187 (ambigüedad y elipsis). Estímulo: «Los vecinos y los guías jóvenes apoyaron la obra. Los vecinos apoyaron la obra con condiciones. Los guías apoyaron la obra sin condiciones». Escribe una sola frase sin ambigüedad sobre quién es joven y con una elipsis verbal.",
            model: "Todos los guías, que son jóvenes, apoyaron la obra sin condiciones; los vecinos, con condiciones.",
            checklist: [
              "Queda claro a quién afecta «jóvenes».",
              "Uso la coma para marcar el verbo omitido.",
            ],
          },
          {
            prompt: "Recuperación de G188 y G189 (nominalización y reformulación). Estímulo: «Como subieron los arriendos, muchas familias se fueron». Escríbelo en estilo nominal de informe y después aclara el sentido para la radio con un reformulador.",
            model: "Informe: «La subida de los arriendos provocó la salida de numerosas familias». Radio: «Es decir, mucha gente tuvo que irse porque ya no podía pagar la casa».",
            checklist: [
              "La versión de informe usa dos nominalizaciones y un verbo de enlace.",
              "La versión oral usa un reformulador explicativo.",
            ],
          },
          {
            prompt: "Recuperación de G190 y G191 (contraargumentación y atenuación). Estímulo: un guía joven dice que los vecinos están contra el turismo. Corrígelo con «no…, sino que…» y añade una crítica atenuada a los recorridos.",
            model: "Los vecinos no están contra el turismo, sino que piden que se ordene. Yo diría que los recorridos, hasta cierto punto, bloquean la calle principal a ciertas horas.",
            checklist: [
              "Uso «sino que» con verbo conjugado.",
              "La crítica lleva uno o dos atenuadores, no más.",
            ],
          },
          {
            prompt: "Recuperación de G192 y G193 (énfasis y atribución). Estímulo: la funcionaria admitió que no hay estudio de precios; doña Yolanda está indignada. Escribe una frase que atribuya el dato con el verbo adecuado y una cita enfática de doña Yolanda.",
            model: "La funcionaria reconoció que no existe ningún estudio sobre los precios. Doña Yolanda no lo podía creer: «¡Ni siquiera se han preguntado qué va a pasar con nosotros!».",
            checklist: [
              "Uso «reconocer» con indicativo.",
              "La cita enfática usa un recurso de escala y está bien puntuada.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la relatoría (260–360 palabras) de una reunión real o inventada en la que participaron varias partes: una asamblea de vecinos, un claustro, una reunión de empresa, un consejo de estudiantes. Cuenta quién intervino y qué dijo, combinando citas directas, estilo indirecto y resúmenes, recoge los acuerdos que quedaron en firme e integra al menos cuatro recursos de las semanas 11 a 14.",
    context: "La relatoría se leerá en voz alta al comienzo de la próxima reunión y se archivará como registro oficial. La leerán personas que estuvieron y que no estuvieron: necesitan saber qué dijo cada parte sin que la relatora tome partido, y qué se acordó exactamente.",
    steps: [
      "Haz una lista de las intervenciones y decide para cada una si la citarás literalmente, la transmitirás en estilo indirecto o la resumirás con un verbo que interprete.",
      "Señala en tus notas los sujetos difíciles (colectivos, cantidades, sujetos pospuestos, «haber») y decide la concordancia antes de redactar.",
      "Redacta al menos tres párrafos: la convocatoria y la asistencia, las intervenciones y los acuerdos.",
      "Revisa la relatoría: corrige la puntuación de las citas, el modo de las peticiones transmitidas y cada concordancia, y comprueba que ninguna frase admite dos lecturas.",
    ],
    useLanguage: [
      "dijo: «…»; en palabras de X, «…»",
      "preguntó si…, quiso saber cuándo…, pidió que + subjuntivo",
      "anunció, reconoció, descartó, reclamó, advirtió de",
      "la mayoría de los asistentes votó / votaron; hubo…; lo que piden son…",
      "es decir, mejor dicho, en cambio, no…, sino que…",
      "yo diría que, según, ni siquiera",
    ],
    model: [
      "El jueves 14 de noviembre se reunió en el salón de actos el consejo de estudiantes de la facultad para discutir el nuevo horario de la biblioteca. Asistieron cuarenta y dos representantes, es decir, casi todos los grupos, y la mayoría de ellos llegaron con propuestas por escrito. Hubo también tres invitados: la directora de la biblioteca, el vicedecano y una representante del personal de limpieza, cuya presencia había pedido el propio consejo.",
      "Abrió la sesión la directora, que anunció la reducción del horario nocturno a partir de enero por falta de presupuesto. Ante las protestas, añadió: «No es una decisión que me guste, pero no tengo personal». El delegado de Ingeniería quiso saber si la sala de estudio podría quedarse abierta sin préstamo, y la representante del personal de limpieza advirtió de que eso supondría turnos que hoy no existen. Varios estudiantes pidieron que se estudiara un horario ampliado solo en épocas de exámenes. El vicedecano reconoció que el presupuesto de la biblioteca no se había revisado en seis años, aunque descartó un aumento para este curso. En palabras de una estudiante de primero, «lo que necesitamos no son más libros, sino un sitio donde estudiar por la noche».",
      "Al final quedaron en firme dos acuerdos. La biblioteca, junto con el consejo, elaborará antes de diciembre una propuesta de horario ampliado para las semanas de exámenes, y el decanato estudiará la contratación temporal de dos personas para esas semanas. Lo que queda pendiente son los fines de semana, sobre los que no hubo acuerdo. La próxima reunión será el 12 de diciembre, y en ella se leerá esta relatoría.",
    ],
    checklist: [
      "Combino citas directas bien puntuadas, estilo indirecto y resúmenes con verbos que interpretan.",
      "Las preguntas y peticiones transmitidas tienen la forma y el modo correctos.",
      "Cada concordancia especial (colectivo, cantidad, haber, ser, sujeto pospuesto) es correcta.",
      "Integro al menos cuatro recursos de las semanas 11 a 14 y ninguna frase admite dos lecturas.",
      "La relatoría tiene al menos tres párrafos y recoge con precisión los acuerdos.",
    ],
    words: [260, 360],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Informar a una asamblea de lo que pasó en una reunión",
        prompt: "Habla durante cinco minutos ante una asamblea que no asistió a la reunión de tu relatoría (o al cabildo del barrio). Cuenta quién intervino y qué dijo, lee en voz alta al menos dos citas literales haciendo oír las comillas, transmite una pregunta y una petición, resume los acuerdos y termina con una valoración atenuada, claramente separada de la información.",
        prep: [
          "Escribe en tarjetas tres intervenciones: una para citar, una para transmitir y una para resumir.",
          "Marca en las citas dónde harás las pausas y el cambio de voz.",
          "Prepara los acuerdos con «quedaron en firme…» y revisa las concordancias.",
          "Anota tu valoración final con «yo diría que» o «hasta cierto punto».",
        ],
        seconds: 300,
        model: "Ayer hubo cabildo en la cancha y asistieron más de trescientas personas. Abrió la funcionaria, que anunció que las obras empiezan en marzo y dijo, cito: «No habrá ningún desalojo». Doña Yolanda pidió la palabra y aclaró que el barrio no está contra las escaleras, sino que pide que sirvan primero a los vecinos. Una señora quiso saber si habría barandas, y la funcionaria respondió que sí, con los tramos nuevos. Lo que más se repitió fueron los arriendos: la funcionaria reconoció que no hay estudio. Quedaron en firme tres acuerdos. Yo diría que es, hasta cierto punto, un buen comienzo.",
        selfCheck: [
          "Se oye dónde empiezan y terminan las citas.",
          "Transmito preguntas y peticiones con la forma y el modo correctos.",
          "Las concordancias especiales son correctas también al hablar.",
          "Separo la información de mi valoración, que va atenuada.",
        ],
      },
      {
        title: "Corregir una versión equivocada de lo que se dijo",
        prompt: "Alguien que no estuvo en la reunión te dice: «Me contaron que la funcionaria dijo que iban a echar a la gente de la parte alta». Pregúntale quién se lo contó, corrige la información citando lo que se dijo de verdad y explica qué es lo que sí preocupa a los vecinos.",
        prep: [
          "Prepara una pregunta sobre la fuente con el «que» de eco o con «¿según quién?».",
          "Ten a mano la cita exacta de la funcionaria y una frase con «no…, sino que…».",
        ],
        seconds: 150,
        model: "¿Que dijo que iban a echar a la gente? ¿Quién te contó eso? Yo estuve allí, y lo que dijo fue justo lo contrario: «No habrá ningún desalojo». Otra cosa es lo que preocupa a los vecinos: no es que los vayan a echar, sino que suban tanto los arriendos que tengan que irse. Eso sí que no lo resolvió nadie.",
        selfCheck: [
          "Pregunto por la fuente antes de corregir.",
          "Cito con precisión y separo la cita de mi comentario.",
          "Corrijo con «no…, sino que…» o «no es que…, sino que…».",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu relatoría y una lista de las concordancias que te hicieron dudar.",
    cards: [
      {
        move: "Transmite",
        task: "Cuenta a tu profesor una conversación reciente con una cita directa, una pregunta y una petición en estilo indirecto; tu profesor comprueba los tiempos y el modo.",
        phrases: ["Me dijo: «…»", "Me preguntó si…, me pidió que…"],
      },
      {
        move: "Concuerda",
        task: "Lee a tu profesor cinco frases tuyas con sujetos difíciles (colectivos, cantidades, haber, sujetos pospuestos) y pídele que te diga cuáles admiten dos concordancias.",
        phrases: ["¿Aquí vale singular y plural?", "¿Hubo o hubieron?"],
      },
      {
        move: "Integra",
        task: "Resume en dos minutos una noticia usando un recurso de cada semana del bloque (11 a 15); tu profesor marca cada uno.",
        phrases: ["Según…, es decir…", "No…, sino que…; ni siquiera…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale a tu profesor si en su variedad se oye «habían muchas personas» y cómo lo valora en un texto formal.",
        phrases: ["¿En tu país se dice «habían»?", "¿Lo corregirías en un examen?"],
      },
    ],
    bring: "Tu relatoría revisada, la lista de concordancias dudosas y, si quieres, la grabación del informe a la asamblea.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué cita está bien puntuada?",
        options: [
          "La concejala afirmó que: «Habrá consulta».",
          "La concejala afirmó: «Habrá consulta».",
          "La concejala afirmó: «habrá consulta.»",
        ],
        answer: 1,
        why: "Dos puntos, mayúscula y punto después de las comillas.",
      },
      {
        type: "choice",
        q: "¿Qué frase es incorrecta en la lengua cuidada?",
        options: [
          "Pueden haber cambios en el proyecto.",
          "La mitad de los vecinos firmaron la carta.",
          "Lo que faltan son baños.",
        ],
        answer: 0,
        why: "«Haber» impersonal, también en perífrasis: «puede haber».",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué transmite la frase?",
        options: [
          "Una afirmación de la junta.",
          "Una pregunta de la junta.",
          "Una petición de la junta.",
        ],
        answer: 2,
        why: "«Pidió que se publicara»: petición con imperfecto de subjuntivo.",
        audio: "La junta pidió que se publicara la relatoría en la emisora del barrio.",
        voice: "es-CO-f",
      },
      {
        type: "gap",
        q: "Un vecino preguntó ___ los buses podrían subir de noche.",
        answers: [["si"]],
        hint: "Pregunta de sí o no transmitida en un texto cuidado: una sola palabra, sin «que».",
        why: "Las preguntas de sí o no se transmiten con «si».",
      },
      {
        type: "gap",
        q: "En la reunión ___ (haber) más preguntas que respuestas.",
        answers: [["hubo", "había"]],
        hint: "Verbo impersonal: no concuerda con «preguntas», va siempre en singular.",
        why: "«Haber» impersonal en singular.",
      },
      {
        type: "gap",
        q: "Le pedimos que no ___ (cortar) el agua durante las obras.",
        answers: [["corte", "cortara", "cortase"]],
        hint: "Petición transmitida: piensa en el modo que pide «pedir que».",
        why: "Las peticiones transmitidas llevan subjuntivo.",
      },
      {
        type: "error",
        sentence: "El alcalde, junto con sus asesores, visitaron el barrio.",
        answers: ["El alcalde, junto con sus asesores, visitó el barrio."],
        why: "Con «junto con» entre comas, el verbo concuerda con el primer sujeto.",
      },
      {
        type: "error",
        sentence: "Se arreglará las barandas antes de marzo.",
        answers: ["Se arreglarán las barandas antes de marzo."],
        why: "Pasiva refleja: el verbo concuerda con «las barandas».",
      },
      {
        type: "error",
        sentence: "La secretaría no niega las escaleras, pero las amplía.",
        answers: ["La secretaría no niega las escaleras, sino que las amplía."],
        why: "Recuperación de G190: tras una negación, para sustituir con verbo conjugado, «sino que».",
      },
      {
        type: "order",
        words: ["El", "problema", "son", "los", "buses", "en", "doble", "fila."],
        why: "«Ser» con atributo plural va en plural.",
      },
      {
        type: "open",
        prompt: "Escribe en 80–100 palabras el resumen de una reunión breve (real o inventada) con una cita directa, una pregunta en estilo indirecto, una concordancia especial y dos recursos de las semanas 11 a 14 (por ejemplo, un reformulador y un verbo de postura).",
        model: "El martes se reunió la comunidad de propietarios para hablar del ascensor. Asistió la mayoría de los vecinos, aunque hubo varias ausencias. El administrador reconoció que la reparación costará más de lo previsto, es decir, unos tres mil euros más. Una vecina del quinto quiso saber si se podría pagar a plazos, y él respondió: «Lo consultaré con el banco». Lo que más preocupa ahora son los vecinos mayores, que no pueden subir a pie. La próxima reunión será en dos semanas.",
        checklist: [
          "La cita directa y la pregunta transmitida están bien construidas.",
          "Incluyo al menos una concordancia especial correcta.",
          "Uso al menos dos recursos de las semanas 11 a 14.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Cito literalmente con la puntuación correcta e integro fragmentos que encajan en mi frase.",
      "Transmito afirmaciones, preguntas y peticiones en estilo indirecto, y resumo con verbos que interpretan.",
      "Concuerdo el verbo con colectivos, cantidades, sujetos coordinados, «ser», «haber», «hacer» y sujetos pospuestos.",
      "Integro en un texto la desambiguación, la elipsis, la nominalización, la reformulación, la contraargumentación, la atenuación, el énfasis y la atribución de las semanas 11 a 14.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Singular, plural o las dos» y escribe un ejemplo propio de cada fila.",
      "Dentro de una semana, toma una noticia con citas y conviértela en estilo indirecto, y una en estilo indirecto, en cita directa.",
      "En la próxima clase, lee tu relatoría en voz alta haciendo oír las comillas y pide a tu profesor que marque los recursos de las semanas 11 a 14 que reconozca.",
    ],
  },
  related: [
    { path: "/gramatica/citas-indirectas-y-distanciamiento-en-textos", label: "Clase: Citas indirectas y distanciamiento en textos" },
    { path: "/gramatica/concordancia-especial-y-sujetos-pospuestos", label: "Clase: Concordancia especial y sujetos pospuestos" },
  ],
};
