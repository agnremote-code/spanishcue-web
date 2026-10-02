import type { Module } from "../../types";

export const b1w07: Module = {
  "id": "b1-07",
  "level": "b1",
  "week": 7,
  "kind": "core",
  "title": "Alegrarse sin invadir",
  "subtitle": "Responder a noticias personales y explicar emociones sin culpar.",
  "stop": {
    "place": "Montevideo",
    "country": "Uruguay"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.emociones-subjuntivo",
    "b1.gram.mismo-sujeto",
    "b1.voc.sentimientos",
    "b1.pron.entonacion-emocion",
    "b1.fun.expresar-sentimientos",
    "b1.wri.correo-personal",
    "b1.voc.relaciones",
    "b1.fun.hablar-relaciones",
    "b1.gram.posesivos-relacion"
  ],
  "reviewObjectives": [
    "b1.gram.opinion-subjuntivo",
    "b1.gram.valoracion",
    "b1.voc.medios-redes",
    "b1.pron.duda-certeza",
    "b1.fun.opinar-matizar",
    "b1.read.articulo-opinion",
    "b1.gram.demostrativos-discurso"
  ],
  "prerequisites": [
    "b1-06"
  ],
  "goal": {
    "canDo": "Puedo responder a noticias personales y explicar emociones sin culpar.",
    "steps": [
      "Reconstruye la situación a partir del audio y la lectura.",
      "Relaciona las formas con una intención y comprueba tus elecciones.",
      "Prepara un texto revisado y una intervención con preguntas.",
      "Lleva a clase una propuesta propia y una duda concreta."
    ]
  },
  "theory": {
    "intro": "La misión de esta semana: Responder a noticias personales y explicar emociones sin culpar.",
    "parts": [
      {
        "heading": "Forma y significado",
        "body": [
          "Me alegra que, me molesta que y me preocupa que expresan una reacción y llevan subjuntivo: me alegra que vengas. El hecho puede ser real; subjuntivo no significa siempre incertidumbre. Con infinitivo puedes presentar una experiencia o actividad sin desarrollar otra oración: me alegra verte."
        ],
        "examples": [
          {
            "es": "Me alegra que hayas encontrado apoyo."
          },
          {
            "es": "Me preocupa que no tengas tiempo libre."
          },
          {
            "es": "Me molesta recibir mensajes de madrugada."
          }
        ],
        "mistakes": [
          {
            "wrong": "Me alegra que vienes a la cena.",
            "right": "Me alegra que vengas a la cena.",
            "why": "La reacción emocional se construye aquí con subjuntivo."
          }
        ]
      },
      {
        "heading": "Organizar la comunicación",
        "body": [
          "No reduzcas infinitivo a una regla mecánica de mismo sujeto con verbos como alegrar: en me alegra verte quien siente alegría y quien ve se interpretan por el contexto. Aprende los patrones completos. Describe el efecto de una conducta y pregunta por la intención antes de acusar a alguien."
        ],
        "examples": [
          {
            "es": "Me hace ilusión volver a verte."
          },
          {
            "es": "Confío en ti y pienso en nuestra amistad."
          },
          {
            "es": "Nos acordamos de hablar después de la reunión."
          }
        ]
      },
      {
        "heading": "Posesivos y relaciones personales",
        "body": [
          "El posesivo ante el nombre no lleva artículo en el uso general: mi amigo. Después del nombre concuerda con lo poseído: una amiga mía, unos amigos nuestros. Un amigo mío presenta a uno entre varios; mi amigo puede recuperar uno conocido por el contexto. El mío evita repetir el nombre, pero necesita un referente claro."
        ],
        "examples": [
          {
            "es": "Una amiga mía también tuvo ese malentendido."
          },
          {
            "es": "Tu mensaje fue breve; el mío explicaba los cambios."
          },
          {
            "es": "Las compañeras nuestras propusieron hablarlo."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "b1-07-forms",
        "type": "gap",
        "prompt": "Completa estas situaciones de «Alegrarse sin invadir» con la forma que expresa la relación indicada.",
        "items": [
          {
            "q": "Me preocupa que tú no ___ descansando bien.",
            "answers": [
              [
                "estés"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Me alegra ___ contigo otra vez.",
            "answers": [
              [
                "hablar"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Me molesta que no me ___ los cambios.",
            "answers": [
              [
                "avises"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          }
        ],
        "bank": [
          "estés",
          "hablar",
          "avises"
        ]
      },
      {
        "id": "b1-07-repair",
        "type": "error",
        "prompt": "Revisa la coherencia y la forma en estas frases del caso de la semana.",
        "items": [
          {
            "sentence": "Me alegra que vienes a la cena.",
            "answers": [
              "Me alegra que vengas a la cena."
            ],
            "why": "La reacción emocional se construye aquí con subjuntivo."
          },
          {
            "sentence": "Confío de mis amigos.",
            "answers": [
              "Confío en mis amigos."
            ],
            "why": "Confiar selecciona en."
          },
          {
            "sentence": "Me preocupa que no tienes apoyo.",
            "answers": [
              "Me preocupa que no tengas apoyo."
            ],
            "why": "La emoción no cambia a indicativo porque el hecho sea real."
          }
        ]
      },
      {
        "id": "b1-07-posesivos-relacion",
        "type": "gap",
        "prompt": "Aplica posesivos y relaciones personales a la misión de esta semana.",
        "bank": [
          "mía",
          "tuyo",
          "nuestros"
        ],
        "items": [
          {
            "q": "Una amiga ___ me ayudó a entenderlo.",
            "answers": [
              [
                "mía"
              ]
            ],
            "why": "El posesivo ante el nombre no lleva artículo en el uso general: mi amigo. Después del nombre concuerda con lo poseído: una amiga mía, unos amigos nuestros. Un amigo mío presenta a uno entre varios; mi amigo puede recuperar uno conocido por el contexto. El mío evita repetir el nombre, pero necesita un referente claro."
          },
          {
            "q": "Mi mensaje es breve; el ___ es más detallado.",
            "answers": [
              [
                "tuyo"
              ]
            ],
            "why": "El posesivo ante el nombre no lleva artículo en el uso general: mi amigo. Después del nombre concuerda con lo poseído: una amiga mía, unos amigos nuestros. Un amigo mío presenta a uno entre varios; mi amigo puede recuperar uno conocido por el contexto. El mío evita repetir el nombre, pero necesita un referente claro."
          },
          {
            "q": "Unos amigos ___ organizaron la despedida.",
            "answers": [
              [
                "nuestros"
              ]
            ],
            "why": "El posesivo ante el nombre no lleva artículo en el uso general: mi amigo. Después del nombre concuerda con lo poseído: una amiga mía, unos amigos nuestros. Un amigo mío presenta a uno entre varios; mi amigo puede recuperar uno conocido por el contexto. El mío evita repetir el nombre, pero necesita un referente claro."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión junto a su situación de uso; reutiliza al menos cuatro en tu producción.",
    "groups": [
      {
        "title": "Alegrarse sin invadir · acciones y recursos",
        "items": [
          {
            "es": "sentir alivio",
            "note": "dejar de sentir preocupación"
          },
          {
            "es": "estar agobiado",
            "note": "sentirse superado por las tareas"
          },
          {
            "es": "llevarse una decepción",
            "note": "recibir un resultado peor de lo esperado"
          },
          {
            "es": "sentir orgullo",
            "note": "valorar positivamente un logro"
          }
        ]
      },
      {
        "title": "Matices para esta misión",
        "items": [
          {
            "es": "guardar rencor",
            "note": "mantener enfado durante tiempo"
          },
          {
            "es": "hacer las paces",
            "note": "recuperar una relación tras un conflicto"
          },
          {
            "es": "ponerse en el lugar de alguien",
            "note": "intentar comprender su perspectiva"
          },
          {
            "es": "hablar con franqueza",
            "note": "expresarse de forma sincera"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-07-lexis",
        "type": "match",
        "prompt": "Relaciona expresiones de «Alegrarse sin invadir» con su significado en este contexto.",
        "pairs": [
          {
            "left": "sentir alivio",
            "right": "dejar de sentir preocupación"
          },
          {
            "left": "estar agobiado",
            "right": "sentirse superado por las tareas"
          },
          {
            "left": "llevarse una decepción",
            "right": "recibir un resultado peor de lo esperado"
          },
          {
            "left": "sentir orgullo",
            "right": "valorar positivamente un logro"
          },
          {
            "left": "guardar rencor",
            "right": "mantener enfado durante tiempo"
          },
          {
            "left": "hacer las paces",
            "right": "recuperar una relación tras un conflicto"
          },
          {
            "left": "ponerse en el lugar de alguien",
            "right": "intentar comprender su perspectiva"
          },
          {
            "left": "hablar con franqueza",
            "right": "expresarse de forma sincera"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "La emoción se acompaña de contexto y ritmo",
    "explanation": [
      "Pronuncia la emoción y su causa en dos grupos. Prueba una reacción cálida y otra preocupada con un compañero; la voz sintética no certifica matices emocionales.",
      "Escucha la síntesis como apoyo para percibir palabras y grupos. Compara después tu producción con la comprensión de otra persona; no hay evaluación automática ni demostración regional verificada."
    ],
    "examples": [
      {
        "es": "Me alegra que hayas encontrado apoyo."
      },
      {
        "es": "Me preocupa que no tengas tiempo libre."
      },
      {
        "es": "Me molesta recibir mensajes de madrugada."
      }
    ],
    "perceive": {
      "id": "b1-07-perception",
      "type": "listen",
      "prompt": "Escucha antes de elegir qué secuencia reconoces; después repítela agrupando el sentido.",
      "items": [
        {
          "q": "Percepción 1: ¿qué reconoces al escuchar el fragmento de «Alegrarse sin invadir»?",
          "options": [
            "Se oye molesta y después vengas",
            "Se oye alegra y después vengas"
          ],
          "answer": 1,
          "audio": "Me alegra que vengas.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        },
        {
          "q": "Percepción 2: ¿qué reconoces al escuchar el fragmento de «Alegrarse sin invadir»?",
          "options": [
            "El acento de estés recae al final",
            "El acento recae al principio"
          ],
          "answer": 0,
          "audio": "Me preocupa que estés sola.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        }
      ]
    },
    "produce": [
      {
        "text": "Me alegra que hayas encontrado apoyo.",
        "tip": "Pronuncia la emoción y su causa en dos grupos. Prueba una reacción cálida y otra preocupada con un compañero; la voz sintética no certifica matices emocionales.",
        "voice": "es-ES-f"
      },
      {
        "text": "Me preocupa que no tengas tiempo libre.",
        "tip": "Pronuncia la emoción y su causa en dos grupos. Prueba una reacción cálida y otra preocupada con un compañero; la voz sintética no certifica matices emocionales.",
        "voice": "es-ES-f"
      },
      {
        "text": "Me molesta recibir mensajes de madrugada.",
        "tip": "Pronuncia la emoción y su causa en dos grupos. Prueba una reacción cálida y otra preocupada con un compañero; la voz sintética no certifica matices emocionales.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Alegrarse sin invadir · voces en conversación",
    "context": "Un cambio de fecha ha provocado un malentendido entre compañeros. Escucha primero sin transcripción. Las voces son sintéticas; no se presentan como modelos regionales verificados. Anota quién necesita qué y qué queda por confirmar.",
    "speakers": [
      {
        "id": "a",
        "name": "Álex",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Dani",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Quería hablar contigo sobre el cambio de la excursión. Me alegró que organizaras otra fecha, pero me molestó enterarme por una fotografía del grupo. Yo había reservado el sábado y pensé que me habíais dejado fuera."
      },
      {
        "speaker": "b",
        "text": "Siento que te llegara así. No quería excluirte. Cambiamos la fecha en una conversación después de clase y creí que estabas en el grupo donde lo avisamos. Ahora veo que no lo habíamos comprobado."
      },
      {
        "speaker": "a",
        "text": "Gracias por explicarlo. Me preocupa que vuelva a pasar porque últimamente no puedo quedarme después de clase. No necesito participar en todas las decisiones, pero sí saber cuándo algo que ya habíamos acordado cambia."
      },
      {
        "speaker": "b",
        "text": "Lo entiendo. Podemos mandar un resumen al correo de todos después de cada decisión. También me gustaría que me dijeras si falta alguien. Confío en ti para señalar esos problemas, aunque preferiría que lo habláramos antes de pensar que fue intencional."
      },
      {
        "speaker": "a",
        "text": "De acuerdo. Reconozco que interpreté la foto demasiado rápido. Me hace ilusión seguir en el grupo y no quiero guardar enfado por una confusión. La próxima vez preguntaré directamente qué ocurrió."
      },
      {
        "speaker": "b",
        "text": "Y yo comprobaré los destinatarios. Entonces, ¿te viene bien el nuevo domingo o necesitas que busquemos otra opción? Si no puedes venir, podemos mantener también un paseo corto el sábado, sin obligar a todo el grupo a repetir la salida. Una amiga mía también se quedó fuera de un aviso parecido. Su grupo lo solucionó con un resumen común; el nuestro podría probar esa misma idea."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha sin abrir el texto. Identifica la situación y la intención principal.",
        "exercise": {
          "id": "b1-07-audio-0",
          "type": "choice",
          "prompt": "Alegrarse sin invadir: Escucha sin abrir el texto. Identifica la situación y la intención principal.",
          "items": [
            {
              "q": "¿Qué problema intentan resolver?",
              "options": [
                "Una sensación de exclusión por falta de información",
                "Una discusión por el precio del viaje"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué quiere preservar la persona molesta?",
              "options": [
                "La prohibición de nuevas excursiones",
                "Su participación en el grupo"
              ],
              "answer": 1,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Vuelve a escuchar y anota el dato que cambia la decisión.",
        "exercise": {
          "id": "b1-07-audio-1",
          "type": "choice",
          "prompt": "Alegrarse sin invadir: Vuelve a escuchar y anota el dato que cambia la decisión.",
          "items": [
            {
              "q": "¿Qué medida acuerdan?",
              "options": [
                "Eliminar toda comunicación escrita",
                "Enviar un resumen a todos"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Dónde se acordó el cambio inicialmente?",
              "options": [
                "En una conversación después de clase",
                "En una carta enviada a todos"
              ],
              "answer": 0,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
        "exercise": {
          "id": "b1-07-audio-2",
          "type": "choice",
          "prompt": "Alegrarse sin invadir: Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
          "items": [
            {
              "q": "¿Qué reconoce la primera persona?",
              "options": [
                "Que interpretó la foto precipitadamente",
                "Que no quiere seguir en el grupo"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué reconoce «interpreté la foto demasiado rápido»?",
              "options": [
                "Que la fotografía era falsa",
                "Una conclusión precipitada sobre la intención"
              ],
              "answer": 1,
              "why": "Comprueba la información concreta del fragmento antes de elegir."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Alegrarse sin invadir · otra perspectiva",
    "genre": "Artículo y experiencia de comunidad",
    "frame": "Texto original de SpanishCue. Lee para comprender la experiencia y la decisión; después vuelve a los detalles.",
    "text": [
      "Cuando a Nadia le ofrecieron un puesto en otra ciudad, su hermano respondió con una pregunta sobre el alquiler. Ella esperaba una felicitación y sintió una pequeña decepción. Él, en cambio, estaba preocupado porque conocía las dificultades de buscar vivienda allí. Ninguno explicó al principio lo que sentía: Nadia contestó con pocas palabras y su hermano pensó que no quería hablar del asunto.",
      "Dos días después volvieron a conversar. Nadia dijo que le alegraba poder cambiar de trabajo, aunque estaba agobiada por todos los trámites. También explicó que le había molestado recibir solo advertencias. Su hermano reconoció que había empezado por sus preocupaciones sin celebrar la noticia. «Me hace ilusión que tengas esta oportunidad», aclaró. Después preguntó si ella quería consejos o simplemente contar cómo había ido la entrevista.",
      "Una amiga suya le recordó que pedir apoyo no significa perder independencia. Nadia comparó ese mensaje con el de su hermano: el suyo empezaba por las precauciones y por eso le había resultado más frío.",
      "La conversación no resolvió el alquiler, pero sí el malentendido. Acordaron separar dos momentos: primero compartir la noticia y después revisar las cuestiones prácticas. Nadia comprendió que una pregunta podía expresar interés aunque no fuera la reacción que esperaba. Su hermano entendió que ayudar no consiste siempre en anticipar problemas. Desde entonces, cuando uno cuenta algo importante, el otro suele preguntar qué necesita en ese momento. No es una fórmula perfecta, pero les permite evitar algunas discusiones y cuidar mejor una relación en la que ambos confían."
    ],
    "tasks": [
      {
        "id": "b1-07-read-evidence",
        "type": "choice",
        "prompt": "En la lectura «Alegrarse sin invadir», elige la respuesta respaldada por el texto.",
        "items": [
          {
            "q": "¿Por qué se decepcionó Nadia?",
            "options": [
              "No recibió ninguna oferta",
              "Esperaba una felicitación antes de las advertencias"
            ],
            "answer": 1,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          },
          {
            "q": "¿Qué cambió en su comunicación?",
            "options": [
              "Evitan hablar de trabajo",
              "Preguntan qué apoyo necesita el otro"
            ],
            "answer": 0,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          }
        ]
      },
      {
        "id": "b1-07-read-mediation",
        "type": "open",
        "prompt": "Reformula para una persona que no ha leído «Alegrarse sin invadir».",
        "items": [
          {
            "prompt": "Explica en 50–70 palabras qué problema aparece en «Alegrarse sin invadir», qué cambia y qué dato no debe perder quien recibe tu resumen. Cita un detalle del texto.",
            "model": "Cuando a Nadia le ofrecieron un puesto en otra ciudad, su hermano respondió con una pregunta sobre el alquiler.",
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
          "quote": "Cuando a Nadia le ofrecieron un puesto en otra ciudad, su hermano respondió con una pregunta sobre el alquiler.",
          "note": "Localiza quién actúa y qué perspectiva temporal o comunicativa establece esta apertura."
        },
        {
          "quote": "No es una fórmula perfecta, pero les permite evitar algunas discusiones y cuidar mejor una relación en la que ambos confían.",
          "note": "Explica qué aporta el cierre al propósito del texto; compáralo con la apertura."
        }
      ]
    }
  },
  "practice": {
    "exercises": [
      {
        "id": "b1-07-order",
        "type": "order",
        "prompt": "Reconstruye dos mensajes útiles para «Alegrarse sin invadir» y léelos con grupos de sentido.",
        "items": [
          {
            "words": [
              "Me",
              "hace",
              "ilusión",
              "volver",
              "a",
              "verte."
            ]
          },
          {
            "words": [
              "Confío",
              "en",
              "ti",
              "y",
              "pienso",
              "en",
              "nuestra",
              "amistad."
            ]
          }
        ]
      },
      {
        "id": "b1-07-classify",
        "type": "classify",
        "prompt": "Clasifica estas formulaciones según su función en «Alegrarse sin invadir».",
        "categories": [
          "Reacción emocional",
          "Petición de información"
        ],
        "items": [
          {
            "text": "Me alegra seguir en el grupo.",
            "cat": 0
          },
          {
            "text": "Me preocupa perder los avisos.",
            "cat": 0
          },
          {
            "text": "¿Cuándo decidisteis cambiar la fecha?",
            "cat": 1
          },
          {
            "text": "¿En qué grupo lo anunciasteis?",
            "cat": 1
          }
        ]
      },
      {
        "id": "b1-07-draft",
        "type": "open",
        "prompt": "Ensaya partes de tu texto antes de producirlo completo.",
        "items": [
          {
            "prompt": "Alegrarse sin invadir: escribe una apertura de 35–45 palabras para la tarea «Responde en 150–180 palabras a una noticia de un amigo: celebra el logro, explica una preocupación con tacto y pregunta si desea ayuda. Evita decidir por él.» sin copiar el modelo.",
            "model": "Hola, Mario: me alegra mucho que hayas conseguido la plaza del taller.",
            "checklist": [
              "Presento destinatario y propósito.",
              "Incluyo un dato pertinente del caso."
            ]
          },
          {
            "prompt": "Alegrarse sin invadir: redacta un cierre de 30–40 palabras que permita al destinatario responder o actuar.",
            "model": "¿Prefieres que te escuche o que comparemos juntos las opciones de transporte? Confío en que encontrarás una organización que te funcione. Si esta semana no puedes contestar, no pasa nada; podemos hablar cuando hayas probado los primeros días. Me gustaría saber qué actividad del taller te interesa más y qué esperas aprender allí.",
            "checklist": [
              "El cierre corresponde a esta situación.",
              "La acción siguiente se entiende sin adivinar."
            ]
          }
        ]
      },
      {
        "id": "b1-07-retrieval",
        "type": "open",
        "prompt": "Recupera los recursos lingüísticos sin consultar la explicación. Para los casos con fuentes, usa los datos suministrados y comprueba después los criterios.",
        "items": [
          {
            "prompt": "En el contexto de «Alegrarse sin invadir», recupera la semana 6: Responde a una noticia sin fecha: separa hecho y opinión, expresa una duda y una valoración, y justifica qué comprobarías antes de compartirla. Haz audible el grado de certeza. Fuente suministrada: Aviso recibido: «El parque cierra todos los domingos». El vídeo no tiene fecha ni autor visible. Un cartel del fondo solo anuncia obras en una zona. Nadie ha confirmado el horario del parque al que quiere ir el grupo.",
            "model": "Creo que la noticia necesita una fecha. No creo que esa imagen sea reciente.",
            "checklist": [
              "Puedo usar creo que + indicativo y no creo que + subjuntivo.",
              "Puedo distinguir afirmar (es verdad que + indicativo) de valorar o dudar (es posible que + subjuntivo).",
              "Puedo hablar de noticias falsas, algoritmos, influencia y privacidad.",
              "Puedo sonar seguro o dudoso con la misma frase.",
              "Puedo dar una opinión, matizarla y mostrar duda.",
              "Puedo separar hechos de opiniones y detectar la postura del autor.",
              "Conservo los hechos y señalo lo pendiente; no invento decisiones de la fuente."
            ]
          },
          {
            "prompt": "Tras recuperar el caso anterior en «Alegrarse sin invadir», escribe 40–60 palabras para explicar qué elección lingüística fue más difícil y ofrece dos versiones que cambien la intención o el tiempo. Comprueba tus ejemplos con la teoría de la semana recuperada.",
            "model": "Antes presenté un hecho como seguro. Ahora lo reformulo como una duda: Me alegra que hayas encontrado apoyo.",
            "checklist": [
              "Comparo dos formulaciones concretas.",
              "Explico el cambio de intención o referencia."
            ]
          },
          {
            "prompt": "Aplicación diferida en «Alegrarse sin invadir»: Escribe una corrección de noticia con eso para recuperar una idea completa y estos otros para contrastar avisos. Después sustituye un demostrativo ambiguo por su referente explícito.",
            "model": "El vídeo no tiene fecha; eso limita su utilidad. Esto es lo que sabemos: el cartel menciona obras.",
            "checklist": [
              "Puedo usar esto, eso y aquello para recuperar una idea y evitar referencias ambiguas.",
              "Explico cómo cambia el sentido si sustituyo una forma."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Responde en 150–180 palabras a una noticia de un amigo: celebra el logro, explica una preocupación con tacto y pregunta si desea ayuda. Evita decidir por él.",
    "context": "Destinatario, propósito y datos deben mantenerse claros. El modelo muestra una posibilidad, no una respuesta que debas copiar.",
    "steps": [
      "Planifica destinatario, dos ideas centrales y un dato de apoyo de esta semana.",
      "Escribe una primera versión sin consultar el modelo.",
      "Compara después organización y lenguaje; cambia al menos una frase para mejorar claridad."
    ],
    "useLanguage": [
      "Me alegra que hayas encontrado apoyo.",
      "Me preocupa que no tengas tiempo libre.",
      "Me molesta recibir mensajes de madrugada.",
      "Me hace ilusión volver a verte.",
      "Una amiga mía también tuvo ese malentendido.",
      "Tu mensaje fue breve; el mío explicaba los cambios."
    ],
    "model": [
      "Hola, Mario: me alegra mucho que hayas conseguido la plaza del taller. Sé que llevabas tiempo buscando un espacio para desarrollar tus ideas y me hace ilusión verte tan motivado.",
      "A mí me pasó algo parecido cuando empecé una actividad nueva: quería aprovechar cada oportunidad y terminé aceptando más tareas de las que podía hacer. No sé si tu situación será igual, pero me ayudó hablar de mis límites antes de agotarme.",
      "También entiendo que te sientas agobiado por el cambio de horario. Me preocupa que intentes mantener todas tus actividades anteriores sin dejar ningún descanso, aunque tú conoces mejor tu situación. No quiero llenarte de consejos que no has pedido. ¿Prefieres que te escuche o que comparemos juntos las opciones de transporte? Confío en que encontrarás una organización que te funcione. Si esta semana no puedes contestar, no pasa nada; podemos hablar cuando hayas probado los primeros días. Me gustaría saber qué actividad del taller te interesa más y qué esperas aprender allí."
    ],
    "checklist": [
      "Cumplo el propósito y el registro de la consigna.",
      "Organizo el texto en partes conectadas y doy razones o detalles.",
      "Reutilizo cuatro expresiones de vocabulario de la semana.",
      "Compruebo tiempos, referencias, concordancia y lo que está confirmado.",
      "Reviso una frase y puedo explicar por qué la cambié.",
      "Integro y compruebo este recurso: posesivos y relaciones personales."
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
        "prompt": "Explica a un amigo por qué te molestó un cambio de planes. Tu interlocutor ofrece una explicación inesperada: pregunta, reformula su intención y acuerda cómo avisarse durante dos minutos.",
        "prep": [
          "Anota una apertura, dos detalles y una conclusión.",
          "Elige una expresión para pedir o dar aclaración.",
          "Usa también: Una amiga mía también tuvo ese malentendido."
        ],
        "seconds": 120,
        "selfCheck": [
          "El oyente puede reconstruir mi idea.",
          "Doy razones o ejemplos y marco pausas útiles."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "En la situación «Alegrarse sin invadir», tu interlocutor no comparte tu primera interpretación. Pregunta qué ha entendido, responde a su objeción y reformula tu idea con un ejemplo distinto; confirma qué acordáis y qué queda pendiente.",
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
        "task": "Explica a un amigo por qué te molestó un cambio de planes. Tu interlocutor ofrece una explicación inesperada: pregunta, reformula su intención y acuerda cómo avisarse durante dos minutos."
      },
      {
        "move": "Pregunta",
        "task": "Pide a tu profe un dato adicional sobre «Alegrarse sin invadir» que pueda cambiar tu propuesta; explica por qué lo necesitas.",
        "phrases": [
          "¿He entendido bien que…?",
          "¿Qué cambiaría si…?"
        ]
      },
      {
        "move": "Reformula",
        "task": "Resume la postura de tu profe sobre «Alegrarse sin invadir» para una tercera persona y comprueba si tu versión conserva las condiciones."
      }
    ],
    "bring": "Tu borrador y versión revisada, una grabación local si la hiciste y una pregunta sobre una elección lingüística."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Tras trabajar ambas fuentes: ¿Qué cambió en su comunicación? Relaciona tu respuesta con «Alegrarse sin invadir».",
        "options": [
          "Evitan hablar de trabajo",
          "Preguntan qué apoyo necesita el otro"
        ],
        "answer": 1,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
      },
      {
        "type": "listen",
        "q": "Escucha el fragmento final de evaluación de «Alegrarse sin invadir»: ¿qué formulación se oye?",
        "options": [
          "Nos acordamos de hablar después de la reunión.",
          "Me molesta recibir mensajes de madrugada."
        ],
        "answer": 0,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia.",
        "audio": "Nos acordamos de hablar después de la reunión.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "Revisión breve de «Alegrarse sin invadir». Me preocupa que tú no ___ descansando bien.",
        "answers": [
          [
            "estés"
          ]
        ]
      },
      {
        "type": "open",
        "prompt": "Reformulación de «Alegrarse sin invadir». Texto de partida: Recibo apoyo y eso me produce alegría. Consigna: Reformula con Me alegra y un infinitivo. Compara el sentido y la forma con el modelo; puede haber más de una respuesta válida.",
        "model": "Me alegra recibir apoyo.",
        "checklist": [
          "Mantengo los datos y la intención del texto de partida.",
          "Uso la estructura pedida con concordancia y referencias coherentes.",
          "Acepto otro orden o una formulación equivalente si conserva el sentido; consulto la duda en clase."
        ]
      },
      {
        "type": "error",
        "sentence": "Me molesta que cambias el plan sin avisar.",
        "answers": [
          "Me molesta que cambies el plan sin avisar."
        ],
        "why": "La reacción emocional introduce subjuntivo."
      },
      {
        "type": "order",
        "words": [
          "Nos",
          "acordamos",
          "de",
          "hablar",
          "después",
          "de",
          "la",
          "reunión."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación escrita de «Alegrarse sin invadir»: responde en 50–70 palabras a una persona que ha entendido solo la mitad de tu propuesta. Conserva el dato decisivo y solicita confirmación.",
        "checklist": [
          "Reformulo en lugar de copiar.",
          "Mantengo la intención y los datos."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación oral de «Alegrarse sin invadir»: durante un minuto explica qué cambiarías tras recibir una objeción y por qué; añade una pregunta para continuar.",
        "checklist": [
          "Justifico el cambio.",
          "Abro un turno real para el interlocutor."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Responder a noticias personales y explicar emociones sin culpar.",
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
