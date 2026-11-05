import type { Module } from "../../types";

/**
 * C2 · semana 7 · Autoestudio espejo de G215 (voseo, tuteo y ustedeo: cambios
 * pragmáticos de registro). Repaso autónomo con los mensajes y llamadas
 * ficticios del servicio de envíos de una cooperativa de Quito.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w07: Module = {
  id: "c2-07",
  level: "c2",
  week: 7,
  kind: "core",
  title: "Tú, vos, usted: el trato también dice cosas",
  subtitle: "Repaso de las formas del voseo, del usted de distancia y de cariño, del plural «ustedes» y de lo que comunica un cambio de trato",
  stop: {
    place: "Quito",
    country: "Ecuador",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g215",
    "c2.voc.w07-trato-cortesia",
    "c2.pron.w07-agudas-voseo",
    "c2.lis.w07-llamada-cambio-trato",
    "c2.read.w07-guia-trato",
    "c2.wri.w07-protocolo-mensajes",
    "c2.spk.w07-negociar-trato",
    "c2.fun.w07-proponer-rechazar-tuteo",
    "c2.disc.w07-coherencia-trato",
  ],
  reviewObjectives: ["c2.gram.g213","c2.gram.g214","c2.voc.w06-revision-textos","c2.pron.w06-pausa-desambigua","c2.lis.w06-reunion-biblioteca","c2.read.w06-columna-boletin","c2.wri.w06-informe-revision","c2.spk.w06-defender-criterio","c2.fun.w06-justificar-correccion","c2.disc.w06-voz-ajena-voz-propia"],
  prerequisites: ["c2-06"],
  goal: {
    canDo: "Puedo reconocer y usar con coherencia las formas del voseo, elegir entre tú, vos, usted, ustedes y vosotros según la zona y la relación, e interpretar qué comunica un cambio de trato dentro de una conversación.",
    steps: [
      "Repasa en la teoría las formas del voseo rioplatense, el mapa de los sistemas de trato y los valores del usted.",
      "Practica adaptando mensajes de un servicio de envíos para clientes de Ecuador, Argentina y España.",
      "Escucha la videollamada sobre una llamada en la que un cliente cambia de trato y lee la guía interna de la cooperativa.",
      "Redacta un protocolo de mensajes, revísalo con la lista de control y negocia el trato en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste estos sistemas con tu profesor. Aquí los repasas con otra situación: el servicio de envíos de dinero de una cooperativa de Quito, que escribe a familias en Ecuador, a migrantes en Argentina y en España, y atiende llamadas de todos ellos. Las instrucciones de este módulo usan «tú»; el voseo aparece como variedad que hay que conocer y respetar.",
    parts: [
      {
        heading: "El voseo es un sistema con sus propias formas",
        body: [
          "En el Río de la Plata (Argentina y Uruguay), en Paraguay y en gran parte de Centroamérica, «vos» es la forma de confianza de la norma culta, no un descuido. Tiene formas verbales propias en el presente de indicativo y en el imperativo, casi siempre agudas: vos tenés, sos, podés, venís, hablás; tené, vení, decí, poné, hablá. Para «ir», el imperativo habitual es «andá».",
          "En el pretérito, la forma normativa es la misma que la de tú: vos dijiste, vos llegaste. «Dijistes», con -s final, es una forma oral no normativa. Los pronombres y posesivos son los de tú: «te», «tu», «tuyo»; tras preposición, «con vos», «para vos». Nunca «os» ni «vuestro». En el imperativo negativo y en el subjuntivo lo más frecuente es usar las formas de tú (no te preocupes, que vengas); las formas agudas (no te preocupés) también se documentan.",
        ],
        table: {
          caption: "Presente de «tener» con el voseo en fila propia",
          head: ["Persona", "Presente", "Imperativo"],
          rows: [
            ["yo", "tengo", "—"],
            ["tú", "tienes", "ten"],
            ["vos", "tenés", "tené"],
            ["él / ella / usted", "tiene", "tenga (usted)"],
            ["nosotros / nosotras", "tenemos", "tengamos"],
            ["vosotros / vosotras", "tenéis", "tened"],
            ["ellos / ellas / ustedes", "tienen", "tengan (ustedes)"],
          ],
        },
        tip: "Si escribes en voseo, revisa la frase entera: verbo, pronombre átono, posesivo y término de preposición tienen que pertenecer al mismo sistema.",
      },
      {
        heading: "Dónde se usa cada sistema y qué plural lleva",
        body: [
          "El tuteo es el sistema de confianza más extendido. Con él conviven otras opciones: el voseo es general en el Río de la Plata, Paraguay y gran parte de Centroamérica, y alterna con el tuteo en zonas de Colombia, Venezuela, Ecuador, Bolivia y Chile. En Chile existe además un voseo verbal coloquial con el pronombre «tú» (tú sabís, tú querís), que no se usa en textos formales.",
          "Para el plural, la frontera es otra: en toda América y en Canarias, «ustedes» es el único plural, tanto de confianza como de respeto. En la mayor parte de España, «vosotros» es el plural de confianza y «ustedes» el de respeto. Por eso «ustedes» con «vuestro» es incoherente en un texto americano: el posesivo es «su» o «de ustedes».",
          "Para un público internacional, la opción menos marcada es «tú» en singular y «ustedes» en plural. No es la única correcta, pero se entiende en todas partes sin sonar local.",
        ],
        examples: [
          { es: "Rosario: «¿Vos ya recibiste el código? Avisame cuando lo tengas».", note: "Voseo rioplatense: «recibiste» (no «recibistes») y «avisame», aguda con pronombre y sin tilde." },
          { es: "Madrid: «¿Habéis recibido el código? Avisadnos cuando lo tengáis».", note: "Plural de confianza peninsular." },
          { es: "Quito: «¿Ya recibieron el código? Avísennos cuando lo tengan».", note: "«Ustedes» como único plural, también entre familiares." },
          { es: "Aplicación internacional: «Recibiste un código. Si son varias personas, avísennos cuando lo tengan».", note: "Opción neutra: tú + ustedes." },
        ],
      },
      {
        heading: "El usted no siempre es distancia",
        body: [
          "El valor más conocido de «usted» es el de respeto o distancia: con desconocidos, superiores, clientes o personas mayores. Pero en algunas zonas, como partes de Colombia y Costa Rica, «usted» también es el trato de la intimidad: entre hermanos, de madre a hijo o en la pareja. En esas comunidades, «usted» puede sonar cariñoso y «tú» puede sonar más formal o ajeno.",
          "Por eso un mismo «usted» no se interpreta igual en todas partes. Antes de deducir que alguien es frío o distante, pregúntate cuál es su trato habitual. En partes de Colombia también se oye «sumercé», un tratamiento tradicional que combina respeto y afecto.",
        ],
        examples: [
          { es: "Madre a su hijo, en una zona de usted afectivo: «Mijo, ¿usted ya comió?».", note: "No es frialdad: es el trato familiar de esa comunidad." },
          { es: "Agente a un cliente desconocido en Quito: «Buenos días, ¿en qué puedo ayudarle?».", note: "Usted de respeto, el esperado en atención al cliente." },
        ],
      },
      {
        heading: "Cambiar de trato también comunica",
        body: [
          "El trato no es fijo dentro de una conversación. Pasar de usted a tú o a vos suele señalar acercamiento: «¿Nos tuteamos?», «Tratame de vos, por favor». Volver al usted después de haber tuteado suele indicar enfado, reproche, ironía o la necesidad de marcar distancia delante de otras personas. Lo que comunica el cambio solo se interpreta comparándolo con el trato habitual de esa persona.",
          "Proponer el tuteo o el voseo es un acto de cortesía que conviene hacer de forma explícita, y rechazarlo también: «Si no le importa, prefiero seguir tratándola de usted; es la costumbre de la cooperativa». En un texto o en una escena, una vez elegido el trato, hay que mantenerlo coherente hasta que haya un motivo para cambiarlo.",
        ],
        table: {
          caption: "Cambios de trato y su lectura habitual",
          head: ["Cambio", "Lectura frecuente", "Ejemplo"],
          rows: [
            ["usted → trato de confianza", "acercamiento, confianza ganada", "—Ya que somos vecinos, ¿nos tuteamos?"],
            ["trato de confianza → usted", "enfado, reproche o ironía", "—Mire, señorita, usted me prometió el envío para el lunes."],
            ["confianza → usted ante otros", "distancia profesional en público", "—Licenciada, ¿me firma usted el informe? (a una amiga, en una reunión)"],
            ["usted → usted", "ningún cambio: es el trato habitual", "—Mamá, ¿usted cómo amaneció? (zona de usted afectivo)"],
          ],
        },
        mistakes: [
          {
            wrong: "Vos sabes que podés llamarme.",
            right: "Vos sabés que podés llamarme.",
            why: "En el voseo rioplatense el presente es agudo: «sabés», igual que «podés».",
          },
          {
            wrong: "Señores clientes: os recordamos que vuestro envío está listo. (Mensaje para Ecuador)",
            right: "Señores clientes: les recordamos que su envío está listo.",
            why: "En América el plural es «ustedes», con «les» y «su».",
          },
          {
            wrong: "Vos llegastes tarde y no te esperé.",
            right: "Vos llegaste tarde y no te esperé.",
            why: "La forma normativa del pretérito con vos es la misma que con tú; «llegastes» es oral y no normativa.",
          },
          {
            wrong: "Interpretación: «El cliente dijo “usted” a la agente; estaba enfadado».",
            right: "Interpretación: «El cliente siempre usa “usted”; su trato no indica enfado».",
            why: "Un usted solo comunica algo si rompe el trato habitual de esa persona.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero identifica el sistema, después comprueba la coherencia y al final interpreta lo que comunica el cambio.",
    exercises: [
      {
        id: "c2-07-gramatica-sistema",
        type: "classify",
        prompt: "Clasifica cada mensaje según el sistema de trato que usa.",
        categories: ["Tuteo", "Voseo", "Usted o ustedes", "Vosotros"],
        items: [
          { text: "Pasá por la oficina cuando puedas y traé la cédula.", cat: 1, why: "«Pasá», «traé»: imperativos agudos de vos." },
          { text: "¿Ya revisaste tu correo? Te mandamos el comprobante.", cat: 0, why: "«Revisaste», «tu», «te»: compatible con tú." },
          { text: "Acérquese a ventanilla con su documento, por favor.", cat: 2, why: "«Acérquese», «su»: usted." },
          { text: "Si queréis cambiar la fecha, escribidnos antes del jueves.", cat: 3, why: "«Queréis», «escribidnos»: vosotros peninsular." },
          { text: "¿Vos tenés el número de giro a mano?", cat: 1, why: "«Vos tenés»." },
          { text: "Recuerden traer sus documentos el lunes.", cat: 2, why: "«Recuerden», «sus»: ustedes." },
          { text: "Si quieres, te llamo mañana y lo vemos juntos.", cat: 0, why: "«Quieres»: presente de tú." },
          { text: "Os esperamos en la sucursal de Lavapiés.", cat: 3, why: "«Os»: pronombre de vosotros." },
        ],
      },
      {
        id: "c2-07-gramatica-formas",
        type: "gap",
        prompt: "Completa los mensajes de la sucursal de Buenos Aires con la forma de vos. Entre corchetes tienes el infinitivo.",
        items: [
          { q: "Si ya ___ el código, ingresalo en la aplicación. [tener]", answers: [["tenés"]], why: "Presente de vos: agudo, con tilde." },
          { q: "___ tranquilo: el dinero llega en dos horas. [quedarse, imperativo]", answers: [["Quedate", "quedate"]], why: "Imperativo de vos con pronombre: «quedate», llana sin tilde." },
          { q: "¿___ vos quien hizo el envío del martes? [ser]", answers: [["Sos", "sos"]], why: "«Ser» con vos: «sos»." },
          { q: "Ayer vos ___ la transferencia dos veces, por eso se bloqueó. [hacer]", answers: [["hiciste"]], why: "Pretérito normativo con vos: igual que con tú, sin -s final." },
          { q: "Si no ___ venir, mandá a alguien con autorización. [poder]", answers: [["podés"]], why: "Presente agudo: «podés»." },
          { q: "El comprobante es para ___, guardalo bien. [vos, tras preposición]", answers: [["vos"]], why: "Tras preposición se usa «vos», no «ti»." },
        ],
      },
      {
        id: "c2-07-gramatica-coherencia",
        type: "error",
        prompt: "Cada mensaje mezcla dos sistemas. Corrígelo para que sea coherente con el sistema indicado.",
        items: [
          {
            sentence: "(Voseo) Vos podés retirar el dinero, pero tienes que traer tu cédula.",
            answers: ["Vos podés retirar el dinero, pero tenés que traer tu cédula."],
            why: "Con vos, el presente es agudo en todos los verbos: «tenés». El posesivo «tu» sí es correcto.",
          },
          {
            sentence: "(Ustedes, Ecuador) Estimados clientes, vuestro envío ya está disponible.",
            answers: ["Estimados clientes, su envío ya está disponible.", "Estimados clientes, el envío de ustedes ya está disponible."],
            why: "En América «ustedes» lleva «su» o «de ustedes», no «vuestro».",
          },
          {
            sentence: "(Voseo) Si querés, el lunes vamos contigo a la sucursal.",
            answers: ["Si querés, el lunes vamos con vos a la sucursal."],
            why: "Tras preposición, el voseo usa «con vos», no «contigo».",
          },
          {
            sentence: "(Tú) Si tú quieres, mañana te llamo, pero avisame antes.",
            answers: ["Si tú quieres, mañana te llamo, pero avísame antes."],
            why: "«Avisame» es imperativo de vos; con tú es «avísame».",
          },
        ],
      },
      {
        id: "c2-07-gramatica-cambio",
        type: "context",
        prompt: "Interpreta el cambio de trato en cada situación.",
        items: [
          {
            context: "Llamada grabada. La clienta, que lleva diez minutos tuteando a la agente («mira, Paola, tú me dijiste…»), dice de pronto: «Mire, señorita, usted me aseguró que el giro llegaba hoy».",
            q: "¿Qué comunica el paso a «usted»?",
            options: [
              "Que la clienta se ha calmado.",
              "Que la clienta ha olvidado el nombre de la agente.",
              "Enfado y reproche: marca distancia con la agente.",
            ],
            answer: 2,
            why: "Volver al usted tras tutear rompe el trato habitual y suele expresar enfado.",
          },
          {
            context: "Un cliente de San José (Costa Rica), que trata de usted a todo el mundo, incluida su madre, dice a la agente: «Usted siempre me atiende bien, muchas gracias».",
            q: "¿Cómo interpretas el «usted»?",
            options: [
              "Como su trato habitual, sin frialdad ni enfado.",
              "Como una señal de enfado.",
              "Como un error de concordancia.",
            ],
            answer: 0,
            why: "En su comunidad el usted también es afectivo: no hay cambio que interpretar.",
          },
          {
            context: "Dos compañeras de la cooperativa se tutean siempre. En una reunión con el gerente, una dice a la otra: «Licenciada Andrade, ¿podría usted presentar las cifras?».",
            q: "¿Qué comunica el cambio?",
            options: [
              "Que están enfadadas.",
              "Distancia profesional ante un tercero, no un conflicto.",
              "Que acaban de conocerse.",
            ],
            answer: 1,
            why: "El usted ante otros puede marcar formalidad pública sin implicar tensión.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico para hablar del trato, de la cortesía y de cómo se negocian las relaciones al hablar.",
    groups: [
      {
        title: "Tratamientos",
        items: [
          { es: "tratar de usted / de tú / de vos", note: "dirigirse a alguien con ese pronombre y sus formas" },
          { es: "tutear / vosear / ustedear", note: "usar habitualmente tú, vos o usted con alguien" },
          { es: "el trato de confianza", note: "el que se usa con personas cercanas" },
          { es: "el usted afectivo", note: "usted usado con cariño entre familiares o amigos en algunas zonas" },
          { es: "sumercé", note: "tratamiento tradicional de respeto y afecto en partes de Colombia" },
          { es: "romper el trato", note: "cambiar de pronombre de forma inesperada" },
        ],
      },
      {
        title: "Negociar la relación",
        items: [
          { es: "¿Nos tuteamos?", note: "propuesta explícita de pasar a tú" },
          { es: "tratame de vos", note: "invitación al voseo en zonas voseantes" },
          { es: "marcar distancia", note: "mostrar con el lenguaje que la relación es menos cercana" },
          { es: "tomarse confianzas", note: "tratar a alguien con más cercanía de la que corresponde" },
          { es: "declinar con cortesía", note: "rechazar una propuesta sin ofender" },
          { es: "ser de trato fácil", note: "ser una persona cercana y accesible" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-07-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su significado.",
        pairs: [
          { left: "el usted afectivo", right: "usted usado con cariño entre familiares o amigos en algunas zonas" },
          { left: "romper el trato", right: "cambiar de pronombre de forma inesperada" },
          { left: "marcar distancia", right: "mostrar con el lenguaje que la relación es menos cercana" },
          { left: "tomarse confianzas", right: "tratar a alguien con más cercanía de la que corresponde" },
          { left: "declinar con cortesía", right: "rechazar una propuesta sin ofender" },
          { left: "sumercé", right: "tratamiento tradicional de respeto y afecto en partes de Colombia" },
        ],
      },
      {
        id: "c2-07-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["nos tuteamos", "marcar distancia", "se tomó confianzas", "trato de confianza"],
        items: [
          { q: "Después de tres años trabajando juntos, el gerente me dijo: «Oiga, ¿y si ___?».", answers: [["nos tuteamos"]] },
          { q: "La clienta volvió al usted para ___ cuando el agente le habló con demasiada familiaridad.", answers: [["marcar distancia"]] },
          { q: "Al nuevo agente lo reprendieron porque ___ con una clienta mayor y la llamó «mi reina».", answers: [["se tomó confianzas"]] },
          { q: "Con mis primos de Rosario el ___ es el vos; con mis tíos de Quito, muchas veces el usted.", answers: [["trato de confianza"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Las formas agudas del voseo y el acento con pronombres",
    explanation: [
      "Casi todas las formas propias del voseo son agudas: te-NÉS, po-DÉS, ve-NÍS, ha-BLÁS; te-NÉ, ve-NÍ, de-CÍ. Por eso llevan tilde cuando terminan en vocal o en -s. El oído las distingue de las de tú por la posición del acento: TIE-nes frente a te-NÉS, VEN frente a ve-NÍ.",
      "Cuando el imperativo de vos lleva un pronombre detrás, el acento no se mueve, pero la palabra pasa a ser llana y pierde la tilde: decí → de-CI-me, contá → con-TA-me, avisá → a-vi-SA-me. Con tú, el acento recae en otra sílaba y la tilde aparece: DI-me, CUÉN-ta-me, a-VÍ-sa-me.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el contraste de acento, no como modelo de una variedad.",
    ],
    table: {
      caption: "Mismo verbo, distinto acento",
      head: ["Tú", "Vos"],
      rows: [
        ["tienes (TIE-nes)", "tenés (te-NÉS)"],
        ["cuéntame (CUÉN-ta-me)", "contame (con-TA-me)"],
        ["avísame (a-VÍ-sa-me)", "avisame (a-vi-SA-me)"],
        ["siéntate (SIÉN-ta-te)", "sentate (sen-TA-te)"],
      ],
    },
    perceive: {
      id: "c2-07-percepcion",
      type: "listen",
      prompt: "Escucha cada mensaje y decide qué sistema de trato usa por la posición del acento.",
      items: [
        {
          q: "¿Qué sistema oyes?",
          options: ["tuteo", "voseo"],
          answer: 1,
          why: "a-vi-SA-me: acento en la penúltima, propio del imperativo de vos con pronombre.",
          audio: "Avisame cuando llegue el dinero, por favor.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué sistema oyes?",
          options: ["tuteo", "voseo"],
          answer: 0,
          why: "a-VÍ-sa-me: acento en la antepenúltima, imperativo de tú.",
          audio: "Avísame cuando llegue el dinero, por favor.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué forma verbal oyes?",
          options: ["tienes", "tenés", "tiene"],
          answer: 1,
          why: "te-NÉS: aguda.",
          audio: "Si tenés dudas, llamanos al número de siempre.",
          voice: "es-UY-m",
        },
        {
          q: "¿Qué forma oyes al principio?",
          options: ["cuéntame", "contame"],
          answer: 0,
          why: "CUÉN-ta-me: diptongo y acento en la primera sílaba, propio de tú.",
          audio: "Cuéntame qué pasó con el giro de tu hermana.",
          voice: "es-CO-f",
        },
      ],
    },
    produce: [
      { text: "Vos tenés el código; ingresalo y avisame.", tip: "Acento en te-NÉS, in-gre-SA-lo y a-vi-SA-me.", voice: "es-AR-m" },
      { text: "Tú tienes el código; ingrésalo y avísame.", tip: "Ahora el acento sube: TIE-nes, in-GRÉ-sa-lo, a-VÍ-sa-me.", voice: "es-ES-m" },
      { text: "Si no le molesta, prefiero seguir tratándola de usted.", tip: "Tono amable y descendente al final: estás declinando con cortesía.", voice: "es-CO-m" },
      { text: "Sentate, contame tranquila qué pasó.", tip: "Dos imperativos de vos con pronombre: sen-TA-te, con-TA-me.", voice: "es-UY-f" },
    ],
    spelling: "Con pronombre detrás, el imperativo de vos se escribe sin tilde (contame, decime, avisame) porque pasa a ser llano. Si escribes «contáme», añades una tilde que la norma no pide.",
  },
  listening: {
    title: "Videollamada: la grabación de la clienta Morales",
    context: "Gabriela coordina en Quito el servicio de envíos de una cooperativa. Por videollamada revisa con Facundo, agente de la sucursal de Córdoba (Argentina), y con Nerea, agente de la sucursal de Madrid, una llamada grabada y los mensajes automáticos de la aplicación. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "g", name: "Gabriela", voice: "es-CO-f", role: "Coordinadora del servicio en Quito" },
      { id: "f", name: "Facundo", voice: "es-AR-m", role: "Agente en Córdoba" },
      { id: "n", name: "Nerea", voice: "es-ES-f", role: "Agente en Madrid" },
    ],
    script: [
      { speaker: "g", text: "Buenos días a los dos. Quería empezar por la llamada de la señora Morales, la que se quejó la semana pasada. ¿La pudieron escuchar? Me interesa sobre todo el minuto seis." },
      { speaker: "n", text: "Sí, la escuché anoche. Al principio todo va bien: ella tutea a Paola, la llama por su nombre, le cuenta que el dinero es para la operación de su madre. Y de repente, cuando Paola le dice que el giro llegará el lunes y no el viernes, cambia: «Mire, señorita, usted me aseguró otra cosa»." },
      { speaker: "f", text: "Y ahí está todo. No hace falta que levante la voz: con ese «usted» ya te está diciendo que está enojada. Paola no lo notó y siguió tuteándola como si nada, y eso la molestó más." },
      { speaker: "g", text: "Exacto. Y ojo, que no siempre es así. Aquí en Quito tenemos clientes mayores que usan usted con todo el mundo, hasta con los nietos. Si uno de ellos dice usted, no hay que leer nada. Lo que comunica algo es el cambio, no el usted en sí." },
      { speaker: "n", text: "Pues entonces la recomendación para los agentes sería algo así: si el cliente vuelve al usted después de haber tuteado, tú también vuelves al usted, reconoces el problema y ofreces una solución concreta." },
      { speaker: "g", text: "Me parece bien. Pasemos a los mensajes automáticos. Facundo, tú me dijiste que los de la aplicación suenan raros en Argentina." },
      { speaker: "f", text: "Muy raros. Dicen «tú tienes un envío pendiente, revísalo». Acá nadie habla así; suena a doblaje de película. Para Argentina yo pondría «tenés un envío pendiente, revisalo». Y en el mensaje de bienvenida, «contanos qué necesitás»." },
      { speaker: "n", text: "En España pasa lo contrario con el plural. El mensaje para familias dice «ustedes pueden ver el estado del envío», y para un grupo de amigos que se mandan dinero suena a carta del banco. Aquí, entre conocidos, diríamos «podéis ver el estado del envío»." },
      { speaker: "g", text: "El problema es que la aplicación es una sola y no siempre sabemos desde dónde la abren. ¿Qué hacemos con los textos generales, los que ven todos?" },
      { speaker: "f", text: "Para esos, tú y ustedes. A un argentino el tú le suena un poco ajeno, pero lo entiende y no le molesta en un texto escrito. Lo que no haría nunca es poner vos en un texto para todos: en algunos lugares puede sonar demasiado familiar, incluso poco respetuoso." },
      { speaker: "n", text: "Y vosotros tampoco, claro, porque en América nadie lo usa. Pero cuando sepamos que el cliente está en España, el mensaje personalizado puede ir con vosotros." },
      { speaker: "g", text: "Entonces queda así: textos generales con tú y ustedes; mensajes personalizados según el país, con voseo para Argentina y Uruguay y vosotros para España; y en las llamadas, atención al trato del cliente. Si cambia, cambiamos con él. Y una cosa más: el que escriba en voseo, que revise todo, verbo, pronombre y posesivo, porque los mensajes mezclados son lo que peor suena." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la videollamada completa sin abrir la transcripción. ¿Qué dos asuntos tratan y a qué acuerdo llegan?",
        exercise: {
          id: "c2-07-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y el acuerdo general.",
          items: [
            {
              q: "¿Qué dos asuntos revisan?",
              options: [
                "Una llamada con un cambio de trato y los mensajes automáticos de la aplicación.",
                "Las comisiones de los envíos y el horario de las sucursales.",
                "La contratación de nuevos agentes y su formación.",
              ],
              answer: 0,
              why: "Empiezan por la grabación de la señora Morales y siguen con los textos de la aplicación.",
            },
            {
              q: "¿Cuál es el acuerdo final sobre los textos?",
              options: [
                "Escribir todo en voseo para sonar más cercanos.",
                "Usar tú y ustedes en los textos generales y adaptar los personalizados al país.",
                "Usar siempre usted para no ofender a nadie.",
              ],
              answer: 1,
              why: "Gabriela resume: textos generales neutros y mensajes personalizados según el país.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada argumento. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-07-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué error cometió Paola, según Facundo?",
              options: [
                "Tratar de usted a la clienta desde el principio.",
                "Seguir tuteando a la clienta cuando esta volvió al usted.",
                "Colgar antes de tiempo.",
              ],
              answer: 1,
              why: "No percibió que el usted señalaba enfado.",
            },
            {
              q: "¿Por qué advierte Gabriela que no siempre hay que interpretar el usted?",
              options: [
                "Porque en Quito nadie usa usted.",
                "Porque la señora Morales no estaba enfadada.",
                "Porque hay clientes que lo usan siempre, incluso con la familia.",
              ],
              answer: 2,
              why: "Lo significativo es el cambio respecto del trato habitual.",
            },
            {
              q: "¿Por qué no usaría Facundo el voseo en un texto para todos los países?",
              options: [
                "Porque fuera de las zonas voseantes puede sonar demasiado familiar.",
                "Porque es incorrecto en la norma culta.",
                "Porque la aplicación no admite tildes.",
              ],
              answer: 0,
              why: "El voseo es norma culta en su zona, pero fuera de ella puede chocar.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en las formas que se citan en la videollamada. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-07-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con el sistema o el valor que tiene.",
          pairs: [
            { left: "Mire, señorita, usted me aseguró otra cosa", right: "vuelta al usted: enfado" },
            { left: "tenés un envío pendiente, revisalo", right: "voseo para Argentina" },
            { left: "podéis ver el estado del envío", right: "plural de confianza en España" },
            { left: "tú y ustedes", right: "opción para textos generales" },
            { left: "usted con todo el mundo, hasta con los nietos", right: "trato habitual que no comunica cambio" },
          ],
          why: "Cada forma se interpreta según la zona, el destinatario y el trato habitual.",
        },
      },
    ],
  },
  reading: {
    title: "Un solo servicio, muchas maneras de hablarle a la gente",
    genre: "Guía interna de estilo",
    frame: "Texto de Gabriela Andrade para la guía interna del servicio de envíos de una cooperativa de ahorro de Quito. Personas, entidad y casos son ficticios.",
    text: [
      "Cuando empezamos a enviar dinero desde Quito a las familias que tienen parientes en Madrid, en Córdoba o en Guayaquil, pensábamos que el reto sería técnico: tipos de cambio, plazos, comisiones. Muy pronto descubrimos que una parte importante de las quejas no tenía que ver con el dinero, sino con la manera de hablarle a la gente. Un mensaje correcto podía sonar frío en un país y demasiado familiar en otro. Esta guía recoge lo que hemos aprendido para que cada agente, y cada mensaje automático, trate a las personas como ellas esperan ser tratadas.",
      "Lo primero es aceptar que no existe un trato correcto para todo el mundo hispanohablante. Hay sistemas distintos, y todos son legítimos. En la mayor parte de España, el singular de confianza es tú y el plural de confianza es vosotros. En toda América, en cambio, el único plural es ustedes, tanto para la familia como para desconocidos. En Argentina, Uruguay, Paraguay y gran parte de Centroamérica, la forma de confianza en singular es vos, con sus propios verbos: vos tenés, vos podés, vení, decime. Ese voseo es la norma culta de esas zonas; se usa en la prensa, en la universidad y en la publicidad, y no es un descuido que haya que corregir.",
      "Quien escriba en voseo debe hacerlo con coherencia. Hemos recibido mensajes de agentes bienintencionados que mezclaban sistemas: «vos podés retirar el dinero, pero tienes que traer tu cédula». A un cliente de Córdoba esa frase le suena a alguien que imita el acento sin conocerlo. En el voseo, todos los verbos en presente son agudos (podés, tenés), el pronombre es te y el posesivo es tu, y detrás de preposición se dice con vos o para vos. En pasado, la forma cuidada es vos recibiste, sin la ese final que a veces se oye. Si un agente no domina el sistema, es preferible que use tú: se entiende y no suena a imitación.",
      "El usted merece capítulo aparte. Para la mayoría de nuestros clientes es la forma de respeto y la que esperan de una entidad financiera, al menos en el primer contacto. Pero no debe interpretarse siempre como distancia. Aquí en la Sierra, como en partes de Colombia y de Costa Rica, muchas personas usan usted con sus hijos, con sus parejas, con sus amigos de toda la vida. Una señora que dice «mijo, ¿usted ya almorzó?» está siendo cariñosa, no fría. Por eso pedimos a los agentes que no saquen conclusiones del usted aislado y que se fijen, más bien, en los cambios.",
      "Porque el trato no es fijo dentro de una conversación, y esos cambios dicen mucho. Si un cliente que empezó tratándonos de usted pasa al tú o al vos, normalmente está señalando confianza; podemos acompañarlo, salvo que el protocolo lo impida, y en ese caso conviene decirlo con amabilidad. Si, al revés, alguien que nos tuteaba vuelve de pronto al usted, casi siempre está molesto o quiere marcar distancia. La grabación que usamos en la formación lo muestra con claridad: una clienta que llevaba diez minutos tuteando a la agente dijo «mire, señorita, usted me aseguró otra cosa», y la agente siguió tuteándola como si nada hubiera pasado. La queja que recibimos después no hablaba del retraso, sino de que «no la escucharon».",
      "Proponer un cambio de trato también es un acto de cortesía. Cuando un cliente pregunta «¿nos tuteamos?», el agente puede aceptar o declinar, pero no debe ignorar la pregunta. Una fórmula que funciona es: «Con mucho gusto, aunque por costumbre de la cooperativa le seguiré tratando de usted, si no le molesta». En Argentina, donde la propuesta suele ser «tratame de vos», la respuesta equivalente es igual de válida. Lo importante es que la decisión sea explícita y que, una vez tomada, se mantenga.",
      "Para los mensajes automáticos hemos adoptado dos niveles. Los textos que ve cualquier usuario de la aplicación, sin saber desde dónde la abre, usan tú en singular y ustedes en plural. No es la única opción correcta, pero es la que se entiende en todas partes sin sonar local. Evitamos el vos en esos textos generales porque fuera de las zonas voseantes puede resultar demasiado familiar, y evitamos el vosotros porque en América no se usa. Los mensajes personalizados, en cambio, se adaptan al país del destinatario: voseo para Argentina y Uruguay, vosotros para los grupos de confianza en España, usted para el primer contacto en Ecuador.",
      "Ninguna de estas reglas sustituye la atención. Un buen agente escucha cómo le hablan y responde en consecuencia, igual que hace cualquier persona educada en una conversación. Lo que esta guía pretende es que esa atención no dependa solo del instinto de cada uno, sino de un conocimiento compartido: que el voseo es una norma y no un error, que el usted puede ser cariño y no frialdad, que ustedes es el único plural de medio mundo y que un cambio de pronombre, a veces, dice más que cualquier queja por escrito.",
    ],
    glossary: [
      { es: "la Sierra", note: "región andina del Ecuador, donde está Quito" },
      { es: "bienintencionado", note: "que actúa con buena intención" },
      { es: "almorzar", note: "comer al mediodía" },
    ],
    tasks: [
      {
        id: "c2-07-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la guía.",
        items: [
          {
            q: "¿Qué recomienda la guía a un agente que no domina el voseo?",
            options: [
              "Que use usted con todos los clientes argentinos.",
              "Que use tú, porque se entiende y no suena a imitación.",
              "Que pida a un compañero que escriba por él.",
            ],
            answer: 1,
            why: "El tercer párrafo prefiere tú a un voseo mal construido.",
          },
          {
            q: "¿Qué debe hacer un agente cuando un cliente propone tutearse y el protocolo no lo permite?",
            options: [
              "Ignorar la propuesta y seguir con usted.",
              "Aceptar siempre para no ofender.",
              "Declinar de forma explícita y amable.",
            ],
            answer: 2,
            why: "La guía propone una fórmula de rechazo cortés.",
          },
          {
            q: "¿Por qué la queja de la clienta hablaba de que «no la escucharon»?",
            options: [
              "Porque la agente no reaccionó a su vuelta al usted.",
              "Porque la llamada se cortó.",
              "Porque el giro llegó a otra persona.",
            ],
            answer: 0,
            why: "La clienta había señalado su enfado con el cambio de trato.",
          },
        ],
      },
      {
        id: "c2-07-lectura-niveles",
        type: "match",
        prompt: "Relaciona cada destinatario con el trato que recomienda la guía.",
        pairs: [
          { left: "usuario desconocido de la aplicación", right: "tú en singular y ustedes en plural" },
          { left: "cliente de Córdoba en un mensaje personalizado", right: "voseo coherente" },
          { left: "grupo de amigos en Madrid", right: "vosotros" },
          { left: "primer contacto con un cliente en Ecuador", right: "usted" },
        ],
      },
      {
        id: "c2-07-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión de la guía con argumentos propios.",
        items: [
          {
            prompt: "La guía evita el vos en los textos generales de la aplicación. Explica en 70–90 palabras por qué lo hace, si estás de acuerdo y qué alternativa propondrías para un público mayoritariamente argentino.",
            model: "La guía evita el vos porque, fuera de las zonas voseantes, puede sonar demasiado familiar y porque el tú se entiende en todas partes. Estoy de acuerdo para un público mezclado. Pero si la mayoría de usuarios fuera argentina, el tú sonaría ajeno en cada pantalla. En ese caso propondría detectar el país al instalar la aplicación y mostrar los textos en voseo coherente, reservando tú y ustedes solo para quien no indique país.",
            checklist: [
              "Explico el motivo de la guía.",
              "Tomo posición y la justifico.",
              "Mi alternativa respeta la coherencia del voseo.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la guía presenta el voseo y el usted como sistemas legítimos y no como errores.",
      items: [
        { quote: "Ese voseo es la norma culta de esas zonas", note: "El voseo se describe como norma, no como desviación." },
        { quote: "Si un agente no domina el sistema, es preferible que use tú", note: "La coherencia importa más que la imitación." },
        { quote: "Una señora que dice «mijo, ¿usted ya almorzó?» está siendo cariñosa, no fría.", note: "El usted afectivo se interpreta en su comunidad." },
        { quote: "un cambio de pronombre, a veces, dice más que cualquier queja por escrito", note: "El cambio de trato como mensaje pragmático." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, adaptación al destinatario, reescritura y escritura breve. Termina recuperando las clases de las semanas anteriores de C2.",
    exercises: [
      {
        id: "c2-07-orden",
        type: "order",
        prompt: "Ordena las palabras para formar mensajes coherentes con el sistema indicado.",
        items: [
          {
            words: ["Si", "querés,", "pasá", "mañana", "y", "traé", "tu", "documento."],
            why: "Voseo coherente: «querés», «pasá», «traé», «tu».",
          },
          {
            words: ["Si", "lo", "prefieren,", "pueden", "retirar", "su", "envío", "mañana."],
            why: "Ustedes con «su»: plural americano.",
          },
          {
            words: ["Si", "os", "viene", "mejor,", "venid", "el", "lunes."],
            why: "Vosotros peninsular: «os», «venid».",
          },
        ],
      },
      {
        id: "c2-07-destinatario",
        type: "context",
        prompt: "Elige el mensaje más adecuado para cada destinatario.",
        items: [
          {
            context: "Mensaje personalizado para un cliente joven de Montevideo que siempre escribe en voseo.",
            q: "¿Qué versión eliges?",
            options: [
              "Tu envío ya llegó; si tienes dudas, llámanos.",
              "Su envío ya llegó; si tiene dudas, llámenos.",
              "Tu envío ya llegó; si tenés dudas, llamanos.",
            ],
            answer: 2,
            why: "Voseo coherente: «tenés», «llamanos», con el posesivo «tu».",
          },
          {
            context: "Correo para un grupo de cinco hermanos ecuatorianos que comparten el envío para su madre.",
            q: "¿Qué versión eliges?",
            options: [
              "Queridos hermanos: ya podéis ver el estado de vuestro envío.",
              "Estimados hermanos: ya pueden ver el estado de su envío.",
              "Hermanos: ya podés ver el estado de tu envío.",
            ],
            answer: 1,
            why: "En América el plural es «ustedes», con «su».",
          },
          {
            context: "Pantalla de inicio de la aplicación, vista en todos los países.",
            q: "¿Qué versión eliges?",
            options: [
              "Hola. Revisa tus envíos y, si viajan juntos, compartan el código.",
              "Hola. Revisá tus envíos y, si viajáis juntos, compartid el código.",
              "Hola. Revise sus envíos y, si viajáis juntos, compartid el código.",
            ],
            answer: 0,
            why: "Tú + ustedes: la opción neutra para un público internacional.",
          },
        ],
      },
      {
        id: "c2-07-adaptar",
        type: "transform",
        prompt: "Adapta cada mensaje al sistema indicado sin cambiar el contenido.",
        items: [
          {
            source: "Tienes un envío pendiente. Revísalo y confírmanos los datos.",
            instruction: "Pásalo a voseo rioplatense.",
            answers: ["Tenés un envío pendiente. Revisalo y confirmanos los datos."],
            why: "Presente agudo y imperativos de vos con pronombre, sin tilde.",
          },
          {
            source: "Si queréis cambiar el destinatario, escribidnos antes del viernes.",
            instruction: "Pásalo a ustedes para un público americano.",
            answers: ["Si quieren cambiar el destinatario, escríbannos antes del viernes."],
            why: "Plural americano: «quieren», «escríbannos».",
          },
          {
            source: "Vos sabés que podés contar con nosotros; decinos qué necesitás.",
            instruction: "Pásalo a usted para un primer contacto formal.",
            answers: ["Usted sabe que puede contar con nosotros; díganos qué necesita."],
            why: "Usted: tercera persona en verbos e imperativo «díganos».",
          },
        ],
      },
      {
        id: "c2-07-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Un cliente quiteño de setenta años escribe: «Mijita, ¿nos tratamos de tú? Usted ya es como de la familia». El protocolo pide usted. Escribe una respuesta de 40–60 palabras que decline con cariño y mantenga la relación.",
            model: "Qué amable, don Rodrigo, muchas gracias. Para mí también es un gusto atenderle. Si no le molesta, le seguiré tratando de usted, que es la costumbre de la cooperativa, pero eso no cambia nada: aquí estoy para lo que necesite. Su envío para Madrid ya está confirmado y llegará el jueves.",
            checklist: [
              "Agradezco la propuesta.",
              "Declino de forma explícita y cortés.",
              "Mantengo el usted de forma coherente.",
            ],
          },
          {
            prompt: "Escribe la nota para el equipo (40–60 palabras) que explique a los agentes nuevos qué hacer cuando un cliente que tuteaba vuelve al usted.",
            model: "Si un cliente que nos tuteaba vuelve al usted, casi siempre está molesto o quiere marcar distancia. No sigas tuteándolo: vuelve tú también al usted, reconoce el problema con una frase concreta y ofrece una solución con plazo. Ojo: si el cliente usó usted desde el principio, no hay cambio que interpretar.",
            checklist: [
              "Explico qué suele comunicar el cambio.",
              "Doy una instrucción concreta.",
              "Distingo el cambio del trato habitual.",
            ],
          },
        ],
      },
      {
        id: "c2-07-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las semanas anteriores de C2 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G213 (ambigüedad accidental). Estímulo, mensaje de un agente a un cliente sobre su hija: «Le confirmamos que su cuenta ya está activa». Explica por qué «su» puede ser ambiguo cuando se trata de usted y reescribe el mensaje con una sola lectura.",
            model: "Con usted, «su» puede remitir al cliente o a una tercera persona mencionada antes, en este caso la hija. Si la cuenta es de la hija: «Le confirmamos que la cuenta de su hija ya está activa». Si es del cliente: «Le confirmamos que su cuenta, la de usted, ya está activa», o mejor, «que la cuenta a su nombre ya está activa».",
            checklist: [
              "Identifico los dos poseedores posibles.",
              "La reescritura explicita el referente.",
            ],
          },
          {
            prompt: "Recuperación de la clase G214 (gramaticalidad y norma). Estímulo, transcripción de una llamada: «¿Y vos por qué no me avisastes?». Di qué juicio merece «avisastes», qué harías en la transcripción de la llamada y qué escribirías en un mensaje oficial.",
            model: "«Avisastes» es una forma real y frecuente en la lengua oral, pero no normativa: la forma cuidada con vos es «avisaste». En la transcripción de la llamada la mantendría, porque es la voz del cliente. En un mensaje oficial de la cooperativa escribiría «¿Por qué no nos avisaste?» o, en tuteo, lo mismo.",
            checklist: [
              "Califico la forma como no normativa, no agramatical.",
              "Distingo la transcripción del mensaje oficial.",
            ],
          },
          {
            prompt: "Recuperación de la clase G211 (construcciones parentéticas). Estímulo: «El agente, que —según dijo la clienta— la había tratado de tú desde el principio, pidió disculpas». Explica qué aporta el paréntesis y qué pasa si lo eliminas.",
            model: "El inciso «según dijo la clienta» atribuye la información a otra persona: el texto no garantiza que el agente la tuteara desde el principio, solo informa de lo que ella afirmó. Si lo eliminamos, el narrador asume ese dato como cierto. El paréntesis, por tanto, protege a quien escribe y matiza la responsabilidad.",
            checklist: [
              "Explico la función de atribución del inciso.",
              "Señalo qué cambia si se elimina.",
            ],
          },
          {
            prompt: "Recuperación de la clase G207 (indicativo y subjuntivo según perspectiva). Estímulo: «Entiendo que esté molesta» frente a «Entiendo que está molesta». Explica qué hace el agente con cada versión y cuál usarías para calmar a una clienta.",
            model: "Con subjuntivo, «entiendo que esté molesta» valora su enfado como comprensible: es empatía. Con indicativo, «entiendo que está molesta» significa «deduzco que está molesta»: es una constatación. Para calmar a la clienta usaría la primera, porque reconoce su reacción como razonable.",
            checklist: [
              "Distingo valoración y constatación.",
              "Elijo y justifico la versión empática.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta el protocolo de trato del servicio de envíos (400–520 palabras). Explica a los agentes qué trato usar en los textos generales, en los mensajes personalizados para Ecuador, Argentina y España y en las llamadas; cómo interpretar los cambios de trato y cómo aceptar o declinar un tuteo.",
    context: "El protocolo lo leerán agentes de tres países que conocen su propio sistema, pero no siempre los de los demás. Usa ejemplos breves de mensajes reales o inventados. El protocolo se escribe con tú, porque se dirige a cada agente.",
    steps: [
      "Haz una tabla con tres columnas: situación, trato recomendado y ejemplo. Incluye textos generales, un mensaje en voseo, uno con vosotros, uno con ustedes y una llamada con cambio de trato.",
      "Decide el orden: principio general, textos de la aplicación, mensajes por país, llamadas y propuestas de tuteo.",
      "Redacta sin copiar el modelo. Cada ejemplo de mensaje tiene que ser coherente en verbos, pronombres y posesivos.",
      "Revisa el protocolo con la lista de control: corrige cualquier mezcla de sistemas y comprueba las tildes de los imperativos de vos con pronombre.",
    ],
    useLanguage: [
      "vos tenés / podés; contame, avisame",
      "ustedes + su / les en América; vosotros + os / vuestro en España",
      "volver al usted suele indicar…",
      "el usted afectivo de algunas zonas",
      "Si no le molesta, prefiero seguir tratándole de usted.",
      "tú + ustedes como opción neutra",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Este protocolo existe porque nuestros clientes no hablan todos igual, y ninguno de ellos habla mal. Una familia de Quito, un estudiante de Córdoba y un grupo de amigos de Madrid esperan cosas distintas cuando reciben un mensaje nuestro. Tu tarea es tratarlos como ellos esperan, sin imitar lo que no dominas. El principio es sencillo: en los textos que ve todo el mundo, usa tú en singular y ustedes en plural; en los mensajes personalizados, adapta el trato al país del cliente; y en las llamadas, escucha cómo te hablan, porque un cambio de pronombre puede ser la primera señal de un problema.",
    ],
    checklist: [
      "Cada ejemplo es coherente en verbos, pronombres y posesivos.",
      "Explico el plural americano y el peninsular sin presentar uno como el correcto.",
      "Presento el voseo como norma de su zona.",
      "Explico qué comunica volver al usted y en qué casos no comunica nada.",
      "Incluyo una fórmula para aceptar y otra para declinar el tuteo.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Formación para agentes nuevos",
        prompt: "Eres Gabriela. Explica en unos cuatro minutos a un grupo de agentes nuevos los sistemas de trato que van a encontrar: tuteo, voseo, usted de distancia y de cariño, ustedes y vosotros. Usa al menos un ejemplo de cada uno y termina con la regla sobre los cambios de trato.",
        prep: [
          "Anota un ejemplo breve para cada sistema.",
          "Prepara una frase que resuma la regla sobre los cambios.",
        ],
        seconds: 240,
        model: "Bienvenidos. Lo primero que tienen que saber es que no hay una sola forma correcta de tratar a un cliente. En Argentina les van a decir «vos tenés razón», y eso es norma culta allí, no un error. Aquí en la Sierra, una señora puede tratar de usted a su nieto, y eso es cariño. En España, un grupo de amigos espera «podéis»…",
        selfCheck: [
          "Pronuncio las formas de vos con acento agudo.",
          "Doy un ejemplo de cada sistema.",
          "No presento ninguna variedad como incorrecta.",
        ],
      },
      {
        title: "Atender a una clienta que vuelve al usted",
        prompt: "Eres agente. La clienta llevaba la llamada tuteándote y dice: «Mire, joven, usted me dijo que el dinero llegaba hoy y mi madre lo necesita». Responde: vuelve al usted, reconoce el problema, hazle dos preguntas para resolverlo y ofrece una solución con plazo.",
        prep: [
          "Prepara una frase de reconocimiento sin excusas.",
          "Piensa dos preguntas útiles (número de giro, ciudad de destino).",
        ],
        seconds: 150,
        model: "Tiene usted toda la razón, señora, y le pido disculpas: le dije que llegaba hoy y no ha sido así. ¿Me confirma el número de giro, por favor? ¿Su madre lo retira en Guayaquil o en Quito? Voy a pedir que se libere hoy antes de las cinco y la llamo yo misma para confirmárselo.",
        selfCheck: [
          "Vuelvo al usted de forma coherente.",
          "Hago dos preguntas reales.",
          "Ofrezco una solución con plazo.",
        ],
      },
      {
        title: "Negociar el trato con un colega",
        prompt: "Un colega nuevo de Rosario te dice: «Che, tratame de vos, que acá somos todos compañeros». Tú eres de Quito y estás más cómodo con el usted entre colegas. Negocia el trato: acepta, propón una alternativa o declina, y explica tus motivos con naturalidad.",
        prep: [
          "Decide si aceptas, propones tú o declinas.",
          "Prepara una frase que muestre que tu decisión no es frialdad.",
        ],
        seconds: 120,
        selfCheck: [
          "Respondo de forma explícita a la propuesta.",
          "Mantengo la coherencia del trato que elijo.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tus ejemplos de mensajes y una duda concreta. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Pregunta",
        task: "Pregúntale a tu profesor qué trato usa con su familia, con sus colegas y con desconocidos, y si alguna vez cambió de trato con alguien y por qué.",
        phrases: ["¿Con quién usas usted?", "¿Te ha pasado que alguien volviera al usted contigo?"],
      },
      {
        move: "Adapta",
        task: "Lleva un mensaje corto y pide a tu profesor que te lo dicte; reescríbelo en voseo, en vosotros y en ustedes, y comprobad juntos la coherencia.",
        phrases: ["En voseo quedaría…", "¿Aquí va «su» o «vuestro»?"],
      },
      {
        move: "Interpreta",
        task: "Describe una escena de una serie o una película en la que un personaje cambie de trato y explica qué comunica ese cambio.",
        phrases: ["Hasta ese momento la tuteaba…", "Cuando vuelve al usted, lo que quiere decir es…"],
      },
      {
        move: "Negocia",
        task: "Representa con tu profesor la propuesta «¿nos tuteamos?» y practica aceptarla y declinarla con cortesía.",
        phrases: ["Con mucho gusto.", "Si no te importa, prefiero…"],
      },
    ],
    bring: "Tu protocolo revisado, la tabla de situaciones y, si quieres, la grabación de la formación para agentes.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué frase es coherente con el voseo rioplatense?",
        options: [
          "Vos sabes que podés venir cuando quieras.",
          "Vos sabés que podés venir cuando quieras.",
          "Vos sabéis que podéis venir cuando queráis.",
        ],
        answer: 1,
        why: "Presente agudo en los dos verbos («sabés», «podés»); en el subjuntivo lo más frecuente es la forma de tú, «quieras».",
      },
      {
        type: "choice",
        q: "Una clienta que tutea a la agente desde el principio dice de pronto: «Usted no me está escuchando». ¿Qué comunica el cambio?",
        options: [
          "Enfado o distancia.",
          "Mayor confianza.",
          "Nada: es su trato habitual.",
        ],
        answer: 0,
        why: "Volver al usted tras tutear suele indicar enfado o reproche.",
      },
      {
        type: "listen",
        q: "Escucha el mensaje. ¿A quién se dirige con más probabilidad?",
        options: [
          "A un grupo de clientes en Ecuador.",
          "A un cliente en Uruguay.",
          "A un grupo de amigos en Madrid.",
        ],
        answer: 2,
        why: "«Podéis» y «vuestros» son formas de vosotros, propias del plural de confianza en España.",
        audio: "Ya podéis consultar vuestros envíos desde la aplicación.",
        voice: "es-ES-m",
      },
      {
        type: "gap",
        q: "Mensaje para Buenos Aires: Si ___ algún problema con el código, escribinos. [tener]",
        answers: [["tenés"]],
        hint: "Presente de vos, agudo y con tilde.",
        why: "«Tenés»: presente de indicativo de vos.",
      },
      {
        type: "gap",
        q: "Mensaje para Quito: Estimados clientes, ___ envío llegará el lunes.",
        answers: [["su"]],
        hint: "Posesivo de «ustedes» en América.",
        why: "En América, «ustedes» lleva el posesivo «su».",
      },
      {
        type: "transform",
        source: "Contame qué pasó y decime cómo te puedo ayudar.",
        instruction: "Reformula el mensaje para un cliente al que tratas de usted, sin cambiar el contenido.",
        answers: ["Cuénteme qué pasó y dígame cómo le puedo ayudar.", "Cuénteme qué pasó y dígame cómo lo puedo ayudar.", "Cuénteme qué pasó y dígame cómo la puedo ayudar."],
        why: "Imperativos de usted («cuénteme», «dígame») y pronombre de tercera persona.",
      },
      {
        type: "error",
        sentence: "Mensaje para Lima: Queridos clientes, os esperamos en nuestra nueva oficina.",
        answers: ["Mensaje para Lima: Queridos clientes, los esperamos en nuestra nueva oficina.", "Mensaje para Lima: Queridos clientes, les esperamos en nuestra nueva oficina."],
        why: "En América el plural es «ustedes»: «los» (o «les») esperamos.",
      },
      {
        type: "error",
        sentence: "Vos tenés razón; mañana te llamo y hablamos contigo.",
        answers: ["Vos tenés razón; mañana te llamo y hablamos con vos."],
        why: "Tras preposición, el voseo usa «con vos».",
      },
      {
        type: "order",
        words: ["Si", "no", "le", "molesta,", "prefiero", "seguir", "tratándolo", "de", "usted."],
        why: "Fórmula cortés para declinar un tuteo.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un colega de Madrid por qué un cliente de Bogotá puede tratar de usted a su propia madre y por qué eso no significa frialdad. Añade qué debe hacer el colega si ese cliente, en una llamada, pasa al tú.",
        model: "En algunas zonas de Colombia, como en partes de Costa Rica, el usted no solo marca respeto: también es el trato de la intimidad, entre padres e hijos o en la pareja. Por eso un bogotano puede decirle «mamá, ¿usted cómo está?» con todo el cariño. No hay que leerlo como distancia. Si ese cliente pasa al tú en una llamada, el cambio sí puede comunicar algo, pero tampoco hay que suponer: lo mejor es mantener el usted propio del servicio y escuchar el tono.",
        checklist: [
          "Explico el usted afectivo con un ejemplo.",
          "Relaciono la interpretación con el trato habitual.",
          "Doy una recomendación prudente sobre el cambio.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Reconozco y uso con coherencia las formas del voseo rioplatense: presente e imperativo agudos, «te», «tu», «con vos».",
      "Elijo entre tú, vos, usted, ustedes y vosotros según la zona y la relación, y uso tú + ustedes para un público internacional.",
      "Interpreto el usted de distancia y el usted afectivo según el trato habitual de cada persona.",
      "Interpreto qué comunica un cambio de trato y propongo, acepto o declino un tuteo con cortesía.",
    ],
    review: [
      "Dentro de dos días, conjuga de memoria «poder», «venir» y «decir» con vos en presente e imperativo, y comprueba las tildes.",
      "Dentro de una semana, observa en una serie o en una conversación real un cambio de trato y escribe qué comunicó.",
      "En la próxima clase, pide a tu profesor que revise la coherencia de los mensajes de tu protocolo.",
    ],
  },
  related: [
    { path: "/gramatica/voseo-tuteo-y-ustedeo-cambios-pragmaticos", label: "Clase: Voseo, tuteo y ustedeo: cambios pragmáticos de registro" },
  ],
};
