import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w01: Module = {
  "id": "a2-01",
  "level": "a2",
  "week": 1,
  "kind": "core",
  "title": "Lo que ya he vivido",
  "subtitle": "Intercambiar experiencias y decidir una actividad nueva para el fin de semana.",
  "stop": {
    "place": "San José",
    "country": "Costa Rica"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.perfecto-compuesto",
    "a2.gram.participios-irregulares",
    "a2.gram.ya-todavia",
    "a2.voc.experiencias-viaje",
    "a2.pron.sinalefa-compuestos",
    "a2.fun.experiencias",
    "a2.spk.nunca-he"
  ],
  "reviewObjectives": [
    "a1.gram.ir-a-inf",
    "a1.gram.gustar"
  ],
  "prerequisites": [
    "a1-20"
  ],
  "goal": {
    "canDo": "Puedo intercambiar experiencias y decidir una actividad nueva para el fin de semana.",
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
        "heading": "Lo que ya he vivido · formas que necesitas",
        "body": [
          "El perfecto conecta una experiencia con el presente. Forma: he, has, ha, hemos, habéis, han + participio. En -ar usamos -ado; en -er e -ir, -ido. El participio no cambia con la persona: ellas han viajado. No se separan el auxiliar y el participio con un pronombre: lo he visto."
        ],
        "support": [
          "The perfect uses a present form of haber plus an unchanged participle. Ya means it has happened; todavía no means it remains pending."
        ],
        "examples": [
          {
            "es": "Esta semana he probado una sopa nueva."
          },
          {
            "es": "¿Has hecho alguna vez una excursión de noche?"
          }
        ],
        "mistakes": [
          {
            "wrong": "Hemos escribido una carta.",
            "right": "Hemos escrito una carta.",
            "why": "Escribir tiene el participio irregular escrito; el auxiliar indica la persona."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Pregunta con alguna vez sin exigir una fecha. Ya indica que algo está hecho; todavía no deja abierta una posibilidad; nunca niega una experiencia. Los participios hecho, dicho, visto, escrito, puesto, vuelto, abierto y roto son irregulares. Para una fecha terminada aparecerá el indefinido en la próxima semana. El uso del perfecto varía entre regiones."
        ],
        "examples": [
          {
            "es": "Ya hemos vuelto, pero todavía no hemos escrito la reseña."
          },
          {
            "es": "Nunca he visto un volcán de cerca."
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
            "q": "Nosotros ___ probado el café local.",
            "answers": [
              [
                "hemos"
              ]
            ]
          },
          {
            "q": "¿Tú has ___ la exposición? (ver)",
            "answers": [
              [
                "visto"
              ]
            ]
          },
          {
            "q": "Ella todavía no ha ___ el mensaje. (escribir)",
            "answers": [
              [
                "escrito"
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
            "source": "Yo he abierto la puerta.",
            "instruction": "Sustituye Yo por Nosotros y ajusta solo el auxiliar; conserva el resto.",
            "answers": [
              "Nosotros hemos abierto la puerta."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "He visitado ese museo.",
            "instruction": "Añade Nunca al principio, sin añadir otro sujeto; conserva el resto.",
            "answers": [
              "Nunca he visitado ese museo."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "¿Haces senderismo?",
            "instruction": "Pregunta en pretérito perfecto. Conserva senderismo y coloca alguna vez al final; no añadas sujeto.",
            "answers": [
              "¿Has hecho senderismo alguna vez?"
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
            "es": "probar un plato",
            "en": "taste a dish"
          },
          {
            "es": "hacer una excursión",
            "en": "go on an excursion"
          },
          {
            "es": "visitar un mercado",
            "en": "visit a market"
          },
          {
            "es": "subir a un mirador",
            "en": "go up to a viewpoint"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "reservar una plaza",
            "en": "book a place"
          },
          {
            "es": "quedarse sin entradas",
            "en": "find there are no tickets left"
          },
          {
            "es": "volver de un viaje",
            "en": "return from a trip"
          },
          {
            "es": "tener ganas de conocer",
            "en": "feel like discovering"
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
            "left": "probar un plato",
            "right": "taste a dish"
          },
          {
            "left": "hacer una excursión",
            "right": "go on an excursion"
          },
          {
            "left": "visitar un mercado",
            "right": "visit a market"
          },
          {
            "left": "subir a un mirador",
            "right": "go up to a viewpoint"
          },
          {
            "left": "reservar una plaza",
            "right": "book a place"
          },
          {
            "left": "quedarse sin entradas",
            "right": "find there are no tickets left"
          },
          {
            "left": "volver de un viaje",
            "right": "return from a trip"
          },
          {
            "left": "tener ganas de conocer",
            "right": "feel like discovering"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Enlazar sin perder el auxiliar",
    "explanation": [
      "La h no suena. En he estado o lo he visto, enlaza las vocales sin borrar el auxiliar: el oyente necesita entender quién ha hecho la acción. Escucha primero y repite a velocidad cómoda; no hace falta copiar un acento regional."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "He estado allí.",
          "q": "¿Qué auxiliar oyes?",
          "options": [
            "he",
            "ha"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Ha ido al parque.",
          "q": "¿Qué auxiliar aparece?",
          "options": [
            "ha",
            "han"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "He estado en el puerto.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Lo he visto desde aquí.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Ha ido con su prima.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Una actividad para los dos",
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
        "text": "¿Has hecho alguna vez una visita al vivero del barrio? Este mes han organizado un taller para aprender a cuidar plantas. Yo he visto el anuncio, pero todavía no he reservado."
      },
      {
        "speaker": "b",
        "text": "Sí, ya he estado allí con mi hermano. Hemos comprado unas plantas pequeñas y la encargada nos ha explicado cómo cuidarlas. Nunca he hecho el taller. ¿Es necesario llevar algo?"
      },
      {
        "speaker": "a",
        "text": "He escrito un mensaje y ya me han contestado. Hay que llevar un recipiente vacío. Ellos ponen la tierra. Todavía no han dicho cuánto cuesta; lo publican mañana."
      },
      {
        "speaker": "b",
        "text": "Entonces esperamos hasta mañana. Yo ya he puesto un recordatorio en el móvil. Si el precio nos parece bien, reservamos dos plazas. ¡Nunca he cultivado una planta desde una semilla!"
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Una actividad para los dos» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué quieren hacer?",
              "options": [
                "Vender plantas",
                "Visitar a un hermano",
                "Participar en un taller"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Participar en un taller»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué tienen en común las dos personas?",
              "options": [
                "Experiencia dirigiendo el taller",
                "Necesidad de vender un recipiente",
                "Interés por una actividad con plantas"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Interés por una actividad con plantas."
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
          "prompt": "Localiza dos datos concretos en «Una actividad para los dos».",
          "items": [
            {
              "q": "¿Qué información falta?",
              "options": [
                "El material que deben llevar",
                "El precio",
                "El lugar"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «El precio»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Quién ha visitado ya el vivero?",
              "options": [
                "La segunda persona",
                "Ninguna persona",
                "Solo la primera persona"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «La segunda persona»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Una actividad para los dos».",
          "items": [
            {
              "q": "¿Qué significa todavía no he reservado?",
              "options": [
                "La reserva sigue pendiente",
                "La reserva está cancelada",
                "La reserva está pagada"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «La reserva sigue pendiente»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué marca ya me han contestado?",
              "options": [
                "Una respuesta imposible",
                "Una respuesta recibida",
                "Una respuesta pendiente"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: Una respuesta recibida."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "El tablón de las primeras veces",
    "genre": "Mensajes de un grupo de ocio",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Soy Mar y busco compañía para una actividad diferente. Este mes he visitado el mercado central y he probado dos platos que no conocía. También he hecho un recorrido por mi barrio con una guía. Ha sido interesante: he visto edificios por los que paso todos los días y he descubierto sus historias. Todavía no he subido al mirador porque ha llovido mucho esta semana. ¿Alguien tiene ganas de ir el sábado?",
      "Hola, Mar. Soy Iván. Ya he estado en el mirador, pero nunca he ido al jardín de mariposas. He escrito al centro y todavía no han abierto las reservas para el domingo. Mi hermana ha dicho que las abren mañana. Podemos mirar juntos los horarios. He puesto un aviso en el grupo; si no hay plazas, elegimos el mirador. No he comprado entradas para ninguna de las dos actividades."
    ],
    "glossary": [
      {
        "es": "probar un plato",
        "en": "taste a dish"
      },
      {
        "es": "hacer una excursión",
        "en": "go on an excursion"
      },
      {
        "es": "visitar un mercado",
        "en": "visit a market"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «El tablón de las primeras veces» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué actividad sigue pendiente para Mar?",
            "options": [
              "Visitar el mercado",
              "Hacer el recorrido del barrio",
              "Subir al mirador"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Subir al mirador»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Por qué Iván no tiene una reserva?",
            "options": [
              "No quiere ir con Mar",
              "Todavía no han abierto las reservas",
              "Ha perdido la entrada"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «Todavía no han abierto las reservas»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «El tablón de las primeras veces» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Intercambiar experiencias y decidir una actividad nueva para el fin de semana. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "Soy Mar y busco compañía para una actividad diferente.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Hola, Mar.",
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
              "Esta",
              "semana",
              "he",
              "probado",
              "una",
              "sopa",
              "nueva."
            ]
          },
          {
            "words": [
              "Ya",
              "hemos",
              "vuelto,",
              "pero",
              "todavía",
              "no",
              "hemos",
              "escrito",
              "la",
              "reseña."
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
              "He estado en el mirador, así que no te pregunto nada.",
              "Nunca he ido al vivero; ¿te apetece conocerlo?",
              "Voy al mirador todos los días; ya he ido."
            ],
            "answer": 1,
            "why": "Comprueba el contexto y los datos de la escena: Nunca he ido al vivero; ¿te apetece conocerlo?.",
            "context": "Ya has estado en el mirador y quieres proponer algo nuevo.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Tu compañero ya conoce el museo que propones. Pregúntale por otra experiencia, reacciona con interés y acuerda una actividad nueva.",
            "q": "En esta interacción de «Lo que ya he vivido», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Lo que ya he vivido», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Hola, grupo.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Tu compañero ya conoce el museo que propones. Pregúntale por otra experiencia, reacciona con interés y acuerda una actividad nueva.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "bridge-a1",
        "type": "open",
        "prompt": "Recupera dos recursos de A1 antes de contar experiencias.",
        "items": [
          {
            "prompt": "Para el grupo de ocio, di qué actividad te gusta y qué vas a hacer el próximo domingo. Distingue el gusto de la intención.",
            "model": "Me gusta caminar junto al río. El domingo voy a hacer una ruta con mi hermana.",
            "checklist": [
              "Usas me gusta + infinitivo.",
              "Usas ir a + infinitivo para un plan."
            ]
          },
          {
            "prompt": "Pregunta a otra persona por sus gustos y propón un plan que tenga sentido con su respuesta.",
            "model": "¿Te gusta cocinar? Podemos ir al taller; voy a preguntar si quedan plazas.",
            "checklist": [
              "Preguntas antes de proponer.",
              "Tu plan responde a la preferencia."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe al grupo de ocio: cuenta dos experiencias de este mes, una actividad que nunca has hecho y una propuesta. Pregunta por la experiencia de otra persona.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Esta semana he probado una sopa nueva.",
      "¿Has hecho alguna vez una excursión de noche?",
      "Ya hemos vuelto, pero todavía no hemos escrito la reseña.",
      "Nunca he visto un volcán de cerca."
    ],
    "model": [
      "Hola, grupo. Este mes he visitado un mercado nuevo y he probado un plato de maíz. Nunca he hecho una ruta en bicicleta por la ciudad. Todavía no he comprado una bicicleta, pero puedo alquilarla. Ya he visto que hay una ruta corta cerca del río. ¿Alguien la ha hecho alguna vez? Me gustaría ir el domingo por la mañana. Si les interesa, podemos mirar el precio juntos."
    ],
    "checklist": [
      "El destinatario puede entender el propósito sin preguntar de qué hablas.",
      "Incluyes todos los datos pedidos y no inventas confirmaciones.",
      "Los verbos y pronombres se refieren a las personas y tiempos correctos.",
      "Relacionas las ideas y mantienes un trato coherente.",
      "Relees y corriges al menos una frase después de comparar con el modelo."
    ],
    "words": [
      60,
      100
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no con un texto completo. Habla, escucha tu grabación local si quieres y repite una parte más claramente.",
    "tasks": [
      {
        "title": "Tu intervención con un propósito",
        "prompt": "Cuenta tres experiencias reales y una inventada; no digas cuál es falsa. Después responde cuándo, dónde y con quién ocurrió una de ellas.",
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
        "prompt": "Tu compañero ya conoce el museo que propones. Pregúntale por otra experiencia, reacciona con interés y acuerda una actividad nueva.",
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
        "task": "Cuenta tres experiencias reales y una inventada; no digas cuál es falsa. Después responde cuándo, dónde y con quién ocurrió una de ellas."
      },
      {
        "move": "Negocia",
        "task": "Tu compañero ya conoce el museo que propones. Pregúntale por otra experiencia, reacciona con interés y acuerda una actividad nueva."
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
        "q": "Yo ___ hecho la reserva.",
        "answers": [
          [
            "he"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Mi amiga ha ___ de su viaje. (volver)",
        "answers": [
          [
            "vuelto"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Hemos ponido la mesa.",
        "answers": [
          "Hemos puesto la mesa."
        ],
        "why": "Escrito es el participio irregular de escribir."
      },
      {
        "type": "order",
        "words": [
          "Ya",
          "he",
          "abierto",
          "la",
          "ventana."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué pregunta invita a contar una experiencia?",
        "options": [
          "¿A qué hora abre la tienda?",
          "¿Has dormido alguna vez en una tienda de campaña?"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué experiencia niega la persona?",
        "options": [
          "Haber probado el postre",
          "Haber visitado una tienda",
          "Haber cocinado hoy"
        ],
        "answer": 0,
        "why": "Comprueba el contexto y los datos de la escena: Haber probado el postre.",
        "type": "listen",
        "audio": "Nunca he probado ese postre. ¿Y tú?"
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 1: Cuenta tres experiencias reales y una inventada; no digas cuál es falsa. Después responde cuándo, dónde y con quién ocurrió una de ellas.",
        "model": "Hola, grupo. Este mes he visitado un mercado nuevo y he probado un plato de maíz. Nunca he hecho una ruta en bicicleta por la ciudad. Todavía no he comprado una bicicleta, pero puedo alquilarla. Ya he visto que hay una ruta corta cerca del río. ¿Alguien la ha hecho alguna vez? Me gustaría ir el domingo por la mañana. Si les interesa, podemos mirar el precio juntos.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 1: Tu compañero ya conoce el museo que propones. Pregúntale por otra experiencia, reacciona con interés y acuerda una actividad nueva. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Intercambiar experiencias y decidir una actividad nueva para el fin de semana.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Lo que ya he vivido» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
