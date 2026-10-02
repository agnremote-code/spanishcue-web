import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w17: Module = {
  "id": "a2-17",
  "level": "a2",
  "week": 17,
  "kind": "core",
  "title": "Un paquete para el viernes",
  "subtitle": "Seguir un envío y explicar motivo, destinatario, finalidad y plazo de una compra.",
  "stop": {
    "place": "Cartago",
    "country": "Costa Rica"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.por-para",
    "a2.voc.compras-online",
    "a2.pron.palabras-largas",
    "a2.fun.finalidad",
    "a2.lis.atencion-cliente"
  ],
  "reviewObjectives": [
    "a2.rev.checkpoint-3",
    "a2.spk.resolver-problema",
    "a2.fun.transmitir-acuerdo"
  ],
  "prerequisites": [
    "a2-16"
  ],
  "goal": {
    "canDo": "Puedo seguir un envío y explicar motivo, destinatario, finalidad y plazo de una compra.",
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
        "heading": "Un paquete para el viernes · formas que necesitas",
        "body": [
          "Para indica finalidad (para estudiar), destinatario (para mi hermana), destino (salgo para Cartago) y plazo (para el viernes). Por puede expresar causa (por el retraso), medio (por correo), intercambio (por veinte euros) y lugar de paso (por el centro). Aprende cada relación con su contexto, no como una traducción única."
        ],
        "support": [
          "Para commonly gives purpose, recipient, destination or deadline; por can give reason, means, exchange or a route through a place."
        ],
        "examples": [
          {
            "es": "Compré la mochila para un viaje y la necesito para el viernes."
          },
          {
            "es": "Pagué veinte euros por el envío urgente."
          }
        ],
        "mistakes": [
          {
            "wrong": "Compré una silla por estudiar.",
            "right": "Compré una silla para estudiar.",
            "why": "Estudiar es la finalidad de la compra, por eso usamos para."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "En atención al cliente distingue fecha de envío y fecha de entrega. Explica para qué necesitas el objeto y por qué pides una solución. En un menú telefónico escucha primero las opciones; después elige según tu problema. Si el plazo no es seguro, pide confirmación y valora una alternativa."
        ],
        "examples": [
          {
            "es": "Te mando el recibo por correo."
          },
          {
            "es": "El paquete pasó por el centro de distribución."
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
            "q": "Necesito el documento ___ el lunes. (plazo)",
            "answers": [
              [
                "para"
              ]
            ]
          },
          {
            "q": "Te envío la confirmación ___ correo. (medio)",
            "answers": [
              [
                "por"
              ]
            ]
          },
          {
            "q": "Compré esta mesa ___ trabajar. (finalidad)",
            "answers": [
              [
                "para"
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
            "source": "La caja es un regalo. Su destinataria es Ana.",
            "instruction": "Mantén La caja es un regalo y añade para Ana al final.",
            "answers": [
              "La caja es un regalo para Ana."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "La entrega llegó tarde debido a las obras.",
            "instruction": "Sustituye debido a por por, sin cambiar el resto.",
            "answers": [
              "La entrega llegó tarde por las obras."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Pagué treinta euros. Recibí una mochila.",
            "instruction": "Mantén Pagué treinta euros y añade por una mochila al final.",
            "answers": [
              "Pagué treinta euros por una mochila."
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
            "es": "el número de seguimiento",
            "en": "tracking number"
          },
          {
            "es": "la fecha de entrega",
            "en": "delivery date"
          },
          {
            "es": "el envío urgente",
            "en": "express delivery"
          },
          {
            "es": "el punto de recogida",
            "en": "collection point"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "devolver una compra",
            "en": "return a purchase"
          },
          {
            "es": "solicitar un reembolso",
            "en": "request a refund"
          },
          {
            "es": "guardar el recibo",
            "en": "keep the receipt"
          },
          {
            "es": "un producto defectuoso",
            "en": "a faulty product"
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
            "left": "el número de seguimiento",
            "right": "tracking number"
          },
          {
            "left": "la fecha de entrega",
            "right": "delivery date"
          },
          {
            "left": "el envío urgente",
            "right": "express delivery"
          },
          {
            "left": "el punto de recogida",
            "right": "collection point"
          },
          {
            "left": "devolver una compra",
            "right": "return a purchase"
          },
          {
            "left": "solicitar un reembolso",
            "right": "request a refund"
          },
          {
            "left": "guardar el recibo",
            "right": "keep the receipt"
          },
          {
            "left": "un producto defectuoso",
            "right": "a faulty product"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "No perder sílabas en una gestión",
    "explanation": [
      "En seguimiento, distribución y devolución cada sílaba ayuda a identificar una opción. Practica despacio y después en una frase completa. Marca el acento principal sin cortar la palabra. Cuando das un número de pedido, agrupa los dígitos y pide confirmación."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Quiero solicitar una devolución.",
          "q": "¿Qué gestión pide?",
          "options": [
            "Una devolución",
            "Una distribución"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "El paquete está en distribución.",
          "q": "¿En qué proceso está?",
          "options": [
            "Distribución",
            "Devolución"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Quería conocer el seguimiento del pedido.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Está en el centro de distribución.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Necesito información sobre la devolución.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Un menú con tres caminos",
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
        "text": "Gracias por llamar a Compras Cercanas. Para conocer el estado de un envío, pulse uno. Para cambiar o devolver un producto, pulse dos. Para hablar de un cobro, pulse tres. Tenga a mano su número de pedido."
      },
      {
        "speaker": "b",
        "text": "Buenos días. He pulsado uno porque mi pedido aparece como entregado, pero no lo tengo. Es una lámpara para mi escritorio. La compré por internet y pagué la entrega a domicilio."
      },
      {
        "speaker": "a",
        "text": "Voy a comprobarlo. El mensaje indica que está en el punto de recogida de la plaza. El repartidor dejó un aviso ayer. ¿Ha recibido un mensaje por correo o en el teléfono?"
      },
      {
        "speaker": "b",
        "text": "Por correo, sí, pero no vi la dirección. La necesito para el lunes. ¿Puedo recogerla el sábado? Paso por la plaza después de mi clase."
      },
      {
        "speaker": "a",
        "text": "Sí, el punto abre los sábados de diez a dos. Lleve el código del mensaje. Si prefiere otra entrega, podemos organizarla para el martes."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Un menú con tres caminos» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué problema explica la persona?",
              "options": [
                "Ha pagado dos veces",
                "No tiene un pedido que aparece entregado",
                "Quiere cambiar de lámpara por su color"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «No tiene un pedido que aparece entregado»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué solución puede servir antes del plazo?",
              "options": [
                "Cancelar la clase del lunes",
                "Recoger el pedido el sábado",
                "Esperar a la entrega del martes"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: Recoger el pedido el sábado."
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
          "prompt": "Localiza dos datos concretos en «Un menú con tres caminos».",
          "items": [
            {
              "q": "¿Qué opción del menú eligió?",
              "options": [
                "Uno",
                "Dos",
                "Tres"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Uno»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Cuándo puede recoger la lámpara?",
              "options": [
                "El sábado después de las seis",
                "Solo el martes",
                "El sábado de diez a dos"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «El sábado de diez a dos»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Un menú con tres caminos».",
          "items": [
            {
              "q": "Para mi escritorio expresa…",
              "options": [
                "Causa del retraso",
                "Medio de pago",
                "Destino o uso del objeto"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Destino o uso del objeto»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "En paso por la plaza, por indica…",
              "options": [
                "Lugar de paso",
                "Destinatario",
                "Plazo"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Lugar de paso."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "El regalo que llegó al punto equivocado",
    "genre": "Seguimiento de envío y correo",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Estado del pedido 482: el paquete salió del almacén el lunes a las ocho. El martes pasó por el centro de distribución. El miércoles a las cinco llegó al punto de recogida Norte. Estará disponible allí durante cinco días. Para recogerlo, lleva el aviso y el documento indicado en la confirmación. El punto abre de nueve a seis de lunes a viernes.",
      "Mensaje de Sofía a la tienda: Compré una mochila para mi hermana y pagué un suplemento por la entrega en casa. La necesito para el viernes porque ese día celebramos su cumpleaños. Hoy he recibido un aviso para recogerla en el punto Norte, pero trabajo hasta las seis y no puedo llegar antes del cierre. ¿Podrían explicar por qué no la han entregado en la dirección del pedido?",
      "Respuesta: Sentimos el cambio. El repartidor no pudo entrar en la calle por unas obras. Podemos enviarla de nuevo a su casa mañana por la mañana o devolver el suplemento del envío. Confirme qué opción prefiere antes de las ocho de esta tarde."
    ],
    "glossary": [
      {
        "es": "el número de seguimiento",
        "en": "tracking number"
      },
      {
        "es": "la fecha de entrega",
        "en": "delivery date"
      },
      {
        "es": "el envío urgente",
        "en": "express delivery"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «El regalo que llegó al punto equivocado» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Por qué no recibió Sofía el paquete en casa?",
            "options": [
              "No pagó el envío",
              "La calle estaba cerrada por obras",
              "Escribió otra dirección"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «La calle estaba cerrada por obras»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué debe hacer antes de las ocho?",
            "options": [
              "Elegir una de las soluciones",
              "Recoger el paquete en el almacén",
              "Comprar otra mochila"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Elegir una de las soluciones»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «El regalo que llegó al punto equivocado» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Seguir un envío y explicar motivo, destinatario, finalidad y plazo de una compra. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "Estado del pedido 482: el paquete salió del almacén el lunes a las ocho.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Mensaje de Sofía a la tienda: Compré una mochila para mi hermana y pagué un suplemento por la entrega en casa.",
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
              "Compré",
              "la",
              "mochila",
              "para",
              "un",
              "viaje",
              "y",
              "la",
              "necesito",
              "para",
              "el",
              "viernes."
            ]
          },
          {
            "words": [
              "Te",
              "mando",
              "el",
              "recibo",
              "por",
              "correo."
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
              "Pagué por la entrega en casa; ¿pueden reintentarlo o devolver el suplemento?",
              "Pagaré otra vez sin preguntar qué pasó.",
              "La mochila es bonita; no importa el plazo."
            ],
            "answer": 0,
            "why": "Comprueba el contexto y los datos de la escena: Pagué por la entrega en casa; ¿pueden reintentarlo o devolver el suplemento?.",
            "context": "La entrega a domicilio se cambió a un punto de recogida.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Escucha tres opciones de atención que inventa tu compañero. Elige una, justifícala y pide que te repitan el plazo antes de aceptar.",
            "q": "En esta interacción de «Un paquete para el viernes», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Un paquete para el viernes», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Buenos días.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Escucha tres opciones de atención que inventa tu compañero. Elige una, justifícala y pide que te repitan el plazo antes de aceptar.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-15",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 15. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 17: Resuelve por teléfono un cambio de viaje: el tren llega dos horas tarde y la recepción cierra antes. Explica qué está pasando, una acción recién terminada y una alternativa con si. Pide una solución cortés y repite el acuerdo para tu compañero.",
            "model": "Estamos esperando el tren y acabamos de recibir un aviso. Si llega después de las ocho, no podremos entrar por recepción. ¿Podría explicarnos cómo recoger la llave? Entonces llamamos media hora antes.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 15→17: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Estamos esperando el tren y acabamos de recibir un aviso. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Escribe una reclamación por una entrega que no cumple lo acordado. Incluye el uso del objeto, el plazo, el importe del envío y dos soluciones que aceptarías.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Compré la mochila para un viaje y la necesito para el viernes.",
      "Pagué veinte euros por el envío urgente.",
      "Te mando el recibo por correo.",
      "El paquete pasó por el centro de distribución."
    ],
    "model": [
      "Buenos días. Compré una lámpara para estudiar y pagué cinco euros por la entrega en casa. La necesito para el lunes, pero el aviso dice que está en un punto de recogida lejos de mi barrio. No puedo ir por mi horario de trabajo. ¿Podrían enviarla a mi dirección el sábado? Si no es posible, me gustaría recogerla en otro punto y recibir el reembolso del suplemento. Les envío el recibo por correo. Gracias por confirmar una solución. Si necesitan algún dato más del pedido, puedo enviarlo en otro mensaje. Quería resolverlo antes del viernes para organizar mi horario y estar en casa cuando llegue el repartidor."
    ],
    "checklist": [
      "El destinatario puede entender el propósito sin preguntar de qué hablas.",
      "Incluyes todos los datos pedidos y no inventas confirmaciones.",
      "Los verbos y pronombres se refieren a las personas y tiempos correctos.",
      "Relacionas las ideas y mantienes un trato coherente.",
      "Relees y corriges al menos una frase después de comparar con el modelo."
    ],
    "words": [
      100,
      140
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no con un texto completo. Habla, escucha tu grabación local si quieres y repite una parte más claramente.",
    "tasks": [
      {
        "title": "Tu intervención con un propósito",
        "prompt": "Explica un problema de envío en una llamada: qué compraste, para quién o para qué, cuándo lo necesitas y por qué no sirve la entrega actual.",
        "prep": [
          "Elige tres datos y ordénalos.",
          "Prepara una frase inicial y un cierre que invite a responder."
        ],
        "seconds": 120,
        "selfCheck": [
          "Se entiende la situación y el orden de las ideas.",
          "Mantengo claras las palabras clave y reformulo si hace falta."
        ]
      },
      {
        "title": "Interacción con un cambio",
        "prompt": "Escucha tres opciones de atención que inventa tu compañero. Elige una, justifícala y pide que te repitan el plazo antes de aceptar.",
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
        "task": "Explica un problema de envío en una llamada: qué compraste, para quién o para qué, cuándo lo necesitas y por qué no sirve la entrega actual."
      },
      {
        "move": "Negocia",
        "task": "Escucha tres opciones de atención que inventa tu compañero. Elige una, justifícala y pide que te repitan el plazo antes de aceptar."
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
        "q": "El regalo es ___ mi padre. (destinatario)",
        "answers": [
          [
            "para"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Cancelaron la entrega ___ la lluvia. (causa)",
        "answers": [
          [
            "por"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Te mando el recibo para correo.",
        "answers": [
          "Te mando el recibo por correo."
        ],
        "why": "Por indica el medio: por correo."
      },
      {
        "type": "order",
        "words": [
          "Necesito",
          "el",
          "paquete",
          "para",
          "el",
          "jueves."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué opción buscas para saber dónde está un paquete?",
        "options": [
          "Cambio de talla",
          "Estado del envío"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Para qué pasará por la plaza?",
        "options": [
          "Para comprar un billete",
          "Para devolver un teléfono",
          "Para recoger un pedido"
        ],
        "answer": 2,
        "why": "Comprueba el contexto y los datos de la escena: Para recoger un pedido.",
        "type": "listen",
        "audio": "Pasaré por la plaza para recoger el pedido."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 17: Explica un problema de envío en una llamada: qué compraste, para quién o para qué, cuándo lo necesitas y por qué no sirve la entrega actual.",
        "model": "Buenos días. Compré una lámpara para estudiar y pagué cinco euros por la entrega en casa. La necesito para el lunes, pero el aviso dice que está en un punto de recogida lejos de mi barrio. No puedo ir por mi horario de trabajo. ¿Podrían enviarla a mi dirección el sábado? Si no es posible, me gustaría recogerla en otro punto y recibir el reembolso del suplemento. Les envío el recibo por correo. Gracias por confirmar una solución. Si necesitan algún dato más del pedido, puedo enviarlo en otro mensaje. Quería resolverlo antes del viernes para organizar mi horario y estar en casa cuando llegue el repartidor.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 17: Escucha tres opciones de atención que inventa tu compañero. Elige una, justifícala y pide que te repitan el plazo antes de aceptar. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Seguir un envío y explicar motivo, destinatario, finalidad y plazo de una compra.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Un paquete para el viernes» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
