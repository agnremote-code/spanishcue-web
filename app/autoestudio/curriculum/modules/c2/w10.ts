import type { Module } from "../../types";

/**
 * C2 · semana 10 · Integración. Autoestudio espejo de G219 (foco,
 * presuposición y estructura informativa) y G220 (tema, rema y orden marcado
 * en textos complejos), que además integra G213–G218 (semanas 6 a 9).
 * Repaso autónomo con la audiencia pública y los textos ficticios sobre una
 * huaca de Lima. Audio mediante síntesis; sin acreditación regional.
 */
export const c2w10: Module = {
  id: "c2-10",
  level: "c2",
  week: 10,
  kind: "checkpoint",
  title: "Lo que se dice, lo que se da por hecho y en qué orden",
  subtitle: "Repaso de presuposiciones, foco y progresión temática, integrado con ambigüedad, norma, trato, variación del pasado, pronombres e ironía",
  stop: {
    place: "Lima",
    country: "Perú",
  },
  minutes: 150,
  newObjectives: [
    "c2.gram.g219",
    "c2.gram.g220",
    "c2.voc.w10-patrimonio-debate",
    "c2.pron.w10-foco-contrastivo",
    "c2.lis.w10-entrevista-radio",
    "c2.read.w10-articulo-huaca",
    "c2.wri.w10-articulo-opinion",
    "c2.spk.w10-intervencion-audiencia",
    "c2.fun.w10-desmontar-presuposicion",
    "c2.disc.w10-progresion-tematica",
    "c2.rev.w10-integracion-semanas-6-9",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo detectar y desmontar lo que un enunciado da por hecho, corregir un foco con los recursos adecuados y ordenar un texto complejo para que avance de lo conocido a lo nuevo, integrando lo repasado sobre ambigüedad, norma, trato, variación regional e ironía.",
    steps: [
      "Repasa en la teoría la presuposición y sus activadores, el foco, la progresión temática y los órdenes marcados, y la síntesis de las semanas 6 a 9.",
      "Practica con las declaraciones y los textos sobre la huaca Mirasol, en Lima.",
      "Escucha la entrevista radial y lee el artículo de opinión de la arqueóloga.",
      "Redacta tu propio artículo de opinión completo, revísalo con la lista de control y prepara tu intervención en la audiencia pública.",
    ],
  },
  theory: {
    intro: "En clase viste estos temas con tu profesor. Aquí los repasas con una situación nueva: en un barrio de Lima, una inmobiliaria quiere construir un estacionamiento junto a la huaca Mirasol, un sitio arqueológico de adobe. Hay una entrevista en la radio, una audiencia pública y un artículo de opinión. Al final del bloque de teoría encontrarás una síntesis de las semanas 6 a 9 para usarla en la práctica de integración.",
    parts: [
      {
        heading: "Lo que se afirma y lo que se da por hecho",
        body: [
          "Un enunciado comunica dos clases de información. Lo afirmado es lo que se pone sobre la mesa y puede discutirse. Lo presupuesto es lo que se da por sabido y llega al oyente sin que lo note. La prueba más rápida es negar la frase o convertirla en pregunta: lo afirmado cambia, lo presupuesto sobrevive. «La asociación dejó de oponerse al proyecto» afirma que ya no se opone; presupone que antes se oponía. «La asociación no dejó de oponerse» y «¿Dejó de oponerse la asociación?» mantienen la misma presuposición.",
          "Ciertas palabras activan presuposiciones. Los verbos factivos («lamentar», «sentir», «alegrarse de» con subjuntivo; «saber», «darse cuenta de», «olvidar» con indicativo) presentan su complemento como verdadero; los no factivos («creer», «decir», «afirmar») no. Los verbos de cambio y repetición («dejar de», «seguir», «seguir sin», «volver a», «empezar a») y los adverbios «ya no» y «todavía» presuponen un estado anterior. Las descripciones definidas y las nominalizaciones («el fracaso del plan de protección») dan por existente lo que nombran. Y las preguntas parciales presuponen que algo ocurrió: «¿Cuándo van a dejar de frenar el progreso?» da por hecho que alguien lo frena.",
        ],
        table: {
          caption: "Activadores de presuposición",
          head: ["Activador", "Ejemplo", "Lo que da por hecho"],
          rows: [
            ["verbo factivo", "La alcaldesa lamenta que se haya dañado el muro.", "se dañó el muro"],
            ["verbo no factivo", "La inmobiliaria afirma que el muro ya estaba dañado.", "nada: es una afirmación atribuida"],
            ["cambio de estado", "Los vecinos volvieron a protestar.", "ya habían protestado antes"],
            ["«todavía», «ya no»", "La huaca todavía no tiene cerco.", "se espera que lo tenga"],
            ["nominalización", "El abandono de la huaca es evidente.", "la huaca está abandonada"],
            ["pregunta cargada", "¿Por qué se oponen al desarrollo del barrio?", "se oponen al desarrollo"],
          ],
        },
        tip: "Ante una pregunta cargada, no respondas al contenido: primero rechaza lo que da por hecho. «No nos oponemos al desarrollo; nos oponemos a este proyecto».",
      },
      {
        heading: "Partículas de foco, escindidas y foco correctivo",
        body: [
          "Las partículas de foco afirman algo y presuponen algo más. «También los arqueólogos firmaron» presupone que otros firmaron; «incluso» o «hasta» presentan el elemento como el menos esperable; «ni siquiera» lo niega situándolo en el extremo («ni siquiera la municipalidad respondió»; con el verbo delante, «no respondió ni siquiera la municipalidad»); «solo» excluye a los demás.",
          "Las oraciones escindidas separan el foco y presuponen el resto: «Fue la concejala quien pidió el informe» presupone que alguien lo pidió. Esa presuposición sobrevive a la negación: «No fue la concejala quien pidió el informe» sigue dando por hecho que alguien lo hizo. Para corregir un foco hay cuatro recursos: el acento contrastivo en su sitio («Lo pidió la CONCEJALA»), la anteposición («A LA CONCEJALA se lo enviamos, no al alcalde»), la escindida y la estructura «no…, sino…».",
          "En cuanto a la norma, «Es por eso que» es la variante más extendida y aceptada, sobre todo en América; en el uso europeo cuidado se prefieren «Por eso es por lo que» o «Es por eso por lo que». Para otros focos se recomiendan «Fue entonces cuando» y «Fue allí donde».",
        ],
        examples: [
          { es: "No fue la inmobiliaria sino la municipalidad la que autorizó el estudio.", note: "Corrección de foco con «no…, sino…»; se presupone que alguien lo autorizó." },
          { es: "Ni siquiera el ministerio respondió a la carta.", note: "El ministerio era el que más obligación tenía de responder." },
          { es: "Fue en 2019 cuando apareció el primer muro.", note: "Escindida de tiempo con «cuando»." },
          { es: "Es por eso que pedimos un estudio independiente.", note: "Variante más extendida, aceptada; en el uso europeo cuidado, «Por eso es por lo que…»." },
        ],
        mistakes: [
          {
            wrong: "No fue el alcalde quien aprobó el proyecto. (Para decir que nadie lo aprobó.)",
            right: "Nadie ha aprobado el proyecto.",
            why: "La escindida negada sigue presuponiendo que alguien lo aprobó.",
          },
          {
            wrong: "La inmobiliaria sabe que la huaca no tiene valor. (En la voz neutra de una periodista.)",
            right: "La inmobiliaria afirma que la huaca no tiene valor.",
            why: "«Saber» es factivo: hace que la periodista asuma como verdadero lo que solo es la opinión de una parte.",
          },
        ],
      },
      {
        heading: "Tema, rema y progresión temática",
        body: [
          "En un texto bien construido, cada oración parte de algo conocido (el tema) y aporta algo nuevo (el rema). Los párrafos avanzan con tres patrones: tema constante (varias oraciones sobre el mismo referente), progresión lineal (el rema de una oración se convierte en tema de la siguiente) y temas derivados de un hipertema (un tema general que se reparte en subtemas).",
          "Para que lo conocido vaya delante, el español tiene recursos. El sujeto pospuesto introduce referentes nuevos: «En 2019 aparecieron los primeros restos de muros». La pasiva y la construcción con «se» mantienen como sujeto el tema: «La huaca fue declarada patrimonio en 1998». Y el peso final deja para el cierre lo largo y lo nuevo: «Sorprende que nadie haya consultado a los arqueólogos», «Se proponen tres medidas: cercar el sitio, señalizarlo y abrir un centro de visitantes».",
        ],
        table: {
          caption: "Tres patrones de progresión",
          head: ["Patrón", "Esquema", "Ejemplo breve"],
          rows: [
            ["tema constante", "A → B; A → C; A → D", "La huaca tiene mil años. Fue un centro ceremonial. Hoy está rodeada de edificios."],
            ["lineal", "A → B; B → C; C → D", "La huaca ocupa una manzana. Esa manzana está junto a un colegio. El colegio la usa para clases de historia."],
            ["hipertema", "H → H1, H2, H3", "El proyecto tiene tres problemas. El primero es legal. El segundo, técnico. El tercero, social."],
          ],
        },
      },
      {
        heading: "Órdenes marcados y cambios de tema",
        body: [
          "El ensayo y la prensa usan órdenes marcados para enlazar o destacar. El atributo antepuesto con inversión subraya una valoración: «Graves son las consecuencias», «Distinto es el caso de la huaca del parque», «Cierto es que el sitio necesita mantenimiento». La anteposición anafórica retoma lo anterior al comienzo: «De ello se deduce que…», «A ello se suma…», «Prueba de ello es que…». Y el tema retomado con pronombre lo presenta como punto de partida: «Ese informe, nadie lo ha leído completo».",
          "Para cambiar de tema existen marcadores: «en cuanto a», «por lo que respecta a», «respecto de», «en lo que concierne a», «por su parte». Úsalos solo donde el hilo se rompe de verdad. Si los pones en cada párrafo, el texto parece una lista y el lector pierde la sensación de avance.",
        ],
        examples: [
          { es: "Prueba de ello es que el colegio vecino ya organiza visitas a la huaca.", note: "Anteposición anafórica: «ello» retoma lo dicho." },
          { es: "El informe técnico, la inmobiliaria no lo ha publicado.", note: "Tema dislocado y retomado con «lo»." },
          { es: "Por lo que respecta al tráfico, el estudio no aporta datos.", note: "Cambio de tema justificado: se abre un asunto nuevo." },
        ],
        mistakes: [
          {
            wrong: "La huaca fue un centro ceremonial. En cuanto a la huaca, tiene mil años. En cuanto a su estado, es malo.",
            right: "La huaca, que fue un centro ceremonial, tiene mil años. Su estado, sin embargo, es malo.",
            why: "«En cuanto a» no debe marcar el mismo tema ni un subtema que avanza solo.",
          },
          {
            wrong: "Un estudio independiente fue encargado por la asociación en 2024. (Primera mención del estudio.)",
            right: "En 2024, la asociación encargó un estudio independiente.",
            why: "La información nueva («un estudio independiente») va mejor al final; la pasiva aquí la pone como tema.",
          },
        ],
      },
      {
        heading: "Integración: lo que repasaste en las semanas 6 a 9",
        body: [
          "Esta semana cierra un bloque. En la semana 6 (G213 y G214) aprendiste a distinguir la ambigüedad accidental del doble sentido buscado y a separar gramaticalidad, aceptabilidad, norma y variación. En la semana 7 (G215), a elegir y mantener el trato y a interpretar sus cambios. En la semana 8 (G216 y G217), el reparto regional entre «he llegado» y «llegué», el pluscuamperfecto andino de sorpresa y la escala de la norma para «le», «lo» y «les». En la semana 9 (G218), las perífrasis de ironía y distanciamiento.",
          "Todo eso se cruza con la presuposición y el orden de la información. Una pregunta cargada puede ser también ambigua; una crónica irónica se apoya en lo que da por hecho; un cambio al usted en una audiencia pública comunica tanto como un foco contrastivo. En Lima, además, lo ocurrido hoy se cuenta normalmente con el indefinido y el pluscuamperfecto puede expresar sorpresa: si citas a vecinos limeños, respeta su voz.",
        ],
        table: {
          caption: "Síntesis del bloque",
          head: ["Semana y clase", "Pregunta que te haces", "Ejemplo de esta semana"],
          rows: [
            ["6 · G213", "¿Dos lecturas sin querer o a propósito?", "Todos los vecinos no apoyan el proyecto. → No todos los vecinos…"],
            ["6 · G214", "¿Agramatical, no normativa o variación?", "Habían cien personas en la audiencia (voz del vecino; en el acta, «había»)."],
            ["7 · G215", "¿Qué trato y qué comunica el cambio?", "—Mire usted, señor gerente… (tras haberlo tuteado: distancia)."],
            ["8 · G216", "¿Qué variedad y qué voz?", "Hoy llegaron los arqueólogos. / ¡La huaca había sido enorme!"],
            ["8 · G217", "¿Qué pronombre pide la norma escrita?", "A los vecinos les enviamos el informe; se lo enviamos ayer."],
            ["9 · G218", "¿Qué actitud añade la perífrasis?", "El estacionamiento iba a ser provisional, según la inmobiliaria."],
          ],
        },
      },
    ],
  },
  grammar: {
    intro: "Identifica primero qué se afirma y qué se da por hecho; después decide qué recurso de foco u orden conviene.",
    exercises: [
      {
        id: "c2-10-gramatica-presuposicion",
        type: "context",
        prompt: "Lee cada declaración y elige lo que da por hecho.",
        items: [
          {
            context: "El gerente de la inmobiliaria, en la radio: «Los vecinos siguen sin entender que el estacionamiento beneficia al barrio».",
            q: "¿Qué presupone la frase?",
            options: [
              "Que el estacionamiento beneficia al barrio y que los vecinos ya antes no lo entendían.",
              "Que los vecinos han cambiado de opinión.",
              "Que el estacionamiento todavía no está aprobado.",
            ],
            answer: 0,
            why: "«Entender que» es factivo (da por cierto el beneficio) y «seguir sin» presupone un estado anterior.",
          },
          {
            context: "Una vecina, en la audiencia: «¿Cuándo va a dejar la municipalidad de ignorar nuestras cartas?».",
            q: "¿Qué da por hecho la pregunta?",
            options: [
              "Que la municipalidad respondió a las cartas.",
              "Que la municipalidad ignora las cartas de los vecinos.",
              "Que los vecinos no enviaron cartas.",
            ],
            answer: 1,
            why: "Pregunta parcial con «dejar de»: presupone que la ignora.",
          },
          {
            context: "Comunicado municipal: «No fue la municipalidad quien otorgó el permiso de obra».",
            q: "¿Qué sigue dando por hecho el comunicado?",
            options: [
              "Que nadie otorgó el permiso.",
              "Que la municipalidad otorgó el permiso.",
              "Que alguien otorgó el permiso.",
            ],
            answer: 2,
            why: "La escindida negada mantiene la presuposición de la relativa.",
          },
          {
            context: "Arqueóloga: «Ni siquiera el estudio de la propia inmobiliaria descarta daños en el muro norte».",
            q: "¿Qué añade «ni siquiera»?",
            options: [
              "Que ese estudio era el que menos motivos tenía para admitir daños.",
              "Que el estudio no existe.",
              "Que el muro norte no está dañado.",
            ],
            answer: 0,
            why: "«Ni siquiera» sitúa el elemento en el extremo de la escala de lo esperable.",
          },
        ],
      },
      {
        id: "c2-10-gramatica-foco",
        type: "gap",
        prompt: "Completa con la palabra que construye el foco indicado.",
        items: [
          { q: "Fue en 2019 ___ aparecieron los primeros muros de adobe.", answers: [["cuando"]], why: "Escindida de tiempo: «Fue entonces cuando», «Fue en 2019 cuando»." },
          { q: "Fue en el sector sur ___ se encontraron las vasijas.", answers: [["donde"]], why: "Escindida de lugar: «Fue allí donde»." },
          { q: "No lo pidió la inmobiliaria, ___ la asociación de vecinos.", answers: [["sino"]], why: "Foco correctivo con «no…, sino…»." },
          { q: "Fueron los vecinos ___ avisaron a los arqueólogos.", answers: [["quienes", "los que"]], why: "Escindida de sujeto con relativo concordado." },
          { q: "Por eso es por ___ que pedimos un estudio independiente.", answers: [["lo"]], why: "Variante preferida en el uso europeo cuidado: «Por eso es por lo que»." },
        ],
      },
      {
        id: "c2-10-gramatica-orden",
        type: "classify",
        prompt: "Clasifica cada recurso según lo que hace en el texto.",
        categories: ["Introduce información nueva al final", "Retoma lo anterior al comienzo", "Destaca una valoración", "Marca un cambio de tema"],
        items: [
          { text: "En 2019 aparecieron restos de un muro ceremonial.", cat: 0, why: "Sujeto pospuesto: referente nuevo al final." },
          { text: "De ello se deduce que el sitio es más grande de lo que se pensaba.", cat: 1, why: "Anteposición anafórica." },
          { text: "Graves son los daños en el sector norte.", cat: 2, why: "Atributo antepuesto con inversión." },
          { text: "Por lo que respecta al tráfico, el estudio no aporta datos.", cat: 3, why: "Marcador de cambio de tema." },
          { text: "Se proponen tres medidas: cercar, señalizar y abrir un centro de visitantes.", cat: 0, why: "Peso final con la enumeración." },
          { text: "A ello se suma la falta de iluminación nocturna.", cat: 1, why: "Anteposición anafórica con «a ello»." },
          { text: "Distinto es el caso de la huaca del parque, que sí está protegida.", cat: 2, why: "Atributo antepuesto: destaca el contraste." },
          { text: "En cuanto a la inmobiliaria, no ha respondido.", cat: 3, why: "Cambio de tema." },
        ],
      },
      {
        id: "c2-10-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un problema de presuposición, foco u orden. Corrígela.",
        items: [
          {
            sentence: "Nota periodística neutra: «La inmobiliaria se dio cuenta de que la huaca no tiene valor arqueológico».",
            answers: ["Nota periodística neutra: «La inmobiliaria sostiene que la huaca no tiene valor arqueológico».", "Nota periodística neutra: «La inmobiliaria afirma que la huaca no tiene valor arqueológico»."],
            why: "«Darse cuenta de» es factivo y hace que la periodista asuma la afirmación de una parte.",
          },
          {
            sentence: "Fue entonces que la municipalidad suspendió la obra.",
            answers: ["Fue entonces cuando la municipalidad suspendió la obra."],
            why: "Con foco temporal se recomienda «Fue entonces cuando».",
          },
          {
            sentence: "Los vecinos, que estaban en la audiencia, votaron. En cuanto a los vecinos, estaban preocupados.",
            answers: ["Los vecinos, que estaban en la audiencia, votaron. Estaban preocupados.", "Los vecinos que estaban en la audiencia votaron, preocupados."],
            why: "«En cuanto a» no debe marcar un tema que no cambia.",
          },
          {
            sentence: "Ni siquiera el alcalde no respondió a la carta.",
            answers: ["Ni siquiera el alcalde respondió a la carta.", "No respondió a la carta ni siquiera el alcalde."],
            why: "Con «ni siquiera» antepuesto no se añade «no»; con el verbo delante, sí: «no respondió ni siquiera…».",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico para hablar de patrimonio, urbanismo y debate público.",
    groups: [
      {
        title: "Patrimonio y urbanismo",
        items: [
          { es: "la huaca", note: "en Perú, sitio arqueológico prehispánico, a menudo una pirámide de adobe" },
          { es: "el adobe", note: "ladrillo de barro secado al sol" },
          { es: "la zona intangible", note: "área protegida en la que no se puede construir" },
          { es: "el estudio de impacto", note: "informe que evalúa los efectos de una obra" },
          { es: "el cerco perimétrico", note: "muro o valla que rodea un terreno" },
          { es: "la puesta en valor", note: "conjunto de acciones para conservar y mostrar un bien patrimonial" },
        ],
      },
      {
        title: "Debate público",
        items: [
          { es: "la audiencia pública", note: "reunión abierta en la que la autoridad escucha a la ciudadanía" },
          { es: "la pregunta capciosa", note: "pregunta formulada para obligar a aceptar algo no dicho" },
          { es: "dar por sentado", note: "considerar algo como cierto sin discutirlo" },
          { es: "matizar", note: "precisar una afirmación para que no sea absoluta" },
          { es: "el hilo argumental", note: "línea que conecta las ideas de un texto o una intervención" },
          { es: "rebatir", note: "contradecir con argumentos" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-10-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su significado.",
        pairs: [
          { left: "la zona intangible", right: "área protegida en la que no se puede construir" },
          { left: "la puesta en valor", right: "conjunto de acciones para conservar y mostrar un bien patrimonial" },
          { left: "la pregunta capciosa", right: "pregunta formulada para obligar a aceptar algo no dicho" },
          { left: "dar por sentado", right: "considerar algo como cierto sin discutirlo" },
          { left: "el hilo argumental", right: "línea que conecta las ideas de un texto o una intervención" },
          { left: "el cerco perimétrico", right: "muro o valla que rodea un terreno" },
        ],
      },
      {
        id: "c2-10-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["audiencia pública", "matizar", "estudio de impacto", "rebatir"],
        items: [
          { q: "La municipalidad convocó una ___ para escuchar a los vecinos antes de decidir.", answers: [["audiencia pública"]] },
          { q: "El ___ presentado por la inmobiliaria no menciona la huaca ni una vez.", answers: [["estudio de impacto"]] },
          { q: "La arqueóloga pidió la palabra para ___ los datos del gerente con cifras del ministerio.", answers: [["rebatir"]] },
          { q: "Antes de responder, conviene ___ la pregunta: no todos los vecinos se oponen.", answers: [["matizar"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El acento contrastivo y la entonación de la escindida",
    explanation: [
      "Para corregir un foco sin cambiar el orden de la frase basta con el acento contrastivo: la palabra corregida se pronuncia más fuerte, más larga y con un tono más alto, y lo que sigue baja. «Lo pidió la ASOCIACIÓN» corrige a quien creía que lo pidió otro. Si mueves el acento, cambias lo que se corrige: «LO pidió la asociación» discute qué se pidió.",
      "En la escindida, el foco forma un grupo con «fue» y la relativa presupuesta se dice en tono más bajo y más rápido: «Fue la ASOCIACIÓN | quien pidió el estudio». Con «no…, sino…», hay una pausa breve antes de «sino» y el segundo foco recibe el acento principal.",
      "El audio utiliza la síntesis disponible en el navegador: no siempre marca el acento contrastivo ni certifica un acento regional. Úsalo para el orden y las pausas, y practica el énfasis con una persona.",
    ],
    table: {
      caption: "Dónde cae el acento cuando se corrige",
      head: ["Corrección", "Frase con el foco marcado"],
      rows: [
        ["quién lo pidió", "Lo pidió la ASOCIACIÓN, no la municipalidad."],
        ["qué se pidió", "La asociación pidió un ESTUDIO, no una obra."],
        ["cuándo", "Fue en DOS MIL DIECINUEVE cuando aparecieron los muros."],
        ["a quién", "A la CONCEJALA se lo enviamos, no al alcalde."],
      ],
    },
    perceive: {
      id: "c2-10-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué se está corrigiendo o qué se da por hecho.",
      items: [
        {
          q: "¿Qué da por hecho la frase?",
          options: ["Que alguien pidió el estudio.", "Que nadie pidió el estudio.", "Que el estudio no existe."],
          answer: 0,
          why: "La escindida presupone que alguien lo pidió; solo discute quién.",
          audio: "No fue la inmobiliaria quien pidió el estudio, sino la asociación de vecinos.",
          voice: "es-PE-f",
        },
        {
          q: "¿Qué se corrige?",
          options: ["Quién envió el informe.", "A quién se envió el informe.", "Cuándo se envió el informe."],
          answer: 1,
          why: "El complemento indirecto antepuesto y «no al alcalde» marcan el destinatario.",
          audio: "A la concejala se lo enviamos, no al alcalde.",
          voice: "es-PE-m",
        },
        {
          q: "¿Qué presupone «volvieron a»?",
          options: ["Que nunca habían protestado.", "Que protestaron por primera vez.", "Que ya habían protestado antes."],
          answer: 2,
          why: "«Volver a» es un activador de repetición.",
          audio: "Los vecinos volvieron a reunirse frente a la huaca el domingo.",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué recurso usa la frase para destacar la valoración?",
          options: ["El atributo antepuesto con inversión.", "Una pregunta cargada.", "Un cambio de tema."],
          answer: 0,
          why: "«Graves son los daños»: atributo delante del verbo.",
          audio: "Graves son los daños que sufrió el muro norte durante las excavaciones.",
          voice: "es-ES-m",
        },
      ],
    },
    produce: [
      { text: "No nos oponemos al desarrollo; nos oponemos a ESTE proyecto.", tip: "Acento contrastivo en «este» y pausa en el punto y coma.", voice: "es-PE-f" },
      { text: "Fue la asociación quien pidió el estudio, no la inmobiliaria.", tip: "Sube en «asociación» y baja en la relativa.", voice: "es-PE-m" },
      { text: "Graves son las consecuencias de construir junto al muro.", tip: "Énfasis en «graves» y tono descendente al final.", voice: "es-CO-f" },
      { text: "Es por eso que pedimos un estudio independiente.", tip: "Agrupa «es por eso que» y acentúa «independiente».", voice: "es-PE-f" },
    ],
    spelling: "En la escritura, el acento contrastivo no se ve. Si el foco puede malinterpretarse, usa una escindida, una anteposición o «no…, sino…» para que el lector no dependa de la entonación.",
  },
  listening: {
    title: "Entrevista en la radio: ¿estacionamiento o huaca?",
    context: "Un programa matinal de una radio limeña entrevista a la arqueóloga Rocío Huamán, que asesora a la asociación de vecinos, y al gerente de la inmobiliaria, Sebastián Ugarte. Conduce el periodista Diego Salazar. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "d", name: "Diego", voice: "es-PE-m", role: "Periodista y conductor" },
      { id: "r", name: "Rocío", voice: "es-PE-f", role: "Arqueóloga, asesora de los vecinos" },
      { id: "s", name: "Sebastián", voice: "es-CO-m", role: "Gerente de la inmobiliaria" },
    ],
    script: [
      { speaker: "d", text: "Buenos días. Seguimos con el tema que más mensajes nos ha traído esta semana: el estacionamiento que se quiere construir junto a la huaca Mirasol. Tenemos con nosotros a Rocío Huamán, arqueóloga, y a Sebastián Ugarte, gerente de la inmobiliaria. Señor Ugarte, empiezo con usted. ¿Por qué los vecinos siguen bloqueando un proyecto que el barrio necesita?" },
      { speaker: "s", text: "Gracias, Diego. Mira, los vecinos se han dado cuenta de que no hay espacio para estacionar, eso lo sabemos todos. El problema es que una parte de la asociación no hace más que poner obstáculos. Nosotros hemos presentado un estudio de impacto completo, y el estacionamiento iba a ser algo provisional, mientras se busca otra solución." },
      { speaker: "r", text: "Perdona, Diego, pero antes de responder quiero corregir la pregunta. Los vecinos no bloquean nada: presentaron una petición formal, que es su derecho. Y tampoco está demostrado que el barrio necesite este estacionamiento. Esa es justamente la discusión." },
      { speaker: "d", text: "Es justo. Rocío, ¿qué dice exactamente el estudio de impacto?" },
      { speaker: "r", text: "Ese estudio, nadie lo ha visto completo. Lo que se publicó es un resumen de tres páginas en el que la huaca no aparece ni una sola vez. Ni siquiera el plano incluye el muro norte, que está a seis metros del terreno. Graves son los riesgos de mover maquinaria pesada a esa distancia de un muro de adobe de mil años. Y no lo digo yo: lo dice la norma del ministerio, que fija una zona de protección." },
      { speaker: "s", text: "Bueno, el muro ya estaba dañado antes de que llegáramos nosotros." },
      { speaker: "r", text: "Eso es cierto en parte. El muro tiene daños por las lluvias del 2017. Pero fue precisamente por eso que el ministerio pidió un cerco, y fue la municipalidad, no los vecinos, quien no lo instaló. De ello se deduce que el muro necesita protección, no maquinaria al lado." },
      { speaker: "d", text: "Señor Ugarte, usted dijo que el estacionamiento iba a ser provisional. ¿Provisional por cuánto tiempo?" },
      { speaker: "s", text: "Mire usted, eso dependerá de la municipalidad, no de nosotros. Nosotros cumplimos con todo lo que se nos ha pedido." },
      { speaker: "d", text: "Noto que ahora me trata de usted, cuando hace un minuto me tuteaba. Pero vamos al fondo: en el contrato que conocimos ayer figura un plazo de concesión de veinte años. ¿Eso es provisional?" },
      { speaker: "s", text: "Es un plazo máximo, no significa que vaya a durar tanto." },
      { speaker: "r", text: "Si me permites, Diego, una cosa más. Nosotros no nos oponemos al desarrollo del barrio. Nos oponemos a este proyecto, en este lugar. Hay una alternativa: el terreno de la antigua fábrica, a dos cuadras, que la propia municipalidad ofreció en 2023. Es por eso que pedimos que se estudie antes de decidir." },
      { speaker: "d", text: "Muy bien. La audiencia pública es el jueves a las seis de la tarde en el local comunal. Gracias a los dos. Hoy escuchamos a las dos partes; el jueves escucharemos a los vecinos." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la entrevista completa sin abrir la transcripción. ¿Cuál es el conflicto y qué propone cada parte?",
        exercise: {
          id: "c2-10-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Cuál es el conflicto?",
              options: [
                "Un estacionamiento junto a un sitio arqueológico frágil.",
                "La venta de la huaca a una empresa privada.",
                "El cierre de un colegio del barrio.",
              ],
              answer: 0,
              why: "La inmobiliaria quiere construir junto a la huaca Mirasol.",
            },
            {
              q: "¿Qué propone la arqueóloga?",
              options: [
                "Construir el estacionamiento bajo tierra.",
                "Trasladar la huaca a otro lugar.",
                "Estudiar el terreno de la antigua fábrica como alternativa.",
              ],
              answer: 2,
              why: "Lo menciona al final de la entrevista.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y fíjate en cómo cada uno presenta la información. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-10-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué Rocío corrige la primera pregunta del periodista?",
              options: [
                "Porque la pregunta era demasiado larga.",
                "Porque da por hecho que los vecinos bloquean el proyecto y que el barrio lo necesita.",
                "Porque no le tocaba hablar.",
              ],
              answer: 1,
              why: "Rechaza las presuposiciones antes de responder.",
            },
            {
              q: "¿Qué dato contradice que el estacionamiento sea «provisional»?",
              options: [
                "Un plazo de concesión de veinte años en el contrato.",
                "Un informe del ministerio.",
                "Una declaración del alcalde.",
              ],
              answer: 0,
              why: "El periodista lo menciona tras la respuesta evasiva del gerente.",
            },
            {
              q: "¿Qué señala el periodista sobre el trato del gerente?",
              options: [
                "Que siempre lo trata de usted.",
                "Que lo tutea por primera vez.",
                "Que ha pasado del tú al usted.",
              ],
              answer: 2,
              why: "El cambio al usted marca distancia en un momento incómodo.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en los recursos de presuposición, foco y orden de la entrevista. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-10-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con el recurso que usa.",
          pairs: [
            { left: "¿Por qué los vecinos siguen bloqueando…?", right: "pregunta cargada con «seguir»" },
            { left: "los vecinos se han dado cuenta de que no hay espacio", right: "verbo factivo" },
            { left: "Ese estudio, nadie lo ha visto completo.", right: "tema retomado con pronombre" },
            { left: "Graves son los riesgos", right: "atributo antepuesto" },
            { left: "fue la municipalidad, no los vecinos, quien no lo instaló", right: "escindida con foco correctivo" },
            { left: "el estacionamiento iba a ser algo provisional", right: "plan no cumplido con «iba a»" },
          ],
          why: "Cada recurso decide qué se discute y qué se da por hecho.",
        },
      },
    ],
  },
  reading: {
    title: "Lo que la pregunta da por hecho",
    genre: "Artículo de opinión en un diario",
    frame: "Artículo de Rocío Huamán, arqueóloga, publicado en un diario de Lima antes de la audiencia pública sobre la huaca Mirasol. Personas, empresa, huaca y datos son ficticios.",
    text: [
      "«¿Por qué los vecinos siguen bloqueando un proyecto que el barrio necesita?» Con esa pregunta empezó la entrevista radial de esta semana sobre la huaca Mirasol, y con ella quiero empezar este artículo, porque en sus quince palabras está casi todo el problema. La pregunta no pide información: la da por sentada. Presupone que hay un bloqueo, que los vecinos lo mantienen desde hace tiempo y que el barrio necesita el proyecto. Si uno responde directamente al «por qué», acepta las tres cosas sin haberlas discutido.",
      "Conviene, por tanto, separar lo que se afirma de lo que se da por hecho. Los vecinos no bloquean nada: presentaron una petición formal ante la municipalidad, que es un derecho y no un obstáculo. Tampoco está demostrado que el barrio necesite un estacionamiento de doscientas plazas junto a un sitio arqueológico. Esa es precisamente la cuestión que debe decidirse el jueves en la audiencia pública, y no puede llegar decidida de antemano en la forma de una pregunta.",
      "La huaca Mirasol es una pirámide de adobe de unos mil años de antigüedad, construida en varias fases por la población que habitó este valle antes de los incas. Durante décadas quedó escondida entre talleres y casas, y fue en 2019 cuando los vecinos, al limpiar un terreno, encontraron los primeros restos de un muro ceremonial. Aquel hallazgo cambió la relación del barrio con su huaca. El colegio vecino empezó a organizar visitas, la asociación consiguió una señalización provisional y el ministerio la incluyó en su registro.",
      "Distinto es el caso del muro norte, que es el que más preocupa. Las lluvias de 2017 lo dañaron, y la inmobiliaria lo ha recordado varias veces para sugerir que ya no hay mucho que proteger. Cierto es que el muro está dañado. De ello, sin embargo, no se deduce que pueda soportar maquinaria pesada a seis metros de distancia; se deduce exactamente lo contrario. Fue por esos daños que el ministerio pidió en 2020 un cerco perimétrico, y fue la municipalidad, no los vecinos, la que no llegó a instalarlo.",
      "El estudio de impacto que la empresa menciona en cada entrevista merece un comentario aparte. Ese estudio, nadie lo ha visto completo. Lo que se publicó es un resumen de tres páginas en el que la huaca no aparece ni una vez. Ni siquiera el plano adjunto incluye el muro norte. Cuando un periodista preguntó por el documento completo, la respuesta fue que «se presentará en su momento». No deja de ser curioso que el momento no haya llegado antes de la audiencia.",
      "Tampoco ayuda el lenguaje con que se presenta el proyecto. Se nos ha dicho que el estacionamiento iba a ser provisional, mientras se busca otra solución. Pero en el contrato de concesión figura un plazo de veinte años. Un plazo así puede ser legal, no lo discuto; lo que no es, en ningún sentido habitual de la palabra, es provisional. Y cuando la empresa afirma que los vecinos «se han dado cuenta» de que falta espacio, presenta como un hecho reconocido lo que no es más que su propia opinión.",
      "Por lo que respecta a la alternativa, existe y está documentada. A dos cuadras de la huaca se encuentra el terreno de la antigua fábrica textil, que la propia municipalidad ofreció en 2023 para un uso semejante. Está vacío, tiene acceso directo a la avenida y no colinda con ningún bien patrimonial. Es por eso que la asociación pide algo muy sencillo: que se estudie esa opción antes de decidir. No pedimos que se detenga el desarrollo del barrio. Pedimos que no se haga a costa de lo único que el barrio tiene y que ninguna obra podrá reponer.",
      "Graves son las consecuencias de equivocarse en este tipo de decisiones, porque un muro de adobe, una vez caído, no se reconstruye. Por eso quiero terminar con una invitación y no con una pregunta. El jueves, en el local comunal, escuchemos los argumentos de todos, revisemos los documentos completos y decidamos sin que nadie nos haya decidido antes la respuesta. Lo que está en juego no es un estacionamiento. Es si este barrio quiere seguir teniendo historia.",
    ],
    glossary: [
      { es: "colindar", note: "estar junto a otro terreno, compartir límite" },
      { es: "de antemano", note: "antes de tiempo, por anticipado" },
      { es: "reponer", note: "volver a poner lo que se ha perdido" },
    ],
    tasks: [
      {
        id: "c2-10-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el artículo.",
        items: [
          {
            q: "¿Por qué la autora empieza con la pregunta de la entrevista?",
            options: [
              "Porque quiere responder al «por qué» con datos.",
              "Porque la pregunta da por sentadas tres cosas que deben discutirse.",
              "Porque el periodista es su amigo.",
            ],
            answer: 1,
            why: "Analiza sus presuposiciones antes de discutir el fondo.",
          },
          {
            q: "¿Qué deduce la autora de los daños del muro norte?",
            options: [
              "Que ya no merece protección.",
              "Que hay que repararlo con maquinaria.",
              "Que necesita más protección, no maquinaria al lado.",
            ],
            answer: 2,
            why: "«De ello… se deduce exactamente lo contrario».",
          },
          {
            q: "¿Qué critica la autora en la expresión «se han dado cuenta»?",
            options: [
              "Que presenta como hecho reconocido la opinión de la empresa.",
              "Que es una forma no normativa.",
              "Que es demasiado coloquial para la radio.",
            ],
            answer: 0,
            why: "«Darse cuenta de» es factivo.",
          },
        ],
      },
      {
        id: "c2-10-lectura-recursos",
        type: "match",
        prompt: "Relaciona cada fragmento del artículo con el recurso que usa.",
        pairs: [
          { left: "fue en 2019 cuando los vecinos… encontraron", right: "escindida de tiempo" },
          { left: "Cierto es que el muro está dañado.", right: "atributo antepuesto que concede" },
          { left: "De ello, sin embargo, no se deduce", right: "anteposición anafórica" },
          { left: "Ese estudio, nadie lo ha visto completo.", right: "tema retomado con pronombre" },
          { left: "Por lo que respecta a la alternativa", right: "cambio de tema" },
          { left: "No deja de ser curioso", right: "valoración irónica atenuada" },
        ],
      },
      {
        id: "c2-10-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa la estrategia argumentativa del artículo.",
        items: [
          {
            prompt: "Explica en 90–110 palabras cómo usa la autora la presuposición para argumentar, y si su propio texto también da por hecho algo discutible. Cita al menos una frase.",
            model: "La autora empieza desmontando las presuposiciones de la pregunta radial: que hay un bloqueo, que los vecinos lo mantienen y que el barrio necesita el proyecto. Al separarlas de lo afirmado, recupera para la audiencia lo que estaba decidido de antemano. Su texto, sin embargo, también presupone cosas. En la frase final, «Es si este barrio quiere seguir teniendo historia», «seguir teniendo» da por hecho que el proyecto acabaría con esa historia, cuando la empresa podría discutirlo. Es un cierre eficaz, pero tan cargado como la pregunta que critica.",
            checklist: [
              "Explico cómo desmonta la autora las presuposiciones.",
              "Identifico una presuposición en su propio texto.",
              "Cito al menos una frase.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el artículo separa lo afirmado de lo presupuesto y cómo ordena la información.",
      items: [
        { quote: "La pregunta no pide información: la da por sentada.", note: "La autora nombra la presuposición antes de discutir el fondo." },
        { quote: "Cierto es que el muro está dañado.", note: "Atributo antepuesto que concede para después rebatir." },
        { quote: "Ese estudio, nadie lo ha visto completo.", note: "Tema dislocado: lo conocido delante, la crítica al final." },
        { quote: "Es por eso que la asociación pide algo muy sencillo", note: "Variante de la escindida más extendida en América." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección del recurso, reescritura y escritura breve. Termina con la recuperación de las semanas 6 a 9 y de clases anteriores.",
    exercises: [
      {
        id: "c2-10-orden",
        type: "order",
        prompt: "Ordena las palabras para obtener frases con el foco o el orden indicado.",
        items: [
          {
            words: ["Fue", "la", "asociación", "quien", "pidió", "el", "estudio", "independiente."],
            why: "Escindida de sujeto: el foco es «la asociación».",
          },
          {
            words: ["A", "ello", "se", "suma", "la", "falta", "de", "iluminación."],
            why: "Anteposición anafórica con «a ello».",
          },
          {
            words: ["En", "2019", "aparecieron", "los", "primeros", "restos", "del", "muro."],
            why: "Sujeto pospuesto para introducir un referente nuevo.",
          },
        ],
      },
      {
        id: "c2-10-respuesta",
        type: "context",
        prompt: "Elige la mejor respuesta o versión para cada situación.",
        items: [
          {
            context: "En la audiencia, el gerente pregunta a una vecina: «¿Por qué ustedes prefieren una huaca abandonada a un barrio ordenado?».",
            q: "¿Qué respuesta desmonta mejor la pregunta?",
            options: [
              "Porque la huaca es más importante que el orden.",
              "Nadie prefiere una huaca abandonada: pedimos que se proteja, y el orden del barrio no depende de este estacionamiento.",
              "Preferimos la huaca porque somos vecinos de toda la vida.",
            ],
            answer: 1,
            why: "Rechaza las dos presuposiciones antes de dar su posición.",
          },
          {
            context: "Nota informativa neutra sobre la entrevista.",
            q: "¿Qué versión respeta la neutralidad?",
            options: [
              "El gerente reconoció que el estacionamiento iba a ser provisional.",
              "El gerente se dio cuenta de que el plazo era de veinte años.",
              "El gerente afirmó que el estacionamiento sería provisional; el contrato fija un plazo máximo de veinte años.",
            ],
            answer: 2,
            why: "Verbo no factivo y dato verificable, sin ironía.",
          },
          {
            context: "Párrafo de un informe técnico que ya habla del muro norte.",
            q: "¿Qué frase continúa mejor el párrafo?",
            options: [
              "Las lluvias de 2017 dañaron ese muro.",
              "En cuanto al muro norte, fue dañado.",
              "Hubo lluvias en 2017.",
            ],
            answer: 0,
            why: "Progresión lineal: «ese muro» retoma lo conocido y el rema aporta lo nuevo.",
          },
        ],
      },
      {
        id: "c2-10-reescritura",
        type: "transform",
        prompt: "Reescribe cada frase según la instrucción sin cambiar su contenido.",
        items: [
          {
            source: "La municipalidad no instaló el cerco.",
            instruction: "Conviértela en escindida para corregir a quien culpa a los vecinos, empezando por «Fue la municipalidad».",
            answers: ["Fue la municipalidad, no los vecinos, la que no instaló el cerco.", "Fue la municipalidad, no los vecinos, quien no instaló el cerco."],
            why: "La escindida con «no…» intercalado corrige el foco.",
          },
          {
            source: "Las consecuencias de construir junto al muro son graves.",
            instruction: "Antepón el atributo con inversión.",
            answers: ["Graves son las consecuencias de construir junto al muro."],
            why: "Atributo antepuesto: destaca la valoración.",
          },
          {
            source: "Nadie ha leído completo el estudio de impacto.",
            instruction: "Pon «el estudio de impacto» al comienzo como tema y retómalo con un pronombre.",
            answers: ["El estudio de impacto, nadie lo ha leído completo."],
            why: "Tema dislocado retomado con «lo».",
          },
        ],
      },
      {
        id: "c2-10-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe tres preguntas cargadas que podría hacer alguien de la inmobiliaria en la audiencia y, para cada una, una respuesta de una o dos frases que rechace primero lo que da por hecho (60–90 palabras en total).",
            model: "1. «¿Cuándo van a dejar de frenar el progreso?» — No frenamos el progreso: pedimos que se estudie otra ubicación. 2. «¿Por qué no aceptan un proyecto que ya está aprobado?» — El proyecto no está aprobado; por eso hay audiencia. 3. «¿Quién va a pagar la vigilancia de la huaca?» — Antes de hablar de quién paga, hablemos de quién no instaló el cerco que pidió el ministerio.",
            checklist: [
              "Cada pregunta contiene una presuposición discutible.",
              "Cada respuesta rechaza la presuposición antes de responder.",
              "Las respuestas son breves y concretas.",
            ],
          },
          {
            prompt: "Reescribe este párrafo para que avance de lo conocido a lo nuevo (60–80 palabras): «Un cerco fue pedido por el ministerio en 2020. Las lluvias de 2017 dañaron el muro norte. En cuanto al cerco, no fue instalado. En cuanto a la municipalidad, era la responsable».",
            model: "Las lluvias de 2017 dañaron el muro norte de la huaca. Por esos daños, el ministerio pidió en 2020 un cerco perimétrico. Ese cerco, sin embargo, nunca se instaló, y la responsable de hacerlo era la municipalidad. De ello se deduce que el muro lleva seis años sin la protección que se consideró necesaria.",
            checklist: [
              "El orden de los hechos sigue una progresión lineal.",
              "Elimino los «en cuanto a» innecesarios.",
              "Uso al menos un recurso anafórico.",
            ],
          },
        ],
      },
      {
        id: "c2-10-recuperacion",
        type: "open",
        prompt: "Recupera las clases de las semanas 6 a 9 y algunas anteriores con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G213 (ambigüedad accidental). Estímulo, cartel de la asociación: «Todos los vecinos no apoyan el estacionamiento». La asociación quiere decir que ninguno lo apoya. Explica el problema y reescribe el cartel.",
            model: "«Todos… no» admite dos lecturas: que ningún vecino lo apoya o que no todos lo apoyan. Si la asociación quiere decir lo primero, debe escribir «Ningún vecino apoya el estacionamiento». Pero, como seguramente algunos vecinos sí lo apoyan, lo más honesto sería «La mayoría de los vecinos no apoya el estacionamiento».",
            checklist: [
              "Identifico las dos lecturas de «todos… no».",
              "La reescritura deja una sola lectura.",
            ],
          },
          {
            prompt: "Recuperación de la clase G214 (gramaticalidad y norma). Estímulo, transcripción de la audiencia: un vecino dice «Habían más de cien personas en la marcha». El acta oficial lo resume. Escribe la frase del acta y explica qué juicio merece la forma del vecino.",
            model: "Acta: «El vecino señaló que en la marcha había más de cien personas». La forma «habían» es real y muy extendida, pero no normativa: no es agramatical. En la transcripción literal se respeta como voz del vecino; en el acta, que es voz institucional, se usa «había».",
            checklist: [
              "Uso «había» en la voz institucional.",
              "Califico «habían» como no normativa, no agramatical.",
            ],
          },
          {
            prompt: "Recuperación de la clase G215 (cambios de trato). Estímulo de la entrevista: el gerente tutea al periodista y, ante la pregunta sobre el plazo, dice «Mire usted, eso dependerá de la municipalidad». Explica qué comunica el cambio y cómo lo aprovecha el periodista.",
            model: "El paso del tú al usted marca distancia en el momento más incómodo de la entrevista: el gerente se protege de una pregunta que no quiere responder. El periodista lo hace explícito («noto que ahora me trata de usted») y, sin acusarlo, deja al oyente interpretar ese cambio antes de presentar el dato del contrato.",
            checklist: [
              "Interpreto el cambio frente al trato anterior.",
              "Explico el efecto en la entrevista.",
            ],
          },
          {
            prompt: "Recuperación de la clase G216 (variación regional del pasado). Estímulo, mensaje de una vecina limeña: «¡La huaca había sido enorme! Hoy subí con los chicos del colegio». Explica las dos formas verbales y di si las cambiarías al citarla en un periódico de Madrid.",
            model: "«Había sido enorme» expresa la sorpresa de quien descubre algo en ese momento, un uso descrito en zonas andinas. «Hoy subí» usa el indefinido para un hecho de hoy, lo normal en gran parte de América. No cambiaría ninguna: es una cita. Si el periódico lo necesita, añadiría una aclaración en la voz del periodista.",
            checklist: [
              "Explico el pluscuamperfecto de sorpresa.",
              "Explico el indefinido de hoy.",
              "Respeto la cita.",
            ],
          },
          {
            prompt: "Recuperación de la clase G217 (pronombres en la norma culta). Estímulo, borrador del correo de la asociación: «A los vecinos le enviamos el informe; se los enviamos el lunes. La informamos que la audiencia es el jueves». Corrige el correo y explica cada cambio.",
            model: "«A los vecinos les enviamos el informe; se lo enviamos el lunes. La informamos de que la audiencia es el jueves». «Les», porque el indirecto es plural; «se lo», porque «el informe» es singular y el plural del destinatario no se marca; «la informamos de que», porque con la persona como complemento directo «informar» lleva «de».",
            checklist: [
              "Corrijo los tres pronombres o construcciones.",
              "Explico cada cambio con la norma escrita.",
            ],
          },
          {
            prompt: "Recuperación de la clase G218 (perífrasis de ironía). Estímulo: «La inmobiliaria anda diciendo que el estacionamiento iba a ser provisional». Explica qué actitud transmite la frase y escribe una versión neutra para una nota informativa.",
            model: "«Anda diciendo» añade repetición y desaprobación; «iba a ser» sugiere que el plan no se cumplirá y, atribuido a la empresa, suena irónico. Versión neutra: «La inmobiliaria ha afirmado que el estacionamiento será provisional. El contrato fija un plazo máximo de veinte años».",
            checklist: [
              "Explico la actitud de las dos perífrasis.",
              "La versión neutra solo contiene datos verificables y atribuidos.",
            ],
          },
          {
            prompt: "Recuperación de la clase G212 (elipsis compleja). Estímulo: «La municipalidad apoya el proyecto más que los vecinos». Explica las dos lecturas y escribe una versión para cada una.",
            model: "Puede significar que la municipalidad apoya el proyecto más de lo que lo apoyan los vecinos, o que la municipalidad apoya el proyecto más de lo que apoya a los vecinos. Versiones: «La municipalidad apoya el proyecto más de lo que lo apoyan los vecinos» y «La municipalidad apoya más al proyecto que a los vecinos».",
            checklist: [
              "Identifico el material omitido.",
              "Escribo una versión explícita para cada lectura.",
            ],
          },
          {
            prompt: "Recuperación de la clase G210 (subordinación múltiple). Estímulo: «La arqueóloga dijo que el informe que la empresa que ganó la licitación que convocó la municipalidad presentó no menciona la huaca». Reescribe la frase para que se lea sin esfuerzo.",
            model: "«La municipalidad convocó una licitación y la ganó una empresa. Según la arqueóloga, el informe que presentó esa empresa no menciona la huaca». Al dividir la frase y ordenar los hechos, cada referente aparece antes de que se hable de él y desaparecen las relativas encajadas.",
            checklist: [
              "Reduzco las relativas encajadas.",
              "Cada referente queda claro.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta un artículo de opinión completo (420–540 palabras) para un diario sobre un conflicto entre patrimonio y desarrollo urbano, real o inventado. Desmonta al menos una pregunta o afirmación cargada, ordena los párrafos con progresión temática, usa al menos tres órdenes marcados y un foco correctivo, y cita a alguien respetando su variedad.",
    context: "El artículo se publicará antes de una audiencia pública. Los lectores son vecinos, autoridades y periodistas. Puedes usar el caso de la huaca Mirasol o inventar otro con la misma lógica. Integra lo repasado en el bloque: evita ambigüedades accidentales, usa la norma culta en tu voz y, si usas ironía, apóyala en hechos.",
    steps: [
      "Anota la pregunta o afirmación cargada que vas a desmontar y lo que da por hecho.",
      "Decide la progresión: hecho conocido, antecedentes, problema principal, alternativa y cierre. Marca dónde usarás un cambio de tema y dónde no hace falta.",
      "Redacta sin copiar el modelo. Usa al menos un atributo antepuesto, una anteposición anafórica, un tema retomado con pronombre y una escindida o «no…, sino…».",
      "Revisa el artículo con la lista de control: corrige cualquier verbo factivo que asuma la opinión de otra parte, cualquier «en cuanto a» innecesario y cualquier doble lectura accidental.",
    ],
    useLanguage: [
      "La pregunta da por sentado que…",
      "No fue…, sino… / Fue… quien…",
      "Graves son… / Cierto es que… / Distinto es el caso de…",
      "De ello se deduce que… / A ello se suma…",
      "Ese informe, nadie lo ha…",
      "Por lo que respecta a… (solo si cambia el tema)",
    ],
    model: [
      "«¿Hasta cuándo va a impedir el mercado viejo que el distrito se modernice?» La pregunta apareció la semana pasada en un cartel de la empresa que quiere demoler el mercado de la calle Junín para levantar un centro comercial. Es una buena pregunta para empezar, porque en pocas palabras da por sentadas dos cosas que nadie ha demostrado: que el mercado impide algo y que modernizar el distrito consiste en demolerlo.",
      "El mercado de Junín tiene noventa años. Lo construyeron los propios comerciantes en 1935, con una estructura de madera y hierro que todavía sostiene la cubierta. Esa estructura, la municipalidad la declaró de interés histórico en 2010, y desde entonces no se ha reparado ni una sola viga. Cierto es que el edificio necesita una reforma profunda. De ello, sin embargo, no se deduce que haya que derribarlo, sino que alguien debería haber cumplido con su mantenimiento.",
      "Graves son los problemas que hoy tiene el mercado: goteras, cables a la vista, un solo baño para ciento veinte puestos. Pero conviene preguntarse quién los ha causado. No fueron los comerciantes, que pagan su alquiler cada mes, sino la administración, que lleva quince años sin destinar un sol al edificio. A ello se suma que el proyecto de la empresa, según el resumen publicado, no incluye ningún espacio para los comerciantes actuales.",
      "Doña Eulalia Quispe vende hierbas en el puesto cuarenta desde 1982. Cuando le pregunté qué pensaba del proyecto, me respondió: «Hoy vinieron otra vez los de la empresa. ¡Había sido que ya tenían los planos hechos!». Su sorpresa resume bien lo que sienten muchos vecinos: la decisión parece tomada antes de cualquier consulta.",
      "Por lo que respecta a la alternativa, existe. Varios mercados de la ciudad se han rehabilitado manteniendo su estructura y a sus comerciantes, y hoy atraen más público que antes. En algunos de esos casos, los comerciantes participaron en el diseño, siguieron vendiendo durante las obras en módulos provisionales y regresaron a puestos renovados al cabo de un año. Una reforma así costaría menos que la demolición y no obligaría a nadie a abandonar su puesto. Es por eso que la asociación de comerciantes pide que se encargue un estudio de rehabilitación independiente antes de la audiencia.",
      "No se trata de oponerse a la modernización. Se trata de entender que un distrito moderno no es el que borra lo que tiene, sino el que sabe cuidarlo. La pregunta del cartel merece, por tanto, otra pregunta: ¿por qué nadie ha intentado todavía arreglar el mercado antes de proponer su demolición? Mientras esa pregunta no tenga respuesta, cualquier decisión será prematura. Los vecinos merecemos esa respuesta antes del jueves.",
    ],
    checklist: [
      "Desmonto al menos una pregunta o afirmación cargada.",
      "Los párrafos avanzan de lo conocido a lo nuevo y solo marco los cambios de tema reales.",
      "Uso al menos tres órdenes marcados y un foco correctivo.",
      "Uso verbos no factivos para las opiniones de otras partes.",
      "Cito a alguien respetando su variedad y escribo mi propia voz según la norma culta.",
      "No hay dobles lecturas accidentales ni pronombres mal concordados.",
    ],
    words: [420, 540],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Intervención en la audiencia pública",
        prompt: "Eres vecino o vecina del barrio. Tienes cuatro minutos en la audiencia pública. Presenta tu posición sobre el estacionamiento: desmonta una pregunta cargada, corrige un foco con «no…, sino…» o una escindida y propón una alternativa. Ordena la intervención para que avance de lo conocido a lo nuevo.",
        prep: [
          "Elige la pregunta cargada que vas a desmontar.",
          "Anota tres datos y el orden en que los presentarás.",
          "Prepara una frase final con foco contrastivo.",
        ],
        seconds: 240,
        model: "Buenas tardes. Me llamo Carmen y vivo frente a la huaca desde hace treinta años. Antes de empezar quiero responder a una pregunta que he oído mucho: «¿por qué los vecinos se oponen al progreso?». No nos oponemos al progreso. Nos oponemos a este proyecto, en este lugar. Fue la municipalidad, no los vecinos, la que no instaló el cerco que pidió el ministerio…",
        selfCheck: [
          "Rechazo la presuposición antes de responder.",
          "Marco el foco contrastivo con la voz.",
          "La intervención avanza de lo conocido a lo nuevo.",
        ],
      },
      {
        title: "Responder a una pregunta capciosa en directo",
        prompt: "El gerente te pregunta delante de todos: «¿Usted prefiere que los coches sigan estacionando en la vereda?». Responde sin aceptar la presuposición, hazle una pregunta que lo obligue a dar un dato y mantén un trato coherente aunque él cambie del tú al usted.",
        prep: [
          "Identifica lo que da por hecho la pregunta.",
          "Prepara una contrapregunta con un dato verificable.",
        ],
        seconds: 180,
        model: "Nadie aquí prefiere que los coches estacionen en la vereda. Lo que preferimos es que se estudie el terreno de la fábrica, que la municipalidad ofreció en 2023. Y ya que hablamos de preferencias, ¿podría decirnos por qué el contrato fija veinte años para un estacionamiento que usted llama provisional?",
        selfCheck: [
          "No acepto la presuposición de la pregunta.",
          "Hago una contrapregunta concreta.",
          "Mantengo el trato de forma coherente.",
        ],
      },
      {
        title: "Leer y reordenar en voz alta",
        prompt: "Lee en voz alta un párrafo de tu artículo. Después reformúlalo oralmente con otro orden: cambia un atributo antepuesto por el orden neutro y una escindida por un acento contrastivo. Explica en una frase qué se gana o se pierde.",
        prep: [
          "Marca en el párrafo los órdenes marcados.",
          "Decide qué palabra recibirá el acento contrastivo.",
        ],
        seconds: 120,
        selfCheck: [
          "El acento contrastivo cae en la palabra corregida.",
          "Explico el efecto del cambio de orden.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu artículo y una lista de dudas del bloque de las semanas 6 a 10. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Desmonta",
        task: "Lleva una pregunta cargada de una entrevista o un debate real y pide a tu profesor que encuentre lo que da por hecho antes de que se lo digas.",
        phrases: ["Esta pregunta da por sentado que…", "Si la niegas, sigue suponiendo que…"],
      },
      {
        move: "Corrige",
        task: "Pide a tu profesor que diga una frase con un error de foco; corrígela en voz alta con el acento, con una escindida y con «no…, sino…».",
        phrases: ["No fue…, sino…", "Fue… quien…"],
      },
      {
        move: "Integra",
        task: "Elige un fenómeno de cada semana del bloque (ambigüedad, norma, trato, pasado, pronombres, ironía) y pide a tu profesor que te ponga un ejemplo nuevo para que lo analices.",
        phrases: ["Esto es de la semana…", "Aquí lo que pasa es que…"],
      },
      {
        move: "Ordena",
        task: "Lee un párrafo de tu artículo y pide a tu profesor que señale si hay algún cambio de tema mal marcado.",
        phrases: ["¿Aquí hace falta «en cuanto a»?", "¿El párrafo avanza o se repite?"],
      },
    ],
    bring: "Tu artículo de opinión revisado, tu lista de preguntas cargadas y, si quieres, la grabación de tu intervención en la audiencia.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«El alcalde volvió a prometer el cerco.» ¿Qué presupone la frase?",
        options: [
          "Que el alcalde ya había prometido el cerco antes.",
          "Que el cerco ya está instalado.",
          "Que el alcalde nunca prometió nada.",
        ],
        answer: 0,
        why: "«Volver a» es un activador de repetición.",
      },
      {
        type: "choice",
        q: "¿Qué frase mantiene la presuposición de que alguien autorizó la obra?",
        options: [
          "Nadie autorizó la obra.",
          "No fue el ministerio quien autorizó la obra.",
          "¿Alguien autorizó la obra?",
        ],
        answer: 1,
        why: "La escindida negada mantiene la presuposición de su relativa.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué recurso usa para retomar lo anterior?",
        options: [
          "Un cambio de tema con «en cuanto a».",
          "Un atributo antepuesto.",
          "Una anteposición anafórica.",
        ],
        answer: 2,
        why: "«Prueba de ello» retoma lo dicho al comienzo de la oración.",
        audio: "Prueba de ello es que el colegio organiza visitas a la huaca cada semana.",
        voice: "es-PE-m",
      },
      {
        type: "gap",
        q: "Fue en el sector norte ___ aparecieron las vasijas más antiguas.",
        answers: [["donde"]],
        hint: "Escindida de lugar: la forma recomendada es la de «Fue allí…».",
        why: "Con foco de lugar se recomienda «donde».",
      },
      {
        type: "gap",
        q: "No lo dijo la arqueóloga, ___ el gerente de la inmobiliaria.",
        answers: [["sino"]],
        hint: "Conjunción que introduce el foco correcto tras una negación.",
        why: "Foco correctivo con «no…, sino…».",
      },
      {
        type: "transform",
        source: "La inmobiliaria no ha publicado el informe técnico.",
        instruction: "Pon «el informe técnico» al principio como tema y retómalo con un pronombre átono.",
        answers: ["El informe técnico, la inmobiliaria no lo ha publicado."],
        why: "Tema dislocado retomado con «lo».",
      },
      {
        type: "error",
        sentence: "Nota neutra: «El gerente sabe que los vecinos exageran los daños».",
        answers: ["Nota neutra: «El gerente afirma que los vecinos exageran los daños».", "Nota neutra: «El gerente cree que los vecinos exageran los daños»."],
        why: "«Saber» es factivo: la nota asumiría como verdad la opinión del gerente.",
      },
      {
        type: "error",
        sentence: "A los vecinos le enviamos el acta y en cuanto a los vecinos, la recibieron el lunes.",
        answers: ["A los vecinos les enviamos el acta y la recibieron el lunes."],
        why: "«Les» para el plural y sin «en cuanto a» cuando el tema no cambia.",
      },
      {
        type: "order",
        words: ["Graves", "son", "los", "riesgos", "de", "construir", "junto", "al", "muro."],
        why: "Atributo antepuesto con inversión.",
      },
      {
        type: "open",
        prompt: "Escribe en 90–110 palabras la respuesta que darías en la radio a esta pregunta: «¿Por qué la asociación insiste en frenar un proyecto que generará empleo?». Rechaza lo que da por hecho, corrige un foco y añade un dato.",
        model: "Antes de responder, permítame corregir la pregunta. La asociación no insiste en frenar nada: presentó una petición formal para que se estudie otra ubicación. Y tampoco está demostrado que este proyecto genere empleo; el resumen publicado no da ninguna cifra. No es el desarrollo lo que discutimos, sino el lugar. Fue la propia municipalidad la que ofreció en 2023 el terreno de la antigua fábrica, a dos cuadras de la huaca. Pedimos solo eso: que se compare esa opción antes de decidir, con los documentos completos sobre la mesa.",
        checklist: [
          "Rechazo las presuposiciones de la pregunta.",
          "Uso una escindida o «no…, sino…».",
          "Aporto un dato verificable.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Separo lo afirmado de lo presupuesto y reconozco los activadores: factivos, cambio de estado, nominalizaciones, preguntas cargadas y partículas de foco.",
      "Corrijo un foco con acento contrastivo, anteposición, escindida o «no…, sino…», y uso «Fue entonces cuando» o «Es por eso que» según la norma.",
      "Ordeno un texto con progresión temática, sujetos pospuestos, peso final y órdenes marcados, y marco solo los cambios de tema reales.",
      "Integro lo repasado en las semanas 6 a 9: ambigüedad, norma, trato, variación del pasado, pronombres e ironía.",
    ],
    review: [
      "Dentro de dos días, tapa la columna derecha de la tabla «Activadores de presuposición» y reconstruye lo que da por hecho cada ejemplo.",
      "Dentro de una semana, escucha una entrevista política y anota dos preguntas cargadas y cómo responderías tú.",
      "En la próxima clase, lee tu artículo completo y pide a tu profesor que discuta la progresión de un párrafo.",
    ],
  },
  related: [
    { path: "/gramatica/foco-presuposicion-y-estructura-informativa", label: "Clase: Foco, presuposición y estructura informativa" },
    { path: "/gramatica/tema-rema-y-orden-marcado-en", label: "Clase: Tema, rema y orden marcado en textos complejos" },
  ],
};
