import type { Module } from "../../types";

/**
 * B1 · semana 2 · Autoestudio espejo de G088 (presente de subjuntivo:
 * formación y usos esenciales) y G089 (deseos: querer que, esperar que,
 * ojalá). Repaso autónomo con la apertura de una librería-café en Bogotá.
 * Audio mediante síntesis.
 */
export const b1w02: Module = {
  id: "b1-02",
  level: "b1",
  week: 2,
  kind: "core",
  title: "Ojalá salga bien: deseos para un comienzo",
  subtitle: "Repaso de las formas del presente de subjuntivo y de cómo expresar deseos con querer que, esperar que, ojalá y ¡que…!",
  stop: { place: "Bogotá", country: "Colombia" },
  minutes: 95,
  newObjectives: [
    "b1.gram.g088",
    "b1.gram.g089",
    "b1.voc.w02-abrir-negocio",
    "b1.pron.w02-vocal-modo",
    "b1.lis.w02-preparar-apertura",
    "b1.read.w02-noticia-barrio",
    "b1.wri.w02-mensaje-deseos",
    "b1.spk.w02-brindis",
    "b1.fun.w02-expresar-deseos",
    "b1.disc.w02-mensaje-ocasion",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes formar el presente de subjuntivo de verbos regulares e irregulares y expresar deseos para ti y para otras personas con querer, esperar, desear, ojalá y ¡que…!",
    steps: [
      "Repasa para qué sirve el subjuntivo: presentar algo que todavía no es un hecho.",
      "Repasa las formas: la vocal que cambia, la raíz de _yo_ y los seis verbos especiales.",
      "Decide entre infinitivo y _que_ + subjuntivo con querer, esperar y desear.",
      "Escucha a Camila y a su hermano preparar la apertura de su librería-café en Bogotá y lee la noticia del barrio.",
      "Escribe un mensaje de buenos deseos y graba un brindis.",
    ],
  },
  theory: {
    intro: "En tus dos últimas clases conociste el presente de subjuntivo y lo usaste para expresar deseos. Aquí lo repasas con otra situación: Camila abre una librería con café en el barrio de Chapinero, en Bogotá, y todo el mundo le desea suerte. Primero, la idea; después, las formas; al final, los deseos.",
    parts: [
      {
        heading: "Hecho o todavía no: la idea del subjuntivo",
        body: [
          "El **indicativo** presenta información como un hecho: algo que es, que pasa o que sabes. El **subjuntivo** presenta una acción que todavía **no es un hecho**: algo que deseas, que pides o que buscas para otra persona.",
          "Compara: _Sé que abres el sábado_ (lo sé: es un hecho, indicativo) y _Espero que abras el sábado_ (lo deseo: no es seguro, subjuntivo). La acción es la misma; cambia cómo la miras.",
          "Por eso el subjuntivo casi siempre aparece después de un verbo de deseo, de petición o de finalidad, y casi siempre detrás de **que**. Con **para que** expresas el objetivo para otra persona: _Te dejo la llave para que abras tú_.",
        ],
        examples: [
          { es: "Sé que el local está en la calle 57.", note: "Información que se presenta como hecho: indicativo." },
          { es: "Quiero que el local esté listo el viernes.", note: "Deseo sobre algo que todavía no es real: subjuntivo." },
          { es: "Pongo música suave para que la gente se quede.", note: "Objetivo para otras personas: _para que_ + subjuntivo." },
        ],
        mistakes: [
          { wrong: "Te doy mi número para que me llamas.", right: "Te doy mi número para que me llames.", why: "_Para que_ siempre va con **subjuntivo**." },
        ],
      },
      {
        heading: "Formas regulares: la vocal cambia de equipo",
        body: [
          "Parte de la forma **yo** del presente de indicativo, quita la **-o** y cambia de vocal: los verbos en **-ar** pasan a **e**; los verbos en **-er** e **-ir** pasan a **a**. Es como si cada grupo usara la vocal del otro.",
          "La forma de **yo** y la de **él, ella, usted** son iguales: _que yo hable, que ella hable_. Por el contexto sabes quién es.",
        ],
        table: {
          caption: "Presente de subjuntivo regular",
          head: ["Persona", "hablar", "comer", "vivir"],
          rows: [
            ["yo", "hable", "coma", "viva"],
            ["tú", "hables", "comas", "vivas"],
            ["él, ella, usted", "hable", "coma", "viva"],
            ["nosotros, nosotras", "hablemos", "comamos", "vivamos"],
            ["vosotros, vosotras", "habléis", "comáis", "viváis"],
            ["ellos, ellas, ustedes", "hablen", "coman", "vivan"],
          ],
        },
        examples: [
          { es: "Ojalá vendamos todos los libros usados.", note: "_vender_ → _vend-o_ → _vend-a-mos_." },
          { es: "Espero que los clientes lean sin prisa.", note: "_leer_ → _le-o_ → _le-an_." },
        ],
        mistakes: [
          { wrong: "Espero que tú trabajas menos este año.", right: "Espero que tú trabajes menos este año.", why: "Después de _espero que_ con otro sujeto: subjuntivo. _-ar_ → **e**: _trabajes_." },
        ],
        tip: "Si ya sabes el imperativo negativo (_no hables, no comas_), ya conoces el subjuntivo de tú: son las mismas formas.",
      },
      {
        heading: "Irregulares: la raíz de yo y los seis especiales",
        body: [
          "Muchos irregulares **conservan la irregularidad de yo** en todas las personas: _tengo_ → _tenga, tengas, tengamos_; _hago_ → _haga_; _conozco_ → _conozca_; _salgo_ → _salga_; _digo_ → _diga_; _pongo_ → _ponga_.",
          "Los verbos con cambio de vocal (**e → ie**, **o → ue**) cambian en todas las personas menos en nosotros y vosotros: _quiera, quieras… queramos_; _pueda… podamos_. Los verbos en -ir como **pedir** cierran la vocal también en nosotros: _pida, pidamos_; **dormir** da _duerma, durmamos_.",
          "Seis verbos no siguen la regla de yo y hay que memorizarlos: **ser** (sea), **estar** (esté), **ir** (vaya), **haber** (haya), **saber** (sepa) y **dar** (dé). Y cuidado con la ortografía: _buscar_ → _busque_, _llegar_ → _llegue_, _empezar_ → _empiece_.",
        ],
        table: {
          caption: "Del presente (yo) al subjuntivo",
          head: ["Infinitivo", "Presente (yo)", "Subjuntivo (yo, él, ella)", "Nosotros"],
          rows: [
            ["tener", "tengo", "tenga", "tengamos"],
            ["conocer", "conozco", "conozca", "conozcamos"],
            ["volver", "vuelvo", "vuelva", "volvamos"],
            ["pedir", "pido", "pida", "pidamos"],
            ["ser", "soy", "sea", "seamos"],
            ["ir", "voy", "vaya", "vayamos"],
            ["saber", "sé", "sepa", "sepamos"],
          ],
        },
        examples: [
          { es: "Quiero que conozcas a mi socia.", note: "_conozco_ → _conozca_ → _conozcas_." },
          { es: "Ojalá haya sitio para todos.", note: "_haber_ es uno de los seis especiales: _haya_." },
        ],
        mistakes: [
          { wrong: "Ojalá el sábado no llovea.", right: "Ojalá el sábado no llueva.", why: "_llover_ → _llueve_ → **llueva**: -er pasa a **a** y se mantiene _ue_." },
          { wrong: "Espero que esta es la última caja.", right: "Espero que esta sea la última caja.", why: "_Ser_ es irregular: **sea**." },
        ],
      },
      {
        heading: "Querer, esperar, desear: ¿una persona o dos?",
        body: [
          "Mira quién desea y quién hace la acción. Si es **la misma persona**, usa el **infinitivo**: _Quiero abrir a las diez_ (yo quiero, yo abro). Si es **otra persona**, usa **que + subjuntivo**: _Quiero que abras tú_ (yo quiero, tú abres).",
          "**Esperar** funciona igual: _Espero llegar a tiempo_ / _Espero que llegues a tiempo_. **Desear** es más formal o más intenso: aparece en tarjetas, discursos y mensajes escritos.",
          "Después de **espero que** no va el futuro: _Espero que te guste_, no _espero que te gustará_.",
        ],
        table: {
          caption: "Una persona o dos",
          head: ["Mismo sujeto: infinitivo", "Otro sujeto: que + subjuntivo"],
          rows: [
            ["Quiero terminar las estanterías.", "Quiero que termines las estanterías."],
            ["Esperamos vender cien libros.", "Esperamos que los vecinos compren libros."],
            ["Deseo hacer un buen discurso.", "Deseo que todos se sientan bienvenidos."],
          ],
        },
        mistakes: [
          { wrong: "Quiero que yo aprenda a hacer café de filtro.", right: "Quiero aprender a hacer café de filtro.", why: "La misma persona quiere y aprende: **infinitivo**." },
          { wrong: "Espero que el discurso te gustará.", right: "Espero que el discurso te guste.", why: "Después de _espero que_ va el **subjuntivo**, no el futuro." },
        ],
      },
      {
        heading: "Ojalá y ¡que…!: deseos cortos",
        body: [
          "**Ojalá** no es un verbo: no cambia y siempre va con **subjuntivo**, también cuando el deseo es para ti: _Ojalá aprenda rápido_. Puedes decir _ojalá_ o _ojalá que_. Sola, sirve como respuesta: _—¿Vendrá mucha gente? —¡Ojalá!_",
          "Para despedirte o felicitar, el español usa frases cortas con **¡Que + subjuntivo!**: son la segunda mitad de _espero que…_ o _deseo que…_. Las más frecuentes: _¡Que te vaya bien!, ¡Que tengas suerte!, ¡Que lo pases bien!, ¡Que te mejores!, ¡Que disfrutes!_",
        ],
        examples: [
          { es: "Ojalá que el letrero llegue antes del sábado.", note: "Deseo sobre una cosa: _ojalá que_ + subjuntivo." },
          { es: "¡Que tengas un primer día tranquilo!", note: "Deseo de despedida: _¡Que_ + subjuntivo!" },
          { es: "—¿Crees que te darán el préstamo? —¡Ojalá!", note: "_Ojalá_ como respuesta corta." },
        ],
        mistakes: [
          { wrong: "Ojalá encontrar un buen local.", right: "Ojalá encuentre un buen local.", why: "_Ojalá_ nunca va con infinitivo." },
          { wrong: "¡Que pasas un buen fin de semana!", right: "¡Que pases un buen fin de semana!", why: "Los deseos con _¡Que…!_ van en **subjuntivo**." },
        ],
        tip: "_Ojalá_ viene del árabe andalusí y significaba algo como «si Dios quiere». Hoy lo usan creyentes y no creyentes por igual.",
      },
    ],
  },
  grammar: {
    intro: "Primero practicas las formas, regulares e irregulares; después eliges entre infinitivo y subjuntivo en deseos.",
    exercises: [
      {
        id: "b1-02-g1",
        type: "gap",
        title: "Forma el subjuntivo",
        prompt: "Completa con el presente de subjuntivo del verbo entre paréntesis.",
        items: [
          { q: "Espero que mis primos ___ a la inauguración. (venir)", answers: [["vengan"]], why: "_vengo_ → **vengan**." },
          { q: "Quiero que tú ___ la caja registradora. (abrir)", answers: [["abras"]], why: "-ir pasa a **a**: _abras_." },
          { q: "Ojalá ___ buen tiempo el sábado. (hacer)", answers: [["haga"]], why: "_hago_ → **haga**." },
          { q: "Mamá quiere que nosotros ___ sus galletas en la vitrina. (poner)", answers: [["pongamos"]], why: "_pongo_ → **pongamos**." },
          { q: "Espero que la gente ___ que puede quedarse sin pedir nada. (saber)", answers: [["sepa"]], why: "_Saber_ es especial: **sepa**." },
          { q: "Ojalá que nosotros ___ dormir un poco antes de abrir. (poder)", answers: [["podamos"]], why: "En nosotros no hay cambio de vocal: **podamos**." },
        ],
      },
      {
        id: "b1-02-g2",
        type: "choice",
        title: "¿Infinitivo, indicativo o subjuntivo?",
        prompt: "Elige la forma correcta según quién desea y quién hace la acción.",
        items: [
          { q: "Camila espera ___ todas las estanterías esta noche.", options: ["que termine", "terminar", "termina"], answer: 1, why: "Camila espera y Camila termina: mismo sujeto, **infinitivo**." },
          { q: "Andrés quiere que su hermana ___ tranquila.", options: ["está", "estar", "esté"], answer: 2, why: "Andrés quiere, ella está: otro sujeto, **subjuntivo**. _Estar_ → _esté_, con tilde." },
          { q: "Sé que el café ___ de una finca de Huila.", options: ["viene", "venga", "venir"], answer: 0, why: "_Sé que_ presenta un hecho: **indicativo**." },
          { q: "Los vecinos desean que el negocio ___ muchos años.", options: ["dure", "dura", "durar"], answer: 0, why: "Ellos desean, el negocio dura: **subjuntivo**." },
          { q: "Ojalá ___ suficientes tazas para todos.", options: ["hay", "haber", "haya"], answer: 2, why: "_Ojalá_ siempre con subjuntivo: **haya**." },
        ],
      },
      {
        id: "b1-02-g3",
        type: "error",
        title: "Corrige los mensajes",
        prompt: "Cada mensaje del grupo de amigos tiene un error. Escríbelo corregido.",
        items: [
          { sentence: "Ojalá vendes muchos libros el primer día.", answers: ["Ojalá vendas muchos libros el primer día."], why: "_Ojalá_ + subjuntivo: _vender_ → **vendas**." },
          { sentence: "Quiero que me guardas una mesa junto a la ventana.", answers: ["Quiero que me guardes una mesa junto a la ventana."], why: "Yo quiero, tú guardas: **subjuntivo**, _-ar_ → _e_." },
          { sentence: "Espero que vamos todos juntos a la apertura.", answers: ["Espero que vayamos todos juntos a la apertura."], why: "_Ir_ es especial: **vayamos**." },
          { sentence: "¡Que te va muy bien con el negocio!", answers: ["¡Que te vaya muy bien con el negocio!"], why: "Deseo con _¡Que…!_: **vaya**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Las palabras para abrir un negocio pequeño y para desear suerte en un comienzo. Algunas son muy colombianas; la nota lo indica.",
    groups: [
      {
        title: "Abrir un negocio",
        items: [
          { es: "el local", note: "espacio comercial que alquilas o compras" },
          { es: "la inauguración", note: "el día en que algo se abre por primera vez al público" },
          { es: "el letrero", note: "cartel con el nombre del negocio" },
          { es: "la vitrina", note: "mueble de cristal donde se muestran productos" },
          { es: "el socio / la socia", note: "persona que comparte un negocio contigo" },
          { es: "sacar adelante un proyecto", note: "conseguir que funcione a pesar de las dificultades" },
        ],
      },
      {
        title: "En un café de Bogotá",
        items: [
          { es: "un tinto", note: "en Colombia, un café negro pequeño" },
          { es: "un aguacero", note: "lluvia fuerte y repentina" },
          { es: "la carrera / la calle", note: "en Bogotá, las vías van numeradas: las carreras y las calles se cruzan" },
          { es: "chévere", note: "muy bueno, agradable (Colombia, Venezuela)" },
        ],
      },
      {
        title: "Desear suerte",
        items: [
          { es: "¡Que te vaya bien!", note: "deseo general al despedirse" },
          { es: "¡Mucha suerte!", note: "deseo antes de algo difícil" },
          { es: "¡Que tengas éxito!", note: "deseo para un proyecto o un trabajo" },
          { es: "¡Que lo disfrutes!", note: "deseo para algo agradable" },
          { es: "brindar por algo", note: "levantar la copa o la taza por un deseo" },
        ],
      },
    ],
    exercises: [
      {
        id: "b1-02-v1",
        type: "match",
        title: "¿Qué es?",
        prompt: "Relaciona cada palabra con su definición.",
        pairs: [
          { left: "la vitrina", right: "donde se ven los pasteles detrás del cristal" },
          { left: "el letrero", right: "lo que lees encima de la puerta: el nombre del sitio" },
          { left: "un aguacero", right: "lluvia fuerte que empieza de repente" },
          { left: "un tinto", right: "café negro pequeño en Colombia" },
          { left: "la socia", right: "mujer que comparte el negocio contigo" },
          { left: "brindar", right: "levantar la taza por un deseo" },
        ],
      },
      {
        id: "b1-02-v2",
        type: "context",
        title: "¿Qué deseo encaja?",
        prompt: "Lee la situación y elige el deseo más adecuado.",
        items: [
          { context: "Tu vecina se va mañana de vacaciones a Cartagena.", q: "Le dices:", options: ["¡Que te mejores!", "¡Que lo pases muy bien!", "¡Que tengas éxito!"], answer: 1, why: "Para unas vacaciones: **¡Que lo pases bien!**" },
          { context: "Un compañero tiene gripe y se va a casa.", q: "Le dices:", options: ["¡Que te mejores!", "¡Que lo disfrutes!", "¡Mucha suerte con el letrero!"], answer: 0, why: "A alguien enfermo: **¡Que te mejores!**" },
          { context: "Tu amiga abre su negocio la semana que viene.", q: "Le escribes:", options: ["¡Que te vaya mal!", "¡Que tengas un buen viaje!", "¡Que tengas mucho éxito con el local!"], answer: 2, why: "Para un proyecto nuevo: **¡Que tengas éxito!**" },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La vocal final que cambia el modo: habla / hable",
    explanation: [
      "En el subjuntivo, muchas veces una sola vocal decide el significado: _Sé que Camila **habla** con los vecinos_ (un hecho) y _Quiero que Camila **hable** con los vecinos_ (un deseo). Si no pronuncias claro la última vocal, tu oyente no sabe qué quieres decir.",
      "Las vocales españolas son cortas y tensas: no las alargues ni las conviertas en un sonido neutro al final de la palabra. Di **-e** con la boca algo abierta y los labios estirados; **-a**, con la boca bien abierta.",
      "Cuidado también con **esté** (es-TÉ, subjuntivo de estar) y **este** (ES-te, demostrativo). La tilde marca el acento y cambia la palabra.",
    ],
    table: {
      caption: "Indicativo frente a subjuntivo",
      head: ["Indicativo (hecho)", "Subjuntivo (deseo)"],
      rows: [
        ["trabaja", "trabaje"],
        ["come", "coma"],
        ["abre", "abra"],
        ["lleva", "lleve"],
      ],
    },
    perceive: {
      id: "b1-02-p1",
      type: "listen",
      title: "¿Hecho o deseo?",
      prompt: "Escucha la frase y elige la forma que oyes al final.",
      items: [
        { q: "¿Qué forma oyes?", audio: "Quiero que lleve el pastel.", voice: "es-CO-f", options: ["lleva", "lleve"], answer: 1, why: "_que lleve_: subjuntivo, deseo." },
        { q: "¿Qué forma oyes?", audio: "Sé que abre a las diez.", voice: "es-CO-m", options: ["abre", "abra"], answer: 0, why: "_Sé que abre_: indicativo, un hecho." },
        { q: "¿Qué forma oyes?", audio: "Ojalá que no coma tanto azúcar.", voice: "es-CO-f", options: ["come", "coma"], answer: 1, why: "_Ojalá que no coma_: subjuntivo." },
        { q: "¿Qué palabra oyes?", audio: "Espero que esté abierto.", voice: "es-CO-m", options: ["este", "esté"], answer: 1, why: "Acento en la última sílaba: _es-TÉ_." },
        { q: "¿Qué forma oyes?", audio: "Veo que trabaja mucho.", voice: "es-CO-f", options: ["trabaja", "trabaje"], answer: 0, why: "_Veo que_ presenta un hecho: _trabaja_." },
      ],
    },
    produce: [
      { text: "Sé que vendes café. Quiero que vendas libros.", tip: "Marca la diferencia entre _vendes_ y _vendas_.", voice: "es-CO-f" },
      { text: "Ojalá que esté todo listo.", tip: "_es-TÉ_, con fuerza en la última sílaba.", voice: "es-CO-m" },
      { text: "¡Que te vaya muy bien!", tip: "Entonación de deseo: sube en _vaya_ y baja al final.", voice: "es-CO-f" },
      { text: "Espero que lleguen temprano.", tip: "_lleguen_: la _u_ no suena; se pronuncia _lle-guen_ como en _guerra_.", voice: "es-CO-m" },
    ],
    spelling: "Algunos verbos cambian de letra para conservar el sonido: _buscar_ → **busque**, _llegar_ → **llegue**, _empezar_ → **empiece**, _coger_ → **coja**.",
  },
  listening: {
    title: "Tres días antes de abrir",
    context: "Camila va a abrir una librería-café en Chapinero, Bogotá. Su hermano Andrés pasa por el local para ayudarla. Hablan de lo que falta por hacer y de lo que esperan del sábado. Escucha primero sin leer la transcripción.",
    speakers: [
      { id: "camila", name: "Camila", voice: "es-CO-f", role: "dueña de la librería-café" },
      { id: "andres", name: "Andrés", voice: "es-CO-m", role: "hermano de Camila" },
    ],
    script: [
      { speaker: "camila", text: "Andrés, ¿tienes un momento? El sábado abrimos y todavía falta mucho. Quiero que me ayudes con la lista de cosas pendientes." },
      { speaker: "andres", text: "Claro, para eso vine. A ver, ¿qué quieres que haga primero?" },
      { speaker: "camila", text: "Necesito que recojas las tazas en la tienda de la carrera séptima antes de las cinco. Y quiero que llames al señor de los letreros: espero que ya tenga listo el nuestro." },
      { speaker: "andres", text: "Listo. ¿Y tú qué vas a hacer mientras tanto?" },
      { speaker: "camila", text: "Yo quiero terminar de ordenar los libros por temas. Espero acabar esta noche, pero no sé. Ah, y mamá quiere que pongamos sus galletas de avena en la vitrina." },
      { speaker: "andres", text: "Ojalá no se acaben en una hora, como en el cumpleaños de la tía." },
      { speaker: "camila", text: "¡Ojalá se acaben! Significa que a la gente le gustan. Lo que me preocupa es el clima. Ya sabes cómo es Bogotá: sol a las diez y aguacero a las tres." },
      { speaker: "andres", text: "Pues ojalá haga sol el sábado. Si no, nadie va a querer sentarse en la terraza." },
      { speaker: "camila", text: "Por eso quiero que pidamos unas sombrillas grandes. Sirven para el sol y para la lluvia." },
      { speaker: "andres", text: "Buena idea. Oye, ¿y el discurso? Los vecinos esperan que digas unas palabras." },
      { speaker: "camila", text: "Ay, no me lo recuerdes. Espero no ponerme nerviosa. Solo quiero que la gente se sienta como en casa y que vuelva." },
      { speaker: "andres", text: "Vas a estar bien. Si te pones nerviosa, me miras y yo levanto una taza. ¡Que salga todo perfecto, hermanita!" },
      { speaker: "camila", text: "Gracias. Ojalá tengas razón." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: sin transcripción, quédate con la idea general.",
        exercise: {
          id: "b1-02-l1",
          type: "choice",
          prompt: "Responde con lo esencial.",
          items: [
            { q: "¿Para qué habla Camila con Andrés?", options: ["Para pedirle dinero", "Para repartir las tareas antes de abrir", "Para cancelar la inauguración"], answer: 1, why: "Camila dice: _Quiero que me ayudes con la lista de cosas pendientes_." },
            { q: "¿Cómo se siente Camila?", options: ["Ilusionada, pero preocupada por algunas cosas", "Aburrida y sin ganas", "Totalmente tranquila"], answer: 0, why: "Le preocupan el clima y el discurso, pero quiere que todo salga bien." },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a quién tiene que hacer cada cosa.",
        exercise: {
          id: "b1-02-l2",
          type: "choice",
          prompt: "Elige la respuesta correcta según el audio.",
          items: [
            { q: "¿Qué tiene que hacer Andrés antes de las cinco?", options: ["Llamar a su madre", "Ordenar los libros", "Recoger las tazas"], answer: 2, why: "_Necesito que recojas las tazas… antes de las cinco._" },
            { q: "¿Qué quiere la madre?", options: ["Que pongan sus galletas en la vitrina", "Que abran el domingo", "Que no haya terraza"], answer: 0, why: "_Mamá quiere que pongamos sus galletas de avena en la vitrina._" },
            { q: "¿Para qué quiere Camila las sombrillas?", options: ["Para decorar el letrero", "Para el sol y para la lluvia", "Para regalarlas a los vecinos"], answer: 1, why: "_Sirven para el sol y para la lluvia._" },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en quién desea y quién hace la acción. Después puedes leer la transcripción.",
        exercise: {
          id: "b1-02-l3",
          type: "classify",
          prompt: "Clasifica cada deseo del audio.",
          categories: ["La misma persona: infinitivo", "Otra persona o cosa: que + subjuntivo", "Ojalá o ¡que…! + subjuntivo"],
          items: [
            { text: "Espero acabar esta noche.", cat: 0 },
            { text: "Quiero que me ayudes con la lista.", cat: 1 },
            { text: "Ojalá haga sol el sábado.", cat: 2 },
            { text: "Espero no ponerme nerviosa.", cat: 0, why: "Camila espera y Camila se pone nerviosa: mismo sujeto." },
            { text: "Los vecinos esperan que digas unas palabras.", cat: 1 },
            { text: "¡Que salga todo perfecto!", cat: 2 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Abre La Taza de Papel, una librería con café hecha a mano",
    genre: "Noticia de un boletín de barrio",
    frame: "Texto publicado en «Chapinero al día», el boletín digital que reciben los vecinos del barrio.",
    text: [
      "El próximo sábado abre sus puertas en la calle 57 La Taza de Papel, una librería con café que Camila Rojas, ingeniera de 34 años, ha preparado durante casi dos años. «Quiero que la gente venga a leer sin prisa y que nadie le diga que tiene que consumir algo para quedarse», explica mientras coloca novelas en una estantería de madera reciclada.",
      "El local era antes una vieja papelería. Camila conservó el mostrador original y decoró las paredes con fotos antiguas del barrio que le prestaron los vecinos. «No espero hacerme rica», dice entre risas. «Espero que el negocio sea sostenible y que podamos organizar talleres de escritura para niños los sábados por la mañana.»",
      "Los vecinos ya han dejado sus mensajes en un cuaderno junto a la puerta. Don Hernando, que vende frutas en la esquina desde hace treinta años, escribió: «Ojalá le vaya muy bien y ojalá venda muchos libros, pero que no suba el precio del tinto». Una estudiante firmó con un dibujo y una frase: «Que nunca falte el wifi». Y la dueña de la panadería de enfrente dejó una nota práctica: «Si quiere que le traiga pan fresco por las mañanas, me avisa».",
      "La inauguración será a las diez, con música en vivo y una mesa de libros usados. Camila solo pide una cosa a los visitantes: que cada uno traiga un libro para intercambiar.",
    ],
    glossary: [
      { es: "sostenible", note: "que puede mantenerse en el tiempo sin perder dinero" },
      { es: "el mostrador", note: "mueble donde se atiende a los clientes" },
      { es: "intercambiar", note: "dar una cosa y recibir otra" },
    ],
    tasks: [
      {
        id: "b1-02-r1",
        type: "choice",
        prompt: "Lee la noticia y elige la respuesta correcta.",
        items: [
          { q: "¿Qué quiere Camila que hagan los clientes?", options: ["Que compren al menos un café", "Que lean tranquilos sin obligación de consumir", "Que reserven mesa"], answer: 1, why: "_Quiero que la gente venga a leer sin prisa y que nadie le diga que tiene que consumir algo._" },
          { q: "¿Qué espera Camila del negocio?", options: ["Hacerse rica pronto", "Abrir otro local en un año", "Que sea sostenible y tenga talleres para niños"], answer: 2, why: "_Espero que el negocio sea sostenible y que podamos organizar talleres._" },
          { q: "¿Qué pide a quien visite la inauguración?", options: ["Que lleve un libro para intercambiar", "Que escriba en el cuaderno", "Que compre pan"], answer: 0, why: "_Que cada uno traiga un libro para intercambiar._" },
        ],
      },
      {
        id: "b1-02-r2",
        type: "match",
        title: "¿Quién lo desea?",
        prompt: "Relaciona cada persona con su deseo o su oferta.",
        pairs: [
          { left: "Don Hernando", right: "que el café no suba de precio" },
          { left: "la estudiante", right: "que siempre haya conexión a internet" },
          { left: "la panadera", right: "llevar pan si Camila se lo pide" },
          { left: "Camila", right: "talleres de escritura los sábados" },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada fragmento para ver qué forma hay dentro.",
      items: [
        { quote: "Quiero que la gente venga a leer sin prisa", note: "Camila quiere, la gente viene: **que + subjuntivo**. _vengo_ → _venga_." },
        { quote: "No espero hacerme rica", note: "Ella espera y ella se hace rica: mismo sujeto, **infinitivo**." },
        { quote: "Ojalá le vaya muy bien", note: "**Ojalá** + subjuntivo de _ir_: _vaya_." },
        { quote: "Que nunca falte el wifi", note: "Deseo corto con **que** + subjuntivo, sin verbo principal." },
      ],
    },
  },
  practice: {
    intro: "Ahora mezclas las formas y los deseos. El último ejercicio te pide recuperar formas de A2 que ya eran subjuntivo sin que lo supieras.",
    exercises: [
      {
        id: "b1-02-x1",
        type: "order",
        title: "Deseos en orden",
        prompt: "Ordena las palabras para formar el deseo.",
        items: [
          { words: ["Ojalá", "que", "los", "vecinos", "traigan", "muchos", "libros."] },
          { words: ["Quiero", "que", "pruebes", "el", "pastel", "de", "mamá."] },
          { words: ["Esperamos", "abrir", "antes", "de", "las", "diez."] },
        ],
      },
      {
        id: "b1-02-x2",
        type: "classify",
        title: "¿Una persona o dos?",
        prompt: "Clasifica cada frase según cuántas personas intervienen en el deseo.",
        categories: ["Mismo sujeto (infinitivo)", "Dos sujetos (que + subjuntivo)"],
        items: [
          { text: "Prefiero empezar con poco dinero.", cat: 0 },
          { text: "Prefiero que empieces con poco dinero.", cat: 1 },
          { text: "Deseamos que vuelvan pronto.", cat: 1 },
          { text: "Desean volver el mes que viene.", cat: 0 },
          { text: "Espero que el letrero se vea desde la esquina.", cat: 1, why: "Yo espero; el letrero se ve: dos sujetos." },
        ],
      },
      {
        id: "b1-02-x3",
        type: "context",
        title: "¿Qué dices?",
        prompt: "Lee la situación y elige la frase correcta y natural.",
        items: [
          { context: "Tu amigo tiene mañana una entrevista para un trabajo que le encanta.", q: "Le dices:", options: ["¡Ojalá te lo dan!", "¡Ojalá te lo den!", "¡Ojalá dártelo!"], answer: 1, why: "_Ojalá_ + subjuntivo de _dar_: **den**." },
          { context: "Quieres que tu hermana te avise cuando llegue el pedido.", q: "Le escribes:", options: ["Quiero que me avisas.", "Quiero avisarme.", "Quiero que me avises."], answer: 2, why: "Tú quieres, ella avisa: **que + subjuntivo**." },
          { context: "Tú misma quieres terminar el menú hoy.", q: "Dices:", options: ["Quiero terminar el menú hoy.", "Quiero que termine el menú hoy.", "Quiero que termino el menú hoy."], answer: 0, why: "Misma persona: **infinitivo**." },
        ],
      },
      {
        id: "b1-02-x4",
        type: "open",
        title: "Escribe tus deseos",
        prompt: "Escribe cada parte de un mensaje para alguien que empieza algo nuevo. Después compara con el modelo.",
        items: [
          {
            prompt: "Escribe dos deseos para la persona con _espero que_ y _quiero que_.",
            model: "Espero que tus compañeros te reciban con cariño. Quiero que me cuentes todo después de tu primer día.",
            checklist: ["Hay dos sujetos en cada frase.", "Los verbos van en subjuntivo."],
          },
          {
            prompt: "Escribe un deseo para ti con infinitivo y uno con _ojalá_.",
            model: "Espero visitarte en primavera. Ojalá encuentre vuelos baratos.",
            checklist: ["Con el mismo sujeto uso infinitivo.", "Después de _ojalá_ uso subjuntivo, aunque el deseo sea para mí."],
          },
          {
            prompt: "Cierra con un deseo corto con _¡Que…!_",
            model: "¡Que disfrutes cada minuto de esta aventura!",
            checklist: ["Empiezo con _Que_.", "El verbo va en subjuntivo."],
          },
        ],
      },
      {
        id: "b1-02-retrieval",
        type: "open",
        title: "Recupera lo que ya sabías",
        prompt: "Sin mirar la teoría, recupera formas de A2 y conéctalas con el subjuntivo. Escribe primero y compara después.",
        items: [
          {
            prompt: "En A2 aprendiste el imperativo negativo. Escribe en negativo para tú: habla, come, sal, ven, haz, ve. ¿Qué tienen en común con el subjuntivo?",
            model: "No hables, no comas, no salgas, no vengas, no hagas, no vayas. Son las mismas formas que el presente de subjuntivo de tú.",
            checklist: ["Las seis formas negativas están bien escritas.", "Reconozco que coinciden con el subjuntivo."],
          },
          {
            prompt: "Escribe la forma de yo del presente de indicativo de conocer, traer, oír y caber. Después forma el subjuntivo de él o ella.",
            model: "conozco → conozca; traigo → traiga; oigo → oiga; quepo → quepa.",
            checklist: ["Parto de la forma de yo.", "Mantengo la irregularidad en el subjuntivo."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje de 130–170 palabras para una persona que empieza algo nuevo (un negocio, un trabajo, unos estudios en otro país): recuerda un momento que compartiste con ella, expresa al menos cuatro deseos con formas distintas y despídete.",
    context: "El mensaje va en una tarjeta o en un correo que esa persona va a leer el primer día. Escribe en tono cálido y personal.",
    steps: [
      "Elige a la persona y el comienzo: ¿qué empieza y dónde?",
      "Recuerda en dos o tres frases un momento compartido.",
      "Escribe cuatro deseos: uno con _quiero que_, uno con _espero que_ o _deseo que_, uno con _ojalá_ y uno con _¡Que…!_",
      "Revisa cada deseo: ¿hay una persona o dos? Corrige el infinitivo o el subjuntivo según el caso.",
    ],
    useLanguage: ["Espero que…", "Quiero que…", "Ojalá (que)…", "Deseo que…", "¡Que te vaya…!"],
    model: [
      "Querida Camila: todavía me acuerdo de la tarde en que me enseñaste aquel local vacío, lleno de polvo, y me dijiste que ahí iba a estar tu librería. Yo pensé que estabas loca. Hoy, al ver las estanterías llenas y el letrero en la puerta, sé que tenías razón.",
      "Quiero que sepas que estoy muy orgullosa de ti. Espero que La Taza de Papel se llene de vecinos, de niños y de buenas historias, y que tengas tiempo para leer tú también. Ojalá que el aguacero de las tres no llegue el sábado y que la gente se quede hasta tarde en la terraza. Deseo que este proyecto te dé la tranquilidad que buscabas.",
      "Yo voy a estar en la primera fila con mi libro para intercambiar. ¡Que disfrutes muchísimo este comienzo y que te vaya increíble! Un abrazo enorme, Lucía",
    ],
    checklist: [
      "Escribo al menos cuatro deseos con formas distintas.",
      "Uso infinitivo con el mismo sujeto y _que_ + subjuntivo con dos sujetos.",
      "Después de _ojalá_ y en _¡Que…!_ uso siempre subjuntivo.",
      "Reviso los irregulares: _sea, vaya, haya, sepa, tenga, haga_.",
      "El mensaje tiene saludo, recuerdo, deseos y despedida.",
    ],
    words: [130, 170],
  },
  speaking: {
    intro: "Habla en voz alta y grábate en tu dispositivo. Prepara notas breves, no un texto para leer; el curso no puntúa tu pronunciación ni sube tu audio.",
    tasks: [
      {
        title: "Un brindis por un comienzo",
        prompt: "Imagina que estás en la inauguración de un negocio, en una despedida o en el primer día de trabajo de alguien querido. Haz un brindis de dos minutos: cuenta cómo conociste a la persona, di qué admiras de ella y expresa al menos cinco deseos con formas distintas.",
        prep: ["Saludo al público: _Buenas tardes a todos…_", "Un recuerdo breve en pasado.", "Cinco deseos: _quiero que, espero que, deseo que, ojalá, ¡que…!_", "Cierre: _¡Brindemos por…!_"],
        seconds: 120,
        model: "Buenas tardes a todos. Conocí a Camila hace diez años en la universidad: siempre llegaba tarde, pero con un libro bajo el brazo. Hoy quiero que todos sepan lo valiente que es. Espero que este lugar sea su segunda casa. Deseo que nunca le falten clientes ni ganas. Ojalá que dentro de diez años estemos aquí otra vez. ¡Que te vaya increíble, Camila! ¡Brindemos por La Taza de Papel!",
        selfCheck: ["Uso al menos cinco deseos diferentes.", "Distingo infinitivo y subjuntivo.", "Mi entonación sube en los deseos y baja al final."],
      },
      {
        title: "Responde y negocia: ¿quién hace qué?",
        prompt: "Mañana inauguras algo y un amigo te llama para ayudarte. Te pregunta qué quieres que haga. Responde con tres peticiones, aclara qué vas a hacer tú y negocia si él te propone otra cosa. Imagina sus respuestas en voz alta.",
        prep: ["Pide: _Quiero que…, necesito que…_", "Aclara: _Yo prefiero encargarme de…_", "Negocia: _Bueno, si prefieres…, entonces quiero que…_"],
        seconds: 90,
        model: "Gracias por llamar. Necesito que vayas a buscar las sillas y quiero que me ayudes con la música. Yo prefiero encargarme de las flores. ¿Que no tienes coche? Bueno, entonces quiero que llames a la empresa para que las traigan ellos.",
        selfCheck: ["Respondo a sus preguntas antes de seguir.", "Uso _que_ + subjuntivo para pedir.", "Llego a un acuerdo."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que has repasado y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Desea", task: "Empieza la clase con tres deseos para la semana: uno para ti, uno para tu profesor y uno para el mundo.", phrases: ["Espero…", "Espero que…", "Ojalá…"] },
      { move: "Pide", task: "Pide a tu profesor dos cosas para la clase con _quiero que_ o _me gustaría que_.", phrases: ["Quiero que me expliques…", "Necesito que repitamos…"] },
      { move: "Responde", task: "Tu profesor te cuenta un plan; reacciona con un deseo corto adecuado.", phrases: ["¡Que lo pases bien!", "¡Ojalá!"] },
    ],
    bring: "Tu mensaje de buenos deseos revisado y la lista de los seis verbos especiales escrita de memoria.",
  },
  quiz: {
    items: [
      { type: "choice", q: "Espero que mañana ___ menos tráfico en la séptima.", options: ["haya", "hay", "haber"], answer: 0, why: "_Espero que_ + subjuntivo de _haber_: **haya**." },
      { type: "listen", q: "Escucha el deseo de Camila sobre el pastel: ¿qué forma oyes?", audio: "Quiero que lo pruebe.", voice: "es-CO-f", options: ["prueba", "pruebe", "probar"], answer: 1, why: "_que lo pruebe_: subjuntivo." },
      { type: "gap", q: "Ojalá que mis padres ___ venir a la inauguración. (poder)", answers: [["puedan"]], why: "_poder_ → _puedo_ → **puedan**." },
      { type: "gap", q: "Mi socia quiere ___ el local los domingos también. (abrir)", answers: [["abrir"]], why: "Ella quiere y ella abre: **infinitivo**." },
      { type: "gap", q: "Te dejo mi tarjeta para que me ___ si necesitas algo. (llamar)", answers: [["llames"]], why: "_Para que_ + subjuntivo." },
      { type: "error", sentence: "Ojalá que el sábado no hace frío.", answers: ["Ojalá que el sábado no haga frío."], why: "_Ojalá_ + subjuntivo: **haga**." },
      { type: "error", sentence: "Espero que tú estás mejor de la gripe.", answers: ["Espero que tú estés mejor de la gripe."], why: "Después de _espero que_ con otro sujeto: **estés**." },
      { type: "order", words: ["¡Que", "tengas", "mucha", "suerte", "en", "Montreal!"] },
      {
        type: "open",
        prompt: "Reformulación. Texto de partida: «Mi deseo para tu primer día: tú encuentras aparcamiento y el jefe es amable contigo.» Escribe el mismo deseo en una frase que empiece por «Espero que…».",
        model: "Espero que encuentres aparcamiento y que el jefe sea amable contigo en tu primer día.",
        checklist: ["Uso subjuntivo en los dos verbos.", "_Ser_ pasa a _sea_.", "Conservo toda la información; acepto otra formulación equivalente."],
      },
      {
        type: "open",
        prompt: "Escribe tres deseos para un amigo que se muda a otra ciudad: uno con _quiero que_, uno con _ojalá_ y uno con _¡Que…!_",
        model: "Quiero que me llames cuando llegues. Ojalá encuentres un piso con luz. ¡Que seas muy feliz allí!",
        checklist: ["Tres formas distintas de deseo.", "Todos los verbos del deseo en subjuntivo."],
      },
    ],
  },
  complete: {
    canNow: [
      "Explicar la diferencia entre presentar un hecho (indicativo) y algo que todavía no lo es (subjuntivo).",
      "Formar el presente de subjuntivo regular y el de los irregulares más frecuentes, incluidos sea, esté, vaya, haya, sepa y dé.",
      "Elegir entre infinitivo y que + subjuntivo con querer, esperar y desear.",
      "Expresar deseos con ojalá y despedirte con ¡que + subjuntivo!",
    ],
    review: [
      "-ar → e; -er / -ir → a; la raíz sale de _yo_.",
      "Una persona: infinitivo. Dos personas: que + subjuntivo.",
      "Ojalá + subjuntivo, siempre; nunca con infinitivo ni futuro.",
    ],
  },
  related: [
    { path: "/sistema-verbal/presente-de-subjuntivo", label: "Clase: Presente de subjuntivo: formación y usos esenciales" },
    { path: "/gramatica/deseos-querer-que-esperar-que-ojala", label: "Clase: Deseos: querer que, esperar que, ojalá" },
  ],
};
