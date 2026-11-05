import type { Module } from "../../types";

/**
 * B2 · semana 9 · Autoestudio espejo de G143 (cuyo y relativos de posesión) y
 * G144 (referentes abstractos: lo cual, lo que, aquello que). Repaso autónomo
 * con un equipo de vecinos que graba una audioguía del casco histórico de La Plata.
 * Personas, asociación y casas son ficticias. Audio mediante síntesis.
 */
export const b2w09: Module = {
  id: "b2-09",
  level: "b2",
  week: 9,
  kind: "core",
  title: "La casa cuyo balcón mira a la diagonal, lo cual no es casualidad",
  subtitle: "Repaso de «cuyo» y de las alternativas para expresar posesión, y de «lo que», «lo cual», «por lo que», «lo difícil que es» y «aquello de»",
  stop: { place: "La Plata", country: "Argentina" },
  minutes: 120,
  newObjectives: [
    "b2.gram.g143",
    "b2.gram.g144",
    "b2.voc.w09-patrimonio-urbano",
    "b2.pron.w09-pausa-comentario",
    "b2.lis.w09-grabacion-audioguia",
    "b2.read.w09-guion-recorrido",
    "b2.wri.w09-ficha-patrimonio",
    "b2.spk.w09-guiar-recorrido",
    "b2.fun.w09-presentar-comentar",
    "b2.disc.w09-encadenar-comentarios",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo presentar personas y lugares por lo que les pertenece con «cuyo» o con alternativas naturales, y comentar hechos completos o encadenar sus consecuencias con «lo cual», «lo que» y «por lo que».",
    steps: [
      "Repasa en la teoría la concordancia de «cuyo» y cómo decir lo mismo al hablar sin «que su».",
      "Repasa «…, lo que», «…, lo cual», las preposiciones delante («por lo que», «con lo cual») y «lo difícil que es».",
      "Escucha al equipo que graba una audioguía de La Plata y lee el guion del recorrido.",
      "Escribe la ficha de un edificio con historia, revísala y guía un recorrido en voz alta.",
    ],
  },
  theory: {
    intro: "En clase viste cómo unir un nombre con lo que le pertenece y cómo referirte a ideas y hechos enteros que no tienen nombre. Aquí lo repasas en La Plata, una ciudad diseñada sobre el papel en 1882, cuyas diagonales y plazas cuentan una historia que unos vecinos quieren grabar en una audioguía.",
    parts: [
      {
        heading: "«Cuyo»: mira hacia delante",
        body: [
          "«Cuyo» une a un poseedor con lo que le pertenece: «el arquitecto cuyos planos se conservan». Va entre los dos nombres y concuerda con lo poseído, es decir, con el nombre que viene detrás, no con el poseedor. Por eso decimos «la ciudad cuyo trazado» (masculino, porque «trazado» lo es) y «el barrio cuyas casas» (femenino plural).",
          "Detrás de «cuyo» nunca va artículo: «cuyo el balcón» es incorrecto. Si el verbo pide preposición, esta va delante, como con los otros relativos: «la casa de cuyo patio salía música», «la familia para cuya tienda trabajaba».",
        ],
        table: {
          caption: "«Cuyo» concuerda con lo poseído",
          head: ["Poseedor", "Forma", "Lo poseído"],
          rows: [
            ["la escuela", "cuyo", "edificio"],
            ["el museo", "cuya", "colección"],
            ["la plaza", "cuyos", "árboles"],
            ["el teatro", "cuyas", "butacas"],
          ],
        },
        examples: [
          { es: "Visitamos una casa chorizo cuyas habitaciones dan todas al mismo patio.", note: "«Cuyas» concuerda con «habitaciones»." },
          { es: "Es la escuela en cuyo patio se plantó el primer jacarandá del barrio.", note: "Preposición + «cuyo»: «en cuyo patio»." },
          { es: "El arquitecto, cuya firma aparece en la fachada, murió antes de verla terminada.", note: "Con comas: explicativa." },
        ],
        tip: "Tapa el poseedor y lee solo «cuyo» + nombre: tienen que concordar entre sí, como un adjetivo y su sustantivo. Lo que viene detrás manda.",
      },
      {
        heading: "Escribir y hablar: alternativas correctas a «cuyo»",
        body: [
          "«Cuyo» es propio de textos cuidados: guías, artículos, fichas, discursos. Al hablar se usa poco, y lo natural es reformular. Puedes usar «del que / de la que / de quien» con otro orden («una casa de la que conozco la historia»), hacer dos frases («Es un edificio precioso. Su fachada es de 1890») o usar «que tiene» («una casa que tiene un balcón enorme»).",
          "Lo que no se considera correcto en la lengua cuidada es «que su»: «el vecino que su casa está restaurada». Tampoco confundas «cuyo» con «¿de quién?»: «cuyo» nunca pregunta.",
        ],
        examples: [
          { es: "Texto: «la pintora cuyos murales decoran la estación». Al hablar: «la pintora que hizo los murales de la estación».", note: "Misma información, otro registro." },
          { es: "Texto: «el club cuyo estadio se inauguró en 1907». Al hablar: «el club que inauguró su estadio en 1907».", note: "Con un verbo nuevo, «su» es correcto." },
        ],
        mistakes: [
          {
            wrong: "Es una arquitecta que su obra más famosa es la catedral.",
            right: "Es una arquitecta cuya obra más famosa es la catedral.",
            why: "«Que su» no es normativo; en un texto cuidado usa «cuya».",
          },
          {
            wrong: "La plaza, cuya fuentes son de mármol, está en el centro.",
            right: "La plaza, cuyas fuentes son de mármol, está en el centro.",
            why: "«Cuyo» concuerda con lo poseído: «fuentes» es femenino plural.",
          },
          {
            wrong: "¿Cuya es esta bicicleta?",
            right: "¿De quién es esta bicicleta?",
            why: "«Cuyo» no es interrogativo; para preguntar por el dueño se usa «¿de quién?».",
          },
        ],
      },
      {
        heading: "«…, lo que» y «…, lo cual»: comentar un hecho entero",
        body: [
          "Cuando quieres comentar todo lo dicho antes (un hecho completo, no un nombre), usas «lo que» o «lo cual» después de una coma: «Llovió toda la mañana, lo cual retrasó la grabación». El antecedente es la frase entera. «Que» solo no sirve, porque necesita un nombre al que referirse.",
          "Con una preposición delante encadenas consecuencias y reacciones: «por lo que» (y por eso), «con lo cual» (así que), «a lo que» (y a eso), «de lo que» (y de eso). La preposición depende del significado o del verbo que viene después: «…, a lo que respondió…», «…, de lo que se quejó…».",
          "No confundas este uso con «lo que» sin coma, que significa «la cosa que»: «Lo que más me gusta es el trazado».",
        ],
        table: {
          caption: "Comentar y encadenar",
          head: ["Forma", "Qué añade", "Ejemplo"],
          rows: [
            [", lo que / , lo cual", "comentario sobre el hecho", "Cerraron el museo, lo cual nos obligó a cambiar el recorrido."],
            [", por lo que", "consecuencia", "La diagonal estaba cortada, por lo que fuimos por la calle 7."],
            [", con lo cual", "consecuencia, más oral", "Se descargó el grabador, con lo cual perdimos la última toma."],
            [", a lo que", "reacción de alguien", "Le pedimos permiso, a lo que respondió que sí."],
          ],
        },
        mistakes: [
          {
            wrong: "El grabador se apagó, que nos obligó a repetir todo.",
            right: "El grabador se apagó, lo cual nos obligó a repetir todo.",
            why: "Para referirse a un hecho entero hace falta el neutro: «lo cual» o «lo que».",
          },
        ],
      },
      {
        heading: "Ideas sin nombre: «lo + adjetivo + que», «aquello que», «eso de que»",
        body: [
          "«Lo + adjetivo o adverbio + que» habla de la intensidad de algo: «No sabes lo bonita que está la fachada». Aquí el adjetivo concuerda con el nombre, aunque el artículo sea «lo»: «lo caras que son las entradas», «lo bien que lo explicó».",
          "«Aquello que» y «aquello de» + infinitivo se refieren a ideas lejanas en el tiempo o ya mencionadas hace mucho: «¿Te acuerdas de aquello de grabar de noche?». «Eso de que» + frase cita una idea ajena, a menudo con distancia o escepticismo: «No me creo eso de que nadie visita el museo». Y «lo que» + subjuntivo deja la elección abierta: «Graba lo que te parezca interesante».",
        ],
        examples: [
          { es: "Nadie imagina lo complicado que fue conseguir los permisos.", note: "«Lo + adjetivo + que»: intensidad." },
          { es: "Vuelvo a aquello que nos dijo el archivero: sin fuentes, no hay audioguía.", note: "«Aquello que»: idea lejana, retomada." },
          { es: "¿Quién inventó eso de que en La Plata todas las calles son iguales?", note: "«Eso de que»: idea ajena con distancia." },
        ],
        mistakes: [
          {
            wrong: "No sabes lo cansado que estamos.",
            right: "No sabes lo cansados que estamos.",
            why: "El adjetivo concuerda con el sujeto, aunque vaya detrás de «lo».",
          },
        ],
        tip: "Haz la prueba de la coma: si puedes poner «y eso» en lugar de «lo cual», estás comentando un hecho entero.",
      },
    ],
  },
  grammar: {
    intro: "Para «cuyo», mira lo que viene detrás. Para «lo cual», pregúntate si comentas un nombre o un hecho entero. Al final, reformula con libertad.",
    exercises: [
      {
        id: "b2-09-gramatica-cuyo",
        type: "choice",
        prompt: "Elige la forma correcta de «cuyo».",
        items: [
          { q: "Es la biblioteca ___ salas de lectura se abren los domingos.", options: ["cuya", "cuyas", "cuyos"], answer: 1, why: "Concuerda con «salas»: femenino plural." },
          { q: "El ingeniero ___ apellido lleva la avenida nunca vivió en la ciudad.", options: ["cuyo", "cuya", "que su"], answer: 0, why: "Concuerda con «apellido», masculino singular; «que su» no es normativo." },
          { q: "Es un edificio de ___ terraza se ve todo el bosque.", options: ["cuyo", "cuyas", "cuya"], answer: 2, why: "Preposición + «cuya»: concuerda con «terraza»." },
          { q: "Hablamos con una vecina ___ abuelos llegaron de Italia en 1885.", options: ["cuyos", "cuyas", "cuya"], answer: 0, why: "Concuerda con «abuelos», no con «vecina»." },
        ],
      },
      {
        id: "b2-09-gramatica-neutros",
        type: "gap",
        prompt: "Completa con «lo que», «lo cual», «por lo que», «con lo cual», «a lo que» o «lo + adjetivo + que».",
        items: [
          { q: "El archivo cerró por obras, ___ tuvimos que buscar las fotos en internet.", answers: [["por lo que", "con lo cual"]], why: "Consecuencia de un hecho entero." },
          { q: "Le preguntamos al portero si podíamos subir a la terraza, ___ contestó que no tenía la llave.", answers: [["a lo que"]], why: "«Contestar a algo»: reacción a la pregunta." },
          { q: "Se cortó la luz en plena grabación, ___ nos hizo perder una hora.", answers: [["lo cual", "lo que"]], why: "Comentario sobre el hecho completo." },
          { q: "No te imaginas ___ (caras) que son las visitas guiadas privadas.", answers: [["lo caras"]], why: "«Lo + adjetivo + que»: el adjetivo concuerda con «visitas»." },
          { q: "Puedes elegir ___ quieras para el final del recorrido.", answers: [["lo que"]], why: "«Lo que» + subjuntivo: elección abierta, sin coma." },
          { q: "Nos repitió ___ de no grabar con viento, y tenía razón.", answers: [["aquello", "eso"]], why: "«Aquello de» o «eso de» + infinitivo: idea ya conocida." },
        ],
      },
      {
        id: "b2-09-gramatica-registro",
        type: "classify",
        prompt: "Clasifica cada frase según su registro más adecuado.",
        categories: ["Texto escrito cuidado", "Conversación"],
        items: [
          { text: "La estación, cuyos andenes conservan el techo original, es hoy un centro cultural.", cat: 0, why: "«Cuyos» y la explicativa son propios del texto cuidado." },
          { text: "Es esa casa que tiene un balcón enorme, ¿viste?", cat: 1, why: "«Que tiene» es la alternativa oral natural." },
          { text: "El poeta, de cuya obra se conservan tres cuadernos, vivió en la calle 49.", cat: 0, why: "Preposición + «cuya»: registro escrito." },
          { text: "Hablamos con una señora. Su abuelo construyó la casa.", cat: 1, why: "Dos frases sencillas: alternativa oral correcta." },
          { text: "Se perdió la toma, con lo cual hubo que repetirla.", cat: 1, why: "«Con lo cual» es frecuente al hablar." },
          { text: "La obra se interrumpió en 1890, lo cual explica la fachada inacabada.", cat: 0, why: "«Lo cual» en una explicación escrita." },
        ],
      },
      {
        id: "b2-09-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error. Corrígelo.",
        items: [
          {
            sentence: "Es el museo que su colección de fósiles es famosa.",
            answers: ["Es el museo cuya colección de fósiles es famosa."],
            why: "«Que su» no es normativo: «cuya colección».",
          },
          {
            sentence: "Visitamos una casona cuyo jardines están abandonados.",
            answers: ["Visitamos una casona cuyos jardines están abandonados."],
            why: "«Cuyo» concuerda con «jardines»: masculino plural.",
          },
          {
            sentence: "Llegamos tarde, que el guía tuvo que empezar sin nosotros.",
            answers: ["Llegamos tarde, por lo que el guía tuvo que empezar sin nosotros.", "Llegamos tarde, con lo cual el guía tuvo que empezar sin nosotros."],
            why: "La consecuencia de un hecho entero se introduce con «por lo que» o «con lo cual».",
          },
          {
            sentence: "No sabes lo bonito que son los vitrales.",
            answers: ["No sabes lo bonitos que son los vitrales."],
            why: "El adjetivo concuerda con «vitrales».",
          },
        ],
      },
      {
        id: "b2-09-gramatica-reformular",
        type: "open",
        prompt: "Reformula cada texto. Compara con el modelo y revisa la lista: puede haber otras soluciones correctas.",
        items: [
          {
            prompt: "Texto de partida: «El teatro tiene una cúpula. La cúpula se restauró en 2015.» Únelo en una frase escrita con «cuyo» y después dilo como en una conversación, sin «cuyo» ni «que su».",
            model: "Escrito: «El teatro, cuya cúpula se restauró en 2015, reabre este mes». Oral: «Es el teatro que restauró la cúpula en 2015» o «Es ese teatro; le arreglaron la cúpula en 2015».",
            checklist: [
              "«Cuya» concuerda con «cúpula».",
              "La versión oral no usa «que su».",
              "Hay otras versiones orales posibles: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «La guía se enfermó. Por eso suspendimos la visita. Eso molestó a los turistas.» Encadénalo en una sola frase con dos referentes neutros.",
            model: "La guía se enfermó, por lo que suspendimos la visita, lo cual molestó a los turistas.",
            checklist: [
              "Uso coma antes de cada referente neutro.",
              "Distingo consecuencia («por lo que») y comentario («lo cual»).",
              "Puedo usar «con lo cual» o «lo que»: no es una respuesta única.",
            ],
          },
          {
            prompt: "Texto de partida: «Los vecinos dicen que la casa está embrujada. Yo no lo creo.» Reformúlalo con «eso de que» y añade un comentario con «lo + adjetivo + que».",
            model: "No me creo eso de que la casa está embrujada, aunque entiendo lo misteriosa que parece de noche.",
            checklist: [
              "«Eso de que» marca distancia con la idea ajena.",
              "El adjetivo tras «lo» concuerda con «casa».",
              "El comentario puede ser otro: no es una respuesta única.",
            ],
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de una ciudad, de sus edificios y de su historia.",
    groups: [
      {
        title: "La ciudad y su trazado",
        items: [
          { es: "el trazado", note: "forma en que están dispuestas las calles de una ciudad" },
          { es: "la diagonal", note: "avenida que cruza la cuadrícula en ángulo" },
          { es: "la manzana", note: "bloque de casas entre cuatro calles" },
          { es: "el casco histórico", note: "zona más antigua de una ciudad" },
          { es: "la rambla", note: "en La Plata, avenida ancha con un paseo central arbolado" },
          { es: "la cuadrícula", note: "red de calles que se cruzan en ángulo recto" },
        ],
      },
      {
        title: "Edificios y patrimonio",
        items: [
          { es: "la fachada", note: "parte exterior y principal de un edificio" },
          { es: "la casa chorizo", note: "casa alargada con habitaciones en fila junto a un patio (uso rioplatense)" },
          { es: "el edificio protegido", note: "edificio que la ley no permite demoler ni alterar" },
          { es: "la restauración", note: "trabajo que recupera el estado original" },
          { es: "la placa conmemorativa", note: "placa que recuerda a una persona o un hecho" },
          { es: "el vitral", note: "ventana de vidrios de colores que forman un dibujo" },
          { es: "estar en ruinas", note: "estar muy deteriorado o derrumbado" },
          { es: "poner en valor", note: "recuperar y dar a conocer algo por su importancia" },
        ],
      },
    ],
    exercises: [
      {
        id: "b2-09-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada palabra con su definición.",
        pairs: [
          { left: "el trazado", right: "forma en que están dispuestas las calles" },
          { left: "la manzana", right: "bloque de casas entre cuatro calles" },
          { left: "la fachada", right: "parte exterior y principal de un edificio" },
          { left: "el edificio protegido", right: "edificio que no se puede demoler ni alterar" },
          { left: "poner en valor", right: "recuperar algo y darlo a conocer" },
          { left: "el vitral", right: "ventana de vidrios de colores con un dibujo" },
        ],
      },
      {
        id: "b2-09-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada.",
        bank: ["casa chorizo", "placa conmemorativa", "diagonal", "en ruinas"],
        items: [
          { q: "Vivían en una ___ cuyas habitaciones daban a un patio largo.", answers: [["casa chorizo"]] },
          { q: "La ___ 74 cruza la ciudad de una punta a la otra.", answers: [["diagonal"]] },
          { q: "En la puerta hay una ___ que recuerda al primer maestro de la escuela.", answers: [["placa conmemorativa"]] },
          { q: "La estancia estaba ___ cuando la compró la municipalidad, lo cual encareció la obra.", answers: [["en ruinas"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "La pausa antes de «lo cual» y «lo que»",
    explanation: [
      "Cuando «lo cual» o «lo que» comentan un hecho entero, la coma se oye: la voz baja al terminar el hecho, hace una pausa breve y empieza el comentario con un tono un poco más bajo, como si añadieras una observación: «Se cortó la luz | lo cual nos obligó a parar».",
      "En cambio, «lo que» sin coma («lo que más me gusta») se pronuncia unido, sin pausa, como parte del mismo grupo. Al escuchar, esa pausa te ayuda a saber si alguien comenta un hecho o nombra una cosa.",
      "«Cuyo» se pronuncia con «y» como la de «yo», y su acento cae en la primera sílaba: «CU-yo», «CU-yas». El audio usa la síntesis del navegador: no certifica un acento regional ni evalúa tu pronunciación.",
    ],
    table: {
      caption: "Con pausa y sin pausa",
      head: ["Comentario (pausa)", "Nombre una cosa (sin pausa)"],
      rows: [
        ["Llovió todo el día, | lo que arruinó la visita.", "Lo que arruinó la visita fue la lluvia."],
        ["Perdimos el archivo, | lo cual fue un desastre.", "No entiendo lo que pasó con el archivo."],
      ],
    },
    perceive: {
      id: "b2-09-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y decide si «lo que» o «lo cual» comenta un hecho entero o nombra una cosa.",
      items: [
        {
          q: "¿Qué hace «lo que» en esta frase?",
          options: ["comenta un hecho entero, después de una pausa", "nombra una cosa, sin pausa"],
          answer: 0,
          why: "Se oye la pausa tras «diagonal»: «lo que» comenta el cierre completo.",
          audio: "Cerraron la diagonal, lo que complicó todo el recorrido.",
          voice: "es-AR-f",
        },
        {
          q: "¿Qué hace «lo que» en esta frase?",
          options: ["comenta un hecho entero, después de una pausa", "nombra una cosa, sin pausa"],
          answer: 1,
          why: "«Lo que más me sorprendió» es el sujeto: «la cosa que».",
          audio: "Lo que más me sorprendió fue el tamaño de la catedral.",
          voice: "es-AR-m",
        },
        {
          q: "¿Qué forma oyes?",
          options: ["cuyo", "cuya", "cuyas"],
          answer: 2,
          why: "Se oye «cuyas», que concuerda con «paredes».",
          audio: "Es una casona cuyas paredes conservan los murales originales.",
          voice: "es-CO-m",
        },
        {
          q: "¿Qué conector oyes después de la pausa?",
          options: ["por lo que", "lo cual", "con lo cual"],
          answer: 2,
          why: "Se oye «con lo cual», frecuente en la conversación.",
          audio: "Se descargó el micrófono, con lo cual tuvimos que repetir la toma.",
          voice: "es-AR-f",
        },
      ],
    },
    produce: [
      { text: "Se cortó la luz, lo cual nos obligó a grabar al día siguiente.", tip: "Baja la voz en «luz», haz la pausa y empieza el comentario un poco más grave.", voice: "es-AR-f" },
      { text: "Lo que más me gusta de La Plata son las diagonales.", tip: "Sin pausa después de «lo que»: todo es un grupo.", voice: "es-AR-m" },
      { text: "Es un arquitecto cuyos planos todavía se estudian.", tip: "«CU-yos», con el acento en la primera sílaba.", voice: "es-CO-m" },
      { text: "No te imaginas lo largas que son las ramblas.", tip: "Sube en «largas» para marcar la intensidad.", voice: "es-AR-f" },
    ],
    spelling: "«Cuyo» se escribe con «y»; no lleva tilde. «Lo cual» tampoco lleva tilde cuando es relativo; «¿cuál?» la lleva cuando pregunta.",
  },
  listening: {
    title: "Grabando la audioguía",
    context: "En La Plata, Marcela e Ignacio, de una asociación de vecinos, graban una audioguía del casco histórico con la ayuda de Camilo, técnico de sonido colombiano. Comentan cómo fue la primera jornada. Escucha primero sin transcripción. Las voces son sintéticas.",
    speakers: [
      { id: "m", name: "Marcela", voice: "es-AR-f", role: "Coordinadora de la audioguía" },
      { id: "i", name: "Ignacio", voice: "es-AR-m", role: "Voluntario y narrador" },
      { id: "c", name: "Camilo", voice: "es-CO-m", role: "Técnico de sonido" },
    ],
    script: [
      { speaker: "m", text: "Bueno, primer día terminado. No sé si salió todo lo bien que esperábamos, pero tenemos cuatro paradas grabadas." },
      { speaker: "i", text: "Cuatro de diez. Lo de la plaza fue un desastre: pasaron tres colectivos seguidos, por lo que repetimos la toma seis veces." },
      { speaker: "c", text: "Y en la sexta se me descargó el micrófono, con lo cual tuvimos que esperar a que cargara. Mañana traigo baterías de repuesto, no vaya a ser que pase lo mismo." },
      { speaker: "m", text: "Lo bueno es que la vecina de la calle 51 nos dejó grabar en su patio. Es la casa cuyo dueño original fue uno de los ingenieros del trazado." },
      { speaker: "i", text: "Sí, pero en el texto escribí «la casa que su dueño fue ingeniero», y Marcela me lo corrigió." },
      { speaker: "m", text: "Es que en una audioguía se nota. En la conversación puedes decir «la casa del ingeniero que trazó las calles», que suena natural, pero «que su» no." },
      { speaker: "c", text: "Otra cosa: en la catedral el eco es enorme, lo cual está bien para el ambiente, pero se pierden las palabras. Les propongo grabar el texto en el estudio y añadir el sonido de fondo después." },
      { speaker: "i", text: "Me parece bien. ¿Te acuerdas de aquello que nos dijo el archivero? Que la gente no escucha más de dos minutos por parada." },
      { speaker: "m", text: "Sí, y no me creo eso de que a nadie le interesan las fechas. Lo que no hay que hacer es poner veinte seguidas." },
      { speaker: "c", text: "Pues mañana arrancamos por la estación, cuyos andenes son preciosos para grabar. Eso sí, temprano, antes de que llegue la gente." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la conversación completa sin transcripción. ¿Cómo fue la jornada y qué deciden?",
        exercise: {
          id: "b2-09-escucha-gist",
          type: "choice",
          prompt: "Reconstruye el sentido general.",
          items: [
            {
              q: "¿Cómo fue la primera jornada de grabación?",
              options: [
                "Grabaron las diez paradas sin problemas.",
                "Grabaron algunas paradas, con varios problemas técnicos.",
                "No pudieron grabar nada por la lluvia.",
              ],
              answer: 1,
              why: "Tienen cuatro de diez paradas y hubo ruido, una batería descargada y eco.",
            },
            {
              q: "¿Qué cambio propone Camilo para la catedral?",
              options: [
                "Grabar el texto en el estudio y añadir el sonido de fondo después.",
                "Quitar la catedral del recorrido.",
                "Grabar de noche para evitar el eco.",
              ],
              answer: 0,
              why: "El eco hace que se pierdan las palabras.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y responde sin mirar la transcripción.",
        exercise: {
          id: "b2-09-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Por qué repitieron seis veces la toma de la plaza?",
              options: [
                "Porque Ignacio se equivocaba con las fechas.",
                "Porque había mucho eco.",
                "Porque pasaron varios colectivos seguidos.",
              ],
              answer: 2,
              why: "«Pasaron tres colectivos seguidos, por lo que repetimos la toma seis veces».",
            },
            {
              q: "¿Quién fue el dueño original de la casa de la calle 51?",
              options: [
                "Uno de los ingenieros del trazado de la ciudad.",
                "El archivero de la asociación.",
                "Un técnico de sonido.",
              ],
              answer: 0,
              why: "«Es la casa cuyo dueño original fue uno de los ingenieros del trazado».",
            },
            {
              q: "¿Qué les dijo el archivero?",
              options: [
                "Que las fechas no interesan a nadie.",
                "Que la gente no escucha más de dos minutos por parada.",
                "Que la estación está cerrada por obras.",
              ],
              answer: 1,
              why: "Ignacio lo recuerda con «aquello que nos dijo el archivero».",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en lo que hace cada fragmento. Relaciona y consulta la transcripción solo después.",
        exercise: {
          id: "b2-09-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con su función.",
          pairs: [
            { left: "por lo que repetimos la toma seis veces", right: "consecuencia de un hecho entero" },
            { left: "la casa cuyo dueño original fue uno de los ingenieros", right: "posesión en registro cuidado" },
            { left: "lo cual está bien para el ambiente", right: "comentario sobre un hecho" },
            { left: "aquello que nos dijo el archivero", right: "idea lejana que se retoma" },
            { left: "eso de que a nadie le interesan las fechas", right: "idea ajena citada con distancia" },
          ],
          why: "«Cuyo» une poseedor y poseído; los neutros se refieren a hechos e ideas sin nombre.",
        },
      },
    ],
  },
  reading: {
    title: "Recorrido por el casco fundacional",
    genre: "Guion de audioguía",
    frame: "Texto de las tres primeras paradas de una audioguía preparada por una asociación de vecinos de La Plata. Asociación y casas particulares son ficticias.",
    text: [
      "Bienvenidos a La Plata, una ciudad cuyo plano se dibujó antes de que existiera una sola casa. En 1882, cuando Buenos Aires pasó a ser la capital del país, la provincia necesitó una nueva capital, y un equipo de ingenieros y arquitectos la proyectó desde cero. El resultado es una cuadrícula perfecta atravesada por diagonales, lo cual permite cruzar la ciudad en línea recta y, según dicen los platenses, perderse con una facilidad sorprendente.",
      "Nuestra primera parada es la plaza principal, en cuyos lados se levantan los dos poderes de la época: la catedral y el palacio municipal. No es casualidad. Los fundadores quisieron que la Iglesia y el gobierno se miraran de frente, por lo que el eje que une los dos edificios es también el centro simbólico de la ciudad. Observen lo alta que es la catedral: sus torres no se terminaron hasta 1999, más de un siglo después de que se pusiera la primera piedra.",
      "Caminamos ahora por la calle 51 hasta una casa chorizo de fachada sencilla. Sus primeros dueños fueron una familia de ingenieros italianos, cuyos hijos siguieron viviendo aquí durante setenta años. La casa estuvo a punto de ser demolida en los años noventa, a lo que los vecinos respondieron con una campaña que terminó con su declaración como edificio protegido. Hoy se puede visitar el patio, cuyas baldosas son las originales.",
      "La tercera parada es la estación, cuyos andenes conservan el techo de hierro traído de Europa. Durante décadas el tren conectó la ciudad con la capital del país, con lo cual muchos trabajadores vivían aquí y viajaban cada día. Cuando el servicio se redujo, el edificio quedó abandonado, lo que provocó la protesta de quienes lo consideraban parte de su historia.",
      "Antes de seguir, una advertencia. Quizá hayan oído eso de que en La Plata todas las calles son iguales. No es del todo cierto: cada manzana tiene sus detalles, y lo interesante es descubrirlos. Les pedimos que se fijen en aquello que no aparece en las guías: una placa, un vitral, un jacarandá plantado por un vecino cuyo nombre nadie recuerda.",
    ],
    glossary: [
      { es: "proyectar", note: "diseñar un edificio o una ciudad antes de construirlos" },
      { es: "el eje", note: "línea imaginaria que organiza un espacio" },
      { es: "las baldosas", note: "piezas de cerámica o piedra que cubren el suelo" },
    ],
    tasks: [
      {
        id: "b2-09-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido el guion.",
        items: [
          {
            q: "¿Qué tiene de particular el origen de La Plata?",
            options: [
              "Que creció alrededor de un puerto antiguo.",
              "Que se diseñó completa antes de construirse.",
              "Que la fundaron inmigrantes italianos.",
            ],
            answer: 1,
            why: "Primer párrafo: «una ciudad cuyo plano se dibujó antes de que existiera una sola casa».",
          },
          {
            q: "¿Qué pasó con la casa de la calle 51 en los años noventa?",
            options: [
              "Los vecinos impidieron que la demolieran.",
              "La convirtieron en estación.",
              "La familia italiana la vendió a la municipalidad.",
            ],
            answer: 0,
            why: "Tercer párrafo: la campaña terminó con su declaración como edificio protegido.",
          },
          {
            q: "¿Qué piden los autores al final?",
            options: [
              "Que los visitantes no se salgan del recorrido.",
              "Que lean una guía antes de venir.",
              "Que se fijen en los detalles que no salen en las guías.",
            ],
            answer: 2,
            why: "Último párrafo: «aquello que no aparece en las guías».",
          },
        ],
      },
      {
        id: "b2-09-lectura-referentes",
        type: "match",
        prompt: "Relaciona cada referente del texto con aquello a lo que se refiere.",
        pairs: [
          { left: "cuyo plano", right: "el plano de La Plata" },
          { left: "lo cual permite cruzar la ciudad en línea recta", right: "que haya diagonales en la cuadrícula" },
          { left: "por lo que el eje", right: "que los fundadores quisieran enfrentar los dos edificios" },
          { left: "cuyos hijos", right: "los hijos de la familia de ingenieros" },
          { left: "a lo que los vecinos respondieron", right: "que la casa estuviera a punto de ser demolida" },
        ],
      },
      {
        id: "b2-09-lectura-interpretacion",
        type: "open",
        prompt: "Interpreta el texto con tus palabras.",
        items: [
          {
            prompt: "El guion termina con «un vecino cuyo nombre nadie recuerda». En 70–90 palabras, explica qué idea del patrimonio transmite ese final y si te parece un buen cierre para una audioguía. Usa «cuyo» y un referente neutro.",
            model: "El final sugiere que el patrimonio no lo forman solo los grandes edificios, sino también gestos anónimos, como el de un vecino cuyo nombre se perdió. Me parece un buen cierre, lo cual no significa que sea el único posible: obliga al visitante a mirar de otra manera y a buscar detalles por su cuenta. Además, después de tantas fechas, cambia el tono y deja una imagen más humana.",
            checklist: [
              "Explico la idea de patrimonio del final.",
              "Doy mi valoración con una razón.",
              "Uso «cuyo» y un referente neutro con coma.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo el guion presenta lo que pertenece a cada lugar y comenta los hechos sin empezar frases nuevas.",
      items: [
        { quote: "en cuyos lados se levantan los dos poderes de la época", note: "Preposición + «cuyos», que concuerda con «lados»." },
        { quote: "por lo que el eje que une los dos edificios es también el centro simbólico", note: "«Por lo que» presenta la consecuencia de la decisión de los fundadores." },
        { quote: "Observen lo alta que es la catedral", note: "«Lo + adjetivo + que»: «alta» concuerda con «catedral»." },
        { quote: "lo que provocó la protesta de quienes lo consideraban parte de su historia", note: "«Lo que» con coma comenta el abandono entero." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el registro, una recuperación de semanas anteriores y escritura breve.",
    exercises: [
      {
        id: "b2-09-orden",
        type: "order",
        prompt: "Ordena las palabras para formar la frase completa.",
        items: [
          { words: ["Es", "la", "escritora", "cuyas", "cartas", "donó", "la", "familia."], why: "«Cuyas» concuerda con «cartas»." },
          { words: ["Llovió", "toda", "la", "tarde,", "por", "lo", "que", "cancelamos", "el", "recorrido."], why: "«Por lo que» introduce la consecuencia." },
          { words: ["No", "sabes", "lo", "lejos", "que", "queda", "el", "observatorio."], why: "«Lo + adverbio + que»: intensidad." },
        ],
      },
      {
        id: "b2-09-registro",
        type: "context",
        prompt: "Elige la versión más adecuada para cada situación.",
        items: [
          {
            context: "Escribes la ficha de un museo para una guía impresa.",
            q: "¿Qué frase eliges?",
            options: [
              "Es un museo que su colección de meteoritos es única.",
              "Es un museo cuya colección de meteoritos es única.",
              "Es un museo que tiene una colección, la cual sus meteoritos son únicos.",
            ],
            answer: 1,
            why: "Texto cuidado: «cuya colección».",
          },
          {
            context: "Le cuentas a un amigo, tomando un café, qué casa visitaste.",
            q: "¿Qué frase suena más natural?",
            options: [
              "Fui a la casa de la que te hablé, la del ingeniero que hizo las diagonales.",
              "Fui a la casa cuyo propietario original trazó las diagonales.",
              "Fui a la casa que su dueño hizo las diagonales.",
            ],
            answer: 0,
            why: "Al hablar, «del que / de la que» y una aclaración suenan naturales; «que su» no es normativo.",
          },
          {
            context: "Explicas por qué tu grupo llegó tarde a la visita guiada.",
            q: "¿Qué frase encadena bien los hechos?",
            options: [
              "Cortaron la avenida, que el colectivo tardó una hora.",
              "Cortaron la avenida, cuyo colectivo tardó una hora.",
              "Cortaron la avenida, con lo cual el colectivo tardó una hora.",
            ],
            answer: 2,
            why: "«Con lo cual» presenta la consecuencia de un hecho entero.",
          },
        ],
      },
      {
        id: "b2-09-recuperacion",
        type: "gap",
        prompt: "Recupera las semanas anteriores en el contexto del recorrido.",
        items: [
          { q: "Es la plaza en ___ se reunían los vecinos los domingos. (reunirse en)", answers: [["la que", "la cual"]], why: "Relativo con preposición (semana 8)." },
          { q: "La catedral es más alta de ___ parece desde la plaza.", answers: [["lo que"]], why: "Comparación con una impresión (semana 8)." },
          { q: "En cuanto ___ (abrir) la estación, grabaremos la cuarta parada.", answers: [["abran"]], why: "Temporal con futuro: subjuntivo (semana 7)." },
          { q: "Por mucho ruido que ___ (haber), terminaremos la grabación hoy.", answers: [["haya"]], why: "Concesión intensa: subjuntivo (semana 6)." },
        ],
      },
      {
        id: "b2-09-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Presenta en 40–60 palabras a una persona que admiras de dos maneras: una frase formal con «cuyo» y la misma idea como se la dirías a un amigo.",
            model: "Formal: «Admiro a Lucía Ferreyra, una arquitecta cuyos proyectos devolvieron la vida a tres edificios abandonados de mi ciudad». Con un amigo: «Me encanta Lucía Ferreyra, la arquitecta que arregló esos edificios abandonados del centro, ¿sabes quién te digo? La que restauró esos tres».",
            checklist: [
              "«Cuyo» concuerda con lo poseído.",
              "La versión oral no usa «que su».",
              "Las dos versiones transmiten la misma información.",
            ],
          },
          {
            prompt: "Cuenta en 40–60 palabras un pequeño problema reciente en tres pasos encadenados: un hecho, «…, lo que…» y «…, por lo que…».",
            model: "El martes perdí las llaves en el parque, lo que me puso de muy mal humor. Mi compañera de piso estaba de viaje, por lo que tuve que esperar dos horas en un café hasta que llegó el cerrajero. Al final, el cerrajero me cobró más de lo que esperaba.",
            checklist: [
              "Uso coma antes de cada referente neutro.",
              "«Lo que» comenta y «por lo que» presenta una consecuencia.",
              "El texto cuenta un problema concreto.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Escribe la ficha de un edificio o un lugar con historia de tu ciudad para la web de una asociación de patrimonio (200–280 palabras). Explica a quién perteneció, qué conserva, qué le pasó y por qué vale la pena visitarlo.",
    context: "La ficha la leerán visitantes que no conocen la ciudad. El texto debe ser cuidado pero fácil de seguir, y ayudar a mirar el lugar con otros ojos.",
    steps: [
      "Elige el lugar y anota tres cosas que le pertenecen (dueños, partes, objetos) y tres hechos de su historia con sus consecuencias.",
      "Organiza la ficha en tres párrafos: origen y dueños, qué conserva, qué le pasó y por qué visitarlo.",
      "Usa «cuyo» al menos dos veces, con concordancia distinta, y al menos tres referentes neutros («lo cual», «por lo que», «lo + adjetivo + que»…).",
      "Revisa la ficha: corrige cualquier «que su», comprueba que cada «cuyo» concuerda con lo que viene detrás y que hay coma antes de cada «lo cual».",
    ],
    useLanguage: [
      "cuyo, cuya, cuyos, cuyas + sustantivo",
      "preposición + cuyo («en cuyo patio»)",
      "…, lo que / …, lo cual",
      "…, por lo que / …, con lo cual / …, a lo que",
      "lo + adjetivo + que; aquello que; eso de que",
      "la fachada, el edificio protegido, la restauración, poner en valor",
    ],
    model: [
      "El antiguo Mercado de Abasto de mi barrio es un edificio de 1912 cuya estructura de hierro llegó en barco desde Bélgica. Durante cincuenta años fue el centro de la vida del barrio: allí compraban sus abuelos y allí trabajaban muchas familias de inmigrantes, cuyos apellidos todavía se leen en algunos puestos. Era tan importante que los vecinos organizaban sus horarios según la hora en que abría.",
      "El edificio conserva casi intactos la cúpula central, los azulejos de los puestos y un reloj cuyas agujas se detuvieron, según cuentan, el día del cierre. Fíjense en lo altas que son las columnas: fueron pensadas para que el aire circulara y los alimentos se mantuvieran frescos sin heladeras.",
      "En 1978 el mercado cerró, lo cual dejó a decenas de personas sin trabajo y al barrio sin su punto de encuentro. El edificio estuvo abandonado veinte años, por lo que muchos vecinos dieron por hecho que lo derribarían. Sin embargo, una asociación consiguió que lo declararan edificio protegido, a lo que siguió una larga restauración. Hoy alberga un mercado de productores y una biblioteca. No crean eso de que es solo un lugar para comprar: vale la pena sentarse en la galería superior y mirar aquello que el tiempo no cambió.",
    ],
    checklist: [
      "Uso «cuyo» al menos dos veces y cada uno concuerda con lo poseído.",
      "No uso «que su» en ningún momento.",
      "Comento al menos dos hechos enteros con «lo cual», «lo que» o «por lo que».",
      "Incluyo «lo + adjetivo + que» o «aquello que» con concordancia correcta.",
      "La ficha explica por qué vale la pena visitar el lugar.",
    ],
    words: [200, 280],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un texto leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Guiar dos paradas de un recorrido",
        prompt: "Eres guía de un recorrido a pie por tu ciudad. Presenta dos lugares: a quién pertenecieron, qué conservan y qué les pasó. Al hablar, usa alternativas naturales a «cuyo» y comenta los hechos con «lo cual» o «por lo que».",
        prep: [
          "Anota para cada lugar un dueño, un detalle y un hecho con su consecuencia.",
          "Prepara una frase con «lo + adjetivo + que» para llamar la atención del grupo.",
        ],
        seconds: 150,
        model: "Estamos frente al teatro. Lo construyó una familia de comerciantes, la de los Ferrari, que lo inauguró en 1890. Miren lo alto que es el techo. En los años setenta se incendió, lo cual casi acaba con el edificio, por lo que tuvieron que reconstruir la sala entera.",
        selfCheck: [
          "No uso «que su».",
          "Hago una pausa antes de cada «lo cual».",
          "Uso al menos un «lo + adjetivo + que» con concordancia.",
        ],
      },
      {
        title: "Responder a un visitante escéptico",
        prompt: "Un visitante te interrumpe: «¿Y para qué conservar casas viejas? Es mejor construir edificios nuevos». Pregúntale qué le parecería si derribaran un lugar importante para él, responde a sus argumentos y comenta las consecuencias de perder el patrimonio.",
        prep: [
          "Prepara una pregunta personal para el visitante.",
          "Prepara una frase con «eso de que» para retomar su idea.",
        ],
        seconds: 180,
        model: "Entiendo eso de que la ciudad necesita viviendas nuevas. Pero, dígame: ¿qué sentiría si derribaran la casa en la que creció? Cuando se pierde un edificio, se pierde también lo que la gente vivió allí, lo cual no se recupera con ninguna obra nueva.",
        selfCheck: [
          "Hago al menos una pregunta real al visitante.",
          "Retomo su idea con «eso de que».",
          "Comento consecuencias con referentes neutros.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva estas tarjetas a tu próxima clase para practicar con tu profesor.",
    cards: [
      {
        move: "Presenta",
        task: "Presenta a tu profesor un lugar de tu ciudad en una frase formal con «cuyo» y después dilo como a un amigo. Pídele que elija la versión más natural para una conversación.",
        phrases: ["Es un lugar cuyo…", "Dicho de otra manera:…"],
      },
      {
        move: "Encadena",
        task: "Cuenta un día complicado en cinco frases encadenadas con «lo cual», «por lo que» y «con lo cual». Tu profesor te interrumpe con preguntas.",
        phrases: ["…, lo cual me obligó a…", "…, por lo que…"],
      },
      {
        move: "Cuestiona",
        task: "Menciona una idea común que no te convence («eso de que…») y pide a tu profesor su opinión.",
        phrases: ["No me creo eso de que…", "¿Tú qué piensas?"],
      },
    ],
    bring: "Tu ficha revisada y una foto de un lugar con historia del que puedas hablar.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "Elige la forma correcta: «Es un pueblo ___ calles todavía son de tierra».",
        options: ["cuyo", "cuyas", "que sus"],
        answer: 1,
        why: "«Cuyas» concuerda con «calles».",
      },
      {
        type: "choice",
        q: "¿Qué frase comenta un hecho entero?",
        options: [
          "Lo que más me gustó fue el puerto.",
          "Quiero ver lo que hay detrás de esa puerta.",
          "Perdimos el último tren, lo que nos obligó a dormir en la estación.",
        ],
        answer: 2,
        why: "Con coma, «lo que» se refiere a todo el hecho anterior.",
      },
      {
        type: "listen",
        q: "Escucha. ¿Qué expresa el conector?",
        options: ["Una consecuencia", "Una posesión"],
        answer: 0,
        why: "«Por lo que» introduce la consecuencia del cierre.",
        audio: "El museo cerró antes de hora, por lo que no pudimos ver la última sala.",
        voice: "es-CO-m",
      },
      {
        type: "gap",
        q: "Visitamos al escultor en ___ taller se fundió la estatua de la plaza.",
        answers: [["cuyo"]],
        hint: "Preposición + relativo de posesión",
        why: "«En cuyo taller»: concuerda con «taller».",
      },
      {
        type: "gap",
        q: "No te imaginas lo ___ (lento) que van los trenes los domingos.",
        answers: [["lentos"]],
        hint: "El adjetivo concuerda con el sujeto",
        why: "«Lo + adjetivo + que»: «lentos» concuerda con «trenes».",
      },
      {
        type: "error",
        sentence: "Conocimos a una señora que su padre fundó la biblioteca.",
        answers: ["Conocimos a una señora cuyo padre fundó la biblioteca."],
        why: "«Que su» no es normativo: «cuyo padre».",
      },
      {
        type: "error",
        sentence: "El guía habló durante una hora, que aburrió a los niños.",
        answers: ["El guía habló durante una hora, lo cual aburrió a los niños.", "El guía habló durante una hora, lo que aburrió a los niños."],
        why: "Para comentar un hecho entero hace falta «lo cual» o «lo que».",
      },
      {
        type: "order",
        words: ["Le", "pedimos", "la", "llave,", "a", "lo", "que", "respondió", "que", "no."],
        why: "«A lo que» presenta la reacción a la petición.",
      },
      {
        type: "open",
        prompt: "Explica en 60–80 palabras a otro estudiante con qué concuerda «cuyo» y qué alternativas tiene al hablar. Da un ejemplo escrito y otro oral.",
        model: "«Cuyo» concuerda con lo poseído, es decir, con el nombre que viene detrás, no con el poseedor: «la escuela cuyos maestros…». Es propio de textos cuidados. Al hablar es más natural decir «la escuela de la que te hablé, la de los maestros jóvenes» o hacer dos frases: «Es una escuela. Sus maestros son jóvenes». Lo que conviene evitar es «la escuela que sus maestros…».",
        checklist: [
          "Explico que «cuyo» concuerda con lo poseído.",
          "Doy un ejemplo escrito con «cuyo».",
          "Propongo una alternativa oral correcta y advierto contra «que su».",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Uso «cuyo, cuya, cuyos, cuyas» concordando con lo poseído, también detrás de una preposición.",
      "Al hablar, reformulo la posesión con «del que», «de quien», dos frases o «que tiene», sin «que su».",
      "Comento un hecho entero con «…, lo que» o «…, lo cual» y encadeno consecuencias con «por lo que» o «con lo cual».",
      "Hablo de ideas con «lo + adjetivo + que», «aquello que» y «eso de que».",
    ],
    review: [
      "Dentro de dos días, tapa la columna «Lo poseído» de la tabla de «cuyo» y escribe un ejemplo nuevo para cada fila.",
      "Dentro de una semana, busca en una noticia dos «lo cual» o «por lo que» y di a qué hecho se refieren.",
      "En la próxima clase, lee tu ficha y pide a tu profesor que señale un «cuyo» que al hablar sonaría demasiado formal.",
    ],
  },
  related: [
    { path: "/gramatica/cuyo-a-os-as-y-relativos", label: "Clase: Cuyo/a/os/as y relativos de posesión" },
    { path: "/gramatica/referentes-abstractos-lo-cual-lo-que", label: "Clase: Referentes abstractos: lo cual, lo que, aquello que" },
  ],
};
