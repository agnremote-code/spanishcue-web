import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w06: Module = {
  "id": "b2-06",
  "level": "b2",
  "week": 6,
  "kind": "core",
  "title": "Aunque funcione, hay que preguntarse para quién",
  "subtitle": "Conceder ventajas y objetar una política tecnológica.",
  "stop": {
    "place": "Mendoza",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.concesivas",
    "b2.voc.tecnologia-etica",
    "b2.pron.concesion",
    "b2.fun.conceder-objetar",
    "b2.read.columna"
  ],
  "reviewObjectives": [
    "b2.gram.subjuntivo-compuestos",
    "b2.voc.logros-fracasos",
    "b2.pron.compuestos-largos",
    "b2.fun.valorar-hechos",
    "b2.wri.carta-felicitacion",
    "b2.fun.mediacion-fuentes",
    "b2.rev.checkpoint-1",
    "b2.lis.debate-radio"
  ],
  "prerequisites": [
    "b2-05"
  ],
  "goal": {
    "canDo": "Puedo conceder ventajas y objetar una política tecnológica con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: evaluar accesibilidad además de rapidez digital.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: conceder ventajas y objetar una política tecnológica. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Conceder ventajas y objetar una política tecnológica",
        "body": [
          "Con aunque e indicativo presentas una dificultad como información afirmada: aunque cuesta mucho, funciona. Con subjuntivo puedes presentarla como hipotética o conceder un dato que ya se conoce y no cambia la conclusión: aunque funcione, no basta. El subjuntivo no significa siempre que el hecho sea falso."
        ],
        "examples": [
          {
            "es": "Aunque mañana el sistema funcione, mantendremos la atención presencial.",
            "note": "Concesión hipotética futura."
          },
          {
            "es": "Si bien la aplicación es útil, no llega a todo el mundo.",
            "note": "Concesión afirmada."
          },
          {
            "es": "Por mucho que insistas, no me convencerás sin datos.",
            "note": "Concesión intensificada; tú."
          }
        ],
        "mistakes": [
          {
            "wrong": "A pesar de que ser útil, la aplicación excluye usuarios.",
            "right": "A pesar de ser útil, la aplicación excluye usuarios.",
            "why": "Ante infinitivo no se introduce que."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Si bien introduce normalmente una concesión afirmada; a pesar de admite sustantivo o infinitivo, y a pesar de que admite una oración. Por mucho que intensifica una concesión. Construye una objeción que responda al argumento real: reconocer una ventaja antes de cuestionar sus límites mejora la precisión, no debilita tu tesis."
        ],
        "examples": [
          {
            "es": "Aunque mañana el sistema funcione, mantendremos la atención presencial.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Por mucho que insistas, no me convencerás sin datos.",
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
        "prompt": "Completa estas decisiones lingüísticas de aunque funcione, hay que preguntarse para quién; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Aunque mañana el sistema ___, mantendremos la atención presencial.",
            "answers": [
              [
                "funcione"
              ]
            ],
            "why": "Concesión hipotética futura."
          },
          {
            "q": "Si bien la aplicación ___ útil, no llega a todo el mundo.",
            "answers": [
              [
                "es"
              ]
            ],
            "why": "Concesión afirmada."
          },
          {
            "q": "Por mucho que ___, no me convencerás sin datos.",
            "answers": [
              [
                "insistas"
              ]
            ],
            "why": "Concesión intensificada; tú."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «La aplicación es útil. Sin embargo, no basta.» Une con si bien.",
            "model": "Si bien la aplicación es útil, no basta.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «No sé si mañana funcionará; mantendré el teléfono de todos modos.» Presenta una concesión hipotética con aunque.",
            "model": "Aunque mañana funcione, mantendré el teléfono.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Ofrecen muchos talleres, pero seguirá haciendo falta otra vía.» Usa por mucho que.",
            "model": "Por mucho que ofrezcan talleres, seguirá haciendo falta otra vía.",
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
        "title": "Conceder ventajas y objetar una política tecnológica",
        "items": [
          {
            "es": "proteger la privacidad",
            "note": "resguardar datos personales"
          },
          {
            "es": "reducir una brecha",
            "note": "disminuir una desigualdad"
          },
          {
            "es": "automatizar un trámite",
            "note": "hacer que un sistema lo procese"
          },
          {
            "es": "prestar consentimiento",
            "note": "aceptar de forma informada"
          },
          {
            "es": "tener sesgos",
            "note": "favorecer sistemáticamente una perspectiva"
          },
          {
            "es": "exigir transparencia",
            "note": "pedir explicaciones verificables"
          },
          {
            "es": "acreditar identidad",
            "note": "demostrar quién se es"
          },
          {
            "es": "mantener una alternativa",
            "note": "conservar otra vía de acceso"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para conceder ventajas y objetar una política tecnológica con su significado.",
        "pairs": [
          {
            "left": "proteger la privacidad",
            "right": "resguardar datos personales"
          },
          {
            "left": "reducir una brecha",
            "right": "disminuir una desigualdad"
          },
          {
            "left": "automatizar un trámite",
            "right": "hacer que un sistema lo procese"
          },
          {
            "left": "prestar consentimiento",
            "right": "aceptar de forma informada"
          },
          {
            "left": "tener sesgos",
            "right": "favorecer sistemáticamente una perspectiva"
          },
          {
            "left": "exigir transparencia",
            "right": "pedir explicaciones verificables"
          },
          {
            "left": "acreditar identidad",
            "right": "demostrar quién se es"
          },
          {
            "left": "mantener una alternativa",
            "right": "conservar otra vía de acceso"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Marca una pausa al terminar la concesión y lleva el foco a la objeción principal; evita acelerar precisamente el matiz importante.",
    "explanation": [
      "Marca una pausa al terminar la concesión y lleva el foco a la objeción principal; evita acelerar precisamente el matiz importante.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Aunque mañana el sistema funcione, mantendremos la atención presencial."
      },
      {
        "es": "Si bien la aplicación es útil, no llega a todo el mundo."
      },
      {
        "es": "Por mucho que insistas, no me convencerás sin datos."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de aunque funcione, hay que preguntarse para quién, ¿qué fragmento se oye?",
          "options": [
            "funcione",
            "funciona",
            "funcionó"
          ],
          "answer": 0,
          "why": "Concesión hipotética futura.",
          "audio": "Aunque mañana el sistema funcione, mantendremos la atención presencial.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de aunque funcione, hay que preguntarse para quién, ¿qué fragmento se oye?",
          "options": [
            "sea",
            "será",
            "es"
          ],
          "answer": 2,
          "why": "Concesión afirmada.",
          "audio": "Si bien la aplicación es útil, no llega a todo el mundo.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Aunque mañana el sistema funcione, mantendremos la atención presencial.",
        "tip": "Marca una pausa al terminar la concesión y lleva el foco a la objeción principal; evita acelerar precisamente el matiz importante.",
        "voice": "es-ES-f"
      },
      {
        "text": "Si bien la aplicación es útil, no llega a todo el mundo.",
        "tip": "Marca una pausa al terminar la concesión y lleva el foco a la objeción principal; evita acelerar precisamente el matiz importante.",
        "voice": "es-ES-f"
      },
      {
        "text": "Por mucho que insistas, no me convencerás sin datos.",
        "tip": "Marca una pausa al terminar la concesión y lleva el foco a la objeción principal; evita acelerar precisamente el matiz importante.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Aunque funcione, hay que preguntarse para quién",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Locutora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Laura",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Sergio",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "El ayuntamiento sostiene que la nueva aplicación reduce las esperas. Hoy nos acompañan una técnica municipal y un representante vecinal. Laura, ¿qué dato permite afirmar que la atención ha mejorado para toda la población y no solo para quienes usan la aplicación?"
      },
      {
        "speaker": "s2",
        "text": "Las reservas se completan en menos tiempo, aunque reconozco que todavía no medimos bien los intentos fallidos. Si bien el sistema es más rápido, necesitamos saber quién queda fuera. Por eso hemos abierto un punto de ayuda presencial dos mañanas por semana."
      },
      {
        "speaker": "s3",
        "text": "Agradezco que lo reconozcan. Mi objeción no es que exista la aplicación, sino que el punto presencial también exija reservar por internet. Aunque una persona pueda pedir ayuda a un vecino, no debería tener que explicar un trámite privado para conseguir una cita."
      },
      {
        "speaker": "s2",
        "text": "Ese requisito se introdujo para evitar colas y ahora vemos que produce una contradicción. Podríamos reservar algunas horas sin cita. No prometo que desaparezcan las esperas, pero permitiría comparar los dos sistemas y ajustar los recursos según la demanda real."
      },
      {
        "speaker": "s1",
        "text": "Sergio, ¿aceptaría esa solución como prueba? Y, en ese caso, ¿qué información pediría para decidir después si resulta suficiente? Conviene concretar qué significaría mejorar, porque cada parte parece utilizar un criterio distinto."
      },
      {
        "speaker": "s3",
        "text": "La aceptaría durante dos meses, siempre que se publiquen también los casos sin resolver. Por mucho que aumenten las reservas, si las personas con más dificultades siguen sin atención, no podremos hablar de éxito general. Necesitamos medir resultados y no solo movimientos dentro de una pantalla."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Mendoza?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Aunque funcione, hay que preguntarse para quién?",
              "options": [
                "Evaluar accesibilidad además de rapidez digital",
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas."
              ],
              "answer": 0,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Aunque funcione, hay que preguntarse para quién»?",
              "options": [
                "Todas repiten exactamente la misma opinión desde el inicio.",
                "Ninguna intervención tiene relación con la anterior.",
                "Las personas aclaran interpretaciones y conservan algunos límites."
              ],
              "answer": 2,
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
          "prompt": "Localiza una intervención concreta en «Aunque funcione, hay que preguntarse para quién».",
          "items": [
            {
              "q": "¿Qué contradicción identifica Sergio?",
              "options": [
                "El teléfono permite reservar directamente.",
                "Las estadísticas incluyen todos los abandonos.",
                "La ayuda presencial requiere una reserva digital."
              ],
              "answer": 2,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Aunque funcione, hay que preguntarse para quién»?",
              "options": [
                "No hay información que podamos discutir en esta reunión.",
                "El ayuntamiento sostiene que la nueva aplicación reduce las esperas.",
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte."
              ],
              "answer": 1,
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
              "prompt": "En «Aunque funcione, hay que preguntarse para quién», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "La aceptaría durante dos meses, siempre que se publiquen también los casos sin resolver. Por mucho que aumenten las reservas, si las personas con más dificultades siguen sin atención, no podremos hablar de éxito general. Necesitamos medir resultados y no solo movimientos dentro de una pantalla.",
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
    "title": "Aunque funcione, hay que preguntarse para quién: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "El municipio ha anunciado una aplicación que permite reservar turnos sin hacer cola. Aunque el proyecto todavía se encuentra en fase de prueba, sus promotores ya lo presentan como el fin de la burocracia. La herramienta ofrece una mejora evidente: quienes tienen conexión y saben utilizarla pueden elegir horario en pocos minutos. Sería absurdo negar esa ventaja. El problema comienza cuando una solución cómoda para una parte de la población se transforma en la única puerta de entrada para todas las personas.",
      "La oficina asegura que mantendrá un teléfono de asistencia. Sin embargo, el teléfono solo sirve para explicar cómo completar la reserva digital; no permite obtener un turno directamente. A pesar de que se habla de acompañamiento, la decisión obliga a disponer de un dispositivo propio o a pedir ayuda. Algunas personas aceptan que un familiar gestione el trámite, pero esa dependencia puede revelar información que preferirían reservarse. La privacidad no consiste únicamente en que una base de datos esté protegida: también incluye poder realizar gestiones sin intermediarios involuntarios.",
      "Quienes defienden la aplicación responden que cualquier cambio exige un periodo de adaptación. Tienen razón, si bien ese argumento no determina cuánto debe durar la transición ni quién asume su coste. Por mucho que se organicen talleres, seguirá habiendo personas que no puedan o no quieran utilizar la herramienta. Aunque todas aprendieran, podrían quedarse sin conexión el día de la cita. Una administración accesible necesita prever esas situaciones sin tratarlas como fallos personales de sus usuarios.",
      "La propuesta más razonable no es retirar la aplicación, sino evaluar el servicio completo. Habría que medir cuántas personas consiguen resolver el trámite, cuánto tardan y qué dificultades encuentran en cada canal. Si solo se cuentan las reservas digitales completadas, quienes abandonan el proceso desaparecen de las estadísticas. Una tecnología puede funcionar correctamente y, aun así, formar parte de un sistema injusto. Esa es la pregunta que los datos deberían ayudarnos a responder."
    ],
    "glossary": [
      {
        "es": "proteger la privacidad",
        "note": "resguardar datos personales"
      },
      {
        "es": "reducir una brecha",
        "note": "disminuir una desigualdad"
      },
      {
        "es": "automatizar un trámite",
        "note": "hacer que un sistema lo procese"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué defiende la columna?",
            "options": [
              "Evaluar el acceso completo y conservar vías alternativas.",
              "Eliminar cualquier trámite digital.",
              "Medir únicamente las reservas terminadas."
            ],
            "answer": 0,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué concede Laura?",
            "options": [
              "La aplicación no tiene ninguna ventaja.",
              "Todos los vecinos usan el mismo dispositivo.",
              "Falta medir bien los intentos fallidos."
            ],
            "answer": 2,
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
            "prompt": "En «Aunque funcione, hay que preguntarse para quién», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Aunque la aplicación reduzca las esperas de sus usuarios, ese dato no describe a quienes abandonan el trámite. Si bien la rapidez constituye una mejora, también habría que evaluar la autonomía y la privacidad. Propongo mantener un canal presencial y comparar durante dos meses los resultados de ambos sistemas. La decisión posterior debería basarse en gestiones resueltas, no únicamente en reservas registradas. Conceder la utilidad de la herramienta no nos obliga a considerar suficiente su diseño actual.",
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
          "quote": "El municipio ha anunciado una aplicación que permite reservar turnos sin hacer cola.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "Esa es la pregunta que los datos deberían ayudarnos a responder.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Retoma el comedor: concede el esfuerzo del equipo sin retirar la exigencia de reparación y conserva las condiciones de su acuerdo.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Mendoza y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Aunque funcione, hay que preguntarse para quién»,",
              "Aunque",
              "mañana",
              "el",
              "sistema",
              "funcione,",
              "mantendremos",
              "la",
              "atención",
              "presencial."
            ],
            "why": "Concesión hipotética futura."
          },
          {
            "words": [
              "En",
              "«Aunque funcione, hay que preguntarse para quién»,",
              "Por",
              "mucho",
              "que",
              "insistas,",
              "no",
              "me",
              "convencerás",
              "sin",
              "datos."
            ],
            "why": "Concesión intensificada; tú."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de aunque funcione, hay que preguntarse para quién; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "A pesar de que ser útil, la aplicación excluye usuarios.",
            "answers": [
              "A pesar de ser útil, la aplicación excluye usuarios."
            ],
            "why": "Ante infinitivo no se introduce que."
          },
          {
            "sentence": "Si bien sea útil, hoy sabemos que excluye usuarios.",
            "answers": [
              "Si bien es útil, hoy sabemos que excluye usuarios."
            ],
            "why": "Si bien introduce aquí una concesión afirmada."
          },
          {
            "sentence": "Por mucho que insiste, no logra convencer.",
            "answers": [
              "Por mucho que insista, no logra convencer."
            ],
            "why": "Concesión intensificada con subjuntivo."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre conceder ventajas y objetar una política tecnológica con una postura y una razón; adapta el destinatario.",
            "model": "Aunque la aplicación reduzca las esperas de sus usuarios, ese dato no describe a quienes abandonan el trámite.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Aunque funcione, hay que preguntarse para quién» sin debilitarla, y responde con una condición verificable.",
            "model": "Aunque la aplicación reduzca las esperas de sus usuarios, ese dato no describe a quienes abandonan el trámite. Si bien la rapidez constituye una mejora, también habría que evaluar la autonomía y la privacidad. Propongo mantener un canal presencial y comparar durante dos meses los resultados de ambos sistemas. La decisión posterior debería basarse en gestiones resueltas, no únicamente en reservas registradas. Conceder la utilidad de la herramienta no nos obliga a considerar suficiente su diseño actual.",
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
            "prompt": "Recupera la semana 3 sin abrir su explicación y aplica sus recursos a «Aunque funcione, hay que preguntarse para quién»: Perfecto y pluscuamperfecto de subjuntivo; Logros, fracasos y aprendizajes; Ritmo en formas compuestas largas; Valorar hechos pasados; Carta de felicitación o pésame. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo valorar hechos terminados: me alegra que hayas llegado, me sorprendió que no hubiera llamado. Puedo hablar de esfuerzo, constancia, frustración, superar y lograr. Puedo decir hubiera estado o habría podido sin cortar el grupo verbal. Puedo valorar algo que ha pasado o había pasado y reaccionar con matices. Puedo escribir un mensaje formal o cercano que valora un hecho.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 5 sin abrir su explicación y aplica sus recursos a «Aunque funcione, hay que preguntarse para quién»: Mediar entre fuentes y participantes; Checkpoint 1: modo y tiempo; Escuchar un debate radiofónico. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo sintetizar posiciones, conservar reservas y adaptar la información a otra persona sin inventar acuerdos. Puedo elegir modo y tiempo en sustantivas y condicionales para pedir, valorar e imaginar. Puedo seguir dos posturas y sus condiciones en un debate.",
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
    "task": "Escribe una columna sobre un servicio digital obligatorio. Concede dos ventajas, objeta un criterio de evaluación y recomienda una prueba con indicadores. Usa aunque con dos interpretaciones distintas.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Con aunque e indicativo presentas una dificultad como información afirmada: aunque cuesta mucho, funciona. Con subjuntivo puedes presentarla como hipotética o conceder un dato que ya se conoce y no cambia la conclusión: aunque funcione, no basta. El subjuntivo no significa siempre que el hecho sea falso.",
      "Si bien introduce normalmente una concesión afirmada; a pesar de admite sustantivo o infinitivo, y a pesar de que admite una oración. Por mucho que intensifica una concesión. Construye una objeción que responda al argumento real: reconocer una ventaja antes de cuestionar sus límites mejora la precisión, no debilita tu tesis.",
      "Retoma el comedor: concede el esfuerzo del equipo sin retirar la exigencia de reparación y conserva las condiciones de su acuerdo."
    ],
    "model": [
      "Una aplicación que reduce las colas puede mejorar de verdad la atención pública. Permite reservar sin desplazarse y facilita elegir un horario compatible con el trabajo. Si bien esas ventajas merecen reconocimiento, no demuestran que el servicio completo resulte accesible para toda la población. Quienes abandonan el proceso también deberían aparecer en la evaluación.",
      "El principal problema surge cuando la herramienta se convierte en la única puerta de entrada. Aunque una persona pueda pedir ayuda a un familiar, no debería depender de él para realizar un trámite privado. Además, aunque mañana todos supieran utilizar la aplicación, seguirían siendo posibles los problemas de conexión o de disponibilidad de dispositivos. La autonomía requiere una alternativa que permita gestionar la cita, no solo recibir instrucciones para volver a intentarlo en internet.",
      "Propongo mantener durante dos meses una vía presencial sin reserva digital y un teléfono que permita concertar turnos directamente. La evaluación debería comparar gestiones resueltas, tiempos de espera e intentos fallidos en cada canal. También convendría preguntar qué dificultades encontraron las personas usuarias, sin recopilar información personal que no sea necesaria para mejorar el servicio.",
      "Es razonable que esta prueba tenga un coste. Ahora bien, un sistema aparentemente barato puede trasladar ese coste a quienes pierden tiempo buscando ayuda. No defiendo retirar la aplicación, sino situarla dentro de una atención que ofrezca opciones. Si los datos muestran que un canal necesita ajustes, deberán hacerse públicos. La tecnología merece apoyo cuando amplía posibilidades; su utilidad no debería utilizarse para justificar que desaparezcan las demás."
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
        "prompt": "Presenta el caso de «Aunque funcione, hay que preguntarse para quién» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Aunque la aplicación reduzca las esperas de sus usuarios, ese dato no describe a quienes abandonan el trámite. Si bien la rapidez constituye una mejora, también habría que evaluar la autonomía y la privacidad. Propongo mantener un canal presencial y comparar durante dos meses los resultados de ambos sistemas. La decisión posterior debería basarse en gestiones resueltas, no únicamente en reservas registradas. Conceder la utilidad de la herramienta no nos obliga a considerar suficiente su diseño actual.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de conceder ventajas y objetar una política tecnológica. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Aunque funcione, hay que preguntarse para quién» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Mendoza; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre conceder ventajas y objetar una política tecnológica; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Aunque funcione, hay que preguntarse para quién», ¿qué resume mejor el propósito?",
        "options": [
          "Evaluar accesibilidad además de rapidez digital",
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas."
        ],
        "answer": 0,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Las reservas se completan en menos tiempo, aunque reconozco que todavía no medimos bien los intentos fallidos. Si bien el sistema es más rápido, necesitamos saber quién queda fuera. Por eso hemos abierto un punto de ayuda presencial dos mañanas por semana.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Laura en «Aunque funcione, hay que preguntarse para quién», ¿qué intervención reconoces?",
        "options": [
          "Las reservas se completan en menos tiempo, aunque reconozco que todavía no medimos bien los intentos fallidos",
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto."
        ],
        "answer": 0,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Aunque el próximo taller ___ gratuito, debe existir otro canal.",
        "answers": [
          [
            "sea"
          ]
        ],
        "why": "Concesión futura no afirmada."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Nos han explicado el sistema muchas veces, pero sigue siendo inaccesible.» Usa por mucho que con explicar.",
        "model": "Por mucho que nos expliquen el sistema, sigue siendo inaccesible.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "A pesar que hay asistencia, no todos acceden.",
        "answers": [
          "A pesar de que hay asistencia, no todos acceden."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Aunque funcione, hay que preguntarse para quién».",
        "model": "Aunque la aplicación reduzca las esperas de sus usuarios, ese dato no describe a quienes abandonan el trámite. Si bien la rapidez constituye una mejora, también habría que evaluar la autonomía y la privacidad. Propongo mantener un canal presencial y comparar durante dos meses los resultados de ambos sistemas. La decisión posterior debería basarse en gestiones resueltas, no únicamente en reservas registradas. Conceder la utilidad de la herramienta no nos obliga a considerar suficiente su diseño actual.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre conceder ventajas y objetar una política tecnológica; concede una razón y conserva tu argumento.",
        "model": "Aunque la aplicación reduzca las esperas de sus usuarios, ese dato no describe a quienes abandonan el trámite. Si bien la rapidez constituye una mejora, también habría que evaluar la autonomía y la privacidad. Propongo mantener un canal presencial y comparar durante dos meses los resultados de ambos sistemas. La decisión posterior debería basarse en gestiones resueltas, no únicamente en reservas registradas. Conceder la utilidad de la herramienta no nos obliga a considerar suficiente su diseño actual.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 6 a un mensaje cercano y a un informe formal.",
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
      "Puedo conceder ventajas y objetar una política tecnológica.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Retoma el comedor: concede el esfuerzo del equipo sin retirar la exigencia de reparación y conserva las condiciones de su acuerdo.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
