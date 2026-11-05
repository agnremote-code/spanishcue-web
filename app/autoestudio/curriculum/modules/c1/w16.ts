import type { Module } from "../../types";

/**
 * C1 · semana 16 · Autoestudio espejo de G196 (interrogativas retóricas y
 * exclamativas complejas). Repaso autónomo con el debate vecinal sobre el
 * futuro de un mercado ficticio de la Ciudad de México. Audio mediante
 * síntesis; sin acreditación regional.
 */
export const c1w16: Module = {
  id: "c1-16",
  level: "c1",
  week: 16,
  kind: "core",
  title: "¿Quién no ha comprado aquí alguna vez?",
  subtitle: "Repaso de las preguntas que afirman sin preguntar y de las exclamaciones que valoran, desean o se sorprenden, con su ortografía y su entonación",
  stop: {
    place: "Ciudad de México",
    country: "México",
  },
  minutes: 120,
  newObjectives: [
    "c1.gram.g196",
    "c1.voc.w16-mercado-barrio",
    "c1.pron.w16-melodia-retorica",
    "c1.lis.w16-radio-comunitaria",
    "c1.read.w16-columna-mercado",
    "c1.wri.w16-columna-vecinal",
    "c1.spk.w16-alegato-asamblea",
    "c1.fun.w16-persuadir-preguntando",
    "c1.disc.w16-cierre-retorico",
  ],
  reviewObjectives: ["c1.gram.g194","c1.gram.g195","c1.voc.w15-cabildo-barrio","c1.pron.w15-cita-en-voz-alta","c1.lis.w15-radio-comunitaria","c1.read.w15-cronica-cabildo","c1.wri.w15-relatoria-reunion","c1.spk.w15-informe-asamblea","c1.fun.w15-transmitir-palabras","c1.disc.w15-integrar-voces","c1.rev.w15-semanas-11-15"],
  prerequisites: ["c1-15"],
  goal: {
    canDo: "Puedo usar preguntas retóricas para afirmar lo contrario de lo que preguntan, distinguirlas de las preguntas reales y expresar asombro, deseo o valoración con exclamativas complejas bien acentuadas y bien puntuadas.",
    steps: [
      "Repasa en la teoría qué afirma cada tipo de pregunta retórica y cómo se construyen las exclamativas de grado, de deseo y de sorpresa.",
      "Practica la polaridad, la elección entre pregunta real y retórica, la concordancia de «cuánto» y la tilde de los exclamativos con frases de un mercado de barrio.",
      "Escucha un programa de radio comunitaria sobre el futuro del mercado y lee la columna de una vecina que defiende el edificio.",
      "Escribe tu propia columna, revísala con la lista de control y defiende tu postura en voz alta ante la asamblea.",
    ],
  },
  theory: {
    intro: "En clase viste que hay preguntas que no esperan respuesta y exclamaciones que dicen mucho más que una afirmación. Aquí las repasas en otro escenario: la discusión de una colonia de la Ciudad de México sobre el futuro de su mercado. Las formas de intensificación que ya repasaste en la semana 14 («¡vaya si…!», «ni siquiera») no se repiten: el foco está en lo que una pregunta afirma, en las exclamativas que desean o se sorprenden y en cómo se escriben y se pronuncian.",
    parts: [
      {
        heading: "La pregunta retórica afirma lo contrario de lo que pregunta",
        body: [
          "Una pregunta retórica tiene forma de pregunta, pero funciona como una afirmación: quien la hace ya conoce la respuesta y espera que el oyente la ponga por su cuenta. La clave es la polaridad invertida. Si la pregunta es afirmativa, afirma algo negativo: «¿Quién va a cruzar media ciudad para comprar cilantro?» significa «nadie». Si la pregunta es negativa, afirma algo positivo: «¿Quién no ha desayunado alguna vez en estas fondas?» significa «todos».",
          "Algunas fórmulas tienen una respuesta casi fija. «¿Acaso…?» orienta hacia el no («¿Acaso los coches compran fruta?» = no la compran). «¿Para qué…?» niega la utilidad («¿Para qué queremos otro estacionamiento?» = no lo necesitamos). «¿Qué más da?», «¿Y qué?» y «¿A quién le importa?» restan importancia. «¿Cómo no voy a…?» equivale a «claro que sí» y «¿Cómo voy a…?», a «no puedo»: «¿Cómo no voy a defender el mercado, si aquí crecí?» frente a «¿Cómo voy a pagar ese alquiler?».",
          "En una pregunta retórica caben palabras que normalmente solo aparecen en frases negativas, como «nada», «nunca», «en mi vida» o «ni un»: «¿Acaso ha dicho alguien nada del drenaje?», «¿Has visto en tu vida un mole como el de doña Chayo?». Su presencia es una pista de que la pregunta no busca respuesta.",
        ],
        table: {
          caption: "Qué afirma cada pregunta",
          head: ["Pregunta", "Polaridad", "Lo que se afirma"],
          rows: [
            ["¿Quién quiere un mercado vacío?", "afirmativa", "Nadie lo quiere."],
            ["¿Quién no conoce el puesto de jugos de la entrada?", "negativa", "Todo el mundo lo conoce."],
            ["¿Acaso cobran menos en el supermercado?", "orientada al no", "No cobran menos."],
            ["¿Para qué pintar si el techo gotea?", "utilidad negada", "No sirve de nada pintar."],
            ["¿Cómo no vamos a ir a la asamblea?", "negativa con «cómo»", "Claro que iremos."],
          ],
        },
        examples: [
          { es: "¿Quién se va a creer que la remodelación costará solo dos millones?", note: "Afirmativa: nadie se lo cree." },
          { es: "¿Y qué si el edificio es viejo? También lo es la catedral.", note: "«¿Y qué?» quita fuerza al argumento contrario." },
          { es: "¿Acaso alguien ha preguntado nunca a los locatarios?", note: "«Nunca» refuerza la respuesta negativa esperada." },
        ],
        mistakes: [
          {
            wrong: "¿Quién no quiere un mercado limpio? → Nadie lo quiere limpio.",
            right: "¿Quién no quiere un mercado limpio? → Todos lo queremos limpio.",
            why: "La pregunta negativa afirma en positivo: «¿quién no…?» equivale a «todos».",
          },
          {
            wrong: "¿Cómo no voy a pagar el alquiler nuevo? Es imposible con lo que vendo.",
            right: "¿Cómo voy a pagar el alquiler nuevo? Es imposible con lo que vendo.",
            why: "Con «no», la pregunta afirma que sí; para decir que no se puede, la pregunta va sin negación.",
          },
        ],
        tip: "Para comprobar si entendiste una pregunta retórica, respóndela tú en voz baja con la palabra contraria: «¿quién?» → «nadie»; «¿quién no?» → «todos»; «¿acaso?» → «no».",
      },
      {
        heading: "Pregunta real, coletilla y pregunta eco",
        body: [
          "No toda pregunta en un discurso es retórica. Las coletillas «¿no?» y «¿verdad?» al final de una afirmación piden confirmación de verdad y admiten respuesta: «El mercado abre a las siete, ¿verdad?». La pregunta retórica, en cambio, se dice como un cierre y el hablante sigue sin esperar: si alguien contesta, rompe el juego o lo hace a propósito para ironizar.",
          "La pregunta eco con «¿Cómo que…?» repite lo que otro acaba de decir para mostrar sorpresa o rechazo: «—Van a cerrar el mercado en diciembre. —¿Cómo que lo van a cerrar?». No pide información nueva; pide que el otro se explique o se retracte. Es muy frecuente en la conversación y conviene reservarla para registros orales.",
          "En un texto argumentativo, una o dos preguntas retóricas bien colocadas dan fuerza; diez seguidas cansan y parecen un truco. Colócalas donde quieres que el lector saque la conclusión por sí mismo: al final de un párrafo o justo antes de la tesis.",
        ],
        table: {
          caption: "Tres preguntas que se parecen",
          head: ["Tipo", "Ejemplo", "¿Espera respuesta?"],
          rows: [
            ["coletilla de confirmación", "La asamblea es el jueves, ¿no?", "Sí: «sí» o «no»."],
            ["pregunta retórica", "¿A quién le conviene un estacionamiento más?", "No: afirma «a nadie»."],
            ["pregunta eco", "¿Cómo que no hay permiso?", "Sí: pide una explicación, con sorpresa o enojo."],
          ],
        },
        examples: [
          { es: "Usted vende aquí desde 1990, ¿verdad?", note: "Coletilla: pide confirmación de un dato." },
          { es: "¿Cómo que el puesto ya no es mío? Tengo los papeles.", note: "Eco: rechaza lo que acaba de oír." },
        ],
        mistakes: [
          {
            wrong: "¿Acaso la asamblea es el jueves? (para confirmar la fecha)",
            right: "La asamblea es el jueves, ¿verdad?",
            why: "«¿Acaso…?» anticipa una respuesta negativa y suena a reproche; para confirmar un dato se usa una coletilla.",
          },
        ],
      },
      {
        heading: "Exclamativas que valoran, desean y se sorprenden",
        body: [
          "Las exclamativas de grado expresan que algo sobrepasa lo esperado. Además de las que ya conoces con «qué» + adjetivo, el sistema incluye «¡Cómo + verbo!» para la intensidad de una acción («¡Cómo ha subido el precio del jitomate!»), «¡Cuánto/a/os/as + sustantivo!» para la cantidad, con concordancia («¡Cuánta gente vino!», «¡Cuántos puestos cerrados!») y «¡Lo + adjetivo o adverbio + que…!», donde el adjetivo concuerda con el sustantivo aunque «lo» no cambie («¡Lo baratas que estaban las tortillas!»).",
          "«¡Quién + imperfecto de subjuntivo!» expresa un deseo difícil o imposible para uno mismo: «¡Quién tuviera la energía de don Rubén!» (ojalá yo la tuviera). «¡Quién + pluscuamperfecto de subjuntivo!» expresa sorpresa ante algo que nadie habría previsto: «¡Quién lo hubiera dicho! El mercado lleno un martes». No confundas «quién» exclamativo con «quien» relativo: el primero lleva tilde.",
          "Hay exclamativas coloquiales que conviene reconocer aunque no siempre uses: «¡Qué de…!» (¡Qué de gente!) para la cantidad, «¡Menudo/a…!» (¡Menudo lío!), sobre todo en España, y «¡Si será…!» para un reproche cariñoso. En México es más frecuente «¡Qué tanto…!» o «¡Cuánta…!» que «¡menudo!».",
          "Ortografía: «qué», «cuánto», «cómo», «quién» llevan tilde cuando son exclamativos o interrogativos, también en estilo indirecto («No sabes cuánto lo siento»). Los signos de apertura ¡ ¿ van donde empieza la exclamación o la pregunta, no siempre al principio de la oración: «Y usted, ¿qué propone?». Si una frase es pregunta y exclamación a la vez, puede escribirse ¡¿…?!.",
        ],
        table: {
          caption: "Exclamativas complejas",
          head: ["Estructura", "Ejemplo", "Valor"],
          rows: [
            ["¡Cómo + verbo!", "¡Cómo ha cambiado la colonia!", "intensidad de la acción"],
            ["¡Cuánto/a/os/as + sustantivo!", "¡Cuántas veces vinimos de niños!", "cantidad, con concordancia"],
            ["¡Lo + adjetivo + que…!", "¡Lo amables que eran las marchantas!", "grado; el adjetivo concuerda"],
            ["¡Quién + imperfecto de subjuntivo!", "¡Quién pudiera volver a 1985!", "deseo irrealizable"],
            ["¡Quién + pluscuamperfecto de subjuntivo!", "¡Quién lo hubiera imaginado!", "sorpresa ante lo inesperado"],
          ],
        },
        examples: [
          { es: "¡Lo caros que se han puesto los chiles secos!", note: "«caros» concuerda con «chiles», aunque «lo» sea neutro." },
          { es: "¡Quién supiera cocinar como la señora de las quesadillas!", note: "Deseo para uno mismo: imperfecto de subjuntivo." },
          { es: "Y tú, ¿cuánto pagas por el local?", note: "Los signos abren donde empieza la pregunta." },
        ],
        mistakes: [
          {
            wrong: "¡Cuánto gente había en la feria del mole!",
            right: "¡Cuánta gente había en la feria del mole!",
            why: "«Cuánto» concuerda con el sustantivo: «gente» es femenino singular.",
          },
          {
            wrong: "¡Lo barato que estaban las flores!",
            right: "¡Lo baratas que estaban las flores!",
            why: "El adjetivo concuerda con «las flores»; solo «lo» queda invariable.",
          },
          {
            wrong: "¡Quien pudiera dormir hasta tarde!",
            right: "¡Quién pudiera dormir hasta tarde!",
            why: "En la exclamativa de deseo, «quién» es tónico y lleva tilde.",
          },
        ],
        tip: "Para decidir la tilde, lee en voz alta: si la palabra se pronuncia con fuerza y encabeza una pregunta o una exclamación, aunque sea indirecta, lleva tilde.",
      },
    ],
  },
  grammar: {
    intro: "Empieza por lo que afirma cada pregunta, sigue con la elección entre pregunta real y retórica y termina con las exclamativas y su ortografía.",
    exercises: [
      {
        id: "c1-16-gramatica-polaridad",
        type: "context",
        prompt: "Lee lo que dice cada persona en la asamblea del mercado y decide qué afirma realmente.",
        items: [
          {
            context: "Una locataria, ante la propuesta de cerrar los domingos: «¿Quién no ha venido aquí un domingo por barbacoa?».",
            q: "¿Qué afirma la locataria?",
            options: ["Que pocas personas vienen los domingos.", "Que casi todo el mundo ha venido un domingo por barbacoa.", "Que no sabe quién viene los domingos."],
            answer: 1,
            why: "Pregunta negativa con «quién no»: afirma «todos».",
          },
          {
            context: "Un vecino joven, sobre la plaza comercial que proponen construir: «¿Acaso esa plaza va a vender quelites y huitlacoche?».",
            q: "¿Qué da a entender el vecino?",
            options: ["Que la plaza no venderá esos productos.", "Que duda si la plaza venderá esos productos.", "Que la plaza venderá esos productos más baratos."],
            answer: 0,
            why: "«¿Acaso…?» orienta la respuesta hacia el no.",
          },
          {
            context: "El administrador, cuando le reclaman que la pintura nueva es de otro color: «¿Y qué más da el color, si ya no gotea?».",
            q: "¿Qué función tiene la pregunta?",
            options: ["Pide la opinión de los vecinos sobre el color.", "Pregunta qué color prefieren.", "Le resta importancia al reclamo."],
            answer: 2,
            why: "«¿Qué más da…?» niega la importancia de lo que se discute.",
          },
          {
            context: "Una vendedora de flores, a quien le preguntan si se mudará al nuevo local: «¿Cómo me voy a ir, si mis clientas me buscan aquí?».",
            q: "¿Qué responde en realidad?",
            options: ["Que se irá en cuanto pueda.", "Que no piensa irse.", "Que todavía no lo ha decidido."],
            answer: 1,
            why: "«¿Cómo voy a…?» sin negación afirma que no es posible o no tiene sentido.",
          },
        ],
      },
      {
        id: "c1-16-gramatica-tipo",
        type: "classify",
        prompt: "Clasifica cada pregunta según su función en la conversación.",
        categories: ["Pregunta real o coletilla", "Pregunta retórica", "Pregunta eco"],
        items: [
          { text: "La reunión con la alcaldía es a las seis, ¿no?", cat: 0, why: "Coletilla que pide confirmar un dato." },
          { text: "¿Para qué queremos cajones de estacionamiento si todos llegamos a pie?", cat: 1, why: "Niega la utilidad: no los necesitamos." },
          { text: "¿Cómo que la licencia vence este mes?", cat: 2, why: "Repite lo oído con sorpresa y pide explicación." },
          { text: "¿A qué hora llega el camión de la fruta los lunes?", cat: 0, why: "Pide información nueva." },
          { text: "¿Has probado en tu vida un pan de elote como este?", cat: 1, why: "«En tu vida» delata la pregunta retórica: afirma que no hay otro igual." },
          { text: "¿Cómo que no hay presupuesto para el techo?", cat: 2, why: "Eco de lo que alguien acaba de decir, con rechazo." },
        ],
      },
      {
        id: "c1-16-gramatica-exclamativas",
        type: "gap",
        prompt: "Completa cada exclamativa con la forma adecuada. Fíjate en la tilde y en la concordancia.",
        items: [
          { q: "¡___ veces nos han prometido arreglar el drenaje y seguimos igual! [cuánto]", answers: [["Cuántas", "cuántas"]], why: "Femenino plural, como «veces», y con tilde." },
          { q: "¡Lo ___ que estaban las tunas este año! [dulce]", answers: [["dulces"]], why: "El adjetivo concuerda con «las tunas»." },
          { q: "¡Quién ___ tener un puesto en este pasillo! [poder]", answers: [["pudiera", "pudiese"]], why: "Deseo para uno mismo: imperfecto de subjuntivo." },
          { q: "¡Quién lo ___ pensado: la alcaldía nos dio la razón! [haber]", answers: [["hubiera", "hubiese"]], why: "Sorpresa ante lo inesperado: pluscuamperfecto de subjuntivo." },
          { q: "¡___ ha crecido el hijo de la señora del atole! [cómo]", answers: [["Cómo", "cómo"]], why: "«Cómo» + verbo: intensidad de un cambio; lleva tilde." },
          { q: "¡___ gente vino a firmar la carta! [cuánto]", answers: [["Cuánta", "cuánta"]], why: "Femenino singular, como «gente»." },
        ],
      },
      {
        id: "c1-16-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de forma, de tilde o de sentido. Corrígela.",
        items: [
          {
            sentence: "¿Cómo no voy a cerrar el puesto? Me encanta y no pienso cerrarlo.",
            answers: ["¿Cómo voy a cerrar el puesto? Me encanta y no pienso cerrarlo."],
            why: "Para afirmar que no lo cerrará, la pregunta va sin negación: «¿Cómo voy a…?».",
          },
          {
            sentence: "¡Lo bonito que han quedado las lámparas nuevas!",
            answers: ["¡Lo bonitas que han quedado las lámparas nuevas!"],
            why: "El adjetivo concuerda con «las lámparas»: bonitas.",
          },
          {
            sentence: "¿Para qué no necesitamos más cajones si nadie viene en coche?",
            answers: ["¿Para qué necesitamos más cajones si nadie viene en coche?"],
            why: "«¿Para qué…?» ya niega la utilidad; con «no» la pregunta pierde el sentido que se busca.",
          },
          {
            sentence: "¡Quien hubiera dicho que el mercado cumpliría setenta años!",
            answers: ["¡Quién hubiera dicho que el mercado cumpliría setenta años!", "¡Quién lo hubiera dicho! El mercado cumple setenta años."],
            why: "«Quién» exclamativo es tónico y lleva tilde.",
          },
        ],
      },
      {
        id: "c1-16-gramatica-reformular",
        type: "open",
        prompt: "Reformula según se te pide. Compara después con el modelo y revisa con la lista.",
        items: [
          {
            prompt: "Convierte esta afirmación en una pregunta retórica sin cambiar lo que afirma: «Nadie quiere que el mercado se convierta en estacionamiento».",
            model: "¿Quién quiere que el mercado se convierta en estacionamiento? / ¿Acaso alguien quiere que el mercado se convierta en estacionamiento?",
            checklist: ["La pregunta es afirmativa, porque afirma algo negativo.", "Conservo el subjuntivo de «que se convierta».", "Uso bien los signos de apertura y cierre."],
          },
          {
            prompt: "Convierte en pregunta retórica: «Todos hemos comprado alguna vez flores en este mercado para el Día de Muertos».",
            model: "¿Quién no ha comprado alguna vez flores en este mercado para el Día de Muertos?",
            checklist: ["La pregunta es negativa, porque afirma algo positivo.", "Paso de «todos» a «quién no»."],
          },
          {
            prompt: "Expresa con dos exclamativas distintas (una de deseo y otra de sorpresa) lo que siente un locatario jubilado al ver el mercado lleno de jóvenes.",
            model: "¡Quién tuviera veinte años para empezar otra vez aquí! ¡Quién me hubiera dicho que vería el mercado lleno de jóvenes!",
            checklist: ["Uso imperfecto de subjuntivo para el deseo.", "Uso pluscuamperfecto de subjuntivo para la sorpresa.", "«Quién» lleva tilde en las dos."],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de un mercado público de la Ciudad de México y de la discusión vecinal sobre su futuro. Algunas palabras son propias de México; se indica cuando conviene.",
    groups: [
      {
        title: "El mercado por dentro",
        items: [
          { es: "el locatario", note: "persona que tiene un local o puesto fijo en un mercado público" },
          { es: "el puesto", note: "espacio donde se vende dentro del mercado" },
          { es: "la fonda", note: "pequeño restaurante popular, a menudo dentro del mercado" },
          { es: "la marchanta", note: "en México, clienta habitual de un puesto; también la vendedora que la atiende" },
          { es: "el pasillo de comidas", note: "zona del mercado donde se concentran las fondas" },
          { es: "el tianguis", note: "en México, mercado callejero que se instala ciertos días" },
          { es: "surtir el puesto", note: "abastecerlo de mercancía" },
          { es: "a granel", note: "sin envase, por peso o por medida" },
        ],
      },
      {
        title: "La discusión vecinal",
        items: [
          { es: "la remodelación", note: "obra para renovar un edificio sin cambiar su uso" },
          { es: "la plaza comercial", note: "en México, centro comercial" },
          { es: "la alcaldía", note: "en la Ciudad de México, gobierno de cada demarcación territorial" },
          { es: "el uso de suelo", note: "destino legal de un terreno: habitacional, comercial, etc." },
          { es: "recabar firmas", note: "reunir firmas para apoyar una petición" },
          { es: "echar abajo", note: "derribar un edificio; también rechazar una propuesta" },
          { es: "el arraigo", note: "vínculo profundo con un lugar" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-16-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el locatario", right: "persona que tiene un puesto fijo en un mercado público" },
          { left: "el tianguis", right: "mercado callejero que se instala ciertos días" },
          { left: "a granel", right: "sin envase, por peso o por medida" },
          { left: "el uso de suelo", right: "destino legal de un terreno" },
          { left: "recabar firmas", right: "reunir apoyos por escrito para una petición" },
          { left: "el arraigo", right: "vínculo profundo con un lugar" },
        ],
      },
      {
        id: "c1-16-lexico-uso",
        type: "gap",
        prompt: "Completa el cartel de la asociación de locatarios con la expresión adecuada.",
        bank: ["remodelación", "echar abajo", "surtir", "alcaldía"],
        items: [
          { q: "¿Quién quiere ___ un edificio que da de comer a toda la colonia?", answers: [["echar abajo"]] },
          { q: "Pedimos a la ___ una reunión pública antes de firmar cualquier contrato.", answers: [["alcaldía"]] },
          { q: "Sí a la ___ del techo y de los baños; no a la plaza comercial.", answers: [["remodelación"]] },
          { q: "Durante la obra, ¿cómo vamos a ___ los puestos sin acceso para los camiones?", answers: [["surtir"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La melodía de la pregunta retórica, de la pregunta real y de la exclamativa",
    explanation: [
      "Una pregunta total real (de sí o no) suele terminar con un ascenso claro: «¿Abren el domingo?↑». La pregunta retórica, aunque tenga la misma forma, se pronuncia muchas veces con un final descendente o apenas suspendido, como una afirmación, porque el hablante no deja hueco para responder: «¿Acaso los coches compran fruta?↓».",
      "Las preguntas con interrogativo («quién», «para qué») descienden en ambos casos; lo que distingue la retórica es el énfasis sobre la palabra clave y una pausa breve después, para que el oyente complete la respuesta en su cabeza. La coletilla «¿no?» o «¿verdad?» forma su propio grupo y sube.",
      "En la exclamativa, la palabra exclamativa («cómo», «cuánto», «quién») recibe un acento muy marcado y la curva cae al final con fuerza. En el habla de la Ciudad de México es frecuente un alargamiento de la sílaba tónica final en la exclamación. El audio es sintético: sirve para percibir el contraste, no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Tres melodías",
      head: ["Tipo", "Ejemplo", "Final"],
      rows: [
        ["pregunta real", "¿Ya llegó el camión del pescado?", "ascendente"],
        ["pregunta retórica", "¿Acaso alguien nos preguntó?", "descendente, como una afirmación"],
        ["exclamativa", "¡Cómo ha llovido esta semana!", "acento fuerte en «cómo» y caída final"],
      ],
    },
    perceive: {
      id: "c1-16-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué tipo de enunciado es por su melodía y su contenido.",
      items: [
        {
          q: "¿Qué tipo de pregunta es la que oyes sobre los domingos?",
          options: ["Una pregunta retórica que afirma algo.", "Una pregunta real que pide un dato."],
          answer: 1,
          why: "El final sube y la pregunta pide información: si abren o no.",
          audio: "¿El mercado abre los domingos en diciembre?",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué tipo de pregunta es la que oyes sobre la plaza comercial?",
          options: ["Una pregunta real que pide un dato.", "Una pregunta retórica que afirma algo."],
          answer: 1,
          why: "Final descendente y «acaso»: afirma que nadie la pidió.",
          audio: "¿Acaso alguien pidió una plaza comercial en esta esquina?",
          voice: "es-MX-m",
        },
        {
          q: "¿Qué parte de la frase sobre la asamblea sube al final?",
          options: ["La palabra «jueves».", "La coletilla «verdad»."],
          answer: 1,
          why: "La coletilla forma su propio grupo y sube para pedir confirmación.",
          audio: "La asamblea es el jueves a las siete, ¿verdad?",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué expresa la exclamación sobre la energía de don Rubén?",
          options: ["Un deseo para quien habla.", "Una sorpresa ante algo pasado.", "Una pregunta sobre quién tiene energía."],
          answer: 0,
          why: "«¡Quién tuviera…!» con imperfecto de subjuntivo: deseo.",
          audio: "¡Quién tuviera la energía de don Rubén a sus ochenta años!",
          voice: "es-MX-m",
        },
      ],
    },
    produce: [
      { text: "¿Quién no ha comido alguna vez en estas fondas?", tip: "Acento fuerte en «no» y final descendente: no esperas respuesta.", voice: "es-MX-f" },
      { text: "Usted es locatario desde hace treinta años, ¿no?", tip: "Pausa antes de la coletilla y subida en «no».", voice: "es-MX-m" },
      { text: "¡Cuánta gente ha pasado por estos pasillos!", tip: "Marca «cuánta» y deja caer la voz al final.", voice: "es-MX-f" },
      { text: "¡Quién lo hubiera dicho: setenta años y sigue de pie!", tip: "Primera exclamación con caída fuerte, breve pausa y segunda parte más rápida.", voice: "es-MX-m" },
    ],
    spelling: "Los signos ¡ y ¿ se abren donde empieza la exclamación o la pregunta, aunque haya algo antes: «Y tú, ¿qué harías?». «Qué», «cuánto», «cómo» y «quién» llevan tilde también cuando dependen de otro verbo: «No te imaginas cuánto trabajamos».",
  },
  listening: {
    title: "El mercado al aire",
    context: "Programa de una radio comunitaria de la colonia Portales, en la Ciudad de México. Marisol, la conductora, entrevista a Rubén, locatario del mercado desde hace cuarenta años, y a Ximena, urbanista que asesora a la alcaldía. Escucha primero sin transcripción. El mercado, el proyecto y las personas son ficticios; las voces son sintéticas y no se presentan como una variedad regional verificada.",
    speakers: [
      { id: "m", name: "Marisol", voice: "es-MX-f", role: "Conductora del programa" },
      { id: "r", name: "Rubén", voice: "es-MX-m", role: "Locatario de un puesto de semillas y chiles secos" },
      { id: "x", name: "Ximena", voice: "es-MX-f", role: "Urbanista asesora de la alcaldía" },
    ],
    script: [
      { speaker: "m", text: "Buenas tardes, Portales. Hoy hablamos del mercado La Paloma, que cumple setenta años con el techo lleno de goteras y con un proyecto que propone convertir la planta alta en estacionamiento. Don Rubén, usted vende ahí desde 1984, ¿verdad?" },
      { speaker: "r", text: "Desde el ochenta y cuatro, sí. Y mire, yo les pregunto a los de la alcaldía: ¿quién viene al mercado en coche? La señora que compra medio kilo de frijol viene caminando con su bolsa. ¿Para qué queremos ochenta cajones de estacionamiento, si lo que nos falta es un techo que no se caiga?" },
      { speaker: "x", text: "Entiendo el enojo, don Rubén, pero el estacionamiento no sale de la nada. Los proveedores llegan de madrugada y se paran en doble fila; los vecinos de la calle Odesa llevan años quejándose. Con la planta alta resolveríamos la carga y la descarga." },
      { speaker: "r", text: "¿Cómo que la carga y la descarga? Eso nunca lo dijeron en la junta. Nos hablaron de clientes, de una plaza con cafeterías. ¿Acaso nos han enseñado algún plano? Ni uno, señorita, ni uno." },
      { speaker: "m", text: "Ximena, ¿existe ese plano? Porque es lo que más preguntan nuestros radioescuchas." },
      { speaker: "x", text: "Existe un anteproyecto, y tiene razón don Rubén en que no se ha presentado como se debía. Lo voy a decir claro: el uso principal de la planta alta todavía no está decidido. Por eso hacemos la consulta. ¿Qué sentido tendría consultar si ya estuviera todo firmado?" },
      { speaker: "r", text: "Pues ojalá sea así. Yo lo único que digo es que este mercado ha dado de comer a tres generaciones. ¡Cuántas familias han salido adelante con un puesto de cuatro metros! ¡Y lo poco que nos han ayudado en todos estos años!" },
      { speaker: "m", text: "Tenemos una llamada. Dice doña Chayo, de la fonda del pasillo de comidas: ¡Quién me hubiera dicho que la alcaldía iba a venir a preguntarnos algo! Y añade: ¡quién tuviera veinte años para pelear como antes!" },
      { speaker: "x", text: "Pues que venga doña Chayo a la consulta del sábado, que su voz cuenta igual que la mía. Y una cosa más: ¿alguien cree de verdad que vamos a echar abajo un edificio que es patrimonio del barrio? Nadie en la alcaldía lo propone." },
      { speaker: "r", text: "Eso lo vamos a ver el sábado. ¡Cómo ha cambiado el discurso desde que recabamos las firmas! Pero bueno, allí estaremos, ¿cómo no vamos a estar?" },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha el programa completo sin abrir la transcripción. ¿De qué se discute y en qué termina?",
        exercise: {
          id: "c1-16-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Cuál es el tema central del programa sobre La Paloma?",
              options: ["La venta del mercado a una empresa privada.", "El uso que se dará a la planta alta del mercado y el estado del edificio.", "La subida de los alquileres de los puestos."],
              answer: 1,
              why: "Se discute el estacionamiento propuesto para la planta alta y las goteras del techo.",
            },
            {
              q: "¿Cómo termina la conversación entre Rubén y Ximena?",
              options: ["Ambos aceptan verse en la consulta del sábado.", "Rubén se niega a participar en la consulta.", "Ximena retira el proyecto del estacionamiento."],
              answer: 0,
              why: "Ximena invita a la consulta y Rubén responde «¿cómo no vamos a estar?», es decir, que sí irán.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c1-16-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles y lo que afirma cada pregunta.",
          items: [
            {
              q: "¿Qué quiere decir Rubén con «¿Quién viene al mercado en coche?»?",
              options: ["Que no sabe cuántos clientes vienen en coche.", "Que casi nadie viene en coche.", "Que muchos clientes vienen en coche."],
              answer: 1,
              why: "Pregunta retórica afirmativa: afirma «casi nadie».",
            },
            {
              q: "¿Qué argumento nuevo aporta Ximena a favor del estacionamiento?",
              options: ["La carga y descarga de los proveedores.", "La llegada de más clientes de otras colonias.", "Los ingresos que daría a la alcaldía."],
              answer: 0,
              why: "Habla de los proveedores en doble fila y de las quejas de la calle Odesa.",
            },
            {
              q: "¿Qué reconoce Ximena?",
              options: ["Que el plano definitivo ya está firmado.", "Que el edificio se va a derribar.", "Que el anteproyecto no se presentó como se debía."],
              answer: 2,
              why: "Admite que don Rubén tiene razón en ese punto.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en las preguntas y exclamaciones del programa. Responde y luego consulta la transcripción.",
        exercise: {
          id: "c1-16-escucha-notice",
          type: "match",
          prompt: "Relaciona cada enunciado del programa con lo que expresa.",
          pairs: [
            { left: "usted vende ahí desde 1984, ¿verdad?", right: "pide confirmar un dato" },
            { left: "¿Cómo que la carga y la descarga?", right: "repite lo oído con sorpresa y rechazo" },
            { left: "¿Qué sentido tendría consultar si ya estuviera todo firmado?", right: "afirma que la consulta no está decidida de antemano" },
            { left: "¡Quién tuviera veinte años para pelear como antes!", right: "expresa un deseo irrealizable" },
            { left: "¿cómo no vamos a estar?", right: "afirma que claro que irán" },
          ],
          why: "Cada forma tiene su función: coletilla, eco, retórica, deseo y afirmación con «cómo no».",
        },
      },
    ],
  },
  reading: {
    title: "Setenta años bajo el mismo techo",
    genre: "Columna de opinión en un periódico de barrio",
    frame: "Columna de Leticia Arroyo, vecina de la colonia Portales, para el periódico vecinal «La Voz de Portales». El mercado, el proyecto y las personas son ficticios.",
    text: [
      "¿Quién no tiene un recuerdo en el mercado La Paloma? Yo tengo varios, y casi todos huelen a algo: a la canela del puesto de doña Inés, a las tortillas recién hechas de la entrada, al mole que doña Chayo prepara los jueves desde antes de que yo naciera. Por eso, cuando leí en el boletín de la alcaldía que la planta alta podría convertirse en estacionamiento, me pregunté lo mismo que muchos de ustedes: ¿de verdad alguien ha pensado en lo que significa este edificio para la colonia?",
      "No escribo contra la remodelación. ¿Cómo voy a oponerme a que arreglen un techo que gotea sobre los jitomates cada vez que llueve? Lo que pido es que se discuta para qué sirve el mercado y para quién. Las cifras que da la propia alcaldía son elocuentes: siete de cada diez compradores llegan a pie, y el resto, en transporte público o en bicicleta. ¿Para qué necesitamos, entonces, ochenta cajones de estacionamiento? ¿Acaso esos coches van a comprar epazote?",
      "Sé que hay otro argumento, más serio, y conviene escucharlo. Los proveedores que surten los puestos llegan de madrugada y bloquean la calle Odesa, y los vecinos de esa cuadra tienen motivos para quejarse. Pero un problema de carga y descarga no se resuelve con una plaza comercial de dos pisos; se resuelve con un horario, una bahía de descarga y alguien que haga cumplir las reglas. ¿Hace falta transformar un edificio entero para lograrlo?",
      "¡Cuánto ha cambiado la colonia en los últimos años! Han llegado cafeterías de especialidad, departamentos nuevos y vecinos jóvenes que trabajan desde casa. Algunos dicen que el mercado debe adaptarse a ellos, y tienen parte de razón. ¡Lo bien que le vendría al pasillo de comidas abrir por la noche, o a los puestos aceptar pagos con tarjeta! Pero adaptarse no es dejar de ser lo que uno es. Los jóvenes que se mudaron a Portales no vinieron buscando otra plaza comercial; vinieron, entre otras cosas, por lugares como este.",
      "La semana pasada, mientras recababa firmas en la entrada, una señora me dijo: «¡Quién me hubiera dicho que a mis años iba a firmar para salvar el mercado donde me compraban los zapatos de la escuela!». Y un muchacho que no tendría más de veinte añadió, medio en broma: «¡Quién tuviera la paciencia de estos señores para estar aquí desde las seis!». Las dos frases dicen lo mismo con palabras distintas: el mercado no es solo un lugar para comprar, sino una forma de vivir el barrio.",
      "El sábado habrá una consulta en el patio del mercado. La alcaldía asegura que nada está decidido, y quiero creerle. Pero una consulta solo tiene sentido si se presentan los planos, los costos y las alternativas. ¿Qué podemos opinar si no sabemos qué se propone? Por eso invito a todos a ir, a preguntar y a exigir respuestas claras. Y si alguien piensa que una sola voz no cambia nada, que se acuerde de cómo empezó este mercado: con un grupo de vendedores que en 1955 se negaron a seguir vendiendo en la banqueta.",
    ],
    glossary: [
      { es: "elocuente", note: "que muestra algo con mucha claridad" },
      { es: "la bahía de descarga", note: "espacio reservado junto a la acera para que los vehículos descarguen" },
      { es: "la banqueta", note: "en México, la acera" },
    ],
    tasks: [
      {
        id: "c1-16-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la columna.",
        items: [
          {
            q: "¿Qué postura defiende la autora sobre la remodelación del mercado?",
            options: ["Se opone a cualquier obra en el edificio.", "Acepta el estacionamiento si se arregla el techo.", "Apoya arreglar el edificio, pero rechaza transformarlo en plaza con estacionamiento."],
            answer: 2,
            why: "Dice que no escribe contra la remodelación y que pide discutir para qué sirve el mercado.",
          },
          {
            q: "¿Cómo trata la autora el argumento de los proveedores?",
            options: ["Lo reconoce como serio y propone otra solución.", "Lo considera una excusa sin fundamento.", "Lo ignora por completo."],
            answer: 0,
            why: "Admite que los vecinos tienen motivos y propone horario y bahía de descarga.",
          },
          {
            q: "¿Para qué cuenta la anécdota de 1955?",
            options: ["Para mostrar que el mercado siempre tuvo problemas.", "Para animar a participar: una acción colectiva creó el mercado.", "Para explicar por qué el edificio es tan viejo."],
            answer: 1,
            why: "La usa para responder a quien cree que una voz no cambia nada.",
          },
        ],
      },
      {
        id: "c1-16-lectura-clasificar",
        type: "classify",
        prompt: "Clasifica cada enunciado de la columna según lo que hace.",
        categories: ["Pregunta retórica que afirma algo", "Exclamativa de grado", "Exclamativa de deseo o de sorpresa"],
        items: [
          { text: "¿Acaso esos coches van a comprar epazote?", cat: 0, why: "Orientada al no: los coches no compran." },
          { text: "¡Cuánto ha cambiado la colonia en los últimos años!", cat: 1, why: "Intensidad de un cambio." },
          { text: "¡Quién tuviera la paciencia de estos señores…!", cat: 2, why: "Deseo con imperfecto de subjuntivo." },
          { text: "¿Cómo voy a oponerme a que arreglen un techo que gotea…?", cat: 0, why: "Sin negación: afirma que no se opone." },
          { text: "¡Lo bien que le vendría al pasillo de comidas abrir por la noche…!", cat: 1, why: "«Lo» + adverbio + que: grado." },
          { text: "¡Quién me hubiera dicho que a mis años iba a firmar…!", cat: 2, why: "Sorpresa con pluscuamperfecto de subjuntivo." },
        ],
      },
      {
        id: "c1-16-lectura-evaluacion",
        type: "open",
        prompt: "Valora la estrategia de la columna con argumentos propios.",
        items: [
          {
            prompt: "La columna usa muchas preguntas retóricas. En 70–90 palabras, explica si te parecen eficaces o excesivas y qué pregunta eliminarías o cambiarías por una afirmación.",
            model: "En general me parecen eficaces, porque obligan al lector a sacar la conclusión y casi siempre van al final de un párrafo. Sin embargo, el segundo párrafo acumula tres y la última, «¿Acaso esos coches van a comprar epazote?», suena burlona. La cambiaría por un dato: «Ninguno de esos coches comprará en los puestos». Así la columna mantendría la fuerza sin dar la impresión de ridiculizar a quien piensa distinto.",
            checklist: ["Doy una valoración clara.", "Cito una pregunta concreta de la columna.", "Propongo una alternativa y explico qué gana el texto."],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa dónde coloca la autora sus preguntas y exclamaciones y qué consigue con cada una.",
      items: [
        { quote: "¿Quién no tiene un recuerdo en el mercado La Paloma?", note: "Abre con una pregunta negativa que afirma «todos»: incluye al lector desde la primera línea." },
        { quote: "¿Cómo voy a oponerme a que arreglen un techo que gotea sobre los jitomates cada vez que llueve?", note: "«¿Cómo voy a…?» sin negación: afirma que no se opone y desactiva una acusación previsible." },
        { quote: "¿Hace falta transformar un edificio entero para lograrlo?", note: "Cierra el párrafo de la concesión con una pregunta que el lector responde con un «no»." },
        { quote: "¡Quién me hubiera dicho que a mis años iba a firmar para salvar el mercado", note: "Sorpresa con pluscuamperfecto de subjuntivo, dentro de una cita." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención, puntuación y escritura breve sobre la discusión del mercado.",
    exercises: [
      {
        id: "c1-16-orden",
        type: "order",
        prompt: "Ordena las palabras para formar preguntas y exclamaciones del debate.",
        items: [
          { words: ["¿Quién", "no", "ha", "comprado", "aquí", "su", "primer", "uniforme?"], why: "Pregunta negativa: afirma que casi todos lo han hecho." },
          { words: ["¡Lo", "contentas", "que", "están", "las", "locatarias", "con", "el", "techo", "nuevo!"], why: "«Lo» + adjetivo concordado + que + verbo." },
          { words: ["¿Para", "qué", "pintar", "la", "fachada", "si", "llueve", "dentro?"], why: "«¿Para qué…?» niega la utilidad." },
        ],
      },
      {
        id: "c1-16-intencion",
        type: "context",
        prompt: "Elige el enunciado que mejor cumple la intención indicada.",
        items: [
          {
            context: "En la consulta, una vecina quiere comprobar que la alcaldía publicará los planos antes del sábado.",
            q: "¿Qué dice si quiere una respuesta real y no un enfrentamiento?",
            options: ["¿Acaso van a publicar los planos?", "Van a publicar los planos antes del sábado, ¿verdad?", "¿Cómo que van a publicar los planos?"],
            answer: 1,
            why: "La coletilla pide confirmación; «acaso» y «cómo que» suenan a desconfianza o reproche.",
          },
          {
            context: "Un locatario quiere afirmar con fuerza, ante el público, que nadie de la colonia pidió un estacionamiento.",
            q: "¿Qué enunciado lo afirma como pregunta retórica?",
            options: ["¿Alguien de la colonia pidió un estacionamiento, por favor?", "¿Quién de la colonia no pidió un estacionamiento?", "¿Quién de esta colonia pidió un estacionamiento?"],
            answer: 2,
            why: "Pregunta afirmativa: afirma «nadie». Con «no» afirmaría «todos».",
          },
          {
            context: "Una fondera de setenta años ve a su nieta atender el puesto con soltura y quiere expresar que ella ya no tiene esa agilidad.",
            q: "¿Qué exclamación expresa su deseo?",
            options: ["¡Quién tuviera tus manos, mija!", "¡Quién hubiera tenido tus manos!", "¡Cuántas manos tienes, mija!"],
            answer: 0,
            why: "Deseo presente para una misma: imperfecto de subjuntivo.",
          },
        ],
      },
      {
        id: "c1-16-signos",
        type: "error",
        prompt: "Corrige la ortografía de cada frase: signos de apertura y tildes.",
        items: [
          {
            sentence: "Y la alcaldía ¿cuando piensa arreglar los baños?",
            answers: ["Y la alcaldía, ¿cuándo piensa arreglar los baños?"],
            why: "«Cuándo» interrogativo lleva tilde, y el tema que va delante se separa con coma antes del signo de apertura.",
          },
          {
            sentence: "No te imaginas cuanto ha costado reunir las firmas.",
            answers: ["No te imaginas cuánto ha costado reunir las firmas."],
            why: "Exclamativo indirecto: «cuánto» lleva tilde aunque no haya signos.",
          },
          {
            sentence: "¡Como han subido los precios del aguacate este mes!",
            answers: ["¡Cómo han subido los precios del aguacate este mes!"],
            why: "«Cómo» exclamativo + verbo lleva tilde.",
          },
        ],
      },
      {
        id: "c1-16-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 40–60 palabras el cierre de un discurso a favor de conservar el pasillo de comidas. Incluye una pregunta retórica negativa y una exclamativa de grado.",
            model: "Nos dicen que el pasillo de comidas es poco rentable. ¿Quién no ha resuelto aquí una comida rápida y barata entre semana? ¡Cuántos estudiantes, oficinistas y albañiles se sientan cada día en estas bancas! Cerrarlo sería cerrar el comedor de media colonia, y eso no aparece en ninguna hoja de cálculo.",
            checklist: ["La pregunta es negativa y afirma «todos».", "La exclamativa concuerda («cuántos estudiantes»).", "El cierre deja una idea clara."],
          },
          {
            prompt: "Reescribe en 40–60 palabras, sin preguntas retóricas ni exclamaciones, este mensaje para enviarlo a la alcaldía: «¿Acaso alguien nos preguntó? ¡Cuánto desprecio por los locatarios! ¿Para qué consultar si ya está todo decidido?».",
            model: "Los locatarios no fuimos consultados antes de elaborar el anteproyecto, y eso nos ha causado un profundo malestar. Consideramos que una consulta solo tiene sentido si el proyecto no está decidido. Por ello solicitamos que se presenten los planos y los costos antes de la reunión del sábado.",
            checklist: ["Convierto cada pregunta en una afirmación con el mismo sentido.", "Uso un registro formal y respetuoso.", "Cierro con una petición concreta."],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe una columna de opinión (240–320 palabras) para el periódico vecinal sobre un espacio de tu barrio o ciudad que esté en riesgo de desaparecer o de cambiar de uso: un mercado, una plaza, un cine, una biblioteca.",
    context: "La columna se publicará con tu nombre y la leerán vecinos de todas las edades, también quienes apoyan el cambio. Puedes usar los datos del mercado La Paloma o tu propia experiencia. Usa preguntas retóricas y exclamativas con medida, para que el lector saque conclusiones, no para ridiculizar al otro bando.",
    steps: [
      "Escribe en una línea tu tesis y anota el argumento más fuerte del otro lado.",
      "Decide dónde irán dos o tres preguntas retóricas (al final de un párrafo o antes de la tesis) y una o dos exclamativas.",
      "Redacta la columna en cuatro párrafos: recuerdo o situación, tesis, concesión al otro lado y llamada a la acción.",
      "Revisa la polaridad de cada pregunta, la tilde de los exclamativos y la posición de los signos de apertura, y corrige cualquier pregunta que suene burlona.",
    ],
    useLanguage: [
      "¿Quién no ha… alguna vez?",
      "¿Acaso…? / ¿Para qué…?",
      "¿Cómo vamos a…, si…?",
      "¡Cuánto/a/os/as…! / ¡Cómo ha…!",
      "¡Lo + adjetivo + que…!",
      "¡Quién hubiera dicho que…!",
    ],
    model: [
      "¿Quién no ha pasado una tarde en el cine Lido? Durante cincuenta años fue la única sala de la colonia donde una entrada costaba menos que una pizza, y donde los domingos se juntaban abuelos, parejas y estudiantes. Ahora el edificio está en venta y el rumor es que se convertirá en una tienda de conveniencia. ¿De verdad necesita el barrio la quinta tienda de este tipo en tres cuadras?",
      "No defiendo el cine por nostalgia. ¡Cuánto ha cambiado la forma de ver películas desde que abrió! Hoy casi todos tenemos plataformas en casa, y entiendo que el negocio ya no se sostenga como antes. Los dueños tienen derecho a vender, y sería injusto pedirles que pierdan dinero para que los demás conservemos un recuerdo.",
      "Pero entre mantenerlo como estaba y derribarlo hay muchas opciones. Una cooperativa vecinal podría alquilar la sala para cineclubes, obras de teatro escolar o asambleas. Otras colonias lo han hecho con éxito, y nadie diría que viven peor por ello. ¿Para qué demoler un espacio que podría reunir a gente que hoy no tiene dónde encontrarse? ¡Lo poco que costaría intentarlo antes de firmar la venta!",
      "Por eso propongo una reunión abierta el próximo jueves en la parroquia para formar esa cooperativa y presentar una oferta a los dueños. Si no funciona, al menos lo habremos intentado. ¡Quién nos hubiera dicho, cuando íbamos de niños a la matiné, que algún día tendríamos que salvar el Lido! Ese día ha llegado, y no podemos faltar.",
    ],
    checklist: [
      "Cada pregunta retórica afirma lo que quiero afirmar (comprobé su polaridad).",
      "No uso más de una pregunta retórica por párrafo.",
      "Los exclamativos llevan tilde y los signos de apertura están en su sitio.",
      "Reconozco el argumento contrario antes de responderlo.",
      "El último párrafo propone algo concreto.",
    ],
    words: [240, 320],
  },
  speaking: {
    intro: "Prepárate con palabras clave. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Alegato en la consulta del sábado",
        prompt: "Tienes cuatro minutos en la consulta pública del mercado. Defiende tu postura sobre el uso de la planta alta (estacionamiento, comedor comunitario, talleres u otra idea). Usa al menos tres preguntas retóricas con polaridad distinta, dos exclamativas y una concesión al argumento de la carga y descarga.",
        prep: [
          "Escribe tu propuesta en una frase.",
          "Prepara una pregunta con «¿quién no…?», otra con «¿para qué…?» y otra con «¿acaso…?».",
          "Piensa en una exclamativa de grado y otra de deseo o sorpresa para el cierre.",
        ],
        seconds: 240,
        model: "Buenas tardes. Vengo a defender un comedor comunitario en la planta alta. ¿Quién no conoce a algún vecino que come solo todos los días? Los proveedores necesitan descargar, es verdad, y eso se resuelve con un horario y una bahía en la calle. Pero ¿para qué usar un piso entero en coches que llegan dos horas al día? ¡Cuántas comidas podríamos servir en ese espacio!…",
        selfCheck: [
          "Mis preguntas retóricas tienen final descendente y no dejo hueco para responder.",
          "Hago al menos una concesión antes de responder.",
          "Cierro con una exclamativa y una propuesta.",
        ],
      },
      {
        title: "Aclarar con la urbanista",
        prompt: "Después de la consulta hablas con Ximena, la urbanista. Necesitas datos reales: pregúntale por el costo del techo, por las fechas y por quién decidirá. Usa preguntas reales y coletillas para confirmar lo que entiendes, y una sola pregunta eco si algo te sorprende.",
        prep: [
          "Escribe tres preguntas reales con interrogativo.",
          "Prepara dos coletillas para confirmar datos («…, ¿verdad?»).",
        ],
        seconds: 150,
        model: "Ximena, ¿cuánto costaría cambiar solo el techo? Y la obra empezaría en marzo, ¿verdad? ¿Cómo que no depende de la alcaldía? Entonces, ¿quién firma la decisión final?",
        selfCheck: [
          "Mis preguntas reales suben al final cuando son de sí o no.",
          "No uso «¿acaso?» cuando solo quiero confirmar un dato.",
        ],
      },
      {
        title: "Mensaje de voz a una amiga",
        prompt: "Cuéntale a una amiga que vive en otra ciudad cómo fue la consulta, con tres exclamaciones naturales (sorpresa, grado y deseo).",
        prep: ["Elige el momento más sorprendente de la consulta."],
        seconds: 75,
        selfCheck: ["Acentúo con fuerza la palabra exclamativa.", "Mezclo exclamaciones con frases informativas."],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu columna y dos preguntas retóricas que hayas encontrado en discursos, columnas o anuncios reales.",
    cards: [
      {
        move: "Explica",
        task: "Explica a tu profesor qué afirma cada una de las preguntas retóricas que trajiste y cómo lo sabes.",
        phrases: ["Esta pregunta afirma que…", "Es negativa, así que afirma en positivo."],
      },
      {
        move: "Pregunta",
        task: "Pregunta si una pregunta de tu columna suena persuasiva o burlona en ese contexto.",
        phrases: ["¿Suena demasiado agresiva aquí?", "¿Quedaría mejor como afirmación?"],
      },
      {
        move: "Debate",
        task: "Pide a tu profesor que defienda el estacionamiento y responde con dos preguntas retóricas y una concesión.",
        phrases: ["Tiene razón en que…, pero ¿para qué…?", "¿Quién no…?"],
      },
      {
        move: "Lee",
        task: "Lee en voz alta tres frases (una pregunta real, una retórica y una exclamativa) y pide a tu profesor que identifique cada una por la melodía.",
        phrases: ["¿Se nota la diferencia?", "¿Dónde debería bajar la voz?"],
      },
    ],
    bring: "Tu columna revisada, las dos preguntas retóricas reales y, si quieres, la grabación del alegato.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué afirma la pregunta «¿Quién no ha esperado alguna vez el camión del gas en la esquina?»?",
        options: ["Que nadie lo ha esperado.", "Que solo algunos lo han esperado.", "Que casi todos lo han esperado."],
        answer: 2,
        why: "Pregunta negativa: afirma en positivo, «todos».",
      },
      {
        type: "choice",
        q: "¿Qué enunciado sirve para confirmar de verdad que el tianguis se instala los martes?",
        options: ["El tianguis se pone los martes, ¿no?", "¿Acaso el tianguis se pone los martes?", "¿Cómo que el tianguis se pone los martes?"],
        answer: 0,
        why: "La coletilla pide confirmación; las otras expresan duda, reproche o sorpresa.",
      },
      {
        type: "listen",
        q: "Escucha la frase del locatario. ¿Qué afirma en realidad?",
        options: ["Que no puede cerrar el puesto ahora.", "Que piensa cerrar el puesto pronto.", "Que no sabe si cerrará el puesto."],
        answer: 0,
        why: "«¿Cómo voy a…?» sin negación afirma que no es posible.",
        audio: "¿Cómo voy a cerrar el puesto ahora, con tres hijos estudiando?",
        voice: "es-MX-m",
      },
      {
        type: "gap",
        q: "¡___ horas pasaba mi abuela en este pasillo eligiendo chiles!",
        answers: [["Cuántas", "cuántas"]],
        hint: "Exclamativo de cantidad con tilde, concordado con «horas» (femenino plural).",
        why: "«Cuántas» concuerda con «horas».",
      },
      {
        type: "gap",
        q: "¡Quién ___ el tiempo de antes para venir al mercado cada mañana! [tener]",
        answers: [["tuviera", "tuviese"]],
        hint: "Exclamativa de deseo irrealizable: «quién» + imperfecto de subjuntivo.",
        why: "Deseo para uno mismo en el presente: tuviera o tuviese.",
      },
      {
        type: "error",
        sentence: "¡Lo fresco que llegan los mariscos los viernes!",
        answers: ["¡Lo frescos que llegan los mariscos los viernes!"],
        why: "El adjetivo concuerda con «los mariscos»; solo «lo» es invariable.",
      },
      {
        type: "error",
        sentence: "Y usted ¿por que no vino a la consulta?",
        answers: ["Y usted, ¿por qué no vino a la consulta?"],
        why: "Coma antes del signo de apertura tras el elemento inicial y tilde en «qué» interrogativo.",
      },
      {
        type: "order",
        words: ["¿Acaso", "alguien", "ha", "visto", "nunca", "un", "plano", "del", "proyecto?"],
        why: "«Acaso» y «nunca» refuerzan la respuesta negativa: nadie lo ha visto.",
      },
      {
        type: "choice",
        q: "En «¡Quién lo hubiera imaginado: el mercado lleno de jóvenes un lunes!», ¿qué expresa la exclamativa?",
        options: ["Un deseo para el futuro.", "Sorpresa ante algo que nadie habría previsto.", "Una pregunta sobre quién lo imaginó."],
        answer: 1,
        why: "«Quién» + pluscuamperfecto de subjuntivo: sorpresa ante lo inesperado.",
      },
      {
        type: "open",
        prompt: "Explica en 70–90 palabras a un compañero por qué «¿Quién quiere un mercado sin goteras?» no sirve para defender la remodelación y propón una versión que sí funcione.",
        model: "La pregunta es afirmativa, así que afirma algo negativo: «nadie quiere un mercado sin goteras», justo lo contrario de lo que se quiere decir. Para afirmar que todos queremos arreglar el techo, la pregunta tiene que ser negativa: «¿Quién no quiere un mercado sin goteras?». Otra opción es cambiar el objeto: «¿Quién quiere seguir comprando bajo las goteras?», que afirma que nadie lo quiere y defiende igualmente la obra.",
        checklist: ["Explico la inversión de polaridad.", "Propongo al menos una versión correcta.", "Mis signos y tildes son correctos."],
      },
    ],
  },
  complete: {
    canNow: [
      "Interpreto qué afirma una pregunta retórica según su polaridad y sus fórmulas («¿acaso…?», «¿para qué…?», «¿cómo no voy a…?»).",
      "Distingo una pregunta retórica de una coletilla de confirmación y de una pregunta eco.",
      "Formo exclamativas de grado, de deseo y de sorpresa con la concordancia correcta.",
      "Escribo y pronuncio preguntas y exclamaciones con su tilde, sus signos y su melodía.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Qué afirma cada pregunta» y escribe tú la afirmación que corresponde a cada pregunta.",
      "Dentro de una semana, escucha un debate o una tertulia y apunta dos preguntas retóricas con lo que afirman.",
      "En la próxima clase, lee tu columna en voz alta y pide a tu profesor que marque la pregunta más eficaz y la menos necesaria.",
    ],
  },
  related: [
    { path: "/gramatica/interrogativas-retoricas-y-exclamativas-complejas", label: "Clase: Interrogativas retóricas y exclamativas complejas" },
  ],
};
