import type { Module } from "../../types";

export const b1w02: Module = {
  "id": "b1-02",
  "level": "b1",
  "week": 2,
  "kind": "core",
  "title": "La noticia y sus versiones",
  "subtitle": "Distinguir contexto, hechos confirmados y consecuencias de un suceso.",
  "stop": {
    "place": "Bogotá",
    "country": "Colombia"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.contraste-pasados",
    "b1.voc.noticias-sucesos",
    "b1.pron.habla-rapida",
    "b1.fun.reaccionar-relato",
    "b1.read.cronica",
    "b1.pron.reducciones-preposiciones",
    "b1.gram.referencia-nominal"
  ],
  "reviewObjectives": [
    "b1.gram.pluscuamperfecto",
    "b1.disc.marcadores-relato",
    "b1.voc.viajes-imprevistos",
    "b1.pron.entonacion-narrativa",
    "b1.fun.narrar-viaje",
    "b1.lis.anecdota-radio"
  ],
  "prerequisites": [
    "b1-01"
  ],
  "goal": {
    "canDo": "Puedo distinguir contexto, hechos confirmados y consecuencias de un suceso.",
    "steps": [
      "Reconstruye la situación a partir del audio y la lectura.",
      "Relaciona las formas con una intención y comprueba tus elecciones.",
      "Prepara un texto revisado y una intervención con preguntas.",
      "Lleva a clase una propuesta propia y una duda concreta."
    ]
  },
  "theory": {
    "intro": "La misión de esta semana: Distinguir contexto, hechos confirmados y consecuencias de un suceso.",
    "parts": [
      {
        "heading": "Forma y significado",
        "body": [
          "El indefinido delimita hechos terminados; el imperfecto describe circunstancias o hábitos; el pluscuamperfecto presenta antecedentes. El perfecto compuesto conecta una experiencia con un período abierto para quien habla. Su distribución varía entre regiones: no conviertas hoy en una regla automática."
        ],
        "examples": [
          {
            "es": "Ayer rescataron a dos excursionistas."
          },
          {
            "es": "Llovía y el sendero estaba cerrado."
          },
          {
            "es": "Los vecinos habían avisado antes."
          }
        ],
        "mistakes": [
          {
            "wrong": "Los equipos han llegados esta mañana.",
            "right": "Los equipos han llegado esta mañana.",
            "why": "El participio compuesto no concuerda con el sujeto."
          }
        ]
      },
      {
        "heading": "Organizar la comunicación",
        "body": [
          "Una crónica distingue lo que ocurrió de lo que un testigo cree que ocurrió. Cita la fuente y reconoce lo que no sabes. Al escuchar relatos espontáneos puedes encontrar pa por para; es una reducción informal, no una forma que debas imitar ni escribir en una noticia."
        ],
        "examples": [
          {
            "es": "Esta semana hemos recibido tres avisos."
          },
          {
            "es": "¡Qué susto! Menos mal que llegaron."
          },
          {
            "es": "El testigo dijo que no había visto el inicio."
          }
        ]
      },
      {
        "heading": "Género, número y referencia nominal",
        "body": [
          "El artículo permite presentar y recuperar un referente: una testigo contó lo ocurrido; la testigo volvió después. Persona y víctima son femeninos gramaticales aunque designen a un hombre; testigo admite el testigo y la testigo. Mantén la concordancia con el nombre y revisa plurales como ley → leyes."
        ],
        "examples": [
          {
            "es": "Una testigo llamó; la testigo esperó al equipo."
          },
          {
            "es": "La víctima estaba tranquila: era un vecino del barrio."
          },
          {
            "es": "Las leyes y los avisos tienen funciones diferentes."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "b1-02-forms",
        "type": "gap",
        "prompt": "Completa estas situaciones de «La noticia y sus versiones» con la forma que expresa la relación indicada.",
        "items": [
          {
            "q": "Antes del rescate, los vecinos ya ___ a emergencias.",
            "answers": [
              [
                "habían llamado"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "El martes el equipo ___ a los senderistas.",
            "answers": [
              [
                "encontró"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Cuando salieron, todavía ___ mucho viento.",
            "answers": [
              [
                "hacía"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          }
        ],
        "bank": [
          "habían llamado",
          "encontró",
          "hacía"
        ]
      },
      {
        "id": "b1-02-repair",
        "type": "error",
        "prompt": "Revisa la coherencia y la forma en estas frases del caso de la semana.",
        "items": [
          {
            "sentence": "Los equipos han llegados esta mañana.",
            "answers": [
              "Los equipos han llegado esta mañana."
            ],
            "why": "El participio compuesto no concuerda con el sujeto."
          },
          {
            "sentence": "Antes del aviso, ya han cerrado el camino el lunes anterior.",
            "answers": [
              "Antes del aviso, ya habían cerrado el camino el lunes anterior."
            ],
            "why": "El cierre es anterior a otro momento pasado."
          },
          {
            "sentence": "Mientras buscaban, encontraron a los heridos mañana.",
            "answers": [
              "Mientras buscaban, encontraron a los heridos ayer."
            ],
            "why": "La referencia debe ser coherente con el relato pasado."
          }
        ]
      },
      {
        "id": "b1-02-referencia-nominal",
        "type": "gap",
        "prompt": "Aplica género, número y referencia nominal a la misión de esta semana.",
        "bank": [
          "víctima",
          "el",
          "leyes"
        ],
        "items": [
          {
            "q": "La ___ estaba tranquila; era un hombre de cuarenta años.",
            "answers": [
              [
                "víctima"
              ]
            ],
            "why": "El artículo permite presentar y recuperar un referente: una testigo contó lo ocurrido; la testigo volvió después. Persona y víctima son femeninos gramaticales aunque designen a un hombre; testigo admite el testigo y la testigo. Mantén la concordancia con el nombre y revisa plurales como ley → leyes."
          },
          {
            "q": "Un testigo llegó y después ___ testigo habló con el equipo.",
            "answers": [
              [
                "el"
              ]
            ],
            "why": "El artículo permite presentar y recuperar un referente: una testigo contó lo ocurrido; la testigo volvió después. Persona y víctima son femeninos gramaticales aunque designen a un hombre; testigo admite el testigo y la testigo. Mantén la concordancia con el nombre y revisa plurales como ley → leyes."
          },
          {
            "q": "El plural de ley es ___.",
            "answers": [
              [
                "leyes"
              ]
            ],
            "why": "El artículo permite presentar y recuperar un referente: una testigo contó lo ocurrido; la testigo volvió después. Persona y víctima son femeninos gramaticales aunque designen a un hombre; testigo admite el testigo y la testigo. Mantén la concordancia con el nombre y revisa plurales como ley → leyes."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión junto a su situación de uso; reutiliza al menos cuatro en tu producción.",
    "groups": [
      {
        "title": "La noticia y sus versiones · acciones y recursos",
        "items": [
          {
            "es": "un testigo",
            "note": "persona que presenció un hecho"
          },
          {
            "es": "confirmar una versión",
            "note": "comprobar un relato con datos"
          },
          {
            "es": "resultar herido",
            "note": "sufrir una lesión"
          },
          {
            "es": "dar aviso",
            "note": "comunicar una emergencia"
          }
        ]
      },
      {
        "title": "Matices para esta misión",
        "items": [
          {
            "es": "poner a salvo",
            "note": "llevar fuera del peligro"
          },
          {
            "es": "cortar el acceso",
            "note": "impedir el paso"
          },
          {
            "es": "según la fuente",
            "note": "indicar de dónde viene la información"
          },
          {
            "es": "menos mal",
            "note": "expresar alivio por un resultado"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-02-lexis",
        "type": "match",
        "prompt": "Relaciona expresiones de «La noticia y sus versiones» con su significado en este contexto.",
        "pairs": [
          {
            "left": "un testigo",
            "right": "persona que presenció un hecho"
          },
          {
            "left": "confirmar una versión",
            "right": "comprobar un relato con datos"
          },
          {
            "left": "resultar herido",
            "right": "sufrir una lesión"
          },
          {
            "left": "dar aviso",
            "right": "comunicar una emergencia"
          },
          {
            "left": "poner a salvo",
            "right": "llevar fuera del peligro"
          },
          {
            "left": "cortar el acceso",
            "right": "impedir el paso"
          },
          {
            "left": "según la fuente",
            "right": "indicar de dónde viene la información"
          },
          {
            "left": "menos mal",
            "right": "expresar alivio por un resultado"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Reconocer enlaces y reducciones sin exigir una variedad",
    "explanation": [
      "Escucha enlaces entre vocales y reconoce para frente a pa en una cita informal. Del y al son contracciones escritas normales; pa y pa’l no se exigen en tu producción formal.",
      "Escucha la síntesis como apoyo para percibir palabras y grupos. Compara después tu producción con la comprensión de otra persona; no hay evaluación automática ni demostración regional verificada."
    ],
    "examples": [
      {
        "es": "Ayer rescataron a dos excursionistas."
      },
      {
        "es": "Llovía y el sendero estaba cerrado."
      },
      {
        "es": "Los vecinos habían avisado antes."
      }
    ],
    "perceive": {
      "id": "b1-02-perception",
      "type": "listen",
      "prompt": "Escucha antes de elegir qué secuencia reconoces; después repítela agrupando el sentido.",
      "items": [
        {
          "q": "Percepción 1: ¿qué reconoces al escuchar el fragmento de «La noticia y sus versiones»?",
          "options": [
            "Se reduce para en habla informal",
            "Se dice para con todas sus sílabas"
          ],
          "answer": 0,
          "audio": "Voy pa allá después.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        },
        {
          "q": "Percepción 2: ¿qué reconoces al escuchar el fragmento de «La noticia y sus versiones»?",
          "options": [
            "Se oyen a el y de el separados",
            "Se oyen al y del"
          ],
          "answer": 1,
          "audio": "Voy al centro y vuelvo del mercado.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        }
      ]
    },
    "produce": [
      {
        "text": "Ayer rescataron a dos excursionistas.",
        "tip": "Escucha enlaces entre vocales y reconoce para frente a pa en una cita informal. Del y al son contracciones escritas normales; pa y pa’l no se exigen en tu producción formal.",
        "voice": "es-ES-f"
      },
      {
        "text": "Llovía y el sendero estaba cerrado.",
        "tip": "Escucha enlaces entre vocales y reconoce para frente a pa en una cita informal. Del y al son contracciones escritas normales; pa y pa’l no se exigen en tu producción formal.",
        "voice": "es-ES-f"
      },
      {
        "text": "Los vecinos habían avisado antes.",
        "tip": "Escucha enlaces entre vocales y reconoce para frente a pa en una cita informal. Del y al son contracciones escritas normales; pa y pa’l no se exigen en tu producción formal.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "La noticia y sus versiones · voces en conversación",
    "context": "Una periodista contrasta una noticia con lo que observó una testigo. Escucha primero sin transcripción. Las voces son sintéticas; no se presentan como modelos regionales verificados. Anota quién necesita qué y qué queda por confirmar.",
    "speakers": [
      {
        "id": "a",
        "name": "Periodista",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Elena",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Estamos con Elena, que vio llegar al equipo de rescate al parque. Elena, en algunas publicaciones se habla de cinco personas atrapadas. ¿Qué viste tú exactamente y a qué hora llegaste?"
      },
      {
        "speaker": "b",
        "text": "Llegué sobre las seis, cuando ya estaba allí la ambulancia. Vi salir a dos excursionistas con ayuda. No vi a cinco. Uno caminaba despacio y el otro llevaba una manta. Antes había llovido mucho, pero en ese momento ya no llovía."
      },
      {
        "speaker": "a",
        "text": "¿Sabes quién avisó? Nos han dicho que los excursionistas llevaban varias horas perdidos y que sus teléfonos no funcionaban. Queremos separar lo que está confirmado de lo que se está repitiendo."
      },
      {
        "speaker": "b",
        "text": "Un guarda me contó que un vecino había llamado desde el camino de abajo. Eso es lo que me dijo; yo no escuché la llamada. Los excursionistas parecían cansados, aunque no puedo decir si estaban heridos."
      },
      {
        "speaker": "a",
        "text": "Gracias por precisarlo. El servicio de emergencias acaba de confirmar que solo había dos personas y que ambas están bien. Esta tarde han vuelto a recordar que el sendero sigue cerrado por el barro."
      },
      {
        "speaker": "b",
        "text": "Menos mal que los encontraron. Yo iba para el mirador y cambié de camino al ver el aviso. A veces decimos «voy pa allá» sin pensar, pero esta vez convenía parar y comprobar si realmente se podía pasar. También hablé con una testigo que estaba junto a la entrada. La testigo me dijo que no quería aparecer en imágenes; respetamos su decisión."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha sin abrir el texto. Identifica la situación y la intención principal.",
        "exercise": {
          "id": "b1-02-audio-0",
          "type": "choice",
          "prompt": "La noticia y sus versiones: Escucha sin abrir el texto. Identifica la situación y la intención principal.",
          "items": [
            {
              "q": "¿Para qué habla el periodista con Elena?",
              "options": [
                "Para vender una excursión",
                "Para distinguir observaciones y rumores"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Por qué entrevistan a una testigo?",
              "options": [
                "Para precisar una noticia que circula",
                "Para pedirle un diagnóstico médico"
              ],
              "answer": 0,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Vuelve a escuchar y anota el dato que cambia la decisión.",
        "exercise": {
          "id": "b1-02-audio-1",
          "type": "choice",
          "prompt": "La noticia y sus versiones: Vuelve a escuchar y anota el dato que cambia la decisión.",
          "items": [
            {
              "q": "¿Qué observó Elena directamente?",
              "options": [
                "Dos personas saliendo con ayuda",
                "Una llamada desde el camino"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Quién habría dado el aviso según el guarda?",
              "options": [
                "La propia entrevistadora",
                "Un vecino"
              ],
              "answer": 1,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
        "exercise": {
          "id": "b1-02-audio-2",
          "type": "choice",
          "prompt": "La noticia y sus versiones: Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
          "items": [
            {
              "q": "¿Qué expresa «me contó»?",
              "options": [
                "Una observación directa de Elena",
                "Información recibida de otra persona"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Por qué Elena dice que no escuchó la llamada?",
              "options": [
                "Limita lo que puede afirmar directamente",
                "Niega que hubiera rescate"
              ],
              "answer": 0,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "La noticia y sus versiones · otra perspectiva",
    "genre": "Crónica",
    "frame": "Texto original de SpanishCue. Lee para comprender la experiencia y la decisión; después vuelve a los detalles.",
    "text": [
      "El puente del barrio del Molino volvió a abrir ayer, después de permanecer cerrado durante una tarde. Un vecino había llamado al ayuntamiento porque una de las barandillas se movía. Al principio circuló por las redes la noticia de que el puente se había caído. Sin embargo, las fotografías que compartieron varios usuarios correspondían a una reparación del año anterior.",
      "Cuando llegaron los técnicos, había bastante gente a ambos lados del río. Algunos vecinos necesitaban cruzar para volver a casa; otros se habían acercado por curiosidad. La policía cortó el acceso mientras el equipo revisaba la estructura. Una comerciante explicó que había oído un golpe, pero reconoció que no había visto ninguna caída. Los técnicos encontraron una pieza suelta en la barandilla y la sustituyeron. No hubo heridos ni daños en la parte central.",
      "Una testigo que trabaja cerca del puente pidió no aparecer en las fotografías. La testigo aceptó explicar lo que había visto, pero distinguió cuidadosamente su relato de los comentarios de otras personas.",
      "Esta semana la asociación vecinal ha recibido varias preguntas sobre la seguridad del recorrido. Su portavoz recomienda consultar los avisos municipales antes de compartir mensajes alarmantes. También propone colocar un cartel con la fecha de cada revisión. El incidente demuestra que una información puede parecer urgente sin ser exacta. La noticia importante no es solo que el puente volvió a abrir, sino que una llamada a tiempo permitió reparar un problema pequeño antes de que fuera mayor."
    ],
    "tasks": [
      {
        "id": "b1-02-read-evidence",
        "type": "choice",
        "prompt": "En la lectura «La noticia y sus versiones», elige la respuesta respaldada por el texto.",
        "items": [
          {
            "q": "¿Qué era incorrecto en las redes?",
            "options": [
              "Las imágenes no correspondían al incidente actual",
              "La existencia de un puente"
            ],
            "answer": 0,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          },
          {
            "q": "¿Qué propone la asociación?",
            "options": [
              "Cerrar el barrio para siempre",
              "Mostrar la fecha de las revisiones"
            ],
            "answer": 1,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          }
        ]
      },
      {
        "id": "b1-02-read-mediation",
        "type": "open",
        "prompt": "Reformula para una persona que no ha leído «La noticia y sus versiones».",
        "items": [
          {
            "prompt": "Explica en 50–70 palabras qué problema aparece en «La noticia y sus versiones», qué cambia y qué dato no debe perder quien recibe tu resumen. Cita un detalle del texto.",
            "model": "El puente del barrio del Molino volvió a abrir ayer, después de permanecer cerrado durante una tarde.",
            "checklist": [
              "Distingo información e interpretación.",
              "Adapto el resumen a alguien sin contexto."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Busca dos expresiones del texto y explica cómo ayudan a seguir la información.",
      "items": [
        {
          "quote": "El puente del barrio del Molino volvió a abrir ayer, después de permanecer cerrado durante una tarde.",
          "note": "Localiza quién actúa y qué perspectiva temporal o comunicativa establece esta apertura."
        },
        {
          "quote": "La noticia importante no es solo que el puente volvió a abrir, sino que una llamada a tiempo permitió reparar un problema pequeño antes de que fuera mayor.",
          "note": "Explica qué aporta el cierre al propósito del texto; compáralo con la apertura."
        }
      ]
    }
  },
  "practice": {
    "exercises": [
      {
        "id": "b1-02-order",
        "type": "order",
        "prompt": "Reconstruye dos mensajes útiles para «La noticia y sus versiones» y léelos con grupos de sentido.",
        "items": [
          {
            "words": [
              "Esta",
              "semana",
              "hemos",
              "recibido",
              "tres",
              "avisos."
            ]
          },
          {
            "words": [
              "¡Qué",
              "susto!",
              "Menos",
              "mal",
              "que",
              "llegaron."
            ]
          }
        ]
      },
      {
        "id": "b1-02-classify",
        "type": "classify",
        "prompt": "Clasifica estas formulaciones según su función en «La noticia y sus versiones».",
        "categories": [
          "Observación directa",
          "Información atribuida"
        ],
        "items": [
          {
            "text": "Vi dos personas con una manta.",
            "cat": 0
          },
          {
            "text": "Oí el anuncio en la estación.",
            "cat": 0
          },
          {
            "text": "El guarda me contó que habían llamado.",
            "cat": 1
          },
          {
            "text": "Según el aviso, el camino sigue cerrado.",
            "cat": 1
          }
        ]
      },
      {
        "id": "b1-02-draft",
        "type": "open",
        "prompt": "Ensaya partes de tu texto antes de producirlo completo.",
        "items": [
          {
            "prompt": "La noticia y sus versiones: escribe una apertura de 35–45 palabras para la tarea «Redacta una crónica vecinal de 140–180 palabras que corrija un rumor sin acusar a nadie. Incluye una fuente, contexto y hechos confirmados.» sin copiar el modelo.",
            "model": "Ayer por la tarde se interrumpió una actividad en la biblioteca del barrio.",
            "checklist": [
              "Presento destinatario y propósito.",
              "Incluyo un dato pertinente del caso."
            ]
          },
          {
            "prompt": "La noticia y sus versiones: redacta un cierre de 30–40 palabras que permita al destinatario responder o actuar.",
            "model": "Esta semana la biblioteca ha cambiado dos luces antiguas como medida de mantenimiento. La responsable pide que se consulte su tablón antes de compartir noticias. Por ahora, las actividades del próximo sábado mantienen su horario habitual.",
            "checklist": [
              "El cierre corresponde a esta situación.",
              "La acción siguiente se entiende sin adivinar."
            ]
          }
        ]
      },
      {
        "id": "b1-02-retrieval",
        "type": "open",
        "prompt": "Recupera los recursos lingüísticos sin consultar la explicación. Para los casos con fuentes, usa los datos suministrados y comprueba después los criterios.",
        "items": [
          {
            "prompt": "En el contexto de «La noticia y sus versiones», recupera la semana 1: Cuenta un viaje que habías preparado y que cambió por un aviso. Ordena antecedentes, imprevisto y solución; usa al cabo de y finalmente, y marca el desenlace con la voz.",
            "model": "Cuando llegué, el tren ya había salido. Habíamos comprado los billetes el martes.",
            "checklist": [
              "Puedo situar una acción anterior a otra en el pasado: cuando llegué, el tren ya había salido.",
              "Puedo organizar una historia con en aquel momento, al cabo de, mientras, en cuanto y finalmente.",
              "Puedo contar retrasos, pérdidas, cambios de planes y soluciones.",
              "Puedo crear suspense con pausas y tonos suspendidos, y cerrar una historia con un tono descendente.",
              "Puedo contar un viaje que se complicó con antecedentes, hechos y resultado.",
              "Puedo reconstruir el orden real de los hechos de un relato desordenado."
            ]
          },
          {
            "prompt": "Tras recuperar el caso anterior en «La noticia y sus versiones», escribe 40–60 palabras para explicar qué elección lingüística fue más difícil y ofrece dos versiones que cambien la intención o el tiempo. Comprueba tus ejemplos con la teoría de la semana recuperada.",
            "model": "Antes presenté un hecho como seguro. Ahora lo reformulo como una duda: Ayer rescataron a dos excursionistas.",
            "checklist": [
              "Comparo dos formulaciones concretas.",
              "Explico el cambio de intención o referencia."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Redacta una crónica vecinal de 140–180 palabras que corrija un rumor sin acusar a nadie. Incluye una fuente, contexto y hechos confirmados.",
    "context": "Destinatario, propósito y datos deben mantenerse claros. El modelo muestra una posibilidad, no una respuesta que debas copiar.",
    "steps": [
      "Planifica destinatario, dos ideas centrales y un dato de apoyo de esta semana.",
      "Escribe una primera versión sin consultar el modelo.",
      "Compara después organización y lenguaje; cambia al menos una frase para mejorar claridad."
    ],
    "useLanguage": [
      "Ayer rescataron a dos excursionistas.",
      "Llovía y el sendero estaba cerrado.",
      "Los vecinos habían avisado antes.",
      "Esta semana hemos recibido tres avisos.",
      "Una testigo llamó; la testigo esperó al equipo.",
      "La víctima estaba tranquila: era un vecino del barrio."
    ],
    "model": [
      "Ayer por la tarde se interrumpió una actividad en la biblioteca del barrio. Algunas personas publicaron que el edificio había sufrido daños, pero esa información no era correcta.",
      "Una participante que esperaba fuera explicó que el personal había comunicado el problema con tranquilidad. También aclaró que nadie había tenido que abandonar el jardín. Su testimonio coincide con el aviso publicado después, aunque no permite saber qué causó el fallo de la luz.",
      "Según explicó la responsable, se había apagado una luz de emergencia y el equipo decidió revisar la instalación. Mientras llegaba el técnico, los participantes esperaron en el jardín. La revisión duró veinte minutos y después todos pudieron volver a entrar. No hubo heridos y los libros no sufrieron daños. Esta semana la biblioteca ha cambiado dos luces antiguas como medida de mantenimiento. La responsable pide que se consulte su tablón antes de compartir noticias. Por ahora, las actividades del próximo sábado mantienen su horario habitual."
    ],
    "checklist": [
      "Cumplo el propósito y el registro de la consigna.",
      "Organizo el texto en partes conectadas y doy razones o detalles.",
      "Reutilizo cuatro expresiones de vocabulario de la semana.",
      "Compruebo tiempos, referencias, concordancia y lo que está confirmado.",
      "Reviso una frase y puedo explicar por qué la cambié.",
      "Integro y compruebo este recurso: género, número y referencia nominal."
    ],
    "words": [
      140,
      180
    ]
  },
  "speaking": {
    "intro": "Prepara ideas, no un guion completo. Puedes grabarte localmente; el curso no puntúa tu pronunciación ni sube tu audio.",
    "tasks": [
      {
        "title": "Intervención organizada",
        "prompt": "Presenta la noticia del puente en dos minutos. Tu interlocutor pregunta si alguien resultó herido y aporta un rumor nuevo: responde con lo confirmado y pide la fuente.",
        "prep": [
          "Anota una apertura, dos detalles y una conclusión.",
          "Elige una expresión para pedir o dar aclaración.",
          "Usa también: Una testigo llamó; la testigo esperó al equipo."
        ],
        "seconds": 120,
        "selfCheck": [
          "El oyente puede reconstruir mi idea.",
          "Doy razones o ejemplos y marco pausas útiles."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "En la situación «La noticia y sus versiones», tu interlocutor no comparte tu primera interpretación. Pregunta qué ha entendido, responde a su objeción y reformula tu idea con un ejemplo distinto; confirma qué acordáis y qué queda pendiente.",
        "prep": [
          "Reserva una pregunta abierta.",
          "Piensa una alternativa que puedas aceptar."
        ],
        "seconds": 120,
        "selfCheck": [
          "Escucho antes de responder.",
          "Adapto mi respuesta a la información nueva."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva tu texto revisado y una intervención breve: tu profe continuará la situación con un cambio que no conoces.",
    "cards": [
      {
        "move": "Presenta",
        "task": "Presenta la noticia del puente en dos minutos. Tu interlocutor pregunta si alguien resultó herido y aporta un rumor nuevo: responde con lo confirmado y pide la fuente."
      },
      {
        "move": "Pregunta",
        "task": "Pide a tu profe un dato adicional sobre «La noticia y sus versiones» que pueda cambiar tu propuesta; explica por qué lo necesitas.",
        "phrases": [
          "¿He entendido bien que…?",
          "¿Qué cambiaría si…?"
        ]
      },
      {
        "move": "Reformula",
        "task": "Resume la postura de tu profe sobre «La noticia y sus versiones» para una tercera persona y comprueba si tu versión conserva las condiciones."
      }
    ],
    "bring": "Tu borrador y versión revisada, una grabación local si la hiciste y una pregunta sobre una elección lingüística."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Tras trabajar ambas fuentes: ¿Qué propone la asociación? Relaciona tu respuesta con «La noticia y sus versiones».",
        "options": [
          "Cerrar el barrio para siempre",
          "Mostrar la fecha de las revisiones"
        ],
        "answer": 0,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
      },
      {
        "type": "listen",
        "q": "Escucha el fragmento final de evaluación de «La noticia y sus versiones»: ¿qué formulación se oye?",
        "options": [
          "Los vecinos habían avisado antes.",
          "El testigo dijo que no había visto el inicio."
        ],
        "answer": 1,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia.",
        "audio": "El testigo dijo que no había visto el inicio.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "Revisión breve de «La noticia y sus versiones». Antes del rescate, los vecinos ya ___ a emergencias.",
        "answers": [
          [
            "habían llamado"
          ]
        ]
      },
      {
        "type": "open",
        "prompt": "Reformulación de «La noticia y sus versiones». Texto de partida: La lluvia duró toda la búsqueda. A las ocho encontraron al grupo. Consigna: Une los hechos empezando con Mientras llovía. Compara el sentido y la forma con el modelo; puede haber más de una respuesta válida.",
        "model": "Mientras llovía, a las ocho encontraron al grupo.",
        "checklist": [
          "Mantengo los datos y la intención del texto de partida.",
          "Uso la estructura pedida con concordancia y referencias coherentes.",
          "Acepto otro orden o una formulación equivalente si conserva el sentido; consulto la duda en clase."
        ]
      },
      {
        "type": "error",
        "sentence": "Los equipos habían rescatando a todos antes de anochecer.",
        "answers": [
          "Los equipos habían rescatado a todos antes de anochecer."
        ],
        "why": "Se necesita participio, no gerundio."
      },
      {
        "type": "order",
        "words": [
          "El",
          "testigo",
          "dijo",
          "que",
          "no",
          "había",
          "visto",
          "el",
          "inicio."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación escrita de «La noticia y sus versiones»: responde en 50–70 palabras a una persona que ha entendido solo la mitad de tu propuesta. Conserva el dato decisivo y solicita confirmación.",
        "checklist": [
          "Reformulo en lugar de copiar.",
          "Mantengo la intención y los datos."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación oral de «La noticia y sus versiones»: durante un minuto explica qué cambiarías tras recibir una objeción y por qué; añade una pregunta para continuar.",
        "checklist": [
          "Justifico el cambio.",
          "Abro un turno real para el interlocutor."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Distinguir contexto, hechos confirmados y consecuencias de un suceso.",
      "Puedo producir y revisar un texto conectado para esta situación.",
      "Puedo explicar mi propuesta, pedir aclaración y responder a una objeción."
    ],
    "review": [
      "Mañana recupera tres expresiones sin mirar y úsalas en otro contexto.",
      "Dentro de una semana vuelve a contar el caso con un dato cambiado y compara tu nueva respuesta.",
      "Revisa con tu profe los criterios de recuperación; un cuestionario no evalúa por sí solo tu nivel oral."
    ]
  }
};
