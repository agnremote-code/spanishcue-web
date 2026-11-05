import type { Module } from "../../types";

/**
 * C2 · semana 17 · Autoestudio espejo de G231 (puntuación avanzada: punto y
 * coma, dos puntos e incisos). Repaso autónomo con el catálogo ficticio de una
 * exposición sobre el puerto de Asunción y el comercio fluvial.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w17: Module = {
  id: "c2-17",
  level: "c2",
  week: 17,
  kind: "core",
  title: "Fronteras dentro de la frase: el río también se puntúa",
  subtitle: "Repaso del punto y coma, los dos puntos, los incisos anidados, las comillas en tres niveles y los puntos suspensivos según la Ortografía académica",
  stop: {
    place: "Asunción",
    country: "Paraguay",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g231",
    "c2.voc.w17-puerto-catalogo",
    "c2.pron.w17-leer-signos",
    "c2.lis.w17-revision-catalogo",
    "c2.read.w17-ensayo-puerto",
    "c2.wri.w17-texto-presentacion",
    "c2.spk.w17-justificar-signos",
    "c2.fun.w17-negociar-correccion",
    "c2.disc.w17-jerarquia-fronteras",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo puntuar textos complejos según la Ortografía académica: decidir entre coma, punto y coma y punto, usar los dos puntos con cada una de sus funciones, anidar incisos y citas sin confundir al lector y leer en voz alta haciendo oír esa puntuación.",
    steps: [
      "Repasa en la teoría la jerarquía de fronteras, los usos del punto y coma y de los dos puntos, los incisos anidados y las comillas, y los errores más frecuentes.",
      "Practica con los textos del catálogo de una exposición sobre el puerto de Asunción.",
      "Escucha la revisión de la editora y el historiador y lee el ensayo central del catálogo.",
      "Redacta el texto de presentación de una exposición, revísalo signo por signo y defiende en voz alta tus decisiones de puntuación.",
    ],
  },
  theory: {
    intro: "En clase viste estos signos con tu profesor. Aquí los repasas en Asunción, donde un archivo municipal prepara una exposición sobre el viejo puerto y el comercio por el río Paraguay. La editora del catálogo revisa los textos del historiador que lo escribe: cartelas, pies de foto y un ensayo central lleno de enumeraciones, citas de cronistas y aclaraciones dentro de aclaraciones. La pregunta que guía toda la semana es siempre la misma: ¿dónde está la frontera principal de este enunciado, y qué signo le corresponde?",
    parts: [
      {
        heading: "El punto y coma: una frontera intermedia",
        body: [
          "El punto y coma marca una pausa mayor que la coma y menor que el punto. Tiene tres usos principales. Primero, separa oraciones independientes que el sentido mantiene muy unidas: «El muelle norte se usaba para la yerba; el del sur, para la madera». Segundo, separa los elementos de una enumeración compleja cuando cada uno ya contiene comas; delante del último elemento, introducido por «y», lo habitual es la coma. Tercero, va delante de conectores como «sin embargo», «no obstante», «por tanto» o «en cambio» cuando las oraciones tienen cierta longitud; si son muy largas, es preferible el punto. También puede preceder a «pero» cuando los dos miembros son largos y llevan comas.",
          "Detrás del punto y coma siempre se escribe minúscula. Y hay un uso que no le corresponde: después de una subordinada antepuesta («Cuando bajaba el río, los vapores esperaban en la bahía») va coma, nunca punto y coma.",
        ],
        table: {
          caption: "Los tres usos del punto y coma",
          head: ["Uso", "Ejemplo del catálogo"],
          rows: [
            ["oraciones relacionadas sin nexo", "La aduana cerraba a las seis; los estibadores seguían cargando a la luz de los faroles."],
            ["enumeración compleja", "Llegaban cueros, de Concepción; yerba, del norte; tabaco, de Villarrica, y madera, del Chaco."],
            ["ante conector con oraciones de cierta longitud", "El puerto había crecido durante tres décadas sin ningún plan; sin embargo, nadie se atrevía a reformarlo."],
          ],
        },
        mistakes: [
          {
            wrong: "Cuando llegaban los vapores del sur; la ciudad entera bajaba al puerto.",
            right: "Cuando llegaban los vapores del sur, la ciudad entera bajaba al puerto.",
            why: "Tras una subordinada antepuesta va coma; el punto y coma separa oraciones del mismo nivel.",
          },
        ],
      },
      {
        heading: "Los dos puntos: anunciar, cerrar, explicar, citar y saludar",
        body: [
          "Los dos puntos detienen el discurso para llamar la atención sobre lo que sigue. Anuncian una enumeración cuando antes hay un elemento que la anticipa («tres», «los siguientes», «estos»): «El puerto exportaba tres productos: yerba, cueros y madera». Cierran una enumeración antes de la palabra que la resume: «Yerba, cueros y madera: eso era el puerto». Unen sin nexo dos oraciones cuando la segunda es causa, consecuencia, conclusión o explicación de la primera: «Los vapores no llegaron: el río había bajado dos metros». Introducen las citas en estilo directo y siguen al saludo de una carta: «Estimada Sra. Benítez:».",
          "Después de los dos puntos se escribe minúscula en el texto corrido; mayúscula, solo si sigue una cita o en las cartas, tras el saludo. Hay tres usos incorrectos frecuentes: poner dos puntos entre un verbo o una preposición y su complemento («*Los productos eran: yerba…»); ponerlos antes del estilo indirecto («*El capitán dijo: que no zarparía»), y encadenar dos pares de dos puntos en la misma oración, que la norma desaconseja por estilo.",
        ],
        examples: [
          { es: "Las causas del declive fueron dos: la llegada del ferrocarril y la crisis de los años treinta.", note: "Anuncio tras un elemento anticipador («dos»)." },
          { es: "La bahía se llenaba de arena cada invierno: había que dragarla dos veces al año.", note: "Consecuencia sin nexo." },
          { es: "El cronista lo resumió así: «Asunción mira al río y le da la espalda al mismo tiempo».", note: "Cita en estilo directo: mayúscula tras los dos puntos." },
          { es: "Los productos eran yerba, cueros y madera.", note: "Sin dos puntos entre el verbo y su complemento." },
        ],
        mistakes: [
          {
            wrong: "El capitán declaró: que no zarparía hasta que subiera el río.",
            right: "El capitán declaró que no zarparía hasta que subiera el río. / El capitán declaró: «No zarparé hasta que suba el río».",
            why: "Los dos puntos introducen el estilo directo; el indirecto, con «que», no los admite.",
          },
        ],
      },
      {
        heading: "Incisos dentro de incisos: paréntesis, rayas y corchetes",
        body: [
          "Un inciso es una aclaración que interrumpe la oración. Cuando dentro de un inciso hace falta otro, se cambia de signo para que el lector sepa dónde se abre y dónde se cierra cada uno. Si el inciso exterior va entre rayas, el interior va entre paréntesis; si el exterior va entre paréntesis, el interior va entre rayas o, en un tercer nivel, entre corchetes. Los corchetes sirven además para las interpolaciones del editor dentro de una cita («El cronista escribió que “ella [la ciudad] vivía del río”») y, con puntos suspensivos dentro, para marcar que se ha omitido un fragmento: […].",
          "La raya de cierre no se omite aunque el inciso termine justo antes de un punto: «La aduana —construida con piedra traída en balsas— sigue en pie». Y si después del inciso la oración necesita una coma o un punto, ese signo va detrás de la raya o del paréntesis de cierre, nunca delante.",
        ],
        table: {
          caption: "Anidar sin perder al lector",
          head: ["Nivel exterior", "Nivel interior", "Ejemplo"],
          rows: [
            ["rayas", "paréntesis", "El edificio —que diseñó un arquitecto italiano (cuyo nombre no consta en el acta)— se terminó tarde."],
            ["paréntesis", "rayas", "La jangada (una balsa de troncos —a veces de cien metros— que bajaba con la corriente) traía la madera."],
            ["paréntesis", "corchetes", "El inventario (fechado en el archivo [legajo 14] como «sin año») enumera doce barcos."],
            ["cita", "corchetes", "«Ellos [los estibadores] cobraban por bulto, no por hora»."],
          ],
        },
        mistakes: [
          {
            wrong: "El catálogo (que se imprimirá en Asunción (en la imprenta municipal)) tendrá doscientas páginas.",
            right: "El catálogo (que se imprimirá en Asunción [en la imprenta municipal]) tendrá doscientas páginas. / El catálogo (que se imprimirá en Asunción —en la imprenta municipal—) tendrá doscientas páginas.",
            why: "Dos pares de paréntesis anidados confunden; el inciso interior cambia de signo.",
          },
        ],
      },
      {
        heading: "Comillas en tres niveles, puntos suspensivos y preguntas en serie",
        body: [
          "En español se usan primero las comillas angulares, después las inglesas y, en un tercer nivel, las simples: «El cronista anotó: “Los marineros llamaban al muelle ‘el purgatorio’ por el calor”». El punto de la oración va siempre detrás de las comillas de cierre, aunque la cita termine con signo de interrogación o de exclamación: «¿Quién paga la descarga?».",
          "Los puntos suspensivos son siempre tres, nunca cuatro, y no se escriben después de «etc.», porque significan lo mismo. Pueden ir seguidos de coma, de punto y coma o de dos puntos: «Yerba, cueros, tabaco…, todo pasaba por la aduana». Los signos de interrogación y exclamación se abren donde empieza la pregunta, aunque no coincida con el principio de la oración («El puerto, ¿quién lo administraba?»), y en una serie de preguntas breves pueden separarse con coma y continuar en minúscula: «¿Quién cargaba?, ¿quién cobraba?, ¿quién llevaba las cuentas?».",
        ],
        examples: [
          { es: "La placa decía: «Aquí desembarcó el vapor “Libertad” en su primer viaje».", note: "Comillas inglesas dentro de las angulares." },
          { es: "En la aduana se registraban yerba, cueros, madera, etc.", note: "Nunca «etc.…»: el «etc.» ya indica que la lista sigue." },
          { es: "Y la aduana, ¿cuándo dejó de funcionar?", note: "El signo se abre donde empieza la pregunta." },
        ],
        tip: "Antes de revisar los signos de un párrafo largo, localiza su frontera principal y márcala con el signo más fuerte que el sentido permita; después baja a las fronteras menores.",
      },
    ],
  },
  grammar: {
    intro: "Primero identifica qué signo corresponde a cada frontera; después clasifica sus funciones y corrige los incisos anidados.",
    exercises: [
      {
        id: "c2-17-gramatica-signo",
        type: "context",
        prompt: "Lee el fragmento del catálogo y elige el signo que corresponde en la posición marcada con [ ].",
        items: [
          {
            context: "Cartela: «El puerto exportaba tres productos[ ] yerba, cueros y madera».",
            q: "¿Qué signo va en [ ]?",
            options: ["punto y coma", "dos puntos", "coma"],
            answer: 1,
            why: "«Tres» anticipa la enumeración: dos puntos.",
          },
          {
            context: "Ensayo: «El muelle norte era de los comerciantes de yerba[ ] el del sur, de los madereros».",
            q: "¿Qué signo va en [ ]?",
            options: ["dos puntos", "raya", "punto y coma"],
            answer: 2,
            why: "Dos oraciones independientes muy relacionadas; en la segunda se omite el verbo.",
          },
          {
            context: "Ensayo: «Cuando el río bajaba más de dos metros[ ] los vapores grandes no podían atracar».",
            q: "¿Qué signo va en [ ]?",
            options: ["coma", "punto y coma", "dos puntos", "ningún signo"],
            answer: 0,
            why: "Tras una subordinada antepuesta va coma.",
          },
          {
            context: "Pie de foto: «Los productos que se embarcaban eran[ ] yerba, cueros y madera».",
            q: "¿Qué signo va en [ ]?",
            options: ["dos puntos", "ningún signo", "punto y coma"],
            answer: 1,
            why: "No se separa el verbo de su complemento.",
          },
        ],
      },
      {
        id: "c2-17-gramatica-anticipadores",
        type: "gap",
        prompt: "Completa con la palabra que hace correcta la puntuación del fragmento.",
        items: [
          { q: "Las causas del cierre de la aduana fueron ___: el ferrocarril, la crisis y el cambio de cauce. [número]", answers: [["tres"]], why: "Un elemento anticipador justifica los dos puntos." },
          { q: "Yerba, cueros, tabaco y madera: ___ pasaba por el muelle. [palabra que resume la enumeración]", answers: [["todo"]], why: "Los dos puntos cierran la enumeración antes de la palabra que la resume." },
          { q: "El puerto había crecido sin ningún plan durante treinta años; ___, nadie se atrevía a reformarlo. [conector de contraste]", answers: [["sin embargo", "no obstante"]], why: "Punto y coma ante un conector cuando las oraciones tienen cierta longitud." },
          { q: "El funcionario ___ que no había registros de aquel año. [verbo de lengua en estilo indirecto, sin dos puntos]", answers: [["afirmó", "dijo", "declaró", "aseguró", "explicó"]], why: "En estilo indirecto no hay dos puntos." },
          { q: "La aduana registraba yerba, cueros, madera, ___ [abreviatura que cierra la lista, con su punto]", answers: [["etc."]], why: "Tras «etc.» no se añaden puntos suspensivos." },
        ],
      },
      {
        id: "c2-17-gramatica-funciones",
        type: "classify",
        prompt: "Clasifica cada fragmento según la función de sus dos puntos.",
        categories: ["Anuncia una enumeración", "Une causa, consecuencia o explicación", "Introduce una cita", "Sigue al saludo de una carta"],
        items: [
          { text: "Los vapores traían tres cosas: pasajeros, correo y noticias.", cat: 0, why: "«Tres cosas» anticipa la lista." },
          { text: "La descarga se retrasó: no había estibadores suficientes.", cat: 1, why: "La segunda oración es la causa." },
          { text: "El práctico advirtió: «Con este nivel, no pasamos el banco de arena».", cat: 2, why: "Estilo directo." },
          { text: "Estimado Sr. Ayala:", cat: 3, why: "Saludo de carta." },
          { text: "El muelle se hundió en 1905: hubo que reconstruirlo entero.", cat: 1, why: "Consecuencia." },
          { text: "Necesitamos lo siguiente: planos, fotografías y el inventario.", cat: 0, why: "«Lo siguiente» anticipa." },
          { text: "La capitana del barco lo dijo claro: «Aquí no descarga nadie sin pagar».", cat: 2, why: "Cita textual." },
          { text: "Querida Graciela:", cat: 3, why: "Saludo de carta informal." },
        ],
      },
      {
        id: "c2-17-gramatica-errores",
        type: "error",
        prompt: "Corrige los incisos y las citas anidadas de cada frase.",
        items: [
          {
            sentence: "La aduana (inaugurada en tiempos de López (padre)) tenía tres pisos.",
            answers: ["La aduana (inaugurada en tiempos de López [padre]) tenía tres pisos.", "La aduana (inaugurada en tiempos de López —padre—) tenía tres pisos."],
            why: "El inciso interior no puede usar los mismos paréntesis que el exterior.",
          },
          {
            sentence: "El diario escribió: «Los marineros llaman al muelle ‘el purgatorio’».",
            answers: ["El diario escribió: «Los marineros llaman al muelle “el purgatorio”»."],
            why: "Según la jerarquía recomendada, dentro de las angulares van las inglesas; las simples quedan para el tercer nivel.",
          },
          {
            sentence: "El cronista anotó: «La gente decía “el barco ‘Tacuarí’ trae “buena suerte””».",
            answers: ["El cronista anotó: «La gente decía “el barco ‘Tacuarí’ trae ‘buena suerte’”»."],
            why: "El tercer nivel de comillas son las simples, también para la segunda cita interior.",
          },
          {
            sentence: "«Los estibadores (...) cobraban por bulto, no por hora», escribe el cronista.",
            answers: ["«Los estibadores […] cobraban por bulto, no por hora», escribe el cronista."],
            why: "Una omisión dentro de una cita se marca con corchetes y puntos suspensivos.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico del comercio por el río Paraguay y de la edición de un catálogo de exposición.",
    groups: [
      {
        title: "El puerto y el río",
        items: [
          { es: "el muelle", note: "construcción junto al agua donde atracan los barcos" },
          { es: "la aduana", note: "oficina pública que controla y cobra impuestos a las mercancías" },
          { es: "el vapor", note: "barco movido por una máquina de vapor" },
          { es: "el estibador", note: "persona que carga y descarga los barcos" },
          { es: "la jangada", note: "en la cuenca del Paraná y del Paraguay, balsa grande de troncos que se lleva río abajo" },
          { es: "atracar", note: "arrimar un barco al muelle para amarrarlo" },
        ],
      },
      {
        title: "La edición del catálogo",
        items: [
          { es: "la cartela", note: "texto breve que acompaña una pieza en una exposición" },
          { es: "el pie de foto", note: "texto que explica una imagen, debajo de ella" },
          { es: "las galeradas", note: "pruebas de imprenta que se corrigen antes de la edición final" },
          { es: "la errata", note: "error de escritura o de imprenta" },
          { es: "la interpolación", note: "palabra que el editor añade dentro de una cita, entre corchetes" },
          { es: "el legajo", note: "conjunto de documentos atados que se guarda en un archivo" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-17-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada término con su definición.",
        pairs: [
          { left: "la jangada", right: "en la cuenca del Paraná y del Paraguay, balsa grande de troncos que se lleva río abajo" },
          { left: "el estibador", right: "persona que carga y descarga los barcos" },
          { left: "la cartela", right: "texto breve que acompaña una pieza en una exposición" },
          { left: "las galeradas", right: "pruebas de imprenta que se corrigen antes de la edición final" },
          { left: "la interpolación", right: "palabra que el editor añade dentro de una cita, entre corchetes" },
          { left: "atracar", right: "arrimar un barco al muelle para amarrarlo" },
        ],
      },
      {
        id: "c2-17-lexico-uso",
        type: "gap",
        prompt: "Completa con la palabra adecuada del vocabulario.",
        bank: ["errata", "legajo", "pie de foto", "aduana"],
        items: [
          { q: "La lista de barcos de 1898 apareció en un ___ mal clasificado del archivo.", answers: [["legajo"]] },
          { q: "En el ___ de la imagen del muelle falta el año.", answers: [["pie de foto"]] },
          { q: "La editora encontró una ___ en la fecha de fundación: ponía 1573 en lugar de 1537.", answers: [["errata"]] },
          { q: "Los comerciantes pagaban en la ___ un impuesto por cada fardo de yerba.", answers: [["aduana"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Hacer oír la puntuación al leer en voz alta",
    explanation: [
      "La puntuación también se oye. La coma pide una pausa breve y, si la frase continúa, un tono que no baja del todo; el punto y coma, una pausa algo más larga, con un descenso de tono más claro; el punto, un descenso completo y una pausa larga. Si lees igual una coma y un punto y coma, el oyente no sabe dónde está la frontera principal de la enumeración.",
      "Antes de los dos puntos la voz queda suspendida, como anunciando algo. Los incisos (entre comas, rayas o paréntesis) se leen con un tono más bajo y un poco más rápido, y la voz vuelve a su altura normal al cerrarlos. En una cita, un leve cambio de voz o una pausa antes y después ayudan a distinguir las palabras ajenas; y los puntos suspensivos se leen con el tono en el aire, sin cerrar.",
      "El audio utiliza la síntesis disponible en el navegador: reproduce pausas según los signos, pero no siempre con naturalidad ni con un acento regional verificado. Úsalo como referencia para las pausas y practica la entonación con una persona.",
    ],
    table: {
      caption: "Signo y voz",
      head: ["Signo", "Cómo se oye"],
      rows: [
        ["coma", "pausa breve; tono que no termina de bajar"],
        ["punto y coma", "pausa media; descenso de tono más claro"],
        ["dos puntos", "voz suspendida que anuncia lo que sigue"],
        ["inciso", "tono más bajo y algo más rápido"],
        ["puntos suspensivos", "tono en el aire, sin cierre"],
      ],
    },
    perceive: {
      id: "c2-17-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y responde según lo que oyes.",
      items: [
        {
          q: "¿Qué parte de la frase se lee como inciso, con tono más bajo?",
          options: ["la aduana", "construida con piedra del río", "sigue en pie"],
          answer: 1,
          why: "Es la aclaración intercalada.",
          audio: "La aduana, construida con piedra del río, sigue en pie.",
          voice: "es-AR-f",
        },
        {
          q: "¿Cuántos grupos principales tiene la enumeración que oyes?",
          options: ["Dos.", "Tres.", "Seis."],
          answer: 1,
          why: "Tres grupos producto-origen, separados por pausas mayores.",
          audio: "Llegaban cueros, de Concepción; yerba, del norte; y madera, del Chaco.",
          voice: "es-UY-m",
        },
        {
          q: "¿Qué relación hay entre las dos partes de la frase?",
          options: ["La segunda es la causa de la primera.", "La segunda contradice la primera.", "No tienen relación."],
          answer: 0,
          why: "La voz suspendida anuncia una explicación: el río había bajado.",
          audio: "Los vapores no llegaron aquel mes: el río había bajado casi tres metros.",
          voice: "es-UY-f",
        },
        {
          q: "¿Qué indica el final de la frase?",
          options: ["Que la lista está completa.", "Que es una pregunta.", "Que la enumeración queda abierta."],
          answer: 2,
          why: "Los puntos suspensivos dejan el tono en el aire.",
          audio: "Yerba, tabaco, cueros, naranjas…",
          voice: "es-AR-m",
        },
      ],
    },
    produce: [
      { text: "El muelle norte era de los yerbateros; el del sur, de los madereros.", tip: "Pausa media en el punto y coma, más breve en la coma que sustituye al verbo.", voice: "es-AR-m" },
      { text: "Las causas fueron dos: el ferrocarril y la crisis.", tip: "Suspende la voz en «dos» antes de la enumeración.", voice: "es-UY-f" },
      { text: "La jangada —una balsa de troncos que bajaba con la corriente— tardaba semanas en llegar.", tip: "Tono más bajo en el inciso y vuelta a la altura normal en «tardaba».", voice: "es-AR-f" },
      { text: "¿Quién cargaba?, ¿quién cobraba?, ¿quién llevaba las cuentas?", tip: "Tres preguntas seguidas: entonación de pregunta en cada una, pausa breve entre ellas.", voice: "es-UY-m" },
    ],
    spelling: "Las comillas angulares van primero; dentro, las inglesas; dentro de estas, las simples. El punto de la oración va siempre después de las comillas de cierre. Los puntos suspensivos son tres y no se añaden después de «etc.».",
  },
  listening: {
    title: "Las galeradas del catálogo",
    context: "Graciela, editora del catálogo de la exposición del archivo municipal de Asunción, y Rodrigo, el historiador que escribió los textos, revisan juntos las galeradas por teléfono. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "g", name: "Graciela", voice: "es-AR-f", role: "Editora del catálogo" },
      { id: "r", name: "Rodrigo", voice: "es-UY-m", role: "Historiador y autor de los textos" },
    ],
    script: [
      { speaker: "g", text: "Rodrigo, tengo delante las galeradas y antes de devolverlas a la imprenta quiero repasar contigo la puntuación del ensayo central. No son erratas graves, pero son muchas, y en un catálogo se nota todo." },
      { speaker: "r", text: "Adelante. Ya sé que con los signos soy un desastre." },
      { speaker: "g", text: "No tanto. Empiezo por la enumeración de la página cuatro. Escribiste «llegaban cueros de Concepción, yerba del norte, tabaco de Villarrica y madera del Chaco», todo con comas. Pero en la versión larga añadiste la fecha de cada producto, y ahora cada elemento tiene su propia coma. Así no se sabe dónde termina uno y empieza el otro. Te propongo punto y coma entre los elementos y coma antes del último, el de la madera." },
      { speaker: "r", text: "¿Antes de la «y» no iba punto y coma también?" },
      { speaker: "g", text: "Se ve a veces, pero lo habitual, y lo que muestran los ejemplos de la Ortografía, es la coma. Lo importante es que la frontera principal sea el punto y coma. Segundo punto: en la página seis pones «los productos que salían del puerto eran: yerba, cueros y madera». Esos dos puntos sobran, porque separan el verbo de su complemento." },
      { speaker: "r", text: "Pero quiero que se note que viene una lista." },
      { speaker: "g", text: "Entonces añade un elemento que la anuncie: «los productos que salían del puerto eran tres: yerba, cueros y madera». Con «tres», los dos puntos sí funcionan. Lo mismo pasa con la declaración del capitán: escribiste «el capitán dijo: que no zarparía». O quitas los dos puntos, o lo pasas a estilo directo, con comillas." },
      { speaker: "r", text: "Prefiero el estilo directo, que es más vivo: «El capitán dijo: “No zarpo hasta que suba el río”». Bueno, con comillas angulares fuera, ¿no?" },
      { speaker: "g", text: "Exacto. Y eso me lleva a la cita del cronista, que tiene tres niveles: el cronista cita a un marinero, y el marinero repite el apodo del muelle. Angulares, luego inglesas y el apodo, «el purgatorio», entre comillas simples. Y el punto final, después de todas las comillas." },
      { speaker: "r", text: "Me parece bien. ¿Algo más?" },
      { speaker: "g", text: "Un inciso dentro de otro. En la página nueve, el paréntesis sobre la aduana tiene otro paréntesis dentro, con el número del legajo. Te propongo corchetes para el número. Y en la cita del inventario, donde cortaste un fragmento, pusiste puntos suspensivos entre paréntesis. En una cita la omisión va entre corchetes." },
      { speaker: "r", text: "Perfecto, cámbialo todo. Solo te pido una cosa: la serie de preguntas del final, «¿quién cargaba?, ¿quién cobraba?, ¿quién llevaba las cuentas?», déjala con minúscula, que me gusta cómo suena." },
      { speaker: "g", text: "Está bien así: es una serie de preguntas breves separadas por comas, y la minúscula es correcta. Esa la dejamos tal cual." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué hacen Graciela y Rodrigo y con qué criterio?",
        exercise: {
          id: "c2-17-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y la idea principal.",
          items: [
            {
              q: "¿Qué están haciendo?",
              options: [
                "Elegir las fotografías del catálogo.",
                "Revisar la puntuación del ensayo central en las galeradas.",
                "Discutir el presupuesto de la exposición.",
              ],
              answer: 1,
              why: "Graciela quiere repasar la puntuación antes de devolver las galeradas.",
            },
            {
              q: "¿En qué se apoya Graciela para proponer los cambios?",
              options: [
                "En la norma de la Ortografía y en la claridad para el lector.",
                "En sus gustos personales.",
                "En lo que pide la imprenta por razones de espacio.",
              ],
              answer: 0,
              why: "Cita la Ortografía y explica cada cambio por la claridad.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada corrección. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-17-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué hay que cambiar la puntuación de la enumeración de la página cuatro?",
              options: [
                "Porque es demasiado corta.",
                "Porque los productos no están en orden alfabético.",
                "Porque cada elemento tiene ahora comas propias.",
              ],
              answer: 2,
              why: "Al añadir las fechas, los elementos llevan comas internas.",
            },
            {
              q: "¿Qué hace que los dos puntos de la página seis sean correctos?",
              options: [
                "Añadir «tres» antes de la enumeración.",
                "Poner la enumeración en mayúscula.",
                "Quitar el verbo «eran».",
              ],
              answer: 0,
              why: "Un elemento anticipador justifica los dos puntos.",
            },
            {
              q: "¿Qué decide Graciela sobre la serie de preguntas del final?",
              options: [
                "Cambiar las comas por puntos.",
                "Dejarla igual, porque es correcta.",
                "Poner mayúscula en cada pregunta.",
              ],
              answer: 1,
              why: "Una serie de preguntas breves puede separarse con comas y seguir en minúscula.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en la solución que se da a cada problema. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-17-escucha-notice",
          type: "match",
          prompt: "Relaciona cada problema con su solución.",
          pairs: [
            { left: "enumeración con comas internas", right: "punto y coma entre los elementos" },
            { left: "dos puntos entre «eran» y la lista", right: "añadir «tres» o quitar los dos puntos" },
            { left: "«dijo: que no zarparía»", right: "estilo directo con comillas o indirecto sin dos puntos" },
            { left: "apodo dentro de una cita dentro de otra", right: "comillas simples en el tercer nivel" },
            { left: "paréntesis dentro de paréntesis", right: "corchetes para el inciso interior" },
          ],
          why: "Cada solución marca con claridad dónde empieza y termina cada unidad.",
        },
      },
    ],
  },
  reading: {
    title: "Una ciudad que mira al río",
    genre: "Ensayo central de un catálogo de exposición",
    frame: "Texto de Rodrigo Ayala para el catálogo de una exposición del archivo municipal de Asunción, ya corregido por la editora. El archivo, los cronistas, los barcos con nombre propio y los documentos citados son ficticios; el marco histórico es general.",
    text: [
      "Asunción nació mirando al río. Desde su fundación, en 1537, la ciudad dependió de la bahía para casi todo: para recibir noticias, para enviar sus productos y, durante siglos, para comunicarse con el resto del mundo. Esta exposición reúne ciento veinte piezas del archivo municipal (fotografías, cartas, libros de registro, planos y algunos objetos donados por familias de antiguos estibadores) para contar una historia que suele quedar en segundo plano: la del puerto como corazón económico y social de la ciudad.",
      "Conviene empezar por lo que llegaba y salía. En los libros de la aduana conservados en el archivo aparecen, una y otra vez, los mismos productos: cueros, de las estancias del norte; yerba, de los montes del este; tabaco, de los alrededores de Villarrica, y madera, del Chaco, que bajaba en jangadas de troncos atados. Cada producto tenía su muelle, su gremio y, con frecuencia, sus propias costumbres; los yerbateros, por ejemplo, no descargaban nunca en domingo, mientras que los madereros trabajaban cualquier día en que el río lo permitiera.",
      "El río, en efecto, decidía. Cuando bajaba más de dos metros, los vapores grandes no podían atracar y debían esperar en la bahía, a veces durante semanas; cuando crecía, inundaba los depósitos más próximos a la orilla. Un libro de registro de 1905 lo resume con una sola anotación, escrita a mano en el margen: «Sin movimiento. Río bajo». No hace falta más: esas cuatro palabras explican el humor de toda una ciudad.",
      "Los testimonios de la época dan cuenta de la vida que rodeaba al puerto. El cronista Teodoro Garay —que escribió durante veinte años una columna semanal en un diario local (hoy perdido, aunque el archivo conserva recortes de casi todas sus entregas [legajo 31])— describe el muelle sur como un lugar «donde se oyen más lenguas que en una embajada». En otra columna recoge el testimonio de un marinero que le explica el apodo del muelle principal: «Le decimos “el purgatorio”, porque ahí se espera; ‘el cielo’ es cuando te pagan». Garay, que tenía buen oído, añade una frase que podría servir de lema a esta exposición: «Asunción mira al río y le da la espalda al mismo tiempo».",
      "¿Qué quería decir con eso? Probablemente, que la ciudad vivía del puerto, pero no quería verlo. Las familias acomodadas construían sus casas lejos de la orilla; las autoridades, en cambio, levantaban junto a ella los edificios que debían impresionar a quien llegaba por agua: la aduana, la capitanía, algún palacio. El puerto era, a la vez, la puerta de entrada y el patio trasero. Esa doble condición explica muchas decisiones posteriores, y también algunos olvidos.",
      "Las preguntas que guiaron esta investigación fueron sencillas, aunque las respuestas no lo son: ¿quién cargaba?, ¿quién cobraba?, ¿quién llevaba las cuentas? El inventario de una casa comercial, fechado en 1912, ofrece una pista: «Los estibadores […] cobran por bulto, no por hora, y el capataz se queda con la décima parte». Otra pista está en las fotografías. En casi todas aparecen los mismos personajes: capitanes de uniforme, comerciantes con sombrero, funcionarios de aduana con sus libros… Los estibadores, que hacían el trabajo, casi nunca miran a la cámara; están de espaldas, cargando.",
      "El declive llegó por varias vías a la vez. El ferrocarril, primero, ofreció otra salida para algunas mercancías; la crisis económica de los años treinta redujo el comercio; los cambios en la navegación, por último, exigieron muelles más profundos que la vieja bahía no podía ofrecer sin obras costosísimas. Ninguna de estas causas, por sí sola, habría bastado; todas juntas transformaron el puerto en pocas décadas. La aduana dejó de ser el centro de la vida económica: se convirtió en una oficina más.",
      "Esta exposición no pretende idealizar aquel mundo; tampoco quiere juzgarlo. Su propósito es más modesto: devolver la mirada al río, siquiera por unas semanas, y escuchar a quienes trabajaron en él. Por eso la última sala está dedicada a los nombres que aparecen en los libros de jornales (Ramón, Eusebio, Florentina, Cayo, Asunción…), muchos de ellos sin apellido. No sabemos casi nada de esas personas; sabemos, eso sí, que sin ellas no habría habido puerto, ni ciudad, ni esta exposición.",
    ],
    glossary: [
      { es: "el gremio", note: "conjunto de personas del mismo oficio" },
      { es: "la capitanía", note: "oficina que controla la navegación y los barcos de un puerto" },
      { es: "el libro de jornales", note: "registro de lo que se pagaba a cada trabajador por día" },
    ],
    tasks: [
      {
        id: "c2-17-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el ensayo.",
        items: [
          {
            q: "¿Qué quiere decir, según el autor, que la ciudad «mira al río y le da la espalda»?",
            options: [
              "Que la ciudad vivía del puerto, pero no quería verlo.",
              "Que la ciudad se construyó de espaldas al río por las inundaciones.",
              "Que nadie usaba el puerto.",
            ],
            answer: 0,
            why: "Lo explica en el quinto párrafo: vivía del puerto, pero no quería verlo.",
          },
          {
            q: "¿Qué muestran las fotografías sobre los estibadores?",
            options: [
              "Que eran los protagonistas de la vida del puerto.",
              "Que cobraban más que los capataces.",
              "Que casi nunca miran a la cámara y aparecen trabajando de espaldas.",
            ],
            answer: 2,
            why: "Sexto párrafo.",
          },
          {
            q: "¿Cuál es el propósito de la exposición, según el último párrafo?",
            options: [
              "Demostrar que el puerto era mejor que el ferrocarril.",
              "Devolver la mirada al río y escuchar a quienes trabajaron en él.",
              "Juzgar a las autoridades de la época.",
            ],
            answer: 1,
            why: "El autor lo llama un propósito «más modesto».",
          },
        ],
      },
      {
        id: "c2-17-lectura-signos",
        type: "match",
        prompt: "Relaciona cada fragmento del ensayo con la función de su puntuación.",
        pairs: [
          { left: "cueros, de las estancias del norte; yerba, de los montes del este", right: "punto y coma en una enumeración compleja" },
          { left: "«Sin movimiento. Río bajo». No hace falta más", right: "punto final después de las comillas de cierre" },
          { left: "Le decimos “el purgatorio”, porque ahí se espera", right: "cita dentro de una cita" },
          { left: "(hoy perdido, aunque el archivo conserva recortes de casi todas sus entregas [legajo 31])", right: "inciso dentro de otro inciso" },
          { left: "«Los estibadores […] cobran por bulto", right: "omisión dentro de una cita" },
          { left: "se convirtió en una oficina más", right: "consecuencia introducida por dos puntos" },
        ],
      },
      {
        id: "c2-17-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa la puntuación del ensayo con argumentos propios.",
        items: [
          {
            prompt: "El párrafo cuarto anida rayas, paréntesis y corchetes en una sola oración. Explica en 80–100 palabras si te parece una buena decisión para un catálogo de exposición y propón, si lo crees necesario, una alternativa más legible.",
            model: "La puntuación es correcta: cada nivel cambia de signo, de modo que el lector puede saber dónde se abre y se cierra cada inciso. Sin embargo, para un catálogo que se lee de pie en una sala, tres niveles en una oración son muchos. Yo sacaría la información del diario y del legajo a una oración independiente: «El cronista Teodoro Garay escribió durante veinte años una columna semanal en un diario local. Ese diario se ha perdido, pero el archivo conserva recortes de casi todas sus entregas (legajo 31)». Así se gana claridad sin perder datos.",
            checklist: [
              "Reconozco que la puntuación es correcta.",
              "Valoro la legibilidad para el público.",
              "Propongo una alternativa concreta.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la puntuación del ensayo marca la frontera principal y las secundarias.",
      items: [
        { quote: "tabaco, de los alrededores de Villarrica, y madera, del Chaco", note: "Último elemento de una enumeración compleja: coma delante de la «y»." },
        { quote: "Cuando bajaba más de dos metros, los vapores grandes no podían atracar", note: "Coma tras la subordinada antepuesta; el punto y coma separa después las dos situaciones." },
        { quote: "¿quién cargaba?, ¿quién cobraba?, ¿quién llevaba las cuentas?", note: "Serie de preguntas breves separadas por comas, en minúscula." },
        { quote: "funcionarios de aduana con sus libros…", note: "Puntos suspensivos: la enumeración queda abierta." },
      ],
    },
  },
  practice: {
    intro: "Ordena, elige entre versiones, reformula con otro signo y escribe piezas breves. Termina recuperando clases de las semanas anteriores de C2.",
    exercises: [
      {
        id: "c2-17-orden",
        type: "order",
        prompt: "Ordena los fragmentos para formar oraciones bien puntuadas.",
        items: [
          {
            words: ["Las", "causas", "fueron", "dos:", "el", "ferrocarril", "y", "la", "crisis."],
            why: "Los dos puntos siguen al elemento anticipador «dos».",
          },
          {
            words: ["El", "muelle", "norte", "era", "de", "los", "yerbateros;", "el", "del", "sur,", "de", "los", "madereros."],
            why: "Punto y coma entre oraciones relacionadas; coma por el verbo omitido.",
          },
          {
            words: ["Y", "la", "aduana,", "¿cuándo", "dejó", "de", "funcionar?"],
            why: "El signo de interrogación se abre donde empieza la pregunta.",
          },
        ],
      },
      {
        id: "c2-17-decision",
        type: "context",
        prompt: "Elige la mejor decisión de puntuación para cada caso.",
        items: [
          {
            context: "Dos oraciones muy largas, cada una con varias comas, unidas por «sin embargo».",
            q: "¿Qué frontera conviene antes de «sin embargo»?",
            options: ["Una coma.", "Un punto.", "Dos puntos."],
            answer: 1,
            why: "Si las oraciones son muy largas, es preferible el punto al punto y coma.",
          },
          {
            context: "Pie de foto: el texto termina con una cita que es una pregunta del capitán.",
            q: "¿Dónde va el punto final?",
            options: ["Dentro de las comillas, antes del cierre de interrogación.", "No hace falta punto final.", "Detrás de las comillas de cierre."],
            answer: 2,
            why: "El punto de la oración va siempre después de las comillas de cierre.",
          },
          {
            context: "Una lista de productos que termina con «etc.».",
            q: "¿Qué se escribe después de «etc.»?",
            options: ["Nada más que su punto.", "Puntos suspensivos.", "Dos puntos."],
            answer: 0,
            why: "«Etc.» y los puntos suspensivos significan lo mismo: no se combinan.",
          },
        ],
      },
      {
        id: "c2-17-reformular",
        type: "transform",
        prompt: "Reformula cada frase sustituyendo el nexo por el signo que se indica.",
        items: [
          {
            source: "Los vapores no llegaron porque el río había bajado dos metros.",
            instruction: "Sustituye «porque» por dos puntos.",
            answers: ["Los vapores no llegaron: el río había bajado dos metros."],
            why: "Los dos puntos pueden unir una oración con su causa.",
          },
          {
            source: "El muelle norte era de los yerbateros, mientras que el del sur era de los madereros.",
            instruction: "Sustituye «mientras que» por punto y coma y omite el segundo verbo.",
            answers: ["El muelle norte era de los yerbateros; el del sur, de los madereros."],
            why: "Punto y coma entre oraciones relacionadas y coma por el verbo omitido.",
          },
          {
            source: "El capitán dijo que no zarparía hasta que subiera el río.",
            instruction: "Pasa la frase a estilo directo, con dos puntos y comillas.",
            answers: ["El capitán dijo: «No zarparé hasta que suba el río».", "El capitán dijo: «No zarpo hasta que suba el río»."],
            why: "El estilo directo sí lleva dos puntos.",
          },
        ],
      },
      {
        id: "c2-17-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 50–70 palabras una cartela para una pieza de museo (un objeto de tu ciudad o de tu familia) con una enumeración compleja separada por punto y coma y unos dos puntos que expliquen algo.",
            model: "Baúl de viaje, hacia 1920. Lo usó la familia Ortiz en tres mudanzas: de Encarnación a Asunción, en 1921; de Asunción a Buenos Aires, en 1934, y de vuelta a Asunción, en 1950. Contenía ropa, libros y una vajilla de loza. Su estado es frágil: la madera se agrietó con la humedad del río.",
            checklist: [
              "La enumeración compleja usa punto y coma y coma antes de «y».",
              "Los dos puntos anuncian o explican.",
              "El texto es breve y legible.",
            ],
          },
          {
            prompt: "Escribe en 40–60 palabras un pie de foto que incluya una cita de un testigo con otra cita dentro y un inciso entre rayas.",
            model: "Muelle sur, hacia 1910. Un estibador —su nombre no consta en el archivo— carga fardos de yerba. Su nieta recordaba: «Mi abuelo decía que el capataz siempre gritaba “¡más rápido!”, aunque nadie le hiciera caso».",
            checklist: [
              "Las comillas siguen la jerarquía angulares, inglesas.",
              "El inciso entre rayas tiene raya de cierre.",
              "El punto va detrás de las comillas de cierre.",
            ],
          },
        ],
      },
      {
        id: "c2-17-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las semanas anteriores de C2 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G226 (sintaxis densa jurídica y administrativa). Estímulo, cláusula de un convenio: «El archivo, que cederá las piezas, y la imprenta, que imprimirá el catálogo, el cual se distribuirá gratuitamente, se comprometen a respetar los plazos». Reorganízala con la puntuación adecuada para que se lea sin esfuerzo, sin perder ninguna obligación.",
            model: "«El archivo cederá las piezas y la imprenta imprimirá el catálogo, que se distribuirá gratuitamente. Ambas partes se comprometen a respetar los plazos». Separar las obligaciones en dos oraciones y dejar una sola relativa aclara quién hace qué, sin eliminar ningún compromiso.",
            checklist: [
              "Conservo todas las obligaciones.",
              "Reduzco los incisos encadenados.",
            ],
          },
          {
            prompt: "Recuperación de la clase G227 (atribución periodística). Estímulo: «El director del archivo: el catálogo saldrá en marzo». Explica qué problema tiene este titular y reescríbelo como frase atribuida con verbo de lengua y comillas.",
            model: "Los dos puntos del titular atribuyen la frase de forma abreviada, pero no dejan claro si es una cita literal ni con qué grado de compromiso habla el director. En el cuerpo de la noticia sería mejor: «El director del archivo aseguró que el catálogo “saldrá en marzo”», o, si no es literal, «El director del archivo prevé que el catálogo salga en marzo».",
            checklist: [
              "Explico la ambigüedad del titular.",
              "Uso un verbo de atribución y comillas solo para lo literal.",
            ],
          },
          {
            prompt: "Recuperación de la clase G229 (paráfrasis fiel). Estímulo, cita del cronista: «Quizá el puerto haya sido la verdadera plaza mayor de la ciudad». Parafraséala en estilo indirecto sin cambiar su grado de certeza y explica por qué no lleva dos puntos.",
            model: "«El cronista sugiere que es posible que el puerto haya sido la verdadera plaza mayor de la ciudad». Conservo la posibilidad con «es posible que» y un verbo de atribución prudente. En estilo indirecto no hay dos puntos, porque la cita se integra con «que» en la oración.",
            checklist: [
              "Conservo el grado de certeza.",
              "Explico por qué no hay dos puntos.",
            ],
          },
          {
            prompt: "Recuperación de la clase G230 (conectores raros). Estímulo: «El catálogo empero tiene erratas toda vez que se imprimió deprisa». Puntúa los conectores como corresponde y explica el valor de cada uno.",
            model: "«El catálogo, empero, tiene erratas, toda vez que se imprimió deprisa». «Empero» equivale a «sin embargo» y va intercalado entre comas; «toda vez que» es causal («dado que») y se separa con coma porque introduce una explicación de lo anterior.",
            checklist: [
              "Coloco las comas del conector intercalado.",
              "Explico el valor causal de «toda vez que».",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta el texto de presentación (400–520 palabras) de una exposición sobre un lugar de trabajo del pasado en tu ciudad: un puerto, una estación, un mercado, una fábrica. Incluye al menos una enumeración compleja con punto y coma, dos puntos con tres funciones distintas, un inciso dentro de otro inciso, una cita con otra cita dentro y una serie de preguntas.",
    context: "El texto abrirá el catálogo y también se colgará en la primera sala. Lo leerán visitantes de todas las edades, de pie y con poco tiempo, así que la puntuación compleja debe ayudar a leer, no obstaculizar. Puedes usar el caso del puerto de Asunción o inventar otro lugar con la misma lógica.",
    steps: [
      "Reúne los datos: qué se hacía en el lugar, quién trabajaba, qué cambió y qué queda hoy. Busca o inventa una cita de un testigo.",
      "Decide el orden de los párrafos y, en cada uno, cuál es la frontera principal.",
      "Redacta sin copiar el modelo. Usa cada recurso de puntuación donde haga falta, no para exhibirlo.",
      "Revisa el texto signo por signo con la lista de control: corrige los dos puntos entre verbo y complemento, las comillas mal anidadas y cualquier punto y coma tras una subordinada antepuesta.",
    ],
    useLanguage: [
      "A, dato; B, dato, y C, dato",
      "… fueron tres: …",
      "oración: causa o consecuencia",
      "Fulano —que… (…)— …",
      "«… “… ‘…’ …” …».",
      "¿…?, ¿…?, ¿…?",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Durante casi un siglo, la estación de San Francisco fue el lugar donde Asunción se despedía y se reencontraba. Por sus andenes pasaron soldados, de camino al frente; comerciantes, con sus muestras de tela, y estudiantes, que volvían cada diciembre con la maleta llena de libros. Esta exposición quiere contar esa historia con las voces de quienes la vivieron: los maquinistas, los vendedores de chipa y los empleados de la boletería, cuyos nombres —casi siempre ausentes de los libros (aunque no de los registros de pago)— recuperamos aquí.",
    ],
    checklist: [
      "Uso al menos una enumeración compleja con punto y coma.",
      "Los dos puntos cumplen tres funciones distintas y nunca separan un verbo de su complemento.",
      "Los incisos anidados cambian de signo en cada nivel.",
      "Las comillas siguen la jerarquía angulares, inglesas, simples, y el punto va detrás.",
      "No hay punto y coma tras una subordinada antepuesta ni puntos suspensivos tras «etc.».",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Leer el texto de sala en voz alta",
        prompt: "Vas a grabar la audioguía de la exposición. Lee en voz alta tu texto de presentación completo, o los párrafos segundo y cuarto del ensayo de Rodrigo, de modo que el oyente perciba la enumeración compleja, los incisos y las citas sin ver el texto. Después explica en un minuto qué hiciste con la voz en cada signo.",
        prep: [
          "Marca con colores las pausas de coma, punto y coma y punto.",
          "Subraya los incisos que leerás con tono más bajo.",
          "Decide cómo distinguirás la voz de la cita.",
        ],
        seconds: 240,
        selfCheck: [
          "La pausa del punto y coma es más larga que la de la coma.",
          "Los incisos suenan más bajos y la voz vuelve después.",
          "Las citas se distinguen de la voz del narrador.",
        ],
      },
      {
        title: "Defender una corrección ante el autor",
        prompt: "El historiador se resiste a quitar los dos puntos de «los productos eran: yerba, cueros y madera», porque dice que «así se ve que viene una lista». Explícale por qué la norma no los admite, propón dos soluciones y distingue lo que es obligatorio de lo que es cuestión de estilo.",
        prep: [
          "Prepara la regla con tus propias palabras.",
          "Ten dos alternativas: quitar los dos puntos o añadir un anticipador.",
        ],
        seconds: 150,
        model: "Entiendo lo que buscas, y la idea es buena: que el lector sepa que viene una lista. Pero los dos puntos no pueden separar el verbo de lo que dice el verbo. Tienes dos opciones: quitar los dos puntos, y la lista se entiende igual, o añadir una palabra que anuncie la lista, por ejemplo «tres»: «los productos eran tres: yerba, cueros y madera». Lo primero es una norma; lo segundo, una decisión de estilo que puedes tomar tú.",
        selfCheck: [
          "Explico la regla sin tecnicismos innecesarios.",
          "Propongo dos soluciones.",
          "Distingo norma y estilo.",
        ],
      },
      {
        title: "Dictar un párrafo con su puntuación",
        prompt: "Dicta a un compañero o graba para ti mismo un párrafo breve con una enumeración compleja y una cita, diciendo en voz alta cada signo («punto y coma», «abre comillas», «cierra raya»). Después léelo sin nombrar los signos, solo con la voz.",
        prep: [
          "Escribe primero el párrafo y revisa sus signos.",
          "Practica los nombres de los signos: raya, corchete, comillas angulares.",
        ],
        seconds: 100,
        selfCheck: [
          "Nombro cada signo correctamente.",
          "En la segunda lectura la voz hace oír los mismos signos.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu texto de presentación y un párrafo de un libro o periódico con puntuación compleja. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Lee",
        task: "Lee en voz alta un párrafo de tu texto sin enseñárselo a tu profesor; él o ella intenta adivinar dónde pusiste punto y coma y dónde coma.",
        phrases: ["¿Dónde has oído la frontera principal?", "¿Ahí había punto y coma o coma?"],
      },
      {
        move: "Justifica",
        task: "Elige tres signos de tu texto y justifica cada uno con una regla; pide a tu profesor que te diga si la justificación es exacta.",
        phrases: ["Aquí van dos puntos porque…", "Uso corchetes porque…"],
      },
      {
        move: "Compara",
        task: "Lleva un párrafo periodístico real y comprueba con tu profesor si su puntuación sigue la Ortografía o el libro de estilo del periódico.",
        phrases: ["¿Es una norma o una opción de estilo?", "¿Tú lo puntuarías igual?"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale qué signo le cuesta más a él o ella y cómo decide entre punto y coma y punto cuando las oraciones son largas.",
        phrases: ["¿Cuándo prefieres el punto?", "¿Cuántas comas aguanta una oración?"],
      },
    ],
    bring: "Tu texto de presentación revisado, el párrafo real que hayas encontrado y, si quieres, la grabación de tu lectura.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En «Cuando bajaba el río[ ] los barcos esperaban en la bahía», ¿qué signo va en [ ]?",
        options: ["punto y coma", "coma", "dos puntos"],
        answer: 1,
        why: "Tras una subordinada antepuesta va coma.",
      },
      {
        type: "choice",
        q: "¿Qué orden de comillas propone la Ortografía para tres niveles de cita?",
        options: ["inglesas, angulares, simples", "simples, inglesas, angulares", "angulares, inglesas, simples"],
        answer: 2,
        why: "Primero « », después “ ” y, por último, ‘ ’.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué función cumple la pausa suspendida que oyes en el medio?",
        options: [
          "Anuncia una explicación de lo anterior.",
          "Cierra la oración.",
          "Separa un sujeto de su verbo.",
        ],
        answer: 0,
        why: "Los dos puntos unen la decisión con su causa.",
        audio: "La exposición se aplazó un mes: las piezas del archivo necesitaban restauración.",
        voice: "es-AR-f",
      },
      {
        type: "gap",
        q: "Los visitantes podrán ver ___: fotografías, planos y cartas. [elemento que anticipa la enumeración]",
        answers: [["lo siguiente", "tres tipos de documentos", "tres cosas"]],
        hint: "Sin una palabra que anuncie la lista, los dos puntos separarían el verbo de su complemento.",
        why: "Los dos puntos necesitan aquí un elemento anticipador.",
      },
      {
        type: "gap",
        q: "Fotografías, planos y cartas: ___ se exhibe en la primera sala. [palabra que resume]",
        answers: [["todo", "todo eso", "eso"]],
        hint: "Tras una enumeración, los dos puntos pueden preceder a la palabra que la resume.",
        why: "Los dos puntos cierran la enumeración.",
      },
      {
        type: "transform",
        source: "La aduana cerró en 1940 porque el comercio se había trasladado al nuevo puerto.",
        instruction: "Une las dos oraciones con dos puntos en lugar de «porque», sin cambiar el sentido.",
        answers: ["La aduana cerró en 1940: el comercio se había trasladado al nuevo puerto."],
        why: "Los dos puntos expresan aquí la causa.",
      },
      {
        type: "error",
        sentence: "El plano (firmado por el ingeniero Ruiz (según el inventario)) es de 1890.",
        answers: ["El plano (firmado por el ingeniero Ruiz [según el inventario]) es de 1890.", "El plano (firmado por el ingeniero Ruiz —según el inventario—) es de 1890."],
        why: "El inciso interior debe cambiar de signo.",
      },
      {
        type: "error",
        sentence: "«El capataz gritaba (...) que el río no esperaba a nadie», recuerda un testigo.",
        answers: ["«El capataz gritaba […] que el río no esperaba a nadie», recuerda un testigo."],
        why: "La omisión dentro de una cita se marca con puntos suspensivos entre corchetes.",
      },
      {
        type: "order",
        words: ["Llegaban", "cueros,", "del", "norte;", "yerba,", "del", "este,", "y", "madera,", "del", "Chaco."],
        why: "Enumeración compleja: punto y coma entre elementos y coma ante la «y» final.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de clase cuándo usar punto y coma y cuándo punto entre dos oraciones unidas por «sin embargo». Incluye un ejemplo de cada caso.",
        model: "Las dos opciones separan oraciones del mismo nivel, pero el punto marca una frontera mayor. Si las oraciones son de longitud media, el punto y coma mantiene la unión de sentido: «La exposición se inauguró en marzo; sin embargo, la última sala no se abrió hasta mayo». Si son muy largas y tienen comas internas, es mejor el punto, para que el lector respire: «La exposición, que reunió piezas de tres archivos, se inauguró en marzo con gran asistencia. Sin embargo, la última sala, dedicada a los estibadores, no se abrió hasta mayo».",
        checklist: [
          "Explico el criterio de la longitud.",
          "Doy un ejemplo con punto y coma y otro con punto.",
          "Pongo coma después de «sin embargo».",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Uso el punto y coma entre oraciones relacionadas, en enumeraciones complejas y ante conectores, y sé cuándo es mejor el punto.",
      "Uso los dos puntos para anunciar, cerrar, explicar, citar y saludar, y evito ponerlos entre un verbo y su complemento o ante el estilo indirecto.",
      "Anido incisos cambiando de signo en cada nivel y uso los corchetes para interpolaciones y omisiones.",
      "Jerarquizo las comillas en tres niveles, coloco el punto detrás de ellas y uso los puntos suspensivos y las preguntas en serie según la norma.",
    ],
    review: [
      "Dentro de dos días, tapa la columna derecha de la tabla «Signo y voz» y lee en voz alta un párrafo de prensa haciendo oír cada signo.",
      "Dentro de una semana, busca un texto con una enumeración compleja y comprueba si usa punto y coma y coma ante la «y» final.",
      "En la próxima clase, pide a tu profesor que te dicte un párrafo sin decir los signos y puntúalo tú.",
    ],
  },
  related: [
    { path: "/gramatica/puntuacion-avanzada-punto-y-coma-dos", label: "Clase: Puntuación avanzada: punto y coma, dos puntos e incisos" },
  ],
};
