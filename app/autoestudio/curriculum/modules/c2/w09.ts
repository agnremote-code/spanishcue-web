import type { Module } from "../../types";

/**
 * C2 · semana 9 · Autoestudio espejo de G218 (perífrasis discursivas de ironía
 * y distanciamiento). Repaso autónomo con la crítica teatral ficticia de una
 * revista cultural de San José sobre la reapertura de un teatro.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w09: Module = {
  id: "c2-09",
  level: "c2",
  week: 9,
  kind: "core",
  title: "Iba a durar seis meses: decir con ironía, contar con distancia",
  subtitle: "Repaso de las perífrasis que cuentan con sorpresa, critican con insistencia, toman distancia o ironizan con el tiempo y el modo",
  stop: {
    place: "San José",
    country: "Costa Rica",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g218",
    "c2.voc.w09-critica-teatral",
    "c2.pron.w09-acento-ironico",
    "c2.lis.w09-columna-y-nota",
    "c2.read.w09-critica-reapertura",
    "c2.wri.w09-cronica-ironica",
    "c2.spk.w09-anecdota-valorada",
    "c2.fun.w09-quitar-poner-valoracion",
    "c2.disc.w09-ironia-sin-mentir",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo interpretar y usar perífrasis que expresan sorpresa, insistencia crítica, distancia o ironía (ir y + verbo, llegar a, no hacer más que, andar + gerundio, venir a decir, hacer como que, iba a, será… pero) y pasar un texto valorativo a uno neutro, y al revés.",
    steps: [
      "Repasa en la teoría las cuatro familias de perífrasis y los errores de forma y de interpretación más frecuentes.",
      "Practica con la crítica teatral y la nota de agenda de una revista cultural de San José.",
      "Escucha a la crítica y al editor discutir qué valoraciones se quedan y lee la crítica completa.",
      "Redacta una crónica con ironía, revísala con la lista de control y cuenta una anécdota con valoración en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste estas perífrasis con tu profesor. Aquí las repasas con otra situación: la reapertura del Teatro del Parque, en San José, cuya renovación iba a durar seis meses y duró tres años. Una crítica teatral escribe una columna llena de ironía; su editor necesita, además, una nota de agenda neutra. Entre los dos textos verás qué hace cada perífrasis: no cambia los hechos, cambia la actitud de quien los cuenta.",
    parts: [
      {
        heading: "Sorpresa y desenlace: «ir y», «agarrar y», «llegar a», «acabar + gerundio»",
        body: [
          "«Ir y + verbo» presenta una acción como inesperada o atrevida: «El día del estreno va y se va la luz». Los dos verbos van en el mismo tiempo y la misma persona: «fue y dijo», «va y dice», «iba y decía». «Coger y» tiene el mismo valor y es frecuente sobre todo en España; en gran parte de América se dice «agarrar y» («agarró y se fue»), y «coger» se evita por su sentido sexual en varias zonas. Son perífrasis coloquiales: dan viveza a una anécdota, pero no van en una nota informativa.",
          "«Llegar a + infinitivo» sitúa un hecho en el extremo de una escala: es lo máximo, lo que nadie esperaba. «El contratista llegó a anunciar la reapertura cuatro veces». «Acabar + gerundio» presenta el desenlace de un proceso, a menudo contrario a lo previsto: «Acabaron inaugurando el teatro sin el telón nuevo».",
        ],
        table: {
          caption: "Sorpresa y desenlace",
          head: ["Perífrasis", "Qué añade", "Ejemplo"],
          rows: [
            ["ir y + verbo (mismo tiempo)", "acción inesperada o atrevida", "En pleno ensayo, el director fue y despidió al iluminador."],
            ["agarrar y / coger y + verbo", "lo mismo, más coloquial; uso regional", "Agarró y se marchó sin pagar la entrada."],
            ["llegar a + infinitivo", "extremo de una escala", "Llegaron a vender entradas para una función que no existía."],
            ["acabar + gerundio", "desenlace, a menudo inesperado", "Acabamos viendo la obra desde el pasillo."],
          ],
        },
        tip: "Comprueba siempre el tiempo de los dos verbos de «ir y»: si no coinciden, la frase se rompe.",
      },
      {
        heading: "Insistencia y crítica: «no hacer más que», «no dejar de», «andar + gerundio», «tener dicho»",
        body: [
          "«No hacer más que + infinitivo» suele significar «hacer algo constantemente», casi siempre con crítica: «El ministerio no hace más que prometer fechas». Atención: también puede significar «solo hacer eso» («no hice más que preguntar») o «acabar de hacer algo» («no hizo más que entrar y se apagaron las luces»); el contexto decide. «No dejar de + infinitivo» indica continuidad o insistencia («los vecinos no dejaron de protestar»), y en la fórmula «no deja de ser + adjetivo» introduce una valoración atenuada pero clara: «No deja de ser curioso que el teatro se inaugure dos veces» (es curioso, y lo digo con ironía).",
          "«Andar + gerundio» añade a la acción repetida un matiz de desaprobación o de dispersión: «El contratista anda diciendo que todo fue culpa de la lluvia». «Tener dicho» («te tengo dicho que…») convierte una advertencia repetida en reproche.",
        ],
        examples: [
          { es: "La empresa no hace más que pedir prórrogas.", note: "Constantemente, y con crítica." },
          { es: "No hice más que sentarme y empezó la función.", note: "Lectura de inmediatez: acababa de sentarme." },
          { es: "No deja de ser llamativo que nadie haya pedido disculpas.", note: "Valoración irónica con apariencia moderada." },
          { es: "El concejal anda contando que el teatro estaba en ruinas.", note: "Repetición con desaprobación." },
        ],
      },
      {
        heading: "Distancia y reformulación: «venir a decir», «dar por», «hacer como que», «resulta que»",
        body: [
          "«Venir a + infinitivo» con verbos de lengua («venir a decir», «venir a reconocer») presenta una reformulación aproximada: lo que alguien dijo, interpretado por quien lo cuenta. «El comunicado viene a reconocer que las obras se paralizaron un año». Es útil para resumir sin citar, pero también permite deslizar la propia interpretación.",
          "«Dar por + participio» presenta algo como cerrado o asumido: «La dirección dio por terminada la rueda de prensa», «Todos daban por hecho que habría retrasos». «Hacer como que + indicativo» describe una simulación: «El portavoz hizo como que no oía la pregunta». «Resulta que» introduce un dato inesperado que cambia la historia, y «a decir verdad» prepara una afirmación que matiza o contradice lo anterior.",
        ],
        examples: [
          { es: "Hizo como que no veía las goteras.", note: "«Hacer como que» va con indicativo: simula, no desea." },
          { es: "Resulta que el telón nuevo nunca llegó a encargarse.", note: "Dato inesperado + «llegar a» como extremo." },
          { es: "El informe viene a decir que nadie supervisó la obra.", note: "Reformulación aproximada: interpretación de quien lo cuenta." },
        ],
        mistakes: [
          {
            wrong: "El portavoz hizo como que no oyera la pregunta.",
            right: "El portavoz hizo como que no oía la pregunta.",
            why: "«Hacer como que» describe una simulación de un hecho y lleva indicativo.",
          },
          {
            wrong: "En el estreno fue y se lo dice a todo el mundo.",
            right: "En el estreno fue y se lo dijo a todo el mundo. / En el estreno va y se lo dice a todo el mundo.",
            why: "En «ir y + verbo» los dos verbos van en el mismo tiempo y la misma persona.",
          },
        ],
      },
      {
        heading: "Ironía con tiempo y modo: «iba a», «será… pero», «no vaya a ser que»",
        body: [
          "«Iba a + infinitivo» presenta un plan del pasado que no se cumplió. Si se atribuye a otro («según él», «nos dijeron»), se vuelve irónico: «El teatro iba a reabrir en seis meses, según la constructora». El futuro y el condicional concesivos admiten algo para restarle importancia: «Será muy moderno, pero no se oye nada desde la fila veinte»; «Sería muy barato, pero acabó costando el triple». «No vaya a ser que» expresa precaución («Lleva paraguas, no vaya a ser que llueva»), pero en tono irónico critica un exceso de cautela: «No dieron ninguna fecha, no vaya a ser que alguien la recuerde».",
          "Ninguna de estas formas cambia los hechos: cambian la actitud de quien habla. Por eso, en un texto informativo neutro, se sustituyen por formulaciones que solo afirman lo comprobable: «La reapertura estaba prevista para marzo de 2023 y se produjo en marzo de 2026».",
        ],
        table: {
          caption: "De la crónica irónica a la nota neutra",
          head: ["Con ironía o valoración", "Neutra"],
          rows: [
            ["La obra iba a durar seis meses, según la constructora.", "La constructora estimó una duración de seis meses."],
            ["Será muy moderno, pero no se oye nada.", "El sistema de sonido presenta problemas en las últimas filas."],
            ["No dieron fechas, no vaya a ser que alguien las recuerde.", "La dirección no ha dado fechas."],
            ["Va y se va la luz en pleno estreno.", "Hubo un corte de luz durante el estreno."],
            ["El ministerio no hace más que prometer.", "El ministerio ha anunciado varias fechas."],
          ],
        },
        mistakes: [
          {
            wrong: "Nota de agenda: «El teatro, que iba a reabrir hace tres años, por fin abre sus puertas».",
            right: "Nota de agenda: «El teatro reabre sus puertas tras tres años de obras».",
            why: "«Iba a» introduce ironía en un texto que debe ser neutro.",
          },
          {
            wrong: "Interpretación: «“No deja de ser curioso” significa que no es curioso».",
            right: "Interpretación: «“No deja de ser curioso” afirma que es curioso, con un matiz irónico».",
            why: "La doble negación no anula la valoración: la presenta atenuada.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Interpreta primero qué actitud transmite cada forma; después úsala o elimínala según el texto.",
    exercises: [
      {
        id: "c2-09-gramatica-actitud",
        type: "context",
        prompt: "Lee el fragmento y elige qué transmite la perífrasis.",
        items: [
          {
            context: "Crítica: «El director llegó a ensayar con los actores en el estacionamiento».",
            q: "¿Qué expresa «llegó a ensayar»?",
            options: [
              "Que el director llegó al estacionamiento para ensayar.",
              "Que ensayar en el estacionamiento fue el extremo al que llevaron las circunstancias.",
              "Que el ensayo fue breve.",
            ],
            answer: 1,
            why: "«Llegar a» sitúa el hecho en el extremo de una escala.",
          },
          {
            context: "Crítica: «La constructora anda diciendo que la culpa fue de la lluvia».",
            q: "¿Qué añade «anda diciendo»?",
            options: [
              "Que lo repite por ahí, con un matiz de desaprobación de quien escribe.",
              "Que lo dijo una sola vez en una rueda de prensa.",
              "Que la constructora camina mientras habla.",
            ],
            answer: 0,
            why: "«Andar + gerundio» indica repetición dispersa y desaprobación.",
          },
          {
            context: "Crítica: «No hice más que ocupar mi butaca y se fue el sonido».",
            q: "¿Qué lectura tiene aquí «no hacer más que»?",
            options: [
              "Constantemente ocupaba la butaca.",
              "Solo ocupé la butaca y no hice nada más en toda la noche.",
              "Acababa de ocupar la butaca cuando se fue el sonido.",
            ],
            answer: 2,
            why: "Seguido de «y» + otro hecho, «no hacer más que» marca inmediatez.",
          },
          {
            context: "Crítica: «El nuevo telón será precioso, pero tarda diez minutos en subir».",
            q: "¿Qué hace el futuro «será»?",
            options: [
              "Predice que el telón será precioso en el futuro.",
              "Concede algo para restarle importancia frente a la crítica que sigue.",
              "Expresa una duda sobre el color del telón.",
            ],
            answer: 1,
            why: "Futuro concesivo: «será… pero».",
          },
        ],
      },
      {
        id: "c2-09-gramatica-formas",
        type: "gap",
        prompt: "Completa con la forma adecuada del verbo entre corchetes.",
        items: [
          { q: "En plena función, el actor va y ___ a hablar con el público. [ponerse]", answers: [["se pone"]], why: "«Ir y»: los dos verbos en el mismo tiempo y persona (presente)." },
          { q: "La ministra hizo como que no ___ los abucheos. [oír]", answers: [["oía", "oyó"]], why: "«Hacer como que» + indicativo." },
          { q: "Después de tres horas de espera, acabamos ___ la obra de pie. [ver]", answers: [["viendo"]], why: "«Acabar + gerundio»: desenlace." },
          { q: "La dirección dio por ___ la polémica con un comunicado de dos líneas. [cerrar]", answers: [["cerrada"]], why: "«Dar por + participio», que concuerda con el complemento: «la polémica… cerrada»." },
          { q: "El teatro ___ a reabrir en marzo de 2023, según el contrato. [ir]", answers: [["iba"]], why: "«Iba a»: plan pasado que no se cumplió." },
          { q: "No publicaron el presupuesto final, no ___ a ser que alguien lo compare con el inicial. [ir]", answers: [["vaya"]], why: "«No vaya a ser que», aquí con valor irónico." },
        ],
      },
      {
        id: "c2-09-gramatica-familias",
        type: "classify",
        prompt: "Clasifica cada fragmento según la función principal de su perífrasis.",
        categories: ["Sorpresa o desenlace", "Insistencia o crítica", "Distancia o reformulación", "Ironía con tiempo o modo"],
        items: [
          { text: "Agarró y se fue en el intermedio.", cat: 0, why: "Acción inesperada." },
          { text: "No dejan de llegar quejas por el aire acondicionado.", cat: 1, why: "Continuidad insistente." },
          { text: "El comunicado viene a reconocer el retraso.", cat: 2, why: "Reformulación aproximada." },
          { text: "Sería muy barata la entrada, pero el estacionamiento costaba el doble.", cat: 3, why: "Condicional concesivo." },
          { text: "Acabaron pidiendo disculpas en la radio.", cat: 0, why: "Desenlace inesperado." },
          { text: "Te tengo dicho que no compres entradas por internet.", cat: 1, why: "Reproche por advertencia repetida." },
          { text: "Dieron por hecho que nadie leería el informe.", cat: 2, why: "Asunción presentada como cerrada." },
          { text: "Iba a ser una obra rapidísima, según el ministro.", cat: 3, why: "Plan fallido atribuido: ironía." },
        ],
      },
      {
        id: "c2-09-gramatica-errores",
        type: "error",
        prompt: "Corrige el error de forma en cada frase.",
        items: [
          {
            sentence: "En el ensayo general, la actriz fue y se cae del escenario.",
            answers: ["En el ensayo general, la actriz fue y se cayó del escenario.", "En el ensayo general, la actriz va y se cae del escenario."],
            why: "Los dos verbos de «ir y» deben coincidir en tiempo.",
          },
          {
            sentence: "El acomodador hizo como que no nos viera.",
            answers: ["El acomodador hizo como que no nos veía.", "El acomodador hizo como que no nos vio."],
            why: "«Hacer como que» lleva indicativo.",
          },
          {
            sentence: "La compañía dio por terminado la gira.",
            answers: ["La compañía dio por terminada la gira."],
            why: "El participio concuerda con el complemento: «la gira… terminada».",
          },
          {
            sentence: "Nota de agenda neutra: «El teatro, que iba a abrir en 2023 según el ministerio, abre el viernes».",
            answers: ["Nota de agenda neutra: «El teatro abre el viernes tras tres años de obras».", "Nota de agenda neutra: «El teatro, cuya reapertura estaba prevista para 2023, abre el viernes»."],
            why: "En un texto neutro, «iba a… según» introduce una ironía que hay que eliminar.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de la crítica teatral y de las obras públicas, para contar la reapertura con o sin ironía.",
    groups: [
      {
        title: "Teatro y crítica",
        items: [
          { es: "la butaca", note: "asiento de la platea de un teatro" },
          { es: "el estreno / la reapertura", note: "primera función de una obra / vuelta a abrir un local" },
          { es: "el telón", note: "cortina grande que separa el escenario de la sala" },
          { es: "la acústica", note: "calidad con que se oye el sonido en un lugar" },
          { es: "la reseña", note: "texto breve que informa y valora una obra" },
          { es: "el tono mordaz", note: "estilo crítico con ironía punzante" },
        ],
      },
      {
        title: "Obras y promesas",
        items: [
          { es: "la prórroga", note: "ampliación de un plazo" },
          { es: "el sobrecosto", note: "dinero que se gasta por encima de lo presupuestado (en España, «sobrecoste»)" },
          { es: "la fecha de entrega", note: "día en que una obra debe terminarse" },
          { es: "echar balones fuera", note: "eludir la responsabilidad" },
          { es: "por fin", note: "después de una larga espera (puede sonar irónico)" },
          { es: "el corte de cinta", note: "acto simbólico de inauguración" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-09-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su significado.",
        pairs: [
          { left: "la prórroga", right: "ampliación de un plazo" },
          { left: "el sobrecosto", right: "dinero que se gasta por encima de lo presupuestado (en España, «sobrecoste»)" },
          { left: "echar balones fuera", right: "eludir la responsabilidad" },
          { left: "el tono mordaz", right: "estilo crítico con ironía punzante" },
          { left: "la acústica", right: "calidad con que se oye el sonido en un lugar" },
          { left: "el corte de cinta", right: "acto simbólico de inauguración" },
        ],
      },
      {
        id: "c2-09-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["prórrogas", "echó balones fuera", "reseña", "acústica"],
        items: [
          { q: "La obra tuvo cinco ___ y ninguna explicación pública.", answers: [["prórrogas"]] },
          { q: "Cuando le preguntaron por el retraso, el gerente ___ y culpó a los proveedores.", answers: [["echó balones fuera"]] },
          { q: "La nueva ___ de la sala es excelente en la platea, pero no en el anfiteatro.", answers: [["acústica"]] },
          { q: "El editor pidió una ___ breve para la agenda, sin opiniones.", answers: [["reseña"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El acento enfático y la suspensión en la ironía",
    explanation: [
      "La ironía oral se apoya en la entonación. En «iba a + infinitivo» irónico, el acento enfático cae sobre «iba» o sobre la palabra que exagera: «IBA a durar seis meses», «iba a ser faci-LÍ-si-mo». En el futuro concesivo, la primera parte termina con un tono suspendido, ni subiendo ni bajando del todo, que anuncia el «pero»: «Será muy moderno… | pero no se oye nada».",
      "Las perífrasis forman un solo grupo fónico con el verbo principal: no hagas pausa entre «fue y» y «dijo», ni entre «no hace más que» y el infinitivo. Una pausa en medio rompe el valor de bloque y suena a dos acciones separadas.",
      "El audio utiliza la síntesis disponible en el navegador: no reproduce bien la ironía ni certifica un acento regional. Úsalo para el ritmo y el agrupamiento; la entonación irónica practícala con una persona.",
    ],
    table: {
      caption: "Agrupar sin pausas",
      head: ["Perífrasis", "Un solo grupo fónico"],
      rows: [
        ["ir y + verbo", "y va y se pone a llover"],
        ["no hacer más que", "no hace más que quejarse"],
        ["hacer como que", "hizo como que no oía"],
        ["llegar a", "llegó a cobrar el doble"],
      ],
    },
    perceive: {
      id: "c2-09-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué valor tiene la perífrasis que oyes.",
      items: [
        {
          q: "¿Qué valor tiene la perífrasis?",
          options: ["Una acción inesperada.", "Un desplazamiento real a otro lugar."],
          answer: 0,
          why: "«Fue y apagó» forma un bloque: no hubo desplazamiento, sino sorpresa.",
          audio: "Y en mitad del monólogo, el técnico fue y apagó los focos.",
          voice: "es-CO-f",
        },
        {
          q: "¿Qué valor tiene «no hace más que»?",
          options: ["Solo hace eso una vez.", "Lo hace constantemente, y quien habla lo critica.", "Acaba de hacerlo."],
          answer: 1,
          why: "Sin otro hecho que siga, «no hace más que» indica repetición crítica.",
          audio: "Este señor no hace más que prometer fechas que nunca cumple.",
          voice: "es-MX-m",
        },
        {
          q: "¿Qué hace quien habla con «será muy elegante»?",
          options: ["Predice que lo será.", "Lo duda.", "Lo concede para criticar algo después."],
          answer: 2,
          why: "Futuro concesivo: el «pero» trae la crítica.",
          audio: "El vestíbulo será muy elegante, pero no hay ni un baño en la segunda planta.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué expresa «iba a costar»?",
          options: ["Un plan que no se cumplió.", "Un precio exacto ya pagado.", "Un deseo para el futuro."],
          answer: 0,
          why: "«Iba a» + «y acabó costando»: plan fallido.",
          audio: "La reforma iba a costar dos millones y acabó costando seis.",
          voice: "es-CO-m",
        },
      ],
    },
    produce: [
      { text: "Iba a durar seis meses, según la constructora.", tip: "Acento enfático en «iba» y tono descendente en «según la constructora».", voice: "es-CO-f" },
      { text: "Será muy moderno, pero desde la fila veinte no se oye nada.", tip: "Suspende el tono en «moderno» antes del «pero».", voice: "es-ES-m" },
      { text: "Y en pleno estreno, va y se va la luz.", tip: "«Va y se va» sin pausa interna.", voice: "es-MX-f" },
      { text: "No dieron ninguna fecha, no vaya a ser que alguien la recuerde.", tip: "Tono irónico, más lento en la segunda parte.", voice: "es-AR-f" },
    ],
    spelling: "En la escritura, la ironía no tiene signo propio. Si temes que no se entienda, apóyala en el contexto (una atribución como «según la constructora», un contraste con «pero») y no en comillas ni signos de admiración repetidos.",
  },
  listening: {
    title: "La crónica y la nota de agenda",
    context: "Mariela, crítica teatral de una revista cultural de San José, y Esteban, su editor, revisan dos textos sobre la reapertura del Teatro del Parque: la crónica irónica de Mariela y la nota neutra para la agenda. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "m", name: "Mariela", voice: "es-CO-f", role: "Crítica teatral" },
      { id: "e", name: "Esteban", voice: "es-MX-m", role: "Editor de la revista" },
    ],
    script: [
      { speaker: "e", text: "Mariela, leí tu crónica anoche y me reí muchísimo. Pero antes de publicarla quiero repasar contigo un par de cosas, y además necesito que me prepares la nota para la agenda del fin de semana, que es otro tipo de texto." },
      { speaker: "m", text: "Claro. ¿Qué te preocupa de la crónica?" },
      { speaker: "e", text: "Nada grave. Empiezas con «el teatro iba a reabrir en seis meses, según la constructora». Eso me encanta, porque no dices que mintieran: dices lo que ellos anunciaron y dejas que el lector saque la conclusión. El problema es el párrafo del estreno. Escribiste «en pleno primer acto, va y se fue la luz». Ahí se te mezclaron los tiempos." },
      { speaker: "m", text: "Tienes razón, qué descuido. O «va y se va la luz», que es más vivo, o «fue y se fue», que suena raro con dos «fue». Me quedo con el presente: «va y se va la luz»." },
      { speaker: "e", text: "Perfecto. Otra cosa: escribes que el ministro «no hizo más que sonreír durante la rueda de prensa». ¿Quieres decir que sonreía todo el tiempo o que solo sonrió y no respondió nada?" },
      { speaker: "m", text: "Las dos cosas, la verdad, pero entiendo que no queda claro. Mejor «no dejó de sonreír en toda la rueda de prensa, y no respondió ni una pregunta». Así cada idea va por su lado." },
      { speaker: "e", text: "Me gusta. Y lo de «no deja de ser curioso que el teatro se haya inaugurado dos veces», eso lo dejaría tal cual. Es la frase más elegante de la crónica." },
      { speaker: "m", text: "Sí, la primera inauguración fue con corte de cinta y sin butacas, y la segunda, tres años después. Ahí no hace falta añadir nada: el lector entiende la ironía solo." },
      { speaker: "e", text: "Bien. Ahora la nota de agenda. Ahí no puede quedar ni una de estas formas. Ni «iba a», ni «por fin», ni «será muy bonito, pero». La gente quiere saber qué obra hay, a qué hora y cuánto cuesta la entrada." },
      { speaker: "m", text: "Ya lo sé, aunque me cuesta. Te propongo algo así: «El Teatro del Parque reabre el viernes tras tres años de obras con el estreno de “La casa de las lluvias”. Funciones de jueves a domingo a las ocho de la noche. Entradas desde cuatro mil colones». ¿Y lo del sonido de las últimas filas?" },
      { speaker: "e", text: "Eso sí es información útil, pero en neutro: «la dirección recomienda las butacas de platea por las condiciones acústicas del anfiteatro». Nada de «será muy moderno, pero no se oye». Si lo cuentas así, la nota informa y la crónica opina, y cada texto hace su trabajo." },
      { speaker: "m", text: "Hecho. Y en la crónica añado un final: «La constructora anda diciendo que la culpa fue de la lluvia. Habrá llovido mucho, pero en San José llueve todos los años»." },
      { speaker: "e", text: "Eso es muy tuyo. Publícalo." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué dos textos revisan y qué diferencia establecen entre ellos?",
        exercise: {
          id: "c2-09-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y la idea principal.",
          items: [
            {
              q: "¿Qué revisan Mariela y Esteban?",
              options: [
                "Una entrevista con el ministro y una carta de queja.",
                "Una crónica irónica y una nota de agenda neutra sobre la reapertura de un teatro.",
                "El guion de una obra de teatro.",
              ],
              answer: 1,
              why: "Hablan de la crónica de Mariela y de la nota para la agenda.",
            },
            {
              q: "¿Qué diferencia establece Esteban entre los dos textos?",
              options: [
                "La crónica opina y la nota informa.",
                "La crónica es para adultos y la nota para niños.",
                "Los dos deben ser igual de irónicos.",
              ],
              answer: 0,
              why: "Al final dice que «la nota informa y la crónica opina».",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada corrección. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-09-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué error de forma encuentra Esteban en la crónica?",
              options: [
                "Un «hacer como que» con subjuntivo.",
                "Un participio sin concordancia.",
                "Un «ir y» con los dos verbos en tiempos distintos.",
              ],
              answer: 2,
              why: "«Va y se fue la luz»: presente y pasado mezclados.",
            },
            {
              q: "¿Por qué cambia Mariela «no hizo más que sonreír»?",
              options: [
                "Porque la frase admitía dos lecturas.",
                "Porque el ministro no sonrió.",
                "Porque es demasiado coloquial.",
              ],
              answer: 0,
              why: "Podía significar «sonreía todo el tiempo» o «solo sonrió».",
            },
            {
              q: "¿Cómo debe aparecer el problema del sonido en la nota de agenda?",
              options: [
                "Con un futuro concesivo.",
                "Eliminado por completo.",
                "Como recomendación neutra sobre las butacas de platea.",
              ],
              answer: 2,
              why: "La información útil se conserva, sin valoración.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en lo que hace cada forma en la conversación. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-09-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con su función.",
          pairs: [
            { left: "iba a reabrir en seis meses, según la constructora", right: "ironía por plan fallido atribuido" },
            { left: "va y se va la luz", right: "sorpresa en una anécdota" },
            { left: "no dejó de sonreír", right: "continuidad sin ambigüedad" },
            { left: "no deja de ser curioso", right: "valoración irónica atenuada" },
            { left: "anda diciendo que la culpa fue de la lluvia", right: "repetición con desaprobación" },
          ],
          why: "Cada perífrasis añade una actitud; la nota de agenda las elimina todas.",
        },
      },
    ],
  },
  reading: {
    title: "El teatro que se inauguró dos veces",
    genre: "Crónica cultural con tono irónico",
    frame: "Crónica de Mariela Solano para una revista cultural de San José sobre la reapertura del Teatro del Parque. Personas, empresa, teatro y obra son ficticios.",
    text: [
      "El Teatro del Parque iba a reabrir en seis meses. Lo dijo la constructora en marzo de 2023, lo repitió el ministerio en una nota de prensa con fotos del arquitecto sonriente y lo creímos, con la ingenuidad de quien todavía tiene entradas guardadas de la última función. Tres años después, el viernes pasado, el telón volvió a subir. Tardó diez minutos en hacerlo, pero de eso hablaré más tarde.",
      "Conviene recordar cómo llegamos hasta aquí. En el verano de 2023 se desmontaron las butacas y se levantó el suelo de la platea. En diciembre, la constructora pidió la primera prórroga, alegando problemas con la madera importada. En 2024 llegó la segunda, luego la tercera, y en algún momento de ese año, nadie sabe muy bien cuándo, la obra se detuvo por completo. El ministerio no hacía más que anunciar fechas: abril, luego septiembre, luego «antes de que termine el año». Llegó a convocar a la prensa para un corte de cinta en un teatro sin butacas. No deja de ser curioso que el Teatro del Parque sea, que yo sepa, el único edificio del país que se ha inaugurado dos veces.",
      "Durante esos meses, los responsables desarrollaron una notable habilidad para no responder. En una rueda de prensa de 2025, cuando un colega preguntó por el sobrecosto, el viceministro hizo como que no oía la pregunta y pasó a hablar del nuevo vestíbulo. La constructora, por su parte, anda diciendo desde entonces que la culpa fue de la lluvia. Habrá llovido mucho, no lo dudo, pero en San José llueve todos los años, más o menos en las mismas fechas, y eso suele saberse antes de firmar un contrato.",
      "El informe de la Contraloría que se publicó en enero viene a reconocer lo que todos sospechábamos: nadie supervisó la obra durante casi un año. No lo dice con esas palabras, claro; habla de «debilidades en el seguimiento contractual». Pero el sentido es el mismo. Resulta que el telón nuevo, que figuraba en todos los anuncios, ni siquiera llegó a encargarse hasta el otoño pasado. El que sube con tanta calma es, en realidad, un telón prestado por el teatro de Heredia.",
      "Y llegamos al viernes. El público, entre el que había bastantes abonados con canas, entró con una mezcla de cariño y desconfianza. El vestíbulo será muy elegante, eso nadie lo discute, con su piso de madera clara y sus lámparas nuevas; pero no hay ni un baño en la segunda planta, y en el intermedio la fila llegaba a la escalera. La sala, en cambio, recupera la belleza de siempre. La platea se ve y se oye de maravilla. El anfiteatro es otra historia: desde la fila veinte, los diálogos llegan como si los actores hablaran desde la calle.",
      "La obra elegida para la reapertura, «La casa de las lluvias», es una comedia sobre una familia que lleva años esperando que alguien les arregle el techo. No sé si fue una decisión irónica de la dirección o una casualidad, pero el público lo entendió perfectamente y aplaudió con ganas cada vez que un personaje decía «la semana que viene vienen a arreglarlo». En pleno primer acto, va y se va la luz. Fueron apenas tres minutos, y los actores, que son excelentes, siguieron improvisando a oscuras. Acabamos aplaudiendo también al apagón.",
      "Sería injusto terminar esta crónica sin reconocer lo que sí se ha hecho bien. La restauración de la fachada es impecable, las butacas de la platea son cómodas y la programación anunciada para el semestre es la más ambiciosa que ha tenido el teatro en una década. La directora artística, que llegó cuando la obra ya estaba atrasada y que no tuvo nada que ver con los contratos, ha sabido convertir el regreso en una celebración. A ella y a su equipo, todo el mérito.",
      "Al resto, una sugerencia modesta. La próxima vez que anuncien una obra pública, den una fecha y cúmplanla, o den una fecha honesta. O, si prefieren, no den ninguna, no vaya a ser que alguien la apunte. Mientras tanto, el público de San José ha recuperado su teatro, y eso, después de todo, es lo único que importa. Compren entradas de platea.",
    ],
    glossary: [
      { es: "la Contraloría", note: "organismo público que controla el uso del dinero del Estado" },
      { es: "con canas", note: "con el pelo blanco; personas mayores" },
      { es: "el anfiteatro", note: "parte alta de la sala de un teatro" },
    ],
    tasks: [
      {
        id: "c2-09-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la crónica.",
        items: [
          {
            q: "¿Qué ironiza la autora con «iba a reabrir en seis meses»?",
            options: [
              "Que el teatro reabrió antes de lo previsto.",
              "Que el plan anunciado no se cumplió, y lo atribuye a quienes lo anunciaron.",
              "Que la autora no sabía cuándo reabriría.",
            ],
            answer: 1,
            why: "«Iba a» marca un plan fallido; la atribución a la constructora y al ministerio lo vuelve irónico.",
          },
          {
            q: "¿Qué reconoce, según la autora, el informe de la Contraloría?",
            options: [
              "Que la lluvia fue la causa del retraso.",
              "Que la obra costó menos de lo previsto.",
              "Que nadie supervisó la obra durante casi un año.",
            ],
            answer: 2,
            why: "«Viene a reconocer» reformula lo que el informe dice con otras palabras.",
          },
          {
            q: "¿Cuál es la actitud de la autora hacia la directora artística?",
            options: [
              "Elogiosa y sin ironía.",
              "Irónica, como con el resto.",
              "Indiferente.",
            ],
            answer: 0,
            why: "En el séptimo párrafo le atribuye «todo el mérito» sin ninguna perífrasis irónica.",
          },
        ],
      },
      {
        id: "c2-09-lectura-funciones",
        type: "match",
        prompt: "Relaciona cada fragmento de la crónica con lo que hace la perífrasis.",
        pairs: [
          { left: "Llegó a convocar a la prensa para un corte de cinta", right: "extremo de una escala" },
          { left: "hizo como que no oía la pregunta", right: "simulación" },
          { left: "viene a reconocer lo que todos sospechábamos", right: "reformulación interpretada" },
          { left: "El vestíbulo será muy elegante", right: "concesión antes de una crítica" },
          { left: "no vaya a ser que alguien la apunte", right: "precaución irónica" },
        ],
      },
      {
        id: "c2-09-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa la crónica con argumentos propios.",
        items: [
          {
            prompt: "Algunos lectores dicen que la crónica es injusta con el ministerio. Explica en 80–100 palabras si la ironía de la autora se apoya en hechos o solo en opiniones, con dos ejemplos del texto, y si te parece legítima.",
            model: "La ironía se apoya en hechos comprobables. Cuando escribe que el teatro «iba a reabrir en seis meses», cita un anuncio real y lo contrasta con los tres años que duró la obra. Cuando dice que «llegó a convocar a la prensa para un corte de cinta en un teatro sin butacas», describe un acto que ocurrió. La autora no inventa: elige cómo presentar lo que pasó. Me parece legítima, porque además reconoce lo bien hecho y separa a la directora de los responsables del retraso.",
            checklist: [
              "Doy dos ejemplos del texto.",
              "Distingo hecho y valoración.",
              "Tomo posición y la justifico.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la crónica construye la ironía sin afirmar nada que no sea comprobable.",
      items: [
        { quote: "El Teatro del Parque iba a reabrir en seis meses.", note: "Plan fallido: la ironía nace del contraste con lo que vino después." },
        { quote: "No deja de ser curioso que el Teatro del Parque sea, que yo sepa, el único edificio del país que se ha inaugurado dos veces.", note: "Valoración atenuada en la forma y clara en el fondo." },
        { quote: "Habrá llovido mucho, no lo dudo, pero en San José llueve todos los años", note: "Futuro concesivo: se concede para desmontar el argumento." },
        { quote: "En pleno primer acto, va y se va la luz.", note: "«Ir y» con los dos verbos en presente: sorpresa narrativa." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección del registro, paso de lo valorativo a lo neutro y escritura breve. Termina recuperando las clases de las semanas anteriores de C2.",
    exercises: [
      {
        id: "c2-09-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases con la perífrasis bien construida.",
        items: [
          {
            words: ["El", "acomodador", "hizo", "como", "que", "no", "veía", "la", "fila."],
            why: "«Hacer como que» + indicativo.",
          },
          {
            words: ["Llegaron", "a", "vender", "entradas", "para", "una", "sala", "sin", "techo."],
            why: "«Llegar a»: extremo de una escala.",
          },
          {
            words: ["La", "dirección", "dio", "por", "cerradas", "las", "inscripciones."],
            why: "«Dar por + participio» concordado con «las inscripciones».",
          },
        ],
      },
      {
        id: "c2-09-registro",
        type: "context",
        prompt: "Elige la versión adecuada para cada texto.",
        items: [
          {
            context: "Nota de agenda de la revista: información práctica, sin opinión.",
            q: "¿Qué versión eliges?",
            options: [
              "Por fin, y tras mil prórrogas, el teatro abre el viernes.",
              "El teatro, que iba a abrir hace años, abre el viernes.",
              "El teatro reabre el viernes, tras tres años de obras.",
            ],
            answer: 2,
            why: "Solo afirma lo comprobable, sin «por fin» ni «iba a».",
          },
          {
            context: "Mensaje de Mariela a una amiga, contándole el estreno.",
            q: "¿Qué versión suena más natural en ese registro?",
            options: [
              "Durante el primer acto se produjo una interrupción del suministro eléctrico.",
              "Y en pleno primer acto, va y se va la luz.",
              "Se registró un corte de luz durante el primer acto.",
            ],
            answer: 1,
            why: "«Ir y» da viveza a la anécdota en un registro coloquial.",
          },
          {
            context: "Crónica cultural con tono mordaz, para lectores de toda América.",
            q: "¿Qué versión es más adecuada para ese público?",
            options: [
              "El viceministro cogió y se fue de la rueda de prensa.",
              "El viceministro agarró y se fue de la rueda de prensa.",
              "El viceministro abandonó la sala por motivos desconocidos.",
            ],
            answer: 1,
            why: "«Agarrar y» mantiene la sorpresa y evita «coger», que en varias zonas de América tiene sentido sexual.",
          },
        ],
      },
      {
        id: "c2-09-neutralizar",
        type: "transform",
        prompt: "Quita la valoración de cada frase y deja solo la información comprobable.",
        items: [
          {
            source: "El ministerio no hacía más que anunciar fechas que nunca cumplía.",
            instruction: "Reescríbela como dato neutro, empezando por «El ministerio anunció».",
            answers: ["El ministerio anunció varias fechas que no se cumplieron.", "El ministerio anunció varias fechas de reapertura que no se cumplieron."],
            why: "Sin «no hacer más que», la frase informa sin criticar.",
          },
          {
            source: "La constructora anda diciendo que la culpa fue de la lluvia.",
            instruction: "Reescríbela como dato neutro con el verbo «atribuir».",
            answers: ["La constructora atribuye el retraso a la lluvia.", "La constructora ha atribuido el retraso a la lluvia."],
            why: "«Andar diciendo» se sustituye por un verbo de atribución neutro.",
          },
          {
            source: "El vestíbulo será muy elegante, pero no hay baños en la segunda planta.",
            instruction: "Reescríbela como dato neutro sin futuro concesivo.",
            answers: ["El vestíbulo ha sido renovado y la segunda planta no tiene baños.", "La segunda planta no tiene baños."],
            why: "Se elimina la concesión irónica y se mantiene el dato útil.",
          },
        ],
      },
      {
        id: "c2-09-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Cuenta en 50–70 palabras, con tono irónico, la historia de una obra pública de tu ciudad (real o inventada). Usa al menos tres perífrasis distintas de esta semana y no afirmes nada que no sea comprobable.",
            model: "El puente peatonal de mi barrio iba a estar listo para la Navidad de 2024, según el alcalde. Llegaron a poner una placa con su nombre antes de colocar las barandillas. Durante un año, la empresa no hizo más que pedir paciencia. Y en enero, va y se descubre que el puente no llega a la otra acera. Acabamos cruzando por el semáforo, como siempre.",
            checklist: [
              "Uso al menos tres perífrasis distintas.",
              "La ironía se apoya en hechos.",
              "Los verbos de «ir y» coinciden en tiempo.",
            ],
          },
          {
            prompt: "Reescribe tu texto anterior como nota informativa neutra de 40–60 palabras para el periódico del barrio.",
            model: "El puente peatonal de la avenida Central, cuya apertura estaba prevista para diciembre de 2024, sigue cerrado. La empresa constructora ha solicitado dos prórrogas. Según la inspección municipal de enero, el tramo final no coincide con la acera opuesta y deberá modificarse. El ayuntamiento no ha dado una nueva fecha.",
            checklist: [
              "No queda ninguna perífrasis valorativa.",
              "Mantengo los datos comprobables.",
              "Atribuyo la información a una fuente.",
            ],
          },
        ],
      },
      {
        id: "c2-09-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las semanas anteriores de C2 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G208 (condicional de rumor). Estímulo: «La constructora habría cobrado el doble de lo pactado» frente a «La constructora llegó a cobrar el doble de lo pactado». Explica qué responsabilidad asume quien escribe en cada versión.",
            model: "En la primera, el condicional de rumor presenta el dato como no confirmado: quien escribe lo transmite sin hacerse responsable de su verdad. En la segunda, «llegó a cobrar» afirma el hecho como cierto y además lo valora como un extremo. La segunda exige tener pruebas; la primera, solo una fuente que lo afirme.",
            checklist: [
              "Explico el distanciamiento del condicional.",
              "Explico que «llegar a» afirma y valora.",
            ],
          },
          {
            prompt: "Recuperación de la clase G213 (ambigüedad accidental). Estímulo: «El director no hizo más que hablar con los actores». Explica las lecturas posibles y escribe una versión para cada una.",
            model: "Puede significar que hablaba con ellos constantemente, que solo habló con ellos y no hizo nada más, o, si sigue otro hecho, que acababa de hablar con ellos. Versiones: «El director no dejó de hablar con los actores»; «El director se limitó a hablar con los actores»; «El director acababa de hablar con los actores cuando…».",
            checklist: [
              "Identifico al menos dos lecturas.",
              "Escribo una versión explícita para cada una.",
            ],
          },
          {
            prompt: "Recuperación de la clase G215 (cambios de trato). Estímulo: el viceministro tutea a todos los periodistas y, ante una pregunta incómoda, responde: «Mire usted, señora, eso no viene al caso». Explica qué comunica el cambio y si refuerza o no la ironía de una crónica que lo cite.",
            model: "Pasar del tú habitual al usted marca distancia y cierto enfado: el viceministro se protege de la pregunta. En una crónica, citar ese cambio sin comentarlo refuerza la ironía, porque el lector percibe la incomodidad sin que la autora tenga que afirmarla. Es un recurso que se apoya en un hecho verificable.",
            checklist: [
              "Interpreto el cambio frente al trato habitual.",
              "Relaciono el cambio con el efecto irónico.",
            ],
          },
          {
            prompt: "Recuperación de la clase G216 (variación regional del pasado). Estímulo: titular de la revista para lectores costarricenses: «Hoy ha reabierto el Teatro del Parque». Explica si conviene cambiarlo y propón una versión.",
            model: "En Costa Rica, como en gran parte de América, lo ocurrido hoy se cuenta normalmente con el indefinido. Para lectores costarricenses sonaría más natural «Hoy reabrió el Teatro del Parque» o, en un titular, «Reabre el Teatro del Parque». No es que la forma compuesta sea incorrecta, sino que no es la habitual en esa variedad.",
            checklist: [
              "Relaciono la elección con la variedad del público.",
              "No presento la forma compuesta como error.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una crónica con tono irónico para la revista cultural (400–520 palabras) sobre una promesa pública que no se cumplió: una obra, un servicio, un festival. Debe contar los hechos con perífrasis de sorpresa, insistencia, distancia e ironía, reconocer al menos algo positivo y terminar con un párrafo neutro de información práctica.",
    context: "Los lectores de la revista aprecian el humor, pero también comprueban los datos. La ironía tiene que apoyarse en hechos verificables y no puede convertirse en insulto. Puedes usar el caso del teatro o inventar otro con la misma lógica.",
    steps: [
      "Haz una lista de hechos comprobables (fechas, anuncios, cifras) y decide qué perífrasis usarás para presentar cada uno.",
      "Decide el orden: promesa inicial, cómo se incumplió, momento culminante, reconocimiento de lo positivo e información práctica final.",
      "Redacta sin copiar el modelo. Usa al menos seis perífrasis distintas de las cuatro familias.",
      "Revisa la crónica con la lista de control: corrige los tiempos de «ir y», el modo de «hacer como que» y la concordancia de «dar por», y comprueba que el último párrafo es neutro.",
    ],
    useLanguage: [
      "iba a + infinitivo, según…",
      "llegó a + infinitivo; acabó + gerundio",
      "no hacía más que…; no deja de ser curioso que…",
      "anda diciendo que…; hizo como que…",
      "viene a reconocer que…; resulta que…",
      "será / sería…, pero…; no vaya a ser que…",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): El tren ligero entre San José y Cartago iba a funcionar «a finales de 2024», según la presentación oficial, que incluía un video con música épica y vagones relucientes. Llegamos a ver los vagones, eso sí: estuvieron dos años aparcados en un patio de Pavas, cubiertos con una lona azul. Mientras tanto, la empresa adjudicataria no hacía más que pedir prórrogas y el ministerio, cada vez que alguien preguntaba, hacía como que la pregunta era sobre otro proyecto.",
    ],
    checklist: [
      "Uso al menos seis perífrasis de las cuatro familias.",
      "Los dos verbos de «ir y» coinciden en tiempo y persona.",
      "«Hacer como que» va con indicativo y «dar por» concuerda.",
      "Cada ironía se apoya en un hecho comprobable.",
      "Reconozco algo positivo y el párrafo final es neutro.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Contar una anécdota con valoración",
        prompt: "Cuenta en unos cuatro minutos una anécdota real o inventada en la que algo salió muy distinto de lo previsto (un viaje, una mudanza, un trámite). Usa perífrasis de sorpresa, insistencia, distancia e ironía y termina con una valoración.",
        prep: [
          "Anota los hechos en orden y marca dónde irá cada perífrasis.",
          "Prepara un final con un futuro concesivo.",
        ],
        seconds: 240,
        model: "La mudanza iba a ser rapidísima, según mi hermano. Él lo tenía todo calculado: un camión, dos amigos y tres horas. Pues bien, el sábado a las ocho de la mañana, va y llama el del camión para decir que se le había roto el motor. Acabamos llevando el sofá entre cuatro por la calle…",
        selfCheck: [
          "Uso al menos cinco perífrasis distintas.",
          "No hago pausa dentro de «va y» ni de «no hacía más que».",
          "La entonación marca la ironía en «iba a».",
        ],
      },
      {
        title: "Debatir con el editor",
        prompt: "El editor te pide que quites de tu crónica la frase «El viceministro hizo como que no oía la pregunta», porque «parece una acusación». Defiende tu frase o propón una alternativa: hazle dos preguntas, explica en qué hecho se apoya y negocia una solución.",
        prep: [
          "Piensa qué pruebas tienes del hecho (grabación, testigos).",
          "Prepara una alternativa menos marcada por si no lo convences.",
        ],
        seconds: 150,
        model: "Entiendo la preocupación. ¿Te preocupa que parezca que le leo la mente? ¿O que el ministerio se queje? La frase se apoya en la grabación: le preguntaron por el sobrecosto y empezó a hablar del vestíbulo. Si prefieres, puedo escribir «no respondió a la pregunta y pasó a hablar del vestíbulo». Pierde algo de gracia, pero dice lo mismo.",
        selfCheck: [
          "Hago al menos dos preguntas.",
          "Distingo el hecho de mi interpretación.",
          "Propongo una alternativa concreta.",
        ],
      },
      {
        title: "De la crónica a la radio",
        prompt: "Lee en voz alta el primer párrafo de tu crónica y después conviértelo oralmente en una noticia neutra de treinta segundos para la radio.",
        prep: [
          "Marca las perífrasis que vas a eliminar en la versión de radio.",
          "Prepara un verbo neutro para cada una.",
        ],
        seconds: 100,
        selfCheck: [
          "En la lectura marco la ironía con la entonación.",
          "En la versión de radio no queda ninguna valoración.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu crónica y una duda concreta. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Cuenta",
        task: "Cuenta a tu profesor una anécdota breve con «ir y», «llegar a» y «acabar + gerundio», y pídele que te diga si el tono es el adecuado.",
        phrases: ["Y va y…", "Llegó a…", "Acabamos…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale si en su variedad se dice «coger y», «agarrar y» o solo «ir y», y en qué situaciones.",
        phrases: ["¿Tú dirías «agarró y se fue»?", "¿Te suena coloquial o vulgar?"],
      },
      {
        move: "Neutraliza",
        task: "Lee una frase irónica de tu crónica y pide a tu profesor que la convierta en neutra; después compara su versión con la tuya.",
        phrases: ["En neutro, yo diría…", "¿Se pierde algún dato?"],
      },
      {
        move: "Interpreta",
        task: "Lleva un titular o un tuit real con ironía y explica qué perífrasis o qué tiempo verbal la produce.",
        phrases: ["La ironía está en…", "Si quitamos…, queda…"],
      },
    ],
    bring: "Tu crónica revisada, la versión neutra del primer párrafo y, si quieres, la grabación de tu anécdota.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«El presentador llegó a confundir el nombre de la obra.» ¿Qué expresa «llegó a confundir»?",
        options: [
          "Que el presentador llegó tarde.",
          "Que confundirlo fue el extremo de una serie de errores.",
          "Que estuvo a punto de confundirlo, pero no lo hizo.",
        ],
        answer: 1,
        why: "«Llegar a» sitúa el hecho en el extremo de una escala.",
      },
      {
        type: "choice",
        q: "¿Qué frase está bien construida?",
        options: [
          "En el ensayo, la directora fue y se enfada con todos.",
          "La directora hizo como que no estuviera enfadada.",
          "La directora dio por concluida la reunión.",
        ],
        answer: 2,
        why: "Las otras mezclan tiempos en «ir y» o usan subjuntivo con «hacer como que».",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué actitud transmite quien habla?",
        options: [
          "Crítica irónica hacia un plan que no se cumplió.",
          "Admiración por la rapidez del proyecto.",
          "Duda sobre si el proyecto existe.",
        ],
        answer: 0,
        why: "«Iba a estar listo» atribuido a otro y contrastado con la realidad: ironía.",
        audio: "El auditorio iba a estar listo en un año, según el gobernador. Llevamos cuatro.",
        voice: "es-MX-f",
      },
      {
        type: "gap",
        q: "Cuando preguntaron por el presupuesto, el gerente hizo como que no ___ nada. [saber]",
        answers: [["sabía"]],
        hint: "«Hacer como que» describe una simulación: va con indicativo.",
        why: "Indicativo: «hizo como que no sabía».",
      },
      {
        type: "gap",
        q: "En la última función, el actor principal va y ___ el texto en mitad del monólogo. [olvidar]",
        answers: [["olvida"]],
        hint: "El segundo verbo coincide en tiempo y persona con «va».",
        why: "«Va y olvida»: los dos en presente.",
      },
      {
        type: "transform",
        source: "El nuevo sistema de venta de entradas será muy moderno, pero se cae cada viernes.",
        instruction: "Convierte la frase en información neutra, sin futuro concesivo ni valoración, manteniendo el dato del fallo.",
        answers: ["El sistema de venta de entradas presenta fallos los viernes.", "El nuevo sistema de venta de entradas falla los viernes."],
        why: "Se elimina la concesión irónica y queda el dato.",
      },
      {
        type: "error",
        sentence: "La compañía dio por terminado la temporada en noviembre.",
        answers: ["La compañía dio por terminada la temporada en noviembre."],
        why: "El participio concuerda con «la temporada».",
      },
      {
        type: "error",
        sentence: "Nota de agenda: «Por fin, y tras mil promesas, reabre la Sala Garbo».",
        answers: ["Nota de agenda: «Reabre la Sala Garbo tras dos años de obras».", "Nota de agenda: «La Sala Garbo reabre tras dos años de obras»."],
        why: "En una nota neutra no caben «por fin» ni «tras mil promesas».",
      },
      {
        type: "order",
        words: ["No", "deja", "de", "ser", "curioso", "que", "nadie", "haya", "dimitido."],
        why: "Valoración irónica atenuada con «no deja de ser».",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de clase la diferencia entre «iba a abrir en marzo» dicho por el propio responsable del proyecto y la misma frase en una crónica, seguida de «según el ministerio». Incluye un ejemplo de cada uso.",
        model: "Dicha por el responsable, «iba a abrir en marzo» suele ser una explicación: reconoce un plan que no se cumplió. «Iba a abrir en marzo, pero tuvimos un problema con los permisos». En una crónica, seguida de «según el ministerio», la misma forma se vuelve irónica: quien escribe atribuye el plan a otro y deja que el lector compare con lo que ocurrió. «El teatro iba a abrir en marzo, según el ministerio. Abrió tres años después». La ironía nace de la atribución y del contraste.",
        checklist: [
          "Explico el valor de plan no cumplido.",
          "Explico cómo la atribución crea ironía.",
          "Doy un ejemplo de cada uso.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Interpreto y uso perífrasis de sorpresa y desenlace: ir y / agarrar y + verbo, llegar a, acabar + gerundio.",
      "Interpreto y uso perífrasis de insistencia y crítica: no hacer más que, no dejar de, andar + gerundio, tener dicho.",
      "Uso venir a decir, dar por + participio, hacer como que + indicativo y resulta que para tomar distancia o reformular.",
      "Construyo ironía con «iba a», el futuro y el condicional concesivos y «no vaya a ser que», y paso un texto valorativo a uno neutro.",
    ],
    review: [
      "Dentro de dos días, tapa la columna derecha de la tabla «De la crónica irónica a la nota neutra» y reescribe cada frase.",
      "Dentro de una semana, busca una columna de opinión real y subraya tres perífrasis de esta semana.",
      "En la próxima clase, lee tu crónica y pide a tu profesor que señale dónde la ironía funciona y dónde no.",
    ],
  },
  related: [
    { path: "/gramatica/perifrasis-discursivas-de-ironia-y-distanciamiento", label: "Clase: Perífrasis discursivas de ironía y distanciamiento" },
  ],
};
