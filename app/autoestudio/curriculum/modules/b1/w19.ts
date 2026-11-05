import type { Module } from "../../types";

/**
 * B1 · semana 19 · Autoestudio espejo de G124 (elipsis y reformulación: evitar
 * repeticiones) y G125 (narración de anécdotas con marcadores). Repaso autónomo
 * con una anécdota de maletas cambiadas en el aeropuerto de Santiago de Chile.
 */
export const b1w19: Module = {
  id: "b1-19",
  level: "b1",
  week: 19,
  kind: "core",
  title: "La maleta equivocada: contar una anécdota en Santiago sin repetir",
  subtitle: "Repaso de cómo evitar repeticiones («la mía», «la de Tomás», «la que tenía una cinta roja») y de cómo contar una anécdota con escena, sorpresa y final.",
  stop: { place: "Santiago", country: "Chile" },
  minutes: 95,
  newObjectives: [
    "b1.gram.g124",
    "b1.gram.g125",
    "b1.voc.w19-viaje-imprevistos",
    "b1.pron.w19-entonacion-relato",
    "b1.lis.w19-anecdota-aeropuerto",
    "b1.read.w19-blog-anecdota",
    "b1.wri.w19-contar-anecdota",
    "b1.spk.w19-anecdota-oral",
    "b1.fun.w19-reaccionar-relato",
    "b1.disc.w19-estructura-anecdota"
  ],
  reviewObjectives: ["b1.gram.g237","b1.gram.g122","b1.gram.g123","b1.voc.w18-fiesta-familiar","b1.pron.w18-pronombres-pegados","b1.lis.w18-plan-sorpresa","b1.read.w18-cronica-cumpleanos","b1.wri.w18-cronica-fiesta","b1.spk.w18-organizar-celebracion","b1.fun.w18-organizar-en-grupo","b1.disc.w18-informar-decisiones"],
  prerequisites: ["b1-18"],
  goal: {
    canDo: "Al final de esta semana puedes hablar de cosas y personas sin repetir sus nombres («no es la mía, es la de Tomás»), explicar quién es alguien o distinguirlo entre varios, y contar una anécdota con marcadores («resulta que…», «de repente…», «menos mal que…») y reaccionar a la de otra persona.",
    steps: [
      "Repasa cómo se omite un nombre que ya se conoce, los posesivos largos y la diferencia entre explicar y seleccionar.",
      "Repasa los marcadores para abrir, ordenar, sorprender y cerrar una anécdota, y los tiempos del pasado que la sostienen.",
      "Escucha a una chilena que cuenta cómo se llevó la maleta de otra persona.",
      "Lee una anécdota de viaje en un blog.",
      "Escribe tu propia anécdota, revísala y cuéntala en voz alta a alguien que te interrumpe."
    ]
  },
  theory: {
    intro: "Esta semana repasas dos clases que hacen tus relatos más ágiles. La primera te enseña a no repetir nombres sin perder claridad; la segunda, a contar una anécdota con ritmo y a reaccionar cuando te cuentan una. Te acompaña Camila, una ingeniera de Santiago que volvió de un congreso en Lima… con una maleta que no era suya.",
    parts: [
      {
        heading: "El nombre que no se repite: «la gris», «la de Tomás», «la que…»",
        body: [
          "Cuando todos saben de qué hablas, puedes quitar el nombre y dejar el artículo con lo que lo describe. El artículo concuerda con el nombre que falta: «Tengo dos maletas: la gris es mía y la azul, de mi hermana». Funciona con adjetivo («la grande»), con «de» + algo («la de Tomás», «la de las ruedas rotas») y con «que» + frase («la que tiene una cinta roja»).",
          "Sin nombre, el posesivo corto («mi», «tu», «su») no sirve: necesitas la forma larga con artículo: «el mío», «la tuya», «los suyos», «las nuestras». Como «el suyo» puede ser de él, de ella, de usted o de ellos, si hay duda usa «el de» + persona: «el de Camila», «el de ustedes»."
        ],
        table: {
          caption: "Sin repetir «maleta»",
          head: ["Con el nombre", "Sin el nombre"],
          rows: [
            ["la maleta gris", "la gris"],
            ["la maleta de Tomás", "la de Tomás"],
            ["la maleta que tiene ruedas", "la que tiene ruedas"],
            ["mi maleta / tu maleta", "la mía / la tuya"],
            ["sus maletas (de ellos)", "las suyas / las de ellos"]
          ]
        },
        mistakes: [
          {
            wrong: "Tu pasaporte está aquí, pero no encuentro mi.",
            right: "Tu pasaporte está aquí, pero no encuentro el mío.",
            why: "Sin nombre, el posesivo es la forma larga con artículo."
          },
          {
            wrong: "Prefiero esta mochila a esa de Ana.",
            right: "Prefiero esta mochila a la de Ana.",
            why: "Con «de» o «que», se usa el artículo, no «esa»."
          }
        ],
        tip: "Quita el nombre solo si el lector sabe de qué hablas: si hay dos candidatos, añade «de» + persona o una frase con «que»."
      },
      {
        heading: "Explicar o seleccionar: aposición y modificador",
        body: [
          "Una aposición explica quién es alguien o qué es algo que ya está identificado; va entre comas y, si la quitas, la frase sigue funcionando: «Tomás, mi compañero de oficina, me llevó al aeropuerto». Sirve para presentar a una persona sin escribir otra frase.",
          "Un modificador, en cambio, selecciona uno entre varios y va sin comas: «El compañero que vive en Ñuñoa me llevó al aeropuerto» (no el otro). Por eso las comas cambian el significado: «Los pasajeros, que tenían maletas grandes, esperaron una hora» (todos) frente a «Los pasajeros que tenían maletas grandes esperaron una hora» (solo esos)."
        ],
        examples: [
          { es: "Mi jefa, una mujer muy tranquila, se rio de la historia.", note: "Aposición: explica, va entre comas." },
          { es: "La vecina del tercero me prestó una maleta.", note: "Modificador: selecciona entre las vecinas." },
          { es: "Mis primos, que viven en Concepción, llegaron tarde.", note: "Con comas: todos mis primos viven allí." },
          { es: "Mis primos que viven en Concepción llegaron tarde.", note: "Sin comas: solo esos primos, no los demás." }
        ],
        mistakes: [
          {
            wrong: "Mi hermano que es piloto vive en Arica.",
            right: "Mi hermano, que es piloto, vive en Arica.",
            why: "Si solo tienes un hermano, la frase explica, no selecciona: necesita comas."
          }
        ]
      },
      {
        heading: "Contar una anécdota: abrir, avanzar y sorprender",
        body: [
          "Una anécdota suele empezar con un gancho: «¿A que no sabes qué me pasó?», «Resulta que…», «Una vez…». Después se pinta la escena en imperfecto o con «estaba» + gerundio («Estaba esperando la maleta y había muchísima gente») y se avanza con los hechos en indefinido, ordenados con «al principio», «entonces», «luego», «al rato» o «a los diez minutos».",
          "La sorpresa entra con «de repente», «de pronto», «en ese momento» o «justo cuando» + indefinido: «De repente vi una maleta igual que la mía». Para lo que había pasado antes, usa el pluscuamperfecto: «Cuando llegué a la cinta, el señor ya se había llevado la mía»."
        ],
        table: {
          caption: "Las partes de la anécdota",
          head: ["Parte", "Marcadores", "Tiempo verbal"],
          rows: [
            ["Gancho", "¿A que no sabes…?, resulta que, una vez", "indefinido o presente"],
            ["Escena", "mientras, estaba + gerundio cuando…", "imperfecto"],
            ["Hechos", "al principio, entonces, luego, al rato", "indefinido"],
            ["Sorpresa", "de repente, de pronto, justo cuando", "indefinido"],
            ["Antes de los hechos", "ya, todavía no", "pluscuamperfecto"]
          ]
        },
        mistakes: [
          {
            wrong: "Mientras esperé la maleta, sonó mi teléfono.",
            right: "Mientras esperaba la maleta, sonó mi teléfono.",
            why: "La escena de fondo con «mientras» va en imperfecto."
          },
          {
            wrong: "De repente sonaba la alarma.",
            right: "De repente sonó la alarma.",
            why: "Un hecho repentino va en indefinido."
          },
          {
            wrong: "Estuve comiendo cuando me llamaron.",
            right: "Estaba comiendo cuando me llamaron.",
            why: "Una acción interrumpida va con «estaba» + gerundio; «estuve» presenta un periodo cerrado («estuve dos horas esperando»)."
          }
        ]
      },
      {
        heading: "Cerrar y reaccionar",
        body: [
          "Para cerrar, usa «al final» (lo que pasó al terminar), «por fin» (algo que esperabas y por fin llegó), «total, que…» (resumen informal) y «menos mal que» + indicativo (alivio): «Menos mal que tenía la etiqueta con mi teléfono». No uses «por fin» para algo malo: «Al final perdí el vuelo», no «por fin perdí el vuelo».",
          "Quien escucha también trabaja: «¡No me digas!», «¿Y entonces?», «¡Qué mala suerte!», «¡Menos mal!», «¡Qué barbaridad!». «¡Qué fuerte!» es muy frecuente en España y menos en América. Y recuerda: «darse cuenta de que», con «de»."
        ],
        examples: [
          { es: "Total, que llegué a casa a las tres de la mañana.", note: "Resumen informal del final." },
          { es: "Al final me devolvieron la maleta al día siguiente.", note: "Lo que pasó al terminar." },
          { es: "Por fin, después de dos horas, apareció el señor.", note: "Algo esperado." },
          { es: "—Y la maleta no era la mía. —¡No me digas! ¿Y entonces?", note: "Reacción y petición de continuar." }
        ],
        mistakes: [
          {
            wrong: "En el taxi me di cuenta que no era mi maleta.",
            right: "En el taxi me di cuenta de que no era mi maleta.",
            why: "«Darse cuenta» lleva «de»."
          }
        ],
        tip: "Antes de contar, decide tu final y tu reacción favorita: una anécdota sin cierre deja al oyente esperando."
      }
    ]
  },
  grammar: {
    intro: "Primero practicas cómo evitar repeticiones; después, los marcadores y los tiempos de la anécdota.",
    exercises: [
      {
        id: "b1-19-gramatica-elipsis",
        type: "choice",
        title: "Sin repetir el nombre",
        prompt: "Elige la opción que evita la repetición y se entiende bien.",
        items: [
          { q: "«Hay dos maletas negras: ___ es de un señor de Brasil.»", options: ["la con ruedas", "la que tiene ruedas", "que tiene ruedas"], answer: 1, why: "Artículo + «que» + frase." },
          { q: "«Mi boleto está impreso; ___ está en el celular.»", options: ["el tuyo", "tu", "el tu"], answer: 0, why: "Sin nombre: posesivo largo con artículo." },
          { q: "«No es mi chaqueta: es ___.»", options: ["esa de mi hermana", "la de mi hermana", "de la mi hermana"], answer: 1, why: "Artículo + «de» + persona." },
          { q: "Hablas de dos amigos, Tomás y Nico. «Encontré el cargador. ¿Es ___?»", options: ["el suyo", "suyo", "el de Nico"], answer: 2, why: "Con dos posibles dueños, «el de» + persona evita la ambigüedad." }
        ]
      },
      {
        id: "b1-19-gramatica-aposicion",
        type: "classify",
        title: "¿Explica o selecciona?",
        prompt: "Fíjate en la parte destacada entre comas o sin comas. ¿Explica algo de alguien ya identificado o selecciona uno entre varios?",
        categories: ["Explica (aposición o con comas)", "Selecciona (sin comas)"],
        items: [
          { text: "Camila, ingeniera de una empresa minera, viaja mucho por trabajo.", cat: 0 },
          { text: "La maleta que tenía la cinta roja era de Camila.", cat: 1 },
          { text: "El aeropuerto de Santiago, que está a veinte kilómetros del centro, estaba lleno.", cat: 0 },
          { text: "Los pasajeros que venían de Lima esperaron en la cinta tres.", cat: 1 },
          { text: "Tomás, su compañero de oficina, la fue a buscar.", cat: 0 },
          { text: "El taxista que la llevó a casa era muy simpático.", cat: 1 }
        ]
      },
      {
        id: "b1-19-gramatica-marcadores",
        type: "gap",
        title: "La anécdota de Camila",
        prompt: "Completa con el verbo en el tiempo adecuado o con el marcador entre paréntesis.",
        items: [
          { q: "Mientras ___ (esperar, yo) la maleta, ___ (leer, yo) los mensajes del trabajo.", answers: [["esperaba"], ["leía"]], why: "Escena de fondo: imperfecto." },
          { q: "___ (De repente / Mientras) vi una maleta igual que la mía y la tomé.", answers: [["De repente", "de repente"]], why: "Hecho inesperado: «de repente» + indefinido." },
          { q: "Cuando llegué a casa, mi hermana ya ___ ___ (preparar) la cena.", answers: [["había"], ["preparado"]], why: "Algo anterior a otro hecho pasado: pluscuamperfecto." },
          { q: "___ (Menos mal / Por fin) que la maleta tenía una etiqueta con un teléfono.", answers: [["Menos mal", "menos mal"]], why: "Alivio: «menos mal que» + indicativo." },
          { q: "Esperé dos horas y ___ (al final / por fin) apareció el dueño.", answers: [["por fin"]], why: "Algo esperado durante mucho tiempo: «por fin»." }
        ]
      },
      {
        id: "b1-19-gramatica-errores",
        type: "error",
        title: "Corrige el error",
        prompt: "Cada frase tiene un error de las dos clases de la semana. Escríbela bien.",
        items: [
          { sentence: "Mi celular está sin batería; ¿me prestas tu?", answers: ["Mi celular está sin batería; ¿me prestas el tuyo?"], why: "Sin nombre: «el tuyo»." },
          { sentence: "Estuve durmiendo cuando sonó el timbre.", answers: ["Estaba durmiendo cuando sonó el timbre."], why: "Acción interrumpida: «estaba» + gerundio." },
          { sentence: "Por fin perdimos el último bus a Valparaíso.", answers: ["Al final perdimos el último bus a Valparaíso."], why: "«Por fin» es para algo deseado; para un resultado negativo, «al final»." },
          { sentence: "Cuando llegué a la puerta de embarque, el avión ya salió.", answers: ["Cuando llegué a la puerta de embarque, el avión ya había salido."], why: "Lo anterior a «llegué» va en pluscuamperfecto." }
        ]
      }
    ]
  },
  vocabulary: {
    intro: "Palabras para contar imprevistos de viaje. Algunas son muy de Chile: te lo indicamos.",
    groups: [
      {
        title: "En el aeropuerto",
        items: [
          { es: "la cinta de equipaje" },
          { es: "la etiqueta" },
          { es: "el mostrador de equipaje perdido" },
          { es: "la puerta de embarque" },
          { es: "el control de pasaportes" },
          { es: "facturar", note: "Entregar la maleta antes de subir al avión." }
        ]
      },
      {
        title: "Imprevistos",
        items: [
          { es: "confundirse de maleta" },
          { es: "darse cuenta de" },
          { es: "perder el vuelo" },
          { es: "un susto" },
          { es: "por suerte" }
        ]
      },
      {
        title: "Expresiones de Chile",
        items: [
          { es: "al tiro", note: "Inmediatamente." },
          { es: "fome", note: "Aburrido, sin gracia." },
          { es: "la micro", note: "El autobús urbano." },
          { es: "¡Qué lata!", note: "¡Qué fastidio!" },
          { es: "el celular", note: "El teléfono móvil." }
        ]
      }
    ],
    exercises: [
      {
        id: "b1-19-vocabulario-definiciones",
        type: "match",
        title: "Cada expresión con su significado",
        prompt: "Une cada palabra o expresión con su explicación.",
        pairs: [
          { left: "al tiro", right: "inmediatamente, sin esperar" },
          { left: "facturar", right: "entregar la maleta en el mostrador antes del vuelo" },
          { left: "la etiqueta", right: "el papel con el nombre y el destino que se pega a la maleta" },
          { left: "¡Qué lata!", right: "expresión de fastidio" },
          { left: "un susto", right: "el miedo repentino que sientes por algo inesperado" }
        ],
        why: "Fíjate en si la palabra es una acción, un objeto, una reacción o una forma de decir «ahora»."
      },
      {
        id: "b1-19-vocabulario-huecos",
        type: "gap",
        title: "Mensajes de Camila",
        prompt: "Completa con una palabra del banco.",
        bank: ["cinta", "micro", "fome", "embarque", "suerte"],
        items: [
          { q: "Llevo media hora en la ___ y mi maleta no sale.", answers: [["cinta"]], why: "Donde salen las maletas." },
          { q: "Mañana vuelvo a la oficina en ___, porque mi auto está en el taller.", answers: [["micro"]], why: "El autobús urbano, en Chile." },
          { q: "Por ___, el señor había puesto su teléfono en la maleta.", answers: [["suerte"]], why: "Algo bueno que no dependía de ti." },
          { q: "El congreso fue un poco ___: tres horas de presentaciones iguales.", answers: [["fome"]], why: "Aburrido." },
          { q: "Corrimos hasta la puerta de ___ número doce.", answers: [["embarque"]], why: "Desde donde se sube al avión." }
        ]
      }
    ]
  },
  pronunciation: {
    focus: "La entonación del relato: dejar al oyente esperando",
    explanation: [
      "Cuando cuentas una anécdota, no todas las frases terminan igual. Si la historia continúa, la voz se queda suspendida a media altura o sube un poco al final («Estaba esperando la maleta…»), y el oyente sabe que viene algo más. Cuando terminas una parte o la historia, la voz baja con claridad («…y era la de otro señor»).",
      "Antes del momento clave, muchos hablantes hacen una pausa breve y alargan un poco el marcador: «Y de repeeente…». Las aposiciones entre comas se dicen en un tono más bajo y un poco más rápido, como un paréntesis: «Tomás, mi compañero de oficina, me llamó»."
    ],
    examples: [
      { es: "Cuando llegué a la cinta… ↗ / …ya no quedaba ninguna maleta. ↘", note: "Tono suspendido / tono final." },
      { es: "Mi jefa, que es muy seria, se puso a reír.", note: "La aposición, en tono más bajo." }
    ],
    perceive: {
      id: "b1-19-pronunciacion-suspenso",
      type: "listen",
      title: "¿Sigue la historia o termina?",
      prompt: "Escucha cada fragmento y decide si la persona va a seguir o ha terminado.",
      items: [
        { q: "Primer fragmento: ¿sigue o termina?", options: ["Termina.", "Sigue: la voz se queda arriba."], answer: 1, why: "Tono suspendido: el oyente espera la continuación.", audio: "Estaba sacando la maleta de la cinta, y justo en ese momento…", voice: "es-CL-f" },
        { q: "Segundo fragmento: ¿sigue o termina?", options: ["Termina: la voz baja.", "Sigue."], answer: 0, why: "Tono descendente y un cierre típico: «total, que…».", audio: "Total, que llegué a casa a las tres de la mañana.", voice: "es-CL-m" },
        { q: "Tercer fragmento: ¿qué parte se dice como un paréntesis?", options: ["llegó tardísimo", "mi compañero de oficina", "Tomás"], answer: 1, why: "La aposición va en un tono más bajo.", audio: "Tomás, mi compañero de oficina, llegó tardísimo.", voice: "es-CL-f" },
        { q: "Cuarto fragmento: ¿sigue o termina?", options: ["Termina.", "Sigue: hay una pausa antes de la sorpresa."], answer: 1, why: "Marcador alargado y pausa: viene la sorpresa.", audio: "Abrí la maleta en el living y, de repente…", voice: "es-CL-m" }
      ]
    },
    produce: [
      { text: "¿A que no sabes qué me pasó el viernes?", tip: "Sube al final: es un gancho para que te pregunten.", voice: "es-CL-f" },
      { text: "Estaba esperando un taxi… y de repente apareció Tomás.", tip: "Deja la voz arriba antes de la pausa y baja al final.", voice: "es-CL-m" },
      { text: "Menos mal que la maleta, que era casi igual que la mía, tenía una etiqueta.", tip: "Di la parte entre comas más bajo y más rápido.", voice: "es-CL-f" }
    ],
    spelling: "En la escritura, las aposiciones y las relativas que explican van entre comas; las que seleccionan, sin comas. Los puntos suspensivos («…») marcan por escrito el suspenso de la voz."
  },
  listening: {
    title: "¿A que no sabes qué me pasó?",
    context: "Es lunes por la mañana en una oficina de Providencia, en Santiago. Camila acaba de volver de un congreso en Lima y le cuenta a su compañero Tomás lo que le pasó el viernes en el aeropuerto.",
    speakers: [
      { id: "cam", name: "Camila", voice: "es-CL-f", role: "ingeniera" },
      { id: "tom", name: "Tomás", voice: "es-CL-m", role: "compañero de oficina" }
    ],
    script: [
      { speaker: "cam", text: "¿A que no sabes qué me pasó el viernes? Resulta que volví de Lima con la maleta de otra persona." },
      { speaker: "tom", text: "¡No me digas! ¿Y cómo pasó eso?" },
      { speaker: "cam", text: "Mira, el vuelo llegó tardísimo y había muchísima gente en la cinta. Mientras esperaba, estaba contestando correos del congreso. De repente vi una maleta gris con una cinta roja, igual que la mía, la tomé y salí al tiro a buscar un taxi." },
      { speaker: "tom", text: "¿Y entonces?" },
      { speaker: "cam", text: "Llegué a casa, la abrí y, en vez de mi ropa, ¡había camisas de hombre y tres libros en portugués! En ese momento me di cuenta de que no era la mía, sino la de un señor brasileño." },
      { speaker: "tom", text: "¡Qué susto! ¿Y la tuya dónde estaba?" },
      { speaker: "cam", text: "Ahí está lo bueno. El señor, un profesor de São Paulo, se había llevado la mía a su hotel. Menos mal que las dos tenían etiqueta con el teléfono. Lo llamé, y él ya había llamado al aeropuerto." },
      { speaker: "tom", text: "¡Qué barbaridad! ¿Y al final?" },
      { speaker: "cam", text: "Al final quedamos en el hotel a las once de la noche y nos cambiamos las maletas en la recepción. Total, que por fin me acosté a la una, pero con mi pijama." }
    ],
    stages: [
      {
        stage: "gist",
        prompt: "Escucha una vez sin leer. ¿Qué cuenta Camila?",
        exercise: {
          id: "b1-19-escucha-global",
          type: "choice",
          prompt: "Elige la mejor respuesta.",
          items: [
            { q: "¿De qué trata la anécdota?", options: ["De un vuelo cancelado por la lluvia.", "De una maleta que se llevó por error.", "De un congreso muy aburrido."], answer: 1, why: "Camila se llevó la maleta de un señor brasileño." },
            { q: "¿Cómo termina la historia?", options: ["Bien: recupera su maleta esa misma noche.", "Mal: la maleta nunca aparece.", "No se sabe: la historia queda abierta."], answer: 0, why: "Se cambian las maletas en el hotel." }
          ]
        }
      },
      {
        stage: "detail",
        prompt: "Escucha otra vez y anota los detalles.",
        exercise: {
          id: "b1-19-escucha-detalle",
          type: "choice",
          prompt: "Responde según la conversación.",
          items: [
            { q: "¿Qué hacía Camila mientras esperaba en la cinta?", options: ["Hablaba con el señor brasileño.", "Buscaba un taxi.", "Contestaba correos del congreso."], answer: 2, why: "«Mientras esperaba, estaba contestando correos del congreso.»" },
            { q: "¿Cómo supo que la maleta no era suya?", options: ["Por el color de la cinta.", "Porque dentro había ropa de hombre y libros en portugués.", "Porque la llamó el aeropuerto."], answer: 1, why: "«Había camisas de hombre y tres libros en portugués.»" },
            { q: "¿Dónde se cambiaron las maletas?", options: ["En la recepción de un hotel.", "En el aeropuerto.", "En la oficina de Camila."], answer: 0, why: "«Nos cambiamos las maletas en la recepción.»" }
          ]
        }
      },
      {
        stage: "notice",
        prompt: "Fíjate en la gramática. Completa lo que dice Camila exactamente.",
        exercise: {
          id: "b1-19-escucha-formas",
          type: "gap",
          prompt: "Escribe la palabra o forma que usa.",
          items: [
            { q: "Me di cuenta de que no era ___ ___, sino la de un señor brasileño.", answers: [["la"], ["mía"]], why: "Posesivo largo sin nombre." },
            { q: "El señor, ___ ___ de São Paulo, se había llevado la mía.", answers: [["un"], ["profesor"]], why: "Aposición: explica quién es el señor." },
            { q: "___ ___ que las dos tenían etiqueta con el teléfono.", answers: [["Menos", "menos"], ["mal"]], why: "Alivio: «menos mal que»." },
            { q: "Él ya ___ ___ al aeropuerto.", answers: [["había"], ["llamado"]], why: "Pluscuamperfecto: antes de la llamada de Camila." }
          ]
        }
      }
    ]
  },
  reading: {
    title: "Tres mochilas rojas en la micro",
    genre: "Entrada de un blog de anécdotas de viaje",
    frame: "Un blog chileno publica cada semana una anécdota enviada por sus lectores. Esta la escribió Ignacio, un estudiante de Temuco.",
    text: [
      "Una vez, en mi primer año de universidad, viajé a Santiago para un partido de la selección con dos amigos del liceo, Matías y Benja. Los tres teníamos mochilas rojas casi iguales: la mía tenía un llavero de la U, la de Matías estaba un poco rota y la de Benja, que siempre ha sido el más ordenado, llevaba su nombre bordado.",
      "Resulta que después del partido tomamos una micro llena de hinchas. Mientras íbamos de pie, apretados como sardinas, alguien empezó a cantar y todo el bus se puso a saltar. En ese momento las mochilas se cayeron al suelo y quedaron mezcladas con las de otros pasajeros. Al rato nos bajamos, cada uno con una mochila roja, y nos fuimos al hostal sin mirar.",
      "Esa noche, cuando abrí la mía, me di cuenta de que no era la mía: dentro había un uniforme de enfermera, un libro de recetas y un sándwich de palta. Matías tenía la suya, pero Benja tenía la de una señora que, según la tarjeta de dentro, vivía en Maipú. ¡Qué lata! Mi mochila, con mi billetera, había desaparecido.",
      "Menos mal que la señora, una enfermera muy simpática, encontró mi carnet en el bolsillo y me llamó al día siguiente. Al final nos juntamos en una estación de metro y cambiamos las mochilas. Desde entonces, la mía lleva una cinta amarilla."
    ],
    glossary: [{ es: "el liceo" }, { es: "el hincha" }, { es: "la palta", note: "En Chile, el aguacate." }, { es: "el carnet" }],
    tasks: [
      {
        id: "b1-19-lectura-comprension",
        type: "choice",
        title: "Comprensión",
        prompt: "Responde según la anécdota.",
        items: [
          { q: "¿Por qué se mezclaron las mochilas?", options: ["Porque las dejaron en el estadio.", "Porque se cayeron al suelo de la micro cuando todos saltaban.", "Porque un amigo las cambió para hacer una broma."], answer: 1, why: "«Todo el bus se puso a saltar. En ese momento las mochilas se cayeron al suelo.»" },
          { q: "¿Qué había en la mochila que se llevó Ignacio?", options: ["Un uniforme de enfermera, un libro de recetas y un sándwich.", "La billetera de Benja.", "Una camiseta de la selección."], answer: 0, why: "«Dentro había un uniforme de enfermera, un libro de recetas y un sándwich de palta.»" },
          { q: "¿Cómo recuperó Ignacio su mochila?", options: ["La fue a buscar a Maipú.", "La encontró en el hostal.", "La señora lo llamó y se juntaron en el metro."], answer: 2, why: "«Me llamó al día siguiente… nos juntamos en una estación de metro.»" }
        ]
      },
      {
        id: "b1-19-lectura-partes",
        type: "classify",
        title: "Las partes de la anécdota",
        prompt: "Clasifica cada fragmento según su función en la anécdota.",
        categories: ["Gancho o escena", "Sorpresa o complicación", "Cierre"],
        items: [
          { text: "Una vez, en mi primer año de universidad…", cat: 0 },
          { text: "Mientras íbamos de pie, apretados como sardinas…", cat: 0 },
          { text: "En ese momento las mochilas se cayeron al suelo.", cat: 1 },
          { text: "Me di cuenta de que no era la mía.", cat: 1 },
          { text: "Al final nos juntamos en una estación de metro.", cat: 2 },
          { text: "Desde entonces, la mía lleva una cinta amarilla.", cat: 2 }
        ]
      }
    ],
    noticing: {
      prompt: "Fíjate en cómo el texto evita repetir «mochila» y en los marcadores que organizan la historia.",
      items: [
        { quote: "la mía tenía un llavero de la U, la de Matías estaba un poco rota", note: "Elipsis del nombre: «la mía», «la de Matías»." },
        { quote: "la de Benja, que siempre ha sido el más ordenado, llevaba su nombre bordado", note: "Relativa entre comas: explica algo de Benja, no selecciona." },
        { quote: "Mientras íbamos de pie, apretados como sardinas", note: "Escena de fondo en imperfecto con «mientras»." },
        { quote: "la señora, una enfermera muy simpática, encontró mi carnet", note: "Aposición: presenta a la señora sin otra frase." }
      ]
    }
  },
  practice: {
    intro: "Combinas las dos clases y recuperas lo de las semanas 17 y 18.",
    exercises: [
      {
        id: "b1-19-practica-orden",
        type: "order",
        title: "Frases de la anécdota",
        prompt: "Ordena las palabras para formar frases completas.",
        items: [
          { words: ["Justo", "cuando", "salía", "del", "aeropuerto,", "sonó", "mi", "celular."] },
          { words: ["Mi", "maleta", "es", "la", "que", "tiene", "una", "cinta", "roja."] },
          { words: ["Al", "rato", "llegó", "Tomás,", "mi", "compañero", "de", "oficina."] },
          { words: ["Menos", "mal", "que", "llevaba", "el", "pasaporte", "en", "la", "chaqueta."] }
        ]
      },
      {
        id: "b1-19-practica-retrieval",
        type: "context",
        title: "Recuperación: semanas 17 y 18",
        prompt: "Recuperación de semanas anteriores en la anécdota de Camila. Elige la mejor opción.",
        items: [
          { context: "Semana 17, estar + participio. Camila describe la maleta del señor al abrirla.", q: "¿Cómo lo dice?", options: ["La ropa fue doblada con mucho cuidado.", "La ropa estaba doblada con mucho cuidado.", "La ropa estaba doblando con mucho cuidado."], answer: 1, why: "Estado que encontró: «estaba» + participio." },
          { context: "Semana 18, pronombres. El señor le devolvió la maleta a Camila en el hotel.", q: "¿Cómo lo cuenta Tomás sin repetir nombres?", options: ["Le la devolvió en el hotel.", "Se la devolvió en el hotel.", "La se devolvió en el hotel."], answer: 1, why: "«Le» + «la» → «se la»." },
          { context: "Semana 18, concordancia. En la cinta esperaban unos cien pasajeros.", q: "Elige la frase correcta.", options: ["Habían unos cien pasajeros en la cinta.", "Hubieron unos cien pasajeros en la cinta.", "Había unos cien pasajeros en la cinta."], answer: 2, why: "«Haber» de existencia: singular." },
          { context: "Semana 18, ser o estar. Camila habla del profesor brasileño, una persona muy amable.", q: "¿Qué dice?", options: ["El profesor era muy atento.", "El profesor estaba muy atento.", "El profesor estuvo atento de mí."], answer: 0, why: "Amable, considerado: «ser atento»." }
        ]
      },
      {
        id: "b1-19-practica-reformular",
        type: "transform",
        title: "Sin repeticiones",
        prompt: "Reescribe cada frase sin repetir el nombre o uniendo la información, según la instrucción.",
        items: [
          { source: "Mi maleta es gris y la maleta de Tomás es azul.", instruction: "No repitas «maleta».", answers: ["Mi maleta es gris y la de Tomás es azul.", "Mi maleta es gris y la de Tomás, azul."], why: "Artículo + «de» + persona." },
          { source: "Tu billete está aquí. ¿Dónde está mi billete?", instruction: "No repitas «billete».", answers: ["Tu billete está aquí. ¿Dónde está el mío?"], why: "Posesivo largo con artículo." },
          { source: "Me ayudó Rosa. Rosa es la vecina del segundo.", instruction: "Une las dos frases con una aposición.", answers: ["Me ayudó Rosa, la vecina del segundo.", "Rosa, la vecina del segundo, me ayudó."], why: "La aposición explica quién es Rosa, entre comas." },
          { source: "Esperé la maleta. Mientras tanto leí el periódico.", instruction: "Une las dos frases con «mientras» y la escena en imperfecto.", answers: ["Mientras esperaba la maleta, leí el periódico.", "Mientras esperaba la maleta, leía el periódico.", "Leí el periódico mientras esperaba la maleta."], why: "La escena con «mientras» va en imperfecto." }
        ]
      },
      {
        id: "b1-19-practica-escritura-guiada",
        type: "open",
        title: "Mini anécdotas",
        prompt: "Escribe cada texto en dos o tres frases.",
        items: [
          {
            prompt: "Escribe el comienzo de una anécdota con un gancho y una escena de fondo.",
            model: "¿A que no sabes qué me pasó ayer en el supermercado? Estaba haciendo la fila para pagar y había muchísima gente, porque solo funcionaba una caja.",
            checklist: ["Empiezas con un gancho: «¿A que no sabes…?», «Resulta que…» o «Una vez…».", "Pintas la escena con imperfecto o «estaba» + gerundio."]
          },
          {
            prompt: "Describe dos objetos parecidos de dos personas sin repetir el nombre del objeto.",
            model: "Mi paraguas y el de mi novio son casi iguales: el mío es negro con el mango de madera y el suyo, negro con el mango de plástico. El que tiene el mango roto es el de él.",
            checklist: ["Usas «el mío», «el suyo» o «el de» + persona.", "Usas al menos una vez artículo + «que» + frase."]
          },
          {
            prompt: "Reacciona a la anécdota de una amiga que perdió el último tren y luego cuéntale el final de una historia tuya.",
            model: "¡Qué mala suerte! ¿Y entonces qué hiciste? A mí me pasó algo parecido, pero menos mal que un vecino me llevó en su auto. Total, que llegué a casa a medianoche.",
            checklist: ["Reaccionas con una expresión: «¡Qué mala suerte!», «¡No me digas!»…", "Cierras con «menos mal que», «al final» o «total, que»."]
          }
        ]
      }
    ]
  },
  writing: {
    task: "Una revista digital de viajes recoge anécdotas de sus lectores. Escribe la tuya: algo inesperado que te pasó en un viaje o un trayecto (una confusión, un objeto perdido, un encuentro sorprendente), con escena, sorpresa y final.",
    context: "Los lectores no te conocen ni conocen a las personas de tu historia: preséntalas con una aposición, y evita repetir los mismos nombres.",
    steps: [
      "Elige la anécdota y anota: la escena, el hecho inesperado, lo que había pasado antes y el final.",
      "Primer párrafo: el gancho y la escena, con imperfecto, «estaba» + gerundio y una aposición para presentar a alguien.",
      "Segundo párrafo: la sorpresa con «de repente» o «en ese momento», lo anterior en pluscuamperfecto y un cierre con «al final», «menos mal que» o «total, que».",
      "Revisa las repeticiones (cámbialas por «la mía», «la de…», «la que…»), las comas de las aposiciones y corrige «me di cuenta que» y «por fin» si el final es malo."
    ],
    useLanguage: [
      "¿A que no sabes…? / Resulta que… / Una vez…",
      "mientras + imperfecto; estaba + gerundio cuando…",
      "de repente / en ese momento / justo cuando + indefinido",
      "el mío, la de…, la que…",
      "menos mal que / al final / total, que / por fin"
    ],
    model: [
      "Una vez, volviendo de unas vacaciones en Mendoza, me pasó algo que todavía me hace reír. Estaba en el bus internacional, que tarda unas siete horas en cruzar la cordillera, y a mi lado viajaba una señora mayor con dos perros pequeños escondidos en un bolso. Mientras subíamos hacia la frontera, la señora me contaba su vida y los perros dormían tranquilos.",
      "De repente, justo cuando llegamos al control de aduana, uno de los perros empezó a ladrar. En ese momento me di cuenta de que la señora no había declarado a los animales, y el agente nos hizo bajar a todos. Al principio pensé que íbamos a perder horas, pero menos mal que la señora tenía los papeles de los perros en su maleta, la que estaba debajo del bus. Total, que llegamos a Santiago con una hora de retraso y con dos perros famosos."
    ],
    checklist: [
      "La anécdota tiene gancho, escena, sorpresa y cierre.",
      "La escena va en imperfecto y los hechos en indefinido; lo anterior, en pluscuamperfecto.",
      "Uso al menos tres marcadores distintos de la semana.",
      "Presento a alguien con una aposición entre comas y evito al menos una repetición con «el mío», «la de…» o «la que…».",
      "El texto tiene dos párrafos."
    ],
    words: [130, 180]
  },
  speaking: {
    intro: "Graba tus respuestas y escúchate: comprueba que tu voz se queda arriba antes de la sorpresa y baja al final.",
    tasks: [
      {
        title: "Mi anécdota",
        prompt: "Cuenta durante dos minutos una anécdota real o inventada de un viaje, del trabajo o de tu familia. Empieza con un gancho, describe la escena, cuenta la sorpresa y termina con un cierre claro.",
        prep: [
          "Un gancho y una escena con «estaba» + gerundio.",
          "Dos marcadores de sorpresa y uno de cierre.",
          "Una aposición y una elipsis («la mía», «la de…»)."
        ],
        seconds: 120,
        model: "¿A que no sabes qué me pasó en la boda de mi prima? Resulta que yo estaba encargada de los anillos. Estaba en el auto con mi tío, el padre de la novia, y de repente me di cuenta de que había dejado la cajita en el hotel. En ese momento…",
        selfCheck: [
          "¿He hablado al menos dos minutos?",
          "¿He usado imperfecto para la escena e indefinido para los hechos?",
          "¿He hecho una pausa antes de la sorpresa?"
        ]
      },
      {
        title: "Un oyente que interrumpe",
        prompt: "Cuenta tu anécdota a alguien que te interrumpe con reacciones y preguntas («¡No me digas!», «¿Y quién era ese?», «¿Y entonces?»). Responde a sus preguntas, aclara quién es cada persona con una aposición y retoma la historia. Practica con alguien que haga de interlocutor o graba las dos voces.",
        prep: [
          "Prepara una forma de retomar: «Bueno, como te decía…».",
          "Prepara una aposición para cada persona de la historia."
        ],
        seconds: 90,
        model: "—¿Y quién era el señor? —Un profesor, el dueño de la otra maleta. —¡No me digas! —Sí, sí. Bueno, como te decía, lo llamé y…",
        selfCheck: [
          "¿He respondido a las preguntas sin perder el hilo?",
          "¿He retomado la historia con un marcador?"
        ]
      }
    ]
  },
  useInClass: {
    intro: "Lleva tu anécdota y estas tarjetas a la próxima clase con tu profesor.",
    cards: [
      { move: "Cuenta", task: "Cuéntale a tu profesor tu anécdota sin leerla, con gancho, escena, sorpresa y final.", phrases: ["¿A que no sabes…?", "Y de repente…"] },
      { move: "Reacciona", task: "Escucha una anécdota de tu profesor y reacciona al menos tres veces sin interrumpir demasiado.", phrases: ["¡No me digas!", "¿Y entonces?"] },
      { move: "Distingue", task: "Pide a tu profesor que señale tres objetos de la clase y di de quién es cada uno sin repetir el nombre del objeto.", phrases: ["Es el mío.", "Es la de…"] },
      { move: "Presenta", task: "Presenta a tu profesor a tres personas de tu vida con una sola frase cada una, usando aposiciones.", phrases: ["Mi vecina, una mujer…", "Mi jefe, el que…"] }
    ],
    bring: "Tu anécdota revisada y la grabación de «Mi anécdota»."
  },
  quiz: {
    items: [
      { type: "choice", q: "«Mi asiento es el 14A; ___ es el 14B.»", options: ["tu", "el tuyo", "el tu"], answer: 1, why: "Posesivo largo sin nombre." },
      { type: "choice", q: "¿Qué frase dice que solo algunos turistas perdieron el tour?", options: ["Los turistas, que llegaron tarde, perdieron el tour.", "Los turistas que llegaron tarde perdieron el tour.", "Los turistas, los que llegaron tarde, perdieron el tour."], answer: 1, why: "Sin comas: selecciona solo a los que llegaron tarde." },
      { type: "listen", q: "Escucha. ¿En qué momento de la anécdota está la persona?", options: ["Al principio: el gancho.", "En la sorpresa.", "En el cierre."], answer: 2, why: "«Total, que…» y «al final»: cierre.", audio: "Total, que al final cenamos en una estación de servicio, y fue la mejor cena del viaje.", voice: "es-CL-m" },
      { type: "gap", q: "Mientras ___ (cruzar, nosotros) la calle, empezó a llover.", answers: [["cruzábamos"]], why: "Escena con «mientras»: imperfecto." },
      { type: "gap", q: "Cuando llegamos al cine, la película ya ___ ___ (empezar).", answers: [["había"], ["empezado"]], why: "Anterior a «llegamos»: pluscuamperfecto." },
      { type: "gap", q: "De las dos chaquetas, me llevo ___ ___ tiene capucha.", answers: [["la"], ["que"]], why: "Artículo + «que» + frase, sin repetir «chaqueta»." },
      { type: "order", words: ["En", "ese", "momento", "me", "di", "cuenta", "de", "que", "no", "tenía", "las", "llaves."], why: "«Darse cuenta de que»." },
      { type: "error", sentence: "De pronto caía una piedra enorme en la carretera.", answers: ["De pronto cayó una piedra enorme en la carretera."], why: "Hecho repentino: indefinido." },
      { type: "error", sentence: "Prefiero mi bufanda a esa de Lucía.", answers: ["Prefiero mi bufanda a la de Lucía."], why: "Con «de» + persona, sin repetir el nombre, se usa el artículo." },
      {
        type: "open",
        prompt: "Reformulación: convierte estas notas en el final de una anécdota, con marcadores y sin repetir «maleta». Notas: «Mi maleta no apareció. Apareció la maleta de otro pasajero. Esperé dos horas. Mi maleta llegó en el siguiente vuelo. Alivio: tenía el seguro de viaje.»",
        model: "Mi maleta no apareció, pero sí la de otro pasajero. Esperé dos horas y por fin la mía llegó en el siguiente vuelo. Menos mal que tenía el seguro de viaje.",
        checklist: [
          "Sustituyes «maleta» por «la de…» o «la mía» al menos dos veces.",
          "Usas «por fin» para algo esperado y «menos mal que» para el alivio.",
          "Los hechos van en indefinido.",
          "El texto se entiende igual que las notas."
        ]
      }
    ]
  },
  complete: {
    canNow: [
      "Evitar repeticiones con «la gris», «la de Tomás», «la que…» y con posesivos largos («el mío», «la suya»).",
      "Explicar quién es alguien con una aposición entre comas y seleccionar uno entre varios sin comas.",
      "Contar una anécdota con gancho, escena en imperfecto, hechos en indefinido, sorpresa y cierre.",
      "Reaccionar cuando otra persona cuenta una anécdota y pedirle que siga."
    ],
    review: [
      "El pluscuamperfecto de la semana 1 para lo que había pasado antes.",
      "Las relativas con «que» de la semana 13.",
      "Los pronombres y la concordancia de la semana 18."
    ]
  },
  related: [
    { path: "/decir-mas-sin-repetir", label: "Clase: Elipsis y reformulación: evitar repeticiones" },
    { path: "/gramatica/narracion-de-anecdotas-con-marcadores", label: "Clase: Narración de anécdotas con marcadores" }
  ]
};
