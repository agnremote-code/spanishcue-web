import type { Module } from "../../types";

/**
 * B1 · semana 1 · Autoestudio espejo de G086 (revisión de pasados: escena,
 * hechos y balance) y G087 (pluscuamperfecto). Repaso autónomo con una
 * mudanza a un piso compartido de Zaragoza. Audio mediante síntesis.
 */
export const b1w01: Module = {
  id: "b1-01",
  level: "b1",
  week: 1,
  kind: "core",
  title: "Cuento cómo fue y qué había pasado antes",
  subtitle: "Repaso de los tres pasados del relato (escena, hechos y balance) y del pluscuamperfecto para lo que ocurrió antes de otro pasado.",
  stop: { place: "Zaragoza", country: "España" },
  minutes: 95,
  newObjectives: [
    "b1.gram.g086",
    "b1.gram.g087",
    "b1.voc.w01-mudanza-piso",
    "b1.pron.w01-acento-pasado",
    "b1.lis.w01-dia-mudanza",
    "b1.read.w01-blog-primer-mes",
    "b1.wri.w01-correo-llegada",
    "b1.spk.w01-dia-al-reves",
    "b1.fun.w01-explicar-lo-ocurrido",
    "b1.disc.w01-orden-relato",
  ],
  reviewObjectives: ["a2.gram.g084","a2.gram.g085","a2.voc.w20-radio-experiencia","a2.pron.w20-tilde-final-pasado","a2.lis.w20-entrevista-radio","a2.read.w20-correo-primer-mes","a2.wri.w20-relato-y-mensaje","a2.spk.w20-contar-experiencia","a2.fun.w20-presentar-experiencia","a2.disc.w20-relato-mensaje","a2.rev.w20-semanas-16-20"],
  prerequisites: ["a2-20"],
  goal: {
    canDo: "Al final de esta semana puedes contar una experiencia pasada con escena, hechos y balance, y explicar con el pluscuamperfecto qué había pasado antes, por qué ocurrió algo o qué descubriste.",
    steps: [
      "Repasa qué trabajo hace cada pasado: imperfecto para la escena, indefinido para los hechos y perfecto compuesto para el balance de hoy.",
      "Repasa la forma del pluscuamperfecto y sus tres usos: antes de otro momento, causa anterior y descubrimiento.",
      "Escucha a Dani contar a Lucía cómo fue su mudanza a Zaragoza y lee el blog de Irene sobre su primer mes.",
      "Escribe un correo sobre una llegada o una mudanza y revísalo con la lista de control.",
      "Graba un relato de dos minutos y prepara las preguntas que vas a llevar a clase.",
    ],
  },
  theory: {
    intro: "En tus dos últimas clases contaste experiencias con varios pasados y añadiste el pluscuamperfecto. Aquí lo repasas solo, con otra historia: una mudanza a un piso compartido en Zaragoza. Lee cada parte, mira los ejemplos y fíjate sobre todo en la pregunta que responde cada tiempo.",
    parts: [
      {
        heading: "Tres pasados, tres trabajos distintos",
        body: [
          "Cuando cuentas algo, cada tiempo responde a una pregunta diferente. El **imperfecto** responde a «¿cómo era todo?» y a «¿qué hacías normalmente?»: describe el lugar, el tiempo, las personas y las costumbres. El **indefinido** responde a «¿qué pasó?»: presenta hechos terminados, uno detrás de otro, que hacen avanzar la historia.",
          "El **perfecto compuesto** responde a «¿qué balance haces hoy?». Mira el pasado desde el presente, con marcos que llegan hasta ahora: _hoy, esta semana, este año, ya, todavía no, nunca_. Si el marco está cerrado (_ayer, el lunes, en 2022, el mes pasado_), en la mayor parte de España y en casi toda América se usa el indefinido.",
          "Un truco para revisar tu texto: tapa los verbos en imperfecto. Si la historia todavía se entiende, pero queda sin decorado, has elegido bien. Si desaparecen los hechos importantes, alguno de esos verbos debía estar en indefinido.",
        ],
        table: {
          caption: "¿Qué pregunta responde cada tiempo?",
          head: ["Tiempo", "Pregunta", "Marcadores frecuentes", "Ejemplo"],
          rows: [
            ["imperfecto", "¿Cómo era? ¿Qué hacías normalmente?", "siempre, todos los días, de pequeño, mientras", "El piso tenía un balcón pequeño y hacía frío."],
            ["indefinido", "¿Qué pasó?", "ayer, el sábado, en 2023, de repente, luego", "El sábado alquilamos una furgoneta y cargamos las cajas."],
            ["perfecto compuesto", "¿Qué balance haces hoy?", "hoy, esta semana, ya, todavía no, nunca", "Esta semana he colgado por fin los cuadros."],
          ],
        },
        examples: [
          { es: "Cuando vivía en Huesca, compartía piso con dos enfermeras.", note: "Costumbre en el pasado: imperfecto." },
          { es: "En marzo encontré un anuncio y llamé al dueño esa misma tarde.", note: "Dos hechos cerrados en secuencia: indefinido." },
          { es: "Este año he cambiado tres veces de horario.", note: "Balance de un período que llega hasta hoy: perfecto compuesto." },
        ],
        mistakes: [
          { wrong: "El salón fue muy luminoso y tuvo dos ventanas.", right: "El salón era muy luminoso y tenía dos ventanas.", why: "Describes cómo era un lugar: es la escena, así que va en **imperfecto**." },
          { wrong: "El mes pasado hemos pintado la cocina.", right: "El mes pasado pintamos la cocina.", why: "_El mes pasado_ es un período cerrado: **indefinido**." },
        ],
        tip: "En algunas zonas (por ejemplo, partes de Bolivia, Perú o el noroeste de Argentina) y en registros orales de España oirás más perfecto compuesto. Para escribir, la regla del marco cerrado o abierto es la más segura.",
      },
      {
        heading: "Interrupción, costumbre y cambio de sentido",
        body: [
          "Cuando una acción está **en curso** y otra la corta, la primera va en imperfecto y la segunda en indefinido: _Estaba subiendo las cajas cuando sonó el timbre_. Con **mientras** suelen ir dos imperfectos si las dos acciones ocurren a la vez: _Mientras yo limpiaba, ella pintaba_.",
          "Algunos verbos cambian de matiz según el tiempo. **Conocía** a Marta significa que ya era amiga tuya; **conocí** a Marta significa que la viste por primera vez. **Sabía** algo es tenerlo en la cabeza; **supe** algo es enterarte en un momento concreto. **Quería** ir es una intención; **no quise** ir es una negativa.",
          "Los indefinidos irregulares más frecuentes no llevan tilde: _hizo, tuvo, puso, dijo, vino, estuvo, pudo_.",
        ],
        table: {
          caption: "Mismo verbo, otro mensaje",
          head: ["Imperfecto", "Indefinido"],
          rows: [
            ["Conocía al vecino: ya éramos amigos.", "Conocí al vecino el día de la mudanza."],
            ["Sabía que el ascensor fallaba.", "Supe por la portera que el ascensor fallaba."],
            ["Tenía que llamar al casero (no sé si lo hice).", "Tuve que llamar al casero (y lo hice)."],
          ],
        },
        examples: [
          { es: "Estábamos montando el sofá cuando se fue la luz.", note: "Acción en curso + hecho que la interrumpe." },
          { es: "Mientras mi hermano conducía, yo miraba el mapa.", note: "Dos acciones de fondo simultáneas." },
        ],
        mistakes: [
          { wrong: "Ayer hizó un viento terrible.", right: "Ayer hizo un viento terrible.", why: "Los indefinidos irregulares como _hizo_ o _tuvo_ no llevan tilde." },
          { wrong: "Leí la carta cuando entró mi compañera, así que no la terminé.", right: "Leía la carta cuando entró mi compañera, así que no la terminé.", why: "La lectura estaba **en curso** y no terminó: imperfecto." },
        ],
      },
      {
        heading: "Pluscuamperfecto: cómo se forma",
        body: [
          "El pluscuamperfecto se forma con **haber en imperfecto** + **participio**. El participio no cambia nunca: no concuerda con el sujeto ni con el objeto. Entre _había_ y el participio no se pone nada: ni _ya_, ni _no_, ni pronombres. Esas palabras van delante: _ya lo había visto_.",
          "Los participios regulares terminan en **-ado** (-ar) o **-ido** (-er, -ir). Repasa los irregulares de siempre, porque con este tiempo aparecen mucho: _hecho, dicho, visto, puesto, escrito, abierto, vuelto, roto, muerto, resuelto_.",
        ],
        table: {
          caption: "Pluscuamperfecto de «dejar» y de «hacer»",
          head: ["Persona", "haber (imperfecto)", "dejar", "hacer"],
          rows: [
            ["yo", "había", "había dejado", "había hecho"],
            ["tú", "habías", "habías dejado", "habías hecho"],
            ["él, ella, usted", "había", "había dejado", "había hecho"],
            ["nosotros, nosotras", "habíamos", "habíamos dejado", "habíamos hecho"],
            ["vosotros, vosotras", "habíais", "habíais dejado", "habíais hecho"],
            ["ellos, ellas, ustedes", "habían", "habían dejado", "habían hecho"],
          ],
        },
        examples: [
          { es: "Las vecinas ya habían recogido el paquete.", note: "El participio no cambia: _recogido_, aunque el sujeto es femenino plural." },
          { es: "Todavía no les había devuelto las llaves.", note: "_Todavía no_ y el pronombre van delante de _había_." },
        ],
        mistakes: [
          { wrong: "Habíamos ya pagado la fianza.", right: "Ya habíamos pagado la fianza.", why: "Nada se mete entre _había_ y el participio: _ya_ va delante." },
          { wrong: "Las cajas que habían llegadas estaban rotas.", right: "Las cajas que habían llegado estaban rotas.", why: "Con **haber**, el participio es invariable: _llegado_." },
        ],
      },
      {
        heading: "Pluscuamperfecto: tres usos en un relato",
        body: [
          "**1. Antes de otro momento pasado.** Primero fijas un momento con el indefinido y después miras hacia atrás: _Cuando abrí la puerta, mi compañera ya había hecho la cena_. Con **ya** confirmas que lo anterior ocurrió; con **todavía no**, que aún no había ocurrido.",
          "**2. Una causa anterior.** Explicas un estado o un hecho pasado con algo que pasó antes: _Estaba agotado porque había dormido en el suelo_. Es muy útil para disculparte o justificarte.",
          "**3. Un descubrimiento.** El momento en que te enteras va en indefinido (_vi, me di cuenta de, supe, descubrí, me enteré de_) y lo que descubres, que había pasado antes, va en pluscuamperfecto: _Me di cuenta de que había dejado la cartera en la furgoneta_.",
        ],
        examples: [
          { es: "Cuando llegó el técnico, todavía no habíamos encontrado el router.", note: "Antes de otro momento, con _todavía no_." },
          { es: "No pude entrar porque el casero había cambiado la cerradura.", note: "Causa anterior." },
          { es: "Al abrir la caja, descubrí que se había roto una taza.", note: "Descubrimiento: _descubrí_ + pluscuamperfecto." },
        ],
        mistakes: [
          { wrong: "Cuando llegamos al piso, el portero ya se fue.", right: "Cuando llegamos al piso, el portero ya se había ido.", why: "Con **ya**, la salida del portero es anterior a la llegada: pluscuamperfecto." },
          { wrong: "Estaba nerviosa porque no he firmado el contrato.", right: "Estaba nerviosa porque no había firmado el contrato.", why: "La causa es anterior a un estado pasado (_estaba_): pluscuamperfecto." },
        ],
        tip: "Si en tu relato todo va en pluscuamperfecto, nadie sabe cuál es el momento de referencia. Úsalo solo para mirar hacia atrás desde un hecho en indefinido.",
      },
    ],
  },
  grammar: {
    intro: "Primero eliges entre los tres pasados según la pregunta que responde la frase; después practicas la forma y los usos del pluscuamperfecto.",
    exercises: [
      {
        id: "b1-01-g1",
        type: "choice",
        title: "¿Escena, hecho o balance?",
        prompt: "Elige el tiempo que corresponde a lo que quiere decir cada frase.",
        items: [
          { q: "De pequeño ___ los veranos en el pueblo de mis abuelos, cerca de Teruel.", options: ["pasé", "pasaba", "he pasado"], answer: 1, why: "_De pequeño_ y _los veranos_ marcan una costumbre: **imperfecto**." },
          { q: "El jueves pasado ___ el contrato del piso nuevo.", options: ["firmé", "firmaba", "he firmado"], answer: 0, why: "Hecho cerrado con marco cerrado (_el jueves pasado_): **indefinido**." },
          { q: "Esta semana todavía no ___ las cortinas.", options: ["colgaba", "colgué", "he colgado"], answer: 2, why: "_Esta semana_ y _todavía no_ llegan hasta hoy: **perfecto compuesto**." },
          { q: "La habitación ___ pequeña, pero tenía mucha luz.", options: ["fue", "ha sido", "era"], answer: 2, why: "Es la descripción del lugar: **imperfecto**." },
          { q: "Estaba pintando la pared cuando ___ mi madre por videollamada.", options: ["llamaba", "llamó", "había llamado"], answer: 1, why: "La llamada interrumpe una acción en curso: **indefinido**." },
        ],
      },
      {
        id: "b1-01-g2",
        type: "gap",
        title: "Forma el pluscuamperfecto",
        prompt: "Completa con el pluscuamperfecto del verbo entre paréntesis.",
        items: [
          { q: "Cuando llegamos, los de la mudanza ya ___ el armario. (montar)", answers: [["habían montado"]], why: "Ellos: **habían** + participio regular." },
          { q: "Nunca ___ un viento tan fuerte como el cierzo. (yo, sentir)", answers: [["había sentido"]], why: "Yo: **había** + _sentido_." },
          { q: "¿Tú ya ___ la fianza antes de ver el piso? (pagar)", answers: [["habías pagado"]], why: "Tú: **habías** + _pagado_." },
          { q: "Mi compañera me dijo que se ___ la cafetera. (romper)", answers: [["había roto"]], why: "_Romper_ tiene participio irregular: **roto**." },
          { q: "Nosotros todavía no ___ nada en la nevera. (poner)", answers: [["habíamos puesto"]], why: "_Poner_ → **puesto**; _todavía no_ va delante." },
          { q: "¿Vosotros ___ antes a este barrio? (volver)", answers: [["habíais vuelto"]], why: "Vosotros: **habíais**; _volver_ → **vuelto**." },
        ],
      },
      {
        id: "b1-01-g3",
        type: "error",
        title: "Revisa el relato",
        prompt: "Cada frase tiene un error de tiempo o de forma. Escríbela corregida.",
        items: [
          { sentence: "Cuando entré en la cocina, alguien ya fregó todos los platos.", answers: ["Cuando entré en la cocina, alguien ya había fregado todos los platos."], why: "Con _ya_, el fregado es anterior a la entrada: **pluscuamperfecto**." },
          { sentence: "Nos habíamos instalados en el cuarto piso.", answers: ["Nos habíamos instalado en el cuarto piso."], why: "El participio con _haber_ no concuerda: **instalado**." },
          { sentence: "En 2021 he vivido seis meses en Lisboa.", answers: ["En 2021 viví seis meses en Lisboa."], why: "_En 2021_ es un marco cerrado: **indefinido**." },
          { sentence: "Supe que el casero había vendido el piso y antes no lo supe.", answers: ["Supe que el casero había vendido el piso y antes no lo sabía."], why: "Antes de enterarte, el conocimiento es un estado: **no lo sabía**." },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Las palabras de una mudanza a un piso compartido: lo que preparas antes, lo que pasa ese día y lo que haces cuando ya vives allí. Usa al menos cuatro en tu correo.",
    groups: [
      {
        title: "Antes de mudarte",
        items: [
          { es: "el anuncio del piso", note: "texto que describe un piso en alquiler" },
          { es: "el casero / la casera", note: "persona dueña del piso que alquilas" },
          { es: "la fianza", note: "dinero que dejas como garantía y que te devuelven al final" },
          { es: "empaquetar", note: "meter tus cosas en cajas" },
          { es: "desmontar un mueble", note: "separar sus piezas para transportarlo" },
        ],
      },
      {
        title: "El día de la mudanza",
        items: [
          { es: "alquilar una furgoneta", note: "pagar por usar un vehículo grande unas horas" },
          { es: "cargar y descargar", note: "meter y sacar cosas de un vehículo" },
          { es: "el ascensor estropeado", note: "ascensor que no funciona" },
          { es: "subir a pie", note: "usar la escalera" },
          { es: "echar una mano", note: "ayudar, de manera informal" },
        ],
      },
      {
        title: "En el piso nuevo",
        items: [
          { es: "el compañero de piso", note: "persona con quien compartes la vivienda" },
          { es: "instalarse", note: "colocar tus cosas y empezar a vivir en un lugar" },
          { es: "repartir las tareas", note: "decidir quién limpia, compra o saca la basura" },
          { es: "sentirse como en casa", note: "estar cómodo en un lugar nuevo" },
          { es: "el cierzo", note: "viento frío y fuerte típico de Zaragoza" },
        ],
      },
    ],
    exercises: [
      {
        id: "b1-01-v1",
        type: "match",
        title: "¿Qué significa?",
        prompt: "Relaciona cada expresión con la situación en la que la usarías.",
        pairs: [
          { left: "echar una mano", right: "Tu amigo lleva tres cajas y le ayudas." },
          { left: "la fianza", right: "Al irte, el dueño te devuelve dos meses de alquiler." },
          { left: "desmontar un mueble", right: "Quitas las patas de la mesa para que quepa en el coche." },
          { left: "repartir las tareas", right: "Decidís que tú friegas y ella saca la basura." },
          { left: "instalarse", right: "Colocas la ropa y los libros en tu nueva habitación." },
          { left: "subir a pie", right: "No funciona el ascensor y usas la escalera." },
        ],
      },
      {
        id: "b1-01-v2",
        type: "context",
        title: "La palabra justa",
        prompt: "Lee la situación y elige la frase más natural.",
        items: [
          { context: "Escribes a una amiga que tiene coche para pedirle ayuda el sábado.", q: "Le dices:", options: ["¿Puedes echarme una mano con la mudanza?", "¿Puedes echarme una fianza con la mudanza?", "¿Puedes instalarme la mudanza?"], answer: 0, why: "_Echar una mano_ es la forma informal de pedir ayuda." },
          { context: "El dueño del piso te pregunta si ya está todo en su sitio.", q: "Respondes:", options: ["Sí, ya he empaquetado.", "Sí, ya me he instalado.", "Sí, ya he descargado la fianza."], answer: 1, why: "_Instalarse_ es colocar tus cosas y empezar a vivir allí." },
          { context: "Un vecino ve que llevas cajas por la escalera.", q: "Le explicas:", options: ["Es que el casero está a pie.", "Es que he alquilado la escalera.", "Es que el ascensor está estropeado."], answer: 2, why: "Explicas la causa: el ascensor **está estropeado**." },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El acento que separa presente y pasado: compro / compró",
    explanation: [
      "Muchos verbos regulares tienen una forma de presente (yo) y una de indefinido (él, ella, usted) que solo se distinguen por la sílaba fuerte: **compro** (COM-pro) es presente; **compró** (com-PRÓ) es pasado. Si cambias el acento, cambias el tiempo y la persona.",
      "También repasa **había**: tiene tres sílabas, _ha-BÍ-a_, porque la _i_ con tilde se separa de la _a_. No digas _ha-bia_ en dos sílabas. En el relato oral, _había_ se une al participio sin pausa: _ha-bí-a-sa-li-do_.",
      "Escucha primero y decide qué oyes; después repite marcando bien la sílaba fuerte. La voz es sintética y sirve como apoyo, no como modelo regional.",
    ],
    table: {
      caption: "Presente (yo) frente a indefinido (él, ella, usted)",
      head: ["Presente", "Indefinido"],
      rows: [
        ["llego (LLE-go)", "llegó (lle-GÓ)"],
        ["cambio (CAM-bio)", "cambió (cam-BIÓ)"],
        ["termino (ter-MI-no)", "terminó (ter-mi-NÓ)"],
        ["pinto (PIN-to)", "pintó (pin-TÓ)"],
      ],
    },
    perceive: {
      id: "b1-01-p1",
      type: "listen",
      title: "¿Presente o pasado?",
      prompt: "Escucha la frase y elige la forma que oyes.",
      items: [
        { q: "¿Qué forma oyes?", audio: "Limpió la cocina antes de irse.", voice: "es-ES-f", options: ["limpio", "limpió"], answer: 1, why: "La sílaba fuerte es la última: _lim-PIÓ_, indefinido." },
        { q: "¿Qué forma oyes?", audio: "Pago la luz todos los meses.", voice: "es-ES-m", options: ["pago", "pagó"], answer: 0, why: "La sílaba fuerte es la primera: _PA-go_, presente." },
        { q: "¿Qué forma oyes?", audio: "Llamó al casero por la tarde.", voice: "es-ES-f", options: ["llamo", "llamó"], answer: 1, why: "_lla-MÓ_: indefinido de él o ella." },
        { q: "¿Qué forma oyes?", audio: "Bajo la basura después de cenar.", voice: "es-ES-m", options: ["bajo", "bajó"], answer: 0, why: "_BA-jo_: presente de yo." },
        { q: "¿Cuántas sílabas tiene la primera palabra?", audio: "Había dejado las llaves dentro.", voice: "es-ES-f", options: ["dos: ha-bia", "tres: ha-bí-a"], answer: 1, why: "La tilde rompe el diptongo: _ha-bí-a_." },
      ],
    },
    produce: [
      { text: "Yo pinto la pared; ella pintó la puerta.", tip: "Marca la diferencia: _PIN-to_ / _pin-TÓ_.", voice: "es-ES-f" },
      { text: "Cuando llegó, ya habíamos cenado.", tip: "Une _habíamos_ y _cenado_ sin pausa.", voice: "es-ES-m" },
      { text: "Había dejado la caja en el portal.", tip: "Tres sílabas en _ha-bí-a_ y sin pausa antes del participio.", voice: "es-ES-f" },
      { text: "Te cuento lo que pasó el sábado.", tip: "_CUEN-to_ es presente; _pa-SÓ_ es pasado.", voice: "es-ES-m" },
    ],
    spelling: "La tilde de la última sílaba es la que distingue el indefinido regular de él o ella (_compró, llamó, salió_) del presente de yo (_compro, llamo, salgo_). Los indefinidos irregulares (_hizo, puso, vino_) no la llevan.",
  },
  listening: {
    title: "Una mudanza con sorpresas",
    context: "Dani llega por fin al piso que comparte con Lucía en el centro de Zaragoza. Ella lo esperaba la noche anterior y quiere saber qué pasó. Escucha primero sin leer la transcripción.",
    speakers: [
      { id: "lucia", name: "Lucía", voice: "es-ES-f", role: "compañera de piso" },
      { id: "dani", name: "Dani", voice: "es-ES-m", role: "nuevo compañero de piso" },
    ],
    script: [
      { speaker: "lucia", text: "¡Dani, por fin! Ayer te esperamos hasta las once y al final nos fuimos a dormir. ¿Qué pasó con la mudanza?" },
      { speaker: "dani", text: "Uf, fue un día larguísimo. Mi primo había reservado una furgoneta para las nueve, pero cuando llegamos a la agencia, todavía no la habían limpiado. Esperamos casi una hora en la puerta." },
      { speaker: "lucia", text: "¿Y tus cosas? ¿Las tenías ya en cajas?" },
      { speaker: "dani", text: "Sí, eso sí. La semana anterior había empaquetado casi todo y había escrito en cada caja de qué habitación era. Lo único que no había hecho era desmontar la cama. Mientras mi primo cargaba las cajas, yo buscaba el destornillador por todo el piso." },
      { speaker: "lucia", text: "Típico. ¿Y por qué llegasteis tan tarde? Desde Pamplona no se tarda tanto." },
      { speaker: "dani", text: "Porque en la autovía había un atasco enorme. Llovía, todo el mundo conducía despacio y, de repente, la furgoneta empezó a hacer un ruido raro. Paramos en una gasolinera y un mecánico nos dijo que no era nada grave." },
      { speaker: "lucia", text: "Menos mal. ¿Y el ascensor? Esta mañana la portera me ha dicho que no funcionaba." },
      { speaker: "dani", text: "Exacto. Cuando por fin llegamos, vi un cartel en el portal: el ascensor se había estropeado esa misma tarde. Subimos veinte cajas a pie hasta el cuarto." },
      { speaker: "lucia", text: "¡Qué horror! Bueno, ya estás aquí. ¿Qué tal la primera noche?" },
      { speaker: "dani", text: "Mejor de lo que esperaba. He dormido en el colchón, en el suelo, pero he dormido ocho horas seguidas. Y esta mañana ya he colocado toda la ropa en el armario." },
      { speaker: "lucia", text: "Pues esta tarde montamos la cama entre los dos y luego te enseño el barrio, ¿vale?" },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Primera escucha: sin transcripción, quédate con la idea general.",
        exercise: {
          id: "b1-01-l1",
          type: "choice",
          prompt: "Responde con lo esencial de la conversación.",
          items: [
            { q: "¿Qué cuenta Dani?", options: ["Por qué su mudanza duró tanto", "Por qué ha decidido no mudarse", "Cómo encontró el piso de Lucía"], answer: 0, why: "Lucía pregunta qué pasó y Dani explica los retrasos del día." },
            { q: "¿Cómo termina la conversación?", options: ["Lucía se enfada con Dani", "Dani decide volver a Pamplona", "Hacen planes para esa tarde"], answer: 2, why: "Lucía propone montar la cama y enseñarle el barrio." },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Segunda escucha: busca las causas y lo que había pasado antes.",
        exercise: {
          id: "b1-01-l2",
          type: "choice",
          prompt: "Elige la respuesta correcta según el audio.",
          items: [
            { q: "¿Por qué esperaron en la agencia?", options: ["Porque habían perdido la reserva", "Porque la furgoneta no estaba limpia", "Porque llovía mucho"], answer: 1, why: "Dani dice: _todavía no la habían limpiado_." },
            { q: "¿Qué no había hecho Dani antes del día de la mudanza?", options: ["Desmontar la cama", "Escribir en las cajas", "Empaquetar la ropa"], answer: 0, why: "_Lo único que no había hecho era desmontar la cama._" },
            { q: "¿Qué descubrió al llegar al portal?", options: ["Que Lucía no estaba", "Que la portera se había ido", "Que el ascensor se había estropeado"], answer: 2, why: "Vio un cartel: _el ascensor se había estropeado esa misma tarde_." },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Tercera escucha: fíjate en el trabajo de cada pasado. Después puedes leer la transcripción.",
        exercise: {
          id: "b1-01-l3",
          type: "classify",
          prompt: "Clasifica cada fragmento según lo que hace en el relato.",
          categories: ["Escena o acción en curso", "Hecho que avanza", "Balance hasta hoy", "Algo anterior a otro pasado"],
          items: [
            { text: "Llovía, todo el mundo conducía despacio.", cat: 0 },
            { text: "Paramos en una gasolinera.", cat: 1 },
            { text: "He dormido ocho horas seguidas.", cat: 2, why: "Dani hace balance de una noche que llega hasta esta mañana." },
            { text: "Había empaquetado casi todo.", cat: 3 },
            { text: "Mientras mi primo cargaba las cajas…", cat: 0 },
            { text: "Subimos veinte cajas a pie.", cat: 1 },
            { text: "El ascensor se había estropeado esa misma tarde.", cat: 3, why: "La avería es anterior al momento en que Dani ve el cartel." },
          ],
        },
      },
    ],
  },
  reading: {
    title: "Un mes en Zaragoza: lo que he aprendido",
    genre: "Entrada de blog personal",
    frame: "Irene, investigadora de Valladolid, escribe en su blog un mes después de mudarse a Zaragoza por trabajo.",
    text: [
      "Hace exactamente un mes llegué a Zaragoza con dos maletas, una planta y muchas dudas. Antes de venir, solo había estado aquí una vez, de pequeña, durante las fiestas del Pilar, y apenas recordaba una plaza llena de flores. Esta vez venía a trabajar en un laboratorio de la universidad y no conocía a nadie.",
      "Las primeras semanas fueron raras. Hacía un viento que yo no había sentido nunca: los vecinos lo llaman cierzo y hablan de él como de una persona con mal carácter. Por las mañanas iba en bici al campus y por las tardes paseaba junto al Ebro para no quedarme sola en el piso. Un domingo, mientras tomaba un café en una terraza del Tubo, una señora me preguntó si era nueva en el barrio. Le dije que sí y me invitó a un grupo de conversación que se reúne los jueves en la biblioteca. Allí conocí a mis primeras amigas.",
      "En este mes he cambiado bastante. He aprendido a pedir tapas sin mirar la carta, he descubierto que el cierzo se lleva los paraguas y todavía no he subido a la torre del Pilar, aunque pienso hacerlo pronto. Cuando mi madre me llamó ayer, se sorprendió de lo contenta que estaba: creía que yo ya había vuelto a casa por la nostalgia. Le contesté que no, que de momento me quedo.",
    ],
    glossary: [
      { es: "el Tubo", note: "zona de calles estrechas con bares en el centro de Zaragoza" },
      { es: "apenas", note: "casi no" },
      { es: "la nostalgia", note: "tristeza por estar lejos de casa" },
    ],
    tasks: [
      {
        id: "b1-01-r1",
        type: "choice",
        prompt: "Lee el blog y elige la respuesta que apoya el texto.",
        items: [
          { q: "¿Qué relación tenía Irene con Zaragoza antes de mudarse?", options: ["Había vivido allí de estudiante", "Nunca había estado allí", "Había estado una vez de niña"], answer: 2, why: "_Solo había estado aquí una vez, de pequeña._" },
          { q: "¿Cómo conoció a sus primeras amigas?", options: ["Gracias a una señora que le habló en una terraza", "En el laboratorio de la universidad", "En las fiestas del Pilar"], answer: 0, why: "La señora la invitó a un grupo de conversación." },
          { q: "¿Por qué se sorprendió su madre?", options: ["Porque Irene había subido a la torre", "Porque pensaba que Irene ya había vuelto", "Porque Irene había perdido el paraguas"], answer: 1, why: "_Creía que yo ya había vuelto a casa._" },
        ],
      },
      {
        id: "b1-01-r2",
        type: "classify",
        prompt: "¿Cuándo se sitúa cada dato del blog?",
        categories: ["Antes de llegar a Zaragoza", "Durante el primer mes", "Todavía pendiente hoy"],
        items: [
          { text: "Ver la plaza del Pilar llena de flores", cat: 0 },
          { text: "Ir en bici al campus", cat: 1 },
          { text: "Subir a la torre del Pilar", cat: 2, why: "_Todavía no he subido_: sigue pendiente." },
          { text: "Conocer a sus primeras amigas", cat: 1 },
          { text: "No conocer a nadie en la ciudad", cat: 0, why: "Es la situación de partida, cuando todavía no había llegado." },
        ],
      },
    ],
    noticing: {
      prompt: "Toca cada fragmento para ver qué trabajo hace el tiempo verbal.",
      items: [
        { quote: "solo había estado aquí una vez", note: "**Pluscuamperfecto**: una experiencia anterior al momento de la llegada (_llegué_)." },
        { quote: "Hacía un viento que yo no había sentido nunca", note: "El **imperfecto** describe la escena; el **pluscuamperfecto** con _nunca_ dice que antes de ese momento no lo había vivido." },
        { quote: "mientras tomaba un café en una terraza del Tubo, una señora me preguntó", note: "Acción de fondo en **imperfecto** y hecho que la corta en **indefinido**." },
        { quote: "En este mes he cambiado bastante", note: "**Perfecto compuesto**: balance de un período que llega hasta hoy." },
      ],
    },
  },
  practice: {
    intro: "Ahora mezclas los tres pasados y el pluscuamperfecto. Cada ejercicio funciona de otra manera; el último te pide recuperar lo que ya sabías de A2 sin mirar.",
    exercises: [
      {
        id: "b1-01-x1",
        type: "order",
        title: "Frases con antecedente",
        prompt: "Ordena las palabras para formar frases correctas.",
        items: [
          { words: ["Cuando", "llegó", "la", "furgoneta,", "ya", "habíamos", "bajado", "las", "cajas."] },
          { words: ["No", "pude", "entrar", "porque", "me", "había", "dejado", "las", "llaves", "dentro."] },
          { words: ["Al", "abrir", "el", "armario,", "vi", "que", "alguien", "lo", "había", "vaciado."] },
        ],
      },
      {
        id: "b1-01-x2",
        type: "context",
        title: "¿Qué quieres decir?",
        prompt: "Lee la situación y elige la frase que expresa exactamente esa idea.",
        items: [
          { context: "Quieres decir que el vecino y tú erais amigos desde antes de la mudanza.", q: "Dices:", options: ["Conocí al vecino el día de la mudanza.", "Ya conocía al vecino.", "He conocido al vecino."], answer: 1, why: "_Conocía_ presenta una relación que ya existía." },
          { context: "Te enteraste en un momento concreto, por un mensaje, de que el alquiler subía.", q: "Dices:", options: ["Supe por un mensaje que el alquiler subía.", "Sabía por un mensaje que el alquiler subía.", "Había sabido por un mensaje que el alquiler subía."], answer: 0, why: "_Supe_ marca el momento en que te enteraste." },
          { context: "Explicas por qué estabas de mal humor el lunes: la noche anterior no dormiste.", q: "Dices:", options: ["El lunes estaba de mal humor porque no dormía.", "El lunes estuve de mal humor porque no he dormido.", "El lunes estaba de mal humor porque no había dormido."], answer: 2, why: "Causa anterior a un estado pasado: **pluscuamperfecto**." },
        ],
      },
      {
        id: "b1-01-x3",
        type: "gap",
        title: "Un relato completo",
        prompt: "Completa el relato con el tiempo adecuado del verbo entre paréntesis.",
        items: [
          { q: "El piso ___ en una calle tranquila, detrás del mercado. (estar)", answers: [["estaba"]], why: "Descripción del lugar: imperfecto." },
          { q: "La primera noche ___ un ruido extraño en la cocina. (yo, oír)", answers: [["oí"]], why: "Hecho puntual que inicia la historia: indefinido." },
          { q: "Era la nevera: mi compañero la ___ mal al moverla. (enchufar)", answers: [["había enchufado"]], why: "Causa anterior al ruido: pluscuamperfecto." },
          { q: "Desde entonces ___ a revisar los enchufes antes de dormir. (yo, aprender)", answers: [["he aprendido"]], why: "Balance que llega hasta hoy: perfecto compuesto." },
        ],
      },
      {
        id: "b1-01-x4",
        type: "open",
        title: "Escribe por partes",
        prompt: "Escribe cada parte de un relato sobre tu propia llegada a un lugar nuevo. Después compara con el modelo.",
        items: [
          {
            prompt: "Escena: describe en dos o tres frases cómo era el lugar al que llegaste y cómo te sentías.",
            model: "Era un estudio pequeño en un tercer piso, con una ventana que daba a un patio. Hacía calor y yo estaba cansada, pero tenía muchas ganas de empezar.",
            checklist: ["Uso el imperfecto para describir lugar y estado.", "Incluyo al menos un detalle concreto."],
          },
          {
            prompt: "Giro y antecedente: cuenta un problema de ese primer día y explica qué había pasado antes.",
            model: "Cuando quise ducharme, no salía agua caliente. El casero no me había explicado cómo se encendía la caldera.",
            checklist: ["El problema va en indefinido o imperfecto según su papel.", "La causa anterior va en pluscuamperfecto."],
          },
          {
            prompt: "Balance: cierra con lo que has aprendido o cambiado desde entonces.",
            model: "Desde ese día he aprendido a pedir todas las instrucciones antes de firmar.",
            checklist: ["Uso un marco que llega hasta hoy (_desde entonces, este año_).", "El balance va en perfecto compuesto."],
          },
        ],
      },
      {
        id: "b1-01-retrieval",
        type: "open",
        title: "Recupera lo que ya sabías",
        prompt: "Sin mirar la teoría, recupera formas y usos que aprendiste en A2. Escribe primero y compara después con el modelo.",
        items: [
          {
            prompt: "Escribe el indefinido de él o ella de estos verbos irregulares: hacer, poner, decir, venir, tener, ir. Después úsalos en dos frases sobre una mudanza.",
            model: "hizo, puso, dijo, vino, tuvo, fue. Mi tía vino a ayudarnos y puso las plantas en el balcón. El casero dijo que todo estaba bien.",
            checklist: ["Ninguna de estas formas lleva tilde.", "Uso las formas en frases con sentido completo."],
          },
          {
            prompt: "Escribe los participios de abrir, escribir, volver, romper, ver y resolver. Elige tres y escribe una frase en pluscuamperfecto con cada uno.",
            model: "abierto, escrito, vuelto, roto, visto, resuelto. Alguien había abierto la ventana. Nunca había visto tantas cajas. Ya habíamos resuelto el problema del gas.",
            checklist: ["Los seis participios son irregulares y están bien escritos.", "Cada frase tiene _había_ + participio sin palabras en medio."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe un correo de 140–180 palabras a una amiga que vive en otro país: cuéntale cómo fue tu mudanza o tu llegada a un lugar nuevo, qué había pasado antes y qué balance haces hoy.",
    context: "Tu amiga no sabe nada de tu cambio. Quiere entender cómo era el lugar, qué pasó el primer día y cómo estás ahora. Escribe en tono cercano.",
    steps: [
      "Planifica cuatro partes: saludo y motivo, escena, giro con su antecedente, balance y despedida.",
      "Escribe una primera versión sin mirar el modelo.",
      "Marca con colores distintos los verbos en imperfecto, indefinido, perfecto compuesto y pluscuamperfecto.",
      "Revisa cada pluscuamperfecto: ¿hay un momento pasado de referencia antes o después? Corrige lo que no encaje.",
    ],
    useLanguage: ["Cuando llegué, ya…", "… porque no había…", "Me di cuenta de que…", "Mientras…, de repente…", "Desde entonces he…"],
    model: [
      "¡Hola, Clara! ¿Qué tal por Montreal? Te escribo desde mi nuevo piso en Zaragoza: por fin me he mudado. El piso está en un cuarto sin ascensor, pero es muy luminoso y desde la ventana se ve el Ebro. Comparto cocina con dos chicas muy simpáticas, Marta y Yasmina.",
      "El día de la mudanza fue una aventura. Mi hermano había alquilado una furgoneta, pero cuando fuimos a recogerla nos dijeron que alguien la había devuelto con una rueda pinchada. Esperamos dos horas. Mientras cargábamos las cajas empezó a llover, y al llegar me di cuenta de que había dejado las llaves en casa de mis padres. Menos mal que Yasmina estaba en el piso y nos abrió.",
      "Ya han pasado tres semanas y me he acostumbrado a todo, incluso al viento. Todavía no he colgado los cuadros, pero ya me siento como en casa. ¿Cuándo vienes a verme? Un abrazo enorme,",
      "Paula",
    ],
    checklist: [
      "Describo la escena en imperfecto y cuento los hechos en indefinido.",
      "Uso el pluscuamperfecto al menos dos veces, siempre con un momento pasado de referencia.",
      "Cierro con un balance en perfecto compuesto y una pregunta a mi amiga.",
      "Uso al menos cuatro palabras del vocabulario de la mudanza.",
      "Reviso los participios: no concuerdan y no llevan nada entre _había_ y el participio.",
    ],
    words: [140, 180],
  },
  speaking: {
    intro: "Habla en voz alta y grábate en tu dispositivo. Prepara solo notas, no un texto completo; el curso no puntúa tu pronunciación ni sube tu audio.",
    tasks: [
      {
        title: "Un día que salió al revés",
        prompt: "Cuenta durante dos minutos un día en que casi todo salió mal: una mudanza, un viaje, un examen o una cita. Describe la escena, cuenta los hechos en orden, explica al menos dos cosas que habían pasado antes y termina con lo que has aprendido desde entonces.",
        prep: ["Escena: dónde estabas, qué tiempo hacía, cómo te sentías.", "Tres hechos en orden con _primero, luego, al final_.", "Dos antecedentes con _porque había…_ o _me di cuenta de que…_", "Balance: _desde entonces he…_"],
        seconds: 120,
        model: "Hace dos años tenía una entrevista de trabajo en Madrid. Era invierno y hacía muchísimo frío. Salí de casa con tiempo, pero cuando llegué a la estación vi que el tren se había cancelado: la noche anterior había nevado en la sierra. Llamé a la empresa, me cambiaron la hora y al final llegué. Desde entonces siempre he mirado el tiempo la noche antes.",
        selfCheck: ["El oyente distingue la escena de los hechos.", "Uso el pluscuamperfecto para mirar hacia atrás, no para todo.", "Cierro con un balance."],
      },
      {
        title: "Responde a tu compañero de piso",
        prompt: "Tu compañero de piso llega y ve la cocina desordenada. Te pregunta qué ha pasado. Responde, aclara qué había pasado antes de que él llegara y negocia quién limpia. Imagina sus preguntas en voz alta y contéstalas.",
        prep: ["Explica: _Es que cuando volví, ya…_", "Aclara: _No, no fui yo; yo había salido antes._", "Negocia: _¿Qué te parece si yo friego y tú…?_"],
        seconds: 90,
        model: "Es que cuando volví del trabajo, el gato ya había tirado la bolsa de la basura. Yo había salido a las ocho y no la había bajado, lo siento. ¿Qué te parece si yo friego el suelo y tú sacas la basura?",
        selfCheck: ["Respondo a cada pregunta antes de seguir.", "Aclaro la secuencia con _ya_ o _todavía no_.", "Propongo una solución concreta."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a tu próxima clase lo que has repasado y úsalo con tu profesor o profesora.",
    cards: [
      { move: "Cuenta", task: "Empieza la clase contando en un minuto algo que te pasó esta semana: una escena, un hecho y algo que había pasado antes.", phrases: ["Estaba… cuando…", "Me di cuenta de que ya había…"] },
      { move: "Pregunta", task: "Pregunta a tu profesor por una experiencia suya y pide detalles sobre lo que había pasado antes.", phrases: ["¿Y antes de eso ya habías…?", "¿Por qué estabas…?"] },
      { move: "Compara", task: "Lleva dos frases de tu correo donde dudaste entre dos pasados y pregunta qué cambia en el sentido.", phrases: ["¿Cambia algo si digo… en lugar de…?"] },
    ],
    bring: "Tu correo revisado, con los verbos marcados por colores, y la grabación del relato de dos minutos.",
  },
  quiz: {
    items: [
      { type: "choice", q: "Cuando era estudiante, ___ en una residencia con cuarenta personas.", options: ["viví", "vivía", "he vivido"], answer: 1, why: "Situación habitual del pasado: **imperfecto**." },
      { type: "listen", q: "¿Qué forma verbal oyes?", audio: "Pintó el pasillo de azul.", voice: "es-ES-m", options: ["pinto", "pintó", "pintaba"], answer: 1, why: "_pin-TÓ_: indefinido de él o ella." },
      { type: "gap", q: "Cuando llamé al fontanero, mi compañera ya lo ___. (arreglar)", answers: [["había arreglado"]], why: "Con _ya_, el arreglo es anterior a la llamada." },
      { type: "gap", q: "Este año ___ dos veces de piso. (nosotros, cambiar)", answers: [["hemos cambiado"]], why: "_Este año_ llega hasta hoy: perfecto compuesto." },
      { type: "error", sentence: "Cuando abrí la caja, vi que se rompió el espejo.", answers: ["Cuando abrí la caja, vi que se había roto el espejo."], why: "Descubrimiento: lo que había pasado antes va en **pluscuamperfecto**." },
      { type: "error", sentence: "Los vecinos habían ya pintado la escalera.", answers: ["Los vecinos ya habían pintado la escalera."], why: "_Ya_ va delante de _habían_, nunca en medio." },
      { type: "order", words: ["Mientras", "descargábamos", "la", "furgoneta,", "empezó", "a", "nevar."] },
      { type: "choice", q: "¿Qué frase cuenta el momento en que alguien se enteró?", options: ["Sabía que el piso tenía humedad.", "Había sabido que el piso tenía humedad.", "Supe que el piso tenía humedad."], answer: 2, why: "_Supe_ marca el momento de enterarse." },
      {
        type: "open",
        prompt: "Reformulación. Texto de partida: «Primero el casero cambió la cerradura. Después llegué yo con mi llave vieja y no pude entrar.» Escribe una sola frase que empiece por «No pude entrar porque…» y conserve la secuencia.",
        model: "No pude entrar porque el casero había cambiado la cerradura y yo llegué con mi llave vieja.",
        checklist: ["Uso el pluscuamperfecto para la causa anterior.", "Conservo todos los datos del texto de partida.", "La frase se entiende sin el texto original; acepto otra formulación equivalente."],
      },
      {
        type: "open",
        prompt: "Escribe tres frases sobre tu última mudanza o tu último viaje: una de escena, una de hecho y una con algo que ya había pasado antes.",
        model: "La casa olía a pintura fresca. Ese día subimos todas las cajas en una hora. Mis amigos ya habían limpiado la cocina.",
        checklist: ["Imperfecto para la escena.", "Indefinido para el hecho.", "Pluscuamperfecto para lo anterior."],
      },
    ],
  },
  complete: {
    canNow: [
      "Elegir imperfecto para la escena y las costumbres, indefinido para los hechos y perfecto compuesto para el balance de hoy.",
      "Formar el pluscuamperfecto con todas las personas y con participios irregulares.",
      "Usar el pluscuamperfecto para algo anterior a otro pasado, para una causa y para un descubrimiento.",
      "Contar una mudanza o una llegada de forma ordenada y con un balance final.",
    ],
    review: [
      "Imperfecto = ¿cómo era?; indefinido = ¿qué pasó?; perfecto compuesto = ¿qué balance hago hoy?",
      "Cuando llegué, ya había… / todavía no había…",
      "Participio invariable y nada entre _había_ y el participio.",
    ],
  },
  related: [
    { path: "/past-b1", label: "Clase: Revisión de pasados: contar y describir con intención" },
    { path: "/sistema-verbal/preterito-pluscuamperfecto-indicativo", label: "Clase: Pluscuamperfecto: hechos anteriores a otro pasado" },
  ],
};
