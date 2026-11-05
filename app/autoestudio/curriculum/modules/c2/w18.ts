import type { Module } from "../../types";

/**
 * C2 · semana 18 · Autoestudio espejo de G232 (ortografía académica y
 * variación admisible) y G233 (sintaxis textual: cohesión anafórica de largo
 * alcance). Repaso autónomo con el informe ficticio de evaluación de una
 * cooperativa de tejedoras de los Valles Centrales de Oaxaca.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w18: Module = {
  id: "c2-18",
  level: "c2",
  week: 18,
  kind: "core",
  title: "Cada tilde en su sitio, cada referente a la vista",
  subtitle: "Repaso de la ortografía académica con sus variantes admisibles y de la cohesión anafórica a lo largo de textos extensos",
  stop: {
    place: "Oaxaca",
    country: "México",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g232",
    "c2.gram.g233",
    "c2.voc.w18-textil-informe",
    "c2.pron.w18-tilde-y-acento",
    "c2.lis.w18-pruebas-informe",
    "c2.read.w18-capitulo-cooperativa",
    "c2.wri.w18-apertura-capitulo",
    "c2.spk.w18-presentar-informe",
    "c2.fun.w18-aclarar-referente",
    "c2.disc.w18-cadena-referencia",
  ],
  reviewObjectives: ["c2.gram.g231","c2.voc.w17-puerto-catalogo","c2.pron.w17-leer-signos","c2.lis.w17-revision-catalogo","c2.read.w17-ensayo-puerto","c2.wri.w17-texto-presentacion","c2.spk.w17-justificar-signos","c2.fun.w17-negociar-correccion","c2.disc.w17-jerarquia-fronteras"],
  prerequisites: ["c2-17"],
  goal: {
    canDo: "Puedo revisar un texto largo para que su ortografía siga la norma académica con variantes elegidas de forma coherente y para que el lector sepa siempre a quién o a qué se refiere cada pronombre, sinónimo o encapsulador, aunque el antecedente esté varios párrafos atrás.",
    steps: [
      "Repasa en la teoría las tildes diacríticas, los prefijos, las cifras y las variantes admisibles, y después las cadenas anafóricas, la reintroducción de referentes y el metadiscurso.",
      "Practica con las pruebas del informe sobre una cooperativa de tejedoras de Oaxaca.",
      "Escucha a la editora y al autor revisar las pruebas y lee un capítulo completo del informe.",
      "Redacta la apertura de un capítulo, revísala con la lista de control y presenta oralmente sus resultados.",
    ],
  },
  theory: {
    intro: "En clase viste estos dos temas con tu profesor. Aquí los repasas en Oaxaca. Una fundación cultural publica un informe de evaluación sobre diez años de trabajo de una cooperativa de tejedoras zapotecas de los Valles Centrales. El autor, un antropólogo, escribe bien, pero en un texto de ochenta páginas se le escapan tildes, cifras mal escritas y pronombres que ya nadie sabe a quién se refieren: en el informe aparecen dos mujeres clave, la presidenta de la cooperativa y la maestra de tintes, y un «ella» puede designar a cualquiera de las dos. La editora revisa ambas cosas, porque las dos sirven a lo mismo: que el lector no tenga que adivinar.",
    parts: [
      {
        heading: "Tildes diacríticas, «solo», demostrativos y monosílabos",
        body: [
          "La tilde diacrítica distingue palabras que se escriben igual pero tienen distinta función: «tú» (pronombre) y «tu» (posesivo); «él» y «el»; «mí» y «mi»; «sí» (afirmación o pronombre) y «si» (conjunción); «té» (bebida) y «te»; «dé» (verbo) y «de»; «sé» (verbo) y «se»; «más» (cantidad) y «mas» (equivale a «pero»). «Aún» lleva tilde cuando significa «todavía» y no la lleva cuando significa «incluso»: «Aún no llegan los hilos»; «Aun con lluvia, el mercado abrió».",
          "Desde la Ortografía de 2010, el adverbio «solo» y los demostrativos («este», «ese», «aquel» y sus formas) se escriben sin tilde. Una nota posterior de la RAE (2023) admite la tilde en el adverbio cuando quien escribe percibe un riesgo real de ambigüedad; sin ese riesgo, la recomendación general sigue siendo escribirlo sin tilde. Además, algunas palabras que se pronuncian a veces con dos sílabas se consideran monosílabas a efectos ortográficos y no llevan tilde: «guion», «truhan», «fie», «hui», «rio» (del verbo «reír»).",
        ],
        table: {
          caption: "Pares que conviene vigilar en un informe",
          head: ["Sin tilde", "Con tilde", "Ejemplo"],
          rows: [
            ["si (condición)", "sí (afirmación, pronombre)", "Si el tinte fija, la tejedora lo aprueba para sí."],
            ["mas (= pero)", "más (cantidad)", "Hubo más pedidos, mas no más ingresos."],
            ["aun (= incluso)", "aún (= todavía)", "Aún no hay datos de 2025, aun cuando se pidieron."],
            ["de (preposición)", "dé (verbo dar)", "Que la fundación dé su opinión antes de abril."],
            ["solo, este, aquel", "(sin tilde por norma general)", "Solo este telar es de pedal."],
            ["guion, hui, rio", "(monosílabos ortográficos)", "El guion del video lo escribió la cooperativa."],
          ],
        },
        mistakes: [
          {
            wrong: "Aun no se sabe si la cooperativa recibirá mas apoyo.",
            right: "Aún no se sabe si la cooperativa recibirá más apoyo.",
            why: "«Aún» significa aquí «todavía» y «más» expresa cantidad: ambas llevan tilde.",
          },
          {
            wrong: "El guión de la entrevista lo preparó la coordinadora.",
            right: "El guion de la entrevista lo preparó la coordinadora.",
            why: "«Guion» es monosílabo a efectos ortográficos y no lleva tilde.",
          },
        ],
      },
      {
        heading: "Interrogativos, prefijos, cifras, mayúsculas y variantes admisibles",
        body: [
          "Los interrogativos y exclamativos mantienen la tilde también en las preguntas indirectas: «No sabían qué tinte usar ni cuánto cobrar». Hay que distinguir cuatro formas: «porque» (causa), «por qué» (pregunta), «el porqué» (sustantivo, «la razón») y «por que» (preposición más relativo o más conjunción: «la razón por que se fueron», «optaron por que votara la asamblea»). Los prefijos se escriben unidos a la palabra («exdirectora», «antivacunas»); separados si afectan a una base de varias palabras («ex primer ministro»), y con guion ante mayúscula o cifra («anti-OTAN», «sub-21»).",
          "En las cifras de más de cuatro dígitos los millares se separan con un espacio («12 500 pesos»), no con punto ni con coma; los números de cuatro cifras se escriben juntos («2500»). La coma y el punto decimal son ambos válidos, y en México es habitual el punto. El signo «%» se escribe separado de la cifra («25 %»). Los meses, los días y los cargos van en minúscula («en marzo», «la presidenta de la cooperativa»). La conjunción «y» pasa a «e» ante palabras que empiezan por el sonido /i/ («tintes e hilos»), salvo ante «hie-» («agua y hielo»), y «o» pasa a «u» ante /o/ («siete u ocho»); entre cifras, «o» no lleva tilde («3 o 4»). Por último, hay variantes admisibles: «México» (preferida a «Méjico»), «video» o «vídeo», «periodo» o «período», «quizá» o «quizás», «septiembre» o «setiembre». Ninguna es un error; el error es mezclarlas en el mismo texto. Distingue siempre tres niveles: lo que exige la norma, lo que la norma admite y lo que decide el libro de estilo de cada publicación.",
        ],
        examples: [
          { es: "Nadie explicó por qué se canceló la feria; el porqué se supo meses después.", note: "Interrogativo indirecto y sustantivo." },
          { es: "La exdirectora del museo visitó a las tejedoras e invitó a siete u ocho de ellas.", note: "Prefijo unido; «e» ante /i/; «u» ante /o/." },
          { es: "Las ventas crecieron un 18 % y alcanzaron 12 500 pesos al mes.", note: "Espacio ante %; espacio en los millares." },
          { es: "El informe usa «video» y «periodo» en todas sus páginas.", note: "Variantes admisibles elegidas y mantenidas." },
        ],
        mistakes: [
          {
            wrong: "La ex-presidenta de la cooperativa vendió 12.500 rebozos en el período de 2019; el video del periodo siguiente…",
            right: "La expresidenta de la cooperativa vendió 12 500 rebozos en el periodo de 2019; el video del periodo siguiente…",
            why: "Prefijo unido sin guion, millares con espacio y una sola variante («periodo») en todo el texto.",
          },
        ],
      },
      {
        heading: "La cadena anafórica: nombrar, retomar y encapsular",
        body: [
          "En un texto largo, cada referente importante forma una cadena: se presenta con un nombre completo («Aurelia Martínez, presidenta de la cooperativa»), se retoma con un pronombre o con sujeto tácito, después con un sinónimo o un hiperónimo («la dirigente») y, cuando lo que se retoma es una idea entera, con un encapsulador: «este fenómeno», «dicha propuesta», «tal situación», «esa decisión». El criterio práctico es sencillo: cuanto más lejos está el antecedente y cuantos más candidatos hay, más explícita debe ser la mención. Un pronombre funciona en la oración siguiente; tres párrafos después, hace falta el nombre.",
          "La catáfora anuncia algo que viene después: «Lo diré claramente: la cooperativa no habría sobrevivido sin el mercado local»; «Los riesgos son dos: la imitación industrial y la falta de relevo». Los demostrativos marcan distancia: «este» remite a lo más cercano y «aquel» a lo más lejano; «el primero… el segundo» y «este último» ordenan referentes, pero solo si el lector recuerda la lista. «El citado» y «el mencionado» son útiles en registros formales. Evita «el mismo» o «la misma» como simple pronombre («*se revisó el telar y se reparó el mismo»): basta con «se revisó el telar y se reparó».",
        ],
        table: {
          caption: "Una cadena a lo largo de tres párrafos",
          head: ["Momento", "Mención", "Por qué"],
          rows: [
            ["presentación", "Delfina Ruiz, maestra de tintes naturales", "nombre y rasgo distintivo"],
            ["oración siguiente", "(sujeto tácito) aprendió el oficio de su abuela", "antecedente inmediato y sin competencia"],
            ["mismo párrafo", "la maestra", "sinónimo funcional que no choca con «la presidenta»"],
            ["dos párrafos después", "Delfina Ruiz, la maestra de tintes", "nombre completo y recordatorio"],
            ["idea entera", "esta transmisión entre generaciones", "encapsulador que resume lo dicho"],
          ],
        },
        mistakes: [
          {
            wrong: "Aurelia presentó el catálogo a Delfina; ella propuso subir los precios.",
            right: "Aurelia presentó el catálogo a Delfina, y fue la maestra de tintes quien propuso subir los precios.",
            why: "Con dos referentes del mismo género y número, «ella» es ambiguo: hace falta el nombre o un rasgo distintivo.",
          },
        ],
      },
      {
        heading: "Rupturas, reintroducciones y metadiscurso",
        body: [
          "La variación elegante tiene un riesgo: si llamas a la cooperativa «la organización», «el colectivo», «el grupo» y «la asociación» en cuatro oraciones, el lector puede creer que hablas de cuatro entidades distintas. En un informe, la repetición de un término técnico es preferible a la confusión. Además, después de un cambio de tema la cadena se rompe: si el párrafo anterior trataba de los mercados, el siguiente no puede empezar con «ella» para referirse a la presidenta. Hay que reintroducir el referente con el nombre y, si ha pasado mucho texto, con un recordatorio: «Aurelia Martínez, la presidenta a la que nos referimos en el capítulo 2».",
          "La anáfora asociativa permite presentar algo como conocido porque pertenece a un marco ya mencionado: tras «el taller», «los telares» y «la puerta» no necesitan presentación. Los sustantivos colectivos admiten a veces un pronombre plural a distancia («la asamblea votó… Días después, ellas mismas…»), pero conviene usarlo con cuidado. Por último, el metadiscurso guía al lector por un texto largo: «como se ha visto», «según se explicó en el capítulo 3», «volveremos sobre ello más adelante», «en lo que sigue». Es la señalización de la carretera: no añade contenido, pero evita que el lector se pierda.",
        ],
        examples: [
          { es: "Como se explicó en el capítulo 2, la cooperativa nació en 2015. Esa decisión fundacional explica gran parte de lo que sigue.", note: "Metadiscurso retrospectivo y encapsulador." },
          { es: "Llegamos al taller a las ocho. Los telares ya estaban en marcha y la puerta, abierta.", note: "Anáfora asociativa: forman parte del taller." },
          { es: "Volveremos sobre el problema del relevo en el capítulo 5.", note: "Metadiscurso prospectivo." },
        ],
        mistakes: [
          {
            wrong: "El colectivo creció en 2018. La agrupación abrió una tienda. El grupo exportó a Canadá.",
            right: "La cooperativa creció en 2018. Ese año abrió una tienda y, poco después, exportó a Canadá.",
            why: "Tantos sinónimos hacen pensar en entidades distintas; en un informe es mejor repetir o usar sujeto tácito.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero decide la forma ortográfica correcta; después sigue y repara las cadenas de referencia.",
    exercises: [
      {
        id: "c2-18-gramatica-referente",
        type: "context",
        prompt: "Lee el fragmento del informe y decide a qué se refiere la expresión destacada.",
        items: [
          {
            context: "«Aurelia Martínez fundó la cooperativa con su hermana Inés. Esta última se encargó de las cuentas durante seis años».",
            q: "¿Quién llevó las cuentas?",
            options: ["Aurelia.", "Inés.", "Las dos."],
            answer: 1,
            why: "«Esta última» remite al último referente mencionado.",
          },
          {
            context: "«Las tejedoras propusieron vender en línea y la fundación aceptó financiar una tienda. Dicha propuesta fue aprobada en asamblea».",
            q: "¿Qué encapsula «dicha propuesta»?",
            options: ["La financiación de la fundación.", "La asamblea.", "La idea de vender en línea."],
            answer: 2,
            why: "«Propuesta» retoma lo que «propusieron» las tejedoras.",
          },
          {
            context: "Capítulo 4, tras dos páginas sobre ferias y precios: «Ella insistió entonces en volver a la grana».",
            q: "¿Qué problema tiene la frase?",
            options: [
              "Ninguno: el antecedente está claro.",
              "El pronombre está demasiado lejos de su antecedente y hay varias candidatas.",
              "Falta una tilde en «ella».",
            ],
            answer: 1,
            why: "Tras un cambio de tema y dos páginas, hace falta el nombre.",
          },
          {
            context: "«Los riesgos son dos: la imitación industrial y la falta de relevo. El primero preocupa a las mayores; el segundo, a todas».",
            q: "¿Qué preocupa a todas?",
            options: ["La falta de relevo.", "La imitación industrial.", "Los precios."],
            answer: 0,
            why: "«El segundo» remite al segundo elemento de la lista anunciada.",
          },
        ],
      },
      {
        id: "c2-18-gramatica-ortografia",
        type: "gap",
        prompt: "Completa con la forma ortográficamente correcta según la norma académica.",
        items: [
          { q: "Nadie sabía ___ se habían cancelado los pedidos de Canadá. [por qué / porque]", answers: [["por qué"]], why: "Interrogativo indirecto: lleva tilde y va separado." },
          { q: "___ no han llegado los hilos de algodón coyuchi. [aún / aun, = todavía]", answers: [["Aún"]], why: "«Aún» = todavía." },
          { q: "La cooperativa vende rebozos ___ huipiles. [y / e]", answers: [["e"]], why: "«E» ante palabra que empieza por /i/." },
          { q: "Se tiñeron siete ___ ocho madejas con grana. [o / u]", answers: [["u"]], why: "«U» ante palabra que empieza por /o/." },
          { q: "La ___ de la cooperativa asistió a la presentación. [ex + presidenta]", answers: [["expresidenta"]], why: "Prefijo unido a una base de una sola palabra." },
          { q: "La feria reunió a 3 ___ 4 cooperativas por día. [o / ó]", answers: [["o"]], why: "Entre cifras, «o» no lleva tilde." },
        ],
      },
      {
        id: "c2-18-gramatica-niveles",
        type: "classify",
        prompt: "Clasifica cada caso: ¿lo decide la norma, es una variante admisible o lo decide el libro de estilo?",
        categories: ["Exigencia de la norma", "Variante admisible", "Decisión del libro de estilo"],
        items: [
          { text: "Escribir «guion» sin tilde.", cat: 0, why: "La Ortografía de 2010 lo fija." },
          { text: "Elegir entre «video» y «vídeo».", cat: 1, why: "Las dos formas son correctas." },
          { text: "Poner en cursiva las palabras zapotecas del informe.", cat: 2, why: "Es una convención editorial de la publicación." },
          { text: "Escribir «quizá» o «quizás».", cat: 1, why: "Ambas son válidas." },
          { text: "Separar los millares con un espacio: «12 500».", cat: 0, why: "Es la norma para cifras de más de cuatro dígitos." },
          { text: "Usar el punto decimal en lugar de la coma.", cat: 1, why: "Ambos signos son válidos." },
          { text: "Citar las entrevistas siempre con nombre y edad de la persona.", cat: 2, why: "Es un criterio propio del informe." },
          { text: "Escribir «setiembre» o «septiembre».", cat: 1, why: "Ambas formas son válidas." },
        ],
      },
      {
        id: "c2-18-gramatica-errores",
        type: "error",
        prompt: "Corrige el error de ortografía o de referencia en cada frase.",
        items: [
          {
            sentence: "Se reparó el telar de pedal y se pintó el mismo de azul.",
            answers: ["Se reparó el telar de pedal y se pintó de azul.", "Se reparó el telar de pedal y se lo pintó de azul."],
            why: "«El mismo» no debe usarse como simple pronombre.",
          },
          {
            sentence: "El taller cobra 2 500 pesos por un tapete de 1 metro.",
            answers: ["El taller cobra 2500 pesos por un tapete de 1 metro."],
            why: "Los números de cuatro cifras se escriben sin espacio.",
          },
          {
            sentence: "La selección sub 21 de tejido participó en la feria anti OTAN.",
            answers: ["La selección sub-21 de tejido participó en la feria anti-OTAN."],
            why: "El prefijo ante cifra o mayúscula se une con guion.",
          },
          {
            sentence: "Si, la maestra dijo que el té de pericón se da a si misma cada mañana.",
            answers: ["Sí, la maestra dijo que el té de pericón se lo da a sí misma cada mañana.", "Sí, la maestra dijo que el té de pericón se da a sí misma cada mañana."],
            why: "«Sí» afirmativo y «sí» pronombre llevan tilde.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico del tejido artesanal oaxaqueño y de los informes de evaluación.",
    groups: [
      {
        title: "Tejer y teñir",
        items: [
          { es: "el telar de pedal", note: "telar de madera que se acciona con los pies, introducido en la época colonial" },
          { es: "la urdimbre", note: "conjunto de hilos que se colocan a lo largo del telar" },
          { es: "la trama", note: "hilos que se cruzan con la urdimbre para formar la tela" },
          { es: "la grana cochinilla", note: "insecto del nopal del que se obtiene un tinte rojo" },
          { es: "el tinte natural", note: "colorante de origen vegetal, animal o mineral" },
          { es: "la madeja", note: "hilo recogido en vueltas iguales" },
        ],
      },
      {
        title: "Evaluar un proyecto",
        items: [
          { es: "la línea de base", note: "situación medida al principio, con la que se comparan los resultados" },
          { es: "el indicador", note: "dato que permite medir el avance de un objetivo" },
          { es: "el comercio justo", note: "venta con precio digno y condiciones transparentes para quien produce" },
          { es: "el relevo generacional", note: "paso de un oficio o una tarea a personas más jóvenes" },
          { es: "la cooperativa", note: "empresa de propiedad colectiva gestionada por sus socias o socios" },
          { es: "la sostenibilidad", note: "capacidad de mantenerse en el tiempo sin agotar recursos" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-18-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada término con su definición.",
        pairs: [
          { left: "la urdimbre", right: "conjunto de hilos que se colocan a lo largo del telar" },
          { left: "la grana cochinilla", right: "insecto del nopal del que se obtiene un tinte rojo" },
          { left: "la línea de base", right: "situación medida al principio, con la que se comparan los resultados" },
          { left: "el indicador", right: "dato que permite medir el avance de un objetivo" },
          { left: "el relevo generacional", right: "paso de un oficio o una tarea a personas más jóvenes" },
          { left: "la madeja", right: "hilo recogido en vueltas iguales" },
        ],
      },
      {
        id: "c2-18-lexico-uso",
        type: "gap",
        prompt: "Completa con la palabra adecuada del vocabulario.",
        bank: ["trama", "comercio justo", "indicador", "sostenibilidad"],
        items: [
          { q: "El número de socias menores de treinta años es el ___ principal del relevo.", answers: [["indicador"]] },
          { q: "La tienda en línea vende con criterios de ___: el precio lo fija la asamblea.", answers: [["comercio justo"]] },
          { q: "Delfina tiñe por separado los hilos de la ___ para lograr el degradado.", answers: [["trama"]] },
          { q: "La ___ económica de la cooperativa depende todavía de dos ferias anuales.", answers: [["sostenibilidad"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El acento que se oye y la tilde que se escribe",
    explanation: [
      "Las tildes diacríticas no son caprichos: reflejan una diferencia que se oye en la frase. «Tú», «él», «mí», «sí», «más» o «qué» interrogativo son palabras tónicas, con acento propio; «tu», «el», «mi», «si», «mas» o «que» conjunción son átonas y se apoyan en la palabra siguiente. «Tu telar» suena como una sola palabra, «tutelar»; «el telar es tuyo, no de él» lleva acento en «él».",
      "Con «solo» la diferencia no está en la palabra, sino en la agrupación: «Trabaja solo los lunes» puede leerse «trabaja | solo los lunes» (únicamente los lunes) o «trabaja solo | los lunes» (sin compañía, los lunes). Por eso, cuando un «solo» es ambiguo, la mejor solución suele ser reordenar o usar «solamente», más que confiar en la tilde.",
      "El audio utiliza la síntesis disponible en el navegador: sirve para percibir el contraste entre palabras tónicas y átonas, no certifica un acento regional.",
    ],
    table: {
      caption: "Tónicas y átonas",
      head: ["Átona (sin tilde)", "Tónica (con tilde)"],
      rows: [
        ["Si quieres, te ayudo.", "Dijo que sí."],
        ["Es mi madeja.", "Es para mí."],
        ["Quiere más, mas no puede.", "Quiere más tinte."],
        ["Sé que lo sabe.", "Se lo dio."],
      ],
    },
    perceive: {
      id: "c2-18-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide qué forma corresponde.",
      items: [
        {
          q: "¿Qué palabra oyes al final, tónica o átona?",
          options: ["«el», átona", "«él», tónica"],
          answer: 1,
          why: "Al final de la frase y con acento: pronombre «él».",
          audio: "Este telar no lo armó ella, lo armó él.",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué significa «solo» según la agrupación que oyes?",
          options: ["Únicamente los domingos.", "Sin compañía, los domingos."],
          answer: 0,
          why: "La pausa va antes de «solo»: «solo los domingos» forma un grupo.",
          audio: "La maestra tiñe, solo los domingos.",
          voice: "es-MX-m",
        },
        {
          q: "¿Qué forma de «si» oyes en la respuesta?",
          options: ["«si», conjunción átona", "«sí», afirmación tónica", "No hay ninguna."],
          answer: 1,
          why: "Respuesta afirmativa con acento propio.",
          audio: "¿Vendrán a la feria? Sí, vendremos todas.",
          voice: "es-MX-f",
        },
        {
          q: "¿La frase pregunta algo de forma indirecta?",
          options: ["No, es una afirmación causal.", "Sí: «qué» es tónico e interrogativo."],
          answer: 1,
          why: "«No sé qué color» lleva el interrogativo tónico.",
          audio: "Todavía no sé qué color le va a poner a la trama.",
          voice: "es-MX-m",
        },
      ],
    },
    produce: [
      { text: "Tu telar es más antiguo que el de él.", tip: "«Tu» y «el» átonos; «más» y «él» con acento.", voice: "es-MX-f" },
      { text: "Si me lo pides, te digo que sí.", tip: "Primer «si» átono; el último, tónico y final.", voice: "es-MX-m" },
      { text: "No sabemos por qué subió el precio, pero sabemos el porqué del retraso.", tip: "«Qué» tónico; «porqué» con acento en la segunda sílaba.", voice: "es-MX-f" },
      { text: "Aún no llegan los hilos, aun cuando los pedimos en marzo.", tip: "«Aún» bisílabo y tónico; «aun» monosílabo y átono.", voice: "es-MX-m" },
    ],
    spelling: "Las tildes de «tú», «él», «sí», «más» y de los interrogativos se escuchan; las de «solo» y los demostrativos ya no se escriben por norma general. Cuando dudes, lee la frase en voz alta y fíjate en si la palabra lleva acento propio.",
  },
  listening: {
    title: "Las pruebas del informe",
    context: "Rebeca, jefa de publicaciones de una fundación cultural de Oaxaca, y Tomás, el antropólogo que escribió el informe sobre la cooperativa de tejedoras, revisan juntos las últimas pruebas. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "r", name: "Rebeca", voice: "es-MX-f", role: "Jefa de publicaciones" },
      { id: "t", name: "Tomás", voice: "es-MX-m", role: "Antropólogo y autor del informe" },
    ],
    script: [
      { speaker: "r", text: "Tomás, ya tengo las pruebas del informe. Te llamo porque hay dos tipos de correcciones: las de ortografía, que son rápidas, y las de referencias, que son las que de verdad me preocupan." },
      { speaker: "t", text: "Empieza por las rápidas, que me dan menos vergüenza." },
      { speaker: "r", text: "Bueno. Escribes «video» en el capítulo uno y «vídeo» en el tres. Las dos son correctas, pero el texto tiene que elegir una. Como el informe se publica en México, te propongo «video» en todo el texto. Lo mismo con «periodo» y «período»: me quedo con «periodo»." },
      { speaker: "t", text: "Me parece bien. ¿Y lo de «solo»? Yo lo escribo con tilde desde siempre." },
      { speaker: "r", text: "La norma general es sin tilde, y la fundación sigue esa norma. Solo hay un caso en el que dudé: «la maestra trabaja solo con grana». Puede ser que únicamente usa grana o que trabaja sin ayuda. Ahí no voy a poner tilde: te propongo «la maestra solo trabaja con grana», que deja una sola lectura." },
      { speaker: "t", text: "Mejor así, sí. ¿Algo más de ortografía?" },
      { speaker: "r", text: "Cifras. Pusiste «12.500 pesos» con punto. En la norma académica los millares se separan con un espacio. Y escribes «la Presidenta de la cooperativa» con mayúscula; los cargos van en minúscula. Ahora sí, lo importante: las referencias." },
      { speaker: "t", text: "Te escucho." },
      { speaker: "r", text: "En el capítulo tres aparecen Aurelia, la presidenta, y Delfina, la maestra de tintes, casi siempre juntas. En la página cuarenta y dos escribes: «Aurelia le explicó a Delfina el nuevo precio, y ella no estuvo de acuerdo». ¿Quién no estuvo de acuerdo?" },
      { speaker: "t", text: "Delfina. Para mí era obvio." },
      { speaker: "r", text: "Para ti, que estabas allí. El lector no lo sabe. Te propongo «y la maestra no estuvo de acuerdo». Otro caso: el capítulo cuatro empieza con «Ella decidió entonces volver a la grana», pero el capítulo anterior terminaba hablando de las ferias. Después de un cambio de capítulo, el pronombre no funciona. Hace falta el nombre completo y un recordatorio: «Delfina Ruiz, la maestra de tintes cuyo taller describimos en el capítulo dos»." },
      { speaker: "t", text: "Entiendo. ¿Y la cooperativa? Creo que la llamo de muchas maneras." },
      { speaker: "r", text: "De cinco: la cooperativa, el colectivo, la organización, el grupo y la asociación. Una lectora del comité me preguntó si la asociación era otra entidad. Te propongo «la cooperativa» siempre, y sujeto tácito cuando el antecedente está cerca. Y una última cosa: en el capítulo cinco escribes «se revisaron los telares y se repararon los mismos». Quita «los mismos»: «se revisaron los telares y se repararon»." },
      { speaker: "t", text: "Hecho. Me queda claro que el problema no es escribir bien, sino escribir pensando en alguien que no estuvo allí." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué dos tipos de correcciones revisan y cuál preocupa más a Rebeca?",
        exercise: {
          id: "c2-18-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y la idea principal.",
          items: [
            {
              q: "¿Qué dos tipos de correcciones revisan?",
              options: [
                "De precios y de fechas.",
                "De traducción y de diseño.",
                "De ortografía y de referencias.",
              ],
              answer: 2,
              why: "Rebeca lo dice al principio.",
            },
            {
              q: "¿Qué conclusión saca Tomás al final?",
              options: [
                "Que hay que escribir pensando en alguien que no estuvo allí.",
                "Que la ortografía no importa en un informe.",
                "Que debe usar más sinónimos.",
              ],
              answer: 0,
              why: "Es su última intervención.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada decisión. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-18-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Cómo resuelve Rebeca la ambigüedad de «trabaja solo con grana»?",
              options: [
                "Pone tilde en «solo».",
                "Cambia el orden: «solo trabaja con grana».",
                "Elimina la frase.",
              ],
              answer: 1,
              why: "Prefiere reordenar antes que recurrir a la tilde.",
            },
            {
              q: "¿Por qué no funciona «Ella decidió entonces volver a la grana»?",
              options: [
                "Porque la frase tiene una falta de ortografía.",
                "Porque Delfina no usa grana.",
                "Porque abre un capítulo nuevo y el capítulo anterior hablaba de otra cosa.",
              ],
              answer: 2,
              why: "Tras un cambio de capítulo y de tema, el pronombre no tiene antecedente claro.",
            },
            {
              q: "¿Qué confusión provocó llamar a la cooperativa de cinco maneras?",
              options: [
                "Una lectora creyó que la asociación era otra entidad.",
                "La imprenta cambió el título del informe.",
                "La fundación pidió otro informe.",
              ],
              answer: 0,
              why: "Rebeca cita la pregunta de una lectora del comité.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en la solución que propone Rebeca para cada problema. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-18-escucha-notice",
          type: "match",
          prompt: "Relaciona cada problema con su solución.",
          pairs: [
            { left: "«video» y «vídeo» en el mismo texto", right: "elegir una variante admisible y mantenerla" },
            { left: "«12.500 pesos»", right: "separar los millares con un espacio" },
            { left: "«y ella no estuvo de acuerdo»", right: "sustituir el pronombre por un rasgo distintivo" },
            { left: "pronombre al principio de un capítulo", right: "nombre completo y recordatorio" },
            { left: "«se repararon los mismos»", right: "eliminar «los mismos»" },
          ],
          why: "Cada corrección ahorra al lector una duda.",
        },
      },
    ],
  },
  reading: {
    title: "Capítulo 3. La grana vuelve al telar",
    genre: "Capítulo de un informe de evaluación",
    frame: "Capítulo de un informe de Tomás Bautista para una fundación cultural de Oaxaca, ya revisado por la editora. La cooperativa, las personas, la fundación y las cifras son ficticios; el marco del tejido zapoteco de los Valles Centrales es general.",
    text: [
      "Como se explicó en el capítulo 2, la cooperativa Hilo de Lluvia nació en 2015, cuando dieciocho tejedoras de una comunidad zapoteca de los Valles Centrales decidieron vender juntas sus tapetes y rebozos. Este capítulo examina una de las decisiones que más han marcado su evolución: la de volver a teñir con grana cochinilla y otros tintes naturales, abandonados casi por completo en la comunidad durante la segunda mitad del siglo pasado. Lo adelantamos desde ahora: esa decisión fue la más costosa de la década y, según todos los indicadores, también la más rentable.",
      "Dos personas aparecen una y otra vez en las entrevistas sobre este proceso. La primera es Aurelia Martínez, presidenta de la cooperativa desde su fundación; la segunda, Delfina Ruiz, maestra de tintes naturales, que aprendió el oficio de su abuela y lo practicó durante años casi en secreto, porque nadie quería pagar el precio de un rojo de grana. Ambas están de acuerdo en el diagnóstico; no siempre, en cambio, en las soluciones. Por eso, a lo largo del capítulo, distinguiremos con cuidado lo que propuso cada una.",
      "La propuesta de volver a la grana partió de la maestra de tintes. En 2017, durante una feria en la capital del estado, Delfina comprobó que los compradores extranjeros preguntaban, antes que por el diseño, por el origen de los colores. Volvió a la comunidad con una convicción: los tintes industriales, baratos y estables, habían igualado los tapetes de la cooperativa a los de cualquier fábrica. Tal situación, a su juicio, condenaba a las socias a competir solo en precio, una competencia que nunca podrían ganar.",
      "Aurelia Martínez compartía la preocupación, pero no la urgencia. Como presidenta, conocía las cuentas: un kilo de grana costaba entonces más que todo el tinte industrial que la cooperativa usaba en un año, y el proceso de teñido, que exige moler el insecto, preparar los mordientes y repetir los baños, multiplicaba por tres el tiempo de trabajo. Su propuesta fue intermedia: probar con un número reducido de piezas y medir el resultado antes de extender el cambio. Esta cautela, que algunas socias interpretaron entonces como falta de entusiasmo, resultó decisiva.",
      "La prueba se hizo en 2018 con cuarenta tapetes, teñidos por siete u ocho socias bajo la dirección de Delfina Ruiz. Los resultados superaron lo previsto. Las piezas se vendieron en tres meses, a un precio medio un 45 % superior al de los tapetes con tinte industrial, y generaron pedidos de dos tiendas de comercio justo de Canadá y de una galería de la Ciudad de México. Con estos datos, la asamblea aprobó en septiembre extender los tintes naturales a la mitad de la producción. La presidenta, que había defendido la prueba piloto, fue la encargada de negociar los nuevos contratos.",
      "El cambio tuvo costos que el informe no puede omitir. El primero fue económico: durante 2019 la cooperativa tuvo que endeudarse para comprar grana y adaptar el taller. El segundo fue humano. Las socias de más edad, que conocían los tintes naturales por sus madres, se adaptaron enseguida; las más jóvenes, en cambio, tuvieron que aprender un oficio nuevo y algunas lo abandonaron. Este último problema, el del relevo generacional, sigue abierto y será el tema central del capítulo 5.",
      "Hoy, casi siete años después de aquella feria, los indicadores son claros. Según la línea de base de 2015, la cooperativa vendía unas 300 piezas al año con un ingreso medio por socia de 2100 pesos mensuales. En 2024 vendió 410 piezas, el 70 % de ellas con tintes naturales, y el ingreso medio alcanzó los 5300 pesos. La facturación total superó los 12 500 000 pesos en el último periodo evaluado. Ninguna de estas cifras habría sido posible sin la decisión que hemos descrito, ni sin las dos mujeres que la hicieron posible desde posiciones distintas.",
      "Delfina Ruiz, la maestra de tintes, resume el proceso en una frase que repitió en todas las entrevistas: «La grana no es un color; es una manera de trabajar». Aurelia Martínez lo dice de otro modo: «Sin cuentas claras, el rojo se nos habría vuelto deuda». Las dos tienen razón, y conviene que el lector las recuerde cuando, en el capítulo siguiente, examinemos aun los aspectos menos favorables de la experiencia.",
    ],
    glossary: [
      { es: "el mordiente", note: "sustancia que ayuda a fijar el tinte en la fibra" },
      { es: "la asamblea", note: "reunión de todas las socias en la que se toman las decisiones" },
      { es: "la facturación", note: "total de lo que una empresa cobra por sus ventas" },
    ],
    tasks: [
      {
        id: "c2-18-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el capítulo.",
        items: [
          {
            q: "¿Quién propuso volver a la grana y quién propuso la prueba piloto?",
            options: [
              "Aurelia propuso las dos cosas.",
              "Delfina propuso volver a la grana y Aurelia, la prueba piloto.",
              "La asamblea propuso las dos cosas.",
            ],
            answer: 1,
            why: "El tercer y el cuarto párrafo distinguen las dos propuestas.",
          },
          {
            q: "¿Qué problema queda abierto para el capítulo 5?",
            options: [
              "El precio de la grana.",
              "Los contratos con Canadá.",
              "El relevo generacional.",
            ],
            answer: 2,
            why: "«Este último problema, el del relevo generacional, sigue abierto».",
          },
          {
            q: "¿Qué hace la frase «Lo adelantamos desde ahora» en el primer párrafo?",
            options: [
              "Anuncia por catáfora la conclusión que sigue tras los dos puntos.",
              "Remite a un capítulo anterior.",
              "Retoma un pronombre del párrafo anterior.",
            ],
            answer: 0,
            why: "«Lo» anticipa lo que se dice después de los dos puntos.",
          },
        ],
      },
      {
        id: "c2-18-lectura-cadenas",
        type: "match",
        prompt: "Relaciona cada expresión del capítulo con lo que retoma o anuncia.",
        pairs: [
          { left: "Tal situación", right: "la igualación de los tapetes con los de cualquier fábrica" },
          { left: "Esta cautela", right: "la propuesta de probar con pocas piezas antes de extender el cambio" },
          { left: "La presidenta, que había defendido la prueba piloto", right: "Aurelia Martínez" },
          { left: "Este último problema", right: "el abandono de algunas socias jóvenes" },
          { left: "Delfina Ruiz, la maestra de tintes", right: "reintroducción con nombre y recordatorio" },
          { left: "Como se explicó en el capítulo 2", right: "metadiscurso retrospectivo" },
        ],
      },
      {
        id: "c2-18-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa el capítulo con argumentos propios.",
        items: [
          {
            prompt: "El autor anuncia que distinguirá «con cuidado lo que propuso cada una». Explica en 80–100 palabras si lo consigue, con dos recursos concretos del texto, y señala un punto en el que todavía podría haber ambigüedad.",
            model: "Lo consigue en general. Presenta a las dos mujeres con nombre y rasgo distintivo y después alterna «la maestra de tintes» y «la presidenta», que no pueden confundirse. Además, al llegar a la prueba de 2018 vuelve a escribir «bajo la dirección de Delfina Ruiz», porque ha pasado un párrafo dedicado a Aurelia. Un punto dudoso es «Las dos tienen razón» al final: el antecedente está claro, pero tras dos citas largas habría sido útil repetir los nombres para cerrar el capítulo.",
            checklist: [
              "Doy dos recursos concretos del texto.",
              "Señalo un punto mejorable.",
              "Justifico mi valoración.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el capítulo mantiene la referencia y aplica la ortografía académica.",
      items: [
        { quote: "La primera es Aurelia Martínez, presidenta de la cooperativa desde su fundación; la segunda, Delfina Ruiz, maestra de tintes naturales", note: "Presentación de dos referentes en competencia, cada uno con su rasgo distintivo." },
        { quote: "Esta cautela, que algunas socias interpretaron entonces como falta de entusiasmo, resultó decisiva.", note: "Encapsulador que resume toda una propuesta." },
        { quote: "teñidos por siete u ocho socias", note: "«U» ante palabra que empieza por /o/." },
        { quote: "La facturación total superó los 12 500 000 pesos en el último periodo evaluado.", note: "Millares con espacio y variante «periodo» mantenida en todo el informe." },
      ],
    },
  },
  practice: {
    intro: "Ordena, elige la mención adecuada, reescribe y escribe piezas breves. Termina recuperando clases de las semanas anteriores de C2.",
    exercises: [
      {
        id: "c2-18-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases con la ortografía y la referencia correctas.",
        items: [
          {
            words: ["Nadie", "explicó", "por", "qué", "se", "retrasó", "el", "pedido."],
            why: "Interrogativo indirecto separado y con tilde.",
          },
          {
            words: ["Los", "riesgos", "son", "dos:", "la", "imitación", "y", "el", "relevo."],
            why: "Catáfora con elemento anticipador.",
          },
          {
            words: ["Aún", "no", "sabemos", "si", "la", "feria", "se", "hará", "en", "septiembre."],
            why: "«Aún» = todavía; «si» conjunción; mes en minúscula.",
          },
        ],
      },
      {
        id: "c2-18-mencion",
        type: "context",
        prompt: "Elige la mención más clara en cada situación del informe.",
        items: [
          {
            context: "Primera oración del capítulo 5. La última vez que se habló de Delfina fue en el capítulo 3.",
            q: "¿Cómo la mencionas?",
            options: ["Ella", "La maestra", "Delfina Ruiz, la maestra de tintes que impulsó la vuelta a la grana,"],
            answer: 2,
            why: "Antecedente lejano: nombre completo y recordatorio.",
          },
          {
            context: "Oración siguiente a «La asamblea aprobó el nuevo reglamento de precios».",
            q: "¿Qué encapsulador conviene?",
            options: ["Ese reglamento", "Este fenómeno", "Dicha persona"],
            answer: 0,
            why: "Retoma un objeto concreto ya nombrado.",
          },
          {
            context: "Párrafo en el que aparecen Aurelia y su hermana Inés, y se quiere hablar de Inés.",
            q: "¿Qué mención evita la ambigüedad?",
            options: ["Ella", "Su hermana Inés", "La misma"],
            answer: 1,
            why: "Dos referentes del mismo género: hace falta el nombre o un rasgo distintivo.",
          },
        ],
      },
      {
        id: "c2-18-reescritura",
        type: "transform",
        prompt: "Reescribe cada fragmento según la instrucción, sin cambiar su contenido.",
        items: [
          {
            source: "Se revisó el telar y se engrasó el mismo.",
            instruction: "Elimina «el mismo» y deja la referencia implícita.",
            answers: ["Se revisó el telar y se engrasó.", "Se revisó y se engrasó el telar."],
            why: "«El mismo» como pronombre es innecesario.",
          },
          {
            source: "La cooperativa vendió más. El colectivo contrató a dos jóvenes. La organización abrió una tienda.",
            instruction: "Une las tres oraciones con un solo nombre para el referente y sujeto tácito.",
            answers: ["La cooperativa vendió más, contrató a dos jóvenes y abrió una tienda."],
            why: "Un solo término evita que el lector imagine tres entidades.",
          },
          {
            source: "Las socias aprobaron teñir con grana la mitad de la producción. Esto cambió la economía de la comunidad.",
            instruction: "Sustituye «Esto» por un encapsulador con sustantivo.",
            answers: ["Las socias aprobaron teñir con grana la mitad de la producción. Esa decisión cambió la economía de la comunidad.", "Las socias aprobaron teñir con grana la mitad de la producción. Dicha decisión cambió la economía de la comunidad.", "Las socias aprobaron teñir con grana la mitad de la producción. Este acuerdo cambió la economía de la comunidad."],
            why: "El encapsulador nombra lo que se retoma.",
          },
        ],
      },
      {
        id: "c2-18-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 60–80 palabras un párrafo en el que aparezcan dos personas del mismo género (por ejemplo, dos hermanos o dos profesoras) y en el que el lector sepa siempre de quién hablas. Usa un encapsulador.",
            model: "Marta y Lucía Herrera abrieron una librería en 2010. Marta, la mayor, se ocupaba de las cuentas; Lucía, de los clubes de lectura. En 2016 la menor propuso vender también café, y su hermana, que temía las deudas, pidió un año de prueba. Esa prueba salvó el negocio: el café paga hoy el alquiler.",
            checklist: [
              "Cada mención identifica sin duda a una de las dos personas.",
              "Uso un encapsulador.",
              "No uso «la misma» como pronombre.",
            ],
          },
          {
            prompt: "Escribe en 40–60 palabras una nota para el libro de estilo de un informe: qué variantes admisibles elegirás y cómo escribirás cifras, cargos y prefijos.",
            model: "Variantes: «video», «periodo», «quizá» y «septiembre» en todo el informe. Cifras: espacio en los millares a partir de cinco dígitos, punto decimal y «%» separado. Cargos y meses, en minúscula. Prefijos unidos («expresidenta»), separados ante bases de varias palabras y con guion ante cifra o mayúscula.",
            checklist: [
              "Elijo una forma para cada variante.",
              "Incluyo cifras, cargos y prefijos.",
              "Distingo norma y decisión de estilo.",
            ],
          },
        ],
      },
      {
        id: "c2-18-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las semanas anteriores de C2 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G231 (puntuación avanzada). Estímulo: «Los tintes eran: grana del nopal, añil de la costa y pericón de los cerros». Corrige la puntuación y explica la regla.",
            model: "«Los tintes eran grana del nopal, añil de la costa y pericón de los cerros», o bien «Los tintes eran tres: grana del nopal, añil de la costa y pericón de los cerros». Los dos puntos no pueden separar el verbo de su complemento; solo son correctos si hay un elemento que anuncie la enumeración.",
            checklist: [
              "Propongo al menos una versión correcta.",
              "Explico la regla de los dos puntos.",
            ],
          },
          {
            prompt: "Recuperación de la clase G229 (paráfrasis fiel). Estímulo, frase del informe: «Es probable que la grana haya contribuido al aumento de ingresos». Un boletín la resume como «La grana triplicó los ingresos». Explica la distorsión y escribe un resumen fiel.",
            model: "El boletín sube la probabilidad a certeza, convierte una contribución en causa única y añade una cifra («triplicó») que no está en la frase. Resumen fiel: «Según el informe, la grana probablemente contribuyó a que aumentaran los ingresos».",
            checklist: [
              "Señalo cada distorsión.",
              "Mi resumen conserva el peldaño y la atribución.",
            ],
          },
          {
            prompt: "Recuperación de la clase G220 (tema y rema). Estímulo: «Fue aprobada por la asamblea en septiembre la decisión que había propuesto la maestra de tintes tras la feria». Reordena la oración para que avance de lo conocido a lo nuevo, si en el párrafo anterior ya se habló de la propuesta de la maestra.",
            model: "«La propuesta de la maestra de tintes la aprobó la asamblea en septiembre», o «Esa propuesta fue aprobada por la asamblea en septiembre». Lo conocido, la propuesta, pasa al principio como tema, y lo nuevo, quién la aprobó y cuándo, queda al final.",
            checklist: [
              "Coloco lo conocido al principio.",
              "Dejo lo nuevo al final.",
            ],
          },
          {
            prompt: "Recuperación de la clase G210 (subordinación múltiple). Estímulo: «La socia que tiñó los tapetes que vendió la tienda que abrió la cooperativa en la capital es Delfina». Reescribe la oración para que cada referente quede claro.",
            model: "«La cooperativa abrió una tienda en la capital. Los tapetes que se vendieron allí los tiñó Delfina». Dividir la oración y presentar primero la tienda permite retomarla con «allí» sin encadenar tres relativas.",
            checklist: [
              "Reduzco las relativas encadenadas.",
              "Cada referente se presenta antes de retomarse.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la apertura de un capítulo de informe (400–520 palabras) sobre un proyecto colectivo que conozcas o inventes: una cooperativa, una biblioteca comunitaria, un huerto escolar. Deben aparecer al menos dos personas o entidades del mismo género y número, un referente retomado tras un cambio de tema, encapsuladores, metadiscurso y cifras escritas según la norma.",
    context: "El capítulo forma parte de un informe largo que leerán un comité de evaluación y las propias personas del proyecto. Nadie del comité estuvo allí, así que cada referencia debe entenderse sin conocer el lugar. Puedes usar el caso de la cooperativa de Oaxaca o inventar otro con la misma lógica.",
    steps: [
      "Haz una lista de los referentes principales (personas, entidades, decisiones) y decide cómo nombrarás cada uno la primera vez y después.",
      "Decide el orden: recordatorio de lo dicho antes, presentación del tema del capítulo, desarrollo y anuncio de lo que vendrá.",
      "Redacta sin copiar el modelo. Usa al menos dos encapsuladores, una catáfora y dos marcas de metadiscurso.",
      "Revisa el texto con la lista de control: subraya cada pronombre y comprueba que su antecedente está claro; corrige las tildes, las cifras, los prefijos y las variantes mezcladas.",
    ],
    useLanguage: [
      "Como se explicó en el capítulo…",
      "Lo adelantamos desde ahora: …",
      "esta decisión, dicha propuesta, tal situación",
      "la primera…; la segunda… / este último",
      "Fulana, la… cuyo… describimos en…",
      "Volveremos sobre ello en el capítulo…",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Como se vio en el capítulo 1, la biblioteca comunitaria de San Felipe abrió sus puertas en 2016 con 1800 libros donados y dos voluntarias. Este capítulo se ocupa de su crecimiento entre 2019 y 2024, un periodo en el que el fondo superó los 14 000 volúmenes. Dos instituciones protagonizan esa etapa: la primera es la asociación de madres y padres de la escuela primaria; la segunda, la asociación vecinal del barrio alto. Ambas apoyaron el proyecto, pero con objetivos que no siempre coincidían, y esa diferencia, como veremos, explica casi todas las decisiones posteriores.",
    ],
    checklist: [
      "Cada pronombre tiene un antecedente claro y cercano.",
      "Los referentes en competencia se distinguen por el nombre o por un rasgo.",
      "Reintroduzco con nombre y recordatorio los referentes lejanos.",
      "Uso encapsuladores y metadiscurso sin abusar de los sinónimos.",
      "Las tildes, cifras, prefijos, mayúsculas y variantes siguen la norma y son coherentes.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Presentar el capítulo ante el comité",
        prompt: "Presenta oralmente en unos cuatro minutos los resultados del capítulo sobre la grana ante el comité de la fundación. Distingue en todo momento lo que hizo cada una de las dos mujeres, retoma la decisión principal con un encapsulador y usa metadiscurso para guiar a tu público.",
        prep: [
          "Anota cómo nombrarás a cada persona y en qué momentos repetirás su nombre.",
          "Prepara tres marcas de metadiscurso oral: «como les decía», «ahora paso a…», «volveré sobre esto».",
          "Ten a mano dos cifras clave.",
        ],
        seconds: 240,
        model: "Buenos días. Les voy a presentar el capítulo tres, que trata de una sola decisión: volver a teñir con grana. Dos personas son clave aquí. La primera, Delfina Ruiz, la maestra de tintes, fue quien propuso el cambio. La segunda, Aurelia Martínez, la presidenta, fue quien lo frenó un poco y propuso una prueba. Esa prueba, como verán ahora, lo cambió todo…",
        selfCheck: [
          "El público sabe siempre de quién hablo.",
          "Uso al menos un encapsulador.",
          "Guío con metadiscurso.",
        ],
      },
      {
        title: "Responder a una pregunta sobre quién hizo qué",
        prompt: "Un miembro del comité pregunta: «Entonces, ¿fue ella la que negoció con Canadá?», sin aclarar a quién se refiere. Pide la aclaración con cortesía, responde con precisión y aprovecha para resumir el papel de cada mujer.",
        prep: [
          "Prepara una fórmula para pedir aclaración sin incomodar.",
          "Resume en una frase el papel de cada una.",
        ],
        seconds: 150,
        model: "Perdone, ¿se refiere a la maestra de tintes o a la presidenta? Lo pregunto porque tuvieron papeles distintos. Los contratos con Canadá los negoció Aurelia Martínez, la presidenta. Delfina Ruiz, en cambio, dirigió el teñido de las piezas que se enviaron.",
        selfCheck: [
          "Pido aclaración con cortesía.",
          "Respondo con nombres y rasgos distintivos.",
          "Resumo el papel de cada una.",
        ],
      },
      {
        title: "Leer en voz alta pares con y sin tilde",
        prompt: "Lee en voz alta las frases de la tabla «Tónicas y átonas» y después inventa y lee tres frases propias con «aún / aun», «por qué / porque» y «sí / si». Pide a alguien que escriba lo que oye y comprueba si pone las tildes correctas.",
        prep: [
          "Marca las palabras tónicas de cada frase.",
          "Escribe tus tres frases antes de leerlas.",
        ],
        seconds: 100,
        selfCheck: [
          "Las palabras tónicas llevan acento claro.",
          "Quien me escucha puede poner las tildes correctas.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase la apertura de tu capítulo y una lista de dudas ortográficas. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Rastrea",
        task: "Pide a tu profesor que lea tu texto y subraye cada pronombre; tú dices en voz alta a qué se refiere. Si dudas, reescribe la mención.",
        phrases: ["Aquí «ella» es…", "Mejor pongo el nombre"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale qué variantes usa él o ella («video» o «vídeo», «quizá» o «quizás») y si sigue la nota de 2023 sobre «solo».",
        phrases: ["¿Tú escribes «periodo» o «período»?", "¿Pones tilde en «solo» alguna vez?"],
      },
      {
        move: "Dicta",
        task: "Pide a tu profesor que te dicte cinco frases con tildes diacríticas, cifras y prefijos; escríbelas y corrígelas juntos.",
        phrases: ["¿Con espacio o sin espacio?", "¿Junto o separado?"],
      },
      {
        move: "Distingue",
        task: "Elige tres decisiones ortográficas de tu texto y di si son norma, variante admisible o estilo.",
        phrases: ["Esto lo exige la norma…", "Esto es una elección mía…"],
      },
    ],
    bring: "La apertura de tu capítulo revisada, tu nota de libro de estilo y, si quieres, la grabación de tu presentación.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué forma es correcta en «No entiendo ___ subió el precio del hilo»?",
        options: ["porque", "por qué", "porqué"],
        answer: 1,
        why: "Interrogativo indirecto: «por qué».",
      },
      {
        type: "choice",
        q: "En un capítulo, tras dos páginas sobre los mercados, quieres volver a hablar de la presidenta de la cooperativa. ¿Qué mención eliges?",
        options: [
          "Aurelia Martínez, la presidenta de la cooperativa,",
          "Ella",
          "La misma",
        ],
        answer: 0,
        why: "Referente lejano tras un cambio de tema: nombre y recordatorio.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué forma de «aun» oyes?",
        options: ["«aun», que significa «incluso»", "«aún», que significa «todavía»"],
        answer: 1,
        why: "Se pronuncia con dos sílabas y significa «todavía».",
        audio: "La maestra aún tiñe con la receta de su abuela.",
        voice: "es-MX-f",
      },
      {
        type: "gap",
        q: "El informe recoge la opinión de la ___ de la fundación. [ex + directora]",
        answers: [["exdirectora"]],
        hint: "El prefijo «ex» se une a una base de una sola palabra, sin guion ni espacio.",
        why: "«Exdirectora», junto.",
      },
      {
        type: "gap",
        q: "La cooperativa pagó 18 ___ pesos por la grana de este año. [quinientos, escrito en cifras con su separación de millares]",
        answers: [["500"]],
        hint: "En cifras de cinco dígitos, los millares se separan con un espacio, no con punto.",
        why: "«18 500».",
      },
      {
        type: "transform",
        source: "Delfina habló con Aurelia sobre el precio, y ella decidió esperar a la asamblea.",
        instruction: "Elimina la ambigüedad de «ella» suponiendo que quien decidió esperar fue la presidenta, Aurelia.",
        answers: ["Delfina habló con Aurelia sobre el precio, y la presidenta decidió esperar a la asamblea.", "Delfina habló con Aurelia sobre el precio, y Aurelia decidió esperar a la asamblea."],
        why: "El nombre o un rasgo distintivo deshacen la ambigüedad.",
      },
      {
        type: "error",
        sentence: "Se recibió el envío de lana y se almacenó la misma en el taller.",
        answers: ["Se recibió el envío de lana y se almacenó en el taller."],
        why: "«La misma» como pronombre es innecesario.",
      },
      {
        type: "error",
        sentence: "El vídeo de la feria y el video del taller se grabaron en el período de lluvias del periodo 2023.",
        answers: ["El video de la feria y el video del taller se grabaron en el periodo de lluvias de 2023.", "El vídeo de la feria y el vídeo del taller se grabaron en el período de lluvias de 2023."],
        why: "Las variantes admisibles se eligen una vez y se mantienen.",
      },
      {
        type: "order",
        words: ["Esa", "decisión", "cambió", "la", "economía", "de", "la", "comunidad."],
        why: "Encapsulador que retoma una idea entera.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de clase por qué en un informe largo a veces es mejor repetir un nombre que buscar sinónimos. Incluye un ejemplo de variación que confunde y su corrección.",
        model: "En un informe, cada sinónimo puede hacer pensar al lector que aparece una entidad nueva. Si escribo «La cooperativa abrió una tienda. El colectivo contrató a dos jóvenes. La asociación pidió un préstamo», alguien puede creer que hablo de tres grupos. Es mejor repetir el término o usar sujeto tácito: «La cooperativa abrió una tienda, contrató a dos jóvenes y pidió un préstamo». La variación elegante sirve en un texto literario; en un informe, la claridad es más importante que la elegancia.",
        checklist: [
          "Explico el riesgo de la variación.",
          "Doy un ejemplo confuso y su corrección.",
          "Relaciono la decisión con el género del texto.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Aplico las tildes diacríticas, escribo «solo» y los demostrativos según la norma de 2010 y su nota posterior, y reconozco los monosílabos ortográficos.",
      "Escribo según la norma interrogativos indirectos, prefijos, cifras, mayúsculas y las conjunciones «e» y «u», y elijo con coherencia entre variantes admisibles.",
      "Construyo cadenas anafóricas con nombres, pronombres, sinónimos y encapsuladores según la distancia y la competencia entre referentes.",
      "Reintroduzco referentes lejanos, evito «el mismo» como pronombre y guío al lector con metadiscurso.",
    ],
    review: [
      "Dentro de dos días, tapa la columna «Ejemplo» de la tabla de pares y escribe una frase nueva para cada fila.",
      "Dentro de una semana, toma un informe o un artículo largo y sigue la cadena de un referente desde su primera mención hasta la última.",
      "En la próxima clase, pide a tu profesor que lea tu capítulo marcando con un signo de interrogación cada referencia dudosa.",
    ],
  },
  related: [
    { path: "/gramatica/ortografia-academica-y-variacion-admisible", label: "Clase: Ortografía académica y variación admisible" },
    { path: "/gramatica/sintaxis-textual-cohesion-anaforica-de-largo", label: "Clase: Sintaxis textual: cohesión anafórica de largo alcance" },
  ],
};
