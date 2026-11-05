import type { Module } from "../../types";

/**
 * C1 · semana 9 · Autoestudio espejo de G182 (se medio, se reflexivo, se
 * dativo ético) y G183 (pasiva y estructuras impersonales con foco
 * discursivo). Repaso autónomo con un centro ficticio de rescate de fauna
 * cerca de San José. Audio mediante síntesis; sin acreditación regional.
 */
export const c1w09: Module = {
  id: "c1-09",
  level: "c1",
  week: 9,
  kind: "core",
  title: "El manigordo se recuperó y volvió al bosque",
  subtitle: "Repaso de los valores de «se» y de cómo elegir activa, pasiva o impersonal según lo que el texto quiere poner en primer plano",
  stop: {
    place: "San José",
    country: "Costa Rica",
  },
  minutes: 120,
  newObjectives: [
    "c1.gram.g182",
    "c1.gram.g183",
    "c1.voc.w09-rescate-fauna",
    "c1.pron.w09-foco-final",
    "c1.lis.w09-preparar-comunicado",
    "c1.read.w09-reportaje-rescate",
    "c1.wri.w09-comunicado-prensa",
    "c1.spk.w09-entrevista-radio",
    "c1.fun.w09-informar-sin-agente",
    "c1.disc.w09-continuidad-tema",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo identificar qué aporta cada «se» (reflexivo, recíproco, medio, pronominal, aspectual, ético o de interés) y elegir entre activa, pasiva con «ser», «se» u otra estructura impersonal según qué es tema y qué es información nueva.",
    steps: [
      "Repasa en la teoría el mapa de los valores de «se» con sus pruebas y los recursos para ocultar o destacar al agente.",
      "Practica con frases sobre animales rescatados, liberaciones y avisos de un centro de fauna costarricense.",
      "Escucha a una voluntaria y a un veterinario preparar un comunicado y lee un reportaje sobre el centro.",
      "Redacta el comunicado de prensa, revísalo y cuenta la liberación en una entrevista de radio.",
    ],
  },
  theory: {
    intro: "Las dos clases de esta semana comparten protagonista: la palabra «se». En la primera viste que puede significar cosas muy distintas, desde «a sí mismo» hasta un matiz afectivo. En la segunda, que sirve para borrar al agente, junto con otras estructuras. Aquí lo repasas todo con un hilo común: cuando cuentas lo que pasa en un centro de rescate, eliges constantemente quién aparece en la frase y quién se queda fuera.",
    parts: [
      {
        heading: "El mapa de «se»: reflexivo, recíproco y medio",
        body: [
          "Con valor reflexivo, el sujeto hace la acción sobre sí mismo: «El tucán se limpia las plumas». Puedes comprobarlo añadiendo «a sí mismo». Con valor recíproco, dos o más sujetos actúan el uno sobre el otro: «Los monos se despiojan» (el uno al otro). A veces la misma frase admite las dos lecturas y el contexto decide.",
          "El «se» medio o anticausativo presenta un cambio que le ocurre al sujeto sin que nadie lo provoque a la vista: «La jaula se abrió», «El río se desbordó», «El veterinario se preocupó». No admite un agente con «por» ni la expresión «a propósito», pero sí «solo» o «sola»: «La puerta se cerró sola». Si le añades un dativo de la persona afectada, obtienes el llamado «se» accidental, que repasaste en B2: «Se me abrió la jaula», «Se nos murió una iguana».",
          "Para no confundir estos valores con el «se» pasivo o impersonal, piensa en si hay un agente humano implícito. En «Se abrió la jaula para soltar al ave», alguien la abrió con intención: es pasiva refleja. En «La jaula se abrió con el viento», nadie la abrió: es medio.",
        ],
        table: {
          caption: "Pruebas para cada valor",
          head: ["Valor", "Ejemplo", "Prueba"],
          rows: [
            ["reflexivo", "La garza se rasca el cuello.", "admite «a sí misma»"],
            ["recíproco", "Las dos crías se lamen.", "admite «la una a la otra»"],
            ["medio", "El cable se soltó.", "admite «solo»; no admite «por alguien» ni «a propósito»"],
            ["accidental", "Se me soltó el cable.", "medio + dativo de la persona afectada"],
            ["pasivo (B2)", "Se soltaron tres aves ayer.", "agente humano implícito, con intención"],
          ],
        },
        mistakes: [
          {
            wrong: "La puerta del recinto se abrió a propósito.",
            right: "Alguien abrió la puerta del recinto a propósito. / La puerta del recinto se abrió sola.",
            why: "El «se» medio no admite intención. Si hubo un agente que actuó a propósito, nómbralo o usa una pasiva.",
          },
          {
            wrong: "La rama se rompió por el mono.",
            right: "El mono rompió la rama. / La rama se rompió con el peso del mono.",
            why: "El «se» medio no admite «por + agente». Una causa no humana puede ir con «con» o «por» + cosa.",
          },
        ],
      },
      {
        heading: "Verbos pronominales, «se» aspectual y dativo ético",
        body: [
          "Muchos verbos cambian de significado con el pronombre: ir / irse (marcharse), dormir / dormirse (empezar a dormir), llevar / llevarse (tomar algo y quedárselo), quedar / quedarse (permanecer), parecer / parecerse a, negar / negarse a, ocurrir / ocurrírsele algo a alguien. Otros solo existen en forma pronominal: quejarse, arrepentirse, atreverse, jactarse.",
          "El «se» aspectual subraya que la acción se completa: «El perezoso comió hojas» (actividad sin límite) frente a «El perezoso se comió todas las hojas del guarumo» (acción completa). Por eso necesita un complemento delimitado: «*Se comió hojas» suena extraño. Funciona con verbos de consumo y de percepción como comer, beber, leer, ver, saber, aprender: «Se leyó el informe entero».",
          "El dativo ético añade la implicación afectiva del hablante: «No te me escapes», «Que no se me asuste el pichón», le dice una veterinaria a un ave. No admite duplicación con «a mí»: «*No te me escapes a mí» suena forzado. El dativo de interés, en cambio, indica a quién afecta realmente el hecho y sí la admite: «Se me enfermó la lapa (a mí, que la cuido)». El orden de los pronombres es siempre te + me, se + me, se + te.",
        ],
        table: {
          caption: "Con y sin pronombre",
          head: ["Sin pronombre", "Con pronombre", "Qué cambia"],
          rows: [
            ["El ave durmió seis horas.", "El ave se durmió enseguida.", "duración / inicio"],
            ["Llevamos la cría al centro.", "El mono se llevó una banana.", "trasladar / tomar y quedárselo"],
            ["Bebió agua.", "Se bebió toda el agua del cuenco.", "actividad / acción completa"],
            ["El cuidador negó el error.", "El cuidador se negó a firmar.", "decir que no es cierto / rechazar hacer algo"],
          ],
        },
        examples: [
          { es: "A la nueva voluntaria se le ocurrió grabar los cantos de las aves.", note: "«Ocurrírsele algo a alguien»: tener una idea." },
          { es: "No te me pongas nervioso, que solo es una revisión.", note: "Dativo ético: el hablante se implica afectivamente." },
          { es: "El oso hormiguero se terminó la ración en diez minutos.", note: "«Se» aspectual con complemento delimitado." },
        ],
        mistakes: [
          {
            wrong: "El perezoso se comió hojas.",
            right: "El perezoso comió hojas. / El perezoso se comió todas las hojas que le dimos.",
            why: "El «se» aspectual pide un complemento delimitado (todas las hojas, la ración, el plato).",
          },
          {
            wrong: "Me te escapaste ayer.",
            right: "Te me escapaste ayer.",
            why: "Orden fijo de los pronombres: «te» antes de «me».",
          },
        ],
      },
      {
        heading: "Activa, pasiva o «se»: qué es tema y qué es novedad",
        body: [
          "En español la información conocida (el tema) suele ir al principio de la oración y la nueva (el rema) al final. Por eso la voz se elige pensando en el texto, no en la frase aislada. Si llevas tres oraciones hablando de un manigordo, lo natural es que siga siendo el sujeto: «El manigordo llegó al centro en enero. Se recuperó en cuatro meses. El viernes fue liberado en la Zona Protectora El Rodeo». La pasiva con «ser» permite mantener al animal como tema aunque otro haga la acción.",
          "El complemento agente con «por» solo se añade cuando el agente es información nueva e importante: «La liberación fue autorizada por el Ministerio de Ambiente». Si el agente es obvio o irrelevante, sobra: «*Las jaulas son limpiadas por los cuidadores cada mañana» suena a traducción. En noticias y avisos, el exceso de pasiva con «ser» es un calco del inglés: «fue anunciado», «es requerido», «es esperado que». El español prefiere «se anunció», «se requiere», «se espera que» o la activa.",
        ],
        table: {
          caption: "Calco y alternativa natural",
          head: ["Calco frecuente", "Alternativa", "Por qué"],
          rows: [
            ["Fue anunciado por el centro que…", "El centro anunció que… / Se anunció que…", "el agente no es novedad"],
            ["Es requerido el uso de guantes.", "Se requieren guantes. / Hay que usar guantes.", "aviso práctico"],
            ["Es esperado que la cría sobreviva.", "Se espera que la cría sobreviva.", "«ser esperado que» no es natural"],
            ["Los visitantes son pedidos que no alimenten a los animales.", "Se pide a los visitantes que no alimenten a los animales.", "«pedir» no admite esa pasiva"],
          ],
        },
        mistakes: [
          {
            wrong: "Fue informado por la dirección que el sendero cerrará el lunes.",
            right: "La dirección informó de que el sendero cerrará el lunes. / Se informó de que el sendero cerrará el lunes.",
            why: "Pasiva calcada del inglés. Si la dirección es el agente obvio, la activa o el «se» son más naturales.",
          },
        ],
        tip: "Antes de elegir la voz, subraya en tu texto de qué estás hablando. Ese elemento debería ser el sujeto o ir al principio de la oración.",
      },
      {
        heading: "Otras formas de no nombrar al agente",
        body: [
          "Además del «se», el español tiene varios recursos impersonales con matices distintos. La tercera persona del plural («Dicen que va a llover», «Llaman a la puerta») excluye al hablante y puede referirse a una sola persona. «Uno» o «una» incluye al hablante y es la única opción con verbos pronominales: «Uno se acostumbra al ruido de los monos», nunca «*se se acostumbra». El «tú» genérico es coloquial: «Aquí te piden el pasaporte en la entrada». También sirven «la gente», «hay que», «se debe» o «es necesario» + infinitivo, la nominalización («la reapertura del sendero») y «estar» + participio, que presenta un resultado y no un proceso: «El sendero está cerrado».",
          "Cuidado con el «se» y las personas. «Se liberaron los monos» puede entenderse como que los monos se liberaron a sí mismos. Para dejar claro que alguien los liberó, usa «se» + «a»: «Se liberó a los monos», con el verbo en singular, o la pasiva con «ser»: «Los monos fueron liberados».",
        ],
        examples: [
          { es: "Dicen que en la zona de Santa Ana han visto un puma.", note: "Tercera persona del plural: el hablante no se incluye." },
          { es: "Cuando una trabaja con animales heridos, se acostumbra a no encariñarse.", note: "«Una» genérico: la hablante se incluye y el verbo es pronominal." },
          { es: "Se trasladó a las dos crías a una incubadora.", note: "«Se» + «a» evita la lectura reflexiva." },
        ],
        mistakes: [
          {
            wrong: "Se trasladaron las crías de mono a otro recinto.",
            right: "Se trasladó a las crías de mono a otro recinto.",
            why: "Con seres animados, «se trasladaron» puede leerse como reflexivo. «Se» + «a» deja claro que alguien las trasladó.",
          },
          {
            wrong: "Se se cansa de limpiar jaulas todo el día.",
            right: "Uno se cansa de limpiar jaulas todo el día.",
            why: "Con un verbo pronominal no puede usarse el «se» impersonal: se usa «uno» o «una».",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero identifica el valor de cada «se», después decide la voz según el texto y termina corrigiendo un comunicado.",
    exercises: [
      {
        id: "c1-09-gramatica-valor",
        type: "classify",
        prompt: "Clasifica cada «se» según su valor.",
        categories: ["Reflexivo o recíproco", "Medio (cambio sin agente)", "Aspectual (acción completa)", "Pasivo o impersonal (agente humano implícito)"],
        items: [
          { text: "Las dos lapas se acicalan las plumas mutuamente.", cat: 0, why: "Recíproco: la una a la otra." },
          { text: "El hielo de la nevera se derritió durante el apagón.", cat: 1, why: "Cambio sin agente; admite «solo»." },
          { text: "El mapache se bebió toda la leche del biberón.", cat: 2, why: "Acción completa con complemento delimitado." },
          { text: "Se vacunó a todos los perezosos en marzo.", cat: 3, why: "Alguien los vacunó: impersonal con «a»." },
          { text: "La tortuga se escondió dentro del caparazón.", cat: 0, why: "Reflexivo: se escondió a sí misma." },
          { text: "El cerco eléctrico se averió con la tormenta.", cat: 1, why: "Cambio sin agente; la causa es natural." },
          { text: "Se necesitan voluntarios para el turno de noche.", cat: 3, why: "Pasiva refleja con agente implícito." },
          { text: "La veterinaria se leyó el historial completo antes de operar.", cat: 2, why: "«Se» aspectual con verbo de lectura y complemento delimitado." },
        ],
      },
      {
        id: "c1-09-gramatica-pronominales",
        type: "gap",
        prompt: "Completa con el verbo indicado, con o sin pronombre según el significado.",
        items: [
          { q: "El tucán ___ en cuanto apagamos la luz de la clínica. [dormir, pretérito]", answers: [["se durmió"]], why: "«Dormirse»: empezar a dormir." },
          { q: "Uno de los monos ___ las llaves del cuidador y no las devolvió. [llevar, pretérito]", answers: [["se llevó"]], why: "«Llevarse»: tomar algo y quedárselo." },
          { q: "A Daniela ___ una idea para financiar el nuevo recinto. [ocurrir, pretérito]", answers: [["se le ocurrió"]], why: "«Ocurrírsele algo a alguien»." },
          { q: "El conductor que atropelló al manigordo ___ a dar su nombre. [negar, pretérito]", answers: [["se negó"]], why: "«Negarse a»: rechazar hacer algo." },
          { q: "La cría ___ mucho a su madre: tiene la misma mancha en la frente. [parecer, presente]", answers: [["se parece"]], why: "«Parecerse a»: tener rasgos parecidos." },
          { q: "El voluntario ___ de no haber cerrado bien la puerta. [arrepentir, presente]", answers: [["se arrepiente"]], why: "«Arrepentirse» solo existe en forma pronominal." },
        ],
      },
      {
        id: "c1-09-gramatica-voz",
        type: "context",
        prompt: "Lee el comienzo del texto y elige la continuación que mantiene mejor el tema.",
        items: [
          {
            context: "«La lapa roja que llegó al centro en mayo tenía un ala rota.»",
            q: "¿Qué continuación es más natural?",
            options: ["Los veterinarios operaron a la lapa en junio y la lapa voló de nuevo en agosto.", "En junio fue operada y en agosto volvió a volar.", "En junio se operó y en agosto se voló."],
            answer: 1,
            why: "La pasiva con «ser» mantiene a la lapa como tema; «se operó» sugiere que se operó a sí misma.",
          },
          {
            context: "Noticia: «El Ministerio de Ambiente ha cerrado el sendero norte del parque».",
            q: "¿Qué frase sigue mejor la noticia si la novedad es quién reabrirá el sendero?",
            options: ["Se reabrirá el sendero en marzo.", "El sendero será reabierto en marzo por una cooperativa de guías locales.", "Reabrirán el sendero en marzo."],
            answer: 1,
            why: "Cuando el agente es la información nueva, la pasiva con «por» lo coloca al final, en posición de rema.",
          },
          {
            context: "Cartel a la entrada del centro de rescate.",
            q: "¿Qué versión es más natural en español?",
            options: ["Es requerido que los visitantes no toquen a los animales.", "Los visitantes son requeridos de no tocar a los animales.", "Se ruega no tocar a los animales."],
            answer: 2,
            why: "En avisos, el «se» impersonal es lo natural; las otras dos son calcos del inglés.",
          },
          {
            context: "Una cuidadora cuenta su experiencia en una entrevista.",
            q: "¿Qué frase expresa una idea general en la que ella se incluye?",
            options: ["Dicen que se acostumbran a los olores.", "Uno se acostumbra a los olores en una semana.", "Se acostumbra a los olores en una semana."],
            answer: 1,
            why: "«Uno» incluye al hablante y es obligatorio con verbos pronominales.",
          },
        ],
      },
      {
        id: "c1-09-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de «se» o de voz. Corrígela.",
        items: [
          {
            sentence: "La jaula se abrió a propósito durante la noche.",
            answers: ["Alguien abrió la jaula a propósito durante la noche.", "La jaula fue abierta a propósito durante la noche."],
            why: "El «se» medio no admite intención; con «a propósito» hace falta un agente.",
          },
          {
            sentence: "Fue anunciado por el centro que el manigordo será liberado el viernes.",
            answers: ["El centro anunció que el manigordo será liberado el viernes.", "Se anunció que el manigordo será liberado el viernes."],
            why: "Pasiva calcada del inglés: el agente no es novedad.",
          },
          {
            sentence: "Se se queja mucho cuando hace calor en el turno de tarde.",
            answers: ["Uno se queja mucho cuando hace calor en el turno de tarde.", "Una se queja mucho cuando hace calor en el turno de tarde."],
            why: "Con un verbo pronominal, el impersonal se expresa con «uno» o «una».",
          },
          {
            sentence: "Me te pusiste nervioso durante la cirugía.",
            answers: ["Te me pusiste nervioso durante la cirugía."],
            why: "Orden de los pronombres: «te» antes de «me».",
          },
        ],
      },
      {
        id: "c1-09-gramatica-reformular",
        type: "open",
        prompt: "Reescribe y explica. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Reescribe este aviso para que suene natural en español y mantenga como tema el sendero: «Fue decidido por la administración que el sendero de las cascadas es cerrado durante la temporada de lluvias. Es esperado que sea reabierto en diciembre».",
            model: "El sendero de las cascadas permanecerá cerrado durante la temporada de lluvias, según decidió la administración. Se espera reabrirlo en diciembre.",
            checklist: ["Elimino los calcos «fue decidido», «es esperado».", "El sendero es el tema al principio.", "Uso «se» o la activa donde el agente no es novedad."],
          },
          {
            prompt: "Explica la diferencia entre «Se nos escapó el mono» y «No te me escapes, mono» y escribe un ejemplo propio de cada tipo.",
            model: "En «Se nos escapó el mono», el «nos» es un dativo de interés: indica a quién afecta el hecho, y admite «a nosotros». En «No te me escapes», el «me» es un dativo ético: expresa la implicación afectiva del hablante y no admite «a mí». Ejemplos: «Se me rompió el termómetro» y «No te me duermas ahora».",
            checklist: ["Distingo interés y ético con la prueba de «a mí».", "Doy un ejemplo correcto de cada tipo."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico para hablar del rescate y la rehabilitación de fauna silvestre en Costa Rica. Algunos nombres de animales son propios de Centroamérica.",
    groups: [
      {
        title: "Animales y rehabilitación",
        items: [
          { es: "el manigordo", note: "en Costa Rica, el ocelote, felino salvaje de tamaño mediano" },
          { es: "la lapa roja", note: "en Costa Rica, guacamayo de plumas rojas, azules y amarillas" },
          { es: "el perezoso de dos dedos", note: "mamífero arborícola muy lento, frecuente en los centros de rescate" },
          { es: "la cría", note: "animal recién nacido o muy joven" },
          { es: "el recinto", note: "espacio cerrado donde se mantiene a un animal durante su recuperación" },
          { es: "la rehabilitación", note: "proceso para que un animal recupere sus capacidades antes de volver a la naturaleza" },
          { es: "la liberación", note: "devolución de un animal rehabilitado a su hábitat" },
          { es: "el guarumo", note: "árbol tropical cuyas hojas comen los perezosos" },
        ],
      },
      {
        title: "El centro y su comunicación",
        items: [
          { es: "la zona protectora", note: "en Costa Rica, área natural con un régimen de protección legal" },
          { es: "el atropello", note: "accidente en el que un vehículo golpea a un animal o a una persona" },
          { es: "el tráfico de fauna", note: "comercio ilegal de animales silvestres" },
          { es: "el comunicado de prensa", note: "texto breve que una institución envía a los medios" },
          { es: "el pie de foto", note: "texto breve que acompaña a una fotografía" },
          { es: "el voluntariado", note: "trabajo sin sueldo que hacen personas comprometidas con una causa" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-09-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada palabra con su definición.",
        pairs: [
          { left: "el manigordo", right: "nombre costarricense del ocelote" },
          { left: "el recinto", right: "espacio cerrado para un animal en recuperación" },
          { left: "la liberación", right: "devolución de un animal rehabilitado a su hábitat" },
          { left: "el tráfico de fauna", right: "comercio ilegal de animales silvestres" },
          { left: "el pie de foto", right: "texto breve que acompaña a una fotografía" },
          { left: "el guarumo", right: "árbol tropical cuyas hojas comen los perezosos" },
        ],
      },
      {
        id: "c1-09-lexico-uso",
        type: "gap",
        prompt: "Completa el texto de la web del centro con la expresión adecuada.",
        bank: ["atropello", "rehabilitación", "voluntariado", "zona protectora"],
        items: [
          { q: "La mayoría de los animales llegan al centro tras un ___ en la carretera.", answers: [["atropello"]] },
          { q: "La ___ de un perezoso puede durar más de un año.", answers: [["rehabilitación"]] },
          { q: "El programa de ___ acepta personas mayores de dieciocho años.", answers: [["voluntariado"]] },
          { q: "Las liberaciones se hacen en una ___ cercana, lejos de las carreteras.", answers: [["zona protectora"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El acento principal al final: así suena la información nueva",
    explanation: [
      "En una oración neutra, el acento más fuerte del grupo fónico cae sobre la última palabra con acento léxico, que suele coincidir con la información nueva. Por eso el orden y la voz influyen en lo que el oyente percibe como importante. En «El manigordo fue liberado por los guardaparques», el peso cae en «guardaparques»; en «Los guardaparques liberaron al manigordo», cae en «manigordo».",
      "Si quieres destacar algo que no está al final, tienes que marcarlo con un acento enfático y un tono más alto, lo que suena contrastivo: «LOS GUARDAPARQUES liberaron al manigordo (no los voluntarios)». En la lectura de un comunicado, es mejor organizar la frase para que lo nuevo quede al final que forzar acentos.",
      "Las voces del audio son sintéticas y no representan una variedad costarricense verificada: úsalas para percibir dónde cae el acento principal, no como modelo regional ni como evaluación de tu pronunciación.",
    ],
    table: {
      caption: "Dónde cae el peso de la información",
      head: ["Oración", "Acento principal en", "Lo nuevo es"],
      rows: [
        ["La lapa fue operada por una cirujana de la universidad.", "universidad", "quién la operó"],
        ["Una cirujana de la universidad operó a la lapa.", "lapa", "a quién operó"],
        ["Se liberó al manigordo el viernes.", "viernes", "cuándo"],
      ],
    },
    perceive: {
      id: "c1-09-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué información presenta como nueva.",
      items: [
        {
          q: "¿Qué es lo nuevo en esta frase?",
          options: ["Que el perezoso fue liberado.", "Quién liberó al perezoso.", "Cuándo se liberó al perezoso."],
          answer: 1,
          why: "El agente va al final, con el acento principal: «por dos estudiantes de veterinaria».",
          audio: "El perezoso fue liberado por dos estudiantes de veterinaria.",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué es lo nuevo en esta frase?",
          options: ["El lugar de la liberación.", "El animal liberado.", "La fecha de la liberación."],
          answer: 0,
          why: "La frase termina en «en la Zona Protectora El Rodeo», donde cae el peso.",
          audio: "Al manigordo lo soltaron ayer en la Zona Protectora El Rodeo.",
          voice: "es-MX-m",
        },
        {
          q: "¿Qué palabra lleva un acento enfático de contraste?",
          options: ["sendero", "voluntarios", "cerraron"],
          answer: 1,
          why: "Se destaca «LOS VOLUNTARIOS» con tono alto: no fueron otros.",
          audio: "Los voluntarios cerraron el sendero, no los guardaparques.",
          voice: "es-CO-f",
        },
        {
          q: "¿Cómo se entiende el «se» en esta frase?",
          options: ["Alguien trasladó a las crías.", "Las crías se trasladaron solas."],
          answer: 0,
          why: "«Se trasladó a las crías»: «se» impersonal con «a», agente humano implícito.",
          audio: "Se trasladó a las crías a una incubadora del hospital veterinario.",
          voice: "es-CO-m",
        },
      ],
    },
    produce: [
      { text: "El manigordo llegó en enero y fue liberado en mayo por el equipo del centro.", tip: "Deja que el acento principal caiga en «centro».", voice: "es-MX-f" },
      { text: "Se ruega a los visitantes que no den comida a los animales.", tip: "Pronuncia «se ruega» ligado, sin pausa.", voice: "es-CO-m" },
      { text: "Uno se acostumbra al ruido de los monos aulladores.", tip: "Sin acento en «se»; el peso cae en «aulladores».", voice: "es-CO-f" },
      { text: "No te me asustes, pequeña, que solo te vamos a pesar.", tip: "Tono suave y cercano: el dativo ético expresa afecto.", voice: "es-MX-f" },
    ],
    spelling: "«Se» pronombre no lleva tilde; «sé», del verbo saber o ser, sí: «No sé si se escapó».",
  },
  listening: {
    title: "Antes de mandar el comunicado",
    context: "En un centro de rescate de fauna cerca de San José, Daniela, voluntaria encargada de comunicación, y Mauricio, veterinario jefe, revisan el borrador del comunicado sobre la liberación de un manigordo. En Costa Rica es frecuente tratarse de usted incluso entre compañeros de trabajo, como hacen ellos. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "d", name: "Daniela", voice: "es-CO-f", role: "Voluntaria de comunicación" },
      { id: "m", name: "Mauricio", voice: "es-MX-m", role: "Veterinario jefe del centro" },
    ],
    script: [
      { speaker: "d", text: "Doctor, ¿tiene un minuto? Quiero mandar el comunicado del manigordo antes de las doce. Empieza así: «Fue anunciado por el Centro de Rescate que el manigordo Tinoco fue liberado por el equipo veterinario». ¿Qué le parece?" },
      { speaker: "m", text: "Me suena a traducción. Fue anunciado por el centro… pero si el comunicado lo firma el centro, ya se sabe quién lo anuncia. Yo empezaría por el animal, que es de lo que habla la noticia: «El manigordo Tinoco volvió el viernes al bosque tras cuatro meses de rehabilitación». Y después ya vamos contando." },
      { speaker: "d", text: "Tiene razón, queda más limpio. Luego tenía: «Se liberaron los manigordos en la zona protectora». Pero solo era uno, ¿verdad?" },
      { speaker: "m", text: "Uno solo, y además «se liberaron» suena como si se hubieran escapado ellos mismos. Ponga «se liberó a Tinoco en la Zona Protectora El Rodeo» o, mejor, siga con él de sujeto: «fue liberado en la Zona Protectora El Rodeo». Ahí la pasiva sí sirve, porque mantiene al animal como tema." },
      { speaker: "d", text: "Perfecto. ¿Y menciono a los guardaparques? Ellos lo llevaron hasta el punto de liberación." },
      { speaker: "m", text: "Sí, ahí el agente sí es noticia, porque es la primera vez que colaboran con nosotros. Diga: «El traslado fue realizado por guardaparques del Sistema Nacional de Áreas de Conservación». Y cuente lo de la jaula, que es lo que la gente va a recordar." },
      { speaker: "d", text: "¿Lo de que se abrió la jaula y él no quería salir?" },
      { speaker: "m", text: "Eso. La puerta se abrió, el gato se quedó quieto casi un minuto y luego se fue sin mirar atrás. Uno se emociona aunque haya visto cien liberaciones. Y a mí casi se me cae la cámara, pero eso no lo ponga." },
      { speaker: "d", text: "No se preocupe, que no lo pongo. Al final, ¿agrego lo de los atropellos? Dicen que este año han llegado el doble que el anterior." },
      { speaker: "m", text: "Agréguelo, pero sin «dicen»: tenemos los datos. «En lo que va de año se han atendido treinta y dos animales atropellados, el doble que en todo el anterior». Y cierre con una petición: hay que reducir la velocidad en la ruta veintisiete al amanecer y al atardecer." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué están haciendo y cuál es el criterio principal de Mauricio?",
        exercise: {
          id: "c1-09-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué hacen Daniela y Mauricio?",
              options: ["Preparan la liberación de un manigordo.", "Revisan el comunicado sobre una liberación ya realizada.", "Discuten si aceptar a un nuevo voluntario."],
              answer: 1,
              why: "El manigordo fue liberado el viernes; ahora revisan el texto que se enviará a la prensa.",
            },
            {
              q: "¿Qué criterio general sigue Mauricio?",
              options: ["Usar siempre la pasiva para sonar más formal.", "Nombrar siempre a todas las personas que participaron.", "Mantener al animal como tema y nombrar al agente solo si es noticia."],
              answer: 2,
              why: "Propone empezar por el manigordo y menciona a los guardaparques porque es novedad.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-09-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué problema ve Mauricio en «se liberaron los manigordos»?",
              options: ["Que suena como si los animales se hubieran liberado solos.", "Que el verbo debería ir en futuro.", "Que «manigordo» no se usa en Costa Rica."],
              answer: 0,
              why: "Además era un solo animal; propone «se liberó a Tinoco» o la pasiva.",
            },
            {
              q: "¿Por qué decide mencionar a los guardaparques?",
              options: ["Porque lo exige la ley.", "Porque es la primera vez que colaboran con el centro.", "Porque ellos escribieron el comunicado."],
              answer: 1,
              why: "Cuando el agente es información nueva, se incluye con «por».",
            },
            {
              q: "¿Qué pide Mauricio que no se publique?",
              options: ["El número de animales atropellados.", "El nombre de la zona protectora.", "Que casi se le cae la cámara."],
              answer: 2,
              why: "«A mí casi se me cae la cámara, pero eso no lo ponga».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en los usos de «se» y de la voz que comentan. Relaciona y consulta la transcripción después.",
        exercise: {
          id: "c1-09-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con su valor.",
          pairs: [
            { left: "Fue anunciado por el Centro de Rescate", right: "pasiva calcada que se elimina" },
            { left: "La puerta se abrió", right: "«se» medio, sin agente" },
            { left: "el gato se quedó quieto casi un minuto", right: "verbo pronominal con cambio de significado" },
            { left: "a mí casi se me cae la cámara", right: "«se» accidental con dativo de la persona afectada" },
            { left: "Uno se emociona", right: "impersonal con «uno» y verbo pronominal" },
          ],
          why: "En una misma conversación aparecen casi todos los valores de «se» de la semana.",
        },
      },
    ],
  },
  reading: {
    title: "Donde los animales vuelven a aprender",
    genre: "Reportaje de suplemento dominical",
    frame: "Reportaje de Andrea Solís para el suplemento de fin de semana de un periódico costarricense. El centro, las personas y los animales son ficticios.",
    text: [
      "A media hora de San José, en una ladera cubierta de guarumos, un centro de rescate recibe cada año unos cuatrocientos animales silvestres. Llegan heridos, deshidratados o huérfanos, y casi todos tienen algo en común: alguien o algo se cruzó en su camino. Los perezosos se electrocutan en los cables, los manigordos son atropellados en la ruta veintisiete y las lapas se rescatan de casas donde se las mantenía como mascotas. El objetivo del centro no es tenerlos para siempre, sino devolverlos al bosque. Para conseguirlo, se les enseña de nuevo lo que el accidente o el cautiverio les hizo olvidar.",
      "Mauricio Araya, el veterinario jefe, lo explica mientras revisa a una cría de mono congo. «Aquí no se curan solo heridas. Un animal que se ha acostumbrado a comer de la mano de una persona no sobrevive afuera. Por eso, una vez que se recupera físicamente, se le cambia de recinto y se reduce el contacto humano al mínimo». La cría, que se aferra a un peluche con forma de madre, se queda quieta mientras él la ausculta. «No te me pongas nerviosa», le dice en voz baja, y ella parece entenderlo.",
      "En el recinto de al lado, un perezoso de dos dedos se ha comido todas las hojas de guarumo que le dejaron por la mañana. Eso es una buena noticia. Hace tres semanas llegó con quemaduras en las patas y no comía nada. Se le alimentaba con jeringa cada dos horas, y los voluntarios se turnaban para que nunca estuviera solo durante la noche. Hoy se mueve despacio entre las ramas, como corresponde a su especie, y dentro de un mes, si todo va bien, será trasladado a una zona protectora.",
      "Daniela Quesada, la voluntaria que coordina la comunicación, reconoce que contar estas historias tiene su dificultad. «Al principio escribía como en los comunicados que se traducen del inglés: fue rescatado, fue atendido, fue liberado por el equipo. Mauricio me enseñó que el protagonista es el animal, y que a quién lo atendió solo hay que nombrarlo si es noticia». Su último comunicado, sobre la liberación del manigordo Tinoco, empieza así: «El manigordo Tinoco volvió el viernes al bosque tras cuatro meses de rehabilitación». La frase se publicó tal cual en tres periódicos.",
      "No todo son finales felices. En lo que va de año se han atendido treinta y dos animales atropellados, el doble que en todo el año anterior, y once no sobrevivieron. Se sabe que la mayoría de los accidentes ocurren al amanecer y al atardecer, cuando los animales cruzan la carretera para buscar comida. Por eso el centro ha pedido que se instalen reductores de velocidad y pasos de fauna, una medida que ya se ha aplicado con éxito en otras rutas del país.",
      "Cuando se le pregunta qué es lo más difícil del trabajo, Mauricio no habla de cirugías ni de turnos de noche. «Lo más difícil es despedirse. Uno se encariña aunque sepa que no debe. Pero cuando abres la jaula y el animal se va sin mirar atrás, entiendes que eso era lo que había que conseguir». En la pizarra de la clínica, alguien ha escrito con letra grande una frase que resume el espíritu del lugar: aquí se viene a aprender a irse.",
    ],
    glossary: [
      { es: "el mono congo", note: "en Costa Rica, el mono aullador" },
      { es: "auscultar", note: "escuchar los sonidos internos del cuerpo con un estetoscopio" },
      { es: "el paso de fauna", note: "estructura que permite a los animales cruzar una carretera sin peligro" },
    ],
    tasks: [
      {
        id: "c1-09-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el reportaje.",
        items: [
          {
            q: "¿Cuál es el objetivo principal del centro, según el reportaje?",
            options: ["Exhibir a los animales para educar a los visitantes.", "Devolver a los animales a la naturaleza con las capacidades que necesitan.", "Investigar enfermedades de la fauna silvestre."],
            answer: 1,
            why: "«El objetivo del centro no es tenerlos para siempre, sino devolverlos al bosque».",
          },
          {
            q: "¿Por qué es una buena noticia que el perezoso se haya comido todas las hojas?",
            options: ["Porque al llegar no comía nada y ahora se alimenta solo.", "Porque las hojas de guarumo son caras.", "Porque así se puede liberar al día siguiente."],
            answer: 0,
            why: "Llegó con quemaduras, no comía y se le alimentaba con jeringa.",
          },
          {
            q: "¿Qué ha pedido el centro para reducir los atropellos?",
            options: ["Cerrar la ruta veintisiete por la noche.", "Prohibir la circulación de camiones.", "Reductores de velocidad y pasos de fauna."],
            answer: 2,
            why: "Lo dice el quinto párrafo.",
          },
        ],
      },
      {
        id: "c1-09-lectura-se",
        type: "classify",
        prompt: "Clasifica cada fragmento del reportaje según el valor de «se».",
        categories: ["Pasivo o impersonal (agente humano implícito)", "Medio, pronominal o aspectual (sin agente externo)"],
        items: [
          { text: "se les enseña de nuevo lo que el accidente les hizo olvidar", cat: 0, why: "Alguien les enseña: impersonal." },
          { text: "un perezoso de dos dedos se ha comido todas las hojas", cat: 1, why: "«Se» aspectual: acción completa." },
          { text: "se reduce el contacto humano al mínimo", cat: 0, why: "Pasiva refleja: el equipo lo reduce." },
          { text: "La cría, que se aferra a un peluche", cat: 1, why: "Verbo pronominal: «aferrarse»." },
          { text: "Uno se encariña aunque sepa que no debe", cat: 1, why: "Verbo pronominal con «uno» genérico." },
          { text: "La frase se publicó tal cual en tres periódicos", cat: 0, why: "Pasiva refleja: los periódicos la publicaron." },
        ],
      },
      {
        id: "c1-09-lectura-evaluacion",
        type: "open",
        prompt: "Valora una idea del reportaje con argumentos propios.",
        items: [
          {
            prompt: "Daniela dice que el protagonista de sus comunicados es el animal y que el agente solo se nombra si es noticia. Explica en 70–90 palabras si ese criterio te parece útil también para otros textos (noticias de empresa, avisos de tu ciudad) y da un ejemplo.",
            model: "Me parece útil porque obliga a pensar en qué le interesa al lector. En una noticia sobre una nueva línea de autobús, lo importante es la línea, no quién firmó el contrato: «La línea 12 empezará a funcionar en marzo». Pero si la novedad es que la gestionará una cooperativa de vecinos, conviene decirlo al final: «La línea será gestionada por una cooperativa de vecinos». El criterio no prohíbe la pasiva; la pone donde aporta información.",
            checklist: ["Aplico el criterio a otro tipo de texto.", "Doy un ejemplo con el tema al principio.", "Uso una pasiva con «por» justificada o explico cuándo sí usarla."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora alterna las formas de «se» y la pasiva para mantener a los animales en primer plano.",
      items: [
        { quote: "los manigordos son atropellados en la ruta veintisiete", note: "Pasiva con «ser»: el animal sigue siendo el tema; el agente (los conductores) no hace falta." },
        { quote: "se le cambia de recinto y se reduce el contacto humano al mínimo", note: "«Se» impersonal con «le» para el animal y pasiva refleja para el contacto." },
        { quote: "No te me pongas nerviosa", note: "Dativo ético: «me» expresa la implicación afectiva del veterinario." },
        { quote: "será trasladado a una zona protectora", note: "Pasiva con «ser» para mantener al perezoso como sujeto en la secuencia." },
        { quote: "aquí se viene a aprender a irse", note: "«Se» impersonal con «venir» y verbo pronominal «irse»: el juego de palabras resume el texto." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección de voz, relación de recursos impersonales y escritura breve para preparar el comunicado.",
    exercises: [
      {
        id: "c1-09-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases naturales de un comunicado.",
        items: [
          {
            words: ["Se", "trasladó", "a", "las", "crías", "al", "hospital", "veterinario."],
            why: "«Se» + «a» con seres animados para evitar la lectura reflexiva.",
          },
          {
            words: ["El", "perezoso", "fue", "liberado", "por", "estudiantes", "de", "la", "universidad."],
            why: "Pasiva con «ser» y agente al final porque es novedad.",
          },
          {
            words: ["Uno", "se", "acostumbra", "a", "trabajar", "de", "noche."],
            why: "«Uno» con verbo pronominal.",
          },
        ],
      },
      {
        id: "c1-09-tema",
        type: "context",
        prompt: "Elige la oración que mantiene mejor el tema del texto.",
        items: [
          {
            context: "Primera frase del texto: «La nueva clínica del centro abrirá sus puertas el lunes».",
            q: "¿Qué segunda frase es más coherente?",
            options: ["Un arquitecto local diseñó la clínica con fondos de una fundación.", "La clínica fue diseñada por un arquitecto local y financiada por una fundación.", "Se diseñaron por un arquitecto local la clínica y se financió."],
            answer: 1,
            why: "La pasiva mantiene «la clínica» como tema y pone los agentes, que son novedad, al final.",
          },
          {
            context: "Aviso en el baño del centro.",
            q: "¿Qué versión es más natural?",
            options: ["Las manos deben ser lavadas por el personal antes de entrar.", "Es requerido lavarse las manos antes de entrar.", "Es obligatorio lavarse las manos antes de entrar."],
            answer: 2,
            why: "Con un verbo pronominal («lavarse»), lo natural es «es obligatorio» o «hay que» + infinitivo.",
          },
          {
            context: "Crónica de un voluntario: quiere decir que alguien desconocido dejó una caja con tres crías en la puerta.",
            q: "¿Qué versión expresa mejor que no sabe quién fue?",
            options: ["Dejaron una caja con tres crías en la puerta del centro.", "Una caja con tres crías se dejó sola en la puerta del centro.", "Uno dejó una caja con tres crías en la puerta del centro."],
            answer: 0,
            why: "La tercera persona del plural presenta un agente indeterminado que excluye al hablante.",
          },
        ],
      },
      {
        id: "c1-09-recursos",
        type: "match",
        prompt: "Relaciona cada recurso impersonal con su matiz.",
        pairs: [
          { left: "Dicen que…", right: "agente indeterminado que excluye al hablante" },
          { left: "Uno se cansa…", right: "generalización que incluye al hablante" },
          { left: "Aquí te piden…", right: "generalización coloquial dirigida al oyente" },
          { left: "El sendero está cerrado.", right: "resultado de una acción, no el proceso" },
          { left: "la reapertura del sendero", right: "acción convertida en sustantivo" },
        ],
      },
      {
        id: "c1-09-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 40–60 palabras el pie de foto de la liberación de un perezoso. El perezoso debe ser el tema de todas las oraciones y solo debes nombrar al agente si es novedad.",
            model: "Lento pero decidido, el perezoso Bruno sube por el guarumo donde fue liberado el martes. Llegó al centro en abril con quemaduras en las cuatro patas y se recuperó tras cinco meses de cuidados. Fue trasladado hasta la zona protectora por estudiantes de la Universidad de Costa Rica.",
            checklist: ["El perezoso es el tema de cada oración.", "Solo nombro al agente cuando aporta información nueva.", "No hay pasivas calcadas innecesarias."],
          },
          {
            prompt: "Escribe en 40–60 palabras una anécdota del centro que incluya un «se» medio, un «se» accidental y un dativo ético.",
            model: "El lunes, mientras limpiaba el recinto de los monos, la puerta se cerró de golpe con el viento. Se me cayeron las llaves dentro y una mona joven las agarró enseguida. Yo le decía: «No te me escapes con eso, por favor», pero ella se subió a la rama más alta y tardó una hora en devolverlas.",
            checklist: ["Incluyo un «se» medio sin agente.", "Incluyo un «se» accidental con dativo.", "Incluyo un dativo ético en estilo directo."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta el comunicado de prensa del centro (240–320 palabras) sobre la liberación de un animal rehabilitado. Presenta al animal, cuenta su llegada y su recuperación, describe la liberación, da un dato sobre el problema que causa los ingresos y termina con una petición al público.",
    context: "El comunicado se enviará a periódicos y radios de Costa Rica y se publicará en la web del centro. Debe tener un titular, un primer párrafo que responda a qué, quién, cuándo y dónde, y un tono informativo pero cercano. Mantén al animal como tema y elige la voz según lo que sea novedad.",
    steps: [
      "Escribe el titular y la primera oración con el animal como sujeto.",
      "Haz una lista de los hechos y decide para cada uno si conviene activa, pasiva con «ser», «se» o «estar» + participio.",
      "Redacta el comunicado con un dato sobre los ingresos y una petición final con «hay que», «se pide» o «se ruega».",
      "Revisa que no haya pasivas calcadas («fue anunciado», «es requerido»), corrige los «se» ambiguos con seres animados y comprueba el orden de los pronombres.",
    ],
    useLanguage: [
      "… volvió al bosque tras…",
      "fue trasladado / liberado por… (si el agente es noticia)",
      "se le alimentó / se le trasladó",
      "se han atendido…",
      "hay que / se pide a los conductores que…",
      "está prohibido / está cerrado",
    ],
    model: [
      "La lapa roja Esperanza vuelve a volar sobre el Pacífico central. Tras siete meses de rehabilitación en el centro de rescate de Santa Ana, la lapa fue liberada el sábado en la Zona Protectora Cerros de Turrubares, cerca de un grupo de aves de su especie que se observa en la zona desde hace años.",
      "Esperanza llegó al centro en abril, después de que se la encontrara en el patio de una casa de Alajuela, donde se la mantenía como mascota desde hacía más de diez años. Tenía las plumas de un ala cortadas y no sabía volar ni buscar alimento. Durante los primeros meses se le dio fruta en la mano, pero poco a poco se redujo el contacto humano y se la trasladó a un recinto amplio, donde aprendió a abrir semillas y a volar distancias cada vez mayores.",
      "La liberación fue posible gracias a la colaboración de una asociación de vecinos de Turrubares, que se comprometió a vigilar la zona durante las próximas semanas. Cuando se abrió la jaula, Esperanza se quedó quieta unos segundos y luego voló hasta un almendro cercano.",
      "En lo que va de año se han atendido cuarenta y una aves que se mantenían ilegalmente como mascotas, más que en todo el año anterior. El centro recuerda que tener animales silvestres en casa está prohibido y pide a quien conozca un caso que lo comunique a las autoridades. Hay que entender que un ave silvestre no es una mascota.",
    ],
    checklist: [
      "El animal es el tema de la mayoría de las oraciones.",
      "Solo nombro al agente con «por» cuando es información nueva.",
      "No uso pasivas calcadas del inglés.",
      "Con seres animados, uso «se» + «a» o la pasiva para evitar ambigüedad.",
      "La petición final usa un recurso impersonal adecuado.",
    ],
    words: [240, 320],
  },
  speaking: {
    intro: "Prepara solo palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Entrevista en la radio",
        prompt: "Una radio local te entrevista sobre la liberación del manigordo Tinoco. Durante cuatro minutos cuenta cómo llegó al centro, cómo se recuperó, cómo fue la liberación y por qué aumentan los atropellos. Incluye una anécdota personal con algún «se» accidental o un dativo ético, y termina con un consejo para los conductores.",
        prep: [
          "Ordena los hechos y piensa qué es novedad en cada uno.",
          "Prepara una anécdota con «se me…» o «no te me…».",
          "Prepara el consejo con «hay que» o «uno tiene que».",
        ],
        seconds: 240,
        model: "Bueno, Tinoco llegó en enero con una pata fracturada; lo había atropellado un carro en la ruta veintisiete. Se le operó al día siguiente y, poco a poco, se fue recuperando. Lo más bonito fue el viernes: se abrió la jaula y él se quedó quieto, mirándonos, como si no se lo creyera. A mí casi se me cae la cámara de la emoción…",
        selfCheck: [
          "Mantengo al animal como tema de casi todas las frases.",
          "Uso al menos tres valores distintos de «se».",
          "Cierro con un consejo impersonal claro.",
        ],
      },
      {
        title: "Una vecina preocupada",
        prompt: "Una vecina del centro llama porque unos monos le están comiendo los mangos y cree que se escaparon del centro. Pregúntale qué ha visto, aclara que los monos del centro no se escapan y que en la zona viven grupos silvestres, y negocia con ella una solución que no perjudique a los animales.",
        prep: [
          "Prepara dos preguntas sobre lo que ha visto.",
          "Distingue en tu explicación «se escaparon» (de un recinto) de «viven aquí» (silvestres).",
        ],
        seconds: 150,
        model: "Entiendo que le molesta, señora. ¿Cuántos monos vio? ¿Tenían algún collar o marca? Los nuestros no se escapan: los recintos se cierran con doble puerta. Lo más probable es que sean monos silvestres que viven en la zona. Si le parece, le llevamos una malla para los árboles y le explicamos cómo proteger la fruta sin hacerles daño.",
        selfCheck: [
          "Hago preguntas antes de explicar.",
          "Uso «se» medio o pronominal correctamente.",
          "Propongo una solución concreta.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu comunicado y tres frases reales con «se» que hayas encontrado en noticias o avisos.",
    cards: [
      {
        move: "Clasifica",
        task: "Lee tus tres frases reales y clasifica cada «se» delante de tu profesor con la prueba correspondiente.",
        phrases: ["Admite «a sí mismo», así que…", "No admite «por alguien», así que…"],
      },
      {
        move: "Reescribe",
        task: "Pide a tu profesor que te dé un aviso con pasivas calcadas y reescríbelo en voz alta.",
        phrases: ["Aquí quedaría mejor «se»…", "El agente no hace falta porque…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta a tu profesor si en su variedad se usan mucho el dativo ético o verbos como «tardarse», «regresarse» o «enfermarse».",
        phrases: ["¿Tú dirías…?", "¿Suena coloquial o normal?"],
      },
      {
        move: "Cuenta",
        task: "Cuenta en dos minutos un pequeño accidente doméstico con «se me…» y pide a tu profesor que señale cada valor de «se».",
        phrases: ["Se me rompió…", "Se me olvidó…"],
      },
    ],
    bring: "Tu comunicado revisado, tus frases reales y, si quieres, la grabación de la entrevista de radio.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿En qué frase tiene «se» valor medio?",
        options: ["Se buscan voluntarios para el fin de semana.", "Las dos crías se abrazan para dormir.", "El techo del recinto se hundió con la lluvia."],
        answer: 2,
        why: "Cambio sin agente; admite «solo» y no «por alguien».",
      },
      {
        type: "choice",
        q: "¿Qué frase usa correctamente un «se» aspectual?",
        options: ["El mono se comió dos bananas enteras.", "El mono se comió bananas.", "El mono se comía."],
        answer: 0,
        why: "El «se» aspectual necesita un complemento delimitado.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué valor tiene «me»?",
        options: ["Dativo de interés: el hecho perjudica al hablante.", "Dativo ético: implicación afectiva del hablante.", "Complemento directo."],
        answer: 1,
        why: "«No te me…» en una petición afectuosa: dativo ético; no admite «a mí».",
        audio: "No te me muevas tanto, que así no te puedo vendar la pata.",
        voice: "es-MX-f",
      },
      {
        type: "gap",
        q: "___ a los dos tucanes a una jaula de vuelo más grande.",
        answers: [["Se trasladó", "se trasladó", "Se llevó", "se llevó"]],
        hint: "«Se» impersonal con verbo en singular y la preposición «a» ante seres animados.",
        why: "«Se trasladó a los tucanes» evita la lectura reflexiva.",
      },
      {
        type: "gap",
        q: "Cuando trabajas con animales salvajes, ___ acostumbra a no ponerles nombre.",
        answers: [["uno se", "una se"]],
        hint: "Pronombre indefinido que incluye al hablante, seguido del pronombre del verbo pronominal.",
        why: "Con verbos pronominales, «uno se» o «una se».",
      },
      {
        type: "error",
        sentence: "Es esperado que el sendero sea reabierto en diciembre.",
        answers: ["Se espera que el sendero se reabra en diciembre.", "Se espera reabrir el sendero en diciembre.", "Se espera que el sendero sea reabierto en diciembre."],
        why: "«Es esperado que» es un calco; en español, «se espera que».",
      },
      {
        type: "error",
        sentence: "La cerradura se rompió a propósito para robar las aves.",
        answers: ["Alguien rompió la cerradura a propósito para robar las aves.", "Rompieron la cerradura a propósito para robar las aves."],
        why: "El «se» medio no admite «a propósito»: hace falta un agente.",
      },
      {
        type: "order",
        words: ["Te", "me", "dormiste", "en", "plena", "reunión."],
        why: "Orden fijo: «te» antes de «me».",
      },
      {
        type: "choice",
        q: "En un texto que viene hablando de un perezoso, ¿qué oración mantiene mejor el tema?",
        options: ["Unos estudiantes trasladaron al perezoso a la zona protectora.", "El perezoso fue trasladado a la zona protectora por unos estudiantes.", "A la zona protectora la trasladaron unos estudiantes con el perezoso."],
        answer: 1,
        why: "La pasiva mantiene al perezoso como sujeto y deja el agente, novedad, al final.",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras a un compañero por qué «Se liberaron los monos ayer» puede ser ambiguo y propón dos versiones sin ambigüedad, explicando cuándo usarías cada una.",
        model: "La frase puede entenderse de dos maneras: que alguien liberó a los monos o que los monos se liberaron solos, por ejemplo, escapándose. Para evitarlo, puedo decir «Se liberó a los monos ayer», con «se» impersonal y «a», si no me interesa quién lo hizo. O puedo usar la pasiva, «Los monos fueron liberados ayer por el equipo del centro», si quiero mantener a los monos como tema y el agente es información nueva.",
        checklist: ["Explico las dos lecturas.", "Propongo una versión con «se» + «a» y otra con pasiva.", "Justifico cuándo usar cada una."],
      },
    ],
  },
  complete: {
    canNow: [
      "Distingo el «se» reflexivo, recíproco, medio, accidental, aspectual y el dativo ético con pruebas concretas.",
      "Uso con precisión verbos que cambian de significado con el pronombre.",
      "Elijo entre activa, pasiva con «ser» y «se» para mantener el tema y poner lo nuevo al final.",
      "Uso «uno», la tercera persona del plural, «hay que» o «estar» + participio según el matiz impersonal que quiero.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Pruebas para cada valor» y escribe un ejemplo propio para cada fila.",
      "Dentro de una semana, busca un comunicado de prensa traducido del inglés y reescribe dos frases con pasivas calcadas.",
      "En la próxima clase, lee tu comunicado y pide a tu profesor que señale si alguna oración rompe la continuidad del tema.",
    ],
  },
  related: [
    { path: "/gramatica/se-medio-se-reflexivo-se-dativo", label: "Clase: Se medio, se reflexivo, se dativo ético" },
    { path: "/gramatica/pasiva-y-estructuras-impersonales-con-foco", label: "Clase: Pasiva y estructuras impersonales con foco discursivo" },
  ],
};
