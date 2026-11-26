import { ejercicioPages } from "./actividades";
import { ejercicioErrores } from "./ejercicio-errores";
import { livePath } from "../seo-prune";

/**
 * SEO plan, step 6 (docs/seo-plan/05_BRIEFS): hand-written rewrites for the priority URLs.
 *
 * Each entry belongs to one batch (`lote`, at most 20 URLs) and follows its brief: the
 * search-facing title and description, and sections written for that one page, with
 * the element no other page of the site or of the measured top 10 has. Generated copy
 * stays on the page; these sections come first so the page opens with its own text.
 *
 * `{n}` in title, description, h1 or intro is replaced with the page's class count, so a
 * number in the copy can never drift from the catalogue.
 */

export type RewriteBlock =
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; caption: string; head: string[]; rows: string[][] };

export type RewriteSection = { id: string; title: string; intro?: string; blocks: RewriteBlock[] };

export type PageRewrite = {
  lote: string;
  title?: string;
  description?: string;
  h1?: string;
  intro?: string;
  sections: RewriteSection[];
  /** Shown before the page's generated questions, and in its FAQPage schema. */
  faq?: { question: string; answer: string }[];
};

const syntheticVoices = {
  question: "¿Los audios son grabaciones de hablantes nativos?",
  answer: "No. Son voces sintéticas que leen guiones escritos para cada clase. Los personajes son de distintos países, pero no son grabaciones de personas de esos países: para trabajar acentos reales, combínalos con material auténtico.",
};

const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];
/** One row per exercise, easiest level first, linking the live URL (a consolidated exercise lives on its mini-app). */
const exerciseRows = [...ejercicioPages]
  .sort((a, b) => levelOrder.indexOf(a.level.slice(0, 2)) - levelOrder.indexOf(b.level.slice(0, 2)) || a.exercise.title.localeCompare(b.exercise.title, "es"))
  .map((page) => [`[${page.exercise.title.replace(/^Ejercicio( [A-C][12](–[A-C][12])?)?: /, "")}](${livePath(page.path)})`, page.level, String(page.exercise.items.length), ejercicioErrores[page.slug] ?? ""]);

const rewrites: Record<string, PageRewrite> = {
  "/material-ele/fichas": {
    lote: "L1",
    sections: [
      {
        id: "como-es-una-ficha",
        title: "Cómo es una ficha y cómo se usa en clase",
        intro: "Todas las fichas tienen la misma estructura, así que el alumno sabe dónde mirar desde la segunda vez.",
        blocks: [
          { type: "table", caption: "Partes de una ficha ELE de SpanishCue y su uso en clase", head: ["Parte", "Qué tiene", "Cómo usarla"], rows: [
            ["Teoría", "La regla de la clase con ejemplos del nivel.", "Léela con el alumno antes de los ejercicios, no después: dos minutos bastan."],
            ["Practicar", "Ejercicios sobre el mismo punto, de más fácil a más difícil.", "En clase, el alumno contesta en voz alta; como tarea, por escrito."],
            ["Soluciones", "Al final de la ficha, con la misma numeración y una explicación corta de cada respuesta.", "Que el alumno corrija solo y te traiga las dudas: es la mitad del aprendizaje."],
            ["Clase interactiva", "El enlace a la clase de la que sale la ficha.", "Para el día siguiente: la clase lleva el punto a una conversación."],
          ] },
          { type: "p", text: "Las fichas de las clases gratis son completas. Las de las clases PRO son una muestra con cinco ejercicios: sirven para ver el nivel y la forma de la clase antes de usarla." },
        ],
      },
      {
        id: "imprimir-o-proyectar",
        title: "Imprimir o proyectar",
        blocks: [
          { type: "ul", items: [
            "**Para imprimir o guardar en PDF:** usa el botón de imprimir de la ficha. Se imprime sin menús ni botones, con la dirección de la clase interactiva arriba.",
            "**Para proyectar en una clase en línea:** comparte la pestaña de la ficha y baja hasta «Practicar». Deja las soluciones fuera de la pantalla hasta que el alumno conteste.",
            "**Para mandar de tarea:** envía el enlace de la ficha. El alumno la abre en el móvil sin registrarse y corrige con las soluciones del final.",
          ] },
        ],
      },
    ],
  },

  "/material-ele/guia/ejercicios-ele-con-soluciones": {
    lote: "L1",
    sections: [
      {
        id: "tabla-de-ejercicios",
        title: `Los ${ejercicioPages.length} ejercicios en una tabla: nivel, frases y el error que corrigen`,
        intro: "Para elegir rápido: busca el error que oyes en clase en la última columna y abre el ejercicio de esa fila. Están ordenados del nivel más bajo al más alto.",
        blocks: [
          { type: "table", caption: "Ejercicios ELE con soluciones por nivel, número de frases y error que corrigen", head: ["Ejercicio", "Nivel", "Frases", "Error que corrige"], rows: exerciseRows },
          { type: "p", text: "Los ejercicios de ser y estar, por y para, pasados, indicativo o subjuntivo, imperativo, gustar y pronombres están dentro de su práctica interactiva por reglas: la ficha con soluciones sigue ahí, al final de la página, junto a un ejercicio por cada regla." },
        ],
      },
    ],
  },

  "/material-ele/guia/actividades-de-conversacion-en-espanol-para-adultos": {
    lote: "L1",
    sections: [
      {
        id: "clase-de-45-minutos",
        title: "Una clase de conversación de 45 minutos, paso a paso",
        intro: "La secuencia con una clase real del catálogo, El consorcio (B1–B2): te mudas a un edificio antiguo de Buenos Aires y a las nueve de la noche hay asamblea de vecinos en la terraza.",
        blocks: [
          { type: "table", caption: "Secuencia de una clase de conversación de 45 minutos con El consorcio", head: ["Fase", "Minutos", "Qué hace el alumno", "Qué dices tú"], rows: [
            ["Calentamiento", "5", "Cuenta un problema real con un vecino, suyo o de alguien que conoce.", "«¿Alguna vez tuviste un problema con un vecino? ¿Cómo terminó?»"],
            ["Entrada en la tarea", "5", "Recorre el edificio y escucha a los primeros vecinos.", "«Tu objetivo es llegar a la asamblea con una propuesta. Escucha qué quiere cada uno.»"],
            ["Tarea central", "20", "Habla con los vecinos que tienen un conflicto: aconseja, negocia y toma partido.", "Nada mientras habla. Anotas dos columnas: errores que impiden entender y errores de forma."],
            ["Asamblea", "5", "Presenta su propuesta y la defiende ante una objeción.", "«Yo no estoy de acuerdo, ¿por qué debería votar tu propuesta?»"],
            ["Corrección diferida", "7", "Corrige tres frases suyas que le muestras escritas.", "«Esto es lo que dijiste. ¿Cómo lo dirías ahora?»"],
            ["Cierre", "3", "Escribe el acta de la asamblea en tres frases.", "«¿Qué se decidió y quién tiene que hacer qué?»"],
          ] },
          { type: "p", text: "La secuencia sirve con cualquier clase del catálogo: cambia el tema del calentamiento y la objeción de la asamblea. Lo que no cambia es el orden: primero un motivo real para hablar, después la tarea sin interrupciones y al final la corrección, cuando el alumno ya dijo lo que quería decir." },
        ],
      },
    ],
  },

  "/material-ele/formatos/comprension-auditiva/a1": {
    lote: "L1",
    title: "Comprensión auditiva A1 en español: audios con transcripción",
    description: "Audios de español A1 con transcripción y preguntas con soluciones, más {n} clases interactivas para practicar la escucha en clase, sin registro.",
    h1: "Comprensión auditiva A1: audios y {n} clases para practicar la escucha",
    intro: "En A1 el alumno no entiende frases sueltas: entiende situaciones. Si sabe dónde está (un hotel, el metro, un puesto de comida) y qué necesita quien habla, reconoce números, horas y lugares aunque se le escapen muchas palabras. Aquí tienes cuatro audios gratis de ese tipo, con transcripción y preguntas, una guía para trabajar cada uno en clase y las {n} clases de A1 que tienen escucha.",
    sections: [
      {
        id: "que-entiende-a1",
        title: "Qué entiende un alumno de A1 cuando escucha",
        blocks: [
          { type: "p", text: "El MCER describe la escucha de A1 como seguir un discurso muy lento y bien articulado, con pausas largas para captar el sentido. El PCIC lo baja a situaciones concretas: dar y pedir información personal, preguntar por un lugar, comprar, entender una hora o un precio. Con un diálogo de unos 40 segundos, un alumno de A1 puede:" },
          { type: "ul", items: [
            "decir quién habla con quién y dónde están;",
            "captar el problema o la petición principal;",
            "anotar un número, una hora o un lugar si sabe de antemano que va a aparecer;",
            "reconocer fórmulas fijas de cortesía: buenas tardes, disculpe, por favor, gracias.",
          ] },
          { type: "p", text: "Lo que todavía no puede es seguir dos ideas unidas por «pero» o «así que» sin preparación, ni entender una broma o un tono. Por eso las preguntas de estos audios piden datos y no opiniones, y por eso la primera escucha lleva una sola pregunta." },
        ],
      },
      {
        id: "guia-audios-a1",
        title: "Cómo trabajar cada audio de A1 en clase",
        intro: "Una fila por audio: qué preparar antes, qué buscar en cada escucha y la lengua que deja para la conversación.",
        blocks: [
          { type: "table", caption: "Guía de uso de los cuatro audios gratis de A1", head: ["Audio", "Antes de escuchar", "1.ª escucha", "2.ª escucha", "Lengua que deja"], rows: [
            ["«¿Dónde está mi pasaporte?» (41 s)", "¿Qué llevas siempre cuando viajas? Lista de objetos en la pizarra.", "¿Qué perdió Luis y dónde aparece?", "Los lugares en orden (la playa, un café) y la hora: «cierran a las seis».", "Reconocer «fui» y «fuiste» como pasado de ir, sin conjugarlo todavía."],
            ["«El metro a Coyoacán» (32 s)", "Un plano con una línea de metro: ¿cómo se pregunta por un lugar?", "¿Adónde quiere ir Camila?", "La línea, el número de estaciones y los minutos a pie.", "«¿Cómo llego a…?» y «toma la línea…» para pedir y dar direcciones."],
            ["«Primera vez con patines» (38 s)", "Con gestos: dices «mira al frente» o «dobla las rodillas» y el alumno lo hace.", "¿Qué aprende Víctor?", "Las dos instrucciones de Lupita y «desde hace un año».", "Instrucciones de tú en contexto (mira, dobla) y «desde hace» con una cantidad de tiempo."],
            ["«La torta ahogada» (40 s)", "Una foto de un puesto de comida: ¿qué se pide y cómo?", "¿Quién quiere picante y quién no?", "Lo que da el vendedor además de las tortas y el problema de Kevin.", "Pedir comida: «con picante», «sin picante, por favor», «me encanta»."],
          ] },
          { type: "p", text: "Después de las dos escuchas, abre la transcripción y pide al alumno que lea en voz alta el papel de uno de los personajes. Al final usa las preguntas de «Para conversar después»: en A1 basta con respuestas de una o dos frases." },
        ],
      },
      {
        id: "clases-a1",
        title: "Las clases 3D con un alumno de A1",
        blocks: [
          { type: "p", text: "La mayoría de las clases de esta lista son mundos 3D que se usan en varios niveles, como Vuelo cancelado, El consorcio o El tren de las 23:40. Con un alumno de A1, quédate con la escucha de cada escena y pide solo datos: dónde está el personaje, qué necesita y a qué hora. Deja la conversación final para dos o tres frases modelo que el alumno completa." },
          { type: "ul", items: [
            "**Vuelo cancelado:** la hora del vuelo que hay que alcanzar (las 06:10) y qué necesita cada pasajero.",
            "**El tren de las 23:40:** las horas y los números de los camarotes, el 7 y el 8.",
            "**Objetos perdidos:** qué objeto busca cada persona y dónde lo perdió.",
          ] },
        ],
      },
    ],
    faq: [
      syntheticVoices,
      { question: "¿Sirven estos audios para preparar el DELE A1?", answer: "Sirven para entrenar lo que pide la prueba de comprensión auditiva: datos concretos (horas, lugares, precios) en diálogos cortos. El formato no es el del examen, porque aquí cada audio tiene sus propias preguntas y se puede escuchar las veces que haga falta. Para acercarte al examen, ponlo dos veces seguidas y sin pausas." },
    ],
  },

  "/material-ele/formatos/comprension-auditiva/a2": {
    lote: "L1",
    title: "Comprensión auditiva A2 en español: audios con transcripción",
    description: "Audios de español A2 con transcripción y preguntas con soluciones, más {n} clases interactivas para practicar la escucha en clase, sin registro.",
    h1: "Comprensión auditiva A2: audios y {n} clases para practicar la escucha",
    intro: "En A2 el alumno ya sigue un relato corto si los hechos van en orden: primero, después, al final. La dificultad pasa de los datos a los tiempos verbales, porque tiene que oír si algo pasaba o pasó, y quién lo cuenta. Aquí tienes cuatro audios gratis de A2 con transcripción y preguntas, una guía para trabajar cada uno y las {n} clases de A2 que tienen escucha.",
    sections: [
      {
        id: "que-entiende-a2",
        title: "Qué entiende un alumno de A2 cuando escucha",
        blocks: [
          { type: "p", text: "El MCER sitúa la escucha de A2 en frases y expresiones de uso frecuente sobre temas cercanos (compras, familia, trabajo, el lugar donde vive) y en la idea principal de mensajes breves y claros. El PCIC añade en este nivel los relatos en pasado y las experiencias personales. Con un audio de 40 a 50 segundos, un alumno de A2 puede:" },
          { type: "ul", items: [
            "reconstruir el orden de los hechos de una historia;",
            "distinguir la situación de fondo (trabajaba, estaba cansado) del hecho que la cambia (un día le preguntó);",
            "entender cantidades y tiempos: seis meses, más de treinta ingredientes, unos cuarenta minutos;",
            "captar si quien habla está contento, preocupado o arrepentido, cuando lo dice con palabras.",
          ] },
          { type: "p", text: "Todavía le cuestan la ironía, el doble sentido y las frases largas con varias subordinadas. Si un audio de A2 se le hace difícil, casi siempre es por el vocabulario de la situación: preséntalo antes de la primera escucha." },
        ],
      },
      {
        id: "guia-audios-a2",
        title: "Cómo trabajar cada audio de A2 en clase",
        intro: "Una fila por audio: qué preparar antes, qué buscar en cada escucha y la lengua que deja para la conversación.",
        blocks: [
          { type: "table", caption: "Guía de uso de los cuatro audios gratis de A2", head: ["Audio", "Antes de escuchar", "1.ª escucha", "2.ª escucha", "Lengua que deja"], rows: [
            ["«Dejé el banco por una mochila» (40 s)", "¿Dejarías un buen trabajo para viajar? Dos razones a favor y dos en contra.", "¿Qué cambió en la vida de Sebastián?", "Separar lo que hacía (trabajaba, ganaba, estaba) de lo que pasó (le preguntó, dejó, viajó).", "Contraste de imperfecto e indefinido en un relato real."],
            ["«La trajinera perdida» (43 s)", "Una foto de Xochimilco: ¿qué es una trajinera?", "¿Qué problema tiene Rodrigo y quién lo va a resolver?", "Los tiempos: cuarenta minutos, hace dos semanas, una hora entera.", "«Hace + tiempo» para situar el pasado e «iba a» para un plan que no se cumplió."],
            ["«Boda en la gasolinera» (40 s)", "El titular «Se casan en una gasolinera»: ¿qué pudo pasar?", "¿Por qué estaban todos en la gasolinera?", "La secuencia de la noche: a las dos de la mañana, a las seis.", "Marcadores para contar una anécdota e «íbamos a» como plan interrumpido."],
            ["«El mole de la abuela» (52 s)", "¿Hay un plato de tu familia que tarda mucho en prepararse?", "¿Cuándo prepara mole Doña Chelo ahora?", "El primer paso de la receta y el número de ingredientes.", "«Antes sí, ahora solo…» para comparar costumbres con el imperfecto."],
          ] },
          { type: "p", text: "Después de las dos escuchas, el alumno cuenta la historia en tercera persona y en pasado con tres frases: qué pasaba, qué pasó y cómo terminó. Así la escucha se convierte en práctica del contraste de pasados, que es el tema gramatical del nivel." },
        ],
      },
      {
        id: "clases-a2",
        title: "Las clases 3D con un alumno de A2",
        blocks: [
          { type: "p", text: "En A2 la escucha de los mundos 3D funciona mejor como relato. Después de cada escena, pide al alumno que cuente qué le pasó al personaje y qué hizo él para ayudarlo. Tres ejemplos de la lista:" },
          { type: "ul", items: [
            "**La boda:** qué pasó con el padrino y quién lo vio por última vez.",
            "**Último crucero:** qué recuerdan los pasajeros de sus viajes en la última noche del barco.",
            "**Hospital San Casi Vivo:** por qué vino cada paciente y desde cuándo tiene el problema.",
          ] },
        ],
      },
    ],
    faq: [
      syntheticVoices,
      { question: "¿Cuántas veces pongo un audio en A2?", answer: "Dos: la primera para la idea general y la segunda para los detalles que pide la pregunta. Si después de dos escuchas el alumno no acierta, no lo pongas una tercera vez enseguida. Lee con él la transcripción, subraya lo que no entendió y vuelve a escuchar al final de la clase." },
    ],
  },

  "/material-ele/formatos/comprension-auditiva/b1": {
    lote: "L1",
    title: "Comprensión auditiva B1 en español: audios con transcripción",
    description: "Audios de español B1 con transcripción y preguntas con soluciones, más {n} clases interactivas para practicar la escucha en clase, sin registro.",
    h1: "Comprensión auditiva B1: audios y {n} clases para practicar la escucha",
    intro: "En B1 la pregunta deja de ser «qué pasó» y pasa a ser «qué piensa quien habla». Los cuatro audios gratis de esta página son entrevistas y testimonios sobre problemas reales (el turismo, la vivienda, el agua) en los que cada persona tiene una postura con matices. Con su transcripción, sus preguntas y una guía de uso, sirven para trabajar la opinión al oído antes de pedirla en la conversación.",
    sections: [
      {
        id: "que-entiende-b1",
        title: "Qué entiende un alumno de B1 cuando escucha",
        blocks: [
          { type: "p", text: "Para el MCER, un alumno de B1 comprende las ideas principales de un discurso claro en lengua estándar sobre temas conocidos (trabajo, estudios, ocio) y de muchos programas de radio o televisión sobre temas actuales, si se habla con claridad. Con una entrevista de 40 a 55 segundos, un alumno de B1 puede:" },
          { type: "ul", items: [
            "identificar la postura de cada hablante y el argumento que la sostiene;",
            "seguir el contraste que marcan «por un lado… por otro», «sin embargo» o «al final»;",
            "separar los hechos (le ofrecieron casi un millón) de las opiniones (no juzgo a quien acepta);",
            "entender el estilo indirecto en un testimonio: «me dijo que podría ayudar a sus nietos».",
          ] },
          { type: "p", text: "Lo difícil en B1 no es el vocabulario sino seguir dos posturas a la vez. Pide siempre que el alumno diga qué opina cada persona antes de preguntarle qué opina él." },
        ],
      },
      {
        id: "guia-audios-b1",
        title: "Cómo trabajar cada audio de B1 en clase",
        intro: "Una fila por audio: qué preparar antes, qué buscar en cada escucha y la lengua que deja para la conversación.",
        blocks: [
          { type: "table", caption: "Guía de uso de los cuatro audios gratis de B1", head: ["Audio", "Antes de escuchar", "1.ª escucha", "2.ª escucha", "Lengua que deja"], rows: [
            ["«Los efectos del turismo» (54 s)", "Dos columnas en la pizarra: lo bueno y lo malo del turismo en tu ciudad.", "¿Lucía está a favor o en contra del turismo?", "Un efecto positivo, uno negativo y lo que pide a los turistas.", "«Por un lado… por otro lado» y peticiones con «que + subjuntivo» (que coman, que no toquen)."],
            ["«La Guelaguetza de verdad» (53 s)", "¿Una fiesta tradicional de tu país se volvió cara o turística?", "¿Por qué Marisol baila en dos sitios distintos?", "El precio de las entradas y la diferencia entre las dos fiestas.", "Contrastar con «lo que cambia es…»: «los bailes son iguales; lo que cambia es el ambiente»."],
            ["«La casa amarilla» (40 s)", "¿Venderías la casa de tu familia por mucho dinero?", "¿Qué va a hacer Don Ernesto?", "Lo que dijo Ernesto, contado por Inés.", "Estilo indirecto: me contó que, me dijo que podría, me respondió que no lo sabía."],
            ["«Chapala se seca» (50 s)", "Una foto de un lago con poca agua: ¿qué pudo pasar?", "¿Por qué baja el agua del lago?", "Las dos causas y los datos: cincuenta años, doce años, casi un kilómetro.", "Explicar causas con «se debe a que…» y situar con «desde hace» y «hace»."],
          ] },
          { type: "p", text: "Cierra cada audio con una ronda de posturas: el alumno resume en una frase la opinión de cada hablante, dice con cuál está más de acuerdo y por qué, y usa un conector de B1 (sin embargo, en cambio, por eso)." },
        ],
      },
      {
        id: "clases-b1",
        title: "Las clases 3D con un alumno de B1",
        blocks: [
          { type: "p", text: "En B1 cada escena de un mundo 3D puede terminar con una postura. Después de escuchar al personaje, el alumno dice qué haría en su lugar y lo justifica. Tres ejemplos de la lista:" },
          { type: "ul", items: [
            "**El consorcio:** cada vecino tiene un conflicto; el alumno resume las dos posturas y propone una solución para el acta.",
            "**Último crucero:** los pasajeros hablan de despedidas y arrepentimientos; el alumno cuenta qué haría él en su lugar.",
            "**Madrid infectada:** los sobrevivientes toman decisiones difíciles; el alumno justifica la suya con «porque», «ya que» o «así que».",
          ] },
        ],
      },
    ],
    faq: [
      syntheticVoices,
      { question: "¿Qué diferencia hay entre estos audios y los de A2?", answer: "En A2 los audios cuentan una historia en orden. En B1 presentan un problema con dos lados y piden entender la opinión de cada hablante. También son algo más largos, de 40 a 54 segundos, y cada intervención tiene más de un argumento." },
    ],
  },

  "/material-ele/formatos/juegos-de-conversacion/b2": {
    lote: "L1",
    title: "Juegos de conversación B2 en español: {n} clases para debatir",
    description: "Juegos de conversación para B2: negociar, argumentar y resolver casos en {n} clases interactivas, con frases de rescate por función y guía para el profe.",
    intro: "En B2 un juego de conversación ya no sirve para practicar una estructura: sirve para que el alumno gane una discusión, convenza a alguien o resuelva un caso con argumentos. Estas {n} clases usan mecánicas de juego (misiones, misterios, dilemas, asambleas) y en todas el alumno tiene que matizar, conceder y contraargumentar. Abajo tienes las frases de rescate de B2 para cada función y una forma de dirigir el juego sin cortar la conversación.",
    sections: [
      {
        id: "que-pide-b2",
        title: "Qué pide un juego de conversación en B2",
        blocks: [
          { type: "p", text: "El MCER pide en B2 que el alumno defienda un punto de vista, explique las ventajas y los inconvenientes de varias opciones y participe en una discusión con hablantes nativos sin esfuerzo para nadie. Un buen juego de B2 tiene tres ingredientes: un objetivo que se gana hablando, información que el otro no tiene y una regla que obliga a matizar, porque «sí» o «no» no bastan." },
        ],
      },
      {
        id: "tipos-b2",
        title: "Las clases de B2 por tipo de juego",
        blocks: [
          { type: "ul", items: [
            "**Casos y misterios.** El tren de las 23:40 (desaparece el pasajero del camarote 7 y el alumno investiga), Objetos perdidos (devolver cada objeto a su dueño antes de las siete) y La boda (encontrar al padrino). Piden hipótesis: «habrá salido», «puede que esté…», «seguro que no».",
            "**Negociación y mediación.** El consorcio (asamblea de vecinos con acta final), Vuelo cancelado (conseguir llegar al vuelo de las 06:10) y HR Crisis (seis misiones de Recursos Humanos con entrevistas, quejas y nóminas). Piden conceder y proponer: «entiendo que…, pero», «¿y si…?».",
            "**Dilemas y debate.** Red Flag o No B2 (18 situaciones ambiguas: ¿señal de alarma o no?), No es tan simple (72 preguntas que cambian cuando aparece una condición nueva) y Más allá (preguntas sobre la vida y la muerte). Piden revisar una postura: «depende de…», «visto así, cambio de opinión».",
            "**Exploración con preguntas.** Noche abierta, El bosque de los hongos gigantes, El mundo en blanco y El reino de la rosa dormida. Cada zona abre una pregunta; en B2 pide respuestas de al menos tres frases unidas por un conector.",
          ] },
        ],
      },
      {
        id: "frases-de-rescate-b2",
        title: "Frases de rescate de B2 para cada función",
        intro: "Déjalas a la vista durante el juego. La columna de la derecha es lo que el alumno dice cuando no tiene la frase.",
        blocks: [
          { type: "table", caption: "Frases de rescate de B2 por función comunicativa", head: ["Función", "Frases de B2", "En lugar de"], rows: [
            ["Matizar", "En parte sí, pero… · Depende de cómo se mire. · No exactamente: lo que quiero decir es que…", "Sí. / No."],
            ["Conceder", "Tienes razón en que…, aunque… · Es cierto que…; aun así… · Eso te lo acepto, pero…", "Ok, pero…"],
            ["Contraargumentar", "Sin embargo… · Lo que pasa es que… · Ya, pero piensa que… · No es tanto… como…", "Pero no."],
            ["Pedir aclaración", "¿Qué quieres decir con…? · ¿Te refieres a que…? · A ver si te entiendo: …", "¿Qué?"],
            ["Ganar tiempo", "Déjame pensarlo un segundo. · Es una buena pregunta. · ¿Cómo te lo explico?", "Un silencio o una palabra en inglés."],
            ["Formular hipótesis", "Habrá sido… · Puede que + subjuntivo · Lo más probable es que + subjuntivo", "Quizás es…"],
            ["Cerrar un acuerdo", "Entonces quedamos en que… · ¿Te parece si…? · Lo dejamos así: …", "Ok, fin."],
          ] },
        ],
      },
      {
        id: "dirigir-b2",
        title: "Cómo dirigir el juego sin cortar la conversación",
        blocks: [
          { type: "ol", items: [
            "**Antes.** Enseña la tabla de frases de rescate y pide al alumno que elija dos que va a usar sí o sí durante el juego.",
            "**Durante.** No corrijas en caliente. Anota en dos columnas: los errores que impiden entender y los errores de forma.",
            "**Si se queda sin palabras.** Señala una función de la tabla, por ejemplo «concede», en lugar de darle la frase hecha.",
            "**Después.** Cinco minutos de corrección diferida con tres errores como mucho, y una ronda corta en la que repite la jugada con la forma correcta.",
          ] },
        ],
      },
    ],
    faq: [
      { question: "¿Cuánto dura un juego de conversación en B2?", answer: "Los mundos 3D llenan una clase de 45 minutos. Red Flag o No y No es tan simple se pueden usar en bloques de 15 o 20 minutos, eligiendo solo algunas situaciones o preguntas." },
    ],
  },

  "/material-ele/futuro": {
    lote: "L1",
    title: "El futuro en español: actividades y ejercicios ELE (A2–B1)",
    description: "Futuro ELE en tres usos (ir a, futuro simple y suposición) con 5 actividades de clase, 20 frases con soluciones y 7 clases interactivas.",
    sections: [
      {
        id: "situacion-y-forma",
        title: "Qué forma usaría un nativo en cada situación",
        intro: "La gramática dice qué es correcto; esta tabla dice qué suena más natural en la conversación. Las columnas de España y América marcan la tendencia, no una regla: las otras formas no son errores.",
        blocks: [
          { type: "table", caption: "Situación y forma más natural del futuro en España y en América", head: ["Situación", "Ejemplo", "España", "América"], rows: [
            ["Plan ya decidido", "El sábado ___ (ver) a mis padres.", "voy a ver · veo", "voy a ver"],
            ["Horario o cita cerrada", "El tren ___ (salir) a las ocho.", "sale", "sale"],
            ["Predicción", "Mañana ___ (llover).", "lloverá · va a llover", "va a llover"],
            ["Promesa", "Te lo ___ (devolver) el lunes, de verdad.", "te lo devolveré · te lo devuelvo", "te lo devuelvo · te lo voy a devolver"],
            ["Decisión en el momento", "¿El teléfono? Ya ___ (contestar) yo.", "contesto · contestaré", "contesto"],
            ["Suposición sobre el presente", "No contesta: ___ (estar) dormido.", "estará", "estará · debe de estar"],
            ["Pregunta que uno se hace", "¿Qué hora ___ (ser)?", "será", "será"],
          ] },
          { type: "p", text: "Dos consecuencias para la clase. La primera: en América el alumno oirá «ir a + infinitivo» mucho más que el futuro simple al hablar. Enseña el futuro simple igual, porque domina la escritura, las noticias y las promesas formales. La segunda: el futuro de suposición («estará dormido») está vivo en los dos lados y es el uso que el alumno menos produce, así que conviene trabajarlo aparte con la actividad «¿Dónde estará?»." },
        ],
      },
      {
        id: "irregulares-futuro",
        title: "Los doce irregulares, agrupados por cómo cambian",
        blocks: [
          { type: "table", caption: "Verbos irregulares del futuro simple por tipo de cambio", head: ["Cambio", "Verbos", "Error típico"], rows: [
            ["Pierden la vocal del infinitivo", "poder → podré · saber → sabré · haber → habrá · querer → querré · caber → cabré", "«poderé», «saberé»"],
            ["La vocal se convierte en d", "tener → tendré · poner → pondré · salir → saldré · venir → vendré · valer → valdré", "«teneré», «saliré»"],
            ["Raíz propia", "hacer → haré · decir → diré", "«haceré», «deciré»"],
          ] },
          { type: "p", text: "Los compuestos siguen al verbo base: mantener → mantendré, deshacer → desharé, proponer → propondré. Las terminaciones son iguales para todos los verbos, así que el alumno solo tiene que aprender la raíz. El condicional usa las mismas doce raíces (tendría, haría, diría): si las aprende aquí, las tiene para B1." },
        ],
      },
    ],
    faq: [
      { question: "¿Es incorrecto usar «voy a» en lugar del futuro simple?", answer: "No. Las dos formas son correctas y muchas veces intercambiables. «Voy a» suena más a plan y es más frecuente al hablar, sobre todo en América; el futuro simple suena más a predicción o a promesa y domina en la escritura." },
    ],
  },

  "/material-ele/imperativo": {
    lote: "L1",
    title: "Imperativo ELE: actividades y ejercicios con soluciones",
    description: "Imperativo afirmativo y negativo con tú, usted y ustedes: 3 actividades de clase, 20 frases con soluciones y 6 ejercicios con corrección al instante.",
    sections: [
      {
        id: "para-que-sirve",
        title: "Para qué sirve el imperativo en una conversación",
        blocks: [
          { type: "p", text: "En una conversación real, el imperativo sirve sobre todo para dar instrucciones (gira a la derecha), aconsejar (prueba el mole), invitar (pasa, siéntate) y para fórmulas que suavizan (perdona, oye, mira). Si el alumno lo aprende solo como «la forma de dar órdenes», lo evita por miedo a sonar brusco. Si lo aprende con estos usos, lo usa con naturalidad desde A2." },
        ],
      },
      {
        id: "posicion-del-pronombre",
        title: "Dónde va el pronombre: diez casos de clase",
        intro: "Afirmativo: el pronombre va detrás, pegado al verbo, y muchas veces hace falta tilde. Negativo: el pronombre va delante y separado.",
        blocks: [
          { type: "table", caption: "Posición del pronombre en el imperativo afirmativo y negativo", head: ["Situación", "Afirmativo", "Negativo"], rows: [
            ["Pedir la sal en la mesa", "Pásamela.", "No me la pases todavía."],
            ["Un libro para el lunes", "Léelo para el lunes.", "No lo leas en el móvil."],
            ["La rutina de la mañana", "Levántate ya.", "No te levantes tan tarde."],
            ["Un secreto, a usted", "Dígamelo.", "No me lo diga."],
            ["Visitas en casa (ustedes)", "Siéntense, por favor.", "No se sienten ahí."],
            ["Una carta para tu jefe", "Escríbesela hoy.", "No se la escribas así."],
            ["Antes de salir", "Dúchate rápido.", "No te duches con agua fría."],
            ["Un plato nuevo", "Pruébalo.", "No lo pruebes, que pica."],
            ["El abrigo", "Póntelo, que hace frío.", "No te lo pongas, que hace calor."],
            ["Una mala noticia", "Dile la verdad.", "No le digas nada todavía."],
          ] },
          { type: "p", text: "La regla de la tilde: si al añadir pronombres la palabra pasa a ser esdrújula o sobresdrújula, lleva tilde (lee → léelo, pasa → pásamela). Por eso «dime», «dale» y «ponlo» no la llevan: siguen siendo llanas." },
        ],
      },
      {
        id: "irregulares-tu",
        title: "Los ocho irregulares de tú, con un truco",
        blocks: [
          { type: "p", text: "decir → di · hacer → haz · ir → ve · poner → pon · salir → sal · ser → sé · tener → ten · venir → ven." },
          { type: "p", text: "Cuatro de ellos son la raíz del infinitivo sin la terminación: pon, sal, ten y ven. Los otros cuatro hay que aprenderlos de memoria: di, haz, ve y sé. «Ve» es a la vez imperativo de ir y de ver, y «sé» lleva tilde para no confundirse con el pronombre «se»." },
        ],
      },
    ],
    faq: [
      { question: "¿Cómo se forma el imperativo negativo?", answer: "Con el presente de subjuntivo en todas las personas: no hables, no comas, no vengas, no hable usted, no hablen ustedes. Por eso conviene enseñarlo cuando el alumno ya reconoce el presente de subjuntivo o, en A2, como fórmula aprendida en bloque (no te preocupes, no lo toques)." },
    ],
  },

  "/material-ele/pronombres-de-objeto": {
    lote: "L1",
    title: "Pronombres de objeto directo e indirecto: actividades ELE",
    description: "Lo, la, le y se lo en situaciones reales: 3 actividades de clase, 20 frases con soluciones y 4 ejercicios interactivos, con el error típico de cada caso.",
    sections: [
      {
        id: "de-le-lo-a-se-lo",
        title: "De «le lo» a «se lo»: el paso que el alumno no ve",
        intro: "El alumno sabe que «le» es indirecto y «lo» es directo. Lo que no ve es que, cuando van juntos, «le» cambia. Este es el camino completo, con regalos y favores.",
        blocks: [
          { type: "table", caption: "Cómo se llega de le lo a se lo en cuatro pasos", head: ["Paso", "Ejemplo", "Qué pasa"], rows: [
            ["1. La frase completa", "Doy el libro a mi hermana.", "Dos objetos: el libro (directo) y mi hermana (indirecto)."],
            ["2. Cambio el directo", "Lo doy a mi hermana.", "«El libro» pasa a ser «lo»."],
            ["3. Añado el indirecto", "Le lo doy. ✗", "Indirecto antes que directo, pero «le lo» no existe en español."],
            ["4. Le se convierte en se", "Se lo doy.", "«Le» y «les» pasan a «se» delante de lo, la, los y las."],
          ] },
          { type: "p", text: "Como «se» puede ser él, ella, usted, ellos o ustedes, el hablante suele aclararlo: «Se lo doy a ella», «Se lo dije a usted». Esa repetición no es un error: el indirecto se duplica con mucha frecuencia en español." },
          { type: "ul", items: [
            "¿Le regalaste las flores a tu madre? Sí, **se las** regalé ayer.",
            "¿Les explicaste el problema a tus jefes? Todavía no **se lo** expliqué.",
            "¿Me prestas tu coche? Te lo presto, pero **devuélvemelo** mañana.",
            "¿A quién le mandaste la foto? **Se la** mandé a Laura.",
          ] },
        ],
      },
      {
        id: "posicion-con-perifrasis",
        title: "Dos posiciones correctas con infinitivo y gerundio",
        blocks: [
          { type: "p", text: "Con una perífrasis, el pronombre puede ir antes del verbo conjugado o pegado al infinitivo o al gerundio, nunca en medio: «Lo voy a comprar» y «Voy a comprarlo» son correctas; «Voy lo a comprar», no. Lo mismo con el gerundio: «Te lo estoy diciendo» o «Estoy diciéndotelo». En A2 conviene que el alumno elija una posición y la automatice; la otra llega sola." },
          { type: "p", text: "Sobre el leísmo: en buena parte de España se dice «le vi» por «lo vi» cuando se habla de un hombre, y la norma lo acepta. En América casi no se usa. Enseña el sistema lo/la/le completo y explica el leísmo como variación, no como error." },
        ],
      },
    ],
    faq: [
      { question: "¿Por qué se dice «se lo» y no «le lo»?", answer: "Porque en español «le» y «les» se convierten en «se» delante de lo, la, los y las. Es un cambio de sonido que el idioma hizo hace siglos y no tiene excepciones: «se lo doy», «se la mandé», «se los presto»." },
    ],
  },

  "/material-ele/preterito-perfecto": {
    lote: "L1",
    title: "Pretérito perfecto ELE: actividades y ejercicios (A1–A2)",
    description: "El primer pasado del alumno: 5 actividades con experiencias reales, participios irregulares y 20 frases con soluciones, con el uso de España y América.",
    sections: [
      {
        id: "mismo-dia-dos-paises",
        title: "El mismo día contado en dos países",
        intro: "La misma persona, el mismo día, dos variantes. En la de España domina el pretérito perfecto; en la de gran parte de América, el indefinido. Las dos son correctas.",
        blocks: [
          { type: "table", caption: "Un día narrado con la variante de España y con la de gran parte de América", head: ["Momento", "Variante de España", "Variante de gran parte de América"], rows: [
            ["Esta mañana", "Esta mañana me he levantado tarde.", "Esta mañana me levanté tarde."],
            ["Hoy", "Hoy he comido con mi hermano.", "Hoy comí con mi hermano."],
            ["Hace un rato", "Hace un rato me ha llamado mi jefa.", "Hace un rato me llamó mi jefa."],
            ["Ya / todavía no", "¿Ya has terminado? Todavía no he empezado.", "¿Ya terminaste? Todavía no empecé."],
            ["Experiencia", "¿Has estado alguna vez en México?", "¿Has estado alguna vez en México? · ¿Estuviste alguna vez en México?"],
            ["Ayer", "Ayer fui al cine.", "Ayer fui al cine."],
          ] },
          { type: "p", text: "Fíjate en las dos últimas filas: con «ayer» las dos variantes coinciden, y para las experiencias de la vida el perfecto también se oye en América. Si tu alumno vive o viaja a América, enséñale a reconocer el perfecto y a producir sobre todo el indefinido; si va a España, al revés. En los dos casos, la actividad «El mismo día, dos países» sirve para que lo compruebe solo." },
        ],
      },
      {
        id: "participios",
        title: "Participios irregulares: los diez que salen en clase",
        blocks: [
          { type: "p", text: "hacer → hecho · decir → dicho · ver → visto · poner → puesto · escribir → escrito · abrir → abierto · volver → vuelto · romper → roto · morir → muerto · descubrir → descubierto." },
          { type: "p", text: "El error más frecuente es regularizar: «he escribido», «he rompido», «he abrido». Funciona mejor que la lista una pregunta que obligue a usarlos: «¿Qué has hecho hoy? ¿Qué has visto esta semana? ¿Has roto algo alguna vez?». Recuerda también que haber y el participio no se separan: «ya he comido», no «he ya comido»." },
        ],
      },
    ],
    faq: [
      { question: "¿Hay que enseñar el pretérito perfecto si el alumno va a vivir en América?", answer: "Sí, pero con otro peso. El alumno lo va a oír en las experiencias («¿has estado alguna vez…?»), en la escritura y en los medios de España. Enséñalo para reconocerlo y para hablar de experiencias, y pon el foco de la producción en el indefinido." },
    ],
  },

  "/material-ele/condicional": {
    lote: "L1",
    title: "Condicional ELE: actividades y ejercicios con soluciones",
    description: "Condicional para pedir con cortesía, aconsejar e imaginar: 5 actividades de clase, 20 frases con soluciones y 7 clases interactivas de B1 a B2.",
    sections: [
      {
        id: "escalera-de-cortesia",
        title: "La escalera de cortesía: la misma petición en cinco grados",
        intro: "El condicional es, antes que nada, una herramienta de cortesía. Esta escalera muestra la misma petición de menos a más cortés.",
        blocks: [
          { type: "table", caption: "Una petición en cinco grados de cortesía", head: ["Grado", "Petición", "Cuándo se usa"], rows: [
            ["1. Imperativo", "Abre la ventana.", "Con confianza y en una situación clara (en casa, con un amigo)."],
            ["2. Pregunta en presente", "¿Abres la ventana?", "Lo más frecuente entre iguales: suena natural, no brusco."],
            ["3. Poder en presente", "¿Puedes abrir la ventana?", "Neutro: sirve casi siempre."],
            ["4. Poder en condicional", "¿Podrías abrir la ventana, por favor?", "Con alguien que no conoces bien o cuando pides un favor."],
            ["5. Fórmula de distancia", "¿Le importaría abrir la ventana?", "Con usted, en un contexto formal o cuando la petición molesta."],
          ] },
          { type: "p", text: "Con «querer» pasa lo mismo: «quiero un café» (correcto en un bar), «quería un café» (imperfecto de cortesía, muy frecuente al pedir) y «querría» o «me gustaría un café» (más formal). Una buena actividad de B1 es que el alumno suba o baje un grado según a quién se dirige." },
        ],
      },
      {
        id: "si-tendria",
        title: "Por qué «si tendría» es el error que más se fosiliza",
        blocks: [
          { type: "p", text: "En las oraciones con «si» que hablan de algo imaginario, el condicional va en la otra mitad de la frase, nunca detrás de «si»: «Si tuviera tiempo, viajaría más». El alumno dice «si tendría» porque en su cabeza las dos mitades son hipotéticas, y como se le entiende, nadie lo corrige. Para evitarlo:" },
          { type: "ul", items: [
            "enseña primero el condicional simple solo (yo que tú, me encantaría, viviría en…);",
            "cuando llegues a «si + imperfecto de subjuntivo», marca las dos mitades con colores distintos;",
            "corrige «si tendría» siempre, también cuando la conversación va bien: es el error que más dura;",
            "en algunas zonas se oye «si tendría» en la lengua oral, pero la norma no lo acepta y en un examen cuenta como error.",
          ] },
        ],
      },
    ],
    faq: [
      { question: "¿Qué verbos son irregulares en el condicional?", answer: "Los mismos doce que en el futuro, con las mismas raíces: tendría, pondría, saldría, vendría, valdría, podría, sabría, habría, querría, cabría, haría y diría. Si el alumno ya sabe el futuro, solo cambia la terminación." },
    ],
  },

  "/material-ele/verbos-reflexivos": {
    lote: "L1",
    title: "Verbos reflexivos ELE: actividades y ejercicios (A1–A2)",
    description: "Reflexivos con la rutina real del alumno: 6 actividades de clase, cambios de estado (ponerse, quedarse) y 20 frases con soluciones explicadas.",
    sections: [
      {
        id: "con-y-sin-pronombre",
        title: "Con pronombre o sin pronombre: pares que cambian el significado",
        intro: "La explicación «la acción vuelve al sujeto» no sirve para irse, dormirse o quedarse. Estos pares lo muestran mejor que cualquier regla.",
        blocks: [
          { type: "table", caption: "Verbos que cambian de significado con pronombre", head: ["Sin pronombre", "Con pronombre", "Ejemplo de clase"], rows: [
            ["dormir: estar dormido", "dormirse: empezar a dormir", "Duermo ocho horas, pero anoche me dormí a las dos."],
            ["ir: moverse hacia un lugar", "irse: dejar el lugar donde estás", "Voy al cine. ¿Ya te vas?"],
            ["quedar: tener una cita, sobrar", "quedarse: permanecer", "Quedé con Ana a las seis. Me quedo en casa."],
            ["llamar: telefonear", "llamarse: tener un nombre", "Llamo a mi madre. Me llamo Lucía."],
            ["poner: colocar algo", "ponerse: vestirse o cambiar de estado", "Pongo la mesa. Me pongo el abrigo. Se puso nervioso."],
            ["acordar: decidir entre varios", "acordarse (de): recordar", "Acordamos una fecha. ¿Te acuerdas de mí?"],
            ["parecer: dar una impresión", "parecerse (a): ser parecido", "Parece fácil. Te pareces a tu padre."],
            ["levantar: subir algo", "levantarse: salir de la cama", "Levanto la mano. Me levanto a las siete."],
          ] },
          { type: "p", text: "Para practicarlos, da al alumno la mitad de una frase y pídele que la termine con el verbo con o sin pronombre: «Estaba tan cansado que…» (me dormí), «La reunión terminó y…» (me fui)." },
        ],
      },
      {
        id: "errores-reflexivos",
        title: "Los cuatro errores de reflexivos que se oyen en A1 y A2",
        blocks: [
          { type: "ul", items: [
            "**Olvidar el pronombre:** «Yo levanto a las siete» → «Me levanto a las siete».",
            "**Duplicarlo:** «Me ducho me» o «Me voy a ducharme» → «Me ducho», «Me voy a duchar» o «Voy a ducharme».",
            "**Confundir dormir y dormirse:** «Anoche dormí a las dos» → «Anoche me dormí a las dos».",
            "**Mezclar personas con «se me olvidó»:** «Se me olvidé las llaves» → «Se me olvidaron las llaves»: el verbo concuerda con lo olvidado, no con la persona.",
          ] },
        ],
      },
    ],
    faq: [
      { question: "¿Por qué se dice «se me olvidaron las llaves» y no «me olvidé las llaves»?", answer: "Las dos son correctas. «Me olvidé de las llaves» presenta el olvido como algo que hace la persona; «se me olvidaron las llaves» lo presenta como algo que le pasa sin querer, y por eso el verbo concuerda con «las llaves». La segunda es muy frecuente al hablar." },
    ],
  },

  "/material-ele/comprension-auditiva": {
    lote: "L1",
    title: "Comprensión auditiva ELE: actividades y audios por nivel",
    description: "Seis actividades de comprensión auditiva para cualquier audio, audios gratis con transcripción y preguntas, y clases interactivas por nivel de A1 a C2.",
    sections: [
      {
        id: "audios-por-nivel",
        title: "Qué buscar en una escucha en cada nivel",
        intro: "Esta página explica cómo trabajar la escucha con cualquier audio. Cada nivel tiene su propia página con audios, guía de uso y clases.",
        blocks: [
          { type: "table", caption: "Qué entiende el alumno y qué tarea pedir en cada nivel", head: ["Nivel", "Qué entiende el alumno", "Tarea de la segunda escucha", "Página del nivel"], rows: [
            ["A1", "Situaciones cortas y muy claras: quién, dónde, qué necesita.", "Anotar un número, una hora o un lugar.", "[Comprensión auditiva A1](/material-ele/formatos/comprension-auditiva/a1): 4 audios gratis con transcripción"],
            ["A2", "Relatos breves en orden: qué pasaba y qué pasó.", "Ordenar los hechos y separar fondo y acción.", "[Comprensión auditiva A2](/material-ele/formatos/comprension-auditiva/a2): 4 audios gratis con transcripción"],
            ["B1", "Entrevistas y testimonios con opiniones.", "Decir qué opina cada hablante y por qué.", "[Comprensión auditiva B1](/material-ele/formatos/comprension-auditiva/b1): 4 audios gratis con transcripción"],
            ["C1", "Discurso largo con implícitos, ironía y cambios de registro.", "Explicar lo que se da a entender sin decirlo.", "[Comprensión auditiva C1](/material-ele/formatos/comprension-auditiva/c1): clases con escucha"],
          ] },
          { type: "p", text: "Si dudas del nivel de un audio, mira la tarea y no solo el vocabulario: un audio fácil sirve para B1 si la pregunta pide la opinión de cada hablante, y uno difícil sirve para A2 si la pregunta pide solo una hora o un lugar." },
        ],
      },
      {
        id: "elegir-audio",
        title: "Cómo elegir un audio para tu clase en tres preguntas",
        blocks: [
          { type: "ol", items: [
            "**¿Dura menos de un minuto?** En A1 y A2, más de un minuto por escucha cansa. Si el audio es largo, corta un fragmento.",
            "**¿Hay una situación clara?** El alumno tiene que poder decir dónde están y quién habla antes de entender los detalles.",
            "**¿Deja lengua para hablar?** El audio tiene que dar algo que el alumno pueda usar después para hablar de su vida: una costumbre, una opinión, una historia parecida.",
          ] },
        ],
      },
    ],
  },
};

export const pageRewrites: ReadonlyMap<string, PageRewrite> = new Map(Object.entries(rewrites));

/** Replaces `{n}` with the page's class count. */
export function fillCount(text: string, count: number): string {
  return text.replaceAll("{n}", String(count));
}
