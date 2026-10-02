import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w14: Module = {
  "id": "a2-14",
  "level": "a2",
  "week": 14,
  "kind": "core",
  "title": "Una reserva con un problema",
  "subtitle": "Leer condiciones de una reserva y pedir un cambio de manera cortés y precisa.",
  "stop": {
    "place": "Copán",
    "country": "Honduras"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.condicional-cortesia",
    "a2.voc.hotel-transporte",
    "a2.pron.cortesia-entonacion",
    "a2.fun.reclamar",
    "a2.wri.correo-reserva",
    "a2.read.condiciones"
  ],
  "reviewObjectives": [
    "a2.gram.futuro-simple",
    "a2.gram.si-presente",
    "a2.voc.tecnologia-futuro",
    "a2.pron.vocales-atonas",
    "a2.fun.predecir-prometer",
    "a2.read.horoscopo-predicciones"
  ],
  "prerequisites": [
    "a2-13"
  ],
  "goal": {
    "canDo": "Puedo leer condiciones de una reserva y pedir un cambio de manera cortés y precisa.",
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
        "heading": "Una reserva con un problema · formas que necesitas",
        "body": [
          "Podría, me gustaría y quería son fórmulas para pedir con cortesía: ¿podría cambiar la fecha?, quería confirmar la reserva. No necesitas construir toda una hipótesis para usarlas. Con usted, conserva las formas de tercera persona. Explica el problema con un dato concreto y termina con una petición realizable."
        ],
        "support": [
          "Quería, me gustaría and podría soften requests. State the concrete problem, ask for a possible solution and confirm the final price."
        ],
        "examples": [
          {
            "es": "Quería confirmar si el desayuno está incluido."
          },
          {
            "es": "Me gustaría cambiar la fecha de entrada."
          }
        ],
        "mistakes": [
          {
            "wrong": "Me gustaría cambia la fecha.",
            "right": "Me gustaría cambiar la fecha.",
            "why": "Después de me gustaría se usa infinitivo."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Antes de reclamar, localiza fechas, precios, servicios incluidos y condiciones. Una reclamación A2 puede tener cuatro partes: reserva, problema, efecto y solución. Evita una acusación general. Si la respuesta no resuelve tu necesidad, pregunta por otra opción y confirma el precio final por escrito."
        ],
        "examples": [
          {
            "es": "¿Podría darme una habitación más tranquila?"
          },
          {
            "es": "La confirmación dice dos noches, pero necesito tres."
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
            "q": "Me gustaría ___ la reserva. (confirmar)",
            "answers": [
              [
                "confirmar"
              ]
            ]
          },
          {
            "q": "¿___ mostrarme otra habitación? (poder, usted, cortesía)",
            "answers": [
              [
                "Podría"
              ]
            ]
          },
          {
            "q": "Quería saber ___ el desayuno está incluido.",
            "answers": [
              [
                "si"
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
            "source": "Quiero otra habitación.",
            "instruction": "Sustituye Quiero por Me gustaría; conserva otra habitación sin añadir otro verbo.",
            "answers": [
              "Me gustaría otra habitación."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Muéstreme la habitación.",
            "instruction": "Empieza la pregunta con ¿Podría y usa mostrarme la habitación a continuación; no añadas usted ni por favor.",
            "answers": [
              "¿Podría mostrarme la habitación?"
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Necesito cambiar la fecha.",
            "instruction": "Sustituye Necesito por Quería; conserva cambiar la fecha.",
            "answers": [
              "Quería cambiar la fecha."
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
            "es": "la fecha de entrada",
            "en": "check-in date"
          },
          {
            "es": "la fecha de salida",
            "en": "check-out date"
          },
          {
            "es": "el desayuno incluido",
            "en": "breakfast included"
          },
          {
            "es": "una habitación doble",
            "en": "a double room"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "cambiar una reserva",
            "en": "change a booking"
          },
          {
            "es": "cancelar sin coste",
            "en": "cancel free of charge"
          },
          {
            "es": "el billete de ida",
            "en": "outbound ticket"
          },
          {
            "es": "el mostrador de información",
            "en": "information desk"
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
            "left": "la fecha de entrada",
            "right": "check-in date"
          },
          {
            "left": "la fecha de salida",
            "right": "check-out date"
          },
          {
            "left": "el desayuno incluido",
            "right": "breakfast included"
          },
          {
            "left": "una habitación doble",
            "right": "a double room"
          },
          {
            "left": "cambiar una reserva",
            "right": "change a booking"
          },
          {
            "left": "cancelar sin coste",
            "right": "cancel free of charge"
          },
          {
            "left": "el billete de ida",
            "right": "outbound ticket"
          },
          {
            "left": "el mostrador de información",
            "right": "information desk"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Cortesía que se oye en frases completas",
    "explanation": [
      "Una petición cortés no depende solo de hablar bajo. Agrupa la explicación y la pregunta, mantén un ritmo calmado y deja espacio para la respuesta. Al practicar, compara quiero cambiar con quería cambiar; el cambio de forma es tan importante como la curva de la voz."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Quería confirmar la fecha de salida.",
          "q": "¿Qué fórmula utiliza?",
          "options": [
            "Quería",
            "Quiero"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "¿Podría repetir el precio, por favor?",
          "q": "¿Qué solicita?",
          "options": [
            "Repetir el precio",
            "Cancelar sin preguntar"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Quería consultar un detalle de la reserva.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "¿Podría mostrarme otra habitación, por favor?",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Gracias; entonces el precio no cambia.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "La habitación junto a la cocina",
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
        "text": "Buenas tardes. Estoy en la habitación doce. Quería comentar un problema: en la confirmación pedí una habitación tranquila, pero esta está junto a la cocina y hay ruido desde muy temprano."
      },
      {
        "speaker": "b",
        "text": "Lo siento. La cocina empieza a trabajar a las seis y media. Hoy tenemos una habitación en la segunda planta, al otro lado del edificio. Es más pequeña, pero está lejos de la cocina."
      },
      {
        "speaker": "a",
        "text": "Me gustaría verla antes de cambiar. Necesito una mesa para trabajar una hora por la noche. ¿Tiene escritorio? ¿Y el precio es el mismo que el de mi reserva?"
      },
      {
        "speaker": "b",
        "text": "Tiene una mesa pequeña junto a la ventana. El precio no cambia. Puede verla ahora y, si le sirve, le ayudamos con las maletas. También puedo ofrecerle el salón hasta las diez para trabajar."
      },
      {
        "speaker": "a",
        "text": "Gracias. ¿Podría enseñármela, por favor? Después confirmamos el cambio."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «La habitación junto a la cocina» y reconoce la intención.",
          "items": [
            {
              "q": "¿Cuál es el motivo de la reclamación?",
              "options": [
                "El precio del autobús",
                "El ruido de la cocina",
                "La falta de desayuno"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «El ruido de la cocina»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué actitud muestra la persona que reclama?",
              "options": [
                "Exige una habitación gratuita",
                "Está dispuesta a valorar otra habitación",
                "Rechaza todas las opciones antes de verlas"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: Está dispuesta a valorar otra habitación."
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
          "prompt": "Localiza dos datos concretos en «La habitación junto a la cocina».",
          "items": [
            {
              "q": "¿Qué necesita la persona para trabajar?",
              "options": [
                "Una mesa",
                "Un balcón",
                "Un aparcamiento"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Una mesa»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué pasa con el precio si cambia?",
              "options": [
                "Sube diez euros",
                "Se devuelve todo",
                "No cambia"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «No cambia»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «La habitación junto a la cocina».",
          "items": [
            {
              "q": "¿Qué petición deja la decisión abierta?",
              "options": [
                "Ya he cancelado",
                "No quiero ninguna habitación",
                "Me gustaría verla antes de cambiar"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Me gustaría verla antes de cambiar»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué palabra indica que el cambio depende de la decisión de la persona?",
              "options": [
                "Si le sirve",
                "Lo siento",
                "Hoy tenemos"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Si le sirve."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Casa del Patio: condiciones de estancia",
    "genre": "Confirmación de reserva",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Reserva de ejemplo: dos personas, entrada el 18 de abril y salida el 20. Habitación doble: 64 euros por noche. El precio incluye desayuno y uso del patio. No incluye aparcamiento. La recepción abre de ocho de la mañana a diez de la noche. La entrada a la habitación es a partir de las tres de la tarde; antes de esa hora se pueden dejar las maletas sin coste.",
      "Puedes cambiar las fechas una vez sin coste si avisas al menos siete días antes de la entrada y hay habitaciones disponibles. Si la nueva fecha tiene otro precio, recibirás una propuesta antes de confirmar el cambio. Para cancelar sin coste debes avisar al menos diez días antes. Después de ese plazo se cobra la primera noche.",
      "Si tu autobús llega después de las diez, escribe al alojamiento antes del viaje. Te enviarán instrucciones para recoger la llave. No publiques el código de acceso en un grupo abierto. Al salir, deja la llave en recepción antes de las once."
    ],
    "glossary": [
      {
        "es": "la fecha de entrada",
        "en": "check-in date"
      },
      {
        "es": "la fecha de salida",
        "en": "check-out date"
      },
      {
        "es": "el desayuno incluido",
        "en": "breakfast included"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Casa del Patio: condiciones de estancia» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué servicio no está incluido?",
            "options": [
              "El patio",
              "El aparcamiento",
              "El desayuno"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «El aparcamiento»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Un cambio de fechas garantiza el mismo precio?",
            "options": [
              "No, pueden enviar otro precio",
              "Sí, siempre",
              "Solo si llegas antes de las tres"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «No, pueden enviar otro precio»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Casa del Patio: condiciones de estancia» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Leer condiciones de una reserva y pedir un cambio de manera cortés y precisa. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "Reserva de ejemplo: dos personas, entrada el 18 de abril y salida el 20.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Puedes cambiar las fechas una vez sin coste si avisas al menos siete días antes de la entrada y hay habitaciones disponibles.",
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
              "Quería",
              "confirmar",
              "si",
              "el",
              "desayuno",
              "está",
              "incluido."
            ]
          },
          {
            "words": [
              "¿Podría",
              "darme",
              "una",
              "habitación",
              "más",
              "tranquila?"
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
              "¿El precio es el mismo que el de mi reserva?",
              "Me la llevo sin preguntar por el precio.",
              "Quería cambiar ayer mañana siempre."
            ],
            "answer": 0,
            "why": "Comprueba el contexto y los datos de la escena: ¿El precio es el mismo que el de mi reserva?.",
            "context": "La habitación alternativa puede servir, pero falta confirmar el coste.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "La primera alternativa cuesta más. Pregunta por otra opción, compara las condiciones y confirma el acuerdo final con el empleado.",
            "q": "En esta interacción de «Una reserva con un problema», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Una reserva con un problema», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Buenos días.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: La primera alternativa cuesta más. Pregunta por otra opción, compara las condiciones y confirma el acuerdo final con el empleado.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-12",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 12. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 14: Planifica una reunión por videollamada: diferencia intención, predicción y promesa. Incluye haré, tendré y podremos. Prepara dos condiciones reales con si + presente. Tu pareja identifica qué está decidido y qué es solo una predicción. Pronuncia comunicación y universidad con todas sus vocales.",
            "model": "Voy a preparar la reunión. Creo que tendremos diez participantes. Haré una prueba y te enviaré el enlace. Si falla la comunicación, podremos llamar por teléfono. La universidad confirmará el horario.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 12→14: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Voy a preparar la reunión. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Escribe al alojamiento: identifica la reserva, explica una diferencia entre lo prometido y lo recibido, pide una solución concreta y solicita confirmación del precio.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Quería confirmar si el desayuno está incluido.",
      "Me gustaría cambiar la fecha de entrada.",
      "¿Podría darme una habitación más tranquila?",
      "La confirmación dice dos noches, pero necesito tres."
    ],
    "model": [
      "Buenos días. Tengo una reserva para dos personas del 18 al 20 de abril. En la confirmación aparece una habitación tranquila, pero la que nos han dado está junto a la cocina. Hay ruido desde las seis y media y no podemos descansar bien. ¿Podrían cambiarnos a otra habitación? Me gustaría saber si tiene una mesa y si el precio será el mismo. Podemos hacer el cambio esta tarde. Muchas gracias por su atención. Si no hay ninguna habitación disponible, me gustaría conocer otra solución para descansar mejor durante las dos noches."
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
        "prompt": "Explica en recepción un problema con una reserva sin leer un correo completo. Da dos datos verificables y una solución deseada.",
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
        "prompt": "La primera alternativa cuesta más. Pregunta por otra opción, compara las condiciones y confirma el acuerdo final con el empleado.",
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
        "task": "Explica en recepción un problema con una reserva sin leer un correo completo. Da dos datos verificables y una solución deseada."
      },
      {
        "move": "Negocia",
        "task": "La primera alternativa cuesta más. Pregunta por otra opción, compara las condiciones y confirma el acuerdo final con el empleado."
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
        "q": "¿Podría ___ la nueva fecha por escrito? (confirmar)",
        "answers": [
          [
            "confirmar"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Me ___ saber el precio total. (gustar, cortesía)",
        "answers": [
          [
            "gustaría"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Quería cambiando mi reserva.",
        "answers": [
          "Quería cambiar mi reserva."
        ],
        "why": "Quería se combina aquí con infinitivo: cambiar."
      },
      {
        "type": "order",
        "words": [
          "El",
          "precio",
          "incluye",
          "desayuno,",
          "pero",
          "no",
          "aparcamiento."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué debes comprobar antes de aceptar un cambio?",
        "options": [
          "El precio final y las condiciones",
          "Solo el color de la habitación"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué quiere saber quien pregunta?",
        "options": [
          "El precio del desayuno",
          "El número de la habitación",
          "La hora de cierre de recepción"
        ],
        "answer": 2,
        "why": "Comprueba el contexto y los datos de la escena: La hora de cierre de recepción.",
        "type": "listen",
        "audio": "¿Podría decirme a qué hora cierra la recepción?"
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 14: Explica en recepción un problema con una reserva sin leer un correo completo. Da dos datos verificables y una solución deseada.",
        "model": "Buenos días. Tengo una reserva para dos personas del 18 al 20 de abril. En la confirmación aparece una habitación tranquila, pero la que nos han dado está junto a la cocina. Hay ruido desde las seis y media y no podemos descansar bien. ¿Podrían cambiarnos a otra habitación? Me gustaría saber si tiene una mesa y si el precio será el mismo. Podemos hacer el cambio esta tarde. Muchas gracias por su atención. Si no hay ninguna habitación disponible, me gustaría conocer otra solución para descansar mejor durante las dos noches.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 14: La primera alternativa cuesta más. Pregunta por otra opción, compara las condiciones y confirma el acuerdo final con el empleado. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Leer condiciones de una reserva y pedir un cambio de manera cortés y precisa.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Una reserva con un problema» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
