import type { Module } from "../../types";

/**
 * C2 · semana 16 · Autoestudio espejo de G229 (paráfrasis avanzada preservando
 * compromiso epistémico) y G230 (conectores raros y valores específicos).
 * Repaso autónomo con un estudio ficticio sobre aljibes y humedad en el
 * Albaicín, su resumen para los vecinos y el prólogo de un catedrático emérito.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w16: Module = {
  id: "c2-16",
  level: "c2",
  week: 16,
  kind: "core",
  title: "Ni más ni menos de lo que dice la fuente",
  subtitle: "Repaso de la paráfrasis que conserva certeza, atribución y alcance, y de los conectores poco frecuentes con su valor exacto",
  stop: {
    place: "Granada",
    country: "España",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g229",
    "c2.gram.g230",
    "c2.voc.w16-ciencia-agua",
    "c2.pron.w16-incisos-cautela",
    "c2.lis.w16-resumen-boletin",
    "c2.read.w16-columna-titulares",
    "c2.wri.w16-resena-divulgativa",
    "c2.spk.w16-explicar-estudio",
    "c2.fun.w16-corregir-exageracion",
    "c2.disc.w16-registro-conectores",
  ],
  reviewObjectives: ["c2.gram.g227","c2.gram.g228","c2.voc.w15-arrecife-redaccion","c2.pron.w15-cifras-en-voz-alta","c2.lis.w15-mesa-de-redaccion","c2.read.w15-noticia-corales","c2.wri.w15-noticia-precisa","c2.spk.w15-explicar-en-radio","c2.fun.w15-traducir-sin-traicionar","c2.disc.w15-fuente-y-dato","c2.rev.w15-semanas-11-15"],
  prerequisites: ["c2-15"],
  goal: {
    canDo: "Puedo resumir lo que afirma otra persona con exactamente su grado de certeza, su atribución y su alcance, y enlazar mis propios textos con conectores poco frecuentes usados con su valor preciso y sin pedantería.",
    steps: [
      "Repasa en la teoría la escala del compromiso, los verbos de atribución, el alcance y los conectores de registro alto con sus falsos amigos.",
      "Practica con el estudio sobre los aljibes del Albaicín, su resumen para los vecinos y el prólogo de un catedrático emérito.",
      "Escucha la revisión del resumen en la oficina de comunicación y lee la columna sobre los titulares que se publicaron.",
      "Redacta una reseña divulgativa, revísala con la lista de control y explica el estudio en voz alta a un público no experto.",
    ],
  },
  theory: {
    intro: "En clase viste estos dos temas con tu profesor. Aquí los repasas en Granada. Un equipo de hidrogeología ha estudiado si reabrir los antiguos aljibes del Albaicín ayuda a secar los muros de las casas cercanas. La oficina de comunicación debe resumir el estudio para los vecinos sin prometer más de lo que dicen los datos, y el volumen que lo publica lleva un prólogo de un catedrático emérito muy aficionado a los conectores raros. Parafrasear bien y enlazar bien son, en el fondo, la misma destreza: decir exactamente lo que se quiere decir.",
    parts: [
      {
        heading: "La escala del compromiso: cambiar la forma, no el peldaño",
        body: [
          "Parafrasear a otra persona no consiste solo en cambiar palabras: hay que conservar cuánto se compromete esa persona con lo que dice. Imagina una escala con peldaños: posibilidad, probabilidad, indicio fuerte y certeza. Dentro de un mismo peldaño puedes cambiar libremente la estructura; lo que no puedes es saltar de un peldaño a otro. «Puede que», «es posible que» y «no cabe descartar que» llevan subjuntivo y están en el mismo peldaño que «podría + infinitivo» o «quizá» y «tal vez». «A lo mejor» también expresa posibilidad, pero va con indicativo y es coloquial: no sirve en un resumen formal.",
          "En el peldaño de la probabilidad están «es probable que + subjuntivo», «probablemente» y «seguramente». Ojo con este último: en español «seguramente» no significa «con seguridad», sino «muy probablemente». «Todo apunta a que + indicativo» presenta un indicio fuerte, y «está demostrado que» o «se ha comprobado que» marcan la certeza. Si la fuente dice «podría», tu paráfrasis no puede decir «todo apunta a que»; si dice «es muy probable», no puedes rebajarlo a «quizá».",
        ],
        table: {
          caption: "Mismo peldaño, distinta estructura",
          head: ["Peldaño", "Formas equivalentes", "Ejemplo con el estudio del Albaicín"],
          rows: [
            ["posibilidad", "puede que / es posible que / no cabe descartar que + subj.; podría + inf.; quizá, tal vez", "Es posible que la reapertura de los aljibes reduzca la humedad de algunos muros."],
            ["probabilidad", "es probable que + subj.; probablemente; seguramente", "Probablemente la humedad procede del subsuelo y no de la lluvia."],
            ["indicio fuerte", "todo apunta a que + ind.; los datos indican con claridad que", "Todo apunta a que el tapial absorbe más agua que el ladrillo."],
            ["certeza", "está demostrado que; se ha comprobado que", "Se ha comprobado que el aljibe de la calle Horno estaba cegado desde 1950."],
          ],
        },
        tip: "Antes de entregar un resumen, subraya en la fuente cada marca de cautela y busca su equivalente en tu versión: deben salir el mismo número de marcas y del mismo peso.",
      },
      {
        heading: "Verbos de atribución y alcance: quién lo dice y hasta dónde llega",
        body: [
          "Los verbos con los que atribuyes una idea también tienen fuerza. «Plantea» presenta una hipótesis; «sugiere», un resultado prudente; «muestra», un resultado sólido; «demuestra» y «establece», una prueba. Otros verbos añaden la postura del autor: «reconoce» (admite algo que no le favorece), «advierte» (señala un riesgo), «sostiene» (defiende frente a otros). Cuidado con «sugerir»: con indicativo indica un resultado («el estudio sugiere que la humedad baja»); con subjuntivo es una recomendación («el estudio sugiere que se reabran los aljibes»). También importa la diferencia entre «según el estudio, la humedad baja» (tú solo transmites) y «el estudio confirma que la humedad baja» (tú respaldas la afirmación).",
          "El alcance es la otra mitad de la fidelidad. Si la fuente dice «en algunas viviendas», no escribas «en las viviendas»; si dice «en los meses secos», esa condición no puede desaparecer; si concede algo («aunque la muestra es pequeña»), la concesión viaja con el resultado. Con la negación hay que ir con especial cuidado: «no todas las casas mejoraron» no equivale a «ninguna casa mejoró», y «no se observó que la humedad bajara» (falta de prueba) no es lo mismo que «se observó que la humedad no bajaba» (prueba en contra). Al nominalizar, la cautela se traslada a un adjetivo: «la posible relación», «la aparente mejora». Y no confundas «posible» con «supuesto»: «supuesto» insinúa que tú dudas de lo que dice otro.",
        ],
        examples: [
          { es: "El estudio sugiere que la humedad disminuye cerca de los aljibes reabiertos.", note: "«Sugerir» + indicativo: resultado prudente." },
          { es: "El estudio sugiere que se revisen primero los aljibes de propiedad municipal.", note: "«Sugerir» + subjuntivo: recomendación." },
          { es: "No se registró que los muros de ladrillo se secaran.", note: "Ausencia de prueba, no prueba de lo contrario." },
          { es: "La posible relación entre los aljibes y la humedad merece más estudio.", note: "La cautela pasa al adjetivo al nominalizar." },
        ],
        mistakes: [
          {
            wrong: "El estudio demuestra que reabrir los aljibes seca las casas del Albaicín.",
            right: "Según el estudio, es posible que reabrir los aljibes reduzca la humedad de algunas casas del Albaicín.",
            why: "La versión errónea sube el verbo de atribución, convierte la posibilidad en certeza y borra el alcance («algunas»).",
          },
          {
            wrong: "Los investigadores plantean la idea de que quizá haya alguna relación.",
            right: "Los investigadores observan que la humedad bajó en las casas más cercanas, aunque con una muestra pequeña.",
            why: "Rebajar un resultado con datos a una simple idea también es infidelidad, en la dirección contraria.",
          },
        ],
      },
      {
        heading: "Conectores poco frecuentes de contraste, tiempo y causa",
        body: [
          "Algunos conectores se usan poco, pero tienen un valor preciso que conviene conocer, sobre todo para leer textos literarios, jurídicos o académicos. En el contraste, «empero» equivale a «sin embargo» y suena arcaico; hoy aparece sobre todo entre comas, tras el primer elemento de la oración («la obra, empero, se detuvo»). «Mas», sin tilde, equivale a «pero» en un registro literario. «Con todo y con eso» es coloquial y enfático: «a pesar de todo eso».",
          "En el tiempo, «no bien» significa «en cuanto» («No bien se abrió el aljibe, apareció el agua»); «a la sazón» significa «entonces, en aquel momento» y suele acompañar un cargo que alguien tenía («el arquitecto, a la sazón director de obras»); «así las cosas» resume una situación antes de sacar consecuencias. En la causa, «habida cuenta de que» equivale a «teniendo en cuenta que» y nunca pierde la preposición; «toda vez que» significa «dado que», no «cada vez que»; «máxime cuando» o «máxime si» añaden una razón que refuerza («sobre todo cuando»); «amén de» significa «además de», y «a mayor abundamiento» es propio del lenguaje jurídico.",
        ],
        table: {
          caption: "Valor exacto y equivalente común",
          head: ["Conector", "Equivale a", "Ejemplo"],
          rows: [
            ["empero", "sin embargo (arcaico)", "El proyecto contaba, empero, con pocos fondos."],
            ["no bien", "en cuanto", "No bien llegaron los técnicos, empezó a llover."],
            ["a la sazón", "entonces, en aquel momento", "Lo firmó Pérez, a la sazón alcalde de la ciudad."],
            ["habida cuenta de que", "teniendo en cuenta que", "Habida cuenta de que el muro es de tapial, conviene medirlo cada mes."],
            ["toda vez que", "dado que", "Se suspendió la visita, toda vez que el acceso era inseguro."],
            ["máxime cuando", "sobre todo cuando", "Es imprudente, máxime cuando no hay planos."],
            ["amén de", "además de", "Amén de la humedad, el informe analiza la ventilación."],
          ],
        },
        mistakes: [
          {
            wrong: "Habida cuenta que la muestra es pequeña, el resultado es provisional.",
            right: "Habida cuenta de que la muestra es pequeña, el resultado es provisional.",
            why: "La locución es «habida cuenta de (que)»: la preposición no puede omitirse.",
          },
          {
            wrong: "Toda vez que llueve, el sótano se inunda.",
            right: "Cada vez que llueve, el sótano se inunda.",
            why: "«Toda vez que» es causal («dado que»), no temporal de repetición.",
          },
        ],
      },
      {
        heading: "Condición, concesión, cierre, falsos amigos y riesgo de pedantería",
        body: [
          "Para condicionar o conceder: «so pena de» + infinitivo (o «de que» + subjuntivo) significa «bajo la amenaza de, con el riesgo de» («Hay que actuar pronto, so pena de perder la subvención»); «siquiera sea» + subjuntivo equivale a «aunque solo sea» («Visita el aljibe, siquiera sea un momento»); «a fuer de» significa «en calidad de, como» y aparece en fórmulas como «a fuer de sincero». Para cerrar o pasar a otra cosa: «por ende» equivale a «por tanto», «sea como fuere» a «en cualquier caso», «dicho lo cual» a «una vez dicho esto».",
          "Hay además falsos amigos que conviene vigilar si lees mucho en otras lenguas: «eventualmente» significa «posiblemente, ocasionalmente», no «finalmente»; «actualmente» significa «en la actualidad», no «en realidad»; «en definitiva» introduce una conclusión, y «en efecto» confirma lo dicho antes. Y, sobre todo, recuerda que estos conectores son especias: uno bien colocado da precisión y elegancia; cinco en un párrafo dirigido a vecinos suenan a pedantería y dificultan la lectura. Elige según el género y el público.",
        ],
        examples: [
          { es: "Conviene sellar la grieta cuanto antes, so pena de que el agua alcance los cimientos.", note: "Riesgo que se quiere evitar." },
          { es: "Dedica al prólogo una lectura, siquiera sea rápida.", note: "«Aunque solo sea» rápida." },
          { es: "La campaña de medición terminará eventualmente en primavera.", note: "Mal usado si se quiere decir «finalmente»; aquí significaría «quizá»." },
          { es: "Sea como fuere, el equipo repetirá las mediciones el próximo verano.", note: "Cierre: en cualquier caso." },
        ],
        mistakes: [
          {
            wrong: "Hoja para vecinos: «Habida cuenta de los datos y, por ende, máxime cuando los aljibes, empero, no bien se abran…».",
            right: "Hoja para vecinos: «Como los datos son todavía provisionales, conviene esperar a las nuevas mediciones antes de abrir más aljibes».",
            why: "Acumular conectores de registro alto en un texto para el público general lo vuelve opaco y pedante.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero comprueba la fidelidad de cada paráfrasis; después elige el conector exacto y corrige los usos erróneos.",
    exercises: [
      {
        id: "c2-16-gramatica-fidelidad",
        type: "context",
        prompt: "Lee la frase original del estudio y elige la paráfrasis que conserva su compromiso.",
        items: [
          {
            context: "Original: «Los datos sugieren que la reapertura de aljibes podría reducir la humedad en algunos muros de tapial».",
            q: "¿Qué paráfrasis es fiel?",
            options: [
              "El estudio demuestra que reabrir aljibes seca los muros de tapial.",
              "Según el estudio, es posible que reabrir aljibes reduzca la humedad de algunos muros de tapial.",
              "El estudio plantea vagamente que los aljibes tal vez tengan algo que ver.",
            ],
            answer: 1,
            why: "Mantiene la posibilidad («es posible que»), la atribución y el alcance («algunos»).",
          },
          {
            context: "Original: «En la mayoría de las viviendas medidas, la humedad descendió durante los meses secos».",
            q: "¿Qué paráfrasis conserva el alcance?",
            options: [
              "La humedad descendió en las viviendas medidas.",
              "La humedad descendió en todas las viviendas durante todo el año.",
              "En casi todas las viviendas no hubo cambios.",
              "La humedad bajó en buena parte de las viviendas medidas, siempre en los meses secos.",
            ],
            answer: 3,
            why: "Conserva el cuantificador aproximado y la condición temporal.",
          },
          {
            context: "Original: «No se observó que los muros de ladrillo se secaran».",
            q: "¿Qué significa exactamente?",
            options: [
              "Que no hay datos de que los muros de ladrillo se secaran.",
              "Que se comprobó que los muros de ladrillo seguían húmedos.",
              "Que los muros de ladrillo no existen.",
            ],
            answer: 0,
            why: "Es ausencia de prueba, no prueba de lo contrario.",
          },
          {
            context: "Original: «La autora reconoce que la muestra, de veintidós casas, es reducida».",
            q: "¿Qué aporta «reconoce» frente a «dice»?",
            options: [
              "Que la autora está muy segura de su resultado.",
              "Que la autora miente.",
              "Que la autora admite un límite que no favorece a su estudio.",
            ],
            answer: 2,
            why: "«Reconocer» marca la admisión de algo que debilita la propia posición.",
          },
        ],
      },
      {
        id: "c2-16-gramatica-conectores",
        type: "gap",
        prompt: "Completa con el conector poco frecuente que corresponde al valor indicado entre corchetes.",
        items: [
          { q: "___ se retiró la losa, empezó a salir un aire frío del aljibe. [en cuanto]", answers: [["No bien"]], why: "«No bien» = en cuanto." },
          { q: "El informe lo firmó Remedios Garzón, ___ directora del archivo municipal. [entonces, en aquel momento]", answers: [["a la sazón"]], why: "«A la sazón» acompaña a un cargo que se tenía entonces." },
          { q: "Se aplazó la excavación, ___ el permiso de la Junta no había llegado. [dado que]", answers: [["toda vez que"]], why: "«Toda vez que» es causal." },
          { q: "Es arriesgado generalizar, ___ la muestra solo incluye veintidós casas. [sobre todo cuando]", answers: [["máxime cuando"]], why: "«Máxime cuando» añade una razón que refuerza." },
          { q: "___ el coste, el proyecto plantea problemas de acceso para las máquinas. [además de]", answers: [["Amén de"]], why: "«Amén de» = además de." },
          { q: "Hay que impermeabilizar la cubierta antes del otoño, ___ perder la ayuda europea. [con el riesgo de]", answers: [["so pena de"]], why: "«So pena de» + infinitivo: riesgo que se quiere evitar." },
        ],
      },
      {
        id: "c2-16-gramatica-escala",
        type: "classify",
        prompt: "El original dice: «Es probable que la humedad proceda del subsuelo». Clasifica cada paráfrasis.",
        categories: ["Sube el compromiso", "Fiel", "Baja el compromiso"],
        items: [
          { text: "Está demostrado que la humedad procede del subsuelo.", cat: 0, why: "Pasa de probabilidad a certeza." },
          { text: "Probablemente la humedad procede del subsuelo.", cat: 1, why: "Mismo peldaño, otra estructura." },
          { text: "A lo mejor la humedad viene de abajo, quién sabe.", cat: 2, why: "Posibilidad coloquial: baja de peldaño y de registro." },
          { text: "Seguramente la humedad procede del subsuelo.", cat: 1, why: "«Seguramente» = muy probablemente." },
          { text: "Todo apunta, sin duda alguna, a que la humedad procede del subsuelo.", cat: 0, why: "«Sin duda alguna» añade una certeza que no estaba." },
          { text: "No cabe descartar del todo que la humedad proceda del subsuelo.", cat: 2, why: "Presenta como mera posibilidad lo que era probable." },
          { text: "Lo más probable es que la humedad proceda del subsuelo.", cat: 1, why: "Equivale a «es probable»." },
          { text: "El estudio establece el origen subterráneo de la humedad.", cat: 0, why: "«Establece» es un verbo de prueba." },
        ],
      },
      {
        id: "c2-16-gramatica-errores",
        type: "error",
        prompt: "Corrige el error de cada frase (de fidelidad o de conector).",
        items: [
          {
            sentence: "Habida cuenta que los aljibes son del siglo XIV, cualquier obra necesita permiso.",
            answers: ["Habida cuenta de que los aljibes son del siglo XIV, cualquier obra necesita permiso."],
            why: "«Habida cuenta de que»: la preposición es obligatoria.",
          },
          {
            sentence: "Los técnicos revisan el pozo toda vez que llueve más de dos días seguidos.",
            answers: ["Los técnicos revisan el pozo cada vez que llueve más de dos días seguidos."],
            why: "«Toda vez que» no significa «cada vez que».",
          },
          {
            sentence: "Original: «la humedad bajó en algunas casas». Resumen: «La humedad bajó en las casas del barrio».",
            answers: ["Original: «la humedad bajó en algunas casas». Resumen: «La humedad bajó en algunas casas del barrio»."],
            why: "El resumen borra el cuantificador y amplía el alcance.",
          },
          {
            sentence: "El prólogo es breve; más, es muy denso.",
            answers: ["El prólogo es breve; mas es muy denso.", "El prólogo es breve, mas es muy denso."],
            why: "El conector adversativo «mas» no lleva tilde ni coma detrás.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico para hablar de un estudio con prudencia y del patrimonio del agua en Granada.",
    groups: [
      {
        title: "Divulgación prudente",
        items: [
          { es: "el indicio", note: "señal que permite suponer algo, sin probarlo" },
          { es: "la correlación", note: "relación entre dos variables que cambian juntas; no implica causa" },
          { es: "la muestra", note: "conjunto de casos que se estudian" },
          { es: "matizar", note: "precisar una afirmación añadiendo límites o condiciones" },
          { es: "el margen de error", note: "intervalo de imprecisión de una medida" },
          { es: "extrapolar", note: "aplicar un resultado a casos que no se estudiaron" },
        ],
      },
      {
        title: "El agua del Albaicín",
        items: [
          { es: "el aljibe", note: "depósito subterráneo para recoger y guardar agua" },
          { es: "el tapial", note: "muro de tierra apisonada" },
          { es: "el carmen", note: "en Granada, casa con huerto o jardín cercado" },
          { es: "la acequia", note: "canal que conduce el agua para regar o abastecer" },
          { es: "cegar un pozo", note: "taparlo o rellenarlo para que no se use" },
          { es: "la filtración", note: "paso del agua a través de un muro o del suelo" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-16-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada término con su definición.",
        pairs: [
          { left: "el indicio", right: "señal que permite suponer algo, sin probarlo" },
          { left: "la correlación", right: "relación entre dos variables que cambian juntas; no implica causa" },
          { left: "extrapolar", right: "aplicar un resultado a casos que no se estudiaron" },
          { left: "el tapial", right: "muro de tierra apisonada" },
          { left: "el carmen", right: "en Granada, casa con huerto o jardín cercado" },
          { left: "cegar un pozo", right: "taparlo o rellenarlo para que no se use" },
        ],
      },
      {
        id: "c2-16-lexico-uso",
        type: "gap",
        prompt: "Completa con la palabra adecuada del vocabulario.",
        bank: ["muestra", "extrapolar", "matizar", "acequia"],
        items: [
          { q: "Con una ___ de veintidós casas, el estudio no permite hablar de todo el barrio.", answers: [["muestra"]] },
          { q: "Sería imprudente ___ el resultado a los edificios de hormigón.", answers: [["extrapolar"]] },
          { q: "El titular era correcto, pero la periodista tuvo que ___ el alcance en el segundo párrafo.", answers: [["matizar"]] },
          { q: "La antigua ___ llevaba el agua del río Darro hasta los aljibes.", answers: [["acequia"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Conectores entre pausas y modalizadores que no se borran",
    explanation: [
      "Cuando un conector va intercalado entre comas («la obra, empero, se detuvo»; «el estudio, por ende, es provisional»), en la lectura en voz alta forma un inciso: una breve pausa antes y después y un tono algo más bajo que el resto de la oración. Si lo lees con el mismo tono que lo demás, el oyente pierde la estructura.",
      "Los modalizadores de cautela son frágiles en la oralidad: «podría», «es probable que», «según los autores» se pronuncian rápido y se pierden. Al explicar un estudio en voz alta, dales un acento normal y no los tragues; tampoco los exageres con un tono dubitativo, porque entonces suenan a desconfianza de quien habla y no a cautela de la fuente.",
      "El audio utiliza la síntesis disponible en el navegador: sirve para el ritmo y las pausas, no certifica un acento regional.",
    ],
    table: {
      caption: "Dónde van las pausas",
      head: ["Frase", "Agrupación"],
      rows: [
        ["El estudio, empero, tiene límites.", "El estudio | empero | tiene límites."],
        ["No bien se abrió la losa, salió aire frío.", "No bien se abrió la losa | salió aire frío."],
        ["Es probable que la humedad venga del subsuelo.", "Es probable que la humedad | venga del subsuelo."],
        ["Sea como fuere, repetirán las mediciones.", "Sea como fuere | repetirán las mediciones."],
      ],
    },
    perceive: {
      id: "c2-16-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y responde.",
      items: [
        {
          q: "¿Qué grado de compromiso transmite la frase?",
          options: ["Certeza.", "Probabilidad.", "Simple posibilidad."],
          answer: 2,
          why: "«Podría» marca posibilidad.",
          audio: "Según el equipo, la reapertura de los aljibes podría aliviar la humedad de algunas casas.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué valor tiene «toda vez que» en lo que oyes?",
          options: ["Causal: dado que.", "Temporal: cada vez que."],
          answer: 0,
          why: "Explica por qué se cerró el acceso.",
          audio: "Se cerró el acceso al aljibe, toda vez que la escalera no era segura.",
          voice: "es-ES-m",
        },
        {
          q: "¿Qué palabra se pronuncia como inciso, entre pausas y con tono más bajo?",
          options: ["medición", "empero", "repetirse"],
          answer: 1,
          why: "El conector intercalado forma un inciso.",
          audio: "La medición, empero, tendrá que repetirse en invierno.",
          voice: "es-CO-m",
        },
        {
          q: "¿Qué hace quien habla con la fuente?",
          options: ["La respalda como verdadera.", "Solo transmite lo que dice la fuente.", "La desmiente."],
          answer: 1,
          why: "«Según el informe» atribuye sin respaldar.",
          audio: "Según el informe, la acequia dejó de usarse a mediados del siglo pasado.",
          voice: "es-MX-f",
        },
      ],
    },
    produce: [
      { text: "El estudio, empero, reconoce que la muestra es pequeña.", tip: "Pausa breve antes y después de «empero», con tono más bajo.", voice: "es-ES-m" },
      { text: "Es probable que la humedad proceda del subsuelo, pero no está demostrado.", tip: "No te tragues «es probable que»; acento normal, sin tono de duda.", voice: "es-ES-f" },
      { text: "No bien abrieron el aljibe, el muro empezó a secarse.", tip: "«No bien» va unido al verbo, sin pausa entre «no» y «bien».", voice: "es-CO-f" },
      { text: "Sea como fuere, el equipo repetirá las mediciones en verano.", tip: "Pausa tras «fuere» y tono descendente al final.", voice: "es-PE-m" },
    ],
    spelling: "«Mas» adversativo se escribe sin tilde; «más» con tilde es el adverbio de cantidad. «Empero» y los conectores intercalados van entre comas. Detrás de «habida cuenta» siempre aparece «de».",
  },
  listening: {
    title: "El resumen para los vecinos",
    context: "Julián, jefe de comunicación del centro de estudios que ha publicado el informe sobre los aljibes del Albaicín, y Celia, periodista en prácticas, revisan el resumen que ella ha escrito para la hoja informativa del barrio. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "j", name: "Julián", voice: "es-ES-m", role: "Jefe de comunicación" },
      { id: "c", name: "Celia", voice: "es-ES-f", role: "Periodista en prácticas" },
    ],
    script: [
      { speaker: "j", text: "Celia, he leído tu resumen y está muy bien escrito, se entiende todo. Pero antes de mandarlo a imprenta quiero repasarlo frase por frase contra el informe, porque en divulgación lo difícil no es que se entienda, sino que diga exactamente lo mismo que los autores." },
      { speaker: "c", text: "Vale. ¿Por dónde empezamos?" },
      { speaker: "j", text: "Por el titular. Pusiste «Reabrir los aljibes seca las casas del Albaicín». El informe dice que los datos sugieren que la reapertura podría reducir la humedad en algunos muros de tapial. Tu titular ha subido tres peldaños de golpe: de «podría» a una afirmación categórica, de «algunos muros de tapial» a «las casas» y de «reducir» a «secar»." },
      { speaker: "c", text: "Ya, es que «podría» en un titular queda flojo. ¿Qué tal «Los aljibes podrían ayudar a secar algunos muros del Albaicín»?" },
      { speaker: "j", text: "Mucho mejor. Conserva la posibilidad y el alcance. Segundo punto: en el tercer párrafo escribes que «la doctora Lorite demuestra que la humedad viene del subsuelo». Ella no lo demuestra; lo considera probable. Puedes decir «considera probable» o «la hipótesis más probable, según la autora, es que…»." },
      { speaker: "c", text: "Entendido. ¿Y lo de los muros de ladrillo? Escribí que «en los de ladrillo, la humedad no bajó»." },
      { speaker: "j", text: "Ahí el informe es muy preciso: dice que no se observó que se secaran. No es lo mismo. No midieron ninguna mejora, pero tampoco tienen pruebas de que no la haya, porque solo midieron cuatro casas de ladrillo. Mejor «en las cuatro casas de ladrillo medidas no se registraron cambios»." },
      { speaker: "c", text: "Vale, lo corrijo. Por cierto, también me corregiste la cita del prólogo. Yo había puesto que don Anselmo dice que hay que actuar «toda vez que llueva»." },
      { speaker: "j", text: "Sí, porque él escribe «toda vez que llueve cada año menos», que significa «dado que llueve menos», no «cada vez que llueve». Es un conector causal. Y en la hoja para vecinos yo no lo citaría: con los conectores de don Anselmo, empero, a la sazón y compañía, la gente se pierde." },
      { speaker: "c", text: "Entonces lo parafraseo: «Según el prólogo, es urgente actuar porque cada año llueve menos». ¿Mantiene la urgencia?" },
      { speaker: "j", text: "La mantiene, y además dejas claro que es la opinión del prologuista, no un dato del estudio. Último detalle: has quitado la frase en la que la autora reconoce que la muestra es pequeña. Tiene que volver. Si quitas la concesión, el resultado parece más sólido de lo que es." },
      { speaker: "c", text: "Me cuesta, porque le resta fuerza al texto." },
      { speaker: "j", text: "Le resta fuerza al titular, pero se la da a la hoja informativa. Los vecinos se fían de nosotros precisamente porque no exageramos." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin abrir la transcripción. ¿Qué revisan y qué criterio sigue Julián?",
        exercise: {
          id: "c2-16-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y la idea principal.",
          items: [
            {
              q: "¿Qué revisan Julián y Celia?",
              options: [
                "El resumen de un informe para la hoja informativa del barrio.",
                "Un contrato de obras para reabrir los aljibes.",
                "Una entrevista con la autora del informe.",
              ],
              answer: 0,
              why: "Revisan el resumen de Celia frase por frase contra el informe.",
            },
            {
              q: "¿Cuál es el criterio principal de Julián?",
              options: [
                "Que el texto sea lo más llamativo posible.",
                "Que el texto use el vocabulario técnico del informe.",
                "Que el resumen diga exactamente lo mismo que los autores, sin exagerar.",
              ],
              answer: 2,
              why: "Lo dice al principio y lo resume al final: no exagerar.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada corrección. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-16-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué tres cambios hacía el titular de Celia respecto al informe?",
              options: [
                "Cambiaba la fecha, el autor y el barrio.",
                "Subía la certeza, ampliaba el alcance y cambiaba «reducir» por «secar».",
                "Añadía una cita, un dato y una pregunta.",
              ],
              answer: 1,
              why: "Julián habla de «tres peldaños de golpe».",
            },
            {
              q: "¿Qué dice el informe sobre las casas de ladrillo?",
              options: [
                "Que la humedad aumentó.",
                "Que la humedad no bajó, y está comprobado.",
                "Que no se observó que se secaran, con solo cuatro casas medidas.",
              ],
              answer: 2,
              why: "Ausencia de prueba en una muestra muy pequeña.",
            },
            {
              q: "¿Qué frase pide Julián que vuelva al resumen?",
              options: [
                "La concesión en la que la autora reconoce que la muestra es pequeña.",
                "La cita completa del prólogo.",
                "El nombre del alcalde.",
              ],
              answer: 0,
              why: "Sin la concesión, el resultado parece más sólido de lo que es.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en cómo se corrige cada distorsión. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-16-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con lo que hace.",
          pairs: [
            { left: "Los aljibes podrían ayudar a secar algunos muros", right: "titular que conserva posibilidad y alcance" },
            { left: "considera probable", right: "verbo de atribución en el peldaño correcto" },
            { left: "no se registraron cambios", right: "ausencia de prueba sin convertirla en prueba contraria" },
            { left: "toda vez que llueve cada año menos", right: "conector causal del registro alto" },
            { left: "Según el prólogo, es urgente actuar", right: "paráfrasis atribuida a otra voz" },
          ],
          why: "Cada corrección devuelve al resumen el compromiso exacto de su fuente.",
        },
      },
    ],
  },
  reading: {
    title: "Tres titulares para un aljibe",
    genre: "Columna de divulgación sobre periodismo científico",
    frame: "Columna de Inmaculada Rus en una revista granadina de divulgación. El estudio, las personas, la revista y los medios citados son ficticios.",
    text: [
      "Hace dos semanas, el Centro de Estudios del Albaicín publicó un informe de cuarenta páginas sobre la humedad de las casas del barrio. Su autora principal, la hidrogeóloga Amparo Lorite, midió durante un año los muros de veintidós viviendas próximas a tres aljibes medievales que el ayuntamiento había reabierto, siquiera sea parcialmente, para estudiarlos. La conclusión central cabe en una línea: los datos sugieren que la reapertura podría reducir la humedad en algunos muros de tapial, sobre todo en los meses secos. Es una frase prudente, llena de matices, y cada uno de ellos está ahí por una razón.",
      "No bien se publicó el informe, empezaron a aparecer los titulares. El primero, en un diario digital, decía: «Los aljibes del Albaicín, la solución contra la humedad». El segundo, en una emisora local: «Un estudio demuestra que reabrir los aljibes seca las casas». El tercero, en una revista de decoración, iba en la dirección contraria: «Unos investigadores creen que quizá los aljibes tengan algo que ver con la humedad». Ninguno de los tres miente del todo; ninguno, empero, dice lo que dice el estudio.",
      "Los dos primeros suben el compromiso. «La solución» convierte una posibilidad en un remedio; «demuestra» convierte un indicio en una prueba, y «las casas» borra la palabra más importante del informe, que es «algunos». Habida cuenta de que la muestra es de veintidós viviendas, y de que solo las de tapial mostraron cambios, hablar de todas las casas del barrio es una extrapolación que la autora no hace en ningún momento. Es más: en la página doce reconoce que la muestra es reducida y que haría falta repetir las mediciones en otros barrios antes de generalizar. Esa concesión desapareció de todas las noticias.",
      "El tercer titular comete el error opuesto, que se comenta menos pero no es menos grave. «Creen que quizá tengan algo que ver» rebaja un resultado basado en mediciones a una simple corazonada. Si yo fuera la autora, me molestaría tanto como el «demuestra», toda vez que un año de trabajo de campo merece algo más que un «quizá». Parafrasear con fidelidad no es ser tímido: es ponerse exactamente en el mismo peldaño que la fuente, ni uno más arriba ni uno más abajo.",
      "Hay un detalle del informe que casi nadie ha citado y que, a mi juicio, es el más interesante. En las cuatro casas de ladrillo que se midieron no se observó que los muros se secaran. Varios medios lo han traducido como «en las casas de ladrillo no funciona». No es lo mismo. Que no se observara una mejora en cuatro casas significa que no hay pruebas de que la haya; no significa que haya pruebas de que no la hay. La diferencia parece un juego de palabras, mas no lo es: de ella depende que el ayuntamiento descarte o no seguir estudiando esas viviendas.",
      "Tampoco ayudó la cita del prólogo, firmado por el catedrático emérito Anselmo Calahorra, a la sazón director del centro cuando se proyectó el estudio. Don Anselmo escribe con una prosa magnífica y antigua, y en el segundo párrafo afirma que es urgente actuar «toda vez que llueve cada año menos». Un medio lo citó como si dijera que hay que actuar «cada vez que llueve». El error es comprensible, máxime cuando la locución apenas se usa fuera de los textos jurídicos, pero cambia por completo el sentido. El prologuista no habla de una costumbre, sino de una causa.",
      "Así las cosas, ¿qué tendría que haber dicho un buen titular? Propongo uno, sin pretender que sea el único posible: «Reabrir los aljibes podría ayudar a secar algunos muros del Albaicín, según un estudio». Es más largo y menos espectacular, pero cada palabra se corresponde con algo que el informe sostiene. Si el espacio no da para tanto, mejor quitar el adjetivo que quitar el «podría».",
      "Sea como fuere, el caso deja una lección que va más allá de los aljibes. Cuando resumimos lo que dice otra persona, contraemos con ella una deuda: la de no ponerle en la boca más seguridad de la que tuvo, ni menos. Amén de una cuestión de ética profesional, es una cuestión de eficacia, so pena de que los lectores dejen de fiarse de nosotros el día en que de verdad tengamos algo demostrado que contar. Dicho lo cual, recomiendo leer el informe completo; es breve, está bien escrito y, por ende, no hay excusa para no hacerlo.",
    ],
    glossary: [
      { es: "el trabajo de campo", note: "parte de una investigación que se hace fuera del laboratorio, midiendo u observando en el lugar" },
      { es: "la corazonada", note: "intuición sin pruebas" },
      { es: "el prologuista", note: "autor del prólogo de un libro" },
    ],
    tasks: [
      {
        id: "c2-16-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la columna.",
        items: [
          {
            q: "¿Qué critica la autora del tercer titular?",
            options: [
              "Que exagera el resultado del estudio.",
              "Que rebaja un resultado basado en datos a una simple intuición.",
              "Que cita mal el prólogo.",
            ],
            answer: 1,
            why: "Dice que convierte el resultado en «una simple corazonada».",
          },
          {
            q: "¿Por qué es importante la frase sobre las casas de ladrillo?",
            options: [
              "Porque su mala paráfrasis podría llevar a descartar el estudio de esas viviendas.",
              "Porque demuestra que el ladrillo no se humedece.",
              "Porque es la conclusión principal del informe.",
            ],
            answer: 0,
            why: "«De ella depende que el ayuntamiento descarte o no seguir estudiando esas viviendas».",
          },
          {
            q: "¿Qué prefiere la autora si el titular no cabe en el espacio disponible?",
            options: [
              "Quitar la atribución «según un estudio».",
              "Quitar «algunos».",
              "Quitar un adjetivo antes que el «podría».",
            ],
            answer: 2,
            why: "Lo dice al final del séptimo párrafo.",
          },
        ],
      },
      {
        id: "c2-16-lectura-conectores",
        type: "match",
        prompt: "Relaciona cada conector de la columna con su equivalente común.",
        pairs: [
          { left: "No bien se publicó el informe", right: "En cuanto se publicó el informe" },
          { left: "ninguno, empero, dice lo que dice el estudio", right: "sin embargo, ninguno dice…" },
          { left: "a la sazón director del centro", right: "entonces director del centro" },
          { left: "máxime cuando la locución apenas se usa", right: "sobre todo porque la locución apenas se usa" },
          { left: "Así las cosas", right: "En esta situación" },
          { left: "por ende, no hay excusa", right: "por tanto, no hay excusa" },
        ],
      },
      {
        id: "c2-16-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa la columna con argumentos propios.",
        items: [
          {
            prompt: "La autora usa muchos conectores de registro alto. Explica en 80–100 palabras si te parecen adecuados para una revista de divulgación, con dos ejemplos del texto, y propón una alternativa común para uno de ellos.",
            model: "En general son adecuados, porque la columna va dirigida a lectores habituales de una revista culta y los conectores están repartidos, no amontonados. «No bien se publicó el informe» da ritmo a la narración, y «así las cosas» marca bien el paso al titular propuesto. En cambio, «so pena de que los lectores dejen de fiarse» resulta algo forzado en una frase ya larga; ahí bastaría «porque, si no, los lectores dejarán de fiarse». Además, la autora explica los conectores cuando los cita, lo que ayuda al lector.",
            checklist: [
              "Doy dos ejemplos del texto.",
              "Valoro la adecuación al público.",
              "Propongo una alternativa común concreta.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la columna distingue las paráfrasis fieles de las que distorsionan y cómo usa los conectores poco frecuentes.",
      items: [
        { quote: "los datos sugieren que la reapertura podría reducir la humedad en algunos muros de tapial", note: "Tres marcas de cautela y alcance: «sugieren», «podría» y «algunos»." },
        { quote: "Que no se observara una mejora en cuatro casas significa que no hay pruebas de que la haya", note: "Ausencia de prueba frente a prueba de lo contrario." },
        { quote: "toda vez que un año de trabajo de campo merece algo más que un «quizá»", note: "«Toda vez que» causal: dado que." },
        { quote: "Si el espacio no da para tanto, mejor quitar el adjetivo que quitar el «podría».", note: "El modalizador es lo último que se sacrifica." },
      ],
    },
  },
  practice: {
    intro: "Ordena, elige el registro, reformula con fidelidad y escribe piezas breves. Termina recuperando clases de las semanas anteriores de C2.",
    exercises: [
      {
        id: "c2-16-orden",
        type: "order",
        prompt: "Ordena las palabras para formar paráfrasis fieles o frases con el conector bien colocado.",
        items: [
          {
            words: ["Según", "la", "autora,", "es", "probable", "que", "la", "humedad", "proceda", "del", "subsuelo."],
            why: "Atribución + probabilidad con subjuntivo.",
          },
          {
            words: ["La", "obra,", "empero,", "quedó", "a", "medias."],
            why: "«Empero» intercalado entre comas.",
          },
          {
            words: ["No", "bien", "salió", "el", "sol,", "empezaron", "las", "mediciones."],
            why: "«No bien» + verbo: en cuanto.",
          },
        ],
      },
      {
        id: "c2-16-registro",
        type: "context",
        prompt: "Elige la versión adecuada para cada texto.",
        items: [
          {
            context: "Hoja informativa para los vecinos del Albaicín.",
            q: "¿Qué versión eliges?",
            options: [
              "Habida cuenta de lo antedicho, y máxime cuando la muestra es exigua, procede actuar con cautela.",
              "Como el estudio solo midió veintidós casas, conviene esperar antes de sacar conclusiones.",
              "Los aljibes funcionan, así que hay que abrirlos todos.",
            ],
            answer: 1,
            why: "Registro claro y compromiso fiel al estudio.",
          },
          {
            context: "Prólogo de un volumen académico, con un tono deliberadamente clásico.",
            q: "¿Qué versión encaja mejor?",
            options: [
              "El estudio es corto, pero bueno, la verdad es que está bien.",
              "El estudio está guay y se lee fácil.",
              "El estudio es breve; su rigor, empero, compensa con creces su extensión.",
            ],
            answer: 2,
            why: "El conector arcaico encaja en un prólogo de tono clásico.",
          },
          {
            context: "Nota de prensa del ayuntamiento sobre el informe.",
            q: "¿Qué frase respeta el compromiso del estudio?",
            options: [
              "El informe sugiere que la reapertura de aljibes podría reducir la humedad en algunos muros de tapial.",
              "El informe confirma que los aljibes acaban con la humedad.",
              "El informe plantea la mera hipótesis de una relación remota.",
            ],
            answer: 0,
            why: "Conserva verbo de atribución, posibilidad y alcance.",
          },
        ],
      },
      {
        id: "c2-16-parafrasis",
        type: "transform",
        prompt: "Reformula cada frase con la estructura que se pide, sin cambiar su compromiso.",
        items: [
          {
            source: "Puede que los aljibes reduzcan la humedad de algunos muros.",
            instruction: "Usa «podría» + infinitivo.",
            answers: ["Los aljibes podrían reducir la humedad de algunos muros."],
            why: "Mismo peldaño de posibilidad, otra estructura.",
          },
          {
            source: "Es probable que la humedad proceda del subsuelo.",
            instruction: "Usa el adverbio «probablemente».",
            answers: ["Probablemente la humedad procede del subsuelo.", "La humedad probablemente procede del subsuelo.", "Probablemente la humedad proceda del subsuelo."],
            why: "«Probablemente» admite indicativo y subjuntivo y conserva el peldaño.",
          },
          {
            source: "Los autores sugieren que quizá exista una relación entre los aljibes y la humedad.",
            instruction: "Nominaliza: empieza por «Los autores sugieren una…».",
            answers: ["Los autores sugieren una posible relación entre los aljibes y la humedad."],
            why: "Al nominalizar, la cautela pasa al adjetivo «posible».",
          },
        ],
      },
      {
        id: "c2-16-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Parafrasea en 50–70 palabras, para un público general, esta frase de un estudio: «Los resultados indican que, en la mayoría de los centros escolares analizados, la ventilación cruzada podría reducir la concentración de CO₂, aunque el efecto fue menor en las aulas orientadas al norte».",
            model: "Un estudio sobre colegios ha analizado si abrir ventanas en lados opuestos del aula mejora el aire. Según sus autores, en la mayoría de los centros estudiados esta ventilación podría reducir el CO₂. Reconocen, eso sí, que el efecto fue menor en las aulas orientadas al norte, así que no se puede aplicar igual a todas.",
            checklist: [
              "Conservo «la mayoría» y «podría».",
              "Mantengo la concesión sobre las aulas del norte.",
              "Atribuyo el resultado a los autores.",
            ],
          },
          {
            prompt: "Escribe en 40–60 palabras el principio de un prólogo de tono clásico para el mismo estudio usando con su valor exacto tres conectores de esta semana.",
            model: "No bien me pidieron estas líneas, acepté, toda vez que el tema me ocupa desde hace años. El trabajo es breve; su alcance, empero, es considerable, máxime cuando afecta a la salud de nuestros alumnos. Sirvan estas palabras de bienvenida a los lectores.",
            checklist: [
              "Uso tres conectores con su valor exacto.",
              "El registro es coherente con un prólogo.",
              "No amontono los conectores en una sola frase.",
            ],
          },
        ],
      },
      {
        id: "c2-16-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las semanas anteriores de C2 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G221 (modalización sutil). Estímulo: el vicerrector dice «No me atrevería a afirmar que el proyecto vaya a continuar». Un periodista lo resume así: «El vicerrector anuncia el fin del proyecto». Explica qué se ha perdido y escribe un resumen fiel.",
            model: "El vicerrector se muestra reservado: no afirma que el proyecto vaya a continuar, pero tampoco anuncia que termine. El resumen convierte una reserva en un anuncio categórico. Versión fiel: «El vicerrector no se atreve a asegurar que el proyecto continúe».",
            checklist: [
              "Identifico la reserva del original.",
              "Mi resumen conserva el mismo grado de compromiso.",
            ],
          },
          {
            prompt: "Recuperación de la clase G225 (cautela académica). Estímulo: «Estos resultados permiten pensar que la técnica es eficaz en suelos arcillosos». Explica qué marca de cautela contiene la frase y reescríbela con otra estructura del mismo peldaño.",
            model: "«Permiten pensar» presenta el resultado como un indicio razonable, no como una prueba, y lo limita a los suelos arcillosos. Otra versión del mismo peldaño: «Estos resultados apuntan a que la técnica es eficaz en suelos arcillosos».",
            checklist: [
              "Identifico la marca de cautela.",
              "Conservo el alcance «en suelos arcillosos».",
            ],
          },
          {
            prompt: "Recuperación de la clase G227 (atribución periodística). Estímulo: «Fuentes cercanas al ayuntamiento aseguran que se reabrirán dos aljibes más». Explica qué problema tiene la fuente y cómo debería presentarse el dato en una noticia rigurosa.",
            model: "La fuente es vaga: no se sabe quién habla ni con qué autoridad. En una noticia rigurosa conviene identificarla o, si no es posible, rebajar el compromiso con un condicional y explicar por qué se mantiene el anonimato: «El ayuntamiento reabriría dos aljibes más, según dos técnicos municipales que han pedido no ser identificados».",
            checklist: [
              "Señalo la vaguedad de la fuente.",
              "Propongo una atribución o un condicional de rumor.",
            ],
          },
          {
            prompt: "Recuperación de la clase G228 (reformulación entre registro técnico y cotidiano). Estímulo técnico: «Se detecta capilaridad ascendente en los paramentos de tapial». Reformúlalo para un vecino sin perder información.",
            model: "«El agua del suelo está subiendo por dentro de los muros de tierra, como sube por una servilleta cuando la mojas por una punta». La comparación explica la capilaridad, «muros de tierra» traduce «paramentos de tapial» y se conserva que el agua sube desde abajo.",
            checklist: [
              "Traduzco los términos técnicos.",
              "No pierdo ni añado información.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una reseña divulgativa (400–520 palabras) de un estudio real o inventado para una revista cultural. Resume su conclusión con el compromiso exacto de los autores, conserva sus límites y condiciones, atribuye cada afirmación con el verbo adecuado y usa con su valor exacto al menos cinco conectores poco frecuentes, sin acumularlos.",
    context: "Los lectores de la revista son cultos pero no especialistas. Han leído titulares exagerados sobre el estudio y confían en tu reseña para saber qué dice realmente. Puedes usar el informe de los aljibes del Albaicín o inventar otro estudio con la misma lógica.",
    steps: [
      "Copia la conclusión principal del estudio y subraya cada marca de cautela, cada cuantificador y cada condición.",
      "Decide el orden: qué se estudió, qué se concluyó, qué límites reconocen los autores, qué malentendidos han circulado y qué significa para el lector.",
      "Redacta sin copiar el modelo. Reparte los conectores poco frecuentes a lo largo del texto, como mucho uno por oración.",
      "Revisa la reseña con la lista de control: compara frase por frase con la fuente, corrige cualquier verbo de atribución que suba o baje el compromiso y comprueba «habida cuenta de que» y «toda vez que».",
    ],
    useLanguage: [
      "Según los autores, es posible que… / podría…",
      "El estudio sugiere que… / muestra que… / reconoce que…",
      "en la mayoría de los casos; solo en…; siempre que…",
      "no se observó que + subjuntivo",
      "habida cuenta de que…; toda vez que…; máxime cuando…",
      "empero; amén de; así las cosas; sea como fuere; dicho lo cual",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Pocas investigaciones locales han recibido tantos titulares en tan poco tiempo como el informe sobre los aljibes del Albaicín. No bien se publicó, la noticia de que «los aljibes secan las casas» recorrió las redes; el informe, empero, dice algo bastante más modesto y, a mi juicio, más interesante. Sus autores sostienen que la reapertura de los aljibes podría reducir la humedad en algunos muros de tapial, siempre en los meses secos, y reconocen desde la primera página que su muestra, de veintidós viviendas, es reducida.",
    ],
    checklist: [
      "Cada afirmación del estudio conserva su peldaño de certeza.",
      "Mantengo cuantificadores, condiciones y concesiones.",
      "Los verbos de atribución no suben ni bajan el compromiso.",
      "Uso al menos cinco conectores poco frecuentes con su valor exacto, sin amontonarlos.",
      "Distingo lo que dice el estudio de mi propia valoración.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Explicar el estudio en la asociación de vecinos",
        prompt: "Tienes cuatro minutos en la reunión de la asociación de vecinos del Albaicín para explicar qué dice el informe sobre los aljibes. Resume la conclusión con su compromiso exacto, explica la diferencia entre «no se observó» y «se observó que no» y di qué pueden y qué no pueden esperar los vecinos.",
        prep: [
          "Anota la conclusión con sus tres marcas de cautela.",
          "Prepara un ejemplo cotidiano para explicar la ausencia de prueba.",
          "Decide qué conector de registro alto usarías y cuál evitarías ante este público.",
        ],
        seconds: 240,
        model: "Buenas tardes. Vengo a explicar lo que dice el informe, y también lo que no dice, porque han salido titulares muy llamativos. El informe no demuestra que los aljibes sequen las casas. Lo que dice es que, en algunas casas con muros de tierra, la humedad podría bajar si se reabren los aljibes cercanos, y sobre todo en verano. Y los propios autores reconocen que solo midieron veintidós casas…",
        selfCheck: [
          "Conservo «podría», «algunas» y la condición de los meses secos.",
          "Explico con un ejemplo la ausencia de prueba.",
          "Adapto el registro: pocos conectores raros.",
        ],
      },
      {
        title: "Responder a un vecino que exagera",
        prompt: "Un vecino interviene: «Entonces está demostrado: si abren el aljibe de mi calle, se acaba la humedad de mi casa, ¿no?». Su casa es de ladrillo. Corrígelo con cortesía, explica por qué el estudio no permite decir eso y propón qué podría hacer.",
        prep: [
          "Identifica qué peldaño ha subido el vecino.",
          "Prepara una fórmula de cortesía para corregir sin humillar.",
        ],
        seconds: 150,
        model: "Entiendo que le gustaría que fuera así, y ojalá. Pero el estudio no llega tan lejos. Solo midió cuatro casas de ladrillo, y en esas no se vio mejora; eso no quiere decir que no funcione, sino que no hay datos. Lo que sí podría hacer es pedir que incluyan su casa en la próxima campaña de mediciones.",
        selfCheck: [
          "Corrijo el compromiso sin descalificar al vecino.",
          "Distingo ausencia de prueba y prueba contraria.",
          "Propongo una acción concreta.",
        ],
      },
      {
        title: "Del prólogo a la radio",
        prompt: "Lee en voz alta, con las pausas de los incisos, esta frase del prólogo: «El estudio, empero, no pretende dar recetas, toda vez que sus autores saben que cada casa es distinta». Después reformúlala oralmente para un programa de radio, con conectores comunes y el mismo sentido.",
        prep: [
          "Marca las pausas de «empero».",
          "Busca equivalentes comunes para los dos conectores.",
        ],
        seconds: 100,
        selfCheck: [
          "Leo «empero» como inciso, con tono más bajo.",
          "La reformulación conserva el valor causal de «toda vez que».",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu reseña y un titular real que te parezca exagerado. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Compara",
        task: "Lleva un titular real y el fragmento del estudio que resume. Pide a tu profesor que diga si sube, baja o conserva el compromiso antes de darle tu opinión.",
        phrases: ["El estudio dice…, pero el titular…", "¿Lo dejarías en el mismo peldaño?"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale qué conectores raros de esta semana usaría él o ella en un texto propio y cuáles le suenan afectados.",
        phrases: ["¿Tú escribirías «empero»?", "¿«Máxime cuando» te suena natural?"],
      },
      {
        move: "Parafrasea",
        task: "Pide a tu profesor una frase con dos o tres matices de cautela y parafraséala en voz alta con otra estructura; él o ella comprueba si has conservado todo.",
        phrases: ["Según…, es posible que…", "No se observó que…"],
      },
      {
        move: "Reformula",
        task: "Lee un párrafo de tu reseña y pídele que señale el conector que menos encaja con el público.",
        phrases: ["¿Aquí sobra?", "¿Qué pondrías en su lugar?"],
      },
    ],
    bring: "Tu reseña revisada, el titular real con su fuente y una lista de tres conectores raros que quieras usar con más seguridad.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "Original: «Es probable que el muro se seque en verano». ¿Qué paráfrasis es fiel?",
        options: [
          "Seguramente el muro se seca en verano.",
          "Está comprobado que el muro se seca en verano.",
          "No cabe descartar del todo que el muro se seque.",
        ],
        answer: 0,
        why: "«Seguramente» equivale a «muy probablemente»: mismo peldaño.",
      },
      {
        type: "choice",
        q: "¿Qué significa «toda vez que» en «Se suspendió la visita, toda vez que la escalera estaba rota»?",
        options: [
          "Cada vez que.",
          "Dado que.",
          "Aunque.",
        ],
        answer: 1,
        why: "Es un conector causal.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué afirma exactamente?",
        options: [
          "Que hay pruebas de que el tratamiento no funciona.",
          "Que el tratamiento funciona.",
          "Que no hay pruebas de que el tratamiento funcione.",
        ],
        answer: 2,
        why: "«No se observó que mejoraran» es ausencia de prueba.",
        audio: "En las casas tratadas con cal no se observó que los muros mejoraran.",
        voice: "es-ES-f",
      },
      {
        type: "gap",
        q: "___ cuenta de que el edificio está protegido, cualquier obra necesita permiso. [locución causal con «habida»]",
        answers: [["Habida"]],
        hint: "Locución que significa «teniendo en cuenta que» y lleva siempre «de».",
        why: "«Habida cuenta de que».",
      },
      {
        type: "gap",
        q: "El estudio ___ que se revisen primero los aljibes municipales. [verbo de atribución que, con subjuntivo, expresa recomendación]",
        answers: [["sugiere", "recomienda", "propone"]],
        hint: "Con subjuntivo, este verbo deja de indicar un resultado y pasa a recomendar.",
        why: "«Sugerir que + subjuntivo»: recomendación.",
      },
      {
        type: "transform",
        source: "Quizá la acequia esté relacionada con la humedad del sótano.",
        instruction: "Reformula la frase con «es posible que» sin cambiar el grado de certeza.",
        answers: ["Es posible que la acequia esté relacionada con la humedad del sótano."],
        why: "Mismo peldaño de posibilidad, con subjuntivo.",
      },
      {
        type: "error",
        sentence: "Original: «algunos vecinos notaron mejoras». Resumen: «Los vecinos notaron mejoras».",
        answers: ["Original: «algunos vecinos notaron mejoras». Resumen: «Algunos vecinos notaron mejoras»."],
        why: "El resumen borra el cuantificador y amplía el alcance.",
      },
      {
        type: "error",
        sentence: "La campaña acabará eventualmente en mayo, como estaba previsto.",
        answers: ["La campaña acabará finalmente en mayo, como estaba previsto.", "La campaña acabará en mayo, como estaba previsto."],
        why: "«Eventualmente» significa «posiblemente», no «finalmente».",
      },
      {
        type: "order",
        words: ["Los", "autores", "reconocen,", "empero,", "que", "la", "muestra", "es", "pequeña."],
        why: "Atribución con verbo de postura y conector intercalado.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de clase por qué «el estudio demuestra» y «el estudio plantea la hipótesis» pueden ser igual de infieles a un estudio que dice «los datos sugieren». Da un ejemplo de paráfrasis fiel.",
        model: "«Los datos sugieren» presenta un resultado prudente, basado en mediciones. «Demuestra» lo sube a prueba y engaña al lector, que cree que la cuestión está cerrada. «Plantea la hipótesis» lo baja a simple idea y es injusto con los autores, que sí tienen datos. Las dos versiones cambian el peldaño de la fuente, una hacia arriba y otra hacia abajo. Una paráfrasis fiel sería «Según el estudio, los datos indican, con cautela, que…» o «Los resultados apuntan a que…», siempre que se mantenga el alcance original.",
        checklist: [
          "Explico la subida y la bajada del compromiso.",
          "Relaciono cada verbo con su peldaño.",
          "Doy un ejemplo de paráfrasis fiel.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Parafraseo dentro del mismo peldaño de certeza, cambiando la estructura sin cambiar el compromiso.",
      "Elijo verbos de atribución por su fuerza y su postura, y distingo «sugerir» + indicativo de «sugerir» + subjuntivo.",
      "Conservo cuantificadores, condiciones, concesiones y el alcance de la negación.",
      "Uso con su valor exacto conectores poco frecuentes y evito sus falsos amigos y la pedantería.",
    ],
    review: [
      "Dentro de dos días, tapa la tercera columna de la tabla «Mismo peldaño, distinta estructura» y escribe un ejemplo nuevo para cada peldaño.",
      "Dentro de una semana, busca una noticia científica y compárala con el resumen del estudio original: ¿sube o baja el compromiso?",
      "En la próxima clase, lee tu reseña y pide a tu profesor que marque los conectores que suenan más naturales y los que sobran.",
    ],
  },
  related: [
    { path: "/gramatica/parafrasis-avanzada-preservando-compromiso-epistemico", label: "Clase: Paráfrasis avanzada preservando compromiso epistémico" },
    { path: "/gramatica/conectores-raros-y-valores-especificos", label: "Clase: Conectores raros y valores específicos" },
  ],
};
