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
  // Lote L2a (26/11/2026): briefs 23–27, 36, 37 y 39.
  "/material-ele/preguntas-de-conversacion": {
    lote: "L2",
    title: "Preguntas para clase de conversación en español (A1–C2)",
    description: "60 preguntas de conversación en español de A1 a C2, con la pregunta de seguimiento y el error que suele aparecer, para clases de adultos.",
    sections: [
      {
        id: "pregunta-seguimiento-error",
        title: "Cada pregunta, con su seguimiento y el error que provoca",
        intro: "Dos preguntas por nivel de la lista de abajo. La segunda columna es la que mantiene viva la conversación; la tercera, lo que vas a oír casi seguro.",
        blocks: [
          { type: "table", caption: "Preguntas de conversación por nivel con pregunta de seguimiento y error frecuente", head: ["Nivel", "Pregunta", "Pregunta de seguimiento", "Lo que suele fallar", "Cómo reaccionar"], rows: [
            ["A1", "¿Con quién vives?", "¿Desde cuándo vives con ellos?", "«Vivo con mi novia desde dos años».", "Devuelve la frase bien dicha: «Ah, desde hace dos años». Sin explicar la regla todavía."],
            ["A1", "¿A qué hora te levantas?", "¿Y los sábados también?", "«Me levanto a siete».", "Señala el reloj y di «a las siete». La hora lleva artículo: a las siete, a la una."],
            ["A2", "¿Qué hiciste el fin de semana pasado?", "¿Qué fue lo mejor?", "«Era muy divertido» para una fiesta que ya terminó.", "Pregunta «¿y cuándo terminó?»: si tiene final, va «fue»."],
            ["A2", "¿Cómo era tu escuela cuando eras niño o niña?", "¿Qué profesor recuerdas y por qué?", "«Mi escuela fue grande».", "Es una descripción del pasado: «era grande». Anota los dos pasados en dos columnas."],
            ["B1", "¿Qué consejo le darías a alguien que quiere vivir en tu país?", "¿Y qué no debería hacer nunca?", "«Le recomiendo que aprende el idioma».", "Recomendar pide subjuntivo: «que aprenda». Pide tres consejos más con la misma estructura."],
            ["B1", "¿Qué te molesta que hagan las personas en el transporte público?", "¿Alguna vez le dijiste algo a alguien?", "«Me molesta que la gente habla alto».", "Repite la pregunta, que ya trae la forma: «que hagan». El alumno corrige solo."],
            ["B2", "Si pudieras cambiar una ley de tu país, ¿cuál sería?", "¿Quién saldría perdiendo con ese cambio?", "«Si podría cambiar una ley…»", "Detrás de «si» no va condicional: «si pudiera». Corrígelo siempre, aunque la idea sea buena."],
            ["B2", "¿Deberían los museos ser gratis?", "¿Y quién pagaría entonces?", "Una opinión sin argumentos: «Creo que sí, porque es bueno».", "Pide dos razones unidas por «además» y una objeción con «sin embargo»."],
            ["C1", "¿Qué diferencia hay entre ser educado y ser sincero?", "¿Recuerdas una vez en que tuviste que elegir?", "«Depende de la situación», y nada más.", "Pide un caso concreto: en C1 la abstracción sin ejemplo es una forma de no hablar."],
            ["C1", "¿Qué hace que una disculpa sea creíble?", "¿Y una disculpa que no te creíste?", "«Lo que hace que es creíble…»", "«Hacer que» pide subjuntivo: «que sea». Es la misma forma que trae la pregunta."],
            ["C2", "¿Qué diferencia hay entre persuadir y manipular?", "¿Dónde pondrías la publicidad?", "Definir con «es cuando…».", "Ofrece el registro de C2: «persuadir consiste en…», «a diferencia de…»."],
            ["C2", "Defiende una opinión con la que no estás de acuerdo.", "¿Cuál es el punto más débil de lo que acabas de decir?", "Abandonar el papel en la primera objeción.", "Deja que piense y ofrécele una fórmula para ganar tiempo: «Entiendo la objeción, pero…»."],
          ] },
        ],
      },
      {
        id: "seguimiento-sin-interrogatorio",
        title: "Cómo hacer seguimiento sin convertir la clase en un interrogatorio",
        blocks: [
          { type: "ul", items: [
            "**Responde tú también.** Después de dos preguntas, cuenta tu respuesta en treinta segundos: el alumno oye un modelo de su nivel y la clase deja de ser una entrevista.",
            "**Pregunta por un detalle de lo que dijo,** no por un tema nuevo. «¿Y tu hermana qué opina?» funciona mejor que pasar a la pregunta siguiente de la lista.",
            "**No corrijas mientras habla.** Anota y vuelve a los errores al final, salvo el que bloquea el sentido.",
            "**Pide permiso antes de lo personal.** Familia, dinero o salud pueden ser temas incómodos: ofrece siempre otra pregunta para elegir.",
          ] },
          { type: "p", text: "Si buscas preguntas en inglés para alumnos principiantes, están en [Spanish conversation questions](/spanish-conversation-questions). Para que las preguntas lleven a una tarea con objetivo, mira los [juegos de conversación](/material-ele/formatos/juegos-de-conversacion) y la secuencia de las [actividades de conversación para adultos](/material-ele/guia/actividades-de-conversacion-en-espanol-para-adultos)." },
        ],
      },
    ],
  },

  "/material-ele/formatos/comprension-auditiva/c1": {
    lote: "L2",
    title: "Comprensión auditiva C1 en español: actividades y clases",
    description: "Comprensión auditiva para C1: ironía, implícitos, registros y acentos, en {n} clases interactivas con escucha y debate al final de cada audio.",
    h1: "Comprensión auditiva C1: {n} clases para entender lo que no se dice",
    intro: "Un alumno de C1 ya entiende casi todas las palabras de un audio. Lo que se le escapa es la intención: la ironía, la respuesta que esquiva la pregunta, el cambio de tono cuando alguien pasa de cordial a molesto. Esta página explica cómo trabajar esa capa en clase y reúne las {n} clases con escucha que sirven para C1.",
    sections: [
      {
        id: "que-entiende-c1",
        title: "Qué se entiende en C1 que no se entendía en B2",
        blocks: [
          { type: "p", text: "El MCER describe la escucha de C1 como comprender un discurso extenso aunque no esté bien estructurado y aunque las relaciones entre las ideas solo se den a entender. En la práctica, el salto desde B2 está en tres cosas:" },
          { type: "ul", items: [
            "**implícitos:** entender lo que alguien quiere decir sin decirlo (un rechazo cortés, una crítica en forma de pregunta);",
            "**ironía y humor:** notar que «qué bien» puede significar lo contrario, por la entonación y por el contexto;",
            "**registro y variedad:** reconocer cuándo alguien cambia de formal a coloquial y de qué zona es su acento, y qué dice eso de la situación.",
          ] },
        ],
      },
      {
        id: "lo-que-dijo",
        title: "La tarea de cada audio: lo que dijo y lo que quiso decir",
        intro: "Después de la primera escucha, el alumno anota frases que le llamaron la atención. En la segunda, completa esta tabla. Los ejemplos son del tipo de frase que buscas.",
        blocks: [
          { type: "table", caption: "Ejemplos de frases con intención implícita y la pista que la delata", head: ["Lo que dijo", "Lo que quiso decir", "La pista"], rows: [
            ["«Ya, claro, seguro que llega a tiempo».", "No cree que llegue.", "«Ya, claro» delante de una afirmación y la entonación que cae."],
            ["«No es que no me guste tu propuesta…»", "No le gusta, o no del todo.", "«No es que» + subjuntivo anuncia una objeción."],
            ["«Bueno, eso habría que verlo».", "No está de acuerdo.", "El condicional impersonal evita decir «yo no creo»."],
            ["«¿Y si lo dejamos para otro día?»", "No quiere hacerlo hoy, y quizá tampoco otro día.", "Una propuesta en forma de pregunta suaviza el rechazo."],
            ["«Yo no he dicho eso».", "Quizá lo pensó, pero no lo va a admitir.", "Niega la cita, no el hecho: es una evasiva."],
            ["«Hombre, tampoco es para tanto».", "Cree que el otro exagera.", "«Tampoco» + «para tanto» minimiza la queja del otro."],
          ] },
          { type: "p", text: "Para cerrar, el alumno elige una frase y la dice de dos maneras: con la intención literal y con la implícita. Si tú notas la diferencia sin ver la tabla, la tarea está hecha." },
        ],
      },
      {
        id: "clases-c1",
        title: "Cómo usar estas clases con un alumno de C1",
        blocks: [
          { type: "p", text: "Casi todas las clases de esta lista son mundos 3D que se usan en varios niveles, como Madrid infectada, El consorcio o Último crucero. Con un alumno de C1, usa el modo Comprensión auditiva del mismo mundo y, después de cada escucha, pide la tarea de arriba en lugar de preguntas de datos. La clase pensada solo para C1 es «La Entrevista que no Salió al Aire»: cinco fragmentos sin editar para detectar evasivas, cambios de registro, ironía y la frase que reinterpreta todo." },
          { type: "p", text: "Si el alumno se pierde con un acento, mira antes las [variedades del español](/material-ele/cultura/variedades-del-espanol). Para el resto del nivel, tienes el [material ELE C1](/material-ele/c1) y la página general de [comprensión auditiva ELE](/material-ele/comprension-auditiva)." },
        ],
      },
    ],
    faq: [
      syntheticVoices,
      { question: "¿Sirven estas clases para preparar el DELE C1?", answer: "Entrenan lo que más pesa en la comprensión auditiva del C1: entender la intención y la opinión de quien habla, no solo los datos. El formato no es el del examen, porque aquí cada escucha se puede repetir y termina en una conversación. Para acercarte al examen, pon cada audio dos veces seguidas y pide la tarea sin pausas." },
    ],
  },

  "/material-ele/perifrasis-verbales": {
    lote: "L2",
    title: "Perífrasis verbales ELE: actividades y ejercicios (B1–B2)",
    description: "Perífrasis por significado: empezar a, volver a, dejar de, seguir y las de obligación, con 5 actividades, 20 frases con soluciones y 7 clases interactivas.",
    sections: [
      {
        id: "linea-de-vida",
        title: "La línea de vida de una acción, con la perífrasis de cada punto",
        intro: "Dibuja una línea en la pizarra y marca los momentos de una acción cualquiera, por ejemplo estudiar alemán. Cada punto tiene su perífrasis, y cada perífrasis, su error.",
        blocks: [
          { type: "table", caption: "Momentos de una acción con la perífrasis que los expresa y el error frecuente", head: ["Momento", "Perífrasis", "Ejemplo", "Error frecuente"], rows: [
            ["Antes de empezar", "estar a punto de + infinitivo", "Estaba a punto de apuntarme a un curso.", "«Estaba a punto a apuntarme»: la preposición es «de»."],
            ["El inicio", "empezar a + infinitivo; ponerse a, si es brusco", "Empecé a estudiar en enero. Un día me puse a repasar a las tres de la mañana.", "«Empecé estudiar», sin «a»."],
            ["La duración", "llevar + tiempo + gerundio", "Llevo dos años estudiando alemán.", "«Llevo dos años que estudio»."],
            ["La continuidad", "seguir + gerundio", "Sigo estudiando los sábados.", "«Sigo a estudiar» o «sigo estudiar»."],
            ["La interrupción", "dejar de + infinitivo", "En verano dejé de ir a clase.", "«Dejé ir a clase», sin «de»."],
            ["La repetición", "volver a + infinitivo", "En septiembre volví a estudiar.", "«Volví estudiar», sin «a»."],
            ["El final reciente", "acabar de + infinitivo", "Acabo de aprobar el B1.", "Usarla como «terminar»: «acabé de estudiar alemán» no dice que fue hace un momento."],
          ] },
          { type: "p", text: "Con la línea dibujada, el alumno cuenta la vida de una afición suya pasando por todos los puntos. Es la versión larga de la actividad «Antes y ahora, con perífrasis» que tienes más abajo." },
        ],
      },
      {
        id: "deber-y-deber-de",
        title: "Deber y deber de: la diferencia que los alumnos de B2 preguntan",
        blocks: [
          { type: "p", text: "«Deber + infinitivo» expresa obligación: «Debes descansar más». «Deber de + infinitivo» expresa suposición: «Debe de estar cansado, no ha dormido». La norma acepta «deber» sin «de» también para suponer, pero no recomienda «deber de» para obligar. Así que la regla práctica para el alumno es: si duda, «deber» sin «de» nunca es un error grave." },
          { type: "p", text: "Para practicar todo esto con corrección, usa el [ejercicio de perífrasis verbales](/material-ele/ejercicio/perifrasis-verbales). Las perífrasis de cambio como «ponerse» o «volverse» están en [verbos de cambio](/material-ele/verbos-de-cambio), y las preposiciones que piden estos verbos, en [verbos con preposición](/verbos-con-preposicion)." },
        ],
      },
    ],
  },

  "/material-ele/conectores": {
    lote: "L2",
    title: "Conectores ELE: actividades y ejercicios por nivel",
    description: "Conectores del discurso por nivel y función (añadir, contrastar, concluir), con 3 actividades de relato y opinión y 20 frases con soluciones explicadas.",
    sections: [
      {
        id: "nivel-funcion",
        title: "Qué conector esperar en cada nivel, según lo que el alumno quiere hacer",
        intro: "La tabla es orientativa: marca desde qué nivel conviene pedir cada conector, siguiendo el orden de las clases del catálogo (secuencia en A2, contraste en B1, concesión en B2, reformulación en C1).",
        blocks: [
          { type: "table", caption: "Conectores del discurso por función y nivel MCER", head: ["Función", "A2", "B1", "B2", "C1"], rows: [
            ["Ordenar", "primero, después, luego, al final", "a continuación, por último", "en primer lugar, por un lado… por otro", "para empezar, a su vez"],
            ["Añadir", "y, también", "además", "incluso, es más", "asimismo, cabe añadir que"],
            ["Contrastar", "pero", "sin embargo, en cambio, aunque", "a pesar de que, por mucho que", "no obstante, ahora bien"],
            ["Dar la causa", "porque", "como, ya que", "puesto que, dado que", "debido a que, en vista de que"],
            ["Sacar la consecuencia", "por eso", "así que, entonces", "por lo tanto, de modo que", "por consiguiente, de ahí que"],
            ["Aclarar o cerrar", "—", "en resumen", "en definitiva, es decir", "en suma, mejor dicho, a saber"],
          ] },
          { type: "p", text: "Úsala al corregir un texto: si un alumno de B2 escribe cinco «pero» seguidos, no hay error gramatical, pero su texto suena a A2. Pídele que cambie dos por conectores de su columna." },
        ],
      },
      {
        id: "errores-conectores",
        title: "Cuatro errores con conectores que se corrigen en un minuto",
        blocks: [
          { type: "ul", items: [
            "**«Sin embargo» sin puntuación:** une dos ideas completas y va entre punto y coma, o punto, y coma: «Estudié mucho; sin embargo, no aprobé».",
            "**«Como» causal al final:** «Nos quedamos en casa como llovía» no funciona. «Como» va al principio: «Como llovía, nos quedamos en casa».",
            "**«O sea» en un texto formal:** es de la lengua oral. En un correo de trabajo o en el DELE, «es decir».",
            "**«De ahí que» con indicativo:** pide subjuntivo: «De ahí que nadie se quejara».",
          ] },
          { type: "p", text: "Para la práctica escrita, el [ejercicio de conectores](/material-ele/ejercicio/conectores) tiene soluciones explicadas. La progresión completa está en [cómo enseñar los conectores](/material-ele/guia/como-ensenar-los-conectores), y para usarlos hablando, la función [argumentar y debatir](/material-ele/funciones/argumentar-y-debatir)." },
        ],
      },
    ],
  },

  "/material-ele/guia/materiales-para-ensenar-espanol": {
    lote: "L2",
    title: "Materiales para enseñar español: guía para profesores (A1–C2)",
    description: "Qué materiales necesita una clase de español y dónde encontrarlos: fichas, ejercicios, audios, juegos y clases interactivas por nivel, y cómo elegir.",
    sections: [
      {
        id: "cinco-criterios",
        title: "Cinco criterios para elegir cualquier material, tuyo o ajeno",
        intro: "Pasa cualquier material por estas cinco preguntas antes de llevarlo a clase. Si falla en dos, adáptalo o busca otro.",
        blocks: [
          { type: "table", caption: "Cinco criterios para evaluar un material de español", head: ["Criterio", "La pregunta", "Señal de alerta"], rows: [
            ["Nivel", "¿La lengua de las instrucciones y de los textos es del nivel del alumno, no solo el tema?", "Un tema de A1 (la familia) con instrucciones de B2. Para comprobarlo, compara con los inventarios del PCIC."],
            ["Objetivo", "¿Qué podrá hacer el alumno al terminar que antes no podía?", "Si la respuesta es «practicar el subjuntivo», falta el objetivo comunicativo: pedir, aconsejar, quejarse."],
            ["Tiempo", "¿Cabe en tu clase con tiempo para hablar al final?", "Una ficha de 30 huecos ocupa la clase entera y no deja conversación."],
            ["Formato", "¿Funciona como lo vas a usar: proyectado, impreso o en pantalla compartida?", "PDF de tres columnas con letra pequeña: en una videollamada no se lee."],
            ["Licencia", "¿Puedes proyectarlo, imprimirlo para tu grupo o adaptarlo?", "Sin licencia indicada, en principio el autor se reserva los derechos. Las licencias «NC» (no comercial) pueden no cubrir clases que cobras: lee las condiciones."],
          ] },
        ],
      },
      {
        id: "recursos-institucionales",
        title: "Recursos institucionales y cómo usarlos sin perder tiempo",
        blocks: [
          { type: "ul", items: [
            "**Plan curricular del Instituto Cervantes (PCIC):** no es material de clase, sino la lista de qué gramática, funciones y vocabulario corresponden a cada nivel. Úsalo para comprobar el nivel de un material, no para preparar la clase.",
            "**Marco común europeo (MCER):** sus descriptores dicen qué sabe hacer un alumno en cada nivel. Sirven para escribir el objetivo de una clase en una frase.",
            "**Modelos de examen DELE:** el Instituto Cervantes publica exámenes de muestra. Son útiles para el último mes antes del examen, no como material de todo el curso.",
          ] },
          { type: "p", text: "Para materiales listos, empieza por el [material ELE](/material-ele) por nivel y por tema, las [fichas ELE](/material-ele/fichas) y las [plantillas para profesores](/material-ele/plantillas). Si buscas solo lo que se usa sin pagar, está reunido en [recursos ELE gratis](/material-ele/guia/recursos-ele-gratis)." },
        ],
      },
    ],
  },

  "/material-ele/cultura/fiestas-y-tradiciones/b2": {
    lote: "L2",
    description: "Fiestas y tradiciones del mundo hispano para B2: {n} clases interactivas para recorrer hablando, comparar costumbres y argumentar con escuchas por zona.",
    intro: "En B2 una fiesta deja de ser vocabulario y se vuelve tema de discusión: quién paga una boda, si una tradición molesta a los vecinos, qué costumbre de la familia sorprende a un extranjero. Estas {n} clases llevan al alumno a una boda en el campo, a una asamblea de vecinos, a la mañana después de una fiesta y a un banco de preguntas sobre tradiciones raras, y todas terminan en un debate con frases de valoración.",
    sections: [
      {
        id: "debate-tradiciones",
        title: "Tarea final: la tradición que conservarías y la que cambiarías",
        intro: "En B2 no basta con describir una fiesta: el alumno tiene que valorarla y defender su postura. Este debate guiado cierra cualquiera de las cuatro clases.",
        blocks: [
          { type: "table", caption: "Pasos del debate sobre tradiciones con frases B2 de valoración", head: ["Paso", "Qué hace el alumno", "Frases de B2"], rows: [
            ["1. Elegir", "Elige una tradición de su país o de su familia, o una de las clases: las doce uvas, una boda en el campo, el acta de la asamblea que escribe el último en llegar.", "«En mi familia se acostumbra a…», «Por tradición, quien llega último…»"],
            ["2. Describir sin juzgar", "Explica la tradición a alguien que nunca la vio, sin opinar todavía.", "«Consiste en…», «Se celebra cuando…»"],
            ["3. Valorar", "Dice qué le parece y por qué, con dos argumentos.", "«Me parece absurdo que + subjuntivo», «Lo que más valoro es que + subjuntivo»"],
            ["4. Conceder", "Reconoce un argumento del otro lado antes de mantener su postura.", "«Es verdad que…, pero», «Aunque sea una tradición, no justifica que…»"],
            ["5. Decidir", "La conserva tal cual, la cambia o la elimina, y propone cómo.", "«La mantendría siempre que + subjuntivo», «Habría que cambiarla para que + subjuntivo»"],
          ] },
          { type: "p", text: "Un aviso para el paso 2: pide que hable de su familia o de su ciudad, no de «los españoles» o «los mexicanos». Así se evitan los estereotipos y la descripción gana detalles reales." },
        ],
      },
      {
        id: "clases-b2-tradiciones",
        title: "De qué tradición sale cada clase",
        blocks: [
          { type: "ul", items: [
            "**La boda:** una boda en una estancia de San Antonio de Areco, del atardecer al amanecer, sin conocer a nadie.",
            "**El consorcio:** la asamblea de vecinos de un edificio de 1958 en Buenos Aires, donde por tradición el acta la escribe quien llegó último.",
            "**Objetos perdidos:** el turno de noche después de la Noche de los Faroles, la fiesta más grande de Puerto Alba.",
            "**Tradiciones que nadie entiende:** fin de año, supersticiones, ritos de paso y tradiciones polémicas, en seis categorías de preguntas.",
          ] },
          { type: "p", text: "Para otros niveles, la página de [fiestas y tradiciones](/material-ele/cultura/fiestas-y-tradiciones) enlaza todas las clases del tema. Para el resto del nivel, mira el [material ELE B2](/material-ele/b2)." },
        ],
      },
    ],
    faq: [
      { question: "¿Qué gramática de B2 aparece al hablar de tradiciones?", answer: "Sobre todo el subjuntivo para valorar («me parece absurdo que se gaste tanto»), las concesivas para matizar («aunque sea una tradición») y las condicionales para proponer cambios («si dependiera de mí, la cambiaría»). El debate de esta página las pide en ese orden." },
      { question: "¿Cómo evito que la clase se quede en estereotipos?", answer: "Pide ejemplos de la familia o de la ciudad del alumno, no de su país entero, y pregunta siempre «¿todo el mundo lo hace así?». Las clases ayudan porque cada personaje habla de su propia costumbre, no de la de un país." },
    ],
  },

  "/material-ele/b2": {
    lote: "L2",
    title: "Material ELE B2: actividades, ejercicios y clases",
    description: "Material ELE para B2: hipótesis, estilo indirecto y argumentación, con 3 actividades de clase, 8 frases con soluciones y 8 clases interactivas, una gratis.",
    sections: [
      {
        id: "mapa-b2",
        title: "El mapa del B2: qué tiene que poder hacer el alumno y con qué gramática",
        intro: "Cada fila une una función comunicativa del B2 con la gramática que necesita y la clase del catálogo que la trabaja.",
        blocks: [
          { type: "table", caption: "Funciones comunicativas del B2 con su gramática y su clase", head: ["El alumno tiene que poder…", "Gramática", "Clase"], rows: [
            ["Hablar de un futuro que no controla", "cuando, en cuanto, hasta que + presente de subjuntivo", "Temporales con subjuntivo para futuro incierto (gratis)"],
            ["Expresar deseos y valoraciones sobre el pasado", "imperfecto de subjuntivo", "Imperfecto de subjuntivo: deseos y perspectivas del pasado"],
            ["Negociar con condiciones", "si + imperfecto de subjuntivo, condicional", "Si + imperfecto de subjuntivo: negociar posibilidades"],
            ["Imaginar otro resultado para algo que ya pasó", "si hubiera + participio, habría + participio", "Condicionales del pasado: imaginar otros resultados"],
            ["Conceder sin cambiar de postura", "a pesar de que, por mucho que, por más que", "A pesar de que, por mucho que, por más que"],
            ["Contar lo que dijo otra persona", "correlación de tiempos y estilo indirecto", "Correlación temporal: presente, pasado y futuro"],
            ["Reconstruir un problema a partir de versiones distintas", "distinguir hechos e inferencias", "Habitación 508 (escucha de seis testimonios)"],
          ] },
          { type: "p", text: "Si el alumno domina las tres primeras filas, puede negociar y planear en español. Las tres siguientes son las que lo preparan para debatir y transmitir información, que es lo que más pesa en la prueba oral del DELE B2." },
        ],
      },
      {
        id: "errores-b2",
        title: "Dos errores que separan un B1 de un B2",
        blocks: [
          { type: "ul", items: [
            "**«No creo que es»:** las opiniones negadas piden subjuntivo, «no creo que sea». El alumno lo sabe en el ejercicio y lo olvida al debatir: corrígelo siempre en conversación.",
            "**Estilo indirecto mecánico:** cambiar todos los tiempos por regla. «Me dijo que venía mañana» puede ser correcto si mañana todavía no llegó. Antes de cambiar el tiempo, el alumno decide si el hecho sigue vigente.",
          ] },
          { type: "p", text: "Para practicar hablando, usa los [juegos de conversación B2](/material-ele/formatos/juegos-de-conversacion/b2); para ordenar los argumentos, los [conectores ELE](/material-ele/conectores); y para un tema cultural de este nivel, [fiestas y tradiciones B2](/material-ele/cultura/fiestas-y-tradiciones/b2). El estilo indirecto tiene su propia página: [estilo indirecto](/material-ele/estilo-indirecto)." },
        ],
      },
    ],
  },

  "/material-ele/preposiciones": {
    lote: "L2",
    title: "Preposiciones en español: actividades y ejercicios ELE",
    description: "Preposiciones en tres pasos: lugar y movimiento con objetos, tiempo en bloques y las que pide cada verbo, con 5 actividades y 20 frases con soluciones.",
    sections: [
      {
        id: "mapa-de-movimiento",
        title: "El mapa de movimiento: a, hacia, hasta, desde y por sobre un plano",
        intro: "Dibuja un plano sencillo: una estación, una plaza, un río y un puente. Cada preposición de movimiento dibuja una cosa distinta sobre ese plano.",
        blocks: [
          { type: "table", caption: "Preposiciones de movimiento con lo que dibujan sobre un plano de ciudad", head: ["Preposición", "Qué dibuja en el plano", "En la ciudad", "Error frecuente"], rows: [
            ["a", "El punto de llegada.", "Voy a la plaza.", "«Voy en la plaza»: con verbos de movimiento, el destino va con «a»."],
            ["hacia", "Una flecha: la dirección, sin decir si llegas.", "Camina hacia el río.", "Usarla como «a» cuando sí se llega: «llegué hacia la estación»."],
            ["hasta", "Una línea que termina en un tope.", "Sigue hasta el puente y para.", "Confundirla con «hacia»: «hasta» dice dónde termina el recorrido."],
            ["desde", "El punto de partida, a menudo con «hasta».", "Desde la estación hasta la plaza hay diez minutos.", "«De la estación hasta la plaza»: con «hasta», mejor «desde»."],
            ["por", "El recorrido a través de un lugar, o una zona aproximada.", "Pasa por la plaza. Vive por el centro.", "«Pasa a través la plaza»: «por» basta."],
            ["en", "El medio de transporte, o un lugar sin movimiento.", "Voy en metro. Estoy en la plaza.", "«Voy en pie»: a pie es la excepción."],
          ] },
          { type: "p", text: "Para la actividad, el alumno explica cómo llegar de la estación a un lugar del plano sin nombrar el destino, y tú lo adivinas siguiendo sus preposiciones con el dedo. Si se equivoca de preposición, llegas a otro sitio, y el error se ve." },
        ],
      },
      {
        id: "errores-de-otra-lengua",
        title: "Tres errores que vienen de otra lengua",
        blocks: [
          { type: "ul", items: [
            "**«Voy en Madrid»:** en muchas lenguas el mismo verbo sirve para estar y para ir. En español, ir a Madrid, estar en Madrid.",
            "**«Pienso de ti»:** cada verbo trae su preposición y no se traduce: pensar en, soñar con, depender de. Se aprenden juntos, como una sola palabra.",
            "**«En el lunes»:** los días de la semana van sin preposición: el lunes, los lunes. Con meses y años sí: en marzo, en 2026.",
          ] },
          { type: "p", text: "Para practicar con corrección, usa los [ejercicios de preposiciones](/material-ele/ejercicio/preposiciones) y la lista de [verbos con preposición](/verbos-con-preposicion). Las locuciones de lugar (encima de, al lado de) tienen su página: [preposiciones de lugar](/material-ele/preposiciones-de-lugar). Y si las vas a enseñar por primera vez, lee [cómo enseñar las preposiciones](/material-ele/guia/como-ensenar-las-preposiciones)." },
        ],
      },
    ],
  },
  // Lote L2d (26/11/2026): briefs 21, 28 y 35.
  "/material-ele/formatos/juegos-de-conversacion": {
    lote: "L2",
    title: "Juegos de conversación en español para la clase de ELE",
    description: "Juegos de conversación de A1 a C2: decisiones, misterios, tableros y mundos 3D con una pregunta en cada paso, y cuál elegir según el tiempo y el nivel.",
    intro: "Un juego de conversación funciona cuando para avanzar hay que hablar: elegir una salida y defenderla, convencer a un personaje, resolver un misterio. Aquí están las {n} clases de SpanishCue que funcionan así, de los roleplays de A1 a los casos de C2, y una tabla para elegir la adecuada según el tiempo que tienes y el nivel de tu alumno.",
    sections: [
      {
        id: "elegir-juego",
        title: "Qué juego elegir según el tiempo y el nivel",
        intro: "Busca la fila que se parece a tu clase de hoy. Todas las clases nombradas están en la lista de abajo.",
        blocks: [
          { type: "table", caption: "Elección de juego de conversación por tiempo, nivel y objetivo", head: ["Tienes…", "Tu alumno es…", "Y quieres…", "Empieza por"], rows: [
            ["45 minutos", "A1–A2", "situaciones reales de viaje con expresiones locales", "Un roleplay del mundo hispano: hay 20 países, cada uno con diez situaciones, como Roleplays de México o de Chile."],
            ["45 minutos", "A2, en grupo", "pedir, reclamar y comparar entre varios", "La feria de Villaluz: encontrar a personas entre la gente y contar la noche."],
            ["45 minutos", "B1", "que decida y justifique", "Uno o el otro, ¿Y ahora qué? o Ciudad en juego: bancos de elecciones, problemas y negociaciones que se pueden repetir con otros temas."],
            ["45 minutos", "B1–B2", "una conversación más personal", "De eso sí hablo (B1) o No es tan simple (B2): tableros de 72 preguntas, o Red Flag o No en su nivel."],
            ["De 45 a 90 minutos, o varias clases", "cualquier nivel", "un mundo para recorrer con escenas y escuchas", "Un mundo 3D del Modo Play: Vuelo cancelado, El consorcio o El tren de las 23:40. Cada escena trae un problema y una conversación."],
            ["Una clase suelta", "cualquier nivel", "variedad: muchos juegos distintos en una sesión", "Noche abierta: diez lugares de un barrio de noche, con un juego de conversación distinto en cada uno."],
            ["45 minutos", "C2", "inferir intenciones y negociar el sentido", "El Ministerio de las Versiones: cinco casos con relatos incompatibles."],
          ] },
          { type: "p", text: "Si buscas juegos para la clase en general (calentamientos, repasos de vocabulario, dinámicas de grupo), están en [juegos para clase de español](/material-ele/juegos-para-clase-de-espanol). Esta página es solo de juegos que obligan a conversar." },
        ],
      },
      {
        id: "que-no-falle",
        title: "Tres formas en que un juego de conversación falla, y cómo evitarlas",
        blocks: [
          { type: "ul", items: [
            "**Se gana sin hablar.** Si el alumno puede elegir con un clic y avanzar, el juego le gana a la conversación. Regla de la clase: antes de cada clic, una frase que explique por qué.",
            "**Turnos desiguales.** En grupo, el más rápido juega por todos. Reparte los turnos antes de empezar y que cada uno defienda una opción distinta.",
            "**El alumno lee en vez de conversar.** Los textos de la pantalla son el punto de partida, no la respuesta. Después de leer, pregunta por su vida: «¿y a ti te pasó algo así?».",
          ] },
          { type: "p", text: "Para B2 tienes una página propia con estas clases ordenadas por tipo de juego: [juegos de conversación B2](/material-ele/formatos/juegos-de-conversacion/b2). Para preguntas sueltas, mira las [preguntas para clase de conversación](/material-ele/preguntas-de-conversacion)." },
        ],
      },
    ],
    faq: [
      { question: "¿Sirven los juegos de conversación para clases individuales en línea?", answer: "Sí, y es donde más rinden: compartes la pantalla, el alumno decide qué hacer en cada paso y tú haces de compañero de juego. En un grupo, reparte los turnos antes de empezar para que no juegue solo el más rápido." },
      { question: "¿Un mundo 3D del Modo Play sirve para un alumno de A1?", answer: "Sí, si cambias lo que pides. Con un A1, quédate con la escucha de cada escena y pide datos concretos (dónde está el personaje, qué necesita, a qué hora). Con un B2 o un C1, el mismo mundo sirve para negociar, convencer y debatir." },
      { question: "¿Cuánto dura una partida?", answer: "Los bancos y tableros están pensados para unos 45 minutos y se pueden repetir con otros temas. Los mundos 3D dan para 45 a 90 minutos: puedes recorrer una parte en una clase y seguir en la siguiente." },
    ],
  },

  "/material-ele": {
    lote: "L2",
    sections: [
      {
        id: "por-donde-empezar",
        title: "Por dónde empezar en cada nivel",
        intro: "Si es la primera vez que entras, esta tabla te lleva en dos clics a algo que puedes usar hoy: el nivel de tu alumno y un tema clave de ese nivel.",
        blocks: [
          { type: "table", caption: "Página de nivel y temas clave de Material ELE para cada nivel", head: ["Nivel", "Lo que el alumno necesita", "Temas para empezar"], rows: [
            ["[A1](/material-ele/a1)", "Presentarse, hablar de su rutina y de lo que hay a su alrededor.", "[Presente de indicativo](/material-ele/presente-de-indicativo) · [ser y estar](/material-ele/ser-y-estar)"],
            ["[A2](/material-ele/a2)", "Contar lo que hizo y cómo eran las cosas antes.", "[Indefinido e imperfecto](/material-ele/indefinido-e-imperfecto) · [pretérito perfecto](/material-ele/preterito-perfecto)"],
            ["[B1](/material-ele/b1)", "Opinar, aconsejar y pedir con cortesía.", "[Subjuntivo](/material-ele/subjuntivo) · [condicional](/material-ele/condicional)"],
            ["[B2](/material-ele/b2)", "Argumentar, conceder y contar lo que dijeron otros.", "[Estilo indirecto](/material-ele/estilo-indirecto) · [conectores](/material-ele/conectores)"],
            ["[C1](/material-ele/c1)", "Matizar, imaginar el pasado de otra manera y entender lo implícito.", "[Si hubiera sabido](/material-ele/si-hubiera-sabido) · [oraciones concesivas](/material-ele/oraciones-concesivas)"],
            ["[C2](/material-ele/c2)", "Jugar con el registro, la ironía y la precisión.", "[Comprensión auditiva](/material-ele/comprension-auditiva) · [preguntas de conversación](/material-ele/preguntas-de-conversacion)"],
          ] },
          { type: "p", text: "Cada página de tema tiene actividades de clase con pasos y frases modelo, un ejercicio con soluciones y las clases interactivas del tema. Si lo que buscas es un tipo de clase y no un tema, mira [juegos de conversación](/material-ele/formatos/juegos-de-conversacion) o las [fichas ELE](/material-ele/fichas)." },
        ],
      },
    ],
  },

  "/material-ele/ejercicio/subjuntivo": {
    lote: "L2",
    title: "Ejercicios de subjuntivo con soluciones y PDF (B1–C1)",
    description: "Ejercicio de presente de subjuntivo con soluciones: 22 frases de deseo, duda, valoración y «cuando», y las formas regulares e irregulares en una tabla.",
    sections: [
      {
        id: "formas-subjuntivo",
        title: "Cómo se forma el presente de subjuntivo",
        intro: "Antes del ejercicio, las formas. El truco: se parte del «yo» del presente de indicativo y se cambia la vocal de la terminación.",
        blocks: [
          { type: "table", caption: "Formación del presente de subjuntivo con verbos regulares e irregulares", head: ["Grupo", "Yo del presente", "Presente de subjuntivo", "Ojo"], rows: [
            ["Verbos en -ar", "hablo", "hable, hables, hable, hablemos, hablen", "La -a pasa a -e."],
            ["Verbos en -er e -ir", "como, vivo", "coma, comas, coma, comamos, coman · viva, vivas…", "La -e o la -i pasan a -a."],
            ["Irregulares en el yo", "tengo, hago, digo, pongo, salgo, conozco", "tenga, haga, diga, ponga, salga, conozca", "La irregularidad del «yo» pasa a todas las personas."],
            ["Cambio de vocal", "quiero, puedo, pido", "quiera, pueda, pida · queramos, podamos, pidamos", "En «nosotros», querer y poder recuperan la vocal; pedir mantiene la -i."],
            ["Los seis que no siguen el truco", "soy, estoy, voy, he, sé, doy", "sea, esté, vaya, haya, sepa, dé", "Se aprenden de memoria. «Dé» lleva tilde para no confundirse con la preposición."],
          ] },
          { type: "p", text: "Y la ortografía: «busque», «llegue», «empiece», «escoja». La letra cambia para que el sonido se mantenga, no porque el verbo sea irregular." },
        ],
      },
      {
        id: "errores-subjuntivo",
        title: "Los cuatro errores que este ejercicio corrige",
        blocks: [
          { type: "ul", items: [
            "**«Quiero que vienes»:** con deseo y otro sujeto, subjuntivo: «quiero que vengas». Con el mismo sujeto, infinitivo: «quiero ir».",
            "**«Cuando llegaré»:** con «cuando» y un momento futuro, presente de subjuntivo: «cuando llegue, te llamo».",
            "**«Ojalá viene»:** «ojalá» va siempre con subjuntivo: «ojalá venga».",
            "**«Creo que sea»:** la opinión afirmativa va con indicativo, «creo que es»; la negada, con subjuntivo, «no creo que sea».",
          ] },
          { type: "p", text: "Esta página es de formas y usos básicos. Para practicar la elección entre los dos modos con más frases, usa [indicativo o subjuntivo](/indicativo-o-subjuntivo), y para enseñarlo en clase, lee [cómo enseñar el subjuntivo](/material-ele/guia/como-ensenar-el-subjuntivo)." },
        ],
      },
    ],
    faq: [
      { question: "¿En qué orden conviene enseñar los usos del subjuntivo?", answer: "Primero el deseo con otro sujeto («quiero que vengas»), porque el alumno ve claro el cambio de sujeto. Después la valoración («es importante que») y la reacción («me alegro de que»), luego «cuando» con futuro y, al final, la duda y la opinión negada, que son las que más se confunden con el indicativo." },
      { question: "¿Con «quizá» y «tal vez» va siempre subjuntivo?", answer: "No. Admiten los dos modos: «quizá llegan tarde» presenta la posibilidad como más probable que «quizá lleguen tarde». Por eso en el ejercicio esa frase acepta las dos respuestas." },
    ],
  },
};

export const pageRewrites: ReadonlyMap<string, PageRewrite> = new Map(Object.entries(rewrites));

/** Replaces `{n}` with the page's class count. */
export function fillCount(text: string, count: number): string {
  return text.replaceAll("{n}", String(count));
}
