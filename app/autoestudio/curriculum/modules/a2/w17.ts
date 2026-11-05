import type { Module } from "../../types";

export const a2w17: Module = {
  id: "a2-17",
  level: "a2",
  week: 17,
  kind: "core",
  title: "Si hay nubes en el Irazú, ¿te importaría cambiar de plan?",
  subtitle: "Repaso de si + presente para planes con alternativas y de las formas amables para pedir favores: podrías, te importaría, me gustaría.",
  stop: { place: "Cartago", country: "Costa Rica" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g078",
    "a2.gram.g079",
    "a2.voc.w17-excursion-favores",
    "a2.pron.w17-entonacion-peticion",
    "a2.lis.w17-mensaje-vecina",
    "a2.read.w17-plan-irazu",
    "a2.wri.w17-mensaje-favores",
    "a2.spk.w17-planes-favores",
    "a2.fun.w17-pedir-favores",
    "a2.disc.w17-aceptar-rechazar",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes hacer planes con alternativas (si llueve, vamos al museo), pedir favores con suavidad a amigos y a desconocidos (¿podrías…?, ¿le importaría…?) y aceptar o rechazar una petición con cortesía.",
    steps: [
      "Repasa el esquema `si` + presente, presente: `si llueve, vamos en bus`.",
      "Recuerda: nunca futuro después de `si`.",
      "Distingue `si` (condición) de `sí` (respuesta).",
      "Pide favores con `¿podrías…?`, `¿te importaría…?` y `quería pedirte…`.",
      "Escucha un mensaje de voz con favores antes de una excursión en Cartago.",
      "Escribe y graba un mensaje para pedir ayuda antes de un viaje.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases muy prácticas para organizarte con otras personas: **si + presente** para hablar de condiciones reales y acordar qué hacer en cada caso, y las formas de **pedir sin imponer** (_¿podrías…?, ¿te importaría…?, me gustaría…_). La situación: un grupo prepara una excursión al volcán Irazú, cerca de Cartago, y antes de salir hay que pedir algunos favores.",
    parts: [
      {
        heading: "Si pasa esto, hacemos esto",
        body: [
          "Con **si + presente** presentas una condición posible y real: algo que puede pasar. La otra parte dice qué hacemos en ese caso, también en **presente** o con un **imperativo**: _Si hace sol, subimos al cráter_. _Si tienes frío, ponte mi chaqueta_.",
          "**Nunca** pones futuro ni subjuntivo justo después de _si_: _si llueve_ (no _si lloverá_, no _si llueva_).",
          "El orden puede cambiar. Si empiezas con _si_, pones **coma**: _Si el bus sale tarde, te escribo_. Si empiezas con la consecuencia, no hace falta coma: _Te escribo si el bus sale tarde_.",
        ],
        support: [
          "_Si_ + present for a real, possible condition; the result is in the present or the imperative. Never future or subjunctive straight after _si_. Comma when the sentence starts with _si_.",
        ],
        table: {
          caption: "Condición y consecuencia",
          head: ["Si + presente", "Presente o imperativo"],
          rows: [
            ["Si hay nubes en el volcán,", "visitamos las ruinas de Cartago."],
            ["Si llegas antes que yo,", "espérame en la entrada de la basílica."],
            ["Si no encontramos taxi,", "tomamos el tren a San José."],
            ["Si te duele la cabeza en la cima,", "bebe agua y siéntate un rato."],
          ],
        },
        examples: [
          { es: "Si el sábado amanece despejado, salimos a las seis.", en: "If Saturday dawns clear, we leave at six." },
          { es: "Llevo dos termos de café si somos más de cinco.", en: "I'll bring two flasks of coffee if there are more than five of us." },
          { es: "Si no te sientes bien, avísame y nos quedamos.", en: "If you don't feel well, tell me and we'll stay." },
        ],
        mistakes: [
          { wrong: "Si lloverá, vamos al museo.", right: "Si llueve, vamos al museo.", why: "Después de **si**, presente: _llueve_." },
          { wrong: "Si tener tiempo, te llamo.", right: "Si tengo tiempo, te llamo.", why: "_Si_ necesita un verbo conjugado." },
        ],
      },
      {
        heading: "Si, sí y cuando",
        body: [
          "**Si** sin tilde es la condición (_si quieres_). **Sí** con tilde es la respuesta afirmativa o la afirmación con fuerza (_—¿Vienes? —Sí_; _yo sí voy_). Al hablar se nota: _sí_ se dice con fuerza, _si_ es débil.",
          "**Si** y **cuando** no son iguales. Con **si** no sabes si va a pasar: _si llueve_ (tal vez). Con **cuando** sabes que va a pasar o que pasa siempre: _cuando llego a casa, me ducho_.",
          "Para planes con varias opciones puedes encadenar condiciones: _Si hace sol, vamos al cráter; si no, vamos a las ruinas_. **Si no** = en el caso contrario.",
        ],
        support: [
          "_Si_ (no accent) = if; _sí_ (accent) = yes. _Si_ = maybe it happens; _cuando_ = it will happen or always happens. _Si no_ = otherwise.",
        ],
        examples: [
          { es: "—¿Te apuntas? —Sí, si no llueve.", en: "—Are you in? —Yes, if it doesn't rain." },
          { es: "Cuando llegamos a Cartago, siempre comemos en el mercado.", en: "When we get to Cartago, we always eat at the market." },
          { es: "Si el tren va lleno, esperamos el siguiente; si no, subimos ya.", en: "If the train is full, we'll wait for the next one; if not, we'll get on now." },
        ],
        mistakes: [
          { wrong: "Sí llueve, tomamos el autobús.", right: "Si llueve, tomamos el autobús.", why: "Condición: **si** sin tilde." },
          { wrong: "Si, claro, voy contigo.", right: "Sí, claro, voy contigo.", why: "Respuesta afirmativa: **sí** con tilde." },
        ],
        tip: "Pregúntate: ¿es seguro que pasa? Si es seguro o es una costumbre, **cuando**. Si es solo posible, **si**.",
      },
      {
        heading: "Pedir sin imponer: ¿podrías…?, ¿te importaría…?",
        body: [
          "Con amigos ya usas _¿puedes…?_ o el imperativo con _por favor_. Para pedir con más suavidad, sobre todo un favor grande o a alguien que no conoces bien, usa estas fórmulas fijas + **infinitivo**: **¿Podrías…?** (tú), **¿Podría…?** (usted), **¿Podrían…?** (ustedes).",
          "**¿Te importaría…? / ¿Le importaría…?** + infinitivo es todavía más suave. Ojo con la respuesta: _importar_ significa «molestar», así que para aceptar dices **No, claro que no** o **No, para nada**.",
          "**¿Me harías / me haría el favor de…?** + infinitivo sirve para pedir un favor concreto. Sin preposición en los otros casos: _¿podrías regar…?_, nunca _¿podrías de regar…?_",
        ],
        support: [
          "Soft requests are fixed chunks + infinitive: _¿Podrías…? (tú) / ¿Podría…? (usted)_; _¿Te / Le importaría…?_ (answer _No, claro que no_ to accept); _¿Me harías el favor de…?_",
        ],
        table: {
          caption: "De más directo a más suave",
          head: ["Fórmula", "Con tú", "Con usted"],
          rows: [
            ["imperativo + por favor", "Riega las plantas, por favor.", "Riegue las plantas, por favor."],
            ["poder (presente)", "¿Puedes regar las plantas?", "¿Puede regar las plantas?"],
            ["podría", "¿Podrías regar las plantas?", "¿Podría regar las plantas?"],
            ["importaría", "¿Te importaría regar las plantas?", "¿Le importaría regar las plantas?"],
            ["el favor de", "¿Me harías el favor de regar las plantas?", "¿Me haría el favor de regar las plantas?"],
          ],
        },
        examples: [
          { es: "Don Ernesto, ¿le importaría guardarme la llave hasta el domingo?", en: "Don Ernesto, would you mind keeping the key for me until Sunday?" },
          { es: "¿Podrías mandarme la ubicación del mirador?", en: "Could you send me the location of the viewpoint?" },
        ],
        mistakes: [
          { wrong: "¿Te importaría a cerrar la ventana?", right: "¿Te importaría cerrar la ventana?", why: "_Importaría_ + infinitivo, sin **a**." },
          { wrong: "Don Ernesto, ¿podrías mover su carro?", right: "Don Ernesto, ¿podría mover su carro?", why: "No mezcles tú y usted: _su carro_ → **podría**." },
        ],
      },
      {
        heading: "Me gustaría, quería pedirte… y cómo responder",
        body: [
          "**Me gustaría** + infinitivo o nombre expresa un deseo de ahora con cortesía: _me gustaría reservar dos plazas_. Funciona como _gustar_: **me** gustaría, nunca _yo gustaría_.",
          "El **imperfecto de cortesía** suaviza la petición, aunque habla del presente: _Quería pedirte un favor_, _Venía a preguntar por el tour_. No cuenta el pasado: es una forma educada de empezar.",
          "Para **aceptar**: _Claro_, _Con mucho gusto_, _Sin problema_. Para **rechazar** con cortesía: **Lo siento, es que…** + una razón, y si puedes, una alternativa con _si_: _Lo siento, es que trabajo el sábado; si quieres, te ayudo el domingo_.",
        ],
        support: [
          "_Me gustaría_ + infinitive or noun = a polite wish now. The courtesy imperfect (_quería pedirte_, _venía a_) speaks about now. Decline with _Lo siento, es que…_ and offer an alternative.",
        ],
        examples: [
          { es: "Buenos días, quería preguntarle a qué hora abre el parque.", en: "Good morning, I wanted to ask you what time the park opens." },
          { es: "Me gustaría una mesa cerca de la ventana, por favor.", en: "I'd like a table near the window, please." },
          { es: "Lo siento, es que no tengo carro; si quieres, te acompaño en bus.", en: "I'm sorry, it's just that I don't have a car; if you like, I'll go with you by bus." },
        ],
        mistakes: [
          { wrong: "Yo me gustaría ir al volcán.", right: "Me gustaría ir al volcán.", why: "Como _gustar_: **me** gustaría, sin _yo_ delante." },
          { wrong: "—¿Te importaría esperarme? —Sí, claro.", right: "—¿Te importaría esperarme? —No, claro que no.", why: "_¿Te importaría?_ = ¿te molestaría? Para aceptar: **no**." },
        ],
        tip: "Cuanto más grande es el favor, más suave la fórmula: _¿puedes…?_ para pasar la sal, _¿te importaría…?_ para cuidar a tu gato una semana.",
      },
    ],
  },
  grammar: {
    intro: "Primero las condiciones reales con si; después las fórmulas para pedir con suavidad y para responder.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "Plan A, plan B",
        prompt: "Completa con el verbo en **presente** o en **imperativo** (tú).",
        items: [
          { q: "Si ___ niebla en la carretera, el guía cancela la subida. (haber)", answers: [["hay"]], why: "Después de _si_, presente: **hay**." },
          { q: "Si ___ antes de las siete, todavía hay sitio en el bus. (llegar, nosotros)", answers: [["llegamos"]], why: "Condición en presente: **llegamos**." },
          { q: "Si te pierdes en el mercado, ___ al lado de la fuente. (esperar, tú)", answers: [["espera", "espérame"]], why: "Consecuencia como instrucción: imperativo **espera**." },
          { q: "Si mi hermana no ___ el carro, vamos en tren. (necesitar)", answers: [["necesita"]], why: "_Mi hermana_: **necesita**." },
          { q: "Si ___ hambre en el camino, ___ el pan que traigo. (tener, tú / comer, tú)", answers: [["tienes"], ["come", "cómete"]], why: "Condición en presente (**tienes**) e imperativo (**come**)." },
        ],
      },
      {
        id: "g2",
        type: "choice",
        title: "Si, sí o cuando",
        prompt: "Elige la palabra correcta.",
        items: [
          { q: "___ el museo está cerrado, vamos a tomar un café.", options: ["Sí", "Si", "Cuando"], answer: 1, why: "Es posible, no seguro: condición con **si**." },
          { q: "—¿Vienes a la excursión? —___, me encantaría.", options: ["Sí", "Si", "Cuando"], answer: 0, why: "Respuesta afirmativa: **sí** con tilde." },
          { q: "___ termino de trabajar, siempre paso por la panadería.", options: ["Si", "Sí", "Cuando"], answer: 2, why: "Una costumbre segura: **cuando**." },
          { q: "Si hace buen tiempo, comemos en el jardín; si ___, comemos dentro.", options: ["no", "sí", "cuando"], answer: 0, why: "**Si no** = en el caso contrario." },
        ],
      },
      {
        id: "g3",
        type: "gap",
        title: "Pídelo con suavidad",
        prompt: "Completa con **podrías, podría, te importaría, le importaría** o **me gustaría**.",
        items: [
          { q: "Andrea, ¿___ darle de comer a mi gato el sábado?", answers: [["podrías", "te importaría"]], why: "Con tú: **podrías** o **te importaría**." },
          { q: "Señora Mora, ¿___ abrir la puerta al técnico mañana? Yo no estoy.", answers: [["le importaría", "podría"]], why: "Con usted: **le importaría** o **podría**." },
          { q: "Buenas tardes, ___ reservar una visita guiada para cuatro personas.", answers: [["me gustaría"]], why: "Deseo cortés: **me gustaría** + infinitivo." },
          { q: "Disculpe, ¿___ decirme dónde para el bus al Irazú?", answers: [["podría", "le importaría"]], why: "A un desconocido, con usted: **podría**." },
        ],
      },
      {
        id: "g4",
        type: "transform",
        title: "Más suave",
        prompt: "Transforma la petición directa con la fórmula indicada.",
        items: [
          { source: "Préstame tu mochila grande.", instruction: "Usa **¿Podrías…?**", answers: ["¿Podrías prestarme tu mochila grande?"], why: "_Podrías_ + infinitivo con el pronombre pegado: **prestarme**." },
          { source: "Cierre la ventana, por favor.", instruction: "Usa **¿Le importaría…?**", answers: ["¿Le importaría cerrar la ventana?"], why: "Con usted: **le importaría** + infinitivo, sin _a_." },
          { source: "Llévanos a la estación.", instruction: "Usa **¿Me harías el favor de…?** y cambia _nos_ por _me_.", answers: ["¿Me harías el favor de llevarme a la estación?"], why: "**El favor de** + infinitivo." },
          { source: "Quiero hablar con el guía.", instruction: "Usa **Me gustaría…**", answers: ["Me gustaría hablar con el guía."], why: "Deseo cortés sin _yo_: **me gustaría**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para preparar una excursión a la montaña y pedir ayuda a los vecinos mientras estás fuera.",
    groups: [
      {
        title: "La excursión",
        items: [
          { es: "el cráter", en: "the crater" },
          { es: "la cima", en: "the summit" },
          { es: "el mirador", en: "the viewpoint" },
          { es: "el termo", en: "the flask" },
          { es: "el impermeable", en: "the raincoat" },
          { es: "apuntarse", en: "to sign up / to join in" },
        ],
      },
      {
        title: "El tiempo que cambia el plan",
        items: [
          { es: "la niebla", en: "fog" },
          { es: "estar nublado", en: "to be cloudy" },
          { es: "amanecer despejado", en: "to dawn clear" },
          { es: "un aguacero", en: "a downpour" },
          { es: "hace frío arriba", en: "it's cold up there" },
        ],
      },
      {
        title: "Favores entre vecinos",
        items: [
          { es: "regar las plantas", en: "to water the plants" },
          { es: "darle de comer al gato", en: "to feed the cat" },
          { es: "recoger un paquete", en: "to pick up a parcel" },
          { es: "guardar la llave", en: "to keep the key" },
          { es: "sacar la basura", en: "to take out the rubbish" },
          { es: "echar un vistazo", en: "to keep an eye on things" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "Si pasa esto…",
        prompt: "Une cada condición con lo que tienes que llevar o hacer.",
        pairs: [
          { left: "Si cae un aguacero,", right: "me pongo el impermeable." },
          { left: "Si hace frío arriba,", right: "tomo café del termo." },
          { left: "Si hay niebla en la cima,", right: "no vemos el cráter." },
          { left: "Si llega un paquete,", right: "la vecina lo recoge." },
        ],
        why: "Todas son condiciones reales con **si** + presente y una consecuencia en presente.",
      },
      {
        id: "v2",
        type: "context",
        title: "¿Qué favor pides?",
        prompt: "Lee la situación y elige la petición adecuada.",
        items: [
          { context: "Te vas tres días y tienes macetas en el balcón.", q: "Le dices a tu vecina:", options: ["¿Te importaría regarme las plantas?", "¿Te importaría sacar la basura?", "¿Podrías echar el termo?"], answer: 0, why: "Macetas → **regar las plantas**." },
          { context: "Esperas una compra por internet y no vas a estar en casa.", q: "Le dices al portero:", options: ["¿Le importaría darle de comer al gato?", "¿Podría recogerme un paquete?", "¿Podría guardar el cráter?"], answer: 1, why: "Una compra que llega: **recoger un paquete**." },
          { context: "Tu amigo organiza una excursión y quieres ir.", q: "Le dices:", options: ["Me gustaría echar un vistazo.", "Quería sacar la basura.", "Me gustaría apuntarme."], answer: 2, why: "Unirte a un plan: **apuntarse**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Una petición amable sube al final",
    explanation: [
      "Una petición suave se dice como una pregunta: la voz **sube al final** (_¿Podrías ayudarme? ↗_). Si la dices bajando, suena a orden.",
      "La fuerza de _podrías_ está en la **í** (_po-DRÍ-as_) y la de _importaría_ también (_im-por-ta-RÍ-a_): son dos vocales separadas, no una sola sílaba.",
      "**Si** de condición es débil y se une a la palabra siguiente (_si-llueve_). **Sí** de respuesta tiene fuerza propia y puede ir sola. Esa fuerza es la tilde que escribes.",
    ],
    support: [
      "A soft request rises at the end like a question; falling sounds like an order. Stress the í in _podrías_ and _importaría_. Conditional _si_ is weak; _sí_ (yes) is stressed.",
    ],
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Si o sí?",
      prompt: "Escucha y elige qué palabra oyes.",
      items: [
        { q: "¿Qué oyes?", audio: "Sí, mañana voy.", options: ["si (condición)", "sí (respuesta)"], answer: 1 },
        { q: "¿Qué oyes?", audio: "Si mañana voy, te aviso.", options: ["si (condición)", "sí (respuesta)"], answer: 0 },
        { q: "¿Qué oyes?", audio: "Yo sí puedo ir.", options: ["si (condición)", "sí (afirmación con fuerza)"], answer: 1 },
        { q: "¿Qué oyes?", audio: "Si puedes, ven temprano.", options: ["sí (respuesta)", "si (condición)"], answer: 1 },
      ],
    },
    produce: [
      { text: "¿Podrías ayudarme con la mochila?", tip: "Fuerza en _drí_ y la voz sube al final." },
      { text: "¿Le importaría guardarme la llave?", tip: "_im-por-ta-RÍ-a_: cuatro sílabas antes de la última." },
      { text: "Si llueve, nos quedamos en casa.", tip: "_Si_ débil, unido a _llueve_." },
      { text: "—¿Vienes? —Sí, si no trabajo.", tip: "Primero _sí_ fuerte, después _si_ débil." },
    ],
    spelling: "**Sí** lleva tilde cuando es respuesta o afirmación (_sí, yo sí_). **Si** sin tilde es la condición (_si quieres_). _Podrías_ e _importaría_ llevan tilde en la **í** porque esa vocal es la fuerte.",
  },
  listening: {
    title: "Un mensaje antes del Irazú",
    context: "Mariana vive en Cartago. El sábado se va de excursión al volcán Irazú con un grupo y le deja un mensaje de voz a su vecina Andrea para pedirle algunos favores.",
    speakers: [
      { id: "mariana", name: "Mariana", voice: "es-MX-f", role: "vecina que se va de excursión" },
    ],
    script: [
      { speaker: "mariana", text: "Hola, Andrea, soy Mariana, la del segundo piso. Perdona la hora, ya sé que es viernes por la noche, pero quería pedirte un par de favores." },
      { speaker: "mariana", text: "Mañana salgo muy temprano al Irazú. Si hace buen tiempo, volvemos el domingo por la tarde; si hay niebla, el guía cambia el plan y dormimos en Cartago, así que regreso el lunes." },
      { speaker: "mariana", text: "Primero: ¿te importaría darle de comer a Canela, mi gata? La comida está en el armario de la cocina. Si no quiere comer, no te preocupes; es normal cuando no estoy." },
      { speaker: "mariana", text: "Segundo: el sábado llega un paquete. ¿Podrías recogerlo tú? El repartidor llama al timbre; si no contesta nadie, lo deja en la farmacia de la esquina." },
      { speaker: "mariana", text: "Ah, y una cosa más: don Ernesto, el del tercero, tiene una copia de mi llave. Si necesitas entrar, pídesela a él." },
      { speaker: "mariana", text: "Si no puedes, de verdad, dímelo sin problema y busco otra solución. Me gustaría invitarte a cenar la semana que viene para darte las gracias. ¡Un beso!" },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo una vez y busca la idea general.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿Para qué llama Mariana a Andrea?", options: ["para invitarla al volcán", "para pedirle favores", "para quejarse de un ruido"], answer: 1 },
            { q: "¿Adónde va Mariana el sábado?", options: ["al volcán Irazú", "a la playa", "a San José"], answer: 0 },
            { q: "¿Cómo termina el mensaje?", options: ["con una queja", "con una pregunta sobre la gata", "con una invitación a cenar"], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a lo que pasa en cada caso.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Cuándo vuelve Mariana si hay niebla?", options: ["el domingo por la tarde", "el sábado por la noche", "el lunes"], answer: 2 },
            { q: "¿Dónde está la comida de la gata?", options: ["en el armario de la cocina", "en la farmacia", "en el tercer piso"], answer: 0 },
            { q: "¿Qué pasa con el paquete si nadie contesta?", options: ["Vuelve a la tienda.", "Lo dejan en la farmacia.", "Se lo dan a don Ernesto."], answer: 1 },
            { q: "¿Quién tiene una copia de la llave?", options: ["el repartidor", "el guía", "don Ernesto"], answer: 2 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en las condiciones y en las peticiones.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué es cada frase?",
          categories: ["condición con si + presente", "petición o deseo amable"],
          items: [
            { text: "quería pedirte un par de favores", cat: 1, why: "Imperfecto de cortesía: habla de ahora." },
            { text: "si hay niebla, el guía cambia el plan", cat: 0, why: "**Si** + presente, consecuencia en presente." },
            { text: "¿te importaría darle de comer a Canela?", cat: 1 },
            { text: "Si necesitas entrar, pídesela a él.", cat: 0, why: "Consecuencia en imperativo." },
            { text: "¿Podrías recogerlo tú?", cat: 1 },
            { text: "Me gustaría invitarte a cenar", cat: 1, why: "**Me gustaría** + infinitivo: deseo cortés." },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Plan para el sábado: Irazú",
    genre: "Mensaje de un grupo de excursiones",
    frame: "Gerardo organiza las salidas de un club de senderismo de Cartago y escribe al grupo el jueves.",
    text: [
      "¡Buenas, gente! Ya somos once para el Irazú. Salimos el sábado a las seis de la mañana desde la plaza de la basílica. Si llegan tarde, no los esperamos más de diez minutos, porque el parque se llena rápido.",
      "Plan A: si amanece despejado, subimos directo al cráter principal y después caminamos hasta el mirador. Plan B: si hay niebla arriba, no vale la pena subir, así que visitamos las ruinas de Cartago y el mercado, y desayunamos allí. Les escribo a las cinco con la decisión.",
      "Tengo algunas peticiones. Sofía, ¿podrías traer el botiquín del club? Don Álvaro, ¿le importaría llevar a dos personas en su carro? Si no puede, me avisa y buscamos otra opción. Y a todos, me gustaría pedirles una cosa: traigan su propia botella de agua, porque en el parque no se venden botellas de plástico.",
      "Arriba hace frío, también cuando hay sol abajo. Si alguien no tiene chaqueta, me escribe y le presto una. ¡Nos vemos el sábado!",
    ],
    glossary: [
      { es: "no vale la pena", en: "it's not worth it" },
      { es: "el botiquín", en: "the first-aid kit" },
      { es: "me avisa", en: "let me know (usted)" },
      { es: "directo", en: "straight" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee el mensaje y responde.",
        items: [
          { q: "¿Cuánto tiempo espera el grupo a quien llega tarde?", options: ["media hora", "no más de diez minutos", "no espera nada"], answer: 1 },
          { q: "¿Qué hacen si hay niebla arriba?", options: ["Suben igual al cráter.", "Se quedan en la plaza.", "Visitan las ruinas y el mercado."], answer: 2 },
          { q: "¿Qué le pide Gerardo a don Álvaro?", options: ["que lleve a dos personas en su carro", "que traiga el botiquín", "que compre botellas de agua"], answer: 0 },
          { q: "¿Por qué hay que traer una botella propia?", options: ["porque el agua del parque es cara", "porque en el parque no se venden botellas de plástico", "porque Gerardo no tiene agua"], answer: 1 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Es una condición o una petición?",
        categories: ["condición (si…)", "petición amable"],
        items: [
          { text: "Si llegan tarde, no los esperamos", cat: 0 },
          { text: "Sofía, ¿podrías traer el botiquín del club?", cat: 1 },
          { text: "si amanece despejado, subimos directo al cráter", cat: 0 },
          { text: "Don Álvaro, ¿le importaría llevar a dos personas?", cat: 1, why: "Con usted: **le** importaría." },
          { text: "me gustaría pedirles una cosa", cat: 1 },
          { text: "Si alguien no tiene chaqueta", cat: 0 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase del mensaje para ver qué gramática hay dentro.",
      items: [
        { quote: "Si llegan tarde, no los esperamos", note: "**Si** + presente y consecuencia en presente. Nada de futuro después de _si_." },
        { quote: "si hay niebla arriba, no vale la pena subir", note: "El plan B depende de una condición real y posible." },
        { quote: "Sofía, ¿podrías traer el botiquín del club?", note: "Con tú: **podrías** + infinitivo." },
        { quote: "Don Álvaro, ¿le importaría llevar a dos personas en su carro?", note: "Con usted: **le importaría** + infinitivo. _Su carro_ también es usted." },
        { quote: "Si no puede, me avisa", note: "Gerardo deja una salida fácil: así la petición no impone." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: condiciones con si y peticiones amables.",
    exercises: [
      {
        id: "x1",
        type: "error",
        title: "Corrige los mensajes",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Si saldremos temprano, llegamos al cráter antes de las nueve.", answers: ["Si salimos temprano, llegamos al cráter antes de las nueve."], why: "Después de **si**, presente: _salimos_." },
          { sentence: "¿Podrías de llamarme esta noche?", answers: ["¿Podrías llamarme esta noche?"], why: "_Podrías_ + infinitivo, sin **de**." },
          { sentence: "Señora Mora, ¿te importaría abrirle al técnico?", answers: ["Señora Mora, ¿le importaría abrirle al técnico?"], why: "A la señora Mora la tratas de usted: **le** importaría." },
          { sentence: "Sí no te gusta el plan, dímelo.", answers: ["Si no te gusta el plan, dímelo."], why: "Condición: **si** sin tilde." },
          { sentence: "Yo me gustaría probar el café de la zona.", answers: ["Me gustaría probar el café de la zona."], why: "Como _gustar_: sin _yo_." },
        ],
      },
      {
        id: "x2",
        type: "order",
        title: "Frases para organizarse",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["Si", "hay", "niebla,", "visitamos", "las", "ruinas."], en: "If there's fog, we'll visit the ruins." },
          { words: ["¿Te", "importaría", "regarme", "las", "plantas", "el", "fin", "de", "semana?"], en: "Would you mind watering my plants at the weekend?" },
          { words: ["Lo", "siento,", "es", "que", "el", "sábado", "trabajo."], en: "I'm sorry, it's just that I work on Saturday." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué respondes?",
        prompt: "Lee la situación y elige la mejor respuesta.",
        items: [
          { context: "Tu compañero de piso te pregunta: «¿Te importaría bajar la música?». No te molesta bajarla.", q: "Respondes:", options: ["Sí, me importaría.", "No, claro que no.", "Sí, claro que no."], answer: 1, why: "Para aceptar con _importaría_: **no, claro que no**." },
          { context: "Una vecina mayor te pide ayuda el domingo, pero ese día viajas.", q: "Le dices:", options: ["No puedo.", "Lo siento, es que viajo el domingo; si quiere, la ayudo el lunes.", "No, claro que no."], answer: 1, why: "Rechazo cortés: **lo siento, es que…** + alternativa con _si_." },
          { context: "En la oficina de turismo quieres información sobre el tren.", q: "Empiezas así:", options: ["Quería preguntar por el horario del tren.", "Quise preguntar por el horario del tren.", "Querré preguntar por el horario del tren."], answer: 0, why: "Imperfecto de cortesía: **quería**." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases sobre tus planes. Después compara con el modelo.",
        items: [
          {
            prompt: "Escribe tu plan para el próximo domingo con un plan A y un plan B que dependen del tiempo.",
            model: "Si hace sol el domingo, voy en bicicleta al lago con mi hermana. Si llueve, nos quedamos en casa y vemos una película; si no, vamos al cine del centro.",
            checklist: ["**Si** + presente en cada condición", "Consecuencia en presente", "Usas _si no_ para la otra opción"],
          },
          {
            prompt: "Pide dos favores: uno a un amigo (tú) y otro a una vecina mayor (usted).",
            model: "Pablo, ¿podrías prestarme tu tienda de campaña este fin de semana? Señora Elena, ¿le importaría recoger mi correo mientras estoy fuera?",
            checklist: ["**Podrías / te importaría** con tú", "**Podría / le importaría** con usted", "Infinitivo sin preposición"],
          },
          {
            prompt: "Rechaza una petición con cortesía y ofrece otra solución con si.",
            model: "Lo siento mucho, es que el sábado tengo un examen. Si quieres, te ayudo con la mudanza el domingo por la mañana.",
            checklist: ["Empiezas con **Lo siento, es que…**", "Das una razón", "Ofreces una alternativa con **si**"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje a un vecino o a una vecina para pedirle dos o tres favores mientras estás de viaje.",
    context: "Te vas de excursión el fin de semana y el plan puede cambiar según el tiempo. Tienes plantas, un animal o un paquete que llega. Escribe a una persona del edificio.",
    steps: [
      "Saluda y empieza con una fórmula suave (quería pedirte / pedirle…).",
      "Explica tu plan y qué pasa en cada caso con **si** + presente.",
      "Pide dos o tres favores con **¿podrías…?**, **¿te importaría…?** o **¿me harías el favor de…?** (o sus formas con usted).",
      "Deja una salida fácil (si no puedes…) y agradece con **me gustaría** + una invitación.",
      "Revisa: ¿hay algún futuro después de _si_? ¿Mezclaste tú y usted? ¿El infinitivo va sin preposición?",
    ],
    useLanguage: ["Quería pedirte un favor.", "Si…, vuelvo…", "¿Te importaría…?", "¿Podrías…?", "Si no puedes, dímelo.", "Me gustaría invitarte…"],
    model: [
      "Hola, Daniel: quería pedirte un favor. Este fin de semana me voy a Monteverde con unos amigos. Si no llueve, volvemos el domingo; si hay tormenta, nos quedamos una noche más. ¿Te importaría regar las plantas del balcón el sábado? La llave está en la portería. Además, el sábado llega un paquete de una librería. ¿Podrías recogerlo, si estás en casa? Si no puedes, dímelo sin problema y le pregunto a otra vecina. Me gustaría invitarte a un café a mi vuelta. ¡Mil gracias!",
    ],
    checklist: [
      "Usas **si** + presente para explicar qué pasa en cada caso.",
      "Pides con **podrías / te importaría / el favor de** + infinitivo.",
      "Usas siempre tú o siempre usted con la misma persona.",
      "Dejas una salida fácil y das las gracias.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Cuida que la voz suba al final de cada petición.",
    tasks: [
      {
        title: "El plan del sábado",
        prompt: "Propón a un amigo un plan para el sábado con dos opciones según el tiempo y una tercera si alguien no puede.",
        prep: ["Si hace sol, …", "Si llueve, …", "Si no puedes por la mañana, …"],
        seconds: 60,
        model: "Te propongo un plan para el sábado. Si hace sol, vamos temprano al Irazú y comemos en Cartago. Si llueve, vamos al Museo del Jade en San José y después a tomar algo. Y si no puedes por la mañana, salimos a las dos y vamos solo al mercado. ¿Qué te parece?",
        selfCheck: ["Uso **si** + presente, nunca futuro.", "Hay al menos dos condiciones distintas."],
      },
      {
        title: "Dos favores, dos personas",
        prompt: "Te vas una semana. Pide un favor a tu mejor amiga y otro a un vecino mayor que tratas de usted.",
        prep: ["Oye, ¿podrías…?", "¿Te importaría…?", "Don…, quería pedirle…", "¿Le importaría…?"],
        seconds: 65,
        selfCheck: ["Cambio bien de tú a usted.", "Mi voz sube al final de cada petición."],
      },
      {
        title: "Lo siento, es que…",
        prompt: "Un compañero de trabajo te pide un favor: trabajar en su lugar el sábado. No puedes: explícale por qué y ofrece otra solución.",
        prep: ["Lo siento mucho, es que…", "Si quieres, …", "¿Te parece bien?"],
        seconds: 55,
        selfCheck: ["Rechazo con una razón, sin decir solo _no_.", "Ofrezco una alternativa con **si**."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Pide con suavidad", task: "Pide a tu profesor dos cosas durante la clase con una fórmula amable.", phrases: ["¿Podrías repetir…?", "¿Te importaría escribir…?"] },
      { move: "Propón planes", task: "Propón una actividad para la próxima clase con una alternativa.", phrases: ["Si tenemos tiempo, …", "Si no, …"] },
      { move: "Rechaza con cortesía", task: "Tu profesor te propone algo y respondes que no, con una razón y otra idea.", phrases: ["Lo siento, es que…", "Si quieres, …"] },
      { move: "Empieza con quería", task: "Empieza la clase con una pregunta que tengas usando el imperfecto de cortesía.", phrases: ["Quería preguntarte…", "Me gustaría saber…"] },
    ],
    bring: "Trae una lista de tres favores que necesitas esta semana y prepárate para pedirlos con fórmulas distintas.",
  },
  quiz: {
    items: [
      { type: "gap", q: "Si mañana ___ el volcán despejado, hacemos fotos desde el mirador. (estar)", answers: [["está"]], why: "Después de _si_, presente: **está**." },
      { type: "choice", q: "Para aceptar «¿Te importaría prestarme tu paraguas?», dices:", options: ["Sí, me importaría.", "No, para nada.", "Sí, para nada."], answer: 1, why: "_Importar_ = molestar. Aceptas con **no**." },
      { type: "gap", q: "Señor Quesada, ¿___ cerrar la puerta del jardín al salir? (poder, cortés)", answers: [["podría"]], why: "Con usted: **podría**." },
      { type: "transform", source: "Ayúdame con estas cajas.", instruction: "Pídelo con **¿Me harías el favor de…?**", answers: ["¿Me harías el favor de ayudarme con estas cajas?"], why: "**El favor de** + infinitivo con pronombre pegado." },
      { type: "error", sentence: "Si llegarás antes, guárdame un sitio.", answers: ["Si llegas antes, guárdame un sitio."], why: "Después de **si**, presente: _llegas_." },
      { type: "error", sentence: "—¿Te importaría esperar un momento? —Sí, claro, espero.", answers: ["—¿Te importaría esperar un momento? —No, claro, espero.", "—¿Te importaría esperar un momento? —No, claro que no, espero."], why: "Para aceptar con _importaría_: **no**." },
      { type: "listen", q: "¿Qué palabra oyes al principio del mensaje de Laura?", audio: "Sí, Laura, el domingo vamos.", options: ["si (condición)", "sí (respuesta)"], answer: 1 },
      { type: "order", words: ["Si", "te", "cansas", "en", "la", "subida,", "descansa", "un", "poco."] },
      { type: "choice", q: "¿Qué frase expresa un deseo de ahora con cortesía?", options: ["Me gustaba reservar una mesa.", "Yo gustaría reservar una mesa.", "Me gustaría reservar una mesa."], answer: 2, why: "**Me gustaría** + infinitivo." },
      { type: "open", prompt: "Escribe tres frases: un plan con si y si no, un favor con le importaría y un rechazo cortés.", model: "Si el sábado hace sol, vamos a la playa; si no, vamos al cine. Señora Ruiz, ¿le importaría recoger mi correo? Lo siento, es que esta tarde no puedo, pero si quieres, te llamo mañana.", checklist: ["Si + presente y si no", "Le importaría + infinitivo", "Lo siento, es que…"] },
    ],
  },
  complete: {
    canNow: [
      "Hacer planes con alternativas con **si** + presente y una consecuencia en presente o imperativo.",
      "Evitar el futuro después de _si_.",
      "Distinguir **si**, **sí** y **cuando**.",
      "Pedir favores con **¿podrías…?, ¿te importaría…?, ¿me harías el favor de…?** y sus formas con usted.",
      "Expresar un deseo cortés con **me gustaría** y empezar con **quería pedirte…**",
      "Aceptar con _no, claro que no_ y rechazar con _lo siento, es que…_",
    ],
    review: ["Si llueve, vamos al museo (nunca _si lloverá_).", "¿Podrías ayudarme? / ¿Le importaría ayudarme?", "—¿Te importaría…? —No, claro que no."],
  },
  related: [
    { path: "/si-pasa-esto", label: "Clase: Si + presente: condiciones reales" },
    { path: "/gramatica/preguntar-sin-imponer-podrias-te-importaria", label: "Clase: Preguntar sin imponer: podrías, te importaría" },
  ],
};
