import type { Module } from "../../types";

/**
 * C1 · semana 4 · Autoestudio espejo de G173 (modalidad epistémica:
 * evidencialidad y grados de certeza) y G174 (probabilidad retrospectiva y
 * condicional compuesto). Repaso autónomo con un lienzo ficticio hallado en un
 * convento de Sevilla y la discusión sobre su autoría. Audio mediante síntesis;
 * sin acreditación regional.
 */
export const c1w04: Module = {
  id: "c1-04",
  level: "c1",
  week: 4,
  kind: "core",
  title: "Lo que el lienzo deja ver: certezas, indicios y rumores",
  subtitle: "Repaso de los grados de certeza, las marcas de fuente y los valores del condicional compuesto",
  stop: {
    place: "Sevilla",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c1.gram.g173",
    "c1.gram.g174",
    "c1.voc.w04-restauracion-atribucion",
    "c1.pron.w04-habra-habria",
    "c1.lis.w04-taller-restauracion",
    "c1.read.w04-articulo-atribucion",
    "c1.wri.w04-informe-hipotesis",
    "c1.spk.w04-presentar-hipotesis",
    "c1.fun.w04-graduar-compromiso",
    "c1.disc.w04-certeza-fuente",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo decir cuánto sé y de dónde lo sé, formular conjeturas sobre un pasado anterior a otro y distinguir por el contexto los valores del condicional compuesto.",
    steps: [
      "Repasa en la teoría la escala de certeza, las marcas de fuente y el mapa de la conjetura en el tiempo.",
      "Practica con las hipótesis de dos especialistas sobre un lienzo hallado en un convento de Sevilla.",
      "Escucha su conversación en el taller y lee el artículo de prensa sobre la atribución.",
      "Redacta un informe con grados de certeza, revísalo y preséntalo en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste con tu profesor cómo se gradúa la certeza y cómo se conjetura sobre el pasado. Aquí lo repasas con otra historia: en un convento de Sevilla aparece un lienzo del siglo XVII sin firma. Una restauradora y un historiador del arte intentan averiguar quién lo pintó, cuándo y cómo llegó allí. Cada frase que dicen responde a dos preguntas: ¿cuánto lo sé? y ¿de dónde lo sé?",
    parts: [
      {
        heading: "Cuánto lo sé: cuatro peldaños y su modo",
        body: [
          "La afirmación sin marcas es la más fuerte: «el lienzo mide dos metros». En cuanto añades «seguro que» o «sin duda», presentas una conclusión tuya, y con «seguramente» ya bajas a «probablemente». Por eso, si has comprobado un dato con un documento o una medición, lo más firme es decirlo sin adornos.",
          "Por debajo de la certeza hay tres peldaños. Probabilidad alta: «probablemente», «lo más probable es que» + subjuntivo, «debe de» o «tiene que» + infinitivo, y el futuro de conjetura («será del taller de Zurbarán»). Probabilidad media: «quizá», «tal vez», «posiblemente» (con los dos modos), «puede que» + subjuntivo y «a lo mejor» + indicativo. Probabilidad baja: «dudo que», «no creo que», «es poco probable que» + subjuntivo, y «difícilmente» + indicativo.",
        ],
        table: {
          caption: "La escala de certeza aplicada a «el lienzo es de 1650»",
          head: ["Grado", "Marcadores", "Ejemplo"],
          rows: [
            ["Certeza", "afirmación sin marcas; no cabe duda de que + ind.", "La radiografía muestra una fecha: 1650."],
            ["Alta", "debe de + inf.; lo más probable es que + subj.; futuro", "Debe de ser de hacia 1650. Será de hacia 1650."],
            ["Media", "puede que + subj.; quizá(s) + ind./subj.; a lo mejor + ind.", "Puede que sea de 1650. A lo mejor es algo anterior."],
            ["Baja", "dudo que, es poco probable que + subj.; difícilmente + ind.", "Es poco probable que sea anterior a 1640."],
          ],
        },
        mistakes: [
          {
            wrong: "A lo mejor el cuadro sea de un discípulo de Murillo.",
            right: "A lo mejor el cuadro es de un discípulo de Murillo.",
            why: "«A lo mejor» va siempre con indicativo, aunque exprese posibilidad.",
          },
          {
            wrong: "El lienzo debe ser de hacia 1650, a juzgar por el tejido.",
            right: "El lienzo debe de ser de hacia 1650, a juzgar por el tejido.",
            why: "Para la deducción, la norma recomienda «deber de»; «deber» sin «de» expresa obligación, aunque en el habla se confundan.",
          },
        ],
      },
      {
        heading: "De dónde lo sé: lo veo, lo deduzco o me lo han dicho",
        body: [
          "La evidencialidad señala la fuente. Si deduces algo a partir de una pista propia, usa «se ve que», «por lo que veo», «a juzgar por», «parece que» + indicativo o «tiene que» + infinitivo. Si transmites información ajena, «al parecer», «por lo visto», «según parece», «parece ser que», «dicen que», «se dice que» o «se supone que». Si quieres marcar el límite de lo que sabes, «que yo sepa» o «que sepamos», siempre con subjuntivo.",
          "Ojo con «parecer»: «parece que» + indicativo presenta una impresión o una deducción; «no parece que» + subjuntivo la niega; y «parece mentira que» + subjuntivo no informa de ninguna fuente: da el hecho por cierto y lo valora con sorpresa. En la prensa, el condicional sirve para presentar un rumor sin hacerse responsable: «el cuadro habría sido vendido en 1820». Es frecuente en titulares, aunque muchos libros de estilo recomiendan evitarlo y nombrar la fuente.",
        ],
        table: {
          caption: "Tres fuentes para un mismo dato",
          head: ["Fuente", "Marcador", "Ejemplo"],
          rows: [
            ["Lo veo yo", "afirmación sin marcas", "El lienzo tiene un remiendo en la esquina."],
            ["Lo deduzco de una pista", "se ve que, a juzgar por, tiene que", "A juzgar por el remiendo, se ve que lo enrollaron alguna vez."],
            ["Me lo han dicho o lo he leído", "al parecer, por lo visto, según parece", "Al parecer, las monjas lo escondieron durante la guerra."],
            ["Límite de lo que sé", "que yo sepa + subjuntivo", "Que yo sepa, nadie lo ha fotografiado antes."],
            ["Rumor en la prensa", "condicional periodístico", "El lienzo habría pertenecido a un comerciante de Cádiz."],
          ],
        },
        examples: [
          { es: "Por lo visto, el capellán lo mandó limpiar en los años cincuenta.", note: "Información oída a otros." },
          { es: "Parece mentira que nadie lo haya estudiado hasta ahora.", note: "No es una fuente: valora un hecho con sorpresa." },
        ],
        tip: "Antes de escribir una frase sobre un dato dudoso, ponle una etiqueta mental: V (lo vi), D (lo deduje) u O (me lo contaron). Después elige el marcador que corresponde a esa etiqueta.",
      },
      {
        heading: "El mapa de la conjetura en el tiempo",
        body: [
          "La conjetura se expresa desplazando el tiempo verbal un paso. Sobre el presente: «estará en el almacén» = probablemente está. Sobre un pasado con efecto en el presente: «habrá estado en el almacén» = probablemente ha estado. Sobre un pasado visto desde ese pasado: «estaría en el almacén» = probablemente estaba. Y sobre un pasado anterior a otro pasado: «cuando llegaron los restauradores, ya lo habrían limpiado» = probablemente ya lo habían limpiado.",
          "La elección entre «habrá» y «habría» depende del punto de referencia: si es ahora, «habrá + participio»; si es un momento pasado, «habría + participio». Las formas en -ra y en -se no expresan conjetura: «ya lo hubieran limpiado» no significa «probablemente ya lo habían limpiado». Con «haber» impersonal, el condicional simple también conjetura: «habría unas treinta pinturas en el convento» = probablemente había unas treinta.",
        ],
        table: {
          caption: "Conjetura y su equivalente",
          head: ["Lo que pasó (probablemente)", "Conjetura", "Equivalente"],
          rows: [
            ["está", "estará", "probablemente está / debe de estar"],
            ["ha estado", "habrá estado", "probablemente ha estado"],
            ["estaba / estuvo", "estaría", "probablemente estaba / debía de estar"],
            ["había estado", "habría estado", "probablemente había estado"],
          ],
        },
        mistakes: [
          {
            wrong: "Cuando las monjas lo encontraron, alguien ya lo hubiera barnizado.",
            right: "Cuando las monjas lo encontraron, alguien ya lo habría barnizado.",
            why: "Conjetura sobre un pasado anterior: solo el condicional compuesto tiene ese valor.",
          },
          {
            wrong: "Mira el barniz: lo habría restaurado alguien hace poco.",
            right: "Mira el barniz: lo habrá restaurado alguien hace poco.",
            why: "El punto de referencia es ahora: ha restaurado → habrá restaurado.",
          },
        ],
      },
      {
        heading: "Una forma, varios valores: el contexto decide",
        body: [
          "«Habría + participio» no siempre es una conjetura. Puede expresar un resultado irreal: «lo habríamos datado antes, pero el laboratorio estaba cerrado» (no lo datamos). Puede ser el futuro de un pasado en estilo indirecto: «el laboratorio dijo que para mayo habría terminado el análisis» (era lo previsto; si se cumplió, lo dirá el contexto). Puede atenuar una queja: «habríamos preferido que nos avisaran» (o «que nos hubieran avisado»; nunca «que nos avisen»). Y puede conceder algo probable para neutralizarlo: «lo habrían limpiado con cuidado, pero el barniz se ha oscurecido».",
          "Solo en el valor irreal alterna «habría» con «hubiera» en la oración principal: «sin la radiografía, nunca lo habríamos / hubiéramos sabido». Detrás de «si» condicional nunca va «habría»; pero detrás de «si» con valor de «whether», en una pregunta indirecta, sí: «no sé si el pintor habría visto el original».",
        ],
        examples: [
          { es: "Sin la radiografía, nunca habríamos visto el arrepentimiento del brazo.", note: "Resultado irreal: alterna con «hubiéramos visto»." },
          { es: "La restauradora aseguró que para el lunes habría retirado el barniz.", note: "Futuro del pasado: lo previsto en aquel momento." },
          { es: "Habríamos preferido que el convento nos dejara entrar antes.", note: "Queja atenuada con imperfecto de subjuntivo." },
        ],
        mistakes: [
          {
            wrong: "Si el pintor habría firmado el lienzo, no estaríamos discutiendo.",
            right: "Si el pintor hubiera firmado el lienzo, no estaríamos discutiendo.",
            why: "Detrás de «si» condicional va «hubiera», nunca «habría».",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "En cada frase, decide primero la fuente y el grado de certeza; después, el punto de referencia temporal.",
    exercises: [
      {
        id: "c1-04-gramatica-fuente",
        type: "context",
        prompt: "Lee la situación y elige la frase que refleja la fuente y la certeza del hablante.",
        items: [
          {
            context: "Macarena acaba de medir el lienzo con una cinta métrica.",
            q: "¿Qué dice?",
            options: [
              "Seguramente mide dos metros y diez.",
              "Mide dos metros y diez.",
              "Por lo visto mide dos metros y diez.",
            ],
            answer: 1,
            why: "Lo ha comprobado: la afirmación sin marcas es la más firme.",
          },
          {
            context: "Julián ve un remiendo antiguo y unas marcas de pliegue en el lienzo.",
            q: "¿Qué conclusión formula?",
            options: [
              "A juzgar por los pliegues, lo tuvieron enrollado mucho tiempo.",
              "Al parecer, lo tuvieron enrollado mucho tiempo.",
              "Dicen que lo tuvieron enrollado mucho tiempo.",
            ],
            answer: 0,
            why: "Deduce a partir de una pista propia: «a juzgar por».",
          },
          {
            context: "La abadesa les ha contado que, según las monjas mayores, el cuadro estuvo escondido en la guerra.",
            q: "¿Cómo lo transmite Macarena?",
            options: [
              "Tiene que haber estado escondido en la guerra.",
              "Estuvo escondido en la guerra, sin duda.",
              "Por lo visto, estuvo escondido durante la guerra.",
            ],
            answer: 2,
            why: "Información oída a otros: «por lo visto».",
          },
          {
            context: "Ningún catálogo que Julián conoce menciona el cuadro, aunque no los ha revisado todos.",
            q: "¿Qué frase es la adecuada?",
            options: [
              "Que yo sepa, ningún catálogo lo menciona.",
              "Que yo sé, ningún catálogo lo menciona.",
              "Seguro que ningún catálogo lo menciona.",
            ],
            answer: 0,
            why: "«Que yo sepa» limita su conocimiento; va siempre con subjuntivo.",
          },
        ],
      },
      {
        id: "c1-04-gramatica-conjetura",
        type: "gap",
        prompt: "Escribe la forma de conjetura que corresponde a la frase entre corchetes.",
        items: [
          { q: "El capellán no contesta al teléfono; ___ en misa. [probablemente está]", answers: [["estará"]], why: "Conjetura sobre el presente: futuro simple." },
          { q: "Alguien ___ el marco hace poco, porque los clavos son nuevos. [probablemente ha cambiado]", answers: [["habrá cambiado"]], why: "Pasado con referencia en el presente: futuro compuesto." },
          { q: "En 1936 el convento ___ cerrado a los visitantes. [probablemente estaba]", answers: [["estaría"]], why: "Conjetura sobre un pasado: condicional simple." },
          { q: "Cuando llegó al convento en 1680, el cuadro ya ___ por varias manos. [probablemente había pasado]", answers: [["habría pasado"]], why: "Pasado anterior a otro pasado: condicional compuesto." },
          { q: "En la sacristía ___ unas cuarenta pinturas antes del inventario. [probablemente había]", answers: [["habría"]], why: "«Haber» impersonal: condicional simple de conjetura." },
          { q: "El laboratorio anunció que para junio ___ el análisis de pigmentos. [lo previsto entonces: terminar antes de junio]", answers: [["habría terminado"]], why: "Futuro del pasado anterior: condicional compuesto en estilo indirecto." },
        ],
      },
      {
        id: "c1-04-gramatica-valores",
        type: "classify",
        prompt: "Clasifica cada condicional compuesto según su valor.",
        categories: ["Conjetura sobre el pasado", "Resultado irreal", "Futuro del pasado o queja atenuada"],
        items: [
          { text: "Cuando lo trajeron al convento, ya lo habrían recortado por los bordes.", cat: 0, why: "Probablemente ya lo habían recortado." },
          { text: "Con mejor luz, habríamos visto la firma a simple vista.", cat: 1, why: "No había buena luz y no la vieron." },
          { text: "El restaurador dijo que para Semana Santa habría colgado el cuadro.", cat: 2, why: "Lo previsto desde un momento pasado." },
          { text: "Habríamos preferido que la prensa esperara al informe final.", cat: 2, why: "Queja presentada como deseo no cumplido." },
          { text: "El donante lo habría comprado en Cádiz, a algún comerciante de Indias.", cat: 0, why: "Conjetura sobre un hecho pasado." },
          { text: "De haber tenido presupuesto, habríamos hecho también la reflectografía.", cat: 1, why: "Condición pasada no cumplida y resultado irreal." },
        ],
      },
      {
        id: "c1-04-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de modo, de tiempo o de marcador. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "Es poco probable que el lienzo es anterior a 1640.",
            answers: ["Es poco probable que el lienzo sea anterior a 1640."],
            why: "«Es poco probable que» pide subjuntivo.",
          },
          {
            sentence: "Parece mentira que nadie ha estudiado este cuadro en tres siglos.",
            answers: ["Parece mentira que nadie haya estudiado este cuadro en tres siglos."],
            why: "«Parece mentira que» valora un hecho: subjuntivo.",
          },
          {
            sentence: "Habríamos preferido que el obispado nos avise antes de la rueda de prensa.",
            answers: ["Habríamos preferido que el obispado nos avisara antes de la rueda de prensa.", "Habríamos preferido que el obispado nos hubiera avisado antes de la rueda de prensa.", "Habríamos preferido que el obispado nos avisase antes de la rueda de prensa."],
            why: "Tras «habríamos preferido que», imperfecto o pluscuamperfecto de subjuntivo; nunca presente.",
          },
          {
            sentence: "Mira el polvo del marco: nadie lo habría tocado en décadas.",
            answers: ["Mira el polvo del marco: nadie lo habrá tocado en décadas.", "Mira el polvo del marco: nadie lo ha tocado en décadas."],
            why: "El punto de referencia es ahora: futuro compuesto de conjetura.",
          },
        ],
      },
      {
        id: "c1-04-gramatica-reformular",
        type: "open",
        prompt: "Reformula según la instrucción. Hay varias respuestas posibles: compara con el modelo y la lista.",
        items: [
          {
            prompt: "Un titular dice: «El cuadro del convento es un Murillo robado en 1810». Reescríbelo para que transmita el rumor sin afirmarlo y nombre el tipo de fuente.",
            model: "Según fuentes del obispado, el lienzo del convento podría ser obra del taller de Murillo y habría salido de una colección privada a principios del siglo XIX, aunque los especialistas aún no lo han confirmado.",
            checklist: [
              "Uso un marcador de fuente ajena o el condicional periodístico.",
              "Rebajo el grado de certeza de la autoría.",
              "Distingo lo que no está confirmado.",
            ],
          },
          {
            prompt: "Tus notas dicen: «Probablemente lo pintaron hacia 1650. Probablemente ya lo habían cortado cuando llegó al convento. Si hubiéramos tenido la reflectografía, lo habríamos sabido antes». Reescríbelas sin «probablemente» y sin «si».",
            model: "Lo pintarían hacia 1650 y, cuando llegó al convento, ya lo habrían cortado. De haber tenido la reflectografía, lo habríamos sabido antes.",
            checklist: [
              "Uso condicional simple y compuesto de conjetura con el punto de referencia correcto.",
              "Sustituyo la condición con «si» por «de + infinitivo compuesto».",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar del estudio de una obra antigua y del grado de seguridad de cada conclusión.",
    groups: [
      {
        title: "El taller de restauración",
        items: [
          { es: "el lienzo", note: "tela preparada sobre la que se pinta; también, el cuadro mismo" },
          { es: "la capa pictórica", note: "conjunto de capas de pintura sobre la preparación" },
          { es: "el barniz oxidado", note: "capa protectora que con el tiempo amarillea y oscurece la obra" },
          { es: "la radiografía", note: "imagen por rayos X que revela lo que hay bajo la superficie" },
          { es: "el arrepentimiento", note: "cambio que el pintor hizo sobre su primera idea y que queda oculto" },
          { es: "el taller de un maestro", note: "grupo de ayudantes y discípulos que trabajaban con un pintor" },
          { es: "atribuir una obra", note: "asignarla a un autor con argumentos" },
          { es: "datar", note: "establecer la fecha aproximada de algo" },
        ],
      },
      {
        title: "Indicios y certezas",
        items: [
          { es: "el indicio", note: "señal que permite suponer algo sin probarlo" },
          { es: "la prueba concluyente", note: "dato que no deja lugar a dudas" },
          { es: "no descartar", note: "seguir considerando posible algo" },
          { es: "inclinarse por", note: "preferir una hipótesis sin estar del todo seguro" },
          { es: "ir demasiado lejos", note: "afirmar más de lo que los datos permiten" },
          { es: "a falta de", note: "mientras no se disponga de algo" },
          { es: "hasta donde sabemos", note: "según los datos disponibles, que pueden ser incompletos" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-04-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el arrepentimiento", right: "cambio que el pintor hizo sobre su primera idea y que queda oculto" },
          { left: "el barniz oxidado", right: "capa protectora que con el tiempo amarillea y oscurece la obra" },
          { left: "atribuir una obra", right: "asignarla a un autor con argumentos" },
          { left: "el indicio", right: "señal que permite suponer algo sin probarlo" },
          { left: "la prueba concluyente", right: "dato que no deja lugar a dudas" },
          { left: "inclinarse por", right: "preferir una hipótesis sin estar del todo seguro" },
          { left: "ir demasiado lejos", right: "afirmar más de lo que los datos permiten" },
        ],
      },
      {
        id: "c1-04-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["no descartamos", "a falta de", "datar", "radiografía", "taller"],
        items: [
          { q: "___ los resultados del laboratorio, nos inclinamos por una fecha cercana a 1650.", answers: [["A falta de"]] },
          { q: "La ___ dejó ver un brazo pintado en otra posición debajo del actual.", answers: [["radiografía"]] },
          { q: "Para ___ el lienzo con precisión hace falta analizar la tela y los pigmentos.", answers: [["datar"]] },
          { q: "Las manos son de calidad desigual; quizá pintaran el fondo ayudantes del ___.", answers: [["taller"]] },
          { q: "___ que el cuadro llegara desde Cádiz, pero no tenemos ningún documento.", answers: [["No descartamos"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Habrá y habría: el acento que separa la conjetura sobre ahora y sobre entonces",
    explanation: [
      "El futuro compuesto y el condicional compuesto se distinguen por una sílaba y por el acento: ha-BRÁ es aguda y tiene dos sílabas; ha-BRÍ-a tiene tres, con hiato entre la í tónica y la a final. Lo mismo ocurre con es-ta-RÁ y es-ta-RÍ-a. Si reduces el hiato y dices algo parecido a «habrá», tu oyente entenderá que conjeturas sobre el presente y no sobre el pasado.",
      "En la conversación rápida, la preposición de «debe de» se debilita mucho, pero no desaparece: pronúnciala breve y unida al verbo, «de-be-de-ser». Y cuando presentas una información ajena con «por lo visto» o «al parecer», una pausa breve después del marcador ayuda a que se oiga como un comentario sobre la fuente.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el contraste y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "Dos sílabas frente a tres",
      head: ["Futuro (agudo)", "Condicional (hiato)"],
      rows: [
        ["habrá pintado", "habría pintado"],
        ["estará", "estaría"],
        ["tendrá", "tendría"],
        ["habrán llegado", "habrían llegado"],
      ],
    },
    perceive: {
      id: "c1-04-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué forma oyes.",
      items: [
        {
          q: "¿Qué forma oyes?",
          options: ["habrá retocado: conjetura sobre algo reciente", "habría retocado: conjetura desde un momento pasado"],
          answer: 0,
          why: "Se oye ha-BRÁ, con dos sílabas: futuro compuesto.",
          audio: "Alguien habrá retocado el fondo hace poco.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué forma oyes?",
          options: ["habrá retocado", "habría retocado"],
          answer: 1,
          why: "Se oye ha-BRÍ-a, con hiato: condicional compuesto.",
          audio: "Cuando lo trajeron al convento, alguien ya habría retocado el fondo.",
          voice: "es-MX-m",
        },
        {
          q: "¿Qué forma oyes?",
          options: ["estaría", "estará"],
          answer: 0,
          why: "es-ta-RÍ-a: tres sílabas en la terminación, conjetura sobre el pasado.",
          audio: "En aquella época el cuadro estaría en la sacristía.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué oyes después de «debe»?",
          options: ["Nada: «debe ser»", "Una «de» breve: «debe de ser»"],
          answer: 1,
          why: "La preposición se oye breve pero presente: deducción.",
          audio: "Este azul debe de ser de un pigmento muy caro.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "Alguien habrá limpiado el marco esta semana.", tip: "ha-BRÁ: dos sílabas, acento al final.", voice: "es-ES-f" },
      { text: "Cuando llegó al convento, ya lo habrían recortado.", tip: "ha-BRÍ-an: no cierres el hiato.", voice: "es-MX-m" },
      { text: "Por lo visto, las monjas lo escondieron durante la guerra.", tip: "Pausa breve después de «por lo visto».", voice: "es-ES-m" },
      { text: "Que sepamos, nadie lo había estudiado hasta ahora.", tip: "Agrupa «que sepamos» y baja el tono al final.", voice: "es-ES-f" },
    ],
    spelling: "La tilde de «habría» marca el hiato; la de «habrá», la palabra aguda. Si escribes «habria» sin tilde, el lector puede dudar de qué forma quisiste escribir.",
  },
  listening: {
    title: "Bajo el barniz",
    context: "En un taller de restauración de Sevilla, la restauradora Macarena y el historiador del arte Julián, que viene de Puebla, estudian un lienzo sin firma hallado en un convento. Comentan lo que ven, lo que deducen y lo que les han contado. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "m", name: "Macarena", voice: "es-ES-f", role: "Restauradora" },
      { id: "j", name: "Julián", voice: "es-MX-m", role: "Historiador del arte" },
    ],
    script: [
      { speaker: "m", text: "Mira la radiografía, Julián. Debajo del brazo de la santa hay otro brazo, levantado. El pintor cambió de idea: es un arrepentimiento clarísimo." },
      { speaker: "j", text: "Entonces no es una copia. Un copista no habría dudado así, habría copiado el gesto final y punto. Esto tiene que ser obra de alguien que inventaba la composición." },
      { speaker: "m", text: "Eso creo yo. Y, a juzgar por la tela, se ve que es sevillana, de mediados del diecisiete. Lo que no sé es cuándo lo recortaron. Mira el borde: cuando lo clavaron en este bastidor, ya le habrían quitado unos diez centímetros por cada lado." },
      { speaker: "j", text: "¿Y la abadesa qué te contó?" },
      { speaker: "m", text: "Por lo visto, durante la guerra las monjas lo enrollaron y lo escondieron en el coro. Las mayores dicen que antes estaba en la sacristía. No lo puedo confirmar, pero los pliegues encajan con esa historia." },
      { speaker: "j", text: "Hay otra cosa. En un inventario de Puebla de 1702 aparece una «Santa Justa con palmas» enviada desde Sevilla que nunca llegó a México. No digo que sea esta, ¿eh? Es poco probable que lo podamos demostrar. Pero el tamaño original coincidiría." },
      { speaker: "m", text: "Pues ya me imagino el titular de mañana: «El cuadro perdido de México aparece en Sevilla». Un periodista me llamó ayer y daba por hecho que era de Zurbarán." },
      { speaker: "j", text: "Eso es ir demasiado lejos. Yo me inclino por un pintor del círculo de Zurbarán, pero a falta de documentos, no lo puedo afirmar. Habría preferido que no se filtrara nada hasta tener el informe." },
      { speaker: "m", text: "Y yo. El laboratorio prometió que para el viernes habría terminado el análisis de pigmentos. Si el azul es lo que creo, la datación será mucho más precisa. Hasta entonces, que sepamos, es un lienzo sevillano de calidad y con una historia interesante, nada más." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué intentan averiguar y cuál es su actitud general?",
        exercise: {
          id: "c1-04-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué intentan averiguar Macarena y Julián?",
              options: [
                "Cuánto cuesta restaurar el lienzo.",
                "Quién pintó el lienzo, cuándo y qué historia tiene.",
                "Cómo transportar el lienzo a México.",
              ],
              answer: 1,
              why: "Discuten autoría, fecha y procedencia.",
            },
            {
              q: "¿Qué actitud tienen ante la atribución?",
              options: [
                "Prudente: distinguen lo que saben de lo que suponen.",
                "Entusiasta: están seguros de que es de Zurbarán.",
                "Indiferente: el autor no les interesa.",
              ],
              answer: 0,
              why: "Rechazan el titular exagerado y esperan el informe.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada dato con su fuente.",
        exercise: {
          id: "c1-04-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué piensa Julián que el lienzo no es una copia?",
              options: [
                "Porque tiene una firma escondida.",
                "Porque la tela es de muy buena calidad.",
                "Porque la radiografía muestra un cambio de idea del pintor.",
              ],
              answer: 2,
              why: "Un copista no habría dudado: copiaría el gesto final.",
            },
            {
              q: "¿De dónde procede la historia de la guerra?",
              options: [
                "De lo que contaron la abadesa y las monjas mayores.",
                "De un documento del archivo del convento.",
                "De la radiografía.",
              ],
              answer: 0,
              why: "«Por lo visto» y «las mayores dicen»: fuente ajena.",
            },
            {
              q: "¿Qué prometió el laboratorio?",
              options: [
                "Publicar el informe en la prensa.",
                "Terminar el análisis de pigmentos antes del viernes.",
                "Confirmar la autoría de Zurbarán.",
              ],
              answer: 1,
              why: "«Prometió que para el viernes habría terminado el análisis.»",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en la fuente y en el valor de cada forma. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-04-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la conversación con lo que expresa.",
          pairs: [
            { left: "un copista no habría dudado así", right: "resultado irreal" },
            { left: "ya le habrían quitado unos diez centímetros", right: "conjetura sobre un pasado anterior" },
            { left: "a juzgar por la tela, se ve que es sevillana", right: "deducción a partir de una pista propia" },
            { left: "por lo visto, durante la guerra las monjas lo enrollaron", right: "información oída a otros" },
            { left: "habría preferido que no se filtrara nada", right: "queja atenuada" },
            { left: "prometió que para el viernes habría terminado", right: "futuro del pasado en estilo indirecto" },
          ],
          why: "La misma forma, «habría + participio», cambia de valor según el contexto.",
        },
      },
    ],
  },
  reading: {
    title: "Una santa sin firma en la clausura",
    genre: "Artículo de prensa cultural",
    frame: "Artículo publicado en la sección de cultura de un diario de Sevilla. El convento, el lienzo, los especialistas y los documentos son ficticios.",
    text: [
      "Durante casi un siglo, el lienzo colgó en un pasillo oscuro del convento, entre un reloj parado y un armario de ornamentos. Las religiosas lo llamaban «la santa de las palmas» y, que se sepa, nadie había pedido nunca fotografiarlo. Hoy está tumbado sobre una mesa del taller de restauración de la diócesis, y alrededor de él se ha formado un pequeño revuelo que conviene ordenar antes de que se convierta en leyenda.",
      "Empecemos por lo comprobado. El cuadro mide un metro noventa de alto por uno cuarenta de ancho, representa a santa Justa con dos palmas y la Giralda al fondo, y no tiene firma visible. La radiografía, realizada en septiembre, muestra que el brazo derecho de la santa estuvo primero levantado y que el pintor lo bajó después. Ese arrepentimiento es importante: un copista no habría tenido motivos para cambiar el gesto, de modo que el autor tuvo que inventar la composición.",
      "A partir de ahí entramos en el terreno de lo probable. A juzgar por el tejido y por la preparación, la restauradora Macarena Ruiz sitúa el lienzo en Sevilla hacia 1650. Los bordes presentan cortes limpios, y todo indica que, cuando lo montaron en el bastidor actual, alguien ya le habría recortado unos diez centímetros por cada lado. Es poco probable que el recorte fuera accidental; lo más probable es que se hiciera para adaptarlo a un espacio concreto del convento.",
      "Más incierto es el capítulo de las historias orales. Al parecer, durante la guerra las monjas lo enrollaron y lo escondieron en el coro. Las religiosas mayores aseguran que antes estaba en la sacristía. Ninguna de las dos afirmaciones aparece en documentos, aunque las marcas de pliegue que se ven en la tela no las contradicen. Parece mentira que una pieza de esta calidad haya pasado tanto tiempo sin que nadie la estudiara, pero los conventos de clausura guardan muchos secretos de este tipo.",
      "Y luego está el rumor. Desde la semana pasada circula la versión de que el lienzo sería un Zurbarán perdido y de que habría sido enviado a Nueva España a finales del siglo XVII. El historiador mexicano Julián Herrera, que colabora en el estudio, matiza ambas cosas. Es cierto que un inventario de Puebla de 1702 menciona una «Santa Justa con palmas» enviada desde Sevilla que no llegó a su destino, y el tamaño original del cuadro coincidiría con el descrito. Pero Herrera se inclina por un pintor del círculo de Zurbarán, no por el maestro, y advierte que, a falta de documentos, cualquier identificación con la obra del inventario es una hipótesis.",
      "Los especialistas habrían preferido que nada de esto se publicara antes del informe técnico, y tienen razón en pedir prudencia. El laboratorio se comprometió a que para el viernes habría concluido el análisis de pigmentos. Si el azul del manto resulta ser un pigmento caro y escaso, la datación será más precisa y la hipótesis del encargo importante ganará peso. Hasta entonces, lo honesto es decir lo que se sabe: un lienzo sevillano de calidad, con un arrepentimiento revelador y una historia que todavía no se puede contar entera.",
    ],
    glossary: [
      { es: "bastidor", note: "armazón de madera sobre el que se tensa el lienzo" },
      { es: "clausura", note: "parte de un convento donde no pueden entrar personas ajenas" },
      { es: "Nueva España", note: "nombre del virreinato que comprendía, entre otros territorios, el actual México" },
    ],
    tasks: [
      {
        id: "c1-04-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el artículo.",
        items: [
          {
            q: "¿Qué dato presenta el artículo como comprobado?",
            options: [
              "Que el lienzo estuvo escondido en el coro durante la guerra.",
              "Que la radiografía muestra un cambio en el brazo de la santa.",
              "Que el cuadro es el que menciona el inventario de Puebla.",
            ],
            answer: 1,
            why: "Es el único dato del que hay una prueba técnica.",
          },
          {
            q: "¿Qué postura tiene Julián Herrera sobre la autoría?",
            options: [
              "Prefiere atribuirlo a un pintor del círculo de Zurbarán, sin afirmarlo.",
              "Está convencido de que es un Zurbarán perdido.",
              "Cree que es una copia del siglo XIX.",
            ],
            answer: 0,
            why: "«Se inclina por un pintor del círculo de Zurbarán, no por el maestro.»",
          },
          {
            q: "¿Qué espera el periodista del análisis de pigmentos?",
            options: [
              "Que confirme el viaje a Nueva España.",
              "Que descubra una firma bajo el manto.",
              "Que precise la fecha y refuerce la hipótesis de un encargo importante.",
            ],
            answer: 2,
            why: "Lo explica el último párrafo.",
          },
        ],
      },
      {
        id: "c1-04-lectura-fuente",
        type: "classify",
        prompt: "Clasifica cada afirmación del artículo según su fuente.",
        categories: ["Comprobado con una prueba", "Deducido por los especialistas", "Contado por otros o rumor"],
        items: [
          { text: "El brazo de la santa estuvo primero levantado.", cat: 0, why: "Lo muestra la radiografía." },
          { text: "El lienzo es sevillano y de hacia 1650.", cat: 1, why: "Deducción a partir de la tela y la preparación." },
          { text: "Las monjas lo escondieron en el coro durante la guerra.", cat: 2, why: "«Al parecer»: historia oral." },
          { text: "Sería un Zurbarán perdido.", cat: 2, why: "Condicional periodístico: rumor." },
          { text: "Alguien lo recortó antes de montarlo en el bastidor actual.", cat: 1, why: "Conjetura basada en los cortes de los bordes." },
          { text: "No tiene firma visible.", cat: 0, why: "Se comprueba a simple vista." },
        ],
      },
      {
        id: "c1-04-lectura-evaluacion",
        type: "open",
        prompt: "Valora una decisión del periodista.",
        items: [
          {
            prompt: "El artículo usa el condicional periodístico («sería un Zurbarán perdido», «habría sido enviado») solo para el rumor. Explica en 70–90 palabras por qué lo hace y si te parece una buena práctica o preferirías otra fórmula.",
            model: "El periodista reserva el condicional para el rumor porque así marca que no se responsabiliza de él: lo transmite sin afirmarlo, mientras que los datos comprobados van sin marcas y las deducciones llevan «a juzgar por» o «lo más probable es que». Me parece una buena práctica dentro del texto, pero preferiría que nombrara también quién difundió el rumor. Una fórmula como «según fuentes del obispado» sería más transparente para el lector.",
            checklist: [
              "Explico la función del condicional de rumor.",
              "Relaciono cada tipo de información con su marcador en el texto.",
              "Tomo posición y propongo una alternativa.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el artículo ordena la información por grado de certeza y por fuente.",
      items: [
        { quote: "un copista no habría tenido motivos para cambiar el gesto, de modo que el autor tuvo que inventar la composición", note: "Resultado irreal con «habría» y deducción firme con «tuvo que»." },
        { quote: "alguien ya le habría recortado unos diez centímetros por cada lado", note: "Conjetura sobre un pasado anterior a otro pasado." },
        { quote: "Es poco probable que el recorte fuera accidental; lo más probable es que se hiciera para adaptarlo", note: "Dos peldaños de la escala, ambos con subjuntivo." },
        { quote: "Al parecer, durante la guerra las monjas lo enrollaron y lo escondieron en el coro.", note: "Marcador de información ajena." },
        { quote: "circula la versión de que el lienzo sería un Zurbarán perdido", note: "Condicional periodístico de rumor." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el destinatario, relación de formas y escritura guiada.",
    exercises: [
      {
        id: "c1-04-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases del informe.",
        items: [
          {
            words: ["A", "juzgar", "por", "los", "pliegues,", "lo", "tuvieron", "enrollado", "años."],
            why: "Deducción a partir de una pista propia.",
          },
          {
            words: ["Cuando", "llegó", "al", "convento,", "ya", "lo", "habrían", "recortado."],
            why: "Conjetura sobre un pasado anterior: condicional compuesto.",
          },
          {
            words: ["Es", "poco", "probable", "que", "el", "pintor", "lo", "firmara."],
            why: "Probabilidad baja con subjuntivo.",
          },
        ],
      },
      {
        id: "c1-04-destinatario",
        type: "context",
        prompt: "Elige la frase más adecuada para el destinatario indicado.",
        items: [
          {
            context: "Escribes la ficha técnica del museo. Tienes la medición y la radiografía, pero no documentos sobre el autor.",
            q: "¿Qué frase pones?",
            options: [
              "Autor: Zurbarán, sin duda alguna.",
              "Autor: círculo de Zurbarán (atribución). Hacia 1650.",
              "Autor: dicen que Zurbarán.",
            ],
            answer: 1,
            why: "La ficha técnica señala la atribución como tal y la fecha aproximada.",
          },
          {
            context: "Un amigo te pregunta en un bar quién pintó el cuadro.",
            q: "¿Qué respuesta refleja bien lo que sabes?",
            options: [
              "Pues lo pintaría alguien del círculo de Zurbarán, pero no se sabe seguro.",
              "Lo pintó Zurbarán, ya lo dijo el periódico.",
              "Es imposible saberlo, no vale la pena discutirlo.",
            ],
            answer: 0,
            why: "Conjetura con condicional y límite explícito de lo que se sabe.",
          },
          {
            context: "Escribes un titular prudente para un diario serio.",
            q: "¿Qué titular eliges?",
            options: [
              "¡Aparece el Zurbarán perdido de México!",
              "Un lienzo del convento sería un Zurbarán robado.",
              "Un lienzo sevillano del XVII, en estudio: los expertos piden prudencia sobre su autoría.",
            ],
            answer: 2,
            why: "Informa de lo comprobado y deja la autoría abierta.",
          },
        ],
      },
      {
        id: "c1-04-equivalencias",
        type: "match",
        prompt: "Relaciona cada conjetura con su equivalente.",
        pairs: [
          { left: "Estará en la sacristía.", right: "Probablemente está en la sacristía." },
          { left: "Habrá estado en la sacristía.", right: "Probablemente ha estado en la sacristía." },
          { left: "Estaría en la sacristía.", right: "Probablemente estaba en la sacristía." },
          { left: "Habría estado en la sacristía.", right: "Probablemente había estado en la sacristía." },
        ],
      },
      {
        id: "c1-04-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Piensa en un objeto antiguo de tu familia o de tu casa cuyo origen no conoces bien. Escribe 60–80 palabras con tres frases: una que afirmes, una que deduzcas a partir de una pista y una que te hayan contado. Añade una conjetura sobre el pasado.",
            model: "En casa de mis padres hay un reloj de pared que funciona perfectamente. A juzgar por la madera y por los números, tiene que ser de principios del siglo XX. Por lo visto, mi bisabuelo lo compró en una subasta de Valparaíso, aunque nadie conserva el recibo. Cuando llegó a la familia, ya habría tenido otros dueños, porque tiene iniciales grabadas que no son nuestras.",
            checklist: [
              "Hay una afirmación sin marcas, una deducción y una información ajena.",
              "La conjetura sobre el pasado usa el tiempo adecuado al punto de referencia.",
              "Uso al menos un marcador de cada tipo.",
            ],
          },
          {
            prompt: "Un periodista ha escrito: «El reloj del ayuntamiento lo trajo Napoleón». Escríbele un mensaje de 40–60 palabras que corrija la afirmación con tacto y gradúe lo que se sabe.",
            model: "Gracias por el artículo. Solo un matiz: que sepamos, no hay ningún documento que relacione el reloj con Napoleón. Al parecer, la historia circula desde el siglo XIX, pero lo más probable es que el reloj llegara después de la guerra. Habríamos preferido que se presentara como una leyenda local.",
            checklist: [
              "Uso «que sepamos» o «hasta donde sabemos».",
              "Distingo la leyenda de lo probable.",
              "La queja aparece atenuada.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta un informe (230–320 palabras) sobre un objeto, un edificio o un suceso del pasado cuyo origen no está del todo claro (un cuadro, una casa familiar, una tradición local). Separa lo que está comprobado, lo que se deduce de los indicios y lo que se cuenta, y formula al menos dos conjeturas sobre el pasado.",
    context: "El informe lo leerá una comisión que debe decidir si financia un estudio más completo. Necesita saber qué es seguro, qué es probable y qué es solo un relato, sin exageraciones ni falsa modestia.",
    steps: [
      "Haz tres listas con tus datos: comprobado, deducido y contado. Escribe al lado de cada dato el marcador que usarás.",
      "Elige el punto de referencia de cada conjetura (ahora o un momento pasado) para decidir entre «habrá» y «habría».",
      "Redacta al menos tres párrafos, uno por grado de certeza, y termina con una recomendación.",
      "Revisa el informe con la lista de control: corrige los marcadores que no coincidan con la fuente y comprueba el modo de cada uno.",
    ],
    useLanguage: [
      "a juzgar por, se ve que, tiene que + infinitivo",
      "al parecer, por lo visto, según parece",
      "lo más probable es que, es poco probable que + subjuntivo",
      "habría + participio (conjetura sobre un pasado anterior)",
      "que sepamos, hasta donde sabemos, a falta de",
      "Habríamos preferido que…",
    ],
    model: [
      "Este informe resume lo que sabemos de la casa de la calle Feria número 18, que la asociación vecinal quiere proponer para su catalogación. La fachada conserva un azulejo con la fecha de 1784 y el escudo de un gremio de tejedores. El registro de la propiedad documenta que el edificio pertenecía al gremio en 1820 y que pasó a manos privadas en 1868, tras la venta de los bienes del gremio.",
      "A partir de estos datos podemos deducir algunas cosas. A juzgar por la distribución del patio y por los huecos tapiados de la planta baja, el edificio tuvo que albergar talleres antes de convertirse en vivienda. Lo más probable es que los telares ocuparan la crujía del fondo, donde la luz es mejor. Cuando se vendió, en 1868, ya habrían desaparecido los talleres, porque el inventario de la venta no menciona ninguna herramienta. Difícilmente los notarios habrían olvidado incluir unos telares.",
      "Hay además una historia oral que conviene tratar con cautela. Por lo visto, los vecinos más antiguos recuerdan que en el sótano había un pozo comunicado con el río. No hemos encontrado ningún documento que lo confirme y, que sepamos, nadie ha bajado al sótano desde las obras de 1975. Es poco probable que el pozo llegara al río, pero no lo descartamos. A falta de una inspección técnica, recomendamos financiar un estudio arqueológico del sótano y del patio antes de cualquier obra.",
    ],
    checklist: [
      "Cada dato tiene el marcador que corresponde a su fuente: afirmación, deducción o información ajena.",
      "Los marcadores de probabilidad llevan el modo que exigen.",
      "Las conjeturas sobre el pasado usan «habría» con un punto de referencia pasado y «habrá» con uno presente.",
      "No uso el condicional de rumor para datos comprobados.",
      "El texto tiene al menos tres párrafos y una recomendación final.",
    ],
    words: [230, 320],
  },
  speaking: {
    intro: "Prepárate con notas breves, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Hipótesis ante una comisión",
        prompt: "Presenta durante cuatro minutos tu hipótesis sobre el origen de un objeto, un edificio o un suceso del pasado (puede ser el lienzo de esta semana o tu informe). Explica qué está comprobado, qué deduces y qué te han contado, y termina con lo que haría falta para confirmarlo.",
        prep: [
          "Ordena tus datos de más seguro a menos seguro.",
          "Prepara dos conjeturas con «habría + participio» y una con «habrá + participio».",
          "Anota una frase de cierre con «a falta de…».",
        ],
        seconds: 240,
        model: "Empiezo por lo que sabemos con seguridad: el lienzo no tiene firma y la radiografía muestra un cambio en el brazo. De ahí deducimos que no es una copia. A juzgar por la tela, tiene que ser sevillano y de hacia 1650. Por lo visto, estuvo escondido en la guerra, pero eso no lo hemos podido confirmar. Cuando lo montaron en el bastidor actual, ya lo habrían recortado. A falta del análisis de pigmentos, no podemos ir más lejos.",
        selfCheck: [
          "Marco con claridad el paso de lo comprobado a lo deducido y a lo contado.",
          "Pronuncio el hiato de «habría» y distingo «habrá».",
          "No presento ninguna conjetura como un hecho.",
        ],
      },
      {
        title: "Frenar un titular",
        prompt: "Un periodista te llama y quiere titular: «Confirmado: el cuadro es un Zurbarán robado». Respóndele: pregúntale de dónde ha sacado la información, explícale qué se sabe y qué no, reconoce lo que es noticia y propón un titular alternativo.",
        prep: [
          "Prepara dos preguntas sobre su fuente.",
          "Ten a mano «que sepamos», «es poco probable que» y «habríamos preferido que».",
        ],
        seconds: 150,
        model: "Perdone, ¿quién le ha confirmado eso? ¿Ha visto algún documento? Que sepamos, no hay ninguna prueba de que sea un Zurbarán, y es poco probable que fuera robado. Lo que sí es noticia es el arrepentimiento que muestra la radiografía. Habríamos preferido esperar al informe, pero, si quiere publicar algo, ¿qué le parece «Un lienzo sevillano del XVII revela sus secretos»?",
        selfCheck: [
          "Hago al menos dos preguntas sobre la fuente.",
          "Separo lo comprobado de lo especulativo.",
          "Propongo una alternativa concreta.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tus tres listas (comprobado, deducido, contado) y una frase en la que hayas dudado entre «habrá» y «habría».",
    cards: [
      {
        move: "Deduce",
        task: "Tu profesor te muestra una foto u objeto sin contexto. Deduce de dónde viene y qué le habría pasado, graduando tu certeza.",
        phrases: ["A juzgar por…, tiene que…", "Antes de llegar aquí, ya habría…"],
      },
      {
        move: "Matiza",
        task: "Tu profesor afirma con rotundidad algo dudoso; matízalo indicando el límite de lo que se sabe.",
        phrases: ["Que yo sepa…", "Eso es ir demasiado lejos…"],
      },
      {
        move: "Distingue",
        task: "Lee cinco frases con «habría + participio» y explica a tu profesor qué valor tiene cada una.",
        phrases: ["Aquí es una conjetura porque…", "Aquí no ocurrió: es irreal."],
      },
      {
        move: "Pregunta",
        task: "Pregúntale por el uso de «dizque», «supuestamente» o «presuntamente» en su variedad y en la prensa.",
        phrases: ["¿Se usa «dizque» en tu país?", "¿Cuándo dirías «presuntamente»?"],
      },
    ],
    bring: "Tus tres listas, el informe revisado y, si quieres, la grabación de tu presentación.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "Has comprobado en el registro que la casa se vendió en 1868. ¿Qué frase es la más firme?",
        options: [
          "Seguramente la casa se vendió en 1868.",
          "Al parecer, la casa se vendió en 1868.",
          "La casa se vendió en 1868.",
        ],
        answer: 2,
        why: "Con un dato comprobado, la afirmación sin marcas es la más fuerte.",
      },
      {
        type: "choice",
        q: "«Cuando llegamos al museo, ya habrían cerrado la sala.» ¿Qué significa?",
        options: [
          "Que probablemente ya habían cerrado la sala.",
          "Que la sala no se cerró.",
          "Que la sala se cerrará más tarde.",
        ],
        answer: 0,
        why: "Conjetura sobre un pasado anterior a otro pasado.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿De dónde procede la información de la hablante?",
        options: [
          "Lo ha comprobado ella misma.",
          "Se lo han contado otras personas.",
          "Lo deduce de una pista que tiene delante.",
        ],
        answer: 1,
        why: "«Según parece» presenta información ajena.",
        audio: "Según parece, el retablo estuvo años guardado en un almacén del puerto.",
        voice: "es-ES-f",
      },
      {
        type: "gap",
        q: "No veo el coche de la directora: ___ (salir) ya. [probablemente ha salido]",
        answers: [["habrá salido"]],
        hint: "Conjetura sobre un pasado con referencia en el presente: futuro compuesto.",
        why: "Ha salido → habrá salido.",
      },
      {
        type: "gap",
        q: "Es poco probable que el retablo ___ (ser) anterior al terremoto de 1755.",
        answers: [["sea", "fuera", "fuese"]],
        hint: "Probabilidad baja: «es poco probable que» exige subjuntivo.",
        why: "Presente o imperfecto de subjuntivo según la perspectiva.",
      },
      {
        type: "error",
        sentence: "Si la abadesa habría guardado las cartas, sabríamos quién encargó el cuadro.",
        answers: ["Si la abadesa hubiera guardado las cartas, sabríamos quién encargó el cuadro.", "Si la abadesa hubiese guardado las cartas, sabríamos quién encargó el cuadro."],
        why: "Detrás de «si» condicional va «hubiera», nunca «habría».",
      },
      {
        type: "error",
        sentence: "Que yo sé, nadie ha estudiado este azulejo.",
        answers: ["Que yo sepa, nadie ha estudiado este azulejo."],
        why: "«Que yo sepa» va siempre con subjuntivo.",
      },
      {
        type: "order",
        words: ["El", "barniz", "debe", "de", "tener", "más", "de", "un", "siglo."],
        why: "«Deber de» + infinitivo para la deducción.",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras los valores de «habría + participio» en estas frases: «Para el lunes habría terminado, dijo», «Lo habría terminado, pero se fue la luz» y «Cuando llegué, ya lo habría terminado». Explica cómo los distingues.",
        model: "En la primera es un futuro del pasado: cuento lo que alguien preveía en un momento pasado; no sé si se cumplió. En la segunda es un resultado irreal: el «pero» explica que no lo terminó. En la tercera es una conjetura: probablemente ya lo había terminado cuando llegué. Los distingo por el contexto: un verbo de lengua, un obstáculo que impide el resultado o un punto de referencia pasado con «ya».",
        checklist: [
          "Identifico los tres valores correctamente.",
          "Explico la pista de contexto de cada uno.",
          "Doy una paráfrasis para la conjetura.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Gradúo la certeza de una afirmación con los marcadores y el modo que exige cada peldaño.",
      "Señalo la fuente de la información: lo veo, lo deduzco o me lo han contado.",
      "Formulo conjeturas sobre el presente y el pasado y elijo entre «habrá» y «habría» según el punto de referencia.",
      "Distingo por el contexto los valores del condicional compuesto.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Conjetura y su equivalente» y reconstrúyela con el verbo «salir».",
      "Dentro de una semana, busca en un periódico real un condicional de rumor y reescríbelo nombrando la fuente.",
      "En la próxima clase, presenta tu informe y pide a tu profesor que señale un marcador que no corresponda a la fuente.",
    ],
  },
  related: [
    { path: "/gramatica/modalidad-epistemica-evidencialidad-y-grados-de", label: "Clase: Modalidad epistémica: evidencialidad y grados de certeza" },
    { path: "/gramatica/probabilidad-retrospectiva-y-condicional-compuesto", label: "Clase: Probabilidad retrospectiva y condicional compuesto" },
  ],
};
