import type { Module } from "../../types";

/**
 * C1 · semana 10 · Checkpoint. Autoestudio espejo de G184 (cambios de orden y
 * focalización: tema/rema) y G185 (anteposición, dislocación y clíticos
 * duplicados), con integración de G177–G183 (semanas 6 a 9). Repaso autónomo
 * con una casona ficticia de Barranco convertida en centro cultural. Audio
 * mediante síntesis; sin acreditación regional.
 */
export const c1w10: Module = {
  id: "c1-10",
  level: "c1",
  week: 10,
  kind: "checkpoint",
  title: "La casona, la salvaron los vecinos",
  subtitle: "Repaso de cómo ordenar y destacar la información, con temas dislocados y clíticos duplicados, e integración de las semanas 6 a 9",
  stop: {
    place: "Lima",
    country: "Perú",
  },
  minutes: 150,
  newObjectives: [
    "c1.gram.g184",
    "c1.gram.g185",
    "c1.voc.w10-casona-cultura",
    "c1.pron.w10-foco-dislocacion",
    "c1.lis.w10-guion-podcast",
    "c1.read.w10-cronica-casona",
    "c1.wri.w10-cronica-inauguracion",
    "c1.spk.w10-visita-casona",
    "c1.fun.w10-destacar-contrastar",
    "c1.disc.w10-progresion-tematica",
    "c1.rev.w10-repaso-semanas-6-10",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo ordenar la información de lo conocido a lo nuevo, destacar un elemento con foco contrastivo o perífrasis de relativo, presentar un tema dislocado con el clítico justo, y combinar todo ello con las estructuras de las semanas 6 a 9 en un texto coherente.",
    steps: [
      "Repasa en la teoría el orden tema-rema, la focalización, la dislocación con y sin clítico y el mapa de las clases de las semanas 6 a 9.",
      "Practica con frases sobre la restauración de una casona de Barranco y recupera las estructuras de las cuatro semanas anteriores.",
      "Escucha al equipo de un pódcast editar su guion y lee la crónica de la casona.",
      "Escribe la crónica de la inauguración, revísala con la lista integrada y guía oralmente una visita por la casona.",
    ],
  },
  theory: {
    intro: "Esta semana cierra el segundo bloque de C1. Las dos clases nuevas tratan del orden de las palabras: cómo se reparte la información entre lo que ya se sabe y lo que se aporta, y cómo se destaca o se retoma un elemento. Al final encontrarás un mapa de las clases de las semanas 6 a 9, porque todas ellas sirven para lo mismo: empaquetar la información de modo que el lector la reciba en el orden y con el relieve adecuados.",
    parts: [
      {
        heading: "Tema y rema: de lo conocido a lo nuevo",
        body: [
          "El orden sujeto-verbo-objeto es el neutro cuando toda la información es nueva: «Una cooperativa restauró la casona». Pero en un texto, cada oración retoma algo ya mencionado (el tema) y añade algo nuevo (el rema), que tiende a ir al final, donde cae el acento principal. Si el texto habla de la casona, lo natural es: «La casona la restauró una cooperativa de artesanos» o «La casona fue restaurada por una cooperativa de artesanos».",
          "Con verbos de aparición, existencia o falta (llegar, aparecer, surgir, faltar, quedar, existir) el sujeto suele ir detrás del verbo porque es lo nuevo: «Llegaron los primeros visitantes», «Faltan dos vigas». Lo mismo ocurre con las noticias que se presentan de golpe («Ha llamado la arquitecta») y con los verbos del tipo gustar («A los vecinos les encantó el patio»). En una respuesta, el elemento que responde a la pregunta va al final: «¿Quién encontró los azulejos? — Los encontró un albañil».",
          "Una buena progresión temática hace que el rema de una oración se convierta en el tema de la siguiente, o que un mismo tema se mantenga varias oraciones: «La casona tiene un balcón de cajón. Ese balcón fue tallado en cedro en 1910. El cedro llegó desde la selva central».",
        ],
        table: {
          caption: "El mismo contenido, distinto reparto",
          head: ["Pregunta implícita", "Orden natural", "Lo nuevo"],
          rows: [
            ["¿Qué pasó?", "Una cooperativa restauró la casona.", "todo"],
            ["¿Qué pasó con la casona?", "La casona la restauró una cooperativa.", "quién la restauró"],
            ["¿Quién llegó primero?", "Llegó primero la arquitecta.", "la arquitecta"],
            ["¿Qué falta?", "Faltan las barandas del segundo piso.", "las barandas"],
          ],
        },
        mistakes: [
          {
            wrong: "¿Quién pintó el mural? — Un pintor ayacuchano lo pintó.",
            right: "¿Quién pintó el mural? — Lo pintó un pintor ayacuchano.",
            why: "En la respuesta, lo nuevo (quién) va al final; el sujeto antepuesto suena forzado.",
          },
          {
            wrong: "Dos vigas del techo faltan todavía.",
            right: "Todavía faltan dos vigas del techo.",
            why: "Con «faltar», el sujeto nuevo va normalmente detrás del verbo.",
          },
        ],
      },
      {
        heading: "Foco contrastivo y perífrasis de relativo",
        body: [
          "Para contrastar un elemento con otro, puedes anteponerlo con énfasis: «POCO dinero nos dieron, no mucho», «ESO quería decirte». Esta focalización exige dos cosas: el sujeto va detrás del verbo y no aparece ningún clítico que retome el elemento antepuesto. Se escribe a menudo con mayúsculas o cursiva para marcar el acento.",
          "Las perífrasis de relativo (que ya usaste en la semana 7) también destacan: «Lo que necesitamos es tiempo», «Es tiempo lo que necesitamos», «Fue en 2019 cuando la municipalidad compró la casona». El relativo depende de lo destacado (quien, donde, cuando, como, lo que) y «ser» concuerda con ello: «Lo que faltan son permisos» suena mal; lo correcto es «Lo que falta son permisos» o «Son permisos lo que falta».",
          "Los adverbios de foco (solo, incluso, hasta, también, precisamente, justamente) se colocan delante de lo que destacan, y cambiar su posición cambia el sentido: «Solo la arquitecta vio los planos» (nadie más los vio) frente a «La arquitecta vio solo los planos» (no vio otra cosa).",
        ],
        examples: [
          { es: "TRES AÑOS tardaron en restaurar el balcón, no tres meses.", note: "Foco contrastivo: sujeto pospuesto y sin clítico." },
          { es: "Lo que más sorprendió a los vecinos fue el color original de la fachada.", note: "Perífrasis con «lo que»: destaca «el color original»." },
          { es: "Precisamente en ese patio se casaron los abuelos de la directora.", note: "El adverbio va delante del elemento destacado." },
        ],
        mistakes: [
          {
            wrong: "ESE balcón lo restauraron los artesanos, no el otro.",
            right: "ESE balcón restauraron los artesanos, no el otro.",
            why: "Con foco contrastivo no hay clítico. Con clítico, sería un tema dislocado («Ese balcón, lo restauraron los artesanos»), sin contraste.",
          },
          {
            wrong: "Fue los vecinos quienes pagaron la pintura.",
            right: "Fueron los vecinos quienes pagaron la pintura.",
            why: "«Ser» concuerda con el elemento destacado.",
          },
        ],
        tip: "Prueba del clítico: si quieres contrastar, quítalo; si quieres retomar algo ya conocido, ponlo.",
      },
      {
        heading: "Dislocación a la izquierda: el tema delante y el clítico que lo retoma",
        body: [
          "La dislocación a la izquierda coloca delante un elemento ya conocido para anunciar de qué se va a hablar. Va seguido de una pausa y, si es un complemento directo o indirecto, se retoma con un clítico que concuerda: «Las llaves, las tiene el guardián», «A la arquitecta, no le dijimos nada todavía». No hay contraste ni inversión obligatoria: es un recurso de organización, muy frecuente al hablar.",
          "Algunos temas no tienen clítico porque el español no dispone de uno para ellos: complementos con preposición («De la venta, no quiero hablar», «Con el alcalde, hablo yo»), lugares y tiempos («En Barranco, viví quince años»), o sustantivos sin artículo («Azulejos, encontramos muchos»). Para retomar una oración entera o un atributo se usa «lo» neutro: «Que iba a ser caro, lo sabíamos», «Restaurada, lo está; abierta, todavía no».",
          "En registro formal, el tema se introduce con un marcador: «En cuanto a la financiación, …», «Por lo que respecta a los permisos, …», «En lo que se refiere a los vecinos, …». En el habla coloquial existe el tema colgante, sin preposición y retomado dentro de la oración: «La municipalidad, no me fío de esa gente». Y la dislocación a la derecha añade el tema al final, como aclaración: «Ya lo sé, lo del techo», «Me lo contó ayer, tu hermano».",
          "En el Río de la Plata es frecuente duplicar el complemento directo de persona definido sin dislocarlo: «Lo vi a Juan», donde en la mayoría de las variedades se dice «Vi a Juan». En Lima no es lo habitual, pero puedes oírlo a hablantes argentinos o uruguayos.",
        ],
        table: {
          caption: "Tema con clítico, tema sin clítico y foco",
          head: ["Estructura", "Ejemplo", "Clítico"],
          rows: [
            ["dislocación de objeto directo", "Los planos, los guarda la arquitecta.", "sí, concordado"],
            ["dislocación de objeto indirecto", "A los vecinos, les mandamos una carta.", "sí"],
            ["tema con preposición", "De la venta, no se habló.", "no hay clítico posible"],
            ["oración como tema", "Que iba a ser difícil, lo sabíamos.", "«lo» neutro"],
            ["marcador formal", "En cuanto a los permisos, llegaron ayer.", "no"],
            ["foco contrastivo", "LOS PLANOS guarda la arquitecta, no las fotos.", "no (y sujeto pospuesto)"],
          ],
        },
        mistakes: [
          {
            wrong: "Las fotos antiguas, tengo yo.",
            right: "Las fotos antiguas, las tengo yo.",
            why: "Un objeto directo definido dislocado se retoma con un clítico que concuerda.",
          },
          {
            wrong: "De la venta, no lo quiero hablar.",
            right: "De la venta, no quiero hablar.",
            why: "Un tema con preposición no tiene clítico que lo retome.",
          },
        ],
      },
      {
        heading: "Integración: lo que repasaste en las semanas 6 a 9",
        body: [
          "Todas las clases del bloque sirven para dar a cada dato el lugar y el relieve que le corresponden. En la semana 6 (G177), la absoluta de participio dejaba como fondo un hecho ya terminado: «Terminada la restauración, la casona abrió sus puertas». En la semana 7, el infinitivo con sujeto implícito (G178) ahorraba repetir quién actúa («La municipalidad prometió reabrirla») y los relativos complejos (G179) encadenaban datos sin repetir sustantivos («la casona, cuyo balcón data de 1910»).",
          "En la semana 8 cuidaste el régimen de cada «que» (G180: «estamos seguros de que…», «pensamos que…») y la elección de lo, la y le (G181: «A la arquitecta le pedimos los planos»). En la semana 9 viste los valores de «se» (G182: «el techo se hundió», «se nos cayó una viga») y cómo la voz mantiene el tema (G183: «La casona fue comprada por la municipalidad en 2019»). Ahora el orden de palabras de G184 y G185 se suma a esas herramientas.",
        ],
        table: {
          caption: "Mapa del bloque: una estructura de cada clase",
          head: ["Clase", "Estructura", "Ejemplo en la casona"],
          rows: [
            ["G177 · semana 6", "absoluta de participio", "Retirados los andamios, apareció la fachada original."],
            ["G178 · semana 7", "infinitivo compuesto", "El antiguo dueño niega haber vendido los azulejos."],
            ["G179 · semana 7", "preposición + el cual / cuyo", "el balcón, sin cuyo cedro no habría restauración posible"],
            ["G180 · semana 8", "régimen de «que»", "Nos dimos cuenta de que faltaban dos vigas."],
            ["G181 · semana 8", "pronombres según la norma", "A la arquitecta le enviamos las fotos; a los vecinos los invitamos."],
            ["G182 · semana 9", "«se» medio y accidental", "El techo se hundió en 2007; se nos rompió una teja al subirla."],
            ["G183 · semana 9", "voz según el tema", "La casona fue comprada por la municipalidad en 2019."],
            ["G184 · semana 10", "foco y tema-rema", "Fue un albañil quien encontró los azulejos."],
            ["G185 · semana 10", "dislocación con clítico", "Los azulejos, los guarda ahora el museo."],
          ],
        },
        mistakes: [
          {
            wrong: "Terminado las obras, estamos seguros que la casona la visitarán miles de personas.",
            right: "Terminadas las obras, estamos seguros de que miles de personas visitarán la casona.",
            why: "Tres fallos de tres semanas: concordancia del participio (G177), «seguros de que» (G180) y un tema dislocado innecesario que rompe el orden natural (G185).",
          },
        ],
        tip: "Al revisar un texto largo, haz una pasada para cada tipo de estructura: participios, «que», pronombres, «se» y orden. Una sola lectura general deja escapar errores.",
      },
    ],
  },
  grammar: {
    intro: "Trabaja primero el orden y el foco, después la dislocación, y termina reformulando con todas las herramientas del bloque.",
    exercises: [
      {
        id: "c1-10-gramatica-respuesta",
        type: "context",
        prompt: "Lee la pregunta y elige la respuesta con el orden más natural.",
        items: [
          {
            context: "En la visita guiada, un niño pregunta: «¿Quién vivía en esta casa?».",
            q: "¿Qué respuesta es más natural?",
            options: ["Una familia de comerciantes italianos vivía aquí.", "Aquí vivía una familia de comerciantes italianos.", "Vivía aquí, una familia de comerciantes italianos, la vivía."],
            answer: 1,
            why: "Lo nuevo (quién) va al final; el lugar, ya conocido, al principio.",
          },
          {
            context: "Mensaje en el grupo del equipo: «¿Qué falta para la inauguración?».",
            q: "¿Qué respuesta es más natural?",
            options: ["Faltan las sillas del auditorio y el permiso de Defensa Civil.", "Las sillas del auditorio y el permiso de Defensa Civil faltan.", "Las sillas del auditorio, las faltan."],
            answer: 0,
            why: "Con «faltar», el sujeto nuevo va detrás del verbo.",
          },
          {
            context: "Alguien dice: «Tardaron tres meses en restaurar el balcón, ¿no?». Tú quieres corregir la cifra.",
            q: "¿Qué frase marca el contraste?",
            options: ["Tres años lo tardaron, el balcón.", "El balcón, lo restauraron en tres años.", "TRES AÑOS tardaron, no tres meses."],
            answer: 2,
            why: "Foco contrastivo antepuesto, sin clítico.",
          },
          {
            context: "Texto que viene hablando de los azulejos encontrados en la cocina.",
            q: "¿Qué oración continúa mejor el texto?",
            options: ["Un albañil encontró esos azulejos en 2021.", "Esos azulejos los encontró un albañil en 2021.", "En 2021 encontró un albañil esos azulejos."],
            answer: 1,
            why: "El tema (los azulejos) va delante, retomado con clítico; lo nuevo (quién) al final.",
          },
        ],
      },
      {
        id: "c1-10-gramatica-tipo",
        type: "classify",
        prompt: "Clasifica cada frase según la estructura que usa.",
        categories: ["Dislocación (tema con pausa, con o sin clítico)", "Foco contrastivo (sin clítico, con inversión)", "Perífrasis de relativo"],
        items: [
          { text: "El patio, lo pintaron de azul añil.", cat: 0, why: "Tema dislocado retomado con «lo»." },
          { text: "AÑIL pintaron el patio, no celeste.", cat: 1, why: "Foco antepuesto sin clítico y con contraste." },
          { text: "Fue la abuela de Rosa quien plantó el ficus.", cat: 2, why: "«Fue… quien…»." },
          { text: "Con los vecinos, habla siempre la directora.", cat: 0, why: "Tema con preposición, sin clítico posible." },
          { text: "Lo que nos faltaba era un buen carpintero.", cat: 2, why: "«Lo que… era…»." },
          { text: "MIL personas vinieron el primer día, no cien.", cat: 1, why: "Foco contrastivo con sujeto pospuesto." },
          { text: "Que la obra iba a durar años, ya lo sabíamos.", cat: 0, why: "Oración dislocada retomada con «lo» neutro." },
        ],
      },
      {
        id: "c1-10-gramatica-clitico",
        type: "gap",
        prompt: "Escribe el clítico que retoma el tema dislocado.",
        items: [
          { q: "Los planos originales, ___ encontró la arquitecta en un archivo de la Beneficencia.", answers: [["los"]], why: "Objeto directo masculino plural." },
          { q: "A la antigua dueña, ___ invitamos a la inauguración.", answers: [["la"]], why: "Objeto directo femenino de persona: «invitar a alguien»." },
          { q: "A los carpinteros, ___ regalamos una placa de agradecimiento.", answers: [["les"]], why: "Objeto indirecto plural (la placa es el directo)." },
          { q: "Que iba a ser caro, ya ___ sabíamos desde el principio.", answers: [["lo"]], why: "«Lo» neutro retoma una oración." },
          { q: "La escalera de caracol, ___ desmontaron pieza por pieza.", answers: [["la"]], why: "Objeto directo femenino singular." },
        ],
      },
      {
        id: "c1-10-gramatica-errores",
        type: "error",
        prompt: "Corrige el error de orden, foco o dislocación. Algunas frases recuperan también estructuras de las semanas 6 a 9.",
        items: [
          {
            sentence: "Las llaves de la casona, tiene el guardián.",
            answers: ["Las llaves de la casona, las tiene el guardián."],
            why: "Objeto directo definido dislocado: hace falta el clítico «las».",
          },
          {
            sentence: "De los problemas con la municipalidad, no lo vamos a hablar hoy.",
            answers: ["De los problemas con la municipalidad, no vamos a hablar hoy."],
            why: "Un tema con preposición no se retoma con clítico.",
          },
          {
            sentence: "Lo que más nos costó fueron conseguir los permisos.",
            answers: ["Lo que más nos costó fue conseguir los permisos."],
            why: "El elemento destacado es un infinitivo: «ser» va en singular.",
          },
          {
            sentence: "Retirado las tablas del piso, la casona se descubrió que tenía un sótano.",
            answers: ["Retiradas las tablas del piso, se descubrió que la casona tenía un sótano."],
            why: "Concordancia de la absoluta (G177) y orden: «la casona» no es el tema dislocado de «se descubrió».",
          },
        ],
      },
      {
        id: "c1-10-gramatica-reformular",
        type: "open",
        prompt: "Reformula según se te pide. Compara con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Reordena este párrafo para que avance de lo conocido a lo nuevo: «Una familia italiana construyó la casona en 1910. Un comerciante limeño compró la casona en 1950. Un incendio dañó el techo de la casona en 2007. La municipalidad compró la casona en 2019».",
            model: "La casona la construyó una familia italiana en 1910. En 1950 la compró un comerciante limeño, y en 2007 un incendio le dañó el techo. Finalmente, fue adquirida por la municipalidad en 2019.",
            checklist: ["La casona se mantiene como tema al principio de las oraciones.", "Lo nuevo (quién, qué) aparece al final.", "Varío las estructuras: dislocación, pasiva, orden con sujeto pospuesto."],
          },
          {
            prompt: "Una vecina dice: «La casona la salvamos los vecinos». Escribe dos versiones: una que contraste con la municipalidad (foco) y otra con perífrasis de relativo. Explica la diferencia.",
            model: "Foco: «LOS VECINOS salvamos la casona, no la municipalidad». Perífrasis: «Fuimos los vecinos quienes salvamos la casona». La primera contrasta de forma directa y oral; la segunda destaca a los vecinos de manera más neutra y sirve también por escrito.",
            checklist: ["El foco contrastivo no lleva clítico.", "La perífrasis concuerda «ser» con «los vecinos».", "Explico el matiz de cada versión."],
          },
          {
            prompt: "Escribe la frase de presentación de la casona para un folleto (30–50 palabras) usando una absoluta (G177), un «cuyo» (G179) y una pasiva que mantenga el tema (G183).",
            model: "Restaurada tras cinco años de obras, la casona Ferrando, cuyo balcón de cedro es uno de los más antiguos de Barranco, fue inaugurada en marzo como centro cultural. Hoy acoge talleres, conciertos y un archivo de fotografía del barrio.",
            checklist: ["La absoluta concuerda con su sustantivo.", "«Cuyo» concuerda con lo poseído.", "La pasiva mantiene la casona como tema."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de la arquitectura republicana limeña y de la gestión de un centro cultural.",
    groups: [
      {
        title: "La casona por dentro y por fuera",
        items: [
          { es: "la casona", note: "casa grande y antigua, típica del centro histórico o de distritos como Barranco" },
          { es: "el balcón de cajón", note: "balcón cerrado de madera tallada, característico de Lima" },
          { es: "la quincha", note: "técnica de construcción con caña y barro, muy usada en la costa peruana" },
          { es: "el zaguán", note: "espacio cubierto entre la puerta de la calle y el patio" },
          { es: "la teatina", note: "ventana elevada en el techo para iluminar y ventilar, propia de la arquitectura limeña" },
          { es: "el azulejo", note: "pieza de cerámica vidriada que cubre paredes y suelos" },
          { es: "la viga", note: "pieza horizontal que sostiene el techo" },
        ],
      },
      {
        title: "Un centro cultural en marcha",
        items: [
          { es: "la puesta en valor", note: "conjunto de acciones para recuperar y dar uso a un bien patrimonial" },
          { es: "la Beneficencia", note: "en Perú, institución pública propietaria de muchos inmuebles históricos" },
          { es: "el guion del pódcast", note: "texto que sirve de base para grabar un programa de audio" },
          { es: "la jornada de puertas abiertas", note: "día en que se permite visitar un lugar libremente" },
          { es: "la gestión cultural", note: "organización y administración de actividades y espacios culturales" },
          { es: "la vecindad", note: "conjunto de vecinos de un barrio" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-10-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada palabra con su definición.",
        pairs: [
          { left: "el balcón de cajón", right: "balcón cerrado de madera tallada, característico de Lima" },
          { left: "la quincha", right: "construcción con caña y barro de la costa peruana" },
          { left: "el zaguán", right: "espacio cubierto entre la puerta de la calle y el patio" },
          { left: "la teatina", right: "ventana elevada en el techo para iluminar y ventilar" },
          { left: "la puesta en valor", right: "acciones para recuperar y dar uso a un bien patrimonial" },
          { left: "la jornada de puertas abiertas", right: "día en que se permite visitar un lugar libremente" },
        ],
      },
      {
        id: "c1-10-lexico-uso",
        type: "gap",
        prompt: "Completa el anuncio del centro cultural con la expresión adecuada.",
        bank: ["gestión cultural", "vigas", "azulejos", "vecindad"],
        items: [
          { q: "Durante la restauración se cambiaron tres ___ del techo que estaban podridas.", answers: [["vigas"]] },
          { q: "Los ___ sevillanos de la cocina se exhiben ahora en la sala principal.", answers: [["azulejos"]] },
          { q: "El curso de ___ empieza en abril y está abierto a todo el barrio.", answers: [["gestión cultural"]] },
          { q: "La casona se recuperó gracias al empeño de toda la ___.", answers: [["vecindad"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Foco contrastivo y tema dislocado: dos melodías distintas",
    explanation: [
      "El foco contrastivo y el tema dislocado pueden empezar con las mismas palabras, pero suenan distinto. En el foco, el elemento antepuesto lleva el acento más fuerte y un tono alto, y el resto de la oración sigue sin pausa y en un tono más bajo: «ESE BALCÓN restauraron, no el otro». En el tema dislocado, el elemento antepuesto termina con un tono suspendido, hay una pausa y el acento principal cae al final: «Ese balcón, | lo restauraron unos carpinteros de Cajamarca».",
      "La dislocación a la derecha, en cambio, se pronuncia en tono bajo y sin fuerza, como un añadido: «Ya lo sabíamos, | lo del techo». Si le das relieve, suena como una nueva información y pierde su valor de aclaración.",
      "Las voces del audio son sintéticas y no representan una variedad limeña verificada: úsalas para percibir el contraste melódico, no como modelo regional ni como evaluación de tu pronunciación.",
    ],
    table: {
      caption: "Foco y tema: cómo suenan",
      head: ["Estructura", "Ejemplo", "Melodía"],
      rows: [
        ["foco contrastivo", "AÑIL pintaron el patio.", "tono alto al principio, sin pausa"],
        ["tema dislocado", "El patio, | lo pintaron de añil.", "suspensión, pausa, acento al final"],
        ["dislocación a la derecha", "Lo pintaron ayer, | el patio.", "añadido final en tono bajo"],
      ],
    },
    perceive: {
      id: "c1-10-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué estructura reconoces por la melodía y por el clítico.",
      items: [
        {
          q: "¿Qué estructura oyes?",
          options: ["Tema dislocado con clítico.", "Foco contrastivo sin clítico."],
          answer: 0,
          why: "Hay pausa tras «Los azulejos» y aparece «los»: tema dislocado.",
          audio: "Los azulejos, los encontró un albañil debajo del piso de la cocina.",
          voice: "es-PE-f",
        },
        {
          q: "¿Qué estructura oyes?",
          options: ["Tema dislocado con clítico.", "Foco contrastivo sin clítico."],
          answer: 1,
          why: "Acento fuerte al principio, sin pausa y sin clítico: foco contrastivo.",
          audio: "Azulejos sevillanos encontró el albañil, no mosaicos.",
          voice: "es-PE-m",
        },
        {
          q: "¿Qué hace la última parte de la frase?",
          options: ["Aporta la información principal.", "Aclara de qué se habla, como un añadido."],
          answer: 1,
          why: "Dislocación a la derecha en tono bajo: aclara el tema.",
          audio: "Ya me lo contaron ayer, lo de las vigas.",
          voice: "es-PE-f",
        },
        {
          q: "¿Qué elemento recibe el acento principal?",
          options: ["la directora", "los vecinos", "el patio"],
          answer: 1,
          why: "Perífrasis con el elemento destacado al principio: «Fueron los vecinos quienes…».",
          audio: "Fueron los vecinos quienes limpiaron el patio el primer fin de semana.",
          voice: "es-PE-m",
        },
      ],
    },
    produce: [
      { text: "La casona, la compró la municipalidad en dos mil diecinueve.", tip: "Suspende el tono en «casona», haz la pausa y acentúa el final.", voice: "es-PE-f" },
      { text: "CEDRO usaron para el balcón, no pino.", tip: "Acento alto en «cedro», sin pausa después.", voice: "es-PE-m" },
      { text: "En cuanto a los permisos, llegaron la semana pasada.", tip: "Marcador formal con pausa breve.", voice: "es-PE-f" },
      { text: "Lo que más me gusta de la casona es la luz que entra por las teatinas.", tip: "Deja el acento principal en «teatinas».", voice: "es-PE-m" },
    ],
    spelling: "Cuando el tema dislocado va delante, se separa con coma: «Los planos, los tiene la arquitecta». El foco contrastivo no lleva coma: «LOS PLANOS tiene la arquitecta».",
  },
  listening: {
    title: "Ajustes al guion del pódcast",
    context: "Carmen y Rodrigo producen un pódcast sobre el patrimonio de Lima. Antes de grabar el episodio dedicado a una casona de Barranco convertida en centro cultural, repasan el guion en la cabina de grabación. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "c", name: "Carmen", voice: "es-PE-f", role: "Productora y locutora del pódcast" },
      { id: "r", name: "Rodrigo", voice: "es-PE-m", role: "Guionista del pódcast" },
    ],
    script: [
      { speaker: "c", text: "Rodrigo, antes de grabar, una cosa. Tu guion empieza así: «Una familia italiana construyó en 1910 una casona en Barranco y la municipalidad la compró en 2019». Está bien, pero el oyente no sabe todavía de qué casona hablamos. Yo arrancaría por la casona misma: «Esta casona de Barranco la construyó una familia italiana en 1910»." },
      { speaker: "r", text: "Me parece. Así la casona queda como tema y lo nuevo, quién la construyó, va al final. Ahora, lo de la compra, ¿lo dejo como está?" },
      { speaker: "c", text: "Yo lo pondría en pasiva, para no cambiar de protagonista: «fue comprada por la municipalidad en 2019, cuando ya llevaba doce años abandonada». Aquí el agente sí es noticia, porque mucha gente cree que la compró un banco." },
      { speaker: "r", text: "De acuerdo. Después viene la parte de la entrevista a doña Rosa. Ella dice: «La casona, la salvamos los vecinos; la municipalidad llegó después». Mantengo la cita así, ¿verdad? Suena muy natural." },
      { speaker: "c", text: "Sí, claro, es su voz. Pero luego tú escribes, como narrador: «Los vecinos la salvaron la casona». Eso ya no funciona: o dices «Los vecinos salvaron la casona», o dislocas, «La casona, la salvaron los vecinos», pero no las dos cosas a la vez." },
      { speaker: "r", text: "Tienes razón, se me escapó. Y en el párrafo de los azulejos, puse: «El albañil encontró azulejos sevillanos». ¿Le doy más fuerza?" },
      { speaker: "c", text: "Ahí hay un contraste, porque todos pensaban que eran mosaicos de fábrica. Puedes decir: «Azulejos sevillanos del siglo diecinueve encontró el albañil, no simples mosaicos». Al leerlo en voz alta, el foco se nota. O, si prefieres algo más neutro: «Fue un albañil quien encontró los azulejos»." },
      { speaker: "r", text: "Me quedo con la primera para el audio. Y el final: «De la venta del terreno de atrás, no lo vamos a hablar». ¿Está bien?" },
      { speaker: "c", text: "Quita el lo: «De la venta del terreno de atrás, no vamos a hablar». No hay pronombre para un tema con de. Y cierra con algo que recoja todo, por ejemplo: «Restaurada y abierta, lo está; terminada, todavía no». Ese lo sí va, porque retoma los adjetivos." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué hacen y qué tipo de cambios proponen?",
        exercise: {
          id: "c1-10-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué hacen Carmen y Rodrigo?",
              options: ["Entrevistan a una vecina de Barranco.", "Revisan el guion de un episodio antes de grabarlo.", "Discuten si comprar la casona."],
              answer: 1,
              why: "Repasan frase por frase el guion del episodio.",
            },
            {
              q: "¿Qué tipo de cambios propone sobre todo Carmen?",
              options: ["Cambios de orden, de foco y de pronombres.", "Cambios de vocabulario técnico.", "Cambios en la duración del episodio."],
              answer: 0,
              why: "Todas sus propuestas tienen que ver con el orden de la información y los clíticos.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-10-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué Carmen mantiene el agente en la frase sobre la compra?",
              options: ["Porque así lo exige la municipalidad.", "Porque es una cita literal.", "Porque mucha gente cree que la compró un banco."],
              answer: 2,
              why: "El agente es noticia: corrige una creencia equivocada.",
            },
            {
              q: "¿Qué error tiene «Los vecinos la salvaron la casona»?",
              options: ["Mezcla el orden neutro con un clítico que solo tendría sentido si dislocara el objeto.", "Usa un verbo que no existe.", "Debería decir «les salvaron»."],
              answer: 0,
              why: "O sin clítico, o con el objeto dislocado y clítico; no las dos cosas.",
            },
            {
              q: "¿Por qué Carmen propone el foco contrastivo para los azulejos?",
              options: ["Porque suena más formal.", "Porque todos pensaban que eran mosaicos de fábrica.", "Porque el albañil lo pidió."],
              answer: 1,
              why: "Hay un contraste real con lo que se creía.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cada estructura comentada. Relaciona y consulta la transcripción después.",
        exercise: {
          id: "c1-10-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con la estructura que ilustra.",
          pairs: [
            { left: "Esta casona de Barranco la construyó una familia italiana", right: "tema delante con clítico y lo nuevo al final" },
            { left: "fue comprada por la municipalidad en 2019", right: "pasiva que mantiene el tema y presenta un agente nuevo" },
            { left: "Azulejos sevillanos del siglo diecinueve encontró el albañil", right: "foco contrastivo sin clítico" },
            { left: "De la venta del terreno de atrás, no vamos a hablar", right: "tema con preposición, sin clítico" },
            { left: "Restaurada y abierta, lo está", right: "«lo» neutro que retoma adjetivos" },
          ],
          why: "El guion final combina orden tema-rema, voz, foco y dislocación.",
        },
      },
    ],
  },
  reading: {
    title: "La casona que nadie quería",
    genre: "Crónica de revista cultural",
    frame: "Crónica de Lucía Paredes para una revista cultural limeña. La casona, las personas y los datos son ficticios.",
    text: [
      "La casona Ferrando, en la avenida Grau de Barranco, la conoce cualquiera que haya caminado alguna vez hacia el Puente de los Suspiros. Lo que casi nadie sabe es que estuvo a punto de desaparecer. Construida en 1910 por una familia de comerciantes genoveses, pasó por cuatro dueños, un incendio y doce años de abandono antes de que la municipalidad la comprara en 2019. Hoy, restaurada tras cinco años de obras, es un centro cultural donde se dictan talleres, se graban pódcasts y se guarda el archivo fotográfico del barrio.",
      "Fue doña Rosa Huamán, vecina de la casa de enfrente desde 1964, quien dio la primera voz de alarma. «La casona, la salvamos los vecinos; la municipalidad llegó después», dice sin falsa modestia mientras me sirve un café en su sala. Cuando el techo se hundió, en 2007, ella y otras seis familias se turnaron durante meses para impedir que se robaran el balcón de cajón, cuyo cedro tallado vale hoy más que muchas casas del distrito. «De lo que pasó con los dueños, no quiero hablar», añade. «Lo que importa es que sigue en pie».",
      "La restauración la dirigió la arquitecta Milagros Quispe, que antes había trabajado en varias casonas del centro histórico. A ella le pregunté qué había sido lo más difícil. No dudó: «Convencer a todo el mundo de que la quincha se podía recuperar. Mucha gente piensa que una casa de caña y barro no aguanta un terremoto, y es justo al revés: bien mantenida, se mueve con el suelo». Retiradas las capas de pintura que la cubrían, apareció la fachada original, de un amarillo ocre que ningún vecino recordaba.",
      "La mayor sorpresa, sin embargo, llegó de la cocina. Al levantar un piso de cemento de los años sesenta, un albañil encontró cientos de azulejos que todos tomaron al principio por mosaicos de fábrica. Azulejos sevillanos del siglo diecinueve eran, no simples mosaicos, según confirmó después un especialista del Museo de Arte. Hoy esos azulejos, los ha limpiado y ordenado un equipo de estudiantes de conservación, y cubren una pared entera de la sala principal, junto a una fotografía en la que se ve a la familia Ferrando posando en ese mismo lugar.",
      "Los problemas, de todos modos, no se han terminado. Faltan todavía las barandas del segundo piso, y en cuanto a la financiación, el presupuesto municipal solo alcanza hasta diciembre. La directora del centro, Patricia Rojas, está convencida de que el apoyo vecinal será decisivo una vez más. «Si algo hemos aprendido es que esta casa no la sostienen las vigas, sino la gente», dice. Por eso los sábados se organizan jornadas de puertas abiertas en las que cada visitante puede dejar una foto antigua del barrio para el archivo.",
      "Al despedirme, doña Rosa me acompaña hasta el zaguán y señala las teatinas, por donde entra una luz blanca que dibuja rectángulos en el suelo del patio. «Esa luz, la veía yo de niña desde mi ventana», me dice. «Ahora la ven mis nietos desde dentro». Restaurada, la casona lo está; terminada, todavía no. Pero precisamente en esa diferencia, en lo que aún falta por hacer, parece estar el motivo por el que un barrio entero ha decidido no dejarla caer.",
    ],
    glossary: [
      { es: "dar la voz de alarma", note: "avisar de un peligro" },
      { es: "sin falsa modestia", note: "sin fingir que algo tiene menos mérito del que tiene" },
      { es: "dictar un taller", note: "en Perú y otros países, impartir un curso práctico" },
    ],
    tasks: [
      {
        id: "c1-10-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la crónica.",
        items: [
          {
            q: "¿Qué papel tuvieron los vecinos, según doña Rosa?",
            options: ["Vendieron la casona a la municipalidad.", "Protegieron la casona antes de que interviniera la municipalidad.", "Financiaron toda la restauración."],
            answer: 1,
            why: "«La casona, la salvamos los vecinos; la municipalidad llegó después».",
          },
          {
            q: "¿Qué fue lo más difícil para la arquitecta?",
            options: ["Encontrar el color original de la fachada.", "Conseguir azulejos de Sevilla.", "Convencer a la gente de que la quincha se podía recuperar."],
            answer: 2,
            why: "Lo dice en el tercer párrafo.",
          },
          {
            q: "¿Qué problema sigue pendiente?",
            options: ["Las barandas y la financiación a partir de diciembre.", "El techo, que volvió a hundirse.", "La falta de visitantes los sábados."],
            answer: 0,
            why: "«Faltan todavía las barandas… el presupuesto municipal solo alcanza hasta diciembre».",
          },
        ],
      },
      {
        id: "c1-10-lectura-estructuras",
        type: "classify",
        prompt: "Clasifica cada fragmento de la crónica según la estructura que destaca.",
        categories: ["Tema dislocado o marcador de tema", "Foco o perífrasis de relativo", "Estructura de las semanas 6 a 9"],
        items: [
          { text: "La restauración la dirigió la arquitecta Milagros Quispe", cat: 0, why: "Tema delante retomado con «la»." },
          { text: "Fue doña Rosa Huamán, vecina de la casa de enfrente desde 1964, quien dio la primera voz de alarma.", cat: 1, why: "Perífrasis de relativo con «quien»." },
          { text: "Retiradas las capas de pintura que la cubrían, apareció la fachada original", cat: 2, why: "Absoluta de participio (G177)." },
          { text: "en cuanto a la financiación, el presupuesto municipal solo alcanza hasta diciembre", cat: 0, why: "Marcador formal de tema." },
          { text: "Azulejos sevillanos del siglo diecinueve eran, no simples mosaicos", cat: 1, why: "Foco contrastivo sin clítico." },
          { text: "el balcón de cajón, cuyo cedro tallado vale hoy más que muchas casas", cat: 2, why: "Relativo «cuyo» (G179)." },
          { text: "está convencida de que el apoyo vecinal será decisivo", cat: 2, why: "Régimen «convencida de que» (G180)." },
        ],
      },
      {
        id: "c1-10-lectura-evaluacion",
        type: "open",
        prompt: "Valora la técnica de la cronista.",
        items: [
          {
            prompt: "La cronista alterna su propia voz, más neutra, con las citas de doña Rosa, llenas de temas dislocados. Explica en 80–100 palabras qué efecto produce esa alternancia y si te parece adecuada para una revista cultural.",
            model: "La alternancia da vida al texto. La voz de la cronista ordena los hechos con estructuras propias de la escritura, como la absoluta «Retiradas las capas de pintura» o el relativo «cuyo cedro tallado». Las citas de doña Rosa, en cambio, conservan la dislocación típica del habla: «La casona, la salvamos los vecinos». Ese contraste hace que el lector oiga a una persona real. Me parece adecuado para una revista cultural, siempre que la cronista no imite el tono oral en su propia voz.",
            checklist: ["Describo la diferencia entre las dos voces con ejemplos del texto.", "Valoro el efecto en el lector.", "Uso al menos una estructura de las semanas 6 a 9."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la cronista combina el orden tema-rema, el foco y la dislocación con estructuras de las semanas anteriores.",
      items: [
        { quote: "La casona Ferrando, en la avenida Grau de Barranco, la conoce cualquiera", note: "La crónica empieza con un tema dislocado: la casona es lo que el lector ya puede identificar." },
        { quote: "«De lo que pasó con los dueños, no quiero hablar»", note: "Tema con preposición, sin clítico, en la voz de doña Rosa." },
        { quote: "Hoy esos azulejos, los ha limpiado y ordenado un equipo de estudiantes de conservación", note: "Tema retomado con «los» y agente nuevo al final." },
        { quote: "esta casa no la sostienen las vigas, sino la gente", note: "Tema con clítico y contraste en el rema: «las vigas» frente a «la gente»." },
        { quote: "Restaurada, la casona lo está; terminada, todavía no.", note: "«Lo» neutro que retoma el adjetivo antepuesto." },
      ],
    },
  },
  practice: {
    intro: "Esta práctica integra las clases de esta semana con las de las semanas 6 a 9: absolutas, infinitivos, relativos, régimen, pronombres, «se» y voz.",
    exercises: [
      {
        id: "c1-10-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases con tema dislocado o foco.",
        items: [
          {
            words: ["Las", "fotos", "antiguas,", "las", "guarda", "el", "archivo", "del", "centro."],
            why: "Tema dislocado con clítico concordado.",
          },
          {
            words: ["Fue", "la", "arquitecta", "quien", "dirigió", "la", "restauración."],
            why: "Perífrasis de relativo con «quien».",
          },
          {
            words: ["En", "cuanto", "a", "las", "barandas,", "llegarán", "en", "enero."],
            why: "Marcador formal de tema, sin clítico.",
          },
        ],
      },
      {
        id: "c1-10-integracion",
        type: "context",
        prompt: "Elige la opción correcta. Cada ítem recupera una clase de las semanas 6 a 9.",
        items: [
          {
            context: "Repaso de G177 (semana 6). Crónica de la restauración.",
            q: "¿Qué frase es correcta?",
            options: ["Terminado las obras, se abrió el centro.", "Una vez que terminadas las obras, se abrió el centro.", "Terminadas las obras, se abrió el centro."],
            answer: 2,
            why: "Participio concordado con «las obras» y sin «que».",
          },
          {
            context: "Repaso de G178 (semana 7). Declaración del antiguo dueño.",
            q: "¿Qué frase expresa que niega un hecho anterior?",
            options: ["Niega haber vendido el balcón a un anticuario.", "Niega que vender el balcón a un anticuario.", "Niega vender el balcón a un anticuario mañana."],
            answer: 0,
            why: "Infinitivo compuesto con el mismo sujeto.",
          },
          {
            context: "Repaso de G179 (semana 7). Folleto del centro.",
            q: "¿Qué frase es adecuada en un texto cuidado?",
            options: ["Es una casona que su balcón es de cedro.", "Es una casona cuyo balcón es de cedro.", "Es una casona la cual su balcón es de cedro."],
            answer: 1,
            why: "«Cuyo» concordado con «balcón».",
          },
          {
            context: "Repaso de G180 y G181 (semana 8). Carta a la arquitecta.",
            q: "¿Qué frase sigue la norma?",
            options: ["Estamos seguros que la dijimos la fecha correcta.", "Estamos seguros de que le dijimos la fecha correcta.", "Estamos seguros de que la dijimos de la fecha correcta."],
            answer: 1,
            why: "«Seguros de que» y «le» para el complemento indirecto.",
          },
          {
            context: "Repaso de G182 y G183 (semana 9). Nota de prensa sobre los voluntarios.",
            q: "¿Qué frase evita la ambigüedad y suena natural?",
            options: ["Se trasladaron los voluntarios a la casona en bus.", "Fue trasladado por la municipalidad que los voluntarios llegaran en bus.", "Se trasladó a los voluntarios a la casona en bus."],
            answer: 2,
            why: "«Se» + «a» evita la lectura reflexiva; la segunda es un calco agramatical.",
          },
        ],
      },
      {
        id: "c1-10-mapa",
        type: "match",
        prompt: "Relaciona cada frase con la clase del bloque que repasa.",
        pairs: [
          { left: "Retirados los andamios, apareció la fachada.", right: "G177 · absolutas de participio" },
          { left: "A la directora le prometimos ayudarla con el archivo.", right: "G178 · sujeto implícito del infinitivo" },
          { left: "el zaguán, por el cual se entra al patio", right: "G179 · relativas complejas" },
          { left: "Nos dimos cuenta de que faltaban vigas.", right: "G180 · queísmo y dequeísmo" },
          { left: "Se nos rompió una teja al subirla.", right: "G182 · valores de «se»" },
          { left: "Esa luz, la veía yo de niña.", right: "G185 · dislocación con clítico" },
        ],
      },
      {
        id: "c1-10-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 40–60 palabras la respuesta de la directora a un periodista que le pregunta: «¿Quién pagó la restauración?». Usa el orden tema-rema, una perífrasis de relativo y un tema dislocado.",
            model: "La restauración la pagó la municipalidad, pero no fue la municipalidad quien la hizo posible. Fueron los vecinos los que cuidaron la casa durante doce años. Y el balcón, ese lo salvó doña Rosa, que se plantaba en la puerta cada vez que alguien intentaba llevárselo.",
            checklist: ["Lo nuevo aparece al final de la primera oración.", "La perífrasis concuerda «ser» con lo destacado.", "El tema dislocado lleva su clítico."],
          },
          {
            prompt: "Escribe en 40–60 palabras un mensaje informal a un compañero del centro sobre lo que falta para el sábado. Usa al menos dos dislocaciones (una con clítico y otra sin él) y un «faltar» con sujeto pospuesto.",
            model: "Oye, para el sábado ya casi está todo. Las sillas, las trae Julio en la camioneta. De la música, no te preocupes, que me encargo yo. Lo que todavía falta son los carteles, y faltan también dos voluntarios para la puerta.",
            checklist: ["Uso una dislocación con clítico y otra con preposición sin clítico.", "Pospongo el sujeto de «faltar».", "Mantengo un registro informal coherente."],
          },
        ],
      },
      {
        id: "c1-10-recuperacion",
        type: "open",
        prompt: "Recupera las clases de las semanas 6 a 9 con estos estímulos. No vuelvas a las lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de G177 (semana 6). Estímulo: «Cuando se limpiaron los azulejos, se colocaron en la sala principal». Condénsala de dos maneras y di cuál usarías en un pódcast.",
            model: "«Limpiados los azulejos, se colocaron en la sala principal» y «Tras la limpieza de los azulejos, se colocaron en la sala principal». En un pódcast usaría la versión original con «cuando», porque al oído se entiende mejor que una absoluta.",
            checklist: ["La absoluta concuerda con «los azulejos».", "Justifico la elección según el registro oral."],
          },
          {
            prompt: "Recuperación de G178 y G179 (semana 7). Estímulo: «La arquitecta tiene un informe. Según el informe, la quincha resiste los sismos. Ella nos pidió que lo leyéramos». Únelo en una o dos oraciones cuidadas.",
            model: "La arquitecta, que nos pidió leer su informe, sostiene que la quincha resiste los sismos. / La arquitecta nos pidió leer el informe según el cual la quincha resiste los sismos.",
            checklist: ["Uso un relativo complejo («según el cual») o una explicativa.", "El infinitivo tiene un sujeto claro (nosotros)."],
          },
          {
            prompt: "Recuperación de G180 y G181 (semana 8). Estímulo, correo de un voluntario madrileño: «La dije a la directora que estoy seguro que el sábado vendrá mucha gente». Corrígelo para la voz del centro y explica los cambios.",
            model: "«Le dije a la directora que estoy seguro de que el sábado vendrá mucha gente.» Cambio «la» por «le», porque la directora es complemento indirecto (laísmo), y añado «de» tras «seguro», porque decimos «estoy seguro de eso» (queísmo).",
            checklist: ["Corrijo el laísmo y el queísmo.", "Explico cada cambio con una prueba."],
          },
          {
            prompt: "Recuperación de G182 y G183 (semana 9). Estímulo: «Fue informado por el centro que el techo se hundió por el antiguo dueño». Reescríbelo con naturalidad y explica qué tipo de «se» es «se hundió».",
            model: "«El centro informó de que el techo se hundió por la falta de mantenimiento del antiguo dueño.» Elimino la pasiva calcada y no pongo al dueño como agente de «se hundió», porque ese «se» es medio: un cambio sin agente que no admite «por» + persona. Puedo nombrar una causa, no a alguien que lo hizo.",
            checklist: ["Elimino la pasiva calcada.", "Identifico el «se» medio y su restricción."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe la crónica de la inauguración de la casona como centro cultural (260–340 palabras) para una revista de Lima. Cuenta la historia del edificio, la ceremonia y lo que queda por hacer, e incluye al menos dos citas de personas presentes.",
    context: "La crónica se publicará en la sección de cultura y la leerán vecinos de Barranco y lectores de toda la ciudad. Tu voz de cronista debe ordenar la información con claridad y usar las estructuras del bloque; las citas pueden conservar el tono oral, con temas dislocados y foco. Usa los datos de la crónica y del audio o inventa otros coherentes.",
    steps: [
      "Decide el tema de cada párrafo y escribe su primera oración con lo conocido al principio y lo nuevo al final.",
      "Elige dos citas y decide qué estructura oral conservarán (dislocación, foco, «lo» neutro).",
      "Redacta la crónica incluyendo al menos una absoluta, un relativo complejo, un «de que» exigido, un «se» bien elegido y una perífrasis de relativo.",
      "Revisa con la lista integrada: concordancia de participios, régimen de cada «que», pronombres, valores de «se», voz y clíticos de las dislocaciones. Corrige lo que no supere la revisión.",
    ],
    useLanguage: [
      "La casona…, la conoce cualquiera que…",
      "Fue… quien…",
      "Terminada la ceremonia, …",
      "cuyo… / según el cual…",
      "en cuanto a…",
      "Lo que todavía falta es…",
    ],
    model: [
      "La casona Ferrando, en la avenida Grau, la conocen todos los barranquinos, pero el sábado muchos entraron en ella por primera vez. Restaurada tras cinco años de obras, la antigua residencia de una familia genovesa abrió sus puertas como centro cultural ante unas cuatrocientas personas, que llenaron el patio y el zaguán desde primera hora de la tarde.",
      "Fue la directora, Patricia Rojas, quien abrió la ceremonia. Recordó que el edificio fue comprado por la municipalidad en 2019, cuando llevaba doce años abandonado, y agradeció a los vecinos, sin cuyo esfuerzo no habría quedado nada que restaurar. «Esta casa, la sostuvieron ustedes cuando nadie más quería saber de ella», dijo, y el aplauso duró casi un minuto.",
      "La arquitecta Milagros Quispe explicó después las decisiones técnicas. Estaba convencida de que la quincha podía recuperarse y lo demostró: retiradas las capas de pintura, apareció la fachada original, de un amarillo ocre que nadie recordaba. La mayor ovación, sin embargo, se la llevaron los azulejos sevillanos que se encontraron bajo el piso de la cocina y que hoy cubren una pared de la sala principal.",
      "Terminada la ceremonia, doña Rosa Huamán, vecina de enfrente desde 1964, se quedó un rato bajo las teatinas. «De la gente que quería tirarla, mejor no hablemos», me dijo. «Lo que importa es que ahora la ven mis nietos». Luego volvió a cruzar la avenida, despacio, hacia la casa en la que vive desde hace sesenta años.",
      "Lo que todavía falta son las barandas del segundo piso y, en cuanto a la financiación, el presupuesto solo alcanza hasta diciembre. Pero si algo quedó claro el sábado es que esta casona no la sostienen solo las vigas.",
    ],
    checklist: [
      "Cada párrafo avanza de lo conocido a lo nuevo.",
      "Las dislocaciones llevan el clítico correcto, y los temas con preposición no lo llevan.",
      "Uso al menos una absoluta concordada (G177) y un relativo complejo (G179).",
      "Cada «que» supera la prueba de «eso» (G180) y los pronombres siguen la norma (G181).",
      "Los «se» y la voz mantienen el tema sin calcos (G182 y G183).",
    ],
    words: [260, 340],
  },
  speaking: {
    intro: "Prepara solo palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Visita guiada por la casona",
        prompt: "Eres guía en la jornada de puertas abiertas. Durante cinco minutos lleva a un grupo por el zaguán, el patio, la sala de los azulejos y el balcón. Presenta cada espacio como tema, destaca un dato con foco o perífrasis de relativo y usa al menos una estructura de cada semana del bloque (absoluta, infinitivo o relativo, régimen o pronombre, «se» o voz).",
        prep: [
          "Para cada espacio, prepara una frase de tema dislocado y un dato destacado.",
          "Escribe en una tarjeta una estructura de cada semana (6, 7, 8 y 9) para no olvidarlas.",
          "Marca en tus notas dónde harás pausa y dónde pondrás el acento contrastivo.",
        ],
        seconds: 300,
        model: "Bienvenidos. Este zaguán, lo cruzaban cada mañana los Ferrando para ir a su tienda del centro. Pasemos al patio. Fue aquí donde, en 2007, se hundió el techo; retiradas las vigas quemadas, los vecinos lo cubrieron con plásticos durante meses. Y estos azulejos… sevillanos son, no mosaicos de fábrica, aunque eso lo descubrimos por casualidad…",
        selfCheck: [
          "Presento cada espacio como tema antes de dar la información nueva.",
          "Uso al menos un foco contrastivo y una perífrasis de relativo.",
          "Incluyo una estructura de cada semana del bloque.",
        ],
      },
      {
        title: "Reparto de tareas antes de abrir",
        prompt: "Faltan dos horas para abrir. Habla con un compañero del equipo: pregúntale qué tiene pendiente, aclara quién se encarga de cada cosa usando dislocaciones («Las llaves, las tengo yo») y negocia quién atenderá a la prensa.",
        prep: [
          "Haz una lista de cinco tareas y piensa a quién se las asignarías.",
          "Prepara dos dislocaciones con clítico y una con preposición.",
        ],
        seconds: 150,
        model: "A ver, ¿qué te falta a ti? Las sillas, las trajo Julio esta mañana. Los folletos, los tengo yo en la mochila. De la prensa, ¿quién se encarga? Yo preferiría que hablaras tú, porque conoces mejor la historia de la casa. Si quieres, yo me quedo en la puerta.",
        selfCheck: [
          "Las dislocaciones con objeto directo llevan clítico.",
          "Los temas con preposición no llevan clítico.",
          "Hago preguntas y llegamos a un acuerdo.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu crónica y la tarjeta con una estructura de cada semana del bloque.",
    cards: [
      {
        move: "Contrasta",
        task: "Di la misma información con un tema dislocado y con un foco contrastivo, y pide a tu profesor que identifique cuál es cuál solo por la melodía.",
        phrases: ["Los planos, los tiene…", "LOS PLANOS tiene…, no…"],
      },
      {
        move: "Revisa",
        task: "Lee un párrafo de tu crónica y pide a tu profesor que señale una estructura de cada semana del bloque. Si falta alguna, añádela en voz alta.",
        phrases: ["Aquí uso una absoluta…", "Este «que» lleva «de» porque…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta a tu profesor si en su variedad se oye la duplicación «Lo vi a Juan» o el tema colgante, y en qué situaciones.",
        phrases: ["¿Tú lo dirías así?", "¿Suena coloquial o normal?"],
      },
      {
        move: "Reordena",
        task: "Pide a tu profesor un párrafo con orden poco natural y reordénalo en voz alta de lo conocido a lo nuevo.",
        phrases: ["Empezaría por… porque ya se ha mencionado.", "Lo nuevo es…, así que va al final."],
      },
    ],
    bring: "Tu crónica revisada, la tarjeta del bloque y, si quieres, la grabación de la visita guiada.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase es un tema dislocado correcto?",
        options: ["Los planos, tiene la arquitecta.", "Los planos, los tiene la arquitecta.", "Los planos los tiene la arquitecta, no las fotos, los."],
        answer: 1,
        why: "Objeto directo definido antepuesto con pausa y clítico concordado.",
      },
      {
        type: "choice",
        q: "¿Qué frase expresa un foco contrastivo?",
        options: ["CEDRO usaron para el balcón, no caoba.", "El cedro, lo usaron para el balcón.", "Para el balcón, lo usaron el cedro."],
        answer: 0,
        why: "Elemento antepuesto con énfasis, sin clítico y con sujeto pospuesto.",
      },
      {
        type: "listen",
        q: "Escucha la respuesta. ¿Qué pregunta responde de forma más natural?",
        options: ["¿Qué hizo la municipalidad?", "¿Cuándo se restauró la casona?", "¿Quién restauró el balcón?"],
        answer: 2,
        why: "Lo nuevo, el agente, va al final: «unos carpinteros de Cajamarca».",
        audio: "El balcón lo restauraron unos carpinteros de Cajamarca.",
        voice: "es-PE-m",
      },
      {
        type: "gap",
        q: "A los vecinos de la cuadra, ___ enviamos una invitación para la inauguración.",
        answers: [["les"]],
        hint: "Clítico de objeto indirecto plural que retoma el tema dislocado con «a».",
        why: "Los vecinos reciben la invitación: «les».",
      },
      {
        type: "gap",
        q: "Fue en 1910 ___ los Ferrando terminaron de construir la casona.",
        answers: [["cuando"]],
        hint: "Relativo de la perífrasis que corresponde a un elemento de tiempo destacado.",
        why: "Se destaca un tiempo: «cuando».",
      },
      {
        type: "gap",
        q: "___ las vigas podridas, los carpinteros reforzaron el techo con madera nueva. [retirar]",
        answers: [["Retiradas", "retiradas"]],
        hint: "Repaso de G177: participio concordado con un sustantivo femenino plural.",
        why: "Absoluta de participio: «Retiradas las vigas».",
      },
      {
        type: "error",
        sentence: "De la polémica con el antiguo dueño, no la vamos a comentar.",
        answers: ["De la polémica con el antiguo dueño, no vamos a comentar nada.", "La polémica con el antiguo dueño, no la vamos a comentar."],
        why: "Un tema con preposición no lleva clítico; si quieres clítico, disloca el objeto directo sin preposición.",
      },
      {
        type: "error",
        sentence: "Nos dimos cuenta que el piso de la cocina estaba hueco.",
        answers: ["Nos dimos cuenta de que el piso de la cocina estaba hueco."],
        why: "Repaso de G180: «darse cuenta de eso», luego «darse cuenta de que».",
      },
      {
        type: "error",
        sentence: "Fue las vecinas quienes cuidaron el balcón durante años.",
        answers: ["Fueron las vecinas quienes cuidaron el balcón durante años."],
        why: "En la perífrasis de relativo, «ser» concuerda con el elemento destacado.",
      },
      {
        type: "order",
        words: ["La", "casona,", "la", "compró", "la", "municipalidad", "en", "2019."],
        why: "Tema dislocado con clítico y agente nuevo al final.",
      },
      {
        type: "choice",
        q: "Repaso de G179: ¿qué frase es correcta en un texto cuidado?",
        options: ["Es el patio que en él se casaron los abuelos.", "Es el patio el cual se casaron los abuelos.", "Es el patio en el cual se casaron los abuelos."],
        answer: 2,
        why: "Preposición + artículo + relativo; sin pronombre de refuerzo.",
      },
      {
        type: "open",
        prompt: "Escribe en 90–110 palabras un párrafo para la web del centro que presente la casona. Debe avanzar de lo conocido a lo nuevo e incluir un tema dislocado, una perífrasis de relativo, una absoluta, un «cuyo» y un «de que».",
        model: "La casona Ferrando, la conocen bien los vecinos de Barranco. Construida en 1910 por una familia genovesa, sobrevivió a un incendio y a doce años de abandono gracias a quienes vivían en la cuadra. Fue en 2019 cuando la municipalidad la compró, y terminada la restauración, abrió como centro cultural. Hoy ofrece talleres en un patio cuyas teatinas llenan de luz las tardes. Estamos convencidos de que es uno de los edificios más hermosos del distrito, y te invitamos a comprobarlo en nuestra próxima jornada de puertas abiertas.",
        checklist: ["Incluyo un tema dislocado con clítico y una perífrasis de relativo.", "Uso una absoluta concordada y un «cuyo» concordado.", "Uso un «de que» exigido por la palabra anterior.", "El párrafo avanza de lo conocido a lo nuevo."],
      },
    ],
  },
  complete: {
    canNow: [
      "Ordeno la información de lo conocido a lo nuevo y pospongo el sujeto cuando es la novedad.",
      "Destaco un elemento con foco contrastivo sin clítico o con una perífrasis de relativo bien concordada.",
      "Disloco un tema con el clítico adecuado, o sin clítico cuando lleva preposición, y uso «lo» neutro y marcadores de tema.",
      "Combino en un mismo texto absolutas, infinitivos, relativos complejos, régimen correcto, pronombres según la norma, valores de «se» y voz según el tema.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Mapa del bloque» y escribe un ejemplo nuevo para cada clase.",
      "Dentro de una semana, graba un minuto contando la historia de un edificio de tu ciudad con dos dislocaciones y un foco contrastivo.",
      "En la próxima clase, lee tu crónica y pide a tu profesor que marque la estructura del bloque que te resulta menos natural para practicarla.",
    ],
  },
  related: [
    { path: "/gramatica/cambios-de-orden-y-focalizacion-tema", label: "Clase: Cambios de orden y focalización: tema/rema" },
    { path: "/gramatica/anteposicion-dislocacion-y-cliticos-duplicados", label: "Clase: Anteposición, dislocación y clíticos duplicados" },
  ],
};
