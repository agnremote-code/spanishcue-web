import type { Module } from "../../types";

/**
 * C2 · semana 3 · Autoestudio espejo de G208 (valores discursivos del condicional
 * de rumor) y G209 (correlaciones temporales complejas y cambios de plano).
 * Repaso autónomo con la redacción ficticia de un diario digital de Salamanca que
 * cubre el rumor del cierre de una librería y la biografía de su fundador.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w03: Module = {
  id: "c2-03",
  level: "c2",
  week: 3,
  kind: "core",
  title: "La librería que iba a cerrar: rumor, fuente y tiempo",
  subtitle: "Repaso del condicional de rumor y de las correlaciones temporales que se miden desde dos momentos",
  stop: {
    place: "Salamanca",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g208",
    "c2.gram.g209",
    "c2.voc.w03-redaccion-verificacion",
    "c2.pron.w03-ria-ra",
    "c2.lis.w03-reunion-redaccion",
    "c2.read.w03-carta-directora",
    "c2.wri.w03-cronica-seguimiento",
    "c2.spk.w03-boletin-replica",
    "c2.fun.w03-atribuir-fuente",
    "c2.disc.w03-cambio-plano",
  ],
  reviewObjectives: ["c2.gram.g207","c2.voc.w02-cooperativa-asamblea","c2.pron.w02-vocal-modo","c2.lis.w02-revision-acta","c2.read.w02-boletin-cooperativa","c2.wri.w02-comunicado-comision","c2.spk.w02-asamblea-mediacion","c2.fun.w02-matizar-postura","c2.disc.w02-fondo-novedad"],
  prerequisites: ["c2-02"],
  goal: {
    canDo: "Puedo reconocer y evaluar el condicional de rumor, atribuir la información a su fuente y encadenar tiempos verbales coherentes cuando relato lo que alguien dijo o cambio de plano en una narración.",
    steps: [
      "Repasa en la teoría qué hace el condicional de rumor, qué otras lecturas tiene «habría» y desde qué momento se mide cada tiempo en una subordinada.",
      "Practica con titulares, entradillas y citas de una noticia local que avanza día a día.",
      "Escucha la reunión de cierre de la redacción y lee la carta de la directora a sus lectores.",
      "Redacta la crónica de seguimiento, revísala con la lista de control y presenta la noticia en un boletín oral.",
    ],
  },
  theory: {
    intro: "En clase viste por qué el condicional de rumor es un uso discutido y cómo se mide el tiempo de una subordinada. Aquí lo repasas con una noticia que cambia en tres días: el rumor del cierre de una librería salmantina. La pregunta que recorre la semana es doble: ¿quién responde de lo que se dice? y ¿desde qué momento lo cuento?",
    parts: [
      {
        heading: "El condicional de rumor: qué dice y qué calla",
        body: [
          "En la prensa, el condicional sirve a veces para presentar una información que no se ha confirmado: «La librería cerraría en enero». El periodista indica que alguien lo dice, pero la forma verbal no dice quién. Por eso, sin una fuente explícita, el lector no puede valorar si el dato procede de un documento, de un portavoz o de un comentario de bar.",
          "El tiempo se elige según la referencia del hecho: el condicional simple para un presente o un futuro no confirmado («estaría negociando la venta», «el local se vendería en primavera»), y el compuesto para un pasado no confirmado («habría rechazado la oferta»). Usar el simple para un hecho pasado con fecha es un error frecuente.",
          "No hay que confundirlo con otros condicionales que se escriben igual: la probabilidad en el pasado («serían las once cuando cerró» = probablemente eran), la inferencia propia («ya habría salido del local»), la cortesía («¿podría confirmarlo?», «yo diría que no») o la hipótesis («con otro alquiler, seguiría abierta»).",
        ],
        table: {
          caption: "De la fuente al titular",
          head: ["Lo que se sabe", "Titular con condicional", "Titular con atribución explícita"],
          rows: [
            ["Un concejal lo comenta, sin documento", "La librería Arcadia cerraría en enero", "Un concejal afirma que la librería Arcadia cerrará en enero"],
            ["Fuentes de la propiedad, sin confirmación oficial", "El edificio se estaría vendiendo a una cadena hotelera", "Fuentes de la propiedad aseguran que negocian la venta del edificio"],
            ["La dueña lo niega; un vecino dice que firmó", "La dueña habría firmado el traspaso", "Un vecino sostiene que la dueña firmó el traspaso; ella lo niega"],
          ],
        },
        mistakes: [
          {
            wrong: "Según fuentes municipales, la licencia de hotel se concedería el pasado martes.",
            right: "Según fuentes municipales, la licencia de hotel se habría concedido el pasado martes.",
            why: "Para un hecho pasado no confirmado se usa el condicional compuesto.",
          },
          {
            wrong: "Según la propietaria, el local estuviera en venta desde octubre.",
            right: "Según la propietaria, el local está en venta desde octubre.",
            why: "Con «según» la atribución ya es explícita: basta el indicativo; el imperfecto de subjuntivo no tiene aquí ningún valor.",
          },
        ],
      },
      {
        heading: "Un uso discutido: quién responde y cómo atribuir",
        body: [
          "La Nueva gramática describe este condicional como un uso frecuente en el periodismo. Varios libros de estilo, como el de El País, y la Fundéu recomiendan evitarlo y lo consideran un calco del francés: el lector distraído lo lee como un hecho, y el medio se protege sin decir de quién es el dato. Tu tarea no es prohibirlo, sino reconocerlo, evaluarlo y saber sustituirlo.",
          "Las alternativas hacen visible la fuente: «según + nombre + indicativo», «fuentes de… aseguran que», «al parecer», «la policía investiga si…», «un portavoz no ha confirmado que…». Cuando el hecho ya está confirmado (una sentencia leída, un comunicado oficial), el condicional deja de tener sentido y debe desaparecer.",
          "En informaciones sobre delitos se suma la presunción de inocencia: «presunto» o «presuntamente» se aplican mientras no haya condena firme. Acumular marcas («presuntamente habría supuestamente…») no añade prudencia, solo ruido; y llamar «presunto» a alguien ya condenado es un error.",
        ],
        examples: [
          { es: "Al parecer, el traspaso se firmó la semana pasada; la propietaria no ha querido confirmarlo.", note: "Atribución vaga pero honesta, y una fuente que no confirma." },
          { es: "La policía investiga si el incendio del almacén fue intencionado.", note: "La investigación es un hecho; su resultado, no." },
          { es: "El juzgado ha condenado al exgerente por apropiación indebida.", note: "Hecho confirmado: sin condicional y sin «presunto»." },
        ],
        mistakes: [
          {
            wrong: "El presunto autor del robo, condenado en firme en mayo, ha recurrido al Constitucional.",
            right: "El autor del robo, condenado en firme en mayo, ha recurrido al Constitucional.",
            why: "Tras una condena firme ya no procede «presunto».",
          },
          {
            wrong: "Según el acta del pleno, el concejal habría votado en contra.",
            right: "Según el acta del pleno, el concejal votó en contra.",
            why: "Un acta pública confirma el dato: el condicional sobra.",
          },
        ],
        tip: "Antes de escribir un condicional de rumor, pregúntate: ¿puedo nombrar la fuente? Si puedes, nómbrala y usa el indicativo.",
      },
      {
        heading: "Dos anclas para el mismo tiempo",
        body: [
          "Cuando cuentas lo que alguien dijo o pidió, el tiempo de la subordinada puede medirse desde dos momentos: el del hecho contado o el de ahora. Si la propietaria dijo el lunes «cerraré en enero» y enero todavía no ha llegado, puedes escribir «dijo que cerraría en enero» (desde el lunes) o «dijo que cerrará en enero» (desde hoy, porque sigue siendo válido). Si el contenido ya no vale, solo cabe la correlación de pasado.",
          "Lo mismo ocurre con las peticiones: «nos pidió que la llamáramos» o «que la llamemos» si la petición sigue pendiente. Pero si la petición se refería a un momento ya pasado, el presente es incorrecto: «Hace un año nos pidió que la llamáramos ese verano».",
        ],
        table: {
          caption: "¿Desde el hecho o desde ahora?",
          head: ["Situación hoy", "Correlación de pasado", "Anclada en el presente"],
          rows: [
            ["Enero no ha llegado y el plan sigue", "Dijo que cerraría en enero.", "Dijo que cerrará en enero."],
            ["Enero pasó y la librería sigue abierta", "Dijo que cerraría en enero.", "no procede"],
            ["La petición sigue pendiente", "Pidió que revisáramos el contrato.", "Pidió que revisemos el contrato."],
            ["La petición era para una fecha pasada", "Pidió que lo revisáramos antes de Navidad de 2019.", "no procede"],
          ],
        },
        mistakes: [
          {
            wrong: "En 2015 el fundador anunció que la librería se trasladará a la calle Libreros ese mismo año.",
            right: "En 2015 el fundador anunció que la librería se trasladaría a la calle Libreros ese mismo año.",
            why: "El traslado está en el pasado respecto de hoy: solo vale la correlación de pasado.",
          },
        ],
      },
      {
        heading: "Cadenas de subordinadas y cambios de plano",
        body: [
          "En una cadena, cada verbo se mide desde el que lo rige, no desde el principio de la frase: «La dueña aseguró que, cuando terminara el inventario, ya habría vendido la mitad de los fondos». «Terminara» depende de «aseguró» (pasado) y «habría vendido» marca una acción terminada antes de ese momento futuro visto desde el pasado. Si mezclas «terminara» con «habrá vendido», la cadena se rompe.",
          "Para la anterioridad en el pasado, la norma pide pluscuamperfecto: «Cuando llegamos, el camión ya se había llevado las cajas». El indefinido en ese sentido («ya se llevó») es coloquial y conviene evitarlo en un texto cuidado.",
          "Los cambios de plano, en cambio, pueden ser deliberados: pasar del indefinido al presente histórico para acercar una escena, o usar en una biografía el imperfecto narrativo («Dos años después, moría en Salamanca») o el futuro histórico («En 1962 abrirá su primera librería»). Lo que distingue el recurso del despiste es la coherencia: si cambias, cambia todo el bloque y vuelve de forma visible.",
        ],
        examples: [
          { es: "Ernesto Valle llega a Salamanca en 1958. Trae una maleta de libros y una dirección. Tres años después abrirá Arcadia.", note: "Presente histórico con un futuro histórico dentro del mismo plano." },
          { es: "Entra, enciende la luz y vio que faltaban las cajas.", note: "Despiste: el bloque empieza en presente y salta al pasado sin motivo." },
        ],
        mistakes: [
          {
            wrong: "Nos prometió que, cuando acabara la mudanza, ya habrá devuelto las llaves.",
            right: "Nos prometió que, cuando acabara la mudanza, ya habría devuelto las llaves.",
            why: "Dentro de una cadena que depende de un pasado, el futuro compuesto se convierte en condicional compuesto.",
          },
          {
            wrong: "Cuando el notario llegó, la propietaria ya firmó el documento.",
            right: "Cuando el notario llegó, la propietaria ya había firmado el documento.",
            why: "Anterioridad respecto de otro pasado: pluscuamperfecto.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero evalúa quién responde de la información; después decide desde qué momento mides cada tiempo.",
    exercises: [
      {
        id: "c2-03-gramatica-valor",
        type: "context",
        prompt: "Lee la situación y decide qué valor tiene el condicional o qué versión es adecuada.",
        items: [
          {
            context: "Un vecino de la calle Libreros, en la barra de un bar: «Serían las nueve cuando vi salir al tasador del edificio».",
            q: "¿Qué valor tiene «serían»?",
            options: [
              "Rumor: alguien le contó la hora.",
              "Probabilidad en el pasado: calcula la hora aproximada.",
              "Cortesía: suaviza lo que dice.",
            ],
            answer: 1,
            why: "Equivale a «probablemente eran las nueve»: inferencia propia, no rumor.",
          },
          {
            context: "Titular de un diario: «La cadena hotelera habría pagado tres millones por el edificio». En el cuerpo de la noticia no se cita ninguna fuente.",
            q: "¿Qué problema tiene el titular?",
            options: [
              "El lector no sabe quién afirma la cifra ni puede valorarla.",
              "Debería ir en condicional simple porque la venta es futura.",
              "No tiene ningún problema: el condicional ya es una fuente.",
            ],
            answer: 0,
            why: "El condicional indica que alguien lo dice, pero no quién: sin fuente explícita, el lector queda a ciegas.",
          },
          {
            context: "El juzgado ha leído hoy la sentencia que condena a la empresa de mudanzas por los daños en la librería.",
            q: "¿Cómo debe ser el titular?",
            options: [
              "La empresa de mudanzas habría sido condenada por los daños.",
              "La presunta empresa responsable habría sido condenada.",
              "El juzgado condena a la empresa de mudanzas por los daños en la librería.",
            ],
            answer: 2,
            why: "Hecho confirmado por una sentencia leída: indicativo y sin «presunta».",
          },
          {
            context: "La editora pide algo a un redactor por teléfono: «¿Podrías llamar a la propietaria antes de las doce?».",
            q: "¿Qué valor tiene «podrías»?",
            options: ["Rumor", "Cortesía", "Probabilidad en el pasado"],
            answer: 1,
            why: "El condicional atenúa la petición.",
          },
        ],
      },
      {
        id: "c2-03-gramatica-tiempos",
        type: "gap",
        prompt: "Escribe el verbo entre corchetes en el tiempo y modo adecuados. Lee la indicación entre paréntesis.",
        items: [
          { q: "Según fuentes de la propiedad, la cadena ___ ya la oferta el mes pasado. [rechazar] (pasado no confirmado)", answers: [["habría rechazado"]], why: "Pasado no confirmado: condicional compuesto." },
          { q: "La empresa ___ negociando la compra de otros dos locales en la Rúa Mayor. [estar] (presente no confirmado)", answers: [["estaría"]], why: "Presente no confirmado: condicional simple." },
          { q: "En marzo de 2019 la dueña nos pidió que no ___ nada hasta el verano siguiente. [publicar]", answers: [["publicáramos", "publicásemos"]], why: "La petición se refería a un momento ya pasado: solo correlación de pasado." },
          { q: "Ayer la dueña nos pidió que la ___ el lunes, porque todavía no tiene la cifra. [llamar] (la petición sigue pendiente)", answers: [["llamemos", "llamáramos", "llamásemos"]], why: "Petición pendiente: valen las dos anclas, desde ahora o desde el momento en que lo pidió." },
          { q: "Cuando llegó la tasadora, el librero ya ___ las cajas del sótano. [vaciar]", answers: [["había vaciado"]], why: "Anterioridad respecto de otro pasado: pluscuamperfecto." },
          { q: "Nos aseguró que, cuando ___ el inventario, ya habría decidido. [terminar]", answers: [["terminara", "terminase"]], why: "«Cuando» con valor futuro dentro de una cadena que depende de un pasado: imperfecto de subjuntivo." },
        ],
      },
      {
        id: "c2-03-gramatica-plano",
        type: "classify",
        prompt: "¿El cambio de tiempo es un recurso deliberado y coherente o un despiste? Clasifica cada fragmento.",
        categories: ["Recurso deliberado y coherente", "Despiste o inconsistencia"],
        items: [
          { text: "En 1961 abre Arcadia en un bajo de la calle Libreros. Diez años después, se trasladará al local de la esquina.", cat: 0, why: "Presente histórico con futuro histórico dentro del mismo plano." },
          { text: "Llegamos tarde: el tasador ya se fue y no dejó tarjeta.", cat: 1, why: "Anterioridad en el pasado: lo cuidado es «ya se había ido»." },
          { text: "El librero sube al altillo, busca la primera edición y bajó con las manos vacías.", cat: 1, why: "Salto del presente al indefinido dentro de la misma secuencia." },
          { text: "Ernesto Valle vendió su último libro un sábado de 2009. Dos meses después, moría en su casa de la plaza del Corrillo.", cat: 0, why: "Imperfecto narrativo para un hecho puntual en una biografía." },
          { text: "Dijo en 2016 que la librería cerrará en 2017, y siguió abierta.", cat: 1, why: "El contenido ya no es válido hoy: solo vale «cerraría»." },
        ],
      },
      {
        id: "c2-03-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de condicional, de atribución o de correlación. Corrígelo.",
        items: [
          {
            sentence: "Presuntamente, el gerente habría supuestamente vendido los fondos sin permiso.",
            answers: ["Según la denuncia, el gerente habría vendido los fondos sin permiso.", "Presuntamente, el gerente vendió los fondos sin permiso.", "El gerente habría vendido los fondos sin permiso."],
            why: "Acumular marcas de distancia no añade prudencia: basta una, y mejor si nombra la fuente.",
          },
          {
            sentence: "Según el registro de la propiedad, el edificio se vendería ayer a la cadena hotelera.",
            answers: ["Según el registro de la propiedad, el edificio se vendió ayer a la cadena hotelera."],
            why: "La fuente es un registro público y el hecho es pasado: indicativo.",
          },
          {
            sentence: "La propietaria nos aseguró que, cuando cerrara, ya habrá donado los libros antiguos.",
            answers: ["La propietaria nos aseguró que, cuando cerrara, ya habría donado los libros antiguos."],
            why: "En la cadena que depende de «aseguró», el futuro compuesto pasa a condicional compuesto.",
          },
          {
            sentence: "Hace cinco años el fundador nos pidió que publiquemos su biografía aquella Navidad.",
            answers: ["Hace cinco años el fundador nos pidió que publicáramos su biografía aquella Navidad.", "Hace cinco años el fundador nos pidió que publicásemos su biografía aquella Navidad."],
            why: "La petición se refería a una fecha pasada: no se puede anclar en el presente.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico de una redacción que verifica rumores y del comercio de libros de una ciudad universitaria.",
    groups: [
      {
        title: "Verificación y atribución",
        items: [
          { es: "contrastar una información", note: "comprobarla con otra fuente independiente" },
          { es: "la fuente oficiosa", note: "persona o entidad que informa sin carácter oficial" },
          { es: "desmentir", note: "negar públicamente que algo sea cierto" },
          { es: "la fe de errores", note: "nota en que un medio corrige un dato publicado" },
          { es: "la entradilla", note: "primer párrafo de una noticia, que resume lo esencial" },
          { es: "el derecho de réplica", note: "posibilidad de que alguien aludido responda en el mismo medio" },
          { es: "dar por buena una versión", note: "aceptarla como verdadera sin más comprobación" },
        ],
      },
      {
        title: "Libros y locales",
        items: [
          { es: "el traspaso", note: "cesión de un local comercial a otra persona a cambio de dinero" },
          { es: "el librero de viejo", note: "quien vende libros usados o antiguos" },
          { es: "los fondos", note: "conjunto de libros que tiene una librería o una biblioteca" },
          { es: "el tasador", note: "persona que calcula el valor de un bien" },
          { es: "echar el cierre", note: "cerrar un negocio de forma definitiva (coloquial)" },
          { es: "la primera edición", note: "primera tirada publicada de un libro" },
          { es: "el bajo comercial", note: "local a pie de calle en un edificio" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-03-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "contrastar una información", right: "comprobarla con otra fuente independiente" },
          { left: "desmentir", right: "negar públicamente que algo sea cierto" },
          { left: "la fe de errores", right: "nota en que un medio corrige un dato publicado" },
          { left: "la entradilla", right: "primer párrafo de una noticia, que resume lo esencial" },
          { left: "el traspaso", right: "cesión de un local comercial a otra persona a cambio de dinero" },
          { left: "los fondos", right: "conjunto de libros que tiene una librería o una biblioteca" },
          { left: "el derecho de réplica", right: "posibilidad de que alguien aludido responda en el mismo medio" },
        ],
      },
      {
        id: "c2-03-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["desmintió", "fuente oficiosa", "echar el cierre", "contrastar"],
        items: [
          { q: "La propietaria ___ en un comunicado que hubiera firmado el traspaso.", answers: [["desmintió"]] },
          { q: "Antes de publicar la cifra, hay que ___ con el registro de la propiedad.", answers: [["contrastar"]] },
          { q: "Un concejal que habla sin permiso del alcalde es, como mucho, una ___.", answers: [["fuente oficiosa"]] },
          { q: "Después de sesenta años, nadie en el barrio quería verla ___.", answers: [["echar el cierre"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Condicional en -ría y futuro en -rá: hiato y acento",
    explanation: [
      "Al leer una noticia en voz alta, el oyente tiene que distinguir si el dato se afirma o se atribuye. El condicional termina en «-ría», con hiato: la «i» lleva el acento y forma sílaba propia (ce-rra-RÍ-a, ha-BRÍ-a). El futuro termina en «-rá», aguda: ce-rra-RÁ, ha-BRÁ. Si comprimes el hiato («cerrarya»), el condicional suena casi como el futuro y desaparece la distancia que quería marcar el periodista.",
      "Cuando atribuyas con un inciso («según fuentes municipales»), baja ligeramente el tono y haz una pausa antes y después: así el oyente sabe que esa parte no es tuya. En la radio, ese tono de inciso hace el trabajo que en el papel hacen las comas.",
      "El audio usa la síntesis del navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el contraste y comprueba tu producción con una persona.",
    ],
    table: {
      caption: "Hiato en -ría frente a aguda en -rá",
      head: ["Condicional (hiato)", "Futuro (aguda)"],
      rows: [
        ["cerraría", "cerrará"],
        ["habría vendido", "habrá vendido"],
        ["estaría negociando", "estará negociando"],
        ["se trasladaría", "se trasladará"],
      ],
    },
    perceive: {
      id: "c2-03-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones primero y decide qué forma oyes.",
      items: [
        {
          q: "¿Qué forma oyes?",
          options: ["«cerraría»: condicional, el dato se atribuye", "«cerrará»: futuro, el dato se afirma"],
          answer: 0,
          why: "Se oye el hiato: ce-rra-RÍ-a.",
          audio: "La librería cerraría en enero, según un concejal.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué forma oyes en el auxiliar?",
          options: ["«habría»: condicional compuesto", "«habrá»: futuro compuesto"],
          answer: 1,
          why: "Se oye ha-BRÁ, aguda y sin hiato: futuro compuesto.",
          audio: "A estas horas la propietaria ya habrá hablado con el notario.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué combinación oyes?",
          options: ["dos futuros", "dos condicionales", "un futuro y después un condicional"],
          answer: 2,
          why: "Primero «firmará», aguda; después «trasladaría», con hiato.",
          audio: "La dueña firmará el lunes; la cadena se trasladaría en marzo.",
          voice: "es-MX-f",
        },
        {
          q: "¿Dónde está el inciso de atribución?",
          options: ["Al principio de la frase.", "En medio de la frase, entre pausas.", "No hay inciso."],
          answer: 1,
          why: "«Según fuentes de la propiedad» va entre pausas, con el tono más bajo.",
          audio: "El edificio, según fuentes de la propiedad, estaría en venta desde el verano.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "La librería cerraría en enero, según un concejal.", tip: "Marca el hiato de «cerraría» y baja el tono en el inciso final.", voice: "es-ES-f" },
      { text: "La propietaria lo ha desmentido: la librería no cerrará en enero.", tip: "Contrasta «cerrará», aguda, con el «cerraría» de la frase anterior.", voice: "es-ES-m" },
      { text: "El edificio, según fuentes de la propiedad, estaría en venta.", tip: "Pausa antes y después del inciso, con tono más bajo.", voice: "es-MX-f" },
      { text: "Nos aseguró que, cuando terminara el inventario, ya habría decidido.", tip: "Agrupa «cuando terminara el inventario» en un solo grupo fónico.", voice: "es-ES-m" },
    ],
    spelling: "La tilde marca el hiato en «cerraría», «habría», «estaría»: sin ella, la palabra no se lee como condicional. En el futuro la tilde va en la última sílaba: «cerrará», «habrá».",
  },
  listening: {
    title: "Reunión de cierre: el titular de mañana",
    context: "Marta, redactora jefa de un diario digital de Salamanca, y Diego, redactor en prácticas llegado de Guadalajara (México), revisan a última hora la noticia sobre el posible cierre de la librería Arcadia. Escucha primero sin transcripción. Las voces son sintéticas y no representan variedades verificadas.",
    speakers: [
      { id: "m", name: "Marta", voice: "es-ES-f", role: "Redactora jefa" },
      { id: "d", name: "Diego", voice: "es-MX-m", role: "Redactor en prácticas" },
    ],
    script: [
      { speaker: "m", text: "Diego, he leído tu pieza. Está bien documentada, pero el titular no me convence: «La librería Arcadia cerraría en enero». ¿Quién lo dice?" },
      { speaker: "d", text: "Lo dijo un concejal de Urbanismo, en el pasillo del pleno. No quiso que lo citáramos con nombre. Por eso puse el condicional: para que se entienda que no lo afirmamos nosotros." },
      { speaker: "m", text: "Entiendo la intención, pero el condicional no le dice al lector quién responde del dato. Prefiero que lo escribamos claro: «Un concejal afirma que la librería Arcadia cerrará en enero». Así el lector valora la fuente, y si mañana resulta que el concejal se equivocó, la responsabilidad queda donde debe estar." },
      { speaker: "d", text: "De acuerdo. Lo cambio. En la entradilla también tengo otra frase: «La cadena hotelera habría pagado tres millones por el edificio». Eso me lo confirmó una persona de la inmobiliaria." },
      { speaker: "m", text: "Entonces nómbrala como fuente, aunque sea de forma genérica: «Fuentes de la inmobiliaria aseguran que la cadena ha ofrecido tres millones». Y ojo: ¿ofrecido o pagado? No es lo mismo. Si no hay firma, no hay pago." },
      { speaker: "d", text: "Ofrecido, tienes razón. Y la dueña, cuando la llamé el lunes, me dijo literalmente: «No cerraré mientras pueda pagar el alquiler». En el texto puse que «dijo que no cerrará mientras pueda pagar el alquiler». ¿Está bien con el presente?" },
      { speaker: "m", text: "Está bien, porque lo que dijo sigue valiendo hoy: no ha cerrado y sigue pagando. También podrías escribir «que no cerraría mientras pudiera pagar»; las dos son correctas. Lo que no puedes hacer es mezclarlas: «dijo que no cerrará mientras pudiera». Elige un ancla y mantenla en toda la frase." },
      { speaker: "d", text: "Entendido. Y tengo un párrafo sobre el fundador, Ernesto Valle. Empecé en indefinido, «llegó a Salamanca en 1958», y luego pasé al presente: «abre la librería en 1961». No sé si queda raro." },
      { speaker: "m", text: "Queda raro si es un despiste. Si quieres presente histórico, ponlo en todo el bloque biográfico: «Ernesto Valle llega a Salamanca en 1958; tres años después abre Arcadia; en 1975 se trasladará al local de la esquina». Y cuando vuelvas a la actualidad, vuelve también al pretérito perfecto o al presente real. Que el lector note el cambio, pero que no tropiece con él." },
      { speaker: "d", text: "Lo reescribo así. Una última cosa: en el pie de foto puse que, cuando llegamos, el tasador ya se fue." },
      { speaker: "m", text: "«Ya se había ido». En una noticia, pluscuamperfecto. Mándamelo en veinte minutos y lo cerramos. Y llama a la dueña otra vez: dile que nos gustaría que nos confirmara la cifra antes de las diez." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin abrir la transcripción. ¿Qué están decidiendo?",
        exercise: {
          id: "c2-03-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación general.",
          items: [
            {
              q: "¿Qué hacen Marta y Diego?",
              options: [
                "Revisan el titular y el texto de una noticia antes de publicarla.",
                "Entrevistan a la dueña de una librería.",
                "Preparan una fe de errores por una noticia ya publicada.",
              ],
              answer: 0,
              why: "Repasan titular, entradilla, cita, biografía y pie de foto antes del cierre.",
            },
            {
              q: "¿Qué criterio general defiende Marta?",
              options: [
                "Usar el condicional siempre que haya dudas.",
                "Hacer visible quién responde de cada dato y mantener coherentes los tiempos.",
                "Evitar las citas literales para no comprometer al diario.",
              ],
              answer: 1,
              why: "Pide nombrar fuentes, elegir un ancla temporal y no mezclar planos por despiste.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "c2-03-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de cada decisión.",
          items: [
            {
              q: "¿Por qué Marta corrige «habría pagado»?",
              options: [
                "Porque la cifra es demasiado alta.",
                "Porque la inmobiliaria pidió que no se publicara.",
                "Porque hay que nombrar la fuente y no hay pago, solo una oferta.",
              ],
              answer: 2,
              why: "Propone «fuentes de la inmobiliaria aseguran que la cadena ha ofrecido».",
            },
            {
              q: "¿Qué dice Marta sobre «dijo que no cerrará mientras pueda pagar»?",
              options: [
                "Que es correcto porque lo dicho sigue valiendo, y que también vale la correlación de pasado.",
                "Que es incorrecto: hay que usar siempre el condicional.",
                "Que hay que cambiar «pueda» por «pudiera» y dejar «cerrará».",
              ],
              answer: 0,
              why: "Las dos anclas son posibles, pero no se mezclan en la misma frase.",
            },
            {
              q: "¿Qué propone para el párrafo del fundador?",
              options: [
                "Escribirlo entero en indefinido.",
                "Usar presente histórico en todo el bloque y volver de forma visible a la actualidad.",
                "Eliminar las fechas.",
              ],
              answer: 1,
              why: "El cambio de plano es válido si es coherente y deliberado.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cada versión final. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c2-03-escucha-notice",
          type: "match",
          prompt: "Relaciona cada versión del borrador con la versión final que proponen.",
          pairs: [
            { left: "La librería Arcadia cerraría en enero", right: "Un concejal afirma que la librería Arcadia cerrará en enero" },
            { left: "la cadena habría pagado tres millones", right: "fuentes de la inmobiliaria aseguran que la cadena ha ofrecido tres millones" },
            { left: "llegó en 1958… abre la librería en 1961", right: "presente histórico en todo el bloque biográfico" },
            { left: "el tasador ya se fue", right: "el tasador ya se había ido" },
          ],
          why: "Cada corrección hace visible la fuente o mantiene un ancla temporal coherente.",
        },
      },
    ],
  },
  reading: {
    title: "Por qué no escribimos «cerraría»",
    genre: "Carta de la dirección a los lectores",
    frame: "Carta de Marta Recio, redactora jefa de un diario digital salmantino, publicada tres días después de la primera noticia sobre la librería Arcadia. Diario, personas y hechos son ficticios.",
    text: [
      "Queridos lectores: el lunes publicamos que la librería Arcadia, abierta desde 1961 en la calle Libreros, podía cerrar en enero. Desde entonces hemos recibido más de doscientos mensajes, algunos de agradecimiento, muchos de inquietud y unos cuantos de reproche. Varios nos preguntan por qué otros medios titularon que la librería «cerraría» y nosotros, en cambio, escribimos que «un concejal afirma que cerrará». Me parece una pregunta excelente, y quiero responderla con detalle, porque explica cómo trabajamos.",
      "El condicional que se usa en muchas noticias para dar una información sin confirmarla tiene una virtud aparente: protege al medio. Si el dato resulta falso, el periódico puede alegar que nunca lo afirmó. Pero esa protección tiene un precio, y lo paga el lector. La forma verbal indica que alguien lo dice, no quién lo dice. Un titular como «Arcadia cerraría en enero» puede proceder de un documento municipal, de un portavoz de la propiedad o de un comentario oído en un bar, y el lector no tiene manera de saberlo. La Nueva gramática reconoce este uso como frecuente en la prensa; libros de estilo como el de El País y la Fundéu recomiendan evitarlo. En esta redacción hemos decidido seguir esa recomendación siempre que podamos nombrar la fuente, aunque sea de manera genérica.",
      "Por eso, el lunes escribimos que un concejal de Urbanismo afirmaba que la librería cerrará en enero. El concejal no quiso que lo citáramos con nombre, y respetamos su petición, pero sí dijimos su cargo. Así cualquiera podía preguntarse qué sabe un concejal de Urbanismo sobre los planes de un negocio privado. El martes la propietaria, Carmen Valle, lo desmintió en un comunicado: dijo que no cerraría mientras pudiera pagar el alquiler y que nadie le había comunicado ningún cambio de uso del edificio. Lo publicamos con la misma visibilidad que el primer dato.",
      "Varios lectores han notado que, al citar a la señora Valle, unas veces escribimos «dijo que no cerrará» y otras «dijo que no cerraría». No es un descuido. Las dos formas son correctas mientras lo que dijo siga siendo válido: la primera mide el futuro desde hoy y la segunda, desde el momento en que habló. Lo que procuramos no hacer es mezclarlas en la misma frase. Si dentro de un año la librería sigue abierta, solo podremos escribir que «aseguró que no cerraría», porque entonces su previsión pertenecerá al pasado.",
      "Hay otra cifra que conviene aclarar. Algunos medios han publicado que una cadena hotelera «habría pagado» tres millones de euros por el edificio. Nuestra información, contrastada con dos personas de la inmobiliaria, es distinta: la cadena ha ofrecido esa cantidad, pero no ha habido ninguna firma. Entre ofrecer y pagar hay la misma distancia que entre un rumor y un hecho, y el condicional compuesto, cuando se aplica a algo que no ocurrió, convierte una oferta en una compra en la cabeza del lector, aunque el periodista no lo pretendiera.",
      "El miércoles publicamos además un perfil del fundador, Ernesto Valle, y algunos lectores nos han escrito sorprendidos por sus tiempos verbales. Ernesto llega a Salamanca en 1958 con una maleta de libros de su padre; tres años después abre Arcadia en un bajo de la calle Libreros; en 1975 se trasladará al local de la esquina, donde sigue hoy. Ese presente y ese futuro que se refieren al pasado son recursos clásicos de la biografía: acercan la historia al lector sin engañarle, siempre que el bloque sea coherente. En el párrafo final volvimos al presente real: su hija, que heredó el negocio en 2009, sigue abriendo cada mañana a las diez.",
      "No todo lo hicimos bien. En el pie de una foto escribimos que, cuando nuestro fotógrafo llegó, el tasador «ya se fue», y un lector de Ciudad Rodrigo nos recordó, con toda la razón, que en un texto cuidado lo correcto es «ya se había ido». Lo hemos corregido y lo señalamos en la fe de errores, como hacemos siempre. También nos equivocamos al llamar «presunto comprador» a la cadena hotelera: comprar no es un delito, y «presunto» se reserva para quien está acusado de cometer uno.",
      "Seguiremos informando sobre Arcadia mientras haya algo que contar. Lo que podemos prometerles es que, cuando no sepamos algo, se lo diremos; cuando alguien nos lo cuente, les diremos quién; y cuando sea un hecho, lo escribiremos como tal, sin condicionales que lo diluyan. Que una librería de sesenta años pueda cerrar nos importa como vecinos. Contarlo bien nos importa como periodistas.",
    ],
    glossary: [
      { es: "dar la misma visibilidad", note: "publicar una corrección o un desmentido con el mismo relieve que la información original" },
      { es: "el pie de foto", note: "texto breve bajo una fotografía" },
      { es: "diluir", note: "debilitar algo hasta hacerlo poco perceptible" },
    ],
    tasks: [
      {
        id: "c2-03-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido los argumentos de la carta.",
        items: [
          {
            q: "Según la autora, ¿quién paga el precio del condicional de rumor?",
            options: [
              "El lector, porque no puede saber de dónde procede el dato.",
              "El periódico, porque pierde credibilidad.",
              "La fuente, porque queda expuesta.",
            ],
            answer: 0,
            why: "La forma indica que alguien lo dice, no quién: el lector no puede valorar la información.",
          },
          {
            q: "¿Por qué el diario usa a veces «no cerrará» y a veces «no cerraría»?",
            options: [
              "Por un descuido de los redactores.",
              "Porque la propietaria cambió de opinión.",
              "Porque las dos anclas temporales son válidas mientras lo dicho siga vigente.",
            ],
            answer: 2,
            why: "Una mide desde hoy y otra desde el momento en que habló; lo que evitan es mezclarlas.",
          },
          {
            q: "¿Qué error reconoce el diario además del pie de foto?",
            options: [
              "Haber publicado la cifra de tres millones.",
              "Haber llamado «presunto comprador» a la cadena hotelera.",
              "Haber citado al concejal sin su nombre.",
            ],
            answer: 1,
            why: "«Presunto» se reserva para quien está acusado de un delito.",
          },
        ],
      },
      {
        id: "c2-03-lectura-funcion",
        type: "match",
        prompt: "Relaciona cada forma citada en la carta con su función.",
        pairs: [
          { left: "un concejal afirma que cerrará", right: "atribución explícita con indicativo" },
          { left: "habría pagado tres millones", right: "condicional compuesto aplicado a un hecho no ocurrido" },
          { left: "en 1975 se trasladará al local de la esquina", right: "futuro histórico en una biografía" },
          { left: "el tasador ya se había ido", right: "anterioridad respecto de otro pasado" },
        ],
      },
      {
        id: "c2-03-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión editorial de la carta.",
        items: [
          {
            prompt: "El diario respetó que el concejal no quisiera dar su nombre, pero publicó su cargo. Explica en 80–100 palabras si te parece suficiente atribución y qué alternativa propondrías.",
            model: "Me parece una atribución mínima pero útil. El cargo permite al lector preguntarse qué sabe un concejal de Urbanismo sobre un negocio privado, cosa que el condicional nunca habría permitido. Sin embargo, yo añadiría por qué el diario considera fiable a esa fuente o si intentó contrastar el dato con la propiedad antes de publicarlo. Una alternativa sería esperar al desmentido o a la confirmación y titular solo con lo comprobado: que el edificio tiene una oferta de compra.",
            checklist: [
              "Tomo posición y la justifico.",
              "Comparo la atribución con el condicional de rumor.",
              "Propongo una alternativa concreta.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la autora explica cada forma con una frase que la contrasta con otra.",
      items: [
        { quote: "La forma verbal indica que alguien lo dice, no quién lo dice.", note: "Resumen del problema del condicional de rumor." },
        { quote: "la primera mide el futuro desde hoy y la segunda, desde el momento en que habló", note: "Las dos anclas de la correlación, con elipsis del verbo." },
        { quote: "Ernesto llega a Salamanca en 1958", note: "Presente histórico: la propia carta usa el recurso que explica." },
        { quote: "Entre ofrecer y pagar hay la misma distancia que entre un rumor y un hecho", note: "Comparación que justifica la elección del verbo y del tiempo." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección de titulares, reformulación con fuente y escritura breve. Termina recuperando las semanas anteriores y las clases de C1 que preparan esta.",
    exercises: [
      {
        id: "c2-03-orden",
        type: "order",
        prompt: "Ordena las palabras para obtener la versión con atribución explícita o con correlación coherente.",
        items: [
          {
            words: ["Fuentes", "de", "la", "inmobiliaria", "aseguran", "que", "la", "cadena", "ha", "ofrecido", "tres", "millones."],
            why: "La fuente se nombra y el verbo va en indicativo.",
          },
          {
            words: ["La", "dueña", "dijo", "que", "no", "cerraría", "mientras", "pudiera", "pagar", "el", "alquiler."],
            why: "Correlación de pasado mantenida en toda la frase.",
          },
          {
            words: ["Cuando", "llegó", "el", "fotógrafo,", "el", "tasador", "ya", "se", "había", "marchado."],
            why: "Anterioridad respecto de otro pasado: pluscuamperfecto.",
          },
        ],
      },
      {
        id: "c2-03-titulares",
        type: "context",
        prompt: "Elige el titular más adecuado según lo que se sabe.",
        items: [
          {
            context: "Tres librerías de la ciudad confirman a este diario que han recibido ofertas de la misma cadena. La cadena no responde.",
            q: "¿Qué titular eliges?",
            options: [
              "Una cadena hotelera estaría comprando librerías en Salamanca.",
              "Tres librerías confirman ofertas de compra de una cadena hotelera, que no responde.",
              "Una cadena hotelera compra tres librerías en Salamanca.",
            ],
            answer: 1,
            why: "Se nombra la fuente, se afirma lo confirmado y se indica que la otra parte no responde.",
          },
          {
            context: "Un usuario anónimo publica en redes que la propietaria ha vendido los fondos antiguos. Nadie más lo confirma.",
            q: "¿Qué haces?",
            options: [
              "Titular: «La propietaria habría vendido los fondos antiguos».",
              "Titular: «La presunta venta de los fondos antiguos».",
              "No publicar el dato hasta contrastarlo y llamar a la propietaria.",
            ],
            answer: 2,
            why: "Una única fuente anónima no basta: el condicional no convierte un rumor en noticia.",
          },
          {
            context: "El Ayuntamiento publica en su boletín oficial la concesión de una licencia de hotel para el edificio.",
            q: "¿Qué titular es adecuado?",
            options: [
              "El Ayuntamiento concede licencia de hotel al edificio de Arcadia.",
              "El edificio de Arcadia tendría licencia de hotel.",
              "Según rumores, el edificio de Arcadia sería un hotel.",
            ],
            answer: 0,
            why: "El boletín oficial confirma el hecho: indicativo, sin condicional.",
          },
        ],
      },
      {
        id: "c2-03-reformular",
        type: "transform",
        prompt: "Reformula cada frase como se indica, sin cambiar el contenido.",
        items: [
          {
            source: "La propietaria habría recibido una oferta de la cadena.",
            instruction: "Sustituye el condicional por una atribución explícita a «un portavoz de la familia» con el verbo «confirmar» en pretérito perfecto.",
            answers: ["Un portavoz de la familia ha confirmado que la propietaria recibió una oferta de la cadena.", "Un portavoz de la familia ha confirmado que la propietaria ha recibido una oferta de la cadena."],
            why: "La fuente asume el dato y el verbo de la subordinada pasa a indicativo.",
          },
          {
            source: "La dueña nos dijo: «Llámenme cuando tengan la cifra».",
            instruction: "Pasa la cita a estilo indirecto con «nos pidió que», anclada en el presente porque la petición sigue pendiente.",
            answers: ["La dueña nos pidió que la llamemos cuando tengamos la cifra."],
            why: "Petición pendiente: presente de subjuntivo en toda la cadena.",
          },
          {
            source: "Ernesto Valle llegó a Salamanca en 1958 y abrió Arcadia en 1961.",
            instruction: "Pasa el fragmento a presente histórico, coherente en todo el bloque.",
            answers: ["Ernesto Valle llega a Salamanca en 1958 y abre Arcadia en 1961."],
            why: "Si cambias de plano, cambia todo el bloque.",
          },
        ],
      },
      {
        id: "c2-03-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe la entradilla (40–60 palabras) de una noticia sobre el desmentido de la propietaria. Debe nombrar la fuente de cada dato y contener una cita en estilo indirecto con correlación coherente.",
            model: "Carmen Valle, propietaria de la librería Arcadia, desmintió ayer en un comunicado que fuera a cerrar en enero, como había afirmado el lunes un concejal de Urbanismo. Valle aseguró que no cerraría mientras pudiera pagar el alquiler y que nadie le había comunicado un cambio de uso del edificio.",
            checklist: [
              "Cada dato tiene una fuente identificable.",
              "La cita indirecta mantiene la correlación de pasado.",
              "No uso el condicional de rumor.",
            ],
          },
          {
            prompt: "Escribe un párrafo biográfico de 50–70 palabras sobre un librero inventado en presente histórico, con un futuro histórico, y una frase final que vuelva a la actualidad.",
            model: "Julia Peña nace en Béjar en 1940. A los veinte años se instala en Salamanca y entra como aprendiz en una imprenta de la calle Compañía. En 1968 abre su propia librería de viejo, que dirigirá durante cuatro décadas. Hoy sus nietos conservan el local y el sello de la casa en la puerta.",
            checklist: [
              "Todo el bloque biográfico está en presente histórico.",
              "Uso un futuro histórico para un hecho posterior.",
              "La vuelta a la actualidad es visible.",
            ],
          },
        ],
      },
      {
        id: "c2-03-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en semanas anteriores y en C1 con los estímulos que se te dan. Trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G207 (modo según perspectiva). Estímulo: «La propietaria insiste en que la librería no se vende» / «La propietaria insiste en que no se venda la librería». Explica qué hace la propietaria en cada caso.",
            model: "En la primera sostiene un dato: afirma que la librería no está en venta. En la segunda pide o exige algo: quiere que nadie la venda, por ejemplo a sus herederos o al Ayuntamiento. El verbo es el mismo y el modo de la subordinada decide si informa o exige.",
            checklist: [
              "Asocio el indicativo a sostener un dato.",
              "Asocio el subjuntivo a una exigencia.",
            ],
          },
          {
            prompt: "Recuperación de la clase G174 (condicional compuesto de conjetura). Estímulo: «Ya habría salido de la librería cuando llamamos». ¿Es un condicional de rumor? Explica en 30–50 palabras.",
            model: "No. Es una conjetura propia sobre el pasado: el hablante deduce que la persona probablemente ya había salido cuando llamaron. No atribuye el dato a nadie. Equivale a «probablemente ya había salido».",
            checklist: [
              "Identifico el valor de conjetura.",
              "Doy una paráfrasis con «probablemente».",
            ],
          },
          {
            prompt: "Recuperación de la clase G193 (polifonía y atribución). Estímulo: «Supuestamente, la librería cerraría en enero, según se dice». Reescribe la frase con una sola marca de atribución y explica por qué.",
            model: "«Según un concejal de Urbanismo, la librería cerrará en enero». Una sola marca basta, y es mejor si nombra la fuente. «Supuestamente», el condicional y «según se dice» repiten la misma distancia sin decir de quién es el dato.",
            checklist: [
              "Dejo una sola marca de atribución.",
              "Explico por qué la acumulación no aporta nada.",
            ],
          },
          {
            prompt: "Recuperación de la clase G130 (correlación básica). Estímulo: «Quiero que la propietaria hable con nosotros» → contado una semana después. Escribe la versión en pasado y otra anclada en el presente, y di cuándo vale cada una.",
            model: "«Quería que la propietaria hablara con nosotros» vale siempre. «Quería que la propietaria hable con nosotros» solo vale si el deseo sigue vigente, porque todavía no ha hablado. Si ya habló, solo la primera es adecuada.",
            checklist: [
              "Escribo las dos versiones.",
              "Explico la condición de validez del presente.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la crónica de seguimiento sobre la librería Arcadia (400–520 palabras) que el diario publicará una semana después de la primera noticia. Cuenta qué se sabe, quién lo dice, qué se ha desmentido y qué sigue sin confirmarse, e incluye un breve bloque biográfico del fundador.",
    context: "La crónica sale en la portada del diario digital. El lector conoce la noticia del lunes, pero no ha seguido los detalles. Puedes usar los datos de esta semana o inventar otros con la misma lógica, sin presentar como hecho nada que no esté confirmado.",
    steps: [
      "Haz una tabla con tres columnas: dato, fuente y estado (confirmado, desmentido, sin confirmar).",
      "Decide el orden: novedad principal, cronología de la semana, citas de las partes, bloque biográfico y lo que queda abierto.",
      "Redacta sin copiar el modelo. Elige un ancla temporal para cada cita indirecta y mantenla; si usas presente histórico en la biografía, que sea en todo el bloque.",
      "Revisa la crónica con la lista de control: corrige cualquier condicional sin fuente, cualquier «presunto» mal aplicado y cualquier mezcla de tiempos. Lee la entradilla en voz alta.",
    ],
    useLanguage: [
      "según + fuente + indicativo / fuentes de… aseguran que…",
      "al parecer, … / … no ha confirmado que…",
      "dijo que cerraría / cerrará (un ancla por frase)",
      "pidió que la llamáramos / llamemos",
      "cuando llegó, ya se había ido",
      "presente histórico y futuro histórico en la biografía",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Una semana después de que un concejal de Urbanismo afirmara que la librería Arcadia cerraría en enero, lo único confirmado es que el edificio tiene una oferta de compra. Fuentes de la inmobiliaria aseguran que una cadena hotelera ha ofrecido tres millones de euros; la cadena no ha respondido a las preguntas de este diario. La propietaria, Carmen Valle, insiste en que no ha firmado nada y nos pidió el viernes que publicáramos su comunicado íntegro, cosa que hicimos ese mismo día.",
    ],
    checklist: [
      "Cada dato tiene una fuente visible o se presenta como no confirmado.",
      "No uso el condicional de rumor para hechos confirmados ni lo acumulo con otras marcas.",
      "Cada cita indirecta mantiene un ancla temporal coherente.",
      "Uso pluscuamperfecto para la anterioridad en el pasado.",
      "El bloque biográfico cambia de plano de forma deliberada y vuelve a la actualidad.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave y no leas un guion. Si te grabas, la grabación se queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Boletín informativo de cuatro minutos",
        prompt: "Presenta en un boletín de radio local la noticia de Arcadia: qué se sabe, quién lo dice, qué se ha desmentido y qué queda por confirmar. Incluye una cita indirecta de la propietaria y un breve recuerdo del fundador.",
        prep: [
          "Anota cada dato con su fuente y su estado.",
          "Marca en tus notas dónde harás pausas para los incisos de atribución.",
        ],
        seconds: 240,
        model: "Buenos días. Seguimos con la librería Arcadia, en la calle Libreros. Según un concejal de Urbanismo, cerraría en enero; la propietaria, Carmen Valle, lo desmintió el martes y dijo que no cerrará mientras pueda pagar el alquiler. Lo que sí está confirmado, por fuentes de la inmobiliaria, es que una cadena hotelera ha ofrecido tres millones por el edificio. Un poco de historia: Ernesto Valle llega a Salamanca en 1958…",
        selfCheck: [
          "Cada dato lleva su fuente.",
          "Marco con la voz los incisos de atribución.",
          "Mantengo un ancla temporal coherente en cada cita.",
        ],
      },
      {
        title: "Réplica de la propietaria",
        prompt: "Carmen Valle llama al diario indignada: cree que el titular del lunes la ha perjudicado. Escúchala, hazle dos preguntas para concretar qué le molesta, explícale cómo se atribuyó el dato y ofrécele una forma de ejercer su derecho de réplica.",
        prep: [
          "Prepara una frase que reconozca su malestar sin admitir un error que no hubo.",
          "Ten a mano la diferencia entre «cerraría» y «un concejal afirma que cerrará».",
        ],
        seconds: 180,
        model: "Entiendo que le haya molestado, señora Valle. ¿Qué parte del titular le ha perjudicado más? ¿Ha recibido llamadas de clientes por eso? Nosotros no dijimos que la librería cerraría: dijimos que un concejal lo afirmaba, y publicamos su desmentido el martes con la misma visibilidad. Si quiere, le ofrecemos un texto de réplica firmado por usted en la sección de opinión.",
        selfCheck: [
          "Hago al menos dos preguntas reales.",
          "Explico la atribución sin ponerme a la defensiva.",
          "Propongo una solución concreta.",
        ],
      },
      {
        title: "La biografía en noventa segundos",
        prompt: "Cuenta la vida de Ernesto Valle (o de un librero que conozcas) en presente histórico, con al menos un futuro histórico, y termina volviendo a la actualidad.",
        prep: [
          "Anota cinco fechas y un verbo para cada una.",
          "Decide con qué frase volverás al presente real.",
        ],
        seconds: 90,
        selfCheck: [
          "No salto al indefinido dentro del bloque biográfico.",
          "La vuelta a la actualidad se nota.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase titulares reales y tus dudas sobre los tiempos. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Analiza",
        task: "Lleva un titular real con condicional y pide a tu profesor que te ayude a decidir si es rumor, conjetura, cortesía o hipótesis.",
        phrases: ["¿Aquí el condicional atribuye o conjetura?", "¿Quién responde de este dato?"],
      },
      {
        move: "Reescribe",
        task: "Reescribe ese titular con atribución explícita y defiende tu versión ante tu profesor.",
        phrases: ["He nombrado la fuente porque…", "Prefiero el indicativo aquí porque…"],
      },
      {
        move: "Pregunta",
        task: "Pregunta si en tu variedad o en la de tu profesor se usa «ya se fue» por «ya se había ido» y en qué registros se acepta.",
        phrases: ["¿Esto lo dirías en una conversación?", "¿Y en un texto formal?"],
      },
      {
        move: "Cuenta",
        task: "Cuenta en presente histórico un episodio de tu vida y pide a tu profesor que señale si cambiaste de plano por despiste.",
        phrases: ["En 2015 me mudo a…", "Tres años después conoceré a…"],
      },
    ],
    bring: "Un titular real con condicional, tu crónica revisada y la tabla de datos, fuentes y estados.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En «Según la policía, el detenido habría entrado por la ventana del almacén», ¿qué expresa «habría entrado»?",
        options: [
          "Un hecho pasado no confirmado, atribuido a una fuente.",
          "Una hipótesis irreal: no entró.",
          "Una petición cortés.",
        ],
        answer: 0,
        why: "Condicional compuesto de rumor para un pasado no confirmado, con fuente explícita.",
      },
      {
        type: "choice",
        q: "La propietaria dijo en 2018: «Me jubilaré en 2020». Hoy, 2026, ¿cómo lo cuentas?",
        options: [
          "Dijo que se jubilará en 2020.",
          "Dijo que se jubilaría en 2020.",
          "Dijo que se jubile en 2020.",
        ],
        answer: 1,
        why: "El contenido ya pertenece al pasado: solo vale la correlación de pasado.",
      },
      {
        type: "listen",
        q: "Escucha el titular. ¿Qué tipo de información transmite?",
        options: [
          "Un hecho confirmado por un documento.",
          "Una conjetura del propio periodista.",
          "Un dato no confirmado, atribuido a una fuente genérica.",
        ],
        answer: 2,
        why: "«Fuentes vecinales» + condicional: atribución genérica de un dato no confirmado.",
        audio: "La cadena estaría interesada en otros dos edificios de la calle, según fuentes vecinales.",
        voice: "es-ES-m",
      },
      {
        type: "gap",
        q: "Cuando la periodista llamó, la dueña ya ___ el comunicado. [enviar]",
        answers: [["había enviado"]],
        hint: "Anterioridad respecto de otro hecho pasado en un texto cuidado.",
        why: "Pluscuamperfecto para la anterioridad en el pasado.",
      },
      {
        type: "gap",
        q: "Me prometió que, cuando ___ la mudanza, me llamaría. [acabar]",
        answers: [["acabara", "acabase"]],
        hint: "La cadena depende de «prometió», que está en pasado.",
        why: "«Cuando» con valor futuro dentro de un pasado: imperfecto de subjuntivo.",
      },
      {
        type: "transform",
        source: "El alcalde habría prometido ayudas a las librerías del casco histórico.",
        instruction: "Reescribe la información atribuyéndola a «dos libreros presentes en la reunión» con el verbo «asegurar», sin condicional.",
        answers: ["Dos libreros presentes en la reunión aseguran que el alcalde prometió ayudas a las librerías del casco histórico.", "Dos libreros presentes en la reunión aseguran que el alcalde ha prometido ayudas a las librerías del casco histórico.", "Dos libreros presentes en la reunión aseguraron que el alcalde prometió ayudas a las librerías del casco histórico."],
        why: "La fuente explícita asume el dato y permite el indicativo.",
      },
      {
        type: "error",
        sentence: "Según el acta notarial, la venta se habría firmado el 3 de marzo.",
        answers: ["Según el acta notarial, la venta se firmó el 3 de marzo."],
        why: "Un acta notarial confirma el hecho: el condicional sobra.",
      },
      {
        type: "error",
        sentence: "El fundador entra en la imprenta, coge las pruebas y salió corriendo hacia la librería.",
        answers: ["El fundador entra en la imprenta, coge las pruebas y sale corriendo hacia la librería.", "El fundador entró en la imprenta, cogió las pruebas y salió corriendo hacia la librería."],
        why: "Cambio de plano involuntario dentro de la misma secuencia.",
      },
      {
        type: "order",
        words: ["La", "propietaria", "nos", "pidió", "que", "la", "llamáramos", "antes", "de", "publicar."],
        why: "Correlación de pasado: «pidió» + imperfecto de subjuntivo.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un redactor en prácticas por qué «La librería cerraría en enero» y «Un concejal afirma que la librería cerrará en enero» no informan de lo mismo, aunque se refieran al mismo dato.",
        model: "Las dos frases transmiten un dato que el diario no ha confirmado, pero solo la segunda dice quién responde de él. El condicional de la primera indica que alguien lo afirma, sin decir quién; el lector no sabe si viene de un documento o de un rumor. La segunda nombra un cargo, de modo que el lector puede valorar la fiabilidad de la fuente. Además, si el dato resulta falso, la responsabilidad queda clara. Por eso muchos libros de estilo recomiendan la atribución explícita.",
        checklist: [
          "Explico qué indica y qué calla el condicional de rumor.",
          "Señalo la ventaja de nombrar la fuente.",
          "Menciono la recomendación de los libros de estilo.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Reconozco el condicional de rumor, elijo el simple o el compuesto según la referencia temporal y lo distingo de la conjetura, la cortesía y la hipótesis.",
      "Evalúo un titular con condicional y lo reformulo con atribución explícita, respetando la presunción de inocencia sin acumular marcas.",
      "Mido el tiempo de una subordinada desde el hecho contado o desde ahora, y sé cuándo solo vale la correlación de pasado.",
      "Encadeno subordinadas coherentes, uso pluscuamperfecto para la anterioridad y cambio de plano en un relato solo de forma deliberada.",
    ],
    review: [
      "Dentro de dos días, toma tres titulares de un periódico y clasifica sus condicionales según su valor.",
      "Dentro de una semana, cuenta por escrito algo que alguien te prometió hace tiempo y decide qué ancla temporal admite.",
      "En la próxima clase, lee la entradilla de tu crónica y pide a tu profesor que señale el dato con la atribución más débil.",
    ],
  },
  related: [
    { path: "/gramatica/valores-discursivos-del-condicional-de-rumor", label: "Clase: Valores discursivos del condicional de rumor" },
    { path: "/gramatica/correlaciones-temporales-complejas-y-cambios-de", label: "Clase: Correlaciones temporales complejas y cambios de plano" },
  ],
};
