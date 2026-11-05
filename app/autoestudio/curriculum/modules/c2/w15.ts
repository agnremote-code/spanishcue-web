import type { Module } from "../../types";

/**
 * C2 · semana 15 · Checkpoint. Autoestudio espejo de G227 (discursos
 * periodísticos: atribución y precisión) y G228 (reformulación entre registro
 * técnico y cotidiano), con integración de G221–G226 (semanas 11 a 14). Repaso
 * autónomo con la redacción ficticia de un diario digital de La Habana que
 * convierte un informe técnico sobre el blanqueamiento de los corales en una
 * noticia. Personas, entidades y cifras son ficticias. Audio mediante síntesis;
 * sin acreditación regional.
 */
export const c2w15: Module = {
  id: "c2-15",
  level: "c2",
  week: 15,
  kind: "checkpoint",
  title: "Checkpoint: del informe técnico a la noticia",
  subtitle: "Repaso de la atribución y la precisión periodísticas y de la reformulación entre registros, e integración de las semanas 11 a 14",
  stop: {
    place: "La Habana",
    country: "Cuba",
  },
  minutes: 150,
  newObjectives: [
    "c2.gram.g227",
    "c2.gram.g228",
    "c2.voc.w15-arrecife-redaccion",
    "c2.pron.w15-cifras-en-voz-alta",
    "c2.lis.w15-mesa-de-redaccion",
    "c2.read.w15-noticia-corales",
    "c2.wri.w15-noticia-precisa",
    "c2.spk.w15-explicar-en-radio",
    "c2.fun.w15-traducir-sin-traicionar",
    "c2.disc.w15-fuente-y-dato",
    "c2.rev.w15-semanas-11-15",
  ],
  reviewObjectives: [],
  prerequisites: [],
  goal: {
    canDo: "Puedo convertir un informe técnico en una noticia neutral y exacta, con titular, entradilla, citas bien puntuadas, verbos de atribución justos y cifras precisas, explicar su contenido en lenguaje cotidiano sin perder ni inventar información e integrar lo repasado en las semanas 11 a 14.",
    steps: [
      "Repasa en la teoría la gramática del titular y la entradilla, la atribución y las cifras, las operaciones de reformulación entre registros y la tabla de integración de las semanas 11 a 14.",
      "Practica con fragmentos del informe de una estación de biología marina, con borradores de la noticia y con mensajes de la redacción.",
      "Escucha la reunión de la mesa de redacción y lee la noticia publicada sobre el blanqueamiento de los corales.",
      "Redacta tu propia noticia, revísala con la lista de control integrada y explica el informe en voz alta como si estuvieras en la radio.",
    ],
  },
  theory: {
    intro: "En clase viste con tu profesor cómo se escribe una noticia que no dice ni más ni menos que sus fuentes y cómo se pasa un contenido técnico a lenguaje cotidiano sin traicionarlo. Aquí lo repasas en una redacción de La Habana que tiene que contar un informe sobre los arrecifes de la costa norte. Como es semana de integración, la última parte reúne lo de las semanas 11 a 14 en el mismo material.",
    parts: [
      {
        heading: "Titular y entradilla: la gramática de la primera línea",
        body: [
          "La noticia empieza por lo más importante. La entradilla, el primer párrafo, responde en una o dos frases a las preguntas básicas: qué, quién, cuándo, dónde, cómo y por qué. El resto del texto amplía en orden de importancia decreciente, de modo que el lector que abandona a mitad se lleva lo esencial.",
          "El titular tiene su propia gramática. El presente se usa para hechos recientes, aunque sean pasados («Un informe alerta del blanqueamiento de los corales»). Son frecuentes los titulares con participio sin verbo conjugado («Detectado un aumento…»), los nominales («Alerta en los arrecifes de la costa norte») y la omisión del artículo inicial. El infinitivo solo es adecuado en titulares de servicio («Cómo reportar un coral blanqueado»). Una cita puede ir tras dos puntos: «Castañeda: «El arrecife todavía puede recuperarse»». El titular no lleva punto final.",
        ],
        table: {
          caption: "Tipos de titular con el mismo hecho",
          head: ["Tipo", "Titular", "Comentario"],
          rows: [
            ["verbal en presente", "Un informe detecta corales blanqueados en el 38 % de las colonias", "hecho reciente en presente"],
            ["participio", "Detectados corales blanqueados en el 38 % de las colonias", "sin verbo conjugado"],
            ["nominal", "Blanqueamiento récord en los arrecifes de la costa norte", "solo si «récord» está en la fuente"],
            ["cita", "Castañeda: «El arrecife todavía puede recuperarse»", "dos puntos y comillas, sin punto final"],
            ["servicio", "Cómo distinguir un coral blanqueado de uno muerto", "infinitivo: solo en titulares de servicio"],
          ],
        },
        mistakes: [
          {
            wrong: "Detectar corales blanqueados en la costa norte.",
            right: "Detectados corales blanqueados en la costa norte",
            why: "El infinitivo no sirve para informar de un hecho, y el titular no lleva punto final.",
          },
        ],
        tip: "Antes de escribir la entradilla, escribe las seis preguntas en una lista y respóndelas con datos de la fuente. Si alguna no tiene respuesta, no la inventes: déjala fuera o di que no se sabe.",
      },
      {
        heading: "Atribuir con justicia y dar las cifras exactas",
        body: [
          "Cada dato tiene dueño y cada verbo de atribución tiene carga. «Dijo», «afirmó», «explicó» o «señaló» son neutros. «Admitió» y «reconoció» presentan lo dicho como una concesión; «denunció» y «alegó», como una acusación o una defensa; «cedió», como una derrota. Elegir uno de estos verbos sin que la fuente lo justifique es opinar dentro de la noticia.",
          "La cita directa se escribe entre comillas y, si el verbo va detrás, con coma: «La mortalidad todavía es baja», explicó Castañeda. Si el periodista intercala su inciso dentro de la cita, lo hace con rayas: «El arrecife se recupera —explicó Castañeda—, pero muy despacio». El punto va después de las comillas de cierre. Las fuentes deben identificarse: «en un comunicado», «según ha podido saber este diario», «fuentes de la estación consultadas por este medio». Las fórmulas vagas que se combinan con un condicional de rumor («fuentes cercanas aseguraron que se habría…») acumulan dos niveles de incertidumbre y no informan.",
          "Las cifras exigen la misma precisión. «Más de», «cerca de» y «casi» no son intercambiables: 312 son «más de trescientos», no «casi trescientos». Si un porcentaje pasa del 20 % al 30 %, sube diez puntos porcentuales, que es un aumento del 50 %. «Billion» del inglés equivale a «mil millones». Los meses se escriben con minúscula. Y «presunto» se aplica a quien se atribuye un delito no probado; «supuesto», a lo que se da por cierto sin comprobarlo.",
        ],
        examples: [
          { es: "«Hemos encontrado colonias blanqueadas hasta a quince metros de profundidad», señaló la investigadora.", note: "Cita directa, coma tras las comillas, verbo neutro." },
          { es: "«La recuperación es posible —precisó Castañeda—, pero depende de que el agua se enfríe antes de noviembre».", note: "Raya para el inciso del periodista dentro de la cita." },
          { es: "El porcentaje de colonias afectadas pasó del 24 % en 2023 al 38 % este año, catorce puntos porcentuales más.", note: "Diferencia en puntos, no en porcentaje." },
        ],
        mistakes: [
          {
            wrong: "La directora de la estación admitió que el agua alcanzó los 31 grados.",
            right: "La directora de la estación informó de que el agua alcanzó los 31 grados.",
            why: "«Admitió» presenta el dato como algo que se reconoce a regañadientes; nada en la fuente lo justifica.",
          },
          {
            wrong: "La temperatura subió un 3 % (de 29 °C a 32 °C), según el informe.",
            right: "La temperatura subió tres grados, de 29 °C a 32 °C, según el informe.",
            why: "Las diferencias de temperatura se expresan en grados; el porcentaje es engañoso aquí.",
          },
        ],
      },
      {
        heading: "Del registro técnico al cotidiano, y de vuelta, sin perder nada",
        body: [
          "Reformular para un público general no es resumir: es conservar la información con otros medios. Las operaciones básicas son cinco. Sustituir el término técnico por uno común o explicarlo la primera vez («blanqueamiento, es decir, la pérdida de color de los corales cuando expulsan las algas que los alimentan»). Deshacer las nominalizaciones en frases con verbo conjugado («se produjo un incremento de la mortalidad» → «murieron más corales»). Pasar la pasiva a activa con agente explícito cuando el agente importa. Simplificar la subordinación sin perder las condiciones («salvo que», «aunque»). Y apoyarse en ejemplos o analogías, sabiendo dónde dejan de valer.",
          "Lo que nunca se pierde es la cautela y la frecuencia de la fuente. «Puede aumentar el riesgo» no es «causa»; «en la mayoría de las colonias» no es «en todas»; «entre el 30 y el 40 %» no se convierte en «un tercio» si el texto no lo autoriza. Tampoco se inventa precisión: si el informe dice «a finales de agosto», no escribas «el 28 de agosto».",
          "La operación inversa también existe: un relato oral o un mensaje informal se convierte en informe. Entonces se nombran los agentes, se ponen horas exactas solo si se conocen y se mantiene la incertidumbre de quien lo contó («según el buzo, hacia las diez»). Los marcadores de reformulación, «es decir», «o sea», «dicho de otro modo», «en otras palabras» o «lo que viene a significar», ayudan en las dos direcciones.",
        ],
        table: {
          caption: "Informe técnico y versión cotidiana",
          head: ["Informe técnico", "Versión cotidiana", "Qué se conserva"],
          rows: [
            ["Se constató un episodio de blanqueamiento masivo.", "Muchos corales perdieron el color al mismo tiempo.", "la extensión del fenómeno"],
            ["La anomalía térmica podría incrementar la mortalidad.", "El agua más caliente de lo normal puede hacer que mueran más corales.", "la cautela de «podría»"],
            ["Salvo que la temperatura descienda antes de noviembre, cabe prever pérdidas.", "Si el agua no se enfría antes de noviembre, es probable que se pierdan corales.", "la condición y la probabilidad"],
            ["Se detectó afectación en la mayoría de las colonias muestreadas.", "Más de la mitad de los corales revisados estaban afectados.", "«la mayoría», no «todos»"],
          ],
        },
        mistakes: [
          {
            wrong: "Versión cotidiana: «El calor está matando todos los corales de La Habana».",
            right: "«El agua más caliente de lo normal ha afectado a más de la mitad de los corales revisados, y algunos podrían morir si no se enfría pronto».",
            why: "La versión equivocada pierde la cautela, cambia «la mayoría» por «todos» y extiende el dato a toda la costa.",
          },
          {
            wrong: "Informe: «A las 10:14 el buzo detectó el blanqueamiento». (El buzo solo dijo «sobre las diez»).",
            right: "«Hacia las diez de la mañana, según el buzo, se detectó el blanqueamiento».",
            why: "Al subir de registro no se inventa una precisión que la fuente no da.",
          },
        ],
      },
      {
        heading: "Integración: las semanas 11 a 14 en la misma redacción",
        body: [
          "La noticia de los corales reúne todo lo repasado este mes. La científica gradúa su compromiso con fórmulas de certeza y de posibilidad, y el periodista tiene que conservarlas (semana 11, G221). La editora corrige al reportero y pide a la fuente que revise los datos dosificando la cortesía (G222). Un titular irónico o una lítote mal elegida pueden desfigurar la información (semana 12, G223). En la reunión se negocia el titular con marcadores (semana 13, G224), y el informe técnico está escrito con la cautela del texto académico (G225). Por último, la resolución que prohíbe fondear en la zona tiene la sintaxis densa del texto administrativo (semana 14, G226).",
          "Úsalos juntos: un verbo de atribución neutro evita que una fórmula de posibilidad («no es descartable») se convierta en una alarma; un «eso sí» en la reunión salva una condición que después aparece en la entradilla; y la explicación en lenguaje claro de «sin perjuicio de» evita que los pescadores lean una prohibición como un permiso.",
        ],
        table: {
          caption: "Un caso por clase, con el material de esta semana",
          head: ["Semana y clase", "Fragmento", "Decisión"],
          rows: [
            ["11 · G221", "«No es descartable que mueran colonias enteras»", "conservar la posibilidad: no «morirán colonias enteras»"],
            ["11 · G222", "«Mándame los datos ya»", "«¿Podría revisar las cifras antes de las seis? Se lo agradecería mucho»"],
            ["12 · G223", "«El verano no ha sido precisamente fresco»", "en la noticia, el dato: «el agua alcanzó 31 °C»"],
            ["13 · G224", "«Bueno, vale; eso sí, sin la palabra catástrofe»", "condición que llega al titular"],
            ["13 · G225", "«Los datos sugieren una asociación con la anomalía térmica»", "no convertirla en «el calor causó»"],
            ["14 · G226", "«sin perjuicio de las sanciones que procedan»", "«además, se puede multar»"],
          ],
        },
        examples: [
          { es: "«Por ahora la mortalidad es baja —precisó Castañeda—, pero no es descartable que aumente si el agua no se enfría».", note: "G227 (raya) + G221 (posibilidad) + G228 (condición conservada)." },
          { es: "La resolución prohíbe fondear en la zona; además, y sin que esto lo impida, se podrán imponer sanciones.", note: "G226 en lenguaje claro dentro de una noticia." },
        ],
        tip: "Antes de entregar la noticia, revisa cada párrafo con una pregunta de cada semana: ¿conservé la cautela de la fuente?, ¿la petición a la fuente fue cortés?, ¿hay alguna ironía o lítote equívoca?, ¿distinguí asociación y causa?, ¿expliqué la norma sin cambiar su efecto?",
      },
    ],
  },
  grammar: {
    intro: "Primero identifica a quién pertenece cada dato y qué grado de certeza tiene; después elige la forma periodística.",
    exercises: [
      {
        id: "c2-15-gramatica-atribucion",
        type: "context",
        prompt: "Lee la situación y elige la frase periodística más justa.",
        items: [
          {
            context: "La directora de la estación informa, sin que nadie se lo haya preguntado, de que la temperatura del agua llegó a 31 °C en agosto.",
            q: "¿Qué frase es neutral?",
            options: [
              "La directora admitió que el agua llegó a 31 °C en agosto.",
              "La directora señaló que el agua llegó a 31 °C en agosto.",
              "La directora denunció que el agua llegó a 31 °C en agosto.",
            ],
            answer: 1,
            why: "«Señaló» es neutro; «admitió» y «denunció» añaden una interpretación.",
          },
          {
            context: "Un pescador comenta al reportero que «dicen» que la estación va a cerrar la playa. Nadie de la estación lo confirma.",
            q: "¿Qué debe hacer la noticia?",
            options: [
              "Escribir que fuentes cercanas aseguran que se habría decidido cerrar la playa.",
              "Titular que la estación cierra la playa.",
              "No publicar el rumor como información o indicar que la estación no lo ha confirmado.",
            ],
            answer: 2,
            why: "Una fuente vaga con condicional de rumor no informa; o se confirma o se aclara que no hay confirmación.",
          },
          {
            context: "El informe dice que el porcentaje de colonias afectadas pasó del 24 % al 38 %.",
            q: "¿Qué frase es exacta?",
            options: [
              "Las colonias afectadas aumentaron catorce puntos porcentuales.",
              "Las colonias afectadas aumentaron un 14 %.",
              "Las colonias afectadas se duplicaron.",
            ],
            answer: 0,
            why: "La diferencia entre dos porcentajes se expresa en puntos porcentuales.",
          },
          {
            context: "El informe se refiere a 512 colonias revisadas.",
            q: "¿Qué aproximación es correcta?",
            options: [
              "casi quinientas colonias",
              "más de quinientas colonias",
              "cerca de seiscientas colonias",
            ],
            answer: 1,
            why: "512 supera las quinientas: «más de».",
          },
        ],
      },
      {
        id: "c2-15-gramatica-puntuacion",
        type: "gap",
        prompt: "Completa con el signo, la palabra o la forma que falta.",
        items: [
          { q: "«El arrecife todavía puede recuperarse» ___ dijo la bióloga.", answers: [[","]], why: "Cita directa + verbo detrás: coma tras las comillas." },
          { q: "«La mortalidad es baja ___ precisó Castañeda—, pero puede aumentar».", answers: [["—"]], why: "Raya de apertura para el inciso del periodista dentro de la cita." },
          { q: "El informe se publicó el 3 de ___ en la web de la estación. [mes de septiembre]", answers: [["septiembre", "setiembre"]], why: "Los meses van con minúscula." },
          { q: "El Gobierno anunció una inversión de dos ___ de dólares. [traducción de «two billion»]", answers: [["mil millones"]], why: "«Billion» del inglés equivale a «mil millones»." },
          { q: "Muchos corales perdieron el color, ___, expulsaron las algas que los alimentan. [marcador de reformulación]", answers: [["es decir", "o sea", "dicho de otro modo", "en otras palabras"]], why: "Un marcador explica el término técnico." },
          { q: "Si el agua no se ___ antes de noviembre, es probable que mueran más corales. [enfriar]", answers: [["enfría"]], why: "La condición del informe se conserva con «si» + indicativo." },
        ],
      },
      {
        id: "c2-15-gramatica-reformulacion",
        type: "classify",
        prompt: "Clasifica cada versión cotidiana según si conserva la información del informe o la altera.",
        categories: ["Conserva la información", "Pierde una cautela, una condición o un agente", "Inventa una precisión"],
        items: [
          { text: "Informe: «podría incrementar la mortalidad». Versión: «puede hacer que mueran más corales».", cat: 0, why: "Se mantiene la posibilidad." },
          { text: "Informe: «en la mayoría de las colonias». Versión: «en todas las colonias».", cat: 1, why: "Se pierde la frecuencia." },
          { text: "Informe: «a finales de agosto». Versión: «el 28 de agosto».", cat: 2, why: "La fecha exacta no está en la fuente." },
          { text: "Informe: «salvo que la temperatura descienda». Versión: «los corales morirán».", cat: 1, why: "Se pierde la condición." },
          { text: "Informe: «se detectó afectación». Versión: «los buzos de la estación vieron corales dañados».", cat: 0, why: "Se hace explícito el agente, que consta en el informe." },
          { text: "Informe: «entre el 30 y el 40 %». Versión: «exactamente un tercio».", cat: 2, why: "Se convierte un intervalo en una cifra exacta." },
        ],
      },
      {
        id: "c2-15-gramatica-errores",
        type: "error",
        prompt: "Cada frase tiene un error de redacción periodística documentado. Corrígelo.",
        items: [
          {
            sentence: "A nivel de temperatura, el agua alcanzó los 31 grados en agosto.",
            answers: ["En cuanto a la temperatura, el agua alcanzó los 31 grados en agosto.", "El agua alcanzó los 31 grados en agosto."],
            why: "«A nivel de» sin idea de nivel o altura es una muletilla desaconsejada.",
          },
          {
            sentence: "El patrón del barco infligió la prohibición de fondear en la zona protegida.",
            answers: ["El patrón del barco infringió la prohibición de fondear en la zona protegida."],
            why: "«Infringir» es incumplir una norma; «infligir» es causar un daño o imponer un castigo.",
          },
          {
            sentence: "La estación presentó el informe y la directora resumió los resultados del mismo.",
            answers: ["La estación presentó el informe y la directora resumió sus resultados."],
            why: "«El mismo» como pronombre anafórico se desaconseja.",
          },
          {
            sentence: "Señalar, por último, que la estación repetirá el muestreo en diciembre.",
            answers: ["Por último, la estación repetirá el muestreo en diciembre.", "Por último, cabe señalar que la estación repetirá el muestreo en diciembre."],
            why: "Infinitivo usado como verbo principal («infinitivo radiofónico»): hace falta un verbo conjugado.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Palabras para hablar de un arrecife en peligro y del trabajo de una redacción que cuenta un informe científico.",
    groups: [
      {
        title: "El arrecife",
        items: [
          { es: "el blanqueamiento", note: "pérdida de color de los corales cuando expulsan las algas que los alimentan" },
          { es: "la colonia de coral", note: "conjunto de pólipos que crecen unidos y forman una estructura" },
          { es: "la anomalía térmica", note: "temperatura del agua por encima de la habitual para la época" },
          { es: "fondear", note: "echar el ancla para detener una embarcación" },
          { es: "el muestreo", note: "selección y revisión de una parte de algo para estudiar el conjunto" },
          { es: "la zona protegida", note: "área con normas especiales para conservar su naturaleza" },
          { es: "el buzo", note: "persona que trabaja sumergida en el agua" },
        ],
      },
      {
        title: "La redacción",
        items: [
          { es: "la entradilla", note: "primer párrafo de una noticia, que resume lo esencial" },
          { es: "el titular", note: "título de una noticia" },
          { es: "contrastar una fuente", note: "comprobar un dato con otra fuente independiente" },
          { es: "la nota de prensa", note: "comunicado que una institución envía a los medios" },
          { es: "el cierre", note: "hora límite para entregar los textos de una edición" },
          { es: "sacar de contexto", note: "citar algo de manera que cambie su sentido original" },
          { es: "la fe de erratas", note: "corrección pública de un error ya publicado" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-15-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada expresión con su definición.",
        pairs: [
          { left: "la anomalía térmica", right: "temperatura del agua por encima de la habitual para la época" },
          { left: "fondear", right: "echar el ancla para detener una embarcación" },
          { left: "el muestreo", right: "revisión de una parte para estudiar el conjunto" },
          { left: "la entradilla", right: "primer párrafo de una noticia, que resume lo esencial" },
          { left: "contrastar una fuente", right: "comprobar un dato con otra fuente independiente" },
          { left: "sacar de contexto", right: "citar algo de manera que cambie su sentido original" },
          { left: "la fe de erratas", right: "corrección pública de un error ya publicado" },
        ],
      },
      {
        id: "c2-15-lexico-uso",
        type: "gap",
        prompt: "Completa con la expresión adecuada del vocabulario.",
        bank: ["cierre", "nota de prensa", "blanqueamiento", "zona protegida"],
        items: [
          { q: "La estación envió una ___ con los datos principales, pero el informe completo tiene cuarenta páginas.", answers: [["nota de prensa"]] },
          { q: "El ___ empieza cuando el agua supera durante semanas la temperatura habitual.", answers: [["blanqueamiento"]] },
          { q: "Tenemos que entregar la noticia antes del ___, a las ocho de la noche.", answers: [["cierre"]] },
          { q: "Desde octubre está prohibido fondear en la ___ frente a Playa Baracoa.", answers: [["zona protegida"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Leer cifras, porcentajes y citas en voz alta sin ambigüedad",
    explanation: [
      "En la radio o en un pódcast, el oyente no puede volver atrás. Las cifras tienen que decirse completas y con una pausa breve antes: «el treinta y ocho por ciento», no «el treinta y ocho». Los puntos porcentuales se nombran siempre como tales, porque «subió catorce» no dice si son puntos o porcentaje. Los decimales se leen con «coma» o «punto» según la convención del país: en Cuba y en buena parte de América es frecuente el punto; en España, la coma.",
      "Las citas también se marcan con la voz. Antes de la cita se hace una pausa y se cambia ligeramente el tono; al terminar, otra pausa y el verbo de atribución en tono bajo: «… “el arrecife todavía puede recuperarse”, explicó la bióloga». Si el periodista intercala un inciso dentro de la cita, se dice más rápido y más bajo, como un paréntesis.",
      "El audio utiliza la síntesis disponible en el navegador: no certifica un acento regional ni evalúa tu lectura. Úsalo para comprobar que entiendes cada cifra a la primera y ensaya la lectura de las citas con una persona.",
    ],
    table: {
      caption: "Cómo se dicen las cifras de la noticia",
      head: ["Escrito", "Dicho"],
      rows: [
        ["38 %", "treinta y ocho por ciento"],
        ["+14 p. p.", "catorce puntos porcentuales más"],
        ["31,5 °C / 31.5 °C", "treinta y uno coma cinco / treinta y uno punto cinco grados"],
        ["2.000 millones", "dos mil millones"],
        ["512 colonias", "quinientas doce colonias"],
      ],
    },
    perceive: {
      id: "c2-15-percepcion",
      type: "listen",
      prompt: "Escucha cada frase antes de leer las opciones y elige el dato exacto que oyes.",
      items: [
        {
          q: "¿Qué porcentaje de colonias oyes?",
          options: ["el 28 %", "el 38 %", "el 48 %"],
          answer: 1,
          why: "Se oye «treinta y ocho por ciento».",
          audio: "El treinta y ocho por ciento de las colonias revisadas presentaba blanqueamiento.",
          voice: "es-CU-m",
        },
        {
          q: "¿Qué tipo de aumento se describe?",
          options: ["catorce puntos porcentuales", "un catorce por ciento"],
          answer: 0,
          why: "Se oye «catorce puntos porcentuales».",
          audio: "La proporción de corales afectados subió catorce puntos porcentuales en un año.",
          voice: "es-CU-f",
        },
        {
          q: "¿Qué cantidad oyes?",
          options: ["dos millones", "dos billones", "dos mil millones"],
          answer: 2,
          why: "Se oye «dos mil millones».",
          audio: "El programa regional de arrecifes cuenta con dos mil millones de pesos.",
          voice: "es-CU-m",
        },
        {
          q: "¿Quién dice la cita, según la frase?",
          options: ["el reportero", "la bióloga"],
          answer: 1,
          why: "El verbo de atribución final la asigna a la bióloga.",
          audio: "El arrecife todavía puede recuperarse, explicó la bióloga.",
          voice: "es-ES-f",
        },
      ],
    },
    produce: [
      { text: "El treinta y ocho por ciento de las colonias estaba afectado, catorce puntos porcentuales más que el año pasado.", tip: "Pausa breve antes de cada cifra; di «puntos porcentuales» completo.", voice: "es-CU-m" },
      { text: "«La mortalidad todavía es baja», explicó Castañeda, «pero puede aumentar si el agua no se enfría».", tip: "Cambia el tono en la cita y baja la voz en «explicó Castañeda».", voice: "es-CU-f" },
      { text: "El blanqueamiento, es decir, la pérdida de color de los corales, empezó a finales de agosto.", tip: "Di la explicación más rápido y más bajo, como un paréntesis.", voice: "es-CU-m" },
      { text: "Según el informe, no es descartable que mueran colonias enteras.", tip: "No enfatices «no es descartable»: es cautela, no alarma.", voice: "es-ES-f" },
    ],
    spelling: "Entre la cifra y el signo de porcentaje se deja un espacio: «38 %». Los meses, los días de la semana y los puntos cardinales van con minúscula salvo que formen parte de un nombre propio («costa norte», pero «Corea del Norte»).",
  },
  listening: {
    title: "La mesa de redacción, a dos horas del cierre",
    context: "En la redacción de un diario digital de La Habana, la editora Marisol y el reportero Yoandri revisan la noticia sobre el informe de los corales. A mitad de la reunión llaman a Itziar, investigadora de un instituto español que colabora con la estación, para comprobar los datos. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "m", name: "Marisol", voice: "es-CU-f", role: "Editora de la sección de ciencia" },
      { id: "y", name: "Yoandri", voice: "es-CU-m", role: "Reportero" },
      { id: "i", name: "Itziar", voice: "es-ES-f", role: "Investigadora colaboradora de la estación" },
    ],
    script: [
      { speaker: "m", text: "Yoandri, el texto está bien escrito, de verdad, pero el titular no me convence: «Catástrofe en los arrecifes: el calor mata los corales de La Habana». ¿Dónde dice el informe catástrofe? ¿Y dónde dice que estén muertos?" },
      { speaker: "y", text: "Bueno, no lo dice así, pero el treinta y ocho por ciento de las colonias está blanqueado. Eso no es precisamente una buena noticia." },
      { speaker: "m", text: "Ya, pero blanqueado no es muerto. Y el informe habla de las colonias revisadas en cuatro puntos de la costa norte, no de toda La Habana. Mira, te propongo algo: «Un informe detecta corales blanqueados en el 38 % de las colonias de la costa norte». Es menos llamativo, pero es exacto." },
      { speaker: "y", text: "Vale, lo acepto. Eso sí, quiero que en la entradilla aparezca que es catorce puntos más que el año pasado, porque ahí está la noticia." },
      { speaker: "m", text: "De acuerdo, puntos porcentuales, no por ciento. Otra cosa: escribiste que la directora «admitió» que el agua llegó a treinta y un grados. ¿Se lo preguntaste tú o lo dijo ella en la presentación?" },
      { speaker: "y", text: "Lo dijo ella, en la presentación, sin que nadie preguntara." },
      { speaker: "m", text: "Entonces no admitió nada: informó. Admitir suena a que lo estaba ocultando. Bueno, llamemos a Itziar para lo de la mortalidad, que en tu texto pone que mueren los corales y en el informe no lo veo." },
      { speaker: "i", text: "Hola, buenas tardes. Sí, os escucho. A ver, la mortalidad por ahora es baja, en torno al tres por ciento de las colonias. El blanqueamiento es la pérdida de color: el coral expulsa las algas que lo alimentan, pero sigue vivo. Si el agua se enfría antes de noviembre, la mayoría puede recuperarse. Si no, no es descartable que mueran colonias enteras." },
      { speaker: "y", text: "Perdone que la interrumpa: ¿puedo escribir que el calor ha causado el blanqueamiento?" },
      { speaker: "i", text: "Yo diría que los datos lo asocian claramente con la anomalía térmica de agosto, y es la explicación más aceptada. Pero en este informe no hemos medido otros factores, como la turbidez. Si pones «asociado a», lo firmo." },
      { speaker: "m", text: "Perfecto, muchas gracias. ¿Le importaría que le enviáramos las cifras antes de publicar, para que las revise? Serían cinco minutos." },
      { speaker: "i", text: "Claro, mandádmelas y os contesto en cuanto las vea." },
      { speaker: "m", text: "Y una última cosa, Yoandri: lo de la prohibición de fondear. Pusiste que la resolución permite multas solo si hay daño. El texto dice «sin perjuicio de las sanciones que procedan». Eso significa que, además de la prohibición, se puede sancionar. Explícalo así, que los pescadores lo van a leer." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la reunión completa sin abrir la transcripción. ¿Qué problemas tiene el borrador y cómo los resuelven?",
        exercise: {
          id: "c2-15-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y el criterio general.",
          items: [
            {
              q: "¿Cuál es el problema principal del borrador?",
              options: [
                "Que es demasiado largo para la web.",
                "Que exagera lo que dice el informe y usa verbos y cifras imprecisos.",
                "Que no cita ninguna fuente.",
              ],
              answer: 1,
              why: "La editora corrige el titular, un verbo de atribución, el porcentaje y la explicación de la norma.",
            },
            {
              q: "¿Qué papel tiene la llamada a Itziar?",
              options: [
                "Comprobar los datos de mortalidad y la relación con el calor.",
                "Pedirle una entrevista para otro día.",
                "Anunciarle que la noticia no se publicará.",
              ],
              answer: 0,
              why: "La llaman para contrastar lo que el borrador dice sobre la mortalidad y la causa.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada corrección. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-15-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles de la reunión.",
          items: [
            {
              q: "¿Por qué la editora rechaza «admitió»?",
              options: [
                "Porque la directora no dijo nada sobre la temperatura.",
                "Porque es un verbo demasiado coloquial.",
                "Porque la directora informó del dato por iniciativa propia.",
              ],
              answer: 2,
              why: "Lo dijo sin que nadie preguntara: no hay concesión.",
            },
            {
              q: "¿Qué dice Itziar sobre la mortalidad?",
              options: [
                "Que por ahora es baja y depende de que el agua se enfríe.",
                "Que ya han muerto la mayoría de las colonias.",
                "Que no se ha medido.",
              ],
              answer: 0,
              why: "Habla de un tres por ciento y de una condición para la recuperación.",
            },
            {
              q: "¿Qué fórmula acepta Itziar para relacionar el calor y el blanqueamiento?",
              options: [
                "«causado por»",
                "«asociado a»",
                "«demostrado por»",
              ],
              answer: 1,
              why: "No se midieron otros factores: asociación, no causa.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en lo que hace cada intervención. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-15-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con la clase que aplica.",
          pairs: [
            { left: "Un informe detecta corales blanqueados en el 38 %", right: "titular verbal en presente con cifra exacta" },
            { left: "el coral expulsa las algas que lo alimentan, pero sigue vivo", right: "explicación cotidiana de un término técnico" },
            { left: "no es descartable que mueran colonias enteras", right: "posibilidad que el periodista debe conservar" },
            { left: "Vale, lo acepto. Eso sí,", right: "aceptación con una condición en la negociación" },
            { left: "¿Le importaría que le enviáramos las cifras", right: "petición cortés a una fuente" },
          ],
          why: "La reunión aplica en vivo la precisión periodística, la reformulación y lo repasado en las semanas 11 a 13.",
        },
      },
    ],
  },
  reading: {
    title: "Un informe detecta corales blanqueados en el 38 % de las colonias de la costa norte",
    genre: "Noticia de un diario digital",
    frame: "Noticia publicada por un diario digital de La Habana tras la reunión de la mesa de redacción. Estación, personas, cifras y resolución son ficticias.",
    text: [
      "El 38 % de las colonias de coral revisadas en cuatro puntos de la costa norte de La Habana presentaba algún grado de blanqueamiento a finales de agosto, catorce puntos porcentuales más que en el mismo período del año pasado, según un informe de la Estación de Biología Marina de Playa Baracoa presentado este martes. Los investigadores asocian el fenómeno a una temperatura del agua superior a la habitual durante el verano.",
      "El blanqueamiento es la pérdida de color de los corales: cuando el agua se calienta durante semanas, expulsan las algas microscópicas que viven en su interior y que les proporcionan alimento. Un coral blanqueado no está muerto, pero queda debilitado y, si la situación se prolonga, puede morir. Dicho de otro modo, el blanqueamiento es una señal de alarma, no un certificado de defunción.",
      "El estudio se basa en la revisión de 512 colonias entre el 20 y el 31 de agosto. Los buzos de la estación encontraron corales afectados hasta a quince metros de profundidad. «Hemos visto colonias blanqueadas en lugares donde nunca lo habíamos registrado», señaló la directora de la estación, Odalys Castañeda, durante la presentación. La directora informó de que el agua alcanzó los 31 °C en la segunda quincena de agosto, unos dos grados por encima de la media de esas semanas en la última década.",
      "Por ahora, la mortalidad es baja. Según el informe, en torno al 3 % de las colonias revisadas había muerto en el momento del muestreo. «La mayoría puede recuperarse —precisó Castañeda—, siempre que el agua se enfríe antes de noviembre». Si no ocurre, añadió, no es descartable que mueran colonias enteras en los puntos más afectados. Itziar Etxeberria, investigadora de un instituto oceanográfico español que colabora con la estación, explicó a este diario que los datos asocian con claridad el blanqueamiento a la anomalía térmica, aunque el informe no midió otros factores que también pueden influir, como la turbidez del agua.",
      "El informe no permite extender los resultados a toda la costa cubana ni a todos los arrecifes de La Habana, ya que se limita a cuatro puntos de muestreo. Sus autores recomiendan repetir la revisión en diciembre y ampliar la red de observación a otras zonas, algo que, según la directora, dependerá de la financiación disponible. El informe tampoco compara sus datos con los de otros países del Caribe, aunque cita estudios regionales que, en veranos especialmente cálidos, han descrito episodios parecidos en arrecifes de características similares a los de la costa habanera.",
      "En paralelo, una resolución de las autoridades marítimas publicada el 1 de septiembre prohíbe fondear embarcaciones sobre los arrecifes de la zona protegida frente a Playa Baracoa hasta el 31 de diciembre, «sin perjuicio de las sanciones que procedan». En la práctica, eso significa que la prohibición se aplica a todas las embarcaciones y que, además, quien la incumpla puede ser sancionado; la resolución no exige que se haya causado un daño para imponer una multa. Los barcos podrán amarrarse a las boyas instaladas por la estación, que no dañan el fondo.",
      "Varios pescadores consultados por este diario en el embarcadero de Baracoa se mostraron preocupados por la medida. «Si no podemos fondear, tendremos que ir más lejos, y el combustible no está barato», explicó uno de ellos, que pidió no ser identificado. La estación aseguró en un comunicado que estudiará con las cooperativas pesqueras la instalación de nuevas boyas antes de fin de año.",
      "La estación pide a los buzos y a los pescadores que comuniquen cualquier coral blanqueado que observen fuera de los puntos estudiados. Los avisos pueden enviarse a través de su página web, con una fotografía, la fecha y la ubicación aproximada.",
    ],
    glossary: [
      { es: "turbidez", note: "falta de transparencia del agua por partículas en suspensión" },
      { es: "boya", note: "objeto flotante sujeto al fondo al que se amarran las embarcaciones" },
      { es: "embarcadero", note: "lugar preparado para que suban y bajen personas o mercancías de los barcos" },
    ],
    tasks: [
      {
        id: "c2-15-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido qué afirma la noticia y qué no.",
        items: [
          {
            q: "¿Qué afirma la noticia sobre la relación entre calor y blanqueamiento?",
            options: [
              "Que el calor es la única causa comprobada.",
              "Que los investigadores la asocian al calor, aunque no midieron otros factores.",
              "Que el informe no menciona la temperatura.",
            ],
            answer: 1,
            why: "Primer y cuarto párrafo: asociación, con la reserva de la turbidez.",
          },
          {
            q: "¿Qué significa en la práctica «sin perjuicio de las sanciones que procedan»?",
            options: [
              "Que solo se sanciona si hay daño.",
              "Que no habrá sanciones hasta diciembre.",
              "Que, además de la prohibición, se puede sancionar a quien la incumpla.",
            ],
            answer: 2,
            why: "Lo explica el sexto párrafo.",
          },
          {
            q: "¿Por qué la noticia no habla de toda la costa cubana?",
            options: [
              "Porque el informe se limita a cuatro puntos de muestreo.",
              "Porque la estación lo prohibió.",
              "Porque el resto de la costa no tiene corales.",
            ],
            answer: 0,
            why: "Quinto párrafo: los resultados no se pueden extender.",
          },
        ],
      },
      {
        id: "c2-15-lectura-integracion",
        type: "match",
        prompt: "Relaciona cada fragmento de la noticia con la clase que aplica.",
        pairs: [
          { left: "catorce puntos porcentuales más que en el mismo período", right: "G227: precisión en las cifras" },
          { left: "Dicho de otro modo, el blanqueamiento es una señal de alarma", right: "G228: reformulación con analogía" },
          { left: "no es descartable que mueran colonias enteras", right: "G221: posibilidad con subjuntivo" },
          { left: "los datos asocian con claridad el blanqueamiento a la anomalía térmica", right: "G225: asociación, no causa" },
          { left: "la resolución no exige que se haya causado un daño", right: "G226: norma explicada sin cambiar su efecto" },
        ],
      },
      {
        id: "c2-15-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa una decisión de la noticia con argumentos propios.",
        items: [
          {
            prompt: "La noticia cita a un pescador «que pidió no ser identificado». Explica en 70–90 palabras si esa fuente anónima está justificada aquí y en qué se diferencia de las «fuentes cercanas» que critica la teoría.",
            model: "Está justificada, porque la cita no aporta un dato que haya que verificar, sino una opinión representativa de un grupo, y el pescador podría tener problemas si se le identifica. Además, el lector sabe quién es en términos generales: un pescador del embarcadero de Baracoa. Las «fuentes cercanas», en cambio, suelen sostener hechos sin que el lector pueda saber de dónde vienen, y a menudo van con un condicional de rumor. Aquí la fuente anónima opina; allí, informa sin respaldo.",
            checklist: [
              "Tomo posición sobre la fuente anónima.",
              "Distingo entre aportar una opinión y aportar un dato.",
              "Comparo con las fuentes vagas de la teoría.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la noticia atribuye cada dato, conserva la cautela de la fuente y explica lo técnico.",
      items: [
        { quote: "Los investigadores asocian el fenómeno a una temperatura del agua superior a la habitual durante el verano.", note: "La entradilla ya conserva la asociación, sin hablar de causa." },
        { quote: "«La mayoría puede recuperarse —precisó Castañeda—, siempre que el agua se enfríe antes de noviembre».", note: "Raya para el inciso del periodista y condición conservada." },
        { quote: "La directora informó de que el agua alcanzó los 31 °C", note: "Verbo neutro, después de la corrección de la editora." },
        { quote: "Un coral blanqueado no está muerto, pero queda debilitado", note: "La explicación cotidiana evita la confusión del primer titular." },
      ],
    },
  },
  practice: {
    intro: "Combina orden, elección según el destinatario, reformulación y escritura breve. Termina con una recuperación amplia de las semanas 11 a 14 y de clases anteriores.",
    exercises: [
      {
        id: "c2-15-orden",
        type: "order",
        prompt: "Ordena las palabras para formar titulares o frases periodísticas correctas.",
        items: [
          {
            words: ["Detectados", "corales", "blanqueados", "en", "la", "costa", "norte"],
            why: "Titular con participio, sin punto final.",
          },
          {
            words: ["«La", "mortalidad", "es", "baja»,", "explicó", "la", "directora."],
            why: "Cita + coma + verbo neutro; punto al final.",
          },
          {
            words: ["Cómo", "avisar", "de", "un", "coral", "blanqueado"],
            why: "Titular de servicio: el infinitivo es adecuado.",
          },
        ],
      },
      {
        id: "c2-15-destinatario",
        type: "context",
        prompt: "Elige la versión más adecuada para el destinatario indicado.",
        items: [
          {
            context: "Destinatario: los oyentes de un programa de radio matinal, sin formación científica. Informe: «Se constató una anomalía térmica positiva de dos grados respecto de la media decenal».",
            q: "¿Qué versión eliges?",
            options: [
              "Se constató una anomalía térmica positiva de dos grados.",
              "El agua estuvo muy caliente, la más caliente de la historia.",
              "El agua estuvo unos dos grados más caliente de lo normal en esas semanas de los últimos diez años.",
            ],
            answer: 2,
            why: "Conserva la cifra y la comparación con la década, en lenguaje cotidiano y sin inventar un récord.",
          },
          {
            context: "Destinatario: el informe interno de la estación. Mensaje de un buzo: «Oye, como a las diez vimos un montón de corales blancos por la zona del faro, ¡qué susto!».",
            q: "¿Qué versión es adecuada para el informe?",
            options: [
              "Hacia las 10:00, según el buzo, se observaron numerosas colonias blanqueadas en las inmediaciones del faro.",
              "A las 10:00 en punto se observaron 47 colonias blanqueadas junto al faro.",
              "Un buzo se asustó mucho por los corales blancos.",
            ],
            answer: 0,
            why: "Sube el registro, nombra la fuente y mantiene la imprecisión de la hora y la cantidad.",
          },
          {
            context: "Destinatario: la directora de la estación, a quien la editora no conoce. Quiere pedirle una entrevista para mañana.",
            q: "¿Qué mensaje envía?",
            options: [
              "Mañana la entrevistamos a las nueve.",
              "Le escribo del diario para pedirle, si su agenda lo permite, una entrevista breve mañana por la mañana; nos adaptamos a la hora que le venga mejor.",
              "¿Sería usted tan extraordinariamente amable de concedernos el inmenso honor de una entrevista?",
            ],
            answer: 1,
            why: "Petición de peso a una desconocida: dosis alta, con margen, sin hiperformalidad (G222).",
          },
        ],
      },
      {
        id: "c2-15-reformular",
        type: "transform",
        prompt: "Reformula cada frase según la instrucción, sin perder ni inventar información.",
        items: [
          {
            source: "Se produjo un incremento de la mortalidad en las colonias más superficiales.",
            instruction: "Deshaz la nominalización con un verbo conjugado, para un público general.",
            answers: ["Murieron más corales en las colonias más superficiales.", "En las colonias más superficiales murieron más corales."],
            why: "«Se produjo un incremento de la mortalidad» → «murieron más».",
          },
          {
            source: "Fuentes cercanas a la estación aseguraron que se habría suspendido el muestreo de diciembre.",
            instruction: "Reescríbela como información con fuente identificada, sabiendo que la directora lo desmintió en un comunicado.",
            answers: ["La directora de la estación aseguró en un comunicado que el muestreo de diciembre no se ha suspendido.", "En un comunicado, la directora de la estación negó que se haya suspendido el muestreo de diciembre.", "En un comunicado, la directora de la estación negó que se hubiera suspendido el muestreo de diciembre."],
            why: "Se sustituye la fuente vaga y el condicional de rumor por una fuente identificada.",
          },
          {
            source: "Los resultados podrían indicar que el calor causa el blanqueamiento en todos los arrecifes.",
            instruction: "Corrige la extensión indebida y la confusión entre asociación y causa.",
            answers: ["Los resultados sugieren que el blanqueamiento está asociado al calor en los puntos estudiados.", "Los resultados asocian el blanqueamiento al calor en los puntos estudiados."],
            why: "Asociación (G225) y alcance limitado a los puntos del muestreo.",
          },
        ],
      },
      {
        id: "c2-15-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe tres titulares distintos (verbal, con participio y con cita) y una entrada de 40–50 palabras para esta información: la estación instalará doce boyas nuevas antes de diciembre para que los barcos no fondeen sobre el arrecife, según anunció su directora en un comunicado.",
            model: "Verbal: La estación instalará doce boyas para proteger el arrecife. Participio: Anunciadas doce boyas nuevas frente a Playa Baracoa. Cita: Castañeda: «Las boyas evitarán que se dañe el fondo». Entrada: La Estación de Biología Marina de Playa Baracoa instalará doce boyas nuevas antes de diciembre para que las embarcaciones puedan amarrarse sin fondear sobre el arrecife, según anunció su directora en un comunicado.",
            checklist: [
              "Cada titular respeta su gramática y no lleva punto final.",
              "La entrada responde a qué, quién, cuándo, dónde y por qué.",
              "El dato está atribuido a su fuente.",
            ],
          },
          {
            prompt: "Explica a tu vecino, en 50–70 palabras y sin perder información, este fragmento del informe: «Salvo que la temperatura descienda antes de noviembre, cabe prever una mortalidad significativa en las colonias más expuestas».",
            model: "Mire, lo que dice el informe es esto: si el agua no se enfría antes de noviembre, es probable que mueran bastantes corales, sobre todo los que están más expuestos al calor. O sea, todavía no han muerto, y si el agua baja a tiempo, muchos pueden salvarse. No dice que vaya a pasar seguro, sino que es lo más probable si sigue el calor.",
            checklist: [
              "Conservo la condición («si no se enfría»).",
              "Conservo la probabilidad, sin convertirla en certeza.",
              "Uso un marcador de reformulación y lenguaje cotidiano.",
            ],
          },
        ],
      },
      {
        id: "c2-15-recuperacion",
        type: "open",
        prompt: "Recupera las clases de las semanas 11 a 14 y otras anteriores con los estímulos que se te dan. No vuelvas a las lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G221 (modalización sutil, semana 11). Estímulo, borrador de la noticia: «Es indudable que los corales morirán este invierno». La fuente dijo: «No es descartable que mueran colonias enteras si el agua no se enfría». Corrige el borrador y explica qué cambió.",
            model: "«Según la directora, no es descartable que mueran colonias enteras si el agua no se enfría antes de noviembre». El borrador subía la posibilidad a certeza y eliminaba la condición. Conservo la fórmula de posibilidad con subjuntivo, la condición y la atribución.",
            checklist: [
              "Recupero la posibilidad con subjuntivo.",
              "Conservo la condición y la fuente.",
            ],
          },
          {
            prompt: "Recuperación de la clase G222 (cortesía estratégica, semana 11). Estímulo: el reportero escribe a la investigadora «Revise esto antes de las seis». Explica por qué amenaza su imagen y reescribe el mensaje.",
            model: "Es una orden a alguien con quien hay distancia, que no tiene ninguna obligación y a quien se le pide un esfuerzo: amenaza su libertad de acción. Versión: «¿Le importaría revisar las cifras antes de las seis? Sé que es poco tiempo; si no puede, lo entendemos y publicamos solo los datos del informe».",
            checklist: [
              "Explico la amenaza con distancia, poder o imposición.",
              "La nueva versión pregunta, aleja el verbo y deja una salida.",
            ],
          },
          {
            prompt: "Recuperación de la clase G223 (lítotes e ironía, semana 12). Estímulo, titular propuesto: «Un verano no precisamente fresco para los corales». Explica qué dice la lítote y por qué no conviene en una noticia.",
            model: "La lítote irónica dice que el verano fue muy caluroso, pero lo sugiere en lugar de afirmarlo. En una noticia no conviene: el lector no oye el tono, el titular no da ningún dato y puede parecer una broma sobre un problema serio. Mejor: «El agua alcanzó 31 °C en agosto, dos grados por encima de lo habitual».",
            checklist: [
              "Explico el sentido de la lítote irónica.",
              "Propongo un titular con dato.",
            ],
          },
          {
            prompt: "Recuperación de la clase G224 (marcadores de negociación, semana 13). Estímulo: «Ya, ya, lo que tú digas». Explica qué transmite en una reunión y propón una intervención que objete con cortesía.",
            model: "«Ya, ya», alargado, transmite escepticismo y casi ironía; con «lo que tú digas» se cierra la discusión sin argumentar. Alternativa: «Ya, pero me preocupa que el titular parezca exagerado; ¿qué te parece si probamos con la cifra exacta?». Acuso recibo, objeto y propongo.",
            checklist: [
              "Explico el valor escéptico de la repetición.",
              "Uso «ya, pero» o un marcador equivalente con una propuesta.",
            ],
          },
          {
            prompt: "Recuperación de la clase G225 (cautela académica, semana 13). Estímulo, frase del informe: «Los datos sugieren que la anomalía térmica es el principal factor asociado al blanqueamiento». Escribe cómo la citaría la noticia sin perder la cautela.",
            model: "«Según el informe, los datos sugieren que el agua más caliente de lo normal es el principal factor asociado al blanqueamiento». Mantengo «sugieren» y «asociado», y añado la atribución. No escribo «el calor causó», porque el informe no lo afirma.",
            checklist: [
              "Conservo la atenuación y la asociación.",
              "Atribuyo la afirmación al informe.",
            ],
          },
          {
            prompt: "Recuperación de la clase G226 (sintaxis jurídica densa, semana 14). Estímulo: «Queda prohibido el fondeo sobre formaciones coralinas en el ámbito de la zona protegida, salvo autorización expresa de la autoridad competente, sin perjuicio de las sanciones que procedan». Explícalo para los pescadores sin cambiar su efecto.",
            model: "No se puede echar el ancla sobre los corales dentro de la zona protegida, excepto si la autoridad marítima lo autoriza expresamente. Además, y sin que esto lo impida, quien lo haga sin permiso puede ser sancionado. Conservo la excepción y la reserva.",
            checklist: [
              "Conservo la prohibición, la excepción y la reserva.",
              "Uso frases breves con el verbo al principio.",
            ],
          },
          {
            prompt: "Recuperación de la clase G219 (foco y presuposición, semana 10). Estímulo, pregunta de un periodista en la presentación: «¿Por qué la estación tardó tanto en avisar del blanqueamiento?». Explica qué presupone la pregunta y reformúlala de manera neutral.",
            model: "La pregunta presupone que la estación tardó en avisar, y eso no consta: la presenta como un hecho ya aceptado. Pregunta neutral: «¿Cuándo detectó la estación el blanqueamiento y cuándo lo comunicó?». Así el dato lo da la fuente.",
            checklist: [
              "Identifico la presuposición.",
              "Formulo una pregunta que no la contenga.",
            ],
          },
          {
            prompt: "Recuperación de la clase G208 (condicional de rumor, semana 3). Estímulo: «La estación habría ocultado los datos de mortalidad durante un mes». Explica qué hace el condicional y qué necesitaría el periodista para publicarlo.",
            model: "El condicional de rumor presenta la información como no confirmada y traslada la responsabilidad a una fuente que no se nombra. Para publicarlo, el periodista necesitaría fuentes identificadas o documentos que lo prueben, y la versión de la estación. Sin eso, no debería publicarse.",
            checklist: [
              "Explico el valor del condicional de rumor.",
              "Digo qué haría falta para publicar la información.",
            ],
          },
          {
            prompt: "Recuperación de la clase G194 (citas y distanciamiento, C1). Estímulo: La directora dijo que «la situación es preocupante pero reversible». Escribe la frase en estilo indirecto y en cita integrada, y explica cuál conserva mejor sus palabras.",
            model: "Estilo indirecto: «La directora dijo que la situación era preocupante, pero reversible». Cita integrada: «La directora calificó la situación de “preocupante pero reversible”». La cita integrada conserva sus palabras exactas; el estilo indirecto las adapta y permite cambiar el tiempo verbal.",
            checklist: [
              "Escribo las dos versiones correctamente.",
              "Explico qué conserva cada una.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta la noticia sobre el informe de los corales para el diario digital (400–520 palabras). Debe tener titular y entradilla, citas directas bien puntuadas con verbos neutros, cifras exactas, la explicación cotidiana del blanqueamiento, la cautela de la fuente sobre causas y mortalidad, la resolución sobre el fondeo explicada sin cambiar su efecto y una fuente que matice o discrepe.",
    context: "La leerán vecinos, pescadores y estudiantes, y también los propios científicos, que comprobarán cada cifra. No puede exagerar ni minimizar. Puedes usar los datos de esta semana o inventar otros con la misma lógica, siempre que sean coherentes entre sí.",
    steps: [
      "Haz una tabla con cada dato, su fuente y su grado de certeza (dato medido, asociación, posibilidad, opinión).",
      "Escribe el titular y la entradilla respondiendo a qué, quién, cuándo, dónde, cómo y por qué; ordena el resto de mayor a menor importancia.",
      "Redacta sin copiar el modelo. Usa al menos dos citas directas, una con inciso del periodista, una explicación con marcador de reformulación y la resolución en lenguaje claro.",
      "Revisa con la lista de control integrada: corrige verbos de atribución con carga, cifras imprecisas, causas que la fuente no afirma, ironías, peticiones descorteses en los mensajes a las fuentes y cualquier norma explicada con otro efecto. Lee el texto en voz alta.",
    ],
    useLanguage: [
      "según el informe… / señaló / explicó / precisó",
      "«…», explicó X. / «… —precisó X—, …».",
      "X puntos porcentuales más / más de / en torno a",
      "es decir / dicho de otro modo",
      "los datos asocian… a… / no es descartable que + subjuntivo",
      "sin perjuicio de… = además, y sin que esto lo impida",
    ],
    model: [
      "Detectan corales blanqueados en el 38 % de las colonias revisadas en la costa norte",
      "El 38 % de las colonias de coral revisadas por la Estación de Biología Marina de Playa Baracoa en cuatro puntos de la costa norte de La Habana presentaba algún grado de blanqueamiento a finales de agosto, catorce puntos porcentuales más que hace un año. Según el informe, presentado este martes, el fenómeno está asociado a una temperatura del agua más alta de lo habitual.",
      "El blanqueamiento se produce cuando el agua se mantiene caliente durante semanas: los corales expulsan las algas que viven en su interior y que los alimentan, y pierden el color. En otras palabras, el coral no muere de inmediato, pero queda debilitado. «Hemos encontrado colonias afectadas hasta a quince metros de profundidad», explicó la directora de la estación, Odalys Castañeda.",
      "Los buzos revisaron 512 colonias entre el 20 y el 31 de agosto. En ese período, el agua alcanzó los 31 °C, unos dos grados por encima de la media de esas semanas en la última década, según los registros de la estación. Por ahora, en torno al 3 % de las colonias había muerto. «La mayoría puede recuperarse —precisó Castañeda—, si el agua se enfría antes de noviembre». De lo contrario, añadió, no es descartable que mueran colonias enteras en los puntos más expuestos.",
      "Itziar Etxeberria, investigadora de un instituto oceanográfico español que colabora con la estación, matizó que el informe no midió otros factores que pueden influir, como la turbidez del agua. «Los datos asocian con claridad el blanqueamiento al calor, pero no permiten descartar otras causas», señaló. Los autores tampoco extienden sus conclusiones a toda la costa, ya que el estudio se limita a cuatro puntos de muestreo.",
      "Una resolución de las autoridades marítimas publicada el 1 de septiembre prohíbe fondear sobre los arrecifes de la zona protegida frente a Playa Baracoa hasta el 31 de diciembre, salvo autorización expresa, «sin perjuicio de las sanciones que procedan». Es decir, ninguna embarcación puede echar el ancla sobre los corales y, además, quien lo haga puede ser multado, aunque no haya causado un daño visible. Los barcos podrán amarrarse a las boyas de la estación.",
      "Algunos pescadores del embarcadero de Baracoa consideran que la medida los obligará a navegar más lejos y a gastar más combustible. La estación aseguró en un comunicado que estudiará con las cooperativas pesqueras la instalación de nuevas boyas antes de fin de año y que repetirá la revisión de las colonias en diciembre. Quien observe corales blanqueados fuera de los puntos estudiados puede comunicarlo en la web de la estación, con una fotografía, la fecha y la ubicación aproximada.",
    ],
    checklist: [
      "El titular y la entrada son exactos y responden a las preguntas básicas; el titular no lleva punto final.",
      "Cada dato tiene fuente y cada verbo de atribución es neutro salvo que la fuente justifique otro.",
      "Las cifras son exactas: puntos porcentuales, «más de», «en torno a», meses con minúscula.",
      "La explicación cotidiana conserva la cautela, la condición y la frecuencia de la fuente, y no confunde asociación con causa.",
      "La resolución se explica sin cambiar su efecto, sin ironías ni lítotes equívocas.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave y no leas un guion. Si te grabas, la grabación se queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Explicar el informe en la radio",
        prompt: "Eres el reportero y te invitan a un programa de radio matinal. Explica en lenguaje cotidiano qué dice el informe: qué es el blanqueamiento, cuántas colonias están afectadas, qué relación tiene con el calor, qué puede pasar y qué significa la prohibición de fondear. Responde también a la pregunta del presentador: «Entonces, ¿se están muriendo los corales?». Habla al menos cuatro minutos.",
        prep: [
          "Prepara una explicación del blanqueamiento con una analogía y su límite.",
          "Ten las cifras escritas y decide cómo las dirás en voz alta.",
          "Prepara una respuesta a la pregunta del presentador que no exagere ni minimice.",
        ],
        seconds: 240,
        model: "Buenos días. Lo primero: blanqueado no quiere decir muerto. El blanqueamiento es la pérdida de color del coral cuando el agua está demasiado caliente durante semanas; es como si el coral se quedara sin su despensa, porque expulsa las algas que lo alimentan. Según el informe, el treinta y ocho por ciento de las colonias revisadas está afectado, catorce puntos porcentuales más que el año pasado. ¿Se están muriendo? Por ahora, muy pocos, en torno al tres por ciento…",
        selfCheck: [
          "Atribuyo cada dato al informe o a una persona concreta.",
          "Leo las cifras completas y digo «puntos porcentuales».",
          "Conservo la condición de noviembre y la diferencia entre asociación y causa.",
        ],
      },
      {
        title: "Negociar el titular con la editora",
        prompt: "Quieres un titular más llamativo que el de la editora. Defiende tu propuesta, acepta una parte de sus objeciones, pon una condición y llega a un acuerdo sin perder la exactitud.",
        prep: [
          "Prepara una reformulación cooperativa de la postura de la editora.",
          "Decide qué aceptas y qué condición pones.",
        ],
        seconds: 150,
        model: "O sea, que te preocupa que el titular exagere, ¿no? Bueno, en eso te doy la razón: catástrofe sobra. Pero un titular con solo un porcentaje no lo lee nadie. Propongo «Récord»… ya, ya sé, el informe no habla de récord. Vale, entonces la cifra; eso sí, con los catorce puntos en la entradilla.",
        selfCheck: [
          "Uso marcadores de aceptación parcial, objeción y condición.",
          "El acuerdo final no exagera lo que dice el informe.",
        ],
      },
      {
        title: "Pedir una revisión a la fuente",
        prompt: "Llama por teléfono a la directora de la estación, a quien no conoces, para pedirle que revise tres cifras antes del cierre. Hazlo con la cortesía adecuada y reacciona si te dice que no tiene tiempo.",
        prep: [
          "Prepara una apertura que justifique la llamada.",
          "Ten pensada una alternativa si no puede revisarlo.",
        ],
        seconds: 120,
        selfCheck: [
          "La petición deja margen a la directora.",
          "Propongo una alternativa concreta si no puede.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu noticia y una noticia real sobre un informe científico. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Verifica",
        task: "Pide a tu profesor que lea tu noticia y marque cualquier verbo de atribución con carga o cualquier cifra imprecisa.",
        phrases: ["¿Este verbo suena neutro?", "¿La cifra está bien expresada?"],
      },
      {
        move: "Traduce",
        task: "Explica a tu profesor un párrafo técnico de tu campo en lenguaje cotidiano y pídele que te diga si has perdido alguna cautela o condición.",
        phrases: ["Dicho de otro modo…", "¿He perdido algo al simplificar?"],
      },
      {
        move: "Integra",
        task: "Elige una frase de tu noticia en la que hayas usado algo de las semanas 11 a 14 y explica qué clase aplicaste y por qué.",
        phrases: ["Aquí apliqué lo de la semana… porque…"],
      },
      {
        move: "Titula",
        task: "Propón tres titulares para la noticia real que traigas y discute con tu profesor cuál es más exacto y cuál más atractivo.",
        phrases: ["Este es más llamativo, pero…", "Este no exagera, eso sí…"],
      },
    ],
    bring: "Tu noticia revisada, la tabla de datos con su fuente y su grado de certeza y, si quieres, la grabación de tu explicación en la radio.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué titular está bien formado para informar de un hecho reciente?",
        options: [
          "Publicar el informe sobre los corales.",
          "Un informe alerta del blanqueamiento de los corales",
          "Un informe alertó del blanqueamiento de los corales.",
        ],
        answer: 1,
        why: "Presente para un hecho reciente y sin punto final.",
      },
      {
        type: "choice",
        q: "Si un porcentaje pasa del 10 % al 15 %, ¿qué frase es correcta?",
        options: [
          "Ha subido cinco puntos porcentuales, un aumento del 50 %.",
          "Ha subido un 5 %.",
          "Ha subido un 15 %.",
        ],
        answer: 0,
        why: "Cinco puntos porcentuales equivalen a un aumento relativo del 50 %.",
      },
      {
        type: "listen",
        q: "Escucha la frase. ¿Qué hace el periodista con el verbo que elige?",
        options: [
          "Informa de forma neutral.",
          "Presenta lo dicho como una concesión de la directora.",
          "Presenta lo dicho como una acusación.",
        ],
        answer: 1,
        why: "«Reconoció» presenta lo dicho como algo que se concede.",
        audio: "La directora reconoció que la estación no había revisado los arrecifes del oeste.",
        voice: "es-CU-m",
      },
      {
        type: "gap",
        q: "«El agua sigue caliente ___ advirtió Castañeda—, y eso nos preocupa».",
        answers: [["—"]],
        hint: "Signo que abre el inciso del periodista dentro de una cita directa.",
        why: "Raya de apertura del inciso.",
      },
      {
        type: "gap",
        q: "Informe: «podría aumentar el riesgo». Versión cotidiana: el calor ___ hacer que mueran más corales.",
        answers: [["puede", "podría"]],
        hint: "Conserva la posibilidad del informe; no la conviertas en certeza.",
        why: "La cautela de la fuente se conserva.",
      },
      {
        type: "transform",
        source: "Se procedió a la evacuación de los bañistas por parte de los socorristas.",
        instruction: "Reformúlala para un público general con voz activa y el agente como sujeto.",
        answers: ["Los socorristas evacuaron a los bañistas.", "Los socorristas sacaron a los bañistas del agua."],
        why: "Se deshace la nominalización y se pone el agente como sujeto.",
      },
      {
        type: "error",
        sentence: "El patrón infligió la norma que prohíbe fondear sobre el arrecife.",
        answers: ["El patrón infringió la norma que prohíbe fondear sobre el arrecife."],
        why: "Una norma se infringe; un daño o un castigo se inflige.",
      },
      {
        type: "error",
        sentence: "Fuentes cercanas aseguraron que la estación habría cerrado la playa.",
        answers: ["Según un comunicado de la estación, la playa sigue abierta.", "La estación no ha confirmado que vaya a cerrar la playa."],
        why: "La fuente vaga con condicional de rumor no informa: hay que identificar la fuente o aclarar que no hay confirmación.",
      },
      {
        type: "order",
        words: ["Según", "el", "informe,", "no", "es", "descartable", "que", "mueran", "colonias", "enteras."],
        why: "Atribución + posibilidad con subjuntivo (G221 + G227).",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de redacción por qué el titular «El calor mata los corales de La Habana» no es fiel a un informe que dice que el 38 % de las colonias revisadas en cuatro puntos está blanqueado y que la mortalidad es del 3 %. Propón un titular exacto.",
        model: "El titular tiene tres problemas. Primero, «mata» confunde blanqueamiento con muerte: la mortalidad es del 3 %, y la mayoría puede recuperarse. Segundo, «los corales de La Habana» extiende a toda la ciudad un dato de cuatro puntos de muestreo. Tercero, presenta el calor como causa, cuando el informe habla de asociación. Un titular exacto sería: «Un informe detecta corales blanqueados en el 38 % de las colonias revisadas en la costa norte».",
        checklist: [
          "Identifico al menos tres problemas del titular.",
          "Relaciono cada problema con un dato del informe.",
          "Propongo un titular exacto, sin punto final.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Escribo titulares y entradillas con la gramática del género y respondo a las preguntas básicas sin inventar.",
      "Atribuyo cada dato con verbos justos, puntúo bien las citas y expreso las cifras con precisión.",
      "Paso un contenido técnico a lenguaje cotidiano, y un relato informal a un informe, sin perder ni inventar información.",
      "Integro la modalización, la cortesía, la negación, los marcadores, la cautela académica y el lenguaje jurídico claro de las semanas 11 a 14 en un mismo texto.",
    ],
    review: [
      "Dentro de dos días, tapa la columna «Decisión» de la tabla de integración y reconstruye un caso por clase.",
      "Dentro de una semana, elige una noticia real sobre un informe científico y comprueba sus verbos de atribución, sus cifras y su cautela.",
      "En la próxima clase, lee tu noticia en voz alta y pide a tu profesor que señale cualquier dato sin fuente.",
    ],
  },
  related: [
    { path: "/gramatica/discursos-periodisticos-atribucion-y-precision", label: "Clase: Discursos periodísticos: atribución y precisión" },
    { path: "/gramatica/reformulacion-entre-registro-tecnico-y-cotidiano", label: "Clase: Reformulación entre registro técnico y cotidiano" },
  ],
};
