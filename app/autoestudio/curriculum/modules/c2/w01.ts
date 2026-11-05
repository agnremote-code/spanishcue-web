import type { Module } from "../../types";

/**
 * C2 · semana 1 · Autoestudio espejo de G205 (futuro perfecto de subjuntivo) y
 * G206 (reformulación moderna de tiempos históricos). Repaso autónomo con
 * documentos ficticios de una sociedad de socorros mutuos de Zaragoza.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w01: Module = {
  id: "c2-01",
  level: "c2",
  week: 1,
  kind: "core",
  title: "Papeles del arcón: leer lo antiguo, decirlo hoy",
  subtitle: "Repaso de «hubiere + participio» y de cómo se modernizan las formas verbales históricas",
  stop: {
    place: "Zaragoza",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g205",
    "c2.gram.g206",
    "c2.voc.w01-archivo-legado",
    "c2.pron.w01-acento-re-ra",
    "c2.lis.w01-revision-versiones",
    "c2.read.w01-catalogo-documentos",
    "c2.wri.w01-nota-editorial",
    "c2.spk.w01-visita-guiada",
    "c2.fun.w01-glosar-documento",
    "c2.disc.w01-transcripcion-version",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo interpretar «hubiere + participio» y otras formas verbales históricas en documentos antiguos y reformularlas con fidelidad en el español actual de España y América.",
    steps: [
      "Repasa en la teoría el valor de «hubiere + participio» y la tabla de equivalencias actuales según la palabra que introduce cada forma.",
      "Practica la reformulación con fragmentos de reglamentos, contratos, crónicas y testamentos.",
      "Escucha a Irene y a Matías revisar las versiones modernas y lee el texto del catálogo de la exposición.",
      "Redacta la nota editorial, revísala con la lista de control y explica tus decisiones en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste estas formas con tu profesor. Aquí las repasas de otra manera: con documentos nuevos de una familia de Zaragoza, tablas de equivalencias y los errores que más se repiten cuando alguien moderniza un texto sin analizarlo. Recuerda que el objetivo es receptivo: reconocer, interpretar y reformular, no escribir hoy con formas en -re.",
    parts: [
      {
        heading: "«Hubiere + participio»: una condición que debe estar cumplida antes",
        body: [
          "El futuro perfecto de subjuntivo combina dos ideas. Por ser subjuntivo, presenta una situación eventual: puede darse o no, y el texto no afirma que se haya dado. Por ser compuesto, exige que esa situación esté terminada antes de la consecuencia que se anuncia, casi siempre en futuro o con valor de mandato. Lo encontrarás detrás de «quien», «el que», «cuando» o «si» en reglamentos, contratos, testamentos y leyes antiguas.",
          "Para leerlo bien, hazte siempre dos preguntas: ¿qué tiene que haber ocurrido primero? y ¿qué consecuencia depende de ello? En «el socio que hubiere satisfecho doce cuotas tendrá derecho a médico», primero se pagan las cuotas y solo después nace el derecho. Si alguien no las paga, la norma simplemente no se le aplica.",
          "El auxiliar concuerda con el sujeto y el participio no cambia nunca: «cuando los socios hubieren aprobado las cuentas». Los participios irregulares se mantienen: hubiere escrito, hubiere abierto, hubiere roto.",
        ],
        table: {
          caption: "Futuro perfecto de subjuntivo de «cumplir» (solo para reconocerlo)",
          head: ["Persona", "Forma histórica", "Equivalente actual tras relativo o «cuando»"],
          rows: [
            ["yo", "hubiere cumplido", "haya cumplido"],
            ["tú", "hubieres cumplido", "hayas cumplido"],
            ["él / ella / usted", "hubiere cumplido", "haya cumplido"],
            ["nosotros / nosotras", "hubiéremos cumplido", "hayamos cumplido"],
            ["vosotros / vosotras", "hubiereis cumplido", "hayáis cumplido"],
            ["ellos / ellas / ustedes", "hubieren cumplido", "hayan cumplido"],
          ],
        },
        examples: [
          { es: "El aprendiz que hubiere servido cuatro años en el taller recibirá carta de oficial.", note: "Primero los cuatro años; después la carta. Hoy: «que haya servido»." },
          { es: "Cuando la junta hubiere examinado las solicitudes, publicará la lista de admitidos.", note: "El examen termina antes de la publicación. Hoy: «cuando haya examinado»." },
          { es: "Si el inquilino no hubiere desalojado la casa en la fecha fijada, abonará una multa.", note: "Detrás de «si», hoy decimos «si no ha desalojado»." },
        ],
        tip: "Si dudas, tapa la forma histórica y pregúntate qué orden de hechos exige la frase. La forma actual tiene que conservar ese orden.",
      },
      {
        heading: "Cuatro formas que se parecen y no dicen lo mismo",
        body: [
          "La mayor trampa de «hubiere» es su parecido con otras formas compuestas de «haber». Cada una sitúa la acción de otra manera, y una paráfrasis que las mezcla cambia el contenido del documento aunque suene natural.",
          "«Habrá pagado» es indicativo: prevé algo terminado antes de un punto futuro o hace una conjetura. «Habría pagado» imagina un resultado alternativo. «Hubiera pagado» suele remitir a una condición pasada que no se cumplió. Solo «haya pagado», y tras «si» el pretérito perfecto «ha pagado», mantiene a la vez la eventualidad y la anterioridad de «hubiere pagado».",
        ],
        table: {
          caption: "El mismo verbo, cinco lecturas",
          head: ["Forma", "Qué hace", "Ejemplo"],
          rows: [
            ["hubiere pagado", "condición eventual, cumplida antes (histórico)", "El vecino que hubiere pagado la derrama podrá votar."],
            ["haya pagado", "lo mismo en español actual", "El vecino que haya pagado la derrama podrá votar."],
            ["habrá pagado", "previsión o conjetura (indicativo)", "A estas horas ya habrá pagado la derrama."],
            ["habría pagado", "resultado alternativo o irreal", "Con otro presidente, habría pagado la derrama."],
            ["hubiera pagado", "condición pasada no cumplida", "Si hubiera pagado la derrama, habría podido votar."],
          ],
        },
        mistakes: [
          {
            wrong: "«El vecino que hubiere pagado» = «el vecino que habrá pagado».",
            right: "«El vecino que hubiere pagado» = «el vecino que haya pagado».",
            why: "«Habrá pagado» es una previsión o una conjetura en indicativo; la fuente define una condición que puede cumplirse o no.",
          },
          {
            wrong: "«Si el vecino hubiere pagado» = «si el vecino hubiera pagado».",
            right: "«Si el vecino hubiere pagado» = «si el vecino ha pagado».",
            why: "«Hubiera pagado» se lee como algo que no ocurrió; «hubiere pagado» contempla algo que todavía puede ocurrir.",
          },
          {
            wrong: "Cuando hubieren firmados los testigos, se cerrará el acta.",
            right: "Cuando hubieren firmado los testigos, se cerrará el acta.",
            why: "En los tiempos compuestos el participio es invariable, aunque el sujeto esté en plural.",
          },
        ],
      },
      {
        heading: "Modernizar según la función, no según la terminación",
        body: [
          "Una forma histórica no tiene un único equivalente: depende de la palabra que la introduce y de lo que el texto hace con ella. Por eso conviene identificar primero la función (condición eventual, anterioridad inmediata, pasado narrado, mandato) y solo después elegir la forma actual.",
          "Las formas en -re detrás de un relativo o de «cuando» pasan a presente de subjuntivo; detrás de «si» condicional pasan a presente de indicativo, porque el español actual no admite «si + presente de subjuntivo». El pretérito anterior («hubo llegado») se convierte en indefinido con un conector de inmediatez. La forma en -ra que narra un hecho pasado, frecuente en novelas antiguas y aún en la prensa, equivale a un pluscuamperfecto o a un indefinido de indicativo. Los pronombres pegados al verbo conjugado («díjole») van hoy delante y separados.",
        ],
        table: {
          caption: "Del original a la versión actual",
          head: ["Original", "Qué la introduce o qué hace", "Versión actual"],
          rows: [
            ["el que cazare sin permiso", "relativo + -re", "el que cace sin permiso"],
            ["si alguno se opusiere", "«si» condicional + -re", "si alguien se opone"],
            ["cuando hubiere cerrado la feria", "«cuando» + compuesto", "cuando haya cerrado la feria"],
            ["si no hubiere renovado el carné", "«si» + compuesto", "si no ha renovado el carné"],
            ["luego que hubo amanecido", "anterioridad inmediata en el pasado", "en cuanto amaneció"],
            ["el puente que construyera su abuelo", "-ra que narra un pasado", "el puente que había construido / construyó su abuelo"],
            ["despidiose de todos", "pronombre tras verbo conjugado", "se despidió de todos"],
          ],
        },
        mistakes: [
          {
            wrong: "Si alguien se oponga, la propuesta volverá a la comisión.",
            right: "Si alguien se opone, la propuesta volverá a la comisión.",
            why: "Original: «si alguno se opusiere». Detrás de «si» condicional el español actual usa presente de indicativo.",
          },
          {
            wrong: "El puente que construiría su abuelo sigue en pie.",
            right: "El puente que había construido su abuelo sigue en pie.",
            why: "Original: «que construyera». Es un pasado de indicativo; el condicional lo convierte en un futuro visto desde el pasado.",
          },
        ],
        tip: "La tilde es una pista visual: «-re» no la lleva y «-rá» sí. Una forma como «presentare» nunca es un futuro de indicativo con la tilde olvidada.",
      },
      {
        heading: "Tratamientos, fórmulas vivas y alcance de una versión",
        body: [
          "Los textos antiguos usan con frecuencia «vosotros» y «os» para dirigirse a un grupo. Si la versión actual es para España, puedes mantener el «vosotros» de confianza; si es para lectores de América, o para ambos públicos, «ustedes» es la opción común, y una nota puede indicar la alternativa peninsular.",
          "No todo lo antiguo es un fósil. Algunas fórmulas siguen vivas en registros formales o literarios y conviene conservarlas: «sea cual fuere», «véase el anexo», «érase una vez». Sustituirlas suele quitar tono sin ganar claridad.",
          "Por último, una buena versión moderna no amplía el alcance del original. Interpretar un reglamento de 1911 no demuestra que siga vigente, y explicar un testamento antiguo no es asesorar sobre herencias. Una línea de contexto que sitúe el documento en su época evita esas lecturas.",
        ],
        examples: [
          { es: "Original: «Si no acudiereis a la asamblea, perderéis el turno». Versión común: «Si no acuden a la asamblea, perderán el turno».", note: "Para España también vale «si no acudís»." },
          { es: "«Sea cual fuere la decisión de la junta, se comunicará por escrito.»", note: "Fórmula viva en registro formal: se conserva." },
          { es: "«Estas normas regían la sociedad en 1911 y no se aplican a ninguna entidad actual.»", note: "Línea de contexto que delimita el alcance." },
        ],
        mistakes: [
          {
            wrong: "Panel: «Según el reglamento, los socios deben pagar doce cuotas para tener médico».",
            right: "Panel: «Según el reglamento de 1911, los socios debían pagar doce cuotas para tener médico».",
            why: "El documento es histórico: la versión no puede presentarlo como una norma vigente.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero interpreta, luego reformula. Lee siempre la palabra que introduce la forma antes de decidir.",
    exercises: [
      {
        id: "c2-01-gramatica-valor",
        type: "context",
        prompt: "Lee el fragmento histórico y elige la paráfrasis que conserva su valor.",
        items: [
          {
            context: "Reglamento de una coral, 1908: «El cantor que hubiere faltado a cuatro ensayos no podrá actuar en el concierto de Pascua».",
            q: "¿Qué paráfrasis es fiel al reglamento?",
            options: [
              "El cantor que habrá faltado a cuatro ensayos no podrá actuar en el concierto de Pascua.",
              "El cantor que haya faltado a cuatro ensayos no podrá actuar en el concierto de Pascua.",
              "El cantor que hubiera faltado a cuatro ensayos no habría podido actuar en el concierto de Pascua.",
            ],
            answer: 1,
            why: "Relativo eventual + acción anterior: «que haya faltado». «Habrá faltado» sería una conjetura y «hubiera faltado… habría podido» un pasado irreal.",
          },
          {
            context: "Bases de un certamen de poesía, 1922: «Si el jurado no hubiere fallado antes del 1 de mayo, se prorrogará el plazo».",
            q: "¿Cómo se dice hoy?",
            options: [
              "Si el jurado no haya fallado antes del 1 de mayo, se prorrogará el plazo.",
              "Si el jurado no habría fallado antes del 1 de mayo, se prorrogará el plazo.",
              "Si el jurado no ha fallado antes del 1 de mayo, se prorrogará el plazo.",
            ],
            answer: 2,
            why: "Detrás de «si», la forma compuesta pasa a pretérito perfecto de indicativo: «si no ha fallado».",
          },
          {
            context: "Aviso de una parroquia, 1930: «Quien hubiere hallado el estandarte extraviado lo entregará en la sacristía».",
            q: "¿Qué afirma el aviso?",
            options: [
              "Que, si alguien encuentra el estandarte, debe entregarlo después de encontrarlo.",
              "Que alguien ya encontró el estandarte y no lo ha devuelto.",
              "Que nadie llegó a encontrar el estandarte.",
            ],
            answer: 0,
            why: "La forma no afirma que el hallazgo haya ocurrido: define una situación eventual y su consecuencia.",
          },
          {
            context: "Contrato de aprendizaje, 1899: «Cuando el aprendiz hubiere completado tres años, se le pagará jornal de oficial».",
            q: "¿Qué versión conserva el orden de los hechos?",
            options: [
              "Mientras el aprendiz esté completando tres años, cobrará jornal de oficial.",
              "Cuando el aprendiz haya completado tres años, cobrará jornal de oficial.",
              "Cuando el aprendiz habrá completado tres años, cobrará jornal de oficial.",
            ],
            answer: 1,
            why: "La fuente exige anterioridad completada; «mientras esté completando» la convierte en simultaneidad y «cuando habrá» no es gramatical aquí.",
          },
        ],
      },
      {
        id: "c2-01-gramatica-reformular",
        type: "gap",
        prompt: "Escribe la forma actual. Entre corchetes tienes la forma del original histórico; fíjate en la palabra que la introduce.",
        items: [
          { q: "El vecino que ___ ruido después de medianoche será amonestado. [hiciere]", answers: [["haga"]], why: "Relativo con valor eventual: presente de subjuntivo." },
          { q: "Si el arrendatario no ___ la renta, el contrato quedará rescindido. [pagare]", answers: [["paga"]], why: "Detrás de «si» condicional: presente de indicativo." },
          { q: "Cuando la comisión ___ las cuentas, se convocará la asamblea. [hubiere revisado]", answers: [["haya revisado"]], why: "«Cuando» con valor futuro + anterioridad: «haya» + participio." },
          { q: "Si algún afiliado no ___ el formulario, no podrá votar. [hubiere entregado]", answers: [["ha entregado"]], why: "Detrás de «si», la forma compuesta pasa a pretérito perfecto de indicativo." },
          { q: "En cuanto ___ el tren, los viajeros bajaron al andén. [hubo parado]", answers: [["paró", "se detuvo"]], why: "Pretérito anterior → indefinido; «en cuanto» conserva la inmediatez." },
          { q: "El escultor, que ___ su taller en 1890, murió en la pobreza. [abriera]", answers: [["había abierto", "abrió"]], why: "La forma en -ra narra un pasado: pluscuamperfecto o indefinido de indicativo." },
          { q: "___ pensativo el notario al leer la carta. [Quedose]", answers: [["Se quedó", "se quedó"]], why: "Con verbo conjugado en indicativo, el pronombre va hoy delante y separado." },
        ],
      },
      {
        id: "c2-01-gramatica-funcion",
        type: "classify",
        prompt: "¿Se moderniza o se conserva? Clasifica cada expresión pensando en una versión para lectores actuales.",
        categories: ["Se moderniza: forma histórica que hoy se cambia", "Se conserva: fórmula o uso todavía vivo"],
        items: [
          { text: "si alguno lo impidiere", cat: 0, why: "Hoy: «si alguien lo impide»." },
          { text: "sea cual fuere el resultado", cat: 1, why: "Fórmula todavía viva en registro formal." },
          { text: "díjole el alcalde", cat: 0, why: "Hoy: «le dijo el alcalde»." },
          { text: "véanse las notas finales", cat: 1, why: "Con subjuntivo de mandato, el pronombre detrás es la norma actual." },
          { text: "apenas hubo amanecido", cat: 0, why: "Hoy: «en cuanto amaneció»." },
          { text: "érase una vez un relojero", cat: 1, why: "Apertura tradicional de cuento: se mantiene." },
          { text: "la socia que hubiere solicitado el préstamo", cat: 0, why: "Hoy: «la socia que haya solicitado el préstamo»." },
        ],
      },
      {
        id: "c2-01-gramatica-errores",
        type: "error",
        prompt: "Cada versión actual tiene un error de modernización. Corrígelo.",
        items: [
          {
            sentence: "Si el socio no haya pagado la cuota de marzo, perderá el derecho a socorro.",
            answers: ["Si el socio no ha pagado la cuota de marzo, perderá el derecho a socorro."],
            why: "Original: «si no hubiere pagado». Detrás de «si», pretérito perfecto de indicativo.",
          },
          {
            sentence: "El aspirante que habrá superado la prueba recibirá el diploma.",
            answers: ["El aspirante que haya superado la prueba recibirá el diploma."],
            why: "Original: «que hubiere superado». La condición eventual exige subjuntivo: «haya superado».",
          },
          {
            sentence: "Cuando hayan llegados los delegados, empezará la sesión.",
            answers: ["Cuando hayan llegado los delegados, empezará la sesión."],
            why: "El participio de los tiempos compuestos es invariable.",
          },
          {
            sentence: "La pintora, que expondría en París en 1925, volvió a Zaragoza en 1931.",
            answers: ["La pintora, que había expuesto en París en 1925, volvió a Zaragoza en 1931.", "La pintora, que expuso en París en 1925, volvió a Zaragoza en 1931."],
            why: "Original: «que expusiera en París». Es un pasado de indicativo, no un condicional.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de documentos antiguos, de archivos familiares y de lo que una sociedad o un testamento disponía.",
    groups: [
      {
        title: "Documentos y edición",
        items: [
          { es: "el reglamento", note: "conjunto de artículos que regula el funcionamiento de una entidad" },
          { es: "la cláusula", note: "disposición concreta dentro de un testamento o un contrato" },
          { es: "la transcripción literal", note: "copia exacta que respeta la grafía y la puntuación del original" },
          { es: "la paráfrasis", note: "reformulación con otras palabras que conserva el sentido" },
          { es: "la nota editorial", note: "texto breve que explica los criterios de una edición" },
          { es: "el anexo", note: "documento que se añade al principal para completarlo" },
          { es: "situar en su época", note: "indicar a qué momento histórico corresponde un texto" },
        ],
      },
      {
        title: "Sociedad, cuotas y legado",
        items: [
          { es: "el socorro mutuo", note: "ayuda que se prestan los socios con un fondo común" },
          { es: "estar al corriente de las cuotas", note: "no deber ningún pago a la sociedad" },
          { es: "causar baja", note: "dejar de pertenecer a una entidad" },
          { es: "otorgar testamento", note: "hacerlo formalmente ante notario" },
          { es: "el legado", note: "bien concreto que alguien deja a otra persona en su testamento" },
          { es: "el albacea", note: "persona encargada de que se cumpla un testamento" },
          { es: "el consocio", note: "compañero de una misma sociedad" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-01-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la cláusula", right: "disposición concreta dentro de un testamento o un contrato" },
          { left: "la transcripción literal", right: "copia exacta que respeta la grafía y la puntuación del original" },
          { left: "la paráfrasis", right: "reformulación con otras palabras que conserva el sentido" },
          { left: "el socorro mutuo", right: "ayuda que se prestan los socios con un fondo común" },
          { left: "causar baja", right: "dejar de pertenecer a una entidad" },
          { left: "el legado", right: "bien concreto que alguien deja a otra persona en su testamento" },
          { left: "el albacea", right: "persona encargada de que se cumpla un testamento" },
          { left: "situar en su época", right: "indicar a qué momento histórico corresponde un texto" },
        ],
      },
      {
        id: "c2-01-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["al corriente", "otorgó testamento", "nota editorial", "anexo"],
        items: [
          { q: "Solo podían cobrar el socorro quienes estuvieran ___ de sus cuotas.", answers: [["al corriente"]] },
          { q: "Mi bisabuelo ___ en 1934, ante un notario de la calle Alfonso.", answers: [["otorgó testamento"]] },
          { q: "La ___ explica por qué cambiamos «vosotros» por «ustedes» en la versión para la web.", answers: [["nota editorial"]] },
          { q: "La lista de socios fundadores aparece en el ___ del reglamento.", answers: [["anexo"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Formas en -re y en -rá: dónde cae el acento",
    explanation: [
      "Al leer en voz alta un documento antiguo, el acento te ayuda a no confundir dos formas que se escriben casi igual. El futuro de subjuntivo en -re es una palabra llana: pre-sen-TA-re, hu-BIE-re, fal-TA-re. El futuro de indicativo en -rá es aguda y lleva tilde: pre-sen-ta-RÁ, ha-BRÁ, fal-ta-RÁ. La primera persona del plural, hu-BIÉ-re-mos, es esdrújula.",
      "Cuando leas la transcripción literal, respeta la forma original y su acento; no la modernices al leer. Después, al glosarla, cambia de voz: una pausa breve y un tono más conversacional marcan que pasas de citar a explicar.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni la calidad de tu pronunciación. Úsalo para percibir el contraste y comprueba tu producción con una persona.",
    ],
    table: {
      caption: "Llanas en -re, agudas en -rá",
      head: ["Futuro de subjuntivo (llana)", "Futuro de indicativo (aguda)"],
      rows: [
        ["presentare", "presentará"],
        ["hubiere", "habrá"],
        ["faltare", "faltará"],
        ["hubieren cumplido", "habrán cumplido"],
      ],
    },
    perceive: {
      id: "c2-01-percepcion",
      type: "listen",
      prompt: "Escucha cada frase antes de leer las opciones y decide qué forma oyes por la posición del acento.",
      items: [
        {
          q: "¿Qué forma oyes?",
          options: ["presentare: llana, futuro de subjuntivo", "presentará: aguda, futuro de indicativo"],
          answer: 0,
          why: "El acento cae en «ta»: pre-sen-TA-re.",
          audio: "Quien no se presentare a la junta perderá el voto.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué forma oyes en el verbo principal?",
          options: ["presentare: llana, futuro de subjuntivo", "presentará: aguda, futuro de indicativo"],
          answer: 1,
          why: "El acento cae en la última sílaba: pre-sen-ta-RÁ.",
          audio: "El tesorero presentará las cuentas en la próxima junta.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué combinación de formas oyes?",
          options: ["dos formas agudas en -rá", "dos formas llanas en -re", "una llana en -re y después una aguda en -rá"],
          answer: 2,
          why: "Primero fal-TA-re (llana), después a-vi-sa-RÁ (aguda).",
          audio: "Si alguno faltare, se le avisará por escrito.",
          voice: "es-UY-m",
        },
        {
          q: "¿Qué forma oyes al principio de la frase?",
          options: ["hubieren cumplido", "habrán cumplido"],
          answer: 0,
          why: "hu-BIE-ren: llana y con «hub-», no aguda con «habr-».",
          audio: "Cuando hubieren cumplido el aprendizaje, recibirán el título.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "Quien no se presentare a la junta perderá el voto.", tip: "Contrasta las dos formas: pre-sen-TA-re frente a per-de-RÁ.", voice: "es-ES-f" },
      { text: "El socio que hubiere satisfecho doce cuotas tendrá derecho a médico.", tip: "Lee la cita con ritmo pausado y sin modernizarla.", voice: "es-ES-m" },
      { text: "Es decir: quien haya pagado doce cuotas tendrá derecho a médico.", tip: "Haz una pausa después de «es decir» y cambia a un tono explicativo.", voice: "es-UY-m" },
      { text: "Sea cual fuere el motivo, la ausencia se comunicará por escrito.", tip: "Agrupa «sea cual fuere el motivo» en un solo grupo fónico.", voice: "es-ES-f" },
    ],
    spelling: "La tilde separa las dos formas también por escrito: «faltare» no la lleva; «faltará» sí. Si copias un original, no añadas ni quites tildes.",
  },
  listening: {
    title: "Videollamada: las versiones del reglamento",
    context: "Irene, en Zaragoza, y su primo Matías, en Montevideo, revisan por videollamada las versiones modernas de los documentos familiares que se expondrán en el centro cívico y en la web. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "i", name: "Irene", voice: "es-ES-f", role: "Prepara los paneles en Zaragoza" },
      { id: "m", name: "Matías", voice: "es-UY-m", role: "Revisa las versiones desde Montevideo" },
    ],
    script: [
      { speaker: "i", text: "Matías, ¿me oyes bien? Te comparto la pantalla. Estoy con el artículo veintidós del reglamento, el de las viudas: «La viuda del socio que hubiere fallecido estando al corriente de sus cuotas percibirá una pensión durante seis meses». Mi primera versión decía «del socio que habrá fallecido», y en cuanto la leí en voz alta me di cuenta de que no tenía sentido." },
      { speaker: "m", text: "Claro, eso suena a conjetura, como cuando decimos que el ómnibus ya habrá salido. Acá la condición tiene que estar cumplida antes: primero el socio fallece con las cuotas al día y después la viuda cobra. Yo pondría «la viuda del socio que haya fallecido con las cuotas al día recibirá una pensión durante seis meses»." },
      { speaker: "i", text: "Perfecto. En el veintitrés tenemos «si la viuda contrajere nuevas nupcias, cesará la pensión». Esa la tengo clara: detrás de si, presente de indicativo. «Si la viuda vuelve a casarse, dejará de cobrar la pensión»." },
      { speaker: "m", text: "Sí, aunque dejará de cobrar suena menos solemne que cesará. Para el panel me parece bien; quien lo lea no es jurista. Lo que me preocupa es la crónica. Dice «no bien hubo terminado de hablar el secretario, rompió la sala en aplausos», y en el borrador figura «cuando el secretario terminara de hablar». Eso confunde, porque un lector de acá lo entiende como un subjuntivo, como algo que todavía no pasó." },
      { speaker: "i", text: "Tienes razón. Lo cambio por «en cuanto el secretario terminó de hablar, la sala estalló en aplausos». ¿Y el «sentose a su lado» de la línea siguiente?" },
      { speaker: "m", text: "«Se sentó a su lado», sin más. Lo que yo no tocaría es el «véase el apéndice» del final, que sigue siendo normal. Otra cosa: la convocatoria de la junta usa vosotros. En Montevideo usamos vos para hablar con una persona de confianza, pero para el plural siempre decimos ustedes. Para la web pondría ustedes y una nota para los lectores de España." },
      { speaker: "i", text: "Me parece bien. Queda el testamento del bisabuelo: «cuando mi hija menor hubiere cumplido veintiún años, se le entregará el reloj». Ahí la gramática es lo fácil, «cuando haya cumplido». Lo difícil es que la tía Carmen quiere usar el panel para reabrir quién debía quedarse con el reloj." },
      { speaker: "m", text: "Entonces el panel tiene que decir con claridad qué es: un documento de 1934 que se cumplió hace décadas, no una prueba para discutir herencias. Entender una forma verbal no nos convierte en notarios. Contamos lo que el texto disponía y ahí paramos." },
      { speaker: "i", text: "De acuerdo. Transcripción literal a la izquierda, versión actual a la derecha y una línea que sitúe cada documento en su época. Así cualquiera puede comprobar nuestra lectura sin fiarse a ciegas, y si alguien encuentra un error, que nos escriba." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué están haciendo y con qué criterio general?",
        exercise: {
          id: "c2-01-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y el acuerdo general.",
          items: [
            {
              q: "¿Qué hacen Irene y Matías?",
              options: [
                "Redactan un reglamento nuevo para la sociedad.",
                "Preparan un recurso para reclamar una herencia.",
                "Revisan versiones actuales de documentos históricos para exponerlos.",
              ],
              answer: 2,
              why: "Comentan artículo por artículo cómo quedará cada texto en el panel y en la web.",
            },
            {
              q: "¿Qué criterio comparten al final?",
              options: [
                "Mostrar original y versión actual juntos para que cualquiera pueda comprobar la lectura.",
                "Publicar solo la versión actual para no confundir al público.",
                "Conservar todas las formas antiguas para respetar el tono.",
              ],
              answer: 0,
              why: "Irene propone transcripción a la izquierda, versión actual a la derecha y una línea de contexto.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada original y su versión. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-01-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada decisión.",
          items: [
            {
              q: "¿Por qué Irene descarta «del socio que habrá fallecido»?",
              options: [
                "Porque convierte la condición en una conjetura.",
                "Porque el reglamento no habla de las viudas.",
                "Porque Matías prefiere conservar la forma original.",
              ],
              answer: 0,
              why: "Matías lo compara con «el ómnibus ya habrá salido»: una suposición, no una condición.",
            },
            {
              q: "¿Qué problema ve Matías en «cuando el secretario terminara de hablar»?",
              options: [
                "Que es demasiado coloquial para un panel.",
                "Que un lector actual lo interpreta como subjuntivo, como algo no ocurrido.",
                "Que cambia el nombre del orador.",
              ],
              answer: 1,
              why: "El original es un pretérito anterior: un hecho pasado inmediato, que hoy se dice con «en cuanto terminó».",
            },
            {
              q: "¿Qué deciden sobre la convocatoria con «vosotros»?",
              options: [
                "Mantener «vosotros» porque el original es español.",
                "Usar «vos» para los lectores uruguayos.",
                "Usar «ustedes» en la web y añadir una nota para lectores de España.",
              ],
              answer: 2,
              why: "«Ustedes» sirve para el plural a ambos lados del Atlántico.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo cada forma histórica pasó al español actual. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-01-escucha-notice",
          type: "match",
          prompt: "Relaciona cada original citado en la conversación con la decisión que toman.",
          pairs: [
            { left: "que hubiere fallecido", right: "que haya fallecido" },
            { left: "si la viuda contrajere nuevas nupcias", right: "si la viuda vuelve a casarse" },
            { left: "no bien hubo terminado de hablar", right: "en cuanto terminó de hablar" },
            { left: "sentose a su lado", right: "se sentó a su lado" },
            { left: "véase el apéndice", right: "se conserva sin cambios" },
          ],
          why: "Cada decisión depende de la función de la forma: condición eventual, condición con «si», inmediatez pasada, pronombre pospuesto o fórmula viva.",
        },
      },
    ],
  },
  reading: {
    title: "Lo que pedía La Fraternal",
    genre: "Texto de catálogo de exposición",
    frame: "Texto de Irene Lasheras para el catálogo de la exposición «Papeles de La Fraternal», en el centro cívico de su barrio de Zaragoza. Personas, entidad y documentos son ficticios.",
    text: [
      "Cuando vaciamos el arcón de mi abuela Pilar, en el piso de la calle Predicadores, esperábamos encontrar fotografías y alguna carta de amor. Aparecieron, además, tres documentos que hoy forman el núcleo de la pequeña exposición que el centro cívico inaugura este mes: el reglamento de 1911 de La Fraternal, una sociedad de socorros mutuos fundada por tipógrafos y ebanistas; el testamento que mi bisabuelo Mariano otorgó en 1934, y una crónica de 1925 recortada de un periódico local. Los tres están escritos en un español que se entiende a medias, y precisamente esa media comprensión es la más peligrosa.",
      "El reglamento establece, en su artículo 9, que «el socio que hubiere satisfecho veinticuatro cuotas consecutivas tendrá derecho a socorro en caso de enfermedad». Un visitante de hoy lee hubiere, lo asocia vagamente con hubiera y concluye que se trata de algo que no ocurrió. Es exactamente al revés. La forma describe una condición eventual, que puede cumplirse o no según el socio, y que debe estar completada antes de que nazca el derecho. En el panel la hemos reformulado así: «quien haya pagado veinticuatro cuotas seguidas tendrá derecho a ayuda si enferma». El orden se conserva: primero las cuotas, después el socorro.",
      "El artículo 14 nos obligó a una decisión distinta: «Si algún socio no hubiere comunicado su baja por escrito, seguirá obligado al pago». Aquí la forma compuesta va detrás de si, y el español actual no admite el subjuntivo presente en esa posición. La versión correcta no es «si no haya comunicado», que suena a error de principiante, sino «si un socio no ha comunicado su baja por escrito, seguirá obligado a pagar». Del mismo modo, el artículo 3 decía «si alguno faltare a tres juntas seguidas» y lo dejamos en «si alguien falta a tres juntas seguidas». Quien cambia las terminaciones de manera mecánica acaba escribiendo frases que ningún hablante produciría.",
      "La crónica de 1925 plantea otra dificultad, porque no regula nada: cuenta. «Apenas hubo concluido el banquete, levantose el presidente y dirigió a los consocios unas palabras de gratitud». El pretérito anterior marca una sucesión inmediata, y el pronombre pegado al verbo conjugado era entonces un rasgo de estilo cuidado. En la versión actual escribimos «en cuanto terminó el banquete, el presidente se levantó y dirigió a los socios unas palabras de agradecimiento». El mismo cronista menciona «el local que la sociedad inaugurara en 1911». No hay ahí deseo ni hipótesis, sino un pasado de indicativo, y por eso lo convertimos en «el local que la sociedad había inaugurado en 1911».",
      "El testamento de Mariano exigió más cautela. Una cláusula dispone que «cuando mi hija menor hubiere cumplido veintiún años, se le entregará el reloj de bolsillo y la caja de herramientas». La paráfrasis fiel es «cuando mi hija menor haya cumplido veintiún años», y no «cuando habrá cumplido», un calco del futuro que algunos estudiantes de español, y más de un traductor automático, proponen con toda naturalidad. Pero la gramática no agota la tarea. El panel aclara que el testamento se cumplió hace décadas y que su lectura no tiene valor jurídico alguno: lo exponemos como testimonio de una familia de artesanos, no como modelo para redactar últimas voluntades.",
      "Una parte de la familia vive en Montevideo, y mi primo Matías revisó todas las versiones pensando en lectores rioplatenses. La convocatoria de 1911 se dirigía a los socios con un solemne «si no acudiereis a la junta, perderéis el voto». Para la web elegimos «si no acuden a la junta, perderán el voto», comprensible a ambos lados del Atlántico, y añadimos una nota sobre el vosotros peninsular. En cambio, conservamos la fórmula «sea cual fuere el motivo de la ausencia», porque sigue viva en la prosa administrativa, y sustituirla por «sea cual sea» le habría quitado al texto parte de su gravedad sin ganar claridad.",
      "Al final, el criterio que nos guio fue sencillo de enunciar y difícil de aplicar: identificar primero la función de cada forma, ya fuera condición eventual, anterioridad, sucesión inmediata o pasado narrado, y solo después buscar su equivalente actual. Cada panel muestra la transcripción literal junto a la versión moderna, para que nadie tenga que fiarse de nuestra lectura sin poder comprobarla. Así, quien visite la exposición podrá juzgar si hemos entendido bien a unos tipógrafos que, hace más de un siglo, escribieron con todo cuidado para lectores que todavía no habían nacido.",
    ],
    glossary: [
      { es: "socorro", note: "ayuda económica o médica que recibía el socio" },
      { es: "contraer nupcias", note: "casarse (registro formal y antiguo)" },
      { es: "calco", note: "imitación de una estructura que no corresponde a la lengua o al contexto" },
    ],
    tasks: [
      {
        id: "c2-01-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido las decisiones del catálogo.",
        items: [
          {
            q: "Según la autora, ¿por qué es peligrosa la «media comprensión» de estos documentos?",
            options: [
              "Porque los visitantes no saben quién era La Fraternal.",
              "Porque el lector cree entender formas como «hubiere» y les atribuye un valor equivocado.",
              "Porque los documentos están incompletos.",
            ],
            answer: 1,
            why: "El segundo párrafo muestra cómo «hubiere» se confunde con «hubiera» y se lee al revés.",
          },
          {
            q: "¿Por qué el artículo 14 no se moderniza con «haya comunicado»?",
            options: [
              "Porque la forma va detrás de «si», y ahí el español actual pide indicativo.",
              "Porque el artículo 14 ya no está vigente.",
              "Porque Matías prefería una versión rioplatense.",
            ],
            answer: 0,
            why: "Tras «si» condicional, «hubiere comunicado» pasa a «ha comunicado».",
          },
          {
            q: "¿Qué decisión toman con «sea cual fuere el motivo de la ausencia»?",
            options: [
              "La cambian por «sea cual sea» para ganar claridad.",
              "La eliminan porque resulta demasiado antigua.",
              "La conservan porque es una fórmula viva y cambiarla restaría gravedad.",
            ],
            answer: 2,
            why: "El sexto párrafo explica que sigue en uso en la prosa administrativa.",
          },
        ],
      },
      {
        id: "c2-01-lectura-funcion",
        type: "match",
        prompt: "Relaciona cada original del catálogo con la función que la autora le atribuye.",
        pairs: [
          { left: "el socio que hubiere satisfecho veinticuatro cuotas", right: "condición eventual cumplida antes del derecho" },
          { left: "apenas hubo concluido el banquete", right: "sucesión inmediata en el pasado" },
          { left: "el local que la sociedad inaugurara en 1911", right: "pasado narrado con forma en -ra" },
          { left: "si no acudiereis a la junta", right: "condición dirigida a un grupo con vosotros" },
        ],
      },
      {
        id: "c2-01-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión del catálogo con argumentos propios.",
        items: [
          {
            prompt: "La autora afirma que el testamento se expone «como testimonio de una familia de artesanos, no como modelo para redactar últimas voluntades». Explica en 70–90 palabras qué riesgo intenta evitar esa frase y si la añadirías también a los paneles del reglamento.",
            model: "La frase evita que el visitante confunda interpretar un documento con aplicarlo hoy. Que entendamos «hubiere cumplido» no significa que el reparto de 1934 pueda discutirse ni que esa redacción sirva para un testamento actual. Yo añadiría una línea parecida al reglamento: un visitante podría creer que La Fraternal sigue funcionando o que sus cuotas tienen algún efecto. Bastaría con fechar el documento y decir que las normas regían la sociedad en 1911.",
            checklist: [
              "Distingo entre interpretar el documento y darle vigencia.",
              "Tomo posición sobre el reglamento y la justifico.",
              "Uso al menos una forma actual equivalente a «hubiere + participio».",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el texto cita la forma histórica y enseguida explica su función o su versión actual.",
      items: [
        { quote: "La forma describe una condición eventual, que puede cumplirse o no según el socio, y que debe estar completada antes de que nazca el derecho.", note: "Definición funcional de «hubiere + participio»: eventualidad y anterioridad, en una sola frase." },
        { quote: "Aquí la forma compuesta va detrás de si, y el español actual no admite el subjuntivo presente en esa posición.", note: "La palabra que introduce la forma decide la versión actual: tras «si», indicativo." },
        { quote: "No hay ahí deseo ni hipótesis, sino un pasado de indicativo", note: "Antes de modernizar una forma en -ra, descarta el valor de subjuntivo." },
        { quote: "comprensible a ambos lados del Atlántico", note: "La elección de «ustedes» responde al destinatario, no a la gramática del original." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el destinatario, reformulación guiada y escritura breve. Termina recuperando las clases de C1 que preparan esta semana.",
    exercises: [
      {
        id: "c2-01-orden",
        type: "order",
        prompt: "Ordena las palabras para obtener la versión actual de cada original.",
        items: [
          {
            words: ["En", "cuanto", "firmó", "el", "acta,", "el", "secretario", "cerró", "la", "sesión."],
            why: "Original: «Luego que hubo firmado el acta, cerró el secretario la sesión». Indefinido + «en cuanto».",
          },
          {
            words: ["Quien", "haya", "abonado", "la", "inscripción", "recibirá", "el", "programa."],
            why: "Original: «Quien hubiere abonado la inscripción recibirá el programa».",
          },
          {
            words: ["Si", "alguien", "ha", "perdido", "la", "llave,", "avisará", "al", "conserje."],
            why: "Original: «Si alguno hubiere perdido la llave, avisará al conserje». Tras «si», «ha» + participio.",
          },
        ],
      },
      {
        id: "c2-01-destinatario",
        type: "context",
        prompt: "Elige la versión más adecuada para el destinatario indicado.",
        items: [
          {
            context: "Original de 1911: «Si no os hallareis presentes al pasar lista, se os anotará la falta». Destinatario: la web de la exposición, leída en España y en Uruguay.",
            q: "¿Qué versión eliges?",
            options: [
              "Si no os halláis presentes al pasar lista, se os anotará la falta.",
              "Si no estuvieran presentes al pasar lista, se les anotaría la falta.",
              "Si no están presentes cuando se pasa lista, se les anotará la falta.",
            ],
            answer: 2,
            why: "«Ustedes» sirve en ambos públicos; tras «si», presente de indicativo; la consecuencia sigue en futuro.",
          },
          {
            context: "Original: «El hermano que hubiere sido elegido tesorero no podrá serlo dos años seguidos». Destinatario: una ficha de archivo para especialistas.",
            q: "¿Qué paráfrasis conviene?",
            options: [
              "Equivale a «el hermano que haya sido elegido tesorero no podrá serlo dos años seguidos».",
              "Equivale a «el hermano que habría sido elegido tesorero no podrá serlo dos años seguidos».",
              "Equivale a «el tesorero que eligieron no repitió».",
            ],
            answer: 0,
            why: "La ficha especializada necesita una paráfrasis fiel que conserve eventualidad y anterioridad.",
          },
          {
            context: "Original: «Sea cual fuere su categoría, todo socio tendrá voz en la asamblea». Destinatario: un panel para público general.",
            q: "¿Qué haces con la fórmula?",
            options: [
              "La cambio por «si fuera cual fuera su categoría».",
              "La conservo: es una fórmula viva y el público la entiende.",
              "La elimino y dejo solo «todo socio tendrá voz».",
            ],
            answer: 1,
            why: "«Sea cual fuere» sigue en uso; eliminarla borraría que la norma vale para todas las categorías.",
          },
        ],
      },
      {
        id: "c2-01-reformular",
        type: "transform",
        prompt: "Reformula cada original en español actual conservando el orden de los hechos y la construcción con «se».",
        items: [
          {
            source: "Cuando los albaceas hubieren inventariado los bienes, se procederá al reparto.",
            instruction: "Pasa al español actual la forma en «hubieren» y deja igual el resto.",
            answers: ["Cuando los albaceas hayan inventariado los bienes, se procederá al reparto."],
            why: "«Cuando» con valor futuro + anterioridad: «hayan» + participio.",
          },
          {
            source: "Si el alumno no hubiere aprobado el examen de junio, se le permitirá repetirlo en septiembre.",
            instruction: "Pasa al español actual la forma en «hubiere» y deja igual el resto.",
            answers: ["Si el alumno no ha aprobado el examen de junio, se le permitirá repetirlo en septiembre."],
            why: "Tras «si», pretérito perfecto de indicativo.",
          },
          {
            source: "Diósele sepultura en el panteón de la sociedad.",
            instruction: "Coloca el pronombre como se hace hoy con un verbo conjugado en indicativo.",
            answers: ["Se le dio sepultura en el panteón de la sociedad."],
            why: "Hoy los pronombres van delante del verbo conjugado y separados: «se le dio».",
          },
        ],
      },
      {
        id: "c2-01-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe dos paráfrasis de «Cuando los herederos hubieren aceptado la herencia, el albacea repartirá los libros»: una fiel para especialistas y otra accesible para público general (40–60 palabras en total). Añade una frase que diga qué conserva cada una.",
            model: "Especialistas: «Cuando los herederos hayan aceptado la herencia, el albacea repartirá los libros». Público general: «Primero los herederos aceptan la herencia y después el albacea reparte los libros». La primera conserva la estructura y la eventualidad; la segunda conserva el orden de los hechos con palabras sencillas.",
            checklist: [
              "Las dos versiones mantienen que la aceptación va antes del reparto.",
              "La versión fiel usa «hayan» + participio.",
              "Explico qué conserva cada versión.",
            ],
          },
          {
            prompt: "Redacta la línea de contexto (30–50 palabras) que irá bajo el reglamento de 1911 en el panel. Debe situar el documento en su época y dejar claro que no está vigente.",
            model: "Reglamento de La Fraternal, sociedad de socorros mutuos fundada en Zaragoza por tipógrafos y ebanistas. Estas normas regían la sociedad en 1911; hoy solo tienen valor histórico y no se aplican a ninguna entidad actual.",
            checklist: [
              "Fecho el documento y nombro a la entidad.",
              "Dejo claro que las normas no están vigentes.",
              "Uso un pasado («regían») para las normas, no un presente.",
            ],
          },
        ],
      },
      {
        id: "c2-01-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las últimas clases de C1 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G202 (futuro de subjuntivo). Estímulo: «El que entrare sin licencia pagará diez reales» frente a «El que hubiere entrado sin licencia pagará diez reales». Da la versión actual de cada una y explica en una frase qué añade la forma compuesta.",
            model: "«El que entre sin licencia pagará diez reales» y «el que haya entrado sin licencia pagará diez reales». Las dos son eventuales; la compuesta subraya que la entrada ya se ha producido cuando se aplica la multa.",
            checklist: [
              "Uso presente de subjuntivo para la forma simple y «haya» + participio para la compuesta.",
              "Explico la diferencia como anterioridad, no como pasado irreal.",
            ],
          },
          {
            prompt: "Recuperación de la clase G201 (pretérito anterior). Estímulo: «Así que hubo cerrado la tienda, fuese a la tertulia del casino». Moderniza la frase y explica por qué «cuando haya cerrado» sería un error.",
            model: "«En cuanto cerró la tienda, se fue a la tertulia del casino». «Cuando haya cerrado» habla de algo futuro y eventual; el original narra dos hechos pasados seguidos, así que hace falta el indefinido y un conector de inmediatez. También coloco «se» delante del verbo.",
            checklist: [
              "Uso indefinido y un conector de inmediatez.",
              "Corrijo también el pronombre pospuesto.",
            ],
          },
          {
            prompt: "Recuperación de la clase G203 (restrictivas y explicativas). Estímulo: versión A «Los socios, que hayan pagado la cuota, votarán»; versión B «Los socios que hayan pagado la cuota votarán». Original: «Los socios que hubieren pagado la cuota votarán». ¿Qué versión es fiel y por qué?",
            model: "La B es fiel. El original selecciona un subconjunto: solo votan quienes han pagado. Las comas de la A convierten la relativa en explicativa y dan a entender que todos los socios han pagado, lo que además choca con el subjuntivo eventual.",
            checklist: [
              "Identifico la relativa restrictiva como la fiel.",
              "Explico qué cambia la puntuación en el alcance.",
            ],
          },
          {
            prompt: "Recuperación de la clase G204 (revisión argumentativa). Estímulo, borrador de un panel: «Hubiere es como hubiera, o sea, un pasado. Por eso el reglamento habla de cosas que no pasaron, y los socios no cobraban». Reescríbelo con coherencia y matiz en 50–70 palabras.",
            model: "Aunque «hubiere» se parece a «hubiera», no expresa un pasado no cumplido. Presenta una condición que podía darse o no y que debía estar cumplida antes de la consecuencia. Por tanto, el reglamento no dice que los socios no cobraran: dice que cobraban quienes cumplían la condición. Hoy lo expresaríamos con «haya + participio».",
            checklist: [
              "Corrijo la equivalencia falsa sin perder el hilo del argumento.",
              "Uso conectores que marcan contraste y consecuencia.",
              "La conclusión se deduce de la explicación.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la nota editorial de la exposición «Papeles de La Fraternal» (400–520 palabras). Explica a visitantes de España y de América cómo se han pasado al español actual el reglamento, la crónica y el testamento: qué formas se modernizaron, cuáles se conservaron, por qué, y qué alcance tiene cada documento hoy.",
    context: "La nota irá impresa a la entrada de la sala y publicada en la web. Quien la lea no conoce la terminología gramatical: puedes nombrar las formas, pero explícalas con ejemplos. Usa los documentos de esta semana o inventa otros artículos con la misma lógica.",
    steps: [
      "Haz una tabla con tres columnas: original, función y versión actual. Incluye al menos un caso con «hubiere + participio» tras relativo o «cuando» y otro tras «si».",
      "Decide el orden de la nota: criterio general, casos concretos, fórmulas conservadas, tratamiento (vosotros/ustedes) y alcance de los documentos.",
      "Redacta sin copiar el modelo. Cita cada original entre comillas y presenta su versión actual justo después.",
      "Revisa la nota con la lista de control: comprueba cada paráfrasis, corrige cualquier «habrá» o «hubiera» que se haya colado y lee un párrafo en voz alta.",
    ],
    useLanguage: [
      "quien haya + participio / cuando haya + participio",
      "si + ha + participio",
      "en cuanto / apenas + indefinido",
      "la transcripción literal, la paráfrasis, situar en su época",
      "sea cual fuere (fórmula conservada)",
      "Estas normas regían… y hoy solo tienen valor histórico.",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Los documentos de esta sala se escribieron hace más de un siglo, en un español que hoy entendemos solo a medias. Por eso cada panel ofrece dos textos: a la izquierda, la transcripción literal; a la derecha, una versión en español actual. No hemos cambiado palabras por gusto. Antes de tocar cada forma nos preguntamos qué hacía en el original. Cuando el reglamento dice que «el socio que hubiere satisfecho veinticuatro cuotas tendrá derecho a socorro», no habla de algo que no ocurrió, sino de una condición que debía cumplirse antes: hoy diríamos «quien haya pagado veinticuatro cuotas».",
    ],
    checklist: [
      "Cada paráfrasis conserva la eventualidad y el orden de los hechos del original.",
      "Tras «si» uso indicativo; tras relativo o «cuando», subjuntivo.",
      "Explico al menos una fórmula conservada y por qué no la cambié.",
      "Justifico la elección entre «vosotros» y «ustedes» según el público.",
      "Dejo claro que los documentos tienen valor histórico y no vigencia actual.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Visita guiada por tres paneles",
        prompt: "Eres guía de la exposición. Presenta tres paneles: el artículo 9 del reglamento, la crónica del banquete y la cláusula del testamento. En cada uno, lee el original, explica qué hace la forma histórica y di cómo la entendemos hoy.",
        prep: [
          "Anota para cada panel: original, función y versión actual.",
          "Prepara una frase de transición entre paneles y una pausa para pasar de citar a explicar.",
        ],
        seconds: 240,
        model: "Empezamos por el reglamento. Dice: «el socio que hubiere satisfecho veinticuatro cuotas tendrá derecho a socorro». Ojo, porque hubiere no es hubiera: no habla de algo que no pasó, sino de una condición que podía cumplirse. Hoy diríamos: quien haya pagado veinticuatro cuotas tendrá derecho a ayuda. Pasemos a la crónica…",
        selfCheck: [
          "Leo las formas en -re con acento llano.",
          "Separo con la voz la cita y la explicación.",
          "No presento ningún documento como vigente.",
        ],
      },
      {
        title: "Mediación con la tía Carmen",
        prompt: "La tía Carmen insiste: «Si el testamento dice que el reloj era para la hija menor, el panel tiene que decir que nos lo quitaron». Respóndele con respeto, hazle dos preguntas para entender su preocupación, aclara qué dice y qué no dice la cláusula y propón una solución para el panel.",
        prep: [
          "Prepara una frase que reconozca su preocupación.",
          "Ten a mano la paráfrasis «cuando mi hija menor haya cumplido veintiún años» y una línea de contexto.",
        ],
        seconds: 180,
        model: "Entiendo que te duela, tía. ¿Tú sabes quién se quedó con el reloj al final? ¿Hay algún papel posterior? La cláusula dice: «cuando mi hija menor hubiere cumplido veintiún años, se le entregará el reloj». O sea, cuando haya cumplido veintiún años, no antes. No dice qué pasó después. En el panel podemos poner lo que disponía el testamento y dejar fuera lo que no sabemos.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Distingo lo que dice el documento de lo que supone mi interlocutora.",
          "Propongo una solución concreta.",
        ],
      },
      {
        title: "Lectura y glosa en un minuto y medio",
        prompt: "Lee en voz alta el artículo 14 y la convocatoria de 1911 tal como están en el catálogo. Después glosa cada uno para un visitante de Montevideo y otro de Zaragoza.",
        prep: [
          "Marca el acento de «hubiere», «acudiereis» y «perderéis».",
          "Decide dónde usarás «ustedes» y dónde mencionarás «vosotros».",
        ],
        seconds: 90,
        selfCheck: [
          "No modernizo las formas mientras leo la cita.",
          "La glosa usa indicativo tras «si».",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu tabla de originales y versiones y una duda concreta. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Explica",
        task: "Elige un original con «hubiere + participio» y explícale a tu profesor, sin mirar notas, qué tiene que ocurrir primero y qué consecuencia depende de ello.",
        phrases: ["Primero tiene que…, y solo después…", "La forma no afirma que…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale si una fórmula que hayas encontrado en un texto real (un contrato, una sentencia, un refrán) sigue viva o es un fósil.",
        phrases: ["¿Esto se sigue diciendo hoy o solo aparece en textos antiguos?", "¿En qué registro lo usarías?"],
      },
      {
        move: "Defiende",
        task: "Presenta tu decisión más discutible de la nota editorial (por ejemplo, conservar una fórmula o elegir «ustedes») y pide un contraargumento.",
        phrases: ["Lo dejé así porque…", "Cambiaría de opinión si…"],
      },
      {
        move: "Compara",
        task: "Lee dos versiones de un mismo artículo, una fiel y otra accesible, y pide a tu profesor que diga cuál usaría en una ficha de archivo y cuál en un panel.",
        phrases: ["La primera conserva…; la segunda gana…"],
      },
    ],
    bring: "Tu tabla de originales, la nota editorial revisada y, si quieres, una grabación de la visita guiada.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En «el que hubiere residido diez años en la villa podrá votar», ¿qué expresa la forma verbal?",
        options: [
          "Un hecho que ya ocurrió y que el texto confirma.",
          "Una condición eventual que debe estar cumplida antes del voto.",
          "Un deseo irreal referido al pasado.",
        ],
        answer: 1,
        why: "Subjuntivo eventual + forma compuesta: posibilidad y anterioridad.",
      },
      {
        type: "choice",
        q: "¿Qué versión actual corresponde a «si el inquilino no hubiere desalojado el local»?",
        options: [
          "si el inquilino no desaloje el local",
          "si el inquilino no habrá desalojado el local",
          "si el inquilino no ha desalojado el local",
        ],
        answer: 2,
        why: "Tras «si», la forma compuesta pasa a pretérito perfecto de indicativo.",
      },
      {
        type: "listen",
        q: "Escucha la frase de una crónica antigua. ¿Qué versión actual la conserva?",
        options: [
          "En cuanto leyó la carta, la guardó en el cajón.",
          "Cuando haya leído la carta, la guardará en el cajón.",
          "Mientras leía la carta, la guardaba en el cajón.",
        ],
        answer: 0,
        why: "Pretérito anterior → indefinido con «en cuanto»; «guardola» → «la guardó».",
        audio: "Luego que hubo leído la carta, guardola en el cajón.",
        voice: "es-ES-m",
      },
      {
        type: "gap",
        q: "Original: «el que no hubiere votado en la primera vuelta». Versión actual: el que no ___ en la primera vuelta.",
        answers: [["haya votado"]],
        hint: "Relativo eventual + anterioridad.",
        why: "«Hubiere votado» → «haya votado».",
      },
      {
        type: "gap",
        q: "Original: «si alguno se negare a firmar». Versión actual: si alguien se ___ a firmar.",
        answers: [["niega"]],
        hint: "Detrás de «si» condicional.",
        why: "Tras «si», presente de indicativo.",
      },
      {
        type: "transform",
        source: "Cuando el tribunal hubiere examinado las pruebas, se dictará sentencia.",
        instruction: "Reformula la frase en español actual manteniendo la construcción impersonal con «se» y el orden de los hechos.",
        answers: ["Cuando el tribunal haya examinado las pruebas, se dictará sentencia."],
        why: "«Cuando» con valor futuro + anterioridad: «haya examinado».",
      },
      {
        type: "error",
        sentence: "En la ceremonia entregósele la medalla al socio más antiguo.",
        answers: ["En la ceremonia se le entregó la medalla al socio más antiguo."],
        why: "En una versión actual, los pronombres van delante del verbo conjugado en indicativo.",
      },
      {
        type: "error",
        sentence: "Si la junta lo apruebe, la fiesta del patrón se celebrará en mayo.",
        answers: ["Si la junta lo aprueba, la fiesta del patrón se celebrará en mayo."],
        why: "Original: «si la junta lo aprobare». Tras «si», presente de indicativo.",
      },
      {
        type: "order",
        words: ["Si", "algún", "socio", "ha", "perdido", "el", "carné,", "deberá", "pedir", "otro."],
        why: "Original: «Si algún socio hubiere perdido el carné…». Tras «si», «ha» + participio.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un visitante por qué «quien hubiere donado un libro a la biblioteca» no significa «quien hubiera donado un libro». Incluye la versión actual y un ejemplo de cada forma.",
        model: "Las dos formas se parecen, pero no dicen lo mismo. «Quien hubiere donado un libro» presenta una posibilidad: si alguien dona un libro, después recibirá lo que el texto promete. Hoy diríamos «quien haya donado un libro». En cambio, «hubiera donado» suele hablar de algo que no ocurrió: «si hubiera donado el libro, ahora estaría en la biblioteca». La primera mira hacia una condición que todavía puede cumplirse; la segunda, hacia un pasado imaginado.",
        checklist: [
          "Doy la versión actual con «haya» + participio.",
          "Contrasto eventualidad y pasado no cumplido.",
          "Uso un ejemplo claro para cada forma.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Reconozco «hubiere + participio» y explico que expresa una condición eventual cumplida antes de su consecuencia.",
      "Distingo «hubiere», «haya», «habrá», «habría» y «hubiera» sin confundir sus lecturas.",
      "Modernizo formas en -re, el pretérito anterior, la forma en -ra narrativa y los pronombres pospuestos según su función.",
      "Decido qué fórmulas conservar, elijo «vosotros» o «ustedes» según el público y delimito el alcance de un documento antiguo.",
    ],
    review: [
      "Dentro de dos días, tapa la columna de la derecha de la tabla «Del original a la versión actual» y reconstrúyela.",
      "Dentro de una semana, busca un texto antiguo real (una ley, un refrán, un documento familiar) y escribe la versión actual de una frase.",
      "En la próxima clase, lee en voz alta tu nota editorial y pide a tu profesor que señale una paráfrasis dudosa.",
    ],
  },
  related: [
    { path: "/sistema-verbal/futuro-perfecto-subjuntivo", label: "Clase: Futuro perfecto de subjuntivo: reconocimiento histórico" },
    { path: "/gramatica/reformulacion-moderna-de-tiempos-historicos", label: "Clase: Reformulación moderna de tiempos históricos" },
  ],
};
