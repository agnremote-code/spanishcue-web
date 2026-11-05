import type { Module } from "../../types";

/**
 * B2 · semana 7 · Autoestudio espejo de G139 (temporales con subjuntivo para
 * futuro incierto) y G140 (finales con subjuntivo). Repaso autónomo con la
 * preparación de un simulacro de sismo en una escuela de San Juan.
 * Personas y escuela son ficticias. Audio mediante síntesis.
 */
export const b2w07: Module = {
  id: "b2-07",
  level: "b2",
  week: 7,
  kind: "core",
  title: "Cuando suene la alarma: planes inciertos y medidas con propósito",
  subtitle: "Repaso de las temporales con subjuntivo para hablar de un futuro incierto y de las finales con «para que», «con el fin de que», «sin que» y «no vaya a ser que»",
  stop: { place: "San Juan", country: "Argentina" },
  minutes: 120,
  newObjectives: [
    "b2.gram.g139",
    "b2.gram.g140",
    "b2.voc.w07-sismo-simulacro",
    "b2.pron.w07-bloques-conectores",
    "b2.lis.w07-reunion-simulacro",
    "b2.read.w07-boletin-escuela",
    "b2.wri.w07-correo-familias",
    "b2.spk.w07-explicar-protocolo",
    "b2.fun.w07-planificar-prevenir",
    "b2.disc.w07-secuencia-finalidad",
  ],
  reviewObjectives: ["b2.gram.g137","b2.gram.g138","b2.voc.w06-agua-vinedo","b2.pron.w06-modo-al-oido","b2.lis.w06-reunion-finca","b2.read.w06-columna-agua","b2.wri.w06-carta-asamblea","b2.spk.w06-sostener-postura","b2.fun.w06-conceder-mantener","b2.disc.w06-orden-registro"],
  prerequisites: ["b2-06"],
  goal: {
    canDo: "Puedo explicar qué pasará cuando ocurra algo que todavía no es seguro y para qué sirve cada medida de un plan, eligiendo entre subjuntivo e infinitivo según el sujeto y el momento.",
    steps: [
      "Repasa en la teoría cuándo un conector temporal pide subjuntivo y cómo cambia el tiempo cuando hablas desde el pasado.",
      "Repasa las finales: «para que», «con el fin de que», «sin que», «no vaya a ser que» y cuándo basta el infinitivo.",
      "Escucha la reunión que prepara un simulacro de sismo y lee el boletín de la escuela.",
      "Escribe un correo a las familias, revísalo y explica el protocolo en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste cómo hablar de lo que pasará cuando ocurra algo incierto y cómo explicar para qué se hace algo. Aquí lo repasas en San Juan, una ciudad que se reconstruyó después del terremoto de 1944 y donde los simulacros forman parte de la vida escolar. La pregunta clave es doble: ¿ya pasó o todavía no?, ¿quién hace la acción?",
    parts: [
      {
        heading: "¿Ya pasó, pasa siempre o todavía no?",
        body: [
          "Los conectores temporales («cuando», «en cuanto», «tan pronto como», «apenas», «una vez que», «hasta que», «después de que», «cada vez que») no deciden el modo por sí solos. Decide el momento. Si cuentas algo que ya ocurrió o algo que pasa siempre, usas indicativo. Si hablas de algo futuro que todavía no ha ocurrido, usas subjuntivo, aunque estés casi seguro de que pasará.",
          "Lo mismo vale para «siempre que» y «mientras»: con indicativo hablan de tiempo («cada vez que», «durante»); con subjuntivo pueden expresar una condición («con tal de que»). «Siempre que nos den el permiso» no significa «cada vez», sino «si nos lo dan».",
        ],
        table: {
          caption: "El mismo conector en tres momentos",
          head: ["Momento", "Modo", "Ejemplo"],
          rows: [
            ["Hecho pasado", "indicativo", "En cuanto sonó la sirena, los chicos salieron al patio."],
            ["Costumbre", "indicativo", "Cada vez que tiembla, la perra se esconde debajo de la mesa."],
            ["Futuro todavía no ocurrido", "subjuntivo", "En cuanto suene la sirena, salimos al patio."],
          ],
        },
        examples: [
          { es: "Una vez que estemos en el patio, la preceptora pasará lista.", note: "Futuro: «una vez que» + presente de subjuntivo." },
          { es: "No volvemos a las aulas hasta que la directora dé la señal.", note: "«Hasta que» con futuro: subjuntivo." },
          { es: "Mientras dure el simulacro, nadie usa el ascensor.", note: "«Mientras» temporal con futuro: subjuntivo." },
        ],
        mistakes: [
          {
            wrong: "Cuando terminará el simulacro, volveremos a clase.",
            right: "Cuando termine el simulacro, volveremos a clase.",
            why: "Después de un conector temporal, el futuro no se expresa con futuro de indicativo, sino con presente de subjuntivo.",
          },
        ],
        tip: "Pregúntate: ¿esto ya ocurrió o es una costumbre? Si la respuesta es no, subjuntivo.",
      },
      {
        heading: "El futuro visto desde el pasado y el infinitivo",
        body: [
          "Cuando cuentas lo que alguien prometió o planeó en el pasado, el futuro de aquel momento pasa al imperfecto de subjuntivo: «Nos dijeron que nos avisarían en cuanto llegaran los cascos». No importa si después ocurrió o no: desde el momento de la promesa, todavía era futuro.",
          "«Antes de que» va siempre con subjuntivo, también con hechos pasados, porque lo que viene después todavía no había ocurrido: «Salimos antes de que empezara la réplica». Si el sujeto es el mismo, usa infinitivo: «antes de salir», «después de revisar», «al llegar», «nada más sonar». En «no salimos hasta que no nos avisen», el segundo «no» no niega nada: equivale a «hasta que nos avisen».",
        ],
        table: {
          caption: "Desde hoy y desde el pasado",
          head: ["Desde hoy", "Desde el pasado"],
          rows: [
            ["Te llamo en cuanto lleguen los cascos.", "Me dijo que me llamaría en cuanto llegaran los cascos."],
            ["Revisaremos la escalera antes de que entren los chicos.", "Revisamos la escalera antes de que entraran los chicos."],
            ["No abrimos el portón hasta que la policía corte la calle.", "No abrieron el portón hasta que la policía cortó la calle."],
          ],
        },
        mistakes: [
          {
            wrong: "Antes de que salgamos, nosotros apagamos las luces.",
            right: "Antes de salir, apagamos las luces.",
            why: "Con el mismo sujeto, lo natural es el infinitivo: «antes de salir».",
          },
          {
            wrong: "Prometió que nos escribiría cuando tenga los resultados.",
            right: "Prometió que nos escribiría cuando tuviera los resultados.",
            why: "Desde el pasado, el futuro de aquel momento va en imperfecto de subjuntivo.",
          },
        ],
      },
      {
        heading: "Para qué: «para que», «con el fin de que», «a fin de que»",
        body: [
          "Para explicar una finalidad, mira quién hace cada acción. Si el sujeto es el mismo, usa infinitivo: «Practicamos para salir rápido». Si cambia, usa «que» + subjuntivo: «Practicamos para que los chicos salgan rápido».",
          "El tiempo del subjuntivo sigue al verbo principal. Con presente, futuro o imperativo, presente de subjuntivo. Con un pasado, imperfecto de subjuntivo: «Pintaron flechas en el piso para que nadie se perdiera». En textos formales encontrarás «con el fin de que», «a fin de que» y «con vistas a» + infinitivo. «De manera que» y «de modo que» con subjuntivo expresan finalidad; con indicativo, consecuencia.",
        ],
        table: {
          caption: "Finalidad según el sujeto y el registro",
          head: ["Estructura", "Cuándo", "Ejemplo"],
          rows: [
            ["para + infinitivo", "mismo sujeto", "Llegamos temprano para preparar el botiquín."],
            ["para que + subjuntivo", "sujetos distintos", "Dejamos la puerta abierta para que entre la brigada."],
            ["con el fin de que / a fin de que + subjuntivo", "registro formal", "Se enviará un aviso a fin de que las familias no se alarmen."],
            ["de manera que + subjuntivo", "finalidad sobre el resultado", "Pongan los bancos de manera que el pasillo quede libre."],
          ],
        },
        examples: [
          { es: "La escuela compró radios para que los preceptores se comuniquen sin celular.", note: "Sujetos distintos: subjuntivo." },
          { es: "El año pasado marcaron la salida con cinta verde para que los de primer grado la vieran.", note: "Verbo principal en pasado: imperfecto de subjuntivo." },
        ],
        mistakes: [
          {
            wrong: "Vine temprano para que yo abra el portón.",
            right: "Vine temprano para abrir el portón.",
            why: "El sujeto es el mismo: «para» + infinitivo.",
          },
        ],
      },
      {
        heading: "Lo que no pasa y lo que se evita: «sin que», «no vaya a ser que»",
        body: [
          "«Sin que» + subjuntivo dice que algo ocurre y otra cosa no: «Evacuamos el edificio sin que nadie se lastimara». Como «sin» ya niega, se combina con «nadie», «nada» o «ningún», no con «alguien» o «algo». Con el mismo sujeto, otra vez infinitivo: «salieron sin correr».",
          "«No vaya a ser que» (y, en pasado, «no fuera a ser que») presenta una precaución: haces algo por si acaso ocurre lo que temes. En la conversación también aparece «que» + subjuntivo después de una orden: «Habla más alto, que te oigan los de atrás».",
        ],
        examples: [
          { es: "Lleven una linterna, no vaya a ser que se corte la luz.", note: "Precaución: «no vaya a ser que» + presente de subjuntivo." },
          { es: "Cerramos el gas sin que ningún alumno tuviera que acercarse a la cocina.", note: "«Sin que» + «ningún»: nadie se acercó." },
          { es: "Bajen por la escalera de la derecha, que no se junten los dos grupos.", note: "«Que» final tras una orden: registro oral." },
        ],
        mistakes: [
          {
            wrong: "Salimos sin que alguien se diera cuenta.",
            right: "Salimos sin que nadie se diera cuenta.",
            why: "La negación ya está en «sin»: se usa «nadie».",
          },
        ],
        tip: "Si puedes añadir «por si acaso» delante, «no vaya a ser que» encaja.",
      },
    ],
  },
  grammar: {
    intro: "Decide primero el momento (¿ya pasó o no?) y después el sujeto (¿es el mismo?). Al final, reformula con libertad.",
    exercises: [
      {
        id: "b2-07-gramatica-momento",
        type: "context",
        prompt: "Lee la situación y elige la frase adecuada.",
        items: [
          {
            context: "La directora explica qué pasará el jueves, durante el simulacro.",
            q: "¿Qué dice?",
            options: [
              "Apenas suena el timbre largo, los grupos bajan por la escalera.",
              "Apenas suene el timbre largo, los grupos bajarán por la escalera.",
              "Apenas sonará el timbre largo, los grupos bajarán por la escalera.",
            ],
            answer: 1,
            why: "Hecho futuro que todavía no ha ocurrido: «apenas» + subjuntivo.",
          },
          {
            context: "Un abuelo recuerda cómo reaccionaba su familia en los años setenta.",
            q: "¿Qué frase describe una costumbre?",
            options: [
              "Cada vez que temblaba, mi madre abría la puerta de la calle.",
              "Cada vez que temblara, mi madre abría la puerta de la calle.",
              "Cada vez que temblará, mi madre abría la puerta de la calle.",
            ],
            answer: 0,
            why: "Costumbre del pasado: indicativo.",
          },
          {
            context: "En marzo, el municipio prometió mandar a un técnico. Ahora lo cuentas.",
            q: "¿Cómo lo cuentas?",
            options: [
              "Nos aseguraron que el técnico vendría en cuanto terminará la obra.",
              "Nos aseguraron que el técnico vendría en cuanto termina la obra.",
              "Nos aseguraron que el técnico vendría en cuanto terminara la obra.",
            ],
            answer: 2,
            why: "Futuro visto desde el pasado: imperfecto de subjuntivo.",
          },
          {
            context: "El portero quiere que la brigada pueda entrar sin problemas.",
            q: "¿Qué frase expresa bien la finalidad?",
            options: [
              "Dejo el portón sin llave para entrar la brigada.",
              "Dejo el portón sin llave para que entre la brigada.",
              "Dejo el portón sin llave para que entra la brigada.",
            ],
            answer: 1,
            why: "Sujetos distintos (yo / la brigada): «para que» + subjuntivo.",
          },
        ],
      },
      {
        id: "b2-07-gramatica-formas",
        type: "gap",
        prompt: "Completa con la forma adecuada del verbo entre paréntesis: subjuntivo, indicativo o infinitivo.",
        items: [
          { q: "Tan pronto como ___ (llegar) los bomberos, les daremos el plano de la escuela.", answers: [["lleguen"]], why: "Futuro: «tan pronto como» + subjuntivo." },
          { q: "El año pasado, nada más ___ (sonar) la alarma, todos se agacharon.", answers: [["sonar"]], why: "«Nada más» + infinitivo." },
          { q: "La profesora nos pidió que esperáramos en fila hasta que ella ___ (volver).", answers: [["volviera", "volviese"]], why: "Desde el pasado, el futuro de aquel momento: imperfecto de subjuntivo." },
          { q: "Colgamos los carteles bien altos a fin de que todos los ___ (ver).", answers: [["vean"]], why: "Finalidad con sujeto distinto y verbo principal en presente." },
          { q: "Ensayamos tres veces para ___ (salir) en menos de dos minutos.", answers: [["salir"]], why: "Mismo sujeto: «para» + infinitivo." },
          { q: "Desconectaron la estufa, no fuera a ser que ___ (caerse) con el temblor.", answers: [["se cayera", "se cayese"]], why: "Precaución en pasado: «no fuera a ser que» + imperfecto de subjuntivo." },
        ],
      },
      {
        id: "b2-07-gramatica-tipo",
        type: "classify",
        prompt: "Clasifica cada frase: ¿expresa un momento o una finalidad?",
        categories: ["Momento (temporal)", "Finalidad o precaución"],
        items: [
          { text: "Una vez que estén todos en el patio, cerramos el edificio.", cat: 0, why: "«Una vez que» sitúa una acción en el tiempo." },
          { text: "Repartimos silbatos para que los chicos puedan pedir ayuda.", cat: 1, why: "«Para que» indica el objetivo." },
          { text: "Lleven agua, no vaya a ser que haga mucho calor en el patio.", cat: 1, why: "Precaución ante un riesgo." },
          { text: "Antes de que empiece el simulacro, revisaremos las salidas.", cat: 0, why: "«Antes de que» ordena las acciones." },
          { text: "Movimos los armarios de manera que no bloqueen la puerta.", cat: 1, why: "«De manera que» + subjuntivo: finalidad." },
          { text: "Mientras dure la alerta, nadie sale del patio.", cat: 0, why: "«Mientras» indica duración." },
        ],
      },
      {
        id: "b2-07-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error. Corrígelo.",
        items: [
          {
            sentence: "En cuanto tendremos los cascos nuevos, los repartiremos por aula.",
            answers: ["En cuanto tengamos los cascos nuevos, los repartiremos por aula."],
            why: "Futuro tras «en cuanto»: presente de subjuntivo.",
          },
          {
            sentence: "La brigada revisó el techo para que los alumnos entraban sin peligro.",
            answers: ["La brigada revisó el techo para que los alumnos entraran sin peligro.", "La brigada revisó el techo para que los alumnos entrasen sin peligro."],
            why: "Finalidad: siempre subjuntivo; con verbo principal en pasado, imperfecto.",
          },
          {
            sentence: "Antes de que salimos del aula, apagamos las computadoras.",
            answers: ["Antes de salir del aula, apagamos las computadoras."],
            why: "«Antes de que» nunca lleva indicativo; con el mismo sujeto, mejor el infinitivo.",
          },
          {
            sentence: "Bajamos la escalera sin que algo se cayera.",
            answers: ["Bajamos la escalera sin que nada se cayera.", "Bajamos la escalera sin que se cayera nada."],
            why: "Con «sin que» se usa «nada», no «algo».",
          },
        ],
      },
      {
        id: "b2-07-gramatica-reformular",
        type: "open",
        prompt: "Reformula cada texto con la estructura indicada. Compara con el modelo y revisa la lista: puede haber otras soluciones correctas.",
        items: [
          {
            prompt: "Texto de partida: «Primero llegan los cascos. Después los repartimos.» Reformúlalo como un plan futuro en una sola frase con «en cuanto» o «tan pronto como».",
            model: "En cuanto lleguen los cascos, los repartiremos.",
            checklist: [
              "El conector temporal va con presente de subjuntivo.",
              "La acción principal está en futuro o en presente con valor futuro.",
              "Otro conector de inmediatez también vale: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «La vicedirectora nos dijo: “Les mando el plano cuando esté listo”.» Cuéntalo hoy, desde el pasado.",
            model: "La vicedirectora nos dijo que nos mandaría el plano cuando estuviera listo.",
            checklist: [
              "Uso condicional para la promesa.",
              "El verbo tras «cuando» va en imperfecto de subjuntivo.",
              "Puedo usar «prometió» u otro verbo de lengua: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «Pusimos una cinta en el piso. Así los chicos de primer grado no se perdieron y nadie los tuvo que buscar.» Reformúlalo en una frase con «para que» y otra con «sin que».",
            model: "Pusimos una cinta en el piso para que los chicos de primer grado no se perdieran. Así salieron sin que nadie los tuviera que buscar.",
            checklist: [
              "Uso imperfecto de subjuntivo porque el verbo principal está en pasado.",
              "Combino «sin que» con «nadie».",
              "Puedo reorganizar las dos frases de otra forma: no es una respuesta única.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de sismos, de evacuación y de un simulacro en una escuela.",
    groups: [
      {
        title: "El sismo y sus efectos",
        items: [
          { es: "el sismo", note: "movimiento de la tierra; en Argentina también «temblor» si es leve" },
          { es: "la réplica", note: "temblor más débil que sigue a uno fuerte" },
          { es: "el epicentro", note: "punto de la superficie que está sobre el origen del sismo" },
          { es: "la construcción antisísmica", note: "edificio diseñado para resistir terremotos" },
          { es: "agacharse, cubrirse y sujetarse", note: "las tres acciones básicas durante un sismo" },
          { es: "la alerta temprana", note: "aviso que llega unos segundos antes de las ondas fuertes" },
        ],
      },
      {
        title: "Evacuación y organización",
        items: [
          { es: "el simulacro", note: "ensayo de lo que se hace en una emergencia" },
          { es: "el punto de encuentro", note: "lugar seguro donde se reúne cada grupo" },
          { es: "la vía de evacuación", note: "camino marcado para salir del edificio" },
          { es: "pasar lista", note: "nombrar a cada persona para comprobar que está" },
          { es: "la brigada escolar", note: "grupo de adultos o alumnos con tareas en la emergencia" },
          { es: "la mochila de emergencia", note: "bolso con agua, linterna, botiquín y documentos" },
          { es: "el botiquín", note: "caja con material de primeros auxilios" },
          { es: "cundir el pánico", note: "extenderse el miedo descontrolado en un grupo" },
        ],
      },
    ],
    exercises: [
      {
        id: "b2-07-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la réplica", right: "temblor más débil que sigue a uno fuerte" },
          { left: "el punto de encuentro", right: "lugar seguro donde se reúne cada grupo" },
          { left: "pasar lista", right: "comprobar que está cada persona" },
          { left: "la vía de evacuación", right: "camino marcado para salir del edificio" },
          { left: "cundir el pánico", right: "extenderse el miedo descontrolado" },
          { left: "la alerta temprana", right: "aviso que llega segundos antes de las ondas fuertes" },
        ],
      },
      {
        id: "b2-07-lexico-uso",
        type: "gap",
        prompt: "Completa con la palabra adecuada.",
        bank: ["mochila de emergencia", "simulacro", "botiquín", "réplica"],
        items: [
          { q: "El ___ de este jueves empezará sin aviso previo para los alumnos.", answers: [["simulacro"]] },
          { q: "Después del sismo fuerte, nadie volvió a entrar, no fuera a ser que hubiera una ___.", answers: [["réplica"]] },
          { q: "Cada aula tendrá un ___ para que los preceptores puedan atender heridas leves.", answers: [["botiquín"]] },
          { q: "En casa preparamos la ___ con agua, linterna y fotocopias de los documentos.", answers: [["mochila de emergencia"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Los conectores como un solo bloque",
    explanation: [
      "Los conectores de varias palabras se pronuncian como una sola unidad, sin pausas en medio: «en-cuan-to», «tan-pron-to-co-mo», «a-fin-de-que», «no-va-ya-a-ser-que». Si haces una pausa dentro del conector, quien escucha pierde el hilo y la frase suena leída.",
      "Además, las vocales iguales o parecidas se enlazan: en «no vaya a ser que» se oye casi «no-va-ya-ser-que», y en «una vez que estemos» se une la «e» de «que» con la de «estemos». La pausa natural llega al final de la subordinada, antes de la acción principal: «En cuanto suene la sirena | salimos».",
      "El audio usa la síntesis del navegador: sirve para percibir el ritmo, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Dónde no hay pausa y dónde sí",
      head: ["Sin pausa interna", "Pausa natural"],
      rows: [
        ["en cuanto suene", "En cuanto suene la sirena | salimos."],
        ["tan pronto como lleguen", "Tan pronto como lleguen | empezamos."],
        ["a fin de que no se asusten", "Avisamos antes | a fin de que no se asusten."],
        ["no vaya a ser que llueva", "Lleven paraguas | no vaya a ser que llueva."],
      ],
    },
    perceive: {
      id: "b2-07-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué forma verbal oyes. Fíjate en la terminación.",
      items: [
        {
          q: "¿Qué oyes después de «en cuanto»?",
          options: ["en cuanto suena: costumbre", "en cuanto suene: futuro"],
          answer: 1,
          why: "Se oye «suene», con «e» final: subjuntivo de futuro.",
          audio: "En cuanto suene la sirena, salimos al patio.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué oyes después de «cada vez que»?",
          options: ["cada vez que tiembla", "cada vez que tiemble"],
          answer: 0,
          why: "«Tiembla», con «a» final: costumbre en indicativo.",
          audio: "Cada vez que tiembla, el perro se esconde debajo de la cama.",
          voice: "es-AR-m",
        },
        {
          q: "¿Qué forma oyes?",
          options: ["para que lleguen", "para que llegaran"],
          answer: 1,
          why: "Se oye «llegaran», más larga: imperfecto de subjuntivo tras un verbo en pasado.",
          audio: "Abrimos los dos portones para que llegaran antes al punto de encuentro.",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué conector oyes?",
          options: ["no vaya a ser que", "no fuera a ser que"],
          answer: 0,
          why: "«Vaya»: precaución en presente, con las vocales enlazadas.",
          audio: "Lleven una linterna, no vaya a ser que se corte la luz.",
          voice: "es-AR-f",
        },
      ],
    },
    produce: [
      { text: "En cuanto suene la sirena, nos agachamos debajo del banco.", tip: "Di «en cuanto suene la sirena» de un tirón y haz la pausa antes de «nos agachamos».", voice: "es-AR-f" },
      { text: "Tan pronto como estemos en el patio, la preceptora pasa lista.", tip: "«Tan pronto como» sin pausas; enlaza «como estemos».", voice: "es-AR-m" },
      { text: "Les mandamos este aviso a fin de que ningún chico se asuste.", tip: "Une «a fin de que» en un solo bloque.", voice: "es-MX-f" },
      { text: "Cierren la llave del gas, no vaya a ser que haya una pérdida.", tip: "Enlaza «vaya a»: casi «vaya ser».", voice: "es-AR-f" },
    ],
    spelling: "En el subjuntivo, algunos verbos cambian la grafía para mantener el sonido: «llegar» → «lleguen», «sacar» → «saquen», «empezar» → «empiecen».",
  },
  listening: {
    title: "Reunión de preparación del simulacro",
    context: "En una escuela primaria de San Juan, la directora Silvia Ortiz se reúne con Hugo, voluntario de Defensa Civil, y con Mariana, maestra nueva que llegó de Ciudad de México. Preparan el simulacro del jueves. Escucha primero sin transcripción. Las voces son sintéticas.",
    speakers: [
      { id: "s", name: "Silvia", voice: "es-AR-f", role: "Directora de la escuela" },
      { id: "h", name: "Hugo", voice: "es-AR-m", role: "Voluntario de Defensa Civil" },
      { id: "m", name: "Mariana", voice: "es-MX-f", role: "Maestra de tercer grado" },
    ],
    script: [
      { speaker: "s", text: "Gracias por venir. El simulacro es el jueves y quiero que esta vez salga mejor que en abril. Hugo, ¿cómo lo organizamos?" },
      { speaker: "h", text: "Igual que siempre, con dos cambios. En cuanto suene la sirena larga, los chicos se agachan, se cubren y se sujetan. No salen hasta que deje de sonar, aunque tarde un minuto. Una vez que esté todo en silencio, cada maestra abre la puerta y sale con su grupo." },
      { speaker: "m", text: "En México hacíamos casi lo mismo. Lo que me preocupa son los de primer grado: en mi otra escuela, el año pasado, se pusieron a llorar antes de que empezara la sirena, solo por los nervios." },
      { speaker: "s", text: "Por eso este año vamos a avisar a las familias con tiempo, para que hablen con los chicos en casa. Y la maestra de primero va a contar un cuento sobre los sismos, a fin de que nadie se asuste." },
      { speaker: "h", text: "Muy bien. El otro cambio es el punto de encuentro. En abril los grupos se juntaron en el centro del patio, y eso es un error: si cayera algo del techo del gimnasio, quedarían demasiado cerca. Pinté un rectángulo verde junto a la cancha para que cada grupo sepa dónde ponerse." },
      { speaker: "m", text: "¿Y si un chico está en el baño cuando suene la sirena?" },
      { speaker: "h", text: "Se queda donde está, se agacha junto a la pared y espera. El preceptor revisa los baños antes de salir, sin que eso retrase a los demás grupos." },
      { speaker: "s", text: "Perfecto. Mariana, ¿podrías llevar el botiquín de tu piso? No vaya a ser que alguien se tropiece en la escalera." },
      { speaker: "m", text: "Claro. Lo dejo en la puerta del aula, de manera que lo pueda agarrar al salir." },
      { speaker: "h", text: "Y apenas estén todos en el rectángulo, pasan lista y me levantan el cartel verde. Tan pronto como tenga los once carteles, damos por terminado el simulacro." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin transcripción. ¿De qué hablan y qué cambia este año?",
        exercise: {
          id: "b2-07-escucha-gist",
          type: "choice",
          prompt: "Reconstruye el sentido general.",
          items: [
            {
              q: "¿Cuál es el objetivo de la reunión?",
              options: [
                "Evaluar los daños de un sismo reciente.",
                "Preparar el simulacro del jueves y corregir lo que falló en abril.",
                "Presentar a la nueva maestra a las familias.",
              ],
              answer: 1,
              why: "Silvia lo dice al principio: quiere que esta vez salga mejor que en abril.",
            },
            {
              q: "¿Qué dos cambios propone Hugo?",
              options: [
                "Suprimir la sirena y salir por las ventanas.",
                "Hacer el simulacro sin avisar a las maestras.",
                "Preparar mejor a los más chicos y mover el punto de encuentro.",
              ],
              answer: 2,
              why: "Se habla de avisar a las familias y del nuevo rectángulo verde junto a la cancha.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "b2-07-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles del protocolo.",
          items: [
            {
              q: "¿Cuándo pueden salir los grupos del aula?",
              options: [
                "Una vez que la sirena deja de sonar y hay silencio.",
                "En cuanto empieza a sonar la sirena.",
                "Cuando llega Hugo a cada aula.",
              ],
              answer: 0,
              why: "«No salen hasta que deje de sonar… Una vez que esté todo en silencio…».",
            },
            {
              q: "¿Por qué el centro del patio no es un buen punto de encuentro?",
              options: [
                "Porque allí no se oye la sirena.",
                "Porque está lejos de las aulas.",
                "Porque queda cerca del techo del gimnasio.",
              ],
              answer: 2,
              why: "Si cayera algo del techo del gimnasio, los grupos quedarían demasiado cerca.",
            },
            {
              q: "¿Qué tiene que hacer un chico que está en el baño?",
              options: [
                "Correr al patio lo antes posible.",
                "Quedarse agachado junto a la pared y esperar.",
                "Volver al aula a buscar a su maestra.",
              ],
              answer: 1,
              why: "Hugo explica que se queda donde está y el preceptor revisa los baños.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en lo que expresa cada conector de la reunión. Responde y consulta la transcripción después.",
        exercise: {
          id: "b2-07-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con lo que expresa.",
          pairs: [
            { left: "en cuanto suene la sirena larga", right: "momento futuro inmediato: subjuntivo" },
            { left: "antes de que empezara la sirena", right: "anterioridad en un relato pasado" },
            { left: "a fin de que nadie se asuste", right: "finalidad en registro cuidado" },
            { left: "sin que eso retrase a los demás grupos", right: "algo que no debe ocurrir" },
            { left: "no vaya a ser que alguien se tropiece", right: "precaución por si acaso" },
          ],
          why: "Los temporales con futuro y todos los finales con sujeto distinto llevan subjuntivo.",
        },
      },
    ],
  },
  reading: {
    title: "Cuando la tierra se mueva, ya sabremos qué hacer",
    genre: "Artículo de boletín escolar",
    frame: "Artículo de la vicedirectora Laura Quiroga en el boletín mensual de una escuela primaria de San Juan. Escuela y personas son ficticias.",
    text: [
      "En San Juan, los abuelos todavía cuentan dónde estaban sus padres la noche del terremoto de 1944, y casi todas las familias tienen un recuerdo de algún temblor más reciente. Vivimos en una zona sísmica y no tiene sentido negarlo. Lo que sí podemos hacer es prepararnos, de manera que el miedo no decida por nosotros cuando llegue el momento.",
      "Con ese objetivo, el jueves 14 haremos el segundo simulacro del año. No anunciaremos la hora a los alumnos, porque un sismo tampoco avisa. Sí queremos avisarles a ustedes, las familias, para que conversen en casa con sus hijos y les expliquen que se trata de un ensayo. La experiencia nos dice que los chicos que han hablado del simulacro antes de vivirlo lo atraviesan con mucha más calma.",
      "El protocolo es sencillo. En cuanto suene la sirena larga, cada alumno se agachará junto a su banco, se cubrirá la cabeza y se sujetará a la pata. Nadie saldrá del aula hasta que la sirena deje de sonar. Una vez que haya silencio, la maestra abrirá la puerta y el grupo bajará por la vía de evacuación marcada con flechas, sin correr y sin hablar, a fin de que todos puedan oír las indicaciones.",
      "Este año hemos cambiado el punto de encuentro. En abril los grupos se reunieron en el centro del patio, demasiado cerca del gimnasio. Ahora cada grado tendrá su lugar en un rectángulo verde pintado junto a la cancha. Apenas esté allí, la maestra pasará lista y levantará un cartel verde si están todos o uno rojo si falta alguien, para que la brigada sepa al instante dónde buscar.",
      "Les pedimos también un pequeño esfuerzo en casa. Preparen una mochila de emergencia y acuerden con sus hijos un lugar de reunión, no vaya a ser que un sismo los sorprenda separados. Y si el jueves alguno vuelve un poco nervioso, escúchenlo antes de que se vaya a dormir.",
      "Ningún simulacro es perfecto, pero cada uno nos acerca a una respuesta rápida y tranquila. Cuando la tierra vuelva a moverse, y en San Juan sabemos que volverá a moverse, queremos que nuestros alumnos sepan exactamente qué hacer sin que el miedo los paralice.",
    ],
    glossary: [
      { es: "zona sísmica", note: "región donde los terremotos son frecuentes" },
      { es: "atravesar algo", note: "pasar por una situación, en especial difícil" },
      { es: "la pata", note: "cada una de las piezas en las que se apoya un mueble" },
    ],
    tasks: [
      {
        id: "b2-07-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el protocolo.",
        items: [
          {
            q: "¿Por qué no se anuncia la hora del simulacro a los alumnos?",
            options: [
              "Porque las maestras tampoco la conocen.",
              "Porque un sismo real no avisa.",
              "Porque la hora todavía no está decidida.",
            ],
            answer: 1,
            why: "Segundo párrafo: «un sismo tampoco avisa».",
          },
          {
            q: "¿Para qué sirven los carteles verde y rojo?",
            options: [
              "Para que la brigada sepa enseguida si falta algún alumno.",
              "Para indicar el camino de salida.",
              "Para separar a los grados por edades.",
            ],
            answer: 0,
            why: "Cuarto párrafo: «para que la brigada sepa al instante dónde buscar».",
          },
          {
            q: "¿Qué piden a las familias?",
            options: [
              "Que retiren a sus hijos antes del simulacro.",
              "Que acompañen a los grupos en el patio.",
              "Que preparen una mochila y acuerden un lugar de reunión.",
            ],
            answer: 2,
            why: "Quinto párrafo.",
          },
        ],
      },
      {
        id: "b2-07-lectura-orden",
        type: "order",
        prompt: "Ordena los pasos del protocolo tal como los describe el boletín.",
        items: [
          {
            words: ["Suena", "la", "sirena,", "se", "agachan,", "esperan", "el", "silencio", "y", "bajan."],
            why: "Primero la sirena, después agacharse; solo con silencio se sale.",
          },
          {
            words: ["Llegan", "al", "rectángulo,", "pasan", "lista", "y", "levantan", "el", "cartel."],
            why: "El cartel se levanta después de pasar lista en el punto de encuentro.",
          },
        ],
      },
      {
        id: "b2-07-lectura-interpretacion",
        type: "open",
        prompt: "Interpreta el texto con tus propias palabras.",
        items: [
          {
            prompt: "La vicedirectora escribe: «no tiene sentido negarlo». En 70–90 palabras, explica qué actitud propone ante el riesgo sísmico y si te parece adecuada para un boletín dirigido a familias. Usa al menos una temporal con subjuntivo y una final.",
            model: "Propone aceptar el riesgo sin dramatizarlo y convertir el miedo en preparación. Me parece adecuada, porque las familias de San Juan conocen los sismos y un tono alarmista no ayudaría. Además, da tareas concretas para que los padres se sientan útiles: hablar con los chicos, preparar una mochila. Cuando llegue el próximo temblor, esos chicos sabrán qué hacer, y eso tranquiliza más que cualquier promesa.",
            checklist: [
              "Explico la actitud que propone el texto.",
              "Doy mi valoración con una razón.",
              "Uso una temporal con subjuntivo y una final con «para que».",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el boletín une el momento de cada acción con su finalidad.",
      items: [
        { quote: "de manera que el miedo no decida por nosotros cuando llegue el momento", note: "«De manera que» + subjuntivo (finalidad) y «cuando» + subjuntivo (futuro)." },
        { quote: "Nadie saldrá del aula hasta que la sirena deje de sonar.", note: "«Hasta que» + subjuntivo marca el límite de una espera futura." },
        { quote: "a fin de que todos puedan oír las indicaciones", note: "Finalidad formal con sujeto distinto." },
        { quote: "no vaya a ser que un sismo los sorprenda separados", note: "Precaución: la medida se toma por si acaso." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, relación, una recuperación de la semana anterior y escritura breve.",
    exercises: [
      {
        id: "b2-07-orden",
        type: "order",
        prompt: "Ordena las palabras para formar la frase completa.",
        items: [
          { words: ["Te", "escribo", "en", "cuanto", "sepa", "la", "fecha."], why: "Futuro: «en cuanto» + subjuntivo." },
          { words: ["Salieron", "del", "edificio", "sin", "que", "nadie", "se", "lastimara."], why: "«Sin que» + «nadie» + imperfecto de subjuntivo." },
          { words: ["No", "volvemos", "a", "clase", "hasta", "que", "no", "llegue", "la", "brigada."], why: "«Hasta que no»: el segundo «no» es expletivo." },
        ],
      },
      {
        id: "b2-07-finalidades",
        type: "match",
        prompt: "Relaciona cada medida con su finalidad.",
        pairs: [
          { left: "Pintaron flechas en el pasillo", right: "para que nadie se equivocara de salida." },
          { left: "Revisaremos los baños antes de salir", right: "no vaya a ser que quede algún chico." },
          { left: "Enviamos el aviso con una semana de antelación", right: "a fin de que las familias lo comenten en casa." },
          { left: "Fijamos los armarios a la pared", right: "de manera que no se caigan con un temblor." },
        ],
      },
      {
        id: "b2-07-recuperacion",
        type: "gap",
        prompt: "Recupera la semana anterior: combina concesión, momento y finalidad.",
        items: [
          { q: "Aunque ___ (llover) el jueves, el simulacro se hará igual.", answers: [["llueva"]], why: "Posibilidad futura con «aunque»: subjuntivo (semana 6)." },
          { q: "Por muy tranquilos que ___ (estar) los chicos, conviene repasar el protocolo.", answers: [["estén"]], why: "«Por muy… que» + subjuntivo (semana 6)." },
          { q: "Si bien el edificio ___ (ser) antisísmico, siempre hay riesgos.", answers: [["es"]], why: "«Si bien» + indicativo (semana 6)." },
          { q: "Lo repetiremos en noviembre, a fin de que los nuevos alumnos ___ (aprender) el recorrido.", answers: [["aprendan"]], why: "Finalidad con sujeto distinto: subjuntivo." },
        ],
      },
      {
        id: "b2-07-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe un mensaje de 40–60 palabras a tu familia con el plan para el caso de que un sismo los sorprenda separados. Usa dos conectores temporales con subjuntivo.",
            model: "Si hay un sismo y no estamos juntos, nos agachamos donde estemos. En cuanto pase el temblor, nos mandamos un mensaje corto, porque las llamadas saturan la red. Una vez que estemos todos bien, nos encontramos en la plaza de la esquina. Nadie vuelve a casa hasta que revisemos el edificio.",
            checklist: [
              "Uso al menos dos conectores temporales con subjuntivo.",
              "Las acciones siguen un orden claro.",
              "El mensaje es breve y práctico.",
            ],
          },
          {
            prompt: "Explica en tres frases para qué sirven tres objetos de una mochila de emergencia. Usa «para + infinitivo», «para que + subjuntivo» y «no vaya a ser que».",
            model: "La linterna sirve para ver si se corta la luz. El silbato es para que los rescatistas nos encuentren. Llevamos fotocopias de los documentos, no vaya a ser que perdamos los originales.",
            checklist: [
              "Uso infinitivo cuando el sujeto es el mismo.",
              "Uso subjuntivo cuando el sujeto cambia.",
              "«No vaya a ser que» expresa una precaución.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un correo a las familias de una escuela para informar de un simulacro (200–280 palabras). Explica qué pasará en cada momento, para qué sirve cada medida y qué pueden hacer en casa.",
    context: "Eres coordinador o coordinadora de seguridad de la escuela. Algunas familias se alarmaron con el último simulacro y otras no sabían que se iba a hacer. Tu correo debe ser claro, tranquilo y práctico.",
    steps: [
      "Anota los pasos del simulacro en orden y, al lado de cada uno, su finalidad.",
      "Organiza el correo en tres párrafos: motivo y fecha, protocolo paso a paso, qué pueden hacer las familias.",
      "Usa al menos tres conectores temporales con subjuntivo y tres finales distintas.",
      "Revisa el correo: corrige cualquier futuro después de un conector temporal y comprueba el sujeto en cada «para».",
    ],
    useLanguage: [
      "en cuanto / tan pronto como / una vez que + subjuntivo",
      "hasta que / antes de que + subjuntivo",
      "para que / a fin de que + subjuntivo",
      "sin que + nadie, nada",
      "no vaya a ser que + subjuntivo",
      "el punto de encuentro, la vía de evacuación, pasar lista",
    ],
    model: [
      "Estimadas familias: el próximo martes 22 haremos un simulacro de sismo en toda la escuela. Les escribimos con tiempo para que puedan hablar del tema en casa y para que nadie se sorprenda si su hijo vuelve contando que «hubo un terremoto».",
      "El protocolo será el mismo que practicamos en las aulas. En cuanto suene la sirena larga, los chicos se agacharán junto al banco y se cubrirán la cabeza. Nadie se moverá hasta que la sirena se apague. Una vez que haya silencio, cada grupo saldrá con su maestra por la vía de evacuación marcada en el piso, sin correr, a fin de que todos oigan las indicaciones. Tan pronto como lleguen al punto de encuentro, junto a la cancha, la maestra pasará lista. Los preceptores revisarán los baños y la biblioteca, no vaya a ser que algún alumno se haya quedado adentro.",
      "Les pedimos dos cosas. Primero, que conversen con sus hijos antes del martes, de manera que vivan el simulacro como un ensayo y no como una amenaza. Segundo, que no vengan a buscarlos durante la mañana: el simulacro dura veinte minutos y las clases seguirán con normalidad. Cuando tengamos el informe final, se lo enviaremos por este mismo medio. Muchas gracias por su colaboración. Ana Bustos, coordinadora de seguridad.",
    ],
    checklist: [
      "Cada paso del protocolo tiene un momento claro.",
      "Uso subjuntivo tras los conectores temporales con valor futuro.",
      "Explico la finalidad de al menos tres medidas con estructuras distintas.",
      "Uso infinitivo cuando el sujeto de la finalidad es el mismo.",
      "El tono es tranquilo y la petición a las familias es concreta.",
    ],
    words: [200, 280],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Explicar el protocolo a un grupo nuevo",
        prompt: "Llegan a la escuela tres alumnos nuevos de otra provincia. Explícales qué tienen que hacer cuando suene la sirena, paso a paso, y para qué sirve cada paso.",
        prep: [
          "Ordena cinco pasos y anota un conector temporal para cada uno.",
          "Añade una finalidad a tres de los pasos.",
        ],
        seconds: 150,
        model: "Les cuento cómo es acá. En cuanto suene la sirena, se agachan junto al banco y se cubren la cabeza, para que no les caiga nada encima. No se levantan hasta que la sirena se apague. Una vez que haya silencio, salimos en fila, sin correr, a fin de que todos oigan a la maestra.",
        selfCheck: [
          "Uso subjuntivo después de cada conector temporal con valor futuro.",
          "Cada finalidad tiene el modo adecuado.",
          "Pronuncio los conectores como un solo bloque.",
        ],
      },
      {
        title: "Tranquilizar a una madre preocupada",
        prompt: "Una madre llama a la escuela: su hijo no quiere ir el día del simulacro. Escucha su preocupación, hazle dos preguntas para entender qué le pasa al niño y explícale qué hará la escuela para que el chico se sienta seguro.",
        prep: [
          "Prepara dos preguntas abiertas («¿Qué le dijo exactamente…?», «¿Le pasó algo parecido…?»).",
          "Prepara dos medidas con «para que» o «sin que».",
        ],
        seconds: 180,
        model: "Entiendo su preocupación. ¿Qué le dijo exactamente su hijo? ¿Vivió algún temblor fuerte? Le propongo esto: antes de que empiece el simulacro, la maestra le explicará qué va a pasar, para que no lo tome por sorpresa. Y si se pone nervioso, la preceptora lo acompañará sin que tenga que separarse de su grupo.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Propongo medidas concretas con finalidad.",
          "Mantengo un tono tranquilo.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva estas tarjetas a tu próxima clase para practicar planes y finalidades con tu profesor.",
    cards: [
      {
        move: "Cuéntale",
        task: "Cuéntale a tu profesor un plan personal que depende de algo incierto (un resultado, un permiso, un viaje) y qué harás en cuanto se resuelva.",
        phrases: ["En cuanto me confirmen…", "Una vez que tenga…"],
      },
      {
        move: "Pregúntale",
        task: "Pregúntale qué promesa le hicieron alguna vez «para cuando pasara algo» y si se cumplió.",
        phrases: ["¿Alguien te prometió algo para cuando…?", "¿Qué te dijo que haría en cuanto…?"],
      },
      {
        move: "Explica",
        task: "Explica tres medidas de seguridad de tu casa o tu trabajo y para qué sirven, una con «sin que».",
        phrases: ["Lo hacemos para que…", "…sin que nadie tenga que…"],
      },
    ],
    bring: "Tu correo revisado a las familias y una lista de tres planes que dependen de algo que todavía no sabes.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase habla de un futuro que todavía no ha ocurrido?",
        options: [
          "Cuando llega el inspector, todos se ponen nerviosos.",
          "Cuando llegó el inspector, todos se pusieron nerviosos.",
          "Cuando llegue el inspector, le mostraremos el plan de evacuación.",
        ],
        answer: 2,
        why: "«Cuando» + subjuntivo con valor futuro.",
      },
      {
        type: "choice",
        q: "Completa con la forma adecuada: «La directora repartió linternas para que los preceptores ___ revisar los sótanos».",
        options: ["pueden", "pudieran", "podrán"],
        answer: 1,
        why: "Finalidad con verbo principal en pasado: imperfecto de subjuntivo.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué expresa la frase?",
        options: [
          "Una costumbre que se repite cada vez que tiembla.",
          "Una promesa del pasado sobre un momento futuro.",
        ],
        answer: 1,
        why: "«Nos dijeron que… en cuanto terminaran»: futuro visto desde el pasado.",
        audio: "Nos dijeron que nos devolverían el gimnasio en cuanto terminaran la obra.",
        voice: "es-AR-f",
      },
      {
        type: "gap",
        q: "Nadie se mueve hasta que la sirena ___ (apagarse).",
        answers: [["se apague"]],
        hint: "Límite de una espera futura",
        why: "«Hasta que» con futuro: presente de subjuntivo.",
      },
      {
        type: "gap",
        q: "Guardamos los cascos en el pasillo, de manera que cada grupo los ___ (tener) a mano.",
        answers: [["tenga"]],
        hint: "«De manera que» con valor de finalidad",
        why: "Finalidad: subjuntivo.",
      },
      {
        type: "error",
        sentence: "Una vez que estaremos en el patio, la maestra pasará lista.",
        answers: ["Una vez que estemos en el patio, la maestra pasará lista."],
        why: "Futuro tras «una vez que»: presente de subjuntivo.",
      },
      {
        type: "error",
        sentence: "Me levanté temprano para que yo llegara antes que los chicos.",
        answers: ["Me levanté temprano para llegar antes que los chicos."],
        why: "Mismo sujeto: «para» + infinitivo.",
      },
      {
        type: "order",
        words: ["Cierren", "las", "ventanas,", "no", "vaya", "a", "ser", "que", "se", "rompan", "los", "vidrios."],
        why: "Precaución: «no vaya a ser que» + presente de subjuntivo.",
      },
      {
        type: "open",
        prompt: "Explica en 60–80 palabras a otro estudiante por qué decimos «cuando llegue» pero «cuando llegó», y añade un ejemplo de «para + infinitivo» frente a «para que + subjuntivo».",
        model: "El conector temporal no decide el modo: decide el momento. «Cuando llegó» cuenta algo que ya pasó, por eso va en indicativo. «Cuando llegue» habla de un futuro que todavía no ha ocurrido, y por eso usa subjuntivo. Con la finalidad miramos el sujeto: «Estudio para aprobar» tiene un solo sujeto; «Te explico para que apruebes» tiene dos, y entonces usamos subjuntivo.",
        checklist: [
          "Explico que el momento decide el modo.",
          "Doy un ejemplo con «para» + infinitivo.",
          "Doy un ejemplo con «para que» + subjuntivo y sujetos distintos.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Uso subjuntivo tras «cuando», «en cuanto», «una vez que» o «hasta que» si hablo de un futuro que todavía no ha ocurrido.",
      "Cuento promesas y planes del pasado con «en cuanto llegara», «antes de que empezara».",
      "Explico la finalidad con «para que», «a fin de que» o «de manera que», y uso infinitivo cuando el sujeto es el mismo.",
      "Expreso lo que no ocurre con «sin que» y una precaución con «no vaya a ser que».",
    ],
    review: [
      "Dentro de dos días, tapa la columna «Desde el pasado» de la tabla y reconstrúyela.",
      "Dentro de una semana, escribe cinco planes tuyos con un conector temporal distinto cada uno.",
      "En la próxima clase, lee tu correo a las familias y pide a tu profesor que señale una finalidad que podría expresarse de forma más formal.",
    ],
  },
  related: [
    { path: "/gramatica/temporales-con-subjuntivo-para-futuro-incierto", label: "Clase: Temporales con subjuntivo para futuro incierto" },
    { path: "/gramatica/finales-con-subjuntivo-con-el-fin", label: "Clase: Finales con subjuntivo: con el fin de que, sin que" },
  ],
};
