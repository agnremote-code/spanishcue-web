import type { Module } from "../../types";

export const a1w20: Module = {
  id: "a1-20",
  level: "a1",
  week: 20,
  kind: "checkpoint",
  title: "Checkpoint final A1: en el Canal de Panamá",
  subtitle: "Repaso del orden de la frase (afirmación, pregunta y negación) y de cómo describir un lugar y pedir información, junto con todo lo de las semanas 16 a 19. Con esta semana cierras el A1.",
  stop: { place: "Canal de Panamá", country: "Panamá" },
  minutes: 80,
  newObjectives: [
    "a1.gram.g043",
    "a1.gram.g044",
    "a1.rev.w20-semanas-16-20",
    "a1.voc.w20-canal-informacion",
    "a1.pron.w20-tres-tipos-de-frase",
    "a1.lis.w20-centro-visitantes",
    "a1.read.w20-guia-miraflores",
    "a1.wri.w20-correo-presentacion",
    "a1.spk.w20-describir-preguntar",
    "a1.fun.w20-describir-pedir-informacion",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes construir frases claras para afirmar, preguntar y negar, describir un lugar con ser, hay y estar, pedir la información que necesitas y usar juntas las clases de las semanas 16 a 19. Es el cierre del A1.",
    canDoEn: "By the end of this week, you can build clear sentences to state, ask and deny, describe a place with ser, hay and estar, ask for the information you need and use the classes from weeks 16 to 19 together. It's the end of A1.",
    steps: [
      "Ordena la frase: quién, qué hace, qué, cuándo o dónde.",
      "Pregunta con `qué`, `quién`, `cuándo` + verbo y pon `no` justo antes del verbo.",
      "Describe un lugar con `es`, `hay` y `está` y prepara tus preguntas útiles.",
      "Repasa las semanas 16 a 19: cantidades, cuerpo y ropa, pistas, comparación, hora, planes, obligaciones, estar + gerundio y lo, la, los, las.",
      "Escucha a una turista en el centro de visitantes del Canal de Panamá.",
      "Escribe un correo de presentación para cerrar el A1 y descríbete en voz alta.",
    ],
  },
  theory: {
    intro: "Este es el último checkpoint del A1. Repasas dos clases que juntan todo lo que sabes: el **orden de la frase** para afirmar, preguntar y negar, y la **microproducción**: describir un lugar y pedir información. Además, usas juntas las clases de las semanas 16 a 19. Lo practicas en las esclusas de Miraflores, en el Canal de Panamá.",
    parts: [
      {
        heading: "Quién, qué hace, qué, cuándo: el orden de la frase",
        body: [
          "La frase normal sigue este orden: **quién** (sujeto) + **verbo** + **qué** + **cuándo** o **dónde**: _El barco cruza el canal esta tarde_. Muchas veces no dices el sujeto, porque el verbo ya lo dice: _Cruzamos el canal mañana_.",
          "El **cuándo** puede ir al principio o al final sin cambiar el sentido: _Esta tarde el barco cruza el canal_. Pero con dos personas, el orden decide quién hace la acción: _Rosa llama a Iván_ no es lo mismo que _Iván llama a Rosa_.",
          "Para **negar**, pon **no** justo antes del verbo: _El museo no abre los lunes_. Si hay lo, la, los, las, **no** va antes del pronombre: _No lo veo_.",
        ],
        support: [
          "Basic order: who + verb + what + when / where. The time can move; the people can't.",
          "_No_ goes right before the verb (or before _lo, la, los, las_).",
        ],
        table: {
          caption: "Cada pieza responde a una pregunta",
          head: ["¿Quién?", "¿Qué hace?", "¿Qué?", "¿Cuándo? ¿Dónde?"],
          rows: [
            ["El barco", "cruza", "el canal", "esta tarde"],
            ["Mis padres", "visitan", "el museo", "el sábado"],
            ["(Yo)", "no compro", "las entradas", "en la taquilla"],
          ],
        },
        examples: [
          { es: "Los turistas hacen fotos desde la terraza.", en: "The tourists take photos from the terrace." },
          { es: "Hoy el restaurante no sirve almuerzo.", en: "Today the restaurant isn't serving lunch." },
        ],
        mistakes: [
          { wrong: "El museo abre no los lunes.", right: "El museo no abre los lunes.", why: "**No** va justo **antes** del verbo." },
          { wrong: "Lo no tengo.", right: "No lo tengo.", why: "**No** va antes del pronombre: _no lo tengo_." },
        ],
      },
      {
        heading: "Preguntar: sí o no, o una información",
        body: [
          "Para una pregunta de **sí o no**, usas el orden normal con **¿ ?** y la voz sube al final: _¿El barco cruza hoy?_",
          "Para buscar una **información**, la palabra de pregunta va primero y el **verbo justo después**: _¿Qué ve la gente?_, _¿Cuándo llega el barco?_, _¿Quién vende las entradas?_ En español no hay una palabra como _does_: nunca _¿Qué la gente ve?_",
          "Con **quién** el verbo va en singular: _¿Quién quiere un café?_ Y si la respuesta es no, dices **no** dos veces: _—¿Hay ascensor? —No, no hay_.",
        ],
        support: [
          "Yes/no question: normal order + rising voice. Information question: question word + verb + subject (_¿Qué ve la gente?_). There is no _does_ in Spanish.",
        ],
        table: {
          caption: "De la afirmación a la pregunta",
          head: ["Afirmación", "Pregunta de sí o no", "Pregunta de información"],
          rows: [
            ["El barco llega a las dos.", "¿El barco llega a las dos?", "¿Cuándo llega el barco?"],
            ["Ana compra las entradas.", "¿Ana compra las entradas?", "¿Quién compra las entradas?"],
            ["Los niños ven una película.", "¿Los niños ven una película?", "¿Qué ven los niños?"],
          ],
        },
        examples: [
          { es: "¿Dónde compran las entradas los grupos?", en: "Where do groups buy their tickets?" },
          { es: "—¿Tiene el museo audioguía? —No, no tiene.", en: "Does the museum have an audio guide? No, it doesn't." },
        ],
        mistakes: [
          { wrong: "¿Cuándo el barco llega?", right: "¿Cuándo llega el barco?", why: "Después de la palabra de pregunta va el **verbo**." },
          { wrong: "¿Quién tienen las llaves?", right: "¿Quién tiene las llaves?", why: "Con **quién**, verbo en singular." },
        ],
        tip: "Antes de preguntar, piensa: ¿espero un sí o un no, o necesito un dato (una hora, un lugar, un nombre)?",
      },
      {
        heading: "Describir un lugar y pedir información: es, hay, está",
        body: [
          "Para describir un lugar, juntas tres verbos: **ser** para decir qué es o cómo es (_El centro es moderno_), **hay** para presentar algo nuevo o decir cuántas cosas hay (_Hay un museo y cuatro terrazas_) y **estar** para decir dónde está algo concreto (_El museo está en la planta baja_).",
          "Un buen orden: primero **qué es** el lugar, después **qué hay**, después **dónde está** cada cosa. Así la otra persona se hace una imagen clara.",
          "Para pedir información, prepara un pequeño kit de preguntas: _¿Qué es esto?_ _¿Hay…?_ _¿Cuántos… hay?_ _¿Dónde está…?_ _¿Cómo es…?_ _¿A qué hora…?_ Con una cosa no concreta también puedes decir _¿Dónde hay un baño?_",
        ],
        support: [
          "_Ser_ = what it is / what it's like; _hay_ = there is / there are (new things, how many); _estar_ = where a specific thing is.",
          "A good description goes: what the place is, what there is, where things are.",
        ],
        table: {
          caption: "Tres verbos, tres preguntas",
          head: ["Pregunta", "Verbo", "Ejemplo"],
          rows: [
            ["¿Qué es? ¿Cómo es?", "es / son", "Es un centro de visitantes. Es grande y moderno."],
            ["¿Qué hay? ¿Cuántos hay?", "hay", "Hay un cine pequeño y tres terrazas."],
            ["¿Dónde está? ¿Dónde están?", "está / están", "El cine está en la segunda planta."],
          ],
        },
        examples: [
          { es: "—¿Hay una cafetería? —Sí, está al lado de la tienda.", en: "Is there a café? Yes, it's next to the shop." },
          { es: "Mi barrio es tranquilo. Hay un parque y dos panaderías. El parque está enfrente de mi casa.", en: "My neighbourhood is quiet. There's a park and two bakeries. The park is opposite my house." },
        ],
        mistakes: [
          { wrong: "Hay la cafetería en la tercera planta.", right: "La cafetería está en la tercera planta.", why: "Con **la** (algo concreto), **está**. _Hay_ va con _un, una_, números o plurales sin artículo." },
          { wrong: "¿Dónde es el baño?", right: "¿Dónde está el baño?", why: "Para el lugar de algo concreto, **estar**." },
        ],
      },
      {
        heading: "Repaso: las semanas 16 a 19",
        body: [
          "**Semana 16.** Dices cuánto con números, envases y medidas (_dos latas de atún_), con **poco, mucho, bastante** y con **todo** + artículo. Con el cuerpo y la ropa usas el artículo: _me duele la espalda_, _me pongo el impermeable_.",
          "**Semana 17.** Identificas un objeto pista a pista (_la mochila negra que está en la caja_, _la negra_) y comparas con **más … que**, **menos … que** y **tan … como**.",
          "**Semana 18.** Dices la hora (_son las tres_, _a las tres_), el día y la fecha (_el sábado 14 de marzo_), tus planes con **ir a + infinitivo** y lo que **quieres, puedes o tienes que** hacer.",
          "**Semana 19.** Cuentas lo que está pasando con **estar + gerundio** (_están cruzando_) y no repites los nombres con **lo, la, los, las** (_la tengo_, _lo está grabando_).",
        ],
        support: [
          "This checkpoint brings together weeks 16 to 19. Use the table to check which class each idea comes from.",
        ],
        table: {
          caption: "Las clases de las semanas 16 a 19",
          head: ["Clase", "Idea clave", "Ejemplo en el canal"],
          rows: [
            ["Números y cantidades", "envase + de · poco, mucho, todo el", "Compro dos botellas de agua para todo el día."],
            ["Artículos con cuerpo y ropa", "me duele la… · me pongo el…", "Me pongo la gorra: hace mucho sol."],
            ["Describir un objeto con pistas", "nombre + adjetivo + que está…", "Es la mochila azul que está en el banco."],
            ["Comparativos", "más / menos … que · tan … como", "Este barco es más grande que el otro."],
            ["La hora, el día y la fecha", "son las · a las · el 14 de…", "El barco pasa a las dos y cuarto."],
            ["Ir a + infinitivo", "voy a + infinitivo", "Vamos a ver la película del canal."],
            ["Querer, poder, tener que", "quiero / puedo / tengo que + infinitivo", "Tenemos que comprar la entrada antes."],
            ["Estar + gerundio", "estar + -ando / -iendo", "Ahora el barco está subiendo."],
            ["Lo, la, los, las", "pronombre + verbo", "¿El barco? Lo estoy grabando."],
          ],
        },
        examples: [
          { es: "Son las dos y un barco enorme está entrando en la esclusa. ¡Lo estamos viendo desde la terraza!", en: "It's two o'clock and an enormous ship is entering the lock. We're watching it from the terrace!" },
          { es: "Tengo que comprar más agua: hay poca y hace mucho calor.", en: "I have to buy more water: there's not much left and it's very hot." },
        ],
        mistakes: [
          { wrong: "Me duele mi cabeza por el sol.", right: "Me duele la cabeza por el sol.", why: "Semana 16: con **me duele**, artículo." },
          { wrong: "Este barco es más largo como el otro.", right: "Este barco es más largo que el otro.", why: "Semana 17: más … **que**." },
          { wrong: "¿La cámara? Estoy la usando.", right: "¿La cámara? La estoy usando.", why: "Semana 19: el pronombre va **antes** de estar." },
        ],
        tip: "Con esta semana terminas el A1. Mira la tabla y marca las tres clases que te parecen más difíciles: repásalas antes de empezar el A2.",
      },
    ],
  },
  grammar: {
    intro: "Primero el orden de la frase, la pregunta y la negación; después, la descripción con es, hay y está.",
    exercises: [
      {
        id: "g1",
        type: "order",
        title: "El orden de la frase",
        prompt: "Toca las palabras en orden. Empieza por quién hace la acción.",
        items: [
          { words: ["Los", "turistas", "miran", "los", "barcos", "desde", "la", "terraza."], en: "The tourists watch the ships from the terrace." },
          { words: ["Mi", "hermana", "no", "visita", "el", "museo", "hoy."], alt: ["Hoy mi hermana no visita el museo."], en: "My sister isn't visiting the museum today." },
          { words: ["¿Cuándo", "abre", "la", "taquilla?"], en: "When does the ticket office open?" },
        ],
      },
      {
        id: "g2",
        type: "transform",
        title: "Pregunta por el dato",
        prompt: "Escribe la pregunta para el dato entre paréntesis.",
        items: [
          { source: "El barco llega a las tres. (a las tres)", instruction: "Pregunta con cuándo o a qué hora.", answers: ["¿Cuándo llega el barco?", "¿A qué hora llega el barco?"], why: "Palabra de pregunta + **verbo** + sujeto." },
          { source: "Mateo vende las entradas. (Mateo)", instruction: "Pregunta con quién.", answers: ["¿Quién vende las entradas?"], why: "**Quién** + verbo en singular." },
          { source: "Los niños ven una película. (una película)", instruction: "Pregunta con qué.", answers: ["¿Qué ven los niños?"], why: "**Qué** + verbo + sujeto: _¿Qué ven los niños?_" },
        ],
      },
      {
        id: "g3",
        type: "error",
        title: "La negación en su sitio",
        prompt: "Cada frase tiene un error de orden. Escríbela bien.",
        items: [
          { sentence: "La tienda cierra no a las cinco.", answers: ["La tienda no cierra a las cinco."], why: "**No** justo antes del verbo." },
          { sentence: "¿Las entradas? Las no tengo.", answers: ["¿Las entradas? No las tengo."], why: "**No** antes del pronombre." },
          { sentence: "¿Qué tu hermano quiere?", answers: ["¿Qué quiere tu hermano?"], why: "Después de **qué**, el verbo." },
        ],
      },
      {
        id: "g4",
        type: "choice",
        title: "Es, hay o está",
        prompt: "Elige el verbo correcto para describir el centro de visitantes.",
        items: [
          { q: "El centro de visitantes ___ moderno y tiene cuatro plantas.", options: ["está", "es", "hay"], answer: 1, why: "Cómo es: **ser**." },
          { q: "En la primera planta ___ un museo pequeño.", options: ["hay", "está", "es"], answer: 0, why: "Algo nuevo con _un_: **hay**." },
          { q: "La terraza para ver los barcos ___ en la cuarta planta.", options: ["hay", "es", "está"], answer: 2, why: "Lugar de algo concreto: **está**." },
          { q: "—¿___ un baño en esta planta? —Sí, al final del pasillo.", options: ["Hay", "Está", "Es"], answer: 0, why: "Preguntas si existe: **¿Hay…?**" },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras del Canal de Panamá y de un centro de visitantes, y un kit de preguntas para pedir información en cualquier lugar.",
    groups: [
      {
        title: "El canal",
        items: [
          { es: "la esclusa", en: "the lock" },
          { es: "el barco / el buque", en: "the ship" },
          { es: "cruzar el canal", en: "to go through the canal" },
          { es: "subir / bajar", en: "to go up / to go down" },
          { es: "el agua dulce", en: "fresh water" },
          { es: "el océano Pacífico / el mar Caribe", en: "the Pacific Ocean / the Caribbean Sea" },
        ],
      },
      {
        title: "En el centro de visitantes",
        items: [
          { es: "la taquilla", en: "the ticket office" },
          { es: "la entrada", en: "the ticket; the entrance" },
          { es: "la planta", en: "the floor (of a building)" },
          { es: "la terraza de observación", en: "the viewing terrace" },
          { es: "el ascensor", en: "the lift" },
          { es: "la audioguía", en: "the audio guide" },
        ],
      },
      {
        title: "Preguntas útiles",
        items: [
          { es: "¿Qué es esto?", en: "What is this?" },
          { es: "¿Hay…?", en: "Is there…? / Are there…?" },
          { es: "¿Dónde está…?", en: "Where is…?" },
          { es: "¿Cuánto cuesta…?", en: "How much is…?" },
          { es: "¿A qué hora…?", en: "What time…?" },
          { es: "¿Se puede…?", en: "Can you… / Is it allowed to…?" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "Pregunta y respuesta",
        prompt: "Une cada pregunta con su respuesta.",
        pairs: [
          { left: "¿Qué es esto?", right: "Es una maqueta del canal." },
          { left: "¿Hay ascensor?", right: "Sí, al lado de la escalera." },
          { left: "¿Dónde está la taquilla?", right: "Está en la entrada, a la derecha." },
          { left: "¿Cuánto cuesta la entrada?", right: "Veinte dólares para adultos." },
          { left: "¿A qué hora pasa el próximo barco?", right: "A las tres y media, más o menos." },
        ],
        why: "Cada pregunta pide un dato distinto: qué es, si existe, dónde está, cuánto cuesta, a qué hora.",
      },
      {
        id: "v2",
        type: "context",
        title: "En el canal",
        prompt: "Lee la situación y elige la frase natural.",
        items: [
          { context: "Quieres saber si es posible hacer fotos en el museo.", q: "Preguntas:", options: ["¿Se puede hacer fotos en el museo?", "¿Dónde es el museo?", "¿Hay fotos el museo?"], answer: 0, why: "Para preguntar si algo está permitido: **¿Se puede…?**" },
          { context: "Un barco está en la esclusa y el agua sube poco a poco.", q: "Dices:", options: ["El barco está bajando.", "El barco está subiendo.", "El barco sube los lunes."], answer: 1, why: "El agua sube y ahora mismo: **está subiendo**." },
          { context: "Necesitas el baño y no sabes si hay uno en esta planta.", q: "Preguntas:", options: ["¿Dónde es un baño?", "¿Hay un baño en esta planta?", "¿Está un baño aquí?"], answer: 1, why: "Si existe: **¿Hay un…?**" },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Afirmar, preguntar y negar: la voz y la palabra no",
    explanation: [
      "Las mismas palabras pueden ser una afirmación o una pregunta: la diferencia está en la voz. En la **afirmación** la voz **baja** al final (_El barco llega a las dos._ ↘). En la **pregunta de sí o no** la voz **sube** al final (_¿El barco llega a las dos?_ ↗).",
      "En la **pregunta con qué, quién, cuándo…**, la fuerza va en la palabra de pregunta y la voz normalmente **baja** al final: _¿CUÁN-do llega el barco?_ ↘",
      "En la **negación**, la palabra **no** se oye clara, unida al verbo: _no-a-BRE_, _no-lo-TEN-go_. Si quieres insistir, le das un poco más de fuerza: _¡NO, no abre!_",
    ],
    support: [
      "Statement: voice goes down. Yes/no question: voice goes up. Question with a question word: stress on the question word, voice usually goes down.",
    ],
    table: {
      caption: "Tres frases, tres melodías",
      head: ["Tipo de frase", "Ejemplo", "La voz al final"],
      rows: [
        ["Afirmación", "El museo abre a las nueve.", "baja ↘"],
        ["Pregunta de sí o no", "¿El museo abre a las nueve?", "sube ↗"],
        ["Pregunta con palabra interrogativa", "¿Cuándo abre el museo?", "baja ↘"],
        ["Negación", "El museo no abre hoy.", "baja ↘"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Qué tipo de frase es?",
      prompt: "Escucha la melodía y elige el tipo de frase.",
      items: [
        { q: "¿Qué tipo de frase oyes en el centro de visitantes?", audio: "La terraza está en la cuarta planta.", options: ["afirmación", "pregunta de sí o no", "negación"], answer: 0 },
        { q: "¿Qué tipo de frase oyes en el centro de visitantes?", audio: "¿La terraza está en la cuarta planta?", options: ["afirmación", "negación", "pregunta de sí o no"], answer: 2 },
        { q: "¿Qué tipo de frase oyes en el centro de visitantes?", audio: "El barco no pasa hasta las tres.", options: ["negación", "pregunta de sí o no", "afirmación"], answer: 0 },
        { q: "¿Qué tipo de frase oyes en el centro de visitantes?", audio: "¿Dónde compro la entrada?", options: ["afirmación", "pregunta con palabra interrogativa", "negación"], answer: 1 },
      ],
    },
    produce: [
      { text: "El barco llega a las dos. ¿El barco llega a las dos?", tip: "La misma frase: primero la voz baja, después sube." },
      { text: "¿Cuándo llega el barco?", tip: "Fuerza en _CUÁN_; la voz baja al final." },
      { text: "No, el museo no abre hoy.", tip: "Las dos _no_ claras, unidas a lo que viene después." },
      { text: "¿Dónde está la terraza? ¿Hay ascensor?", tip: "Una pregunta con _dónde_ (baja) y una de sí o no (sube)." },
    ],
    spelling: "Por escrito, la pregunta necesita dos signos: **¿** al principio y **?** al final. Las palabras de pregunta llevan tilde: **qué, quién, cuándo, dónde, cómo, cuánto**.",
  },
  listening: {
    title: "En el centro de visitantes de Miraflores",
    context: "Hanna es de Alemania y viaja sola por Panamá. Hoy está en el centro de visitantes de las esclusas de Miraflores. Pide información en el mostrador a Rubén, un guía.",
    speakers: [
      { id: "hanna", name: "Hanna", voice: "es-ES-f", role: "turista" },
      { id: "ruben", name: "Rubén", voice: "es-CU-m", role: "guía del centro de visitantes" },
    ],
    script: [
      { speaker: "hanna", text: "Buenos días. Es mi primera vez aquí. ¿Qué hay en el centro?" },
      { speaker: "ruben", text: "Buenos días. El centro tiene cuatro plantas. En la primera hay un museo pequeño y en la segunda hay un cine. La terraza de observación está en la cuarta planta." },
      { speaker: "hanna", text: "¿Hay ascensor? Me duelen las rodillas: en este viaje camino mucho todos los días." },
      { speaker: "ruben", text: "Sí, claro. El ascensor está a la derecha, al lado de la tienda." },
      { speaker: "hanna", text: "¿Y a qué hora pasa el próximo barco?" },
      { speaker: "ruben", text: "Ahora mismo un barco está entrando en la esclusa. ¿Lo ve en la pantalla? Es más grande que un edificio de diez pisos." },
      { speaker: "hanna", text: "¡Qué enorme! Quiero verlo desde la terraza. ¿Tengo que comprar otra entrada?" },
      { speaker: "ruben", text: "No, no tiene que comprar nada más. La entrada es para todo el centro. Pero la película no empieza hasta las once y media." },
      { speaker: "hanna", text: "Perfecto. Entonces voy a subir a la terraza ahora y a las once y media voy a ver la película. ¿Se puede comer en la terraza?" },
      { speaker: "ruben", text: "No, en la terraza no se puede comer. El restaurante está en la tercera planta. Y póngase la gorra: arriba hace mucho sol." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: escucha todo una vez, sin buscar detalles.",
        exercise: {
          id: "l1",
          type: "choice",
          prompt: "Responde con la idea general.",
          items: [
            { q: "¿Qué hace Hanna en el mostrador?", options: ["compra una gorra", "pide información sobre el centro", "reserva un tour en barco"], answer: 1 },
            { q: "¿Qué está pasando en el canal mientras hablan?", options: ["un barco está entrando en la esclusa", "están cerrando la esclusa", "no pasa ningún barco"], answer: 0 },
            { q: "¿Qué va a hacer Hanna primero?", options: ["ver la película", "comer en el restaurante", "subir a la terraza"], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a los lugares, las horas y las reglas.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿En qué planta está la terraza de observación?", options: ["en la segunda", "en la cuarta", "en la tercera"], answer: 1 },
            { q: "¿Por qué pregunta Hanna por el ascensor?", options: ["porque le duelen las rodillas", "porque tiene mucho equipaje", "porque está muy cansada del vuelo"], answer: 0 },
            { q: "¿Cómo es el barco, según Rubén?", options: ["tan alto como la terraza", "más pequeño que los otros", "más grande que un edificio de diez pisos"], answer: 2 },
            { q: "¿Tiene que comprar Hanna otra entrada?", options: ["sí, para la terraza", "no, la entrada es para todo el centro", "sí, para la película"], answer: 1 },
            { q: "¿Dónde puede comer Hanna?", options: ["en la terraza", "en el cine", "en el restaurante de la tercera planta"], answer: 2 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en cómo pregunta Hanna y en cómo describe Rubén.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué hace cada frase?",
          categories: ["pregunta para pedir información", "describe con hay, está o es", "repasa las semanas 16 a 19"],
          items: [
            { text: "¿Qué hay en el centro?", cat: 0 },
            { text: "¿Y a qué hora pasa el próximo barco?", cat: 0 },
            { text: "En la primera hay un museo pequeño.", cat: 1 },
            { text: "El ascensor está a la derecha.", cat: 1 },
            { text: "Ahora mismo un barco está entrando en la esclusa.", cat: 2, why: "Semana 19: **estar + gerundio**." },
            { text: "Es más grande que un edificio de diez pisos.", cat: 2, why: "Semana 17: **más … que**." },
            { text: "No, no tiene que comprar nada más.", cat: 2, why: "Semana 18: **no tiene que** = no es necesario." },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Guía rápida: un día en Miraflores",
    genre: "Página de información para visitantes",
    frame: "Esta página está en la web de un hostal de Ciudad de Panamá. La lee la gente que quiere visitar el canal.",
    text: [
      "Las esclusas de Miraflores están a veinte minutos del centro de Ciudad de Panamá. Es el mejor lugar para ver de cerca cómo funciona el canal. Los barcos suben o bajan dieciséis metros en dos esclusas, y todo pasa en menos de una hora.",
      "¿Qué hay en el centro de visitantes? Hay un museo con cuatro salas, un cine, una tienda y un restaurante. La terraza de observación está en la cuarta planta y es más grande que la terraza de la tercera planta. El centro abre todos los días a las ocho de la mañana y cierra a las cinco de la tarde.",
      "Un consejo: la mayoría de los barcos grandes pasan por la mañana, más o menos entre las nueve y las once. Si quieres verlos, tienes que llegar temprano. Muchos visitantes los están grabando desde la terraza a esa hora, así que hay mucha gente.",
      "¿Qué te pones? Hace mucho calor: ponte ropa ligera y una gorra, y lleva bastante agua. La entrada cuesta veinte dólares para adultos y no hay descuento para grupos. ¿Tienes más preguntas? En la recepción del hostal te las respondemos con mucho gusto.",
    ],
    glossary: [
      { es: "de cerca", en: "up close" },
      { es: "funciona", en: "it works" },
      { es: "la mayoría de", en: "most of" },
      { es: "la sala", en: "the room, the gallery" },
      { es: "el descuento", en: "the discount" },
      { es: "con mucho gusto", en: "gladly" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee la página y responde.",
        items: [
          { q: "¿Cuántos metros suben o bajan los barcos en Miraflores?", options: ["dieciséis", "veinte", "seis"], answer: 0 },
          { q: "¿Qué no hay en el centro de visitantes, según la página?", options: ["un cine", "un hotel", "un restaurante"], answer: 1 },
          { q: "¿Cuándo pasan la mayoría de los barcos grandes?", options: ["por la tarde, después de las cinco", "a mediodía", "por la mañana, entre las nueve y las once"], answer: 2 },
          { q: "¿Qué recomienda la página para el calor?", options: ["ropa ligera, una gorra y bastante agua", "un suéter y un impermeable", "ir solo por la tarde"], answer: 0 },
        ],
      },
      {
        id: "r2",
        type: "gap",
        prompt: "Completa con las palabras de la página.",
        items: [
          { q: "La terraza de observación ___ en la cuarta planta.", answers: [["está"]], why: "Lugar de algo concreto: **está**." },
          { q: "Es más grande ___ la terraza de la tercera planta.", answers: [["que"]], why: "Semana 17: más … **que**." },
          { q: "Si quieres verlos, ___ ___ llegar temprano.", answers: [["tienes"], ["que"]], why: "Semana 18: obligación, **tienes que**." },
          { q: "La entrada cuesta veinte dólares y ___ hay descuento para grupos.", answers: [["no"]], why: "Negación: **no** antes del verbo." },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase de la página para ver qué gramática hay dentro.",
      items: [
        { quote: "¿Qué hay en el centro de visitantes?", note: "Pregunta de información: **qué** + **hay**. La respuesta presenta cosas nuevas con _hay un…_" },
        { quote: "La terraza de observación está en la cuarta planta", note: "Algo concreto (_la terraza_) + **está** + lugar." },
        { quote: "Muchos visitantes los están grabando", note: "Semana 19: **los** = los barcos, delante de **están grabando**." },
        { quote: "ponte ropa ligera y una gorra, y lleva bastante agua", note: "Semana 16: ropa para el calor y **bastante** + agua." },
      ],
    },
  },
  practice: {
    intro: "Ahora mezcla las dos clases de esta semana con todo lo de las semanas 16 a 19.",
    exercises: [
      {
        id: "x1",
        type: "gap",
        title: "Repaso de las semanas 16 a 19",
        prompt: "Completa con la forma correcta. La explicación dice qué semana repasas.",
        items: [
          { q: "Para la visita compro dos ___ de agua y un paquete de galletas. (botella)", answers: [["botellas"]], why: "Semana 16: en plural cambia el envase: **botellas** de agua." },
          { q: "Hace mucho sol y me ___ la cabeza. (doler)", answers: [["duele"]], why: "Semana 16: una cosa, **duele**, con artículo: _la_ cabeza." },
          { q: "Este barco es ___ largo ___ el barco de ayer. (más)", answers: [["más"], ["que"]], why: "Semana 17: **más** … **que**." },
          { q: "El museo abre ___ ___ nueve y el cine, a la una. (a)", answers: [["a"], ["las"]], why: "Semana 18: hora de algo, **a las** nueve." },
          { q: "Mañana mis amigos ___ ___ cruzar el canal en barco. (ir)", answers: [["van"], ["a"]], why: "Semana 18: plan, **van a** + infinitivo." },
          { q: "¿El barco rojo? Mi padre ___ ___ grabando con el móvil. (estar)", answers: [["lo"], ["está"]], why: "Semana 19: **lo** + **está** + gerundio." },
        ],
      },
      {
        id: "x2",
        type: "error",
        title: "Corrige el diario de viaje",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Hay el museo en la primera planta.", answers: ["El museo está en la primera planta."], why: "Esta semana: con _el_, **está**." },
          { sentence: "¿Dónde el guía está?", answers: ["¿Dónde está el guía?"], why: "Esta semana: después de **dónde**, el verbo." },
          { sentence: "Hoy me pongo mi gorra y bastantes crema.", answers: ["Hoy me pongo la gorra y bastante crema."], why: "Semana 16: **me pongo la** gorra; _crema_ es singular: **bastante**." },
          { sentence: "Busco una mochila azul, el que está en el banco.", answers: ["Busco una mochila azul, la que está en el banco."], why: "Semana 17: _mochila_ es femenino: **la que** está." },
          { sentence: "Son la una y el barco está subir.", answers: ["Es la una y el barco está subiendo."], why: "Semanas 18 y 19: **es la una** y **está subiendo**." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "En Miraflores",
        prompt: "Lee la situación y elige la mejor frase.",
        items: [
          { context: "Llegas al centro y no sabes si el cine está abierto hoy.", q: "Preguntas:", options: ["¿El cine abre hoy?", "¿Cine hoy abre el?", "¿Qué el cine abre?"], answer: 0, why: "Pregunta de sí o no: orden normal con **¿ ?**." },
          { context: "Un amigo te escribe: «¿Qué estás haciendo?». Estás en la terraza y un barco pasa delante de ti.", q: "Respondes:", options: ["Veo los barcos todos los días.", "Estoy viendo un barco enorme desde la terraza.", "Voy a ver un barco el sábado."], answer: 1, why: "Ahora mismo: **estoy viendo** (semana 19)." },
          { context: "Quieres invitar a tu amiga al canal, pero el sábado trabajas.", q: "Le dices:", options: ["El sábado no tengo que trabajar.", "El sábado puedo, tengo que trabajar.", "El sábado no puedo: tengo que trabajar. ¿Vamos el domingo?"], answer: 2, why: "Semana 18: **no puedo**, **tengo que** + propuesta." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases cortas. Después compara con el modelo.",
        items: [
          {
            prompt: "Describe tu casa o tu barrio en cuatro frases: una con es, una con hay, una con está y una negación.",
            model: "Mi barrio es antiguo y tranquilo. Hay una plaza con muchos árboles. Mi casa está al lado de la plaza. No hay supermercado, pero hay dos tiendas pequeñas.",
            checklist: ["Es para cómo es", "Hay para presentar algo nuevo", "Está para el lugar de algo concreto", "No antes del verbo"],
          },
          {
            prompt: "Escribe cuatro preguntas para la recepción de un museo: una de sí o no y tres con qué, cuándo, dónde o cuánto.",
            model: "¿Hay audioguía en español? ¿Cuánto cuesta la entrada? ¿A qué hora cierra el museo? ¿Dónde está la cafetería?",
            checklist: ["Signos ¿? en todas", "Palabra de pregunta + verbo", "Tilde en qué, cuándo, dónde, cuánto"],
          },
          {
            prompt: "Escribe tres frases sobre tu próximo viaje con tres clases de las semanas 16 a 19.",
            model: "El viernes 3 de julio voy a ir a la playa con mi hermano. Tenemos que comprar dos litros de protector solar. Mi hermano es más alto que yo, pero yo nado más rápido.",
            checklist: ["Una fecha o una hora", "Ir a, tener que o querer + infinitivo", "Una cantidad o una comparación"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un correo de presentación para un intercambio de idiomas.",
    context: "Terminas el A1 y quieres practicar con una persona de Panamá en un intercambio de idiomas. Escríbele un correo: preséntate, describe tu casa o tu barrio, cuenta qué estás haciendo estos días y tus planes, y hazle preguntas.",
    steps: [
      "Preséntate: nombre, de dónde eres y dónde vives.",
      "Describe tu casa o tu barrio con es, hay y está.",
      "Cuenta qué estás haciendo estos días y un plan con ir a + infinitivo.",
      "Usa una comparación y una cantidad o una hora.",
      "Haz tres preguntas: una de sí o no y dos con qué, dónde, cuándo o cuánto.",
      "Revisa: ¿el orden es quién + verbo + qué? ¿Va **no** antes del verbo? ¿Tienen todas las preguntas sus signos ¿?",
    ],
    useLanguage: ["Me llamo… Soy de… Vivo en…", "Mi barrio es… Hay… … está…", "Estos días estoy…", "El sábado voy a…", "¿Tú…? ¿Qué…? ¿Dónde…?"],
    model: [
      "¡Hola, Gabriela! Me llamo Tom, soy de Irlanda y vivo en Dublín. Vivo en un piso pequeño en un barrio muy tranquilo. En mi calle hay una biblioteca y dos cafeterías. Mi piso está al lado del río. Estos días estoy estudiando español todas las tardes. Mi ciudad no es tan grande como Ciudad de Panamá y hace más frío: hoy llueve toda la mañana. El 15 de agosto voy a viajar a Panamá y quiero ver el canal. ¿Tú vives cerca del canal? ¿Qué lugares me recomiendas? ¿Cuándo podemos hablar por videollamada? Un saludo, Tom.",
    ],
    checklist: [
      "Usas el orden **quién + verbo + qué + cuándo** y pones **no** antes del verbo.",
      "Describes con **es**, **hay** y **está** sin mezclarlos.",
      "Usas al menos tres clases de las semanas 16 a 19 (cantidad, comparación, hora o fecha, ir a, estar + gerundio…).",
      "Haces tres preguntas con **¿ ?** y la palabra de pregunta delante del verbo.",
    ],
    words: [60, 120],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Es tu cierre del A1: repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "En el mostrador",
        prompt: "Estás en el centro de visitantes de un lugar famoso de tu país. Haz cinco preguntas a un guía para organizar tu visita: qué hay, dónde está algo, a qué hora pasa algo, cuánto cuesta y si se puede hacer algo.",
        prep: ["¿Qué hay en…?", "¿Dónde está…?", "¿A qué hora…?", "¿Cuánto cuesta…?", "¿Se puede…?"],
        seconds: 40,
        model: "Buenos días. ¿Qué hay en el centro? ¿Dónde está la terraza? ¿A qué hora empieza la próxima visita guiada? ¿Cuánto cuesta la entrada para estudiantes? ¿Se puede hacer fotos dentro del museo?",
        selfCheck: ["La palabra de pregunta va primero y el verbo después.", "La voz sube en las preguntas de sí o no."],
      },
      {
        title: "Mi lugar favorito",
        prompt: "Describe tu lugar favorito de tu ciudad durante un minuto: qué es y cómo es, qué hay, dónde está cada cosa, qué está pasando allí ahora (imagínalo) y qué vas a hacer allí la próxima vez.",
        prep: ["Mi lugar favorito es…", "Allí hay…", "… está…", "Ahora seguro que… está…", "La próxima vez voy a…"],
        seconds: 60,
        model: "Mi lugar favorito es el mercado de mi barrio. Es antiguo y muy grande. Dentro hay muchas tiendas de fruta y un café pequeño. El café está al fondo, al lado de la floristería. Ahora seguro que la señora del café está preparando su pastel de manzana. La próxima vez voy a comprar un kilo de fresas y voy a tomar un café allí.",
        selfCheck: ["Uso _es_, _hay_ y _está_ bien.", "Uso estar + gerundio e ir a + infinitivo."],
      },
      {
        title: "Así cierro el A1",
        prompt: "Cuenta qué puedes hacer ahora en español, qué es más difícil para ti y qué quieres hacer en el A2.",
        seconds: 45,
        selfCheck: ["Uso _puedo_ y _quiero_ + infinitivo.", "Uso una comparación con _más … que_."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu última clase del A1 lo que repasaste en este checkpoint y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Describe un lugar", task: "Describe un lugar de tu ciudad sin decir el nombre. Tu profesor hace preguntas de sí o no hasta adivinarlo.", phrases: ["Es…", "Hay…", "Está…"] },
      { move: "Pide información", task: "Tu profesor es el guía de un museo. Pide cinco datos para organizar tu visita.", phrases: ["¿A qué hora…?", "¿Dónde está…?"] },
      { move: "Repasa cuatro semanas", task: "Cuenta un día de viaje en seis frases: una cantidad, una comparación, una hora, un plan, una obligación y algo que está pasando ahora.", phrases: ["Compro dos…", "Es más… que…", "Ahora estoy…"] },
      { move: "Celebra el A1", task: "Di tres cosas que puedes hacer ahora en español y pregunta a tu profesor qué vas a aprender en el A2.", phrases: ["Ahora puedo…", "¿Qué vamos a aprender en el A2?"] },
    ],
    bring: "Trae tu correo de presentación y léelo en voz alta. Después, prepara cinco preguntas para conocer mejor a tu profesor.",
  },
  quiz: {
    items: [
      { type: "choice", q: "¿Qué frase sobre la taquilla del canal tiene el orden correcto?", options: ["¿Cuándo la taquilla abre?", "¿Cuándo abre la taquilla?", "¿Abre cuándo la taquilla?"], answer: 1, why: "Palabra de pregunta + **verbo** + sujeto." },
      { type: "choice", q: "En la cuarta planta ___ una terraza muy grande.", options: ["está", "es", "hay"], answer: 2, why: "Algo nuevo con _una_: **hay**." },
      { type: "listen", q: "Escucha la frase del guía. ¿Qué tipo de frase es?", audio: "¿Usted quiere subir a la terraza?", options: ["afirmación", "pregunta de sí o no", "negación"], answer: 1 },
      { type: "gap", q: "El restaurante ___ en la tercera planta y ___ abre los lunes.", answers: [["está"], ["no"]], why: "Lugar: **está**; negación: **no** antes del verbo." },
      { type: "gap", q: "Hace calor: me ___ la gorra y llevo ___ agua. (poner, bastante)", answers: [["pongo"], ["bastante"]], why: "Semana 16: **me pongo la** gorra; **bastante** agua." },
      { type: "gap", q: "El barco pasa ___ ___ dos y cuarto. Ahora ___ subiendo.", answers: [["a"], ["las"], ["está"]], why: "Semana 18: **a las** + hora; semana 19: **está** subiendo." },
      { type: "transform", source: "Los niños ven una película en el cine.", instruction: "Escribe la pregunta para saber qué ven los niños.", answers: ["¿Qué ven los niños en el cine?", "¿Qué ven los niños?"], why: "**Qué** + verbo + sujeto." },
      { type: "order", words: ["Mi", "amiga", "no", "quiere", "subir", "a", "la", "terraza."] },
      { type: "error", sentence: "El buque azul es tan largo que el buque rojo.", answers: ["El buque azul es tan largo como el buque rojo."], why: "Semana 17: tan … **como**." },
      { type: "error", sentence: "¿Las entradas? Mi hermano está las comprando.", answers: ["¿Las entradas? Mi hermano las está comprando.", "¿Las entradas? Las está comprando mi hermano."], why: "Semana 19: el pronombre va **antes** de estar." },
      { type: "error", sentence: "¿Quién tienen el mapa del centro?", answers: ["¿Quién tiene el mapa del centro?"], why: "Con **quién**, verbo en singular." },
      { type: "open", prompt: "Escribe tres frases para cerrar el A1: describe tu calle con hay y está, di un plan para el fin de semana y haz una pregunta a un amigo.", model: "En mi calle hay una farmacia y un parque. La farmacia está en la esquina. El sábado voy a visitar a mis abuelos. ¿Tú qué vas a hacer el domingo?", checklist: ["Hay y está bien usados", "Ir a + infinitivo", "Una pregunta con ¿? y el verbo después de la palabra de pregunta"] },
    ],
  },
  complete: {
    canNow: [
      "Construir frases con el orden **quién + verbo + qué + cuándo**.",
      "Hacer preguntas de sí o no y preguntas con **qué, quién, cuándo, dónde** + verbo.",
      "Poner **no** justo antes del verbo o del pronombre.",
      "Describir un lugar con **es**, **hay** y **está** y pedir información con un kit de preguntas.",
      "Usar juntas las clases de las semanas 16 a 19: cantidades, cuerpo y ropa, pistas, comparación, hora y fecha, planes, obligaciones, estar + gerundio y lo, la, los, las.",
      "Terminar el A1: presentarte, describir tu mundo y pedir lo que necesitas en español.",
    ],
    review: ["¿Cuándo llega el barco? · El barco no llega hasta las tres.", "El centro es moderno · hay un cine · la terraza está arriba.", "Dos botellas de agua · más grande que · a las dos y cuarto · vamos a ver · lo están grabando."],
  },
  related: [
    { path: "/gramatica/oraciones-simples-orden", label: "Clase: Oraciones simples: orden, afirmación y pregunta" },
    { path: "/gramatica/microproduccion-a1", label: "Clase: Microproducción A1: describir y pedir información" },
  ],
};
