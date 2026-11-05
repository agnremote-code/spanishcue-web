import type { Module } from "../../types";

/**
 * C2 · semana 19 · Autoestudio espejo de G234 (análisis crítico de sesgos
 * sintácticos y presuposiciones). Repaso autónomo con un taller de lectura
 * crítica en la Ciudad de México que compara cómo dos diarios inventados
 * cubrieron la reubicación de un tianguis. Hechos, personas y medios ficticios.
 * Audio mediante síntesis; sin acreditación regional.
 */
export const c2w19: Module = {
  id: "c2-19",
  level: "c2",
  week: 19,
  kind: "core",
  title: "Quién hizo qué, según quién lo cuente",
  subtitle: "Repaso del análisis crítico de cómo la sintaxis, los presupuestos y las palabras reparten la responsabilidad en un texto",
  stop: {
    place: "Ciudad de México",
    country: "México",
  },
  minutes: 135,
  newObjectives: [
    "c2.gram.g234",
    "c2.voc.w19-tianguis-prensa",
    "c2.pron.w19-foco-agente",
    "c2.lis.w19-taller-lectura",
    "c2.read.w19-nota-coberturas",
    "c2.wri.w19-nota-critica",
    "c2.spk.w19-moderar-analisis",
    "c2.fun.w19-desmontar-titular",
    "c2.disc.w19-analizar-sin-militar",
  ],
  reviewObjectives: ["c2.gram.g232","c2.gram.g233","c2.voc.w18-textil-informe","c2.pron.w18-tilde-y-acento","c2.lis.w18-pruebas-informe","c2.read.w18-capitulo-cooperativa","c2.wri.w18-apertura-capitulo","c2.spk.w18-presentar-informe","c2.fun.w18-aclarar-referente","c2.disc.w18-cadena-referencia"],
  prerequisites: ["c2-18"],
  goal: {
    canDo: "Puedo leer dos textos sobre el mismo hecho y explicar cómo cada uno reparte la responsabilidad con la sintaxis, los presupuestos y el léxico, y puedo proponer una versión neutra que no esconda a nadie ni invente culpables.",
    steps: [
      "Repasa en la teoría cómo se borra o se muestra al agente, qué hacen el orden y los presupuestos de un titular, qué palabras empujan la interpretación y cuáles son los límites del análisis.",
      "Practica con los titulares y las noticias de dos diarios inventados sobre la reubicación de un tianguis.",
      "Escucha la sesión del taller de lectura crítica y lee la nota que comparó las dos coberturas.",
      "Redacta tu propia nota de lectura crítica, revísala con la lista de control y analiza un titular en voz alta ante un grupo.",
    ],
  },
  theory: {
    intro: "En clase viste este tema con tu profesor. Aquí lo repasas en la Ciudad de México, en un taller de lectura crítica para personas adultas en una biblioteca pública. El grupo compara cómo dos diarios inventados, «El Faro Capitalino» y «Diario del Altiplano», contaron el mismo hecho: la alcaldía decidió trasladar un tianguis semanal de una avenida a un predio techado. Los hechos son los mismos; los textos, no. El objetivo no es decidir qué diario tiene razón, sino ver cómo cada uno construye su versión con la gramática.",
    parts: [
      {
        heading: "Borrar o mostrar al agente",
        body: [
          "La forma más directa de repartir responsabilidad es decidir si el agente aparece. En la activa, el agente es sujeto y ocupa el primer plano: «La alcaldía trasladó el tianguis». Hay muchas maneras de hacerlo desaparecer: la pasiva sin complemento agente («El tianguis fue trasladado»), la pasiva refleja o la impersonal con «se» («Se trasladó el tianguis»), los verbos que presentan el hecho como un acontecimiento sin causante («Se produjeron empujones», «Hubo enfrentamientos») y los verbos intransitivos que convierten lo afectado en sujeto («Desaparece el tianguis de la avenida», «Suben las cuotas de los puestos»). «Resultar + participio» presenta un daño sin causante: «Un comerciante resultó herido».",
          "La nominalización es otra forma de borrar, y además borra el tiempo: «La reubicación del tianguis generó protestas» no dice quién reubicó, ni cuándo, ni si la medida ya se aplicó. «El desalojo de los puestos» funciona igual, pero con una carga valorativa distinta. Ante cualquier texto, la primera pregunta del análisis es siempre la misma: ¿quién hizo qué?, ¿lo dice el texto o tengo que deducirlo?",
        ],
        table: {
          caption: "El mismo hecho, con más o menos agente",
          head: ["Construcción", "Ejemplo", "¿Se ve quién actuó?"],
          rows: [
            ["activa", "La alcaldía trasladó el tianguis al predio de la calle Encino.", "sí, en primer plano"],
            ["pasiva con agente", "El tianguis fue trasladado por la alcaldía.", "sí, en segundo plano"],
            ["pasiva sin agente / se", "El tianguis fue trasladado. / Se trasladó el tianguis.", "no"],
            ["verbo de acontecimiento", "Se produjeron empujones frente a la alcaldía.", "no"],
            ["intransitivo", "Desaparece el tianguis de la avenida.", "no: parece que ocurrió solo"],
            ["nominalización", "La reubicación del tianguis.", "no, y tampoco el tiempo"],
          ],
        },
        mistakes: [
          {
            wrong: "Análisis: «“Se produjeron empujones” es una frase sesgada que protege a la policía».",
            right: "Análisis: «“Se produjeron empujones” no dice quién empujó; si el diario no lo sabe, la frase es legítima, y conviene comprobar si otra fuente lo aclara».",
            why: "Una construcción sin agente no es sesgada por sí misma: lo es si oculta un agente que se conoce.",
          },
        ],
      },
      {
        heading: "El titular: orden, tema y presuposiciones",
        body: [
          "En un titular, lo que aparece primero es el tema, aquello de lo que se habla. «Comerciantes protestan contra la alcaldía» y «La alcaldía reordena el comercio en la avenida pese a protestas» informan del mismo día, pero el primero pone en primer plano a los comerciantes y su acción, y el segundo a la alcaldía y su decisión, con la protesta relegada a un complemento concesivo. Ninguno miente: cada uno elige quién protagoniza la historia.",
          "Los titulares y las preguntas también cargan presuposiciones, lo que se da por hecho sin afirmarlo. «¿Cuándo dejará la alcaldía de ignorar a los comerciantes?» presupone que la alcaldía los ignora; «Los vecinos recuperan su banqueta» presupone que la banqueta era de los vecinos y que la habían perdido; «La alcaldía admite que no consultó a los vendedores» presenta como verdad lo que sigue a «admitir», un verbo factivo. Recuerda la prueba: niega la frase o conviértela en pregunta; lo que sobrevive es lo presupuesto.",
        ],
        examples: [
          { es: "Comerciantes del tianguis protestan frente a la alcaldía.", note: "Tema: los comerciantes, agentes de una acción." },
          { es: "La alcaldía mantiene el traslado pese a las protestas.", note: "Tema: la alcaldía; la protesta queda en segundo plano." },
          { es: "¿Por qué sigue la alcaldía sin escuchar a los vendedores?", note: "Presupone que no los escucha y que eso dura." },
          { es: "Los vecinos recuperan su banqueta.", note: "Presupone una pérdida previa y una propiedad." },
        ],
      },
      {
        heading: "Palabras que empujan: adjetivos, cantidades, modalidad y eufemismos",
        body: [
          "El adjetivo valorativo cambia de efecto según su posición. Antepuesto, presenta la valoración como algo que ya se sabe: «la polémica reubicación». Pospuesto, la presenta como una información que se aporta: «una reubicación polémica». La cuantificación vaga también empuja: «miles de comerciantes», «numerosos vecinos», «cada vez más quejas», «hasta un 40 % menos de ventas» (el máximo presentado como si fuera lo normal). Siempre conviene preguntarse: ¿cuántos exactamente?, ¿según quién?",
          "La modalidad puede funcionar como presión: «no hay alternativa», «hay que ordenar la vía pública», «la medida podría provocar el cierre de cientos de negocios» (una posibilidad presentada con cifras que parecen datos). Los eufemismos suavizan («reordenamiento», «reubicación», «ajuste de cuotas») y los disfemismos endurecen («desalojo», «expulsión», «tarifazo»). Por último, el «nosotros» puede incluir al lector («todos queremos calles seguras») o excluir a otros («nosotros, los vecinos de siempre»): en los dos casos, construye un grupo.",
        ],
        table: {
          caption: "Mismo dato, distinto empuje",
          head: ["Suaviza", "Neutro", "Endurece"],
          rows: [
            ["reordenamiento del comercio", "traslado del tianguis", "desalojo de los comerciantes"],
            ["ajuste de cuotas", "aumento de 200 pesos en la cuota", "tarifazo"],
            ["algunos vendedores no tendrán lugar", "60 de 240 puestos no tendrán lugar", "cientos de familias en la calle"],
          ],
        },
        mistakes: [
          {
            wrong: "Versión neutra: «La polémica reubicación afectó a miles de comerciantes».",
            right: "Versión neutra: «El traslado afecta a los 240 puestos del tianguis; 60 de ellos no tendrán lugar en el predio».",
            why: "Un texto neutro elimina el adjetivo valorativo antepuesto y sustituye la cantidad vaga por la cifra comprobable.",
          },
        ],
      },
      {
        heading: "Los límites del método: no ver sesgo en todo, no inventar culpables",
        body: [
          "El análisis crítico es una herramienta de lectura, no un detector automático de manipulación. Una frase sin agente es perfectamente legítima cuando el agente se desconoce («Robaron dos puestos durante la noche»), cuando es obvio («El concejo aprobó la medida, que se aplicará desde mayo») o cuando no importa. El «se» impersonal de los textos científicos («se midieron las ventas») no oculta a nadie: sigue una convención del género. Lo sospechoso es borrar a un agente que se conoce y que importa.",
          "La otra regla es todavía más importante: una versión neutra nunca puede inventar un responsable. Si nadie sabe quién empujó a quién, la reescritura no puede decir «la policía empujó a los comerciantes» ni «los comerciantes agredieron a la policía». Lo neutro es decir lo que se sabe y marcar lo que no se sabe: «Hubo empujones; un comerciante recibió atención por un golpe leve. No se ha establecido quién inició el forcejeo». Y un buen análisis trata a las dos fuentes con el mismo rigor, aunque una de ellas coincida con nuestra opinión.",
        ],
        examples: [
          { es: "Se midieron las ventas de 40 puestos durante tres sábados.", note: "«Se» de la convención científica: legítimo." },
          { es: "Hubo empujones. No se ha establecido quién los inició.", note: "Neutro: dice lo que se sabe y lo que no." },
          { es: "El concejo aprobó el traslado el 3 de marzo, a propuesta de la alcaldesa.", note: "Agente conocido e importante: aparece." },
        ],
        mistakes: [
          {
            wrong: "Versión neutra: «La policía empujó a los comerciantes y un vendedor resultó herido».",
            right: "Versión neutra: «Hubo empujones frente a la alcaldía y un vendedor fue atendido por un golpe leve; no se sabe quién empujó a quién».",
            why: "Neutralizar no es atribuir: si el agente se desconoce, no se inventa.",
          },
        ],
      },
    ],
  },
  grammar: {
    intro: "Primero identifica qué hace cada construcción con la responsabilidad; después reescribe sin esconder ni inventar.",
    exercises: [
      {
        id: "c2-19-gramatica-agente",
        type: "context",
        prompt: "Lee el fragmento y responde sobre quién aparece como responsable.",
        items: [
          {
            context: "«Desaparece el tianguis de los sábados en la avenida Coyoacán».",
            q: "¿Qué hace el verbo «desaparece» con la responsabilidad?",
            options: [
              "Presenta el traslado como algo que ocurrió solo, sin nadie que lo decidiera.",
              "Atribuye la decisión a los comerciantes.",
              "Atribuye la decisión a la alcaldía.",
            ],
            answer: 0,
            why: "Un intransitivo convierte lo afectado en sujeto y borra al agente.",
          },
          {
            context: "«Un comerciante resultó herido durante la protesta».",
            q: "¿Qué informa la frase?",
            options: [
              "Que la policía hirió a un comerciante.",
              "Que un comerciante se hirió a sí mismo.",
              "Que hubo un herido, sin decir quién o qué lo causó.",
            ],
            answer: 2,
            why: "«Resultar + participio» presenta el daño sin causante.",
          },
          {
            context: "«La reubicación del tianguis ha generado malestar».",
            q: "¿Qué información borra la nominalización?",
            options: [
              "El nombre del tianguis.",
              "Quién decidió la reubicación y cuándo.",
              "El malestar.",
            ],
            answer: 1,
            why: "La nominalización borra agente y tiempo.",
          },
          {
            context: "«Se midieron las ventas de cuarenta puestos durante tres sábados», en el estudio de una universidad.",
            q: "¿Es sospechosa esta construcción sin agente?",
            options: [
              "Sí: oculta a los responsables del estudio.",
              "Sí: presupone que las ventas bajaron.",
              "No: sigue la convención del texto científico y el agente es obvio.",
            ],
            answer: 2,
            why: "No toda frase sin agente es sesgada.",
          },
        ],
      },
      {
        id: "c2-19-gramatica-reescritura",
        type: "gap",
        prompt: "Completa la versión que hace visible al agente conocido.",
        items: [
          { q: "Original: «El tianguis fue trasladado». Con agente: «La ___ trasladó el tianguis».", answers: [["alcaldía"]], why: "Activa con el agente como sujeto." },
          { q: "Original: «Suben las cuotas de los puestos». Con agente: «La alcaldía ___ las cuotas de los puestos».", answers: [["sube", "subió", "aumenta", "aumentó"]], why: "El verbo transitivo exige un agente." },
          { q: "Original: «La aprobación del traslado». Con agente y tiempo: «El concejo ___ el traslado el 3 de marzo».", answers: [["aprobó"]], why: "Se recupera el verbo, el agente y la fecha." },
          { q: "Original: «Se cerraron dos calles». Con agente: «La policía de tránsito ___ dos calles».", answers: [["cerró"]], why: "Si el agente se conoce y es relevante, puede aparecer." },
        ],
      },
      {
        id: "c2-19-gramatica-recursos",
        type: "classify",
        prompt: "Clasifica cada fragmento según el recurso principal que usa.",
        categories: ["Agente borrado", "Presuposición", "Cuantificación vaga", "Eufemismo o disfemismo"],
        items: [
          { text: "Se produjeron enfrentamientos frente a la alcaldía.", cat: 0, why: "Verbo de acontecimiento sin causante." },
          { text: "¿Hasta cuándo seguirá la alcaldía despreciando a los vendedores?", cat: 1, why: "Da por hecho el desprecio y su duración." },
          { text: "Numerosos vecinos aplauden la medida.", cat: 2, why: "¿Cuántos? ¿Según quién?" },
          { text: "El tarifazo de la alcaldía golpea a los marchantes.", cat: 3, why: "Disfemismo: «tarifazo»." },
          { text: "Los vecinos por fin recuperan su banqueta.", cat: 1, why: "Presupone una pérdida previa." },
          { text: "El plan de reordenamiento comercial entra en vigor.", cat: 3, why: "Eufemismo que suaviza el traslado." },
          { text: "Las ventas caen hasta un 40 %.", cat: 2, why: "El máximo presentado como si fuera lo general." },
          { text: "Fueron retirados los puestos de la avenida.", cat: 0, why: "Pasiva sin agente." },
        ],
      },
      {
        id: "c2-19-gramatica-errores",
        type: "error",
        prompt: "Corrige cada versión «neutra» que no lo es.",
        items: [
          {
            sentence: "Versión neutra: «La polémica medida de la alcaldía entra en vigor en mayo».",
            answers: ["Versión neutra: «La medida de la alcaldía entra en vigor en mayo».", "Versión neutra: «El traslado del tianguis entra en vigor en mayo»."],
            why: "El adjetivo antepuesto presenta la valoración como algo sabido.",
          },
          {
            sentence: "Versión neutra: «Los comerciantes agredieron a los policías frente a la alcaldía».",
            answers: ["Versión neutra: «Hubo empujones entre comerciantes y policías frente a la alcaldía».", "Versión neutra: «Hubo empujones frente a la alcaldía; no se sabe quién los inició»."],
            why: "No se sabe quién empujó: la versión neutra no puede inventar un responsable.",
          },
          {
            sentence: "Versión neutra: «Miles de comerciantes perderán su lugar».",
            answers: ["Versión neutra: «60 de los 240 puestos no tendrán lugar en el predio».", "Versión neutra: «Sesenta de los 240 puestos no tendrán lugar en el predio»."],
            why: "La cifra comprobable sustituye a la cantidad vaga.",
          },
          {
            sentence: "Versión neutra: «La alcaldía admite que ignoró a los vendedores».",
            answers: ["Versión neutra: «La alcaldía reconoce que no hubo una consulta formal con los vendedores».", "Versión neutra: «Según la alcaldía, no hubo una consulta formal con los vendedores»."],
            why: "«Ignorar» es una valoración; el dato verificable es la falta de consulta formal.",
          },
        ],
      },
    ],
  },
  vocabulary: {
    intro: "Léxico del comercio en la vía pública en la Ciudad de México y del análisis de prensa.",
    groups: [
      {
        title: "El tianguis y la calle",
        items: [
          { es: "el tianguis", note: "en México, mercado callejero que se instala un día fijo de la semana" },
          { es: "el puesto", note: "instalación desmontable donde se vende en un mercado" },
          { es: "el marchante / la marchanta", note: "en México, cliente habitual de un puesto (y, a veces, el propio vendedor)" },
          { es: "la banqueta", note: "en México, acera" },
          { es: "el predio", note: "terreno o solar" },
          { es: "la alcaldía", note: "en la Ciudad de México, cada una de sus demarcaciones territoriales y su gobierno" },
        ],
      },
      {
        title: "Leer la prensa",
        items: [
          { es: "el encuadre", note: "manera de presentar un hecho que orienta su interpretación" },
          { es: "el sesgo", note: "inclinación sistemática en una dirección" },
          { es: "el eufemismo", note: "expresión suave que sustituye a otra más dura" },
          { es: "el disfemismo", note: "expresión dura o despectiva que sustituye a otra neutra" },
          { es: "la entradilla", note: "primer párrafo de una noticia, que resume lo esencial" },
          { es: "la fuente", note: "persona o documento del que procede una información" },
        ],
      },
    ],
    exercises: [
      {
        id: "c2-19-lexico-relacion",
        type: "match",
        prompt: "Relaciona cada término con su definición.",
        pairs: [
          { left: "el tianguis", right: "en México, mercado callejero que se instala un día fijo de la semana" },
          { left: "la banqueta", right: "en México, acera" },
          { left: "el encuadre", right: "manera de presentar un hecho que orienta su interpretación" },
          { left: "el disfemismo", right: "expresión dura o despectiva que sustituye a otra neutra" },
          { left: "la entradilla", right: "primer párrafo de una noticia, que resume lo esencial" },
          { left: "el predio", right: "terreno o solar" },
        ],
      },
      {
        id: "c2-19-lexico-uso",
        type: "gap",
        prompt: "Completa con la palabra adecuada del vocabulario.",
        bank: ["eufemismo", "sesgo", "puestos", "fuente"],
        items: [
          { q: "«Reordenamiento» es un ___ para un traslado que muchos vendedores no querían.", answers: [["eufemismo"]] },
          { q: "El tianguis tiene 240 ___, de ropa, comida y herramientas.", answers: [["puestos"]] },
          { q: "Que un diario siempre ponga a la alcaldía como sujeto de las buenas noticias puede indicar un ___.", answers: [["sesgo"]] },
          { q: "La cifra de 18 millones procede de una ___ oficial: el acta del concejo.", answers: [["fuente"]] },
        ],
      },
    ],
  },
  pronunciation: {
    focus: "Dónde cae el acento: quién hizo qué",
    explanation: [
      "Al leer en voz alta un titular o una noticia, el acento de frase dice al oyente qué es lo importante. En «LA ALCALDÍA trasladó el tianguis», el foco cae sobre el agente: fue ella y no otro. En «La alcaldía trasladó el TIANGUIS», el foco cae en lo afectado. Si analizas una frase en voz alta, el acento ayuda a mostrar qué parte borra o destaca la construcción.",
      "En cambio, para leer una versión neutra conviene un acento regular, sin énfasis en adjetivos ni en cifras: si subrayas con la voz «sesenta puestos sin lugar», vuelves a cargar de valoración un texto que habías neutralizado. Los adjetivos valorativos antepuestos («la polémica medida») tienden a recibir énfasis; al leerlos en un análisis, puedes marcarlos para señalarlos como recurso.",
      "El audio utiliza la síntesis disponible en el navegador: sirve para comparar ritmos y acentos de frase, no certifica un acento regional.",
    ],
    table: {
      caption: "Mismo titular, distinto foco",
      head: ["Lectura", "Qué destaca"],
      rows: [
        ["LA ALCALDÍA traslada el tianguis.", "quién decidió"],
        ["La alcaldía TRASLADA el tianguis.", "la acción (no lo cierra, lo traslada)"],
        ["La alcaldía traslada el TIANGUIS.", "qué se traslada"],
        ["Se traslada el tianguis.", "nadie: el agente no está"],
      ],
    },
    perceive: {
      id: "c2-19-percepcion",
      type: "listen",
      prompt: "Escucha cada frase y responde.",
      items: [
        {
          q: "¿Aparece en la frase quién tomó la decisión?",
          options: ["Sí, como sujeto.", "No, la frase no lo dice."],
          answer: 1,
          why: "«Fue trasladado» sin complemento agente.",
          audio: "El tianguis de los sábados fue trasladado al predio de la calle Encino.",
          voice: "es-MX-f",
        },
        {
          q: "¿Qué da por hecho la pregunta que oyes?",
          options: ["Que la alcaldía ignora a los vendedores.", "Que los vendedores se van a ir.", "Nada."],
          answer: 0,
          why: "«Dejar de ignorar» presupone que ahora los ignora.",
          audio: "¿Cuándo va a dejar la alcaldía de ignorar a los vendedores?",
          voice: "es-MX-m",
        },
        {
          q: "¿Qué tipo de expresión usa quien habla para el aumento de la cuota?",
          options: ["Neutra.", "Un eufemismo.", "Un disfemismo."],
          answer: 2,
          why: "«Tarifazo» endurece el dato.",
          audio: "Y encima, el tarifazo: doscientos pesos más por puesto cada sábado.",
          voice: "es-CO-f",
        },
        {
          q: "¿Qué hace la frase con el herido?",
          options: ["Culpa a la policía.", "Informa del daño sin decir quién lo causó.", "Niega que haya heridos."],
          answer: 1,
          why: "«Resultó lesionado» no tiene causante.",
          audio: "Un vendedor resultó levemente lesionado durante la protesta.",
          voice: "es-MX-f",
        },
      ],
    },
    produce: [
      { text: "No fue el tianguis el que desapareció: fue la alcaldía la que lo trasladó.", tip: "Acento contrastivo en «tianguis» y en «alcaldía».", voice: "es-MX-m" },
      { text: "El concejo aprobó el traslado el 3 de marzo, a propuesta de la alcaldesa.", tip: "Lectura neutra: acento regular, sin subrayar cifras.", voice: "es-MX-f" },
      { text: "La polémica reubicación, dice el diario, como si la polémica ya estuviera decidida.", tip: "Marca «polémica» al citarla para señalarla como recurso.", voice: "es-CO-m" },
      { text: "Hubo empujones; no se sabe quién empezó.", tip: "Tono descendente y tranquilo: dato y límite del dato.", voice: "es-MX-m" },
    ],
    spelling: "Al citar un titular para analizarlo, ponlo entre comillas y respeta su forma exacta, incluidos los adjetivos y el orden; si añades algo, va entre corchetes. El análisis pierde valor si la cita no es literal.",
  },
  listening: {
    title: "Dos diarios, un tianguis",
    context: "Sesión de un taller de lectura crítica en una biblioteca pública de la Ciudad de México. Patricia, la coordinadora, comenta con Ernesto, jubilado y lector diario de prensa, y con Valeria, estudiante de periodismo, dos noticias sobre el traslado de un tianguis. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    speakers: [
      { id: "p", name: "Patricia", voice: "es-MX-f", role: "Coordinadora del taller" },
      { id: "e", name: "Ernesto", voice: "es-MX-m", role: "Participante, lector de prensa" },
      { id: "v", name: "Valeria", voice: "es-CO-f", role: "Participante, estudiante de periodismo" },
    ],
    script: [
      { speaker: "p", text: "Buenas tardes. Hoy tenemos dos noticias sobre lo mismo: el traslado del tianguis de los sábados al predio de la calle Encino. Primero repasemos los hechos que nadie discute: el concejo de la alcaldía lo aprobó el 3 de marzo a propuesta de la alcaldesa, se aplica desde el 1 de mayo, afecta a 240 puestos y 60 de ellos no tendrán lugar en el predio. Hubo una protesta con empujones y un vendedor fue atendido por un golpe leve. Quién empujó a quién, no se sabe. Ahora, los titulares." },
      { speaker: "e", text: "El de «El Faro Capitalino» dice: «Desaparece el tianguis de la avenida; vendedores denuncian desalojo». Y el del «Diario del Altiplano»: «Los vecinos recuperan su banqueta tras el reordenamiento del comercio»." },
      { speaker: "v", text: "En el primero, el tianguis «desaparece», como si se hubiera evaporado. No hay nadie que decida. Y luego los vendedores son los únicos que actúan: denuncian." },
      { speaker: "p", text: "Bien visto. ¿Y el segundo?" },
      { speaker: "e", text: "El segundo pone a los vecinos de protagonistas, y «recuperan su banqueta» da por hecho que la banqueta era suya y que se la habían quitado. Además, «reordenamiento» suena a ordenar un cajón; no dice que se mueve a nadie." },
      { speaker: "p", text: "Exacto: presuposición y eufemismo. Fíjense en algo: ninguno de los dos titulares dice que fue la alcaldía la que tomó la decisión. El primero porque usa un verbo intransitivo; el segundo porque usa una nominalización. Dos caminos distintos para el mismo resultado." },
      { speaker: "v", text: "Pero en la entradilla de «El Faro» sí aparece la alcaldía. Dice: «La polémica medida de la alcaldía deja sin lugar a cientos de familias»." },
      { speaker: "e", text: "Ahí ya hay dos cosas. «La polémica medida», con el adjetivo delante, como si todos supiéramos que es polémica. Y «cientos de familias», cuando el dato es sesenta puestos." },
      { speaker: "v", text: "Aunque, en defensa del diario, sesenta puestos pueden ser más de sesenta familias, ¿no? En un puesto trabajan a veces dos o tres hogares." },
      { speaker: "p", text: "Puede ser, Valeria, y es una buena objeción. Pero entonces el diario debería decirlo y dar la fuente. Si no tiene el dato, lo honesto es la cifra que sí tiene. Ahora, la protesta. «El Faro» escribe: «Policías empujaron a los comerciantes». El «Diario del Altiplano»: «Se produjeron incidentes aislados»." },
      { speaker: "e", text: "Uno inventa un culpable y el otro lo esconde todo. «Incidentes aislados» ni siquiera dice que hubo empujones." },
      { speaker: "p", text: "Cuidado con el segundo juicio. «Se produjeron incidentes» no tiene agente, y en este caso el agente no se conoce, así que la falta de agente es legítima. Lo criticable es otra cosa: «incidentes aislados» minimiza y no menciona al herido. La versión neutra sería: «Hubo empujones frente a la alcaldía; un vendedor fue atendido por un golpe leve. No se ha establecido quién inició el forcejeo»." },
      { speaker: "v", text: "O sea, que el análisis no consiste en ver sesgo en todo, sino en preguntar qué se sabe y qué decide contar cada uno." },
      { speaker: "p", text: "Eso es. Y en tratar a los dos diarios con la misma vara, aunque uno nos caiga mejor que el otro." },
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha la sesión completa sin abrir la transcripción. ¿Qué comparan y qué idea final sacan?",
        exercise: {
          id: "c2-19-escucha-gist",
          type: "choice",
          prompt: "Reconstruye la situación y la idea principal.",
          items: [
            {
              q: "¿Qué comparan en el taller?",
              options: [
                "Dos noticias de distintos diarios sobre el traslado de un tianguis.",
                "Dos leyes sobre el comercio en la vía pública.",
                "Dos entrevistas con la alcaldesa.",
              ],
              answer: 0,
              why: "Patricia presenta los dos titulares sobre el mismo hecho.",
            },
            {
              q: "¿Qué conclusión sacan al final?",
              options: [
                "Que uno de los diarios miente y el otro no.",
                "Que no se puede saber nada de lo que pasó.",
                "Que hay que preguntar qué se sabe y qué decide contar cada fuente, con el mismo rigor para las dos.",
              ],
              answer: 2,
              why: "Valeria y Patricia lo resumen al final.",
            },
          ],
        },
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota cada recurso señalado. Responde sin mirar la transcripción.",
        exercise: {
          id: "c2-19-escucha-detail",
          type: "choice",
          prompt: "Comprueba los detalles.",
          items: [
            {
              q: "¿Qué tienen en común los dos titulares, según Patricia?",
              options: [
                "Los dos citan a la alcaldesa.",
                "Ninguno dice que la alcaldía tomó la decisión.",
                "Los dos usan cifras exactas.",
              ],
              answer: 1,
              why: "Uno usa un intransitivo y el otro una nominalización.",
            },
            {
              q: "¿Qué objeción plantea Valeria sobre «cientos de familias»?",
              options: [
                "Que en un puesto pueden trabajar varios hogares.",
                "Que la cifra real es mayor que cientos.",
                "Que el diario no debería hablar de familias.",
              ],
              answer: 0,
              why: "Patricia la acepta, pero pide el dato y la fuente.",
            },
            {
              q: "¿Qué critica Patricia de «Se produjeron incidentes aislados»?",
              options: [
                "Que no tenga agente.",
                "Que use el pretérito.",
                "Que minimice con «aislados» y no mencione al herido.",
              ],
              answer: 2,
              why: "La falta de agente es legítima porque no se conoce.",
            },
          ],
        },
      },
      {
        stage: "notice",
        prompt: "Fíjate en el recurso que se nombra para cada fragmento. Relaciona y consulta la transcripción solo después de responder.",
        exercise: {
          id: "c2-19-escucha-notice",
          type: "match",
          prompt: "Relaciona cada fragmento con el recurso que lo explica.",
          pairs: [
            { left: "Desaparece el tianguis de la avenida", right: "verbo intransitivo que borra al agente" },
            { left: "Los vecinos recuperan su banqueta", right: "presuposición de una pérdida previa" },
            { left: "reordenamiento del comercio", right: "eufemismo y nominalización" },
            { left: "La polémica medida", right: "adjetivo valorativo antepuesto" },
            { left: "Policías empujaron a los comerciantes", right: "agente atribuido sin pruebas" },
          ],
          why: "Cada recurso reparte la responsabilidad de una manera distinta.",
        },
      },
    ],
  },
  reading: {
    title: "Un sábado, dos ciudades",
    genre: "Nota de lectura crítica",
    frame: "Nota semanal del taller de lectura crítica de una biblioteca pública de la Ciudad de México, redactada por su coordinadora. La alcaldía, el tianguis, las personas, las cifras y los dos diarios son ficticios.",
    text: [
      "Quien leyó el domingo los dos diarios que comentamos en el taller podría pensar que el sábado ocurrieron dos cosas distintas en dos ciudades distintas. En una, un tianguis desapareció y cientos de familias se quedaron en la calle; en la otra, los vecinos recuperaron su banqueta gracias a un ordenado plan municipal. Los hechos, sin embargo, son los mismos, y conviene empezar por ellos: el concejo de la alcaldía aprobó el 3 de marzo, a propuesta de la alcaldesa, trasladar el tianguis de los sábados al predio techado de la calle Encino, a unos 600 metros de su ubicación actual. La medida afecta a 240 puestos; 60 no tendrán lugar en el predio. El 1 de mayo, primer sábado de aplicación, hubo una protesta frente a la alcaldía con empujones, y un vendedor fue atendido por un golpe leve. Hasta hoy no se ha establecido quién inició el forcejeo.",
      "Empecemos por los titulares. «El Faro Capitalino» publicó: «Desaparece el tianguis de la avenida; vendedores denuncian desalojo». El verbo «desaparecer» es intransitivo: convierte el tianguis en sujeto de algo que parece haberle ocurrido solo. Nadie lo ha trasladado; simplemente, ya no está. Paradójicamente, el titular más crítico con la medida es el que borra a quien la tomó. La segunda parte del titular pone a los vendedores como únicos agentes de la jornada, y elige para la medida un disfemismo, «desalojo», que el diario no atribuye a nadie en concreto.",
      "El «Diario del Altiplano» tituló: «Los vecinos recuperan su banqueta tras el reordenamiento del comercio». Aquí el protagonista es otro grupo, los vecinos, y el verbo «recuperar» da por hecho dos cosas que la noticia no demuestra: que la banqueta era de ellos y que la habían perdido. El traslado aparece como una nominalización, «el reordenamiento», que no dice quién reordenó ni a quién, y que además funciona como eufemismo. La alcaldía tampoco aparece. Dos titulares opuestos coinciden, pues, en lo mismo: ninguno dice que la decisión la tomó un gobierno con nombre y apellidos.",
      "En las entradillas los recursos se multiplican. «El Faro» habla de «la polémica medida de la alcaldía», con el adjetivo antepuesto, como si la polémica fuera un dato compartido y no una valoración del diario, y afirma que la medida «deja sin lugar a cientos de familias». Una participante del taller hizo una objeción razonable: en un puesto pueden trabajar varios hogares. Es posible; pero si el diario tenía ese dato, debía darlo con su fuente, y si no lo tenía, la cifra comprobable eran sesenta puestos. El «Diario del Altiplano», por su parte, asegura que «numerosos vecinos aplauden la medida» y cita a dos. Dos personas no son «numerosos vecinos», y el diario no explica cómo llegó a esa conclusión.",
      "La protesta es el punto en el que las dos coberturas se separan más, y también donde más fácil es equivocarse al analizarlas. «El Faro» escribe: «Policías empujaron a los comerciantes frente a la alcaldía». La frase es activa y tiene un agente claro; el problema es que ese agente no consta en ninguna fuente que el diario cite. El «Diario del Altiplano» escribe: «Se produjeron incidentes aislados». La frase no tiene agente, y en este caso eso es legítimo, porque nadie sabe todavía quién empezó. Lo criticable no es la sintaxis, sino el léxico: «incidentes aislados» minimiza lo ocurrido y omite que hubo una persona atendida. Un diario inventa un responsable; el otro esconde un dato.",
      "La modalidad también trabaja. «El Faro» advierte que el traslado «podría provocar el cierre de cientos de negocios», una posibilidad que el texto adorna con una cifra que no procede de ninguna fuente. El «Diario del Altiplano» cita a un funcionario que dice que «no había alternativa» y que «hay que ordenar la vía pública», y no pregunta por qué no la había. En los dos casos, el lector recibe como necesidad o como amenaza lo que en realidad es una opinión.",
      "¿Cómo podría contarse el sábado sin empujar al lector hacia ningún lado? Proponemos una versión, sin pretender que sea la única: «El concejo de la alcaldía trasladó el tianguis de los sábados al predio de la calle Encino. La medida, aprobada el 3 de marzo a propuesta de la alcaldesa, afecta a 240 puestos, de los cuales 60 no tendrán lugar en el nuevo espacio. En la primera jornada hubo una protesta con empujones y un vendedor fue atendido por un golpe leve; no se ha establecido quién inició el forcejeo». Tiene menos color, pero dice quién decidió, a quién afecta y qué no se sabe.",
      "Una advertencia para terminar, porque en el taller la repetimos cada semana. Este tipo de análisis no sirve para decidir qué diario tiene razón sobre el tianguis; para eso hacen falta datos, no gramática. Sirve para leer mejor a los dos, con la misma vara, y para darnos cuenta de cuándo una frase nos está pidiendo que demos por hecho algo que nadie ha demostrado. Si al terminar la lectura solo encontramos sesgos en el diario que no nos gusta, probablemente el sesgo esté en nosotros.",
    ],
    glossary: [
      { es: "el forcejeo", note: "lucha física breve en la que dos partes empujan o tiran" },
      { es: "la jornada", note: "día en que ocurre algo, aquí el primer sábado de aplicación" },
      { es: "con la misma vara", note: "con el mismo criterio para todos" },
    ],
    tasks: [
      {
        id: "c2-19-lectura-comprension",
        type: "choice",
        prompt: "Comprueba que has entendido la nota.",
        items: [
          {
            q: "¿Qué tienen en común los dos titulares, según la nota?",
            options: [
              "Los dos citan cifras exactas.",
              "Los dos critican la medida.",
              "Ninguno dice que la decisión la tomó la alcaldía.",
            ],
            answer: 2,
            why: "Tercer párrafo: «ninguno dice que la decisión la tomó un gobierno».",
          },
          {
            q: "¿Por qué la autora no critica la falta de agente en «Se produjeron incidentes aislados»?",
            options: [
              "Porque el agente no se conoce, así que su ausencia es legítima.",
              "Porque el diario es más fiable.",
              "Porque la frase está en voz activa.",
            ],
            answer: 0,
            why: "Critica el léxico, no la sintaxis.",
          },
          {
            q: "¿Para qué sirve el análisis, según el último párrafo?",
            options: [
              "Para decidir qué diario tiene razón.",
              "Para leer mejor las dos fuentes con el mismo criterio.",
              "Para demostrar que todos los diarios mienten.",
            ],
            answer: 1,
            why: "«Sirve para leer mejor a los dos, con la misma vara».",
          },
        ],
      },
      {
        id: "c2-19-lectura-recursos",
        type: "match",
        prompt: "Relaciona cada cita de los diarios con el recurso que la nota señala.",
        pairs: [
          { left: "Desaparece el tianguis de la avenida", right: "intransitivo que borra al agente" },
          { left: "recuperan su banqueta", right: "verbo que presupone una pérdida" },
          { left: "numerosos vecinos aplauden la medida", right: "cuantificación vaga sin fuente" },
          { left: "Policías empujaron a los comerciantes", right: "agente sin respaldo en las fuentes" },
          { left: "podría provocar el cierre de cientos de negocios", right: "modalidad como amenaza" },
          { left: "no había alternativa", right: "modalidad como necesidad" },
        ],
      },
      {
        id: "c2-19-lectura-evaluacion",
        type: "open",
        prompt: "Evalúa la nota con argumentos propios.",
        items: [
          {
            prompt: "La autora afirma que «si al terminar la lectura solo encontramos sesgos en el diario que no nos gusta, probablemente el sesgo esté en nosotros». Explica en 80–100 palabras si la nota cumple su propia regla, con dos ejemplos del texto.",
            model: "La nota cumple su regla, porque reparte las críticas entre los dos diarios. Señala que «El Faro» borra al agente en su titular e inventa uno en la protesta, y que el «Diario del Altiplano» presupone una pérdida con «recuperan» y minimiza con «incidentes aislados». Además, reconoce lo legítimo: acepta la objeción sobre las familias y defiende la frase sin agente cuando no se conoce. Quizá podría haber analizado también qué fuentes cita cada diario, pero el trato es equilibrado.",
            checklist: [
              "Doy ejemplos referidos a los dos diarios.",
              "Menciono algo que la nota reconoce como legítimo.",
              "Tomo posición y la justifico.",
            ],
          },
        ],
      },
    ],
    noticing: {
      prompt: "Observa cómo la nota separa los hechos de los recursos y cómo evita inventar responsables.",
      items: [
        { quote: "Hasta hoy no se ha establecido quién inició el forcejeo.", note: "Límite del conocimiento dicho de forma explícita." },
        { quote: "Paradójicamente, el titular más crítico con la medida es el que borra a quien la tomó.", note: "El análisis va contra la intuición: la sintaxis no coincide con la postura." },
        { quote: "Lo criticable no es la sintaxis, sino el léxico", note: "Distingue el recurso legítimo del cuestionable." },
        { quote: "Un diario inventa un responsable; el otro esconde un dato.", note: "Mismo rigor para las dos fuentes." },
      ],
    },
  },
  practice: {
    intro: "Ordena, elige entre versiones, reescribe en neutro y escribe piezas breves. Termina recuperando clases de las semanas anteriores de C2.",
    exercises: [
      {
        id: "c2-19-orden",
        type: "order",
        prompt: "Ordena las palabras para formar versiones neutras con el agente conocido visible.",
        items: [
          {
            words: ["El", "concejo", "aprobó", "el", "traslado", "el", "3", "de", "marzo."],
            why: "Activa, con agente y fecha.",
          },
          {
            words: ["No", "se", "ha", "establecido", "quién", "inició", "el", "forcejeo."],
            why: "Marca de lo que no se sabe.",
          },
          {
            words: ["Sesenta", "de", "los", "240", "puestos", "no", "tendrán", "lugar."],
            why: "Cifra comprobable en lugar de cuantificación vaga.",
          },
        ],
      },
      {
        id: "c2-19-versiones",
        type: "context",
        prompt: "Elige la versión adecuada para cada propósito.",
        items: [
          {
            context: "Agencia de noticias que vende sus textos a diarios de todas las tendencias.",
            q: "¿Qué titular eliges?",
            options: [
              "La alcaldía traslada el tianguis de los sábados al predio de la calle Encino.",
              "Desaparece el tianguis de la avenida.",
              "Los vecinos recuperan por fin su banqueta.",
            ],
            answer: 0,
            why: "Agente visible, sin presuposición ni valoración.",
          },
          {
            context: "Noticia sobre la protesta. Nadie sabe quién empezó los empujones.",
            q: "¿Qué frase es correcta?",
            options: [
              "Los comerciantes agredieron a la policía.",
              "Se produjeron incidentes aislados sin importancia.",
              "Hubo empujones y un vendedor fue atendido por un golpe leve.",
            ],
            answer: 2,
            why: "Dice lo que se sabe sin inventar ni minimizar.",
          },
          {
            context: "Resumen de un estudio universitario sobre las ventas del tianguis.",
            q: "¿Qué frase sigue la convención del género sin ocultar nada relevante?",
            options: [
              "Los vendedores fueron obligados a dar sus datos.",
              "Se registraron las ventas de 40 puestos durante tres sábados.",
              "Nosotros, los investigadores de siempre, medimos las ventas.",
            ],
            answer: 1,
            why: "El «se» de los textos científicos es una convención legítima.",
          },
        ],
      },
      {
        id: "c2-19-neutralizar",
        type: "transform",
        prompt: "Reescribe cada frase de forma neutra según la instrucción.",
        items: [
          {
            source: "El tarifazo de la alcaldía golpea a los marchantes.",
            instruction: "Sustituye el disfemismo por el dato: la cuota sube 200 pesos por puesto.",
            answers: ["La alcaldía sube 200 pesos la cuota por puesto.", "La alcaldía aumenta la cuota en 200 pesos por puesto."],
            why: "El dato sustituye a la valoración y el agente queda visible.",
          },
          {
            source: "La polémica reubicación del tianguis entra en vigor.",
            instruction: "Elimina el adjetivo valorativo y recupera al agente con un verbo en activa.",
            answers: ["La alcaldía traslada el tianguis.", "La alcaldía reubica el tianguis."],
            why: "Sin adjetivo antepuesto y con agente.",
          },
          {
            source: "Numerosos vecinos aplauden la medida.",
            instruction: "Sustituye la cantidad vaga por lo que dice la fuente: dos vecinos entrevistados.",
            answers: ["Dos vecinos entrevistados apoyan la medida.", "Dos vecinos entrevistados se mostraron a favor de la medida."],
            why: "Cifra real y verbo menos valorativo.",
          },
        ],
      },
      {
        id: "c2-19-microescritura",
        type: "open",
        prompt: "Escribe dos piezas breves antes de la tarea de escritura.",
        items: [
          {
            prompt: "Escribe en 50–70 palabras dos titulares opuestos sobre un mismo hecho de tu ciudad (real o inventado) y explica qué recurso usa cada uno.",
            model: "Hecho: el ayuntamiento cierra una calle al tráfico. Titular A: «Los comerciantes pierden clientes por el cierre de la calle Mayor». Titular B: «Los peatones conquistan la calle Mayor». El A usa una nominalización («el cierre») que borra al ayuntamiento y presenta una pérdida no demostrada; el B presupone una lucha con «conquistan» y pone a los peatones como protagonistas.",
            checklist: [
              "Los dos titulares cuentan el mismo hecho.",
              "Identifico un recurso en cada uno.",
              "Uso la terminología de la semana.",
            ],
          },
          {
            prompt: "Escribe en 40–60 palabras la versión neutra de ese hecho, con agente visible, cifras comprobables y una marca de lo que no se sabe.",
            model: "El ayuntamiento cerró al tráfico la calle Mayor el 2 de junio. Según la asociación de comerciantes, doce de los treinta negocios han registrado menos ventas; el ayuntamiento no ha publicado datos propios. No se sabe todavía si el descenso se debe al cierre o a otras causas.",
            checklist: [
              "El agente aparece.",
              "Las cifras tienen fuente.",
              "Marco lo que no se sabe.",
            ],
          },
        ],
      },
      {
        id: "c2-19-recuperacion",
        type: "open",
        prompt: "Recupera lo que viste en las semanas anteriores de C2 con los estímulos que se te dan. No hace falta volver a esas lecciones: trabaja con el material de cada ítem.",
        items: [
          {
            prompt: "Recuperación de la clase G219 (foco y presuposición). Estímulo: «Fue la alcaldesa quien decidió trasladar el tianguis». Explica qué presupone la escindida y qué afirma, y escribe una versión que no presuponga nada.",
            model: "La escindida presupone que alguien decidió trasladar el tianguis y afirma que ese alguien fue la alcaldesa, frente a otros posibles. Versión sin presuposición marcada: «La alcaldesa propuso el traslado del tianguis y el concejo lo aprobó», que además corrige el dato: la decisión fue del concejo a propuesta de ella.",
            checklist: [
              "Separo lo presupuesto de lo afirmado.",
              "Mi versión no da nada por hecho.",
            ],
          },
          {
            prompt: "Recuperación de la clase G227 (atribución periodística). Estímulo: «Según fuentes vecinales, la medida cuenta con amplio respaldo». Explica qué problemas tiene la atribución y propón una versión rigurosa.",
            model: "«Fuentes vecinales» es una fuente vaga, y «amplio respaldo» no se apoya en ninguna cifra. Versión rigurosa: «Dos vecinos entrevistados por este diario apoyan la medida; no hay encuestas sobre la opinión del barrio».",
            checklist: [
              "Señalo la vaguedad de la fuente y de la cantidad.",
              "Propongo una atribución concreta.",
            ],
          },
          {
            prompt: "Recuperación de la clase G229 (paráfrasis fiel). Estímulo, frase de un estudio: «El traslado podría reducir las ventas de algunos puestos en las primeras semanas». Un diario titula: «El traslado hundirá las ventas del tianguis». Explica la distorsión y escribe un titular fiel.",
            model: "El diario sube la posibilidad a certeza («hundirá»), amplía el alcance de «algunos puestos» a todo el tianguis y borra la condición temporal. Titular fiel: «El traslado podría reducir las ventas de algunos puestos al principio, según un estudio».",
            checklist: [
              "Identifico certeza, alcance y condición.",
              "El titular conserva el compromiso.",
            ],
          },
          {
            prompt: "Recuperación de la clase G233 (cohesión anafórica). Estímulo: «La alcaldesa se reunió con la líder de los vendedores. Ella aceptó una mesa de diálogo». Explica la ambigüedad y por qué importa en un análisis de responsabilidad.",
            model: "«Ella» puede referirse a la alcaldesa o a la líder de los vendedores, y cada lectura atribuye la iniciativa a una parte distinta. En un texto sobre quién hizo qué, esa ambigüedad reparte la responsabilidad sin que nadie lo decida. Versión clara: «La líder de los vendedores aceptó la mesa de diálogo que le propuso la alcaldesa».",
            checklist: [
              "Explico las dos lecturas.",
              "Relaciono la ambigüedad con la responsabilidad.",
            ],
          },
        ],
      },
    ],
  },
  writing: {
    task: "Redacta una nota de lectura crítica (400–520 palabras) que compare cómo dos medios, reales o inventados, cubrieron el mismo hecho. Empieza por los hechos comprobables, analiza los titulares y al menos cuatro recursos (agente, presuposición, adjetivo o cuantificación, modalidad o eufemismo), reconoce algo legítimo en cada cobertura y termina con una versión neutra.",
    context: "La nota se publica en el boletín de un taller de lectura crítica para personas adultas. Los lectores tienen opiniones distintas sobre el tema, y el taller no toma partido: su objetivo es leer mejor. Puedes usar el caso del tianguis o elegir otro hecho con la misma lógica, siempre con ejemplos inventados o citados con exactitud.",
    steps: [
      "Haz una lista de los hechos que nadie discute y otra de lo que no se sabe.",
      "Copia literalmente los titulares y las frases que vas a analizar y marca en cada una el recurso principal.",
      "Redacta sin copiar el modelo. Dedica un párrafo a cada grupo de recursos y trata a los dos medios con el mismo rigor.",
      "Revisa la nota con la lista de control: corrige cualquier frase tuya que invente un responsable o que use los mismos recursos que critica, y comprueba que la versión neutra dice quién decidió y qué no se sabe.",
    ],
    useLanguage: [
      "Los hechos que nadie discute son…",
      "El verbo «…» convierte… en sujeto de algo que…",
      "La nominalización «…» no dice quién…",
      "… da por hecho que…",
      "La falta de agente es legítima porque…",
      "No se ha establecido…",
    ],
    model: [
      "Modelo parcial de apertura (no es una entrega completa): El lunes, dos medios digitales contaron la misma decisión municipal de dos maneras tan distintas que parecían hablar de ciudades diferentes. Conviene, por eso, empezar por lo que nadie discute: el ayuntamiento aprobó el 14 de abril cerrar al tráfico la calle Mayor los fines de semana; la medida se aplica desde mayo y afecta a treinta comercios. Lo que no se sabe todavía es si las ventas de esos comercios han bajado por el cierre o por otras razones. Con esos datos delante, vale la pena mirar despacio cómo titularon los dos medios.",
    ],
    checklist: [
      "Separo los hechos comprobables de lo que no se sabe.",
      "Cito literalmente y analizo al menos cuatro recursos distintos.",
      "Trato a los dos medios con el mismo rigor y reconozco algo legítimo en cada uno.",
      "No invento responsables ni uso en mi texto los recursos que critico.",
      "Termino con una versión neutra que dice quién decidió y qué no se sabe.",
    ],
    words: [400, 520],
  },
  speaking: {
    intro: "Prepárate con palabras clave, no con un guion leído. Si te grabas, la grabación queda en tu dispositivo; el navegador no evalúa tu pronunciación.",
    tasks: [
      {
        title: "Analizar un titular ante el taller",
        prompt: "Eres la persona que coordina la sesión. En unos cuatro minutos, presenta al grupo un titular real o inventado, explica qué hace su sintaxis con la responsabilidad, qué da por hecho y qué palabras empujan la interpretación, y propón una versión neutra. Termina con una pregunta para el grupo.",
        prep: [
          "Elige el titular y escríbelo literalmente.",
          "Anota tres recursos y una versión neutra.",
          "Prepara una pregunta abierta para el grupo.",
        ],
        seconds: 240,
        model: "Les traigo un titular de esta semana: «Se dispara el precio del transporte». Fíjense primero en el verbo: «dispararse» es pronominal, presenta la subida como algo que ocurre solo, como un fenómeno natural. Nadie la decidió. Pero el precio del transporte lo fija alguien. Segundo, «dispararse» exagera: la subida fue de un ocho por ciento…",
        selfCheck: [
          "Explico al menos tres recursos con su efecto.",
          "Propongo una versión neutra sin inventar agentes.",
          "Marco con la voz el agente cuando lo recupero.",
        ],
      },
      {
        title: "Responder a una acusación de partidismo",
        prompt: "Un participante te dice: «Usted solo critica a los diarios de un lado; este análisis es político». Responde con calma, explica el método, muestra con un ejemplo que se aplica a las dos fuentes y reconoce si tiene algo de razón.",
        prep: [
          "Prepara un ejemplo de cada medio.",
          "Prepara una fórmula para reconocer una crítica sin ceder en el método.",
        ],
        seconds: 150,
        model: "Es una crítica que me parece importante, y le agradezco que la haga. El método no mira de qué lado está un diario, sino qué hace con el agente, con los presupuestos y con las cifras. Hoy, por ejemplo, hemos visto que un diario inventaba un responsable y que el otro escondía un herido. Si en algún análisis solo he señalado a un lado, dígamelo y lo revisamos juntos.",
        selfCheck: [
          "Mantengo un tono sereno.",
          "Doy ejemplos de las dos fuentes.",
          "Reconozco lo que la crítica tiene de razonable.",
        ],
      },
      {
        title: "Leer dos versiones con distinta voz",
        prompt: "Lee en voz alta el titular de «El Faro Capitalino» y después la versión neutra de la nota del taller. En la primera, marca con el acento las palabras que analizas; en la segunda, lee con un acento regular, sin énfasis valorativos.",
        prep: [
          "Subraya en el titular las palabras que cargan la interpretación.",
          "Practica la versión neutra sin subrayar cifras.",
        ],
        seconds: 100,
        selfCheck: [
          "En el titular, el acento señala los recursos.",
          "La versión neutra suena informativa, sin énfasis.",
        ],
      },
    ],
  },
  useInClass: {
    intro: "Lleva a la próxima clase tu nota de lectura crítica y dos titulares reales sobre el mismo hecho. Estas tarjetas te ayudan a aprovechar el tiempo con tu profesor.",
    cards: [
      {
        move: "Desmonta",
        task: "Muestra a tu profesor un titular sin decirle tu análisis. Pídele que diga quién aparece como responsable y qué da por hecho; después compara con tu análisis.",
        phrases: ["¿Quién hace qué en este titular?", "¿Qué da por hecho?"],
      },
      {
        move: "Neutraliza",
        task: "Escribe en la pizarra o en un papel tu versión neutra de un titular y pide a tu profesor que busque cualquier palabra que todavía empuje la interpretación.",
        phrases: ["¿Queda algo valorativo?", "¿He inventado algún agente?"],
      },
      {
        move: "Discute",
        task: "Pregunta a tu profesor si cree que existe un titular totalmente neutro y defiende tu propia postura.",
        phrases: ["Yo diría que…", "Pero entonces, ¿cómo decides qué va primero?"],
      },
      {
        move: "Compara",
        task: "Pide a tu profesor un titular de su país y compáralo con uno del tuyo sobre un tema parecido: ¿usan los mismos recursos?",
        phrases: ["En mi país se diría…", "Aquí el verbo hace lo mismo que…"],
      },
    ],
    bring: "Tu nota revisada, los dos titulares reales y, si quieres, la grabación de tu análisis oral.",
  },
  quiz: {
    items: [
      {
        type: "choice",
        q: "¿Qué hace la construcción «Suben las cuotas del mercado»?",
        options: [
          "Atribuye la subida a los vendedores.",
          "Presenta la subida sin nadie que la decida.",
          "Presupone que las cuotas bajarán.",
        ],
        answer: 1,
        why: "El intransitivo convierte lo afectado en sujeto y borra al agente.",
      },
      {
        type: "choice",
        q: "¿Qué diferencia hay entre «la polémica decisión» y «una decisión polémica»?",
        options: [
          "La primera presenta la polémica como algo sabido; la segunda la aporta como información.",
          "Ninguna: significan exactamente lo mismo.",
          "La segunda es incorrecta.",
        ],
        answer: 0,
        why: "El adjetivo antepuesto da la valoración por compartida.",
      },
      {
        type: "listen",
        q: "Escucha el titular. ¿Qué da por hecho?",
        options: [
          "Que los vendedores van a protestar.",
          "Que la alcaldía ha trasladado el tianguis.",
          "Que la alcaldía había prometido algo y no lo ha cumplido.",
        ],
        answer: 2,
        why: "«Sigue sin cumplir su promesa» presupone una promesa previa incumplida.",
        audio: "La alcaldía sigue sin cumplir su promesa a los vendedores del tianguis.",
        voice: "es-MX-m",
      },
      {
        type: "gap",
        q: "Original: «Se tomó la decisión de cerrar el mercado». Con agente conocido: «El concejo ___ cerrar el mercado».",
        answers: [["decidió"]],
        hint: "Recupera el verbo que estaba escondido en la nominalización «la decisión».",
        why: "El verbo devuelve al agente su papel de sujeto.",
      },
      {
        type: "gap",
        q: "Versión neutra: «Hubo empujones frente al mercado. No se ha ___ quién los inició».",
        answers: [["establecido", "aclarado", "determinado", "confirmado"]],
        hint: "Participio que marca que un dato todavía no se conoce, sin atribuir nada a nadie.",
        why: "Lo neutro marca lo que no se sabe.",
      },
      {
        type: "transform",
        source: "Los vecinos por fin recuperan su plaza tras el reordenamiento.",
        instruction: "Escribe una versión neutra con la alcaldía como agente, sin presuposición ni eufemismo, sobre el traslado de los puestos de la plaza.",
        answers: ["La alcaldía trasladó los puestos de la plaza.", "La alcaldía retiró los puestos de la plaza y los trasladó a otro lugar."],
        why: "Se elimina la presuposición de «recuperan» y el eufemismo «reordenamiento».",
      },
      {
        type: "error",
        sentence: "Versión neutra: «Los vendedores atacaron a los inspectores durante la inspección».",
        answers: ["Versión neutra: «Hubo un altercado entre vendedores e inspectores durante la inspección».", "Versión neutra: «Durante la inspección hubo empujones; no se sabe quién los inició»."],
        why: "Sin pruebas de quién inició el altercado, no se atribuye.",
      },
      {
        type: "error",
        sentence: "Análisis: «La frase “Se analizaron 300 encuestas” oculta a los responsables del estudio».",
        answers: ["Análisis: «La frase “Se analizaron 300 encuestas” sigue la convención del texto científico y no oculta a nadie relevante»."],
        why: "El «se» de los textos científicos es una convención legítima.",
      },
      {
        type: "order",
        words: ["La", "alcaldía", "trasladó", "el", "tianguis", "al", "predio", "techado."],
        why: "Activa con agente visible.",
      },
      {
        type: "open",
        prompt: "Explica en 80–100 palabras a un compañero de clase por qué una frase sin agente no siempre es un sesgo. Da un ejemplo legítimo y otro sospechoso.",
        model: "Una frase sin agente solo es sospechosa si oculta a alguien que se conoce y cuya responsabilidad importa. Es legítima cuando el agente se desconoce, cuando es obvio o cuando el género lo pide. «Robaron dos puestos durante la noche» es legítima: nadie sabe quién fue. «Se aprobó el aumento de cuotas», en cambio, es sospechosa si el diario sabe que lo aprobó el concejo y prefiere no decirlo. El análisis consiste en preguntar si el agente se conoce y si importa, no en condenar la pasiva.",
        checklist: [
          "Explico el criterio: agente conocido y relevante.",
          "Doy un ejemplo legítimo y uno sospechoso.",
          "No condeno la construcción por sí misma.",
        ],
      },
    ],
  },
  complete: {
    canNow: [
      "Identifico cómo se borra o se muestra al agente con pasivas, «se», verbos de acontecimiento, intransitivos, «resultar» y nominalizaciones.",
      "Analizo el tema y las presuposiciones de titulares y preguntas.",
      "Reconozco el efecto de los adjetivos valorativos, la cuantificación vaga, la modalidad, los eufemismos y el «nosotros».",
      "Escribo versiones neutras que no esconden agentes conocidos ni inventan responsables, y trato a todas las fuentes con el mismo rigor.",
    ],
    review: [
      "Dentro de dos días, tapa la columna «¿Se ve quién actuó?» de la primera tabla y complétala de memoria con ejemplos nuevos.",
      "Dentro de una semana, compara los titulares de dos medios sobre una misma noticia y escribe la versión neutra.",
      "En la próxima clase, presenta tu análisis oral y pide a tu profesor que te diga si has tratado igual a las dos fuentes.",
    ],
  },
  related: [
    { path: "/gramatica/analisis-critico-de-sesgos-sintacticos-y", label: "Clase: Análisis crítico de sesgos sintácticos y presuposiciones" },
  ],
};
