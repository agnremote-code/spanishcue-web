import type { Module } from "../../types";

/**
 * B1 · semana 20 · control y cierre de B1. Autoestudio espejo de G126 (comparar
 * hipótesis y posibilidades) y G127 (argumentación y toma de decisiones B1), con
 * integración de las clases de las semanas 16 a 19. Repaso autónomo con una
 * compañía de teatro de Montevideo que decide si sale de gira por el interior.
 */
export const b1w20: Module = {
  id: "b1-20",
  level: "b1",
  week: 20,
  kind: "checkpoint",
  title: "Montevideo decide: comparar opciones, argumentar y cerrar B1",
  subtitle: "Control final de B1: repaso de cómo comparar hipótesis y defender una decisión en grupo, junto con las clases de las semanas 16 a 19.",
  stop: { place: "Montevideo", country: "Uruguay" },
  minutes: 110,
  newObjectives: [
    "b1.gram.g126",
    "b1.gram.g127",
    "b1.voc.w20-teatro-decisiones",
    "b1.pron.w20-enfasis-argumentar",
    "b1.lis.w20-reunion-compania",
    "b1.read.w20-columna-opinion",
    "b1.wri.w20-propuesta-razonada",
    "b1.spk.w20-defender-propuesta",
    "b1.fun.w20-decidir-en-grupo",
    "b1.disc.w20-argumento-completo",
    "b1.rev.w20-semanas-16-20"
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana, y de B1, puedes comparar dos opciones antes de decidir («si nos quedamos, ganamos menos; en el interior llegaríamos a más gente»), decir qué es probable, aconsejar poniéndote en el lugar del otro, defender una propuesta con argumentos y una concesión, y usar en el mismo texto la gramática de las semanas 16 a 19.",
    steps: [
      "Repasa cómo se comparan una opción real y una imaginada, y cómo se dice qué es probable y qué es mejor.",
      "Repasa la estructura de un argumento y el modo después de «creo que», «no creo que», «es importante que» y «propongo que».",
      "Recupera las clases de las semanas 16 a 19 en una tabla de control.",
      "Escucha la reunión de una compañía de teatro de Montevideo y lee una columna de opinión sobre su decisión.",
      "Escribe una propuesta razonada, revísala y defiéndela en voz alta ante alguien que no está de acuerdo."
    ]
  },
  theory: {
    intro: "Esta es la última semana de B1 y una semana de control. Repasas dos clases que integran mucho de lo que has aprendido: comparar posibilidades y argumentar para decidir en grupo. Además, vuelves a las clases de las semanas 16 a 19. Te acompaña Florencia, directora de una pequeña compañía de teatro de Ciudad Vieja, en Montevideo, que tiene que decidir con su equipo si sale de gira por el interior del país o se queda en su sala.",
    parts: [
      {
        heading: "Opción real, opción imaginada y consejo",
        body: [
          "Para hablar de una opción posible y concreta, usa «si» + presente y una consecuencia en presente o futuro: «Si nos quedamos en la sala, mantenemos el público fiel». Para imaginar una opción que todavía no has elegido y ver qué pasaría, usa el condicional: «En una gira llegaríamos a gente que nunca va al teatro». Nunca pongas el condicional detrás de «si»: «si iríamos» es incorrecto.",
          "Para aconsejar, ponte en el lugar del otro: «Yo que tú, aceptaría», «En tu lugar, hablaría con el elenco», «Sería mejor esperar a marzo» (con infinitivo). Si quieres nombrar a la persona, usa «es mejor que» + presente de subjuntivo: «Es mejor que lo decidan todos juntos»."
        ],
        table: {
          caption: "Tres maneras de pensar una decisión",
          head: ["Para…", "Estructura", "Ejemplo"],
          rows: [
            ["una opción real", "si + presente, presente / futuro", "Si salimos de gira, perderemos dos meses de sala."],
            ["imaginar una opción", "condicional", "En Salto actuaríamos en un teatro de 1882."],
            ["aconsejar", "yo que tú / en tu lugar + condicional", "Yo que tú, no firmaría todavía."],
            ["recomendar sin persona", "sería mejor + infinitivo", "Sería mejor pedir una subvención."],
            ["recomendar con persona", "es mejor que + subjuntivo", "Es mejor que Martín llame al teatro de Salto."]
          ]
        },
        mistakes: [
          {
            wrong: "Si iríamos a Tacuarembó, tendríamos que alquilar una camioneta.",
            right: "Si vamos a Tacuarembó, tendremos que alquilar una camioneta.",
            why: "Detrás de «si» no va el condicional: para una opción real, presente."
          },
          {
            wrong: "Sería mejor que esperamos a marzo.",
            right: "Sería mejor esperar a marzo.",
            why: "En B1 usa «sería mejor» + infinitivo; con «que» haría falta otro tiempo que verás en B2."
          }
        ]
      },
      {
        heading: "Qué es probable y qué es mejor",
        body: [
          "Para decir cuánto crees que algo va a pasar: «a lo mejor» + indicativo («A lo mejor nos dan la subvención»), «quizás» + indicativo o subjuntivo, «puede que» + subjuntivo («Puede que el público del interior responda bien») y «lo más probable es que» + subjuntivo («Lo más probable es que la sala esté llena en verano»).",
          "Para comparar las dos opciones: «Es mejor X que Y», «Prefiero la gira a la temporada en la sala», «Por un lado…, por otro…», «Lo bueno es que…», «Lo malo es que…». Así el oyente ve las ventajas y los inconvenientes antes de tu conclusión."
        ],
        examples: [
          { es: "A lo mejor en Rocha hay más turistas que en Montevideo.", note: "«A lo mejor» + indicativo." },
          { es: "Puede que la camioneta no llegue a tiempo.", note: "«Puede que» + subjuntivo." },
          { es: "Lo malo es que la gira cuesta el doble.", note: "Inconveniente." },
          { es: "Por un lado, la sala es nuestra casa; por otro, el público ya nos conoce demasiado.", note: "Comparar dos caras de una opción." }
        ],
        mistakes: [
          {
            wrong: "Puede que la gira es un éxito.",
            right: "Puede que la gira sea un éxito.",
            why: "«Puede que» lleva subjuntivo."
          }
        ]
      },
      {
        heading: "Argumentar y decidir en grupo",
        body: [
          "Un buen argumento tiene cuatro partes: la tesis («Creo que debemos salir de gira»), los argumentos con conectores («ya que», «además», «incluso»), un contraargumento que reconoces («Es verdad que es caro, pero…», «Aunque perdemos la sala dos meses, …») y la conclusión («Así que propongo que…», «Por eso…»).",
          "Cuida el modo: «creo que», «me parece que», «está claro que» y «es verdad que» van con indicativo; «no creo que» y «no me parece que», con subjuntivo; «es importante que», «propongo que» y «sugiero que», también con subjuntivo. Para discrepar con cortesía: «Entiendo tu idea, pero…», «No estoy del todo de acuerdo», «Yo lo veo de otra manera»."
        ],
        table: {
          caption: "El modo en la argumentación",
          head: ["Con indicativo", "Con subjuntivo"],
          rows: [
            ["Creo que la gira es buena idea.", "No creo que la gira sea mala idea."],
            ["Está claro que necesitamos dinero.", "Es importante que pidamos ayuda."],
            ["Es verdad que el viaje cansa, pero…", "Propongo que votemos el viernes."],
            ["Aunque la sala es pequeña, la queremos.", "Sugiero que cada uno traiga una idea."]
          ]
        },
        mistakes: [
          {
            wrong: "No creo que la gira es demasiado cara.",
            right: "No creo que la gira sea demasiado cara.",
            why: "«No creo que» lleva subjuntivo."
          },
          {
            wrong: "Propongo que salimos en enero.",
            right: "Propongo que salgamos en enero.",
            why: "«Propongo que» lleva subjuntivo."
          }
        ],
        tip: "Antes de hablar, escribe tu tesis en una línea y prepara una concesión con «es verdad que…, pero…»: convence más quien reconoce el argumento del otro."
      },
      {
        heading: "Control de las semanas 16 a 19",
        body: [
          "Semanas 16 y 17: cuentas lo que alguien dijo con el verbo un paso atrás («El intendente dijo que nos ayudaría»), hablas de lo que se hace sin decir quién («Se venden entradas en la puerta», «Aquí se vive tranquilo»), describes estados con «estar» + participio («La escenografía está terminada») y entiendes «ser» + participio en noticias («La sala fue inaugurada en 1998»).",
          "Semanas 18 y 19: eliges entre «es listo» y «está listo», colocas dos pronombres («se lo propusimos», «vamos a contárselo»), concuerdas bien con grupos («la mayoría del elenco prefiere», «había doscientas personas»), evitas repeticiones («la nuestra», «la de Salto», «la que tiene escenario grande») y cuentas anécdotas con marcadores («resulta que…», «de repente…», «menos mal que…»)."
        ],
        table: {
          caption: "Lo que tienes que dominar al terminar B1",
          head: ["Semana", "Clase", "Ejemplo en la compañía"],
          rows: [
            ["16", "Discurso referido", "La productora nos preguntó si estábamos listos para viajar."],
            ["16", "Se pasivo e impersonal", "En el interior se cena tarde y se aplaude mucho."],
            ["17", "Estar + participio", "Los vestuarios ya están cosidos y las cajas, hechas."],
            ["17", "Ser + participio (lectura)", "El teatro de Salto fue restaurado en 2010."],
            ["18", "Ser y estar con cambio de significado", "Martín es muy despierto; hoy está aburrido."],
            ["18", "Dos pronombres", "La propuesta se la mandamos a la intendencia."],
            ["18", "Concordancia", "La mitad del grupo votó por la gira."],
            ["19", "Elipsis y aposición", "Nuestra sala es pequeña; la de Salto, enorme."],
            ["19", "Anécdotas", "Justo cuando empezaba la función, se cortó la luz."]
          ]
        },
        mistakes: [
          {
            wrong: "Habían doscientas personas en el estreno de Salto.",
            right: "Había doscientas personas en el estreno de Salto.",
            why: "Semana 18: «haber» de existencia, siempre en singular."
          }
        ]
      }
    ]
  },
  grammar: {
    intro: "Primero las dos clases nuevas; después, un control de las semanas 16 a 19.",
    exercises: [
      {
        id: "b1-20-gramatica-hipotesis",
        type: "choice",
        title: "Pensar antes de decidir",
        prompt: "Elige la forma correcta para cada frase de la reunión.",
        items: [
          { q: "«Si ___ la gira, tendremos que cerrar la sala en febrero.»", options: ["hacemos", "haríamos", "haremos"], answer: 0, why: "Opción real: «si» + presente." },
          { q: "«En Tacuarembó ___ en una sala de seiscientas butacas.» (opción imaginada)", options: ["actuamos", "actuaríamos", "actuábamos"], answer: 1, why: "Imaginar una opción: condicional." },
          { q: "«Yo que tú, ___ con el elenco antes de firmar.»", options: ["hablo", "hablaré", "hablaría"], answer: 2, why: "Consejo: «yo que tú» + condicional." },
          { q: "«Lo más probable es que la intendencia nos ___ el transporte.»", options: ["paga", "pague", "pagará"], answer: 1, why: "«Lo más probable es que» + subjuntivo." },
          { q: "«Prefiero la temporada de verano ___ la de invierno.»", options: ["que", "a", "de"], answer: 1, why: "«Preferir algo a algo»." }
        ]
      },
      {
        id: "b1-20-gramatica-modo",
        type: "gap",
        title: "Argumentos de Florencia",
        prompt: "Completa con el verbo en indicativo, en subjuntivo o en infinitivo.",
        items: [
          { q: "Creo que el interior ___ (necesitar) más teatro que la capital.", answers: [["necesita"]], why: "«Creo que» + indicativo." },
          { q: "No creo que el público de Montevideo nos ___ (olvidar) en dos meses.", answers: [["olvide"]], why: "«No creo que» + subjuntivo." },
          { q: "Es importante que todos ___ (votar) el viernes.", answers: [["voten", "votemos"]], why: "«Es importante que» + subjuntivo." },
          { q: "Sería mejor ___ (pedir) una subvención antes de decidir.", answers: [["pedir"]], why: "«Sería mejor» + infinitivo." },
          { q: "Aunque la gira ___ (ser) cansadora, vale la pena.", answers: [["es"]], why: "Concesión con un hecho conocido: «aunque» + indicativo." }
        ]
      },
      {
        id: "b1-20-gramatica-argumento",
        type: "classify",
        title: "Las partes del argumento",
        prompt: "Clasifica cada frase de Florencia según su función.",
        categories: ["Tesis", "Argumento", "Concesión", "Conclusión"],
        items: [
          { text: "Creo que este año tenemos que salir de gira.", cat: 0 },
          { text: "Ya que nadie lleva teatro a Rivera, allí nos esperan con ganas.", cat: 1 },
          { text: "Además, la intendencia de Salto nos ofrece la sala gratis.", cat: 1 },
          { text: "Es verdad que el viaje es largo y caro, pero se puede organizar.", cat: 2 },
          { text: "Aunque perdemos dos meses de sala, ganamos público nuevo.", cat: 2 },
          { text: "Así que propongo que votemos la gira el viernes.", cat: 3 }
        ]
      },
      {
        id: "b1-20-gramatica-control-16-19",
        type: "choice",
        title: "Control de las semanas 16 a 19",
        prompt: "Elige la forma correcta. Cada frase recupera una semana.",
        items: [
          { q: "Semana 16. El intendente dijo en marzo: «Pagaré la camioneta». En julio lo cuentas: «Dijo que ___ la camioneta».", options: ["pagaría", "pagará", "paga"], answer: 0, why: "Futuro → condicional." },
          { q: "Semana 17. Las cajas de la escenografía ya ___.", options: ["fueron hechas", "están hechas", "están haciendo"], answer: 1, why: "Estado resultante: «estar» + participio concordado." },
          { q: "Semana 18. ¿Le contamos la decisión al elenco? — Sí, ___ el lunes.", options: ["se la contamos", "le la contamos", "la se contamos"], answer: 0, why: "«Le» + «la» → «se la»." },
          { q: "Semana 18. «La mayoría del elenco ___ la gira.»", options: ["prefieren", "prefiere", "preferimos"], answer: 1, why: "«La mayoría de» + nombre singular («el elenco»): singular." },
          { q: "Semana 19. «Nuestra sala tiene ochenta butacas; ___ tiene seiscientas.»", options: ["esa de Salto", "la de Salto", "de Salto"], answer: 1, why: "Elipsis: artículo + «de»." }
        ]
      },
      {
        id: "b1-20-gramatica-errores",
        type: "error",
        title: "Corrige el error",
        prompt: "Cada frase tiene un error de las semanas 16 a 20. Escríbela bien.",
        items: [
          { sentence: "Si saldríamos en enero, haría mucho calor en la ruta.", answers: ["Si salimos en enero, hará mucho calor en la ruta.", "Si salimos en enero, va a hacer mucho calor en la ruta."], why: "Detrás de «si» no va el condicional." },
          { sentence: "Se buscan a dos actores para la gira.", answers: ["Se busca a dos actores para la gira.", "Se buscan dos actores para la gira."], why: "Con «a» + personas, singular; o sin «a», plural." },
          { sentence: "Agustina es lista para salir: tiene la maleta hecha.", answers: ["Agustina está lista para salir: tiene la maleta hecha."], why: "Preparada: «estar lista para»." },
          { sentence: "No me parece que la sala está demasiado lejos del centro.", answers: ["No me parece que la sala esté demasiado lejos del centro."], why: "«No me parece que» + subjuntivo." },
          { sentence: "Mientras ensayamos la última escena, de repente se cortaba la luz.", answers: ["Mientras ensayábamos la última escena, de repente se cortó la luz."], why: "Escena en imperfecto y hecho repentino en indefinido." }
        ]
      }
    ]
  },
  vocabulary: {
    intro: "Palabras para hablar de una compañía de teatro y de una decisión en grupo. Algunas son muy de Uruguay: te lo indicamos.",
    groups: [
      {
        title: "El teatro",
        items: [
          { es: "la compañía" },
          { es: "el elenco" },
          { es: "la función" },
          { es: "la temporada" },
          { es: "la gira" },
          { es: "la escenografía" },
          { es: "las butacas" },
          { es: "el estreno" }
        ]
      },
      {
        title: "Decidir",
        items: [
          { es: "la subvención" },
          { es: "el presupuesto" },
          { es: "las ventajas y los inconvenientes" },
          { es: "llegar a un acuerdo" },
          { es: "someter a votación" },
          { es: "valer la pena" }
        ]
      },
      {
        title: "Expresiones de Uruguay",
        items: [
          { es: "el interior", note: "En Uruguay, todo el país fuera de Montevideo." },
          { es: "la intendencia", note: "El gobierno de cada departamento." },
          { es: "ta", note: "Coloquial: «vale», «de acuerdo»." },
          { es: "bárbaro", note: "Coloquial: «estupendo»." },
          { es: "cansador", note: "Que cansa." }
        ]
      }
    ],
    exercises: [
      {
        id: "b1-20-vocabulario-definiciones",
        type: "match",
        title: "Cada palabra con su explicación",
        prompt: "Une cada palabra o expresión con su significado.",
        pairs: [
          { left: "el elenco", right: "el conjunto de actores de una obra" },
          { left: "la gira", right: "un viaje por varias ciudades para actuar en cada una" },
          { left: "la subvención", right: "el dinero público que ayuda a pagar un proyecto" },
          { left: "el interior", right: "en Uruguay, las ciudades y pueblos fuera de la capital" },
          { left: "valer la pena", right: "merecer el esfuerzo o el dinero que cuesta" }
        ],
        why: "Fíjate en si la palabra nombra personas, un viaje, dinero, un lugar o una valoración."
      },
      {
        id: "b1-20-vocabulario-huecos",
        type: "gap",
        title: "El acta de la reunión",
        prompt: "Completa con una palabra o expresión del banco.",
        bank: ["butacas", "presupuesto", "votación", "estreno", "acuerdo"],
        items: [
          { q: "El ___ de la gira es de trescientos mil pesos.", answers: [["presupuesto"]], why: "El dinero previsto para un proyecto." },
          { q: "Después de dos horas de debate, llegamos a un ___.", answers: [["acuerdo"]], why: "Una decisión aceptada por todos." },
          { q: "La propuesta de Florencia se somete a ___ el viernes.", answers: [["votación"]], why: "Todos votan." },
          { q: "La sala de Ciudad Vieja solo tiene ochenta ___.", answers: [["butacas"]], why: "Los asientos del teatro." },
          { q: "El ___ de la nueva obra será en Salto, no en Montevideo.", answers: [["estreno"]], why: "La primera función." }
        ]
      }
    ]
  },
  pronunciation: {
    focus: "Énfasis para argumentar: la palabra que contrasta y la concesión",
    explanation: [
      "Cuando discutes, la voz marca qué palabra importa. En «No creo que sea CARO, sino que es arriesgado», la fuerza cae en la palabra que contrasta con otra. Si pones el énfasis en otro lugar, cambia el mensaje: «No creo que SEA caro» suena a que dudas de que lo sea.",
      "En una concesión con «es verdad que…, pero…», la primera parte termina con la voz arriba, suspendida, y la parte con «pero» baja con firmeza: el oyente entiende que lo importante viene después. Con «aunque» pasa algo parecido: «Aunque es caro ↗, vale la pena ↘»."
    ],
    examples: [
      { es: "Es verdad que el viaje es largo ↗, pero el público lo merece. ↘", note: "La concesión sube; el argumento principal baja." },
      { es: "No quiero quedarme en la SALA, sino salir al INTERIOR.", note: "Énfasis en las palabras que contrastan." }
    ],
    perceive: {
      id: "b1-20-pronunciacion-enfasis",
      type: "listen",
      title: "¿Qué quiere decir la voz?",
      prompt: "Escucha cada frase y elige lo que comunica la entonación.",
      items: [
        { q: "¿Qué palabra lleva el énfasis?", options: ["creo", "Salto", "Rocha"], answer: 2, why: "Contrasta Rocha con Salto.", audio: "No creo que vayamos a Salto, sino a Rocha.", voice: "es-UY-f" },
        { q: "¿Está de acuerdo con la gira la persona que habla?", options: ["Sí: concede un problema, pero defiende la gira.", "No: rechaza la gira."], answer: 0, why: "La concesión sube; la parte con «pero» baja y defiende la gira.", audio: "Es verdad que la gira es cara, pero vale la pena.", voice: "es-UY-m" },
        { q: "¿Y aquí?", options: ["Sí: está a favor de la gira.", "No: está en contra de la gira."], answer: 1, why: "La concesión es a favor de la gira, pero la conclusión la rechaza.", audio: "Aunque la gira es una buena idea, este año no podemos pagarla.", voice: "es-UY-f" },
        { q: "¿Qué parte se dice con la voz suspendida?", options: ["Si nos quedamos en la sala", "perdemos público nuevo", "toda la frase igual"], answer: 0, why: "La condición queda arriba; la consecuencia baja.", audio: "Si nos quedamos en la sala, perdemos público nuevo.", voice: "es-UY-m" }
      ]
    },
    produce: [
      { text: "Es verdad que el viaje cansa, pero el público lo merece.", tip: "Sube en «cansa», pausa breve y baja con firmeza al final.", voice: "es-UY-f" },
      { text: "No propongo cerrar la sala, sino abrir otra puerta.", tip: "Marca «cerrar» y «abrir»: son las palabras que contrastan.", voice: "es-UY-m" },
      { text: "Yo que tú, lo pensaría con calma antes de votar.", tip: "Haz una pausa después de «yo que tú».", voice: "es-UY-f" }
    ],
    spelling: "En la escritura, la coma marca la pausa de la concesión: «Es verdad que es caro, pero…», «Aunque es caro, …»."
  },
  listening: {
    title: "¿Gira o temporada?",
    context: "Es lunes por la noche en la sala de La Rambla Teatro, en Ciudad Vieja. Florencia, la directora, reúne a Agustina, la productora, y a Martín, el actor más veterano, para comparar dos opciones: una gira por el interior o una temporada larga en la sala.",
    speakers: [
      { id: "flo", name: "Florencia", voice: "es-UY-f", role: "directora de la compañía" },
      { id: "agu", name: "Agustina", voice: "es-AR-f", role: "productora" },
      { id: "mar", name: "Martín", voice: "es-UY-m", role: "actor" }
    ],
    script: [
      { speaker: "flo", text: "Bueno, ya tenemos los números. Agustina, ¿qué te dijeron en la intendencia de Salto?" },
      { speaker: "agu", text: "Me dijeron que nos prestarían el teatro gratis y que pagarían la mitad del transporte. También me preguntaron si podíamos dar un taller para los liceos." },
      { speaker: "mar", text: "A ver, por un lado me encanta la idea. Por otro, si salimos dos meses, la sala queda cerrada y perdemos al público de siempre." },
      { speaker: "flo", text: "Es verdad que es un riesgo, pero no creo que el público nos olvide en dos meses. Y en el interior llegaríamos a gente que nunca vio teatro en vivo." },
      { speaker: "agu", text: "Además, la escenografía ya está desmontada y las cajas están hechas desde el último estreno. Lo malo es que la camioneta todavía no está alquilada." },
      { speaker: "mar", text: "Yo que ustedes, la alquilaría ya. Se lo digo por experiencia: una vez, en Tacuarembó, resulta que la camioneta se rompió en plena ruta. Estábamos cruzando un puente y de repente se apagó el motor. Menos mal que un camionero nos llevó hasta el teatro." },
      { speaker: "flo", text: "¡Qué historia! Bueno, lo más probable es que la mayoría del elenco prefiera la gira. Propongo que lo sometamos a votación el viernes." },
      { speaker: "agu", text: "Ta. Y sería mejor mandar la propuesta a Salto antes. ¿Se la mando yo mañana?" },
      { speaker: "flo", text: "Sí, mándasela tú, que conoces a la gente de allí. Y que conste en el acta: Martín está aburrido de hacer siempre la misma obra." },
      { speaker: "mar", text: "¡Aburrido no! Cansado, que es distinto. Pero ta, si votamos la gira, yo voy." }
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha una vez sin leer. ¿Qué deciden hoy?",
        exercise: {
          id: "b1-20-escucha-global",
          type: "choice",
          prompt: "Elige la mejor respuesta.",
          items: [
            { q: "¿Qué pasa al final de la reunión?", options: ["Deciden quedarse en la sala.", "Deciden someter la gira a votación el viernes.", "Cancelan la gira por falta de dinero."], answer: 1, why: "«Propongo que lo sometamos a votación el viernes.»" },
            { q: "¿Cómo es el tono de la reunión?", options: ["Tenso: discuten a gritos.", "Triste: la compañía va a cerrar.", "Colaborativo: comparan opciones y bromean."], answer: 2, why: "Comparan ventajas e inconvenientes y terminan con humor." }
          ]
        }
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota los detalles.",
        exercise: {
          id: "b1-20-escucha-detalle",
          type: "choice",
          prompt: "Responde según la reunión.",
          items: [
            { q: "¿Qué ofrece la intendencia de Salto?", options: ["El teatro gratis y la mitad del transporte.", "El hotel y las comidas.", "Una subvención para la sala de Montevideo."], answer: 0, why: "«Nos prestarían el teatro gratis y pagarían la mitad del transporte.»" },
            { q: "¿Qué le preocupa a Martín de la gira?", options: ["Que el viaje sea muy largo.", "Que la sala quede cerrada y pierdan al público de siempre.", "Que no haya liceos en Salto."], answer: 1, why: "«La sala queda cerrada y perdemos al público de siempre.»" },
            { q: "¿Qué le pasó a Martín una vez en Tacuarembó?", options: ["Perdió el vestuario.", "Llegó tarde por un corte de luz.", "La camioneta se rompió en la ruta."], answer: 2, why: "«La camioneta se rompió en plena ruta.»" }
          ]
        }
      },
      {
        stage: "notice",
        prompt: "Fíjate en la gramática. Completa lo que dicen exactamente.",
        exercise: {
          id: "b1-20-escucha-formas",
          type: "gap",
          prompt: "Escribe la palabra o forma que usan.",
          items: [
            { q: "Me dijeron que nos ___ el teatro gratis.", answers: [["prestarían"]], why: "Discurso referido: futuro → condicional (semana 16)." },
            { q: "No creo que el público nos ___ en dos meses.", answers: [["olvide"]], why: "«No creo que» + subjuntivo." },
            { q: "En el interior ___ a gente que nunca vio teatro en vivo.", answers: [["llegaríamos"]], why: "Opción imaginada: condicional." },
            { q: "Lo más probable es que la mayoría del elenco ___ la gira.", answers: [["prefiera"]], why: "«Lo más probable es que» + subjuntivo." }
          ]
        }
      }
    ]
  },
  reading: {
    title: "Salir de la sala para encontrar al público",
    genre: "Columna de opinión en una revista cultural",
    frame: "Una semana después de la reunión, una crítica de teatro de Montevideo publica esta columna sobre la decisión de La Rambla Teatro.",
    text: [
      "La semana pasada, La Rambla Teatro, una de las compañías independientes más queridas de Ciudad Vieja, sometió a votación una pregunta que muchas compañías se hacen: ¿quedarse en la sala o salir de gira? La mayoría del elenco votó por la gira, y en febrero recorrerán Salto, Tacuarembó y Rocha. Creo que es una decisión valiente, y quiero explicar por qué.",
      "Por un lado, está claro que el teatro independiente de Montevideo tiene un problema: siempre se actúa para el mismo público. En una sala de ochenta butacas, la gente que va es casi siempre la misma, y eso, aunque es cómodo, no hace crecer a nadie. Por otro lado, en el interior hay teatros magníficos que pasan meses vacíos. El de Salto, por ejemplo, fue inaugurado en 1882 y hoy está perfectamente restaurado, pero recibe muy pocas obras al año.",
      "Es verdad que una gira cuesta mucho dinero y que la sala de Ciudad Vieja quedará cerrada dos meses. Puede que algunos espectadores se enojen, y lo más probable es que la compañía gane menos que en una temporada normal. Sin embargo, no creo que la cultura deba medirse solo en dinero. Si las compañías no salen de la capital, el resto del país seguirá viendo el teatro solo por televisión.",
      "Por eso, sugiero que la intendencia de Montevideo apoye también estas giras, y que otras salas sigan el ejemplo. Yo que ellos, además, grabaría las funciones del interior para mostrarlas a la vuelta. Así, el público de siempre no se quedaría sin su compañía, y el nuevo tendría una razón para visitarla en la capital."
    ],
    glossary: [{ es: "valiente" }, { es: "recorrer" }, { es: "enojarse", note: "En América, enfadarse." }, { es: "medir" }],
    tasks: [
      {
        id: "b1-20-lectura-comprension",
        type: "choice",
        title: "Comprensión",
        prompt: "Responde según la columna.",
        items: [
          { q: "¿Qué opina la autora de la decisión?", options: ["Que es valiente.", "Que es un error económico.", "Que llega demasiado tarde."], answer: 0, why: "«Creo que es una decisión valiente.»" },
          { q: "¿Qué problema ve en el teatro independiente de Montevideo?", options: ["Que las salas están cerradas por obras.", "Que siempre se actúa para el mismo público.", "Que no hay actores jóvenes."], answer: 1, why: "«Siempre se actúa para el mismo público.»" },
          { q: "¿Qué propone hacer la autora con las funciones del interior?", options: ["Venderlas a la televisión.", "Cancelarlas si llueve.", "Grabarlas para mostrarlas a la vuelta."], answer: 2, why: "«Grabaría las funciones del interior para mostrarlas a la vuelta.»" }
        ]
      },
      {
        id: "b1-20-lectura-estructura",
        type: "classify",
        title: "La estructura de la columna",
        prompt: "Clasifica cada idea de la columna según su función en el argumento.",
        categories: ["Tesis", "Argumento a favor", "Concesión", "Propuesta final"],
        items: [
          { text: "Es una decisión valiente.", cat: 0 },
          { text: "En el interior hay teatros magníficos que pasan meses vacíos.", cat: 1 },
          { text: "Una gira cuesta mucho dinero.", cat: 2 },
          { text: "La compañía puede ganar menos que en una temporada normal.", cat: 2 },
          { text: "La intendencia debería apoyar estas giras.", cat: 3 },
          { text: "En una sala pequeña el público es casi siempre el mismo.", cat: 1 }
        ]
      }
    ],
    noticing: {
      prompt: "Fíjate en cómo la autora argumenta y en la gramática de B1 que aparece en la columna.",
      items: [
        { quote: "Es verdad que una gira cuesta mucho dinero", note: "Concesión con indicativo antes de «sin embargo»." },
        { quote: "no creo que la cultura deba medirse solo en dinero", note: "«No creo que» + subjuntivo." },
        { quote: "fue inaugurado en 1882 y hoy está perfectamente restaurado", note: "Acción con «ser» + participio y estado con «estar» + participio (semana 17)." },
        { quote: "Yo que ellos, además, grabaría las funciones del interior", note: "Consejo poniéndose en el lugar de otros: condicional." }
      ]
    }
  },
  practice: {
    intro: "Práctica integrada: las dos clases nuevas y las clases de las semanas 16 a 19.",
    exercises: [
      {
        id: "b1-20-practica-orden",
        type: "order",
        title: "Frases de la compañía",
        prompt: "Ordena las palabras para formar frases completas.",
        items: [
          { words: ["Si", "salimos", "de", "gira,", "la", "sala", "quedará", "cerrada."] },
          { words: ["No", "creo", "que", "el", "viaje", "sea", "tan", "cansador."] },
          { words: ["Propongo", "que", "se", "lo", "contemos", "al", "elenco", "hoy."] },
          { words: ["Puede", "que", "la", "intendencia", "pague", "el", "hotel."] }
        ]
      },
      {
        id: "b1-20-practica-retrieval",
        type: "gap",
        title: "Recuperación integrada: semanas 16 a 19",
        prompt: "Recuperación de las semanas 16 a 19 en el diario de gira de Florencia. Completa cada hueco.",
        items: [
          { q: "Semana 16. El director del teatro de Salto me preguntó ___ ___ (poder, nosotros) dar dos funciones el sábado.", answers: [["si"], ["podíamos"]], why: "Pregunta de sí o no contada: «si» + imperfecto." },
          { q: "Semana 16. En Salto ___ ___ (cenar) muy tarde, incluso después de la función.", answers: [["se"], ["cena"]], why: "«Se» impersonal: singular." },
          { q: "Semana 17. Cuando llegamos, las luces ya ___ ___ (instalar).", answers: [["estaban"], ["instaladas"]], why: "Estado en el pasado: «estaban» + participio concordado." },
          { q: "Semana 18. ___ (Haber) más de trescientas personas en la primera función.", answers: [["Hubo", "Había", "hubo", "había"]], why: "«Haber» de existencia: singular." },
          { q: "Semana 18. El ramo de flores era para Martín: ___ ___ dio una niña al final.", answers: [["se"], ["lo"]], why: "«Le» + «lo» → «se lo»." },
          { q: "Semana 19. Nuestra camioneta es blanca; ___ ___ los técnicos, gris.", answers: [["la"], ["de"]], why: "Elipsis: «la de los técnicos», sin repetir «camioneta»." },
          { q: "Semana 19. ___ (Justo / Mientras) cuando empezaba el segundo acto, se cortó la luz.", answers: [["Justo", "justo"]], why: "Sorpresa: «justo cuando» + imperfecto de fondo." }
        ]
      },
      {
        id: "b1-20-practica-errores-integrados",
        type: "error",
        title: "Un mensaje con errores",
        prompt: "Martín escribe al grupo después de la primera función. Cada frase tiene un error. Corrígela.",
        items: [
          { sentence: "El intendente nos dijo que volveremos el año que viene, pero ya pasó un año y nadie nos llamó.", answers: ["El intendente nos dijo que volveríamos el año que viene, pero ya pasó un año y nadie nos llamó.", "El intendente nos dijo que volveríamos al año siguiente, pero ya pasó un año y nadie nos llamó."], why: "El plazo ya pasó: futuro → condicional." },
          { sentence: "La gente del pueblo aplaudieron diez minutos.", answers: ["La gente del pueblo aplaudió diez minutos."], why: "«La gente», sola, en singular." },
          { sentence: "Estamos muy orgullosos por el público de Salto.", answers: ["Estamos muy orgullosos del público de Salto."], why: "Semana 18: «estar orgulloso de»." },
          { sentence: "Es importante que descansamos antes de Rocha.", answers: ["Es importante que descansemos antes de Rocha."], why: "«Es importante que» + subjuntivo." }
        ]
      },
      {
        id: "b1-20-practica-escritura-guiada",
        type: "open",
        title: "Respuestas para el grupo",
        prompt: "Escribe cada texto en dos o tres frases.",
        items: [
          {
            prompt: "Un amigo duda entre aceptar un trabajo en otra ciudad o quedarse. Compara las dos opciones y dale un consejo.",
            model: "Si te quedas, sigues cerca de tu familia, pero cobras poco. En la otra ciudad ganarías el doble y aprenderías mucho. Yo que tú, lo aceptaría por un año.",
            checklist: ["Usas «si» + presente para la opción real y el condicional para la imaginada.", "Das un consejo con «yo que tú» o «en tu lugar»."]
          },
          {
            prompt: "Responde a un compañero que dice que la gira es una mala idea: concede algo y defiende tu postura.",
            model: "Es verdad que la gira es cara, pero no creo que sea una mala idea. Además, puede que nos den una subvención, así que propongo que esperemos la respuesta.",
            checklist: ["Concedes con «es verdad que…, pero» o «aunque».", "Usas «no creo que» y «propongo que» con subjuntivo."]
          },
          {
            prompt: "Cuenta en el grupo de la compañía lo que te dijo alguien sobre la gira y lo que se decidió.",
            model: "La productora me dijo que el teatro de Salto estaba reservado para febrero y que nos mandaría el contrato. Al final se votó la gira y la mayoría del elenco dijo que sí.",
            checklist: ["Usas discurso referido con el verbo un paso atrás.", "Usas «se» o una concordancia con colectivo («la mayoría del elenco»)."]
          }
        ]
      }
    ]
  },
  writing: {
    task: "Tu grupo (de trabajo, de vecinos, de estudio o de amigos) tiene que elegir entre dos opciones importantes. Escribe una propuesta razonada a la persona que coordina el grupo: compara las dos opciones, di qué es probable que pase, reconoce el argumento contrario y propón una decisión.",
    context: "La propuesta se va a leer en voz alta antes de la votación. Algunas personas del grupo piensan lo contrario que tú.",
    steps: [
      "Elige las dos opciones y anota dos ventajas y un inconveniente de cada una.",
      "Primer párrafo: presenta la situación y tu tesis; si alguien dijo algo importante, cuéntalo con discurso referido.",
      "Segundo párrafo: compara las opciones con «si» + presente, el condicional, «por un lado… por otro» y una expresión de probabilidad.",
      "Tercer párrafo: concede con «es verdad que…, pero» o «aunque» y termina con «propongo que» + subjuntivo.",
      "Revisa el modo después de cada «creo que», «no creo que», «es importante que» y «propongo que», corrige cualquier condicional detrás de «si» y comprueba la concordancia de los grupos."
    ],
    useLanguage: [
      "si + presente / condicional para imaginar",
      "yo que tú / en tu lugar / sería mejor + infinitivo",
      "a lo mejor, puede que, lo más probable es que",
      "creo que + indicativo / no creo que + subjuntivo",
      "es verdad que…, pero / aunque + indicativo",
      "propongo que / sugiero que + subjuntivo"
    ],
    model: [
      "Querida Florencia: como sabes, el viernes votamos si salimos de gira o hacemos una temporada larga en la sala. Agustina nos contó que la intendencia de Salto nos prestaría el teatro y pagaría la mitad del transporte. Creo que tenemos que aprovechar esta oportunidad.",
      "Por un lado, si nos quedamos en Ciudad Vieja, mantenemos al público fiel y no gastamos en viajes. Por otro, en el interior llegaríamos a cientos de personas que nunca nos han visto, y lo más probable es que la experiencia nos haga crecer como compañía. La escenografía ya está desmontada, así que el traslado sería más fácil que nunca.",
      "Es verdad que la gira es cansadora y que algunos espectadores se van a quejar. Aunque perdemos dos meses de sala, no creo que el público de siempre nos olvide. Por eso propongo que votemos a favor de la gira y que grabemos las funciones para mostrarlas a la vuelta. Un abrazo, Martín."
    ],
    checklist: [
      "Presento una tesis clara y la defiendo con al menos dos argumentos.",
      "Comparo una opción real con «si» + presente y otra imaginada con el condicional.",
      "Uso una expresión de probabilidad y el modo correcto después de ella.",
      "Reconozco un argumento contrario con «es verdad que…, pero» o «aunque».",
      "Termino con «propongo que» o «sugiero que» + subjuntivo.",
      "Uso al menos una estructura de las semanas 16 a 19 (discurso referido, «se», estar + participio, pronombres, concordancia o elipsis)."
    ],
    words: [150, 210]
  },
  speaking: {
    intro: "Graba tus respuestas. Es la producción oral del control de B1: intenta usar una estructura de cada semana de la 16 a la 20.",
    tasks: [
      {
        title: "Defiende tu propuesta",
        prompt: "Presenta oralmente la propuesta de tu ejercicio de escritura, sin leerla, durante dos minutos y medio: la situación, las dos opciones, qué pasaría en cada caso, qué es probable, el argumento contrario y tu propuesta final.",
        prep: [
          "Una tesis en una frase y dos argumentos con conectores.",
          "Una comparación con «si» + presente y otra con el condicional.",
          "Una concesión con «es verdad que…, pero» y una propuesta con «propongo que»."
        ],
        seconds: 150,
        model: "Les quiero explicar por qué creo que tenemos que salir de gira. Agustina nos contó que en Salto nos prestarían el teatro. Por un lado, si nos quedamos, ganamos lo de siempre; por otro, en el interior llegaríamos a gente nueva. Es verdad que es cansador, pero…",
        selfCheck: [
          "¿He hablado al menos dos minutos y medio?",
          "¿He reconocido el argumento contrario antes de mi conclusión?",
          "¿He usado subjuntivo después de «no creo que» y «propongo que»?"
        ]
      },
      {
        title: "Alguien no está de acuerdo",
        prompt: "Una persona del grupo defiende la otra opción. Escucha sus objeciones, responde a sus preguntas, aclara tus argumentos y negocia una solución intermedia. Practica con alguien que haga de interlocutor o graba las dos voces.",
        prep: [
          "Prepara dos fórmulas para discrepar con cortesía: «Entiendo tu idea, pero…», «Yo lo veo de otra manera».",
          "Prepara una solución intermedia con «¿Y si…?» o «Sería mejor…»."
        ],
        seconds: 120,
        model: "—Pero si salimos, perdemos el público de la sala. —Entiendo tu idea, pero no creo que lo perdamos en dos meses. ¿Y si hacemos una función de despedida antes de salir? Así la gente sabe cuándo volvemos. —Puede ser… —Yo que tú, lo probaría.",
        selfCheck: [
          "¿He respondido a cada objeción sin cortar a la otra persona?",
          "¿He propuesto una solución intermedia?"
        ]
      }
    ]
  },
  useInClass: {
    intro: "Es la última semana de B1 y semana de control. Lleva tu propuesta y estas tarjetas a la próxima clase: tu profesor podrá ver qué dominas ya y qué conviene repasar antes de B2.",
    cards: [
      { move: "Argumenta", task: "Presenta tu propuesta a tu profesor y pídele que haga de abogado del diablo.", phrases: ["Creo que…", "Es verdad que…, pero…"] },
      { move: "Compara", task: "Compara con tu profesor dos opciones de tu vida real (dos viajes, dos cursos, dos trabajos) y pídele un consejo.", phrases: ["Si elijo…", "¿Qué harías tú en mi lugar?"] },
      { move: "Repasa", task: "Elige con tu profesor la clase de las semanas 16 a 19 que te parece más difícil y haced juntos cinco frases nuevas.", phrases: ["Todavía dudo con…", "¿Me das otro ejemplo de…?"] },
      { move: "Celebra", task: "Cuenta a tu profesor una anécdota de tu aprendizaje en B1 y qué quieres conseguir en B2.", phrases: ["¿A que no sabes…?", "En B2 me gustaría…"] }
    ],
    bring: "Tu propuesta revisada, la grabación de «Defiende tu propuesta» y una lista con las tres clases de B1 que quieres repasar."
  },
  quiz: {
    items: [
      { type: "choice", q: "Quieres imaginar una opción que todavía no has elegido. ¿Qué frase lo hace?", options: ["Si me mudo a Colonia, tengo más tranquilidad.", "En Colonia tendría más tranquilidad.", "En Colonia tuve más tranquilidad."], answer: 1, why: "Opción imaginada: condicional." },
      { type: "choice", q: "¿Qué frase concede un argumento y defiende la postura contraria?", options: ["Creo que el curso es caro.", "No creo que el curso sea caro.", "Es verdad que el curso es caro, pero vale la pena."], answer: 2, why: "Concesión con «es verdad que…, pero»." },
      { type: "listen", q: "Escucha el mensaje de voz sobre el contrato. ¿Qué hace la persona?", options: ["Da un consejo.", "Cuenta una anécdota.", "Informa de una votación."], answer: 0, why: "«Yo que tú» + condicional: consejo.", audio: "Yo que tú, no firmaría el contrato hasta hablar con un abogado.", voice: "es-UY-m" },
      { type: "gap", q: "Puede que el tren ___ (llegar) con retraso por la lluvia.", answers: [["llegue"]], why: "«Puede que» + subjuntivo." },
      { type: "gap", q: "Sugiero que cada grupo ___ (presentar) su idea en cinco minutos.", answers: [["presente"]], why: "«Sugiero que» + subjuntivo." },
      { type: "gap", q: "La vecina nos preguntó ___ ___ (ir, nosotros) a la reunión del lunes.", answers: [["si"], ["íbamos", "iríamos"]], why: "Semana 16: pregunta contada con «si»." },
      { type: "gap", q: "En la asamblea ___ (haber) más de sesenta socios.", answers: [["hubo", "había"]], why: "Semana 18: «haber» de existencia, singular." },
      { type: "order", words: ["Lo", "más", "probable", "es", "que", "la", "mayoría", "vote", "que", "sí."], why: "«Lo más probable es que» + subjuntivo." },
      { type: "error", sentence: "Si tendríamos más tiempo, iríamos al festival de Durazno.", answers: ["Si tenemos más tiempo, iremos al festival de Durazno.", "Si tenemos más tiempo, vamos al festival de Durazno."], why: "Detrás de «si» no va el condicional." },
      { type: "error", sentence: "No me parece que la propuesta es justa para todos.", answers: ["No me parece que la propuesta sea justa para todos."], why: "«No me parece que» + subjuntivo." },
      { type: "error", sentence: "Las entradas ya fueron vendidas cuando llegamos a la taquilla.", answers: ["Las entradas ya estaban vendidas cuando llegamos a la taquilla."], why: "Semana 17: el estado que encontraste, con «estaban» + participio." },
      {
        type: "open",
        prompt: "Reformulación: convierte estas notas en un párrafo argumentativo con tesis, concesión y propuesta. Notas: «Opción A: biblioteca nueva. Opción B: arreglar la vieja. A: más cara. A: más espacio para los niños. Votación: el lunes.»",
        model: "Creo que es mejor construir la biblioteca nueva que arreglar la vieja, ya que tendríamos más espacio para los niños. Es verdad que es más cara, pero vale la pena a largo plazo. Por eso propongo que la votemos el lunes.",
        checklist: [
          "Hay una tesis con «creo que» + indicativo o «es mejor X que Y».",
          "Hay una concesión con «es verdad que…, pero» o «aunque».",
          "La propuesta final va con «propongo que» + subjuntivo.",
          "Usas el condicional para la ventaja de la opción imaginada."
        ]
      }
    ]
  },
  complete: {
    canNow: [
      "Comparar una opción real («si» + presente) con una imaginada (condicional) y aconsejar con «yo que tú», «en tu lugar» o «sería mejor» + infinitivo.",
      "Decir qué es probable con «a lo mejor», «puede que» y «lo más probable es que», con el modo correcto.",
      "Defender una propuesta con tesis, argumentos, concesión y conclusión, y discrepar con cortesía.",
      "Usar juntas las clases de las semanas 16 a 19: discurso referido, «se», estar + participio, ser y estar con cambio de significado, dos pronombres, concordancia, elipsis y anécdotas."
    ],
    review: [
      "El subjuntivo con «no creo que», «es importante que» y «propongo que» de las semanas 3 y 4.",
      "Los conectores de causa, consecuencia y contraste de las semanas 14 y 15.",
      "El condicional de las semanas 8 y 9.",
      "Las clases de las semanas 16 a 19, antes de empezar B2."
    ]
  },
  related: [
    { path: "/gramatica/comparar-hipotesis-y-posibilidades", label: "Clase: Comparar hipótesis y posibilidades" },
    { path: "/gramatica/argumentacion-y-toma-de-decisiones-b1", label: "Clase: Argumentación y toma de decisiones B1" }
  ]
};
