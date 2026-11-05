import type { Module } from "../../types";

/**
 * C2 · semana 13 · Autoestudio espejo de G224 (marcadores conversacionales de
 * negociación fina) y G225 (discursos académicos: cautela metodológica).
 * Repaso autónomo con un equipo ficticio de investigación de Buenos Aires que
 * negocia en una videollamada el título y las conclusiones de un estudio sobre
 * ruido nocturno y sueño, y después lo redacta. Audio mediante síntesis; sin
 * acreditación regional.
 */
export const c2w13: Module = {
  id: "c2-13",
  level: "c2",
  week: 13,
  kind: "core",
  title: "Bueno, pero los datos no dan para tanto",
  subtitle: "Repaso de los marcadores con que se negocia en una reunión y de la cautela con que se escribe un texto académico",
  stop: {
    place: "Buenos Aires",
    country: "Argentina",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g224",
    "c2.gram.g225",
    "c2.voc.w13-estudio-ruido",
    "c2.pron.w13-tono-marcadores",
    "c2.lis.w13-reunion-titulo",
    "c2.read.w13-articulo-exploratorio",
    "c2.wri.w13-seccion-discusion",
    "c2.spk.w13-defender-turno",
    "c2.fun.w13-aceptar-con-condiciones",
    "c2.disc.w13-asociacion-causa",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo discrepar, aceptar con condiciones y defender mi turno en una reunión con marcadores conversacionales precisos, y redactar un texto académico que afirme exactamente lo que los datos permiten.",
    steps: [
      "Repasa en la teoría los marcadores de negociación, su variación regional y los recursos para tomar y defender el turno; después, la presencia del autor, la atenuación, los verbos de cita y los calcos del texto académico.",
      "Practica con fragmentos de una videollamada entre investigadores de Buenos Aires y Valencia y con frases del artículo que preparan.",
      "Escucha la reunión en la que negocian el título del estudio y lee la discusión y las limitaciones del artículo final.",
      "Redacta la sección de discusión de un estudio, revísala con la lista de control y ensaya en voz alta tu intervención en la reunión.",
    ],
  },
  theory: {
    intro: "En clase trabajaste con tu profesor dos registros que parecen opuestos: la conversación en la que se negocia y el texto académico en el que se mide cada afirmación. Aquí los repasas juntos, porque a menudo van seguidos: primero se discute en una reunión qué se puede decir y después se escribe. El material es una videollamada de un equipo que estudia el ruido nocturno en San Telmo, en Buenos Aires.",
    parts: [
      {
        heading: "Marcadores para aceptar, objetar y poner condiciones",
        body: [
          "En una reunión, las palabras pequeñas indican qué vas a hacer con lo que acaba de decir el otro. «Bueno» al principio acepta una parte y anuncia una objeción («bueno, pero el plazo es corto»); también sirve para cambiar de tema o para cerrar. «Ya» acusa recibo sin aceptar: «ya, pero…» reconoce el argumento y lo discute; «ya, ya», con tono marcado, puede sonar a escepticismo o a ironía. «Pues» al inicio de una respuesta anuncia una postura contraria o presenta algo como obvio: «pues yo no lo veo así».",
          "Para aceptar hay una escala. «Claro» y «por supuesto» aceptan sin reservas. «De acuerdo» es general en todo el mundo hispanohablante. «Vale» es muy frecuente en España; «dale» es habitual en el Río de la Plata y en otras zonas, en registro coloquial; «listo» es frecuente en Colombia y «sale», en México. En una reunión internacional, «de acuerdo» es la opción segura. «Eso sí» añade una condición a un acuerdo ya dado: «de acuerdo con el título; eso sí, sin la palabra causa».",
          "«Hombre» y «mujer», muy frecuentes en España, atenúan una objeción o un reproche («hombre, tampoco es eso»); su uso varía mucho en otras zonas. «Mira» y «oye» (con usted, «mire» y «oiga») piden atención antes de una postura personal; en el voseo rioplatense las formas son «mirá» y, para disculparse al tomar la palabra, «perdoná». «A ver» introduce una aclaración u ordena la discusión, y «no sé» antepuesto atenúa una propuesta.",
        ],
        table: {
          caption: "Qué anuncia cada marcador en una negociación",
          head: ["Marcador", "Qué anuncia", "Ejemplo"],
          rows: [
            ["bueno (inicial)", "acepto en parte, pero viene una objeción", "Bueno, pero trescientas encuestas no son una ciudad."],
            ["ya, pero", "recibo tu argumento y lo discuto", "Ya, pero el ruido se midió solo en otoño."],
            ["pues (inicial)", "postura contraria u obviedad", "Pues a mí el título me parece exagerado."],
            ["eso sí", "acepto, con una condición", "Lo mandamos el lunes; eso sí, con la sección de limitaciones."],
            ["a ver", "voy a aclarar u ordenar", "A ver, separemos lo que medimos de lo que preguntamos."],
            ["¿no?", "busco consenso", "Lo importante es que no se lea como causa, ¿no?"],
          ],
        },
        mistakes: [
          {
            wrong: "En una reunión con colegas de cinco países: «Dale, dale, lo hacemos así, ¿vale?».",
            right: "«De acuerdo, lo hacemos así, ¿les parece?».",
            why: "«Dale» y «vale» son regionales y coloquiales; en una reunión internacional, «de acuerdo» y una pregunta de consenso son comprensibles para todos.",
          },
        ],
      },
      {
        heading: "Reformular al otro y defender el turno",
        body: [
          "«O sea (que)» y «vamos (que)» reformulan lo que ha dicho otra persona. Pueden ser cooperativos, cuando comprueban si has entendido («o sea, que lo que te preocupa es el título»), o polémicos, cuando llevan sus palabras a una conclusión que no aceptaría («o sea, que según tú no hemos demostrado nada»). La diferencia está en si la reformulación es fiel o exagerada. «En fin» cierra una discusión que no lleva a ninguna parte, y «de todas formas» mantiene una idea pese a lo dicho.",
          "Para tomar la palabra sin brusquedad sirven «perdona que te interrumpa» (con subjuntivo), «si me permites…» o «una cosa, antes de seguir». Para defender tu turno, «déjame terminar» o «un segundo, que acabo». Para devolverlo, «sigue, sigue». Los marcadores se combinan, y la combinación matiza: «bueno, vale» acepta a regañadientes, «hombre, claro» acepta con énfasis, «ya, pero» objeta con cortesía.",
          "En una negociación formal, como una reunión con una institución, el repertorio cambia: «dicho esto», «ahora bien», «si se me permite» o «no deja de ser cierto que» cumplen las mismas funciones con más distancia.",
        ],
        examples: [
          { es: "O sea, que si cambiamos «causa» por «asociación», tú firmas el artículo.", note: "Reformulación cooperativa: comprueba un acuerdo." },
          { es: "Vamos, que para vos los vecinos mienten en las encuestas.", note: "Reformulación polémica, con voseo rioplatense: exagera lo que dijo el otro." },
          { es: "Perdona que te interrumpa, pero ese dato es del año pasado.", note: "«Perdona que» + subjuntivo para tomar el turno." },
          { es: "Ahora bien, si se me permite, la muestra no incluye a menores.", note: "Equivalente formal de «ya, pero»." },
        ],
        mistakes: [
          {
            wrong: "Perdona que te interrumpo, pero el plazo vence mañana.",
            right: "Perdona que te interrumpa, pero el plazo vence mañana.",
            why: "«Perdonar que» expresa una reacción ante un hecho y rige subjuntivo.",
          },
        ],
        tip: "Antes de usar «o sea» para resumir lo que dijo otro, pregúntate si esa persona aceptaría tu resumen. Si no, estás usando el marcador de forma polémica.",
      },
      {
        heading: "Presencia del autor y afirmación ajustada a los datos",
        body: [
          "El texto académico en español puede borrar al autor o mostrarlo. La pasiva refleja («se analizaron 312 encuestas») y la impersonal con «se» («se encuestó a vecinos de doce manzanas») lo ocultan; el plural de modestia («consideramos») y el sujeto inanimado («este artículo examina») lo presentan con discreción. La primera persona del singular se acepta cada vez más, pero las prácticas varían según la disciplina y la revista. Lo esencial es la coherencia: no pases de «se observó» a «yo observé» en el mismo párrafo sin motivo.",
          "La atenuación ajusta la afirmación a lo que los datos permiten. «Los datos sugieren que» va con indicativo, porque presenta una conclusión probable; «sugerir que» con subjuntivo significa ‘proponer’ («el evaluador sugiere que se amplíe la muestra»). Otras fórmulas son «parece indicar», «podría deberse a», «cabe pensar que» o «en la medida en que». Una doble atenuación puede ser deliberada («los resultados parecen sugerir una asociación»), pero una triple vacía la frase. Y sobre todo, una asociación no es una causa: «a mayor ruido, peor sueño declarado» no demuestra que el ruido cause el insomnio.",
          "La sección de limitaciones no debilita el artículo: lo hace creíble. Sus fórmulas habituales son «cabe señalar que la muestra…», «los resultados deben interpretarse con cautela», «no permiten generalizar a…» y «futuras investigaciones podrían…».",
        ],
        table: {
          caption: "Del dato a la frase académica",
          head: ["Lo que hay", "Frase excesiva", "Frase ajustada"],
          rows: [
            ["correlación moderada en una muestra local", "El ruido causa insomnio.", "Los datos sugieren una asociación entre ruido nocturno y peor calidad del sueño declarada."],
            ["diferencia entre dos barrios", "Se demuestra que San Telmo duerme peor.", "Los residentes de San Telmo declararon, en promedio, más despertares nocturnos."],
            ["una explicación posible", "La diferencia se debe a los bares.", "La diferencia podría deberse, al menos en parte, a la actividad nocturna de los bares."],
            ["sesgo de la muestra", "(se omite)", "Cabe señalar que la muestra no incluye a menores de dieciocho años."],
          ],
        },
        mistakes: [
          {
            wrong: "Los datos parecen sugerir que podría existir posiblemente una cierta asociación.",
            right: "Los datos parecen sugerir una asociación.",
            why: "Una doble atenuación puede ser deliberada; cuatro marcas de duda vacían la afirmación.",
          },
          {
            wrong: "Los datos sugieren que el ruido afecte al sueño.",
            right: "Los datos sugieren que el ruido afecta al sueño.",
            why: "Con el sentido de ‘indicar’, «sugerir que» va con indicativo; el subjuntivo lo convierte en ‘proponer’.",
          },
        ],
      },
      {
        heading: "Citar con postura y evitar calcos",
        body: [
          "El verbo con que citas a otro autor revela tu postura. «Afirma», «señala», «sostiene» o «plantea» informan sin comprometerte. «Admite» o «reconoce» presentan lo citado como una concesión. «Pone en duda», «cuestiona» o «niega que» (este último con subjuntivo) marcan desacuerdo del autor citado. En cambio, «muestra» y «demuestra» indican que tú aceptas lo que el autor dice como probado. «Según X» no te compromete; «como han mostrado X e Y» sí.",
          "En cuanto al tiempo, el presente es habitual para posturas («García sostiene»), el pretérito para un hallazgo concreto («en 2019, Ríos encontró una diferencia») y el perfecto para una línea de investigación («varios estudios han señalado»), aunque las prácticas varían.",
          "Algunos calcos frecuentes tienen alternativas más precisas: «en base a» puede sustituirse por «sobre la base de» o «con base en»; «jugar un rol», por «desempeñar un papel» o «cumplir una función»; «asumir» con el sentido de ‘suponer’ conviene evitarlo. «Evidencia» con el sentido de ‘prueba’ está muy extendido por influencia del inglés, pero «pruebas», «indicios» o «datos» suelen ser más exactos.",
        ],
        examples: [
          { es: "Méndez (2021) sostiene que el ruido de ocio es más molesto que el del tráfico.", note: "Verbo neutro: informas sin adherirte." },
          { es: "Como ha mostrado Ferreyra (2020), las mediciones de un solo mes subestiman la variación estacional.", note: "Te comprometes con lo citado." },
          { es: "Otros autores ponen en duda que la percepción del ruido dependa solo del volumen.", note: "«Poner en duda que» + subjuntivo." },
          { es: "Sobre la base de 312 encuestas, se estimó el número medio de despertares.", note: "En lugar de «en base a»." },
        ],
        mistakes: [
          {
            wrong: "Asumimos que los vecinos con ventanas dobles duermen mejor, aunque no se midió.",
            right: "Suponemos que los vecinos con ventanas dobles duermen mejor, aunque no se midió.",
            why: "«Asumir» con el sentido de ‘suponer’ es un calco; en español significa sobre todo ‘aceptar’ o ‘hacerse cargo’.",
          },
          {
            wrong: "Como demuestra López, el ruido no influye, aunque nosotros creemos que sí.",
            right: "Según López, el ruido no influye, aunque nuestros datos apuntan en otra dirección.",
            why: "«Demuestra» compromete al autor del artículo con lo citado; no puede ir seguido de un desacuerdo.",
          },
        ],
        tip: "Subraya en tu borrador cada verbo de cita y pregúntate: ¿estoy de acuerdo con esto o solo lo informo? El verbo tiene que decir lo mismo que tú.",
      },
    ],
  },
  grammar: {
    intro: "En la primera mitad decides qué hace cada marcador en la reunión; en la segunda, cuánto puede afirmar el texto.",
    exercises: [
      {
        id: "c2-13-gramatica-marcadores",
        type: "context",
        prompt: "Lee la situación y elige la intervención que cumple la función indicada.",
        items: [
          {
            context: "Nuria propone enviar el artículo el lunes. Florencia está de acuerdo, pero solo si se añade antes la sección de limitaciones.",
            q: "¿Qué dice Florencia?",
            options: [
              "Pues no, el lunes no.",
              "De acuerdo con el lunes; eso sí, con las limitaciones ya escritas.",
              "O sea, que no te importan las limitaciones.",
            ],
            answer: 1,
            why: "«Eso sí» añade una condición a un acuerdo.",
          },
          {
            context: "Tomás está explicando el análisis estadístico y Nuria lo interrumpe por tercera vez.",
            q: "¿Cómo defiende Tomás su turno sin romper la reunión?",
            options: [
              "Un segundo, Nuria, que acabo y enseguida te escucho.",
              "Sigue, sigue.",
              "Vamos, que no te interesa lo que digo.",
            ],
            answer: 0,
            why: "Pide terminar y ofrece el turno después. «Sigue, sigue» lo cedería; «vamos, que» es polémico.",
          },
          {
            context: "Nuria ha dicho que el título debe ser llamativo. Florencia quiere comprobar si ha entendido bien su postura antes de responder.",
            q: "¿Qué reformulación es cooperativa?",
            options: [
              "Vamos, que te da igual lo que digan los datos.",
              "Pues el título ya está decidido.",
              "O sea, que lo que buscas es que el título llegue a la prensa, ¿no?",
            ],
            answer: 2,
            why: "Reformula con fidelidad y pide confirmación con «¿no?». La primera exagera la postura de Nuria.",
          },
          {
            context: "Tomás reconoce el argumento de Nuria sobre la prensa, pero quiere oponerse.",
            q: "¿Qué combinación de marcadores usa?",
            options: [
              "Hombre, claro, tienes toda la razón.",
              "Ya, pero si la prensa lee «causa», nos van a citar mal.",
              "En fin, como quieras.",
            ],
            answer: 1,
            why: "«Ya, pero» acusa recibo y objeta.",
          },
        ],
      },
      {
        id: "c2-13-gramatica-cautela",
        type: "gap",
        prompt: "Completa el fragmento académico con la forma adecuada del verbo entre corchetes.",
        items: [
          { q: "Los datos sugieren que la calidad del sueño ___ peor en las manzanas con más bares. [ser]", answers: [["es"]], why: "«Sugerir que» = indicar: indicativo." },
          { q: "Uno de los evaluadores sugiere que se ___ la medición a los meses de verano. [ampliar]", answers: [["amplíe"]], why: "«Sugerir que» = proponer: subjuntivo." },
          { q: "Otros autores niegan que el volumen ___ el único factor de molestia. [ser]", answers: [["sea"]], why: "«Negar que» + subjuntivo." },
          { q: "En este trabajo se ___ 312 encuestas a residentes mayores de edad. [analizar, pasado]", answers: [["analizaron"]], why: "Pasiva refleja: el verbo concuerda con «312 encuestas»." },
          { q: "La diferencia ___ deberse, al menos en parte, al horario de cierre de los locales. [poder, atenuado]", answers: [["podría"]], why: "Condicional de atenuación." },
          { q: "Cabe ___ que la muestra no incluye a trabajadores nocturnos. [señalar]", answers: [["señalar"]], why: "Fórmula típica de la sección de limitaciones." },
        ],
      },
      {
        id: "c2-13-gramatica-citas",
        type: "classify",
        prompt: "Clasifica cada cita según la postura de quien escribe ante lo citado.",
        categories: ["Informa sin comprometerse", "Acepta lo citado como probado", "Presenta un desacuerdo del autor citado"],
        items: [
          { text: "Gómez (2018) sostiene que el ruido de las motos es el más molesto.", cat: 0, why: "«Sostiene» informa una postura." },
          { text: "Como han mostrado varios estudios, el sueño declarado y el medido no siempre coinciden.", cat: 1, why: "«Como han mostrado» compromete al autor." },
          { text: "Paz (2019) cuestiona que las encuestas en línea sean representativas.", cat: 2, why: "«Cuestiona que» + subjuntivo marca el desacuerdo de Paz." },
          { text: "Según Ríos (2020), los vecinos se acostumbran al ruido con los años.", cat: 0, why: "«Según» no compromete." },
          { text: "Blanco (2017) demuestra que las ventanas dobles reducen el ruido percibido.", cat: 1, why: "«Demuestra» presenta el resultado como probado." },
          { text: "Varios autores ponen en duda que el ruido diurno afecte al descanso nocturno.", cat: 2, why: "«Poner en duda que» + subjuntivo." },
        ],
      },
      {
        id: "c2-13-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de marcador, de modo o de registro académico. Corrígelo.",
        items: [
          {
            sentence: "En base a las encuestas, se calculó la media de despertares por noche.",
            answers: ["Sobre la base de las encuestas, se calculó la media de despertares por noche.", "Con base en las encuestas, se calculó la media de despertares por noche."],
            why: "«En base a» tiene alternativas más precisas: «sobre la base de», «con base en».",
          },
          {
            sentence: "El ruido nocturno juega un rol importante en la calidad del sueño.",
            answers: ["El ruido nocturno desempeña un papel importante en la calidad del sueño.", "El ruido nocturno cumple una función importante en la calidad del sueño."],
            why: "«Jugar un rol» es un calco; «desempeñar un papel» es la forma recomendada.",
          },
          {
            sentence: "Los resultados demuestran que el ruido causa el insomnio de los vecinos.",
            answers: ["Los resultados sugieren una asociación entre el ruido y el insomnio de los vecinos.", "Los resultados sugieren que el ruido está asociado al insomnio de los vecinos."],
            why: "Una correlación en una muestra local no demuestra una causa.",
          },
          {
            sentence: "Perdona que te corto, pero ese gráfico tiene los ejes al revés.",
            answers: ["Perdona que te corte, pero ese gráfico tiene los ejes al revés."],
            why: "«Perdonar que» rige subjuntivo.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de un estudio sobre ruido y sueño y de las reuniones en las que se decide cómo presentarlo.",
    groups: [
      {
        title: "El estudio",
        items: [
          { es: "la muestra", note: "conjunto de personas o casos que se estudian para sacar conclusiones" },
          { es: "el sesgo", note: "desviación sistemática que hace que los resultados no representen bien la realidad" },
          { es: "la correlación", note: "relación estadística entre dos variables, que no implica causa" },
          { es: "el sueño declarado", note: "calidad del sueño según lo que responde la persona, no según una medición" },
          { es: "el decibelio", note: "unidad para medir la intensidad del sonido; en América también «decibel»" },
          { es: "el estudio exploratorio", note: "investigación inicial que busca pistas, no confirmar hipótesis" },
          { es: "generalizar los resultados", note: "aplicarlos a una población mayor que la estudiada" },
        ],
      },
      {
        title: "La reunión",
        items: [
          { es: "llegar a un acuerdo", note: "aceptar todas las partes una misma decisión" },
          { es: "ceder en algo", note: "renunciar a una parte de lo que se pedía" },
          { es: "tomar la palabra", note: "empezar a hablar en una reunión" },
          { es: "irse por las ramas", note: "hablar de cosas secundarias y apartarse del tema" },
          { es: "poner sobre la mesa", note: "presentar un asunto para discutirlo" },
          { es: "a regañadientes", note: "aceptando algo sin ganas" },
          { es: "el titular", note: "título de una noticia; aquí, frase que la prensa podría sacar del artículo" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-13-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "el sesgo", right: "desviación sistemática que hace que los resultados no representen bien la realidad" },
          { left: "la correlación", right: "relación estadística entre dos variables, que no implica causa" },
          { left: "el estudio exploratorio", right: "investigación inicial que busca pistas" },
          { left: "ceder en algo", right: "renunciar a una parte de lo que se pedía" },
          { left: "irse por las ramas", right: "apartarse del tema con cosas secundarias" },
          { left: "a regañadientes", right: "aceptando algo sin ganas" },
        ],
      },
      {
        id: "c2-13-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["generalizar los resultados", "sueño declarado", "poner sobre la mesa", "muestra"],
        items: [
          { q: "La ___ incluye a 312 residentes mayores de edad de doce manzanas.", answers: [["muestra"]] },
          { q: "No medimos el sueño con aparatos: trabajamos con el ___ en las encuestas.", answers: [["sueño declarado"]] },
          { q: "Con datos de un solo barrio no podemos ___ a toda la ciudad.", answers: [["generalizar los resultados"]] },
          { q: "Antes de votar el título, quiero ___ el problema de la prensa.", answers: [["poner sobre la mesa"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La entonación de los marcadores: el mismo «bueno» puede ceder, objetar o cerrar",
    explanation: [
      "Muchos marcadores cambian de función según la entonación y lo que viene detrás. «Bueno» con tono suspendido y una pausa breve anuncia una objeción; con un descenso claro y seguido de silencio, cierra un tema. «Ya» breve y descendente acusa recibo; «ya, ya», repetido y alargado, suena escéptico. La etiqueta «¿no?» al final sube, porque busca acuerdo.",
      "En la lectura en voz alta de un texto académico ocurre lo contrario: el ritmo es regular, las pausas coinciden con las comas y los atenuadores («podría», «parece») no se acentúan más que el resto. Si los enfatizas, la frase suena insegura en lugar de prudente.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional y apenas reproduce estos matices de entonación. Usa las frases para identificar la función por el contexto y ensaya la entonación con una persona.",
    ],
    table: {
      caption: "Mismo marcador, distinta función",
      head: ["Frase", "Función", "Entonación habitual"],
      rows: [
        ["Bueno, pero el plazo es corto.", "acepta en parte y objeta", "suspendida antes de «pero»"],
        ["Bueno, lo dejamos aquí.", "cierra", "descendente"],
        ["Ya. Tiene sentido.", "acusa recibo", "breve y descendente"],
        ["Ya, ya…", "escepticismo", "alargada"],
        ["Lo mandamos el lunes, ¿no?", "busca consenso", "ascendente al final"],
      ],
    },
    perceive: {
      id: "c2-13-percepcion",
      type: "listen",
      prompt: "Escucha cada intervención antes de leer las opciones y decide qué hace el marcador inicial.",
      items: [
        {
          q: "¿Qué hace «bueno» en esta intervención?",
          options: ["Cierra la reunión.", "Acepta en parte y anuncia una objeción."],
          answer: 1,
          why: "Detrás viene «pero»: aceptación parcial y objeción.",
          audio: "Bueno, pero con trescientas encuestas no podemos hablar de toda la ciudad.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué hace «bueno» en esta intervención?",
          options: ["Cierra la reunión.", "Acepta en parte y anuncia una objeción."],
          answer: 0,
          why: "Detrás viene una despedida: cierre.",
          audio: "Bueno, lo dejamos acá y nos vemos el jueves.",
          voice: "es-AR-m",
        },
        {
          q: "¿Qué hace «eso sí» en esta intervención?",
          options: ["Rechaza la propuesta.", "Cambia de tema.", "Pone una condición a un acuerdo."],
          answer: 2,
          why: "Primero acepta («de acuerdo») y después condiciona.",
          audio: "De acuerdo con el título; eso sí, sin la palabra causa.",
          voice: "es-ES-f",
        },
        {
          q: "¿Qué hace «pues» en esta intervención?",
          options: ["Anuncia una postura contraria.", "Pide perdón por interrumpir."],
          answer: 0,
          why: "«Pues» al inicio de una respuesta anuncia desacuerdo.",
          audio: "Pues yo creo que el título tiene que llamar la atención.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "Bueno, pero el ruido se midió solo en otoño.", tip: "Suspende la voz en «bueno» y haz una pausa breve antes de «pero».", voice: "es-AR-f" },
      { text: "Perdona que te interrumpa: ese dato es del año pasado.", tip: "Tono amable y rápido en la fórmula; más lento en el dato.", voice: "es-ES-f" },
      { text: "Los resultados parecen sugerir una asociación entre ruido y sueño declarado.", tip: "Ritmo regular: no enfatices «parecen».", voice: "es-AR-m" },
      { text: "Lo importante es que nadie lo lea como causa, ¿no?", tip: "Sube el tono en el «¿no?» final.", voice: "es-AR-f" },
    ],
    spelling: "En la escritura, los marcadores conversacionales van entre comas cuando abren la intervención («Bueno, pero…») o cuando son incisos («…, eso sí, con limitaciones»). En el texto académico no se usan: se sustituyen por «ahora bien», «no obstante» o «dicho esto».",
  },
  listening: {
    title: "Videollamada: el título del estudio",
    context: "Florencia y Tomás, investigadores de un instituto ficticio de estudios urbanos de Buenos Aires, se conectan con Nuria, coautora desde Valencia, para decidir el título y la conclusión principal de su estudio sobre ruido nocturno y sueño en San Telmo. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "f", name: "Florencia", voice: "es-AR-f", role: "Directora del estudio, en Buenos Aires" },
      { id: "t", name: "Tomás", voice: "es-AR-m", role: "Estadístico del equipo, en Buenos Aires" },
      { id: "n", name: "Nuria", voice: "es-ES-f", role: "Coautora, desde Valencia" },
    ],
    script: [
      { speaker: "n", text: "Vale, os cuento mi propuesta para el título: «El ruido nocturno causa insomnio en San Telmo». Es claro, es directo y la prensa lo va a recoger seguro." },
      { speaker: "t", text: "Ya, pero ese es justamente el problema. Lo que tenemos es una correlación moderada entre los decibelios medidos en la calle y el sueño declarado en las encuestas. No medimos el sueño de nadie. Con eso no podemos decir causa." },
      { speaker: "n", text: "Hombre, tampoco es eso. La correlación está ahí, y todo el barrio sabe que con los bares abiertos hasta las cuatro no duerme nadie." },
      { speaker: "f", text: "A ver, separemos dos cosas. Una es lo que creemos, y seguramente tengas razón. Otra es lo que los datos permiten afirmar. O sea, que lo que te preocupa, Nuria, es que el título sea tan prudente que nadie lo lea, ¿no?" },
      { speaker: "n", text: "Exacto. Si ponemos «posible asociación entre ciertos niveles de ruido y algunos indicadores de la calidad del sueño», no lo lee ni mi madre." },
      { speaker: "t", text: "Bueno, ahí te doy la razón. Tres atenuaciones en un título es demasiado. Pero perdoná que insista: si un diario titula que el ruido causa insomnio y cita nuestro artículo, nos van a llover críticas de los evaluadores, y con razón." },
      { speaker: "f", text: "Propongo algo intermedio: «Ruido nocturno y sueño en San Telmo: una asociación que merece atención». Es claro, no habla de causa y deja ver que el problema importa." },
      { speaker: "n", text: "Pues no me disgusta. Bueno, vale, lo acepto. Eso sí, en la discusión quiero que quede claro que la asociación no es pequeña." },
      { speaker: "t", text: "Dale, de acuerdo. Podemos escribir que los datos sugieren una asociación de intensidad moderada y que podría deberse, al menos en parte, a la actividad nocturna. Y en las limitaciones, que no medimos el sueño directamente y que la muestra no incluye a trabajadores nocturnos." },
      { speaker: "f", text: "Perfecto. Entonces yo redacto la conclusión esta tarde y Tomás revisa las cifras de la tabla dos, que todavía tienen el formato viejo, y…" },
      { speaker: "n", text: "Un segundo, perdona que te interrumpa, déjame añadir una cosa antes de cerrar. Yo citaría a Ferreyra con «como ha mostrado», porque su estudio en Rosario es sólido, tiene mediciones de un año entero y nadie lo ha discutido." },
      { speaker: "f", text: "Sí, ahí estamos de acuerdo los tres. En cambio, el trabajo de López, que niega que el ruido de ocio importe, lo citamos con «según», sin adherirnos. En fin, creo que tenemos título. Lo mando por correo para que conste y lo cerramos el jueves." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin abrir la transcripción. ¿Qué se discute y cómo termina?",
        exercise: {
          id: "c2-13-escucha-gist",
          type: "choice",
          prompt: "Reconstruye el tema y el resultado de la negociación.",
          items: [
            {
              q: "¿Qué se discute en la reunión?",
              options: [
                "Si el estudio debe publicarse o no.",
                "Cuánto puede afirmar el título del estudio.",
                "Quién debe firmar primero el artículo.",
              ],
              answer: 1,
              why: "Nuria propone un título causal y Tomás objeta.",
            },
            {
              q: "¿Cómo termina la negociación?",
              options: [
                "Con un título intermedio y una condición de Nuria para la discusión.",
                "Con el título original de Nuria.",
                "Sin acuerdo; lo votarán el jueves.",
              ],
              answer: 0,
              why: "Nuria acepta la propuesta de Florencia con un «eso sí».",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y fíjate en los argumentos y en los marcadores. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-13-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de la reunión.",
          items: [
            {
              q: "¿Por qué Tomás rechaza la palabra «causa»?",
              options: [
                "Porque la muestra es demasiado grande.",
                "Porque los evaluadores la prohíben.",
                "Porque solo tienen una correlación y no midieron el sueño directamente.",
              ],
              answer: 2,
              why: "Compara decibelios medidos con sueño declarado.",
            },
            {
              q: "¿En qué le da la razón Tomás a Nuria?",
              options: [
                "En que un título con tres atenuaciones es excesivo.",
                "En que el ruido causa insomnio.",
                "En que López tiene razón.",
              ],
              answer: 0,
              why: "«Bueno, ahí te doy la razón»: acepta esa parte.",
            },
            {
              q: "¿Cómo deciden citar a López?",
              options: [
                "Con «como ha mostrado», porque es sólido.",
                "Con «según», sin adherirse.",
                "No lo van a citar.",
              ],
              answer: 1,
              why: "Florencia distingue entre adherirse a Ferreyra e informar sobre López.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en lo que hace cada marcador de la reunión. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-13-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con su función en la negociación.",
          pairs: [
            { left: "Ya, pero ese es justamente el problema", right: "acusa recibo y objeta" },
            { left: "Hombre, tampoco es eso", right: "atenúa una objeción" },
            { left: "O sea, que lo que te preocupa, Nuria", right: "reformula al otro de forma cooperativa" },
            { left: "Eso sí, en la discusión quiero que quede claro", right: "pone una condición a un acuerdo" },
            { left: "Un segundo, perdona que te interrumpa", right: "toma el turno con una disculpa" },
          ],
          why: "Los marcadores organizan la negociación: aceptar, objetar, reformular, condicionar y tomar la palabra.",
        },
      },
    ],
  },
  reading: {
    title: "Ruido nocturno y sueño en San Telmo: una asociación que merece atención",
    genre: "Fragmento de artículo académico: resumen, discusión y limitaciones",
    frame: "Fragmentos del artículo que el equipo envió a una revista de estudios urbanos. Autores, institución, datos y referencias son ficticios.",
    text: [
      "Resumen. Este artículo examina la relación entre el ruido nocturno en la vía pública y la calidad del sueño declarada por los residentes del barrio de San Telmo, en la ciudad de Buenos Aires. Entre marzo y mayo de 2025 se midieron los niveles sonoros nocturnos en dieciocho puntos de doce manzanas y se encuestó a 312 residentes mayores de edad. Los resultados sugieren una asociación de intensidad moderada entre los niveles medidos entre la medianoche y las cuatro de la mañana y el número de despertares declarados. Se discuten las posibles explicaciones de esa asociación y las limitaciones de un diseño exploratorio.",
      "Discusión. Los datos obtenidos parecen indicar que los residentes de las manzanas con mayor actividad nocturna duermen peor que los de las manzanas más tranquilas, al menos según su propia valoración. En las manzanas en las que el nivel nocturno superó con frecuencia los sesenta decibelios, los encuestados declararon, en promedio, casi el doble de despertares que en las manzanas situadas por debajo de ese umbral. Esta diferencia es coherente con lo que han mostrado estudios anteriores en ciudades de la región: como ha mostrado Ferreyra (2020) en el centro de Rosario, el ruido asociado al ocio nocturno resulta más molesto que el del tráfico a igual intensidad, probablemente por su carácter irregular.",
      "Conviene, sin embargo, no confundir asociación con causa. La relación observada podría deberse, al menos en parte, a otros factores que coinciden en las manzanas más ruidosas, como la antigüedad de los edificios, la ausencia de ventanas dobles o la mayor proporción de residentes jóvenes, que suelen acostarse más tarde. En la medida en que estos factores no se controlaron en el análisis, cabe pensar que una parte de la diferencia se explique por ellos. Del mismo modo, López (2019) niega que el ruido de ocio tenga efectos significativos sobre el descanso cuando se tiene en cuenta la edad de los residentes; aunque nuestros datos apuntan en otra dirección, su objeción no puede descartarse con el diseño actual.",
      "Un segundo resultado merece atención. Los residentes que llevaban más de diez años en el barrio declararon menos despertares que los recién llegados, aun viviendo en las mismas manzanas. Este dato podría interpretarse como una forma de habituación, tal como plantea Ríos (2021), pero también como un efecto de selección: es posible que quienes no toleran el ruido se hayan mudado y que, por tanto, entre los residentes antiguos solo queden los menos sensibles. Con los datos disponibles no es posible distinguir entre ambas explicaciones, y ninguna de ellas debería presentarse como la causa del patrón observado.",
      "En conjunto, los resultados apoyan la hipótesis de que el ruido nocturno desempeña un papel en la calidad del sueño declarada en San Telmo, sin que ello permita establecer una relación causal ni cuantificar su peso frente a otros factores. Consideramos, no obstante, que la asociación es lo bastante consistente como para justificar estudios con mediciones directas del sueño y para que las autoridades la tengan en cuenta al regular los horarios de cierre.",
      "Limitaciones. Cabe señalar, en primer lugar, que el estudio trabaja con sueño declarado y no con mediciones objetivas, por lo que los resultados reflejan la percepción de los residentes. En segundo lugar, la muestra no incluye a menores de edad ni a trabajadores nocturnos, dos grupos especialmente expuestos, y no permite generalizar los resultados al conjunto de la ciudad. En tercer lugar, las mediciones sonoras se realizaron solo en otoño; dado que la actividad nocturna aumenta en verano, es probable que los niveles registrados subestimen la exposición anual. Por todo ello, los resultados deben interpretarse con cautela. Futuras investigaciones podrían combinar mediciones domiciliarias del sueño con registros sonoros en el interior de las viviendas y extender el período de observación a un año completo.",
    ],
    glossary: [
      { es: "umbral", note: "valor a partir del cual algo empieza a producirse o a considerarse" },
      { es: "habituación", note: "proceso por el que una persona deja de reaccionar a un estímulo repetido" },
      { es: "efecto de selección", note: "sesgo que aparece cuando el grupo estudiado se ha formado de manera no aleatoria" },
    ],
    tasks: [
      {
        id: "c2-13-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido qué afirma el artículo y qué no.",
        items: [
          {
            q: "¿Qué afirman los autores sobre la relación entre ruido y sueño?",
            options: [
              "Que el ruido es la causa principal del insomnio en San Telmo.",
              "Que existe una asociación moderada, sin que pueda establecerse una causa.",
              "Que no existe ninguna relación cuando se controla la edad.",
            ],
            answer: 1,
            why: "Lo dicen en el resumen y lo reiteran en el quinto párrafo.",
          },
          {
            q: "¿Por qué los residentes antiguos podrían dormir mejor, según el artículo?",
            options: [
              "Porque viven en edificios nuevos.",
              "Porque el ruido ha disminuido en los últimos diez años.",
              "Por habituación o porque los más sensibles se habrían mudado.",
            ],
            answer: 2,
            why: "El cuarto párrafo plantea dos explicaciones sin elegir entre ellas.",
          },
          {
            q: "¿Qué limitación podría hacer que los niveles de ruido estén subestimados?",
            options: [
              "Que las mediciones se hicieron solo en otoño.",
              "Que la muestra es demasiado grande.",
              "Que se citó a López.",
            ],
            answer: 0,
            why: "La actividad nocturna aumenta en verano.",
          },
        ],
      },
      {
        id: "c2-13-lectura-cautela",
        type: "match",
        prompt: "Relaciona cada fragmento del artículo con el recurso de cautela o de cita que usa.",
        pairs: [
          { left: "Los datos obtenidos parecen indicar que", right: "atenuación de una conclusión" },
          { left: "como ha mostrado Ferreyra (2020)", right: "cita con la que los autores se comprometen" },
          { left: "López (2019) niega que el ruido de ocio tenga", right: "cita del desacuerdo de otro autor, con subjuntivo" },
          { left: "Cabe señalar, en primer lugar, que el estudio", right: "fórmula de la sección de limitaciones" },
          { left: "se encuestó a 312 residentes", right: "impersonal con «se» que oculta al autor" },
        ],
      },
      {
        id: "c2-13-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión del artículo con argumentos propios.",
        items: [
          {
            prompt: "En el quinto párrafo los autores recomiendan que las autoridades tengan en cuenta la asociación al regular los horarios de cierre. Explica en 70–90 palabras si esa recomendación es coherente con la cautela del resto del texto.",
            model: "La recomendación es coherente si se entiende como prudente: no pide cerrar los bares antes, sino tener en cuenta una asociación consistente. Los autores han dicho que no pueden demostrar una causa, y por eso no proponen una medida concreta. Aun así, un lector podría pensar que el paso de los datos a la política es rápido. Yo añadiría que la recomendación depende de los estudios futuros que el propio artículo propone.",
            checklist: [
              "Tomo posición sobre la coherencia de la recomendación.",
              "Relaciono la recomendación con la ausencia de causa demostrada.",
              "Propongo una mejora o un matiz.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el artículo afirma, atenúa y cita, y cómo cada decisión responde a lo que se negoció en la reunión.",
      items: [
        { quote: "Los resultados sugieren una asociación de intensidad moderada", note: "La condición de Nuria («que no es pequeña») sin la palabra causa." },
        { quote: "Conviene, sin embargo, no confundir asociación con causa.", note: "Frase explícita que evita la lectura que temía Tomás." },
        { quote: "aunque nuestros datos apuntan en otra dirección, su objeción no puede descartarse con el diseño actual", note: "Se informa del desacuerdo sin adherirse y sin despreciarlo." },
        { quote: "Por todo ello, los resultados deben interpretarse con cautela.", note: "Cierre clásico de la sección de limitaciones." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la situación, reformulación y escritura breve. Termina recuperando clases anteriores que preparan esta semana.",
    exercises: [
      {
        id: "c2-13-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de la reunión o del artículo.",
        items: [
          {
            words: ["Bueno,", "pero", "la", "muestra", "no", "incluye", "a", "menores."],
            why: "«Bueno» de aceptación parcial + objeción.",
          },
          {
            words: ["Los", "datos", "parecen", "indicar", "una", "asociación", "moderada."],
            why: "Atenuación simple de una conclusión.",
          },
          {
            words: ["Cabe", "señalar", "que", "no", "se", "midió", "el", "sueño."],
            why: "Fórmula de limitaciones + impersonal.",
          },
        ],
      },
      {
        id: "c2-13-situacion",
        type: "context",
        prompt: "Elige la intervención más adecuada para la situación.",
        items: [
          {
            context: "En una reunión con la Secretaría de Ambiente de la ciudad, un funcionario propone citar el estudio como prueba de que hay que cerrar los bares a la una. Florencia quiere frenar esa lectura sin enfrentarse.",
            q: "¿Qué dice Florencia?",
            options: [
              "Hombre, no, eso es una barbaridad.",
              "Dicho esto, si se me permite, el estudio muestra una asociación, no una causa, y no evalúa horarios concretos.",
              "Vale, vale, lo que usted diga.",
            ],
            answer: 1,
            why: "Registro formal: «dicho esto», «si se me permite» y una precisión sobre lo que el estudio permite afirmar.",
          },
          {
            context: "En una reunión informal del equipo, Tomás repite por cuarta vez un detalle técnico que ya está claro para todos.",
            q: "¿Cómo reconduce Florencia la discusión?",
            options: [
              "Pues sigue, Tomás, sigue.",
              "Vamos, que no sabes hablar de otra cosa.",
              "Bueno, eso ya lo tenemos, ¿no? Pasemos a las limitaciones.",
            ],
            answer: 2,
            why: "«Bueno» para cambiar de tema y «¿no?» de consenso, sin reproche.",
          },
          {
            context: "Un evaluador escribe que el título es demasiado tímido. Los autores aceptan cambiarlo, pero no quieren usar la palabra «causa».",
            q: "¿Qué frase de la respuesta al evaluador es adecuada?",
            options: [
              "Agradecemos la observación y hemos reformulado el título; no obstante, se ha evitado el término «causa», que los datos no permiten sostener.",
              "Vale, cambiamos el título, eso sí, sin causa.",
              "Asumimos que el evaluador no ha leído las limitaciones.",
            ],
            answer: 0,
            why: "Registro académico: agradecimiento, cambio y reserva con «no obstante».",
          },
        ],
      },
      {
        id: "c2-13-reformular",
        type: "transform",
        prompt: "Reformula cada frase según la instrucción, sin cambiar la información.",
        items: [
          {
            source: "Nosotros encuestamos a 312 vecinos.",
            instruction: "Pásala a registro académico con una construcción impersonal con «se».",
            answers: ["Se encuestó a 312 vecinos.", "Se encuestó a 312 residentes."],
            why: "Impersonal con «se» + complemento con «a»: el verbo va en singular.",
          },
          {
            source: "El ruido causa que los vecinos duerman mal.",
            instruction: "Ajusta la afirmación a una correlación con «los datos sugieren».",
            answers: ["Los datos sugieren una asociación entre el ruido y la calidad del sueño de los vecinos.", "Los datos sugieren que el ruido está asociado a un peor sueño de los vecinos.", "Los datos sugieren una asociación entre el ruido y el mal sueño de los vecinos."],
            why: "Se sustituye la causa por una asociación.",
          },
          {
            source: "Ya, pero la muestra no incluye a los trabajadores nocturnos.",
            instruction: "Conviértela en una frase de la sección de limitaciones, sin marcadores conversacionales.",
            answers: ["Cabe señalar que la muestra no incluye a los trabajadores nocturnos.", "Cabe señalar que la muestra no incluye a trabajadores nocturnos."],
            why: "El «ya, pero» oral se convierte en la fórmula académica «cabe señalar que».",
          },
        ],
      },
      {
        id: "c2-13-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe tu intervención en una reunión (40–60 palabras) en la que aceptas una propuesta de un colega con una condición, reformulas su postura de forma cooperativa y defiendes tu turno si te interrumpe.",
            model: "O sea, que propones publicar ya el informe preliminar, ¿no? Bueno, me parece bien; eso sí, sin las cifras por manzana, que todavía no están revisadas. Un segundo, que termino: si las publicamos ahora y luego cambian, perdemos credibilidad. Ahora sí, te escucho.",
            checklist: [
              "Uso una reformulación cooperativa con «o sea».",
              "Añado una condición con «eso sí».",
              "Defiendo el turno sin brusquedad.",
            ],
          },
          {
            prompt: "Escribe un párrafo de limitaciones (60–80 palabras) para un estudio sobre el uso de bicicletas compartidas en tu ciudad, basado en una encuesta en línea de un mes.",
            model: "Cabe señalar varias limitaciones. En primer lugar, la encuesta se distribuyó en línea, por lo que es probable que estén subrepresentadas las personas mayores. En segundo lugar, los datos corresponden a un solo mes de primavera y no permiten generalizar al resto del año. Por ello, los resultados deben interpretarse con cautela. Futuras investigaciones podrían combinar la encuesta con los registros de uso del sistema.",
            checklist: [
              "Uso al menos dos fórmulas típicas de las limitaciones.",
              "Cada limitación explica qué consecuencia tiene.",
              "Termino con una propuesta para investigaciones futuras.",
            ],
          },
        ],
      },
      {
        id: "c2-13-recuperacion",
        type: "open",
        prompt: "Recupera clases anteriores que preparan esta semana con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G189 (conectores de reformulación, C1). Estímulo: «La muestra es local, es decir, no permite generalizar». Explica qué hace «es decir» y reescribe la frase con «dicho de otro modo» y con «mejor dicho», indicando qué cambia.",
            model: "«Es decir» introduce una explicación equivalente. Con «dicho de otro modo» el sentido es el mismo: «La muestra es local; dicho de otro modo, no permite generalizar». Con «mejor dicho» se corrige lo anterior: «La muestra es pequeña, mejor dicho, local», lo que indica que la primera palabra no era la más exacta.",
            checklist: [
              "Distingo la explicación de la corrección.",
              "Uso los dos conectores en frases correctas.",
            ],
          },
          {
            prompt: "Recuperación de la clase G190 (conectores contraargumentativos, C1). Estímulo: «El estudio es pequeño. De todas formas, ofrece datos útiles». Explica qué hace «de todas formas» y reescribe la idea con «no obstante» para el artículo.",
            model: "«De todas formas» mantiene una idea a pesar de lo dicho antes: el tamaño no anula la utilidad. En el artículo: «Se trata de un estudio de alcance limitado; no obstante, ofrece datos útiles para orientar investigaciones futuras».",
            checklist: [
              "Explico el valor de mantener una idea pese a un obstáculo.",
              "Uso «no obstante» con la puntuación adecuada.",
            ],
          },
          {
            prompt: "Recuperación de la clase G198 (estilo formal, C1). Estímulo: «Yo creo que habría que medir también en verano». Reescríbela en estilo académico de dos maneras: con plural de modestia y con una construcción impersonal.",
            model: "Con plural de modestia: «Consideramos que sería conveniente realizar también mediciones en verano». Impersonal: «Sería conveniente realizar también mediciones en verano». La primera muestra a los autores; la segunda los oculta.",
            checklist: [
              "Uso el plural de modestia en una versión.",
              "Uso una construcción impersonal en la otra.",
            ],
          },
          {
            prompt: "Recuperación de la clase G221 (modalización sutil, semana 11). Estímulo: «Es indudable que los bares son responsables del problema». Rebaja el compromiso a lo que permite una correlación y explica por qué cambia el modo si usas «no está claro que».",
            model: "«Todo indica que la actividad de los bares está relacionada con el problema», o con más reserva: «No está claro que los bares sean los únicos responsables». Con «no está claro que» se niega la base de la afirmación y el verbo pasa a subjuntivo.",
            checklist: [
              "Rebajo el compromiso con una fórmula de la escala.",
              "Explico el cambio de modo con la negación.",
            ],
          },
          {
            prompt: "Recuperación de la clase G223 (lítotes, semana 12). Estímulo: «El efecto no es desdeñable». Explica qué afirma esta lítote y si es adecuada en la discusión de un artículo académico.",
            model: "La lítote afirma que el efecto es apreciable, sin exagerarlo: niega lo contrario («desdeñable») en lugar de decir «importante». En un artículo es adecuada, porque combina claridad y prudencia; sería problemática solo si se usara para ocultar un efecto muy pequeño.",
            checklist: [
              "Explico qué afirma la lítote.",
              "Valoro su adecuación al registro académico.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la sección de discusión de un estudio breve (400–520 palabras), real o imaginado, sobre un problema urbano de tu ciudad. Debe presentar el resultado principal con la cautela que permiten los datos, ofrecer explicaciones alternativas, citar al menos dos trabajos con verbos que muestren tu postura y terminar con un párrafo de limitaciones.",
    context: "El texto se enviará a una revista académica de estudios urbanos y lo leerán evaluadores atentos a cualquier exceso. Puedes basarte en el estudio de San Telmo o inventar otro con datos coherentes (encuesta, mediciones, observación). Las referencias pueden ser ficticias, pero deben estar bien integradas.",
    steps: [
      "Escribe en una línea qué muestran exactamente tus datos y en otra qué no muestran.",
      "Ordena la discusión: resultado principal, comparación con otros estudios, explicaciones alternativas, conclusión prudente y limitaciones.",
      "Redacta sin copiar el modelo. Usa una construcción impersonal, una atenuación doble como máximo, dos verbos de cita con posturas distintas y al menos tres fórmulas de limitaciones.",
      "Revisa la sección con la lista de control: corrige cualquier afirmación causal que los datos no permitan, comprueba el modo tras «sugerir que» y «negar que», y elimina calcos como «en base a» o «jugar un rol».",
    ],
    useLanguage: [
      "los datos sugieren / parecen indicar que + indicativo",
      "podría deberse, al menos en parte, a…",
      "como ha mostrado X / según X / X pone en duda que + subjuntivo",
      "en la medida en que… / cabe pensar que…",
      "cabe señalar que… / deben interpretarse con cautela / no permiten generalizar",
      "futuras investigaciones podrían…",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): Los resultados de este estudio sugieren que los usuarios de bicicletas compartidas de Córdoba evitan de manera sistemática las avenidas sin carril exclusivo, incluso cuando estas acortan el trayecto. En las veintidós rutas observadas, el recorrido elegido fue, en promedio, un catorce por ciento más largo que el más corto disponible. Este patrón es coherente con lo que ha mostrado Aguirre (2022) para Rosario, aunque en nuestro caso la diferencia parece algo menor. Conviene no interpretarlo, sin embargo, como una prueba de que el miedo al tráfico sea el único factor.",
    ],
    checklist: [
      "Ninguna frase afirma una causa que los datos no permiten.",
      "La atenuación es suficiente, pero nunca triple.",
      "Cada verbo de cita corresponde a mi postura ante lo citado.",
      "El modo es correcto tras «sugerir que», «negar que» y «poner en duda que».",
      "La sección de limitaciones explica qué consecuencia tiene cada limitación.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Tu turno en la reunión del título",
        prompt: "Eres parte del equipo. Interviene en la reunión para defender un título que no hable de causa sin perder fuerza. Reformula la postura de quien quiere un título llamativo, acepta una parte, pon una condición y defiende tu turno si te interrumpen. Habla al menos cuatro minutos, como si respondieras a tus colegas.",
        prep: [
          "Prepara una reformulación cooperativa de la postura contraria.",
          "Decide qué parte aceptas y qué condición pones.",
          "Ten a mano una fórmula para mantener el turno.",
        ],
        seconds: 240,
        model: "A ver, si te entiendo bien, lo que buscas es que el título llegue a la prensa, ¿no? Bueno, en eso estoy de acuerdo: un título que no lee nadie no sirve. Pero perdona que insista, si ponemos causa, nos van a citar mal. Un segundo, que termino: propongo hablar de una asociación que merece atención. Eso sí, en la discusión dejamos claro que no es pequeña…",
        selfCheck: [
          "Reformulo la postura del otro de forma fiel.",
          "Uso al menos cuatro marcadores con funciones distintas.",
          "Mantengo el turno sin brusquedad.",
        ],
      },
      {
        title: "Presentar el resultado en un seminario",
        prompt: "Presenta en dos minutos y medio el resultado principal del estudio de San Telmo ante un público académico: qué se midió, qué se encontró, qué no se puede afirmar y qué habría que investigar después.",
        prep: [
          "Prepara una frase con «los datos sugieren» y otra con «no permiten».",
          "Decide qué limitación mencionarás primero.",
        ],
        seconds: 150,
        model: "En este estudio se midieron los niveles de ruido nocturno en dieciocho puntos de San Telmo y se encuestó a 312 residentes. Los datos sugieren una asociación moderada entre el ruido y los despertares declarados. Ahora bien, no permiten hablar de causa, porque no medimos el sueño directamente…",
        selfCheck: [
          "No enfatizo los atenuadores: sueno prudente, no inseguro.",
          "Distingo lo que se encontró de lo que no se puede afirmar.",
        ],
      },
      {
        title: "Responder a una pregunta incómoda",
        prompt: "Alguien del público pregunta: «Entonces, ¿el ruido causa insomnio o no?». Responde con claridad y sin evasivas, explicando la diferencia entre asociación y causa con un ejemplo cotidiano.",
        prep: [
          "Busca un ejemplo de dos cosas que suelen ir juntas sin que una cause la otra.",
          "Termina con lo que sí se puede afirmar.",
        ],
        seconds: 120,
        selfCheck: [
          "Respondo a la pregunta, no me voy por las ramas.",
          "El ejemplo aclara la diferencia entre asociación y causa.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu sección de discusión y una lista de marcadores que hayas oído en reuniones reales. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Negocia",
        task: "Propón a tu profesor un cambio en la dinámica de la clase y negocia: él objeta y tú aceptas en parte, pones una condición y reformulas su postura.",
        phrases: ["Bueno, pero…", "Eso sí…", "O sea, que lo que te preocupa es…"],
      },
      {
        move: "Interrumpe",
        task: "Pide a tu profesor que hable de un tema durante dos minutos e interrúmpelo dos veces con fórmulas distintas; después defiende tu turno cuando él te interrumpa.",
        phrases: ["Perdona que te interrumpa, pero…", "Déjame terminar, que…"],
      },
      {
        move: "Ajusta",
        task: "Lee tres frases de tu discusión y pide a tu profesor que diga si afirman más o menos de lo que permiten tus datos.",
        phrases: ["¿Esto suena a causa?", "¿Sobra alguna atenuación?"],
      },
      {
        move: "Cita",
        task: "Presenta dos citas de tu texto y explica por qué elegiste cada verbo de cita.",
        phrases: ["Uso «sostiene» porque no me adhiero…", "Aquí pongo «como ha mostrado» porque…"],
      },
    ],
    bring: "Tu sección de discusión revisada, tu tabla de marcadores con su función y, si quieres, la grabación de tu turno en la reunión.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "En una reunión, ¿qué marcador añade una condición a un acuerdo ya dado?",
        options: ["eso sí", "pues", "en fin"],
        answer: 0,
        why: "«Eso sí» condiciona un acuerdo.",
      },
      {
        type: "choice",
        q: "¿Qué reformulación es polémica?",
        options: [
          "O sea, que te preocupa el plazo, ¿no?",
          "Vamos, que para ti el estudio no sirve para nada.",
          "Es decir, que prefieres esperar a tener los datos de verano.",
        ],
        answer: 1,
        why: "Exagera la postura del otro hasta una conclusión que no aceptaría.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué postura tiene quien escribe ante lo citado?",
        options: [
          "Lo acepta como probado.",
          "Lo informa sin comprometerse.",
          "Lo rechaza abiertamente.",
        ],
        answer: 1,
        why: "«Según» informa sin adherirse.",
        audio: "Según Méndez, los vecinos se quejan más del ruido de las motos que del de los bares.",
        voice: "es-AR-f",
      },
      {
        type: "gap",
        q: "Los resultados sugieren que el ruido ___ relacionado con los despertares nocturnos.",
        answers: [["está"]],
        hint: "Aquí «sugerir» significa ‘indicar’, no ‘proponer’.",
        why: "«Sugerir que» con valor de indicar: indicativo.",
      },
      {
        type: "gap",
        q: "Perdona que te ___, pero ese gráfico es del año pasado.",
        answers: [["interrumpa"]],
        hint: "Fórmula para tomar el turno que expresa una reacción ante un hecho.",
        why: "«Perdonar que» + subjuntivo.",
      },
      {
        type: "transform",
        source: "En base a los datos, el ruido juega un rol en el sueño.",
        instruction: "Corrige los dos calcos y atenúa la afirmación para un artículo académico.",
        answers: ["Sobre la base de los datos, el ruido parece desempeñar un papel en el sueño.", "Con base en los datos, el ruido parece desempeñar un papel en el sueño.", "Sobre la base de los datos, el ruido podría desempeñar un papel en el sueño."],
        why: "«Sobre la base de» y «desempeñar un papel», con una atenuación.",
      },
      {
        type: "error",
        sentence: "Asumimos que los vecinos con más años en el barrio se han acostumbrado al ruido.",
        answers: ["Suponemos que los vecinos con más años en el barrio se han acostumbrado al ruido."],
        why: "«Asumir» con el sentido de ‘suponer’ es un calco.",
      },
      {
        type: "error",
        sentence: "Varios autores niegan que el ruido diurno tiene efectos sobre el sueño.",
        answers: ["Varios autores niegan que el ruido diurno tenga efectos sobre el sueño."],
        why: "«Negar que» rige subjuntivo.",
      },
      {
        type: "order",
        words: ["Ya,", "pero", "no", "medimos", "el", "sueño", "directamente."],
        why: "«Ya, pero»: acusa recibo y objeta.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero por qué «los datos demuestran que el ruido causa insomnio» no es una buena frase para un estudio basado en una encuesta y en mediciones en la calle, y propón una alternativa.",
        model: "La frase tiene dos problemas. «Demuestran» presenta el resultado como probado, y «causa» afirma una relación causal que una correlación no permite establecer: otros factores, como la antigüedad de los edificios o la edad de los vecinos, podrían explicar parte de la diferencia. Además, una encuesta mide el sueño declarado, no el sueño real. Una alternativa sería: «Los datos sugieren una asociación entre el ruido nocturno y la calidad del sueño declarada por los residentes».",
        checklist: [
          "Explico el problema del verbo y el de la causa.",
          "Menciono al menos un factor alternativo.",
          "Propongo una frase ajustada a los datos.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Uso «bueno», «ya, pero», «pues», «eso sí» y «¿no?» para aceptar, objetar, condicionar y buscar consenso en una reunión.",
      "Reformulo al otro de forma cooperativa, tomo y defiendo el turno, y elijo marcadores de acuerdo comprensibles en una reunión internacional.",
      "Ajusto una afirmación académica a lo que permiten los datos, distingo asociación y causa y redacto limitaciones.",
      "Elijo verbos de cita según mi postura y evito calcos como «en base a», «jugar un rol» o «asumir» por ‘suponer’.",
    ],
    review: [
      "Dentro de dos días, tapa la columna de funciones de la tabla de marcadores y reconstrúyela.",
      "Dentro de una semana, lee el resumen de un artículo real de tu campo y subraya cada atenuación y cada verbo de cita.",
      "En la próxima clase, lee tu discusión en voz alta y pide a tu profesor que marque cualquier afirmación excesiva.",
    ],
  },
  related: [
    { path: "/gramatica/marcadores-conversacionales-de-negociacion-fina", label: "Clase: Marcadores conversacionales de negociación fina" },
    { path: "/gramatica/discursos-academicos-cautela-metodologica", label: "Clase: Discursos académicos: cautela metodológica" },
  ],
};
