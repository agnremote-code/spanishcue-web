import type { Module } from "../../types";

/**
 * C1 · semana 20 · Checkpoint. Autoestudio espejo de G203 (oraciones
 * restrictivas, explicativas y puntuación) y G204 (revisión argumentativa C1:
 * coherencia, cohesión y matiz), con integración de las semanas 16 a 19.
 * Repaso autónomo con la columna de un estudiante sobre el horario de una
 * biblioteca universitaria ficticia de Córdoba. Audio mediante síntesis; sin
 * acreditación regional.
 */
export const c1w20: Module = {
  id: "c1-20",
  level: "c1",
  week: 20,
  kind: "checkpoint",
  title: "Los estudiantes, que trabajan, estudian de noche",
  subtitle: "Repaso de las relativas especificativas y explicativas con su puntuación, revisión de un texto argumentativo completo e integración de las semanas 16 a 19",
  stop: {
    place: "Córdoba",
    country: "Argentina",
  },
  minutes: 150,
  newObjectives: [
    "c1.gram.g203",
    "c1.gram.g204",
    "c1.voc.w20-biblioteca-universidad",
    "c1.pron.w20-relativa-pausa",
    "c1.lis.w20-revision-columna",
    "c1.read.w20-columna-biblioteca",
    "c1.wri.w20-columna-revisada",
    "c1.spk.w20-debate-radio",
    "c1.fun.w20-defender-con-matiz",
    "c1.disc.w20-cohesion-referencial",
    "c1.rev.w20-semanas-16-20",
  ],
  reviewObjectives: ["c1.gram.g196","c1.voc.w16-mercado-barrio","c1.pron.w16-melodia-retorica","c1.lis.w16-radio-comunitaria","c1.read.w16-columna-mercado","c1.wri.w16-columna-vecinal","c1.spk.w16-alegato-asamblea","c1.fun.w16-persuadir-preguntando","c1.disc.w16-cierre-retorico","c1.gram.g197","c1.gram.g198","c1.voc.w17-proyecto-cultural","c1.pron.w17-inciso-tono-bajo","c1.lis.w17-revision-memoria","c1.read.w17-memoria-escuela","c1.wri.w17-solicitud-sala","c1.spk.w17-presentacion-comite","c1.fun.w17-solicitar-con-cortesia","c1.disc.w17-voz-institucional","c1.gram.g199","c1.gram.g200","c1.voc.w18-cuadrilla-txoko","c1.pron.w18-frase-suspendida","c1.lis.w18-anecdota-cena","c1.read.w18-relato-sobremesa","c1.wri.w18-blog-anecdota","c1.spk.w18-contar-anecdota","c1.fun.w18-contar-y-reaccionar","c1.disc.w18-ritmo-narrativo","c1.gram.g201","c1.gram.g202","c1.voc.w19-archivo-sociedad","c1.pron.w19-acento-re-ra","c1.lis.w19-archiveras","c1.read.w19-papeles-camelia","c1.wri.w19-panel-exposicion","c1.spk.w19-visita-archivo","c1.fun.w19-explicar-fuente","c1.disc.w19-citar-y-glosar"],
  prerequisites: ["c1-19"],
  goal: {
    canDo: "Puedo puntuar y elegir el relativo de un texto cuidado sin ambigüedad, revisar un texto argumentativo completo para que tenga tesis clara, cohesión y afirmaciones bien medidas, e integrar en él lo repasado en las semanas 16 a 19.",
    steps: [
      "Repasa en la teoría la diferencia entre relativas especificativas y explicativas, las herramientas de revisión argumentativa y el mapa de las semanas 16 a 19.",
      "Practica la puntuación de las relativas, la elección del relativo, la cohesión y el matiz, y recupera cada clase del bloque.",
      "Escucha a una editora revisar con un estudiante su columna y lee la versión publicada.",
      "Revisa y reescribe una columna argumentativa con la lista de control y defiende tu postura en un debate de radio.",
    ],
  },
  theory: {
    intro: "Esta semana cierra el cuarto bloque de C1 y el nivel. Las dos clases nuevas son de escritura cuidada: cómo una coma decide a quién te refieres en una relativa y cómo se revisa un texto argumentativo entero. La segunda no trae estructuras nuevas, sino que reúne las que ya tienes; por eso encontrarás al final un mapa de las clases de las semanas 16 a 19. El escenario es Córdoba, ciudad universitaria, y una columna que pide abrir de noche la biblioteca de una facultad.",
    parts: [
      {
        heading: "Especificativas y explicativas: la coma decide a quién te refieres",
        body: [
          "Una relativa especificativa, sin comas, restringe el antecedente: «Los estudiantes que trabajan estudian de noche» habla solo de una parte de los estudiantes, los que trabajan. Una explicativa, entre comas, añade un dato sobre todo el antecedente: «Los estudiantes, que trabajan, estudian de noche» afirma que todos trabajan. La explicativa lleva dos comas, y la segunda es la que más se olvida.",
          "Si el antecedente es único o es un nombre propio, la relativa suele ser explicativa: «La Biblioteca Mayor, que abrió en 1613, …». Escribir «Mi hermana que vive en Rosario» sin comas implica que tienes más de una hermana.",
          "Cada tipo admite relativos distintos. «Quien» y «el cual» sin preposición solo aparecen en explicativas: «la bibliotecaria, quien / la cual nos atendió, …», pero no «*la bibliotecaria quien nos atendió». El subjuntivo aparece normalmente en especificativas, cuando el antecedente no está identificado: «Buscamos una sala que abra de noche». Para retomar toda una oración se usa «lo que» o «lo cual», siempre tras coma: «La sala cierra a las ocho, lo cual obliga a muchos a estudiar en bares».",
          "En la escritura cuidada, la preposición que exige el verbo va delante del relativo, con artículo: «la sala en la que estudio», «la beca a la que me presenté», «la profesora con la que hablé». Omitirla («*la sala que estudio») es frecuente al hablar, pero se evita al escribir. Después de una preposición larga o de una locución se prefiere «el cual»: «el reglamento según el cual…», «un permiso sin el cual…», «a raíz de lo cual». «Cuyo» concuerda con lo poseído, no con el poseedor: «la facultad, cuyas salas cierran a las ocho». Con lugar, tiempo y modo: «la sala donde / en la que», «el año en que» (no «*el año donde»), «la manera en que / como». Tras un superlativo o «el único que», indicativo y subjuntivo son correctos: «la mejor sala que hay / haya en la ciudad».",
        ],
        table: {
          caption: "Con comas o sin comas",
          head: ["Frase", "Tipo", "Qué se entiende"],
          rows: [
            ["Las salas que tienen enchufes se llenan primero.", "especificativa", "solo algunas salas tienen enchufes"],
            ["Las salas, que tienen enchufes, se llenan primero.", "explicativa", "todas las salas tienen enchufes"],
            ["La directora, que asumió en marzo, apoya la idea.", "explicativa", "hay una sola directora"],
            ["Buscamos un lugar que esté abierto a medianoche.", "especificativa con subjuntivo", "no sabemos si existe"],
            ["Cierran a las ocho, lo cual perjudica a quienes trabajan.", "relativo neutro", "«lo cual» retoma toda la oración"],
          ],
        },
        examples: [
          { es: "El edificio en el que funciona la biblioteca es de 1938.", note: "Preposición + artículo + «que» en la escritura cuidada." },
          { es: "La facultad, cuyas aulas quedan vacías de noche, podría abrirlas.", note: "«Cuyas» concuerda con «aulas»." },
          { es: "Es la mejor biblioteca que conozco / que conozca.", note: "Tras superlativo, los dos modos son correctos." },
        ],
        mistakes: [
          {
            wrong: "La biblioteca, que abre los sábados está en el pabellón Argentina.",
            right: "La biblioteca, que abre los sábados, está en el pabellón Argentina.",
            why: "La explicativa se abre y se cierra: falta la segunda coma.",
          },
          {
            wrong: "Es la sala que estudio todas las tardes.",
            right: "Es la sala en la que estudio todas las tardes.",
            why: "«Estudiar en» una sala: la preposición va delante del relativo.",
          },
          {
            wrong: "El profesor quien dirige la cátedra firmó la nota.",
            right: "El profesor que dirige la cátedra firmó la nota.",
            why: "«Quien» sin preposición no aparece en especificativas.",
          },
        ],
        tip: "Pregúntate: ¿me refiero a todos o solo a algunos? Si es a todos, comas; si es a algunos, sin comas. Después lee la frase sin la relativa: si sigue diciendo lo que quieres, era explicativa.",
      },
      {
        heading: "Revisar un texto argumentativo: tesis, cohesión y matiz",
        body: [
          "Revisar no es corregir faltas, sino comprobar que el texto convence. Empieza por la estructura: ¿se entiende la tesis en el primer párrafo? ¿Cada párrafo tiene una sola idea, anunciada en su primera frase? ¿Hay al menos una concesión al otro lado («Es cierto que…; aun así, …», «Concedo que…, pero…») y un cierre que retoma la tesis con algo nuevo («En definitiva», «Dicho de otro modo»)?",
          "Después, la cohesión. Para no repetir, usa sinónimos, hiperónimos («la biblioteca» → «el edificio», «el servicio»), encapsuladores que resumen lo dicho («esta medida», «dicho problema», «esta propuesta»), «ello» y la elipsis. Evita «el mismo» como pronombre («*abrir la sala y limpiar la misma»): la RAE lo desaconseja; di «limpiarla». No abuses de los conectores: si cada frase empieza con «además», «asimismo» o «por otro lado», el texto parece una lista. Elige el conector por su matiz: «sin embargo» contrapone, «es más» refuerza, «de ahí que» introduce una consecuencia con subjuntivo.",
          "Por último, el matiz. Afirma con indicativo lo que está comprobado («Es evidente que la sala se llena») y con subjuntivo lo que pones en duda («No está demostrado que abrir de noche cueste tanto»). Atribuye los datos («según la encuesta del centro de estudiantes», «al parecer»). Ni exageres («todos los estudiantes», «siempre», «la única solución») ni te escondas detrás de demasiados atenuadores («quizá podría tal vez ser posible»): un «en cierta medida» bien colocado vale más que cinco. Y mantén el registro: nada de «o sea», «un montón» ni «tú» genérico en una columna formal.",
        ],
        table: {
          caption: "Tres pasadas de revisión",
          head: ["Pasada", "Qué buscas", "Ejemplo de cambio"],
          rows: [
            ["estructura", "tesis clara, una idea por párrafo, concesión", "añadir «Es cierto que el costo aumentaría; aun así, …»"],
            ["cohesión", "repeticiones, «el mismo», exceso de conectores", "«la biblioteca… la biblioteca» → «la biblioteca… el edificio»"],
            ["matiz y registro", "exageraciones, dudas sin subjuntivo, rasgos orales", "«todos estudian de noche» → «buena parte estudia de noche»"],
          ],
        },
        examples: [
          { es: "Es cierto que abrir de noche tiene un costo; aun así, esta medida beneficiaría a cientos de estudiantes.", note: "Concesión + contraargumento + encapsulador." },
          { es: "No está demostrado que la seguridad empeore de noche, de ahí que convenga probarlo un cuatrimestre.", note: "Subjuntivo para lo dudoso y para «de ahí que»." },
        ],
        mistakes: [
          {
            wrong: "Habría que abrir la sala y vigilar la misma con un guardia.",
            right: "Habría que abrir la sala y vigilarla con un guardia.",
            why: "«El mismo» como pronombre se desaconseja en la escritura cuidada: usa el pronombre átono.",
          },
          {
            wrong: "O sea, todos los estudiantes estudian de noche, siempre.",
            right: "Buena parte de los estudiantes estudia de noche, sobre todo en época de exámenes.",
            why: "Registro oral y generalización excesiva: se matiza y se elimina «o sea».",
          },
        ],
      },
      {
        heading: "Integración: lo que repasaste en las semanas 16 a 19",
        body: [
          "Una columna bien revisada usa a la vez casi todo lo del bloque. En la semana 16 (G196) viste que una pregunta retórica bien colocada lleva al lector a la conclusión: «¿Quién no ha estudiado alguna vez en un bar por falta de sitio?». En la semana 17 repasaste la puntuación de incisos y conectores (G197: «La biblioteca, sin embargo, cierra a las ocho») y el estilo formal (G198: «Se recomienda que la facultad evalúe…», con usted coherente y léxico preciso).",
          "En la semana 18 trabajaste la cara opuesta: lo coloquial (G199), que en una columna formal solo cabe dentro de una cita, y los tiempos fuera de su tiempo (G200), como el condicional que atenúa («Yo diría que…») o el imperfecto de cortesía de una carta («Quería solicitarle…»). En la semana 19 aprendiste a leer el pretérito anterior (G201) y el futuro de subjuntivo (G202), que pueden aparecer si citas un estatuto antiguo de la universidad: «El alumno que acreditare…» → «El alumno que acredite…».",
        ],
        table: {
          caption: "Mapa del bloque: una herramienta de cada clase",
          head: ["Clase", "Herramienta", "Ejemplo en la columna"],
          rows: [
            ["G196 · semana 16", "pregunta retórica", "¿Para qué sirve una biblioteca cerrada cuando más se necesita?"],
            ["G197 · semana 17", "incisos y conectores puntuados", "La sala, sin embargo, cierra a las ocho."],
            ["G198 · semana 17", "impersonal con el modo adecuado", "Conviene que la facultad pruebe el horario un cuatrimestre."],
            ["G199 · semana 18", "lo coloquial solo en citas", "Como dice una estudiante: «Con lo caro que está el café…»."],
            ["G200 · semana 18", "condicional de atenuación", "Yo diría que el costo es asumible."],
            ["G201 · semana 19", "pretérito anterior (lectura)", "«Apenas hubo abierto la sala, se llenó» → apenas abrió…"],
            ["G202 · semana 19", "futuro de subjuntivo (lectura)", "«El alumno que lo solicitare» → que lo solicite"],
            ["G203 · semana 20", "relativas con su puntuación", "los estudiantes que trabajan / los estudiantes, que trabajan,"],
            ["G204 · semana 20", "concesión, encapsulador, matiz", "Es cierto que…; aun así, esta medida…"],
          ],
        },
        mistakes: [
          {
            wrong: "¿Quién quiere estudiar en un bar? Los estudiantes que trabajan, que son muchos estudian allí, o sea, no les queda otra.",
            right: "¿Quién quiere estudiar en un bar? Sin embargo, muchos estudiantes que trabajan, que son una cuarta parte del total, no tienen otro lugar donde hacerlo.",
            why: "Tres fallos de tres semanas: falta la coma de cierre del inciso (G197, G203), «o sea» es coloquial en una columna (G198, G199) y la idea no se conecta con la pregunta retórica (G196, G204).",
          },
        ],
        tip: "Al revisar un texto largo, haz una pasada por cada tipo de herramienta: relativas y comas, conectores, modo, registro y matiz. Una sola lectura general deja escapar errores.",
      },
    ],
  },
  grammar: {
    intro: "Trabaja primero la puntuación y el tipo de relativa, después la elección del relativo y termina con la revisión de frases de la columna.",
    exercises: [
      {
        id: "c1-20-gramatica-alcance",
        type: "context",
        prompt: "Lee cada frase del borrador de la columna y decide qué afirma.",
        items: [
          {
            context: "«Los estudiantes de primer año, que no conocen la ciudad, estudian en sus pensiones.»",
            q: "¿A quiénes se refiere la frase sobre los estudiantes de primer año?",
            options: ["Solo a los de primer año que no conocen la ciudad.", "A todos los de primer año, y dice que ninguno conoce la ciudad.", "A los estudiantes de todos los años."],
            answer: 1,
            why: "Explicativa entre comas: se aplica a todo el antecedente.",
          },
          {
            context: "«Las salas que tienen calefacción cierran a las ocho.»",
            q: "¿Qué se deduce de la frase sobre las salas con calefacción?",
            options: ["Que hay salas sin calefacción.", "Que todas las salas tienen calefacción.", "Que ninguna sala cierra antes de las ocho."],
            answer: 0,
            why: "Especificativa: distingue unas salas de otras.",
          },
          {
            context: "«La directora de la biblioteca, que asumió en marzo, se mostró abierta a la propuesta.»",
            q: "¿Por qué la relativa sobre la directora lleva comas?",
            options: ["Porque hay varias directoras.", "Porque el verbo está en pasado.", "Porque el antecedente es único y la relativa solo añade un dato."],
            answer: 2,
            why: "Antecedente único: explicativa.",
          },
          {
            context: "«Necesitamos un espacio que esté abierto hasta la medianoche.»",
            q: "¿Por qué va en subjuntivo «esté» en la frase del espacio?",
            options: ["Porque el espacio no está identificado: no se sabe si existe.", "Porque la relativa es explicativa.", "Porque el verbo principal está en presente."],
            answer: 0,
            why: "Especificativa con antecedente no identificado: subjuntivo.",
          },
        ],
      },
      {
        id: "c1-20-gramatica-relativos",
        type: "gap",
        prompt: "Completa con el relativo adecuado para un texto cuidado (con preposición y artículo si hace falta).",
        items: [
          { q: "Es el pabellón ___ funcionaba antes la imprenta universitaria. [en + relativo]", answers: [["en el que", "en el cual", "donde"]], why: "«Funcionar en» un lugar: preposición + artículo + relativo." },
          { q: "La beca ___ me presenté exige un promedio de siete. [a + relativo]", answers: [["a la que", "a la cual"]], why: "«Presentarse a» una beca." },
          { q: "Es un reglamento antiguo, según ___ la biblioteca no podía abrir los domingos.", answers: [["el cual"]], why: "Tras una preposición larga se prefiere «el cual»." },
          { q: "La facultad, ___ aulas quedan vacías de noche, tiene presupuesto para un guardia.", answers: [["cuyas"]], why: "«Cuyo» concuerda con lo poseído: «aulas»." },
          { q: "La sala cierra a las ocho, ___ obliga a muchos a estudiar en bares.", answers: [["lo cual", "lo que"]], why: "Relativo neutro que retoma toda la oración, tras coma." },
          { q: "Recuerdo el año ___ abrieron la sala de lectura nocturna.", answers: [["en que", "en el que", "cuando"]], why: "Con tiempo: «en que», no «donde»." },
        ],
      },
      {
        id: "c1-20-gramatica-tipo",
        type: "classify",
        prompt: "Decide si cada relativa es correcta en un texto cuidado.",
        categories: ["Correcta", "Incorrecta en la escritura cuidada"],
        items: [
          { text: "La bibliotecaria, la cual nos atendió con paciencia, nos dio una llave.", cat: 0, why: "«La cual» sin preposición, en explicativa." },
          { text: "El becario quien abre la sala llega a las siete.", cat: 1, why: "«Quien» sin preposición no va en especificativas." },
          { text: "Es la mejor biblioteca que haya visitado.", cat: 0, why: "Tras superlativo, el subjuntivo es correcto." },
          { text: "El año donde cerraron la sala, protestamos.", cat: 1, why: "Con tiempo: «el año en que»." },
          { text: "Hay un permiso sin el cual no se puede entrar después de hora.", cat: 0, why: "Preposición + «el cual»." },
          { text: "Es el profesor que te hablé.", cat: 1, why: "Falta la preposición: «del que te hablé»." },
        ],
      },
      {
        id: "c1-20-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de cohesión, de relativo o de matiz. Corrígela.",
        items: [
          {
            sentence: "Proponemos abrir la sala de noche y contratar un guardia para la misma.",
            answers: ["Proponemos abrir la sala de noche y contratar un guardia para ella.", "Proponemos abrir la sala de noche y contratar un guardia para vigilarla."],
            why: "«El mismo» como pronombre se desaconseja.",
          },
          {
            sentence: "No está demostrado que el horario nocturno aumenta los robos.",
            answers: ["No está demostrado que el horario nocturno aumente los robos."],
            why: "«No está demostrado que» pone en duda: subjuntivo.",
          },
          {
            sentence: "La facultad cuyo aulas están vacías podría abrirlas.",
            answers: ["La facultad cuyas aulas están vacías podría abrirlas."],
            why: "«Cuyo» concuerda con «aulas»: cuyas.",
          },
          {
            sentence: "Abrir de noche es sin duda alguna la única solución posible para todos los estudiantes.",
            answers: ["Abrir de noche es una solución posible para muchos estudiantes.", "Abrir de noche sería una buena solución para muchos estudiantes."],
            why: "Exageración: «sin duda alguna», «la única» y «todos» debilitan el argumento.",
          },
        ],
      },
      {
        id: "c1-20-gramatica-revision",
        type: "open",
        prompt: "Revisa cada fragmento del borrador. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Revisa este párrafo para que tenga cohesión sin repeticiones: «La biblioteca cierra a las ocho. La biblioteca tiene mucho espacio. La biblioteca podría abrir más horas y la biblioteca sería más útil».",
            model: "La biblioteca cierra a las ocho, aunque dispone de espacio de sobra. Si ampliara su horario, el edificio sería mucho más útil para quienes estudian de noche.",
            checklist: ["Elimino las repeticiones con sinónimos o elipsis.", "Uso al menos un conector con su matiz.", "Las ideas quedan conectadas, no en lista."],
          },
          {
            prompt: "Añade una concesión y un contraargumento a esta afirmación: «Hay que abrir la biblioteca hasta medianoche».",
            model: "Es cierto que abrir hasta medianoche supondría un gasto en personal y seguridad; aun así, esta medida permitiría estudiar en condiciones a cientos de estudiantes que hoy no tienen dónde hacerlo.",
            checklist: ["Reconozco un argumento contrario concreto.", "Uso un conector contraargumentativo puntuado correctamente.", "Retomo la idea con un encapsulador."],
          },
          {
            prompt: "Escribe dos versiones de una frase sobre los estudiantes que viven lejos del campus: una que se refiera a todos y otra solo a algunos. Explica la diferencia.",
            model: "«Los estudiantes, que viven lejos del campus, llegan cansados» (todos viven lejos). «Los estudiantes que viven lejos del campus llegan cansados» (solo los que viven lejos). Las comas convierten la relativa en un dato sobre todos.",
            checklist: ["Una versión con comas y otra sin ellas.", "Explico qué cambia en el sentido."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de la vida universitaria en Córdoba y de la argumentación escrita. Algunas palabras son propias de Argentina; se indica cuando conviene.",
    groups: [
      {
        title: "La universidad",
        items: [
          { es: "la facultad", note: "cada una de las grandes divisiones académicas de una universidad" },
          { es: "el cuatrimestre", note: "período lectivo de cuatro meses" },
          { es: "la cátedra", note: "en Argentina, equipo docente responsable de una materia" },
          { es: "rendir un final", note: "en Argentina, presentarse al examen final de una materia" },
          { es: "el centro de estudiantes", note: "organización elegida que representa al alumnado" },
          { es: "la pensión", note: "casa donde se alquila una habitación, a menudo con comidas" },
          { es: "la sala de lectura", note: "espacio de una biblioteca para estudiar en silencio" },
        ],
      },
      {
        title: "Argumentar por escrito",
        items: [
          { es: "la tesis", note: "idea principal que defiende un texto argumentativo" },
          { es: "la concesión", note: "reconocimiento parcial del argumento contrario" },
          { es: "el encapsulador", note: "expresión que resume lo dicho antes: «esta medida»" },
          { es: "sostener que", note: "afirmar y defender una idea" },
          { es: "rebatir", note: "contradecir un argumento con razones" },
          { es: "asumible", note: "que se puede afrontar o aceptar" },
          { es: "a título de prueba", note: "de forma provisional, para comprobar el resultado" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-20-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "rendir un final", right: "presentarse al examen final de una materia" },
          { left: "la concesión", right: "reconocimiento parcial del argumento contrario" },
          { left: "el encapsulador", right: "expresión que resume lo dicho antes" },
          { left: "rebatir", right: "contradecir un argumento con razones" },
          { left: "a título de prueba", right: "de forma provisional, para comprobar el resultado" },
          { left: "la cátedra", right: "equipo docente responsable de una materia" },
        ],
      },
      {
        id: "c1-20-lexico-uso",
        type: "gap",
        prompt: "Completa la carta del centro de estudiantes con la expresión adecuada.",
        bank: ["cuatrimestre", "asumible", "sostenemos", "sala de lectura"],
        items: [
          { q: "___ que el horario actual perjudica a quienes trabajan.", answers: [["Sostenemos", "sostenemos"]] },
          { q: "Proponemos abrir la ___ hasta medianoche en época de finales.", answers: [["sala de lectura"]] },
          { q: "El costo estimado, unos dos millones de pesos, nos parece ___.", answers: [["asumible"]] },
          { q: "La medida podría probarse durante un ___ y evaluarse después.", answers: [["cuatrimestre"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La pausa que distingue una relativa explicativa de una especificativa",
    explanation: [
      "Al leer en voz alta, la relativa explicativa forma su propio grupo fónico: hay una pausa antes, el tono baja un poco, como en cualquier inciso, y hay otra pausa al terminar. La especificativa, en cambio, se pronuncia unida a su antecedente, sin pausa: «los estudiantes que trabajan» suena como un solo bloque.",
      "Por eso, en la radio o en una exposición oral, la pausa es tu única coma. Si dices «Los estudiantes | que trabajan | estudian de noche» con pausas, el oyente entenderá que hablas de todos. Si quieres hablar solo de algunos, no hagas pausa.",
      "En el habla de Córdoba es característico un alargamiento de la sílaba anterior a la tónica, la famosa tonada cordobesa. El audio es sintético: sirve para percibir el contraste, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "La pausa como coma",
      head: ["Lectura", "Tipo", "Sentido"],
      rows: [
        ["Los becarios | que viven lejos | llegan tarde.", "explicativa", "todos viven lejos"],
        ["Los becarios que viven lejos llegan tarde.", "especificativa", "solo los que viven lejos"],
      ],
    },
    perceive: {
      id: "c1-20-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide a quiénes se refiere por las pausas.",
      items: [
        {
          q: "Según cómo se lee, ¿qué alumnos usan la sala de noche?",
          options: ["Todos los alumnos de Medicina.", "Solo los de Medicina que hacen guardias."],
          answer: 1,
          why: "Sin pausas: la relativa especifica.",
          audio: "Los alumnos de Medicina que hacen guardias usan la sala de noche.",
          voice: "es-AR-f",
        },
        {
          q: "Según cómo se lee, ¿cuántos alumnos de intercambio hablan portugués?",
          options: ["Todos.", "Solo algunos."],
          answer: 0,
          why: "Con pausas: la relativa explica algo de todos.",
          audio: "Los alumnos de intercambio, que hablan portugués, se sientan juntos.",
          voice: "es-AR-m",
        },
        {
          q: "¿Qué retoma «lo cual» en la frase sobre la sala?",
          options: ["Solo la palabra «sala».", "Toda la oración anterior: que la sala cierre temprano."],
          answer: 1,
          why: "El relativo neutro retoma toda la oración.",
          audio: "La sala cierra a las ocho, lo cual perjudica a quienes trabajan.",
          voice: "es-AR-f",
        },
        {
          q: "¿Cuántas hermanas tiene quien habla, según la lectura?",
          options: ["Una sola.", "Más de una."],
          answer: 1,
          why: "Sin pausa: «mi hermana que estudia en Córdoba» la distingue de otras.",
          audio: "Mi hermana que estudia en Córdoba vuelve a casa los viernes.",
          voice: "es-AR-m",
        },
      ],
    },
    produce: [
      { text: "La Biblioteca Mayor, que funciona desde el siglo diecisiete, es la más antigua del país.", tip: "Pausa y tono bajo en la relativa: el antecedente es único.", voice: "es-AR-f" },
      { text: "Los estudiantes que trabajan de día necesitan un lugar para estudiar de noche.", tip: "Ninguna pausa entre «estudiantes» y «trabajan».", voice: "es-AR-m" },
      { text: "Es cierto que el costo aumentaría; aun así, esta medida vale la pena.", tip: "Pausa larga antes de «aun así» y tono suspendido después.", voice: "es-AR-f" },
      { text: "¿Para qué sirve una biblioteca cerrada justo cuando más se la necesita?", tip: "Pregunta retórica: final descendente.", voice: "es-AR-m" },
    ],
    spelling: "Una relativa explicativa lleva siempre dos comas, salvo que termine la oración: «La sala, que tiene cuarenta puestos, se llena». «Lo cual» y «lo que» con valor de oración entera van siempre tras coma.",
  },
  listening: {
    title: "Segundo borrador",
    context: "En la redacción de un diario de Córdoba, Carolina, editora de la sección de opinión, revisa con Facundo, estudiante de Ingeniería, el segundo borrador de su columna sobre el horario de la biblioteca de la facultad. Escucha primero sin transcripción. La facultad, el diario y las personas son ficticios. Carolina y Facundo usan el voseo, propio de su variedad («fijate», «tenés»). Las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "c", name: "Carolina", voice: "es-AR-f", role: "Editora de la sección de opinión" },
      { id: "f", name: "Facundo", voice: "es-AR-m", role: "Estudiante de Ingeniería, autor de la columna" },
    ],
    script: [
      { speaker: "c", text: "Facundo, el segundo borrador está mucho mejor. La tesis ya aparece en el primer párrafo y la pregunta del título funciona. Pero tengo tres o cuatro cosas, y la primera es grave. Escribiste: los estudiantes, que trabajan, estudian de noche. ¿Todos los estudiantes trabajan?" },
      { speaker: "f", text: "No, claro, más o menos uno de cada cuatro, según la encuesta del centro de estudiantes." },
      { speaker: "c", text: "Entonces sacá las comas. Con comas estás diciendo que trabajan todos, y cualquier lector de la facultad te va a desautorizar en la primera línea. Sin comas, hablás solo de los que trabajan, que es lo que querés decir." },
      { speaker: "f", text: "Uy, qué diferencia. ¿Y lo de la sala? Puse: es la única sala que se puede estudiar en silencio." },
      { speaker: "c", text: "Ahí falta la preposición: la única sala en la que se puede estudiar en silencio. Hablando se escucha mucho lo otro, pero en una columna no. Y fijate en el párrafo tres. Repetís biblioteca cinco veces y al final ponés abrir la sala y limpiar la misma. Usá el edificio, el servicio, esta medida; y en vez de limpiar la misma, limpiarla." },
      { speaker: "f", text: "Bueno. ¿Y el tono? Mi compañera dice que suena muy enojado." },
      { speaker: "c", text: "Un poco. Decís que es sin duda la única solución y que todos los estudiantes la apoyan. No es verdad, y además no hace falta. Mejor: es una solución razonable que, según la encuesta, apoya el setenta por ciento. Y te falta la concesión. Reconocé que cuesta plata: es cierto que supondría un gasto en seguridad; aun así, esta medida…" },
      { speaker: "f", text: "Ah, y metí una cita del estatuto viejo de la universidad: el alumno que acreditare trabajo podrá solicitar horarios especiales. ¿La dejo?" },
      { speaker: "c", text: "Dejala, que queda muy bien, pero explicala: acreditare es futuro de subjuntivo, o sea, cualquier alumno que demuestre que trabaja. Si no lo aclarás, alguien va a pensar que es una errata. Y otra cosa: cerrás con un o sea, la facultad no nos escucha. Sacá el o sea; en el diario no va." },
      { speaker: "f", text: "Me matás con el o sea. Lo saco. Entonces quedaría: en definitiva, abrir la sala por la noche no es un capricho, sino una forma de que la universidad llegue a quienes hoy no puede atender." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la revisión completa sin abrir la transcripción. ¿Qué tipo de cambios propone Carolina?",
        exercise: {
          id: "c1-20-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué hacen Carolina y Facundo en la redacción del diario?",
              options: ["Escriben juntos una noticia sobre la biblioteca.", "Revisan el segundo borrador de la columna de Facundo.", "Entrevistan a la directora de la biblioteca."],
              answer: 1,
              why: "Carolina es la editora y comenta el borrador de Facundo.",
            },
            {
              q: "¿Qué valoración general hace Carolina del segundo borrador?",
              options: ["Que está mejor, pero necesita cambios de puntuación, cohesión, matiz y registro.", "Que hay que reescribirlo desde cero.", "Que está listo para publicarse sin cambios."],
              answer: 0,
              why: "Empieza diciendo que está mucho mejor y luego enumera los cambios.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-20-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada corrección.",
          items: [
            {
              q: "¿Por qué Carolina dice que el error de las comas es grave?",
              options: ["Porque afirma que todos los estudiantes trabajan, y eso es falso.", "Porque la frase queda demasiado larga.", "Porque el diario no acepta comas en el primer párrafo."],
              answer: 0,
              why: "Solo uno de cada cuatro trabaja; con comas se afirma que todos.",
            },
            {
              q: "¿Qué propone Carolina para el tono de la columna?",
              options: ["Hacerlo más enojado para llamar la atención.", "Quitar todas las cifras.", "Sustituir las exageraciones por un dato atribuido y añadir una concesión."],
              answer: 2,
              why: "«Según la encuesta, apoya el setenta por ciento» y «es cierto que…; aun así».",
            },
            {
              q: "¿Qué hace Carolina con la cita del estatuto antiguo?",
              options: ["Pide eliminarla porque está mal escrita.", "Pide conservarla y explicar la forma «acreditare».", "Pide modernizarla dentro de las comillas."],
              answer: 1,
              why: "«Dejala…, pero explicala».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo cada frase del borrador cambia. Responde y luego consulta la transcripción.",
        exercise: {
          id: "c1-20-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase del borrador con su versión revisada.",
          pairs: [
            { left: "los estudiantes, que trabajan, estudian de noche", right: "los estudiantes que trabajan estudian de noche" },
            { left: "la única sala que se puede estudiar en silencio", right: "la única sala en la que se puede estudiar en silencio" },
            { left: "abrir la sala y limpiar la misma", right: "abrir la sala y limpiarla" },
            { left: "es sin duda la única solución", right: "es una solución razonable que apoya el setenta por ciento" },
            { left: "o sea, la facultad no nos escucha", right: "en definitiva, abrir la sala por la noche no es un capricho" },
          ],
          why: "Cada cambio responde a una pasada: relativas, cohesión, matiz o registro.",
        },
      },
    ],
  },
  reading: {
    title: "¿Para qué sirve una biblioteca cerrada?",
    genre: "Columna de opinión en un diario regional",
    frame: "Versión publicada de la columna de Facundo Ledesma, estudiante de Ingeniería, en la sección de opinión de un diario de Córdoba. La facultad, la encuesta y las personas son ficticias.",
    text: [
      "Son las ocho y cinco de un martes de junio, en plena época de finales, y la sala de lectura de la Facultad de Ingeniería acaba de cerrar. Afuera, en la vereda, una docena de estudiantes guarda apuntes y calculadoras en la mochila y se dispersa por los bares de Nueva Córdoba, donde por el precio de un café podrán seguir estudiando un par de horas, con música de fondo y sin enchufes. ¿Para qué sirve una biblioteca cerrada justo cuando más se la necesita?",
      "Sostengo que la facultad debería abrir su sala de lectura hasta la medianoche, al menos durante los períodos de exámenes. No se trata de un capricho. Según la encuesta que el centro de estudiantes realizó en abril, uno de cada cuatro alumnos trabaja durante el día, y la mayoría de ellos no tiene en su pensión o en su casa un lugar en el que pueda estudiar en silencio. Los estudiantes que trabajan, precisamente los que más dificultades tienen para terminar la carrera, son también los que menos acceso tienen a la biblioteca.",
      "Es cierto que abrir de noche tendría un costo. Habría que contratar personal, reforzar la seguridad y pagar más electricidad, lo cual no es poco en un presupuesto universitario que ya está ajustado. Aun así, conviene poner las cifras en perspectiva. La propia facultad estima que el horario extendido costaría unos dos millones de pesos por cuatrimestre, una cantidad que, sin ser menor, resulta asumible si se compara con lo que se pierde cada vez que un estudiante abandona la carrera por no poder sostener el ritmo.",
      "La idea, además, no es nueva. El viejo estatuto de la universidad, cuyas páginas pueden consultarse en el archivo histórico, ya establecía que «el alumno que acreditare trabajo podrá solicitar horarios especiales». La forma «acreditare» es un futuro de subjuntivo, habitual en los textos normativos de la época, y significa sencillamente que cualquier alumno que demuestre que trabaja tiene derecho a pedir un trato distinto. Si nuestros antecesores lo vieron hace casi un siglo, ¿por qué nos cuesta tanto aplicarlo hoy?",
      "No está demostrado que el horario nocturno aumente los problemas de seguridad; tampoco lo contrario. De ahí que la propuesta más sensata sea probar esta medida a título de prueba durante un cuatrimestre y evaluarla después con datos: cuántas personas usan la sala, a qué horas y con qué resultados en sus exámenes. Yo diría que los números hablarán por sí solos, pero, si no lo hacen, la facultad tendrá argumentos para volver al horario actual.",
      "En definitiva, abrir la sala por la noche no es un lujo, sino una forma de que la universidad llegue a quienes hoy no puede atender. La directora de la biblioteca, que asumió el cargo en marzo, se ha mostrado abierta a estudiarlo. Ahora le toca al consejo directivo, que se reúne el mes próximo, decidir si la sala de lectura seguirá apagando las luces a las ocho o si, por fin, se quedará encendida para quienes estudian cuando terminan de trabajar.",
    ],
    glossary: [
      { es: "la vereda", note: "en Argentina, la acera" },
      { es: "ajustado", note: "dicho de un presupuesto, sin margen para gastos nuevos" },
      { es: "el consejo directivo", note: "órgano de gobierno de una facultad" },
    ],
    tasks: [
      {
        id: "c1-20-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la columna.",
        items: [
          {
            q: "¿Qué propone exactamente el autor de la columna?",
            options: ["Abrir la sala de lectura las veinticuatro horas todo el año.", "Abrir la sala hasta la medianoche al menos en época de exámenes, a título de prueba.", "Trasladar la sala de lectura a un bar de Nueva Córdoba."],
            answer: 1,
            why: "Segundo y quinto párrafos.",
          },
          {
            q: "¿Cómo trata el autor el argumento del costo?",
            options: ["Lo niega.", "Lo ignora.", "Lo reconoce y lo pone en perspectiva con el abandono de la carrera."],
            answer: 2,
            why: "Tercer párrafo: concesión y contraargumento.",
          },
          {
            q: "¿Para qué cita el autor el estatuto antiguo?",
            options: ["Para mostrar que la idea de atender a quienes trabajan ya existía.", "Para criticar el lenguaje anticuado de la universidad.", "Para demostrar que la sala siempre abrió de noche."],
            answer: 0,
            why: "«La idea, además, no es nueva».",
          },
        ],
      },
      {
        id: "c1-20-lectura-herramientas",
        type: "classify",
        prompt: "Clasifica cada fragmento de la columna según la herramienta del bloque que ilustra.",
        categories: ["Relativa o puntuación (G197, G203)", "Argumentación y matiz (G196, G204)", "Lectura de formas antiguas o tiempos no literales (G200, G202)"],
        items: [
          { text: "Los estudiantes que trabajan, precisamente los que más dificultades tienen", cat: 0, why: "Especificativa sin comas: solo los que trabajan." },
          { text: "Es cierto que abrir de noche tendría un costo.", cat: 1, why: "Concesión antes del contraargumento." },
          { text: "el alumno que acreditare trabajo podrá solicitar horarios especiales", cat: 2, why: "Futuro de subjuntivo citado y explicado." },
          { text: "La directora de la biblioteca, que asumió el cargo en marzo, se ha mostrado abierta", cat: 0, why: "Explicativa con antecedente único y dos comas." },
          { text: "¿Para qué sirve una biblioteca cerrada justo cuando más se la necesita?", cat: 1, why: "Pregunta retórica que lleva a la tesis." },
          { text: "Yo diría que los números hablarán por sí solos", cat: 2, why: "Condicional de atenuación." },
        ],
      },
      {
        id: "c1-20-lectura-evaluacion",
        type: "open",
        prompt: "Valora la columna con argumentos propios.",
        items: [
          {
            prompt: "En 80–100 palabras, di si la columna te convence y señala su argumento más fuerte y su punto más débil. Usa al menos una concesión.",
            model: "La columna me convence en buena medida. Su argumento más fuerte es la propuesta de probar la medida un cuatrimestre y evaluarla con datos, porque desactiva la objeción del costo sin exigir un compromiso permanente. Es cierto que la cita del estatuto le da un toque de autoridad histórica; aun así, me parece el punto más débil, ya que un texto de hace un siglo no demuestra que la medida funcione hoy. Habría preferido un ejemplo de otra universidad que ya abra de noche.",
            checklist: ["Doy una valoración matizada.", "Identifico un argumento fuerte y uno débil con razones.", "Incluyo una concesión puntuada correctamente."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la columna combina relativas bien puntuadas, cohesión y matiz.",
      items: [
        { quote: "un lugar en el que pueda estudiar en silencio", note: "Preposición + artículo + relativo, con subjuntivo porque el lugar no está identificado." },
        { quote: "lo cual no es poco en un presupuesto universitario que ya está ajustado", note: "«Lo cual» retoma toda la oración anterior, tras coma." },
        { quote: "cuyas páginas pueden consultarse en el archivo histórico", note: "«Cuyas» concuerda con «páginas», lo poseído." },
        { quote: "De ahí que la propuesta más sensata sea probar esta medida", note: "Consecuencia con subjuntivo y encapsulador «esta medida»." },
      ],
    },
  },
  practice: {
    intro: "Esta práctica integra las clases de esta semana con las de las semanas 16 a 19: preguntas retóricas, puntuación, estilo formal, lo coloquial, tiempos no literales y formas antiguas.",
    exercises: [
      {
        id: "c1-20-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de una columna bien revisada.",
        items: [
          { words: ["La", "sala,", "cuyas", "mesas", "tienen", "enchufes,", "se", "llena", "a", "las", "seis."], why: "Explicativa con «cuyas» concordado con «mesas»." },
          { words: ["Es", "cierto", "que", "cuesta", "dinero;", "aun", "así,", "conviene", "probarlo."], why: "Concesión, punto y coma y conector con coma." },
          { words: ["No", "está", "demostrado", "que", "la", "medida", "sea", "cara."], why: "Duda: subjuntivo." },
        ],
      },
      {
        id: "c1-20-integracion",
        type: "context",
        prompt: "Elige la versión que integra correctamente lo repasado en el bloque.",
        items: [
          {
            context: "Columna: el autor quiere cerrar un párrafo afirmando que nadie elige estudiar en un bar por gusto.",
            q: "¿Qué pregunta retórica cumple esa intención (semana 16)?",
            options: ["¿Quién no elige estudiar en un bar por gusto?", "¿Quién elige estudiar en un bar ruidoso por gusto?", "¿Acaso no elige nadie estudiar en un bar?"],
            answer: 1,
            why: "Pregunta afirmativa: afirma «nadie».",
          },
          {
            context: "Correo formal del centro de estudiantes a la directora de la biblioteca (semanas 17 y 18).",
            q: "¿Qué apertura es adecuada para el correo a la directora?",
            options: ["Estimada directora: Quería solicitarle una reunión para presentarle nuestra propuesta.", "Hola, directora, ¿te podemos ver un toque?", "Estimada directora, o sea, queremos hablar del tema de la sala."],
            answer: 0,
            why: "Saludo con dos puntos, usted coherente e imperfecto de cortesía.",
          },
          {
            context: "El autor cita un acta antigua: «Apenas hubo abierto la sala nocturna en 1962, se llenó de estudiantes» (semana 19).",
            q: "¿Qué explicación del acta de 1962 conserva el sentido?",
            options: ["Mientras se abría la sala, se llenaba de estudiantes.", "La sala se llenó años después de abrirse.", "En cuanto se abrió la sala, se llenó de estudiantes."],
            answer: 2,
            why: "El pretérito anterior expresa inmediatez: «en cuanto».",
          },
          {
            context: "El autor quiere citar lo que le dijo una estudiante en la vereda, sin cambiar su registro (semana 18).",
            q: "¿Cómo integra mejor la voz de la estudiante?",
            options: ["Con lo caro que está el café, o sea, es imposible estudiar en un bar.", "Como resume una estudiante de segundo año: «Con lo caro que está el café, no puedo estudiar en un bar todas las noches».", "Una estudiante sostiene que procede la reducción del consumo de café."],
            answer: 1,
            why: "Lo coloquial queda dentro de la cita; el texto del autor mantiene el registro formal.",
          },
        ],
      },
      {
        id: "c1-20-mapa",
        type: "match",
        prompt: "Relaciona cada clase del bloque con la herramienta que aporta a una columna.",
        pairs: [
          { left: "G196 · interrogativas retóricas", right: "llevar al lector a la conclusión sin afirmarla" },
          { left: "G197 · puntuación de incisos", right: "abrir y cerrar cada inciso y aislar los conectores" },
          { left: "G198 · estilo formal", right: "valorar con impersonales en el modo adecuado" },
          { left: "G199 · estilo coloquial", right: "reconocer lo que solo cabe dentro de una cita" },
          { left: "G200 · tiempos no literales", right: "atenuar una opinión con el condicional" },
          { left: "G202 · futuro de subjuntivo", right: "explicar una norma antigua sin convertirla en un hecho" },
        ],
      },
      {
        id: "c1-20-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 50–70 palabras el párrafo de concesión de una columna sobre ampliar el horario del comedor universitario. Incluye una relativa explicativa, una especificativa y un encapsulador.",
            model: "Es cierto que ampliar el horario del comedor, que hoy cierra a las tres, obligaría a contratar más personal. Aun así, esta medida beneficiaría a los estudiantes que cursan de tarde, quienes ahora tienen que elegir entre comer y llegar a clase. Un horario hasta las cinco, probado durante un cuatrimestre, permitiría medir la demanda real.",
            checklist: ["La explicativa lleva dos comas.", "La especificativa va sin comas.", "Uso un encapsulador como «esta medida»."],
          },
          {
            prompt: "Revisa este cierre en 40–60 palabras para que sea formal, matizado y cohesionado: «O sea, es obvio que todos queremos el comedor abierto, y el comedor es lo único que importa, y la facultad tiene que hacerlo ya».",
            model: "En definitiva, ampliar el horario del comedor no resolverá todos los problemas de los estudiantes, pero sí uno muy concreto: el de quienes no pueden comer entre clase y clase. Conviene que la facultad lo pruebe el próximo cuatrimestre y evalúe después los resultados.",
            checklist: ["Elimino «o sea» y las generalizaciones.", "Uso una impersonal con subjuntivo.", "Cierro con una propuesta concreta."],
          },
        ],
      },
      {
        id: "c1-20-recuperacion",
        type: "open",
        prompt: "Recupera las clases de las semanas 16 a 19 con estos estímulos. No vuelvas a las lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de G196 (semana 16). Estímulo: «Todos hemos estudiado alguna vez de madrugada antes de un final». Conviértelo en pregunta retórica y añade una exclamativa de grado.",
            model: "¿Quién no ha estudiado alguna vez de madrugada antes de un final? ¡Cuántas noches hemos pasado con un apunte y un mate frío!",
            checklist: ["La pregunta es negativa porque afirma «todos».", "La exclamativa concuerda («cuántas noches») y lleva tilde."],
          },
          {
            prompt: "Recuperación de G197 y G198 (semana 17). Estímulo: «La biblioteca que es de 1938 sin embargo no tiene calefacción y en base a eso te pedimos que hagas algo con el tema».",
            model: "La biblioteca, que es de 1938, no tiene calefacción; por ello, le solicitamos que estudie la instalación de un sistema de calefacción en la sala de lectura.",
            checklist: ["Puntúo el inciso y el conector.", "Uso usted coherente y léxico preciso, sin «en base a» ni «el tema»."],
          },
          {
            prompt: "Recuperación de G199 y G200 (semana 18). Estímulo, mensaje a un amigo: «Ayer estaba en la sala y llegó la bibliotecaria y nos echó a las ocho en punto». Cuéntalo con presente histórico, «ir y + verbo» y una frase suspendida.",
            model: "Ayer estoy en la sala, a punto de terminar un ejercicio, y va la bibliotecaria y nos echa a las ocho en punto. Con lo que me faltaba…",
            checklist: ["Mantengo el presente histórico.", "«Va… y nos echa» en el mismo tiempo.", "La frase suspendida se entiende por el contexto."],
          },
          {
            prompt: "Recuperación de G201 y G202 (semana 19). Estímulo, reglamento antiguo de la biblioteca: «El lector que extraviare un libro abonará su valor. No bien hubo sonado la campana, se cerraban las puertas». Explica ambas frases en español actual.",
            model: "La primera significa que cualquier lector que pierda un libro tendrá que pagar lo que vale: «extraviare» es futuro de subjuntivo y habla de un caso eventual. La segunda dice que, en cuanto sonaba la campana, se cerraban las puertas: «hubo sonado» indica que una acción terminó justo antes de la otra.",
            checklist: ["Conservo lo eventual de la norma.", "Conservo la sucesión inmediata.", "No uso formas antiguas en mi explicación."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Revisa y reescribe una columna de opinión (250–330 palabras) para un diario regional sobre un servicio universitario o municipal que debería ampliarse o cambiar: el horario de una biblioteca, el comedor, el transporte nocturno, las residencias.",
    context: "La columna se publicará con tu nombre y la leerán estudiantes, docentes y autoridades, algunas de ellas contrarias a tu propuesta. Debe tener una tesis clara, una concesión, datos atribuidos y un cierre con propuesta. Integra al menos una pregunta retórica, relativas bien puntuadas y una cita (de una persona o de un documento antiguo) bien explicada.",
    steps: [
      "Escribe tu tesis en una frase y anota el argumento contrario más fuerte con un dato.",
      "Planifica cuatro o cinco párrafos con una idea cada uno: situación, tesis, concesión, propuesta y cierre.",
      "Redacta la columna integrando una pregunta retórica, una cita explicada y al menos dos relativas de distinto tipo.",
      "Revisa en tres pasadas (estructura, cohesión y matiz y registro), corrige cada relativa y cada coma de inciso y elimina «el mismo», las generalizaciones y los rasgos orales.",
    ],
    useLanguage: [
      "Sostengo que…",
      "Es cierto que…; aun así, …",
      "No está demostrado que… / De ahí que…",
      "…, lo cual… / …, cuyo/a… / en el / la que…",
      "Según…, / Al parecer, …",
      "En definitiva, … no es…, sino…",
    ],
    model: [
      "Cada noche, a partir de las once, decenas de estudiantes esperan en la parada de la Ciudad Universitaria un colectivo que pasa cada cuarenta minutos. ¿Quién puede concentrarse en un final después de esperar casi una hora a la intemperie? La línea que conecta el campus con el centro, que es la única que funciona a esas horas, debería reforzarse durante los períodos de exámenes.",
      "Según el centro de estudiantes, uno de cada tres alumnos cursa materias que terminan después de las diez. Los estudiantes que viven en barrios alejados, precisamente los que tienen menos alternativas, son quienes más sufren esta situación, lo cual se refleja en la deserción de los primeros años.",
      "Es cierto que reforzar el servicio tendría un costo para la empresa y para el municipio. Aun así, esta medida podría limitarse a seis semanas por cuatrimestre y financiarse en parte con el fondo de bienestar estudiantil, cuyo presupuesto no se ejecuta por completo desde hace dos años. No está demostrado que la demanda sea tan baja como afirma la empresa; de ahí que convenga medirla con datos reales.",
      "La propuesta, además, tiene antecedentes. Un viejo reglamento municipal establecía que «el servicio que se prestare en horario nocturno atenderá preferentemente a estudiantes y trabajadores». La forma «prestare» es un futuro de subjuntivo de la época y significa, sencillamente, que cualquier servicio nocturno debía pensar primero en ellos.",
      "En definitiva, reforzar el colectivo nocturno no es un privilegio, sino una condición para que la universidad pública sea realmente accesible. Yo diría que el municipio tiene ahora una buena oportunidad para demostrarlo.",
    ],
    checklist: [
      "La tesis aparece en el primer párrafo y cada párrafo tiene una idea.",
      "Incluyo una concesión con su contraargumento, bien puntuados.",
      "Cada relativa explicativa lleva sus dos comas y cada especificativa va sin ellas.",
      "No repito sustantivos ni uso «el mismo»; retomo con encapsuladores.",
      "Los datos están atribuidos, no exagero y no apilo atenuadores.",
      "No hay rasgos coloquiales fuera de las citas.",
    ],
    words: [250, 330],
  },
  speaking: {
    intro: "Prepárate con palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Debate en la radio universitaria",
        prompt: "La radio de la universidad te invita a defender tu columna durante cuatro minutos frente a un consejero que se opone por el costo. Presenta tu tesis, aporta datos atribuidos, haz una concesión, usa una pregunta retórica y una cita explicada, y cierra con una propuesta concreta. Cuida las pausas de las relativas: en la radio, la pausa es tu coma.",
        prep: [
          "Anota tu tesis, dos datos con su fuente y el argumento del consejero.",
          "Prepara una relativa especificativa y otra explicativa y ensaya sus pausas.",
          "Elige una pregunta retórica para el final de tu primera intervención.",
        ],
        seconds: 240,
        model: "Gracias por la invitación. Sostengo que la sala de lectura debería abrir hasta la medianoche en época de finales. Según la encuesta del centro de estudiantes, uno de cada cuatro alumnos trabaja de día. Los estudiantes que trabajan no tienen otro lugar donde estudiar en silencio. Es cierto que la medida cuesta dinero; aun así, ¿cuánto nos cuesta que esos estudiantes abandonen?…",
        selfCheck: [
          "No hago pausa en las especificativas y sí en las explicativas.",
          "Hago una concesión antes de responder al costo.",
          "Mantengo un registro formal y atribuyo los datos.",
        ],
      },
      {
        title: "Negociar con la directora de la biblioteca",
        prompt: "La directora de la biblioteca está dispuesta a escuchar, pero duda de que haya personal. Pídele con cortesía una prueba de un cuatrimestre, pregúntale qué necesitaría para aceptarla y negocia una condición (voluntarios, horario más corto, informe de uso).",
        prep: [
          "Prepara la apertura con un imperfecto de cortesía.",
          "Ten dos preguntas reales y una propuesta intermedia.",
        ],
        seconds: 150,
        model: "Buenas tardes, directora. Venía a proponerle una prueba durante el próximo cuatrimestre. ¿Qué necesitaría la biblioteca para abrir hasta las doce? Nosotros podríamos organizar un grupo de estudiantes voluntarios…",
        selfCheck: [
          "Uso usted de forma coherente.",
          "Pregunto antes de proponer.",
        ],
      },
      {
        title: "Leer el cierre de la columna",
        prompt: "Lee en voz alta el último párrafo de tu columna marcando las pausas de las relativas explicativas y el tono de la pregunta retórica.",
        prep: ["Marca con barras las pausas del párrafo."],
        seconds: 60,
        selfCheck: ["Cada explicativa tiene su pausa de cierre.", "La pregunta retórica termina en descenso."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu columna revisada, el primer borrador y una tarjeta con una herramienta de cada clase del bloque (G196 a G204).",
    cards: [
      {
        move: "Compara",
        task: "Enseña a tu profesor el primer borrador y la versión revisada, y explica tres cambios: uno de relativas, uno de cohesión y uno de matiz.",
        phrases: ["Aquí quité las comas porque solo me refiero a…", "Cambié «el mismo» por…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta a tu profesor si tu concesión es suficientemente fuerte o si parece hecha solo por cumplir.",
        phrases: ["¿Reconozco de verdad el otro argumento?", "¿Debería dar un dato?"],
      },
      {
        move: "Debate",
        task: "Pide a tu profesor que haga de consejero contrario a tu propuesta y responde con una concesión, un dato y una pregunta retórica.",
        phrases: ["Es cierto que…; aun así, …", "¿Quién no…?"],
      },
      {
        move: "Repasa",
        task: "Muestra tu tarjeta del bloque y pide a tu profesor que elija dos clases al azar para que las uses en una frase oral sobre tu ciudad.",
        phrases: ["De la semana 17 uso…", "Esto lo tomo de la clase G202…"],
      },
    ],
    bring: "Tu columna revisada con el primer borrador, la tarjeta del bloque y, si quieres, la grabación del debate.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué afirma «Los becarios, que viven en el campus, llegan puntuales»?",
        options: ["Que todos los becarios viven en el campus y llegan puntuales.", "Que solo los becarios que viven en el campus llegan puntuales.", "Que ningún becario vive en el campus."],
        answer: 0,
        why: "Explicativa entre comas: se aplica a todos.",
      },
      {
        type: "choice",
        q: "¿Qué relativo corresponde a «el reglamento ___ la sala cierra a las ocho» en un texto cuidado?",
        options: ["que", "según el cual", "donde"],
        answer: 1,
        why: "Tras una preposición larga, «el cual».",
      },
      {
        type: "listen",
        q: "Escucha la frase del consejero. Por las pausas, ¿a quiénes se refiere?",
        options: ["A todos los docentes.", "Solo a los docentes que firmaron la nota.", "A ningún docente."],
        answer: 1,
        why: "Sin pausas: la relativa especifica.",
        audio: "Los docentes que firmaron la nota apoyan la apertura nocturna.",
        voice: "es-AR-m",
      },
      {
        type: "gap",
        q: "Es la única facultad ___ biblioteca abre los domingos.",
        answers: [["cuya"]],
        hint: "Relativo posesivo que concuerda con lo poseído, «biblioteca» (femenino singular).",
        why: "«Cuya» concuerda con «biblioteca».",
      },
      {
        type: "gap",
        q: "No está demostrado que la sala nocturna ___ más gastos de los previstos. [generar]",
        answers: [["genere"]],
        hint: "«No está demostrado que» pone en duda el contenido, así que pide subjuntivo.",
        why: "Duda: presente de subjuntivo.",
      },
      {
        type: "error",
        sentence: "La profesora que hablamos ayer nos prometió apoyar la propuesta.",
        answers: ["La profesora con la que hablamos ayer nos prometió apoyar la propuesta.", "La profesora con quien hablamos ayer nos prometió apoyar la propuesta.", "La profesora con la cual hablamos ayer nos prometió apoyar la propuesta."],
        why: "«Hablar con» alguien: la preposición va delante del relativo en la escritura cuidada.",
      },
      {
        type: "error",
        sentence: "Proponemos ampliar el horario y evaluar el mismo al final del cuatrimestre.",
        answers: ["Proponemos ampliar el horario y evaluarlo al final del cuatrimestre."],
        why: "«El mismo» como pronombre se sustituye por el pronombre átono.",
      },
      {
        type: "order",
        words: ["Es", "cierto", "que", "supone", "un", "gasto;", "aun", "así,", "esta", "medida", "beneficia", "a", "muchos."],
        why: "Concesión, contraargumento puntuado y encapsulador.",
      },
      {
        type: "choice",
        q: "En una columna, ¿qué frase sobre el apoyo estudiantil está mejor matizada?",
        options: ["Todos los estudiantes, sin excepción, apoyan la propuesta.", "Quizá tal vez podría ser que algunos apoyaran posiblemente la propuesta.", "Según la encuesta, la mayoría de los estudiantes apoya la propuesta."],
        answer: 2,
        why: "Dato atribuido, sin exagerar ni apilar atenuadores.",
      },
      {
        type: "open",
        prompt: "Revisa en 80–100 palabras este párrafo y explica tus cambios: «O sea, la biblioteca que es la más antigua de la ciudad cierra temprano, y la biblioteca debería abrir más, y es sin duda lo único que pedimos todos».",
        model: "Versión revisada: «La biblioteca, que es la más antigua de la ciudad, cierra a las ocho. Ampliar su horario sería, según la encuesta, la principal demanda de los estudiantes». Cambios: elimino «o sea», que es oral; pongo comas a la relativa porque la biblioteca es única; sustituyo la repetición de «biblioteca» por un posesivo; y cambio «sin duda lo único que pedimos todos» por un dato atribuido, porque la generalización debilita el argumento.",
        checklist: ["Puntúo la relativa explicativa.", "Elimino la repetición y el rasgo oral.", "Matizo la generalización con un dato."],
      },
    ],
  },
  complete: {
    canNow: [
      "Distingo y puntúo relativas especificativas y explicativas, y elijo el relativo adecuado para un texto cuidado.",
      "Reviso un texto argumentativo en tres pasadas: estructura, cohesión y matiz y registro.",
      "Retomo información con encapsuladores, sinónimos y pronombres sin repetir ni usar «el mismo».",
      "Integro en un mismo texto preguntas retóricas, incisos bien puntuados, estilo formal, citas coloquiales o antiguas bien explicadas y tiempos que atenúan.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Con comas o sin comas» y escribe una frase nueva para cada fila.",
      "Dentro de una semana, revisa en tres pasadas un texto argumentativo que hayas escrito antes de este bloque.",
      "En la próxima clase, lee tu columna y pide a tu profesor que señale una herramienta de cada semana del bloque.",
    ],
  },
  related: [
    { path: "/gramatica/oraciones-restrictivas-explicativas-y-puntuacion", label: "Clase: Oraciones restrictivas, explicativas y puntuación" },
    { path: "/gramatica/revision-argumentativa-c1-coherencia-cohesion-y", label: "Clase: Revisión argumentativa C1: coherencia, cohesión y matiz" },
  ],
};
