import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w18: Module = {
  "id": "b2-18",
  "level": "b2",
  "week": 18,
  "kind": "core",
  "title": "O sea: reformular para seguir hablando",
  "subtitle": "Gestionar turnos, aclaraciones y desacuerdos espontáneos.",
  "stop": {
    "place": "Punta Arenas",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.disc.marcadores-conversacionales",
    "b2.disc.reformuladores",
    "b2.voc.expresiones-coloquiales",
    "b2.pron.prosodia-marcadores",
    "b2.fun.gestionar-conversacion",
    "b2.spk.conversacion-natural"
  ],
  "reviewObjectives": [
    "b2.rev.checkpoint-3",
    "b2.read.dossier",
    "b2.fun.mitigacion",
    "b2.gram.importar-que",
    "b2.voc.correspondencia-formal",
    "b2.pron.mitigacion-prosodia",
    "b2.wri.correo-delicado",
    "b2.lis.reunion"
  ],
  "prerequisites": [
    "b2-17"
  ],
  "goal": {
    "canDo": "Puedo gestionar turnos, aclaraciones y desacuerdos espontáneos con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: aclarar qué aceptó cada persona antes de cerrar el acta.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: gestionar turnos, aclaraciones y desacuerdos espontáneos. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Gestionar turnos, aclaraciones y desacuerdos espontáneos",
        "body": [
          "Bueno, pues, a ver y la verdad es que organizan la interacción: pueden abrir un turno, ganar tiempo, introducir una reserva o retomar. Su función depende del contexto y de la prosodia. Es decir reformula; mejor dicho corrige; en otras palabras adapta. No llenes cada pausa con el mismo marcador."
        ],
        "examples": [
          {
            "es": "La reunión será el lunes; mejor dicho, el martes.",
            "note": "Corrige la información anterior."
          },
          {
            "es": "No rechazo el viaje; es decir, necesito cambiar la fecha.",
            "note": "Aclara el alcance del mensaje."
          },
          {
            "es": "Si te entiendo bien, el problema es el presupuesto.",
            "note": "Comprueba una interpretación."
          }
        ],
        "mistakes": [
          {
            "wrong": "La feria será el lunes; mejor decir, el martes.",
            "right": "La feria será el lunes; mejor dicho, el martes.",
            "why": "El reformulador de corrección es mejor dicho."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Dar igual, pasarse o quedar mal cambian de matiz según la situación. Para comprobar una interpretación, reformula y permite corrección: si te entiendo bien… Interrumpe con una razón breve y devuelve el turno. Mediar no exige borrar el desacuerdo, sino hacer comprensibles sus términos para que las partes puedan responder."
        ],
        "examples": [
          {
            "es": "La reunión será el lunes; mejor dicho, el martes.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Si te entiendo bien, el problema es el presupuesto.",
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
        "prompt": "Completa estas decisiones lingüísticas de o sea: reformular para seguir hablando; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "La reunión será el lunes; mejor ___, el martes.",
            "answers": [
              [
                "dicho"
              ]
            ],
            "why": "Corrige la información anterior."
          },
          {
            "q": "No rechazo el viaje; es ___, necesito cambiar la fecha.",
            "answers": [
              [
                "decir"
              ]
            ],
            "why": "Aclara el alcance del mensaje."
          },
          {
            "q": "Si te entiendo ___, el problema es el presupuesto.",
            "answers": [
              [
                "bien"
              ]
            ],
            "why": "Comprueba una interpretación."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «La feria será el lunes. Corrijo: el martes.» Usa el reformulador de corrección.",
            "model": "La feria será el lunes; mejor dicho, el martes.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «No rechazo el plan. Lo que necesito es conocer el coste.» Aclara con es decir.",
            "model": "No rechazo el plan; es decir, necesito conocer el coste.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Creo que te preocupa el presupuesto. ¿Es correcto?» Comprueba tu interpretación con si te entiendo bien.",
            "model": "Si te entiendo bien, te preocupa el presupuesto.",
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
        "title": "Gestionar turnos, aclaraciones y desacuerdos espontáneos",
        "items": [
          {
            "es": "dar igual",
            "note": "no tener preferencia relevante"
          },
          {
            "es": "pasarse de la raya",
            "note": "exceder un límite"
          },
          {
            "es": "quedar bien",
            "note": "causar una impresión favorable"
          },
          {
            "es": "tomar la palabra",
            "note": "iniciar una intervención"
          },
          {
            "es": "retomar el hilo",
            "note": "volver al asunto previo"
          },
          {
            "es": "pedir una aclaración",
            "note": "solicitar mayor precisión"
          },
          {
            "es": "ceder el turno",
            "note": "permitir hablar a otra persona"
          },
          {
            "es": "reformular una postura",
            "note": "expresarla de otra manera"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para gestionar turnos, aclaraciones y desacuerdos espontáneos con su significado.",
        "pairs": [
          {
            "left": "dar igual",
            "right": "no tener preferencia relevante"
          },
          {
            "left": "pasarse de la raya",
            "right": "exceder un límite"
          },
          {
            "left": "quedar bien",
            "right": "causar una impresión favorable"
          },
          {
            "left": "tomar la palabra",
            "right": "iniciar una intervención"
          },
          {
            "left": "retomar el hilo",
            "right": "volver al asunto previo"
          },
          {
            "left": "pedir una aclaración",
            "right": "solicitar mayor precisión"
          },
          {
            "left": "ceder el turno",
            "right": "permitir hablar a otra persona"
          },
          {
            "left": "reformular una postura",
            "right": "expresarla de otra manera"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Produce bueno como apertura, duda y aceptación; pide a otra persona que explique su interpretación. La síntesis no verifica por sí sola cada valor prosódico.",
    "explanation": [
      "Produce bueno como apertura, duda y aceptación; pide a otra persona que explique su interpretación. La síntesis no verifica por sí sola cada valor prosódico.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "La reunión será el lunes; mejor dicho, el martes."
      },
      {
        "es": "No rechazo el viaje; es decir, necesito cambiar la fecha."
      },
      {
        "es": "Si te entiendo bien, el problema es el presupuesto."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de o sea: reformular para seguir hablando, ¿qué fragmento se oye?",
          "options": [
            "dicho",
            "decir",
            "diciendo"
          ],
          "answer": 0,
          "why": "Corrige la información anterior.",
          "audio": "La reunión será el lunes; mejor dicho, el martes.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de o sea: reformular para seguir hablando, ¿qué fragmento se oye?",
          "options": [
            "dicho",
            "diciendo",
            "decir"
          ],
          "answer": 2,
          "why": "Aclara el alcance del mensaje.",
          "audio": "No rechazo el viaje; es decir, necesito cambiar la fecha.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "La reunión será el lunes; mejor dicho, el martes.",
        "tip": "Produce bueno como apertura, duda y aceptación; pide a otra persona que explique su interpretación. La síntesis no verifica por sí sola cada valor prosódico.",
        "voice": "es-ES-f"
      },
      {
        "text": "No rechazo el viaje; es decir, necesito cambiar la fecha.",
        "tip": "Produce bueno como apertura, duda y aceptación; pide a otra persona que explique su interpretación. La síntesis no verifica por sí sola cada valor prosódico.",
        "voice": "es-ES-f"
      },
      {
        "text": "Si te entiendo bien, el problema es el presupuesto.",
        "tip": "Produce bueno como apertura, duda y aceptación; pide a otra persona que explique su interpretación. La síntesis no verifica por sí sola cada valor prosódico.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: O sea: reformular para seguir hablando",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Nora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Mateo",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Elisa",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Bueno… lo del sábado podría ser, pero todavía no hemos hablado del coste. No quiero que mi bueno se interprete como una aceptación de todo el proyecto. Me parece bien estudiar la fecha; el presupuesto sigue pendiente y afecta a varias actividades del mes."
      },
      {
        "speaker": "s2",
        "text": "A mí me da igual, o sea, me da igual el día. No me da igual cuánto gastemos. Si usamos todo el fondo en la feria, después no podremos pagar el taller. Perdona, Nora, te interrumpí para aclarar eso; seguí con tu idea."
      },
      {
        "speaker": "s1",
        "text": "Gracias. Proponía una versión más pequeña. Mejor dicho, la misma duración, pero menos puestos y sin escenario. Podríamos pedir equipos prestados. No sé si eso reduciría suficiente el coste, así que necesitaríamos una cifra antes de decidir."
      },
      {
        "speaker": "s3",
        "text": "A ver, si les entiendo bien, aceptan el sábado siempre que el gasto deje dinero para el taller. Yo añadiría terminar antes de las diez. La última vez nos pasamos y varias personas quedaron mal con quienes habían prometido ayudar a recoger temprano."
      },
      {
        "speaker": "s2",
        "text": "Sí, eso recoge mi postura. Aunque no diría que todos quedamos mal: algunas personas avisaron de que debían irse. En otras palabras, faltó coordinar la recogida, no compromiso individual. Me parece importante porque cambia la solución que deberíamos buscar."
      },
      {
        "speaker": "s3",
        "text": "Tienes razón, reformulo. Necesitamos un equipo de cierre con horario claro. Entonces dejamos tres puntos pendientes: presupuesto, equipos prestados y responsables de recoger. ¿Podemos revisar esos datos el jueves y confirmar después, en lugar de anunciar hoy un acuerdo que todavía no existe?"
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Punta Arenas?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: O sea: reformular para seguir hablando?",
              "options": [
                "Aclarar qué aceptó cada persona antes de cerrar el acta",
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas."
              ],
              "answer": 0,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «O sea: reformular para seguir hablando»?",
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
          "prompt": "Localiza una intervención concreta en «O sea: reformular para seguir hablando».",
          "items": [
            {
              "q": "¿Qué corrige Mateo al final?",
              "options": [
                "La necesidad de recoger.",
                "La existencia del taller posterior.",
                "La atribución general de falta de compromiso."
              ],
              "answer": 2,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «O sea: reformular para seguir hablando»?",
              "options": [
                "No hay información que podamos discutir en esta reunión.",
                "Bueno… lo del sábado podría ser, pero todavía no hemos hablado del coste.",
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
              "prompt": "En «O sea: reformular para seguir hablando», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Tienes razón, reformulo. Necesitamos un equipo de cierre con horario claro. Entonces dejamos tres puntos pendientes: presupuesto, equipos prestados y responsables de recoger. ¿Podemos revisar esos datos el jueves y confirmar después, en lugar de anunciar hoy un acuerdo que todavía no existe?",
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
    "title": "O sea: reformular para seguir hablando: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "En el acta de una reunión vecinal se leía que todos estaban de acuerdo con organizar una feria el sábado. La grabación mostraba una conversación bastante menos clara. Una persona había dicho «bueno» después de escuchar la propuesta; otra había respondido «me da igual» mientras preguntaba cuánto costaría; una tercera había intentado añadir una condición que quedó tapada por un cambio de tema. La persona encargada del acta interpretó la falta de un rechazo explícito como consentimiento general.",
      "Al revisar el intercambio, el grupo descubrió que los marcadores habían cumplido funciones distintas. El primer bueno permitía tomar tiempo, no aceptar. Me da igual se refería al día, no al presupuesto. La intervención interrumpida pedía que la feria terminara antes de las diez. Ninguna palabra resultaba especialmente difícil por separado; la dificultad consistía en seguir a qué respondía cada turno y qué quedaba todavía pendiente. Comprender una conversación exige reconstruir esas relaciones además de reconocer vocabulario.",
      "La siguiente reunión incorporó una práctica sencilla: antes de cerrar un acuerdo, alguien lo reformulaba y preguntaba si reflejaba lo dicho. «Entonces, si les entiendo bien, aceptamos el sábado siempre que el presupuesto no aumente y terminemos antes de las diez». Esa frase no eliminaba las diferencias, pero ofrecía una oportunidad clara para corregirlas. También se acordó que una interrupción necesaria incluiría una devolución del turno: «Perdona, necesito aclarar la cifra; después seguimos con tu propuesta».",
      "Algunas personas temían que esas fórmulas hicieran la conversación artificial. Con el tiempo comprobaron que bastaba utilizarlas en momentos decisivos. La espontaneidad no depende de hablar sin pausas ni reparaciones. Una conversación fluida admite dudas, reformulaciones y cambios de perspectiva sin que nadie pierda por ello su derecho a ser escuchado. El objetivo de los marcadores no es adornar el habla, sino ayudar a que las personas sepan qué se está haciendo con cada intervención."
    ],
    "glossary": [
      {
        "es": "dar igual",
        "note": "no tener preferencia relevante"
      },
      {
        "es": "pasarse de la raya",
        "note": "exceder un límite"
      },
      {
        "es": "quedar bien",
        "note": "causar una impresión favorable"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Cuál fue el problema del acta?",
            "options": [
              "Interpretó respuestas parciales como aceptación de todo.",
              "Copió literalmente cada condición.",
              "No incluyó ninguna fecha."
            ],
            "answer": 0,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué diferencia mejor dicho de es decir?",
            "options": [
              "Ambos indican siempre acuerdo.",
              "El primero solo introduce citas literales.",
              "El primero suele corregir; el segundo aclarar o reformular."
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
            "prompt": "En «O sea: reformular para seguir hablando», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "El grupo acepta estudiar el sábado como fecha, pero no ha aprobado todavía el presupuesto. Nora propone reducir el equipamiento y Elisa pide terminar antes de las diez. Mateo aclara que su falta de preferencia se refería al día, no al coste. Quedan pendientes una estimación económica y un equipo de recogida. Mensaje de aclaración: cuando dije bueno, necesitaba pensar la propuesta; no estaba confirmando todos sus detalles. Gracias por dejarme precisar esa diferencia antes de anunciarla.",
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
          "quote": "En el acta de una reunión vecinal se leía que todos estaban de acuerdo con organizar una feria el sábado.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "El objetivo de los marcadores no es adornar el habla, sino ayudar a que las personas sepan qué se está haciendo con cada intervención.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Simula la reunión del museo y corrige una interpretación del correo delicado: reformula una reserva y devuelve el turno a quien fue interrumpido.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Punta Arenas y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«O sea: reformular para seguir hablando»,",
              "La",
              "reunión",
              "será",
              "el",
              "lunes;",
              "mejor",
              "dicho,",
              "el",
              "martes."
            ],
            "why": "Corrige la información anterior."
          },
          {
            "words": [
              "En",
              "«O sea: reformular para seguir hablando»,",
              "Si",
              "te",
              "entiendo",
              "bien,",
              "el",
              "problema",
              "es",
              "el",
              "presupuesto."
            ],
            "why": "Comprueba una interpretación."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de o sea: reformular para seguir hablando; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "La feria será el lunes; mejor decir, el martes.",
            "answers": [
              "La feria será el lunes; mejor dicho, el martes."
            ],
            "why": "El reformulador de corrección es mejor dicho."
          },
          {
            "sentence": "En otra palabras, falta confirmar la fecha.",
            "answers": [
              "En otras palabras, falta confirmar la fecha."
            ],
            "why": "El reformulador usa plural."
          },
          {
            "sentence": "Si te entiendo bueno, aceptas solo el día.",
            "answers": [
              "Si te entiendo bien, aceptas solo el día."
            ],
            "why": "Bien es el adverbio que modifica entender."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre gestionar turnos, aclaraciones y desacuerdos espontáneos con una postura y una razón; adapta el destinatario.",
            "model": "El grupo acepta estudiar el sábado como fecha, pero no ha aprobado todavía el presupuesto.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «O sea: reformular para seguir hablando» sin debilitarla, y responde con una condición verificable.",
            "model": "El grupo acepta estudiar el sábado como fecha, pero no ha aprobado todavía el presupuesto. Nora propone reducir el equipamiento y Elisa pide terminar antes de las diez. Mateo aclara que su falta de preferencia se refería al día, no al coste. Quedan pendientes una estimación económica y un equipo de recogida. Mensaje de aclaración: cuando dije bueno, necesitaba pensar la propuesta; no estaba confirmando todos sus detalles. Gracias por dejarme precisar esa diferencia antes de anunciarla.",
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
            "prompt": "Recupera la semana 15 sin abrir su explicación y aplica sus recursos a «O sea: reformular para seguir hablando»: Checkpoint 3: argumentar y especular; Leer un dossier. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo argumentar, especular sobre el pasado, describir cambios y asumir responsabilidad. Puedo comparar posturas en varios textos breves sobre un mismo tema.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 17 sin abrir su explicación y aplica sus recursos a «O sea: reformular para seguir hablando»: Cortesía y mitigación; ¿Te importa que…? y fórmulas con subjuntivo; Correspondencia profesional; Prosodia de la mitigación; Correo delicado; Escuchar una reunión. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo suavizar peticiones, críticas y desacuerdos: ¿te importaría que…?, convendría, quizás no sea lo ideal. Puedo pedir permiso y hacer peticiones indirectas con subjuntivo. Puedo usar fórmulas de inicio, cierre y transición en correos formales. Puedo suavizar con alargamientos, pausas y un tono más bajo. Puedo escribir un correo profesional que rechaza una propuesta sin dañar la relación. Puedo reconocer desacuerdos mitigados y lo que realmente se decide.",
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
    "task": "Redacta una síntesis de reunión que distinga aceptación parcial, reservas y asuntos pendientes. Añade un mensaje informal de aclaración a quien interpretó mal un marcador; mantén coherencia entre registros.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Bueno, pues, a ver y la verdad es que organizan la interacción: pueden abrir un turno, ganar tiempo, introducir una reserva o retomar. Su función depende del contexto y de la prosodia. Es decir reformula; mejor dicho corrige; en otras palabras adapta. No llenes cada pausa con el mismo marcador.",
      "Dar igual, pasarse o quedar mal cambian de matiz según la situación. Para comprobar una interpretación, reformula y permite corrección: si te entiendo bien… Interrumpe con una razón breve y devuelve el turno. Mediar no exige borrar el desacuerdo, sino hacer comprensibles sus términos para que las partes puedan responder.",
      "Simula la reunión del museo y corrige una interpretación del correo delicado: reformula una reserva y devuelve el turno a quien fue interrumpido."
    ],
    "model": [
      "Síntesis de la reunión sobre la feria",
      "El grupo acepta estudiar el sábado como fecha, pero no ha aprobado todavía el presupuesto ni el programa completo. Nora propone mantener la duración con menos puestos y sin escenario. Mateo aclara que su falta de preferencia se refería al día, no al gasto. Elisa pide terminar antes de las diez y disponer de un equipo de recogida con responsabilidades claras.",
      "La conversación permitió corregir dos interpretaciones. El bueno inicial de Nora servía para pensar la propuesta y formular una reserva; no expresaba aceptación total. Además, Mateo cuestionó que los problemas de recogida anteriores demostraran falta de compromiso general. Algunas personas habían avisado de que debían irse, por lo que conviene revisar la coordinación antes de atribuir el resultado a su actitud.",
      "Quedan pendientes una estimación del coste, la disponibilidad de equipos prestados y la composición del equipo de cierre. El jueves se revisarán esos datos antes de anunciar la feria. No se presentará como decidido lo que todavía depende de condiciones. Para cerrar la próxima reunión, alguien reformulará el acuerdo y pedirá a las demás personas que corrijan cualquier diferencia importante.",
      "Mensaje para Mateo: cuando dije bueno, necesitaba pensar cómo encajar la feria con las otras actividades; no estaba confirmando todo el plan. Me sirve que hayamos aclarado también lo que querías decir con me da igual. Si te entiendo bien, aceptas estudiar el sábado siempre que quede dinero para el taller. Corrígeme si he vuelto a simplificar demasiado tu postura. El jueves podremos decidir con las cifras delante."
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
        "prompt": "Presenta el caso de «O sea: reformular para seguir hablando» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "El grupo acepta estudiar el sábado como fecha, pero no ha aprobado todavía el presupuesto. Nora propone reducir el equipamiento y Elisa pide terminar antes de las diez. Mateo aclara que su falta de preferencia se refería al día, no al coste. Quedan pendientes una estimación económica y un equipo de recogida. Mensaje de aclaración: cuando dije bueno, necesitaba pensar la propuesta; no estaba confirmando todos sus detalles. Gracias por dejarme precisar esa diferencia antes de anunciarla.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de gestionar turnos, aclaraciones y desacuerdos espontáneos. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «O sea: reformular para seguir hablando» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Punta Arenas; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre gestionar turnos, aclaraciones y desacuerdos espontáneos; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «O sea: reformular para seguir hablando», ¿qué resume mejor el propósito?",
        "options": [
          "Aclarar qué aceptó cada persona antes de cerrar el acta",
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas."
        ],
        "answer": 0,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "A mí me da igual, o sea, me da igual el día. No me da igual cuánto gastemos. Si usamos todo el fondo en la feria, después no podremos pagar el taller. Perdona, Nora, te interrumpí para aclarar eso; seguí con tu idea.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Mateo en «O sea: reformular para seguir hablando», ¿qué intervención reconoces?",
        "options": [
          "A mí me da igual, o sea, me da igual el día",
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto."
        ],
        "answer": 0,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "El coste es alto; en ___ palabras, debemos reducir algo.",
        "answers": [
          [
            "otras"
          ]
        ],
        "why": "Reformulador explicativo."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Acepto el día, pero no he aceptado todavía el gasto.» Aclara con es decir.",
        "model": "Acepto el día; es decir, no he aceptado todavía el gasto.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Bueno significa siempre que acepto toda la propuesta.",
        "answers": [
          "Bueno no significa siempre que acepto toda la propuesta."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «O sea: reformular para seguir hablando».",
        "model": "El grupo acepta estudiar el sábado como fecha, pero no ha aprobado todavía el presupuesto. Nora propone reducir el equipamiento y Elisa pide terminar antes de las diez. Mateo aclara que su falta de preferencia se refería al día, no al coste. Quedan pendientes una estimación económica y un equipo de recogida. Mensaje de aclaración: cuando dije bueno, necesitaba pensar la propuesta; no estaba confirmando todos sus detalles. Gracias por dejarme precisar esa diferencia antes de anunciarla.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre gestionar turnos, aclaraciones y desacuerdos espontáneos; concede una razón y conserva tu argumento.",
        "model": "El grupo acepta estudiar el sábado como fecha, pero no ha aprobado todavía el presupuesto. Nora propone reducir el equipamiento y Elisa pide terminar antes de las diez. Mateo aclara que su falta de preferencia se refería al día, no al coste. Quedan pendientes una estimación económica y un equipo de recogida. Mensaje de aclaración: cuando dije bueno, necesitaba pensar la propuesta; no estaba confirmando todos sus detalles. Gracias por dejarme precisar esa diferencia antes de anunciarla.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 18 a un mensaje cercano y a un informe formal.",
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
      "Puedo gestionar turnos, aclaraciones y desacuerdos espontáneos.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Simula la reunión del museo y corrige una interpretación del correo delicado: reformula una reserva y devuelve el turno a quien fue interrumpido.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
