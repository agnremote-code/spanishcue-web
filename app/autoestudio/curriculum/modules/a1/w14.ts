import type { Module } from "../../types";

export const a1w14: Module = {
  id: "a1-14",
  level: "a1",
  week: 14,
  kind: "core",
  title: "Siempre me levanto antes que el sol",
  subtitle: "Repaso de siempre, a veces, nunca y las expresiones de frecuencia, y de los verbos reflexivos de la rutina: me levanto, te duchas, se viste.",
  stop: { place: "León", country: "Nicaragua" },
  minutes: 80,
  newObjectives: [
    "a1.gram.g030",
    "a1.gram.g031",
    "a1.voc.w14-rutina-diaria",
    "a1.pron.w14-pronombre-verbo",
    "a1.lis.w14-turnos-bano",
    "a1.read.w14-dia-panadera",
    "a1.wri.w14-semana-intercambio",
    "a1.spk.w14-contar-rutina",
    "a1.fun.w14-hablar-habitos",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes contar tu rutina diaria con verbos como levantarse, ducharse o acostarse, y decir con qué frecuencia haces cada cosa.",
    canDoEn: "By the end of this week, you can describe your daily routine with verbs like levantarse, ducharse or acostarse, and say how often you do each thing.",
    steps: [
      "Ordena la escala: **siempre → normalmente → a veces → casi nunca → nunca**.",
      "Coloca las expresiones largas al principio o al final: `todos los días`, `dos veces por semana`, `los lunes`.",
      "Usa **nunca** delante del verbo o **no + verbo + nunca**.",
      "Pon el pronombre delante del verbo: `me levanto`, `te duchas`, `nos acostamos`.",
      "Escucha a dos compañeras de piso que organizan los turnos del baño en León.",
      "Escribe tu semana para un compañero de intercambio y graba tu rutina.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases: las expresiones de frecuencia para hablar de hábitos y los verbos reflexivos de la rutina diaria. Las usas en León, Nicaragua, donde muchas personas empiezan el día muy temprano por el calor.",
    parts: [
      {
        heading: "De siempre a nunca",
        body: [
          "Para decir **con qué frecuencia** haces algo, usa una escala de cinco palabras: **siempre** (100 %), **normalmente** (casi siempre), **a veces** (algunas veces), **casi nunca** (muy poco) y **nunca** (0 %).",
          "Estas palabras van normalmente **delante del verbo**: _**Siempre** desayuno fruta_, _**A veces** trabajo los sábados_. **Normalmente** y **a veces** también pueden ir al final: _Ceno en casa **normalmente**_.",
          "**Nunca** tiene dos posiciones: delante del verbo, sin _no_ (_**Nunca** como carne_), o detrás, con _no_ delante (_**No** como carne **nunca**_). Nunca digas _Como nunca carne_ ni _Nunca no como_.",
        ],
        support: [
          "The scale: _siempre_ (always), _normalmente_ (usually), _a veces_ (sometimes), _casi nunca_ (hardly ever), _nunca_ (never).",
          "_Nunca_ before the verb, or _no + verb + nunca_. Never _nunca no_.",
        ],
        table: {
          caption: "La escala",
          head: ["Palabra", "Cuánto", "Ejemplo"],
          rows: [
            ["siempre", "100 %", "Siempre tomo café por la mañana."],
            ["normalmente", "casi siempre", "Normalmente voy en bici."],
            ["a veces", "algunas veces", "A veces cocino para mis amigos."],
            ["casi nunca", "muy poco", "Casi nunca veo la tele."],
            ["nunca", "0 %", "Nunca llego tarde. / No llego tarde nunca."],
          ],
        },
        examples: [
          { es: "En León casi nunca llueve en marzo.", en: "In León it hardly ever rains in March." },
          { es: "Mi abuelo no bebe alcohol nunca.", en: "My grandfather never drinks alcohol." },
        ],
        mistakes: [
          { wrong: "Voy nunca al gimnasio.", right: "Nunca voy al gimnasio. / No voy nunca al gimnasio.", why: "Detrás del verbo, **nunca** necesita **no** delante." },
          { wrong: "Nunca no trabajo los domingos.", right: "Nunca trabajo los domingos.", why: "Con **nunca** delante del verbo no pones _no_." },
        ],
      },
      {
        heading: "Todos los días, dos veces por semana, los lunes",
        body: [
          "Para una frecuencia exacta usas expresiones más largas. Van al **principio** o al **final** de la frase: _**Todos los días** camino al trabajo_, _Voy al mercado **dos veces por semana**_.",
          "**Una vez**, pero **dos veces** (la z cambia a c en plural). Y **por**: _una vez **por** semana_, _tres veces **por** mes_ (también _al mes_, _a la semana_).",
          "Con los días: **los lunes** (plural) es un hábito, todos los lunes; **el lunes** (singular) es un solo día, por ejemplo el próximo. Y cuidado: **todos los días** es cada día; **todo el día** es de la mañana a la noche.",
        ],
        support: [
          "_Una vez, dos veces por semana_ = once, twice a week. _Vez_ → _veces_ in the plural.",
          "_Los lunes_ = on Mondays (habit). _El lunes_ = on Monday (one day). _Todos los días_ = every day; _todo el día_ = all day.",
        ],
        table: {
          caption: "¿Hábito o una sola vez?",
          head: ["Hábito (se repite)", "Una sola vez"],
          rows: [
            ["Los sábados voy a la playa.", "El sábado voy a la playa."],
            ["Todos los días estudio.", "Hoy estudio todo el día."],
            ["Tres veces por semana nado.", "Mañana nado una hora."],
          ],
        },
        examples: [
          { es: "Los domingos comemos en casa de mi madre.", en: "On Sundays we have lunch at my mother's." },
          { es: "Riego las plantas dos veces por semana.", en: "I water the plants twice a week." },
        ],
        mistakes: [
          { wrong: "Voy al cine dos vez por mes.", right: "Voy al cine dos veces por mes.", why: "Plural de **vez**: **veces**." },
          { wrong: "Trabajo todo los días.", right: "Trabajo todos los días.", why: "_Días_ es masculino plural: **todos los días**." },
        ],
        tip: "Pregunta clave para hablar de hábitos: **¿Con qué frecuencia…?** o, más fácil, **¿Cada cuánto…?**",
      },
      {
        heading: "Me levanto, te duchas, se viste",
        body: [
          "Muchos verbos de la rutina son **reflexivos**: la persona hace la acción **sobre sí misma**. Los ves en el diccionario con **-se**: _levantarse_, _ducharse_, _acostarse_, _vestirse_.",
          "Al conjugar, el **-se** se convierte en un pronombre que concuerda con la persona y va **delante del verbo**: **me**, **te**, **se**, **nos**, **os**, **se**. En la negación, **no** va delante del pronombre: _**No me** levanto tarde_.",
          "Algunos cambian la raíz como _poder_ o _querer_: _acostarse_ → **me acuesto** (o → ue), _despertarse_ → **me despierto** (e → ie), _vestirse_ → **me visto** (e → i). _Ponerse_ hace **me pongo**. Con nosotros y vosotros no hay cambio: _nos acostamos_.",
        ],
        support: [
          "Reflexive verbs: the person does the action to themselves. The pronoun (_me, te, se, nos, os, se_) goes before the conjugated verb.",
          "In the negative: _no me levanto_ (no + pronoun + verb).",
        ],
        table: {
          caption: "Tres verbos en presente",
          head: ["Persona", "levantarse", "acostarse (o → ue)", "vestirse (e → i)"],
          rows: [
            ["yo", "me levanto", "me acuesto", "me visto"],
            ["tú", "te levantas", "te acuestas", "te vistes"],
            ["él, ella, usted", "se levanta", "se acuesta", "se viste"],
            ["nosotros, nosotras", "nos levantamos", "nos acostamos", "nos vestimos"],
            ["vosotros, vosotras", "os levantáis", "os acostáis", "os vestís"],
            ["ellos, ellas, ustedes", "se levantan", "se acuestan", "se visten"],
          ],
        },
        examples: [
          { es: "Me despierto a las cinco, pero me levanto a las cinco y media.", en: "I wake up at five, but I get up at half past five." },
          { es: "¿A qué hora te acuestas los viernes?", en: "What time do you go to bed on Fridays?" },
          { es: "Mis hijos se ponen el uniforme después del desayuno.", en: "My children put on their uniforms after breakfast." },
        ],
        mistakes: [
          { wrong: "Levanto a las seis.", right: "Me levanto a las seis.", why: "_Levantarse_ es reflexivo: necesita **me**." },
          { wrong: "Me no ducho por la noche.", right: "No me ducho por la noche.", why: "**No** va delante del pronombre." },
          { wrong: "Nos acuestamos tarde.", right: "Nos acostamos tarde.", why: "Con **nosotros** la raíz no cambia: _acostamos_." },
        ],
      },
      {
        heading: "¿Me lavo o lavo? ¿Para mí o para otra persona?",
        body: [
          "El mismo verbo puede ser reflexivo o no. Si la acción vuelve a la persona, usas el pronombre: _**Me** lavo las manos_. Si la acción va a otra cosa o a otra persona, no: _Lavo **el coche**_, _Despierto **a mi hijo**_.",
          "Con partes del cuerpo y ropa, el español usa el **artículo**, no el posesivo: _Me lavo **los** dientes_, _Se pone **la** gorra_ (no _mis dientes_, _su gorra_).",
          "Con dos verbos, el pronombre puede ir al final del infinitivo, pegado: _Quiero **acostarme** temprano_. Por ahora, basta con reconocerlo.",
        ],
        support: [
          "_Me lavo_ = I wash (myself). _Lavo el coche_ = I wash the car. The pronoun shows who receives the action.",
          "With body parts and clothes, use the article: _Me lavo los dientes_ (I brush my teeth).",
        ],
        examples: [
          { es: "Primero baño al perro y después me baño yo.", en: "First I wash the dog and then I have a bath myself." },
          { es: "Mi pareja se afeita y yo me peino.", en: "My partner shaves and I comb my hair." },
        ],
        mistakes: [
          { wrong: "Me lavo mis dientes.", right: "Me lavo los dientes.", why: "Con partes del cuerpo: **los**, no _mis_." },
          { wrong: "Me despierto a mi hija a las siete.", right: "Despierto a mi hija a las siete.", why: "La acción va a otra persona: sin **me**." },
        ],
        tip: "Pregúntate: ¿la acción vuelve a mí? Si sí, **me**. Si va a otra cosa, sin pronombre.",
      },
    ],
  },
  grammar: {
    intro: "Primero, la frecuencia y la posición de nunca; después, los verbos reflexivos y su pronombre.",
    exercises: [
      {
        id: "g1",
        type: "choice",
        title: "¿Cuántas veces?",
        prompt: "Lee la pista y elige la palabra de frecuencia.",
        items: [
          { q: "(7 días de 7) ___ desayuno pinolillo.", options: ["A veces", "Siempre", "Casi nunca"], answer: 1, why: "Todos los días: **siempre**." },
          { q: "(1 vez al año) ___ voy al dentista.", options: ["Casi nunca", "Normalmente", "Siempre"], answer: 0, why: "Muy pocas veces: **casi nunca**." },
          { q: "(0 veces) Mi hermana ___ toma café.", options: ["a veces", "siempre", "nunca"], answer: 2, why: "Cero: **nunca**." },
          { q: "(2 o 3 días de 7) ___ como en la universidad.", options: ["Nunca", "A veces", "Siempre"], answer: 1, why: "Algunas veces: **a veces**." },
          { q: "(5 días de 7) ___ voy a pie al trabajo.", options: ["Normalmente", "Casi nunca", "Nunca"], answer: 0, why: "Casi siempre: **normalmente**." },
        ],
      },
      {
        id: "g2",
        type: "transform",
        title: "Nunca de otra manera",
        prompt: "Escribe la misma idea con **nunca** en la otra posición.",
        items: [
          { source: "Nunca veo películas de terror.", answers: ["No veo películas de terror nunca.", "No veo nunca películas de terror."], why: "Detrás del verbo: **no** + verbo + **nunca**." },
          { source: "No fumo nunca.", answers: ["Nunca fumo."], why: "Delante del verbo: **nunca**, sin _no_." },
          { source: "Mi jefe nunca sonríe.", answers: ["Mi jefe no sonríe nunca."], why: "**No** + verbo + **nunca**." },
        ],
      },
      {
        id: "g3",
        type: "gap",
        title: "Frecuencias exactas",
        prompt: "Completa con **todos**, **todo**, **vez**, **veces**, **los** o **el**.",
        items: [
          { q: "Llamo a mi madre ___ los días.", answers: [["todos"]], why: "Cada día: **todos los días**." },
          { q: "Mañana estoy en la oficina ___ el día, de ocho a seis.", answers: [["todo"]], why: "De la mañana a la noche: **todo el día**." },
          { q: "Hago yoga tres ___ por semana.", answers: [["veces"]], why: "Plural: **veces**." },
          { q: "Voy a la peluquería una ___ al mes.", answers: [["vez"]], why: "Singular: **una vez**." },
          { q: "___ miércoles tengo clase de guitarra, cada semana.", answers: [["Los"]], why: "Hábito: **los miércoles**." },
        ],
      },
      {
        id: "g4",
        type: "gap",
        title: "El pronombre justo",
        prompt: "Completa con **me**, **te**, **se** o **nos**.",
        items: [
          { q: "Yo ___ ducho con agua fría porque hace mucho calor.", answers: [["me"]], why: "Yo: **me**." },
          { q: "¿Tú ___ acuestas tarde los fines de semana?", answers: [["te"]], why: "Tú: **te**." },
          { q: "Mi compañera de piso ___ viste muy rápido.", answers: [["se"]], why: "Ella: **se**." },
          { q: "Mi novio y yo ___ levantamos a las cinco y media.", answers: [["nos"]], why: "Nosotros: **nos**." },
          { q: "Mis padres ___ despiertan con la radio.", answers: [["se"]], why: "Ellos: **se**." },
        ],
      },
      {
        id: "g5",
        type: "choice",
        title: "¿Con pronombre o sin pronombre?",
        prompt: "Elige la frase correcta.",
        items: [
          { q: "Por la mañana, Rubén…", options: ["se lava el coche.", "lava el coche.", "se lava su coche."], answer: 1, why: "La acción va al coche, no a Rubén: sin **se**." },
          { q: "Antes de dormir, yo…", options: ["me lavo los dientes.", "lavo los dientes.", "me lavo mis dientes."], answer: 0, why: "Vuelve a mí y con parte del cuerpo: **me lavo los dientes**." },
          { q: "A las siete, la madre…", options: ["se despierta a los niños.", "despierta a los niños.", "se despierta los niños."], answer: 1, why: "La acción va a los niños: sin **se**." },
          { q: "Hace frío, entonces tú…", options: ["pones la chaqueta.", "te pones tu chaqueta.", "te pones la chaqueta."], answer: 2, why: "Ropa: **te pones la** chaqueta." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Un día normal de la mañana a la noche: verbos de la rutina, momentos del día y palabras de frecuencia.",
    groups: [
      {
        title: "Por la mañana",
        items: [
          { es: "despertarse", en: "to wake up" },
          { es: "levantarse", en: "to get up" },
          { es: "ducharse", en: "to shower" },
          { es: "afeitarse", en: "to shave" },
          { es: "vestirse", en: "to get dressed" },
          { es: "ponerse (la ropa)", en: "to put on (clothes)" },
        ],
      },
      {
        title: "Por la noche",
        items: [
          { es: "lavarse los dientes", en: "to brush your teeth" },
          { es: "quitarse los zapatos", en: "to take off your shoes" },
          { es: "relajarse", en: "to relax" },
          { es: "acostarse", en: "to go to bed" },
          { es: "dormirse", en: "to fall asleep" },
        ],
      },
      {
        title: "¿Cada cuánto?",
        items: [
          { es: "¿Con qué frecuencia…?", en: "How often…?" },
          { es: "¿Cada cuánto…?", en: "How often…? (informal)" },
          { es: "de lunes a viernes", en: "from Monday to Friday" },
          { es: "los fines de semana", en: "at weekends" },
          { es: "una vez por semana", en: "once a week" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "¿Qué usas?",
        prompt: "Une cada acción con la cosa que usas.",
        pairs: [
          { left: "lavarse los dientes", right: "el cepillo" },
          { left: "peinarse", right: "el peine" },
          { left: "despertarse", right: "la alarma" },
          { left: "afeitarse", right: "la cuchilla" },
          { left: "ducharse", right: "el jabón" },
        ],
        why: "Todos los verbos son reflexivos: la acción vuelve a la persona.",
      },
      {
        id: "v2",
        type: "context",
        title: "¿Qué hace?",
        prompt: "Lee la situación y elige el verbo.",
        items: [
          { context: "Son las seis. Suena la alarma y Marcos abre los ojos.", q: "Marcos…", options: ["se acuesta.", "se despierta.", "se viste."], answer: 1, why: "Abre los ojos: **se despierta**." },
          { context: "Elena llega a casa y deja las sandalias en la puerta.", q: "Elena…", options: ["se quita las sandalias.", "se pone las sandalias.", "se lava las sandalias."], answer: 0, why: "Deja las sandalias: **se quita**." },
          { context: "Son las once de la noche. Tomás apaga la luz y cierra los ojos.", q: "Tomás…", options: ["se levanta.", "se ducha.", "se duerme."], answer: 2, why: "Cierra los ojos para dormir: **se duerme**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Me, te, se, nos: el pronombre va pegado al verbo",
    explanation: [
      "Los pronombres **me, te, se, nos** son palabras **débiles**: no tienen fuerza propia y se pronuncian **unidos** al verbo, como una sola palabra: _me-le-**van**-to_, _te-**du**-chas_, _nos-a-cos-**ta**-mos_.",
      "La fuerza de la frase va en el verbo, no en el pronombre. Si dices _**ME** levanto_, con fuerza en _me_, suena raro.",
      "Si el verbo empieza por vocal, el pronombre se une con ella: _se a-fei-ta_ suena **sea-fei-ta**; _nos acostamos_ suena **no-sa-cos-ta-mos**. Por eso es importante oír bien la primera sílaba: ahí está la persona.",
    ],
    support: [
      "_Me, te, se, nos_ are unstressed and blend with the verb: _melevanto_.",
      "Listen carefully to the start of the verb group: the pronoun tells you who does the action.",
    ],
    examples: [
      { es: "Me visto rápido. → me-vis-to", en: "I get dressed quickly." },
      { es: "Se afeita. → sea-fei-ta", en: "He shaves." },
      { es: "Nos acostamos. → no-sa-cos-ta-mos", en: "We go to bed." },
    ],
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Quién lo hace?",
      prompt: "Escucha y elige la persona. Fíjate en el pronombre del principio.",
      items: [
        { q: "¿Quién?", audio: "Te levantas muy temprano.", options: ["yo", "tú", "nosotros"], answer: 1 },
        { q: "¿Quién?", audio: "Nos duchamos por la noche.", options: ["nosotros", "ella", "tú"], answer: 0 },
        { q: "¿Quién?", audio: "Se acuesta a las diez.", options: ["yo", "tú", "él o ella"], answer: 2 },
        { q: "¿Quién?", audio: "Me pongo las botas.", options: ["yo", "ellos", "nosotros"], answer: 0 },
        { q: "¿Quién?", audio: "Se visten en cinco minutos.", options: ["yo", "ellos o ellas", "tú"], answer: 1 },
      ],
    },
    produce: [
      { text: "Me levanto a las cinco y media.", tip: "_Me-le-van-to_ todo junto; fuerza en _van_." },
      { text: "¿A qué hora te acuestas?", tip: "_Tea-cues-tas_: el pronombre se une a la vocal." },
      { text: "Normalmente nos acostamos tarde.", tip: "_No-sa-cos-ta-mos_: la s salta a la vocal." },
      { text: "Mi hijo se afeita una vez por semana.", tip: "_Sea-fei-ta_, y _vez_ con la misma s o z de tu variedad." },
      { text: "Nunca me ducho por la noche.", tip: "Fuerza en _nun_ y en _du_; _me_ es débil." },
    ],
    spelling: "Con el verbo conjugado, el pronombre va **separado** y delante: _me levanto_. Con el infinitivo, va **pegado** al final: _levantarme_, _acostarse_. Y recuerda: **vez** → **veces** (la z cambia a c delante de e).",
  },
  listening: {
    title: "Un baño para tres",
    context: "Valeria, Itzel y Carmen comparten una casa vieja en León. Solo hay un baño y las mañanas son un caos. Valeria e Itzel hablan en la cocina para organizar los turnos.",
    speakers: [
      { id: "valeria", name: "Valeria", voice: "es-CO-f", role: "estudiante de Medicina" },
      { id: "itzel", name: "Itzel", voice: "es-MX-f", role: "profesora de inglés" },
    ],
    script: [
      { speaker: "valeria", text: "Itzel, tenemos un problema: las tres nos duchamos a las seis y media." },
      { speaker: "itzel", text: "Es verdad. ¿A qué hora te levantas tú normalmente?" },
      { speaker: "valeria", text: "De lunes a viernes me levanto a las seis, porque mis clases empiezan a las siete. Me ducho rápido, en cinco minutos." },
      { speaker: "itzel", text: "Yo me despierto a las seis, pero me levanto a las seis y veinte. Siempre me quedo un rato en la cama." },
      { speaker: "valeria", text: "¿Y Carmen? ¿Cuándo se ducha?" },
      { speaker: "itzel", text: "Carmen casi nunca se ducha por la mañana. Se ducha por la noche, cuando vuelve del gimnasio." },
      { speaker: "valeria", text: "Entonces el problema es más pequeño. Yo me ducho primero, a las seis, y tú a las seis y cuarto." },
      { speaker: "itzel", text: "Bien. Pero los martes y jueves no trabajo por la mañana, y esos días no me levanto nunca antes de las ocho." },
      { speaker: "valeria", text: "Perfecto. Y los fines de semana no hay turnos: todo el día libre." },
      { speaker: "itzel", text: "Una cosa más: ¿te lavas los dientes en el baño o en la cocina? Porque a veces la cocina está llena de cepillos." },
      { speaker: "valeria", text: "¡Ja, ja! Esos cepillos son de Carmen." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo una vez y entiende la situación.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿Cuál es el problema?", options: ["La casa es muy cara.", "Todas se duchan a la misma hora.", "No hay agua caliente."], answer: 1, why: "_Las tres nos duchamos a las seis y media_." },
            { q: "¿Qué hacen al final?", options: ["Organizan turnos.", "Buscan otra casa.", "Hablan con Carmen."], answer: 0, why: "Deciden quién se ducha primero." },
            { q: "¿Cómo termina la conversación?", options: ["con un enfado", "con una broma", "con una pregunta sin respuesta"], answer: 1, why: "Se ríen de los cepillos de Carmen." },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a las horas, los días y la frecuencia.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿A qué hora se levanta Valeria de lunes a viernes?", options: ["a las seis y veinte", "a las ocho", "a las seis"], answer: 2 },
            { q: "¿Qué hace Itzel después de despertarse?", options: ["Se queda un rato en la cama.", "Se ducha enseguida.", "Va al gimnasio."], answer: 0 },
            { q: "¿Cuándo se ducha Carmen normalmente?", options: ["por la mañana", "por la noche", "a mediodía"], answer: 1 },
            { q: "¿Qué días no trabaja Itzel por la mañana?", options: ["lunes y miércoles", "los fines de semana", "martes y jueves"], answer: 2 },
            { q: "¿De quién son los cepillos de la cocina?", options: ["de Carmen", "de Itzel", "de Valeria"], answer: 0 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en los reflexivos y en la frecuencia.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué hay en la parte marcada?",
          categories: ["verbo reflexivo", "expresión de frecuencia"],
          items: [
            { text: "las tres **nos duchamos**", cat: 0, why: "Nosotras: **nos** + verbo." },
            { text: "**Siempre** me quedo un rato en la cama.", cat: 1 },
            { text: "Carmen **casi nunca** se ducha por la mañana.", cat: 1 },
            { text: "**me levanto** a las seis", cat: 0 },
            { text: "**los martes y jueves** no trabajo", cat: 1, why: "Plural: un hábito, cada semana." },
            { text: "¿**te lavas** los dientes?", cat: 0, why: "**Te** + verbo, y _los dientes_ con artículo." },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Un día con Darling, panadera",
    genre: "Artículo de una revista local",
    frame: "Una revista de León publica cada mes la rutina de una persona del barrio. Este mes habla de Darling, que tiene una panadería cerca de la catedral.",
    text: [
      "Darling se despierta todos los días a las tres y media de la mañana. No necesita alarma: su cuerpo ya conoce la hora. Se levanta, se lava la cara con agua fría y se pone un delantal blanco. Nunca desayuna en casa: desayuna en la panadería, con el primer pan del día.",
      "A las cuatro empieza a trabajar con su hijo Kevin. Kevin casi nunca llega puntual, pero trabaja muy rápido. A las seis abren la puerta y siempre hay una fila de clientes. Los sábados hacen rosquillas y pan de yuca, y la fila es todavía más larga.",
      "Después de comer, Darling se acuesta una hora en una hamaca. «No duermo la siesta todos los días, pero sí cuatro o cinco veces por semana», dice. Por la noche cena con su familia, se ducha y se acuesta temprano, a las ocho y media. Los domingos no trabaja nunca: es su día para descansar.",
    ],
    glossary: [
      { es: "el delantal", en: "the apron" },
      { es: "la fila", en: "the queue" },
      { es: "las rosquillas", en: "ring-shaped corn biscuits" },
      { es: "la hamaca", en: "the hammock" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee el artículo y responde.",
        items: [
          { q: "¿A qué hora se despierta Darling?", options: ["a las cuatro", "a las tres y media", "a las seis"], answer: 1 },
          { q: "¿Dónde desayuna?", options: ["en casa", "en un café", "en la panadería"], answer: 2 },
          { q: "¿Cómo es Kevin?", options: ["Casi nunca es puntual, pero es rápido.", "Siempre llega primero.", "Trabaja muy despacio."], answer: 0 },
          { q: "¿Cuántas veces por semana duerme la siesta?", options: ["todos los días", "nunca", "cuatro o cinco"], answer: 2 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Es un hábito de Darling o no lo hace nunca?",
        categories: ["lo hace (siempre o a veces)", "no lo hace nunca"],
        items: [
          { text: "levantarse antes de las cuatro", cat: 0 },
          { text: "desayunar en casa", cat: 1, why: "_Nunca desayuna en casa_." },
          { text: "dormir la siesta en una hamaca", cat: 0 },
          { text: "trabajar los domingos", cat: 1, why: "_Los domingos no trabaja nunca_." },
          { text: "acostarse temprano", cat: 0 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase del artículo para ver qué gramática hay dentro.",
      items: [
        { quote: "Darling se despierta todos los días", note: "Reflexivo con **se** (ella) y frecuencia exacta: **todos los días**." },
        { quote: "se lava la cara", note: "Parte del cuerpo con artículo: **la** cara, no _su cara_." },
        { quote: "Nunca desayuna en casa", note: "**Nunca** delante del verbo, sin _no_." },
        { quote: "Los domingos no trabaja nunca", note: "Hábito con **los domingos** y la otra posición: **no** + verbo + **nunca**." },
        { quote: "cuatro o cinco veces por semana", note: "Plural de _vez_: **veces**, y **por semana**." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: cuenta rutinas con verbos reflexivos y di con qué frecuencia pasan.",
    exercises: [
      {
        id: "x1",
        type: "order",
        title: "Frases de la rutina",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["Los", "lunes", "me", "levanto", "muy", "temprano."], en: "On Mondays I get up very early." },
          { words: ["Mi", "hermana", "no", "se", "maquilla", "nunca."], en: "My sister never wears make-up." },
          { words: ["¿Con", "qué", "frecuencia", "te", "cortas", "el", "pelo?"], en: "How often do you get your hair cut?" },
        ],
      },
      {
        id: "x2",
        type: "error",
        title: "Corrige el diario",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Normalmente acuesto a las once.", answers: ["Normalmente me acuesto a las once."], why: "_Acostarse_ es reflexivo: **me** acuesto." },
          { sentence: "Mis primos se ponen su uniforme a las siete.", answers: ["Mis primos se ponen el uniforme a las siete."], why: "Con la ropa, el artículo: **el** uniforme, no _su_." },
          { sentence: "Desayuno nunca antes de las ocho.", answers: ["Nunca desayuno antes de las ocho.", "No desayuno nunca antes de las ocho."], why: "Detrás del verbo, **nunca** necesita **no**." },
          { sentence: "Yo me despierto a mi hermano todos los días.", answers: ["Yo despierto a mi hermano todos los días."], why: "La acción va a otra persona: sin **me**." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué dices?",
        prompt: "Lee la situación y elige la mejor frase.",
        items: [
          { context: "Vas a la piscina el lunes, el miércoles y el viernes de cada semana.", q: "Dices:", options: ["Voy a la piscina el lunes.", "Voy a la piscina tres veces por semana.", "Voy a la piscina todo el día."], answer: 1, why: "Hábito exacto: **tres veces por semana**." },
          { context: "Mañana, sábado, tienes una boda. Normalmente los sábados no haces nada especial.", q: "Dices:", options: ["El sábado tengo una boda.", "Los sábados tengo una boda.", "Todos los sábados tengo boda."], answer: 0, why: "Un solo día: **el sábado**." },
          { context: "Tu amiga pregunta a qué hora te despiertas los domingos.", q: "Respondes:", options: ["Despierto a las nueve.", "Me despierto a las nueve.", "Me despiertas a las nueve."], answer: 1, why: "Yo: **me despierto**, con e → ie." },
          { context: "Tu compañero de piso no usa nunca la cocina.", q: "Dices:", options: ["Nunca no cocina.", "Cocina nunca.", "No cocina nunca."], answer: 2, why: "**No** + verbo + **nunca**." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases cortas. Después compara con el modelo.",
        items: [
          {
            prompt: "Escribe tu mañana de un día de trabajo o de clase con cuatro verbos reflexivos, en orden.",
            model: "Me despierto a las seis y diez. Me levanto enseguida y me ducho. Después me visto y me peino. Desayuno en diez minutos y salgo.",
            checklist: ["Cuatro verbos con **me** delante", "_Me despierto_, _me visto_: con su cambio de raíz", "Un orden claro (después, luego…)"],
          },
          {
            prompt: "Escribe cuatro hábitos de tu familia o de tus amigos con cuatro frecuencias distintas.",
            model: "Mi padre siempre lee el periódico. Mi madre va al mercado dos veces por semana. Mi hermana casi nunca cocina. Los domingos comemos todos juntos.",
            checklist: ["Cuatro frecuencias distintas", "**Nunca** o **casi nunca** en su posición", "**Veces** en plural", "**Los** + día para un hábito"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje a tu compañero de intercambio de idiomas para contarle tu semana normal.",
    context: "Tienes un compañero de intercambio en León. Quiere saber cómo es tu rutina para encontrar un buen momento para hablar por videollamada.",
    steps: [
      "Saluda y di qué haces de lunes a viernes por la mañana, con verbos reflexivos.",
      "Di qué días tienes otras actividades y con qué frecuencia.",
      "Di una cosa que no haces nunca o casi nunca.",
      "Propón un día y una hora para la llamada, y despídete.",
      "Revisa: ¿cada verbo reflexivo tiene su pronombre delante? ¿**Nunca** está en una posición correcta?",
    ],
    useLanguage: ["me levanto / me acuesto", "de lunes a viernes", "los martes / los fines de semana", "dos veces por semana", "nunca… / no… nunca"],
    model: [
      "¡Hola, Bayardo! De lunes a viernes me levanto a las siete, me ducho y me visto rápido, porque trabajo a las ocho. Los martes y jueves voy a nadar después del trabajo. Normalmente me acuesto a las once. Los fines de semana no me levanto nunca antes de las nueve. ¿Hablamos el miércoles a las siete de la tarde? ¡Hasta pronto!",
    ],
    checklist: [
      "Cada verbo reflexivo tiene **me**, **te**, **se** o **nos** delante.",
      "**No** va delante del pronombre: _no me levanto_.",
      "**Nunca** va delante del verbo o con **no… nunca**.",
      "**Los** + día para un hábito; **veces** en plural.",
    ],
    words: [40, 85],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "Mi día, de la alarma a la almohada",
        prompt: "Cuenta un día normal tuyo desde que te despiertas hasta que te acuestas. Usa al menos cinco verbos reflexivos y tres frecuencias.",
        prep: ["Me despierto… / Me levanto…", "Siempre… / Normalmente…", "A veces…", "Nunca…", "Me acuesto…"],
        seconds: 50,
        model: "Me despierto a las seis, pero me levanto a las seis y cuarto. Siempre me ducho por la mañana. Me visto, desayuno y salgo. Normalmente como en la oficina. A veces voy al gimnasio por la tarde. Por la noche me quito los zapatos, me relajo con un libro y me acuesto a las once. Nunca miro el celular en la cama.",
        selfCheck: ["El pronombre va pegado al verbo: _me-le-van-to_.", "Uso cinco verbos reflexivos.", "Uso tres palabras de frecuencia distintas."],
      },
      {
        title: "Una entrevista de hábitos",
        prompt: "Imagina que entrevistas a un compañero nuevo. Hazle cuatro preguntas sobre su rutina y su frecuencia, y responde tú también.",
        prep: ["¿A qué hora te levantas?", "¿Con qué frecuencia…?", "¿Te acuestas tarde?", "Yo también… / Yo no…"],
        seconds: 35,
        model: "¿A qué hora te levantas? Yo me levanto a las siete. ¿Con qué frecuencia vas al cine? Yo voy una vez al mes. ¿Te acuestas tarde los viernes? Yo sí, a la una. ¿Y cocinas todos los días? Yo no cocino nunca.",
        selfCheck: ["Uso **te** en las preguntas y **me** en mis respuestas.", "Uso **¿Con qué frecuencia…?**", "Uso **nunca** bien colocado."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Cuenta", task: "Cuenta a tu profesor tu mañana de hoy con verbos reflexivos.", phrases: ["Hoy me levanto a las…", "Me ducho y me visto…"] },
      { move: "Pregunta", task: "Pregunta a tu profesor por su rutina y con qué frecuencia hace tres cosas.", phrases: ["¿A qué hora te acuestas?", "¿Con qué frecuencia…?"] },
      { move: "Compara", task: "Compara tus hábitos con los de tu profesor: qué hacen los dos y qué no.", phrases: ["Yo siempre…, pero tú nunca…", "Los dos…"] },
      { move: "Confiesa", task: "Di tres cosas que no haces nunca y una que haces todos los días.", phrases: ["No… nunca.", "Todos los días…"] },
    ],
    bring: "Trae tu horario de una semana normal para explicarlo con verbos reflexivos y expresiones de frecuencia.",
  },
  quiz: {
    items: [
      { type: "choice", q: "(0 veces) Mi madre ___ bebe refrescos.", options: ["nunca", "a veces", "siempre"], answer: 0, why: "Cero: **nunca**." },
      { type: "gap", q: "Voy a clase de baile dos ___ por semana.", answers: [["veces"]], why: "Plural de _vez_: **veces**." },
      { type: "gap", q: "Mis hermanos ___ levantan tarde los domingos.", answers: [["se"]], why: "Ellos: **se**." },
      { type: "gap", q: "(acostarse, yo) Los viernes ___ muy tarde.", answers: [["me acuesto"]], why: "Yo: **me acuesto**, con o → ue." },
      { type: "error", sentence: "Como nunca en restaurantes caros.", answers: ["Nunca como en restaurantes caros.", "No como nunca en restaurantes caros."], why: "Detrás del verbo, **nunca** necesita **no**." },
      { type: "error", sentence: "Mi abuela se pone sus gafas para leer.", answers: ["Mi abuela se pone las gafas para leer."], why: "Con ropa y objetos personales: **las**, no _sus_." },
      { type: "transform", source: "Me ducho por la mañana.", instruction: "Escribe la frase en negativo.", answers: ["No me ducho por la mañana."], why: "**No** + pronombre + verbo." },
      { type: "order", words: ["Normalmente", "nos", "acostamos", "a", "las", "once."] },
      { type: "listen", q: "Escucha. ¿Quién se viste rápido?", audio: "Te vistes muy rápido por la mañana.", options: ["yo", "tú", "ella"], answer: 1, why: "Se oye **te**: tú." },
      { type: "open", prompt: "Escribe tres frases sobre tus domingos con un reflexivo y dos frecuencias.", model: "Los domingos me levanto tarde. Siempre desayuno con mi familia. Casi nunca trabajo.", checklist: ["Un verbo reflexivo con su pronombre", "Dos frecuencias distintas", "Los + día para el hábito"] },
    ],
  },
  complete: {
    canNow: [
      "Ordenar y usar siempre, normalmente, a veces, casi nunca y nunca.",
      "Colocar nunca delante del verbo o con no… nunca.",
      "Decir frecuencias exactas: todos los días, una vez, dos veces por semana, los lunes.",
      "Distinguir los sábados (hábito) de el sábado (un día) y todos los días de todo el día.",
      "Conjugar verbos reflexivos con su pronombre delante, también en negativo y con cambio de raíz.",
      "Distinguir me lavo de lavo el coche y usar el artículo con el cuerpo y la ropa.",
    ],
    review: ["siempre · normalmente · a veces · casi nunca · nunca", "Nunca voy · No voy nunca · dos veces por semana", "me levanto · te acuestas · se viste · no me ducho"],
  },
  related: [
    { path: "/gramatica/frecuencia-y-habitos", label: "Clase: Expresiones de frecuencia y hábito" },
    { path: "/gramatica/verbos-reflexivos-cotidianos", label: "Clase: Verbos reflexivos cotidianos" },
  ],
};
