import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w03: Module = {
  "id": "b2-03",
  "level": "b2",
  "week": 3,
  "kind": "core",
  "title": "Reconocer lo que se ha logrado",
  "subtitle": "Valorar resultados sin borrar las dificultades.",
  "stop": {
    "place": "Santa Fe",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.subjuntivo-compuestos",
    "b2.voc.logros-fracasos",
    "b2.pron.compuestos-largos",
    "b2.fun.valorar-hechos",
    "b2.wri.carta-felicitacion"
  ],
  "reviewObjectives": [
    "b2.gram.subjuntivo-imperfecto-usos",
    "b2.gram.como-si",
    "b2.voc.familia-generaciones",
    "b2.pron.acento-ra-ra",
    "b2.fun.recordar-expectativas",
    "b2.lis.entrevista-generaciones"
  ],
  "prerequisites": [
    "b2-02"
  ],
  "goal": {
    "canDo": "Puedo valorar resultados sin borrar las dificultades con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: reconocer un logro sin ocultar su coste.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: valorar resultados sin borrar las dificultades. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Valorar resultados sin borrar las dificultades",
        "body": [
          "El perfecto de subjuntivo, haya trabajado, sitúa un hecho anterior a una valoración presente. El pluscuamperfecto, hubiera trabajado, lo sitúa antes de un punto pasado. Ambos combinan haber en subjuntivo y participio invariable: hayan llegado, no hayan llegados."
        ],
        "examples": [
          {
            "es": "Me alegra que ustedes hayan terminado el curso.",
            "note": "Anterioridad respecto a una valoración presente."
          },
          {
            "es": "Nos sorprendió que ya hubieran cerrado el taller.",
            "note": "Cierre anterior a una reacción pasada; sujeto plural."
          },
          {
            "es": "Lamento que no hayas recibido mi mensaje ayer.",
            "note": "Valoración presente de un hecho anterior; tú."
          }
        ],
        "mistakes": [
          {
            "wrong": "Me alegra que hayan terminados las obras.",
            "right": "Me alegra que hayan terminado las obras.",
            "why": "Con haber el participio es invariable."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Valorar no equivale a dudar de la realidad. Me alegra que hayas terminado puede referirse a un hecho confirmado. En mensajes de felicitación o de apoyo, reconoce acciones concretas; evita imponer emociones a la otra persona. El registro depende de la relación, no de acumular fórmulas solemnes."
        ],
        "examples": [
          {
            "es": "Me alegra que ustedes hayan terminado el curso.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Lamento que no hayas recibido mi mensaje ayer.",
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
        "prompt": "Completa estas decisiones lingüísticas de reconocer lo que se ha logrado; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Me alegra que ustedes ___ terminado el curso.",
            "answers": [
              [
                "hayan"
              ]
            ],
            "why": "Anterioridad respecto a una valoración presente."
          },
          {
            "q": "Nos sorprendió que ya ___ cerrado el taller.",
            "answers": [
              [
                "hubieran"
              ]
            ],
            "why": "Cierre anterior a una reacción pasada; sujeto plural."
          },
          {
            "q": "Lamento que no ___ recibido mi mensaje ayer.",
            "answers": [
              [
                "hayas"
              ]
            ],
            "why": "Valoración presente de un hecho anterior; tú."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Han reabierto la biblioteca y me alegro.» Une con me alegra que.",
            "model": "Me alegra que hayan reabierto la biblioteca.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Las voluntarias se habían marchado y eso me sorprendió.» Une con me sorprendió que.",
            "model": "Me sorprendió que las voluntarias se hubieran marchado.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «No respondí a tu carta y lo lamento ahora.» Expresa una valoración presente del hecho pasado.",
            "model": "Lamento que no haya respondido a tu carta.",
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
        "title": "Valorar resultados sin borrar las dificultades",
        "items": [
          {
            "es": "reconocer un esfuerzo",
            "note": "valorar el trabajo realizado"
          },
          {
            "es": "superar un obstáculo",
            "note": "resolver una dificultad"
          },
          {
            "es": "alcanzar una meta",
            "note": "conseguir un objetivo"
          },
          {
            "es": "quedarse a las puertas",
            "note": "estar cerca de lograrlo"
          },
          {
            "es": "encajar un revés",
            "note": "afrontar un resultado adverso"
          },
          {
            "es": "mostrar constancia",
            "note": "mantener el esfuerzo"
          },
          {
            "es": "expresar condolencias",
            "note": "acompañar ante una pérdida"
          },
          {
            "es": "evitar lugares comunes",
            "note": "no repetir frases vacías"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para valorar resultados sin borrar las dificultades con su significado.",
        "pairs": [
          {
            "left": "reconocer un esfuerzo",
            "right": "valorar el trabajo realizado"
          },
          {
            "left": "superar un obstáculo",
            "right": "resolver una dificultad"
          },
          {
            "left": "alcanzar una meta",
            "right": "conseguir un objetivo"
          },
          {
            "left": "quedarse a las puertas",
            "right": "estar cerca de lograrlo"
          },
          {
            "left": "encajar un revés",
            "right": "afrontar un resultado adverso"
          },
          {
            "left": "mostrar constancia",
            "right": "mantener el esfuerzo"
          },
          {
            "left": "expresar condolencias",
            "right": "acompañar ante una pérdida"
          },
          {
            "left": "evitar lugares comunes",
            "right": "no repetir frases vacías"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Mantén unidos haya terminado y hubiera podido continuar; coloca la pausa entre ideas, no dentro del grupo verbal.",
    "explanation": [
      "Mantén unidos haya terminado y hubiera podido continuar; coloca la pausa entre ideas, no dentro del grupo verbal.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Me alegra que ustedes hayan terminado el curso."
      },
      {
        "es": "Nos sorprendió que ya hubieran cerrado el taller."
      },
      {
        "es": "Lamento que no hayas recibido mi mensaje ayer."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de reconocer lo que se ha logrado, ¿qué fragmento se oye?",
          "options": [
            "hayan",
            "habían",
            "habrán"
          ],
          "answer": 0,
          "why": "Anterioridad respecto a una valoración presente.",
          "audio": "Me alegra que ustedes hayan terminado el curso.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de reconocer lo que se ha logrado, ¿qué fragmento se oye?",
          "options": [
            "hubieron",
            "habrían",
            "hubieran"
          ],
          "answer": 2,
          "why": "Cierre anterior a una reacción pasada; sujeto plural.",
          "audio": "Nos sorprendió que ya hubieran cerrado el taller.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Me alegra que ustedes hayan terminado el curso.",
        "tip": "Mantén unidos haya terminado y hubiera podido continuar; coloca la pausa entre ideas, no dentro del grupo verbal.",
        "voice": "es-ES-f"
      },
      {
        "text": "Nos sorprendió que ya hubieran cerrado el taller.",
        "tip": "Mantén unidos haya terminado y hubiera podido continuar; coloca la pausa entre ideas, no dentro del grupo verbal.",
        "voice": "es-ES-f"
      },
      {
        "text": "Lamento que no hayas recibido mi mensaje ayer.",
        "tip": "Mantén unidos haya terminado y hubiera podido continuar; coloca la pausa entre ideas, no dentro del grupo verbal.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Reconocer lo que se ha logrado",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Presentadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Marta",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Raúl",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "La biblioteca vuelve a abrir, pero la celebración ha provocado debate. Marta, usted coordinó el proyecto. ¿Por qué decidió mencionar a las voluntarias que se habían marchado en un acto que muchos esperaban que fuera únicamente festivo?"
      },
      {
        "speaker": "s2",
        "text": "Porque me alegra que hayamos recuperado el espacio, pero no me parece justo que olvidemos su trabajo. Cuando revisé las actas, me sorprendió que nadie hubiera registrado sus advertencias sobre los turnos. Habían avisado del problema varios meses antes."
      },
      {
        "speaker": "s3",
        "text": "Yo fui uno de los que se sintieron incómodos. Habíamos trabajado muchísimo y pensé que nos estaban reprochando no haber hecho suficiente. Después entendí que reconocer un error colectivo no significa despreciar el esfuerzo de cada persona. Aun así, habría preferido otra ocasión."
      },
      {
        "speaker": "s1",
        "text": "¿Han recibido alguna respuesta de las antiguas voluntarias? Pregunto porque a veces un homenaje público responde más a la necesidad de quienes lo ofrecen que a lo que desean quienes lo reciben."
      },
      {
        "speaker": "s2",
        "text": "Una nos escribió que agradecía que hubiéramos nombrado las tareas y no solo la buena voluntad. La otra no ha contestado, y respetamos que no lo haga. No queremos convertir el reconocimiento en una nueva petición de trabajo gratuito."
      },
      {
        "speaker": "s3",
        "text": "A mí me ha servido para revisar cómo felicito. Antes decía que todo había salido perfecto. Ahora prefiero señalar lo que valoro y preguntar qué habría que mejorar. Es menos brillante, quizá, pero permite una conversación más honesta sobre el futuro de la biblioteca."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Santa Fe?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Reconocer lo que se ha logrado?",
              "options": [
                "Reconocer un logro sin ocultar su coste",
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas."
              ],
              "answer": 0,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Reconocer lo que se ha logrado»?",
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
          "prompt": "Localiza una intervención concreta en «Reconocer lo que se ha logrado».",
          "items": [
            {
              "q": "¿Qué sorprendió a Marta al leer las actas?",
              "options": [
                "Todas las tareas estaban pagadas.",
                "La biblioteca abría cada mañana.",
                "No se habían registrado advertencias anteriores."
              ],
              "answer": 2,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Reconocer lo que se ha logrado»?",
              "options": [
                "No hay información que podamos discutir en esta reunión.",
                "La biblioteca vuelve a abrir, pero la celebración ha provocado debate.",
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
              "prompt": "En «Reconocer lo que se ha logrado», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "A mí me ha servido para revisar cómo felicito. Antes decía que todo había salido perfecto. Ahora prefiero señalar lo que valoro y preguntar qué habría que mejorar. Es menos brillante, quizá, pero permite una conversación más honesta sobre el futuro de la biblioteca.",
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
    "title": "Reconocer lo que se ha logrado: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "El centro cultural celebró el viernes la reapertura de su biblioteca, cerrada durante ocho meses por una avería. En los discursos se habló de éxito colectivo, pero la coordinadora dedicó parte de su intervención a quienes ya no estaban. Dos voluntarias habían dejado el proyecto porque no podían seguir dedicándole tardes enteras sin compensación. «Me alegra que hayamos llegado hasta aquí», dijo, «y lamento que no hayamos encontrado antes una forma más justa de repartir el esfuerzo». El aplauso fue menos inmediato que en otras ocasiones.",
      "Un vecino comentó después que aquella referencia había estropeado la celebración. Según él, felicitar consiste en destacar lo positivo y dejar los problemas para otra reunión. La coordinadora discrepó: le había sorprendido que algunas personas hubieran interpretado la reapertura como prueba de que todo se había hecho bien. Reconocer el resultado sin mencionar su coste habría convertido una historia compleja en una lección engañosa sobre la voluntad. No quería restar mérito a nadie, sino evitar que el sacrificio se presentara como una obligación natural.",
      "Las antiguas voluntarias recibieron un mensaje personal. En él se reconocían sus tareas concretas y se explicaban los cambios previstos: turnos más breves, formación compartida y un pequeño presupuesto para gastos. No se les pedía que regresaran ni que respondieran con entusiasmo. Una de ellas agradeció que el mensaje no comenzara con la frase «sin ustedes nada habría sido posible», que habría resultado afectuosa, pero también difícil de conciliar con la falta de apoyo que había sentido.",
      "La biblioteca abre ahora tres tardes por semana, una menos de las que se habían anunciado inicialmente. Para algunos vecinos, esa reducción parece una derrota; para otros, demuestra que el proyecto ha aprendido a reconocer sus límites. Celebrar un logro no exige afirmar que ha sido perfecto. A veces el reconocimiento más convincente consiste en explicar qué se consiguió, qué se perdió por el camino y qué no debería repetirse."
    ],
    "glossary": [
      {
        "es": "reconocer un esfuerzo",
        "note": "valorar el trabajo realizado"
      },
      {
        "es": "superar un obstáculo",
        "note": "resolver una dificultad"
      },
      {
        "es": "alcanzar una meta",
        "note": "conseguir un objetivo"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Cuál es la tesis central?",
            "options": [
              "Reconocer un logro puede incluir su coste.",
              "Toda celebración debe cancelarse.",
              "Las voluntarias tienen que regresar."
            ],
            "answer": 0,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Por qué no se exige respuesta al mensaje?",
            "options": [
              "La dirección desconoce los nombres.",
              "El proyecto ya no necesita voluntariado.",
              "El reconocimiento no debe crear otra obligación."
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
            "prompt": "En «Reconocer lo que se ha logrado», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Estimada comisión: me alegra que hayan recuperado la biblioteca y quisiera reconocer el trabajo de catalogación realizado durante estos meses. También valoro que hayan revisado los turnos después de escuchar las dificultades del equipo. Cuando conocí el proyecto, me sorprendió que se hubiera mantenido con tan pocos recursos. Espero que esta nueva etapa permita repartir mejor las responsabilidades. Reciban mi agradecimiento, sin que este mensaje implique ninguna petición adicional.",
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
          "quote": "El centro cultural celebró el viernes la reapertura de su biblioteca, cerrada durante ocho meses por una avería.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "A veces el reconocimiento más convincente consiste en explicar qué se consiguió, qué se perdió por el camino y qué no debería repetirse.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Recupera la entrevista de generaciones: cuenta qué esperaban que hicieras y valora ahora un resultado anterior con haya o hubiera.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Santa Fe y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Reconocer lo que se ha logrado»,",
              "Me",
              "alegra",
              "que",
              "ustedes",
              "hayan",
              "terminado",
              "el",
              "curso."
            ],
            "why": "Anterioridad respecto a una valoración presente."
          },
          {
            "words": [
              "En",
              "«Reconocer lo que se ha logrado»,",
              "Lamento",
              "que",
              "no",
              "hayas",
              "recibido",
              "mi",
              "mensaje",
              "ayer."
            ],
            "why": "Valoración presente de un hecho anterior; tú."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de reconocer lo que se ha logrado; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Me alegra que hayan terminados las obras.",
            "answers": [
              "Me alegra que hayan terminado las obras."
            ],
            "why": "Con haber el participio es invariable."
          },
          {
            "sentence": "Le sorprendió que ya habían cerrado cuando llegó.",
            "answers": [
              "Le sorprendió que ya hubieran cerrado cuando llegó."
            ],
            "why": "Valoración pasada de un hecho anterior."
          },
          {
            "sentence": "Lamento que no hayas escribido.",
            "answers": [
              "Lamento que no hayas escrito."
            ],
            "why": "Escribir tiene participio irregular."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre valorar resultados sin borrar las dificultades con una postura y una razón; adapta el destinatario.",
            "model": "Estimada comisión: me alegra que hayan recuperado la biblioteca y quisiera reconocer el trabajo de catalogación realizado durante estos meses.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Reconocer lo que se ha logrado» sin debilitarla, y responde con una condición verificable.",
            "model": "Estimada comisión: me alegra que hayan recuperado la biblioteca y quisiera reconocer el trabajo de catalogación realizado durante estos meses. También valoro que hayan revisado los turnos después de escuchar las dificultades del equipo. Cuando conocí el proyecto, me sorprendió que se hubiera mantenido con tan pocos recursos. Espero que esta nueva etapa permita repartir mejor las responsabilidades. Reciban mi agradecimiento, sin que este mensaje implique ninguna petición adicional.",
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
            "prompt": "Recupera la semana 2 sin abrir su explicación y aplica sus recursos a «Reconocer lo que se ha logrado»: Imperfecto de subjuntivo y correlación; Como si + imperfecto de subjuntivo; Generaciones y educación familiar; Hablara frente a hablará; Recordar lo que se esperaba de mí; Escuchar una entrevista sobre generaciones. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo aplicar la correlación temporal: me pidió que lo hiciera, me alegró que vinieras. Puedo comparar con situaciones irreales: habla como si lo supiera todo. Puedo hablar de normas, expectativas y conflictos entre generaciones. Puedo distinguir y producir hablara, hablará y hablaría. Puedo contar qué esperaban, pedían o prohibían otras personas en el pasado. Puedo identificar la postura de cada generación en una conversación.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Contrasta tu recuperación de la semana 2 con otra posible formulación en «Reconocer lo que se ha logrado»: cambia una forma y explica qué efecto produce para el destinatario.",
            "model": "Estimada comisión: me alegra que hayan recuperado la biblioteca y quisiera reconocer el trabajo de catalogación realizado durante estos meses. También valoro que hayan revisado los turnos después de escuchar las dificultades del equipo. Cuando conocí el proyecto, me sorprendió que se hubiera mantenido con tan pocos recursos. Espero que esta nueva etapa permita repartir mejor las responsabilidades. Reciban mi agradecimiento, sin que este mensaje implique ninguna petición adicional.",
            "checklist": [
              "Comparo dos formas con intención distinta.",
              "Explico si cambia información, registro o grado de certeza."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe una carta de reconocimiento a una asociación tras un proyecto difícil. Distingue logros confirmados, costes y aprendizajes; adapta el grado de cercanía y evita exigir gratitud o participación futura.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "El perfecto de subjuntivo, haya trabajado, sitúa un hecho anterior a una valoración presente. El pluscuamperfecto, hubiera trabajado, lo sitúa antes de un punto pasado. Ambos combinan haber en subjuntivo y participio invariable: hayan llegado, no hayan llegados.",
      "Valorar no equivale a dudar de la realidad. Me alegra que hayas terminado puede referirse a un hecho confirmado. En mensajes de felicitación o de apoyo, reconoce acciones concretas; evita imponer emociones a la otra persona. El registro depende de la relación, no de acumular fórmulas solemnes.",
      "Recupera la entrevista de generaciones: cuenta qué esperaban que hicieras y valora ahora un resultado anterior con haya o hubiera."
    ],
    "model": [
      "Estimada comisión: me alegra que hayan recuperado la biblioteca y quisiera reconocer especialmente el trabajo de catalogación realizado durante estos meses. Gracias a ese esfuerzo, las personas usuarias podrán encontrar materiales que antes permanecían en cajas sin identificar. También valoro que hayan mantenido actividades de lectura mientras el edificio estaba cerrado, aunque eso haya exigido reorganizar espacios y horarios.",
      "El resultado merece celebrarse, pero no quisiera presentarlo como si el proceso hubiera sido perfecto. Cuando conocí las dificultades del voluntariado, me sorprendió que se hubiera sostenido una carga tan grande con tan pocos recursos. Me parece acertado que ahora se revisen los turnos y se reconozcan las advertencias que no fueron atendidas a tiempo. Nombrar esos problemas no reduce el mérito del trabajo; permite comprenderlo mejor.",
      "Espero que la nueva etapa ofrezca un reparto más justo de responsabilidades. Abrir una tarde menos puede parecer una limitación, pero también puede garantizar que el proyecto continúe sin depender del agotamiento de unas pocas personas. Sería útil explicar públicamente ese criterio, de modo que el vecindario entienda la relación entre horario, recursos y calidad de atención.",
      "Reciban mi agradecimiento por lo conseguido y por la disposición a aprender de lo ocurrido. Este mensaje no pretende pedir a nadie que regrese al proyecto ni que asuma nuevas tareas. Quienes se apartaron también contribuyeron a construir esta biblioteca y merecen que su decisión sea respetada. Les deseo una reapertura sostenible y una relación abierta con todas las personas que hicieron posible el camino."
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
        "prompt": "Presenta el caso de «Reconocer lo que se ha logrado» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Estimada comisión: me alegra que hayan recuperado la biblioteca y quisiera reconocer el trabajo de catalogación realizado durante estos meses. También valoro que hayan revisado los turnos después de escuchar las dificultades del equipo. Cuando conocí el proyecto, me sorprendió que se hubiera mantenido con tan pocos recursos. Espero que esta nueva etapa permita repartir mejor las responsabilidades. Reciban mi agradecimiento, sin que este mensaje implique ninguna petición adicional.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de valorar resultados sin borrar las dificultades. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Reconocer lo que se ha logrado» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Santa Fe; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre valorar resultados sin borrar las dificultades; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Reconocer lo que se ha logrado», ¿qué resume mejor el propósito?",
        "options": [
          "Reconocer un logro sin ocultar su coste",
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas."
        ],
        "answer": 0,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Porque me alegra que hayamos recuperado el espacio, pero no me parece justo que olvidemos su trabajo. Cuando revisé las actas, me sorprendió que nadie hubiera registrado sus advertencias sobre los turnos. Habían avisado del problema varios meses antes.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Marta en «Reconocer lo que se ha logrado», ¿qué intervención reconoces?",
        "options": [
          "Porque me alegra que hayamos recuperado el espacio, pero no me parece justo que olvidemos su trabajo",
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto."
        ],
        "answer": 0,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Me entristece que el grupo no ___ podido asistir.",
        "answers": [
          [
            "haya"
          ]
        ],
        "why": "Valoración actual de un hecho anterior."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Antes de la ceremonia ya habían cancelado el viaje y eso nos sorprendió.» Comienza con Nos sorprendió que.",
        "model": "Nos sorprendió que ya hubieran cancelado el viaje antes de la ceremonia.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Me alegra que hayas volvido al proyecto.",
        "answers": [
          "Me alegra que hayas vuelto al proyecto."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Reconocer lo que se ha logrado».",
        "model": "Estimada comisión: me alegra que hayan recuperado la biblioteca y quisiera reconocer el trabajo de catalogación realizado durante estos meses. También valoro que hayan revisado los turnos después de escuchar las dificultades del equipo. Cuando conocí el proyecto, me sorprendió que se hubiera mantenido con tan pocos recursos. Espero que esta nueva etapa permita repartir mejor las responsabilidades. Reciban mi agradecimiento, sin que este mensaje implique ninguna petición adicional.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre valorar resultados sin borrar las dificultades; concede una razón y conserva tu argumento.",
        "model": "Estimada comisión: me alegra que hayan recuperado la biblioteca y quisiera reconocer el trabajo de catalogación realizado durante estos meses. También valoro que hayan revisado los turnos después de escuchar las dificultades del equipo. Cuando conocí el proyecto, me sorprendió que se hubiera mantenido con tan pocos recursos. Espero que esta nueva etapa permita repartir mejor las responsabilidades. Reciban mi agradecimiento, sin que este mensaje implique ninguna petición adicional.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 3 a un mensaje cercano y a un informe formal.",
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
      "Puedo valorar resultados sin borrar las dificultades.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Recupera la entrevista de generaciones: cuenta qué esperaban que hicieras y valora ahora un resultado anterior con haya o hubiera.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
