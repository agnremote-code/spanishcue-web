import type { Module } from "../../types";

export const a1w12: Module = {
  id: "a1-12",
  level: "a1",
  week: 12,
  kind: "core",
  title: "Quiero ayudar porque me encanta leer",
  subtitle: "Repaso de y, e, o, u, pero y ni para unir ideas, y de porque y para + infinitivo para dar una razón o un objetivo.",
  stop: { place: "Tegucigalpa", country: "Honduras" },
  minutes: 80,
  newObjectives: [
    "a1.gram.g025",
    "a1.gram.g026",
    "a1.voc.w12-voluntariado",
    "a1.pron.w12-porque-por-que",
    "a1.lis.w12-entrevista-biblioteca",
    "a1.read.w12-perfiles-voluntarios",
    "a1.wri.w12-solicitud-voluntario",
    "a1.spk.w12-razones-objetivos",
    "a1.fun.w12-explicar-razones",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes unir dos ideas para sumar, elegir, contrastar o negar dos cosas, y explicar por qué haces algo y para qué lo haces.",
    canDoEn: "By the end of this week, you can join two ideas to add, choose, contrast or say no to two things, and explain why you do something and what you do it for.",
    steps: [
      "Elige el conector según la relación: **y** suma, **o** da a elegir, **pero** contrasta, **ni** niega dos cosas.",
      "Cambia `y` por `e` delante de _i-_ / _hi-_ y `o` por `u` delante de _o-_ / _ho-_.",
      "Responde a **¿Por qué?** con **porque** + verbo conjugado.",
      "Responde a **¿Para qué?** con **para** + infinitivo.",
      "Escucha una entrevista para ser voluntario en una biblioteca de Tegucigalpa.",
      "Escribe una solicitud breve y graba tus razones para estudiar español.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases: las palabras que unen ideas (y, o, pero, ni) y las que explican una razón o un objetivo (porque, para). Las usas en Tegucigalpa, en un proyecto de voluntariado con niños y libros.",
    parts: [
      {
        heading: "Y, o, pero: sumar, elegir, contrastar",
        body: [
          "**Y** suma dos cosas o dos ideas: _Hablo español **y** portugués_. **O** da una opción: _¿Vienes el sábado **o** el domingo?_ **Pero** presenta un contraste o una dificultad: _Me gusta el proyecto, **pero** no tengo mucho tiempo_.",
          "Delante de **pero** casi siempre escribes una **coma**. Delante de **y** y **o**, en una lista sencilla, no.",
          "Para sonar bien, **y** cambia a **e** delante de una palabra que empieza por el sonido _i_ (**i-**, **hi-**): _madre **e** hija_, _francés **e** inglés_. Y **o** cambia a **u** delante del sonido _o_ (**o-**, **ho-**): _siete **u** ocho_, _mujeres **u** hombres_.",
        ],
        support: [
          "_Y_ = and (adds), _o_ = or (choice), _pero_ = but (contrast). Put a comma before _pero_.",
          "_Y_ becomes _e_ before an \"ee\" sound (_i-, hi-_), and _o_ becomes _u_ before an \"o\" sound (_o-, ho-_).",
        ],
        table: {
          caption: "Cuatro cambios para recordar",
          head: ["Normal", "Cambio", "Ejemplo"],
          rows: [
            ["y", "e (delante de i-, hi-)", "padres e hijos"],
            ["y", "y (delante de hie-, ya-)", "agua y hielo"],
            ["o", "u (delante de o-, ho-)", "uno u otro"],
            ["o", "o (en los demás casos)", "té o café"],
          ],
        },
        examples: [
          { es: "Leo cuentos y canto canciones con los niños.", en: "I read stories and sing songs with the children." },
          { es: "¿Prefieres la mañana o la tarde?", en: "Do you prefer the morning or the afternoon?" },
          { es: "La biblioteca es pequeña, pero tiene muchos libros.", en: "The library is small, but it has a lot of books." },
        ],
        mistakes: [
          { wrong: "Estudio historia y inglés.", right: "Estudio historia e inglés.", why: "_Inglés_ empieza por el sonido _i_: **e**." },
          { wrong: "Hay siete o ocho voluntarios.", right: "Hay siete u ocho voluntarios.", why: "_Ocho_ empieza por el sonido _o_: **u**." },
        ],
        tip: "Escucha la palabra que viene después: si empieza por el mismo sonido (_y-i_, _o-o_), cambia el conector.",
      },
      {
        heading: "Ni: no a dos cosas",
        body: [
          "Para decir que **no** a dos cosas, usa **no + verbo + … ni …**: _No tengo coche **ni** moto_. El primer _no_ va delante del verbo, como en cualquier frase negativa.",
          "No digas _no… y…_ para dos cosas negativas: _No hablo alemán **ni** ruso_, no _No hablo alemán y ruso_.",
          "Con dos verbos también funciona: _Los domingos **no** trabajo **ni** estudio_.",
        ],
        support: [
          "_Ni_ = nor / or (in a negative sentence): _No tengo coche ni moto_ (I don't have a car or a motorbike).",
          "Keep _no_ before the verb and use _ni_ instead of _y_ for the second thing.",
        ],
        examples: [
          { es: "No necesitas experiencia ni títulos.", en: "You don't need experience or qualifications." },
          { es: "Hoy no llueve ni hace frío.", en: "Today it isn't raining or cold." },
          { es: "Mi hermano no lee novelas ni cómics.", en: "My brother doesn't read novels or comics." },
        ],
        mistakes: [
          { wrong: "No como carne y pescado.", right: "No como carne ni pescado.", why: "Dos cosas negativas: **ni**, no _y_." },
        ],
      },
      {
        heading: "¿Por qué? Porque…",
        body: [
          "Para preguntar la **razón**, dices **¿Por qué…?**: dos palabras y tilde en _qué_. Para responder, dices **porque**: una palabra, sin tilde.",
          "Después de **porque** viene una frase con un **verbo conjugado**: _Quiero ayudar **porque** me gustan los niños_. _Llego tarde **porque** hay mucho tráfico_.",
          "Para dar tu opinión antes de la razón puedes usar **creo que** + frase: _**Creo que** es un buen proyecto **porque** ayuda a las familias_.",
        ],
        support: [
          "_¿Por qué?_ (two words, accent) = why? _Porque_ (one word, no accent) = because.",
          "_Porque_ is followed by a conjugated verb: _porque tengo tiempo_.",
        ],
        table: {
          caption: "Pregunta y respuesta",
          head: ["", "Forma", "Ejemplo"],
          rows: [
            ["Pregunta", "¿Por qué…?", "¿Por qué estudias español?"],
            ["Respuesta", "porque + verbo conjugado", "Porque trabajo con hondureños."],
            ["Opinión", "creo que + frase", "Creo que es útil."],
          ],
        },
        examples: [
          { es: "—¿Por qué vienes en autobús? —Porque no tengo coche.", en: "—Why do you come by bus? —Because I don't have a car." },
          { es: "Me gusta Tegucigalpa porque la gente es muy amable.", en: "I like Tegucigalpa because people are very friendly." },
        ],
        mistakes: [
          { wrong: "¿Porque quieres ser voluntaria?", right: "¿Por qué quieres ser voluntaria?", why: "Para **preguntar**: dos palabras y tilde, **por qué**." },
          { wrong: "Creo es una buena idea.", right: "Creo que es una buena idea.", why: "Después de _creo_ va **que**." },
        ],
      },
      {
        heading: "¿Para qué? Para + infinitivo",
        body: [
          "Para decir el **objetivo** de una acción, usas **para + infinitivo** (el verbo sin conjugar, en -ar, -er, -ir): _Estudio español **para hablar** con mis vecinos_.",
          "La pregunta es **¿Para qué…?**: _¿Para qué necesitas el diccionario?_ — _**Para traducir** un cuento_.",
          "Compara: **porque** mira la causa, lo que pasa antes (_porque tengo tiempo libre_); **para** mira el objetivo, lo que quieres conseguir (_para aprender algo nuevo_). Después de **para**, nunca un verbo conjugado.",
        ],
        support: [
          "_Para_ + infinitive = (in order) to: _para aprender_ (to learn).",
          "_Porque_ gives the cause (+ conjugated verb). _Para_ gives the goal (+ infinitive).",
        ],
        table: {
          caption: "Razón u objetivo",
          head: ["Pregunta", "Respuesta", "Después viene…"],
          rows: [
            ["¿Por qué?", "porque me gustan los libros", "verbo conjugado"],
            ["¿Para qué?", "para leer con los niños", "infinitivo"],
          ],
        },
        examples: [
          { es: "Voy a la biblioteca para devolver un libro.", en: "I'm going to the library to return a book." },
          { es: "Ahorro dinero para viajar a Copán.", en: "I'm saving money to travel to Copán." },
          { es: "¿Para qué es esta caja? —Para guardar los lápices.", en: "What's this box for? —For keeping the pencils." },
        ],
        mistakes: [
          { wrong: "Estudio para aprendo más.", right: "Estudio para aprender más.", why: "Después de **para**, el verbo va en **infinitivo**." },
          { wrong: "Trabajo aquí porque ayudar a las familias.", right: "Trabajo aquí para ayudar a las familias.", why: "Es un objetivo con infinitivo: **para ayudar**." },
        ],
        tip: "Truco: si puedes poner _para conseguir_ delante, es **para**; si puedes poner _la razón es que_, es **porque**.",
      },
    ],
  },
  grammar: {
    intro: "Primero, las palabras que unen ideas; después, porque y para + infinitivo.",
    exercises: [
      {
        id: "g1",
        type: "choice",
        title: "¿Sumar, elegir o contrastar?",
        prompt: "Elige la palabra que une las dos ideas.",
        items: [
          { q: "Mi casa es vieja, ___ es muy cómoda.", options: ["pero", "y", "o"], answer: 0, why: "Hay un contraste: vieja / cómoda → **pero**." },
          { q: "¿Pagas en efectivo ___ con tarjeta?", options: ["pero", "ni", "o"], answer: 2, why: "Das una opción: **o**." },
          { q: "En la mochila llevo un libro ___ una botella de agua.", options: ["pero", "y", "ni"], answer: 1, why: "Sumas dos cosas: **y**." },
          { q: "Hoy no tengo clase ___ trabajo.", options: ["ni", "o", "pero"], answer: 0, why: "Dos cosas negativas: **ni**." },
          { q: "El curso es gratis, ___ hay pocas plazas.", options: ["y", "pero", "o"], answer: 1, why: "Gratis es bueno; pocas plazas, una dificultad: **pero**." },
        ],
      },
      {
        id: "g2",
        type: "gap",
        title: "Y o e, o o u",
        prompt: "Completa con **y**, **e**, **o** o **u**.",
        items: [
          { q: "Busco voluntarios con paciencia ___ imaginación.", answers: [["e"]], why: "_Imaginación_ empieza por _i_: **e**." },
          { q: "¿Tienes diez ___ once años?", answers: [["u"]], why: "_Once_ empieza por _o_: **u**." },
          { q: "Mi abuela ___ yo cocinamos los domingos.", answers: [["y"]], why: "_Yo_ no empieza por el sonido _i_ vocal: **y**." },
          { q: "En la mesa hay agua ___ hielo.", answers: [["y"]], why: "_Hielo_ empieza por el sonido _ye_, no _i_: se queda **y**." },
          { q: "Puedes venir con tu hermano ___ con tu hermana.", answers: [["o"]], why: "_Con_ no empieza por _o_: se queda **o**." },
        ],
      },
      {
        id: "g3",
        type: "transform",
        title: "Une con ni",
        prompt: "Une las dos frases negativas en una sola con **ni**.",
        items: [
          { source: "No bebo café. No bebo té.", answers: ["No bebo café ni té."], why: "**No** + verbo + café **ni** té." },
          { source: "Lucas no tiene perro. Lucas no tiene gato.", answers: ["Lucas no tiene perro ni gato."], why: "No repites el verbo: _no tiene perro **ni** gato_." },
          { source: "En el pueblo no hay cine. En el pueblo no hay teatro.", answers: ["En el pueblo no hay cine ni teatro."], why: "_No hay_ + cine **ni** teatro." },
        ],
      },
      {
        id: "g4",
        type: "choice",
        title: "¿Porque, por qué o para?",
        prompt: "Elige la forma correcta.",
        items: [
          { q: "¿___ no vienes a la reunión?", options: ["Porque", "Por qué", "Para"], answer: 1, why: "Es una pregunta por la razón: **por qué**." },
          { q: "No voy ___ estoy enferma.", options: ["para", "por qué", "porque"], answer: 2, why: "Razón + verbo conjugado (_estoy_): **porque**." },
          { q: "Uso el celular ___ escuchar música.", options: ["para", "porque", "por qué"], answer: 0, why: "Objetivo + infinitivo (_escuchar_): **para**." },
          { q: "Salgo de casa temprano ___ el bus pasa a las seis.", options: ["para", "porque", "por qué"], answer: 1, why: "Después viene _pasa_, un verbo conjugado: **porque**." },
          { q: "Llamo a la oficina ___ pedir información.", options: ["porque", "por qué", "para"], answer: 2, why: "Objetivo + infinitivo (_pedir_): **para**." },
        ],
      },
      {
        id: "g5",
        type: "gap",
        title: "Termina la idea",
        prompt: "Completa con el verbo entre paréntesis en la forma correcta: conjugado después de **porque**, infinitivo después de **para**.",
        items: [
          { q: "(aprender) Voy a clase de baile para ___ punta.", answers: [["aprender"]], why: "**Para** + infinitivo." },
          { q: "(tener) Estoy contento porque ___ un trabajo nuevo.", answers: [["tengo"]], why: "**Porque** + verbo conjugado: _yo tengo_." },
          { q: "(comprar) Ana va al mercado para ___ fruta.", answers: [["comprar"]], why: "**Para** + infinitivo." },
          { q: "(vivir) Hablan español porque ___ en Honduras.", answers: [["viven"]], why: "**Porque** + verbo conjugado: _ellos viven_." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Un proyecto de voluntariado: las tareas, las cualidades de una persona voluntaria y las frases para dar razones.",
    groups: [
      {
        title: "Tareas",
        items: [
          { es: "leer cuentos", en: "to read stories" },
          { es: "ayudar con las tareas", en: "to help with homework" },
          { es: "ordenar los libros", en: "to put the books in order" },
          { es: "organizar actividades", en: "to organise activities" },
          { es: "preparar la merienda", en: "to prepare the afternoon snack" },
          { es: "pintar las paredes", en: "to paint the walls" },
        ],
      },
      {
        title: "Cualidades",
        items: [
          { es: "la paciencia", en: "patience" },
          { es: "la imaginación", en: "imagination" },
          { es: "puntual", en: "punctual" },
          { es: "responsable", en: "responsible" },
          { es: "creativo, creativa", en: "creative" },
          { es: "tener tiempo libre", en: "to have free time" },
        ],
      },
      {
        title: "Para explicar",
        items: [
          { es: "Quiero ayudar porque…", en: "I want to help because…" },
          { es: "Estoy aquí para…", en: "I'm here to…" },
          { es: "Creo que…", en: "I think (that)…" },
          { es: "No tengo… ni…", en: "I don't have… or…" },
          { es: "una vez por semana", en: "once a week" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "¿Para qué?",
        prompt: "Une cada cosa del proyecto con su objetivo.",
        pairs: [
          { left: "los cuentos", right: "para leer con los niños" },
          { left: "la pintura", right: "para pintar las paredes" },
          { left: "las estanterías", right: "para ordenar los libros" },
          { left: "el pan y la fruta", right: "para preparar la merienda" },
          { left: "los cuadernos", right: "para hacer las tareas" },
        ],
        why: "Todas las respuestas usan **para + infinitivo**: el objetivo de cada cosa.",
      },
      {
        id: "v2",
        type: "context",
        title: "La cualidad justa",
        prompt: "Lee la situación y elige la cualidad.",
        items: [
          { context: "Martina siempre llega a las tres en punto, nunca tarde.", q: "Martina es…", options: ["creativa", "puntual", "tímida"], answer: 1, why: "Llega a la hora: **puntual**." },
          { context: "Hugo explica la misma tarea cinco veces y no se enoja.", q: "Hugo tiene mucha…", options: ["imaginación", "prisa", "paciencia"], answer: 2, why: "Repite sin enojarse: **paciencia**." },
          { context: "Elsa inventa juegos nuevos con papel y colores.", q: "Elsa es…", options: ["creativa", "puntual", "responsable"], answer: 0, why: "Inventa cosas: **creativa**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "¿Por qué? y porque: dónde va la fuerza",
    explanation: [
      "**¿Por qué?** y **porque** se escriben distinto y también suenan distinto. En la pregunta, la fuerza va en **qué**: _por-**QUÉ**_. En la respuesta, la fuerza va en **por**: _**POR**-que_.",
      "La pregunta _¿Por qué…?_ normalmente baja al final, como todas las preguntas con palabra interrogativa. La respuesta _porque…_ sigue sin pausa hasta el verbo: _porque-tengo-tiempo_.",
      "Los conectores **y**, **e**, **o**, **u** son débiles y se unen a las palabras de al lado: _pan y queso_ suena _pa-ni-que-so_; _siete u ocho_ suena _sie-teu-o-cho_.",
    ],
    support: [
      "_¿Por qué?_ is stressed on _qué_; _porque_ is stressed on _por_.",
      "_Y, e, o, u_ are weak and blend with the words around them.",
    ],
    examples: [
      { es: "¿Por qué no vienes? → por-QUÉ", en: "Why aren't you coming?" },
      { es: "Porque trabajo. → POR-que", en: "Because I'm working." },
      { es: "madre e hija → ma-dre-e-hi-ja", en: "mother and daughter" },
    ],
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Pregunta o respuesta?",
      prompt: "Escucha y elige: ¿es la pregunta (¿por qué?) o la respuesta (porque)?",
      items: [
        { q: "¿Qué oyes?", audio: "¿Por qué estudias por la noche?", options: ["¿por qué?", "porque"], answer: 0 },
        { q: "¿Qué oyes?", audio: "Porque trabajo por la mañana.", options: ["¿por qué?", "porque"], answer: 1 },
        { q: "¿Qué oyes?", audio: "Porque mi familia vive aquí.", options: ["¿por qué?", "porque"], answer: 1 },
        { q: "¿Qué oyes?", audio: "¿Por qué llegas tan tarde?", options: ["¿por qué?", "porque"], answer: 0 },
        { q: "¿Qué oyes?", audio: "¿Por qué no comes nada?", options: ["¿por qué?", "porque"], answer: 0 },
      ],
    },
    produce: [
      { text: "¿Por qué quieres ser voluntario?", tip: "Fuerza en _qué_: _por-QUÉ_. La voz baja al final." },
      { text: "Porque me encantan los libros.", tip: "Fuerza en _por_: _POR-que_, y sigue sin pausa." },
      { text: "Leo en español e inglés.", tip: "_es-pa-ño-le-in-glés_: la _e_ se une a las dos palabras." },
      { text: "Necesito siete u ocho sillas.", tip: "_sie-teu-o-cho_: todo junto." },
      { text: "No tengo coche ni bici, pero tengo tiempo.", tip: "Pausa corta antes de _pero_, donde está la coma." },
    ],
    spelling: "Cuatro formas para escribir bien: **¿por qué?** (pregunta, dos palabras, tilde), **porque** (respuesta, una palabra), **para qué** (pregunta por el objetivo) y **para** + infinitivo (respuesta).",
  },
  listening: {
    title: "Una entrevista en la biblioteca",
    context: "Gabriel es colombiano y vive en Tegucigalpa por trabajo. Quiere ser voluntario en una biblioteca infantil del barrio. Lo entrevista Karen, la coordinadora.",
    speakers: [
      { id: "karen", name: "Karen", voice: "es-MX-f", role: "coordinadora de la biblioteca" },
      { id: "gabriel", name: "Gabriel", voice: "es-CO-m", role: "candidato a voluntario" },
    ],
    script: [
      { speaker: "karen", text: "Hola, Gabriel. Gracias por venir. Primera pregunta: ¿por qué quieres ser voluntario aquí?" },
      { speaker: "gabriel", text: "Porque me encanta leer y creo que los libros son muy importantes para los niños." },
      { speaker: "karen", text: "¿Tienes experiencia con niños?" },
      { speaker: "gabriel", text: "No tengo hijos ni sobrinos, pero tengo mucha paciencia. Y en Colombia leo cuentos en una escuela." },
      { speaker: "karen", text: "Perfecto. ¿Prefieres leer cuentos o ayudar con las tareas?" },
      { speaker: "gabriel", text: "Las dos cosas. Leo bien en español e inglés, pero las matemáticas no son lo mío." },
      { speaker: "karen", text: "Ja, ja. No hay problema. ¿Cuántas horas tienes por semana? ¿Siete u ocho?" },
      { speaker: "gabriel", text: "No, menos: dos o tres. Trabajo mucho, pero los sábados por la mañana estoy libre." },
      { speaker: "karen", text: "Muy bien. Necesitas una foto y una copia del pasaporte para la ficha. ¿Para qué es tu mochila tan grande?" },
      { speaker: "gabriel", text: "Es para ustedes: traigo veinte cuentos para la biblioteca." },
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
            { q: "¿Qué quiere Gabriel?", options: ["trabajar en un colegio", "ser voluntario en una biblioteca", "comprar libros"], answer: 1, why: "Karen pregunta: _¿por qué quieres ser voluntario aquí?_" },
            { q: "¿Cómo es la entrevista?", options: ["Amable y positiva.", "Muy difícil.", "Muy corta y fría."], answer: 0, why: "Karen dice _Perfecto_, _Muy bien_ y se ríe." },
            { q: "¿Qué trae Gabriel en la mochila?", options: ["su pasaporte", "fotos", "cuentos"], answer: 2, why: "_Traigo veinte cuentos para la biblioteca_." },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a las razones, las opciones y los contrastes.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Por qué quiere ayudar Gabriel?", options: ["Porque no tiene trabajo.", "Porque le encanta leer.", "Porque tiene hijos."], answer: 1 },
            { q: "¿Qué no tiene Gabriel?", options: ["hijos ni sobrinos", "tiempo ni paciencia", "libros ni mochila"], answer: 0 },
            { q: "¿Qué no es lo suyo?", options: ["el inglés", "los cuentos", "las matemáticas"], answer: 2 },
            { q: "¿Cuándo está libre?", options: ["los sábados por la mañana", "todos los días", "los domingos por la tarde"], answer: 0 },
            { q: "¿Para qué necesita una foto?", options: ["para el pasaporte", "para la ficha", "para un cuento"], answer: 1 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en las palabras que unen ideas.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué hace la palabra marcada en cada frase?",
          categories: ["suma o da a elegir (y, e, o, u)", "contrasta o niega (pero, ni)", "razón u objetivo (porque, para)"],
          items: [
            { text: "Leo bien en español **e** inglés.", cat: 0, why: "_Inglés_ empieza por _i_: **e**." },
            { text: "¿Siete **u** ocho?", cat: 0, why: "_Ocho_ empieza por _o_: **u**." },
            { text: "No tengo hijos **ni** sobrinos.", cat: 1 },
            { text: "Trabajo mucho, **pero** los sábados estoy libre.", cat: 1 },
            { text: "**Porque** me encanta leer.", cat: 2 },
            { text: "Una copia del pasaporte **para** la ficha.", cat: 2 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Nuestros voluntarios",
    genre: "Página web de un proyecto",
    frame: "La biblioteca infantil «Letras del Barrio», en la colonia Kennedy de Tegucigalpa, presenta en su web a tres voluntarios.",
    text: [
      "Doña Rosario tiene setenta años. Es maestra jubilada y viene los martes y jueves. Ayuda con las tareas de matemáticas porque cree que nadie es malo para los números: solo necesitas paciencia. No usa computadora ni celular, pero sabe cien juegos con papel.",
      "Ismael estudia Diseño en la universidad. Viene una vez por semana para pintar las paredes con los niños. Dice: «Pinto aquí porque quiero un barrio con más colores y menos paredes grises».",
      "Mei es china y vive en Honduras desde hace dos años. Habla chino e inglés, y ahora estudia español. Lee cuentos sencillos con los más pequeños para practicar. «Los niños corrigen mi pronunciación, pero con mucho cariño», explica.",
      "¿Quieres ser voluntario? No necesitas experiencia ni títulos. Solo necesitas siete u ocho horas libres al mes y muchas ganas.",
    ],
    glossary: [
      { es: "jubilada", en: "retired" },
      { es: "nadie es malo para", en: "nobody is bad at" },
      { es: "con cariño", en: "kindly, with affection" },
      { es: "las ganas", en: "enthusiasm, desire" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee la página y responde.",
        items: [
          { q: "¿Qué días viene doña Rosario?", options: ["los lunes", "los martes y jueves", "los sábados"], answer: 1 },
          { q: "¿Para qué viene Ismael?", options: ["para pintar las paredes", "para leer cuentos", "para estudiar"], answer: 0 },
          { q: "¿Por qué lee cuentos Mei?", options: ["porque es maestra", "porque no tiene trabajo", "para practicar español"], answer: 2 },
          { q: "¿Qué necesitas para ser voluntario?", options: ["un título", "tiempo y ganas", "experiencia con niños"], answer: 1 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Qué dice la página? Clasifica cada frase.",
        categories: ["verdadero", "falso"],
        items: [
          { text: "Doña Rosario usa mucho el celular.", cat: 1, why: "_No usa computadora ni celular_." },
          { text: "Ismael estudia Diseño.", cat: 0 },
          { text: "Mei habla chino e inglés.", cat: 0 },
          { text: "Los niños corrigen a Mei con enojo.", cat: 1, why: "La corrigen _con mucho cariño_." },
          { text: "Para ser voluntario necesitas experiencia.", cat: 1, why: "_No necesitas experiencia ni títulos_." },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase de la página para ver qué gramática hay dentro.",
      items: [
        { quote: "No usa computadora ni celular", note: "**No** + verbo + … **ni** …: dos cosas que no usa." },
        { quote: "porque cree que nadie es malo para los números", note: "**Porque** + verbo conjugado (_cree_), y dentro una opinión con **creo que** en tercera persona: _cree que_." },
        { quote: "para pintar las paredes", note: "Objetivo: **para** + infinitivo." },
        { quote: "Habla chino e inglés", note: "_Inglés_ empieza por _i_: **e**." },
        { quote: "siete u ocho horas", note: "_Ocho_ empieza por _o_: **u**. Con otro número diríamos _seis o siete_." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: une ideas con y, o, pero, ni, y explica razones y objetivos.",
    exercises: [
      {
        id: "x1",
        type: "order",
        title: "Frases del proyecto",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["Vengo", "los", "sábados", "para", "ayudar", "con", "las", "tareas."], en: "I come on Saturdays to help with homework." },
          { words: ["No", "tengo", "experiencia,", "pero", "tengo", "paciencia."], en: "I don't have experience, but I have patience." },
          { words: ["¿Por", "qué", "lees", "cuentos", "en", "inglés?"], en: "Why do you read stories in English?" },
        ],
      },
      {
        id: "x2",
        type: "error",
        title: "Corrige la solicitud",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Hablo español y italiano.", answers: ["Hablo español e italiano."], why: "_Italiano_ empieza por _i_: **e**." },
          { sentence: "Quiero ser voluntaria para conozco a gente nueva.", answers: ["Quiero ser voluntaria para conocer a gente nueva."], why: "**Para** + infinitivo: _conocer_." },
          { sentence: "No tengo coche y moto.", answers: ["No tengo coche ni moto."], why: "Dos cosas negativas: **ni**." },
          { sentence: "Estudio por la noche por qué trabajo de día.", answers: ["Estudio por la noche porque trabajo de día."], why: "Es la razón, no una pregunta: **porque**, junto y sin tilde." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué respondes?",
        prompt: "Lee la situación y elige la mejor respuesta.",
        items: [
          { context: "Una amiga pregunta: «¿Por qué vas al mercado tan temprano?»", q: "Respondes:", options: ["Para hay fruta fresca.", "Porque la fruta es más fresca.", "Por qué compro fruta."], answer: 1, why: "Razón con verbo conjugado: **porque** la fruta _es_…" },
          { context: "Tu compañero pregunta: «¿Para qué necesitas mi cargador?»", q: "Respondes:", options: ["Para cargar el celular.", "Porque cargar el celular.", "Para cargo el celular."], answer: 0, why: "Objetivo: **para** + infinitivo." },
          { context: "En el restaurante no quieres ni carne ni pescado.", q: "Dices:", options: ["No como carne y pescado.", "No como carne o pescado, pero.", "No como carne ni pescado."], answer: 2, why: "Dos cosas negativas: **ni**." },
          { context: "Te gusta el apartamento, pero es caro.", q: "Dices:", options: ["Me gusta y es caro.", "Me gusta, pero es caro.", "Me gusta ni es caro."], answer: 1, why: "Contraste: **pero**, con coma delante." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases cortas. Después compara con el modelo.",
        items: [
          {
            prompt: "¿Por qué estudias español y para qué? Escribe una razón con «porque» y dos objetivos con «para».",
            model: "Estudio español porque mi pareja es hondureña. Estudio para hablar con su familia y para viajar por Centroamérica.",
            checklist: ["**Porque** + verbo conjugado", "**Para** + infinitivo dos veces", "_Por qué_ solo en preguntas"],
          },
          {
            prompt: "Describe tu fin de semana ideal con «y», «o», «pero» y «ni».",
            model: "El sábado leo un libro y cocino algo rico. El domingo voy a la playa o al campo. No trabajo ni miro el correo, pero llamo a mi madre.",
            checklist: ["Usas los cuatro conectores", "Coma delante de **pero**", "**Ni** después de una frase con **no**", "_e_ / _u_ cuando hace falta"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe una solicitud breve para ser voluntario o voluntaria en la biblioteca «Letras del Barrio».",
    context: "La biblioteca busca voluntarios y pide un mensaje corto: quién eres, por qué quieres ayudar, para qué, qué sabes hacer y cuándo tienes tiempo.",
    steps: [
      "Preséntate en una frase.",
      "Explica por qué quieres ayudar con **porque** y una idea con **creo que**.",
      "Di para qué quieres ir con **para** + infinitivo.",
      "Di qué sabes hacer y qué no, con **y**, **pero** o **ni**.",
      "Revisa: ¿hay un verbo conjugado después de _porque_ y un infinitivo después de _para_? ¿Usas _e_ o _u_ donde hace falta?",
    ],
    useLanguage: ["Quiero ayudar porque…", "Creo que…", "para + infinitivo", "No tengo… ni…", "…, pero…", "dos o tres horas"],
    model: [
      "Hola, me llamo Daniela y soy enfermera. Quiero ser voluntaria porque me encantan los niños. Creo que leer es muy importante. Voy a la biblioteca para leer cuentos y para ayudar con las tareas. Hablo español e inglés, pero no sé dibujar. No tengo coche ni moto, pero vivo cerca. Tengo libres dos o tres horas los viernes.",
    ],
    checklist: [
      "**Porque** va con un verbo conjugado; **para**, con infinitivo.",
      "Usas **pero** con una coma delante.",
      "Usas **ni** para dos cosas negativas.",
      "Escribes **e** delante de _i-_ / _hi-_ y **u** delante de _o-_ / _ho-_.",
    ],
    words: [40, 80],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "¿Por qué estudio español?",
        prompt: "Graba un audio corto para tu profesor: explica por qué estudias español, para qué lo usas y qué es fácil y difícil para ti.",
        prep: ["Estudio español porque…", "Lo uso para…", "Creo que…", "…es fácil, pero…"],
        seconds: 45,
        model: "Estudio español porque trabajo con clientes de México y Honduras. Lo uso para escribir correos y para hablar por teléfono. Creo que la gramática es lógica. Leer es fácil, pero escuchar es difícil, porque la gente habla muy rápido.",
        selfCheck: ["Digo _POR-que_ con fuerza en _por_.", "Uso **para** + infinitivo.", "Uso **pero** para un contraste."],
      },
      {
        title: "Elegir una tarea",
        prompt: "La coordinadora te ofrece tres tareas: leer cuentos, pintar paredes o preparar la merienda. Elige una, explica por qué y di qué no puedes hacer.",
        prep: ["Prefiero… porque…", "No sé… ni…", "…o…", "para + infinitivo"],
        seconds: 35,
        model: "Prefiero leer cuentos porque me encantan las historias. No sé pintar ni cocinar muy bien, pero puedo ayudar con la merienda los viernes. ¿Necesitan libros? Puedo traer siete u ocho para la biblioteca.",
        selfCheck: ["Explico mi razón con **porque**.", "Uso **ni** para dos cosas que no sé hacer.", "Uso **u** delante de _ocho_ si hace falta."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Explica", task: "Explica a tu profesor por qué estudias español y para qué lo usas.", phrases: ["Porque…", "Para…"] },
      { move: "Pregunta", task: "Pregunta a tu profesor por qué y para qué hace tres cosas de su rutina.", phrases: ["¿Por qué…?", "¿Para qué…?"] },
      { move: "Elige", task: "Ofrece dos opciones para la próxima clase y deja elegir a tu profesor.", phrases: ["¿Prefieres… o…?", "¿Uno u otro?"] },
      { move: "Contrasta", task: "Di dos cosas que te gustan de tu ciudad y una que no, con pero.", phrases: ["Es bonita y tranquila, pero…"] },
    ],
    bring: "Trae una frase con cada conector (y, e, o, u, pero, ni) sobre tu vida, y una razón y un objetivo para tu español.",
  },
  quiz: {
    items: [
      { type: "choice", q: "La película es larga, ___ muy interesante.", options: ["ni", "pero", "o"], answer: 1, why: "Contraste: **pero**." },
      { type: "gap", q: "En mi clase hay alumnos de nueve ___ diez años.", answers: [["o"]], why: "_Diez_ no empieza por _o_: **o**." },
      { type: "gap", q: "Compro pan ___ hielo para la fiesta.", answers: [["y"]], why: "_Hielo_ empieza por el sonido _ye_: se queda **y**." },
      { type: "gap", q: "Visito a mis abuelos los domingos ___ comer con ellos.", answers: [["para"]], why: "Objetivo + infinitivo: **para**." },
      { type: "error", sentence: "Mis hijos no ven la tele y juegan con el celular.", answers: ["Mis hijos no ven la tele ni juegan con el celular."], why: "Dos acciones negativas: **ni**." },
      { type: "error", sentence: "¿Porque no te gusta el café?", answers: ["¿Por qué no te gusta el café?"], why: "En la pregunta: **por qué**, separado y con tilde." },
      { type: "transform", source: "No llueve. No hace viento.", instruction: "Une las dos frases con «ni».", answers: ["No llueve ni hace viento."], why: "**No** + verbo + **ni** + verbo." },
      { type: "order", words: ["Ahorro", "dinero", "para", "viajar", "a", "Roatán."] },
      { type: "listen", q: "Escucha. ¿Qué dice la persona?", audio: "Porque mañana tengo un examen.", options: ["una pregunta", "una razón"], answer: 1, why: "Fuerza en _POR_: es **porque**, una razón." },
      { type: "open", prompt: "Escribe una frase con «porque» y otra con «para» sobre tu trabajo o tus estudios.", model: "Trabajo en casa porque mi oficina está lejos. Uso dos pantallas para trabajar mejor.", checklist: ["Porque + verbo conjugado", "Para + infinitivo", "Las dos ideas tienen sentido"] },
    ],
  },
  complete: {
    canNow: [
      "Unir ideas con y para sumar, o para elegir y pero para contrastar.",
      "Cambiar y por e delante de i- / hi-, y o por u delante de o- / ho-.",
      "Negar dos cosas con no… ni…",
      "Preguntar la razón con ¿por qué? y responder con porque + verbo conjugado.",
      "Decir un objetivo con para + infinitivo y dar una opinión con creo que.",
      "Pronunciar _por-QUÉ_ y _POR-que_ con la fuerza en su sitio.",
    ],
    review: ["español e inglés · siete u ocho · té o café", "No tengo coche ni moto, pero vivo cerca.", "¿Por qué? Porque + verbo · ¿Para qué? Para + infinitivo."],
  },
  related: [
    { path: "/conecta-la-frase", label: "Clase: Conectores elementales: y, e, o, u, pero, ni" },
    { path: "/ideas-dentro-de-ideas", label: "Clase: Porque y para + infinitivo: causa y finalidad" },
  ],
};
