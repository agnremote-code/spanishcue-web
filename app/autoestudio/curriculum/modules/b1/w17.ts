import type { Module } from "../../types";

/**
 * B1 · semana 17 · Autoestudio espejo de G120 (estar + participio para estados
 * resultantes) y G121 (diferencia entre ser + participio y estar + participio).
 * Repaso autónomo en una residencia de estudiantes que ocupa un edificio histórico
 * de Salamanca.
 */
export const b1w17: Module = {
  id: "b1-17",
  level: "b1",
  week: 17,
  kind: "core",
  title: "Una residencia en Salamanca: cómo está todo y qué pasó con el edificio",
  subtitle: "Repaso de cómo describir el estado que deja una acción («la ventana está rota») y de cómo distinguirlo de la acción contada con «ser» («el edificio fue restaurado en 2019»).",
  stop: { place: "Salamanca", country: "España" },
  minutes: 95,
  newObjectives: [
    "b1.gram.g120",
    "b1.gram.g121",
    "b1.voc.w17-alojamiento-edificio",
    "b1.pron.w17-participio-ado",
    "b1.lis.w17-entrada-residencia",
    "b1.read.w17-historia-edificio",
    "b1.wri.w17-correo-estado-habitacion",
    "b1.spk.w17-describir-estado",
    "b1.fun.w17-revisar-estado",
    "b1.disc.w17-antes-y-ahora",
  ],
  reviewObjectives: ["b1.gram.g118","b1.gram.g119","b1.voc.w16-taller-artesania","b1.pron.w16-pregunta-referida","b1.lis.w16-encargo-taller","b1.read.w16-como-se-hace","b1.wri.w16-correo-reunion","b1.spk.w16-contar-conversacion","b1.fun.w16-transmitir-mensajes","b1.disc.w16-voces-y-procesos"],
  prerequisites: ["b1-16"],
  goal: {
    canDo: "Al final de esta semana puedes describir cómo está un lugar después de lo que pasó («la cama ya está hecha», «la persiana se quedó atascada»), contar lo que llevas hecho («tengo dos cajas deshechas») y entender textos que dicen cuándo y por quién se hizo algo («fue construido en 1611»).",
    steps: [
      "Repasa «estar» + participio para el estado que deja una acción, con su concordancia y los participios irregulares.",
      "Repasa cómo se distingue la acción con «ser» + participio del estado con «estar» + participio, y cómo se dice lo mismo en la lengua hablada.",
      "Escucha la entrada de una estudiante colombiana en su residencia de Salamanca.",
      "Lee la historia del edificio de la residencia, publicada en su página web.",
      "Escribe un correo sobre el estado de una habitación, revísalo y describe en voz alta cómo está un lugar que conoces."
    ]
  },
  theory: {
    intro: "Esta semana repasas dos clases que hablan del resultado de las acciones. La primera describe cómo quedan las cosas; la segunda te ayuda a separar lo que pasó (la acción) de cómo está todo ahora (el estado). Te acompaña Lucía, una estudiante de Medellín que llega a Salamanca para hacer un máster y se instala en una residencia dentro de un edificio del siglo XVII.",
    parts: [
      {
        heading: "«Estar» + participio: el estado que deja una acción",
        body: [
          "Cuando alguien hace algo, deja un resultado: limpiaron el baño → el baño está limpio; abrieron la ventana → la ventana está abierta. Con «estar» + participio describes ese resultado, no la acción. El participio funciona como un adjetivo y concuerda con lo que describe: «la puerta está cerrada», «los cajones están cerrados», «las luces están apagadas».",
          "Para un estado del pasado, usa «estaba»: «Cuando llegué, la calefacción estaba encendida». Recuerda los participios irregulares más frecuentes: abierto, roto, hecho, escrito, puesto, vuelto, muerto, dicho, cubierto. Con «limpiar», «llenar», «vaciar» y «secar» se prefiere el adjetivo: «está limpio», «está lleno», «está vacío», «está seco»."
        ],
        table: {
          caption: "Acción → estado",
          head: ["Acción", "Estado que queda"],
          rows: [
            ["Pintaron las paredes.", "Las paredes están pintadas."],
            ["Alguien rompió el espejo.", "El espejo está roto."],
            ["Ya hice la cama.", "La cama está hecha."],
            ["Pusieron cortinas nuevas.", "Las cortinas nuevas están puestas."],
            ["Vaciaron la nevera.", "La nevera está vacía."]
          ]
        },
        mistakes: [
          {
            wrong: "Las ventanas están abiertos.",
            right: "Las ventanas están abiertas.",
            why: "El participio concuerda en género y número con «las ventanas»."
          },
          {
            wrong: "El espejo está rompido.",
            right: "El espejo está roto.",
            why: "«Romper» tiene participio irregular: «roto»."
          }
        ],
        tip: "Pregúntate: ¿hablo de lo que hizo alguien o de cómo está la cosa ahora? Si es cómo está, «estar» + participio concordado."
      },
      {
        heading: "Haber, estar + gerundio, quedar, tener y llevar",
        body: [
          "No confundas tres cosas. «He pintado la puerta» cuenta la acción y el participio no cambia; «la puerta está pintada» describe el estado y concuerda; «estoy pintando la puerta» habla de la acción en proceso. Con «quedar» o «quedarse» + participio hablas del estado final, muchas veces inesperado: «La persiana se quedó atascada», «La reunión queda aplazada».",
          "Para el progreso hasta ahora, usa «tener» + participio, que concuerda con el objeto («Tengo las maletas deshechas, pero no los libros»), y «llevar» + cantidad + participio («Llevo tres cajas ordenadas»)."
        ],
        examples: [
          { es: "He colgado la ropa. / La ropa está colgada.", note: "Acción (no concuerda) / estado (concuerda)." },
          { es: "Estoy colgando la ropa.", note: "Acción en proceso: gerundio." },
          { es: "Con el viento, la ventana se quedó abierta toda la noche.", note: "Estado final no planeado." },
          { es: "Llevo la mitad de los libros colocados.", note: "Progreso: «llevar» + cantidad + participio." }
        ],
        mistakes: [
          {
            wrong: "He limpiada la cocina.",
            right: "He limpiado la cocina.",
            why: "Con «haber», el participio no concuerda nunca."
          }
        ]
      },
      {
        heading: "«Ser» + participio: la acción, con fecha o con autor",
        body: [
          "En noticias, textos de historia y carteles oficiales verás «ser» + participio. No describe un estado, sino una acción que pasó, casi siempre con una fecha o con «por» + quien la hizo: «El colegio fue fundado en 1611 por los jesuitas», «La biblioteca fue inaugurada ayer por la alcaldesa». El participio también concuerda: «Las obras fueron terminadas en marzo».",
          "En la conversación es mucho más frecuente decir lo mismo en activa o con «se»: «Los jesuitas fundaron el colegio en 1611», «El colegio se fundó en 1611». En esta etapa lo importante es que entiendas «ser» + participio cuando lo leas o lo oigas, y que sepas reformularlo."
        ],
        examples: [
          { es: "El puente fue reconstruido después de la riada.", note: "Acción en el pasado: «fue» + participio." },
          { es: "Los cuadros fueron donados por una familia de la ciudad.", note: "«Por» introduce a quien hizo la acción." },
          { es: "= Una familia de la ciudad donó los cuadros.", note: "La misma idea en activa, más oral." }
        ],
        mistakes: [
          {
            wrong: "La catedral fue construido en el siglo XVI.",
            right: "La catedral fue construida en el siglo XVI.",
            why: "También con «ser» el participio concuerda con el sujeto."
          }
        ]
      },
      {
        heading: "El mismo participio, dos significados",
        body: [
          "Compara «La sala fue cerrada en 1990» (alguien la cerró ese año: acción) y «La sala estaba cerrada cuando llegamos» (así la encontramos: estado). Con «ser» respondes a «¿qué pasó?»; con «estar», a «¿cómo está?» o «¿cómo estaba?».",
          "El tiempo verbal ayuda: «fue inaugurado ayer» (acción terminada) frente a «ya está abierto» (estado de hoy). «Estuvo» + participio presenta un estado que duró un tiempo cerrado: «El edificio estuvo abandonado treinta años»."
        ],
        table: {
          caption: "¿Qué pasó o cómo está?",
          head: ["Pregunta", "Verbo", "Ejemplo"],
          rows: [
            ["¿Qué pasó (y cuándo, por quién)?", "ser + participio", "El claustro fue restaurado en 2019."],
            ["¿Cómo está ahora?", "estar + participio", "Hoy el claustro está restaurado."],
            ["¿Cómo estaba en un momento?", "estaba + participio", "En 2010 el claustro estaba abandonado."],
            ["¿Cuánto tiempo duró ese estado?", "estuvo + participio", "Estuvo cerrado durante treinta años."]
          ]
        },
        mistakes: [
          {
            wrong: "Cuando llegué, la residencia fue cerrada.",
            right: "Cuando llegué, la residencia estaba cerrada.",
            why: "Describes cómo la encontraste (estado), no una acción."
          }
        ],
        tip: "Si puedes añadir «por alguien» o una fecha exacta, piensa en «ser»; si puedes añadir «ya» o «todavía», piensa en «estar»."
      }
    ]
  },
  grammar: {
    intro: "Primero practicas el estado con «estar» + participio; después, la diferencia con «ser» + participio.",
    exercises: [
      {
        id: "b1-17-gramatica-estado",
        type: "gap",
        title: "La habitación de Lucía",
        prompt: "Completa con «estar» y el participio (o el adjetivo) que concuerda.",
        items: [
          { q: "Alguien rompió una baldosa del baño. → La baldosa ___ ___.", answers: [["está"], ["rota"]], why: "Participio irregular, femenino singular." },
          { q: "Pusieron sábanas limpias. → Las sábanas ya ___ ___.", answers: [["están"], ["puestas"]], why: "«Poner» → «puesto»; femenino plural." },
          { q: "Ayer secaron las toallas al sol. → Las toallas ___ ___.", answers: [["están"], ["secas"]], why: "Con «secar» se prefiere el adjetivo «seco»." },
          { q: "Cuando entré, alguien había abierto los armarios. → Los armarios ___ ___.", answers: [["estaban"], ["abiertos"]], why: "Estado en el pasado: «estaban» + «abiertos»." },
          { q: "Escribieron mi nombre en la puerta. → Mi nombre ___ ___ en la puerta.", answers: [["está"], ["escrito"]], why: "«Escribir» → «escrito»." }
        ]
      },
      {
        id: "b1-17-gramatica-haber-estar",
        type: "choice",
        title: "¿Acción, proceso o estado?",
        prompt: "Elige la forma que corresponde a cada situación.",
        items: [
          { q: "Mi compañera de pasillo ___ la mesa del comedor y ahora está libre.", options: ["está recogida", "ha recogido", "ha recogida"], answer: 1, why: "Acción con «haber»: el participio no concuerda." },
          { q: "No entres: ___ el suelo y todavía resbala.", options: ["están fregando", "está fregados", "estamos fregada"], answer: 0, why: "Acción en proceso: «estar» + gerundio." },
          { q: "Con el apagón, el ascensor ___ parado entre dos pisos.", options: ["se quedó", "fue", "ha"], answer: 0, why: "Estado final inesperado: «quedarse» + participio." },
          { q: "De las diez cajas, ya ___ seis.", options: ["he deshecho", "llevo deshechas", "estoy deshecha"], answer: 1, why: "Progreso: «llevar» + cantidad + participio concordado." },
          { q: "Tengo las facturas ___ en esta carpeta.", options: ["guardado", "guardadas", "guardando"], answer: 1, why: "Con «tener», el participio concuerda con el objeto: «las facturas»." }
        ]
      },
      {
        id: "b1-17-gramatica-ser-estar",
        type: "classify",
        title: "¿Qué pasó o cómo está?",
        prompt: "Clasifica cada frase: ¿cuenta una acción (ser + participio) o describe un estado (estar + participio)?",
        categories: ["Acción que pasó", "Estado"],
        items: [
          { text: "La fachada fue limpiada por una empresa de Valladolid.", cat: 0 },
          { text: "Hoy la fachada está limpia y se ve mucho mejor.", cat: 1 },
          { text: "El edificio estuvo abandonado durante décadas.", cat: 1 },
          { text: "La residencia fue inaugurada en septiembre de 2020.", cat: 0 },
          { text: "Las habitaciones del ala norte todavía están cerradas.", cat: 1 },
          { text: "Los planos fueron dibujados por un arquitecto italiano.", cat: 0 }
        ]
      },
      {
        id: "b1-17-gramatica-errores",
        type: "error",
        title: "Corrige el error",
        prompt: "Cada frase tiene un error de las dos clases de la semana. Escríbela bien.",
        items: [
          { sentence: "Las persianas del salón están rotos.", answers: ["Las persianas del salón están rotas."], why: "Concordancia: «las persianas» → «rotas»." },
          { sentence: "La nevera está vaciada y lista para el siguiente estudiante.", answers: ["La nevera está vacía y lista para el siguiente estudiante."], why: "Con «vaciar» se usa el adjetivo «vacía»." },
          { sentence: "Cuando abrí la puerta, la luz fue encendida.", answers: ["Cuando abrí la puerta, la luz estaba encendida."], why: "Describes cómo la encontraste: estado con «estaba»." },
          { sentence: "El convento fue fundados en 1525.", answers: ["El convento fue fundado en 1525."], why: "El participio concuerda con «el convento»: singular." }
        ]
      }
    ]
  },
  vocabulary: {
    intro: "Palabras para hablar del alojamiento y de un edificio histórico. Algunas son muy de España: te lo indicamos.",
    groups: [
      {
        title: "La habitación",
        items: [
          { es: "el inventario" },
          { es: "la fianza", note: "Dinero que se deja al entrar y se recupera al salir." },
          { es: "el desperfecto", note: "Un daño pequeño." },
          { es: "la persiana" },
          { es: "el enchufe" },
          { es: "el armario empotrado" },
          { es: "el radiador" }
        ]
      },
      {
        title: "El edificio",
        items: [
          { es: "el claustro" },
          { es: "la fachada" },
          { es: "la piedra de Villamayor", note: "La piedra dorada típica de los edificios de Salamanca." },
          { es: "las obras" },
          { es: "rehabilitar" },
          { es: "la placa" }
        ]
      },
      {
        title: "Expresiones de España",
        items: [
          { es: "el colegio mayor", note: "Residencia universitaria con actividades propias." },
          { es: "estar hecho polvo", note: "Coloquial: estar muy cansado." },
          { es: "estar patas arriba", note: "Coloquial: muy desordenado." },
          { es: "el piso compartido" }
        ]
      }
    ],
    exercises: [
      {
        id: "b1-17-vocabulario-definiciones",
        type: "match",
        title: "Cada palabra con su explicación",
        prompt: "Une cada palabra con lo que significa.",
        pairs: [
          { left: "la fianza", right: "el dinero que te devuelven si todo está en orden al salir" },
          { left: "el inventario", right: "la lista de muebles y objetos que hay en la habitación" },
          { left: "el claustro", right: "el patio con galerías de un antiguo convento" },
          { left: "rehabilitar", right: "arreglar un edificio viejo para volver a usarlo" },
          { left: "el desperfecto", right: "un daño pequeño, como una mancha o un golpe" }
        ],
        why: "Fíjate en si la palabra nombra dinero, una lista, una parte del edificio, una acción o un daño."
      },
      {
        id: "b1-17-vocabulario-huecos",
        type: "gap",
        title: "El primer día",
        prompt: "Completa con una palabra o expresión del banco.",
        bank: ["polvo", "patas arriba", "enchufe", "persiana", "obras"],
        items: [
          { q: "Después de subir seis maletas estoy hecha ___.", answers: [["polvo"]], why: "Estar muy cansada." },
          { q: "Mi habitación está ___: no he colocado nada.", answers: [["patas arriba"]], why: "Muy desordenada." },
          { q: "El ___ de al lado de la cama no funciona.", answers: [["enchufe"]], why: "Donde conectas el móvil." },
          { q: "La ___ no sube: se quedó atascada.", answers: [["persiana"]], why: "Cubre la ventana desde fuera." },
          { q: "El ala norte está cerrada por ___.", answers: [["obras"]], why: "Trabajos de reparación." }
        ]
      }
    ]
  },
  pronunciation: {
    focus: "El participio en -ado: forma cuidada y forma relajada",
    explanation: [
      "En el habla espontánea de gran parte de España, la «d» entre vocales del participio en «-ado» se debilita mucho o desaparece: «estoy cansado» suena casi «estoy cansao», «he terminado» suena «he terminao». Es normal en una conversación entre amigos, pero en una situación formal o al leer en voz alta se pronuncia la «d» suave.",
      "En «-ido» la «d» se mantiene más («comido», «salido»), y en los participios femeninos («cansada», «terminada») casi nunca desaparece. Al hablar tú, pronuncia una «d» suave, con la lengua entre los dientes y sin cerrar del todo: así suenas natural en cualquier registro."
    ],
    examples: [
      { es: "Estoy cansado. / Estoy cansao.", note: "Forma cuidada / forma relajada, frecuente en España." },
      { es: "La habitación está terminada.", note: "En femenino la «d» se mantiene." }
    ],
    perceive: {
      id: "b1-17-pronunciacion-ado",
      type: "listen",
      title: "¿Forma cuidada o relajada?",
      prompt: "Escucha cada frase y decide cómo pronuncia el participio.",
      items: [
        { q: "¿Cómo pronuncia «colocado»?", options: ["Con «d» suave.", "Sin «d»: «colocao»."], answer: 1, why: "Pronunciación relajada, típica de una conversación informal en España.", audio: "Ya lo tengo todo colocao, mamá.", voice: "es-ES-f" },
        { q: "¿Y aquí, en un aviso formal?", options: ["Sin «d».", "Con «d» suave."], answer: 1, why: "En un registro formal se pronuncia la «d».", audio: "El comedor permanecerá cerrado hasta las ocho.", voice: "es-ES-m" },
        { q: "¿Qué participio oyes?", options: ["acabado", "acabada", "acabados"], answer: 2, why: "Plural: «-ados».", audio: "Los trabajos del claustro ya están acabados.", voice: "es-ES-m" },
        { q: "¿Qué palabra se pronuncia de forma relajada?", options: ["cansada", "molida", "estado"], answer: 2, why: "«Estao»: la «d» de «-ado» se debilita; en «-ida» y «-ido» se mantiene más.", audio: "Estoy cansada y molida, pero ha estao muy bien.", voice: "es-ES-f" }
      ]
    },
    produce: [
      { text: "La cama está hecha y las cortinas están puestas.", tip: "Pronuncia claro el plural «-as» de «puestas».", voice: "es-ES-f" },
      { text: "Estoy cansado, pero ya lo he colocado todo.", tip: "Di una «d» suave en «cansado» y «colocado».", voice: "es-ES-m" },
      { text: "El edificio fue restaurado y hoy está rehabilitado.", tip: "Cuatro participios en «-ado»: no los cortes.", voice: "es-CO-f" }
    ],
    spelling: "Escribe siempre «-ado», aunque oigas «-ao»: «cansado», «terminado». Las formas «cansao» o «terminao» solo aparecen en textos que imitan el habla."
  },
  listening: {
    title: "Llegada a la residencia",
    context: "Es primeros de septiembre. Lucía llega a una residencia de estudiantes en el centro de Salamanca. Pilar, la gerente, le enseña la habitación con el inventario en la mano.",
    speakers: [
      { id: "pil", name: "Pilar", voice: "es-ES-f", role: "gerente de la residencia" },
      { id: "luc", name: "Lucía", voice: "es-CO-f", role: "estudiante de máster" }
    ],
    script: [
      { speaker: "pil", text: "Bienvenida, Lucía. Esta es la doscientos doce. Vamos a revisarla juntas con el inventario, así luego no hay sorpresas con la fianza." },
      { speaker: "luc", text: "¡Qué bonita! Las paredes están recién pintadas, ¿no? Huele a pintura." },
      { speaker: "pil", text: "Sí, las pintaron la semana pasada. La cama ya está hecha, las toallas están en el armario y la calefacción está apagada hasta octubre. ¿Ves algo que no esté bien?" },
      { speaker: "luc", text: "Pues la persiana está un poco torcida. Y mira, este cajón está roto por dentro." },
      { speaker: "pil", text: "Lo apunto: cajón roto y persiana torcida. Así queda escrito que no fue cosa tuya. Mañana viene el técnico." },
      { speaker: "luc", text: "Perfecto. Oye, Pilar, y el edificio, ¿es muy antiguo? En la entrada hay una placa." },
      { speaker: "pil", text: "Muy antiguo. Fue construido a principios del siglo diecisiete como colegio para estudiantes pobres. Después estuvo abandonado casi cuarenta años y fue rehabilitado entre 2017 y 2020. Ahora el claustro está restaurado, pero el ala norte todavía está cerrada por obras." },
      { speaker: "luc", text: "Qué maravilla vivir aquí. Bueno, llevo dos maletas deshechas y me quedan tres. Estoy hecha polvo." },
      { speaker: "pil", text: "Normal. La cena se sirve a las nueve en el comedor. Y la llave de la habitación, por favor, siempre en recepción cuando sales." }
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha una vez sin leer. ¿Qué hacen Pilar y Lucía?",
        exercise: {
          id: "b1-17-escucha-global",
          type: "choice",
          prompt: "Elige la mejor respuesta.",
          items: [
            { q: "¿Para qué revisan la habitación juntas?", options: ["Para decidir si Lucía cambia de habitación.", "Para pintarla antes de que llegue Lucía.", "Para anotar su estado y evitar problemas con la fianza."], answer: 2, why: "«Así luego no hay sorpresas con la fianza.»" },
            { q: "¿De qué más hablan?", options: ["De la historia del edificio.", "De los horarios de la universidad.", "De la familia de Lucía."], answer: 0, why: "Pilar cuenta cuándo se construyó y se rehabilitó el edificio." }
          ]
        }
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota los detalles.",
        exercise: {
          id: "b1-17-escucha-detalle",
          type: "choice",
          prompt: "Responde según la conversación.",
          items: [
            { q: "¿Qué problemas encuentra Lucía?", options: ["Un enchufe roto y una toalla manchada.", "Una persiana torcida y un cajón roto.", "La calefacción encendida y la cama sin hacer."], answer: 1, why: "«La persiana está un poco torcida… este cajón está roto por dentro.»" },
            { q: "¿Qué pasó con el edificio después de estar abandonado?", options: ["Fue rehabilitado entre 2017 y 2020.", "Fue vendido a la universidad.", "Fue convertido en hotel."], answer: 0, why: "«Fue rehabilitado entre 2017 y 2020.»" },
            { q: "¿Cuántas maletas le quedan a Lucía por deshacer?", options: ["Dos.", "Ninguna.", "Tres."], answer: 2, why: "«Llevo dos maletas deshechas y me quedan tres.»" }
          ]
        }
      },
      {
        stage: "notice",
        prompt: "Fíjate en la gramática. Completa lo que dicen exactamente.",
        exercise: {
          id: "b1-17-escucha-formas",
          type: "gap",
          prompt: "Escribe la forma que usan.",
          items: [
            { q: "La cama ya ___ ___, las toallas están en el armario.", answers: [["está"], ["hecha"]], why: "Estado: «estar» + participio irregular concordado." },
            { q: "Así queda ___ que no fue cosa tuya.", answers: [["escrito"]], why: "«Quedar» + participio: estado final." },
            { q: "___ ___ a principios del siglo diecisiete.", answers: [["Fue", "fue"], ["construido"]], why: "Acción con fecha: «ser» + participio." },
            { q: "Llevo dos maletas ___ y me quedan tres.", answers: [["deshechas"]], why: "«Llevar» + cantidad + participio concordado." }
          ]
        }
      }
    ]
  },
  reading: {
    title: "Cuatro siglos entre estas piedras",
    genre: "Página web de una residencia (historia del edificio)",
    frame: "La residencia de Lucía cuenta en su página web la historia del edificio para los nuevos residentes.",
    text: [
      "El edificio donde vives fue construido entre 1611 y 1630 con piedra de Villamayor, la misma piedra dorada de la catedral. Fue fundado por un canónigo de la ciudad como colegio para estudiantes sin recursos, que vivían aquí gratis a cambio de ayudar en la iglesia vecina. Durante dos siglos el colegio estuvo lleno de jóvenes de toda Castilla.",
      "En el siglo XIX la vida del edificio cambió por completo. Fue convertido primero en cuartel y después en almacén de grano. A mediados del siglo XX ya estaba casi vacío, y en 1978 fue cerrado por el peligro de derrumbe. Estuvo abandonado casi cuarenta años: el tejado del claustro estaba hundido, las ventanas estaban tapiadas con ladrillos y la fachada estaba cubierta de hiedra.",
      "En 2017 el Ayuntamiento y la Universidad firmaron un acuerdo, y el edificio fue rehabilitado por un equipo de arquitectos locales. Las obras fueron terminadas en el verano de 2020, y la residencia fue inaugurada en septiembre, con los primeros cuarenta estudiantes.",
      "Hoy el claustro está restaurado y abierto a los residentes, las habitaciones están equipadas con calefacción y wifi, y la biblioteca está instalada en la antigua capilla. Solo el ala norte sigue cerrada: está reservada para un futuro museo. Si te fijas bien en la entrada, verás que el escudo del canónigo todavía está tallado sobre la puerta."
    ],
    glossary: [{ es: "el canónigo" }, { es: "el cuartel" }, { es: "el derrumbe" }, { es: "tapiar" }, { es: "la hiedra" }],
    tasks: [
      {
        id: "b1-17-lectura-comprension",
        type: "choice",
        title: "Comprensión",
        prompt: "Responde según el texto.",
        items: [
          { q: "¿Para quién se construyó el colegio?", options: ["Para estudiantes sin recursos.", "Para los soldados de la ciudad.", "Para los arquitectos de la catedral."], answer: 0, why: "«Como colegio para estudiantes sin recursos.»" },
          { q: "¿Por qué se cerró en 1978?", options: ["Porque la universidad lo compró.", "Porque había peligro de derrumbe.", "Porque se convirtió en almacén."], answer: 1, why: "«Fue cerrado por el peligro de derrumbe.»" },
          { q: "¿Qué hay hoy en la antigua capilla?", options: ["Un museo.", "El comedor.", "La biblioteca."], answer: 2, why: "«La biblioteca está instalada en la antigua capilla.»" }
        ]
      },
      {
        id: "b1-17-lectura-accion-estado",
        type: "classify",
        title: "¿Acción o estado en el texto?",
        prompt: "Clasifica estas ideas del texto: ¿cuentan algo que pasó o describen cómo estaba o está el edificio?",
        categories: ["Algo que pasó", "Cómo estaba o está"],
        items: [
          { text: "Fue convertido en cuartel.", cat: 0 },
          { text: "El tejado del claustro estaba hundido.", cat: 1 },
          { text: "Las obras fueron terminadas en 2020.", cat: 0 },
          { text: "La fachada estaba cubierta de hiedra.", cat: 1 },
          { text: "El escudo está tallado sobre la puerta.", cat: 1 },
          { text: "La residencia fue inaugurada en septiembre.", cat: 0 }
        ]
      }
    ],
    noticing: {
      prompt: "Fíjate en cómo el texto alterna lo que le pasó al edificio y cómo estaba o está.",
      items: [
        { quote: "Fue fundado por un canónigo de la ciudad", note: "«Ser» + participio con «por» + quien hizo la acción." },
        { quote: "Estuvo abandonado casi cuarenta años", note: "«Estuvo» + participio: un estado que duró un tiempo cerrado." },
        { quote: "las ventanas estaban tapiadas con ladrillos", note: "«Estaban» + participio concordado: así estaba el edificio." },
        { quote: "Hoy el claustro está restaurado", note: "Estado actual, resultado de la restauración." }
      ]
    }
  },
  practice: {
    intro: "Combinas las dos clases y recuperas lo de las semanas 15 y 16.",
    exercises: [
      {
        id: "b1-17-practica-orden",
        type: "order",
        title: "Frases de la residencia",
        prompt: "Ordena las palabras para formar frases completas.",
        items: [
          { words: ["La", "ropa", "de", "cama", "ya", "está", "puesta."] },
          { words: ["El", "ascensor", "se", "quedó", "parado", "en", "el", "tercero."] },
          { words: ["El", "comedor", "fue", "reformado", "el", "año", "pasado."] },
          { words: ["Llevo", "cuatro", "estanterías", "montadas."] }
        ]
      },
      {
        id: "b1-17-practica-retrieval",
        type: "context",
        title: "Recuperación: semanas 15 y 16",
        prompt: "Recuperación de semanas anteriores en la residencia de Salamanca. Elige la mejor opción.",
        items: [
          { context: "Semana 16, discurso referido. El lunes Pilar le dijo a Lucía: «El técnico viene mañana».", q: "El jueves Lucía lo cuenta a una amiga.", options: ["Pilar me dijo que el técnico viene mañana.", "Pilar me dijo que el técnico venía al día siguiente.", "Pilar me dijo si el técnico vendría mañana."], answer: 1, why: "El verbo retrocede y «mañana» pasa a «al día siguiente»." },
          { context: "Semana 16, «se». Un cartel del comedor informa de una norma.", q: "¿Qué cartel es correcto?", options: ["Se sirven desayunos de siete a diez.", "Se sirve desayunos de siete a diez.", "Se sirven a desayunos de siete a diez."], answer: 0, why: "«Se» concuerda con «desayunos»." },
          { context: "Semana 15, consecuencia. La calefacción no funcionaba el lunes.", q: "Completa: «La calefacción no funcionaba, ___ dormimos con dos mantas».", options: ["en cambio", "además", "así que"], answer: 2, why: "«Así que» introduce la consecuencia." },
          { context: "Semana 15, argumentos. Lucía recomienda la residencia y suma un dato sorprendente.", q: "¿Qué frase lo hace?", options: ["Es barata y céntrica; incluso tiene un claustro del siglo XVII.", "Es barata y céntrica; en cambio, tiene un claustro del siglo XVII.", "Es barata y céntrica; por eso, tiene un claustro del siglo XVII."], answer: 0, why: "«Incluso» suma un argumento inesperado." }
        ]
      },
      {
        id: "b1-17-practica-reformular",
        type: "transform",
        title: "De la acción al estado",
        prompt: "Reescribe cada frase según la instrucción.",
        items: [
          { source: "Ya colgaron los cuadros en el pasillo.", instruction: "Describe el estado con «estar».", answers: ["Los cuadros ya están colgados en el pasillo.", "Ya están colgados los cuadros en el pasillo."], why: "«Estar» + participio concordado con «los cuadros»." },
          { source: "Alguien cubrió los muebles con plásticos.", instruction: "Describe el estado con «estar».", answers: ["Los muebles están cubiertos con plásticos.", "Los muebles están cubiertos de plásticos."], why: "«Cubrir» → «cubierto», irregular." },
          { source: "La residencia fue inaugurada en 2020 por el rector.", instruction: "Dilo como en una conversación, en activa.", answers: ["El rector inauguró la residencia en 2020.", "En 2020 el rector inauguró la residencia."], why: "Quien hace la acción pasa a ser el sujeto." },
          { source: "Las ventanas fueron cambiadas el verano pasado.", instruction: "Dilo con «se».", answers: ["Las ventanas se cambiaron el verano pasado.", "Se cambiaron las ventanas el verano pasado."], why: "«Se» + verbo en plural, como en la semana 16." }
        ]
      },
      {
        id: "b1-17-practica-escritura-guiada",
        type: "open",
        title: "Notas y mensajes",
        prompt: "Escribe cada texto en dos o tres frases.",
        items: [
          {
            prompt: "Antes de irte de vacaciones, deja una nota a tu compañero de piso sobre cómo está la casa.",
            model: "Las ventanas están cerradas y la nevera está casi vacía. He dejado la ropa tendida en el balcón: si llueve, recógela, por favor. La llave del buzón está colgada detrás de la puerta.",
            checklist: ["Usas «estar» + participio o adjetivo concordado.", "Distingues lo que has hecho («he dejado») de cómo está («está colgada»)."]
          },
          {
            prompt: "Escribe a tu familia cómo va tu mudanza: qué llevas hecho y qué te falta.",
            model: "Llevo la mitad de las cajas deshechas y tengo la cocina ya organizada. La lámpara del salón se quedó rota en el viaje, así que todavía estoy a oscuras.",
            checklist: ["Usas «llevar» o «tener» + participio concordado.", "Usas «quedarse» + participio para algo que no esperabas."]
          },
          {
            prompt: "Explica a un amigo, en lengua hablada, la historia de un monumento de tu ciudad que leíste en un cartel.",
            model: "El cartel decía que los romanos construyeron el puente. Lo reconstruyeron después de una riada en el siglo XVII y hoy está abierto solo a peatones.",
            checklist: ["Reformulas en activa o con «se» lo que el cartel decía con «ser» + participio.", "Describes cómo está hoy con «estar»."]
          }
        ]
      }
    ]
  },
  writing: {
    task: "Acabas de entrar en una habitación de alquiler o de residencia para todo el curso. Escribe un correo a la persona responsable para describir cómo encontraste la habitación, qué está bien, qué está roto o sucio, qué has arreglado tú y qué falta por hacer.",
    context: "Quieres dejarlo todo por escrito para recuperar la fianza al final del curso. La persona responsable no estaba cuando llegaste.",
    steps: [
      "Haz una lista de lo que está bien, lo que está mal y lo que ya has hecho tú.",
      "Primer párrafo: cómo encontraste la habitación, con «estaba» + participio, y cómo está ahora, con «está» + participio.",
      "Segundo párrafo: lo que llevas hecho, lo que se quedó roto o pendiente y lo que pides; si mencionas la historia del lugar, cuéntala en activa o con «se».",
      "Revisa la concordancia de cada participio y los irregulares (roto, puesto, hecho, abierto), y corrige «ha limpiada» o «está limpiada» si aparecen."
    ],
    useLanguage: [
      "estaba / está + participio concordado",
      "participios irregulares: roto, hecho, puesto, abierto, cubierto",
      "está limpio, lleno, vacío, seco",
      "quedarse + participio",
      "llevar / tener + participio"
    ],
    model: [
      "Estimada Pilar: le escribo para dejar por escrito cómo encontré la habitación 212 el lunes. Cuando llegué, la cama estaba hecha, las paredes estaban recién pintadas y el armario estaba limpio y vacío. Sin embargo, la persiana estaba torcida, uno de los cajones estaba roto por dentro y la lámpara de la mesa no tenía bombilla. El enchufe de al lado de la cama tampoco funciona.",
      "Desde entonces he puesto una bombilla nueva y llevo casi todo colocado, así que la habitación ya está ordenada. Pero el miércoles, al subir la persiana, se quedó atascada a media altura, y ahora la ventana no se puede cerrar bien. ¿Podría venir el técnico esta semana? Por lo demás, todo está perfecto y estoy encantada con el edificio. Muchas gracias. Un saludo, Lucía Cárdenas."
    ],
    checklist: [
      "Describo cómo estaba la habitación con «estaba» + participio concordado.",
      "Describo cómo está ahora con «está» + participio o adjetivo.",
      "Uso al menos dos participios irregulares.",
      "Cuento lo que llevo hecho y algo que se quedó roto o pendiente.",
      "El correo tiene dos párrafos, un saludo y una despedida."
    ],
    words: [130, 180]
  },
  speaking: {
    intro: "Graba tus respuestas y escúchate: comprueba que los participios concuerdan y que pronuncias la «d» de «-ado».",
    tasks: [
      {
        title: "Antes y ahora",
        prompt: "Elige un lugar que conoces bien y que ha cambiado (tu casa después de una mudanza, un edificio de tu ciudad, tu oficina). Habla durante dos minutos: explica cómo estaba antes, qué pasó (puedes contar la historia en activa o con «se») y cómo está ahora.",
        prep: [
          "Tres estados del pasado con «estaba» + participio.",
          "Dos cosas que pasaron, en activa o con «se».",
          "Tres estados de hoy con «está» + participio o adjetivo."
        ],
        seconds: 120,
        model: "Hace diez años, la estación de mi ciudad estaba abandonada: las ventanas estaban rotas y las paredes estaban cubiertas de grafitis. En 2019 la compraron el ayuntamiento y una fundación, y se convirtió en un centro cultural. Hoy está restaurada, el andén está cubierto con un techo de cristal…",
        selfCheck: [
          "¿He hablado al menos dos minutos?",
          "¿He concordado cada participio con su nombre?",
          "¿He distinguido lo que pasó de cómo está?"
        ]
      },
      {
        title: "Una llamada a la residencia",
        prompt: "Llamas a la residencia porque algo de tu habitación está roto. La persona responsable te hace preguntas («¿Desde cuándo está así?», «¿Lo rompiste tú?»). Responde, aclara que ya estaba así cuando llegaste y negocia cuándo vienen a arreglarlo. Practica con alguien que haga de interlocutor o graba las dos voces.",
        prep: [
          "Prepara dos frases con «estaba» + participio para defenderte.",
          "Usa «¿Podría…?» o «¿Le parece bien…?» para negociar."
        ],
        seconds: 90,
        model: "—¿Desde cuándo está así la ventana? —Ya estaba rota cuando llegué; de hecho, está anotado en el inventario. —Ah, vale. —¿Podría venir alguien antes del viernes? Es que con la ventana abierta hace mucho frío…",
        selfCheck: [
          "¿He respondido a las preguntas y aclarado que el daño ya estaba?",
          "¿He propuesto un día o una solución?"
        ]
      }
    ]
  },
  useInClass: {
    intro: "Lleva tu correo y estas tarjetas a la próxima clase con tu profesor.",
    cards: [
      { move: "Describe", task: "Describe a tu profesor cómo está ahora tu mesa o tu habitación, sin usar ningún verbo de acción.", phrases: ["Está…", "Están…"] },
      { move: "Cuenta", task: "Cuenta a tu profesor la historia de un edificio de tu ciudad en activa o con «se», y pregúntale cómo lo diría un periódico.", phrases: ["Lo construyeron en…", "Se restauró en…"] },
      { move: "Reclama", task: "Haz con tu profesor un juego de papeles: reclama algo que estaba roto cuando llegaste a un hotel.", phrases: ["Cuando llegué, ya estaba…", "Se quedó…"] },
      { move: "Contrasta", task: "Pide a tu profesor dos frases con el mismo participio, una con «ser» y otra con «estar», y explica la diferencia.", phrases: ["Fue cerrado…", "Estaba cerrado…"] }
    ],
    bring: "Tu correo revisado y la grabación de «Antes y ahora»."
  },
  quiz: {
    items: [
      { type: "choice", q: "Describe cómo encontraste el comedor: «Cuando bajé, el comedor ya ___».", options: ["fue cerrado", "estaba cerrado", "ha cerrado"], answer: 1, why: "Estado que encontraste: «estaba» + participio." },
      { type: "choice", q: "¿Qué frase cuenta una acción con fecha, como en un periódico?", options: ["El museo está abierto desde las diez.", "El museo estaba abierto cuando pasamos.", "El museo fue abierto al público en 1985."], answer: 2, why: "«Ser» + participio con fecha: acción." },
      { type: "listen", q: "Escucha. ¿Qué describe la persona?", options: ["Algo que alguien está haciendo ahora.", "El estado de la cocina.", "Lo que pasó con la cocina hace años."], answer: 1, why: "«Está recogida… están fregados»: estado.", audio: "Tranquila, la cocina ya está recogida y los platos están fregados.", voice: "es-ES-f" },
      { type: "gap", q: "Abrieron las ventanas del aula. → Las ventanas del aula ___ ___.", answers: [["están"], ["abiertas"]], why: "Participio irregular concordado." },
      { type: "gap", q: "Llevo tres capítulos ___ (escribir) de mi trabajo final.", answers: [["escritos"]], why: "«Llevar» + cantidad + participio concordado con «capítulos»." },
      { type: "gap", q: "Después de la fiesta, la nevera ___ ___ (estar, vaciar).", answers: [["está", "estaba", "quedó"], ["vacía"]], why: "Con «vaciar» se usa el adjetivo «vacía»." },
      { type: "order", words: ["La", "biblioteca", "estuvo", "cerrada", "dos", "meses", "por", "obras."], why: "«Estuvo» + participio: estado de duración cerrada." },
      { type: "error", sentence: "Las cortinas están ponidas desde ayer.", answers: ["Las cortinas están puestas desde ayer."], why: "«Poner» → «puesto»." },
      { type: "error", sentence: "Hemos pintadas todas las puertas del pasillo.", answers: ["Hemos pintado todas las puertas del pasillo."], why: "Con «haber» el participio no concuerda." },
      {
        type: "open",
        prompt: "Reformulación: convierte esta noticia en un mensaje oral para un amigo, en activa o con «se», y añade cómo está el lugar hoy. Noticia: «El mercado de la plaza fue reformado en 2023 por el Ayuntamiento y fue reabierto en enero».",
        model: "¿Sabes que el Ayuntamiento reformó el mercado de la plaza en 2023? Lo reabrieron en enero y ahora está precioso: los puestos están renovados y el techo está arreglado.",
        checklist: [
          "Cambias «fue reformado» y «fue reabierto» por la activa o por «se».",
          "Describes el estado actual con «estar» + participio o adjetivo.",
          "Los participios concuerdan con los nombres.",
          "El tono es el de un mensaje oral, no el de una noticia."
        ]
      }
    ]
  },
  complete: {
    canNow: [
      "Describir el estado que deja una acción con «estar» + participio concordado, en presente y en pasado.",
      "Distinguir «haber» + participio (acción), «estar» + participio (estado) y «estar» + gerundio (proceso).",
      "Contar lo que llevo hecho con «tener» y «llevar» + participio, y lo inesperado con «quedarse» + participio.",
      "Entender «ser» + participio en noticias y textos de historia, y decir lo mismo en activa o con «se»."
    ],
    review: [
      "Los participios irregulares: roto, puesto, hecho, escrito, abierto, cubierto.",
      "El discurso referido y el «se» de la semana 16.",
      "Los conectores de consecuencia de la semana 15: así que, por eso, de modo que."
    ]
  },
  related: [
    { path: "/gramatica/estar-participio-para-estados-resultantes", label: "Clase: Estar + participio para estados resultantes" },
    { path: "/gramatica/diferencia-entre-ser-participio-y-estar", label: "Clase: Diferencia entre ser + participio y estar + participio" }
  ]
};
