import type { Module } from "../../types";

/**
 * B2 · semana 10 · checkpoint. Autoestudio espejo de G145 (antecedentes
 * desconocidos: cualquiera que, dondequiera que) y G146 (estilo indirecto),
 * integrando las clases G137–G144 de las semanas 6 a 9. Repaso autónomo con un
 * voluntariado de limpieza de playas en Mar del Plata.
 * Personas y organización son ficticias. Audio mediante síntesis.
 */
export const b2w10: Module = {
  id: "b2-10",
  level: "b2",
  week: 10,
  kind: "checkpoint",
  title: "Punto de control: dijo que, pasara lo que pasara, cualquiera podía ayudar",
  subtitle: "Repaso de los antecedentes desconocidos y del estilo indirecto, integrados con la concesión, las temporales y finales, las comparativas, los relativos y los referentes neutros de las semanas 6 a 9",
  stop: { place: "Mar del Plata", country: "Argentina" },
  minutes: 150,
  newObjectives: [
    "b2.gram.g145",
    "b2.gram.g146",
    "b2.voc.w10-playa-voluntariado",
    "b2.pron.w10-voz-cita",
    "b2.lis.w10-llamada-reunion",
    "b2.read.w10-cronica-temporada",
    "b2.wri.w10-acta-reunion",
    "b2.spk.w10-transmitir-negociar",
    "b2.fun.w10-transmitir-mensajes",
    "b2.disc.w10-transmitir-con-precision",
    "b2.rev.w10-integracion",
  ],
  reviewObjectives: ["b2.gram.g137","b2.gram.g138","b2.voc.w06-agua-vinedo","b2.pron.w06-modo-al-oido","b2.lis.w06-reunion-finca","b2.read.w06-columna-agua","b2.wri.w06-carta-asamblea","b2.spk.w06-sostener-postura","b2.fun.w06-conceder-mantener","b2.disc.w06-orden-registro","b2.gram.g139","b2.gram.g140","b2.voc.w07-sismo-simulacro","b2.pron.w07-bloques-conectores","b2.lis.w07-reunion-simulacro","b2.read.w07-boletin-escuela","b2.wri.w07-correo-familias","b2.spk.w07-explicar-protocolo","b2.fun.w07-planificar-prevenir","b2.disc.w07-secuencia-finalidad","b2.gram.g141","b2.gram.g142","b2.voc.w08-telar-oficio","b2.pron.w08-grupo-relativo","b2.lis.w08-taller-telar","b2.read.w08-reportaje-tejedoras","b2.wri.w08-quienes-somos","b2.spk.w08-presentar-oficio","b2.fun.w08-describir-proceso","b2.disc.w08-precisar-referentes","b2.gram.g143","b2.gram.g144","b2.voc.w09-patrimonio-urbano","b2.pron.w09-pausa-comentario","b2.lis.w09-grabacion-audioguia","b2.read.w09-guion-recorrido","b2.wri.w09-ficha-patrimonio","b2.spk.w09-guiar-recorrido","b2.fun.w09-presentar-comentar","b2.disc.w09-encadenar-comentarios"],
  prerequisites: ["b2-09"],
  goal: {
    canDo: "Puedo transmitir lo que otras personas dijeron, preguntaron o pidieron, hablar de personas y lugares sin identificar y combinar en un mismo texto todas las estructuras de las semanas 6 a 10.",
    steps: [
      "Repasa en la teoría «cualquiera que», «dondequiera que», «pase lo que pase» y el modo en las relativas.",
      "Repasa el estilo indirecto: tiempos, preguntas, peticiones y referencias, y la tabla de integración de las semanas 6 a 9.",
      "Escucha a Lucía contar la reunión de voluntarios y lee la crónica del fin de temporada.",
      "Escribe el resumen de una reunión, revísalo y transmite oralmente lo acordado.",
    ],
  },
  theory: {
    intro: "Este es el segundo punto de control de B2. En clase viste cómo hablar de personas y lugares que no identificas y cómo transmitir lo que dijo otra persona. Aquí lo repasas en Mar del Plata, donde un grupo de voluntarios limpia las playas durante el verano, y lo combinas con lo que repasaste en las semanas 6 a 9: la concesión (G137, G138), las temporales y finales (G139, G140), las modales y comparativas (G141), los relativos con preposición (G142), «cuyo» (G143) y los referentes neutros (G144).",
    parts: [
      {
        heading: "Cualquiera que, dondequiera que: cuando no sabes quién ni dónde",
        body: [
          "Cuando hablas de una persona, un lugar o una cosa que no identificas, porque puede ser cualquiera, usas «cualquiera que», «quienquiera que», «dondequiera que», «comoquiera que» o «cualquier + sustantivo + que», siempre con subjuntivo: «Cualquiera que encuentre un animal herido debe avisar a la coordinadora».",
          "«Cualquiera» va solo cuando funciona como pronombre y pierde la «a» delante de un sustantivo: «cualquier bolsa», «cualquier persona». El plural, «cualesquiera», es formal y poco frecuente. En la conversación se prefieren «el que», «quien» o «donde» + subjuntivo, con el mismo valor: «El que llegue primero abre el depósito», «Plantamos donde diga el guardaparques».",
        ],
        table: {
          caption: "Formas y registro",
          head: ["Forma", "Uso", "Ejemplo"],
          rows: [
            ["cualquiera que + subjuntivo", "cualquier persona", "Cualquiera que quiera sumarse puede venir el sábado."],
            ["cualquier + sustantivo + que", "cualquier cosa de ese tipo", "Cualquier residuo que encuentren va a la bolsa roja."],
            ["dondequiera que + subjuntivo", "en cualquier lugar (formal)", "Dondequiera que acampen, deben llevarse su basura."],
            ["quienquiera que + subjuntivo", "cualquier persona (formal)", "Quienquiera que haya dejado esto, que lo retire."],
            ["el que / quien / donde + subjuntivo", "lo mismo, más oral", "El que vea la bandera roja no se mete al agua."],
          ],
        },
        examples: [
          { es: "Cualquier voluntario que tenga guantes de sobra puede prestárselos a los nuevos.", note: "«Cualquier» sin «a» delante del sustantivo." },
          { es: "Llevamos la bolsa dondequiera que vayamos, incluso a la rambla.", note: "Lugar indeterminado: subjuntivo." },
        ],
        mistakes: [
          {
            wrong: "Cualquiera persona que venga recibe una camiseta.",
            right: "Cualquier persona que venga recibe una camiseta.",
            why: "Delante de un sustantivo, «cualquiera» pierde la «a».",
          },
          {
            wrong: "Cualquiera que viene sin gorra se insola.",
            right: "Cualquiera que venga sin gorra se insola.",
            why: "Con un antecedente indeterminado, la relativa va en subjuntivo.",
          },
        ],
      },
      {
        heading: "«Pase lo que pase», «sea cual sea» y el modo en las relativas",
        body: [
          "Las fórmulas reduplicadas dicen que la decisión no cambia, ocurra lo que ocurra: «pase lo que pase», «digan lo que digan», «vayas donde vayas», «hagas lo que hagas». Con «cual» hay concordancia: «sea cual sea el resultado», «sean cuales sean los resultados». Con dos opciones: «llueva o no llueva», «quieras o no».",
          "En cualquier relativa, el modo depende del antecedente. Si es conocido y existe, indicativo: «Busco a Lidia, que tiene la llave». Si es buscado o no sabes si existe, subjuntivo: «Busco a alguien que tenga la llave». Si se niega su existencia, también subjuntivo: «No hay nadie que tenga la llave».",
        ],
        table: {
          caption: "El mismo relativo, dos modos",
          head: ["Antecedente", "Modo", "Ejemplo"],
          rows: [
            ["conocido, existe", "indicativo", "Hablé con el guardavidas que trabaja en la playa Varese."],
            ["buscado, no sé si existe", "subjuntivo", "Necesitamos un guardavidas que trabaje los domingos."],
            ["negado", "subjuntivo", "No hay ningún guardavidas que trabaje los domingos."],
          ],
        },
        mistakes: [
          {
            wrong: "Sea cual sean los resultados, seguiremos limpiando.",
            right: "Sean cuales sean los resultados, seguiremos limpiando.",
            why: "Con un sustantivo en plural, «sean cuales sean» concuerda en número.",
          },
          {
            wrong: "No conozco a nadie que sabe nadar tan bien como Ana.",
            right: "No conozco a nadie que sepa nadar tan bien como Ana.",
            why: "Antecedente negado: subjuntivo.",
          },
        ],
        tip: "Pregúntate: ¿puedo señalar a esa persona o ese lugar? Si no puedo, subjuntivo.",
      },
      {
        heading: "Estilo indirecto: afirmar, preguntar, pedir",
        body: [
          "Antes de pensar en los tiempos, decide qué hizo la otra persona. Si afirmó algo: «dijo que», «explicó que», «aclaró que». Si preguntó: «preguntó si» (pregunta de sí o no) o «preguntó qué, dónde, cuándo». Si pidió u ordenó: «pidió que», «nos dijo que» + subjuntivo.",
          "Cuando el verbo que introduce el mensaje está en pasado, los tiempos se desplazan hacia atrás: el presente pasa a imperfecto, el pretérito perfecto o el indefinido a pluscuamperfecto, el futuro a condicional y el imperativo a imperfecto de subjuntivo. Si lo que se dijo sigue siendo verdad cuando lo cuentas, puedes mantener el presente: «Dijo que la reunión es los lunes».",
        ],
        table: {
          caption: "Lo que dijo la coordinadora → lo que cuentas después",
          head: ["Palabras originales", "Estilo indirecto"],
          rows: [
            ["«El turno empieza a las siete.»", "Dijo que el turno empezaba a las siete."],
            ["«Hemos juntado dos toneladas.»", "Contó que habían juntado dos toneladas."],
            ["«Mañana traeré los guantes.»", "Prometió que al día siguiente llevaría los guantes."],
            ["«¿Alguien tiene auto?»", "Preguntó si alguien tenía auto."],
            ["«No se metan al agua.»", "Nos pidió que no nos metiéramos al agua."],
          ],
        },
        mistakes: [
          {
            wrong: "Nos pidió que no dejamos bolsas en la arena.",
            right: "Nos pidió que no dejáramos bolsas en la arena.",
            why: "Una petición transmitida va en subjuntivo; con «pidió», imperfecto de subjuntivo.",
          },
          {
            wrong: "Me preguntó que si yo vendré el sábado.",
            right: "Me preguntó si yo iría el sábado.",
            why: "Pregunta de sí o no: «preguntó si»; el futuro pasa a condicional y «venir» a «ir» si cambia el lugar.",
          },
        ],
      },
      {
        heading: "Referencias que cambian y verbos que precisan",
        body: [
          "Al contar un mensaje en otro momento o en otro lugar, cambian también las referencias: «hoy» puede pasar a «ese día», «mañana» a «al día siguiente», «ayer» a «el día anterior», «aquí» a «allí», «este» a «ese», «venir» a «ir» y «traer» a «llevar». Piensa siempre desde dónde y cuándo hablas tú.",
          "«Decir» sirve para todo, pero otros verbos transmiten mejor la intención: «aclaró», «advirtió», «insistió en que», «recordó», «recomendó», «prometió», «propuso». Con los verbos de influencia (recomendar, proponer, insistir en que con valor de pedir) el mensaje va en subjuntivo.",
        ],
        examples: [
          { es: "El martes, la coordinadora advirtió que esa noche habría tormenta y nos recomendó que no fuéramos a la escollera.", note: "«Esta noche» → «esa noche»; recomendación en subjuntivo." },
          { es: "Martín insistió en que la reunión siguiente fuera en la playa y no en la sede.", note: "«Insistir en que» con valor de petición: subjuntivo." },
        ],
        mistakes: [
          {
            wrong: "El lunes me dijo: «Ven aquí mañana». → Me dijo que venga aquí mañana.",
            right: "Me dijo que fuera allí al día siguiente.",
            why: "Hay que cambiar el tiempo y las referencias de lugar y de tiempo.",
          },
        ],
      },
      {
        heading: "Integración: las semanas 6 a 9 en una misma historia",
        body: [
          "En un punto de control conviene recuperar todo lo anterior. La tabla resume, con ejemplos de la playa, las clases de las semanas 6 a 9. Fíjate en que casi todas comparten una pregunta: ¿el hecho es conocido y real (indicativo) o abierto, futuro o irreal (subjuntivo)?",
          "Cuando transmites lo que dijo alguien, estas estructuras también se desplazan: «Aunque llueva, vamos» se cuenta como «Dijo que, aunque lloviera, íbamos»; «En cuanto lleguen, empezamos» pasa a «Dijo que en cuanto llegaran empezaríamos».",
        ],
        table: {
          caption: "Repaso de las semanas 6 a 9",
          head: ["Semana y clase", "Clave", "Ejemplo en la playa"],
          rows: [
            ["6 · G137 aunque", "dato nuevo (ind.) / conocido o posible (subj.)", "Aunque haga viento, limpiamos la escollera."],
            ["6 · G138 por mucho que, si bien", "intensidad indiferente: subj.; «si bien» + ind.", "Por mucho que barramos, siempre aparecen colillas."],
            ["7 · G139 temporales", "futuro: subj.; desde el pasado: imperf. de subj.", "En cuanto baje la marea, empezamos."],
            ["7 · G140 finales", "sujeto distinto: subj.; mismo sujeto: infinitivo", "Ponemos carteles para que nadie tire plásticos."],
            ["8 · G141 modales y comparativas", "manera conocida/abierta; «de lo que»; «como si»", "Juntamos más basura de la que esperábamos."],
            ["8 · G142 relativos con preposición", "la preposición va delante", "Es la playa en la que hay más residuos."],
            ["9 · G143 cuyo", "concuerda con lo poseído", "Es una ONG cuyos voluntarios vienen de todo el país."],
            ["9 · G144 lo cual, por lo que", "comentario o consecuencia de un hecho", "Llovió, por lo que suspendimos el turno."],
          ],
        },
        mistakes: [
          {
            wrong: "Dijo que en cuanto llegarán los camiones cargaríamos las bolsas.",
            right: "Dijo que en cuanto llegaran los camiones cargaríamos las bolsas.",
            why: "Futuro visto desde el pasado tras «en cuanto»: imperfecto de subjuntivo (semana 7).",
          },
        ],
        tip: "Antes del cuestionario, tapa la columna «Ejemplo en la playa» y escribe un ejemplo propio para cada fila.",
      },
    ],
  },
  grammar: {
    intro: "Primero, el antecedente: ¿lo conoces o puede ser cualquiera? Después, el mensaje: ¿afirma, pregunta o pide, y desde cuándo lo cuentas? Al final, reformula con libertad.",
    exercises: [
      {
        id: "b2-10-gramatica-antecedente",
        type: "context",
        prompt: "Lee la situación y elige la frase adecuada.",
        items: [
          {
            context: "La coordinadora no sabe quién vendrá el sábado y quiere dejar clara una norma.",
            q: "¿Qué escribe en el grupo?",
            options: [
              "Cualquiera que viene el sábado tiene que firmar la planilla.",
              "Cualquiera que venga el sábado tiene que firmar la planilla.",
              "Cualquier que venga el sábado tiene que firmar la planilla.",
            ],
            answer: 1,
            why: "Persona indeterminada: «cualquiera que» + subjuntivo.",
          },
          {
            context: "Buscan un voluntario con carné de conducir, pero no saben si hay alguno.",
            q: "¿Cómo lo preguntan?",
            options: [
              "¿Hay alguien que tenga carné para manejar la camioneta?",
              "¿Hay alguien que tiene carné para manejar la camioneta?",
              "¿Hay alguien quien tenga carné para manejar la camioneta?",
            ],
            answer: 0,
            why: "Antecedente buscado: subjuntivo; «quien» no se usa así tras «alguien» en especificativa.",
          },
          {
            context: "El pronóstico es dudoso, pero la jornada se mantiene.",
            q: "¿Qué dice Martín?",
            options: [
              "Pasa lo que pasa, empezamos a las ocho.",
              "Pasará lo que pasará, empezamos a las ocho.",
              "Pase lo que pase, empezamos a las ocho.",
            ],
            answer: 2,
            why: "Fórmula reduplicada: presente de subjuntivo.",
          },
          {
            context: "Lucía conoce a una guardavidas concreta que habla tres idiomas.",
            q: "¿Qué frase es la adecuada?",
            options: [
              "Te presento a Sofía, que habla inglés, portugués e italiano.",
              "Te presento a Sofía, que hable inglés, portugués e italiano.",
              "Te presento a Sofía, cualquiera que habla inglés, portugués e italiano.",
            ],
            answer: 0,
            why: "Antecedente conocido: indicativo.",
          },
        ],
      },
      {
        id: "b2-10-gramatica-indirecto",
        type: "gap",
        prompt: "Transmite el mensaje el lunes siguiente. Completa con la forma adecuada.",
        items: [
          { q: "La coordinadora dijo: «Hoy terminamos a las doce». → Dijo que ese día ___ a las doce.", answers: [["terminábamos", "terminaríamos"]], why: "Presente con valor de futuro → imperfecto (o condicional)." },
          { q: "Martín preguntó: «¿Quién ha traído las pinzas?». → Preguntó quién ___ las pinzas.", answers: [["había llevado", "había traído"]], why: "Pretérito perfecto → pluscuamperfecto; «traer» puede pasar a «llevar»." },
          { q: "Nos pidió: «Separen el vidrio del plástico». → Nos pidió que ___ el vidrio del plástico.", answers: [["separáramos", "separásemos"]], why: "Imperativo → imperfecto de subjuntivo." },
          { q: "Ana dijo: «Mañana iré a la escollera». → Dijo que al día siguiente ___ a la escollera.", answers: [["iría"]], why: "Futuro → condicional." },
          { q: "Un turista preguntó: «¿Puedo ayudar?». → Preguntó ___ podía ayudar.", answers: [["si"]], why: "Pregunta de sí o no: «preguntó si»." },
          { q: "La guardavidas advirtió: «Cualquiera que entre al agua con bandera roja será retirado». → Advirtió que cualquiera que ___ al agua con bandera roja sería retirado.", answers: [["entrara", "entrase"]], why: "Desde el pasado, el subjuntivo presente pasa a imperfecto." },
        ],
      },
      {
        id: "b2-10-gramatica-modo",
        type: "classify",
        prompt: "Clasifica cada relativa según el antecedente.",
        categories: ["Conocido: indicativo", "Buscado, negado o indeterminado: subjuntivo"],
        items: [
          { text: "Hablé con el pescador que encontró la red.", cat: 0, why: "Persona concreta que existe." },
          { text: "No hay nadie que conozca esta playa como Ramón.", cat: 1, why: "Antecedente negado." },
          { text: "Buscamos un local donde guardar las herramientas.", cat: 1, why: "Lugar buscado, todavía sin identificar." },
          { text: "Es la playa donde aparecieron más tapitas.", cat: 0, why: "Lugar conocido." },
          { text: "Quienquiera que haya dejado la sombrilla, que pase a buscarla.", cat: 1, why: "Persona indeterminada." },
          { text: "Te presento a Tomás, que coordina el turno de tarde.", cat: 0, why: "Persona concreta y conocida." },
        ],
      },
      {
        id: "b2-10-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de las semanas 6 a 10. Corrígelo.",
        items: [
          {
            sentence: "La coordinadora nos pidió que llevamos agua y gorra.",
            answers: ["La coordinadora nos pidió que lleváramos agua y gorra.", "La coordinadora nos pidió que llevásemos agua y gorra."],
            why: "Petición transmitida: imperfecto de subjuntivo.",
          },
          {
            sentence: "Cualquier que quiera venir es bienvenido.",
            answers: ["Cualquiera que quiera venir es bienvenido."],
            why: "Como pronombre, «cualquiera» conserva la «a».",
          },
          {
            sentence: "Es una asociación que sus voluntarios son muy jóvenes.",
            answers: ["Es una asociación cuyos voluntarios son muy jóvenes."],
            why: "«Que su» no es normativo: «cuyos» (semana 9).",
          },
          {
            sentence: "Juntamos más plástico de lo que esperábamos.",
            answers: ["Juntamos más plástico del que esperábamos."],
            why: "Con un sustantivo masculino: «del que» (semana 8).",
          },
          {
            sentence: "Llegó tarde la camioneta, que tuvimos que cargar las bolsas a mano.",
            answers: ["Llegó tarde la camioneta, por lo que tuvimos que cargar las bolsas a mano.", "Llegó tarde la camioneta, con lo cual tuvimos que cargar las bolsas a mano."],
            why: "Consecuencia de un hecho entero: «por lo que» o «con lo cual» (semana 9).",
          },
        ],
      },
      {
        id: "b2-10-gramatica-reformular",
        type: "open",
        prompt: "Reformula cada texto. Compara con el modelo y revisa la lista: puede haber otras soluciones correctas.",
        items: [
          {
            prompt: "Texto de partida: la coordinadora dijo el viernes: «Aunque llueva mañana, vengan igual. En cuanto llegue la camioneta, empezamos». Transmítelo el lunes a alguien que no estuvo.",
            model: "El viernes la coordinadora nos dijo que, aunque lloviera al día siguiente, fuéramos igual, y que en cuanto llegara la camioneta empezaríamos.",
            checklist: [
              "Los subjuntivos pasan a imperfecto de subjuntivo y el presente con valor de futuro a condicional.",
              "«Mañana» pasa a «al día siguiente» o «el sábado».",
              "Puedo usar otros verbos introductores, como «insistió en que»: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «No sabemos quién va a venir. Esa persona tendrá que registrarse. Da igual lo que pase con el tiempo.» Reformúlalo en una o dos frases con «cualquiera que» y una fórmula reduplicada.",
            model: "Cualquiera que venga tendrá que registrarse, haga el tiempo que haga.",
            checklist: [
              "«Cualquiera que» va con subjuntivo.",
              "Uso una fórmula reduplicada en subjuntivo («haga el tiempo que haga», «pase lo que pase»).",
              "Otra combinación también vale: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: Martín preguntó: «¿Dónde dejamos las bolsas? ¿Hay alguien que tenga un carro?». Transmite las dos preguntas en pasado.",
            model: "Martín preguntó dónde dejábamos las bolsas y si había alguien que tuviera un carro.",
            checklist: [
              "Uso «preguntó dónde» para la primera y «preguntó si» para la segunda.",
              "El subjuntivo de la relativa pasa a imperfecto: «tuviera».",
              "Puedo ordenar o unir las preguntas de otra manera: no es una respuesta única.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de la temporada de playa, de su seguridad y de un voluntariado ambiental.",
    groups: [
      {
        title: "Mar y seguridad",
        items: [
          { es: "el guardavidas", note: "persona que vigila a los bañistas (en España, «socorrista»)" },
          { es: "la bandera roja", note: "señal de que está prohibido bañarse" },
          { es: "la resaca", note: "corriente que arrastra hacia mar adentro" },
          { es: "la marea alta / baja", note: "subida y bajada periódica del nivel del mar" },
          { es: "la escollera", note: "muro de piedras que protege la costa o el puerto" },
          { es: "el balneario", note: "en Argentina, zona de playa con servicios y carpas" },
          { es: "insolarse", note: "sufrir los efectos de demasiado sol" },
        ],
      },
      {
        title: "Voluntariado y residuos",
        items: [
          { es: "la jornada de limpieza", note: "día organizado para recoger residuos" },
          { es: "los residuos", note: "restos y basura que hay que retirar" },
          { es: "las colillas", note: "restos de cigarrillos" },
          { es: "las tapitas", note: "tapones de plástico de las botellas (uso rioplatense)" },
          { es: "la planilla", note: "hoja donde se anotan datos o asistentes" },
          { es: "sumarse", note: "unirse a una actividad o a un grupo" },
          { es: "el turno", note: "horario en que le toca trabajar a cada grupo" },
          { es: "hacer un balance", note: "valorar los resultados de un periodo" },
        ],
      },
      {
        title: "Verbos para transmitir",
        items: [
          { es: "aclarar", note: "explicar algo para evitar confusiones" },
          { es: "advertir", note: "avisar de un riesgo" },
          { es: "insistir en que", note: "repetir una idea o una petición con firmeza" },
          { es: "recordar", note: "hacer que alguien tenga presente algo" },
          { es: "proponer", note: "presentar una idea para que otros la consideren" },
        ],
      },
    ],
    exercises: [
      {
        id: "b2-10-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada palabra con su definición.",
        pairs: [
          { left: "la resaca", right: "corriente que arrastra hacia mar adentro" },
          { left: "la escollera", right: "muro de piedras que protege la costa" },
          { left: "sumarse", right: "unirse a una actividad" },
          { left: "advertir", right: "avisar de un riesgo" },
          { left: "hacer un balance", right: "valorar los resultados de un periodo" },
          { left: "la planilla", right: "hoja donde se anotan los asistentes" },
        ],
      },
      {
        id: "b2-10-lexico-uso",
        type: "gap",
        prompt: "Completa con la palabra adecuada.",
        bank: ["bandera roja", "colillas", "insistió en que", "guardavidas"],
        items: [
          { q: "Con ___ nadie se mete al agua, por muy calmado que parezca el mar.", answers: [["bandera roja"]] },
          { q: "El ___ nos explicó dónde se forma la resaca.", answers: [["guardavidas"]] },
          { q: "Juntamos más de tres mil ___ en una sola mañana.", answers: [["colillas"]] },
          { q: "La coordinadora ___ todos usáramos guantes.", answers: [["insistió en que"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Cambiar de voz entre el relato y la cita",
    explanation: [
      "Cuando cuentas lo que dijo otra persona en estilo directo, la voz cambia: haces una pausa breve después de «dijo» y la cita suena con otro tono, a veces imitando la intención («¡No se metan al agua!»). En estilo indirecto, en cambio, todo va en tu voz, sin pausa después de «que»: «dijo que no nos metiéramos al agua».",
      "Las fórmulas reduplicadas («pase lo que pase», «sea cual sea», «digan lo que digan») se pronuncian como un solo bloque, con el acento fuerte en el primer verbo y una pausa después: «PA-se-lo-que-pa-se | empezamos».",
      "El audio usa la síntesis del navegador: sirve para percibir el contraste, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Directo e indirecto al oído",
      head: ["Estilo directo (pausa y cambio de voz)", "Estilo indirecto (una sola voz)"],
      rows: [
        ["Dijo: | «Vengan temprano».", "Dijo que fuéramos temprano."],
        ["Preguntó: | «¿Quién tiene auto?».", "Preguntó quién tenía auto."],
      ],
    },
    perceive: {
      id: "b2-10-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué forma oyes.",
      items: [
        {
          q: "¿Estilo directo o indirecto?",
          options: ["directo: cita las palabras", "indirecto: las transmite"],
          answer: 1,
          why: "No hay cita: «nos pidió que lleváramos…», todo en la voz de quien cuenta.",
          audio: "La coordinadora nos pidió que lleváramos guantes y agua.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué forma oyes después de «que»?",
          options: ["llevamos", "lleváramos"],
          answer: 1,
          why: "Se oye «lleváramos», esdrújula: imperfecto de subjuntivo.",
          audio: "Nos dijo que lleváramos las bolsas a la escollera.",
          voice: "es-AR-m",
        },
        {
          q: "¿Qué fórmula oyes?",
          options: ["sea cual sea", "sean cuales sean"],
          answer: 0,
          why: "Singular: «sea cual sea el resultado».",
          audio: "Sea cual sea el resultado, el sábado volvemos.",
          voice: "es-UY-f",
        },
        {
          q: "¿Qué oyes en la relativa?",
          options: ["alguien que tiene", "alguien que tenga"],
          answer: 1,
          why: "«Tenga»: antecedente buscado, subjuntivo.",
          audio: "Buscamos a alguien que tenga una camioneta grande.",
          voice: "es-AR-f",
        },
      ],
    },
    produce: [
      { text: "Pase lo que pase, el sábado empezamos a las ocho.", tip: "«Pase lo que pase» en un solo bloque y pausa antes de «el sábado».", voice: "es-AR-f" },
      { text: "Nos dijo: «Cualquiera que vea a un animal herido, que me llame».", tip: "Pausa después de «dijo» y cambia de voz en la cita.", voice: "es-AR-m" },
      { text: "Nos dijo que cualquiera que viera a un animal herido la llamara.", tip: "Ahora todo en tu voz, sin pausa después de «que».", voice: "es-AR-m" },
      { text: "Sean cuales sean las condiciones, volveremos el mes que viene.", tip: "Acentúa «SEAN» y deja el resto ligado.", voice: "es-UY-f" },
    ],
    spelling: "En estilo directo, la cita va entre comillas y precedida de dos puntos; en estilo indirecto no hay comillas ni dos puntos, y las preguntas pierden los signos de interrogación: «Preguntó si había lugar».",
  },
  listening: {
    title: "Te cuento lo que se dijo en la reunión",
    context: "Lucía, voluntaria de una red de limpieza de playas de Mar del Plata, llama a Tomás, que no pudo ir a la reunión de fin de temporada. También interviene Valeria, una voluntaria uruguaya que estaba con Lucía. Escucha primero sin transcripción. Las voces son sintéticas.",
    speakers: [
      { id: "l", name: "Lucía", voice: "es-AR-f", role: "Voluntaria, estuvo en la reunión" },
      { id: "t", name: "Tomás", voice: "es-AR-m", role: "Voluntario, no pudo ir" },
      { id: "v", name: "Valeria", voice: "es-UY-f", role: "Voluntaria de Montevideo" },
    ],
    script: [
      { speaker: "t", text: "Hola, Lucía. Perdón por no ir ayer, tuve guardia en el hospital. ¿Qué dijeron?" },
      { speaker: "l", text: "Muchas cosas. Primero, Graciela hizo un balance: dijo que este verano habíamos juntado casi cuatro toneladas de residuos, mucho más de lo que esperaban en diciembre. Y aclaró que la mitad eran colillas y tapitas." },
      { speaker: "t", text: "¿Cuatro toneladas? Es increíble. ¿Y hablaron del año que viene?" },
      { speaker: "l", text: "Sí. Propuso que el año que viene trabajáramos también en las playas del sur, cuyos accesos son más difíciles, por lo que hará falta una camioneta. Preguntó si había alguien que tuviera carné profesional." },
      { speaker: "t", text: "Yo tengo. ¿Le aviso?" },
      { speaker: "l", text: "Sí, porque nadie levantó la mano, lo cual la preocupó bastante. Ah, y nos pidió que cualquiera que conociera a una empresa dispuesta a donar guantes se lo dijera, porque el presupuesto no alcanza." },
      { speaker: "v", text: "Hola, Tomás, soy Valeria. Una cosa que no puede olvidarse: el guardavidas jefe insistió en que nadie se metiera al agua para sacar residuos, pasara lo que pasara. Contó que en febrero un chico se metió con bandera roja para buscar una red y casi se lo lleva la resaca." },
      { speaker: "t", text: "Qué susto. ¿Y qué dijo de los turnos?" },
      { speaker: "l", text: "Que aunque el año pasado algunos se quejaron de madrugar, el turno de las siete se mantiene, porque es cuando la marea está baja. Dijo que en cuanto tuviera el calendario nos lo mandaría, para que cada uno eligiera sus días." },
      { speaker: "v", text: "Y Martín preguntó si podíamos hacer la reunión de marzo en la playa y no en la sede, a lo que Graciela respondió que sí, siempre que no lloviera." },
      { speaker: "t", text: "Perfecto. Entonces le escribo hoy mismo a Graciela por lo de la camioneta. ¿Algo más?" },
      { speaker: "v", text: "Sí, una advertencia de la coordinadora: dijo que, sea cual sea el clima, cada voluntario tiene que traer agua, gorra y protector solar, y que quien no los trajera no podría quedarse en la playa. También preguntó quién se animaba a explicar las normas a los grupos nuevos." },
      { speaker: "l", text: "Una última cosa: nos agradeció como si hubiéramos salvado el océano entero. Fue muy emotivo, la verdad." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la llamada completa sin transcripción. ¿Qué temas se trataron en la reunión?",
        exercise: {
          id: "b2-10-escucha-gist",
          type: "choice",
          prompt: "Reconstruye el sentido general.",
          items: [
            {
              q: "¿Para qué llama Lucía a Tomás?",
              options: [
                "Para pedirle que coordine la red el año que viene.",
                "Para contarle lo que se dijo en una reunión a la que él no fue.",
                "Para invitarlo a una jornada de limpieza el día siguiente.",
              ],
              answer: 1,
              why: "Tomás no pudo ir por una guardia y Lucía le transmite lo que se dijo.",
            },
            {
              q: "¿Qué temas se trataron?",
              options: [
                "El balance del verano, los planes, la seguridad y los turnos.",
                "Solo el presupuesto de la red.",
                "Una denuncia contra una empresa contaminante.",
              ],
              answer: 0,
              why: "Hablan de las cuatro toneladas, las playas del sur, la seguridad en el agua y el turno de las siete.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "b2-10-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué hará falta una camioneta?",
              options: [
                "Porque el presupuesto aumentó.",
                "Porque las playas del sur tienen accesos más difíciles.",
                "Porque la sede cambió de lugar.",
              ],
              answer: 1,
              why: "«…las playas del sur, cuyos accesos son más difíciles, por lo que hará falta una camioneta».",
            },
            {
              q: "¿En qué insistió el guardavidas jefe?",
              options: [
                "En que todos aprendieran a nadar.",
                "En que la reunión se hiciera en la playa.",
                "En que nadie se metiera al agua a sacar residuos.",
              ],
              answer: 2,
              why: "«…insistió en que nadie se metiera al agua para sacar residuos, pasara lo que pasara».",
            },
            {
              q: "¿Por qué se mantiene el turno de las siete?",
              options: [
                "Porque a esa hora la marea está baja.",
                "Porque nadie se quejó.",
                "Porque los guardavidas llegan a esa hora.",
              ],
              answer: 0,
              why: "«…es cuando la marea está baja».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo se transmite cada mensaje y en las estructuras de las semanas anteriores. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "b2-10-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con lo que muestra.",
          pairs: [
            { left: "dijo que este verano habíamos juntado casi cuatro toneladas", right: "afirmación transmitida con pluscuamperfecto" },
            { left: "preguntó si había alguien que tuviera carné profesional", right: "pregunta de sí o no con antecedente buscado" },
            { left: "nos pidió que cualquiera que conociera a una empresa se lo dijera", right: "petición transmitida con antecedente indeterminado" },
            { left: "en cuanto tuviera el calendario nos lo mandaría", right: "temporal desde el pasado (semana 7)" },
            { left: "las playas del sur, cuyos accesos son más difíciles", right: "relativo de posesión (semana 9)" },
            { left: "como si hubiéramos salvado el océano entero", right: "comparación irreal (semana 8)" },
          ],
          why: "En el estilo indirecto los tiempos se desplazan, y las estructuras de las semanas 6 a 9 siguen la misma lógica.",
        },
      },
    ],
  },
  reading: {
    title: "Cuatro toneladas y una camioneta prestada",
    genre: "Crónica periodística",
    frame: "Crónica publicada en la sección local de un diario de Mar del Plata al terminar la temporada de verano. Personas y organización son ficticias.",
    text: [
      "El domingo, cuando los últimos turistas cargaban las valijas en los autos, unos cuarenta voluntarios se reunieron en la sede de la red Costa Limpia, en el barrio del puerto, para hacer el balance de la temporada. Su coordinadora, Graciela Ibarra, una bióloga cuyas campañas empezaron hace seis años con apenas cinco amigos, abrió la reunión con una cifra: entre diciembre y marzo, la red retiró de las playas casi cuatro toneladas de residuos, bastante más de lo que nadie había calculado.",
      "Ibarra explicó que la mitad de lo recogido eran colillas y tapitas de plástico, lo cual, según dijo, «demuestra que el problema no son solo los grandes basurales, sino los pequeños gestos de cada día». Aclaró que, aunque la cifra parezca un éxito, no lo es del todo: «Si juntamos tanto, es porque se tiró mucho». Por mucho que la red crezca, insistió, sin un cambio de hábitos el trabajo no tiene fin.",
      "No todo fueron cifras. El guardavidas jefe de la zona sur, Ramón Etcheverry, recordó a los voluntarios que nadie debía entrar al agua para recoger residuos, pasara lo que pasara. Contó que en febrero un joven se había metido con bandera roja para rescatar una red de pesca y que la resaca casi se lo lleva. «Cualquiera que vea algo flotando, que avise a un guardavidas», pidió. «Para eso estamos».",
      "Luego llegó el turno de los planes. Ibarra propuso que el año próximo la red trabajara también en las playas del sur, en las que el acceso es más difícil y la basura se acumula durante semanas sin que nadie la retire. Para hacerlo, dijo, hace falta una camioneta y alguien que la maneje. Preguntó si había entre los presentes alguien con carné profesional, a lo que siguió un silencio incómodo. Dos días después, según confirmó la propia coordinadora a este diario, un voluntario que no había podido asistir se ofreció a conducir, y un comerciante del puerto, cuyo nombre prefirió no dar, prestó la camioneta.",
      "Hubo también discrepancias. Algunos voluntarios se quejaron de que el turno empezara a las siete de la mañana. Ibarra respondió que, si bien entendía el cansancio, era la única hora en que la marea estaba baja y la playa vacía, de manera que no pensaba cambiarlo. Prometió, eso sí, que en cuanto tuviera el calendario lo enviaría para que cada voluntario eligiera sus días con tiempo.",
      "Al terminar, la coordinadora agradeció a todos como si hubieran salvado el océano entero, y más de uno se emocionó. Dondequiera que se mire, el trabajo de esta red es pequeño frente al tamaño del problema. Pero quien haya caminado esta mañana por la playa Varese, sin una sola colilla a la vista, sabe que la diferencia existe.",
    ],
    glossary: [
      { es: "el basural", note: "lugar donde se acumula mucha basura (uso del Cono Sur)" },
      { es: "las valijas", note: "maletas (uso rioplatense)" },
      { es: "un silencio incómodo", note: "momento en que nadie habla y todos se sienten tensos" },
    ],
    tasks: [
      {
        id: "b2-10-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la crónica.",
        items: [
          {
            q: "¿Por qué la coordinadora no considera la cifra un éxito completo?",
            options: [
              "Porque esperaban juntar más residuos.",
              "Porque tanta basura indica que se tira mucho.",
              "Porque faltaron voluntarios en febrero.",
            ],
            answer: 1,
            why: "Segundo párrafo: «Si juntamos tanto, es porque se tiró mucho».",
          },
          {
            q: "¿Qué pasó después de la reunión con la camioneta?",
            options: [
              "Un voluntario se ofreció a manejarla y un comerciante la prestó.",
              "La red la compró con el presupuesto del año.",
              "Nadie se ofreció y el proyecto se suspendió.",
            ],
            answer: 0,
            why: "Cuarto párrafo.",
          },
          {
            q: "¿Por qué se mantiene el turno de las siete?",
            options: [
              "Porque lo votaron los voluntarios.",
              "Porque los guardavidas no trabajan más tarde.",
              "Porque a esa hora la marea está baja y la playa vacía.",
            ],
            answer: 2,
            why: "Quinto párrafo.",
          },
        ],
      },
      {
        id: "b2-10-lectura-voces",
        type: "classify",
        prompt: "¿Quién es responsable de cada idea: una persona citada o el autor de la crónica?",
        categories: ["Una persona citada en la crónica", "El autor de la crónica"],
        items: [
          { text: "La mitad de lo recogido eran colillas y tapitas.", cat: 0, why: "Lo explicó Ibarra." },
          { text: "Nadie debía entrar al agua para recoger residuos.", cat: 0, why: "Lo recordó el guardavidas jefe." },
          { text: "El trabajo de esta red es pequeño frente al tamaño del problema.", cat: 1, why: "Es una valoración del cronista." },
          { text: "El turno era la única hora en que la marea estaba baja.", cat: 0, why: "Es la respuesta de Ibarra." },
          { text: "Quien camine por la playa Varese sabe que la diferencia existe.", cat: 1, why: "Es la conclusión del autor." },
        ],
      },
      {
        id: "b2-10-lectura-interpretacion",
        type: "open",
        prompt: "Interpreta y transmite.",
        items: [
          {
            prompt: "Resume para un amigo, en 80–100 palabras y en estilo indirecto, lo que dijeron la coordinadora y el guardavidas. Después añade una frase con tu opinión, separada claramente de lo que dijeron ellos.",
            model: "La coordinadora explicó que habían juntado casi cuatro toneladas de residuos, pero aclaró que eso no era un éxito, porque significaba que se tiraba mucho. Propuso que el año siguiente trabajaran en las playas del sur y preguntó si alguien tenía carné profesional. El guardavidas recordó que nadie debía meterse al agua, pasara lo que pasara, y pidió que cualquiera que viera algo flotando avisara. En mi opinión, la idea más importante es la del cambio de hábitos.",
            checklist: [
              "Uso al menos tres verbos introductores distintos.",
              "Desplazo los tiempos correctamente.",
              "Separo mi opinión de lo que dijeron las personas citadas.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la crónica transmite palabras ajenas y combina las estructuras de las semanas 6 a 10.",
      items: [
        { quote: "una bióloga cuyas campañas empezaron hace seis años", note: "«Cuyas» concuerda con «campañas» (semana 9)." },
        { quote: "aunque la cifra parezca un éxito, no lo es del todo", note: "«Aunque» + subjuntivo: deja a un lado un dato conocido (semana 6)." },
        { quote: "nadie debía entrar al agua para recoger residuos, pasara lo que pasara", note: "Estilo indirecto con fórmula reduplicada desplazada al pasado." },
        { quote: "Preguntó si había entre los presentes alguien con carné profesional", note: "Pregunta de sí o no transmitida con «preguntó si»." },
        { quote: "en cuanto tuviera el calendario lo enviaría para que cada voluntario eligiera sus días", note: "Temporal y final desde el pasado: imperfecto de subjuntivo (semana 7)." },
      ],
    },
  },
  practice: {
    intro: "Este punto de control mezcla todas las clases de las semanas 6 a 10. Combina orden, elección, una recuperación amplia y escritura breve.",
    exercises: [
      {
        id: "b2-10-orden",
        type: "order",
        prompt: "Ordena las palabras para formar la frase completa.",
        items: [
          { words: ["Nos", "preguntó", "si", "había", "alguien", "que", "supiera", "primeros", "auxilios."], why: "«Preguntó si» + antecedente buscado en subjuntivo." },
          { words: ["Vayas", "donde", "vayas,", "lleva", "siempre", "una", "bolsa."], why: "Fórmula reduplicada: «vayas donde vayas»." },
          { words: ["Dijo", "que", "volveríamos", "en", "cuanto", "bajara", "la", "marea."], why: "Futuro desde el pasado: condicional y «en cuanto» + imperfecto de subjuntivo." },
        ],
      },
      {
        id: "b2-10-integracion",
        type: "choice",
        prompt: "Recupera las semanas 6 a 9: elige la opción correcta en cada frase.",
        items: [
          { q: "Aunque ___ frío, el sábado limpiamos igual. (no sabemos qué tiempo hará)", options: ["hará", "haga", "haría"], answer: 1, why: "Semana 6 · G137: posibilidad futura con «aunque»: subjuntivo." },
          { q: "Si bien la red ___ crecido, todavía faltan voluntarios.", options: ["ha", "haya", "habría"], answer: 0, why: "Semana 6 · G138: «si bien» + indicativo." },
          { q: "Ponemos contenedores en la rambla para que la gente no ___ basura en la arena.", options: ["deja", "dejar", "deje"], answer: 2, why: "Semana 7 · G140: finalidad con sujeto distinto: subjuntivo." },
          { q: "Hicimos el recorrido tal como ___ el guardavidas.", options: ["nos indicó", "nos indicara", "nos indicaría"], answer: 0, why: "Semana 8 · G141: manera conocida: indicativo." },
          { q: "Es la playa ___ encontramos la red de pesca.", options: ["que", "en la que", "la que"], answer: 1, why: "Semana 8 · G142: «encontrar algo en la playa»." },
          { q: "La marea subió de golpe, ___ tuvimos que retirarnos.", options: ["que", "cuyo", "por lo que"], answer: 2, why: "Semana 9 · G144: consecuencia de un hecho entero." },
        ],
      },
      {
        id: "b2-10-recuperacion",
        type: "gap",
        prompt: "Recupera las clases de las semanas 6 a 9 transmitiendo lo que se dijo.",
        items: [
          { q: "Graciela dijo: «Por mucho que nos cueste, seguiremos». → Dijo que, por mucho que nos ___, seguiríamos.", answers: [["costara", "costase"]], why: "Semana 6 · G138 desde el pasado: imperfecto de subjuntivo." },
          { q: "Ramón dijo: «Avisen antes de que suba la marea». → Pidió que avisáramos antes de que ___ la marea.", answers: [["subiera", "subiese"]], why: "Semana 7 · G139: «antes de que» desde el pasado." },
          { q: "Lucía comentó: «Juntamos más vidrio del que imaginaba». → Comentó que habían juntado más vidrio ___ imaginaba.", answers: [["del que"]], why: "Semana 8 · G141: «del que» concuerda con «vidrio»." },
          { q: "Martín explicó: «Es la ONG cuyas camisetas son verdes». → Explicó que era la ONG ___ camisetas eran verdes.", answers: [["cuyas"]], why: "Semana 9 · G143: «cuyas» concuerda con «camisetas»." },
        ],
      },
      {
        id: "b2-10-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Transmite en 50–70 palabras un mensaje de voz que recibiste ayer de tu jefe o de un amigo: una afirmación, una pregunta y una petición. Cambia los tiempos y las referencias.",
            model: "Ayer mi jefa me dejó un mensaje. Me dijo que la reunión del día siguiente se había pasado a las diez y que el cliente llegaría con su abogado. Me preguntó si podía preparar el informe esa misma noche y me pidió que, cualquiera que fuera el resultado, no firmara nada sin hablar antes con ella.",
            checklist: [
              "Transmito una afirmación, una pregunta y una petición.",
              "Desplazo tiempos y referencias («mañana» → «el día siguiente»).",
              "Uso al menos dos verbos introductores distintos.",
            ],
          },
          {
            prompt: "Escribe en 50–70 palabras tres normas para los voluntarios de una actividad que conozcas. Usa «cualquiera que», una fórmula reduplicada y una relativa con antecedente negado.",
            model: "Cualquiera que llegue después de las ocho debe avisar en el grupo. Haga el tiempo que haga, la actividad se mantiene, salvo con tormenta eléctrica. Y como no hay nadie que conozca todos los senderos, cada grupo irá siempre con un guía y nunca se separará de él.",
            checklist: [
              "«Cualquiera que» va con subjuntivo.",
              "La fórmula reduplicada está en subjuntivo.",
              "La relativa con antecedente negado está en subjuntivo.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un resumen de una reunión para alguien que no pudo asistir (200–280 palabras). Transmite lo que se afirmó, se preguntó y se pidió, incluye las condiciones y las objeciones, y combina las estructuras de las semanas 6 a 10.",
    context: "Puede ser la reunión de esta semana (la red Costa Limpia) u otra que conozcas: vecinos, trabajo, club, asociación. Quien lo lea necesita saber qué se decidió y qué tiene que hacer, sin confundir lo que dijeron otros con tu opinión.",
    steps: [
      "Anota quién dijo qué y clasifícalo: afirmaciones, preguntas, peticiones.",
      "Organiza el resumen en tres párrafos: balance o noticias, propuestas y discusiones, lo que tiene que hacer el lector.",
      "Incluye al menos una concesión, una temporal o final desde el pasado, una comparación, un relativo con preposición o «cuyo», un referente neutro y un antecedente indeterminado.",
      "Revisa el resumen: corrige los tiempos que no se hayan desplazado, comprueba las referencias de tiempo y lugar, y separa tu opinión del resto.",
    ],
    useLanguage: [
      "dijo / explicó / aclaró que + indicativo desplazado",
      "preguntó si / preguntó qué, dónde, cuándo",
      "pidió / propuso / insistió en que + imperfecto de subjuntivo",
      "cualquiera que, pasara lo que pasara, sea cual sea",
      "aunque, si bien, en cuanto, para que, de lo que, cuyo, lo cual, por lo que",
      "al día siguiente, ese día, allí",
    ],
    model: [
      "Hola, Tomás: como no pudiste venir el domingo, te resumo la reunión. Graciela hizo el balance de la temporada y dijo que habíamos juntado casi cuatro toneladas de residuos, bastante más de lo que se había calculado. Aclaró, sin embargo, que aunque la cifra pareciera buena, no era una victoria, porque indicaba que se seguía tirando mucha basura.",
      "Después propuso que el año próximo trabajáramos también en las playas del sur, en las que el acceso es complicado, por lo que hace falta una camioneta. Preguntó si había alguien que tuviera carné profesional, y nadie contestó, lo cual la preocupó. Ramón, el guardavidas jefe, insistió en que nadie se metiera al agua para recoger residuos, pasara lo que pasara, y pidió que cualquiera que viera algo flotando avisara a un guardavidas. Algunos se quejaron del turno de las siete; Graciela respondió que, si bien lo entendía, era la única hora con marea baja.",
      "Lo que te toca a ti: escribirle a Graciela por lo de la camioneta, ya que eres el único con carné que conozco. Ella prometió que en cuanto tuviera el calendario lo mandaría para que cada uno eligiera sus días. Mi opinión, por si te interesa: fue la mejor reunión del año.",
    ],
    checklist: [
      "Transmito al menos una afirmación, una pregunta y una petición con los tiempos desplazados.",
      "Uso verbos introductores variados y precisos.",
      "Incluyo un antecedente indeterminado o una fórmula reduplicada.",
      "Combino al menos cuatro estructuras de las semanas 6 a 9.",
      "Separo claramente mi opinión de lo que dijeron otros.",
    ],
    words: [200, 280],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Transmitir la reunión a un grupo nuevo",
        prompt: "Llegan cinco voluntarios nuevos que no estuvieron en la reunión. Cuéntales lo que se dijo: el balance, las normas de seguridad, los turnos y lo que se les pide. Usa estilo indirecto y al menos dos estructuras de las semanas 6 a 9.",
        prep: [
          "Anota tres cosas que se afirmaron, una que se preguntó y dos que se pidieron.",
          "Prepara una frase con «cualquiera que» y otra con «pasara lo que pasara».",
        ],
        seconds: 180,
        model: "Bienvenidos. Les cuento lo que se habló el domingo. Graciela dijo que habíamos juntado cuatro toneladas, más de lo que esperábamos. El guardavidas insistió en que nadie se metiera al agua, pasara lo que pasara, y pidió que cualquiera que viera algo flotando lo avisara. Los turnos empiezan a las siete, aunque cueste madrugar.",
        selfCheck: [
          "Desplazo los tiempos al transmitir.",
          "Marco con la voz la diferencia entre mi relato y las citas directas.",
          "Uso al menos dos estructuras de las semanas 6 a 9.",
        ],
      },
      {
        title: "Negociar una norma con un voluntario que no está de acuerdo",
        prompt: "Un voluntario te dice que la norma de no entrar al agua es exagerada y que él nada muy bien. Pregúntale por qué piensa así, transmítele lo que contó el guardavidas sobre febrero, concede lo razonable y mantén la norma.",
        prep: [
          "Prepara una pregunta abierta y una concesión con «aunque» o «por muy… que».",
          "Ten a mano el relato del guardavidas en estilo indirecto.",
        ],
        seconds: 180,
        model: "¿Por qué te parece exagerada? Entiendo que nades bien, pero por muy bien que nades, la resaca no avisa. Ramón contó que en febrero un chico se había metido con bandera roja y que casi se lo lleva el mar. Así que, aunque te parezca excesivo, la norma vale para cualquiera que esté en la jornada.",
        selfCheck: [
          "Hago al menos una pregunta real.",
          "Concedo con «aunque» o «por muy… que» y mantengo la norma.",
          "Transmito el relato del guardavidas con los tiempos desplazados.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva estas tarjetas a la próxima clase para comprobar con tu profesor lo que ya dominas de las semanas 6 a 10.",
    cards: [
      {
        move: "Transmite",
        task: "Cuéntale a tu profesor una conversación reciente: lo que te dijeron, lo que te preguntaron y lo que te pidieron. Pídele que te corrija los tiempos.",
        phrases: ["Me dijo que…", "Me preguntó si…", "Me pidió que…"],
      },
      {
        move: "Pregúntale",
        task: "Pregúntale si conoce a alguien que haga un voluntariado y qué norma de ese voluntariado le parece más importante.",
        phrases: ["¿Conoces a alguien que…?", "¿Qué norma te parece…?"],
      },
      {
        move: "Integra",
        task: "Cuenta una historia de dos minutos que incluya, al menos, «aunque», «en cuanto», «para que», «de lo que», «cuyo» y «lo cual». Tu profesor marca cada estructura cuando la oye.",
        phrases: ["Aunque…", "…, lo cual…"],
      },
      {
        move: "Defiende",
        task: "Defiende una norma que te parezca justa «pase lo que pase» y responde a las objeciones de tu profesor.",
        phrases: ["Pase lo que pase…", "Por mucho que…"],
      },
    ],
    bring: "Tu resumen de la reunión revisado y una lista de las tres estructuras de las semanas 6 a 10 que todavía te cuestan.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "Transmite en pasado: «Mañana traeré las pinzas».",
        options: [
          "Dijo que mañana traerá las pinzas.",
          "Dijo que al día siguiente llevaría las pinzas.",
          "Dijo que al día siguiente lleve las pinzas.",
        ],
        answer: 1,
        why: "Futuro → condicional; «mañana» → «al día siguiente»; «traer» → «llevar» si cambia el lugar.",
      },
      {
        type: "choice",
        q: "¿Qué frase sobre los guantes está bien formada?",
        options: [
          "Cualquiera persona que venga recibe guantes.",
          "Cualquier que venga recibe guantes.",
          "Cualquier persona que venga recibe guantes.",
        ],
        answer: 2,
        why: "«Cualquier» delante del sustantivo; relativa en subjuntivo.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué hizo la coordinadora?",
        options: [
          "Hizo una petición.",
          "Hizo una pregunta.",
          "Hizo una afirmación sobre el pasado.",
        ],
        answer: 1,
        why: "«Preguntó si…»: pregunta de sí o no transmitida.",
        audio: "La coordinadora preguntó si alguien podía quedarse hasta el mediodía.",
        voice: "es-AR-f",
      },
      {
        type: "gap",
        q: "Nos pidió que ___ (separar) las tapitas del resto del plástico.",
        answers: [["separáramos", "separásemos"]],
        hint: "Petición transmitida en pasado",
        why: "«Pidió que» + imperfecto de subjuntivo.",
      },
      {
        type: "gap",
        q: "No hay nadie en la red que ___ (conocer) la costa como Ramón.",
        answers: [["conozca"]],
        hint: "Antecedente negado",
        why: "Antecedente inexistente: subjuntivo.",
      },
      {
        type: "gap",
        q: "Dijo que en cuanto ___ (llegar) el camión cargaríamos las bolsas.",
        answers: [["llegara", "llegase"]],
        hint: "Temporal desde el pasado (semana 7)",
        why: "Futuro visto desde el pasado: imperfecto de subjuntivo.",
      },
      {
        type: "error",
        sentence: "Me preguntó que si vendré el sábado a la playa.",
        answers: ["Me preguntó si iría el sábado a la playa.", "Me preguntó si vendría el sábado a la playa."],
        why: "«Preguntó si» sin «que»; el futuro pasa a condicional.",
      },
      {
        type: "error",
        sentence: "Sea cual sean las condiciones, volveremos en marzo.",
        answers: ["Sean cuales sean las condiciones, volveremos en marzo."],
        why: "Concordancia con el plural «condiciones».",
      },
      {
        type: "error",
        sentence: "Es la playa que encontramos la red, lo que fue una sorpresa.",
        answers: ["Es la playa en la que encontramos la red, lo que fue una sorpresa.", "Es la playa donde encontramos la red, lo que fue una sorpresa."],
        why: "Falta la preposición que pide el verbo: «en la que» (semana 8).",
      },
      {
        type: "order",
        words: ["Pasara", "lo", "que", "pasara,", "nadie", "debía", "entrar", "al", "agua."],
        why: "Fórmula reduplicada desplazada al pasado en estilo indirecto.",
      },
      {
        type: "open",
        prompt: "Transmite en 80–100 palabras este mensaje de la coordinadora a alguien que no estuvo: «Aunque llueva, el sábado salimos. Cualquiera que tenga auto, que me escriba. ¿Quién puede traer agua? En cuanto sepa el número de voluntarios, les mando los turnos para que se organicen».",
        model: "La coordinadora nos dijo que, aunque lloviera, el sábado saldríamos. Pidió que cualquiera que tuviera auto le escribiera y preguntó quién podía llevar agua. También prometió que en cuanto supiera el número de voluntarios nos mandaría los turnos para que nos organizáramos. Así que, si tienes auto, escríbele, y si puedes, lleva un bidón de agua. Yo voy a ir pase lo que pase, porque la última vez juntamos más basura de la que esperábamos.",
        checklist: [
          "Desplazo todos los subjuntivos a imperfecto y el presente con valor de futuro a condicional.",
          "Transmito la pregunta con «preguntó quién».",
          "Uso al menos dos verbos introductores distintos.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Hablo de personas, lugares y cosas sin identificar con «cualquiera que», «dondequiera que», «cualquier… que» y fórmulas como «pase lo que pase».",
      "Elijo indicativo o subjuntivo en la relativa según el antecedente sea conocido, buscado o negado.",
      "Transmito afirmaciones, preguntas y peticiones desplazando tiempos y referencias, con verbos precisos.",
      "Combino en un texto la concesión, las temporales y finales, las comparaciones, los relativos con preposición, «cuyo» y los referentes neutros de las semanas 6 a 9.",
    ],
    review: [
      "Dentro de dos días, tapa la columna «Estilo indirecto» de la tabla de la teoría y reconstrúyela.",
      "Dentro de una semana, rehaz la tabla «Repaso de las semanas 6 a 9» con ejemplos de tu vida.",
      "En la próxima clase, lee tu resumen y pide a tu profesor que marque la estructura que más te cuesta para trabajarla en la semana 11.",
    ],
  },
  related: [
    { path: "/gramatica/antecedentes-desconocidos-dondequiera-que-cualquiera-que", label: "Clase: Antecedentes desconocidos: dondequiera que, cualquiera que" },
    { path: "/gramatica/estilo-indirecto-transmitir", label: "Clase: Estilo indirecto: afirmaciones, preguntas, mandatos" },
  ],
};
