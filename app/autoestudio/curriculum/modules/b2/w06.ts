import type { Module } from "../../types";

/**
 * B2 · semana 6 · Autoestudio espejo de G137 (aunque + indicativo / subjuntivo)
 * y G138 (a pesar de que, por mucho que, por más que). Repaso autónomo con una
 * familia de viñateros de Mendoza que discute una inversión en riego.
 * Personas, finca y periódico son ficticios. Audio mediante síntesis.
 */
export const b2w06: Module = {
  id: "b2-06",
  level: "b2",
  week: 6,
  kind: "core",
  title: "Aunque falte el agua: conceder sin soltar el plan",
  subtitle: "Repaso de «aunque» con indicativo o subjuntivo y de los conectores que conceden con más fuerza: a pesar de que, por mucho que, por más que, si bien, aun cuando",
  stop: { place: "Mendoza", country: "Argentina" },
  minutes: 120,
  newObjectives: [
    "b2.gram.g137",
    "b2.gram.g138",
    "b2.voc.w06-agua-vinedo",
    "b2.pron.w06-modo-al-oido",
    "b2.lis.w06-reunion-finca",
    "b2.read.w06-columna-agua",
    "b2.wri.w06-carta-asamblea",
    "b2.spk.w06-sostener-postura",
    "b2.fun.w06-conceder-mantener",
    "b2.disc.w06-orden-registro",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo aceptar objeciones con «aunque» y con conectores concesivos más fuertes, elegir el modo según lo que hago con el dato y mantener una decisión con argumentos.",
    steps: [
      "Repasa en la teoría las tres intenciones de «aunque» y la tabla de conectores concesivos por intensidad y registro.",
      "Practica el modo, las estructuras con «por mucho que» y «por muy… que» y la reformulación de objeciones.",
      "Escucha a la familia Funes discutir el riego de su finca y lee una columna sobre el agua en Mendoza.",
      "Escribe una carta a la asamblea de la cooperativa, revísala y defiéndela en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste cómo «aunque» y sus parientes te permiten aceptar un obstáculo sin cambiar de idea. Aquí lo repasas con otra situación: una finca de Mendoza donde el agua de riego llega cada vez con menos frecuencia. Antes de elegir una forma, pregúntate siempre qué haces con el dato que concedes.",
    parts: [
      {
        heading: "«Aunque»: el modo depende de lo que haces con el dato",
        body: [
          "Tras «aunque» el subjuntivo no significa que el dato sea falso ni dudoso. El modo indica qué uso le das a la información que concedes. Si la presentas como algo nuevo para tu interlocutor, la afirmas, y va en indicativo. Si los dos ya la conocen y solo la mencionas para pasar a tu respuesta, puedes usar subjuntivo. Si hablas de algo que todavía puede pasar o no, y quieres decir «pase lo que pase», usas subjuntivo.",
          "Con datos ya conocidos tienes elección: el indicativo vuelve a afirmarlos y el subjuntivo los deja a un lado. Con información nueva, en cambio, el subjuntivo suena raro, porque das por sabido algo que el otro no sabe.",
        ],
        table: {
          caption: "Tres intenciones con el mismo dato",
          head: ["Qué haces con el dato", "Modo", "Ejemplo"],
          rows: [
            ["Lo anuncias: el otro no lo sabía", "indicativo", "Aunque el turno de riego se adelantó al martes, la poda sigue el jueves."],
            ["Lo das por sabido y pasas a tu argumento", "subjuntivo (o indicativo, si lo reafirmas)", "Aunque el goteo cueste caro, se paga en pocas temporadas."],
            ["Hablas de algo que puede pasar o no", "subjuntivo", "Aunque granice en febrero, no vamos a adelantar la cosecha."],
          ],
        },
        examples: [
          { es: "Te aviso: aunque el pronóstico daba sol, en Tupungato cayó piedra anoche.", note: "Noticia para el interlocutor: indicativo." },
          { es: "Ya lo discutimos: aunque el tractor sea viejo, este año no lo cambiamos.", note: "Objeción conocida: el subjuntivo la deja a un lado." },
          { es: "Aunque el cupo de agua baje otra vez, la finca seguirá abierta.", note: "Posibilidad futura no confirmada: subjuntivo." },
        ],
        tip: "Haz la prueba de la noticia: si podrías empezar la frase con «te cuento que…», usa indicativo.",
      },
      {
        heading: "Lo que no va después de «aunque»",
        body: [
          "Para hablar de una posibilidad futura, «aunque» no se combina con futuro ni con condicional: el futuro afirma que algo pasará y el condicional imagina un resultado, no concede un obstáculo. La forma natural es el presente de subjuntivo.",
          "Tampoco hace falta un «pero» en la oración principal. «Aunque» ya marca el contraste; si añades «pero», la frase queda partida en dos y pierde fuerza. Y no confundas «aunque» con «sino»: el primero acepta un obstáculo, el segundo corrige una idea negada.",
        ],
        examples: [
          { es: "Aunque suba el gasoil, mantendremos el precio de la uva.", note: "Posibilidad: presente de subjuntivo, nunca «subirá» ni «subiría»." },
          { es: "Aunque la bodega paga tarde, seguimos vendiéndole.", note: "La principal empieza directamente, sin «pero»." },
        ],
        mistakes: [
          {
            wrong: "Aunque lloverá en marzo, la cosecha será corta.",
            right: "Aunque llueva en marzo, la cosecha será corta.",
            why: "Para una posibilidad futura tras «aunque» se usa presente de subjuntivo; el futuro la afirmaría.",
          },
          {
            wrong: "Aunque la helada quemó los brotes, pero la planta rebrotó.",
            right: "Aunque la helada quemó los brotes, la planta rebrotó.",
            why: "«Aunque» ya expresa el contraste: la oración principal no lleva «pero».",
          },
          {
            wrong: "—¿Sabías que cerraron la ruta? —Sí: aunque la cierren, iremos por Luján.",
            right: "—¿Sabías que cerraron la ruta? —Sí: aunque la cerraron, iremos por Luján.",
            why: "El cierre ya ocurrió y se está informando: «aunque la cierren» lo convertiría en algo que quizá pase.",
          },
        ],
      },
      {
        heading: "Conceder con más fuerza: «por mucho que», «por más que», «por muy… que»",
        body: [
          "Estas estructuras dicen que la intensidad del obstáculo no cambia el resultado: «da igual cuánto». Por eso casi siempre van en subjuntivo. Solo cuando describes algo que ocurre de verdad y de forma repetida puedes usar indicativo: «por más que lo limpiamos, el filtro se tapa».",
          "Fíjate en las piezas. Con un verbo: «por mucho que» o «por más que» + verbo. Con un adjetivo o un adverbio: «por muy» + adjetivo + «que», y aquí el subjuntivo es la regla. Con un sustantivo: «por mucho / mucha / muchos / muchas» + sustantivo + «que», con concordancia.",
        ],
        table: {
          caption: "Las piezas de la concesión intensa",
          head: ["Estructura", "Concuerda con", "Ejemplo"],
          rows: [
            ["por mucho que / por más que + verbo", "(no concuerda)", "Por mucho que riegues de noche, la planta sufre con este calor."],
            ["por muy + adjetivo o adverbio + que", "(no concuerda)", "Por muy temprano que empecemos, no terminamos antes del domingo."],
            ["por mucha + sustantivo femenino + que", "el sustantivo", "Por mucha experiencia que tenga, el capataz no puede hacerlo solo."],
            ["por muchos + sustantivo masculino plural + que", "el sustantivo", "Por muchos permisos que pidamos, el pozo no se aprueba este año."],
          ],
        },
        mistakes: [
          {
            wrong: "Por mucho cansado que esté, Ramiro termina la hilera.",
            right: "Por muy cansado que esté, Ramiro termina la hilera.",
            why: "Delante de un adjetivo va «muy»; «mucho» se usa con verbos o con sustantivos.",
          },
          {
            wrong: "Por mucho paciencia que tengas, la planta tarda tres años en producir.",
            right: "Por mucha paciencia que tengas, la planta tarda tres años en producir.",
            why: "Con sustantivo, «mucho» concuerda: «paciencia» es femenino singular.",
          },
        ],
      },
      {
        heading: "Registro y posición: «a pesar de que», «si bien», «aun cuando»",
        body: [
          "«A pesar de que» y «pese a que» funcionan como «aunque» y siguen la misma lógica del modo. Sin «que», «a pesar de» va con un sustantivo o con un infinitivo si el sujeto es el mismo: «a pesar de la sequía», «a pesar de trabajar de sol a sol».",
          "En textos formales aparecen «si bien», que concede un hecho real y va con indicativo, y «aun cuando», que con subjuntivo plantea una hipótesis: «aun cuando el Gobierno aumentara el cupo». «Aun» sin tilde también se combina con un gerundio: «aun sabiendo el riesgo, invirtieron».",
          "La posición cambia el efecto. Delante, la concesión prepara tu conclusión; detrás, suena a reserva o a réplica añadida al final.",
        ],
        examples: [
          { es: "Si bien la cosecha fue menor, el vino salió con más cuerpo.", note: "Registro de informe: hecho real con indicativo." },
          { es: "Aun cuando el embalse se llenara este invierno, el problema seguiría.", note: "Hipótesis formal: imperfecto de subjuntivo." },
          { es: "Vamos a probar el goteo en dos hectáreas, por más que el banco tarde en responder.", note: "Concesión detrás: suena a reserva final." },
        ],
        mistakes: [
          {
            wrong: "Si bien la cooperativa haya crecido, los socios cobran tarde.",
            right: "Si bien la cooperativa ha crecido, los socios cobran tarde.",
            why: "«Si bien» concede un hecho real y va con indicativo.",
          },
        ],
        tip: "En un informe o una carta formal, alterna «si bien», «pese a que» y «aun cuando» en lugar de repetir «aunque» tres veces.",
      },
    ],
  },
  grammar: {
    intro: "Primero decide qué haces con el dato; después elige la forma. En la última actividad reformula con libertad: hay varias soluciones buenas.",
    exercises: [
      {
        id: "b2-06-gramatica-intencion",
        type: "context",
        prompt: "Lee la situación y elige la frase que corresponde a la intención de quien habla.",
        items: [
          {
            context: "Lucía vuelve de la cooperativa y su hermano todavía no sabe que este año el turno de riego será cada quince días.",
            q: "¿Qué le dice Lucía para darle la noticia y mantener la plantación de olivos?",
            options: [
              "Aunque el turno sea cada quince días, plantamos los olivos.",
              "Aunque el turno va a ser cada quince días, plantamos los olivos.",
              "Aunque el turno sería cada quince días, plantamos los olivos.",
            ],
            answer: 1,
            why: "Es información nueva para el hermano: se afirma con indicativo.",
          },
          {
            context: "Hace una semana que la familia discute el precio de la malla antigranizo. Todos conocen la cifra.",
            q: "¿Qué frase cierra la discusión sin volver a afirmar el dato?",
            options: [
              "Aunque la malla cueste lo que cuesta, la ponemos este otoño.",
              "Aunque la malla costará mucho, la ponemos este otoño.",
              "Aunque la malla costaría mucho, pero la ponemos este otoño.",
            ],
            answer: 0,
            why: "Objeción conocida que se deja a un lado: subjuntivo.",
          },
          {
            context: "Nadie sabe si en enero habrá otra ola de calor.",
            q: "¿Cómo expresas que la decisión se mantiene pase lo que pase?",
            options: [
              "Aunque habrá otra ola de calor, cosechamos de noche.",
              "Aunque hubo otra ola de calor, cosechamos de noche.",
              "Aunque haya otra ola de calor, cosechamos de noche.",
            ],
            answer: 2,
            why: "Posibilidad futura no confirmada: presente de subjuntivo.",
          },
          {
            context: "Informe anual de una bodega. El dato es real y aparece en las cuentas.",
            q: "¿Qué frase encaja en el registro y en el modo?",
            options: [
              "Si bien las ventas al exterior bajaron un ocho por ciento, la bodega mantuvo su plantilla.",
              "Si bien las ventas al exterior bajaran un ocho por ciento, la bodega mantuvo su plantilla.",
              "Por muy bajaron las ventas al exterior, la bodega mantuvo su plantilla.",
            ],
            answer: 0,
            why: "«Si bien» concede un hecho real con indicativo; «por muy» necesita adjetivo o adverbio.",
          },
        ],
      },
      {
        id: "b2-06-gramatica-piezas",
        type: "gap",
        prompt: "Completa con «muy», «mucho», «mucha», «muchos» o «muchas», o con el verbo en la forma adecuada.",
        items: [
          { q: "Por ___ seca que esté la tierra, el algarrobo resiste.", answers: [["muy"]], why: "Delante de adjetivo: «por muy… que»." },
          { q: "Por ___ horas que pase en la viña, Ernesto nunca se queja.", answers: [["muchas"]], why: "Con sustantivo femenino plural: «muchas horas»." },
          { q: "Por más que ___ (insistir) la vecina, no le vamos a vender el terreno.", answers: [["insista"]], why: "El sujeto es «la vecina» y la idea es «da igual cuánto»: presente de subjuntivo." },
          { q: "Por mucho que ___ (subir, ellos) el precio del agua envasada, aquí bebemos agua de la red.", answers: [["suban"]], why: "Intensidad indiferente: subjuntivo." },
          { q: "Por más que lo ___ (podar, nosotros) cada invierno, ese duraznero da poca fruta.", answers: [["podamos", "podemos"]], why: "Con «podemos» describes un hecho real que se repite cada invierno; con «podamos» lo presentas como «da igual cuánto». Las dos son posibles." },
          { q: "A pesar de ___ (conocer, nosotros) el riesgo, plantamos en la ladera.", answers: [["conocer"]], why: "Mismo sujeto: «a pesar de» + infinitivo." },
        ],
      },
      {
        id: "b2-06-gramatica-registro",
        type: "classify",
        prompt: "Clasifica cada frase según su registro más probable.",
        categories: ["Conversación cotidiana", "Informe, carta formal o discurso"],
        items: [
          { text: "Aunque esté lejos, voy en bici.", cat: 0, why: "«Aunque» es neutro y la frase es breve y personal." },
          { text: "Si bien el proyecto supera el presupuesto inicial, su retorno está garantizado.", cat: 1, why: "«Si bien» es propio de textos formales." },
          { text: "Por más que le digo, no me hace caso.", cat: 0, why: "Queja cotidiana con un hecho repetido." },
          { text: "Aun cuando la provincia ampliara el cupo, la demanda seguiría creciendo.", cat: 1, why: "«Aun cuando» con hipótesis aparece en informes y discursos." },
          { text: "Pese a que el informe técnico es favorable, la comisión aplazó la votación.", cat: 1, why: "«Pese a que» es más formal que «aunque»." },
          { text: "Por muy rico que esté el asado, yo ya no puedo más.", cat: 0, why: "Concesión intensa en una situación familiar." },
        ],
      },
      {
        id: "b2-06-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error en la concesión. Corrígelo.",
        items: [
          {
            sentence: "Por muy que trabajemos, no llegamos a cubrir los costos.",
            answers: ["Por mucho que trabajemos, no llegamos a cubrir los costos.", "Por más que trabajemos, no llegamos a cubrir los costos."],
            why: "Con verbo se usa «por mucho que» o «por más que»; «muy» necesita adjetivo o adverbio.",
          },
          {
            sentence: "Aunque el banco nos daría el crédito, no compraríamos más tierra.",
            answers: ["Aunque el banco nos diera el crédito, no compraríamos más tierra."],
            why: "Para una hipótesis tras «aunque» se usa imperfecto de subjuntivo, no condicional.",
          },
          {
            sentence: "Si bien el pozo tenga agua, no alcanza para toda la finca.",
            answers: ["Si bien el pozo tiene agua, no alcanza para toda la finca."],
            why: "«Si bien» concede un hecho real: indicativo.",
          },
          {
            sentence: "A pesar de que nosotros nos levantamos a las cinco, pero no terminamos la vendimia.",
            answers: ["A pesar de que nos levantamos a las cinco, no terminamos la vendimia.", "A pesar de que nosotros nos levantamos a las cinco, no terminamos la vendimia."],
            why: "La oración principal no lleva «pero» después de una concesiva.",
          },
        ],
      },
      {
        id: "b2-06-gramatica-reformular",
        type: "open",
        prompt: "Reformula cada texto con la estructura indicada. Compara tu versión con el modelo y revisa la lista: puede haber otras soluciones correctas.",
        items: [
          {
            prompt: "Texto de partida: «El abono orgánico es caro. Lo seguimos usando porque mejora el suelo.» Reformúlalo en una sola frase con «si bien», como en un informe para la cooperativa.",
            model: "Si bien el abono orgánico es caro, seguimos usándolo porque mejora el suelo.",
            checklist: [
              "Uso «si bien» con indicativo.",
              "La oración principal no lleva «pero».",
              "Tu versión puede tener otro orden o vocabulario: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «Da igual cuánto insistan los compradores de Buenos Aires: no vamos a vender el malbec a granel.» Reformúlalo con «por mucho que» o «por más que».",
            model: "Por mucho que insistan los compradores de Buenos Aires, no vamos a vender el malbec a granel.",
            checklist: [
              "El verbo de la concesión va en subjuntivo.",
              "Conservo la decisión firme en la oración principal.",
              "Otra formulación con «por más que» también vale: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «Las uvas de la parcela norte son pequeñas. Dan un vino muy concentrado.» Reformúlalo con «por muy… que» y después con «aunque», y explica en una línea qué cambia.",
            model: "Por muy pequeñas que sean las uvas de la parcela norte, dan un vino muy concentrado. / Aunque las uvas de la parcela norte son pequeñas, dan un vino muy concentrado. Con «por muy… que» subrayo que el tamaño no importa; con «aunque» e indicativo presento el dato como real.",
            checklist: [
              "Uso «muy» delante del adjetivo y subjuntivo en la primera versión.",
              "Explico la diferencia de intensidad o de modo.",
              "Puedo elegir otras palabras para explicar el cambio: no es una respuesta única.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar del agua, del riego y de las decisiones de una finca en una zona seca.",
    groups: [
      {
        title: "Agua y riego",
        items: [
          { es: "el turno de riego", note: "momento en que a una finca le toca recibir agua del canal" },
          { es: "la acequia", note: "canal pequeño que lleva el agua a las parcelas y a las calles" },
          { es: "el riego por goteo", note: "sistema que lleva el agua gota a gota a cada planta" },
          { es: "el cupo de agua", note: "cantidad máxima que se asigna a cada usuario" },
          { es: "el pozo", note: "perforación para sacar agua subterránea" },
          { es: "la napa", note: "capa de agua subterránea (uso del Cono Sur)" },
          { es: "el deshielo", note: "agua que baja de la cordillera cuando se derrite la nieve" },
        ],
      },
      {
        title: "Finca y decisiones",
        items: [
          { es: "la vendimia", note: "cosecha de la uva" },
          { es: "el rinde", note: "cantidad que produce una hectárea (uso del Cono Sur)" },
          { es: "la malla antigranizo", note: "red que protege la viña de la piedra" },
          { es: "a granel", note: "vendido sin envasar, en grandes cantidades" },
          { es: "amortizar una inversión", note: "recuperar con el tiempo lo que se gastó" },
          { es: "dar el brazo a torcer", note: "ceder, cambiar de opinión ante la presión" },
          { es: "mantenerse en sus trece", note: "no cambiar de opinión, a veces por terquedad" },
        ],
      },
    ],
    exercises: [
      {
        id: "b2-06-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su significado.",
        pairs: [
          { left: "el turno de riego", right: "momento en que a una finca le toca recibir agua" },
          { left: "el cupo de agua", right: "cantidad máxima asignada a cada usuario" },
          { left: "el deshielo", right: "agua de la nieve que se derrite en la cordillera" },
          { left: "amortizar una inversión", right: "recuperar con el tiempo lo que se gastó" },
          { left: "dar el brazo a torcer", right: "ceder ante la presión" },
          { left: "a granel", right: "sin envasar y en grandes cantidades" },
        ],
      },
      {
        id: "b2-06-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada.",
        bank: ["rinde", "malla antigranizo", "acequia", "en sus trece"],
        items: [
          { q: "Aunque la piedra cayó fuerte, la ___ salvó casi toda la uva.", answers: [["malla antigranizo"]] },
          { q: "Por mucho que le explicamos los números, el abuelo se mantiene ___.", answers: [["en sus trece"]] },
          { q: "El ___ por hectárea bajó, pero la calidad mejoró.", answers: [["rinde"]] },
          { q: "Si bien la ___ de la calle está limpia, el agua llega con poca fuerza.", answers: [["acequia"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Oír el modo en la última vocal y marcar la pausa concesiva",
    explanation: [
      "En muchos verbos, la diferencia entre indicativo y subjuntivo es una sola vocal al final: «sube / suba», «llega / llegue», «baja / baje». Al escuchar, esa vocal te dice si quien habla anuncia un dato o deja abierta una posibilidad. Al hablar, si la pronuncias débil, tu interlocutor no sabrá qué quisiste decir.",
      "Cuando la concesión va delante, la voz se queda suspendida al final de ella, hace una pausa breve y baja al terminar la decisión: «Aunque suba el gasoil… | mantenemos el precio». Si la concesión va detrás, la pausa llega antes de «aunque» y el final suena a reserva.",
      "El audio usa la síntesis del navegador: sirve para percibir el contraste, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Una vocal cambia la intención",
      head: ["Indicativo (dato)", "Subjuntivo (posibilidad u objeción conocida)"],
      rows: [
        ["aunque sube", "aunque suba"],
        ["aunque llega tarde", "aunque llegue tarde"],
        ["por más que lo riegan", "por más que lo rieguen"],
        ["a pesar de que baja", "a pesar de que baje"],
      ],
    },
    perceive: {
      id: "b2-06-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer el texto y decide qué forma oyes.",
      items: [
        {
          q: "¿Qué forma oyes?",
          options: ["aunque sube: dato que se anuncia", "aunque suba: posibilidad abierta"],
          answer: 1,
          why: "Se oye la vocal final «a»: «suba», presente de subjuntivo.",
          audio: "Aunque suba el precio de la poda, la hacemos en julio.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué forma oyes?",
          options: ["aunque llega: dato que se anuncia", "aunque llegue: posibilidad abierta"],
          answer: 0,
          why: "Se oye «llega», con «a» final: indicativo.",
          audio: "Aunque el agua llega los martes, regamos el miércoles.",
          voice: "es-AR-m",
        },
        {
          q: "¿Qué forma oyes?",
          options: ["por más que lo riegan", "por más que lo rieguen"],
          answer: 1,
          why: "«Rieguen», con «e»: subjuntivo, «da igual cuánto».",
          audio: "Por más que lo rieguen, ese limonero no va a dar fruta.",
          voice: "es-CL-f",
        },
        {
          q: "¿Dónde hace la pausa quien habla?",
          options: ["antes de «aunque»: la concesión va al final", "después de la concesión: la concesión va al principio"],
          answer: 0,
          why: "Primero oyes la decisión y después, tras la pausa, la reserva: «aunque nos cueste».",
          audio: "Vamos a cambiar las mangueras, aunque nos cueste.",
          voice: "es-AR-m",
        },
      ],
    },
    produce: [
      { text: "Aunque baje el cupo de agua, la finca sigue.", tip: "Pronuncia clara la «e» de «baje» y deja la voz en suspenso antes de la coma.", voice: "es-AR-f" },
      { text: "Aunque baja el cupo de agua, la finca sigue.", tip: "Ahora anuncias el dato: «baja», con «a» bien abierta.", voice: "es-AR-f" },
      { text: "Por muy caro que sea el goteo, nos conviene.", tip: "Acentúa «muy caro» como un solo bloque y baja la voz en «conviene».", voice: "es-AR-m" },
      { text: "No vendemos la finca, por mucho que nos ofrezcan.", tip: "Pausa antes de «por mucho que» y tono de reserva al final.", voice: "es-CL-f" },
    ],
    spelling: "Ojo con los cambios ortográficos del subjuntivo: «regar» → «riegue», «llegar» → «llegue», «empezar» → «empiece». La «u» y la «c» mantienen el sonido de la raíz.",
  },
  listening: {
    title: "Sobremesa en la finca de los Funes",
    context: "En Maipú, Mendoza, la familia Funes discute después del almuerzo si cambia el riego por surco por goteo. Participan Ester, la dueña; su hijo Gonzalo, agrónomo, y Valentina, técnica chilena de la cooperativa. Escucha primero sin transcripción. Las voces son sintéticas.",
    speakers: [
      { id: "e", name: "Ester", voice: "es-AR-f", role: "Dueña de la finca" },
      { id: "g", name: "Gonzalo", voice: "es-AR-m", role: "Agrónomo, hijo de Ester" },
      { id: "v", name: "Valentina", voice: "es-CL-f", role: "Técnica de la cooperativa" },
    ],
    script: [
      { speaker: "g", text: "Bueno, antes del postre, una novedad: aunque el canal nos daba agua cada diez días, desde marzo el turno pasa a ser cada dieciséis. Me lo confirmaron ayer en la inspección." },
      { speaker: "e", text: "¿Dieciséis días? Con este calor, la viña no aguanta. Pero el goteo es carísimo, Gonzalo. Ya lo hablamos el año pasado." },
      { speaker: "v", text: "Señora Ester, aunque sea caro, con goteo la finca usaría casi la mitad del agua. Y la cooperativa tiene una línea de crédito para socios." },
      { speaker: "e", text: "Si bien la cooperativa presta, después hay que devolver. Por muchas promesas que haga el banco, los intereses los pagamos nosotros." },
      { speaker: "g", text: "Eso es cierto. Pero por más que reguemos con surco, el agua se pierde antes de llegar a la última hilera. Lo vemos todos los veranos." },
      { speaker: "v", text: "Además, aun cuando el deshielo de este año fuera bueno, el turno no volvería a diez días. La provincia ya lo decidió para toda la cuenca." },
      { speaker: "e", text: "Entonces no hay mucho que discutir. A pesar de que me cueste dejar el surco, que es como regaba mi padre, probemos." },
      { speaker: "g", text: "Propongo empezar por las cuatro hectáreas de malbec, que son las más sensibles. Aunque tardemos tres temporadas en amortizarlo, el ahorro de agua se nota desde el primer verano." },
      { speaker: "v", text: "Me parece prudente. Y aunque luego quieran ampliarlo, conviene medir primero cómo responde el suelo." },
      { speaker: "e", text: "De acuerdo, pero con una condición: el olivar se queda con surco, por muy moderno que sea el goteo. Esos olivos los plantó mi abuela." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin transcripción. ¿Qué deciden y en qué condiciones?",
        exercise: {
          id: "b2-06-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la decisión general.",
          items: [
            {
              q: "¿Qué deciden al final?",
              options: [
                "Cambiar toda la finca al goteo este mismo año.",
                "Probar el goteo en una parte de la finca y mantener el surco en otra.",
                "Esperar a que el turno de riego vuelva a ser cada diez días.",
              ],
              answer: 1,
              why: "Empiezan por las cuatro hectáreas de malbec y el olivar sigue con surco.",
            },
            {
              q: "¿Qué actitud tiene Ester al principio?",
              options: [
                "Acepta el goteo sin objeciones.",
                "No le preocupa el cambio de turno.",
                "Duda por el costo, aunque acaba aceptando la prueba.",
              ],
              answer: 2,
              why: "Recuerda que el goteo es carísimo y que los intereses los pagan ellos, pero termina diciendo «probemos».",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "b2-06-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué noticia trae Gonzalo?",
              options: [
                "Que el turno de riego pasa de diez a dieciséis días.",
                "Que la cooperativa ya no da créditos.",
                "Que el deshielo de este año será malo.",
              ],
              answer: 0,
              why: "La da con indicativo: «aunque el canal nos daba agua cada diez días…».",
            },
            {
              q: "Según Valentina, ¿por qué no volverá el turno de diez días?",
              options: [
                "Porque la finca no paga el canal.",
                "Porque la provincia lo decidió para toda la cuenca.",
                "Porque el goteo usa más agua.",
              ],
              answer: 1,
              why: "«Aun cuando el deshielo de este año fuera bueno, el turno no volvería a diez días».",
            },
            {
              q: "¿Por qué Ester mantiene el surco en el olivar?",
              options: [
                "Porque los olivos necesitan más agua.",
                "Porque el crédito no alcanza.",
                "Por razones familiares: los plantó su abuela.",
              ],
              answer: 2,
              why: "Lo dice al final: «Esos olivos los plantó mi abuela».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en lo que hace cada persona con el dato que concede. Responde y consulta la transcripción solo después.",
        exercise: {
          id: "b2-06-escucha-notice",
          type: "match",
          prompt: "Relaciona cada concesión de la conversación con su función.",
          pairs: [
            { left: "aunque el canal nos daba agua cada diez días", right: "anuncia una noticia: indicativo" },
            { left: "aunque sea caro", right: "deja a un lado una objeción conocida" },
            { left: "aun cuando el deshielo de este año fuera bueno", right: "plantea una hipótesis en registro cuidado" },
            { left: "por más que reguemos con surco", right: "dice que la intensidad no cambia el resultado" },
            { left: "si bien la cooperativa presta", right: "concede un hecho real en tono formal" },
          ],
          why: "El modo y el conector dependen de lo que cada persona hace con el dato, no de si es verdadero o falso.",
        },
      },
    ],
  },
  reading: {
    title: "El agua no se discute; su reparto, sí",
    genre: "Columna de opinión",
    frame: "Columna de Inés Lucero, ingeniera agrónoma, en la sección de opinión de un diario regional de Mendoza. Autora y diario son ficticios.",
    text: [
      "Cada verano, cuando el turno de riego se alarga y las acequias de la ciudad bajan casi secas, en Mendoza reaparece la misma discusión. Los productores piden más agua, los vecinos piden árboles vivos y la provincia pide paciencia. Aunque todos sabemos que la cordillera tiene cada año menos nieve, seguimos discutiendo como si el problema fuera pasajero.",
      "Conviene empezar por lo que nadie niega. Si bien el riego por goteo ahorra hasta la mitad del agua, no está al alcance de cualquier finca. Una familia con diez hectáreas no puede endeudarse a ciegas, por muy razonable que sea la propuesta técnica. A pesar de que existen créditos, los plazos son cortos y los intereses, altos. Quien diga que el pequeño productor no cambia por terquedad no ha hecho las cuentas.",
      "Dicho esto, por mucho que entienda esas dificultades, no comparto la conclusión que algunos sacan de ellas: que es mejor esperar. Aun cuando el próximo invierno trajera nevadas abundantes, el problema seguiría ahí, porque cada año se riega más superficie con el mismo río. Esperar no es neutral; es elegir que la escasez decida por nosotros.",
      "Tampoco me convence el argumento contrario, el de quienes creen que la técnica lo resolverá todo. Por más modernos que sean los sistemas, el agua que una finca ahorra no vuelve sola al canal ni a los árboles de la ciudad. Hace falta una regla clara sobre a quién se asigna, y esa regla es política, no agronómica.",
      "Propongo, por eso, tres medidas modestas. Primero, que la provincia financie el goteo a las fincas pequeñas con plazos largos, aunque eso signifique recortar otros gastos. Segundo, que una parte del agua ahorrada vuelva al arbolado urbano, que también es patrimonio de Mendoza. Tercero, que los turnos se publiquen con tiempo, para que nadie se entere en la puerta de su finca.",
      "Sé que habrá quien me acuse de ingenua. Lo acepto. Pese a que el debate se repite cada año, todavía estamos a tiempo de que la próxima sequía nos encuentre preparados.",
    ],
    glossary: [
      { es: "el arbolado urbano", note: "conjunto de árboles de las calles y plazas de una ciudad" },
      { es: "a ciegas", note: "sin información suficiente, sin calcular los riesgos" },
      { es: "la cuenca", note: "territorio cuyas aguas van a un mismo río" },
    ],
    tasks: [
      {
        id: "b2-06-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que distingues lo que la autora concede de lo que sostiene.",
        items: [
          {
            q: "¿Qué concede la autora a los pequeños productores?",
            options: [
              "Que el goteo no ahorra agua.",
              "Que endeudarse para el goteo es un riesgo real para ellos.",
              "Que es mejor esperar a un invierno con más nieve.",
            ],
            answer: 1,
            why: "Segundo párrafo: «no puede endeudarse a ciegas»; los plazos son cortos y los intereses, altos.",
          },
          {
            q: "¿Por qué rechaza la idea de esperar?",
            options: [
              "Porque la superficie regada crece aunque el río sea el mismo.",
              "Porque los créditos van a desaparecer.",
              "Porque el goteo será más barato el año próximo.",
            ],
            answer: 0,
            why: "«Aun cuando el próximo invierno trajera nevadas abundantes, el problema seguiría ahí».",
          },
          {
            q: "¿Qué crítica hace a quienes confían solo en la técnica?",
            options: [
              "Que los sistemas modernos fallan con frecuencia.",
              "Que la técnica es demasiado cara para la provincia.",
              "Que falta decidir a quién se asigna el agua ahorrada.",
            ],
            answer: 2,
            why: "«Hace falta una regla clara sobre a quién se asigna».",
          },
        ],
      },
      {
        id: "b2-06-lectura-conectores",
        type: "classify",
        prompt: "Clasifica cada fragmento de la columna: ¿la autora concede algo o sostiene su postura?",
        categories: ["Concede un punto", "Sostiene su postura"],
        items: [
          { text: "Si bien el riego por goteo ahorra hasta la mitad del agua", cat: 0, why: "Admite una ventaja que otros defienden." },
          { text: "no comparto la conclusión que algunos sacan de ellas", cat: 1, why: "Aquí rechaza la idea de esperar." },
          { text: "por mucho que entienda esas dificultades", cat: 0, why: "Reconoce las dificultades antes de discrepar." },
          { text: "Esperar no es neutral", cat: 1, why: "Es la tesis central del tercer párrafo." },
          { text: "Sé que habrá quien me acuse de ingenua. Lo acepto.", cat: 0, why: "Acepta una crítica posible." },
          { text: "esa regla es política, no agronómica", cat: 1, why: "Afirma su propia interpretación." },
        ],
      },
      {
        id: "b2-06-lectura-interpretacion",
        type: "open",
        prompt: "Interpreta y evalúa la estrategia de la columna.",
        items: [
          {
            prompt: "La autora concede argumentos a los dos bandos antes de proponer sus medidas. En 70–90 palabras, explica qué gana con esa estrategia y si te parece convincente. Usa al menos dos conectores concesivos distintos.",
            model: "Al conceder primero, la autora muestra que conoce las razones de los productores y de quienes confían en la técnica, y así su propuesta no parece ingenua. Si bien es una estrategia lenta, gana la confianza de lectores que no piensan como ella. A mí me convence en parte: por muy razonables que sean sus tres medidas, no explica de dónde saldría el dinero para financiar el goteo con plazos largos.",
            checklist: [
              "Explico qué gana la autora al conceder.",
              "Doy mi valoración con una razón concreta.",
              "Uso dos conectores concesivos con el modo adecuado.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora combina concesión y postura en la misma frase.",
      items: [
        { quote: "Aunque todos sabemos que la cordillera tiene cada año menos nieve", note: "«Aunque» + indicativo: reafirma un dato conocido para criticar la inacción." },
        { quote: "por muy razonable que sea la propuesta técnica", note: "«Por muy» + adjetivo + subjuntivo: la intensidad no cambia el resultado." },
        { quote: "Aun cuando el próximo invierno trajera nevadas abundantes", note: "Hipótesis formal con imperfecto de subjuntivo y consecuencia en condicional." },
        { quote: "Pese a que el debate se repite cada año", note: "«Pese a que» + indicativo: hecho real en registro escrito." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la situación, una recuperación de las semanas anteriores y escritura breve.",
    exercises: [
      {
        id: "b2-06-orden",
        type: "order",
        prompt: "Ordena las palabras para formar la frase completa.",
        items: [
          { words: ["Por", "muy", "temprano", "que", "salgamos,", "el", "camión", "llega", "tarde."], why: "«Por muy» + adverbio + «que» + subjuntivo." },
          { words: ["A", "pesar", "de", "la", "helada,", "los", "brotes", "aguantaron."], why: "«A pesar de» + sustantivo, sin «que»." },
          { words: ["Si", "bien", "el", "pozo", "es", "nuevo,", "el", "agua", "sale", "salada."], why: "«Si bien» + indicativo para un hecho real." },
        ],
      },
      {
        id: "b2-06-situaciones",
        type: "context",
        prompt: "Elige la respuesta más natural para cada situación.",
        items: [
          {
            context: "Tu vecina te repite por tercera vez que el ruido de la bomba de agua la molesta. Quieres reconocerlo y mantener tu horario de riego.",
            q: "¿Qué le respondes?",
            options: [
              "Aunque la bomba hará ruido, la prendo de noche.",
              "Entiendo que la moleste. Aunque haga ruido, solo puedo regar de noche, pero voy a cambiarle la base para que vibre menos.",
              "Por muy ruido que haga, la prendo igual.",
            ],
            answer: 1,
            why: "Concede la objeción conocida con subjuntivo, mantiene la decisión y pone una solución.",
          },
          {
            context: "Escribes un informe para la junta de la cooperativa sobre un proyecto que superó el presupuesto, pero que funciona.",
            q: "¿Qué frase eliges?",
            options: [
              "Si bien el proyecto superó el presupuesto en un doce por ciento, cumplió todos sus objetivos.",
              "Por mucho que el proyecto se pasó, funcionó igual, ¿viste?",
              "Aunque el proyecto superaría el presupuesto, cumplió todos sus objetivos.",
            ],
            answer: 0,
            why: "Registro formal, hecho real con indicativo y sin rasgos coloquiales.",
          },
          {
            context: "Un amigo te pregunta si irás a la Fiesta de la Vendimia aunque el pronóstico no es seguro.",
            q: "¿Qué le dices?",
            options: [
              "Voy, aunque lloverá.",
              "Voy, por muy llueva.",
              "Voy, aunque llueva a cántaros.",
            ],
            answer: 2,
            why: "Posibilidad no confirmada: subjuntivo. Y «por muy» necesita adjetivo.",
          },
        ],
      },
      {
        id: "b2-06-recuperacion",
        type: "gap",
        prompt: "Recupera las clases de las semanas anteriores: condiciones, «como si» y concesión en la misma situación.",
        items: [
          { q: "Si la provincia ___ (dar) más agua, no tendríamos que cambiar el riego.", answers: [["diera", "diese"]], why: "Condición irreal en presente: imperfecto de subjuntivo (semana 2)." },
          { q: "Ester habla del surco como si ___ (ser) parte de la familia.", answers: [["fuera", "fuese"]], why: "«Como si» + imperfecto de subjuntivo (semana 5)." },
          { q: "Si hubiéramos puesto la malla, ahora no ___ (tener) uva dañada.", answers: [["tendríamos"]], why: "Condicional mixta: pasado y consecuencia presente (semana 4)." },
          { q: "Aunque nos ___ (prestar) el dinero mañana, el goteo no estaría listo antes de marzo.", answers: [["prestaran", "prestasen"]], why: "Hipótesis con «aunque» y consecuencia en condicional: imperfecto de subjuntivo." },
        ],
      },
      {
        id: "b2-06-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Un socio de la cooperativa te escribe: «El goteo es un capricho de los jóvenes». Respóndele en 40–60 palabras: concede algo razonable de su mensaje y mantén tu postura.",
            model: "Entiendo tu desconfianza: aunque el goteo sea más caro al principio, no es un capricho. Por más que reguemos con cuidado, con surco se pierde mucha agua antes de llegar a las últimas hileras. Si bien no hace falta cambiar toda la finca, probarlo en una parcela nos daría datos reales.",
            checklist: [
              "Concedo algo razonable antes de discrepar.",
              "Uso al menos dos conectores concesivos con el modo adecuado.",
              "Mantengo un tono respetuoso.",
            ],
          },
          {
            prompt: "Escribe tres frases sobre una decisión personal que mantienes a pesar de un obstáculo: una con «aunque» + indicativo, otra con «aunque» + subjuntivo y otra con «por mucho que».",
            model: "Aunque mi trabajo queda lejos, sigo yendo en bicicleta. Aunque llueva, no tomo el auto. Por mucho que me digan que es peligroso, conozco una ruta segura por el parque.",
            checklist: [
              "La frase con indicativo presenta un dato real.",
              "La frase con subjuntivo habla de una posibilidad o de una objeción conocida.",
              "«Por mucho que» va con subjuntivo y la principal no lleva «pero».",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe una carta a la asamblea de socios de una cooperativa vitivinícola de Mendoza (200–280 palabras). Propón una medida para ahorrar agua, reconoce las objeciones de otros socios y explica por qué mantienes tu propuesta.",
    context: "La carta se leerá en la próxima asamblea. Muchos socios tienen fincas pequeñas y desconfían de las inversiones. Tu tono debe ser respetuoso y firme a la vez.",
    steps: [
      "Elige tu medida (goteo, sensores de humedad, compartir maquinaria, reutilizar agua) y anota tres objeciones que podrían hacerte.",
      "Organiza la carta en tres párrafos: propuesta, objeciones concedidas con su respuesta, petición concreta a la asamblea.",
      "Varía los conectores: «aunque» con los dos modos, «si bien», «por mucho que» o «por muy… que», y «aun cuando».",
      "Revisa la carta: comprueba el modo después de cada conector, borra los «pero» que sobren tras una concesiva y léela en voz alta.",
    ],
    useLanguage: [
      "aunque + indicativo (dato nuevo) / aunque + subjuntivo (objeción conocida o posibilidad)",
      "si bien + indicativo",
      "por mucho que / por más que + subjuntivo",
      "por muy + adjetivo + que + subjuntivo",
      "aun cuando + imperfecto de subjuntivo",
      "el turno de riego, el cupo de agua, amortizar una inversión",
    ],
    model: [
      "Estimados socios: les escribo para proponer que la cooperativa compre, entre todos, un equipo de sensores de humedad que podamos compartir por turnos. Aunque muchos de ustedes ya lo saben, lo repito: desde marzo el turno de riego será cada dieciséis días, y regar a ojo nos va a salir cada vez más caro.",
      "Sé que hay objeciones razonables. Si bien los sensores cuestan casi un millón de pesos, dividido entre cuarenta socios el gasto es pequeño y se amortiza en dos temporadas. Algunos dicen que la experiencia vale más que cualquier aparato, y es verdad que nadie conoce su finca como quien la trabaja. Pero por mucha experiencia que tengamos, no podemos ver cuánta humedad queda a cincuenta centímetros de profundidad. También me han dicho que es mejor esperar a un invierno con más nieve. Aun cuando ese invierno llegara, el cupo no volvería a ser el de antes, porque la provincia ya repartió el agua de la cuenca.",
      "Por eso pido a la asamblea que vote una prueba de un año con diez fincas voluntarias, de distintos tamaños, y que los resultados se presenten en la asamblea de otoño. Por muy pequeña que sea una finca, debería poder participar. Si la prueba no funciona, lo reconoceré; si funciona, habremos ganado tiempo y agua. Los saluda atentamente, Rodrigo Aguirre, socio número 112.",
    ],
    checklist: [
      "Propongo una medida concreta y la justifico con datos.",
      "Concedo al menos dos objeciones y respondo a cada una.",
      "Uso «aunque» con indicativo y con subjuntivo según lo que hago con el dato.",
      "Uso al menos dos conectores más fuertes o formales sin «pero» en la principal.",
      "Termino con una petición clara a la asamblea.",
    ],
    words: [200, 280],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Defender la propuesta ante la asamblea",
        prompt: "Presenta oralmente la propuesta de tu carta. Concede dos objeciones con conectores distintos y explica por qué mantienes tu idea. Termina con una petición concreta.",
        prep: [
          "Anota la propuesta en una frase y dos objeciones con su respuesta.",
          "Elige un conector formal («si bien», «aun cuando») y uno intenso («por mucho que»).",
        ],
        seconds: 150,
        model: "Buenas tardes. Propongo que compremos sensores de humedad entre todos. Si bien es un gasto, dividido entre cuarenta socios es pequeño. Ya sé que muchos confían en su experiencia, y la respeto; pero por mucha experiencia que tengamos, no vemos lo que pasa bajo tierra. Les pido que votemos una prueba de un año.",
        selfCheck: [
          "Uso al menos tres conectores concesivos distintos.",
          "Marco con la voz la pausa entre la concesión y la decisión.",
          "Termino con una petición clara.",
        ],
      },
      {
        title: "Responder a un socio que insiste",
        prompt: "Un socio te interrumpe tres veces: «Es carísimo», «Mi padre regó así toda la vida» y «¿Y si el año que viene nieva mucho?». Respóndele cada vez: reconoce lo que dice, hazle una pregunta para entender su preocupación y mantén tu postura sin sonar agresivo.",
        prep: [
          "Prepara una fórmula para reconocer: «Tiene razón en que…», «Entiendo que…».",
          "Para la tercera objeción, usa «aunque» + subjuntivo o «aun cuando».",
        ],
        seconds: 180,
        model: "Tiene razón en que es caro; aunque lo sea, se paga en dos temporadas. ¿Le preocupa más el gasto inicial o la deuda? Sobre su padre: lo respeto mucho, y aunque regara así toda la vida, el turno era otro. Y aunque nieve mucho el año que viene, el cupo no va a volver a ser el de antes.",
        selfCheck: [
          "Reconozco cada objeción antes de responder.",
          "Hago al menos una pregunta real a mi interlocutor.",
          "Cambio de modo según el dato sea conocido, nuevo o posible.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase estas tarjetas para practicar la concesión en una conversación real con tu profesor.",
    cards: [
      {
        move: "Defiende",
        task: "Defiende una decisión personal reciente (un viaje, un cambio de trabajo, una compra) y pide a tu profesor que te ponga tres objeciones. Respóndelas con conectores distintos.",
        phrases: ["Aunque tengas razón en que…", "Por mucho que…, sigo pensando que…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale a tu profesor si en su variedad del español usa «si bien» o «pese a que» al hablar, o solo al escribir.",
        phrases: ["¿Esto lo dirías en una conversación?", "¿Suena demasiado formal?"],
      },
      {
        move: "Contrasta",
        task: "Di la misma frase con «aunque» + indicativo y con «aunque» + subjuntivo y pide a tu profesor que explique qué entiende en cada caso.",
        phrases: ["Aunque llueve… / Aunque llueva…", "¿Qué cambia para ti?"],
      },
    ],
    bring: "Tu carta revisada a la asamblea y una lista de tres decisiones que mantienes aunque te cuesten.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "Tu compañero no sabe que el museo del vino cerró por obras. ¿Qué le dices para mantener la excursión?",
        options: [
          "Aunque el museo cierre por obras, vamos a la bodega.",
          "Aunque el museo cerró por obras, vamos a la bodega.",
          "Aunque el museo cerraría por obras, vamos a la bodega.",
        ],
        answer: 1,
        why: "Es una noticia para tu compañero: indicativo.",
      },
      {
        type: "choice",
        q: "Quieres decir que el precio de la tierra no cambia tu decisión. ¿Qué frase es correcta?",
        options: [
          "Por mucho cara que sea la tierra, la compramos.",
          "Por muy cara que es la tierra, la compramos.",
          "Por muy cara que sea la tierra, la compramos.",
        ],
        answer: 2,
        why: "«Por muy» + adjetivo + «que» + subjuntivo.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué expresa la concesión?",
        options: [
          "Una hipótesis formal que no cambiaría la decisión.",
          "Un hecho real que el hablante anuncia.",
        ],
        answer: 0,
        why: "«Aun cuando» + imperfecto de subjuntivo plantea una hipótesis.",
        audio: "Aun cuando nos ofrecieran el doble, no venderíamos la bodega.",
        voice: "es-AR-m",
      },
      {
        type: "gap",
        q: "Por más que ___ (buscar, nosotros) otro proveedor, nadie nos vende barricas más baratas.",
        answers: [["busquemos", "buscamos"]],
        hint: "«Da igual cuánto» o hecho repetido",
        why: "Subjuntivo si la cantidad es indiferente; indicativo si describes algo que ya ocurre una y otra vez.",
      },
      {
        type: "gap",
        q: "A pesar de ___ lluvia, la fiesta se hizo en el anfiteatro.",
        answers: [["la"]],
        hint: "«A pesar de» + sustantivo",
        why: "Sin «que», «a pesar de» va con un sustantivo: «a pesar de la lluvia».",
      },
      {
        type: "error",
        sentence: "Aunque el gobierno subirá las tarifas, seguiremos regando de noche.",
        answers: ["Aunque el gobierno suba las tarifas, seguiremos regando de noche."],
        why: "Para una posibilidad futura tras «aunque», presente de subjuntivo.",
      },
      {
        type: "error",
        sentence: "Si bien el vino ganó un premio, pero las ventas no subieron.",
        answers: ["Si bien el vino ganó un premio, las ventas no subieron."],
        why: "Tras una concesiva, la principal no lleva «pero».",
      },
      {
        type: "order",
        words: ["Por", "muchas", "ofertas", "que", "reciba,", "Ester", "no", "vende", "la", "finca."],
        why: "«Por muchas» concuerda con «ofertas»; la concesión va en subjuntivo.",
      },
      {
        type: "open",
        prompt: "Explica en 60–80 palabras a otro estudiante por qué «aunque llueve» y «aunque llueva» pueden ser correctas las dos. Da un contexto para cada una.",
        model: "Las dos son correctas porque el modo depende de lo que haces con el dato. Si anuncias que está lloviendo y tu amigo no lo sabe, dices «aunque llueve, salgo». Si no sabes si lloverá mañana y quieres decir que saldrás pase lo que pase, dices «aunque llueva, salgo». El subjuntivo no significa que sea falso.",
        checklist: [
          "Explico que el modo depende de la intención.",
          "Doy un contexto para el indicativo y otro para el subjuntivo.",
          "Aclaro que el subjuntivo no significa falsedad.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Elijo indicativo o subjuntivo tras «aunque» según anuncie un dato, deje a un lado una objeción o hable de una posibilidad.",
      "Concedo con más fuerza con «por mucho que», «por más que» y «por muy… que», con la concordancia correcta.",
      "Uso «si bien», «pese a que» y «aun cuando» en textos formales.",
      "Mantengo una decisión ante objeciones sin añadir «pero» tras la concesiva.",
    ],
    review: [
      "Dentro de dos días, tapa la columna de ejemplos de la tabla «Tres intenciones con el mismo dato» y escribe un ejemplo nuevo para cada fila.",
      "Dentro de una semana, busca en un periódico tres conectores concesivos y explica el modo de cada uno.",
      "En la próxima clase, lee tu carta a la asamblea y pide a tu profesor que señale una concesión que podría ser más fuerte.",
    ],
  },
  related: [
    { path: "/aunque-cambie-el-dato", label: "Clase: Concesión: aunque + indicativo / subjuntivo" },
    { path: "/gramatica/a-pesar-de-que-por-mucho", label: "Clase: A pesar de que, por mucho que, por más que" },
  ],
};
