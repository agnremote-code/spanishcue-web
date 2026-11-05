import type { Module } from "../../types";

/**
 * C1 · semana 2 · Autoestudio espejo de G169 (subjuntivo en relativas no
 * específicas y genéricas) y G170 (alternancias en concesivas con valor
 * pragmático). Repaso autónomo con una cooperativa de vivienda ficticia de
 * Montevideo. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w02: Module = {
  id: "c1-02",
  level: "c1",
  week: 2,
  kind: "core",
  title: "Quien se sume, aunque cueste: la cooperativa decide",
  subtitle: "Repaso del modo en relativas con antecedente desconocido o genérico y de las concesivas que informan, restan peso o imaginan",
  stop: {
    place: "Montevideo",
    country: "Uruguay",
  },
  minutes: 135,
  newObjectives: [
    "c1.gram.g169",
    "c1.gram.g170",
    "c1.voc.w02-cooperativa-vivienda",
    "c1.pron.w02-vocal-final-modo",
    "c1.lis.w02-radio-cooperativa",
    "c1.read.w02-cronica-asamblea",
    "c1.wri.w02-opinion-boletin",
    "c1.spk.w02-defensa-asamblea",
    "c1.fun.w02-conceder-sin-ceder",
    "c1.disc.w02-conceder-rebatir",
  ],
  reviewObjectives: ["c1.gram.g167","c1.gram.g168","c1.voc.w01-convivencia-postura","c1.pron.w01-acento-ara-ara","c1.lis.w01-junta-residencia","c1.read.w01-memoria-curso","c1.wri.w01-carta-balance","c1.spk.w01-balance-junta","c1.fun.w01-matizar-postura","c1.disc.w01-antes-ahora"],
  prerequisites: ["c1-01"],
  goal: {
    canDo: "Puedo describir a quién busca una comunidad sin confundir perfiles con personas concretas y defender una decisión concediendo los argumentos contrarios sin renunciar a lo esencial.",
    steps: [
      "Repasa en la teoría cuándo una relativa identifica a alguien y cuándo habla de quien sea, y qué hace cada concesiva en una discusión.",
      "Practica con frases de una cooperativa de vivienda de Montevideo que busca familias nuevas y discute un proyecto caro.",
      "Escucha la entrevista de radio y lee la crónica de la asamblea.",
      "Escribe un texto de opinión para el boletín, revísalo y defiéndelo en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste estas estructuras con tu profesor. Aquí las repasas con otra historia: una cooperativa de vivienda por ayuda mutua de Montevideo necesita incorporar familias y tiene que decidir si acepta un proyecto de obra más caro. Fíjate en que el modo no lo decide una palabra aislada, sino lo que sabe y lo que hace quien habla.",
    parts: [
      {
        heading: "¿Sabes de quién hablas? El antecedente decide el modo",
        body: [
          "En una relativa, el indicativo indica que el hablante se refiere a alguien o algo identificado, que existe y conoce: «las familias que se anotaron en marzo». El subjuntivo indica que habla de cualquiera que cumpla la condición, conocido o no, o de alguien que todavía no existe para él: «las familias que se anoten en marzo». El artículo, el pronombre o el cuantificador no deciden nada por sí solos: «el que», «quien», «los que», «todo el que» y «cualquiera que» admiten los dos modos según la mirada del hablante.",
          "Por eso la misma estructura cambia de sentido con el modo. «Busco al electricista que instaló los paneles» se refiere a una persona concreta; «busco un electricista que sepa instalar paneles» describe un perfil. «Haz lo que quieres» supone que sé lo que quieres; «haz lo que quieras» deja la elección abierta. En registro formal, «cuanto» y «cuantos» con subjuntivo equivalen a «todo lo que» o «todos los que»: «cuantos deseen participar».",
        ],
        table: {
          caption: "Misma estructura, dos miradas",
          head: ["Indicativo: referente identificado", "Subjuntivo: cualquiera que cumpla la condición"],
          rows: [
            ["Los socios que trabajaron el sábado cobran horas extra.", "Los socios que trabajen el sábado cobrarán horas extra."],
            ["Quien llamó ayer dejó su número.", "Quien llame mañana, que deje su número."],
            ["Elegimos la propuesta que menos cuesta.", "Elegiremos la propuesta que menos cueste."],
            ["Hay una vecina que sabe de electricidad.", "¿Hay alguna vecina que sepa de electricidad?"],
          ],
        },
        mistakes: [
          {
            wrong: "Necesitamos una arquitecta que conoce la normativa municipal de Montevideo.",
            right: "Necesitamos una arquitecta que conozca la normativa municipal de Montevideo.",
            why: "Todavía no la tienen: describen un perfil. Con indicativo se referirían a una arquitecta concreta que ya conocen.",
          },
          {
            wrong: "Los aspirantes que se presenten el lunes ya firmaron el acta.",
            right: "Los aspirantes que se presentaron el lunes ya firmaron el acta.",
            why: "Si ya firmaron, son personas identificadas: indicativo.",
          },
        ],
      },
      {
        heading: "Genéricos, superlativos, «único» y existencia negada",
        body: [
          "En las afirmaciones genéricas en presente, «quien» y «el que» admiten los dos modos con poca diferencia: «quien conoce / conozca el barrio sabe que el terreno se inunda». Pero los refranes mantienen el indicativo fijo («quien mucho abarca poco aprieta», «el que avisa no es traidor»), y cuando la oración principal mira al futuro o da una instrucción, la relativa va en subjuntivo: «quien quiera opinar, que pida la palabra».",
          "Con superlativos y ordinales los dos modos son correctos pero dicen cosas distintas: «es la mejor obra que hemos hecho» presenta un dato; «es la mejor obra que hayamos hecho nunca» lo enfatiza como valoración. Con «único», el indicativo señala a alguien concreto («Rosa es la única que ha leído el contrato») y el subjuntivo, a quien sea que resulte («el único presupuesto que aprobemos será el que respete el plazo»). Y si niegas que algo exista, la relativa va en subjuntivo: «no hay ningún socio que se oponga». Ojo: no basta con un «no»; si el antecedente es conocido, sigue el indicativo: «no he visto los planos que mandó la arquitecta».",
        ],
        examples: [
          { es: "No conocemos a ningún albañil que trabaje los domingos por ese precio.", note: "Existencia negada: subjuntivo." },
          { es: "No encontramos el presupuesto que nos mandaron en abril.", note: "Antecedente conocido, aunque haya negación: indicativo." },
          { es: "Es la primera vez que la cooperativa pide un préstamo tan grande.", note: "«La primera vez que» va con indicativo." },
        ],
        mistakes: [
          {
            wrong: "No hay nadie en la comisión que sabe leer un plano de estructura.",
            right: "No hay nadie en la comisión que sepa leer un plano de estructura.",
            why: "Se niega la existencia del antecedente: subjuntivo.",
          },
        ],
        tip: "Antes de conjugar, hazte una pregunta: ¿podría señalar con el dedo a esa persona o a esa cosa? Si puedes, indicativo; si no, subjuntivo.",
      },
      {
        heading: "Qué hace tu «aunque» en la discusión",
        body: [
          "Una concesiva presenta un obstáculo que no impide lo que dices. Con indicativo, el obstáculo es información nueva o un dato que afirmas: «aunque el proyecto es más caro, lo vamos a votar». Con subjuntivo y un hecho que todos conocen, haces un gesto polémico: concedes el dato para quitarle importancia, sin discutirlo: «aunque sea más caro, es el único que cumple la norma». Las dos frases hablan de un precio real; cambia lo que haces con él.",
          "El subjuntivo concesivo tiene además su propia escalera temporal. Presente: algo posible o conocido («aunque llueva, seguimos con la obra»). Imperfecto: algo poco probable o irreal en el presente («aunque nos dieran el doble de plazo, no llegaríamos»). Pluscuamperfecto: un pasado que no fue («aunque hubiéramos ahorrado más, el préstamo habría sido necesario»). «Incluso si» y «aun si» siguen los tiempos de «si» y nunca llevan presente de subjuntivo: «incluso si llueve», no «incluso si llueva».",
        ],
        table: {
          caption: "Un mismo obstáculo, cuatro gestos",
          head: ["Gesto", "Frase", "Modo y tiempo"],
          rows: [
            ["Informo del obstáculo", "Aunque el préstamo vence en diez años, la cuota es baja.", "indicativo"],
            ["Concedo un dato conocido y le resto peso", "Aunque el préstamo venza en diez años, no es eso lo que importa.", "presente de subjuntivo"],
            ["Imagino algo improbable", "Aunque el banco nos perdonara los intereses, la cuota seguiría siendo alta.", "imperfecto de subjuntivo"],
            ["Rehago un pasado que no fue", "Aunque hubiéramos pedido otro préstamo, la obra se habría retrasado.", "pluscuamperfecto de subjuntivo"],
          ],
        },
        mistakes: [
          {
            wrong: "Incluso si el banco tarde en responder, empezamos en julio.",
            right: "Incluso si el banco tarda en responder, empezamos en julio.",
            why: "«Incluso si» sigue los tiempos de «si»: nunca presente de subjuntivo.",
          },
          {
            wrong: "Aunque hubiéramos tenido más socios, terminaremos antes.",
            right: "Aunque hubiéramos tenido más socios, habríamos terminado antes.",
            why: "Un pasado contrafactual pide una consecuencia también contrafactual: condicional compuesto.",
          },
        ],
      },
      {
        heading: "Fórmulas compactas: reduplicadas, «por… que», «así» y «y eso que»",
        body: [
          "Las concesivas reduplicadas repiten el verbo para decir «da igual qué, quién o cómo»: «digan lo que digan», «pase lo que pase», «quieras o no», «sea como sea», «hagan lo que hagan». En pasado se conjugan en imperfecto: «dijeran lo que dijeran, siguieron adelante». «Por + adjetivo o adverbio + que» y «por mucho / más que» conceden en grado: «por cansados que estemos», «por más que insistan». Con «por más que» + indicativo concedes un hecho real del pasado: «por más que insistimos, el banco no cedió».",
          "Otras formas tienen marca de registro. «Aun + gerundio» es compacta y algo formal: «aun sabiendo que costaba más, lo eligieron». «Así + subjuntivo» es enfática, muy frecuente en el habla de buena parte de América y literaria en España: «no vendo mi parte así me paguen el doble». «Si bien» es propia de textos cuidados y va con indicativo; «y eso que», coloquial, añade al final un dato que hacía esperar lo contrario.",
        ],
        examples: [
          { es: "Pase lo que pase con el préstamo, el sábado se trabaja en la obra.", note: "Reduplicada: da igual lo que ocurra." },
          { es: "Por más que revisamos las cuentas, no encontramos el error.", note: "Hecho real del pasado: indicativo." },
          { es: "Terminamos la losa en dos semanas, y eso que llovió casi todos los días.", note: "«Y eso que» añade el obstáculo al final, con tono coloquial." },
        ],
        tip: "Para no confundir las concesivas reduplicadas, piensa que el verbo se repite con el mismo tiempo y que entre las dos formas va casi siempre «lo que», «como», «donde» o «o no».",
      },
    ],
  },
  grammar: {
    intro: "Para cada relativa, pregúntate si puedes señalar al antecedente. Para cada concesiva, pregúntate qué hace el hablante con el obstáculo.",
    exercises: [
      {
        id: "c1-02-gramatica-antecedente",
        type: "context",
        prompt: "Lee la situación y elige la frase que corresponde a lo que sabe el hablante.",
        items: [
          {
            context: "La comisión de admisión todavía no ha recibido ninguna solicitud y redacta el anuncio.",
            q: "¿Qué frase aparece en el anuncio?",
            options: [
              "Buscamos familias que pueden comprometer veinte horas semanales de trabajo.",
              "Buscamos familias que puedan comprometer veinte horas semanales de trabajo.",
              "Buscamos a las familias que pudieron comprometer veinte horas semanales de trabajo.",
            ],
            answer: 1,
            why: "Describen un perfil, no a familias concretas: subjuntivo.",
          },
          {
            context: "Ya terminó la jornada de trabajo del sábado. El tesorero habla de quienes fueron.",
            q: "¿Qué dice?",
            options: [
              "Los que vinieron el sábado ya tienen sus horas anotadas.",
              "Los que vengan el sábado ya tienen sus horas anotadas.",
              "Los que vinieran el sábado ya tienen sus horas anotadas.",
            ],
            answer: 0,
            why: "Son personas identificadas que ya fueron: indicativo.",
          },
          {
            context: "Ninguno de los cuatro presupuestos cumple el plazo. La presidenta lo resume.",
            q: "¿Qué frase es correcta?",
            options: [
              "No recibimos ningún presupuesto que cumple el plazo de entrega.",
              "No recibimos el presupuesto que cumpla el plazo de entrega.",
              "No recibimos ningún presupuesto que cumpla el plazo de entrega.",
            ],
            answer: 2,
            why: "Se niega la existencia: «ningún… que» + subjuntivo.",
          },
          {
            context: "Rosa es, de hecho, la única socia que leyó entero el contrato con el banco.",
            q: "¿Cómo lo dice la presidenta?",
            options: [
              "Rosa es la única que leyó entero el contrato.",
              "Rosa es la única que leyera entero el contrato.",
              "Rosa es la única que lea entero el contrato.",
            ],
            answer: 0,
            why: "«Única» con una persona identificada y un hecho real: indicativo.",
          },
        ],
      },
      {
        id: "c1-02-gramatica-concesivas",
        type: "gap",
        prompt: "Completa con la forma adecuada del verbo entre paréntesis. Fíjate en el gesto que se describe al final de cada frase.",
        items: [
          { q: "Aunque el terreno ___ (estar) lejos del centro, tiene ómnibus cada diez minutos. (informas de un dato que el oyente no sabía)", answers: [["está"]], why: "Concesiva informativa: indicativo." },
          { q: "Sí, ya sé que el terreno está lejos, pero aunque ___ (estar) lejos, es el único que podemos pagar. (restas peso a un dato que todos conocen)", answers: [["esté"]], why: "Concesiva polémica con un hecho conocido: presente de subjuntivo." },
          { q: "Aunque el banco nos ___ (bajar) los intereses, la cuota seguiría siendo alta para algunas familias. (algo improbable)", answers: [["bajara", "bajase"]], why: "Hipótesis improbable en el presente: imperfecto de subjuntivo." },
          { q: "Aunque ___ (empezar) la obra en enero, no habríamos terminado antes del invierno. (un pasado que no ocurrió)", answers: [["hubiéramos empezado", "hubiésemos empezado"]], why: "Contrafactual pasado: pluscuamperfecto." },
          { q: "Por más que ___ (insistir) en la reunión de marzo, la intendencia no cambió el plazo. (un hecho real del pasado)", answers: [["insistimos"]], why: "«Por más que» con un hecho real: indicativo." },
          { q: "Por complicado que ___ (parecer) el trámite, en dos semanas lo resolvemos. (da igual el grado)", answers: [["parezca"]], why: "«Por + adjetivo + que» pide subjuntivo." },
        ],
      },
      {
        id: "c1-02-gramatica-gesto",
        type: "classify",
        prompt: "Clasifica cada concesiva según lo que hace el hablante con el obstáculo.",
        categories: ["Informa de un obstáculo real", "Resta peso a un dato conocido o a cualquier circunstancia", "Imagina algo improbable o un pasado que no fue"],
        items: [
          { text: "Aunque la cuota sube en mayo, nadie se ha quejado.", cat: 0, why: "Indicativo: da la subida como información." },
          { text: "Aunque la cuota suba, ¿qué quieres?, no hay otra forma de pagar el préstamo.", cat: 1, why: "Concede un dato conocido para quitarle importancia." },
          { text: "Aunque nos regalaran los materiales, faltarían manos.", cat: 2, why: "Imperfecto de subjuntivo: hipótesis improbable." },
          { text: "Digan lo que digan en el barrio, la cooperativa sigue adelante.", cat: 1, why: "Reduplicada: da igual lo que se diga." },
          { text: "Si bien el plazo es corto, la comisión lo considera viable.", cat: 0, why: "«Si bien» + indicativo informa del obstáculo." },
          { text: "Aunque hubiéramos tenido otro terreno, el costo habría sido parecido.", cat: 2, why: "Pluscuamperfecto: pasado contrafactual." },
          { text: "Por mucho que se quejen, el reglamento se aplica a todos.", cat: 1, why: "Concesión de grado: no importa cuánto se quejen." },
        ],
      },
      {
        id: "c1-02-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de modo o de tiempo. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "Quien quiere participar en la comisión de obra, que se anote antes del viernes.",
            answers: ["Quien quiera participar en la comisión de obra, que se anote antes del viernes."],
            why: "La principal es una instrucción con «que»: la relativa genérica va en subjuntivo.",
          },
          {
            sentence: "Aun si nos falte un socio, empezamos la losa el lunes.",
            answers: ["Aun si nos falta un socio, empezamos la losa el lunes."],
            why: "«Aun si» sigue los tiempos de «si»: nunca presente de subjuntivo.",
          },
          {
            sentence: "Dijeran lo que digan los vecinos, la cooperativa terminó la obra a tiempo.",
            answers: ["Dijeran lo que dijeran los vecinos, la cooperativa terminó la obra a tiempo."],
            why: "En la reduplicada se repite el mismo tiempo; en un relato pasado, imperfecto.",
          },
          {
            sentence: "No he leído ningún informe que explique el retraso, ni siquiera el que mande la constructora.",
            answers: ["No he leído ningún informe que explique el retraso, ni siquiera el que mandó la constructora."],
            why: "El informe de la constructora es un antecedente conocido: indicativo, aunque haya negación.",
          },
        ],
      },
      {
        id: "c1-02-gramatica-reescritura",
        type: "open",
        prompt: "Reescribe cada intervención según la instrucción. No hay una única respuesta: compara con el modelo y con la lista.",
        items: [
          {
            prompt: "Un socio dice: «Los arquitectos que conocemos son todos carísimos». Reescribe la idea como un anuncio que describa el profesional que busca la cooperativa, con al menos dos relativas en subjuntivo.",
            model: "La cooperativa busca un arquitecto o una arquitecta que tenga experiencia en vivienda por ayuda mutua, que pueda acompañar la obra los sábados y cuyos honorarios se ajusten al presupuesto aprobado en asamblea.",
            checklist: [
              "Las relativas describen un perfil, no a personas concretas.",
              "Uso al menos dos verbos en subjuntivo dentro de relativas.",
            ],
          },
          {
            prompt: "Una vecina objeta: «El proyecto nuevo cuesta un treinta por ciento más». Respóndele en dos frases: primero concede el dato y réstale peso; después añade una hipótesis improbable para reforzar tu postura.",
            model: "Aunque cueste un treinta por ciento más, es el único que respeta la normativa de accesibilidad. Y aunque nos ofrecieran otro más barato mañana, tendríamos que volver a pedir todos los permisos.",
            checklist: [
              "La primera concesiva usa presente de subjuntivo con un dato conocido.",
              "La hipótesis improbable usa imperfecto de subjuntivo y condicional.",
              "No niego el dato de la vecina: le quito importancia.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de una cooperativa de vivienda y de cómo se discute en una asamblea.",
    groups: [
      {
        title: "La cooperativa y la obra",
        items: [
          { es: "la ayuda mutua", note: "sistema en el que los socios construyen sus viviendas con su propio trabajo" },
          { es: "las horas comprometidas", note: "tiempo de trabajo que cada familia se obliga a aportar a la obra" },
          { es: "el núcleo familiar", note: "las personas que vivirán juntas en una misma vivienda" },
          { es: "el aspirante", note: "persona o familia que solicita entrar en la cooperativa" },
          { es: "la comisión de obra", note: "grupo de socios que organiza y controla la construcción" },
          { es: "el presupuesto", note: "cálculo anticipado de lo que costará una obra" },
          { es: "la losa", note: "estructura de hormigón que forma un techo o un piso" },
          { es: "adjudicar las viviendas", note: "asignar a cada familia la suya según un criterio acordado" },
        ],
      },
      {
        title: "Discutir en una asamblea",
        items: [
          { es: "pedir la palabra", note: "solicitar el turno para hablar" },
          { es: "restar importancia", note: "presentar algo como menos grave de lo que parece" },
          { es: "dar el brazo a torcer", note: "aceptar finalmente la postura contraria" },
          { es: "mantenerse en sus trece", note: "no cambiar de opinión pese a los argumentos" },
          { es: "a regañadientes", note: "aceptando algo de mala gana" },
          { es: "someter a votación", note: "hacer que una propuesta se decida votando" },
          { es: "salir adelante", note: "ser aprobado o llevarse a cabo pese a las dificultades" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-02-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la ayuda mutua", right: "sistema en el que los socios construyen sus viviendas con su propio trabajo" },
          { left: "el aspirante", right: "persona o familia que solicita entrar en la cooperativa" },
          { left: "adjudicar las viviendas", right: "asignar a cada familia la suya según un criterio acordado" },
          { left: "dar el brazo a torcer", right: "aceptar finalmente la postura contraria" },
          { left: "mantenerse en sus trece", right: "no cambiar de opinión pese a los argumentos" },
          { left: "a regañadientes", right: "aceptando algo de mala gana" },
          { left: "restar importancia", right: "presentar algo como menos grave de lo que parece" },
        ],
      },
      {
        id: "c1-02-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["horas comprometidas", "pidió la palabra", "salió adelante", "comisión de obra", "sometió a votación"],
        items: [
          { q: "Cada familia aspirante debe cumplir veintiuna ___ por semana, la trabaje quien la trabaje.", answers: [["horas comprometidas"]] },
          { q: "Aunque la discusión fue larga, la propuesta ___ por cuarenta votos contra doce.", answers: [["salió adelante"]] },
          { q: "La ___ revisará los presupuestos que lleguen antes del día quince.", answers: [["comisión de obra"]] },
          { q: "Cuando la presidenta ___ el cambio de arquitecta, varios socios se abstuvieron.", answers: [["sometió a votación"]] },
          { q: "Don Washington ___ y, por más que lo interrumpieron, terminó su argumento.", answers: [["pidió la palabra"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La vocal final que cambia el modo y el grupo fónico de las concesivas",
    explanation: [
      "Muchas oposiciones de modo dependen de una sola vocal átona al final de la palabra: cuesta / cueste, llueve / llueva, sube / suba, hay / haya. En el habla rápida esa vocal se debilita y, si no la pronuncias con claridad, tu oyente no sabrá si informas de un dato o le restas peso. Mantén la vocal final abierta y completa, sin alargarla, sobre todo antes de una pausa.",
      "Las concesivas antepuestas terminan con el tono suspendido o ligeramente ascendente, seguido de una pausa breve, y la oración principal cae al final. Las reduplicadas («digan lo que digan», «pase lo que pase») se dicen como un solo grupo fónico, sin pausa interna, y la pausa llega después.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para afinar el oído y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "Indicativo y subjuntivo separados por una vocal",
      head: ["Indicativo", "Subjuntivo", "Frase de práctica"],
      rows: [
        ["cuesta", "cueste", "Aunque cueste más, lo votamos."],
        ["llueve", "llueva", "Aunque llueva, se trabaja."],
        ["sube", "suba", "Aunque la cuota sube, nadie protesta."],
        ["hay", "haya", "Aunque haya quejas, seguimos."],
      ],
    },
    perceive: {
      id: "c1-02-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué forma verbal oyes por la vocal final.",
      items: [
        {
          q: "¿Qué forma de «costar» oyes?",
          options: ["cuesta: indicativo, informa", "cueste: subjuntivo, resta peso"],
          answer: 1,
          why: "Se oye «cueste», con -e final: subjuntivo polémico.",
          audio: "Aunque cueste un poco más, es el único proyecto accesible.",
          voice: "es-UY-m",
        },
        {
          q: "¿Qué forma de «llover» oyes?",
          options: ["llueva: subjuntivo", "llueve: indicativo"],
          answer: 1,
          why: "Se oye «llueve»: la frase informa de que está lloviendo.",
          audio: "Aunque llueve desde el martes, la cuadrilla terminó el muro.",
          voice: "es-UY-f",
        },
        {
          q: "¿Qué forma oyes al principio?",
          options: ["haya: subjuntivo", "hay: indicativo"],
          answer: 0,
          why: "Se oye la sílaba final -ya: «haya».",
          audio: "Aunque haya socios en contra, la asamblea ya decidió.",
          voice: "es-AR-m",
        },
        {
          q: "¿Cómo se agrupa la concesiva que oyes?",
          options: ["Con una pausa entre «digan» y «lo que»", "Como un solo grupo, con la pausa después de «digan lo que digan»", "Sin ninguna pausa en toda la frase"],
          answer: 1,
          why: "La reduplicada forma un solo grupo fónico; la pausa llega antes de la principal.",
          audio: "Digan lo que digan, la cooperativa no vende el terreno.",
          voice: "es-UY-f",
        },
      ],
    },
    produce: [
      { text: "Aunque cueste más, es el único proyecto que cumple la norma.", tip: "Pronuncia completa la -e de «cueste» y haz la pausa después de «más».", voice: "es-UY-m" },
      { text: "Aunque la cuota sube en mayo, nadie se ha quejado.", tip: "Aquí informas: «sube», con -e clara y tono neutro.", voice: "es-UY-f" },
      { text: "Pase lo que pase con el banco, el sábado trabajamos.", tip: "Di «pase lo que pase» de un tirón y sube un poco el tono antes de la pausa.", voice: "es-AR-m" },
      { text: "Por más que insistimos, la intendencia no cambió el plazo.", tip: "Acentúa «más» y deja caer el tono al final.", voice: "es-UY-f" },
    ],
    spelling: "Por escrito, la diferencia es una letra: revisa siempre la vocal final de los verbos detrás de «aunque», «por más que» y «que» en relativas.",
  },
  listening: {
    title: "Radio barrial: la cooperativa que busca vecinos",
    context: "En una radio comunitaria de Montevideo, la periodista Lucía entrevista a Gonzalo, presidente de una cooperativa de vivienda que busca familias nuevas, y a la arquitecta Andrea, que defiende un proyecto más caro de lo previsto. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "l", name: "Lucía", voice: "es-UY-f", role: "Periodista de la radio" },
      { id: "g", name: "Gonzalo", voice: "es-UY-m", role: "Presidente de la cooperativa" },
      { id: "a", name: "Andrea", voice: "es-AR-f", role: "Arquitecta del proyecto" },
    ],
    script: [
      { speaker: "l", text: "Buenas tardes. Hoy tenemos en el estudio a Gonzalo, presidente de la cooperativa Nuevo Horizonte, y a Andrea, la arquitecta que dirige la obra. Gonzalo, ustedes buscan familias nuevas. ¿A quién buscan exactamente?" },
      { speaker: "g", text: "Buscamos núcleos familiares que vivan o trabajen en el barrio y que puedan comprometer veintiuna horas de trabajo por semana. No pedimos que sepan de construcción. Las familias que entraron el año pasado tampoco sabían nada, y hoy levantan muros mejor que yo." },
      { speaker: "l", text: "¿Y quien no tenga tiempo entre semana?" },
      { speaker: "g", text: "Quien no pueda venir entre semana, que venga el sábado y el domingo. Lo que importa es cumplir las horas, las haga quien las haga dentro de la familia." },
      { speaker: "l", text: "Andrea, hay vecinos que dicen que el proyecto nuevo es un treinta por ciento más caro." },
      { speaker: "a", text: "Y es verdad, no lo voy a negar. Pero aunque sea más caro, es el único que cumple la normativa de accesibilidad. Por más que revisamos el proyecto anterior, no encontramos ninguna forma de meter un ascensor sin rehacer los planos." },
      { speaker: "l", text: "Hay quien piensa que podrían haber ahorrado en materiales." },
      { speaker: "a", text: "Mire, aunque hubiéramos comprado los materiales más baratos del mercado, el costo final habría sido casi el mismo, porque lo que encarece la obra es la estructura. Y aunque mañana nos ofrecieran un proyecto más barato, tendríamos que pedir otra vez todos los permisos." },
      { speaker: "g", text: "Yo quiero agregar algo. Por complicado que parezca, la asamblea votó con información. Hubo socios que se mantuvieron en sus trece hasta el final, y está bien. Pero la propuesta salió adelante, y eso que la discusión duró casi cuatro horas." },
      { speaker: "l", text: "Última pregunta: ¿qué le dirían a una familia que esté dudando?" },
      { speaker: "g", text: "Que venga a una jornada de trabajo antes de decidir. Pase lo que pase después, va a conocer a sus futuros vecinos." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la entrevista completa sin abrir la transcripción. ¿Qué dos temas trata?",
        exercise: {
          id: "c1-02-escucha-gist",
          type: "choice",
          prompt: "Reconstruye los temas principales.",
          items: [
            {
              q: "¿Qué busca la cooperativa?",
              options: [
                "Una constructora que termine la obra.",
                "Familias del barrio que puedan aportar horas de trabajo.",
                "Un banco que les preste dinero sin intereses.",
              ],
              answer: 1,
              why: "Gonzalo describe a los núcleos familiares que buscan.",
            },
            {
              q: "¿Qué hace Andrea con la crítica sobre el costo?",
              options: [
                "Niega que el proyecto sea más caro.",
                "Promete buscar un proyecto más barato.",
                "Acepta el dato y explica por qué no cambia la decisión.",
              ],
              answer: 2,
              why: "«Es verdad, no lo voy a negar. Pero aunque sea más caro…»",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota las condiciones y los argumentos concretos.",
        exercise: {
          id: "c1-02-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué pasa con las familias que no pueden ir entre semana?",
              options: [
                "Pueden cumplir las horas el fin de semana.",
                "Quedan excluidas de la cooperativa.",
                "Pagan una cuota extra en lugar de trabajar.",
              ],
              answer: 0,
              why: "«Quien no pueda venir entre semana, que venga el sábado y el domingo.»",
            },
            {
              q: "Según Andrea, ¿qué encarece de verdad la obra?",
              options: [
                "Los materiales de terminación.",
                "Los permisos municipales.",
                "La estructura necesaria para el ascensor y la accesibilidad.",
              ],
              answer: 2,
              why: "Dice que lo que encarece la obra es la estructura.",
            },
            {
              q: "¿Cuánto duró la discusión en la asamblea?",
              options: [
                "Casi cuatro horas.",
                "Una tarde entera, en dos sesiones.",
                "Menos de una hora.",
              ],
              answer: 0,
              why: "«Y eso que la discusión duró casi cuatro horas.»",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en qué hace cada frase. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-02-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la entrevista con su función.",
          pairs: [
            { left: "núcleos familiares que vivan o trabajen en el barrio", right: "describe un perfil, no a familias concretas" },
            { left: "las familias que entraron el año pasado", right: "se refiere a personas identificadas" },
            { left: "aunque sea más caro, es el único que cumple", right: "concede un dato conocido y le resta peso" },
            { left: "aunque hubiéramos comprado los materiales más baratos", right: "rehace un pasado que no ocurrió" },
            { left: "por más que revisamos el proyecto anterior", right: "concede un hecho real del pasado" },
            { left: "y eso que la discusión duró casi cuatro horas", right: "añade al final un obstáculo, en tono coloquial" },
          ],
          why: "El modo de la relativa depende de si el referente está identificado; el de la concesiva, de lo que hace el hablante con el obstáculo.",
        },
      },
    ],
  },
  reading: {
    title: "Cuatro horas para un ascensor",
    genre: "Crónica del boletín de una cooperativa",
    frame: "Crónica publicada en el boletín mensual de la cooperativa Nuevo Horizonte, en un barrio de Montevideo. La cooperativa, las personas y las cifras son ficticias.",
    text: [
      "La asamblea del sábado empezó a las tres de la tarde y terminó pasadas las siete, cuando ya no quedaba mate en ningún termo. Había un solo punto en el orden del día, pero era de los que dividen: aprobar o rechazar el proyecto de la arquitecta Andrea Benítez, que incorpora un ascensor y rampas en los tres bloques y cuesta un treinta por ciento más que el proyecto original. Asistieron cincuenta y dos de las sesenta familias socias, una participación que nadie recordaba desde la compra del terreno.",
      "Abrió el debate Washington Pereira, uno de los fundadores, con una pregunta que muchos tenían en la cabeza: «¿Quién nos va a prestar la diferencia?». Pereira recordó que, por más que la comisión había negociado con el banco, la cuota mensual subiría para todos, y que hay familias que ya llegan justas a fin de mes. Nadie le discutió el dato. Lo que se discutió fue qué hacer con él.",
      "La arquitecta respondió sin rodeos. Reconoció que el proyecto es más caro y que, aunque lo sea, es el único que cumple la normativa de accesibilidad vigente. Explicó que, aunque la cooperativa hubiera elegido los materiales más baratos, el costo apenas habría bajado, porque el aumento se debe a la estructura que necesita el ascensor. Y añadió una frase que se repitió después en los pasillos: «Una vivienda que no pueda habitar quien envejezca en ella es una vivienda a plazo».",
      "A partir de ahí la discusión cambió de tono. Marta Silveira, que vive con su madre de ochenta y un años, pidió la palabra para recordar que la cooperativa existe para que vivan en ella quienes la construyen, tengan la edad que tengan. Otros socios insistieron en que no hay ninguna familia que pueda asumir una cuota mucho más alta sin dejar de cumplir sus horas de obra. Pereira, por su parte, se mantuvo en sus trece hasta el final, aunque reconoció que no tenía una alternativa que resolviera la accesibilidad.",
      "La comisión de obra propuso entonces una solución intermedia: quienes tengan ingresos más bajos podrán compensar parte del aumento con horas extra de trabajo, y la diferencia se repartirá entre todas las familias que entren a partir de este año. La propuesta no convenció a todos, pero recogió buena parte de las objeciones. Por complicado que resulte el cálculo, la tesorería se comprometió a presentarlo por escrito antes de fin de mes, con un ejemplo para cada tipo de núcleo familiar.",
      "A las siete y diez, la presidenta sometió el proyecto a votación. Salió adelante con treinta y ocho votos a favor, nueve en contra y cinco abstenciones, y eso que, al empezar la tarde, casi nadie apostaba por él. Varios de los que votaron en contra se acercaron después a la arquitecta para preguntarle por el calendario de la obra. Dijeran lo que dijeran durante la asamblea, todos se quedaron a ayudar a guardar las sillas.",
      "Queda ahora la tarea más urgente: encontrar doce familias nuevas que vivan o trabajen en el barrio y que estén dispuestas a sumarse a la obra. Quien conozca a alguien que cumpla esas condiciones, que le pase el contacto de la comisión de admisión. La primera jornada de puertas abiertas será el último sábado del mes, llueva o no llueva.",
    ],
    glossary: [
      { es: "termo", note: "recipiente que conserva caliente el agua del mate" },
      { es: "llegar justo a fin de mes", note: "tener apenas el dinero necesario para cubrir los gastos del mes" },
      { es: "vivienda a plazo", note: "aquí, vivienda que solo sirve durante un tiempo limitado" },
    ],
    tasks: [
      {
        id: "c1-02-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la crónica.",
        items: [
          {
            q: "¿Qué discutieron realmente los socios sobre el dato de Pereira?",
            options: [
              "Si el aumento de la cuota era real o exagerado.",
              "Qué hacer con un aumento que nadie negaba.",
              "Si el banco había mentido en la negociación.",
            ],
            answer: 1,
            why: "«Nadie le discutió el dato. Lo que se discutió fue qué hacer con él.»",
          },
          {
            q: "¿Cuál fue la solución intermedia de la comisión de obra?",
            options: [
              "Compensar parte del aumento con horas de trabajo y repartir la diferencia entre las familias nuevas.",
              "Quitar el ascensor de uno de los tres bloques.",
              "Pedir un segundo préstamo a otro banco.",
            ],
            answer: 0,
            why: "Lo explica el quinto párrafo.",
          },
          {
            q: "¿Qué muestra el final de la crónica sobre los que votaron en contra?",
            options: [
              "Que pidieron repetir la votación.",
              "Que se fueron de la cooperativa.",
              "Que, pese al desacuerdo, siguieron implicados en la obra.",
            ],
            answer: 2,
            why: "Preguntaron por el calendario y ayudaron a guardar las sillas.",
          },
        ],
      },
      {
        id: "c1-02-lectura-funcion",
        type: "match",
        prompt: "Relaciona cada fragmento de la crónica con lo que hace su relativa o su concesiva.",
        pairs: [
          { left: "aunque lo sea, es el único que cumple la normativa", right: "concede un dato conocido para quitarle peso" },
          { left: "no hay ninguna familia que pueda asumir una cuota mucho más alta", right: "niega la existencia de un referente" },
          { left: "tengan la edad que tengan", right: "concesiva reduplicada: da igual la edad" },
          { left: "doce familias nuevas que vivan o trabajen en el barrio", right: "describe un perfil que todavía no se conoce" },
        ],
      },
      {
        id: "c1-02-lectura-evaluacion",
        type: "open",
        prompt: "Valora una frase de la crónica con argumentos propios.",
        items: [
          {
            prompt: "La arquitecta dice: «Una vivienda que no pueda habitar quien envejezca en ella es una vivienda a plazo». Explica en 70–90 palabras por qué las dos relativas van en subjuntivo y si te parece un buen argumento para convencer a quien se opone por motivos económicos.",
            model: "Las dos relativas describen casos posibles, no personas ni casas concretas: cualquier vivienda que tenga ese defecto y cualquiera que envejezca allí. Por eso van en subjuntivo. Me parece un buen argumento porque no discute el costo, sino que cambia el plazo de la comparación: lo barato hoy puede obligar a mudarse dentro de veinte años. Aun así, a una familia que llega justa a fin de mes le haría falta, además, una solución concreta para pagar.",
            checklist: [
              "Explico que las relativas no identifican referentes concretos.",
              "Tomo posición sobre el argumento y la justifico.",
              "Uso al menos una concesiva propia.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la crónica combina relativas y concesivas para contar posturas enfrentadas.",
      items: [
        { quote: "por más que la comisión había negociado con el banco, la cuota mensual subiría para todos", note: "«Por más que» + indicativo: concede un hecho real del pasado." },
        { quote: "aunque la cooperativa hubiera elegido los materiales más baratos, el costo apenas habría bajado", note: "Pasado contrafactual: pluscuamperfecto de subjuntivo y condicional compuesto." },
        { quote: "Pereira, por su parte, se mantuvo en sus trece hasta el final, aunque reconoció que no tenía una alternativa que resolviera la accesibilidad", note: "Concesiva informativa en indicativo y relativa en subjuntivo: la alternativa no existe." },
        { quote: "Quien conozca a alguien que cumpla esas condiciones, que le pase el contacto", note: "Relativas genéricas en subjuntivo con una principal que da una instrucción." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención y escritura guiada.",
    exercises: [
      {
        id: "c1-02-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de la asamblea.",
        items: [
          {
            words: ["Quien", "no", "esté", "de", "acuerdo,", "que", "pida", "la", "palabra."],
            why: "Relativa genérica en subjuntivo con una principal que da una instrucción.",
          },
          {
            words: ["Por", "caro", "que", "sea,", "el", "ascensor", "es", "imprescindible."],
            why: "«Por + adjetivo + que» con subjuntivo.",
          },
          {
            words: ["No", "conozco", "a", "nadie", "que", "pueda", "pagar", "esa", "cuota."],
            why: "Existencia negada: subjuntivo.",
          },
        ],
      },
      {
        id: "c1-02-intencion",
        type: "context",
        prompt: "Elige la frase que corresponde a la intención descrita.",
        items: [
          {
            context: "Quieres dejar claro que aceptarás la decisión, cualquiera que sea.",
            q: "¿Qué dices al final de la asamblea?",
            options: [
              "Decidan lo que decidan, voy a respetar el resultado.",
              "Decidan lo que decidieron, voy a respetar el resultado.",
              "Aunque decidieron, voy a respetar el resultado.",
            ],
            answer: 0,
            why: "Reduplicada con el mismo tiempo: da igual lo que decidan.",
          },
          {
            context: "Le cuentas a un amigo un dato que él no conocía: la obra está atrasada, pero las familias están contentas.",
            q: "¿Qué frase informa del obstáculo?",
            options: [
              "Aunque la obra vaya atrasada, las familias están contentas.",
              "Aunque la obra fuera atrasada, las familias estarían contentas.",
              "Aunque la obra va atrasada, las familias están contentas.",
            ],
            answer: 2,
            why: "Para informar de un dato nuevo, indicativo.",
          },
          {
            context: "Hablas de la persona concreta que la comisión ya contrató para la instalación eléctrica.",
            q: "¿Qué frase es la adecuada?",
            options: [
              "Llama al electricista que sepa de paneles solares; ya está contratado.",
              "Llama al electricista que sabe de paneles solares; ya está contratado.",
              "Llama a un electricista que sepa de paneles solares; ya está contratado.",
            ],
            answer: 1,
            why: "Persona identificada: artículo definido e indicativo. Con subjuntivo, la relativa describiría un perfil que todavía buscas.",
          },
        ],
      },
      {
        id: "c1-02-reduplicadas",
        type: "match",
        prompt: "Relaciona cada concesiva reduplicada con su paráfrasis.",
        pairs: [
          { left: "pase lo que pase", right: "ocurra cualquier cosa" },
          { left: "quieras o no", right: "tanto si estás de acuerdo como si no" },
          { left: "sea como sea", right: "de cualquier manera" },
          { left: "vayas donde vayas", right: "en cualquier lugar al que vayas" },
          { left: "dijeran lo que dijeran", right: "independientemente de lo que decían" },
        ],
      },
      {
        id: "c1-02-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe el anuncio (50–70 palabras) de una comunidad que conozcas (un club, un huerto urbano, un coro) que busca nuevos miembros. Describe el perfil con al menos tres relativas en subjuntivo y añade una instrucción para quien esté interesado.",
            model: "El huerto comunitario de la calle Durazno busca vecinos que tengan dos horas libres por semana, que no se asusten de la tierra y que quieran aprender a compostar. No hace falta experiencia: quien nunca haya plantado nada aprenderá con los demás. Quien quiera conocernos, que venga el sábado a las diez con guantes y ganas.",
            checklist: [
              "Uso al menos tres relativas en subjuntivo para describir el perfil.",
              "Incluyo una relativa genérica con una instrucción («quien…, que…»).",
              "El anuncio no describe a personas concretas.",
            ],
          },
          {
            prompt: "Alguien te dice: «Tu propuesta es buena, pero exige mucho trabajo». Respóndele en 40–60 palabras con tres movimientos: concede, resta peso y reafirma. Usa dos concesivas distintas.",
            model: "Es verdad, exige trabajo, no lo voy a negar. Pero por mucho trabajo que exija, el resultado nos ahorra problemas durante años. Y aunque nos llevara el doble de tiempo, seguiría valiendo la pena, porque no hay otra opción que resuelva lo esencial.",
            checklist: [
              "Concedo el argumento sin negarlo.",
              "Uso dos estructuras concesivas diferentes con el modo adecuado.",
              "Termino reafirmando mi postura.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un texto de opinión (230–320 palabras) para el boletín de una comunidad (una cooperativa, un club, una asociación vecinal) que tiene que incorporar miembros nuevos y tomar una decisión discutida. Describe el perfil de las personas que se buscan y defiende tu postura sobre la decisión concediendo los argumentos contrarios sin renunciar a lo esencial.",
    context: "El boletín lo leen todos los miembros, incluidos los que votaron en contra. Tu objetivo no es ganar una discusión pasada, sino que la comunidad avance unida: reconoce los datos ajenos y explica por qué no cambian tu postura.",
    steps: [
      "Anota el perfil que busca la comunidad con tres relativas en subjuntivo y, al lado, a dos personas concretas que ya forman parte de ella, con relativas en indicativo.",
      "Haz una lista de tres objeciones reales y decide para cada una si vas a informar de un obstáculo, restarle peso o imaginar un caso improbable.",
      "Redacta al menos tres párrafos: la situación, el perfil buscado y la defensa con concesiones.",
      "Revisa el texto con la lista de control: corrige cualquier relativa cuyo modo no coincida con lo que sabes del referente y comprueba los tiempos de cada concesiva.",
    ],
    useLanguage: [
      "buscamos personas que + subjuntivo",
      "quien quiera…, que…",
      "no hay nadie que + subjuntivo",
      "aunque sea así / aunque + indicativo",
      "por más que, por + adjetivo + que",
      "pase lo que pase, digan lo que digan, y eso que",
    ],
    model: [
      "El coro del barrio cumple diez años con una buena noticia y un problema. La buena noticia es que el ayuntamiento nos ha cedido el salón de la antigua biblioteca, que tiene una acústica estupenda. El problema es que, para llenar sus noventa sillas, necesitamos más voces, sobre todo graves, y que la junta propone subir la cuota para pagar a una directora profesional.",
      "Buscamos personas que tengan ganas de cantar, que puedan venir los martes por la tarde y que no se asusten de una partitura, aunque no la sepan leer todavía. No pedimos experiencia: Carmen y Julio, que entraron el año pasado sin haber cantado nunca, hoy hacen solos en el concierto de Navidad. Quien quiera probar, que venga a un ensayo abierto antes de decidir. Y quien conozca a algún vecino que cante en la ducha, que lo traiga: no hay voz que no sirva para algo en un coro.",
      "Sobre la cuota, sé que la propuesta no gusta a todos, y entiendo por qué. Es verdad que subirá ocho euros al mes. Pero aunque suba, sigue siendo la más baja de todos los coros de la ciudad, y no hay ninguna directora que trabaje gratis tres horas semanales. Por más que algunos insistieron en la asamblea en buscar voluntarios, nadie encontró a nadie. Y aunque mañana apareciera alguien dispuesto, dependeríamos de su buena voluntad. Pase lo que pase en la votación del mes que viene, este coro seguirá abierto a quien quiera cantar.",
    ],
    checklist: [
      "Las relativas que describen perfiles van en subjuntivo; las que nombran a personas concretas, en indicativo.",
      "Cada concesiva hace un gesto claro: informar, restar peso o imaginar.",
      "Concedo al menos una objeción real sin negarla.",
      "Uso al menos una concesiva reduplicada o con «por… que».",
      "El texto tiene tres párrafos como mínimo y un cierre que reafirma la postura.",
    ],
    words: [230, 320],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Defensa ante la asamblea",
        prompt: "Eres socio o socia de una comunidad que debe votar una propuesta cara pero necesaria (un ascensor, una reforma, un cambio de local). Defiéndela durante cuatro minutos: describe a quién beneficia con relativas genéricas, recoge al menos tres objeciones y responde a cada una concediendo sin ceder.",
        prep: [
          "Escribe tres objeciones en una columna y, al lado, el gesto con que vas a responder a cada una.",
          "Prepara una relativa genérica potente para abrir («una casa que no pueda…»).",
          "Termina con una reduplicada que muestre tu compromiso: «pase lo que pase…».",
        ],
        seconds: 240,
        model: "Compañeros, sé que esta propuesta cuesta más, y no lo voy a negar. Pero pensemos en quienes vivan aquí dentro de veinte años. Una casa que no pueda habitar quien tenga dificultades para caminar no es la casa que queremos. Aunque sea más cara, es la única que cumple la norma. Y aunque encontráramos otra más barata, perderíamos un año entero en permisos.",
        selfCheck: [
          "Concedo cada objeción antes de responderla.",
          "Pronuncio con claridad la vocal final de los verbos en subjuntivo.",
          "Uso al menos dos tiempos distintos en las concesivas.",
        ],
      },
      {
        title: "Negociar con un socio escéptico",
        prompt: "Después de la asamblea, un socio que votó en contra te dice: «Ustedes ganaron, pero yo no voy a poder pagar». Escúchalo, hazle dos preguntas sobre su situación, reconoce lo que tiene razón y negocia con él una solución concreta.",
        prep: [
          "Prepara dos preguntas abiertas sobre sus ingresos y sus horas disponibles.",
          "Ten a mano «entiendo que…», «aunque sea así…» y «quien no pueda…, que…».",
        ],
        seconds: 150,
        model: "Entiendo que te preocupe, de verdad. ¿Cuánto te subiría la cuota exactamente? ¿Podrías aportar horas extra los sábados? La comisión aprobó que quien no pueda pagar la diferencia la compense con trabajo. Aunque no sea la solución perfecta, te permitiría quedarte. ¿Lo hablamos con la tesorera esta semana?",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Reconozco lo que mi interlocutor tiene de razón.",
          "Propongo una solución concreta y un paso siguiente.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu lista de objeciones con sus respuestas y una relativa en la que hayas dudado entre los dos modos.",
    cards: [
      {
        move: "Describe",
        task: "Describe a tu profesor a la persona ideal para un trabajo o un piso compartido, con al menos cuatro relativas en subjuntivo, y después a alguien real que conozcas, con indicativo.",
        phrases: ["Busco a alguien que…", "Conozco a una persona que…"],
      },
      {
        move: "Rebate",
        task: "Pide a tu profesor tres objeciones a una idea tuya y respóndelas con tres gestos concesivos distintos.",
        phrases: ["Aunque sea así…", "Por más que…", "Aunque tuvieras razón…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale por un caso de superlativo o de «único» en el que los dos modos sean correctos y pídele que explique la diferencia de sentido.",
        phrases: ["¿Qué cambia si digo «haya visto» en vez de «he visto»?"],
      },
      {
        move: "Compara",
        task: "Compara con tu profesor el uso de «así + subjuntivo» en el español de su país y en el de otros países que conozcas.",
        phrases: ["¿En tu país se dice «así me paguen»?", "¿Suena literario o coloquial?"],
      },
    ],
    bring: "Tu lista de objeciones, el texto de opinión revisado y, si quieres, la grabación de tu defensa.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«Los vecinos que ___ a la jornada del sábado recibirán una camiseta.» La jornada todavía no se ha hecho. ¿Qué forma completa la frase?",
        options: ["vinieron", "vengan", "vienen"],
        answer: 1,
        why: "Se habla de cualquiera que venga en el futuro: subjuntivo.",
      },
      {
        type: "choice",
        q: "¿Qué frase concede un dato que todos conocen para restarle importancia?",
        options: [
          "Aunque el terreno es pequeño, caben tres bloques.",
          "Aunque el terreno fuera más grande, no podríamos construir más.",
          "Sí, es pequeño, pero aunque el terreno sea pequeño, caben tres bloques.",
        ],
        answer: 2,
        why: "Presente de subjuntivo con un hecho conocido: gesto polémico.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué dice el hablante sobre la arquitecta?",
        options: [
          "Que todavía no han encontrado a ninguna con ese perfil.",
          "Que ya han contratado a una arquitecta concreta con ese perfil.",
          "Que la arquitecta no quiere trabajar con cooperativas.",
        ],
        answer: 0,
        why: "«Una arquitecta que conozca…» con subjuntivo describe un perfil que aún buscan.",
        audio: "Todavía buscamos una arquitecta que conozca bien la vivienda por ayuda mutua.",
        voice: "es-UY-m",
      },
      {
        type: "gap",
        q: "Incluso si el banco ___ (rechazar) la solicitud, la cooperativa empezará la obra con sus ahorros.",
        answers: [["rechaza"]],
        hint: "«Incluso si» sigue los tiempos de «si»: nunca presente de subjuntivo.",
        why: "Con una condición abierta, presente de indicativo.",
      },
      {
        type: "gap",
        q: "No hay ningún socio que ___ (querer) vender su parte antes de terminar la obra.",
        answers: [["quiera"]],
        hint: "Se niega la existencia del antecedente: el verbo de la relativa va en subjuntivo.",
        why: "«No hay ningún… que» + subjuntivo.",
      },
      {
        type: "error",
        sentence: "Aunque hubiéramos tenido más voluntarios, la obra terminará en marzo.",
        answers: ["Aunque hubiéramos tenido más voluntarios, la obra habría terminado en marzo.", "Aunque hubiésemos tenido más voluntarios, la obra habría terminado en marzo."],
        why: "Un pasado contrafactual pide una consecuencia contrafactual: condicional compuesto.",
      },
      {
        type: "error",
        sentence: "Pasara lo que pase, la asamblea mantuvo la votación.",
        answers: ["Pasara lo que pasara, la asamblea mantuvo la votación.", "Pasase lo que pasase, la asamblea mantuvo la votación."],
        why: "En la reduplicada se repite el mismo tiempo; en un relato pasado, imperfecto de subjuntivo.",
      },
      {
        type: "order",
        words: ["Quien", "conozca", "a", "una", "familia", "interesada,", "que", "nos", "escriba."],
        why: "Relativa genérica en subjuntivo y principal con «que» + subjuntivo.",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras la diferencia entre «Es el mejor proyecto que hemos visto» y «Es el mejor proyecto que hayamos visto nunca», y entre «Rosa es la única que firmó» y «La única que firme tendrá voto doble». Inventa un contexto para cada frase.",
        model: "«Es el mejor proyecto que hemos visto» presenta el dato: entre los proyectos que conocemos, este es el mejor. Con «hayamos visto nunca» enfatizo la valoración, por ejemplo al felicitar a la arquitecta. «Rosa es la única que firmó» señala a una persona concreta que ya firmó el acta. «La única que firme tendrá voto doble» habla de quien resulte, que todavía no sabemos, por ejemplo en una regla para la próxima asamblea.",
        checklist: [
          "Explico que con superlativos los dos modos son correctos con matices distintos.",
          "Distingo «único» con referente identificado y no identificado.",
          "Doy un contexto realista para cada frase.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Elijo el modo de una relativa según si identifico al referente o hablo de cualquiera que cumpla la condición.",
      "Manejo los casos de refranes, superlativos, «único» y existencia negada.",
      "Uso concesivas para informar, restar peso a un dato conocido, imaginar lo improbable o rehacer el pasado.",
      "Defiendo una postura con fórmulas compactas: reduplicadas, «por… que», «aun + gerundio», «y eso que».",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Un mismo obstáculo, cuatro gestos» y reconstrúyela con el obstáculo «el viaje es largo».",
      "Dentro de una semana, busca un anuncio de empleo real y subraya las relativas: ¿describen un perfil o a alguien concreto?",
      "En la próxima clase, defiende en voz alta tu texto de opinión y pide a tu profesor que te lance una objeción inesperada.",
    ],
  },
  related: [
    { path: "/gramatica/subjuntivo-en-relativas-no-especificas-y", label: "Clase: Subjuntivo en relativas no específicas y genéricas" },
    { path: "/gramatica/alternancias-en-concesivas-con-valor-pragmatico", label: "Clase: Alternancias en concesivas con valor pragmático" },
  ],
};
