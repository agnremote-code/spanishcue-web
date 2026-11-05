import type { Module } from "../../types";

export const a2w12: Module = {
  id: "a2-12",
  level: "a2",
  week: 12,
  kind: "core",
  title: "Más grande que el otro y con la mejor vista de la ciudad",
  subtitle: "Repaso de las comparaciones (más… que, tan… como, mejor, peor, mayor, menor) y de los superlativos (el más barato de los tres, bonitísimo) para elegir entre varias opciones.",
  stop: { place: "Tegucigalpa", country: "Honduras" },
  minutes: 105,
  newObjectives: [
    "a2.gram.g068",
    "a2.gram.g069",
    "a2.voc.w12-vivienda-alquiler",
    "a2.pron.w12-isimo-exclamaciones",
    "a2.lis.w12-visita-apartamento",
    "a2.read.w12-mensaje-eleccion",
    "a2.wri.w12-comparar-opciones",
    "a2.spk.w12-comparar-elegir",
    "a2.fun.w12-elegir-entre-opciones",
    "a2.disc.w12-justificar-eleccion",
  ],
  reviewObjectives: ["a2.gram.g066","a2.gram.g067","a2.voc.w11-barrio-vecinos","a2.pron.w11-que-sin-fuerza","a2.lis.w11-paseo-barrio","a2.read.w11-correo-barrio","a2.wri.w11-guia-barrio","a2.spk.w11-presentar-barrio","a2.fun.w11-definir-sin-palabra","a2.disc.w11-unir-ideas"],
  prerequisites: ["a2-11"],
  goal: {
    canDo: "Al final de esta semana puedes comparar dos cosas (más caro que, tan grande como, mejor que), describir su estado (la cocina está reformada), destacar una entre varias (el más barato de los tres, la mejor vista de la ciudad) e intensificar con -ísimo y ¡qué…! para elegir y justificar tu elección.",
    steps: [
      "Repasa `más / menos + adjetivo + que` y `tan + adjetivo + como`.",
      "Usa `mejor, peor, mayor, menor` sin `más`: `mejor que`, nunca `más bueno que`.",
      "Describe el estado con `estar + participio`: `la cocina está reformada`.",
      "Destaca uno del grupo: `el más barato de los tres`, `la mejor vista de la ciudad`.",
      "Intensifica con `-ísimo` y reacciona con `¡Qué bonito!`.",
      "Escucha la visita a un apartamento en Tegucigalpa y escribe para comparar opciones.",
    ],
  },
  theory: {
    intro: "Esta semana repasas tus dos clases sobre **comparar**: primero entre dos cosas (_más grande que, tan caro como, mejor que_) y después para destacar una dentro de un grupo (_el más barato de los tres, bonitísimo_). La situación: Andrea, enfermera, empieza a trabajar en un hospital de Tegucigalpa y visita apartamentos con su hermano Mauricio.",
    parts: [
      {
        heading: "Comparar dos cosas: más, menos, tan",
        body: [
          "Para decir que una cosa tiene **más** o **menos** de una cualidad, usa **más / menos + adjetivo + que**: _Este apartamento es **más grande que** el otro_. _El barrio es **menos ruidoso que** el centro_.",
          "Para decir que son **iguales**, usa **tan + adjetivo + como**: _El segundo es **tan caro como** el primero_. También puedes decir **igual de + adjetivo**: _Los dos son **igual de** luminosos_.",
          "El adjetivo concuerda con la cosa de la que hablas: _La cocina es más **pequeña** que el salón_. Con un número, se dice **más de**: _Cuesta **más de** diez mil lempiras_.",
        ],
        support: [
          "_más / menos + adjective + que_ = more / less … than. _tan + adjective + como_ = as … as. With numbers: _más de_ (more than).",
        ],
        table: {
          caption: "Tres maneras de comparar",
          head: ["Idea", "Fórmula", "Ejemplo"],
          rows: [
            ["superioridad", "más + adjetivo + que", "Este piso es más luminoso que el otro."],
            ["inferioridad", "menos + adjetivo + que", "La colonia es menos céntrica que Palmira."],
            ["igualdad", "tan + adjetivo + como", "El baño es tan moderno como la cocina."],
          ],
        },
        examples: [
          { es: "El autobús es más lento que el taxi, pero es menos caro.", en: "The bus is slower than the taxi, but it's less expensive." },
          { es: "Mi calle no es tan tranquila como la tuya.", en: "My street isn't as quiet as yours." },
        ],
        mistakes: [
          { wrong: "Este cuarto es más grande como el otro.", right: "Este cuarto es más grande que el otro.", why: "Con **más / menos** va **que**; **como** va con _tan_." },
          { wrong: "Es tan caro que el primero.", right: "Es tan caro como el primero.", why: "Igualdad: **tan… como**." },
        ],
      },
      {
        heading: "Mejor, peor, mayor, menor",
        body: [
          "Cuatro adjetivos tienen su propia forma para comparar y **no llevan más**: _bueno_ → **mejor**, _malo_ → **peor**, _grande_ (edad) → **mayor**, _pequeño_ (edad) → **menor**.",
          "Tienen una sola forma para masculino y femenino, y el plural termina en **-es**: _Esta zona es **mejor** que la otra_. _Los precios aquí son **peores**_. _Mi hermana es **mayor** que yo_.",
          "**Mayor** y **menor** hablan sobre todo de **edad**. Para el tamaño, lo normal es _más grande / más pequeño_: _Mi cuarto es **más grande** que el tuyo_.",
        ],
        support: [
          "_mejor_ (better), _peor_ (worse), _mayor_ (older), _menor_ (younger) never take _más_. For size, say _más grande / más pequeño_.",
        ],
        table: {
          caption: "Formas especiales",
          head: ["Adjetivo", "Comparativo", "Ejemplo"],
          rows: [
            ["bueno / buena", "mejor (que)", "Esta vista es mejor que la otra."],
            ["malo / mala", "peor (que)", "El tráfico hoy es peor que ayer."],
            ["grande (edad)", "mayor (que)", "Mauricio es mayor que Andrea."],
            ["pequeño (edad)", "menor (que)", "Mi primo es dos años menor que yo."],
          ],
        },
        examples: [
          { es: "Este colchón es mejor que el mío: duermo mucho mejor.", en: "This mattress is better than mine: I sleep much better." },
          { es: "Los dueños son mayores que mis padres.", en: "The owners are older than my parents." },
        ],
        mistakes: [
          { wrong: "Este barrio es más bueno que el otro.", right: "Este barrio es mejor que el otro.", why: "Para comparar calidad, **mejor**, sin _más_." },
          { wrong: "Es más mejor vivir cerca del trabajo.", right: "Es mejor vivir cerca del trabajo.", why: "_Mejor_ ya compara: nunca **más mejor**." },
        ],
        tip: "Para reforzar una comparación, pon **mucho** delante: _mucho mejor, mucho más barato_. Nunca _muy mejor_.",
      },
      {
        heading: "Describir el estado y hablar de grupos",
        body: [
          "Para comparar casas, coches o lugares necesitas describir **cómo están**. El participio funciona como adjetivo con **estar**: _La cocina **está reformada**_. _Las paredes **están pintadas**_. _El apartamento **está amueblado**_.",
          "Como todo adjetivo, el participio **concuerda**: _el baño está **limpio**_, _la puerta está **rota**_, _los servicios están **incluidos**_. Recuerda los irregulares: _roto, hecho, abierto, puesto_.",
          "Las palabras que nombran un grupo, como **la gente, la familia, el equipo**, van con el verbo en **singular**: _La gente del edificio **es** tranquila_.",
        ],
        support: [
          "Past participles work as adjectives with _estar_ and agree: _la cocina está reformada_ (the kitchen has been renovated). Group nouns like _la gente_ take a singular verb.",
        ],
        examples: [
          { es: "El segundo piso está mejor cuidado que el primero.", en: "The second flat is better looked after than the first one." },
          { es: "La gente de este barrio es más amable que la del centro.", en: "The people in this neighbourhood are friendlier than in the centre." },
        ],
        mistakes: [
          { wrong: "Las ventanas están rompidas.", right: "Las ventanas están rotas.", why: "_Romper_ tiene participio irregular: **roto, rota, rotos, rotas**." },
          { wrong: "La gente del edificio son muy simpáticos.", right: "La gente del edificio es muy simpática.", why: "_La gente_ es singular y femenino: **es simpática**." },
        ],
      },
      {
        heading: "El más… de: destacar uno del grupo",
        body: [
          "Para decir que algo es el número uno de un grupo, usa **el / la / los / las + nombre + más / menos + adjetivo + de**: _Es **el apartamento más barato de** los tres_. _Es **la calle más tranquila del** barrio_.",
          "Si ya sabemos de qué hablamos, quita el nombre: _¿Cuál te gusta? —**El más grande**_. Con las formas especiales, el adjetivo va **delante** del nombre: _**la mejor** vista **de** la ciudad_, _**el peor** día **del** año_, _**el mayor** de los hermanos_.",
          "Para decir que algo está entre los primeros, usa **uno de los / una de las + plural**: _Es **una de las** colonias **más seguras** de Tegucigalpa_.",
        ],
        support: [
          "_el / la + noun + más + adjective + de_ = the most … in / of. Use _de_, not _que_ or _en_: _el más barato de los tres_. With _mejor / peor_ the adjective goes before the noun.",
        ],
        table: {
          caption: "Comparar o destacar",
          head: ["Entre dos (comparativo)", "En un grupo (superlativo)"],
          rows: [
            ["más caro que el otro", "el más caro de todos"],
            ["mejor que la mía", "la mejor de la calle"],
            ["menor que su hermano", "el menor de la familia"],
          ],
        },
        examples: [
          { es: "El Picacho es uno de los lugares más visitados de la ciudad.", en: "El Picacho is one of the most visited places in the city." },
          { es: "De los tres apartamentos, este es el menos ruidoso.", en: "Of the three flats, this is the least noisy." },
        ],
        mistakes: [
          { wrong: "Es la colonia más segura que la ciudad.", right: "Es la colonia más segura de la ciudad.", why: "El grupo se introduce con **de**, no con _que_." },
          { wrong: "Es el más mejor de los tres.", right: "Es el mejor de los tres.", why: "_Mejor_ no lleva **más**." },
          { wrong: "Son los mejor apartamentos del barrio.", right: "Son los mejores apartamentos del barrio.", why: "En plural: **mejores**." },
        ],
      },
      {
        heading: "-ísimo y ¡qué…!: muy, muy",
        body: [
          "Para decir **muy, muy** sin comparar con nada, añade **-ísimo / -ísima / -ísimos / -ísimas** al adjetivo sin su última vocal: _caro_ → **carísimo**, _limpia_ → **limpísima**, _fácil_ → **facilísimo**.",
          "Atención a la ortografía: _rico_ → **riquísimo**, _largo_ → **larguísimo**, _amable_ → **amabilísimo**. Como -ísimo ya significa _muy_, **no** se pone _muy_ delante.",
          "Para reaccionar con emoción usa **¡Qué + adjetivo!**: _¡Qué luminoso!_ O con un nombre: _¡Qué vista **tan** bonita!_, _¡Qué vista **más** bonita!_",
        ],
        support: [
          "_-ísimo_ means very, very: _carísimo, bonitísima_. Watch the spelling: _rico → riquísimo, largo → larguísimo_. Never _muy carísimo_. Exclamations: _¡Qué bonito!_, _¡Qué casa tan bonita!_",
        ],
        table: {
          caption: "Formar -ísimo",
          head: ["Adjetivo", "-ísimo", "Cambio"],
          rows: [
            ["barato", "baratísimo", "quita la -o"],
            ["fácil", "facilísimo", "añade -ísimo"],
            ["rico", "riquísimo", "c → qu"],
            ["largo", "larguísimo", "g → gu"],
            ["amable", "amabilísimo", "-ble → -bilísimo"],
          ],
        },
        examples: [
          { es: "El alquiler es baratísimo para una zona tan céntrica.", en: "The rent is really cheap for such a central area." },
          { es: "¡Qué balcón tan grande! Y la vista es bonitísima.", en: "What a big balcony! And the view is gorgeous." },
        ],
        mistakes: [
          { wrong: "La sopa está muy riquísima.", right: "La sopa está riquísima.", why: "**-ísimo** ya significa _muy_." },
          { wrong: "El camino es larguisímo.", right: "El camino es larguísimo.", why: "La tilde va siempre en la **í** de **-ísimo**." },
        ],
        tip: "Comparativo, superlativo y -ísimo en una frase: _Es **más alto que** la iglesia, es **el más alto de** la ciudad y es **altísimo**_.",
      },
    ],
  },
  grammar: {
    intro: "Primero comparas dos cosas y describes su estado; después destacas una del grupo e intensificas con -ísimo.",
    exercises: [
      {
        id: "g1",
        type: "gap",
        title: "Más, menos, tan",
        prompt: "Completa la comparación con **más / menos… que** o **tan… como**.",
        items: [
          { q: "El taxi cuesta 200 lempiras; el bus, 15. El bus es ___ caro ___ el taxi.", answers: [["menos"], ["que"]], why: "El bus cuesta menos: **menos caro que**." },
          { q: "Las dos habitaciones miden lo mismo: la primera es ___ grande ___ la segunda.", answers: [["tan"], ["como"]], why: "Iguales: **tan… como**." },
          { q: "En Tegucigalpa hace más fresco que en La Ceiba: La Ceiba es ___ calurosa ___ Tegucigalpa.", answers: [["más"], ["que"]], why: "La Ceiba tiene más calor: **más calurosa que**." },
          { q: "Mi calle tiene poco tráfico, pero la tuya tiene menos: mi calle es ___ tranquila ___ la tuya.", answers: [["menos"], ["que"]], why: "Tu calle es más tranquila; la mía, **menos tranquila que** la tuya." },
          { q: "El metro y la bici tardan lo mismo: la bici es ___ rápida ___ el metro.", answers: [["tan", "igual de"], ["como"]], why: "Iguales: **tan rápida como**." },
        ],
      },
      {
        id: "g2",
        type: "choice",
        title: "Formas especiales, estados y grupos",
        prompt: "Elige la frase correcta.",
        items: [
          { q: "Quieres decir que el segundo hotel tiene más calidad.", options: ["El segundo hotel es más bueno.", "El segundo hotel es mejor.", "El segundo hotel es más mejor."], answer: 1, why: "Calidad: **mejor**, sin _más_." },
          { q: "Hablas de la edad de tu hermana, que nació antes que tú.", options: ["Mi hermana es mayor que yo.", "Mi hermana es más grande como yo.", "Mi hermana es mayor de yo."], answer: 0, why: "Edad: **mayor que**." },
          { q: "Describes el estado de las ventanas después de la tormenta.", options: ["Las ventanas están rompidas.", "Las ventanas son rotas.", "Las ventanas están rotas."], answer: 2, why: "Estado: **estar** + participio irregular que concuerda, **rotas**." },
          { q: "Hablas de los vecinos de tu edificio en general.", options: ["La gente del edificio es muy amable.", "La gente del edificio son muy amables.", "Las gentes del edificio es amable."], answer: 0, why: "_La gente_ va en singular: **es amable**." },
        ],
      },
      {
        id: "g3",
        type: "transform",
        title: "De comparar a destacar",
        prompt: "Escribe la frase con el **superlativo**: el / la + más… de.",
        items: [
          { source: "Esta calle es más tranquila que todas las calles del barrio.", answers: ["Esta calle es la más tranquila del barrio.", "Esta es la calle más tranquila del barrio."], why: "El grupo con **de**: _del barrio_." },
          { source: "Este apartamento es más barato que los otros dos.", answers: ["Este apartamento es el más barato de los tres.", "Este es el apartamento más barato de los tres."], why: "**El más barato de** los tres." },
          { source: "Esta vista es mejor que todas las vistas de la ciudad.", answers: ["Esta es la mejor vista de la ciudad.", "Esta vista es la mejor de la ciudad."], why: "**La mejor** va delante del nombre." },
          { source: "Raúl es menor que todos sus primos.", answers: ["Raúl es el menor de sus primos.", "Raúl es el menor de todos sus primos."], why: "Edad en el grupo: **el menor de**." },
        ],
      },
      {
        id: "g4",
        type: "gap",
        title: "Muy, muy: -ísimo",
        prompt: "Escribe el adjetivo con **-ísimo** y la concordancia correcta. Cuidado con la ortografía.",
        items: [
          { q: "Las baleadas de doña Tere estaban ___. (rico)", answers: [["riquísimas"]], why: "_Rico_ → **riquísimo**; femenino plural, **riquísimas**." },
          { q: "La cola del banco era ___. (largo)", answers: [["larguísima"]], why: "_Largo_ → **larguísimo**; la cola, **larguísima**." },
          { q: "El dueño fue ___ con nosotros. (amable)", answers: [["amabilísimo"]], why: "_Amable_ → **amabilísimo**." },
          { q: "Los ejercicios de hoy son ___. (fácil)", answers: [["facilísimos"]], why: "_Fácil_ → **facilísimo**; plural, **facilísimos**." },
          { q: "Esta habitación está ___: no se ve nada. (oscuro)", answers: [["oscurísima"]], why: "_La habitación_ → **oscurísima**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para buscar vivienda y comparar opciones antes de decidir.",
    groups: [
      {
        title: "Buscar apartamento",
        items: [
          { es: "el alquiler", en: "the rent" },
          { es: "amueblado / sin amueblar", en: "furnished / unfurnished" },
          { es: "los servicios incluidos", en: "bills (water, electricity) included" },
          { es: "el estacionamiento", en: "the parking space" },
          { es: "la vigilancia", en: "security (guards)" },
          { es: "la colonia", en: "the neighbourhood (in Honduras, Mexico…)" },
        ],
      },
      {
        title: "Adjetivos para comparar",
        items: [
          { es: "luminoso / oscuro", en: "bright / dark" },
          { es: "céntrico / alejado", en: "central / far from the centre" },
          { es: "ruidoso / tranquilo", en: "noisy / quiet" },
          { es: "espacioso / estrecho", en: "spacious / cramped, narrow" },
          { es: "reformado", en: "renovated" },
        ],
      },
      {
        title: "Para decidir",
        items: [
          { es: "sale más barato", en: "it works out cheaper" },
          { es: "me queda más cerca", en: "it's closer for me" },
          { es: "vale la pena", en: "it's worth it" },
          { es: "lo único malo es…", en: "the only bad thing is…" },
          { es: "me lo quedo", en: "I'll take it" },
        ],
      },
    ],
    exercises: [
      {
        id: "v1",
        type: "match",
        title: "¿Qué significa?",
        prompt: "Une cada frase con su significado.",
        pairs: [
          { left: "Tiene cama, mesa y sofá.", right: "amueblado" },
          { left: "Entra mucho sol por las ventanas.", right: "luminoso" },
          { left: "Está a cinco minutos de todo.", right: "céntrico" },
          { left: "Pagas el agua y la luz con el alquiler.", right: "los servicios incluidos" },
          { left: "Hay guardias en la puerta día y noche.", right: "la vigilancia" },
        ],
        why: "Son palabras clave para comparar viviendas: **amueblado, luminoso, céntrico**…",
      },
      {
        id: "v2",
        type: "context",
        title: "Decidir",
        prompt: "Lee la situación y elige la frase más natural.",
        items: [
          { context: "El apartamento A cuesta menos y está al lado de tu trabajo.", q: "Le dices a tu amiga:", options: ["El A sale más barato y me queda más cerca.", "El A es el más caro de todos.", "El A es tan lejos como el B."], answer: 0, why: "**Sale más barato** y **me queda más cerca**." },
          { context: "El apartamento es perfecto, pero el estacionamiento es pequeño.", q: "Comentas:", options: ["Lo único malo es que es perfecto.", "Me lo quedo porque el estacionamiento es pequeñísimo.", "Lo único malo es el estacionamiento, pero vale la pena."], answer: 2, why: "Un problema pequeño + **vale la pena**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La fuerza en -ísimo y el tono de ¡qué…!",
    explanation: [
      "Cuando añades **-ísimo**, la fuerza de la palabra **salta** a la **í**: _CA-ro_ → _ca-RÍ-si-mo_, _BO-ni-ta_ → _bo-ni-TÍ-si-ma_. Por eso siempre lleva tilde.",
      "Las exclamaciones con **¡Qué…!** empiezan **alto** y con fuerza en _qué_, y la voz **baja** al final: _¡QUÉ luminoso!_ Si la voz sube al final, suena a pregunta de sorpresa.",
      "En _¡Qué vista tan bonita!_ hay dos golpes: _QUÉ_ y _bo-NI-ta_. Di la frase en un solo grupo, sin pausa después de _vista_.",
    ],
    support: [
      "_-ísimo_ moves the stress to the _í_: _CAro → caRÍsimo_. Exclamations with _¡Qué…!_ start high and fall at the end.",
    ],
    table: {
      caption: "La fuerza salta",
      head: ["Adjetivo", "Con -ísimo"],
      rows: [
        ["CA-ro", "ca-RÍ-si-mo"],
        ["LAR-go", "lar-GUÍ-si-mo"],
        ["fá-CIL", "fa-ci-LÍ-si-mo"],
        ["a-MA-ble", "a-ma-bi-LÍ-si-mo"],
      ],
    },
    perceive: {
      id: "p1",
      type: "listen",
      title: "¿Normal o -ísimo?",
      prompt: "Escucha la frase y elige la forma que oyes.",
      items: [
        { q: "¿Cómo es el alquiler, según la frase?", audio: "El alquiler es carísimo.", options: ["caro", "carísimo", "más caro"], answer: 1 },
        { q: "¿Cómo es el camino, según la frase?", audio: "El camino al mirador es largo.", options: ["largo", "larguísimo", "el más largo"], answer: 0 },
        { q: "¿Cómo era la vecina, según la frase?", audio: "La vecina era amabilísima.", options: ["amable", "más amable", "amabilísima"], answer: 2 },
        { q: "¿Qué oyes en la frase de la terraza?", audio: "¡Qué terraza tan grande!", options: ["¡Qué terraza tan grande!", "¿Qué terraza es más grande?", "La terraza es grande."], answer: 0 },
        { q: "¿Qué oyes en la frase del examen?", audio: "El examen fue facilísimo.", options: ["fácil", "facilísimo", "más fácil"], answer: 1 },
      ],
    },
    produce: [
      { text: "Caro, carísimo. Bonita, bonitísima.", tip: "La fuerza salta a la **í**: _ca-RÍ-si-mo_." },
      { text: "¡Qué luminoso!", tip: "Empieza alto en _QUÉ_ y baja al final." },
      { text: "¡Qué vista tan bonita!", tip: "Dos golpes, _QUÉ_ y _NI_, sin pausa." },
      { text: "Es el más barato de los tres.", tip: "Fuerza en _BA-ra-to_; _de los tres_ más bajo." },
      { text: "Este es mejor que el otro.", tip: "Une _mejor que el_: _me-JOR-que-el-O-tro_." },
    ],
    spelling: "Siempre con tilde: **-ísimo, -ísima**. Cambios: **c → qu** (riquísimo), **g → gu** (larguísimo), **-ble → -bilísimo** (amabilísimo).",
  },
  listening: {
    title: "El segundo apartamento",
    context: "Andrea busca apartamento en Tegucigalpa. Con su hermano Mauricio visita el segundo de la semana, en una colonia al sur de la ciudad. Don Ricardo, el dueño, les enseña el piso.",
    speakers: [
      { id: "ricardo", name: "Don Ricardo", voice: "es-US-m", role: "dueño del apartamento" },
      { id: "andrea", name: "Andrea", voice: "es-CO-f", role: "busca apartamento" },
      { id: "mauricio", name: "Mauricio", voice: "es-MX-m", role: "hermano de Andrea" },
    ],
    script: [
      { speaker: "ricardo", text: "Pasen, pasen. Este apartamento es más grande que el primero que vieron: tiene dos dormitorios y un balcón." },
      { speaker: "andrea", text: "¡Qué luminoso! Y la cocina está reformada, ¿verdad?" },
      { speaker: "ricardo", text: "Sí, la reformamos el año pasado. Además, está amueblado: la cama, la mesa y el sofá están incluidos." },
      { speaker: "mauricio", text: "¿Y el alquiler? ¿Es tan caro como el de la colonia Palmira?" },
      { speaker: "ricardo", text: "No, es más barato: cuesta dos mil lempiras menos al mes. Pero está más lejos del centro." },
      { speaker: "andrea", text: "Para mí eso no es un problema. El hospital está a quince minutos." },
      { speaker: "mauricio", text: "Mira la vista desde el balcón. Es la mejor de todos los apartamentos que vimos. Se ve toda la ciudad." },
      { speaker: "andrea", text: "Es bonitísima. ¿Y los vecinos? ¿Hay mucho ruido?" },
      { speaker: "ricardo", text: "No, la gente del edificio es muy tranquila; casi todos son familias. Y es el edificio más seguro de la zona: hay vigilancia toda la noche." },
      { speaker: "mauricio", text: "Andrea, sinceramente, este es mucho mejor que el otro. El primero era más céntrico, pero era oscurísimo." },
      { speaker: "andrea", text: "Tienes razón. Don Ricardo, me lo quedo." },
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
            { q: "¿Qué hacen Andrea y Mauricio?", options: ["Venden su casa.", "Visitan un apartamento para alquilar.", "Buscan un hotel para las vacaciones."], answer: 1 },
            { q: "¿Qué decide Andrea al final?", options: ["Se queda con el apartamento.", "Quiere ver más apartamentos.", "Prefiere el primer apartamento."], answer: 0 },
            { q: "¿Qué opina Mauricio del apartamento?", options: ["Que es peor que el primero.", "Que es demasiado caro.", "Que es mucho mejor que el otro."], answer: 2 },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: atención a las comparaciones y a los detalles del piso.",
        exercise: {
          id: "l2",
          type: "choice",
          prompt: "Elige la respuesta correcta.",
          items: [
            { q: "¿Cuántos dormitorios tiene el apartamento?", options: ["uno", "dos", "tres"], answer: 1 },
            { q: "¿Cuánto cuesta en comparación con el de Palmira?", options: ["dos mil lempiras menos", "lo mismo", "dos mil lempiras más"], answer: 0 },
            { q: "¿Qué desventaja tiene?", options: ["No tiene muebles.", "Es ruidoso.", "Está más lejos del centro."], answer: 2 },
            { q: "¿Por qué no le gustó el primer apartamento a Mauricio?", options: ["porque era carísimo", "porque era muy oscuro", "porque estaba lejos"], answer: 1 },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en cómo comparan y destacan.",
        exercise: {
          id: "l3",
          type: "classify",
          prompt: "¿Qué hace cada frase?",
          categories: ["compara dos cosas", "destaca uno del grupo", "muy, muy (-ísimo)"],
          items: [
            { text: "es más grande que el primero que vieron", cat: 0, why: "Dos apartamentos: **más… que**." },
            { text: "¿Es tan caro como el de la colonia Palmira?", cat: 0, why: "Igualdad: **tan… como**." },
            { text: "Es la mejor de todos los apartamentos que vimos.", cat: 1, why: "Uno del grupo: **la mejor de**." },
            { text: "es el edificio más seguro de la zona", cat: 1, why: "**El más seguro de** la zona." },
            { text: "Es bonitísima.", cat: 2, why: "**-ísima** = muy, muy bonita." },
            { text: "pero era oscurísimo", cat: 2 },
            { text: "este es mucho mejor que el otro", cat: 0 },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Por fin tengo apartamento",
    genre: "Mensaje a una amiga",
    frame: "Después de una semana de visitas, Andrea escribe a su amiga Karla, que vive en San Pedro Sula.",
    text: [
      "¡Karla! Por fin tengo apartamento. Vi tres en una semana y fue cansadísimo, pero valió la pena. El primero, en la colonia Palmira, era el más céntrico de los tres, pero también el más caro y el más oscuro: las ventanas daban a una pared.",
      "El segundo era tan grande como el tercero, pero la cocina estaba sucia y el baño estaba sin terminar. El dueño era amabilísimo, aunque el edificio era más ruidoso que una discoteca.",
      "Me quedé con el tercero. Está más lejos del centro que los otros, pero es mucho más barato y está amueblado. La cocina está recién pintada y tiene la mejor vista de la ciudad: desde el balcón se ve el Picacho. La gente del edificio es muy simpática. La vecina de al lado es mayor que mi madre y ya me trajo unas baleadas riquísimas.",
      "Lo único malo es el estacionamiento, que es pequeñísimo, y mi carro es más grande que el de Mauricio. ¿Vienes a verlo el sábado? Es el mejor plan del fin de semana, te lo prometo.",
    ],
    glossary: [
      { es: "daban a una pared", en: "looked out onto a wall" },
      { es: "las baleadas", en: "baleadas (Honduran flour tortillas with beans and cream)" },
      { es: "el Picacho", en: "El Picacho (a hill and park above Tegucigalpa)" },
      { es: "el carro", en: "the car (in much of Latin America)" },
    ],
    tasks: [
      {
        id: "r1",
        type: "choice",
        prompt: "Lee el mensaje y responde.",
        items: [
          { q: "¿Qué ventaja tenía el primer apartamento?", options: ["Era el más barato.", "Era el más céntrico.", "Tenía la mejor vista."], answer: 1 },
          { q: "¿Qué problema tenía el segundo edificio?", options: ["Era muy ruidoso.", "El dueño era antipático.", "Era pequeñísimo."], answer: 0 },
          { q: "¿Por qué eligió Andrea el tercero?", options: ["porque está en el centro", "porque tiene un estacionamiento grande", "porque es más barato, está amueblado y tiene buena vista"], answer: 2 },
          { q: "¿Qué le trajo la vecina?", options: ["unas baleadas", "unas plantas", "una lámpara"], answer: 0 },
        ],
      },
      {
        id: "r2",
        type: "classify",
        prompt: "¿Qué apartamento describe cada frase?",
        categories: ["el primero", "el segundo", "el tercero"],
        items: [
          { text: "el más caro y el más oscuro", cat: 0 },
          { text: "más ruidoso que una discoteca", cat: 1 },
          { text: "es mucho más barato y está amueblado", cat: 2 },
          { text: "las ventanas daban a una pared", cat: 0 },
          { text: "el baño estaba sin terminar", cat: 1 },
          { text: "la mejor vista de la ciudad", cat: 2 },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada frase del mensaje para ver qué gramática hay dentro.",
      items: [
        { quote: "era el más céntrico de los tres", note: "Superlativo relativo: **el más + adjetivo + de** + grupo." },
        { quote: "El segundo era tan grande como el tercero", note: "Igualdad: **tan… como**." },
        { quote: "es mucho más barato y está amueblado", note: "**Mucho** refuerza la comparación; **está amueblado** describe el estado con participio." },
        { quote: "tiene la mejor vista de la ciudad", note: "**La mejor** va delante del nombre, sin _más_." },
        { quote: "es mayor que mi madre", note: "**Mayor que**: comparación de edad." },
        { quote: "unas baleadas riquísimas", note: "**-ísimo** con cambio ortográfico: _rico_ → **riquísimas**." },
      ],
    },
  },
  practice: {
    intro: "Mezcla las dos clases: comparar entre dos, describir el estado, destacar uno del grupo e intensificar.",
    exercises: [
      {
        id: "x1",
        type: "classify",
        title: "¿Comparar, destacar o intensificar?",
        prompt: "Clasifica cada frase.",
        categories: ["comparativo (entre dos)", "superlativo (en un grupo)", "-ísimo (muy, muy)"],
        items: [
          { text: "Tu moto es más rápida que mi bici.", cat: 0 },
          { text: "Es el mercado más grande de Honduras.", cat: 1 },
          { text: "El café estaba calentísimo.", cat: 2 },
          { text: "Mi abuela es la mayor de sus hermanas.", cat: 1, why: "**La mayor de** + grupo: superlativo." },
          { text: "Mi abuela es mayor que mi abuelo.", cat: 0, why: "**Mayor que** + otra persona: comparativo." },
          { text: "La película fue aburridísima.", cat: 2 },
        ],
      },
      {
        id: "x2",
        type: "error",
        title: "Corrige las opiniones",
        prompt: "Cada frase tiene un error. Escríbela bien.",
        items: [
          { sentence: "Este restaurante es más bueno que el de ayer.", answers: ["Este restaurante es mejor que el de ayer."], why: "Calidad: **mejor**, sin _más_." },
          { sentence: "Es el hotel más tranquilo que la playa.", answers: ["Es el hotel más tranquilo de la playa."], why: "Superlativo: el grupo va con **de**." },
          { sentence: "La comida estaba muy buenísima.", answers: ["La comida estaba buenísima.", "La comida estaba muy buena."], why: "**-ísimo** ya significa _muy_." },
          { sentence: "Mi apartamento es tan pequeño que el tuyo.", answers: ["Mi apartamento es tan pequeño como el tuyo."], why: "Igualdad: **tan… como**." },
          { sentence: "La puerta del garaje está abrida.", answers: ["La puerta del garaje está abierta."], why: "_Abrir_ tiene participio irregular: **abierta**." },
        ],
      },
      {
        id: "x3",
        type: "order",
        title: "Frases para elegir",
        prompt: "Toca las palabras en orden.",
        items: [
          { words: ["El", "tercero", "es", "el", "menos", "ruidoso", "de", "los", "tres."], en: "The third one is the least noisy of the three." },
          { words: ["Mi", "hermano", "es", "dos", "años", "menor", "que", "yo."], en: "My brother is two years younger than me." },
          { words: ["¡Qué", "cocina", "tan", "moderna!"], alt: ["¡Qué cocina más moderna!"], en: "What a modern kitchen!" },
        ],
      },
      {
        id: "x4",
        type: "open",
        title: "Escribe tú",
        prompt: "Escribe frases completas. Después compara con el modelo.",
        items: [
          {
            prompt: "Compara dos medios de transporte de tu ciudad: precio, rapidez y comodidad. Usa más… que, menos… que y tan… como.",
            model: "El metro es más rápido que el autobús, pero es menos cómodo porque siempre va lleno. El autobús es tan barato como el metro. La bici es la opción más sana, pero en invierno es peor.",
            checklist: ["Usas **más / menos… que**", "Usas **tan… como**", "Usas **mejor** o **peor** sin _más_"],
          },
          {
            prompt: "Presenta el mejor lugar de tu ciudad para un visitante: por qué es el más… de la ciudad y qué tiene de especial.",
            model: "El mejor lugar de mi ciudad es el mercado del puerto. Es el mercado más antiguo de la región y tiene el pescado más fresco de toda la costa. Los domingos está llenísimo, pero vale la pena.",
            checklist: ["Usas **el más… de** o **el mejor… de**", "El grupo va con **de**", "Usas una forma con **-ísimo**"],
          },
          {
            prompt: "Describe el estado de un lugar que visitaste (una casa, un hotel) con estar + participio y una reacción con ¡qué…!",
            model: "El hotel estaba recién pintado y las camas estaban hechas con sábanas blancas. Pero el aire acondicionado estaba roto. ¡Qué calor tan horrible!",
            checklist: ["Usas **estar + participio** con concordancia", "Usas un participio irregular (roto, hecho, abierto…)", "Terminas con una exclamación con **¡qué!**"],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un mensaje para ayudar a un amigo a elegir entre dos o tres opciones: apartamentos, hoteles o cursos.",
    context: "Un amigo tiene que elegir y te pide tu opinión. Ya viste las opciones con él. Escríbele para comparar y recomendarle una.",
    steps: [
      "Presenta las opciones en una frase.",
      "Compara dos características con **más / menos… que** y **tan… como**.",
      "Describe el estado de algo con **estar + participio** (está reformado, está incluido).",
      "Destaca la mejor opción con **el más… de** o **el mejor de**.",
      "Reacciona con **-ísimo** o **¡qué…!** y justifica con _por eso_ o _además_.",
      "Revisa: ¿usaste **que** con más / menos y **como** con tan? ¿Pusiste **de** en el superlativo? ¿Escribiste la tilde de -ísimo?",
    ],
    useLanguage: ["es más… que", "es tan… como", "es mejor / peor que", "está reformado / incluido", "el más… de", "-ísimo", "por eso", "además", "lo único malo es…"],
    model: [
      "¡Hola, Diego! Pensé mucho en los dos hoteles para tus vacaciones. El Hotel Sol es más barato que el Hotel Brisa y el desayuno está incluido. Las habitaciones son tan grandes como las del Brisa, pero son menos modernas. El Brisa tiene la mejor piscina de la playa y está reformado, pero es carísimo. Además, la gente del Sol es amabilísima. Por eso, para mí, el Sol es la mejor opción. Lo único malo es que está un poco más lejos del mar. ¡Ya me contarás!",
    ],
    checklist: [
      "Usas **más / menos… que** y **tan… como** correctamente.",
      "Usas **mejor / peor / mayor / menor** sin _más_.",
      "Usas **estar + participio** con concordancia.",
      "Usas un superlativo con **de**.",
      "Justificas la elección con _por eso_ o _además_.",
    ],
    words: [60, 110],
  },
  speaking: {
    intro: "Habla en voz alta y grábate. Repite cada tarea hasta que salga sin leer.",
    tasks: [
      {
        title: "¿Cuál prefieres?",
        prompt: "Compara dos lugares donde viviste o que conoces bien (dos casas, dos ciudades, dos barrios) y di cuál prefieres y por qué.",
        prep: ["… es más… que…", "… no es tan… como…", "… es mejor / peor porque…", "Por eso prefiero…"],
        seconds: 75,
        model: "Viví en dos apartamentos en la misma ciudad. El primero era más céntrico que el segundo, pero era más pequeño y mucho más ruidoso. El segundo no era tan bonito como el primero, pero era más tranquilo y la cocina estaba reformada. Por eso prefiero el segundo: para mí, dormir bien es lo más importante.",
        selfCheck: ["Uso **que** con más / menos y **como** con tan.", "Digo **mejor**, no _más bueno_."],
      },
      {
        title: "Lo mejor de mi país",
        prompt: "Presenta tres cosas de tu país que son las mejores, las más famosas o las más raras: un lugar, una comida y una persona.",
        prep: ["El lugar más bonito de mi país es…", "La mejor comida es…", "Uno de los… más famosos es…", "Es buenísimo / altísimo…"],
        seconds: 60,
        model: "El lugar más bonito de mi país es un lago en las montañas. La mejor comida es la sopa de pescado de la costa: es riquísima. Y una de las personas más famosas es una cantante que tiene más de ochenta años.",
        selfCheck: ["Uso **el más… de** y **el mejor**.", "La fuerza de **-ísimo** cae en la **í**."],
      },
      {
        title: "Reacciona",
        prompt: "Imagina que visitas un apartamento con un amigo. Reacciona en voz alta a cinco cosas que ves (el salón, la vista, la cocina, el precio, el baño).",
        prep: ["¡Qué…!", "¡Qué… tan…!", "Está reformado / roto…", "Es carísimo / baratísimo"],
        seconds: 50,
        selfCheck: ["Mis exclamaciones empiezan altas y bajan al final.", "Uso **estar + participio** para el estado."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que repasaste y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Compara con tu profesor", task: "Compara tu ciudad con la ciudad de tu profesor: clima, precios y transporte.", phrases: ["Mi ciudad es más… que la tuya.", "No es tan… como…"] },
      { move: "Elige y justifica", task: "Pide a tu profesor dos opciones (dos restaurantes, dos películas) y elige una con tres razones.", phrases: ["Prefiero… porque es mejor…", "Además…", "Lo único malo es…"] },
      { move: "Récords", task: "Cuenta tus récords personales: el viaje más largo, la comida más rara, el mejor día del año.", phrases: ["El viaje más largo de mi vida fue…", "La comida más rara que probé…"] },
      { move: "Reacciona", task: "Cuando tu profesor te enseñe una foto o te cuente algo, reacciona con una exclamación o con -ísimo.", phrases: ["¡Qué bonito!", "¡Es buenísimo!"] },
    ],
    bring: "Trae fotos de dos lugares (casas, hoteles, ciudades) para compararlos en clase y elegir el mejor.",
  },
  quiz: {
    items: [
      { type: "gap", q: "La ensalada tiene menos calorías: es ___ pesada ___ la hamburguesa.", answers: [["menos"], ["que"]], why: "Menos calorías: **menos pesada que**." },
      { type: "choice", q: "¿Qué frase compara bien la calidad de dos cafés?", options: ["Este café es más bueno que el otro.", "Este café es mejor que el otro.", "Este café es más mejor que el otro."], answer: 1, why: "Calidad: **mejor**." },
      { type: "transform", source: "Este barrio es más seguro que todos los barrios de la ciudad.", instruction: "Escribe la frase con el superlativo (el más… de).", answers: ["Este barrio es el más seguro de la ciudad.", "Este es el barrio más seguro de la ciudad."], why: "**El más seguro de** la ciudad." },
      { type: "error", sentence: "La cocina es tan grande que el salón.", answers: ["La cocina es tan grande como el salón."], why: "Igualdad: **tan… como**." },
      { type: "error", sentence: "Fue el día más feliz que mi vida.", answers: ["Fue el día más feliz de mi vida."], why: "Superlativo: **de** + grupo." },
      { type: "gap", q: "Las tortillas de mi abuela son ___. (rico, -ísimo)", answers: [["riquísimas"]], why: "_Rico_ → **riquísimas**, con _qu_." },
      { type: "gap", q: "Después de la fiesta, todas las sillas estaban ___. (romper)", answers: [["rotas"]], why: "Participio irregular que concuerda: **rotas**." },
      { type: "listen", q: "¿Qué palabra oyes en la frase del hotel?", audio: "El hotel era baratísimo.", options: ["barato", "baratísimo", "más barato"], answer: 1 },
      { type: "order", words: ["Mi", "hermana", "es", "la", "mayor", "de", "la", "familia."] },
      { type: "open", prompt: "Compara dos restaurantes que conoces y di cuál es el mejor de tu barrio.", model: "La pizzería del parque es más barata que el restaurante chino, pero no es tan rica. Para mí, el mejor restaurante del barrio es el chino: la comida es buenísima.", checklist: ["Una comparación con más / menos… que o tan… como", "Un superlativo con de", "Una forma con -ísimo"] },
    ],
  },
  complete: {
    canNow: [
      "Comparar dos cosas con **más / menos… que** y **tan… como**.",
      "Usar **mejor, peor, mayor, menor** sin _más_.",
      "Describir el estado con **estar + participio** (_está reformado_) y hablar de grupos en singular (_la gente es_).",
      "Destacar uno del grupo: _el más barato de los tres, la mejor vista de la ciudad_.",
      "Intensificar con **-ísimo** y reaccionar con **¡Qué…!**",
      "Comparar opciones y justificar una elección.",
    ],
    review: ["Más caro que / tan caro como / mejor que (nunca _más bueno_).", "El más caro de los tres; la mejor de la ciudad.", "Carísimo, riquísimo, larguísimo (sin _muy_)."],
  },
  related: [
    { path: "/expandir-y-precisar-descripciones", label: "Clase: Comparaciones: mejor, peor, mayor, menor" },
    { path: "/gramatica/superlativos-relativos-y-absolutos-frecuentes", label: "Clase: Superlativos relativos y absolutos frecuentes" },
  ],
};
