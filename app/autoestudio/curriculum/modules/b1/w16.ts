import type { Module } from "../../types";

/**
 * B1 · semana 16 · Autoestudio espejo de G118 (discurso referido introductorio:
 * dijo que / pidió que) y G119 (se pasivo y se impersonal introductorio). Repaso
 * autónomo en un taller de talavera de Puebla: lo que dijo una clienta y cómo se
 * hace una pieza.
 */
export const b1w16: Module = {
  id: "b1-16",
  level: "b1",
  week: 16,
  kind: "core",
  title: "Encargos en Puebla: lo que dijo la clienta y cómo se hace la talavera",
  subtitle: "Repaso de cómo contar en pasado lo que alguien dijo, preguntó o pidió, y de cómo hablar de lo que se hace sin decir quién lo hace.",
  stop: { place: "Puebla", country: "México" },
  minutes: 95,
  newObjectives: [
    "b1.gram.g118",
    "b1.gram.g119",
    "b1.voc.w16-taller-artesania",
    "b1.pron.w16-pregunta-referida",
    "b1.lis.w16-encargo-taller",
    "b1.read.w16-como-se-hace",
    "b1.wri.w16-correo-reunion",
    "b1.spk.w16-contar-conversacion",
    "b1.fun.w16-transmitir-mensajes",
    "b1.disc.w16-voces-y-procesos",
  ],
  reviewObjectives: ["b1.gram.g116","b1.gram.g117","b1.voc.w15-mudanza-ciudad","b1.pron.w15-asi-que-sino","b1.lis.w15-debate-familiar","b1.read.w15-columna-quedarse","b1.wri.w15-texto-argumentativo","b1.spk.w15-defender-decision","b1.fun.w15-argumentar-decidir","b1.disc.w15-argumento-ordenado","b1.rev.w15-semanas-11-15"],
  prerequisites: ["b1-15"],
  goal: {
    canDo: "Al final de esta semana puedes contar a otra persona lo que alguien te dijo, te preguntó o te pidió («dijo que estaba lista», «me pidió que la llamara») y explicar cómo se hace algo o cómo se vive en un lugar sin nombrar a nadie («se pinta a mano», «aquí se trabaja despacio»).",
    steps: [
      "Repasa cómo cambian los tiempos, las personas y las referencias de tiempo y lugar cuando cuentas en pasado lo que alguien dijo o preguntó.",
      "Repasa las dos caras de «se»: la que concuerda con la cosa (se venden platos) y la impersonal, siempre en singular (se vive bien).",
      "Escucha a dos aprendices de un taller de talavera hablar de un encargo.",
      "Lee la página en la que un taller explica cómo se hace una pieza y qué le cuentan sus visitantes.",
      "Escribe un correo para contar una reunión, revísalo y cuenta en voz alta una conversación importante.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que sirven para pasar información de una persona a otra. Con la primera cuentas lo que alguien dijo; con la segunda explicas procesos y costumbres sin decir quién hace cada cosa. Te acompaña Ximena, aprendiz en un pequeño taller de talavera del barrio de los Sapos, en Puebla.",
    parts: [
      {
        heading: "Contar en pasado: el verbo da un paso atrás",
        body: [
          "Cuando cuentas hoy lo que alguien dijo en otro momento, el verbo que introduce la cita va en pasado («dijo», «contó», «explicó») y el verbo de la cita suele retroceder un tiempo. «Tengo prisa» se convierte en «dijo que tenía prisa»; «Ya lo pagué» o «Ya lo he pagado», en «dijo que ya lo había pagado»; «Volveré el viernes», en «dijo que volvería el viernes».",
          "El imperfecto no cambia («Antes vivía en Cholula» → «dijo que antes vivía en Cholula»). Si lo que se dijo sigue siendo verdad ahora o todavía no ha pasado, puedes mantener el tiempo original: «Me dijo que el taller abre a las nueve» (y sigue abriendo a las nueve)."
        ],
        table: {
          caption: "Lo que dijo → lo que cuentas",
          head: ["Dijo…", "Cuentas…", "Ejemplo"],
          rows: [
            ["presente", "imperfecto", "«Necesito doce tazas.» → Dijo que necesitaba doce tazas."],
            ["indefinido o perfecto", "pluscuamperfecto", "«Las vi en Internet.» → Dijo que las había visto en Internet."],
            ["futuro", "condicional", "«Pasaré el lunes.» → Dijo que pasaría el lunes."],
            ["ir a + infinitivo", "iba a + infinitivo", "«Voy a pagar en efectivo.» → Dijo que iba a pagar en efectivo."],
            ["imperfecto", "imperfecto", "«De niña coleccionaba platos.» → Dijo que de niña coleccionaba platos."]
          ]
        },
        mistakes: [
          {
            wrong: "El sábado el cliente nos dijo que volverá el domingo, pero no apareció.",
            right: "El sábado el cliente nos dijo que volvería el domingo, pero no apareció.",
            why: "El domingo ya pasó: el futuro de la cita se convierte en condicional."
          }
        ],
        tip: "Antes de contar, pregúntate: ¿lo que dijo sigue siendo verdad hoy? Si no, haz retroceder el verbo."
      },
      {
        heading: "Quién, dónde, cuándo: las referencias también cambian",
        body: [
          "Al contar, cambias el punto de vista. «Mi taller» en boca de la maestra es «su taller» en la tuya; «aquí» puede ser «allí»; «hoy» pasa a «ese día», «mañana» a «al día siguiente» y «ayer» a «el día anterior», si ya no estás en ese día.",
          "Las preguntas se cuentan sin signos de interrogación. Si la pregunta se responde con sí o no, usa «preguntó si»: «¿Hacen envíos?» → «Preguntó si hacíamos envíos». Si tiene palabra interrogativa, la repites con su tilde: «¿Cuánto cuesta?» → «Preguntó cuánto costaba». Para las peticiones, usa «me pidió que» o «me dijo que» con tres formas que se aprenden como bloque: «viniera», «llamara», «hiciera» (si hablas con alguien de tú: «vinieras», «llamaras», «hicieras»)."
        ],
        examples: [
          { es: "«Mañana traigo el diseño.» → Dijo que al día siguiente traía el diseño.", note: "Mañana → al día siguiente." },
          { es: "«¿Usan pintura sin plomo?» → Me preguntó si usábamos pintura sin plomo.", note: "Pregunta de sí o no: «si»." },
          { es: "«¿Dónde está la tienda?» → Quería saber dónde estaba la tienda.", note: "Palabra interrogativa con tilde." },
          { es: "«Llámame el miércoles.» → Me pidió que la llamara el miércoles.", note: "Petición: «que» + «llamara»." },
          { es: "«Ven temprano.» → La maestra me dijo que viniera temprano.", note: "«Dijo que» + petición: «viniera»." }
        ],
        mistakes: [
          {
            wrong: "Me preguntó si cuándo estaría listo el pedido.",
            right: "Me preguntó cuándo estaría listo el pedido.",
            why: "«Si» solo va con preguntas de sí o no; con «cuándo» no hace falta."
          },
          {
            wrong: "La maestra me pidió que hago las muestras.",
            right: "La maestra me pidió que hiciera las muestras.",
            why: "Una petición contada en pasado lleva «hiciera», no el presente de indicativo."
          }
        ]
      },
      {
        heading: "«Se» que concuerda con la cosa: se vende, se venden",
        body: [
          "Cuando no importa quién hace algo, sino lo que se hace, usas «se» + verbo en tercera persona. El verbo concuerda con la cosa: «Se pinta cada plato a mano», «Se pintan los platos a mano». Es lo que ves en carteles y anuncios: «Se vende local», «Se reparan bicicletas».",
          "Si la cosa no está determinada, va sin artículo y sin «a»: «Se buscan aprendices» (cualquier aprendiz). Funciona en todos los tiempos: «El taller se fundó en 1924», «Las piezas se entregarán en marzo»."
        ],
        table: {
          caption: "El verbo mira a la cosa",
          head: ["Una cosa", "Varias cosas"],
          rows: [
            ["Se hornea la pieza dos veces.", "Se hornean las piezas dos veces."],
            ["Se necesita un ayudante.", "Se necesitan dos ayudantes."],
            ["Se vendió el último jarrón.", "Se vendieron todos los jarrones."]
          ]
        },
        mistakes: [
          {
            wrong: "Se venden azulejo pintado a mano.",
            right: "Se vende azulejo pintado a mano.",
            why: "«Azulejo» es singular: el verbo también."
          }
        ]
      },
      {
        heading: "«Se» impersonal: siempre en singular",
        body: [
          "Cuando no hay una cosa con la que concordar, el verbo va siempre en singular: «En Puebla se come muy bien», «En el taller se trabaja en silencio», «Se prohíbe tocar las piezas», «Se dice que la talavera llegó de España». Con personas concretas aparece «a» y el verbo sigue en singular: «Se busca a los dueños del perro».",
          "Hay otras formas de no decir quién: la tercera persona del plural («Dicen que va a llover», «Me cobraron de más») y «uno», obligatorio con verbos que ya llevan «se»: «Al principio uno se cansa mucho»."
        ],
        examples: [
          { es: "Aquí se cena tarde y se duerme poco.", note: "Sin cosa: singular." },
          { es: "Se ruega no tocar las piezas.", note: "«Se» + infinitivo: singular." },
          { es: "Dicen que el horno nuevo es más rápido.", note: "Tercera persona del plural: gente no identificada." },
          { es: "Con el barro uno se ensucia aunque tenga cuidado.", note: "«Uno» con un verbo pronominal." }
        ],
        mistakes: [
          {
            wrong: "Se buscan a los dueños de esta camioneta.",
            right: "Se busca a los dueños de esta camioneta.",
            why: "Con «a» + personas concretas, «se» es impersonal y el verbo va en singular."
          },
          {
            wrong: "Se prohíben sacar fotos con flash.",
            right: "Se prohíbe sacar fotos con flash.",
            why: "Lo prohibido es una acción (infinitivo): singular."
          }
        ],
        tip: "Busca la cosa: si hay un nombre sin «a» delante, el verbo concuerda con él; si no lo hay, singular."
      }
    ]
  },
  grammar: {
    intro: "Primero practicas cómo contar lo que alguien dijo, preguntó o pidió; después, las dos clases de «se».",
    exercises: [
      {
        id: "b1-16-gramatica-contar",
        type: "gap",
        title: "La maestra Rosario dijo…",
        prompt: "Ximena cuenta el lunes lo que dijo la maestra el sábado. Completa con el verbo en el tiempo adecuado.",
        items: [
          { q: "«El horno está demasiado caliente.» → Dijo que el horno ___ demasiado caliente.", answers: [["estaba"]], why: "Presente → imperfecto." },
          { q: "«Terminé los platos azules.» → Dijo que ___ los platos azules.", answers: [["había terminado"]], why: "Indefinido → pluscuamperfecto." },
          { q: "«Abriremos la tienda a las diez.» → Dijo que ___ la tienda a las diez.", answers: [["abrirían"]], why: "Futuro → condicional." },
          { q: "«Voy a contratar a otra pintora.» → Dijo que ___ a contratar a otra pintora.", answers: [["iba"]], why: "«Voy a» → «iba a»." },
          { q: "«Mi abuelo pintaba sin plantilla.» → Dijo que su abuelo ___ sin plantilla.", answers: [["pintaba"]], why: "El imperfecto no cambia." }
        ]
      },
      {
        id: "b1-16-gramatica-preguntas-peticiones",
        type: "choice",
        title: "Preguntas y peticiones contadas",
        prompt: "Elige la forma correcta para contar lo que dijo la clienta.",
        items: [
          { q: "«¿Me pueden mandar las tazas a Monterrey?» → Me preguntó ___.", options: ["que si podemos mandar las tazas", "si podíamos mandarle las tazas a Monterrey", "si cuándo podíamos mandarle las tazas"], answer: 1, why: "Pregunta de sí o no: «si» + imperfecto, y «me» → «le»." },
          { q: "«¿De qué color es el esmalte?» → Quería saber ___ era el esmalte.", options: ["de qué color", "si de qué color", "que color"], answer: 0, why: "Se mantiene la palabra interrogativa con tilde." },
          { q: "«Llámame el miércoles.» → La clienta me pidió que la ___ el miércoles.", options: ["llamo", "llamaré", "llamara"], answer: 2, why: "Petición en pasado: «que» + «llamara»." },
          { q: "La clienta habló ayer: «Hoy no puedo pasar». Hoy lo cuentas: Dijo que ___ no podía pasar.", options: ["hoy", "ese día", "mañana"], answer: 1, why: "Su «hoy» ya es otro día: «ese día»." }
        ]
      },
      {
        id: "b1-16-gramatica-se-concordancia",
        type: "gap",
        title: "Carteles del taller",
        prompt: "Completa con «se» y el verbo en singular o en plural.",
        items: [
          { q: "___ ___ (aceptar) pedidos para bodas y quince años.", answers: [["Se", "se"], ["aceptan"]], why: "La cosa es «pedidos»: plural." },
          { q: "Aquí ___ ___ (trabajar) de lunes a sábado.", answers: [["se"], ["trabaja"]], why: "No hay cosa: impersonal en singular." },
          { q: "___ ___ (necesitar) pintora con experiencia en azul cobalto.", answers: [["Se", "se"], ["necesita"]], why: "Concuerda con «pintora»." },
          { q: "___ ___ (rogar) no tocar las piezas que están secando.", answers: [["Se", "se"], ["ruega"]], why: "Infinitivo: singular." },
          { q: "En el siglo XVI ___ ___ (fundar) los primeros talleres de la ciudad.", answers: [["se"], ["fundaron"]], why: "Concuerda con «los primeros talleres», en pasado." }
        ]
      },
      {
        id: "b1-16-gramatica-errores",
        type: "error",
        title: "Corrige el error",
        prompt: "Cada frase tiene un error de las dos clases de la semana. Escríbela bien.",
        items: [
          { sentence: "Se venden jarra de barro negro.", answers: ["Se vende jarra de barro negro."], why: "«Jarra» es singular: «se vende»." },
          { sentence: "El repartidor me preguntó si dónde estaba el taller.", answers: ["El repartidor me preguntó dónde estaba el taller."], why: "Con «dónde» no se usa «si»." },
          { sentence: "Se informan a los clientes que la tienda cierra el lunes.", answers: ["Se informa a los clientes que la tienda cierra el lunes.", "Se informa a los clientes de que la tienda cierra el lunes."], why: "Con «a» + personas el verbo va en singular." },
          { sentence: "El mes pasado el proveedor dijo que traerá el barro en una semana, pero nunca lo trajo.", answers: ["El mes pasado el proveedor dijo que traería el barro en una semana, pero nunca lo trajo."], why: "Lo prometido ya no es válido: el futuro de la cita pasa a condicional." }
        ]
      }
    ]
  },
  vocabulary: {
    intro: "Palabras para hablar de un taller artesanal y de un encargo. Algunas son muy de México: te lo indicamos.",
    groups: [
      {
        title: "En el taller",
        items: [
          { es: "el barro" },
          { es: "el torno" },
          { es: "el horno" },
          { es: "el esmalte" },
          { es: "la plantilla", note: "Papel con el dibujo que se copia sobre la pieza." },
          { es: "la pieza" },
          { es: "el azulejo" }
        ]
      },
      {
        title: "El encargo",
        items: [
          { es: "hacer un pedido" },
          { es: "el anticipo", note: "Parte del precio que se paga antes." },
          { es: "la muestra" },
          { es: "el plazo de entrega" },
          { es: "el envío" },
          { es: "la vajilla" }
        ]
      },
      {
        title: "Expresiones de México",
        items: [
          { es: "ahorita", note: "En México puede ser «ahora mismo» o «dentro de un rato»." },
          { es: "¿Mande?", note: "Forma cortés de pedir que te repitan algo." },
          { es: "¡Qué padre!", note: "Expresión coloquial: «¡qué bonito!», «¡qué bien!»." },
          { es: "la chamba", note: "Coloquial: el trabajo." }
        ]
      }
    ],
    exercises: [
      {
        id: "b1-16-vocabulario-definiciones",
        type: "match",
        title: "Cada palabra con su explicación",
        prompt: "Une cada palabra con lo que significa.",
        pairs: [
          { left: "el anticipo", right: "el dinero que pagas antes de recibir el pedido" },
          { left: "el torno", right: "la rueda que gira para dar forma al barro" },
          { left: "la muestra", right: "una pieza de prueba para ver colores y diseño" },
          { left: "el esmalte", right: "la capa brillante que cubre la pieza" },
          { left: "el plazo de entrega", right: "el tiempo que falta para recibir lo que encargaste" }
        ],
        why: "Fíjate en si la palabra nombra dinero, una máquina, un objeto, un material o un tiempo."
      },
      {
        id: "b1-16-vocabulario-huecos",
        type: "gap",
        title: "La libreta de Ximena",
        prompt: "Completa las notas con una palabra del banco.",
        bank: ["horno", "vajilla", "envío", "plantilla", "chamba"],
        items: [
          { q: "La señora Treviño quiere una ___ completa para doce personas.", answers: [["vajilla"]], why: "Platos, tazas y fuentes de un mismo juego." },
          { q: "Las piezas se meten en el ___ por segunda vez el jueves.", answers: [["horno"]], why: "Allí se cuecen." },
          { q: "El dibujo se copia con una ___ de papel perforado.", answers: [["plantilla"]], why: "Sirve para repetir el mismo diseño." },
          { q: "El ___ a Monterrey se paga aparte.", answers: [["envío"]], why: "Mandar el pedido a otra ciudad." },
          { q: "Hay mucha ___ esta semana: tres pedidos grandes.", answers: [["chamba"]], why: "Coloquial: mucho trabajo." }
        ]
      }
    ]
  },
  pronunciation: {
    focus: "Pregunta directa y pregunta contada: la entonación cambia",
    explanation: [
      "Una pregunta directa de sí o no termina en un tono que sube: «¿Hacen envíos?». Cuando la cuentas («Preguntó si hacían envíos»), ya no es una pregunta, sino una información: la frase termina con un tono que baja, como cualquier afirmación.",
      "Con palabra interrogativa pasa algo parecido: en «¿Cuándo abren?» la fuerza está en «cuándo»; en «Quería saber cuándo abrían», «cuándo» conserva su acento, pero la frase termina bajando. Si al contar subes el tono al final, suena como si preguntaras tú."
    ],
    examples: [
      { es: "¿Tienen tazas azules? ↗ / Preguntó si tenían tazas azules. ↘", note: "Pregunta que sube / información que baja." },
      { es: "¿Dónde pagan? / Me preguntó dónde pagaban.", note: "«Dónde» lleva acento en las dos." }
    ],
    perceive: {
      id: "b1-16-pronunciacion-entonacion",
      type: "listen",
      title: "¿Pregunta o información?",
      prompt: "Escucha cada frase y decide si la persona pregunta o cuenta una pregunta.",
      items: [
        { q: "Primera frase: ¿pregunta o cuenta?", options: ["Pregunta ahora.", "Cuenta lo que otra persona preguntó."], answer: 0, why: "El tono sube al final: es una pregunta directa.", audio: "¿Hacen envíos a Guadalajara?", voice: "es-MX-f" },
        { q: "Segunda frase: ¿pregunta o cuenta?", options: ["Pregunta ahora.", "Cuenta lo que otra persona preguntó."], answer: 1, why: "«Preguntó si…» y el tono baja: información.", audio: "Me preguntó si hacíamos envíos a Guadalajara.", voice: "es-MX-m" },
        { q: "Tercera frase: ¿qué palabra lleva la fuerza?", options: ["saber", "cuánto", "costaba"], answer: 1, why: "La palabra interrogativa conserva su acento aunque la pregunta esté contada.", audio: "Quería saber cuánto costaba el plato grande.", voice: "es-MX-f" },
        { q: "Cuarta frase: ¿pregunta o cuenta?", options: ["Cuenta lo que otra persona preguntó.", "Pregunta ahora."], answer: 1, why: "Tono ascendente final y sin verbo introductor.", audio: "¿El anticipo se paga en efectivo?", voice: "es-MX-m" }
      ]
    },
    produce: [
      { text: "¿Venden azulejos sueltos? Me preguntó si vendíamos azulejos sueltos.", tip: "Sube al final de la pregunta; baja al final de la frase contada.", voice: "es-MX-f" },
      { text: "Quería saber cuándo estaría listo su pedido.", tip: "Marca «cuándo» y termina bajando.", voice: "es-MX-m" },
      { text: "Me pidió que la llamara antes de las cinco.", tip: "Liga «que la» y «llamara» sin pausa.", voice: "es-MX-f" }
    ],
    spelling: "En la pregunta contada desaparecen los signos «¿?», pero la palabra interrogativa mantiene su tilde: «preguntó qué quería», «no sé dónde vive». «Si» en «preguntó si» no lleva tilde."
  },
  listening: {
    title: "El encargo de la señora Treviño",
    context: "Es lunes por la mañana en el taller. Andrés, aprendiz como Ximena, no vino el sábado. Ximena le cuenta qué pasó con una clienta de Monterrey y cómo van a hacer su pedido.",
    speakers: [
      { id: "xim", name: "Ximena", voice: "es-MX-f", role: "aprendiz del taller" },
      { id: "and", name: "Andrés", voice: "es-MX-m", role: "aprendiz del taller" }
    ],
    script: [
      { speaker: "and", text: "¿Qué tal el sábado? Vi que hay una ficha nueva en la mesa de doña Rosario." },
      { speaker: "xim", text: "Sí, vino una señora de Monterrey, la señora Treviño. Dijo que estaba remodelando su cocina y que quería cuarenta azulejos con pájaros azules. Nos contó que había visto nuestras piezas en casa de una prima." },
      { speaker: "and", text: "¿Y para cuándo los quiere?" },
      { speaker: "xim", text: "Preguntó si podían estar listos en tres semanas. Doña Rosario le explicó que eso era imposible, porque aquí se trabaja despacio: primero se deja secar el barro, después se pintan los azulejos a mano y se hornean dos veces. Le dijo que tardaríamos un mes y medio." },
      { speaker: "and", text: "¿Y aceptó?" },
      { speaker: "xim", text: "Al principio no le gustó mucho, pero luego dijo que prefería esperar. También quería saber si el esmalte resistía el calor de la estufa. Doña Rosario le dijo que sí, que se usa el mismo esmalte desde hace cien años." },
      { speaker: "and", text: "¿Y qué falta ahora?" },
      { speaker: "xim", text: "La señora pagó el anticipo y me pidió que la llamara el miércoles para elegir el tono de azul. Y doña Rosario me dijo que tú hicieras las muestras, porque eres el que mejor pinta los pájaros." },
      { speaker: "and", text: "¡Qué padre! Bueno, ahorita empiezo. ¿Dejó alguna foto?" },
      { speaker: "xim", text: "Sí, nos mandó dos por correo. Dijo que mañana mandaría las medidas exactas de la pared." }
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha una vez sin leer. ¿De qué hablan?",
        exercise: {
          id: "b1-16-escucha-global",
          type: "choice",
          prompt: "Elige la mejor respuesta.",
          items: [
            { q: "¿Qué cuenta Ximena a Andrés?", options: ["Una queja de una clienta por un pedido roto.", "La visita de una clienta que hizo un encargo.", "Una clase que dio doña Rosario."], answer: 1, why: "Cuenta el encargo de la señora Treviño." },
            { q: "¿Cómo termina la conversación para Andrés?", options: ["Con una tarea nueva: pintar las muestras.", "Con un día libre.", "Con una discusión con la clienta."], answer: 0, why: "Doña Rosario quiere que él haga las muestras." }
          ]
        }
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota los detalles.",
        exercise: {
          id: "b1-16-escucha-detalle",
          type: "choice",
          prompt: "Responde según la conversación.",
          items: [
            { q: "¿Dónde había visto la clienta las piezas del taller?", options: ["En una feria de Monterrey.", "En Internet.", "En casa de una prima."], answer: 2, why: "«Nos contó que había visto nuestras piezas en casa de una prima.»" },
            { q: "¿Cuánto tiempo tardará el pedido?", options: ["Tres semanas.", "Un mes y medio.", "Cien días."], answer: 1, why: "«Le dijo que tardaríamos un mes y medio.»" },
            { q: "¿Para qué hay que llamar a la clienta el miércoles?", options: ["Para elegir el tono de azul.", "Para cobrar el anticipo.", "Para darle la dirección del taller."], answer: 0, why: "«Me pidió que la llamara el miércoles para elegir el tono de azul.»" }
          ]
        }
      },
      {
        stage: "notice",
        prompt: "Fíjate en la gramática. Completa lo que dice Ximena exactamente.",
        exercise: {
          id: "b1-16-escucha-formas",
          type: "gap",
          prompt: "Escribe la forma que usa.",
          items: [
            { q: "Nos contó que ___ ___ nuestras piezas en casa de una prima.", answers: [["había"], ["visto"]], why: "Pluscuamperfecto: algo anterior a lo que contó." },
            { q: "Primero se deja secar el barro, después ___ ___ los azulejos a mano.", answers: [["se"], ["pintan"]], why: "«Se» que concuerda con «los azulejos»." },
            { q: "Me pidió que la ___ el miércoles.", answers: [["llamara"]], why: "Petición en pasado." },
            { q: "Dijo que mañana ___ las medidas exactas de la pared.", answers: [["mandaría"]], why: "Futuro de la cita → condicional." }
          ]
        }
      }
    ]
  },
  reading: {
    title: "Así se hace una pieza en Casa Pájaro Azul",
    genre: "Página web de un taller artesanal",
    frame: "El taller donde trabaja Ximena explica en su página cómo se hacen sus piezas y recoge lo que le cuentan algunos visitantes.",
    text: [
      "En Casa Pájaro Azul se hace talavera como hace cien años. El barro se trae de dos minas cercanas a Puebla y se mezcla a mano. Después se deja reposar unos tres meses, porque así se vuelve más fácil de trabajar. Las piezas se forman en el torno o en moldes y se secan a la sombra durante varias semanas.",
      "Luego se hornean por primera vez y se cubren con un esmalte blanco. Sobre ese fondo se dibuja el diseño con una plantilla de papel y se pinta a mano con pinceles de pelo de burro. Solo se usan seis colores tradicionales. Al final, cada pieza se hornea otra vez y se revisa una por una: si se encuentra un defecto, no se vende como pieza de primera.",
      "En el taller no se trabaja con prisa, y eso se nota. Muchos visitantes nos lo dicen. Una maestra de Oaxaca nos contó que había comprado aquí su primera taza hacía treinta años y que todavía la usaba cada mañana. Un estudiante japonés nos preguntó si podía quedarse una semana a aprender, y le dijimos que volviera en verano. La semana pasada, una niña quería saber por qué los platos eran tan caros. Le explicamos cuántas manos tocan cada pieza, y su papá nos dijo que nunca más regatearía en un mercado.",
      "Se aceptan visitas de martes a sábado. Se ruega llegar puntual y no tocar las piezas que están secando."
    ],
    glossary: [{ es: "la mina" }, { es: "reposar" }, { es: "el defecto" }, { es: "regatear" }],
    tasks: [
      {
        id: "b1-16-lectura-comprension",
        type: "choice",
        title: "Comprensión",
        prompt: "Responde según la página del taller.",
        items: [
          { q: "¿Por qué se deja reposar el barro tres meses?", options: ["Porque así es más fácil de trabajar.", "Porque el horno no está listo.", "Porque se trae de muy lejos."], answer: 0, why: "«Así se vuelve más fácil de trabajar.»" },
          { q: "¿Qué pasa si una pieza tiene un defecto?", options: ["Se pinta de nuevo.", "Se regala a los visitantes.", "No se vende como pieza de primera."], answer: 2, why: "«Si se encuentra un defecto, no se vende como pieza de primera.»" },
          { q: "¿Qué le respondieron al estudiante japonés?", options: ["Que no aceptaban estudiantes.", "Que volviera en verano.", "Que se quedara esa misma semana."], answer: 1, why: "«Le dijimos que volviera en verano.»" }
        ]
      },
      {
        id: "b1-16-lectura-proceso",
        type: "order",
        title: "El proceso en orden",
        prompt: "Ordena las palabras para reconstruir pasos del proceso.",
        items: [
          { words: ["El", "barro", "se", "mezcla", "a", "mano."] },
          { words: ["Las", "piezas", "se", "secan", "a", "la", "sombra."] },
          { words: ["El", "diseño", "se", "pinta", "con", "pinceles", "finos."] }
        ]
      }
    ],
    noticing: {
      prompt: "Fíjate en cómo el texto explica el proceso sin decir quién lo hace y cómo cuenta lo que dijeron los visitantes.",
      items: [
        { quote: "Las piezas se forman en el torno o en moldes", note: "«Se» + verbo en plural: concuerda con «las piezas»." },
        { quote: "En el taller no se trabaja con prisa", note: "«Se» impersonal: no hay cosa, el verbo va en singular." },
        { quote: "nos contó que había comprado aquí su primera taza hacía treinta años", note: "Lo anterior a lo que contó va en pluscuamperfecto; «hace» pasa a «hacía»." },
        { quote: "nos preguntó si podía quedarse una semana", note: "Pregunta de sí o no contada con «si» + imperfecto." }
      ]
    }
  },
  practice: {
    intro: "Combinas las dos clases y recuperas los conectores de las semanas 14 y 15.",
    exercises: [
      {
        id: "b1-16-practica-orden",
        type: "order",
        title: "Recados del taller",
        prompt: "Ordena las palabras para formar frases completas.",
        items: [
          { words: ["La", "clienta", "preguntó", "si", "aceptábamos", "tarjeta."] },
          { words: ["Doña", "Rosario", "me", "pidió", "que", "viniera", "a", "las", "ocho."] },
          { words: ["En", "este", "barrio", "se", "vive", "muy", "tranquilo."] },
          { words: ["Ayer", "se", "vendieron", "tres", "fuentes", "grandes."] }
        ]
      },
      {
        id: "b1-16-practica-retrieval",
        type: "context",
        title: "Recuperación: semanas 14 y 15",
        prompt: "Recuperación de los conectores de semanas anteriores, en el taller de Puebla. Elige la mejor opción.",
        items: [
          { context: "Semana 14, contraste. El pedido era grande; el taller lo terminó a tiempo.", q: "¿Cómo lo dice Ximena?", options: ["Aunque el pedido era grande, lo terminamos a tiempo.", "Como el pedido era grande, lo terminamos a tiempo.", "El pedido era grande, así que lo terminamos a tiempo."], answer: 0, why: "Obstáculo que no impide la acción: «aunque»." },
          { context: "Semana 14, causa. Andrés explica por qué no vino el sábado; la causa va primero.", q: "Elige la frase natural.", options: ["Porque estaba enfermo, no vine el sábado.", "Ya que estaba enfermo no vine, sin embargo.", "Como estaba enfermo, no vine el sábado."], answer: 2, why: "Causa al principio de la frase: «como»." },
          { context: "Semana 15, consecuencia. El horno se estropeó el jueves.", q: "¿Qué frase cuenta la consecuencia?", options: ["El horno se estropeó el jueves; además, se retrasó la entrega.", "El horno se estropeó el jueves, de modo que se retrasó la entrega.", "El horno se estropeó el jueves, en cambio se retrasó la entrega."], answer: 1, why: "«De modo que» introduce la consecuencia." },
          { context: "Semana 15, argumentos. Doña Rosario defiende sus precios y añade un argumento más fuerte.", q: "Completa: «Nuestras piezas duran décadas; ___ hay familias que las heredan.»", options: ["en cambio", "por eso", "incluso"], answer: 2, why: "«Incluso» suma un argumento más fuerte." }
        ]
      },
      {
        id: "b1-16-practica-contar",
        type: "transform",
        title: "Del recado a la nota",
        prompt: "Escribe lo que dijo cada persona, contado en pasado.",
        items: [
          { source: "El repartidor: «Llego a las cuatro.»", instruction: "Empieza con «El repartidor dijo que…».", answers: ["El repartidor dijo que llegaba a las cuatro.", "El repartidor dijo que llegaría a las cuatro."], why: "Presente → imperfecto (o condicional, si habla del futuro)." },
          { source: "Un turista: «¿Abren el domingo?»", instruction: "Empieza con «Un turista preguntó…».", answers: ["Un turista preguntó si abríamos el domingo.", "Un turista preguntó si abrían el domingo."], why: "Pregunta de sí o no: «si» + imperfecto." },
          { source: "La clienta: «Ya transferí el dinero.»", instruction: "Empieza con «La clienta dijo que…».", answers: ["La clienta dijo que ya había transferido el dinero."], why: "Indefinido → pluscuamperfecto." },
          { source: "Doña Rosario a Ximena: «Ven el sábado.»", instruction: "Empieza con «Doña Rosario me pidió que…».", answers: ["Doña Rosario me pidió que viniera el sábado."], why: "Petición: «que» + «viniera»." }
        ]
      },
      {
        id: "b1-16-practica-escritura-guiada",
        type: "open",
        title: "Mensajes breves",
        prompt: "Escribe cada mensaje en dos o tres frases.",
        items: [
          {
            prompt: "Tu jefa llamó cuando tu compañero no estaba. Déjale una nota con lo que dijo y lo que pidió.",
            model: "Llamó Marta a las once. Dijo que la reunión del viernes se pasaba al lunes y que traería los presupuestos. Te pidió que la llamaras antes de las seis.",
            checklist: ["Usas «dijo que» con el verbo en un tiempo pasado.", "Cuentas una petición con «pidió que» + «llamaras», «vinieras» o «hicieras»."]
          },
          {
            prompt: "Explica a un turista cómo se prepara un plato típico de tu país, sin decir quién lo prepara.",
            model: "Primero se cortan las verduras en trozos pequeños y se fríen con un poco de aceite. Después se añade el arroz y se cocina a fuego lento. Se sirve caliente y se come con pan.",
            checklist: ["Usas «se» + verbo concordando con la cosa.", "Hay al menos un verbo en plural y otro en singular."]
          },
          {
            prompt: "Cuenta a un amigo qué te preguntó alguien en una entrevista o en una reunión reciente.",
            model: "En la entrevista me preguntaron si había trabajado con clientes extranjeros y cuántos idiomas hablaba. También querían saber cuándo podría empezar.",
            checklist: ["Usas «preguntó si» y una pregunta con palabra interrogativa.", "No usas signos «¿?» en la pregunta contada."]
          }
        ]
      }
    ]
  },
  writing: {
    task: "Ayer estuviste en una reunión (de trabajo, de vecinos o de padres del colegio) y un compañero no pudo ir. Escríbele un correo para contarle qué se dijo, qué preguntó la gente, qué te pidieron y cómo se va a organizar lo que se decidió.",
    context: "Tu compañero necesita saber todo para la próxima reunión. Él no conoce a algunas personas que hablaron.",
    steps: [
      "Anota tres cosas que dijo alguien, una pregunta y una petición.",
      "Primer párrafo: qué dijeron y preguntaron las personas, con el verbo en el tiempo correcto.",
      "Segundo párrafo: qué te pidieron y cómo se va a hacer lo decidido, con «se».",
      "Revisa los tiempos de cada cita, los cambios de «mañana», «aquí» y «mi», y corrige los verbos con «se»: ¿hay una cosa con la que concordar?"
    ],
    useLanguage: [
      "dijo que / contó que / explicó que + tiempo pasado",
      "preguntó si… / quería saber cuándo, dónde, cuánto…",
      "me pidió que + viniera / llamara / hiciera",
      "se + verbo en singular o plural",
      "dicen que… / uno se…"
    ],
    model: [
      "Hola, Joaquín: te cuento cómo fue ayer la reunión de vecinos. La administradora dijo que el elevador estaba roto otra vez y que la empresa de mantenimiento no lo arreglaría hasta finales de mes. Don Felipe, el señor del tercero, contó que ya había llamado tres veces y que nadie le había contestado. Una vecina nueva preguntó si podíamos cambiar de empresa, y otra quería saber cuánto nos costaría.",
      "Al final se votó y se decidió pedir tres presupuestos. Se van a revisar en la próxima reunión, el día 20, y se elegirá el más barato. La administradora me pidió que hiciera una lista de empresas de la zona, y a ti te pidió que vinieras el día 20 con las facturas del año pasado. Dicen que la nueva empresa podría empezar en abril. ¡Nos vemos pronto!"
    ],
    checklist: [
      "Cuento al menos tres cosas que dijeron otras personas, con el verbo en el tiempo adecuado.",
      "Incluyo una pregunta contada con «si» y otra con palabra interrogativa.",
      "Cuento una petición con «pidió que» + «viniera», «llamara» o «hiciera».",
      "Uso «se» al menos tres veces, con el verbo en singular o plural según la cosa.",
      "El correo tiene dos párrafos y un saludo y una despedida."
    ],
    words: [130, 180]
  },
  speaking: {
    intro: "Graba tus respuestas y escúchate: comprueba que tu tono baja al contar una pregunta y que los verbos retroceden cuando hace falta.",
    tasks: [
      {
        title: "Una conversación que te importó",
        prompt: "Piensa en una conversación reciente importante para ti (con un médico, un jefe, un casero, un amigo). Habla durante dos minutos: cuenta qué te dijo la otra persona, qué te preguntó, qué te pidió y cómo se hace ahora el trámite o la tarea de la que hablaron.",
        prep: [
          "Tres cosas que dijo, con el verbo en pasado.",
          "Una pregunta contada con «si» y otra con «cuándo», «dónde» o «cuánto».",
          "Dos frases con «se» para explicar el trámite."
        ],
        seconds: 120,
        model: "La semana pasada fui al banco para abrir una cuenta. La empleada me dijo que necesitaba un comprobante de domicilio y me preguntó si tenía una factura reciente. Le dije que no, así que me pidió que viniera otro día. Allí se pide cita por Internet y se espera muchísimo…",
        selfCheck: [
          "¿He hablado al menos dos minutos?",
          "¿He contado preguntas sin entonación de pregunta?",
          "¿He usado «se» con el verbo en el número correcto?"
        ]
      },
      {
        title: "Tu compañero quiere saberlo todo",
        prompt: "Tu compañero no fue a la reunión del ejercicio de escritura y tiene dudas. Responde a sus preguntas («¿Y qué dijo la administradora?», «¿Quién preguntó eso?»), aclara lo que no entendió y pídele algo para la próxima reunión. Practica con alguien que haga de interlocutor o graba las dos voces.",
        prep: [
          "Prepara dos respuestas con «dijo que» y una con «preguntó si».",
          "Usa «o sea» o «lo que quiero decir es que» para aclarar."
        ],
        seconds: 90,
        model: "—¿Y qué dijo la administradora? —Dijo que el elevador estaba roto otra vez. —¿Y quién preguntó lo del cambio de empresa? —Una vecina nueva. O sea, no fue don Felipe. Ah, y te pidió que vinieras el día 20…",
        selfCheck: [
          "¿He respondido y aclarado sin repetir la cita palabra por palabra?",
          "¿He pedido algo con «me pidió que» o «te pidió que»?"
        ]
      }
    ]
  },
  useInClass: {
    intro: "Lleva tu correo y estas tarjetas a la próxima clase con tu profesor.",
    cards: [
      { move: "Transmite", task: "Cuéntale a tu profesor algo que te dijo otra persona esta semana, con dos citas, una pregunta y una petición.", phrases: ["Me dijo que…", "Me preguntó si…"] },
      { move: "Explica", task: "Explica a tu profesor cómo se hace un trámite o una receta de tu país, solo con «se».", phrases: ["Primero se…", "Después se…"] },
      { move: "Compara", task: "Compara con tu profesor cómo se vive en tu ciudad y en la suya: horarios, comidas, transporte.", phrases: ["En mi ciudad se cena…", "Allí se trabaja…"] },
      { move: "Comprueba", task: "Pide a tu profesor que te diga tres frases en presente y cuéntaselas a otra persona como si fuera la semana siguiente.", phrases: ["Dijo que…", "Al día siguiente…"] }
    ],
    bring: "Tu correo revisado y la grabación de la conversación."
  },
  quiz: {
    items: [
      { type: "choice", q: "La clienta dijo: «Pagaré el resto en mayo». ¿Cómo lo cuentas meses después?", options: ["Dijo que pagará el resto en mayo.", "Dijo que pagaba el resto en mayo pasado.", "Dijo que pagaría el resto en mayo."], answer: 2, why: "Futuro → condicional." },
      { type: "choice", q: "¿Qué cartel del taller es correcto?", options: ["Se reparan platos y jarras.", "Se repara platos y jarras.", "Se reparan a platos y jarras."], answer: 0, why: "Concuerda con «platos y jarras»: plural, sin «a»." },
      { type: "listen", q: "Escucha. ¿Qué hace la persona?", options: ["Hace una pregunta al cliente.", "Cuenta una pregunta del cliente.", "Pide algo al cliente."], answer: 1, why: "«Me preguntó si…»: pregunta contada.", audio: "El cliente me preguntó si el envío se pagaba aparte.", voice: "es-MX-f" },
      { type: "gap", q: "«¿Cuánto cuesta la fuente?» → El turista quería saber ___ ___ la fuente.", answers: [["cuánto"], ["costaba"]], why: "Palabra interrogativa con tilde + imperfecto." },
      { type: "gap", q: "En los pueblos de la sierra ___ ___ (comer) temprano.", answers: [["se"], ["come"]], why: "Impersonal: singular." },
      { type: "gap", q: "«Haz las muestras.» → La maestra me dijo que ___ las muestras.", answers: [["hiciera"]], why: "Petición contada: «hiciera»." },
      { type: "order", words: ["El", "taller", "se", "fundó", "a", "principios", "del", "siglo", "pasado."], why: "«Se» con un verbo en pasado." },
      { type: "error", sentence: "Se alquilan departamento amueblado en el centro.", answers: ["Se alquila departamento amueblado en el centro."], why: "Una sola cosa: singular." },
      { type: "error", sentence: "Mi hermana me preguntó si vendrás a la fiesta del sábado pasado.", answers: ["Mi hermana me preguntó si vendría a la fiesta del sábado pasado.", "Mi hermana me preguntó si iría a la fiesta del sábado pasado."], why: "La fiesta ya pasó: el futuro de la pregunta pasa a condicional." },
      {
        type: "open",
        prompt: "Reformulación: cuenta esta nota a otra persona usando discurso referido y «se». Nota de la dueña: «Mañana no abro. ¿Pueden avisar a los clientes? Las piezas nuevas las pinto el jueves.»",
        model: "La dueña dijo que al día siguiente no abría y nos preguntó si podíamos avisar a los clientes. También dijo que las piezas nuevas se pintarían el jueves.",
        checklist: [
          "El verbo de cada cita retrocede o se justifica que no cambie.",
          "La pregunta va con «si» y sin signos de interrogación.",
          "Usas al menos un «se» que concuerda con la cosa.",
          "Cambias «mañana» por «al día siguiente» si ya no es ese día."
        ]
      }
    ]
  },
  complete: {
    canNow: [
      "Contar lo que alguien dijo con el verbo un paso atrás: presente → imperfecto, pasado → pluscuamperfecto, futuro → condicional.",
      "Cambiar personas y referencias de tiempo y lugar: «su», «allí», «ese día», «al día siguiente».",
      "Contar preguntas con «si» o con palabra interrogativa, y peticiones con «me pidió que» + «viniera», «llamara», «hiciera».",
      "Describir procesos con «se» que concuerda con la cosa y costumbres con «se» impersonal en singular."
    ],
    review: [
      "El pluscuamperfecto de la semana 1: había visto, había terminado.",
      "El condicional de la semana 8: pasaría, tendría, haría.",
      "Los conectores de causa y consecuencia de las semanas 14 y 15."
    ]
  },
  related: [
    { path: "/gramatica/discurso-referido-introductorio-dijo-que-pidio", label: "Clase: Discurso referido introductorio: dijo que / pidió que" },
    { path: "/gramatica/se-pasivo-y-se-impersonal-introductorio", label: "Clase: Se pasivo y se impersonal introductorio" }
  ]
};
