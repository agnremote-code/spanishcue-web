import type { Module } from "../../types";

/**
 * C2 · semana 4 · Autoestudio espejo de G210 (subordinación múltiple sin pérdida
 * de referentes). Repaso autónomo con una oficina municipal ficticia de lenguaje
 * claro en Rosario que reescribe una resolución sobre el traslado de una feria.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w04: Module = {
  id: "c2-04",
  level: "c2",
  week: 4,
  kind: "core",
  title: "La resolución de la feria: frases largas que no se pierden",
  subtitle: "Repaso de la subordinación múltiple: sujeto y verbo a la vista, referentes claros y cadenas de «que» bajo control",
  stop: {
    place: "Rosario",
    country: "Argentina",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g210",
    "c2.voc.w04-lenguaje-claro-feria",
    "c2.pron.w04-pausas-referentes",
    "c2.lis.w04-revision-aviso",
    "c2.read.w04-columna-lenguaje-claro",
    "c2.wri.w04-aviso-reescrito",
    "c2.spk.w04-explicar-negociar",
    "c2.fun.w04-desambiguar",
    "c2.disc.w04-encapsular",
  ],
  reviewObjectives: ["c2.gram.g208","c2.gram.g209","c2.voc.w03-redaccion-verificacion","c2.pron.w03-ria-ra","c2.lis.w03-reunion-redaccion","c2.read.w03-carta-directora","c2.wri.w03-cronica-seguimiento","c2.spk.w03-boletin-replica","c2.fun.w03-atribuir-fuente","c2.disc.w03-cambio-plano"],
  prerequisites: ["c2-03"],
  goal: {
    canDo: "Puedo escribir y revisar oraciones largas con varios niveles de subordinación sin que el lector pierda el sujeto, el verbo principal ni el referente de cada pronombre.",
    steps: [
      "Repasa en la teoría cómo localizar el esqueleto de una oración larga y qué herramientas resuelven un referente ambiguo.",
      "Practica con fragmentos de una resolución municipal, de un aviso a vecinos y de correos entre funcionarios.",
      "Escucha a dos funcionarias revisar el aviso y lee la columna de la oficina de lenguaje claro.",
      "Reescribe el aviso completo, revísalo con la lista de control y explícalo en voz alta a quienes lo van a recibir.",
    ],
  },
  theory: {
    intro: "En clase trabajaste oraciones largas de textos jurídicos, académicos y periodísticos. Aquí lo repasas con otro material: una resolución de la Municipalidad de Rosario sobre el traslado de una feria artesanal, que una oficina de lenguaje claro debe hacer comprensible sin trocearla en frases de niño. El objetivo no es acortar por acortar, sino que cada pieza se entienda a la primera.",
    parts: [
      {
        heading: "El esqueleto: sujeto, verbo principal y capas",
        body: [
          "Ante una oración de seis líneas, lo primero es encontrar el verbo principal y su sujeto. Todo lo demás son capas: oraciones sustantivas (que completan a un verbo), relativas (que completan a un nombre) y adverbiales (de tiempo, causa, condición, finalidad). Si tachas mentalmente las capas, debe quedar una oración que se sostenga sola.",
          "La distancia entre el sujeto y el verbo es el primer riesgo. Cuando el sujeto es largo o va pospuesto, el lector puede perderlo o el autor puede equivocarse en la concordancia: el verbo concuerda con el núcleo del sujeto, no con el último sustantivo que aparece antes. En «La reubicación de los puestos que ocupaban los artesanos del parque no fue consultada», el núcleo es «reubicación»: por eso «fue», en singular.",
          "Un sujeto pospuesto puede ser una buena opción cuando es muy largo: «Llegó ayer el informe que había pedido la comisión de espacios públicos». Pero si detrás del verbo vienen varias capas, conviene comprobar que el lector sabe en todo momento quién hace qué.",
        ],
        table: {
          caption: "Una oración, capa a capa",
          head: ["Capa", "Fragmento", "Función"],
          rows: [
            ["esqueleto", "La Secretaría resolvió trasladar la feria", "verbo principal y su sujeto"],
            ["relativa", "que funcionaba desde 1994 en la plaza", "completa a «la feria»"],
            ["adverbial causal", "porque las obras del desagüe ocuparán la explanada", "explica la decisión"],
            ["adverbial temporal", "hasta que la Dirección de Obras certifique su finalización", "limita el traslado"],
            ["sustantiva", "que los feriantes conservarán sus lugares", "completa a «garantizó»"],
          ],
        },
        examples: [
          { es: "La Secretaría, después de escuchar a los feriantes, resolvió trasladar la feria que funcionaba desde 1994 en la plaza, porque las obras del desagüe ocuparán la explanada hasta que la Dirección de Obras certifique su finalización.", note: "Si tachas las capas, queda: «La Secretaría resolvió trasladar la feria»." },
          { es: "El cumplimiento de los horarios que fijaron los coordinadores de los tres sectores será controlado por inspectores.", note: "El verbo concuerda con «cumplimiento», no con «sectores»." },
        ],
        mistakes: [
          {
            wrong: "La asignación de los lugares que solicitaron los artesanos de cerámica y de cuero fueron revisadas.",
            right: "La asignación de los lugares que solicitaron los artesanos de cerámica y de cuero fue revisada.",
            why: "El núcleo del sujeto es «asignación»: verbo y participio en singular femenino.",
          },
        ],
      },
      {
        heading: "¿De quién es «su»? Referentes en riesgo",
        body: [
          "Los referentes se pierden en tres puntos: el posesivo «su» y el pronombre «le» cuando hay dos candidatos posibles del mismo tipo; el sujeto tácito de una subordinada, que el lector atribuye al último nombre mencionado; y la relativa con «que» detrás de un complemento con «de» («el abogado del feriante que presentó el recurso»: ¿quién lo presentó?).",
          "Cuando los dos candidatos tienen el mismo género y número, la gramática no ayuda: «Sergio habló con Adrián sobre su puesto» puede referirse al puesto de cualquiera de los dos. Hay que elegir una herramienta.",
        ],
        table: {
          caption: "Herramientas para desambiguar",
          head: ["Herramienta", "Ejemplo"],
          rows: [
            ["repetir el nombre", "Sergio habló con Adrián sobre el puesto de Adrián."],
            ["«de + nombre» en lugar de «su»", "… sobre el puesto del concesionario."],
            ["«este / aquel», «el primero / el segundo»", "Sergio habló con Adrián; este le pidió más espacio."],
            ["«el cual / la cual» según género y número", "El abogado de la feriante, la cual presentó el recurso, …"],
            ["«dicho / dicha» (registro administrativo)", "Dicho recurso se resolverá en treinta días."],
            ["estilo directo o reordenar", "Adrián le dijo a Sergio: «Necesito mi puesto antes de diciembre»."],
          ],
        },
        mistakes: [
          {
            wrong: "El coordinador llamó al concesionario porque su camioneta bloqueaba la entrada.",
            right: "El coordinador llamó al concesionario porque la camioneta de este bloqueaba la entrada.",
            why: "«Su» admite los dos referentes; «de este» remite al último mencionado.",
          },
          {
            wrong: "Habló con el hijo de la artesana, el cual había firmado la nota. (Firmó la artesana.)",
            right: "Habló con el hijo de la artesana, la cual había firmado la nota.",
            why: "«El cual / la cual» elige antecedente por género: aquí debe remitir a «la artesana».",
          },
        ],
        tip: "Para revisar, señala cada «su», «le» y cada sujeto tácito y pregúntate: ¿hay otro candidato del mismo género y número en las dos líneas anteriores? Si lo hay, cambia de herramienta.",
      },
      {
        heading: "Encapsular en lugar de encadenar",
        body: [
          "Una cadena de «que» («la resolución que establece que los feriantes que tengan permisos que vencieron…») obliga al lector a guardar demasiadas cosas a la vez. Puedes aligerarla con un participio («los permisos vencidos»), con «de + nombre» («la obligación de renovar»), con «al + infinitivo» («al vencer el permiso») o cortando la oración.",
          "Para unir dos oraciones sin perder el hilo, los encapsuladores son más claros que un «lo cual» vago: «La feria se trasladará al parque. Esta decisión, que se tomó sin consulta, generó protestas». El nombre («esta decisión», «el traslado», «dicho cambio») resume lo anterior y le da forma para seguir hablando de ello.",
          "Otro error frecuente aparece después de un inciso: el «que» se repite por inercia. «El secretario dijo que, si las obras se retrasan, que la feria se quedará en el parque». En un texto cuidado, el segundo «que» sobra.",
        ],
        examples: [
          { es: "Los feriantes con permiso vencido deberán renovarlo antes del 30 de junio.", note: "En lugar de «los feriantes que tengan permisos que estén vencidos»." },
          { es: "Al terminar las obras, la feria volverá a la plaza. Esta vuelta se anunciará con quince días de antelación.", note: "«Al + infinitivo» y un encapsulador que retoma lo anterior." },
        ],
        mistakes: [
          {
            wrong: "La coordinadora explicó que, como el parque no tiene baños públicos, que habrá baños químicos.",
            right: "La coordinadora explicó que, como el parque no tiene baños públicos, habrá baños químicos.",
            why: "Tras el inciso no se repite el «que» que introduce la subordinada.",
          },
        ],
      },
      {
        heading: "Queísmo, dequeísmo y cuándo cortar",
        body: [
          "En oraciones largas, el «de» delante de «que» se pone o se pierde con facilidad. El Diccionario panhispánico de dudas llama dequeísmo a añadirlo cuando el verbo no lo pide («opinan de que», «pienso de que») y queísmo a suprimirlo cuando sí lo pide («me alegro que», «estoy seguro que», «se dio cuenta que»). El queísmo es muy frecuente en la conversación, pero en la escritura cuidada se evita. Algunos verbos admiten las dos construcciones: «avisar (de) que», «advertir (de) que», «dudar (de) que».",
          "Una prueba sencilla: cambia la subordinada por «eso». Si dices «me alegro de eso», escribe «me alegro de que»; si dices «opinan eso», escribe «opinan que». Ojo con «me alegra que», que es correcto: ahí la subordinada es el sujeto.",
          "Por último, no toda oración larga debe cortarse. Mantenla si sus partes dependen unas de otras (una condición y su excepción, una decisión y su plazo) y si el esqueleto se ve. Córtala si cambia de tema, si hay más de dos referentes que compiten o si el lector tiene que volver atrás para encontrar el verbo.",
        ],
        table: {
          caption: "La prueba del «eso»",
          head: ["Frase", "Con «eso»", "Versión cuidada"],
          rows: [
            ["Los artesanos opinan de que el parque es mejor.", "opinan eso", "Los artesanos opinan que el parque es mejor."],
            ["Me alegro que hayan aceptado el traslado.", "me alegro de eso", "Me alegro de que hayan aceptado el traslado."],
            ["Me alegra que hayan aceptado el traslado.", "me alegra eso", "correcta tal como está"],
            ["El concesionario estaba seguro que lo reubicarían.", "seguro de eso", "El concesionario estaba seguro de que lo reubicarían."],
          ],
        },
        mistakes: [
          {
            wrong: "La Secretaría informó a los vecinos de que se dio cuenta que faltaban rampas.",
            right: "La Secretaría informó a los vecinos de que se había dado cuenta de que faltaban rampas.",
            why: "«Darse cuenta de algo»: el «de» es obligatorio en la escritura cuidada; además, la anterioridad pide pluscuamperfecto.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Antes de elegir, localiza el verbo principal y los candidatos a referente.",
    exercises: [
      {
        id: "c2-04-gramatica-referente",
        type: "context",
        prompt: "Lee el fragmento y responde a la pregunta sobre su estructura o su referente.",
        items: [
          {
            context: "«La propuesta que presentaron los feriantes del sector de antigüedades para que la Municipalidad habilitara un acceso para vehículos de carga durante las mañanas fue aprobada el martes.»",
            q: "¿Cuál es el sujeto del verbo principal «fue aprobada»?",
            options: [
              "los feriantes del sector de antigüedades",
              "la Municipalidad",
              "la propuesta que presentaron los feriantes…",
            ],
            answer: 2,
            why: "El núcleo es «propuesta»: por eso el participio va en femenino singular.",
          },
          {
            context: "«Sergio Ibáñez, coordinador de la feria, se reunió con Adrián Costa, concesionario del bar del parque, y le explicó que su contrato vence en marzo.»",
            q: "¿Por qué esta frase es problemática?",
            options: [
              "Porque «su contrato» puede ser el de Sergio o el de Adrián.",
              "Porque «le» debería ser «lo».",
              "Porque el verbo «vence» debería ir en subjuntivo.",
            ],
            answer: 0,
            why: "Dos candidatos masculinos singulares: «su» no decide. Hay que escribir «el contrato del concesionario» o similar.",
          },
          {
            context: "«Recibimos una nota del abogado de la artesana, la cual solicita que se revise la ubicación de su puesto.»",
            q: "¿Quién solicita la revisión?",
            options: ["el abogado", "la artesana", "no se puede saber"],
            answer: 1,
            why: "«La cual», en femenino, solo puede remitir a «la artesana».",
          },
          {
            context: "«Los vecinos reclamaron al secretario porque, cuando llegó al parque, no había baños.»",
            q: "¿Qué ambigüedad tiene el sujeto tácito de «llegó»?",
            options: [
              "Ninguna: «llegó» solo puede referirse a «los vecinos».",
              "Puede referirse a la feria o al parque.",
              "Puede ser el secretario o alguien no mencionado; el lector tiende a elegir al secretario.",
            ],
            answer: 2,
            why: "«Los vecinos» es plural y queda descartado; el singular apunta al secretario, pero el texto debería explicitarlo si hay otro candidato.",
          },
        ],
      },
      {
        id: "c2-04-gramatica-huecos",
        type: "gap",
        prompt: "Completa con la forma adecuada: concordancia, relativo o preposición.",
        items: [
          { q: "La revisión de los permisos que otorgó la gestión anterior ___ terminada en mayo. [estar, futuro]", answers: [["estará"]], why: "El núcleo es «revisión»: singular." },
          { q: "Hablamos con la hermana del concesionario, ___ cual nos mostró el contrato firmado por él. (la mostró ella)", answers: [["la"]], why: "«La cual» remite a «la hermana»." },
          { q: "Los feriantes están seguros ___ que el parque tendrá menos público.", answers: [["de"]], why: "«Estar seguro de algo»: el «de» es obligatorio." },
          { q: "Los concejales opinan ___ el traslado debía consultarse. (escribe la palabra que falta)", answers: [["que"]], why: "«Opinar algo», sin «de»: decir «opinan de que» sería dequeísmo." },
          { q: "A la Secretaría le preocupa ___ los puestos queden lejos de las paradas de colectivo.", answers: [["que"]], why: "«Preocupar» con la subordinada como sujeto: sin preposición." },
          { q: "El informe señala que, si las obras se retrasan, la feria ___ en el parque hasta la primavera. [quedarse, futuro]", answers: [["se quedará"]], why: "Tras el inciso, la subordinada sigue sin repetir «que»." },
        ],
      },
      {
        id: "c2-04-gramatica-herramientas",
        type: "classify",
        prompt: "Clasifica cada revisión según la herramienta que usa para recuperar el referente o aligerar la oración.",
        categories: ["Desambigua un referente", "Aligera una cadena de «que»"],
        items: [
          { text: "«su puesto» → «el puesto del concesionario»", cat: 0, why: "«De + nombre» en lugar del posesivo." },
          { text: "«los permisos que están vencidos» → «los permisos vencidos»", cat: 1, why: "Participio en lugar de relativa." },
          { text: "«le dijo que…» → «le dijo: “…”»", cat: 0, why: "El estilo directo fija quién habla y de quién." },
          { text: "«cuando terminen las obras que se iniciaron» → «al terminar las obras iniciadas»", cat: 1, why: "«Al + infinitivo» y participio." },
          { text: "«Sergio y Adrián… él» → «Sergio y Adrián… este último»", cat: 0, why: "«Este último» remite al más cercano." },
          { text: "«lo cual generó» → «Esta decisión generó»", cat: 1, why: "Encapsulador nominal en lugar de un relativo vago." },
        ],
      },
      {
        id: "c2-04-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de concordancia, de referente o de «que». Corrígelo.",
        items: [
          {
            sentence: "El traslado de los puestos que pertenecen a los artesanos del norte se realizarán en dos etapas.",
            answers: ["El traslado de los puestos que pertenecen a los artesanos del norte se realizará en dos etapas."],
            why: "El núcleo del sujeto es «traslado»: singular.",
          },
          {
            sentence: "El inspector advirtió que, si no se retiran los toldos, que se aplicará una multa.",
            answers: ["El inspector advirtió que, si no se retiran los toldos, se aplicará una multa.", "El inspector advirtió de que, si no se retiran los toldos, se aplicará una multa."],
            why: "El «que» repetido tras el inciso sobra.",
          },
          {
            sentence: "Los artesanos piensan de que el nuevo lugar tiene menos sombra.",
            answers: ["Los artesanos piensan que el nuevo lugar tiene menos sombra."],
            why: "Dequeísmo: «pensar algo», no «pensar de algo».",
          },
          {
            sentence: "Me alegro que la feria vuelva a la plaza en primavera.",
            answers: ["Me alegro de que la feria vuelva a la plaza en primavera.", "Me alegra que la feria vuelva a la plaza en primavera."],
            why: "Queísmo: «alegrarse de algo». También es correcto «me alegra que».",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de la escritura administrativa clara y de una feria artesanal en un parque de Rosario.",
    groups: [
      {
        title: "Escritura administrativa",
        items: [
          { es: "la resolución", note: "decisión formal de una autoridad, con número y fecha" },
          { es: "los considerandos", note: "párrafos que exponen los motivos de una resolución" },
          { es: "la parte dispositiva", note: "sección que establece lo que se decide" },
          { es: "el lenguaje claro", note: "forma de redactar para que el destinatario entienda a la primera" },
          { es: "el destinatario", note: "persona a quien va dirigido un texto" },
          { es: "dejar sin efecto", note: "anular una disposición anterior" },
          { es: "a los efectos de", note: "con la finalidad de; giro administrativo que conviene usar con medida" },
        ],
      },
      {
        title: "La feria y el espacio público",
        items: [
          { es: "el feriante", note: "persona que vende en una feria con un puesto" },
          { es: "el puesto", note: "lugar o estructura donde se vende en una feria" },
          { es: "el permiso de uso", note: "autorización para ocupar un espacio público" },
          { es: "el concesionario", note: "quien explota un servicio o un local público por contrato" },
          { es: "la reubicación", note: "traslado a otro lugar asignado" },
          { es: "el sorteo de lugares", note: "asignación de puestos al azar" },
          { es: "la explanada", note: "espacio llano y despejado, a menudo junto a un edificio" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-04-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "los considerandos", right: "párrafos que exponen los motivos de una resolución" },
          { left: "la parte dispositiva", right: "sección que establece lo que se decide" },
          { left: "dejar sin efecto", right: "anular una disposición anterior" },
          { left: "el permiso de uso", right: "autorización para ocupar un espacio público" },
          { left: "el concesionario", right: "quien explota un servicio o un local público por contrato" },
          { left: "la reubicación", right: "traslado a otro lugar asignado" },
          { left: "el lenguaje claro", right: "forma de redactar para que el destinatario entienda a la primera" },
        ],
      },
      {
        id: "c2-04-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["sorteo de lugares", "dejó sin efecto", "destinatario", "feriantes"],
        items: [
          { q: "La nueva resolución ___ el horario de invierno aprobado en 2019.", answers: [["dejó sin efecto"]] },
          { q: "Antes de redactar, piensa en el ___: ¿qué necesita saber primero?", answers: [["destinatario"]] },
          { q: "El ___ se hará el sábado en presencia de un escribano.", answers: [["sorteo de lugares"]] },
          { q: "Ciento veinte ___ firmaron la nota contra el traslado.", answers: [["feriantes"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Pausas y tonos que guían al oyente en una oración larga",
    explanation: [
      "Cuando lees en voz alta una oración con varias capas, la voz tiene que hacer el trabajo de la sintaxis. Agrupa cada capa en un grupo fónico y deja que el tono quede suspendido (ligeramente alto) al final de cada capa que todavía no termina la idea. Solo al final del esqueleto el tono baja del todo.",
      "La pausa distingue además dos lecturas de una relativa: «los feriantes, que tienen permiso, podrán quedarse» (todos tienen permiso y todos se quedan) frente a «los feriantes que tienen permiso podrán quedarse» (solo se quedan los que lo tienen). En la explicativa hay pausa antes y después y el tono baja un poco en el inciso; en la especificativa, la relativa va pegada al nombre.",
      "El audio usa la síntesis del navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir las pausas y compara tu producción con la de una persona.",
    ],
    table: {
      caption: "Misma secuencia, distinta lectura",
      head: ["Con pausas (explicativa)", "Sin pausas (especificativa)"],
      rows: [
        ["Los feriantes, que tienen permiso, podrán quedarse.", "Los feriantes que tienen permiso podrán quedarse."],
        ["Los puestos, que están en la explanada, se moverán.", "Los puestos que están en la explanada se moverán."],
        ["Mi hermano, que vive en Funes, vendrá.", "Mi hermano que vive en Funes vendrá."],
      ],
    },
    perceive: {
      id: "c2-04-percepcion",
      type: "listen",
      prompt: "Escucha cada frase antes de leer las opciones y decide qué lectura transmiten las pausas.",
      items: [
        {
          q: "¿Quiénes podrán quedarse en la plaza?",
          options: ["Todos los feriantes, que además tienen permiso.", "Solo los feriantes que tienen permiso."],
          answer: 1,
          why: "No hay pausa antes de «que»: la relativa es especificativa y selecciona un grupo.",
          audio: "Los feriantes que tienen permiso podrán quedarse en la plaza.",
          voice: "es-AR-f",
        },
        {
          q: "¿Se moverán todos los puestos?",
          options: ["Sí: todos los puestos están en la explanada y todos se moverán.", "No: solo los de la explanada."],
          answer: 0,
          why: "Se oyen pausas antes y después del inciso: relativa explicativa.",
          audio: "Los puestos, que están en la explanada, se moverán en abril.",
          voice: "es-AR-m",
        },
        {
          q: "¿Dónde termina la idea principal?",
          options: ["Después de «feria».", "Después de «certifique».", "Después de «obras»."],
          answer: 2,
          why: "El tono queda suspendido en las capas y solo baja del todo al final: «hasta que terminen las obras».",
          audio: "La feria, que funcionaba en la plaza desde mil novecientos noventa y cuatro, se trasladará al parque hasta que terminen las obras.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué hace la voz en el inciso «según el informe técnico»?",
          options: ["Sube el tono y acelera.", "Baja ligeramente el tono, con pausas antes y después.", "No cambia nada."],
          answer: 1,
          why: "Los incisos se leen con tono algo más bajo y enmarcados por pausas.",
          audio: "El desagüe, según el informe técnico, estará terminado en septiembre.",
          voice: "es-AR-m",
        },
      ],
    },
    produce: [
      { text: "Los feriantes, que tienen permiso, podrán quedarse.", tip: "Pausa antes de «que» y después de «permiso»; tono un poco más bajo en el inciso.", voice: "es-AR-f" },
      { text: "Los feriantes que tienen permiso podrán quedarse.", tip: "Sin pausa: «feriantes que tienen permiso» es un solo bloque.", voice: "es-AR-m" },
      { text: "La Secretaría, después de escuchar a los feriantes, resolvió trasladar la feria al parque.", tip: "Deja el tono suspendido en «feriantes» y bájalo del todo en «parque».", voice: "es-AR-f" },
      { text: "La revisión de los permisos que otorgó la gestión anterior estará terminada en mayo.", tip: "No hagas pausa entre el sujeto largo y «estará»: se perdería el hilo.", voice: "es-AR-m" },
    ],
    spelling: "Las comas reproducen las pausas de la explicativa: si las quitas o las pones sin pensar, cambias quién queda incluido. No separes nunca con una sola coma el sujeto de su verbo.",
  },
  listening: {
    title: "Ocho líneas y un solo punto",
    context: "Lucía y Tomás trabajan en la oficina de lenguaje claro de la Municipalidad de Rosario. Revisan el borrador del aviso que recibirán feriantes y vecinos sobre el traslado de la feria artesanal de la plaza al parque. Escucha primero sin transcripción. Las voces son sintéticas y no representan variedades verificadas.",
    speakers: [
      { id: "l", name: "Lucía", voice: "es-AR-f", role: "Responsable de la oficina de lenguaje claro" },
      { id: "t", name: "Tomás", voice: "es-AR-m", role: "Redactor de la oficina" },
    ],
    script: [
      { speaker: "l", text: "Tomás, el primer párrafo del aviso tiene ocho líneas y un solo punto. No digo que haya que cortarlo en pedacitos, pero leámoslo buscando el verbo principal. «La Secretaría de Cultura, en atención a las obras del desagüe que la Dirección de Obras inició en la explanada donde funcionaba la feria que los artesanos sostienen desde 1994, resolvió…». ¿Cuántas palabras hay hasta «resolvió»?" },
      { speaker: "t", text: "Treinta y tantas. Y en el medio aparecen la Dirección de Obras, la explanada, la feria y los artesanos. Cuando el lector llega al verbo, ya no sabe quién resolvió. Podemos adelantar el esqueleto: «La Secretaría de Cultura resolvió trasladar la feria al parque mientras duren las obras del desagüe». Y en una segunda oración, la historia de la feria." },
      { speaker: "l", text: "Bien. Segundo problema, en el párrafo dos: «El coordinador se reunió con el concesionario del bar y le informó que su permiso será renovado». ¿El permiso de quién? Los dos tienen permiso: el coordinador para la feria y el concesionario para el bar." },
      { speaker: "t", text: "Es del concesionario. Pongo «le informó de que el permiso del bar será renovado». Con «del bar» ya no hay duda. Y de paso agrego el «de», aunque con informar también se acepta sin preposición." },
      { speaker: "l", text: "Las dos formas son válidas, pero en todo el aviso usemos la misma. Tercero: la cadena de «que». «Los feriantes que tengan permisos que hayan vencido en el período que establece el artículo cuatro deberán…». Ahí hay tres «que» seguidos y el lector se ahoga." },
      { speaker: "t", text: "Con participio queda mucho más liviano: «Los feriantes con permisos vencidos en el período del artículo cuatro deberán renovarlos antes del 30 de junio». Se entiende igual y es la mitad de largo." },
      { speaker: "l", text: "Perfecto. Hay un último detalle que me preocupa: «El secretario aseguró que, si las obras se demoran, que la feria seguirá en el parque durante el invierno». El segundo «que» sobra. Y el párrafo siguiente empieza con «Lo cual generó malestar». ¿Qué generó malestar, la demora, el invierno o la decisión de quedarse?" },
      { speaker: "t", text: "La decisión de quedarse en el parque. Mejor un encapsulador: «Esta posibilidad generó malestar entre los feriantes del sector de antigüedades, que temen perder clientes». Y ahí la relativa explicativa con coma, porque son todos los del sector, no una parte." },
      { speaker: "l", text: "Exacto. Una última prueba: leámoslo en voz alta. Si para entender una frase tenemos que volver atrás, la cortamos; si se entiende de una vez, aunque sea larga, la dejamos. El objetivo no es escribir como en un folleto infantil, es que nadie tenga que adivinar de quién es cada cosa." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la revisión completa sin abrir la transcripción. ¿Qué hacen y con qué criterio?",
        exercise: {
          id: "c2-04-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué hacen Lucía y Tomás?",
              options: [
                "Redactan los considerandos de una resolución nueva.",
                "Revisan un aviso para que se entienda sin perder información.",
                "Negocian con los feriantes el lugar del traslado.",
              ],
              answer: 1,
              why: "Revisan párrafo por párrafo el aviso que recibirán feriantes y vecinos.",
            },
            {
              q: "¿Cuál es su criterio sobre las oraciones largas?",
              options: [
                "Cortarlas siempre en frases breves.",
                "Mantenerlas siempre para no perder precisión.",
                "Cortarlas solo si obligan a volver atrás; si se entienden de una vez, mantenerlas.",
              ],
              answer: 2,
              why: "Lucía lo resume al final: la prueba es leer en voz alta.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c2-04-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada corrección.",
          items: [
            {
              q: "¿Cómo resuelven el «su permiso» del segundo párrafo?",
              options: [
                "Con «el permiso del bar».",
                "Con «su propio permiso».",
                "Con «el permiso de él».",
              ],
              answer: 0,
              why: "«Del bar» identifica sin dudas al concesionario.",
            },
            {
              q: "¿Qué herramienta usan para la cadena de tres «que»?",
              options: [
                "Estilo directo.",
                "Un participio y un complemento con «de».",
                "Un relativo «el cual».",
              ],
              answer: 1,
              why: "«Los feriantes con permisos vencidos en el período del artículo cuatro».",
            },
            {
              q: "¿Por qué cambian «Lo cual generó malestar»?",
              options: [
                "Porque «lo cual» no puede ir después de un punto en ningún caso.",
                "Porque el malestar no existió.",
                "Porque no queda claro qué retoma «lo cual», y un encapsulador lo nombra.",
              ],
              answer: 2,
              why: "«Esta posibilidad generó malestar» fija el antecedente.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cada versión final. Relaciona y consulta la transcripción solo al terminar.",
        exercise: {
          id: "c2-04-escucha-notice",
          type: "match",
          prompt: "Relaciona cada problema del borrador con la solución que adoptan.",
          pairs: [
            { left: "treinta palabras antes del verbo principal", right: "adelantar el esqueleto y pasar la historia a otra oración" },
            { left: "le informó que su permiso será renovado", right: "le informó de que el permiso del bar será renovado" },
            { left: "permisos que hayan vencido en el período que establece", right: "permisos vencidos en el período del artículo cuatro" },
            { left: "si las obras se demoran, que la feria seguirá", right: "suprimir el «que» repetido tras el inciso" },
            { left: "Lo cual generó malestar", right: "Esta posibilidad generó malestar" },
          ],
          why: "Cada solución mantiene la información y hace visible el sujeto o el referente.",
        },
      },
    ],
  },
  reading: {
    title: "Una oración de once líneas",
    genre: "Columna de divulgación institucional",
    frame: "Columna de Lucía Ferraro, responsable de la oficina de lenguaje claro de una municipalidad, publicada en el boletín interno que reciben todos los empleados. Oficina, personas y resolución son ficticias.",
    text: [
      "Hace unas semanas llegó a nuestra oficina una resolución con un pedido de urgencia: había que convertirla en un aviso para los feriantes de la plaza y para los vecinos del barrio antes del fin de semana. El primer párrafo tenía once líneas y un solo punto final. Lo leímos tres veces y, a la tercera, Tomás preguntó lo que cualquier vecino se habría preguntado a la primera: «¿Pero quién decidió qué?». Esa pregunta resume nuestro trabajo mejor que cualquier manual.",
      "Quiero aclarar algo antes de seguir, porque es el malentendido más frecuente sobre lo que hacemos. El lenguaje claro no consiste en escribir frases de cinco palabras. Una resolución administrativa tiene que decir quién decide, qué decide, por qué, desde cuándo, hasta cuándo y con qué excepciones, y esas piezas dependen unas de otras. Si las separas en diez oraciones sueltas, el lector pierde la relación entre la regla y su excepción, que es justamente lo que más le importa. Una oración larga puede ser perfectamente clara si su esqueleto se ve.",
      "En aquel párrafo, el esqueleto estaba enterrado. El sujeto, «la Secretaría de Cultura», aparecía en la primera línea; el verbo principal, «resolvió», en la quinta. En el medio había una relativa dentro de otra relativa dentro de una tercera: las obras que la Dirección de Obras inició en la explanada donde funcionaba la feria que los artesanos sostienen desde 1994. Cada capa era correcta, pero juntas obligaban al lector a guardar cuatro nombres en la memoria antes de saber qué se había decidido. Nuestra versión adelantó el esqueleto y trasladó la historia de la feria a una segunda oración, donde podía contarse con calma.",
      "El segundo problema fue más sutil. El borrador decía que el coordinador de la feria se había reunido con el concesionario del bar del parque y le había informado de que su permiso sería renovado. Los dos hombres tienen permisos municipales, de modo que el posesivo podía remitir a cualquiera de ellos, y el género, que en otros casos resuelve la duda, aquí no servía de nada. Cambiamos «su permiso» por «el permiso del bar». Parece una tontería; sin embargo, dos días después, el propio coordinador nos llamó para agradecerlo, porque la versión anterior había hecho circular el rumor de que la feria perdía su autorización.",
      "Encontramos también una concordancia que fallaba a distancia: «La reubicación de los puestos que ocupan los artesanos de los sectores norte y sur serán sorteadas». El verbo había concordado con el último plural que el redactor tenía a la vista, no con el núcleo del sujeto, que es «reubicación». La corrección, «será sorteada», es evidente cuando se aísla el esqueleto, y casi invisible cuando no se aísla. Por eso nuestro primer paso con cualquier texto largo es siempre el mismo: tachar mentalmente todas las capas y comprobar que lo que queda se sostiene solo.",
      "Las cadenas de «que» fueron el tercer frente. Una frase sobre los feriantes que tuvieran permisos que hubieran vencido en el período que establece el artículo cuatro se convirtió en «los feriantes con permisos vencidos en el período del artículo cuatro». No perdimos ningún dato: sustituimos dos relativas por un participio y un complemento con «de». Del mismo modo, eliminamos un «que» repetido después de un inciso condicional y cambiamos un «lo cual» que abría párrafo por un encapsulador, «esta posibilidad», que nombra exactamente lo que se retoma. El lector agradece que le digan de qué se sigue hablando.",
      "Revisamos, por último, las preposiciones delante de «que». En el borrador convivían un «opinan de que» y un «están seguros que»; es decir, un «de» que sobraba y otro que faltaba. El Diccionario panhispánico de dudas llama a lo primero dequeísmo y a lo segundo queísmo. No se trata de purismo: en un texto oficial, esos tropiezos hacen que el lector desconfíe de todo lo demás, aunque el contenido sea impecable.",
      "El aviso final tiene cuatro párrafos. El más largo ocupa siete líneas y contiene una condición, una excepción y un plazo, y lo dejamos así porque, leído en voz alta, se entiende de una vez. Esa es la prueba que proponemos a cualquier persona de la Municipalidad que escriba para el público: leer el texto como lo leería quien lo recibe, sin saber lo que el autor quiso decir. Si hay que volver atrás para encontrar el verbo o adivinar de quién es cada cosa, el texto todavía no está terminado.",
    ],
    glossary: [
      { es: "con un pedido de urgencia", note: "con la petición de hacerlo rápido" },
      { es: "tachar mentalmente", note: "imaginar el texto sin una parte para ver qué queda" },
      { es: "el purismo", note: "actitud que corrige la lengua por amor a la norma más que por claridad" },
    ],
    tasks: [
      {
        id: "c2-04-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido los argumentos de la columna.",
        items: [
          {
            q: "Según la autora, ¿qué no es el lenguaje claro?",
            options: [
              "Escribir para que el destinatario entienda a la primera.",
              "Escribir frases muy cortas aunque se pierda la relación entre las partes.",
              "Revisar referentes y concordancias.",
            ],
            answer: 1,
            why: "El segundo párrafo rechaza la idea de que consista en frases de cinco palabras.",
          },
          {
            q: "¿Por qué el género no resolvía la ambigüedad de «su permiso»?",
            options: [
              "Porque los dos candidatos eran hombres en singular.",
              "Porque el permiso no tenía titular.",
              "Porque «su» siempre remite al sujeto.",
            ],
            answer: 0,
            why: "Coordinador y concesionario son masculinos singulares: la gramática no decide.",
          },
          {
            q: "¿Por qué mantuvieron un párrafo de siete líneas?",
            options: [
              "Porque no tuvieron tiempo de cortarlo.",
              "Porque la resolución original no podía modificarse.",
              "Porque, leído en voz alta, se entiende de una vez y sus partes dependen entre sí.",
            ],
            answer: 2,
            why: "El último párrafo explica que contiene condición, excepción y plazo.",
          },
        ],
      },
      {
        id: "c2-04-lectura-funcion",
        type: "match",
        prompt: "Relaciona cada problema descrito en la columna con su solución.",
        pairs: [
          { left: "relativa dentro de relativa antes del verbo", right: "adelantar el esqueleto y contar la historia aparte" },
          { left: "su permiso", right: "el permiso del bar" },
          { left: "serán sorteadas", right: "será sorteada" },
          { left: "lo cual al comienzo de párrafo", right: "esta posibilidad" },
        ],
      },
      {
        id: "c2-04-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una afirmación de la columna.",
        items: [
          {
            prompt: "La autora dice que el queísmo y el dequeísmo hacen que el lector «desconfíe de todo lo demás». Explica en 80–100 palabras si estás de acuerdo y si ese argumento vale igual para un aviso oficial y para un mensaje entre vecinos.",
            model: "Estoy de acuerdo en el caso de un texto oficial. Quien lee un aviso de la Municipalidad espera un registro cuidado; un «opinan de que» le hace sospechar que nadie revisó el texto, y esa sospecha se extiende a fechas y plazos. En un mensaje entre vecinos, en cambio, el queísmo es tan frecuente en la conversación que casi nadie lo nota, y no afecta a la confianza. El argumento depende, por tanto, del registro y de lo que el lector espera del emisor.",
            checklist: [
              "Tomo posición y la justifico.",
              "Distingo entre registros.",
              "Uso al menos un ejemplo de queísmo o dequeísmo.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora escribe oraciones largas que, sin embargo, se leen de una vez.",
      items: [
        { quote: "Una oración larga puede ser perfectamente clara si su esqueleto se ve.", note: "La tesis de la columna, en una oración breve que sirve de cierre al párrafo." },
        { quote: "Los dos hombres tienen permisos municipales, de modo que el posesivo podía remitir a cualquiera de ellos", note: "Una consecutiva que explica el riesgo de «su» con dos candidatos del mismo género." },
        { quote: "un encapsulador, «esta posibilidad», que nombra exactamente lo que se retoma", note: "La relativa completa a «encapsulador» y el inciso entre comas ilustra el recurso." },
        { quote: "tachar mentalmente todas las capas y comprobar que lo que queda se sostiene solo", note: "Dos infinitivos coordinados con un «lo que» integrado: frase larga, esqueleto visible." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección de la mejor revisión, reformulación y escritura breve. Termina recuperando las semanas anteriores y las clases de C1 que preparan esta.",
    exercises: [
      {
        id: "c2-04-orden",
        type: "order",
        prompt: "Ordena las palabras para obtener una oración clara con el esqueleto a la vista.",
        items: [
          {
            words: ["La", "Secretaría", "resolvió", "trasladar", "la", "feria", "al", "parque", "mientras", "duren", "las", "obras."],
            why: "Sujeto y verbo principal al principio; la adverbial temporal al final.",
          },
          {
            words: ["Los", "feriantes", "con", "permisos", "vencidos", "deberán", "renovarlos", "antes", "de", "julio."],
            why: "Participio en lugar de una cadena de relativas.",
          },
          {
            words: ["Esta", "decisión", "generó", "malestar", "entre", "los", "vecinos", "del", "barrio."],
            why: "Encapsulador nominal que retoma lo anterior.",
          },
        ],
      },
      {
        id: "c2-04-revision",
        type: "context",
        prompt: "Elige la revisión que resuelve el problema sin perder información.",
        items: [
          {
            context: "Borrador: «Adrián Costa se reunió con Sergio Ibáñez después de que su abogado le enviara una carta».",
            q: "¿Qué versión es clara si el abogado es de Adrián?",
            options: [
              "Adrián Costa se reunió con Sergio Ibáñez después de que su propio abogado le enviara una carta.",
              "Adrián Costa se reunió con Sergio Ibáñez después de que el abogado del concesionario le enviara una carta a este.",
              "Adrián Costa se reunió con Sergio Ibáñez después de que el abogado de Adrián le enviara una carta al coordinador.",
            ],
            answer: 2,
            why: "Repetir el nombre y nombrar el cargo del destinatario elimina las dos ambigüedades («su» y «le»).",
          },
          {
            context: "Borrador: «La aplicación de las normas que aprobaron los concejos de los distritos centro y oeste no fueron evaluadas».",
            q: "¿Qué versión corrige el problema?",
            options: [
              "La aplicación de las normas que aprobaron los concejos de los distritos centro y oeste no fue evaluada.",
              "Las aplicaciones de la norma que aprobó el concejo no fueron evaluadas.",
              "La aplicación de las normas que aprobaron los concejos no fueron evaluados.",
            ],
            answer: 0,
            why: "Concordancia con el núcleo «aplicación», sin cambiar el contenido.",
          },
          {
            context: "Borrador: «Los vecinos, que viven frente al parque, firmaron la nota». Solo firmaron los que viven frente al parque.",
            q: "¿Qué versión transmite lo que se quiere decir?",
            options: [
              "Los vecinos —que viven frente al parque— firmaron la nota.",
              "Los vecinos que viven frente al parque firmaron la nota.",
              "Los vecinos firmaron la nota, que viven frente al parque.",
            ],
            answer: 1,
            why: "Sin comas ni rayas, la relativa es especificativa y selecciona a un grupo; entre rayas sería explicativa e incluiría a todos.",
          },
        ],
      },
      {
        id: "c2-04-reformular",
        type: "transform",
        prompt: "Reformula cada frase como se indica, sin perder información.",
        items: [
          {
            source: "Los puestos que estén en lugares que no tengan sombra recibirán toldos que proveerá la Municipalidad.",
            instruction: "Reduce la cadena de «que» usando «sin sombra» y «municipales».",
            answers: ["Los puestos en lugares sin sombra recibirán toldos municipales.", "Los puestos ubicados en lugares sin sombra recibirán toldos municipales."],
            why: "Complemento con «sin» y adjetivo en lugar de relativas.",
          },
          {
            source: "La feria se trasladará al parque. Lo cual preocupa a los feriantes de antigüedades.",
            instruction: "Sustituye «Lo cual» por un encapsulador con «este traslado».",
            answers: ["La feria se trasladará al parque. Este traslado preocupa a los feriantes de antigüedades."],
            why: "El encapsulador nombra lo que se retoma.",
          },
          {
            source: "El coordinador dijo que, como el parque cierra a las veinte, que la feria terminará antes.",
            instruction: "Elimina el elemento que sobra tras el inciso.",
            answers: ["El coordinador dijo que, como el parque cierra a las veinte, la feria terminará antes."],
            why: "El «que» repetido después del inciso sobra.",
          },
        ],
      },
      {
        id: "c2-04-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Reescribe este fragmento en una o dos oraciones claras (40–60 palabras): «El concesionario habló con el coordinador, quien le dijo que su contrato, que vence en marzo, que se renovará si presenta los papeles que le pidió la oficina que gestiona los permisos que tienen los locales del parque».",
            model: "El coordinador le dijo al concesionario que el contrato del bar, que vence en marzo, se renovará si presenta los papeles que le pidió la oficina de permisos del parque. La conversación tuvo lugar el lunes, a pedido del concesionario.",
            checklist: [
              "Queda claro de quién es el contrato.",
              "Desaparece el «que» repetido.",
              "La cadena de relativas se aligera sin perder datos.",
            ],
          },
          {
            prompt: "Escribe una oración de 40–60 palabras que contenga una condición, una excepción y un plazo, y que se entienda a la primera lectura. Después, en una frase, explica por qué no la cortaste.",
            model: "Los feriantes que no puedan trasladarse al parque por razones de salud podrán pedir un lugar provisional en la vereda norte de la plaza, salvo durante los días de obra con maquinaria pesada, siempre que lo soliciten antes del 15 de abril. No la corté porque la excepción y el plazo solo tienen sentido unidos a la condición.",
            checklist: [
              "El sujeto y el verbo principal se ven enseguida.",
              "Condición, excepción y plazo están relacionados con claridad.",
              "Justifico la decisión de mantener la oración.",
            ],
          },
        ],
      },
      {
        id: "c2-04-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en semanas anteriores y en C1 con los estímulos que se te dan. Trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G203 (restrictivas y explicativas). Estímulo: «Los artesanos que venden cerámica se quejaron» / «Los artesanos, que venden cerámica, se quejaron». Explica quién se quejó en cada caso.",
            model: "En la primera solo se quejaron los artesanos que venden cerámica, un grupo dentro de los artesanos. En la segunda se quejaron todos los artesanos, y la relativa añade que todos venden cerámica. Las comas cambian el alcance.",
            checklist: [
              "Distingo especificativa y explicativa.",
              "Explico el papel de las comas.",
            ],
          },
          {
            prompt: "Recuperación de la clase G187 (elipsis y anáfora). Estímulo: «Sergio y Adrián discutieron; este último se fue sin firmar». ¿Quién se fue? Explica cómo funciona «este último» y cuándo no conviene usarlo.",
            model: "Se fue Adrián, el último mencionado. «Este último» remite al elemento más cercano y desambigua cuando hay dos candidatos del mismo género. No conviene usarlo si entre la mención y la anáfora hay muchos nombres, porque el lector tiene que contar hacia atrás.",
            checklist: [
              "Identifico el referente correcto.",
              "Explico una limitación del recurso.",
            ],
          },
          {
            prompt: "Recuperación de la clase G209 (correlaciones temporales). Estímulo: «El secretario anunció en enero que la feria vuelve a la plaza cuando terminaran las obras». Corrige la cadena y explica qué falla.",
            model: "«El secretario anunció en enero que la feria volvería a la plaza cuando terminaran las obras». La cadena depende de un pasado: si «terminaran» se mide desde enero, el verbo que lo rige también tiene que estar en correlación de pasado. Otra opción coherente, si el anuncio sigue vigente, es «volverá… cuando terminen».",
            checklist: [
              "Corrijo la mezcla de anclas.",
              "Propongo una alternativa coherente anclada en el presente.",
            ],
          },
          {
            prompt: "Recuperación de la clase G207 (modo según perspectiva). Estímulo: «El hecho de que la feria se traslade no implica que desaparezca». Explica por qué van en subjuntivo los dos verbos y escribe una versión en que el indicativo sea natural.",
            model: "El primero va en subjuntivo porque el traslado es un hecho conocido presentado como tema; el segundo, porque «no implica que» no afirma la desaparición. Versión con indicativo: «La caída de las ventas se debe al hecho de que la feria se trasladó a un lugar con menos paso».",
            checklist: [
              "Explico el valor temático de «el hecho de que».",
              "Escribo una versión con indicativo justificada.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Reescribe en lenguaje claro el aviso sobre el traslado de la feria (400–520 palabras) para feriantes y vecinos. Debe conservar toda la información de la resolución: quién decide, qué, por qué, desde cuándo, hasta cuándo, con qué excepciones y qué deben hacer los feriantes.",
    context: "El aviso se pega en los puestos, se publica en la web municipal y se lee en voz alta en una reunión. Puedes inventar los datos que falten con la misma lógica. No se trata de simplificar el contenido, sino de que cada oración, aunque sea larga, se entienda a la primera.",
    steps: [
      "Haz una lista de las piezas de información de la resolución y marca cuáles dependen de otras (condición y excepción, decisión y plazo).",
      "Escribe el esqueleto de cada párrafo (sujeto y verbo principal) antes de añadir capas.",
      "Redacta sin copiar el modelo. Usa al menos un encapsulador, una relativa explicativa y otra especificativa, y una oración larga que decidas mantener.",
      "Revisa el aviso: rodea cada «su», «le» y sujeto tácito y corrige los que tengan dos candidatos; comprueba concordancias a distancia y preposiciones delante de «que». Léelo en voz alta.",
    ],
    useLanguage: [
      "La Secretaría resolvió… mientras / hasta que…",
      "el permiso del concesionario / este último / el primero",
      "los feriantes con permisos vencidos…",
      "Este traslado / Esta decisión / Dicho plazo…",
      "estar seguro de que / opinar que",
      "salvo que…, siempre que…",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): La Secretaría de Cultura resolvió trasladar la Feria Artesanal de la Plaza al Parque de la Ribera mientras duren las obras del desagüe en la explanada, que comenzarán el 2 de abril. La feria, que funciona en la plaza desde 1994, volverá a su lugar cuando la Dirección de Obras certifique que los trabajos han terminado. Este traslado no afecta a los permisos vigentes: cada feriante conservará el número de puesto que tiene hoy.",
    ],
    checklist: [
      "El sujeto y el verbo principal de cada oración se encuentran sin volver atrás.",
      "Ningún «su», «le» o sujeto tácito admite dos referentes.",
      "Las concordancias a distancia son correctas.",
      "No hay cadenas de más de dos «que» ni «que» repetidos tras un inciso.",
      "Uso bien la preposición delante de «que» (sin queísmo ni dequeísmo).",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave y no leas un guion. Si te grabas, la grabación se queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Explicar la resolución a los feriantes",
        prompt: "En una reunión en la plaza, explica a los feriantes la resolución del traslado: qué se decidió, por qué, hasta cuándo, con qué excepciones y qué tienen que hacer. Usa al menos dos oraciones largas que se entiendan a la primera.",
        prep: [
          "Escribe el esqueleto de cada idea en una línea.",
          "Marca dónde harás pausas y dónde dejarás el tono suspendido.",
        ],
        seconds: 240,
        model: "Buenas tardes. Les cuento lo que decidió la Secretaría de Cultura. La feria se traslada al Parque de la Ribera mientras duren las obras del desagüe, que empiezan el 2 de abril. Los permisos que tienen hoy siguen valiendo, y cada uno conserva su número de puesto. Los feriantes con permisos vencidos tienen que renovarlos antes del 30 de junio. Hay una excepción: quienes no puedan trasladarse por razones de salud…",
        selfCheck: [
          "El esqueleto de cada idea se oye antes que las capas.",
          "No dejo pronombres con dos referentes posibles.",
          "Mis pausas distinguen las relativas explicativas de las especificativas.",
        ],
      },
      {
        title: "Negociar con el asesor legal",
        prompt: "El asesor legal de la Secretaría defiende la redacción original («es más precisa»). Escucha su argumento, hazle dos preguntas sobre qué información teme perder, y negocia una versión que conserve toda la precisión jurídica y sea clara.",
        prep: [
          "Prepara un ejemplo de ambigüedad real del texto original.",
          "Ten una propuesta concreta de reescritura.",
        ],
        seconds: 180,
        model: "Entiendo que le preocupe perder precisión. ¿Qué dato teme que desaparezca si adelantamos el verbo principal? ¿Hay alguna excepción que no esté en nuestra versión? Mire este caso: «su permiso» podía ser del coordinador o del concesionario, y eso hizo circular un rumor. Le propongo mantener la oración larga del plazo, que es necesaria, y repetir el nombre donde haya dos candidatos.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Doy un ejemplo concreto de ambigüedad.",
          "Propongo una solución que respete la precisión.",
        ],
      },
      {
        title: "Lectura guiada de una oración larga",
        prompt: "Lee en voz alta el párrafo más largo de tu aviso y después explica, en una frase, cuál es su esqueleto y por qué decidiste no cortarlo.",
        prep: [
          "Subraya el sujeto y el verbo principal.",
          "Marca las capas con barras para las pausas.",
        ],
        seconds: 90,
        selfCheck: [
          "El tono solo baja del todo al final del esqueleto.",
          "No hago pausa entre el sujeto y su verbo.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase oraciones largas reales que te hayan costado. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Diagnostica",
        task: "Lleva una oración larga de un texto oficial o académico y, delante de tu profesor, señala su esqueleto y sus capas.",
        phrases: ["El verbo principal es…, y su sujeto…", "Esta relativa completa a…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta a tu profesor si en su variedad el queísmo con algún verbo («me acuerdo que», «estoy seguro que») suena natural en la conversación.",
        phrases: ["¿Esto lo dirías en una charla?", "¿Y lo escribirías en un informe?"],
      },
      {
        move: "Defiende",
        task: "Defiende ante tu profesor una oración larga de tu aviso que decidiste no cortar.",
        phrases: ["No la corté porque…", "Si la divido, se pierde la relación entre…"],
      },
      {
        move: "Desafía",
        task: "Escribe una frase con un «su» ambiguo y pide a tu profesor que encuentre las dos lecturas y la mejor solución.",
        phrases: ["¿De quién es…?", "¿Qué herramienta usarías aquí?"],
      },
    ],
    bring: "Tu aviso revisado con los referentes marcados y una oración larga real que te haya hecho dudar.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En «La renovación de los toldos que dañó la tormenta de febrero ___ financiada por la Municipalidad», ¿qué forma va en el hueco?",
        options: ["serán", "será", "fueron"],
        answer: 1,
        why: "El núcleo del sujeto es «renovación»: singular.",
      },
      {
        type: "choice",
        q: "«El coordinador visitó al concesionario y le dijo que su local necesitaba rampas». ¿Qué revisión resuelve la ambigüedad si el local es del concesionario?",
        options: [
          "… le dijo que el local del bar necesitaba rampas.",
          "… le dijo que su propio local necesitaba rampas.",
          "… le dijo que el suyo necesitaba rampas.",
        ],
        answer: 0,
        why: "«Del bar» identifica el local sin depender del posesivo.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Quiénes recibirán el aviso por correo?",
        options: [
          "Todos los vecinos del barrio.",
          "Ningún vecino: solo los feriantes.",
          "Solo los vecinos que viven frente al parque.",
        ],
        answer: 2,
        why: "Sin pausa antes de «que», la relativa es especificativa y selecciona un grupo.",
        audio: "Los vecinos que viven frente al parque recibirán el aviso por correo.",
        voice: "es-AR-m",
      },
      {
        type: "gap",
        q: "Los feriantes se dieron cuenta ___ que el nuevo lugar no tenía conexión eléctrica.",
        answers: [["de"]],
        hint: "Prueba: «se dieron cuenta de eso».",
        why: "«Darse cuenta de algo»: sin «de» sería queísmo.",
      },
      {
        type: "gap",
        q: "Escribimos a la hija del feriante, ___ cual nos respondió en nombre de su padre.",
        answers: [["la"]],
        hint: "Responde la hija.",
        why: "«La cual» remite al antecedente femenino.",
      },
      {
        type: "transform",
        source: "Los artesanos que tengan puestos que estén ubicados en el sector que da al río deberán retirarlos los días de crecida.",
        instruction: "Reformula la oración aligerando la cadena de relativas, sin perder ningún dato.",
        answers: ["Los artesanos con puestos en el sector que da al río deberán retirarlos los días de crecida.", "Los artesanos con puestos ubicados en el sector que da al río deberán retirarlos los días de crecida.", "Los artesanos con puestos en el sector del río deberán retirarlos los días de crecida."],
        why: "Complementos con «con» y «en» sustituyen dos relativas.",
      },
      {
        type: "error",
        sentence: "La inspectora explicó que, cuando lleguen los toldos, que se instalarán en un día.",
        answers: ["La inspectora explicó que, cuando lleguen los toldos, se instalarán en un día."],
        why: "El «que» repetido tras el inciso sobra.",
      },
      {
        type: "error",
        sentence: "Los vecinos opinan de que la feria atrae turismo al barrio.",
        answers: ["Los vecinos opinan que la feria atrae turismo al barrio."],
        why: "Dequeísmo: «opinar algo».",
      },
      {
        type: "order",
        words: ["Este", "cambio", "se", "comunicará", "a", "los", "feriantes", "con", "quince", "días", "de", "antelación."],
        why: "Encapsulador nominal al principio de la oración.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de trabajo por qué no conviene cortar en frases sueltas una norma que tiene condición, excepción y plazo, y qué haces para que la oración larga se entienda.",
        model: "Si separo la condición, la excepción y el plazo en frases sueltas, el lector no sabe a qué se aplica cada parte: puede leer la excepción como una regla general o el plazo como si valiera para todos. Por eso mantengo la oración, pero dejo el esqueleto a la vista: sujeto y verbo principal al principio, y después las capas en el orden en que el lector las necesita. Reviso además que ningún pronombre tenga dos referentes y que las concordancias a distancia sean correctas.",
        checklist: [
          "Explico el riesgo de cortar.",
          "Describo al menos dos técnicas para mantener la claridad.",
          "Uso un ejemplo o una situación concreta.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Localizo el verbo principal y su sujeto en una oración con varias capas de subordinación y compruebo la concordancia a distancia.",
      "Detecto referentes ambiguos («su», «le», sujeto tácito, «que» tras «de + nombre») y los resuelvo con la herramienta adecuada.",
      "Aligero cadenas de «que» con participios, «de + nombre», «al + infinitivo» o encapsuladores, y elimino el «que» repetido tras un inciso.",
      "Evito el queísmo y el dequeísmo en la escritura cuidada y decido cuándo cortar o mantener una oración larga.",
    ],
    review: [
      "Dentro de dos días, toma un párrafo largo de un texto oficial y escribe su esqueleto en una línea.",
      "Dentro de una semana, busca en tus propios correos un «su» o un «le» con dos referentes posibles y corrígelo.",
      "En la próxima clase, lee en voz alta tu aviso y pide a tu profesor que señale la oración que más le costó seguir.",
    ],
  },
  related: [
    { path: "/gramatica/subordinacion-multiple-sin-perdida-de-referentes", label: "Clase: Subordinación múltiple sin pérdida de referentes" },
  ],
};
