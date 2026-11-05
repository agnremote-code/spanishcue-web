import type { Module } from "../../types";

/**
 * C1 · semana 11 · Autoestudio espejo de G186 (ambigüedad sintáctica y dos
 * interpretaciones) y G187 (elipsis verbal, nominal y anafórica avanzadas).
 * Repaso autónomo con el reglamento de una liga vecinal de fútbol sala de
 * Zaragoza que una frase ambigua dejó con dos campeones. La liga, sus equipos
 * y sus personas son ficticios. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w11: Module = {
  id: "c1-11",
  level: "c1",
  week: 11,
  kind: "core",
  title: "Dos campeones y una sola frase",
  subtitle: "Repaso de cómo detectar y deshacer una ambigüedad sintáctica, y de cómo omitir o retomar sin que el lector dude",
  stop: {
    place: "Zaragoza",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c1.gram.g186",
    "c1.gram.g187",
    "c1.voc.w11-reglamento-liga",
    "c1.pron.w11-pausa-desambigua",
    "c1.lis.w11-comite-competicion",
    "c1.read.w11-columna-reglamento",
    "c1.wri.w11-propuesta-reforma",
    "c1.spk.w11-explicar-norma",
    "c1.fun.w11-aclarar-lectura",
    "c1.disc.w11-retomar-sin-dudas",
  ],
  reviewObjectives: ["c1.gram.g184","c1.gram.g185","c1.voc.w10-casona-cultura","c1.pron.w10-foco-dislocacion","c1.lis.w10-guion-podcast","c1.read.w10-cronica-casona","c1.wri.w10-cronica-inauguracion","c1.spk.w10-visita-casona","c1.fun.w10-destacar-contrastar","c1.disc.w10-progresion-tematica","c1.rev.w10-repaso-semanas-6-10"],
  prerequisites: ["c1-10"],
  goal: {
    canDo: "Puedo reconocer cuándo una frase admite dos lecturas plausibles, reformularla para que solo quede la que quiero, y omitir o retomar elementos con elipsis, proformas y anáforas sin perder al lector.",
    steps: [
      "Repasa en la teoría las cinco fuentes habituales de ambigüedad, las maneras de deshacerla y las formas que cambian cuando omites un nombre o un verbo.",
      "Practica con frases del reglamento de una liga vecinal de fútbol sala de Zaragoza.",
      "Escucha la reunión del comité de competición y lee la columna que cuenta cómo una frase dio dos campeones.",
      "Redacta una propuesta de reforma de una norma, revísala con la lista de control y explícala en voz alta.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que se complementan. La primera te enseña a sospechar de una frase correcta que el lector puede entender de dos maneras. La segunda te da las herramientas para no repetir: omitir un nombre o un verbo, sustituirlo por «lo» o «hacerlo», o retomarlo con «este último» o «respectivamente». Cuanto más omites, más tienes que vigilar que solo quede una lectura posible. El escenario es el reglamento de una liga vecinal de fútbol sala en Zaragoza.",
    parts: [
      {
        heading: "Dónde se esconde la segunda lectura",
        body: [
          "Una frase es ambigua cuando, en su contexto, admite dos interpretaciones plausibles y ambas importan al lector. No basta con que una segunda lectura sea posible en teoría: «el entrenador vio al portero con prismáticos» casi nunca se entiende como que el portero llevaba prismáticos, pero en un acta disciplinaria sí podría importar quién los llevaba. Por eso la pregunta útil no es «¿esto se puede leer de otra forma?», sino «¿un lector razonable podría leerlo de otra forma aquí?».",
          "En los textos formales hay cinco fuentes frecuentes. Un nombre que viene de un verbo seguido de «de» no dice si lo que sigue hace o recibe la acción («la denuncia del árbitro»). Un adjetivo o un complemento detrás de dos nombres puede afectar a uno o a los dos («jugadores y entrenadores sancionados»). Un complemento puede depender de dos verbos o de dos nombres («prohibió jugar el partido en el pabellón»). Un posesivo «su» o un pronombre puede tener dos antecedentes. Y un infinitivo no nombra a su sujeto, como repasaste en la semana 7 (G178): «el miedo a perder» no dice quién teme perder.",
        ],
        table: {
          caption: "Cinco fuentes de ambigüedad en un reglamento",
          head: ["Fuente", "Frase", "Lectura A", "Lectura B"],
          rows: [
            ["nombre + de", "la denuncia del árbitro", "el árbitro denunció", "alguien denunció al árbitro"],
            ["alcance del modificador", "jugadores y entrenadores sancionados", "solo los entrenadores sancionados", "jugadores y entrenadores, todos sancionados"],
            ["complemento con dos anclajes", "el delegado habló con el capitán del equipo visitante", "el capitán es del visitante", "el delegado es del visitante"],
            ["posesivo con dos antecedentes", "Ana avisó a Lucía de que su ficha caducaba", "la ficha de Ana", "la ficha de Lucía"],
            ["infinitivo sin sujeto", "la obligación de presentar el acta", "la presenta el árbitro", "la presenta el delegado"],
          ],
        },
        examples: [
          { es: "La crítica del presidente del Delicias sorprendió a todos.", note: "¿El presidente criticó o lo criticaron? Sin contexto, las dos lecturas son plausibles." },
          { es: "Se sancionará a los equipos y a los delegados reincidentes.", note: "¿Reinciden solo los delegados o también los equipos?" },
        ],
      },
      {
        heading: "Cómo dejar una sola lectura",
        body: [
          "Para deshacer una ambigüedad no hace falta reescribirlo todo: basta con añadir la marca que falta o mover una pieza. Con los nombres de acción, «de» queda para un participante y «a» o «por parte de» para el otro: «la denuncia del árbitro al delegado», «la denuncia al árbitro por parte del delegado». Si el modificador debe afectar a los dos nombres, repítelo o ponlo delante de ambos («los jugadores sancionados y los entrenadores sancionados», «todos los jugadores y entrenadores con sanción»); si solo afecta al segundo, cambia el orden («los entrenadores sancionados y los jugadores»).",
          "Con un posesivo dudoso, sustituye «su» por «de + nombre» o por «la suya», y con un infinitivo sin dueño, pasa a «que + verbo conjugado» con el sujeto explícito: «la obligación de que el árbitro presente el acta». En la lengua hablada la entonación y las pausas resuelven muchas dudas; en el texto escrito solo tienes las palabras y la puntuación, así que relee como si fueras alguien que quiere aprovechar la otra lectura.",
        ],
        table: {
          caption: "De la frase dudosa a la versión con una sola lectura",
          head: ["Frase dudosa", "Recurso", "Versión clara"],
          rows: [
            ["la queja del capitán", "de + agente, a + paciente", "la queja del capitán al comité"],
            ["equipos y delegados reincidentes", "repetir o reordenar", "los delegados reincidentes y todos los equipos"],
            ["Ana avisó a Lucía de que su ficha caducaba", "de + nombre", "Ana avisó a Lucía de que la ficha de Lucía caducaba"],
            ["el temor a descender", "que + subjuntivo con sujeto", "el temor de la directiva a que el equipo descienda"],
            ["Prohibió jugar el partido en el pabellón.", "mover el complemento", "En el pabellón, prohibió jugar el partido."],
          ],
        },
        mistakes: [
          {
            wrong: "Los equipos deberán presentar la alineación de sus jugadores y suplentes inscritos.",
            right: "Los equipos deberán presentar la alineación de sus jugadores inscritos y de sus suplentes inscritos.",
            why: "Si «inscritos» debe afectar a los dos grupos, repítelo; si no, el lector puede aplicarlo solo a los suplentes.",
          },
          {
            wrong: "El temor a que pierden la categoría paraliza al club.",
            right: "El temor a que pierdan la categoría paraliza al club.",
            why: "La oración explícita detrás de «temor a que» va en subjuntivo.",
          },
        ],
        tip: "Antes de entregar un texto normativo, relee cada «de», cada «su» y cada infinitivo preguntándote: ¿quién hace aquí la acción? Si dudas un segundo, el lector dudará más.",
      },
      {
        heading: "Omitir un nombre o un verbo sin perder la frase",
        body: [
          "Cuando omites un nombre ya mencionado, algunas palabras cambian de forma: «un», «algún» y «ningún» pasan a «uno», «alguno», «ninguno» («¿hay algún balón? —No queda ninguno»); «primer» y «tercer» pasan a «primero» y «tercero» («el primer partido y el tercero»); el posesivo breve pasa a la forma larga con artículo («mi ficha y la tuya»). Y el «el» que se usa delante de «agua», «área» o «acta» vuelve a ser «la» cuando el nombre desaparece: «el área de penalti y la de banquillos».",
          "Cuando dos oraciones comparten el verbo, la segunda puede quedarse en el sujeto y una palabra de polaridad: «también» coincide con un sí, «tampoco» con un no, «sí» y «no» contrastan. Si quedan dos elementos, una coma marca el hueco del verbo: «el Delicias ganó en casa y el Torrero, fuera». Para recuperar una oración entera tras verbos de opinión, deseo o lengua, se usa «que sí» o «que no»: «—¿Se repetirá el partido? —Pilar cree que no». Con «gustar», «interesar» o «convencer», la respuesta lleva «a»: «A mí tampoco».",
        ],
        table: {
          caption: "Lo que cambia cuando el nombre o el verbo desaparecen",
          head: ["Con el nombre o el verbo", "Sin él", "Comentario"],
          rows: [
            ["algún árbitro", "alguno", "un, algún, ningún → uno, alguno, ninguno"],
            ["el tercer partido", "el tercero", "primer, tercer → primero, tercero"],
            ["mi ficha y tu ficha", "mi ficha y la tuya", "posesivo largo con artículo"],
            ["el acta del sábado y el acta del domingo", "el acta del sábado y la del domingo", "vuelve el artículo femenino"],
            ["El Delicias ganó en casa y el Torrero ganó fuera.", "El Delicias ganó en casa y el Torrero, fuera.", "la coma marca el verbo omitido"],
            ["Creo que se repetirá el partido.", "Creo que sí.", "que sí / que no resumen la oración"],
          ],
        },
        examples: [
          { es: "—¿Te convence la nueva norma? —A mí no, pero a Pilar sí.", note: "Con «convencer», la respuesta corta lleva «a» y contrasta con «no» y «sí»." },
          { es: "No hay ningún pabellón libre el domingo, ni uno solo.", note: "Sin el nombre, «ningún» y «un» recuperan la vocal final." },
        ],
      },
      {
        heading: "Retomar con «lo», «hacerlo» y las anáforas del texto",
        body: [
          "«Lo» puede sustituir al atributo de «ser», «estar» y «parecer», y es invariable aunque el atributo sea femenino o plural: «—¿Las fichas están validadas? —Ya lo están». «Hacerlo» retoma una acción ya mencionada, con sus complementos, y no sirve para estados: «quien quiera recurrir puede hacerlo antes del jueves», pero no «Ana sabe el reglamento y Jorge lo hace también». En una respuesta corta, el español prefiere repetir el verbo («—¿Enviaste la queja? —Sí, la envié ayer»).",
          "En un texto, «este» señala lo último mencionado y «aquel» lo anterior; «el primero», «el segundo» y «este último» son más claros si hay varios candidatos. «Respectivamente» reparte dos listas en el mismo orden. «Dicho» y «tal» delante de un nombre son propios de textos administrativos. Evita «el mismo» como simple pronombre («se aprobó la norma y la publicación de la misma»): usa «su publicación» o «publicarla». Y recuerda la regla de la semana: si una elipsis o una anáfora deja dos candidatos, repite el nombre.",
        ],
        table: {
          caption: "Cómo retomar según lo que quieres recuperar",
          head: ["Quieres recuperar", "Forma", "Ejemplo"],
          rows: [
            ["una cualidad o un estado", "lo + ser, estar, parecer", "Parecía un error de redacción y lo era."],
            ["una acción ya mencionada", "hacerlo", "Si el club no ha pagado la fianza, deberá hacerlo antes del lunes."],
            ["lo último mencionado", "este, este último", "Hablaron el árbitro y el delegado; este último pidió la palabra."],
            ["dos listas en el mismo orden", "respectivamente", "Pilar y Jorge presiden y redactan, respectivamente."],
            ["un elemento en un texto formal", "dicho, tal + nombre", "Dicha cláusula se aplicará desde enero."],
          ],
        },
        mistakes: [
          {
            wrong: "—¿Estáis preparadas para la final? —Sí, las estamos.",
            right: "—¿Estáis preparadas para la final? —Sí, lo estamos.",
            why: "El atributo se sustituye por «lo», invariable aunque se hable de mujeres.",
          },
          {
            wrong: "El comité revisó la cláusula y la redacción de la misma.",
            right: "El comité revisó la cláusula y su redacción.",
            why: "«El mismo» como sustituto de un posesivo se desaconseja en la lengua cuidada.",
          },
          {
            wrong: "Jorge conoce bien el reglamento y Pilar lo hace también.",
            right: "Jorge conoce bien el reglamento y Pilar también.",
            why: "«Conocer» es un estado: no se retoma con «hacerlo», basta la elipsis con «también».",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero decide si hay ambigüedad y de dónde viene; después elige la forma que omite o retoma sin crear una nueva.",
    exercises: [
      {
        id: "c1-11-gramatica-lecturas",
        type: "context",
        prompt: "Lee la situación y elige la versión que deja una sola lectura, la que quiere quien escribe.",
        items: [
          {
            context: "El comité quiere decir que fueron los vecinos quienes protestaron contra el árbitro.",
            q: "¿Qué frase lo dice sin ambigüedad?",
            options: [
              "La protesta del árbitro fue atendida.",
              "La protesta de los vecinos contra el árbitro fue atendida.",
              "La protesta del árbitro de los vecinos fue atendida.",
            ],
            answer: 1,
            why: "«De» marca a quien protesta y «contra» a quien recibe la protesta.",
          },
          {
            context: "Solo los delegados que ya han sido sancionados antes recibirán una multa doble; los equipos, no.",
            q: "¿Qué redacción conviene?",
            options: [
              "Recibirán una multa doble los equipos y delegados reincidentes.",
              "Recibirán una multa doble los delegados y equipos reincidentes.",
              "Recibirán una multa doble los delegados reincidentes, pero no los equipos.",
            ],
            answer: 2,
            why: "Las dos primeras dejan dudoso el alcance de «reincidentes»; la tercera lo limita y lo dice.",
          },
          {
            context: "Marta, delegada del Torrero, avisó a Susana, del Delicias, de que la ficha de Susana estaba caducada.",
            q: "¿Qué frase evita la doble lectura?",
            options: [
              "Marta avisó a Susana de que su ficha estaba caducada.",
              "Marta avisó a Susana de que la ficha de esta estaba caducada.",
              "Marta avisó a Susana de que la misma ficha estaba caducada.",
            ],
            answer: 1,
            why: "«Esta» señala a la última mencionada, Susana; «su» admite las dos lecturas.",
          },
          {
            context: "La norma quiere que sea el árbitro, y no el delegado, quien firme el acta.",
            q: "¿Qué frase es precisa?",
            options: [
              "Es obligatorio que el árbitro firme el acta al acabar el partido.",
              "Existe la obligación de firmar el acta al acabar el partido.",
              "Firmar el acta al acabar el partido será obligación del mismo.",
            ],
            answer: 0,
            why: "«Que + subjuntivo» nombra al sujeto; el infinitivo solo no dice quién firma.",
          },
        ],
      },
      {
        id: "c1-11-gramatica-elipsis",
        type: "gap",
        prompt: "Completa con la forma que corresponde al nombre, al verbo o a la oración que se omite.",
        items: [
          { q: "Pedimos tres balones nuevos, pero no ha llegado ___.", answers: [["ninguno"]], why: "Sin el nombre, «ningún» pasa a «ninguno»." },
          { q: "El área de la portería está bien pintada; ___ del banquillo, no.", answers: [["la"]], why: "Sin el nombre, vuelve el artículo femenino." },
          { q: "—¿Las fichas ya están firmadas? —Sí, ya ___ están.", answers: [["lo"]], why: "«Lo» sustituye al atributo y no concuerda." },
          { q: "—¿Repetirán el partido? —El presidente me ha dicho que ___.", answers: [["sí", "no"]], why: "«Que sí» o «que no» resumen la oración tras «decir»." },
          { q: "A Jorge no le gusta la norma nueva y a mí ___.", answers: [["tampoco"]], why: "Coincidencia con una negación: «tampoco»." },
          { q: "Ganamos el primer partido y perdimos el ___.", answers: [["tercero", "segundo"]], why: "Sin el nombre, «tercer» pasa a «tercero»; «segundo» no cambia." },
        ],
      },
      {
        id: "c1-11-gramatica-recursos",
        type: "classify",
        prompt: "Clasifica cada frase según el recurso que usa para no repetir.",
        categories: ["Elipsis nominal", "Elipsis verbal o de oración", "Proforma: lo o hacerlo", "Anáfora textual"],
        items: [
          { text: "Prefiero tu propuesta a la de Jorge.", cat: 0, why: "«La de Jorge» omite «propuesta»." },
          { text: "—¿Vendrá el árbitro titular? —Espero que sí.", cat: 1, why: "«Que sí» recupera toda la oración." },
          { text: "Quien no haya pagado la cuota deberá hacerlo antes del viernes.", cat: 2, why: "«Hacerlo» retoma la acción de pagar la cuota." },
          { text: "El Delicias y el Oliver quedaron primero y segundo, respectivamente.", cat: 3, why: "«Respectivamente» reparte las dos listas en orden." },
          { text: "No queda ninguna pista libre, ni una.", cat: 0, why: "«Una» omite «pista»." },
          { text: "Parecía una sanción excesiva, y lo era.", cat: 2, why: "«Lo» retoma el atributo «una sanción excesiva»." },
          { text: "Pilar no estaba de acuerdo; Jorge, tampoco.", cat: 1, why: "Se omite el verbo y queda la polaridad." },
          { text: "Hablaron la presidenta y el árbitro; este último pidió calma.", cat: 3, why: "«Este último» señala al más cercano: el árbitro." },
        ],
      },
      {
        id: "c1-11-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un problema de ambigüedad, de elipsis o de anáfora. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "Revisamos el reglamento y aprobamos la modificación del mismo.",
            answers: ["Revisamos el reglamento y aprobamos su modificación.", "Revisamos el reglamento y aprobamos modificarlo."],
            why: "«El mismo» como pronombre se desaconseja: usa el posesivo o un clítico.",
          },
          {
            sentence: "—¿Están las capitanas listas? —Sí, las están.",
            answers: ["—¿Están las capitanas listas? —Sí, lo están."],
            why: "El atributo se retoma con «lo» invariable.",
          },
          {
            sentence: "Hay dos vestuarios, pero no está libre ningún.",
            answers: ["Hay dos vestuarios, pero no está libre ninguno."],
            why: "Sin el nombre, la forma es «ninguno».",
          },
          {
            sentence: "A Pilar le interesa la propuesta y yo también.",
            answers: ["A Pilar le interesa la propuesta y a mí también."],
            why: "Con «interesar», la elipsis conserva la «a»: «a mí también».",
          },
        ],
      },
      {
        id: "c1-11-gramatica-reformular",
        type: "open",
        prompt: "Reescribe cada borrador según la instrucción. Hay varias respuestas posibles: compara con el modelo y con la lista.",
        items: [
          {
            prompt: "Borrador del comité: «La sanción del entrenador del Oliver fue revisada después de la queja del delegado». Quien escribe quiere decir que el entrenador fue sancionado y que el delegado se quejó al comité. Reescríbelo con una sola lectura posible.",
            model: "La sanción impuesta al entrenador del Oliver se revisó después de que el delegado presentara una queja ante el comité.",
            checklist: [
              "Marco con «al» o con un participio quién recibe la sanción.",
              "Nombro a quién se dirige la queja.",
              "Releo la frase buscando otro «de» dudoso.",
            ],
          },
          {
            prompt: "Borrador del acta: «Jorge propuso cambiar la hora del partido. Pilar propuso cambiar la hora del partido. Marta no propuso cambiar la hora del partido, propuso cambiar el pabellón. El cambio de pabellón es caro; el cambio de pabellón es necesario». Redúcelo a dos frases con elipsis verbal, una proforma y una anáfora.",
            model: "Jorge propuso cambiar la hora del partido y Pilar también; Marta no, ella prefería cambiar el pabellón. Esta última opción es cara, pero lo es menos que perder la temporada.",
            checklist: [
              "Uso «también» y «no» para no repetir el verbo.",
              "Retomo una opción con una anáfora que no deja dos candidatos.",
              "Uso «lo» o «hacerlo» correctamente.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de un reglamento deportivo y de las discusiones sobre cómo interpretarlo.",
    groups: [
      {
        title: "La liga y su reglamento",
        items: [
          { es: "el comité de competición", note: "órgano que aplica el reglamento y resuelve los conflictos" },
          { es: "la cláusula", note: "cada una de las disposiciones de un reglamento o un contrato" },
          { es: "la alineación indebida", note: "hacer jugar a alguien que no tenía derecho a jugar" },
          { es: "la ficha", note: "documento que inscribe a una persona en un equipo" },
          { es: "el desempate", note: "criterio para ordenar a dos equipos con los mismos puntos" },
          { es: "el gol average", note: "diferencia entre goles marcados y recibidos" },
          { es: "recurrir una decisión", note: "pedir formalmente que se revise" },
          { es: "dar por bueno", note: "aceptar algo como válido" },
        ],
      },
      {
        title: "Interpretar un texto",
        items: [
          { es: "prestarse a confusión", note: "permitir que alguien entienda otra cosa" },
          { es: "la redacción", note: "forma concreta en que está escrito un texto" },
          { es: "el espíritu de la norma", note: "la intención con la que se escribió" },
          { es: "la letra de la norma", note: "lo que dice literalmente" },
          { es: "agarrarse a una palabra", note: "aprovechar una palabra para defender una lectura interesada" },
          { es: "zanjar una cuestión", note: "resolverla de forma definitiva" },
          { es: "un vacío normativo", note: "situación que el reglamento no prevé" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-11-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la alineación indebida", right: "hacer jugar a alguien que no tenía derecho a jugar" },
          { left: "el espíritu de la norma", right: "la intención con la que se escribió" },
          { left: "agarrarse a una palabra", right: "aprovechar una palabra para defender una lectura interesada" },
          { left: "zanjar una cuestión", right: "resolverla de forma definitiva" },
          { left: "un vacío normativo", right: "situación que el reglamento no prevé" },
          { left: "el desempate", right: "criterio para ordenar a dos equipos con los mismos puntos" },
          { left: "recurrir una decisión", right: "pedir formalmente que se revise" },
        ],
      },
      {
        id: "c1-11-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["se presta a confusión", "la letra", "fichas", "dio por bueno", "redacción"],
        items: [
          { q: "La cláusula sobre los suplentes ___: cada delegado la lee a su manera.", answers: [["se presta a confusión"]] },
          { q: "Según ___ del reglamento, el gol en propia puerta no cuenta para el desempate.", answers: [["la letra"]] },
          { q: "Antes del primer partido hay que entregar las ___ de todas las jugadoras.", answers: [["fichas"]] },
          { q: "El árbitro ___ el gol aunque el balón había tocado el techo.", answers: [["dio por bueno"]] },
          { q: "La nueva ___ del artículo cinco cabe en dos líneas y no admite dudas.", answers: [["redacción"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La pausa que deshace una ambigüedad y la coma de la elipsis",
    explanation: [
      "En la lengua hablada, la pausa y la entonación separan lecturas que en la escritura pueden confundirse. «Jugadores y entrenadores | sancionados», con pausa antes del adjetivo, sugiere que todos están sancionados; «jugadores | y entrenadores sancionados», con la pausa antes, aplica el adjetivo solo a los entrenadores. Del mismo modo, «No, | quiero que lo revises» (rechazo y petición) no es «No quiero que lo revises».",
      "La elipsis verbal también se oye: donde falta el verbo hay una pausa breve y la voz se mantiene suspendida antes del complemento: «El Delicias ganó en casa, y el Torrero | fuera». En las respuestas cortas, «sí» y «también» llevan acento fuerte y cierran el grupo: «Yo SÍ», «A mí TAMBIÉN».",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir las pausas y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "Misma secuencia de palabras, distinta pausa",
      head: ["Pausa", "Lectura"],
      rows: [
        ["No, | quiero que lo firmes.", "rechazo algo y te pido que firmes"],
        ["No quiero que lo firmes.", "no deseo que firmes"],
        ["Las jugadoras y las delegadas | nuevas", "todas son nuevas"],
        ["Las jugadoras | y las delegadas nuevas", "solo las delegadas son nuevas"],
      ],
    },
    perceive: {
      id: "c1-11-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué lectura transmite la pausa.",
      items: [
        {
          q: "¿Qué quiere decir quien habla?",
          options: ["Rechaza algo y pide que se firme el acta.", "No desea que se firme el acta."],
          answer: 0,
          why: "Hay pausa después de «no»: rechazo y luego petición.",
          audio: "No, quiero que firmes el acta hoy.",
          voice: "es-ES-f",
        },
        {
          q: "¿A quién afecta «nuevas»?",
          options: ["Solo a las delegadas.", "A las jugadoras y a las delegadas."],
          answer: 1,
          why: "La pausa va justo antes de «nuevas», que se aplica al conjunto.",
          audio: "Hoy se presentan las jugadoras y las delegadas, nuevas.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué palabra recibe el acento fuerte en la respuesta?",
          options: ["mí", "también", "a"],
          answer: 1,
          why: "En la respuesta corta, la palabra de polaridad cierra el grupo con fuerza.",
          audio: "A mí también me pareció un error de redacción.",
          voice: "es-CO-f",
        },
        {
          q: "¿Dónde se oye el hueco del verbo omitido?",
          options: ["Después de «Torrero»", "Después de «ganó»", "No hay hueco"],
          answer: 0,
          why: "La voz queda suspendida tras «Torrero», donde falta «ganó».",
          audio: "El Delicias ganó en casa y el Torrero, fuera.",
          voice: "es-ES-m",
        },
      ],
    },
    produce: [
      { text: "Los jugadores y los entrenadores sancionados no podrán entrar al banquillo.", tip: "Léelo dos veces: con pausa antes de «sancionados» y con pausa antes de «y los entrenadores». Nota cómo cambia la lectura.", voice: "es-ES-m" },
      { text: "Pilar votó a favor; Jorge, en contra.", tip: "Deja la voz suspendida tras «Jorge» y baja el tono al final.", voice: "es-ES-f" },
      { text: "—¿Recurrirá el club? —Creo que sí.", tip: "«Sí» con acento fuerte, cerrando el grupo.", voice: "es-CO-f" },
      { text: "Parecía un simple error y lo era.", tip: "Sin pausa entre «lo» y «era»: el pronombre es átono.", voice: "es-ES-m" },
    ],
    spelling: "La coma marca el verbo omitido en la elipsis («el Torrero, fuera»), pero nunca separa el sujeto del verbo cuando el verbo está presente.",
  },
  listening: {
    title: "Un artículo, dos lecturas",
    context: "En un local municipal del barrio de Delicias, el comité de competición de una liga vecinal de fútbol sala se reúne para resolver el empate de la temporada. Pilar preside, Jorge redacta las actas y Daniela, delegada colombiana de un equipo, defiende una de las dos lecturas del reglamento. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "p", name: "Pilar", voice: "es-ES-f", role: "Presidenta del comité" },
      { id: "j", name: "Jorge", voice: "es-ES-m", role: "Secretario, redacta las actas" },
      { id: "d", name: "Daniela", voice: "es-CO-f", role: "Delegada del Torrero" },
    ],
    script: [
      { speaker: "p", text: "Empezamos. El Delicias y el Torrero han terminado con los mismos puntos y cada uno dice que es campeón. Jorge, lee el artículo doce, por favor." },
      { speaker: "j", text: "«En caso de empate, se tendrán en cuenta los goles marcados en los partidos entre ambos equipos y los disputados fuera de casa.» Eso es todo lo que dice." },
      { speaker: "d", text: "Pues para nosotros está clarísimo: cuentan los goles de los partidos entre los dos equipos y, además, los de todos los partidos fuera de casa. Ahí el Torrero gana de lejos." },
      { speaker: "j", text: "El Delicias lo lee al revés: entiende que «los disputados fuera de casa» son solo los partidos entre ambos equipos jugados fuera. Con esa lectura, ganan ellos por un gol." },
      { speaker: "p", text: "O sea, que el problema no es el resultado, es la frase. ¿Alguien recuerda quién la redactó?" },
      { speaker: "j", text: "La redactó la junta anterior, y la revisó un abogado del barrio. Él dijo que estaba bien; la junta, también. Nadie vio el problema hasta que hizo falta aplicarla." },
      { speaker: "d", text: "Yo no digo que la frase sea perfecta. No lo es. Pero el espíritu de la norma era premiar a quien gana fuera, y eso lo sabe todo el mundo." },
      { speaker: "p", text: "Que lo sepa todo el mundo no lo convierte en reglamento. Mira, Daniela, si el texto admite dos lecturas plausibles, no podemos agarrarnos a una solo porque nos conviene. A mí tampoco me gusta, pero es así." },
      { speaker: "d", text: "¿Entonces qué proponen? ¿Un partido de desempate? Las jugadoras del Torrero no querrán jugarlo; las del Delicias, quizá sí." },
      { speaker: "j", text: "Hay dos opciones: compartir el título o jugar un partido en campo neutral. La primera es más barata; la segunda, más justa. Yo prefiero esta última." },
      { speaker: "p", text: "Yo también. Pero, sea cual sea la decisión, el artículo doce hay que reescribirlo antes de septiembre. Jorge, ¿puedes hacerlo tú?" },
      { speaker: "j", text: "Puedo, siempre que alguien lo revise antes de la asamblea. Y esta vez lo revisará una persona que no haya estado en la junta, para que lea el texto con ojos nuevos." },
      { speaker: "d", text: "Me parece bien. Y que diga «respectivamente» si hace falta, aunque suene a notaría." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin abrir la transcripción. ¿Cuál es el problema y qué deciden?",
        exercise: {
          id: "c1-11-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Por qué hay dos equipos que se dicen campeones?",
              options: [
                "Porque el árbitro anuló un gol decisivo.",
                "Porque una alineación indebida cambió la clasificación.",
                "Porque el artículo del desempate admite dos lecturas.",
              ],
              answer: 2,
              why: "Los dos equipos aplican de manera distinta la misma frase del artículo doce.",
            },
            {
              q: "¿En qué están de acuerdo al final?",
              options: [
                "En que el artículo hay que reescribirlo y revisarlo con ojos nuevos.",
                "En que el Torrero tiene razón según el espíritu de la norma.",
                "En que no hay que cambiar nada hasta la próxima temporada.",
              ],
              answer: 0,
              why: "Pilar pide reescribirlo antes de septiembre y Jorge acepta si alguien externo lo revisa.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cómo lee cada equipo el artículo y qué opciones hay.",
        exercise: {
          id: "c1-11-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Cómo lee el Torrero «los disputados fuera de casa»?",
              options: [
                "Como todos los partidos fuera de casa de la temporada.",
                "Como los partidos entre ambos jugados fuera.",
                "Como los partidos aplazados.",
              ],
              answer: 0,
              why: "Daniela suma los goles de todos los partidos fuera de casa.",
            },
            {
              q: "¿Qué opción prefiere Jorge?",
              options: ["Compartir el título.", "Jugar un partido en campo neutral.", "Recurrir a la federación."],
              answer: 1,
              why: "«La segunda, más justa. Yo prefiero esta última.»",
            },
            {
              q: "¿Qué condición pone Jorge para reescribir el artículo?",
              options: [
                "Que lo apruebe el abogado del barrio.",
                "Que la junta anterior lo firme.",
                "Que lo revise alguien que no haya estado en la junta.",
              ],
              answer: 2,
              why: "Quiere una lectura «con ojos nuevos».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en qué recurso usa cada frase. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-11-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la reunión con el recurso que pone en juego.",
          pairs: [
            { left: "los goles marcados en los partidos entre ambos equipos y los disputados fuera de casa", right: "complemento con dos anclajes posibles" },
            { left: "Él dijo que estaba bien; la junta, también.", right: "elipsis verbal con coma y polaridad" },
            { left: "No digo que la frase sea perfecta. No lo es.", right: "«lo» que retoma un atributo" },
            { left: "La primera es más barata; la segunda, más justa. Yo prefiero esta última.", right: "anáfora ordinal y demostrativa" },
            { left: "¿Puedes hacerlo tú?", right: "proforma que retoma una acción" },
            { left: "las del Delicias, quizá sí", right: "elipsis nominal y de oración" },
          ],
          why: "La reunión gira en torno a una ambigüedad y la discute con elipsis, proformas y anáforas.",
        },
      },
    ],
  },
  reading: {
    title: "El artículo doce o cómo tener dos campeones",
    genre: "Columna de opinión en una revista de barrio",
    frame: "Columna publicada en una revista vecinal de Zaragoza. La liga, los equipos y las personas son ficticios.",
    text: [
      "Cada junio, la liga vecinal de fútbol sala de Delicias cierra la temporada con una cena en el local de la asociación y una copa que pasa de un equipo a otro. Este año hubo cena, pero no hubo copa. El Delicias y el Torrero empataron a puntos, y los dos se proclamaron campeones con el reglamento en la mano. Ninguno mentía. El problema estaba en una sola frase del artículo doce, una frase que llevaba seis años en el reglamento sin que nadie la hubiera leído con atención.",
      "La frase decía que, en caso de empate, se tendrían en cuenta «los goles marcados en los partidos entre ambos equipos y los disputados fuera de casa». El Torrero la leyó así: cuentan los goles de los enfrentamientos directos y, además, los de todos los partidos jugados fuera. El Delicias, de otra manera: «los disputados fuera de casa» serían solo los enfrentamientos directos jugados fuera. Las dos lecturas son gramaticalmente posibles y, lo que es peor, las dos son plausibles. La elipsis de «partidos» dejaba dos candidatos a la vista, y cada equipo eligió el que le daba el título.",
      "Lo curioso es que la frase había pasado por tres controles. La redactó la junta de entonces, la revisó un abogado del barrio y la aprobó la asamblea. El abogado dijo que estaba bien; la asamblea, también. Nadie mentía tampoco entonces: quien escribe una norma conoce su intención y la lee siempre con ella, de modo que la segunda lectura le resulta invisible. Por eso los correctores profesionales recomiendan que revise el texto alguien que no haya participado en su redacción.",
      "Durante dos semanas, el barrio discutió con un entusiasmo que no se veía desde la final de 2019. En el bar de la plaza se repartían fotocopias del artículo subrayadas con dos colores. Unos invocaban el espíritu de la norma, que, según ellos, quería premiar a quien gana fuera; otros se agarraban a la letra, que no decía tal cosa. Daniela Ruiz, delegada del Torrero, lo resumió en el local de la asociación: «No digo que la frase sea perfecta. No lo es. Pero todo el mundo sabía lo que quería decir». La presidenta del comité, Pilar Lasheras, le contestó con una frase que ya circula por el barrio: «Que lo sepa todo el mundo no lo convierte en reglamento».",
      "Al final, el comité hizo lo único razonable: reconoció la ambigüedad, propuso un partido de desempate en campo neutral y encargó al secretario, Jorge Abadía, la nueva redacción. Este la presentará en la asamblea de septiembre, y esta vez la revisará una vecina que no ha jugado nunca en la liga. El borrador que circula es menos elegante, pero no deja dudas: «se tendrán en cuenta, por este orden, los goles marcados en los partidos entre los dos equipos empatados y, en segundo lugar, los goles marcados por cada uno de ellos en todos sus partidos fuera de casa».",
      "La historia tiene una moraleja que va más allá del fútbol sala. Omitir una palabra, retomar un nombre con un pronombre o dejar un adjetivo detrás de dos sustantivos son recursos útiles: hacen los textos más ligeros y más agradables de leer. Pero cada omisión es una pequeña apuesta a que el lector recuperará lo mismo que tú. En una carta a un amigo, perder esa apuesta cuesta una aclaración. En un reglamento, en un contrato o en un acta, puede costar una copa, una indemnización o una amistad. Ante la duda, repite el nombre: la claridad va antes que la elegancia. El partido de desempate, por cierto, lo ganó el Torrero. El Delicias recurrió. La copa, de momento, sigue en el armario de la asociación.",
    ],
    glossary: [
      { es: "enfrentamiento directo", note: "partido entre los dos equipos que se comparan" },
      { es: "campo neutral", note: "instalación que no es la de ninguno de los dos equipos" },
      { es: "moraleja", note: "enseñanza que se saca de una historia" },
    ],
    tasks: [
      {
        id: "c1-11-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la columna.",
        items: [
          {
            q: "¿Por qué nadie vio el problema durante seis años?",
            options: [
              "Porque hasta ahora nunca había habido un empate que obligara a aplicar la frase.",
              "Porque el artículo se había añadido ese mismo año.",
              "Porque el abogado había ocultado el error.",
            ],
            answer: 0,
            why: "La columna dice que la frase llevaba seis años sin que nadie la leyera con atención.",
          },
          {
            q: "Según la columnista, ¿por qué quien redacta no ve la segunda lectura?",
            options: [
              "Porque no conoce bien la gramática.",
              "Porque lee el texto con su intención en la cabeza.",
              "Porque escribe demasiado deprisa.",
            ],
            answer: 1,
            why: "«Quien escribe una norma conoce su intención y la lee siempre con ella.»",
          },
          {
            q: "¿Cómo termina la historia?",
            options: [
              "El Delicias acepta la derrota y entrega la copa.",
              "Los dos equipos comparten la copa.",
              "El Torrero gana el desempate, pero la copa sigue sin entregarse.",
            ],
            answer: 2,
            why: "El Delicias recurrió y la copa sigue en el armario.",
          },
        ],
      },
      {
        id: "c1-11-lectura-recursos",
        type: "match",
        prompt: "Relaciona cada fragmento de la columna con el recurso que usa.",
        pairs: [
          { left: "Ninguno mentía.", right: "elipsis nominal con forma plena de «ningún»" },
          { left: "El abogado dijo que estaba bien; la asamblea, también.", right: "elipsis verbal marcada con coma" },
          { left: "El Delicias, de otra manera", right: "verbo omitido que se recupera de la frase anterior" },
          { left: "Este la presentará en la asamblea de septiembre", right: "demostrativo que retoma al último mencionado" },
          { left: "No lo es.", right: "proforma de atributo" },
        ],
      },
      {
        id: "c1-11-lectura-evaluacion",
        type: "open",
        prompt: "Analiza la columna como texto.",
        items: [
          {
            prompt: "Compara la frase original del artículo doce con el borrador nuevo del quinto párrafo. Explica en 80–100 palabras qué recursos usa el borrador para eliminar la ambigüedad y qué se pierde a cambio.",
            model: "El borrador repite el nombre «goles marcados» en lugar de omitirlo, de modo que el lector ya no tiene que recuperar un núcleo con dos candidatos. Además, «por este orden» y «en segundo lugar» convierten la suma ambigua en una secuencia de criterios, y «por cada uno de ellos en todos sus partidos fuera de casa» explicita el alcance que antes quedaba abierto. A cambio, la frase es más larga y menos elegante, pero en un reglamento esa pérdida importa menos que la seguridad de una sola lectura.",
            checklist: [
              "Identifico al menos dos recursos concretos del borrador.",
              "Explico qué ambigüedad elimina cada uno.",
              "Valoro qué se pierde a cambio.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la columna describe una ambigüedad y, a la vez, omite y retoma sin crear otras.",
      items: [
        { quote: "los goles marcados en los partidos entre ambos equipos y los disputados fuera de casa", note: "Elipsis de «partidos» con dos anclajes posibles: el origen del conflicto." },
        { quote: "La elipsis de «partidos» dejaba dos candidatos a la vista", note: "La columnista nombra el problema: más de un núcleo compatible." },
        { quote: "El abogado dijo que estaba bien; la asamblea, también.", note: "Elipsis verbal con coma y «también»: aquí no hay duda posible." },
        { quote: "No digo que la frase sea perfecta. No lo es.", note: "«Lo» retoma el atributo «perfecta», sin concordar." },
        { quote: "Que lo sepa todo el mundo no lo convierte en reglamento", note: "Dos «lo» que retoman una oración entera: lo que todos saben." },
        { quote: "Ante la duda, repite el nombre: la claridad va antes que la elegancia.", note: "La regla práctica de la semana, formulada como consejo." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención, relación de formas y escritura guiada sobre las dos clases de la semana.",
    exercises: [
      {
        id: "c1-11-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases del acta del comité.",
        items: [
          {
            words: ["El", "Torrero", "votó", "a", "favor", "y", "el", "Delicias,", "en", "contra."],
            why: "Elipsis verbal: la coma marca el verbo omitido.",
          },
          {
            words: ["La", "queja", "del", "delegado", "al", "árbitro", "llegó", "tarde."],
            why: "«De» para quien se queja y «a» para quien recibe la queja.",
          },
          {
            words: ["Quien", "quiera", "recurrir", "podrá", "hacerlo", "hasta", "el", "lunes."],
            why: "«Hacerlo» retoma la acción de recurrir.",
          },
        ],
      },
      {
        id: "c1-11-intencion",
        type: "context",
        prompt: "Elige la frase que corresponde a la intención descrita.",
        items: [
          {
            context: "Quieres responder que estás de acuerdo con una compañera que dice: «No me convence compartir el título».",
            q: "¿Qué respondes?",
            options: ["Yo también.", "A mí tampoco.", "A mí también."],
            answer: 1,
            why: "Con «convencer» se usa «a mí», y se coincide con una negación: «tampoco».",
          },
          {
            context: "En un acta tienes que decir que Pilar y Jorge firmaron como presidenta y como secretario, en ese orden.",
            q: "¿Qué frase eliges?",
            options: [
              "Firmaron Pilar y Jorge, como presidenta y secretario, respectivamente.",
              "Firmaron Pilar y Jorge como la misma y el mismo.",
              "Firmaron Pilar y Jorge, este último como presidenta.",
            ],
            answer: 0,
            why: "«Respectivamente» reparte las dos listas en orden.",
          },
          {
            context: "Te preguntan si las fichas están revisadas. Lo están.",
            q: "¿Qué respuesta es correcta y natural?",
            options: ["Sí, las están.", "Sí, lo hacen.", "Sí, ya lo están."],
            answer: 2,
            why: "«Lo» invariable retoma el atributo «revisadas».",
          },
          {
            context: "Quieres decir que fue la presidenta quien recibió críticas de los socios.",
            q: "¿Qué frase no deja dudas?",
            options: [
              "Las críticas de la presidenta fueron duras.",
              "Las críticas de los socios a la presidenta fueron duras.",
              "Las críticas de la presidenta de los socios fueron duras.",
            ],
            answer: 1,
            why: "«De» marca a quien critica y «a» a quien recibe la crítica.",
          },
        ],
      },
      {
        id: "c1-11-formas",
        type: "match",
        prompt: "Relaciona cada forma con lo que recupera.",
        pairs: [
          { left: "ninguno", right: "un nombre masculino omitido tras una negación" },
          { left: "que sí", right: "una oración entera tras un verbo de opinión o de lengua" },
          { left: "lo es", right: "un atributo de «ser»" },
          { left: "hacerlo", right: "una acción ya mencionada con sus complementos" },
          { left: "este último", right: "el candidato más cercano en el texto" },
          { left: "respectivamente", right: "el reparto en orden de dos listas" },
        ],
      },
      {
        id: "c1-11-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Busca en tu memoria una norma de tu trabajo, tu edificio o tu club que alguien entendió de otra manera. Escribe 60–80 palabras: cita la frase, explica las dos lecturas y propone una versión con una sola.",
            model: "En mi edificio, el aviso decía: «Las bicicletas y los carritos de niños plegados pueden dejarse en el portal». Unos vecinos entendieron que solo los carritos tenían que estar plegados; otros, que también las bicicletas, lo cual es imposible. Yo propondría: «Pueden dejarse en el portal las bicicletas y, si están plegados, los carritos de niños». Así el adjetivo afecta solo a lo que puede plegarse.",
            checklist: [
              "Cito la frase original y explico las dos lecturas.",
              "Identifico la fuente de la ambigüedad.",
              "Mi versión deja una sola lectura.",
            ],
          },
          {
            prompt: "Escribe un resumen de 50–70 palabras de una reunión en la que tres personas opinaron sobre algo. Usa al menos una elipsis verbal con coma, un «que sí» o «que no», un «lo» de atributo y «respectivamente» o «este último».",
            model: "Ana propuso cambiar el horario de la reunión y Luis, el lugar. Marta no tenía preferencia, aunque cree que sí habrá que cambiar algo. El horario actual parece incómodo, y lo es para quien trabaja por la tarde. Al final, Ana y Luis se encargarán de la encuesta y del local, respectivamente.",
            checklist: [
              "Uso los cuatro recursos pedidos.",
              "Ninguna omisión deja dos candidatos.",
              "El resumen se entiende sin haber estado en la reunión.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una propuesta de reforma (230–320 palabras) de una norma que conozcas y que se preste a confusión: un reglamento de comunidad, las bases de un concurso, una política de empresa o las normas de un club. Cita la redacción actual, explica las dos lecturas y sus consecuencias, y propón una nueva redacción que solo admita una.",
    context: "La propuesta se presentará por escrito en la próxima asamblea o reunión del grupo que aprueba la norma. Quienes la lean conocen la norma, pero no han pensado en su ambigüedad, y algunos defienden una de las dos lecturas porque les conviene.",
    steps: [
      "Copia la frase actual y subraya la palabra o la omisión que produce la doble lectura (un «de», un adjetivo, un «su», un infinitivo, una elipsis).",
      "Escribe las dos lecturas con palabras propias y una consecuencia práctica de cada una.",
      "Redacta la propuesta en tres párrafos: el problema, las dos lecturas y la nueva redacción con su justificación.",
      "Revisa el texto con la lista de control y pide a alguien que no conozca la norma que lea tu nueva redacción.",
    ],
    useLanguage: [
      "la redacción actual se presta a confusión",
      "admite dos lecturas: según la primera…; según la segunda…",
      "de + agente, a / por parte de + paciente",
      "que + subjuntivo con sujeto explícito",
      "elipsis con coma, también, tampoco, que sí, que no",
      "lo es, hacerlo, este último, respectivamente, dicho artículo",
    ],
    model: [
      "Propongo a la asamblea de vecinos que modifiquemos el punto cuatro de las normas del jardín comunitario, cuya redacción actual se presta a confusión. Dice así: «Los vecinos y los invitados menores de doce años deberán estar acompañados en la zona de huertos». Durante el verano, esta frase ha provocado al menos tres discusiones, y no por mala fe: simplemente admite dos lecturas plausibles.",
      "Según la primera, la condición de ser menor de doce años afecta solo a los invitados, de modo que cualquier vecino, tenga la edad que tenga, puede entrar solo en los huertos. Según la segunda, afecta a vecinos e invitados por igual, y lo que la norma pretende es que ningún menor esté sin un adulto. La primera lectura deja sin protección a los niños del edificio; la segunda, que es la que defendía la junta cuando la aprobó, los incluye. Algunos vecinos se agarran a la primera porque les permite mandar a sus hijos solos a regar; otros, a la segunda. Ninguno se equivoca leyendo: el problema es la frase.",
      "Propongo, por tanto, la siguiente redacción: «Todas las personas menores de doce años, sean vecinas o invitadas, deberán estar acompañadas por un adulto en la zona de huertos». La nueva versión repite el nombre en lugar de omitirlo, pone el límite de edad delante y nombra a quien acompaña. Es algo más larga, pero lo es por una buena razón: solo admite una lectura. Pido que la nueva redacción la revise, antes de votarla, alguien que no haya participado en la junta anterior.",
    ],
    checklist: [
      "Cito la redacción actual y señalo exactamente dónde está la ambigüedad.",
      "Explico las dos lecturas y una consecuencia práctica de cada una.",
      "Mi nueva redacción solo admite una lectura y la justifico.",
      "Uso elipsis, «lo», «hacerlo» o anáforas sin dejar dos candidatos.",
      "El texto tiene al menos tres párrafos y un registro adecuado para una asamblea.",
    ],
    words: [230, 320],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Explicar una norma ambigua ante una asamblea",
        prompt: "Presenta durante cuatro minutos, ante una asamblea, una norma que se presta a confusión (la del artículo doce o una tuya). Lee la frase, explica las dos lecturas sin tomar partido al principio, cuenta qué consecuencias tiene cada una y propone una nueva redacción. Usa pausas para que se oigan las dos lecturas.",
        prep: [
          "Escribe la frase en una tarjeta y marca con una barra dónde harías la pausa para cada lectura.",
          "Prepara dos frases con «según la primera lectura…» y «según la segunda…».",
          "Anota tu nueva redacción y una razón para preferirla.",
        ],
        seconds: 240,
        model: "Buenas tardes. Quiero hablar del artículo doce. Dice: «los goles marcados en los partidos entre ambos equipos y los disputados fuera de casa». Si hago la pausa aquí, «y los disputados fuera de casa», parece que cuentan todos los partidos fuera; si la hago antes, parece que solo cuentan los directos jugados fuera. Las dos lecturas son plausibles, y cada equipo ha elegido la suya. No digo que alguien mienta; no lo hace. Propongo repetir el nombre y ordenar los criterios: primero, los goles de los partidos entre los dos; después, los de cada uno fuera de casa.",
        selfCheck: [
          "Presento las dos lecturas con claridad y sin tomar partido al principio.",
          "Uso la pausa para que se oiga cada lectura.",
          "Propongo una redacción con una sola lectura y la justifico.",
        ],
      },
      {
        title: "Aclarar un malentendido",
        prompt: "Un compañero te escribe enfadado: «Me dijiste que la reunión con el cliente y la cena eran el jueves, y la cena era el viernes». Llámalo, pregúntale qué entendió exactamente, reconoce la frase ambigua y aclara qué querías decir. Termina proponiendo cómo evitarlo la próxima vez.",
        prep: [
          "Prepara dos preguntas para entender qué oyó tu compañero.",
          "Ten a mano «yo quería decir que…», «lo entiendo, la frase lo permitía» y «la próxima vez lo pondré por separado».",
        ],
        seconds: 150,
        model: "Oye, perdona por lo de la cena. ¿Qué te dije exactamente? ¿Que las dos cosas eran el jueves? Lo entiendo, la frase lo permitía. Yo quería decir que la reunión era el jueves y la cena, el viernes, pero me comí el segundo día. ¿Te causó algún problema con el hotel? La próxima vez lo pondré por separado y con la fecha de cada cosa, para que no haya dudas.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Reconozco la ambigüedad sin culpar al otro.",
          "Reformulo con una sola lectura usando una elipsis bien marcada.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase una frase ambigua que hayas encontrado esta semana y tu propuesta de reforma.",
    cards: [
      {
        move: "Detecta",
        task: "Lee a tu profesor una frase de un titular, un correo o un cartel que admita dos lecturas y pídele que descubra la segunda antes de explicarla.",
        phrases: ["¿Cómo la entiendes tú?", "Yo la leí de otra manera."],
      },
      {
        move: "Reformula",
        task: "Pide a tu profesor que te dicte tres frases ambiguas y reescríbelas en voz alta con una sola lectura.",
        phrases: ["Si quiero decir que…, repito el nombre.", "Mejor con «a» que con «de»."],
      },
      {
        move: "Resume",
        task: "Resume en un minuto una conversación reciente usando elipsis verbal, «que sí» o «que no» y «respectivamente».",
        phrases: ["Ella, que sí; él, que no.", "…respectivamente."],
      },
      {
        move: "Pregunta",
        task: "Pregúntale a tu profesor si «el mismo» como pronombre le suena normal en la prensa de su país y qué usaría en su lugar.",
        phrases: ["¿Te suena bien «la publicación del mismo»?", "¿Qué pondrías tú?"],
      },
    ],
    bring: "Tu frase ambigua, la propuesta de reforma revisada y, si quieres, la grabación de la asamblea.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«La denuncia del jugador se archivó.» ¿Por qué puede ser ambigua?",
        options: [
          "Porque no se sabe si el jugador denunció o fue denunciado.",
          "Porque «archivar» no admite sujeto.",
          "Porque falta el artículo delante de «jugador».",
        ],
        answer: 0,
        why: "Con un nombre de acción, «de» puede introducir al agente o al paciente.",
      },
      {
        type: "choice",
        q: "¿Qué respuesta es correcta a «¿Están satisfechas las socias?»?",
        options: ["Sí, las están.", "Sí, lo hacen.", "Sí, lo están."],
        answer: 2,
        why: "«Lo» invariable sustituye al atributo de «estar».",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿A quién afecta el adjetivo final?",
        options: [
          "Solo a los entrenadores.",
          "A los árbitros y a los entrenadores.",
          "A nadie: es un error.",
        ],
        answer: 1,
        why: "La pausa antes de «veteranos» lo aplica a los dos grupos.",
        audio: "Asistirán al curso los árbitros y los entrenadores, veteranos.",
        voice: "es-ES-m",
      },
      {
        type: "gap",
        q: "Quedan dos plazas en el torneo, pero no tengo ___ equipo; ¿tú tienes ___?",
        answers: [["ningún"], ["uno", "alguno"]],
        hint: "Delante del nombre la forma es breve; sin el nombre, recupera la vocal final.",
        why: "«Ningún equipo» con nombre; «uno» o «alguno» sin él.",
      },
      {
        type: "gap",
        q: "Si todavía no has enviado la ficha, tendrás que ___ antes del viernes.",
        answers: [["hacerlo", "enviarla"]],
        hint: "Retoma la acción de enviar la ficha con una proforma o con el verbo y un clítico.",
        why: "«Hacerlo» retoma una acción ya mencionada; «enviarla» repite el verbo.",
      },
      {
        type: "error",
        sentence: "El club aprobó el presupuesto y la publicación del mismo.",
        answers: ["El club aprobó el presupuesto y su publicación.", "El club aprobó el presupuesto y publicarlo."],
        why: "«El mismo» no debe usarse como simple sustituto del posesivo.",
      },
      {
        type: "error",
        sentence: "A Jorge le convence la propuesta y yo también.",
        answers: ["A Jorge le convence la propuesta y a mí también."],
        why: "Con «convencer», la elipsis mantiene la «a»: «a mí también».",
      },
      {
        type: "order",
        words: ["Marta", "eligió", "el", "pabellón", "y", "Pilar,", "la", "hora."],
        why: "Elipsis verbal: la coma marca el «eligió» omitido.",
      },
      {
        type: "open",
        prompt: "Reescribe en una sola frase clara: «El temor a perder el local preocupa a la asociación». Quien escribe quiere decir que la asociación teme que el ayuntamiento le quite el local. Después, explica en una línea qué cambiaste.",
        model: "A la asociación le preocupa que el ayuntamiento le retire el local. He sustituido el infinitivo sin sujeto por «que + subjuntivo» y he nombrado a quien haría la acción.",
        checklist: [
          "Nombro a quien quitaría el local.",
          "Uso «que + subjuntivo» con sujeto explícito.",
          "Explico el cambio con mis palabras.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Detecto cuándo una frase admite dos lecturas plausibles y de dónde viene la ambigüedad.",
      "Dejo una sola lectura con «de» y «a», con el orden, repitiendo el nombre o pasando a «que + subjuntivo».",
      "Omito nombres y verbos con las formas correctas: uno, ninguno, la de, el tercero, también, tampoco, que sí.",
      "Retomo atributos, acciones y elementos del texto con lo, hacerlo, este último y respectivamente, sin usar «el mismo» como pronombre.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Cinco fuentes de ambigüedad» y escribe un ejemplo tuyo de cada fuente.",
      "Dentro de una semana, busca en la prensa un titular con «nombre + de» y decide si es ambiguo en su contexto.",
      "En la próxima clase, lee tu propuesta de reforma y pide a tu profesor que intente defender la lectura que querías eliminar.",
    ],
  },
  related: [
    { path: "/cuando-una-frase-puede-significar-dos-cosas", label: "Clase: Ambigüedad sintáctica y dos interpretaciones" },
    { path: "/gramatica/elipsis-verbal-nominal-y-anaforica-avanzadas", label: "Clase: Elipsis verbal, nominal y anafórica avanzadas" },
  ],
};
