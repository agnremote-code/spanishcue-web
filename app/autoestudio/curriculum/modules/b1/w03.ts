import type { Module } from "../../types";

/**
 * B1 · semana 3 · Autoestudio espejo de G090 (recomendaciones), G091
 * (valoraciones) y G092 (emociones y reacciones con que + subjuntivo).
 * Repaso autónomo con el huerto vecinal de un barrio de Valencia.
 * Audio mediante síntesis.
 */
export const b1w03: Module = {
  id: "b1-03",
  level: "b1",
  week: 3,
  kind: "core",
  title: "Consejos y reacciones en el huerto del barrio",
  subtitle: "Repaso de recomendar, aconsejar y sugerir que; de es importante que frente a es verdad que; y de me alegra que, me molesta que y ¡qué pena que…!",
  stop: { place: "Valencia", country: "España" },
  minutes: 95,
  newObjectives: [
    "b1.gram.g090",
    "b1.gram.g091",
    "b1.gram.g092",
    "b1.voc.w03-huerto-vecinal",
    "b1.pron.w03-g-suave-fuerte",
    "b1.lis.w03-asamblea-huerto",
    "b1.read.w03-carta-socios",
    "b1.wri.w03-correo-asociacion",
    "b1.spk.w03-propuesta-vecinal",
    "b1.fun.w03-aconsejar-reaccionar",
    "b1.disc.w03-queja-constructiva",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes dar consejos con recomendar, aconsejar y sugerir que, valorar situaciones con es importante que o es una pena que, distinguirlas de lo que afirmas como cierto, y reaccionar con emociones como me alegra que o estoy harto de que.",
    steps: [
      "Repasa la fórmula de los consejos: quién aconseja, a quién y qué tiene que hacer.",
      "Distingue valorar (_es importante que_ + subjuntivo) de afirmar (_es verdad que_ + indicativo).",
      "Repasa las emociones con _que_ + subjuntivo y con el mismo sujeto + infinitivo.",
      "Escucha la asamblea del huerto vecinal de Benimaclet y lee la carta de la coordinadora.",
      "Escribe un correo a la asociación de vecinos y graba una propuesta para la próxima reunión.",
    ],
  },
  theory: {
    intro: "En tus tres últimas clases usaste el subjuntivo para aconsejar, para valorar y para reaccionar con emociones. Aquí lo repasas en un huerto vecinal de Valencia, donde los socios se dan consejos, opinan sobre las normas y se alegran o se quejan de lo que pasa. Es la misma lógica de la semana pasada: una persona proyecta algo sobre la acción de otra.",
    parts: [
      {
        heading: "Aconsejar y recomendar: quién, a quién y qué",
        body: [
          "La fórmula tiene tres piezas: **quién aconseja** (el verbo principal), **a quién** (el pronombre _me, te, le, nos, os, les_) y **qué tiene que hacer esa persona** (_que_ + subjuntivo): _Te aconsejo que riegues por la mañana_.",
          "Con **recomendar, aconsejar** y **sugerir** también puedes usar el infinitivo, porque quien recibe el consejo es quien lo hace: _Te aconsejo regar por la mañana_. Sin pronombre, el infinitivo da un consejo general: _Recomiendo usar compost_. Nunca pongas _de_ delante: no _te aconsejo de regar_.",
          "Cuidado con **decir que**: si transmite información, va con indicativo (_Amparo dice que el agua está cortada_); si transmite una orden o un consejo, va con subjuntivo (_Amparo dice que cerremos la puerta_). Y para pedir algo se usa **pedir**, no _preguntar_: _Le pido que me preste la azada_.",
        ],
        table: {
          caption: "Tres maneras de dar un consejo",
          head: ["Estructura", "Ejemplo"],
          rows: [
            ["pronombre + aconsejar + que + subjuntivo", "Os aconsejo que plantéis tomates en abril."],
            ["pronombre + recomendar + infinitivo", "Te recomiendo poner una malla contra los pájaros."],
            ["recomendar + infinitivo (en general)", "Se recomienda cerrar el grifo después de regar."],
          ],
        },
        examples: [
          { es: "Le sugiero a Tomás que empiece con lechugas.", note: "_sugerir_ es irregular en presente: _sugiero_." },
          { es: "Nos piden que dejemos las herramientas limpias.", note: "Petición: _pedir que_ + subjuntivo." },
          { es: "Joan dice que la parcela siete está libre.", note: "_Decir que_ con información: indicativo." },
        ],
        mistakes: [
          { wrong: "Te recomiendo que siembras las habas en otoño.", right: "Te recomiendo que siembres las habas en otoño.", why: "El consejo todavía no es un hecho: **subjuntivo**." },
          { wrong: "Le pregunté que me dejara la regadera.", right: "Le pedí que me dejara la regadera.", why: "Para solicitar algo se usa **pedir**; _preguntar_ es para obtener información." },
        ],
      },
      {
        heading: "Valorar o afirmar: no es lo mismo",
        body: [
          "Cuando **valoras** la acción de alguien, usas una expresión de valoración + **que + subjuntivo**: _es importante, es necesario, es mejor, es normal, es una pena, es una buena idea, me parece bien_. Se usa el subjuntivo aunque la acción sea real: _Es una pena que Pilar deje el huerto_ (lo deja de verdad, pero tú lo valoras).",
          "Si no hablas de nadie en concreto, sino de algo que vale para todos, usa la misma expresión + **infinitivo**, sin _que_ y sin _de_: _Es importante regar al atardecer_.",
          "Las expresiones que **afirman** que algo es verdad no valoran: _es verdad, es cierto, es evidente, está claro, es obvio_ + **que + indicativo**. _Está claro que este año llueve poco._ Pero en negativo cambian: _No es verdad que llueva poco_ (lo verás con detalle la semana que viene).",
        ],
        table: {
          caption: "¿Valoro, generalizo o afirmo?",
          head: ["Intención", "Estructura", "Ejemplo"],
          rows: [
            ["valorar algo de alguien", "es importante / es una pena + que + subjuntivo", "Es importante que todos paguen la cuota."],
            ["valorar en general", "es importante / es mejor + infinitivo", "Es mejor sembrar en luna creciente, dicen los mayores."],
            ["afirmar algo como cierto", "es verdad / está claro + que + indicativo", "Es verdad que el compost huele un poco."],
          ],
        },
        examples: [
          { es: "Me parece bien que los niños del colegio vengan los viernes.", note: "Valoración: subjuntivo." },
          { es: "Es evidente que necesitamos otra manguera.", note: "Afirmación: indicativo." },
        ],
        mistakes: [
          { wrong: "Es necesario que llevar guantes.", right: "Es necesario llevar guantes.", why: "En general: **infinitivo**, sin _que_. Con persona concreta: _es necesario que lleves guantes_." },
          { wrong: "Está claro que el huerto sea un éxito.", right: "Está claro que el huerto es un éxito.", why: "_Está claro_ afirma: **indicativo**." },
        ],
      },
      {
        heading: "Emociones y reacciones: me alegra que, me molesta que",
        body: [
          "Los verbos de emoción funcionan como **gustar**: la persona que siente es _me, te, le, nos, os, les_, y lo que provoca la emoción es la frase con _que_ + **subjuntivo**: _Me alegra que vengas al huerto_. El verbo de emoción va en **singular** aunque después haya un plural: _Me molesta que los perros entren en las parcelas_.",
          "Si quien siente y quien hace la acción son la **misma persona**, usa el infinitivo: _Me alegra verte aquí_ (no _me alegra que yo te vea_).",
          "Otras formas: **estar contento / harto / cansado de que**, **alegrarse de que**, **tener miedo de que**, **sentir que** (para lamentar algo). Y en la conversación, la reacción más rápida: **¡Qué bien / qué pena / qué raro / qué suerte que** + subjuntivo!",
        ],
        table: {
          caption: "Formas de reaccionar",
          head: ["Forma", "Ejemplo"],
          rows: [
            ["me, te, le… + alegra / molesta / preocupa + que", "Nos preocupa que no llueva desde marzo."],
            ["estar harto / contento + de que", "Estoy harta de que nadie vacíe el cubo."],
            ["alegrarse + de que", "Me alegro de que las abejas vuelvan cada primavera."],
            ["¡Qué + palabra + que…!", "¡Qué pena que se seque el limonero!"],
          ],
        },
        examples: [
          { es: "A Joan le encanta que los vecinos le pidan consejo.", note: "Lo que le encanta es una acción de otros: subjuntivo." },
          { es: "Siento que no puedas venir a la fiesta de la cosecha.", note: "_Sentir que_ + subjuntivo expresa pena." },
        ],
        mistakes: [
          { wrong: "Me molestan que dejen las herramientas sucias.", right: "Me molesta que dejen las herramientas sucias.", why: "El verbo de emoción va en **singular**: lo que molesta es toda la frase." },
          { wrong: "Estoy harto que llegues tarde a tu turno.", right: "Estoy harto de que llegues tarde a tu turno.", why: "Con _estar harto_ va **de que**." },
        ],
        tip: "_Siento que_ + subjuntivo es pena (_Siento que te vayas_); _siento que_ + indicativo es una percepción (_Siento que algo no va bien_).",
      },
    ],
  },
  grammar: {
    intro: "Practicas cada clase por separado: consejos, valoraciones y emociones.",
    exercises: [
      {
        id: "b1-03-g1",
        type: "gap",
        title: "Consejos para el nuevo socio",
        prompt: "Completa con el presente de subjuntivo del verbo entre paréntesis.",
        items: [
          { q: "Te aconsejo que ___ las zanahorias muy juntas. (no plantar)", answers: [["no plantes"]], why: "Consejo a tú: **no plantes**." },
          { q: "Amparo nos sugiere que ___ el compost cada dos semanas. (mover)", answers: [["movamos"]], why: "_mover_ no cambia en nosotros: **movamos**." },
          { q: "Os recomiendo que ___ los turnos en la pizarra. (escribir)", answers: [["escribáis"]], why: "Vosotros: **escribáis**." },
          { q: "Le pido a Joan que me ___ cómo funciona el riego por goteo. (explicar)", answers: [["explique"]], why: "_explicar_ → _explique_: la _c_ pasa a _qu_." },
          { q: "La coordinadora dice que ___ la puerta con candado. (nosotros, cerrar)", answers: [["cerremos"]], why: "_Decir que_ con una orden: **subjuntivo**." },
        ],
      },
      {
        id: "b1-03-g2",
        type: "choice",
        title: "¿Valoras o afirmas?",
        prompt: "Elige la forma correcta.",
        items: [
          { q: "Es una pena que el ayuntamiento no nos ___ más agua.", options: ["da", "dé", "dar"], answer: 1, why: "_Es una pena_ valora: **subjuntivo**, _dé_." },
          { q: "Es verdad que las tomateras ___ muy altas este año.", options: ["están", "estén", "estar"], answer: 0, why: "_Es verdad_ afirma: **indicativo**." },
          { q: "Es mejor ___ por la tarde, cuando baja el sol.", options: ["que regamos", "que reguemos", "regar"], answer: 2, why: "Consejo general, sin persona concreta: **infinitivo**." },
          { q: "Me parece genial que los niños ___ su propia parcela.", options: ["tengan", "tienen", "tener"], answer: 0, why: "_Me parece genial_ valora: **subjuntivo**." },
          { q: "Está claro que ___ falta otra persona en el turno del sábado.", options: ["haga", "hace", "hacer"], answer: 1, why: "_Está claro_ afirma: **indicativo**." },
        ],
      },
      {
        id: "b1-03-g3",
        type: "error",
        title: "Corrige las reacciones",
        prompt: "Cada frase tiene un error. Escríbela corregida.",
        items: [
          { sentence: "Me alegra que tú estás en el huerto con nosotros.", answers: ["Me alegra que tú estés en el huerto con nosotros."], why: "Emoción sobre la acción de otro: **subjuntivo**." },
          { sentence: "Nos preocupan que las plantas no reciban sol.", answers: ["Nos preocupa que las plantas no reciban sol."], why: "El verbo de emoción va en **singular**." },
          { sentence: "Me encanta que yo trabaje la tierra los domingos.", answers: ["Me encanta trabajar la tierra los domingos."], why: "La misma persona siente y actúa: **infinitivo**." },
          { sentence: "Estamos cansados que los perros entren en las parcelas.", answers: ["Estamos cansados de que los perros entren en las parcelas."], why: "_Estar cansado_ necesita **de que**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Las palabras de un huerto vecinal: el trabajo con la tierra y la vida de una asociación. Úsalas en tu correo y en tu propuesta.",
    groups: [
      {
        title: "En la parcela",
        items: [
          { es: "la parcela", note: "trozo de tierra que cuida una persona o una familia" },
          { es: "sembrar", note: "poner las semillas en la tierra" },
          { es: "regar", note: "echar agua a las plantas (riego, riegue)" },
          { es: "las malas hierbas", note: "plantas que crecen solas y quitan espacio" },
          { es: "el compost", note: "abono que se hace con restos vegetales" },
          { es: "la cosecha", note: "lo que recoges cuando las plantas dan fruto" },
          { es: "la plaga", note: "insectos o animales que dañan las plantas" },
          { es: "la azada", note: "herramienta para mover la tierra" },
        ],
      },
      {
        title: "En la asociación",
        items: [
          { es: "la asamblea", note: "reunión de todos los socios para decidir" },
          { es: "la cuota", note: "dinero que paga cada socio" },
          { es: "el turno de riego", note: "día y hora en que te toca regar las zonas comunes" },
          { es: "la lista de espera", note: "personas que esperan una parcela libre" },
          { es: "hacer una propuesta", note: "presentar una idea para votarla" },
          { es: "estar harto de algo", note: "no aguantar más una situación" },
        ],
      },
    ],
    exercises: [
      {
        id: "b1-03-v1",
        type: "match",
        title: "¿Qué es?",
        prompt: "Relaciona cada palabra con su explicación.",
        pairs: [
          { left: "la cosecha", right: "los tomates y calabacines que recoges en verano" },
          { left: "la plaga", right: "pulgones que se comen las hojas" },
          { left: "la cuota", right: "veinte euros al año por socio" },
          { left: "el turno de riego", right: "te toca regar las zonas comunes el martes" },
          { left: "las malas hierbas", right: "plantas que nadie sembró y hay que quitar" },
          { left: "la asamblea", right: "la reunión mensual donde se vota" },
        ],
      },
      {
        id: "b1-03-v2",
        type: "gap",
        title: "Palabras en contexto",
        prompt: "Completa con una palabra de la lista.",
        bank: ["sembrar", "azada", "lista de espera", "compost"],
        items: [
          { q: "Hay doce familias en la ___ y solo dos parcelas libres.", answers: [["lista de espera"]] },
          { q: "Con los restos de la fruta hacemos ___ para la tierra.", answers: [["compost"]] },
          { q: "Para mover la tierra dura necesitas una ___.", answers: [["azada"]] },
          { q: "Octubre es buen mes para ___ habas.", answers: [["sembrar"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "G suave y g fuerte en el subjuntivo: riegue, recoja",
    explanation: [
      "Al formar el subjuntivo, algunos verbos cambian de letra para **conservar su sonido**. _Regar_ tiene una _g_ suave (como en _gato_): para mantenerla delante de _e_ se escribe **gu**: _riegue_. _Recoger_ tiene un sonido fuerte (como la _j_ de _jardín_): delante de _a_ se escribe **j**: _recoja_.",
      "Escucha primero si el sonido es suave, con la lengua relajada atrás, o fuerte, con aire que roza la garganta. Después repite. Recuerda que la voz es sintética y te sirve de apoyo para percibir, no de modelo regional.",
    ],
    table: {
      caption: "La letra cambia, el sonido se mantiene",
      head: ["Infinitivo", "Sonido", "Subjuntivo"],
      rows: [
        ["regar, pagar, llegar", "g suave", "riegue, pague, llegue"],
        ["seguir, conseguir", "g suave", "siga, consiga"],
        ["recoger, proteger, elegir", "j fuerte", "recoja, proteja, elija"],
      ],
    },
    perceive: {
      id: "b1-03-p1",
      type: "classify",
      title: "¿Suave o fuerte?",
      prompt: "Escucha cada forma y clasifícala según su sonido.",
      categories: ["g suave, como en «gato»", "sonido fuerte, como en «jardín»"],
      items: [
        { text: "riegue", cat: 0, audio: "Te pido que riegues las lechugas.", voice: "es-ES-f" },
        { text: "recoja", cat: 1, audio: "Es mejor que recojas los tomates hoy.", voice: "es-ES-m" },
        { text: "siga", cat: 0, audio: "Me alegra que sigas en el huerto.", voice: "es-ES-f" },
        { text: "elija", cat: 1, audio: "Os sugiero que elijáis semillas locales.", voice: "es-ES-m" },
        { text: "pague", cat: 0, audio: "Es necesario que cada socio pague la cuota.", voice: "es-ES-f" },
        { text: "proteja", cat: 1, audio: "Te recomiendo que protejas el limonero del frío.", voice: "es-ES-m", why: "_proteger_ → _proteja_: sonido fuerte." },
      ],
    },
    produce: [
      { text: "Te aconsejo que riegues temprano.", tip: "_rie-gues_: la _u_ no suena; la _g_ es suave.", voice: "es-ES-f" },
      { text: "Es importante que recojáis la fruta madura.", tip: "_re-co-JÁIS_: sonido fuerte y acento al final.", voice: "es-ES-m" },
      { text: "¡Qué bien que sigas con nosotros!", tip: "Entonación de exclamación: sube en _bien_ y baja al final.", voice: "es-ES-f" },
      { text: "Me molesta que nadie elija el turno del lunes.", tip: "_e-LI-ja_: la _j_ suena fuerte.", voice: "es-ES-m" },
    ],
    spelling: "Regla rápida: **g + e/i** suena fuerte (_recoge_), así que para la _g_ suave delante de _e_ se escribe **gue** (_riegue_); y para el sonido fuerte delante de _a_ se escribe **ja** (_recoja_).",
  },
  listening: {
    title: "Asamblea en el huerto",
    context: "Es la asamblea mensual del huerto vecinal de Benimaclet, en Valencia. Amparo coordina, Joan lleva años con su parcela y Tomás, argentino, acaba de entrar. Escucha primero sin leer la transcripción.",
    speakers: [
      { id: "amparo", name: "Amparo", voice: "es-ES-f", role: "coordinadora del huerto" },
      { id: "joan", name: "Joan", voice: "es-ES-m", role: "socio veterano" },
      { id: "tomas", name: "Tomás", voice: "es-AR-m", role: "socio nuevo" },
    ],
    script: [
      { speaker: "amparo", text: "Buenas tardes a todos. Antes de empezar, me alegra mucho que Tomás esté hoy con nosotros. Es su primera asamblea. Bienvenido." },
      { speaker: "tomas", text: "Gracias. La verdad es que nunca he tenido una huerta, así que acepto todos los consejos." },
      { speaker: "joan", text: "Pues el primero: te recomiendo que empieces con cosas fáciles, lechugas y rabanitos. Y te aconsejo regar muy temprano, porque en julio a mediodía el agua se evapora enseguida." },
      { speaker: "amparo", text: "Bien. Primer punto: el agua. Es verdad que este año ha llovido poco y es necesario que todos respetemos los turnos de riego. Me preocupa que algunas parcelas gasten el doble que otras." },
      { speaker: "joan", text: "A mí lo que me molesta es que la gente deje los grifos abiertos. La semana pasada encontré uno goteando toda la noche." },
      { speaker: "tomas", text: "¿Y no sería una buena idea poner un temporizador? En el barrio de mi madre, en Rosario, lo hicieron y funcionó." },
      { speaker: "amparo", text: "Me parece muy bien que lo propongas. Te pido que traigas un presupuesto para la próxima asamblea. Segundo punto: el colegio de la calle de al lado quiere que sus alumnos vengan los viernes." },
      { speaker: "joan", text: "Me encanta que vengan los críos, de verdad. Pero es importante que alguien los acompañe, porque el año pasado pisaron todas mis habas." },
      { speaker: "amparo", text: "De acuerdo: os sugiero que hagamos una lista de voluntarios. Y una última cosa: siento que Pilar deje su parcela. Se muda a Castellón. Es una pena que se vaya, pero me alegro de que la lista de espera avance." },
      { speaker: "tomas", text: "¡Qué lástima que se vaya! Yo me apunto de voluntario para los viernes." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: sin transcripción, quédate con la idea general.",
        exercise: {
          id: "b1-03-l1",
          type: "choice",
          prompt: "Responde con lo esencial de la asamblea.",
          items: [
            { q: "¿De qué temas se habla?", options: ["Del precio de las semillas y de una fiesta", "Del agua, de la visita del colegio y de una socia que se va", "De un robo de herramientas"], answer: 1, why: "Amparo presenta tres puntos: el agua, el colegio y la parcela de Pilar." },
            { q: "¿Cómo reciben a Tomás?", options: ["Con amabilidad y consejos", "Con desconfianza", "No le hacen caso"], answer: 0, why: "Amparo le da la bienvenida y Joan le da consejos." },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a los consejos, las quejas y las propuestas.",
        exercise: {
          id: "b1-03-l2",
          type: "choice",
          prompt: "Elige la respuesta correcta según el audio.",
          items: [
            { q: "¿Qué le recomienda Joan a Tomás?", options: ["Sembrar tomates y regar a mediodía", "Comprar un temporizador", "Empezar con lechugas y rabanitos"], answer: 2, why: "_Te recomiendo que empieces con cosas fáciles, lechugas y rabanitos._" },
            { q: "¿Qué le molesta a Joan?", options: ["Que la gente deje los grifos abiertos", "Que vengan los niños", "Que Amparo hable mucho"], answer: 0, why: "_Lo que me molesta es que la gente deje los grifos abiertos._" },
            { q: "¿Qué le pide Amparo a Tomás?", options: ["Que acompañe a los niños", "Que traiga un presupuesto", "Que se ocupe de la parcela de Pilar"], answer: 1, why: "_Te pido que traigas un presupuesto para la próxima asamblea._" },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en para qué sirve cada frase. Después puedes leer la transcripción.",
        exercise: {
          id: "b1-03-l3",
          type: "classify",
          prompt: "Clasifica cada fragmento según su función.",
          categories: ["Consejo o petición", "Valoración", "Emoción o reacción", "Afirmación (indicativo)"],
          items: [
            { text: "Te aconsejo regar muy temprano.", cat: 0 },
            { text: "Es necesario que todos respetemos los turnos.", cat: 1 },
            { text: "Me preocupa que algunas parcelas gasten el doble.", cat: 2 },
            { text: "Es verdad que este año ha llovido poco.", cat: 3, why: "_Es verdad_ afirma: por eso va con indicativo." },
            { text: "Te pido que traigas un presupuesto.", cat: 0 },
            { text: "¡Qué lástima que se vaya!", cat: 2 },
            { text: "Es importante que alguien los acompañe.", cat: 1 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Carta a los socios: empieza la temporada de verano",
    genre: "Carta informativa de una asociación",
    frame: "Amparo envía esta carta por correo electrónico a todos los socios del huerto vecinal de Benimaclet después de la asamblea.",
    text: [
      "Queridos socios y socias: ante todo, quiero daros las gracias por la asamblea del jueves. Me alegra mucho que cada mes vengáis más personas y que las decisiones se tomen entre todos. También me hace ilusión que se incorporen familias nuevas: este mes damos la bienvenida a Tomás y a su hija Lola, que ya han sembrado sus primeras lechugas.",
      "Empieza el verano y, como sabéis, es evidente que este año tenemos menos agua. Por eso es fundamental que respetéis los turnos de riego que aparecen en la pizarra de la entrada. Os recomiendo que reguéis antes de las nueve de la mañana o después de las ocho de la tarde. Además, os pido que reviséis los grifos al salir: es una pena que perdamos agua por un descuido.",
      "Sobre la visita del colegio, estamos encantados de que los alumnos vengan los viernes, pero es necesario que siempre haya dos voluntarios con ellos. Joan sugiere que preparemos una parcela solo para los niños, con plantas aromáticas y fresas. A mí me parece una idea excelente.",
      "Por último, siento deciros que Pilar deja su parcela a final de mes. Nos da mucha pena que se vaya, aunque nos alegramos de que la primera familia de la lista de espera pueda empezar en septiembre. Un abrazo y nos vemos entre tomateras. Amparo",
    ],
    glossary: [
      { es: "hacer ilusión", note: "producir alegría y entusiasmo" },
      { es: "un descuido", note: "un error por falta de atención" },
      { es: "las tomateras", note: "plantas de tomate" },
    ],
    tasks: [
      {
        id: "b1-03-r1",
        type: "choice",
        prompt: "Lee la carta y elige la respuesta correcta.",
        items: [
          { q: "¿Qué recomienda Amparo sobre el riego?", options: ["Regar a mediodía", "Regar a primera hora o al final de la tarde", "Regar solo los fines de semana"], answer: 1, why: "_Os recomiendo que reguéis antes de las nueve de la mañana o después de las ocho de la tarde._" },
          { q: "¿Qué condición pone para la visita del colegio?", options: ["Que haya siempre dos voluntarios", "Que los niños paguen cuota", "Que vengan solo en septiembre"], answer: 0, why: "_Es necesario que siempre haya dos voluntarios con ellos._" },
          { q: "¿Qué propone Joan?", options: ["Cerrar el huerto en agosto", "Vender la cosecha", "Una parcela para los niños"], answer: 2, why: "_Joan sugiere que preparemos una parcela solo para los niños._" },
        ],
      },
      {
        id: "b1-03-r2",
        type: "classify",
        prompt: "Clasifica estos fragmentos de la carta según lo que expresa Amparo.",
        categories: ["Alegría", "Pena o preocupación", "Consejo o petición"],
        items: [
          { text: "que cada mes vengáis más personas", cat: 0 },
          { text: "que perdamos agua por un descuido", cat: 1 },
          { text: "que reviséis los grifos al salir", cat: 2 },
          { text: "que Pilar se vaya", cat: 1 },
          { text: "que los alumnos vengan los viernes", cat: 0, why: "_Estamos encantados de que…_" },
          { text: "que reguéis antes de las nueve", cat: 2 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada fragmento para ver qué forma hay dentro y por qué.",
      items: [
        { quote: "Me alegra mucho que cada mes vengáis más personas", note: "Emoción + **que + subjuntivo**: _vengáis_ (vosotros)." },
        { quote: "es evidente que este año tenemos menos agua", note: "_Es evidente_ afirma: **indicativo**, _tenemos_." },
        { quote: "Os recomiendo que reguéis antes de las nueve", note: "Consejo con pronombre _os_ + **subjuntivo**: _regar_ → _reguéis_." },
        { quote: "estamos encantados de que los alumnos vengan los viernes", note: "_Estar encantado_ + **de que** + subjuntivo." },
      ],
    },
  },
  practice: {
    intro: "Ahora mezclas las tres clases. El último ejercicio te pide recuperar la semana pasada y una estructura de A2.",
    exercises: [
      {
        id: "b1-03-x1",
        type: "order",
        title: "Frases de la asamblea",
        prompt: "Ordena las palabras.",
        items: [
          { words: ["Os", "sugiero", "que", "pongáis", "nombres", "a", "las", "herramientas."] },
          { words: ["Es", "una", "pena", "que", "no", "haya", "más", "parcelas."] },
          { words: ["Me", "molesta", "que", "nadie", "vacíe", "el", "cubo", "del", "compost."] },
        ],
      },
      {
        id: "b1-03-x2",
        type: "context",
        title: "¿Qué dices en el huerto?",
        prompt: "Lee la situación y elige la frase más adecuada.",
        items: [
          { context: "Un vecino te cuenta que el mes que viene por fin le dan una parcela.", q: "Reaccionas:", options: ["¡Qué bien que te dan una parcela!", "¡Qué bien que te den una parcela!", "¡Qué bien darte una parcela!"], answer: 1, why: "Reacción con _¡Qué bien que…!_ + **subjuntivo**: _den_." },
          { context: "Quieres dar un consejo general en la pizarra de la entrada, sin dirigirte a nadie.", q: "Escribes:", options: ["Es mejor regar antes de las nueve.", "Es mejor que regáis antes de las nueve.", "Es mejor de regar antes de las nueve."], answer: 0, why: "Consejo general: **infinitivo**, sin _que_ ni _de_." },
          { context: "Comentas un hecho que todos pueden ver: las lechugas han crecido mucho.", q: "Dices:", options: ["Es importante que las lechugas crezcan mucho.", "Me parece bien que las lechugas crezcan.", "Está claro que las lechugas han crecido mucho."], answer: 2, why: "Afirmas un hecho evidente: _está claro que_ + **indicativo**." },
        ],
      },
      {
        id: "b1-03-x3",
        type: "classify",
        title: "¿Qué forma sigue?",
        prompt: "Clasifica cada comienzo según la forma que debe seguir.",
        categories: ["que + subjuntivo", "que + indicativo", "infinitivo (sin que)"],
        items: [
          { text: "Me sorprende que…", cat: 0 },
          { text: "Es cierto que…", cat: 1 },
          { text: "En general, es bueno…", cat: 2 },
          { text: "Te aconsejo que…", cat: 0 },
          { text: "Amparo dice (informa) que…", cat: 1 },
          { text: "Me encanta (y lo hago yo)…", cat: 2, why: "Misma persona que siente y actúa: infinitivo." },
          { text: "Siento mucho que…", cat: 0 },
        ],
      },
      {
        id: "b1-03-x4",
        type: "open",
        title: "Escribe para tu comunidad",
        prompt: "Piensa en un espacio común que conoces (un parque, un patio, una biblioteca) y escribe cada parte. Después compara con el modelo.",
        items: [
          {
            prompt: "Escribe una frase de alegría y una de molestia sobre ese espacio.",
            model: "Me alegra que el parque tenga bancos nuevos. Me molesta que algunas personas dejen basura junto a la fuente.",
            checklist: ["Uso un verbo de emoción en singular.", "Después de _que_ va el subjuntivo."],
          },
          {
            prompt: "Escribe una valoración y una afirmación sobre el mismo espacio.",
            model: "Es importante que el ayuntamiento arregle los columpios. Es verdad que el parque está más limpio que antes.",
            checklist: ["La valoración lleva subjuntivo.", "La afirmación lleva indicativo."],
          },
          {
            prompt: "Escribe dos consejos para los vecinos: uno con _que_ + subjuntivo y otro con infinitivo.",
            model: "Os recomiendo que uséis las papeleras de reciclaje. Os aconsejo venir temprano los domingos, cuando hay menos gente.",
            checklist: ["Incluyo el pronombre de a quién aconsejo.", "Las dos estructuras son correctas."],
          },
        ],
      },
      {
        id: "b1-03-retrieval",
        type: "open",
        title: "Recupera lo que ya sabías",
        prompt: "Sin mirar la teoría, recupera lo que viste la semana pasada y una estructura de A2. Escribe primero y compara después.",
        items: [
          {
            prompt: "Semana 2: escribe el presente de subjuntivo de yo de estos verbos: ser, ir, saber, haber, dar, estar. Después escribe un deseo con _ojalá_ para el huerto.",
            model: "sea, vaya, sepa, haya, dé, esté. Ojalá haya una buena cosecha este verano.",
            checklist: ["Los seis verbos especiales están bien escritos, con tilde en _dé_ y _esté_.", "Después de _ojalá_ uso subjuntivo."],
          },
          {
            prompt: "A2: escribe dos frases con _gustar_ o _encantar_ y un sustantivo plural. Después transfórmalas en reacciones con _que_ + subjuntivo.",
            model: "Me gustan las fresas. Me encantan los girasoles. Me gusta que haya fresas en el huerto. Me encanta que los girasoles crezcan tan rápido.",
            checklist: ["Con un sustantivo plural, _gustar_ va en plural.", "Con _que_ + frase, el verbo de emoción va en singular."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un correo de 140–180 palabras a la asociación de vecinos de tu barrio sobre un espacio común (un parque, un huerto, un patio, una plaza): di qué te alegra y qué te molesta, valora la situación y haz al menos tres recomendaciones.",
    context: "La asociación ha pedido a los vecinos opiniones antes de la próxima reunión. Escribe en un registro amable pero claro: quieres que tus propuestas se tomen en serio.",
    steps: [
      "Elige el espacio y anota dos cosas positivas y dos problemas.",
      "Organiza el correo: saludo y motivo, lo que te alegra, lo que te molesta, recomendaciones y despedida.",
      "Escribe una primera versión sin mirar el modelo.",
      "Revisa cada _que_: ¿emoción, valoración o consejo (subjuntivo) o afirmación (indicativo)? Corrige los verbos que no encajen.",
    ],
    useLanguage: ["Me alegra que…", "Me molesta / me preocupa que…", "Es una pena que…", "Es verdad que…", "Os recomiendo que… / Sugiero que…"],
    model: [
      "Estimados miembros de la asociación: os escribo para dar mi opinión sobre el parque de la calle Murta, antes de la reunión del jueves. Ante todo, me alegra mucho que ahora haya árboles nuevos y que los niños tengan por fin un tobogán seguro. Es verdad que el parque está más bonito que hace un año.",
      "Sin embargo, me preocupa que por la noche no haya luz en la zona de los bancos, y me molesta que algunos dueños de perros no recojan los excrementos. Además, los fines de semana las papeleras se llenan enseguida. Es una pena que un espacio tan agradable se estropee por pocas personas.",
      "Por eso os sugiero que pidamos al ayuntamiento dos farolas más y que pongamos carteles en las entradas. También recomiendo organizar una jornada de limpieza al mes con los vecinos. Es importante que todos nos sintamos responsables del parque. Un saludo cordial, Marta Ferrer (portal 14)",
    ],
    checklist: [
      "Expreso al menos una alegría y una molestia con _que_ + subjuntivo.",
      "Valoro la situación y distingo valoración (subjuntivo) de afirmación (indicativo).",
      "Hago al menos tres recomendaciones con estructuras distintas.",
      "El verbo de emoción va en singular aunque después haya un plural.",
      "El correo tiene saludo, motivo, desarrollo y despedida formales.",
    ],
    words: [140, 180],
  },
  speaking: {
    intro: "Habla en voz alta y grábate en tu dispositivo. Prepara notas, no un texto completo; el curso no puntúa tu pronunciación ni sube tu audio.",
    tasks: [
      {
        title: "Tu propuesta en la reunión de vecinos",
        prompt: "Durante dos minutos, presenta en la reunión de vecinos una propuesta para mejorar un espacio común. Di qué te alegra y qué te preocupa, valora la situación y termina con tres recomendaciones concretas.",
        prep: ["Abre con una alegría: _Me alegra que…_", "Un problema: _Me preocupa / me molesta que…_", "Una valoración y una afirmación: _Es una pena que… / Es verdad que…_", "Tres recomendaciones: _Os propongo que… / Sugiero…_"],
        seconds: 120,
        model: "Buenas tardes. Me alegra que hoy estemos tantos vecinos. Quiero hablar del patio interior. Es verdad que lo usamos poco, y me parece una pena que esté lleno de bicicletas viejas. Me preocupa que los niños no tengan un sitio seguro para jugar. Por eso os propongo que retiremos las bicicletas abandonadas, que pongamos unas jardineras y que hagamos un turno de limpieza al mes.",
        selfCheck: ["Uso emociones, valoraciones y consejos con subjuntivo.", "Uso al menos una afirmación con indicativo.", "Mis recomendaciones son concretas."],
      },
      {
        title: "Responde a un vecino que se queja",
        prompt: "Un vecino responde a tu propuesta con una queja: dice que no tiene tiempo y que no le parece necesario. Pregúntale qué le preocupa, responde a su objeción, aclara tu idea y negocia una solución intermedia. Imagina sus respuestas en voz alta.",
        prep: ["Pregunta: _¿Qué es lo que te preocupa exactamente?_", "Responde: _Entiendo que no tengas tiempo, pero…_", "Negocia: _¿Te parece bien que…?_"],
        seconds: 90,
        model: "¿Qué es lo que te preocupa exactamente? Entiendo que no tengas tiempo, pero no es necesario que vengas todos los meses. ¿Te parece bien que te apuntemos solo para la jornada de otoño?",
        selfCheck: ["Hago una pregunta antes de contestar.", "Reacciono con comprensión.", "Propongo una alternativa concreta."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que has repasado y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Aconseja", task: "Tu profesor te cuenta un pequeño problema; dale dos consejos con estructuras distintas.", phrases: ["Te aconsejo que…", "Te recomiendo…"] },
      { move: "Reacciona", task: "Escucha tres noticias que te cuente tu profesor y reacciona a cada una con una emoción distinta.", phrases: ["¡Qué bien que…!", "Me sorprende que…", "Siento que…"] },
      { move: "Valora", task: "Lleva una norma de tu casa, tu trabajo o tu barrio y valórala; tu profesor te dirá si afirmas o valoras.", phrases: ["Me parece bien que…", "Es verdad que…"] },
    ],
    bring: "Tu correo a la asociación revisado y una lista de cinco reacciones con _¡Qué…que!_ para practicar en clase.",
  },
  quiz: {
    items: [
      { type: "choice", q: "La coordinadora nos pide que ___ el candado al salir.", options: ["cerramos", "cerrar", "cerremos"], answer: 2, why: "_Pedir que_ + subjuntivo." },
      { type: "listen", q: "Escucha la reacción de Joan: ¿qué forma oyes?", audio: "Me encanta que vengan los niños.", voice: "es-ES-m", options: ["vienen", "vengan", "venir"], answer: 1, why: "_Me encanta que_ + subjuntivo: _vengan_." },
      { type: "gap", q: "Es importante que cada socio ___ sus herramientas. (limpiar)", answers: [["limpie"]], why: "Valoración con persona concreta: **subjuntivo**." },
      { type: "gap", q: "Es evidente que el huerto ___ más agua en verano. (necesitar)", answers: [["necesita"]], why: "_Es evidente_ afirma: **indicativo**." },
      { type: "gap", q: "Me alegro de ___ con vosotros en este proyecto. (estar)", answers: [["estar"]], why: "Yo me alegro y yo estoy: **infinitivo**." },
      { type: "error", sentence: "Te aconsejo de sembrar las fresas en primavera.", answers: ["Te aconsejo sembrar las fresas en primavera.", "Te aconsejo que siembres las fresas en primavera."], why: "Sin _de_: _te aconsejo sembrar_ o _te aconsejo que siembres_." },
      { type: "error", sentence: "Nos molestan que la puerta esté siempre abierta.", answers: ["Nos molesta que la puerta esté siempre abierta."], why: "El verbo de emoción va en **singular**." },
      { type: "order", words: ["¡Qué", "pena", "que", "Pilar", "deje", "su", "parcela!"] },
      {
        type: "open",
        prompt: "Reformulación. Texto de partida: «Consejo de Joan para Tomás: regar por la mañana y no pisar las parcelas de los demás.» Escribe una frase que empiece por «Joan le aconseja a Tomás que…».",
        model: "Joan le aconseja a Tomás que riegue por la mañana y que no pise las parcelas de los demás.",
        checklist: ["Uso _que_ + subjuntivo en los dos consejos.", "Escribo bien _riegue_, con _gu_.", "Conservo toda la información; acepto otra formulación equivalente."],
      },
      {
        type: "open",
        prompt: "Escribe tres frases sobre tu barrio: una emoción, una valoración y un consejo para los vecinos.",
        model: "Me encanta que haya un mercado los sábados. Es una pena que cierren tantas tiendas pequeñas. Os recomiendo que compréis en el mercado.",
        checklist: ["Una emoción con _que_ + subjuntivo.", "Una valoración con _que_ + subjuntivo.", "Un consejo con pronombre y _que_ + subjuntivo."],
      },
    ],
  },
  complete: {
    canNow: [
      "Dar consejos y pedir cosas con recomendar, aconsejar, sugerir y pedir que + subjuntivo, o con infinitivo.",
      "Valorar acciones con es importante que, es una pena que o me parece bien que, y generalizar con infinitivo.",
      "Distinguir valoraciones (subjuntivo) de afirmaciones como es verdad que o está claro que (indicativo).",
      "Reaccionar con emociones: me alegra que, me molesta que, estoy harto de que, ¡qué pena que…!",
    ],
    review: [
      "Pronombre + aconsejar + que + subjuntivo; o pronombre + aconsejar + infinitivo.",
      "Valoro → subjuntivo; afirmo → indicativo; en general → infinitivo.",
      "Me molesta que… (singular) · misma persona → me alegra verte.",
    ],
  },
  related: [
    { path: "/gramatica/recomendaciones-sugerir-que-aconsejar-que", label: "Clase: Recomendaciones: sugerir que, aconsejar que" },
    { path: "/gramatica/valoraciones-es-importante-que-es-bueno", label: "Clase: Valoraciones: es importante que, es bueno que" },
    { path: "/gramatica/emociones-y-reacciones-con-que-subjuntivo", label: "Clase: Emociones y reacciones con que + subjuntivo" },
  ],
};
