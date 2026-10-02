import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w13: Module = {
  "id": "a2-13",
  "level": "a2",
  "week": 13,
  "kind": "core",
  "title": "Pedir una cita y explicar qué pasa",
  "subtitle": "Describir síntomas básicos, pedir una cita y comprobar instrucciones de una consulta.",
  "stop": {
    "place": "Comayagua",
    "country": "Honduras"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.doler",
    "a2.gram.consejos-deberias",
    "a2.voc.cuerpo-salud",
    "a2.pron.letra-x",
    "a2.fun.medico",
    "a2.lis.consulta"
  ],
  "reviewObjectives": [
    "a2.gram.estar-gerundio",
    "a2.gram.perifrasis-fase",
    "a2.voc.cambios-habitos",
    "a2.pron.asimilacion-nasal",
    "a2.fun.describir-cambios",
    "a2.spk.videollamada"
  ],
  "prerequisites": [
    "a2-12"
  ],
  "goal": {
    "canDo": "Puedo describir síntomas básicos, pedir una cita y comprobar instrucciones de una consulta.",
    "steps": [
      "Prepara la misión y recupera lo que ya sabes.",
      "Escucha primero; localiza después los datos de la lectura.",
      "Ensaya, escribe, revisa y lleva una intervención a clase."
    ]
  },
  "theory": {
    "intro": "Trabaja las formas como herramientas para resolver esta misión. Las escenas y los textos son originales y ficticios.",
    "parts": [
      {
        "heading": "Pedir una cita y explicar qué pasa · formas que necesitas",
        "body": [
          "Doler funciona como gustar: me duele la espalda; me duelen los pies. La parte del cuerpo controla singular o plural. Para estados usamos estar: estoy cansada, estoy mareado; tener aparece en tengo fiebre o tengo tos. Explica desde cuándo: desde ayer, desde hace dos días. Practicamos comunicación, no diagnóstico."
        ],
        "support": [
          "The body part controls duele or duelen. Practise describing symptoms and confirming an appointment; the scene does not prescribe treatment."
        ],
        "examples": [
          {
            "es": "Me duele la cabeza desde esta mañana."
          },
          {
            "es": "Me duelen las piernas y estoy cansado."
          }
        ],
        "mistakes": [
          {
            "wrong": "Me duele los pies.",
            "right": "Me duelen los pies.",
            "why": "Los pies es plural y requiere duelen."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Deberías y tendrías que permiten expresar consejos; tienes que presenta una obligación más fuerte y es mejor + infinitivo ofrece una alternativa. En una consulta, pide que repitan la indicación y confirma horario o documento. Las escenas de esta semana son ficticias y no ofrecen tratamientos: el objetivo es comprender una cita y explicar cómo te sientes."
        ],
        "examples": [
          {
            "es": "Deberías pedir una cita para explicar lo que te pasa."
          },
          {
            "es": "Es mejor confirmar la hora antes de salir."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "grammar-gap",
        "type": "gap",
        "prompt": "Completa según la forma y el contexto indicados.",
        "items": [
          {
            "q": "Me ___ las rodillas. (doler)",
            "answers": [
              [
                "duelen"
              ]
            ]
          },
          {
            "q": "___ cansada desde ayer. (estar, yo)",
            "answers": [
              [
                "Estoy"
              ]
            ]
          },
          {
            "q": "Es mejor ___ la hora. (confirmar)",
            "answers": [
              [
                "confirmar"
              ]
            ]
          }
        ]
      },
      {
        "id": "grammar-transform",
        "type": "transform",
        "prompt": "Reformulación controlada: respeta las palabras y el orden indicados. En las tareas abiertas posteriores puedes elegir otras formulaciones.",
        "items": [
          {
            "source": "Me duele el pie.",
            "instruction": "Pon el pie en plural y ajusta doler; conserva Me al principio.",
            "answers": [
              "Me duelen los pies."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Tienes que pedir una cita.",
            "instruction": "Sustituye Tienes que por Deberías; conserva pedir una cita al final, sin añadir sujeto.",
            "answers": [
              "Deberías pedir una cita."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Estoy mareado. Empezó ayer.",
            "instruction": "Conserva Estoy mareado y añade desde ayer al final.",
            "answers": [
              "Estoy mareado desde ayer."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión como un bloque y úsala después con un dato propio.",
    "groups": [
      {
        "title": "Acciones y relaciones",
        "items": [
          {
            "es": "pedir una cita",
            "en": "make an appointment"
          },
          {
            "es": "la sala de espera",
            "en": "waiting room"
          },
          {
            "es": "tener tos",
            "en": "have a cough"
          },
          {
            "es": "estar mareado",
            "en": "feel dizzy"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "doler la espalda",
            "en": "have a sore back"
          },
          {
            "es": "desde hace dos días",
            "en": "for two days"
          },
          {
            "es": "explicar un síntoma",
            "en": "describe a symptom"
          },
          {
            "es": "llevar la tarjeta",
            "en": "bring the card"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "vocabulary-match",
        "type": "match",
        "prompt": "Relaciona cada expresión con su significado; después úsala oralmente en una situación nueva.",
        "pairs": [
          {
            "left": "pedir una cita",
            "right": "make an appointment"
          },
          {
            "left": "la sala de espera",
            "right": "waiting room"
          },
          {
            "left": "tener tos",
            "right": "have a cough"
          },
          {
            "left": "estar mareado",
            "right": "feel dizzy"
          },
          {
            "left": "doler la espalda",
            "right": "have a sore back"
          },
          {
            "left": "desde hace dos días",
            "right": "for two days"
          },
          {
            "left": "explicar un síntoma",
            "right": "describe a symptom"
          },
          {
            "left": "llevar la tarjeta",
            "right": "bring the card"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "La x no siempre representa el mismo sonido",
    "explanation": [
      "En taxi la x suele representar una secuencia cercana a ks; en México se pronuncia como la j. Xochimilco empieza con un sonido de s en el uso habitual. Aprende estos nombres como palabras completas. Una voz sintética puede variar; no la tomes como verificación de una región."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Voy en taxi a la consulta.",
          "q": "¿Qué transporte se menciona?",
          "options": [
            "Taxi",
            "Tren"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Mi compañera vive en México.",
          "q": "En México, la x se pronuncia normalmente como…",
          "options": [
            "La j de jefe",
            "La x de taxi"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Necesito un taxi para ir al centro.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Mi amiga vive en México.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "La cita es después de la excursión.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "La cita de Laura",
    "context": "Escena original de comunicación cotidiana. Escucha antes de abrir la transcripción. La reproducción disponible puede usar síntesis del navegador; no acredita una variedad regional ni una grabación humana.",
    "speakers": [
      {
        "id": "a",
        "name": "Persona A",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Persona B",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Buenos días. Quería pedir una cita. Me duele la espalda desde hace tres días y estoy bastante cansada. Es mi primera visita al centro. ¿Hay alguna hora disponible mañana?"
      },
      {
        "speaker": "b",
        "text": "Tenemos una cita a las once y veinte y otra a las cuatro. Para la primera visita tiene que pasar por recepción diez minutos antes. ¿Qué horario le viene mejor?"
      },
      {
        "speaker": "a",
        "text": "A las cuatro, por favor. Por la mañana trabajo. ¿Ha dicho que tengo que llegar a las cuatro menos diez? ¿Y qué documento debo llevar? No tengo la tarjeta del centro."
      },
      {
        "speaker": "b",
        "text": "Sí, a las tres y cincuenta. Traiga su documento y en recepción le explicarán la tarjeta. Es mejor anotar las preguntas para la consulta. Si necesita cambiar la cita, llame a este mismo número."
      },
      {
        "speaker": "a",
        "text": "Gracias. Entonces mañana a las tres y cincuenta en recepción y la cita a las cuatro. Voy a apuntarlo ahora."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «La cita de Laura» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué quiere Laura?",
              "options": [
                "Cambiar un medicamento",
                "Comprar una tarjeta",
                "Pedir una primera cita"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Pedir una primera cita»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué hace la persona de recepción?",
              "options": [
                "Diagnostica la causa del dolor",
                "Indica un tratamiento concreto",
                "Ofrece horarios e instrucciones de llegada"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Ofrece horarios e instrucciones de llegada."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Segunda escucha: anota los datos necesarios; después comprueba tus respuestas.",
        "exercise": {
          "id": "listen-detail",
          "type": "choice",
          "prompt": "Localiza dos datos concretos en «La cita de Laura».",
          "items": [
            {
              "q": "¿A qué hora debe estar en recepción?",
              "options": [
                "A las once y veinte",
                "A las tres y cincuenta",
                "A las cuatro y diez"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «A las tres y cincuenta»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué parte del cuerpo menciona?",
              "options": [
                "La espalda",
                "Los pies",
                "El cuello"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «La espalda»; comprueba la frase completa antes de volver a responder."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Tercera escucha: atiende a las formas y a cómo se comprueba la información. La transcripción es opcional después de escuchar.",
        "exercise": {
          "id": "listen-notice",
          "type": "choice",
          "prompt": "Interpreta las palabras clave de «La cita de Laura».",
          "items": [
            {
              "q": "¿Para qué repite Laura el horario al final?",
              "options": [
                "Para confirmar que lo ha entendido",
                "Para rechazarlo",
                "Para pedir otra cita"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Para confirmar que lo ha entendido»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué diferencia hay entre las dos últimas horas que repite Laura?",
              "options": [
                "Horario de apertura y cierre",
                "Llegada a recepción y comienzo de la cita",
                "Dos citas médicas distintas"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: Llegada a recepción y comienzo de la cita."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Antes de tu primera visita",
    "genre": "Hoja informativa de un centro ficticio",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Para pedir una cita en el Centro Alameda, llama de ocho a doce o pasa por recepción. Indica si es tu primera visita y explica brevemente el motivo. No necesitas contar todos los detalles a la persona de recepción. Ella te dirá qué profesional está disponible y qué horarios puedes elegir. Si no entiendes la hora, pide que la repitan antes de terminar la llamada.",
      "El día de la cita, llega diez minutos antes y lleva la tarjeta que te han pedido. En la consulta puedes usar una lista corta: qué te duele, desde cuándo y qué actividades te resultan difíciles. Si tomas algún medicamento, lleva la información para enseñársela al profesional. No cambies un tratamiento por lo que lees en una actividad de idiomas.",
      "Si no puedes asistir, avisa al centro para que otra persona use ese horario. Puedes cambiar la cita sin explicar detalles personales por mensaje. Es suficiente indicar que necesitas otro día y preguntar qué opciones hay."
    ],
    "glossary": [
      {
        "es": "pedir una cita",
        "en": "make an appointment"
      },
      {
        "es": "la sala de espera",
        "en": "waiting room"
      },
      {
        "es": "tener tos",
        "en": "have a cough"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Antes de tu primera visita» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué recomienda la hoja si no entiendes la hora?",
            "options": [
              "Llegar cuando puedas",
              "Buscar otro centro",
              "Pedir que la repitan"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Pedir que la repitan»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué contiene la lista para la consulta?",
            "options": [
              "Una receta elegida por internet",
              "Síntomas, duración y actividades difíciles",
              "Todos los datos de la familia"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «Síntomas, duración y actividades difíciles»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Antes de tu primera visita» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Describir síntomas básicos, pedir una cita y comprobar instrucciones de una consulta. Explica qué frase lo demuestra y qué pregunta harías después.",
            "model": "Primero selecciono la información que necesita mi interlocutor. Después explico el dato con mis palabras y señalo dónde aparece; si falta información, la pregunto sin inventarla.",
            "checklist": [
              "Seleccionas información que aparece en el texto.",
              "Separas un dato confirmado de una pregunta o una opinión."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Vuelve al texto: interpreta estas dos frases y relaciona sus formas con el propósito del mensaje.",
      "items": [
        {
          "quote": "Para pedir una cita en el Centro Alameda, llama de ocho a doce o pasa por recepción.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "El día de la cita, llega diez minutos antes y lleva la tarjeta que te han pedido.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        }
      ]
    }
  },
  "practice": {
    "intro": "La práctica combina reconstrucción, decisiones y producción breve. Haz la recuperación antes de volver a los apuntes. Para un reto con pareja, usa el modelo y las condiciones escritas como apoyo. Si estudias a solas, interpreta los dos papeles y graba primero las preguntas; después responde sin leer el modelo. Las voces sintéticas no verifican acentos regionales ni matices expresivos.",
    "exercises": [
      {
        "id": "transfer-order",
        "type": "order",
        "prompt": "Reconstruye estas intervenciones de la misión; después explica cuándo las usarías.",
        "items": [
          {
            "words": [
              "Me",
              "duele",
              "la",
              "cabeza",
              "desde",
              "esta",
              "mañana."
            ]
          },
          {
            "words": [
              "Deberías",
              "pedir",
              "una",
              "cita",
              "para",
              "explicar",
              "lo",
              "que",
              "te",
              "pasa."
            ]
          }
        ]
      },
      {
        "id": "transfer-context",
        "type": "context",
        "prompt": "Elige una respuesta que haga avanzar la gestión, no solo una frase correcta.",
        "items": [
          {
            "options": [
              "¿Puedo cambiar el tratamiento por mi cuenta?",
              "¿Tengo que estar diez minutos antes en recepción?",
              "Llegaré una hora después sin avisar."
            ],
            "answer": 1,
            "why": "Comprueba el contexto y los datos de la escena: ¿Tengo que estar diez minutos antes en recepción?.",
            "context": "No has entendido si debes llegar a la hora de la cita.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Pide una cita por teléfono. Tu primer horario no está disponible: elige otro, confirma la hora de llegada y pregunta por el documento.",
            "q": "En esta interacción de «Pedir una cita y explicar qué pasa», ¿cómo compruebas que puedes continuar?",
            "options": [
              "Resumir el acuerdo o la información y pedir confirmación.",
              "Dar por supuesto que la otra persona ha entendido todos los detalles."
            ],
            "answer": 0,
            "why": "Confirmar evita que una diferencia de interpretación quede sin resolver."
          }
        ]
      },
      {
        "id": "guided-production",
        "type": "open",
        "prompt": "Ensaya dos partes breves antes de producir tu texto completo.",
        "items": [
          {
            "prompt": "Para «Pedir una cita y explicar qué pasa», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Buenos días.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Pide una cita por teléfono. Tu primer horario no está disponible: elige otro, confirma la hora de llegada y pregunta por el documento.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-11",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 11. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 13: Describe una videollamada en directo y después tus hábitos: qué estás haciendo, qué acabas de terminar, qué has empezado a hacer, qué has dejado de hacer, qué vuelves a intentar y qué sigues practicando. Usa leyendo o durmiendo. Enlaza con Pablo y un bolígrafo manteniendo su ortografía.",
            "model": "Estoy leyendo un mensaje. Acabo de terminar una actividad. He empezado a estudiar temprano y he dejado de usar el móvil de noche. Vuelvo a escribir a mano y sigo practicando con Pablo. Tengo un bolígrafo nuevo.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 11→13: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Estoy leyendo un mensaje. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe un mensaje al centro para cambiar una cita. Explica brevemente el motivo, indica desde cuándo tienes la dificultad, propone dos horarios y pide confirmación. Usa información ficticia si prefieres.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Me duele la cabeza desde esta mañana.",
      "Me duelen las piernas y estoy cansado.",
      "Deberías pedir una cita para explicar lo que te pasa.",
      "Es mejor confirmar la hora antes de salir."
    ],
    "model": [
      "Buenos días. Tengo una cita el jueves a las nueve, pero no puedo asistir a esa hora. Me duele un pie desde el lunes y me resulta difícil llegar en transporte público. Una amiga puede acompañarme por la tarde. ¿Podrían cambiar la cita al jueves después de las cuatro o al viernes por la mañana? También quería confirmar qué documento debo llevar. Muchas gracias por su ayuda. Espero su respuesta. Si esos horarios no están disponibles, díganme qué otras opciones tienen durante la próxima semana."
    ],
    "checklist": [
      "El destinatario puede entender el propósito sin preguntar de qué hablas.",
      "Incluyes todos los datos pedidos y no inventas confirmaciones.",
      "Los verbos y pronombres se refieren a las personas y tiempos correctos.",
      "Relacionas las ideas y mantienes un trato coherente.",
      "Relees y corriges al menos una frase después de comparar con el modelo."
    ],
    "words": [
      80,
      120
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no con un texto completo. Habla, escucha tu grabación local si quieres y repite una parte más claramente.",
    "tasks": [
      {
        "title": "Tu intervención con un propósito",
        "prompt": "En una consulta ficticia, explica dos síntomas, su duración y una actividad que te cuesta hacer. Responde a una pregunta de aclaración.",
        "prep": [
          "Elige tres datos y ordénalos.",
          "Prepara una frase inicial y un cierre que invite a responder."
        ],
        "seconds": 90,
        "selfCheck": [
          "Se entiende la situación y el orden de las ideas.",
          "Mantengo claras las palabras clave y reformulo si hace falta."
        ]
      },
      {
        "title": "Interacción con un cambio",
        "prompt": "Pide una cita por teléfono. Tu primer horario no está disponible: elige otro, confirma la hora de llegada y pregunta por el documento.",
        "prep": [
          "Prepara una pregunta de seguimiento.",
          "Imagina una respuesta inesperada y una alternativa."
        ],
        "seconds": 90,
        "selfCheck": [
          "Escucho y respondo a la necesidad del otro.",
          "Confirmo un dato o acuerdo y cedo el turno."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La clase continúa el trabajo: lleva tu versión revisada y una duda concreta, no una lista de respuestas.",
    "cards": [
      {
        "move": "Presenta",
        "task": "En una consulta ficticia, explica dos síntomas, su duración y una actividad que te cuesta hacer. Responde a una pregunta de aclaración."
      },
      {
        "move": "Negocia",
        "task": "Pide una cita por teléfono. Tu primer horario no está disponible: elige otro, confirma la hora de llegada y pregunta por el documento."
      },
      {
        "move": "Reformula",
        "task": "Pide al profesor que cambie un dato de la situación. Adapta tu respuesta sin leer el modelo y comprueba que el mensaje sigue siendo claro."
      },
      {
        "move": "Comprueba",
        "task": "El profesor resume lo que entendió. Corrige una diferencia de información y repite una frase cuyo sonido o ritmo quieras mejorar."
      }
    ],
    "bring": "Tu borrador revisado, tres palabras clave para hablar y una pregunta sobre la misión."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Me ___ la garganta. (doler)",
        "answers": [
          [
            "duele"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Me duelen las manos ___ ayer.",
        "answers": [
          [
            "desde"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Estoy fiebre desde el lunes.",
        "answers": [
          "Tengo fiebre desde el lunes."
        ],
        "why": "Fiebre se combina con tener, no con estar."
      },
      {
        "type": "order",
        "words": [
          "Deberías",
          "confirmar",
          "la",
          "hora",
          "de",
          "la",
          "consulta."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué frase comprueba una instrucción?",
        "options": [
          "¿Le gusta la mañana?",
          "¿Ha dicho diez minutos antes?"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿A qué hora conviene llegar?",
        "options": [
          "A las cuatro y cincuenta",
          "A las cinco y diez",
          "A las cuatro y diez"
        ],
        "answer": 0,
        "why": "Comprueba el contexto y los datos de la escena: A las cuatro y cincuenta.",
        "type": "listen",
        "audio": "La cita es a las cinco, pero llegue diez minutos antes."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 13: En una consulta ficticia, explica dos síntomas, su duración y una actividad que te cuesta hacer. Responde a una pregunta de aclaración.",
        "model": "Buenos días. Tengo una cita el jueves a las nueve, pero no puedo asistir a esa hora. Me duele un pie desde el lunes y me resulta difícil llegar en transporte público. Una amiga puede acompañarme por la tarde. ¿Podrían cambiar la cita al jueves después de las cuatro o al viernes por la mañana? También quería confirmar qué documento debo llevar. Muchas gracias por su ayuda. Espero su respuesta. Si esos horarios no están disponibles, díganme qué otras opciones tienen durante la próxima semana.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 13: Pide una cita por teléfono. Tu primer horario no está disponible: elige otro, confirma la hora de llegada y pregunta por el documento. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Describir síntomas básicos, pedir una cita y comprobar instrucciones de una consulta.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Pedir una cita y explicar qué pasa» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
