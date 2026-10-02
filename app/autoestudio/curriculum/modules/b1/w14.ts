import type { Module } from "../../types";

export const b1w14: Module = {
  "id": "b1-14",
  "level": "b1",
  "week": 14,
  "kind": "core",
  "title": "Aquí se hace de otra manera",
  "subtitle": "Explicar usos sociales con matices y describir estados sin estereotipos.",
  "stop": {
    "place": "Arequipa",
    "country": "Perú"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.ser-estar-avanzado",
    "b1.gram.se-impersonal",
    "b1.voc.costumbres",
    "b1.pron.r-andina",
    "b1.fun.describir-costumbres",
    "b1.lis.costumbres-variedades",
    "b1.gram.se-reciproco"
  ],
  "reviewObjectives": [
    "b1.gram.estilo-indirecto",
    "b1.gram.preguntas-indirectas",
    "b1.voc.verbos-comunicacion",
    "b1.pron.voz-citas",
    "b1.fun.transmitir",
    "b1.wri.resumen-conversacion"
  ],
  "prerequisites": [
    "b1-13"
  ],
  "goal": {
    "canDo": "Puedo explicar usos sociales con matices y describir estados sin estereotipos.",
    "steps": [
      "Reconstruye la situación a partir del audio y la lectura.",
      "Relaciona las formas con una intención y comprueba tus elecciones.",
      "Prepara un texto revisado y una intervención con preguntas.",
      "Lleva a clase una propuesta propia y una duda concreta."
    ]
  },
  "theory": {
    "intro": "La misión de esta semana: Explicar usos sociales con matices y describir estados sin estereotipos.",
    "parts": [
      {
        "heading": "Forma y significado",
        "body": [
          "Ser y estar cambian el sentido de algunos adjetivos: es listo describe inteligencia; está listo significa preparado. Es aburrido describe una cualidad; está aburrido un estado. Estar más participio presenta un resultado: la puerta está cerrada. El contexto decide qué información necesitas."
        ],
        "examples": [
          {
            "es": "La sala está lista para recibir visitas."
          },
          {
            "es": "El taller es interesante, pero hoy estoy aburrido."
          },
          {
            "es": "Aquí se vive con horarios bastante flexibles."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se vende libros usados.",
            "right": "Se venden libros usados.",
            "why": "El verbo concuerda con libros en esta pasiva refleja."
          }
        ],
        "table": {
          "head": [
            "Con ser",
            "Con estar"
          ],
          "rows": [
            [
              "Es listo: inteligente.",
              "Está listo: preparado."
            ],
            [
              "Es aburrido: produce aburrimiento.",
              "Está aburrido: siente aburrimiento."
            ],
            [
              "Es rico: tiene riqueza.",
              "Está rico: tiene buen sabor."
            ],
            [
              "Es malo: valoración negativa.",
              "Está malo: está enfermo, en usos frecuentes."
            ]
          ]
        }
      },
      {
        "heading": "Organizar la comunicación",
        "body": [
          "Con se impersonal generalizamos sin nombrar agente: aquí se vive bien. En la pasiva refleja, el verbo concuerda con el sujeto: se venden entradas. Al explicar costumbres, delimita grupo y situación. En mi oficina se suele… es más preciso que en este país todos… ."
        ],
        "examples": [
          {
            "es": "Se venden entradas en recepción."
          },
          {
            "es": "En mi familia se suele avisar antes de visitar."
          },
          {
            "es": "Si una palabra no se entiende, se puede pedir que la repitan."
          }
        ]
      },
      {
        "heading": "Distinguir reflexividad, reciprocidad e impersonalidad",
        "body": [
          "La forma se cumple funciones diferentes. En Ana se prepara, Ana realiza una acción sobre sí misma; en Ana y Luis se ayudan, la acción puede ser recíproca, el uno al otro. En aquí se vive bien no identificamos un agente concreto. Pregunta quién hace qué antes de asignar la misma interpretación a todas las frases."
        ],
        "examples": [
          {
            "es": "Cada voluntario se prepara antes de abrir."
          },
          {
            "es": "Los compañeros se ayudan unos a otros."
          },
          {
            "es": "En recepción se atiende por orden de llegada."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "b1-14-forms",
        "type": "gap",
        "prompt": "Completa estas situaciones de «Aquí se hace de otra manera» con la forma que expresa la relación indicada.",
        "items": [
          {
            "q": "Las entradas se ___ en la puerta.",
            "answers": [
              [
                "venden"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "La comida ya ___ preparada.",
            "answers": [
              [
                "está"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "En esta biblioteca se ___ en voz baja.",
            "answers": [
              [
                "habla"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "La sopa ___ rica: tiene muy buen sabor.",
            "answers": [
              [
                "está"
              ]
            ]
          },
          {
            "q": "Hoy Pablo ___ malo y no viene porque está enfermo.",
            "answers": [
              [
                "está"
              ]
            ]
          }
        ],
        "bank": [
          "venden",
          "está",
          "habla",
          "está"
        ]
      },
      {
        "id": "b1-14-repair",
        "type": "error",
        "prompt": "Revisa la coherencia y la forma en estas frases del caso de la semana.",
        "items": [
          {
            "sentence": "Se vende libros usados.",
            "answers": [
              "Se venden libros usados."
            ],
            "why": "El verbo concuerda con libros en esta pasiva refleja."
          },
          {
            "sentence": "La sala es lista para la reunión.",
            "answers": [
              "La sala está lista para la reunión."
            ],
            "why": "Estar listo significa preparado."
          },
          {
            "sentence": "Estoy una persona aburrida hoy.",
            "answers": [
              "Estoy aburrido hoy."
            ],
            "why": "El estado temporal se expresa con estar y adjetivo."
          }
        ]
      },
      {
        "id": "b1-14-se-reciproco",
        "type": "gap",
        "prompt": "Aplica distinguir reflexividad, reciprocidad e impersonalidad a la misión de esta semana.",
        "bank": [
          "otro",
          "misma",
          "agente"
        ],
        "items": [
          {
            "q": "Los compañeros se ayudan el uno al ___.",
            "answers": [
              [
                "otro"
              ]
            ],
            "why": "La forma se cumple funciones diferentes. En Ana se prepara, Ana realiza una acción sobre sí misma; en Ana y Luis se ayudan, la acción puede ser recíproca, el uno al otro. En aquí se vive bien no identificamos un agente concreto. Pregunta quién hace qué antes de asignar la misma interpretación a todas las frases."
          },
          {
            "q": "Ana se prepara: la acción recae sobre ella ___.",
            "answers": [
              [
                "misma"
              ]
            ],
            "why": "La forma se cumple funciones diferentes. En Ana se prepara, Ana realiza una acción sobre sí misma; en Ana y Luis se ayudan, la acción puede ser recíproca, el uno al otro. En aquí se vive bien no identificamos un agente concreto. Pregunta quién hace qué antes de asignar la misma interpretación a todas las frases."
          },
          {
            "q": "Aquí se vive bien: no se identifica un ___ concreto.",
            "answers": [
              [
                "agente"
              ]
            ],
            "why": "La forma se cumple funciones diferentes. En Ana se prepara, Ana realiza una acción sobre sí misma; en Ana y Luis se ayudan, la acción puede ser recíproca, el uno al otro. En aquí se vive bien no identificamos un agente concreto. Pregunta quién hace qué antes de asignar la misma interpretación a todas las frases."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión junto a su situación de uso; reutiliza al menos cuatro en tu producción.",
    "groups": [
      {
        "title": "Aquí se hace de otra manera · acciones y recursos",
        "items": [
          {
            "es": "una costumbre",
            "note": "práctica repetida en un grupo"
          },
          {
            "es": "una norma de convivencia",
            "note": "acuerdo para compartir espacios"
          },
          {
            "es": "avisar con antelación",
            "note": "informar antes de un acontecimiento"
          },
          {
            "es": "dar por supuesto",
            "note": "considerar algo sabido sin comprobarlo"
          }
        ]
      },
      {
        "title": "Matices para esta misión",
        "items": [
          {
            "es": "respetar el turno",
            "note": "esperar el momento propio"
          },
          {
            "es": "adaptarse al contexto",
            "note": "ajustar la conducta a una situación"
          },
          {
            "es": "hacer una excepción",
            "note": "apartarse de una norma en un caso"
          },
          {
            "es": "pedir que repitan",
            "note": "solicitar escuchar otra vez"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-14-lexis",
        "type": "match",
        "prompt": "Relaciona expresiones de «Aquí se hace de otra manera» con su significado en este contexto.",
        "pairs": [
          {
            "left": "una costumbre",
            "right": "práctica repetida en un grupo"
          },
          {
            "left": "una norma de convivencia",
            "right": "acuerdo para compartir espacios"
          },
          {
            "left": "avisar con antelación",
            "right": "informar antes de un acontecimiento"
          },
          {
            "left": "dar por supuesto",
            "right": "considerar algo sabido sin comprobarlo"
          },
          {
            "left": "respetar el turno",
            "right": "esperar el momento propio"
          },
          {
            "left": "adaptarse al contexto",
            "right": "ajustar la conducta a una situación"
          },
          {
            "left": "hacer una excepción",
            "right": "apartarse de una norma en un caso"
          },
          {
            "left": "pedir que repitan",
            "right": "solicitar escuchar otra vez"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Claridad de r y grupos fónicos; pedir repetición",
    "explanation": [
      "Practica la r de puerta y la rr de recorrido sin borrar las vocales cercanas. Si otra realización resulta poco familiar, confirma la palabra por el contexto o pide repetición.",
      "Escucha la síntesis como apoyo para percibir palabras y grupos. Compara después tu producción con la comprensión de otra persona; no hay evaluación automática ni demostración regional verificada."
    ],
    "examples": [
      {
        "es": "La sala está lista para recibir visitas."
      },
      {
        "es": "El taller es interesante, pero hoy estoy aburrido."
      },
      {
        "es": "Aquí se vive con horarios bastante flexibles."
      }
    ],
    "perceive": {
      "id": "b1-14-perception",
      "type": "listen",
      "prompt": "Escucha antes de elegir qué secuencia reconoces; después repítela agrupando el sentido.",
      "items": [
        {
          "q": "Percepción 1: ¿qué reconoces al escuchar el fragmento de «Aquí se hace de otra manera»?",
          "options": [
            "Se oyen r de puerta y rr de recorrido en palabras distintas",
            "Solo aparece una palabra con r"
          ],
          "answer": 0,
          "audio": "La puerta del recorrido está abierta.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        },
        {
          "q": "Percepción 2: ¿qué reconoces al escuchar el fragmento de «Aquí se hace de otra manera»?",
          "options": [
            "Se afirma que el mensaje era incorrecto",
            "Se pide confirmar una palabra concreta"
          ],
          "answer": 1,
          "audio": "¿Ha dicho recepción? ¿Puede repetirlo?",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        }
      ]
    },
    "produce": [
      {
        "text": "La sala está lista para recibir visitas.",
        "tip": "Practica la r de puerta y la rr de recorrido sin borrar las vocales cercanas. Si otra realización resulta poco familiar, confirma la palabra por el contexto o pide repetición.",
        "voice": "es-ES-f"
      },
      {
        "text": "El taller es interesante, pero hoy estoy aburrido.",
        "tip": "Practica la r de puerta y la rr de recorrido sin borrar las vocales cercanas. Si otra realización resulta poco familiar, confirma la palabra por el contexto o pide repetición.",
        "voice": "es-ES-f"
      },
      {
        "text": "Aquí se vive con horarios bastante flexibles.",
        "tip": "Practica la r de puerta y la rr de recorrido sin borrar las vocales cercanas. Si otra realización resulta poco familiar, confirma la palabra por el contexto o pide repetición.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Aquí se hace de otra manera · voces en conversación",
    "context": "Una persona recibe orientaciones antes de su primer turno en un centro. Escucha primero sin transcripción. Las voces son sintéticas; no se presentan como modelos regionales verificados. Anota quién necesita qué y qué queda por confirmar.",
    "speakers": [
      {
        "id": "a",
        "name": "Responsable",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Persona nueva",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Antes de tu primer turno, te explico algunas costumbres del centro. Aquí se suele llegar diez minutos antes de abrir para preparar las mesas. No es necesario venir media hora antes, aunque algunas personas lo hacen porque toman café juntas."
      },
      {
        "speaker": "b",
        "text": "Gracias. Me habían dicho que la puerta estaba cerrada por la mañana y pensé que no podría entrar hasta la hora de apertura. ¿Hay otra entrada para quienes colaboramos o tengo que llamar a alguien?"
      },
      {
        "speaker": "a",
        "text": "Se entra por el lateral. La puerta principal está cerrada para el público, pero la lateral queda abierta mientras preparamos todo. Si no la encuentras, llama a recepción. No des por supuesto que conoces el recorrido el primer día."
      },
      {
        "speaker": "b",
        "text": "De acuerdo. Otra cosa: cuando recibimos a un grupo, ¿se reparten las entradas allí mismo o las trae cada participante? Quiero evitar hacer esperar a la gente por una confusión mía."
      },
      {
        "speaker": "a",
        "text": "Las entradas se entregan en recepción. En los talleres pequeños solo se comprueban los nombres de reserva. Te enseñaré ambas listas. Si alguien habla rápido y no entiendes una palabra, puedes pedir que la repita o decir con tus palabras lo que has entendido."
      },
      {
        "speaker": "b",
        "text": "Eso me ayuda. A veces reconozco casi toda la frase y me pierdo justo el dato importante. Prefiero confirmar «entonces, ¿en recepción?» antes de indicar un lugar equivocado. Iré tomando notas de las situaciones, sin pensar que todas funcionan igual. Nos ayudamos unos a otros al empezar. Cada persona se prepara antes de abrir y, si algo no está claro, se pregunta en recepción en lugar de improvisar una norma."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha sin abrir el texto. Identifica la situación y la intención principal.",
        "exercise": {
          "id": "b1-14-audio-0",
          "type": "choice",
          "prompt": "Aquí se hace de otra manera: Escucha sin abrir el texto. Identifica la situación y la intención principal.",
          "items": [
            {
              "q": "¿Qué recibe la persona nueva?",
              "options": [
                "Reglas de todo el país",
                "Orientaciones sobre un centro concreto"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué quiere conseguir la persona nueva?",
              "options": [
                "Entender cómo actuar en su primer turno",
                "Imponer normas para toda la ciudad"
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
          "id": "b1-14-audio-1",
          "type": "choice",
          "prompt": "Aquí se hace de otra manera: Vuelve a escuchar y anota el dato que cambia la decisión.",
          "items": [
            {
              "q": "¿Por dónde entra el equipo antes de abrir?",
              "options": [
                "Por el lateral",
                "Por una ventana"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Cuándo llega normalmente el equipo?",
              "options": [
                "Siempre una hora antes",
                "Diez minutos antes de abrir"
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
          "id": "b1-14-audio-2",
          "type": "choice",
          "prompt": "Aquí se hace de otra manera: Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
          "items": [
            {
              "q": "¿Para qué reformula «entonces, en recepción»?",
              "options": [
                "Para negar una norma",
                "Para confirmar el dato"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué función tiene «no des por supuesto»?",
              "options": [
                "Recomendar comprobar el recorrido",
                "Afirmar que no existe entrada lateral"
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
    "title": "Aquí se hace de otra manera · otra perspectiva",
    "genre": "Artículo y experiencia de comunidad",
    "frame": "Texto original de SpanishCue. Lee para comprender la experiencia y la decisión; después vuelve a los detalles.",
    "text": [
      "Amina empezó a colaborar en una biblioteca comunitaria y durante la primera semana anotó varias preguntas. No entendía por qué algunas personas entraban directamente en la sala de reuniones y otras esperaban junto a recepción. Al principio pensó que existía una norma que nadie le había explicado. Después descubrió que dependía de la actividad: los grupos con reserva podían entrar, mientras que las visitas nuevas debían preguntar dónde se atendía cada consulta.",
      "La coordinadora decidió preparar una guía breve con el equipo. Evitaron frases como «aquí todo el mundo sabe» y describieron situaciones concretas. Se prestan libros durante dos semanas; se pide silencio en la sala pequeña; en los talleres se permite conversar. La guía también aclara que la puerta principal está cerrada durante la pausa, aunque el edificio sigue abierto por la entrada lateral. Es una diferencia importante para quien llega por primera vez.",
      "Los voluntarios se ayudan unos a otros durante la preparación. Cada persona se organiza antes de abrir, pero cuando aparece una duda se busca una respuesta común para no dar indicaciones contradictorias.",
      "Amina añadió una recomendación: cuando alguien no entiende una indicación, conviene reformularla sin hablar más fuerte automáticamente. Una palabra desconocida o un ritmo rápido no significan falta de atención. La biblioteca empezó a usar ejemplos y a señalar los espacios mientras explicaba. La nueva guía no pretendía representar las costumbres de toda una ciudad. Recogía acuerdos de un lugar concreto y recordaba que cualquier persona podía preguntar por su sentido o proponer una mejora."
    ],
    "tasks": [
      {
        "id": "b1-14-read-evidence",
        "type": "choice",
        "prompt": "En la lectura «Aquí se hace de otra manera», elige la respuesta respaldada por el texto.",
        "items": [
          {
            "q": "¿Por qué algunas personas podían entrar directamente?",
            "options": [
              "Tenían una reserva para la actividad",
              "Pertenecían a una nacionalidad concreta"
            ],
            "answer": 0,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          },
          {
            "q": "¿Qué recomienda Amina al explicar?",
            "options": [
              "Hablar siempre más fuerte",
              "Reformular y usar ejemplos"
            ],
            "answer": 1,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          }
        ]
      },
      {
        "id": "b1-14-read-mediation",
        "type": "open",
        "prompt": "Reformula para una persona que no ha leído «Aquí se hace de otra manera».",
        "items": [
          {
            "prompt": "Explica en 50–70 palabras qué problema aparece en «Aquí se hace de otra manera», qué cambia y qué dato no debe perder quien recibe tu resumen. Cita un detalle del texto.",
            "model": "Amina empezó a colaborar en una biblioteca comunitaria y durante la primera semana anotó varias preguntas.",
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
          "quote": "Amina empezó a colaborar en una biblioteca comunitaria y durante la primera semana anotó varias preguntas.",
          "note": "Localiza quién actúa y qué perspectiva temporal o comunicativa establece esta apertura."
        },
        {
          "quote": "Recogía acuerdos de un lugar concreto y recordaba que cualquier persona podía preguntar por su sentido o proponer una mejora.",
          "note": "Explica qué aporta el cierre al propósito del texto; compáralo con la apertura."
        }
      ]
    }
  },
  "practice": {
    "exercises": [
      {
        "id": "b1-14-order",
        "type": "order",
        "prompt": "Reconstruye dos mensajes útiles para «Aquí se hace de otra manera» y léelos con grupos de sentido.",
        "items": [
          {
            "words": [
              "Se",
              "venden",
              "entradas",
              "en",
              "recepción."
            ]
          },
          {
            "words": [
              "En",
              "mi",
              "familia",
              "se",
              "suele",
              "avisar",
              "antes",
              "de",
              "visitar."
            ]
          }
        ]
      },
      {
        "id": "b1-14-classify",
        "type": "classify",
        "prompt": "Clasifica estas formulaciones según su función en «Aquí se hace de otra manera».",
        "categories": [
          "Estado o resultado",
          "Generalización de uso"
        ],
        "items": [
          {
            "text": "La puerta está cerrada.",
            "cat": 0
          },
          {
            "text": "La sala ya está lista.",
            "cat": 0
          },
          {
            "text": "Aquí se suele llegar antes.",
            "cat": 1
          },
          {
            "text": "Se reparten entradas en recepción.",
            "cat": 1
          }
        ]
      },
      {
        "id": "b1-14-draft",
        "type": "open",
        "prompt": "Ensaya partes de tu texto antes de producirlo completo.",
        "items": [
          {
            "prompt": "Aquí se hace de otra manera: escribe una apertura de 35–45 palabras para la tarea «Redacta una guía de 150–180 palabras para una persona nueva en un espacio que conoces. Explica cuatro usos, una excepción y cómo pedir aclaración sin generalizar sobre países.» sin copiar el modelo.",
            "model": "En nuestro centro de intercambio se organizan actividades los miércoles.",
            "checklist": [
              "Presento destinatario y propósito.",
              "Incluyo un dato pertinente del caso."
            ]
          },
          {
            "prompt": "Aquí se hace de otra manera: redacta un cierre de 30–40 palabras que permita al destinatario responder o actuar.",
            "model": "No todas las reuniones siguen las mismas normas. Cuando no entiendas una indicación, puedes pedir un ejemplo o repetir lo que has comprendido para confirmarlo. Estas costumbres pertenecen a nuestro centro y pueden cambiar si encontramos una organización que funcione mejor.",
            "checklist": [
              "El cierre corresponde a esta situación.",
              "La acción siguiente se entiende sin adivinar."
            ]
          }
        ]
      },
      {
        "id": "b1-14-retrieval",
        "type": "open",
        "prompt": "Recupera los recursos lingüísticos sin consultar la explicación. Para los casos con fuentes, usa los datos suministrados y comprueba después los criterios.",
        "items": [
          {
            "prompt": "En el contexto de «Aquí se hace de otra manera», recupera la semana 13: Transmite una conversación a alguien ausente: adapta personas y referencias, cuenta una pregunta con si y otra con dónde, y distingue lo afirmado de lo que debes confirmar. Fuente suministrada: Conversación que debes transmitir: Laura: «El taller será el martes de la próxima semana en la sala de abajo. La fecha y el lugar están confirmados; las plazas se confirmarán mañana». Nico: «¿Necesitáis material prestado? ¿Dónde recogeréis lo que falte?». Laura: «Todavía tengo que preguntar dónde se recoge». Tu resumen se envía el mismo día de esta conversación.",
            "model": "La coordinadora dice que mañana abrirán más tarde. Ayer explicó que aquel día no había servicio.",
            "checklist": [
              "Puedo transmitir lo que alguien dice o dijo con los cambios de tiempo, persona y referencias.",
              "Puedo transmitir preguntas con si, qué, dónde y cuándo.",
              "Puedo usar contar, explicar, comentar, preguntar, pedir y avisar.",
              "Puedo marcar con la voz cuándo cito a otra persona.",
              "Puedo transmitir un mensaje, una pregunta o una petición de otra persona.",
              "Puedo resumir por escrito una conversación para alguien que no estuvo.",
              "Conservo los hechos y señalo lo pendiente; no invento decisiones de la fuente."
            ]
          },
          {
            "prompt": "Tras recuperar el caso anterior en «Aquí se hace de otra manera», escribe 40–60 palabras para explicar qué elección lingüística fue más difícil y ofrece dos versiones que cambien la intención o el tiempo. Comprueba tus ejemplos con la teoría de la semana recuperada.",
            "model": "Antes presenté un hecho como seguro. Ahora lo reformulo como una duda: La sala está lista para recibir visitas.",
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
    "task": "Redacta una guía de 150–180 palabras para una persona nueva en un espacio que conoces. Explica cuatro usos, una excepción y cómo pedir aclaración sin generalizar sobre países.",
    "context": "Destinatario, propósito y datos deben mantenerse claros. El modelo muestra una posibilidad, no una respuesta que debas copiar.",
    "steps": [
      "Planifica destinatario, dos ideas centrales y un dato de apoyo de esta semana.",
      "Escribe una primera versión sin consultar el modelo.",
      "Compara después organización y lenguaje; cambia al menos una frase para mejorar claridad."
    ],
    "useLanguage": [
      "La sala está lista para recibir visitas.",
      "El taller es interesante, pero hoy estoy aburrido.",
      "Aquí se vive con horarios bastante flexibles.",
      "Se venden entradas en recepción.",
      "Cada voluntario se prepara antes de abrir.",
      "Los compañeros se ayudan unos a otros."
    ],
    "model": [
      "En nuestro centro de intercambio se organizan actividades los miércoles. Las reservas se hacen en recepción y se confirman el día anterior.",
      "Se pueden llevar materiales propios, pero conviene preguntar antes de utilizar herramientas del centro. Algunas necesitan una explicación inicial. Si llegas tarde, una persona de recepción puede indicarte cómo incorporarte sin interrumpir al grupo que ya está trabajando en una actividad.",
      "Cuando llegues por primera vez, conviene avisar para que alguien te enseñe las salas. La puerta del patio está cerrada durante los talleres, pero la salida principal permanece disponible. En la sala de lectura se habla bajo; en la sala grande se permiten conversaciones y trabajo en grupo. Si una actividad necesita silencio, la persona responsable lo explica al empezar. No todas las reuniones siguen las mismas normas. Cuando no entiendas una indicación, puedes pedir un ejemplo o repetir lo que has comprendido para confirmarlo. Estas costumbres pertenecen a nuestro centro y pueden cambiar si encontramos una organización que funcione mejor."
    ],
    "checklist": [
      "Cumplo el propósito y el registro de la consigna.",
      "Organizo el texto en partes conectadas y doy razones o detalles.",
      "Reutilizo cuatro expresiones de vocabulario de la semana.",
      "Compruebo tiempos, referencias, concordancia y lo que está confirmado.",
      "Reviso una frase y puedo explicar por qué la cambié.",
      "Integro y compruebo este recurso: distinguir reflexividad, reciprocidad e impersonalidad."
    ],
    "words": [
      150,
      180
    ]
  },
  "speaking": {
    "intro": "Prepara ideas, no un guion completo. Puedes grabarte localmente; el curso no puntúa tu pronunciación ni sube tu audio.",
    "tasks": [
      {
        "title": "Intervención organizada",
        "prompt": "Explica en dos minutos las normas de un espacio compartido. Tu interlocutor entiende una norma como prohibición absoluta: pregunta qué ha entendido y aclara una excepción con un ejemplo.",
        "prep": [
          "Anota una apertura, dos detalles y una conclusión.",
          "Elige una expresión para pedir o dar aclaración.",
          "Usa también: Cada voluntario se prepara antes de abrir."
        ],
        "seconds": 120,
        "selfCheck": [
          "El oyente puede reconstruir mi idea.",
          "Doy razones o ejemplos y marco pausas útiles."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "En la situación «Aquí se hace de otra manera», tu interlocutor no comparte tu primera interpretación. Pregunta qué ha entendido, responde a su objeción y reformula tu idea con un ejemplo distinto; confirma qué acordáis y qué queda pendiente.",
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
        "task": "Explica en dos minutos las normas de un espacio compartido. Tu interlocutor entiende una norma como prohibición absoluta: pregunta qué ha entendido y aclara una excepción con un ejemplo."
      },
      {
        "move": "Pregunta",
        "task": "Pide a tu profe un dato adicional sobre «Aquí se hace de otra manera» que pueda cambiar tu propuesta; explica por qué lo necesitas.",
        "phrases": [
          "¿He entendido bien que…?",
          "¿Qué cambiaría si…?"
        ]
      },
      {
        "move": "Reformula",
        "task": "Resume la postura de tu profe sobre «Aquí se hace de otra manera» para una tercera persona y comprueba si tu versión conserva las condiciones."
      }
    ],
    "bring": "Tu borrador y versión revisada, una grabación local si la hiciste y una pregunta sobre una elección lingüística."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Tras trabajar ambas fuentes: ¿Qué recomienda Amina al explicar? Relaciona tu respuesta con «Aquí se hace de otra manera».",
        "options": [
          "Hablar siempre más fuerte",
          "Reformular y usar ejemplos"
        ],
        "answer": 0,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
      },
      {
        "type": "listen",
        "q": "Escucha el fragmento final de evaluación de «Aquí se hace de otra manera»: ¿qué formulación se oye?",
        "options": [
          "Aquí se vive con horarios bastante flexibles.",
          "Si una palabra no se entiende, se puede pedir que la repitan."
        ],
        "answer": 1,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia.",
        "audio": "Si una palabra no se entiende, se puede pedir que la repitan.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "Revisión breve de «Aquí se hace de otra manera». Las entradas se ___ en la puerta.",
        "answers": [
          [
            "venden"
          ]
        ]
      },
      {
        "type": "open",
        "prompt": "Reformulación de «Aquí se hace de otra manera». Texto de partida: El centro vende entradas por internet. Consigna: Reformula con se y mantén la concordancia. Compara el sentido y la forma con el modelo; puede haber más de una respuesta válida.",
        "model": "Se venden entradas por internet.",
        "checklist": [
          "Mantengo los datos y la intención del texto de partida.",
          "Uso la estructura pedida con concordancia y referencias coherentes.",
          "Acepto otro orden o una formulación equivalente si conserva el sentido; consulto la duda en clase."
        ]
      },
      {
        "type": "error",
        "sentence": "En la entrada se reparte los mapas.",
        "answers": [
          "En la entrada se reparten los mapas."
        ],
        "why": "La pasiva refleja concuerda con mapas."
      },
      {
        "type": "order",
        "words": [
          "Si",
          "una",
          "palabra",
          "no",
          "se",
          "entiende,",
          "se",
          "puede",
          "pedir",
          "que",
          "la",
          "repitan."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación escrita de «Aquí se hace de otra manera»: responde en 50–70 palabras a una persona que ha entendido solo la mitad de tu propuesta. Conserva el dato decisivo y solicita confirmación.",
        "checklist": [
          "Reformulo en lugar de copiar.",
          "Mantengo la intención y los datos."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación oral de «Aquí se hace de otra manera»: durante un minuto explica qué cambiarías tras recibir una objeción y por qué; añade una pregunta para continuar.",
        "checklist": [
          "Justifico el cambio.",
          "Abro un turno real para el interlocutor."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Explicar usos sociales con matices y describir estados sin estereotipos.",
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
