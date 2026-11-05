import type { Module } from "../../types";

/**
 * C2 · semana 5 · Checkpoint. Autoestudio espejo de G211 (construcciones
 * parentéticas y anacolutos controlados) y G212 (elipsis compleja y recuperación
 * inferencial), con integración de G205–G210 (semanas 1 a 4). Repaso autónomo con
 * una asociación vecinal ficticia de Valencia que pasa a limpio la grabación de
 * una asamblea sobre el centenario de su casino. Audio mediante síntesis; sin
 * acreditación regional.
 */
export const c2w05: Module = {
  id: "c2-05",
  level: "c2",
  week: 5,
  kind: "checkpoint",
  title: "Checkpoint: del audio de la asamblea al acta",
  subtitle: "Repaso de incisos, anacolutos y elipsis, e integración de las semanas 1 a 4",
  stop: {
    place: "Valencia",
    country: "España",
  },
  minutes: 150,
  newObjectives: [
    "c2.gram.g211",
    "c2.gram.g212",
    "c2.voc.w05-asociacion-vecinal",
    "c2.pron.w05-tono-inciso",
    "c2.lis.w05-audio-asamblea",
    "c2.read.w05-del-audio-al-acta",
    "c2.wri.w05-resumen-asamblea",
    "c2.spk.w05-informe-mediacion",
    "c2.fun.w05-recuperar-elidido",
    "c2.disc.w05-cita-reparacion",
    "c2.rev.w05-semanas-1-5",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo pasar a limpio lo que se dijo en una reunión: colocar y puntuar incisos, conservar o reparar anacolutos según el texto, recuperar lo elidido sin inventar e integrar lo repasado en las semanas 1 a 4.",
    steps: [
      "Repasa en la teoría las formas fijas de los incisos, los tipos de anacoluto, las condiciones de la elipsis y la tabla de integración de las semanas 1 a 4.",
      "Practica con fragmentos de la grabación de una asamblea, mensajes del grupo de la junta y documentos del casino del barrio.",
      "Escucha a Amparo y a Vicent revisar el audio de la asamblea y lee el artículo del boletín sobre cómo se escribe lo que se dijo.",
      "Redacta el resumen de la asamblea para el boletín, revísalo con la lista de control integrada y presenta oralmente las decisiones de la junta.",
    ],
  },
  theory: {
    intro: "En clase viste cómo se insertan comentarios fuera de la estructura de la oración, cuándo una ruptura sintáctica es un recurso y cuándo un descuido, y cómo se recupera lo que no se dice. Aquí lo repasas con la grabación de una asamblea vecinal en el Cabanyal, en Valencia, que hay que convertir en acta y en artículo. Como es semana de integración, la última parte reúne lo de las semanas 1 a 4 en el mismo material.",
    parts: [
      {
        heading: "Incisos de comentario: formas fijas, lugar y puntuación",
        body: [
          "Expresiones como «que yo sepa», «según creo», «si no me equivoco», «dicho sea de paso», «valga la expresión» o «todo hay que decirlo» no forman parte de la estructura de la oración: comentan lo que se dice, limitan el compromiso del hablante o piden permiso para una palabra. Son fórmulas fijas y no admiten cambios: «que yo sepa» lleva subjuntivo («que yo sé» es un error), «según creo» no lleva «que» detrás, y «como es sabido» funciona sola («como es sabido que…» mezcla dos construcciones).",
          "La posición decide el alcance. Al principio, el inciso afecta a todo el enunciado: «Que yo recuerde, el casino nunca cerró en verano». Dentro de la oración, afecta sobre todo a lo que sigue: «El casino cerró, que yo recuerde, solo un verano». «Si se me permite la expresión» o «valga la expresión» se colocan junto a la palabra arriesgada, no al final del párrafo.",
          "La puntuación gradúa la desvinculación: comas para un inciso breve y bien integrado, rayas para uno más largo o más marcado, y paréntesis para una aclaración que el lector podría saltarse. «Como es sabido» presupone que el contenido es conocido: úsalo solo si lo es de verdad, porque si no, es una manera de imponer algo como evidente.",
        ],
        table: {
          caption: "Fórmulas fijas y su forma correcta",
          head: ["Fórmula", "Forma correcta", "Error frecuente"],
          rows: [
            ["que yo sepa", "Que yo sepa, nadie firmó la cesión.", "Que yo sé, nadie firmó la cesión."],
            ["según creo", "El tejado, según creo, se arregló en 1998.", "El tejado, según creo que se arregló en 1998."],
            ["como es sabido", "Como es sabido, el barrio estuvo a punto de desaparecer.", "Como es sabido que el barrio…"],
            ["si no me equivoco", "Si no me equivoco, la escritura está en el notario.", "Si no me equivoque, …"],
            ["dicho sea de paso", "El presupuesto, dicho sea de paso, incluye el IVA.", "Dicho sea el paso, …"],
          ],
        },
        mistakes: [
          {
            wrong: "El casino, según creo que se inauguró en 1926.",
            right: "El casino, según creo, se inauguró en 1926.",
            why: "«Según creo» es un inciso cerrado: no introduce una subordinada.",
          },
          {
            wrong: "Que yo sé, la junta no ha pedido ningún préstamo.",
            right: "Que yo sepa, la junta no ha pedido ningún préstamo.",
            why: "La fórmula fija lleva subjuntivo.",
          },
        ],
      },
      {
        heading: "Anacolutos: dislocación, tema colgante y ruptura",
        body: [
          "No toda frase que empieza por un tema es un anacoluto. La dislocación bien formada adelanta un elemento con su preposición y lo retoma con un pronombre: «A los socios jubilados, la junta les ofrecerá una cuota reducida». En el tema colgante, el elemento adelantado pierde la preposición y solo un pronombre o la persona del verbo lo conecta con el resto: «Los socios jubilados, la junta les ofrecerá…»; «Yo, lo que más recuerdo es el baile de San Juan». Es muy frecuente en la conversación y se entiende sin problema.",
          "Hay ruptura cuando el elemento adelantado no tiene ninguna función en lo que sigue, cuando un sujeto se queda sin verbo o cuando se mezclan dos construcciones: «Los pescadores que vivían en la calle de la Reina, que eran casi todos de la misma familia, y nadie les avisó del derribo».",
          "La decisión depende del tipo de texto. En una cita literal o en un diálogo literario, el anacoluto se conserva: es la voz de quien habla. En el texto propio, formal, se repara: se añade la preposición, se reordena, se usa «en cuanto a», se le da un verbo al sujeto, se divide la oración o se pasa a estilo indirecto.",
        ],
        table: {
          caption: "Del audio al texto propio",
          head: ["En la grabación", "Tipo", "En el acta"],
          rows: [
            ["«A los jubilados, la junta les rebaja la cuota.»", "dislocación bien formada", "se conserva o se reordena: «La junta rebaja la cuota a los jubilados»"],
            ["«Los jubilados, la junta les rebaja la cuota.»", "tema colgante", "«En cuanto a los jubilados, la junta les rebaja la cuota.»"],
            ["«Yo, lo que más me preocupa es el tejado.»", "tema colgante", "«A mí lo que más me preocupa es el tejado» o estilo indirecto"],
            ["«Los que vivían en la calle de la Reina, que eran casi todos parientes, y nadie les avisó.»", "ruptura: sujeto sin verbo", "«Nadie avisó a los vecinos de la calle de la Reina, que eran casi todos parientes.»"],
          ],
        },
        mistakes: [
          {
            wrong: "Acta: «Los vecinos de la calle Escalante, el Ayuntamiento nunca les contestó».",
            right: "Acta: «El Ayuntamiento nunca contestó a los vecinos de la calle Escalante».",
            why: "En un texto propio y formal, el tema colgante se repara. Entre comillas como cita literal, podría conservarse.",
          },
          {
            wrong: "La socia lo dijo así: «Lo que yo más recuerdo es el olor a salitre». (Ella dijo: «Yo, lo que más recuerdo es el olor a salitre».)",
            right: "La socia lo dijo así: «Yo, lo que más recuerdo es el olor a salitre».",
            why: "Una cita literal no se corrige: entre comillas va lo que se dijo.",
          },
        ],
      },
      {
        heading: "Elipsis compleja: lo que se recupera y lo que se inventa",
        body: [
          "La elipsis del verbo en coordinación («Pepa se ocupa de las sillas; Vicent, del sonido») exige estructuras paralelas, el mismo tiempo y el mismo modo; la persona y el número pueden cambiar. El hueco nunca va antes del verbo expreso: «Pepa, las sillas, y Vicent se ocupa del sonido» no funciona. Tampoco se puede omitir un verbo cuyo tiempo sería distinto: «La junta votó el martes; los socios, el mes que viene» obliga al lector a reconstruir «votarán».",
          "En las interrogativas reducidas («Alguien cambió la cerradura, pero no sé quién»), el elemento que queda conserva su preposición en el uso cuidado: «Habló con alguien del Ayuntamiento, pero no sé con quién». Las respuestas fragmentarias mantienen las marcas de la pregunta («—¿A quién se lo diste? —A Vicent»), y la polaridad tiene que quedar clara: «Ramón no viene; Pepa, sí».",
          "En notas, mensajes y titulares se omite mucho («¿Lo del tejado? Mañana»; «Aprobado el presupuesto del centenario»), pero la concordancia se mantiene: «Aprobada la cuota», no «Aprobado la cuota». Por último, una respuesta elíptica puede comunicar más de lo que dice: «—¿Qué tal la asamblea? —Bueno, las sillas eran nuevas» sugiere que lo demás no fue bien. Esa inferencia se puede cancelar («…y además se aprobó todo»), y por eso no debe pasar al acta como si se hubiera dicho.",
        ],
        examples: [
          { es: "El tesorero presentó las cuentas; la secretaria, el acta anterior.", note: "Mismo tiempo y modo: elipsis correcta." },
          { es: "Alguien llamó al periódico, pero no sabemos quién ni cuándo.", note: "Interrogativas reducidas con antecedente implícito." },
          { es: "—¿Firmaste tú el contrato? —No, Amparo.", note: "Fragmento ambiguo: ¿«no, lo firmó Amparo» o «no, Amparo» como vocativo? En el acta hay que deshacer la duda." },
        ],
        mistakes: [
          {
            wrong: "A la junta no le convenció el presupuesto, pero a los socios.",
            right: "A la junta no le convenció el presupuesto, pero a los socios sí.",
            why: "Tras una negación, el segundo miembro necesita «sí» para que la polaridad sea clara.",
          },
          {
            wrong: "Alguien ha hablado con la prensa, pero no sé quien.",
            right: "Alguien ha hablado con la prensa, pero no sé quién.",
            why: "En la interrogativa indirecta reducida, «quién» lleva tilde.",
          },
          {
            wrong: "Titular del boletín: «Aprobado la restauración del casino».",
            right: "Titular del boletín: «Aprobada la restauración del casino».",
            why: "En el estilo de titular el participio sigue concordando con el sustantivo.",
          },
        ],
      },
      {
        heading: "Integración: las semanas 1 a 4 en los mismos papeles",
        body: [
          "Los papeles de la asamblea del casino reúnen todo lo repasado este mes. El reglamento fundacional de 1926 usa el futuro perfecto de subjuntivo (semana 1, G205) y hay que modernizarlo según su función (G206). El acta obliga a elegir el modo según la perspectiva (semana 2, G207). El rumor de que el edificio estaría vendido exige atribución y tiempos coherentes al contar lo que se dijo (semana 3, G208 y G209). Y el párrafo final del acta, con todas sus condiciones, tiene que mantener los referentes claros (semana 4, G210).",
          "Úsalos juntos: un inciso bien puesto («según el registro de la propiedad») sustituye a un condicional de rumor; una elipsis correcta aligera una cadena de subordinadas; un tema conocido en subjuntivo («Que el casino necesite obras no es nuevo») abre un párrafo sin repetir lo sabido.",
        ],
        table: {
          caption: "Un caso por clase, con el material de esta semana",
          head: ["Semana y clase", "Fragmento", "Decisión"],
          rows: [
            ["1 · G205", "«El socio que hubiere satisfecho diez cuotas tendrá voto»", "«quien haya pagado diez cuotas tendrá voto»"],
            ["1 · G206", "«si alguno se negare a pagar»", "«si alguien se niega a pagar»"],
            ["2 · G207", "«La junta insiste en que los socios pagan / paguen la derrama»", "indicativo si sostiene un dato; subjuntivo si lo exige"],
            ["3 · G208", "«El casino habría sido vendido»", "«Un socio afirma que el casino se vendió; el registro lo desmiente»"],
            ["3 · G209", "En 2024 dijo que las obras «terminarán» en 2025", "si 2025 ya pasó: «terminarían»"],
            ["4 · G210", "«El presidente habló con el arquitecto sobre su informe»", "«sobre el informe del arquitecto»"],
          ],
        },
        examples: [
          { es: "Que el casino necesite obras, como es sabido, no es ninguna novedad; lo nuevo es que, según el informe técnico, el tejado no aguantará otro invierno.", note: "G207 + G211 + atribución explícita de la semana 3." },
          { es: "El presidente presentó el presupuesto; la tesorera, la forma de pagarlo.", note: "G212: elipsis con mismo tiempo y modo, en un acta." },
        ],
        tip: "En el resumen de esta semana, antes de entregar, revisa cada párrafo con una pregunta de cada semana: ¿forma histórica bien modernizada?, ¿modo según la perspectiva?, ¿fuente visible y tiempos coherentes?, ¿referentes claros?, ¿inciso, anacoluto y elipsis controlados?",
      },
    ],
  },
  grammar: {
    intro: "Decide primero qué tipo de texto escribes (cita literal o texto propio) y después qué se conserva y qué se repara.",
    exercises: [
      {
        id: "c2-05-gramatica-tipo",
        type: "context",
        prompt: "Lee el fragmento de la asamblea y decide qué es o qué hacer con él.",
        items: [
          {
            context: "Intervención grabada: «Los del bloque de la playa, el Ayuntamiento nunca les mandó la carta del derribo».",
            q: "¿Qué tipo de construcción es y qué haces en el acta, que no es cita literal?",
            options: [
              "Dislocación bien formada: se copia igual.",
              "Ruptura total: se elimina la intervención.",
              "Tema colgante: se repara, por ejemplo con «El Ayuntamiento nunca mandó la carta del derribo a los vecinos del bloque de la playa».",
            ],
            answer: 2,
            why: "El tema pierde la preposición y solo «les» lo conecta: en un texto propio formal se repara.",
          },
          {
            context: "Mensaje de la tesorera en el grupo de la junta: «¿Lo de la pintura? Pagado. ¿Lo del tejado? Todavía no».",
            q: "¿Qué se entiende?",
            options: [
              "Que la pintura ya está pagada y el tejado todavía no se ha pagado.",
              "Que el tejado ya está pintado.",
              "Que no sabe si la pintura está pagada.",
            ],
            answer: 0,
            why: "Elipsis situacional: el contexto («lo de…») y el participio permiten recuperar «está pagado».",
          },
          {
            context: "En la asamblea, Vicent dice: «Que yo sepa, el notario no ha recibido ninguna oferta por el edificio».",
            q: "¿Qué hace el inciso?",
            options: [
              "Afirma con total seguridad que no hay ofertas.",
              "Limita el compromiso de Vicent a lo que él sabe.",
              "Atribuye la información al notario.",
            ],
            answer: 1,
            why: "«Que yo sepa» restringe la afirmación al conocimiento del hablante.",
          },
          {
            context: "Una socia pregunta por la cena del centenario: «¿Qué tal la reunión con el restaurante?». El presidente responde: «Bueno, el local es precioso».",
            q: "¿Qué puede pasar al acta?",
            options: [
              "Que la reunión con el restaurante fue un fracaso.",
              "Que el presidente considera precioso el local; la inferencia sobre lo demás no se afirmó.",
              "Que el restaurante rechazó la cena.",
            ],
            answer: 1,
            why: "La implicatura («lo demás no fue bien») es cancelable y no se dijo: no se registra como hecho.",
          },
        ],
      },
      {
        id: "c2-05-gramatica-huecos",
        type: "gap",
        prompt: "Completa con la forma que exige cada construcción. Lee la indicación entre corchetes.",
        items: [
          { q: "Que yo ___, la cesión del solar nunca se firmó. [saber]", answers: [["sepa"]], why: "Fórmula fija con subjuntivo." },
          { q: "La junta ha recibido una carta sin firma, pero no sabe ___ quién. [preposición]", answers: [["de"]], why: "Se recupera «de quién es» o «de quién procede»: en el uso cuidado, el elemento que queda conserva su preposición." },
          { q: "A Pepa le gustó el cartel del centenario; a Vicent, ___. [polaridad negativa]", answers: [["no"]], why: "La polaridad del segundo miembro tiene que ser explícita." },
          { q: "___ la nueva junta directiva del casino. [elegir, estilo de titular, femenino]", answers: [["Elegida"]], why: "En el titular el participio concuerda con «junta»." },
          { q: "___ los socios jubilados, la junta les ofrecerá una cuota reducida. [preposición, dislocación bien formada]", answers: [["A"]], why: "Con la preposición, la dislocación está bien formada." },
          { q: "El presupuesto, ___ sea de paso, se aprobó sin votos en contra. [fórmula]", answers: [["dicho"]], why: "«Dicho sea de paso»: fórmula fija." },
        ],
      },
      {
        id: "c2-05-gramatica-elipsis",
        type: "classify",
        prompt: "Clasifica cada elipsis según si funciona o si obliga al lector a reconstruir algo que no se puede recuperar bien.",
        categories: ["Elipsis correcta", "Elipsis defectuosa"],
        items: [
          { text: "La junta aprobó las cuentas; la asamblea, el presupuesto.", cat: 0, why: "Mismo tiempo y modo, estructura paralela." },
          { text: "La junta revisó el contrato ayer; la abogada, la semana que viene.", cat: 1, why: "Cambio de tiempo: habría que reconstruir «lo revisará»." },
          { text: "Pepa, las sillas, y Vicent se encarga del sonido.", cat: 1, why: "El hueco va antes del verbo expreso." },
          { text: "Alguien envió la foto a la prensa, pero nadie sabe quién.", cat: 0, why: "Interrogativa reducida con antecedente claro." },
          { text: "Ramón no vendrá a la cena; Amparo, sí.", cat: 0, why: "Polaridad explícita con «sí»." },
          { text: "Al tesorero no le gustó el cartel, pero a la secretaria.", cat: 1, why: "Falta «sí»: la polaridad queda en el aire." },
        ],
      },
      {
        id: "c2-05-gramatica-errores",
        type: "error",
        prompt: "Cada frase del borrador del acta tiene un error de inciso, anacoluto o elipsis. Corrígelo.",
        items: [
          {
            sentence: "Como es sabido que el casino abrió en 1926, no repetimos su historia.",
            answers: ["Como es sabido, el casino abrió en 1926, así que no repetimos su historia.", "Como se sabe que el casino abrió en 1926, no repetimos su historia.", "Puesto que es sabido que el casino abrió en 1926, no repetimos su historia."],
            why: "«Como es sabido» es un inciso cerrado; mezclarlo con una causal «como es sabido que…» cruza dos construcciones.",
          },
          {
            sentence: "Los socios que se dieron de baja en los noventa, que eran casi todos pescadores, y nadie volvió a llamarlos.",
            answers: ["Nadie volvió a llamar a los socios que se dieron de baja en los noventa, que eran casi todos pescadores.", "Los socios que se dieron de baja en los noventa, que eran casi todos pescadores, no volvieron a recibir ninguna llamada."],
            why: "El sujeto se queda sin verbo: en un acta se repara dándole función.",
          },
          {
            sentence: "Aprobado la cuota extraordinaria para el tejado.",
            answers: ["Aprobada la cuota extraordinaria para el tejado."],
            why: "En el estilo de titular el participio concuerda con el sustantivo.",
          },
          {
            sentence: "El presidente explicó que, según creo que el arquitecto, el tejado aguantará hasta marzo.",
            answers: ["El presidente explicó que, según el arquitecto, el tejado aguantará hasta marzo.", "El presidente explicó que, según cree el arquitecto, el tejado aguantará hasta marzo."],
            why: "Se mezclan dos incisos: «según creo» y «según el arquitecto». En el acta, atribuye al arquitecto con «según».",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de una asociación vecinal de Valencia que prepara el centenario de su casino, y de cómo se pasa a limpio una reunión.",
    groups: [
      {
        title: "Asociación y casino",
        items: [
          { es: "el casino", note: "en muchos barrios y pueblos, sociedad recreativa con local propio" },
          { es: "la junta directiva", note: "órgano que gobierna la asociación" },
          { es: "la derrama", note: "pago extraordinario repartido entre los socios para un gasto común" },
          { es: "la cesión de uso", note: "permiso para utilizar un bien sin ser su propietario" },
          { es: "el derribo", note: "demolición de un edificio" },
          { es: "el centenario", note: "aniversario de los cien años" },
          { es: "estar al día", note: "no tener pagos pendientes" },
        ],
      },
      {
        title: "Pasar a limpio",
        items: [
          { es: "la transcripción", note: "copia escrita de lo que se dijo en una grabación" },
          { es: "pasar a limpio", note: "redactar la versión ordenada y definitiva de unas notas" },
          { es: "la intervención", note: "turno de palabra de una persona en una reunión" },
          { es: "literal", note: "que reproduce exactamente las palabras" },
          { es: "en estilo indirecto", note: "contado con palabras de quien informa, sin comillas" },
          { es: "el turno de ruegos y preguntas", note: "parte final de una reunión para peticiones y dudas" },
          { es: "constar en el orden del día", note: "estar incluido entre los asuntos de la reunión" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-05-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la derrama", right: "pago extraordinario repartido entre los socios para un gasto común" },
          { left: "la cesión de uso", right: "permiso para utilizar un bien sin ser su propietario" },
          { left: "pasar a limpio", right: "redactar la versión ordenada y definitiva de unas notas" },
          { left: "la intervención", right: "turno de palabra de una persona en una reunión" },
          { left: "en estilo indirecto", right: "contado con palabras de quien informa, sin comillas" },
          { left: "el derribo", right: "demolición de un edificio" },
          { left: "el turno de ruegos y preguntas", right: "parte final de una reunión para peticiones y dudas" },
        ],
      },
      {
        id: "c2-05-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["literal", "derrama", "al día", "pasar a limpio"],
        items: [
          { q: "La junta propone una ___ de cuarenta euros por socio para el tejado.", answers: [["derrama"]] },
          { q: "Solo pueden votar los socios que estén ___ de sus cuotas.", answers: [["al día"]] },
          { q: "Amparo tardó dos tardes en ___ las notas de la asamblea.", answers: [["pasar a limpio"]] },
          { q: "Si va entre comillas, la cita tiene que ser ___, con sus vacilaciones incluidas.", answers: [["literal"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El tono del inciso y el adverbio que comenta",
    explanation: [
      "Un inciso de comentario se dice con un tono algo más bajo, un poco más rápido y enmarcado por pausas: así el oyente sabe que esa parte no avanza la información, sino que la comenta. Si lo dices con el mismo tono que el resto, el oyente lo integra en la oración y puede entender otra cosa.",
      "El caso más claro es el de los adverbios que pueden comentar el enunciado o modificar el verbo. «Francamente, la asamblea fue larga» (con pausa: el hablante comenta con franqueza) no es lo mismo que «Habló francamente en la asamblea» (sin pausa: habló de manera franca). Lo mismo ocurre con «sinceramente», «honestamente» o «claramente».",
      "En las respuestas elípticas, el acento recae en lo que queda: «—¿Quién trae las sillas? —PEPA». Y en la elipsis con coma («Vicent, el sonido») la pausa ocupa el lugar del verbo omitido. El audio usa la síntesis del navegador: no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Comentario frente a modo",
      head: ["Con pausa (comenta el enunciado)", "Sin pausa (modifica el verbo)"],
      rows: [
        ["Francamente, la junta lo explicó mal.", "La junta lo explicó francamente."],
        ["Sinceramente, no me convence el cartel.", "Me lo dijo sinceramente."],
        ["Claramente, faltan socios jóvenes.", "Lo expuso claramente."],
      ],
    },
    perceive: {
      id: "c2-05-percepcion",
      type: "listen",
      prompt: "Escucha cada frase antes de leer las opciones y decide qué hace el adverbio o el inciso.",
      items: [
        {
          q: "¿Qué hace «francamente» en lo que oyes?",
          options: ["Comenta todo el enunciado: el hablante se expresa con franqueza.", "Dice cómo explicó la junta: de manera franca."],
          answer: 0,
          why: "Se oye una pausa tras «francamente» y el tono cambia: es un adverbio del enunciado.",
          audio: "Francamente, la junta explicó mal el presupuesto.",
          voice: "es-ES-m",
        },
        {
          q: "¿Y ahora?",
          options: ["Comenta el enunciado.", "Modifica al verbo: habló de manera sincera."],
          answer: 1,
          why: "No hay pausa: el adverbio se integra en la oración y dice cómo habló.",
          audio: "La presidenta habló sinceramente de las deudas del casino.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué parte de la frase es un comentario del hablante?",
          options: ["«el tejado no aguantará otro invierno»", "«si no me equivoco»", "«el arquitecto»"],
          answer: 1,
          why: "«Si no me equivoco» va entre pausas y con tono más bajo.",
          audio: "El arquitecto, si no me equivoco, dijo que el tejado no aguantará otro invierno.",
          voice: "es-CU-f",
        },
        {
          q: "¿Qué ocupa la pausa después de «Vicent»?",
          options: ["Un vocativo: se habla a Vicent.", "Nada: es un error de lectura.", "El verbo omitido «se encarga de»."],
          answer: 2,
          why: "En la elipsis en coordinación, la pausa ocupa el lugar del verbo.",
          audio: "Pepa se encarga de las sillas; Vicent, del sonido.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "Francamente, la junta explicó mal el presupuesto.", tip: "Pausa clara después de «francamente» y tono más alto al empezar «la junta».", voice: "es-ES-m" },
      { text: "La presidenta habló sinceramente de las deudas del casino.", tip: "Sin pausa: «habló sinceramente» es un solo bloque.", voice: "es-ES-f" },
      { text: "El arquitecto, si no me equivoco, dijo que el tejado no aguantará otro invierno.", tip: "Baja el tono y acelera un poco en el inciso.", voice: "es-CU-f" },
      { text: "Pepa se encarga de las sillas; Vicent, del sonido.", tip: "Haz que la pausa tras «Vicent» se oiga: ocupa el lugar del verbo.", voice: "es-ES-m" },
    ],
    spelling: "La coma de la elipsis («Vicent, del sonido») y las comas, rayas o paréntesis de los incisos reproducen por escrito las pausas que acabas de practicar. Un adverbio del enunciado al principio va siempre seguido de coma.",
  },
  listening: {
    title: "El audio de la asamblea",
    context: "Amparo, secretaria de una asociación vecinal del Cabanyal, y Vicent, vocal de la junta, escuchan en el local del casino un fragmento de la grabación de la asamblea del centenario: la intervención de Mayelín, socia desde hace veinte años. Después deciden cómo pasarla al acta. Escucha primero sin transcripción. Las voces son sintéticas y no representan variedades verificadas.",
    speakers: [
      { id: "a", name: "Amparo", voice: "es-ES-f", role: "Secretaria de la asociación" },
      { id: "v", name: "Vicent", voice: "es-ES-m", role: "Vocal de la junta" },
      { id: "y", name: "Mayelín", voice: "es-CU-f", role: "Socia, en la grabación" },
    ],
    script: [
      { speaker: "a", text: "Vale, le doy al play. Es la intervención de Mayelín, justo después de que el presidente presentara el presupuesto." },
      { speaker: "y", text: "Yo, lo que quiero decir es esto. Los socios mayores, nadie les ha preguntado si pueden pagar una derrama de cuarenta euros. Que yo sepa, ¿eh?, que igual me equivoco. Y otra cosa, dicho sea de paso: el edificio, según dicen por ahí, ya estaría vendido a una inmobiliaria, y si eso es así, que alguien nos lo explique, porque yo pago mi cuota desde hace veinte años." },
      { speaker: "v", text: "Uf. Ahí hay de todo. Empecemos por el principio: «Yo, lo que quiero decir es esto». Eso es un tema colgante, pero en el acta no hace falta conservarlo, salvo que la citemos literalmente." },
      { speaker: "a", text: "Mi idea es citar entre comillas solo la frase de los socios mayores, porque es la que pidió que constara. El resto, en estilo indirecto. Y en estilo indirecto lo reparo: «La señora Mayelín Ortega señaló que nadie había preguntado a los socios mayores si podían pagar la derrama»." },
      { speaker: "v", text: "Bien, con «había preguntado» y «podían», porque lo cuentas desde el día de la asamblea. Y la cita literal, ¿con el anacoluto incluido? «Los socios mayores, nadie les ha preguntado…»." },
      { speaker: "a", text: "Sí, si va entre comillas va como lo dijo. Si la corrigiéramos dentro de las comillas, le estaríamos poniendo en la boca una frase que no dijo. Lo que no voy a hacer es mezclar: o cita literal o estilo indirecto." },
      { speaker: "v", text: "De acuerdo. Ahora lo delicado: «el edificio, según dicen por ahí, ya estaría vendido». Eso es un condicional de rumor sin fuente, metido dentro de otro inciso. No podemos ponerlo en el acta como si fuera un dato." },
      { speaker: "a", text: "No. Lo que haré es atribuirlo y añadir lo que sabemos: «La señora Ortega preguntó si era cierto el rumor de que el edificio se había vendido. El presidente respondió que, según la nota del registro de la propiedad, el casino sigue a nombre de la asociación». Así queda la pregunta, que es legítima, y la respuesta, que es un hecho." },
      { speaker: "v", text: "Me parece bien. Y lo de «que yo sepa, que igual me equivoco», ¿lo quitas?" },
      { speaker: "a", text: "En el estilo indirecto, sí: no aporta nada al acta. En la cita, como no lo incluyo, no hay problema. Por cierto, en el grupo de la junta Pepa ha escrito: «¿Lo de Mayelín? Ya hablé con ella. ¿Lo de la derrama? Mañana». ¿Tú entiendes qué pasa mañana?" },
      { speaker: "v", text: "Supongo que mañana decide la junta si la derrama se reduce para los mayores. Pero «supongo» es la palabra clave: eso no es lo que ha escrito, es lo que yo deduzco. Pregúntale antes de ponerlo en ningún sitio." },
      { speaker: "a", text: "Le pregunto. Y en el acta escribo solo lo que se dijo en la asamblea; lo del grupo, en todo caso, irá en la próxima." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué hacen y qué tipo de decisiones toman?",
        exercise: {
          id: "c2-05-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué hacen Amparo y Vicent?",
              options: [
                "Deciden cómo pasar al acta la intervención grabada de una socia.",
                "Preparan la intervención del presidente en la asamblea.",
                "Discuten si conviene vender el edificio del casino.",
              ],
              answer: 0,
              why: "Escuchan la grabación de Mayelín y deciden qué se cita, qué se reformula y qué se atribuye.",
            },
            {
              q: "¿Qué principio guía sus decisiones?",
              options: [
                "Corregir todas las frases para que suenen formales.",
                "Distinguir lo que se dijo de lo que se deduce, y la cita literal del texto propio.",
                "Eliminar las intervenciones polémicas.",
              ],
              answer: 1,
              why: "Conservan la cita literal tal cual, reparan el estilo indirecto, atribuyen el rumor y no registran inferencias.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c2-05-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué parte de la intervención citará Amparo literalmente?",
              options: [
                "Toda la intervención.",
                "La frase sobre el rumor de la venta.",
                "La frase sobre los socios mayores, porque Mayelín pidió que constara.",
              ],
              answer: 2,
              why: "El resto irá en estilo indirecto.",
            },
            {
              q: "¿Cómo tratará el rumor de la venta?",
              options: [
                "Como una pregunta de la socia, seguida de la respuesta del presidente basada en el registro.",
                "Con el condicional: «el edificio estaría vendido».",
                "No lo mencionará.",
              ],
              answer: 0,
              why: "Atribuye la pregunta y presenta como hecho solo lo que consta en el registro.",
            },
            {
              q: "¿Qué advierte Vicent sobre el mensaje de Pepa?",
              options: [
                "Que la derrama ya está aprobada.",
                "Que lo que él entiende es una deducción y hay que preguntar antes de escribirlo.",
                "Que Pepa no debería escribir en el grupo.",
              ],
              answer: 1,
              why: "«Mañana» no dice qué pasa: lo elidido no se puede inventar.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo pasa cada fragmento al acta. Relaciona y consulta la transcripción solo al terminar.",
        exercise: {
          id: "c2-05-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento de la grabación o del grupo con la decisión que toman.",
          pairs: [
            { left: "Yo, lo que quiero decir es esto", right: "no se conserva: el acta usa estilo indirecto" },
            { left: "Los socios mayores, nadie les ha preguntado", right: "cita literal entre comillas, con el anacoluto" },
            { left: "el edificio ya estaría vendido", right: "pregunta atribuida y respuesta basada en el registro" },
            { left: "Que yo sepa, que igual me equivoco", right: "se omite en el estilo indirecto" },
            { left: "¿Lo de la derrama? Mañana", right: "no se registra hasta saber qué se omite" },
          ],
          why: "Cada decisión depende de si el texto es cita o texto propio, y de si lo omitido se puede recuperar con seguridad.",
        },
      },
    ],
  },
  reading: {
    title: "Del audio al acta: escribir lo que se dijo",
    genre: "Artículo de boletín asociativo",
    frame: "Artículo de Amparo Llorens, secretaria de una asociación vecinal del Cabanyal, en el número especial del boletín dedicado al centenario del casino del barrio. Asociación, casino, personas y documentos son ficticios.",
    text: [
      "Cuando me eligieron secretaria pensé que lo más difícil sería convocar las asambleas a tiempo. Me equivocaba. Lo más difícil es escribir el acta: convertir dos horas de grabación, con gente que se interrumpe, que empieza frases y no las acaba, que comenta lo que dice mientras lo dice, en un texto que dentro de cincuenta años alguien pueda leer y entender. La asamblea del centenario, con ciento doce socios en el salón y la mitad con algo que decir, fue la prueba definitiva. Quiero contar aquí cómo trabajamos, porque varios socios nos han preguntado por qué el acta no recoge «exactamente lo que se dijo».",
      "La respuesta corta es que un acta no es una transcripción. La larga empieza por distinguir dos tipos de texto. Cuando ponemos unas palabras entre comillas, prometemos al lector que son literales, con sus vacilaciones y sus rupturas. Por eso, cuando Mayelín Ortega pidió que constara su frase sobre los socios mayores, la copiamos tal como la dijo: «Los socios mayores, nadie les ha preguntado si pueden pagar una derrama de cuarenta euros». La frase empieza por un tema que luego retoma un pronombre, sin preposición; en una conversación se entiende perfectamente, y corregirla dentro de las comillas habría sido ponerle en la boca algo que no dijo. En cambio, cuando el acta cuenta con sus propias palabras lo que alguien expuso, las reparamos: «La señora Ortega señaló que nadie había preguntado a los socios mayores si podían pagar la derrama».",
      "Los comentarios que los oradores intercalan plantean otro problema. «Que yo sepa», «si no me equivoco», «dicho sea de paso» son muy útiles al hablar, porque matizan el compromiso de quien habla. En el estilo indirecto, casi siempre sobran. Hay una excepción importante: cuando el inciso cambia lo que se afirma. Si el tesorero dice que, que él sepa, no hay deudas con proveedores, el acta debe recoger esa reserva, porque no es lo mismo que afirmar que no hay deudas. Y si alguien dice «como es sabido» delante de algo que no lo es, el acta no lo convierte en un hecho por eso.",
      "El caso más delicado de la asamblea fue el rumor de la venta del edificio. Una socia preguntó si era cierto que el casino «ya estaría vendido», según se comentaba en el barrio. Ese condicional, sin ninguna fuente, no podía pasar al acta como información. Recogimos la pregunta, que era legítima, y la respuesta del presidente, que sí se apoyaba en un documento: según la nota simple del registro de la propiedad, el edificio sigue a nombre de la asociación. El presidente añadió que en marzo una inmobiliaria se había interesado por el solar y que la junta le había respondido que no estaba en venta. Contado desde el día de la asamblea, ese «había respondido» sitúa la respuesta antes de la pregunta, que es justo lo que ocurrió.",
      "La historia del casino también tuvo su momento. El presidente leyó el artículo del reglamento fundacional de 1926 que establece que «el socio que hubiere satisfecho diez cuotas consecutivas tendrá voz y voto en la Junta general». Algunos socios jóvenes entendieron que aquello se refería a algo que no había ocurrido. En el acta añadimos, entre paréntesis, la versión actual: quien haya pagado diez cuotas seguidas tiene voz y voto. Y señalamos que el reglamento vigente es el de 1987, para que nadie crea que la norma de 1926 sigue en vigor.",
      "Luego están las elipsis. En una asamblea la gente omite muchísimo, y casi siempre se entiende: «Pepa, las sillas; Vicent, el sonido», dijo el presidente al repartir tareas. En el acta lo escribimos así: «Pepa Sanchis se encargará de las sillas; Vicent Martí, del equipo de sonido». Mismo tiempo, mismo verbo, estructura paralela: la elipsis funciona. Lo que no hicimos fue completar lo que nadie dijo. Cuando alguien preguntó qué tal había ido la reunión con el restaurante de la cena y el presidente contestó que el local era precioso, toda la sala entendió que lo demás no había ido tan bien. Pero eso es una inferencia, no una afirmación, y el acta solo recoge lo segundo.",
      "Queda el último párrafo, el de los acuerdos, que tiene siete líneas y no pienso acortar. Dice que la junta propondrá una derrama de cuarenta euros, que los socios mayores de setenta años que lo soliciten pagarán la mitad, salvo que la subvención municipal cubra la diferencia, y que la decisión se votará en la asamblea de febrero. Lo mantuvimos entero porque la rebaja, la excepción y la fecha dependen unas de otras, y comprobamos que cada «que» y cada pronombre remitieran a un solo antecedente. Lo leímos en voz alta tres veces. A la tercera, nadie tuvo que volver atrás.",
      "Escribir un acta, en definitiva, es decidir a cada línea qué es cita y qué es texto propio, qué se dijo y qué se dedujo, qué se sabe y qué se rumorea. No es un trabajo neutro, y por eso conviene explicarlo. Si dentro de cincuenta años alguien lee esta acta para preparar el siguiente centenario, me gustaría que pudiera oír, en las comillas, la voz de Mayelín, y fiarse, fuera de ellas, de todo lo demás.",
    ],
    glossary: [
      { es: "la nota simple", note: "documento del registro de la propiedad que informa de quién es el titular de un inmueble" },
      { es: "el solar", note: "terreno donde está o puede construirse un edificio" },
      { es: "poner en la boca", note: "atribuir a alguien palabras que no dijo" },
    ],
    tasks: [
      {
        id: "c2-05-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido los criterios del artículo.",
        items: [
          {
            q: "¿Por qué la cita de Mayelín conserva el tema colgante?",
            options: [
              "Porque va entre comillas y las comillas prometen literalidad.",
              "Porque es gramaticalmente impecable.",
              "Porque la secretaria no tuvo tiempo de corregirla.",
            ],
            answer: 0,
            why: "Dentro de las comillas va lo que se dijo; fuera, el texto propio se repara.",
          },
          {
            q: "¿En qué caso, según la autora, un inciso como «que él sepa» debe pasar al acta?",
            options: [
              "Siempre, por respeto al orador.",
              "Nunca, porque es propio de la lengua oral.",
              "Cuando cambia el alcance de lo que se afirma.",
            ],
            answer: 2,
            why: "El ejemplo del tesorero: «que él sepa, no hay deudas» no equivale a afirmar que no las hay.",
          },
          {
            q: "¿Qué hace el acta con la respuesta del presidente sobre el restaurante?",
            options: [
              "Registra que la reunión fue mal.",
              "Recoge solo lo que dijo, sin la inferencia que hizo la sala.",
              "La omite por ser irrelevante.",
            ],
            answer: 1,
            why: "La implicatura no es una afirmación y no se registra como tal.",
          },
        ],
      },
      {
        id: "c2-05-lectura-integracion",
        type: "match",
        prompt: "Relaciona cada decisión del artículo con la clase del mes que aplica.",
        pairs: [
          { left: "añadir la versión actual de «hubiere satisfecho»", right: "futuro perfecto de subjuntivo y su reformulación (semana 1)" },
          { left: "no convertir «ya estaría vendido» en un dato", right: "condicional de rumor y atribución (semana 3)" },
          { left: "mantener el párrafo de acuerdos con referentes únicos", right: "subordinación múltiple sin pérdida de referentes (semana 4)" },
          { left: "copiar la cita con su anacoluto", right: "anacolutos controlados (semana 5)" },
          { left: "«Vicent Martí, del equipo de sonido»", right: "elipsis en coordinación (semana 5)" },
        ],
      },
      {
        id: "c2-05-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa el criterio de la autora con argumentos propios.",
        items: [
          {
            prompt: "La autora afirma que escribir un acta «no es un trabajo neutro». Explica en 90–110 palabras qué decisiones del artículo lo demuestran y si te parece que el acta resultante es más fiel o menos fiel que una transcripción completa.",
            model: "Lo demuestran varias decisiones: elegir qué frase se cita literalmente y cuál se reformula, eliminar incisos salvo cuando cambian el alcance, convertir un rumor en una pregunta atribuida y no registrar la inferencia sobre el restaurante. Cada una interpreta lo que se dijo. Aun así, creo que el acta es más fiel que una transcripción en lo que importa: deja claro quién afirmó qué y con qué base. Una transcripción reproduciría todas las palabras, pero el lector futuro tendría que adivinar qué era rumor, qué era dato y qué se votó.",
            checklist: [
              "Cito al menos tres decisiones del artículo.",
              "Tomo posición sobre la fidelidad del acta.",
              "Distingo entre fidelidad a las palabras y fidelidad al contenido.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora usa en su propio texto los recursos que explica.",
      items: [
        { quote: "Los socios mayores, nadie les ha preguntado si pueden pagar una derrama de cuarenta euros", note: "Tema colgante conservado dentro de una cita literal." },
        { quote: "Si el tesorero dice que, que él sepa, no hay deudas con proveedores", note: "Inciso de comentario dentro de una subordinada, con su alcance explicado." },
        { quote: "Pepa Sanchis se encargará de las sillas; Vicent Martí, del equipo de sonido", note: "Elipsis del verbo en coordinación: mismo tiempo, estructura paralela." },
        { quote: "Contado desde el día de la asamblea, ese «había respondido» sitúa la respuesta antes de la pregunta", note: "Integración de la semana 3: ancla temporal y pluscuamperfecto." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, decisiones de cita o texto propio, reformulación y escritura breve. Termina con la recuperación integrada de las semanas 1 a 4 y de las clases de C1 que preparan esta.",
    exercises: [
      {
        id: "c2-05-orden",
        type: "order",
        prompt: "Ordena las palabras para obtener la versión del acta.",
        items: [
          {
            words: ["Pepa", "se", "encargará", "de", "las", "sillas;", "Vicent,", "del", "sonido."],
            why: "Elipsis en coordinación: el verbo se omite en el segundo miembro, no en el primero.",
          },
          {
            words: ["En", "cuanto", "a", "los", "socios", "mayores,", "la", "junta", "estudiará", "una", "rebaja."],
            why: "«En cuanto a» repara un tema colgante en el texto propio.",
          },
          {
            words: ["Que", "yo", "sepa,", "nadie", "ha", "ofrecido", "dinero", "por", "el", "solar."],
            why: "Fórmula fija con subjuntivo al principio: afecta a todo el enunciado.",
          },
        ],
      },
      {
        id: "c2-05-cita-o-texto",
        type: "context",
        prompt: "Decide qué versión corresponde al tipo de texto indicado.",
        items: [
          {
            context: "Grabación: «El tejado, el arquitecto dice que no aguanta otro invierno». Texto: acta, en estilo indirecto.",
            q: "¿Qué versión eliges?",
            options: [
              "El tejado, el arquitecto dijo que no aguantaba otro invierno.",
              "El presidente informó de que, según el arquitecto, el tejado no aguantará otro invierno.",
              "«El tejado, el arquitecto dice que no aguanta otro invierno.»",
            ],
            answer: 1,
            why: "En estilo indirecto se repara el tema colgante y se atribuye la previsión al arquitecto.",
          },
          {
            context: "Grabación de una socia: «Yo, lo que más recuerdo del casino es el baile de las fallas». Texto: libro del centenario, sección de recuerdos literales.",
            q: "¿Qué versión eliges?",
            options: [
              "«Yo, lo que más recuerdo del casino es el baile de las fallas.»",
              "«Lo que más recuerdo del casino es el baile de las fallas.»",
              "La socia recuerda sobre todo el baile de las fallas.",
            ],
            answer: 0,
            why: "En una sección de citas literales, el anacoluto se conserva.",
          },
          {
            context: "Mensaje en el grupo: «¿Lo del notario? Hecho». Texto: informe de la junta.",
            q: "¿Qué escribes en el informe?",
            options: [
              "Lo del notario, hecho.",
              "La escritura se firmó ante el notario.",
              "Antes de escribirlo, pregunto qué se hizo exactamente con el notario.",
            ],
            answer: 2,
            why: "«Hecho» no dice qué se hizo: no se puede recuperar con seguridad lo elidido.",
          },
        ],
      },
      {
        id: "c2-05-reformular",
        type: "transform",
        prompt: "Reformula cada fragmento para el acta como se indica.",
        items: [
          {
            source: "Los vecinos de la calle de la Reina, el Ayuntamiento nunca les contestó.",
            instruction: "Repara el tema colgante con un orden neutro, sin cambiar el contenido.",
            answers: ["El Ayuntamiento nunca contestó a los vecinos de la calle de la Reina.", "El Ayuntamiento nunca les contestó a los vecinos de la calle de la Reina."],
            why: "Con orden neutro y la preposición, el complemento recupera su función.",
          },
          {
            source: "Alguien habló con la prensa del rumor, pero no sabemos quién habló con la prensa del rumor.",
            instruction: "Usa una interrogativa reducida para eliminar la repetición.",
            answers: ["Alguien habló con la prensa del rumor, pero no sabemos quién."],
            why: "La interrogativa reducida recupera el resto por el antecedente.",
          },
          {
            source: "El tesorero presentó las cuentas y la secretaria presentó el acta anterior.",
            instruction: "Elide el verbo repetido en el segundo miembro.",
            answers: ["El tesorero presentó las cuentas y la secretaria, el acta anterior.", "El tesorero presentó las cuentas; la secretaria, el acta anterior."],
            why: "Mismo verbo, mismo tiempo: la elipsis con coma es correcta.",
          },
        ],
      },
      {
        id: "c2-05-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Grabación: «Las cuentas, que yo sepa, ¿eh?, nadie las ha visto desde junio, y eso, sinceramente, no puede ser». Escribe dos versiones (25–45 palabras cada una): la cita literal para un anexo y la versión en estilo indirecto para el acta.",
            model: "Anexo: «Las cuentas, que yo sepa, ¿eh?, nadie las ha visto desde junio, y eso, sinceramente, no puede ser». Acta: El señor Ferrer señaló que, hasta donde él sabía, ningún socio había podido consultar las cuentas desde junio, y lo consideró inaceptable.",
            checklist: [
              "La cita literal conserva el anacoluto y los incisos.",
              "El estilo indirecto repara el tema colgante.",
              "Mantengo la reserva «hasta donde él sabía» porque cambia el alcance.",
            ],
          },
          {
            prompt: "Redacta el párrafo de reparto de tareas del acta (40–60 palabras) usando al menos dos elipsis correctas en coordinación y una interrogativa reducida.",
            model: "Para la cena del centenario, Pepa Sanchis se encargará de las sillas; Vicent Martí, del sonido, y Mayelín Ortega, de la lista de invitados. Alguien ofreció un local para guardar el material, pero no consta quién, por lo que la secretaria lo preguntará en el grupo de la junta.",
            checklist: [
              "Las elipsis mantienen tiempo y estructura.",
              "La interrogativa reducida tiene antecedente claro.",
              "No invento información que nadie dijo.",
            ],
          },
        ],
      },
      {
        id: "c2-05-recuperacion",
        type: "open",
        prompt: "Recupera las clases de las semanas 1 a 4 y las de C1 que preparan esta, con los estímulos que se te dan. No vuelvas a las lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G205 (futuro perfecto de subjuntivo, semana 1). Estímulo, reglamento del casino de 1926: «El socio que hubiere faltado a tres juntas generales perderá el derecho de voto durante un año». Da la versión actual y explica qué orden de hechos exige.",
            model: "«El socio que haya faltado a tres juntas generales perderá el derecho de voto durante un año». Primero tienen que producirse las tres faltas y solo después se aplica la pérdida del voto. La forma no afirma que alguien haya faltado: plantea una situación eventual.",
            checklist: [
              "Uso «haya» + participio tras el relativo.",
              "Explico la anterioridad y la eventualidad.",
            ],
          },
          {
            prompt: "Recuperación de la clase G206 (reformulación moderna, semana 1). Estímulo: «Si alguno de los socios se negare a abonar la derrama, diósele de baja». Moderniza la frase y explica los dos cambios.",
            model: "«Si alguno de los socios se niega a pagar la derrama, se le da de baja». Tras «si» condicional, la forma en -re pasa a presente de indicativo; y el pronombre pospuesto al verbo conjugado («diósele») va hoy delante y separado («se le da»). Mantengo el valor normativo con el presente.",
            checklist: [
              "Uso indicativo tras «si».",
              "Coloco los pronombres delante del verbo conjugado.",
            ],
          },
          {
            prompt: "Recuperación de la clase G207 (modo según perspectiva, semana 2). Estímulo: «La junta entiende que los socios mayores están / estén preocupados». Explica qué dice el acta con cada modo y cuál elegirías después de la intervención de Mayelín.",
            model: "Con «están», la junta constata que los socios mayores están preocupados: se ha enterado y lo registra. Con «estén», la junta encuentra lógica una preocupación ya conocida. Después de la intervención de Mayelín elegiría «están», porque el acta debe dejar constancia de que la junta ha recibido la información.",
            checklist: [
              "Explico el valor de cada modo.",
              "Justifico la elección según el contexto.",
            ],
          },
          {
            prompt: "Recuperación de la clase G208 (condicional de rumor, semana 3). Estímulo, borrador de una nota de prensa: «El casino del Cabanyal habría sido vendido a una inmobiliaria». Reescríbela con la información que consta en el registro.",
            model: "«Según la nota simple del registro de la propiedad, el casino del Cabanyal sigue a nombre de la asociación vecinal. La junta confirma que una inmobiliaria se interesó por el solar en marzo y que respondió que no está en venta». La fuente sustituye al condicional y separa el rumor del hecho.",
            checklist: [
              "Elimino el condicional de rumor.",
              "Nombro la fuente de cada dato.",
            ],
          },
          {
            prompt: "Recuperación de la clase G209 (correlaciones temporales, semana 3). Estímulo: en 2023 el presidente dijo «Las obras terminarán antes del centenario». Hoy el centenario ya pasó y las obras no han terminado. Escribe cómo lo cuenta el acta y explica por qué.",
            model: "«En 2023 el presidente aseguró que las obras terminarían antes del centenario». Como el plazo ya ha pasado y la previsión no se cumplió, solo vale la correlación de pasado: «terminarán» presentaría la previsión como todavía vigente.",
            checklist: [
              "Uso la correlación de pasado.",
              "Explico por qué el futuro no es posible.",
            ],
          },
          {
            prompt: "Recuperación de la clase G210 (subordinación múltiple, semana 4). Estímulo: «El presidente se reunió con el arquitecto, que le entregó su informe, en el que dice que su propuesta es inviable». Reescribe la frase para que no haya dudas sobre de quién es el informe y la propuesta.",
            model: "«El presidente se reunió con el arquitecto, que le entregó un informe técnico. En ese informe, el arquitecto considera inviable la propuesta de la junta». Separo la información en dos oraciones y sustituyo los posesivos por «de la junta» y por un sujeto explícito.",
            checklist: [
              "Elimino los posesivos ambiguos.",
              "Uso un encapsulador o un sujeto explícito.",
            ],
          },
          {
            prompt: "Recuperación de la clase G185 (dislocación y clíticos, C1). Estímulo: «A la presidenta, los socios le regalaron una placa» / «La presidenta, los socios le regalaron una placa». Explica la diferencia y cuál usarías en el acta.",
            model: "La primera es una dislocación bien formada: el complemento adelantado conserva la preposición «a» y el pronombre «le» lo retoma. La segunda es un tema colgante, sin preposición, típico de la conversación. En el acta usaría la primera o, mejor, el orden neutro: «Los socios regalaron una placa a la presidenta».",
            checklist: [
              "Distingo dislocación y tema colgante.",
              "Propongo la versión adecuada para el acta.",
            ],
          },
          {
            prompt: "Recuperación de la clase G187 (elipsis avanzada, C1). Estímulo: «—¿Vendrán los fundadores a la cena? —Algunos sí; otros, que no pueden». Explica qué se ha omitido en cada parte y si la respuesta es clara.",
            model: "En «algunos sí» se omite «vendrán»: la polaridad positiva con «sí» basta. En «otros, que no pueden» se omite un verbo de decir: «otros dicen que no pueden». La respuesta es clara en la conversación, pero en un acta conviene escribir «otros han comunicado que no pueden asistir».",
            checklist: [
              "Recupero cada elemento omitido.",
              "Explico el verbo de decir elidido.",
              "Propongo una versión para un texto formal.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta el resumen de la asamblea del centenario para el boletín de la asociación (400–520 palabras). Debe recoger las intervenciones principales, una cita literal, el rumor de la venta con su respuesta documentada, la referencia al reglamento de 1926, el reparto de tareas y los acuerdos con sus condiciones.",
    context: "El boletín lo leen socios que no fueron a la asamblea y se archiva en la sede. Debe distinguir con claridad lo que se dijo de lo que se dedujo, la cita del texto propio y el dato del rumor. Puedes usar los datos de esta semana o inventar otros con la misma lógica.",
    steps: [
      "Haz una lista de lo que irá en cita literal, en estilo indirecto y como dato atribuido, y marca las elipsis del audio que no puedes recuperar con seguridad.",
      "Decide el orden: contexto, intervenciones, rumor y respuesta, historia, tareas y acuerdos.",
      "Redacta sin copiar el modelo. Usa al menos un inciso que cambie el alcance, una cita con su anacoluto, dos elipsis en coordinación, una forma histórica modernizada y un párrafo largo con referentes únicos.",
      "Revisa con la lista de control integrada: corrige incisos mal formados, anacolutos fuera de las comillas, elipsis con cambio de tiempo, modos, condicionales sin fuente, correlaciones y referentes. Lee el texto en voz alta.",
    ],
    useLanguage: [
      "que yo sepa / según el registro / dicho sea de paso",
      "«cita literal» frente a «señaló que…»",
      "X se encargará de…; Y, de…",
      "no consta quién / no se precisó cuándo",
      "quien haya pagado… (versión actual de «hubiere»)",
      "según la nota simple…, el edificio sigue a nombre de…",
    ],
    model: [
      "La asamblea del centenario reunió el pasado sábado a ciento doce socios en el salón del casino. Como es sabido, el edificio cumple cien años en mayo, y la junta presentó el presupuesto para restaurar el tejado, que, según el informe del arquitecto, no aguantará otro invierno sin una reparación.",
      "El presidente explicó que la obra costará unos treinta mil euros y que la junta propondrá una derrama de cuarenta euros por socio. Mayelín Ortega pidió que constara su intervención: «Los socios mayores, nadie les ha preguntado si pueden pagar una derrama de cuarenta euros». Varios asistentes apoyaron su petición, y el tesorero señaló que, hasta donde él sabía, ningún socio mayor había comunicado dificultades, aunque reconoció que nadie se lo había preguntado.",
      "La señora Ortega preguntó también si era cierto el rumor de que el edificio se había vendido. El presidente respondió que, según la nota simple del registro de la propiedad, el casino sigue a nombre de la asociación. Añadió que en marzo una inmobiliaria se había interesado por el solar y que la junta le había contestado que no estaba en venta. Que el rumor haya circulado tanto, dijo, demuestra que la junta debe informar con más frecuencia, y se comprometió a publicar un resumen mensual.",
      "En el capítulo histórico, el presidente leyó el artículo del reglamento fundacional de 1926 según el cual «el socio que hubiere satisfecho diez cuotas consecutivas tendrá voz y voto en la Junta general»; es decir, quien haya pagado diez cuotas seguidas. Aclaró que el reglamento vigente es el de 1987 y que la norma de 1926 se exhibirá solo como documento histórico en la exposición del centenario.",
      "Para la cena de aniversario, Pepa Sanchis se encargará de las sillas; Vicent Martí, del equipo de sonido, y Amparo Llorens, de las invitaciones. Un socio ofreció su furgoneta para el transporte del material, pero no consta quién, por lo que la secretaría lo preguntará en el grupo de la junta.",
      "Los acuerdos fueron dos. Primero, la junta propondrá en la asamblea de febrero una derrama de cuarenta euros por socio, de la cual los socios mayores de setenta años que lo soliciten por escrito pagarán la mitad, salvo que la subvención municipal solicitada en enero cubra la diferencia. Segundo, la junta publicará cada mes un resumen de sus decisiones en este boletín y en el tablón de la sede. Ambos se aprobaron por mayoría, con cuatro abstenciones y ningún voto en contra. La sesión terminó a las nueve y media, después de un turno de ruegos y preguntas en el que varios socios pidieron ampliar el horario de la biblioteca del casino.",
    ],
    checklist: [
      "Cada cita literal conserva lo que se dijo; cada texto propio está reparado.",
      "Los incisos tienen forma correcta y solo se conservan cuando cambian el alcance.",
      "Las elipsis mantienen tiempo y modo, y no completo lo que nadie dijo.",
      "El rumor aparece atribuido y la respuesta se apoya en una fuente.",
      "La forma histórica está modernizada y los tiempos y referentes son coherentes.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave y no leas un guion. Si te grabas, la grabación se queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Informe oral a la junta",
        prompt: "Presenta a la junta, en cuatro minutos, cómo has pasado a limpio la asamblea: qué citas literalmente y por qué, cómo tratas el rumor, qué elipsis no has podido recuperar y cómo has resuelto el reglamento de 1926 y el párrafo de acuerdos.",
        prep: [
          "Anota una decisión por cada semana del mes y una por cada clase de esta semana.",
          "Prepara dos incisos de comentario y practica su entonación.",
        ],
        seconds: 240,
        model: "Os cuento cómo he hecho el acta. Primero, la cita de Mayelín va literal, con su frase tal cual, porque pidió que constara; el resto de su intervención, en estilo indirecto. El rumor de la venta, que yo sepa, no tiene ninguna fuente, así que no aparece como dato: aparece su pregunta y la respuesta del presidente, con la nota simple del registro. Del reglamento de 1926, dicho sea de paso, he añadido la versión actual entre paréntesis…",
        selfCheck: [
          "Distingo con la voz los incisos del contenido.",
          "Menciono al menos una decisión de cada semana.",
          "No presento como dato ninguna inferencia.",
        ],
      },
      {
        title: "Mediación con un socio que quiere su frase literal",
        prompt: "Un socio, Ramón, exige que el acta recoja literalmente toda su intervención, incluida una frase en la que, según él, «la junta, nadie sabe en qué se gasta el dinero». Escúchalo, hazle dos preguntas para entender qué quiere que conste, explícale la diferencia entre cita y texto propio y negocia una solución.",
        prep: [
          "Prepara una frase de reconocimiento sin aceptar la acusación.",
          "Ten pensada una versión en estilo indirecto y una cita breve.",
        ],
        seconds: 180,
        model: "Entiendo que quieras que conste tu crítica, Ramón. ¿Qué es lo que más te importa que quede: la pregunta sobre el gasto o tu valoración de la junta? ¿Te parece bien que citemos una frase literal y el resto lo resumamos? Si va entre comillas, irá exactamente como lo dijiste. Fuera de las comillas escribiremos que pediste conocer el detalle de los gastos. Así queda tu voz y queda clara tu petición.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Explico la diferencia entre cita y texto propio.",
          "Propongo una solución concreta.",
        ],
      },
      {
        title: "Interpretar los mensajes del grupo",
        prompt: "Lee en voz alta cuatro mensajes elípticos del grupo de la junta («¿Lo del tejado? Mañana»; «Pepa, sillas; Vicent, sonido»; «¿El notario? Hecho»; «Aprobada»). Para cada uno, di qué se recupera con seguridad y qué tendrías que preguntar.",
        prep: [
          "Separa lo que el contexto recupera de lo que solo supones.",
          "Prepara una pregunta para cada mensaje dudoso.",
        ],
        seconds: 90,
        selfCheck: [
          "No invento lo que no se puede recuperar.",
          "Hago oír la pausa de la elipsis.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu resumen y las dudas de integración del mes. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Graba",
        task: "Graba dos minutos de una conversación real (con permiso) o toma una entrevista publicada, y pasa a limpio un fragmento delante de tu profesor: decide qué citas y qué reformulas.",
        phrases: ["Esto lo dejo literal porque…", "Aquí reparo el tema colgante así…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta a tu profesor qué incisos de comentario usa más en su variedad y si alguno le suena forzado por escrito.",
        phrases: ["¿Tú dirías «valga la expresión» en una charla?", "¿Cuál usarías en un informe?"],
      },
      {
        move: "Integra",
        task: "Elige un párrafo de tu resumen y pide a tu profesor que busque en él un error de cada semana del mes; si no encuentra ninguno, pídele que te proponga uno para corregir.",
        phrases: ["¿Ves algún condicional sin fuente?", "¿Este pronombre tiene un solo referente?"],
      },
      {
        move: "Interpreta",
        task: "Lleva tres mensajes elípticos reales de un chat y pide a tu profesor que diga qué recupera y qué tendría que preguntar.",
        phrases: ["Aquí se sobrentiende…", "Esto ya es una suposición mía."],
      },
    ],
    bring: "Tu resumen revisado, con las citas marcadas, y una grabación o una entrevista con un fragmento que te haya costado pasar a limpio.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Cuál de estas frases usa correctamente el inciso de comentario?",
        options: [
          "La cesión, según creo que vence en 2030.",
          "La cesión, según creo, vence en 2030.",
          "La cesión, que yo sé, vence en 2030.",
        ],
        answer: 1,
        why: "«Según creo» es un inciso cerrado; «que yo sepa» lleva subjuntivo.",
      },
      {
        type: "choice",
        q: "«—¿Qué tal la reunión con el Ayuntamiento? —Bueno, el café estaba bueno». ¿Qué debe recoger un acta?",
        options: [
          "Que la reunión fue un fracaso.",
          "Que el Ayuntamiento rechazó la propuesta.",
          "Solo lo que se afirmó, sin la inferencia.",
        ],
        answer: 2,
        why: "La implicatura es cancelable y no es una afirmación.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué hace el adverbio?",
        options: [
          "Comenta el enunciado: el hablante se expresa con honestidad.",
          "Dice cómo presentó las cuentas el tesorero.",
          "Atribuye la opinión al tesorero.",
        ],
        answer: 0,
        why: "Pausa tras «honestamente»: adverbio del enunciado.",
        audio: "Honestamente, el tesorero presentó las cuentas demasiado tarde.",
        voice: "es-ES-f",
      },
      {
        type: "gap",
        q: "Ramón no firmó la propuesta de la derrama; Amparo, ___.",
        answers: [["sí"]],
        hint: "Tras una negación, el segundo miembro necesita una marca de polaridad positiva.",
        why: "«Amparo sí [la firmó]»: la polaridad tiene que quedar explícita.",
      },
      {
        type: "gap",
        q: "El presidente se reunió con alguien de la inmobiliaria, pero no ha dicho ___ quién.",
        answers: [["con"]],
        hint: "La interrogativa conserva la preposición del verbo «hablar con».",
        why: "En el uso cuidado, el elemento interrogativo conserva su preposición.",
      },
      {
        type: "transform",
        source: "Los socios jubilados, la junta les mandará la convocatoria por correo postal.",
        instruction: "Convierte el tema colgante en una dislocación bien formada, conservando el orden y el pronombre.",
        answers: ["A los socios jubilados, la junta les mandará la convocatoria por correo postal."],
        why: "Con la preposición «a», la dislocación está bien formada y el pronombre la retoma.",
      },
      {
        type: "error",
        sentence: "Aprobado la reforma del reglamento por mayoría.",
        answers: ["Aprobada la reforma del reglamento por mayoría."],
        why: "En el estilo de titular el participio concuerda con «reforma».",
      },
      {
        type: "error",
        sentence: "La junta revisó el presupuesto en enero; los socios, en la asamblea de marzo que viene.",
        answers: ["La junta revisó el presupuesto en enero; los socios lo revisarán en la asamblea de marzo.", "La junta revisó el presupuesto en enero, y los socios lo revisarán en la asamblea de marzo."],
        why: "La elipsis no admite cambio de tiempo: hay que expresar el futuro.",
      },
      {
        type: "error",
        sentence: "El socio que hubiere perdido el carné, según el reglamento vigente, pedirá otro en secretaría.",
        answers: ["El socio que haya perdido el carné, según el reglamento vigente, pedirá otro en secretaría."],
        why: "Integración de la semana 1: en un texto actual, «hubiere» se moderniza como «haya».",
      },
      {
        type: "order",
        words: ["Que", "yo", "recuerde,", "el", "casino", "nunca", "cerró", "en", "verano."],
        why: "Fórmula fija con subjuntivo al principio del enunciado.",
      },
      {
        type: "open",
        prompt: "Explica en 90–110 palabras a la nueva secretaria de la asociación cómo decidir, frase a frase, qué se cita literalmente, qué se reformula y qué no pasa al acta. Usa ejemplos de la asamblea del centenario y menciona al menos dos clases del mes.",
        model: "Primero, pregúntate si alguien pidió que constaran sus palabras: si es así, van entre comillas y tal como se dijeron, con sus anacolutos, como la frase de Mayelín. Lo demás se cuenta en estilo indirecto, reparado y con tiempos coherentes desde el día de la asamblea. Los incisos como «que yo sepa» se omiten, salvo que cambien lo que se afirma. Un rumor, como el de la venta, solo aparece atribuido y acompañado de la respuesta documentada. Y lo que alguien deduce de una respuesta elíptica, como lo del restaurante, no pasa al acta.",
        checklist: [
          "Distingo cita literal, estilo indirecto y lo que no se registra.",
          "Uso ejemplos de la asamblea.",
          "Menciono al menos dos clases del mes.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Uso incisos de comentario con su forma fija, los coloco según su alcance y los puntúo según su grado de desvinculación.",
      "Distingo dislocación, tema colgante y ruptura, conservo el anacoluto en las citas literales y lo reparo en mi texto.",
      "Uso y reconozco elipsis en coordinación, interrogativas reducidas, respuestas fragmentarias y estilo de titular, y no registro como dicho lo que solo se infiere.",
      "Integro en un mismo texto la modernización de formas históricas, la elección de modo, la atribución, las correlaciones temporales y los referentes claros de las semanas 1 a 4.",
    ],
    review: [
      "Dentro de dos días, toma un fragmento de una entrevista publicada y escribe la versión literal y la versión en estilo indirecto.",
      "Dentro de una semana, revisa tu resumen con la tabla de integración y corrige un error de cada semana si lo encuentras.",
      "En la próxima clase, lee en voz alta tu resumen y pide a tu profesor que señale el inciso o la elipsis más discutible.",
    ],
  },
  related: [
    { path: "/gramatica/construcciones-parenteticas-y-anacolutos-controlados", label: "Clase: Construcciones parentéticas y anacolutos controlados" },
    { path: "/gramatica/elipsis-compleja-y-recuperacion-inferencial", label: "Clase: Elipsis compleja y recuperación inferencial" },
  ],
};
