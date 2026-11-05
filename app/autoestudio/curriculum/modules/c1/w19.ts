import type { Module } from "../../types";

/**
 * C1 · semana 19 · Autoestudio espejo de G201 (pretérito anterior,
 * reconocimiento) y G202 (futuro de subjuntivo, uso jurídico e histórico
 * receptivo). Repaso autónomo con el archivo de una sociedad recreativa
 * ficticia del barrio de Gràcia, en Barcelona. Audio mediante síntesis; sin
 * acreditación regional.
 */
export const c1w19: Module = {
  id: "c1-19",
  level: "c1",
  week: 19,
  kind: "core",
  title: "Apenas hubo abierto la caja, apareció el reglamento",
  subtitle: "Repaso para leer el pretérito anterior y el futuro de subjuntivo en crónicas, reglamentos y refranes, y para explicarlos en español actual sin traicionar la fuente",
  stop: {
    place: "Barcelona",
    country: "España",
  },
  minutes: 120,
  newObjectives: [
    "c1.gram.g201",
    "c1.gram.g202",
    "c1.voc.w19-archivo-sociedad",
    "c1.pron.w19-acento-re-ra",
    "c1.lis.w19-archiveras",
    "c1.read.w19-papeles-camelia",
    "c1.wri.w19-panel-exposicion",
    "c1.spk.w19-visita-archivo",
    "c1.fun.w19-explicar-fuente",
    "c1.disc.w19-citar-y-glosar",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo reconocer el pretérito anterior y el futuro de subjuntivo en textos históricos, jurídicos y literarios, interpretar lo que expresan y reformularlos en español actual conservando el orden de los hechos y el carácter eventual de la norma.",
    steps: [
      "Repasa en la teoría cómo se forman las dos formas, qué expresan y cómo se distinguen de otras que se les parecen.",
      "Practica el reconocimiento y la reformulación con frases del archivo de una sociedad recreativa de Gràcia.",
      "Escucha a dos archiveras preparar una exposición y lee un artículo sobre los papeles de la sociedad.",
      "Escribe el texto de un panel de la exposición, revísalo con la lista de control y guía en voz alta una visita al archivo.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos formas verbales que casi nadie usa al hablar, pero que encontrarás en novelas, crónicas antiguas, leyes y refranes. El objetivo no es producirlas, sino leerlas bien y explicarlas en español actual. El escenario es el archivo de una sociedad recreativa del barrio de Gràcia, en Barcelona, que prepara una exposición por su ciento cincuenta aniversario.",
    parts: [
      {
        heading: "El pretérito anterior: una acción cerrada justo antes de otra",
        body: [
          "El pretérito anterior se forma con el pretérito indefinido de «haber» y un participio invariable: hube, hubiste, hubo, hubimos, hubisteis, hubieron + leído. Aparece casi siempre detrás de un conector temporal de inmediatez: «apenas», «en cuanto», «tan pronto como», «no bien», «así que», «luego que», «después que» o «cuando». «Apenas hubo terminado el discurso, la orquesta empezó a tocar».",
          "La forma dice dos cosas a la vez: la primera acción está completamente terminada y la segunda llega enseguida. Por eso, al leerlo, no debes interpretar las acciones como simultáneas ni imaginar un intervalo largo entre ellas. Es propio de la prosa literaria, histórica o muy cuidada; en una conversación o en un correo actual sonaría arcaico.",
          "Al modernizarlo, elige qué rasgo quieres conservar. Con el mismo conector y el indefinido mantienes orden y cercanía: «Apenas terminó el discurso, la orquesta empezó a tocar». Con el pluscuamperfecto y «ya» destacas el estado previo: «Cuando ya había terminado el discurso, la orquesta empezó a tocar». Solo añade «enseguida» o «inmediatamente» si el contexto lo justifica.",
        ],
        table: {
          caption: "Leer y modernizar el pretérito anterior",
          head: ["Texto antiguo", "Español actual", "Qué se conserva"],
          rows: [
            ["En cuanto hubo llegado el presidente, se abrió la sesión.", "En cuanto llegó el presidente, se abrió la sesión.", "orden e inmediatez"],
            ["No bien hubieron salido los músicos, se apagaron las luces.", "Nada más salir los músicos, se apagaron las luces.", "inmediatez"],
            ["Cuando hubo firmado el acta, se retiró.", "Cuando ya había firmado el acta, se retiró.", "acción terminada antes"],
          ],
        },
        examples: [
          { es: "Así que hubieron entrado los socios, el secretario leyó la lista.", note: "«Hubieron» concuerda con «los socios»; «entrado» no cambia." },
          { es: "Tan pronto como hubo cesado la lluvia, salió la comparsa.", note: "Primero cesa la lluvia; enseguida sale la comparsa." },
        ],
        mistakes: [
          {
            wrong: "Hubieron tres bailes aquella noche.",
            right: "Hubo tres bailes aquella noche.",
            why: "Aquí «hubo» es el «haber» impersonal, seguido de un sustantivo: no tiene plural. Solo el auxiliar del pretérito anterior concuerda: «hubieron llegado».",
          },
          {
            wrong: "Apenas hubo terminado la cena → Mientras terminaba la cena…",
            right: "Apenas hubo terminado la cena → Apenas terminó la cena…",
            why: "El pretérito anterior presenta acciones sucesivas, no simultáneas.",
          },
          {
            wrong: "Apenas hubiera llegado el tren, bajaron los pasajeros. (como hecho cerrado)",
            right: "Apenas hubo llegado el tren, bajaron los pasajeros.",
            why: "«Hubiera» es subjuntivo y no expresa un hecho cerrado: no confundas «hubo» con «hubiera».",
          },
        ],
        tip: "Para saber si «hubo» es auxiliar o impersonal, mira la palabra siguiente: si es un participio («hubo cerrado»), es pretérito anterior; si es un sustantivo («hubo fiesta»), es el «haber» de existencia.",
      },
      {
        heading: "El futuro de subjuntivo: la situación eventual en reglamentos y leyes",
        body: [
          "El futuro de subjuntivo se forma desde la tercera persona del plural del indefinido: se cambia -ron por -re. Hicieron → hiciere; tuvieron → tuviere; fueron → fuere (de «ser» y de «ir»); pagaron → pagare. El paradigma completo es: yo pagare, tú pagares, él / ella / usted pagare, nosotros pagáremos, vosotros pagareis, ellos / ellas / ustedes pagaren. La forma compuesta es «hubiere + participio».",
          "Expresa una situación eventual, que puede llegar a darse o no, en el futuro o en general. Sobrevive en textos jurídicos y administrativos antiguos o muy conservadores («El que causare daños en el local los abonará»), en refranes («Adonde fueres, haz lo que vieres») y en fórmulas fijas («sea como fuere» = de cualquier manera; «si así no lo hiciereis, la patria os lo demande»).",
          "No la confundas con dos formas parecidas. «Llegare» (llana, sin tilde) es futuro de subjuntivo; «llegará» (aguda, con tilde) es futuro de indicativo y afirma o predice; «llegara» es imperfecto de subjuntivo. Si lees en voz alta, el acento te dice el modo.",
          "Al modernizar, no conviertas lo eventual en un hecho. Después de «si», usa presente de indicativo («Si algún socio no pagare» → «Si algún socio no paga»); después de «quien», «el que», «cuando» o «donde» con valor de futuro, usa presente de subjuntivo («Quien tuviere dudas» → «Quien tenga dudas»). En una exposición, lo habitual es conservar la cita original y explicarla al lado.",
        ],
        table: {
          caption: "Tres formas que se parecen",
          head: ["Forma", "Acento", "Valor", "Español actual"],
          rows: [
            ["llegare", "llana, sin tilde", "situación eventual en un texto antiguo o jurídico", "si llega / cuando llegue"],
            ["llegará", "aguda, con tilde", "futuro de indicativo: afirma o predice", "llegará"],
            ["llegara", "llana", "imperfecto de subjuntivo", "llegara / llegase"],
          ],
        },
        examples: [
          { es: "El socio que faltare a tres juntas seguidas perderá su derecho a voto.", note: "Moderno: «El socio que falte…»." },
          { es: "Sea como fuere, la fiesta se celebrará en agosto.", note: "Fórmula fija: «de cualquier manera»." },
        ],
        mistakes: [
          {
            wrong: "«Quien rompiere un vaso lo pagará» → Quien rompió un vaso lo pagará.",
            right: "«Quien rompiere un vaso lo pagará» → Quien rompa un vaso lo pagará.",
            why: "La norma habla de cualquiera que pueda romperlo en el futuro, no de un hecho pasado.",
          },
          {
            wrong: "«Llegare» es una errata de «llegaré».",
            right: "«Llegare» es futuro de subjuntivo, con otro acento y otro modo.",
            why: "No le falta tilde: es una forma llana distinta.",
          },
        ],
        tip: "No escribas formas en -re en tus textos actuales. Tu tarea con ellas es la de un buen traductor: reconocerlas, entender lo eventual y decirlo en español de hoy.",
      },
    ],
  },
  grammar: {
    intro: "Empieza reconociendo cada forma, sigue distinguiéndola de las que se le parecen y termina modernizando frases del archivo.",
    exercises: [
      {
        id: "c1-19-gramatica-secuencia",
        type: "context",
        prompt: "Lee cada frase de la crónica de la sociedad y decide qué expresa.",
        items: [
          {
            context: "Crónica de 1888: «Apenas hubo concluido el himno, los socios se lanzaron a la pista de baile».",
            q: "¿Qué relación hay entre el himno y el baile en la crónica de 1888?",
            options: ["Bailaron mientras sonaba el himno.", "El himno terminó y el baile empezó justo después.", "Bailaron mucho tiempo después del himno."],
            answer: 1,
            why: "Acción terminada e inmediatez: sucesión cercana.",
          },
          {
            context: "Crónica de 1890: «Hubo aquella noche tal concurrencia que se agotaron los refrescos».",
            q: "¿Qué tipo de «hubo» aparece en la crónica de 1890?",
            options: ["El «haber» impersonal de existencia.", "El auxiliar del pretérito anterior.", "Un subjuntivo con valor hipotético."],
            answer: 0,
            why: "Después va un sustantivo («concurrencia»): existencia.",
          },
          {
            context: "Novela ambientada en Gràcia: «Luego que hubieron cenado, las hermanas subieron a la azotea».",
            q: "¿Cuál es la mejor versión actual de la frase de la novela?",
            options: ["Mientras cenaban, las hermanas subieron a la azotea.", "Las hermanas subieron a la azotea y luego cenaron.", "Después de cenar, las hermanas subieron a la azotea."],
            answer: 2,
            why: "Conserva el orden: primero cenan, después suben.",
          },
          {
            context: "Acta de 1902: «No bien hubo tomado posesión el nuevo presidente, se suprimieron los bailes de máscaras».",
            q: "¿Qué no puede hacer una modernización de la frase del acta de 1902?",
            options: ["Usar «nada más tomar posesión».", "Presentar las dos acciones como simultáneas.", "Usar «en cuanto tomó posesión»."],
            answer: 1,
            why: "Las acciones son sucesivas; presentarlas como simultáneas traiciona la fuente.",
          },
        ],
      },
      {
        id: "c1-19-gramatica-formas",
        type: "classify",
        prompt: "Clasifica cada forma subrayada en los documentos del archivo.",
        categories: ["Futuro de subjuntivo", "Futuro de indicativo", "Imperfecto de subjuntivo"],
        items: [
          { text: "El que no abonare la cuota en enero…", cat: 0, why: "Llana en -re: eventual." },
          { text: "La junta abonará los gastos del baile.", cat: 1, why: "Aguda con tilde: afirma." },
          { text: "Si el socio abonara la cuota a tiempo, no habría recargo.", cat: 2, why: "Llana en -ra: hipótesis." },
          { text: "Cuando hubiere vacante en la junta, se convocará elección.", cat: 0, why: "Forma compuesta «hubiere» + participio." },
          { text: "El secretario leerá el acta en voz alta.", cat: 1, why: "Futuro de indicativo." },
          { text: "Pidieron que el coro cantase en la inauguración.", cat: 2, why: "Imperfecto de subjuntivo en -se." },
        ],
      },
      {
        id: "c1-19-gramatica-modernizar",
        type: "gap",
        prompt: "Escribe la forma actual del verbo para modernizar cada artículo del reglamento. Fíjate en la palabra que introduce la situación eventual.",
        items: [
          { q: "«Si algún socio promoviere escándalo…» → Si algún socio ___ un escándalo… [provocar]", answers: [["provoca"]], why: "Tras «si», presente de indicativo." },
          { q: "«Quien deseare ingresar en la sociedad…» → Quien ___ ingresar en la sociedad… [desear]", answers: [["desee"]], why: "Tras «quien», presente de subjuntivo." },
          { q: "«Cuando faltare el presidente, presidirá el vicepresidente» → Cuando ___ el presidente, presidirá el vicepresidente. [faltar]", answers: [["falte"]], why: "«Cuando» con valor de futuro: presente de subjuntivo." },
          { q: "«Los que hubieren causado daños…» → Los que ___ daños… [causar]", answers: [["hayan causado"]], why: "La forma compuesta pasa a pretérito perfecto de subjuntivo." },
          { q: "«En cuanto hubo sonado la campana…» → En cuanto ___ la campana… [sonar]", answers: [["sonó"]], why: "El pretérito anterior pasa a indefinido con el mismo conector." },
        ],
      },
      {
        id: "c1-19-gramatica-errores",
        type: "error",
        prompt: "Cada interpretación o modernización tiene un error. Corrígela.",
        items: [
          {
            sentence: "Hubieron muchas protestas por la subida de la cuota.",
            answers: ["Hubo muchas protestas por la subida de la cuota."],
            why: "«Haber» impersonal: siempre en singular.",
          },
          {
            sentence: "«El que hurtare objetos de la sociedad será expulsado» significa: el que hurtó objetos fue expulsado.",
            answers: ["«El que hurtare objetos de la sociedad será expulsado» significa: el que robe objetos de la sociedad será expulsado."],
            why: "La norma contempla un caso eventual, no un hecho pasado.",
          },
          {
            sentence: "Apenas hubo leído la carta, la guardó en el cajón → Mientras leía la carta, la guardó en el cajón.",
            answers: ["Apenas hubo leído la carta, la guardó en el cajón → Apenas leyó la carta, la guardó en el cajón."],
            why: "La modernización debe conservar la sucesión, no hacerla simultánea.",
          },
          {
            sentence: "Te escribo para decirte que, si vinieres el sábado, te espero en la puerta.",
            answers: ["Te escribo para decirte que, si vienes el sábado, te espero en la puerta."],
            why: "En un mensaje actual no se usa el futuro de subjuntivo: tras «si», presente de indicativo.",
          },
        ],
      },
      {
        id: "c1-19-gramatica-glosa",
        type: "open",
        prompt: "Explica cada cita para el público de la exposición. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Explica en español actual, para una cartela de museo, el artículo del reglamento de 1891: «El socio que introdujere en el local persona ajena sin permiso de la junta pagará una multa de dos pesetas».",
            model: "Según este artículo, cualquier socio que llevara al local a alguien que no fuera socio sin permiso de la junta tenía que pagar una multa de dos pesetas. «Introdujere» es futuro de subjuntivo: no habla de un caso concreto, sino de cualquiera que pudiera producirse.",
            checklist: ["Conservo el carácter eventual de la norma.", "Explico la forma sin pedir al lector que la use.", "No añado información que la fuente no da."],
          },
          {
            prompt: "Propón dos versiones actuales de esta frase de la crónica y explica qué rasgo destaca cada una: «Así que hubo entrado la reina de las fiestas, la banda atacó el pasodoble».",
            model: "Versión 1: «En cuanto entró la reina de las fiestas, la banda empezó el pasodoble», que conserva la inmediatez. Versión 2: «Cuando la reina de las fiestas ya había entrado, la banda empezó el pasodoble», que destaca que la entrada estaba terminada.",
            checklist: ["Las dos versiones conservan el orden de los hechos.", "Explico la diferencia de matiz entre ellas."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de un archivo histórico y de la vida de una sociedad recreativa barcelonesa del siglo XIX. Algunos términos son antiguos; se indica su equivalente actual.",
    groups: [
      {
        title: "El archivo",
        items: [
          { es: "el legajo", note: "conjunto de papeles atados que tratan de un mismo asunto" },
          { es: "el fondo documental", note: "conjunto de documentos producidos por una misma institución" },
          { es: "catalogar", note: "registrar y describir cada documento de forma ordenada" },
          { es: "digitalizar", note: "convertir un documento en archivo digital" },
          { es: "la cartela", note: "pequeño texto explicativo junto a una pieza expuesta" },
          { es: "el facsímil", note: "reproducción exacta de un documento original" },
        ],
      },
      {
        title: "La sociedad antigua",
        items: [
          { es: "la junta directiva", note: "grupo de socios elegidos para dirigir la sociedad" },
          { es: "el reglamento", note: "conjunto de normas internas de una entidad" },
          { es: "la concurrencia", note: "antiguo o formal: público asistente" },
          { es: "el baile de máscaras", note: "baile en el que los asistentes van disfrazados" },
          { es: "la comparsa", note: "grupo de personas que desfilan disfrazadas en fiestas" },
          { es: "la cuota", note: "cantidad que paga periódicamente cada socio" },
          { es: "el recargo", note: "cantidad añadida por pagar fuera de plazo" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-19-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada palabra con su definición.",
        pairs: [
          { left: "el legajo", right: "conjunto de papeles atados sobre un mismo asunto" },
          { left: "la cartela", right: "texto explicativo junto a una pieza expuesta" },
          { left: "el facsímil", right: "reproducción exacta de un documento" },
          { left: "la concurrencia", right: "público asistente" },
          { left: "el recargo", right: "cantidad añadida por pagar fuera de plazo" },
          { left: "catalogar", right: "registrar y describir documentos de forma ordenada" },
        ],
      },
      {
        id: "c1-19-lexico-uso",
        type: "gap",
        prompt: "Completa la nota del equipo del archivo con la palabra adecuada.",
        bank: ["fondo documental", "digitalizar", "legajos", "facsímil"],
        items: [
          { q: "Este mes vamos a ___ las actas de 1870 a 1900.", answers: [["digitalizar"]] },
          { q: "En la vitrina se expondrá un ___ del reglamento, no el original.", answers: [["facsímil"]] },
          { q: "Han aparecido tres ___ sin catalogar en el desván.", answers: [["legajos"]] },
          { q: "El ___ de la sociedad ocupa ya cuarenta cajas.", answers: [["fondo documental"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El acento que distingue «pagare», «pagará» y «pagara», y la lectura de «hubo» y «hubiera»",
    explanation: [
      "El futuro de subjuntivo es llano: el acento cae en la penúltima sílaba (pa-GA-re, tu-VIE-re). El futuro de indicativo es agudo y lleva tilde (pa-ga-RÁ). El imperfecto de subjuntivo también es llano, pero termina en -ra (pa-GA-ra). Al leer un reglamento en voz alta, marcar bien el acento evita que el oyente entienda una afirmación donde hay una situación eventual.",
      "En el pretérito anterior, «hubo» tiene dos sílabas (HU-bo) y «hubieron» tres (hu-BIE-ron); no las confundas con «hubiera» (hu-BIE-ra), que es subjuntivo. Lee el auxiliar y el participio de un tirón, sin pausa entre ellos: «apenas hubo terminado».",
      "Al leer textos antiguos, mantén un ritmo pausado y marca las pausas de los incisos, que suelen ser muchos. El audio es sintético: sirve para percibir el contraste, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Mismo verbo, tres acentos",
      head: ["Forma", "Sílabas", "Valor"],
      rows: [
        ["faltare", "fal-TA-re", "futuro de subjuntivo"],
        ["faltará", "fal-ta-RÁ", "futuro de indicativo"],
        ["faltara", "fal-TA-ra", "imperfecto de subjuntivo"],
      ],
    },
    perceive: {
      id: "c1-19-percepcion",
      type: "listen",
      prompt: "Escucha cada frase leída del archivo y decide qué forma oyes.",
      items: [
        {
          q: "¿Qué forma de «pagar» oyes en el artículo sobre la cuota?",
          options: ["pagará, futuro de indicativo", "pagare, futuro de subjuntivo", "pagara, imperfecto de subjuntivo"],
          answer: 1,
          why: "Llana y terminada en -re: «pagare».",
          audio: "El socio que no pagare la cuota en el plazo fijado sufrirá un recargo.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué forma de «pagar» oyes en la frase sobre la junta?",
          options: ["pagare, futuro de subjuntivo", "pagara, imperfecto de subjuntivo", "pagará, futuro de indicativo"],
          answer: 2,
          why: "Aguda: «pagará» afirma lo que hará la junta.",
          audio: "La junta pagará los gastos de la orquesta.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué forma de «haber» oyes en la crónica del baile?",
          options: ["hubo, pretérito anterior", "hubiera, imperfecto de subjuntivo"],
          answer: 0,
          why: "«Hubo cesado»: dos sílabas y participio detrás.",
          audio: "Apenas hubo cesado la música, se encendieron las lámparas del salón.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué forma de «faltar» oyes en la frase sobre el secretario?",
          options: ["faltare, futuro de subjuntivo", "faltara, imperfecto de subjuntivo"],
          answer: 1,
          why: "Termina en -ra: «si faltara».",
          audio: "Si el secretario faltara a la junta, el vocal más joven tomaría las notas.",
          voice: "es-ES-m",
        },
      ],
    },
    produce: [
      { text: "Quien tuviere dudas sobre el reglamento, consulte al secretario.", tip: "Acento en «tuVIEre», sin cargarlo al final.", voice: "es-ES-f" },
      { text: "Apenas hubieron entrado los músicos, comenzó el baile.", tip: "Lee «hubieron entrado» de un tirón.", voice: "es-ES-m" },
      { text: "Adonde fueres, haz lo que vieres.", tip: "Dos formas llanas: FUE-res, VIE-res.", voice: "es-ES-f" },
      { text: "Sea como fuere, la fiesta mayor se celebrará en agosto.", tip: "Contrasta la llana «fuere» con la aguda «celebrará».", voice: "es-ES-m" },
    ],
    spelling: "El futuro de subjuntivo nunca lleva tilde en la terminación -re (llegare, tuviere), salvo en la forma esdrújula de nosotros: «llegáremos», «tuviéremos». Si ves «llegare» en un texto antiguo, no es una errata de «llegaré».",
  },
  listening: {
    title: "Preparando la vitrina",
    context: "En el archivo de la sociedad recreativa La Camelia, en el barrio de Gràcia, Montse, archivera, y Lucía, una becaria de Historia, preparan las cartelas de la exposición del ciento cincuenta aniversario. Escucha primero sin transcripción. La sociedad, los documentos y las personas son ficticios; las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "m", name: "Montse", voice: "es-ES-f", role: "Archivera de la sociedad" },
      { id: "l", name: "Lucía", voice: "es-ES-f", role: "Becaria de Historia" },
    ],
    script: [
      { speaker: "l", text: "Montse, he empezado las cartelas de la vitrina dos, pero el reglamento de 1891 tiene erratas por todas partes. Mira el artículo doce: el socio que faltare a tres juntas seguidas. Le falta la tilde a faltaré, ¿no?" },
      { speaker: "m", text: "No, no, cuidado. No es una errata. Es futuro de subjuntivo, que en los reglamentos de la época era lo normal. Faltare, llano, sin tilde. Si fuera futuro de indicativo, diría faltará, con el acento al final, y significaría otra cosa: que va a faltar seguro." },
      { speaker: "l", text: "Vale. Entonces en la cartela pongo: el socio que faltó a tres juntas…" },
      { speaker: "m", text: "Tampoco. Faltó es un hecho pasado, y el artículo no habla de nadie en concreto. Habla de cualquier socio que pueda faltar. Hoy diríamos: el socio que falte a tres juntas seguidas perderá el voto. Mi consejo es que dejes la frase original entre comillas, que es preciosa, y al lado pongas la versión actual." },
      { speaker: "l", text: "Me gusta. Ahora la crónica del baile de 1888. Aquí dice: apenas hubo concluido el himno, la concurrencia se lanzó a bailar. Y más abajo: hubieron de suspenderse los fuegos por la lluvia. Hubieron, en plural… ¿Eso no era incorrecto?" },
      { speaker: "m", text: "Depende. Haber impersonal, el de hubo fiesta, nunca va en plural. Pero en hubo concluido es un auxiliar, el del pretérito anterior, y ahí sí concuerda con el sujeto. Y hubieron de suspenderse es otra cosa: haber de, con el sentido de tener que. Los fuegos tuvieron que suspenderse." },
      { speaker: "l", text: "Qué lío de hubos. ¿Y cómo explico apenas hubo concluido? ¿Mientras terminaba el himno?" },
      { speaker: "m", text: "No, eso lo haría simultáneo, y la crónica dice que primero acabó el himno y enseguida empezó el baile. Pon: en cuanto terminó el himno, el público se lanzó a bailar. Así conservas el orden y la prisa, que es lo que transmite el cronista." },
      { speaker: "l", text: "Perfecto. Y para el panel de la entrada había pensado usar el refrán de la puerta del salón: adonde fueres, haz lo que vieres. ¿Lo dejo tal cual?" },
      { speaker: "m", text: "Tal cual, y debajo una línea: donde vayas, haz lo que veas hacer. La gente lo reconoce, sonríe, y de paso aprende que aquella forma tan rara sigue viva en los refranes." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué preparan y qué criterio adoptan?",
        exercise: {
          id: "c1-19-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué preparan Montse y Lucía en el archivo de La Camelia?",
              options: ["El catálogo completo del fondo documental.", "Las cartelas que explicarán los documentos de una exposición.", "Un nuevo reglamento para la sociedad."],
              answer: 1,
              why: "Hablan de las cartelas de la vitrina y del panel de la entrada.",
            },
            {
              q: "¿Qué criterio general propone Montse para las citas antiguas?",
              options: ["Corregir las formas antiguas en el original.", "Eliminar las citas difíciles.", "Conservar la cita original y explicarla al lado en español actual."],
              answer: 2,
              why: "Lo dice con el reglamento y con el refrán.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-19-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada explicación.",
          items: [
            {
              q: "¿Por qué Montse rechaza «el socio que faltó a tres juntas»?",
              options: ["Porque convierte en un hecho pasado una norma sobre cualquier socio.", "Porque «faltó» no lleva tilde.", "Porque el artículo habla del presidente."],
              answer: 0,
              why: "El artículo habla de cualquier socio que pueda faltar.",
            },
            {
              q: "¿Qué significa «hubieron de suspenderse los fuegos»?",
              options: ["Que hubo muchos fuegos.", "Que los fuegos tuvieron que suspenderse.", "Que los fuegos se suspendieron mientras llovía."],
              answer: 1,
              why: "«Haber de» = tener que.",
            },
            {
              q: "¿Cómo propone Montse explicar «apenas hubo concluido el himno»?",
              options: ["Mientras terminaba el himno.", "Mucho después del himno.", "En cuanto terminó el himno."],
              answer: 2,
              why: "Conserva el orden y la inmediatez.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo cada forma antigua pasa a la cartela. Responde y luego consulta la transcripción.",
        exercise: {
          id: "c1-19-escucha-notice",
          type: "match",
          prompt: "Relaciona cada forma del archivo con su explicación actual.",
          pairs: [
            { left: "el socio que faltare a tres juntas", right: "el socio que falte a tres juntas" },
            { left: "apenas hubo concluido el himno", right: "en cuanto terminó el himno" },
            { left: "hubieron de suspenderse los fuegos", right: "los fuegos tuvieron que suspenderse" },
            { left: "adonde fueres, haz lo que vieres", right: "donde vayas, haz lo que veas hacer" },
          ],
          why: "Cada versión actual conserva lo esencial: lo eventual, la sucesión o la obligación.",
        },
      },
    ],
  },
  reading: {
    title: "Lo que guardaba el armario de La Camelia",
    genre: "Artículo de una revista de barrio",
    frame: "Artículo de Pau Serra para la revista de Gràcia «Plaça del Sol». La sociedad, los documentos citados y las personas son ficticios.",
    text: [
      "Durante casi un siglo, nadie abrió el armario de roble que hay al fondo del salón de baile de La Camelia, la sociedad recreativa más antigua de la calle Verdi. Se decía que guardaba manteles viejos. Cuando el pasado invierno la junta decidió restaurarlo para el ciento cincuenta aniversario, la archivera Montse Vidal encontró dentro once legajos atados con cinta roja: actas, crónicas, cartas y, sobre todo, el reglamento original de 1891, escrito a mano con una caligrafía que hoy parecería de dibujo.",
      "Leer esos papeles es asomarse a un barrio que ya no existe y, también, a un español que ya no se escribe. El reglamento, por ejemplo, está lleno de formas como «faltare», «introdujere» o «hubiere causado». Son futuros de subjuntivo, una forma que en el siglo XIX todavía era habitual en leyes y normas y que hoy solo sobrevive en algunos textos jurídicos y en refranes. El artículo doce dice: «El socio que faltare a tres juntas seguidas perderá su derecho a voto». No habla de un socio concreto que faltó, sino de cualquiera que, llegado el caso, pudiera faltar.",
      "Algunos artículos revelan una sociedad más estricta de lo que imaginamos. «Quien promoviere disputas en el salón será amonestado por la junta y, si reincidiere, expulsado». Otros sorprenden por su modernidad: «Las señoras que desearen pertenecer a la sociedad gozarán de los mismos derechos que los socios», una norma que no era nada común en 1891 y que, según las actas, provocó más de una junta tormentosa.",
      "Las crónicas de los bailes ofrecen otra sorpresa gramatical. El cronista de 1888, un tal Ramon Puig, escribía con una solemnidad que hoy nos hace sonreír: «Apenas hubo concluido el himno de la sociedad, la concurrencia se lanzó a la pista con un entusiasmo que no decayó hasta el alba». Ese «hubo concluido» es un pretérito anterior, un tiempo que indica que una acción terminó justo antes de otra. En otra crónica se lee: «No bien hubieron entrado las comparsas, estalló una ovación». Nadie habla así hoy, pero la imagen es clarísima: primero las comparsas cruzan la puerta y, al instante, el salón aplaude.",
      "El equipo del archivo ha decidido no «corregir» nada. En la exposición, que abrirá en septiembre, cada documento irá acompañado de una cartela con la cita original y su explicación en español actual. «Si cambiamos “faltare” por “falte” en el facsímil, perdemos la voz de la época», explica Vidal. «Pero si no lo explicamos, el visitante cree que es una errata». La becaria Lucía Mas, que ha redactado buena parte de las cartelas, añade que el mayor riesgo es convertir una norma eventual en un hecho: «“El que rompiere un vaso” no significa que alguien lo rompiera; significa cualquiera que lo rompa».",
      "Sobre la puerta del salón, pintado en letras doradas, sigue el lema que los fundadores eligieron en 1874: «Adonde fueres, haz lo que vieres». Durante décadas, los socios lo leyeron como una invitación a adaptarse a las costumbres del barrio. Sea como fuere, la frase resume bien lo que ha sido La Camelia: un lugar donde varias generaciones aprendieron a bailar, a discutir en las juntas y, ahora, a leer su propia historia con otros ojos.",
    ],
    glossary: [
      { es: "amonestar", note: "advertir formalmente a alguien por una falta" },
      { es: "reincidir", note: "volver a cometer la misma falta" },
      { es: "el alba", note: "primera luz del día" },
    ],
    tasks: [
      {
        id: "c1-19-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el artículo.",
        items: [
          {
            q: "¿Qué se encontró en el armario del salón de La Camelia?",
            options: ["Manteles antiguos y vajilla.", "Once legajos con documentos de la sociedad, entre ellos el reglamento de 1891.", "Los trajes de las comparsas."],
            answer: 1,
            why: "Lo dice el primer párrafo.",
          },
          {
            q: "¿Qué artículo del reglamento sorprende por su modernidad?",
            options: ["El que da a las señoras los mismos derechos que a los socios.", "El que castiga a quien promueva disputas.", "El que quita el voto a quien falte a tres juntas."],
            answer: 0,
            why: "Según las actas, provocó juntas tormentosas en 1891.",
          },
          {
            q: "¿Por qué el archivo no corrige las formas antiguas en los facsímiles?",
            options: ["Porque no hay presupuesto para hacerlo.", "Porque los visitantes las entienden sin ayuda.", "Porque se perdería la voz de la época; por eso las explica en cartelas."],
            answer: 2,
            why: "Lo explica Montse Vidal en el quinto párrafo.",
          },
        ],
      },
      {
        id: "c1-19-lectura-clasificar",
        type: "classify",
        prompt: "Clasifica cada cita del artículo según la forma que contiene.",
        categories: ["Pretérito anterior", "Futuro de subjuntivo"],
        items: [
          { text: "Apenas hubo concluido el himno de la sociedad", cat: 0, why: "«Hubo» + participio tras «apenas»." },
          { text: "Quien promoviere disputas en el salón", cat: 1, why: "Forma llana en -re." },
          { text: "No bien hubieron entrado las comparsas", cat: 0, why: "«Hubieron» + participio tras «no bien»." },
          { text: "Las señoras que desearen pertenecer a la sociedad", cat: 1, why: "«Desearen»: tercera persona del plural." },
          { text: "si reincidiere, expulsado", cat: 1, why: "Futuro de subjuntivo tras «si»." },
        ],
      },
      {
        id: "c1-19-lectura-evaluacion",
        type: "open",
        prompt: "Valora la decisión del archivo con argumentos propios.",
        items: [
          {
            prompt: "El archivo ha decidido conservar las formas antiguas y explicarlas al lado. En 70–90 palabras, di si estás de acuerdo y qué riesgo tendría la decisión contraria.",
            model: "Estoy de acuerdo, porque un archivo no debe reescribir la historia, sino ayudar a leerla. Si se modernizaran los facsímiles, el visitante vería un texto falso y perdería el contacto con la lengua de 1891. El riesgo contrario, dejar la forma sin explicación, también existe: muchos pensarían que «faltare» es un error. La solución de las cartelas equilibra fidelidad y comprensión, siempre que la explicación conserve el carácter eventual de cada norma.",
            checklist: ["Doy una opinión clara.", "Explico el riesgo de la decisión contraria.", "Menciono la necesidad de conservar el sentido eventual."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el autor cita una forma antigua y la explica justo después.",
      items: [
        { quote: "No habla de un socio concreto que faltó, sino de cualquiera que, llegado el caso, pudiera faltar.", note: "Glosa del futuro de subjuntivo: subraya el carácter eventual." },
        { quote: "Ese «hubo concluido» es un pretérito anterior, un tiempo que indica que una acción terminó justo antes de otra.", note: "El autor nombra la forma y explica su valor de inmediatez." },
        { quote: "primero las comparsas cruzan la puerta y, al instante, el salón aplaude", note: "Paráfrasis actual que conserva el orden y la rapidez." },
        { quote: "Sea como fuere, la frase resume bien lo que ha sido La Camelia", note: "El propio autor usa una fórmula fija con futuro de subjuntivo." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección de la mejor modernización, análisis y escritura breve sobre el archivo.",
    exercises: [
      {
        id: "c1-19-orden",
        type: "order",
        prompt: "Ordena las palabras para reconstruir frases de los documentos antiguos.",
        items: [
          { words: ["Tan", "pronto", "como", "hubo", "firmado", "el", "acta,", "se", "levantó", "la", "sesión."], why: "Conector + «hubo» + participio, y la acción siguiente." },
          { words: ["El", "socio", "que", "no", "abonare", "la", "cuota", "será", "dado", "de", "baja."], why: "Relativo + futuro de subjuntivo en una norma." },
          { words: ["Sea", "como", "fuere,", "el", "baile", "comenzará", "a", "las", "nueve."], why: "Fórmula fija «sea como fuere»." },
        ],
      },
      {
        id: "c1-19-version",
        type: "context",
        prompt: "Elige la versión actual más fiel a cada fragmento.",
        items: [
          {
            context: "Acta de 1895: «Luego que hubo leído el tesorero el estado de cuentas, se aprobó por unanimidad».",
            q: "¿Qué versión conserva el sentido del acta de 1895?",
            options: ["Mientras el tesorero leía las cuentas, se aprobaron por unanimidad.", "Después de que el tesorero leyera las cuentas, se aprobaron por unanimidad.", "El tesorero leerá las cuentas y se aprobarán por unanimidad."],
            answer: 1,
            why: "Sucesión en pasado; las otras cambian la simultaneidad o el tiempo.",
          },
          {
            context: "Reglamento de 1891: «Cuando hubiere baile de máscaras, nadie podrá entrar con el rostro cubierto sin dar su nombre en la puerta».",
            q: "¿Qué versión conserva el sentido del artículo sobre las máscaras?",
            options: ["Cuando haya baile de máscaras, nadie podrá entrar con la cara tapada sin decir su nombre en la puerta.", "Cuando hubo baile de máscaras, nadie entró con la cara tapada.", "Habrá baile de máscaras y nadie dará su nombre."],
            answer: 0,
            why: "«Hubiere» impersonal eventual → «haya».",
          },
          {
            context: "Carta de un socio de 1903: «Si la junta no atendiere mi reclamación, me veré obligado a darme de baja».",
            q: "¿Qué versión conserva el sentido de la carta de 1903?",
            options: ["La junta no atendió mi reclamación y me di de baja.", "Si la junta no atendiera mi reclamación, me daría de baja.", "Si la junta no atiende mi reclamación, me veré obligado a darme de baja."],
            answer: 2,
            why: "Tras «si», presente de indicativo; se mantiene la amenaza eventual.",
          },
        ],
      },
      {
        id: "c1-19-hubo",
        type: "classify",
        prompt: "Clasifica cada «hubo / hubieron» de las crónicas según su función.",
        categories: ["Auxiliar del pretérito anterior", "«Haber» impersonal de existencia", "«Haber de» = tener que"],
        items: [
          { text: "Apenas hubo salido el sol, partió la excursión.", cat: 0, why: "Va seguido de participio." },
          { text: "Hubo baile hasta las cuatro de la madrugada.", cat: 1, why: "Va seguido de sustantivo." },
          { text: "Hubieron de esperar a que escampara.", cat: 2, why: "«Haber de» + infinitivo: tuvieron que esperar." },
          { text: "En cuanto hubieron cenado, empezaron los discursos.", cat: 0, why: "Auxiliar en plural + participio." },
          { text: "Hubo quejas por el precio de la entrada.", cat: 1, why: "Existencia: siempre singular." },
        ],
      },
      {
        id: "c1-19-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 40–60 palabras una cartela para este artículo del reglamento: «El socio que hubiere sido expulsado no podrá solicitar nuevo ingreso hasta pasados cinco años».",
            model: "Artículo 18 del reglamento de 1891. Según esta norma, cualquier socio que hubiera sido expulsado debía esperar cinco años antes de pedir de nuevo la entrada en la sociedad. «Hubiere sido» es la forma compuesta del futuro de subjuntivo; hoy diríamos «el socio que haya sido expulsado».",
            checklist: ["Identifico el documento.", "Explico la norma conservando su carácter eventual.", "Doy la equivalencia actual de la forma."],
          },
          {
            prompt: "Reescribe en 40–60 palabras, en un español actual y natural, esta frase de crónica para el boletín digital de la sociedad: «No bien hubo terminado la orquesta el último vals, los socios más jóvenes pidieron otro, y hubieron de complacerlos».",
            model: "En cuanto la orquesta terminó el último vals, los socios más jóvenes pidieron otro, y los músicos tuvieron que tocarlo. Fue, según el cronista, el final más animado de aquel invierno.",
            checklist: ["Conservo la sucesión inmediata.", "Explico «hubieron de» como obligación.", "No uso formas antiguas en mi versión."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe el texto de un panel de la exposición (230–300 palabras) que presente uno de los documentos del archivo de La Camelia (el reglamento, una crónica o una carta), cite al menos dos frases originales con pretérito anterior o futuro de subjuntivo y las explique en español actual.",
    context: "El panel lo leerán vecinos, escolares y turistas que no son especialistas. Debe ser riguroso pero claro: cita las formas originales entre comillas y explícalas con naturalidad, sin pedir al lector que las aprenda. Puedes usar los documentos del artículo o inventar otros coherentes con la época.",
    steps: [
      "Elige el documento y anota los datos básicos: fecha, autor, para qué servía.",
      "Selecciona dos o tres citas con las formas antiguas y prepara su versión actual.",
      "Redacta el panel en cuatro párrafos: presentación del documento, primera cita y explicación, segunda cita y explicación, y valor del documento hoy.",
      "Revisa que cada versión actual conserve el orden de los hechos o el carácter eventual de la norma, y corrige cualquier forma antigua que se haya colado fuera de las citas.",
    ],
    useLanguage: [
      "El documento, fechado en…, recoge…",
      "El artículo… establece que «…».",
      "Es decir, hoy diríamos…",
      "La forma «…» indica que…",
      "No se refiere a un caso concreto, sino a…",
      "El cronista cuenta que, en cuanto…",
    ],
    model: [
      "Este cuaderno de tapas negras contiene el reglamento que La Camelia aprobó en la junta general del 3 de marzo de 1891. Lo redactó el secretario Josep Ferrer con una caligrafía cuidadísima y estuvo vigente, con pequeños cambios, hasta 1936. Sus cuarenta artículos regulaban las cuotas, los bailes, las elecciones y la conducta de los socios en el salón.",
      "El artículo doce establece: «El socio que faltare a tres juntas seguidas perderá su derecho a voto». La forma «faltare» no es una errata, sino un futuro de subjuntivo, habitual entonces en las normas. No se refiere a un socio concreto, sino a cualquiera que pudiera faltar. Es decir, hoy diríamos: «El socio que falte a tres juntas seguidas perderá su derecho a voto».",
      "Más adelante, el artículo veinte dispone que «las señoras que desearen pertenecer a la sociedad gozarán de los mismos derechos que los socios». Esta norma, poco común en su época, abrió la sociedad a las mujeres del barrio. Según las actas, en cuanto se hubo aprobado, se inscribieron diecisiete vecinas, aunque algunos socios protestaron durante meses.",
      "El reglamento nos permite conocer una sociedad estricta y, a la vez, sorprendentemente abierta. También nos recuerda que la lengua cambia: formas que entonces eran normales hoy solo aparecen en leyes antiguas o en refranes como el que preside la puerta del salón, «Adonde fueres, haz lo que vieres», que podríamos traducir como «donde vayas, haz lo que veas hacer».",
    ],
    checklist: [
      "Cito las formas antiguas entre comillas y las explico.",
      "Cada explicación conserva lo eventual o la sucesión de la fuente.",
      "Fuera de las citas, uso solo formas actuales.",
      "El panel se entiende sin conocimientos de gramática.",
      "Los datos del documento (fecha, autor, función) son claros.",
    ],
    words: [230, 300],
  },
  speaking: {
    intro: "Prepárate con palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Visita guiada al archivo",
        prompt: "Guía durante cuatro minutos a un grupo de vecinos por la vitrina de la exposición. Presenta dos documentos, lee en voz alta una frase de cada uno con su forma antigua (marcando bien el acento) y explícala en español actual. Termina con el lema de la puerta.",
        prep: [
          "Elige dos documentos y una cita de cada uno.",
          "Prepara la versión actual de cada cita.",
          "Ensaya el acento de las formas en -re frente a las formas en -rá.",
        ],
        seconds: 240,
        model: "Buenas tardes y bienvenidos al archivo de La Camelia. En esta vitrina tienen el reglamento de 1891. Fíjense en el artículo doce: «El socio que faltare a tres juntas seguidas perderá su derecho a voto». «Faltare», sin tilde, no es un error: es una forma que se usaba en las normas para hablar de cualquier socio que pudiera faltar. Hoy diríamos «que falte»…",
        selfCheck: [
          "Leo las formas antiguas con el acento llano.",
          "Cada explicación conserva el sentido eventual o la sucesión.",
          "Hablo para no especialistas, sin tecnicismos innecesarios.",
        ],
      },
      {
        title: "Discutir una cartela",
        prompt: "Una compañera quiere modernizar las citas directamente en los facsímiles «para que se entiendan». Tú no estás de acuerdo. Pregúntale qué le preocupa, explica tu postura y negocia una solución.",
        prep: [
          "Ten dos argumentos a favor de conservar el original.",
          "Prepara una propuesta intermedia.",
        ],
        seconds: 150,
        model: "Entiendo que te preocupe que la gente no lo entienda, pero si cambiamos el original, ¿qué estamos exponiendo? Te propongo dejar la cita tal cual y poner la versión actual justo debajo, en otro color…",
        selfCheck: [
          "Pregunto antes de rebatir.",
          "Propongo una solución concreta.",
        ],
      },
      {
        title: "Leer el lema",
        prompt: "Lee en voz alta tres refranes o fórmulas con futuro de subjuntivo y explica cada uno en una frase.",
        prep: ["Prepara «Adonde fueres…», «Sea como fuere» y otro que conozcas."],
        seconds: 60,
        selfCheck: ["Marco el acento llano.", "Mis explicaciones usan presente de subjuntivo."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu panel y una frase real con pretérito anterior o futuro de subjuntivo que hayas encontrado en una novela, una ley o un refrán.",
    cards: [
      {
        move: "Explica",
        task: "Explica a tu profesor qué significa tu frase real y propón su versión actual.",
        phrases: ["Aquí «…» indica que…", "Hoy diríamos…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta si tu modernización conserva el sentido o si exagera la inmediatez.",
        phrases: ["¿Hace falta añadir «enseguida»?", "¿Se pierde algún matiz?"],
      },
      {
        move: "Lee",
        task: "Lee en voz alta tres formas («pagare», «pagará», «pagara») y pide a tu profesor que identifique cuál dijiste.",
        phrases: ["¿Se ha notado el acento?"],
      },
      {
        move: "Compara",
        task: "Compara con tu profesor dos versiones de una frase con «hubo» + participio: una con indefinido y otra con pluscuamperfecto.",
        phrases: ["La primera destaca…", "La segunda, en cambio…"],
      },
    ],
    bring: "Tu panel revisado, la frase real con su explicación y, si quieres, la grabación de la visita guiada.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En «Así que hubo cerrado la puerta, oyó el disparo», ¿qué relación hay entre las acciones?",
        options: ["Oyó el disparo mientras cerraba la puerta.", "Cerró la puerta y enseguida oyó el disparo.", "Oyó el disparo mucho después de cerrar la puerta."],
        answer: 1,
        why: "Pretérito anterior: acción terminada e inmediatez.",
      },
      {
        type: "choice",
        q: "¿Qué forma es futuro de subjuntivo en un artículo sobre los socios que se mudan de barrio?",
        options: ["El socio que se mudare de barrio conservará sus derechos.", "El socio que se mudará de barrio conservará sus derechos.", "Si el socio se mudara de barrio, conservaría sus derechos."],
        answer: 0,
        why: "«Mudare», llana en -re.",
      },
      {
        type: "listen",
        q: "Escucha el artículo del reglamento. ¿Cómo se diría hoy?",
        options: ["Quien rompió una silla la pagó.", "Quien rompa una silla la pagará.", "Quien rompería una silla la pagaría."],
        answer: 1,
        why: "«Rompiere» → presente de subjuntivo tras «quien».",
        audio: "Quien rompiere una silla del salón la pagará de su bolsillo.",
        voice: "es-ES-m",
      },
      {
        type: "gap",
        q: "«Si el tesorero no presentare las cuentas…» → Si el tesorero no ___ las cuentas… [presentar]",
        answers: [["presenta"]],
        hint: "Tras «si», el futuro de subjuntivo se moderniza con presente de indicativo.",
        why: "«Si… no presenta».",
      },
      {
        type: "gap",
        q: "«Apenas hubieron llegado los invitados…» → Apenas ___ los invitados… [llegar]",
        answers: [["llegaron"]],
        hint: "El pretérito anterior se moderniza con el indefinido manteniendo el mismo conector.",
        why: "Indefinido en tercera persona del plural.",
      },
      {
        type: "error",
        sentence: "Aquella noche hubieron dos orquestas en el salón de La Camelia.",
        answers: ["Aquella noche hubo dos orquestas en el salón de La Camelia."],
        why: "«Haber» impersonal: siempre singular.",
      },
      {
        type: "error",
        sentence: "«Cuando llegare el invierno, se cerrará la terraza» significa que el invierno llegó y se cerró la terraza.",
        answers: ["«Cuando llegare el invierno, se cerrará la terraza» significa que, cuando llegue el invierno, se cerrará la terraza."],
        why: "La norma contempla un momento futuro: «cuando llegue».",
      },
      {
        type: "order",
        words: ["No", "bien", "hubo", "acabado", "el", "discurso,", "estallaron", "los", "aplausos."],
        why: "Conector de inmediatez + pretérito anterior.",
      },
      {
        type: "choice",
        q: "¿Qué significa la fórmula «sea como fuere» al comienzo de una frase?",
        options: ["Si fuera de otra manera.", "Como fue en el pasado.", "De cualquier manera, independientemente de lo que ocurra."],
        answer: 2,
        why: "Fórmula fija con futuro de subjuntivo: «sea como sea».",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras a un compañero que ha visto «llegare» en un reglamento y quiere corregirlo a «llegaré», por qué no es una errata y cómo debería explicarlo en una cartela.",
        model: "No es una errata: «llegare» es futuro de subjuntivo, una forma llana que se usaba en normas antiguas para casos eventuales. «Llegaré», con tilde, es futuro de indicativo y afirmaría que algo va a ocurrir con seguridad, en primera persona. En la cartela conviene dejar la cita original entre comillas y añadir la versión actual: «cuando llegue» o «si llega», según el conector. Así se respeta el documento y el lector lo entiende.",
        checklist: ["Explico la diferencia de forma y de valor.", "Propongo la versión actual adecuada.", "Recomiendo conservar el original."],
      },
    ],
  },
  complete: {
    canNow: [
      "Reconozco el pretérito anterior, distingo el «hubo» auxiliar del impersonal y del «haber de», y lo modernizo conservando la sucesión.",
      "Reconozco el futuro de subjuntivo y lo distingo del futuro de indicativo y del imperfecto de subjuntivo por la forma y el acento.",
      "Modernizo normas y refranes sin convertir lo eventual en un hecho.",
      "Cito formas antiguas y las explico con claridad para un público no especialista.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Tres formas que se parecen» y escribe el valor de cada forma con un ejemplo nuevo.",
      "Dentro de una semana, busca un artículo de un código o de un reglamento antiguo en internet y explica una forma en -re.",
      "En la próxima clase, lee tu panel en voz alta y pide a tu profesor que compruebe si tus explicaciones conservan el sentido de la fuente.",
    ],
  },
  related: [
    { path: "/sistema-verbal/preterito-anterior-indicativo", label: "Clase: Pretérito anterior: reconocimiento en textos literarios" },
    { path: "/sistema-verbal/futuro-simple-subjuntivo", label: "Clase: Futuro de subjuntivo: uso jurídico e histórico receptivo" },
  ],
};
