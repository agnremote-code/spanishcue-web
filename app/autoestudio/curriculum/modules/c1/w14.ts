import type { Module } from "../../types";

/**
 * C1 · semana 14 · Autoestudio espejo de G192 (intensificación y énfasis) y
 * G193 (polifonía y atribución). Repaso autónomo con la polémica ficticia entre
 * un taller de tejedoras zapotecas de Oaxaca y una marca de moda que usó sus
 * diseños. Personas, marca y taller son ficticios. Audio mediante síntesis;
 * sin acreditación regional.
 */
export const c1w14: Module = {
  id: "c1-14",
  level: "c1",
  week: 14,
  kind: "core",
  title: "Ni siquiera nos preguntaron, según dicen ellas",
  subtitle: "Repaso de cómo subir el tono con precisión y de cómo atribuir cada dato a su voz decidiendo cuánto te comprometes con él",
  stop: {
    place: "Oaxaca",
    country: "México",
  },
  minutes: 135,
  newObjectives: [
    "c1.gram.g192",
    "c1.gram.g193",
    "c1.voc.w14-textil-autoria",
    "c1.pron.w14-enfasis-escala",
    "c1.lis.w14-taller-tejedoras",
    "c1.read.w14-cronica-polemica",
    "c1.wri.w14-cronica-equilibrada",
    "c1.spk.w14-informar-polemica",
    "c1.fun.w14-atribuir-y-enfatizar",
    "c1.disc.w14-voces-en-el-texto",
  ],
  reviewObjectives: ["c1.gram.g190","c1.gram.g191","c1.voc.w13-bar-tapas","c1.pron.w13-sino-si-no","c1.lis.w13-reunion-familiar","c1.read.w13-resena-gastronomica","c1.wri.w13-informe-critico","c1.spk.w13-critica-constructiva","c1.fun.w13-discrepar-con-tacto","c1.disc.w13-matizar-argumento"],
  prerequisites: ["c1-13"],
  goal: {
    canDo: "Puedo intensificar con el recurso y el registro adecuados (incluso, ni siquiera, lo… que, vaya si, de lo más) y atribuir cada dato a su fuente mostrando si lo transmito, lo doy por cierto o me distancio de él.",
    steps: [
      "Repasa en la teoría la escala de incluso y ni siquiera, las estructuras que ponderan y los verbos y marcas que atribuyen o toman distancia.",
      "Practica con frases sobre un taller de tejedoras de Oaxaca que acusa a una marca de copiar sus diseños.",
      "Escucha la conversación de las tejedoras con una periodista y lee la crónica que publica después.",
      "Escribe una crónica equilibrada, revísala con la lista de control y cuéntala en voz alta.",
    ],
  },
  theory: {
    intro: "Esta semana repasas dos clases que aparecen juntas en cualquier polémica. La primera sirve para subir el tono sin gritar: marcar que algo es el extremo de una escala, ponderar un grado o afirmar con fuerza. La segunda sirve para que el lector sepa de quién es cada voz y cuánto te comprometes con lo que transmites. Quien informa de un conflicto necesita las dos: el énfasis de las partes y la distancia de quien cuenta. El escenario es un taller de tejedoras zapotecas cerca de Oaxaca.",
    parts: [
      {
        heading: "La escala: incluso, hasta, aun, ni siquiera",
        body: [
          "Estas partículas sitúan un hecho en el extremo de una escala que el oyente reconstruye. «Incluso», «hasta» y «aun» (sin tilde) suben al extremo más improbable: «hasta la abuela vino a la reunión» (si vino ella, vino todo el mundo). «Ni siquiera» baja al mínimo esperable: «ni siquiera nos llamaron» (lo más básico no ocurrió). Van justo delante de lo que destacan, de modo que su posición cambia el sentido. Detrás de «hasta» o «incluso» como foco va un sujeto, no una preposición: «hasta yo», «incluso tú».",
          "«Ni siquiera» delante del verbo no necesita otra negación; detrás, sí: «ni siquiera contestaron» o «no contestaron ni siquiera». «Not even» nunca es «incluso no». Para el mínimo de una cantidad, «ni un» o «ni una»: «no pagaron ni un peso».",
        ],
        table: {
          caption: "Arriba y abajo de la escala",
          head: ["Partícula", "Dirección", "Ejemplo"],
          rows: [
            ["incluso / hasta", "al extremo improbable", "Hasta los turistas se dieron cuenta del parecido."],
            ["aun", "al extremo, en concesivas", "Aun con el diseño a la vista, lo negaron."],
            ["ni siquiera (delante)", "al mínimo, sin otra negación", "Ni siquiera citaron el pueblo."],
            ["no… ni siquiera (detrás)", "al mínimo, con «no»", "No citaron ni siquiera el pueblo."],
            ["ni un / ni una", "mínimo de cantidad", "No recibieron ni una disculpa."],
          ],
        },
        examples: [
          { es: "Incluso la directora de la marca reconoció que el motivo se parecía.", note: "Quien menos se esperaba lo reconoce: extremo de la escala." },
          { es: "No mencionaron a las tejedoras ni siquiera en la etiqueta.", note: "«Ni siquiera» detrás del verbo exige el «no» inicial." },
        ],
        mistakes: [
          {
            wrong: "Incluso no nos pidieron permiso.",
            right: "Ni siquiera nos pidieron permiso.",
            why: "Para «not even», «ni siquiera»; «incluso no» no existe.",
          },
          {
            wrong: "Hasta mí me di cuenta del parecido.",
            right: "Hasta yo me di cuenta del parecido.",
            why: "Como foco de sujeto, «hasta» va con «yo».",
          },
        ],
      },
      {
        heading: "Ponderar el grado y afirmar con fuerza",
        body: [
          "«Lo + adjetivo o adverbio + que» no nombra una cualidad, sino su grado, a menudo con sorpresa: «no te imaginas lo fina que es la lana» (cuán fina). Aunque «lo» es neutro, el adjetivo concuerda con su sustantivo, y el verbo va en indicativo porque es un hecho: «me impresiona lo bien que tiñen». Con verbos, «lo que» pondera la cantidad («¡lo que trabajan!») y «la de + nombre + que» pondera una cantidad de cosas («¡la de horas que lleva un tapete!»). No lo confundas con «lo bueno es que…», que destaca un aspecto, no un grado.",
          "Para afirmar con fuerza, «sí que» delante del verbo refuerza («eso sí que es arte») y «vaya si» + indicativo responde con un sí rotundo y coloquial, repitiendo el verbo: «—¿Se parecía? —¡Vaya si se parecía!». En las exclamativas, «¡qué + nombre + tan / más + adjetivo!», sin artículo. El grado sube con «sumamente», «especialmente», «de lo más», «la mar de» (coloquial) o «-ísimo»; nunca «muy» + «-ísimo». Elige según el registro: en una crónica, «sumamente» o «especialmente»; en la conversación, «la mar de» o una repetición («bonito, bonito»).",
        ],
        table: {
          caption: "Recursos de énfasis y su registro",
          head: ["Recurso", "Ejemplo", "Registro"],
          rows: [
            ["lo + adjetivo + que", "No sabes lo complicada que es esta greca.", "todos"],
            ["la de + nombre + que", "¡La de veces que lo hemos explicado!", "conversación"],
            ["sí que + verbo", "Eso sí que es una copia.", "todos"],
            ["vaya si + indicativo", "¡Vaya si se nota!", "coloquial"],
            ["¡qué + nombre + tan / más + adjetivo!", "¡Qué colores tan vivos!", "todos"],
            ["de lo más / sumamente", "Un proceso sumamente lento.", "neutro o formal"],
          ],
        },
        mistakes: [
          {
            wrong: "No te imaginas lo difícil que sea teñir con grana cochinilla.",
            right: "No te imaginas lo difícil que es teñir con grana cochinilla.",
            why: "La estructura ponderativa presenta un hecho: indicativo.",
          },
          {
            wrong: "Es un tapete muy carísimo.",
            right: "Es un tapete carísimo.",
            why: "«-ísimo» ya es grado máximo: no admite «muy».",
          },
          {
            wrong: "¡Qué un diseño tan antiguo!",
            right: "¡Qué diseño tan antiguo!",
            why: "En la exclamativa con «qué», el nombre va sin artículo.",
          },
        ],
      },
      {
        heading: "Verbos que toman postura y el modo que piden",
        body: [
          "El verbo con que introduces una voz ajena ya dice algo. «Decir», «afirmar» y «declarar» transmiten; «sostener» y «defender» muestran insistencia; «reconocer» y «admitir» presentan algo que la fuente no quería decir; «matizar» corrige un poco; «negar» y «desmentir» rechazan. Con los que transmiten o reconocen, indicativo: «la marca reconoce que usó el motivo». Con «negar», subjuntivo: «la marca niega que haya copiado nada». El modo no depende de si tú te lo crees, sino de lo que hace la fuente. Lo repasaste desde otro ángulo en la semana 1 (G168).",
          "Algunos verbos cambian de significado con el modo. «Advertir que» + indicativo avisa («advirtió que el diseño estaba registrado»); + subjuntivo ordena («advirtió que no se vendiera»). «Pretender que» + indicativo afirma algo sin fundamento («pretende que el motivo es suyo»); + subjuntivo expresa lo que alguien quiere conseguir («pretende que le paguemos»). Y «pretender» no es «to pretend»: para eso, «fingir».",
        ],
        table: {
          caption: "Un mismo dato, tres posturas",
          head: ["Verbo", "Postura de la fuente", "Ejemplo"],
          rows: [
            ["dice / afirma que + indicativo", "transmite", "La marca dice que se inspiró en varios pueblos."],
            ["reconoce / admite que + indicativo", "concede a su pesar", "La marca reconoce que no consultó al taller."],
            ["niega que + subjuntivo", "rechaza", "La marca niega que el diseño sea una copia."],
            ["advierte que + indicativo", "avisa", "El abogado advierte que el plazo vence el viernes."],
            ["advierte que + subjuntivo", "ordena", "El abogado advierte que no se firme nada."],
            ["pretende que + indicativo", "afirma sin razón", "La marca pretende que el motivo es de dominio público."],
          ],
        },
        examples: [
          { es: "La portavoz matizó que la colección no se había vendido en México.", note: "«Matizar» corrige un poco la información anterior." },
          { es: "El taller sostiene que el motivo lleva tres generaciones en la familia.", note: "«Sostener» muestra que la fuente insiste en su versión." },
        ],
      },
      {
        heading: "De quién es la voz y cuánto te comprometes",
        body: [
          "Para presentar la fuente de un dato, «según» + nombre o pronombre («según la marca», «según tú»), nunca «según mí» ni «según que». «En palabras de» introduce una cita casi literal. «Para» y «a juicio de» presentan opiniones, no datos: «para la tejedora, es un robo», pero «según el registro, el diseño es de 2019». Para tu propia opinión, «para mí» o «a mi juicio».",
          "Para mostrar que una palabra o un dato no son tuyos, «supuestamente» y «presunto» añaden distancia (este último, en lenguaje jurídico y periodístico, protege a quien no ha sido juzgado); «el llamado» o las comillas señalan una denominación ajena, a menudo con ironía: «la llamada “colección homenaje”». «Al parecer» indica que el dato viene de otros; «aparentemente» significa que algo parece, pero quizá no es. En la conversación, el «que» de eco al principio repite o transmite palabras: «¿Que no sabían nada? ¡Si les mandamos fotos!»; no lo uses en un texto formal.",
        ],
        table: {
          caption: "Marcas de fuente y de distancia",
          head: ["Marca", "Qué indica", "Ejemplo"],
          rows: [
            ["según + fuente", "el dato es de otro", "Según la empresa, se vendieron trescientas prendas."],
            ["para / a juicio de", "es una opinión de otro", "A juicio de la abogada, hay base para demandar."],
            ["en palabras de", "cita casi literal", "En palabras de doña Rufina, «nos quitaron el nombre»."],
            ["supuestamente", "no respondo de ello", "La colección supuestamente rinde homenaje a Oaxaca."],
            ["el llamado / comillas", "la denominación es ajena", "El llamado «diseño original» tiene cien años."],
            ["que de eco (oral)", "repite lo que se ha dicho", "¿Que fue casualidad? Pues vaya casualidad."],
          ],
        },
        mistakes: [
          {
            wrong: "Según mí, la marca tendría que pagar.",
            right: "Para mí, la marca tendría que pagar.",
            why: "«Según» no va con «mí»; para la opinión propia, «para mí» o «a mi juicio».",
          },
          {
            wrong: "La marca niega que ha usado el diseño.",
            right: "La marca niega que haya usado el diseño.",
            why: "«Negar que» pide subjuntivo.",
          },
          {
            wrong: "Para el registro, el diseño es de 2019.",
            right: "Según el registro, el diseño es de 2019.",
            why: "Un dato se atribuye con «según»; «para» presenta opiniones.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero decide si quieres subir el tono o atribuir una voz; después elige el recurso, el modo y el registro.",
    exercises: [
      {
        id: "c1-14-gramatica-voz",
        type: "context",
        prompt: "Lee la situación y elige la frase que corresponde a la postura de la fuente o de quien escribe.",
        items: [
          {
            context: "La marca, después de una semana negándolo, acepta en un comunicado que no consultó al taller.",
            q: "¿Cómo lo cuenta la periodista?",
            options: [
              "La marca niega que no consultara al taller.",
              "La marca reconoce que no consultó al taller.",
              "La marca pretende que consulte al taller.",
            ],
            answer: 1,
            why: "«Reconocer» presenta algo que la fuente no quería decir; va con indicativo.",
          },
          {
            context: "La periodista quiere dejar claro que el nombre «colección homenaje» es de la marca y que no lo comparte.",
            q: "¿Qué frase lo consigue?",
            options: [
              "La colección homenaje se presentó en marzo.",
              "La colección, que es un homenaje, se presentó en marzo.",
              "La llamada «colección homenaje» se presentó en marzo.",
            ],
            answer: 2,
            why: "«El llamado» y las comillas marcan la denominación como ajena.",
          },
          {
            context: "La abogada del taller avisa de un plazo, no da una orden.",
            q: "¿Qué frase lo dice?",
            options: [
              "La abogada advirtió que el plazo para reclamar terminaba en junio.",
              "La abogada advirtió que el plazo para reclamar terminara en junio.",
              "La abogada pretendió que el plazo terminara en junio.",
            ],
            answer: 0,
            why: "«Advertir que» + indicativo es un aviso.",
          },
          {
            context: "Una tejedora quiere subrayar que la marca no hizo lo mínimo que se esperaba.",
            q: "¿Qué dice?",
            options: [
              "Incluso no pusieron el nombre del pueblo.",
              "Ni siquiera pusieron el nombre del pueblo.",
              "Hasta pusieron el nombre del pueblo.",
            ],
            answer: 1,
            why: "«Ni siquiera» señala el mínimo que no ocurrió.",
          },
        ],
      },
      {
        id: "c1-14-gramatica-formas",
        type: "gap",
        prompt: "Completa con la forma adecuada. Fíjate en la concordancia y en el modo.",
        items: [
          { q: "No te imaginas lo ___ (lento) que es tejer un tapete de un metro.", answers: [["lento"]], why: "Concuerda con «tejer», que funciona como masculino singular." },
          { q: "Me sorprendió lo ___ (resistente) que son estas lanas.", answers: [["resistentes"]], why: "El adjetivo concuerda con «lanas»: plural." },
          { q: "El director negó que la empresa ___ (copiar) el motivo.", answers: [["hubiera copiado", "hubiese copiado", "copiara", "copiase"]], why: "«Negar que» pide subjuntivo; aquí, en pasado." },
          { q: "La marca pretende que el taller ___ (retirar) la denuncia.", answers: [["retire"]], why: "«Pretender que» + subjuntivo: lo que quiere conseguir." },
          { q: "—¿Era igual el diseño? —¡Vaya si ___ (ser) igual!", answers: [["era"]], why: "«Vaya si» + indicativo repite el verbo de la pregunta." },
          { q: "___ la portavoz, la colección se retiró de las tiendas en abril.", answers: [["Según"]], why: "Un dato atribuido a una fuente: «según»." },
        ],
      },
      {
        id: "c1-14-gramatica-funcion",
        type: "classify",
        prompt: "Clasifica cada frase según lo que hace quien habla o escribe.",
        categories: ["Intensifica", "Atribuye sin tomar partido", "Se distancia del dato"],
        items: [
          { text: "Hasta el alcalde se hizo una foto con el tapete.", cat: 0, why: "Extremo de la escala." },
          { text: "¡La de horas que hay detrás de cada pieza!", cat: 0, why: "Pondera una cantidad." },
          { text: "Según el comunicado, la empresa donará parte de los beneficios.", cat: 1, why: "Atribuye el dato sin comentarlo." },
          { text: "La portavoz afirmó que la colección tenía doce prendas.", cat: 1, why: "«Afirmar» transmite." },
          { text: "La colección supuestamente rinde homenaje a los pueblos de los Valles Centrales.", cat: 2, why: "«Supuestamente»: no responde del dato." },
          { text: "El llamado «diseño propio» aparece en fotos de 1960.", cat: 2, why: "La denominación es ajena y se pone en duda." },
          { text: "Eso sí que es trabajo bien hecho.", cat: 0, why: "«Sí que» refuerza la afirmación." },
        ],
      },
      {
        id: "c1-14-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de énfasis o de atribución. Corrígela cambiando solo lo necesario.",
        items: [
          {
            sentence: "Según que la abogada, la demanda puede tardar un año.",
            answers: ["Según la abogada, la demanda puede tardar un año."],
            why: "«Según» no lleva «que» detrás.",
          },
          {
            sentence: "La empresa reconoció que no haya pedido permiso.",
            answers: ["La empresa reconoció que no había pedido permiso.", "La empresa reconoció que no pidió permiso."],
            why: "«Reconocer» transmite un hecho: indicativo.",
          },
          {
            sentence: "Ni siquiera no respondieron al correo.",
            answers: ["Ni siquiera respondieron al correo.", "No respondieron ni siquiera al correo."],
            why: "Delante del verbo, «ni siquiera» no admite otra negación.",
          },
          {
            sentence: "El diseñador pretendía no conocer el pueblo, pero había estado allí dos veces.",
            answers: ["El diseñador fingía no conocer el pueblo, pero había estado allí dos veces."],
            why: "«To pretend» se dice «fingir»; «pretender» es intentar conseguir o afirmar sin razón.",
          },
        ],
      },
      {
        id: "c1-14-gramatica-reformular",
        type: "open",
        prompt: "Reescribe cada borrador según la instrucción. Hay varias respuestas posibles: compara con el modelo y con la lista.",
        items: [
          {
            prompt: "Borrador de una nota de prensa: «La marca copió el diseño. La marca dice que no. El taller dice que el diseño es suyo desde hace tres generaciones». Reescríbelo como lo haría una periodista que no toma partido: atribuye cada dato con un verbo de postura distinto y usa el modo correcto.",
            model: "El taller sostiene que el motivo pertenece a la familia desde hace tres generaciones, mientras que la marca niega que su diseño sea una copia y afirma que se inspiró en varios pueblos de la región.",
            checklist: [
              "Ningún dato aparece como afirmación de la periodista.",
              "Uso al menos tres verbos de postura distintos.",
              "«Negar que» va con subjuntivo.",
            ],
          },
          {
            prompt: "Borrador de una tejedora en una entrevista: «La marca no nos llamó. Vino mucha gente a vernos. El trabajo es muy difícil». Reescríbelo en registro oral con tres recursos de énfasis diferentes.",
            model: "Ni siquiera nos llamaron, ¿eh? Y luego vino hasta gente de la capital a vernos tejer. No sabe usted lo difícil que es sacar esta greca: ¡la de noches que me he pasado en el telar!",
            checklist: [
              "Uso un recurso de escala, uno ponderativo y uno exclamativo.",
              "La concordancia y el modo de «lo… que» son correctos.",
              "El registro es oral y natural.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar del trabajo textil artesanal y de los conflictos de autoría.",
    groups: [
      {
        title: "El taller textil",
        items: [
          { es: "el telar de pedal", note: "telar que se maneja con los pies y las manos" },
          { es: "el tapete", note: "en México, alfombra tejida de lana" },
          { es: "la greca", note: "motivo decorativo geométrico que se repite" },
          { es: "teñir con tintes naturales", note: "dar color con plantas, insectos o minerales" },
          { es: "la grana cochinilla", note: "insecto del que se obtiene un tinte rojo" },
          { es: "la urdimbre", note: "hilos que se colocan a lo largo del telar" },
          { es: "el oficio heredado", note: "trabajo que se aprende de la familia" },
        ],
      },
      {
        title: "Autoría y polémica",
        items: [
          { es: "la apropiación cultural", note: "uso de elementos de una cultura sin reconocimiento ni permiso" },
          { es: "el patrimonio colectivo", note: "bien cultural que pertenece a una comunidad" },
          { es: "dar crédito", note: "reconocer públicamente quién es el autor" },
          { es: "el comunicado", note: "texto oficial que una organización envía a la prensa" },
          { es: "desmentir", note: "decir públicamente que algo no es verdad" },
          { es: "la portavoz", note: "persona que habla en nombre de una organización" },
          { es: "llegar a un acuerdo extrajudicial", note: "resolver un conflicto sin ir a juicio" },
          { es: "hacerse viral", note: "difundirse muy deprisa en internet" },
        ],
      },
    ],
    exercises: [
      {
        id: "c1-14-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la greca", right: "motivo decorativo geométrico que se repite" },
          { left: "la apropiación cultural", right: "uso de elementos de una cultura sin reconocimiento ni permiso" },
          { left: "dar crédito", right: "reconocer públicamente quién es el autor" },
          { left: "desmentir", right: "decir públicamente que algo no es verdad" },
          { left: "la urdimbre", right: "hilos que se colocan a lo largo del telar" },
          { left: "el patrimonio colectivo", right: "bien cultural que pertenece a una comunidad" },
          { left: "llegar a un acuerdo extrajudicial", right: "resolver un conflicto sin ir a juicio" },
        ],
      },
      {
        id: "c1-14-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del banco.",
        bank: ["se hizo viral", "grana cochinilla", "comunicado", "oficio heredado", "portavoz"],
        items: [
          { q: "El rojo de los tapetes de doña Rufina sale de la ___, que ella misma cultiva en nopales.", answers: [["grana cochinilla"]] },
          { q: "El video de la nieta comparando las dos prendas ___ en menos de un día.", answers: [["se hizo viral"]] },
          { q: "La empresa publicó un ___ de tres líneas sin mencionar el pueblo.", answers: [["comunicado"]] },
          { q: "La ___ de la marca no quiso responder a las preguntas de la radio.", answers: [["portavoz"]] },
          { q: "Para la familia Ruiz, tejer no es un negocio, sino un ___ que pasa de abuelas a nietas.", answers: [["oficio heredado"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "El acento de énfasis en la escala y en la exclamación",
    explanation: [
      "Los recursos de escala llevan el acento de la frase en la palabra que destacan, no en la partícula: «ni siquiera nos LLAMARON», «hasta la ABUELA vino». Si cambias el lugar del acento, cambias lo que destacas: «hasta la abuela VINO» suena a que lo raro es que viniera, no quién vino.",
      "En «lo + adjetivo + que», el acento fuerte cae en el adjetivo y la voz sube en él: «no sabes lo DIFÍCIL que es». En «vaya si», la fuerza va en el verbo repetido: «¡vaya si se NOTA!». Y el «que» de eco empieza alto, con tono de sorpresa o de protesta: «¿Que fue casualidad?».",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu pronunciación. Úsalo para percibir el ritmo y compara tu grabación con la de una persona.",
    ],
    table: {
      caption: "Dónde cae el golpe de voz",
      head: ["Recurso", "Acento", "Ejemplo"],
      rows: [
        ["ni siquiera / hasta", "en lo destacado", "Ni siquiera dijeron GRACIAS."],
        ["lo + adjetivo + que", "en el adjetivo", "No sabes lo FINA que es."],
        ["vaya si", "en el verbo repetido", "¡Vaya si se PARECE!"],
        ["que de eco", "tono alto al inicio", "¿QUE no sabían nada?"],
      ],
    },
    perceive: {
      id: "c1-14-percepcion",
      type: "listen",
      prompt: "Escucha cada frase sin leer las opciones y decide qué destaca quien habla.",
      items: [
        {
          q: "¿Qué palabra recibe el énfasis?",
          options: ["siquiera", "nombre", "pusieron"],
          answer: 1,
          why: "El acento cae en lo destacado por la escala: el nombre.",
          audio: "Ni siquiera pusieron el nombre del pueblo en la etiqueta.",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué quiere decir quien habla?",
          options: [
            "Que el diseño no se parecía.",
            "Que el diseño se parecía muchísimo.",
            "Que no sabe si se parecía.",
          ],
          answer: 1,
          why: "«Vaya si» es un sí rotundo.",
          audio: "¿Que si se parecía? ¡Vaya si se parecía!",
          voice: "es-MX-m",
        },
        {
          q: "¿Qué hace la estructura de la frase?",
          options: ["Pondera un grado.", "Destaca un aspecto.", "Atribuye un dato."],
          answer: 0,
          why: "«Lo cansadas que…» habla de cuánto, no de qué.",
          audio: "No te imaginas lo cansadas que terminan las manos después de un día en el telar.",
          voice: "es-MX-f",
        },
        {
          q: "¿Con qué actitud empieza la pregunta?",
          options: ["Neutra, para informarse.", "Sorpresa y protesta ante lo dicho.", "Cortesía."],
          answer: 1,
          why: "El «que» de eco con tono alto repite lo dicho para protestar.",
          audio: "¿Que fue una casualidad? ¡Si les mandamos las fotos en enero!",
          voice: "es-MX-m",
        },
      ],
    },
    produce: [
      { text: "Hasta la abuela salió a la puerta a ver a los periodistas.", tip: "Acento en «abuela», no en «hasta».", voice: "es-MX-f" },
      { text: "No sabes lo fina que queda la lana después de cardarla.", tip: "Sube la voz en «fina».", voice: "es-MX-m" },
      { text: "¡Qué colores tan vivos!", tip: "Tono alto en «qué» y fuerza en «vivos».", voice: "es-MX-f" },
      { text: "Según la marca, todo fue un malentendido.", tip: "Pausa breve tras «marca» y tono neutro, sin ironía.", voice: "es-ES-f" },
    ],
    spelling: "«Aun» sin tilde equivale a «incluso» («aun así»); «aún» con tilde equivale a «todavía». En las exclamativas, «qué» y «cuánto» llevan siempre tilde.",
  },
  listening: {
    title: "La greca de doña Rufina",
    context: "En un taller de Teotitlán del Valle, cerca de Oaxaca, una periodista española entrevista a doña Rufina, tejedora, y a su nieto Emiliano, que publicó el video que comparaba los tapetes de la familia con una prenda de una marca de moda. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "p", name: "Clara", voice: "es-ES-f", role: "Periodista" },
      { id: "r", name: "Rufina", voice: "es-MX-f", role: "Tejedora" },
      { id: "e", name: "Emiliano", voice: "es-MX-m", role: "Nieto de Rufina" },
    ],
    script: [
      { speaker: "p", text: "Doña Rufina, la marca dice en su comunicado que la colección se inspira en varios pueblos de los Valles Centrales. ¿Qué le parece?" },
      { speaker: "r", text: "¿Que se inspira? Mire, esta greca la tejía mi abuela, y la abuela de mi abuela. No es de varios pueblos: es de esta casa. Y ni siquiera nos preguntaron. Ni una llamada, ni un correo, nada." },
      { speaker: "e", text: "Yo puse las dos fotos juntas en internet, el tapete de mi abuela y el suéter de la marca, y en dos días lo había visto medio México. Hasta mi maestra de la secundaria me escribió." },
      { speaker: "p", text: "La portavoz de la empresa afirma que el motivo es de dominio público y que no pertenece a nadie en concreto." },
      { speaker: "e", text: "Pues según los registros del municipio, mi abuela presentó ese diseño en una feria en 1987, con su nombre. La marca pretende que es un dibujo cualquiera, pero no lo es." },
      { speaker: "r", text: "Usted no se imagina lo difícil que es sacar esa greca bien derechita. Son tres semanas para un tapete de un metro. ¡La de noches que me he pasado aquí!" },
      { speaker: "p", text: "Ayer la marca reconoció que no había consultado a ninguna comunidad, aunque niega que el suéter sea una copia. ¿Les basta con eso?" },
      { speaker: "e", text: "No. Que reconozcan que no preguntaron sí que es un paso, pero no es suficiente. Nuestra abogada advierte que no firmemos nada hasta que nos ofrezcan un acuerdo por escrito." },
      { speaker: "p", text: "¿Y qué esperan de ese acuerdo?" },
      { speaker: "r", text: "Que pongan el nombre del pueblo en la etiqueta, que den crédito, y que una parte de lo que ganen vuelva aquí, a la escuela de tejido. Yo no quiero hacerme rica. Quiero que mis nietas sigan tejiendo." },
      { speaker: "e", text: "Y que dejen de llamarla «colección homenaje». Un homenaje se hace con la gente, no a sus espaldas." },
      { speaker: "p", text: "Última pregunta: ¿ha cambiado algo en el taller desde que se hizo viral el video?" },
      { speaker: "r", text: "¡Vaya si ha cambiado! Ahora vienen turistas todos los días, incluso de Europa. Eso sí que no lo esperábamos. Algo bueno tenía que salir de todo esto." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la entrevista completa sin abrir la transcripción. ¿Qué reclama la familia?",
        exercise: {
          id: "c1-14-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la idea general.",
          items: [
            {
              q: "¿Qué acusan a la marca de haber hecho?",
              options: [
                "Usar un diseño de la familia sin preguntar ni dar crédito.",
                "Comprar tapetes a un precio injusto.",
                "Contratar a tejedoras sin contrato.",
              ],
              answer: 0,
              why: "Doña Rufina dice que la greca es de su casa y que nadie les preguntó.",
            },
            {
              q: "¿Qué piden en el acuerdo?",
              options: [
                "Que la marca retire toda su colección del mercado.",
                "Una indemnización para la familia.",
                "Crédito, el nombre del pueblo y dinero para la escuela de tejido.",
              ],
              answer: 2,
              why: "Doña Rufina lo enumera al final.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota qué dice cada fuente y con qué verbo se presenta.",
        exercise: {
          id: "c1-14-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué prueba aporta Emiliano frente a la portavoz?",
              options: [
                "Una carta de la empresa de 1987.",
                "Un registro municipal de una feria de 1987 con el nombre de su abuela.",
                "El testimonio de su maestra.",
              ],
              answer: 1,
              why: "«Según los registros del municipio, mi abuela presentó ese diseño en una feria en 1987.»",
            },
            {
              q: "¿Qué reconoció la marca ayer?",
              options: [
                "Que el suéter es una copia.",
                "Que pagará a la familia.",
                "Que no consultó a ninguna comunidad.",
              ],
              answer: 2,
              why: "Reconoció que no consultó, pero niega que sea una copia.",
            },
            {
              q: "¿Qué advierte la abogada?",
              options: [
                "Que no firmen nada sin un acuerdo por escrito.",
                "Que el plazo para demandar ha vencido.",
                "Que no hablen con la prensa.",
              ],
              answer: 0,
              why: "«Advierte que no firmemos nada»: subjuntivo, orden.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en qué recurso usa cada frase. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "c1-14-escucha-notice",
          type: "match",
          prompt: "Relaciona cada frase de la entrevista con el recurso que usa.",
          pairs: [
            { left: "¿Que se inspira?", right: "que de eco que repite y protesta" },
            { left: "ni siquiera nos preguntaron", right: "mínimo de la escala que no se cumplió" },
            { left: "Hasta mi maestra de la secundaria me escribió", right: "extremo improbable de la escala" },
            { left: "La marca pretende que es un dibujo cualquiera", right: "verbo que presenta una afirmación sin fundamento" },
            { left: "niega que el suéter sea una copia", right: "verbo de rechazo con subjuntivo" },
            { left: "lo difícil que es sacar esa greca", right: "ponderación del grado" },
          ],
          why: "La familia intensifica y la periodista atribuye: dos voces, dos herramientas.",
        },
      },
    ],
  },
  reading: {
    title: "Una greca, dos versiones",
    genre: "Crónica periodística",
    frame: "Crónica publicada en un diario digital. El taller, la familia, la marca y las cifras son ficticios.",
    text: [
      "En Teotitlán del Valle, a media hora de la ciudad de Oaxaca, casi todas las casas tienen un telar de pedal en el patio. En la de doña Rufina Ruiz hay tres. Allí, entre madejas teñidas con grana cochinilla y añil, se teje desde hace al menos cuatro generaciones una greca escalonada que la familia considera propia. Hace tres semanas, esa greca apareció en un suéter de una conocida marca de moda internacional, dentro de la llamada «colección homenaje». Desde entonces, el taller no ha dejado de recibir visitas, llamadas y, según la familia, ni una sola disculpa.",
      "La polémica empezó con un video. Emiliano Ruiz, nieto de la tejedora, publicó en sus redes una imagen con el tapete de su abuela a un lado y el suéter de la marca al otro. El parecido, a juicio de los miles de usuarios que lo compartieron, era evidente. Incluso diseñadores de la capital opinaron que se trataba de una copia casi literal. En palabras de doña Rufina, «nos quitaron el dibujo y encima nos quitaron el nombre».",
      "La empresa tardó cinco días en responder. En un primer comunicado, su portavoz afirmó que la colección «se inspira en la riqueza textil de varios pueblos de los Valles Centrales» y sostuvo que el motivo pertenece al dominio público. Ayer, en una segunda nota, la marca reconoció que no había consultado a ninguna comunidad antes de lanzar la colección, aunque negó que el diseño fuera una copia. También matizó que el suéter no se ha vendido en México, sino solo en tiendas de Europa y Estados Unidos.",
      "La familia no comparte esa versión. Según los registros del municipio, que este diario ha podido consultar, Rufina Ruiz presentó un tapete con la misma greca en una feria artesanal de 1987, con su nombre y el de su taller. La marca pretende que se trata de un motivo geométrico cualquiera; los expertos consultados no lo ven tan claro. Para la antropóloga Marisol Cruz, especialista en textiles zapotecos, «la combinación de la greca con ese escalonado y esos colores es característica de muy pocas familias». No hay, sin embargo, ninguna ley que proteja de forma individual un diseño tradicional, de ahí que el caso sea sumamente difícil de llevar a los tribunales.",
      "La abogada del taller advierte que la familia no firmará ningún acuerdo que no reconozca por escrito el origen del diseño. Lo que piden, explica, es más simbólico que económico: que la etiqueta del suéter mencione el pueblo, que la marca dé crédito al taller y que una parte de los beneficios se destine a la escuela de tejido que la comunidad mantiene desde hace diez años. La empresa, al parecer, estudia la propuesta, aunque no ha querido confirmar ningún plazo.",
      "Mientras tanto, la vida del taller ha cambiado. Desde que el video se hizo viral, llegan cada día turistas que quieren ver tejer a doña Rufina, y hasta una galería de Ciudad de México le ha propuesto una exposición. Ella lo cuenta con una mezcla de cansancio y orgullo. «No sabe usted lo raro que es que te conozcan por algo que te robaron», dice mientras pasa la lanzadera. Después se ríe: «Pero, eso sí, nunca habíamos vendido tantos tapetes».",
    ],
    glossary: [
      { es: "añil", note: "tinte azul de origen vegetal" },
      { es: "lanzadera", note: "pieza del telar que lleva el hilo de un lado a otro" },
      { es: "madeja", note: "hilo recogido en vueltas iguales" },
    ],
    tasks: [
      {
        id: "c1-14-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la crónica.",
        items: [
          {
            q: "¿Qué ha cambiado en la postura de la marca entre el primer y el segundo comunicado?",
            options: [
              "Ha admitido que no consultó a ninguna comunidad, pero sigue negando la copia.",
              "Ha reconocido la copia y ha pedido perdón.",
              "Ha retirado la colección de todas las tiendas.",
            ],
            answer: 0,
            why: "Lo dice el tercer párrafo.",
          },
          {
            q: "¿Por qué el caso es difícil de llevar a los tribunales?",
            options: [
              "Porque la familia no tiene abogada.",
              "Porque la ley no protege de forma individual un diseño tradicional.",
              "Porque el suéter no se vendió en México.",
            ],
            answer: 1,
            why: "«No hay ninguna ley que proteja de forma individual un diseño tradicional.»",
          },
          {
            q: "¿Qué tono tiene el final de la crónica?",
            options: [
              "Indignado y amenazante.",
              "Neutro y técnico.",
              "Humano, con una mezcla de cansancio, orgullo y humor.",
            ],
            answer: 2,
            why: "Doña Rufina habla con cansancio y orgullo y termina riéndose.",
          },
        ],
      },
      {
        id: "c1-14-lectura-voces",
        type: "classify",
        prompt: "Clasifica cada fragmento según de quién es la voz que transmite.",
        categories: ["La marca", "La familia o sus aliados", "La periodista con datos propios"],
        items: [
          { text: "se inspira en la riqueza textil de varios pueblos de los Valles Centrales", cat: 0 },
          { text: "el suéter no se ha vendido en México", cat: 0 },
          { text: "nos quitaron el dibujo y encima nos quitaron el nombre", cat: 1 },
          { text: "es característica de muy pocas familias", cat: 1 },
          { text: "los registros del municipio, que este diario ha podido consultar", cat: 2 },
          { text: "casi todas las casas tienen un telar de pedal en el patio", cat: 2 },
        ],
      },
      {
        id: "c1-14-lectura-evaluacion",
        type: "open",
        prompt: "Analiza la crónica como texto periodístico.",
        items: [
          {
            prompt: "¿Es una crónica neutral? Explica en 80–100 palabras cómo atribuye la periodista la versión de la marca y la de la familia, y si alguna marca de distancia revela su postura.",
            model: "La periodista atribuye cada dato: la marca «afirmó», «sostuvo», «reconoció» y «negó que… fuera una copia», y la familia habla con citas literales y con «según los registros». Sin embargo, hay señales de postura. «La llamada “colección homenaje”» toma distancia del nombre que eligió la empresa, y «la marca pretende que se trata de un motivo cualquiera» presenta su argumento como poco fundado. Además, la periodista ha verificado el registro de la familia, pero no los argumentos de la marca. Es una crónica rigurosa, pero no del todo neutral.",
            checklist: [
              "Cito al menos tres verbos o marcas de atribución.",
              "Identifico al menos una marca de distancia.",
              "Doy una valoración argumentada, no solo una lista.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la crónica atribuye cada voz y dónde aparece el énfasis.",
      items: [
        { quote: "dentro de la llamada «colección homenaje»", note: "«La llamada» y las comillas: la denominación es de la marca, no de la periodista." },
        { quote: "según la familia, ni una sola disculpa", note: "Atribución con «según» y mínimo de la escala con «ni una sola»." },
        { quote: "Incluso diseñadores de la capital opinaron que se trataba de una copia casi literal.", note: "«Incluso» sitúa a los diseñadores en el extremo de la escala." },
        { quote: "la marca reconoció que no había consultado a ninguna comunidad", note: "«Reconocer» + indicativo: la fuente admite algo a su pesar." },
        { quote: "aunque negó que el diseño fuera una copia", note: "«Negar que» + subjuntivo." },
        { quote: "La marca pretende que se trata de un motivo geométrico cualquiera", note: "«Pretender que» + indicativo: afirmación que la periodista considera poco fundada." },
        { quote: "No sabe usted lo raro que es que te conozcan por algo que te robaron", note: "«Lo + adjetivo + que» en la cita de la tejedora." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según la intención, relación de formas y escritura guiada sobre las dos clases de la semana.",
    exercises: [
      {
        id: "c1-14-orden",
        type: "order",
        prompt: "Ordena las palabras para formar frases de la crónica y de la entrevista.",
        items: [
          {
            words: ["La", "empresa", "niega", "que", "el", "suéter", "sea", "una", "copia."],
            why: "«Negar que» + subjuntivo.",
          },
          {
            words: ["No", "sabes", "lo", "pesadas", "que", "son", "las", "madejas", "mojadas."],
            why: "«Lo» + adjetivo concordado + «que» + indicativo.",
          },
          {
            words: ["Según", "la", "abogada,", "el", "acuerdo", "llegará", "en", "mayo."],
            why: "«Según» + fuente para un dato.",
          },
        ],
      },
      {
        id: "c1-14-intencion",
        type: "context",
        prompt: "Elige la frase que corresponde a la intención descrita.",
        items: [
          {
            context: "Tu amiga te pregunta si la exposición de textiles te gustó. Te encantó.",
            q: "¿Qué respondes en un registro coloquial y enfático?",
            options: ["¡Vaya si me gustó!", "Según yo, me gustó.", "Supuestamente me gustó."],
            answer: 0,
            why: "«Vaya si» + indicativo es un sí rotundo.",
          },
          {
            context: "Escribes un informe y quieres dar tu propia opinión sobre el caso.",
            q: "¿Qué frase eliges?",
            options: [
              "Según mí, la marca debería dar crédito al taller.",
              "A mi juicio, la marca debería dar crédito al taller.",
              "Según que yo, la marca debería dar crédito al taller.",
            ],
            answer: 1,
            why: "Para la opinión propia, «a mi juicio» o «para mí».",
          },
          {
            context: "Te dicen que el dato viene de otras personas, pero no sabes si es cierto.",
            q: "¿Qué frase lo transmite?",
            options: [
              "Aparentemente, la marca ha ofrecido un acuerdo.",
              "La marca ha ofrecido un acuerdo, vaya si lo ha ofrecido.",
              "Al parecer, la marca ha ofrecido un acuerdo.",
            ],
            answer: 2,
            why: "«Al parecer» indica que el dato viene de otros.",
          },
        ],
      },
      {
        id: "c1-14-verbos",
        type: "match",
        prompt: "Relaciona cada verbo introductor con lo que hace la fuente.",
        pairs: [
          { left: "sostener", right: "mantiene su versión con insistencia" },
          { left: "reconocer", right: "admite algo que no quería decir" },
          { left: "desmentir", right: "declara falso algo que se ha dicho" },
          { left: "matizar", right: "corrige un poco la información anterior" },
          { left: "advertir que + subjuntivo", right: "da una orden o una instrucción" },
          { left: "pretender que + indicativo", right: "afirma algo sin fundamento" },
        ],
      },
      {
        id: "c1-14-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Recuerda una discusión pública reciente (en tu ciudad, tu trabajo, una red social). Escribe 60–80 palabras que atribuyan la versión de cada parte con tres verbos de postura distintos, un «según» y una marca de distancia.",
            model: "El ayuntamiento sostiene que el nuevo carril bici reducirá el tráfico, mientras que los comerciantes niegan que haya habido un estudio previo. Según la asociación de vecinos, se perdieron cuarenta plazas de aparcamiento. La concejala reconoció ayer que la consulta fue breve, aunque defendió el llamado «plan de movilidad sostenible» como la única opción posible.",
            checklist: [
              "Uso tres verbos de postura distintos con el modo correcto.",
              "Atribuyo un dato con «según».",
              "Incluyo una marca de distancia.",
            ],
          },
          {
            prompt: "Escribe la reacción de una de las partes en 50–70 palabras, en registro oral, con al menos tres recursos de énfasis: uno de escala, uno ponderativo y una exclamación.",
            model: "¿Que hubo consulta? ¡Si ni siquiera nos avisaron! Llevo veinte años con la tienda y nunca había visto algo así. No te imaginas lo difícil que es ahora que lleguen los proveedores. Hasta mis clientes de siempre se quejan. ¡Qué manera tan rara de ayudar al comercio!",
            checklist: [
              "Uso un recurso de escala, uno ponderativo y una exclamativa.",
              "La concordancia de «lo… que» es correcta.",
              "El registro es oral y coherente.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una crónica (230–320 palabras) sobre una polémica real o inventada entre dos partes: una empresa y un barrio, un club y sus socios, un artista y una institución. Presenta la versión de cada parte con verbos de postura precisos, distingue los datos que has comprobado de los que solo transmites e incluye al menos una cita con énfasis de alguno de los protagonistas.",
    context: "La crónica se publicará en la sección local de un diario digital. Los lectores conocen el conflicto por las redes sociales y quieren saber qué dice cada parte, qué es seguro y qué no, sin que el texto parezca un panfleto de ninguno de los dos lados.",
    steps: [
      "Haz una tabla con tres columnas: lo que dice una parte, lo que dice la otra y lo que tú has comprobado.",
      "Elige un verbo de postura para cada afirmación (afirma, sostiene, reconoce, niega, matiza) y decide el modo que pide.",
      "Redacta al menos tres párrafos: el conflicto, las dos versiones y lo que queda pendiente. Guarda el énfasis para las citas de los protagonistas.",
      "Revisa la crónica: corrige el modo tras «negar» y «reconocer», comprueba que «según» no lleva «que» y que no hay marcas de distancia que revelen una postura que no quieres mostrar.",
    ],
    useLanguage: [
      "afirma, sostiene, reconoce que + indicativo",
      "niega que + subjuntivo; advierte que + indicativo / subjuntivo",
      "según, en palabras de, a juicio de",
      "al parecer, supuestamente, el llamado",
      "ni siquiera, incluso, hasta",
      "lo + adjetivo + que, ¡qué… tan…!, sí que",
    ],
    model: [
      "Desde hace dos semanas, el mercado de abastos del barrio de San Antonio vive pendiente de un cartel. La empresa que gestiona el edificio anunció en marzo que los puestos cerrarán una hora antes a partir de mayo para abrir un espacio gastronómico por la noche. Según el anuncio, el cambio «revitalizará el mercado y atraerá a un público joven». Los comerciantes, en cambio, aseguran que nadie les consultó la decisión.",
      "La gerente de la empresa sostiene que el horario se discutió en una reunión de enero, a la que, afirma, se convocó a todos los puestos. La asociación de comerciantes niega que esa reunión tratara del horario y reconoce, eso sí, que asistieron solo seis de los cuarenta titulares. Este diario ha podido consultar el acta de aquella reunión, y en ella no aparece ninguna mención al cierre anticipado. Al parecer, la empresa prepara ya un segundo comunicado.",
      "Para los comerciantes más veteranos, el problema no es solo económico. «No sabes lo duro que es levantarse a las cinco y que te digan que estorbas por la tarde», dice Amparo Gil, que vende fruta desde hace treinta años. «Ni siquiera nos preguntaron. Hasta mis clientas se han enterado antes que yo». La abogada de la asociación advierte que no se firme ningún cambio de contrato hasta que la empresa presente un estudio de viabilidad. La reunión decisiva será el próximo martes, y ninguna de las dos partes se atreve a predecir el resultado.",
    ],
    checklist: [
      "Cada afirmación de las partes lleva un verbo de postura adecuado y el modo correcto.",
      "Distingo lo que he comprobado de lo que solo transmito.",
      "Las marcas de distancia son coherentes con la postura que quiero mostrar.",
      "El énfasis aparece en las citas de los protagonistas, no en mi voz de cronista.",
      "La crónica tiene al menos tres párrafos y termina con lo que queda pendiente.",
    ],
    words: [230, 320],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Informar de una polémica en un pódcast",
        prompt: "Presenta durante cuatro minutos, como si grabaras un pódcast de actualidad, la polémica de la greca o la de tu crónica. Cuenta qué dice cada parte con verbos precisos, señala qué está comprobado, reproduce con énfasis una cita de un protagonista y termina con tu opinión, claramente separada de la información.",
        prep: [
          "Anota tres verbos de postura distintos y el modo que pide cada uno.",
          "Prepara una cita de un protagonista con «ni siquiera», «lo… que» o «vaya si».",
          "Marca el paso a tu opinión con «a mi juicio» o «para mí».",
        ],
        seconds: 240,
        model: "Hoy hablamos de una greca. Una marca de moda lanzó la llamada «colección homenaje», y una familia de tejedoras de Oaxaca sostiene que el diseño es suyo. La empresa afirmó primero que el motivo era de dominio público; ayer reconoció que no consultó a nadie, aunque niega que sea una copia. Según los registros del municipio, la tejedora presentó ese diseño en 1987. Ella lo resume así: «Ni siquiera nos preguntaron». A mi juicio, más allá de los tribunales, dar crédito no cuesta nada.",
        selfCheck: [
          "Atribuyo cada dato a su fuente con el verbo y el modo adecuados.",
          "Separo con claridad la información de mi opinión.",
          "Pongo el énfasis en las citas, con el acento en lo destacado.",
        ],
      },
      {
        title: "Reaccionar ante un rumor",
        prompt: "Un compañero te dice: «Dicen que la empresa va a cerrar tu departamento». Reacciona con sorpresa usando el «que» de eco, pregúntale de dónde ha salido el rumor, distingue lo que se dice de lo que se sabe y cuenta lo que tú sabes con énfasis.",
        prep: [
          "Prepara una reacción con «¿Que…?».",
          "Ten a mano «¿según quién?», «al parecer» y «ni siquiera».",
        ],
        seconds: 150,
        model: "¿Que van a cerrar mi departamento? ¿Según quién? Al parecer lo dijo alguien en la cafetería, pero eso no es una fuente. Yo sé que ayer la directora reconoció que habrá cambios, pero ni siquiera ha hablado de cierres. ¡Si acaban de contratar a dos personas!",
        selfCheck: [
          "Uso el «que» de eco con la entonación adecuada.",
          "Pregunto por la fuente.",
          "Distingo lo que se dice de lo que sé.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase una noticia polémica y una lista de los verbos con que el periodista introduce cada voz.",
    cards: [
      {
        move: "Atribuye",
        task: "Cuenta a tu profesor una noticia polémica atribuyendo cada dato a su fuente; tu profesor te interrumpe preguntando «¿según quién?».",
        phrases: ["Según…", "Reconoció que…, pero niega que…"],
      },
      {
        move: "Enfatiza",
        task: "Describe algo que te haya impresionado esta semana con tres recursos de énfasis distintos y pide a tu profesor que valore el registro de cada uno.",
        phrases: ["No sabes lo… que…", "Hasta… / ni siquiera…"],
      },
      {
        move: "Distánciate",
        task: "Lee un titular y reescríbelo dos veces: una que transmita sin comentar y otra que tome distancia con «supuestamente» o «el llamado».",
        phrases: ["El llamado…", "Supuestamente…"],
      },
      {
        move: "Pregunta",
        task: "Pregúntale a tu profesor qué intensificadores coloquiales se usan en su variedad y cuáles le suenan de otro país.",
        phrases: ["¿Aquí se dice «la mar de»?", "¿Qué usarías tú?"],
      },
    ],
    bring: "Tu noticia con los verbos subrayados, la crónica revisada y, si quieres, la grabación del pódcast.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "«Not even» en «They didn't even call us» se dice…",
        options: ["Incluso no nos llamaron.", "Hasta no nos llamaron.", "Ni siquiera nos llamaron."],
        answer: 2,
        why: "El mínimo de la escala se expresa con «ni siquiera».",
      },
      {
        type: "choice",
        q: "¿Qué frase atribuye un dato, no una opinión?",
        options: [
          "Según el catastro, el taller ocupa doscientos metros.",
          "Para la tejedora, el diseño es parte de su familia.",
          "A juicio de la abogada, el caso es fuerte.",
        ],
        answer: 0,
        why: "«Según» presenta datos; «para» y «a juicio de», opiniones.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué hace la portavoz, según la frase?",
        options: [
          "Admite algo a su pesar.",
          "Rechaza una acusación.",
          "Da una orden.",
        ],
        answer: 1,
        why: "«Negó que…» + subjuntivo: rechazo.",
        audio: "La portavoz negó que la empresa hubiera recibido ninguna queja antes de lanzar la colección.",
        voice: "es-ES-f",
      },
      {
        type: "gap",
        q: "Me impresionó lo ___ (paciente) que es doña Rufina con sus nietas.",
        answers: [["paciente"]],
        hint: "El adjetivo concuerda con la persona de la que se habla; «paciente» no cambia en femenino.",
        why: "«Lo + adjetivo + que» con el adjetivo concordado e indicativo.",
      },
      {
        type: "gap",
        q: "La abogada advirtió que nadie ___ (hablar) con la prensa hasta el lunes.",
        answers: [["hablara", "hablase"]],
        hint: "Aquí «advertir que» funciona como una orden, en pasado: piensa en el modo.",
        why: "«Advertir que» + subjuntivo da una instrucción; marco pasado, imperfecto de subjuntivo.",
      },
      {
        type: "error",
        sentence: "Según mí, el acuerdo llegará pronto.",
        answers: ["Para mí, el acuerdo llegará pronto.", "A mi juicio, el acuerdo llegará pronto."],
        why: "«Según» no va con «mí»; la opinión propia se marca con «para mí» o «a mi juicio».",
      },
      {
        type: "error",
        sentence: "Es un trabajo muy finísimo.",
        answers: ["Es un trabajo finísimo.", "Es un trabajo muy fino."],
        why: "«-ísimo» no admite «muy».",
      },
      {
        type: "order",
        words: ["Hasta", "los", "turistas", "notaron", "lo", "parecidas", "que", "eran."],
        why: "«Hasta» de escala y «lo + adjetivo + que» con concordancia.",
      },
      {
        type: "open",
        prompt: "Escribe en 60–80 palabras una noticia breve sobre un desacuerdo entre una escuela y las familias de sus alumnos. Usa «según», un verbo de rechazo con subjuntivo, un verbo de reconocimiento con indicativo y una cita con un recurso de énfasis.",
        model: "Según la dirección del colegio, el comedor dejará de ofrecer menú vegetariano en septiembre. La asociación de familias niega que se haya consultado a nadie, y la directora reconoció ayer que la decisión se tomó en julio, sin reunión previa. «Ni siquiera nos mandaron un correo», lamenta Lucía Ortega, madre de dos alumnos. La asociación pedirá una reunión urgente.",
        checklist: [
          "Uso «según» con un dato.",
          "«Negar que» va con subjuntivo y «reconocer que» con indicativo.",
          "El énfasis aparece en una cita, no en mi voz.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Sitúo un hecho en el extremo de una escala con incluso, hasta, aun, ni siquiera y ni un.",
      "Pondero un grado con lo + adjetivo + que y la de… que, y afirmo con fuerza con sí que y vaya si, eligiendo el registro.",
      "Elijo el verbo introductor que refleja la postura de la fuente y el modo que pide.",
      "Atribuyo datos y opiniones con según, para, a juicio de, y me distancio con supuestamente, el llamado o al parecer.",
    ],
    review: [
      "Dentro de dos días, tapa la tabla «Un mismo dato, tres posturas» y reescribe una noticia del día con tres verbos distintos.",
      "Dentro de una semana, escucha una entrevista y apunta tres recursos de énfasis y el registro de cada uno.",
      "En la próxima clase, lee tu crónica y pide a tu profesor que señale dónde se nota tu postura.",
    ],
  },
  related: [
    { path: "/gramatica/intensificacion-y-enfasis-ni-siquiera-incluso", label: "Clase: Intensificación y énfasis: ni siquiera, incluso, vaya si" },
    { path: "/gramatica/polifonia-y-atribucion-segun-supuestamente-se", label: "Clase: Polifonía y atribución: según, supuestamente, se dice" },
  ],
};
