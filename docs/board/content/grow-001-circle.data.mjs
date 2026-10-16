// GROW-001 · the free indexable Noche Abierta circle: DRAFT content data.
//
// Author: Martin (CLRQO). G4 review: Alejandro. Builder: Sofia.
// This file is the authoritative text of the circle. It lives under docs/ on
// purpose: nothing in app/ imports it yet. When Sofia builds GROW-001 she moves
// it (or a copy) under app/, adds it to the FREE ledger with tests, and runs
// the repo guards on it there. The readable version, with the rationale, is
// grow-001-circle.md next to this file.
//
// Shape notes for the build:
// - One level only (A2). Strings are plain strings, not { A, B, C } bands.
// - In-world lines put what a character says between «», like the rest of
//   Noche Abierta, so voice.ts reads it aloud (browser voice, gendered pitch).
//   Regional voices exist ONLY in `listening`, which goes through
//   scripts/generate-escucha-3d-audio.py (Edge voices from voices.json).
// - `beats[].kind` is "contrast" (a language check: one right form, each wrong
//   option names the feature it gets wrong) or "stimulus" (a conversation
//   prompt: frames to start from, no right answer, never scored).
// - Contrast beats: a wrong choice shows its `feedback` and lets the learner
//   choose again; the right choice shows `feedback`, then `after`.
// - `listening` is one item in the escucha-3d item shape
//   (app/escucha-3d/content/README.md), A2 word range 70–120.

export const GROW_001_CIRCLE = {
  id: "ascensor-favores",
  world: "noche-abierta",
  level: "A2",
  objective: "a2.fun.favores",
  related: ["a2.gram.se-lo", "a2.gram.oi-pronombres"],
  topics: ["ayuda", "amistad"],
  exponents: [
    { id: "le-llevo", form: "¿Le llevo…? / ¿Te ayudo…?", use: "ofrecer ayuda (usted / tú)" },
    { id: "se-las", form: "se lo, se la, se los, se las", use: "le/les + lo, la, los, las → se" },
    { id: "me-presta", form: "¿Me presta…? / ¿Me prestas…?", use: "pedir algo prestado" },
    { id: "se-lo-devuelvo", form: "Se lo devuelvo… / Te lo devuelvo…", use: "prometer devolver algo" },
    { id: "echar-una-mano", form: "¿Me echas una mano? → Claro, te ayudo / Lo siento, no puedo porque…", use: "responder a un favor: aceptar, poner una condición o decir que no" },
  ],

  title: "El ascensor no funciona",
  place: "Edificio de la calle Olmo",
  kicker: "SÁBADO · 20:40",
  premise: "Vas a cenar a casa de tu amiga Inés, en el cuarto piso. Llevas un postre. En el ascensor hay un cartel: «No funciona». Subes por la escalera.",

  cast: [
    { id: "marisol", name: "Doña Marisol", role: "Vecina del 4.º B", body: "f", age: "old", register: "usted" },
    { id: "joaquin", name: "Joaquín", role: "Vecino del segundo piso", body: "m", age: "young", register: "tú" },
  ],

  beats: [
    {
      id: "ofrecer",
      kind: "contrast",
      label: "Contraste lingüístico",
      exponent: ["le-llevo"],
      who: "marisol",
      context: "En el primer piso, una señora sube despacio con dos bolsas muy pesadas. Se para y te mira: «Buenas noches. ¿Usted también va arriba? Yo vivo en el cuarto, y con este ascensor…»",
      prompt: "¿Qué le dices para ofrecerle ayuda?",
      options: [
        { id: "le", label: "¿Le llevo las bolsas? Yo también voy al cuarto.", correct: true,
          feedback: "Bien: con «le llevo» ofreces el favor a una persona que te trata de usted." },
        { id: "me", label: "¿Me lleva las bolsas? Yo también voy al cuarto.", correct: false, feature: "dirección del favor",
          feedback: "Dirección del favor: «¿me lleva…?» le pide a ella que te lleve algo a ti. Para ofrecer, el favor va hacia ella: «¿le llevo…?»." },
        { id: "te", label: "¿Te llevo las bolsas? Yo también voy al cuarto.", correct: false, feature: "registro: tú o usted",
          feedback: "Registro: ella te habla de usted («¿Usted también va arriba?»). «Te» es para tú; con usted, «le»." },
      ],
      after: "«¡Ay, qué amable! Pero pesan mucho, ¿eh? Una es de botellas. ¿Seguro?»",
    },
    {
      id: "confirmar",
      kind: "contrast",
      label: "Contraste lingüístico",
      exponent: ["se-las"],
      who: "marisol",
      context: "Doña Marisol te da las dos bolsas. Una tiene botellas y pesa mucho.",
      prompt: "Confírmale que se las llevas hasta el cuarto piso.",
      options: [
        { id: "se-las", label: "Sí, seguro. Se las llevo hasta arriba.", correct: true,
          feedback: "Bien: «se» es para ella y «las» son las bolsas." },
        { id: "le-las", label: "Sí, seguro. Le las llevo hasta arriba.", correct: false, feature: "combinación de pronombres",
          feedback: "Combinación de pronombres: delante de lo, la, los o las, «le» cambia a «se». No se dice «le las», se dice «se las»." },
        { id: "se-la", label: "Sí, seguro. Se la llevo hasta arriba.", correct: false, feature: "número del pronombre",
          feedback: "Número del pronombre: son dos bolsas, y «las bolsas» se dice «las». «La» es para una sola cosa." },
      ],
      after: "Suben poco a poco hasta el cuarto piso. Doña Marisol abre su puerta, la del 4.º B, y te da las gracias tres veces.",
    },
    {
      id: "prestar",
      kind: "contrast",
      label: "Contraste lingüístico",
      exponent: ["me-presta", "se-lo-devuelvo"],
      who: "marisol",
      context: "Tocas en el 4.º A, la puerta de Inés. Nadie abre. Quieres llamarla, pero tu teléfono tiene un uno por ciento de batería y se apaga. Doña Marisol todavía está en su puerta: «¿Qué pasa? ¿No está su amiga?»",
      prompt: "Pídele prestado un cargador y dile cuándo se lo devuelves.",
      options: [
        { id: "me-presta", label: "¿Me presta su cargador un momento? Se lo devuelvo enseguida.", correct: true,
          feedback: "Bien: «¿me presta…?» pide el favor, y «se lo devuelvo» promete devolverle a ella el cargador." },
        { id: "le-presto", label: "¿Le presto mi cargador un momento? Se lo devuelvo enseguida.", correct: false, feature: "dirección del favor",
          feedback: "Dirección del favor: «¿le presto…?» ofrece tu cargador a ella. Tú lo necesitas, así que pides: «¿me presta…?»." },
        { id: "me-lo", label: "¿Me presta su cargador un momento? Me lo devuelvo enseguida.", correct: false, feature: "persona que recibe",
          feedback: "Persona que recibe: «me lo devuelvo» dice que te lo devuelves a ti. Se lo devuelves a ella: «se lo devuelvo»." },
      ],
      after: "«Claro, pase. El cargador está en la cocina. Y si quiere, llame desde mi teléfono.»",
    },
    {
      id: "joaquin",
      kind: "stimulus",
      label: "Estímulo de conversación",
      exponent: ["echar-una-mano"],
      who: "joaquin",
      context: "Mientras se carga tu teléfono, sube un chico con una caja vacía. «Hola, soy Joaquín, del segundo. ¿Vienes a la cena de Inés? Fue a comprar hielo y me dejó su llave para ti. Toma.» Te da la llave y sonríe: «Oye, mañana me mudo. ¿Me echas una mano con las cajas a las diez?»",
      prompt: "Contesta a Joaquín de verdad: di que sí, di que sí con una condición o di que no y explica por qué.",
      frames: [
        { id: "si", label: "Claro, te ayudo. ¿Hasta qué hora?" },
        { id: "condicion", label: "Sí, pero a las diez no puedo. ¿Te ayudo a las doce?" },
        { id: "no", label: "Lo siento, mañana no puedo porque… ¿Te ayudo otro día?" },
      ],
      teacher: "No hay respuesta correcta. Escucha si cambia a tú con Joaquín (él te trata de tú) y si da una razón con «porque».",
      after: "«Bueno, gracias por contestar. Nos vemos en la cena.»",
    },
  ],

  // The closing general conversation: five open questions about the
  // learner's real life (conversacion-general/audit.mjs rules for A2).
  talk: [
    "¿Qué cosas les pides prestadas a tus amigos o a tu familia?",
    "¿A quién le pides ayuda cuando tienes un problema en casa?",
    "¿Cuál fue el último favor que le hiciste a alguien?",
    "¿Cómo es tu relación con tus vecinos?",
    "¿Qué haces cuando alguien te pide un favor y no puedes ayudar?",
  ],

  // Its own listening, after the circle: the same evening retold in the past.
  listening: {
    id: "ascensor-favores",
    title: "Las bolsas de doña Marisol",
    place: "La escalera del cuarto piso",
    context: "Inés vuelve con el hielo. En la escalera, doña Marisol y Joaquín le cuentan qué pasó mientras ella no estaba.",
    speakers: [
      { name: "Inés", country: "España", voice: "es-ES-ElviraNeural" },
      { name: "Marisol", country: "Colombia", voice: "es-CO-SalomeNeural" },
      { name: "Joaquín", country: "México", voice: "es-MX-JorgeNeural" },
    ],
    lines: [
      { s: 0, text: "¡Doña Marisol! ¿Qué hace en la escalera? ¿Otra vez el ascensor?" },
      { s: 1, text: "Otra vez, hija. Llegué del mercado con dos bolsas enormes y en el primer piso ya no podía más." },
      { s: 0, text: "Ay, no. ¿Y quién la ayudó?" },
      { s: 1, text: "Tu amiga. Me las llevó hasta arriba, las dos." },
      { s: 2, text: "Y después tocó tu puerta, pero no estabas. Y se le apagó el teléfono." },
      { s: 1, text: "Por eso le presté mi cargador. Ahora está en mi cocina, tomando un café." },
      { s: 0, text: "¡Perdón! Bajé a comprar hielo y dejé el teléfono en casa." },
      { s: 2, text: "Tranquila. Le di tu llave, como me pediste." },
      { s: 0, text: "Gracias, Joaquín. Oye, ¿mañana te ayudo con la mudanza?" },
      { s: 0, text: "Doña Marisol, ¿viene a cenar con nosotros?" },
      { s: 1, text: "¿A cenar? Bueno, pero yo llevo las bebidas." },
    ],
    choice: [
      { q: "¿De qué hablan Inés, doña Marisol y Joaquín?", options: ["De lo que pasó mientras Inés no estaba", "De un problema con la cena de Inés", "De la mudanza de doña Marisol"], answer: 0 },
      { q: "¿Quién le llevó las bolsas a doña Marisol hasta arriba?", options: ["Joaquín", "Inés", "La amiga de Inés"], answer: 2 },
      { q: "¿Por qué Inés no contestó el teléfono?", options: ["Porque estaba en la ducha", "Porque fue a comprar hielo sin su teléfono", "Porque su teléfono no tenía batería"], answer: 1 },
      { q: "¿Qué va a llevar doña Marisol a la cena?", options: ["Un postre", "Las bebidas", "Un cargador"], answer: 1 },
    ],
    open: [
      { q: "¿Ayudas a tus vecinos? ¿Cómo?", model: "Sí, a veces. Le llevo las bolsas a mi vecina del primer piso." },
      { q: "¿Qué cosas prestas y qué cosas no prestas nunca?", model: "Presto libros, pero mi teléfono no se lo presto a nadie." },
      { q: "¿Alguna vez olvidaste el teléfono en casa? ¿Qué pasó?", model: "Sí, el mes pasado. Llegué tarde al trabajo y no pude avisar." },
    ],
    gaps: "Por eso le [presté] mi [cargador]. Ahora está en mi [cocina], tomando un [café].",
    glossary: [
      { word: "ascensor", meaning: "aparato que sube y baja a las personas en un edificio" },
      { word: "cargador", meaning: "cable que le da batería al teléfono" },
      { word: "mudanza", meaning: "cuando llevas todas tus cosas a otra casa" },
      { word: "no podía más", meaning: "estaba muy cansada y no podía seguir" },
    ],
  },

  // The teacher route: what the teacher does, in order, with minutes.
  teacherRoute: [
    { id: "calentamiento", minutes: 3, step: "Calentamiento", do: "Pregunta a dos o tres estudiantes: «¿Qué favor pediste esta semana?» y «¿Qué favor hiciste?». No corrijas todavía; anota cómo piden y cómo ofrecen." },
    { id: "circulo", minutes: 8, step: "El círculo", do: "Proyecta el círculo. En cada contraste, la clase vota una opción antes de tocarla. Después de cada respuesta, pregunta qué falla en las otras dos: la dirección del favor, tú o usted, o el pronombre." },
    { id: "foco", minutes: 3, step: "Foco en la forma", do: "Escribe en la pizarra: me lo, te lo, se lo (le → se). Añade dos ejemplos de la escena: «Se las llevo» y «Se lo devuelvo». Pide un ejemplo con tú: «Te lo devuelvo»." },
    { id: "joaquin", minutes: 3, step: "Estímulo: Joaquín", do: "En parejas, uno es Joaquín y pide el favor; el otro contesta de verdad. Cambian. Escucha si pasan a tú y si dan una razón." },
    { id: "escucha", minutes: 7, step: "Escucha", do: "Escuchan dos veces, contestan las cuatro preguntas, eligen una pregunta abierta y la contestan en voz alta, completan los huecos y leen la transcripción." },
    { id: "charla", minutes: 6, step: "Charla final", do: "En parejas, las cinco preguntas sobre su vida real. No continúes la historia ni pidas experiencias inventadas. Al final, cada pareja cuenta un favor que oyó." },
  ],
  // Optional extension on the page (10 min): the role cards in `page.cards`.

  // Copy for the indexable teacher page (Indexable Teacher Page standard).
  // English, like the conversation hub it hangs from. Spanish only in the
  // learner content. SEO structure is Alejandro's call.
  page: {
    proposedPath: "/spanish-conversation-activities/a2/asking-for-favors",
    title: "Asking for Favors in Spanish: Free A2 Role-Play with Audio | SPANISHCUE",
    h1: "Asking for and offering favors in Spanish: a free A2 role-play with audio",
    description: "A free A2 Spanish speaking activity: offer help, borrow something and promise to give it back, in a short playable scene with feedback, a listening and ten role cards. 30 minutes, ready to project.",
    level: "A2",
    objective: "Ask for, offer and return favors: ¿Le llevo…?, ¿Me presta…?, Se lo devuelvo…, and answer a request.",
    sequenceMinutes: 30,
    extensionMinutes: 10,
    intro: "Learners climb the stairs of a building where the lift is broken. They offer to carry a neighbor's bags, borrow a charger, promise to give it back, and answer a young neighbor who asks for help with his move. Three moments check one form each and explain what a wrong choice gets wrong. One moment is open: there is no right answer, only a real reply. A short listening retells the evening in the past, and five questions bring the conversation back to the learners' own lives.",
    whatItPractises: [
      "Offering help with usted and with tú: ¿Le llevo las bolsas? / ¿Te ayudo?",
      "Combining pronouns: le + las → se las; se lo devuelvo / te lo devuelvo.",
      "Asking to borrow something: ¿Me presta su cargador?",
      "Answering a request: accepting, setting a condition or saying no with a reason.",
    ],
    cards: [
      { es: "Un compañero de clase se muda el sábado. Ofrécele ayuda y pregunta a qué hora.", exponent: "le-llevo" },
      { es: "Va a llover y no tienes paraguas. Pídele uno prestado a tu vecina y dile cuándo se lo devuelves.", exponent: "me-presta" },
      { es: "Una compañera no tiene bolígrafo en el examen. Ofrécele el tuyo.", exponent: "le-llevo" },
      { es: "Tu vecino mayor tiene la compra en la puerta del edificio. Ofrécele ayuda; él te habla de usted.", exponent: "le-llevo" },
      { es: "Le prestaste un libro a un amigo hace un mes. Pregúntale con amabilidad cuándo te lo devuelve.", exponent: "se-lo-devuelvo" },
      { es: "Un compañero te pide tus apuntes, pero los necesitas hoy. Di que no y propón otro día.", exponent: "echar-una-mano" },
      { es: "Olvidaste el cargador en casa. Pídele uno a tu profesor con cortesía y dile cuándo se lo devuelves.", exponent: "se-lo-devuelvo" },
      { es: "Tu amiga te pide ayuda para pintar su habitación el domingo. Acepta, pero con una condición.", exponent: "echar-una-mano" },
      { es: "Un turista no puede subir su maleta por la escalera del metro. Ofrécele ayuda.", exponent: "le-llevo" },
      { es: "Devuelve algo que te prestaron, da las gracias y explica por qué te ayudó.", exponent: "se-lo-devuelvo" },
    ],
    faq: [
      { q: "What level is this activity?", a: "A2. The scene uses the present, ¿me presta…? and pronoun pairs (se lo, te lo); the listening retells it in the past (pretérito indefinido and imperfecto), as A2 learners meet them." },
      { q: "Do learners need an account?", a: "No. This scene, its listening and the role cards are free. The full Noche Abierta world, with every level and place, is part of SpanishCue PRO." },
      { q: "How long does it take?", a: "About 30 minutes in class: warm-up, the scene, a short focus on form, the open moment, the listening and the closing conversation. The ten role cards add about 10 minutes." },
    ],
  },
};
