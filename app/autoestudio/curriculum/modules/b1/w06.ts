import type { Module } from "../../types";

export const b1w06: Module = {
  "id": "b1-06",
  "level": "b1",
  "week": 6,
  "kind": "core",
  "title": "Antes de compartir la noticia",
  "subtitle": "Opinar, expresar duda y distinguir una afirmación de una valoración.",
  "stop": {
    "place": "Buenos Aires",
    "country": "Argentina"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.opinion-subjuntivo",
    "b1.gram.valoracion",
    "b1.voc.medios-redes",
    "b1.pron.duda-certeza",
    "b1.fun.opinar-matizar",
    "b1.read.articulo-opinion",
    "b1.gram.demostrativos-discurso"
  ],
  "reviewObjectives": [
    "b1.rev.checkpoint-1",
    "b1.lis.podcast-consejos"
  ],
  "prerequisites": [
    "b1-05"
  ],
  "goal": {
    "canDo": "Puedo opinar, expresar duda y distinguir una afirmación de una valoración.",
    "steps": [
      "Reconstruye la situación a partir del audio y la lectura.",
      "Relaciona las formas con una intención y comprueba tus elecciones.",
      "Prepara un texto revisado y una intervención con preguntas.",
      "Lleva a clase una propuesta propia y una duda concreta."
    ]
  },
  "theory": {
    "intro": "La misión de esta semana: Opinar, expresar duda y distinguir una afirmación de una valoración.",
    "parts": [
      {
        "heading": "Forma y significado",
        "body": [
          "Creo que y es verdad que presentan información como afirmada y suelen llevar indicativo. No creo que, es posible que y dudo que introducen aquí subjuntivo. La selección depende de cómo presentas el contenido, no de que una noticia sea verdadera en el mundo."
        ],
        "examples": [
          {
            "es": "Creo que la noticia necesita una fecha."
          },
          {
            "es": "No creo que esa imagen sea reciente."
          },
          {
            "es": "Es posible que falte una parte del mensaje."
          }
        ],
        "mistakes": [
          {
            "wrong": "No creo que es una prueba suficiente.",
            "right": "No creo que sea una prueba suficiente.",
            "why": "La opinión negada introduce subjuntivo en este uso."
          }
        ]
      },
      {
        "heading": "Organizar la comunicación",
        "body": [
          "Antes de compartir algo, identifica quién lo publicó, cuándo y con qué prueba. Puedes aceptar una parte y matizar otra: es verdad que facilita el contacto, pero no creo que sustituya una conversación. Una opinión razonada necesita un ejemplo y puede reconocer una limitación."
        ],
        "examples": [
          {
            "es": "Es verdad que el vídeo circula mucho."
          },
          {
            "es": "Desde mi punto de vista, conviene esperar."
          },
          {
            "es": "Puede ser útil, aunque no demuestra todo."
          }
        ]
      },
      {
        "heading": "Demostrativos y referencia en el discurso",
        "body": [
          "Esto, eso y aquello pueden recuperar una situación o un enunciado completo, no solo señalar objetos. El lector debe saber a qué remiten: compartieron una foto sin fecha; eso causó confusión. Este aviso modifica un nombre; esto funciona sin nombre. Si hay dos antecedentes posibles, repite el nombre o reformula."
        ],
        "examples": [
          {
            "es": "El vídeo no tiene fecha; eso limita su utilidad."
          },
          {
            "es": "Esto es lo que sabemos: el cartel menciona obras."
          },
          {
            "es": "Estos otros mensajes sí incluyen un enlace."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "b1-06-forms",
        "type": "gap",
        "prompt": "Completa estas situaciones de «Antes de compartir la noticia» con la forma que expresa la relación indicada.",
        "items": [
          {
            "q": "No creo que el autor ___ todos los datos.",
            "answers": [
              [
                "tenga"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Es posible que la foto ___ antigua.",
            "answers": [
              [
                "sea"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Creo que el aviso ___ incompleto.",
            "answers": [
              [
                "está"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          }
        ],
        "bank": [
          "tenga",
          "sea",
          "está"
        ]
      },
      {
        "id": "b1-06-repair",
        "type": "error",
        "prompt": "Revisa la coherencia y la forma en estas frases del caso de la semana.",
        "items": [
          {
            "sentence": "No creo que es una prueba suficiente.",
            "answers": [
              "No creo que sea una prueba suficiente."
            ],
            "why": "La opinión negada introduce subjuntivo en este uso."
          },
          {
            "sentence": "Es posible que falta contexto.",
            "answers": [
              "Es posible que falte contexto."
            ],
            "why": "Posibilidad con es posible que lleva subjuntivo."
          },
          {
            "sentence": "Creo que sea un error de fecha.",
            "answers": [
              "Creo que es un error de fecha."
            ],
            "why": "La afirmación con creo que lleva aquí indicativo."
          }
        ]
      },
      {
        "id": "b1-06-demostrativos-discurso",
        "type": "gap",
        "prompt": "Aplica demostrativos y referencia en el discurso a la misión de esta semana.",
        "bank": [
          "eso",
          "Esto",
          "otros"
        ],
        "items": [
          {
            "q": "El vídeo no tiene fecha; ___ dificulta comprobarlo.",
            "answers": [
              [
                "eso"
              ]
            ],
            "why": "Esto, eso y aquello pueden recuperar una situación o un enunciado completo, no solo señalar objetos. El lector debe saber a qué remiten: compartieron una foto sin fecha; eso causó confusión. Este aviso modifica un nombre; esto funciona sin nombre. Si hay dos antecedentes posibles, repite el nombre o reformula."
          },
          {
            "q": "___ es lo que puedo confirmar: el parque está abierto.",
            "answers": [
              [
                "Esto"
              ]
            ],
            "why": "Esto, eso y aquello pueden recuperar una situación o un enunciado completo, no solo señalar objetos. El lector debe saber a qué remiten: compartieron una foto sin fecha; eso causó confusión. Este aviso modifica un nombre; esto funciona sin nombre. Si hay dos antecedentes posibles, repite el nombre o reformula."
          },
          {
            "q": "Estos ___ avisos sí tienen fecha.",
            "answers": [
              [
                "otros"
              ]
            ],
            "why": "Esto, eso y aquello pueden recuperar una situación o un enunciado completo, no solo señalar objetos. El lector debe saber a qué remiten: compartieron una foto sin fecha; eso causó confusión. Este aviso modifica un nombre; esto funciona sin nombre. Si hay dos antecedentes posibles, repite el nombre o reformula."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión junto a su situación de uso; reutiliza al menos cuatro en tu producción.",
    "groups": [
      {
        "title": "Antes de compartir la noticia · acciones y recursos",
        "items": [
          {
            "es": "contrastar una noticia",
            "note": "compararla con otras fuentes"
          },
          {
            "es": "fuera de contexto",
            "note": "sin la situación que permite entenderla"
          },
          {
            "es": "una fuente fiable",
            "note": "un origen que merece confianza por sus pruebas"
          },
          {
            "es": "proteger la privacidad",
            "note": "limitar el acceso a datos personales"
          }
        ]
      },
      {
        "title": "Matices para esta misión",
        "items": [
          {
            "es": "compartir sin comprobar",
            "note": "difundir algo antes de verificarlo"
          },
          {
            "es": "un titular llamativo",
            "note": "una frase inicial que atrae atención"
          },
          {
            "es": "tener influencia",
            "note": "afectar a decisiones ajenas"
          },
          {
            "es": "un algoritmo",
            "note": "un procedimiento que ordena información"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-06-lexis",
        "type": "match",
        "prompt": "Relaciona expresiones de «Antes de compartir la noticia» con su significado en este contexto.",
        "pairs": [
          {
            "left": "contrastar una noticia",
            "right": "compararla con otras fuentes"
          },
          {
            "left": "fuera de contexto",
            "right": "sin la situación que permite entenderla"
          },
          {
            "left": "una fuente fiable",
            "right": "un origen que merece confianza por sus pruebas"
          },
          {
            "left": "proteger la privacidad",
            "right": "limitar el acceso a datos personales"
          },
          {
            "left": "compartir sin comprobar",
            "right": "difundir algo antes de verificarlo"
          },
          {
            "left": "un titular llamativo",
            "right": "una frase inicial que atrae atención"
          },
          {
            "left": "tener influencia",
            "right": "afectar a decisiones ajenas"
          },
          {
            "left": "un algoritmo",
            "right": "un procedimiento que ordena información"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Presentar dudas sin borrar las palabras clave",
    "explanation": [
      "Al expresar una duda, conserva un volumen suficiente y destaca quizá o no creo. No confíes solo en la melodía para distinguir certeza de posibilidad.",
      "Escucha la síntesis como apoyo para percibir palabras y grupos. Compara después tu producción con la comprensión de otra persona; no hay evaluación automática ni demostración regional verificada."
    ],
    "examples": [
      {
        "es": "Creo que la noticia necesita una fecha."
      },
      {
        "es": "No creo que esa imagen sea reciente."
      },
      {
        "es": "Es posible que falte una parte del mensaje."
      }
    ],
    "perceive": {
      "id": "b1-06-perception",
      "type": "listen",
      "prompt": "Escucha antes de elegir qué secuencia reconoces; después repítela agrupando el sentido.",
      "items": [
        {
          "q": "Percepción 1: ¿qué reconoces al escuchar el fragmento de «Antes de compartir la noticia»?",
          "options": [
            "Se oye quizá antes de la hipótesis",
            "Se oye seguro antes de la hipótesis"
          ],
          "answer": 0,
          "audio": "Quizá falte una parte.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        },
        {
          "q": "Percepción 2: ¿qué reconoces al escuchar el fragmento de «Antes de compartir la noticia»?",
          "options": [
            "Se oye no es verdad que",
            "Se oye una afirmación explícita"
          ],
          "answer": 1,
          "audio": "Es verdad que circula mucho.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        }
      ]
    },
    "produce": [
      {
        "text": "Creo que la noticia necesita una fecha.",
        "tip": "Al expresar una duda, conserva un volumen suficiente y destaca quizá o no creo. No confíes solo en la melodía para distinguir certeza de posibilidad.",
        "voice": "es-ES-f"
      },
      {
        "text": "No creo que esa imagen sea reciente.",
        "tip": "Al expresar una duda, conserva un volumen suficiente y destaca quizá o no creo. No confíes solo en la melodía para distinguir certeza de posibilidad.",
        "voice": "es-ES-f"
      },
      {
        "text": "Es posible que falte una parte del mensaje.",
        "tip": "Al expresar una duda, conserva un volumen suficiente y destaca quizá o no creo. No confíes solo en la melodía para distinguir certeza de posibilidad.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Antes de compartir la noticia · voces en conversación",
    "context": "Dos miembros de un grupo revisan un aviso que afecta a su paseo. Escucha primero sin transcripción. Las voces son sintéticas; no se presentan como modelos regionales verificados. Anota quién necesita qué y qué queda por confirmar.",
    "speakers": [
      {
        "id": "a",
        "name": "Claudia",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Nico",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Vi el vídeo que mandaste al grupo y me llamó la atención. Dice que van a cerrar todos los parques los domingos. ¿Sabes de dónde salió? No encuentro el nombre de la persona que lo grabó ni una fecha."
      },
      {
        "speaker": "b",
        "text": "Me lo envió un amigo. Creo que lo grabaron cerca de su casa, pero ahora que lo dices no estoy seguro. Lo compartí porque pensé que podía afectar al paseo que estamos preparando."
      },
      {
        "speaker": "a",
        "text": "Es verdad que conviene avisar de los cambios. Lo que no creo es que este vídeo demuestre un cierre general. En el cartel del fondo solo se habla de una zona en obras y no se ve el mes."
      },
      {
        "speaker": "b",
        "text": "Tienes razón en que falta información. Es posible que sea de otro año. Voy a preguntarle a mi amigo y, mientras tanto, escribiré que no está confirmado. No quiero que nadie cancele sus planes por mi mensaje."
      },
      {
        "speaker": "a",
        "text": "Me parece una buena solución. También podemos consultar el aviso del parque concreto al que queremos ir. Si está abierto, seguimos con el paseo; si hay una parte cerrada, buscamos otro recorrido."
      },
      {
        "speaker": "b",
        "text": "Ya he corregido el mensaje. Me habría gustado comprobarlo antes, pero al menos ahora el grupo sabe que es una duda. La próxima vez abriré la información completa antes de quedarme solo con el titular o con unos segundos de vídeo. El cartel no muestra el mes. Eso no demuestra que sea falso, pero sí que necesitamos más contexto antes de usarlo para decidir el paseo."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha sin abrir el texto. Identifica la situación y la intención principal.",
        "exercise": {
          "id": "b1-06-audio-0",
          "type": "choice",
          "prompt": "Antes de compartir la noticia: Escucha sin abrir el texto. Identifica la situación y la intención principal.",
          "items": [
            {
              "q": "¿Qué están decidiendo?",
              "options": [
                "Cómo grabar un anuncio comercial",
                "Cómo corregir una información dudosa"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Cómo reacciona quien compartió el vídeo?",
              "options": [
                "Acepta corregir lo no confirmado",
                "Insiste en que toda imagen es prueba"
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
          "id": "b1-06-audio-1",
          "type": "choice",
          "prompt": "Antes de compartir la noticia: Vuelve a escuchar y anota el dato que cambia la decisión.",
          "items": [
            {
              "q": "¿Qué muestra realmente el cartel?",
              "options": [
                "Una zona en obras",
                "Todos los parques cerrados"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué comprobarán para el paseo?",
              "options": [
                "Todas las calles de la ciudad",
                "El parque concreto que quieren visitar"
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
          "id": "b1-06-audio-2",
          "type": "choice",
          "prompt": "Antes de compartir la noticia: Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
          "items": [
            {
              "q": "¿Qué hace la segunda persona al final?",
              "options": [
                "Confirma el cierre general",
                "Corrige su mensaje"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué indica «ahora que lo dices»?",
              "options": [
                "Reconsidera su certeza tras la observación",
                "Rechaza escuchar a su interlocutor"
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
    "title": "Antes de compartir la noticia · otra perspectiva",
    "genre": "Artículo y experiencia de comunidad",
    "frame": "Texto original de SpanishCue. Lee para comprender la experiencia y la decisión; después vuelve a los detalles.",
    "text": [
      "En el grupo vecinal apareció un mensaje que anunciaba el cierre de la biblioteca durante todo el invierno. El titular era breve y preocupante, y varias personas lo compartieron antes de abrir el enlace. Al leer la noticia completa, Marta descubrió que se refería a una biblioteca de otra ciudad. El nombre del barrio coincidía, pero la dirección y la fecha eran diferentes.",
      "Marta no cree que la solución sea prohibir todos los mensajes sobre noticias. En su opinión, los grupos sirven para avisar de problemas y organizar ayuda. Sin embargo, considera importante que cada aviso incluya su fuente. También es posible que una información correcta se quede antigua: una actividad cancelada puede recuperarse al día siguiente. Por eso recomienda comprobar tanto el lugar como el momento al que se refiere un texto.",
      "El grupo había confundido el nombre del barrio con el de otra ciudad. Eso, y no una decisión de su biblioteca, explicaba el aviso equivocado. Marta repitió el referente para evitar una segunda confusión.",
      "Algunos vecinos creen que pedir tantas comprobaciones hará que nadie comparta nada. Marta entiende esa preocupación, aunque distingue una conversación informal de un aviso que puede cambiar los planes de muchas personas. Propone una norma sencilla: cuando no haya confirmación, escribir claramente que se trata de una duda. El grupo ha empezado a usar esa fórmula. No garantiza que desaparezcan los errores, pero permite que los lectores sepan qué está comprobado y qué necesita todavía una llamada o una consulta."
    ],
    "tasks": [
      {
        "id": "b1-06-read-evidence",
        "type": "choice",
        "prompt": "En la lectura «Antes de compartir la noticia», elige la respuesta respaldada por el texto.",
        "items": [
          {
            "q": "¿Qué dato reveló el error?",
            "options": [
              "La dirección pertenecía a otra ciudad",
              "El tamaño de la biblioteca"
            ],
            "answer": 0,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          },
          {
            "q": "¿Qué norma propone Marta?",
            "options": [
              "Prohibir las conversaciones vecinales",
              "Marcar lo no confirmado como duda"
            ],
            "answer": 1,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          }
        ]
      },
      {
        "id": "b1-06-read-mediation",
        "type": "open",
        "prompt": "Reformula para una persona que no ha leído «Antes de compartir la noticia».",
        "items": [
          {
            "prompt": "Explica en 50–70 palabras qué problema aparece en «Antes de compartir la noticia», qué cambia y qué dato no debe perder quien recibe tu resumen. Cita un detalle del texto.",
            "model": "En el grupo vecinal apareció un mensaje que anunciaba el cierre de la biblioteca durante todo el invierno.",
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
          "quote": "En el grupo vecinal apareció un mensaje que anunciaba el cierre de la biblioteca durante todo el invierno.",
          "note": "Localiza quién actúa y qué perspectiva temporal o comunicativa establece esta apertura."
        },
        {
          "quote": "No garantiza que desaparezcan los errores, pero permite que los lectores sepan qué está comprobado y qué necesita todavía una llamada o una consulta.",
          "note": "Explica qué aporta el cierre al propósito del texto; compáralo con la apertura."
        }
      ]
    }
  },
  "practice": {
    "exercises": [
      {
        "id": "b1-06-order",
        "type": "order",
        "prompt": "Reconstruye dos mensajes útiles para «Antes de compartir la noticia» y léelos con grupos de sentido.",
        "items": [
          {
            "words": [
              "Es",
              "verdad",
              "que",
              "el",
              "vídeo",
              "circula",
              "mucho."
            ]
          },
          {
            "words": [
              "Desde",
              "mi",
              "punto",
              "de",
              "vista,",
              "conviene",
              "esperar."
            ]
          }
        ]
      },
      {
        "id": "b1-06-classify",
        "type": "classify",
        "prompt": "Clasifica estas formulaciones según su función en «Antes de compartir la noticia».",
        "categories": [
          "Afirmación",
          "Duda o posibilidad"
        ],
        "items": [
          {
            "text": "Creo que el cartel es antiguo.",
            "cat": 0
          },
          {
            "text": "Es verdad que el vídeo circula.",
            "cat": 0
          },
          {
            "text": "No creo que demuestre un cierre general.",
            "cat": 1
          },
          {
            "text": "Es posible que falte la fecha.",
            "cat": 1
          }
        ]
      },
      {
        "id": "b1-06-draft",
        "type": "open",
        "prompt": "Ensaya partes de tu texto antes de producirlo completo.",
        "items": [
          {
            "prompt": "Antes de compartir la noticia: escribe una apertura de 35–45 palabras para la tarea «Escribe una intervención de 150–180 palabras para el grupo vecinal: presenta tu postura sobre compartir avisos, reconoce una ventaja, señala un riesgo y propone una norma.» sin copiar el modelo.",
            "model": "Creo que nuestro grupo es útil para enterarnos de cambios en el barrio.",
            "checklist": [
              "Presento destinatario y propósito.",
              "Incluyo un dato pertinente del caso."
            ]
          },
          {
            "prompt": "Antes de compartir la noticia: redacta un cierre de 30–40 palabras que permita al destinatario responder o actuar.",
            "model": "Cuando no tengamos confirmación, podemos decirlo claramente y preguntar si alguien dispone de más información. No me gustaría que esta norma impidiera conversar; solo quiero distinguir una opinión de un aviso que afecta a los planes de todos. ¿Os parece razonable probarla durante un mes y comentar después si funciona?",
            "checklist": [
              "El cierre corresponde a esta situación.",
              "La acción siguiente se entiende sin adivinar."
            ]
          }
        ]
      },
      {
        "id": "b1-06-retrieval",
        "type": "open",
        "prompt": "Recupera los recursos lingüísticos sin consultar la explicación. Para los casos con fuentes, usa los datos suministrados y comprueba después los criterios.",
        "items": [
          {
            "prompt": "En el contexto de «Antes de compartir la noticia», recupera la semana 5: Resuelve otro primer día complicado: reconstruye qué había pasado, pregunta por un dato que falta y responde con un deseo y un consejo que se pueda seguir.",
            "model": "Cuando abrió la puerta, ya habían empezado. Mientras esperaba, escribió a la coordinadora.",
            "checklist": [
              "Puedo contar una experiencia con los cuatro pasados y responder con deseos y consejos.",
              "Puedo identificar el problema y los consejos en un programa de radio."
            ]
          },
          {
            "prompt": "Tras recuperar el caso anterior en «Antes de compartir la noticia», escribe 40–60 palabras para explicar qué elección lingüística fue más difícil y ofrece dos versiones que cambien la intención o el tiempo. Comprueba tus ejemplos con la teoría de la semana recuperada.",
            "model": "Antes presenté un hecho como seguro. Ahora lo reformulo como una duda: Creo que la noticia necesita una fecha.",
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
    "task": "Escribe una intervención de 150–180 palabras para el grupo vecinal: presenta tu postura sobre compartir avisos, reconoce una ventaja, señala un riesgo y propone una norma.",
    "context": "Destinatario, propósito y datos deben mantenerse claros. El modelo muestra una posibilidad, no una respuesta que debas copiar.",
    "steps": [
      "Planifica destinatario, dos ideas centrales y un dato de apoyo de esta semana.",
      "Escribe una primera versión sin consultar el modelo.",
      "Compara después organización y lenguaje; cambia al menos una frase para mejorar claridad."
    ],
    "useLanguage": [
      "Creo que la noticia necesita una fecha.",
      "No creo que esa imagen sea reciente.",
      "Es posible que falte una parte del mensaje.",
      "Es verdad que el vídeo circula mucho.",
      "El vídeo no tiene fecha; eso limita su utilidad.",
      "Esto es lo que sabemos: el cartel menciona obras."
    ],
    "model": [
      "Creo que nuestro grupo es útil para enterarnos de cambios en el barrio. Gracias a un mensaje pude evitar ayer una calle cortada.",
      "También me parece importante corregir los mensajes cuando descubrimos un error. Si la rectificación queda escondida entre otras conversaciones, alguien puede seguir utilizando la primera versión. Podríamos responder al aviso original con una aclaración breve, sin ridiculizar a quien lo compartió.",
      "Sin embargo, no creo que compartir cualquier vídeo nos ayude. A veces falta la fecha o no sabemos quién explica los hechos. Es posible que una noticia correcta ya no describa la situación actual. Por eso propongo añadir siempre el enlace original y comprobar el lugar. Cuando no tengamos confirmación, podemos decirlo claramente y preguntar si alguien dispone de más información. No me gustaría que esta norma impidiera conversar; solo quiero distinguir una opinión de un aviso que afecta a los planes de todos. ¿Os parece razonable probarla durante un mes y comentar después si funciona?"
    ],
    "checklist": [
      "Cumplo el propósito y el registro de la consigna.",
      "Organizo el texto en partes conectadas y doy razones o detalles.",
      "Reutilizo cuatro expresiones de vocabulario de la semana.",
      "Compruebo tiempos, referencias, concordancia y lo que está confirmado.",
      "Reviso una frase y puedo explicar por qué la cambié.",
      "Integro y compruebo este recurso: demostrativos y referencia en el discurso."
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
        "prompt": "Defiende durante dos minutos una norma para el grupo. Tu interlocutor dice que comprobar todo lleva demasiado tiempo: responde con un ejemplo, admite una dificultad y negocia una versión sencilla.",
        "prep": [
          "Anota una apertura, dos detalles y una conclusión.",
          "Elige una expresión para pedir o dar aclaración.",
          "Usa también: El vídeo no tiene fecha; eso limita su utilidad."
        ],
        "seconds": 120,
        "selfCheck": [
          "El oyente puede reconstruir mi idea.",
          "Doy razones o ejemplos y marco pausas útiles."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "En la situación «Antes de compartir la noticia», tu interlocutor no comparte tu primera interpretación. Pregunta qué ha entendido, responde a su objeción y reformula tu idea con un ejemplo distinto; confirma qué acordáis y qué queda pendiente.",
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
        "task": "Defiende durante dos minutos una norma para el grupo. Tu interlocutor dice que comprobar todo lleva demasiado tiempo: responde con un ejemplo, admite una dificultad y negocia una versión sencilla."
      },
      {
        "move": "Pregunta",
        "task": "Pide a tu profe un dato adicional sobre «Antes de compartir la noticia» que pueda cambiar tu propuesta; explica por qué lo necesitas.",
        "phrases": [
          "¿He entendido bien que…?",
          "¿Qué cambiaría si…?"
        ]
      },
      {
        "move": "Reformula",
        "task": "Resume la postura de tu profe sobre «Antes de compartir la noticia» para una tercera persona y comprueba si tu versión conserva las condiciones."
      }
    ],
    "bring": "Tu borrador y versión revisada, una grabación local si la hiciste y una pregunta sobre una elección lingüística."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Tras trabajar ambas fuentes: ¿Qué norma propone Marta? Relaciona tu respuesta con «Antes de compartir la noticia».",
        "options": [
          "Prohibir las conversaciones vecinales",
          "Marcar lo no confirmado como duda"
        ],
        "answer": 0,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
      },
      {
        "type": "listen",
        "q": "Escucha el fragmento final de evaluación de «Antes de compartir la noticia»: ¿qué formulación se oye?",
        "options": [
          "Es posible que falte una parte del mensaje.",
          "Puede ser útil, aunque no demuestra todo."
        ],
        "answer": 1,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia.",
        "audio": "Puede ser útil, aunque no demuestra todo.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "Revisión breve de «Antes de compartir la noticia». No creo que el autor ___ todos los datos.",
        "answers": [
          [
            "tenga"
          ]
        ]
      },
      {
        "type": "open",
        "prompt": "Reformulación de «Antes de compartir la noticia». Texto de partida: Creo que la foto es de este año. Consigna: Expresa la opinión negada con No creo que. Compara el sentido y la forma con el modelo; puede haber más de una respuesta válida.",
        "model": "No creo que la foto sea de este año.",
        "checklist": [
          "Mantengo los datos y la intención del texto de partida.",
          "Uso la estructura pedida con concordancia y referencias coherentes.",
          "Acepto otro orden o una formulación equivalente si conserva el sentido; consulto la duda en clase."
        ]
      },
      {
        "type": "error",
        "sentence": "Es posible que el aviso tiene otra fecha.",
        "answers": [
          "Es posible que el aviso tenga otra fecha."
        ],
        "why": "La posibilidad se presenta con subjuntivo."
      },
      {
        "type": "order",
        "words": [
          "Puede",
          "ser",
          "útil,",
          "aunque",
          "no",
          "demuestra",
          "todo."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación escrita de «Antes de compartir la noticia»: responde en 50–70 palabras a una persona que ha entendido solo la mitad de tu propuesta. Conserva el dato decisivo y solicita confirmación.",
        "checklist": [
          "Reformulo en lugar de copiar.",
          "Mantengo la intención y los datos."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación oral de «Antes de compartir la noticia»: durante un minuto explica qué cambiarías tras recibir una objeción y por qué; añade una pregunta para continuar.",
        "checklist": [
          "Justifico el cambio.",
          "Abro un turno real para el interlocutor."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Opinar, expresar duda y distinguir una afirmación de una valoración.",
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
