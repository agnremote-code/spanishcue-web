import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w13: Module = {
  "id": "b2-13",
  "level": "b2",
  "week": 13,
  "kind": "core",
  "title": "Cambiar sin volverse irreconocible",
  "subtitle": "Describir transformaciones personales y sociales.",
  "stop": {
    "place": "Santiago",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.verbos-cambio-sistema",
    "b2.gram.ser-estar-matices",
    "b2.voc.personalidad",
    "b2.pron.chile",
    "b2.fun.describir-transformacion",
    "b2.lis.voces-chile"
  ],
  "reviewObjectives": [
    "b2.gram.estilo-indirecto-avanzado",
    "b2.voc.verbos-lengua",
    "b2.pron.cita-ironia",
    "b2.fun.resumir-declaraciones",
    "b2.lis.rueda-prensa",
    "b2.rev.checkpoint-2",
    "b2.wri.informe-breve",
    "b2.gram.probabilidad-pasado",
    "b2.voc.investigacion",
    "b2.pron.conjetura",
    "b2.fun.especular-pasado",
    "b2.read.caso"
  ],
  "prerequisites": [
    "b2-12"
  ],
  "goal": {
    "canDo": "Puedo describir transformaciones personales y sociales con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: describir cambios y evitar estereotipos regionales.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: describir transformaciones personales y sociales. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Describir transformaciones personales y sociales",
        "body": [
          "Ponerse suele expresar un estado transitorio; volverse, un cambio de cualidad; hacerse puede destacar voluntad, profesión o proceso; convertirse en presenta una transformación de categoría; llegar a ser señala un resultado alcanzado; quedarse enfatiza el estado resultante. Las combinaciones léxicas importan tanto como la duración."
        ],
        "examples": [
          {
            "es": "Tras la noticia se puso nerviosa.",
            "note": "Cambio de estado transitorio."
          },
          {
            "es": "Con los años llegó a ser una referente del barrio.",
            "note": "Resultado de un proceso."
          },
          {
            "es": "El almacén se convirtió en un centro cultural.",
            "note": "Convertirse exige en ante la nueva categoría."
          }
        ],
        "mistakes": [
          {
            "wrong": "El almacén se convirtió a un centro cultural.",
            "right": "El almacén se convirtió en un centro cultural.",
            "why": "Convertirse en expresa transformación."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Ser caracteriza; estar puede presentar una percepción situada: es caro clasifica, está caro compara con una expectativa. En el habla chilena existen rasgos variables, como aspiración de s o realizaciones de ch y marcadores como po; no caracterizan a todos los hablantes. El audio sintético practica comprensión del guion, no acredita esos rasgos regionales: contrástalos con una muestra real elegida en clase."
        ],
        "examples": [
          {
            "es": "Tras la noticia se puso nerviosa.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "El almacén se convirtió en un centro cultural.",
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
        "prompt": "Completa estas decisiones lingüísticas de cambiar sin volverse irreconocible; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Tras la noticia se ___ nerviosa.",
            "answers": [
              [
                "puso"
              ]
            ],
            "why": "Cambio de estado transitorio."
          },
          {
            "q": "Con los años llegó a ___ una referente del barrio.",
            "answers": [
              [
                "ser"
              ]
            ],
            "why": "Resultado de un proceso."
          },
          {
            "q": "El almacén se convirtió ___ un centro cultural.",
            "answers": [
              [
                "en"
              ]
            ],
            "why": "Convertirse exige en ante la nueva categoría."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «El almacén pasó a ser un centro cultural.» Usa convertirse.",
            "model": "El almacén se convirtió en un centro cultural.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Isabel adquirió nerviosismo al escuchar la crítica.» Usa ponerse y un adjetivo.",
            "model": "Isabel se puso nerviosa al escuchar la crítica.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Después de años de trabajo alcanzó la condición de referente.» Usa llegar a ser.",
            "model": "Después de años de trabajo llegó a ser una referente.",
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
        "title": "Describir transformaciones personales y sociales",
        "items": [
          {
            "es": "cambiar de rumbo",
            "note": "modificar una trayectoria"
          },
          {
            "es": "ganar confianza",
            "note": "sentirse más capaz"
          },
          {
            "es": "quedarse sin apoyo",
            "note": "perder ayuda disponible"
          },
          {
            "es": "volverse desconfiado",
            "note": "adquirir desconfianza"
          },
          {
            "es": "hacerse cargo",
            "note": "asumir responsabilidad"
          },
          {
            "es": "llegar a ser referente",
            "note": "alcanzar reconocimiento"
          },
          {
            "es": "transformar un entorno",
            "note": "cambiar un espacio social"
          },
          {
            "es": "mantener un vínculo",
            "note": "conservar una relación"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para describir transformaciones personales y sociales con su significado.",
        "pairs": [
          {
            "left": "cambiar de rumbo",
            "right": "modificar una trayectoria"
          },
          {
            "left": "ganar confianza",
            "right": "sentirse más capaz"
          },
          {
            "left": "quedarse sin apoyo",
            "right": "perder ayuda disponible"
          },
          {
            "left": "volverse desconfiado",
            "right": "adquirir desconfianza"
          },
          {
            "left": "hacerse cargo",
            "right": "asumir responsabilidad"
          },
          {
            "left": "llegar a ser referente",
            "right": "alcanzar reconocimiento"
          },
          {
            "left": "transformar un entorno",
            "right": "cambiar un espacio social"
          },
          {
            "left": "mantener un vínculo",
            "right": "conservar una relación"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Escucha cadenas con se puso y se volvió; para variantes regionales utiliza una muestra real en clase y describe lo oído sin generalizar a todo un país.",
    "explanation": [
      "Escucha cadenas con se puso y se volvió; para variantes regionales utiliza una muestra real en clase y describe lo oído sin generalizar a todo un país.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Tras la noticia se puso nerviosa."
      },
      {
        "es": "Con los años llegó a ser una referente del barrio."
      },
      {
        "es": "El almacén se convirtió en un centro cultural."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de cambiar sin volverse irreconocible, ¿qué fragmento se oye?",
          "options": [
            "hizo",
            "volvió",
            "puso"
          ],
          "answer": 2,
          "why": "Cambio de estado transitorio.",
          "audio": "Tras la noticia se puso nerviosa.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de cambiar sin volverse irreconocible, ¿qué fragmento se oye?",
          "options": [
            "tener",
            "ser",
            "estar"
          ],
          "answer": 1,
          "why": "Resultado de un proceso.",
          "audio": "Con los años llegó a ser una referente del barrio.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Tras la noticia se puso nerviosa.",
        "tip": "Escucha cadenas con se puso y se volvió; para variantes regionales utiliza una muestra real en clase y describe lo oído sin generalizar a todo un país.",
        "voice": "es-ES-f"
      },
      {
        "text": "Con los años llegó a ser una referente del barrio.",
        "tip": "Escucha cadenas con se puso y se volvió; para variantes regionales utiliza una muestra real en clase y describe lo oído sin generalizar a todo un país.",
        "voice": "es-ES-f"
      },
      {
        "text": "El almacén se convirtió en un centro cultural.",
        "tip": "Escucha cadenas con se puso y se volvió; para variantes regionales utiliza una muestra real en clase y describe lo oído sin generalizar a todo un país.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Cambiar sin volverse irreconocible",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Entrevistadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Isabel",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Vecino",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Isabel, el antiguo almacén se ha convertido en un lugar conocido, pero algunas personas dicen que el barrio ya no es el mismo. ¿Cómo ha cambiado tu forma de escuchar esas críticas desde que empezó la reforma y hasta ahora?"
      },
      {
        "speaker": "s2",
        "text": "Antes me ponía a la defensiva. Había dejado un trabajo estable para hacerme restauradora y sentía que cualquier objeción cuestionaba esa decisión. Después comprendí que una persona podía valorar el centro y, al mismo tiempo, preocuparse por los alquileres. No tenía que elegir una sola emoción."
      },
      {
        "speaker": "s3",
        "text": "Yo participo en los talleres y me alegra que exista el centro. También digo que el barrio está caro porque comparo lo que pago ahora con mi contrato anterior. No estoy afirmando que la cooperativa sea responsable de todo, pero tampoco quiero que se ignore el cambio."
      },
      {
        "speaker": "s1",
        "text": "En algunos mensajes aparecen expresiones locales que lectores de otros países no conocen. ¿Cómo las explican cuando comparten testimonios? Este guion se reproduce con voz sintética, así que no estamos presentando una muestra verificada de pronunciación chilena."
      },
      {
        "speaker": "s2",
        "text": "Conservamos las palabras y añadimos una explicación breve cuando hace falta. Si alguien dice po como apoyo conversacional, no lo traducimos siempre por una palabra idéntica: miramos qué función cumple. Y para estudiar la pronunciación, buscamos una grabación real autorizada con la profesora."
      },
      {
        "speaker": "s3",
        "text": "Esa atención también cambia cómo nos sentimos representados. No queremos que nuestro modo de hablar se vuelva una caricatura. El barrio ha cambiado, sí, pero sigue teniendo personas con experiencias y voces distintas, no una única identidad que pueda resumirse en dos expresiones."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Santiago?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Cambiar sin volverse irreconocible?",
              "options": [
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas.",
                "Describir cambios y evitar estereotipos regionales"
              ],
              "answer": 2,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Cambiar sin volverse irreconocible»?",
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
          "prompt": "Localiza una intervención concreta en «Cambiar sin volverse irreconocible».",
          "items": [
            {
              "q": "¿Qué cambió en Isabel?",
              "options": [
                "Decidió que todas las críticas eran falsas.",
                "Dejó de interpretar toda objeción como descalificación personal.",
                "Dejó de interesarse por el centro."
              ],
              "answer": 1,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Cambiar sin volverse irreconocible»?",
              "options": [
                "Isabel, el antiguo almacén se ha convertido en un lugar conocido, pero algunas personas dicen que el barrio ya no es el mismo.",
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
              "prompt": "En «Cambiar sin volverse irreconocible», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Esa atención también cambia cómo nos sentimos representados. No queremos que nuestro modo de hablar se vuelva una caricatura. El barrio ha cambiado, sí, pero sigue teniendo personas con experiencias y voces distintas, no una única identidad que pueda resumirse en dos expresiones.",
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
    "title": "Cambiar sin volverse irreconocible: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Durante años, el antiguo almacén del barrio permaneció cerrado. Cuando una cooperativa lo convirtió en un centro cultural, algunas personas hablaron de recuperación y otras de pérdida. La diferencia no dependía únicamente del edificio. Para quienes recordaban a sus padres trabajando allí, el nuevo café parecía borrar una historia; para quienes habían crecido frente a una persiana bajada, la apertura ofrecía por primera vez un espacio de encuentro. Un mismo cambio podía significar cosas distintas según el punto de partida de cada observador.",
      "Isabel, que se hizo restauradora después de trabajar en comercio, coordinó la obra. Al principio se ponía nerviosa cada vez que alguien cuestionaba una decisión. Con el tiempo se volvió más paciente, aunque rechaza que eso signifique haberse vuelto indiferente. Aprendió a distinguir una crítica al proyecto de una descalificación personal. También reconoce un límite: durante la reforma se quedó sin tiempo para otras actividades y terminó dependiendo demasiado de un grupo pequeño de colaboradores.",
      "El centro llegó a ser conocido fuera del barrio. Esa visibilidad trajo recursos, pero elevó los precios de algunos locales cercanos. «La zona está carísima», comenta un vecino que compara los alquileres con los de hace cinco años. Otra residente responde que siempre fue una zona cara, aunque antes el deterioro lo disimulara. Sus frases no se contradicen necesariamente: una describe un cambio percibido; la otra clasifica el lugar respecto a otras zonas. Para discutir políticas de vivienda, sin embargo, harían falta datos además de impresiones.",
      "La cooperativa ha reservado salas gratuitas para asociaciones y mantiene un archivo de testimonios del almacén. No puede controlar todo lo que ocurre alrededor, pero sí revisar a quién beneficia su programación. Convertirse en un símbolo de renovación no obliga a celebrar cualquier consecuencia del cambio. Quizá la madurez del proyecto consista en conservar la capacidad de escuchar incluso cuando las críticas afectan a la historia de éxito que sus propios impulsores quisieran contar."
    ],
    "glossary": [
      {
        "es": "cambiar de rumbo",
        "note": "modificar una trayectoria"
      },
      {
        "es": "ganar confianza",
        "note": "sentirse más capaz"
      },
      {
        "es": "quedarse sin apoyo",
        "note": "perder ayuda disponible"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Por qué no se contradicen necesariamente es caro y está caro?",
            "options": [
              "Porque ambos verbos son siempre idénticos.",
              "Porque uno describe exclusivamente una profesión.",
              "Pueden comparar con referencias distintas."
            ],
            "answer": 2,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué puede demostrar este audio sintético?",
            "options": [
              "La pronunciación real del vecino entrevistado.",
              "Comprensión del guion, sin certificar rasgos fonéticos chilenos.",
              "Todas las variedades regionales de Chile."
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
            "prompt": "En «Cambiar sin volverse irreconocible», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Isabel se hizo restauradora después de una etapa en comercio. Al principio se ponía nerviosa ante las críticas, pero llegó a ser una interlocutora capaz de distinguir preocupaciones distintas. El almacén se convirtió en centro cultural y ganó visibilidad. Eso no demuestra que toda subida de alquileres proceda de la reforma. Para valorar el cambio habría que escuchar a quienes utilizan el espacio y a quienes sienten que se han quedado al margen de sus beneficios.",
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
          "quote": "Durante años, el antiguo almacén del barrio permaneció cerrado.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "Quizá la madurez del proyecto consista en conservar la capacidad de escuchar incluso cuando las críticas afectan a la historia de éxito que sus propios impulsores quisieran contar.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Relaciona expectativas familiares con el cambio de profesión de Isabel; recupera una valoración compuesta y una relativa que describa el centro.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Santiago y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Cambiar sin volverse irreconocible»,",
              "Tras",
              "la",
              "noticia",
              "se",
              "puso",
              "nerviosa."
            ],
            "why": "Cambio de estado transitorio."
          },
          {
            "words": [
              "En",
              "«Cambiar sin volverse irreconocible»,",
              "El",
              "almacén",
              "se",
              "convirtió",
              "en",
              "un",
              "centro",
              "cultural."
            ],
            "why": "Convertirse exige en ante la nueva categoría."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de cambiar sin volverse irreconocible; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "El almacén se convirtió a un centro cultural.",
            "answers": [
              "El almacén se convirtió en un centro cultural."
            ],
            "why": "Convertirse en expresa transformación."
          },
          {
            "sentence": "Se hizo en restauradora tras estudiar.",
            "answers": [
              "Se hizo restauradora tras estudiar."
            ],
            "why": "Hacerse con profesión no exige en."
          },
          {
            "sentence": "Llegó ser una referente cultural.",
            "answers": [
              "Llegó a ser una referente cultural."
            ],
            "why": "La perífrasis es llegar a ser."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre describir transformaciones personales y sociales con una postura y una razón; adapta el destinatario.",
            "model": "Isabel se hizo restauradora después de una etapa en comercio.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Cambiar sin volverse irreconocible» sin debilitarla, y responde con una condición verificable.",
            "model": "Isabel se hizo restauradora después de una etapa en comercio. Al principio se ponía nerviosa ante las críticas, pero llegó a ser una interlocutora capaz de distinguir preocupaciones distintas. El almacén se convirtió en centro cultural y ganó visibilidad. Eso no demuestra que toda subida de alquileres proceda de la reforma. Para valorar el cambio habría que escuchar a quienes utilizan el espacio y a quienes sienten que se han quedado al margen de sus beneficios.",
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
            "prompt": "Recupera la semana 10 sin abrir su explicación y aplica sus recursos a «Cambiar sin volverse irreconocible»: Estilo indirecto avanzado; Verbos para citar; Citar con ironía; Resumir declaraciones; Escuchar una rueda de prensa; Checkpoint 2: conceder, describir e informar; Informe breve. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo transmitir enunciados con todos los cambios temporales y verbos como asegurar, negar, admitir, sugerir y advertir. Puedo elegir entre afirmar, reconocer, insinuar, desmentir, reprochar y prometer. Puedo reconocer cuándo alguien cita con ironía o distancia. Puedo resumir lo que dijeron varias personas y marcar mi distancia. Puedo identificar promesas, negaciones y evasivas. Puedo conceder y objetar, describir con precisión, negociar condiciones e informar con distancia. Puedo escribir un informe breve que presenta datos, declaraciones y una recomendación.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 12 sin abrir su explicación y aplica sus recursos a «Cambiar sin volverse irreconocible»: Probabilidad en el pasado; Investigación y pruebas; Entonación de la conjetura; Especular sobre lo que pasó; Leer un caso. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo especular sobre el pasado con habrá salido, habría llegado y debió de pasar. Puedo hablar de indicios, pruebas, versiones y conclusiones. Puedo distinguir una afirmación de una conjetura por la prosodia. Puedo formular y descartar hipótesis sobre un hecho pasado. Puedo inferir lo que probablemente pasó a partir de varios documentos.",
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
    "task": "Escribe un perfil de transformación de una persona y su entorno. Contrasta estados, procesos y resultados con verbos de cambio; incorpora dos miradas y delimita las causas que no puedes demostrar.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Ponerse suele expresar un estado transitorio; volverse, un cambio de cualidad; hacerse puede destacar voluntad, profesión o proceso; convertirse en presenta una transformación de categoría; llegar a ser señala un resultado alcanzado; quedarse enfatiza el estado resultante. Las combinaciones léxicas importan tanto como la duración.",
      "Ser caracteriza; estar puede presentar una percepción situada: es caro clasifica, está caro compara con una expectativa. En el habla chilena existen rasgos variables, como aspiración de s o realizaciones de ch y marcadores como po; no caracterizan a todos los hablantes. El audio sintético practica comprensión del guion, no acredita esos rasgos regionales: contrástalos con una muestra real elegida en clase.",
      "Relaciona expectativas familiares con el cambio de profesión de Isabel; recupera una valoración compuesta y una relativa que describa el centro."
    ],
    "model": [
      "Isabel se hizo restauradora después de una etapa en comercio. Cuando comenzó a recuperar el antiguo almacén, se ponía nerviosa ante cualquier objeción. Había asumido un riesgo profesional y escuchaba muchas críticas como si fueran valoraciones de su decisión personal. Con el tiempo aprendió a preguntar qué preocupaba a cada persona antes de defender el proyecto.",
      "El almacén se convirtió en un centro cultural y llegó a ser conocido fuera del barrio. Para quienes habían crecido frente a una persiana cerrada, la apertura ofrecía una oportunidad de encuentro. Algunas familias vinculadas al antiguo trabajo ferroviario, en cambio, temían que el café y las actividades borraran esa memoria. Las dos miradas parten de experiencias distintas; reducir una de ellas a resistencia al cambio impediría comprender el conflicto.",
      "La transformación también coincide con un aumento percibido de los alquileres. Un vecino dice que la zona está carísima porque compara su contrato actual con el anterior. Esa observación es relevante, pero no demuestra que el centro explique por sí solo la subida. Para valorar causas y alcance harían falta datos de otras calles, periodos y tipos de vivienda.",
      "Isabel se ha vuelto más paciente sin dejar de defender la utilidad del espacio. La cooperativa conserva testimonios del almacén y reserva salas gratuitas para asociaciones. Recomendaría revisar quién participa y quién sigue quedándose al margen. Un proyecto puede ganar reconocimiento y perder capacidad de escucha si solo admite relatos favorables. Su madurez se medirá también por cómo responde a consecuencias que sus promotores no habían previsto."
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
        "prompt": "Presenta el caso de «Cambiar sin volverse irreconocible» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Isabel se hizo restauradora después de una etapa en comercio. Al principio se ponía nerviosa ante las críticas, pero llegó a ser una interlocutora capaz de distinguir preocupaciones distintas. El almacén se convirtió en centro cultural y ganó visibilidad. Eso no demuestra que toda subida de alquileres proceda de la reforma. Para valorar el cambio habría que escuchar a quienes utilizan el espacio y a quienes sienten que se han quedado al margen de sus beneficios.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de describir transformaciones personales y sociales. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Cambiar sin volverse irreconocible» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Santiago; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre describir transformaciones personales y sociales; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Cambiar sin volverse irreconocible», ¿qué resume mejor el propósito?",
        "options": [
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas.",
          "Describir cambios y evitar estereotipos regionales"
        ],
        "answer": 2,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Antes me ponía a la defensiva. Había dejado un trabajo estable para hacerme restauradora y sentía que cualquier objeción cuestionaba esa decisión. Después comprendí que una persona podía valorar el centro y, al mismo tiempo, preocuparse por los alquileres. No tenía que elegir una sola emoción.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Isabel en «Cambiar sin volverse irreconocible», ¿qué intervención reconoces?",
        "options": [
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Antes me ponía a la defensiva"
        ],
        "answer": 2,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Después de varios años de formación, se ___ ingeniera.",
        "answers": [
          [
            "hizo"
          ]
        ],
        "why": "Cambio ligado a profesión y trayectoria."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «La sala pasó a ser un archivo vecinal.» Usa convertirse en.",
        "model": "La sala se convirtió en un archivo vecinal.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Con el susto, se puso de nerviosa.",
        "answers": [
          "Con el susto, se puso nerviosa."
        ],
        "why": "Ponerse con adjetivo no exige de."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Cambiar sin volverse irreconocible».",
        "model": "Isabel se hizo restauradora después de una etapa en comercio. Al principio se ponía nerviosa ante las críticas, pero llegó a ser una interlocutora capaz de distinguir preocupaciones distintas. El almacén se convirtió en centro cultural y ganó visibilidad. Eso no demuestra que toda subida de alquileres proceda de la reforma. Para valorar el cambio habría que escuchar a quienes utilizan el espacio y a quienes sienten que se han quedado al margen de sus beneficios.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre describir transformaciones personales y sociales; concede una razón y conserva tu argumento.",
        "model": "Isabel se hizo restauradora después de una etapa en comercio. Al principio se ponía nerviosa ante las críticas, pero llegó a ser una interlocutora capaz de distinguir preocupaciones distintas. El almacén se convirtió en centro cultural y ganó visibilidad. Eso no demuestra que toda subida de alquileres proceda de la reforma. Para valorar el cambio habría que escuchar a quienes utilizan el espacio y a quienes sienten que se han quedado al margen de sus beneficios.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 13 a un mensaje cercano y a un informe formal.",
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
      "Puedo describir transformaciones personales y sociales.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Relaciona expectativas familiares con el cambio de profesión de Isabel; recupera una valoración compuesta y una relativa que describa el centro.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
