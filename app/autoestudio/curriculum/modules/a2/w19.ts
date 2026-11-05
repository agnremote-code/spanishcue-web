import type { Module } from "../../types";

export const a2w19: Module = {
  id: "a2-19",
  level: "a2",
  week: 19,
  kind: "core",
  title: "Acabamos de llegar al muelle y no sé a qué hora sale el ferry",
  subtitle: "Repaso de las construcciones con infinitivo, gerundio y participio (acabo de llegar, sigue lloviendo, está cerrado) y de las preguntas indirectas (no sé dónde, ¿sabe si…?).",
  stop: { place: "Puntarenas", country: "Costa Rica" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g082",
    "a2.gram.g083",
    "a2.voc.w19-muelle-ferry",
    "a2.pron.w19-tilde-interrogativos",
    "a2.lis.w19-muelle-paquera",
    "a2.read.w19-mensaje-ferry",
    "a2.wri.w19-correo-informacion",
    "a2.spk.w19-pedir-informacion",
    "a2.fun.w19-preguntar-cortes",
    "a2.disc.w19-estado-proceso",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Al final de esta semana puedes contar qué acabas de hacer, qué sigue pasando y cómo están las cosas ahora, y pedir información a un desconocido o decir lo que no sabes con preguntas dentro de la frase.",
    steps: [
      "Repasa el infinitivo después de preposición: `antes de salir`, `sin pagar`, `al llegar`.",
      "Usa `acabar de`, `volver a`, `empezar a` + infinitivo y `seguir` + gerundio.",
      "Describe estados con `estar` + participio: `la taquilla está cerrada`.",
      "Pregunta con cortesía: `¿Me puede decir a qué hora sale?`",
      "Usa `si` para las preguntas de sí o no: `no sé si hay asientos`.",
      "Escucha una conversación en el muelle de Puntarenas y escribe un mensaje para pedir información.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases útiles cuando viajas y algo no sale como esperabas: las **construcciones con infinitivo, gerundio y participio** (_acabo de llegar, sigue lloviendo, la taquilla está cerrada_) y las **preguntas indirectas** (_no sé dónde está, ¿sabe si hay sitio?_). La situación: una pareja quiere tomar el ferry de Puntarenas a la península de Nicoya.",
    parts: [
      {
        heading: "El infinitivo: después de preposición y como sujeto",
        body: [
          "Después de una **preposición** el verbo va en **infinitivo**: _antes de **subir**_, _después de **comer**_, _para **llegar**_, _sin **pagar**_. Nunca en gerundio: no _antes de subiendo_.",
          "**Al + infinitivo** significa «en el momento en que»: _al llegar al muelle, vimos la fila_. Y cuando una acción es el **sujeto** de la frase, también va en infinitivo: _**Viajar** en ferry es barato_. En inglés aquí se usa _-ing_, en español no.",
          "Tres perífrasis frecuentes: **acabar de** + infinitivo (algo muy reciente: _acabo de comprar los boletos_), **volver a** + infinitivo (otra vez: _volvió a llover_) y **empezar a** + infinitivo (el comienzo: _empezó a hacer viento_).",
        ],
        support: [
          "After a preposition, use the infinitive (_antes de subir_). _Al_ + infinitive = when. An action as subject is an infinitive (_Viajar es…_), not _-ing_. _Acabar de_ = to have just; _volver a_ = again; _empezar a_ = to start.",
        ],
        table: {
          caption: "Infinitivo",
          head: ["Construcción", "Ejemplo"],
          rows: [
            ["preposición + infinitivo", "Compramos agua antes de subir al barco."],
            ["al + infinitivo", "Al bajar del bus, preguntamos por el muelle."],
            ["infinitivo como sujeto", "Esperar dos horas no es agradable."],
            ["acabar de + infinitivo", "El ferry acaba de salir."],
            ["volver a / empezar a + infinitivo", "Volvimos a preguntar. Empezó a llover."],
          ],
        },
        examples: [
          { es: "Salimos del hotel sin desayunar.", en: "We left the hotel without having breakfast." },
          { es: "Acabo de ver un delfín cerca del barco.", en: "I've just seen a dolphin near the boat." },
        ],
        mistakes: [
          { wrong: "Antes de saliendo, cierra la ventana.", right: "Antes de salir, cierra la ventana.", why: "Después de preposición, **infinitivo**." },
          { wrong: "Nadando en el mar es mi plan favorito.", right: "Nadar en el mar es mi plan favorito.", why: "Acción como sujeto: **infinitivo**, no gerundio." },
          { wrong: "Acabo de llegué al muelle.", right: "Acabo de llegar al muelle.", why: "_Acabar de_ + **infinitivo**." },
        ],
      },
      {
        heading: "El gerundio y el participio: lo que sigue y cómo está",
        body: [
          "**Seguir + gerundio** dice que algo continúa: _sigue lloviendo_, _seguimos esperando_. Nunca _sigo a esperar_. El gerundio también dice **cómo** se hace algo: _llegó corriendo_, _aprendí a nadar mirando a mi padre_.",
          "**Estar + participio** describe el **estado** o el resultado: _la taquilla está **cerrada**_, _los boletos están **vendidos**_, _el barco está **lleno**_. Aquí el participio concuerda como un adjetivo: masculino o femenino, singular o plural.",
          "Compara con **haber + participio** (semana 1), que no cambia nunca: _han cerrado la taquilla_ (acción) → _la taquilla está cerrada_ (estado). Y con la postura: _está sentado_ (estado), no _está sentando_.",
        ],
        support: [
          "_Seguir_ + gerund = to keep on / still. A gerund can say how (_llegó corriendo_). _Estar_ + participle = a state, and the participle agrees (_cerrada, cerrados_). With _haber_ the participle always ends in _-o_.",
        ],
        table: {
          caption: "Acción y estado",
          head: ["Acción (haber)", "Estado (estar)"],
          rows: [
            ["Han abierto la puerta.", "La puerta está abierta."],
            ["Hemos reservado las mesas.", "Las mesas están reservadas."],
            ["Han roto el cajero.", "El cajero está roto."],
            ["Se ha sentado en el banco.", "Está sentada en el banco."],
          ],
        },
        examples: [
          { es: "Seguimos esperando, pero el barco no llega.", en: "We're still waiting, but the boat isn't coming." },
          { es: "Las ventanillas están cerradas hasta las dos.", en: "The ticket windows are closed until two." },
          { es: "Un niño cruzó la calle corriendo.", en: "A boy ran across the street." },
        ],
        mistakes: [
          { wrong: "La oficina está cerrado.", right: "La oficina está cerrada.", why: "Con _estar_, el participio concuerda: _la oficina_ → **cerrada**." },
          { wrong: "Hemos abiertas las maletas.", right: "Hemos abierto las maletas.", why: "Con _haber_, el participio no cambia: **abierto**." },
          { wrong: "Sigo a esperar el autobús.", right: "Sigo esperando el autobús.", why: "_Seguir_ + **gerundio**." },
        ],
        tip: "Para describir el momento piensa en tres preguntas: ¿qué acaba de pasar? (_acabar de_), ¿qué sigue pasando? (_seguir_ + gerundio), ¿cómo está todo? (_estar_ + participio).",
      },
      {
        heading: "No sé dónde, ¿sabe cuándo…?: la pregunta dentro de la frase",
        body: [
          "A veces la pregunta va **dentro** de otra frase: después de **no sé, no recuerdo, ¿sabes / sabe…?, ¿me puedes / me puede decir…?, dime / dígame**. La palabra de pregunta **conserva la tilde**: _no sé **dónde** está el muelle_, _¿sabe **a qué hora** sale?_",
          "Después de la palabra de pregunta va el **verbo**, igual que en la pregunta directa: _¿Cuándo llega?_ → _No sé cuándo llega_. Con preposición, la preposición va delante: _¿me puede decir **de qué** muelle sale?_",
          "Cambia la puntuación: _No sé dónde está._ no lleva signos de pregunta, porque la frase es una afirmación. _¿Sabe dónde está?_ sí los lleva, porque la frase entera pregunta.",
        ],
        support: [
          "Indirect questions follow _no sé, ¿sabe…?, ¿me puede decir…?, dime_. The question word keeps its accent (_dónde, qué, cuándo_) and the verb follows it. Use question marks only if the whole sentence asks.",
        ],
        table: {
          caption: "De la pregunta directa a la indirecta",
          head: ["Pregunta directa", "Dentro de la frase"],
          rows: [
            ["¿Dónde se compran los boletos?", "¿Me puede decir dónde se compran los boletos?"],
            ["¿Cuánto cuesta con carro?", "No recuerdo cuánto cuesta con carro."],
            ["¿Qué necesito?", "Dime qué necesito, por favor."],
            ["¿Quién vende el café?", "No sé quién vende el café."],
          ],
        },
        examples: [
          { es: "¿Sabe usted cuánto dura la travesía?", en: "Do you know how long the crossing takes?" },
          { es: "No sé cuál es nuestro muelle.", en: "I don't know which one is our dock." },
        ],
        mistakes: [
          { wrong: "No sé donde está la taquilla.", right: "No sé dónde está la taquilla.", why: "La palabra de pregunta **conserva la tilde**: _dónde_." },
          { wrong: "Dime que quieres comer.", right: "Dime qué quieres comer.", why: "Sin tilde significa otra cosa (_que_ = that). Pregunta: **qué**." },
        ],
      },
      {
        heading: "No sé si…: las preguntas de sí o no",
        body: [
          "Cuando la pregunta directa se responde con **sí o no** (_¿Hay asientos?_), dentro de la frase se une con **si**, sin tilde: _no sé **si** hay asientos_, _¿sabe **si** el ferry lleva carros?_",
          "No uses _qué_ ni _que_ para estas preguntas: _no sé si viene_, no _no sé qué viene_ ni _no sé que si viene_.",
          "Este **si** (= whether) no es la condición de la semana 17 (_si llueve, …_) ni el **sí** de la respuesta. Para responder a algo que no sabes, puedes decir: _No lo sé, pero puede preguntar en la ventanilla_.",
        ],
        support: [
          "For yes/no questions inside a sentence use _si_ (= whether), without an accent: _no sé si hay asientos_. Not _qué_ or _que_.",
        ],
        examples: [
          { es: "Pregunta en la ventanilla si aceptan tarjeta.", en: "Ask at the window whether they take cards." },
          { es: "No recuerdo si cerré el carro.", en: "I don't remember if I locked the car." },
          { es: "¿Me puede decir si este bus para en el muelle?", en: "Can you tell me if this bus stops at the dock?" },
        ],
        mistakes: [
          { wrong: "No sé qué hay sitio en el barco.", right: "No sé si hay sitio en el barco.", why: "La respuesta es sí o no: **si**." },
          { wrong: "¿Sabe que si sale hoy?", right: "¿Sabe si sale hoy?", why: "Solo **si**, sin _que_." },
        ],
        tip: "Haz la pregunta directa en tu cabeza: si empieza con _dónde, cuándo, qué…_, usa esa palabra con tilde; si se responde con sí o no, usa **si**.",
      },
    ],
  },
  grammar: {
    intro: "Primero el infinitivo, el gerundio y el participio en construcciones frecuentes; después las preguntas indirectas con palabra de pregunta y con si.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "En el muelle",
        prompt: "Completa con el verbo en **infinitivo**, **gerundio** o **participio**.",
        items: [
          { q: "Después de ___ los boletos, tomamos un granizado. (comprar)", answers: [["comprar"]], why: "Preposición + **infinitivo**." },
          { q: "Hace una hora que sigue ___ y el mar está movido. (llover)", answers: [["lloviendo"]], why: "_Seguir_ + **gerundio**." },
          { q: "La rampa del ferry todavía está ___. (cerrar)", answers: [["cerrada"]], why: "_Estar_ + participio que concuerda: _la rampa_ → **cerrada**." },
          { q: "El último bus a San José acaba de ___. (salir)", answers: [["salir"]], why: "_Acabar de_ + **infinitivo**." },
          { q: "Al ___ al barco, buscamos un asiento a la sombra. (subir)", answers: [["subir"]], why: "_Al_ + **infinitivo**." },
          { q: "Todos los asientos de arriba están ___. (ocupar)", answers: [["ocupados"]], why: "_Los asientos_ → **ocupados**." },
        ],
      },
      {
        id: "g2",
        type: "choice",
        title: "¿Estado o acción?",
        prompt: "Elige la forma correcta.",
        items: [
          { q: "Lo siento, la cafetería ya ___.", options: ["está cerrado", "está cerrada", "ha cerrada"], answer: 1, why: "_La cafetería_: **está cerrada**." },
          { q: "Mis padres ___ los pasaportes en la maleta.", options: ["han dejado", "han dejados", "están dejando los"], answer: 0, why: "Con _haber_, el participio no cambia: **han dejado**." },
          { q: "Mira, ese señor ___ en nuestro asiento.", options: ["está sentando", "está sentado", "está sentada"], answer: 1, why: "Postura de un hombre: **está sentado**." },
          { q: "Después de dos horas, ___ esperando el ferry.", options: ["seguimos", "volvemos", "acabamos"], answer: 0, why: "Algo que continúa: **seguimos** + gerundio." },
        ],
      },
      {
        id: "g3",
        type: "gap",
        title: "La pregunta dentro",
        prompt: "Completa con **dónde, cuándo, qué, cuánto, a qué hora** o **si**.",
        items: [
          { q: "Perdone, ¿me puede decir ___ sale el próximo ferry?", answers: [["a qué hora", "cuándo"]], why: "La hora: **a qué hora**." },
          { q: "No sé ___ cuesta el boleto para una moto.", answers: [["cuánto"]], why: "El precio: **cuánto**." },
          { q: "¿Sabe ___ el ferry lleva bicicletas?", answers: [["si"]], why: "Respuesta sí o no: **si**." },
          { q: "Dime ___ dejaste las llaves del carro.", answers: [["dónde"]], why: "El lugar: **dónde**, con tilde." },
          { q: "No recuerdo ___ nos dijo el guía sobre la isla.", answers: [["qué"]], why: "¿Qué nos dijo? → **qué**." },
        ],
      },
      {
        id: "g4",
        type: "transform",
        title: "Pregunta con cortesía",
        prompt: "Escribe la pregunta dentro de la frase que se indica.",
        items: [
          { source: "¿Dónde está el muelle de Paquera?", instruction: "Empieza con **¿Me puede decir…?**", answers: ["¿Me puede decir dónde está el muelle de Paquera?"], why: "_Dónde_ conserva la tilde y el verbo va detrás." },
          { source: "¿Hay boletos para hoy?", instruction: "Empieza con **¿Sabe…?**", answers: ["¿Sabe si hay boletos para hoy?"], why: "Pregunta de sí o no: **si**." },
          { source: "¿Cuánto dura el viaje?", instruction: "Empieza con **No sé…**", answers: ["No sé cuánto dura el viaje."], why: "Afirmación: sin signos de pregunta." },
          { source: "¿Aceptan tarjeta en la taquilla?", instruction: "Empieza con **No recuerdo…**", answers: ["No recuerdo si aceptan tarjeta en la taquilla."], why: "Sí o no: **si**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para cruzar en ferry desde Puntarenas y entender los avisos del muelle.",
    groups: [
      {
        title: "En el muelle",
        items: [
          { es: "el muelle", en: "the dock / pier" },
          { es: "la taquilla", en: "the ticket office" },
          { es: "la fila", en: "the queue" },
          { es: "la rampa", en: "the ramp" },
          { es: "la cubierta", en: "the deck" },
          { es: "la travesía", en: "the crossing" },
        ],
      },
      {
        title: "Avisos y estados",
        items: [
          { es: "agotado", en: "sold out" },
          { es: "retrasado", en: "delayed" },
          { es: "cancelado", en: "cancelled" },
          { es: "el mar está movido", en: "the sea is rough" },
          { es: "el horario de temporada", en: "the seasonal timetable" },
        ],
      },
      {
        title: "Para viajar",
        items: [
          { es: "el boleto de ida y vuelta", en: "the return ticket" },
          { es: "la cédula / el pasaporte", en: "ID card / passport" },
          { es: "embarcar", en: "to board" },
          { es: "desembarcar", en: "to disembark" },
          { es: "marearse", en: "to get seasick" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "Avisos del muelle",
        prompt: "Une cada aviso con lo que significa.",
        pairs: [
          { left: "Boletos agotados", right: "No quedan boletos para ese ferry." },
          { left: "Salida retrasada", right: "El ferry va a salir más tarde." },
          { left: "Rampa cerrada", right: "Todavía no se puede embarcar." },
          { left: "Mar movido", right: "Es fácil marearse hoy." },
        ],
        why: "Muchos avisos usan un participio que concuerda: _boletos agotados, rampa cerrada, salida retrasada_.",
      },
      {
        id: "v2",
        type: "context",
        title: "¿Qué palabra falta?",
        prompt: "Lee la situación y elige la palabra correcta.",
        items: [
          { context: "Quieres ir a la península y volver el domingo.", q: "Pides un boleto de…", options: ["ida y vuelta", "travesía", "cubierta"], answer: 0, why: "Ir y volver: **ida y vuelta**." },
          { context: "Hay veinte personas delante de ti esperando.", q: "Estás en…", options: ["la rampa", "la fila", "la cubierta"], answer: 1, why: "Personas esperando en orden: **la fila**." },
          { context: "En el barco, sientes el estómago mal por las olas.", q: "Te estás…", options: ["embarcando", "mareando", "desembarcando"], answer: 1, why: "Malestar por el movimiento: **marearse**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Dónde fuerte, donde débil",
    explanation: [
      "En una pregunta indirecta, la palabra de pregunta tiene **fuerza**, igual que en la pregunta directa: _no sé DÓN-de está_, _¿sabe a QUÉ hora sale?_ Esa fuerza es la tilde.",
      "Cuando **que**, **donde**, **cuando** o **si** no preguntan, son **débiles** y se unen a la palabra siguiente: _la casa donde vivo_, _dice que viene_, _no sé si viene_.",
      "Escuchar la fuerza te ayuda a escribir bien: si la oyes, pones tilde.",
    ],
    support: [
      "Question words inside a sentence keep their stress and accent (_no sé DÓNde_). When _que, donde, cuando, si_ don't ask anything, they're weak and have no accent.",
    ],
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Pregunta o no?",
      prompt: "Escucha la frase y decide si la palabra marcada pregunta (fuerte, con tilde) o no (débil).",
      items: [
        { q: "¿Cómo es «donde» en esta frase?", audio: "No sé dónde para el bus.", options: ["pregunta: dónde", "no pregunta: donde"], answer: 0 },
        { q: "¿Cómo es «donde» en esta frase?", audio: "Es el muelle donde trabaja mi tío.", options: ["pregunta: dónde", "no pregunta: donde"], answer: 1 },
        { q: "¿Cómo es «que» en esta frase?", audio: "Dime qué prefieres.", options: ["no pregunta: que", "pregunta: qué"], answer: 1 },
        { q: "¿Cómo es «que» en esta frase?", audio: "Dice que no hay sitio.", options: ["no pregunta: que", "pregunta: qué"], answer: 0 },
      ],
    },
    produce: [
      { text: "No sé dónde está la taquilla.", tip: "Fuerza en _DÓN_." },
      { text: "¿Me puede decir a qué hora sale?", tip: "Fuerza en _QUÉ_ y la voz sube al final." },
      { text: "No sé si hay sitio.", tip: "_Si_ débil, unido a _hay_." },
      { text: "Acabamos de llegar y sigue lloviendo.", tip: "_a-ca-BA-mos_, _llo-VIEN-do_: fuerza en la penúltima." },
    ],
    spelling: "**Qué, dónde, cuándo, cómo, cuánto, cuál, quién** llevan tilde también dentro de la frase cuando preguntan. **Si** (= whether) nunca lleva tilde.",
  },
  listening: {
    title: "En el muelle de Puntarenas",
    context: "Lucas y Paula quieren cruzar en ferry a Paquera, en la península de Nicoya. Llegan al muelle de Puntarenas a mediodía y hablan con el señor Araya, que trabaja en la entrada.",
    speakers: [
      { id: "lucas", name: "Lucas", voice: "es-CO-m", role: "viajero" },
      { id: "paula", name: "Paula", voice: "es-CL-f", role: "viajera" },
      { id: "araya", name: "Señor Araya", voice: "es-MX-m", role: "empleado del muelle" },
    ],
    script: [
      { speaker: "lucas", text: "Buenas tardes. Acabamos de llegar de San José. ¿Me puede decir a qué hora sale el próximo ferry a Paquera?" },
      { speaker: "araya", text: "Buenas. El de la una acaba de salir, lo siento. El siguiente sale a las cinco." },
      { speaker: "paula", text: "¿A las cinco? Uf. ¿Y sabe si hay boletos? La taquilla está cerrada." },
      { speaker: "araya", text: "Sí, está cerrada hasta las tres porque el cajero está almorzando. No sé si quedan muchos boletos; los viernes se venden rápido." },
      { speaker: "lucas", text: "¿Y sabe dónde podemos dejar las mochilas mientras esperamos?" },
      { speaker: "araya", text: "Ahí enfrente, en la soda de doña Flor, guardan maletas. Pero no sé cuánto cobran." },
      { speaker: "paula", text: "Gracias. Oiga, ¿y cuánto dura la travesía?" },
      { speaker: "araya", text: "Una hora y diez, más o menos. Hoy el mar sigue un poco movido, así que si se marean, siéntense en la cubierta de abajo." },
      { speaker: "lucas", text: "Perfecto. Paula, vamos a comer algo antes de hacer la fila. Al volver, compramos los boletos." },
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
            { q: "¿Qué problema tienen Lucas y Paula?", options: ["Perdieron las mochilas.", "Acaba de salir el ferry y tienen que esperar.", "No encuentran el muelle."], answer: 1 },
            { q: "¿Qué hace el señor Araya?", options: ["Les vende los boletos.", "Les da información.", "Los lleva en carro."], answer: 1 },
            { q: "¿Qué deciden hacer al final?", options: ["comer algo antes de hacer la fila", "volver a San José", "dormir en Puntarenas"], answer: 0 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a las horas y a lo que el señor Araya sabe y no sabe.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿A qué hora sale el próximo ferry?", options: ["a la una", "a las tres", "a las cinco"], answer: 2 },
            { q: "¿Por qué está cerrada la taquilla?", options: ["porque el cajero está almorzando", "porque no quedan boletos", "porque el mar está movido"], answer: 0 },
            { q: "¿Qué no sabe el señor Araya?", options: ["dónde guardan maletas", "cuánto cobran por guardar las mochilas", "cuánto dura la travesía"], answer: 1 },
            { q: "¿Dónde es mejor sentarse si te mareas?", options: ["en la cubierta de arriba", "cerca de la rampa", "en la cubierta de abajo"], answer: 2 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en las construcciones con infinitivo, gerundio o participio y en las preguntas indirectas.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué hay en cada frase?",
          categories: ["infinitivo, gerundio o participio", "pregunta indirecta"],
          items: [
            { text: "Acabamos de llegar de San José.", cat: 0, why: "**Acabar de** + infinitivo: algo muy reciente." },
            { text: "¿Me puede decir a qué hora sale el próximo ferry?", cat: 1 },
            { text: "La taquilla está cerrada.", cat: 0, why: "**Estar** + participio que concuerda: _cerrada_." },
            { text: "No sé si quedan muchos boletos", cat: 1, why: "Pregunta de sí o no: **si**." },
            { text: "el mar sigue un poco movido", cat: 0 },
            { text: "¿sabe dónde podemos dejar las mochilas?", cat: 1 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Seguimos en Puntarenas",
    genre: "Mensaje al grupo de amigos",
    frame: "Paula escribe al grupo de amigos que los espera en Montezuma, al otro lado del golfo.",
    text: [
      "¡Hola, chicos! Malas noticias: seguimos en Puntarenas. Al llegar al muelle, el ferry de la una acababa de salir, así que tenemos que esperar al de las cinco. Lucas está sentado en una soda, comiendo un casado, y yo estoy haciendo la fila para comprar los boletos.",
      "La taquilla sigue cerrada y no sé a qué hora abren exactamente. Un señor dice que a las tres, pero ya son las tres y cuarto. Tampoco sé si quedan boletos para hoy: delante de mí hay unas cuarenta personas y todos parecen nerviosos.",
      "Lo bueno: las mochilas están guardadas en la soda y hace sol otra vez. Lo malo: el mar sigue movido y yo me mareo con facilidad. Antes de subir, voy a comprar unas pastillas.",
      "¿Alguien sabe cuánto tarda el bus de Paquera a Montezuma? ¿Y si hay buses después de las siete? Si no, vamos a necesitar un taxi. Les escribo al embarcar.",
    ],
    glossary: [
      { es: "un casado", en: "a typical Costa Rican set meal" },
      { es: "nerviosos", en: "anxious, on edge" },
      { es: "con facilidad", en: "easily" },
      { es: "unas pastillas", en: "some pills" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee el mensaje y responde.",
        items: [
          { q: "¿Qué está haciendo Lucas?", options: ["Está haciendo la fila.", "Está comiendo en una soda.", "Está comprando pastillas."], answer: 1 },
          { q: "¿Qué no sabe Paula?", options: ["a qué hora abre la taquilla", "dónde está Lucas", "dónde están las mochilas"], answer: 0 },
          { q: "¿Por qué va a comprar pastillas?", options: ["porque le duele la cabeza", "porque tiene hambre", "porque se marea con facilidad"], answer: 2 },
          { q: "¿Qué pregunta Paula a sus amigos?", options: ["si hay ferry mañana", "cuánto tarda el bus a Montezuma", "dónde está el muelle"], answer: 1 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Qué describe cada frase?",
        categories: ["algo que acaba de pasar o que sigue pasando", "un estado (estar + participio)", "algo que Paula no sabe"],
        items: [
          { text: "el ferry de la una acababa de salir", cat: 0 },
          { text: "La taquilla sigue cerrada", cat: 0, why: "**Seguir** + participio: el estado continúa." },
          { text: "Lucas está sentado en una soda", cat: 1, why: "Postura: **está sentado**." },
          { text: "las mochilas están guardadas en la soda", cat: 1 },
          { text: "no sé a qué hora abren exactamente", cat: 2 },
          { text: "Tampoco sé si quedan boletos para hoy", cat: 2, why: "Pregunta de sí o no dentro de la frase: **si**." },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase del mensaje para ver qué gramática hay dentro.",
      items: [
        { quote: "Al llegar al muelle", note: "**Al** + infinitivo = en el momento en que llegamos." },
        { quote: "Lucas está sentado en una soda", note: "Postura como estado: **sentado**, no _sentando_." },
        { quote: "no sé a qué hora abren exactamente", note: "Pregunta dentro de la frase: _a qué hora_ con tilde, sin signos de pregunta." },
        { quote: "las mochilas están guardadas", note: "_Las mochilas_ → **guardadas**: el participio concuerda." },
        { quote: "¿Y si hay buses después de las siete?", note: "Aquí **si** pregunta (sí o no), como en _¿alguien sabe si…?_" },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: describe la situación y pregunta lo que no sabes.",
    exercises: [
      {
        id: "x1",
        type: "error",
        title: "Corrige los mensajes del viaje",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Las tiendas del puerto están cerrados los domingos.", answers: ["Las tiendas del puerto están cerradas los domingos."], why: "_Las tiendas_ → **cerradas**." },
          { sentence: "Después de cenando, paseamos por el malecón.", answers: ["Después de cenar, paseamos por el malecón."], why: "Preposición + **infinitivo**." },
          { sentence: "No sé cuando abre el museo del puerto.", answers: ["No sé cuándo abre el museo del puerto."], why: "Pregunta indirecta: **cuándo**, con tilde." },
          { sentence: "¿Sabes qué el hotel tiene piscina?", answers: ["¿Sabes si el hotel tiene piscina?"], why: "Sí o no: **si**." },
          { sentence: "El ferry volvió a salió tarde.", answers: ["El ferry volvió a salir tarde."], why: "_Volver a_ + **infinitivo**." },
        ],
      },
      {
        id: "x2",
        type: "order",
        title: "Frases de viaje",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["¿Me", "puede", "decir", "dónde", "está", "la", "taquilla?"], en: "Can you tell me where the ticket office is?" },
          { words: ["Seguimos", "esperando", "porque", "la", "rampa", "está", "cerrada."], en: "We're still waiting because the ramp is closed." },
          { words: ["No", "sé", "si", "el", "ferry", "lleva", "bicicletas."], en: "I don't know if the ferry takes bicycles." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué dices?",
        prompt: "Lee la situación y elige la mejor frase.",
        items: [
          { context: "Llegas a la parada justo cuando el bus se va.", q: "Le dices a tu amiga:", options: ["El bus acaba de salir.", "El bus acaba de salió.", "El bus sigue salir."], answer: 0, why: "Algo muy reciente: **acaba de** + infinitivo." },
          { context: "Quieres saber, con cortesía, el precio de una excursión en barco.", q: "Le preguntas al guía:", options: ["¿Me puede decir cuanto cuesta la excursión?", "¿Me puede decir cuánto cuesta la excursión?", "¿Me puede decir que cuesta la excursión?"], answer: 1, why: "**Cuánto** con tilde dentro de la frase." },
          { context: "Una turista te pregunta si el banco abre hoy. No lo sabes.", q: "Le respondes:", options: ["No sé si abre hoy, lo siento.", "No sé qué abre hoy, lo siento.", "Sí, no sé, lo siento."], answer: 0, why: "Sí o no: **no sé si**." },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases sobre tu vida. Después compara con el modelo.",
        items: [
          {
            prompt: "Describe cómo está tu casa o tu escritorio ahora mismo: qué acabas de hacer, qué sigues haciendo y cómo están las cosas.",
            model: "Acabo de volver del supermercado y sigo ordenando la compra. La nevera está llena, pero la mesa está cubierta de bolsas y la ventana está abierta porque hace calor.",
            checklist: ["**Acabar de** + infinitivo", "**Seguir** + gerundio", "Dos participios que concuerdan con **estar**"],
          },
          {
            prompt: "Escribe tres preguntas indirectas para la recepción de un hotel: una con dónde, una con a qué hora y una con si.",
            model: "¿Me puede decir dónde está el gimnasio? ¿Sabe a qué hora cierra el restaurante? Y una cosa más: ¿sabe si hay toallas para la playa?",
            checklist: ["La palabra de pregunta conserva la tilde", "Usas **si** para la pregunta de sí o no", "El verbo va detrás de la palabra de pregunta"],
          },
          {
            prompt: "Cuenta algo que no sabes o no recuerdas de un viaje que vas a hacer.",
            model: "Todavía no sé cuándo sale mi vuelo exactamente y no recuerdo si reservé el hotel con desayuno. Tampoco sé qué ropa llevar.",
            checklist: ["Usas **no sé** y **no recuerdo**", "Una pregunta indirecta con **si**", "Sin signos de pregunta en las afirmaciones"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje a un alojamiento o a una agencia para explicar tu situación y pedir información.",
    context: "Estás de viaje y algo se complicó: un retraso, un cierre o un cambio de plan. Escribes al alojamiento donde vas a dormir esta noche.",
    steps: [
      "Saluda y explica qué acaba de pasar con **acabar de** + infinitivo.",
      "Describe cómo están las cosas ahora con **seguir** + gerundio y **estar** + participio.",
      "Pide información con dos o tres preguntas indirectas: **¿me puede decir…?, ¿sabe…?, no sé si…**",
      "Di qué vas a hacer al llegar o antes de salir (preposición + infinitivo) y despídete.",
      "Revisa: ¿los participios con _estar_ concuerdan? ¿Las palabras de pregunta tienen tilde? ¿Usaste **si** para las preguntas de sí o no?",
    ],
    useLanguage: ["Acabo de…", "Sigo esperando…", "La carretera está cerrada.", "¿Me puede decir…?", "No sé si…", "Al llegar, …"],
    model: [
      "Buenas tardes: soy Clara Ríos y tengo una reserva para esta noche. Acabo de llegar a la estación de Liberia, pero el bus a Playa Hermosa está retrasado y sigo esperando. Los asientos están todos vendidos, así que no sé a qué hora voy a llegar. ¿Me puede decir hasta qué hora está abierta la recepción? Tampoco sé si hay taxis en la estación por la noche. ¿Sabe cuánto cuesta uno hasta el hotel? Al llegar, les escribo. ¡Muchas gracias!",
    ],
    checklist: [
      "Usas **acabar de**, **seguir** + gerundio y **estar** + participio.",
      "Los participios con _estar_ concuerdan en género y número.",
      "Haces al menos dos preguntas indirectas con tilde en la palabra de pregunta.",
      "Usas **si** para una pregunta de sí o no.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Da fuerza a la palabra de pregunta y deja débil el si.",
    tasks: [
      {
        title: "En la ventanilla",
        prompt: "Estás en una estación o un muelle. Explica al empleado tu situación y hazle tres preguntas indirectas.",
        prep: ["Buenas, acabo de…", "¿Me puede decir…?", "¿Sabe si…?", "No sé dónde…"],
        seconds: 65,
        model: "Buenas tardes. Acabo de llegar en el bus de Liberia y el ferry ya salió. ¿Me puede decir a qué hora sale el próximo? Y otra cosa: ¿sabe si se puede pagar con tarjeta? Es que no sé dónde hay un cajero por aquí. Muchas gracias.",
        selfCheck: ["Mis preguntas indirectas tienen la palabra de pregunta con fuerza.", "Uso **si** para la pregunta de sí o no."],
      },
      {
        title: "Te cuento cómo está todo",
        prompt: "Llama a un amigo que te espera y cuéntale qué acaba de pasar, qué sigue pasando y cómo están las cosas.",
        prep: ["Acabamos de…", "Seguimos…", "La taquilla está…", "Los boletos están…"],
        seconds: 60,
        selfCheck: ["Uso los tres: acabar de, seguir + gerundio, estar + participio.", "Los participios concuerdan."],
      },
      {
        title: "Lo que no sé",
        prompt: "Vas a viajar a un lugar nuevo. Di cinco cosas que todavía no sabes del viaje.",
        prep: ["No sé cuándo…", "No sé si…", "No recuerdo dónde…", "Tampoco sé cuánto…"],
        seconds: 55,
        selfCheck: ["Uso al menos tres palabras de pregunta distintas.", "No pongo _que_ delante de _si_."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste esta semana y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Pregunta con cortesía", task: "Haz a tu profesor tres preguntas indirectas sobre la próxima clase o sobre el curso.", phrases: ["¿Me puedes decir…?", "¿Sabes si…?"] },
      { move: "Describe el momento", task: "Al empezar la clase, cuenta qué acabas de hacer y qué sigues haciendo esta semana.", phrases: ["Acabo de…", "Sigo…"] },
      { move: "Reconoce lo que no sabes", task: "Cuando no sepas una respuesta, dilo con una pregunta indirecta.", phrases: ["No sé si…", "No recuerdo cómo se dice…"] },
      { move: "Describe un lugar", task: "Describe cómo está tu habitación o tu oficina ahora con estar + participio.", phrases: ["La ventana está…", "Los libros están…"] },
    ],
    bring: "Trae una foto de un lugar donde esperaste mucho (una estación, un aeropuerto, un muelle) y prepárate para describir cómo estaba todo.",
  },
  quiz: {
    items: [
      { type: "gap", q: "La farmacia del puerto ya está ___ a esta hora. (cerrar)", answers: [["cerrada"]], why: "_La farmacia_ → **cerrada**." },
      { type: "choice", q: "¿Qué frase dice que algo ha pasado hace muy poco?", options: ["Acabo de ver a tu hermano en el muelle.", "Sigo viendo a tu hermano en el muelle.", "Vuelvo a ver a tu hermano en el muelle."], answer: 0, why: "Muy reciente: **acabar de**." },
      { type: "gap", q: "No sé ___ el restaurante de la playa abre los lunes.", answers: [["si"]], why: "Sí o no: **si**." },
      { type: "transform", source: "¿Dónde venden protector solar?", instruction: "Empieza con **¿Sabe…?**", answers: ["¿Sabe dónde venden protector solar?"], why: "_Dónde_ con tilde y el verbo detrás." },
      { type: "error", sentence: "Correr por la mañana es bueno, pero hoy sigo a dormir.", answers: ["Correr por la mañana es bueno, pero hoy sigo durmiendo."], why: "_Seguir_ + **gerundio**." },
      { type: "error", sentence: "Dime donde quieres cenar esta noche.", answers: ["Dime dónde quieres cenar esta noche."], why: "Pregunta indirecta: **dónde** con tilde." },
      { type: "listen", q: "¿La palabra «cuando» pregunta en la frase sobre el ferry?", audio: "No sé cuándo llega el ferry.", options: ["Sí: cuándo, con tilde", "No: cuando, sin tilde"], answer: 0 },
      { type: "order", words: ["Antes", "de", "embarcar,", "hay", "que", "enseñar", "el", "boleto."] },
      { type: "choice", q: "Elige la frase sobre las maletas que está bien escrita.", options: ["Las maletas están abierto.", "Hemos abiertas las maletas.", "Las maletas están abiertas."], answer: 2, why: "_Estar_ + participio que concuerda: **abiertas**." },
      { type: "open", prompt: "Escribe tres frases: algo que acabas de hacer, algo que sigues haciendo y una pregunta indirecta a un desconocido.", model: "Acabo de terminar el trabajo. Sigo pensando en el viaje del sábado. Perdone, ¿me puede decir si este tren para en Alajuela?", checklist: ["Acabar de + infinitivo", "Seguir + gerundio", "Pregunta indirecta con tilde o con si"] },
    ],
  },
  complete: {
    canNow: [
      "Usar el infinitivo después de preposición (_antes de salir, sin pagar_) y con _al_ (_al llegar_).",
      "Decir qué acabas de hacer, qué vuelves a hacer y qué empiezas a hacer.",
      "Decir qué sigue pasando con **seguir** + gerundio.",
      "Describir estados con **estar** + participio concordado y distinguirlo de _haber_ + participio.",
      "Pedir información con **¿me puede decir…?, ¿sabe…?, dime…** y la tilde en la palabra de pregunta.",
      "Usar **si** en las preguntas de sí o no: _no sé si hay sitio_.",
    ],
    review: ["Acabo de llegar / sigue lloviendo / la taquilla está cerrada.", "No sé dónde está (con tilde, sin signos).", "¿Sabe si hay boletos? (sí o no → si)."],
  },
  related: [
    { path: "/gramatica/construcciones-con-infinitivo-gerundio-y-participio", label: "Clase: Construcciones con infinitivo, gerundio y participio" },
    { path: "/gramatica/preguntas-indirectas-iniciales-no-se-donde", label: "Clase: Preguntas indirectas iniciales: no sé dónde" },
  ],
};
