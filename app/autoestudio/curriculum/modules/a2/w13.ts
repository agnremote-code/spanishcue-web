import type { Module } from "../../types";

export const a2w13: Module = {
  id: "a2-13",
  level: "a2",
  week: 13,
  kind: "core",
  title: "¿Alguien trajo algo? Un ratito más y un alfombrón",
  subtitle: "Repaso de los diminutivos y aumentativos con su valor afectivo (un momentito, un problemón) y de algo, nada, alguien y nadie para preguntar y responder por cosas y personas.",
  stop: { place: "Comayagua", country: "Honduras" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g240",
    "a2.gram.g070",
    "a2.voc.w13-fiesta-calle",
    "a2.pron.w13-fuerza-ito-on",
    "a2.lis.w13-noche-alfombras",
    "a2.read.w13-cronica-visitante",
    "a2.wri.w13-mensaje-grupo-vecinos",
    "a2.spk.w13-pedir-ayuda-suave",
    "a2.fun.w13-preguntar-cosas-personas",
    "a2.disc.w13-suavizar-peticiones",
  ],
  reviewObjectives: ["a2.gram.g068","a2.gram.g069","a2.voc.w12-vivienda-alquiler","a2.pron.w12-isimo-exclamaciones","a2.lis.w12-visita-apartamento","a2.read.w12-mensaje-eleccion","a2.wri.w12-comparar-opciones","a2.spk.w12-comparar-elegir","a2.fun.w12-elegir-entre-opciones","a2.disc.w12-justificar-eleccion"],
  prerequisites: ["a2-12"],
  goal: {
    canDo: "Al final de esta semana puedes hablar con cariño, con cortesía y exagerando con gracia (un cafecito, un momentito, un problemón), y preguntar y responder si hay algo o alguien con algo, nada, alguien y nadie (¿Alguien vio mis llaves? —No, no vi nada).",
    steps: [
      "Forma diminutivos con `-ito`, `-cito`, `-ecito` y cuida la ortografía: `poquito`, `tacita`.",
      "Distingue los valores: tamaño, cariño y cortesía (`un momentito`).",
      "Exagera con `-ón` y `-azo` (`un problemón`, `un perrazo`) y critica con `-ucho`.",
      "Pregunta con `algo` y `alguien`; responde con `nada` y `nadie`.",
      "Coloca bien el `no`: `No vino nadie` = `Nadie vino`; y di `a alguien`, `a nadie`.",
      "Escucha una noche de alfombras en Comayagua y escribe un mensaje al grupo de vecinos.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases: los **diminutivos y aumentativos** (_un cafecito, un problemón_) y los **cuantificadores algo, nada, alguien, nadie**. La situación: en Comayagua, la noche antes del Viernes Santo, los vecinos de una calle hacen una alfombra de aserrín de colores para la procesión, y siempre falta algo o alguien.",
    parts: [
      {
        heading: "Cómo se forma el diminutivo",
        body: [
          "La forma más general es **-ito / -ita**: quita la vocal final y añade el sufijo, con el mismo género: _casa_ → **casita**, _perro_ → **perrito**, _abuela_ → **abuelita**.",
          "Si la palabra termina en **-e**, en **-n** o en **-r**, o es muy corta, suele usar **-cito / -ecito**: _café_ → **cafecito**, _camión_ → **camioncito**, _flor_ → **florecita**, _pan_ → **panecito**. La forma exacta varía un poco según el país.",
          "Cuidado con la **ortografía**, porque el sonido no cambia: _poco_ → **poquito**, _amigo_ → **amiguito**, _taza_ → **tacita**, _luz_ → **lucecita**.",
        ],
        support: [
          "Diminutives: _-ito / -ita_ is the general ending (_casita_). Words ending in _-e, -n, -r_ often take _-cito / -ecito_ (_cafecito, panecito_). Spelling changes keep the sound: _poco → poquito, taza → tacita_.",
        ],
        table: {
          caption: "Diminutivos frecuentes",
          head: ["Palabra", "Diminutivo", "Atención"],
          rows: [
            ["la mesa", "la mesita", "-ita"],
            ["el café", "el cafecito", "-cito"],
            ["el pan", "el panecito", "-ecito"],
            ["poco", "poquito", "c → qu"],
            ["el lago", "el laguito", "g → gu"],
            ["la taza", "la tacita", "z → c"],
          ],
        },
        examples: [
          { es: "Vivimos en una casita cerca de la catedral.", en: "We live in a little house near the cathedral." },
          { es: "¿Me das un poquito más de aserrín?", en: "Can you give me a tiny bit more sawdust?" },
        ],
        mistakes: [
          { wrong: "Solo quiero un pocito de azúcar.", right: "Solo quiero un poquito de azúcar.", why: "_Poco_ → **poquito**: la _c_ cambia a _qu_ para mantener el sonido." },
          { wrong: "Una problemita no es grave.", right: "Un problemita no es grave.", why: "El diminutivo mantiene el **género**: _el problema_ → **el problemita**." },
        ],
      },
      {
        heading: "Pequeño, cariño, cortesía",
        body: [
          "El diminutivo no solo dice **tamaño** (_una mesita_). Muchas veces expresa **cariño**: _mi abuelita, un perrito precioso, pobrecito_.",
          "También sirve para la **cortesía**: hace más suave una petición o una espera. _Espéreme **un momentito**_. _¿Le sirvo **un cafecito**?_ _Es **un ratito** nada más_.",
          "Algunas palabras con diminutivo ya tienen **vida propia** y no significan «pequeño»: **el bolsillo** (en la ropa), **la ventanilla** (del banco, del autobús). Y no confundas **calentito** (agradable) con **calentísimo** (demasiado caliente, semana 12).",
        ],
        support: [
          "Diminutives can show size, affection (_mi abuelita_) or politeness (_un momentito_ = just a moment). Some are separate words: _el bolsillo_ (pocket), _la ventanilla_ (ticket window).",
        ],
        examples: [
          { es: "Pase, señora, siéntese un ratito mientras le preparo la cuenta.", en: "Come in, madam, sit down for a little while I get your bill ready." },
          { es: "El pan está calentito, recién salido del horno.", en: "The bread is nice and warm, fresh out of the oven." },
          { es: "Pague en la ventanilla número dos.", en: "Pay at window number two." },
        ],
        mistakes: [
          { wrong: "Guarda el boleto en el bolsito del pantalón.", right: "Guarda el boleto en el bolsillo del pantalón.", why: "El de la ropa es **el bolsillo**; _un bolsito_ es un bolso pequeño." },
        ],
        tip: "Con desconocidos, un diminutivo de cortesía (_un momentito, un favorcito_) suaviza mucho. Pero en un texto formal o escrito al trabajo, úsalo con moderación.",
      },
      {
        heading: "Grande y feo: -ón, -azo, -ucho",
        body: [
          "Para exagerar con gracia, el español tiene **aumentativos**. Los más comunes son **-ón / -ona** y **-azo / -aza**: _un problemón_ (un problema muy grande), _un fiestón_, _un perrazo_, _un exitazo_.",
          "**-azo** a veces significa **un golpe**: _un golpazo_, _un portazo_ (cerrar la puerta muy fuerte). **-ucho / -ucha** es despectivo: algo feo o de mala calidad, _un cuartucho_, _un hotelucho_.",
          "Atención: algunas palabras en _-ón_ ya son **otra cosa**: **el cajón** (de un mueble), **el sillón** (un asiento cómodo), **el cucharón** (para servir sopa). Con muchos aumentativos en **-ón**, la palabra se hace **masculina**: _una silla_ → **un sillón**.",
        ],
        support: [
          "Augmentatives exaggerate: _-ón_ (_un problemón_), _-azo_ (_un perrazo_, also a blow: _un portazo_). _-ucho_ is pejorative (_un cuartucho_ = a shabby room). Some _-ón_ words are new words: _el cajón_ (drawer), _el sillón_ (armchair).",
        ],
        table: {
          caption: "Exagerar y criticar",
          head: ["Sufijo", "Valor", "Ejemplos"],
          rows: [
            ["-ón / -ona", "muy grande, impresionante", "un problemón, un fiestón, una mujerona"],
            ["-azo / -aza", "grande o golpe", "un perrazo, un exitazo, un portazo"],
            ["-ucho / -ucha", "feo, de mala calidad", "un cuartucho, una casucha"],
          ],
        },
        examples: [
          { es: "La alfombra de este año es un exitazo.", en: "This year's carpet is a huge success." },
          { es: "Nos alojamos en un hotelucho sin agua caliente.", en: "We stayed in a grotty hotel with no hot water." },
        ],
        mistakes: [
          { wrong: "Nos sentamos en la sillona del salón.", right: "Nos sentamos en el sillón del salón.", why: "El aumentativo de _silla_ es masculino: **el sillón**." },
          { wrong: "Alquilaron una casucha preciosa.", right: "Alquilaron una casita preciosa.", why: "**-ucho** es negativo: no combina con _preciosa_." },
        ],
      },
      {
        heading: "Algo, nada, alguien, nadie",
        body: [
          "Para **cosas** usa **algo** (positivo) y **nada** (negativo). Para **personas** usa **alguien** (positivo) y **nadie** (negativo). Las cuatro palabras **no cambian** y el verbo va en **singular**: _Alguien **llamó**_, _Nadie **sabe**_.",
          "En las preguntas abiertas, lo normal es **algo** y **alguien**: _¿Necesitas **algo**?_ _¿Vino **alguien**?_ En las respuestas negativas aparecen **nada** y **nadie**: _No, no necesito **nada**_. _No, no vino **nadie**_.",
          "Combinaciones útiles: _algo de comer, ¿algo más? — nada más, alguien más_.",
        ],
        support: [
          "_algo_ (something / anything) and _nada_ (nothing) for things; _alguien_ (someone / anyone) and _nadie_ (nobody) for people. They never change and take a singular verb.",
        ],
        table: {
          caption: "Cosas y personas",
          head: ["", "Positivo", "Negativo"],
          rows: [
            ["cosas", "algo: ¿Quieres algo?", "nada: No quiero nada."],
            ["personas", "alguien: ¿Llamó alguien?", "nadie: No llamó nadie."],
          ],
        },
        examples: [
          { es: "—¿Alguien tiene un encendedor? —Yo no, pero creo que Luis tiene uno.", en: "—Does anyone have a lighter? —Not me, but I think Luis has one." },
          { es: "—¿Quieren algo de beber? —Nada, gracias, ya tomamos café.", en: "—Do you want anything to drink? —Nothing, thanks, we've already had coffee." },
        ],
        mistakes: [
          { wrong: "Hay alguno en la puerta.", right: "Hay alguien en la puerta.", why: "Para una persona sin nombre: **alguien**." },
          { wrong: "Nadie saben dónde está el aserrín.", right: "Nadie sabe dónde está el aserrín.", why: "Con **nadie** el verbo va en **singular**." },
        ],
      },
      {
        heading: "El lugar de no, y a alguien, a nadie",
        body: [
          "**Nada** y **nadie** después del verbo necesitan **no** delante: _**No** vino **nadie**_, _**No** compré **nada**_. Si **nadie** va **antes** del verbo, no se pone _no_: _**Nadie** vino_. Las dos frases significan lo mismo.",
          "Cuando **alguien** o **nadie** es la persona que recibe la acción, lleva **a**: _Veo **a alguien** en la calle_, _No conozco **a nadie** aquí_. Pero **después de hay** no hay _a_: _Hay alguien en la puerta_.",
          "Esta semana basta con estas dos posiciones. En la próxima clase ampliarás el sistema con _nunca, tampoco, ni… ni_.",
        ],
        support: [
          "_No_ + verb + _nada / nadie_: _No vino nadie_. Or _Nadie_ + verb, without _no_: _Nadie vino_. As objects, people take _a_: _No conozco a nadie_, but not after _hay_.",
        ],
        table: {
          caption: "Dos posiciones, el mismo significado",
          head: ["no + verbo + nadie / nada", "nadie + verbo"],
          rows: [
            ["No llamó nadie.", "Nadie llamó."],
            ["No sabe nadie la respuesta.", "Nadie sabe la respuesta."],
            ["No pasó nada.", "(Nada pasó: posible, pero menos frecuente)"],
          ],
        },
        examples: [
          { es: "No vi a nadie en la plaza: estaba vacía.", en: "I didn't see anyone in the square: it was empty." },
          { es: "¿Esperas a alguien? —Sí, a mi prima.", en: "Are you waiting for someone? —Yes, for my cousin." },
        ],
        mistakes: [
          { wrong: "Vino nadie a ayudar.", right: "No vino nadie a ayudar.", why: "_Nadie_ después del verbo necesita **no** delante." },
          { wrong: "Nadie no vino a ayudar.", right: "Nadie vino a ayudar.", why: "Con _nadie_ antes del verbo, **sin no**." },
          { wrong: "No conozco nadie en esta ciudad.", right: "No conozco a nadie en esta ciudad.", why: "Persona que recibe la acción: **a nadie**." },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero formas diminutivos y aumentativos y reconoces su valor; después preguntas y respondes con algo, nada, alguien y nadie.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "Diminutivos con ortografía",
        prompt: "Escribe el **diminutivo** de la palabra entre paréntesis. Cuidado con la ortografía.",
        items: [
          { q: "Échale un ___ de sal a la sopa, nada más. (poco)", answers: [["poquito"]], why: "_Poco_ → **poquito**: c → qu." },
          { q: "Mi abuela toma el café en una ___ blanca. (taza)", answers: [["tacita"]], why: "_Taza_ → **tacita**: z → c." },
          { q: "¿Te tomas un ___ conmigo antes de irte? (café)", answers: [["cafecito"]], why: "Termina en _-e_: **cafecito**." },
          { q: "Por la noche dejamos una ___ encendida en el pasillo. (luz)", answers: [["lucecita"]], why: "_Luz_ → **lucecita**: z → c, con _-ecita_." },
          { q: "Mi sobrino juega con su ___ del colegio. (amigo)", answers: [["amiguito"]], why: "_Amigo_ → **amiguito**: g → gu." },
        ],
      },
      {
        id: "g2",
        type: "choice",
        title: "¿Qué significa aquí?",
        prompt: "Elige el significado de la palabra en la frase.",
        items: [
          { q: "«¡Qué perrazo tiene el vecino!» ¿Cómo es el perro?", options: ["pequeño y simpático", "muy grande", "feo y viejo"], answer: 1, why: "**-azo**: muy grande." },
          { q: "«Guarda los papeles en el cajón.» ¿Qué es el cajón?", options: ["una caja enorme", "una parte de un mueble que se abre", "una caja pequeña"], answer: 1, why: "**El cajón** es una palabra con vida propia: el de una mesa o un armario." },
          { q: "«Espérame un momentito, ya voy.» ¿Qué expresa el diminutivo?", options: ["cortesía", "tamaño", "algo feo"], answer: 0, why: "Hace más suave la petición: **cortesía**." },
          { q: "«Dormimos en un cuartucho cerca de la terminal.» ¿Cómo era el cuarto?", options: ["pequeño y bonito", "enorme", "feo y de mala calidad"], answer: 2, why: "**-ucho** es despectivo." },
          { q: "«Se cerró la puerta con un portazo.» ¿Qué pasó?", options: ["La puerta se cerró muy fuerte.", "Era una puerta muy grande.", "La puerta se cerró despacio."], answer: 0, why: "**-azo** como golpe: _un portazo_." },
        ],
      },
      {
        id: "g3",
        type: "gap",
        title: "Algo, nada, alguien, nadie",
        prompt: "Completa con **algo, nada, alguien** o **nadie**.",
        items: [
          { q: "—¿Hay ___ en la nevera para cenar? —No, no hay ___. Hay que ir a la tienda.", answers: [["algo"], ["nada"]], why: "Cosas: pregunta con **algo**, respuesta negativa con **nada**." },
          { q: "—¿___ sabe a qué hora empieza la procesión? —A las nueve, creo.", answers: [["Alguien"]], why: "Pregunta abierta por una persona: **alguien**." },
          { q: "Toqué el timbre tres veces, pero no abrió ___.", answers: [["nadie"]], why: "_No_ + verbo + **nadie**." },
          { q: "Te dejé ___ en la mesa: es un regalo.", answers: [["algo"]], why: "Una cosa sin nombre: **algo**." },
          { q: "___ me dijo que la reunión era hoy. ¡No sabía nada!", answers: [["Nadie"]], why: "**Nadie** antes del verbo, sin _no_." },
        ],
      },
      {
        id: "g4",
        type: "transform",
        title: "Respuestas negativas",
        prompt: "Responde que **no** con nada o nadie. Escribe la frase completa.",
        items: [
          { source: "¿Alguien te ayudó con la mudanza?", answers: ["No, no me ayudó nadie.", "No, nadie me ayudó."], why: "**No** + verbo + **nadie**, o **nadie** + verbo sin _no_." },
          { source: "¿Compraste algo en el mercado?", answers: ["No, no compré nada.", "No, no compré nada en el mercado."], why: "Cosas: **no compré nada**." },
          { source: "¿Viste a alguien en el parque?", answers: ["No, no vi a nadie.", "No, no vi a nadie en el parque."], why: "Persona que recibe la acción: **a nadie**." },
          { source: "¿Alguien sabe la contraseña del wifi?", answers: ["No, nadie la sabe.", "No, no la sabe nadie.", "No, nadie sabe la contraseña.", "No, no sabe nadie la contraseña."], why: "Verbo en **singular** con _nadie_." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para una fiesta en la calle: las alfombras de Semana Santa, los materiales y lo que se pide y se ofrece entre vecinos.",
    groups: [
      {
        title: "Las alfombras de la procesión",
        items: [
          { es: "la alfombra de aserrín", en: "the sawdust carpet" },
          { es: "el aserrín de colores", en: "coloured sawdust" },
          { es: "el molde", en: "the stencil / mould" },
          { es: "la procesión", en: "the procession" },
          { es: "el diseño", en: "the design" },
          { es: "mojar", en: "to wet, to dampen" },
        ],
      },
      {
        title: "En la calle, de noche",
        items: [
          { es: "la cuadra", en: "the block (of a street)" },
          { es: "la cubeta", en: "the bucket" },
          { es: "la linterna", en: "the torch / flashlight" },
          { es: "trasnochar", en: "to stay up all night" },
          { es: "el encargado / la encargada", en: "the person in charge" },
        ],
      },
      {
        title: "Pedir y ofrecer con suavidad",
        items: [
          { es: "¿Me hace un favorcito?", en: "Could you do me a little favour?" },
          { es: "Un momentito, ya voy.", en: "Just a moment, I'm coming." },
          { es: "¿Alguien necesita algo?", en: "Does anyone need anything?" },
          { es: "¿Algo más? —Nada más, gracias.", en: "Anything else? —Nothing else, thanks." },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "¿Qué es?",
        prompt: "Une cada definición con la palabra.",
        pairs: [
          { left: "Es el material que se pinta de colores para hacer la alfombra.", right: "el aserrín" },
          { left: "Es la forma de madera o cartón que sirve para hacer los dibujos.", right: "el molde" },
          { left: "Es el recipiente donde llevas el agua.", right: "la cubeta" },
          { left: "Es lo que haces cuando no duermes en toda la noche.", right: "trasnochar" },
          { left: "Es la persona que organiza el trabajo del grupo.", right: "la encargada" },
        ],
        why: "Definiciones con **que, donde** y **lo que** de la semana 11.",
      },
      {
        id: "v2",
        type: "context",
        title: "Con suavidad",
        prompt: "Lee la situación y elige la frase más natural.",
        items: [
          { context: "Necesitas que tu vecina te sostenga la linterna un minuto.", q: "Le dices:", options: ["¿Me hace un favorcito? Sostenga la linterna un momentito.", "Sostenga la linternaza.", "¿Me hace un favorazo?"], answer: 0, why: "Diminutivos de **cortesía**: _favorcito, momentito_." },
          { context: "El vendedor te pregunta si quieres comprar otra cosa.", q: "Respondes:", options: ["Algo más, gracias.", "Nadie más, gracias.", "Nada más, gracias."], answer: 2, why: "Cosas, respuesta negativa: **nada más**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La fuerza en -ito y en -ón",
    explanation: [
      "Los sufijos **-ito, -ita, -cito** llevan la fuerza en la **i**: _CA-sa_ → _ca-SI-ta_, _ca-FÉ_ → _ca-fe-CI-to_. La palabra cambia de ritmo, aunque la base no cambie.",
      "Los aumentativos en **-ón** llevan la fuerza al **final** y por eso tienen tilde: _pro-BLE-ma_ → _pro-ble-MÓN_, _FIES-ta_ → _fies-TÓN_. En **-azo** la fuerza va en la **a**: _pe-RRA-zo_.",
      "En el plural, **-ón** pierde la tilde porque la palabra crece: _un sillón_, _dos si-LLO-nes_. Escucha que la fuerza sigue en el mismo sitio.",
    ],
    support: [
      "Diminutive endings take the stress: _caSIta, cafeCIto_. _-ón_ is stressed and written with an accent (_problemón_), but loses it in the plural (_sillones_).",
    ],
    table: {
      caption: "Dónde cae la fuerza",
      head: ["Base", "Diminutivo", "Aumentativo"],
      rows: [
        ["CA-sa", "ca-SI-ta", "ca-SO-na"],
        ["PE-rro", "pe-RRI-to", "pe-RRA-zo"],
        ["FIES-ta", "fies-TI-ta", "fies-TÓN"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Pequeño o grande?",
      prompt: "Escucha la frase y elige la palabra que oyes.",
      items: [
        { q: "¿Qué palabra oyes en la frase de la boda?", audio: "Fue un fiestón increíble.", options: ["fiestita", "fiestón", "fiesta"], answer: 1 },
        { q: "¿Qué palabra oyes en la frase del jardín?", audio: "En el jardín duerme un perrito.", options: ["perrito", "perrazo", "perro"], answer: 0 },
        { q: "¿Qué palabra oyes en la frase de la sala?", audio: "Siéntate en el sillón.", options: ["la silla", "la sillita", "el sillón"], answer: 2 },
        { q: "¿Qué palabra oyes en la frase de la espera?", audio: "Espérame un momentito.", options: ["un momento", "un momentito", "un momentazo"], answer: 1 },
        { q: "¿Qué palabra oyes en la frase de la puerta?", audio: "Se oyó un portazo.", options: ["un portazo", "una puertita", "una puerta"], answer: 0 },
      ],
    },
    produce: [
      { text: "Casa, casita, casona.", tip: "La fuerza salta: _CA_, _SI_, _SO_." },
      { text: "Un cafecito, por favor.", tip: "_ca-fe-CI-to_: fuerza en la _i_, voz amable." },
      { text: "¡Qué problemón tenemos!", tip: "Golpe final en _MÓN_." },
      { text: "Espere un momentito, señora.", tip: "Tono suave y bajo al final: cortesía." },
      { text: "No vino nadie. Nadie vino.", tip: "Las dos frases con el mismo tono que baja." },
    ],
    spelling: "Tilde en **-ón** en singular (_sillón, problemón_), sin tilde en plural (_sillones_). Cambios: **poco → poquito, taza → tacita, amigo → amiguito**.",
  },
  listening: {
    title: "La noche de las alfombras",
    context: "Es Jueves Santo por la noche en Comayagua. En una cuadra cerca de la catedral, doña Nena coordina a los vecinos que hacen la alfombra de aserrín. Llega Javier, un vecino nuevo, y su hija Sofi.",
    speakers: [
      { id: "nena", name: "Doña Nena", voice: "es-MX-f", role: "encargada de la alfombra" },
      { id: "javier", name: "Javier", voice: "es-CO-m", role: "vecino nuevo" },
      { id: "sofi", name: "Sofi", voice: "es-PE-f", role: "hija de Javier, ocho años" },
    ],
    script: [
      { speaker: "nena", text: "¡Buenas noches, vecinos! ¿Alguien trajo el aserrín azul? Sin el azul no podemos hacer el cielo." },
      { speaker: "javier", text: "Buenas noches, doña Nena. Yo no traje nada azul, solo dos cubetas de agua. ¿Le sirve?" },
      { speaker: "nena", text: "Claro, mijo, el agua es lo más importante: hay que mojar el aserrín. Póngalas aquí, en la esquinita." },
      { speaker: "sofi", text: "Señora, ¿yo puedo hacer algo? ¿Puedo pintar una florecita?" },
      { speaker: "nena", text: "¡Ay, qué niña tan bonita! Sí, mi amor, toma este molde chiquito y pon el aserrín amarillo con cuidado." },
      { speaker: "javier", text: "Doña Nena, ¿llamó alguien de la otra cuadra? Dicen que tienen aserrín de sobra." },
      { speaker: "nena", text: "No, no llamó nadie. Y el señor de la ferretería no contesta el teléfono. Tenemos un problemón." },
      { speaker: "javier", text: "Un momentito, conozco a alguien que vive al lado de la iglesia. Le escribo ahora." },
      { speaker: "nena", text: "Gracias, mijo. Y si alguien tiene hambre, hay tamalitos y un cafecito en mi casa." },
      { speaker: "sofi", text: "¡Papá, mira! ¡La alfombra va a ser un alfombrón!" },
      { speaker: "javier", text: "Sí, pero falta toda la noche. Hoy aquí nadie duerme." },
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
            { q: "¿Qué hacen los vecinos esta noche?", options: ["Preparan una cena de cumpleaños.", "Hacen una alfombra de aserrín para la procesión.", "Limpian la iglesia."], answer: 1 },
            { q: "¿Cuál es el problema principal?", options: ["Falta el aserrín azul.", "No hay agua.", "Llueve mucho."], answer: 0 },
            { q: "¿Cómo es el ambiente?", options: ["tenso y aburrido", "triste y silencioso", "amable, con ganas de ayudar"], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a lo que trae, hace y ofrece cada persona.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Qué trajo Javier?", options: ["aserrín azul", "dos cubetas de agua", "tamales"], answer: 1 },
            { q: "¿Qué quiere hacer Sofi?", options: ["pintar una flor", "dormir", "ir a la ferretería"], answer: 0 },
            { q: "¿Qué va a hacer Javier para resolver el problema?", options: ["ir a la ferretería", "llamar a doña Nena", "escribir a un conocido que vive al lado de la iglesia"], answer: 2 },
            { q: "¿Qué ofrece doña Nena en su casa?", options: ["aserrín y moldes", "tamalitos y café", "linternas"], answer: 1 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en los diminutivos, los aumentativos y las palabras para cosas y personas.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué tiene cada frase?",
          categories: ["diminutivo o aumentativo", "algo / alguien", "nada / nadie"],
          items: [
            { text: "Póngalas aquí, en la esquinita.", cat: 0, why: "**Esquinita**: diminutivo de cortesía y cariño." },
            { text: "Tenemos un problemón.", cat: 0, why: "**Problemón**: aumentativo, un problema muy grande." },
            { text: "¿Alguien trajo el aserrín azul?", cat: 1, why: "Pregunta abierta por una persona: **alguien**." },
            { text: "¿yo puedo hacer algo?", cat: 1 },
            { text: "No, no llamó nadie.", cat: 2, why: "**No** + verbo + **nadie**." },
            { text: "Yo no traje nada azul", cat: 2 },
            { text: "Hoy aquí nadie duerme.", cat: 2, why: "**Nadie** antes del verbo, sin _no_." },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Una noche sin dormir en Comayagua",
    genre: "Crónica de viaje en un blog",
    frame: "Clara, una viajera de Guatemala, cuenta en su blog cómo vivió la Semana Santa en Comayagua.",
    text: [
      "Llegué a Comayagua el Jueves Santo por la tarde y busqué un hotel cerca del centro. No había nada libre: todo estaba lleno. Al final encontré un cuartito en la casa de doña Marta, una señora amabilísima que me recibió con un cafecito y pan dulce.",
      "Por la noche salí a caminar y no vi a nadie en las calles principales. ¿Dónde estaba todo el mundo? De repente, en una cuadra cerca de la catedral, encontré a todo el barrio: niños, abuelitos y jóvenes trabajaban en el suelo con moldes y aserrín de colores.",
      "Pregunté si alguien necesitaba ayuda y una señora me dio una cubeta y un molde chiquito. «Póngale un poquito de agua, mi amor, que el aserrín no se vuele», me dijo. Nadie hablaba de dormir. A las tres de la mañana hubo un problemita: un perrazo pasó corriendo por encima del diseño. Nadie gritó; todos rieron y lo arreglaron en un ratito.",
      "A las seis la alfombra estaba terminada. Era un alfombrón de veinte metros, con flores, palomas y un cielo azul. Dos horas después pasó la procesión y la destruyó en cinco minutos. Pocas veces vi algo tan bonito y tan breve.",
    ],
    glossary: [
      { es: "el pan dulce", en: "sweet bread" },
      { es: "que no se vuele", en: "so that it doesn't blow away" },
      { es: "la paloma", en: "the dove" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee la crónica y responde.",
        items: [
          { q: "¿Por qué Clara no se alojó en un hotel?", options: ["porque eran carísimos", "porque no había nada libre", "porque prefería una casa"], answer: 1 },
          { q: "¿Por qué no había nadie en las calles principales?", options: ["porque todos dormían", "porque llovía", "porque todos estaban haciendo la alfombra"], answer: 2 },
          { q: "¿Qué pasó a las tres de la mañana?", options: ["Un perro grande pisó el diseño.", "Se acabó el aserrín.", "Empezó la procesión."], answer: 0 },
          { q: "¿Qué le pareció a Clara la alfombra?", options: ["fea y pequeña", "bonita, pero dura muy poco", "aburrida"], answer: 1 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Qué valor tiene la palabra en negrita?",
        categories: ["pequeño o cariño", "cortesía", "grande o exagerado"],
        items: [
          { text: "encontré un **cuartito** en la casa de doña Marta", cat: 0 },
          { text: "me recibió con un **cafecito**", cat: 1 },
          { text: "un **perrazo** pasó corriendo", cat: 2 },
          { text: "niños, **abuelitos** y jóvenes", cat: 0 },
          { text: "Póngale un **poquito** de agua, mi amor", cat: 1 },
          { text: "Era un **alfombrón** de veinte metros", cat: 2 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase de la crónica para ver qué gramática hay dentro.",
      items: [
        { quote: "No había nada libre", note: "**No** + verbo + **nada**: ninguna cosa." },
        { quote: "no vi a nadie en las calles principales", note: "**A nadie**: la persona que recibe la acción lleva _a_." },
        { quote: "Pregunté si alguien necesitaba ayuda", note: "**Alguien** en una pregunta abierta: cualquier persona." },
        { quote: "Nadie hablaba de dormir.", note: "**Nadie** antes del verbo, sin _no_, y el verbo en singular." },
        { quote: "lo arreglaron en un ratito", note: "**Ratito**: diminutivo que hace el tiempo más corto y amable." },
        { quote: "Era un alfombrón de veinte metros", note: "**-ón**: una alfombra enorme e impresionante." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: diminutivos y aumentativos con su valor, y algo, nada, alguien, nadie en preguntas y respuestas.",
    exercises: [
      {
        id: "x1",
        type: "error",
        title: "Corrige los mensajes",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Nadie no sabe dónde están los moldes.", answers: ["Nadie sabe dónde están los moldes.", "No sabe nadie dónde están los moldes."], why: "Con **nadie** antes del verbo, sin _no_." },
          { sentence: "Busqué en todo el mercado y encontré nada.", answers: ["Busqué en todo el mercado y no encontré nada."], why: "_Nada_ después del verbo necesita **no**." },
          { sentence: "¿Conoces alguien que venda aserrín?", answers: ["¿Conoces a alguien que venda aserrín?"], why: "Persona que recibe la acción: **a alguien**." },
          { sentence: "Solo me queda un pocito de pintura.", answers: ["Solo me queda un poquito de pintura."], why: "_Poco_ → **poquito**." },
          { sentence: "Alguien llamaron a la puerta a medianoche.", answers: ["Alguien llamó a la puerta a medianoche."], why: "Con **alguien**, verbo en singular." },
        ],
      },
      {
        id: "x2",
        type: "gap",
        title: "Diminutivo o aumentativo",
        prompt: "Completa con la forma que pide la situación (diminutivo con **-ito / -cito** o aumentativo con **-ón / -azo**).",
        items: [
          { q: "El concierto fue un ___: diez mil personas y todas cantando. (éxito, muy grande)", answers: [["exitazo"]], why: "Un éxito enorme: **exitazo**." },
          { q: "Señor, ¿me espera un ___? Ahora mismo lo atiendo. (momento, cortesía)", answers: [["momentito"]], why: "Cortesía: **momentito**." },
          { q: "El bebé tiene unas ___ preciosas. (manos, pequeñas)", answers: [["manitos", "manitas"]], why: "_Mano_ es femenino: **manitas** (en muchos países también _manitos_)." },
          { q: "Se rompió el tubo y ahora tenemos un ___ en la cocina. (problema, muy grande)", answers: [["problemón"]], why: "Un problema enorme: **problemón**, con tilde." },
        ],
      },
      {
        id: "x3",
        type: "context",
        title: "¿Qué dices?",
        prompt: "Lee la situación y elige la mejor respuesta.",
        items: [
          { context: "Llegas a casa y tu compañera de piso te pregunta si alguien preguntó por ella.", q: "Nadie preguntó. Respondes:", options: ["No, no preguntó alguien.", "No, no preguntó nadie.", "No, nadie no preguntó."], answer: 1, why: "**No** + verbo + **nadie**." },
          { context: "En una tienda, la dependienta te ve mirando y te pregunta si buscas algo.", q: "Solo estás mirando. Respondes:", options: ["Gracias, solo estoy mirando, no busco nada.", "Gracias, busco nadie.", "Gracias, no busco algo."], answer: 0, why: "Cosas en negativo: **no busco nada**." },
          { context: "Llamas a la puerta de un vecino porque oyes un ruido en el jardín.", q: "Le preguntas:", options: ["¿Hay a alguien en su jardín?", "¿Hay nadie en su jardín?", "¿Hay alguien en su jardín?"], answer: 2, why: "Después de **hay**, sin _a_: **hay alguien**." },
        ],
      },
      {
        id: "x4",
        type: "order",
        title: "Frases de la noche",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["No", "conozco", "a", "nadie", "en", "esta", "cuadra."], en: "I don't know anyone on this block." },
          { words: ["¿Alguien", "quiere", "un", "cafecito", "calentito?"], en: "Does anyone want a nice hot coffee?" },
          { words: ["Nadie", "durmió", "en", "toda", "la", "noche."], alt: ["En toda la noche nadie durmió."], en: "Nobody slept all night." },
        ],
      },
      {
        id: "x5",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases completas. Después compara con el modelo.",
        items: [
          {
            prompt: "Escribe un mensaje corto a tu familia o a tus amigos: pregunta si alguien necesita algo de la tienda y ofrece un cafecito.",
            model: "¡Hola a todos! Voy a la tienda en un ratito. ¿Alguien necesita algo? Si nadie me contesta, compro solo pan. Y cuando vuelva, ¿quién quiere un cafecito calentito?",
            checklist: ["Preguntas con **algo** y **alguien**", "Usas **nadie** con el verbo en singular", "Usas al menos un diminutivo de cortesía o cariño"],
          },
          {
            prompt: "Cuenta una noche o un día en que algo salió mal: qué problema hubo (problemón, golpazo…) y si alguien te ayudó o no.",
            model: "El sábado tuve un problemón: se rompió la llave en la puerta y no podía entrar. Llamé a mi hermano, pero no contestó nadie. Al final, una vecina conocía a alguien que arregla cerraduras y en un ratito todo estaba bien.",
            checklist: ["Usas un aumentativo con su valor", "Usas **no** + verbo + **nadie / nada**", "Usas **a alguien** o **a nadie** con un verbo como conocer o ver"],
          },
          {
            prompt: "Describe un lugar donde dormiste en un viaje: si era una casita bonita o un cuartucho, y si había algo o alguien interesante.",
            model: "En mi último viaje dormí en una casita de madera al lado de un laguito. No había nada de ruido y por la noche no se veía a nadie. Por la mañana, el dueño nos preparó unas tortillitas riquísimas.",
            checklist: ["Usas diminutivos con la ortografía correcta", "Usas **nada** o **nadie** en negativo", "Describes el lugar con al menos tres detalles"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje en el grupo de vecinos para organizar algo juntos y pedir ayuda.",
    context: "En tu calle van a hacer una fiesta, una limpieza o una alfombra para una procesión. Tú eres el encargado o la encargada. Escribe al grupo para saber quién puede ayudar y qué falta.",
    steps: [
      "Saluda con cariño y explica el plan en una frase.",
      "Pregunta con **alguien** y **algo**: quién puede traer cosas o ayudar.",
      "Cuenta qué falta todavía con **nada** o **nadie** (_todavía nadie trajo…_).",
      "Pide ayuda con un diminutivo de cortesía (_un favorcito, un ratito_).",
      "Usa un aumentativo para animar al grupo (_va a ser un fiestón_).",
      "Revisa: ¿pusiste **no** delante cuando _nada / nadie_ van después del verbo? ¿Usaste **a alguien / a nadie** con personas? ¿Escribiste bien los diminutivos?",
    ],
    useLanguage: ["¿Alguien puede…?", "¿Alguien tiene algo de…?", "Todavía nadie…", "No tenemos nada de…", "un favorcito", "un ratito", "va a ser un fiestón"],
    model: [
      "¡Buenas tardes, vecinos! El sábado limpiamos el parquecito de la esquina y después hacemos una comida. ¿Alguien tiene una escalera? Todavía no tenemos nada para pintar los bancos y nadie trajo bolsas de basura. Les pido un favorcito: si tienen un ratito libre, vengan a las nueve, aunque sea una hora. ¿Alguien conoce a alguien que preste mesas? Doña Inés va a traer sus tamalitos. ¡Va a ser un fiestón!",
    ],
    checklist: [
      "Usas **algo / alguien** en las preguntas.",
      "Usas **no** + verbo + **nada / nadie**, o **nadie** + verbo sin _no_.",
      "Usas **a alguien / a nadie** con personas que reciben la acción.",
      "Usas al menos dos diminutivos con su valor (cariño, cortesía).",
      "Usas un aumentativo para exagerar con gracia.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "¿Alguien tiene…?",
        prompt: "Imagina que organizas una comida en tu calle. Pregunta a los vecinos si alguien tiene cinco cosas que faltan y responde tú mismo a algunas preguntas en negativo.",
        prep: ["¿Alguien tiene…?", "¿Alguien puede traer algo de…?", "No, todavía no trajo nadie…", "No tenemos nada de…"],
        seconds: 75,
        model: "Vecinos, falta poquito para la comida. ¿Alguien tiene sillas? Todavía no trajo nadie. ¿Alguien puede traer algo de beber? Y hielo: no tenemos nada de hielo. ¿Alguien conoce a alguien con una nevera grande? Ah, y si alguien tiene un ratito, necesito ayuda con las mesas.",
        selfCheck: ["Uso **algo / alguien** en las preguntas y **nada / nadie** en las respuestas.", "Pongo **no** delante cuando _nada / nadie_ van después del verbo."],
      },
      {
        title: "Con cariño y con cortesía",
        prompt: "Representa tres pequeñas escenas: atiendes a un cliente en un café, hablas con un niño pequeño y pides un favor a un desconocido. Usa diminutivos.",
        prep: ["¿Le sirvo un cafecito?", "Un momentito, por favor.", "¡Qué perrito tan bonito!", "¿Me hace un favorcito?"],
        seconds: 60,
        model: "Buenos días, señora, ¿le sirvo un cafecito? Un momentito, que el pan está calentito. Y tú, mi amor, ¿quieres un juguito? Disculpe, señor, ¿me hace un favorcito? ¿Me sostiene la puerta un ratito?",
        selfCheck: ["La fuerza cae en la **i** de **-ito**.", "Uso los diminutivos con un tono suave."],
      },
      {
        title: "Exagera",
        prompt: "Cuenta una fiesta, un viaje o un problema de forma exagerada y divertida, con aumentativos.",
        prep: ["Fue un fiestón…", "Había un perrazo…", "Tuvimos un problemón…", "Al final fue un exitazo."],
        seconds: 50,
        selfCheck: ["Uso al menos tres aumentativos.", "Digo **-ón** con la fuerza al final."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Pregunta por la clase", task: "Al empezar, pregunta a tu profesor si alguien llamó, si hay algo nuevo o si alguien más viene hoy.", phrases: ["¿Hay algo nuevo?", "¿Viene alguien más?"] },
      { move: "Suaviza", task: "Pide tres cosas durante la clase con un diminutivo de cortesía.", phrases: ["¿Me esperas un momentito?", "¿Me repites un poquito más despacio?"] },
      { move: "Exagera", task: "Cuenta a tu profesor la mejor fiesta o el peor problema de tu vida con aumentativos.", phrases: ["Fue un fiestón.", "¡Qué problemón!"] },
      { move: "Responde en negativo", task: "Pide a tu profesor cinco preguntas con algo y alguien, y responde siempre que no.", phrases: ["No, no vi a nadie.", "No, no compré nada."] },
    ],
    bring: "Trae una lista de palabras con diminutivo o aumentativo que oyes en canciones, series o en tu familia, para preguntar qué valor tienen.",
  },
  quiz: {
    items: [
      { type: "gap", q: "Abre la ventana un ___, que hace calor. (poco)", answers: [["poquito"]], why: "_Poco_ → **poquito**." },
      { type: "choice", q: "«¡Qué golpazo se dio Pedro!» ¿Qué pasó?", options: ["Pedro se dio un golpe muy fuerte.", "Pedro tiene un perro grande.", "Pedro hizo una fiesta enorme."], answer: 0, why: "**-azo** como golpe fuerte." },
      { type: "gap", q: "—¿Comiste ___ en el avión? —No, no comí ___.", answers: [["algo"], ["nada"]], why: "Pregunta con **algo**, respuesta con **nada**." },
      { type: "transform", source: "¿Alguien vino a buscarme?", instruction: "Responde que no con nadie antes del verbo.", answers: ["No, nadie vino a buscarte.", "No, nadie vino."], why: "**Nadie** + verbo, sin _no_." },
      { type: "error", sentence: "En la fiesta no conocía nadie.", answers: ["En la fiesta no conocía a nadie."], why: "Persona que recibe la acción: **a nadie**." },
      { type: "error", sentence: "Nadie no contestó el teléfono.", answers: ["Nadie contestó el teléfono.", "No contestó nadie el teléfono."], why: "Con _nadie_ antes del verbo, **sin no**." },
      { type: "choice", q: "¿Qué palabra en -ón ya no significa «grande», sino otra cosa?", options: ["problemón", "fiestón", "cajón"], answer: 2, why: "**El cajón** es la parte de un mueble." },
      { type: "listen", q: "¿Qué oyes en la frase del café?", audio: "¿Me trae un cafecito, por favor?", options: ["un café", "un cafecito", "un cafetazo"], answer: 1 },
      { type: "order", words: ["¿Alguien", "necesita", "algo", "del", "supermercado?"] },
      { type: "open", prompt: "Escribe tres frases: una pregunta con alguien, una respuesta con nada y una frase con un diminutivo de cortesía.", model: "¿Alguien vio mi paraguas? No, no vimos nada. Espérame un momentito, que lo busco en el coche.", checklist: ["Pregunta con alguien", "No + verbo + nada", "Diminutivo de cortesía bien escrito"] },
    ],
  },
  complete: {
    canNow: [
      "Formar diminutivos con **-ito, -cito, -ecito** y su ortografía (_poquito, tacita_).",
      "Usar el diminutivo para el tamaño, el cariño y la cortesía (_un momentito_).",
      "Exagerar con **-ón** y **-azo** y criticar con **-ucho**; reconocer palabras como _cajón_ o _bolsillo_.",
      "Preguntar con **algo / alguien** y responder con **nada / nadie**.",
      "Colocar **no** correctamente y usar **a alguien / a nadie**.",
      "Organizar una actividad con vecinos y pedir ayuda con suavidad.",
    ],
    review: ["Poco → poquito; café → cafecito; problema → problemón.", "¿Alguien vino? —No, no vino nadie. / Nadie vino.", "No conozco a nadie; hay alguien en la puerta."],
  },
  related: [
    { path: "/gramatica/diminutivos-aumentativos-y-valor-afectivo", label: "Clase: Diminutivos, aumentativos y valor afectivo" },
    { path: "/gramatica/cuantificadores-algo-nada-alguien-nadie", label: "Clase: Cuantificadores algo, nada, alguien, nadie" },
  ],
};
