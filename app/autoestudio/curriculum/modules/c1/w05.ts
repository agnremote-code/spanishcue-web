import type { Module } from "../../types";

/**
 * C1 · semana 5 · checkpoint · Autoestudio espejo de G175 (aspecto y
 * perífrasis) y G176 (valores interpretativos del gerundio y participio), con
 * integración de G167–G174. Repaso autónomo con el taller ficticio de un artista
 * fallero de Valencia en las semanas previas a la plantà. Audio mediante
 * síntesis; sin acreditación regional.
 */
export const c1w05: Module = {
  id: "c1-05",
  level: "c1",
  week: 5,
  kind: "checkpoint",
  title: "Contrarreloj en el taller: la acción vista por dentro",
  subtitle: "Checkpoint de las semanas 1 a 5: perífrasis aspectuales, valores del gerundio y del participio, y todo lo repasado desde la semana 1",
  stop: {
    place: "Valencia",
    country: "España",
  },
  minutes: 150,
  newObjectives: [
    "c1.gram.g175",
    "c1.gram.g176",
    "c1.voc.w05-taller-fallero",
    "c1.pron.w05-gerundio-encliticos",
    "c1.lis.w05-taller-fallas",
    "c1.read.w05-reportaje-taller",
    "c1.wri.w05-cronica-proceso",
    "c1.spk.w05-balance-proyecto",
    "c1.fun.w05-informar-progreso",
    "c1.disc.w05-integrar-perspectivas",
    "c1.rev.w05-semanas-1-4",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo contar un proyecto largo mostrando cada acción por dentro (en avance, en una fase, repetida o ya disponible), interpretar y usar bien el gerundio y el participio, e integrar lo repasado en las semanas 1 a 4.",
    steps: [
      "Repasa en la teoría las perífrasis por perspectivas, los valores del gerundio y del participio y la tabla de integración de las semanas 1 a 4.",
      "Practica con las frases de un taller fallero de Valencia que va contrarreloj hacia la plantà.",
      "Escucha la conversación del equipo y lee el reportaje sobre el taller.",
      "Escribe una crónica del proceso, revísala y presenta en voz alta el balance de un proyecto tuyo.",
    ],
  },
  theory: {
    intro: "Esta semana cierra el primer bloque de C1. Repasas las dos clases nuevas, sobre cómo se muestra una acción por dentro y qué significan el gerundio y el participio según el contexto, y las combinas con lo que viste en las semanas 1 a 4: concordancia y modo según la postura (G167, G168), relativas y concesivas (G169, G170), condiciones graduadas y reducidas (G171, G172) y certeza, fuente y conjetura (G173, G174). La historia es la de un taller fallero de Valencia a tres semanas de la plantà.",
    parts: [
      {
        heading: "Duración por dentro: avanzar, venir de antes, llevar tiempo",
        body: [
          "Las perífrasis de gerundio muestran una acción en curso desde una perspectiva concreta. «Ir + gerundio» mira hacia delante: el proceso avanza por etapas, todavía incompleto («la falla va tomando forma»). «Venir + gerundio» mira hacia atrás: el proceso empezó antes y llega hasta el momento de referencia, a veces con matiz de insistencia («venimos trabajando de noche desde enero»; «te vengo diciendo que no llegamos»). «Andar + gerundio» presenta una actividad dispersa o insistente, a menudo con valor coloquial o crítico («anda buscando un escultor»). «Llevar + gerundio» mide el tiempo transcurrido: «llevamos tres semanas pintando».",
          "No confundas «ir + gerundio» con «ir a + infinitivo», que es un futuro: «vamos terminando» (estamos en ello) no es «vamos a terminar» (lo haremos). Y recuerda los gerundios irregulares más frecuentes: yendo, leyendo, diciendo, durmiendo, pidiendo, viniendo, pudiendo.",
        ],
        table: {
          caption: "Cuatro maneras de mirar un mismo trabajo",
          head: ["Perífrasis", "Perspectiva", "Ejemplo"],
          rows: [
            ["ir + gerundio", "avance gradual, hacia delante", "Los ninots van quedando cada vez más expresivos."],
            ["venir + gerundio", "desde antes hasta ahora", "Venimos lijando las piezas desde noviembre."],
            ["andar + gerundio", "actividad dispersa o insistente", "Vicent anda diciendo que no llegamos."],
            ["llevar + gerundio", "tiempo transcurrido", "Lorena lleva dos días modelando la cara."],
          ],
        },
        examples: [
          { es: "Llevamos dos meses viniendo al taller todos los sábados.", note: "Tiempo transcurrido de una actividad que continúa." },
          { es: "Poco a poco, el barrio va entendiendo la crítica de la falla.", note: "Avance gradual, todavía incompleto." },
        ],
        mistakes: [
          {
            wrong: "La figura central va a quedando muy bien.",
            right: "La figura central va quedando muy bien.",
            why: "«Ir + gerundio» no lleva «a». «Ir a + infinitivo» es otra perífrasis, de futuro.",
          },
        ],
      },
      {
        heading: "Fase, reiteración y resultado: empezar, volver a, tener listo",
        body: [
          "Otras perífrasis señalan la fase de la acción. Antes de empezar: «estar a punto de», «estar por» (más frecuente en América). Al comienzo: «empezar a», «ponerse a», «echarse a» (súbito, con llorar, reír, correr). Al final: «terminar de», «acabar de» (final reciente), «dejar de» (interrupción). La reiteración se expresa con «volver a + infinitivo» («volvimos a pintar el fondo») y la costumbre con «soler + infinitivo».",
          "Las perífrasis de participio presentan el resultado. «Estar + participio» describe un estado («la cabeza está pintada»). «Tener + participio» presenta un resultado disponible, ya conseguido («tengo pintadas las manos»). «Llevar + participio» cuantifica el progreso de algo que sigue («llevamos pintados doce ninots» implica que seguimos). «Dejar + participio» indica el estado en que una acción deja algo («la lluvia dejó estropeada la peana»). Con todas ellas el participio concuerda con el objeto; con «haber», en cambio, es invariable: «hemos pintado doce ninots».",
        ],
        table: {
          caption: "Lo hecho, lo que sigue y lo disponible",
          head: ["Forma", "Qué informa", "Ejemplo"],
          rows: [
            ["he + participio", "lo hecho, sin más", "He pintado doce ninots."],
            ["llevo + participio concordado", "progreso parcial: sigo", "Llevo pintados doce ninots."],
            ["tengo + participio concordado", "resultado disponible", "Tengo pintados los doce ninots del lateral."],
            ["está(n) + participio concordado", "estado resultante", "Los ninots del lateral están pintados."],
            ["dejar + participio concordado", "estado en que queda algo", "El barniz dejó brillantes las caras."],
          ],
        },
        mistakes: [
          {
            wrong: "Llevamos pintado las tres figuras del fondo.",
            right: "Llevamos pintadas las tres figuras del fondo.",
            why: "Con «llevar», el participio concuerda con el objeto (las figuras).",
          },
          {
            wrong: "Hemos pintadas las tres figuras del fondo.",
            right: "Hemos pintado las tres figuras del fondo.",
            why: "Con «haber», el participio es invariable.",
          },
        ],
        tip: "En un informe de progreso, cada perífrasis responde a una pregunta distinta del lector: ¿cuánto llevas? (llevar + participio), ¿qué tienes listo? (tener + participio), ¿qué está terminado? (estar + participio), ¿qué va avanzando? (ir + gerundio). No las mezcles para sonar más técnico.",
      },
      {
        heading: "Gerundio: la posición y la oración principal deciden",
        body: [
          "El gerundio pegado al verbo, sin coma, suele expresar el modo o el medio: «entraron cantando», «aprendió el oficio mirando a su padre». El gerundio periférico, con coma y a menudo delante, admite varias lecturas, y la oración principal decide cuál. Con un hecho pasado puede ser tiempo («bajando del andamio, vio la grieta» = mientras bajaba) o causa («siendo festivo, el taller estaba cerrado» = como era festivo). Con un resultado futuro, hipotético o general, es condición («trabajando de noche, llegaremos» = si trabajamos). Con «aun» o «incluso» delante, es concesión («aun trabajando de noche, no llegamos»).",
          "El gerundio simple indica simultaneidad o anterioridad inmediata; para algo claramente anterior, usa el compuesto: «habiendo terminado la cabeza, pasaron al cuerpo». El sujeto del gerundio es el de la oración principal; si es otro, va detrás del gerundio: «estando el jurado en el taller, se cayó un brazo». Los pronombres se pegan al gerundio, que entonces lleva tilde: «diciéndoselo», «terminándola».",
          "Dos usos se consideran incorrectos en la lengua cuidada. El gerundio de posterioridad: «la falla se quemó a medianoche, quedando solo cenizas» debe ser «y solo quedaron cenizas». Y el gerundio especificativo, que clasifica un sustantivo: «una caja conteniendo pinceles» debe ser «una caja que contiene pinceles». Se aceptan, en cambio, «agua hirviendo», «un clavo ardiendo» y los pies de foto o títulos descriptivos: «Lorena modelando el ninot».",
        ],
        table: {
          caption: "Un gerundio, cinco lecturas",
          head: ["Frase", "Lectura", "Equivale a"],
          rows: [
            ["Pintaba silbando.", "modo", "pintaba así, silbando"],
            ["Saliendo del taller, oí los petardos.", "tiempo", "cuando salía del taller"],
            ["Siendo la última semana, nadie libra.", "causa", "como es la última semana"],
            ["Trabajando por turnos, terminaríamos antes.", "condición", "si trabajáramos por turnos"],
            ["Aun trabajando por turnos, no terminaremos.", "concesión", "aunque trabajemos por turnos"],
          ],
        },
        mistakes: [
          {
            wrong: "El taller cerró en marzo, reabriendo en septiembre con otro equipo.",
            right: "El taller cerró en marzo y reabrió en septiembre con otro equipo.",
            why: "Gerundio de posterioridad: la reapertura no es simultánea al cierre.",
          },
          {
            wrong: "Nos llegó un pedido conteniendo veinte kilos de corcho.",
            right: "Nos llegó un pedido que contenía veinte kilos de corcho.",
            why: "Gerundio especificativo: para clasificar un sustantivo se usa una relativa.",
          },
        ],
      },
      {
        heading: "Participio predicativo e integración de las semanas 1 a 4",
        body: [
          "El participio también puede funcionar como predicativo, concordando con el sujeto, y recibir una lectura de estado o causa («cansada, Amparo se fue a dormir» = como estaba cansada), de condición («bien pintado, este ninot sería indultado» = si estuviera bien pintado) o de concesión con «aun» («aun terminados, los ninots necesitan barniz»). Las construcciones absolutas con sujeto propio («terminada la plantà, …») las verás en la próxima clase; por ahora basta con reconocerlas.",
          "Un relato de proceso como el de esta semana pone en juego todo lo que has repasado desde la semana 1. Las perífrasis y los gerundios se combinan con las expectativas del pasado (G167), la postura ante un rumor (G168), el perfil de lo que se busca (G169), las concesiones que no frenan el trabajo (G170), los escenarios posibles y las quejas retóricas (G171), las condiciones reducidas (G172) y la distinción entre lo que se ve, se deduce o se dice, con conjeturas sobre el pasado (G173, G174). La tabla te sirve de mapa para la práctica integrada.",
        ],
        table: {
          caption: "Integración: lo que vuelve de las semanas 1 a 4",
          head: ["Clase", "Recurso", "En el taller"],
          rows: [
            ["G167", "concordancia del subjuntivo", "En enero temíamos que el corcho no llegara a tiempo."],
            ["G168", "modo según la postura", "Que lo digan en el casal no significa que vayamos tarde."],
            ["G169", "relativa no específica", "Buscamos un ayudante que sepa manejar la fresadora."],
            ["G170", "concesiva polémica", "Aunque llueva toda la semana, la plantà es el día 15."],
            ["G171", "contrafactual retórico", "Si lo sé, encargo el corcho en octubre."],
            ["G172", "condición reducida", "De haber tenido otra nave, habríamos montado antes."],
            ["G173", "marca de fuente", "Por lo visto, el jurado vendrá el jueves."],
            ["G174", "conjetura retrospectiva", "Cuando llegamos, ya habrían descargado el camión."],
          ],
        },
        examples: [
          { es: "Agotados, los ayudantes siguieron lijando hasta las tres.", note: "Participio predicativo de estado o causa, concordado." },
          { es: "Bien terminada, esta figura habría ganado el premio de ingenio.", note: "Participio con lectura de condición." },
        ],
      },
    ],
  },
  grammar: {
    intro: "En cada frase, decide primero qué perspectiva de la acción quieres mostrar o qué lectura tiene el gerundio; después elige la forma.",
    exercises: [
      {
        id: "c1-05-gramatica-perspectiva",
        type: "context",
        prompt: "Lee la situación y elige la perífrasis que corresponde a la perspectiva descrita.",
        items: [
          {
            context: "El equipo empezó a modelar las figuras en noviembre y sigue haciéndolo hoy.",
            q: "¿Qué dice el maestro fallero?",
            options: [
              "Vamos a modelar las figuras desde noviembre.",
              "Venimos modelando las figuras desde noviembre.",
              "Acabamos de modelar las figuras desde noviembre.",
            ],
            answer: 1,
            why: "Proceso que viene de antes y llega hasta ahora: «venir + gerundio».",
          },
          {
            context: "De los veinte ninots, han pintado doce y siguen con los demás.",
            q: "¿Qué frase informa con precisión del progreso?",
            options: [
              "Tenemos pintados los veinte ninots.",
              "Los veinte ninots están pintados.",
              "Llevamos pintados doce ninots.",
            ],
            answer: 2,
            why: "«Llevar + participio» cuantifica un progreso parcial que continúa.",
          },
          {
            context: "La pintora terminó la cara del ninot central hace cinco minutos.",
            q: "¿Qué dice?",
            options: [
              "Acabo de terminar la cara del ninot central.",
              "Dejo de terminar la cara del ninot central.",
              "Vuelvo a terminar la cara del ninot central.",
            ],
            answer: 0,
            why: "«Acabar de + infinitivo»: final reciente.",
          },
          {
            context: "La lluvia de anoche estropeó la base de una figura y hay que pintarla de nuevo.",
            q: "¿Qué frase lo cuenta?",
            options: [
              "La lluvia dejó estropeada la base y tenemos que volver a pintarla.",
              "La lluvia dejó estropeado la base y tenemos que dejar de pintarla.",
              "La lluvia va estropeando la base y tenemos que acabar de pintarla.",
            ],
            answer: 0,
            why: "«Dejar + participio» concordado para el estado resultante y «volver a» para la repetición.",
          },
        ],
      },
      {
        id: "c1-05-gramatica-formas",
        type: "gap",
        prompt: "Completa con la forma adecuada del verbo entre paréntesis. Cuida la concordancia del participio.",
        items: [
          { q: "Ya tenemos ___ (lijar) todas las piezas del brazo derecho.", answers: [["lijadas"]], why: "«Tener + participio» concuerda con el objeto: las piezas." },
          { q: "Hemos ___ (montar) la cabeza esta mañana con la grúa.", answers: [["montado"]], why: "Con «haber», el participio es invariable." },
          { q: "El barrio va ___ (acostumbrarse) a ver la grúa en la plaza.", answers: [["acostumbrándose"]], why: "Pronombre pegado al gerundio, que lleva tilde." },
          { q: "___ (terminar) el boceto en junio, el artista empezó a buscar patrocinadores.", answers: [["Habiendo terminado"]], why: "Acción claramente anterior: gerundio compuesto." },
          { q: "Lorena lleva tres noches ___ (dormir) en el taller.", answers: [["durmiendo"]], why: "Gerundio irregular de «dormir»." },
          { q: "___ (cansar), los voluntarios se sentaron en las cajas de corcho.", answers: [["Cansados"]], why: "Participio predicativo concordado con el sujeto: los voluntarios." },
        ],
      },
      {
        id: "c1-05-gramatica-gerundio",
        type: "classify",
        prompt: "Clasifica cada gerundio según su lectura en la frase.",
        categories: ["Modo o medio", "Tiempo o causa (hecho real)", "Condición o concesión"],
        items: [
          { text: "Aprendió a modelar mirando trabajar a su abuelo.", cat: 0, why: "Medio: así aprendió." },
          { text: "Bajando del andamio, Vicent vio la grieta del cuello.", cat: 1, why: "Hecho pasado: mientras bajaba." },
          { text: "Siendo la última semana, nadie se tomó el día libre.", cat: 1, why: "Causa: como era la última semana." },
          { text: "Trabajando por turnos, terminaríamos el jueves.", cat: 2, why: "Resultado hipotético: si trabajáramos por turnos." },
          { text: "Aun pintando de noche, no llegaremos al día 14.", cat: 2, why: "«Aun» + gerundio: concesión." },
          { text: "Los ayudantes entraron cantando el himno regional.", cat: 0, why: "Modo, pegado al verbo y sin coma." },
        ],
      },
      {
        id: "c1-05-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de perífrasis, de gerundio o de concordancia. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "La comisión presentó la falla en febrero, ganando el primer premio en marzo.",
            answers: ["La comisión presentó la falla en febrero y ganó el primer premio en marzo."],
            why: "Gerundio de posterioridad: se sustituye por «y» + verbo conjugado.",
          },
          {
            sentence: "Recibimos una carta anunciando la visita del jurado para el jueves.",
            answers: ["Recibimos una carta que anunciaba la visita del jurado para el jueves.", "Recibimos una carta que anuncia la visita del jurado para el jueves."],
            why: "Gerundio especificativo: para describir el sustantivo, relativa.",
          },
          {
            sentence: "Llevamos montado los cuatro ninots del lateral.",
            answers: ["Llevamos montados los cuatro ninots del lateral."],
            why: "Con «llevar», el participio concuerda con el objeto.",
          },
          {
            sentence: "Estando yo en el taller, se rompió la escalera, llegando la ambulancia diez minutos después.",
            answers: ["Estando yo en el taller, se rompió la escalera y la ambulancia llegó diez minutos después.", "Estando yo en el taller, se rompió la escalera; la ambulancia llegó diez minutos después."],
            why: "El primer gerundio es correcto (sujeto propio detrás); el segundo es de posterioridad: «y la ambulancia llegó».",
          },
        ],
      },
      {
        id: "c1-05-gramatica-integracion",
        type: "open",
        prompt: "Reescribe cada borrador del diario del taller según la instrucción. Hay varias respuestas posibles: compara con el modelo y con la lista.",
        items: [
          {
            prompt: "Borrador: «Pintamos doce ninots. Seguimos pintando. Las caras ya están. Esperamos que el jurado venga el jueves». Reescríbelo en dos frases con «llevar + participio», «tener + participio» y la expectativa contada desde el pasado (G167).",
            model: "Llevamos pintados doce ninots y tenemos terminadas todas las caras. Al principio de la semana esperábamos que el jurado viniera el jueves, pero aún no ha confirmado la visita.",
            checklist: [
              "Uso «llevar» y «tener» + participio concordado.",
              "Cuento la expectativa con marco pasado e imperfecto de subjuntivo.",
            ],
          },
          {
            prompt: "Borrador: «Si trabajamos de noche, terminamos. Aunque trabajamos de noche, a lo mejor no terminamos. La falla se plantó el día 15 y ganó el premio». Reescríbelo usando un gerundio condicional, un gerundio concesivo y un condicional compuesto de conjetura (G174), sin gerundio de posterioridad.",
            model: "Trabajando de noche, terminaremos a tiempo; aun trabajando de noche, puede que no lleguemos a pintar los detalles. El día 15 se plantó la falla y ganó el premio: el jurado ya habría visto los bocetos antes de la visita.",
            checklist: [
              "El gerundio condicional va con un resultado futuro.",
              "El concesivo lleva «aun» delante.",
              "No uso gerundio de posterioridad y la conjetura usa «habría + participio».",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar del taller de un artista fallero y de cualquier proyecto que avanza contrarreloj.",
    groups: [
      {
        title: "El taller fallero",
        items: [
          { es: "el artista fallero", note: "profesional que diseña y construye las fallas" },
          { es: "el boceto", note: "dibujo previo que muestra cómo será el monumento" },
          { es: "el ninot", note: "cada una de las figuras que forman una falla" },
          { es: "modelar", note: "dar forma a un material blando o al corcho con herramientas" },
          { es: "la nave", note: "local amplio donde se construyen las piezas" },
          { es: "la plantà", note: "montaje del monumento en la calle antes de las fiestas" },
          { es: "la cremà", note: "quema final del monumento" },
          { es: "indultar un ninot", note: "salvarlo del fuego por votación popular" },
        ],
      },
      {
        title: "Ir contrarreloj",
        items: [
          { es: "ir contrarreloj", note: "trabajar con muy poco tiempo hasta el plazo" },
          { es: "echar horas", note: "trabajar mucho tiempo, más de lo habitual" },
          { es: "quedar listo", note: "terminar en condiciones de usarse" },
          { es: "ir a buen ritmo", note: "avanzar con la velocidad adecuada" },
          { es: "atascarse", note: "detenerse en una tarea por una dificultad" },
          { es: "rematar", note: "dar los últimos toques a un trabajo" },
          { es: "a última hora", note: "en el último momento posible" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-05-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la plantà", right: "montaje del monumento en la calle antes de las fiestas" },
          { left: "indultar un ninot", right: "salvarlo del fuego por votación popular" },
          { left: "el boceto", right: "dibujo previo que muestra cómo será el monumento" },
          { left: "echar horas", right: "trabajar mucho tiempo, más de lo habitual" },
          { left: "atascarse", right: "detenerse en una tarea por una dificultad" },
          { left: "rematar", right: "dar los últimos toques a un trabajo" },
          { left: "ir contrarreloj", right: "trabajar con muy poco tiempo hasta el plazo" },
        ],
      },
      {
        id: "c1-05-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["nave", "a buen ritmo", "quedó lista", "a última hora", "modelando"],
        items: [
          { q: "Este año la comisión alquiló una ___ más grande en el polígono de Benicalap.", answers: [["nave"]] },
          { q: "Si seguimos ___, el jueves podremos empezar a barnizar.", answers: [["a buen ritmo"]] },
          { q: "La figura central ___ dos días antes de la plantà.", answers: [["quedó lista"]] },
          { q: "Siempre hay algo que se rompe ___, por eso guardamos corcho de reserva.", answers: [["a última hora"]] },
          { q: "Lorena lleva toda la mañana ___ las manos del ninot de la abuela.", answers: [["modelando"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Gerundios con pronombres y perífrasis encadenadas",
    explanation: [
      "Cuando pegas pronombres a un gerundio, el acento se queda en la misma sílaba y la palabra se alarga por detrás: ter-mi-NAN-do, ter-mi-NÁN-do-la, ter-mi-NÁN-do-se-la. No desplaces el acento hacia los pronombres: son átonos. Por eso estas formas llevan tilde al escribirse, porque se convierten en esdrújulas o sobresdrújulas.",
      "Las perífrasis se pronuncian como una sola unidad, sin pausa entre el auxiliar y el verbo principal, y con sinalefa cuando se encuentran dos vocales: «va‿a‿empezar», «vuelve‿a‿abrir», «lleva‿esperando». Si cortas entre las dos piezas, el oyente puede pensar que son dos acciones separadas.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el ritmo y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "El acento no se mueve aunque la palabra crezca",
      head: ["Gerundio", "Con un pronombre", "Con dos pronombres"],
      rows: [
        ["diciendo", "diciéndolo", "diciéndoselo"],
        ["terminando", "terminándola", "terminándosela"],
        ["explicando", "explicándolo", "explicándoselo"],
        ["pintando", "pintándola", "pintándosela"],
      ],
    },
    perceive: {
      id: "c1-05-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué oyes.",
      items: [
        {
          q: "¿Qué perífrasis oyes?",
          options: ["va terminando: avance en curso", "va a terminar: futuro"],
          answer: 0,
          why: "No se oye la «a» entre «va» y el verbo, que además está en gerundio.",
          audio: "Lorena va terminando las manos del ninot.",
          voice: "es-VE-f",
        },
        {
          q: "¿Qué perífrasis oyes?",
          options: ["va terminando", "va a terminar"],
          answer: 1,
          why: "Se oye la sinalefa «va‿a» y un infinitivo.",
          audio: "Lorena va a terminar las manos esta tarde.",
          voice: "es-VE-f",
        },
        {
          q: "¿Dónde cae el acento de la forma con pronombres?",
          options: ["En la sílaba «se»", "En la sílaba «cien»", "En la última sílaba"],
          answer: 1,
          why: "di-CIÉN-do-se-lo: el acento se mantiene en la sílaba del gerundio.",
          audio: "Llevo una semana diciéndoselo y no me hace caso.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué forma oyes?",
          options: ["Llevamos pintadas doce figuras", "Hemos pintado doce figuras"],
          answer: 0,
          why: "Se oye «llevamos» y el participio en femenino plural.",
          audio: "Llevamos pintadas doce figuras del lateral.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "La falla va tomando forma y el barrio va acostumbrándose a la grúa.", tip: "Sin pausa entre «va» y el gerundio; acento en «brán»: a-cos-tum-BRÁN-do-se.", voice: "es-ES-m" },
      { text: "Llevo una semana diciéndoselo, pero no me escucha.", tip: "di-CIÉN-do-se-lo: los pronombres son átonos.", voice: "es-ES-f" },
      { text: "El taller vuelve a abrir mañana a las ocho.", tip: "Sinalefa en «vuelve‿a‿abrir», como una sola palabra.", voice: "es-VE-f" },
      { text: "Aun trabajando de noche, no llegaremos al jueves.", tip: "Haz la pausa después de «noche» y deja caer el tono al final.", voice: "es-ES-m" },
    ],
    spelling: "Los gerundios con uno o dos pronombres llevan siempre tilde: diciéndolo, terminándosela. Los gerundios solos no la llevan: diciendo, terminando.",
  },
  listening: {
    title: "Tres semanas para la plantà",
    context: "En una nave del norte de Valencia, el artista fallero Vicent, la pintora Amparo y la escultora Lorena, que es venezolana, hacen balance a tres semanas de la plantà. Revisan qué tienen listo, qué va avanzando, qué se ha torcido y qué harán si las cosas empeoran. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "v", name: "Vicent", voice: "es-ES-m", role: "Artista fallero, dirige el taller" },
      { id: "a", name: "Amparo", voice: "es-ES-f", role: "Pintora" },
      { id: "l", name: "Lorena", voice: "es-VE-f", role: "Escultora" },
    ],
    script: [
      { speaker: "v", text: "A ver, hagamos números. Faltan tres semanas para la plantà. Amparo, ¿cómo vamos con la pintura?" },
      { speaker: "a", text: "Llevo pintados catorce ninots de los veintidós, y tengo terminadas todas las caras, que era lo más delicado. Vengo echando horas desde enero, pero esta semana he ido más lenta, porque la humedad no deja secar el fondo." },
      { speaker: "v", text: "En enero esperaba que a estas alturas tuviéramos la figura central montada. Lorena, ¿qué ha pasado con la cabeza?" },
      { speaker: "l", text: "Pues que el corcho llegó tarde. Si lo sé, lo pido en octubre. Además, cuando lo descargaron, alguien ya habría roto dos bloques, porque venían partidos. Aun así, la cabeza va tomando forma: acabo de terminar los ojos y mañana vuelvo a ponerme con la boca." },
      { speaker: "v", text: "Por lo visto, en el casal anda diciendo la gente que no llegamos. Que lo digan no significa que sea verdad, pero necesitamos un ayudante que sepa manejar la fresadora, aunque sea solo por las noches." },
      { speaker: "a", text: "Mi sobrino estudia Bellas Artes. No digo que sea un experto, pero trabajando con él dos noches por semana, recuperaríamos el retraso de la cabeza." },
      { speaker: "l", text: "Yo lo veo bien. Eso sí, de haber tenido una nave más grande, habríamos podido montar la figura entera aquí dentro y ver el conjunto. Así vamos un poco a ciegas." },
      { speaker: "v", text: "Ya, pero aunque tuviéramos la nave más grande del polígono, el problema sería el mismo: el tiempo. Hagamos así: en caso de que siga lloviendo, Amparo pinta dentro y Lorena y el sobrino rematan la cabeza. Y como alguien vuelva a pedir corcho a última hora el año que viene, lo mando a la cremà con los ninots." },
      { speaker: "a", text: "Trato hecho. Y, bien terminada, esa cabeza puede ganar el premio de ingenio, digan lo que digan en el casal." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Cuál es la situación del taller y qué deciden?",
        exercise: {
          id: "c1-05-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Cómo va el trabajo del taller?",
              options: [
                "Está terminado y solo falta transportarlo.",
                "Va avanzando, pero con retraso en la figura central.",
                "Está parado por falta de dinero.",
              ],
              answer: 1,
              why: "La pintura avanza, pero la cabeza central va retrasada por el corcho.",
            },
            {
              q: "¿Qué deciden para recuperar el retraso?",
              options: [
                "Cambiar el diseño de la figura central.",
                "Retrasar la plantà una semana.",
                "Incorporar un ayudante por las noches y repartir las tareas si llueve.",
              ],
              answer: 2,
              why: "El sobrino de Amparo ayudará y Vicent organiza un plan para la lluvia.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada dato de progreso y cada condición.",
        exercise: {
          id: "c1-05-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Cuántos ninots lleva pintados Amparo?",
              options: ["Veintidós, todos.", "Catorce de veintidós.", "Solo las caras de ocho."],
              answer: 1,
              why: "«Llevo pintados catorce ninots de los veintidós.»",
            },
            {
              q: "¿Qué cree Lorena que pasó con los bloques de corcho?",
              options: [
                "Que alguien los rompió antes de que llegaran al taller.",
                "Que ella misma los rompió al modelar.",
                "Que la humedad los deshizo.",
              ],
              answer: 0,
              why: "«Alguien ya habría roto dos bloques, porque venían partidos»: conjetura.",
            },
            {
              q: "¿Qué pasará si sigue lloviendo?",
              options: [
                "Suspenderán el trabajo hasta que pare.",
                "Amparo pintará dentro y los demás rematarán la cabeza.",
                "Montarán la figura en la calle.",
              ],
              answer: 1,
              why: "«En caso de que siga lloviendo, Amparo pinta dentro…»",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en qué recurso usa cada frase. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-05-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la conversación con el recurso que pone en juego.",
          pairs: [
            { left: "llevo pintados catorce ninots", right: "progreso parcial con participio concordado" },
            { left: "vengo echando horas desde enero", right: "proceso que viene de antes hasta ahora" },
            { left: "trabajando con él dos noches por semana, recuperaríamos el retraso", right: "gerundio con valor de condición" },
            { left: "en enero esperaba que tuviéramos la figura montada", right: "expectativa con marco pasado" },
            { left: "alguien ya habría roto dos bloques", right: "conjetura sobre un pasado anterior" },
            { left: "bien terminada, esa cabeza puede ganar el premio", right: "participio predicativo con valor de condición" },
          ],
          why: "La conversación integra las perífrasis y las formas no personales con recursos de las semanas 1 a 4.",
        },
      },
    ],
  },
  reading: {
    title: "Seis meses dentro de una falla",
    genre: "Reportaje de revista cultural",
    frame: "Reportaje publicado en una revista cultural valenciana. El taller, el artista, su equipo y la falla son ficticios.",
    text: [
      "La nave de Vicent Ferrer está en un polígono del norte de Valencia, entre un almacén de naranjas y un taller de neumáticos. Por fuera no se distingue de las demás. Por dentro, desde septiembre, va creciendo una ciudad de figuras sin terminar: brazos de corcho colgados del techo, cabezas sin ojos sobre las mesas, una abuela gigante que todavía no tiene manos. Vicent lleva treinta y dos años haciendo fallas, y asegura que nunca ha empezado una sin pensar que esta vez no llegaría.",
      "El proceso empezó, como siempre, con un boceto. En junio, habiendo ganado el concurso de su comisión, Vicent se puso a dibujar la idea definitiva: una crítica a la prisa, con una familia que corre detrás de un reloj enorme. En octubre empezaron a llegar los bloques de corcho y el equipo comenzó a modelar. Desde entonces vienen trabajando seis días por semana, y en enero se sumaron los turnos de noche. «Aquí no se trabaja por horas, se trabaja por piezas», explica Amparo Soler, la pintora, mientras repasa con un pincel finísimo las pestañas de un ninot.",
      "El calendario no siempre ha acompañado. La escultora Lorena Rangel, que llegó de Caracas hace cuatro años, cuenta que el corcho de la figura central llegó con tres semanas de retraso y con dos bloques partidos. «Alguien los habría roto al cargar el camión», supone, «porque el proveedor jura que salieron enteros». Aun trabajando por las noches, la cabeza va con retraso. Lorena acaba de terminar los ojos y esta semana vuelve a ponerse con la boca, que ya ha rehecho dos veces porque no le convencía la expresión.",
      "Mientras tanto, la pintura avanza a buen ritmo. Amparo lleva pintados catorce de los veintidós ninots y tiene terminadas todas las caras, que considera la parte más delicada. La humedad de febrero la obliga a esperar entre capa y capa, y eso la desespera. Cansada después de once horas, se sienta un momento sobre una caja de corcho, pero enseguida se levanta, porque, siendo la última semana de secado, cada hora cuenta.",
      "En el barrio corre el rumor de que esta vez no llegan. Vicent se encoge de hombros. «Que lo digan no significa que sea verdad. Lo que sí necesitamos es un ayudante que sepa manejar la fresadora, aunque sea solo por las noches». Al parecer, el sobrino de Amparo, estudiante de Bellas Artes, empezará la semana que viene. Trabajando dos noches por semana con él, calculan, recuperarían buena parte del retraso. De haber tenido una nave más grande, habrían podido montar la figura entera en el interior; así, el conjunto solo se verá completo en la calle, la noche de la plantà.",
      "Al terminar la jornada, Vicent apaga las luces del fondo y deja encendida solo la lámpara de la mesa de dibujo. Le pregunto si no le duele trabajar seis meses en algo que se quemará en una noche. Se ríe. «Si lo pensara así, no habría hecho ni una falla. Lo que queda no es el monumento, es el oficio». Y recuerda que, bien terminado, un ninot puede salvarse del fuego por votación popular. Este año, digan lo que digan en el casal, él ya tiene un candidato: la abuela que todavía no tiene manos.",
    ],
    glossary: [
      { es: "comisión", note: "asociación vecinal que encarga y paga una falla" },
      { es: "casal", note: "local social de una comisión fallera" },
      { es: "fresadora", note: "máquina que corta y da forma a materiales como el corcho o la madera" },
    ],
    tasks: [
      {
        id: "c1-05-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el reportaje.",
        items: [
          {
            q: "¿Qué crítica representa la falla de Vicent?",
            options: [
              "La crítica a la prisa, con una familia que persigue un reloj.",
              "La crítica a la construcción de naves industriales.",
              "La crítica a los concursos de las comisiones.",
            ],
            answer: 0,
            why: "Lo dice el segundo párrafo.",
          },
          {
            q: "¿Por qué va con retraso la figura central?",
            options: [
              "Porque Lorena llegó tarde de Caracas.",
              "Porque el corcho llegó tarde y con bloques partidos.",
              "Porque Vicent cambió el boceto en enero.",
            ],
            answer: 1,
            why: "El tercer párrafo explica el retraso del corcho.",
          },
          {
            q: "¿Qué piensa Vicent del carácter efímero de su trabajo?",
            options: [
              "Que es injusto y le duele cada año.",
              "Que pronto dejará el oficio por ese motivo.",
              "Que lo que perdura no es el monumento, sino el oficio.",
            ],
            answer: 2,
            why: "«Lo que queda no es el monumento, es el oficio.»",
          },
        ],
      },
      {
        id: "c1-05-lectura-valores",
        type: "match",
        prompt: "Relaciona cada fragmento del reportaje con el valor de su perífrasis o de su forma no personal.",
        pairs: [
          { left: "va creciendo una ciudad de figuras sin terminar", right: "avance gradual todavía incompleto" },
          { left: "habiendo ganado el concurso de su comisión", right: "acción anterior con gerundio compuesto" },
          { left: "Aun trabajando por las noches, la cabeza va con retraso", right: "gerundio con valor de concesión" },
          { left: "siendo la última semana de secado, cada hora cuenta", right: "gerundio con valor de causa" },
          { left: "Cansada después de once horas", right: "participio predicativo de estado" },
        ],
      },
      {
        id: "c1-05-lectura-evaluacion",
        type: "open",
        prompt: "Analiza el reportaje como texto integrado.",
        items: [
          {
            prompt: "Busca en el quinto párrafo tres recursos de las semanas 1 a 4 (postura ante un rumor, relativa no específica, concesión, marca de fuente, condición reducida) y explica en 80–100 palabras qué aporta cada uno al relato.",
            model: "«Que lo digan no significa que sea verdad» toma distancia del rumor del barrio con dos subjuntivos (G168), lo que muestra la seguridad de Vicent. «Un ayudante que sepa manejar la fresadora» describe un perfil que aún buscan, por eso va en subjuntivo (G169). «Al parecer» marca que el dato del sobrino viene de terceros (G173), y «de haber tenido una nave más grande, habrían podido montar…» plantea una condición pasada no cumplida sin «si» (G172). Juntos, estos recursos permiten al lector distinguir lo seguro, lo buscado y lo que no fue posible.",
            checklist: [
              "Identifico tres recursos y la clase a la que pertenecen.",
              "Explico qué aporta cada uno al relato, no solo la regla.",
              "Cito literalmente los fragmentos.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el reportaje combina perífrasis, gerundios y participios con los recursos de las semanas anteriores.",
      items: [
        { quote: "Vicent lleva treinta y dos años haciendo fallas", note: "«Llevar + gerundio»: tiempo transcurrido de una actividad que continúa." },
        { quote: "Desde entonces vienen trabajando seis días por semana", note: "«Venir + gerundio»: proceso que llega desde antes hasta ahora." },
        { quote: "Lorena acaba de terminar los ojos y esta semana vuelve a ponerse con la boca", note: "Fase final reciente y reiteración en una misma frase." },
        { quote: "Amparo lleva pintados catorce de los veintidós ninots y tiene terminadas todas las caras", note: "Progreso parcial y resultado disponible, con participios concordados." },
        { quote: "Trabajando dos noches por semana con él, calculan, recuperarían buena parte del retraso.", note: "Gerundio condicional con resultado hipotético." },
        { quote: "Alguien los habría roto al cargar el camión", note: "Conjetura sobre el pasado (G174) en boca de un personaje." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención, relación de formas y escritura guiada. Termina recuperando cada una de las clases de las semanas 1 a 4.",
    exercises: [
      {
        id: "c1-05-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases del diario del taller.",
        items: [
          {
            words: ["Llevamos", "montadas", "tres", "de", "las", "cinco", "piezas", "del", "reloj."],
            why: "«Llevar + participio» concordado: progreso parcial.",
          },
          {
            words: ["Aun", "lloviendo", "toda", "la", "semana,", "la", "plantà", "será", "el", "día", "15."],
            why: "Gerundio concesivo con «aun».",
          },
          {
            words: ["Habiendo", "terminado", "el", "boceto,", "Vicent", "empezó", "a", "buscar", "corcho."],
            why: "Gerundio compuesto para una acción anterior.",
          },
        ],
      },
      {
        id: "c1-05-intencion",
        type: "context",
        prompt: "Elige la frase que corresponde a la intención descrita.",
        items: [
          {
            context: "Quieres informar al presidente de la comisión de que el trabajo avanza, aunque no esté terminado.",
            q: "¿Qué frase eliges?",
            options: [
              "La falla está terminada.",
              "La falla va quedando como esperábamos.",
              "La falla acaba de quedar como esperábamos.",
            ],
            answer: 1,
            why: "«Ir + gerundio» muestra el avance sin presentarlo como terminado.",
          },
          {
            context: "Quieres quejarte con suavidad de que el proveedor no avisó del retraso.",
            q: "¿Qué frase usa un recurso de la semana 4 para atenuar la queja?",
            options: [
              "Habríamos preferido que el proveedor nos avisara del retraso.",
              "Como el proveedor no avise, no le compramos más.",
              "El proveedor no avisando del retraso.",
            ],
            answer: 0,
            why: "Condicional compuesto de queja atenuada con imperfecto de subjuntivo (G174).",
          },
          {
            context: "Escribes el pie de foto de una imagen en la que Lorena trabaja en la cabeza.",
            q: "¿Qué pie de foto es aceptable en la lengua cuidada?",
            options: [
              "Foto mostrando a Lorena que modela la cabeza.",
              "Lorena, modelando la cabeza del ninot central.",
              "Una escultora modelando y terminando después la cabeza el jueves.",
            ],
            answer: 1,
            why: "Los pies de foto descriptivos admiten el gerundio; «foto mostrando» es especificativo y la tercera mezcla posterioridad.",
          },
        ],
      },
      {
        id: "c1-05-perifrasis",
        type: "match",
        prompt: "Relaciona cada perífrasis con lo que informa.",
        pairs: [
          { left: "estar a punto de + infinitivo", right: "la acción va a empezar de inmediato" },
          { left: "ponerse a + infinitivo", right: "comienzo de una actividad" },
          { left: "dejar de + infinitivo", right: "interrupción de una actividad" },
          { left: "volver a + infinitivo", right: "repetición de una acción" },
          { left: "tener + participio", right: "resultado ya disponible" },
          { left: "andar + gerundio", right: "actividad dispersa o insistente" },
        ],
      },
      {
        id: "c1-05-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Piensa en un proyecto tuyo en marcha (una mudanza, un curso, una reforma, un trabajo). Escribe 60–80 palabras con al menos cuatro perífrasis distintas: algo que va avanzando, algo que vienes haciendo, algo que tienes listo y cuánto llevas hecho.",
            model: "Llevo dos meses preparando la mudanza y ya tengo embaladas casi todas las cajas de libros. Vengo regalando ropa desde enero, aunque cuesta desprenderse de algunas cosas. La casa nueva va quedando bonita: los pintores acaban de terminar el salón y la semana que viene vuelven a venir para la cocina. Llevo vaciados cuatro armarios de seis.",
            checklist: [
              "Uso al menos cuatro perífrasis con perspectivas distintas.",
              "Los participios con «tener» y «llevar» concuerdan con el objeto.",
              "No presento como terminado lo que está en curso.",
            ],
          },
          {
            prompt: "Escribe tres frases (40–60 palabras) sobre el mismo proyecto con tres gerundios de lecturas diferentes: tiempo, condición y concesión. Comprueba que ninguno es de posterioridad.",
            model: "Vaciando el altillo, encontré las cartas de mi abuela. Contratando una empresa, terminaríamos la mudanza en un día, pero es caro. Aun trabajando todo el fin de semana, no conseguimos montar los muebles de la cocina, así que el lunes cenamos de pie.",
            checklist: [
              "Cada gerundio tiene una lectura distinta y clara.",
              "La oración principal es coherente con la lectura (pasado, hipotético).",
              "No hay gerundios de posterioridad ni especificativos.",
            ],
          },
        ],
      },
      {
        id: "c1-05-recuperacion",
        type: "open",
        prompt: "Recupera las clases de las semanas 1 a 4 con los estímulos del taller. No hace falta volver a las lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de G167 (concordancia temporal). Estímulo de enero: «Queremos que el corcho llegue en febrero y nos alegra que el boceto haya gustado». Cuéntalo hoy, en marzo, desde el pasado.",
            model: "En enero queríamos que el corcho llegara en febrero y nos alegraba que el boceto hubiera gustado a la comisión.",
            checklist: [
              "Paso el deseo a imperfecto de subjuntivo.",
              "Paso la valoración de un hecho anterior a pluscuamperfecto.",
            ],
          },
          {
            prompt: "Recuperación de G168 (modo según la postura). Estímulo: en el casal dicen que la falla no estará lista. Responde distinguiendo lo que se dice de lo que tú sabes.",
            model: "Dicen que no llegamos, pero que lo digan no significa que sea cierto. Que yo sepa, la pintura va a buen ritmo y la cabeza estará lista el jueves.",
            checklist: [
              "Transmito el rumor con indicativo.",
              "Tomo distancia con subjuntivo y limito mi compromiso con «que yo sepa».",
            ],
          },
          {
            prompt: "Recuperación de G169 y G170 (relativas y concesivas). Estímulo: el taller necesita un ayudante, pero no hay mucho dinero. Escribe el anuncio en dos frases con una relativa no específica y una concesiva polémica.",
            model: "Buscamos un ayudante que sepa manejar la fresadora y que pueda venir por las noches. Aunque el sueldo sea modesto, aprenderá el oficio con un equipo que lleva treinta años haciendo fallas.",
            checklist: [
              "La relativa describe un perfil con subjuntivo.",
              "La concesiva concede un dato conocido para restarle peso.",
            ],
          },
          {
            prompt: "Recuperación de G171 y G172 (condiciones). Estímulo: el corcho llegó tarde porque lo pidieron en diciembre. Escribe una queja coloquial y su versión formal sin «si».",
            model: "Coloquial: «Si lo sé, pido el corcho en octubre». Formal: «De haber encargado el corcho en octubre, habríamos evitado el retraso de la figura central».",
            checklist: [
              "La queja coloquial usa presente con valor de pasado irreal.",
              "La versión formal usa de + infinitivo compuesto y condicional compuesto.",
            ],
          },
          {
            prompt: "Recuperación de G173 y G174 (certeza y conjetura). Estímulo: dos bloques de corcho llegaron partidos y nadie sabe cuándo se rompieron. Escribe tres frases: lo que ves, lo que deduces y una conjetura sobre el pasado.",
            model: "Dos bloques han llegado partidos. A juzgar por las marcas de las correas, tuvieron que romperse durante la carga. Cuando salieron del almacén, probablemente estaban enteros, así que alguien los habría golpeado al subirlos al camión.",
            checklist: [
              "Afirmo sin marcas lo que veo.",
              "Uso un marcador de deducción con el modo correcto.",
              "La conjetura usa «habría + participio» con un punto de referencia pasado.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una crónica (240–340 palabras) sobre un proyecto largo que conozcas bien: la preparación de una fiesta, una reforma, un montaje teatral, un viaje organizado en grupo. Cuenta cómo empezó, cómo fue avanzando, qué se torció y en qué estado está hoy, e integra al menos cuatro recursos de las semanas 1 a 4.",
    context: "La crónica se publicará en el boletín de la asociación o del grupo que hizo el proyecto. La leerán quienes participaron y quienes no: necesitan entender el proceso, no solo el resultado, y distinguir lo que está terminado de lo que sigue en marcha.",
    steps: [
      "Haz una línea temporal con cinco momentos del proyecto y escribe al lado la perífrasis que mejor muestra cada uno (empezar a, ir + gerundio, volver a, llevar + participio, tener + participio).",
      "Elige cuatro recursos de las semanas 1 a 4 (una expectativa pasada, un rumor matizado, un perfil buscado, una concesión, una condición reducida, una conjetura) y decide dónde encajan.",
      "Redacta al menos tres párrafos: el comienzo, el avance con sus problemas y el estado actual.",
      "Revisa la crónica con la lista de control: corrige los gerundios de posterioridad o especificativos y comprueba la concordancia de los participios.",
    ],
    useLanguage: [
      "empezar a, ponerse a, volver a, acabar de + infinitivo",
      "ir / venir / llevar + gerundio",
      "llevar / tener / dejar + participio concordado",
      "gerundio de modo, tiempo, causa, condición o concesión (aun + gerundio)",
      "participio predicativo: cansados, bien hecho…",
      "esperábamos que…, que lo digan no significa que…, de haber + participio…",
    ],
    model: [
      "Cuando en septiembre la asociación decidió recuperar el antiguo lavadero del barrio, casi nadie creía que lo veríamos abierto en primavera. Esperábamos que el ayuntamiento cediera el edificio en un mes y tardó tres. Habiendo firmado por fin el convenio en diciembre, nos pusimos a limpiar los fines de semana con una veintena de voluntarios, y en enero empezamos a reparar el tejado con la ayuda de un albañil jubilado que vive en la calle de al lado.",
      "Desde entonces venimos trabajando todos los sábados. El tejado está terminado y tenemos pintadas las paredes de la sala grande, pero las pilas de piedra van quedando más despacio de lo previsto: la restauradora acaba de terminar la tercera y la semana que viene vuelve a ponerse con la cuarta. Por lo visto, alguien las habría tapado con cemento en los años setenta, y quitarlo sin dañar la piedra exige paciencia. Aun trabajando por turnos, no llegaremos a abrir en marzo.",
      "En el barrio se dice que el proyecto está parado. Que se diga no significa que sea verdad: llevamos restauradas tres pilas de seis y el resto del edificio estará listo en abril. Lo que sí necesitamos son voluntarios que puedan venir entre semana, aunque sea una hora. De haber tenido más manos en otoño, habríamos ganado un mes entero. Quien quiera sumarse, que pase cualquier sábado por la mañana. Cansados pero contentos, seguimos adelante: bien terminado, el lavadero será la sala de actividades que el barrio lleva años pidiendo.",
    ],
    checklist: [
      "Cada perífrasis muestra la perspectiva adecuada y no presento como terminado lo que sigue en curso.",
      "Los participios con «tener», «llevar», «dejar» y «estar» concuerdan; con «haber», son invariables.",
      "Ningún gerundio es de posterioridad ni especificativo, y cada uno tiene una lectura clara.",
      "Integro al menos cuatro recursos de las semanas 1 a 4 con el modo y el tiempo correctos.",
      "La crónica tiene al menos tres párrafos ordenados en el tiempo.",
    ],
    words: [240, 340],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Balance de un proyecto en marcha",
        prompt: "Presenta durante cuatro minutos el estado de un proyecto en marcha (tuyo o el taller de esta semana) ante el grupo que lo financia. Explica qué está terminado, qué va avanzando, qué ha habido que repetir y cuánto falta. Incluye una expectativa del principio, un problema con su conjetura y un plan para dos escenarios.",
        prep: [
          "Divide una hoja en tres columnas: hecho, en curso, pendiente. Escribe al menos dos perífrasis en cada una.",
          "Prepara una frase con «esperábamos que…» y una conjetura con «habría + participio».",
          "Anota un plan con «en caso de que…» y otro con un gerundio condicional.",
        ],
        seconds: 240,
        model: "Empiezo por lo que está terminado: tenemos pintadas todas las caras y el tejado está listo. Lo que va más despacio es la figura central. En enero esperábamos que el corcho llegara a tiempo, pero llegó tarde y con dos bloques rotos; alguien los habría golpeado al cargarlos. Lorena acaba de terminar los ojos y vuelve a ponerse con la boca. En caso de que siga lloviendo, pintaremos dentro. Y trabajando dos noches más por semana, recuperaríamos el retraso.",
        selfCheck: [
          "Distingo con perífrasis lo hecho, lo que está en curso y lo pendiente.",
          "Integro al menos tres recursos de las semanas 1 a 4.",
          "Pronuncio las perífrasis sin pausa interna y los gerundios con pronombres con el acento en su sitio.",
        ],
      },
      {
        title: "Negociar un plazo",
        prompt: "El presidente de la comisión te llama preocupado: «Me han dicho que no llegáis y quiero la falla montada el día 13». Escúchalo, pregúntale de dónde ha sacado la información, explica el estado real con datos y negocia un plazo realista con una condición.",
        prep: [
          "Prepara dos preguntas sobre su fuente y sus prioridades.",
          "Ten a mano «llevamos + participio», «que lo digan no significa que…» y «siempre que…».",
        ],
        seconds: 180,
        model: "Entiendo tu preocupación. ¿Quién te ha dicho que no llegamos? ¿Lo has hablado con alguien del taller? Que lo digan en el casal no significa que sea así: llevamos pintados catorce ninots y tenemos lista la estructura. El día 13 es muy justo, pero el 14 por la mañana es posible, siempre que la comisión nos pague dos noches de grúa. ¿Lo cerramos así?",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Doy datos de progreso precisos con perífrasis.",
          "Propongo un plazo con una condición en subjuntivo.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu línea temporal del proyecto y una frase con gerundio de la que no estés seguro.",
    cards: [
      {
        move: "Informa",
        task: "Informa a tu profesor del estado de un proyecto real con cuatro perífrasis distintas y pídele que te pregunte por los detalles.",
        phrases: ["Llevo… y tengo…", "Va quedando…, pero vuelvo a…"],
      },
      {
        move: "Corrige",
        task: "Lleva tres frases de periódico o de internet con gerundio y discute con tu profesor si alguna es de posterioridad o especificativa.",
        phrases: ["¿Este gerundio es posterior?", "¿Sería mejor una relativa?"],
      },
      {
        move: "Integra",
        task: "Cuenta en dos minutos un problema de tu proyecto usando una expectativa pasada, una concesión y una conjetura; tu profesor marca cada recurso.",
        phrases: ["Esperaba que…", "Aunque…", "Alguien habría…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale si «estar por + infinitivo» o «andar + gerundio» se usan igual en su variedad y en otras que conozca.",
        phrases: ["¿En tu país se dice «está por llover»?", "¿«Anda diciendo» suena crítico?"],
      },
    ],
    bring: "Tu línea temporal, la crónica revisada y, si quieres, la grabación del balance.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase informa de un progreso parcial que continúa?",
        options: [
          "Hemos restaurado tres pilas.",
          "Las tres pilas están restauradas.",
          "Llevamos restauradas tres pilas de seis.",
        ],
        answer: 2,
        why: "«Llevar + participio» implica que el trabajo sigue.",
      },
      {
        type: "choice",
        q: "«Saliendo del taller, Amparo vio que llovía.» ¿Qué lectura tiene el gerundio?",
        options: ["tiempo: cuando salía", "condición: si salía", "concesión: aunque salía"],
        answer: 0,
        why: "Con un hecho pasado, el gerundio periférico indica aquí simultaneidad.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué perspectiva de la acción expresa?",
        options: [
          "Una acción que va a empezar de inmediato.",
          "Un proceso que empezó antes y continúa hasta ahora.",
          "Una acción que acaba de terminar.",
        ],
        answer: 1,
        why: "«Venir + gerundio» conecta un proceso iniciado antes con el presente.",
        audio: "Venimos ensayando el espectáculo desde octubre, y todavía nos falta el final.",
        voice: "es-VE-f",
      },
      {
        type: "gap",
        q: "Ya tengo ___ (escribir) las invitaciones; mañana las mando.",
        answers: [["escritas"]],
        hint: "«Tener + participio» concuerda con el objeto, que es femenino plural.",
        why: "Participio irregular de «escribir», concordado con «invitaciones».",
      },
      {
        type: "gap",
        q: "En enero esperábamos que el ayuntamiento nos ___ (ceder) el local antes de marzo.",
        answers: [["cediera", "cediese"]],
        hint: "Recuperación de G167: marco pasado y relación posterior.",
        why: "Imperfecto de subjuntivo tras «esperábamos que».",
      },
      {
        type: "error",
        sentence: "El incendio empezó a las diez, siendo controlado por los bomberos a medianoche.",
        answers: ["El incendio empezó a las diez y fue controlado por los bomberos a medianoche.", "El incendio empezó a las diez y los bomberos lo controlaron a medianoche."],
        why: "Gerundio de posterioridad: se sustituye por «y» + verbo conjugado.",
      },
      {
        type: "error",
        sentence: "Aunque llueva ayer, la cabalgata salió a su hora.",
        answers: ["Aunque llovió ayer, la cabalgata salió a su hora.", "Aunque ayer llovió, la cabalgata salió a su hora."],
        why: "Recuperación de G170: un hecho pasado real que se informa va en indicativo; el presente de subjuntivo no encaja con «ayer».",
      },
      {
        type: "order",
        words: ["Aun", "terminados,", "los", "ninots", "necesitan", "una", "capa", "de", "barniz."],
        why: "Participio predicativo concordado con valor concesivo.",
      },
      {
        type: "open",
        prompt: "Escribe en 80–100 palabras el parte de un día de trabajo en un proyecto (real o inventado) con dos perífrasis de gerundio, dos de participio, un gerundio condicional y un recurso de las semanas 1 a 4. Subraya mentalmente cada recurso al revisarlo.",
        model: "Hoy hemos avanzado bastante. Llevamos montadas cuatro de las seis estanterías de la biblioteca y tenemos clasificados los libros infantiles. La sala va quedando acogedora, aunque la luz de la entrada sigue fallando. Lucía viene diciendo desde el lunes que el electricista no vendrá, y por lo visto tiene razón: no contesta. Llamando a otro mañana temprano, terminaríamos la instalación el viernes. Cansados, cerramos a las nueve con la sensación de que, esta vez, sí llegamos.",
        checklist: [
          "Incluyo dos perífrasis de gerundio y dos de participio con la concordancia correcta.",
          "El gerundio condicional va con un resultado futuro o hipotético.",
          "Integro al menos un recurso de las semanas 1 a 4.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Muestro una acción por dentro con perífrasis de duración, fase, reiteración y resultado.",
      "Distingo lo hecho, lo que está en curso y lo disponible, con participios bien concordados.",
      "Interpreto y uso el gerundio de modo, tiempo, causa, condición y concesión, y evito el de posterioridad y el especificativo.",
      "Integro en un relato la concordancia y el modo, las relativas y concesivas, las condiciones y la certeza de las semanas 1 a 4.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Lo hecho, lo que sigue y lo disponible» y reconstrúyela con el verbo «revisar».",
      "Dentro de una semana, busca en la prensa dos gerundios dudosos y reescríbelos si son de posterioridad o especificativos.",
      "En la próxima clase, lee tu crónica y pide a tu profesor que marque los recursos de las semanas 1 a 4 que reconozca.",
    ],
  },
  related: [
    { path: "/la-accion-vista-desde-dentro", label: "Clase: Aspecto y perífrasis: duración, fase, reiteración" },
    { path: "/gramatica/valores-interpretativos-del-gerundio-y-participio", label: "Clase: Valores interpretativos del gerundio y participio" },
  ],
};
