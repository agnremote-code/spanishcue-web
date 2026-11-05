import type { Module } from "../../types";

/**
 * C2 · semana 14 · Autoestudio espejo de G226 (discursos jurídicos y
 * administrativos: sintaxis densa). Repaso autónomo con una comunidad ficticia
 * de copropietarios de Ñuñoa, en Santiago de Chile, que tiene que entender una
 * cláusula de su reglamento y una notificación municipal antes de una asamblea.
 * Todos los textos jurídicos son imitaciones. Audio mediante síntesis; sin
 * acreditación regional.
 */
export const c2w14: Module = {
  id: "c2-14",
  level: "c2",
  week: 14,
  kind: "core",
  title: "Leer la cláusula como un plano",
  subtitle: "Repaso de cómo se descifra una frase jurídica o administrativa densa y de cómo se pasa a lenguaje claro sin cambiar su efecto",
  stop: {
    place: "Santiago",
    country: "Chile",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g226",
    "c2.voc.w14-copropiedad",
    "c2.pron.w14-lectura-clausula",
    "c2.lis.w14-consulta-administradora",
    "c2.read.w14-boletin-clausula",
    "c2.wri.w14-circular-clara",
    "c2.spk.w14-explicar-asamblea",
    "c2.fun.w14-descifrar-norma",
    "c2.disc.w14-version-fiel",
  ],
  reviewObjectives: ["c2.gram.g224","c2.gram.g225","c2.voc.w13-estudio-ruido","c2.pron.w13-tono-marcadores","c2.lis.w13-reunion-titulo","c2.read.w13-articulo-exploratorio","c2.wri.w13-seccion-discusion","c2.spk.w13-defender-turno","c2.fun.w13-aceptar-con-condiciones","c2.disc.w13-asociacion-causa"],
  prerequisites: ["c2-13"],
  goal: {
    canDo: "Puedo localizar en una frase jurídica o administrativa densa el verbo principal, el sujeto, las condiciones, las excepciones, los plazos y las reservas, y reescribirla en lenguaje claro sin alterar lo que obliga, permite o excluye.",
    steps: [
      "Repasa en la teoría la estrategia de lectura, las fórmulas con contenido jurídico, los gerundios y los anafóricos del género y los cambios que no se pueden hacer al simplificar.",
      "Practica con cláusulas de un reglamento de copropiedad y con una notificación municipal imitados.",
      "Escucha a la administradora consultar a un vecino abogado y lee el artículo del boletín de la comunidad que explica la cláusula de los gastos extraordinarios.",
      "Redacta la circular para los copropietarios, revísala con la lista de control y explica en voz alta la cláusula en la asamblea.",
    ],
  },
  theory: {
    intro: "En clase viste con tu profesor que una cláusula jurídica, por larga que sea, tiene una estructura que se puede descubrir. Aquí lo repasas con los papeles de una comunidad de copropietarios de Ñuñoa, en Santiago: un artículo de su reglamento y una notificación de la municipalidad. Todos los textos son imitaciones escritas para practicar; no tienen valor jurídico.",
    parts: [
      {
        heading: "Primero la estructura: verbo, sujeto, condiciones y plazos",
        body: [
          "Las frases jurídicas acumulan subordinadas antes del verbo principal, que a menudo aparece en la cuarta o quinta línea. No intentes entenderlas de corrido. Léelas como un plano: busca primero el verbo conjugado que no depende de ningún «que», «cuando» o «si»; después, su sujeto; y solo entonces clasifica lo demás en condiciones, excepciones, plazos, remisiones a otras normas y reservas.",
          "Una vez hecho el esqueleto, la frase suele resumirse en una línea: «quién debe, puede o no puede hacer qué». El resto son las piezas que limitan esa línea, y ninguna sobra: una excepción olvidada o un plazo mal leído cambia el efecto de la norma.",
        ],
        table: {
          caption: "Desmontar una cláusula del reglamento (imitación)",
          head: ["Pieza", "Fragmento", "Pregunta que responde"],
          rows: [
            ["remisión", "De conformidad con lo dispuesto en el artículo 9,", "¿en qué norma se apoya?"],
            ["condición", "en el caso de que la asamblea apruebe obras extraordinarias,", "¿cuándo se aplica?"],
            ["sujeto", "los copropietarios", "¿quién?"],
            ["verbo principal", "deberán abonar", "¿qué deben hacer?"],
            ["objeto", "la cuota que les corresponda según su porcentaje de dominio", "¿qué exactamente?"],
            ["plazo", "dentro de los treinta días hábiles siguientes a la notificación,", "¿hasta cuándo?"],
            ["excepción", "salvo que el comité acuerde un pago fraccionado,", "¿cuándo no se aplica?"],
            ["reserva", "sin perjuicio de las acciones de cobro que procedan.", "¿qué otra cosa sigue siendo posible?"],
          ],
        },
        mistakes: [
          {
            wrong: "Leer «sin perjuicio de las acciones de cobro» como «sin que haya acciones de cobro».",
            right: "«Sin perjuicio de las acciones de cobro» significa ‘además, y sin que esto impida, las acciones de cobro’.",
            why: "«Sin perjuicio de» no excluye nada: deja a salvo otra consecuencia que sigue siendo posible.",
          },
        ],
        tip: "Subraya el verbo principal con un color, el sujeto con otro y pon entre corchetes todo lo demás. Si no encuentras el verbo, todavía no has entendido la frase.",
      },
      {
        heading: "Fórmulas con contenido y fórmulas vacías",
        body: [
          "Muchas fórmulas del lenguaje jurídico parecen relleno, pero tienen un contenido preciso que no puede perderse al simplificar. «De conformidad con» o «a tenor de lo dispuesto en» remiten a la norma que fundamenta la decisión; «en virtud de» indica la causa o el poder con que se actúa; «a los efectos de» delimita para qué vale una definición; «salvo que» introduce una excepción; «en su caso» significa ‘si corresponde’ y avisa de que algo puede no darse.",
          "Otras fórmulas, en cambio, no aportan nada y pueden eliminarse sin pérdida: «por la presente se le comunica» equivale a «le comunicamos», y «proceder a + sustantivo» suele sustituirse por el verbo correspondiente: «se procederá a la notificación» es «se notificará».",
          "«Salvo que» va normalmente con subjuntivo, porque introduce una condición que excluye la regla: «salvo que el comité acuerde otra cosa». Con indicativo introduce una excepción que es un hecho: «el expediente está completo, salvo que falta la firma del arquitecto».",
        ],
        table: {
          caption: "Qué se conserva y qué se puede eliminar",
          head: ["Fórmula", "Qué significa", "En lenguaje claro"],
          rows: [
            ["de conformidad con el artículo 9", "remite a la norma que fundamenta la decisión", "según el artículo 9"],
            ["en virtud de la resolución", "a causa de, en aplicación de", "por la resolución / en aplicación de la resolución"],
            ["a los efectos de este reglamento", "solo para este reglamento", "en este reglamento"],
            ["sin perjuicio de", "sin que impida o afecte a", "además, y sin que esto impida…"],
            ["en su caso", "si corresponde", "si corresponde / cuando proceda"],
            ["por la presente se le comunica", "(fórmula vacía)", "le comunicamos"],
            ["se procederá a la reparación", "(nominalización)", "se reparará"],
          ],
        },
        mistakes: [
          {
            wrong: "Versión clara: «Los vecinos pagarán la cuota de la reparación». (Original: «abonarán, en su caso, la cuota de la reparación»).",
            right: "«Los vecinos pagarán, si corresponde, la cuota de la reparación».",
            why: "«En su caso» indica que la obligación depende de que se dé la situación; eliminarlo convierte una posibilidad en una obligación general.",
          },
        ],
      },
      {
        heading: "Gerundios, futuro de subjuntivo y anafóricos del género",
        body: [
          "En los títulos de normas aparece a veces un gerundio con valor de relativo: «Resolución regulando el uso de los estacionamientos». Se considera incorrecto; lo adecuado es «Resolución por la que se regula…» o «que regula…». También es incorrecto el gerundio de posterioridad, que presenta como simultáneo algo posterior: «se rechazó la solicitud, procediéndose a su archivo» debe ser «se rechazó la solicitud y se archivó». En cambio, el gerundio compuesto de anterioridad («habiendo presentado el recurso…») y el gerundio causal con sujeto propio («no habiendo presentado el vecino la documentación, se archiva el expediente») son correctos.",
          "Algunos textos antiguos o muy formales conservan el futuro de subjuntivo: «el que infringiere esta norma será sancionado». Basta con reconocerlo y leerlo en español actual: «quien infrinja esta norma será sancionado».",
          "Para retomar un referente, el género usa «dicho» y «dicha» («dicha cuota», «dicho plazo»), que son correctos, aunque su acumulación hace pesado el texto. Más discutible es «el mismo» o «la misma» como simple pronombre: «se entregará el formulario y se firmará el mismo» se desaconseja; basta con «y se firmará» o «y se firmará ese formulario».",
        ],
        examples: [
          { es: "Ordenanza por la que se regula la tenencia de mascotas en espacios comunes.", note: "En lugar de «Ordenanza regulando…»." },
          { es: "La asamblea rechazó la propuesta y la devolvió al comité.", note: "En lugar de «rechazó la propuesta, devolviéndola al comité»." },
          { es: "Habiendo vencido el plazo, el comité aplicó el recargo.", note: "Gerundio compuesto de anterioridad: correcto." },
          { es: "Original: «el copropietario que no hubiere pagado». Lectura actual: «el copropietario que no haya pagado».", note: "Forma de reconocimiento, no de uso." },
        ],
        mistakes: [
          {
            wrong: "Se revisó la solicitud y se aprobó la misma por unanimidad.",
            right: "Se revisó la solicitud y se aprobó por unanimidad.",
            why: "«La misma» como pronombre anafórico se desaconseja; aquí el referente está claro sin él.",
          },
          {
            wrong: "El comité se reunió el lunes, aprobando el presupuesto el viernes.",
            right: "El comité se reunió el lunes y aprobó el presupuesto el viernes.",
            why: "Gerundio de posterioridad: la aprobación es posterior a la reunión.",
          },
        ],
      },
      {
        heading: "Simplificar sin cambiar el efecto jurídico",
        body: [
          "El lenguaje claro no consiste en resumir, sino en conservar todo el contenido con una sintaxis más sencilla: frases más cortas, verbo principal al principio, voz activa con un agente explícito cuando el agente importa y enumeraciones paralelas. Lo que no puede cambiar es lo que la norma obliga, permite o excluye.",
          "Hay pares que parecen sinónimos y no lo son. «Deberá» obliga; «podrá» permite. «Días hábiles» excluye fines de semana y festivos; «días» los incluye. «Desistir» de una solicitud es retirarla, y puede presentarse de nuevo; «renunciar» a un derecho es perderlo. «Sin perjuicio de» y «en su caso» tienen que aparecer de alguna manera en la versión clara.",
        ],
        table: {
          caption: "Cambios que alteran el efecto",
          head: ["Original", "Versión que cambia el efecto", "Versión fiel"],
          rows: [
            ["deberá presentar el certificado", "puede presentar el certificado", "tiene que presentar el certificado"],
            ["en el plazo de diez días hábiles", "en diez días", "en diez días hábiles (sin contar fines de semana ni festivos)"],
            ["se le tendrá por desistido", "se considerará que renuncia", "se considerará que retira la solicitud"],
            ["salvo que el comité acuerde lo contrario", "(se omite)", "excepto si el comité decide otra cosa"],
          ],
        },
        mistakes: [
          {
            wrong: "Versión clara: «Si no manda los papeles, pierde el derecho a la ayuda». (Original: «se le tendrá por desistido de su solicitud»).",
            right: "«Si no manda los papeles, se considerará que retira la solicitud; podrá presentarla de nuevo en otra convocatoria».",
            why: "Desistir no es renunciar: la versión equivocada asusta al vecino con una consecuencia que la norma no establece.",
          },
        ],
        tip: "Cuando termines una versión clara, compárala con el original pieza por pieza: verbo, sujeto, condición, excepción, plazo y reserva. Si falta una, todavía no está terminada.",
      },
    ],
  },
  grammar: {
    intro: "Primero desmonta, después interpreta y solo al final reescribe.",
    exercises: [
      {
        id: "c2-14-gramatica-estructura",
        type: "context",
        prompt: "Lee la cláusula imitada y responde a la pregunta sobre su estructura.",
        items: [
          {
            context: "«A los efectos de lo previsto en el artículo 12, y siempre que la asamblea no haya dispuesto otra cosa, el administrador podrá contratar reparaciones urgentes hasta un monto de cincuenta unidades de fomento.»",
            q: "¿Cuál es el verbo principal y quién es su sujeto?",
            options: [
              "«haya dispuesto»; la asamblea.",
              "«podrá contratar»; el administrador.",
              "«previsto»; el artículo 12.",
            ],
            answer: 1,
            why: "«Haya dispuesto» depende de «siempre que»; «previsto» es un participio. El verbo principal es «podrá contratar».",
          },
          {
            context: "«Los copropietarios deberán comunicar al administrador, con una antelación mínima de cinco días hábiles, la realización de mudanzas, sin perjuicio de las normas sobre horarios que establezca el comité.»",
            q: "¿Qué hace «sin perjuicio de las normas sobre horarios»?",
            options: [
              "Anula las normas de horarios mientras se avise con antelación.",
              "Indica que las normas de horarios se aplican además del aviso.",
              "Obliga al comité a fijar horarios nuevos.",
            ],
            answer: 1,
            why: "«Sin perjuicio de» deja a salvo otra norma que se aplica también.",
          },
          {
            context: "«Se impondrá, en su caso, una multa equivalente a una cuota de gasto común.»",
            q: "¿Qué indica «en su caso»?",
            options: [
              "Que la multa se impone siempre.",
              "Que la multa la decide cada vecino en su caso particular.",
              "Que la multa se impone solo si se da la situación prevista.",
            ],
            answer: 2,
            why: "«En su caso» = ‘si corresponde’.",
          },
          {
            context: "«Transcurrido el plazo sin que el interesado haya subsanado la solicitud, se le tendrá por desistido de la misma.»",
            q: "¿Qué consecuencia tiene para el vecino?",
            options: [
              "Se considera que retira la solicitud, que podría volver a presentar.",
              "Pierde para siempre el derecho a solicitar.",
              "Debe pagar una multa.",
            ],
            answer: 0,
            why: "Desistir es retirar la solicitud, no renunciar al derecho.",
          },
        ],
      },
      {
        id: "c2-14-gramatica-claro",
        type: "gap",
        prompt: "Escribe el equivalente en lenguaje claro de la fórmula entre corchetes, sin perder su contenido.",
        items: [
          { q: "___ el artículo 9 del reglamento, la cuota se calcula según el porcentaje de cada departamento. [De conformidad con]", answers: [["Según", "según"]], why: "La remisión a la norma se conserva con «según»." },
          { q: "Le ___ que su solicitud ha sido aprobada. [Por la presente se le comunica]", answers: [["comunicamos"]], why: "Fórmula vacía: basta el verbo." },
          { q: "La empresa ___ la fachada en marzo. [procederá a la reparación de]", answers: [["reparará"]], why: "«Proceder a + sustantivo» → verbo." },
          { q: "Los vecinos pagarán, ___, la diferencia de la cuota. [en su caso]", answers: [["si corresponde", "cuando corresponda", "cuando proceda"]], why: "«En su caso» se conserva como condición." },
          { q: "El que ___ las normas de convivencia será amonestado por escrito. [infringiere, en español actual]", answers: [["infrinja"]], why: "Futuro de subjuntivo → presente de subjuntivo tras relativo." },
          { q: "El plazo es de quince días ___, es decir, sin contar fines de semana ni festivos. [hábiles]", answers: [["hábiles"]], why: "«Hábiles» no puede eliminarse: cambia la fecha límite." },
        ],
      },
      {
        id: "c2-14-gramatica-gerundio",
        type: "classify",
        prompt: "Clasifica cada gerundio o anafórico: ¿es correcto o conviene corregirlo?",
        categories: ["Correcto", "Conviene corregirlo"],
        items: [
          { text: "Habiendo recibido el informe técnico, el comité convocó a asamblea.", cat: 0, why: "Gerundio compuesto de anterioridad." },
          { text: "Decreto estableciendo el horario de la piscina.", cat: 1, why: "Gerundio con valor de relativo en un título: «por el que se establece»." },
          { text: "No habiendo quórum, la asamblea se celebró en segunda citación.", cat: 0, why: "Gerundio causal con sujeto propio." },
          { text: "Se votó la propuesta, aprobándose dos semanas después.", cat: 1, why: "Gerundio de posterioridad." },
          { text: "Dicho plazo comenzará a contar desde la notificación.", cat: 0, why: "«Dicho» como anafórico es correcto." },
          { text: "Se recibió la factura y se pagó la misma al día siguiente.", cat: 1, why: "«La misma» como pronombre se desaconseja." },
        ],
      },
      {
        id: "c2-14-gramatica-errores",
        type: "error",
        prompt: "Cada versión clara cambia el efecto del original o arrastra un error del género. Corrígela.",
        items: [
          {
            sentence: "Versión clara: «Los copropietarios pueden presentar el certificado de la instalación de gas antes del 30 de junio». Original: «deberán presentar».",
            answers: ["Versión clara: «Los copropietarios tienen que presentar el certificado de la instalación de gas antes del 30 de junio». Original: «deberán presentar».", "Versión clara: «Los copropietarios deben presentar el certificado de la instalación de gas antes del 30 de junio». Original: «deberán presentar»."],
            why: "«Deberá» obliga; «puede» solo permite.",
          },
          {
            sentence: "Tiene diez días para responder, contando sábados y domingos, según el plazo de diez días hábiles.",
            answers: ["Tiene diez días hábiles para responder, sin contar sábados, domingos ni festivos."],
            why: "Los días hábiles excluyen fines de semana y festivos.",
          },
          {
            sentence: "Resolución aprobando las bases del concurso de jardines del condominio.",
            answers: ["Resolución por la que se aprueban las bases del concurso de jardines del condominio.", "Resolución que aprueba las bases del concurso de jardines del condominio."],
            why: "Gerundio con valor de relativo en un título.",
          },
          {
            sentence: "La administración revisó la solicitud, rechazándola una semana más tarde.",
            answers: ["La administración revisó la solicitud y la rechazó una semana más tarde."],
            why: "Gerundio de posterioridad: el rechazo es posterior.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de una comunidad de copropietarios, de sus normas y de los trámites con la municipalidad.",
    groups: [
      {
        title: "La comunidad",
        items: [
          { es: "el reglamento de copropiedad", note: "conjunto de normas que rige un edificio o condominio con varios propietarios" },
          { es: "los gastos comunes", note: "cuota mensual para mantener los espacios compartidos (en España, «cuota de comunidad»)" },
          { es: "el porcentaje de dominio", note: "parte que corresponde a cada propiedad sobre el total del edificio" },
          { es: "el comité de administración", note: "grupo de copropietarios elegido para supervisar la gestión" },
          { es: "la asamblea extraordinaria", note: "reunión de copropietarios convocada para un asunto concreto" },
          { es: "el quórum", note: "número mínimo de asistentes para que una reunión pueda decidir" },
          { es: "el fondo de reserva", note: "dinero guardado para reparaciones imprevistas" },
        ],
      },
      {
        title: "Normas y trámites",
        items: [
          { es: "la notificación", note: "comunicación oficial de una decisión a la persona interesada" },
          { es: "subsanar", note: "corregir un defecto de una solicitud dentro del plazo" },
          { es: "desistir de una solicitud", note: "retirarla; se puede volver a presentar" },
          { es: "renunciar a un derecho", note: "perderlo de forma voluntaria" },
          { es: "los días hábiles", note: "días en que se cuentan los plazos, sin fines de semana ni festivos" },
          { es: "interponer un recurso", note: "pedir formalmente que se revise una decisión" },
          { es: "el lenguaje claro", note: "redacción que el destinatario entiende a la primera sin perder exactitud" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-14-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el porcentaje de dominio", right: "parte que corresponde a cada propiedad sobre el total del edificio" },
          { left: "el quórum", right: "número mínimo de asistentes para que una reunión pueda decidir" },
          { left: "subsanar", right: "corregir un defecto de una solicitud dentro del plazo" },
          { left: "desistir de una solicitud", right: "retirarla, con posibilidad de volver a presentarla" },
          { left: "renunciar a un derecho", right: "perderlo de forma voluntaria" },
          { left: "interponer un recurso", right: "pedir formalmente que se revise una decisión" },
        ],
      },
      {
        id: "c2-14-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["fondo de reserva", "gastos comunes", "asamblea extraordinaria", "subsanar"],
        items: [
          { q: "Para reparar el ascensor, el comité propone usar primero el ___ y cobrar solo la diferencia.", answers: [["fondo de reserva"]] },
          { q: "Este mes los ___ suben porque se pintó el hall de entrada.", answers: [["gastos comunes"]] },
          { q: "La municipalidad nos da diez días hábiles para ___ el error del formulario.", answers: [["subsanar"]] },
          { q: "La obra de la fachada se votará en una ___ el próximo martes.", answers: [["asamblea extraordinaria"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Leer en voz alta una cláusula larga: grupos fónicos y pausas que muestran la estructura",
    explanation: [
      "Cuando lees una cláusula en voz alta ante una asamblea, la voz puede hacer el trabajo del subrayado. Cada pieza (remisión, condición, sujeto, verbo, plazo, excepción) forma un grupo fónico, separado por una pausa breve. El sujeto y el verbo principal se dicen con un tono algo más alto y un ritmo más lento; las remisiones y las reservas, más rápido y en tono bajo, como un paréntesis.",
      "Los números y los plazos merecen una pausa propia: «dentro de los treinta… días hábiles». Y las fórmulas largas («a tenor de lo dispuesto en») deben decirse de un tirón, sin pausas internas, para que no parezcan varias ideas.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu lectura. Úsalo para identificar las piezas de la cláusula y ensaya las pausas con una persona.",
    ],
    table: {
      caption: "Una cláusula en grupos fónicos",
      head: ["Grupo", "Pieza", "Voz"],
      rows: [
        ["De conformidad con el artículo nueve,", "remisión", "rápida, tono bajo"],
        ["en caso de obras extraordinarias,", "condición", "media"],
        ["los copropietarios deberán pagar su cuota", "sujeto y verbo principal", "más lenta, tono más alto"],
        ["dentro de los treinta días hábiles", "plazo", "pausa antes del número"],
        ["salvo que el comité acuerde otra cosa.", "excepción", "media, descenso final"],
      ],
    },
    perceive: {
      id: "c2-14-percepcion",
      type: "listen",
      prompt: "Escucha cada cláusula antes de leer las opciones y responde sobre su estructura.",
      items: [
        {
          q: "¿Qué obliga a hacer la cláusula?",
          options: ["Avisar al administrador antes de una mudanza.", "Pedir permiso al comité para hacer una mudanza."],
          answer: 0,
          why: "El verbo principal es «deberán avisar» y el destinatario es el administrador.",
          audio: "Los copropietarios, antes de realizar cualquier mudanza, deberán avisar al administrador con tres días hábiles de antelación.",
          voice: "es-CL-f",
        },
        {
          q: "¿Qué excepción oyes?",
          options: ["Que la piscina abra en invierno.", "Que el comité decida otro horario.", "Que llueva."],
          answer: 1,
          why: "«Salvo que el comité acuerde un horario distinto».",
          audio: "La piscina abrirá de diez a veinte horas, salvo que el comité acuerde un horario distinto.",
          voice: "es-CL-m",
        },
        {
          q: "¿Qué plazo establece?",
          options: ["Quince días naturales.", "Quince días hábiles."],
          answer: 1,
          why: "Se oye «quince días hábiles».",
          audio: "El interesado podrá subsanar la solicitud dentro de los quince días hábiles siguientes a la notificación.",
          voice: "es-CL-f",
        },
        {
          q: "¿Qué hace el final de la cláusula?",
          options: ["Deja a salvo otras acciones.", "Anula la multa."],
          answer: 0,
          why: "«Sin perjuicio de» deja a salvo otras consecuencias.",
          audio: "Se aplicará un recargo del dos por ciento mensual, sin perjuicio de las acciones de cobro que correspondan.",
          voice: "es-CL-m",
        },
      ],
    },
    produce: [
      { text: "De conformidad con el artículo nueve, los copropietarios deberán pagar su cuota dentro de los treinta días hábiles siguientes.", tip: "Remisión rápida; sujeto y verbo más lentos; pausa antes de «treinta».", voice: "es-CL-f" },
      { text: "A tenor de lo dispuesto en el reglamento, el administrador podrá contratar reparaciones urgentes.", tip: "Di «a tenor de lo dispuesto en el reglamento» de un tirón.", voice: "es-CL-m" },
      { text: "Se aplicará un recargo, sin perjuicio de las acciones de cobro que correspondan.", tip: "Baja el tono en la reserva final, como si fuera un paréntesis.", voice: "es-CL-f" },
      { text: "Es decir: tienen treinta días hábiles para pagar, salvo que el comité les permita pagar en cuotas.", tip: "Cambia a un tono conversacional al pasar de la cita a la explicación.", voice: "es-CL-m" },
    ],
    spelling: "En los textos jurídicos, las cifras de dinero y de plazos suelen escribirse en letras y a veces también en números entre paréntesis: «treinta (30) días hábiles». En una versión clara basta con una de las dos formas.",
  },
  listening: {
    title: "Consulta antes de la asamblea",
    context: "Camila, administradora de un condominio de Ñuñoa, en Santiago, consulta a Ignacio, un copropietario abogado, sobre una cláusula del reglamento y una notificación de la municipalidad que tiene que explicar en la asamblea. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "c", name: "Camila", voice: "es-CL-f", role: "Administradora del condominio" },
      { id: "i", name: "Ignacio", voice: "es-CL-m", role: "Copropietario y abogado" },
    ],
    script: [
      { speaker: "c", text: "Ignacio, gracias por bajar. Tengo dos papeles que no logro explicar en simple. El primero es el artículo catorce del reglamento. Te lo leo: «De conformidad con lo dispuesto en el artículo nueve, y en el caso de que la asamblea apruebe obras extraordinarias, los copropietarios deberán abonar la cuota que les corresponda según su porcentaje de dominio dentro de los treinta días hábiles siguientes a la notificación, salvo que el comité acuerde un pago fraccionado, sin perjuicio de las acciones de cobro que procedan»." },
      { speaker: "i", text: "Ya, vamos por partes. ¿Cuál es el verbo principal? «Deberán abonar». ¿Quiénes? Los copropietarios. ¿Qué? Su cuota según el porcentaje. Eso es el esqueleto. Todo lo demás son piezas que lo limitan: cuándo se aplica, que es si la asamblea aprueba la obra; el plazo, treinta días hábiles; la excepción, el pago en cuotas; y la reserva final." },
      { speaker: "c", text: "Esa reserva es la que me complica. Una vecina me preguntó si «sin perjuicio de las acciones de cobro» quiere decir que no la van a demandar." },
      { speaker: "i", text: "Es justo al revés. Quiere decir que, además de lo anterior, la comunidad conserva la posibilidad de cobrar por la vía judicial si alguien no paga. No excluye nada. Yo lo pondría así: «Si no paga a tiempo, la comunidad puede, además, iniciar acciones de cobro»." },
      { speaker: "c", text: "Ah, perfecto. ¿Y treinta días hábiles cuántos son, más o menos?" },
      { speaker: "i", text: "Unas seis semanas, porque no se cuentan sábados, domingos ni festivos. No pongas «un mes», porque es menos y alguien podría pagar con recargo creyendo que estaba fuera de plazo, o al revés. Pon «treinta días hábiles, es decir, sin contar fines de semana ni festivos»." },
      { speaker: "c", text: "Anotado. El segundo papel es de la municipalidad, por el árbol que el vecino del tercero podó sin permiso. Dice: «No habiendo presentado el interesado los antecedentes requeridos dentro del plazo otorgado, se le tiene por desistido de su solicitud de regularización»." },
      { speaker: "i", text: "Ese gerundio está bien usado: es causal, con su propio sujeto. Lo importante es «desistido». No significa que haya perdido el derecho ni que lo multen todavía. Significa que su solicitud se da por retirada. Puede volver a presentarla con los documentos completos." },
      { speaker: "c", text: "Menos mal, porque él ya estaba hablando de renunciar a todo y vender el departamento. ¿Y lo de «el que infringiere la ordenanza», que viene al final?" },
      { speaker: "i", text: "Es un futuro de subjuntivo, una forma antigua que todavía aparece en algunas normas. Léelo como «quien infrinja la ordenanza». Y te sugiero algo para la asamblea: lee primero el original en voz alta, despacio, y después dilo en simple. Así nadie piensa que estás cambiando lo que dice." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la consulta completa sin abrir la transcripción. ¿Qué necesita Camila y qué método le propone Ignacio?",
        exercise: {
          id: "c2-14-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y el método general.",
          items: [
            {
              q: "¿Qué necesita Camila?",
              options: [
                "Redactar un reglamento nuevo para el condominio.",
                "Demandar a un vecino que no pagó.",
                "Entender y explicar en simple dos textos jurídicos antes de la asamblea.",
              ],
              answer: 2,
              why: "Trae el artículo catorce y una notificación municipal.",
            },
            {
              q: "¿Qué método le propone Ignacio?",
              options: [
                "Buscar el verbo principal y su sujeto, y clasificar después las demás piezas.",
                "Resumir cada texto en una frase sin detalles.",
                "Leer solo la última línea de cada texto.",
              ],
              answer: 0,
              why: "«Vamos por partes. ¿Cuál es el verbo principal?»",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada pieza y su explicación. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-14-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de la consulta.",
          items: [
            {
              q: "¿Qué significa, según Ignacio, «sin perjuicio de las acciones de cobro»?",
              options: [
                "Que no habrá acciones de cobro.",
                "Que la comunidad conserva además la posibilidad de cobrar judicialmente.",
                "Que el cobro depende del comité.",
              ],
              answer: 1,
              why: "La reserva no excluye nada.",
            },
            {
              q: "¿Por qué no conviene decir «un mes» en lugar de «treinta días hábiles»?",
              options: [
                "Porque treinta días hábiles son unas seis semanas.",
                "Porque la municipalidad no trabaja en verano.",
                "Porque el reglamento prohíbe redondear.",
              ],
              answer: 0,
              why: "Sin fines de semana ni festivos, el plazo es más largo que un mes.",
            },
            {
              q: "¿Qué consecuencia tiene para el vecino del tercero que se le tenga por desistido?",
              options: [
                "Pierde el derecho a regularizar la poda.",
                "Recibe una multa inmediata.",
                "Su solicitud se da por retirada y puede presentarla de nuevo.",
              ],
              answer: 2,
              why: "Desistir no es renunciar.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo se explica cada pieza en lenguaje claro. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-14-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento jurídico con la explicación que da Ignacio.",
          pairs: [
            { left: "deberán abonar", right: "verbo principal: el esqueleto de la cláusula" },
            { left: "sin perjuicio de las acciones de cobro", right: "la comunidad puede, además, iniciar acciones de cobro" },
            { left: "treinta días hábiles", right: "sin contar fines de semana ni festivos" },
            { left: "se le tiene por desistido", right: "su solicitud se da por retirada" },
            { left: "el que infringiere la ordenanza", right: "quien infrinja la ordenanza" },
          ],
          why: "Cada fórmula se explica conservando su efecto: obligación, reserva, plazo, desistimiento y forma antigua.",
        },
      },
    ],
  },
  reading: {
    title: "El artículo catorce, pieza por pieza",
    genre: "Artículo divulgativo en el boletín de una comunidad",
    frame: "Texto de Camila Fuentealba, administradora del condominio, para el boletín mensual de la comunidad de Ñuñoa. Comunidad, reglamento y cifras son ficticios; las cláusulas son imitaciones.",
    text: [
      "Desde que la asamblea aprobó la reparación de la fachada, muchos de ustedes me han preguntado qué dice exactamente el artículo catorce del reglamento de copropiedad, que es el que regula cómo se pagan las obras extraordinarias. La pregunta es razonable: el artículo tiene una sola frase de ochenta y tantas palabras y, leído de corrido, parece escrito para que nadie lo entienda. No es así. Tiene una estructura muy clara, y en este artículo quiero mostrarles cómo encontrarla, con la ayuda de nuestro vecino Ignacio Riquelme, que es abogado y tuvo la paciencia de explicármela.",
      "Lo primero es buscar el verbo principal, que en este caso aparece en la mitad de la frase: «deberán abonar». Su sujeto son los copropietarios, y lo que deben abonar es «la cuota que les corresponda según su porcentaje de dominio». Ese es el esqueleto: cada uno paga según la parte del edificio que le pertenece. Un departamento grande paga más que uno pequeño, y los locales comerciales del primer piso, que tienen un porcentaje mayor, pagan en proporción.",
      "Todo lo demás son piezas que limitan ese esqueleto. Al principio hay una remisión, «de conformidad con lo dispuesto en el artículo nueve», que indica en qué otra norma se apoya la regla; el artículo nueve es el que define qué se considera obra extraordinaria. A continuación viene la condición: «en el caso de que la asamblea apruebe obras extraordinarias». Es decir, la obligación de pagar no existe por sí sola; nace solo cuando la asamblea vota una obra de ese tipo, como ocurrió en marzo con la fachada.",
      "Después del objeto aparece el plazo, que ha provocado más de un malentendido: «dentro de los treinta días hábiles siguientes a la notificación». Hábiles quiere decir que no se cuentan sábados, domingos ni festivos, de modo que el plazo real es de unas seis semanas desde que reciben la carta, no de un mes. Les pido que no lo redondeen en ningún sentido. Quien pague a las cuatro semanas está dentro de plazo; quien espere a la octava, probablemente no.",
      "La penúltima pieza es una excepción: «salvo que el comité acuerde un pago fraccionado». Esto significa que el comité de administración puede permitir pagar en cuotas, pero no está obligado a hacerlo, y mientras no lo acuerde rige el plazo general. En su última reunión, el comité acordó ofrecer tres cuotas mensuales a quien lo solicite por escrito antes del treinta de abril; habiendo llegado ya once solicitudes, imaginamos que serán bastantes más.",
      "Queda la reserva final, la que más preguntas ha generado: «sin perjuicio de las acciones de cobro que procedan». Varios vecinos la han leído como una promesa de que no habrá demandas. Es justamente lo contrario. «Sin perjuicio de» quiere decir que lo anterior no impide otra cosa: además del plazo y de las cuotas, la comunidad conserva la posibilidad de cobrar por la vía judicial a quien no pague. No es una amenaza; es lo que dice el texto, y prefiero que lo sepan ahora y no cuando sea tarde.",
      "Con todas las piezas sobre la mesa, el artículo catorce se puede decir así, sin cambiar nada de lo que establece: cuando la asamblea aprueba una obra extraordinaria, como la fachada, cada copropietario tiene que pagar su parte según su porcentaje de dominio dentro de los treinta días hábiles siguientes a la carta de cobro; el comité puede permitir pagar en cuotas; y, si alguien no paga, la comunidad puede, además, reclamar la deuda judicialmente. Es más largo que un resumen, pero no le falta ninguna pieza, y esa es la diferencia entre aclarar una norma y reescribirla a nuestro gusto. En la asamblea del próximo martes leeré el texto original y esta versión, una al lado de la otra, para que cualquiera pueda comprobar que no he quitado ni añadido nada.",
    ],
    glossary: [
      { es: "remisión", note: "referencia de una norma a otra en la que se apoya" },
      { es: "pago fraccionado", note: "pago de una deuda en varias cuotas" },
      { es: "vía judicial", note: "reclamación ante un tribunal" },
    ],
    tasks: [
      {
        id: "c2-14-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la explicación del boletín.",
        items: [
          {
            q: "¿Cuándo nace la obligación de pagar la cuota extraordinaria?",
            options: [
              "Cada año, en marzo.",
              "Cuando la asamblea aprueba una obra extraordinaria.",
              "Cuando el comité lo decide.",
            ],
            answer: 1,
            why: "Es la condición que aparece al principio del artículo.",
          },
          {
            q: "¿Qué dice la autora sobre el pago en cuotas?",
            options: [
              "Que es un derecho de todos los copropietarios.",
              "Que está prohibido por el artículo nueve.",
              "Que el comité puede permitirlo, pero no está obligado.",
            ],
            answer: 2,
            why: "La excepción depende de un acuerdo del comité.",
          },
          {
            q: "¿Por qué la autora insiste en la reserva final?",
            options: [
              "Porque algunos vecinos la entendieron al revés.",
              "Porque quiere amenazar a los morosos.",
              "Porque el abogado la considera inválida.",
            ],
            answer: 0,
            why: "Varios la leyeron como promesa de que no habría demandas.",
          },
        ],
      },
      {
        id: "c2-14-lectura-piezas",
        type: "match",
        prompt: "Relaciona cada fragmento del artículo catorce con la pieza que es.",
        pairs: [
          { left: "de conformidad con lo dispuesto en el artículo nueve", right: "remisión a otra norma" },
          { left: "en el caso de que la asamblea apruebe obras extraordinarias", right: "condición de aplicación" },
          { left: "dentro de los treinta días hábiles siguientes a la notificación", right: "plazo" },
          { left: "salvo que el comité acuerde un pago fraccionado", right: "excepción" },
          { left: "sin perjuicio de las acciones de cobro que procedan", right: "reserva que deja a salvo otra consecuencia" },
        ],
      },
      {
        id: "c2-14-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión del boletín con argumentos propios.",
        items: [
          {
            prompt: "La autora afirma que su versión «es más larga que un resumen, pero no le falta ninguna pieza». Explica en 70–90 palabras por qué un resumen breve podría ser peligroso en este caso y qué pieza se perdería con más facilidad.",
            model: "Un resumen breve, como «hay que pagar la fachada en un mes», parece más útil, pero cambia el efecto del artículo. Perdería el plazo exacto, que es más largo, la posibilidad de pagar en cuotas y la reserva sobre el cobro judicial. Creo que la pieza que se perdería con más facilidad es la reserva final, porque parece una fórmula vacía y, sin embargo, avisa de una consecuencia importante para quien no pague.",
            checklist: [
              "Explico qué cambia un resumen demasiado breve.",
              "Elijo una pieza concreta y justifico mi elección.",
              "Relaciono la decisión con el efecto jurídico de la norma.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora cita cada pieza y la explica enseguida sin cambiar su contenido.",
      items: [
        { quote: "Ese es el esqueleto: cada uno paga según la parte del edificio que le pertenece.", note: "Después de identificar verbo, sujeto y objeto, una frase resume la norma." },
        { quote: "la obligación de pagar no existe por sí sola; nace solo cuando la asamblea vota una obra de ese tipo", note: "La condición se explica como requisito, no como detalle." },
        { quote: "habiendo llegado ya once solicitudes", note: "Gerundio compuesto de anterioridad, correcto." },
        { quote: "«Sin perjuicio de» quiere decir que lo anterior no impide otra cosa", note: "Definición de una fórmula con contenido jurídico." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección de la versión fiel, reformulación y escritura breve. Termina recuperando clases anteriores que preparan esta semana.",
    exercises: [
      {
        id: "c2-14-orden",
        type: "order",
        prompt: "Ordena las palabras para formar versiones claras que conservan el efecto.",
        items: [
          {
            words: ["Tiene", "diez", "días", "hábiles", "para", "corregir", "el", "formulario."],
            why: "Verbo al principio y plazo completo.",
          },
          {
            words: ["Si", "no", "paga,", "la", "comunidad", "puede,", "además,", "reclamar", "la", "deuda."],
            why: "Versión clara de «sin perjuicio de las acciones de cobro».",
          },
          {
            words: ["Resolución", "por", "la", "que", "se", "fijan", "los", "gastos", "comunes."],
            why: "Título sin gerundio con valor de relativo.",
          },
        ],
      },
      {
        id: "c2-14-version-fiel",
        type: "context",
        prompt: "Elige la versión clara que conserva el efecto del original.",
        items: [
          {
            context: "Original: «El administrador podrá autorizar, en su caso, el uso del quincho para celebraciones privadas, previa solicitud con siete días hábiles de antelación».",
            q: "¿Qué versión es fiel?",
            options: [
              "El administrador tiene que autorizar el uso del quincho si se pide con una semana de antelación.",
              "Si corresponde, el administrador puede autorizar el uso del quincho para celebraciones privadas; hay que pedirlo con siete días hábiles de antelación.",
              "El quincho se puede usar para celebraciones privadas.",
            ],
            answer: 1,
            why: "Conserva «podrá», «en su caso» y «días hábiles».",
          },
          {
            context: "Original: «Transcurrido el plazo sin que el interesado haya subsanado los defectos, se le tendrá por desistido de su petición».",
            q: "¿Qué versión es fiel?",
            options: [
              "Si no corrige los errores a tiempo, se considerará que retira su petición.",
              "Si no corrige los errores a tiempo, pierde el derecho a pedir.",
              "Si no corrige los errores a tiempo, se le multará.",
            ],
            answer: 0,
            why: "Desistir es retirar la petición.",
          },
          {
            context: "Original: «Queda prohibido estacionar en los accesos, sin perjuicio de las sanciones municipales que correspondan».",
            q: "¿Qué versión es fiel?",
            options: [
              "Está prohibido estacionar en los accesos, salvo que la municipalidad lo permita.",
              "Está prohibido estacionar en los accesos; no habrá sanciones municipales.",
              "Está prohibido estacionar en los accesos; además, la municipalidad puede sancionar.",
            ],
            answer: 2,
            why: "«Sin perjuicio de» deja a salvo las sanciones municipales.",
          },
        ],
      },
      {
        id: "c2-14-reformular",
        type: "transform",
        prompt: "Reescribe cada fragmento en lenguaje claro según la instrucción, sin cambiar su efecto.",
        items: [
          {
            source: "Por la presente se le comunica que se ha procedido a la reparación del portón.",
            instruction: "Elimina la fórmula vacía y la nominalización.",
            answers: ["Le comunicamos que se ha reparado el portón.", "Le informamos de que se ha reparado el portón.", "Le comunicamos que el portón ya está reparado."],
            why: "«Por la presente» sobra; «proceder a la reparación» → «reparar».",
          },
          {
            source: "Se presentó el recurso, desestimándose el mismo un mes después.",
            instruction: "Corrige el gerundio de posterioridad y el anafórico «el mismo».",
            answers: ["Se presentó el recurso y se desestimó un mes después.", "Se presentó el recurso, que se desestimó un mes después."],
            why: "Coordinación en lugar de gerundio; sin «el mismo».",
          },
          {
            source: "El que causare daños en los espacios comunes deberá repararlos a su costa.",
            instruction: "Pasa el futuro de subjuntivo al español actual y deja igual el resto.",
            answers: ["El que cause daños en los espacios comunes deberá repararlos a su costa.", "Quien cause daños en los espacios comunes deberá repararlos a su costa."],
            why: "Tras relativo, presente de subjuntivo.",
          },
        ],
      },
      {
        id: "c2-14-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Desmonta esta cláusula imitada en sus piezas y escribe después una versión clara (50–70 palabras): «A los efectos de lo previsto en el artículo 20, y siempre que se acredite la urgencia, el administrador podrá ordenar reparaciones sin acuerdo previo del comité, debiendo informar al mismo en la sesión siguiente».",
            model: "Remisión: artículo 20. Condición: que se acredite la urgencia. Sujeto y verbo: el administrador podrá ordenar. Objeto: reparaciones sin acuerdo previo del comité. Obligación añadida: informar al comité en la sesión siguiente. Versión clara: «Si se demuestra que una reparación es urgente, el administrador puede ordenarla sin esperar al comité, según el artículo 20. Después, debe informar al comité en su siguiente sesión».",
            checklist: [
              "Identifico todas las piezas de la cláusula.",
              "Conservo «podrá» como permiso y la obligación de informar.",
              "Elimino «el mismo» sin perder el referente.",
            ],
          },
          {
            prompt: "Escribe un aviso de 50–70 palabras para el ascensor del edificio que explique que los gastos comunes deben pagarse dentro de los diez primeros días hábiles de cada mes y que el retraso tiene recargo, sin perjuicio de otras acciones.",
            model: "Recordatorio: los gastos comunes se pagan dentro de los diez primeros días hábiles de cada mes, es decir, sin contar sábados, domingos ni festivos. Si paga después, se aplicará el recargo que fija el reglamento. Además, la comunidad puede reclamar judicialmente las deudas pendientes. Cualquier duda, consulte a la administración.",
            checklist: [
              "Explico qué son los días hábiles.",
              "Conservo la reserva sobre otras acciones.",
              "Uso frases breves con el verbo al principio.",
            ],
          },
        ],
      },
      {
        id: "c2-14-recuperacion",
        type: "open",
        prompt: "Recupera clases anteriores que preparan esta semana con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G176 (valores del gerundio, C1). Estímulo: «Saliendo del edificio, el vecino vio que el portón estaba abierto» y «El vecino salió del edificio, cerrando el portón diez minutos después». Explica qué valor tiene cada gerundio y cuál es incorrecto.",
            model: "En la primera, el gerundio es de simultaneidad: el vecino vio el portón mientras salía. Es correcto. En la segunda, el gerundio expresa una acción posterior, diez minutos después, y eso es incorrecto; hay que coordinar: «salió del edificio y cerró el portón diez minutos después».",
            checklist: [
              "Distingo simultaneidad y posterioridad.",
              "Corrijo el gerundio incorrecto.",
            ],
          },
          {
            prompt: "Recuperación de la clase G198 (estilo formal, C1). Estímulo: «Se procedió a efectuar la revisión de las cuentas». Explica por qué es pesado y propón dos versiones: una formal ligera y una para el chat del edificio.",
            model: "Es pesado porque acumula dos verbos vacíos («proceder», «efectuar») antes de la idea, que es revisar. Formal ligera: «Se revisaron las cuentas». Para el chat: «Ya revisamos las cuentas». La primera mantiene la impersonalidad; la segunda muestra quién lo hizo.",
            checklist: [
              "Identifico los verbos vacíos.",
              "Propongo dos versiones adecuadas a su registro.",
            ],
          },
          {
            prompt: "Recuperación de la clase G206 (reformulación de formas históricas, semana 1). Estímulo: «Si algún copropietario se opusiere a la obra, podrá hacerlo constar en el acta». Pasa la frase al español actual y explica el cambio.",
            model: "«Si algún copropietario se opone a la obra, podrá hacerlo constar en el acta». Detrás de «si» condicional, el futuro de subjuntivo pasa a presente de indicativo, porque el español actual no admite «si + presente de subjuntivo».",
            checklist: [
              "Uso presente de indicativo tras «si».",
              "Explico el cambio.",
            ],
          },
          {
            prompt: "Recuperación de la clase G210 (subordinación múltiple, semana 4). Estímulo: «El comité informó al administrador de que el vecino había presentado su reclamo, en el que pedía que su cuota se rebajara». Explica qué ambigüedad hay y reescribe la frase sin ella.",
            model: "No está claro si «su cuota» es la del vecino o la del administrador, aunque se supone la del vecino. Versión sin ambigüedad: «El comité informó al administrador de que el vecino había presentado un reclamo. En él, el vecino pedía que se rebajara su propia cuota». Separo la información y repito el sujeto.",
            checklist: [
              "Identifico el referente ambiguo.",
              "Reescribo con referentes únicos.",
            ],
          },
          {
            prompt: "Recuperación de la clase G225 (cautela académica, semana 13). Estímulo, informe del comité: «La reparación del ascensor demuestra que la empresa anterior hizo mal el mantenimiento». Ajusta la afirmación a lo que se sabe: solo consta que el ascensor falló dos veces en un mes después de su revisión.",
            model: "«Consta que el ascensor falló dos veces en el mes siguiente a la revisión. Este dato podría indicar un problema en el mantenimiento anterior, aunque no permite afirmarlo sin un informe técnico». Separo el dato de la interpretación y atenúo la conclusión.",
            checklist: [
              "Separo el dato de la interpretación.",
              "Uso una atenuación propia del registro formal.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la circular que la administración enviará a todos los copropietarios para explicar en lenguaje claro el artículo catorce del reglamento y la notificación municipal sobre la poda del árbol (400–520 palabras). Debe citar los fragmentos clave, explicar cada pieza y dejar claro qué obliga, qué permite y qué consecuencias tiene, sin añadir ni quitar nada.",
    context: "La circular la leerán vecinos de todas las edades, algunos muy preocupados por el costo de la obra. Muchos no han leído nunca el reglamento. Debe ser exacta, porque podría citarse en una asamblea o en un reclamo, y tranquila, porque no es una amenaza. Puedes usar los textos de esta semana o imitar otros con la misma lógica.",
    steps: [
      "Desmonta cada texto en sus piezas: remisión, condición, sujeto, verbo, objeto, plazo, excepción y reserva.",
      "Decide el orden de la circular: por qué escribes, el artículo catorce pieza por pieza, la notificación municipal y qué hacer si alguien tiene dudas.",
      "Redacta sin copiar el modelo. Cita cada fragmento clave entre comillas y explícalo justo después con una frase breve y el verbo al principio.",
      "Revisa la circular con la lista de control: corrige cualquier «deberá» convertido en «puede», cualquier plazo redondeado, cualquier desistimiento explicado como renuncia y cualquier gerundio de posterioridad.",
    ],
    useLanguage: [
      "es decir, / dicho de forma sencilla,",
      "tiene que… / puede… (sin confundirlos)",
      "treinta días hábiles, es decir, sin contar…",
      "si corresponde (= en su caso)",
      "además, y sin que esto lo impida, … (= sin perjuicio de)",
      "se considerará que retira la solicitud (= se le tendrá por desistido)",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Estimados copropietarios: después de la asamblea de marzo, en la que se aprobó reparar la fachada, muchos de ustedes nos han preguntado cuánto, cómo y cuándo hay que pagar. La respuesta está en el artículo catorce de nuestro reglamento, que les explicamos a continuación pieza por pieza. No vamos a resumirlo, porque un resumen podría dejar fuera algo importante: vamos a citar cada parte y a decir con palabras sencillas qué significa. Empecemos por lo esencial: «los copropietarios deberán abonar la cuota que les corresponda según su porcentaje de dominio». Es decir, cada uno tiene que pagar según la parte del edificio que le pertenece.",
    ],
    checklist: [
      "Cada fragmento citado va seguido de una explicación que conserva su efecto.",
      "Distingo siempre entre lo que obliga y lo que permite.",
      "Los plazos aparecen completos, con «hábiles» explicado.",
      "«En su caso» y «sin perjuicio de» se conservan con un equivalente claro.",
      "No hay gerundios de posterioridad ni «el mismo» como pronombre.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Explicar el artículo catorce en la asamblea",
        prompt: "Eres la administradora. Lee en voz alta el artículo catorce con pausas que muestren su estructura y explícalo pieza por pieza a los copropietarios. Después responde a dos preguntas que imaginas: «¿Me pueden demandar?» y «¿Puedo pagar en cuotas?». Habla al menos cuatro minutos.",
        prep: [
          "Marca en el texto los grupos fónicos y dónde harás pausas.",
          "Prepara una frase sencilla para cada pieza.",
          "Ten pensada una respuesta tranquila y exacta a la pregunta sobre la demanda.",
        ],
        seconds: 240,
        model: "Les leo primero el artículo tal como está… Ahora vamos por partes. Lo esencial es esto: los copropietarios deberán abonar su cuota. O sea, cada uno tiene que pagar su parte, según el porcentaje de su departamento. ¿Cuándo? Solo cuando la asamblea aprueba una obra extraordinaria, como la fachada. ¿Hasta cuándo? Treinta días hábiles, que son unas seis semanas…",
        selfCheck: [
          "Leo el original con pausas que muestran su estructura.",
          "No cambio «deberán» por «pueden» ni redondeo el plazo.",
          "Respondo a la pregunta sobre la demanda sin asustar ni ocultar.",
        ],
      },
      {
        title: "Tranquilizar al vecino del tercero",
        prompt: "El vecino que podó el árbol está convencido de que ha perdido todos sus derechos y quiere vender el departamento. Explícale qué significa que se le tenga por desistido, qué puede hacer ahora y qué no sabes con seguridad.",
        prep: [
          "Prepara la diferencia entre desistir y renunciar con un ejemplo.",
          "Separa lo que dice la notificación de lo que podría pasar después.",
        ],
        seconds: 150,
        model: "A ver, tranquilo. La notificación no dice que hayas perdido nada. Dice que, como no mandaste los papeles a tiempo, se considera que retiraste la solicitud. Puedes presentarla de nuevo, esta vez con todos los documentos. Lo que no sé es si habrá multa: eso no lo dice la carta…",
        selfCheck: [
          "Explico la diferencia entre desistir y renunciar.",
          "Distingo lo que dice el texto de lo que no sé.",
        ],
      },
      {
        title: "Del texto denso a la frase breve",
        prompt: "Elige una norma real que conozcas (de tu trabajo, tu edificio o tu universidad), léela en voz alta y explícala en lenguaje claro sin perder ninguna pieza.",
        prep: [
          "Identifica el verbo principal y su sujeto antes de hablar.",
          "Busca la excepción o la reserva, si la hay.",
        ],
        seconds: 120,
        selfCheck: [
          "Mi explicación conserva condición, plazo y excepción.",
          "Cambio de tono al pasar de la cita a la explicación.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase una norma real que te haya costado entender y tu circular revisada. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Desmonta",
        task: "Lee a tu profesor una cláusula real y desmóntala en voz alta en sus piezas antes de explicarla.",
        phrases: ["El verbo principal es…", "Esto es una condición; esto, una excepción…"],
      },
      {
        move: "Compara",
        task: "Presenta dos versiones claras de la misma frase, una fiel y otra que cambia el efecto, y pide a tu profesor que encuentre el cambio.",
        phrases: ["¿Qué pieza falta aquí?", "¿Cambia lo que obliga o lo que permite?"],
      },
      {
        move: "Pregunta",
        task: "Pregunta a tu profesor por una fórmula jurídica que hayas visto y no sepas si tiene contenido o es vacía.",
        phrases: ["¿Esto se puede eliminar o cambia algo?", "¿Cómo lo dirías en lenguaje claro?"],
      },
      {
        move: "Lee",
        task: "Lee tu circular en voz alta con las pausas de los grupos fónicos y pide a tu profesor que te diga si la estructura se entiende de oído.",
        phrases: ["¿Se notan las piezas cuando lo leo?"],
      },
    ],
    bring: "Tu circular revisada, la norma real que has elegido desmontada en sus piezas y, si quieres, la grabación de tu explicación en la asamblea.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En «A tenor de lo dispuesto en el artículo 5, los vecinos que tengan mascotas deberán inscribirlas en el registro de la comunidad», ¿cuál es el verbo principal?",
        options: ["tengan", "dispuesto", "deberán inscribirlas"],
        answer: 2,
        why: "«Tengan» depende de «que»; «dispuesto» es un participio.",
      },
      {
        type: "choice",
        q: "¿Qué significa «sin perjuicio de las sanciones que correspondan»?",
        options: [
          "Que además pueden aplicarse sanciones.",
          "Que no habrá sanciones.",
          "Que las sanciones sustituyen a la medida anterior.",
        ],
        answer: 0,
        why: "«Sin perjuicio de» deja a salvo otra consecuencia.",
      },
      {
        type: "listen",
        q: "Escucha la cláusula. ¿Qué establece sobre el uso de la sala de eventos?",
        options: [
          "Que el administrador tiene que autorizarlo siempre.",
          "Que el administrador puede autorizarlo si corresponde.",
          "Que está prohibido.",
        ],
        answer: 1,
        why: "«Podrá autorizar, en su caso»: permiso condicionado.",
        audio: "El administrador podrá autorizar, en su caso, el uso de la sala de eventos para reuniones familiares.",
        voice: "es-CL-m",
      },
      {
        type: "gap",
        q: "Se le tendrá por desistido: es decir, se considerará que ___ la solicitud.",
        answers: [["retira", "ha retirado"]],
        hint: "Desistir no es renunciar a un derecho: piensa en lo que pasa con la solicitud.",
        why: "Desistir = retirar la solicitud.",
      },
      {
        type: "gap",
        q: "Decreto por el que se ___ el horario de la piscina comunitaria.",
        answers: [["regula", "establece", "fija"]],
        hint: "Sustituye el gerundio del título por una construcción con «se» y verbo conjugado.",
        why: "«Por el que se regula», no «regulando».",
      },
      {
        type: "transform",
        source: "Se procederá al cierre del estacionamiento de visitas durante los trabajos.",
        instruction: "Reescríbela en lenguaje claro sustituyendo la nominalización por un verbo conjugado.",
        answers: ["Se cerrará el estacionamiento de visitas durante los trabajos.", "El estacionamiento de visitas se cerrará durante los trabajos.", "El estacionamiento de visitas estará cerrado durante los trabajos."],
        why: "«Proceder al cierre» → «cerrar».",
      },
      {
        type: "error",
        sentence: "El comité recibió la propuesta el lunes, aprobándola el jueves siguiente.",
        answers: ["El comité recibió la propuesta el lunes y la aprobó el jueves siguiente."],
        why: "Gerundio de posterioridad.",
      },
      {
        type: "error",
        sentence: "Versión clara: «Tiene diez días para presentar el recurso». Original: «dentro del plazo de diez días hábiles».",
        answers: ["Versión clara: «Tiene diez días hábiles para presentar el recurso». Original: «dentro del plazo de diez días hábiles».", "Versión clara: «Tiene diez días hábiles, sin contar fines de semana ni festivos, para presentar el recurso». Original: «dentro del plazo de diez días hábiles»."],
        why: "Eliminar «hábiles» cambia la fecha límite.",
      },
      {
        type: "order",
        words: ["Si", "corresponde,", "el", "comité", "podrá", "ampliar", "el", "plazo."],
        why: "Versión clara de «el comité podrá, en su caso, ampliar el plazo».",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un vecino por qué la versión clara «hay que pagar la obra en un mes» no es fiel a «los copropietarios deberán abonar su cuota dentro de los treinta días hábiles siguientes a la notificación, salvo que el comité acuerde un pago fraccionado».",
        model: "La versión breve cambia dos cosas importantes. Primero, el plazo: treinta días hábiles no son un mes, sino unas seis semanas, porque no se cuentan fines de semana ni festivos, y además empiezan a contar desde la notificación. Segundo, elimina la excepción: el comité puede permitir el pago en cuotas, y quien no lo sepa no lo pedirá. Una versión fiel sería: «Tiene treinta días hábiles desde la carta para pagar su cuota, salvo que el comité le permita pagar en cuotas».",
        checklist: [
          "Explico el error del plazo.",
          "Señalo la excepción que falta.",
          "Propongo una versión fiel.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Localizo en una frase jurídica densa el verbo principal, el sujeto, las condiciones, las excepciones, los plazos y las reservas.",
      "Distingo las fórmulas con contenido jurídico de las fórmulas vacías y las paso a lenguaje claro sin perder su valor.",
      "Reconozco y corrijo el gerundio con valor de relativo, el gerundio de posterioridad y «el mismo» como pronombre, y leo en español actual el futuro de subjuntivo.",
      "Reescribo una norma en lenguaje claro sin confundir «deberá» y «podrá», días y días hábiles, ni desistir y renunciar.",
    ],
    review: [
      "Dentro de dos días, tapa la columna central de la tabla de piezas y reconstruye qué pregunta responde cada una.",
      "Dentro de una semana, busca una cláusula real (de un contrato, un reglamento o unas bases) y desmóntala por escrito.",
      "En la próxima clase, lee tu circular y pide a tu profesor que compruebe que no has cambiado el efecto de ninguna pieza.",
    ],
  },
  related: [
    { path: "/gramatica/discursos-juridicos-y-administrativos-sintaxis-densa", label: "Clase: Discursos jurídicos y administrativos: sintaxis densa" },
  ],
};
