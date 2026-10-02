import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w05: Module = {
  "id": "b2-05",
  "level": "b2",
  "week": 5,
  "kind": "checkpoint",
  "title": "Checkpoint: una cooperativa en crisis",
  "subtitle": "Mediar entre expectativas, valoraciones y alternativas.",
  "stop": {
    "place": "Córdoba",
    "country": "Argentina"
  },
  "minutes": 150,
  "newObjectives": [
    "b2.fun.mediacion-fuentes",
    "b2.rev.checkpoint-1",
    "b2.lis.debate-radio"
  ],
  "reviewObjectives": [
    "b2.gram.sustantivas-sistema",
    "b2.gram.decir-doble-valor",
    "b2.voc.trabajo-equipo",
    "b2.pron.influencia-mitigada",
    "b2.fun.pedir-exigir",
    "b2.read.correo-equipo",
    "b2.gram.subjuntivo-imperfecto-usos",
    "b2.gram.como-si",
    "b2.voc.familia-generaciones",
    "b2.pron.acento-ra-ra",
    "b2.fun.recordar-expectativas",
    "b2.lis.entrevista-generaciones",
    "b2.gram.subjuntivo-compuestos",
    "b2.voc.logros-fracasos",
    "b2.pron.compuestos-largos",
    "b2.fun.valorar-hechos",
    "b2.wri.carta-felicitacion",
    "b2.gram.condicionales-irreales",
    "b2.gram.condicional-compuesto",
    "b2.voc.decisiones-consecuencias",
    "b2.pron.reproche",
    "b2.fun.lamentar-reprochar",
    "b2.spk.historia-alternativa"
  ],
  "prerequisites": [
    "b2-04"
  ],
  "goal": {
    "canDo": "Puedo mediar entre expectativas, valoraciones y alternativas con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: acordar reparación y reservas provisionales para un comedor.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: mediar entre expectativas, valoraciones y alternativas. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Mediar entre expectativas, valoraciones y alternativas",
        "body": [
          "Integra cuatro decisiones: distingue información de influencia, sitúa la expectativa en su momento, expresa anterioridad y construye una alternativa irreal. En una mediación no basta transformar verbos: debes conservar quién dijo qué, qué se confirmó y qué sigue siendo una propuesta."
        ],
        "examples": [
          {
            "es": "La asamblea pide que la dirección publique las cuentas.",
            "note": "Petición actual."
          },
          {
            "es": "La técnica esperaba que el sistema funcionara antes de junio.",
            "note": "Expectativa pasada, no resultado confirmado."
          },
          {
            "es": "Si hubieran avisado antes, habríamos aplazado la apertura.",
            "note": "Alternativa pasada irreal."
          }
        ],
        "mistakes": [
          {
            "wrong": "Lamentamos que ustedes han esperado tanto.",
            "right": "Lamentamos que ustedes hayan esperado tanto.",
            "why": "La valoración lamentar selecciona subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Un informe de crisis necesita una cronología breve, posiciones atribuidas y una recomendación viable. Evita presentar una hipótesis como prueba de culpa. Recupera el contraste dice que viene / dice que venga y las formas esperaba que, me alegra que haya y si hubiera para reconstruir el desacuerdo sin deformarlo."
        ],
        "examples": [
          {
            "es": "La asamblea pide que la dirección publique las cuentas.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Si hubieran avisado antes, habríamos aplazado la apertura.",
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
        "prompt": "Completa estas decisiones lingüísticas de checkpoint: una cooperativa en crisis; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "La asamblea pide que la dirección ___ las cuentas.",
            "answers": [
              [
                "publique"
              ]
            ],
            "why": "Petición actual."
          },
          {
            "q": "La técnica esperaba que el sistema ___ antes de junio.",
            "answers": [
              [
                "funcionara"
              ]
            ],
            "why": "Expectativa pasada, no resultado confirmado."
          },
          {
            "q": "Si hubieran avisado antes, ___ aplazado la apertura.",
            "answers": [
              [
                "habríamos"
              ]
            ],
            "why": "Alternativa pasada irreal."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «El sistema no se probó y aparecieron fallos en la apertura.» Formula una alternativa pasada prudente con quizá.",
            "model": "Si se hubiera probado el sistema, quizá se habrían detectado los fallos antes.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «El técnico: «Reduzcan las funciones temporalmente».» Transmite la solicitud con pide que.",
            "model": "El técnico pide que reduzcan las funciones temporalmente.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «El equipo mantuvo abierto el comedor y lo agradezco.» Valora ahora ese hecho con agradezco que.",
            "model": "Agradezco que el equipo haya mantenido abierto el comedor.",
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
        "title": "Mediar entre expectativas, valoraciones y alternativas",
        "items": [
          {
            "es": "convocar una asamblea",
            "note": "reunir a las personas socias"
          },
          {
            "es": "aclarar el alcance",
            "note": "precisar qué incluye algo"
          },
          {
            "es": "reconstruir los hechos",
            "note": "ordenar lo ocurrido"
          },
          {
            "es": "escuchar a las partes",
            "note": "recoger versiones distintas"
          },
          {
            "es": "admitir una omisión",
            "note": "reconocer algo no hecho"
          },
          {
            "es": "proponer una salida",
            "note": "ofrecer una solución"
          },
          {
            "es": "fijar un compromiso",
            "note": "concretar una obligación"
          },
          {
            "es": "revisar el procedimiento",
            "note": "mejorar la forma de actuar"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para mediar entre expectativas, valoraciones y alternativas con su significado.",
        "pairs": [
          {
            "left": "convocar una asamblea",
            "right": "reunir a las personas socias"
          },
          {
            "left": "aclarar el alcance",
            "right": "precisar qué incluye algo"
          },
          {
            "left": "reconstruir los hechos",
            "right": "ordenar lo ocurrido"
          },
          {
            "left": "escuchar a las partes",
            "right": "recoger versiones distintas"
          },
          {
            "left": "admitir una omisión",
            "right": "reconocer algo no hecho"
          },
          {
            "left": "proponer una salida",
            "right": "ofrecer una solución"
          },
          {
            "left": "fijar un compromiso",
            "right": "concretar una obligación"
          },
          {
            "left": "revisar el procedimiento",
            "right": "mejorar la forma de actuar"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Recupera acento verbal, grupos compuestos y petición mitigada para que la síntesis no suene como una acusación.",
    "explanation": [
      "Recupera acento verbal, grupos compuestos y petición mitigada para que la síntesis no suene como una acusación.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "La asamblea pide que la dirección publique las cuentas."
      },
      {
        "es": "La técnica esperaba que el sistema funcionara antes de junio."
      },
      {
        "es": "Si hubieran avisado antes, habríamos aplazado la apertura."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de checkpoint: una cooperativa en crisis, ¿qué fragmento se oye?",
          "options": [
            "publicaba",
            "publique",
            "publica"
          ],
          "answer": 1,
          "why": "Petición actual.",
          "audio": "La asamblea pide que la dirección publique las cuentas.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de checkpoint: una cooperativa en crisis, ¿qué fragmento se oye?",
          "options": [
            "funcionara",
            "funcionará",
            "funciona"
          ],
          "answer": 0,
          "why": "Expectativa pasada, no resultado confirmado.",
          "audio": "La técnica esperaba que el sistema funcionara antes de junio.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "La asamblea pide que la dirección publique las cuentas.",
        "tip": "Recupera acento verbal, grupos compuestos y petición mitigada para que la síntesis no suene como una acusación.",
        "voice": "es-ES-f"
      },
      {
        "text": "La técnica esperaba que el sistema funcionara antes de junio.",
        "tip": "Recupera acento verbal, grupos compuestos y petición mitigada para que la síntesis no suene como una acusación.",
        "voice": "es-ES-f"
      },
      {
        "text": "Si hubieran avisado antes, habríamos aplazado la apertura.",
        "tip": "Recupera acento verbal, grupos compuestos y petición mitigada para que la síntesis no suene como una acusación.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Checkpoint: una cooperativa en crisis",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Presidenta",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Técnico",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Responsable",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Gracias por venir. Me alegra que hayamos mantenido el comedor abierto, pero sabemos que hubo esperas inaceptables. Hoy necesito que acordemos una solución provisional y un mensaje para las personas afectadas, sin esperar a que termine la revisión del contrato."
      },
      {
        "speaker": "s2",
        "text": "En abril dije que calculábamos terminar en junio. No aseguré que todas las funciones estuvieran listas para la inauguración. Admito que habría debido explicar mejor la incertidumbre. Si hubiéramos limitado el programa a las reservas individuales, habríamos podido probarlo antes."
      },
      {
        "speaker": "s3",
        "text": "Yo esperaba que alguien nos avisara de ese límite. El personal interpretó la circular como una garantía. Ahora podemos atender reservas por teléfono, siempre que haya una persona dedicada a esa tarea. No quiero que la buena voluntad vuelva a sustituir una distribución realista del trabajo."
      },
      {
        "speaker": "s1",
        "text": "Entiendo. Contrataremos apoyo durante dos semanas y revisaremos después la carga. Sobre la compensación, propongo devolver una parte del importe a los grupos que esperaron. No me parece suficiente decir que sentimos las molestias sin ofrecer una reparación concreta."
      },
      {
        "speaker": "s2",
        "text": "Puedo enviar mañana un calendario con funciones confirmadas y funciones previstas por separado. Necesito que una persona de sala participe en la prueba. No les estoy pidiendo que validen el sistema entero, sino que comprueben tres situaciones frecuentes."
      },
      {
        "speaker": "s3",
        "text": "Participaré si esa hora queda dentro de mi turno. También pediría que el mensaje a los clientes explique qué hemos cambiado. Agradezco que reconozcamos el error; ahora hace falta demostrar que hemos aprendido algo de él."
      },
      {
        "speaker": "s1",
        "text": "Quisiera añadir los datos de la encuesta. Respondieron dieciséis grupos, pero algunos valoraron bien la comida y mal la reserva en la misma respuesta. No podemos dividirlos simplemente en satisfechos e insatisfechos. ¿Cómo comunicaríamos esa información sin exagerar ni ocultar las dificultades?"
      },
      {
        "speaker": "s3",
        "text": "Diría que la comida recibió valoraciones positivas y que la reserva sigue siendo un problema, aclarando cuántas personas respondieron. Sobre el presupuesto, priorizaría el apoyo telefónico. Si atraemos más clientes antes de controlar las reservas, quizá repitamos el fallo. Revisemos las cifras al terminar la primera semana antes de lanzar una campaña."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Córdoba?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Checkpoint: una cooperativa en crisis?",
              "options": [
                "Contar una única versión sin permitir preguntas.",
                "Acordar reparación y reservas provisionales para un comedor",
                "Leer una lista de instrucciones sin responder a nadie."
              ],
              "answer": 1,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Checkpoint: una cooperativa en crisis»?",
              "options": [
                "Las personas aclaran interpretaciones y conservan algunos límites.",
                "Todas repiten exactamente la misma opinión desde el inicio.",
                "Ninguna intervención tiene relación con la anterior."
              ],
              "answer": 0,
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
          "prompt": "Localiza una intervención concreta en «Checkpoint: una cooperativa en crisis».",
          "items": [
            {
              "q": "¿Qué acuerdo concreto se plantea en el audio?",
              "options": [
                "Apoyo contratado durante dos semanas.",
                "Cerrar definitivamente el comedor.",
                "Exigir trabajo fuera de turno."
              ],
              "answer": 0,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Checkpoint: una cooperativa en crisis»?",
              "options": [
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión.",
                "Gracias por venir."
              ],
              "answer": 2,
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
              "prompt": "En «Checkpoint: una cooperativa en crisis», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Participaré si esa hora queda dentro de mi turno. También pediría que el mensaje a los clientes explique qué hemos cambiado. Agradezco que reconozcamos el error; ahora hace falta demostrar que hemos aprendido algo de él.",
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
    "title": "Checkpoint: una cooperativa en crisis: texto para interpretar",
    "genre": "Dossier argumentativo",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Documento A. La cooperativa Horizonte abrió su comedor antes de que estuviera listo el sistema de reservas. En el acta de abril consta que la dirección esperaba que el programa funcionara a principios de junio. En una circular posterior, esa expectativa se convirtió en la afirmación de que funcionaría para la inauguración. No existe, sin embargo, un mensaje de la empresa técnica que garantice ese plazo. Durante la primera semana se duplicaron varias reservas y tres grupos tuvieron que esperar más de una hora.",
      "Documento B. La responsable de sala escribió a las personas socias: «Lamento que hayan tenido que esperar y agradezco que el equipo haya encontrado mesas alternativas». Añadió que, si la dirección hubiera anunciado una apertura de prueba, se habrían aceptado menos reservas. Su correo recibió críticas porque algunas personas lo interpretaron como una acusación contra quienes habían trabajado para inaugurar a tiempo. Ella aclaró que no cuestionaba su esfuerzo, sino la transformación de una previsión en una promesa pública.",
      "Documento C. La presidencia reconoce que habría podido pedir una confirmación por escrito, aunque recuerda que el proveedor también conocía la fecha de apertura. Propone ofrecer una compensación a los grupos afectados y mantener abierto el comedor con reservas telefónicas. La empresa técnica solicita que se reduzcan temporalmente las funciones del programa para poder terminar la parte esencial. El personal de sala acepta ese sistema provisional siempre que no tenga que atender simultáneamente el teléfono y las mesas.",
      "La próxima asamblea deberá decidir qué se comunica a los clientes y cómo se distribuye el trabajo adicional. Una explicación que solo busque culpables dejaría sin resolver las necesidades inmediatas. Pero un mensaje que se limite a celebrar la capacidad de reacción tampoco respondería a las preguntas pendientes. La mediación consiste en conservar esa doble exigencia: reconocer el esfuerzo y pedir cuentas, sin inventar garantías que nadie puede ofrecer todavía.",
      "Anexo de atención. En una encuesta interna respondieron dieciséis de los veinticuatro grupos atendidos esa semana. Nueve valoraron positivamente la comida; siete señalaron dificultades con la reserva. Algunas respuestas incluían ambas observaciones, por lo que no deben sumarse como categorías excluyentes. La encuesta se envió después de ofrecer una compensación y no permite saber cómo habrían respondido quienes no contestaron. El equipo propone utilizarla para detectar aspectos que revisar, sin presentarla como una medida definitiva de satisfacción.",
      "La comisión dispone de un presupuesto limitado: puede contratar apoyo telefónico durante dos semanas o financiar una campaña para recuperar clientes, pero no ambas medidas al mismo tiempo. La primera opción responde al problema operativo; la segunda podría aumentar la demanda antes de resolverlo. Quienes defienden la campaña argumentan que sin ingresos tampoco podrá mantenerse el apoyo. La recomendación final debe explicar esa tensión y prever qué se hará si el número de reservas supera la capacidad del sistema provisional."
    ],
    "glossary": [
      {
        "es": "convocar una asamblea",
        "note": "reunir a las personas socias"
      },
      {
        "es": "aclarar el alcance",
        "note": "precisar qué incluye algo"
      },
      {
        "es": "reconstruir los hechos",
        "note": "ordenar lo ocurrido"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué contradicción reúne el dossier?",
            "options": [
              "Nadie conocía la inauguración.",
              "Una expectativa interna terminó comunicándose como garantía.",
              "La empresa confirmó todas las funciones."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué exige una mediación fiel?",
            "options": [
              "Reconocer el esfuerzo y mantener las responsabilidades.",
              "Eliminar cualquier crítica a la presidencia.",
              "Presentar la hipótesis del técnico como hecho."
            ],
            "answer": 0,
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
            "prompt": "En «Checkpoint: una cooperativa en crisis», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "El problema no se reduce a una avería: una previsión técnica se presentó como un compromiso firme. La empresa admite que no explicó bien la incertidumbre y la presidencia reconoce que no solicitó confirmación escrita. El equipo de sala acepta colaborar si se reserva tiempo dentro de su turno. Recomiendo comunicar estas responsabilidades sin personalizar el conflicto y confirmar por escrito el apoyo temporal. Si se hubiera realizado una apertura de prueba, quizá se habrían detectado antes los fallos; esa posibilidad debe orientar las próximas decisiones.",
            "checklist": [
              "Identifico las dos posiciones sin inventar consenso.",
              "Utilizo una evidencia concreta.",
              "Marco una inferencia como tal."
            ]
          },
          {
            "prompt": "Compara el anexo del checkpoint 5 con las primeras fuentes: identifica una limitación de los datos y una consecuencia práctica para la recomendación. Explica qué detalle conservarías al mediar para otra persona.",
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
          "quote": "Documento A.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "La mediación consiste en conservar esa doble exigencia: reconocer el esfuerzo y pedir cuentas, sin inventar garantías que nadie puede ofrecer todavía.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Cruza el comedor con coordinación, expectativas, reconocimientos e hipótesis: recupera un recurso de cada semana y explica por qué lo eliges.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Córdoba y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Checkpoint: una cooperativa en crisis»,",
              "La",
              "asamblea",
              "pide",
              "que",
              "la",
              "dirección",
              "publique",
              "las",
              "cuentas."
            ],
            "why": "Petición actual."
          },
          {
            "words": [
              "En",
              "«Checkpoint: una cooperativa en crisis»,",
              "Si",
              "hubieran",
              "avisado",
              "antes,",
              "habríamos",
              "aplazado",
              "la",
              "apertura."
            ],
            "why": "Alternativa pasada irreal."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de checkpoint: una cooperativa en crisis; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Lamentamos que ustedes han esperado tanto.",
            "answers": [
              "Lamentamos que ustedes hayan esperado tanto."
            ],
            "why": "La valoración lamentar selecciona subjuntivo."
          },
          {
            "sentence": "El equipo esperaba que el programa funciona en junio.",
            "answers": [
              "El equipo esperaba que el programa funcionara en junio."
            ],
            "why": "Expectativa desde el pasado."
          },
          {
            "sentence": "Si lo habrían probado, habrían detectado fallos.",
            "answers": [
              "Si lo hubieran probado, habrían detectado fallos."
            ],
            "why": "Contrafactual pasada en la condición."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre mediar entre expectativas, valoraciones y alternativas con una postura y una razón; adapta el destinatario.",
            "model": "El problema no se reduce a una avería: una previsión técnica se presentó como un compromiso firme.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Checkpoint: una cooperativa en crisis» sin debilitarla, y responde con una condición verificable.",
            "model": "El problema no se reduce a una avería: una previsión técnica se presentó como un compromiso firme. La empresa admite que no explicó bien la incertidumbre y la presidencia reconoce que no solicitó confirmación escrita. El equipo de sala acepta colaborar si se reserva tiempo dentro de su turno. Recomiendo comunicar estas responsabilidades sin personalizar el conflicto y confirmar por escrito el apoyo temporal. Si se hubiera realizado una apertura de prueba, quizá se habrían detectado antes los fallos; esa posibilidad debe orientar las próximas decisiones.",
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
            "prompt": "Recupera la semana 1 sin abrir su explicación y aplica sus recursos a «Checkpoint: una cooperativa en crisis»: Subjuntivo en oraciones sustantivas; Decir, insistir, recordar: informar o pedir; Trabajo en equipo y liderazgo; Entonación de peticiones indirectas; Pedir, exigir y negociar tareas; Leer un correo de coordinación. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir el modo según el verbo principal: influencia, valoración, emoción, percepción o comunicación. Puedo distinguir me dice que viene (información) de me dice que venga (orden). Puedo hablar de delegar, coordinar, exigir, plazos y responsabilidades. Puedo pedir algo de forma indirecta sin sonar autoritario. Puedo transmitir peticiones y negociar responsabilidades en un equipo. Puedo distinguir información, peticiones y obligaciones en un correo de trabajo.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 2 sin abrir su explicación y aplica sus recursos a «Checkpoint: una cooperativa en crisis»: Imperfecto de subjuntivo y correlación; Como si + imperfecto de subjuntivo; Generaciones y educación familiar; Hablara frente a hablará; Recordar lo que se esperaba de mí; Escuchar una entrevista sobre generaciones. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo aplicar la correlación temporal: me pidió que lo hiciera, me alegró que vinieras. Puedo comparar con situaciones irreales: habla como si lo supiera todo. Puedo hablar de normas, expectativas y conflictos entre generaciones. Puedo distinguir y producir hablara, hablará y hablaría. Puedo contar qué esperaban, pedían o prohibían otras personas en el pasado. Puedo identificar la postura de cada generación en una conversación.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 3 sin abrir su explicación y aplica sus recursos a «Checkpoint: una cooperativa en crisis»: Perfecto y pluscuamperfecto de subjuntivo; Logros, fracasos y aprendizajes; Ritmo en formas compuestas largas; Valorar hechos pasados; Carta de felicitación o pésame. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo valorar hechos terminados: me alegra que hayas llegado, me sorprendió que no hubiera llamado. Puedo hablar de esfuerzo, constancia, frustración, superar y lograr. Puedo decir hubiera estado o habría podido sin cortar el grupo verbal. Puedo valorar algo que ha pasado o había pasado y reaccionar con matices. Puedo escribir un mensaje formal o cercano que valora un hecho.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 4 sin abrir su explicación y aplica sus recursos a «Checkpoint: una cooperativa en crisis»: Condicionales irreales y mixtas; Condicional compuesto; Decisiones y consecuencias; Entonación del reproche; Lamentar y reprochar; Historia alternativa. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo expresar condiciones irreales en presente, en pasado y mixtas. Puedo hablar de lo que habría pasado y reprochar con habrías podido. Puedo hablar de arrepentimiento, oportunidades perdidas y alternativas. Puedo distinguir un reproche de una hipótesis neutra por la entonación. Puedo expresar arrepentimiento, reprochar con tacto y responder a un reproche. Puedo contar cómo habría sido mi vida si una decisión hubiera sido distinta.",
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
    "task": "Escribe un informe de mediación para la asamblea. Cruza los tres documentos con la reunión, distingue acuerdos de propuestas y recomienda dos medidas con responsables. Recupera explícitamente las cuatro semanas anteriores.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Integra cuatro decisiones: distingue información de influencia, sitúa la expectativa en su momento, expresa anterioridad y construye una alternativa irreal. En una mediación no basta transformar verbos: debes conservar quién dijo qué, qué se confirmó y qué sigue siendo una propuesta.",
      "Un informe de crisis necesita una cronología breve, posiciones atribuidas y una recomendación viable. Evita presentar una hipótesis como prueba de culpa. Recupera el contraste dice que viene / dice que venga y las formas esperaba que, me alegra que haya y si hubiera para reconstruir el desacuerdo sin deformarlo.",
      "Cruza el comedor con coordinación, expectativas, reconocimientos e hipótesis: recupera un recurso de cada semana y explica por qué lo eliges."
    ],
    "model": [
      "El conflicto del comedor procede de una diferencia entre previsión y compromiso. La empresa técnica calculaba terminar en junio, mientras que la circular de apertura presentó ese calendario como garantía. El personal de sala esperaba que el sistema funcionara y organizó las reservas sobre esa base. Durante la reunión, la presidencia reconoció que debería haber solicitado una confirmación escrita.",
      "Agradecemos que el equipo haya mantenido el servicio, pero ese esfuerzo no elimina las esperas sufridas por algunos grupos. Si se hubiera realizado una apertura de prueba, quizá se habrían detectado antes las duplicaciones. Esta hipótesis debe orientar futuras decisiones, sin convertirse en una certeza sobre todo lo que habría ocurrido. El problema inmediato exige una reparación y una distribución sostenible del trabajo adicional.",
      "Recomiendo priorizar el apoyo telefónico durante dos semanas y aplazar la campaña comercial. Aumentar la demanda antes de controlar las reservas podría agravar el fallo. La presidencia debe confirmar la contratación y la responsable de sala, acordar un turno específico para probar las funciones esenciales. La empresa enviará un calendario que distinga funciones confirmadas de funciones previstas. Estas responsabilidades deberían quedar registradas en un documento común.",
      "También propongo comunicar una compensación concreta a los grupos afectados. La encuesta interna ayuda a identificar dificultades, pero sus respuestas no representan a todas las personas atendidas ni forman categorías excluyentes. Revisaremos capacidad y resultados al terminar la primera semana. Solo después convendría decidir si hay condiciones suficientes para promover nuevas reservas sin volver a prometer un servicio que todavía no podemos garantizar."
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
        "prompt": "Presenta el caso de «Checkpoint: una cooperativa en crisis» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "El problema no se reduce a una avería: una previsión técnica se presentó como un compromiso firme. La empresa admite que no explicó bien la incertidumbre y la presidencia reconoce que no solicitó confirmación escrita. El equipo de sala acepta colaborar si se reserva tiempo dentro de su turno. Recomiendo comunicar estas responsabilidades sin personalizar el conflicto y confirmar por escrito el apoyo temporal. Si se hubiera realizado una apertura de prueba, quizá se habrían detectado antes los fallos; esa posibilidad debe orientar las próximas decisiones.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de mediar entre expectativas, valoraciones y alternativas. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Checkpoint: una cooperativa en crisis» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Córdoba; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre mediar entre expectativas, valoraciones y alternativas; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Checkpoint: una cooperativa en crisis», ¿qué resume mejor el propósito?",
        "options": [
          "Evitar cualquier intercambio entre personas.",
          "Acordar reparación y reservas provisionales para un comedor",
          "Sustituir toda evidencia por una opinión rotunda."
        ],
        "answer": 1,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "En abril dije que calculábamos terminar en junio. No aseguré que todas las funciones estuvieran listas para la inauguración. Admito que habría debido explicar mejor la incertidumbre. Si hubiéramos limitado el programa a las reservas individuales, habríamos podido probarlo antes.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Técnico en «Checkpoint: una cooperativa en crisis», ¿qué intervención reconoces?",
        "options": [
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "En abril dije que calculábamos terminar en junio",
          "No hay ninguna condición pendiente y todas las partes aceptaron."
        ],
        "answer": 1,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "El personal agradece que la dirección ___ reconocido el fallo.",
        "answers": [
          [
            "haya"
          ]
        ],
        "why": "Valoración presente y hecho anterior."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «La responsable: «Que nadie acepte más reservas».» Transmite con pide que.",
        "model": "La responsable pide que nadie acepte más reservas.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Esperábamos que ustedes pueden explicar la demora.",
        "answers": [
          "Esperábamos que ustedes pudieran explicar la demora."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Checkpoint: una cooperativa en crisis».",
        "model": "El problema no se reduce a una avería: una previsión técnica se presentó como un compromiso firme. La empresa admite que no explicó bien la incertidumbre y la presidencia reconoce que no solicitó confirmación escrita. El equipo de sala acepta colaborar si se reserva tiempo dentro de su turno. Recomiendo comunicar estas responsabilidades sin personalizar el conflicto y confirmar por escrito el apoyo temporal. Si se hubiera realizado una apertura de prueba, quizá se habrían detectado antes los fallos; esa posibilidad debe orientar las próximas decisiones.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre mediar entre expectativas, valoraciones y alternativas; concede una razón y conserva tu argumento.",
        "model": "El problema no se reduce a una avería: una previsión técnica se presentó como un compromiso firme. La empresa admite que no explicó bien la incertidumbre y la presidencia reconoce que no solicitó confirmación escrita. El equipo de sala acepta colaborar si se reserva tiempo dentro de su turno. Recomiendo comunicar estas responsabilidades sin personalizar el conflicto y confirmar por escrito el apoyo temporal. Si se hubiera realizado una apertura de prueba, quizá se habrían detectado antes los fallos; esa posibilidad debe orientar las próximas decisiones.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 5 a un mensaje cercano y a un informe formal.",
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
      "Puedo mediar entre expectativas, valoraciones y alternativas.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Cruza el comedor con coordinación, expectativas, reconocimientos e hipótesis: recupera un recurso de cada semana y explica por qué lo eliges.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
