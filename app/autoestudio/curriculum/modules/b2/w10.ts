import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w10: Module = {
  "id": "b2-10",
  "level": "b2",
  "week": 10,
  "kind": "checkpoint",
  "title": "Checkpoint: informar después de la polémica",
  "subtitle": "Sintetizar declaraciones y negociar una recomendación.",
  "stop": {
    "place": "Mar del Plata",
    "country": "Argentina"
  },
  "minutes": 150,
  "newObjectives": [
    "b2.gram.estilo-indirecto-avanzado",
    "b2.voc.verbos-lengua",
    "b2.pron.cita-ironia",
    "b2.fun.resumir-declaraciones",
    "b2.lis.rueda-prensa",
    "b2.rev.checkpoint-2",
    "b2.wri.informe-breve"
  ],
  "reviewObjectives": [
    "b2.gram.concesivas",
    "b2.voc.tecnologia-etica",
    "b2.pron.concesion",
    "b2.fun.conceder-objetar",
    "b2.read.columna",
    "b2.gram.relativas-avanzadas",
    "b2.gram.explicativas-especificativas",
    "b2.voc.arte-cultura",
    "b2.pron.jerarquia-pausas",
    "b2.fun.describir-precision",
    "b2.wri.resena-exposicion",
    "b2.gram.condicionales-conectores",
    "b2.gram.consecutivas",
    "b2.voc.acuerdos-contratos",
    "b2.pron.foco-solo-si",
    "b2.fun.negociar-condiciones",
    "b2.spk.negociacion",
    "b2.gram.pasiva-impersonalidad",
    "b2.voc.prensa",
    "b2.pron.lectura-noticias",
    "b2.fun.informar-objetivamente",
    "b2.read.noticia",
    "b2.gram.sustantivas-sistema"
  ],
  "prerequisites": [
    "b2-09"
  ],
  "goal": {
    "canDo": "Puedo sintetizar declaraciones y negociar una recomendación con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: rectificar garantías y negociar una apertura por fases.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: sintetizar declaraciones y negociar una recomendación. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Sintetizar declaraciones y negociar una recomendación",
        "body": [
          "El estilo indirecto adapta persona, tiempo y referencias al punto desde el que informas: ayer dijo «vendré mañana» se convierte en dijo que vendría hoy. Los cambios dependen de si la información sigue vigente; no son una sustitución automática. Aseguró que introduce una afirmación; negó que y sugirió que suelen seleccionar subjuntivo."
        ],
        "examples": [
          {
            "es": "La directora negó que el museo fuera a cerrar.",
            "note": "Negación de una afirmación en pasado."
          },
          {
            "es": "Ayer prometió: «Mañana publicaré el acuerdo». Hoy explicó que lo publicaría hoy.",
            "note": "Futuro desde un punto pasado."
          },
          {
            "es": "Sugirió que las asociaciones revisaran el borrador.",
            "note": "Propuesta dirigida a otras personas."
          }
        ],
        "mistakes": [
          {
            "wrong": "La directora sugirió que revisamos el informe al día siguiente.",
            "right": "La directora sugirió que revisáramos el informe al día siguiente.",
            "why": "Sugerencia pasada con imperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "En una síntesis, afirmar, admitir, advertir, desmentir e insinuar no son intercambiables: atribuyen actos distintos. Integra concesiones, relativas, condiciones y pasivas de las semanas anteriores. Una recomendación debe apoyarse en datos y conservar las reservas de cada fuente, incluso si complican una conclusión breve."
        ],
        "examples": [
          {
            "es": "La directora negó que el museo fuera a cerrar.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Sugirió que las asociaciones revisaran el borrador.",
            "note": "Reformula sin cambiar participantes ni tiempo."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Elige formas por su función y por el momento desde el que se habla.",
    "exercises": [
      {
        "id": "g-contexto",
        "type": "gap",
        "prompt": "Completa estas decisiones lingüísticas de checkpoint: informar después de la polémica; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "La directora negó que el museo ___ a cerrar.",
            "answers": [
              [
                "fuera"
              ]
            ],
            "why": "Negación de una afirmación en pasado."
          },
          {
            "q": "Ayer prometió: «Mañana publicaré el acuerdo». Hoy explicó que lo ___ hoy.",
            "answers": [
              [
                "publicaría"
              ]
            ],
            "why": "Futuro desde un punto pasado."
          },
          {
            "q": "Sugirió que las asociaciones ___ el borrador.",
            "answers": [
              [
                "revisaran"
              ]
            ],
            "why": "Propuesta dirigida a otras personas."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Ayer dijo: «Mañana publicaré las opciones».» Informa hoy con dijo que y ajusta la referencia temporal.",
            "model": "Ayer dijo que publicaría las opciones hoy.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «La portavoz: «No hemos aceptado ese local».» Transmite con negó que, sujeto ellos.",
            "model": "La portavoz negó que hubieran aceptado ese local.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «La directora: «Revisen el presupuesto».» Transmite una sugerencia pasada.",
            "model": "La directora sugirió que revisaran el presupuesto.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende combinaciones en contexto y comprueba qué matiz aportan al caso.",
    "groups": [
      {
        "title": "Sintetizar declaraciones y negociar una recomendación",
        "items": [
          {
            "es": "asegurar un hecho",
            "note": "afirmarlo con firmeza"
          },
          {
            "es": "admitir un error",
            "note": "reconocer una falta"
          },
          {
            "es": "desmentir un rumor",
            "note": "negar una información circulante"
          },
          {
            "es": "advertir de un riesgo",
            "note": "señalar una posible dificultad"
          },
          {
            "es": "insinuar una crítica",
            "note": "expresarla indirectamente"
          },
          {
            "es": "prometer una medida",
            "note": "comprometerse a una acción"
          },
          {
            "es": "matizar una declaración",
            "note": "limitar su alcance"
          },
          {
            "es": "sintetizar posturas",
            "note": "reunir posiciones sin confundirlas"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para sintetizar declaraciones y negociar una recomendación con su significado.",
        "pairs": [
          {
            "left": "asegurar un hecho",
            "right": "afirmarlo con firmeza"
          },
          {
            "left": "admitir un error",
            "right": "reconocer una falta"
          },
          {
            "left": "desmentir un rumor",
            "right": "negar una información circulante"
          },
          {
            "left": "advertir de un riesgo",
            "right": "señalar una posible dificultad"
          },
          {
            "left": "insinuar una crítica",
            "right": "expresarla indirectamente"
          },
          {
            "left": "prometer una medida",
            "right": "comprometerse a una acción"
          },
          {
            "left": "matizar una declaración",
            "right": "limitar su alcance"
          },
          {
            "left": "sintetizar posturas",
            "right": "reunir posiciones sin confundirlas"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Distingue la voz de la fuente y tu comentario mediante pausas; la ironía no debe usarse para atribuir una intención que no consta.",
    "explanation": [
      "Distingue la voz de la fuente y tu comentario mediante pausas; la ironía no debe usarse para atribuir una intención que no consta.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "La directora negó que el museo fuera a cerrar."
      },
      {
        "es": "Ayer prometió: «Mañana publicaré el acuerdo». Hoy explicó que lo publicaría hoy."
      },
      {
        "es": "Sugirió que las asociaciones revisaran el borrador."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de checkpoint: informar después de la polémica, ¿qué fragmento se oye?",
          "options": [
            "era",
            "fue",
            "fuera"
          ],
          "answer": 2,
          "why": "Negación de una afirmación en pasado.",
          "audio": "La directora negó que el museo fuera a cerrar.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de checkpoint: informar después de la polémica, ¿qué fragmento se oye?",
          "options": [
            "publicará",
            "publicaría",
            "publicó"
          ],
          "answer": 1,
          "why": "Futuro desde un punto pasado.",
          "audio": "Ayer prometió: «Mañana publicaré el acuerdo». Hoy explicó que lo publicaría hoy.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "La directora negó que el museo fuera a cerrar.",
        "tip": "Distingue la voz de la fuente y tu comentario mediante pausas; la ironía no debe usarse para atribuir una intención que no consta.",
        "voice": "es-ES-f"
      },
      {
        "text": "Ayer prometió: «Mañana publicaré el acuerdo». Hoy explicó que lo publicaría hoy.",
        "tip": "Distingue la voz de la fuente y tu comentario mediante pausas; la ironía no debe usarse para atribuir una intención que no consta.",
        "voice": "es-ES-f"
      },
      {
        "text": "Sugirió que las asociaciones revisaran el borrador.",
        "tip": "Distingue la voz de la fuente y tu comentario mediante pausas; la ironía no debe usarse para atribuir una intención que no consta.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Checkpoint: informar después de la polémica",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Periodista",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Directora",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Portavoz",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Directora, el lunes aseguró que abrirían en septiembre. Ayer se publicó un documento que condiciona la fecha a una inspección. ¿Mantiene aquella afirmación o considera que debería haber explicado la condición desde el principio de la comparecencia?"
      },
      {
        "speaker": "s2",
        "text": "Debería haberla explicado. No pretendía presentar una garantía absoluta. La empresa nos había comunicado que esperaba terminar en agosto y yo transmití ese calendario. Ahora sugiero que preparemos una apertura por fases, siempre que cada sala cuente con la autorización técnica."
      },
      {
        "speaker": "s3",
        "text": "Reconocemos que la ampliación será útil, pero el local provisional no permite nuestros talleres. Cuando aceptamos el traslado, se nos prometió un espacio equivalente. No basta con que tenga la misma superficie: necesitamos condiciones acústicas similares y horarios compatibles con las actividades."
      },
      {
        "speaker": "s2",
        "text": "Admito que esa equivalencia se interpretó de manera demasiado estrecha. Pediré que se revise el local alternativo. No puedo prometer hoy una solución concreta, aunque sí puedo comprometerme a publicar el viernes las opciones y sus costes."
      },
      {
        "speaker": "s1",
        "text": "La empresa también ha desmentido que exista un fallo estructural confirmado. ¿Podemos aclarar qué se sabe? Algunas noticias citan una advertencia como si fuera un diagnóstico y otras presentan la falta de diagnóstico como prueba de que no hay ningún problema."
      },
      {
        "speaker": "s3",
        "text": "Precisamente necesitamos esa distinción. Aceptaríamos la apertura parcial si se verifican las salas y se garantiza un espacio temporal adecuado. Mientras tanto, pedimos que el acta recoja tanto el compromiso del viernes como los asuntos que siguen pendientes, sin convertir otra previsión en promesa."
      },
      {
        "speaker": "s1",
        "text": "Las cifras publicadas tampoco parecen comparables. En la apertura parcial se incluye personal adicional, mientras que en el aplazamiento solo aparece alquiler. ¿Se compromete a presentar ambos escenarios con los mismos conceptos? Sin esa información, la recomendación podría depender de cómo se organiza la tabla."
      },
      {
        "speaker": "s2",
        "text": "Sí, incorporaremos personal, alquiler y señalización en los dos casos, además de un margen para imprevistos. También prepararemos una versión para quienes organizan talleres. No quiero que simplificar el lenguaje signifique borrar las condiciones técnicas. Podremos explicar con claridad qué salas están autorizadas y qué fechas siguen siendo previsiones."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Mar del Plata?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Checkpoint: informar después de la polémica?",
              "options": [
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas.",
                "Rectificar garantías y negociar una apertura por fases"
              ],
              "answer": 2,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Checkpoint: informar después de la polémica»?",
              "options": [
                "Ninguna intervención tiene relación con la anterior.",
                "Las personas aclaran interpretaciones y conservan algunos límites.",
                "Todas repiten exactamente la misma opinión desde el inicio."
              ],
              "answer": 1,
              "why": "Identifica un turno que responda al anterior."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota quién sostiene cada afirmación.",
        "exercise": {
          "id": "l-detalle",
          "type": "choice",
          "prompt": "Localiza una intervención concreta en «Checkpoint: informar después de la polémica».",
          "items": [
            {
              "q": "¿Qué promete ahora la directora?",
              "options": [
                "Ofrecer hoy un local definitivo.",
                "Publicar opciones y costes el viernes.",
                "Abrir todas las salas sin inspección."
              ],
              "answer": 1,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Checkpoint: informar después de la polémica»?",
              "options": [
                "Directora, el lunes aseguró que abrirían en septiembre.",
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión."
              ],
              "answer": 0,
              "why": "Vuelve al inicio y comprueba la formulación exacta."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Distingue lo dicho de lo inferido; consulta la transcripción solo después de responder.",
        "exercise": {
          "id": "l-inferencia",
          "type": "open",
          "prompt": "Interpreta postura, reserva y efecto sobre la otra persona.",
          "items": [
            {
              "prompt": "En «Checkpoint: informar después de la polémica», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Precisamente necesitamos esa distinción. Aceptaríamos la apertura parcial si se verifican las salas y se garantiza un espacio temporal adecuado. Mientras tanto, pedimos que el acta recoja tanto el compromiso del viernes como los asuntos que siguen pendientes, sin convertir otra previsión en promesa.",
              "checklist": [
                "Atribuyo la intervención a su hablante.",
                "Distingo palabras explícitas e inferencia.",
                "Conservo una condición o un límite de la conversación."
              ]
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Checkpoint: informar después de la polémica: texto para interpretar",
    "genre": "Dossier argumentativo",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "La ampliación del museo municipal se anunció como un acuerdo cerrado. En la rueda de prensa del lunes, la directora aseguró que las asociaciones dispondrían de nuevas salas a partir de septiembre. El documento publicado al día siguiente, sin embargo, establecía que la apertura dependería de una revisión técnica. El contraste no demuestra que el proyecto vaya a fracasar, pero sí obliga a distinguir un calendario previsto de una fecha garantizada.",
      "Una asociación cultural, cuyas actividades se habían trasladado a un local provisional, pidió explicaciones. Su portavoz admitió que las obras mejorarían la accesibilidad, aunque objetó que no se hubiera consultado a los usuarios sobre los horarios. También recordó una condición incluida en la negociación: aceptarían el traslado siempre que dispusieran de un espacio equivalente durante todo el periodo. El local actual carece de aislamiento acústico, lo cual impide celebrar algunos talleres. La asociación no exige paralizar la reforma; solicita una alternativa concreta.",
      "La empresa responsable desmintió que hubiera abandonado las obras. Atribuyó la demora a una instalación que no figuraba en los planos y advirtió de que todavía debía comprobarse su estado. Esa explicación fue reproducida en varias redes como si se hubiera confirmado un fallo grave del edificio. El informe disponible no utiliza esa expresión. Se limita a recomendar una inspección antes de continuar una parte del trabajo. Transformar una precaución en un diagnóstico puede provocar tanta confusión como ocultar una dificultad real.",
      "El pleno recibirá tres propuestas: mantener la fecha anunciada, aplazar toda la apertura o inaugurar por fases las salas ya verificadas. La última opción parece conciliadora, pero también requiere personal adicional y señalización clara. Antes de elegir, conviene pedir una estimación de costes y definir quién comprobará cada condición. Un informe útil no debe premiar a quien habló con más seguridad, sino mostrar qué compromisos pueden sostenerse con la información actual y cuáles necesitan todavía una confirmación.",
      "Anexo presupuestario. Abrir solo las dos salas verificadas permitiría comenzar antes, pero exigiría contratar señalización y apoyo adicional para evitar que el público accediera a zonas de obra. Aplazar toda la apertura ahorraría ese gasto inmediato y prolongaría el alquiler del espacio provisional. El documento no ofrece una estimación comparable para ambas opciones: una cifra incluye personal y la otra solo alquiler. Presentarlas como si midieran el mismo coste favorecería artificialmente una alternativa.",
      "El consejo propone pedir un cuadro con los mismos conceptos y un margen de incertidumbre para cada escenario. También solicita una versión del informe destinada a las asociaciones, sin tecnicismos innecesarios y con las condiciones prácticas al principio. Esa adaptación no debería eliminar la distinción entre autorización, previsión y compromiso. El lector que solo necesita saber cuándo podrá celebrar su taller merece una respuesta clara, pero no una seguridad mayor que la que permite el informe técnico."
    ],
    "glossary": [
      {
        "es": "asegurar un hecho",
        "note": "afirmarlo con firmeza"
      },
      {
        "es": "admitir un error",
        "note": "reconocer una falta"
      },
      {
        "es": "desmentir un rumor",
        "note": "negar una información circulante"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Cuál es la decisión pendiente?",
            "options": [
              "Cerrar para siempre todas las salas.",
              "Aceptar que ya existe un fallo grave confirmado.",
              "Elegir un calendario con condiciones verificables y costes conocidos."
            ],
            "answer": 2,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué cambia al citar con admitió?",
            "options": [
              "Se elimina la autoría de la fuente.",
              "Se presenta la declaración como reconocimiento de algo problemático.",
              "Se convierte automáticamente en mentira."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          }
        ]
      },
      {
        "id": "r-evidencia",
        "type": "open",
        "prompt": "Apoya tu lectura con evidencia y distingue la postura de la fuente de la tuya.",
        "items": [
          {
            "prompt": "En «Checkpoint: informar después de la polémica», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "La directora admitió que no había explicitado la condición técnica del calendario. La asociación reconoció las ventajas de la reforma, pero recordó que el traslado dependía de disponer de un espacio equivalente. La empresa desmintió un diagnóstico que el informe no contiene. Recomiendo estudiar la apertura por fases siempre que se documenten la autorización de cada sala y el coste del personal adicional. Esta opción no sustituye la obligación de ofrecer un local temporal adecuado.",
            "checklist": [
              "Identifico las dos posiciones sin inventar consenso.",
              "Utilizo una evidencia concreta.",
              "Marco una inferencia como tal."
            ]
          },
          {
            "prompt": "Compara el anexo del checkpoint 10 con las primeras fuentes: identifica una limitación de los datos y una consecuencia práctica para la recomendación. Explica qué detalle conservarías al mediar para otra persona.",
            "model": "Una cifra o una experiencia orienta la decisión solo dentro de su alcance. La recomendación debe conservar qué se midió, qué falta y qué condición se propone verificar.",
            "checklist": [
              "Identifico un dato concreto del anexo.",
              "No generalizo fuera de la muestra o del caso.",
              "Adapto el mensaje sin perder una condición."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la forma lingüística limita o precisa el mensaje.",
      "items": [
        {
          "quote": "La ampliación del museo municipal se anunció como un acuerdo cerrado.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "Un informe útil no debe premiar a quien habló con más seguridad, sino mostrar qué compromisos pueden sostenerse con la información actual y cuáles necesitan todavía una confirmación.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Recupera la aplicación, la exposición, el local y la noticia: integra concesión, descripción precisa, condición y fuente en el informe del museo.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Mar del Plata y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Checkpoint: informar después de la polémica»,",
              "La",
              "directora",
              "negó",
              "que",
              "el",
              "museo",
              "fuera",
              "a",
              "cerrar."
            ],
            "why": "Negación de una afirmación en pasado."
          },
          {
            "words": [
              "En",
              "«Checkpoint: informar después de la polémica»,",
              "Sugirió",
              "que",
              "las",
              "asociaciones",
              "revisaran",
              "el",
              "borrador."
            ],
            "why": "Propuesta dirigida a otras personas."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de checkpoint: informar después de la polémica; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "La directora sugirió que revisamos el informe al día siguiente.",
            "answers": [
              "La directora sugirió que revisáramos el informe al día siguiente."
            ],
            "why": "Sugerencia pasada con imperfecto de subjuntivo."
          },
          {
            "sentence": "La portavoz negó que habían firmado ya.",
            "answers": [
              "La portavoz negó que hubieran firmado ya."
            ],
            "why": "Negación de una afirmación con subjuntivo compuesto."
          },
          {
            "sentence": "Nos advirtió de la inspección y sugirió que esperamos.",
            "answers": [
              "Nos advirtió de la inspección y sugirió que esperáramos."
            ],
            "why": "Sugerencia pasada con imperfecto de subjuntivo."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre sintetizar declaraciones y negociar una recomendación con una postura y una razón; adapta el destinatario.",
            "model": "La directora admitió que no había explicitado la condición técnica del calendario.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Checkpoint: informar después de la polémica» sin debilitarla, y responde con una condición verificable.",
            "model": "La directora admitió que no había explicitado la condición técnica del calendario. La asociación reconoció las ventajas de la reforma, pero recordó que el traslado dependía de disponer de un espacio equivalente. La empresa desmintió un diagnóstico que el informe no contiene. Recomiendo estudiar la apertura por fases siempre que se documenten la autorización de cada sala y el coste del personal adicional. Esta opción no sustituye la obligación de ofrecer un local temporal adecuado.",
            "checklist": [
              "La objeción conserva su sentido.",
              "Mi respuesta no promete lo que no controlo."
            ]
          }
        ]
      },
      {
        "id": "x-recuperacion",
        "type": "open",
        "prompt": "Recuperación espaciada: selecciona y produce los recursos señalados sin mirar sus explicaciones. En el checkpoint distribúyelos entre informe y ensayo oral.",
        "items": [
          {
            "prompt": "Recupera la semana 1 sin abrir su explicación y aplica sus recursos a «Checkpoint: informar después de la polémica»: Subjuntivo en oraciones sustantivas. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir el modo según el verbo principal: influencia, valoración, emoción, percepción o comunicación.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 6 sin abrir su explicación y aplica sus recursos a «Checkpoint: informar después de la polémica»: Oraciones concesivas; Tecnología y ética; Prosodia de la concesión; Conceder y objetar; Leer una columna de opinión. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar aunque + indicativo o subjuntivo según la información, a pesar de (que), por mucho que y si bien. Puedo hablar de inteligencia artificial, privacidad, vigilancia y responsabilidad. Puedo marcar con la voz la parte concedida y la parte que defiendo. Puedo conceder una parte del argumento contrario y mantener mi postura. Puedo identificar concesiones, objeciones y la tesis del autor.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 7 sin abrir su explicación y aplica sus recursos a «Checkpoint: informar después de la polémica»: Relativas con preposición, cuyo y lo cual; Especificativas y explicativas; Arte, museos y patrimonio; Pausas y jerarquía en oraciones largas; Describir con precisión; Reseña de una exposición. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar el que, la cual, cuyo y lo cual, con preposición cuando hace falta. Puedo distinguir los alumnos que viven lejos de los alumnos, que viven lejos. Puedo describir obras, estilos, autores y patrimonio. Puedo leer oraciones con varias subordinadas sin perder el hilo. Puedo describir una obra, un lugar o una persona con detalles encadenados. Puedo escribir una reseña con descripción y valoración.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 8 sin abrir su explicación y aplica sus recursos a «Checkpoint: informar después de la polémica»: Conectores condicionales; Oraciones consecutivas; Acuerdos, contratos y condiciones; Foco en la condición; Negociar condiciones; Negociación breve. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar siempre que, con tal de que, a no ser que, en caso de que y salvo que. Puedo expresar consecuencia con tan… que, tanto que, de modo que y así que. Puedo negociar cláusulas, plazos, garantías y penalizaciones. Puedo poner el foco en la condición: SOLO si firmamos hoy. Puedo proponer, aceptar con condiciones y rechazar una propuesta. Puedo negociar un acuerdo de alquiler o de trabajo con condiciones claras.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 9 sin abrir su explicación y aplica sus recursos a «Checkpoint: informar después de la polémica»: Pasiva e impersonalidad; Prensa y actualidad; Leer noticias en voz alta; Informar con distancia; Leer una noticia completa. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar ser + participio, se pasiva, tercera plural impersonal y uno/una. Puedo entender titulares, secciones y vocabulario periodístico. Puedo leer una noticia con el ritmo y las pausas de un presentador. Puedo presentar hechos sin implicarme y atribuir información a fuentes. Puedo distinguir titular, entradilla, hechos, fuentes y contexto.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Elabora un informe para el pleno. Resume el dossier y la rueda de prensa, compara tres opciones, atribuye compromisos con verbos precisos y recomienda una salida condicionada a dos verificaciones.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "El estilo indirecto adapta persona, tiempo y referencias al punto desde el que informas: ayer dijo «vendré mañana» se convierte en dijo que vendría hoy. Los cambios dependen de si la información sigue vigente; no son una sustitución automática. Aseguró que introduce una afirmación; negó que y sugirió que suelen seleccionar subjuntivo.",
      "En una síntesis, afirmar, admitir, advertir, desmentir e insinuar no son intercambiables: atribuyen actos distintos. Integra concesiones, relativas, condiciones y pasivas de las semanas anteriores. Una recomendación debe apoyarse en datos y conservar las reservas de cada fuente, incluso si complican una conclusión breve.",
      "Recupera la aplicación, la exposición, el local y la noticia: integra concesión, descripción precisa, condición y fuente en el informe del museo."
    ],
    "model": [
      "El museo dispone de tres opciones: mantener la fecha anunciada, aplazar toda la apertura o inaugurar por fases las salas verificadas. Recomiendo estudiar la tercera, pero todavía faltan datos para presentarla como una decisión definitiva. La directora admitió que no había explicitado la condición técnica del calendario, por lo que conviene evitar una nueva promesa sin respaldo suficiente.",
      "La apertura completa ofrece continuidad, aunque no puede justificarse mientras existan espacios pendientes de inspección. El aplazamiento reduce algunos gastos inmediatos, pero prolonga el alquiler provisional y las dificultades de las asociaciones. La apertura parcial permitiría recuperar actividades antes, siempre que se documenten la autorización de cada sala y las medidas que separan al público de las obras.",
      "También debe revisarse la comparación presupuestaria. Una cifra incluye personal y señalización, mientras que la otra solo contempla alquiler. Propongo pedir estimaciones con los mismos conceptos y un margen para imprevistos. La directora se comprometió a publicar opciones y costes el viernes; ese compromiso debe distinguirse de la previsión sobre cuándo podrá abrir cada espacio.",
      "La asociación reconoció las ventajas de la reforma, pero recordó que el traslado dependía de disponer de un local equivalente. Igual superficie no garantiza condiciones acústicas adecuadas. Recomiendo comprobar ese punto con sus responsables y preparar una explicación accesible para quienes organizan talleres. Por último, la empresa desmintió un fallo grave confirmado: el informe disponible exige una inspección, no contiene ese diagnóstico. La recomendación final debe conservar esta diferencia y señalar qué condiciones siguen pendientes antes de autorizar la apertura."
    ],
    "checklist": [
      "Respondo al propósito y al destinatario concreto.",
      "Organizo párrafos con relaciones claras, no conectores decorativos.",
      "Distingo datos, opiniones, hipótesis y compromisos.",
      "Integro una perspectiva distinta sin deformarla.",
      "Reviso concordancia, modo, tiempos y léxico.",
      "Explico una mejora entre borrador y versión final."
    ],
    "words": [
      220,
      280
    ]
  },
  "speaking": {
    "intro": "Prepara notas breves, no un texto para leer. Puedes grabarte localmente; la aplicación no califica automáticamente pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición con evidencia",
        "prompt": "Presenta el caso de «Checkpoint: informar después de la polémica» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "La directora admitió que no había explicitado la condición técnica del calendario. La asociación reconoció las ventajas de la reforma, pero recordó que el traslado dependía de disponer de un espacio equivalente. La empresa desmintió un diagnóstico que el informe no contiene. Recomiendo estudiar la apertura por fases siempre que se documenten la autorización de cada sala y el coste del personal adicional. Esta opción no sustituye la obligación de ofrecer un local temporal adecuado.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de sintetizar declaraciones y negociar una recomendación. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
        "prep": [
          "Prepara una objeción probable y una pregunta de aclaración.",
          "Incorpora una pregunta inesperada: ¿qué evidencia haría cambiar tu conclusión?",
          "Al terminar, reformula en un minuto el resultado para una persona nueva."
        ],
        "seconds": 240,
        "selfCheck": [
          "Respondo a la objeción real.",
          "Pido y cedo el turno.",
          "Adapto una explicación sin inventar consenso."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La mascota te acompaña al siguiente paso: convierte tu trabajo independiente en una conversación con consecuencias claras.",
    "cards": [
      {
        "move": "Defiende",
        "task": "Presenta tu entrega de «Checkpoint: informar después de la polémica» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Mar del Plata; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre sintetizar declaraciones y negociar una recomendación; identifica una condición que todavía necesita confirmación.",
        "phrases": [
          "Lo aceptaría siempre que…",
          "Queda pendiente comprobar…"
        ]
      }
    ],
    "bring": "Lleva borrador y versión revisada, cinco palabras clave para hablar y una duda de comprensión o prosodia."
  },
  "quiz": {
    "items": [
      {
        "q": "En la evaluación final de «Checkpoint: informar después de la polémica», ¿qué resume mejor el propósito?",
        "options": [
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas.",
          "Rectificar garantías y negociar una apertura por fases"
        ],
        "answer": 2,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Debería haberla explicado. No pretendía presentar una garantía absoluta. La empresa nos había comunicado que esperaba terminar en agosto y yo transmití ese calendario. Ahora sugiero que preparemos una apertura por fases, siempre que cada sala cuente con la autorización técnica.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Directora en «Checkpoint: informar después de la polémica», ¿qué intervención reconoces?",
        "options": [
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Debería haberla explicado"
        ],
        "answer": 2,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "El portavoz negó que la asociación ___ recibido una garantía.",
        "answers": [
          [
            "hubiera"
          ]
        ],
        "why": "Negación de una afirmación anterior."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «El martes dijo: «Publicaré el informe el jueves».» Cuenta la promesa desde el viernes.",
        "model": "El martes dijo que publicaría el informe el jueves.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Aconsejó que las asociaciones mantienen sus reservas.",
        "answers": [
          "Aconsejó que las asociaciones mantuvieran sus reservas."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Checkpoint: informar después de la polémica».",
        "model": "La directora admitió que no había explicitado la condición técnica del calendario. La asociación reconoció las ventajas de la reforma, pero recordó que el traslado dependía de disponer de un espacio equivalente. La empresa desmintió un diagnóstico que el informe no contiene. Recomiendo estudiar la apertura por fases siempre que se documenten la autorización de cada sala y el coste del personal adicional. Esta opción no sustituye la obligación de ofrecer un local temporal adecuado.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre sintetizar declaraciones y negociar una recomendación; concede una razón y conserva tu argumento.",
        "model": "La directora admitió que no había explicitado la condición técnica del calendario. La asociación reconoció las ventajas de la reforma, pero recordó que el traslado dependía de disponer de un espacio equivalente. La empresa desmintió un diagnóstico que el informe no contiene. Recomiendo estudiar la apertura por fases siempre que se documenten la autorización de cada sala y el coste del personal adicional. Esta opción no sustituye la obligación de ofrecer un local temporal adecuado.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 10 a un mensaje cercano y a un informe formal.",
        "model": "Cambiaría el tratamiento y algunas fórmulas, pero conservaría las fuentes, los límites y las condiciones acordadas.",
        "checklist": [
          "Cambio recursos de registro.",
          "No cambio el contenido del compromiso."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo sintetizar declaraciones y negociar una recomendación.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Recupera la aplicación, la exposición, el local y la noticia: integra concesión, descripción precisa, condición y fuente en el informe del museo.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
