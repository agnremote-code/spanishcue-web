import type { Module } from "../../types";

/**
 * C2 · semana 8 · Autoestudio espejo de G216 (variación regional del pasado
 * perfecto y evidencialidad) y G217 (leísmo y régimen pronominal en variedades
 * cultas). Repaso autónomo con los diarios y la correspondencia ficticios de
 * una asociación de acogida a peregrinos en León.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w08: Module = {
  id: "c2-08",
  level: "c2",
  week: 8,
  kind: "core",
  title: "Hoy caminé, hoy he caminado: pasados y pronombres con mapa",
  subtitle: "Repaso del reparto regional entre «he caminado» y «caminé», del pluscuamperfecto de sorpresa y de la norma culta en «le», «lo», «les» y «se lo»",
  stop: {
    place: "León",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g216",
    "c2.gram.g217",
    "c2.voc.w08-camino-correspondencia",
    "c2.pron.w08-s-final-pronombres",
    "c2.lis.w08-reunion-antologia",
    "c2.read.w08-presentacion-antologia",
    "c2.wri.w08-guia-correspondencia",
    "c2.spk.w08-explicar-variedades",
    "c2.fun.w08-adaptar-sin-borrar",
    "c2.disc.w08-cita-y-norma",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo reconocer cómo se reparten el pretérito perfecto y el indefinido según la zona, interpretar el pluscuamperfecto de sorpresa o de información no presenciada, y elegir «le», «lo», «les» y «se lo» según la norma culta panhispánica.",
    steps: [
      "Repasa en la teoría el antepresente y sus fronteras regionales, los usos evidenciales andinos y la escala de la norma para los pronombres átonos.",
      "Practica con diarios de peregrinos y cartas de una asociación de acogida en León.",
      "Escucha la reunión del equipo de la antología y lee la presentación del libro.",
      "Redacta una entrada de la guía de correspondencia, revísala con la lista de control y explica tus criterios en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste estos dos temas con tu profesor. Aquí los repasas con otra situación: una asociación de León que acoge a peregrinos del Camino de Santiago prepara una antología con sus diarios, escritos por personas de España y de América, y revisa las cartas que envía a los peregrinos de todo el mundo. En los dos casos, la pregunta es la misma: ¿qué variedad es la de este texto y qué norma pide su lector?",
    parts: [
      {
        heading: "El pretérito perfecto y sus fronteras regionales",
        body: [
          "El pretérito perfecto compuesto («he caminado») presenta un hecho pasado dentro de un periodo que llega hasta el momento en que se habla. Tiene cuatro usos principales: hechos de hoy, hechos de un periodo que incluye el presente («este año»), experiencias («¿has estado alguna vez en Astorga?») y situaciones que continúan («siempre he vivido en León»).",
          "La frontera con el indefinido («caminé») no está en el mismo sitio en todas partes. En gran parte de España, sobre todo en el centro y el norte, lo ocurrido hoy se cuenta con el compuesto: «Hoy he caminado veinte kilómetros». En gran parte de América, y también en Canarias, Galicia y Asturias, el indefinido cubre también el día de hoy: «Hoy caminé veinte kilómetros». En esas variedades, el compuesto se concentra en la continuidad, la repetición y la experiencia: «Últimamente he dormido mal».",
          "Ninguna de las dos opciones es más correcta. La elección depende de la variedad del hablante y, cuando se edita, del público del texto. Lo que conviene evitar es la mezcla sin motivo en una misma voz.",
        ],
        table: {
          caption: "El mismo día contado desde dos variedades",
          head: ["Uso", "Centro y norte de España", "Gran parte de América, Canarias, Galicia y Asturias"],
          rows: [
            ["hecho de hoy", "Esta mañana he salido de Mansilla.", "Esta mañana salí de Mansilla."],
            ["periodo que incluye el presente", "Esta semana he dormido en cuatro albergues.", "Esta semana dormí en cuatro albergues."],
            ["experiencia", "¿Has hecho el Camino alguna vez?", "¿Has hecho el Camino alguna vez? / ¿Hiciste el Camino alguna vez?"],
            ["continuidad hasta hoy", "Siempre he querido venir.", "Siempre he querido venir."],
            ["hecho que aún no ocurre", "Todavía no ha llegado mi mochila.", "Todavía no llega mi mochila. / Todavía no llegó."],
          ],
        },
        tip: "Antes de «corregir» un indefinido referido a hoy, mira de dónde es quien escribe. Si es su variedad, no hay nada que corregir.",
      },
      {
        heading: "Evidencialidad: cómo sabe quien habla lo que cuenta",
        body: [
          "En zonas andinas (partes de Bolivia, Perú y Ecuador) se describen usos del pluscuamperfecto que no expresan anterioridad, sino la fuente de la información. El primero es el de descubrimiento o sorpresa: «¡Había sido tarde!» equivale a «resulta que es tarde, y me acabo de dar cuenta». El segundo es el de información no presenciada: «Mi abuelo había sido arriero» puede significar que quien habla no lo vio, sino que se lo contaron.",
          "Son tendencias descritas en esas zonas, no reglas generales, y el objetivo es reconocerlas para no malinterpretarlas. Un lector peninsular que lea «¡La catedral había sido enorme!» puede pensar que la catedral ya no es enorme; un lector andino entiende que la peregrina acaba de comprobarlo con sus ojos. Si un testimonio lo usa, se respeta en la cita; si el editor necesita aclararlo, lo hace en una nota o en su propia voz, no cambiando las palabras de quien habla.",
        ],
        examples: [
          { es: "«¡Había sido muy alta la catedral de León!»", note: "Sorpresa al descubrirlo: ≈ resulta que es muy alta." },
          { es: "«Mi bisabuela había sido de un pueblo cerca de Astorga.»", note: "Información no presenciada: ≈ según me contaron." },
          { es: "Nota del editor: «La autora, de Cochabamba, usa el pluscuamperfecto para expresar sorpresa ante lo que descubre».", note: "La aclaración va en la voz del editor; la cita no se toca." },
        ],
        mistakes: [
          {
            wrong: "Corrección en el diario de una peregrina de Cusco: «¡Había sido muy alta la catedral!» → «¡Ha sido muy alta la catedral!».",
            right: "Se mantiene la cita y, si hace falta, se añade una nota del editor sobre su valor de sorpresa.",
            why: "La forma no es un error: expresa descubrimiento en su variedad. Cambiarla borra la voz de la autora y no aclara nada.",
          },
          {
            wrong: "Editor: «Esta mañana salí de León y hoy he llegado a Hospital de Órbigo». (Voz del editor, para una edición peninsular.)",
            right: "Editor: «Esta mañana he salido de León y hoy he llegado a Hospital de Órbigo».",
            why: "En una misma voz, la elección debe ser coherente con la variedad elegida para la edición.",
          },
        ],
      },
      {
        heading: "La escala de la norma para «le», «lo» y «la»",
        body: [
          "La norma culta panhispánica no trata igual todos los usos de «le» por «lo». «A Juan le vi ayer» (leísmo de persona, masculino singular) está admitido, por su extensión en el centro y el norte de España y en autores de prestigio. «A ellos les vi» (el mismo uso en plural) se desaconseja. «El libro le tengo» (leísmo de cosa) no se acepta. Tampoco se aceptan el laísmo («la dije que viniera») ni el loísmo («lo dije la verdad»).",
          "El leísmo se oye sobre todo en el centro y el norte de España; en la mayor parte de América es raro, y allí se usa «lo» y «la» según el sistema etimológico. Un caso aparte es el «le» de cortesía con usted, muy frecuente en fórmulas: «Le saludamos atentamente», «Le esperamos en el albergue». Está aceptado también en América.",
        ],
        table: {
          caption: "De más aceptado a no aceptado",
          head: ["Ejemplo", "Fenómeno", "Juicio de la norma culta"],
          rows: [
            ["Al peregrino lo vi en Sahagún.", "sistema etimológico", "recomendado en todas partes"],
            ["Al peregrino le vi en Sahagún.", "leísmo de persona, masculino singular", "admitido"],
            ["Le esperamos en el albergue (a usted).", "«le» de cortesía", "aceptado"],
            ["A los peregrinos les vi en Sahagún.", "leísmo de persona en plural", "desaconsejado"],
            ["El sello de la credencial le tengo aquí.", "leísmo de cosa", "no aceptado"],
            ["A la hospitalera la di las llaves.", "laísmo", "no aceptado"],
          ],
        },
      },
      {
        heading: "Número y régimen: «les», «se lo», «informar», «ayudar», «llamar»",
        body: [
          "Cuando el complemento indirecto es plural, la norma escrita pide «les»: «Diles a tus compañeros que el albergue abre a las doce». «Dile a tus compañeros» es muy frecuente en la lengua oral de todas partes, pero se evita en la escritura cuidada. Con «se lo», en cambio, el plural del destinatario no se marca en el pronombre: «La credencial se la dimos a los peregrinos». En el habla de gran parte de América es muy común pasar ese plural al segundo pronombre («se las dimos»), pero la escritura cuidada lo evita.",
          "Algunos verbos admiten dos construcciones. «Informar»: «La informamos de que el albergue está completo» (complemento directo de persona y «de que») o «Le informamos que el albergue está completo» (la información como complemento directo y la persona como indirecto). Lo que no se recomienda es mezclar: «la informamos que». «Ayudar»: lo normal es «lo» o «la» («la ayudamos con la mochila»), aunque «le ayudamos» está muy extendido. «Llamar» por teléfono lleva complemento directo («la llamé anoche»), pero «llamar la atención a alguien» lleva indirecto («le llamaron la atención por el ruido»).",
          "Si dudas, prueba la pasiva: si la persona puede ser sujeto de una pasiva («la peregrina fue ayudada»), es complemento directo y le corresponde «lo» o «la».",
        ],
        examples: [
          { es: "Diles a los peregrinos que el desayuno es a las siete.", note: "Plural en la escritura cuidada: «les»." },
          { es: "Los mapas se los enviamos ayer a los peregrinos.", note: "Aquí «los» es correcto porque concuerda con «los mapas», que es plural; no con los destinatarios." },
          { es: "La carta se la mandamos a los socios de Lima.", note: "«La» es la carta; el plural de los socios no se marca en «se»." },
          { es: "A la peregrina la llamamos por teléfono, y luego le llamamos la atención por fumar en el patio.", note: "Dos sentidos de «llamar», dos regímenes." },
        ],
        mistakes: [
          {
            wrong: "La informamos que su reserva está confirmada.",
            right: "La informamos de que su reserva está confirmada. / Le informamos que su reserva está confirmada.",
            why: "Hay que elegir una de las dos construcciones de «informar»; mezclarlas no se recomienda.",
          },
          {
            wrong: "Carta formal: «A los peregrinos de Rosario se los explicamos por correo».",
            right: "Carta formal: «A los peregrinos de Rosario se lo explicamos por correo».",
            why: "Lo explicado es singular («lo»); el plural de los destinatarios no se marca en la escritura cuidada.",
          },
          {
            wrong: "El sello le tienes en la última página de la credencial.",
            right: "El sello lo tienes en la última página de la credencial.",
            why: "Leísmo de cosa: no aceptado en la norma culta.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Decide primero qué variedad o qué norma pide el texto; después elige la forma.",
    exercises: [
      {
        id: "c2-08-gramatica-variedad",
        type: "context",
        prompt: "Lee cada fragmento y decide qué hacer con el tiempo verbal.",
        items: [
          {
            context: "Diario de un peregrino de Guadalajara (México) para la antología: «Hoy salí de Sahagún con lluvia y llegué empapado a El Burgo Ranero».",
            q: "Para la edición mexicana del libro, ¿qué haces?",
            options: [
              "Lo cambio a «hoy he salido… he llegado».",
              "Lo mantengo: el indefinido para hechos de hoy es normal en su variedad.",
              "Lo cambio a pluscuamperfecto.",
            ],
            answer: 1,
            why: "En gran parte de América el indefinido cubre el día de hoy. Es la voz del autor.",
          },
          {
            context: "Nota del editor en la edición peninsular: «Esta mañana ___ la credencial número diez mil del año».",
            q: "¿Qué forma encaja mejor en la voz del editor peninsular?",
            options: ["sellamos", "habíamos sellado", "hemos sellado"],
            answer: 2,
            why: "En el centro y el norte de España, un hecho de hoy se cuenta con el compuesto.",
          },
          {
            context: "Diario de una peregrina de La Paz: «Llegando a la plaza, ¡la catedral había sido toda de vidrieras!».",
            q: "¿Qué expresa el pluscuamperfecto?",
            options: [
              "Que la catedral tenía vidrieras antes y ahora no.",
              "La sorpresa de descubrirlo en ese momento.",
              "Una acción anterior a otra acción pasada.",
            ],
            answer: 1,
            why: "Uso andino de descubrimiento: ≈ resulta que es toda de vidrieras.",
          },
          {
            context: "Testimonio de un hospitalero de Arequipa: «Mi abuelo había trabajado en las minas de Puno, eso me decía mi mamá».",
            q: "¿Qué añade el pluscuamperfecto, además del tiempo?",
            options: [
              "Que el hablante conoce el dato porque se lo contaron.",
              "Que el abuelo todavía trabaja en las minas.",
              "Que el hablante estuvo presente.",
            ],
            answer: 0,
            why: "Uso de información no presenciada; «eso me decía mi mamá» lo confirma.",
          },
        ],
      },
      {
        id: "c2-08-gramatica-pronombres",
        type: "gap",
        prompt: "Completa las cartas de la asociación con el pronombre que pide la norma culta escrita.",
        items: [
          { q: "A los peregrinos de Bogotá ___ enviamos ayer el mapa de etapas.", answers: [["les"]], why: "Complemento indirecto plural: «les»." },
          { q: "El mapa de etapas se ___ enviamos ayer a los peregrinos de Bogotá.", answers: [["lo"]], why: "«Lo» concuerda con «el mapa»; el plural del destinatario no se marca." },
          { q: "La hospitalera perdió las llaves y ___ ayudamos a buscarlas.", answers: [["la"]], why: "«Ayudar» lleva complemento directo: «la ayudamos»." },
          { q: "A la señora Quispe ___ llamamos por teléfono para confirmar la cama.", answers: [["la"]], why: "«Llamar» por teléfono: complemento directo femenino." },
          { q: "Al peregrino que gritaba en el dormitorio ___ llamaron la atención.", answers: [["le"]], why: "«Llamar la atención a alguien»: complemento indirecto." },
          { q: "Estimada señora: ___ informamos de que su reserva ha sido confirmada.", answers: [["la"]], why: "Con «de que», la persona es complemento directo: «la informamos de que»." },
        ],
      },
      {
        id: "c2-08-gramatica-escala",
        type: "classify",
        prompt: "Clasifica cada frase según el juicio de la norma culta.",
        categories: ["Recomendado o admitido", "Desaconsejado en la escritura cuidada", "No aceptado"],
        items: [
          { text: "Al hospitalero le conocí en Astorga.", cat: 0, why: "Leísmo de persona masculino singular: admitido." },
          { text: "Le esperamos en el albergue, señor Ruiz.", cat: 0, why: "«Le» de cortesía con usted: aceptado." },
          { text: "A los voluntarios les vi muy cansados.", cat: 1, why: "Leísmo de persona en plural: desaconsejado." },
          { text: "Dile a tus amigos que guarden sitio.", cat: 1, why: "«Le» por «les»: frecuente, pero se evita en la escritura cuidada." },
          { text: "El bastón le dejé en la entrada.", cat: 2, why: "Leísmo de cosa: no aceptado." },
          { text: "A mi hermana la regalé una concha.", cat: 2, why: "Laísmo: no aceptado." },
          { text: "A la peregrina la ayudamos con la mochila.", cat: 0, why: "«Ayudar» con complemento directo: recomendado." },
          { text: "El mapa se los mandé a los chicos.", cat: 1, why: "Plural del destinatario pasado a «los»: frecuente en América, evitado en lo escrito." },
        ],
      },
      {
        id: "c2-08-gramatica-errores",
        type: "error",
        prompt: "Corrige cada frase de la correspondencia oficial según la norma culta escrita.",
        items: [
          {
            sentence: "Le informamos de que la recogeremos en la estación. (A una peregrina, con la construcción «de que».)",
            answers: ["La informamos de que la recogeremos en la estación."],
            why: "Con «de que», la persona informada es complemento directo: «la».",
          },
          {
            sentence: "A las peregrinas de Quito las dimos la bienvenida en la puerta.",
            answers: ["A las peregrinas de Quito les dimos la bienvenida en la puerta."],
            why: "«Dar la bienvenida a alguien»: complemento indirecto. «Las» es laísmo.",
          },
          {
            sentence: "Las credenciales se las entregamos a los peregrinos, y el sello también se los pusimos.",
            answers: ["Las credenciales se las entregamos a los peregrinos, y el sello también se lo pusimos."],
            why: "«El sello» es singular: «se lo». No se marca el plural de los destinatarios.",
          },
          {
            sentence: "El recibo le encontrará en el sobre adjunto.",
            answers: ["El recibo lo encontrará en el sobre adjunto."],
            why: "Leísmo de cosa: la norma pide «lo».",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico del Camino y de la correspondencia institucional, para hablar de los textos que se editan esta semana.",
    groups: [
      {
        title: "El Camino y la acogida",
        items: [
          { es: "la credencial", note: "documento del peregrino donde se acumulan los sellos de cada etapa" },
          { es: "el albergue de donativo", note: "alojamiento donde cada peregrino paga lo que puede" },
          { es: "el hospitalero / la hospitalera", note: "voluntario que atiende un albergue" },
          { es: "la etapa", note: "tramo que se recorre en una jornada" },
          { es: "sellar", note: "estampar el sello del lugar en la credencial" },
          { es: "la ampolla", note: "herida llena de líquido que sale en los pies al caminar" },
        ],
      },
      {
        title: "Editar y escribir cartas",
        items: [
          { es: "la antología", note: "selección de textos de varios autores" },
          { es: "respetar la voz", note: "no cambiar la manera de hablar de quien escribe" },
          { es: "la nota del editor", note: "aclaración breve de quien edita el texto" },
          { es: "la fórmula de cortesía", note: "expresión fija para saludar o despedirse en una carta" },
          { es: "la edición peninsular / americana", note: "versión de un libro preparada para lectores de España o de América" },
          { es: "acusar recibo", note: "confirmar que se ha recibido algo" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-08-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la credencial", right: "documento del peregrino donde se acumulan los sellos de cada etapa" },
          { left: "el albergue de donativo", right: "alojamiento donde cada peregrino paga lo que puede" },
          { left: "respetar la voz", right: "no cambiar la manera de hablar de quien escribe" },
          { left: "la nota del editor", right: "aclaración breve de quien edita el texto" },
          { left: "acusar recibo", right: "confirmar que se ha recibido algo" },
          { left: "la fórmula de cortesía", right: "expresión fija para saludar o despedirse en una carta" },
        ],
      },
      {
        id: "c2-08-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["hospitalera", "etapa", "acusamos recibo", "edición americana"],
        items: [
          { q: "La ___ del albergue de Mansilla nos curó las ampollas con agua y sal.", answers: [["hospitalera"]] },
          { q: "La ___ entre León y San Martín del Camino es larga y muy llana.", answers: [["etapa"]] },
          { q: "Estimado señor: ___ de su carta del 3 de mayo.", answers: [["acusamos recibo"]] },
          { q: "En la ___ los textos de la asociación usarán «lo» y «la» en todos los casos.", answers: [["edición americana"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La -s final que distingue «le» de «les» y «lo» de «los»",
    explanation: [
      "En la escritura, la diferencia entre «le» y «les» o entre «se lo» y «se los» es una sola letra. En la lengua oral, esa -s final puede pronunciarse plena, aspirarse o perderse según la variedad. En muchas zonas de Andalucía, Canarias y gran parte de América, «les dije» puede sonar casi como «le dije», y por eso el contexto pesa más que el sonido.",
      "Al leer en voz alta una carta formal, pronuncia la -s con claridad, sobre todo ante consonante: «les-di-mos», «se-los-man-da-mos». También conviene ligar sin pausa el auxiliar y el participio del pretérito perfecto: «he-ca-mi-na-do» forma un solo grupo, y «hoy-he» se une en sinalefa.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el contraste.",
    ],
    table: {
      caption: "Pares que se distinguen por la -s final",
      head: ["Singular", "Plural"],
      rows: [
        ["le dimos la llave", "les dimos la llave"],
        ["se lo mandamos", "se los mandamos"],
        ["lo llamamos", "los llamamos"],
        ["le escribimos ayer", "les escribimos ayer"],
      ],
    },
    perceive: {
      id: "c2-08-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué forma oyes.",
      items: [
        {
          q: "¿Qué pronombre oyes?",
          options: ["le", "les"],
          answer: 1,
          why: "Se oye la -s final antes de «dimos».",
          audio: "A los peregrinos de Burgos les dimos dos mantas más.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué combinación oyes?",
          options: ["se lo", "se los", "se las"],
          answer: 0,
          why: "Sin -s final: «se lo» (el mapa).",
          audio: "El mapa se lo mandamos ayer a la familia Ortega.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué tiempo verbal oyes para el hecho de hoy?",
          options: ["pretérito perfecto: he llegado", "indefinido: llegué"],
          answer: 0,
          why: "Se oye el auxiliar «he» unido a «llegado».",
          audio: "Hoy he llegado a Hospital de Órbigo antes del mediodía.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué tiempo verbal oyes para el hecho de hoy?",
          options: ["pretérito perfecto: he llegado", "indefinido: llegué"],
          answer: 1,
          why: "«Llegué»: indefinido para un hecho de hoy, normal en gran parte de América.",
          audio: "Hoy llegué a Hospital de Órbigo antes del mediodía.",
          voice: "es-MX-m",
        },
      ],
    },
    produce: [
      { text: "A los peregrinos les dimos la llave y se la devolvieron a la hospitalera.", tip: "Marca la -s de «les» y no la pongas en «se la».", voice: "es-ES-f" },
      { text: "Hoy he caminado veinticinco kilómetros y me he quedado sin fuerzas.", tip: "Une «hoy he» y «me he» sin pausa.", voice: "es-ES-m" },
      { text: "Hoy caminé veinticinco kilómetros y me quedé sin fuerzas.", tip: "Misma información en la variedad que usa el indefinido para hoy.", voice: "es-PE-f" },
      { text: "¡Había sido enorme la catedral!", tip: "Entonación exclamativa de descubrimiento: sube en «enorme».", voice: "es-PE-m" },
    ],
    spelling: "Si en tu variedad la -s final se aspira, revisa con especial cuidado «le» y «les» al escribir: el oído no te avisará del error.",
  },
  listening: {
    title: "Reunión: la antología y las cartas",
    context: "Lucía, presidenta de una asociación leonesa de acogida a peregrinos, revisa con Rodrigo, voluntario peruano que coordina la edición americana, y con Ximena, voluntaria mexicana, la antología «Diarios del Camino» y la plantilla de cartas de la asociación. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "l", name: "Lucía", voice: "es-ES-f", role: "Presidenta de la asociación, en León" },
      { id: "r", name: "Rodrigo", voice: "es-PE-m", role: "Coordinador de la edición americana" },
      { id: "x", name: "Ximena", voice: "es-MX-f", role: "Voluntaria y correctora" },
    ],
    script: [
      { speaker: "l", text: "Bueno, empecemos, que esta tarde llegan treinta peregrinos y quiero tenerlo cerrado. Rodrigo, ¿has podido revisar los diarios de la segunda parte?" },
      { speaker: "r", text: "Sí, los terminé anoche. Hay uno que quería comentarles: el de la señora de Cochabamba. Escribe «llegando a León, ¡la catedral había sido toda de luz!». La correctora de la edición peninsular lo ha marcado y propone «la catedral era toda de luz»." },
      { speaker: "l", text: "Yo, la verdad, al leerlo pensé que se había equivocado de tiempo. ¿No es así?" },
      { speaker: "r", text: "No, para nada. En Bolivia, y también en Perú, ese pluscuamperfecto expresa sorpresa: la señora acaba de descubrirlo. Es como decir «resulta que la catedral es toda de luz». Si lo cambiamos, la frase pierde justo eso, el asombro." },
      { speaker: "x", text: "Estoy de acuerdo con Rodrigo. Además, la regla que acordamos fue respetar la voz de cada peregrino. Si el lector español no lo entiende, ponemos una nota del editor al pie, en nuestra voz, y la cita queda como está." },
      { speaker: "l", text: "Vale, me convencéis. ¿Y con los tiempos de hoy? Porque en el diario del chico de Guadalajara pone «hoy salí de Sahagún» y en la edición peninsular yo habría puesto «hoy he salido»." },
      { speaker: "x", text: "Ahí lo mismo: en México contamos lo de hoy con el indefinido. Es su manera de escribir. Lo que sí tenemos que cuidar es la voz del editor: en la introducción de la edición peninsular, Lucía, tú escribes «esta mañana hemos sellado», y en la americana, «esta mañana sellamos». Cada edición con su variedad, pero sin mezclar dentro de una misma voz." },
      { speaker: "l", text: "Perfecto. Pasemos a las cartas, que ahí sí me preocupa más la norma. Nuestra plantilla dice «Le esperamos en el albergue» y «Al peregrino le recibiremos en la puerta». ¿Eso se entiende bien en América?" },
      { speaker: "r", text: "«Le esperamos», sí, sin problema: ese le de cortesía con usted es muy común en cartas en todas partes. Lo otro, «al peregrino le recibiremos», se entiende, pero en Perú diríamos «lo recibiremos». Como la carta va a todos los países, yo usaría lo, que es lo que recomienda la norma para cualquier lector." },
      { speaker: "x", text: "Y hay otra cosa. La plantilla dice «la informamos que su cama está reservada». Eso mezcla dos construcciones. O ponemos «la informamos de que», o «le informamos que». En México usaríamos la segunda, pero cualquiera de las dos está bien, siempre que no se mezclen." },
      { speaker: "l", text: "Buena observación. Y una última: en el correo de grupo escribimos «dile a tus compañeros que traigan saco de dormir». ¿Lo dejamos?" },
      { speaker: "x", text: "En una conversación, sí, es lo que dice casi todo el mundo. En un correo de la asociación, mejor «diles a tus compañeros». Y cuando mandemos el mapa a un grupo, «se lo mandamos», aunque en México muchos digamos «se los mandamos» al hablar." },
      { speaker: "l", text: "Pues entonces queda así: en los diarios, la voz de cada peregrino, con notas si hace falta; en nuestras cartas, la norma culta que sirva para todos, con lo y la, les para el plural y la construcción de informar bien elegida." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin abrir la transcripción. ¿Qué dos tipos de textos revisan y con qué criterio general?",
        exercise: {
          id: "c2-08-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y el criterio general.",
          items: [
            {
              q: "¿Qué revisan Lucía, Rodrigo y Ximena?",
              options: [
                "Los diarios de una antología y la plantilla de cartas de la asociación.",
                "Las normas del albergue y los horarios de las etapas.",
                "El presupuesto de la asociación para el próximo año.",
              ],
              answer: 0,
              why: "Primero comentan los diarios y después la plantilla de cartas.",
            },
            {
              q: "¿Qué criterio general adoptan?",
              options: [
                "Corregir todos los textos según la norma peninsular.",
                "Respetar la voz de los peregrinos y aplicar una norma culta común en las cartas de la asociación.",
                "Publicar solo diarios escritos en España.",
              ],
              answer: 1,
              why: "Lucía lo resume al final: voz de cada peregrino en los diarios, norma culta común en las cartas.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada caso. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-08-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué Rodrigo rechaza cambiar «había sido toda de luz»?",
              options: [
                "Porque la autora no quiere cambios.",
                "Porque el pluscuamperfecto expresa la sorpresa del descubrimiento.",
                "Porque es la forma más antigua.",
              ],
              answer: 1,
              why: "Explica que equivale a «resulta que la catedral es toda de luz».",
            },
            {
              q: "¿Qué cambia Rodrigo en la plantilla de cartas?",
              options: [
                "«Le esperamos» por «lo esperamos».",
                "Nada, porque todo se entiende.",
                "«Al peregrino le recibiremos» por «lo recibiremos».",
              ],
              answer: 2,
              why: "Mantiene el «le» de cortesía y usa «lo» para el complemento directo de persona.",
            },
            {
              q: "¿Qué problema ve Ximena en «la informamos que»?",
              options: [
                "Que mezcla dos construcciones de «informar».",
                "Que es demasiado informal.",
                "Que en México no se usa «informar».",
              ],
              answer: 0,
              why: "Propone «la informamos de que» o «le informamos que».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo se juzga cada forma en la reunión. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-08-escucha-notice",
          type: "match",
          prompt: "Relaciona cada forma citada con la decisión del equipo.",
          pairs: [
            { left: "la catedral había sido toda de luz", right: "se respeta y se explica en nota" },
            { left: "hoy salí de Sahagún", right: "se mantiene en el diario mexicano" },
            { left: "Le esperamos en el albergue", right: "le de cortesía: se mantiene" },
            { left: "al peregrino le recibiremos", right: "se cambia por «lo» en la carta común" },
            { left: "dile a tus compañeros", right: "en un correo oficial, «diles»" },
          ],
          why: "En los diarios manda la voz de quien escribe; en las cartas, la norma culta común.",
        },
      },
    ],
  },
  reading: {
    title: "Diarios del Camino: una nota sobre cómo hemos editado",
    genre: "Presentación editorial de una antología",
    frame: "Presentación de Lucía Álvarez para la antología «Diarios del Camino», publicada por una asociación de acogida a peregrinos de León. Personas, entidad y diarios son ficticios.",
    text: [
      "Cada año pasan por nuestro albergue de León miles de peregrinos, y muchos dejan algo escrito: una frase en el libro de visitas, una carta de agradecimiento, a veces un cuaderno entero que nos envían meses después desde su casa. Esta antología reúne cuarenta de esos textos, escritos por personas de once países. Antes de publicarlos tuvimos que tomar decisiones que al principio parecían menores y que acabaron definiendo el libro: qué hacer con un tiempo verbal que en León suena raro, cuándo cambiar un pronombre y cuándo dejarlo.",
      "La primera decisión fue la más importante: respetar la voz de quien escribe. Un diario no es un formulario, y su valor está precisamente en que cada peregrino cuenta el Camino a su manera. Por eso, cuando Javier, un estudiante de Guadalajara, escribe «hoy salí de Sahagún con lluvia y llegué empapado a El Burgo Ranero», no hemos cambiado nada. En gran parte de América, como en Canarias, Galicia o Asturias, lo que pasó hoy se cuenta con el indefinido. Un lector de León habría escrito «hoy he salido», pero ninguna de las dos formas es mejor que la otra; son variedades distintas del mismo idioma.",
      "Más debate nos costó el diario de Elena Choque, una maestra de Cochabamba. Al llegar a la plaza de la catedral, escribe: «¡La catedral había sido toda de luz!». Nuestra primera correctora, de Valladolid, lo marcó como error de tiempo, y es comprensible: en el español de España, el pluscuamperfecto sitúa un hecho antes de otro hecho pasado, y la frase parece decir que la catedral ya no es luminosa. Pero en zonas andinas de Bolivia, Perú y Ecuador ese mismo tiempo puede expresar la sorpresa de quien descubre algo en ese instante. Elena no se equivocó: se asombró. Mantuvimos la frase tal cual y añadimos una nota del editor que lo explica a los lectores que no conocen ese uso.",
      "Algo parecido ocurre con el testimonio de Rodrigo Mamani, hospitalero voluntario de Arequipa, que cuenta que su abuelo «había trabajado en las minas de Puno, eso decía mi mamá». Ahí el pluscuamperfecto señala, además, que Rodrigo no lo vio con sus propios ojos: lo sabe porque se lo contaron. Ese matiz, que en otras variedades necesitaría un «según parece» o un «dicen que», está ya dentro del verbo. Corregirlo habría sido quitarle información al texto.",
      "Cada diario, por tanto, conserva su variedad. Lo que sí hemos unificado es nuestra propia voz. El libro tiene dos ediciones: una para lectores de España y otra para lectores de América. En la introducción y en las notas de la edición peninsular escribimos «esta mañana hemos sellado la credencial diez mil»; en la americana, «esta mañana sellamos». Lo que no hacemos nunca es mezclar las dos opciones dentro de una misma voz, porque esa mezcla sí parece un descuido.",
      "La segunda parte del trabajo fue revisar las cartas que la asociación envía a los peregrinos antes y después del viaje. Aquí la situación es la contraria: no hay una voz ajena que respetar, sino una sola carta que van a leer personas de todo el mundo. Necesitábamos, por tanto, una norma culta común. Mantuvimos el «le» de cortesía en fórmulas como «Le esperamos en el albergue», que se usa y se acepta en todas partes. En cambio, sustituimos «al peregrino le recibiremos en la puerta» por «lo recibiremos», porque, aunque en León el leísmo de persona masculino está admitido y lo usamos al hablar, en la mayor parte de América resulta extraño, y la norma recomienda el uso de «lo» para cualquier lector.",
      "Revisamos también los plurales. En los correos de grupo decíamos «dile a tus compañeros que traigan saco de dormir», que es lo que casi todos decimos en una conversación, pero que la escritura cuidada evita: ahora escribimos «diles». Y en «el mapa se lo mandamos a los peregrinos» resistimos la tentación de escribir «se los», muy frecuente en el habla de buena parte de América, porque en la escritura cuidada el plural de los destinatarios no se marca en el pronombre.",
      "Por último, encontramos en la plantilla una frase que llevaba años sin que nadie la cuestionara: «la informamos que su cama está reservada». El verbo «informar» admite dos construcciones, «la informamos de que» y «le informamos que», y las dos son correctas; lo que no se recomienda es mezclarlas. Elegimos la primera para la edición peninsular y la segunda para la americana, que es la más habitual allí. Ninguna de estas decisiones convierte una variedad en la buena. Solo intentan que cada texto le hable a su lector como ese lector espera, y que la voz de los peregrinos llegue intacta.",
    ],
    glossary: [
      { es: "el libro de visitas", note: "cuaderno donde los visitantes dejan sus comentarios" },
      { es: "empapado", note: "completamente mojado" },
      { es: "intacto", note: "sin cambios ni daños" },
    ],
    tasks: [
      {
        id: "c2-08-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la presentación.",
        items: [
          {
            q: "¿Por qué la primera correctora marcó la frase de Elena Choque?",
            options: [
              "Porque en el español de España ese pluscuamperfecto parece situar un hecho antes de otro pasado.",
              "Porque Elena escribió mal el nombre de la catedral.",
              "Porque la frase era demasiado larga.",
            ],
            answer: 0,
            why: "El tercer párrafo explica la lectura peninsular del pluscuamperfecto.",
          },
          {
            q: "¿Qué añade el pluscuamperfecto en el testimonio de Rodrigo Mamani?",
            options: [
              "Que el abuelo sigue trabajando.",
              "Que la información no fue presenciada por Rodrigo.",
              "Que Rodrigo se sorprende.",
            ],
            answer: 1,
            why: "Lo sabe porque se lo contaron; el matiz está en el verbo.",
          },
          {
            q: "¿Por qué el criterio de las cartas es distinto del de los diarios?",
            options: [
              "Porque las cartas son más largas.",
              "Porque las cartas las escriben voluntarios.",
              "Porque en las cartas no hay voz ajena que respetar y las leen personas de todo el mundo.",
            ],
            answer: 2,
            why: "El sexto párrafo justifica una norma culta común.",
          },
        ],
      },
      {
        id: "c2-08-lectura-decisiones",
        type: "match",
        prompt: "Relaciona cada forma con la decisión que explica la autora.",
        pairs: [
          { left: "hoy salí de Sahagún", right: "se respeta: indefinido para hoy en su variedad" },
          { left: "la catedral había sido toda de luz", right: "se respeta con nota del editor" },
          { left: "al peregrino le recibiremos", right: "se cambia a «lo» en la carta común" },
          { left: "dile a tus compañeros", right: "se cambia a «diles» en el correo" },
          { left: "la informamos que", right: "se elige una de las dos construcciones" },
        ],
      },
      {
        id: "c2-08-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión de la presentación con argumentos propios.",
        items: [
          {
            prompt: "La asociación cambia «al peregrino le recibiremos» por «lo recibiremos», aunque en León el leísmo de persona masculino está admitido. Explica en 70–90 palabras por qué lo hace y si te parece una decisión acertada o excesiva.",
            model: "Lo hace porque la carta no tiene un único público: la leen personas de once países, y en la mayor parte de América el leísmo resulta extraño. «Lo» es la forma que la norma recomienda en todas partes, mientras que «le» solo está admitido. Me parece acertada: no condena el uso leonés, que sigue vivo en la conversación, sino que elige la opción menos marcada para un texto común. Sería excesiva si se corrigieran también los diarios de peregrinos leoneses.",
            checklist: [
              "Explico el motivo de la decisión.",
              "Distingo «admitido» de «recomendado».",
              "Tomo posición y la justifico.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el texto describe las variedades sin jerarquizarlas y separa la voz de los peregrinos de la de la asociación.",
      items: [
        { quote: "ninguna de las dos formas es mejor que la otra; son variedades distintas del mismo idioma", note: "Descripción sin jerarquía." },
        { quote: "Elena no se equivocó: se asombró.", note: "Interpretación evidencial del pluscuamperfecto." },
        { quote: "Lo que no hacemos nunca es mezclar las dos opciones dentro de una misma voz", note: "Coherencia de la voz del editor." },
        { quote: "en la escritura cuidada el plural de los destinatarios no se marca en el pronombre", note: "Norma escrita para «se lo»." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el texto, adaptación entre variedades y escritura breve. Termina recuperando las clases de las semanas anteriores de C2.",
    exercises: [
      {
        id: "c2-08-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de la correspondencia según la norma culta escrita.",
        items: [
          {
            words: ["La", "informamos", "de", "que", "su", "cama", "está", "reservada."],
            why: "«Informar a alguien de algo»: complemento directo de persona y «de que».",
          },
          {
            words: ["Diles", "a", "tus", "compañeros", "que", "traigan", "la", "credencial."],
            why: "Complemento indirecto plural: «diles».",
          },
          {
            words: ["El", "horario", "se", "lo", "enviamos", "a", "todos", "los", "grupos."],
            why: "«Lo» concuerda con «el horario»; el plural de los grupos no se marca.",
          },
        ],
      },
      {
        id: "c2-08-edicion",
        type: "context",
        prompt: "Elige la versión adecuada para cada edición o voz.",
        items: [
          {
            context: "Introducción de la edición americana, en la voz de la asociación.",
            q: "¿Qué versión eliges?",
            options: [
              "Esta mañana hemos recibido el diario número cuarenta.",
              "Esta mañana recibimos el diario número cuarenta.",
              "Esta mañana habíamos recibido el diario número cuarenta.",
            ],
            answer: 1,
            why: "En la edición americana, el indefinido cubre lo ocurrido hoy.",
          },
          {
            context: "Carta de bienvenida para un peregrino de cualquier país, al que se trata de usted.",
            q: "¿Qué fórmula eliges?",
            options: [
              "Te esperamos con los brazos abiertos en el albergue.",
              "Os esperamos con los brazos abiertos en el albergue.",
              "Le esperamos con los brazos abiertos en el albergue.",
            ],
            answer: 2,
            why: "El «le» de cortesía con usted es aceptado en todas partes; «te» rompe el trato de usted y «os» es plural peninsular.",
          },
          {
            context: "Testimonio de una peregrina de Potosí: «¡El Camino había sido duro, pero lindo!». La edición es peninsular.",
            q: "¿Qué haces?",
            options: [
              "Lo cambio a «el Camino ha sido duro, pero lindo».",
              "Lo elimino porque confunde.",
              "Lo mantengo y, si hace falta, explico su valor de sorpresa en una nota.",
            ],
            answer: 2,
            why: "Es la voz de la autora; la aclaración va en la voz del editor.",
          },
        ],
      },
      {
        id: "c2-08-adaptar",
        type: "transform",
        prompt: "Reescribe cada frase según la instrucción, sin cambiar nada más.",
        items: [
          {
            source: "Hoy hemos acogido a cuarenta peregrinos y les hemos dado la cena.",
            instruction: "Pásala a la variedad que usa el indefinido para los hechos de hoy.",
            answers: ["Hoy acogimos a cuarenta peregrinos y les dimos la cena."],
            why: "El indefinido cubre el día de hoy en gran parte de América.",
          },
          {
            source: "A los peregrinos les vimos llegar muy cansados.",
            instruction: "Ajústala a la norma culta escrita cambiando solo el pronombre.",
            answers: ["A los peregrinos los vimos llegar muy cansados."],
            why: "Leísmo de persona en plural: desaconsejado. Complemento directo: «los».",
          },
          {
            source: "Las llaves se las dimos a los hospitaleros y el recibo también se los firmamos.",
            instruction: "Corrige solo el pronombre que no concuerda con su referente.",
            answers: ["Las llaves se las dimos a los hospitaleros y el recibo también se lo firmamos."],
            why: "«El recibo» es singular: «se lo».",
          },
        ],
      },
      {
        id: "c2-08-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe la nota del editor (40–60 palabras) que acompañará en la edición peninsular la frase «¡La catedral había sido toda de luz!». Debe explicar el uso sin presentarlo como error.",
            model: "Nota del editor: En zonas andinas de Bolivia, Perú y Ecuador, el pluscuamperfecto puede expresar la sorpresa de quien descubre algo en ese momento. La autora no habla de un pasado anterior: cuenta que, al llegar a la plaza, comprobó con asombro que la catedral era toda de luz. Hemos respetado su forma de escribir.",
            checklist: [
              "Explico el valor de sorpresa.",
              "No califico la forma como error.",
              "La nota está en la voz del editor y la cita no cambia.",
            ],
          },
          {
            prompt: "Reescribe este correo de grupo según la norma culta escrita y explica en una frase cada cambio: «Hola a todos: la informamos que mañana el albergue abre a las once. Dile a tus compañeros que el desayuno se los dejamos preparado».",
            model: "«Hola a todos: les informamos que mañana el albergue abre a las once. Diles a tus compañeros que el desayuno se lo dejamos preparado». Cambios: «les informamos que», porque los destinatarios son varios y elijo la construcción sin «de»; «diles», porque el indirecto es plural; «se lo», porque «el desayuno» es singular.",
            checklist: [
              "Elijo una sola construcción de «informar».",
              "Uso «les» para el plural.",
              "Hago concordar «lo» con su referente.",
            ],
          },
        ],
      },
      {
        id: "c2-08-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las semanas anteriores de C2 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G209 (correlaciones temporales y cambios de plano). Estímulo, del diario de un peregrino: «Me dijo la hospitalera que el albergue cerraba a las diez y que ya ha cerrado». Explica qué falla en la correlación y reescribe la frase.",
            model: "La frase empieza en un plano pasado («me dijo», «cerraba») y salta sin motivo al presente con «ha cerrado». Si el cierre ya había ocurrido cuando ella habló: «me dijo que el albergue cerraba a las diez y que ya había cerrado». Si se quiere actualizar la información, hay que marcar el cambio de plano: «…y ahora, de hecho, ya ha cerrado».",
            checklist: [
              "Identifico el salto de plano sin marca.",
              "Propongo una correlación coherente.",
            ],
          },
          {
            prompt: "Recuperación de la clase G214 (gramaticalidad y norma). Estímulo: un corrector marca «A Juan le vi en la plaza» como «agramatical». Corrige el juicio del corrector.",
            model: "No es agramatical, porque es una forma que producen con naturalidad muchos hablantes nativos, sobre todo del centro y el norte de España. Además, la norma la admite: es leísmo de persona masculino singular. Se puede preferir «lo vi» en un texto para todo el mundo hispánico, pero no hay error que marcar.",
            checklist: [
              "Distingo gramaticalidad y norma.",
              "Doy el juicio normativo correcto.",
            ],
          },
          {
            prompt: "Recuperación de la clase G215 (tratamientos). Estímulo, carta para peregrinos argentinos: «Os esperamos en el albergue; si tenéis dudas, escribidnos». Reescríbela para ese público y explica qué cambias.",
            model: "«Los esperamos en el albergue; si tienen dudas, escríbannos». En América el plural es «ustedes», tanto de confianza como de respeto, así que cambio «os» por «los», «tenéis» por «tienen» y «escribidnos» por «escríbannos». No uso voseo porque es una carta para un grupo.",
            checklist: [
              "Uso ustedes de forma coherente.",
              "Explico por qué no sirve vosotros.",
            ],
          },
          {
            prompt: "Recuperación de la clase G213 (ambigüedad accidental). Estímulo: «La hospitalera le dijo a la peregrina que había perdido su credencial». Explica las dos lecturas y reescribe la frase para cada una.",
            model: "No sabemos quién perdió la credencial ni de quién es: puede ser la hospitalera o la peregrina. Si la perdió la peregrina: «La hospitalera le dijo a la peregrina: “Has perdido tu credencial”», o «…que esta había perdido la credencial». Si la perdió la hospitalera: «La hospitalera le contó a la peregrina que ella misma había perdido la credencial de esta».",
            checklist: [
              "Identifico el sujeto y el posesivo ambiguos.",
              "Escribo una versión para cada lectura.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la entrada «Tiempos y pronombres» de la guía de correspondencia y edición de la asociación (400–520 palabras). Explica a los voluntarios qué hacer con el indefinido de hoy y con el pluscuamperfecto andino en los diarios, cómo escribir la voz de la asociación en cada edición y qué pronombres usar en las cartas comunes.",
    context: "La leerán voluntarios de España y de América sin formación lingüística. Puedes nombrar fenómenos, pero explícalos con ejemplos del Camino. Usa los casos de esta semana o invéntalos con la misma lógica.",
    steps: [
      "Haz una tabla con tres columnas: caso, decisión y ejemplo. Incluye un indefinido de hoy, un pluscuamperfecto de sorpresa, un «le» de cortesía, un leísmo que se cambia y una construcción de «informar».",
      "Decide el orden: principio general (voz ajena y voz propia), diarios, voz de la asociación por edición y cartas comunes.",
      "Redacta sin copiar el modelo. Cita cada ejemplo entre comillas y explica la decisión justo después.",
      "Revisa la entrada con la lista de control: corrige cualquier «les» o «se los» mal concordado y comprueba que tu propia voz no mezcla «he salido» y «salí» para hoy.",
    ],
    useLanguage: [
      "en su variedad, lo ocurrido hoy se cuenta con…",
      "el pluscuamperfecto expresa aquí sorpresa / información no presenciada",
      "está admitido / se desaconseja / no se acepta",
      "la informamos de que… / le informamos que…",
      "diles a…; se lo enviamos a…",
      "respetar la voz; nota del editor",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Esta entrada responde a las dudas que más se repiten cuando editamos diarios o escribimos a los peregrinos. El principio es doble. En los diarios manda la voz de quien escribe: no cambiamos un tiempo ni un pronombre porque en León se diga de otra manera. En los textos de la asociación, en cambio, escribimos con una norma culta que sirva a cualquier lector. Un ejemplo lo aclara. Si un peregrino de Puebla escribe «hoy llegué a Astorga», lo dejamos así, porque en su variedad lo ocurrido hoy se cuenta con el indefinido; si lo escribimos nosotros en la edición peninsular, ponemos «hoy hemos llegado».",
    ],
    checklist: [
      "Distingo la voz de los peregrinos de la voz de la asociación.",
      "Explico el reparto regional entre «he salido» y «salí» sin jerarquizarlo.",
      "Explico el pluscuamperfecto de sorpresa o de información no presenciada con un ejemplo.",
      "Uso con precisión «admitido», «desaconsejado» y «no aceptado».",
      "Mis ejemplos de cartas usan «les», «se lo» e «informar» según la norma escrita.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Explicar las variedades a los voluntarios",
        prompt: "Eres Lucía. En unos cuatro minutos, explica a los voluntarios nuevos por qué la antología respeta «hoy salí» y «había sido toda de luz» y por qué, en cambio, las cartas de la asociación siguen una norma común con «lo», «les» y «se lo».",
        prep: [
          "Anota dos ejemplos de diarios y dos de cartas.",
          "Prepara una frase que resuma la diferencia entre voz ajena y voz propia.",
        ],
        seconds: 240,
        model: "Os cuento cómo hemos trabajado. En los diarios, cada peregrino escribe como habla. Javier, de Guadalajara, pone «hoy salí de Sahagún», y en México eso es lo normal para lo que pasó hoy. Elena, de Cochabamba, escribe «¡la catedral había sido toda de luz!», y con eso nos cuenta su sorpresa. No lo tocamos. Pero cuando escribimos nosotros…",
        selfCheck: [
          "Pronuncio con claridad la -s de «les» y «los».",
          "No presento ninguna variedad como incorrecta.",
          "Explico la diferencia entre la voz ajena y la propia.",
        ],
      },
      {
        title: "Mediar con una correctora",
        prompt: "La correctora de Valladolid insiste: «Si no corregimos “había sido”, los lectores pensarán que el libro tiene errores». Respóndele con respeto, hazle dos preguntas para entender su preocupación, explica el uso andino y propón una solución.",
        prep: [
          "Prepara una frase que reconozca su preocupación.",
          "Ten a mano la explicación del valor de sorpresa y la idea de la nota del editor.",
        ],
        seconds: 150,
        model: "Te entiendo, y es verdad que a un lector de aquí le puede chocar. ¿Te preocupa la imagen de la asociación o que el lector no entienda la frase? ¿Has visto alguna vez ese uso en textos bolivianos? Allí el pluscuamperfecto expresa sorpresa: Elena descubre que la catedral es toda de luz. Si lo cambiamos, perdemos su asombro. Pongamos una nota al pie que lo explique.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Explico el uso con un ejemplo.",
          "Propongo una solución concreta.",
        ],
      },
      {
        title: "Leer y adaptar una carta",
        prompt: "Lee en voz alta esta carta y después adáptala oralmente a la norma común: «Estimada señora: la informamos que hoy le hemos reservado cama. A sus compañeras les esperamos mañana; el mapa se los mandamos por correo».",
        prep: [
          "Marca los tres puntos que vas a cambiar.",
          "Practica la -s final de «les» y «los».",
        ],
        seconds: 100,
        selfCheck: [
          "Cambio «la informamos que» por una construcción coherente.",
          "Cambio «les esperamos» y «se los» según la norma escrita.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu tabla de casos y una duda concreta. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Pregunta",
        task: "Pregúntale a tu profesor cómo cuenta lo que hizo esta mañana: ¿«he desayunado» o «desayuné»? Pídele que te diga si en su variedad hay diferencia entre «hoy» y «este año».",
        phrases: ["¿Tú dirías «hoy he…» o «hoy…»?", "¿Y para algo de este año?"],
      },
      {
        move: "Interpreta",
        task: "Lee a tu profesor dos frases con pluscuamperfecto, una de anterioridad y otra de sorpresa, y explica la diferencia.",
        phrases: ["En la primera, el hecho es anterior a…", "En la segunda, quien habla acaba de descubrir…"],
      },
      {
        move: "Corrige",
        task: "Lleva tres frases de cartas con «le», «les» o «se lo» y pide a tu profesor que juzgue tus correcciones.",
        phrases: ["Aquí cambié «le» por «les» porque…", "¿Esto está admitido o solo se tolera?"],
      },
      {
        move: "Compara",
        task: "Compara con tu profesor cómo se dice «todavía no ha llegado» en tu variedad y en la suya.",
        phrases: ["Donde yo vivo se dice…", "¿Te suena raro…?"],
      },
    ],
    bring: "Tu entrada de la guía revisada, la tabla de casos y, si quieres, la grabación de tu explicación a los voluntarios.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "Un peregrino de Bogotá escribe en su diario: «Esta mañana crucé el puente de Hospital de Órbigo». ¿Qué juicio es correcto?",
        options: [
          "Es un error: con «esta mañana» hay que usar el compuesto.",
          "Es normal en su variedad: el indefinido cubre también el día de hoy.",
          "Solo es correcto en textos literarios.",
        ],
        answer: 1,
        why: "En gran parte de América el indefinido se usa para hechos de hoy.",
      },
      {
        type: "choice",
        q: "¿Cuál de estas frases no acepta la norma culta?",
        options: [
          "Al hospitalero le encontramos en la cocina.",
          "Le saludamos atentamente.",
          "El bastón le olvidé en el tren.",
        ],
        answer: 2,
        why: "Leísmo de cosa: no aceptado. Las otras son admitidas.",
      },
      {
        type: "listen",
        q: "Escucha a la peregrina. ¿Qué expresa el pluscuamperfecto?",
        options: [
          "La sorpresa de descubrir algo en ese momento.",
          "Un hecho anterior a otro hecho pasado.",
          "Un deseo que no se cumplió.",
        ],
        answer: 0,
        why: "Uso andino de descubrimiento: ≈ resulta que está muy cerca.",
        audio: "¡Ay, la plaza mayor había estado aquí nomás, al lado del albergue!",
        voice: "es-PE-f",
      },
      {
        type: "gap",
        q: "A los voluntarios de Lima ___ enviamos ayer el calendario de turnos.",
        answers: [["les"]],
        hint: "Complemento indirecto plural en la escritura cuidada.",
        why: "Complemento indirecto plural: «les».",
      },
      {
        type: "gap",
        q: "El calendario de turnos se ___ enviamos ayer a los voluntarios de Lima.",
        answers: [["lo"]],
        hint: "Concuerda con «el calendario», no con los voluntarios.",
        why: "El plural de los destinatarios no se marca en el pronombre.",
      },
      {
        type: "transform",
        source: "La informamos que la recogeremos en la estación de autobuses.",
        instruction: "Corrige la construcción de «informar» manteniendo «la» como pronombre de la persona informada.",
        answers: ["La informamos de que la recogeremos en la estación de autobuses."],
        why: "Con complemento directo de persona, «informar» lleva «de que».",
      },
      {
        type: "error",
        sentence: "A la hospitalera la pedimos más mantas para el dormitorio.",
        answers: ["A la hospitalera le pedimos más mantas para el dormitorio."],
        why: "«Pedir algo a alguien»: complemento indirecto. «La» es laísmo.",
      },
      {
        type: "error",
        sentence: "Nota del editor (edición peninsular): Esta mañana he recibido el último diario y lo leí antes de comer.",
        answers: ["Nota del editor (edición peninsular): Esta mañana he recibido el último diario y lo he leído antes de comer."],
        why: "En una misma voz peninsular, los hechos de hoy van con el compuesto; no se mezcla.",
      },
      {
        type: "order",
        words: ["Al", "peregrino", "lo", "llamamos", "por", "teléfono", "anoche."],
        why: "«Llamar» por teléfono: complemento directo, «lo».",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un voluntario por qué la asociación respeta «¡había sido enorme la catedral!» en el diario de una peregrina de Oruro, pero cambia «al peregrino le recibiremos» en sus propias cartas.",
        model: "Son dos situaciones distintas. El diario es la voz de la peregrina: en zonas andinas, ese pluscuamperfecto expresa la sorpresa de quien descubre algo, y cambiarlo borraría su asombro. Por eso se respeta y, si hace falta, se explica en una nota. La carta, en cambio, es la voz de la asociación y la leen personas de muchos países. Aunque el leísmo de persona masculino está admitido, en América resulta extraño, así que usamos «lo», que la norma recomienda para cualquier lector.",
        checklist: [
          "Distingo voz ajena y voz propia.",
          "Explico el valor de sorpresa del pluscuamperfecto.",
          "Explico por qué se prefiere «lo» en la carta común.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Reconozco el reparto regional entre «he caminado» y «caminé» para los hechos de hoy y mantengo coherente mi propia voz.",
      "Interpreto el pluscuamperfecto andino de sorpresa o de información no presenciada y lo respeto en la cita.",
      "Sitúo «le», «lo» y «la» en la escala de la norma culta: admitido, desaconsejado o no aceptado.",
      "Uso «les», «se lo», «informar», «ayudar» y «llamar» según la norma culta escrita.",
    ],
    review: [
      "Dentro de dos días, tapa la columna derecha de la tabla «De más aceptado a no aceptado» y reconstruye el juicio de cada ejemplo.",
      "Dentro de una semana, escribe cinco frases sobre lo que hiciste hoy en tu variedad y en la otra.",
      "En la próxima clase, pide a tu profesor que revise los ejemplos de cartas de tu guía.",
    ],
  },
  related: [
    { path: "/gramatica/variacion-regional-del-pasado-perfecto-y", label: "Clase: Variación regional del pasado perfecto y evidencialidad" },
    { path: "/gramatica/leismo-y-regimen-pronominal-en-variedades", label: "Clase: Leísmo y régimen pronominal en variedades cultas" },
  ],
};
