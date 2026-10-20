import type { LiveLesson } from '../types';

/**
 * Lesson 445 · B2 · Antecedentes desconocidos: dondequiera que, cualquiera que (course unit G145).
 * Builds on G100 (lesson 218, relatives with a known or sought antecedent), G130 (sequence of
 * tenses) and G137–G138 (concession). One scene runs through the class: Rocío Medina coordinates
 * a volunteer reforestation day in the hills for a small environmental association; Lidia runs
 * the registration table, Ignacio is the forest ranger who decides where to plant, and Gabriel
 * Ferrer comes for the first time. Explorar: Rocío briefs Gabriel on arrival. Escuchar: Rocío's
 * voice note to the volunteers' group about the next day out (es-CO-SalomeNeural, ustedes).
 * Escribir: the welcome email for new volunteers.
 * Content: generalising relatives + subjunctive (cualquiera que venga, cualquier + noun + que,
 * quienquiera que, dondequiera / adondequiera que; cualesquiera and comoquiera que for
 * recognition); free relatives with an unknown referent (donde diga Ignacio, quien quiera, lo que
 * sea, donde sea, cuando sea, quien sea); reduplicative concessives (diga lo que diga, pase lo que
 * pase, vayas donde vayas, sea como sea, haga el tiempo que haga; past: hiciera el tiempo que
 * hiciera); B2 recap of negated or sought antecedents (no hay nadie que sepa, ¿hay alguien que
 * pueda…?) and the contrast with a known antecedent in the indicative (el chico que viene, donde
 * nos dijo Ignacio). Note (NGLE): with real, habitual facts the indicative also appears after
 * dondequiera / cualquiera que («Dondequiera que iba, la reconocían»); exercises use future,
 * eventual or rule contexts, where only the subjunctive fits. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 445,
  level: 'B2',
  title: 'Antecedentes desconocidos: dondequiera que, cualquiera que',
  subtitle: 'Hablar de personas, lugares y cosas sin identificar (cualquiera que venga, pase lo que pase) frente al indicativo de lo conocido.',
  legend: [
    { tone: 'blue', label: 'GENERALIZAR · cualquiera que venga, dondequiera que vayas, lo que sea → subjuntivo' },
    { tone: 'orange', label: 'CONCEDER · pase lo que pase, diga lo que diga: no importa cuál sea' },
    { tone: 'violet', label: 'NEGADO O BUSCADO · no hay nadie que sepa, ¿hay alguien que pueda…?' },
    { tone: 'teal', label: 'CONOCIDO · antecedente identificado → indicativo: el chico que viene' },
  ],
  optionNotes: {
    'Quien quiera': 'Separado, «quien quiera» significa «la persona que quiera». Para «no importa quién», se escribe en una palabra y con «que»: «quienquiera que».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuando no sabes quién, dónde ni qué', coach: '¿Lo conoces o puede ser cualquiera? Do you know it, or could it be anyone?',
      steps: [
        { title: 'Sábado, ocho de la mañana · Saturday, 8 a.m.', blocks: [
          { kind: 'lead', text: 'Rocío Medina coordina una jornada de reforestación en la sierra con una asociación de voluntarios. En la mesa de inscripción, Lidia ha colgado un cartel: «**Cualquiera que venga** debe registrarse». Rocío no sabe quién va a venir: puede ser cualquier persona. Hoy aprendes a hablar de personas, lugares y cosas que **no identificas**, y a decir que algo se mantiene **pase lo que pase**.', en: 'Rocío Medina coordinates a volunteer tree-planting day in the hills. At the registration table, Lidia has put up a sign: “Anyone who comes must register.” Rocío does not know who will come: it could be anyone. Today you learn to talk about people, places and things you cannot identify, and to say that something holds whatever happens.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno explica en cuál Rocío sabe de quién habla. Después dice qué modo lleva cada verbo marcado.', self: 'Lee las dos frases en voz alta. ¿En cuál sabe Rocío de quién habla? ¿Qué modo lleva cada verbo marcado? (In which sentence does Rocío know who she means?)' } },
          { kind: 'compare', title: 'Una persona concreta o cualquier persona · A specific person or anyone', columns: [
            { tone: 'teal', label: 'CONOCIDO · indicativo', sentence: 'El chico que [[viene|teal]] con Lidia se llama Gabriel.', idea: 'Rocío lo está viendo: es una persona identificada y real. Indicativo.', en: 'Rocío can see him: a real, identified person, so the relative clause is in the indicative.' },
            { tone: 'blue', label: 'DESCONOCIDO · subjuntivo', sentence: 'Cualquiera que [[venga|blue]] debe registrarse.', idea: 'No se sabe quién vendrá: es una persona cualquiera. Subjuntivo.', en: 'Nobody knows who will come: the sign is about any person at all, so the verb is in the subjunctive.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Cualquiera que venga debe registrarse.» ¿Sabe Rocío quién va a venir?', options: ['No: habla de cualquier persona, sea quien sea.', 'Sí: habla de una persona concreta.', 'Sí: habla de Gabriel.'], answer: 0, why: '«Cualquiera que» + subjuntivo no identifica a nadie: incluye a todas las personas posibles.', en: 'The sentence covers every possible person, not one specific person.' },
            { prompt: 'Rocío señala a la mesa: «La chica que ___ las hojas de inscripción es Lidia».', options: ['repartiera', 'reparta', 'reparte'], answer: 2, why: 'Rocío la ve y la identifica: antecedente conocido → indicativo, reparte.', en: 'Rocío points at someone she can see, so the indicative is needed.' },
          ] },
        ] },
        { title: 'Cualquiera, quienquiera, dondequiera · Anyone, whoever, wherever', mascot: '/brand/mascot/studying.webp', coach: 'Una palabra y «que». One word, then «que».', blocks: [
          { kind: 'concept', tone: 'blue', label: 'GENERALIZAR', question: '¿Hablas de cualquier persona, lugar o cosa, sin identificarla?', en: 'These words refer to any person, place or thing whatsoever. When the clause looks ahead (rules, plans, instructions, possibilities), the verb goes in the subjunctive.', formula: ['cualquiera · quienquiera · dondequiera · adondequiera + que + SUBJUNTIVO', 'cualquier + NOMBRE + que + SUBJUNTIVO'],
            meaning: 'Estas palabras incluyen **todas las posibilidades**: cualquier persona, cualquier lugar, cualquier cosa. En normas, planes, instrucciones y posibilidades, el verbo va en **subjuntivo**, porque nadie sabe todavía quién, dónde o qué será.',
            examples: [
              { es: 'Cualquiera que [[tenga|blue]] guantes puede empezar a cavar.', en: 'Anyone who has gloves can start digging.' },
              { es: 'Cualquier árbol que [[plantes|blue]] necesita agua el primer mes.', en: 'Any tree you plant needs water during the first month.' },
              { es: 'Quienquiera que [[haya cogido|blue]] mi pala, que me la devuelva, por favor.', en: 'Whoever has taken my spade, please give it back to me.' },
              { es: 'Dondequiera que [[estés|blue]], mándame tu ubicación si te pierdes.', en: 'Wherever you are, send me your location if you get lost.' },
            ],
            note: 'Con hechos reales y habituales del pasado también aparece el indicativo: «Dondequiera que **iba**, la gente la reconocía». Hoy practicas normas, planes e instrucciones, donde solo cabe el subjuntivo.' },
          { kind: 'table', title: 'Las formas y su registro · Forms and register', head: ['Forma', 'Se refiere a', 'Ejemplo', 'Registro'], rows: [
            ['**cualquiera que**', 'una persona, sea quien sea', 'Cualquiera que llegue tarde espera en la mesa.', 'general'],
            ['**cualquier** + nombre + **que**', 'persona o cosa (masc. y fem.)', 'Cualquier herramienta que uses, déjala en las cajas.', 'general'],
            ['**cualesquiera que**', 'plural, casi siempre con «ser»', 'cualesquiera que sean los motivos', 'formal, para reconocer'],
            ['**quienquiera que**', 'una persona desconocida', 'Quienquiera que haya dejado la verja abierta, que la cierre.', 'formal o enfático'],
            ['**dondequiera que** · **adondequiera que**', 'un lugar cualquiera (con movimiento: adonde-)', 'Adondequiera que vayas, lleva el silbato.', 'algo formal'],
            ['**comoquiera que**', 'una manera cualquiera', 'Comoquiera que lo hagas, hazlo con cuidado.', 'culto, para reconocer'],
          ], note: 'Se escriben en una sola palabra y siempre llevan «que» detrás. «Cualquiera» pierde la -a delante de un nombre masculino o femenino: cualquier árbol, cualquier persona.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lidia: «___ que estés, mándame tu ubicación si te pierdes».', options: ['Cualquiera', 'Donde', 'Dondequiera'], answer: 2, why: '«Dondequiera que» = en cualquier lugar. «Donde que» no existe, y «cualquiera» se refiere a personas.', en: 'Wherever you are, send me your location if you get lost.' },
            { prompt: '___ que haya cogido mis guantes, que me los devuelva, por favor.', options: ['Quienquiera', 'Cualquier', 'Quien quiera'], answer: 0, why: '«Quienquiera que» = la persona desconocida que lo hizo. «Cualquier» necesita un nombre detrás.', en: 'Whoever has taken my gloves, please give them back.' },
            { prompt: '«Cualquier árbol que plantes necesita agua.» ¿Por qué «cualquier» y no «cualquiera»?', options: ['Porque el verbo está en subjuntivo.', 'Porque «árbol» es masculino.', 'Porque va delante de un nombre.'], answer: 2, why: 'Delante de un nombre, de cualquier género, se dice «cualquier»: cualquier árbol, cualquier planta.', en: 'Why is it “cualquier” and not “cualquiera” here?' },
          ] },
        ] },
        { title: 'Lo que sea y pase lo que pase · Whatever, whatever happens', mascot: '/brand/mascot/standing.webp', coach: 'Da igual cuál: la frase se cumple. It does not matter which: the sentence still holds.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'LO QUE SEA, DONDE SEA', question: '¿Quieres decir «cualquier cosa, cualquier sitio, cualquier momento»?', en: 'Lo que sea, donde sea, cuando sea, quien sea and como sea are everyday ways of saying anything, anywhere, any time, anyone, anyhow. They are much more common in speech than quienquiera or dondequiera.', formula: ['lo que · donde · cuando · quien · como + sea', 'lo que · donde · cuando + quieras / digas / puedas'],
            meaning: 'En la lengua de todos los días, en lugar de «quienquiera» o «dondequiera», se dice **lo que sea**, **donde sea**, **cuando sea**, **quien sea**, **como sea**, o un relativo con subjuntivo: **donde quieras**, **lo que digas**.',
            examples: [
              { es: 'Ayudo con [[lo que sea|blue]]: cargar plantas, regar, cavar.', en: 'I’ll help with anything at all: carrying plants, watering, digging.' },
              { es: 'Llámame [[cuando sea|blue]]; tengo el móvil encendido.', en: 'Call me any time; my phone is on.' },
              { es: 'Deja la mochila [[donde quieras|blue]]: nadie la va a tocar.', en: 'Leave your rucksack wherever you like: nobody will touch it.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'CONCEDER CON REDUPLICACIÓN', question: '¿Quieres decir que no importa cuál sea la persona, la cosa o el lugar?', en: 'Repeating the same subjunctive verb around a relative word means “no matter what / where / how”: whatever the option, the main sentence still holds. It works like “aunque + subjunctive”.', formula: ['VERBO EN SUBJUNTIVO + lo que · donde · como · cuando · quien + EL MISMO VERBO', 'pase lo que pase · digas lo que digas · vayas donde vayas · sea como sea'],
            meaning: 'Se repite **el mismo verbo en subjuntivo** a los dos lados del relativo. Significa «no importa qué, dónde o cómo»: sea cual sea la opción, la frase principal se cumple.',
            examples: [
              { es: '[[Pase lo que pase|orange]], empezamos a las nueve.', en: 'Whatever happens, we start at nine.' },
              { es: '[[Diga lo que diga|orange]] la previsión, subimos al monte.', en: 'Whatever the forecast says, we are going up the hill.' },
              { es: '[[Vayas donde vayas|orange]], no te separes del grupo.', en: 'Wherever you go, don’t leave the group.' },
              { es: '[[Haga el tiempo que haga|orange]], la jornada se mantiene.', en: 'Whatever the weather, the day goes ahead.' },
            ],
            note: 'En un marco pasado, los dos verbos pasan al imperfecto de subjuntivo: «**Hiciera** el tiempo que **hiciera**, Rocío siempre llegaba la primera».' },
          { kind: 'tip', icon: '💡', title: 'Primos cercanos · Close relatives', text: 'Con dos opciones se usa una estructura parecida: «**Llueva o no llueva**, salimos», «**Quieras o no**, tienes que firmar». Y con «cual» hay concordancia: «**sea cual sea** el resultado», «**sean cuales sean** los resultados».', en: 'With two alternatives Spanish uses a similar pattern: “rain or shine, we leave”, “like it or not, you have to sign”. With “cual” the verb and the pronoun agree in number: sea cual sea el resultado, sean cuales sean los resultados.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Le digas lo que le ___, Ignacio no cambia de opinión.', options: ['dices', 'digas', 'dirás'], answer: 1, why: 'Reduplicación: el mismo verbo en subjuntivo a los dos lados: digas lo que le digas.', en: 'Whatever you say to him, Ignacio won’t change his mind.' },
            { prompt: 'Gabriel: «Puedo ayudar con lo que ___: cargar, regar o plantar».', options: ['es', 'será', 'sea'], answer: 2, why: '«Lo que sea» = cualquier cosa. Es una fórmula fija con subjuntivo.', en: 'I can help with anything: carrying, watering or planting.' },
            { prompt: '«Vayas donde vayas» significa…', options: ['Tienes que ir a un sitio concreto.', 'No importa adónde vayas.', 'Ve a cualquier sitio menos este.'], answer: 1, why: 'La reduplicación expresa concesión: sea cual sea el lugar, la frase principal se cumple.', en: 'What does “vayas donde vayas” mean?' },
          ] },
        ] },
        { title: 'Negado, buscado o conocido · Denied, sought or known', mascot: '/brand/mascot/speaking.webp', coach: '¿Existe y lo conoces? Does it exist, and do you know it?', blocks: [
          { kind: 'compare', title: 'Repaso de la clase 100, a nivel B2 · Review of class 100, at B2 level', columns: [
            { tone: 'teal', label: 'CONOCIDO · indicativo', sentence: 'Conozco a una bióloga que [[sabe|teal]] mucho de encinas.', idea: 'La persona existe y la identificas.', en: 'The person exists and you know who she is: indicative.' },
            { tone: 'violet', label: 'BUSCADO · subjuntivo', sentence: '¿Hay alguien que [[sepa|violet]] podar encinas?', idea: 'Buscas a una persona, pero no sabes si existe ni quién es.', en: 'You are looking for someone, but you do not know whether such a person exists.' },
            { tone: 'violet', label: 'NEGADO · subjuntivo', sentence: 'No hay nadie que [[conozca|violet]] la sierra como Ignacio.', idea: 'Niegas que exista esa persona.', en: 'You deny that such a person exists: subjunctive.' },
          ] },
          { kind: 'table', title: 'El mismo relativo, dos modos · Same relative, two moods', head: ['Indicativo · ya se sabe', 'Subjuntivo · todavía no se sabe o es cualquiera'], rows: [
            ['Ayer plantamos donde nos **dijo** Ignacio.', 'Mañana plantaremos donde nos **diga** Ignacio.'],
            ['Hice lo que me **pediste**.', 'Haré lo que me **pidas**.'],
            ['El voluntario que **llegó** primero abrió la verja.', 'El voluntario que **llegue** primero abre la verja.'],
            ['Tengo un compañero que **habla** inglés.', 'Necesitamos un voluntario que **hable** inglés.'],
          ], note: 'La pregunta clave no es la palabra (donde, lo que, el que), sino si el hablante **identifica** el antecedente como algo real y conocido.' },
          { kind: 'decide', title: '¿Indicativo o subjuntivo en la relativa?', steps: [
            { q: '¿El hablante identifica a la persona, el lugar o la cosa, y sabe que existe?', yes: '**Indicativo**: «La chica que reparte las hojas es Lidia».', no: 'next' },
            { q: '¿Es cualquiera, todavía no se sabe, se busca o no existe?', yes: '**Subjuntivo**: «Cualquiera que venga…», «donde diga Ignacio», «No hay nadie que sepa…».', no: 'Vuelve a leer la frase: ¿de quién o de qué habla exactamente?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la asociación no hay nadie que ___ podar encinas.', options: ['sepa', 'sabe', 'supo'], answer: 0, why: 'Antecedente negado («no hay nadie»): subjuntivo, sepa.', en: 'Nobody in the association knows how to prune holm oaks.' },
            { prompt: 'Ignacio todavía no ha decidido la zona. Mañana plantaremos donde nos ___.', options: ['diga', 'dice', 'dirá'], answer: 0, why: 'El lugar todavía no se conoce: donde + subjuntivo, diga. Con un lugar aún sin decidir, lo normal es el subjuntivo, no el futuro.', en: 'Ignacio hasn’t decided yet: tomorrow we will plant wherever he tells us.' },
            { prompt: 'Ayer plantamos donde nos ___ Ignacio.', options: ['dijera', 'diga', 'dijo'], answer: 2, why: 'Hecho real y conocido del pasado: indicativo, dijo.', en: 'Yesterday we planted where Ignacio told us.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Forma, modo y concordancia. Form, mood and agreement.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: la forma, el modo o la concordancia. Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: la forma, el modo o la concordancia. Toca para ver la corrección. (Is it the form, the mood or the agreement?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Cualquier que venga debe registrarse.', right: 'Cualquiera que venga debe registrarse.', why: 'Sin nombre detrás, la forma completa: cualquiera. «Cualquier» solo va delante de un nombre. (Cualquier needs a noun after it.)' },
            { wrong: 'Cualquiera persona puede participar.', right: 'Cualquier persona puede participar.', why: 'Delante de un nombre, también femenino, se usa «cualquier».' },
            { wrong: 'Cualquiera que vendrá el sábado debe traer guantes.', right: 'Cualquiera que venga el sábado debe traer guantes.', why: 'Con un antecedente no identificado, la relativa va en subjuntivo, no en futuro.' },
            { wrong: 'Pase lo que pasa, salimos a las nueve.', right: 'Pase lo que pase, salimos a las nueve.', why: 'En la reduplicación los dos verbos son iguales y están en subjuntivo.' },
            { wrong: 'No hay nadie que conoce la sierra como Ignacio.', right: 'No hay nadie que conozca la sierra como Ignacio.', why: 'Antecedente negado: subjuntivo.' },
            { wrong: 'Sea cual sea los motivos, avisa si no vienes.', right: 'Sean cuales sean los motivos, avisa si no vienes.', why: '«Los motivos» es plural: el verbo y «cual» concuerdan, sean cuales sean.' },
            { wrong: 'Donde quiera que vayas, lleva agua.', right: 'Dondequiera que vayas, lleva agua.', why: 'Se escribe en una palabra. Separado, «donde quiera» significa «en el lugar que (él) quiera».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«___ como sea, mañana plantamos los cien árboles».', options: ['Sea', 'Es', 'Será'], answer: 0, why: '«Sea como sea» = de cualquier manera. Fórmula fija con subjuntivo.', en: 'One way or another, tomorrow we plant the hundred trees.' },
            { prompt: 'Viene un grupo de Irlanda. Necesitamos un voluntario que ___ inglés.', options: ['hable', 'habla', 'hablará'], answer: 0, why: 'Se busca una persona que todavía no se ha identificado: subjuntivo, hable.', en: 'A group is coming from Ireland: we need a volunteer who speaks English.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una norma de su trabajo o de su casa con «cualquiera que…» y una cosa que hace siempre «pase lo que pase». Tú preguntas: «¿Conoces a alguien que…?» y tu alumno contesta con indicativo o subjuntivo según su respuesta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Gabriel llega a la sierra', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'En el punto de encuentro · At the meeting point', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rocío y tu alumno es Gabriel. Después tu alumno toca cada expresión marcada y dice si generaliza, concede, busca o identifica.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y decide si generaliza, concede, busca o identifica. (Does it generalise, concede, search or identify?)' } },
          { kind: 'explore', title: 'El voluntario nuevo', setting: 'Sábado, ocho y media, en el aparcamiento de la sierra. Gabriel viene por primera vez y Rocío le explica cómo funciona la jornada. Se tratan de tú. (Saturday, 8.30, in the car park in the hills: Rocío explains to a first-time volunteer how the day works.)', lines: [
            { who: 'Gabriel', text: 'Hola, Rocío. Soy Gabriel, el nuevo. Lidia me ha dicho que [[cualquiera que venga|blue]] por primera vez tiene que hablar contigo.', en: 'Hi, Rocío. I’m Gabriel, the new one. Lidia told me that anyone coming for the first time has to talk to you.' },
            { who: 'Rocío', text: '¡Bienvenido! Primero firmas en su mesa y luego te damos guantes y una azada. [[Cualquier herramienta que uses|blue]], la dejas en las cajas de la entrada al terminar.', en: 'Welcome! First you sign at her table, then we give you gloves and a hoe. Whatever tool you use, leave it in the boxes by the entrance when you finish.' },
            { who: 'Gabriel', text: '¿Y dónde vamos a plantar? ¿Hay alguna zona marcada?', en: 'And where are we going to plant? Is there a marked area?' },
            { who: 'Rocío', text: 'Plantaremos [[donde diga|blue]] Ignacio, el guarda forestal. Lo decide cada mañana, según cómo esté el suelo.', en: 'We’ll plant wherever Ignacio, the forest ranger, tells us. He decides every morning, depending on the state of the soil.' },
            { who: 'Gabriel', text: 'Me han contado que es muy estricto.', en: 'I’ve heard he is very strict.' },
            { who: 'Rocío', text: 'Lo es, pero [[no hay nadie que conozca|violet]] la sierra como él. [[Diga lo que diga|orange]], hazle caso.', en: 'He is, but nobody knows these hills like he does. Whatever he says, do as he tells you.' },
            { who: 'Gabriel', text: 'Entendido. Oye, el pronóstico dice que puede llover por la tarde. ¿Se suspende la jornada?', en: 'Got it. By the way, the forecast says it may rain in the afternoon. Is the day called off?' },
            { who: 'Rocío', text: 'No: [[pase lo que pase|orange]], empezamos a las nueve. Además, con un poco de lluvia la tierra está más blanda.', en: 'No: whatever happens, we start at nine. Besides, with a bit of rain the soil is softer.' },
            { who: 'Gabriel', text: 'Genial. ¿Y hay [[alguien que pueda|violet]] llevarme de vuelta a la ciudad? He venido en autobús.', en: 'Great. And is there anyone who could give me a lift back to town? I came by bus.' },
            { who: 'Rocío', text: 'Lidia, [[que vive|teal]] en el centro, sale a las cuatro. [[Cualquier cosa que necesites|blue]], se lo dices a ella o a mí.', en: 'Lidia, who lives in the centre, leaves at four. Anything you need, just tell her or me.' },
            { who: 'Gabriel', text: 'Gracias. Y si hace falta, ayudo con [[lo que sea|blue]]: cargar plantones, regar…', en: 'Thanks. And if needed, I’ll help with anything: carrying seedlings, watering…' },
            { who: 'Rocío', text: 'Perfecto. Eso sí: [[vayas donde vayas|orange]], lleva siempre agua y el silbato. Aquí el tiempo cambia muy rápido.', en: 'Perfect. One thing, though: wherever you go, always take water and your whistle. The weather changes very quickly up here.' },
          ], notes: {
            'cualquiera que venga': 'Generaliza: cualquier persona nueva, sea quien sea. Subjuntivo porque no se identifica a nadie.',
            'Cualquier herramienta que uses': '«Cualquier» + nombre + que + subjuntivo. La frase va al principio como tema y se retoma con «la dejas».',
            'donde diga': 'Lugar todavía desconocido: Ignacio no ha decidido. Si ya lo hubiera dicho: «donde dijo Ignacio».',
            'no hay nadie que conozca': 'Antecedente negado: subjuntivo. Es una forma enfática de elogiar a Ignacio.',
            'Diga lo que diga': 'Reduplicación concesiva: no importa qué diga Ignacio; la frase principal (hazle caso) se cumple.',
            'pase lo que pase': 'Fórmula muy frecuente: ocurra lo que ocurra. La jornada se mantiene.',
            'alguien que pueda': 'Antecedente buscado: Gabriel no sabe si existe esa persona. Subjuntivo.',
            'que vive': 'Antecedente conocido (Lidia) y dato real: indicativo. Es una relativa explicativa, entre comas.',
            'Cualquier cosa que necesites': 'Ofrecimiento abierto: cualquier necesidad posible. Equivale a «lo que necesites».',
            'lo que sea': 'Forma coloquial de «cualquier cosa». Más frecuente en la conversación que «comoquiera» o «quienquiera».',
            'vayas donde vayas': 'Reduplicación con «donde»: no importa adónde vayas. En registro formal también: «dondequiera que vayas».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Quién decide dónde se planta?', options: ['Rocío, la noche anterior.', 'Ignacio, cada mañana.', 'Lidia, según la lista.'], answer: 1, why: '«Plantaremos donde diga Ignacio. Lo decide cada mañana».', en: 'Who decides where they plant?' },
            { prompt: '¿Qué pasa si llueve?', options: ['La jornada se suspende.', 'Empiezan más tarde.', 'Empiezan a las nueve igualmente.'], answer: 2, why: '«Pase lo que pase, empezamos a las nueve».', en: 'What happens if it rains?' },
            { prompt: '¿Cómo va a volver Gabriel a la ciudad?', options: ['En autobús, como vino.', 'Con Ignacio.', 'Con Lidia, que sale a las cuatro.'], answer: 2, why: '«Lidia, que vive en el centro, sale a las cuatro».', en: 'How will Gabriel get back to town?' },
          ] },
        ] },
        { title: 'Gabriel escribe a su hermana · Gabriel texts his sister', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Mensajes con Marina · Messages with Marina', lines: [
            { who: 'Gabriel', text: 'Ya estoy en la sierra. Rocío dice que ___ que venga por primera vez tiene que firmar un seguro.', options: ['cualquier', 'cualquiera', 'quien'], answer: 1, why: 'Sin nombre detrás: «cualquiera que» + subjuntivo. «Quien que» no existe.' },
            { who: 'Marina', text: '¿Y si llueve? ¿Volvéis antes?' },
            { who: 'Gabriel', text: 'No. ___ lo que pase, empezamos a las nueve.', options: ['Pase', 'Pasa', 'Pasará'], answer: 0, why: 'Reduplicación: los dos verbos en subjuntivo, pase lo que pase.' },
            { who: 'Marina', text: '¿Y hay alguien que te ___ traer de vuelta?', options: ['pueda', 'puede', 'pudo'], answer: 0, why: 'Marina busca a una persona que no conoce: antecedente buscado → subjuntivo.' },
            { who: 'Gabriel', text: 'Sí, Lidia, una chica que ___ en el centro.', options: ['vive', 'viviera', 'viva'], answer: 0, why: 'Gabriel ya la identifica: antecedente conocido → indicativo, vive.' },
            { who: 'Marina', text: '¡Qué bien! Pero no te pierdas por el monte.' },
            { who: 'Gabriel', text: 'Tranquila: ___ donde vaya, llevo el silbato.', options: ['voy', 'vaya', 'iré'], answer: 1, why: 'Reduplicación en primera persona: vaya donde vaya.' },
          ] },
          { kind: 'teacher', text: 'Marina usa «volvéis» porque es de España; en América diría «vuelven». Pregunta extra: «¿Hay alguien en tu familia que sepa orientarse en el monte?». Tu alumno responde con indicativo o subjuntivo según la respuesta real.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Cualquiera, concesión o algo conocido? Anyone, concession or something known?',
      steps: [
        { title: 'Las normas de la jornada · The rules of the day', blocks: [
          { kind: 'choice', items: [
            { context: 'Cartel de la mesa de inscripción. (Sign at the registration table.)', prompt: '«___ voluntario que llegue después de las nueve debe esperar en la mesa».', options: ['Cualquiera que', 'Cualquiera', 'Cualquier'], answer: 2, why: 'Delante del nombre «voluntario» se usa la forma corta: cualquier.', en: 'Any volunteer who arrives after nine must wait at the table.' },
            { context: 'Rocío a una voluntaria. (Rocío to a volunteer.)', prompt: 'Deja la mochila donde ___; luego la buscamos.', options: ['quieras', 'quieres', 'querrás'], answer: 0, why: 'Cualquier lugar posible: donde + subjuntivo. «Donde quieres» describiría un lugar ya conocido.', en: 'Leave your rucksack wherever you like; we’ll fetch it later.' },
            { context: 'Lidia habla de Rocío. (Lidia talks about Rocío.)', prompt: 'No conozco a nadie que ___ tan rápido como ella.', options: ['plantó', 'plante', 'planta'], answer: 1, why: 'Antecedente negado («no conozco a nadie»): subjuntivo.', en: 'I don’t know anyone who plants as fast as she does.' },
            { context: 'Ignacio da instrucciones. (Ignacio gives instructions.)', prompt: '___ lo que veas, no arranques ninguna planta pequeña.', options: ['Viendo', 'Ves', 'Veas'], answer: 2, why: 'Reduplicación concesiva: el mismo verbo en subjuntivo, veas lo que veas.', en: 'Whatever you see, don’t pull up any small plants.' },
            { context: 'Lidia recuerda los primeros años de la asociación. (Lidia remembers the early years.)', prompt: '«Hiciera el tiempo que ___, Rocío siempre llegaba la primera».', options: ['haga', 'hacía', 'hiciera'], answer: 2, why: 'Marco pasado: los dos verbos de la reduplicación van en imperfecto de subjuntivo.', en: 'Whatever the weather, Rocío was always the first to arrive.' },
          ] },
        ] },
        { title: '¿Qué hace la frase? · What does the sentence do?', blocks: [
          { kind: 'classify', title: 'Generaliza, concede o identifica · Generalise, concede or identify', categories: [
            { id: 'generaliza', label: 'GENERALIZA · cualquiera, lo que sea (subjuntivo)', tone: 'blue' },
            { id: 'concede', label: 'CONCEDE · no importa qué (reduplicación)', tone: 'orange' },
            { id: 'conocido', label: 'IDENTIFICA ALGO CONOCIDO (indicativo)', tone: 'teal' },
          ], items: [
            { text: 'Te llevamos a casa, vivas donde vivas.', answer: 'concede', why: 'Reduplicación: no importa dónde vivas.' },
            { text: 'Cualquiera que tenga experiencia puede guiar un grupo.', answer: 'generaliza', why: 'Cualquier persona con esa condición: subjuntivo.' },
            { text: 'La chica que reparte los guantes es Lidia.', answer: 'conocido', why: 'Persona identificada: indicativo.' },
            { text: 'Quienquiera que haya dejado la verja abierta, que la cierre.', answer: 'generaliza', why: 'Persona desconocida: quienquiera que + subjuntivo.' },
            { text: 'Digan lo que digan las previsiones, mañana subimos.', answer: 'concede', why: 'Reduplicación: no importa qué digan.' },
            { text: 'Plantamos donde nos indicó Ignacio ayer.', answer: 'conocido', why: 'Lugar real y ya indicado: indicativo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Cualquier que quiera café puede servirse en la mesa de Lidia.', ok: false, options: ['Cualquier quien quiera café puede servirse en la mesa de Lidia.', 'Cualquier que quiere café puede servirse en la mesa de Lidia.', 'Cualquiera que quiera café puede servirse en la mesa de Lidia.'], answer: 2, why: 'Sin nombre detrás, «cualquiera»; y subjuntivo porque es una oferta abierta a cualquier persona.' },
            { sentence: 'Pase lo que pasa, no te separes del grupo.', ok: false, options: ['Pase lo que pase, no te separes del grupo.', 'Pasa lo que pase, no te separes del grupo.', 'Pase lo que pasará, no te separes del grupo.'], answer: 0, why: 'Reduplicación: el mismo verbo en subjuntivo a los dos lados.' },
            { sentence: 'No hay ningún voluntario que haya traído botas de agua.', ok: true, why: 'Correcta: antecedente negado + perfecto de subjuntivo (acción anterior a ahora).' },
            { sentence: 'Necesitamos una persona que sabe primeros auxilios.', ok: false, options: ['Necesitamos una persona que sepa primeros auxilios.', 'Necesitamos una persona que sabrá primeros auxilios.', 'Necesitamos una persona quien sepa primeros auxilios.'], answer: 0, why: 'Se busca una persona aún no identificada: subjuntivo. «Quien» sin preposición no introduce este tipo de relativa.' },
            { sentence: 'Adondequiera que vayas, lleva el silbato.', ok: true, why: 'Correcta: adondequiera que + subjuntivo, con verbo de movimiento.' },
            { sentence: 'Sea cual sea los motivos, avisa si no puedes venir.', ok: false, options: ['Sea cuales sea los motivos, avisa si no puedes venir.', 'Sea cual sean los motivos, avisa si no puedes venir.', 'Sean cuales sean los motivos, avisa si no puedes venir.'], answer: 2, why: 'Concordancia con «los motivos»: los dos verbos y «cual» en plural.' },
          ] },
        ] },
        { title: 'El chat del viernes · Friday’s chat', blocks: [
          { kind: 'chat-fill', title: 'Lidia y Rocío preparan la jornada · Lidia and Rocío get ready', lines: [
            { who: 'Lidia', text: 'Ya tengo impresas las hojas de inscripción. ¿Y si mañana aparece gente que no se ha apuntado?' },
            { who: 'Rocío', text: 'Que firme ___ que llegue, aunque no esté en la lista.', options: ['alguno', 'cualquiera', 'cualquier'], answer: 1, why: 'Pronombre sin nombre detrás: cualquiera que + subjuntivo.' },
            { who: 'Lidia', text: 'Vale. ¿Hay alguien que ___ ayudarme con la mesa a las ocho?', options: ['puede', 'podrá', 'pueda'], answer: 2, why: 'Antecedente buscado: Lidia no sabe si existe esa persona. Subjuntivo.' },
            { who: 'Rocío', text: 'Gabriel, el nuevo. Es el chico que ___ ayer para preguntar por el autobús.', options: ['llame', 'llamara', 'llamó'], answer: 2, why: 'Persona identificada y hecho real del pasado: indicativo, llamó.' },
            { who: 'Lidia', text: 'Perfecto. ¿Y las previsiones? Dicen que puede llover.' },
            { who: 'Rocío', text: 'Dan igual: ___ el tiempo que haga, empezamos a las nueve.', options: ['Hace', 'Haga', 'Hará'], answer: 1, why: 'Reduplicación: haga el tiempo que haga.' },
            { who: 'Lidia', text: 'Entendido. Llevo café y bizcocho para ___ quiera.', options: ['quienquiera', 'quien', 'quien quiere'], answer: 1, why: '«Para quien quiera» = para cualquier persona que quiera. «Quienquiera» necesitaría «que» detrás.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Pase', 'lo', 'que', 'pase,', 'empezamos', 'a', 'las', 'nueve'], accept: ['Pase lo que pase, empezamos a las nueve'], en: 'Whatever happens, we start at nine.' },
            { tiles: ['No', 'hay', 'nadie', 'que', 'conozca', 'mejor', 'la', 'sierra'], accept: ['No hay nadie que conozca mejor la sierra', 'No hay nadie que conozca la sierra mejor'], en: 'Nobody knows the hills better.' },
            { tiles: ['Cualquier', 'persona', 'que', 'llegue', 'tarde', 'debe', 'avisar', 'a', 'Lidia'], accept: ['Cualquier persona que llegue tarde debe avisar a Lidia'], en: 'Anyone who arrives late must let Lidia know.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Dilo con la estructura de hoy · Say it with today’s structure', items: [
            { prompt: 'Cualquier persona puede venir, pero tiene que registrarse.', instruction: 'Únelo en una sola frase. Empieza: «Cualquiera que…».', accept: ['Cualquiera que venga tiene que registrarse', 'Cualquiera que venga debe registrarse'] },
            { prompt: 'No importa dónde vivas: te llevamos a casa.', instruction: 'Usa la reduplicación. Empieza: «Vivas…».', accept: ['Vivas donde vivas, te llevamos a casa', 'Vivas donde vivas te llevamos a casa'] },
            { prompt: 'Necesitamos una persona para el botiquín. No importa quién: tiene que saber primeros auxilios.', instruction: 'Dilo en una frase. Empieza: «Necesitamos una persona que…».', accept: ['Necesitamos una persona que sepa primeros auxilios', 'Necesitamos una persona que sepa de primeros auxilios'] },
            { prompt: 'En aquella época no importaba el tiempo que hiciera: Rocío salía cada sábado.', instruction: 'Usa la reduplicación en pasado. Empieza: «Hiciera…».', accept: ['Hiciera el tiempo que hiciera, Rocío salía cada sábado', 'Hiciese el tiempo que hiciese, Rocío salía cada sábado'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice dos normas reales de su trabajo o de su edificio con «cualquiera que…» o «cualquier + nombre + que…», y una costumbre que mantiene «haga el tiempo que haga».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio para el grupo', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'La próxima jornada · The next planting day', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada «cualquiera que», cada reduplicación y cada antecedente buscado o negado. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada «cualquiera que», cada reduplicación y cada «alguien que» o «nadie que». (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Rocío', channel: 'NOTA DE VOZ · GRUPO DE VOLUNTARIOS', src: '/audio/grammar-live/445.mp3',
            before: 'Dos semanas después, la asociación prepara otra jornada al otro lado de la sierra, y Rocío, que es colombiana, manda un audio al grupo de voluntarios. ¿Qué crees que cuenta: normas, horarios, problemas…? (Rocío sends a voice note to the volunteers’ group about the next planting day. What do you think she talks about?)',
            gist: { prompt: '¿Para qué manda Rocío el audio? · Why does Rocío send the voice note?', options: ['Para explicar las normas y la organización de la próxima jornada.', 'Para presentar a Ignacio al grupo.', 'Para cancelar la jornada por la lluvia.'], answer: 0, why: 'Repasa la inscripción, el horario, la zona, la seguridad y el regreso.', en: 'She goes through the rules and practical arrangements for the next day.' },
            details: [
              { prompt: '¿Qué tiene que hacer quien viene por primera vez?', options: ['Llamar a Rocío la noche anterior.', 'Firmar el seguro en la mesa de Lidia.', 'Traer su propia azada.'], answer: 1, why: '«Cualquiera que venga por primera vez tiene que pasar por la mesa de Lidia y firmar el seguro».', en: 'What must first-timers do?' },
              { prompt: '¿Qué pasa con la lluvia?', options: ['Empiezan a las diez.', 'Cambian la jornada al domingo.', 'Empiezan a las nueve igualmente.'], answer: 2, why: '«Las previsiones dan lluvia, pero pase lo que pase, empezamos a las nueve en punto».', en: 'What about the rain?' },
              { prompt: '¿Por qué esta vez plantan donde diga Ignacio?', options: ['Porque Rocío no conoce la zona.', 'Porque es más rápido.', 'Porque una parte del monte todavía está cerrada.'], answer: 2, why: '«…porque una parte del monte todavía está cerrada».', en: 'Why will they plant wherever Ignacio says this time?' },
              { prompt: '¿Qué necesita Rocío?', options: ['Más voluntarios con experiencia.', 'Alguien que traiga comida.', 'Alguien que pueda llevar las herramientas de vuelta a la sede.'], answer: 2, why: '«Necesitamos a alguien que pueda llevar las herramientas de vuelta a la sede».', en: 'What does Rocío need?' },
            ],
            transcript: 'Hola a todos, les habla Rocío. Les dejo este audio con lo del sábado, porque ya somos más de cuarenta. Primero: [[cualquiera que venga|blue]] por primera vez tiene que pasar por la mesa de Lidia y firmar el seguro; sin firma, no se puede plantar. Segundo, el clima. Las previsiones dan lluvia, pero [[pase lo que pase|orange]], empezamos a las nueve en punto. Traigan botas y un impermeable, [[el que sea|blue]]: no hace falta que sea nuevo. Tercero: esta vez plantamos [[donde diga|blue]] Ignacio, el guarda forestal, porque una parte del monte todavía está cerrada. [[Diga lo que diga|orange]], háganle caso, que él conoce cada sendero. Y les pido una cosa: [[vayan donde vayan|orange]], no se separen de su grupo y lleven siempre el silbato. Por último, el regreso. Esta vez no hay nadie que [[tenga|violet]] una camioneta grande, así que necesitamos a [[alguien que pueda|violet]] llevar las herramientas de vuelta a la sede. Si pueden ayudar, escríbanme esta noche. Gracias a todos, y nos vemos el sábado.',
            reply: { teacher: 'Tú eres Rocío. Tu alumno es un voluntario y le responde con otro audio: se ofrece para algo («Puedo ayudar con lo que sea…»), pregunta una duda y promete algo «pase lo que pase».', self: 'Responde a Rocío en voz alta con tu propio audio: ofrécete para algo, pregunta una duda y promete algo «pase lo que pase». (Reply to Rocío with your own voice note.)' } },
          { kind: 'tip', icon: '🌎', title: 'Ustedes · Plural «you»', text: 'Rocío habla a todo el grupo de **ustedes** (les habla, traigan, háganle caso), como se hace en toda América. En España, entre amigos, se diría «os habla», «traed», «hacedle caso».', en: 'Rocío addresses the whole group with ustedes, as is normal throughout Latin America. In Spain, among friends, people would use vosotros.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Cualquiera, dondequiera, pase lo que pase', coach: 'Habla de normas, principios y búsquedas. Talk about rules, principles and searches.',
      steps: [
        { title: 'Tus normas, tus principios · Your rules, your principles', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de experiencias y opiniones reales. Si usa indicativo con un antecedente que no identifica, tú repites la frase con subjuntivo y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de cada relativa, pregúntate: ¿lo conozco o puede ser cualquiera? (Answer aloud with real examples.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces siempre, pase lo que pase? ¿Hay alguna opinión que mantengas digan lo que digan los demás? · What do you always do, whatever happens? An opinion you keep, whatever others say?', followUps: ['¿Desde cuándo lo haces? (Since when?)', '¿Alguna vez has cambiado de opinión?'], phrases: ['[[Pase lo que pase|orange]], yo siempre…', '[[Digan lo que digan|orange]], creo que…', '[[Haga el tiempo que haga|orange]], …'], hint: 'Reduplicación: el mismo verbo en subjuntivo a los dos lados.', example: 'Pase lo que pase, los domingos llamo a mi madre. Y digan lo que digan, creo que caminar cada día es la mejor medicina.', next: 'Ahora, un club.' },
            { q: 'Creas un club: de lectura, de senderismo o de cocina. Di tres normas para cualquiera que quiera entrar. · Three rules for anyone who wants to join your club.', followUps: ['¿Y si alguien no cumple las normas?', '¿Hay alguna norma que no negocies?'], phrases: ['Cualquiera que [[quiera|blue]] entrar debe…', 'Cualquier persona que [[llegue|blue]] tarde…', 'Quien no [[pueda|blue]] venir, que avise…'], hint: 'Normas para personas que todavía no conoces: subjuntivo.', example: 'Mi club de lectura tiene tres normas. Cualquiera que quiera entrar debe leer un libro al mes. Cualquier persona que llegue tarde trae el café. Y quien no pueda venir, que avise antes.', next: 'Ahora, personas únicas.' },
            { q: '¿Conoces a alguien que sepa hacer algo poco común? ¿Hay algo que nadie de tu entorno sepa hacer? · Someone with an unusual skill; something nobody around you can do.', followUps: ['¿Te gustaría aprenderlo?', '¿Buscarías a alguien que te enseñara?'], phrases: ['Conozco a una persona que [[sabe|teal]]…', 'No hay nadie en mi familia que [[sepa|violet]]…', 'Me gustaría encontrar a alguien que [[pueda|violet]]…'], hint: 'Si la conoces, indicativo; si la niegas o la buscas, subjuntivo.', example: 'Conozco a una chica que sabe tocar el arpa. En cambio, no hay nadie en mi familia que sepa coser. Me gustaría encontrar a alguien que pueda enseñarme.', teacher: 'Pregunta después: «¿Y si no conocieras a nadie así?». Tu alumno cambia la frase al subjuntivo.' },
            { q: 'Un amigo te propone un plan este fin de semana. ¿Te va bien cuando sea, donde sea y lo que sea? ¿O tienes límites? · Are you flexible, or do you have limits?', followUps: ['¿Qué plan no aceptarías nunca?', '¿Eres más flexible que antes?'], phrases: ['Quedo [[cuando sea|blue]], menos…', 'Como [[lo que sea|blue]], excepto…', 'Voy [[adonde quieras|blue]], pero…'], hint: '«Lo que sea, donde sea, cuando sea» es la forma más natural en la conversación.', example: 'Para comer soy muy flexible: como lo que sea, excepto pescado crudo. Quedo cuando sea, menos el domingo por la mañana, que duermo.' },
            { q: 'Un amigo va a viajar solo por primera vez. Dale consejos que le sirvan vaya donde vaya. · Advice for a first solo trip, wherever he goes.', followUps: ['¿Qué te pasó a ti en tu primer viaje?', '¿Qué no llevarías nunca?'], phrases: ['[[Vayas donde vayas|orange]], …', '[[Pase lo que pase|orange]], no…', '[[Cualquier cosa que necesites|blue]], …'], hint: 'Consejos con imperativo y una reduplicación o un «cualquier… que».', example: 'Vayas donde vayas, lleva una copia del pasaporte. Pase lo que pase, no dejes la mochila sola. Y cualquier cosa que necesites, llámame, sea la hora que sea.' },
            { q: 'Eres Rocío. Un voluntario nuevo te llama: ¿dónde plantamos?, ¿y si llueve?, ¿qué traigo? Todavía no sabes todos los detalles. · You are Rocío: answer without knowing every detail yet.', followUps: ['¿Y si no puedo llegar a las nueve?', '¿Hay alguien que me pueda prestar botas?'], phrases: ['Plantaremos [[donde diga|blue]]…', '[[Haga el tiempo que haga|orange]], …', 'Trae [[lo que tengas|blue]]…'], hint: 'Lo que todavía no sabes va en subjuntivo; lo que ya está decidido, en indicativo.', example: 'Plantaremos donde diga Ignacio, que lo decide por la mañana. Haga el tiempo que haga, empezamos a las nueve. Trae lo que tengas para la lluvia; las herramientas las ponemos nosotros.', teacher: 'Tú haces de voluntario nervioso y preguntas mucho. Tu alumno responde con al menos una reduplicación y una relativa con subjuntivo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («Cualquier que quiera…», «pase lo que pasa»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas pensando en otra persona: un compañero, un familiar. (Ask the questions aloud and answer for someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El correo de bienvenida', coach: 'Normas para cualquiera, pase lo que pase. Rules for anyone, whatever happens.',
      steps: [
        { title: 'Para los voluntarios nuevos · For new volunteers', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada relativa: ¿el antecedente es conocido o puede ser cualquiera? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada relativa: ¿el antecedente es conocido o puede ser cualquiera? (Check every relative clause.)' } },
          { kind: 'write', title: 'Bienvenidos a la próxima jornada · Welcome to the next day', situation: 'Eres Gabriel (o eres tú, si organizas una actividad abierta: una carrera solidaria, una feria, un taller). La asociación te pide el correo de bienvenida para los voluntarios nuevos: normas para cualquiera que venga, lo que se mantiene pase lo que pase y una ayuda que necesitas. (You are Gabriel, or yourself organising an open event. Write the welcome email for new volunteers: rules for anyone who comes, what holds whatever happens, and help you need.)', task: [
            'Saluda y presenta la actividad: qué es, cuándo y dónde. (Greet and introduce the event.)',
            'Escribe dos normas con «cualquiera que…» o «cualquier + nombre + que…».',
            'Di algo que se mantiene con una reduplicación: pase lo que pase, haga el tiempo que haga, vayan donde vayan…',
            'Pide una ayuda con un antecedente buscado o negado: necesitamos a alguien que…, no hay nadie que…',
            'Cierra ofreciendo ayuda abierta: lo que sea, cuando sea, cualquier duda que tengan… (Close with an open offer of help.)',
          ], starters: ['Hola a todos:', 'Les escribo para…', 'Cualquiera que venga…', 'Cualquier herramienta que…', 'Haga el tiempo que haga…', 'Vayan donde vayan…', 'Necesitamos a alguien que…', 'Para lo que sea…'],
            words: ['cualquiera que', 'cualquier… que', 'quienquiera que', 'dondequiera que', 'pase lo que pase', 'haga el tiempo que haga', 'lo que sea', 'cuando sea', 'alguien que', 'no hay nadie que'],
            model: 'Hola a todos: Les escribo para darles la bienvenida a la jornada de reforestación del sábado 14 en la sierra. [[Cualquiera que venga|blue]] por primera vez debe pasar por la mesa de inscripción antes de las nueve y firmar el seguro. [[Cualquier herramienta que usen|blue]] es de la asociación, así que, por favor, déjenla limpia en las cajas al terminar. Las previsiones dan lluvia, pero [[haga el tiempo que haga|orange]], la jornada se mantiene: traigan botas y un impermeable. Como siempre, plantaremos [[donde indique|blue]] el guarda forestal, y [[vayan donde vayan|orange]], no se separen de su grupo. Una última cosa: esta vez no hay nadie que [[tenga|violet]] una camioneta grande, así que necesitamos a [[alguien que pueda|violet]] llevar los plantones el viernes por la tarde. Si pueden ayudar, o si tienen cualquier duda, escríbanme [[cuando sea|blue]]. ¡Nos vemos el sábado! Gabriel',
            minWords: 100,
            checks: [
              { label: 'Una norma general: cualquiera que…, cualquier + nombre + que…', pattern: '(?<!\\p{L})(?:cualquiera|cualquier\\s+\\p{L}+|quienquiera|dondequiera|adondequiera)\\s+que(?!\\p{L})', tip: 'Añade una norma para cualquier persona: «Cualquiera que venga debe…», «Cualquier herramienta que usen…».' },
              { label: 'Una reduplicación: pase lo que pase, vayan donde vayan…', pattern: '(?<!\\p{L})(\\p{L}+)\\s+(?:lo\\s+que|donde|adonde|como|cuando|quien|el\\s+tiempo\\s+que)\\s+\\1(?!\\p{L})', tip: 'Di algo que se mantiene en cualquier caso: «Pase lo que pase…», «Haga el tiempo que haga…».' },
              { label: 'Un antecedente buscado o negado: alguien que, nadie que…', pattern: '(?<!\\p{L})(?:alguien|nadie|ningún\\s+\\p{L}+|ninguna\\s+\\p{L}+|algún\\s+\\p{L}+|alguna\\s+\\p{L}+)\\s+que(?!\\p{L})', tip: 'Pide una ayuda: «Necesitamos a alguien que pueda…», «No hay nadie que tenga…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})cualquier\\s+que(?!\\p{L})', why: 'Sin nombre detrás se dice **cualquiera que**: «Cualquiera que venga…».' },
              { pattern: '(?<!\\p{L})pase\\s+lo\\s+que\\s+pasa(?!\\p{L})', why: 'En la reduplicación, los dos verbos en subjuntivo: **pase lo que pase**.' },
              { pattern: '(?<!\\p{L})cualquiera\\s+que\\s+(?:vendrá|vendrán|viene|vienen|llega|llegan|llegará|llegarán)(?!\\p{L})', why: 'Con «cualquiera que» en una norma, el verbo va en subjuntivo: «cualquiera que **venga**», «cualquiera que **llegue**».' },
              { pattern: '(?<!\\p{L})no\\s+hay\\s+nadie\\s+que\\s+(?:tiene|sabe|puede|conoce|quiere)(?!\\p{L})', why: 'Con un antecedente negado, subjuntivo: «no hay nadie que **tenga**», «que **sepa**», «que **pueda**».' },
              { pattern: '(?<!\\p{L})donde\\s+quiera\\s+que(?!\\p{L})', why: 'Se escribe en una palabra: **dondequiera que**.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'GENERALIZAR', formula: 'cualquiera · quienquiera · dondequiera que · cualquier + nombre + que · lo que sea + subjuntivo', example: 'Cualquiera que venga debe registrarse.', caption: 'cualquier persona, lugar o cosa', en: 'any person, place or thing, not identified: subjunctive' },
            { tone: 'orange', label: 'CONCEDER', formula: 'subjuntivo + relativo + el mismo subjuntivo', example: 'Diga lo que diga Ignacio, hazle caso.', caption: 'no importa qué, dónde ni cómo', en: 'no matter what, where or how: the main sentence still holds' },
            { tone: 'violet', label: 'NEGADO O BUSCADO', formula: 'no hay nadie que · ¿hay alguien que…? · necesitamos a alguien que + subjuntivo', example: 'No hay nadie que conozca la sierra como él.', caption: 'no existe o no se sabe si existe', en: 'it does not exist, or you do not know if it exists: subjunctive' },
            { tone: 'teal', label: 'CONOCIDO', formula: 'antecedente identificado y real + indicativo', example: 'Lidia, que vive en el centro, te lleva a casa.', caption: 'el hablante sabe de quién o de qué habla', en: 'the speaker knows exactly who or what: indicative' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate siempre: **¿lo identifico o puede ser cualquiera?** Si es cualquiera, todavía no se sabe, se busca o no existe → **subjuntivo**: cualquiera que venga, donde diga Ignacio, no hay nadie que sepa. Si es real y conocido → **indicativo**: donde dijo Ignacio. En la reduplicación, el mismo verbo en subjuntivo: **pase lo que pase**. Y recuerda: **cualquier** delante de un nombre, **cualquiera** sin nombre.', en: 'Always ask: can I identify it, or could it be anyone or anything? Anyone, not yet known, sought or non-existent → subjunctive. Real and known → indicative. In the repeated pattern, the same subjunctive verb twice. And remember: cualquier before a noun, cualquiera on its own.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '«Hagas lo que ___, hazlo bien», decía mi abuela.', options: ['haces', 'hagas', 'harás'], answer: 1, why: 'Reduplicación: el mismo verbo en subjuntivo, hagas lo que hagas.', en: '“Whatever you do, do it well,” my grandmother used to say.' },
            { prompt: 'En mi oficina no hay nadie que ___ arreglar la impresora.', options: ['sabrá', 'sepa', 'sabe'], answer: 1, why: 'Antecedente negado: subjuntivo.', en: 'Nobody in my office knows how to fix the printer.' },
            { prompt: 'El técnico que ___ ayer la arregló en cinco minutos.', options: ['viniera', 'vino', 'venga'], answer: 1, why: 'Persona identificada y hecho real del pasado: indicativo.', en: 'The technician who came yesterday fixed it in five minutes.' },
            { prompt: '___ persona que quiera inscribirse puede hacerlo en la web.', options: ['Cualesquiera', 'Cualquier', 'Cualquiera'], answer: 1, why: 'Delante de un nombre: cualquier.', en: 'Anyone who wants to sign up can do so online.' },
            { prompt: 'Cuando era pequeño, ___ donde fuera, mi perro me seguía.', options: ['fuera', 'iba', 'vaya'], answer: 0, why: 'Reduplicación en un marco pasado: imperfecto de subjuntivo en los dos verbos.', en: 'When I was little, wherever I went, my dog followed me.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un concierto. Now, a concert.', blocks: [
          { kind: 'lead', text: 'Teresa organiza un concierto gratuito en un parque y prepara las normas para el público y los voluntarios. Ayúdala a escribirlas con la estructura de hoy.', en: 'Teresa is organising a free concert in a park and is writing the rules for the audience and the volunteers. Help her write them with today’s structures.' },
          { kind: 'rewrite', title: 'Las normas del concierto · The concert rules', items: [
            { prompt: 'No importa lo que pase con el tiempo: el concierto se celebra.', instruction: 'Empieza: «Pase…».', accept: ['Pase lo que pase, el concierto se celebra', 'Pase lo que pase con el tiempo, el concierto se celebra'] },
            { prompt: 'Cualquier persona puede entrar con comida, pero tiene que dejar la zona limpia.', instruction: 'Empieza: «Cualquiera que…».', accept: ['Cualquiera que entre con comida tiene que dejar la zona limpia', 'Cualquiera que entre con comida debe dejar la zona limpia'] },
            { prompt: 'Buscamos voluntarios. Tienen que hablar inglés.', instruction: 'Únelo. Empieza: «Buscamos voluntarios que…».', accept: ['Buscamos voluntarios que hablen inglés'] },
            { prompt: 'No importa dónde te sientes: oirás bien la música.', instruction: 'Usa la reduplicación. Empieza: «Te sientes…».', accept: ['Te sientes donde te sientes, oirás bien la música'] },
          ] },
        ] },
        { title: 'Ampliación · Registro formal y casos límite · Formal register and borderline cases', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: formas cultas que vas a leer en textos oficiales y un caso en que el indicativo también es posible.', en: 'For strong students or spare time: formal forms you will meet in official texts, and a case where the indicative is also possible.' },
          { kind: 'choice', title: 'Lee y decide · Read and decide', items: [
            { prompt: 'Texto de una convocatoria: «___ que sean los motivos, la solicitud debe presentarse antes del día 30».', options: ['Cualquiera', 'Cualesquiera', 'Cualquier'], answer: 1, why: '«Los motivos» es plural: cualesquiera que sean. Es la forma culta de «sean cuales sean».', en: 'Official notice: whatever the reasons, applications must be submitted by the 30th.' },
            { prompt: '«Comoquiera que el plazo había vencido, la solicitud fue rechazada.» ¿Qué significa aquí «comoquiera que»?', options: ['Aunque.', 'De cualquier manera que.', 'Dado que, puesto que (registro culto).'], answer: 2, why: 'En textos formales, «comoquiera que» con indicativo puede tener valor causal: «dado que». Solo para reconocer.', en: 'In formal writing, “comoquiera que” can mean “since, given that”.' },
            { prompt: '«Dondequiera que iba, la gente la reconocía.» ¿Por qué indicativo?', options: ['Porque «dondequiera» siempre va con indicativo.', 'Porque habla de hechos reales y habituales del pasado; «fuera» también sería posible.', 'Es un error: siempre es subjuntivo.'], answer: 1, why: 'Con hechos reales y repetidos, el indicativo es posible. En normas, planes y futuro, solo subjuntivo.', en: 'Wherever she went, people recognised her: a real, habitual past.' },
            { prompt: 'Entre amigos, ¿qué frase suena más natural?', options: ['Cualesquiera que llamen, contesta tú.', 'Quienquiera que llame, contesta tú.', 'Me da igual quién llame: contesta tú, sea quien sea.'], answer: 2, why: '«Quienquiera que» es formal o enfático; en la conversación se dice «sea quien sea». «Cualesquiera» no se usa así.', en: 'Among friends, which sentence sounds most natural?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca o inventa una frase de un texto oficial con «cualesquiera que sean» y la reformula en lengua coloquial con «sean cuales sean».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 146 · Estilo indirecto: afirmaciones, preguntas, mandatos', text: 'Ya hablas de lo que todavía no se sabe: «haremos lo que **diga** Ignacio», «**diga lo que diga**, hazle caso». En la clase 146 das el paso siguiente: transmites lo que alguien **dijo** de verdad. «Ignacio dijo que plantáramos junto al río», «Me preguntó si tenía guantes». Es el paso natural: de las palabras posibles a las palabras reales de otra persona.', en: 'You can now talk about what is not yet known: “we’ll do whatever Ignacio says”, “whatever he says, listen to him”. In class 146 you take the next step: reporting what someone actually said, asked or ordered. It is the natural progression from possible words to another person’s real words.', href: '/gramatica/estilo-indirecto-transmitir', label: 'Ir a la clase 146' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué norma pondrías para cualquiera que entre en tu casa, y qué haces siempre pase lo que pase?». Respuesta esperada: una relativa con subjuntivo y una reduplicación. Tarea: el correo de Escribir sobre una actividad real.' },
        ] },
      ],
    },
  ],
};
