import type { Module } from "../../types";

export const b1w03: Module = {
  "id": "b1-03",
  "level": "b1",
  "week": 3,
  "kind": "core",
  "title": "Que te vaya bien",
  "subtitle": "Desear, animar y felicitar con atención a la situación personal.",
  "stop": {
    "place": "Valencia",
    "country": "España"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.subjuntivo-presente-formas",
    "b1.gram.deseos",
    "b1.voc.celebraciones-deseos",
    "b1.pron.acento-subjuntivo",
    "b1.fun.desear",
    "b1.wri.mensaje-deseos",
    "b1.gram.grado-adjetivo"
  ],
  "reviewObjectives": [
    "b1.gram.contraste-pasados",
    "b1.voc.noticias-sucesos",
    "b1.pron.habla-rapida",
    "b1.fun.reaccionar-relato",
    "b1.read.cronica",
    "b1.pron.reducciones-preposiciones",
    "b1.gram.referencia-nominal"
  ],
  "prerequisites": [
    "b1-02"
  ],
  "goal": {
    "canDo": "Puedo desear, animar y felicitar con atención a la situación personal.",
    "steps": [
      "Reconstruye la situación a partir del audio y la lectura.",
      "Relaciona las formas con una intención y comprueba tus elecciones.",
      "Prepara un texto revisado y una intervención con preguntas.",
      "Lleva a clase una propuesta propia y una duda concreta."
    ]
  },
  "theory": {
    "intro": "La misión de esta semana: Desear, animar y felicitar con atención a la situación personal.",
    "parts": [
      {
        "heading": "Forma y significado",
        "body": [
          "El presente de subjuntivo aparece en deseos con ojalá, espero que y quiero que. Para muchas formas partes del yo presente y cambias la vocal: hablo → hable, como → coma, vivo → viva; tengo → tenga. Aprende aparte sea, vaya, haya, sepa y esté."
        ],
        "examples": [
          {
            "es": "Espero que tengas un buen comienzo."
          },
          {
            "es": "Ojalá encuentres un equipo amable."
          },
          {
            "es": "Que lo pases muy bien en la celebración."
          }
        ],
        "mistakes": [
          {
            "wrong": "Espero que tienes tiempo para descansar.",
            "right": "Espero que tengas tiempo para descansar.",
            "why": "Espero que introduce aquí un deseo."
          }
        ]
      },
      {
        "heading": "Organizar la comunicación",
        "body": [
          "Que te vaya bien no describe un hecho: expresa un deseo. Con quiero viajar el deseo y la acción pertenecen a la misma persona; con quiero que viajes cambia quién realiza la acción. No prometas que todo saldrá bien: acompaña el deseo con ayuda concreta y una pregunta abierta."
        ],
        "examples": [
          {
            "es": "Quiero acompañarte a la estación."
          },
          {
            "es": "Quiero que me escribas cuando puedas."
          },
          {
            "es": "Espero que estés tranquilo esta noche."
          }
        ]
      },
      {
        "heading": "Grado y apócope del adjetivo",
        "body": [
          "Antes de un nombre masculino singular usamos buen y mal: un buen comienzo, un mal día. Grande se acorta normalmente a gran ante singular: una gran oportunidad. Igual de compara una cualidad; -ísimo intensifica con concordancia y el más de compara dentro de un conjunto. No confundas intensificar con aportar una prueba."
        ],
        "examples": [
          {
            "es": "Te deseo un buen comienzo en esta gran oportunidad."
          },
          {
            "es": "Estoy contentísima; tú estás igual de ilusionada."
          },
          {
            "es": "Es el proyecto más interesante de los tres."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "b1-03-forms",
        "type": "gap",
        "prompt": "Completa estas situaciones de «Que te vaya bien» con la forma que expresa la relación indicada.",
        "items": [
          {
            "q": "Espero que tu familia ___ bien.",
            "answers": [
              [
                "esté"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Ojalá la entrevista ___ bien.",
            "answers": [
              [
                "salga"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          },
          {
            "q": "Que ___ mucha suerte en tu nuevo trabajo.",
            "answers": [
              [
                "tengas"
              ]
            ],
            "why": "Relaciona la forma con la intención y el contexto temporal de la oración."
          }
        ],
        "bank": [
          "esté",
          "salga",
          "tengas"
        ]
      },
      {
        "id": "b1-03-repair",
        "type": "error",
        "prompt": "Revisa la coherencia y la forma en estas frases del caso de la semana.",
        "items": [
          {
            "sentence": "Espero que tienes tiempo para descansar.",
            "answers": [
              "Espero que tengas tiempo para descansar."
            ],
            "why": "Espero que introduce aquí un deseo."
          },
          {
            "sentence": "Ojalá eres feliz allí.",
            "answers": [
              "Ojalá seas feliz allí."
            ],
            "why": "El deseo con ojalá requiere subjuntivo."
          },
          {
            "sentence": "Quiero que yo viajar contigo.",
            "answers": [
              "Quiero viajar contigo."
            ],
            "why": "Con el mismo sujeto se usa normalmente infinitivo."
          }
        ]
      },
      {
        "id": "b1-03-grado-adjetivo",
        "type": "gap",
        "prompt": "Aplica grado y apócope del adjetivo a la misión de esta semana.",
        "bank": [
          "buen",
          "gran",
          "de"
        ],
        "items": [
          {
            "q": "Te deseo un ___ comienzo.",
            "answers": [
              [
                "buen"
              ]
            ],
            "why": "Antes de un nombre masculino singular usamos buen y mal: un buen comienzo, un mal día. Grande se acorta normalmente a gran ante singular: una gran oportunidad. Igual de compara una cualidad; -ísimo intensifica con concordancia y el más de compara dentro de un conjunto. No confundas intensificar con aportar una prueba."
          },
          {
            "q": "Es una ___ oportunidad para aprender.",
            "answers": [
              [
                "gran"
              ]
            ],
            "why": "Antes de un nombre masculino singular usamos buen y mal: un buen comienzo, un mal día. Grande se acorta normalmente a gran ante singular: una gran oportunidad. Igual de compara una cualidad; -ísimo intensifica con concordancia y el más de compara dentro de un conjunto. No confundas intensificar con aportar una prueba."
          },
          {
            "q": "Ana está tan ilusionada como yo: está igual ___ ilusionada.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "Antes de un nombre masculino singular usamos buen y mal: un buen comienzo, un mal día. Grande se acorta normalmente a gran ante singular: una gran oportunidad. Igual de compara una cualidad; -ísimo intensifica con concordancia y el más de compara dentro de un conjunto. No confundas intensificar con aportar una prueba."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión junto a su situación de uso; reutiliza al menos cuatro en tu producción.",
    "groups": [
      {
        "title": "Que te vaya bien · acciones y recursos",
        "items": [
          {
            "es": "empezar de cero",
            "note": "iniciar una etapa sin experiencia previa"
          },
          {
            "es": "dar el paso",
            "note": "decidirse a actuar"
          },
          {
            "es": "hacer ilusión",
            "note": "producir alegría anticipada"
          },
          {
            "es": "echar de menos",
            "note": "notar la ausencia de alguien"
          }
        ]
      },
      {
        "title": "Matices para esta misión",
        "items": [
          {
            "es": "mantener el contacto",
            "note": "seguir comunicándose"
          },
          {
            "es": "estar pendiente",
            "note": "prestar atención para ayudar"
          },
          {
            "es": "dar la enhorabuena",
            "note": "felicitar por un logro"
          },
          {
            "es": "contar conmigo",
            "note": "saber que ofrezco apoyo"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-03-lexis",
        "type": "match",
        "prompt": "Relaciona expresiones de «Que te vaya bien» con su significado en este contexto.",
        "pairs": [
          {
            "left": "empezar de cero",
            "right": "iniciar una etapa sin experiencia previa"
          },
          {
            "left": "dar el paso",
            "right": "decidirse a actuar"
          },
          {
            "left": "hacer ilusión",
            "right": "producir alegría anticipada"
          },
          {
            "left": "echar de menos",
            "right": "notar la ausencia de alguien"
          },
          {
            "left": "mantener el contacto",
            "right": "seguir comunicándose"
          },
          {
            "left": "estar pendiente",
            "right": "prestar atención para ayudar"
          },
          {
            "left": "dar la enhorabuena",
            "right": "felicitar por un logro"
          },
          {
            "left": "contar conmigo",
            "right": "saber que ofrezco apoyo"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "El acento distingue hable, hablé y esté",
    "explanation": [
      "Compara HÁ-ble y ha-BLÉ: la sílaba fuerte diferencia hable de hablé. En esté la fuerza recae al final. Pronuncia cada forma dentro de una frase, sin perder la vocal final.",
      "Escucha la síntesis como apoyo para percibir palabras y grupos. Compara después tu producción con la comprensión de otra persona; no hay evaluación automática ni demostración regional verificada."
    ],
    "examples": [
      {
        "es": "Espero que tengas un buen comienzo."
      },
      {
        "es": "Ojalá encuentres un equipo amable."
      },
      {
        "es": "Que lo pases muy bien en la celebración."
      }
    ],
    "perceive": {
      "id": "b1-03-perception",
      "type": "listen",
      "prompt": "Escucha antes de elegir qué secuencia reconoces; después repítela agrupando el sentido.",
      "items": [
        {
          "q": "Percepción 1: ¿qué reconoces al escuchar el fragmento de «Que te vaya bien»?",
          "options": [
            "La fuerza recae al final como en hablé",
            "La fuerza de hable recae en la primera sílaba"
          ],
          "answer": 1,
          "audio": "Espero que hable.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        },
        {
          "q": "Percepción 2: ¿qué reconoces al escuchar el fragmento de «Que te vaya bien»?",
          "options": [
            "Se oye hablé, con acento final",
            "Se oye hable, con acento inicial"
          ],
          "answer": 0,
          "audio": "Ayer hablé con ella.",
          "voice": "es-ES-f",
          "why": "Escucha la secuencia completa y compara el grupo indicado. La síntesis sirve como apoyo, no como evaluación de acento."
        }
      ]
    },
    "produce": [
      {
        "text": "Espero que tengas un buen comienzo.",
        "tip": "Compara HAb le y haBLÉ: la sílaba fuerte diferencia hable de hablé. En esté la fuerza recae al final. Pronuncia cada forma dentro de una frase, sin perder la vocal final.",
        "voice": "es-ES-f"
      },
      {
        "text": "Ojalá encuentres un equipo amable.",
        "tip": "Compara HAb le y haBLÉ: la sílaba fuerte diferencia hable de hablé. En esté la fuerza recae al final. Pronuncia cada forma dentro de una frase, sin perder la vocal final.",
        "voice": "es-ES-f"
      },
      {
        "text": "Que lo pases muy bien en la celebración.",
        "tip": "Compara HAb le y haBLÉ: la sílaba fuerte diferencia hable de hablé. En esté la fuerza recae al final. Pronuncia cada forma dentro de una frase, sin perder la vocal final.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Que te vaya bien · voces en conversación",
    "context": "Sara acaba de conseguir una plaza y recibe una propuesta de apoyo. Escucha primero sin transcripción. Las voces son sintéticas; no se presentan como modelos regionales verificados. Anota quién necesita qué y qué queda por confirmar.",
    "speakers": [
      {
        "id": "a",
        "name": "Amiga",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Sara",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Hola, Sara. He escuchado tu mensaje sobre el curso que empiezas el lunes. ¡Enhorabuena por la plaza! Sé que llevabas meses esperando una respuesta y me alegro mucho de que por fin haya llegado."
      },
      {
        "speaker": "b",
        "text": "Gracias. Estoy contenta, aunque me da un poco de miedo hablar delante del grupo. Todos parecen tener más experiencia. Quiero aprovechar el curso, pero también quiero dormir bien y no pasarme las noches preparando cada intervención."
      },
      {
        "speaker": "a",
        "text": "Espero que encuentres un ritmo cómodo. No necesitas demostrar todo lo que sabes el primer día. Ojalá el profesor os deje presentaros poco a poco. Si te sirve, podemos practicar tu presentación el domingo por la tarde."
      },
      {
        "speaker": "b",
        "text": "Me vendría bien, pero preferiría no aprender un discurso de memoria. Quiero explicar por qué elegí el curso y preguntar cómo trabajaremos. ¿Puedes escucharme y decirme qué parte no se entiende?"
      },
      {
        "speaker": "a",
        "text": "Claro. Que te salga natural es más importante que decirlo todo perfecto. Te escucharé primero sin interrumpir y después te haré dos preguntas, como si fuera un compañero. Así también practicas reaccionar."
      },
      {
        "speaker": "b",
        "text": "Perfecto. Entonces hablamos el domingo a las seis. Gracias por ofrecer algo tan concreto. Y que disfrutes tú de tu celebración del sábado; espero que haga buen tiempo y que podáis cenar en el patio. Para mí es una gran oportunidad y estoy contentísima. Eso no significa que todos los días vayan a ser perfectos; espero mantener las ganas incluso después de un mal día."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha sin abrir el texto. Identifica la situación y la intención principal.",
        "exercise": {
          "id": "b1-03-audio-0",
          "type": "choice",
          "prompt": "Que te vaya bien: Escucha sin abrir el texto. Identifica la situación y la intención principal.",
          "items": [
            {
              "q": "¿Qué necesita Sara?",
              "options": [
                "Apoyo para empezar un curso",
                "Una invitación a dejarlo"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué siente Sara ante el curso?",
              "options": [
                "Desinterés completo",
                "Alegría y nervios"
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
          "id": "b1-03-audio-1",
          "type": "choice",
          "prompt": "Que te vaya bien: Vuelve a escuchar y anota el dato que cambia la decisión.",
          "items": [
            {
              "q": "¿Qué harán el domingo?",
              "options": [
                "Escribir todas las respuestas del curso",
                "Practicar sin memorizar un discurso"
              ],
              "answer": 1,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué quiere practicar Sara?",
              "options": [
                "Una presentación seguida de preguntas",
                "Un texto memorizado sin cambios"
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
          "id": "b1-03-audio-2",
          "type": "choice",
          "prompt": "Que te vaya bien: Escucha una tercera vez: relaciona la formulación con su función. Después puedes consultar la transcripción.",
          "items": [
            {
              "q": "¿Qué distingue «espero que encuentres» de una afirmación?",
              "options": [
                "Presenta un deseo",
                "Confirma un resultado ya conseguido"
              ],
              "answer": 0,
              "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
            },
            {
              "q": "¿Qué hace la oferta de ayuda más útil?",
              "options": [
                "Promete eliminar cualquier dificultad",
                "Se concreta en una actividad y una hora"
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
    "title": "Que te vaya bien · otra perspectiva",
    "genre": "Reportaje de vida cotidiana",
    "frame": "Texto original de SpanishCue. Lee para comprender la experiencia y la decisión; después vuelve a los detalles.",
    "text": [
      "Mañana Clara deja la ciudad para trabajar seis meses en un centro cultural. Sus amigos organizaron una despedida sencilla: cada persona llevó una tarjeta con un deseo y una ayuda posible. No querían darle una lista de consejos que nadie había pedido. Querían que se llevara algo útil y que supiera a quién llamar si necesitaba compañía.",
      "La primera tarjeta decía: «Espero que encuentres gente con la que puedas compartir tus ideas. Si quieres, el domingo podemos hablar por videollamada». Otra amiga escribió: «Que disfrutes del trabajo, pero también de los ratos libres. Te mando el contacto de una asociación que organiza paseos». Clara agradeció especialmente los mensajes que reconocían sus nervios. Le hacía ilusión viajar, aunque también le preocupaba no conocer a nadie. Escuchar únicamente «seguro que será perfecto» no la ayudaba tanto como poder hablar de sus dudas.",
      "Para Clara era una gran oportunidad, aunque no esperaba que cada día fuera buenísimo. Decía que estaba igual de ilusionada que de nerviosa y que un mal día no definiría toda la experiencia.",
      "Al final de la cena, Clara leyó su propia tarjeta para el grupo. Esperaba que mantuvieran las reuniones y que le contaran incluso las noticias pequeñas. No quería recibir solo fotografías de celebraciones importantes. «Ojalá sigamos compartiendo las cosas normales», dijo. Antes de irse acordaron una primera llamada, pero sin convertirla en una obligación semanal. La despedida no eliminó la tristeza; la convirtió en un comienzo que podían acompañar."
    ],
    "tasks": [
      {
        "id": "b1-03-read-evidence",
        "type": "choice",
        "prompt": "En la lectura «Que te vaya bien», elige la respuesta respaldada por el texto.",
        "items": [
          {
            "q": "¿Qué ayuda más a Clara?",
            "options": [
              "Promesas de que no tendrá problemas",
              "Mensajes que reconocen sus dudas y ofrecen apoyo"
            ],
            "answer": 1,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          },
          {
            "q": "¿Cómo plantean las llamadas?",
            "options": [
              "Como una obligación diaria",
              "Como un contacto flexible"
            ],
            "answer": 0,
            "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
          }
        ]
      },
      {
        "id": "b1-03-read-mediation",
        "type": "open",
        "prompt": "Reformula para una persona que no ha leído «Que te vaya bien».",
        "items": [
          {
            "prompt": "Explica en 50–70 palabras qué problema aparece en «Que te vaya bien», qué cambia y qué dato no debe perder quien recibe tu resumen. Cita un detalle del texto.",
            "model": "Mañana Clara deja la ciudad para trabajar seis meses en un centro cultural.",
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
          "quote": "Mañana Clara deja la ciudad para trabajar seis meses en un centro cultural.",
          "note": "Localiza quién actúa y qué perspectiva temporal o comunicativa establece esta apertura."
        },
        {
          "quote": "La despedida no eliminó la tristeza; la convirtió en un comienzo que podían acompañar.",
          "note": "Explica qué aporta el cierre al propósito del texto; compáralo con la apertura."
        }
      ]
    }
  },
  "practice": {
    "exercises": [
      {
        "id": "b1-03-order",
        "type": "order",
        "prompt": "Reconstruye dos mensajes útiles para «Que te vaya bien» y léelos con grupos de sentido.",
        "items": [
          {
            "words": [
              "Quiero",
              "acompañarte",
              "a",
              "la",
              "estación."
            ]
          },
          {
            "words": [
              "Quiero",
              "que",
              "me",
              "escribas",
              "cuando",
              "puedas."
            ]
          }
        ]
      },
      {
        "id": "b1-03-classify",
        "type": "classify",
        "prompt": "Clasifica estas formulaciones según su función en «Que te vaya bien».",
        "categories": [
          "Deseo para otra persona",
          "Intención propia"
        ],
        "items": [
          {
            "text": "Espero que encuentres compañía.",
            "cat": 0
          },
          {
            "text": "Que disfrutes del comienzo.",
            "cat": 0
          },
          {
            "text": "Quiero preparar mi presentación.",
            "cat": 1
          },
          {
            "text": "Voy a practicar el domingo.",
            "cat": 1
          }
        ]
      },
      {
        "id": "b1-03-draft",
        "type": "open",
        "prompt": "Ensaya partes de tu texto antes de producirlo completo.",
        "items": [
          {
            "prompt": "Que te vaya bien: escribe una apertura de 35–45 palabras para la tarea «Escribe 140–170 palabras para despedir a una persona que cambia de ciudad. Reconoce dos sentimientos, expresa tres deseos y ofrece ayuda concreta sin imponerla.» sin copiar el modelo.",
            "model": "Hola, Inés: me hizo mucha ilusión saber que ya tienes fecha para la mudanza.",
            "checklist": [
              "Presento destinatario y propósito.",
              "Incluyo un dato pertinente del caso."
            ]
          },
          {
            "prompt": "Que te vaya bien: redacta un cierre de 30–40 palabras que permita al destinatario responder o actuar.",
            "model": "Te voy a echar de menos en los paseos del sábado. Que disfrutes de esta etapa y que sigamos contándonos las cosas pequeñas. Escríbeme cuando te apetezca.",
            "checklist": [
              "El cierre corresponde a esta situación.",
              "La acción siguiente se entiende sin adivinar."
            ]
          }
        ]
      },
      {
        "id": "b1-03-retrieval",
        "type": "open",
        "prompt": "Recupera los recursos lingüísticos sin consultar la explicación. Para los casos con fuentes, usa los datos suministrados y comprueba después los criterios.",
        "items": [
          {
            "prompt": "En el contexto de «Que te vaya bien», recupera la semana 2: Redacta una crónica de un incidente del barrio: fondo, hecho, antecedente y consecuencia actual. Atribuye un dato a un testigo, reacciona con empatía y explica una reducción informal sin escribirla en la noticia. Fuente suministrada: Datos para esta crónica de práctica: el lunes llovía; una rama cayó en el patio del centro. Una testigo, Ana, había avisado de que estaba suelta. La víctima fue un vecino que sufrió un golpe leve. El equipo cerró esa zona y esta semana ha revisado los árboles. No se sabe por qué no se atendió antes el aviso.",
            "model": "Ayer rescataron a dos excursionistas. Llovía y el sendero estaba cerrado.",
            "checklist": [
              "Puedo elegir entre perfecto, indefinido, imperfecto y pluscuamperfecto según la perspectiva.",
              "Puedo contar un suceso con vocabulario de noticias: ocurrir, testigo, herido, rescatar.",
              "Puedo reconocer para reducido a pa en una cita informal y recuperar la forma completa para escribir.",
              "Puedo mostrar interés, sorpresa o empatía mientras otra persona cuenta algo.",
              "Puedo distinguir antecedentes, hechos principales y consecuencias en una noticia.",
              "Puedo reconocer para reducido a pa y las contracciones al y del, y distinguir su uso oral y escrito.",
              "Conservo los hechos y señalo lo pendiente; no invento decisiones de la fuente."
            ]
          },
          {
            "prompt": "Tras recuperar el caso anterior en «Que te vaya bien», escribe 40–60 palabras para explicar qué elección lingüística fue más difícil y ofrece dos versiones que cambien la intención o el tiempo. Comprueba tus ejemplos con la teoría de la semana recuperada.",
            "model": "Antes presenté un hecho como seguro. Ahora lo reformulo como una duda: Espero que tengas un buen comienzo.",
            "checklist": [
              "Comparo dos formulaciones concretas.",
              "Explico el cambio de intención o referencia."
            ]
          },
          {
            "prompt": "Aplicación diferida en «Que te vaya bien»: Recupera la crónica: presenta un testigo y una víctima, vuelve a referirte a ellos con artículo y explica por qué una víctima puede ser un hombre. Usa el plural de ley en una frase contextualizada. Fuente suministrada: Datos para esta crónica de práctica: el lunes llovía; una rama cayó en el patio del centro. Una testigo, Ana, había avisado de que estaba suelta. La víctima fue un vecino que sufrió un golpe leve. El equipo cerró esa zona y esta semana ha revisado los árboles. No se sabe por qué no se atendió antes el aviso.",
            "model": "Una testigo llamó; la testigo esperó al equipo. La víctima estaba tranquila: era un vecino del barrio.",
            "checklist": [
              "Puedo mantener la referencia con artículos y concordancia, incluidos persona, víctima y testigo.",
              "Explico cómo cambia el sentido si sustituyo una forma."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe 140–170 palabras para despedir a una persona que cambia de ciudad. Reconoce dos sentimientos, expresa tres deseos y ofrece ayuda concreta sin imponerla.",
    "context": "Destinatario, propósito y datos deben mantenerse claros. El modelo muestra una posibilidad, no una respuesta que debas copiar.",
    "steps": [
      "Planifica destinatario, dos ideas centrales y un dato de apoyo de esta semana.",
      "Escribe una primera versión sin consultar el modelo.",
      "Compara después organización y lenguaje; cambia al menos una frase para mejorar claridad."
    ],
    "useLanguage": [
      "Espero que tengas un buen comienzo.",
      "Ojalá encuentres un equipo amable.",
      "Que lo pases muy bien en la celebración.",
      "Quiero acompañarte a la estación.",
      "Te deseo un buen comienzo en esta gran oportunidad.",
      "Estoy contentísima; tú estás igual de ilusionada."
    ],
    "model": [
      "Hola, Inés: me hizo mucha ilusión saber que ya tienes fecha para la mudanza. Imagino que estás contenta y también un poco nerviosa; empezar en otra ciudad trae muchas preguntas.",
      "Recuerdo que en tu anterior cambio te ayudó conocer primero el transporte y las tiendas del barrio. Quizá esta vez también te sirva dedicar una tarde a pasear sin prisa, antes de intentar organizar toda tu nueva rutina.",
      "Espero que encuentres un barrio agradable y que el equipo te reciba bien. Ojalá tengas tiempo para descubrir lugares fuera del trabajo. Si te viene bien, puedo ayudarte a comparar las rutas desde la estación hasta tu nueva casa. También podemos hablar después de tu primera semana, pero sin fijar una hora hasta que conozcas tus horarios. Te voy a echar de menos en los paseos del sábado. Que disfrutes de esta etapa y que sigamos contándonos las cosas pequeñas. Escríbeme cuando te apetezca."
    ],
    "checklist": [
      "Cumplo el propósito y el registro de la consigna.",
      "Organizo el texto en partes conectadas y doy razones o detalles.",
      "Reutilizo cuatro expresiones de vocabulario de la semana.",
      "Compruebo tiempos, referencias, concordancia y lo que está confirmado.",
      "Reviso una frase y puedo explicar por qué la cambié.",
      "Integro y compruebo este recurso: grado y apócope del adjetivo."
    ],
    "words": [
      140,
      170
    ]
  },
  "speaking": {
    "intro": "Prepara ideas, no un guion completo. Puedes grabarte localmente; el curso no puntúa tu pronunciación ni sube tu audio.",
    "tasks": [
      {
        "title": "Intervención organizada",
        "prompt": "Graba una despedida de dos minutos para una compañera. Tu interlocutor responde que tiene miedo de estar sola: pregunta qué apoyo desea y adapta tus buenos deseos.",
        "prep": [
          "Anota una apertura, dos detalles y una conclusión.",
          "Elige una expresión para pedir o dar aclaración.",
          "Usa también: Te deseo un buen comienzo en esta gran oportunidad."
        ],
        "seconds": 120,
        "selfCheck": [
          "El oyente puede reconstruir mi idea.",
          "Doy razones o ejemplos y marco pausas útiles."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "En la situación «Que te vaya bien», tu interlocutor no comparte tu primera interpretación. Pregunta qué ha entendido, responde a su objeción y reformula tu idea con un ejemplo distinto; confirma qué acordáis y qué queda pendiente.",
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
        "task": "Graba una despedida de dos minutos para una compañera. Tu interlocutor responde que tiene miedo de estar sola: pregunta qué apoyo desea y adapta tus buenos deseos."
      },
      {
        "move": "Pregunta",
        "task": "Pide a tu profe un dato adicional sobre «Que te vaya bien» que pueda cambiar tu propuesta; explica por qué lo necesitas.",
        "phrases": [
          "¿He entendido bien que…?",
          "¿Qué cambiaría si…?"
        ]
      },
      {
        "move": "Reformula",
        "task": "Resume la postura de tu profe sobre «Que te vaya bien» para una tercera persona y comprueba si tu versión conserva las condiciones."
      }
    ],
    "bring": "Tu borrador y versión revisada, una grabación local si la hiciste y una pregunta sobre una elección lingüística."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Tras trabajar ambas fuentes: ¿Cómo plantean las llamadas? Relaciona tu respuesta con «Que te vaya bien».",
        "options": [
          "Como una obligación diaria",
          "Como un contacto flexible"
        ],
        "answer": 1,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia."
      },
      {
        "type": "listen",
        "q": "Escucha el fragmento final de evaluación de «Que te vaya bien»: ¿qué formulación se oye?",
        "options": [
          "Espero que estés tranquilo esta noche.",
          "Que lo pases muy bien en la celebración."
        ],
        "answer": 0,
        "why": "La respuesta se apoya en la información y la intención del texto; vuelve a localizar la evidencia.",
        "audio": "Espero que estés tranquilo esta noche.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "Revisión breve de «Que te vaya bien». Espero que tu familia ___ bien.",
        "answers": [
          [
            "esté"
          ]
        ]
      },
      {
        "type": "open",
        "prompt": "Reformulación de «Que te vaya bien». Texto de partida: Deseo que tú tienes una buena etapa. Consigna: Expresa el deseo con Espero que y la forma adecuada. Compara el sentido y la forma con el modelo; puede haber más de una respuesta válida.",
        "model": "Espero que tengas una buena etapa.",
        "checklist": [
          "Mantengo los datos y la intención del texto de partida.",
          "Uso la estructura pedida con concordancia y referencias coherentes.",
          "Acepto otro orden o una formulación equivalente si conserva el sentido; consulto la duda en clase."
        ]
      },
      {
        "type": "error",
        "sentence": "Ojalá encuentra buenos compañeros en el curso.",
        "answers": [
          "Ojalá encuentre buenos compañeros en el curso."
        ],
        "why": "El deseo usa subjuntivo."
      },
      {
        "type": "order",
        "words": [
          "Espero",
          "que",
          "estés",
          "tranquilo",
          "esta",
          "noche."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación escrita de «Que te vaya bien»: responde en 50–70 palabras a una persona que ha entendido solo la mitad de tu propuesta. Conserva el dato decisivo y solicita confirmación.",
        "checklist": [
          "Reformulo en lugar de copiar.",
          "Mantengo la intención y los datos."
        ]
      },
      {
        "type": "open",
        "prompt": "Evaluación oral de «Que te vaya bien»: durante un minuto explica qué cambiarías tras recibir una objeción y por qué; añade una pregunta para continuar.",
        "checklist": [
          "Justifico el cambio.",
          "Abro un turno real para el interlocutor."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Desear, animar y felicitar con atención a la situación personal.",
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
