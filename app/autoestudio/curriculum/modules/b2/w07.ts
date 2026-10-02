import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w07: Module = {
  "id": "b2-07",
  "level": "b2",
  "week": 7,
  "kind": "core",
  "title": "Una exposición que también se discute",
  "subtitle": "Describir y valorar patrimonio con precisión.",
  "stop": {
    "place": "San Juan",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.relativas-avanzadas",
    "b2.gram.explicativas-especificativas",
    "b2.voc.arte-cultura",
    "b2.pron.jerarquia-pausas",
    "b2.fun.describir-precision",
    "b2.wri.resena-exposicion"
  ],
  "reviewObjectives": [
    "b2.gram.condicionales-irreales",
    "b2.gram.condicional-compuesto",
    "b2.voc.decisiones-consecuencias",
    "b2.pron.reproche",
    "b2.fun.lamentar-reprochar",
    "b2.spk.historia-alternativa",
    "b2.gram.concesivas",
    "b2.voc.tecnologia-etica",
    "b2.pron.concesion",
    "b2.fun.conceder-objetar",
    "b2.read.columna"
  ],
  "prerequisites": [
    "b2-06"
  ],
  "goal": {
    "canDo": "Puedo describir y valorar patrimonio con precisión con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: explicar cómo una etiqueta modifica el relato histórico.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: describir y valorar patrimonio con precisión. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Describir y valorar patrimonio con precisión",
        "body": [
          "Las relativas especificativas seleccionan un subconjunto y no llevan comas; las explicativas añaden información sobre un referente ya identificado. El contraste puede cambiar a quién afecta una afirmación. Con preposición usa con el que, a la cual o de quien según la función; no elimines una preposición que exige el verbo."
        ],
        "examples": [
          {
            "es": "Es una colección cuyas piezas fueron donadas.",
            "note": "Concuerda con piezas."
          },
          {
            "es": "El barrio del que procede la obra cambió mucho.",
            "note": "Proceder de mantiene su preposición."
          },
          {
            "es": "Faltan fechas, lo cual dificulta seguir el recorrido.",
            "note": "Recoge la afirmación anterior."
          }
        ],
        "mistakes": [
          {
            "wrong": "La artista cuyo obras vemos nació aquí.",
            "right": "La artista cuyas obras vemos nació aquí.",
            "why": "Cuyo concuerda con lo poseído: obras."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Cuyo expresa posesión y concuerda con lo poseído: una artista cuyas obras viajaron. Lo cual puede recoger una idea anterior completa. En una reseña combina descripción verificable, interpretación y valoración; el lector debe poder distinguir qué muestra la exposición de lo que tú deduces o recomiendas."
        ],
        "examples": [
          {
            "es": "Es una colección cuyas piezas fueron donadas.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Faltan fechas, lo cual dificulta seguir el recorrido.",
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
        "prompt": "Completa estas decisiones lingüísticas de una exposición que también se discute; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Es una colección ___ piezas fueron donadas.",
            "answers": [
              [
                "cuyas"
              ]
            ],
            "why": "Concuerda con piezas."
          },
          {
            "q": "El barrio del ___ procede la obra cambió mucho.",
            "answers": [
              [
                "que"
              ]
            ],
            "why": "Proceder de mantiene su preposición."
          },
          {
            "q": "Faltan fechas, lo ___ dificulta seguir el recorrido.",
            "answers": [
              [
                "cual"
              ]
            ],
            "why": "Recoge la afirmación anterior."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «La artista donó una colección. Sus piezas se exponen aquí.» Une usando cuyas.",
            "model": "La artista cuyas piezas se exponen aquí donó una colección.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Este documento pertenece a la comerciante. Hablamos de ella.» Identifica a la comerciante con una relativa con preposición.",
            "model": "Este documento pertenece a la comerciante de la que hablamos.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Faltan fechas. Eso dificulta seguir el recorrido.» Une con lo cual.",
            "model": "Faltan fechas, lo cual dificulta seguir el recorrido.",
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
        "title": "Describir y valorar patrimonio con precisión",
        "items": [
          {
            "es": "conservar el patrimonio",
            "note": "proteger bienes culturales"
          },
          {
            "es": "ceder una pieza",
            "note": "prestar un objeto"
          },
          {
            "es": "atribuir una obra",
            "note": "identificar su autoría"
          },
          {
            "es": "contextualizar un objeto",
            "note": "explicar su entorno"
          },
          {
            "es": "recorrer una muestra",
            "note": "visitar una exposición"
          },
          {
            "es": "cuestionar un relato",
            "note": "discutir una interpretación"
          },
          {
            "es": "restaurar un edificio",
            "note": "reparar conservando su valor"
          },
          {
            "es": "dar visibilidad",
            "note": "hacer presente algo poco reconocido"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para describir y valorar patrimonio con precisión con su significado.",
        "pairs": [
          {
            "left": "conservar el patrimonio",
            "right": "proteger bienes culturales"
          },
          {
            "left": "ceder una pieza",
            "right": "prestar un objeto"
          },
          {
            "left": "atribuir una obra",
            "right": "identificar su autoría"
          },
          {
            "left": "contextualizar un objeto",
            "right": "explicar su entorno"
          },
          {
            "left": "recorrer una muestra",
            "right": "visitar una exposición"
          },
          {
            "left": "cuestionar un relato",
            "right": "discutir una interpretación"
          },
          {
            "left": "restaurar un edificio",
            "right": "reparar conservando su valor"
          },
          {
            "left": "dar visibilidad",
            "right": "hacer presente algo poco reconocido"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Escucha y produce relativas con y sin pausa: el grupo entonativo debe reflejar si seleccionas personas o añades información.",
    "explanation": [
      "Escucha y produce relativas con y sin pausa: el grupo entonativo debe reflejar si seleccionas personas o añades información.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Es una colección cuyas piezas fueron donadas."
      },
      {
        "es": "El barrio del que procede la obra cambió mucho."
      },
      {
        "es": "Faltan fechas, lo cual dificulta seguir el recorrido."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de una exposición que también se discute, ¿qué fragmento se oye?",
          "options": [
            "cuyos",
            "cuya",
            "cuyas"
          ],
          "answer": 2,
          "why": "Concuerda con piezas.",
          "audio": "Es una colección cuyas piezas fueron donadas.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de una exposición que también se discute, ¿qué fragmento se oye?",
          "options": [
            "quien",
            "que",
            "cuyo"
          ],
          "answer": 1,
          "why": "Proceder de mantiene su preposición.",
          "audio": "El barrio del que procede la obra cambió mucho.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Es una colección cuyas piezas fueron donadas.",
        "tip": "Escucha y produce relativas con y sin pausa: el grupo entonativo debe reflejar si seleccionas personas o añades información.",
        "voice": "es-ES-f"
      },
      {
        "text": "El barrio del que procede la obra cambió mucho.",
        "tip": "Escucha y produce relativas con y sin pausa: el grupo entonativo debe reflejar si seleccionas personas o añades información.",
        "voice": "es-ES-f"
      },
      {
        "text": "Faltan fechas, lo cual dificulta seguir el recorrido.",
        "tip": "Escucha y produce relativas con y sin pausa: el grupo entonativo debe reflejar si seleccionas personas o añades información.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Una exposición que también se discute",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Guía",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Visitante",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Conservadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Antes de entrar, les propongo mirar estas dos etiquetas. La primera dice que las familias que llegaron en los años cuarenta trabajaban en el ferrocarril. La segunda añade una pausa: las familias, que llegaron en los años cuarenta, trabajaban allí. No afirman exactamente lo mismo."
      },
      {
        "speaker": "s2",
        "text": "En la primera entiendo que se habla de un grupo concreto de familias. En la segunda parece que todas llegaron entonces. ¿El museo cambió la etiqueta porque había información incorrecta o porque la redacción permitía una interpretación demasiado amplia?"
      },
      {
        "speaker": "s3",
        "text": "Por lo segundo. Conocemos familias cuya llegada fue anterior. La frase no pretendía borrarlas, pero podía hacerlo. A veces una coma parece un detalle menor y termina modificando la historia que contamos. Por eso contrastamos los textos con documentación y testimonios."
      },
      {
        "speaker": "s2",
        "text": "También me llamó la atención esta libreta. No parece una pieza espectacular, pero cuenta mucho. ¿La comerciante a la que perteneció dejó alguna explicación sobre las personas que le debían dinero? Sería interesante saber si se trataba de clientes habituales."
      },
      {
        "speaker": "s3",
        "text": "No dejó una explicación escrita. Tenemos el testimonio de su nieta, que recuerda compras a crédito durante las huelgas. Lo presentamos como recuerdo familiar, no como dato comprobado para todos los casos. Esa diferencia debe quedar clara en la cartela."
      },
      {
        "speaker": "s1",
        "text": "Al salir, pueden escribir una etiqueta alternativa para un objeto. Les pedimos que no inventen datos para completar los huecos. Una buena descripción puede ser precisa y, al mismo tiempo, reconocer lo que todavía no sabemos sobre la pieza y sus usos."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en San Juan?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Una exposición que también se discute?",
              "options": [
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas.",
                "Explicar cómo una etiqueta modifica el relato histórico"
              ],
              "answer": 2,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Una exposición que también se discute»?",
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
          "prompt": "Localiza una intervención concreta en «Una exposición que también se discute».",
          "items": [
            {
              "q": "¿Por qué se revisó una etiqueta?",
              "options": [
                "No existían testimonios familiares.",
                "Podía incluir a todas las familias indebidamente.",
                "La libreta era falsa."
              ],
              "answer": 1,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Una exposición que también se discute»?",
              "options": [
                "Antes de entrar, les propongo mirar estas dos etiquetas.",
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
              "prompt": "En «Una exposición que también se discute», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Al salir, pueden escribir una etiqueta alternativa para un objeto. Les pedimos que no inventen datos para completar los huecos. Una buena descripción puede ser precisa y, al mismo tiempo, reconocer lo que todavía no sabemos sobre la pieza y sus usos.",
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
    "title": "Una exposición que también se discute: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "La exposición «Objetos que vuelven» reúne herramientas, fotografías y prendas cedidas por familias del antiguo barrio ferroviario. El museo, cuyo edificio fue una estación de carga, parece un lugar apropiado para contar esa historia. Sin embargo, la coincidencia entre continente y contenido no garantiza por sí sola un relato convincente. Las primeras salas presentan los objetos con cuidado, pero apenas explican las condiciones en las que trabajaban las personas a quienes pertenecieron. El visitante encuentra nombres y fechas; le cuesta encontrar conflictos.",
      "La segunda parte corrige en buena medida esa limitación. Las fotografías que muestran reuniones sindicales aparecen junto a testimonios de familias que vivían del comercio alrededor de la estación. Ya no se describe una comunidad uniforme, sino una red de intereses que a veces coincidían y a veces chocaban. Una vitrina contiene la libreta de una comerciante cuyas deudas tardaban meses en cobrarse. A su lado, un mapa permite seguir los desplazamientos de los trabajadores, lo cual convierte un documento aparentemente privado en una ventana a la economía del barrio.",
      "El montaje también invita a discutir quién tiene autoridad para contar el pasado. Algunos objetos, que fueron prestados con la condición de no cambiar sus etiquetas familiares, conservan descripciones poco claras. El museo explica esa decisión en un panel y ofrece otra lectura mediante códigos de consulta opcionales. La solución no elimina la tensión entre precisión histórica y respeto a quienes prestan las piezas, pero la hace visible. Es uno de los momentos más interesantes del recorrido, porque muestra que conservar también implica negociar.",
      "Recomendaría visitar la muestra con tiempo y comparar las etiquetas de las dos primeras salas. Quien busque una celebración nostálgica quizá se sienta incómodo; quien quiera entender cómo se construye una memoria compartida encontrará preguntas fértiles. La exposición funciona mejor cuando reconoce las lagunas de su propio relato que cuando intenta hablar en nombre de todo un barrio."
    ],
    "glossary": [
      {
        "es": "conservar el patrimonio",
        "note": "proteger bienes culturales"
      },
      {
        "es": "ceder una pieza",
        "note": "prestar un objeto"
      },
      {
        "es": "atribuir una obra",
        "note": "identificar su autoría"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué valora especialmente la reseña?",
            "options": [
              "Que todas las etiquetas sean definitivas.",
              "Que se evite cualquier conflicto histórico.",
              "Que el montaje haga visibles sus límites y negociaciones."
            ],
            "answer": 2,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué significa cuyas deudas?",
            "options": [
              "Una comparación entre dos edificios.",
              "Las deudas relacionadas con la comerciante.",
              "Las deudas del museo necesariamente."
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
            "prompt": "En «Una exposición que también se discute», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "La muestra ocupa una estación cuyo pasado forma parte del recorrido. Destaca una libreta comercial a partir de la cual se explican relaciones económicas del barrio. Algunas etiquetas omiten el contexto de los conflictos, lo cual reduce la fuerza de las primeras salas. Aun así, el montaje mejora cuando distingue documentos y recuerdos familiares. Recomendaría ampliar esa distinción y conservar las preguntas abiertas: reconocer una laguna puede resultar más informativo que llenarla con una certeza aparente.",
            "checklist": [
              "Identifico las dos posiciones sin inventar consenso.",
              "Utilizo una evidencia concreta.",
              "Marco una inferencia como tal."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la forma lingüística limita o precisa el mensaje.",
      "items": [
        {
          "quote": "La exposición «Objetos que vuelven» reúne herramientas, fotografías y prendas cedidas por familias del antiguo barrio ferroviario.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "La exposición funciona mejor cuando reconoce las lagunas de su propio relato que cuando intenta hablar en nombre de todo un barrio.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Describe a una persona del conflicto generacional con dos relativas; después concede un mérito de la exposición sin perder tu crítica.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de San Juan y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Una exposición que también se discute»,",
              "Es",
              "una",
              "colección",
              "cuyas",
              "piezas",
              "fueron",
              "donadas."
            ],
            "why": "Concuerda con piezas."
          },
          {
            "words": [
              "En",
              "«Una exposición que también se discute»,",
              "Faltan",
              "fechas,",
              "lo",
              "cual",
              "dificulta",
              "seguir",
              "el",
              "recorrido."
            ],
            "why": "Recoge la afirmación anterior."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de una exposición que también se discute; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "La artista cuyo obras vemos nació aquí.",
            "answers": [
              "La artista cuyas obras vemos nació aquí."
            ],
            "why": "Cuyo concuerda con lo poseído: obras."
          },
          {
            "sentence": "La persona de la hablamos llegó ayer.",
            "answers": [
              "La persona de la que hablamos llegó ayer."
            ],
            "why": "La relativa necesita que."
          },
          {
            "sentence": "Faltan fechas, la cual dificulta el recorrido.",
            "answers": [
              "Faltan fechas, lo cual dificulta el recorrido."
            ],
            "why": "Lo cual recoge una proposición completa."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre describir y valorar patrimonio con precisión con una postura y una razón; adapta el destinatario.",
            "model": "La muestra ocupa una estación cuyo pasado forma parte del recorrido.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Una exposición que también se discute» sin debilitarla, y responde con una condición verificable.",
            "model": "La muestra ocupa una estación cuyo pasado forma parte del recorrido. Destaca una libreta comercial a partir de la cual se explican relaciones económicas del barrio. Algunas etiquetas omiten el contexto de los conflictos, lo cual reduce la fuerza de las primeras salas. Aun así, el montaje mejora cuando distingue documentos y recuerdos familiares. Recomendaría ampliar esa distinción y conservar las preguntas abiertas: reconocer una laguna puede resultar más informativo que llenarla con una certeza aparente.",
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
            "prompt": "Recupera la semana 4 sin abrir su explicación y aplica sus recursos a «Una exposición que también se discute»: Condicionales irreales y mixtas; Condicional compuesto; Decisiones y consecuencias; Entonación del reproche; Lamentar y reprochar; Historia alternativa. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo expresar condiciones irreales en presente, en pasado y mixtas. Puedo hablar de lo que habría pasado y reprochar con habrías podido. Puedo hablar de arrepentimiento, oportunidades perdidas y alternativas. Puedo distinguir un reproche de una hipótesis neutra por la entonación. Puedo expresar arrepentimiento, reprochar con tacto y responder a un reproche. Puedo contar cómo habría sido mi vida si una decisión hubiera sido distinta.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 6 sin abrir su explicación y aplica sus recursos a «Una exposición que también se discute»: Oraciones concesivas; Tecnología y ética; Prosodia de la concesión; Conceder y objetar; Leer una columna de opinión. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar aunque + indicativo o subjuntivo según la información, a pesar de (que), por mucho que y si bien. Puedo hablar de inteligencia artificial, privacidad, vigilancia y responsabilidad. Puedo marcar con la voz la parte concedida y la parte que defiendo. Puedo conceder una parte del argumento contrario y mantener mi postura. Puedo identificar concesiones, objeciones y la tesis del autor.",
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
    "task": "Escribe una reseña para lectores que no conocen la exposición. Describe dos recursos, interpreta su efecto y recomienda mejoras sin inventar datos; incluye relativas con preposición, cuyo y lo cual.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Las relativas especificativas seleccionan un subconjunto y no llevan comas; las explicativas añaden información sobre un referente ya identificado. El contraste puede cambiar a quién afecta una afirmación. Con preposición usa con el que, a la cual o de quien según la función; no elimines una preposición que exige el verbo.",
      "Cuyo expresa posesión y concuerda con lo poseído: una artista cuyas obras viajaron. Lo cual puede recoger una idea anterior completa. En una reseña combina descripción verificable, interpretación y valoración; el lector debe poder distinguir qué muestra la exposición de lo que tú deduces o recomiendas.",
      "Describe a una persona del conflicto generacional con dos relativas; después concede un mérito de la exposición sin perder tu crítica."
    ],
    "model": [
      "La exposición «Objetos que vuelven» ocupa una antigua estación cuya historia forma parte del recorrido. Herramientas, fotografías y prendas permiten acercarse al barrio ferroviario desde experiencias concretas. La presentación resulta cuidada, aunque las primeras salas ofrecen más nombres y fechas que explicaciones sobre las condiciones de trabajo. Esa falta de contexto limita inicialmente la interpretación de las piezas.",
      "El recorrido gana interés cuando reúne documentos y testimonios que no cuentan exactamente la misma historia. Destaca la libreta de una comerciante a partir de la cual se explican relaciones económicas del barrio. El mapa cercano permite vincular compras, desplazamientos y actividades laborales, lo cual ayuda a comprender por qué un objeto privado puede tener valor colectivo. No se trata solo de mirar una antigüedad, sino de reconstruir sus usos.",
      "La decisión de conservar algunas etiquetas familiares plantea una dificultad real. Respeta las condiciones de quienes prestaron los objetos, pero puede mantener expresiones poco precisas. Me parece acertado que el museo explique esa tensión en lugar de disimularla. Recomendaría añadir una distinción más visible entre información documentada y recuerdos personales, especialmente para visitantes que recorren la muestra sin guía.",
      "La exposición merece una visita pausada. Quien espere una celebración uniforme del pasado encontrará desacuerdos y lagunas; precisamente ahí reside parte de su valor. El museo no puede representar todas las experiencias con una sola voz. Sí puede mostrar de dónde procede cada afirmación y permitir que el público compare interpretaciones. Ampliar ese criterio a las primeras salas haría el conjunto más coherente y convincente."
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
        "prompt": "Presenta el caso de «Una exposición que también se discute» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "La muestra ocupa una estación cuyo pasado forma parte del recorrido. Destaca una libreta comercial a partir de la cual se explican relaciones económicas del barrio. Algunas etiquetas omiten el contexto de los conflictos, lo cual reduce la fuerza de las primeras salas. Aun así, el montaje mejora cuando distingue documentos y recuerdos familiares. Recomendaría ampliar esa distinción y conservar las preguntas abiertas: reconocer una laguna puede resultar más informativo que llenarla con una certeza aparente.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de describir y valorar patrimonio con precisión. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Una exposición que también se discute» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de San Juan; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre describir y valorar patrimonio con precisión; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Una exposición que también se discute», ¿qué resume mejor el propósito?",
        "options": [
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas.",
          "Explicar cómo una etiqueta modifica el relato histórico"
        ],
        "answer": 2,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "En la primera entiendo que se habla de un grupo concreto de familias. En la segunda parece que todas llegaron entonces. ¿El museo cambió la etiqueta porque había información incorrecta o porque la redacción permitía una interpretación demasiado amplia?",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Visitante en «Una exposición que también se discute», ¿qué intervención reconoces?",
        "options": [
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "En la primera entiendo que se habla de un grupo concreto de familias"
        ],
        "answer": 2,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "El archivo, ___ documentos se digitalizaron, sigue abierto.",
        "answers": [
          [
            "cuyos"
          ]
        ],
        "why": "Posesión y concordancia."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Se retiraron dos paneles. Eso cambió el recorrido.» Une con lo cual.",
        "model": "Se retiraron dos paneles, lo cual cambió el recorrido.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "La obra de la hablamos pertenece al barrio.",
        "answers": [
          "La obra de la que hablamos pertenece al barrio."
        ],
        "why": "La relativa de la que conserva la preposición y requiere que."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Una exposición que también se discute».",
        "model": "La muestra ocupa una estación cuyo pasado forma parte del recorrido. Destaca una libreta comercial a partir de la cual se explican relaciones económicas del barrio. Algunas etiquetas omiten el contexto de los conflictos, lo cual reduce la fuerza de las primeras salas. Aun así, el montaje mejora cuando distingue documentos y recuerdos familiares. Recomendaría ampliar esa distinción y conservar las preguntas abiertas: reconocer una laguna puede resultar más informativo que llenarla con una certeza aparente.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre describir y valorar patrimonio con precisión; concede una razón y conserva tu argumento.",
        "model": "La muestra ocupa una estación cuyo pasado forma parte del recorrido. Destaca una libreta comercial a partir de la cual se explican relaciones económicas del barrio. Algunas etiquetas omiten el contexto de los conflictos, lo cual reduce la fuerza de las primeras salas. Aun así, el montaje mejora cuando distingue documentos y recuerdos familiares. Recomendaría ampliar esa distinción y conservar las preguntas abiertas: reconocer una laguna puede resultar más informativo que llenarla con una certeza aparente.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 7 a un mensaje cercano y a un informe formal.",
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
      "Puedo describir y valorar patrimonio con precisión.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Describe a una persona del conflicto generacional con dos relativas; después concede un mérito de la exposición sin perder tu crítica.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
